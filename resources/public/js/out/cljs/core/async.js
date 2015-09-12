// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async24489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24489 = (function (fn_handler,f,meta24490){
this.fn_handler = fn_handler;
this.f = f;
this.meta24490 = meta24490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24491,meta24490__$1){
var self__ = this;
var _24491__$1 = this;
return (new cljs.core.async.t_cljs$core$async24489(self__.fn_handler,self__.f,meta24490__$1));
});

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24491){
var self__ = this;
var _24491__$1 = this;
return self__.meta24490;
});

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24490","meta24490",-1918624213,null)], null);
});

cljs.core.async.t_cljs$core$async24489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24489";

cljs.core.async.t_cljs$core$async24489.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24489");
});

cljs.core.async.__GT_t_cljs$core$async24489 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async24489(fn_handler__$1,f__$1,meta24490){
return (new cljs.core.async.t_cljs$core$async24489(fn_handler__$1,f__$1,meta24490));
});

}

return (new cljs.core.async.t_cljs$core$async24489(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24494 = [];
var len__17395__auto___24497 = arguments.length;
var i__17396__auto___24498 = (0);
while(true){
if((i__17396__auto___24498 < len__17395__auto___24497)){
args24494.push((arguments[i__17396__auto___24498]));

var G__24499 = (i__17396__auto___24498 + (1));
i__17396__auto___24498 = G__24499;
continue;
} else {
}
break;
}

var G__24496 = args24494.length;
switch (G__24496) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24494.length)].join('')));

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
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24501 = [];
var len__17395__auto___24504 = arguments.length;
var i__17396__auto___24505 = (0);
while(true){
if((i__17396__auto___24505 < len__17395__auto___24504)){
args24501.push((arguments[i__17396__auto___24505]));

var G__24506 = (i__17396__auto___24505 + (1));
i__17396__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var G__24503 = args24501.length;
switch (G__24503) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24501.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24508 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24508);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24508,ret){
return (function (){
return fn1.call(null,val_24508);
});})(val_24508,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24509 = [];
var len__17395__auto___24512 = arguments.length;
var i__17396__auto___24513 = (0);
while(true){
if((i__17396__auto___24513 < len__17395__auto___24512)){
args24509.push((arguments[i__17396__auto___24513]));

var G__24514 = (i__17396__auto___24513 + (1));
i__17396__auto___24513 = G__24514;
continue;
} else {
}
break;
}

var G__24511 = args24509.length;
switch (G__24511) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24509.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17240__auto___24516 = n;
var x_24517 = (0);
while(true){
if((x_24517 < n__17240__auto___24516)){
(a[x_24517] = (0));

var G__24518 = (x_24517 + (1));
x_24517 = G__24518;
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

var G__24519 = (i + (1));
i = G__24519;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24523 = (function (alt_flag,flag,meta24524){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24524 = meta24524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24525,meta24524__$1){
var self__ = this;
var _24525__$1 = this;
return (new cljs.core.async.t_cljs$core$async24523(self__.alt_flag,self__.flag,meta24524__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24525){
var self__ = this;
var _24525__$1 = this;
return self__.meta24524;
});})(flag))
;

cljs.core.async.t_cljs$core$async24523.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24523.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24524","meta24524",-887143952,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24523";

cljs.core.async.t_cljs$core$async24523.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24523");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24523 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24523(alt_flag__$1,flag__$1,meta24524){
return (new cljs.core.async.t_cljs$core$async24523(alt_flag__$1,flag__$1,meta24524));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24523(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24529 = (function (alt_handler,flag,cb,meta24530){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24530 = meta24530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24531,meta24530__$1){
var self__ = this;
var _24531__$1 = this;
return (new cljs.core.async.t_cljs$core$async24529(self__.alt_handler,self__.flag,self__.cb,meta24530__$1));
});

cljs.core.async.t_cljs$core$async24529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24531){
var self__ = this;
var _24531__$1 = this;
return self__.meta24530;
});

cljs.core.async.t_cljs$core$async24529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24530","meta24530",413652585,null)], null);
});

cljs.core.async.t_cljs$core$async24529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24529";

cljs.core.async.t_cljs$core$async24529.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24529");
});

cljs.core.async.__GT_t_cljs$core$async24529 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24529(alt_handler__$1,flag__$1,cb__$1,meta24530){
return (new cljs.core.async.t_cljs$core$async24529(alt_handler__$1,flag__$1,cb__$1,meta24530));
});

}

return (new cljs.core.async.t_cljs$core$async24529(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24532_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24533_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24533_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16337__auto__ = wport;
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24534 = (i + (1));
i = G__24534;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16337__auto__ = ret;
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16325__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16325__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16325__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17402__auto__ = [];
var len__17395__auto___24540 = arguments.length;
var i__17396__auto___24541 = (0);
while(true){
if((i__17396__auto___24541 < len__17395__auto___24540)){
args__17402__auto__.push((arguments[i__17396__auto___24541]));

var G__24542 = (i__17396__auto___24541 + (1));
i__17396__auto___24541 = G__24542;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((1) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17403__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24537){
var map__24538 = p__24537;
var map__24538__$1 = ((((!((map__24538 == null)))?((((map__24538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24538):map__24538);
var opts = map__24538__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24535){
var G__24536 = cljs.core.first.call(null,seq24535);
var seq24535__$1 = cljs.core.next.call(null,seq24535);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24536,seq24535__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24543 = [];
var len__17395__auto___24593 = arguments.length;
var i__17396__auto___24594 = (0);
while(true){
if((i__17396__auto___24594 < len__17395__auto___24593)){
args24543.push((arguments[i__17396__auto___24594]));

var G__24595 = (i__17396__auto___24594 + (1));
i__17396__auto___24594 = G__24595;
continue;
} else {
}
break;
}

var G__24545 = args24543.length;
switch (G__24545) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24543.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19716__auto___24597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___24597){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___24597){
return (function (state_24569){
var state_val_24570 = (state_24569[(1)]);
if((state_val_24570 === (7))){
var inst_24565 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
var statearr_24571_24598 = state_24569__$1;
(statearr_24571_24598[(2)] = inst_24565);

(statearr_24571_24598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (1))){
var state_24569__$1 = state_24569;
var statearr_24572_24599 = state_24569__$1;
(statearr_24572_24599[(2)] = null);

(statearr_24572_24599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (4))){
var inst_24548 = (state_24569[(7)]);
var inst_24548__$1 = (state_24569[(2)]);
var inst_24549 = (inst_24548__$1 == null);
var state_24569__$1 = (function (){var statearr_24573 = state_24569;
(statearr_24573[(7)] = inst_24548__$1);

return statearr_24573;
})();
if(cljs.core.truth_(inst_24549)){
var statearr_24574_24600 = state_24569__$1;
(statearr_24574_24600[(1)] = (5));

} else {
var statearr_24575_24601 = state_24569__$1;
(statearr_24575_24601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (13))){
var state_24569__$1 = state_24569;
var statearr_24576_24602 = state_24569__$1;
(statearr_24576_24602[(2)] = null);

(statearr_24576_24602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (6))){
var inst_24548 = (state_24569[(7)]);
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24569__$1,(11),to,inst_24548);
} else {
if((state_val_24570 === (3))){
var inst_24567 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24569__$1,inst_24567);
} else {
if((state_val_24570 === (12))){
var state_24569__$1 = state_24569;
var statearr_24577_24603 = state_24569__$1;
(statearr_24577_24603[(2)] = null);

(statearr_24577_24603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (2))){
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24569__$1,(4),from);
} else {
if((state_val_24570 === (11))){
var inst_24558 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
if(cljs.core.truth_(inst_24558)){
var statearr_24578_24604 = state_24569__$1;
(statearr_24578_24604[(1)] = (12));

} else {
var statearr_24579_24605 = state_24569__$1;
(statearr_24579_24605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (9))){
var state_24569__$1 = state_24569;
var statearr_24580_24606 = state_24569__$1;
(statearr_24580_24606[(2)] = null);

(statearr_24580_24606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (5))){
var state_24569__$1 = state_24569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24581_24607 = state_24569__$1;
(statearr_24581_24607[(1)] = (8));

} else {
var statearr_24582_24608 = state_24569__$1;
(statearr_24582_24608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (14))){
var inst_24563 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
var statearr_24583_24609 = state_24569__$1;
(statearr_24583_24609[(2)] = inst_24563);

(statearr_24583_24609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (10))){
var inst_24555 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
var statearr_24584_24610 = state_24569__$1;
(statearr_24584_24610[(2)] = inst_24555);

(statearr_24584_24610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24570 === (8))){
var inst_24552 = cljs.core.async.close_BANG_.call(null,to);
var state_24569__$1 = state_24569;
var statearr_24585_24611 = state_24569__$1;
(statearr_24585_24611[(2)] = inst_24552);

(statearr_24585_24611[(1)] = (10));


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
});})(c__19716__auto___24597))
;
return ((function (switch__19651__auto__,c__19716__auto___24597){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_24589 = [null,null,null,null,null,null,null,null];
(statearr_24589[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_24589[(1)] = (1));

return statearr_24589;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_24569){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_24569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e24590){if((e24590 instanceof Object)){
var ex__19655__auto__ = e24590;
var statearr_24591_24612 = state_24569;
(statearr_24591_24612[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24613 = state_24569;
state_24569 = G__24613;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_24569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_24569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___24597))
})();
var state__19718__auto__ = (function (){var statearr_24592 = f__19717__auto__.call(null);
(statearr_24592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___24597);

return statearr_24592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___24597))
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
return (function (p__24797){
var vec__24798 = p__24797;
var v = cljs.core.nth.call(null,vec__24798,(0),null);
var p = cljs.core.nth.call(null,vec__24798,(1),null);
var job = vec__24798;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19716__auto___24980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___24980,res,vec__24798,v,p,job,jobs,results){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___24980,res,vec__24798,v,p,job,jobs,results){
return (function (state_24803){
var state_val_24804 = (state_24803[(1)]);
if((state_val_24804 === (1))){
var state_24803__$1 = state_24803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24803__$1,(2),res,v);
} else {
if((state_val_24804 === (2))){
var inst_24800 = (state_24803[(2)]);
var inst_24801 = cljs.core.async.close_BANG_.call(null,res);
var state_24803__$1 = (function (){var statearr_24805 = state_24803;
(statearr_24805[(7)] = inst_24800);

return statearr_24805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24803__$1,inst_24801);
} else {
return null;
}
}
});})(c__19716__auto___24980,res,vec__24798,v,p,job,jobs,results))
;
return ((function (switch__19651__auto__,c__19716__auto___24980,res,vec__24798,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0 = (function (){
var statearr_24809 = [null,null,null,null,null,null,null,null];
(statearr_24809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__);

(statearr_24809[(1)] = (1));

return statearr_24809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1 = (function (state_24803){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_24803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e24810){if((e24810 instanceof Object)){
var ex__19655__auto__ = e24810;
var statearr_24811_24981 = state_24803;
(statearr_24811_24981[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24982 = state_24803;
state_24803 = G__24982;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = function(state_24803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1.call(this,state_24803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___24980,res,vec__24798,v,p,job,jobs,results))
})();
var state__19718__auto__ = (function (){var statearr_24812 = f__19717__auto__.call(null);
(statearr_24812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___24980);

return statearr_24812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___24980,res,vec__24798,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24813){
var vec__24814 = p__24813;
var v = cljs.core.nth.call(null,vec__24814,(0),null);
var p = cljs.core.nth.call(null,vec__24814,(1),null);
var job = vec__24814;
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
var n__17240__auto___24983 = n;
var __24984 = (0);
while(true){
if((__24984 < n__17240__auto___24983)){
var G__24815_24985 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24815_24985) {
case "compute":
var c__19716__auto___24987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24984,c__19716__auto___24987,G__24815_24985,n__17240__auto___24983,jobs,results,process,async){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (__24984,c__19716__auto___24987,G__24815_24985,n__17240__auto___24983,jobs,results,process,async){
return (function (state_24828){
var state_val_24829 = (state_24828[(1)]);
if((state_val_24829 === (1))){
var state_24828__$1 = state_24828;
var statearr_24830_24988 = state_24828__$1;
(statearr_24830_24988[(2)] = null);

(statearr_24830_24988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (2))){
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24828__$1,(4),jobs);
} else {
if((state_val_24829 === (3))){
var inst_24826 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24828__$1,inst_24826);
} else {
if((state_val_24829 === (4))){
var inst_24818 = (state_24828[(2)]);
var inst_24819 = process.call(null,inst_24818);
var state_24828__$1 = state_24828;
if(cljs.core.truth_(inst_24819)){
var statearr_24831_24989 = state_24828__$1;
(statearr_24831_24989[(1)] = (5));

} else {
var statearr_24832_24990 = state_24828__$1;
(statearr_24832_24990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (5))){
var state_24828__$1 = state_24828;
var statearr_24833_24991 = state_24828__$1;
(statearr_24833_24991[(2)] = null);

(statearr_24833_24991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (6))){
var state_24828__$1 = state_24828;
var statearr_24834_24992 = state_24828__$1;
(statearr_24834_24992[(2)] = null);

(statearr_24834_24992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24829 === (7))){
var inst_24824 = (state_24828[(2)]);
var state_24828__$1 = state_24828;
var statearr_24835_24993 = state_24828__$1;
(statearr_24835_24993[(2)] = inst_24824);

(statearr_24835_24993[(1)] = (3));


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
});})(__24984,c__19716__auto___24987,G__24815_24985,n__17240__auto___24983,jobs,results,process,async))
;
return ((function (__24984,switch__19651__auto__,c__19716__auto___24987,G__24815_24985,n__17240__auto___24983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0 = (function (){
var statearr_24839 = [null,null,null,null,null,null,null];
(statearr_24839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__);

(statearr_24839[(1)] = (1));

return statearr_24839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1 = (function (state_24828){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_24828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e24840){if((e24840 instanceof Object)){
var ex__19655__auto__ = e24840;
var statearr_24841_24994 = state_24828;
(statearr_24841_24994[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24995 = state_24828;
state_24828 = G__24995;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = function(state_24828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1.call(this,state_24828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__;
})()
;})(__24984,switch__19651__auto__,c__19716__auto___24987,G__24815_24985,n__17240__auto___24983,jobs,results,process,async))
})();
var state__19718__auto__ = (function (){var statearr_24842 = f__19717__auto__.call(null);
(statearr_24842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___24987);

return statearr_24842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(__24984,c__19716__auto___24987,G__24815_24985,n__17240__auto___24983,jobs,results,process,async))
);


break;
case "async":
var c__19716__auto___24996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24984,c__19716__auto___24996,G__24815_24985,n__17240__auto___24983,jobs,results,process,async){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (__24984,c__19716__auto___24996,G__24815_24985,n__17240__auto___24983,jobs,results,process,async){
return (function (state_24855){
var state_val_24856 = (state_24855[(1)]);
if((state_val_24856 === (1))){
var state_24855__$1 = state_24855;
var statearr_24857_24997 = state_24855__$1;
(statearr_24857_24997[(2)] = null);

(statearr_24857_24997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24856 === (2))){
var state_24855__$1 = state_24855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24855__$1,(4),jobs);
} else {
if((state_val_24856 === (3))){
var inst_24853 = (state_24855[(2)]);
var state_24855__$1 = state_24855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24855__$1,inst_24853);
} else {
if((state_val_24856 === (4))){
var inst_24845 = (state_24855[(2)]);
var inst_24846 = async.call(null,inst_24845);
var state_24855__$1 = state_24855;
if(cljs.core.truth_(inst_24846)){
var statearr_24858_24998 = state_24855__$1;
(statearr_24858_24998[(1)] = (5));

} else {
var statearr_24859_24999 = state_24855__$1;
(statearr_24859_24999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24856 === (5))){
var state_24855__$1 = state_24855;
var statearr_24860_25000 = state_24855__$1;
(statearr_24860_25000[(2)] = null);

(statearr_24860_25000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24856 === (6))){
var state_24855__$1 = state_24855;
var statearr_24861_25001 = state_24855__$1;
(statearr_24861_25001[(2)] = null);

(statearr_24861_25001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24856 === (7))){
var inst_24851 = (state_24855[(2)]);
var state_24855__$1 = state_24855;
var statearr_24862_25002 = state_24855__$1;
(statearr_24862_25002[(2)] = inst_24851);

(statearr_24862_25002[(1)] = (3));


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
});})(__24984,c__19716__auto___24996,G__24815_24985,n__17240__auto___24983,jobs,results,process,async))
;
return ((function (__24984,switch__19651__auto__,c__19716__auto___24996,G__24815_24985,n__17240__auto___24983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0 = (function (){
var statearr_24866 = [null,null,null,null,null,null,null];
(statearr_24866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__);

(statearr_24866[(1)] = (1));

return statearr_24866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1 = (function (state_24855){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_24855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e24867){if((e24867 instanceof Object)){
var ex__19655__auto__ = e24867;
var statearr_24868_25003 = state_24855;
(statearr_24868_25003[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25004 = state_24855;
state_24855 = G__25004;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = function(state_24855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1.call(this,state_24855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__;
})()
;})(__24984,switch__19651__auto__,c__19716__auto___24996,G__24815_24985,n__17240__auto___24983,jobs,results,process,async))
})();
var state__19718__auto__ = (function (){var statearr_24869 = f__19717__auto__.call(null);
(statearr_24869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___24996);

return statearr_24869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(__24984,c__19716__auto___24996,G__24815_24985,n__17240__auto___24983,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25005 = (__24984 + (1));
__24984 = G__25005;
continue;
} else {
}
break;
}

var c__19716__auto___25006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___25006,jobs,results,process,async){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___25006,jobs,results,process,async){
return (function (state_24891){
var state_val_24892 = (state_24891[(1)]);
if((state_val_24892 === (1))){
var state_24891__$1 = state_24891;
var statearr_24893_25007 = state_24891__$1;
(statearr_24893_25007[(2)] = null);

(statearr_24893_25007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (2))){
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24891__$1,(4),from);
} else {
if((state_val_24892 === (3))){
var inst_24889 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24891__$1,inst_24889);
} else {
if((state_val_24892 === (4))){
var inst_24872 = (state_24891[(7)]);
var inst_24872__$1 = (state_24891[(2)]);
var inst_24873 = (inst_24872__$1 == null);
var state_24891__$1 = (function (){var statearr_24894 = state_24891;
(statearr_24894[(7)] = inst_24872__$1);

return statearr_24894;
})();
if(cljs.core.truth_(inst_24873)){
var statearr_24895_25008 = state_24891__$1;
(statearr_24895_25008[(1)] = (5));

} else {
var statearr_24896_25009 = state_24891__$1;
(statearr_24896_25009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (5))){
var inst_24875 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24891__$1 = state_24891;
var statearr_24897_25010 = state_24891__$1;
(statearr_24897_25010[(2)] = inst_24875);

(statearr_24897_25010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (6))){
var inst_24872 = (state_24891[(7)]);
var inst_24877 = (state_24891[(8)]);
var inst_24877__$1 = cljs.core.async.chan.call(null,(1));
var inst_24878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24879 = [inst_24872,inst_24877__$1];
var inst_24880 = (new cljs.core.PersistentVector(null,2,(5),inst_24878,inst_24879,null));
var state_24891__$1 = (function (){var statearr_24898 = state_24891;
(statearr_24898[(8)] = inst_24877__$1);

return statearr_24898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24891__$1,(8),jobs,inst_24880);
} else {
if((state_val_24892 === (7))){
var inst_24887 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24899_25011 = state_24891__$1;
(statearr_24899_25011[(2)] = inst_24887);

(statearr_24899_25011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (8))){
var inst_24877 = (state_24891[(8)]);
var inst_24882 = (state_24891[(2)]);
var state_24891__$1 = (function (){var statearr_24900 = state_24891;
(statearr_24900[(9)] = inst_24882);

return statearr_24900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24891__$1,(9),results,inst_24877);
} else {
if((state_val_24892 === (9))){
var inst_24884 = (state_24891[(2)]);
var state_24891__$1 = (function (){var statearr_24901 = state_24891;
(statearr_24901[(10)] = inst_24884);

return statearr_24901;
})();
var statearr_24902_25012 = state_24891__$1;
(statearr_24902_25012[(2)] = null);

(statearr_24902_25012[(1)] = (2));


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
});})(c__19716__auto___25006,jobs,results,process,async))
;
return ((function (switch__19651__auto__,c__19716__auto___25006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0 = (function (){
var statearr_24906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__);

(statearr_24906[(1)] = (1));

return statearr_24906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1 = (function (state_24891){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_24891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e24907){if((e24907 instanceof Object)){
var ex__19655__auto__ = e24907;
var statearr_24908_25013 = state_24891;
(statearr_24908_25013[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25014 = state_24891;
state_24891 = G__25014;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = function(state_24891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1.call(this,state_24891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___25006,jobs,results,process,async))
})();
var state__19718__auto__ = (function (){var statearr_24909 = f__19717__auto__.call(null);
(statearr_24909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___25006);

return statearr_24909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___25006,jobs,results,process,async))
);


var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__,jobs,results,process,async){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__,jobs,results,process,async){
return (function (state_24947){
var state_val_24948 = (state_24947[(1)]);
if((state_val_24948 === (7))){
var inst_24943 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24949_25015 = state_24947__$1;
(statearr_24949_25015[(2)] = inst_24943);

(statearr_24949_25015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (20))){
var state_24947__$1 = state_24947;
var statearr_24950_25016 = state_24947__$1;
(statearr_24950_25016[(2)] = null);

(statearr_24950_25016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (1))){
var state_24947__$1 = state_24947;
var statearr_24951_25017 = state_24947__$1;
(statearr_24951_25017[(2)] = null);

(statearr_24951_25017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (4))){
var inst_24912 = (state_24947[(7)]);
var inst_24912__$1 = (state_24947[(2)]);
var inst_24913 = (inst_24912__$1 == null);
var state_24947__$1 = (function (){var statearr_24952 = state_24947;
(statearr_24952[(7)] = inst_24912__$1);

return statearr_24952;
})();
if(cljs.core.truth_(inst_24913)){
var statearr_24953_25018 = state_24947__$1;
(statearr_24953_25018[(1)] = (5));

} else {
var statearr_24954_25019 = state_24947__$1;
(statearr_24954_25019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (15))){
var inst_24925 = (state_24947[(8)]);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24947__$1,(18),to,inst_24925);
} else {
if((state_val_24948 === (21))){
var inst_24938 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24955_25020 = state_24947__$1;
(statearr_24955_25020[(2)] = inst_24938);

(statearr_24955_25020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (13))){
var inst_24940 = (state_24947[(2)]);
var state_24947__$1 = (function (){var statearr_24956 = state_24947;
(statearr_24956[(9)] = inst_24940);

return statearr_24956;
})();
var statearr_24957_25021 = state_24947__$1;
(statearr_24957_25021[(2)] = null);

(statearr_24957_25021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (6))){
var inst_24912 = (state_24947[(7)]);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24947__$1,(11),inst_24912);
} else {
if((state_val_24948 === (17))){
var inst_24933 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
if(cljs.core.truth_(inst_24933)){
var statearr_24958_25022 = state_24947__$1;
(statearr_24958_25022[(1)] = (19));

} else {
var statearr_24959_25023 = state_24947__$1;
(statearr_24959_25023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (3))){
var inst_24945 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24947__$1,inst_24945);
} else {
if((state_val_24948 === (12))){
var inst_24922 = (state_24947[(10)]);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24947__$1,(14),inst_24922);
} else {
if((state_val_24948 === (2))){
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24947__$1,(4),results);
} else {
if((state_val_24948 === (19))){
var state_24947__$1 = state_24947;
var statearr_24960_25024 = state_24947__$1;
(statearr_24960_25024[(2)] = null);

(statearr_24960_25024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (11))){
var inst_24922 = (state_24947[(2)]);
var state_24947__$1 = (function (){var statearr_24961 = state_24947;
(statearr_24961[(10)] = inst_24922);

return statearr_24961;
})();
var statearr_24962_25025 = state_24947__$1;
(statearr_24962_25025[(2)] = null);

(statearr_24962_25025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (9))){
var state_24947__$1 = state_24947;
var statearr_24963_25026 = state_24947__$1;
(statearr_24963_25026[(2)] = null);

(statearr_24963_25026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (5))){
var state_24947__$1 = state_24947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24964_25027 = state_24947__$1;
(statearr_24964_25027[(1)] = (8));

} else {
var statearr_24965_25028 = state_24947__$1;
(statearr_24965_25028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (14))){
var inst_24927 = (state_24947[(11)]);
var inst_24925 = (state_24947[(8)]);
var inst_24925__$1 = (state_24947[(2)]);
var inst_24926 = (inst_24925__$1 == null);
var inst_24927__$1 = cljs.core.not.call(null,inst_24926);
var state_24947__$1 = (function (){var statearr_24966 = state_24947;
(statearr_24966[(11)] = inst_24927__$1);

(statearr_24966[(8)] = inst_24925__$1);

return statearr_24966;
})();
if(inst_24927__$1){
var statearr_24967_25029 = state_24947__$1;
(statearr_24967_25029[(1)] = (15));

} else {
var statearr_24968_25030 = state_24947__$1;
(statearr_24968_25030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (16))){
var inst_24927 = (state_24947[(11)]);
var state_24947__$1 = state_24947;
var statearr_24969_25031 = state_24947__$1;
(statearr_24969_25031[(2)] = inst_24927);

(statearr_24969_25031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (10))){
var inst_24919 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24970_25032 = state_24947__$1;
(statearr_24970_25032[(2)] = inst_24919);

(statearr_24970_25032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (18))){
var inst_24930 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24971_25033 = state_24947__$1;
(statearr_24971_25033[(2)] = inst_24930);

(statearr_24971_25033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (8))){
var inst_24916 = cljs.core.async.close_BANG_.call(null,to);
var state_24947__$1 = state_24947;
var statearr_24972_25034 = state_24947__$1;
(statearr_24972_25034[(2)] = inst_24916);

(statearr_24972_25034[(1)] = (10));


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
});})(c__19716__auto__,jobs,results,process,async))
;
return ((function (switch__19651__auto__,c__19716__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0 = (function (){
var statearr_24976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__);

(statearr_24976[(1)] = (1));

return statearr_24976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1 = (function (state_24947){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_24947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e24977){if((e24977 instanceof Object)){
var ex__19655__auto__ = e24977;
var statearr_24978_25035 = state_24947;
(statearr_24978_25035[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25036 = state_24947;
state_24947 = G__25036;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__ = function(state_24947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1.call(this,state_24947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__,jobs,results,process,async))
})();
var state__19718__auto__ = (function (){var statearr_24979 = f__19717__auto__.call(null);
(statearr_24979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_24979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__,jobs,results,process,async))
);

return c__19716__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25037 = [];
var len__17395__auto___25040 = arguments.length;
var i__17396__auto___25041 = (0);
while(true){
if((i__17396__auto___25041 < len__17395__auto___25040)){
args25037.push((arguments[i__17396__auto___25041]));

var G__25042 = (i__17396__auto___25041 + (1));
i__17396__auto___25041 = G__25042;
continue;
} else {
}
break;
}

var G__25039 = args25037.length;
switch (G__25039) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25037.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25044 = [];
var len__17395__auto___25047 = arguments.length;
var i__17396__auto___25048 = (0);
while(true){
if((i__17396__auto___25048 < len__17395__auto___25047)){
args25044.push((arguments[i__17396__auto___25048]));

var G__25049 = (i__17396__auto___25048 + (1));
i__17396__auto___25048 = G__25049;
continue;
} else {
}
break;
}

var G__25046 = args25044.length;
switch (G__25046) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25044.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25051 = [];
var len__17395__auto___25104 = arguments.length;
var i__17396__auto___25105 = (0);
while(true){
if((i__17396__auto___25105 < len__17395__auto___25104)){
args25051.push((arguments[i__17396__auto___25105]));

var G__25106 = (i__17396__auto___25105 + (1));
i__17396__auto___25105 = G__25106;
continue;
} else {
}
break;
}

var G__25053 = args25051.length;
switch (G__25053) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25051.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19716__auto___25108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___25108,tc,fc){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___25108,tc,fc){
return (function (state_25079){
var state_val_25080 = (state_25079[(1)]);
if((state_val_25080 === (7))){
var inst_25075 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25081_25109 = state_25079__$1;
(statearr_25081_25109[(2)] = inst_25075);

(statearr_25081_25109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (1))){
var state_25079__$1 = state_25079;
var statearr_25082_25110 = state_25079__$1;
(statearr_25082_25110[(2)] = null);

(statearr_25082_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (4))){
var inst_25056 = (state_25079[(7)]);
var inst_25056__$1 = (state_25079[(2)]);
var inst_25057 = (inst_25056__$1 == null);
var state_25079__$1 = (function (){var statearr_25083 = state_25079;
(statearr_25083[(7)] = inst_25056__$1);

return statearr_25083;
})();
if(cljs.core.truth_(inst_25057)){
var statearr_25084_25111 = state_25079__$1;
(statearr_25084_25111[(1)] = (5));

} else {
var statearr_25085_25112 = state_25079__$1;
(statearr_25085_25112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (13))){
var state_25079__$1 = state_25079;
var statearr_25086_25113 = state_25079__$1;
(statearr_25086_25113[(2)] = null);

(statearr_25086_25113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (6))){
var inst_25056 = (state_25079[(7)]);
var inst_25062 = p.call(null,inst_25056);
var state_25079__$1 = state_25079;
if(cljs.core.truth_(inst_25062)){
var statearr_25087_25114 = state_25079__$1;
(statearr_25087_25114[(1)] = (9));

} else {
var statearr_25088_25115 = state_25079__$1;
(statearr_25088_25115[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (3))){
var inst_25077 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25079__$1,inst_25077);
} else {
if((state_val_25080 === (12))){
var state_25079__$1 = state_25079;
var statearr_25089_25116 = state_25079__$1;
(statearr_25089_25116[(2)] = null);

(statearr_25089_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (2))){
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25079__$1,(4),ch);
} else {
if((state_val_25080 === (11))){
var inst_25056 = (state_25079[(7)]);
var inst_25066 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25079__$1,(8),inst_25066,inst_25056);
} else {
if((state_val_25080 === (9))){
var state_25079__$1 = state_25079;
var statearr_25090_25117 = state_25079__$1;
(statearr_25090_25117[(2)] = tc);

(statearr_25090_25117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (5))){
var inst_25059 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25060 = cljs.core.async.close_BANG_.call(null,fc);
var state_25079__$1 = (function (){var statearr_25091 = state_25079;
(statearr_25091[(8)] = inst_25059);

return statearr_25091;
})();
var statearr_25092_25118 = state_25079__$1;
(statearr_25092_25118[(2)] = inst_25060);

(statearr_25092_25118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (14))){
var inst_25073 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25093_25119 = state_25079__$1;
(statearr_25093_25119[(2)] = inst_25073);

(statearr_25093_25119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (10))){
var state_25079__$1 = state_25079;
var statearr_25094_25120 = state_25079__$1;
(statearr_25094_25120[(2)] = fc);

(statearr_25094_25120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (8))){
var inst_25068 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
if(cljs.core.truth_(inst_25068)){
var statearr_25095_25121 = state_25079__$1;
(statearr_25095_25121[(1)] = (12));

} else {
var statearr_25096_25122 = state_25079__$1;
(statearr_25096_25122[(1)] = (13));

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
});})(c__19716__auto___25108,tc,fc))
;
return ((function (switch__19651__auto__,c__19716__auto___25108,tc,fc){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_25079){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_25079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__19655__auto__ = e25101;
var statearr_25102_25123 = state_25079;
(statearr_25102_25123[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25124 = state_25079;
state_25079 = G__25124;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_25079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_25079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___25108,tc,fc))
})();
var state__19718__auto__ = (function (){var statearr_25103 = f__19717__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___25108);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___25108,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__){
return (function (state_25171){
var state_val_25172 = (state_25171[(1)]);
if((state_val_25172 === (1))){
var inst_25157 = init;
var state_25171__$1 = (function (){var statearr_25173 = state_25171;
(statearr_25173[(7)] = inst_25157);

return statearr_25173;
})();
var statearr_25174_25189 = state_25171__$1;
(statearr_25174_25189[(2)] = null);

(statearr_25174_25189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (2))){
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(4),ch);
} else {
if((state_val_25172 === (3))){
var inst_25169 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25171__$1,inst_25169);
} else {
if((state_val_25172 === (4))){
var inst_25160 = (state_25171[(8)]);
var inst_25160__$1 = (state_25171[(2)]);
var inst_25161 = (inst_25160__$1 == null);
var state_25171__$1 = (function (){var statearr_25175 = state_25171;
(statearr_25175[(8)] = inst_25160__$1);

return statearr_25175;
})();
if(cljs.core.truth_(inst_25161)){
var statearr_25176_25190 = state_25171__$1;
(statearr_25176_25190[(1)] = (5));

} else {
var statearr_25177_25191 = state_25171__$1;
(statearr_25177_25191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (5))){
var inst_25157 = (state_25171[(7)]);
var state_25171__$1 = state_25171;
var statearr_25178_25192 = state_25171__$1;
(statearr_25178_25192[(2)] = inst_25157);

(statearr_25178_25192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (6))){
var inst_25160 = (state_25171[(8)]);
var inst_25157 = (state_25171[(7)]);
var inst_25164 = f.call(null,inst_25157,inst_25160);
var inst_25157__$1 = inst_25164;
var state_25171__$1 = (function (){var statearr_25179 = state_25171;
(statearr_25179[(7)] = inst_25157__$1);

return statearr_25179;
})();
var statearr_25180_25193 = state_25171__$1;
(statearr_25180_25193[(2)] = null);

(statearr_25180_25193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (7))){
var inst_25167 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25181_25194 = state_25171__$1;
(statearr_25181_25194[(2)] = inst_25167);

(statearr_25181_25194[(1)] = (3));


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
});})(c__19716__auto__))
;
return ((function (switch__19651__auto__,c__19716__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19652__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19652__auto____0 = (function (){
var statearr_25185 = [null,null,null,null,null,null,null,null,null];
(statearr_25185[(0)] = cljs$core$async$reduce_$_state_machine__19652__auto__);

(statearr_25185[(1)] = (1));

return statearr_25185;
});
var cljs$core$async$reduce_$_state_machine__19652__auto____1 = (function (state_25171){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_25171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e25186){if((e25186 instanceof Object)){
var ex__19655__auto__ = e25186;
var statearr_25187_25195 = state_25171;
(statearr_25187_25195[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25196 = state_25171;
state_25171 = G__25196;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19652__auto__ = function(state_25171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19652__auto____1.call(this,state_25171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19652__auto____0;
cljs$core$async$reduce_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19652__auto____1;
return cljs$core$async$reduce_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__))
})();
var state__19718__auto__ = (function (){var statearr_25188 = f__19717__auto__.call(null);
(statearr_25188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_25188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__))
);

return c__19716__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25197 = [];
var len__17395__auto___25249 = arguments.length;
var i__17396__auto___25250 = (0);
while(true){
if((i__17396__auto___25250 < len__17395__auto___25249)){
args25197.push((arguments[i__17396__auto___25250]));

var G__25251 = (i__17396__auto___25250 + (1));
i__17396__auto___25250 = G__25251;
continue;
} else {
}
break;
}

var G__25199 = args25197.length;
switch (G__25199) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25197.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__){
return (function (state_25224){
var state_val_25225 = (state_25224[(1)]);
if((state_val_25225 === (7))){
var inst_25206 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25226_25253 = state_25224__$1;
(statearr_25226_25253[(2)] = inst_25206);

(statearr_25226_25253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (1))){
var inst_25200 = cljs.core.seq.call(null,coll);
var inst_25201 = inst_25200;
var state_25224__$1 = (function (){var statearr_25227 = state_25224;
(statearr_25227[(7)] = inst_25201);

return statearr_25227;
})();
var statearr_25228_25254 = state_25224__$1;
(statearr_25228_25254[(2)] = null);

(statearr_25228_25254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (4))){
var inst_25201 = (state_25224[(7)]);
var inst_25204 = cljs.core.first.call(null,inst_25201);
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25224__$1,(7),ch,inst_25204);
} else {
if((state_val_25225 === (13))){
var inst_25218 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25229_25255 = state_25224__$1;
(statearr_25229_25255[(2)] = inst_25218);

(statearr_25229_25255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (6))){
var inst_25209 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
if(cljs.core.truth_(inst_25209)){
var statearr_25230_25256 = state_25224__$1;
(statearr_25230_25256[(1)] = (8));

} else {
var statearr_25231_25257 = state_25224__$1;
(statearr_25231_25257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (3))){
var inst_25222 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25224__$1,inst_25222);
} else {
if((state_val_25225 === (12))){
var state_25224__$1 = state_25224;
var statearr_25232_25258 = state_25224__$1;
(statearr_25232_25258[(2)] = null);

(statearr_25232_25258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (2))){
var inst_25201 = (state_25224[(7)]);
var state_25224__$1 = state_25224;
if(cljs.core.truth_(inst_25201)){
var statearr_25233_25259 = state_25224__$1;
(statearr_25233_25259[(1)] = (4));

} else {
var statearr_25234_25260 = state_25224__$1;
(statearr_25234_25260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (11))){
var inst_25215 = cljs.core.async.close_BANG_.call(null,ch);
var state_25224__$1 = state_25224;
var statearr_25235_25261 = state_25224__$1;
(statearr_25235_25261[(2)] = inst_25215);

(statearr_25235_25261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (9))){
var state_25224__$1 = state_25224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25236_25262 = state_25224__$1;
(statearr_25236_25262[(1)] = (11));

} else {
var statearr_25237_25263 = state_25224__$1;
(statearr_25237_25263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (5))){
var inst_25201 = (state_25224[(7)]);
var state_25224__$1 = state_25224;
var statearr_25238_25264 = state_25224__$1;
(statearr_25238_25264[(2)] = inst_25201);

(statearr_25238_25264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (10))){
var inst_25220 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25239_25265 = state_25224__$1;
(statearr_25239_25265[(2)] = inst_25220);

(statearr_25239_25265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (8))){
var inst_25201 = (state_25224[(7)]);
var inst_25211 = cljs.core.next.call(null,inst_25201);
var inst_25201__$1 = inst_25211;
var state_25224__$1 = (function (){var statearr_25240 = state_25224;
(statearr_25240[(7)] = inst_25201__$1);

return statearr_25240;
})();
var statearr_25241_25266 = state_25224__$1;
(statearr_25241_25266[(2)] = null);

(statearr_25241_25266[(1)] = (2));


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
});})(c__19716__auto__))
;
return ((function (switch__19651__auto__,c__19716__auto__){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_25245 = [null,null,null,null,null,null,null,null];
(statearr_25245[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_25245[(1)] = (1));

return statearr_25245;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_25224){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_25224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e25246){if((e25246 instanceof Object)){
var ex__19655__auto__ = e25246;
var statearr_25247_25267 = state_25224;
(statearr_25247_25267[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25268 = state_25224;
state_25224 = G__25268;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_25224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_25224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__))
})();
var state__19718__auto__ = (function (){var statearr_25248 = f__19717__auto__.call(null);
(statearr_25248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_25248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__))
);

return c__19716__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16992__auto__ = (((_ == null))?null:_);
var m__16993__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,_);
} else {
var m__16993__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16993__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m,ch);
} else {
var m__16993__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m);
} else {
var m__16993__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25490 = (function (mult,ch,cs,meta25491){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25491 = meta25491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25492,meta25491__$1){
var self__ = this;
var _25492__$1 = this;
return (new cljs.core.async.t_cljs$core$async25490(self__.mult,self__.ch,self__.cs,meta25491__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25492){
var self__ = this;
var _25492__$1 = this;
return self__.meta25491;
});})(cs))
;

cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25490.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25490.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25491","meta25491",327089003,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25490";

cljs.core.async.t_cljs$core$async25490.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async25490");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25490 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25490(mult__$1,ch__$1,cs__$1,meta25491){
return (new cljs.core.async.t_cljs$core$async25490(mult__$1,ch__$1,cs__$1,meta25491));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25490(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19716__auto___25711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___25711,cs,m,dchan,dctr,done){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___25711,cs,m,dchan,dctr,done){
return (function (state_25623){
var state_val_25624 = (state_25623[(1)]);
if((state_val_25624 === (7))){
var inst_25619 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25625_25712 = state_25623__$1;
(statearr_25625_25712[(2)] = inst_25619);

(statearr_25625_25712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (20))){
var inst_25524 = (state_25623[(7)]);
var inst_25534 = cljs.core.first.call(null,inst_25524);
var inst_25535 = cljs.core.nth.call(null,inst_25534,(0),null);
var inst_25536 = cljs.core.nth.call(null,inst_25534,(1),null);
var state_25623__$1 = (function (){var statearr_25626 = state_25623;
(statearr_25626[(8)] = inst_25535);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25536)){
var statearr_25627_25713 = state_25623__$1;
(statearr_25627_25713[(1)] = (22));

} else {
var statearr_25628_25714 = state_25623__$1;
(statearr_25628_25714[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (27))){
var inst_25571 = (state_25623[(9)]);
var inst_25495 = (state_25623[(10)]);
var inst_25564 = (state_25623[(11)]);
var inst_25566 = (state_25623[(12)]);
var inst_25571__$1 = cljs.core._nth.call(null,inst_25564,inst_25566);
var inst_25572 = cljs.core.async.put_BANG_.call(null,inst_25571__$1,inst_25495,done);
var state_25623__$1 = (function (){var statearr_25629 = state_25623;
(statearr_25629[(9)] = inst_25571__$1);

return statearr_25629;
})();
if(cljs.core.truth_(inst_25572)){
var statearr_25630_25715 = state_25623__$1;
(statearr_25630_25715[(1)] = (30));

} else {
var statearr_25631_25716 = state_25623__$1;
(statearr_25631_25716[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (1))){
var state_25623__$1 = state_25623;
var statearr_25632_25717 = state_25623__$1;
(statearr_25632_25717[(2)] = null);

(statearr_25632_25717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (24))){
var inst_25524 = (state_25623[(7)]);
var inst_25541 = (state_25623[(2)]);
var inst_25542 = cljs.core.next.call(null,inst_25524);
var inst_25504 = inst_25542;
var inst_25505 = null;
var inst_25506 = (0);
var inst_25507 = (0);
var state_25623__$1 = (function (){var statearr_25633 = state_25623;
(statearr_25633[(13)] = inst_25507);

(statearr_25633[(14)] = inst_25541);

(statearr_25633[(15)] = inst_25505);

(statearr_25633[(16)] = inst_25506);

(statearr_25633[(17)] = inst_25504);

return statearr_25633;
})();
var statearr_25634_25718 = state_25623__$1;
(statearr_25634_25718[(2)] = null);

(statearr_25634_25718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (39))){
var state_25623__$1 = state_25623;
var statearr_25638_25719 = state_25623__$1;
(statearr_25638_25719[(2)] = null);

(statearr_25638_25719[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (4))){
var inst_25495 = (state_25623[(10)]);
var inst_25495__$1 = (state_25623[(2)]);
var inst_25496 = (inst_25495__$1 == null);
var state_25623__$1 = (function (){var statearr_25639 = state_25623;
(statearr_25639[(10)] = inst_25495__$1);

return statearr_25639;
})();
if(cljs.core.truth_(inst_25496)){
var statearr_25640_25720 = state_25623__$1;
(statearr_25640_25720[(1)] = (5));

} else {
var statearr_25641_25721 = state_25623__$1;
(statearr_25641_25721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (15))){
var inst_25507 = (state_25623[(13)]);
var inst_25505 = (state_25623[(15)]);
var inst_25506 = (state_25623[(16)]);
var inst_25504 = (state_25623[(17)]);
var inst_25520 = (state_25623[(2)]);
var inst_25521 = (inst_25507 + (1));
var tmp25635 = inst_25505;
var tmp25636 = inst_25506;
var tmp25637 = inst_25504;
var inst_25504__$1 = tmp25637;
var inst_25505__$1 = tmp25635;
var inst_25506__$1 = tmp25636;
var inst_25507__$1 = inst_25521;
var state_25623__$1 = (function (){var statearr_25642 = state_25623;
(statearr_25642[(13)] = inst_25507__$1);

(statearr_25642[(18)] = inst_25520);

(statearr_25642[(15)] = inst_25505__$1);

(statearr_25642[(16)] = inst_25506__$1);

(statearr_25642[(17)] = inst_25504__$1);

return statearr_25642;
})();
var statearr_25643_25722 = state_25623__$1;
(statearr_25643_25722[(2)] = null);

(statearr_25643_25722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (21))){
var inst_25545 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25647_25723 = state_25623__$1;
(statearr_25647_25723[(2)] = inst_25545);

(statearr_25647_25723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (31))){
var inst_25571 = (state_25623[(9)]);
var inst_25575 = done.call(null,null);
var inst_25576 = cljs.core.async.untap_STAR_.call(null,m,inst_25571);
var state_25623__$1 = (function (){var statearr_25648 = state_25623;
(statearr_25648[(19)] = inst_25575);

return statearr_25648;
})();
var statearr_25649_25724 = state_25623__$1;
(statearr_25649_25724[(2)] = inst_25576);

(statearr_25649_25724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (32))){
var inst_25564 = (state_25623[(11)]);
var inst_25566 = (state_25623[(12)]);
var inst_25565 = (state_25623[(20)]);
var inst_25563 = (state_25623[(21)]);
var inst_25578 = (state_25623[(2)]);
var inst_25579 = (inst_25566 + (1));
var tmp25644 = inst_25564;
var tmp25645 = inst_25565;
var tmp25646 = inst_25563;
var inst_25563__$1 = tmp25646;
var inst_25564__$1 = tmp25644;
var inst_25565__$1 = tmp25645;
var inst_25566__$1 = inst_25579;
var state_25623__$1 = (function (){var statearr_25650 = state_25623;
(statearr_25650[(11)] = inst_25564__$1);

(statearr_25650[(22)] = inst_25578);

(statearr_25650[(12)] = inst_25566__$1);

(statearr_25650[(20)] = inst_25565__$1);

(statearr_25650[(21)] = inst_25563__$1);

return statearr_25650;
})();
var statearr_25651_25725 = state_25623__$1;
(statearr_25651_25725[(2)] = null);

(statearr_25651_25725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (40))){
var inst_25591 = (state_25623[(23)]);
var inst_25595 = done.call(null,null);
var inst_25596 = cljs.core.async.untap_STAR_.call(null,m,inst_25591);
var state_25623__$1 = (function (){var statearr_25652 = state_25623;
(statearr_25652[(24)] = inst_25595);

return statearr_25652;
})();
var statearr_25653_25726 = state_25623__$1;
(statearr_25653_25726[(2)] = inst_25596);

(statearr_25653_25726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (33))){
var inst_25582 = (state_25623[(25)]);
var inst_25584 = cljs.core.chunked_seq_QMARK_.call(null,inst_25582);
var state_25623__$1 = state_25623;
if(inst_25584){
var statearr_25654_25727 = state_25623__$1;
(statearr_25654_25727[(1)] = (36));

} else {
var statearr_25655_25728 = state_25623__$1;
(statearr_25655_25728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (13))){
var inst_25514 = (state_25623[(26)]);
var inst_25517 = cljs.core.async.close_BANG_.call(null,inst_25514);
var state_25623__$1 = state_25623;
var statearr_25656_25729 = state_25623__$1;
(statearr_25656_25729[(2)] = inst_25517);

(statearr_25656_25729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (22))){
var inst_25535 = (state_25623[(8)]);
var inst_25538 = cljs.core.async.close_BANG_.call(null,inst_25535);
var state_25623__$1 = state_25623;
var statearr_25657_25730 = state_25623__$1;
(statearr_25657_25730[(2)] = inst_25538);

(statearr_25657_25730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (36))){
var inst_25582 = (state_25623[(25)]);
var inst_25586 = cljs.core.chunk_first.call(null,inst_25582);
var inst_25587 = cljs.core.chunk_rest.call(null,inst_25582);
var inst_25588 = cljs.core.count.call(null,inst_25586);
var inst_25563 = inst_25587;
var inst_25564 = inst_25586;
var inst_25565 = inst_25588;
var inst_25566 = (0);
var state_25623__$1 = (function (){var statearr_25658 = state_25623;
(statearr_25658[(11)] = inst_25564);

(statearr_25658[(12)] = inst_25566);

(statearr_25658[(20)] = inst_25565);

(statearr_25658[(21)] = inst_25563);

return statearr_25658;
})();
var statearr_25659_25731 = state_25623__$1;
(statearr_25659_25731[(2)] = null);

(statearr_25659_25731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (41))){
var inst_25582 = (state_25623[(25)]);
var inst_25598 = (state_25623[(2)]);
var inst_25599 = cljs.core.next.call(null,inst_25582);
var inst_25563 = inst_25599;
var inst_25564 = null;
var inst_25565 = (0);
var inst_25566 = (0);
var state_25623__$1 = (function (){var statearr_25660 = state_25623;
(statearr_25660[(27)] = inst_25598);

(statearr_25660[(11)] = inst_25564);

(statearr_25660[(12)] = inst_25566);

(statearr_25660[(20)] = inst_25565);

(statearr_25660[(21)] = inst_25563);

return statearr_25660;
})();
var statearr_25661_25732 = state_25623__$1;
(statearr_25661_25732[(2)] = null);

(statearr_25661_25732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (43))){
var state_25623__$1 = state_25623;
var statearr_25662_25733 = state_25623__$1;
(statearr_25662_25733[(2)] = null);

(statearr_25662_25733[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (29))){
var inst_25607 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25663_25734 = state_25623__$1;
(statearr_25663_25734[(2)] = inst_25607);

(statearr_25663_25734[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (44))){
var inst_25616 = (state_25623[(2)]);
var state_25623__$1 = (function (){var statearr_25664 = state_25623;
(statearr_25664[(28)] = inst_25616);

return statearr_25664;
})();
var statearr_25665_25735 = state_25623__$1;
(statearr_25665_25735[(2)] = null);

(statearr_25665_25735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (6))){
var inst_25555 = (state_25623[(29)]);
var inst_25554 = cljs.core.deref.call(null,cs);
var inst_25555__$1 = cljs.core.keys.call(null,inst_25554);
var inst_25556 = cljs.core.count.call(null,inst_25555__$1);
var inst_25557 = cljs.core.reset_BANG_.call(null,dctr,inst_25556);
var inst_25562 = cljs.core.seq.call(null,inst_25555__$1);
var inst_25563 = inst_25562;
var inst_25564 = null;
var inst_25565 = (0);
var inst_25566 = (0);
var state_25623__$1 = (function (){var statearr_25666 = state_25623;
(statearr_25666[(29)] = inst_25555__$1);

(statearr_25666[(30)] = inst_25557);

(statearr_25666[(11)] = inst_25564);

(statearr_25666[(12)] = inst_25566);

(statearr_25666[(20)] = inst_25565);

(statearr_25666[(21)] = inst_25563);

return statearr_25666;
})();
var statearr_25667_25736 = state_25623__$1;
(statearr_25667_25736[(2)] = null);

(statearr_25667_25736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (28))){
var inst_25563 = (state_25623[(21)]);
var inst_25582 = (state_25623[(25)]);
var inst_25582__$1 = cljs.core.seq.call(null,inst_25563);
var state_25623__$1 = (function (){var statearr_25668 = state_25623;
(statearr_25668[(25)] = inst_25582__$1);

return statearr_25668;
})();
if(inst_25582__$1){
var statearr_25669_25737 = state_25623__$1;
(statearr_25669_25737[(1)] = (33));

} else {
var statearr_25670_25738 = state_25623__$1;
(statearr_25670_25738[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (25))){
var inst_25566 = (state_25623[(12)]);
var inst_25565 = (state_25623[(20)]);
var inst_25568 = (inst_25566 < inst_25565);
var inst_25569 = inst_25568;
var state_25623__$1 = state_25623;
if(cljs.core.truth_(inst_25569)){
var statearr_25671_25739 = state_25623__$1;
(statearr_25671_25739[(1)] = (27));

} else {
var statearr_25672_25740 = state_25623__$1;
(statearr_25672_25740[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (34))){
var state_25623__$1 = state_25623;
var statearr_25673_25741 = state_25623__$1;
(statearr_25673_25741[(2)] = null);

(statearr_25673_25741[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (17))){
var state_25623__$1 = state_25623;
var statearr_25674_25742 = state_25623__$1;
(statearr_25674_25742[(2)] = null);

(statearr_25674_25742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (3))){
var inst_25621 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25623__$1,inst_25621);
} else {
if((state_val_25624 === (12))){
var inst_25550 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25675_25743 = state_25623__$1;
(statearr_25675_25743[(2)] = inst_25550);

(statearr_25675_25743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (2))){
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25623__$1,(4),ch);
} else {
if((state_val_25624 === (23))){
var state_25623__$1 = state_25623;
var statearr_25676_25744 = state_25623__$1;
(statearr_25676_25744[(2)] = null);

(statearr_25676_25744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (35))){
var inst_25605 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25677_25745 = state_25623__$1;
(statearr_25677_25745[(2)] = inst_25605);

(statearr_25677_25745[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (19))){
var inst_25524 = (state_25623[(7)]);
var inst_25528 = cljs.core.chunk_first.call(null,inst_25524);
var inst_25529 = cljs.core.chunk_rest.call(null,inst_25524);
var inst_25530 = cljs.core.count.call(null,inst_25528);
var inst_25504 = inst_25529;
var inst_25505 = inst_25528;
var inst_25506 = inst_25530;
var inst_25507 = (0);
var state_25623__$1 = (function (){var statearr_25678 = state_25623;
(statearr_25678[(13)] = inst_25507);

(statearr_25678[(15)] = inst_25505);

(statearr_25678[(16)] = inst_25506);

(statearr_25678[(17)] = inst_25504);

return statearr_25678;
})();
var statearr_25679_25746 = state_25623__$1;
(statearr_25679_25746[(2)] = null);

(statearr_25679_25746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (11))){
var inst_25524 = (state_25623[(7)]);
var inst_25504 = (state_25623[(17)]);
var inst_25524__$1 = cljs.core.seq.call(null,inst_25504);
var state_25623__$1 = (function (){var statearr_25680 = state_25623;
(statearr_25680[(7)] = inst_25524__$1);

return statearr_25680;
})();
if(inst_25524__$1){
var statearr_25681_25747 = state_25623__$1;
(statearr_25681_25747[(1)] = (16));

} else {
var statearr_25682_25748 = state_25623__$1;
(statearr_25682_25748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (9))){
var inst_25552 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25683_25749 = state_25623__$1;
(statearr_25683_25749[(2)] = inst_25552);

(statearr_25683_25749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (5))){
var inst_25502 = cljs.core.deref.call(null,cs);
var inst_25503 = cljs.core.seq.call(null,inst_25502);
var inst_25504 = inst_25503;
var inst_25505 = null;
var inst_25506 = (0);
var inst_25507 = (0);
var state_25623__$1 = (function (){var statearr_25684 = state_25623;
(statearr_25684[(13)] = inst_25507);

(statearr_25684[(15)] = inst_25505);

(statearr_25684[(16)] = inst_25506);

(statearr_25684[(17)] = inst_25504);

return statearr_25684;
})();
var statearr_25685_25750 = state_25623__$1;
(statearr_25685_25750[(2)] = null);

(statearr_25685_25750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (14))){
var state_25623__$1 = state_25623;
var statearr_25686_25751 = state_25623__$1;
(statearr_25686_25751[(2)] = null);

(statearr_25686_25751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (45))){
var inst_25613 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25687_25752 = state_25623__$1;
(statearr_25687_25752[(2)] = inst_25613);

(statearr_25687_25752[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (26))){
var inst_25555 = (state_25623[(29)]);
var inst_25609 = (state_25623[(2)]);
var inst_25610 = cljs.core.seq.call(null,inst_25555);
var state_25623__$1 = (function (){var statearr_25688 = state_25623;
(statearr_25688[(31)] = inst_25609);

return statearr_25688;
})();
if(inst_25610){
var statearr_25689_25753 = state_25623__$1;
(statearr_25689_25753[(1)] = (42));

} else {
var statearr_25690_25754 = state_25623__$1;
(statearr_25690_25754[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (16))){
var inst_25524 = (state_25623[(7)]);
var inst_25526 = cljs.core.chunked_seq_QMARK_.call(null,inst_25524);
var state_25623__$1 = state_25623;
if(inst_25526){
var statearr_25691_25755 = state_25623__$1;
(statearr_25691_25755[(1)] = (19));

} else {
var statearr_25692_25756 = state_25623__$1;
(statearr_25692_25756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (38))){
var inst_25602 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25693_25757 = state_25623__$1;
(statearr_25693_25757[(2)] = inst_25602);

(statearr_25693_25757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (30))){
var state_25623__$1 = state_25623;
var statearr_25694_25758 = state_25623__$1;
(statearr_25694_25758[(2)] = null);

(statearr_25694_25758[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (10))){
var inst_25507 = (state_25623[(13)]);
var inst_25505 = (state_25623[(15)]);
var inst_25513 = cljs.core._nth.call(null,inst_25505,inst_25507);
var inst_25514 = cljs.core.nth.call(null,inst_25513,(0),null);
var inst_25515 = cljs.core.nth.call(null,inst_25513,(1),null);
var state_25623__$1 = (function (){var statearr_25695 = state_25623;
(statearr_25695[(26)] = inst_25514);

return statearr_25695;
})();
if(cljs.core.truth_(inst_25515)){
var statearr_25696_25759 = state_25623__$1;
(statearr_25696_25759[(1)] = (13));

} else {
var statearr_25697_25760 = state_25623__$1;
(statearr_25697_25760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (18))){
var inst_25548 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25698_25761 = state_25623__$1;
(statearr_25698_25761[(2)] = inst_25548);

(statearr_25698_25761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (42))){
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25623__$1,(45),dchan);
} else {
if((state_val_25624 === (37))){
var inst_25591 = (state_25623[(23)]);
var inst_25495 = (state_25623[(10)]);
var inst_25582 = (state_25623[(25)]);
var inst_25591__$1 = cljs.core.first.call(null,inst_25582);
var inst_25592 = cljs.core.async.put_BANG_.call(null,inst_25591__$1,inst_25495,done);
var state_25623__$1 = (function (){var statearr_25699 = state_25623;
(statearr_25699[(23)] = inst_25591__$1);

return statearr_25699;
})();
if(cljs.core.truth_(inst_25592)){
var statearr_25700_25762 = state_25623__$1;
(statearr_25700_25762[(1)] = (39));

} else {
var statearr_25701_25763 = state_25623__$1;
(statearr_25701_25763[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (8))){
var inst_25507 = (state_25623[(13)]);
var inst_25506 = (state_25623[(16)]);
var inst_25509 = (inst_25507 < inst_25506);
var inst_25510 = inst_25509;
var state_25623__$1 = state_25623;
if(cljs.core.truth_(inst_25510)){
var statearr_25702_25764 = state_25623__$1;
(statearr_25702_25764[(1)] = (10));

} else {
var statearr_25703_25765 = state_25623__$1;
(statearr_25703_25765[(1)] = (11));

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
});})(c__19716__auto___25711,cs,m,dchan,dctr,done))
;
return ((function (switch__19651__auto__,c__19716__auto___25711,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19652__auto__ = null;
var cljs$core$async$mult_$_state_machine__19652__auto____0 = (function (){
var statearr_25707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25707[(0)] = cljs$core$async$mult_$_state_machine__19652__auto__);

(statearr_25707[(1)] = (1));

return statearr_25707;
});
var cljs$core$async$mult_$_state_machine__19652__auto____1 = (function (state_25623){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_25623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e25708){if((e25708 instanceof Object)){
var ex__19655__auto__ = e25708;
var statearr_25709_25766 = state_25623;
(statearr_25709_25766[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25767 = state_25623;
state_25623 = G__25767;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19652__auto__ = function(state_25623){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19652__auto____1.call(this,state_25623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19652__auto____0;
cljs$core$async$mult_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19652__auto____1;
return cljs$core$async$mult_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___25711,cs,m,dchan,dctr,done))
})();
var state__19718__auto__ = (function (){var statearr_25710 = f__19717__auto__.call(null);
(statearr_25710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___25711);

return statearr_25710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___25711,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25768 = [];
var len__17395__auto___25771 = arguments.length;
var i__17396__auto___25772 = (0);
while(true){
if((i__17396__auto___25772 < len__17395__auto___25771)){
args25768.push((arguments[i__17396__auto___25772]));

var G__25773 = (i__17396__auto___25772 + (1));
i__17396__auto___25772 = G__25773;
continue;
} else {
}
break;
}

var G__25770 = args25768.length;
switch (G__25770) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25768.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m,ch);
} else {
var m__16993__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m,ch);
} else {
var m__16993__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m);
} else {
var m__16993__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m,state_map);
} else {
var m__16993__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16992__auto__ = (((m == null))?null:m);
var m__16993__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,m,mode);
} else {
var m__16993__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17402__auto__ = [];
var len__17395__auto___25785 = arguments.length;
var i__17396__auto___25786 = (0);
while(true){
if((i__17396__auto___25786 < len__17395__auto___25785)){
args__17402__auto__.push((arguments[i__17396__auto___25786]));

var G__25787 = (i__17396__auto___25786 + (1));
i__17396__auto___25786 = G__25787;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((3) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17403__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25779){
var map__25780 = p__25779;
var map__25780__$1 = ((((!((map__25780 == null)))?((((map__25780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25780):map__25780);
var opts = map__25780__$1;
var statearr_25782_25788 = state;
(statearr_25782_25788[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25780,map__25780__$1,opts){
return (function (val){
var statearr_25783_25789 = state;
(statearr_25783_25789[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25780,map__25780__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25784_25790 = state;
(statearr_25784_25790[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25775){
var G__25776 = cljs.core.first.call(null,seq25775);
var seq25775__$1 = cljs.core.next.call(null,seq25775);
var G__25777 = cljs.core.first.call(null,seq25775__$1);
var seq25775__$2 = cljs.core.next.call(null,seq25775__$1);
var G__25778 = cljs.core.first.call(null,seq25775__$2);
var seq25775__$3 = cljs.core.next.call(null,seq25775__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25776,G__25777,G__25778,seq25775__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async25954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25954 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25955){
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
this.meta25955 = meta25955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25956,meta25955__$1){
var self__ = this;
var _25956__$1 = this;
return (new cljs.core.async.t_cljs$core$async25954(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25955__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25956){
var self__ = this;
var _25956__$1 = this;
return self__.meta25955;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25954.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25955","meta25955",1233314138,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25954";

cljs.core.async.t_cljs$core$async25954.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async25954");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25954 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25955){
return (new cljs.core.async.t_cljs$core$async25954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25955));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25954(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19716__auto___26117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___26117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___26117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26054){
var state_val_26055 = (state_26054[(1)]);
if((state_val_26055 === (7))){
var inst_25972 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26056_26118 = state_26054__$1;
(statearr_26056_26118[(2)] = inst_25972);

(statearr_26056_26118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (20))){
var inst_25984 = (state_26054[(7)]);
var state_26054__$1 = state_26054;
var statearr_26057_26119 = state_26054__$1;
(statearr_26057_26119[(2)] = inst_25984);

(statearr_26057_26119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (27))){
var state_26054__$1 = state_26054;
var statearr_26058_26120 = state_26054__$1;
(statearr_26058_26120[(2)] = null);

(statearr_26058_26120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (1))){
var inst_25960 = (state_26054[(8)]);
var inst_25960__$1 = calc_state.call(null);
var inst_25962 = (inst_25960__$1 == null);
var inst_25963 = cljs.core.not.call(null,inst_25962);
var state_26054__$1 = (function (){var statearr_26059 = state_26054;
(statearr_26059[(8)] = inst_25960__$1);

return statearr_26059;
})();
if(inst_25963){
var statearr_26060_26121 = state_26054__$1;
(statearr_26060_26121[(1)] = (2));

} else {
var statearr_26061_26122 = state_26054__$1;
(statearr_26061_26122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (24))){
var inst_26014 = (state_26054[(9)]);
var inst_26007 = (state_26054[(10)]);
var inst_26028 = (state_26054[(11)]);
var inst_26028__$1 = inst_26007.call(null,inst_26014);
var state_26054__$1 = (function (){var statearr_26062 = state_26054;
(statearr_26062[(11)] = inst_26028__$1);

return statearr_26062;
})();
if(cljs.core.truth_(inst_26028__$1)){
var statearr_26063_26123 = state_26054__$1;
(statearr_26063_26123[(1)] = (29));

} else {
var statearr_26064_26124 = state_26054__$1;
(statearr_26064_26124[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (4))){
var inst_25975 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_25975)){
var statearr_26065_26125 = state_26054__$1;
(statearr_26065_26125[(1)] = (8));

} else {
var statearr_26066_26126 = state_26054__$1;
(statearr_26066_26126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (15))){
var inst_26001 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_26001)){
var statearr_26067_26127 = state_26054__$1;
(statearr_26067_26127[(1)] = (19));

} else {
var statearr_26068_26128 = state_26054__$1;
(statearr_26068_26128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (21))){
var inst_26006 = (state_26054[(12)]);
var inst_26006__$1 = (state_26054[(2)]);
var inst_26007 = cljs.core.get.call(null,inst_26006__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26008 = cljs.core.get.call(null,inst_26006__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26009 = cljs.core.get.call(null,inst_26006__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26054__$1 = (function (){var statearr_26069 = state_26054;
(statearr_26069[(12)] = inst_26006__$1);

(statearr_26069[(10)] = inst_26007);

(statearr_26069[(13)] = inst_26008);

return statearr_26069;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26054__$1,(22),inst_26009);
} else {
if((state_val_26055 === (31))){
var inst_26036 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_26036)){
var statearr_26070_26129 = state_26054__$1;
(statearr_26070_26129[(1)] = (32));

} else {
var statearr_26071_26130 = state_26054__$1;
(statearr_26071_26130[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (32))){
var inst_26013 = (state_26054[(14)]);
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26054__$1,(35),out,inst_26013);
} else {
if((state_val_26055 === (33))){
var inst_26006 = (state_26054[(12)]);
var inst_25984 = inst_26006;
var state_26054__$1 = (function (){var statearr_26072 = state_26054;
(statearr_26072[(7)] = inst_25984);

return statearr_26072;
})();
var statearr_26073_26131 = state_26054__$1;
(statearr_26073_26131[(2)] = null);

(statearr_26073_26131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (13))){
var inst_25984 = (state_26054[(7)]);
var inst_25991 = inst_25984.cljs$lang$protocol_mask$partition0$;
var inst_25992 = (inst_25991 & (64));
var inst_25993 = inst_25984.cljs$core$ISeq$;
var inst_25994 = (inst_25992) || (inst_25993);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_25994)){
var statearr_26074_26132 = state_26054__$1;
(statearr_26074_26132[(1)] = (16));

} else {
var statearr_26075_26133 = state_26054__$1;
(statearr_26075_26133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (22))){
var inst_26013 = (state_26054[(14)]);
var inst_26014 = (state_26054[(9)]);
var inst_26012 = (state_26054[(2)]);
var inst_26013__$1 = cljs.core.nth.call(null,inst_26012,(0),null);
var inst_26014__$1 = cljs.core.nth.call(null,inst_26012,(1),null);
var inst_26015 = (inst_26013__$1 == null);
var inst_26016 = cljs.core._EQ_.call(null,inst_26014__$1,change);
var inst_26017 = (inst_26015) || (inst_26016);
var state_26054__$1 = (function (){var statearr_26076 = state_26054;
(statearr_26076[(14)] = inst_26013__$1);

(statearr_26076[(9)] = inst_26014__$1);

return statearr_26076;
})();
if(cljs.core.truth_(inst_26017)){
var statearr_26077_26134 = state_26054__$1;
(statearr_26077_26134[(1)] = (23));

} else {
var statearr_26078_26135 = state_26054__$1;
(statearr_26078_26135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (36))){
var inst_26006 = (state_26054[(12)]);
var inst_25984 = inst_26006;
var state_26054__$1 = (function (){var statearr_26079 = state_26054;
(statearr_26079[(7)] = inst_25984);

return statearr_26079;
})();
var statearr_26080_26136 = state_26054__$1;
(statearr_26080_26136[(2)] = null);

(statearr_26080_26136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (29))){
var inst_26028 = (state_26054[(11)]);
var state_26054__$1 = state_26054;
var statearr_26081_26137 = state_26054__$1;
(statearr_26081_26137[(2)] = inst_26028);

(statearr_26081_26137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (6))){
var state_26054__$1 = state_26054;
var statearr_26082_26138 = state_26054__$1;
(statearr_26082_26138[(2)] = false);

(statearr_26082_26138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (28))){
var inst_26024 = (state_26054[(2)]);
var inst_26025 = calc_state.call(null);
var inst_25984 = inst_26025;
var state_26054__$1 = (function (){var statearr_26083 = state_26054;
(statearr_26083[(7)] = inst_25984);

(statearr_26083[(15)] = inst_26024);

return statearr_26083;
})();
var statearr_26084_26139 = state_26054__$1;
(statearr_26084_26139[(2)] = null);

(statearr_26084_26139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (25))){
var inst_26050 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26085_26140 = state_26054__$1;
(statearr_26085_26140[(2)] = inst_26050);

(statearr_26085_26140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (34))){
var inst_26048 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26086_26141 = state_26054__$1;
(statearr_26086_26141[(2)] = inst_26048);

(statearr_26086_26141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (17))){
var state_26054__$1 = state_26054;
var statearr_26087_26142 = state_26054__$1;
(statearr_26087_26142[(2)] = false);

(statearr_26087_26142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (3))){
var state_26054__$1 = state_26054;
var statearr_26088_26143 = state_26054__$1;
(statearr_26088_26143[(2)] = false);

(statearr_26088_26143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (12))){
var inst_26052 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26054__$1,inst_26052);
} else {
if((state_val_26055 === (2))){
var inst_25960 = (state_26054[(8)]);
var inst_25965 = inst_25960.cljs$lang$protocol_mask$partition0$;
var inst_25966 = (inst_25965 & (64));
var inst_25967 = inst_25960.cljs$core$ISeq$;
var inst_25968 = (inst_25966) || (inst_25967);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_25968)){
var statearr_26089_26144 = state_26054__$1;
(statearr_26089_26144[(1)] = (5));

} else {
var statearr_26090_26145 = state_26054__$1;
(statearr_26090_26145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (23))){
var inst_26013 = (state_26054[(14)]);
var inst_26019 = (inst_26013 == null);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_26019)){
var statearr_26091_26146 = state_26054__$1;
(statearr_26091_26146[(1)] = (26));

} else {
var statearr_26092_26147 = state_26054__$1;
(statearr_26092_26147[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (35))){
var inst_26039 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_26039)){
var statearr_26093_26148 = state_26054__$1;
(statearr_26093_26148[(1)] = (36));

} else {
var statearr_26094_26149 = state_26054__$1;
(statearr_26094_26149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (19))){
var inst_25984 = (state_26054[(7)]);
var inst_26003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25984);
var state_26054__$1 = state_26054;
var statearr_26095_26150 = state_26054__$1;
(statearr_26095_26150[(2)] = inst_26003);

(statearr_26095_26150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (11))){
var inst_25984 = (state_26054[(7)]);
var inst_25988 = (inst_25984 == null);
var inst_25989 = cljs.core.not.call(null,inst_25988);
var state_26054__$1 = state_26054;
if(inst_25989){
var statearr_26096_26151 = state_26054__$1;
(statearr_26096_26151[(1)] = (13));

} else {
var statearr_26097_26152 = state_26054__$1;
(statearr_26097_26152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (9))){
var inst_25960 = (state_26054[(8)]);
var state_26054__$1 = state_26054;
var statearr_26098_26153 = state_26054__$1;
(statearr_26098_26153[(2)] = inst_25960);

(statearr_26098_26153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (5))){
var state_26054__$1 = state_26054;
var statearr_26099_26154 = state_26054__$1;
(statearr_26099_26154[(2)] = true);

(statearr_26099_26154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (14))){
var state_26054__$1 = state_26054;
var statearr_26100_26155 = state_26054__$1;
(statearr_26100_26155[(2)] = false);

(statearr_26100_26155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (26))){
var inst_26014 = (state_26054[(9)]);
var inst_26021 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26014);
var state_26054__$1 = state_26054;
var statearr_26101_26156 = state_26054__$1;
(statearr_26101_26156[(2)] = inst_26021);

(statearr_26101_26156[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (16))){
var state_26054__$1 = state_26054;
var statearr_26102_26157 = state_26054__$1;
(statearr_26102_26157[(2)] = true);

(statearr_26102_26157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (38))){
var inst_26044 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26103_26158 = state_26054__$1;
(statearr_26103_26158[(2)] = inst_26044);

(statearr_26103_26158[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (30))){
var inst_26014 = (state_26054[(9)]);
var inst_26007 = (state_26054[(10)]);
var inst_26008 = (state_26054[(13)]);
var inst_26031 = cljs.core.empty_QMARK_.call(null,inst_26007);
var inst_26032 = inst_26008.call(null,inst_26014);
var inst_26033 = cljs.core.not.call(null,inst_26032);
var inst_26034 = (inst_26031) && (inst_26033);
var state_26054__$1 = state_26054;
var statearr_26104_26159 = state_26054__$1;
(statearr_26104_26159[(2)] = inst_26034);

(statearr_26104_26159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (10))){
var inst_25960 = (state_26054[(8)]);
var inst_25980 = (state_26054[(2)]);
var inst_25981 = cljs.core.get.call(null,inst_25980,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25982 = cljs.core.get.call(null,inst_25980,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25983 = cljs.core.get.call(null,inst_25980,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25984 = inst_25960;
var state_26054__$1 = (function (){var statearr_26105 = state_26054;
(statearr_26105[(16)] = inst_25982);

(statearr_26105[(17)] = inst_25983);

(statearr_26105[(7)] = inst_25984);

(statearr_26105[(18)] = inst_25981);

return statearr_26105;
})();
var statearr_26106_26160 = state_26054__$1;
(statearr_26106_26160[(2)] = null);

(statearr_26106_26160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (18))){
var inst_25998 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26107_26161 = state_26054__$1;
(statearr_26107_26161[(2)] = inst_25998);

(statearr_26107_26161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (37))){
var state_26054__$1 = state_26054;
var statearr_26108_26162 = state_26054__$1;
(statearr_26108_26162[(2)] = null);

(statearr_26108_26162[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (8))){
var inst_25960 = (state_26054[(8)]);
var inst_25977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25960);
var state_26054__$1 = state_26054;
var statearr_26109_26163 = state_26054__$1;
(statearr_26109_26163[(2)] = inst_25977);

(statearr_26109_26163[(1)] = (10));


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
});})(c__19716__auto___26117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19651__auto__,c__19716__auto___26117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19652__auto__ = null;
var cljs$core$async$mix_$_state_machine__19652__auto____0 = (function (){
var statearr_26113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26113[(0)] = cljs$core$async$mix_$_state_machine__19652__auto__);

(statearr_26113[(1)] = (1));

return statearr_26113;
});
var cljs$core$async$mix_$_state_machine__19652__auto____1 = (function (state_26054){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26114){if((e26114 instanceof Object)){
var ex__19655__auto__ = e26114;
var statearr_26115_26164 = state_26054;
(statearr_26115_26164[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26165 = state_26054;
state_26054 = G__26165;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19652__auto__ = function(state_26054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19652__auto____1.call(this,state_26054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19652__auto____0;
cljs$core$async$mix_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19652__auto____1;
return cljs$core$async$mix_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___26117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19718__auto__ = (function (){var statearr_26116 = f__19717__auto__.call(null);
(statearr_26116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___26117);

return statearr_26116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___26117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16992__auto__ = (((p == null))?null:p);
var m__16993__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16993__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16992__auto__ = (((p == null))?null:p);
var m__16993__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,p,v,ch);
} else {
var m__16993__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26166 = [];
var len__17395__auto___26169 = arguments.length;
var i__17396__auto___26170 = (0);
while(true){
if((i__17396__auto___26170 < len__17395__auto___26169)){
args26166.push((arguments[i__17396__auto___26170]));

var G__26171 = (i__17396__auto___26170 + (1));
i__17396__auto___26170 = G__26171;
continue;
} else {
}
break;
}

var G__26168 = args26166.length;
switch (G__26168) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26166.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16992__auto__ = (((p == null))?null:p);
var m__16993__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,p);
} else {
var m__16993__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16992__auto__ = (((p == null))?null:p);
var m__16993__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,p,v);
} else {
var m__16993__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26174 = [];
var len__17395__auto___26299 = arguments.length;
var i__17396__auto___26300 = (0);
while(true){
if((i__17396__auto___26300 < len__17395__auto___26299)){
args26174.push((arguments[i__17396__auto___26300]));

var G__26301 = (i__17396__auto___26300 + (1));
i__17396__auto___26300 = G__26301;
continue;
} else {
}
break;
}

var G__26176 = args26174.length;
switch (G__26176) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26174.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16337__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16337__auto__,mults){
return (function (p1__26173_SHARP_){
if(cljs.core.truth_(p1__26173_SHARP_.call(null,topic))){
return p1__26173_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26173_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16337__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26177 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26178){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26178 = meta26178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26179,meta26178__$1){
var self__ = this;
var _26179__$1 = this;
return (new cljs.core.async.t_cljs$core$async26177(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26178__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26179){
var self__ = this;
var _26179__$1 = this;
return self__.meta26178;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26178","meta26178",647799854,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26177";

cljs.core.async.t_cljs$core$async26177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26177");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26177 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26178){
return (new cljs.core.async.t_cljs$core$async26177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26178));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26177(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19716__auto___26303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___26303,mults,ensure_mult,p){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___26303,mults,ensure_mult,p){
return (function (state_26251){
var state_val_26252 = (state_26251[(1)]);
if((state_val_26252 === (7))){
var inst_26247 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26253_26304 = state_26251__$1;
(statearr_26253_26304[(2)] = inst_26247);

(statearr_26253_26304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (20))){
var state_26251__$1 = state_26251;
var statearr_26254_26305 = state_26251__$1;
(statearr_26254_26305[(2)] = null);

(statearr_26254_26305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (1))){
var state_26251__$1 = state_26251;
var statearr_26255_26306 = state_26251__$1;
(statearr_26255_26306[(2)] = null);

(statearr_26255_26306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (24))){
var inst_26230 = (state_26251[(7)]);
var inst_26239 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26230);
var state_26251__$1 = state_26251;
var statearr_26256_26307 = state_26251__$1;
(statearr_26256_26307[(2)] = inst_26239);

(statearr_26256_26307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (4))){
var inst_26182 = (state_26251[(8)]);
var inst_26182__$1 = (state_26251[(2)]);
var inst_26183 = (inst_26182__$1 == null);
var state_26251__$1 = (function (){var statearr_26257 = state_26251;
(statearr_26257[(8)] = inst_26182__$1);

return statearr_26257;
})();
if(cljs.core.truth_(inst_26183)){
var statearr_26258_26308 = state_26251__$1;
(statearr_26258_26308[(1)] = (5));

} else {
var statearr_26259_26309 = state_26251__$1;
(statearr_26259_26309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (15))){
var inst_26224 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26260_26310 = state_26251__$1;
(statearr_26260_26310[(2)] = inst_26224);

(statearr_26260_26310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (21))){
var inst_26244 = (state_26251[(2)]);
var state_26251__$1 = (function (){var statearr_26261 = state_26251;
(statearr_26261[(9)] = inst_26244);

return statearr_26261;
})();
var statearr_26262_26311 = state_26251__$1;
(statearr_26262_26311[(2)] = null);

(statearr_26262_26311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (13))){
var inst_26206 = (state_26251[(10)]);
var inst_26208 = cljs.core.chunked_seq_QMARK_.call(null,inst_26206);
var state_26251__$1 = state_26251;
if(inst_26208){
var statearr_26263_26312 = state_26251__$1;
(statearr_26263_26312[(1)] = (16));

} else {
var statearr_26264_26313 = state_26251__$1;
(statearr_26264_26313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (22))){
var inst_26236 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
if(cljs.core.truth_(inst_26236)){
var statearr_26265_26314 = state_26251__$1;
(statearr_26265_26314[(1)] = (23));

} else {
var statearr_26266_26315 = state_26251__$1;
(statearr_26266_26315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (6))){
var inst_26230 = (state_26251[(7)]);
var inst_26232 = (state_26251[(11)]);
var inst_26182 = (state_26251[(8)]);
var inst_26230__$1 = topic_fn.call(null,inst_26182);
var inst_26231 = cljs.core.deref.call(null,mults);
var inst_26232__$1 = cljs.core.get.call(null,inst_26231,inst_26230__$1);
var state_26251__$1 = (function (){var statearr_26267 = state_26251;
(statearr_26267[(7)] = inst_26230__$1);

(statearr_26267[(11)] = inst_26232__$1);

return statearr_26267;
})();
if(cljs.core.truth_(inst_26232__$1)){
var statearr_26268_26316 = state_26251__$1;
(statearr_26268_26316[(1)] = (19));

} else {
var statearr_26269_26317 = state_26251__$1;
(statearr_26269_26317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (25))){
var inst_26241 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26270_26318 = state_26251__$1;
(statearr_26270_26318[(2)] = inst_26241);

(statearr_26270_26318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (17))){
var inst_26206 = (state_26251[(10)]);
var inst_26215 = cljs.core.first.call(null,inst_26206);
var inst_26216 = cljs.core.async.muxch_STAR_.call(null,inst_26215);
var inst_26217 = cljs.core.async.close_BANG_.call(null,inst_26216);
var inst_26218 = cljs.core.next.call(null,inst_26206);
var inst_26192 = inst_26218;
var inst_26193 = null;
var inst_26194 = (0);
var inst_26195 = (0);
var state_26251__$1 = (function (){var statearr_26271 = state_26251;
(statearr_26271[(12)] = inst_26195);

(statearr_26271[(13)] = inst_26193);

(statearr_26271[(14)] = inst_26194);

(statearr_26271[(15)] = inst_26192);

(statearr_26271[(16)] = inst_26217);

return statearr_26271;
})();
var statearr_26272_26319 = state_26251__$1;
(statearr_26272_26319[(2)] = null);

(statearr_26272_26319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (3))){
var inst_26249 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26251__$1,inst_26249);
} else {
if((state_val_26252 === (12))){
var inst_26226 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26273_26320 = state_26251__$1;
(statearr_26273_26320[(2)] = inst_26226);

(statearr_26273_26320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (2))){
var state_26251__$1 = state_26251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26251__$1,(4),ch);
} else {
if((state_val_26252 === (23))){
var state_26251__$1 = state_26251;
var statearr_26274_26321 = state_26251__$1;
(statearr_26274_26321[(2)] = null);

(statearr_26274_26321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (19))){
var inst_26232 = (state_26251[(11)]);
var inst_26182 = (state_26251[(8)]);
var inst_26234 = cljs.core.async.muxch_STAR_.call(null,inst_26232);
var state_26251__$1 = state_26251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26251__$1,(22),inst_26234,inst_26182);
} else {
if((state_val_26252 === (11))){
var inst_26206 = (state_26251[(10)]);
var inst_26192 = (state_26251[(15)]);
var inst_26206__$1 = cljs.core.seq.call(null,inst_26192);
var state_26251__$1 = (function (){var statearr_26275 = state_26251;
(statearr_26275[(10)] = inst_26206__$1);

return statearr_26275;
})();
if(inst_26206__$1){
var statearr_26276_26322 = state_26251__$1;
(statearr_26276_26322[(1)] = (13));

} else {
var statearr_26277_26323 = state_26251__$1;
(statearr_26277_26323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (9))){
var inst_26228 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26278_26324 = state_26251__$1;
(statearr_26278_26324[(2)] = inst_26228);

(statearr_26278_26324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (5))){
var inst_26189 = cljs.core.deref.call(null,mults);
var inst_26190 = cljs.core.vals.call(null,inst_26189);
var inst_26191 = cljs.core.seq.call(null,inst_26190);
var inst_26192 = inst_26191;
var inst_26193 = null;
var inst_26194 = (0);
var inst_26195 = (0);
var state_26251__$1 = (function (){var statearr_26279 = state_26251;
(statearr_26279[(12)] = inst_26195);

(statearr_26279[(13)] = inst_26193);

(statearr_26279[(14)] = inst_26194);

(statearr_26279[(15)] = inst_26192);

return statearr_26279;
})();
var statearr_26280_26325 = state_26251__$1;
(statearr_26280_26325[(2)] = null);

(statearr_26280_26325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (14))){
var state_26251__$1 = state_26251;
var statearr_26284_26326 = state_26251__$1;
(statearr_26284_26326[(2)] = null);

(statearr_26284_26326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (16))){
var inst_26206 = (state_26251[(10)]);
var inst_26210 = cljs.core.chunk_first.call(null,inst_26206);
var inst_26211 = cljs.core.chunk_rest.call(null,inst_26206);
var inst_26212 = cljs.core.count.call(null,inst_26210);
var inst_26192 = inst_26211;
var inst_26193 = inst_26210;
var inst_26194 = inst_26212;
var inst_26195 = (0);
var state_26251__$1 = (function (){var statearr_26285 = state_26251;
(statearr_26285[(12)] = inst_26195);

(statearr_26285[(13)] = inst_26193);

(statearr_26285[(14)] = inst_26194);

(statearr_26285[(15)] = inst_26192);

return statearr_26285;
})();
var statearr_26286_26327 = state_26251__$1;
(statearr_26286_26327[(2)] = null);

(statearr_26286_26327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (10))){
var inst_26195 = (state_26251[(12)]);
var inst_26193 = (state_26251[(13)]);
var inst_26194 = (state_26251[(14)]);
var inst_26192 = (state_26251[(15)]);
var inst_26200 = cljs.core._nth.call(null,inst_26193,inst_26195);
var inst_26201 = cljs.core.async.muxch_STAR_.call(null,inst_26200);
var inst_26202 = cljs.core.async.close_BANG_.call(null,inst_26201);
var inst_26203 = (inst_26195 + (1));
var tmp26281 = inst_26193;
var tmp26282 = inst_26194;
var tmp26283 = inst_26192;
var inst_26192__$1 = tmp26283;
var inst_26193__$1 = tmp26281;
var inst_26194__$1 = tmp26282;
var inst_26195__$1 = inst_26203;
var state_26251__$1 = (function (){var statearr_26287 = state_26251;
(statearr_26287[(17)] = inst_26202);

(statearr_26287[(12)] = inst_26195__$1);

(statearr_26287[(13)] = inst_26193__$1);

(statearr_26287[(14)] = inst_26194__$1);

(statearr_26287[(15)] = inst_26192__$1);

return statearr_26287;
})();
var statearr_26288_26328 = state_26251__$1;
(statearr_26288_26328[(2)] = null);

(statearr_26288_26328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (18))){
var inst_26221 = (state_26251[(2)]);
var state_26251__$1 = state_26251;
var statearr_26289_26329 = state_26251__$1;
(statearr_26289_26329[(2)] = inst_26221);

(statearr_26289_26329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26252 === (8))){
var inst_26195 = (state_26251[(12)]);
var inst_26194 = (state_26251[(14)]);
var inst_26197 = (inst_26195 < inst_26194);
var inst_26198 = inst_26197;
var state_26251__$1 = state_26251;
if(cljs.core.truth_(inst_26198)){
var statearr_26290_26330 = state_26251__$1;
(statearr_26290_26330[(1)] = (10));

} else {
var statearr_26291_26331 = state_26251__$1;
(statearr_26291_26331[(1)] = (11));

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
});})(c__19716__auto___26303,mults,ensure_mult,p))
;
return ((function (switch__19651__auto__,c__19716__auto___26303,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_26295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26295[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_26295[(1)] = (1));

return statearr_26295;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_26251){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26296){if((e26296 instanceof Object)){
var ex__19655__auto__ = e26296;
var statearr_26297_26332 = state_26251;
(statearr_26297_26332[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26333 = state_26251;
state_26251 = G__26333;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_26251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_26251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___26303,mults,ensure_mult,p))
})();
var state__19718__auto__ = (function (){var statearr_26298 = f__19717__auto__.call(null);
(statearr_26298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___26303);

return statearr_26298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___26303,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26334 = [];
var len__17395__auto___26337 = arguments.length;
var i__17396__auto___26338 = (0);
while(true){
if((i__17396__auto___26338 < len__17395__auto___26337)){
args26334.push((arguments[i__17396__auto___26338]));

var G__26339 = (i__17396__auto___26338 + (1));
i__17396__auto___26338 = G__26339;
continue;
} else {
}
break;
}

var G__26336 = args26334.length;
switch (G__26336) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26334.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26341 = [];
var len__17395__auto___26344 = arguments.length;
var i__17396__auto___26345 = (0);
while(true){
if((i__17396__auto___26345 < len__17395__auto___26344)){
args26341.push((arguments[i__17396__auto___26345]));

var G__26346 = (i__17396__auto___26345 + (1));
i__17396__auto___26345 = G__26346;
continue;
} else {
}
break;
}

var G__26343 = args26341.length;
switch (G__26343) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26341.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26348 = [];
var len__17395__auto___26419 = arguments.length;
var i__17396__auto___26420 = (0);
while(true){
if((i__17396__auto___26420 < len__17395__auto___26419)){
args26348.push((arguments[i__17396__auto___26420]));

var G__26421 = (i__17396__auto___26420 + (1));
i__17396__auto___26420 = G__26421;
continue;
} else {
}
break;
}

var G__26350 = args26348.length;
switch (G__26350) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26348.length)].join('')));

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
var c__19716__auto___26423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26389){
var state_val_26390 = (state_26389[(1)]);
if((state_val_26390 === (7))){
var state_26389__$1 = state_26389;
var statearr_26391_26424 = state_26389__$1;
(statearr_26391_26424[(2)] = null);

(statearr_26391_26424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (1))){
var state_26389__$1 = state_26389;
var statearr_26392_26425 = state_26389__$1;
(statearr_26392_26425[(2)] = null);

(statearr_26392_26425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (4))){
var inst_26353 = (state_26389[(7)]);
var inst_26355 = (inst_26353 < cnt);
var state_26389__$1 = state_26389;
if(cljs.core.truth_(inst_26355)){
var statearr_26393_26426 = state_26389__$1;
(statearr_26393_26426[(1)] = (6));

} else {
var statearr_26394_26427 = state_26389__$1;
(statearr_26394_26427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (15))){
var inst_26385 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
var statearr_26395_26428 = state_26389__$1;
(statearr_26395_26428[(2)] = inst_26385);

(statearr_26395_26428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (13))){
var inst_26378 = cljs.core.async.close_BANG_.call(null,out);
var state_26389__$1 = state_26389;
var statearr_26396_26429 = state_26389__$1;
(statearr_26396_26429[(2)] = inst_26378);

(statearr_26396_26429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (6))){
var state_26389__$1 = state_26389;
var statearr_26397_26430 = state_26389__$1;
(statearr_26397_26430[(2)] = null);

(statearr_26397_26430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (3))){
var inst_26387 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26389__$1,inst_26387);
} else {
if((state_val_26390 === (12))){
var inst_26375 = (state_26389[(8)]);
var inst_26375__$1 = (state_26389[(2)]);
var inst_26376 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26375__$1);
var state_26389__$1 = (function (){var statearr_26398 = state_26389;
(statearr_26398[(8)] = inst_26375__$1);

return statearr_26398;
})();
if(cljs.core.truth_(inst_26376)){
var statearr_26399_26431 = state_26389__$1;
(statearr_26399_26431[(1)] = (13));

} else {
var statearr_26400_26432 = state_26389__$1;
(statearr_26400_26432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (2))){
var inst_26352 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26353 = (0);
var state_26389__$1 = (function (){var statearr_26401 = state_26389;
(statearr_26401[(7)] = inst_26353);

(statearr_26401[(9)] = inst_26352);

return statearr_26401;
})();
var statearr_26402_26433 = state_26389__$1;
(statearr_26402_26433[(2)] = null);

(statearr_26402_26433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (11))){
var inst_26353 = (state_26389[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26389,(10),Object,null,(9));
var inst_26362 = chs__$1.call(null,inst_26353);
var inst_26363 = done.call(null,inst_26353);
var inst_26364 = cljs.core.async.take_BANG_.call(null,inst_26362,inst_26363);
var state_26389__$1 = state_26389;
var statearr_26403_26434 = state_26389__$1;
(statearr_26403_26434[(2)] = inst_26364);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (9))){
var inst_26353 = (state_26389[(7)]);
var inst_26366 = (state_26389[(2)]);
var inst_26367 = (inst_26353 + (1));
var inst_26353__$1 = inst_26367;
var state_26389__$1 = (function (){var statearr_26404 = state_26389;
(statearr_26404[(7)] = inst_26353__$1);

(statearr_26404[(10)] = inst_26366);

return statearr_26404;
})();
var statearr_26405_26435 = state_26389__$1;
(statearr_26405_26435[(2)] = null);

(statearr_26405_26435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (5))){
var inst_26373 = (state_26389[(2)]);
var state_26389__$1 = (function (){var statearr_26406 = state_26389;
(statearr_26406[(11)] = inst_26373);

return statearr_26406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26389__$1,(12),dchan);
} else {
if((state_val_26390 === (14))){
var inst_26375 = (state_26389[(8)]);
var inst_26380 = cljs.core.apply.call(null,f,inst_26375);
var state_26389__$1 = state_26389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26389__$1,(16),out,inst_26380);
} else {
if((state_val_26390 === (16))){
var inst_26382 = (state_26389[(2)]);
var state_26389__$1 = (function (){var statearr_26407 = state_26389;
(statearr_26407[(12)] = inst_26382);

return statearr_26407;
})();
var statearr_26408_26436 = state_26389__$1;
(statearr_26408_26436[(2)] = null);

(statearr_26408_26436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (10))){
var inst_26357 = (state_26389[(2)]);
var inst_26358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26389__$1 = (function (){var statearr_26409 = state_26389;
(statearr_26409[(13)] = inst_26357);

return statearr_26409;
})();
var statearr_26410_26437 = state_26389__$1;
(statearr_26410_26437[(2)] = inst_26358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (8))){
var inst_26371 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
var statearr_26411_26438 = state_26389__$1;
(statearr_26411_26438[(2)] = inst_26371);

(statearr_26411_26438[(1)] = (5));


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
});})(c__19716__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19651__auto__,c__19716__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_26415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26415[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_26415[(1)] = (1));

return statearr_26415;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_26389){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26416){if((e26416 instanceof Object)){
var ex__19655__auto__ = e26416;
var statearr_26417_26439 = state_26389;
(statearr_26417_26439[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26440 = state_26389;
state_26389 = G__26440;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_26389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_26389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19718__auto__ = (function (){var statearr_26418 = f__19717__auto__.call(null);
(statearr_26418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___26423);

return statearr_26418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___26423,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26442 = [];
var len__17395__auto___26498 = arguments.length;
var i__17396__auto___26499 = (0);
while(true){
if((i__17396__auto___26499 < len__17395__auto___26498)){
args26442.push((arguments[i__17396__auto___26499]));

var G__26500 = (i__17396__auto___26499 + (1));
i__17396__auto___26499 = G__26500;
continue;
} else {
}
break;
}

var G__26444 = args26442.length;
switch (G__26444) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26442.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19716__auto___26502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___26502,out){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___26502,out){
return (function (state_26474){
var state_val_26475 = (state_26474[(1)]);
if((state_val_26475 === (7))){
var inst_26454 = (state_26474[(7)]);
var inst_26453 = (state_26474[(8)]);
var inst_26453__$1 = (state_26474[(2)]);
var inst_26454__$1 = cljs.core.nth.call(null,inst_26453__$1,(0),null);
var inst_26455 = cljs.core.nth.call(null,inst_26453__$1,(1),null);
var inst_26456 = (inst_26454__$1 == null);
var state_26474__$1 = (function (){var statearr_26476 = state_26474;
(statearr_26476[(7)] = inst_26454__$1);

(statearr_26476[(8)] = inst_26453__$1);

(statearr_26476[(9)] = inst_26455);

return statearr_26476;
})();
if(cljs.core.truth_(inst_26456)){
var statearr_26477_26503 = state_26474__$1;
(statearr_26477_26503[(1)] = (8));

} else {
var statearr_26478_26504 = state_26474__$1;
(statearr_26478_26504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (1))){
var inst_26445 = cljs.core.vec.call(null,chs);
var inst_26446 = inst_26445;
var state_26474__$1 = (function (){var statearr_26479 = state_26474;
(statearr_26479[(10)] = inst_26446);

return statearr_26479;
})();
var statearr_26480_26505 = state_26474__$1;
(statearr_26480_26505[(2)] = null);

(statearr_26480_26505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (4))){
var inst_26446 = (state_26474[(10)]);
var state_26474__$1 = state_26474;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26474__$1,(7),inst_26446);
} else {
if((state_val_26475 === (6))){
var inst_26470 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
var statearr_26481_26506 = state_26474__$1;
(statearr_26481_26506[(2)] = inst_26470);

(statearr_26481_26506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (3))){
var inst_26472 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26474__$1,inst_26472);
} else {
if((state_val_26475 === (2))){
var inst_26446 = (state_26474[(10)]);
var inst_26448 = cljs.core.count.call(null,inst_26446);
var inst_26449 = (inst_26448 > (0));
var state_26474__$1 = state_26474;
if(cljs.core.truth_(inst_26449)){
var statearr_26483_26507 = state_26474__$1;
(statearr_26483_26507[(1)] = (4));

} else {
var statearr_26484_26508 = state_26474__$1;
(statearr_26484_26508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (11))){
var inst_26446 = (state_26474[(10)]);
var inst_26463 = (state_26474[(2)]);
var tmp26482 = inst_26446;
var inst_26446__$1 = tmp26482;
var state_26474__$1 = (function (){var statearr_26485 = state_26474;
(statearr_26485[(11)] = inst_26463);

(statearr_26485[(10)] = inst_26446__$1);

return statearr_26485;
})();
var statearr_26486_26509 = state_26474__$1;
(statearr_26486_26509[(2)] = null);

(statearr_26486_26509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (9))){
var inst_26454 = (state_26474[(7)]);
var state_26474__$1 = state_26474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26474__$1,(11),out,inst_26454);
} else {
if((state_val_26475 === (5))){
var inst_26468 = cljs.core.async.close_BANG_.call(null,out);
var state_26474__$1 = state_26474;
var statearr_26487_26510 = state_26474__$1;
(statearr_26487_26510[(2)] = inst_26468);

(statearr_26487_26510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (10))){
var inst_26466 = (state_26474[(2)]);
var state_26474__$1 = state_26474;
var statearr_26488_26511 = state_26474__$1;
(statearr_26488_26511[(2)] = inst_26466);

(statearr_26488_26511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26475 === (8))){
var inst_26454 = (state_26474[(7)]);
var inst_26453 = (state_26474[(8)]);
var inst_26446 = (state_26474[(10)]);
var inst_26455 = (state_26474[(9)]);
var inst_26458 = (function (){var cs = inst_26446;
var vec__26451 = inst_26453;
var v = inst_26454;
var c = inst_26455;
return ((function (cs,vec__26451,v,c,inst_26454,inst_26453,inst_26446,inst_26455,state_val_26475,c__19716__auto___26502,out){
return (function (p1__26441_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26441_SHARP_);
});
;})(cs,vec__26451,v,c,inst_26454,inst_26453,inst_26446,inst_26455,state_val_26475,c__19716__auto___26502,out))
})();
var inst_26459 = cljs.core.filterv.call(null,inst_26458,inst_26446);
var inst_26446__$1 = inst_26459;
var state_26474__$1 = (function (){var statearr_26489 = state_26474;
(statearr_26489[(10)] = inst_26446__$1);

return statearr_26489;
})();
var statearr_26490_26512 = state_26474__$1;
(statearr_26490_26512[(2)] = null);

(statearr_26490_26512[(1)] = (2));


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
});})(c__19716__auto___26502,out))
;
return ((function (switch__19651__auto__,c__19716__auto___26502,out){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_26494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26494[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_26494[(1)] = (1));

return statearr_26494;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_26474){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26495){if((e26495 instanceof Object)){
var ex__19655__auto__ = e26495;
var statearr_26496_26513 = state_26474;
(statearr_26496_26513[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26514 = state_26474;
state_26474 = G__26514;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_26474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_26474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___26502,out))
})();
var state__19718__auto__ = (function (){var statearr_26497 = f__19717__auto__.call(null);
(statearr_26497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___26502);

return statearr_26497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___26502,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26515 = [];
var len__17395__auto___26564 = arguments.length;
var i__17396__auto___26565 = (0);
while(true){
if((i__17396__auto___26565 < len__17395__auto___26564)){
args26515.push((arguments[i__17396__auto___26565]));

var G__26566 = (i__17396__auto___26565 + (1));
i__17396__auto___26565 = G__26566;
continue;
} else {
}
break;
}

var G__26517 = args26515.length;
switch (G__26517) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26515.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19716__auto___26568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___26568,out){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___26568,out){
return (function (state_26541){
var state_val_26542 = (state_26541[(1)]);
if((state_val_26542 === (7))){
var inst_26523 = (state_26541[(7)]);
var inst_26523__$1 = (state_26541[(2)]);
var inst_26524 = (inst_26523__$1 == null);
var inst_26525 = cljs.core.not.call(null,inst_26524);
var state_26541__$1 = (function (){var statearr_26543 = state_26541;
(statearr_26543[(7)] = inst_26523__$1);

return statearr_26543;
})();
if(inst_26525){
var statearr_26544_26569 = state_26541__$1;
(statearr_26544_26569[(1)] = (8));

} else {
var statearr_26545_26570 = state_26541__$1;
(statearr_26545_26570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (1))){
var inst_26518 = (0);
var state_26541__$1 = (function (){var statearr_26546 = state_26541;
(statearr_26546[(8)] = inst_26518);

return statearr_26546;
})();
var statearr_26547_26571 = state_26541__$1;
(statearr_26547_26571[(2)] = null);

(statearr_26547_26571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (4))){
var state_26541__$1 = state_26541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26541__$1,(7),ch);
} else {
if((state_val_26542 === (6))){
var inst_26536 = (state_26541[(2)]);
var state_26541__$1 = state_26541;
var statearr_26548_26572 = state_26541__$1;
(statearr_26548_26572[(2)] = inst_26536);

(statearr_26548_26572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (3))){
var inst_26538 = (state_26541[(2)]);
var inst_26539 = cljs.core.async.close_BANG_.call(null,out);
var state_26541__$1 = (function (){var statearr_26549 = state_26541;
(statearr_26549[(9)] = inst_26538);

return statearr_26549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26541__$1,inst_26539);
} else {
if((state_val_26542 === (2))){
var inst_26518 = (state_26541[(8)]);
var inst_26520 = (inst_26518 < n);
var state_26541__$1 = state_26541;
if(cljs.core.truth_(inst_26520)){
var statearr_26550_26573 = state_26541__$1;
(statearr_26550_26573[(1)] = (4));

} else {
var statearr_26551_26574 = state_26541__$1;
(statearr_26551_26574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (11))){
var inst_26518 = (state_26541[(8)]);
var inst_26528 = (state_26541[(2)]);
var inst_26529 = (inst_26518 + (1));
var inst_26518__$1 = inst_26529;
var state_26541__$1 = (function (){var statearr_26552 = state_26541;
(statearr_26552[(10)] = inst_26528);

(statearr_26552[(8)] = inst_26518__$1);

return statearr_26552;
})();
var statearr_26553_26575 = state_26541__$1;
(statearr_26553_26575[(2)] = null);

(statearr_26553_26575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (9))){
var state_26541__$1 = state_26541;
var statearr_26554_26576 = state_26541__$1;
(statearr_26554_26576[(2)] = null);

(statearr_26554_26576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (5))){
var state_26541__$1 = state_26541;
var statearr_26555_26577 = state_26541__$1;
(statearr_26555_26577[(2)] = null);

(statearr_26555_26577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (10))){
var inst_26533 = (state_26541[(2)]);
var state_26541__$1 = state_26541;
var statearr_26556_26578 = state_26541__$1;
(statearr_26556_26578[(2)] = inst_26533);

(statearr_26556_26578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26542 === (8))){
var inst_26523 = (state_26541[(7)]);
var state_26541__$1 = state_26541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26541__$1,(11),out,inst_26523);
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
});})(c__19716__auto___26568,out))
;
return ((function (switch__19651__auto__,c__19716__auto___26568,out){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_26560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26560[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_26560[(1)] = (1));

return statearr_26560;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_26541){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26561){if((e26561 instanceof Object)){
var ex__19655__auto__ = e26561;
var statearr_26562_26579 = state_26541;
(statearr_26562_26579[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26580 = state_26541;
state_26541 = G__26580;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_26541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_26541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___26568,out))
})();
var state__19718__auto__ = (function (){var statearr_26563 = f__19717__auto__.call(null);
(statearr_26563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___26568);

return statearr_26563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___26568,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26588 = (function (map_LT_,f,ch,meta26589){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26589 = meta26589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26590,meta26589__$1){
var self__ = this;
var _26590__$1 = this;
return (new cljs.core.async.t_cljs$core$async26588(self__.map_LT_,self__.f,self__.ch,meta26589__$1));
});

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26590){
var self__ = this;
var _26590__$1 = this;
return self__.meta26589;
});

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26591 = (function (map_LT_,f,ch,meta26589,_,fn1,meta26592){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26589 = meta26589;
this._ = _;
this.fn1 = fn1;
this.meta26592 = meta26592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26593,meta26592__$1){
var self__ = this;
var _26593__$1 = this;
return (new cljs.core.async.t_cljs$core$async26591(self__.map_LT_,self__.f,self__.ch,self__.meta26589,self__._,self__.fn1,meta26592__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26593){
var self__ = this;
var _26593__$1 = this;
return self__.meta26592;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26581_SHARP_){
return f1.call(null,(((p1__26581_SHARP_ == null))?null:self__.f.call(null,p1__26581_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26591.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26589","meta26589",-2081062263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26588","cljs.core.async/t_cljs$core$async26588",-1696212694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26592","meta26592",968639285,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26591";

cljs.core.async.t_cljs$core$async26591.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26591");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26591 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26591(map_LT___$1,f__$1,ch__$1,meta26589__$1,___$2,fn1__$1,meta26592){
return (new cljs.core.async.t_cljs$core$async26591(map_LT___$1,f__$1,ch__$1,meta26589__$1,___$2,fn1__$1,meta26592));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26591(self__.map_LT_,self__.f,self__.ch,self__.meta26589,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16325__auto__ = ret;
if(cljs.core.truth_(and__16325__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16325__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26589","meta26589",-2081062263,null)], null);
});

cljs.core.async.t_cljs$core$async26588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26588";

cljs.core.async.t_cljs$core$async26588.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26588");
});

cljs.core.async.__GT_t_cljs$core$async26588 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26588(map_LT___$1,f__$1,ch__$1,meta26589){
return (new cljs.core.async.t_cljs$core$async26588(map_LT___$1,f__$1,ch__$1,meta26589));
});

}

return (new cljs.core.async.t_cljs$core$async26588(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26597 = (function (map_GT_,f,ch,meta26598){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26598 = meta26598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26599,meta26598__$1){
var self__ = this;
var _26599__$1 = this;
return (new cljs.core.async.t_cljs$core$async26597(self__.map_GT_,self__.f,self__.ch,meta26598__$1));
});

cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26599){
var self__ = this;
var _26599__$1 = this;
return self__.meta26598;
});

cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26598","meta26598",-1694890356,null)], null);
});

cljs.core.async.t_cljs$core$async26597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26597";

cljs.core.async.t_cljs$core$async26597.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26597");
});

cljs.core.async.__GT_t_cljs$core$async26597 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26597(map_GT___$1,f__$1,ch__$1,meta26598){
return (new cljs.core.async.t_cljs$core$async26597(map_GT___$1,f__$1,ch__$1,meta26598));
});

}

return (new cljs.core.async.t_cljs$core$async26597(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26603 = (function (filter_GT_,p,ch,meta26604){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26604 = meta26604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26605,meta26604__$1){
var self__ = this;
var _26605__$1 = this;
return (new cljs.core.async.t_cljs$core$async26603(self__.filter_GT_,self__.p,self__.ch,meta26604__$1));
});

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26605){
var self__ = this;
var _26605__$1 = this;
return self__.meta26604;
});

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26604","meta26604",175641494,null)], null);
});

cljs.core.async.t_cljs$core$async26603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26603";

cljs.core.async.t_cljs$core$async26603.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26603");
});

cljs.core.async.__GT_t_cljs$core$async26603 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26603(filter_GT___$1,p__$1,ch__$1,meta26604){
return (new cljs.core.async.t_cljs$core$async26603(filter_GT___$1,p__$1,ch__$1,meta26604));
});

}

return (new cljs.core.async.t_cljs$core$async26603(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26606 = [];
var len__17395__auto___26650 = arguments.length;
var i__17396__auto___26651 = (0);
while(true){
if((i__17396__auto___26651 < len__17395__auto___26650)){
args26606.push((arguments[i__17396__auto___26651]));

var G__26652 = (i__17396__auto___26651 + (1));
i__17396__auto___26651 = G__26652;
continue;
} else {
}
break;
}

var G__26608 = args26606.length;
switch (G__26608) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26606.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19716__auto___26654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___26654,out){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___26654,out){
return (function (state_26629){
var state_val_26630 = (state_26629[(1)]);
if((state_val_26630 === (7))){
var inst_26625 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
var statearr_26631_26655 = state_26629__$1;
(statearr_26631_26655[(2)] = inst_26625);

(statearr_26631_26655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (1))){
var state_26629__$1 = state_26629;
var statearr_26632_26656 = state_26629__$1;
(statearr_26632_26656[(2)] = null);

(statearr_26632_26656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (4))){
var inst_26611 = (state_26629[(7)]);
var inst_26611__$1 = (state_26629[(2)]);
var inst_26612 = (inst_26611__$1 == null);
var state_26629__$1 = (function (){var statearr_26633 = state_26629;
(statearr_26633[(7)] = inst_26611__$1);

return statearr_26633;
})();
if(cljs.core.truth_(inst_26612)){
var statearr_26634_26657 = state_26629__$1;
(statearr_26634_26657[(1)] = (5));

} else {
var statearr_26635_26658 = state_26629__$1;
(statearr_26635_26658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (6))){
var inst_26611 = (state_26629[(7)]);
var inst_26616 = p.call(null,inst_26611);
var state_26629__$1 = state_26629;
if(cljs.core.truth_(inst_26616)){
var statearr_26636_26659 = state_26629__$1;
(statearr_26636_26659[(1)] = (8));

} else {
var statearr_26637_26660 = state_26629__$1;
(statearr_26637_26660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (3))){
var inst_26627 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26629__$1,inst_26627);
} else {
if((state_val_26630 === (2))){
var state_26629__$1 = state_26629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26629__$1,(4),ch);
} else {
if((state_val_26630 === (11))){
var inst_26619 = (state_26629[(2)]);
var state_26629__$1 = state_26629;
var statearr_26638_26661 = state_26629__$1;
(statearr_26638_26661[(2)] = inst_26619);

(statearr_26638_26661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (9))){
var state_26629__$1 = state_26629;
var statearr_26639_26662 = state_26629__$1;
(statearr_26639_26662[(2)] = null);

(statearr_26639_26662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (5))){
var inst_26614 = cljs.core.async.close_BANG_.call(null,out);
var state_26629__$1 = state_26629;
var statearr_26640_26663 = state_26629__$1;
(statearr_26640_26663[(2)] = inst_26614);

(statearr_26640_26663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (10))){
var inst_26622 = (state_26629[(2)]);
var state_26629__$1 = (function (){var statearr_26641 = state_26629;
(statearr_26641[(8)] = inst_26622);

return statearr_26641;
})();
var statearr_26642_26664 = state_26629__$1;
(statearr_26642_26664[(2)] = null);

(statearr_26642_26664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26630 === (8))){
var inst_26611 = (state_26629[(7)]);
var state_26629__$1 = state_26629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26629__$1,(11),out,inst_26611);
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
});})(c__19716__auto___26654,out))
;
return ((function (switch__19651__auto__,c__19716__auto___26654,out){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_26646 = [null,null,null,null,null,null,null,null,null];
(statearr_26646[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_26646[(1)] = (1));

return statearr_26646;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_26629){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26647){if((e26647 instanceof Object)){
var ex__19655__auto__ = e26647;
var statearr_26648_26665 = state_26629;
(statearr_26648_26665[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26666 = state_26629;
state_26629 = G__26666;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_26629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_26629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___26654,out))
})();
var state__19718__auto__ = (function (){var statearr_26649 = f__19717__auto__.call(null);
(statearr_26649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___26654);

return statearr_26649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___26654,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26667 = [];
var len__17395__auto___26670 = arguments.length;
var i__17396__auto___26671 = (0);
while(true){
if((i__17396__auto___26671 < len__17395__auto___26670)){
args26667.push((arguments[i__17396__auto___26671]));

var G__26672 = (i__17396__auto___26671 + (1));
i__17396__auto___26671 = G__26672;
continue;
} else {
}
break;
}

var G__26669 = args26667.length;
switch (G__26669) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26667.length)].join('')));

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
var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__){
return (function (state_26839){
var state_val_26840 = (state_26839[(1)]);
if((state_val_26840 === (7))){
var inst_26835 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26841_26882 = state_26839__$1;
(statearr_26841_26882[(2)] = inst_26835);

(statearr_26841_26882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (20))){
var inst_26805 = (state_26839[(7)]);
var inst_26816 = (state_26839[(2)]);
var inst_26817 = cljs.core.next.call(null,inst_26805);
var inst_26791 = inst_26817;
var inst_26792 = null;
var inst_26793 = (0);
var inst_26794 = (0);
var state_26839__$1 = (function (){var statearr_26842 = state_26839;
(statearr_26842[(8)] = inst_26792);

(statearr_26842[(9)] = inst_26816);

(statearr_26842[(10)] = inst_26791);

(statearr_26842[(11)] = inst_26793);

(statearr_26842[(12)] = inst_26794);

return statearr_26842;
})();
var statearr_26843_26883 = state_26839__$1;
(statearr_26843_26883[(2)] = null);

(statearr_26843_26883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (1))){
var state_26839__$1 = state_26839;
var statearr_26844_26884 = state_26839__$1;
(statearr_26844_26884[(2)] = null);

(statearr_26844_26884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (4))){
var inst_26780 = (state_26839[(13)]);
var inst_26780__$1 = (state_26839[(2)]);
var inst_26781 = (inst_26780__$1 == null);
var state_26839__$1 = (function (){var statearr_26845 = state_26839;
(statearr_26845[(13)] = inst_26780__$1);

return statearr_26845;
})();
if(cljs.core.truth_(inst_26781)){
var statearr_26846_26885 = state_26839__$1;
(statearr_26846_26885[(1)] = (5));

} else {
var statearr_26847_26886 = state_26839__$1;
(statearr_26847_26886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (15))){
var state_26839__$1 = state_26839;
var statearr_26851_26887 = state_26839__$1;
(statearr_26851_26887[(2)] = null);

(statearr_26851_26887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (21))){
var state_26839__$1 = state_26839;
var statearr_26852_26888 = state_26839__$1;
(statearr_26852_26888[(2)] = null);

(statearr_26852_26888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (13))){
var inst_26792 = (state_26839[(8)]);
var inst_26791 = (state_26839[(10)]);
var inst_26793 = (state_26839[(11)]);
var inst_26794 = (state_26839[(12)]);
var inst_26801 = (state_26839[(2)]);
var inst_26802 = (inst_26794 + (1));
var tmp26848 = inst_26792;
var tmp26849 = inst_26791;
var tmp26850 = inst_26793;
var inst_26791__$1 = tmp26849;
var inst_26792__$1 = tmp26848;
var inst_26793__$1 = tmp26850;
var inst_26794__$1 = inst_26802;
var state_26839__$1 = (function (){var statearr_26853 = state_26839;
(statearr_26853[(8)] = inst_26792__$1);

(statearr_26853[(10)] = inst_26791__$1);

(statearr_26853[(11)] = inst_26793__$1);

(statearr_26853[(14)] = inst_26801);

(statearr_26853[(12)] = inst_26794__$1);

return statearr_26853;
})();
var statearr_26854_26889 = state_26839__$1;
(statearr_26854_26889[(2)] = null);

(statearr_26854_26889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (22))){
var state_26839__$1 = state_26839;
var statearr_26855_26890 = state_26839__$1;
(statearr_26855_26890[(2)] = null);

(statearr_26855_26890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (6))){
var inst_26780 = (state_26839[(13)]);
var inst_26789 = f.call(null,inst_26780);
var inst_26790 = cljs.core.seq.call(null,inst_26789);
var inst_26791 = inst_26790;
var inst_26792 = null;
var inst_26793 = (0);
var inst_26794 = (0);
var state_26839__$1 = (function (){var statearr_26856 = state_26839;
(statearr_26856[(8)] = inst_26792);

(statearr_26856[(10)] = inst_26791);

(statearr_26856[(11)] = inst_26793);

(statearr_26856[(12)] = inst_26794);

return statearr_26856;
})();
var statearr_26857_26891 = state_26839__$1;
(statearr_26857_26891[(2)] = null);

(statearr_26857_26891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (17))){
var inst_26805 = (state_26839[(7)]);
var inst_26809 = cljs.core.chunk_first.call(null,inst_26805);
var inst_26810 = cljs.core.chunk_rest.call(null,inst_26805);
var inst_26811 = cljs.core.count.call(null,inst_26809);
var inst_26791 = inst_26810;
var inst_26792 = inst_26809;
var inst_26793 = inst_26811;
var inst_26794 = (0);
var state_26839__$1 = (function (){var statearr_26858 = state_26839;
(statearr_26858[(8)] = inst_26792);

(statearr_26858[(10)] = inst_26791);

(statearr_26858[(11)] = inst_26793);

(statearr_26858[(12)] = inst_26794);

return statearr_26858;
})();
var statearr_26859_26892 = state_26839__$1;
(statearr_26859_26892[(2)] = null);

(statearr_26859_26892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (3))){
var inst_26837 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26839__$1,inst_26837);
} else {
if((state_val_26840 === (12))){
var inst_26825 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26860_26893 = state_26839__$1;
(statearr_26860_26893[(2)] = inst_26825);

(statearr_26860_26893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (2))){
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26839__$1,(4),in$);
} else {
if((state_val_26840 === (23))){
var inst_26833 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26861_26894 = state_26839__$1;
(statearr_26861_26894[(2)] = inst_26833);

(statearr_26861_26894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (19))){
var inst_26820 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26862_26895 = state_26839__$1;
(statearr_26862_26895[(2)] = inst_26820);

(statearr_26862_26895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (11))){
var inst_26805 = (state_26839[(7)]);
var inst_26791 = (state_26839[(10)]);
var inst_26805__$1 = cljs.core.seq.call(null,inst_26791);
var state_26839__$1 = (function (){var statearr_26863 = state_26839;
(statearr_26863[(7)] = inst_26805__$1);

return statearr_26863;
})();
if(inst_26805__$1){
var statearr_26864_26896 = state_26839__$1;
(statearr_26864_26896[(1)] = (14));

} else {
var statearr_26865_26897 = state_26839__$1;
(statearr_26865_26897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (9))){
var inst_26827 = (state_26839[(2)]);
var inst_26828 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26839__$1 = (function (){var statearr_26866 = state_26839;
(statearr_26866[(15)] = inst_26827);

return statearr_26866;
})();
if(cljs.core.truth_(inst_26828)){
var statearr_26867_26898 = state_26839__$1;
(statearr_26867_26898[(1)] = (21));

} else {
var statearr_26868_26899 = state_26839__$1;
(statearr_26868_26899[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (5))){
var inst_26783 = cljs.core.async.close_BANG_.call(null,out);
var state_26839__$1 = state_26839;
var statearr_26869_26900 = state_26839__$1;
(statearr_26869_26900[(2)] = inst_26783);

(statearr_26869_26900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (14))){
var inst_26805 = (state_26839[(7)]);
var inst_26807 = cljs.core.chunked_seq_QMARK_.call(null,inst_26805);
var state_26839__$1 = state_26839;
if(inst_26807){
var statearr_26870_26901 = state_26839__$1;
(statearr_26870_26901[(1)] = (17));

} else {
var statearr_26871_26902 = state_26839__$1;
(statearr_26871_26902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (16))){
var inst_26823 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26872_26903 = state_26839__$1;
(statearr_26872_26903[(2)] = inst_26823);

(statearr_26872_26903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (10))){
var inst_26792 = (state_26839[(8)]);
var inst_26794 = (state_26839[(12)]);
var inst_26799 = cljs.core._nth.call(null,inst_26792,inst_26794);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26839__$1,(13),out,inst_26799);
} else {
if((state_val_26840 === (18))){
var inst_26805 = (state_26839[(7)]);
var inst_26814 = cljs.core.first.call(null,inst_26805);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26839__$1,(20),out,inst_26814);
} else {
if((state_val_26840 === (8))){
var inst_26793 = (state_26839[(11)]);
var inst_26794 = (state_26839[(12)]);
var inst_26796 = (inst_26794 < inst_26793);
var inst_26797 = inst_26796;
var state_26839__$1 = state_26839;
if(cljs.core.truth_(inst_26797)){
var statearr_26873_26904 = state_26839__$1;
(statearr_26873_26904[(1)] = (10));

} else {
var statearr_26874_26905 = state_26839__$1;
(statearr_26874_26905[(1)] = (11));

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
});})(c__19716__auto__))
;
return ((function (switch__19651__auto__,c__19716__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19652__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19652__auto____0 = (function (){
var statearr_26878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26878[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19652__auto__);

(statearr_26878[(1)] = (1));

return statearr_26878;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19652__auto____1 = (function (state_26839){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26879){if((e26879 instanceof Object)){
var ex__19655__auto__ = e26879;
var statearr_26880_26906 = state_26839;
(statearr_26880_26906[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26907 = state_26839;
state_26839 = G__26907;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19652__auto__ = function(state_26839){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19652__auto____1.call(this,state_26839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19652__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19652__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__))
})();
var state__19718__auto__ = (function (){var statearr_26881 = f__19717__auto__.call(null);
(statearr_26881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_26881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__))
);

return c__19716__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26908 = [];
var len__17395__auto___26911 = arguments.length;
var i__17396__auto___26912 = (0);
while(true){
if((i__17396__auto___26912 < len__17395__auto___26911)){
args26908.push((arguments[i__17396__auto___26912]));

var G__26913 = (i__17396__auto___26912 + (1));
i__17396__auto___26912 = G__26913;
continue;
} else {
}
break;
}

var G__26910 = args26908.length;
switch (G__26910) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26908.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26915 = [];
var len__17395__auto___26918 = arguments.length;
var i__17396__auto___26919 = (0);
while(true){
if((i__17396__auto___26919 < len__17395__auto___26918)){
args26915.push((arguments[i__17396__auto___26919]));

var G__26920 = (i__17396__auto___26919 + (1));
i__17396__auto___26919 = G__26920;
continue;
} else {
}
break;
}

var G__26917 = args26915.length;
switch (G__26917) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26915.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26922 = [];
var len__17395__auto___26973 = arguments.length;
var i__17396__auto___26974 = (0);
while(true){
if((i__17396__auto___26974 < len__17395__auto___26973)){
args26922.push((arguments[i__17396__auto___26974]));

var G__26975 = (i__17396__auto___26974 + (1));
i__17396__auto___26974 = G__26975;
continue;
} else {
}
break;
}

var G__26924 = args26922.length;
switch (G__26924) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26922.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19716__auto___26977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___26977,out){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___26977,out){
return (function (state_26948){
var state_val_26949 = (state_26948[(1)]);
if((state_val_26949 === (7))){
var inst_26943 = (state_26948[(2)]);
var state_26948__$1 = state_26948;
var statearr_26950_26978 = state_26948__$1;
(statearr_26950_26978[(2)] = inst_26943);

(statearr_26950_26978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (1))){
var inst_26925 = null;
var state_26948__$1 = (function (){var statearr_26951 = state_26948;
(statearr_26951[(7)] = inst_26925);

return statearr_26951;
})();
var statearr_26952_26979 = state_26948__$1;
(statearr_26952_26979[(2)] = null);

(statearr_26952_26979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (4))){
var inst_26928 = (state_26948[(8)]);
var inst_26928__$1 = (state_26948[(2)]);
var inst_26929 = (inst_26928__$1 == null);
var inst_26930 = cljs.core.not.call(null,inst_26929);
var state_26948__$1 = (function (){var statearr_26953 = state_26948;
(statearr_26953[(8)] = inst_26928__$1);

return statearr_26953;
})();
if(inst_26930){
var statearr_26954_26980 = state_26948__$1;
(statearr_26954_26980[(1)] = (5));

} else {
var statearr_26955_26981 = state_26948__$1;
(statearr_26955_26981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (6))){
var state_26948__$1 = state_26948;
var statearr_26956_26982 = state_26948__$1;
(statearr_26956_26982[(2)] = null);

(statearr_26956_26982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (3))){
var inst_26945 = (state_26948[(2)]);
var inst_26946 = cljs.core.async.close_BANG_.call(null,out);
var state_26948__$1 = (function (){var statearr_26957 = state_26948;
(statearr_26957[(9)] = inst_26945);

return statearr_26957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26948__$1,inst_26946);
} else {
if((state_val_26949 === (2))){
var state_26948__$1 = state_26948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26948__$1,(4),ch);
} else {
if((state_val_26949 === (11))){
var inst_26928 = (state_26948[(8)]);
var inst_26937 = (state_26948[(2)]);
var inst_26925 = inst_26928;
var state_26948__$1 = (function (){var statearr_26958 = state_26948;
(statearr_26958[(10)] = inst_26937);

(statearr_26958[(7)] = inst_26925);

return statearr_26958;
})();
var statearr_26959_26983 = state_26948__$1;
(statearr_26959_26983[(2)] = null);

(statearr_26959_26983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (9))){
var inst_26928 = (state_26948[(8)]);
var state_26948__$1 = state_26948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26948__$1,(11),out,inst_26928);
} else {
if((state_val_26949 === (5))){
var inst_26925 = (state_26948[(7)]);
var inst_26928 = (state_26948[(8)]);
var inst_26932 = cljs.core._EQ_.call(null,inst_26928,inst_26925);
var state_26948__$1 = state_26948;
if(inst_26932){
var statearr_26961_26984 = state_26948__$1;
(statearr_26961_26984[(1)] = (8));

} else {
var statearr_26962_26985 = state_26948__$1;
(statearr_26962_26985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (10))){
var inst_26940 = (state_26948[(2)]);
var state_26948__$1 = state_26948;
var statearr_26963_26986 = state_26948__$1;
(statearr_26963_26986[(2)] = inst_26940);

(statearr_26963_26986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26949 === (8))){
var inst_26925 = (state_26948[(7)]);
var tmp26960 = inst_26925;
var inst_26925__$1 = tmp26960;
var state_26948__$1 = (function (){var statearr_26964 = state_26948;
(statearr_26964[(7)] = inst_26925__$1);

return statearr_26964;
})();
var statearr_26965_26987 = state_26948__$1;
(statearr_26965_26987[(2)] = null);

(statearr_26965_26987[(1)] = (2));


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
});})(c__19716__auto___26977,out))
;
return ((function (switch__19651__auto__,c__19716__auto___26977,out){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_26969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26969[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_26969[(1)] = (1));

return statearr_26969;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_26948){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_26948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e26970){if((e26970 instanceof Object)){
var ex__19655__auto__ = e26970;
var statearr_26971_26988 = state_26948;
(statearr_26971_26988[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26989 = state_26948;
state_26948 = G__26989;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_26948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_26948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___26977,out))
})();
var state__19718__auto__ = (function (){var statearr_26972 = f__19717__auto__.call(null);
(statearr_26972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___26977);

return statearr_26972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___26977,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26990 = [];
var len__17395__auto___27060 = arguments.length;
var i__17396__auto___27061 = (0);
while(true){
if((i__17396__auto___27061 < len__17395__auto___27060)){
args26990.push((arguments[i__17396__auto___27061]));

var G__27062 = (i__17396__auto___27061 + (1));
i__17396__auto___27061 = G__27062;
continue;
} else {
}
break;
}

var G__26992 = args26990.length;
switch (G__26992) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26990.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19716__auto___27064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___27064,out){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___27064,out){
return (function (state_27030){
var state_val_27031 = (state_27030[(1)]);
if((state_val_27031 === (7))){
var inst_27026 = (state_27030[(2)]);
var state_27030__$1 = state_27030;
var statearr_27032_27065 = state_27030__$1;
(statearr_27032_27065[(2)] = inst_27026);

(statearr_27032_27065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (1))){
var inst_26993 = (new Array(n));
var inst_26994 = inst_26993;
var inst_26995 = (0);
var state_27030__$1 = (function (){var statearr_27033 = state_27030;
(statearr_27033[(7)] = inst_26995);

(statearr_27033[(8)] = inst_26994);

return statearr_27033;
})();
var statearr_27034_27066 = state_27030__$1;
(statearr_27034_27066[(2)] = null);

(statearr_27034_27066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (4))){
var inst_26998 = (state_27030[(9)]);
var inst_26998__$1 = (state_27030[(2)]);
var inst_26999 = (inst_26998__$1 == null);
var inst_27000 = cljs.core.not.call(null,inst_26999);
var state_27030__$1 = (function (){var statearr_27035 = state_27030;
(statearr_27035[(9)] = inst_26998__$1);

return statearr_27035;
})();
if(inst_27000){
var statearr_27036_27067 = state_27030__$1;
(statearr_27036_27067[(1)] = (5));

} else {
var statearr_27037_27068 = state_27030__$1;
(statearr_27037_27068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (15))){
var inst_27020 = (state_27030[(2)]);
var state_27030__$1 = state_27030;
var statearr_27038_27069 = state_27030__$1;
(statearr_27038_27069[(2)] = inst_27020);

(statearr_27038_27069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (13))){
var state_27030__$1 = state_27030;
var statearr_27039_27070 = state_27030__$1;
(statearr_27039_27070[(2)] = null);

(statearr_27039_27070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (6))){
var inst_26995 = (state_27030[(7)]);
var inst_27016 = (inst_26995 > (0));
var state_27030__$1 = state_27030;
if(cljs.core.truth_(inst_27016)){
var statearr_27040_27071 = state_27030__$1;
(statearr_27040_27071[(1)] = (12));

} else {
var statearr_27041_27072 = state_27030__$1;
(statearr_27041_27072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (3))){
var inst_27028 = (state_27030[(2)]);
var state_27030__$1 = state_27030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27030__$1,inst_27028);
} else {
if((state_val_27031 === (12))){
var inst_26994 = (state_27030[(8)]);
var inst_27018 = cljs.core.vec.call(null,inst_26994);
var state_27030__$1 = state_27030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27030__$1,(15),out,inst_27018);
} else {
if((state_val_27031 === (2))){
var state_27030__$1 = state_27030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27030__$1,(4),ch);
} else {
if((state_val_27031 === (11))){
var inst_27010 = (state_27030[(2)]);
var inst_27011 = (new Array(n));
var inst_26994 = inst_27011;
var inst_26995 = (0);
var state_27030__$1 = (function (){var statearr_27042 = state_27030;
(statearr_27042[(10)] = inst_27010);

(statearr_27042[(7)] = inst_26995);

(statearr_27042[(8)] = inst_26994);

return statearr_27042;
})();
var statearr_27043_27073 = state_27030__$1;
(statearr_27043_27073[(2)] = null);

(statearr_27043_27073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (9))){
var inst_26994 = (state_27030[(8)]);
var inst_27008 = cljs.core.vec.call(null,inst_26994);
var state_27030__$1 = state_27030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27030__$1,(11),out,inst_27008);
} else {
if((state_val_27031 === (5))){
var inst_26998 = (state_27030[(9)]);
var inst_27003 = (state_27030[(11)]);
var inst_26995 = (state_27030[(7)]);
var inst_26994 = (state_27030[(8)]);
var inst_27002 = (inst_26994[inst_26995] = inst_26998);
var inst_27003__$1 = (inst_26995 + (1));
var inst_27004 = (inst_27003__$1 < n);
var state_27030__$1 = (function (){var statearr_27044 = state_27030;
(statearr_27044[(12)] = inst_27002);

(statearr_27044[(11)] = inst_27003__$1);

return statearr_27044;
})();
if(cljs.core.truth_(inst_27004)){
var statearr_27045_27074 = state_27030__$1;
(statearr_27045_27074[(1)] = (8));

} else {
var statearr_27046_27075 = state_27030__$1;
(statearr_27046_27075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (14))){
var inst_27023 = (state_27030[(2)]);
var inst_27024 = cljs.core.async.close_BANG_.call(null,out);
var state_27030__$1 = (function (){var statearr_27048 = state_27030;
(statearr_27048[(13)] = inst_27023);

return statearr_27048;
})();
var statearr_27049_27076 = state_27030__$1;
(statearr_27049_27076[(2)] = inst_27024);

(statearr_27049_27076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (10))){
var inst_27014 = (state_27030[(2)]);
var state_27030__$1 = state_27030;
var statearr_27050_27077 = state_27030__$1;
(statearr_27050_27077[(2)] = inst_27014);

(statearr_27050_27077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27031 === (8))){
var inst_27003 = (state_27030[(11)]);
var inst_26994 = (state_27030[(8)]);
var tmp27047 = inst_26994;
var inst_26994__$1 = tmp27047;
var inst_26995 = inst_27003;
var state_27030__$1 = (function (){var statearr_27051 = state_27030;
(statearr_27051[(7)] = inst_26995);

(statearr_27051[(8)] = inst_26994__$1);

return statearr_27051;
})();
var statearr_27052_27078 = state_27030__$1;
(statearr_27052_27078[(2)] = null);

(statearr_27052_27078[(1)] = (2));


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
});})(c__19716__auto___27064,out))
;
return ((function (switch__19651__auto__,c__19716__auto___27064,out){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_27056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27056[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_27056[(1)] = (1));

return statearr_27056;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_27030){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_27030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e27057){if((e27057 instanceof Object)){
var ex__19655__auto__ = e27057;
var statearr_27058_27079 = state_27030;
(statearr_27058_27079[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27080 = state_27030;
state_27030 = G__27080;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_27030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_27030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___27064,out))
})();
var state__19718__auto__ = (function (){var statearr_27059 = f__19717__auto__.call(null);
(statearr_27059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___27064);

return statearr_27059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___27064,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27081 = [];
var len__17395__auto___27155 = arguments.length;
var i__17396__auto___27156 = (0);
while(true){
if((i__17396__auto___27156 < len__17395__auto___27155)){
args27081.push((arguments[i__17396__auto___27156]));

var G__27157 = (i__17396__auto___27156 + (1));
i__17396__auto___27156 = G__27157;
continue;
} else {
}
break;
}

var G__27083 = args27081.length;
switch (G__27083) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27081.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19716__auto___27159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___27159,out){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___27159,out){
return (function (state_27125){
var state_val_27126 = (state_27125[(1)]);
if((state_val_27126 === (7))){
var inst_27121 = (state_27125[(2)]);
var state_27125__$1 = state_27125;
var statearr_27127_27160 = state_27125__$1;
(statearr_27127_27160[(2)] = inst_27121);

(statearr_27127_27160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (1))){
var inst_27084 = [];
var inst_27085 = inst_27084;
var inst_27086 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27125__$1 = (function (){var statearr_27128 = state_27125;
(statearr_27128[(7)] = inst_27086);

(statearr_27128[(8)] = inst_27085);

return statearr_27128;
})();
var statearr_27129_27161 = state_27125__$1;
(statearr_27129_27161[(2)] = null);

(statearr_27129_27161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (4))){
var inst_27089 = (state_27125[(9)]);
var inst_27089__$1 = (state_27125[(2)]);
var inst_27090 = (inst_27089__$1 == null);
var inst_27091 = cljs.core.not.call(null,inst_27090);
var state_27125__$1 = (function (){var statearr_27130 = state_27125;
(statearr_27130[(9)] = inst_27089__$1);

return statearr_27130;
})();
if(inst_27091){
var statearr_27131_27162 = state_27125__$1;
(statearr_27131_27162[(1)] = (5));

} else {
var statearr_27132_27163 = state_27125__$1;
(statearr_27132_27163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (15))){
var inst_27115 = (state_27125[(2)]);
var state_27125__$1 = state_27125;
var statearr_27133_27164 = state_27125__$1;
(statearr_27133_27164[(2)] = inst_27115);

(statearr_27133_27164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (13))){
var state_27125__$1 = state_27125;
var statearr_27134_27165 = state_27125__$1;
(statearr_27134_27165[(2)] = null);

(statearr_27134_27165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (6))){
var inst_27085 = (state_27125[(8)]);
var inst_27110 = inst_27085.length;
var inst_27111 = (inst_27110 > (0));
var state_27125__$1 = state_27125;
if(cljs.core.truth_(inst_27111)){
var statearr_27135_27166 = state_27125__$1;
(statearr_27135_27166[(1)] = (12));

} else {
var statearr_27136_27167 = state_27125__$1;
(statearr_27136_27167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (3))){
var inst_27123 = (state_27125[(2)]);
var state_27125__$1 = state_27125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27125__$1,inst_27123);
} else {
if((state_val_27126 === (12))){
var inst_27085 = (state_27125[(8)]);
var inst_27113 = cljs.core.vec.call(null,inst_27085);
var state_27125__$1 = state_27125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27125__$1,(15),out,inst_27113);
} else {
if((state_val_27126 === (2))){
var state_27125__$1 = state_27125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27125__$1,(4),ch);
} else {
if((state_val_27126 === (11))){
var inst_27089 = (state_27125[(9)]);
var inst_27093 = (state_27125[(10)]);
var inst_27103 = (state_27125[(2)]);
var inst_27104 = [];
var inst_27105 = inst_27104.push(inst_27089);
var inst_27085 = inst_27104;
var inst_27086 = inst_27093;
var state_27125__$1 = (function (){var statearr_27137 = state_27125;
(statearr_27137[(11)] = inst_27105);

(statearr_27137[(7)] = inst_27086);

(statearr_27137[(12)] = inst_27103);

(statearr_27137[(8)] = inst_27085);

return statearr_27137;
})();
var statearr_27138_27168 = state_27125__$1;
(statearr_27138_27168[(2)] = null);

(statearr_27138_27168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (9))){
var inst_27085 = (state_27125[(8)]);
var inst_27101 = cljs.core.vec.call(null,inst_27085);
var state_27125__$1 = state_27125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27125__$1,(11),out,inst_27101);
} else {
if((state_val_27126 === (5))){
var inst_27086 = (state_27125[(7)]);
var inst_27089 = (state_27125[(9)]);
var inst_27093 = (state_27125[(10)]);
var inst_27093__$1 = f.call(null,inst_27089);
var inst_27094 = cljs.core._EQ_.call(null,inst_27093__$1,inst_27086);
var inst_27095 = cljs.core.keyword_identical_QMARK_.call(null,inst_27086,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27096 = (inst_27094) || (inst_27095);
var state_27125__$1 = (function (){var statearr_27139 = state_27125;
(statearr_27139[(10)] = inst_27093__$1);

return statearr_27139;
})();
if(cljs.core.truth_(inst_27096)){
var statearr_27140_27169 = state_27125__$1;
(statearr_27140_27169[(1)] = (8));

} else {
var statearr_27141_27170 = state_27125__$1;
(statearr_27141_27170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (14))){
var inst_27118 = (state_27125[(2)]);
var inst_27119 = cljs.core.async.close_BANG_.call(null,out);
var state_27125__$1 = (function (){var statearr_27143 = state_27125;
(statearr_27143[(13)] = inst_27118);

return statearr_27143;
})();
var statearr_27144_27171 = state_27125__$1;
(statearr_27144_27171[(2)] = inst_27119);

(statearr_27144_27171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (10))){
var inst_27108 = (state_27125[(2)]);
var state_27125__$1 = state_27125;
var statearr_27145_27172 = state_27125__$1;
(statearr_27145_27172[(2)] = inst_27108);

(statearr_27145_27172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27126 === (8))){
var inst_27085 = (state_27125[(8)]);
var inst_27089 = (state_27125[(9)]);
var inst_27093 = (state_27125[(10)]);
var inst_27098 = inst_27085.push(inst_27089);
var tmp27142 = inst_27085;
var inst_27085__$1 = tmp27142;
var inst_27086 = inst_27093;
var state_27125__$1 = (function (){var statearr_27146 = state_27125;
(statearr_27146[(7)] = inst_27086);

(statearr_27146[(14)] = inst_27098);

(statearr_27146[(8)] = inst_27085__$1);

return statearr_27146;
})();
var statearr_27147_27173 = state_27125__$1;
(statearr_27147_27173[(2)] = null);

(statearr_27147_27173[(1)] = (2));


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
});})(c__19716__auto___27159,out))
;
return ((function (switch__19651__auto__,c__19716__auto___27159,out){
return (function() {
var cljs$core$async$state_machine__19652__auto__ = null;
var cljs$core$async$state_machine__19652__auto____0 = (function (){
var statearr_27151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27151[(0)] = cljs$core$async$state_machine__19652__auto__);

(statearr_27151[(1)] = (1));

return statearr_27151;
});
var cljs$core$async$state_machine__19652__auto____1 = (function (state_27125){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_27125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e27152){if((e27152 instanceof Object)){
var ex__19655__auto__ = e27152;
var statearr_27153_27174 = state_27125;
(statearr_27153_27174[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27175 = state_27125;
state_27125 = G__27175;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
cljs$core$async$state_machine__19652__auto__ = function(state_27125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19652__auto____1.call(this,state_27125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19652__auto____0;
cljs$core$async$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19652__auto____1;
return cljs$core$async$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___27159,out))
})();
var state__19718__auto__ = (function (){var statearr_27154 = f__19717__auto__.call(null);
(statearr_27154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___27159);

return statearr_27154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___27159,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1442099115327