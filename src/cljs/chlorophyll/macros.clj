;;;; ClojureScript macros.
(ns chlorophyll.macros)

;; Handler that forces events to return nil instead of false.
;; https://github.com/reagent-project/reagent/wiki/Beware-Event-Handlers-Returning-False
(defmacro handler-fn
  ([& body]
   `(fn [~'event] ~@body nil)))
