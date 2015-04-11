// Compiled by ClojureScript 0.0-3178 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__34068_SHARP_,p2__34069_SHARP_){
var and__24914__auto__ = p1__34068_SHARP_;
if(cljs.core.truth_(and__24914__auto__)){
return p2__34069_SHARP_;
} else {
return and__24914__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24926__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24926__auto__){
return or__24926__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34071_SHARP_,p2__34070_SHARP_){
return [cljs.core.str(p2__34070_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__24926__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__24926__auto__){
return or__24926__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__24926__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34072){
var map__34073 = p__34072;
var map__34073__$1 = ((cljs.core.seq_QMARK_.call(null,map__34073))?cljs.core.apply.call(null,cljs.core.hash_map,map__34073):map__34073);
var file = cljs.core.get.call(null,map__34073__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__34074){
var map__34075 = p__34074;
var map__34075__$1 = ((cljs.core.seq_QMARK_.call(null,map__34075))?cljs.core.apply.call(null,cljs.core.hash_map,map__34075):map__34075);
var namespace = cljs.core.get.call(null,map__34075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e34076){if((e34076 instanceof Error)){
var e = e34076;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34076;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__34078 = arguments.length;
switch (G__34078) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34080,callback){
var map__34082 = p__34080;
var map__34082__$1 = ((cljs.core.seq_QMARK_.call(null,map__34082))?cljs.core.apply.call(null,cljs.core.hash_map,map__34082):map__34082);
var file_msg = map__34082__$1;
var request_url = cljs.core.get.call(null,map__34082__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34082,map__34082__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34082,map__34082__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34083){
var map__34085 = p__34083;
var map__34085__$1 = ((cljs.core.seq_QMARK_.call(null,map__34085))?cljs.core.apply.call(null,cljs.core.hash_map,map__34085):map__34085);
var file_msg = map__34085__$1;
var meta_data = cljs.core.get.call(null,map__34085__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__34085__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__24926__auto__ = meta_data;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__24914__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__24914__auto__){
var or__24926__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24926__auto____$1)){
return or__24926__auto____$1;
} else {
var and__24914__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__24914__auto____$1){
var or__24926__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__24926__auto____$2){
return or__24926__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__24914__auto____$1;
}
}
}
} else {
return and__24914__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34086,callback){
var map__34088 = p__34086;
var map__34088__$1 = ((cljs.core.seq_QMARK_.call(null,map__34088))?cljs.core.apply.call(null,cljs.core.hash_map,map__34088):map__34088);
var file_msg = map__34088__$1;
var namespace = cljs.core.get.call(null,map__34088__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__34088__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28196__auto___34175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___34175,out){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___34175,out){
return (function (state_34157){
var state_val_34158 = (state_34157[(1)]);
if((state_val_34158 === (7))){
var inst_34141 = (state_34157[(7)]);
var inst_34147 = (state_34157[(2)]);
var inst_34148 = cljs.core.async.put_BANG_.call(null,out,inst_34147);
var inst_34137 = inst_34141;
var state_34157__$1 = (function (){var statearr_34159 = state_34157;
(statearr_34159[(8)] = inst_34148);

(statearr_34159[(9)] = inst_34137);

return statearr_34159;
})();
var statearr_34160_34176 = state_34157__$1;
(statearr_34160_34176[(2)] = null);

(statearr_34160_34176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (6))){
var inst_34153 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
var statearr_34161_34177 = state_34157__$1;
(statearr_34161_34177[(2)] = inst_34153);

(statearr_34161_34177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (5))){
var inst_34151 = cljs.core.async.close_BANG_.call(null,out);
var state_34157__$1 = state_34157;
var statearr_34162_34178 = state_34157__$1;
(statearr_34162_34178[(2)] = inst_34151);

(statearr_34162_34178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (4))){
var inst_34140 = (state_34157[(10)]);
var inst_34145 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34140);
var state_34157__$1 = state_34157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34157__$1,(7),inst_34145);
} else {
if((state_val_34158 === (3))){
var inst_34155 = (state_34157[(2)]);
var state_34157__$1 = state_34157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34157__$1,inst_34155);
} else {
if((state_val_34158 === (2))){
var inst_34140 = (state_34157[(10)]);
var inst_34137 = (state_34157[(9)]);
var inst_34140__$1 = cljs.core.nth.call(null,inst_34137,(0),null);
var inst_34141 = cljs.core.nthnext.call(null,inst_34137,(1));
var inst_34142 = (inst_34140__$1 == null);
var inst_34143 = cljs.core.not.call(null,inst_34142);
var state_34157__$1 = (function (){var statearr_34163 = state_34157;
(statearr_34163[(10)] = inst_34140__$1);

(statearr_34163[(7)] = inst_34141);

return statearr_34163;
})();
if(inst_34143){
var statearr_34164_34179 = state_34157__$1;
(statearr_34164_34179[(1)] = (4));

} else {
var statearr_34165_34180 = state_34157__$1;
(statearr_34165_34180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34158 === (1))){
var inst_34135 = cljs.core.nth.call(null,files,(0),null);
var inst_34136 = cljs.core.nthnext.call(null,files,(1));
var inst_34137 = files;
var state_34157__$1 = (function (){var statearr_34166 = state_34157;
(statearr_34166[(11)] = inst_34136);

(statearr_34166[(12)] = inst_34135);

(statearr_34166[(9)] = inst_34137);

return statearr_34166;
})();
var statearr_34167_34181 = state_34157__$1;
(statearr_34167_34181[(2)] = null);

(statearr_34167_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28196__auto___34175,out))
;
return ((function (switch__28134__auto__,c__28196__auto___34175,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto____0 = (function (){
var statearr_34171 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34171[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto__);

(statearr_34171[(1)] = (1));

return statearr_34171;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto____1 = (function (state_34157){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_34157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e34172){if((e34172 instanceof Object)){
var ex__28138__auto__ = e34172;
var statearr_34173_34182 = state_34157;
(statearr_34173_34182[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34183 = state_34157;
state_34157 = G__34183;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto__ = function(state_34157){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto____1.call(this,state_34157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___34175,out))
})();
var state__28198__auto__ = (function (){var statearr_34174 = f__28197__auto__.call(null);
(statearr_34174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___34175);

return statearr_34174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___34175,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__34184,p__34185){
var map__34188 = p__34184;
var map__34188__$1 = ((cljs.core.seq_QMARK_.call(null,map__34188))?cljs.core.apply.call(null,cljs.core.hash_map,map__34188):map__34188);
var opts = map__34188__$1;
var url_rewriter = cljs.core.get.call(null,map__34188__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__34189 = p__34185;
var map__34189__$1 = ((cljs.core.seq_QMARK_.call(null,map__34189))?cljs.core.apply.call(null,cljs.core.hash_map,map__34189):map__34189);
var file_msg = map__34189__$1;
var file = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34190){
var map__34193 = p__34190;
var map__34193__$1 = ((cljs.core.seq_QMARK_.call(null,map__34193))?cljs.core.apply.call(null,cljs.core.hash_map,map__34193):map__34193);
var file = cljs.core.get.call(null,map__34193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__34193__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__24914__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24914__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24914__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e34194){var e = e34194;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34199,p__34200){
var map__34401 = p__34199;
var map__34401__$1 = ((cljs.core.seq_QMARK_.call(null,map__34401))?cljs.core.apply.call(null,cljs.core.hash_map,map__34401):map__34401);
var opts = map__34401__$1;
var load_unchanged_files = cljs.core.get.call(null,map__34401__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__34401__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__34401__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__34402 = p__34200;
var map__34402__$1 = ((cljs.core.seq_QMARK_.call(null,map__34402))?cljs.core.apply.call(null,cljs.core.hash_map,map__34402):map__34402);
var msg = map__34402__$1;
var files = cljs.core.get.call(null,map__34402__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (state_34526){
var state_val_34527 = (state_34526[(1)]);
if((state_val_34527 === (7))){
var inst_34414 = (state_34526[(7)]);
var inst_34413 = (state_34526[(8)]);
var inst_34416 = (state_34526[(9)]);
var inst_34415 = (state_34526[(10)]);
var inst_34421 = cljs.core._nth.call(null,inst_34414,inst_34416);
var inst_34422 = figwheel.client.file_reloading.eval_body.call(null,inst_34421);
var inst_34423 = (inst_34416 + (1));
var tmp34528 = inst_34414;
var tmp34529 = inst_34413;
var tmp34530 = inst_34415;
var inst_34413__$1 = tmp34529;
var inst_34414__$1 = tmp34528;
var inst_34415__$1 = tmp34530;
var inst_34416__$1 = inst_34423;
var state_34526__$1 = (function (){var statearr_34531 = state_34526;
(statearr_34531[(11)] = inst_34422);

(statearr_34531[(7)] = inst_34414__$1);

(statearr_34531[(8)] = inst_34413__$1);

(statearr_34531[(9)] = inst_34416__$1);

(statearr_34531[(10)] = inst_34415__$1);

return statearr_34531;
})();
var statearr_34532_34601 = state_34526__$1;
(statearr_34532_34601[(2)] = null);

(statearr_34532_34601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (20))){
var inst_34463 = (state_34526[(12)]);
var inst_34462 = (state_34526[(13)]);
var inst_34459 = (state_34526[(14)]);
var inst_34458 = (state_34526[(15)]);
var inst_34465 = (state_34526[(16)]);
var inst_34468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34470 = (function (){var files_not_loaded = inst_34465;
var res = inst_34463;
var res_SINGLEQUOTE_ = inst_34462;
var files_SINGLEQUOTE_ = inst_34459;
var all_files = inst_34458;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34459,inst_34458,inst_34465,inst_34468,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (p__34469){
var map__34533 = p__34469;
var map__34533__$1 = ((cljs.core.seq_QMARK_.call(null,map__34533))?cljs.core.apply.call(null,cljs.core.hash_map,map__34533):map__34533);
var file = cljs.core.get.call(null,map__34533__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__34533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34459,inst_34458,inst_34465,inst_34468,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var inst_34471 = cljs.core.map.call(null,inst_34470,inst_34463);
var inst_34472 = cljs.core.pr_str.call(null,inst_34471);
var inst_34473 = figwheel.client.utils.log.call(null,inst_34472);
var inst_34474 = (function (){var files_not_loaded = inst_34465;
var res = inst_34463;
var res_SINGLEQUOTE_ = inst_34462;
var files_SINGLEQUOTE_ = inst_34459;
var all_files = inst_34458;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34459,inst_34458,inst_34465,inst_34468,inst_34470,inst_34471,inst_34472,inst_34473,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34459,inst_34458,inst_34465,inst_34468,inst_34470,inst_34471,inst_34472,inst_34473,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var inst_34475 = setTimeout(inst_34474,(10));
var state_34526__$1 = (function (){var statearr_34534 = state_34526;
(statearr_34534[(17)] = inst_34468);

(statearr_34534[(18)] = inst_34473);

return statearr_34534;
})();
var statearr_34535_34602 = state_34526__$1;
(statearr_34535_34602[(2)] = inst_34475);

(statearr_34535_34602[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (27))){
var inst_34485 = (state_34526[(19)]);
var state_34526__$1 = state_34526;
var statearr_34536_34603 = state_34526__$1;
(statearr_34536_34603[(2)] = inst_34485);

(statearr_34536_34603[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (1))){
var inst_34405 = (state_34526[(20)]);
var inst_34403 = before_jsload.call(null,files);
var inst_34404 = (function (){return ((function (inst_34405,inst_34403,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (p1__34195_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34195_SHARP_);
});
;})(inst_34405,inst_34403,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var inst_34405__$1 = cljs.core.filter.call(null,inst_34404,files);
var inst_34406 = cljs.core.not_empty.call(null,inst_34405__$1);
var state_34526__$1 = (function (){var statearr_34537 = state_34526;
(statearr_34537[(20)] = inst_34405__$1);

(statearr_34537[(21)] = inst_34403);

return statearr_34537;
})();
if(cljs.core.truth_(inst_34406)){
var statearr_34538_34604 = state_34526__$1;
(statearr_34538_34604[(1)] = (2));

} else {
var statearr_34539_34605 = state_34526__$1;
(statearr_34539_34605[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (24))){
var state_34526__$1 = state_34526;
var statearr_34540_34606 = state_34526__$1;
(statearr_34540_34606[(2)] = null);

(statearr_34540_34606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (4))){
var inst_34450 = (state_34526[(2)]);
var inst_34451 = (function (){return ((function (inst_34450,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (p1__34196_SHARP_){
var and__24914__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34196_SHARP_);
if(cljs.core.truth_(and__24914__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34196_SHARP_));
} else {
return and__24914__auto__;
}
});
;})(inst_34450,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var inst_34452 = cljs.core.filter.call(null,inst_34451,files);
var state_34526__$1 = (function (){var statearr_34541 = state_34526;
(statearr_34541[(22)] = inst_34450);

(statearr_34541[(23)] = inst_34452);

return statearr_34541;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_34542_34607 = state_34526__$1;
(statearr_34542_34607[(1)] = (16));

} else {
var statearr_34543_34608 = state_34526__$1;
(statearr_34543_34608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (15))){
var inst_34440 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34544_34609 = state_34526__$1;
(statearr_34544_34609[(2)] = inst_34440);

(statearr_34544_34609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (21))){
var state_34526__$1 = state_34526;
var statearr_34545_34610 = state_34526__$1;
(statearr_34545_34610[(2)] = null);

(statearr_34545_34610[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (31))){
var inst_34493 = (state_34526[(24)]);
var inst_34503 = (state_34526[(2)]);
var inst_34504 = cljs.core.not_empty.call(null,inst_34493);
var state_34526__$1 = (function (){var statearr_34546 = state_34526;
(statearr_34546[(25)] = inst_34503);

return statearr_34546;
})();
if(cljs.core.truth_(inst_34504)){
var statearr_34547_34611 = state_34526__$1;
(statearr_34547_34611[(1)] = (32));

} else {
var statearr_34548_34612 = state_34526__$1;
(statearr_34548_34612[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (32))){
var inst_34493 = (state_34526[(24)]);
var inst_34506 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34493);
var inst_34507 = cljs.core.pr_str.call(null,inst_34506);
var inst_34508 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_34507)].join('');
var inst_34509 = figwheel.client.utils.log.call(null,inst_34508);
var state_34526__$1 = state_34526;
var statearr_34549_34613 = state_34526__$1;
(statearr_34549_34613[(2)] = inst_34509);

(statearr_34549_34613[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (33))){
var state_34526__$1 = state_34526;
var statearr_34550_34614 = state_34526__$1;
(statearr_34550_34614[(2)] = null);

(statearr_34550_34614[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (13))){
var inst_34426 = (state_34526[(26)]);
var inst_34430 = cljs.core.chunk_first.call(null,inst_34426);
var inst_34431 = cljs.core.chunk_rest.call(null,inst_34426);
var inst_34432 = cljs.core.count.call(null,inst_34430);
var inst_34413 = inst_34431;
var inst_34414 = inst_34430;
var inst_34415 = inst_34432;
var inst_34416 = (0);
var state_34526__$1 = (function (){var statearr_34551 = state_34526;
(statearr_34551[(7)] = inst_34414);

(statearr_34551[(8)] = inst_34413);

(statearr_34551[(9)] = inst_34416);

(statearr_34551[(10)] = inst_34415);

return statearr_34551;
})();
var statearr_34552_34615 = state_34526__$1;
(statearr_34552_34615[(2)] = null);

(statearr_34552_34615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (22))){
var inst_34465 = (state_34526[(16)]);
var inst_34478 = (state_34526[(2)]);
var inst_34479 = cljs.core.not_empty.call(null,inst_34465);
var state_34526__$1 = (function (){var statearr_34553 = state_34526;
(statearr_34553[(27)] = inst_34478);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34479)){
var statearr_34554_34616 = state_34526__$1;
(statearr_34554_34616[(1)] = (23));

} else {
var statearr_34555_34617 = state_34526__$1;
(statearr_34555_34617[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (36))){
var state_34526__$1 = state_34526;
var statearr_34556_34618 = state_34526__$1;
(statearr_34556_34618[(2)] = null);

(statearr_34556_34618[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (29))){
var inst_34494 = (state_34526[(28)]);
var inst_34497 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34494);
var inst_34498 = cljs.core.pr_str.call(null,inst_34497);
var inst_34499 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34498)].join('');
var inst_34500 = figwheel.client.utils.log.call(null,inst_34499);
var state_34526__$1 = state_34526;
var statearr_34557_34619 = state_34526__$1;
(statearr_34557_34619[(2)] = inst_34500);

(statearr_34557_34619[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (6))){
var inst_34447 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34558_34620 = state_34526__$1;
(statearr_34558_34620[(2)] = inst_34447);

(statearr_34558_34620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (28))){
var inst_34494 = (state_34526[(28)]);
var inst_34491 = (state_34526[(2)]);
var inst_34492 = cljs.core.get.call(null,inst_34491,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34493 = cljs.core.get.call(null,inst_34491,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_34494__$1 = cljs.core.get.call(null,inst_34491,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34495 = cljs.core.not_empty.call(null,inst_34494__$1);
var state_34526__$1 = (function (){var statearr_34559 = state_34526;
(statearr_34559[(24)] = inst_34493);

(statearr_34559[(28)] = inst_34494__$1);

(statearr_34559[(29)] = inst_34492);

return statearr_34559;
})();
if(cljs.core.truth_(inst_34495)){
var statearr_34560_34621 = state_34526__$1;
(statearr_34560_34621[(1)] = (29));

} else {
var statearr_34561_34622 = state_34526__$1;
(statearr_34561_34622[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (25))){
var inst_34524 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34526__$1,inst_34524);
} else {
if((state_val_34527 === (34))){
var inst_34492 = (state_34526[(29)]);
var inst_34512 = (state_34526[(2)]);
var inst_34513 = cljs.core.not_empty.call(null,inst_34492);
var state_34526__$1 = (function (){var statearr_34562 = state_34526;
(statearr_34562[(30)] = inst_34512);

return statearr_34562;
})();
if(cljs.core.truth_(inst_34513)){
var statearr_34563_34623 = state_34526__$1;
(statearr_34563_34623[(1)] = (35));

} else {
var statearr_34564_34624 = state_34526__$1;
(statearr_34564_34624[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (17))){
var inst_34452 = (state_34526[(23)]);
var state_34526__$1 = state_34526;
var statearr_34565_34625 = state_34526__$1;
(statearr_34565_34625[(2)] = inst_34452);

(statearr_34565_34625[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (3))){
var state_34526__$1 = state_34526;
var statearr_34566_34626 = state_34526__$1;
(statearr_34566_34626[(2)] = null);

(statearr_34566_34626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (12))){
var inst_34443 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34567_34627 = state_34526__$1;
(statearr_34567_34627[(2)] = inst_34443);

(statearr_34567_34627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (2))){
var inst_34405 = (state_34526[(20)]);
var inst_34412 = cljs.core.seq.call(null,inst_34405);
var inst_34413 = inst_34412;
var inst_34414 = null;
var inst_34415 = (0);
var inst_34416 = (0);
var state_34526__$1 = (function (){var statearr_34568 = state_34526;
(statearr_34568[(7)] = inst_34414);

(statearr_34568[(8)] = inst_34413);

(statearr_34568[(9)] = inst_34416);

(statearr_34568[(10)] = inst_34415);

return statearr_34568;
})();
var statearr_34569_34628 = state_34526__$1;
(statearr_34569_34628[(2)] = null);

(statearr_34569_34628[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (23))){
var inst_34463 = (state_34526[(12)]);
var inst_34462 = (state_34526[(13)]);
var inst_34485 = (state_34526[(19)]);
var inst_34459 = (state_34526[(14)]);
var inst_34458 = (state_34526[(15)]);
var inst_34465 = (state_34526[(16)]);
var inst_34481 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34484 = (function (){var files_not_loaded = inst_34465;
var res = inst_34463;
var res_SINGLEQUOTE_ = inst_34462;
var files_SINGLEQUOTE_ = inst_34459;
var all_files = inst_34458;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34485,inst_34459,inst_34458,inst_34465,inst_34481,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (p__34483){
var map__34570 = p__34483;
var map__34570__$1 = ((cljs.core.seq_QMARK_.call(null,map__34570))?cljs.core.apply.call(null,cljs.core.hash_map,map__34570):map__34570);
var meta_data = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34485,inst_34459,inst_34458,inst_34465,inst_34481,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var inst_34485__$1 = cljs.core.group_by.call(null,inst_34484,inst_34465);
var inst_34486 = cljs.core.seq_QMARK_.call(null,inst_34485__$1);
var state_34526__$1 = (function (){var statearr_34571 = state_34526;
(statearr_34571[(19)] = inst_34485__$1);

(statearr_34571[(31)] = inst_34481);

return statearr_34571;
})();
if(inst_34486){
var statearr_34572_34629 = state_34526__$1;
(statearr_34572_34629[(1)] = (26));

} else {
var statearr_34573_34630 = state_34526__$1;
(statearr_34573_34630[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (35))){
var inst_34492 = (state_34526[(29)]);
var inst_34515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34492);
var inst_34516 = cljs.core.pr_str.call(null,inst_34515);
var inst_34517 = [cljs.core.str("not required: "),cljs.core.str(inst_34516)].join('');
var inst_34518 = figwheel.client.utils.log.call(null,inst_34517);
var state_34526__$1 = state_34526;
var statearr_34574_34631 = state_34526__$1;
(statearr_34574_34631[(2)] = inst_34518);

(statearr_34574_34631[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (19))){
var inst_34463 = (state_34526[(12)]);
var inst_34462 = (state_34526[(13)]);
var inst_34459 = (state_34526[(14)]);
var inst_34458 = (state_34526[(15)]);
var inst_34462__$1 = (state_34526[(2)]);
var inst_34463__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34462__$1);
var inst_34464 = (function (){var res = inst_34463__$1;
var res_SINGLEQUOTE_ = inst_34462__$1;
var files_SINGLEQUOTE_ = inst_34459;
var all_files = inst_34458;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34459,inst_34458,inst_34462__$1,inst_34463__$1,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (p1__34198_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34198_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_34463,inst_34462,inst_34459,inst_34458,inst_34462__$1,inst_34463__$1,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var inst_34465 = cljs.core.filter.call(null,inst_34464,inst_34462__$1);
var inst_34466 = cljs.core.not_empty.call(null,inst_34463__$1);
var state_34526__$1 = (function (){var statearr_34575 = state_34526;
(statearr_34575[(12)] = inst_34463__$1);

(statearr_34575[(13)] = inst_34462__$1);

(statearr_34575[(16)] = inst_34465);

return statearr_34575;
})();
if(cljs.core.truth_(inst_34466)){
var statearr_34576_34632 = state_34526__$1;
(statearr_34576_34632[(1)] = (20));

} else {
var statearr_34577_34633 = state_34526__$1;
(statearr_34577_34633[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (11))){
var state_34526__$1 = state_34526;
var statearr_34578_34634 = state_34526__$1;
(statearr_34578_34634[(2)] = null);

(statearr_34578_34634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (9))){
var inst_34445 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34579_34635 = state_34526__$1;
(statearr_34579_34635[(2)] = inst_34445);

(statearr_34579_34635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (5))){
var inst_34416 = (state_34526[(9)]);
var inst_34415 = (state_34526[(10)]);
var inst_34418 = (inst_34416 < inst_34415);
var inst_34419 = inst_34418;
var state_34526__$1 = state_34526;
if(cljs.core.truth_(inst_34419)){
var statearr_34580_34636 = state_34526__$1;
(statearr_34580_34636[(1)] = (7));

} else {
var statearr_34581_34637 = state_34526__$1;
(statearr_34581_34637[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (14))){
var inst_34426 = (state_34526[(26)]);
var inst_34435 = cljs.core.first.call(null,inst_34426);
var inst_34436 = figwheel.client.file_reloading.eval_body.call(null,inst_34435);
var inst_34437 = cljs.core.next.call(null,inst_34426);
var inst_34413 = inst_34437;
var inst_34414 = null;
var inst_34415 = (0);
var inst_34416 = (0);
var state_34526__$1 = (function (){var statearr_34582 = state_34526;
(statearr_34582[(32)] = inst_34436);

(statearr_34582[(7)] = inst_34414);

(statearr_34582[(8)] = inst_34413);

(statearr_34582[(9)] = inst_34416);

(statearr_34582[(10)] = inst_34415);

return statearr_34582;
})();
var statearr_34583_34638 = state_34526__$1;
(statearr_34583_34638[(2)] = null);

(statearr_34583_34638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (26))){
var inst_34485 = (state_34526[(19)]);
var inst_34488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34485);
var state_34526__$1 = state_34526;
var statearr_34584_34639 = state_34526__$1;
(statearr_34584_34639[(2)] = inst_34488);

(statearr_34584_34639[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (16))){
var inst_34452 = (state_34526[(23)]);
var inst_34454 = (function (){var all_files = inst_34452;
return ((function (all_files,inst_34452,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function (p1__34197_SHARP_){
return cljs.core.update_in.call(null,p1__34197_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_34452,state_val_34527,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var inst_34455 = cljs.core.map.call(null,inst_34454,inst_34452);
var state_34526__$1 = state_34526;
var statearr_34585_34640 = state_34526__$1;
(statearr_34585_34640[(2)] = inst_34455);

(statearr_34585_34640[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (30))){
var state_34526__$1 = state_34526;
var statearr_34586_34641 = state_34526__$1;
(statearr_34586_34641[(2)] = null);

(statearr_34586_34641[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (10))){
var inst_34426 = (state_34526[(26)]);
var inst_34428 = cljs.core.chunked_seq_QMARK_.call(null,inst_34426);
var state_34526__$1 = state_34526;
if(inst_34428){
var statearr_34587_34642 = state_34526__$1;
(statearr_34587_34642[(1)] = (13));

} else {
var statearr_34588_34643 = state_34526__$1;
(statearr_34588_34643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (18))){
var inst_34459 = (state_34526[(14)]);
var inst_34458 = (state_34526[(15)]);
var inst_34458__$1 = (state_34526[(2)]);
var inst_34459__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_34458__$1);
var inst_34460 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34459__$1);
var state_34526__$1 = (function (){var statearr_34589 = state_34526;
(statearr_34589[(14)] = inst_34459__$1);

(statearr_34589[(15)] = inst_34458__$1);

return statearr_34589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34526__$1,(19),inst_34460);
} else {
if((state_val_34527 === (37))){
var inst_34521 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34590_34644 = state_34526__$1;
(statearr_34590_34644[(2)] = inst_34521);

(statearr_34590_34644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (8))){
var inst_34426 = (state_34526[(26)]);
var inst_34413 = (state_34526[(8)]);
var inst_34426__$1 = cljs.core.seq.call(null,inst_34413);
var state_34526__$1 = (function (){var statearr_34591 = state_34526;
(statearr_34591[(26)] = inst_34426__$1);

return statearr_34591;
})();
if(inst_34426__$1){
var statearr_34592_34645 = state_34526__$1;
(statearr_34592_34645[(1)] = (10));

} else {
var statearr_34593_34646 = state_34526__$1;
(statearr_34593_34646[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
;
return ((function (switch__28134__auto__,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto____0 = (function (){
var statearr_34597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34597[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto__);

(statearr_34597[(1)] = (1));

return statearr_34597;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto____1 = (function (state_34526){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_34526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e34598){if((e34598 instanceof Object)){
var ex__28138__auto__ = e34598;
var statearr_34599_34647 = state_34526;
(statearr_34599_34647[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34648 = state_34526;
state_34526 = G__34648;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto__ = function(state_34526){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto____1.call(this,state_34526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
})();
var state__28198__auto__ = (function (){var statearr_34600 = f__28197__auto__.call(null);
(statearr_34600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_34600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__,map__34401,map__34401__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__34402,map__34402__$1,msg,files))
);

return c__28196__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34651,link){
var map__34653 = p__34651;
var map__34653__$1 = ((cljs.core.seq_QMARK_.call(null,map__34653))?cljs.core.apply.call(null,cljs.core.hash_map,map__34653):map__34653);
var file = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__34653,map__34653__$1,file){
return (function (p1__34649_SHARP_,p2__34650_SHARP_){
if(cljs.core._EQ_.call(null,p1__34649_SHARP_,p2__34650_SHARP_)){
return p1__34649_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__34653,map__34653__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34657){
var map__34658 = p__34657;
var map__34658__$1 = ((cljs.core.seq_QMARK_.call(null,map__34658))?cljs.core.apply.call(null,cljs.core.hash_map,map__34658):map__34658);
var current_url_length = cljs.core.get.call(null,map__34658__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__34658__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34654_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34654_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__34660 = arguments.length;
switch (G__34660) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34662){
var map__34664 = p__34662;
var map__34664__$1 = ((cljs.core.seq_QMARK_.call(null,map__34664))?cljs.core.apply.call(null,cljs.core.hash_map,map__34664):map__34664);
var f_data = map__34664__$1;
var request_url = cljs.core.get.call(null,map__34664__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__34664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__24926__auto__ = request_url;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34665,files_msg){
var map__34687 = p__34665;
var map__34687__$1 = ((cljs.core.seq_QMARK_.call(null,map__34687))?cljs.core.apply.call(null,cljs.core.hash_map,map__34687):map__34687);
var opts = map__34687__$1;
var on_cssload = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34688_34708 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34689_34709 = null;
var count__34690_34710 = (0);
var i__34691_34711 = (0);
while(true){
if((i__34691_34711 < count__34690_34710)){
var f_34712 = cljs.core._nth.call(null,chunk__34689_34709,i__34691_34711);
figwheel.client.file_reloading.reload_css_file.call(null,f_34712);

var G__34713 = seq__34688_34708;
var G__34714 = chunk__34689_34709;
var G__34715 = count__34690_34710;
var G__34716 = (i__34691_34711 + (1));
seq__34688_34708 = G__34713;
chunk__34689_34709 = G__34714;
count__34690_34710 = G__34715;
i__34691_34711 = G__34716;
continue;
} else {
var temp__4126__auto___34717 = cljs.core.seq.call(null,seq__34688_34708);
if(temp__4126__auto___34717){
var seq__34688_34718__$1 = temp__4126__auto___34717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34688_34718__$1)){
var c__25711__auto___34719 = cljs.core.chunk_first.call(null,seq__34688_34718__$1);
var G__34720 = cljs.core.chunk_rest.call(null,seq__34688_34718__$1);
var G__34721 = c__25711__auto___34719;
var G__34722 = cljs.core.count.call(null,c__25711__auto___34719);
var G__34723 = (0);
seq__34688_34708 = G__34720;
chunk__34689_34709 = G__34721;
count__34690_34710 = G__34722;
i__34691_34711 = G__34723;
continue;
} else {
var f_34724 = cljs.core.first.call(null,seq__34688_34718__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34724);

var G__34725 = cljs.core.next.call(null,seq__34688_34718__$1);
var G__34726 = null;
var G__34727 = (0);
var G__34728 = (0);
seq__34688_34708 = G__34725;
chunk__34689_34709 = G__34726;
count__34690_34710 = G__34727;
i__34691_34711 = G__34728;
continue;
}
} else {
}
}
break;
}

var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__,map__34687,map__34687__$1,opts,on_cssload){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__,map__34687,map__34687__$1,opts,on_cssload){
return (function (state_34698){
var state_val_34699 = (state_34698[(1)]);
if((state_val_34699 === (2))){
var inst_34694 = (state_34698[(2)]);
var inst_34695 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_34696 = on_cssload.call(null,inst_34695);
var state_34698__$1 = (function (){var statearr_34700 = state_34698;
(statearr_34700[(7)] = inst_34694);

return statearr_34700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34698__$1,inst_34696);
} else {
if((state_val_34699 === (1))){
var inst_34692 = cljs.core.async.timeout.call(null,(100));
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34698__$1,(2),inst_34692);
} else {
return null;
}
}
});})(c__28196__auto__,map__34687,map__34687__$1,opts,on_cssload))
;
return ((function (switch__28134__auto__,c__28196__auto__,map__34687,map__34687__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto____0 = (function (){
var statearr_34704 = [null,null,null,null,null,null,null,null];
(statearr_34704[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto__);

(statearr_34704[(1)] = (1));

return statearr_34704;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto____1 = (function (state_34698){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_34698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object)){
var ex__28138__auto__ = e34705;
var statearr_34706_34729 = state_34698;
(statearr_34706_34729[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34730 = state_34698;
state_34698 = G__34730;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto__ = function(state_34698){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto____1.call(this,state_34698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__,map__34687,map__34687__$1,opts,on_cssload))
})();
var state__28198__auto__ = (function (){var statearr_34707 = f__28197__auto__.call(null);
(statearr_34707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_34707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__,map__34687,map__34687__$1,opts,on_cssload))
);

return c__28196__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map