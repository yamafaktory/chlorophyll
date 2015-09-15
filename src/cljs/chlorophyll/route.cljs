;;;; Routing
(ns chlorophyll.route
  (:require [chlorophyll.ux :as ux]
            [secretary.core :as secretary :include-macros true :refer-macros [defroute]]
            [pushy.core :as pushy]))

;; Set prefix.
(secretary/set-config! :prefix "/")

;; Define routes.
(defroute "/channel/:c" {:as params}
  (ux/select-channel (:c params)))

(def history
  (pushy/pushy secretary/dispatch!
               (fn [r] (when (secretary/locate-route r) r))))

;; Start pushy tracking.
(pushy/start! history)
(pushy/set-token! history "/channel/ddd")
