(ns game.scores
  (:require [cljs.core.async :refer [>!]]
            [game.chans :as chans]
            [dommy.core :as dommy]
            [hipo.core :as hipo]
            [cljs.core.async :refer [chan >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn init [state]
  (dommy/append!
   (dommy/sel1 :body)
   (hipo/create [:span.view {:id "scores"}
                 [:img {:id "scoreImg"}]
                 [:br]
                 [:font {:id "scoreMsg"}]
                 [:br]
                 [:div.button {:id "scoreNextButton"} "continue"]]))
  state)

(defn enter [state]
  state)

(defn exit [state]
  state)
