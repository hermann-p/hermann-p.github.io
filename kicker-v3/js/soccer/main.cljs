(ns soccer.main
  (:require [soccer.assets :refer [load request request-all]]
            [soccer.channels :as chans]
            [soccer.gamestate :as gamestate]
            [soccer.loading :as loading]
            [soccer.play :as play]
            [soccer.pixi :as pixi]
            [dommy.core :as dommy]
            [cljs.core.async :refer [>!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn init []
  (request-all {:img [{:id :evilos :url "imgs/evilos.jpg"}
                      {:id :foot :url "imgs/shoe.png"}
                      {:id :ball :url "imgs/ball.png"}
                      {:id :bg :url "imgs/Soccer_Arena_01.jpeg"}]
                :snd [{:id :hit-ball :url "snd/hit.mp3"}
                      {:id :cheer :url "snd/cheer.mp3"}
                      {:id :sad :url "snd/aww.mp3"}]})
  (load)

  (dommy/listen! js/window :resize
                 (fn [] (go (>! chans/global-chan [:resize]))))
  {:loading (loading/mk-state)
   :play (play/mk-state (pixi/mk-view (.-innerWidth js/window) (.-innerHeight js/window)))
   :cur-state :loading})

(defmulti event (fn [_ e] (first e)))

(defmethod event :resize [game e]
  (gamestate/resize game))
