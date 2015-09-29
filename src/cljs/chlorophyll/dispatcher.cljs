;;;; Dispatcher implementation.
(ns chlorophyll.dispatcher
  (:require [cljs.core.async :refer [put! chan <!]]
            [chlorophyll.atom :as atom]
            [chlorophyll.bus :as bus]
            [chlorophyll.route :as route])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

;; Actions
(defn- when-storage
  [v]
  (atom/sync v)
  (route/channel-switch (atom/get-set-channel)))

;; Dispatcher
(defn start
  []
  (go (while true
        (alt!
          bus/events ([v] (.log js/console (pr-str v)))
          bus/errors ([v] (.log js/console (pr-str v)))
          bus/storage ([v] (when-storage v))))))
