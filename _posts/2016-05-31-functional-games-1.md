---
layout: post
title: "Functional game programming with core.async"
date: 2016-05-31
description: Part one of an ongoing series
comments: true
tags:
- games
- functional
- async
---

# Fully functional game programming I

This series focuses on the question if it is feasible to create browser games in 
a fully functional way using ClojureScript (or Java games using Clojure).

Every game, be it from such early days as Pong or be it a modern AAA title 
shares a common scheme, the game loop. Roughly spoken it contains at least the 
following steps:

- Query for and process user interaction
- Update the game world and entities
- Produce audio and video output
- repeat...

## The template

A simple game loop in JavaScript games may look something like this:

``` javascript
// JavaScript game loop
var inputEvents = [];
var world = init();
var dt = 1.0 / 60;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    processInput(inputEvents);
    update(dt);
    draw();
}

gameLoop();
```

## Very naive approach

This could be translated to ClojureScript without much of a fuss and make
a working game loop:

``` clojure
;; naive ClojureScript game loop

(defonce input-events (atom []))
(defonce world (init))
(defonce dt (/ 1 60))

(defn game-loop []
  (.requestAnimationFrame js/window game-loop)
    (process-input input-events)
    (update dt)
    (draw))

(game-loop)
```

So, why not just stick with that approach? Let's have a look at an example update function for that situation:

``` clojure
;; naive ClojureScript update

(defn update [dt]
  (swap! world (update-player dt)
  (swap! world (update-monsters dt))

```

And we're back to mutating state. This is not bad as a rule. So, why should we 
try to avoid that?

Imagine us clever developers noticed we could register event listeners to mouse
clicks and thus control our game (I like [dommy](https://github.com/plumatic/dommy) for DOM manipulation tasks):


``` clojure
;; naive ClojureScript event handling

(defn save-click-position [e]
  (swap! world assoc :click [(.-pageX e) (.-pageY e)]))

(dommy/listen! :#my_canvas :click save-click-position)
```

Now all of a sudden we're in a situation where different functions asynchronously 
manipulate the same state object. We can not guarantee that all steps of the
update work on the same version of the world object.

Let's try to improve that:

## Functional game loop?!?

``` clojure
;; better game loop?
(defn init-game [& args] ;; make very boring world
  {:player {:x 0 :y 0}})

(defn update [world dt]
  (-> world
      (update-player dt)
      (update-monsters dt)))

(defn game-loop [old world]
  (.requestAnimationFrame js/window (partial game-loop now (update world dt)))
  (draw world))

(game-loop (js/timestamp) (init args))
```

Now we have a game loop that is solid, pure functional and does not mutate any 
external state. Hooray!

So, let's implement controls. We can't, of course, directly modify the game 
state with our control callbacks anymore, because it is never accessible outside 
the game-loop function.

An idea might be to create an atomic sequence for events, make your callbacks
append events to the sequence, iterating over all events in the update loop and
then reset it. Except that resetting it might be a bad idea, if new events have
arrived while we were processing the old ones (or one event has triggered  another, like our player got hit and we should be game over).

What now?

## Core.async to the rescue

If you're doing Clojure for any time you might have stumbled across the
[core.async library](https://github.com/clojure/core.async). It allows to
send elements asynchronously to channels and retrieve them element-wise in a
first-in-first-out order - in other words exactly what we want.

``` clojure
(defonce time (async/chan 5))
(defonce mouse (async/chan 2))
(defonce dt (/ 1 60))

(defn init-game [& args] ;; make very boring world
  {:player {:x 0 :y 0}
   :gravity -9.81})

(defn clock-tick [] ;; signal a neccessary time update
  (async/go (async/>! time [:tick])))
  
(defmulti process-event first) ;; game event dispatcher

;; Start a background loop listening for the game to happen
(async/go-loop [old (js/timestamp)
                world (init)]
  (let [[data ch] (async/alts! [time mouse])]
    (case ch
      time ;; signal is from time channel
      (do
        (.requestAnimationFrame js/window clock-tick)
        (draw world)
        (recur (update world)))
        
      mouse ;; signal is from mouse channel
      (recur (process-event data world))
      
      :else ;; signal was sent by aliens to your brain or something
      (recur world))))
        
(clock-tick)
```

This way, an empty world is initialized in the beginning, and the game is 
waiting for events. To start the time, we must trigger the first clock tick.
Whenever an event is received it gets processed differently based on the channel
it originates from. When it comes from the ```time``` channel, the whole world
is drawn and updated, and another future clock tick is requested. Other events
get routed through the event dispatcher. One could choose to route all events
through the same channel, but using multiple channels allows us to select 
different dispatchers for similar kinds of events.

The ```process-event``` multimethod selects implementations based on its 
argument; in this case it expects a sequence and dispatches on the value of the
first sequence element.

Now let's bring our skeleton to live.

``` clojure
(defn update [world dt] ;; worst gravity calculation ever
  (-> world
      (update-in [:player :y] + (* dt (:gravity world)))))

(defmethod process-event :click [[_ mouse-x mouse-y]]
  (assoc world :player {:x mouse-x :y mouse-y}))

(dommy/listen! :#my-my_canvas :click
  (fn [e] (async/go (async/>! mouse [:click (.-pageX e) (.-pageY e)]))))
```

The first function ```update``` simply adds a delta-time scaled value to the
y-position, simulating strange gravity (physicist talking).

The second function provides one method for ```process-event```. It is called
when the first element of the parameter sequence is the keyword ```:click```.
It stores the second and third parameters as ```mouse-x``` and ```mouse-y``` and
sets the player's coordinates to them.

Finally we bind an event listener to clicks. It does not modify anything, but
stores the message ```[:click x-position y-position]``` in the mouse event
channel, where it gets applied to the _current_ game state by the ```process-
event``` function.

## Summary

Instead of copying OOP game loops and principles we introduced a non-blocking 
game loop, which reacts to events fired at will.

What have we achieved through that?

- one single game state that is never mutated
- all game processing steps are pure functions
- user events won't mutate state, but get processed by pure functions
- events can be grouped by introducing channels and dispatchers of their own

This design allows us to divide reactions to state updates in small, specialized
pure functions instead of having one long and complex update routine filled
with branches. This will simplify our further development process significantly.

## Word of warning

I have not yet benchmarked that approach in situations, where complex event
chains with huge state changes are triggered, everything is still very
experimental.

A simple working example can be found in the "kicker" subfolder of [my pet projects](https://github.com/hermann-p/pet-projects).
