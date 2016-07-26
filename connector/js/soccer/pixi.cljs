(ns soccer.pixi
  (:require [dommy.core :as dommy]))

(defonce pixi js/PIXI)

(defn mk-view [width height]
  (let [renderer (pixi.autoDetectRenderer width height)
        stage (pixi.Container.)]
    (set! (.-autoResize renderer) true)
    (dommy/append! (dommy/sel1 :body) (-> (.-view renderer)
                                          (dommy/set-attr! :id "canvas")
                                          (dommy/set-style! :position "absolute" :top "0px" :left "0px")))
    {:renderer renderer
     :stage stage}))

(defn- dispatch [el]
  (if (:sprite el) :wrapped :raw))

(defn mk-display-list [] (pixi.DisplayList.))

(defn mk-layer
  ([z-index] (mk-layer z-index false))
  ([z-index z-order-fn]
   (pixi.DisplayGroup. z-index z-order-fn)))

(defn attach-list! [display-list stage]
  (set! (.-displayList stage) display-list)
  display-list)

(defn attach-el! [child parent]
  (println "pixi/attach-el!" \newline "child:" child \newline "parent:" parent)
  (.addChild parent child)
  child)

(defmulti get-pos dispatch)
(defmethod get-pos :wrapped [el & args] (apply get-pos (:sprite el) args))
(defmethod get-pos :raw
  ([el] [(.-x (.-position el)) (.-y (.-position el))])
  ([el & args]
   (let [n-args (count args)]
     (assert (even? n-args) "pixi/get-pos: need even number of args")
    (cond
      (= 4 n-args) (get-pos el)
      (= :x (first args)) (first (get-pos el))
      (= :y (first args)) (second (get-pos el))
      :default nil))))

(defmulti set-pos dispatch)
(defmethod set-pos :wrapped [el & args]
  (update-in el [:sprite] #(apply set-pos % args)))
(defmethod set-pos :raw
  [el & args]
  (assert (even? (count args)))
  (loop [args args]
    (when (seq args)
      (case (first args)
        :x (set! (.-x el) (second args))
        :y (set! (.-y el) (second args))
        :default ())
      (recur (drop 2 args))))
  el)

(defmulti move dispatch)
(defmethod move :wrapped [el & args]
  (update-in el [:sprite] #(apply move % args)))
(defmethod move :raw
  [el & args]
  (assert (even? (count args)))
  (loop [args args]
    (when (seq args)
      (case (first args)
        :x (set! (.-x el) (+ (.-x el) (second args)))
        :y (set! (.-y el) (+ (.-y el) (second args)))
        :default ())
      (recur (drop 2 args))))
  el)

(defmulti set-size dispatch)
(defmethod set-size :wrapped [el & args]
  (update-in el [:sprite] #(apply set-size % args)))
(defmethod set-size :raw
  [el & args]
  (assert (even? (count args)))
  (loop [args args]
    (when (seq args)
      (case (first args)
        :w (set! (.-width el) (second args))
        :h (set! (.-height el) (second args)))
      (recur (drop 2 args))))
  el)

(defmulti set-scale dispatch)
(defmethod set-scale :wrapped [el & args]
  (update-in el [:sprite] #(apply set-scale % args)))
(defmethod set-scale :raw
  [el & args]
  (assert (even? (count args)))
  (loop [args args]
    (when (seq args)
      (case (first args)
        :x (set! (.-x (.-scale el)) (second args))
        :y (set! (.-y (.-scale el)) (second args))
        :default ())
      (recur (drop 2 args))))
  el)

(defmulti set-anchor dispatch)
(defmethod set-anchor :wrapped [el & args]
  (update-in el [:sprite] #(apply set-anchor % args)))
(defmethod set-anchor :raw
  [el & args]
  (assert (even? (count args)))
  (loop [args args]
    (when (seq args)
      (assert (<= 0 (second args) 1) "pixi/set-anchor: must be in [0, 1]")
      (case (first args)
        :x (set! (.-x (.-anchor el)) (second args))
        :y (set! (.-y (.-anchor el)) (second args))
        :default ())
      (recur (drop 2 args))))
  el)

(defn mk-sprite [tex & args]
  (let [sprite (pixi.Sprite. tex)
        ops #{:size :scale :anchor :list :layer :pos}]
    (loop [args args]
      (when (seq args)
        (let [op (first args)
              [params next] (split-with #(not (contains? ops %)) (rest args))]
          (case op
            :pos (apply set-pos sprite params)
            :size (apply set-size sprite params)
            :scale (apply set-scale sprite params)
            :anchor (apply set-anchor sprite params)
            :layer (set! (.-displayGroup sprite) (first params))
            :list (attach-el! sprite (first params)))
          (recur next))))
    sprite))

(defmulti update-sprite! dispatch)
(defmethod update-sprite! :wrapped [sprite & args]
  (assoc sprite :sprite (apply update-sprite! (:sprite sprite) args)))
(defmethod update-sprite! :raw [sprite & args]
  (let [ops #{:size :scale :anchor :list :layer :pos}]
    (loop [args args]
      (when (seq args)
        (let [op (first args)
              [params next] (split-with #(not (contains? ops %)) (rest args))]
          (case op
            :pos (apply set-pos sprite params)
            :size (apply set-size sprite params)
            :scale (apply set-scale sprite params)
            :anchor (apply set-anchor sprite params)
            :layer (set! (.-displayGroup sprite) (first params) )
            :list (attach-el! sprite (first params)))
          (recur next))))
    sprite))

(defn update-pos! [{:keys [x y] :as sprite}]
  (set-pos sprite :x x :y y))
