;;;; Routing
(ns chlorophyll.route
  (:require [chlorophyll.ux :as ux]
            [secretary.core :as secretary :include-macros true :refer-macros [defroute]]
            [pushy.core :as pushy]))

(defn routes []
  (secretary/set-config! :prefix "/")
  (defroute "/test/:id" {:as params}
    (.log js/console (str "test: " (:id params)))))

(def history
  (pushy/pushy secretary/dispatch!
               (fn [x] (when (secretary/locate-route x) x))))

(pushy/start! history)
