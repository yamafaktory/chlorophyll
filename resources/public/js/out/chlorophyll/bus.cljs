;;;; Channels declaration.
(ns chlorophyll.bus
  (:require [cljs.core.async :refer [put! chan <!]]))

;; Channels
(def events (chan))
(def errors (chan))
