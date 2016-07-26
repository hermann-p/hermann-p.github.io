(ns game.assets
  (:require [hipo.core :as hipo]
            [cljs.core.async :refer [<! take!]]
            [dommy.core :as dommy]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(defonce pixi js/PIXI)
(defonce Howl js/Howl)
(defonce url-list (atom []))
(defonce assets (atom {}))   ;; yes... we want the assets as mutables

(defn count-requested []
  (reduce + (map #(count (or (% @assets) [])) [:img :snd :atl])))

(defn count-loaded []
  (letfn [(is-ready? [[k v]] (:ready v))]
    (reduce + (map #(count (filter is-ready? (% @assets))) [:img :snd :atl]))))

(defn percent-done []
;  (println @assets)
  (let [total (count-requested)
        loaded (count-loaded)]
    (if-not (zero? total)
      (* 100 (/ loaded total))
      100)))

(defn ready? []
  (= (count-requested) (count-loaded)))

(defn asset-error! [type-key id]
  (println "Could not load" (if (= type-key :img) "image" "sound") id)
  (swap! assets #(assoc % type-key (dissoc (type-key @assets) id))))

(defn request [type-key id url]
  (swap! url-list #(conj % {:type-key type-key :id id :url url})))

(defn load-img [id url]
  (swap! assets #(assoc-in % [:img id] {:data nil}))
  (-> (.add pixi.loader url)
      (.load
       (fn on-load []
;         (println "image" url "loaded")
         (let [texture (.-texture (aget (.-resources pixi.loader) url))]
           (swap! assets #(assoc-in % [:img id] {:ready true
                                                 :data texture})))))))

(defn load-atlas [id url]
  (swap! assets #(assoc-in % [:atl id] {:data nil}))
  (-> (.add pixi.loader url)
      (.load
       (fn on-load []
         (println "atlas" id url "loaded")
         (let [atlas (aget (.-resources pixi.loader) url)]
          (swap! assets #(assoc-in % [:atl id] {:ready true
                                                :data atlas})))))))

(defn load-sound [id url]
  (swap! assets #(assoc-in % [:snd id] {:data nil}))
  (let [sound (Howl. (clj->js {:src [url]}))]
    (doto sound
      (.once "load" (fn []
                      (println "sound" url "loaded")
                      (swap! assets #(assoc-in % [:snd id] {:data sound :ready true}))))
      (.once "loaderror" (partial asset-error! :snd id)))))

;; (defn load-sound [id url]
;;   (when-not (:audio-ctx @assets)
;;     (println "assets: initializing AudioContext")
;;     (swap! assets #(assoc % :audio-ctx (or (js/AudioContext.) (js/webkitAudioContext.)))))
;;   (swap! assets #(assoc-in % [:snd id] {:data nil}))
;;   (go
;;     (let [ctx (:audio-ctx @assets)
;;           response (<! (http/get url {:response-type :array-buffer}))]
;;       (if (= 200 (:status response))
;;         (.decodeAudioData ctx (:body response)
;;                           (fn [buffer] (swap! assets #(assoc-in % [:snd id] {:data buffer
;;                                                                              :ready true})))
;;                           (fn []
;;                             (println "Error decoding" url)
;;                             (asset-error! :snd id)))
;;         (do (println "Error loading" url)
;;             (asset-error! :snd id))))))


(defn load-asset [{:keys [type-key id url]}]
;  (println id url "requested")
  (if-not (get-in @assets [type-key id])
    (case type-key
      :img (load-img id url)
      :snd (load-sound id url)
      :atl (load-atlas id url))))

(defn load []
  (doseq [asset @url-list]
    (load-asset asset)))

(defn request-all [reqmap]
  (assert (map? reqmap) "Expected asset map {:type [{:id ... :url ...} ...]}")
  (doseq [img (:img reqmap)]
    (load-asset {:type-ke :img :id (:id img) :url (:url img)}))
  (doseq [snd (:snd reqmap)]
    (load-asset {:type-key :snd :id (:id snd) :url (:url snd)}))
  (doseq [atl (:atl reqmap)]
    (load-asset {:type-key :atl :id (:id atl) :url (:url atl)})))

(defn get-asset [type-key id]
  (if-let [asset (get-in @assets [type-key id :data])]
    asset
    (println "No" type-key "named" id "loaded!" \newline (keys (type-key @assets)))))

(defn get-tex
  ([id] (get-asset :img id))
  ([atl id]
   (let [atlas (get-asset :atl atl)
         texname (if (keyword? id)
                   (str (name id) ".png")
                   id)]
     (aget (.-textures atlas) texname))))

(defn get-sprite [id]
  (pixi.Sprite. (get-asset :img id)))

;; (defn play-sound [id]
;;   (if-let [sound (get-in @assets [:snd id :data])]
;;     (let [ctx (:audio-ctx @assets)
;;           src (.createBufferSource ctx)]
;;       (set! (.-buffer src) sound)
;;       (doto src
;;         (.connect (.-destination ctx))
;;         (.start 0)))))

(defn play-sound [id]
  (if-let [sound (get-asset :snd id)]
    (.play sound)
    (println "Sound" id "not found")))
