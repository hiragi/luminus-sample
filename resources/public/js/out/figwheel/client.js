// Compiled by ClojureScript 0.0-3178 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33114__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33115__i = 0, G__33115__a = new Array(arguments.length -  0);
while (G__33115__i < G__33115__a.length) {G__33115__a[G__33115__i] = arguments[G__33115__i + 0]; ++G__33115__i;}
  args = new cljs.core.IndexedSeq(G__33115__a,0);
} 
return G__33114__delegate.call(this,args);};
G__33114.cljs$lang$maxFixedArity = 0;
G__33114.cljs$lang$applyTo = (function (arglist__33116){
var args = cljs.core.seq(arglist__33116);
return G__33114__delegate(args);
});
G__33114.cljs$core$IFn$_invoke$arity$variadic = G__33114__delegate;
return G__33114;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33117){
var map__33119 = p__33117;
var map__33119__$1 = ((cljs.core.seq_QMARK_.call(null,map__33119))?cljs.core.apply.call(null,cljs.core.hash_map,map__33119):map__33119);
var class$ = cljs.core.get.call(null,map__33119__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__33119__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24926__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24914__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24914__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24914__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28196__auto___33248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___33248,ch){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___33248,ch){
return (function (state_33222){
var state_val_33223 = (state_33222[(1)]);
if((state_val_33223 === (7))){
var inst_33218 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33224_33249 = state_33222__$1;
(statearr_33224_33249[(2)] = inst_33218);

(statearr_33224_33249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (1))){
var state_33222__$1 = state_33222;
var statearr_33225_33250 = state_33222__$1;
(statearr_33225_33250[(2)] = null);

(statearr_33225_33250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (4))){
var inst_33186 = (state_33222[(7)]);
var inst_33186__$1 = (state_33222[(2)]);
var state_33222__$1 = (function (){var statearr_33226 = state_33222;
(statearr_33226[(7)] = inst_33186__$1);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33186__$1)){
var statearr_33227_33251 = state_33222__$1;
(statearr_33227_33251[(1)] = (5));

} else {
var statearr_33228_33252 = state_33222__$1;
(statearr_33228_33252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (13))){
var state_33222__$1 = state_33222;
var statearr_33229_33253 = state_33222__$1;
(statearr_33229_33253[(2)] = null);

(statearr_33229_33253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (6))){
var state_33222__$1 = state_33222;
var statearr_33230_33254 = state_33222__$1;
(statearr_33230_33254[(2)] = null);

(statearr_33230_33254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (3))){
var inst_33220 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33222__$1,inst_33220);
} else {
if((state_val_33223 === (12))){
var inst_33193 = (state_33222[(8)]);
var inst_33206 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33193);
var inst_33207 = cljs.core.first.call(null,inst_33206);
var inst_33208 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33207);
var inst_33209 = console.warn("Figwheel: Not loading code with warnings - ",inst_33208);
var state_33222__$1 = state_33222;
var statearr_33231_33255 = state_33222__$1;
(statearr_33231_33255[(2)] = inst_33209);

(statearr_33231_33255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (2))){
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33222__$1,(4),ch);
} else {
if((state_val_33223 === (11))){
var inst_33202 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33232_33256 = state_33222__$1;
(statearr_33232_33256[(2)] = inst_33202);

(statearr_33232_33256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (9))){
var inst_33192 = (state_33222[(9)]);
var inst_33204 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33192,opts);
var state_33222__$1 = state_33222;
if(cljs.core.truth_(inst_33204)){
var statearr_33233_33257 = state_33222__$1;
(statearr_33233_33257[(1)] = (12));

} else {
var statearr_33234_33258 = state_33222__$1;
(statearr_33234_33258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (5))){
var inst_33192 = (state_33222[(9)]);
var inst_33186 = (state_33222[(7)]);
var inst_33188 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33189 = (new cljs.core.PersistentArrayMap(null,2,inst_33188,null));
var inst_33190 = (new cljs.core.PersistentHashSet(null,inst_33189,null));
var inst_33191 = figwheel.client.focus_msgs.call(null,inst_33190,inst_33186);
var inst_33192__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33191);
var inst_33193 = cljs.core.first.call(null,inst_33191);
var inst_33194 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33192__$1,opts);
var state_33222__$1 = (function (){var statearr_33235 = state_33222;
(statearr_33235[(9)] = inst_33192__$1);

(statearr_33235[(8)] = inst_33193);

return statearr_33235;
})();
if(cljs.core.truth_(inst_33194)){
var statearr_33236_33259 = state_33222__$1;
(statearr_33236_33259[(1)] = (8));

} else {
var statearr_33237_33260 = state_33222__$1;
(statearr_33237_33260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (14))){
var inst_33212 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33238_33261 = state_33222__$1;
(statearr_33238_33261[(2)] = inst_33212);

(statearr_33238_33261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (10))){
var inst_33214 = (state_33222[(2)]);
var state_33222__$1 = (function (){var statearr_33239 = state_33222;
(statearr_33239[(10)] = inst_33214);

return statearr_33239;
})();
var statearr_33240_33262 = state_33222__$1;
(statearr_33240_33262[(2)] = null);

(statearr_33240_33262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (8))){
var inst_33193 = (state_33222[(8)]);
var inst_33196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33197 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33193);
var inst_33198 = cljs.core.async.timeout.call(null,(1000));
var inst_33199 = [inst_33197,inst_33198];
var inst_33200 = (new cljs.core.PersistentVector(null,2,(5),inst_33196,inst_33199,null));
var state_33222__$1 = state_33222;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33222__$1,(11),inst_33200);
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
});})(c__28196__auto___33248,ch))
;
return ((function (switch__28134__auto__,c__28196__auto___33248,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28135__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28135__auto____0 = (function (){
var statearr_33244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33244[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28135__auto__);

(statearr_33244[(1)] = (1));

return statearr_33244;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28135__auto____1 = (function (state_33222){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_33222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e33245){if((e33245 instanceof Object)){
var ex__28138__auto__ = e33245;
var statearr_33246_33263 = state_33222;
(statearr_33246_33263[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33264 = state_33222;
state_33222 = G__33264;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28135__auto__ = function(state_33222){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28135__auto____1.call(this,state_33222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28135__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28135__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___33248,ch))
})();
var state__28198__auto__ = (function (){var statearr_33247 = f__28197__auto__.call(null);
(statearr_33247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___33248);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___33248,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33265_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33265_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_33274 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33267_SHARP_,p2__33266_SHARP_){
return [cljs.core.str(p2__33266_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33274){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_33272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33273 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33272,_STAR_print_newline_STAR_33273,base_path_33274){
return (function() { 
var G__33275__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33276__i = 0, G__33276__a = new Array(arguments.length -  0);
while (G__33276__i < G__33276__a.length) {G__33276__a[G__33276__i] = arguments[G__33276__i + 0]; ++G__33276__i;}
  args = new cljs.core.IndexedSeq(G__33276__a,0);
} 
return G__33275__delegate.call(this,args);};
G__33275.cljs$lang$maxFixedArity = 0;
G__33275.cljs$lang$applyTo = (function (arglist__33277){
var args = cljs.core.seq(arglist__33277);
return G__33275__delegate(args);
});
G__33275.cljs$core$IFn$_invoke$arity$variadic = G__33275__delegate;
return G__33275;
})()
;})(_STAR_print_fn_STAR_33272,_STAR_print_newline_STAR_33273,base_path_33274))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33273;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33272;
}}catch (e33271){if((e33271 instanceof Error)){
var e = e33271;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33274], null));
} else {
var e = e33271;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33274))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33278){
var map__33283 = p__33278;
var map__33283__$1 = ((cljs.core.seq_QMARK_.call(null,map__33283))?cljs.core.apply.call(null,cljs.core.hash_map,map__33283):map__33283);
var opts = map__33283__$1;
var build_id = cljs.core.get.call(null,map__33283__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33283,map__33283__$1,opts,build_id){
return (function (p__33284){
var vec__33285 = p__33284;
var map__33286 = cljs.core.nth.call(null,vec__33285,(0),null);
var map__33286__$1 = ((cljs.core.seq_QMARK_.call(null,map__33286))?cljs.core.apply.call(null,cljs.core.hash_map,map__33286):map__33286);
var msg = map__33286__$1;
var msg_name = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33285,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__33285,map__33286,map__33286__$1,msg,msg_name,_,map__33283,map__33283__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33285,map__33286,map__33286__$1,msg,msg_name,_,map__33283,map__33283__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33283,map__33283__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33290){
var vec__33291 = p__33290;
var map__33292 = cljs.core.nth.call(null,vec__33291,(0),null);
var map__33292__$1 = ((cljs.core.seq_QMARK_.call(null,map__33292))?cljs.core.apply.call(null,cljs.core.hash_map,map__33292):map__33292);
var msg = map__33292__$1;
var msg_name = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33291,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33293){
var map__33301 = p__33293;
var map__33301__$1 = ((cljs.core.seq_QMARK_.call(null,map__33301))?cljs.core.apply.call(null,cljs.core.hash_map,map__33301):map__33301);
var on_compile_fail = cljs.core.get.call(null,map__33301__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__33301__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__33301,map__33301__$1,on_compile_fail,on_compile_warning){
return (function (p__33302){
var vec__33303 = p__33302;
var map__33304 = cljs.core.nth.call(null,vec__33303,(0),null);
var map__33304__$1 = ((cljs.core.seq_QMARK_.call(null,map__33304))?cljs.core.apply.call(null,cljs.core.hash_map,map__33304):map__33304);
var msg = map__33304__$1;
var msg_name = cljs.core.get.call(null,map__33304__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33303,(1));
var pred__33305 = cljs.core._EQ_;
var expr__33306 = msg_name;
if(cljs.core.truth_(pred__33305.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33306))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33305.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33306))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33301,map__33301__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__,msg_hist,msg_names,msg){
return (function (state_33503){
var state_val_33504 = (state_33503[(1)]);
if((state_val_33504 === (7))){
var inst_33439 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33505_33546 = state_33503__$1;
(statearr_33505_33546[(2)] = inst_33439);

(statearr_33505_33546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (20))){
var inst_33465 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33465)){
var statearr_33506_33547 = state_33503__$1;
(statearr_33506_33547[(1)] = (22));

} else {
var statearr_33507_33548 = state_33503__$1;
(statearr_33507_33548[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (27))){
var inst_33477 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33478 = figwheel.client.heads_up.display_warning.call(null,inst_33477);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(30),inst_33478);
} else {
if((state_val_33504 === (1))){
var inst_33427 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33427)){
var statearr_33508_33549 = state_33503__$1;
(statearr_33508_33549[(1)] = (2));

} else {
var statearr_33509_33550 = state_33503__$1;
(statearr_33509_33550[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (24))){
var inst_33493 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33510_33551 = state_33503__$1;
(statearr_33510_33551[(2)] = inst_33493);

(statearr_33510_33551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (4))){
var inst_33501 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33503__$1,inst_33501);
} else {
if((state_val_33504 === (15))){
var inst_33454 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33455 = figwheel.client.format_messages.call(null,inst_33454);
var inst_33456 = figwheel.client.heads_up.display_error.call(null,inst_33455);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(18),inst_33456);
} else {
if((state_val_33504 === (21))){
var inst_33495 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33511_33552 = state_33503__$1;
(statearr_33511_33552[(2)] = inst_33495);

(statearr_33511_33552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (31))){
var inst_33484 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(34),inst_33484);
} else {
if((state_val_33504 === (32))){
var state_33503__$1 = state_33503;
var statearr_33512_33553 = state_33503__$1;
(statearr_33512_33553[(2)] = null);

(statearr_33512_33553[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (33))){
var inst_33489 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33513_33554 = state_33503__$1;
(statearr_33513_33554[(2)] = inst_33489);

(statearr_33513_33554[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (13))){
var inst_33445 = (state_33503[(2)]);
var inst_33446 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33447 = figwheel.client.format_messages.call(null,inst_33446);
var inst_33448 = figwheel.client.heads_up.display_error.call(null,inst_33447);
var state_33503__$1 = (function (){var statearr_33514 = state_33503;
(statearr_33514[(7)] = inst_33445);

return statearr_33514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(14),inst_33448);
} else {
if((state_val_33504 === (22))){
var inst_33467 = figwheel.client.heads_up.clear.call(null);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(25),inst_33467);
} else {
if((state_val_33504 === (29))){
var inst_33491 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33515_33555 = state_33503__$1;
(statearr_33515_33555[(2)] = inst_33491);

(statearr_33515_33555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (6))){
var inst_33435 = figwheel.client.heads_up.clear.call(null);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(9),inst_33435);
} else {
if((state_val_33504 === (28))){
var inst_33482 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33482)){
var statearr_33516_33556 = state_33503__$1;
(statearr_33516_33556[(1)] = (31));

} else {
var statearr_33517_33557 = state_33503__$1;
(statearr_33517_33557[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (25))){
var inst_33469 = (state_33503[(2)]);
var inst_33470 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33471 = figwheel.client.heads_up.display_warning.call(null,inst_33470);
var state_33503__$1 = (function (){var statearr_33518 = state_33503;
(statearr_33518[(8)] = inst_33469);

return statearr_33518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(26),inst_33471);
} else {
if((state_val_33504 === (34))){
var inst_33486 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33519_33558 = state_33503__$1;
(statearr_33519_33558[(2)] = inst_33486);

(statearr_33519_33558[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (17))){
var inst_33497 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33520_33559 = state_33503__$1;
(statearr_33520_33559[(2)] = inst_33497);

(statearr_33520_33559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (3))){
var inst_33441 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33441)){
var statearr_33521_33560 = state_33503__$1;
(statearr_33521_33560[(1)] = (10));

} else {
var statearr_33522_33561 = state_33503__$1;
(statearr_33522_33561[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (12))){
var inst_33499 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33523_33562 = state_33503__$1;
(statearr_33523_33562[(2)] = inst_33499);

(statearr_33523_33562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (2))){
var inst_33429 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33429)){
var statearr_33524_33563 = state_33503__$1;
(statearr_33524_33563[(1)] = (5));

} else {
var statearr_33525_33564 = state_33503__$1;
(statearr_33525_33564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (23))){
var inst_33475 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33475)){
var statearr_33526_33565 = state_33503__$1;
(statearr_33526_33565[(1)] = (27));

} else {
var statearr_33527_33566 = state_33503__$1;
(statearr_33527_33566[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (19))){
var inst_33462 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33463 = figwheel.client.heads_up.append_message.call(null,inst_33462);
var state_33503__$1 = state_33503;
var statearr_33528_33567 = state_33503__$1;
(statearr_33528_33567[(2)] = inst_33463);

(statearr_33528_33567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (11))){
var inst_33452 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33452)){
var statearr_33529_33568 = state_33503__$1;
(statearr_33529_33568[(1)] = (15));

} else {
var statearr_33530_33569 = state_33503__$1;
(statearr_33530_33569[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (9))){
var inst_33437 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33531_33570 = state_33503__$1;
(statearr_33531_33570[(2)] = inst_33437);

(statearr_33531_33570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (5))){
var inst_33431 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(8),inst_33431);
} else {
if((state_val_33504 === (14))){
var inst_33450 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33532_33571 = state_33503__$1;
(statearr_33532_33571[(2)] = inst_33450);

(statearr_33532_33571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (26))){
var inst_33473 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33533_33572 = state_33503__$1;
(statearr_33533_33572[(2)] = inst_33473);

(statearr_33533_33572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (16))){
var inst_33460 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33460)){
var statearr_33534_33573 = state_33503__$1;
(statearr_33534_33573[(1)] = (19));

} else {
var statearr_33535_33574 = state_33503__$1;
(statearr_33535_33574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (30))){
var inst_33480 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33536_33575 = state_33503__$1;
(statearr_33536_33575[(2)] = inst_33480);

(statearr_33536_33575[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (10))){
var inst_33443 = figwheel.client.heads_up.clear.call(null);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(13),inst_33443);
} else {
if((state_val_33504 === (18))){
var inst_33458 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33537_33576 = state_33503__$1;
(statearr_33537_33576[(2)] = inst_33458);

(statearr_33537_33576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (8))){
var inst_33433 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33538_33577 = state_33503__$1;
(statearr_33538_33577[(2)] = inst_33433);

(statearr_33538_33577[(1)] = (7));


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
});})(c__28196__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28134__auto__,c__28196__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto____0 = (function (){
var statearr_33542 = [null,null,null,null,null,null,null,null,null];
(statearr_33542[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto__);

(statearr_33542[(1)] = (1));

return statearr_33542;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto____1 = (function (state_33503){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_33503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e33543){if((e33543 instanceof Object)){
var ex__28138__auto__ = e33543;
var statearr_33544_33578 = state_33503;
(statearr_33544_33578[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33579 = state_33503;
state_33503 = G__33579;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto__ = function(state_33503){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto____1.call(this,state_33503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__,msg_hist,msg_names,msg))
})();
var state__28198__auto__ = (function (){var statearr_33545 = f__28197__auto__.call(null);
(statearr_33545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_33545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__,msg_hist,msg_names,msg))
);

return c__28196__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28196__auto___33642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___33642,ch){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___33642,ch){
return (function (state_33625){
var state_val_33626 = (state_33625[(1)]);
if((state_val_33626 === (8))){
var inst_33617 = (state_33625[(2)]);
var state_33625__$1 = (function (){var statearr_33627 = state_33625;
(statearr_33627[(7)] = inst_33617);

return statearr_33627;
})();
var statearr_33628_33643 = state_33625__$1;
(statearr_33628_33643[(2)] = null);

(statearr_33628_33643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (7))){
var inst_33621 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33629_33644 = state_33625__$1;
(statearr_33629_33644[(2)] = inst_33621);

(statearr_33629_33644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (6))){
var state_33625__$1 = state_33625;
var statearr_33630_33645 = state_33625__$1;
(statearr_33630_33645[(2)] = null);

(statearr_33630_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (5))){
var inst_33613 = (state_33625[(8)]);
var inst_33615 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33613);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33625__$1,(8),inst_33615);
} else {
if((state_val_33626 === (4))){
var inst_33613 = (state_33625[(8)]);
var inst_33613__$1 = (state_33625[(2)]);
var state_33625__$1 = (function (){var statearr_33631 = state_33625;
(statearr_33631[(8)] = inst_33613__$1);

return statearr_33631;
})();
if(cljs.core.truth_(inst_33613__$1)){
var statearr_33632_33646 = state_33625__$1;
(statearr_33632_33646[(1)] = (5));

} else {
var statearr_33633_33647 = state_33625__$1;
(statearr_33633_33647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (3))){
var inst_33623 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33625__$1,inst_33623);
} else {
if((state_val_33626 === (2))){
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33625__$1,(4),ch);
} else {
if((state_val_33626 === (1))){
var state_33625__$1 = state_33625;
var statearr_33634_33648 = state_33625__$1;
(statearr_33634_33648[(2)] = null);

(statearr_33634_33648[(1)] = (2));


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
});})(c__28196__auto___33642,ch))
;
return ((function (switch__28134__auto__,c__28196__auto___33642,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28135__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28135__auto____0 = (function (){
var statearr_33638 = [null,null,null,null,null,null,null,null,null];
(statearr_33638[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28135__auto__);

(statearr_33638[(1)] = (1));

return statearr_33638;
});
var figwheel$client$heads_up_plugin_$_state_machine__28135__auto____1 = (function (state_33625){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_33625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e33639){if((e33639 instanceof Object)){
var ex__28138__auto__ = e33639;
var statearr_33640_33649 = state_33625;
(statearr_33640_33649[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33650 = state_33625;
state_33625 = G__33650;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28135__auto__ = function(state_33625){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28135__auto____1.call(this,state_33625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28135__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28135__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___33642,ch))
})();
var state__28198__auto__ = (function (){var statearr_33641 = f__28197__auto__.call(null);
(statearr_33641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___33642);

return statearr_33641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___33642,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__){
return (function (state_33671){
var state_val_33672 = (state_33671[(1)]);
if((state_val_33672 === (2))){
var inst_33668 = (state_33671[(2)]);
var inst_33669 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33671__$1 = (function (){var statearr_33673 = state_33671;
(statearr_33673[(7)] = inst_33668);

return statearr_33673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33671__$1,inst_33669);
} else {
if((state_val_33672 === (1))){
var inst_33666 = cljs.core.async.timeout.call(null,(3000));
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33671__$1,(2),inst_33666);
} else {
return null;
}
}
});})(c__28196__auto__))
;
return ((function (switch__28134__auto__,c__28196__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28135__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28135__auto____0 = (function (){
var statearr_33677 = [null,null,null,null,null,null,null,null];
(statearr_33677[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28135__auto__);

(statearr_33677[(1)] = (1));

return statearr_33677;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28135__auto____1 = (function (state_33671){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_33671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e33678){if((e33678 instanceof Object)){
var ex__28138__auto__ = e33678;
var statearr_33679_33681 = state_33671;
(statearr_33679_33681[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33682 = state_33671;
state_33671 = G__33682;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28135__auto__ = function(state_33671){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28135__auto____1.call(this,state_33671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28135__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28135__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__))
})();
var state__28198__auto__ = (function (){var statearr_33680 = f__28197__auto__.call(null);
(statearr_33680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_33680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__))
);

return c__28196__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__24914__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__24914__auto__)){
return ("CustomEvent" in window);
} else {
return and__24914__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj33686 = {"detail":url};
return obj33686;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33687){
var map__33693 = p__33687;
var map__33693__$1 = ((cljs.core.seq_QMARK_.call(null,map__33693))?cljs.core.apply.call(null,cljs.core.hash_map,map__33693):map__33693);
var ed = map__33693__$1;
var exception_data = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33694_33698 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33695_33699 = null;
var count__33696_33700 = (0);
var i__33697_33701 = (0);
while(true){
if((i__33697_33701 < count__33696_33700)){
var msg_33702 = cljs.core._nth.call(null,chunk__33695_33699,i__33697_33701);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33702);

var G__33703 = seq__33694_33698;
var G__33704 = chunk__33695_33699;
var G__33705 = count__33696_33700;
var G__33706 = (i__33697_33701 + (1));
seq__33694_33698 = G__33703;
chunk__33695_33699 = G__33704;
count__33696_33700 = G__33705;
i__33697_33701 = G__33706;
continue;
} else {
var temp__4126__auto___33707 = cljs.core.seq.call(null,seq__33694_33698);
if(temp__4126__auto___33707){
var seq__33694_33708__$1 = temp__4126__auto___33707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33694_33708__$1)){
var c__25711__auto___33709 = cljs.core.chunk_first.call(null,seq__33694_33708__$1);
var G__33710 = cljs.core.chunk_rest.call(null,seq__33694_33708__$1);
var G__33711 = c__25711__auto___33709;
var G__33712 = cljs.core.count.call(null,c__25711__auto___33709);
var G__33713 = (0);
seq__33694_33698 = G__33710;
chunk__33695_33699 = G__33711;
count__33696_33700 = G__33712;
i__33697_33701 = G__33713;
continue;
} else {
var msg_33714 = cljs.core.first.call(null,seq__33694_33708__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33714);

var G__33715 = cljs.core.next.call(null,seq__33694_33708__$1);
var G__33716 = null;
var G__33717 = (0);
var G__33718 = (0);
seq__33694_33698 = G__33715;
chunk__33695_33699 = G__33716;
count__33696_33700 = G__33717;
i__33697_33701 = G__33718;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33719){
var map__33721 = p__33719;
var map__33721__$1 = ((cljs.core.seq_QMARK_.call(null,map__33721))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721):map__33721);
var w = map__33721__$1;
var message = cljs.core.get.call(null,map__33721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24914__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24914__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24914__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33728 = cljs.core.seq.call(null,plugins);
var chunk__33729 = null;
var count__33730 = (0);
var i__33731 = (0);
while(true){
if((i__33731 < count__33730)){
var vec__33732 = cljs.core._nth.call(null,chunk__33729,i__33731);
var k = cljs.core.nth.call(null,vec__33732,(0),null);
var plugin = cljs.core.nth.call(null,vec__33732,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33728,chunk__33729,count__33730,i__33731,pl_33734,vec__33732,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33734.call(null,msg_hist);
});})(seq__33728,chunk__33729,count__33730,i__33731,pl_33734,vec__33732,k,plugin))
);
} else {
}

var G__33735 = seq__33728;
var G__33736 = chunk__33729;
var G__33737 = count__33730;
var G__33738 = (i__33731 + (1));
seq__33728 = G__33735;
chunk__33729 = G__33736;
count__33730 = G__33737;
i__33731 = G__33738;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33728);
if(temp__4126__auto__){
var seq__33728__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33728__$1)){
var c__25711__auto__ = cljs.core.chunk_first.call(null,seq__33728__$1);
var G__33739 = cljs.core.chunk_rest.call(null,seq__33728__$1);
var G__33740 = c__25711__auto__;
var G__33741 = cljs.core.count.call(null,c__25711__auto__);
var G__33742 = (0);
seq__33728 = G__33739;
chunk__33729 = G__33740;
count__33730 = G__33741;
i__33731 = G__33742;
continue;
} else {
var vec__33733 = cljs.core.first.call(null,seq__33728__$1);
var k = cljs.core.nth.call(null,vec__33733,(0),null);
var plugin = cljs.core.nth.call(null,vec__33733,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33743 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33728,chunk__33729,count__33730,i__33731,pl_33743,vec__33733,k,plugin,seq__33728__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33743.call(null,msg_hist);
});})(seq__33728,chunk__33729,count__33730,i__33731,pl_33743,vec__33733,k,plugin,seq__33728__$1,temp__4126__auto__))
);
} else {
}

var G__33744 = cljs.core.next.call(null,seq__33728__$1);
var G__33745 = null;
var G__33746 = (0);
var G__33747 = (0);
seq__33728 = G__33744;
chunk__33729 = G__33745;
count__33730 = G__33746;
i__33731 = G__33747;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__33749 = arguments.length;
switch (G__33749) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__25966__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25966__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33752){
var map__33753 = p__33752;
var map__33753__$1 = ((cljs.core.seq_QMARK_.call(null,map__33753))?cljs.core.apply.call(null,cljs.core.hash_map,map__33753):map__33753);
var opts = map__33753__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33751){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33751));
});

//# sourceMappingURL=client.js.map