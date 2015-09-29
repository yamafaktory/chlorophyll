;;;; Utils
(ns chlorophyll.util
  (:require [chlorophyll.bus :as bus]
            [cljs.core.async :refer [put! chan <!]]
            [cljs.reader :as reader]
            [cljsjs.localforage]
            [cognitect.transit :as transit]
            [reagent.core :as reagent :refer [atom]]))

;; localForage configuration, should be done first.
(set! (.-setDriver js/localforage) "localforage.INDEXEDDB")
(set! (.-setName js/localforage) "chlorophyll")

(defn data-storage
  "Multi-arity getter an setter for browser data storage."
  ([v]
   (let [r (transit/reader :json)
         cb (fn [e v] (put! bus/storage (if (some? v) (transit/read r v) {})))]
     (.getItem js/localforage v cb)
     ))
  ([k v]
   (let [w (transit/writer :json)]
     (.setItem js/localforage k (transit/write w v))
     )))

;; During the init phase, try to populate the atoms.
(data-storage "chlorophyll-channel")
(data-storage "chlorophyll-tiles")
