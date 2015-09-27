;;;; Channels declaration.
(ns chlorophyll.bus
  (:require [cljs.core.async :refer [put! chan <!]]
            [chlorophyll.atom :as atom]
            [chlorophyll.route :as route])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

;; Channels
(def errors (chan))
(def events (chan))
(def storage (chan))

;; Actions
(defn when-storage
  [v]
  (atom/sync v)
  (route/channel-switch (atom/get-set-channel)))

;; Dispatcher
(defn dispatcher
  []
  (go (while true
        (alt!
          events ([v] (.log js/console (pr-str v)))
          errors ([v] (.log js/console (pr-str v)))
          storage ([v] (when-storage v))))))
