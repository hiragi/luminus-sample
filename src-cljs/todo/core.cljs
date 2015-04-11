(ns todo.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent.session :as session]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [GET POST]])
  (:require-macros [secretary.core :refer [defroute]]))

(defn navbar []
  [:div.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#/"} "み俺プ教スレ"]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li {:class (when (= :home (session/get :page)) "active")}
       [:a {:on-click #(secretary/dispatch! "#/")} "メイン"]]
      [:li {:class (when (= :about (session/get :page)) "active")}
       [:a {:on-click #(secretary/dispatch! "#/about")} "思ったこと"]]]]]])

(defn about-page []
  [:div
   [:h2 "いじってみて思ったこと"]
   [:ul
    [:li "スタートアップがRails並に簡単(lein new luminus my-app +mongodb +cljs && lein ring server)"]
    [:li
     [:div
      "開発環境も、Leiningenはもちろん、Figwheelや"
      [:a {:href "https://clojars.org/" :target "_blank"} "Clojars"]
      "など充実"]]
    [:li "フロントエンド、バックエンドの開発が同じ言語でかける"]
    [:li "仮想DOMでの開発に興味もった。(デフォでReactのライブラリのReagentが入ってる)"]]
   [:h2 "誰か教えて"]
   [:ul
    [:li "仮想DOMってなに"]
    [:li "マイクロサービスっぽい開発ってこれでいいの？サービス間のインターフェースってこういう感じ？"]]
   [:h2 "所感"]
   [:p "Slack気になる"]])

(defn home-page []
  [:div
   [:h2 "Welcome to ClojureScript"]])

(def pages
  {:home home-page
   :about about-page})

(defn page []
  [(pages (session/get :page))])

(defroute "/" [] (session/put! :page :home))
(defroute "/about" [] (session/put! :page :about))

(defn mount-components []
  (reagent/render-component [navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [page] (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (mount-components))
