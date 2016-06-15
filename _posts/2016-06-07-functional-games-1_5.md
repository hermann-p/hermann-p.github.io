---
layout: post
title: "Functional game programming with core.async part 1.5"
date: 2016-06-07
description: Interlude part of an ongoing series
comments: true
tags:
- games
- functional
- async
---

# Bringing some live to the game

As the game loop in the first part of this series is a little boring, without
anything happening then drawing empty ```update``` and ```draw``` routines,
I'll bring and discuss a couple of lines of code to flesh the introduction out.

In the end we will have balls dropping at regular intervals and a draggable foot
to kick them around. Europe is preparing for the soccer championship, after all...

I will bring the source code in order of interest, most "boring" mechanic parts
further down, so copy-pasting without thinking won't work. You may, however,
get the working code from the folder "kicker" in
[my pet project repo](https://github.com/hermann-p/pet-projects).

<iframe src="https://waechtertroll.lima-city.de/kicker-1.5/" width="100%"></iframe>

[Full screen](https://waechtertroll.lima-city.de/kicker-1.5/)

## Event handling

Now, all those events fired at our main loop need to be handled.

``` clojure
(defmulti action first) ;; dispatch an event based on first vector element to proper function

(defmethod action :drag ;; handler for [:drag x y] event
  [[_ x y] game]
    (let [[nx ny] (to-game x y game)]  ;; calculate game coordinates from window coords
    (assoc game :foot (assoc (:foot game) :x nx :y ny)))) ;; update foot position

(defmethod action :add-ball ;; when a new ball is requested, spawn it
  ;; spawn a new ball at random position
  [v game]
  (update game :balls conj {:x (rand (:x-tiles game))
                            :y -1 ;; drop from above, don't just appear
                            :vx 0
                            :vy 0}))

;; -------------------
;; Some functions to allow for dragging on desktop devices
(defmethod action :startdrag [[_ x y] game] ;; to be called on mousedown
  (action [:drag x y] (assoc game :dragging true)))

(defmethod action :enddrag [_ game] ;; to be called on mouseup
  (assoc game :dragging false))

(defmethod action :move [[_ x y] game] ;; to be called on mouse move
  (if (:dragging game)
    (action [:drag x y] game) ;; if we're dragging, return a call to the drag event
    game))                    ;; else return unchanged game state
```

Now our main loop's call to (recur (action value world)) processes any received
events and then starts listening for the next one with updated state.

## Updating to next frame

When a new frame is requested, the game state needs an update. This is done by
the ```time-tick``` function.

``` clojure
(defn time-tick
  [game]
  (if (zero? (mod (:time game) (:spawn-every game))) ;; is it time to spawn a ball?
    (go (>! action-channel [:add-ball])))            ;; if so, send an event
  (-> (update game :time inc) ;; increase the game frame counter
      (assoc :balls           ;; update all balls
             (filter (partial on-screen? game) ;; remove balls that dropped or were kicked out of th screen
                     (map          ; chain: gravity + detect collision + move
                      (comp (partial collision game) update-pos apply-gravity)
                      (:balls game))))))
```

The game state updated takes all existing ball entities, calculates the influence
of gravity, a possible collision with the foot, and position and status
in the next frame for each one individually. If we were targetting Clojure
instead of ClojureScript, we could use ```pmap``` instead of ```map``` to
make use of multicore CPUs for large numbers of entities without having to care
for any race conditions, as we're using pure functions.

## Drawing to screen

Playing an invisible game is quite boring (except Tetris master bonus level, of
course), so we will draw our entities. In our very first iteration of the game
we'll use the html-canvas, fill it with background color and draw primitives
for entities: white circles for balls and a black circle for the foot.

Remember that you should use integer position coordinates when dealing with
the canvas whenever possible, to get significantly better performance.

``` clojure
(defn draw
  [{:keys [s x-tiles y-tiles foot balls] :as game}]
  (let [ctx (.getContext (dommy/sel1 :canvas) "2d")
        [foot-x foot-y] (to-screen (:x foot) (:y foot) game)
        ball-size (* (:ball-size game) s)
        foot-size (* (:foot-size game) s)]
    ;; paint the background by filling a screen sized rectangle
    (set! (.-fillStyle ctx) "#AAAAFF")
    (.fillRect ctx 0 0 (.-innerWidth js/window) (.-innerHeight js/window))
    
    ;; draw a black circle as foot
    (set! (.-fillStyle ctx) "#000000")
    (doto ctx
      (.beginPath)
      (.arc (int foot-x) (int foot-y) ;; center
            foot-size                 ;; radius
            0 (* 2 Math/PI))          ;; from 0 to full circle
      (.fill))
    
    ;; draw whit circles as balls
    (set! (.-fillStyle ctx) "#FFFFFF")
    (doseq [ball balls] ;; our filtered balls are a lazy sequence, so we can't just map the drawing over them
      (let [[x y] (to-screen (:x ball) (:y ball) game)]
        (doto ctx
          (.beginPath)
          (.arc (int x) (int y) ball-size 0 (* 2 Math/PI))
          (.fill))))))
```

This will be fine if you're using fast graphics drivers and Chromium, but if 
you're running with slow drivers on FireFox like me, you'll see that there must
be faster ways to render our entities. We'll explore DOM-based rendering later
in these articles.

## Full code listing

I won't walk you through all that maths and physics stuff, because it's really
simple at this point. After each time frame, gravity increases the y-down speed
a bit, and x- and y- speeds modify the position a little.
When the distance between the ball and our (round) player foot becomes less than
the sum of their radi, the ball is kicked away from the center of the foot.
Then there's clipping to the game world (0 to x-tiles on x-axis, 0 to y-tiles
on y-axis); the ```on-screen?``` predicate just determines if the center of a
given ball is inside these boundaries.

Ok, that's a lie - collission and screen checks are a bit finer, but nothing
important.

The complete game at this point, with all boring-but-needed maths and physics
stuff looks as follows:

``` clojure
;; =====
;; FILE core.cljs
;; =====
(ns kicker.core
  (:require [dommy.core :as dommy]
            [hipo.core :as hipo]
            [cljs.core.async :as as :refer [chan >! <!]]
            [kicker.game :as game])
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop alt!]]))

(def mouse-channel (as/chan 10))
(def time-channel (as/chan 2))
(def state-channel game/state-channel)
(def action-channel game/action-channel)

(defn timestamp []
  (.getTime (js/Date.)))

(defn resize
  "Recalculate display scaling"
  [{:keys [x-tiles y-tiles] :as game}]
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)
        scale (min (/ width x-tiles)
                   (/ height y-tiles))]
    (.log js/console "Scaling to:" scale)
    (dommy/set-attr! (dommy/sel1 :canvas) :width width)
    (dommy/set-attr! (dommy/sel1 :canvas) :height height)
    (assoc game :s scale)))

(defn init []
  "Create canvas"
  (dommy/append! (dommy/sel1 :body)
                 (->
                  (hipo/create [:canvas "Update your browser. Really!"])
                  (dommy/set-style! :position "fixed"
                                    :top "0"
                                    :left "0"
                                    :background-color "blue")))
  "Register event listeners"
  (dommy/listen! (dommy/sel1 :canvas) :touchmove
                 #(go (>! mouse-channel [:drag (.-clientX %) (.-clientY %)])))
  (dommy/listen! (dommy/sel1 :canvas) :mousedown
                 #(go (>! mouse-channel [:startdrag (.-clientX %) (.-clientY %)])))
  (dommy/listen! (dommy/sel1 :canvas) :mouseup
                 #(go (>! mouse-channel [:enddrag (.-clientX %) (.-clientY %)])))
  (dommy/listen! (dommy/sel1 :canvas) :mousemove
                 #(go (>! mouse-channel [:move (.-clientX %) (.-clientY %)])))
  (dommy/listen! js/window :resize
                 #(go (>! state-channel :resize)))
  "Create new game"
  (resize {:dragging false
           :time 0
           :spawn-every (* 60 3)
           :x-tiles 16
           :y-tiles 12
           :mouse-down false
           :ball-size 0.5
           :foot-size 0.3
           :balls []
           :foot {:x 8 :y 6}}))

(defn tick-the-clock
  "Send an 'time for a new frame' message to the time channel"
  []
  (go (>! time-channel [:tick])))

"Run the game"
(go-loop [game (init)]
  (let [[value ch] (alts! [mouse-channel time-channel state-channel action-channel])]
    (cond
      (= time-channel ch)
      (do
        (.requestAnimationFrame js/window tick-the-clock)
        (game/draw game)
        (recur (game/time-tick game)))
      
      (= state-channel ch)
      (cond
        (= :resize value)
        (recur (resize game)))

      :default
      (recur (game/action value game)))))

"Start the first frame"
(tick-the-clock)

```

And

``` clojure

;; =====
;; FILE game.cljs
;; =====

(ns kicker.game
  (:require [cljs.core.async :as as :refer [chan <! >!]]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def state-channel (as/chan))
(def action-channel (as/chan 5))

(defonce g 9.81)
(defonce dt (/ 1 60)) ; trusting the browser to run us at aproximately 60fps

;;-------------------------------------------------------------------------------------------
;; Physics and mathematics stuff

(defn dist
  "Measure euclidian distance between elements a and b"
  [a b]
  (let [dx (- (:x a) (:x b))
        dy (- (:y a) (:y b))]
    (Math/sqrt (+ (* dx dx) (* dy dy)))))

(defn apply-gravity
  "Add gravity acceleration to y-speed"
  [ball]
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
        (let [dx (- (:x ball) (:x foot))
              dy (- (:y ball) (:y foot))]
          (assoc ball :vx (* 20 dx) :vy (* 20 dy)))
        ball))
    ball))

(defn on-screen?
  "Is the ball still visible"
  [{:keys [x-tiles y-tiles] :as game} {:keys [x y]}]
  (every? true? [(< -1 x)
                 (< x (inc x-tiles))
                 ;(< -1 y)
                 (< y (inc y-tiles))]))

(defn time-tick
  "Advance the game one frame"
  [{:keys [s] :as game}]
  (if (zero? (mod (:time game) (:spawn-every game)))
    (go (>! action-channel [:add-ball])))
  (-> (update game :time inc)
      (assoc :balls
             (filter (partial on-screen? game)
                     (map          ; chain: gravity + detect collision + move
                      (comp (partial collision game) update-pos apply-gravity)
                      (:balls game))))
      (assoc :last-frame kicker.core/timestamp)))

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

(defmulti action first)

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
  [v game]
  (update game :balls conj {:x (rand (:x-tiles game))
                            :y -1
                            :vx 0
                            :vy 0}))

;;-------------------------------------------------------------------------------------------
;; Drawing function

(defn draw
  [{:keys [s x-tiles y-tiles foot balls] :as game}]
  (let [ctx (.getContext (dommy/sel1 :canvas) "2d")
        [foot-x foot-y] (to-screen (:x foot) (:y foot) game)
        ball-size (* (:ball-size game) s)
        foot-size (* (:foot-size game) s)]
    (set! (.-fillStyle ctx) "#AAAAFF")
    (.fillRect ctx 0 0 (.-innerWidth js/window) (.-innerHeight js/window))
    
    (set! (.-fillStyle ctx) "#000000")
    (doto ctx
      (.beginPath)
      (.arc (int foot-x)
            (int foot-y)
            foot-size 0 (* 2 Math/PI))
      (.fill))
    
    (set! (.-fillStyle ctx) "#FFFFFF")
    (doseq [ball balls]
      (let [[x y] (to-screen (:x ball) (:y ball) game)]
        (doto ctx
          (.beginPath)
          (.arc (int x) (int y) ball-size 0 (* 2 Math/PI))
          (.fill))))))
```

## Summary

We now have balls dropping from the sky and round player thingie that kicks them
around. Everything works as expected (though the collission may look weird when
not running in a perfectly square canvas), and it's even semi-fun to play it for
a minute or so.

In the next article we'll begin to use that vacant ```state-channel``` you might
have noticed. It will allow us to manage asset loading and keeping track of the
game progress.
