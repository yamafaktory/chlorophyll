(defproject chlorophyll "0.1.0-SNAPSHOT"
  :description "To be defined."
  :url "http://github.com/yamafaktory"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "1.7.28"]
                 [ring/ring-core "1.4.0"]
                 [http-kit "2.1.19"]
                 [compojure "1.4.0"]
                 [reagent "0.5.0"]
                 [figwheel "0.3.7"]]
  :plugins [[lein-ring "0.9.6"]
            [lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.7"]
            [cider/cider-nrepl "0.9.1"]]
  :source-paths ["src/clj"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:websocket-url   "ws://localhost:3449/figwheel-ws"
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
