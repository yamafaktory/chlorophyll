;;;; Utils
(ns chlorophyll.util
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.reader :as reader]))

(defn local-storage
  "Multi-arity getter an setter for browser local storage."
  ([v]
   (reader/read-string (js/localStorage.getItem v)))
  ([k v]
   (js/localStorage.setItem k v)))
