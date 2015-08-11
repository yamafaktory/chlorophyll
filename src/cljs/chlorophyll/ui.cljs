;;;; User interface components.
(ns chlorophyll.ui
  (:require [reagent.core :as reagent :refer [atom]]
            [chlorophyll.atom :as atom]
            [chlorophyll.style :as style]
            [chlorophyll.ux :as ux])
  (:require-macros [chlorophyll.macros :as macros]))

(defn tile
  "A tile."
  [tile]
  (let [id (get tile 0)
        data (get tile 1)]
    [:article {:key id
               :style
               (conj style/reset
                     {:color (style/rgba {:type :lighten :alpha .8})
                      :background-color (style/rgba {:type :darken :alpha .7})
                      :margin "1rem"})
               :on-click (macros/handler-fn (ux/select-tile id))}
     [:input {:style
              {:font-size "2rem"
               :color (style/rgba {:type :lighten :alpha .8})
               :background "transparent"
               :border 0
               :border-bottom (str "2px solid " (style/rgba {:type :lighten :alpha .2}))}
              :type "text"
              :default-value (atom/get-set-tile id :title)
              :on-change (fn [e]
                           (let [v (.-target.value e)]
                             (ux/change-tile id)
                             (atom/get-set-tile id :title v)))}]
     [:br]
     [:input {:style
              {:font-size "1rem"
               :color (style/rgba {:type :lighten :alpha .7})
               :background "transparent"
               :border 0
               :border-bottom (str "2px solid " (style/rgba {:type :lighten :alpha .3}))}
              :type "text"
              :default-value (atom/get-set-tile id :content)
              :on-change (fn [e]
                           (let [v (.-target.value e)]
                             (ux/change-tile id)
                             (atom/get-set-tile id :content v)))}]]))

(defn add-tile
  "A button to add a new tile."
  []
  [:button {:style
            (conj style/reset
                  {:color (style/rgba {:type :lighten :alpha .7})
                   :background-color (style/rgba {:type :darken :alpha .4})
                   :margin "1rem"})
            :on-click (macros/handler-fn
                       (ux/add-new-tile)
                       (atom/add-tile "Title" "Content"))}
   "Add a new tile"])

(defn app
  "Core app component."
  []
  [:main
   {:style
    (conj style/reset
          {:background-color (style/rgba {:type :darken :alpha .005})
           :width "100%"})}
   [add-tile]
   (doall (map tile @atom/tiles))])
