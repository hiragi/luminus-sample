// Compiled by ClojureScript 0.0-3178 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__32068_32072 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__32069_32073 = null;
var count__32070_32074 = (0);
var i__32071_32075 = (0);
while(true){
if((i__32071_32075 < count__32070_32074)){
var k_32076 = cljs.core._nth.call(null,chunk__32069_32073,i__32071_32075);
var v_32077 = (b[k_32076]);
(a[k_32076] = v_32077);

var G__32078 = seq__32068_32072;
var G__32079 = chunk__32069_32073;
var G__32080 = count__32070_32074;
var G__32081 = (i__32071_32075 + (1));
seq__32068_32072 = G__32078;
chunk__32069_32073 = G__32079;
count__32070_32074 = G__32080;
i__32071_32075 = G__32081;
continue;
} else {
var temp__4126__auto___32082 = cljs.core.seq.call(null,seq__32068_32072);
if(temp__4126__auto___32082){
var seq__32068_32083__$1 = temp__4126__auto___32082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32068_32083__$1)){
var c__25711__auto___32084 = cljs.core.chunk_first.call(null,seq__32068_32083__$1);
var G__32085 = cljs.core.chunk_rest.call(null,seq__32068_32083__$1);
var G__32086 = c__25711__auto___32084;
var G__32087 = cljs.core.count.call(null,c__25711__auto___32084);
var G__32088 = (0);
seq__32068_32072 = G__32085;
chunk__32069_32073 = G__32086;
count__32070_32074 = G__32087;
i__32071_32075 = G__32088;
continue;
} else {
var k_32089 = cljs.core.first.call(null,seq__32068_32083__$1);
var v_32090 = (b[k_32089]);
(a[k_32089] = v_32090);

var G__32091 = cljs.core.next.call(null,seq__32068_32083__$1);
var G__32092 = null;
var G__32093 = (0);
var G__32094 = (0);
seq__32068_32072 = G__32091;
chunk__32069_32073 = G__32092;
count__32070_32074 = G__32093;
i__32071_32075 = G__32094;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__32096 = arguments.length;
switch (G__32096) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__32098 = (i + (2));
var G__32099 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32098;
ret = G__32099;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32100_32104 = cljs.core.seq.call(null,v);
var chunk__32101_32105 = null;
var count__32102_32106 = (0);
var i__32103_32107 = (0);
while(true){
if((i__32103_32107 < count__32102_32106)){
var x_32108 = cljs.core._nth.call(null,chunk__32101_32105,i__32103_32107);
ret.push(x_32108);

var G__32109 = seq__32100_32104;
var G__32110 = chunk__32101_32105;
var G__32111 = count__32102_32106;
var G__32112 = (i__32103_32107 + (1));
seq__32100_32104 = G__32109;
chunk__32101_32105 = G__32110;
count__32102_32106 = G__32111;
i__32103_32107 = G__32112;
continue;
} else {
var temp__4126__auto___32113 = cljs.core.seq.call(null,seq__32100_32104);
if(temp__4126__auto___32113){
var seq__32100_32114__$1 = temp__4126__auto___32113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32100_32114__$1)){
var c__25711__auto___32115 = cljs.core.chunk_first.call(null,seq__32100_32114__$1);
var G__32116 = cljs.core.chunk_rest.call(null,seq__32100_32114__$1);
var G__32117 = c__25711__auto___32115;
var G__32118 = cljs.core.count.call(null,c__25711__auto___32115);
var G__32119 = (0);
seq__32100_32104 = G__32116;
chunk__32101_32105 = G__32117;
count__32102_32106 = G__32118;
i__32103_32107 = G__32119;
continue;
} else {
var x_32120 = cljs.core.first.call(null,seq__32100_32114__$1);
ret.push(x_32120);

var G__32121 = cljs.core.next.call(null,seq__32100_32114__$1);
var G__32122 = null;
var G__32123 = (0);
var G__32124 = (0);
seq__32100_32104 = G__32121;
chunk__32101_32105 = G__32122;
count__32102_32106 = G__32123;
i__32103_32107 = G__32124;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32125_32129 = cljs.core.seq.call(null,v);
var chunk__32126_32130 = null;
var count__32127_32131 = (0);
var i__32128_32132 = (0);
while(true){
if((i__32128_32132 < count__32127_32131)){
var x_32133 = cljs.core._nth.call(null,chunk__32126_32130,i__32128_32132);
ret.push(x_32133);

var G__32134 = seq__32125_32129;
var G__32135 = chunk__32126_32130;
var G__32136 = count__32127_32131;
var G__32137 = (i__32128_32132 + (1));
seq__32125_32129 = G__32134;
chunk__32126_32130 = G__32135;
count__32127_32131 = G__32136;
i__32128_32132 = G__32137;
continue;
} else {
var temp__4126__auto___32138 = cljs.core.seq.call(null,seq__32125_32129);
if(temp__4126__auto___32138){
var seq__32125_32139__$1 = temp__4126__auto___32138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32125_32139__$1)){
var c__25711__auto___32140 = cljs.core.chunk_first.call(null,seq__32125_32139__$1);
var G__32141 = cljs.core.chunk_rest.call(null,seq__32125_32139__$1);
var G__32142 = c__25711__auto___32140;
var G__32143 = cljs.core.count.call(null,c__25711__auto___32140);
var G__32144 = (0);
seq__32125_32129 = G__32141;
chunk__32126_32130 = G__32142;
count__32127_32131 = G__32143;
i__32128_32132 = G__32144;
continue;
} else {
var x_32145 = cljs.core.first.call(null,seq__32125_32139__$1);
ret.push(x_32145);

var G__32146 = cljs.core.next.call(null,seq__32125_32139__$1);
var G__32147 = null;
var G__32148 = (0);
var G__32149 = (0);
seq__32125_32129 = G__32146;
chunk__32126_32130 = G__32147;
count__32127_32131 = G__32148;
i__32128_32132 = G__32149;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32150_32154 = cljs.core.seq.call(null,v);
var chunk__32151_32155 = null;
var count__32152_32156 = (0);
var i__32153_32157 = (0);
while(true){
if((i__32153_32157 < count__32152_32156)){
var x_32158 = cljs.core._nth.call(null,chunk__32151_32155,i__32153_32157);
ret.push(x_32158);

var G__32159 = seq__32150_32154;
var G__32160 = chunk__32151_32155;
var G__32161 = count__32152_32156;
var G__32162 = (i__32153_32157 + (1));
seq__32150_32154 = G__32159;
chunk__32151_32155 = G__32160;
count__32152_32156 = G__32161;
i__32153_32157 = G__32162;
continue;
} else {
var temp__4126__auto___32163 = cljs.core.seq.call(null,seq__32150_32154);
if(temp__4126__auto___32163){
var seq__32150_32164__$1 = temp__4126__auto___32163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32150_32164__$1)){
var c__25711__auto___32165 = cljs.core.chunk_first.call(null,seq__32150_32164__$1);
var G__32166 = cljs.core.chunk_rest.call(null,seq__32150_32164__$1);
var G__32167 = c__25711__auto___32165;
var G__32168 = cljs.core.count.call(null,c__25711__auto___32165);
var G__32169 = (0);
seq__32150_32154 = G__32166;
chunk__32151_32155 = G__32167;
count__32152_32156 = G__32168;
i__32153_32157 = G__32169;
continue;
} else {
var x_32170 = cljs.core.first.call(null,seq__32150_32164__$1);
ret.push(x_32170);

var G__32171 = cljs.core.next.call(null,seq__32150_32164__$1);
var G__32172 = null;
var G__32173 = (0);
var G__32174 = (0);
seq__32150_32154 = G__32171;
chunk__32151_32155 = G__32172;
count__32152_32156 = G__32173;
i__32153_32157 = G__32174;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__32176 = arguments.length;
switch (G__32176) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x32178 = cljs.core.clone.call(null,handlers);
x32178.forEach = ((function (x32178,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__32179 = cljs.core.seq.call(null,coll);
var chunk__32180 = null;
var count__32181 = (0);
var i__32182 = (0);
while(true){
if((i__32182 < count__32181)){
var vec__32183 = cljs.core._nth.call(null,chunk__32180,i__32182);
var k = cljs.core.nth.call(null,vec__32183,(0),null);
var v = cljs.core.nth.call(null,vec__32183,(1),null);
f.call(null,v,k);

var G__32186 = seq__32179;
var G__32187 = chunk__32180;
var G__32188 = count__32181;
var G__32189 = (i__32182 + (1));
seq__32179 = G__32186;
chunk__32180 = G__32187;
count__32181 = G__32188;
i__32182 = G__32189;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32179);
if(temp__4126__auto__){
var seq__32179__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32179__$1)){
var c__25711__auto__ = cljs.core.chunk_first.call(null,seq__32179__$1);
var G__32190 = cljs.core.chunk_rest.call(null,seq__32179__$1);
var G__32191 = c__25711__auto__;
var G__32192 = cljs.core.count.call(null,c__25711__auto__);
var G__32193 = (0);
seq__32179 = G__32190;
chunk__32180 = G__32191;
count__32181 = G__32192;
i__32182 = G__32193;
continue;
} else {
var vec__32184 = cljs.core.first.call(null,seq__32179__$1);
var k = cljs.core.nth.call(null,vec__32184,(0),null);
var v = cljs.core.nth.call(null,vec__32184,(1),null);
f.call(null,v,k);

var G__32194 = cljs.core.next.call(null,seq__32179__$1);
var G__32195 = null;
var G__32196 = (0);
var G__32197 = (0);
seq__32179 = G__32194;
chunk__32180 = G__32195;
count__32181 = G__32196;
i__32182 = G__32197;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32178,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x32178;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__32177 = obj;
G__32177.push(kfn.call(null,k),vfn.call(null,v));

return G__32177;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__32199 = arguments.length;
switch (G__32199) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t32200 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t32200 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta32201){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta32201 = meta32201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t32200.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t32200.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t32200.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t32200.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t32200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32202){
var self__ = this;
var _32202__$1 = this;
return self__.meta32201;
});

cognitect.transit.t32200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32202,meta32201__$1){
var self__ = this;
var _32202__$1 = this;
return (new cognitect.transit.t32200(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta32201__$1));
});

cognitect.transit.t32200.cljs$lang$type = true;

cognitect.transit.t32200.cljs$lang$ctorStr = "cognitect.transit/t32200";

cognitect.transit.t32200.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cognitect.transit/t32200");
});

cognitect.transit.__GT_t32200 = (function cognitect$transit$__GT_t32200(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta32201){
return (new cognitect.transit.t32200(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta32201));
});

}

return (new cognitect.transit.t32200(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map