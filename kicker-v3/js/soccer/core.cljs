(ns soccer.core
  (:require [soccer.pixi :refer [mk-view]]
            [soccer.channels :as chans]
            [soccer.main :as main]
            [soccer.gamestate :refer [draw time-tick enter process]]
            [cljs.core.async :refer [chan >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(defonce pixi js/PIXI)

(go (>! chans/state-chan :loading))

(defn request-frame []
  (go (>! chans/time-chan :tick)))

(go-loop [game (main/init)]
  (let [[val ch] (alts! [chans/state-chan
                         chans/time-chan
                         chans/event-chan
                         chans/global-chan])]
    (cond
      (= chans/time-chan ch)
      (do ;(println "time-channel:" val)
          (.requestAnimationFrame js/window request-frame)
          (draw game)
          (recur (time-tick game)))

      (= chans/state-chan ch)
      (do (println "state-channel:" val)
          (recur (enter game val)))

      (= chans/event-chan ch)
      (do ;(println "event-channel:" val "->" (:cur-state game))
          (recur (process val game)))

      (= chans/global-chan ch)
      (do (println "global-channel:" val)
          (recur (main/event game val))))))

(request-frame)
