;;;; Atoms
(ns chlorophyll.atom
  (:require [goog.string :as gstr]
            [reagent.core :as reagent :refer [atom]]
            [chlorophyll.util :as util]))

;; Channel
(defonce channel
  (atom {}))

(defn get-set-channel
  "Multi-arity getter and setter for channel."
  ([]
   @channel)
  ([v]
   (reset! channel v)
   (util/data-storage "chlorophyll-channel" {:channel @channel})))

;; Tiles
(defonce tiles
  (atom {}))

(defn get-set-tile
  "Multi-arity getter and setter for tiles."
  ([i k]
   ((@tiles i) k))
  ([i k v]
   (let [c (reagent/cursor tiles [i k])]
     (reset! c v)
     (util/data-storage "chlorophyll-tiles" {:tiles @tiles}))))

(defn add-tile
  "Add a new tile in the tiles atom."
  [t c ch]
  (let [pos (count @tiles)]
    (swap! tiles assoc-in [pos] {:title t :content c :channel ch})))

;; Common
(defn sync
  "Synchronize an atom after a callback from data-storage via the async dispatcher."
  [v]
  (let [a (first (map key v))]
    (condp = a
      :channel (reset! channel (v :tiles))
      :tiles (reset! tiles (v :tiles)))))
