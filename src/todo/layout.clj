(ns todo.layout
  (:use hiccup.form
        [hiccup.def :only [defhtml]]
        [hiccup.element :only [link-to]]
        [hiccup.page :only [html5 include-js include-css]])
  (:require [selmer.parser :as parser]
            [selmer.filters :as filters]
            [markdown.core :refer [md-to-html-string]]
            [ring.util.response :refer [content-type response]]
            [compojure.response :refer [Renderable]]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]
            [environ.core :refer [env]]))

(parser/set-resource-path!  (clojure.java.io/resource "templates"))

(parser/add-tag! :csrf-field (fn [_ _] (anti-forgery-field)))
(filters/add-filter! :markdown (fn [content] [:safe (md-to-html-string content)]))

(deftype RenderableTemplate [template params]
  Renderable
  (render [this request]
    (content-type
      (->> (assoc params
                  :page template
                  :dev (env :dev)
                  :csrf-token *anti-forgery-token*
                  :servlet-context
                  (if-let [context (:servlet-context request)]
                    ;; If we're not inside a serlvet environment (for
                    ;; example when using mock requests), then
                    ;; .getContextPath might not exist
                    (try (.getContextPath context)
                         (catch IllegalArgumentException _ context))))
        (parser/render-file (str template))
        response)
      "text/html; charset=utf-8")))

(defn render [template & [params]]
  (RenderableTemplate. template params))

(defn common [& content]
  (html5
   [:head
    [:meta {:http-equiv "Content-Type" :content "text/html; charset=UTF-8"}]
    [:title "TODOアプリ"]]
   [:body
    [:div.container
     content]
    [:link {:rel "stylesheet" :href "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"}]
    [:link {:rel "stylesheet" :href "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css"}]
    (include-css "/css/screen.css")
    [:script {:src "//code.jquery.com/jquery-2.1.1.min.js" :type "text/javascript"}]
    [:script {:src "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"}]
    [:script {:src "//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.js"}]
    (include-js "/js/out/goog/base.js")
    (include-js "/js/app.js")
    [:script {:type "text/javascript"} "goog.require('my_app.app')"]]))
