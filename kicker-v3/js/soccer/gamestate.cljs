(ns soccer.gamestate)

(defn draw [game]
  (let [state (:cur-state game)]
    ((get-in game [state :draw]) (state game))))

(defn time-tick [game]
  (let [state (:cur-state game)]
    (update-in game [state] (get-in game [state :time-tick]))))

(defn enter [game state-kw]
  (println "gamestate/enter" state-kw)
  (if-let [cur-state (:cur-state game)]
    (-> (update-in game [cur-state] (or (get-in game [cur-state :leave]) identity))
        (#(update-in % [state-kw] (or (get-in % [state-kw :enter]) identity)))
        (assoc :cur-state state-kw))))

(defn resize [game]
  (println "gamestate/resize")
  (let [states (filter (fn [kw] (get-in game [kw :resize])) (keys game))]
    (reduce (fn [g s-kw]
              (let [state (get g s-kw)]
                (assoc g s-kw ((:resize state) state))))
            game
            states)))

(defn process [evt game]
  (if-let [event-fn (get-in game [(:cur-state game) :process-evt])]
    (update-in game [(:cur-state game)] (partial event-fn evt))
    (do (println "state" (:cur-state game) "has no event-processor:" (keys (get game (:cur-state game))))
        game)))
