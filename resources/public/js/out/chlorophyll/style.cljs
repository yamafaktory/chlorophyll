;;;; Components styling utilities.
(ns chlorophyll.style)

;;; Styling utilities.

;; Components reset style utlity.
(def reset
  {:margin "0"
   :padding "1rem"})

;; Lighten an darken generators using the alpha of the CSS rgba property.
(def rgba-lumen
  "Generate a rgba string."
  (memoize (fn [hex alpha]
             (str "rgba(" (apply str (repeat 3 (str hex ","))) alpha ")"))))

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
