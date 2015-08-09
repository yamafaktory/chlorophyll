;;;; Atoms
(ns chlorophyll.atom
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce tiles
  (atom {0 {:title "Futuristic heuristic." :content "fzef ze fzefzefz"}
         1 {:title "Digging the grave!" :content "rhrhtrh rth rthr"}
         2 {:title "Incoming abstraction." :content "iloui uiu u"}}))

(defn get-set-tile
  "Multi-arity getter and setter for tiles."
  ([i k]
   ((@tiles i) k))
  ([i k v]
   (swap! tiles assoc-in [i k] v)))
