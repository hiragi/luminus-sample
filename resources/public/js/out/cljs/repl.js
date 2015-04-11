// Compiled by ClojureScript 0.0-3178 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34009_34021 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34010_34022 = null;
var count__34011_34023 = (0);
var i__34012_34024 = (0);
while(true){
if((i__34012_34024 < count__34011_34023)){
var f_34025 = cljs.core._nth.call(null,chunk__34010_34022,i__34012_34024);
cljs.core.println.call(null,"  ",f_34025);

var G__34026 = seq__34009_34021;
var G__34027 = chunk__34010_34022;
var G__34028 = count__34011_34023;
var G__34029 = (i__34012_34024 + (1));
seq__34009_34021 = G__34026;
chunk__34010_34022 = G__34027;
count__34011_34023 = G__34028;
i__34012_34024 = G__34029;
continue;
} else {
var temp__4126__auto___34030 = cljs.core.seq.call(null,seq__34009_34021);
if(temp__4126__auto___34030){
var seq__34009_34031__$1 = temp__4126__auto___34030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34009_34031__$1)){
var c__25711__auto___34032 = cljs.core.chunk_first.call(null,seq__34009_34031__$1);
var G__34033 = cljs.core.chunk_rest.call(null,seq__34009_34031__$1);
var G__34034 = c__25711__auto___34032;
var G__34035 = cljs.core.count.call(null,c__25711__auto___34032);
var G__34036 = (0);
seq__34009_34021 = G__34033;
chunk__34010_34022 = G__34034;
count__34011_34023 = G__34035;
i__34012_34024 = G__34036;
continue;
} else {
var f_34037 = cljs.core.first.call(null,seq__34009_34031__$1);
cljs.core.println.call(null,"  ",f_34037);

var G__34038 = cljs.core.next.call(null,seq__34009_34031__$1);
var G__34039 = null;
var G__34040 = (0);
var G__34041 = (0);
seq__34009_34021 = G__34038;
chunk__34010_34022 = G__34039;
count__34011_34023 = G__34040;
i__34012_34024 = G__34041;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__24926__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34014 = null;
var count__34015 = (0);
var i__34016 = (0);
while(true){
if((i__34016 < count__34015)){
var vec__34017 = cljs.core._nth.call(null,chunk__34014,i__34016);
var name = cljs.core.nth.call(null,vec__34017,(0),null);
var map__34018 = cljs.core.nth.call(null,vec__34017,(1),null);
var map__34018__$1 = ((cljs.core.seq_QMARK_.call(null,map__34018))?cljs.core.apply.call(null,cljs.core.hash_map,map__34018):map__34018);
var arglists = cljs.core.get.call(null,map__34018__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__34018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34042 = seq__34013;
var G__34043 = chunk__34014;
var G__34044 = count__34015;
var G__34045 = (i__34016 + (1));
seq__34013 = G__34042;
chunk__34014 = G__34043;
count__34015 = G__34044;
i__34016 = G__34045;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34013);
if(temp__4126__auto__){
var seq__34013__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34013__$1)){
var c__25711__auto__ = cljs.core.chunk_first.call(null,seq__34013__$1);
var G__34046 = cljs.core.chunk_rest.call(null,seq__34013__$1);
var G__34047 = c__25711__auto__;
var G__34048 = cljs.core.count.call(null,c__25711__auto__);
var G__34049 = (0);
seq__34013 = G__34046;
chunk__34014 = G__34047;
count__34015 = G__34048;
i__34016 = G__34049;
continue;
} else {
var vec__34019 = cljs.core.first.call(null,seq__34013__$1);
var name = cljs.core.nth.call(null,vec__34019,(0),null);
var map__34020 = cljs.core.nth.call(null,vec__34019,(1),null);
var map__34020__$1 = ((cljs.core.seq_QMARK_.call(null,map__34020))?cljs.core.apply.call(null,cljs.core.hash_map,map__34020):map__34020);
var arglists = cljs.core.get.call(null,map__34020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__34020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34050 = cljs.core.next.call(null,seq__34013__$1);
var G__34051 = null;
var G__34052 = (0);
var G__34053 = (0);
seq__34013 = G__34050;
chunk__34014 = G__34051;
count__34015 = G__34052;
i__34016 = G__34053;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map