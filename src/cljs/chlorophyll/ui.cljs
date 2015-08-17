;;;; User interface components.
(ns chlorophyll.ui
  (:require [reagent.core :as reagent :refer [atom]]
            [chlorophyll.atom :as atom]
            [chlorophyll.style :as style]
            [chlorophyll.ux :as ux])
  (:require-macros [chlorophyll.macro :as macro]))

(defn tile
  "A tile component."
  [tile]
  (let [id (get tile 0)
        bg (atom/get-set-tile id :color)]
    [:article {:key id
               :style
               (conj style/reset
                     {:display "flex"
                      :flex-direction "column"
                      :color (style/rgba {:type :lighten :alpha .8})
                      :background-color (cond
                                          (nil? bg)(let [rand (style/rgba {:type :random})]
                                                     (atom/get-set-tile id :color rand)
                                                     rand)
                                          :else (str "rgba(" (apply str (map (fn [v] (str v ",")) bg)) "1)"))
                      :margin "1rem"})
               :on-click (macro/handler-fn (ux/select-tile id))}
     [:input {:style
              {:font-size (style/font {:size :big})
               :color (style/rgba {:type :lighten :alpha .8})
               :background "transparent"
               :border 0}
              :type "text"
              :default-value (atom/get-set-tile id :title)
              :on-change (fn [e]
                           (let [v (.-target.value e)]
                             (ux/change-tile id)
                             (atom/get-set-tile id :title v)))}]
     [:input {:style
              {:font-size (style/font {:size :small})
               :color (style/rgba {:type :lighten :alpha .7})
               :background "transparent"
               :margin-top "1rem"
               :border 0}
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
                   :margin "1rem"
                   :font-size (style/font {:size :normal})})
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
           :width "100%"})}
   [add-tile]
   (doall (map tile (reverse @atom/tiles)))])
