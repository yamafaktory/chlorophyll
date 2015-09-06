;;;; User interface components.
(ns chlorophyll.ui
  (:require [reagent.core :as reagent :refer [atom]]
            [chlorophyll.atom :as atom]
            [chlorophyll.style :as style]
            [chlorophyll.ux :as ux])
  (:require-macros [chlorophyll.macro :as macro]))

(defn tile-input
  "A tile input component"
  [id element text-size alpha]
  [:input {:style
           {:font-size (style/font {:size text-size})
            :color (style/rgba {:type :lighten :alpha alpha})
            :background "transparent"
            :border 0}
           :type "text"
           :max-length 50
           :default-value (atom/get-set-tile id (keyword element))
           :on-change (fn [e]
                        (let [v (.-target.value e)]
                          (ux/change-tile id)
                          (atom/get-set-tile id (keyword element) v)))}])

(defn tile
  "A tile component."
  [tile]
  (let [id (get tile 0)
        bg (atom/get-set-tile id :color)]
    [:article {:key id
               :style
               (conj style/reset
                     style/padding
                     {:display "flex"
                      :flex-direction "column"
                      :color (style/rgba {:type :lighten :alpha .8})
                      :background-color (cond
                                          ;; Create a new color and store it.
                                          (nil? bg)(let [rand (style/rgba {:type :random})]
                                                     (atom/get-set-tile id :color (rand :vector))
                                                     (rand :color))
                                          ;; Or read the vector one.
                                          :else (str "rgba(" (apply str (map (fn [v] (str v ",")) bg)) "1)"))
                      :margin "1rem 2rem"})
               :on-click (macro/handler-fn (ux/select-tile id))}
     [tile-input id :title :big .8]
     [tile-input id :content :small .7]]))

(defn add-tile
  "A button to add a new tile."
  []
  [:button {:style
            (conj style/reset
                  style/padding
                  {:color (style/rgba {:type :lighten :alpha .7})
                   :background-color (style/rgba {:type :darken :alpha .4})
                   :margin "1rem 2rem"
                   :font-size (style/font {:size :normal})
                   :text-align "left"})
            :on-click (macro/handler-fn
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
           :width "100%"
           :display "flex"
           :flex-direction "column"})}
   [add-tile]
   (doall (map tile (reverse @atom/tiles)))])
