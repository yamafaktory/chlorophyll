(defproject chlorophyll "0.1.0-SNAPSHOT"
  :description "To be defined."
  :url "http://github.com/yamafaktory"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "1.7.122"]
                 [ring/ring-core "1.4.0"]
                 [http-kit "2.1.19"]
                 [compojure "1.4.0"]
                 [reagent "0.5.1"]
                 [figwheel "0.4.0-SNAPSHOT"]
                 [secretary "1.2.3"]
                 [kibu/pushy "0.3.3"]]
  :plugins [[lein-ring "0.9.6"]
            [lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.0-SNAPSHOT"]
            [cider/cider-nrepl "0.10.0-SNAPSHOT"]]
  :source-paths ["src/clj"]
  :clean-targets ^{:protect false} ["resources/public/js/out"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:websocket-host "localhost"
                                   :on-jsload "chlorophyll.core/main"}
                        :compiler {:main chlorophyll.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true
                                   :source-map-timestamp true}}]}
  :main chlorophyll.core
  :ring {:handler chlorophyll.core/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]]}})
