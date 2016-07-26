(ns game.loading
  (:require [hipo.core :as hipo]
            [dommy.core :as dommy]
            [game.assets :refer [ready? percent-done]]
            [game.chans :as chans]
            [cljs.core.async :refer [>!]]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn enter [state]
  (dommy/set-style! (:screen state) :top "0")
  state)

(defn exit [state]
  (dommy/set-style! (:screen state) :top "-110%")
  state)

(defn tick [state]
  (dommy/set-style! (:bar state) :width (str (* .9 (percent-done)) "%"))
  (if (ready?)
    (go (>! chans/state [:play (:body (<! (http/get "level/ortho_test.json" {:as :json})))])))
  state)

(defn draw [state]
  state)

(defn mk-loading-screen []
  (dommy/append!
   (dommy/sel1 :body)
   (hipo/create [:span.view {:id "loadingScreen"}
                 [:div.selection {:id "loadingScreenView"}
                  [:div {:value 0
                              :max 100
                              :id "loadingProgress"}]]]))
  {:screen (dommy/sel1 :#loadingScreen)
   :bar (dommy/sel1 :#loadingProgress)})

(defn mk-state []
  (into (mk-loading-screen)
   {:enter enter
    :leave exit
    :time-tick tick
    :draw draw}))
