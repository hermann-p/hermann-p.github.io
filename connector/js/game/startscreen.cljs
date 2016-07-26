(ns game.startscreen
  (:require [cljs.core.async :refer [>!]]
            [game.chans :as chans]
            [dommy.core :as dommy]
            [hipo.core :as hipo]
            [cljs.core.async :refer [chan >! <!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def events (chan))

(defn init []
  (dommy/append!
   (dommy/sel1 :body)
   (hipo/create [:span.view {:id "mainMenu"}
                 [:h1 "The Noodle Connection"]
                 [:div.selection {:id "difficultyMenu"}
                  [:div.button [:font "first selection"]]
                  [:div.button [:font "second selection"]]
                  [:div.button [:font "third selection"]]]]))
  {})

(defn enter [state]
  (dommy/set-style! (dommy/sel1 :#mainMenu) :left "0px")
  state)

(defn exit [state]
  (dommy/set-style! (dommy/sel1 :#mainMenu) :left "100%")
  (go (>! events :done))
  state)
