(ns game.statemachine)

(defn draw [game]
  (let [state (:cur-state game)]
    ((get-in game [state :draw]) (state game))))

(defn time-tick [game]
  (let [state (:cur-state game)]
    (update-in game [state] (get-in game [state :time-tick]))))

(defn enter [game event]
  (let [state-kw (first event)]
    (if-let [cur-state (:cur-state game)]
      (-> (if (seq (rest event))
            (update-in game [state-kw] into {:enter-info (rest event)})
            game)
          (update-in [cur-state] (or (get-in game [cur-state :leave]) identity))
          (#(update-in % [state-kw] (or (get-in % [state-kw :enter]) identity)))
          (assoc :cur-state state-kw)))))

(defn resize [game]
  (let [states (filter (fn [kw] (get-in game [kw :resize])) (keys game))]
    (reduce (fn [g s-kw]
              (let [state (get g s-kw)]    (println "tick-fn:" (get-in game [state :time-tick]))

                (assoc g s-kw ((:resize state) state))))
            game
            states)))

(defn process [game evt]
  (if-let [event-fn (get-in game [(:cur-state game) :process-evt])]
    (update-in game [(:cur-state game)] (partial event-fn evt))
    (do (println "state" (:cur-state game) "has no event-processor:" (keys (get game (:cur-state game))))
        game)))
