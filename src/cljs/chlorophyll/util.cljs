;;;; Utils
(ns chlorophyll.util
  (:require [reagent.core :as reagent :refer [atom]]
            [chlorophyll.bus :as bus]
            [cljs.core.async :refer [put! chan <!]]
            [cljs.reader :as reader]
            [cljsjs.localForage]))

;; localForage configuration.
(set! (.-driver js/localforage) "localforage.LOCALSTORAGE")
;;(set! (.-name js/localforage) "chlorophyll")

(defn local-storage
  "Multi-arity getter an setter for browser local storage."
  ([v]
   (letfn [(cb [e v] (put! bus/storage (if (some? v)
                                         (reader/read-string v)
                                         nil)))]
     (.getItem js/localforage v cb)))
  ([k v]
   (.setItem js/localforage k v)))

(.info js/console (local-storage "chlorophyll-tiles"))
