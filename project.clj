(defproject chlorophyll "0.1.0-SNAPSHOT"
  :description "Chlorophyll is a messages sharing application between peers."
  :url "http://github.com/yamafaktory"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[compojure "1.4.0"]
                 [figwheel "0.4.0"]
                 [http-kit "2.1.19"]
                 [kibu/pushy "0.3.3"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.5.1"]
                 [ring/ring-core "1.4.0"]
                 [secretary "1.2.3"]
                 [cljsjs/localForage "1.2.10-0"]]
  :plugins [[cider/cider-nrepl "0.10.0-SNAPSHOT"]
            [lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.0"]
            [lein-npm "0.6.1"]
            [lein-ring "0.9.6"]]
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
