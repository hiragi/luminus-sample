(ns todo.routes.home
  (:use hiccup.form
        [hiccup.def :only [defhtml]]
        [hiccup.element :only [link-to]]
        [hiccup.page :only [html5 include-js include-css]])
  (:require [todo.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [clojure.java.io :as io]))

(defn sample []
  (html5
   [:div
    [:input {:type "text" :class "form-control" :id "content"}]
    [:input {:type "submit" :class "btn btn-primary" :id "btn-submit" :value "送信"}]]))

(defn home-page []
  (layout/render
    "home.html" {:docs (-> "docs/docs.md" io/resource slurp)
                 :todos (sample)}))

(defn about-page []
  (layout/common "sample"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page)))
