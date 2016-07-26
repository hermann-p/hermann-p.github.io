(ns game.chans
  (:require [cljs.core.async :refer [chan]]))

(def state (chan))
(def action (chan))
(def time (chan))
