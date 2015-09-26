;;;; Core application.
(ns chlorophyll.core
  (:require [chlorophyll.atom :as atom]
            [chlorophyll.bus :as bus]
            [chlorophyll.route :as route]
            [chlorophyll.ui :as ui]
            [reagent.core :as reagent :refer [atom]]))

(defn main
  "The main function is a loop that manages the channels."
  []
  (bus/dispatcher)
  ;; Mount the application.
  (reagent/render-component [ui/app]
                            (js/document.getElementById "app")))

;; Launch the main loop.
(main)
