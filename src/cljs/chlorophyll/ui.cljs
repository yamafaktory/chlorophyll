;;;; User interface components.
(ns chlorophyll.ui
  (:require [chlorophyll.atom :as atom]
            [chlorophyll.route :as route]
            [chlorophyll.style :as style]
            [chlorophyll.ux :as ux]
            [reagent.core :as reagent :refer [atom]])
  (:require-macros [chlorophyll.macro :as macro]))

(defn channel-switcher
  "A channel switcher"
  []
  [:input {:style (conj style/reset
                        style/padding
                        {:font-size (style/font {:size :normal})
                         :color (style/rgba {:type :lighten :alpha .9})
                         :background-color (style/rgba {:type :darken :alpha .7})})
           :type "text"
           :max-length 50
           :default-value (atom/get-set-channel)
           :placeholder "Please choose a channel"
           :on-change (fn [e]
                        (let [v (.-target.value e)]
                          (atom/get-set-channel v)
                          (route/channel-switch v)))}])

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
           :placeholder element
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
               :style (conj style/reset
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
  "A button to add a new tile in the current channel."
  []
  [:button {:style (conj style/reset
                         style/padding
                         {:color (style/rgba {:type :lighten :alpha .7})
                          :background-color (style/rgba {:type :darken :alpha .4})
                          :margin "1rem 2rem"
                          :font-size (style/font {:size :normal})
                          :text-align "left"})
            :on-click (macro/handler-fn
                       (ux/add-new-tile)
                       (let [c (atom/get-set-channel)]
                         (atom/add-tile "Title" "Content" c)))}
   "Add a new tile"])

(defn app
  "Core app component."
  []
  [:main
   {:style (conj style/reset
                 {:background-color (style/rgba {:type :darken :alpha .005})
                  :width "100%"
                  :display "flex"
                  :flex-direction "column"})}
   [channel-switcher]
   [add-tile]
   ;; Filter the tiles with the current channel.
   (->> @atom/tiles
        (reverse)
        (filter (fn [[k v]] (= @atom/channel (v :channel))))
        (map tile)
        (doall))])
