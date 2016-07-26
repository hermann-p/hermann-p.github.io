(ns game.core
  (:require [cljs.core.async :refer [>! <!]]
            [dommy.core :as dommy]
            [game.assets :refer [load request-all]]
            [game.chans :as chans]
            [game.loading :as loading]
            [game.play :as play]
            [game.statemachine :as state]
            [game.startscreen :as start])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

;; (defonce conn
;;   (repl/connect "ws://localhost:9001"))


(defn init []
  (request-all {:atl [{:id :hex-dark :url "vis/hex_dark.json"}
                      {:id :hex-green :url "vis/hex_green.json"}
                      {:id :ortho-grey :url "vis/ortho_grey.json"}
                      {:id :ortho-orange :url "vis/ortho_orange.json"}]
                :snd [{:id :click1 :url "audio/rotate1.wav"}
                      {:id :click2 :url "audio/rotate2.wav"}
                      {:id :click3 :url "audio/rotate3.wav"}
                      {:id :level :url "audio/levelup.wav"}]})
  
  (load)
  {:loading (loading/mk-state)
   :play (play/mk-state)
   :cur-state :loading})

(defn tick []
  (go (>! chans/time [:tick])))

(go-loop [game (init)]
  (let [[msg ch] (alts! [chans/state chans/action chans/time])]
    (cond
      (= ch chans/time) (do (.requestAnimationFrame js/window (partial tick))
                            (recur (state/time-tick game)))
      (= ch chans/state) (recur (state/enter game msg))
      (= ch chans/action) (recur (state/process game msg)))))

(go (>! chans/state [:loading]))
(tick)
