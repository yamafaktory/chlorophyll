;;;; Atoms
(ns chlorophyll.atom
  (:require [goog.string :as gstr]
            [reagent.core :as reagent :refer [atom]]
            [chlorophyll.util :as util]))

;; Utils
(defn- exist?
  "Return the local storage value of key if exists."
  [v]
  (let [l (util/local-storage v)]
    (when (some? l)
      l)))

;; Channel
(defonce channel
  (atom
   (exist? "chlorophyll-channel")))

(defn get-set-channel
  "Multi-arity getter and setter for channel."
  ([]
   @channel)
  ([v]
   (reset! channel v)
   (util/local-storage "chlorophyll-channel" (gstr/quote @channel))))

;; Tiles
(defonce tiles
  (atom
   (exist? "chlorophyll-tiles")))

(defn get-set-tile
  "Multi-arity getter and setter for tiles."
  ([i k]
   ((@tiles i) k))
  ([i k v]
   (let [c (reagent/cursor tiles [i k])]
     (reset! c v)
     (util/local-storage "chlorophyll-tiles" @tiles))))

(defn add-tile
  "Add a new tile in the tiles atom."
  [t c ch]
  (let [pos (count @tiles)]
    (swap! tiles assoc-in [pos] {:title t :content c :channel ch})))
