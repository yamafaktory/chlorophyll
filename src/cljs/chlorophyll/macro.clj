;;;; ClojureScript macros.
(ns chlorophyll.macro)

(defmacro handler-fn
  "Handler that forces events to return nil instead of false.
  https://github.com/reagent-project/reagent/wiki/Beware-Event-Handlers-Returning-False"
  ([& body]
   `(fn [~'event] ~@body nil)))
