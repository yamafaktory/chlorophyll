;;;; User experience interactions.
(ns chlorophyll.ux
  (:require [cljs.core.async :refer [put! chan <!]]
            [chlorophyll.bus :as bus]
            [chlorophyll.atom :as atom]))

(defn select-tile
  "Push a select event with the tile id in the events bus."
  [id]
  (put! bus/events {:selected-tile id}))

(defn add-new-tile
  []
  "Push a new tile event in the events bus."
  (put! bus/events :new-tile))
