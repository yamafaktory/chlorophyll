;;;; Routing
(ns chlorophyll.route
  (:require [chlorophyll.ux :as ux]
            [pushy.core :as pushy]
            [secretary.core :as secretary :include-macros true :refer-macros [defroute]]))

;; Set prefix.
(secretary/set-config! :prefix "/")

;; Define routes.
(defroute "/channel/:c" {:as params}
  (ux/select-channel (:c params)))

;; Bind pushy to secretary.
(def history
  (pushy/pushy secretary/dispatch!
               (fn [r] (when (secretary/locate-route r) r))))

(defn channel-switch
  [c]
  (pushy/set-token! history (str "/channel/" c)))

;; Start pushy tracking.
(pushy/start! history)
