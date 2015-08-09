(ns figwheel.connect (:require [chlorophyll.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/chlorophyll.core.main (apply js/chlorophyll.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'chlorophyll.core/main' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

