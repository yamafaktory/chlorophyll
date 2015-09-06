(ns chlorophyll.core
  (:require [org.httpkit.server :as httpkit]
            [clojure.core.async	:as	async]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.response :as response]
            [compojure.handler :as handler])
  (:gen-class))

(defroutes router
  (GET "/" []
       (response/redirect "/index.html"))
  (route/resources "/"
                   {:root "resources/public"})
  (route/not-found "Four O four"))

(def app
  (handler/site router))

(defn -main
  [& args]
  (httpkit/run-server #'router {:port 3000}))
