;;;; Core application.
(ns chlorophyll.core
  (:require [figwheel.client :as fw]
            [reagent.core :as reagent :refer [atom]]
            [cljs.core.async :refer [put! chan <!]]
            [chlorophyll.atom :as atom]
            [chlorophyll.bus :as bus]
            [chlorophyll.route :as route]
            [chlorophyll.ui :as ui])
  (:require-macros [cljs.core.async.macros :as am :refer [go go-loop alt!]]))

(defn main
  "The main function is a loop that manages the channels."
  []
  (route/routes)
  (go (while true
        (alt!
          bus/events ([v] (.log js/console (pr-str v)))
          bus/errors ([v] (.log js/console (pr-str v))))))
  ;; Mount the application.
  (reagent/render-component [ui/app]
                            (js/document.getElementById "app")))

;; Launch the main loop.
(main)
