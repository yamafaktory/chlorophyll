;;;; Components styling utilities.
(ns chlorophyll.style)

;;; Global utilities.

(def reset
  "Components reset style utlity."
  {:display "block"
   :margin "0"
   :padding "1rem"
   :border "0"})

;;; Color utilies.

(def rgba-lumen
  "Generate a css rgba string to lighten or darken with alpha."
  (memoize (fn [hex alpha]
             (str "rgba(" (apply str (repeat 3 (str hex ","))) alpha ")"))))

(defn rgba-random
  "Generate a css rgba property with random colors within the range [100 - 205]."
  []
  (let [v (into [] (repeatedly 3 #(+ 50 (rand-int 106))))
        c (apply str "rgba(" (apply str (interpose "," v)) ",1)")]
    {:vector v :color c}))

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

;;; Font size utilities.

(defn font-size
  "Return the given size in rem."
  [s]
  (str s "rem"))

(defmulti font
  "Create the corresponding rgba attribute
  in order to lighten or darken an element."
  :size)

(defmethod font :small
  [font]
  (font-size 1))

(defmethod font :normal
  [font]
  (font-size 1.33))

(defmethod font :big
  [font]
  (font-size 2))
