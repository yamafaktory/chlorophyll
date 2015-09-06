;;;; Atoms
(ns chlorophyll.atom
  (:require [reagent.core :as reagent :refer [atom]]
            [chlorophyll.util :as util]))

(defonce tiles
  (atom
   (let [loc (util/local-storage "tiles")]
     (when (some? loc)
       loc))))

(defn get-set-tile
  "Multi-arity getter and setter for tiles."
  ([i k]
   ((@tiles i) k))
  ([i k v]
   (let [c (reagent/cursor tiles [i k])]
     (reset! c v)
     (util/local-storage "tiles" @tiles))))

(defn add-tile
  "Add a new tile in the tiles atom."
  [t c]
  (let [pos (count @tiles)]
    (swap! tiles assoc-in [pos] {:title t :content c})))
