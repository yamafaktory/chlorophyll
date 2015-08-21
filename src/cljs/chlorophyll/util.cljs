;;;; Utils
(ns chlorophyll.util
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.reader :as reader]))

(defn local-storage
  "Multi-arity getter an setter for browser local storage."
  ([v]
   (let [loc (js/localStorage.getItem v)]
     (if (some? loc)
       (reader/read-string loc)
       nil)))
  ([k v]
   (js/localStorage.setItem k v)))
