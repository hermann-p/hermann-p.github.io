(ns soccer.play
  (:require [soccer.channels :as chans]
            [cljs.core.async :refer [>!]]
            [soccer.pixi :refer [get-pos set-size set-pos set-anchor set-scale mk-sprite update-pos! update-sprite!] :as pixi]
            [soccer.assets :as assets]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;; base units
(defonce g 9.81)      ; gravity
(defonce dt (/ 1 60)) ; frame time step

;;-------------------------------------------------------------------------------------------
;; Physics and mathematics stuff

(defn dist [a b]
  (let [[x1 y1] (get-pos a)
        [x2 y2] (get-pos b)
        dx (- x1 x2)
        dy (- y1 y2)]
    (Math/sqrt (+ (* dx dx) (* dy dy)))))

(defn apply-gravity
  "Add gravity acceleration to y-speed"  [ball]
  
  (update ball :vy + (* g dt)))

(defn update-pos
  "Apply speed vectors to ball"
  [ball]
  (-> (update ball :x + (* dt (:vx ball)))
      (update :y + (* dt (:vy ball)))))

(defn collision
  "When ball is in range of our foot, set its speed to the position
  difference vector"
  [{:keys [ball-size foot-size foot]} ball]
  (if (pos? (:vy ball))
    (let [min-dist (+ ball-size foot-size)
          cur-dist (dist foot ball)]
      (if (< cur-dist min-dist)
        (do (assets/play-sound :hit-ball)
            (let [dx (- (:x ball) (:x foot))
                  dy (- (:y ball) (:y foot))]
              (assoc ball :vx (* 20 dx) :vy (* 10 dy))))
        ball))
    ball))

(defn on-screen?
  "Is the ball still visible?"
  [{:keys [x-tiles y-tiles] :as game} {:keys [x y] :as ball}]
  (every? true? [(< -1 x (inc x-tiles))
                 (< y (inc y-tiles))]))

(defn score-ball
  [game ball]
  (if-not (on-screen? game ball)
    (if (< (:y-tiles game) (:y ball))
      (assets/play-sound :sad)
      (assets/play-sound :cheer)))
  ball)

(defn register-entity! [{:keys [stage]} {:keys [sprite] :as en}]
  (.addChild stage sprite)
  en)

(defn remove-entity! [{:keys [stage]} {:keys [sprite] :as en}]
  (.removeChild stage sprite)
  en)

(defn mk-entity [t x y & args]
  {:sprite (apply mk-sprite (assets/get-tex t) :pos :x x :y y args)
   :x x
   :y y})

(defn mk-ball [x y r]
  (into {:vx 0 :vy 0}
        (mk-entity :ball x y
                   :size :w (* 2 r) :h (* 2 r)
                   :anchor :x 0.5 :y 0.5)))

;;-------------------------------------------------------------------------------------------
;; Coordinate transformation functions

(defn to-screen [x y {:keys [x-tiles y-tiles]}]
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)
        sx (* x (/ width x-tiles))
        sy (* y (/ height y-tiles))]
    [sx sy]))

(defn to-game [x y {:keys [x-tiles y-tiles]}]
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)
        gx (* x (/ x-tiles width))
        gy (* y (/ y-tiles height))]
    [gx gy]))

;;-------------------------------------------------------------------------------------------
;; Action event handlers

(defmulti action (fn [evt _] (first evt)))

(defmethod action :startdrag [[_ x y] game]
  (action [:drag x y] (assoc game :dragging true)))

(defmethod action :enddrag [_ game]
  (assoc game :dragging false))

(defmethod action :move [[_ x y] game]
  (if (:dragging game)
    (action [:drag x y] game)
    game))

(defmethod action :drag
  ;; move foot to mouse position
  [[_ x y] game]
  (let [[nx ny] (to-game x y game)]
    (assoc game :foot (assoc (:foot game) :x nx :y ny))))

(defmethod action :add-ball
  ;; spawn a new ball at random position
  [v {:keys [ball-size balls x-tiles] :as game}]
  (assoc game :balls (conj balls (register-entity! game
                                                   (pixi/update-sprite!
                                                    (mk-ball (rand x-tiles) -1 ball-size)
                                                    :layer (:fg-layer game))))))

;;-------------------------------------------------------------------------------------------
;; game state functions

(defn time-step [{:keys [balls time spawn-intervall] :as game}]
  (doseq [old-ball (filter (complement (partial on-screen? game)) balls)]
    (remove-entity! game old-ball))
  (if (= 0 (mod time spawn-intervall))
    (go (>! chans/event-chan [:add-ball])))
  (-> game
      (update :time inc)
      (assoc :balls
             (doall
              (map
               (comp (partial score-ball game)
                     update-pos
                     apply-gravity
                     (partial collision game))
               (filter (partial on-screen? game) balls))))))

(defn resize [{:keys [x-tiles stage balls foot] :as game}]
  (let [w (.-innerWidth js/window)
        h (.-innerHeight js/window)
        y-tiles (int (* x-tiles
                        (/ (.-innerHeight js/window) (.-innerWidth js/window))))
        sx (/ w x-tiles)
        sy (/ h y-tiles)]
    (dommy/set-attr! (dommy/sel1 :canvas)
                     :width w
                     :height h)
    (.set (.-scale stage) sx sy)
    (println "field:" (str x-tiles "x" y-tiles))
    (assoc game :y-tiles y-tiles)))

(defn enter [game]
  (let [x-tiles 20
        y-tiles (int (* x-tiles
                        (/ (.-innerHeight js/window) (.-innerWidth js/window))))
        foot-size 0.5
        display-list (pixi/mk-display-list)
        bg-layer (pixi/mk-layer -1)
        fg-layer (pixi/mk-layer 1)]
;    (register-entity! game (set-pos (mk-entity :evilos 0 0 1 1) :x 10 :y 4)) ;; test image
    (let [cnv (dommy/sel1 :canvas)]
      (dommy/listen! cnv :mousedown #(go (>! chans/event-chan
                                             [:startdrag (.-clientX %) (.-clientY %)])))
      (dommy/listen! cnv :mouseup   #(go (>! chans/event-chan
                                             [:enddrag (.-clientX %) (.-clientY %)])))
      (dommy/listen! cnv :touchmove #(go (>! chans/event-chan
                                             [:drag (.-clientX %) (.-clientY %)])))
      (dommy/listen! cnv :mousemove #(go (>! chans/event-chan
                                             [:move (.-clientX %) (.-clientY %)]))))
    (pixi/attach-list! display-list (:stage game))
    (-> (into game {:x-tiles x-tiles
                    :y-tiles y-tiles
                    :ball-size 0.7
                    :foot-size foot-size
                    :balls []
                    :time 1
                    :display-list display-list
                    :bg-layer bg-layer
                    :fg-layer fg-layer
                    :spawn-intervall (int (* 2.5 60))
                    :bg (register-entity! game
                                          (mk-entity :bg 0 0
                                                     :size :w x-tiles :h y-tiles
                                                     :layer bg-layer))
                    :foot (register-entity!
                           game
                           (mk-entity :foot 0 12
                                      :size :w (* 2 foot-size) :h (* 2 foot-size)
                                      :anchor :x 0.5 :y 0.5
                                      :layer fg-layer))})
        (resize))))

(defn leave [game]
  game)

(defn draw [{:keys [renderer stage foot balls] :as game}]
  (set-pos foot :x (:x foot) :y (:y foot))
  (doseq [ball balls]
    (set-pos ball :x (:x ball) :y (:y ball)))
  (.render renderer stage)
  game)

(defn mk-state [container]
  (into container {:enter enter
                   :leave leave
                   :time-tick time-step
                   :draw draw
                   :resize resize
                   :process-evt action}))
