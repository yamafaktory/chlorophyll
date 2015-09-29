;;;; Channels declaration.
(ns chlorophyll.bus
  (:require [cljs.core.async :refer [put! chan <!]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

;; Channels
(def errors (chan))
(def events (chan))
(def storage (chan))
