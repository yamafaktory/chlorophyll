;;;; Components styling utilities.
(ns chlorophyll.style)

;;; Styling utilities.

(def reset
  "Components reset style utlity."
  {:margin "0"
   :padding "1rem"})

(def rgba-lumen
  "Generate a css rgba string to lighten or darken with alpha."
  (memoize (fn [hex alpha]
             (str "rgba(" (apply str (repeat 3 (str hex ","))) alpha ")"))))

(defn rgba-random
  "Generate a css rgba property with random colors."
  []
  (str "rgba(" (apply str (repeatedly 3 #(str (rand-int 256) ","))) "1)"))

(defmulti rgba
  "Create the corresponding rgba attribute
  in order to lighten or darken an element."
  :type)

(defmethod rgba :lighten
  [rgba]
  (rgba-lumen 255 (:alpha rgba)))

(defmethod rgba :darken
  [rgba]
  (rgba-lumen 0 (:alpha rgba)))

(defmethod rgba :random
  [rgba]
  (rgba-random))
