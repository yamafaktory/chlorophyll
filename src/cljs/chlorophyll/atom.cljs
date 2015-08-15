;;;; Atoms
(ns chlorophyll.atom
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce tiles
  (atom {0 {:title "Futuristic heuristic." :content "fzef ze fzefzefz" :color [106 80 126]}
         1 {:title "Digging the grave!" :content "rhrhtrh rth rthr" :color [120 65 65]}
         2 {:title "Incoming abstraction." :content "iloui uiu u" :color [71 113 135]}}))

(defn get-set-tile
  "Multi-arity getter and setter for tiles."
  ([i k]
   ((@tiles i) k))
  ([i k v]
   (swap! tiles assoc-in [i k] v)))

(defn add-tile
  "Add a new tile in the tiles atom."
  [t c]
  (let [pos (count @tiles)]
    (swap! tiles assoc-in [pos] {:title t :content c})))
