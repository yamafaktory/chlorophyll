;;;; Core application.
(ns chlorophyll.core
  (:require [chlorophyll.atom :as atom]
            [chlorophyll.bus :as bus]
            [chlorophyll.route :as route]
            [chlorophyll.ui :as ui]
            [reagent.core :as reagent :refer [atom]]))

(defn main
  "The main function mounts the core component and instantiate the dispacher."
  []
  (bus/dispatcher)
  ;; Mount the application.
  (reagent/render-component [ui/app]
                            (.getElementById js/document "app")))

;; Launch the application.
(main)
