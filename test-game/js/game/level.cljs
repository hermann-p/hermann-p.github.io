(ns game.level
  (:require [cljs.core.async :refer [>!]]
            [game.chans :as chans]
            [dommy.core :as dommy]
            [hipo.core :as hipo]
            [cljs.core.async :refer [chan >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defonce events (chan))

(defmulti process (fn [_ evt] (first evt)))

(defn init [state]
  (dommy/append!
   (dommy/sel1 :body)
   (hipo/create [:span.view
                 [:img {:id "levelBackButton"}]
                 [:font {:id "levelMessage"}]
                 [:div.selection
                  [:canvas {:id "field"}]]]))
  state)

(defn enter [state]
  (go-loop [state state]
    (let [action (<! events)]
     (if-not (= :exit (first action))
       (recur (process state action)))))
  state)

(defn exit [state]
  (go (>! events [:exit]))
  state)
