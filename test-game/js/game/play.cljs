(ns game.play
  (:require [game.assets :as assets]
            [game.chans :as chans]
            [game.pixi :as graphics]
            [cljs.core.async :refer [>! <!]]
            [cognitect.transit :as t]
            [clojure.set :refer [difference union]]
            [dommy.core :as dommy]
            [hipo.core :as hipo]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce pixi js/PIXI)

(defonce ortho-tiles {0 [false true false true]
                      1 [true false false false]
                      2 [false false true true]
                      3 [true false true true]
                      4 [true false false true]})

(defonce hex-tiles {})

(defn req-action [actn]
  (go (>! chans/action actn)))

(defn mouse-fn [evt]
  (.preventDefault evt)
  (req-action [:rotate (.-pageX evt) (.-pageY evt)])
  (.preventDefault evt)
  false)

(defn touch-fn [e]
  (let [touch (aget (.-changedTouches e) 0)]
    (req-action [:rotate (.-pageX touch) (.-pageY touch)])
    (.preventDefault e)
    false))


;; proper pixi sprite visible
(defn display-connection! [tile connected?]
  (set! (.-visible (:conn-sprite tile)) connected?)
  (set! (.-visible (:disc-sprite tile)) (not connected?))
  tile)

(defn rotate-tile [tile]
  (let [n (count (:conn tile))
        angle (/ (* Math/PI 2) n)]
    (graphics/rotate! (:conn-sprite tile) angle)
    (graphics/rotate! (:disc-sprite tile) angle)
    (update-in tile [:conn] #(take n (drop (dec n) (cycle %))))))


;; look up tile id in connectivity map and apply initial rotations

;; extract tile-type information from game state
(defn ttype [{:keys [tile-type]} & stuff] tile-type)

;; calculate neighbor of tile #id in direction #dir, starting from left=0 and going clockwise
(defmulti nb ttype)
(defmethod nb :ortho [{:keys [width height tiles] :as level-data} id dir]
  (case dir
    0 (if (> (mod id width) 0) (nth tiles (dec id)))    ; left
    1 (if (>= id width) (nth tiles (- id width)))       ; up
    2 (if (> (mod (inc id) width) 0) (nth tiles (inc id))) ; right
    3 (if (>= (dec (* width height)) (+ id width)) (nth tiles (+ id width))))) ; down

;; calculate upper-left corner of containing rectangle
(defmulti tile->pixel ttype)
(defmethod tile->pixel :ortho [{:keys [width height base-unit]} tile]
  (let [id (if (map? tile) (:id tile) tile)
        row (int (/ id width))
        col (mod id width)]
    {:x (+ col 0.5)
     :y (+ row 0.5)}))

;; calculate tile at pixel position
(defmulti pixel->tile ttype)
(defmethod pixel->tile :ortho [{:keys [base-unit width height]} x y]
  {:post [(<= 0 % (dec (* width height)))]}
  (let [i (int (/ y base-unit))
        j (int (/ x base-unit))]
    (+ (* i width) j)))


;; are a and b both connected?
(defn connected? [a b a-dir]
  (let [a-conn (:conn a)
        b-conn (:conn b)
        n-conns (count a-conn)
        b-dir (mod (+ a-dir (/ n-conns 2)) n-conns)]
    (and (nth a-conn a-dir) (nth b-conn b-dir))))

;; find all neighbors connected to tile
(defn all-neighbors [state {:keys [conn id] :as tile}]
  (set (filter identity
               (for [i (range (count conn))]
                 (if-let [neighbor (nb state id i)]
                   (if (connected? tile neighbor i)
                     neighbor))))))

;; identify all tiles connected to the start field and swap their "connected" graphics
(defn show-connected! [{:keys [tiles start] :as state}]
  (let [walk (fn walk [known unvisited this]
            (let [known (union known #{this})
                  neighbors (difference (all-neighbors state this) unvisited)
                  unvisited (difference (union unvisited neighbors)
                                        known)
                  next (first unvisited)]
              (if next
                (into (walk known unvisited next) #{this})
                #{this})))
        connected (walk #{} #{} (nth tiles start))]
    (doseq [tile tiles]
      (display-connection! tile (contains? connected tile)))
    state))

;; count number of possible connections of tile
(defn num-conns [tile]
  (count (filter true? (:conn tile))))

;; level is won if no tile has unconnected ends
(defn level-won? [{:keys [tiles] :as state}]
  (every? true?
          (map (fn [tile] (= (count (all-neighbors state tile))
                             (num-conns tile)))
               tiles)))

(defn mk-sprites [atlas type]
  (let [atlas (if (keyword? atlas) atlas (keyword atlas))
        textures [(assets/get-tex atlas (str "t" type ".png"))
                  (assets/get-tex atlas (str "s" type ".png"))]
        sprites (map #(graphics/mk-sprite % :size :w 1.01 :h 1.01 :anchor :x 0.5 :y 0.5) textures)]
    {:disc-sprite (first sprites)
     :conn-sprite (second sprites)}))

(defn mk-tile [{:keys [tile-type atlas]} tile]
  (-> (into (mk-sprites atlas (:t tile))
            {:conn (get (if (= (keyword tile-type) :ortho) ortho-tiles hex-tiles) (:t tile))})
      (#(loop [r (:r tile)
               tile %]
          (if (< 0 r)
            (recur (dec r) (rotate-tile tile))
            tile)))))

(defn place-tiles! [{:keys [tiles base-unit] :as state}]
  (doseq [tile tiles]
    (let [{:keys [x y]} (:pos tile)]
      (graphics/update-sprite! (:conn-sprite tile)
                               :pos :x x :y y
                               )
      (graphics/update-sprite! (:disc-sprite tile)
                               :pos :x x :y y
                               )))
  state)

(defn show-tiles! [{:keys [tiles stage] :as state}]
  (doseq [tile tiles]
    (.addChild stage (:conn-sprite tile))
    (.addChild stage (:disc-sprite tile)))
  (req-action [:redraw])
  state)

(defmulti board-aspect ttype)
(defmethod board-aspect :ortho [state]
  (/ (:width state) (:height state)))

(defmulti base-unit ttype)
(defmethod base-unit :ortho [state]
  (/ (:cnv-w state) (:width state)))

(defn finalize-resizing [state]
  (-> (assoc state :base-unit (base-unit state))
      (#(update-in % [:tiles] (partial map (fn [tile] (assoc tile :pos (tile->pixel % tile))))))
      (update-in [:tiles] vec)
      (place-tiles!)))
(defn screen-mode [_] (if (> (.-innerWidth js/window)
                             (.-innerHeight js/window))
                        :landscape
                        :portrait))
(defn center-in [big small]
  (/ (- big small) 2))

(defn resize [{:keys [width height stage renderer] :as state}]
  (let [aspect (board-aspect state)
        screen-w (.-innerWidth js/window)
        screen-h (.-innerHeight js/window)
        [cnv-w cnv-h] (if (< screen-w screen-h)
                        [screen-w (/ screen-w aspect)]  ; portrait
                        [(* screen-h aspect) screen-h]) ; landscape
        [left top] (if (< screen-w screen-h)
                     [0 (center-in screen-h cnv-h)]
                     [(center-in screen-w cnv-w) 0])
        cnv (dommy/sel1 :#canvas)]
    (.resize renderer cnv-w cnv-h)
    (dommy/set-style! cnv :left (str left "px") :top (str top "px"))
    (.set (.-scale stage) (/ cnv-w width) (/ cnv-h height))
    (-> (assoc state
               :cnv-w cnv-w
               :cnv-h cnv-h
               :left left
               :top top)
        (finalize-resizing))))

;; read level information from memory or json and create tileset
(defn init-from-level [level-data]
  (let [{:keys [tiles start]} level-data]
    (-> (update-in level-data [:atlas] keyword)
        (update-in [:tile-type] keyword)
        (update-in [:tiles] (partial map (partial mk-tile level-data)))
        (update-in [:tiles] (partial map-indexed (fn [idx tile] (assoc tile :id idx))))
        (assoc :time 0))))

;; proceed one step in time
(defn time-tick [state]
  (update-in state [:time] inc))

;; user interaction functions
(defn exit-level [_]
  (assets/play-sound :level)
  (go (>! chans/state [:play (:body (<! (http/get "level/ortho_test2.json" {:as :json})))])))

(defmulti action (fn [event _] (first event)))

;; game canvas has been clicked, rotate chosen tile
(defmethod action :rotate [event state]
  (let [[_ x y] event
        x (- x (:left state))
        y (- y (:top state))
        state (update-in state [:tiles (pixel->tile state x y)] rotate-tile)]
    (assets/play-sound (nth [:click1 :click2 :click3] (:snd state)))
    (show-connected! state)
    (req-action [:redraw]) ; request canvas redraw
    (if (level-won? state)
      (req-action [:won]))
    (-> (update-in state [:moves] inc)
        (update-in [:snd] #(mod (inc %) 3)))))

(defmethod action :redraw [_ {:keys [renderer stage] :as state}]
  (.render renderer stage)
  state)

(defmethod action :resize [_ state]
  (action [:redraw] (resize state)))

(defmethod action :won [_ state]
  (dommy/unlisten! (dommy/sel1 :#canvas) :click mouse-fn :touchstart touch-fn)
  (dommy/listen! (dommy/sel1 :#level) :click exit-level :touchstart exit-level)
  (js/alert (str "Won after " (:moves state) " moves, " (/ (:time state) 60) " seconds"))
  state)

(defn init []
  (dommy/append!
   (dommy/sel1 :body)
   (hipo/create [:span.view {:id "level"}]))
  (graphics/mk-view 500 500 :#level))

(defn enter [state]
  (dommy/set-style! (dommy/sel1 :#level) :left "0")
  (dommy/unlisten! (dommy/sel1 :#level) :click exit-level :touchstart exit-level)
  (dommy/listen! (dommy/sel1 :#canvas)
                 :click mouse-fn :touchstart touch-fn)
  (dommy/listen! js/window :resize (fn [_] (req-action [:resize])))
  (-> (assoc state :stage (pixi.Container.))
      (into (init-from-level (first (:enter-info state))))
      (assoc :snd 0)
      (resize)
      (assoc :moves 0)
      (show-tiles!)
      ((fn [st]
         (let [{:keys [x y]} (tile->pixel st (:start st))]
          (.addChild (:stage st)
                     (graphics/mk-sprite (assets/get-tex (:atlas st) "star.png")
                                         :anchor :x 0.5 :y 0.5
                                         :pos :x x :y y
                                         :size :w 1 :h 1)))
         st))
      (update-in [:tiles] vec)
      (show-connected!)))

(defn leave [state]
  (dommy/set-style! (dommy/sel1 :#level) :left "100%")
  (.destroy (:stage state))
  (dissoc state :stage))

(defn mk-state []
  (into (init)
        {:enter enter
         :leave leave
         :process-evt action
         :time-tick time-tick
         :draw (fn [state] state)}))
