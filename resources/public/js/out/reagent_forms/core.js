// Compiled by ClojureScript 0.0-3178 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__32207_SHARP_,p2__32206_SHARP_){
var or__24926__auto__ = p2__32206_SHARP_.call(null,path,value,p1__32207_SHARP_);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return p1__32207_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var in_fn = temp__4124__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var out_fn = temp__4124__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__24914__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__24914__auto__){
return fmt;
} else {
return and__24914__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(cljs.core.truth_(reagent_forms.core.valid_number_ending_QMARK_.call(null,n))){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__){
return (function (p__32208,_){
var map__32209 = p__32208;
var map__32209__$1 = ((cljs.core.seq_QMARK_.call(null,map__32209))?cljs.core.apply.call(null,cljs.core.hash_map,map__32209):map__32209);
var field = cljs.core.get.call(null,map__32209__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__32211,p__32212){
var map__32213 = p__32211;
var map__32213__$1 = ((cljs.core.seq_QMARK_.call(null,map__32213))?cljs.core.apply.call(null,cljs.core.hash_map,map__32213):map__32213);
var fmt = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__32214 = p__32212;
var map__32214__$1 = ((cljs.core.seq_QMARK_.call(null,map__32214))?cljs.core.apply.call(null,cljs.core.hash_map,map__32214):map__32214);
var doc = cljs.core.get.call(null,map__32214__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__32214__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32214__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__24926__auto__ = get.call(null,id);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32213,map__32213__$1,fmt,id,field,map__32214,map__32214__$1,doc,save_BANG_,get){
return (function (p1__32210_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__32210_SHARP_)));
});})(map__32213,map__32213__$1,fmt,id,field,map__32214,map__32214__$1,doc,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__32215,p__32216){
var map__32217 = p__32215;
var map__32217__$1 = ((cljs.core.seq_QMARK_.call(null,map__32217))?cljs.core.apply.call(null,cljs.core.hash_map,map__32217):map__32217);
var id = cljs.core.get.call(null,map__32217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__32218 = p__32216;
var map__32218__$1 = ((cljs.core.seq_QMARK_.call(null,map__32218))?cljs.core.apply.call(null,cljs.core.hash_map,map__32218):map__32218);
var save_BANG_ = cljs.core.get.call(null,map__32218__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32218__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32217,map__32217__$1,id,map__32218,map__32218__$1,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__32217,map__32217__$1,id,map__32218,map__32218__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(){
var argseq__25966__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__32222,opts,p__32223){
var vec__32224 = p__32222;
var type = cljs.core.nth.call(null,vec__32224,(0),null);
var attrs = cljs.core.nth.call(null,vec__32224,(1),null);
var body = cljs.core.nthnext.call(null,vec__32224,(2));
var vec__32225 = p__32223;
var default_attrs = cljs.core.nth.call(null,vec__32225,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq32219){
var G__32220 = cljs.core.first.call(null,seq32219);
var seq32219__$1 = cljs.core.next.call(null,seq32219);
var G__32221 = cljs.core.first.call(null,seq32219__$1);
var seq32219__$2 = cljs.core.next.call(null,seq32219__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__32220,G__32221,seq32219__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__){
return (function (p__32226,_){
var vec__32227 = p__32226;
var ___$1 = cljs.core.nth.call(null,vec__32227,(0),null);
var map__32228 = cljs.core.nth.call(null,vec__32227,(1),null);
var map__32228__$1 = ((cljs.core.seq_QMARK_.call(null,map__32228))?cljs.core.apply.call(null,cljs.core.hash_map,map__32228):map__32228);
var field = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__32229,p__32230){
var vec__32231 = p__32229;
var _ = cljs.core.nth.call(null,vec__32231,(0),null);
var attrs = cljs.core.nth.call(null,vec__32231,(1),null);
var component = vec__32231;
var map__32232 = p__32230;
var map__32232__$1 = ((cljs.core.seq_QMARK_.call(null,map__32232))?cljs.core.apply.call(null,cljs.core.hash_map,map__32232):map__32232);
var doc = cljs.core.get.call(null,map__32232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32231,_,attrs,component,map__32232,map__32232__$1,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__32231,_,attrs,component,map__32232,map__32232__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__32233,p__32234){
var vec__32235 = p__32233;
var _ = cljs.core.nth.call(null,vec__32235,(0),null);
var map__32236 = cljs.core.nth.call(null,vec__32235,(1),null);
var map__32236__$1 = ((cljs.core.seq_QMARK_.call(null,map__32236))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);
var attrs = map__32236__$1;
var field = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__32235;
var map__32237 = p__32234;
var map__32237__$1 = ((cljs.core.seq_QMARK_.call(null,map__32237))?cljs.core.apply.call(null,cljs.core.hash_map,map__32237):map__32237);
var opts = map__32237__$1;
var doc = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32235,_,map__32236,map__32236__$1,attrs,field,component,map__32237,map__32237__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__32235,_,map__32236,map__32236__$1,attrs,field,component,map__32237,map__32237__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__32239,p__32240){
var vec__32241 = p__32239;
var type = cljs.core.nth.call(null,vec__32241,(0),null);
var map__32242 = cljs.core.nth.call(null,vec__32241,(1),null);
var map__32242__$1 = ((cljs.core.seq_QMARK_.call(null,map__32242))?cljs.core.apply.call(null,cljs.core.hash_map,map__32242):map__32242);
var attrs = map__32242__$1;
var fmt = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__32243 = p__32240;
var map__32243__$1 = ((cljs.core.seq_QMARK_.call(null,map__32243))?cljs.core.apply.call(null,cljs.core.hash_map,map__32243):map__32243);
var save_BANG_ = cljs.core.get.call(null,map__32243__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32243__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32243__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__32241,type,map__32242,map__32242__$1,attrs,fmt,id,map__32243,map__32243__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__24926__auto__ = get.call(null,id);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return "";
}
})();
var map__32244 = cljs.core.deref.call(null,display_value);
var map__32244__$1 = ((cljs.core.seq_QMARK_.call(null,map__32244))?cljs.core.apply.call(null,cljs.core.hash_map,map__32244):map__32244);
var value = cljs.core.get.call(null,map__32244__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__32244__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26893__auto__,temp__4124__auto__,display_value,vec__32241,type,map__32242,map__32242__$1,attrs,fmt,id,map__32243,map__32243__$1,save_BANG_,get,doc){
return (function (p1__32238_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__32238_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(visible__26893__auto__,temp__4124__auto__,display_value,vec__32241,type,map__32242,map__32242__$1,attrs,fmt,id,map__32243,map__32243__$1,save_BANG_,get,doc))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__24926__auto__ = get.call(null,id);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return "";
}
})();
var map__32245 = cljs.core.deref.call(null,display_value);
var map__32245__$1 = ((cljs.core.seq_QMARK_.call(null,map__32245))?cljs.core.apply.call(null,cljs.core.hash_map,map__32245):map__32245);
var value = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,display_value,vec__32241,type,map__32242,map__32242__$1,attrs,fmt,id,map__32243,map__32243__$1,save_BANG_,get,doc){
return (function (p1__32238_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__32238_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(temp__4124__auto__,display_value,vec__32241,type,map__32242,map__32242__$1,attrs,fmt,id,map__32243,map__32243__$1,save_BANG_,get,doc))
], null),attrs)], null);
}
});
;})(display_value,vec__32241,type,map__32242,map__32242__$1,attrs,fmt,id,map__32243,map__32243__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__32247,p__32248){
var vec__32249 = p__32247;
var _ = cljs.core.nth.call(null,vec__32249,(0),null);
var map__32250 = cljs.core.nth.call(null,vec__32249,(1),null);
var map__32250__$1 = ((cljs.core.seq_QMARK_.call(null,map__32250))?cljs.core.apply.call(null,cljs.core.hash_map,map__32250):map__32250);
var attrs = map__32250__$1;
var auto_close_QMARK_ = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var inline = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var date_format = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var id = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__32251 = p__32248;
var map__32251__$1 = ((cljs.core.seq_QMARK_.call(null,map__32251))?cljs.core.apply.call(null,cljs.core.hash_map,map__32251):map__32251);
var save_BANG_ = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32251__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
,((function (visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (p1__32246_SHARP_){
return save_BANG_.call(null,id,p1__32246_SHARP_);
});})(visible__26893__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc){
return (function (p1__32246_SHARP_){
return save_BANG_.call(null,id,p1__32246_SHARP_);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__32249,_,map__32250,map__32250__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__32251,map__32251__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__32252,p__32253){
var vec__32254 = p__32252;
var _ = cljs.core.nth.call(null,vec__32254,(0),null);
var map__32255 = cljs.core.nth.call(null,vec__32254,(1),null);
var map__32255__$1 = ((cljs.core.seq_QMARK_.call(null,map__32255))?cljs.core.apply.call(null,cljs.core.hash_map,map__32255):map__32255);
var attrs = map__32255__$1;
var field = cljs.core.get.call(null,map__32255__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__32255__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__32254;
var map__32256 = p__32253;
var map__32256__$1 = ((cljs.core.seq_QMARK_.call(null,map__32256))?cljs.core.apply.call(null,cljs.core.hash_map,map__32256):map__32256);
var opts = map__32256__$1;
var get = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32254,_,map__32255,map__32255__$1,attrs,field,id,component,map__32256,map__32256__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__32254,_,map__32255,map__32255__$1,attrs,field,id,component,map__32256,map__32256__$1,opts,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__32257,p__32258){
var vec__32259 = p__32257;
var type = cljs.core.nth.call(null,vec__32259,(0),null);
var map__32260 = cljs.core.nth.call(null,vec__32259,(1),null);
var map__32260__$1 = ((cljs.core.seq_QMARK_.call(null,map__32260))?cljs.core.apply.call(null,cljs.core.hash_map,map__32260):map__32260);
var attrs = map__32260__$1;
var placeholder = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__32261 = p__32258;
var map__32261__$1 = ((cljs.core.seq_QMARK_.call(null,map__32261))?cljs.core.apply.call(null,cljs.core.hash_map,map__32261):map__32261);
var get = cljs.core.get.call(null,map__32261__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32261__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32259,type,map__32260,map__32260__$1,attrs,placeholder,postamble,preamble,id,map__32261,map__32261__$1,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__32259,type,map__32260,map__32260__$1,attrs,placeholder,postamble,preamble,id,map__32261,map__32261__$1,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__32262,p__32263){
var vec__32264 = p__32262;
var type = cljs.core.nth.call(null,vec__32264,(0),null);
var map__32265 = cljs.core.nth.call(null,vec__32264,(1),null);
var map__32265__$1 = ((cljs.core.seq_QMARK_.call(null,map__32265))?cljs.core.apply.call(null,cljs.core.hash_map,map__32265):map__32265);
var attrs = map__32265__$1;
var touch_event = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__32264,(2));
var map__32266 = p__32263;
var map__32266__$1 = ((cljs.core.seq_QMARK_.call(null,map__32266))?cljs.core.apply.call(null,cljs.core.hash_map,map__32266):map__32266);
var opts = map__32266__$1;
var save_BANG_ = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32264,type,map__32265,map__32265__$1,attrs,touch_event,event,id,body,map__32266,map__32266__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__24926__auto__ = touch_event;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,visible__26893__auto__,temp__4124__auto__,vec__32264,type,map__32265,map__32265__$1,attrs,touch_event,event,id,body,map__32266,map__32266__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,visible__26893__auto__,temp__4124__auto__,vec__32264,type,map__32265,map__32265__$1,attrs,touch_event,event,id,body,map__32266,map__32266__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__24926__auto__ = touch_event;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__32264,type,map__32265,map__32265__$1,attrs,touch_event,event,id,body,map__32266,map__32266__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__32264,type,map__32265,map__32265__$1,attrs,touch_event,event,id,body,map__32266,map__32266__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__32264,type,map__32265,map__32265__$1,attrs,touch_event,event,id,body,map__32266,map__32266__$1,opts,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__32267,p__32268){
var vec__32269 = p__32267;
var type = cljs.core.nth.call(null,vec__32269,(0),null);
var map__32270 = cljs.core.nth.call(null,vec__32269,(1),null);
var map__32270__$1 = ((cljs.core.seq_QMARK_.call(null,map__32270))?cljs.core.apply.call(null,cljs.core.hash_map,map__32270):map__32270);
var attrs = map__32270__$1;
var value = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field = cljs.core.get.call(null,map__32270__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__32269,(2));
var map__32271 = p__32268;
var map__32271__$1 = ((cljs.core.seq_QMARK_.call(null,map__32271))?cljs.core.apply.call(null,cljs.core.hash_map,map__32271):map__32271);
var save_BANG_ = cljs.core.get.call(null,map__32271__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32271__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32269,type,map__32270,map__32270__$1,attrs,value,name,field,body,map__32271,map__32271__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26893__auto__,temp__4124__auto__,vec__32269,type,map__32270,map__32270__$1,attrs,value,name,field,body,map__32271,map__32271__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__26893__auto__,temp__4124__auto__,vec__32269,type,map__32270,map__32270__$1,attrs,value,name,field,body,map__32271,map__32271__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,vec__32269,type,map__32270,map__32270__$1,attrs,value,name,field,body,map__32271,map__32271__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4124__auto__,vec__32269,type,map__32270,map__32270__$1,attrs,value,name,field,body,map__32271,map__32271__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
}
});
;})(vec__32269,type,map__32270,map__32270__$1,attrs,value,name,field,body,map__32271,map__32271__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__32275,p__32276){
var vec__32277 = p__32275;
var type = cljs.core.nth.call(null,vec__32277,(0),null);
var map__32278 = cljs.core.nth.call(null,vec__32277,(1),null);
var map__32278__$1 = ((cljs.core.seq_QMARK_.call(null,map__32278))?cljs.core.apply.call(null,cljs.core.hash_map,map__32278):map__32278);
var attrs = map__32278__$1;
var highlight_class = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var item_class = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var list_class = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var input_class = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var data_source = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var id = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__32279 = p__32276;
var map__32279__$1 = ((cljs.core.seq_QMARK_.call(null,map__32279))?cljs.core.apply.call(null,cljs.core.hash_map,map__32279):map__32279);
var save_BANG_ = cljs.core.get.call(null,map__32279__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32279__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32279__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(0));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
}
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (p1__32272_SHARP_){
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,reagent_forms.core.value_of.call(null,p1__32272_SHARP_).toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__32272_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (p1__32273_SHARP_){
var G__32280 = p1__32273_SHARP_.which;
switch (G__32280) {
case (38):
p1__32273_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0)))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) - (1)));
} else {
return null;
}

break;
case (40):
p1__32273_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1))))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) + (1)));
} else {
return null;
}

break;
case (13):
save_BANG_.call(null,id,cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index)));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__24926__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__24926__auto__){
return or__24926__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (p1__32274_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__32274_SHARP_.target.getAttribute("tabIndex")));
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
], null),result], null);
});})(visible__26893__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (p1__32272_SHARP_){
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,reagent_forms.core.value_of.call(null,p1__32272_SHARP_).toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__32272_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(0));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (p1__32273_SHARP_){
var G__32281 = p1__32273_SHARP_.which;
switch (G__32281) {
case (38):
p1__32273_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0)))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) - (1)));
} else {
return null;
}

break;
case (40):
p1__32273_SHARP_.preventDefault();

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1))))){
return cljs.core.reset_BANG_.call(null,selected_index,(cljs.core.deref.call(null,selected_index) + (1)));
} else {
return null;
}

break;
case (13):
save_BANG_.call(null,id,cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index)));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__24926__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__24926__auto__){
return or__24926__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (p1__32274_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__32274_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
], null),result], null);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__32277,type,map__32278,map__32278__$1,attrs,highlight_class,item_class,list_class,input_class,data_source,id,map__32279,map__32279__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__32284,p__32285,selections,field,id){
var vec__32289 = p__32284;
var type = cljs.core.nth.call(null,vec__32289,(0),null);
var map__32290 = cljs.core.nth.call(null,vec__32289,(1),null);
var map__32290__$1 = ((cljs.core.seq_QMARK_.call(null,map__32290))?cljs.core.apply.call(null,cljs.core.hash_map,map__32290):map__32290);
var attrs = map__32290__$1;
var touch_event = cljs.core.get.call(null,map__32290__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__32290__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__32289,(2));
var map__32291 = p__32285;
var map__32291__$1 = ((cljs.core.seq_QMARK_.call(null,map__32291))?cljs.core.apply.call(null,cljs.core.hash_map,map__32291):map__32291);
var multi_select = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var handle_click_BANG_ = ((function (vec__32289,type,map__32290,map__32290__$1,attrs,touch_event,key,body,map__32291,map__32291__$1,multi_select,save_BANG_){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__32289,type,map__32290,map__32290__$1,attrs,touch_event,key,body,map__32291,map__32291__$1,multi_select,save_BANG_))
;
return ((function (vec__32289,type,map__32290,map__32290__$1,attrs,touch_event,key,body,map__32291,map__32291__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__24926__auto__ = touch_event;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__32289,type,map__32290,map__32290__$1,attrs,touch_event,key,body,map__32291,map__32291__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__32292){
var map__32297 = p__32292;
var map__32297__$1 = ((cljs.core.seq_QMARK_.call(null,map__32297))?cljs.core.apply.call(null,cljs.core.hash_map,map__32297):map__32297);
var multi_select = cljs.core.get.call(null,map__32297__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__32297__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__32297,map__32297__$1,multi_select,get){
return (function (m,p__32298){
var vec__32299 = p__32298;
var _ = cljs.core.nth.call(null,vec__32299,(0),null);
var map__32300 = cljs.core.nth.call(null,vec__32299,(1),null);
var map__32300__$1 = ((cljs.core.seq_QMARK_.call(null,map__32300))?cljs.core.apply.call(null,cljs.core.hash_map,map__32300):map__32300);
var key = cljs.core.get.call(null,map__32300__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__32297,map__32297__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__32303,p__32304){
var vec__32310 = p__32303;
var type = cljs.core.nth.call(null,vec__32310,(0),null);
var map__32311 = cljs.core.nth.call(null,vec__32310,(1),null);
var map__32311__$1 = ((cljs.core.seq_QMARK_.call(null,map__32311))?cljs.core.apply.call(null,cljs.core.hash_map,map__32311):map__32311);
var attrs = map__32311__$1;
var id = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__32310,(2));
var map__32312 = p__32304;
var map__32312__$1 = ((cljs.core.seq_QMARK_.call(null,map__32312))?cljs.core.apply.call(null,cljs.core.hash_map,map__32312):map__32312);
var opts = map__32312__$1;
var get = cljs.core.get.call(null,map__32312__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get){
return (function (p1__32301_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get){
return (function (p__32313){
var vec__32314 = p__32313;
var k = cljs.core.nth.call(null,vec__32314,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get))
,p1__32301_SHARP_));
});})(selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get){
return (function (p1__32302_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__32302_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__32310,type,map__32311,map__32311__$1,attrs,id,field,selection_items,map__32312,map__32312__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__32315,p__32316){
var vec__32317 = p__32315;
var _ = cljs.core.nth.call(null,vec__32317,(0),null);
var attrs = cljs.core.nth.call(null,vec__32317,(1),null);
var field = vec__32317;
var map__32318 = p__32316;
var map__32318__$1 = ((cljs.core.seq_QMARK_.call(null,map__32318))?cljs.core.apply.call(null,cljs.core.hash_map,map__32318):map__32318);
var opts = map__32318__$1;
var doc = cljs.core.get.call(null,map__32318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32317,_,attrs,field,map__32318,map__32318__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__32317,_,attrs,field,map__32318,map__32318__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__32319,p__32320){
var vec__32321 = p__32319;
var _ = cljs.core.nth.call(null,vec__32321,(0),null);
var attrs = cljs.core.nth.call(null,vec__32321,(1),null);
var field = vec__32321;
var map__32322 = p__32320;
var map__32322__$1 = ((cljs.core.seq_QMARK_.call(null,map__32322))?cljs.core.apply.call(null,cljs.core.hash_map,map__32322):map__32322);
var opts = map__32322__$1;
var doc = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__32321,_,attrs,field,map__32322,map__32322__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__32321,_,attrs,field,map__32322,map__32322__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25680__auto__ = (function reagent_forms$core$map_options_$_iter__32335(s__32336){
return (new cljs.core.LazySeq(null,(function (){
var s__32336__$1 = s__32336;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32336__$1);
if(temp__4126__auto__){
var s__32336__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32336__$2)){
var c__25678__auto__ = cljs.core.chunk_first.call(null,s__32336__$2);
var size__25679__auto__ = cljs.core.count.call(null,c__25678__auto__);
var b__32338 = cljs.core.chunk_buffer.call(null,size__25679__auto__);
if((function (){var i__32337 = (0);
while(true){
if((i__32337 < size__25679__auto__)){
var vec__32343 = cljs.core._nth.call(null,c__25678__auto__,i__32337);
var _ = cljs.core.nth.call(null,vec__32343,(0),null);
var map__32344 = cljs.core.nth.call(null,vec__32343,(1),null);
var map__32344__$1 = ((cljs.core.seq_QMARK_.call(null,map__32344))?cljs.core.apply.call(null,cljs.core.hash_map,map__32344):map__32344);
var key = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__32343,(2),null);
cljs.core.chunk_append.call(null,b__32338,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__32347 = (i__32337 + (1));
i__32337 = G__32347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32338),reagent_forms$core$map_options_$_iter__32335.call(null,cljs.core.chunk_rest.call(null,s__32336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32338),null);
}
} else {
var vec__32345 = cljs.core.first.call(null,s__32336__$2);
var _ = cljs.core.nth.call(null,vec__32345,(0),null);
var map__32346 = cljs.core.nth.call(null,vec__32345,(1),null);
var map__32346__$1 = ((cljs.core.seq_QMARK_.call(null,map__32346))?cljs.core.apply.call(null,cljs.core.hash_map,map__32346):map__32346);
var key = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__32345,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__32335.call(null,cljs.core.rest.call(null,s__32336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25680__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32348_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__32348_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__32351,p__32352){
var vec__32353 = p__32351;
var type = cljs.core.nth.call(null,vec__32353,(0),null);
var map__32354 = cljs.core.nth.call(null,vec__32353,(1),null);
var map__32354__$1 = ((cljs.core.seq_QMARK_.call(null,map__32354))?cljs.core.apply.call(null,cljs.core.hash_map,map__32354):map__32354);
var attrs = map__32354__$1;
var id = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__32354__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__32353,(2));
var map__32355 = p__32352;
var map__32355__$1 = ((cljs.core.seq_QMARK_.call(null,map__32355))?cljs.core.apply.call(null,cljs.core.hash_map,map__32355):map__32355);
var save_BANG_ = cljs.core.get.call(null,map__32355__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__32355__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__32355__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__24926__auto__ = get.call(null,id);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__26893__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__26893__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__26893__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc){
return (function (p1__32349_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__32349_SHARP_)));
});})(visible__26893__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__26893__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc){
return (function (p1__32350_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__32350_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__26893__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc){
return (function (p1__32349_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__32349_SHARP_)));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc){
return (function (p1__32350_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__32350_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__32353,type,map__32354,map__32354__$1,attrs,id,field,options,map__32355,map__32355__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(){
var argseq__25966__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__32356_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__32356_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq32357){
var G__32358 = cljs.core.first.call(null,seq32357);
var seq32357__$1 = cljs.core.next.call(null,seq32357);
var G__32359 = cljs.core.first.call(null,seq32357__$1);
var seq32357__$2 = cljs.core.next.call(null,seq32357__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__32358,G__32359,seq32357__$2);
});

//# sourceMappingURL=core.js.map