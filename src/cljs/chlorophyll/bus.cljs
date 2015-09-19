;;;; Channels declaration.
(ns chlorophyll.bus
  (:require [cljs.core.async :refer [put! chan <!]])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

;; Channels
(def events (chan))
(def errors (chan))

;; Dispatcher
(defn dispatcher
  []
  (go (while true
        (alt!
          events ([v] (.log js/console (pr-str v)))
          errors ([v] (.log js/console (pr-str v)))))))
