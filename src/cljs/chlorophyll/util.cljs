;;;; Utils
(ns chlorophyll.util
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.reader :as reader]
            [cljsjs.localForage :as forage]))

(defn local-storage
  "Multi-arity getter an setter for browser local storage."
  ([v]
   (let [loc (forage.getItem v)]
     (if (some? loc)
       (reader/read-string loc)
       nil)))
  ([k v]
   (forage.setItem k v)))
