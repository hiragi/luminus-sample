// Compiled by ClojureScript 0.0-3178 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t34781 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34781 = (function (f,fn_handler,meta34782){
this.f = f;
this.fn_handler = fn_handler;
this.meta34782 = meta34782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t34781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t34781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34783){
var self__ = this;
var _34783__$1 = this;
return self__.meta34782;
});

cljs.core.async.t34781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34783,meta34782__$1){
var self__ = this;
var _34783__$1 = this;
return (new cljs.core.async.t34781(self__.f,self__.fn_handler,meta34782__$1));
});

cljs.core.async.t34781.cljs$lang$type = true;

cljs.core.async.t34781.cljs$lang$ctorStr = "cljs.core.async/t34781";

cljs.core.async.t34781.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34781");
});

cljs.core.async.__GT_t34781 = (function cljs$core$async$fn_handler_$___GT_t34781(f__$1,fn_handler__$1,meta34782){
return (new cljs.core.async.t34781(f__$1,fn_handler__$1,meta34782));
});

}

return (new cljs.core.async.t34781(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__34785 = buff;
if(G__34785){
var bit__25600__auto__ = null;
if(cljs.core.truth_((function (){var or__24926__auto__ = bit__25600__auto__;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return G__34785.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__34785.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34785);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34785);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__34787 = arguments.length;
switch (G__34787) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__34790 = arguments.length;
switch (G__34790) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34792 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34792);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34792,ret){
return (function (){
return fn1.call(null,val_34792);
});})(val_34792,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__34794 = arguments.length;
switch (G__34794) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25811__auto___34796 = n;
var x_34797 = (0);
while(true){
if((x_34797 < n__25811__auto___34796)){
(a[x_34797] = (0));

var G__34798 = (x_34797 + (1));
x_34797 = G__34798;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34799 = (i + (1));
i = G__34799;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t34803 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34803 = (function (flag,alt_flag,meta34804){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34804 = meta34804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34803.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t34803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t34803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34805){
var self__ = this;
var _34805__$1 = this;
return self__.meta34804;
});})(flag))
;

cljs.core.async.t34803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34805,meta34804__$1){
var self__ = this;
var _34805__$1 = this;
return (new cljs.core.async.t34803(self__.flag,self__.alt_flag,meta34804__$1));
});})(flag))
;

cljs.core.async.t34803.cljs$lang$type = true;

cljs.core.async.t34803.cljs$lang$ctorStr = "cljs.core.async/t34803";

cljs.core.async.t34803.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34803");
});})(flag))
;

cljs.core.async.__GT_t34803 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t34803(flag__$1,alt_flag__$1,meta34804){
return (new cljs.core.async.t34803(flag__$1,alt_flag__$1,meta34804));
});})(flag))
;

}

return (new cljs.core.async.t34803(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t34809 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34809 = (function (cb,flag,alt_handler,meta34810){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34810 = meta34810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34809.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t34809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t34809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34811){
var self__ = this;
var _34811__$1 = this;
return self__.meta34810;
});

cljs.core.async.t34809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34811,meta34810__$1){
var self__ = this;
var _34811__$1 = this;
return (new cljs.core.async.t34809(self__.cb,self__.flag,self__.alt_handler,meta34810__$1));
});

cljs.core.async.t34809.cljs$lang$type = true;

cljs.core.async.t34809.cljs$lang$ctorStr = "cljs.core.async/t34809";

cljs.core.async.t34809.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t34809");
});

cljs.core.async.__GT_t34809 = (function cljs$core$async$alt_handler_$___GT_t34809(cb__$1,flag__$1,alt_handler__$1,meta34810){
return (new cljs.core.async.t34809(cb__$1,flag__$1,alt_handler__$1,meta34810));
});

}

return (new cljs.core.async.t34809(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34812_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34812_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34813_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34813_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24926__auto__ = wport;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34814 = (i + (1));
i = G__34814;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24926__auto__ = ret;
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__24914__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24914__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24914__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__25966__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34817){
var map__34818 = p__34817;
var map__34818__$1 = ((cljs.core.seq_QMARK_.call(null,map__34818))?cljs.core.apply.call(null,cljs.core.hash_map,map__34818):map__34818);
var opts = map__34818__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34815){
var G__34816 = cljs.core.first.call(null,seq34815);
var seq34815__$1 = cljs.core.next.call(null,seq34815);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34816,seq34815__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__34820 = arguments.length;
switch (G__34820) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28196__auto___34869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___34869){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___34869){
return (function (state_34844){
var state_val_34845 = (state_34844[(1)]);
if((state_val_34845 === (7))){
var inst_34840 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
var statearr_34846_34870 = state_34844__$1;
(statearr_34846_34870[(2)] = inst_34840);

(statearr_34846_34870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (1))){
var state_34844__$1 = state_34844;
var statearr_34847_34871 = state_34844__$1;
(statearr_34847_34871[(2)] = null);

(statearr_34847_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (4))){
var inst_34823 = (state_34844[(7)]);
var inst_34823__$1 = (state_34844[(2)]);
var inst_34824 = (inst_34823__$1 == null);
var state_34844__$1 = (function (){var statearr_34848 = state_34844;
(statearr_34848[(7)] = inst_34823__$1);

return statearr_34848;
})();
if(cljs.core.truth_(inst_34824)){
var statearr_34849_34872 = state_34844__$1;
(statearr_34849_34872[(1)] = (5));

} else {
var statearr_34850_34873 = state_34844__$1;
(statearr_34850_34873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (13))){
var state_34844__$1 = state_34844;
var statearr_34851_34874 = state_34844__$1;
(statearr_34851_34874[(2)] = null);

(statearr_34851_34874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (6))){
var inst_34823 = (state_34844[(7)]);
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34844__$1,(11),to,inst_34823);
} else {
if((state_val_34845 === (3))){
var inst_34842 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34844__$1,inst_34842);
} else {
if((state_val_34845 === (12))){
var state_34844__$1 = state_34844;
var statearr_34852_34875 = state_34844__$1;
(statearr_34852_34875[(2)] = null);

(statearr_34852_34875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (2))){
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34844__$1,(4),from);
} else {
if((state_val_34845 === (11))){
var inst_34833 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
if(cljs.core.truth_(inst_34833)){
var statearr_34853_34876 = state_34844__$1;
(statearr_34853_34876[(1)] = (12));

} else {
var statearr_34854_34877 = state_34844__$1;
(statearr_34854_34877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (9))){
var state_34844__$1 = state_34844;
var statearr_34855_34878 = state_34844__$1;
(statearr_34855_34878[(2)] = null);

(statearr_34855_34878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (5))){
var state_34844__$1 = state_34844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34856_34879 = state_34844__$1;
(statearr_34856_34879[(1)] = (8));

} else {
var statearr_34857_34880 = state_34844__$1;
(statearr_34857_34880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (14))){
var inst_34838 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
var statearr_34858_34881 = state_34844__$1;
(statearr_34858_34881[(2)] = inst_34838);

(statearr_34858_34881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (10))){
var inst_34830 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
var statearr_34859_34882 = state_34844__$1;
(statearr_34859_34882[(2)] = inst_34830);

(statearr_34859_34882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (8))){
var inst_34827 = cljs.core.async.close_BANG_.call(null,to);
var state_34844__$1 = state_34844;
var statearr_34860_34883 = state_34844__$1;
(statearr_34860_34883[(2)] = inst_34827);

(statearr_34860_34883[(1)] = (10));


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
});})(c__28196__auto___34869))
;
return ((function (switch__28134__auto__,c__28196__auto___34869){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_34864 = [null,null,null,null,null,null,null,null];
(statearr_34864[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_34864[(1)] = (1));

return statearr_34864;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_34844){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_34844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e34865){if((e34865 instanceof Object)){
var ex__28138__auto__ = e34865;
var statearr_34866_34884 = state_34844;
(statearr_34866_34884[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34885 = state_34844;
state_34844 = G__34885;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_34844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_34844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___34869))
})();
var state__28198__auto__ = (function (){var statearr_34867 = f__28197__auto__.call(null);
(statearr_34867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___34869);

return statearr_34867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___34869))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35069){
var vec__35070 = p__35069;
var v = cljs.core.nth.call(null,vec__35070,(0),null);
var p = cljs.core.nth.call(null,vec__35070,(1),null);
var job = vec__35070;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28196__auto___35252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___35252,res,vec__35070,v,p,job,jobs,results){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___35252,res,vec__35070,v,p,job,jobs,results){
return (function (state_35075){
var state_val_35076 = (state_35075[(1)]);
if((state_val_35076 === (2))){
var inst_35072 = (state_35075[(2)]);
var inst_35073 = cljs.core.async.close_BANG_.call(null,res);
var state_35075__$1 = (function (){var statearr_35077 = state_35075;
(statearr_35077[(7)] = inst_35072);

return statearr_35077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35075__$1,inst_35073);
} else {
if((state_val_35076 === (1))){
var state_35075__$1 = state_35075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35075__$1,(2),res,v);
} else {
return null;
}
}
});})(c__28196__auto___35252,res,vec__35070,v,p,job,jobs,results))
;
return ((function (switch__28134__auto__,c__28196__auto___35252,res,vec__35070,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0 = (function (){
var statearr_35081 = [null,null,null,null,null,null,null,null];
(statearr_35081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__);

(statearr_35081[(1)] = (1));

return statearr_35081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1 = (function (state_35075){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35082){if((e35082 instanceof Object)){
var ex__28138__auto__ = e35082;
var statearr_35083_35253 = state_35075;
(statearr_35083_35253[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35254 = state_35075;
state_35075 = G__35254;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = function(state_35075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1.call(this,state_35075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___35252,res,vec__35070,v,p,job,jobs,results))
})();
var state__28198__auto__ = (function (){var statearr_35084 = f__28197__auto__.call(null);
(statearr_35084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___35252);

return statearr_35084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___35252,res,vec__35070,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35085){
var vec__35086 = p__35085;
var v = cljs.core.nth.call(null,vec__35086,(0),null);
var p = cljs.core.nth.call(null,vec__35086,(1),null);
var job = vec__35086;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25811__auto___35255 = n;
var __35256 = (0);
while(true){
if((__35256 < n__25811__auto___35255)){
var G__35087_35257 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35087_35257) {
case "async":
var c__28196__auto___35259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35256,c__28196__auto___35259,G__35087_35257,n__25811__auto___35255,jobs,results,process,async){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (__35256,c__28196__auto___35259,G__35087_35257,n__25811__auto___35255,jobs,results,process,async){
return (function (state_35100){
var state_val_35101 = (state_35100[(1)]);
if((state_val_35101 === (7))){
var inst_35096 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
var statearr_35102_35260 = state_35100__$1;
(statearr_35102_35260[(2)] = inst_35096);

(statearr_35102_35260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (6))){
var state_35100__$1 = state_35100;
var statearr_35103_35261 = state_35100__$1;
(statearr_35103_35261[(2)] = null);

(statearr_35103_35261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (5))){
var state_35100__$1 = state_35100;
var statearr_35104_35262 = state_35100__$1;
(statearr_35104_35262[(2)] = null);

(statearr_35104_35262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (4))){
var inst_35090 = (state_35100[(2)]);
var inst_35091 = async.call(null,inst_35090);
var state_35100__$1 = state_35100;
if(cljs.core.truth_(inst_35091)){
var statearr_35105_35263 = state_35100__$1;
(statearr_35105_35263[(1)] = (5));

} else {
var statearr_35106_35264 = state_35100__$1;
(statearr_35106_35264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35101 === (3))){
var inst_35098 = (state_35100[(2)]);
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35100__$1,inst_35098);
} else {
if((state_val_35101 === (2))){
var state_35100__$1 = state_35100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35100__$1,(4),jobs);
} else {
if((state_val_35101 === (1))){
var state_35100__$1 = state_35100;
var statearr_35107_35265 = state_35100__$1;
(statearr_35107_35265[(2)] = null);

(statearr_35107_35265[(1)] = (2));


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
});})(__35256,c__28196__auto___35259,G__35087_35257,n__25811__auto___35255,jobs,results,process,async))
;
return ((function (__35256,switch__28134__auto__,c__28196__auto___35259,G__35087_35257,n__25811__auto___35255,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0 = (function (){
var statearr_35111 = [null,null,null,null,null,null,null];
(statearr_35111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__);

(statearr_35111[(1)] = (1));

return statearr_35111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1 = (function (state_35100){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35112){if((e35112 instanceof Object)){
var ex__28138__auto__ = e35112;
var statearr_35113_35266 = state_35100;
(statearr_35113_35266[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35267 = state_35100;
state_35100 = G__35267;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = function(state_35100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1.call(this,state_35100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__;
})()
;})(__35256,switch__28134__auto__,c__28196__auto___35259,G__35087_35257,n__25811__auto___35255,jobs,results,process,async))
})();
var state__28198__auto__ = (function (){var statearr_35114 = f__28197__auto__.call(null);
(statearr_35114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___35259);

return statearr_35114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(__35256,c__28196__auto___35259,G__35087_35257,n__25811__auto___35255,jobs,results,process,async))
);


break;
case "compute":
var c__28196__auto___35268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35256,c__28196__auto___35268,G__35087_35257,n__25811__auto___35255,jobs,results,process,async){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (__35256,c__28196__auto___35268,G__35087_35257,n__25811__auto___35255,jobs,results,process,async){
return (function (state_35127){
var state_val_35128 = (state_35127[(1)]);
if((state_val_35128 === (7))){
var inst_35123 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
var statearr_35129_35269 = state_35127__$1;
(statearr_35129_35269[(2)] = inst_35123);

(statearr_35129_35269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (6))){
var state_35127__$1 = state_35127;
var statearr_35130_35270 = state_35127__$1;
(statearr_35130_35270[(2)] = null);

(statearr_35130_35270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (5))){
var state_35127__$1 = state_35127;
var statearr_35131_35271 = state_35127__$1;
(statearr_35131_35271[(2)] = null);

(statearr_35131_35271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (4))){
var inst_35117 = (state_35127[(2)]);
var inst_35118 = process.call(null,inst_35117);
var state_35127__$1 = state_35127;
if(cljs.core.truth_(inst_35118)){
var statearr_35132_35272 = state_35127__$1;
(statearr_35132_35272[(1)] = (5));

} else {
var statearr_35133_35273 = state_35127__$1;
(statearr_35133_35273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35128 === (3))){
var inst_35125 = (state_35127[(2)]);
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35127__$1,inst_35125);
} else {
if((state_val_35128 === (2))){
var state_35127__$1 = state_35127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35127__$1,(4),jobs);
} else {
if((state_val_35128 === (1))){
var state_35127__$1 = state_35127;
var statearr_35134_35274 = state_35127__$1;
(statearr_35134_35274[(2)] = null);

(statearr_35134_35274[(1)] = (2));


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
});})(__35256,c__28196__auto___35268,G__35087_35257,n__25811__auto___35255,jobs,results,process,async))
;
return ((function (__35256,switch__28134__auto__,c__28196__auto___35268,G__35087_35257,n__25811__auto___35255,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0 = (function (){
var statearr_35138 = [null,null,null,null,null,null,null];
(statearr_35138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__);

(statearr_35138[(1)] = (1));

return statearr_35138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1 = (function (state_35127){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35139){if((e35139 instanceof Object)){
var ex__28138__auto__ = e35139;
var statearr_35140_35275 = state_35127;
(statearr_35140_35275[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35276 = state_35127;
state_35127 = G__35276;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = function(state_35127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1.call(this,state_35127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__;
})()
;})(__35256,switch__28134__auto__,c__28196__auto___35268,G__35087_35257,n__25811__auto___35255,jobs,results,process,async))
})();
var state__28198__auto__ = (function (){var statearr_35141 = f__28197__auto__.call(null);
(statearr_35141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___35268);

return statearr_35141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(__35256,c__28196__auto___35268,G__35087_35257,n__25811__auto___35255,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35277 = (__35256 + (1));
__35256 = G__35277;
continue;
} else {
}
break;
}

var c__28196__auto___35278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___35278,jobs,results,process,async){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___35278,jobs,results,process,async){
return (function (state_35163){
var state_val_35164 = (state_35163[(1)]);
if((state_val_35164 === (9))){
var inst_35156 = (state_35163[(2)]);
var state_35163__$1 = (function (){var statearr_35165 = state_35163;
(statearr_35165[(7)] = inst_35156);

return statearr_35165;
})();
var statearr_35166_35279 = state_35163__$1;
(statearr_35166_35279[(2)] = null);

(statearr_35166_35279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (8))){
var inst_35149 = (state_35163[(8)]);
var inst_35154 = (state_35163[(2)]);
var state_35163__$1 = (function (){var statearr_35167 = state_35163;
(statearr_35167[(9)] = inst_35154);

return statearr_35167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35163__$1,(9),results,inst_35149);
} else {
if((state_val_35164 === (7))){
var inst_35159 = (state_35163[(2)]);
var state_35163__$1 = state_35163;
var statearr_35168_35280 = state_35163__$1;
(statearr_35168_35280[(2)] = inst_35159);

(statearr_35168_35280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (6))){
var inst_35149 = (state_35163[(8)]);
var inst_35144 = (state_35163[(10)]);
var inst_35149__$1 = cljs.core.async.chan.call(null,(1));
var inst_35150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35151 = [inst_35144,inst_35149__$1];
var inst_35152 = (new cljs.core.PersistentVector(null,2,(5),inst_35150,inst_35151,null));
var state_35163__$1 = (function (){var statearr_35169 = state_35163;
(statearr_35169[(8)] = inst_35149__$1);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35163__$1,(8),jobs,inst_35152);
} else {
if((state_val_35164 === (5))){
var inst_35147 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35163__$1 = state_35163;
var statearr_35170_35281 = state_35163__$1;
(statearr_35170_35281[(2)] = inst_35147);

(statearr_35170_35281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (4))){
var inst_35144 = (state_35163[(10)]);
var inst_35144__$1 = (state_35163[(2)]);
var inst_35145 = (inst_35144__$1 == null);
var state_35163__$1 = (function (){var statearr_35171 = state_35163;
(statearr_35171[(10)] = inst_35144__$1);

return statearr_35171;
})();
if(cljs.core.truth_(inst_35145)){
var statearr_35172_35282 = state_35163__$1;
(statearr_35172_35282[(1)] = (5));

} else {
var statearr_35173_35283 = state_35163__$1;
(statearr_35173_35283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (3))){
var inst_35161 = (state_35163[(2)]);
var state_35163__$1 = state_35163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35163__$1,inst_35161);
} else {
if((state_val_35164 === (2))){
var state_35163__$1 = state_35163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35163__$1,(4),from);
} else {
if((state_val_35164 === (1))){
var state_35163__$1 = state_35163;
var statearr_35174_35284 = state_35163__$1;
(statearr_35174_35284[(2)] = null);

(statearr_35174_35284[(1)] = (2));


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
});})(c__28196__auto___35278,jobs,results,process,async))
;
return ((function (switch__28134__auto__,c__28196__auto___35278,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0 = (function (){
var statearr_35178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__);

(statearr_35178[(1)] = (1));

return statearr_35178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1 = (function (state_35163){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35179){if((e35179 instanceof Object)){
var ex__28138__auto__ = e35179;
var statearr_35180_35285 = state_35163;
(statearr_35180_35285[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35286 = state_35163;
state_35163 = G__35286;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = function(state_35163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1.call(this,state_35163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___35278,jobs,results,process,async))
})();
var state__28198__auto__ = (function (){var statearr_35181 = f__28197__auto__.call(null);
(statearr_35181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___35278);

return statearr_35181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___35278,jobs,results,process,async))
);


var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__,jobs,results,process,async){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__,jobs,results,process,async){
return (function (state_35219){
var state_val_35220 = (state_35219[(1)]);
if((state_val_35220 === (7))){
var inst_35215 = (state_35219[(2)]);
var state_35219__$1 = state_35219;
var statearr_35221_35287 = state_35219__$1;
(statearr_35221_35287[(2)] = inst_35215);

(statearr_35221_35287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (20))){
var state_35219__$1 = state_35219;
var statearr_35222_35288 = state_35219__$1;
(statearr_35222_35288[(2)] = null);

(statearr_35222_35288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (1))){
var state_35219__$1 = state_35219;
var statearr_35223_35289 = state_35219__$1;
(statearr_35223_35289[(2)] = null);

(statearr_35223_35289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (4))){
var inst_35184 = (state_35219[(7)]);
var inst_35184__$1 = (state_35219[(2)]);
var inst_35185 = (inst_35184__$1 == null);
var state_35219__$1 = (function (){var statearr_35224 = state_35219;
(statearr_35224[(7)] = inst_35184__$1);

return statearr_35224;
})();
if(cljs.core.truth_(inst_35185)){
var statearr_35225_35290 = state_35219__$1;
(statearr_35225_35290[(1)] = (5));

} else {
var statearr_35226_35291 = state_35219__$1;
(statearr_35226_35291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (15))){
var inst_35197 = (state_35219[(8)]);
var state_35219__$1 = state_35219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35219__$1,(18),to,inst_35197);
} else {
if((state_val_35220 === (21))){
var inst_35210 = (state_35219[(2)]);
var state_35219__$1 = state_35219;
var statearr_35227_35292 = state_35219__$1;
(statearr_35227_35292[(2)] = inst_35210);

(statearr_35227_35292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (13))){
var inst_35212 = (state_35219[(2)]);
var state_35219__$1 = (function (){var statearr_35228 = state_35219;
(statearr_35228[(9)] = inst_35212);

return statearr_35228;
})();
var statearr_35229_35293 = state_35219__$1;
(statearr_35229_35293[(2)] = null);

(statearr_35229_35293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (6))){
var inst_35184 = (state_35219[(7)]);
var state_35219__$1 = state_35219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35219__$1,(11),inst_35184);
} else {
if((state_val_35220 === (17))){
var inst_35205 = (state_35219[(2)]);
var state_35219__$1 = state_35219;
if(cljs.core.truth_(inst_35205)){
var statearr_35230_35294 = state_35219__$1;
(statearr_35230_35294[(1)] = (19));

} else {
var statearr_35231_35295 = state_35219__$1;
(statearr_35231_35295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (3))){
var inst_35217 = (state_35219[(2)]);
var state_35219__$1 = state_35219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35219__$1,inst_35217);
} else {
if((state_val_35220 === (12))){
var inst_35194 = (state_35219[(10)]);
var state_35219__$1 = state_35219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35219__$1,(14),inst_35194);
} else {
if((state_val_35220 === (2))){
var state_35219__$1 = state_35219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35219__$1,(4),results);
} else {
if((state_val_35220 === (19))){
var state_35219__$1 = state_35219;
var statearr_35232_35296 = state_35219__$1;
(statearr_35232_35296[(2)] = null);

(statearr_35232_35296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (11))){
var inst_35194 = (state_35219[(2)]);
var state_35219__$1 = (function (){var statearr_35233 = state_35219;
(statearr_35233[(10)] = inst_35194);

return statearr_35233;
})();
var statearr_35234_35297 = state_35219__$1;
(statearr_35234_35297[(2)] = null);

(statearr_35234_35297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (9))){
var state_35219__$1 = state_35219;
var statearr_35235_35298 = state_35219__$1;
(statearr_35235_35298[(2)] = null);

(statearr_35235_35298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (5))){
var state_35219__$1 = state_35219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35236_35299 = state_35219__$1;
(statearr_35236_35299[(1)] = (8));

} else {
var statearr_35237_35300 = state_35219__$1;
(statearr_35237_35300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (14))){
var inst_35199 = (state_35219[(11)]);
var inst_35197 = (state_35219[(8)]);
var inst_35197__$1 = (state_35219[(2)]);
var inst_35198 = (inst_35197__$1 == null);
var inst_35199__$1 = cljs.core.not.call(null,inst_35198);
var state_35219__$1 = (function (){var statearr_35238 = state_35219;
(statearr_35238[(11)] = inst_35199__$1);

(statearr_35238[(8)] = inst_35197__$1);

return statearr_35238;
})();
if(inst_35199__$1){
var statearr_35239_35301 = state_35219__$1;
(statearr_35239_35301[(1)] = (15));

} else {
var statearr_35240_35302 = state_35219__$1;
(statearr_35240_35302[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (16))){
var inst_35199 = (state_35219[(11)]);
var state_35219__$1 = state_35219;
var statearr_35241_35303 = state_35219__$1;
(statearr_35241_35303[(2)] = inst_35199);

(statearr_35241_35303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (10))){
var inst_35191 = (state_35219[(2)]);
var state_35219__$1 = state_35219;
var statearr_35242_35304 = state_35219__$1;
(statearr_35242_35304[(2)] = inst_35191);

(statearr_35242_35304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (18))){
var inst_35202 = (state_35219[(2)]);
var state_35219__$1 = state_35219;
var statearr_35243_35305 = state_35219__$1;
(statearr_35243_35305[(2)] = inst_35202);

(statearr_35243_35305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35220 === (8))){
var inst_35188 = cljs.core.async.close_BANG_.call(null,to);
var state_35219__$1 = state_35219;
var statearr_35244_35306 = state_35219__$1;
(statearr_35244_35306[(2)] = inst_35188);

(statearr_35244_35306[(1)] = (10));


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
});})(c__28196__auto__,jobs,results,process,async))
;
return ((function (switch__28134__auto__,c__28196__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0 = (function (){
var statearr_35248 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__);

(statearr_35248[(1)] = (1));

return statearr_35248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1 = (function (state_35219){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35249){if((e35249 instanceof Object)){
var ex__28138__auto__ = e35249;
var statearr_35250_35307 = state_35219;
(statearr_35250_35307[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35308 = state_35219;
state_35219 = G__35308;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__ = function(state_35219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1.call(this,state_35219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28135__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__,jobs,results,process,async))
})();
var state__28198__auto__ = (function (){var statearr_35251 = f__28197__auto__.call(null);
(statearr_35251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_35251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__,jobs,results,process,async))
);

return c__28196__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__35310 = arguments.length;
switch (G__35310) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__35313 = arguments.length;
switch (G__35313) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__35316 = arguments.length;
switch (G__35316) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28196__auto___35368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___35368,tc,fc){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___35368,tc,fc){
return (function (state_35342){
var state_val_35343 = (state_35342[(1)]);
if((state_val_35343 === (7))){
var inst_35338 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
var statearr_35344_35369 = state_35342__$1;
(statearr_35344_35369[(2)] = inst_35338);

(statearr_35344_35369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (1))){
var state_35342__$1 = state_35342;
var statearr_35345_35370 = state_35342__$1;
(statearr_35345_35370[(2)] = null);

(statearr_35345_35370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (4))){
var inst_35319 = (state_35342[(7)]);
var inst_35319__$1 = (state_35342[(2)]);
var inst_35320 = (inst_35319__$1 == null);
var state_35342__$1 = (function (){var statearr_35346 = state_35342;
(statearr_35346[(7)] = inst_35319__$1);

return statearr_35346;
})();
if(cljs.core.truth_(inst_35320)){
var statearr_35347_35371 = state_35342__$1;
(statearr_35347_35371[(1)] = (5));

} else {
var statearr_35348_35372 = state_35342__$1;
(statearr_35348_35372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (13))){
var state_35342__$1 = state_35342;
var statearr_35349_35373 = state_35342__$1;
(statearr_35349_35373[(2)] = null);

(statearr_35349_35373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (6))){
var inst_35319 = (state_35342[(7)]);
var inst_35325 = p.call(null,inst_35319);
var state_35342__$1 = state_35342;
if(cljs.core.truth_(inst_35325)){
var statearr_35350_35374 = state_35342__$1;
(statearr_35350_35374[(1)] = (9));

} else {
var statearr_35351_35375 = state_35342__$1;
(statearr_35351_35375[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (3))){
var inst_35340 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35342__$1,inst_35340);
} else {
if((state_val_35343 === (12))){
var state_35342__$1 = state_35342;
var statearr_35352_35376 = state_35342__$1;
(statearr_35352_35376[(2)] = null);

(statearr_35352_35376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (2))){
var state_35342__$1 = state_35342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35342__$1,(4),ch);
} else {
if((state_val_35343 === (11))){
var inst_35319 = (state_35342[(7)]);
var inst_35329 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35342__$1,(8),inst_35329,inst_35319);
} else {
if((state_val_35343 === (9))){
var state_35342__$1 = state_35342;
var statearr_35353_35377 = state_35342__$1;
(statearr_35353_35377[(2)] = tc);

(statearr_35353_35377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (5))){
var inst_35322 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35323 = cljs.core.async.close_BANG_.call(null,fc);
var state_35342__$1 = (function (){var statearr_35354 = state_35342;
(statearr_35354[(8)] = inst_35322);

return statearr_35354;
})();
var statearr_35355_35378 = state_35342__$1;
(statearr_35355_35378[(2)] = inst_35323);

(statearr_35355_35378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (14))){
var inst_35336 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
var statearr_35356_35379 = state_35342__$1;
(statearr_35356_35379[(2)] = inst_35336);

(statearr_35356_35379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (10))){
var state_35342__$1 = state_35342;
var statearr_35357_35380 = state_35342__$1;
(statearr_35357_35380[(2)] = fc);

(statearr_35357_35380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35343 === (8))){
var inst_35331 = (state_35342[(2)]);
var state_35342__$1 = state_35342;
if(cljs.core.truth_(inst_35331)){
var statearr_35358_35381 = state_35342__$1;
(statearr_35358_35381[(1)] = (12));

} else {
var statearr_35359_35382 = state_35342__$1;
(statearr_35359_35382[(1)] = (13));

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
});})(c__28196__auto___35368,tc,fc))
;
return ((function (switch__28134__auto__,c__28196__auto___35368,tc,fc){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_35363 = [null,null,null,null,null,null,null,null,null];
(statearr_35363[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_35363[(1)] = (1));

return statearr_35363;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_35342){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35364){if((e35364 instanceof Object)){
var ex__28138__auto__ = e35364;
var statearr_35365_35383 = state_35342;
(statearr_35365_35383[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35384 = state_35342;
state_35342 = G__35384;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_35342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_35342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___35368,tc,fc))
})();
var state__28198__auto__ = (function (){var statearr_35366 = f__28197__auto__.call(null);
(statearr_35366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___35368);

return statearr_35366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___35368,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__){
return (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (7))){
var inst_35427 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35433_35449 = state_35431__$1;
(statearr_35433_35449[(2)] = inst_35427);

(statearr_35433_35449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (6))){
var inst_35417 = (state_35431[(7)]);
var inst_35420 = (state_35431[(8)]);
var inst_35424 = f.call(null,inst_35417,inst_35420);
var inst_35417__$1 = inst_35424;
var state_35431__$1 = (function (){var statearr_35434 = state_35431;
(statearr_35434[(7)] = inst_35417__$1);

return statearr_35434;
})();
var statearr_35435_35450 = state_35431__$1;
(statearr_35435_35450[(2)] = null);

(statearr_35435_35450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (5))){
var inst_35417 = (state_35431[(7)]);
var state_35431__$1 = state_35431;
var statearr_35436_35451 = state_35431__$1;
(statearr_35436_35451[(2)] = inst_35417);

(statearr_35436_35451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (4))){
var inst_35420 = (state_35431[(8)]);
var inst_35420__$1 = (state_35431[(2)]);
var inst_35421 = (inst_35420__$1 == null);
var state_35431__$1 = (function (){var statearr_35437 = state_35431;
(statearr_35437[(8)] = inst_35420__$1);

return statearr_35437;
})();
if(cljs.core.truth_(inst_35421)){
var statearr_35438_35452 = state_35431__$1;
(statearr_35438_35452[(1)] = (5));

} else {
var statearr_35439_35453 = state_35431__$1;
(statearr_35439_35453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (3))){
var inst_35429 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else {
if((state_val_35432 === (2))){
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(4),ch);
} else {
if((state_val_35432 === (1))){
var inst_35417 = init;
var state_35431__$1 = (function (){var statearr_35440 = state_35431;
(statearr_35440[(7)] = inst_35417);

return statearr_35440;
})();
var statearr_35441_35454 = state_35431__$1;
(statearr_35441_35454[(2)] = null);

(statearr_35441_35454[(1)] = (2));


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
});})(c__28196__auto__))
;
return ((function (switch__28134__auto__,c__28196__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28135__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28135__auto____0 = (function (){
var statearr_35445 = [null,null,null,null,null,null,null,null,null];
(statearr_35445[(0)] = cljs$core$async$reduce_$_state_machine__28135__auto__);

(statearr_35445[(1)] = (1));

return statearr_35445;
});
var cljs$core$async$reduce_$_state_machine__28135__auto____1 = (function (state_35431){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35446){if((e35446 instanceof Object)){
var ex__28138__auto__ = e35446;
var statearr_35447_35455 = state_35431;
(statearr_35447_35455[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35456 = state_35431;
state_35431 = G__35456;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28135__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28135__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28135__auto____0;
cljs$core$async$reduce_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28135__auto____1;
return cljs$core$async$reduce_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__))
})();
var state__28198__auto__ = (function (){var statearr_35448 = f__28197__auto__.call(null);
(statearr_35448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_35448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__))
);

return c__28196__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__35458 = arguments.length;
switch (G__35458) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__){
return (function (state_35483){
var state_val_35484 = (state_35483[(1)]);
if((state_val_35484 === (7))){
var inst_35465 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
var statearr_35485_35509 = state_35483__$1;
(statearr_35485_35509[(2)] = inst_35465);

(statearr_35485_35509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (1))){
var inst_35459 = cljs.core.seq.call(null,coll);
var inst_35460 = inst_35459;
var state_35483__$1 = (function (){var statearr_35486 = state_35483;
(statearr_35486[(7)] = inst_35460);

return statearr_35486;
})();
var statearr_35487_35510 = state_35483__$1;
(statearr_35487_35510[(2)] = null);

(statearr_35487_35510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (4))){
var inst_35460 = (state_35483[(7)]);
var inst_35463 = cljs.core.first.call(null,inst_35460);
var state_35483__$1 = state_35483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35483__$1,(7),ch,inst_35463);
} else {
if((state_val_35484 === (13))){
var inst_35477 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
var statearr_35488_35511 = state_35483__$1;
(statearr_35488_35511[(2)] = inst_35477);

(statearr_35488_35511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (6))){
var inst_35468 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
if(cljs.core.truth_(inst_35468)){
var statearr_35489_35512 = state_35483__$1;
(statearr_35489_35512[(1)] = (8));

} else {
var statearr_35490_35513 = state_35483__$1;
(statearr_35490_35513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (3))){
var inst_35481 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35483__$1,inst_35481);
} else {
if((state_val_35484 === (12))){
var state_35483__$1 = state_35483;
var statearr_35491_35514 = state_35483__$1;
(statearr_35491_35514[(2)] = null);

(statearr_35491_35514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (2))){
var inst_35460 = (state_35483[(7)]);
var state_35483__$1 = state_35483;
if(cljs.core.truth_(inst_35460)){
var statearr_35492_35515 = state_35483__$1;
(statearr_35492_35515[(1)] = (4));

} else {
var statearr_35493_35516 = state_35483__$1;
(statearr_35493_35516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (11))){
var inst_35474 = cljs.core.async.close_BANG_.call(null,ch);
var state_35483__$1 = state_35483;
var statearr_35494_35517 = state_35483__$1;
(statearr_35494_35517[(2)] = inst_35474);

(statearr_35494_35517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (9))){
var state_35483__$1 = state_35483;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35495_35518 = state_35483__$1;
(statearr_35495_35518[(1)] = (11));

} else {
var statearr_35496_35519 = state_35483__$1;
(statearr_35496_35519[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (5))){
var inst_35460 = (state_35483[(7)]);
var state_35483__$1 = state_35483;
var statearr_35497_35520 = state_35483__$1;
(statearr_35497_35520[(2)] = inst_35460);

(statearr_35497_35520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (10))){
var inst_35479 = (state_35483[(2)]);
var state_35483__$1 = state_35483;
var statearr_35498_35521 = state_35483__$1;
(statearr_35498_35521[(2)] = inst_35479);

(statearr_35498_35521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35484 === (8))){
var inst_35460 = (state_35483[(7)]);
var inst_35470 = cljs.core.next.call(null,inst_35460);
var inst_35460__$1 = inst_35470;
var state_35483__$1 = (function (){var statearr_35499 = state_35483;
(statearr_35499[(7)] = inst_35460__$1);

return statearr_35499;
})();
var statearr_35500_35522 = state_35483__$1;
(statearr_35500_35522[(2)] = null);

(statearr_35500_35522[(1)] = (2));


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
});})(c__28196__auto__))
;
return ((function (switch__28134__auto__,c__28196__auto__){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_35504 = [null,null,null,null,null,null,null,null];
(statearr_35504[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_35504[(1)] = (1));

return statearr_35504;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_35483){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35505){if((e35505 instanceof Object)){
var ex__28138__auto__ = e35505;
var statearr_35506_35523 = state_35483;
(statearr_35506_35523[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35524 = state_35483;
state_35483 = G__35524;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_35483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_35483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__))
})();
var state__28198__auto__ = (function (){var statearr_35507 = f__28197__auto__.call(null);
(statearr_35507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_35507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__))
);

return c__28196__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj35526 = {};
return obj35526;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__24914__auto__ = _;
if(and__24914__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25562__auto__ = (((_ == null))?null:_);
return (function (){var or__24926__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj35528 = {};
return obj35528;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t35750 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35750 = (function (cs,ch,mult,meta35751){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35751 = meta35751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35750.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t35750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t35750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t35750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t35750.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t35750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35752){
var self__ = this;
var _35752__$1 = this;
return self__.meta35751;
});})(cs))
;

cljs.core.async.t35750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35752,meta35751__$1){
var self__ = this;
var _35752__$1 = this;
return (new cljs.core.async.t35750(self__.cs,self__.ch,self__.mult,meta35751__$1));
});})(cs))
;

cljs.core.async.t35750.cljs$lang$type = true;

cljs.core.async.t35750.cljs$lang$ctorStr = "cljs.core.async/t35750";

cljs.core.async.t35750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t35750");
});})(cs))
;

cljs.core.async.__GT_t35750 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t35750(cs__$1,ch__$1,mult__$1,meta35751){
return (new cljs.core.async.t35750(cs__$1,ch__$1,mult__$1,meta35751));
});})(cs))
;

}

return (new cljs.core.async.t35750(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28196__auto___35971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___35971,cs,m,dchan,dctr,done){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___35971,cs,m,dchan,dctr,done){
return (function (state_35883){
var state_val_35884 = (state_35883[(1)]);
if((state_val_35884 === (7))){
var inst_35879 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35885_35972 = state_35883__$1;
(statearr_35885_35972[(2)] = inst_35879);

(statearr_35885_35972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (20))){
var inst_35784 = (state_35883[(7)]);
var inst_35794 = cljs.core.first.call(null,inst_35784);
var inst_35795 = cljs.core.nth.call(null,inst_35794,(0),null);
var inst_35796 = cljs.core.nth.call(null,inst_35794,(1),null);
var state_35883__$1 = (function (){var statearr_35886 = state_35883;
(statearr_35886[(8)] = inst_35795);

return statearr_35886;
})();
if(cljs.core.truth_(inst_35796)){
var statearr_35887_35973 = state_35883__$1;
(statearr_35887_35973[(1)] = (22));

} else {
var statearr_35888_35974 = state_35883__$1;
(statearr_35888_35974[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (27))){
var inst_35831 = (state_35883[(9)]);
var inst_35826 = (state_35883[(10)]);
var inst_35824 = (state_35883[(11)]);
var inst_35755 = (state_35883[(12)]);
var inst_35831__$1 = cljs.core._nth.call(null,inst_35824,inst_35826);
var inst_35832 = cljs.core.async.put_BANG_.call(null,inst_35831__$1,inst_35755,done);
var state_35883__$1 = (function (){var statearr_35889 = state_35883;
(statearr_35889[(9)] = inst_35831__$1);

return statearr_35889;
})();
if(cljs.core.truth_(inst_35832)){
var statearr_35890_35975 = state_35883__$1;
(statearr_35890_35975[(1)] = (30));

} else {
var statearr_35891_35976 = state_35883__$1;
(statearr_35891_35976[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (1))){
var state_35883__$1 = state_35883;
var statearr_35892_35977 = state_35883__$1;
(statearr_35892_35977[(2)] = null);

(statearr_35892_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (24))){
var inst_35784 = (state_35883[(7)]);
var inst_35801 = (state_35883[(2)]);
var inst_35802 = cljs.core.next.call(null,inst_35784);
var inst_35764 = inst_35802;
var inst_35765 = null;
var inst_35766 = (0);
var inst_35767 = (0);
var state_35883__$1 = (function (){var statearr_35893 = state_35883;
(statearr_35893[(13)] = inst_35764);

(statearr_35893[(14)] = inst_35767);

(statearr_35893[(15)] = inst_35765);

(statearr_35893[(16)] = inst_35801);

(statearr_35893[(17)] = inst_35766);

return statearr_35893;
})();
var statearr_35894_35978 = state_35883__$1;
(statearr_35894_35978[(2)] = null);

(statearr_35894_35978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (39))){
var state_35883__$1 = state_35883;
var statearr_35898_35979 = state_35883__$1;
(statearr_35898_35979[(2)] = null);

(statearr_35898_35979[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (4))){
var inst_35755 = (state_35883[(12)]);
var inst_35755__$1 = (state_35883[(2)]);
var inst_35756 = (inst_35755__$1 == null);
var state_35883__$1 = (function (){var statearr_35899 = state_35883;
(statearr_35899[(12)] = inst_35755__$1);

return statearr_35899;
})();
if(cljs.core.truth_(inst_35756)){
var statearr_35900_35980 = state_35883__$1;
(statearr_35900_35980[(1)] = (5));

} else {
var statearr_35901_35981 = state_35883__$1;
(statearr_35901_35981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (15))){
var inst_35764 = (state_35883[(13)]);
var inst_35767 = (state_35883[(14)]);
var inst_35765 = (state_35883[(15)]);
var inst_35766 = (state_35883[(17)]);
var inst_35780 = (state_35883[(2)]);
var inst_35781 = (inst_35767 + (1));
var tmp35895 = inst_35764;
var tmp35896 = inst_35765;
var tmp35897 = inst_35766;
var inst_35764__$1 = tmp35895;
var inst_35765__$1 = tmp35896;
var inst_35766__$1 = tmp35897;
var inst_35767__$1 = inst_35781;
var state_35883__$1 = (function (){var statearr_35902 = state_35883;
(statearr_35902[(13)] = inst_35764__$1);

(statearr_35902[(14)] = inst_35767__$1);

(statearr_35902[(15)] = inst_35765__$1);

(statearr_35902[(17)] = inst_35766__$1);

(statearr_35902[(18)] = inst_35780);

return statearr_35902;
})();
var statearr_35903_35982 = state_35883__$1;
(statearr_35903_35982[(2)] = null);

(statearr_35903_35982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (21))){
var inst_35805 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35907_35983 = state_35883__$1;
(statearr_35907_35983[(2)] = inst_35805);

(statearr_35907_35983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (31))){
var inst_35831 = (state_35883[(9)]);
var inst_35835 = done.call(null,null);
var inst_35836 = cljs.core.async.untap_STAR_.call(null,m,inst_35831);
var state_35883__$1 = (function (){var statearr_35908 = state_35883;
(statearr_35908[(19)] = inst_35835);

return statearr_35908;
})();
var statearr_35909_35984 = state_35883__$1;
(statearr_35909_35984[(2)] = inst_35836);

(statearr_35909_35984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (32))){
var inst_35823 = (state_35883[(20)]);
var inst_35826 = (state_35883[(10)]);
var inst_35825 = (state_35883[(21)]);
var inst_35824 = (state_35883[(11)]);
var inst_35838 = (state_35883[(2)]);
var inst_35839 = (inst_35826 + (1));
var tmp35904 = inst_35823;
var tmp35905 = inst_35825;
var tmp35906 = inst_35824;
var inst_35823__$1 = tmp35904;
var inst_35824__$1 = tmp35906;
var inst_35825__$1 = tmp35905;
var inst_35826__$1 = inst_35839;
var state_35883__$1 = (function (){var statearr_35910 = state_35883;
(statearr_35910[(22)] = inst_35838);

(statearr_35910[(20)] = inst_35823__$1);

(statearr_35910[(10)] = inst_35826__$1);

(statearr_35910[(21)] = inst_35825__$1);

(statearr_35910[(11)] = inst_35824__$1);

return statearr_35910;
})();
var statearr_35911_35985 = state_35883__$1;
(statearr_35911_35985[(2)] = null);

(statearr_35911_35985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (40))){
var inst_35851 = (state_35883[(23)]);
var inst_35855 = done.call(null,null);
var inst_35856 = cljs.core.async.untap_STAR_.call(null,m,inst_35851);
var state_35883__$1 = (function (){var statearr_35912 = state_35883;
(statearr_35912[(24)] = inst_35855);

return statearr_35912;
})();
var statearr_35913_35986 = state_35883__$1;
(statearr_35913_35986[(2)] = inst_35856);

(statearr_35913_35986[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (33))){
var inst_35842 = (state_35883[(25)]);
var inst_35844 = cljs.core.chunked_seq_QMARK_.call(null,inst_35842);
var state_35883__$1 = state_35883;
if(inst_35844){
var statearr_35914_35987 = state_35883__$1;
(statearr_35914_35987[(1)] = (36));

} else {
var statearr_35915_35988 = state_35883__$1;
(statearr_35915_35988[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (13))){
var inst_35774 = (state_35883[(26)]);
var inst_35777 = cljs.core.async.close_BANG_.call(null,inst_35774);
var state_35883__$1 = state_35883;
var statearr_35916_35989 = state_35883__$1;
(statearr_35916_35989[(2)] = inst_35777);

(statearr_35916_35989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (22))){
var inst_35795 = (state_35883[(8)]);
var inst_35798 = cljs.core.async.close_BANG_.call(null,inst_35795);
var state_35883__$1 = state_35883;
var statearr_35917_35990 = state_35883__$1;
(statearr_35917_35990[(2)] = inst_35798);

(statearr_35917_35990[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (36))){
var inst_35842 = (state_35883[(25)]);
var inst_35846 = cljs.core.chunk_first.call(null,inst_35842);
var inst_35847 = cljs.core.chunk_rest.call(null,inst_35842);
var inst_35848 = cljs.core.count.call(null,inst_35846);
var inst_35823 = inst_35847;
var inst_35824 = inst_35846;
var inst_35825 = inst_35848;
var inst_35826 = (0);
var state_35883__$1 = (function (){var statearr_35918 = state_35883;
(statearr_35918[(20)] = inst_35823);

(statearr_35918[(10)] = inst_35826);

(statearr_35918[(21)] = inst_35825);

(statearr_35918[(11)] = inst_35824);

return statearr_35918;
})();
var statearr_35919_35991 = state_35883__$1;
(statearr_35919_35991[(2)] = null);

(statearr_35919_35991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (41))){
var inst_35842 = (state_35883[(25)]);
var inst_35858 = (state_35883[(2)]);
var inst_35859 = cljs.core.next.call(null,inst_35842);
var inst_35823 = inst_35859;
var inst_35824 = null;
var inst_35825 = (0);
var inst_35826 = (0);
var state_35883__$1 = (function (){var statearr_35920 = state_35883;
(statearr_35920[(20)] = inst_35823);

(statearr_35920[(10)] = inst_35826);

(statearr_35920[(21)] = inst_35825);

(statearr_35920[(27)] = inst_35858);

(statearr_35920[(11)] = inst_35824);

return statearr_35920;
})();
var statearr_35921_35992 = state_35883__$1;
(statearr_35921_35992[(2)] = null);

(statearr_35921_35992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (43))){
var state_35883__$1 = state_35883;
var statearr_35922_35993 = state_35883__$1;
(statearr_35922_35993[(2)] = null);

(statearr_35922_35993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (29))){
var inst_35867 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35923_35994 = state_35883__$1;
(statearr_35923_35994[(2)] = inst_35867);

(statearr_35923_35994[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (44))){
var inst_35876 = (state_35883[(2)]);
var state_35883__$1 = (function (){var statearr_35924 = state_35883;
(statearr_35924[(28)] = inst_35876);

return statearr_35924;
})();
var statearr_35925_35995 = state_35883__$1;
(statearr_35925_35995[(2)] = null);

(statearr_35925_35995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (6))){
var inst_35815 = (state_35883[(29)]);
var inst_35814 = cljs.core.deref.call(null,cs);
var inst_35815__$1 = cljs.core.keys.call(null,inst_35814);
var inst_35816 = cljs.core.count.call(null,inst_35815__$1);
var inst_35817 = cljs.core.reset_BANG_.call(null,dctr,inst_35816);
var inst_35822 = cljs.core.seq.call(null,inst_35815__$1);
var inst_35823 = inst_35822;
var inst_35824 = null;
var inst_35825 = (0);
var inst_35826 = (0);
var state_35883__$1 = (function (){var statearr_35926 = state_35883;
(statearr_35926[(30)] = inst_35817);

(statearr_35926[(29)] = inst_35815__$1);

(statearr_35926[(20)] = inst_35823);

(statearr_35926[(10)] = inst_35826);

(statearr_35926[(21)] = inst_35825);

(statearr_35926[(11)] = inst_35824);

return statearr_35926;
})();
var statearr_35927_35996 = state_35883__$1;
(statearr_35927_35996[(2)] = null);

(statearr_35927_35996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (28))){
var inst_35823 = (state_35883[(20)]);
var inst_35842 = (state_35883[(25)]);
var inst_35842__$1 = cljs.core.seq.call(null,inst_35823);
var state_35883__$1 = (function (){var statearr_35928 = state_35883;
(statearr_35928[(25)] = inst_35842__$1);

return statearr_35928;
})();
if(inst_35842__$1){
var statearr_35929_35997 = state_35883__$1;
(statearr_35929_35997[(1)] = (33));

} else {
var statearr_35930_35998 = state_35883__$1;
(statearr_35930_35998[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (25))){
var inst_35826 = (state_35883[(10)]);
var inst_35825 = (state_35883[(21)]);
var inst_35828 = (inst_35826 < inst_35825);
var inst_35829 = inst_35828;
var state_35883__$1 = state_35883;
if(cljs.core.truth_(inst_35829)){
var statearr_35931_35999 = state_35883__$1;
(statearr_35931_35999[(1)] = (27));

} else {
var statearr_35932_36000 = state_35883__$1;
(statearr_35932_36000[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (34))){
var state_35883__$1 = state_35883;
var statearr_35933_36001 = state_35883__$1;
(statearr_35933_36001[(2)] = null);

(statearr_35933_36001[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (17))){
var state_35883__$1 = state_35883;
var statearr_35934_36002 = state_35883__$1;
(statearr_35934_36002[(2)] = null);

(statearr_35934_36002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (3))){
var inst_35881 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35883__$1,inst_35881);
} else {
if((state_val_35884 === (12))){
var inst_35810 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35935_36003 = state_35883__$1;
(statearr_35935_36003[(2)] = inst_35810);

(statearr_35935_36003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (2))){
var state_35883__$1 = state_35883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35883__$1,(4),ch);
} else {
if((state_val_35884 === (23))){
var state_35883__$1 = state_35883;
var statearr_35936_36004 = state_35883__$1;
(statearr_35936_36004[(2)] = null);

(statearr_35936_36004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (35))){
var inst_35865 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35937_36005 = state_35883__$1;
(statearr_35937_36005[(2)] = inst_35865);

(statearr_35937_36005[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (19))){
var inst_35784 = (state_35883[(7)]);
var inst_35788 = cljs.core.chunk_first.call(null,inst_35784);
var inst_35789 = cljs.core.chunk_rest.call(null,inst_35784);
var inst_35790 = cljs.core.count.call(null,inst_35788);
var inst_35764 = inst_35789;
var inst_35765 = inst_35788;
var inst_35766 = inst_35790;
var inst_35767 = (0);
var state_35883__$1 = (function (){var statearr_35938 = state_35883;
(statearr_35938[(13)] = inst_35764);

(statearr_35938[(14)] = inst_35767);

(statearr_35938[(15)] = inst_35765);

(statearr_35938[(17)] = inst_35766);

return statearr_35938;
})();
var statearr_35939_36006 = state_35883__$1;
(statearr_35939_36006[(2)] = null);

(statearr_35939_36006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (11))){
var inst_35764 = (state_35883[(13)]);
var inst_35784 = (state_35883[(7)]);
var inst_35784__$1 = cljs.core.seq.call(null,inst_35764);
var state_35883__$1 = (function (){var statearr_35940 = state_35883;
(statearr_35940[(7)] = inst_35784__$1);

return statearr_35940;
})();
if(inst_35784__$1){
var statearr_35941_36007 = state_35883__$1;
(statearr_35941_36007[(1)] = (16));

} else {
var statearr_35942_36008 = state_35883__$1;
(statearr_35942_36008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (9))){
var inst_35812 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35943_36009 = state_35883__$1;
(statearr_35943_36009[(2)] = inst_35812);

(statearr_35943_36009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (5))){
var inst_35762 = cljs.core.deref.call(null,cs);
var inst_35763 = cljs.core.seq.call(null,inst_35762);
var inst_35764 = inst_35763;
var inst_35765 = null;
var inst_35766 = (0);
var inst_35767 = (0);
var state_35883__$1 = (function (){var statearr_35944 = state_35883;
(statearr_35944[(13)] = inst_35764);

(statearr_35944[(14)] = inst_35767);

(statearr_35944[(15)] = inst_35765);

(statearr_35944[(17)] = inst_35766);

return statearr_35944;
})();
var statearr_35945_36010 = state_35883__$1;
(statearr_35945_36010[(2)] = null);

(statearr_35945_36010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (14))){
var state_35883__$1 = state_35883;
var statearr_35946_36011 = state_35883__$1;
(statearr_35946_36011[(2)] = null);

(statearr_35946_36011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (45))){
var inst_35873 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35947_36012 = state_35883__$1;
(statearr_35947_36012[(2)] = inst_35873);

(statearr_35947_36012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (26))){
var inst_35815 = (state_35883[(29)]);
var inst_35869 = (state_35883[(2)]);
var inst_35870 = cljs.core.seq.call(null,inst_35815);
var state_35883__$1 = (function (){var statearr_35948 = state_35883;
(statearr_35948[(31)] = inst_35869);

return statearr_35948;
})();
if(inst_35870){
var statearr_35949_36013 = state_35883__$1;
(statearr_35949_36013[(1)] = (42));

} else {
var statearr_35950_36014 = state_35883__$1;
(statearr_35950_36014[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (16))){
var inst_35784 = (state_35883[(7)]);
var inst_35786 = cljs.core.chunked_seq_QMARK_.call(null,inst_35784);
var state_35883__$1 = state_35883;
if(inst_35786){
var statearr_35951_36015 = state_35883__$1;
(statearr_35951_36015[(1)] = (19));

} else {
var statearr_35952_36016 = state_35883__$1;
(statearr_35952_36016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (38))){
var inst_35862 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35953_36017 = state_35883__$1;
(statearr_35953_36017[(2)] = inst_35862);

(statearr_35953_36017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (30))){
var state_35883__$1 = state_35883;
var statearr_35954_36018 = state_35883__$1;
(statearr_35954_36018[(2)] = null);

(statearr_35954_36018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (10))){
var inst_35767 = (state_35883[(14)]);
var inst_35765 = (state_35883[(15)]);
var inst_35773 = cljs.core._nth.call(null,inst_35765,inst_35767);
var inst_35774 = cljs.core.nth.call(null,inst_35773,(0),null);
var inst_35775 = cljs.core.nth.call(null,inst_35773,(1),null);
var state_35883__$1 = (function (){var statearr_35955 = state_35883;
(statearr_35955[(26)] = inst_35774);

return statearr_35955;
})();
if(cljs.core.truth_(inst_35775)){
var statearr_35956_36019 = state_35883__$1;
(statearr_35956_36019[(1)] = (13));

} else {
var statearr_35957_36020 = state_35883__$1;
(statearr_35957_36020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (18))){
var inst_35808 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35958_36021 = state_35883__$1;
(statearr_35958_36021[(2)] = inst_35808);

(statearr_35958_36021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (42))){
var state_35883__$1 = state_35883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35883__$1,(45),dchan);
} else {
if((state_val_35884 === (37))){
var inst_35851 = (state_35883[(23)]);
var inst_35842 = (state_35883[(25)]);
var inst_35755 = (state_35883[(12)]);
var inst_35851__$1 = cljs.core.first.call(null,inst_35842);
var inst_35852 = cljs.core.async.put_BANG_.call(null,inst_35851__$1,inst_35755,done);
var state_35883__$1 = (function (){var statearr_35959 = state_35883;
(statearr_35959[(23)] = inst_35851__$1);

return statearr_35959;
})();
if(cljs.core.truth_(inst_35852)){
var statearr_35960_36022 = state_35883__$1;
(statearr_35960_36022[(1)] = (39));

} else {
var statearr_35961_36023 = state_35883__$1;
(statearr_35961_36023[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (8))){
var inst_35767 = (state_35883[(14)]);
var inst_35766 = (state_35883[(17)]);
var inst_35769 = (inst_35767 < inst_35766);
var inst_35770 = inst_35769;
var state_35883__$1 = state_35883;
if(cljs.core.truth_(inst_35770)){
var statearr_35962_36024 = state_35883__$1;
(statearr_35962_36024[(1)] = (10));

} else {
var statearr_35963_36025 = state_35883__$1;
(statearr_35963_36025[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28196__auto___35971,cs,m,dchan,dctr,done))
;
return ((function (switch__28134__auto__,c__28196__auto___35971,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28135__auto__ = null;
var cljs$core$async$mult_$_state_machine__28135__auto____0 = (function (){
var statearr_35967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35967[(0)] = cljs$core$async$mult_$_state_machine__28135__auto__);

(statearr_35967[(1)] = (1));

return statearr_35967;
});
var cljs$core$async$mult_$_state_machine__28135__auto____1 = (function (state_35883){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_35883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e35968){if((e35968 instanceof Object)){
var ex__28138__auto__ = e35968;
var statearr_35969_36026 = state_35883;
(statearr_35969_36026[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36027 = state_35883;
state_35883 = G__36027;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28135__auto__ = function(state_35883){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28135__auto____1.call(this,state_35883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28135__auto____0;
cljs$core$async$mult_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28135__auto____1;
return cljs$core$async$mult_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___35971,cs,m,dchan,dctr,done))
})();
var state__28198__auto__ = (function (){var statearr_35970 = f__28197__auto__.call(null);
(statearr_35970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___35971);

return statearr_35970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___35971,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__36029 = arguments.length;
switch (G__36029) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj36032 = {};
return obj36032;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__24914__auto__ = m;
if(and__24914__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25562__auto__ = (((m == null))?null:m);
return (function (){var or__24926__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__25966__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25966__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36037){
var map__36038 = p__36037;
var map__36038__$1 = ((cljs.core.seq_QMARK_.call(null,map__36038))?cljs.core.apply.call(null,cljs.core.hash_map,map__36038):map__36038);
var opts = map__36038__$1;
var statearr_36039_36042 = state;
(statearr_36039_36042[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__36038,map__36038__$1,opts){
return (function (val){
var statearr_36040_36043 = state;
(statearr_36040_36043[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36038,map__36038__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_36041_36044 = state;
(statearr_36041_36044[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36033){
var G__36034 = cljs.core.first.call(null,seq36033);
var seq36033__$1 = cljs.core.next.call(null,seq36033);
var G__36035 = cljs.core.first.call(null,seq36033__$1);
var seq36033__$2 = cljs.core.next.call(null,seq36033__$1);
var G__36036 = cljs.core.first.call(null,seq36033__$2);
var seq36033__$3 = cljs.core.next.call(null,seq36033__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36034,G__36035,G__36036,seq36033__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t36164 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36164 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36165){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36165 = meta36165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36164.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t36164.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36166){
var self__ = this;
var _36166__$1 = this;
return self__.meta36165;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36166,meta36165__$1){
var self__ = this;
var _36166__$1 = this;
return (new cljs.core.async.t36164(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36165__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t36164.cljs$lang$type = true;

cljs.core.async.t36164.cljs$lang$ctorStr = "cljs.core.async/t36164";

cljs.core.async.t36164.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t36164");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t36164 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t36164(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36165){
return (new cljs.core.async.t36164(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36165));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t36164(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28196__auto___36283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___36283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___36283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (7))){
var inst_36180 = (state_36236[(7)]);
var inst_36185 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36180);
var state_36236__$1 = state_36236;
var statearr_36238_36284 = state_36236__$1;
(statearr_36238_36284[(2)] = inst_36185);

(statearr_36238_36284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (20))){
var inst_36195 = (state_36236[(8)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36236__$1,(23),out,inst_36195);
} else {
if((state_val_36237 === (1))){
var inst_36170 = (state_36236[(9)]);
var inst_36170__$1 = calc_state.call(null);
var inst_36171 = cljs.core.seq_QMARK_.call(null,inst_36170__$1);
var state_36236__$1 = (function (){var statearr_36239 = state_36236;
(statearr_36239[(9)] = inst_36170__$1);

return statearr_36239;
})();
if(inst_36171){
var statearr_36240_36285 = state_36236__$1;
(statearr_36240_36285[(1)] = (2));

} else {
var statearr_36241_36286 = state_36236__$1;
(statearr_36241_36286[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (24))){
var inst_36188 = (state_36236[(10)]);
var inst_36180 = inst_36188;
var state_36236__$1 = (function (){var statearr_36242 = state_36236;
(statearr_36242[(7)] = inst_36180);

return statearr_36242;
})();
var statearr_36243_36287 = state_36236__$1;
(statearr_36243_36287[(2)] = null);

(statearr_36243_36287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (4))){
var inst_36170 = (state_36236[(9)]);
var inst_36176 = (state_36236[(2)]);
var inst_36177 = cljs.core.get.call(null,inst_36176,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36178 = cljs.core.get.call(null,inst_36176,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36179 = cljs.core.get.call(null,inst_36176,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36180 = inst_36170;
var state_36236__$1 = (function (){var statearr_36244 = state_36236;
(statearr_36244[(11)] = inst_36177);

(statearr_36244[(7)] = inst_36180);

(statearr_36244[(12)] = inst_36178);

(statearr_36244[(13)] = inst_36179);

return statearr_36244;
})();
var statearr_36245_36288 = state_36236__$1;
(statearr_36245_36288[(2)] = null);

(statearr_36245_36288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (15))){
var state_36236__$1 = state_36236;
var statearr_36246_36289 = state_36236__$1;
(statearr_36246_36289[(2)] = null);

(statearr_36246_36289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (21))){
var inst_36188 = (state_36236[(10)]);
var inst_36180 = inst_36188;
var state_36236__$1 = (function (){var statearr_36247 = state_36236;
(statearr_36247[(7)] = inst_36180);

return statearr_36247;
})();
var statearr_36248_36290 = state_36236__$1;
(statearr_36248_36290[(2)] = null);

(statearr_36248_36290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (13))){
var inst_36232 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36249_36291 = state_36236__$1;
(statearr_36249_36291[(2)] = inst_36232);

(statearr_36249_36291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (22))){
var inst_36230 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36250_36292 = state_36236__$1;
(statearr_36250_36292[(2)] = inst_36230);

(statearr_36250_36292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (6))){
var inst_36234 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36236__$1,inst_36234);
} else {
if((state_val_36237 === (25))){
var state_36236__$1 = state_36236;
var statearr_36251_36293 = state_36236__$1;
(statearr_36251_36293[(2)] = null);

(statearr_36251_36293[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (17))){
var inst_36210 = (state_36236[(14)]);
var state_36236__$1 = state_36236;
var statearr_36252_36294 = state_36236__$1;
(statearr_36252_36294[(2)] = inst_36210);

(statearr_36252_36294[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (3))){
var inst_36170 = (state_36236[(9)]);
var state_36236__$1 = state_36236;
var statearr_36253_36295 = state_36236__$1;
(statearr_36253_36295[(2)] = inst_36170);

(statearr_36253_36295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (12))){
var inst_36196 = (state_36236[(15)]);
var inst_36191 = (state_36236[(16)]);
var inst_36210 = (state_36236[(14)]);
var inst_36210__$1 = inst_36191.call(null,inst_36196);
var state_36236__$1 = (function (){var statearr_36254 = state_36236;
(statearr_36254[(14)] = inst_36210__$1);

return statearr_36254;
})();
if(cljs.core.truth_(inst_36210__$1)){
var statearr_36255_36296 = state_36236__$1;
(statearr_36255_36296[(1)] = (17));

} else {
var statearr_36256_36297 = state_36236__$1;
(statearr_36256_36297[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (2))){
var inst_36170 = (state_36236[(9)]);
var inst_36173 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36170);
var state_36236__$1 = state_36236;
var statearr_36257_36298 = state_36236__$1;
(statearr_36257_36298[(2)] = inst_36173);

(statearr_36257_36298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (23))){
var inst_36221 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36221)){
var statearr_36258_36299 = state_36236__$1;
(statearr_36258_36299[(1)] = (24));

} else {
var statearr_36259_36300 = state_36236__$1;
(statearr_36259_36300[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (19))){
var inst_36218 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36218)){
var statearr_36260_36301 = state_36236__$1;
(statearr_36260_36301[(1)] = (20));

} else {
var statearr_36261_36302 = state_36236__$1;
(statearr_36261_36302[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (11))){
var inst_36195 = (state_36236[(8)]);
var inst_36201 = (inst_36195 == null);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36201)){
var statearr_36262_36303 = state_36236__$1;
(statearr_36262_36303[(1)] = (14));

} else {
var statearr_36263_36304 = state_36236__$1;
(statearr_36263_36304[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (9))){
var inst_36188 = (state_36236[(10)]);
var inst_36188__$1 = (state_36236[(2)]);
var inst_36189 = cljs.core.get.call(null,inst_36188__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36190 = cljs.core.get.call(null,inst_36188__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36191 = cljs.core.get.call(null,inst_36188__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_36236__$1 = (function (){var statearr_36264 = state_36236;
(statearr_36264[(10)] = inst_36188__$1);

(statearr_36264[(17)] = inst_36190);

(statearr_36264[(16)] = inst_36191);

return statearr_36264;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36236__$1,(10),inst_36189);
} else {
if((state_val_36237 === (5))){
var inst_36180 = (state_36236[(7)]);
var inst_36183 = cljs.core.seq_QMARK_.call(null,inst_36180);
var state_36236__$1 = state_36236;
if(inst_36183){
var statearr_36265_36305 = state_36236__$1;
(statearr_36265_36305[(1)] = (7));

} else {
var statearr_36266_36306 = state_36236__$1;
(statearr_36266_36306[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (14))){
var inst_36196 = (state_36236[(15)]);
var inst_36203 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36196);
var state_36236__$1 = state_36236;
var statearr_36267_36307 = state_36236__$1;
(statearr_36267_36307[(2)] = inst_36203);

(statearr_36267_36307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (26))){
var inst_36226 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36268_36308 = state_36236__$1;
(statearr_36268_36308[(2)] = inst_36226);

(statearr_36268_36308[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (16))){
var inst_36206 = (state_36236[(2)]);
var inst_36207 = calc_state.call(null);
var inst_36180 = inst_36207;
var state_36236__$1 = (function (){var statearr_36269 = state_36236;
(statearr_36269[(18)] = inst_36206);

(statearr_36269[(7)] = inst_36180);

return statearr_36269;
})();
var statearr_36270_36309 = state_36236__$1;
(statearr_36270_36309[(2)] = null);

(statearr_36270_36309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (10))){
var inst_36196 = (state_36236[(15)]);
var inst_36195 = (state_36236[(8)]);
var inst_36194 = (state_36236[(2)]);
var inst_36195__$1 = cljs.core.nth.call(null,inst_36194,(0),null);
var inst_36196__$1 = cljs.core.nth.call(null,inst_36194,(1),null);
var inst_36197 = (inst_36195__$1 == null);
var inst_36198 = cljs.core._EQ_.call(null,inst_36196__$1,change);
var inst_36199 = (inst_36197) || (inst_36198);
var state_36236__$1 = (function (){var statearr_36271 = state_36236;
(statearr_36271[(15)] = inst_36196__$1);

(statearr_36271[(8)] = inst_36195__$1);

return statearr_36271;
})();
if(cljs.core.truth_(inst_36199)){
var statearr_36272_36310 = state_36236__$1;
(statearr_36272_36310[(1)] = (11));

} else {
var statearr_36273_36311 = state_36236__$1;
(statearr_36273_36311[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (18))){
var inst_36196 = (state_36236[(15)]);
var inst_36190 = (state_36236[(17)]);
var inst_36191 = (state_36236[(16)]);
var inst_36213 = cljs.core.empty_QMARK_.call(null,inst_36191);
var inst_36214 = inst_36190.call(null,inst_36196);
var inst_36215 = cljs.core.not.call(null,inst_36214);
var inst_36216 = (inst_36213) && (inst_36215);
var state_36236__$1 = state_36236;
var statearr_36274_36312 = state_36236__$1;
(statearr_36274_36312[(2)] = inst_36216);

(statearr_36274_36312[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (8))){
var inst_36180 = (state_36236[(7)]);
var state_36236__$1 = state_36236;
var statearr_36275_36313 = state_36236__$1;
(statearr_36275_36313[(2)] = inst_36180);

(statearr_36275_36313[(1)] = (9));


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
});})(c__28196__auto___36283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28134__auto__,c__28196__auto___36283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28135__auto__ = null;
var cljs$core$async$mix_$_state_machine__28135__auto____0 = (function (){
var statearr_36279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36279[(0)] = cljs$core$async$mix_$_state_machine__28135__auto__);

(statearr_36279[(1)] = (1));

return statearr_36279;
});
var cljs$core$async$mix_$_state_machine__28135__auto____1 = (function (state_36236){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_36236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e36280){if((e36280 instanceof Object)){
var ex__28138__auto__ = e36280;
var statearr_36281_36314 = state_36236;
(statearr_36281_36314[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36315 = state_36236;
state_36236 = G__36315;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28135__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28135__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28135__auto____0;
cljs$core$async$mix_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28135__auto____1;
return cljs$core$async$mix_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___36283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28198__auto__ = (function (){var statearr_36282 = f__28197__auto__.call(null);
(statearr_36282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___36283);

return statearr_36282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___36283,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj36317 = {};
return obj36317;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__36319 = arguments.length;
switch (G__36319) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__24914__auto__ = p;
if(and__24914__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__24914__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25562__auto__ = (((p == null))?null:p);
return (function (){var or__24926__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25562__auto__)]);
if(or__24926__auto__){
return or__24926__auto__;
} else {
var or__24926__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24926__auto____$1){
return or__24926__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__36323 = arguments.length;
switch (G__36323) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24926__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24926__auto__)){
return or__24926__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24926__auto__,mults){
return (function (p1__36321_SHARP_){
if(cljs.core.truth_(p1__36321_SHARP_.call(null,topic))){
return p1__36321_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36321_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24926__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t36324 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36324 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta36325){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta36325 = meta36325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36324.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t36324.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t36324.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t36324.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t36324.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t36324.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36324.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t36324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36326){
var self__ = this;
var _36326__$1 = this;
return self__.meta36325;
});})(mults,ensure_mult))
;

cljs.core.async.t36324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36326,meta36325__$1){
var self__ = this;
var _36326__$1 = this;
return (new cljs.core.async.t36324(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta36325__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t36324.cljs$lang$type = true;

cljs.core.async.t36324.cljs$lang$ctorStr = "cljs.core.async/t36324";

cljs.core.async.t36324.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t36324");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t36324 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t36324(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta36325){
return (new cljs.core.async.t36324(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta36325));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t36324(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28196__auto___36447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___36447,mults,ensure_mult,p){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___36447,mults,ensure_mult,p){
return (function (state_36398){
var state_val_36399 = (state_36398[(1)]);
if((state_val_36399 === (7))){
var inst_36394 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36400_36448 = state_36398__$1;
(statearr_36400_36448[(2)] = inst_36394);

(statearr_36400_36448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (20))){
var state_36398__$1 = state_36398;
var statearr_36401_36449 = state_36398__$1;
(statearr_36401_36449[(2)] = null);

(statearr_36401_36449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (1))){
var state_36398__$1 = state_36398;
var statearr_36402_36450 = state_36398__$1;
(statearr_36402_36450[(2)] = null);

(statearr_36402_36450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (24))){
var inst_36377 = (state_36398[(7)]);
var inst_36386 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36377);
var state_36398__$1 = state_36398;
var statearr_36403_36451 = state_36398__$1;
(statearr_36403_36451[(2)] = inst_36386);

(statearr_36403_36451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (4))){
var inst_36329 = (state_36398[(8)]);
var inst_36329__$1 = (state_36398[(2)]);
var inst_36330 = (inst_36329__$1 == null);
var state_36398__$1 = (function (){var statearr_36404 = state_36398;
(statearr_36404[(8)] = inst_36329__$1);

return statearr_36404;
})();
if(cljs.core.truth_(inst_36330)){
var statearr_36405_36452 = state_36398__$1;
(statearr_36405_36452[(1)] = (5));

} else {
var statearr_36406_36453 = state_36398__$1;
(statearr_36406_36453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (15))){
var inst_36371 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36407_36454 = state_36398__$1;
(statearr_36407_36454[(2)] = inst_36371);

(statearr_36407_36454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (21))){
var inst_36391 = (state_36398[(2)]);
var state_36398__$1 = (function (){var statearr_36408 = state_36398;
(statearr_36408[(9)] = inst_36391);

return statearr_36408;
})();
var statearr_36409_36455 = state_36398__$1;
(statearr_36409_36455[(2)] = null);

(statearr_36409_36455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (13))){
var inst_36353 = (state_36398[(10)]);
var inst_36355 = cljs.core.chunked_seq_QMARK_.call(null,inst_36353);
var state_36398__$1 = state_36398;
if(inst_36355){
var statearr_36410_36456 = state_36398__$1;
(statearr_36410_36456[(1)] = (16));

} else {
var statearr_36411_36457 = state_36398__$1;
(statearr_36411_36457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (22))){
var inst_36383 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
if(cljs.core.truth_(inst_36383)){
var statearr_36412_36458 = state_36398__$1;
(statearr_36412_36458[(1)] = (23));

} else {
var statearr_36413_36459 = state_36398__$1;
(statearr_36413_36459[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (6))){
var inst_36329 = (state_36398[(8)]);
var inst_36377 = (state_36398[(7)]);
var inst_36379 = (state_36398[(11)]);
var inst_36377__$1 = topic_fn.call(null,inst_36329);
var inst_36378 = cljs.core.deref.call(null,mults);
var inst_36379__$1 = cljs.core.get.call(null,inst_36378,inst_36377__$1);
var state_36398__$1 = (function (){var statearr_36414 = state_36398;
(statearr_36414[(7)] = inst_36377__$1);

(statearr_36414[(11)] = inst_36379__$1);

return statearr_36414;
})();
if(cljs.core.truth_(inst_36379__$1)){
var statearr_36415_36460 = state_36398__$1;
(statearr_36415_36460[(1)] = (19));

} else {
var statearr_36416_36461 = state_36398__$1;
(statearr_36416_36461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (25))){
var inst_36388 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36417_36462 = state_36398__$1;
(statearr_36417_36462[(2)] = inst_36388);

(statearr_36417_36462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (17))){
var inst_36353 = (state_36398[(10)]);
var inst_36362 = cljs.core.first.call(null,inst_36353);
var inst_36363 = cljs.core.async.muxch_STAR_.call(null,inst_36362);
var inst_36364 = cljs.core.async.close_BANG_.call(null,inst_36363);
var inst_36365 = cljs.core.next.call(null,inst_36353);
var inst_36339 = inst_36365;
var inst_36340 = null;
var inst_36341 = (0);
var inst_36342 = (0);
var state_36398__$1 = (function (){var statearr_36418 = state_36398;
(statearr_36418[(12)] = inst_36341);

(statearr_36418[(13)] = inst_36342);

(statearr_36418[(14)] = inst_36339);

(statearr_36418[(15)] = inst_36364);

(statearr_36418[(16)] = inst_36340);

return statearr_36418;
})();
var statearr_36419_36463 = state_36398__$1;
(statearr_36419_36463[(2)] = null);

(statearr_36419_36463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (3))){
var inst_36396 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36398__$1,inst_36396);
} else {
if((state_val_36399 === (12))){
var inst_36373 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36420_36464 = state_36398__$1;
(statearr_36420_36464[(2)] = inst_36373);

(statearr_36420_36464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (2))){
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36398__$1,(4),ch);
} else {
if((state_val_36399 === (23))){
var state_36398__$1 = state_36398;
var statearr_36421_36465 = state_36398__$1;
(statearr_36421_36465[(2)] = null);

(statearr_36421_36465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (19))){
var inst_36329 = (state_36398[(8)]);
var inst_36379 = (state_36398[(11)]);
var inst_36381 = cljs.core.async.muxch_STAR_.call(null,inst_36379);
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36398__$1,(22),inst_36381,inst_36329);
} else {
if((state_val_36399 === (11))){
var inst_36339 = (state_36398[(14)]);
var inst_36353 = (state_36398[(10)]);
var inst_36353__$1 = cljs.core.seq.call(null,inst_36339);
var state_36398__$1 = (function (){var statearr_36422 = state_36398;
(statearr_36422[(10)] = inst_36353__$1);

return statearr_36422;
})();
if(inst_36353__$1){
var statearr_36423_36466 = state_36398__$1;
(statearr_36423_36466[(1)] = (13));

} else {
var statearr_36424_36467 = state_36398__$1;
(statearr_36424_36467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (9))){
var inst_36375 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36425_36468 = state_36398__$1;
(statearr_36425_36468[(2)] = inst_36375);

(statearr_36425_36468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (5))){
var inst_36336 = cljs.core.deref.call(null,mults);
var inst_36337 = cljs.core.vals.call(null,inst_36336);
var inst_36338 = cljs.core.seq.call(null,inst_36337);
var inst_36339 = inst_36338;
var inst_36340 = null;
var inst_36341 = (0);
var inst_36342 = (0);
var state_36398__$1 = (function (){var statearr_36426 = state_36398;
(statearr_36426[(12)] = inst_36341);

(statearr_36426[(13)] = inst_36342);

(statearr_36426[(14)] = inst_36339);

(statearr_36426[(16)] = inst_36340);

return statearr_36426;
})();
var statearr_36427_36469 = state_36398__$1;
(statearr_36427_36469[(2)] = null);

(statearr_36427_36469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (14))){
var state_36398__$1 = state_36398;
var statearr_36431_36470 = state_36398__$1;
(statearr_36431_36470[(2)] = null);

(statearr_36431_36470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (16))){
var inst_36353 = (state_36398[(10)]);
var inst_36357 = cljs.core.chunk_first.call(null,inst_36353);
var inst_36358 = cljs.core.chunk_rest.call(null,inst_36353);
var inst_36359 = cljs.core.count.call(null,inst_36357);
var inst_36339 = inst_36358;
var inst_36340 = inst_36357;
var inst_36341 = inst_36359;
var inst_36342 = (0);
var state_36398__$1 = (function (){var statearr_36432 = state_36398;
(statearr_36432[(12)] = inst_36341);

(statearr_36432[(13)] = inst_36342);

(statearr_36432[(14)] = inst_36339);

(statearr_36432[(16)] = inst_36340);

return statearr_36432;
})();
var statearr_36433_36471 = state_36398__$1;
(statearr_36433_36471[(2)] = null);

(statearr_36433_36471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (10))){
var inst_36341 = (state_36398[(12)]);
var inst_36342 = (state_36398[(13)]);
var inst_36339 = (state_36398[(14)]);
var inst_36340 = (state_36398[(16)]);
var inst_36347 = cljs.core._nth.call(null,inst_36340,inst_36342);
var inst_36348 = cljs.core.async.muxch_STAR_.call(null,inst_36347);
var inst_36349 = cljs.core.async.close_BANG_.call(null,inst_36348);
var inst_36350 = (inst_36342 + (1));
var tmp36428 = inst_36341;
var tmp36429 = inst_36339;
var tmp36430 = inst_36340;
var inst_36339__$1 = tmp36429;
var inst_36340__$1 = tmp36430;
var inst_36341__$1 = tmp36428;
var inst_36342__$1 = inst_36350;
var state_36398__$1 = (function (){var statearr_36434 = state_36398;
(statearr_36434[(12)] = inst_36341__$1);

(statearr_36434[(13)] = inst_36342__$1);

(statearr_36434[(14)] = inst_36339__$1);

(statearr_36434[(17)] = inst_36349);

(statearr_36434[(16)] = inst_36340__$1);

return statearr_36434;
})();
var statearr_36435_36472 = state_36398__$1;
(statearr_36435_36472[(2)] = null);

(statearr_36435_36472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (18))){
var inst_36368 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36436_36473 = state_36398__$1;
(statearr_36436_36473[(2)] = inst_36368);

(statearr_36436_36473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (8))){
var inst_36341 = (state_36398[(12)]);
var inst_36342 = (state_36398[(13)]);
var inst_36344 = (inst_36342 < inst_36341);
var inst_36345 = inst_36344;
var state_36398__$1 = state_36398;
if(cljs.core.truth_(inst_36345)){
var statearr_36437_36474 = state_36398__$1;
(statearr_36437_36474[(1)] = (10));

} else {
var statearr_36438_36475 = state_36398__$1;
(statearr_36438_36475[(1)] = (11));

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
});})(c__28196__auto___36447,mults,ensure_mult,p))
;
return ((function (switch__28134__auto__,c__28196__auto___36447,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_36442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36442[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_36442[(1)] = (1));

return statearr_36442;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_36398){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_36398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e36443){if((e36443 instanceof Object)){
var ex__28138__auto__ = e36443;
var statearr_36444_36476 = state_36398;
(statearr_36444_36476[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36477 = state_36398;
state_36398 = G__36477;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_36398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_36398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___36447,mults,ensure_mult,p))
})();
var state__28198__auto__ = (function (){var statearr_36445 = f__28197__auto__.call(null);
(statearr_36445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___36447);

return statearr_36445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___36447,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__36479 = arguments.length;
switch (G__36479) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__36482 = arguments.length;
switch (G__36482) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__36485 = arguments.length;
switch (G__36485) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28196__auto___36555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___36555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___36555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36524){
var state_val_36525 = (state_36524[(1)]);
if((state_val_36525 === (7))){
var state_36524__$1 = state_36524;
var statearr_36526_36556 = state_36524__$1;
(statearr_36526_36556[(2)] = null);

(statearr_36526_36556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (1))){
var state_36524__$1 = state_36524;
var statearr_36527_36557 = state_36524__$1;
(statearr_36527_36557[(2)] = null);

(statearr_36527_36557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (4))){
var inst_36488 = (state_36524[(7)]);
var inst_36490 = (inst_36488 < cnt);
var state_36524__$1 = state_36524;
if(cljs.core.truth_(inst_36490)){
var statearr_36528_36558 = state_36524__$1;
(statearr_36528_36558[(1)] = (6));

} else {
var statearr_36529_36559 = state_36524__$1;
(statearr_36529_36559[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (15))){
var inst_36520 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
var statearr_36530_36560 = state_36524__$1;
(statearr_36530_36560[(2)] = inst_36520);

(statearr_36530_36560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (13))){
var inst_36513 = cljs.core.async.close_BANG_.call(null,out);
var state_36524__$1 = state_36524;
var statearr_36531_36561 = state_36524__$1;
(statearr_36531_36561[(2)] = inst_36513);

(statearr_36531_36561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (6))){
var state_36524__$1 = state_36524;
var statearr_36532_36562 = state_36524__$1;
(statearr_36532_36562[(2)] = null);

(statearr_36532_36562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (3))){
var inst_36522 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36524__$1,inst_36522);
} else {
if((state_val_36525 === (12))){
var inst_36510 = (state_36524[(8)]);
var inst_36510__$1 = (state_36524[(2)]);
var inst_36511 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36510__$1);
var state_36524__$1 = (function (){var statearr_36533 = state_36524;
(statearr_36533[(8)] = inst_36510__$1);

return statearr_36533;
})();
if(cljs.core.truth_(inst_36511)){
var statearr_36534_36563 = state_36524__$1;
(statearr_36534_36563[(1)] = (13));

} else {
var statearr_36535_36564 = state_36524__$1;
(statearr_36535_36564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (2))){
var inst_36487 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36488 = (0);
var state_36524__$1 = (function (){var statearr_36536 = state_36524;
(statearr_36536[(7)] = inst_36488);

(statearr_36536[(9)] = inst_36487);

return statearr_36536;
})();
var statearr_36537_36565 = state_36524__$1;
(statearr_36537_36565[(2)] = null);

(statearr_36537_36565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (11))){
var inst_36488 = (state_36524[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36524,(10),Object,null,(9));
var inst_36497 = chs__$1.call(null,inst_36488);
var inst_36498 = done.call(null,inst_36488);
var inst_36499 = cljs.core.async.take_BANG_.call(null,inst_36497,inst_36498);
var state_36524__$1 = state_36524;
var statearr_36538_36566 = state_36524__$1;
(statearr_36538_36566[(2)] = inst_36499);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36524__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (9))){
var inst_36488 = (state_36524[(7)]);
var inst_36501 = (state_36524[(2)]);
var inst_36502 = (inst_36488 + (1));
var inst_36488__$1 = inst_36502;
var state_36524__$1 = (function (){var statearr_36539 = state_36524;
(statearr_36539[(7)] = inst_36488__$1);

(statearr_36539[(10)] = inst_36501);

return statearr_36539;
})();
var statearr_36540_36567 = state_36524__$1;
(statearr_36540_36567[(2)] = null);

(statearr_36540_36567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (5))){
var inst_36508 = (state_36524[(2)]);
var state_36524__$1 = (function (){var statearr_36541 = state_36524;
(statearr_36541[(11)] = inst_36508);

return statearr_36541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36524__$1,(12),dchan);
} else {
if((state_val_36525 === (14))){
var inst_36510 = (state_36524[(8)]);
var inst_36515 = cljs.core.apply.call(null,f,inst_36510);
var state_36524__$1 = state_36524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36524__$1,(16),out,inst_36515);
} else {
if((state_val_36525 === (16))){
var inst_36517 = (state_36524[(2)]);
var state_36524__$1 = (function (){var statearr_36542 = state_36524;
(statearr_36542[(12)] = inst_36517);

return statearr_36542;
})();
var statearr_36543_36568 = state_36524__$1;
(statearr_36543_36568[(2)] = null);

(statearr_36543_36568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (10))){
var inst_36492 = (state_36524[(2)]);
var inst_36493 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36524__$1 = (function (){var statearr_36544 = state_36524;
(statearr_36544[(13)] = inst_36492);

return statearr_36544;
})();
var statearr_36545_36569 = state_36524__$1;
(statearr_36545_36569[(2)] = inst_36493);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36524__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36525 === (8))){
var inst_36506 = (state_36524[(2)]);
var state_36524__$1 = state_36524;
var statearr_36546_36570 = state_36524__$1;
(statearr_36546_36570[(2)] = inst_36506);

(statearr_36546_36570[(1)] = (5));


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
});})(c__28196__auto___36555,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28134__auto__,c__28196__auto___36555,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_36550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36550[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_36550[(1)] = (1));

return statearr_36550;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_36524){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_36524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e36551){if((e36551 instanceof Object)){
var ex__28138__auto__ = e36551;
var statearr_36552_36571 = state_36524;
(statearr_36552_36571[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36572 = state_36524;
state_36524 = G__36572;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_36524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_36524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___36555,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28198__auto__ = (function (){var statearr_36553 = f__28197__auto__.call(null);
(statearr_36553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___36555);

return statearr_36553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___36555,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__36575 = arguments.length;
switch (G__36575) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28196__auto___36630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___36630,out){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___36630,out){
return (function (state_36605){
var state_val_36606 = (state_36605[(1)]);
if((state_val_36606 === (7))){
var inst_36585 = (state_36605[(7)]);
var inst_36584 = (state_36605[(8)]);
var inst_36584__$1 = (state_36605[(2)]);
var inst_36585__$1 = cljs.core.nth.call(null,inst_36584__$1,(0),null);
var inst_36586 = cljs.core.nth.call(null,inst_36584__$1,(1),null);
var inst_36587 = (inst_36585__$1 == null);
var state_36605__$1 = (function (){var statearr_36607 = state_36605;
(statearr_36607[(9)] = inst_36586);

(statearr_36607[(7)] = inst_36585__$1);

(statearr_36607[(8)] = inst_36584__$1);

return statearr_36607;
})();
if(cljs.core.truth_(inst_36587)){
var statearr_36608_36631 = state_36605__$1;
(statearr_36608_36631[(1)] = (8));

} else {
var statearr_36609_36632 = state_36605__$1;
(statearr_36609_36632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (1))){
var inst_36576 = cljs.core.vec.call(null,chs);
var inst_36577 = inst_36576;
var state_36605__$1 = (function (){var statearr_36610 = state_36605;
(statearr_36610[(10)] = inst_36577);

return statearr_36610;
})();
var statearr_36611_36633 = state_36605__$1;
(statearr_36611_36633[(2)] = null);

(statearr_36611_36633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (4))){
var inst_36577 = (state_36605[(10)]);
var state_36605__$1 = state_36605;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36605__$1,(7),inst_36577);
} else {
if((state_val_36606 === (6))){
var inst_36601 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36612_36634 = state_36605__$1;
(statearr_36612_36634[(2)] = inst_36601);

(statearr_36612_36634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (3))){
var inst_36603 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36605__$1,inst_36603);
} else {
if((state_val_36606 === (2))){
var inst_36577 = (state_36605[(10)]);
var inst_36579 = cljs.core.count.call(null,inst_36577);
var inst_36580 = (inst_36579 > (0));
var state_36605__$1 = state_36605;
if(cljs.core.truth_(inst_36580)){
var statearr_36614_36635 = state_36605__$1;
(statearr_36614_36635[(1)] = (4));

} else {
var statearr_36615_36636 = state_36605__$1;
(statearr_36615_36636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (11))){
var inst_36577 = (state_36605[(10)]);
var inst_36594 = (state_36605[(2)]);
var tmp36613 = inst_36577;
var inst_36577__$1 = tmp36613;
var state_36605__$1 = (function (){var statearr_36616 = state_36605;
(statearr_36616[(10)] = inst_36577__$1);

(statearr_36616[(11)] = inst_36594);

return statearr_36616;
})();
var statearr_36617_36637 = state_36605__$1;
(statearr_36617_36637[(2)] = null);

(statearr_36617_36637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (9))){
var inst_36585 = (state_36605[(7)]);
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36605__$1,(11),out,inst_36585);
} else {
if((state_val_36606 === (5))){
var inst_36599 = cljs.core.async.close_BANG_.call(null,out);
var state_36605__$1 = state_36605;
var statearr_36618_36638 = state_36605__$1;
(statearr_36618_36638[(2)] = inst_36599);

(statearr_36618_36638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (10))){
var inst_36597 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36619_36639 = state_36605__$1;
(statearr_36619_36639[(2)] = inst_36597);

(statearr_36619_36639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (8))){
var inst_36577 = (state_36605[(10)]);
var inst_36586 = (state_36605[(9)]);
var inst_36585 = (state_36605[(7)]);
var inst_36584 = (state_36605[(8)]);
var inst_36589 = (function (){var c = inst_36586;
var v = inst_36585;
var vec__36582 = inst_36584;
var cs = inst_36577;
return ((function (c,v,vec__36582,cs,inst_36577,inst_36586,inst_36585,inst_36584,state_val_36606,c__28196__auto___36630,out){
return (function (p1__36573_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36573_SHARP_);
});
;})(c,v,vec__36582,cs,inst_36577,inst_36586,inst_36585,inst_36584,state_val_36606,c__28196__auto___36630,out))
})();
var inst_36590 = cljs.core.filterv.call(null,inst_36589,inst_36577);
var inst_36577__$1 = inst_36590;
var state_36605__$1 = (function (){var statearr_36620 = state_36605;
(statearr_36620[(10)] = inst_36577__$1);

return statearr_36620;
})();
var statearr_36621_36640 = state_36605__$1;
(statearr_36621_36640[(2)] = null);

(statearr_36621_36640[(1)] = (2));


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
});})(c__28196__auto___36630,out))
;
return ((function (switch__28134__auto__,c__28196__auto___36630,out){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_36625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36625[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_36625[(1)] = (1));

return statearr_36625;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_36605){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_36605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e36626){if((e36626 instanceof Object)){
var ex__28138__auto__ = e36626;
var statearr_36627_36641 = state_36605;
(statearr_36627_36641[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36642 = state_36605;
state_36605 = G__36642;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_36605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_36605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___36630,out))
})();
var state__28198__auto__ = (function (){var statearr_36628 = f__28197__auto__.call(null);
(statearr_36628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___36630);

return statearr_36628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___36630,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__36644 = arguments.length;
switch (G__36644) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28196__auto___36692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___36692,out){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___36692,out){
return (function (state_36668){
var state_val_36669 = (state_36668[(1)]);
if((state_val_36669 === (7))){
var inst_36650 = (state_36668[(7)]);
var inst_36650__$1 = (state_36668[(2)]);
var inst_36651 = (inst_36650__$1 == null);
var inst_36652 = cljs.core.not.call(null,inst_36651);
var state_36668__$1 = (function (){var statearr_36670 = state_36668;
(statearr_36670[(7)] = inst_36650__$1);

return statearr_36670;
})();
if(inst_36652){
var statearr_36671_36693 = state_36668__$1;
(statearr_36671_36693[(1)] = (8));

} else {
var statearr_36672_36694 = state_36668__$1;
(statearr_36672_36694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (1))){
var inst_36645 = (0);
var state_36668__$1 = (function (){var statearr_36673 = state_36668;
(statearr_36673[(8)] = inst_36645);

return statearr_36673;
})();
var statearr_36674_36695 = state_36668__$1;
(statearr_36674_36695[(2)] = null);

(statearr_36674_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (4))){
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36668__$1,(7),ch);
} else {
if((state_val_36669 === (6))){
var inst_36663 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36675_36696 = state_36668__$1;
(statearr_36675_36696[(2)] = inst_36663);

(statearr_36675_36696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (3))){
var inst_36665 = (state_36668[(2)]);
var inst_36666 = cljs.core.async.close_BANG_.call(null,out);
var state_36668__$1 = (function (){var statearr_36676 = state_36668;
(statearr_36676[(9)] = inst_36665);

return statearr_36676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36668__$1,inst_36666);
} else {
if((state_val_36669 === (2))){
var inst_36645 = (state_36668[(8)]);
var inst_36647 = (inst_36645 < n);
var state_36668__$1 = state_36668;
if(cljs.core.truth_(inst_36647)){
var statearr_36677_36697 = state_36668__$1;
(statearr_36677_36697[(1)] = (4));

} else {
var statearr_36678_36698 = state_36668__$1;
(statearr_36678_36698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (11))){
var inst_36645 = (state_36668[(8)]);
var inst_36655 = (state_36668[(2)]);
var inst_36656 = (inst_36645 + (1));
var inst_36645__$1 = inst_36656;
var state_36668__$1 = (function (){var statearr_36679 = state_36668;
(statearr_36679[(8)] = inst_36645__$1);

(statearr_36679[(10)] = inst_36655);

return statearr_36679;
})();
var statearr_36680_36699 = state_36668__$1;
(statearr_36680_36699[(2)] = null);

(statearr_36680_36699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (9))){
var state_36668__$1 = state_36668;
var statearr_36681_36700 = state_36668__$1;
(statearr_36681_36700[(2)] = null);

(statearr_36681_36700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (5))){
var state_36668__$1 = state_36668;
var statearr_36682_36701 = state_36668__$1;
(statearr_36682_36701[(2)] = null);

(statearr_36682_36701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (10))){
var inst_36660 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36683_36702 = state_36668__$1;
(statearr_36683_36702[(2)] = inst_36660);

(statearr_36683_36702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (8))){
var inst_36650 = (state_36668[(7)]);
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36668__$1,(11),out,inst_36650);
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
});})(c__28196__auto___36692,out))
;
return ((function (switch__28134__auto__,c__28196__auto___36692,out){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_36687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36687[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_36687[(1)] = (1));

return statearr_36687;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_36668){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_36668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e36688){if((e36688 instanceof Object)){
var ex__28138__auto__ = e36688;
var statearr_36689_36703 = state_36668;
(statearr_36689_36703[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36704 = state_36668;
state_36668 = G__36704;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_36668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_36668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___36692,out))
})();
var state__28198__auto__ = (function (){var statearr_36690 = f__28197__auto__.call(null);
(statearr_36690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___36692);

return statearr_36690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___36692,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t36712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36712 = (function (ch,f,map_LT_,meta36713){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36713 = meta36713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t36712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t36715 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36715 = (function (fn1,_,meta36713,map_LT_,f,ch,meta36716){
this.fn1 = fn1;
this._ = _;
this.meta36713 = meta36713;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36716 = meta36716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36715.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t36715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36705_SHARP_){
return f1.call(null,(((p1__36705_SHARP_ == null))?null:self__.f.call(null,p1__36705_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t36715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36717){
var self__ = this;
var _36717__$1 = this;
return self__.meta36716;
});})(___$1))
;

cljs.core.async.t36715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36717,meta36716__$1){
var self__ = this;
var _36717__$1 = this;
return (new cljs.core.async.t36715(self__.fn1,self__._,self__.meta36713,self__.map_LT_,self__.f,self__.ch,meta36716__$1));
});})(___$1))
;

cljs.core.async.t36715.cljs$lang$type = true;

cljs.core.async.t36715.cljs$lang$ctorStr = "cljs.core.async/t36715";

cljs.core.async.t36715.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t36715");
});})(___$1))
;

cljs.core.async.__GT_t36715 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t36715(fn1__$1,___$2,meta36713__$1,map_LT___$1,f__$1,ch__$1,meta36716){
return (new cljs.core.async.t36715(fn1__$1,___$2,meta36713__$1,map_LT___$1,f__$1,ch__$1,meta36716));
});})(___$1))
;

}

return (new cljs.core.async.t36715(fn1,___$1,self__.meta36713,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24914__auto__ = ret;
if(cljs.core.truth_(and__24914__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24914__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t36712.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t36712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36714){
var self__ = this;
var _36714__$1 = this;
return self__.meta36713;
});

cljs.core.async.t36712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36714,meta36713__$1){
var self__ = this;
var _36714__$1 = this;
return (new cljs.core.async.t36712(self__.ch,self__.f,self__.map_LT_,meta36713__$1));
});

cljs.core.async.t36712.cljs$lang$type = true;

cljs.core.async.t36712.cljs$lang$ctorStr = "cljs.core.async/t36712";

cljs.core.async.t36712.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t36712");
});

cljs.core.async.__GT_t36712 = (function cljs$core$async$map_LT__$___GT_t36712(ch__$1,f__$1,map_LT___$1,meta36713){
return (new cljs.core.async.t36712(ch__$1,f__$1,map_LT___$1,meta36713));
});

}

return (new cljs.core.async.t36712(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t36721 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36721 = (function (ch,f,map_GT_,meta36722){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36722 = meta36722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t36721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t36721.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36723){
var self__ = this;
var _36723__$1 = this;
return self__.meta36722;
});

cljs.core.async.t36721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36723,meta36722__$1){
var self__ = this;
var _36723__$1 = this;
return (new cljs.core.async.t36721(self__.ch,self__.f,self__.map_GT_,meta36722__$1));
});

cljs.core.async.t36721.cljs$lang$type = true;

cljs.core.async.t36721.cljs$lang$ctorStr = "cljs.core.async/t36721";

cljs.core.async.t36721.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t36721");
});

cljs.core.async.__GT_t36721 = (function cljs$core$async$map_GT__$___GT_t36721(ch__$1,f__$1,map_GT___$1,meta36722){
return (new cljs.core.async.t36721(ch__$1,f__$1,map_GT___$1,meta36722));
});

}

return (new cljs.core.async.t36721(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t36727 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36727 = (function (ch,p,filter_GT_,meta36728){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36728 = meta36728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t36727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t36727.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t36727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36729){
var self__ = this;
var _36729__$1 = this;
return self__.meta36728;
});

cljs.core.async.t36727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36729,meta36728__$1){
var self__ = this;
var _36729__$1 = this;
return (new cljs.core.async.t36727(self__.ch,self__.p,self__.filter_GT_,meta36728__$1));
});

cljs.core.async.t36727.cljs$lang$type = true;

cljs.core.async.t36727.cljs$lang$ctorStr = "cljs.core.async/t36727";

cljs.core.async.t36727.cljs$lang$ctorPrWriter = (function (this__25505__auto__,writer__25506__auto__,opt__25507__auto__){
return cljs.core._write.call(null,writer__25506__auto__,"cljs.core.async/t36727");
});

cljs.core.async.__GT_t36727 = (function cljs$core$async$filter_GT__$___GT_t36727(ch__$1,p__$1,filter_GT___$1,meta36728){
return (new cljs.core.async.t36727(ch__$1,p__$1,filter_GT___$1,meta36728));
});

}

return (new cljs.core.async.t36727(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__36731 = arguments.length;
switch (G__36731) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28196__auto___36774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___36774,out){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___36774,out){
return (function (state_36752){
var state_val_36753 = (state_36752[(1)]);
if((state_val_36753 === (7))){
var inst_36748 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36754_36775 = state_36752__$1;
(statearr_36754_36775[(2)] = inst_36748);

(statearr_36754_36775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (1))){
var state_36752__$1 = state_36752;
var statearr_36755_36776 = state_36752__$1;
(statearr_36755_36776[(2)] = null);

(statearr_36755_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (4))){
var inst_36734 = (state_36752[(7)]);
var inst_36734__$1 = (state_36752[(2)]);
var inst_36735 = (inst_36734__$1 == null);
var state_36752__$1 = (function (){var statearr_36756 = state_36752;
(statearr_36756[(7)] = inst_36734__$1);

return statearr_36756;
})();
if(cljs.core.truth_(inst_36735)){
var statearr_36757_36777 = state_36752__$1;
(statearr_36757_36777[(1)] = (5));

} else {
var statearr_36758_36778 = state_36752__$1;
(statearr_36758_36778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (6))){
var inst_36734 = (state_36752[(7)]);
var inst_36739 = p.call(null,inst_36734);
var state_36752__$1 = state_36752;
if(cljs.core.truth_(inst_36739)){
var statearr_36759_36779 = state_36752__$1;
(statearr_36759_36779[(1)] = (8));

} else {
var statearr_36760_36780 = state_36752__$1;
(statearr_36760_36780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (3))){
var inst_36750 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36752__$1,inst_36750);
} else {
if((state_val_36753 === (2))){
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(4),ch);
} else {
if((state_val_36753 === (11))){
var inst_36742 = (state_36752[(2)]);
var state_36752__$1 = state_36752;
var statearr_36761_36781 = state_36752__$1;
(statearr_36761_36781[(2)] = inst_36742);

(statearr_36761_36781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (9))){
var state_36752__$1 = state_36752;
var statearr_36762_36782 = state_36752__$1;
(statearr_36762_36782[(2)] = null);

(statearr_36762_36782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (5))){
var inst_36737 = cljs.core.async.close_BANG_.call(null,out);
var state_36752__$1 = state_36752;
var statearr_36763_36783 = state_36752__$1;
(statearr_36763_36783[(2)] = inst_36737);

(statearr_36763_36783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (10))){
var inst_36745 = (state_36752[(2)]);
var state_36752__$1 = (function (){var statearr_36764 = state_36752;
(statearr_36764[(8)] = inst_36745);

return statearr_36764;
})();
var statearr_36765_36784 = state_36752__$1;
(statearr_36765_36784[(2)] = null);

(statearr_36765_36784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36753 === (8))){
var inst_36734 = (state_36752[(7)]);
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36752__$1,(11),out,inst_36734);
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
});})(c__28196__auto___36774,out))
;
return ((function (switch__28134__auto__,c__28196__auto___36774,out){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_36769 = [null,null,null,null,null,null,null,null,null];
(statearr_36769[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_36769[(1)] = (1));

return statearr_36769;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_36752){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_36752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e36770){if((e36770 instanceof Object)){
var ex__28138__auto__ = e36770;
var statearr_36771_36785 = state_36752;
(statearr_36771_36785[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36786 = state_36752;
state_36752 = G__36786;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_36752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_36752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___36774,out))
})();
var state__28198__auto__ = (function (){var statearr_36772 = f__28197__auto__.call(null);
(statearr_36772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___36774);

return statearr_36772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___36774,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__36788 = arguments.length;
switch (G__36788) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__){
return (function (state_36955){
var state_val_36956 = (state_36955[(1)]);
if((state_val_36956 === (7))){
var inst_36951 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36957_36998 = state_36955__$1;
(statearr_36957_36998[(2)] = inst_36951);

(statearr_36957_36998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (20))){
var inst_36921 = (state_36955[(7)]);
var inst_36932 = (state_36955[(2)]);
var inst_36933 = cljs.core.next.call(null,inst_36921);
var inst_36907 = inst_36933;
var inst_36908 = null;
var inst_36909 = (0);
var inst_36910 = (0);
var state_36955__$1 = (function (){var statearr_36958 = state_36955;
(statearr_36958[(8)] = inst_36910);

(statearr_36958[(9)] = inst_36909);

(statearr_36958[(10)] = inst_36932);

(statearr_36958[(11)] = inst_36908);

(statearr_36958[(12)] = inst_36907);

return statearr_36958;
})();
var statearr_36959_36999 = state_36955__$1;
(statearr_36959_36999[(2)] = null);

(statearr_36959_36999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (1))){
var state_36955__$1 = state_36955;
var statearr_36960_37000 = state_36955__$1;
(statearr_36960_37000[(2)] = null);

(statearr_36960_37000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (4))){
var inst_36896 = (state_36955[(13)]);
var inst_36896__$1 = (state_36955[(2)]);
var inst_36897 = (inst_36896__$1 == null);
var state_36955__$1 = (function (){var statearr_36961 = state_36955;
(statearr_36961[(13)] = inst_36896__$1);

return statearr_36961;
})();
if(cljs.core.truth_(inst_36897)){
var statearr_36962_37001 = state_36955__$1;
(statearr_36962_37001[(1)] = (5));

} else {
var statearr_36963_37002 = state_36955__$1;
(statearr_36963_37002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (15))){
var state_36955__$1 = state_36955;
var statearr_36967_37003 = state_36955__$1;
(statearr_36967_37003[(2)] = null);

(statearr_36967_37003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (21))){
var state_36955__$1 = state_36955;
var statearr_36968_37004 = state_36955__$1;
(statearr_36968_37004[(2)] = null);

(statearr_36968_37004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (13))){
var inst_36910 = (state_36955[(8)]);
var inst_36909 = (state_36955[(9)]);
var inst_36908 = (state_36955[(11)]);
var inst_36907 = (state_36955[(12)]);
var inst_36917 = (state_36955[(2)]);
var inst_36918 = (inst_36910 + (1));
var tmp36964 = inst_36909;
var tmp36965 = inst_36908;
var tmp36966 = inst_36907;
var inst_36907__$1 = tmp36966;
var inst_36908__$1 = tmp36965;
var inst_36909__$1 = tmp36964;
var inst_36910__$1 = inst_36918;
var state_36955__$1 = (function (){var statearr_36969 = state_36955;
(statearr_36969[(8)] = inst_36910__$1);

(statearr_36969[(9)] = inst_36909__$1);

(statearr_36969[(14)] = inst_36917);

(statearr_36969[(11)] = inst_36908__$1);

(statearr_36969[(12)] = inst_36907__$1);

return statearr_36969;
})();
var statearr_36970_37005 = state_36955__$1;
(statearr_36970_37005[(2)] = null);

(statearr_36970_37005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (22))){
var state_36955__$1 = state_36955;
var statearr_36971_37006 = state_36955__$1;
(statearr_36971_37006[(2)] = null);

(statearr_36971_37006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (6))){
var inst_36896 = (state_36955[(13)]);
var inst_36905 = f.call(null,inst_36896);
var inst_36906 = cljs.core.seq.call(null,inst_36905);
var inst_36907 = inst_36906;
var inst_36908 = null;
var inst_36909 = (0);
var inst_36910 = (0);
var state_36955__$1 = (function (){var statearr_36972 = state_36955;
(statearr_36972[(8)] = inst_36910);

(statearr_36972[(9)] = inst_36909);

(statearr_36972[(11)] = inst_36908);

(statearr_36972[(12)] = inst_36907);

return statearr_36972;
})();
var statearr_36973_37007 = state_36955__$1;
(statearr_36973_37007[(2)] = null);

(statearr_36973_37007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (17))){
var inst_36921 = (state_36955[(7)]);
var inst_36925 = cljs.core.chunk_first.call(null,inst_36921);
var inst_36926 = cljs.core.chunk_rest.call(null,inst_36921);
var inst_36927 = cljs.core.count.call(null,inst_36925);
var inst_36907 = inst_36926;
var inst_36908 = inst_36925;
var inst_36909 = inst_36927;
var inst_36910 = (0);
var state_36955__$1 = (function (){var statearr_36974 = state_36955;
(statearr_36974[(8)] = inst_36910);

(statearr_36974[(9)] = inst_36909);

(statearr_36974[(11)] = inst_36908);

(statearr_36974[(12)] = inst_36907);

return statearr_36974;
})();
var statearr_36975_37008 = state_36955__$1;
(statearr_36975_37008[(2)] = null);

(statearr_36975_37008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (3))){
var inst_36953 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36955__$1,inst_36953);
} else {
if((state_val_36956 === (12))){
var inst_36941 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36976_37009 = state_36955__$1;
(statearr_36976_37009[(2)] = inst_36941);

(statearr_36976_37009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (2))){
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36955__$1,(4),in$);
} else {
if((state_val_36956 === (23))){
var inst_36949 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36977_37010 = state_36955__$1;
(statearr_36977_37010[(2)] = inst_36949);

(statearr_36977_37010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (19))){
var inst_36936 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36978_37011 = state_36955__$1;
(statearr_36978_37011[(2)] = inst_36936);

(statearr_36978_37011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (11))){
var inst_36921 = (state_36955[(7)]);
var inst_36907 = (state_36955[(12)]);
var inst_36921__$1 = cljs.core.seq.call(null,inst_36907);
var state_36955__$1 = (function (){var statearr_36979 = state_36955;
(statearr_36979[(7)] = inst_36921__$1);

return statearr_36979;
})();
if(inst_36921__$1){
var statearr_36980_37012 = state_36955__$1;
(statearr_36980_37012[(1)] = (14));

} else {
var statearr_36981_37013 = state_36955__$1;
(statearr_36981_37013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (9))){
var inst_36943 = (state_36955[(2)]);
var inst_36944 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36955__$1 = (function (){var statearr_36982 = state_36955;
(statearr_36982[(15)] = inst_36943);

return statearr_36982;
})();
if(cljs.core.truth_(inst_36944)){
var statearr_36983_37014 = state_36955__$1;
(statearr_36983_37014[(1)] = (21));

} else {
var statearr_36984_37015 = state_36955__$1;
(statearr_36984_37015[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (5))){
var inst_36899 = cljs.core.async.close_BANG_.call(null,out);
var state_36955__$1 = state_36955;
var statearr_36985_37016 = state_36955__$1;
(statearr_36985_37016[(2)] = inst_36899);

(statearr_36985_37016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (14))){
var inst_36921 = (state_36955[(7)]);
var inst_36923 = cljs.core.chunked_seq_QMARK_.call(null,inst_36921);
var state_36955__$1 = state_36955;
if(inst_36923){
var statearr_36986_37017 = state_36955__$1;
(statearr_36986_37017[(1)] = (17));

} else {
var statearr_36987_37018 = state_36955__$1;
(statearr_36987_37018[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (16))){
var inst_36939 = (state_36955[(2)]);
var state_36955__$1 = state_36955;
var statearr_36988_37019 = state_36955__$1;
(statearr_36988_37019[(2)] = inst_36939);

(statearr_36988_37019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36956 === (10))){
var inst_36910 = (state_36955[(8)]);
var inst_36908 = (state_36955[(11)]);
var inst_36915 = cljs.core._nth.call(null,inst_36908,inst_36910);
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36955__$1,(13),out,inst_36915);
} else {
if((state_val_36956 === (18))){
var inst_36921 = (state_36955[(7)]);
var inst_36930 = cljs.core.first.call(null,inst_36921);
var state_36955__$1 = state_36955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36955__$1,(20),out,inst_36930);
} else {
if((state_val_36956 === (8))){
var inst_36910 = (state_36955[(8)]);
var inst_36909 = (state_36955[(9)]);
var inst_36912 = (inst_36910 < inst_36909);
var inst_36913 = inst_36912;
var state_36955__$1 = state_36955;
if(cljs.core.truth_(inst_36913)){
var statearr_36989_37020 = state_36955__$1;
(statearr_36989_37020[(1)] = (10));

} else {
var statearr_36990_37021 = state_36955__$1;
(statearr_36990_37021[(1)] = (11));

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
});})(c__28196__auto__))
;
return ((function (switch__28134__auto__,c__28196__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28135__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28135__auto____0 = (function (){
var statearr_36994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36994[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28135__auto__);

(statearr_36994[(1)] = (1));

return statearr_36994;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28135__auto____1 = (function (state_36955){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_36955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e36995){if((e36995 instanceof Object)){
var ex__28138__auto__ = e36995;
var statearr_36996_37022 = state_36955;
(statearr_36996_37022[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37023 = state_36955;
state_36955 = G__37023;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28135__auto__ = function(state_36955){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28135__auto____1.call(this,state_36955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28135__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28135__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__))
})();
var state__28198__auto__ = (function (){var statearr_36997 = f__28197__auto__.call(null);
(statearr_36997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_36997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__))
);

return c__28196__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__37025 = arguments.length;
switch (G__37025) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__37028 = arguments.length;
switch (G__37028) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__37031 = arguments.length;
switch (G__37031) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28196__auto___37081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___37081,out){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___37081,out){
return (function (state_37055){
var state_val_37056 = (state_37055[(1)]);
if((state_val_37056 === (7))){
var inst_37050 = (state_37055[(2)]);
var state_37055__$1 = state_37055;
var statearr_37057_37082 = state_37055__$1;
(statearr_37057_37082[(2)] = inst_37050);

(statearr_37057_37082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37056 === (1))){
var inst_37032 = null;
var state_37055__$1 = (function (){var statearr_37058 = state_37055;
(statearr_37058[(7)] = inst_37032);

return statearr_37058;
})();
var statearr_37059_37083 = state_37055__$1;
(statearr_37059_37083[(2)] = null);

(statearr_37059_37083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37056 === (4))){
var inst_37035 = (state_37055[(8)]);
var inst_37035__$1 = (state_37055[(2)]);
var inst_37036 = (inst_37035__$1 == null);
var inst_37037 = cljs.core.not.call(null,inst_37036);
var state_37055__$1 = (function (){var statearr_37060 = state_37055;
(statearr_37060[(8)] = inst_37035__$1);

return statearr_37060;
})();
if(inst_37037){
var statearr_37061_37084 = state_37055__$1;
(statearr_37061_37084[(1)] = (5));

} else {
var statearr_37062_37085 = state_37055__$1;
(statearr_37062_37085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37056 === (6))){
var state_37055__$1 = state_37055;
var statearr_37063_37086 = state_37055__$1;
(statearr_37063_37086[(2)] = null);

(statearr_37063_37086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37056 === (3))){
var inst_37052 = (state_37055[(2)]);
var inst_37053 = cljs.core.async.close_BANG_.call(null,out);
var state_37055__$1 = (function (){var statearr_37064 = state_37055;
(statearr_37064[(9)] = inst_37052);

return statearr_37064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37055__$1,inst_37053);
} else {
if((state_val_37056 === (2))){
var state_37055__$1 = state_37055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37055__$1,(4),ch);
} else {
if((state_val_37056 === (11))){
var inst_37035 = (state_37055[(8)]);
var inst_37044 = (state_37055[(2)]);
var inst_37032 = inst_37035;
var state_37055__$1 = (function (){var statearr_37065 = state_37055;
(statearr_37065[(10)] = inst_37044);

(statearr_37065[(7)] = inst_37032);

return statearr_37065;
})();
var statearr_37066_37087 = state_37055__$1;
(statearr_37066_37087[(2)] = null);

(statearr_37066_37087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37056 === (9))){
var inst_37035 = (state_37055[(8)]);
var state_37055__$1 = state_37055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37055__$1,(11),out,inst_37035);
} else {
if((state_val_37056 === (5))){
var inst_37032 = (state_37055[(7)]);
var inst_37035 = (state_37055[(8)]);
var inst_37039 = cljs.core._EQ_.call(null,inst_37035,inst_37032);
var state_37055__$1 = state_37055;
if(inst_37039){
var statearr_37068_37088 = state_37055__$1;
(statearr_37068_37088[(1)] = (8));

} else {
var statearr_37069_37089 = state_37055__$1;
(statearr_37069_37089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37056 === (10))){
var inst_37047 = (state_37055[(2)]);
var state_37055__$1 = state_37055;
var statearr_37070_37090 = state_37055__$1;
(statearr_37070_37090[(2)] = inst_37047);

(statearr_37070_37090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37056 === (8))){
var inst_37032 = (state_37055[(7)]);
var tmp37067 = inst_37032;
var inst_37032__$1 = tmp37067;
var state_37055__$1 = (function (){var statearr_37071 = state_37055;
(statearr_37071[(7)] = inst_37032__$1);

return statearr_37071;
})();
var statearr_37072_37091 = state_37055__$1;
(statearr_37072_37091[(2)] = null);

(statearr_37072_37091[(1)] = (2));


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
});})(c__28196__auto___37081,out))
;
return ((function (switch__28134__auto__,c__28196__auto___37081,out){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_37076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37076[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_37076[(1)] = (1));

return statearr_37076;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_37055){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_37055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e37077){if((e37077 instanceof Object)){
var ex__28138__auto__ = e37077;
var statearr_37078_37092 = state_37055;
(statearr_37078_37092[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37093 = state_37055;
state_37055 = G__37093;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_37055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_37055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___37081,out))
})();
var state__28198__auto__ = (function (){var statearr_37079 = f__28197__auto__.call(null);
(statearr_37079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___37081);

return statearr_37079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___37081,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__37095 = arguments.length;
switch (G__37095) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28196__auto___37164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___37164,out){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___37164,out){
return (function (state_37133){
var state_val_37134 = (state_37133[(1)]);
if((state_val_37134 === (7))){
var inst_37129 = (state_37133[(2)]);
var state_37133__$1 = state_37133;
var statearr_37135_37165 = state_37133__$1;
(statearr_37135_37165[(2)] = inst_37129);

(statearr_37135_37165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (1))){
var inst_37096 = (new Array(n));
var inst_37097 = inst_37096;
var inst_37098 = (0);
var state_37133__$1 = (function (){var statearr_37136 = state_37133;
(statearr_37136[(7)] = inst_37098);

(statearr_37136[(8)] = inst_37097);

return statearr_37136;
})();
var statearr_37137_37166 = state_37133__$1;
(statearr_37137_37166[(2)] = null);

(statearr_37137_37166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (4))){
var inst_37101 = (state_37133[(9)]);
var inst_37101__$1 = (state_37133[(2)]);
var inst_37102 = (inst_37101__$1 == null);
var inst_37103 = cljs.core.not.call(null,inst_37102);
var state_37133__$1 = (function (){var statearr_37138 = state_37133;
(statearr_37138[(9)] = inst_37101__$1);

return statearr_37138;
})();
if(inst_37103){
var statearr_37139_37167 = state_37133__$1;
(statearr_37139_37167[(1)] = (5));

} else {
var statearr_37140_37168 = state_37133__$1;
(statearr_37140_37168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (15))){
var inst_37123 = (state_37133[(2)]);
var state_37133__$1 = state_37133;
var statearr_37141_37169 = state_37133__$1;
(statearr_37141_37169[(2)] = inst_37123);

(statearr_37141_37169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (13))){
var state_37133__$1 = state_37133;
var statearr_37142_37170 = state_37133__$1;
(statearr_37142_37170[(2)] = null);

(statearr_37142_37170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (6))){
var inst_37098 = (state_37133[(7)]);
var inst_37119 = (inst_37098 > (0));
var state_37133__$1 = state_37133;
if(cljs.core.truth_(inst_37119)){
var statearr_37143_37171 = state_37133__$1;
(statearr_37143_37171[(1)] = (12));

} else {
var statearr_37144_37172 = state_37133__$1;
(statearr_37144_37172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (3))){
var inst_37131 = (state_37133[(2)]);
var state_37133__$1 = state_37133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37133__$1,inst_37131);
} else {
if((state_val_37134 === (12))){
var inst_37097 = (state_37133[(8)]);
var inst_37121 = cljs.core.vec.call(null,inst_37097);
var state_37133__$1 = state_37133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37133__$1,(15),out,inst_37121);
} else {
if((state_val_37134 === (2))){
var state_37133__$1 = state_37133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37133__$1,(4),ch);
} else {
if((state_val_37134 === (11))){
var inst_37113 = (state_37133[(2)]);
var inst_37114 = (new Array(n));
var inst_37097 = inst_37114;
var inst_37098 = (0);
var state_37133__$1 = (function (){var statearr_37145 = state_37133;
(statearr_37145[(10)] = inst_37113);

(statearr_37145[(7)] = inst_37098);

(statearr_37145[(8)] = inst_37097);

return statearr_37145;
})();
var statearr_37146_37173 = state_37133__$1;
(statearr_37146_37173[(2)] = null);

(statearr_37146_37173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (9))){
var inst_37097 = (state_37133[(8)]);
var inst_37111 = cljs.core.vec.call(null,inst_37097);
var state_37133__$1 = state_37133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37133__$1,(11),out,inst_37111);
} else {
if((state_val_37134 === (5))){
var inst_37106 = (state_37133[(11)]);
var inst_37101 = (state_37133[(9)]);
var inst_37098 = (state_37133[(7)]);
var inst_37097 = (state_37133[(8)]);
var inst_37105 = (inst_37097[inst_37098] = inst_37101);
var inst_37106__$1 = (inst_37098 + (1));
var inst_37107 = (inst_37106__$1 < n);
var state_37133__$1 = (function (){var statearr_37147 = state_37133;
(statearr_37147[(11)] = inst_37106__$1);

(statearr_37147[(12)] = inst_37105);

return statearr_37147;
})();
if(cljs.core.truth_(inst_37107)){
var statearr_37148_37174 = state_37133__$1;
(statearr_37148_37174[(1)] = (8));

} else {
var statearr_37149_37175 = state_37133__$1;
(statearr_37149_37175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (14))){
var inst_37126 = (state_37133[(2)]);
var inst_37127 = cljs.core.async.close_BANG_.call(null,out);
var state_37133__$1 = (function (){var statearr_37151 = state_37133;
(statearr_37151[(13)] = inst_37126);

return statearr_37151;
})();
var statearr_37152_37176 = state_37133__$1;
(statearr_37152_37176[(2)] = inst_37127);

(statearr_37152_37176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (10))){
var inst_37117 = (state_37133[(2)]);
var state_37133__$1 = state_37133;
var statearr_37153_37177 = state_37133__$1;
(statearr_37153_37177[(2)] = inst_37117);

(statearr_37153_37177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37134 === (8))){
var inst_37106 = (state_37133[(11)]);
var inst_37097 = (state_37133[(8)]);
var tmp37150 = inst_37097;
var inst_37097__$1 = tmp37150;
var inst_37098 = inst_37106;
var state_37133__$1 = (function (){var statearr_37154 = state_37133;
(statearr_37154[(7)] = inst_37098);

(statearr_37154[(8)] = inst_37097__$1);

return statearr_37154;
})();
var statearr_37155_37178 = state_37133__$1;
(statearr_37155_37178[(2)] = null);

(statearr_37155_37178[(1)] = (2));


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
});})(c__28196__auto___37164,out))
;
return ((function (switch__28134__auto__,c__28196__auto___37164,out){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_37159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37159[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_37159[(1)] = (1));

return statearr_37159;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_37133){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_37133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e37160){if((e37160 instanceof Object)){
var ex__28138__auto__ = e37160;
var statearr_37161_37179 = state_37133;
(statearr_37161_37179[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37180 = state_37133;
state_37133 = G__37180;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_37133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_37133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___37164,out))
})();
var state__28198__auto__ = (function (){var statearr_37162 = f__28197__auto__.call(null);
(statearr_37162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___37164);

return statearr_37162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___37164,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__37182 = arguments.length;
switch (G__37182) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28196__auto___37255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto___37255,out){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto___37255,out){
return (function (state_37224){
var state_val_37225 = (state_37224[(1)]);
if((state_val_37225 === (7))){
var inst_37220 = (state_37224[(2)]);
var state_37224__$1 = state_37224;
var statearr_37226_37256 = state_37224__$1;
(statearr_37226_37256[(2)] = inst_37220);

(statearr_37226_37256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (1))){
var inst_37183 = [];
var inst_37184 = inst_37183;
var inst_37185 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37224__$1 = (function (){var statearr_37227 = state_37224;
(statearr_37227[(7)] = inst_37184);

(statearr_37227[(8)] = inst_37185);

return statearr_37227;
})();
var statearr_37228_37257 = state_37224__$1;
(statearr_37228_37257[(2)] = null);

(statearr_37228_37257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (4))){
var inst_37188 = (state_37224[(9)]);
var inst_37188__$1 = (state_37224[(2)]);
var inst_37189 = (inst_37188__$1 == null);
var inst_37190 = cljs.core.not.call(null,inst_37189);
var state_37224__$1 = (function (){var statearr_37229 = state_37224;
(statearr_37229[(9)] = inst_37188__$1);

return statearr_37229;
})();
if(inst_37190){
var statearr_37230_37258 = state_37224__$1;
(statearr_37230_37258[(1)] = (5));

} else {
var statearr_37231_37259 = state_37224__$1;
(statearr_37231_37259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (15))){
var inst_37214 = (state_37224[(2)]);
var state_37224__$1 = state_37224;
var statearr_37232_37260 = state_37224__$1;
(statearr_37232_37260[(2)] = inst_37214);

(statearr_37232_37260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (13))){
var state_37224__$1 = state_37224;
var statearr_37233_37261 = state_37224__$1;
(statearr_37233_37261[(2)] = null);

(statearr_37233_37261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (6))){
var inst_37184 = (state_37224[(7)]);
var inst_37209 = inst_37184.length;
var inst_37210 = (inst_37209 > (0));
var state_37224__$1 = state_37224;
if(cljs.core.truth_(inst_37210)){
var statearr_37234_37262 = state_37224__$1;
(statearr_37234_37262[(1)] = (12));

} else {
var statearr_37235_37263 = state_37224__$1;
(statearr_37235_37263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (3))){
var inst_37222 = (state_37224[(2)]);
var state_37224__$1 = state_37224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37224__$1,inst_37222);
} else {
if((state_val_37225 === (12))){
var inst_37184 = (state_37224[(7)]);
var inst_37212 = cljs.core.vec.call(null,inst_37184);
var state_37224__$1 = state_37224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37224__$1,(15),out,inst_37212);
} else {
if((state_val_37225 === (2))){
var state_37224__$1 = state_37224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37224__$1,(4),ch);
} else {
if((state_val_37225 === (11))){
var inst_37188 = (state_37224[(9)]);
var inst_37192 = (state_37224[(10)]);
var inst_37202 = (state_37224[(2)]);
var inst_37203 = [];
var inst_37204 = inst_37203.push(inst_37188);
var inst_37184 = inst_37203;
var inst_37185 = inst_37192;
var state_37224__$1 = (function (){var statearr_37236 = state_37224;
(statearr_37236[(7)] = inst_37184);

(statearr_37236[(11)] = inst_37204);

(statearr_37236[(12)] = inst_37202);

(statearr_37236[(8)] = inst_37185);

return statearr_37236;
})();
var statearr_37237_37264 = state_37224__$1;
(statearr_37237_37264[(2)] = null);

(statearr_37237_37264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (9))){
var inst_37184 = (state_37224[(7)]);
var inst_37200 = cljs.core.vec.call(null,inst_37184);
var state_37224__$1 = state_37224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37224__$1,(11),out,inst_37200);
} else {
if((state_val_37225 === (5))){
var inst_37188 = (state_37224[(9)]);
var inst_37192 = (state_37224[(10)]);
var inst_37185 = (state_37224[(8)]);
var inst_37192__$1 = f.call(null,inst_37188);
var inst_37193 = cljs.core._EQ_.call(null,inst_37192__$1,inst_37185);
var inst_37194 = cljs.core.keyword_identical_QMARK_.call(null,inst_37185,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37195 = (inst_37193) || (inst_37194);
var state_37224__$1 = (function (){var statearr_37238 = state_37224;
(statearr_37238[(10)] = inst_37192__$1);

return statearr_37238;
})();
if(cljs.core.truth_(inst_37195)){
var statearr_37239_37265 = state_37224__$1;
(statearr_37239_37265[(1)] = (8));

} else {
var statearr_37240_37266 = state_37224__$1;
(statearr_37240_37266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (14))){
var inst_37217 = (state_37224[(2)]);
var inst_37218 = cljs.core.async.close_BANG_.call(null,out);
var state_37224__$1 = (function (){var statearr_37242 = state_37224;
(statearr_37242[(13)] = inst_37217);

return statearr_37242;
})();
var statearr_37243_37267 = state_37224__$1;
(statearr_37243_37267[(2)] = inst_37218);

(statearr_37243_37267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (10))){
var inst_37207 = (state_37224[(2)]);
var state_37224__$1 = state_37224;
var statearr_37244_37268 = state_37224__$1;
(statearr_37244_37268[(2)] = inst_37207);

(statearr_37244_37268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37225 === (8))){
var inst_37188 = (state_37224[(9)]);
var inst_37192 = (state_37224[(10)]);
var inst_37184 = (state_37224[(7)]);
var inst_37197 = inst_37184.push(inst_37188);
var tmp37241 = inst_37184;
var inst_37184__$1 = tmp37241;
var inst_37185 = inst_37192;
var state_37224__$1 = (function (){var statearr_37245 = state_37224;
(statearr_37245[(7)] = inst_37184__$1);

(statearr_37245[(8)] = inst_37185);

(statearr_37245[(14)] = inst_37197);

return statearr_37245;
})();
var statearr_37246_37269 = state_37224__$1;
(statearr_37246_37269[(2)] = null);

(statearr_37246_37269[(1)] = (2));


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
});})(c__28196__auto___37255,out))
;
return ((function (switch__28134__auto__,c__28196__auto___37255,out){
return (function() {
var cljs$core$async$state_machine__28135__auto__ = null;
var cljs$core$async$state_machine__28135__auto____0 = (function (){
var statearr_37250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37250[(0)] = cljs$core$async$state_machine__28135__auto__);

(statearr_37250[(1)] = (1));

return statearr_37250;
});
var cljs$core$async$state_machine__28135__auto____1 = (function (state_37224){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_37224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e37251){if((e37251 instanceof Object)){
var ex__28138__auto__ = e37251;
var statearr_37252_37270 = state_37224;
(statearr_37252_37270[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37271 = state_37224;
state_37224 = G__37271;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
cljs$core$async$state_machine__28135__auto__ = function(state_37224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28135__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28135__auto____1.call(this,state_37224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28135__auto____0;
cljs$core$async$state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28135__auto____1;
return cljs$core$async$state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto___37255,out))
})();
var state__28198__auto__ = (function (){var statearr_37253 = f__28197__auto__.call(null);
(statearr_37253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto___37255);

return statearr_37253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto___37255,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map