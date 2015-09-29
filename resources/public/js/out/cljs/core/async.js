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
if(typeof cljs.core.async.t_cljs$core$async25135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25135 = (function (fn_handler,f,meta25136){
this.fn_handler = fn_handler;
this.f = f;
this.meta25136 = meta25136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25137,meta25136__$1){
var self__ = this;
var _25137__$1 = this;
return (new cljs.core.async.t_cljs$core$async25135(self__.fn_handler,self__.f,meta25136__$1));
});

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25137){
var self__ = this;
var _25137__$1 = this;
return self__.meta25136;
});

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25136","meta25136",1468676959,null)], null);
});

cljs.core.async.t_cljs$core$async25135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25135";

cljs.core.async.t_cljs$core$async25135.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async25135");
});

cljs.core.async.__GT_t_cljs$core$async25135 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25135(fn_handler__$1,f__$1,meta25136){
return (new cljs.core.async.t_cljs$core$async25135(fn_handler__$1,f__$1,meta25136));
});

}

return (new cljs.core.async.t_cljs$core$async25135(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args25140 = [];
var len__17395__auto___25143 = arguments.length;
var i__17396__auto___25144 = (0);
while(true){
if((i__17396__auto___25144 < len__17395__auto___25143)){
args25140.push((arguments[i__17396__auto___25144]));

var G__25145 = (i__17396__auto___25144 + (1));
i__17396__auto___25144 = G__25145;
continue;
} else {
}
break;
}

var G__25142 = args25140.length;
switch (G__25142) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25140.length)].join('')));

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
var args25147 = [];
var len__17395__auto___25150 = arguments.length;
var i__17396__auto___25151 = (0);
while(true){
if((i__17396__auto___25151 < len__17395__auto___25150)){
args25147.push((arguments[i__17396__auto___25151]));

var G__25152 = (i__17396__auto___25151 + (1));
i__17396__auto___25151 = G__25152;
continue;
} else {
}
break;
}

var G__25149 = args25147.length;
switch (G__25149) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25147.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25154 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25154);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25154,ret){
return (function (){
return fn1.call(null,val_25154);
});})(val_25154,ret))
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
var args25155 = [];
var len__17395__auto___25158 = arguments.length;
var i__17396__auto___25159 = (0);
while(true){
if((i__17396__auto___25159 < len__17395__auto___25158)){
args25155.push((arguments[i__17396__auto___25159]));

var G__25160 = (i__17396__auto___25159 + (1));
i__17396__auto___25159 = G__25160;
continue;
} else {
}
break;
}

var G__25157 = args25155.length;
switch (G__25157) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25155.length)].join('')));

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
var n__17240__auto___25162 = n;
var x_25163 = (0);
while(true){
if((x_25163 < n__17240__auto___25162)){
(a[x_25163] = (0));

var G__25164 = (x_25163 + (1));
x_25163 = G__25164;
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

var G__25165 = (i + (1));
i = G__25165;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25169 = (function (alt_flag,flag,meta25170){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25170 = meta25170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25171,meta25170__$1){
var self__ = this;
var _25171__$1 = this;
return (new cljs.core.async.t_cljs$core$async25169(self__.alt_flag,self__.flag,meta25170__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25171){
var self__ = this;
var _25171__$1 = this;
return self__.meta25170;
});})(flag))
;

cljs.core.async.t_cljs$core$async25169.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25169.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25170","meta25170",-1884841156,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25169";

cljs.core.async.t_cljs$core$async25169.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async25169");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25169 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25169(alt_flag__$1,flag__$1,meta25170){
return (new cljs.core.async.t_cljs$core$async25169(alt_flag__$1,flag__$1,meta25170));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25169(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25175 = (function (alt_handler,flag,cb,meta25176){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25176 = meta25176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25177,meta25176__$1){
var self__ = this;
var _25177__$1 = this;
return (new cljs.core.async.t_cljs$core$async25175(self__.alt_handler,self__.flag,self__.cb,meta25176__$1));
});

cljs.core.async.t_cljs$core$async25175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25177){
var self__ = this;
var _25177__$1 = this;
return self__.meta25176;
});

cljs.core.async.t_cljs$core$async25175.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25176","meta25176",-1336184285,null)], null);
});

cljs.core.async.t_cljs$core$async25175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25175";

cljs.core.async.t_cljs$core$async25175.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async25175");
});

cljs.core.async.__GT_t_cljs$core$async25175 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25175(alt_handler__$1,flag__$1,cb__$1,meta25176){
return (new cljs.core.async.t_cljs$core$async25175(alt_handler__$1,flag__$1,cb__$1,meta25176));
});

}

return (new cljs.core.async.t_cljs$core$async25175(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25178_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25178_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25179_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25179_SHARP_,port], null));
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
var G__25180 = (i + (1));
i = G__25180;
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
var len__17395__auto___25186 = arguments.length;
var i__17396__auto___25187 = (0);
while(true){
if((i__17396__auto___25187 < len__17395__auto___25186)){
args__17402__auto__.push((arguments[i__17396__auto___25187]));

var G__25188 = (i__17396__auto___25187 + (1));
i__17396__auto___25187 = G__25188;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((1) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17403__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25183){
var map__25184 = p__25183;
var map__25184__$1 = ((((!((map__25184 == null)))?((((map__25184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25184):map__25184);
var opts = map__25184__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25181){
var G__25182 = cljs.core.first.call(null,seq25181);
var seq25181__$1 = cljs.core.next.call(null,seq25181);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25182,seq25181__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25189 = [];
var len__17395__auto___25239 = arguments.length;
var i__17396__auto___25240 = (0);
while(true){
if((i__17396__auto___25240 < len__17395__auto___25239)){
args25189.push((arguments[i__17396__auto___25240]));

var G__25241 = (i__17396__auto___25240 + (1));
i__17396__auto___25240 = G__25241;
continue;
} else {
}
break;
}

var G__25191 = args25189.length;
switch (G__25191) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25189.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19810__auto___25243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___25243){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___25243){
return (function (state_25215){
var state_val_25216 = (state_25215[(1)]);
if((state_val_25216 === (7))){
var inst_25211 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25217_25244 = state_25215__$1;
(statearr_25217_25244[(2)] = inst_25211);

(statearr_25217_25244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (1))){
var state_25215__$1 = state_25215;
var statearr_25218_25245 = state_25215__$1;
(statearr_25218_25245[(2)] = null);

(statearr_25218_25245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (4))){
var inst_25194 = (state_25215[(7)]);
var inst_25194__$1 = (state_25215[(2)]);
var inst_25195 = (inst_25194__$1 == null);
var state_25215__$1 = (function (){var statearr_25219 = state_25215;
(statearr_25219[(7)] = inst_25194__$1);

return statearr_25219;
})();
if(cljs.core.truth_(inst_25195)){
var statearr_25220_25246 = state_25215__$1;
(statearr_25220_25246[(1)] = (5));

} else {
var statearr_25221_25247 = state_25215__$1;
(statearr_25221_25247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (13))){
var state_25215__$1 = state_25215;
var statearr_25222_25248 = state_25215__$1;
(statearr_25222_25248[(2)] = null);

(statearr_25222_25248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (6))){
var inst_25194 = (state_25215[(7)]);
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25215__$1,(11),to,inst_25194);
} else {
if((state_val_25216 === (3))){
var inst_25213 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25215__$1,inst_25213);
} else {
if((state_val_25216 === (12))){
var state_25215__$1 = state_25215;
var statearr_25223_25249 = state_25215__$1;
(statearr_25223_25249[(2)] = null);

(statearr_25223_25249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (2))){
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25215__$1,(4),from);
} else {
if((state_val_25216 === (11))){
var inst_25204 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
if(cljs.core.truth_(inst_25204)){
var statearr_25224_25250 = state_25215__$1;
(statearr_25224_25250[(1)] = (12));

} else {
var statearr_25225_25251 = state_25215__$1;
(statearr_25225_25251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (9))){
var state_25215__$1 = state_25215;
var statearr_25226_25252 = state_25215__$1;
(statearr_25226_25252[(2)] = null);

(statearr_25226_25252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (5))){
var state_25215__$1 = state_25215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25227_25253 = state_25215__$1;
(statearr_25227_25253[(1)] = (8));

} else {
var statearr_25228_25254 = state_25215__$1;
(statearr_25228_25254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (14))){
var inst_25209 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25229_25255 = state_25215__$1;
(statearr_25229_25255[(2)] = inst_25209);

(statearr_25229_25255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (10))){
var inst_25201 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25230_25256 = state_25215__$1;
(statearr_25230_25256[(2)] = inst_25201);

(statearr_25230_25256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (8))){
var inst_25198 = cljs.core.async.close_BANG_.call(null,to);
var state_25215__$1 = state_25215;
var statearr_25231_25257 = state_25215__$1;
(statearr_25231_25257[(2)] = inst_25198);

(statearr_25231_25257[(1)] = (10));


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
});})(c__19810__auto___25243))
;
return ((function (switch__19745__auto__,c__19810__auto___25243){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_25235 = [null,null,null,null,null,null,null,null];
(statearr_25235[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_25235[(1)] = (1));

return statearr_25235;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_25215){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25236){if((e25236 instanceof Object)){
var ex__19749__auto__ = e25236;
var statearr_25237_25258 = state_25215;
(statearr_25237_25258[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25259 = state_25215;
state_25215 = G__25259;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_25215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_25215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___25243))
})();
var state__19812__auto__ = (function (){var statearr_25238 = f__19811__auto__.call(null);
(statearr_25238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___25243);

return statearr_25238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___25243))
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
return (function (p__25443){
var vec__25444 = p__25443;
var v = cljs.core.nth.call(null,vec__25444,(0),null);
var p = cljs.core.nth.call(null,vec__25444,(1),null);
var job = vec__25444;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19810__auto___25626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___25626,res,vec__25444,v,p,job,jobs,results){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___25626,res,vec__25444,v,p,job,jobs,results){
return (function (state_25449){
var state_val_25450 = (state_25449[(1)]);
if((state_val_25450 === (1))){
var state_25449__$1 = state_25449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25449__$1,(2),res,v);
} else {
if((state_val_25450 === (2))){
var inst_25446 = (state_25449[(2)]);
var inst_25447 = cljs.core.async.close_BANG_.call(null,res);
var state_25449__$1 = (function (){var statearr_25451 = state_25449;
(statearr_25451[(7)] = inst_25446);

return statearr_25451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25449__$1,inst_25447);
} else {
return null;
}
}
});})(c__19810__auto___25626,res,vec__25444,v,p,job,jobs,results))
;
return ((function (switch__19745__auto__,c__19810__auto___25626,res,vec__25444,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0 = (function (){
var statearr_25455 = [null,null,null,null,null,null,null,null];
(statearr_25455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__);

(statearr_25455[(1)] = (1));

return statearr_25455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1 = (function (state_25449){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25456){if((e25456 instanceof Object)){
var ex__19749__auto__ = e25456;
var statearr_25457_25627 = state_25449;
(statearr_25457_25627[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25628 = state_25449;
state_25449 = G__25628;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = function(state_25449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1.call(this,state_25449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___25626,res,vec__25444,v,p,job,jobs,results))
})();
var state__19812__auto__ = (function (){var statearr_25458 = f__19811__auto__.call(null);
(statearr_25458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___25626);

return statearr_25458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___25626,res,vec__25444,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25459){
var vec__25460 = p__25459;
var v = cljs.core.nth.call(null,vec__25460,(0),null);
var p = cljs.core.nth.call(null,vec__25460,(1),null);
var job = vec__25460;
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
var n__17240__auto___25629 = n;
var __25630 = (0);
while(true){
if((__25630 < n__17240__auto___25629)){
var G__25461_25631 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25461_25631) {
case "compute":
var c__19810__auto___25633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25630,c__19810__auto___25633,G__25461_25631,n__17240__auto___25629,jobs,results,process,async){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (__25630,c__19810__auto___25633,G__25461_25631,n__17240__auto___25629,jobs,results,process,async){
return (function (state_25474){
var state_val_25475 = (state_25474[(1)]);
if((state_val_25475 === (1))){
var state_25474__$1 = state_25474;
var statearr_25476_25634 = state_25474__$1;
(statearr_25476_25634[(2)] = null);

(statearr_25476_25634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (2))){
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25474__$1,(4),jobs);
} else {
if((state_val_25475 === (3))){
var inst_25472 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25474__$1,inst_25472);
} else {
if((state_val_25475 === (4))){
var inst_25464 = (state_25474[(2)]);
var inst_25465 = process.call(null,inst_25464);
var state_25474__$1 = state_25474;
if(cljs.core.truth_(inst_25465)){
var statearr_25477_25635 = state_25474__$1;
(statearr_25477_25635[(1)] = (5));

} else {
var statearr_25478_25636 = state_25474__$1;
(statearr_25478_25636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (5))){
var state_25474__$1 = state_25474;
var statearr_25479_25637 = state_25474__$1;
(statearr_25479_25637[(2)] = null);

(statearr_25479_25637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (6))){
var state_25474__$1 = state_25474;
var statearr_25480_25638 = state_25474__$1;
(statearr_25480_25638[(2)] = null);

(statearr_25480_25638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (7))){
var inst_25470 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25481_25639 = state_25474__$1;
(statearr_25481_25639[(2)] = inst_25470);

(statearr_25481_25639[(1)] = (3));


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
});})(__25630,c__19810__auto___25633,G__25461_25631,n__17240__auto___25629,jobs,results,process,async))
;
return ((function (__25630,switch__19745__auto__,c__19810__auto___25633,G__25461_25631,n__17240__auto___25629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0 = (function (){
var statearr_25485 = [null,null,null,null,null,null,null];
(statearr_25485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__);

(statearr_25485[(1)] = (1));

return statearr_25485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1 = (function (state_25474){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25486){if((e25486 instanceof Object)){
var ex__19749__auto__ = e25486;
var statearr_25487_25640 = state_25474;
(statearr_25487_25640[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25641 = state_25474;
state_25474 = G__25641;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = function(state_25474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1.call(this,state_25474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__;
})()
;})(__25630,switch__19745__auto__,c__19810__auto___25633,G__25461_25631,n__17240__auto___25629,jobs,results,process,async))
})();
var state__19812__auto__ = (function (){var statearr_25488 = f__19811__auto__.call(null);
(statearr_25488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___25633);

return statearr_25488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(__25630,c__19810__auto___25633,G__25461_25631,n__17240__auto___25629,jobs,results,process,async))
);


break;
case "async":
var c__19810__auto___25642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25630,c__19810__auto___25642,G__25461_25631,n__17240__auto___25629,jobs,results,process,async){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (__25630,c__19810__auto___25642,G__25461_25631,n__17240__auto___25629,jobs,results,process,async){
return (function (state_25501){
var state_val_25502 = (state_25501[(1)]);
if((state_val_25502 === (1))){
var state_25501__$1 = state_25501;
var statearr_25503_25643 = state_25501__$1;
(statearr_25503_25643[(2)] = null);

(statearr_25503_25643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (2))){
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,(4),jobs);
} else {
if((state_val_25502 === (3))){
var inst_25499 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25501__$1,inst_25499);
} else {
if((state_val_25502 === (4))){
var inst_25491 = (state_25501[(2)]);
var inst_25492 = async.call(null,inst_25491);
var state_25501__$1 = state_25501;
if(cljs.core.truth_(inst_25492)){
var statearr_25504_25644 = state_25501__$1;
(statearr_25504_25644[(1)] = (5));

} else {
var statearr_25505_25645 = state_25501__$1;
(statearr_25505_25645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (5))){
var state_25501__$1 = state_25501;
var statearr_25506_25646 = state_25501__$1;
(statearr_25506_25646[(2)] = null);

(statearr_25506_25646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (6))){
var state_25501__$1 = state_25501;
var statearr_25507_25647 = state_25501__$1;
(statearr_25507_25647[(2)] = null);

(statearr_25507_25647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (7))){
var inst_25497 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
var statearr_25508_25648 = state_25501__$1;
(statearr_25508_25648[(2)] = inst_25497);

(statearr_25508_25648[(1)] = (3));


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
});})(__25630,c__19810__auto___25642,G__25461_25631,n__17240__auto___25629,jobs,results,process,async))
;
return ((function (__25630,switch__19745__auto__,c__19810__auto___25642,G__25461_25631,n__17240__auto___25629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0 = (function (){
var statearr_25512 = [null,null,null,null,null,null,null];
(statearr_25512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__);

(statearr_25512[(1)] = (1));

return statearr_25512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1 = (function (state_25501){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25513){if((e25513 instanceof Object)){
var ex__19749__auto__ = e25513;
var statearr_25514_25649 = state_25501;
(statearr_25514_25649[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25650 = state_25501;
state_25501 = G__25650;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = function(state_25501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1.call(this,state_25501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__;
})()
;})(__25630,switch__19745__auto__,c__19810__auto___25642,G__25461_25631,n__17240__auto___25629,jobs,results,process,async))
})();
var state__19812__auto__ = (function (){var statearr_25515 = f__19811__auto__.call(null);
(statearr_25515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___25642);

return statearr_25515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(__25630,c__19810__auto___25642,G__25461_25631,n__17240__auto___25629,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25651 = (__25630 + (1));
__25630 = G__25651;
continue;
} else {
}
break;
}

var c__19810__auto___25652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___25652,jobs,results,process,async){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___25652,jobs,results,process,async){
return (function (state_25537){
var state_val_25538 = (state_25537[(1)]);
if((state_val_25538 === (1))){
var state_25537__$1 = state_25537;
var statearr_25539_25653 = state_25537__$1;
(statearr_25539_25653[(2)] = null);

(statearr_25539_25653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (2))){
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25537__$1,(4),from);
} else {
if((state_val_25538 === (3))){
var inst_25535 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25537__$1,inst_25535);
} else {
if((state_val_25538 === (4))){
var inst_25518 = (state_25537[(7)]);
var inst_25518__$1 = (state_25537[(2)]);
var inst_25519 = (inst_25518__$1 == null);
var state_25537__$1 = (function (){var statearr_25540 = state_25537;
(statearr_25540[(7)] = inst_25518__$1);

return statearr_25540;
})();
if(cljs.core.truth_(inst_25519)){
var statearr_25541_25654 = state_25537__$1;
(statearr_25541_25654[(1)] = (5));

} else {
var statearr_25542_25655 = state_25537__$1;
(statearr_25542_25655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (5))){
var inst_25521 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25537__$1 = state_25537;
var statearr_25543_25656 = state_25537__$1;
(statearr_25543_25656[(2)] = inst_25521);

(statearr_25543_25656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (6))){
var inst_25518 = (state_25537[(7)]);
var inst_25523 = (state_25537[(8)]);
var inst_25523__$1 = cljs.core.async.chan.call(null,(1));
var inst_25524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25525 = [inst_25518,inst_25523__$1];
var inst_25526 = (new cljs.core.PersistentVector(null,2,(5),inst_25524,inst_25525,null));
var state_25537__$1 = (function (){var statearr_25544 = state_25537;
(statearr_25544[(8)] = inst_25523__$1);

return statearr_25544;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(8),jobs,inst_25526);
} else {
if((state_val_25538 === (7))){
var inst_25533 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25545_25657 = state_25537__$1;
(statearr_25545_25657[(2)] = inst_25533);

(statearr_25545_25657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (8))){
var inst_25523 = (state_25537[(8)]);
var inst_25528 = (state_25537[(2)]);
var state_25537__$1 = (function (){var statearr_25546 = state_25537;
(statearr_25546[(9)] = inst_25528);

return statearr_25546;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(9),results,inst_25523);
} else {
if((state_val_25538 === (9))){
var inst_25530 = (state_25537[(2)]);
var state_25537__$1 = (function (){var statearr_25547 = state_25537;
(statearr_25547[(10)] = inst_25530);

return statearr_25547;
})();
var statearr_25548_25658 = state_25537__$1;
(statearr_25548_25658[(2)] = null);

(statearr_25548_25658[(1)] = (2));


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
});})(c__19810__auto___25652,jobs,results,process,async))
;
return ((function (switch__19745__auto__,c__19810__auto___25652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0 = (function (){
var statearr_25552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25552[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__);

(statearr_25552[(1)] = (1));

return statearr_25552;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1 = (function (state_25537){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25553){if((e25553 instanceof Object)){
var ex__19749__auto__ = e25553;
var statearr_25554_25659 = state_25537;
(statearr_25554_25659[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25660 = state_25537;
state_25537 = G__25660;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = function(state_25537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1.call(this,state_25537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___25652,jobs,results,process,async))
})();
var state__19812__auto__ = (function (){var statearr_25555 = f__19811__auto__.call(null);
(statearr_25555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___25652);

return statearr_25555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___25652,jobs,results,process,async))
);


var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__,jobs,results,process,async){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__,jobs,results,process,async){
return (function (state_25593){
var state_val_25594 = (state_25593[(1)]);
if((state_val_25594 === (7))){
var inst_25589 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25595_25661 = state_25593__$1;
(statearr_25595_25661[(2)] = inst_25589);

(statearr_25595_25661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (20))){
var state_25593__$1 = state_25593;
var statearr_25596_25662 = state_25593__$1;
(statearr_25596_25662[(2)] = null);

(statearr_25596_25662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (1))){
var state_25593__$1 = state_25593;
var statearr_25597_25663 = state_25593__$1;
(statearr_25597_25663[(2)] = null);

(statearr_25597_25663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (4))){
var inst_25558 = (state_25593[(7)]);
var inst_25558__$1 = (state_25593[(2)]);
var inst_25559 = (inst_25558__$1 == null);
var state_25593__$1 = (function (){var statearr_25598 = state_25593;
(statearr_25598[(7)] = inst_25558__$1);

return statearr_25598;
})();
if(cljs.core.truth_(inst_25559)){
var statearr_25599_25664 = state_25593__$1;
(statearr_25599_25664[(1)] = (5));

} else {
var statearr_25600_25665 = state_25593__$1;
(statearr_25600_25665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (15))){
var inst_25571 = (state_25593[(8)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25593__$1,(18),to,inst_25571);
} else {
if((state_val_25594 === (21))){
var inst_25584 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25601_25666 = state_25593__$1;
(statearr_25601_25666[(2)] = inst_25584);

(statearr_25601_25666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (13))){
var inst_25586 = (state_25593[(2)]);
var state_25593__$1 = (function (){var statearr_25602 = state_25593;
(statearr_25602[(9)] = inst_25586);

return statearr_25602;
})();
var statearr_25603_25667 = state_25593__$1;
(statearr_25603_25667[(2)] = null);

(statearr_25603_25667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (6))){
var inst_25558 = (state_25593[(7)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25593__$1,(11),inst_25558);
} else {
if((state_val_25594 === (17))){
var inst_25579 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
if(cljs.core.truth_(inst_25579)){
var statearr_25604_25668 = state_25593__$1;
(statearr_25604_25668[(1)] = (19));

} else {
var statearr_25605_25669 = state_25593__$1;
(statearr_25605_25669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (3))){
var inst_25591 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25593__$1,inst_25591);
} else {
if((state_val_25594 === (12))){
var inst_25568 = (state_25593[(10)]);
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25593__$1,(14),inst_25568);
} else {
if((state_val_25594 === (2))){
var state_25593__$1 = state_25593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25593__$1,(4),results);
} else {
if((state_val_25594 === (19))){
var state_25593__$1 = state_25593;
var statearr_25606_25670 = state_25593__$1;
(statearr_25606_25670[(2)] = null);

(statearr_25606_25670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (11))){
var inst_25568 = (state_25593[(2)]);
var state_25593__$1 = (function (){var statearr_25607 = state_25593;
(statearr_25607[(10)] = inst_25568);

return statearr_25607;
})();
var statearr_25608_25671 = state_25593__$1;
(statearr_25608_25671[(2)] = null);

(statearr_25608_25671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (9))){
var state_25593__$1 = state_25593;
var statearr_25609_25672 = state_25593__$1;
(statearr_25609_25672[(2)] = null);

(statearr_25609_25672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (5))){
var state_25593__$1 = state_25593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25610_25673 = state_25593__$1;
(statearr_25610_25673[(1)] = (8));

} else {
var statearr_25611_25674 = state_25593__$1;
(statearr_25611_25674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (14))){
var inst_25571 = (state_25593[(8)]);
var inst_25573 = (state_25593[(11)]);
var inst_25571__$1 = (state_25593[(2)]);
var inst_25572 = (inst_25571__$1 == null);
var inst_25573__$1 = cljs.core.not.call(null,inst_25572);
var state_25593__$1 = (function (){var statearr_25612 = state_25593;
(statearr_25612[(8)] = inst_25571__$1);

(statearr_25612[(11)] = inst_25573__$1);

return statearr_25612;
})();
if(inst_25573__$1){
var statearr_25613_25675 = state_25593__$1;
(statearr_25613_25675[(1)] = (15));

} else {
var statearr_25614_25676 = state_25593__$1;
(statearr_25614_25676[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (16))){
var inst_25573 = (state_25593[(11)]);
var state_25593__$1 = state_25593;
var statearr_25615_25677 = state_25593__$1;
(statearr_25615_25677[(2)] = inst_25573);

(statearr_25615_25677[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (10))){
var inst_25565 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25616_25678 = state_25593__$1;
(statearr_25616_25678[(2)] = inst_25565);

(statearr_25616_25678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (18))){
var inst_25576 = (state_25593[(2)]);
var state_25593__$1 = state_25593;
var statearr_25617_25679 = state_25593__$1;
(statearr_25617_25679[(2)] = inst_25576);

(statearr_25617_25679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (8))){
var inst_25562 = cljs.core.async.close_BANG_.call(null,to);
var state_25593__$1 = state_25593;
var statearr_25618_25680 = state_25593__$1;
(statearr_25618_25680[(2)] = inst_25562);

(statearr_25618_25680[(1)] = (10));


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
});})(c__19810__auto__,jobs,results,process,async))
;
return ((function (switch__19745__auto__,c__19810__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0 = (function (){
var statearr_25622 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__);

(statearr_25622[(1)] = (1));

return statearr_25622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1 = (function (state_25593){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25623){if((e25623 instanceof Object)){
var ex__19749__auto__ = e25623;
var statearr_25624_25681 = state_25593;
(statearr_25624_25681[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25682 = state_25593;
state_25593 = G__25682;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__ = function(state_25593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1.call(this,state_25593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__,jobs,results,process,async))
})();
var state__19812__auto__ = (function (){var statearr_25625 = f__19811__auto__.call(null);
(statearr_25625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_25625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__,jobs,results,process,async))
);

return c__19810__auto__;
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
var args25683 = [];
var len__17395__auto___25686 = arguments.length;
var i__17396__auto___25687 = (0);
while(true){
if((i__17396__auto___25687 < len__17395__auto___25686)){
args25683.push((arguments[i__17396__auto___25687]));

var G__25688 = (i__17396__auto___25687 + (1));
i__17396__auto___25687 = G__25688;
continue;
} else {
}
break;
}

var G__25685 = args25683.length;
switch (G__25685) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25683.length)].join('')));

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
var args25690 = [];
var len__17395__auto___25693 = arguments.length;
var i__17396__auto___25694 = (0);
while(true){
if((i__17396__auto___25694 < len__17395__auto___25693)){
args25690.push((arguments[i__17396__auto___25694]));

var G__25695 = (i__17396__auto___25694 + (1));
i__17396__auto___25694 = G__25695;
continue;
} else {
}
break;
}

var G__25692 = args25690.length;
switch (G__25692) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25690.length)].join('')));

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
var args25697 = [];
var len__17395__auto___25750 = arguments.length;
var i__17396__auto___25751 = (0);
while(true){
if((i__17396__auto___25751 < len__17395__auto___25750)){
args25697.push((arguments[i__17396__auto___25751]));

var G__25752 = (i__17396__auto___25751 + (1));
i__17396__auto___25751 = G__25752;
continue;
} else {
}
break;
}

var G__25699 = args25697.length;
switch (G__25699) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25697.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19810__auto___25754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___25754,tc,fc){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___25754,tc,fc){
return (function (state_25725){
var state_val_25726 = (state_25725[(1)]);
if((state_val_25726 === (7))){
var inst_25721 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
var statearr_25727_25755 = state_25725__$1;
(statearr_25727_25755[(2)] = inst_25721);

(statearr_25727_25755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (1))){
var state_25725__$1 = state_25725;
var statearr_25728_25756 = state_25725__$1;
(statearr_25728_25756[(2)] = null);

(statearr_25728_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (4))){
var inst_25702 = (state_25725[(7)]);
var inst_25702__$1 = (state_25725[(2)]);
var inst_25703 = (inst_25702__$1 == null);
var state_25725__$1 = (function (){var statearr_25729 = state_25725;
(statearr_25729[(7)] = inst_25702__$1);

return statearr_25729;
})();
if(cljs.core.truth_(inst_25703)){
var statearr_25730_25757 = state_25725__$1;
(statearr_25730_25757[(1)] = (5));

} else {
var statearr_25731_25758 = state_25725__$1;
(statearr_25731_25758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (13))){
var state_25725__$1 = state_25725;
var statearr_25732_25759 = state_25725__$1;
(statearr_25732_25759[(2)] = null);

(statearr_25732_25759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (6))){
var inst_25702 = (state_25725[(7)]);
var inst_25708 = p.call(null,inst_25702);
var state_25725__$1 = state_25725;
if(cljs.core.truth_(inst_25708)){
var statearr_25733_25760 = state_25725__$1;
(statearr_25733_25760[(1)] = (9));

} else {
var statearr_25734_25761 = state_25725__$1;
(statearr_25734_25761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (3))){
var inst_25723 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25725__$1,inst_25723);
} else {
if((state_val_25726 === (12))){
var state_25725__$1 = state_25725;
var statearr_25735_25762 = state_25725__$1;
(statearr_25735_25762[(2)] = null);

(statearr_25735_25762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (2))){
var state_25725__$1 = state_25725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25725__$1,(4),ch);
} else {
if((state_val_25726 === (11))){
var inst_25702 = (state_25725[(7)]);
var inst_25712 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25725__$1,(8),inst_25712,inst_25702);
} else {
if((state_val_25726 === (9))){
var state_25725__$1 = state_25725;
var statearr_25736_25763 = state_25725__$1;
(statearr_25736_25763[(2)] = tc);

(statearr_25736_25763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (5))){
var inst_25705 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25706 = cljs.core.async.close_BANG_.call(null,fc);
var state_25725__$1 = (function (){var statearr_25737 = state_25725;
(statearr_25737[(8)] = inst_25705);

return statearr_25737;
})();
var statearr_25738_25764 = state_25725__$1;
(statearr_25738_25764[(2)] = inst_25706);

(statearr_25738_25764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (14))){
var inst_25719 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
var statearr_25739_25765 = state_25725__$1;
(statearr_25739_25765[(2)] = inst_25719);

(statearr_25739_25765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (10))){
var state_25725__$1 = state_25725;
var statearr_25740_25766 = state_25725__$1;
(statearr_25740_25766[(2)] = fc);

(statearr_25740_25766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25726 === (8))){
var inst_25714 = (state_25725[(2)]);
var state_25725__$1 = state_25725;
if(cljs.core.truth_(inst_25714)){
var statearr_25741_25767 = state_25725__$1;
(statearr_25741_25767[(1)] = (12));

} else {
var statearr_25742_25768 = state_25725__$1;
(statearr_25742_25768[(1)] = (13));

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
});})(c__19810__auto___25754,tc,fc))
;
return ((function (switch__19745__auto__,c__19810__auto___25754,tc,fc){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_25746 = [null,null,null,null,null,null,null,null,null];
(statearr_25746[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_25746[(1)] = (1));

return statearr_25746;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_25725){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25747){if((e25747 instanceof Object)){
var ex__19749__auto__ = e25747;
var statearr_25748_25769 = state_25725;
(statearr_25748_25769[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25770 = state_25725;
state_25725 = G__25770;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_25725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_25725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___25754,tc,fc))
})();
var state__19812__auto__ = (function (){var statearr_25749 = f__19811__auto__.call(null);
(statearr_25749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___25754);

return statearr_25749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___25754,tc,fc))
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
var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__){
return (function (state_25817){
var state_val_25818 = (state_25817[(1)]);
if((state_val_25818 === (1))){
var inst_25803 = init;
var state_25817__$1 = (function (){var statearr_25819 = state_25817;
(statearr_25819[(7)] = inst_25803);

return statearr_25819;
})();
var statearr_25820_25835 = state_25817__$1;
(statearr_25820_25835[(2)] = null);

(statearr_25820_25835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (2))){
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25817__$1,(4),ch);
} else {
if((state_val_25818 === (3))){
var inst_25815 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25817__$1,inst_25815);
} else {
if((state_val_25818 === (4))){
var inst_25806 = (state_25817[(8)]);
var inst_25806__$1 = (state_25817[(2)]);
var inst_25807 = (inst_25806__$1 == null);
var state_25817__$1 = (function (){var statearr_25821 = state_25817;
(statearr_25821[(8)] = inst_25806__$1);

return statearr_25821;
})();
if(cljs.core.truth_(inst_25807)){
var statearr_25822_25836 = state_25817__$1;
(statearr_25822_25836[(1)] = (5));

} else {
var statearr_25823_25837 = state_25817__$1;
(statearr_25823_25837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (5))){
var inst_25803 = (state_25817[(7)]);
var state_25817__$1 = state_25817;
var statearr_25824_25838 = state_25817__$1;
(statearr_25824_25838[(2)] = inst_25803);

(statearr_25824_25838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (6))){
var inst_25803 = (state_25817[(7)]);
var inst_25806 = (state_25817[(8)]);
var inst_25810 = f.call(null,inst_25803,inst_25806);
var inst_25803__$1 = inst_25810;
var state_25817__$1 = (function (){var statearr_25825 = state_25817;
(statearr_25825[(7)] = inst_25803__$1);

return statearr_25825;
})();
var statearr_25826_25839 = state_25817__$1;
(statearr_25826_25839[(2)] = null);

(statearr_25826_25839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25818 === (7))){
var inst_25813 = (state_25817[(2)]);
var state_25817__$1 = state_25817;
var statearr_25827_25840 = state_25817__$1;
(statearr_25827_25840[(2)] = inst_25813);

(statearr_25827_25840[(1)] = (3));


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
});})(c__19810__auto__))
;
return ((function (switch__19745__auto__,c__19810__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19746__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19746__auto____0 = (function (){
var statearr_25831 = [null,null,null,null,null,null,null,null,null];
(statearr_25831[(0)] = cljs$core$async$reduce_$_state_machine__19746__auto__);

(statearr_25831[(1)] = (1));

return statearr_25831;
});
var cljs$core$async$reduce_$_state_machine__19746__auto____1 = (function (state_25817){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25832){if((e25832 instanceof Object)){
var ex__19749__auto__ = e25832;
var statearr_25833_25841 = state_25817;
(statearr_25833_25841[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25842 = state_25817;
state_25817 = G__25842;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19746__auto__ = function(state_25817){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19746__auto____1.call(this,state_25817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19746__auto____0;
cljs$core$async$reduce_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19746__auto____1;
return cljs$core$async$reduce_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__))
})();
var state__19812__auto__ = (function (){var statearr_25834 = f__19811__auto__.call(null);
(statearr_25834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_25834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__))
);

return c__19810__auto__;
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
var args25843 = [];
var len__17395__auto___25895 = arguments.length;
var i__17396__auto___25896 = (0);
while(true){
if((i__17396__auto___25896 < len__17395__auto___25895)){
args25843.push((arguments[i__17396__auto___25896]));

var G__25897 = (i__17396__auto___25896 + (1));
i__17396__auto___25896 = G__25897;
continue;
} else {
}
break;
}

var G__25845 = args25843.length;
switch (G__25845) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25843.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__){
return (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (7))){
var inst_25852 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25872_25899 = state_25870__$1;
(statearr_25872_25899[(2)] = inst_25852);

(statearr_25872_25899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (1))){
var inst_25846 = cljs.core.seq.call(null,coll);
var inst_25847 = inst_25846;
var state_25870__$1 = (function (){var statearr_25873 = state_25870;
(statearr_25873[(7)] = inst_25847);

return statearr_25873;
})();
var statearr_25874_25900 = state_25870__$1;
(statearr_25874_25900[(2)] = null);

(statearr_25874_25900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (4))){
var inst_25847 = (state_25870[(7)]);
var inst_25850 = cljs.core.first.call(null,inst_25847);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25870__$1,(7),ch,inst_25850);
} else {
if((state_val_25871 === (13))){
var inst_25864 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25875_25901 = state_25870__$1;
(statearr_25875_25901[(2)] = inst_25864);

(statearr_25875_25901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (6))){
var inst_25855 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25855)){
var statearr_25876_25902 = state_25870__$1;
(statearr_25876_25902[(1)] = (8));

} else {
var statearr_25877_25903 = state_25870__$1;
(statearr_25877_25903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (3))){
var inst_25868 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25870__$1,inst_25868);
} else {
if((state_val_25871 === (12))){
var state_25870__$1 = state_25870;
var statearr_25878_25904 = state_25870__$1;
(statearr_25878_25904[(2)] = null);

(statearr_25878_25904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (2))){
var inst_25847 = (state_25870[(7)]);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25847)){
var statearr_25879_25905 = state_25870__$1;
(statearr_25879_25905[(1)] = (4));

} else {
var statearr_25880_25906 = state_25870__$1;
(statearr_25880_25906[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (11))){
var inst_25861 = cljs.core.async.close_BANG_.call(null,ch);
var state_25870__$1 = state_25870;
var statearr_25881_25907 = state_25870__$1;
(statearr_25881_25907[(2)] = inst_25861);

(statearr_25881_25907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (9))){
var state_25870__$1 = state_25870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25882_25908 = state_25870__$1;
(statearr_25882_25908[(1)] = (11));

} else {
var statearr_25883_25909 = state_25870__$1;
(statearr_25883_25909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (5))){
var inst_25847 = (state_25870[(7)]);
var state_25870__$1 = state_25870;
var statearr_25884_25910 = state_25870__$1;
(statearr_25884_25910[(2)] = inst_25847);

(statearr_25884_25910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (10))){
var inst_25866 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25885_25911 = state_25870__$1;
(statearr_25885_25911[(2)] = inst_25866);

(statearr_25885_25911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (8))){
var inst_25847 = (state_25870[(7)]);
var inst_25857 = cljs.core.next.call(null,inst_25847);
var inst_25847__$1 = inst_25857;
var state_25870__$1 = (function (){var statearr_25886 = state_25870;
(statearr_25886[(7)] = inst_25847__$1);

return statearr_25886;
})();
var statearr_25887_25912 = state_25870__$1;
(statearr_25887_25912[(2)] = null);

(statearr_25887_25912[(1)] = (2));


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
});})(c__19810__auto__))
;
return ((function (switch__19745__auto__,c__19810__auto__){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_25891 = [null,null,null,null,null,null,null,null];
(statearr_25891[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_25891[(1)] = (1));

return statearr_25891;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_25870){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_25870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e25892){if((e25892 instanceof Object)){
var ex__19749__auto__ = e25892;
var statearr_25893_25913 = state_25870;
(statearr_25893_25913[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25914 = state_25870;
state_25870 = G__25914;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__))
})();
var state__19812__auto__ = (function (){var statearr_25894 = f__19811__auto__.call(null);
(statearr_25894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_25894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__))
);

return c__19810__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async26136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26136 = (function (mult,ch,cs,meta26137){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26137 = meta26137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26138,meta26137__$1){
var self__ = this;
var _26138__$1 = this;
return (new cljs.core.async.t_cljs$core$async26136(self__.mult,self__.ch,self__.cs,meta26137__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26138){
var self__ = this;
var _26138__$1 = this;
return self__.meta26137;
});})(cs))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26136.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26136.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26137","meta26137",1292214839,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26136";

cljs.core.async.t_cljs$core$async26136.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26136");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26136 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26136(mult__$1,ch__$1,cs__$1,meta26137){
return (new cljs.core.async.t_cljs$core$async26136(mult__$1,ch__$1,cs__$1,meta26137));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26136(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19810__auto___26357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___26357,cs,m,dchan,dctr,done){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___26357,cs,m,dchan,dctr,done){
return (function (state_26269){
var state_val_26270 = (state_26269[(1)]);
if((state_val_26270 === (7))){
var inst_26265 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26271_26358 = state_26269__$1;
(statearr_26271_26358[(2)] = inst_26265);

(statearr_26271_26358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (20))){
var inst_26170 = (state_26269[(7)]);
var inst_26180 = cljs.core.first.call(null,inst_26170);
var inst_26181 = cljs.core.nth.call(null,inst_26180,(0),null);
var inst_26182 = cljs.core.nth.call(null,inst_26180,(1),null);
var state_26269__$1 = (function (){var statearr_26272 = state_26269;
(statearr_26272[(8)] = inst_26181);

return statearr_26272;
})();
if(cljs.core.truth_(inst_26182)){
var statearr_26273_26359 = state_26269__$1;
(statearr_26273_26359[(1)] = (22));

} else {
var statearr_26274_26360 = state_26269__$1;
(statearr_26274_26360[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (27))){
var inst_26212 = (state_26269[(9)]);
var inst_26210 = (state_26269[(10)]);
var inst_26141 = (state_26269[(11)]);
var inst_26217 = (state_26269[(12)]);
var inst_26217__$1 = cljs.core._nth.call(null,inst_26210,inst_26212);
var inst_26218 = cljs.core.async.put_BANG_.call(null,inst_26217__$1,inst_26141,done);
var state_26269__$1 = (function (){var statearr_26275 = state_26269;
(statearr_26275[(12)] = inst_26217__$1);

return statearr_26275;
})();
if(cljs.core.truth_(inst_26218)){
var statearr_26276_26361 = state_26269__$1;
(statearr_26276_26361[(1)] = (30));

} else {
var statearr_26277_26362 = state_26269__$1;
(statearr_26277_26362[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (1))){
var state_26269__$1 = state_26269;
var statearr_26278_26363 = state_26269__$1;
(statearr_26278_26363[(2)] = null);

(statearr_26278_26363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (24))){
var inst_26170 = (state_26269[(7)]);
var inst_26187 = (state_26269[(2)]);
var inst_26188 = cljs.core.next.call(null,inst_26170);
var inst_26150 = inst_26188;
var inst_26151 = null;
var inst_26152 = (0);
var inst_26153 = (0);
var state_26269__$1 = (function (){var statearr_26279 = state_26269;
(statearr_26279[(13)] = inst_26150);

(statearr_26279[(14)] = inst_26152);

(statearr_26279[(15)] = inst_26151);

(statearr_26279[(16)] = inst_26153);

(statearr_26279[(17)] = inst_26187);

return statearr_26279;
})();
var statearr_26280_26364 = state_26269__$1;
(statearr_26280_26364[(2)] = null);

(statearr_26280_26364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (39))){
var state_26269__$1 = state_26269;
var statearr_26284_26365 = state_26269__$1;
(statearr_26284_26365[(2)] = null);

(statearr_26284_26365[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (4))){
var inst_26141 = (state_26269[(11)]);
var inst_26141__$1 = (state_26269[(2)]);
var inst_26142 = (inst_26141__$1 == null);
var state_26269__$1 = (function (){var statearr_26285 = state_26269;
(statearr_26285[(11)] = inst_26141__$1);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26142)){
var statearr_26286_26366 = state_26269__$1;
(statearr_26286_26366[(1)] = (5));

} else {
var statearr_26287_26367 = state_26269__$1;
(statearr_26287_26367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (15))){
var inst_26150 = (state_26269[(13)]);
var inst_26152 = (state_26269[(14)]);
var inst_26151 = (state_26269[(15)]);
var inst_26153 = (state_26269[(16)]);
var inst_26166 = (state_26269[(2)]);
var inst_26167 = (inst_26153 + (1));
var tmp26281 = inst_26150;
var tmp26282 = inst_26152;
var tmp26283 = inst_26151;
var inst_26150__$1 = tmp26281;
var inst_26151__$1 = tmp26283;
var inst_26152__$1 = tmp26282;
var inst_26153__$1 = inst_26167;
var state_26269__$1 = (function (){var statearr_26288 = state_26269;
(statearr_26288[(13)] = inst_26150__$1);

(statearr_26288[(18)] = inst_26166);

(statearr_26288[(14)] = inst_26152__$1);

(statearr_26288[(15)] = inst_26151__$1);

(statearr_26288[(16)] = inst_26153__$1);

return statearr_26288;
})();
var statearr_26289_26368 = state_26269__$1;
(statearr_26289_26368[(2)] = null);

(statearr_26289_26368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (21))){
var inst_26191 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26293_26369 = state_26269__$1;
(statearr_26293_26369[(2)] = inst_26191);

(statearr_26293_26369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (31))){
var inst_26217 = (state_26269[(12)]);
var inst_26221 = done.call(null,null);
var inst_26222 = cljs.core.async.untap_STAR_.call(null,m,inst_26217);
var state_26269__$1 = (function (){var statearr_26294 = state_26269;
(statearr_26294[(19)] = inst_26221);

return statearr_26294;
})();
var statearr_26295_26370 = state_26269__$1;
(statearr_26295_26370[(2)] = inst_26222);

(statearr_26295_26370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (32))){
var inst_26211 = (state_26269[(20)]);
var inst_26212 = (state_26269[(9)]);
var inst_26209 = (state_26269[(21)]);
var inst_26210 = (state_26269[(10)]);
var inst_26224 = (state_26269[(2)]);
var inst_26225 = (inst_26212 + (1));
var tmp26290 = inst_26211;
var tmp26291 = inst_26209;
var tmp26292 = inst_26210;
var inst_26209__$1 = tmp26291;
var inst_26210__$1 = tmp26292;
var inst_26211__$1 = tmp26290;
var inst_26212__$1 = inst_26225;
var state_26269__$1 = (function (){var statearr_26296 = state_26269;
(statearr_26296[(20)] = inst_26211__$1);

(statearr_26296[(9)] = inst_26212__$1);

(statearr_26296[(21)] = inst_26209__$1);

(statearr_26296[(22)] = inst_26224);

(statearr_26296[(10)] = inst_26210__$1);

return statearr_26296;
})();
var statearr_26297_26371 = state_26269__$1;
(statearr_26297_26371[(2)] = null);

(statearr_26297_26371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (40))){
var inst_26237 = (state_26269[(23)]);
var inst_26241 = done.call(null,null);
var inst_26242 = cljs.core.async.untap_STAR_.call(null,m,inst_26237);
var state_26269__$1 = (function (){var statearr_26298 = state_26269;
(statearr_26298[(24)] = inst_26241);

return statearr_26298;
})();
var statearr_26299_26372 = state_26269__$1;
(statearr_26299_26372[(2)] = inst_26242);

(statearr_26299_26372[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (33))){
var inst_26228 = (state_26269[(25)]);
var inst_26230 = cljs.core.chunked_seq_QMARK_.call(null,inst_26228);
var state_26269__$1 = state_26269;
if(inst_26230){
var statearr_26300_26373 = state_26269__$1;
(statearr_26300_26373[(1)] = (36));

} else {
var statearr_26301_26374 = state_26269__$1;
(statearr_26301_26374[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (13))){
var inst_26160 = (state_26269[(26)]);
var inst_26163 = cljs.core.async.close_BANG_.call(null,inst_26160);
var state_26269__$1 = state_26269;
var statearr_26302_26375 = state_26269__$1;
(statearr_26302_26375[(2)] = inst_26163);

(statearr_26302_26375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (22))){
var inst_26181 = (state_26269[(8)]);
var inst_26184 = cljs.core.async.close_BANG_.call(null,inst_26181);
var state_26269__$1 = state_26269;
var statearr_26303_26376 = state_26269__$1;
(statearr_26303_26376[(2)] = inst_26184);

(statearr_26303_26376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (36))){
var inst_26228 = (state_26269[(25)]);
var inst_26232 = cljs.core.chunk_first.call(null,inst_26228);
var inst_26233 = cljs.core.chunk_rest.call(null,inst_26228);
var inst_26234 = cljs.core.count.call(null,inst_26232);
var inst_26209 = inst_26233;
var inst_26210 = inst_26232;
var inst_26211 = inst_26234;
var inst_26212 = (0);
var state_26269__$1 = (function (){var statearr_26304 = state_26269;
(statearr_26304[(20)] = inst_26211);

(statearr_26304[(9)] = inst_26212);

(statearr_26304[(21)] = inst_26209);

(statearr_26304[(10)] = inst_26210);

return statearr_26304;
})();
var statearr_26305_26377 = state_26269__$1;
(statearr_26305_26377[(2)] = null);

(statearr_26305_26377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (41))){
var inst_26228 = (state_26269[(25)]);
var inst_26244 = (state_26269[(2)]);
var inst_26245 = cljs.core.next.call(null,inst_26228);
var inst_26209 = inst_26245;
var inst_26210 = null;
var inst_26211 = (0);
var inst_26212 = (0);
var state_26269__$1 = (function (){var statearr_26306 = state_26269;
(statearr_26306[(20)] = inst_26211);

(statearr_26306[(27)] = inst_26244);

(statearr_26306[(9)] = inst_26212);

(statearr_26306[(21)] = inst_26209);

(statearr_26306[(10)] = inst_26210);

return statearr_26306;
})();
var statearr_26307_26378 = state_26269__$1;
(statearr_26307_26378[(2)] = null);

(statearr_26307_26378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (43))){
var state_26269__$1 = state_26269;
var statearr_26308_26379 = state_26269__$1;
(statearr_26308_26379[(2)] = null);

(statearr_26308_26379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (29))){
var inst_26253 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26309_26380 = state_26269__$1;
(statearr_26309_26380[(2)] = inst_26253);

(statearr_26309_26380[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (44))){
var inst_26262 = (state_26269[(2)]);
var state_26269__$1 = (function (){var statearr_26310 = state_26269;
(statearr_26310[(28)] = inst_26262);

return statearr_26310;
})();
var statearr_26311_26381 = state_26269__$1;
(statearr_26311_26381[(2)] = null);

(statearr_26311_26381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (6))){
var inst_26201 = (state_26269[(29)]);
var inst_26200 = cljs.core.deref.call(null,cs);
var inst_26201__$1 = cljs.core.keys.call(null,inst_26200);
var inst_26202 = cljs.core.count.call(null,inst_26201__$1);
var inst_26203 = cljs.core.reset_BANG_.call(null,dctr,inst_26202);
var inst_26208 = cljs.core.seq.call(null,inst_26201__$1);
var inst_26209 = inst_26208;
var inst_26210 = null;
var inst_26211 = (0);
var inst_26212 = (0);
var state_26269__$1 = (function (){var statearr_26312 = state_26269;
(statearr_26312[(20)] = inst_26211);

(statearr_26312[(9)] = inst_26212);

(statearr_26312[(21)] = inst_26209);

(statearr_26312[(10)] = inst_26210);

(statearr_26312[(29)] = inst_26201__$1);

(statearr_26312[(30)] = inst_26203);

return statearr_26312;
})();
var statearr_26313_26382 = state_26269__$1;
(statearr_26313_26382[(2)] = null);

(statearr_26313_26382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (28))){
var inst_26228 = (state_26269[(25)]);
var inst_26209 = (state_26269[(21)]);
var inst_26228__$1 = cljs.core.seq.call(null,inst_26209);
var state_26269__$1 = (function (){var statearr_26314 = state_26269;
(statearr_26314[(25)] = inst_26228__$1);

return statearr_26314;
})();
if(inst_26228__$1){
var statearr_26315_26383 = state_26269__$1;
(statearr_26315_26383[(1)] = (33));

} else {
var statearr_26316_26384 = state_26269__$1;
(statearr_26316_26384[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (25))){
var inst_26211 = (state_26269[(20)]);
var inst_26212 = (state_26269[(9)]);
var inst_26214 = (inst_26212 < inst_26211);
var inst_26215 = inst_26214;
var state_26269__$1 = state_26269;
if(cljs.core.truth_(inst_26215)){
var statearr_26317_26385 = state_26269__$1;
(statearr_26317_26385[(1)] = (27));

} else {
var statearr_26318_26386 = state_26269__$1;
(statearr_26318_26386[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (34))){
var state_26269__$1 = state_26269;
var statearr_26319_26387 = state_26269__$1;
(statearr_26319_26387[(2)] = null);

(statearr_26319_26387[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (17))){
var state_26269__$1 = state_26269;
var statearr_26320_26388 = state_26269__$1;
(statearr_26320_26388[(2)] = null);

(statearr_26320_26388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (3))){
var inst_26267 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26269__$1,inst_26267);
} else {
if((state_val_26270 === (12))){
var inst_26196 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26321_26389 = state_26269__$1;
(statearr_26321_26389[(2)] = inst_26196);

(statearr_26321_26389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (2))){
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26269__$1,(4),ch);
} else {
if((state_val_26270 === (23))){
var state_26269__$1 = state_26269;
var statearr_26322_26390 = state_26269__$1;
(statearr_26322_26390[(2)] = null);

(statearr_26322_26390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (35))){
var inst_26251 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26323_26391 = state_26269__$1;
(statearr_26323_26391[(2)] = inst_26251);

(statearr_26323_26391[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (19))){
var inst_26170 = (state_26269[(7)]);
var inst_26174 = cljs.core.chunk_first.call(null,inst_26170);
var inst_26175 = cljs.core.chunk_rest.call(null,inst_26170);
var inst_26176 = cljs.core.count.call(null,inst_26174);
var inst_26150 = inst_26175;
var inst_26151 = inst_26174;
var inst_26152 = inst_26176;
var inst_26153 = (0);
var state_26269__$1 = (function (){var statearr_26324 = state_26269;
(statearr_26324[(13)] = inst_26150);

(statearr_26324[(14)] = inst_26152);

(statearr_26324[(15)] = inst_26151);

(statearr_26324[(16)] = inst_26153);

return statearr_26324;
})();
var statearr_26325_26392 = state_26269__$1;
(statearr_26325_26392[(2)] = null);

(statearr_26325_26392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (11))){
var inst_26150 = (state_26269[(13)]);
var inst_26170 = (state_26269[(7)]);
var inst_26170__$1 = cljs.core.seq.call(null,inst_26150);
var state_26269__$1 = (function (){var statearr_26326 = state_26269;
(statearr_26326[(7)] = inst_26170__$1);

return statearr_26326;
})();
if(inst_26170__$1){
var statearr_26327_26393 = state_26269__$1;
(statearr_26327_26393[(1)] = (16));

} else {
var statearr_26328_26394 = state_26269__$1;
(statearr_26328_26394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (9))){
var inst_26198 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26329_26395 = state_26269__$1;
(statearr_26329_26395[(2)] = inst_26198);

(statearr_26329_26395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (5))){
var inst_26148 = cljs.core.deref.call(null,cs);
var inst_26149 = cljs.core.seq.call(null,inst_26148);
var inst_26150 = inst_26149;
var inst_26151 = null;
var inst_26152 = (0);
var inst_26153 = (0);
var state_26269__$1 = (function (){var statearr_26330 = state_26269;
(statearr_26330[(13)] = inst_26150);

(statearr_26330[(14)] = inst_26152);

(statearr_26330[(15)] = inst_26151);

(statearr_26330[(16)] = inst_26153);

return statearr_26330;
})();
var statearr_26331_26396 = state_26269__$1;
(statearr_26331_26396[(2)] = null);

(statearr_26331_26396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (14))){
var state_26269__$1 = state_26269;
var statearr_26332_26397 = state_26269__$1;
(statearr_26332_26397[(2)] = null);

(statearr_26332_26397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (45))){
var inst_26259 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26333_26398 = state_26269__$1;
(statearr_26333_26398[(2)] = inst_26259);

(statearr_26333_26398[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (26))){
var inst_26201 = (state_26269[(29)]);
var inst_26255 = (state_26269[(2)]);
var inst_26256 = cljs.core.seq.call(null,inst_26201);
var state_26269__$1 = (function (){var statearr_26334 = state_26269;
(statearr_26334[(31)] = inst_26255);

return statearr_26334;
})();
if(inst_26256){
var statearr_26335_26399 = state_26269__$1;
(statearr_26335_26399[(1)] = (42));

} else {
var statearr_26336_26400 = state_26269__$1;
(statearr_26336_26400[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (16))){
var inst_26170 = (state_26269[(7)]);
var inst_26172 = cljs.core.chunked_seq_QMARK_.call(null,inst_26170);
var state_26269__$1 = state_26269;
if(inst_26172){
var statearr_26337_26401 = state_26269__$1;
(statearr_26337_26401[(1)] = (19));

} else {
var statearr_26338_26402 = state_26269__$1;
(statearr_26338_26402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (38))){
var inst_26248 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26339_26403 = state_26269__$1;
(statearr_26339_26403[(2)] = inst_26248);

(statearr_26339_26403[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (30))){
var state_26269__$1 = state_26269;
var statearr_26340_26404 = state_26269__$1;
(statearr_26340_26404[(2)] = null);

(statearr_26340_26404[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (10))){
var inst_26151 = (state_26269[(15)]);
var inst_26153 = (state_26269[(16)]);
var inst_26159 = cljs.core._nth.call(null,inst_26151,inst_26153);
var inst_26160 = cljs.core.nth.call(null,inst_26159,(0),null);
var inst_26161 = cljs.core.nth.call(null,inst_26159,(1),null);
var state_26269__$1 = (function (){var statearr_26341 = state_26269;
(statearr_26341[(26)] = inst_26160);

return statearr_26341;
})();
if(cljs.core.truth_(inst_26161)){
var statearr_26342_26405 = state_26269__$1;
(statearr_26342_26405[(1)] = (13));

} else {
var statearr_26343_26406 = state_26269__$1;
(statearr_26343_26406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (18))){
var inst_26194 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26344_26407 = state_26269__$1;
(statearr_26344_26407[(2)] = inst_26194);

(statearr_26344_26407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (42))){
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26269__$1,(45),dchan);
} else {
if((state_val_26270 === (37))){
var inst_26228 = (state_26269[(25)]);
var inst_26141 = (state_26269[(11)]);
var inst_26237 = (state_26269[(23)]);
var inst_26237__$1 = cljs.core.first.call(null,inst_26228);
var inst_26238 = cljs.core.async.put_BANG_.call(null,inst_26237__$1,inst_26141,done);
var state_26269__$1 = (function (){var statearr_26345 = state_26269;
(statearr_26345[(23)] = inst_26237__$1);

return statearr_26345;
})();
if(cljs.core.truth_(inst_26238)){
var statearr_26346_26408 = state_26269__$1;
(statearr_26346_26408[(1)] = (39));

} else {
var statearr_26347_26409 = state_26269__$1;
(statearr_26347_26409[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (8))){
var inst_26152 = (state_26269[(14)]);
var inst_26153 = (state_26269[(16)]);
var inst_26155 = (inst_26153 < inst_26152);
var inst_26156 = inst_26155;
var state_26269__$1 = state_26269;
if(cljs.core.truth_(inst_26156)){
var statearr_26348_26410 = state_26269__$1;
(statearr_26348_26410[(1)] = (10));

} else {
var statearr_26349_26411 = state_26269__$1;
(statearr_26349_26411[(1)] = (11));

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
});})(c__19810__auto___26357,cs,m,dchan,dctr,done))
;
return ((function (switch__19745__auto__,c__19810__auto___26357,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19746__auto__ = null;
var cljs$core$async$mult_$_state_machine__19746__auto____0 = (function (){
var statearr_26353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26353[(0)] = cljs$core$async$mult_$_state_machine__19746__auto__);

(statearr_26353[(1)] = (1));

return statearr_26353;
});
var cljs$core$async$mult_$_state_machine__19746__auto____1 = (function (state_26269){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_26269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e26354){if((e26354 instanceof Object)){
var ex__19749__auto__ = e26354;
var statearr_26355_26412 = state_26269;
(statearr_26355_26412[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26413 = state_26269;
state_26269 = G__26413;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19746__auto__ = function(state_26269){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19746__auto____1.call(this,state_26269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19746__auto____0;
cljs$core$async$mult_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19746__auto____1;
return cljs$core$async$mult_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___26357,cs,m,dchan,dctr,done))
})();
var state__19812__auto__ = (function (){var statearr_26356 = f__19811__auto__.call(null);
(statearr_26356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___26357);

return statearr_26356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___26357,cs,m,dchan,dctr,done))
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
var args26414 = [];
var len__17395__auto___26417 = arguments.length;
var i__17396__auto___26418 = (0);
while(true){
if((i__17396__auto___26418 < len__17395__auto___26417)){
args26414.push((arguments[i__17396__auto___26418]));

var G__26419 = (i__17396__auto___26418 + (1));
i__17396__auto___26418 = G__26419;
continue;
} else {
}
break;
}

var G__26416 = args26414.length;
switch (G__26416) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26414.length)].join('')));

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
var len__17395__auto___26431 = arguments.length;
var i__17396__auto___26432 = (0);
while(true){
if((i__17396__auto___26432 < len__17395__auto___26431)){
args__17402__auto__.push((arguments[i__17396__auto___26432]));

var G__26433 = (i__17396__auto___26432 + (1));
i__17396__auto___26432 = G__26433;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((3) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17403__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26425){
var map__26426 = p__26425;
var map__26426__$1 = ((((!((map__26426 == null)))?((((map__26426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26426):map__26426);
var opts = map__26426__$1;
var statearr_26428_26434 = state;
(statearr_26428_26434[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26426,map__26426__$1,opts){
return (function (val){
var statearr_26429_26435 = state;
(statearr_26429_26435[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26426,map__26426__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26430_26436 = state;
(statearr_26430_26436[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26421){
var G__26422 = cljs.core.first.call(null,seq26421);
var seq26421__$1 = cljs.core.next.call(null,seq26421);
var G__26423 = cljs.core.first.call(null,seq26421__$1);
var seq26421__$2 = cljs.core.next.call(null,seq26421__$1);
var G__26424 = cljs.core.first.call(null,seq26421__$2);
var seq26421__$3 = cljs.core.next.call(null,seq26421__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26422,G__26423,G__26424,seq26421__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26600 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26601){
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
this.meta26601 = meta26601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26602,meta26601__$1){
var self__ = this;
var _26602__$1 = this;
return (new cljs.core.async.t_cljs$core$async26600(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26601__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26602){
var self__ = this;
var _26602__$1 = this;
return self__.meta26601;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26600.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26601","meta26601",173062226,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26600";

cljs.core.async.t_cljs$core$async26600.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26600");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26600 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26600(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26601){
return (new cljs.core.async.t_cljs$core$async26600(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26601));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26600(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19810__auto___26763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___26763,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___26763,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26700){
var state_val_26701 = (state_26700[(1)]);
if((state_val_26701 === (7))){
var inst_26618 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26702_26764 = state_26700__$1;
(statearr_26702_26764[(2)] = inst_26618);

(statearr_26702_26764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (20))){
var inst_26630 = (state_26700[(7)]);
var state_26700__$1 = state_26700;
var statearr_26703_26765 = state_26700__$1;
(statearr_26703_26765[(2)] = inst_26630);

(statearr_26703_26765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (27))){
var state_26700__$1 = state_26700;
var statearr_26704_26766 = state_26700__$1;
(statearr_26704_26766[(2)] = null);

(statearr_26704_26766[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (1))){
var inst_26606 = (state_26700[(8)]);
var inst_26606__$1 = calc_state.call(null);
var inst_26608 = (inst_26606__$1 == null);
var inst_26609 = cljs.core.not.call(null,inst_26608);
var state_26700__$1 = (function (){var statearr_26705 = state_26700;
(statearr_26705[(8)] = inst_26606__$1);

return statearr_26705;
})();
if(inst_26609){
var statearr_26706_26767 = state_26700__$1;
(statearr_26706_26767[(1)] = (2));

} else {
var statearr_26707_26768 = state_26700__$1;
(statearr_26707_26768[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (24))){
var inst_26660 = (state_26700[(9)]);
var inst_26653 = (state_26700[(10)]);
var inst_26674 = (state_26700[(11)]);
var inst_26674__$1 = inst_26653.call(null,inst_26660);
var state_26700__$1 = (function (){var statearr_26708 = state_26700;
(statearr_26708[(11)] = inst_26674__$1);

return statearr_26708;
})();
if(cljs.core.truth_(inst_26674__$1)){
var statearr_26709_26769 = state_26700__$1;
(statearr_26709_26769[(1)] = (29));

} else {
var statearr_26710_26770 = state_26700__$1;
(statearr_26710_26770[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (4))){
var inst_26621 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26621)){
var statearr_26711_26771 = state_26700__$1;
(statearr_26711_26771[(1)] = (8));

} else {
var statearr_26712_26772 = state_26700__$1;
(statearr_26712_26772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (15))){
var inst_26647 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26647)){
var statearr_26713_26773 = state_26700__$1;
(statearr_26713_26773[(1)] = (19));

} else {
var statearr_26714_26774 = state_26700__$1;
(statearr_26714_26774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (21))){
var inst_26652 = (state_26700[(12)]);
var inst_26652__$1 = (state_26700[(2)]);
var inst_26653 = cljs.core.get.call(null,inst_26652__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26654 = cljs.core.get.call(null,inst_26652__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26655 = cljs.core.get.call(null,inst_26652__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26700__$1 = (function (){var statearr_26715 = state_26700;
(statearr_26715[(12)] = inst_26652__$1);

(statearr_26715[(13)] = inst_26654);

(statearr_26715[(10)] = inst_26653);

return statearr_26715;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26700__$1,(22),inst_26655);
} else {
if((state_val_26701 === (31))){
var inst_26682 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26682)){
var statearr_26716_26775 = state_26700__$1;
(statearr_26716_26775[(1)] = (32));

} else {
var statearr_26717_26776 = state_26700__$1;
(statearr_26717_26776[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (32))){
var inst_26659 = (state_26700[(14)]);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26700__$1,(35),out,inst_26659);
} else {
if((state_val_26701 === (33))){
var inst_26652 = (state_26700[(12)]);
var inst_26630 = inst_26652;
var state_26700__$1 = (function (){var statearr_26718 = state_26700;
(statearr_26718[(7)] = inst_26630);

return statearr_26718;
})();
var statearr_26719_26777 = state_26700__$1;
(statearr_26719_26777[(2)] = null);

(statearr_26719_26777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (13))){
var inst_26630 = (state_26700[(7)]);
var inst_26637 = inst_26630.cljs$lang$protocol_mask$partition0$;
var inst_26638 = (inst_26637 & (64));
var inst_26639 = inst_26630.cljs$core$ISeq$;
var inst_26640 = (inst_26638) || (inst_26639);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26640)){
var statearr_26720_26778 = state_26700__$1;
(statearr_26720_26778[(1)] = (16));

} else {
var statearr_26721_26779 = state_26700__$1;
(statearr_26721_26779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (22))){
var inst_26659 = (state_26700[(14)]);
var inst_26660 = (state_26700[(9)]);
var inst_26658 = (state_26700[(2)]);
var inst_26659__$1 = cljs.core.nth.call(null,inst_26658,(0),null);
var inst_26660__$1 = cljs.core.nth.call(null,inst_26658,(1),null);
var inst_26661 = (inst_26659__$1 == null);
var inst_26662 = cljs.core._EQ_.call(null,inst_26660__$1,change);
var inst_26663 = (inst_26661) || (inst_26662);
var state_26700__$1 = (function (){var statearr_26722 = state_26700;
(statearr_26722[(14)] = inst_26659__$1);

(statearr_26722[(9)] = inst_26660__$1);

return statearr_26722;
})();
if(cljs.core.truth_(inst_26663)){
var statearr_26723_26780 = state_26700__$1;
(statearr_26723_26780[(1)] = (23));

} else {
var statearr_26724_26781 = state_26700__$1;
(statearr_26724_26781[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (36))){
var inst_26652 = (state_26700[(12)]);
var inst_26630 = inst_26652;
var state_26700__$1 = (function (){var statearr_26725 = state_26700;
(statearr_26725[(7)] = inst_26630);

return statearr_26725;
})();
var statearr_26726_26782 = state_26700__$1;
(statearr_26726_26782[(2)] = null);

(statearr_26726_26782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (29))){
var inst_26674 = (state_26700[(11)]);
var state_26700__$1 = state_26700;
var statearr_26727_26783 = state_26700__$1;
(statearr_26727_26783[(2)] = inst_26674);

(statearr_26727_26783[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (6))){
var state_26700__$1 = state_26700;
var statearr_26728_26784 = state_26700__$1;
(statearr_26728_26784[(2)] = false);

(statearr_26728_26784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (28))){
var inst_26670 = (state_26700[(2)]);
var inst_26671 = calc_state.call(null);
var inst_26630 = inst_26671;
var state_26700__$1 = (function (){var statearr_26729 = state_26700;
(statearr_26729[(7)] = inst_26630);

(statearr_26729[(15)] = inst_26670);

return statearr_26729;
})();
var statearr_26730_26785 = state_26700__$1;
(statearr_26730_26785[(2)] = null);

(statearr_26730_26785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (25))){
var inst_26696 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26731_26786 = state_26700__$1;
(statearr_26731_26786[(2)] = inst_26696);

(statearr_26731_26786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (34))){
var inst_26694 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26732_26787 = state_26700__$1;
(statearr_26732_26787[(2)] = inst_26694);

(statearr_26732_26787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (17))){
var state_26700__$1 = state_26700;
var statearr_26733_26788 = state_26700__$1;
(statearr_26733_26788[(2)] = false);

(statearr_26733_26788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (3))){
var state_26700__$1 = state_26700;
var statearr_26734_26789 = state_26700__$1;
(statearr_26734_26789[(2)] = false);

(statearr_26734_26789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (12))){
var inst_26698 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26700__$1,inst_26698);
} else {
if((state_val_26701 === (2))){
var inst_26606 = (state_26700[(8)]);
var inst_26611 = inst_26606.cljs$lang$protocol_mask$partition0$;
var inst_26612 = (inst_26611 & (64));
var inst_26613 = inst_26606.cljs$core$ISeq$;
var inst_26614 = (inst_26612) || (inst_26613);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26614)){
var statearr_26735_26790 = state_26700__$1;
(statearr_26735_26790[(1)] = (5));

} else {
var statearr_26736_26791 = state_26700__$1;
(statearr_26736_26791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (23))){
var inst_26659 = (state_26700[(14)]);
var inst_26665 = (inst_26659 == null);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26665)){
var statearr_26737_26792 = state_26700__$1;
(statearr_26737_26792[(1)] = (26));

} else {
var statearr_26738_26793 = state_26700__$1;
(statearr_26738_26793[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (35))){
var inst_26685 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26685)){
var statearr_26739_26794 = state_26700__$1;
(statearr_26739_26794[(1)] = (36));

} else {
var statearr_26740_26795 = state_26700__$1;
(statearr_26740_26795[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (19))){
var inst_26630 = (state_26700[(7)]);
var inst_26649 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26630);
var state_26700__$1 = state_26700;
var statearr_26741_26796 = state_26700__$1;
(statearr_26741_26796[(2)] = inst_26649);

(statearr_26741_26796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (11))){
var inst_26630 = (state_26700[(7)]);
var inst_26634 = (inst_26630 == null);
var inst_26635 = cljs.core.not.call(null,inst_26634);
var state_26700__$1 = state_26700;
if(inst_26635){
var statearr_26742_26797 = state_26700__$1;
(statearr_26742_26797[(1)] = (13));

} else {
var statearr_26743_26798 = state_26700__$1;
(statearr_26743_26798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (9))){
var inst_26606 = (state_26700[(8)]);
var state_26700__$1 = state_26700;
var statearr_26744_26799 = state_26700__$1;
(statearr_26744_26799[(2)] = inst_26606);

(statearr_26744_26799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (5))){
var state_26700__$1 = state_26700;
var statearr_26745_26800 = state_26700__$1;
(statearr_26745_26800[(2)] = true);

(statearr_26745_26800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (14))){
var state_26700__$1 = state_26700;
var statearr_26746_26801 = state_26700__$1;
(statearr_26746_26801[(2)] = false);

(statearr_26746_26801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (26))){
var inst_26660 = (state_26700[(9)]);
var inst_26667 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26660);
var state_26700__$1 = state_26700;
var statearr_26747_26802 = state_26700__$1;
(statearr_26747_26802[(2)] = inst_26667);

(statearr_26747_26802[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (16))){
var state_26700__$1 = state_26700;
var statearr_26748_26803 = state_26700__$1;
(statearr_26748_26803[(2)] = true);

(statearr_26748_26803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (38))){
var inst_26690 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26749_26804 = state_26700__$1;
(statearr_26749_26804[(2)] = inst_26690);

(statearr_26749_26804[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (30))){
var inst_26654 = (state_26700[(13)]);
var inst_26660 = (state_26700[(9)]);
var inst_26653 = (state_26700[(10)]);
var inst_26677 = cljs.core.empty_QMARK_.call(null,inst_26653);
var inst_26678 = inst_26654.call(null,inst_26660);
var inst_26679 = cljs.core.not.call(null,inst_26678);
var inst_26680 = (inst_26677) && (inst_26679);
var state_26700__$1 = state_26700;
var statearr_26750_26805 = state_26700__$1;
(statearr_26750_26805[(2)] = inst_26680);

(statearr_26750_26805[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (10))){
var inst_26606 = (state_26700[(8)]);
var inst_26626 = (state_26700[(2)]);
var inst_26627 = cljs.core.get.call(null,inst_26626,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26628 = cljs.core.get.call(null,inst_26626,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26629 = cljs.core.get.call(null,inst_26626,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26630 = inst_26606;
var state_26700__$1 = (function (){var statearr_26751 = state_26700;
(statearr_26751[(16)] = inst_26628);

(statearr_26751[(7)] = inst_26630);

(statearr_26751[(17)] = inst_26629);

(statearr_26751[(18)] = inst_26627);

return statearr_26751;
})();
var statearr_26752_26806 = state_26700__$1;
(statearr_26752_26806[(2)] = null);

(statearr_26752_26806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (18))){
var inst_26644 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26753_26807 = state_26700__$1;
(statearr_26753_26807[(2)] = inst_26644);

(statearr_26753_26807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (37))){
var state_26700__$1 = state_26700;
var statearr_26754_26808 = state_26700__$1;
(statearr_26754_26808[(2)] = null);

(statearr_26754_26808[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (8))){
var inst_26606 = (state_26700[(8)]);
var inst_26623 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26606);
var state_26700__$1 = state_26700;
var statearr_26755_26809 = state_26700__$1;
(statearr_26755_26809[(2)] = inst_26623);

(statearr_26755_26809[(1)] = (10));


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
});})(c__19810__auto___26763,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19745__auto__,c__19810__auto___26763,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19746__auto__ = null;
var cljs$core$async$mix_$_state_machine__19746__auto____0 = (function (){
var statearr_26759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26759[(0)] = cljs$core$async$mix_$_state_machine__19746__auto__);

(statearr_26759[(1)] = (1));

return statearr_26759;
});
var cljs$core$async$mix_$_state_machine__19746__auto____1 = (function (state_26700){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_26700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e26760){if((e26760 instanceof Object)){
var ex__19749__auto__ = e26760;
var statearr_26761_26810 = state_26700;
(statearr_26761_26810[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26811 = state_26700;
state_26700 = G__26811;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19746__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19746__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19746__auto____0;
cljs$core$async$mix_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19746__auto____1;
return cljs$core$async$mix_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___26763,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19812__auto__ = (function (){var statearr_26762 = f__19811__auto__.call(null);
(statearr_26762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___26763);

return statearr_26762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___26763,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26812 = [];
var len__17395__auto___26815 = arguments.length;
var i__17396__auto___26816 = (0);
while(true){
if((i__17396__auto___26816 < len__17395__auto___26815)){
args26812.push((arguments[i__17396__auto___26816]));

var G__26817 = (i__17396__auto___26816 + (1));
i__17396__auto___26816 = G__26817;
continue;
} else {
}
break;
}

var G__26814 = args26812.length;
switch (G__26814) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26812.length)].join('')));

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
var args26820 = [];
var len__17395__auto___26945 = arguments.length;
var i__17396__auto___26946 = (0);
while(true){
if((i__17396__auto___26946 < len__17395__auto___26945)){
args26820.push((arguments[i__17396__auto___26946]));

var G__26947 = (i__17396__auto___26946 + (1));
i__17396__auto___26946 = G__26947;
continue;
} else {
}
break;
}

var G__26822 = args26820.length;
switch (G__26822) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26820.length)].join('')));

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
return (function (p1__26819_SHARP_){
if(cljs.core.truth_(p1__26819_SHARP_.call(null,topic))){
return p1__26819_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26819_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16337__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26823 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26824){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26824 = meta26824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26825,meta26824__$1){
var self__ = this;
var _26825__$1 = this;
return (new cljs.core.async.t_cljs$core$async26823(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26824__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26825){
var self__ = this;
var _26825__$1 = this;
return self__.meta26824;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26823.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26824","meta26824",2052636220,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26823";

cljs.core.async.t_cljs$core$async26823.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26823");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26823 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26823(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26824){
return (new cljs.core.async.t_cljs$core$async26823(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26824));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26823(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19810__auto___26949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___26949,mults,ensure_mult,p){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___26949,mults,ensure_mult,p){
return (function (state_26897){
var state_val_26898 = (state_26897[(1)]);
if((state_val_26898 === (7))){
var inst_26893 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26899_26950 = state_26897__$1;
(statearr_26899_26950[(2)] = inst_26893);

(statearr_26899_26950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (20))){
var state_26897__$1 = state_26897;
var statearr_26900_26951 = state_26897__$1;
(statearr_26900_26951[(2)] = null);

(statearr_26900_26951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (1))){
var state_26897__$1 = state_26897;
var statearr_26901_26952 = state_26897__$1;
(statearr_26901_26952[(2)] = null);

(statearr_26901_26952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (24))){
var inst_26876 = (state_26897[(7)]);
var inst_26885 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26876);
var state_26897__$1 = state_26897;
var statearr_26902_26953 = state_26897__$1;
(statearr_26902_26953[(2)] = inst_26885);

(statearr_26902_26953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (4))){
var inst_26828 = (state_26897[(8)]);
var inst_26828__$1 = (state_26897[(2)]);
var inst_26829 = (inst_26828__$1 == null);
var state_26897__$1 = (function (){var statearr_26903 = state_26897;
(statearr_26903[(8)] = inst_26828__$1);

return statearr_26903;
})();
if(cljs.core.truth_(inst_26829)){
var statearr_26904_26954 = state_26897__$1;
(statearr_26904_26954[(1)] = (5));

} else {
var statearr_26905_26955 = state_26897__$1;
(statearr_26905_26955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (15))){
var inst_26870 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26906_26956 = state_26897__$1;
(statearr_26906_26956[(2)] = inst_26870);

(statearr_26906_26956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (21))){
var inst_26890 = (state_26897[(2)]);
var state_26897__$1 = (function (){var statearr_26907 = state_26897;
(statearr_26907[(9)] = inst_26890);

return statearr_26907;
})();
var statearr_26908_26957 = state_26897__$1;
(statearr_26908_26957[(2)] = null);

(statearr_26908_26957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (13))){
var inst_26852 = (state_26897[(10)]);
var inst_26854 = cljs.core.chunked_seq_QMARK_.call(null,inst_26852);
var state_26897__$1 = state_26897;
if(inst_26854){
var statearr_26909_26958 = state_26897__$1;
(statearr_26909_26958[(1)] = (16));

} else {
var statearr_26910_26959 = state_26897__$1;
(statearr_26910_26959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (22))){
var inst_26882 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
if(cljs.core.truth_(inst_26882)){
var statearr_26911_26960 = state_26897__$1;
(statearr_26911_26960[(1)] = (23));

} else {
var statearr_26912_26961 = state_26897__$1;
(statearr_26912_26961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (6))){
var inst_26876 = (state_26897[(7)]);
var inst_26828 = (state_26897[(8)]);
var inst_26878 = (state_26897[(11)]);
var inst_26876__$1 = topic_fn.call(null,inst_26828);
var inst_26877 = cljs.core.deref.call(null,mults);
var inst_26878__$1 = cljs.core.get.call(null,inst_26877,inst_26876__$1);
var state_26897__$1 = (function (){var statearr_26913 = state_26897;
(statearr_26913[(7)] = inst_26876__$1);

(statearr_26913[(11)] = inst_26878__$1);

return statearr_26913;
})();
if(cljs.core.truth_(inst_26878__$1)){
var statearr_26914_26962 = state_26897__$1;
(statearr_26914_26962[(1)] = (19));

} else {
var statearr_26915_26963 = state_26897__$1;
(statearr_26915_26963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (25))){
var inst_26887 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26916_26964 = state_26897__$1;
(statearr_26916_26964[(2)] = inst_26887);

(statearr_26916_26964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (17))){
var inst_26852 = (state_26897[(10)]);
var inst_26861 = cljs.core.first.call(null,inst_26852);
var inst_26862 = cljs.core.async.muxch_STAR_.call(null,inst_26861);
var inst_26863 = cljs.core.async.close_BANG_.call(null,inst_26862);
var inst_26864 = cljs.core.next.call(null,inst_26852);
var inst_26838 = inst_26864;
var inst_26839 = null;
var inst_26840 = (0);
var inst_26841 = (0);
var state_26897__$1 = (function (){var statearr_26917 = state_26897;
(statearr_26917[(12)] = inst_26863);

(statearr_26917[(13)] = inst_26838);

(statearr_26917[(14)] = inst_26841);

(statearr_26917[(15)] = inst_26839);

(statearr_26917[(16)] = inst_26840);

return statearr_26917;
})();
var statearr_26918_26965 = state_26897__$1;
(statearr_26918_26965[(2)] = null);

(statearr_26918_26965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (3))){
var inst_26895 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26897__$1,inst_26895);
} else {
if((state_val_26898 === (12))){
var inst_26872 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26919_26966 = state_26897__$1;
(statearr_26919_26966[(2)] = inst_26872);

(statearr_26919_26966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (2))){
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26897__$1,(4),ch);
} else {
if((state_val_26898 === (23))){
var state_26897__$1 = state_26897;
var statearr_26920_26967 = state_26897__$1;
(statearr_26920_26967[(2)] = null);

(statearr_26920_26967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (19))){
var inst_26828 = (state_26897[(8)]);
var inst_26878 = (state_26897[(11)]);
var inst_26880 = cljs.core.async.muxch_STAR_.call(null,inst_26878);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26897__$1,(22),inst_26880,inst_26828);
} else {
if((state_val_26898 === (11))){
var inst_26838 = (state_26897[(13)]);
var inst_26852 = (state_26897[(10)]);
var inst_26852__$1 = cljs.core.seq.call(null,inst_26838);
var state_26897__$1 = (function (){var statearr_26921 = state_26897;
(statearr_26921[(10)] = inst_26852__$1);

return statearr_26921;
})();
if(inst_26852__$1){
var statearr_26922_26968 = state_26897__$1;
(statearr_26922_26968[(1)] = (13));

} else {
var statearr_26923_26969 = state_26897__$1;
(statearr_26923_26969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (9))){
var inst_26874 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26924_26970 = state_26897__$1;
(statearr_26924_26970[(2)] = inst_26874);

(statearr_26924_26970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (5))){
var inst_26835 = cljs.core.deref.call(null,mults);
var inst_26836 = cljs.core.vals.call(null,inst_26835);
var inst_26837 = cljs.core.seq.call(null,inst_26836);
var inst_26838 = inst_26837;
var inst_26839 = null;
var inst_26840 = (0);
var inst_26841 = (0);
var state_26897__$1 = (function (){var statearr_26925 = state_26897;
(statearr_26925[(13)] = inst_26838);

(statearr_26925[(14)] = inst_26841);

(statearr_26925[(15)] = inst_26839);

(statearr_26925[(16)] = inst_26840);

return statearr_26925;
})();
var statearr_26926_26971 = state_26897__$1;
(statearr_26926_26971[(2)] = null);

(statearr_26926_26971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (14))){
var state_26897__$1 = state_26897;
var statearr_26930_26972 = state_26897__$1;
(statearr_26930_26972[(2)] = null);

(statearr_26930_26972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (16))){
var inst_26852 = (state_26897[(10)]);
var inst_26856 = cljs.core.chunk_first.call(null,inst_26852);
var inst_26857 = cljs.core.chunk_rest.call(null,inst_26852);
var inst_26858 = cljs.core.count.call(null,inst_26856);
var inst_26838 = inst_26857;
var inst_26839 = inst_26856;
var inst_26840 = inst_26858;
var inst_26841 = (0);
var state_26897__$1 = (function (){var statearr_26931 = state_26897;
(statearr_26931[(13)] = inst_26838);

(statearr_26931[(14)] = inst_26841);

(statearr_26931[(15)] = inst_26839);

(statearr_26931[(16)] = inst_26840);

return statearr_26931;
})();
var statearr_26932_26973 = state_26897__$1;
(statearr_26932_26973[(2)] = null);

(statearr_26932_26973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (10))){
var inst_26838 = (state_26897[(13)]);
var inst_26841 = (state_26897[(14)]);
var inst_26839 = (state_26897[(15)]);
var inst_26840 = (state_26897[(16)]);
var inst_26846 = cljs.core._nth.call(null,inst_26839,inst_26841);
var inst_26847 = cljs.core.async.muxch_STAR_.call(null,inst_26846);
var inst_26848 = cljs.core.async.close_BANG_.call(null,inst_26847);
var inst_26849 = (inst_26841 + (1));
var tmp26927 = inst_26838;
var tmp26928 = inst_26839;
var tmp26929 = inst_26840;
var inst_26838__$1 = tmp26927;
var inst_26839__$1 = tmp26928;
var inst_26840__$1 = tmp26929;
var inst_26841__$1 = inst_26849;
var state_26897__$1 = (function (){var statearr_26933 = state_26897;
(statearr_26933[(13)] = inst_26838__$1);

(statearr_26933[(17)] = inst_26848);

(statearr_26933[(14)] = inst_26841__$1);

(statearr_26933[(15)] = inst_26839__$1);

(statearr_26933[(16)] = inst_26840__$1);

return statearr_26933;
})();
var statearr_26934_26974 = state_26897__$1;
(statearr_26934_26974[(2)] = null);

(statearr_26934_26974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (18))){
var inst_26867 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26935_26975 = state_26897__$1;
(statearr_26935_26975[(2)] = inst_26867);

(statearr_26935_26975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (8))){
var inst_26841 = (state_26897[(14)]);
var inst_26840 = (state_26897[(16)]);
var inst_26843 = (inst_26841 < inst_26840);
var inst_26844 = inst_26843;
var state_26897__$1 = state_26897;
if(cljs.core.truth_(inst_26844)){
var statearr_26936_26976 = state_26897__$1;
(statearr_26936_26976[(1)] = (10));

} else {
var statearr_26937_26977 = state_26897__$1;
(statearr_26937_26977[(1)] = (11));

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
});})(c__19810__auto___26949,mults,ensure_mult,p))
;
return ((function (switch__19745__auto__,c__19810__auto___26949,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_26941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26941[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_26941[(1)] = (1));

return statearr_26941;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_26897){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_26897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e26942){if((e26942 instanceof Object)){
var ex__19749__auto__ = e26942;
var statearr_26943_26978 = state_26897;
(statearr_26943_26978[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26979 = state_26897;
state_26897 = G__26979;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_26897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_26897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___26949,mults,ensure_mult,p))
})();
var state__19812__auto__ = (function (){var statearr_26944 = f__19811__auto__.call(null);
(statearr_26944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___26949);

return statearr_26944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___26949,mults,ensure_mult,p))
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
var args26980 = [];
var len__17395__auto___26983 = arguments.length;
var i__17396__auto___26984 = (0);
while(true){
if((i__17396__auto___26984 < len__17395__auto___26983)){
args26980.push((arguments[i__17396__auto___26984]));

var G__26985 = (i__17396__auto___26984 + (1));
i__17396__auto___26984 = G__26985;
continue;
} else {
}
break;
}

var G__26982 = args26980.length;
switch (G__26982) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26980.length)].join('')));

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
var args26987 = [];
var len__17395__auto___26990 = arguments.length;
var i__17396__auto___26991 = (0);
while(true){
if((i__17396__auto___26991 < len__17395__auto___26990)){
args26987.push((arguments[i__17396__auto___26991]));

var G__26992 = (i__17396__auto___26991 + (1));
i__17396__auto___26991 = G__26992;
continue;
} else {
}
break;
}

var G__26989 = args26987.length;
switch (G__26989) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26987.length)].join('')));

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
var args26994 = [];
var len__17395__auto___27065 = arguments.length;
var i__17396__auto___27066 = (0);
while(true){
if((i__17396__auto___27066 < len__17395__auto___27065)){
args26994.push((arguments[i__17396__auto___27066]));

var G__27067 = (i__17396__auto___27066 + (1));
i__17396__auto___27066 = G__27067;
continue;
} else {
}
break;
}

var G__26996 = args26994.length;
switch (G__26996) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26994.length)].join('')));

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
var c__19810__auto___27069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___27069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___27069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27035){
var state_val_27036 = (state_27035[(1)]);
if((state_val_27036 === (7))){
var state_27035__$1 = state_27035;
var statearr_27037_27070 = state_27035__$1;
(statearr_27037_27070[(2)] = null);

(statearr_27037_27070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (1))){
var state_27035__$1 = state_27035;
var statearr_27038_27071 = state_27035__$1;
(statearr_27038_27071[(2)] = null);

(statearr_27038_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (4))){
var inst_26999 = (state_27035[(7)]);
var inst_27001 = (inst_26999 < cnt);
var state_27035__$1 = state_27035;
if(cljs.core.truth_(inst_27001)){
var statearr_27039_27072 = state_27035__$1;
(statearr_27039_27072[(1)] = (6));

} else {
var statearr_27040_27073 = state_27035__$1;
(statearr_27040_27073[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (15))){
var inst_27031 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
var statearr_27041_27074 = state_27035__$1;
(statearr_27041_27074[(2)] = inst_27031);

(statearr_27041_27074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (13))){
var inst_27024 = cljs.core.async.close_BANG_.call(null,out);
var state_27035__$1 = state_27035;
var statearr_27042_27075 = state_27035__$1;
(statearr_27042_27075[(2)] = inst_27024);

(statearr_27042_27075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (6))){
var state_27035__$1 = state_27035;
var statearr_27043_27076 = state_27035__$1;
(statearr_27043_27076[(2)] = null);

(statearr_27043_27076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (3))){
var inst_27033 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27035__$1,inst_27033);
} else {
if((state_val_27036 === (12))){
var inst_27021 = (state_27035[(8)]);
var inst_27021__$1 = (state_27035[(2)]);
var inst_27022 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27021__$1);
var state_27035__$1 = (function (){var statearr_27044 = state_27035;
(statearr_27044[(8)] = inst_27021__$1);

return statearr_27044;
})();
if(cljs.core.truth_(inst_27022)){
var statearr_27045_27077 = state_27035__$1;
(statearr_27045_27077[(1)] = (13));

} else {
var statearr_27046_27078 = state_27035__$1;
(statearr_27046_27078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (2))){
var inst_26998 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26999 = (0);
var state_27035__$1 = (function (){var statearr_27047 = state_27035;
(statearr_27047[(9)] = inst_26998);

(statearr_27047[(7)] = inst_26999);

return statearr_27047;
})();
var statearr_27048_27079 = state_27035__$1;
(statearr_27048_27079[(2)] = null);

(statearr_27048_27079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (11))){
var inst_26999 = (state_27035[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27035,(10),Object,null,(9));
var inst_27008 = chs__$1.call(null,inst_26999);
var inst_27009 = done.call(null,inst_26999);
var inst_27010 = cljs.core.async.take_BANG_.call(null,inst_27008,inst_27009);
var state_27035__$1 = state_27035;
var statearr_27049_27080 = state_27035__$1;
(statearr_27049_27080[(2)] = inst_27010);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (9))){
var inst_26999 = (state_27035[(7)]);
var inst_27012 = (state_27035[(2)]);
var inst_27013 = (inst_26999 + (1));
var inst_26999__$1 = inst_27013;
var state_27035__$1 = (function (){var statearr_27050 = state_27035;
(statearr_27050[(10)] = inst_27012);

(statearr_27050[(7)] = inst_26999__$1);

return statearr_27050;
})();
var statearr_27051_27081 = state_27035__$1;
(statearr_27051_27081[(2)] = null);

(statearr_27051_27081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (5))){
var inst_27019 = (state_27035[(2)]);
var state_27035__$1 = (function (){var statearr_27052 = state_27035;
(statearr_27052[(11)] = inst_27019);

return statearr_27052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27035__$1,(12),dchan);
} else {
if((state_val_27036 === (14))){
var inst_27021 = (state_27035[(8)]);
var inst_27026 = cljs.core.apply.call(null,f,inst_27021);
var state_27035__$1 = state_27035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27035__$1,(16),out,inst_27026);
} else {
if((state_val_27036 === (16))){
var inst_27028 = (state_27035[(2)]);
var state_27035__$1 = (function (){var statearr_27053 = state_27035;
(statearr_27053[(12)] = inst_27028);

return statearr_27053;
})();
var statearr_27054_27082 = state_27035__$1;
(statearr_27054_27082[(2)] = null);

(statearr_27054_27082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (10))){
var inst_27003 = (state_27035[(2)]);
var inst_27004 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27035__$1 = (function (){var statearr_27055 = state_27035;
(statearr_27055[(13)] = inst_27003);

return statearr_27055;
})();
var statearr_27056_27083 = state_27035__$1;
(statearr_27056_27083[(2)] = inst_27004);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27035__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (8))){
var inst_27017 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
var statearr_27057_27084 = state_27035__$1;
(statearr_27057_27084[(2)] = inst_27017);

(statearr_27057_27084[(1)] = (5));


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
});})(c__19810__auto___27069,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19745__auto__,c__19810__auto___27069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_27061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27061[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_27061[(1)] = (1));

return statearr_27061;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_27035){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27062){if((e27062 instanceof Object)){
var ex__19749__auto__ = e27062;
var statearr_27063_27085 = state_27035;
(statearr_27063_27085[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27086 = state_27035;
state_27035 = G__27086;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_27035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_27035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___27069,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19812__auto__ = (function (){var statearr_27064 = f__19811__auto__.call(null);
(statearr_27064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___27069);

return statearr_27064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___27069,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27088 = [];
var len__17395__auto___27144 = arguments.length;
var i__17396__auto___27145 = (0);
while(true){
if((i__17396__auto___27145 < len__17395__auto___27144)){
args27088.push((arguments[i__17396__auto___27145]));

var G__27146 = (i__17396__auto___27145 + (1));
i__17396__auto___27145 = G__27146;
continue;
} else {
}
break;
}

var G__27090 = args27088.length;
switch (G__27090) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27088.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19810__auto___27148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___27148,out){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___27148,out){
return (function (state_27120){
var state_val_27121 = (state_27120[(1)]);
if((state_val_27121 === (7))){
var inst_27099 = (state_27120[(7)]);
var inst_27100 = (state_27120[(8)]);
var inst_27099__$1 = (state_27120[(2)]);
var inst_27100__$1 = cljs.core.nth.call(null,inst_27099__$1,(0),null);
var inst_27101 = cljs.core.nth.call(null,inst_27099__$1,(1),null);
var inst_27102 = (inst_27100__$1 == null);
var state_27120__$1 = (function (){var statearr_27122 = state_27120;
(statearr_27122[(7)] = inst_27099__$1);

(statearr_27122[(8)] = inst_27100__$1);

(statearr_27122[(9)] = inst_27101);

return statearr_27122;
})();
if(cljs.core.truth_(inst_27102)){
var statearr_27123_27149 = state_27120__$1;
(statearr_27123_27149[(1)] = (8));

} else {
var statearr_27124_27150 = state_27120__$1;
(statearr_27124_27150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (1))){
var inst_27091 = cljs.core.vec.call(null,chs);
var inst_27092 = inst_27091;
var state_27120__$1 = (function (){var statearr_27125 = state_27120;
(statearr_27125[(10)] = inst_27092);

return statearr_27125;
})();
var statearr_27126_27151 = state_27120__$1;
(statearr_27126_27151[(2)] = null);

(statearr_27126_27151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (4))){
var inst_27092 = (state_27120[(10)]);
var state_27120__$1 = state_27120;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27120__$1,(7),inst_27092);
} else {
if((state_val_27121 === (6))){
var inst_27116 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
var statearr_27127_27152 = state_27120__$1;
(statearr_27127_27152[(2)] = inst_27116);

(statearr_27127_27152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (3))){
var inst_27118 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27120__$1,inst_27118);
} else {
if((state_val_27121 === (2))){
var inst_27092 = (state_27120[(10)]);
var inst_27094 = cljs.core.count.call(null,inst_27092);
var inst_27095 = (inst_27094 > (0));
var state_27120__$1 = state_27120;
if(cljs.core.truth_(inst_27095)){
var statearr_27129_27153 = state_27120__$1;
(statearr_27129_27153[(1)] = (4));

} else {
var statearr_27130_27154 = state_27120__$1;
(statearr_27130_27154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (11))){
var inst_27092 = (state_27120[(10)]);
var inst_27109 = (state_27120[(2)]);
var tmp27128 = inst_27092;
var inst_27092__$1 = tmp27128;
var state_27120__$1 = (function (){var statearr_27131 = state_27120;
(statearr_27131[(10)] = inst_27092__$1);

(statearr_27131[(11)] = inst_27109);

return statearr_27131;
})();
var statearr_27132_27155 = state_27120__$1;
(statearr_27132_27155[(2)] = null);

(statearr_27132_27155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (9))){
var inst_27100 = (state_27120[(8)]);
var state_27120__$1 = state_27120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27120__$1,(11),out,inst_27100);
} else {
if((state_val_27121 === (5))){
var inst_27114 = cljs.core.async.close_BANG_.call(null,out);
var state_27120__$1 = state_27120;
var statearr_27133_27156 = state_27120__$1;
(statearr_27133_27156[(2)] = inst_27114);

(statearr_27133_27156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (10))){
var inst_27112 = (state_27120[(2)]);
var state_27120__$1 = state_27120;
var statearr_27134_27157 = state_27120__$1;
(statearr_27134_27157[(2)] = inst_27112);

(statearr_27134_27157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27121 === (8))){
var inst_27092 = (state_27120[(10)]);
var inst_27099 = (state_27120[(7)]);
var inst_27100 = (state_27120[(8)]);
var inst_27101 = (state_27120[(9)]);
var inst_27104 = (function (){var cs = inst_27092;
var vec__27097 = inst_27099;
var v = inst_27100;
var c = inst_27101;
return ((function (cs,vec__27097,v,c,inst_27092,inst_27099,inst_27100,inst_27101,state_val_27121,c__19810__auto___27148,out){
return (function (p1__27087_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27087_SHARP_);
});
;})(cs,vec__27097,v,c,inst_27092,inst_27099,inst_27100,inst_27101,state_val_27121,c__19810__auto___27148,out))
})();
var inst_27105 = cljs.core.filterv.call(null,inst_27104,inst_27092);
var inst_27092__$1 = inst_27105;
var state_27120__$1 = (function (){var statearr_27135 = state_27120;
(statearr_27135[(10)] = inst_27092__$1);

return statearr_27135;
})();
var statearr_27136_27158 = state_27120__$1;
(statearr_27136_27158[(2)] = null);

(statearr_27136_27158[(1)] = (2));


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
});})(c__19810__auto___27148,out))
;
return ((function (switch__19745__auto__,c__19810__auto___27148,out){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_27140 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27140[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_27140[(1)] = (1));

return statearr_27140;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_27120){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27141){if((e27141 instanceof Object)){
var ex__19749__auto__ = e27141;
var statearr_27142_27159 = state_27120;
(statearr_27142_27159[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27160 = state_27120;
state_27120 = G__27160;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_27120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_27120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___27148,out))
})();
var state__19812__auto__ = (function (){var statearr_27143 = f__19811__auto__.call(null);
(statearr_27143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___27148);

return statearr_27143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___27148,out))
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
var args27161 = [];
var len__17395__auto___27210 = arguments.length;
var i__17396__auto___27211 = (0);
while(true){
if((i__17396__auto___27211 < len__17395__auto___27210)){
args27161.push((arguments[i__17396__auto___27211]));

var G__27212 = (i__17396__auto___27211 + (1));
i__17396__auto___27211 = G__27212;
continue;
} else {
}
break;
}

var G__27163 = args27161.length;
switch (G__27163) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27161.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19810__auto___27214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___27214,out){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___27214,out){
return (function (state_27187){
var state_val_27188 = (state_27187[(1)]);
if((state_val_27188 === (7))){
var inst_27169 = (state_27187[(7)]);
var inst_27169__$1 = (state_27187[(2)]);
var inst_27170 = (inst_27169__$1 == null);
var inst_27171 = cljs.core.not.call(null,inst_27170);
var state_27187__$1 = (function (){var statearr_27189 = state_27187;
(statearr_27189[(7)] = inst_27169__$1);

return statearr_27189;
})();
if(inst_27171){
var statearr_27190_27215 = state_27187__$1;
(statearr_27190_27215[(1)] = (8));

} else {
var statearr_27191_27216 = state_27187__$1;
(statearr_27191_27216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (1))){
var inst_27164 = (0);
var state_27187__$1 = (function (){var statearr_27192 = state_27187;
(statearr_27192[(8)] = inst_27164);

return statearr_27192;
})();
var statearr_27193_27217 = state_27187__$1;
(statearr_27193_27217[(2)] = null);

(statearr_27193_27217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (4))){
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27187__$1,(7),ch);
} else {
if((state_val_27188 === (6))){
var inst_27182 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27194_27218 = state_27187__$1;
(statearr_27194_27218[(2)] = inst_27182);

(statearr_27194_27218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (3))){
var inst_27184 = (state_27187[(2)]);
var inst_27185 = cljs.core.async.close_BANG_.call(null,out);
var state_27187__$1 = (function (){var statearr_27195 = state_27187;
(statearr_27195[(9)] = inst_27184);

return statearr_27195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27187__$1,inst_27185);
} else {
if((state_val_27188 === (2))){
var inst_27164 = (state_27187[(8)]);
var inst_27166 = (inst_27164 < n);
var state_27187__$1 = state_27187;
if(cljs.core.truth_(inst_27166)){
var statearr_27196_27219 = state_27187__$1;
(statearr_27196_27219[(1)] = (4));

} else {
var statearr_27197_27220 = state_27187__$1;
(statearr_27197_27220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (11))){
var inst_27164 = (state_27187[(8)]);
var inst_27174 = (state_27187[(2)]);
var inst_27175 = (inst_27164 + (1));
var inst_27164__$1 = inst_27175;
var state_27187__$1 = (function (){var statearr_27198 = state_27187;
(statearr_27198[(8)] = inst_27164__$1);

(statearr_27198[(10)] = inst_27174);

return statearr_27198;
})();
var statearr_27199_27221 = state_27187__$1;
(statearr_27199_27221[(2)] = null);

(statearr_27199_27221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (9))){
var state_27187__$1 = state_27187;
var statearr_27200_27222 = state_27187__$1;
(statearr_27200_27222[(2)] = null);

(statearr_27200_27222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (5))){
var state_27187__$1 = state_27187;
var statearr_27201_27223 = state_27187__$1;
(statearr_27201_27223[(2)] = null);

(statearr_27201_27223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (10))){
var inst_27179 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27202_27224 = state_27187__$1;
(statearr_27202_27224[(2)] = inst_27179);

(statearr_27202_27224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (8))){
var inst_27169 = (state_27187[(7)]);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27187__$1,(11),out,inst_27169);
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
});})(c__19810__auto___27214,out))
;
return ((function (switch__19745__auto__,c__19810__auto___27214,out){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_27206 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27206[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_27206[(1)] = (1));

return statearr_27206;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_27187){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27207){if((e27207 instanceof Object)){
var ex__19749__auto__ = e27207;
var statearr_27208_27225 = state_27187;
(statearr_27208_27225[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27226 = state_27187;
state_27187 = G__27226;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_27187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_27187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___27214,out))
})();
var state__19812__auto__ = (function (){var statearr_27209 = f__19811__auto__.call(null);
(statearr_27209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___27214);

return statearr_27209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___27214,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27234 = (function (map_LT_,f,ch,meta27235){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27235 = meta27235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27236,meta27235__$1){
var self__ = this;
var _27236__$1 = this;
return (new cljs.core.async.t_cljs$core$async27234(self__.map_LT_,self__.f,self__.ch,meta27235__$1));
});

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27236){
var self__ = this;
var _27236__$1 = this;
return self__.meta27235;
});

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27237 = (function (map_LT_,f,ch,meta27235,_,fn1,meta27238){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27235 = meta27235;
this._ = _;
this.fn1 = fn1;
this.meta27238 = meta27238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27239,meta27238__$1){
var self__ = this;
var _27239__$1 = this;
return (new cljs.core.async.t_cljs$core$async27237(self__.map_LT_,self__.f,self__.ch,self__.meta27235,self__._,self__.fn1,meta27238__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27239){
var self__ = this;
var _27239__$1 = this;
return self__.meta27238;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27237.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27227_SHARP_){
return f1.call(null,(((p1__27227_SHARP_ == null))?null:self__.f.call(null,p1__27227_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27237.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27235","meta27235",-1089559707,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27234","cljs.core.async/t_cljs$core$async27234",367469412,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27238","meta27238",-1129805375,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27237";

cljs.core.async.t_cljs$core$async27237.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async27237");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27237 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27237(map_LT___$1,f__$1,ch__$1,meta27235__$1,___$2,fn1__$1,meta27238){
return (new cljs.core.async.t_cljs$core$async27237(map_LT___$1,f__$1,ch__$1,meta27235__$1,___$2,fn1__$1,meta27238));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27237(self__.map_LT_,self__.f,self__.ch,self__.meta27235,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27235","meta27235",-1089559707,null)], null);
});

cljs.core.async.t_cljs$core$async27234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27234";

cljs.core.async.t_cljs$core$async27234.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async27234");
});

cljs.core.async.__GT_t_cljs$core$async27234 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27234(map_LT___$1,f__$1,ch__$1,meta27235){
return (new cljs.core.async.t_cljs$core$async27234(map_LT___$1,f__$1,ch__$1,meta27235));
});

}

return (new cljs.core.async.t_cljs$core$async27234(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27243 = (function (map_GT_,f,ch,meta27244){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27244 = meta27244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27245,meta27244__$1){
var self__ = this;
var _27245__$1 = this;
return (new cljs.core.async.t_cljs$core$async27243(self__.map_GT_,self__.f,self__.ch,meta27244__$1));
});

cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27245){
var self__ = this;
var _27245__$1 = this;
return self__.meta27244;
});

cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27244","meta27244",-462677785,null)], null);
});

cljs.core.async.t_cljs$core$async27243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27243";

cljs.core.async.t_cljs$core$async27243.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async27243");
});

cljs.core.async.__GT_t_cljs$core$async27243 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27243(map_GT___$1,f__$1,ch__$1,meta27244){
return (new cljs.core.async.t_cljs$core$async27243(map_GT___$1,f__$1,ch__$1,meta27244));
});

}

return (new cljs.core.async.t_cljs$core$async27243(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27249 = (function (filter_GT_,p,ch,meta27250){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27250 = meta27250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27251,meta27250__$1){
var self__ = this;
var _27251__$1 = this;
return (new cljs.core.async.t_cljs$core$async27249(self__.filter_GT_,self__.p,self__.ch,meta27250__$1));
});

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27251){
var self__ = this;
var _27251__$1 = this;
return self__.meta27250;
});

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27250","meta27250",-496751373,null)], null);
});

cljs.core.async.t_cljs$core$async27249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27249";

cljs.core.async.t_cljs$core$async27249.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async27249");
});

cljs.core.async.__GT_t_cljs$core$async27249 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27249(filter_GT___$1,p__$1,ch__$1,meta27250){
return (new cljs.core.async.t_cljs$core$async27249(filter_GT___$1,p__$1,ch__$1,meta27250));
});

}

return (new cljs.core.async.t_cljs$core$async27249(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27252 = [];
var len__17395__auto___27296 = arguments.length;
var i__17396__auto___27297 = (0);
while(true){
if((i__17396__auto___27297 < len__17395__auto___27296)){
args27252.push((arguments[i__17396__auto___27297]));

var G__27298 = (i__17396__auto___27297 + (1));
i__17396__auto___27297 = G__27298;
continue;
} else {
}
break;
}

var G__27254 = args27252.length;
switch (G__27254) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27252.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19810__auto___27300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___27300,out){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___27300,out){
return (function (state_27275){
var state_val_27276 = (state_27275[(1)]);
if((state_val_27276 === (7))){
var inst_27271 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
var statearr_27277_27301 = state_27275__$1;
(statearr_27277_27301[(2)] = inst_27271);

(statearr_27277_27301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (1))){
var state_27275__$1 = state_27275;
var statearr_27278_27302 = state_27275__$1;
(statearr_27278_27302[(2)] = null);

(statearr_27278_27302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (4))){
var inst_27257 = (state_27275[(7)]);
var inst_27257__$1 = (state_27275[(2)]);
var inst_27258 = (inst_27257__$1 == null);
var state_27275__$1 = (function (){var statearr_27279 = state_27275;
(statearr_27279[(7)] = inst_27257__$1);

return statearr_27279;
})();
if(cljs.core.truth_(inst_27258)){
var statearr_27280_27303 = state_27275__$1;
(statearr_27280_27303[(1)] = (5));

} else {
var statearr_27281_27304 = state_27275__$1;
(statearr_27281_27304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (6))){
var inst_27257 = (state_27275[(7)]);
var inst_27262 = p.call(null,inst_27257);
var state_27275__$1 = state_27275;
if(cljs.core.truth_(inst_27262)){
var statearr_27282_27305 = state_27275__$1;
(statearr_27282_27305[(1)] = (8));

} else {
var statearr_27283_27306 = state_27275__$1;
(statearr_27283_27306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (3))){
var inst_27273 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27275__$1,inst_27273);
} else {
if((state_val_27276 === (2))){
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27275__$1,(4),ch);
} else {
if((state_val_27276 === (11))){
var inst_27265 = (state_27275[(2)]);
var state_27275__$1 = state_27275;
var statearr_27284_27307 = state_27275__$1;
(statearr_27284_27307[(2)] = inst_27265);

(statearr_27284_27307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (9))){
var state_27275__$1 = state_27275;
var statearr_27285_27308 = state_27275__$1;
(statearr_27285_27308[(2)] = null);

(statearr_27285_27308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (5))){
var inst_27260 = cljs.core.async.close_BANG_.call(null,out);
var state_27275__$1 = state_27275;
var statearr_27286_27309 = state_27275__$1;
(statearr_27286_27309[(2)] = inst_27260);

(statearr_27286_27309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (10))){
var inst_27268 = (state_27275[(2)]);
var state_27275__$1 = (function (){var statearr_27287 = state_27275;
(statearr_27287[(8)] = inst_27268);

return statearr_27287;
})();
var statearr_27288_27310 = state_27275__$1;
(statearr_27288_27310[(2)] = null);

(statearr_27288_27310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27276 === (8))){
var inst_27257 = (state_27275[(7)]);
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27275__$1,(11),out,inst_27257);
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
});})(c__19810__auto___27300,out))
;
return ((function (switch__19745__auto__,c__19810__auto___27300,out){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_27292 = [null,null,null,null,null,null,null,null,null];
(statearr_27292[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_27292[(1)] = (1));

return statearr_27292;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_27275){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27293){if((e27293 instanceof Object)){
var ex__19749__auto__ = e27293;
var statearr_27294_27311 = state_27275;
(statearr_27294_27311[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27312 = state_27275;
state_27275 = G__27312;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_27275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_27275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___27300,out))
})();
var state__19812__auto__ = (function (){var statearr_27295 = f__19811__auto__.call(null);
(statearr_27295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___27300);

return statearr_27295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___27300,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27313 = [];
var len__17395__auto___27316 = arguments.length;
var i__17396__auto___27317 = (0);
while(true){
if((i__17396__auto___27317 < len__17395__auto___27316)){
args27313.push((arguments[i__17396__auto___27317]));

var G__27318 = (i__17396__auto___27317 + (1));
i__17396__auto___27317 = G__27318;
continue;
} else {
}
break;
}

var G__27315 = args27313.length;
switch (G__27315) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27313.length)].join('')));

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
var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__){
return (function (state_27485){
var state_val_27486 = (state_27485[(1)]);
if((state_val_27486 === (7))){
var inst_27481 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27487_27528 = state_27485__$1;
(statearr_27487_27528[(2)] = inst_27481);

(statearr_27487_27528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (20))){
var inst_27451 = (state_27485[(7)]);
var inst_27462 = (state_27485[(2)]);
var inst_27463 = cljs.core.next.call(null,inst_27451);
var inst_27437 = inst_27463;
var inst_27438 = null;
var inst_27439 = (0);
var inst_27440 = (0);
var state_27485__$1 = (function (){var statearr_27488 = state_27485;
(statearr_27488[(8)] = inst_27440);

(statearr_27488[(9)] = inst_27437);

(statearr_27488[(10)] = inst_27438);

(statearr_27488[(11)] = inst_27462);

(statearr_27488[(12)] = inst_27439);

return statearr_27488;
})();
var statearr_27489_27529 = state_27485__$1;
(statearr_27489_27529[(2)] = null);

(statearr_27489_27529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (1))){
var state_27485__$1 = state_27485;
var statearr_27490_27530 = state_27485__$1;
(statearr_27490_27530[(2)] = null);

(statearr_27490_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (4))){
var inst_27426 = (state_27485[(13)]);
var inst_27426__$1 = (state_27485[(2)]);
var inst_27427 = (inst_27426__$1 == null);
var state_27485__$1 = (function (){var statearr_27491 = state_27485;
(statearr_27491[(13)] = inst_27426__$1);

return statearr_27491;
})();
if(cljs.core.truth_(inst_27427)){
var statearr_27492_27531 = state_27485__$1;
(statearr_27492_27531[(1)] = (5));

} else {
var statearr_27493_27532 = state_27485__$1;
(statearr_27493_27532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (15))){
var state_27485__$1 = state_27485;
var statearr_27497_27533 = state_27485__$1;
(statearr_27497_27533[(2)] = null);

(statearr_27497_27533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (21))){
var state_27485__$1 = state_27485;
var statearr_27498_27534 = state_27485__$1;
(statearr_27498_27534[(2)] = null);

(statearr_27498_27534[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (13))){
var inst_27440 = (state_27485[(8)]);
var inst_27437 = (state_27485[(9)]);
var inst_27438 = (state_27485[(10)]);
var inst_27439 = (state_27485[(12)]);
var inst_27447 = (state_27485[(2)]);
var inst_27448 = (inst_27440 + (1));
var tmp27494 = inst_27437;
var tmp27495 = inst_27438;
var tmp27496 = inst_27439;
var inst_27437__$1 = tmp27494;
var inst_27438__$1 = tmp27495;
var inst_27439__$1 = tmp27496;
var inst_27440__$1 = inst_27448;
var state_27485__$1 = (function (){var statearr_27499 = state_27485;
(statearr_27499[(8)] = inst_27440__$1);

(statearr_27499[(9)] = inst_27437__$1);

(statearr_27499[(10)] = inst_27438__$1);

(statearr_27499[(12)] = inst_27439__$1);

(statearr_27499[(14)] = inst_27447);

return statearr_27499;
})();
var statearr_27500_27535 = state_27485__$1;
(statearr_27500_27535[(2)] = null);

(statearr_27500_27535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (22))){
var state_27485__$1 = state_27485;
var statearr_27501_27536 = state_27485__$1;
(statearr_27501_27536[(2)] = null);

(statearr_27501_27536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (6))){
var inst_27426 = (state_27485[(13)]);
var inst_27435 = f.call(null,inst_27426);
var inst_27436 = cljs.core.seq.call(null,inst_27435);
var inst_27437 = inst_27436;
var inst_27438 = null;
var inst_27439 = (0);
var inst_27440 = (0);
var state_27485__$1 = (function (){var statearr_27502 = state_27485;
(statearr_27502[(8)] = inst_27440);

(statearr_27502[(9)] = inst_27437);

(statearr_27502[(10)] = inst_27438);

(statearr_27502[(12)] = inst_27439);

return statearr_27502;
})();
var statearr_27503_27537 = state_27485__$1;
(statearr_27503_27537[(2)] = null);

(statearr_27503_27537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (17))){
var inst_27451 = (state_27485[(7)]);
var inst_27455 = cljs.core.chunk_first.call(null,inst_27451);
var inst_27456 = cljs.core.chunk_rest.call(null,inst_27451);
var inst_27457 = cljs.core.count.call(null,inst_27455);
var inst_27437 = inst_27456;
var inst_27438 = inst_27455;
var inst_27439 = inst_27457;
var inst_27440 = (0);
var state_27485__$1 = (function (){var statearr_27504 = state_27485;
(statearr_27504[(8)] = inst_27440);

(statearr_27504[(9)] = inst_27437);

(statearr_27504[(10)] = inst_27438);

(statearr_27504[(12)] = inst_27439);

return statearr_27504;
})();
var statearr_27505_27538 = state_27485__$1;
(statearr_27505_27538[(2)] = null);

(statearr_27505_27538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (3))){
var inst_27483 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27485__$1,inst_27483);
} else {
if((state_val_27486 === (12))){
var inst_27471 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27506_27539 = state_27485__$1;
(statearr_27506_27539[(2)] = inst_27471);

(statearr_27506_27539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (2))){
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27485__$1,(4),in$);
} else {
if((state_val_27486 === (23))){
var inst_27479 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27507_27540 = state_27485__$1;
(statearr_27507_27540[(2)] = inst_27479);

(statearr_27507_27540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (19))){
var inst_27466 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27508_27541 = state_27485__$1;
(statearr_27508_27541[(2)] = inst_27466);

(statearr_27508_27541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (11))){
var inst_27437 = (state_27485[(9)]);
var inst_27451 = (state_27485[(7)]);
var inst_27451__$1 = cljs.core.seq.call(null,inst_27437);
var state_27485__$1 = (function (){var statearr_27509 = state_27485;
(statearr_27509[(7)] = inst_27451__$1);

return statearr_27509;
})();
if(inst_27451__$1){
var statearr_27510_27542 = state_27485__$1;
(statearr_27510_27542[(1)] = (14));

} else {
var statearr_27511_27543 = state_27485__$1;
(statearr_27511_27543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (9))){
var inst_27473 = (state_27485[(2)]);
var inst_27474 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27485__$1 = (function (){var statearr_27512 = state_27485;
(statearr_27512[(15)] = inst_27473);

return statearr_27512;
})();
if(cljs.core.truth_(inst_27474)){
var statearr_27513_27544 = state_27485__$1;
(statearr_27513_27544[(1)] = (21));

} else {
var statearr_27514_27545 = state_27485__$1;
(statearr_27514_27545[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (5))){
var inst_27429 = cljs.core.async.close_BANG_.call(null,out);
var state_27485__$1 = state_27485;
var statearr_27515_27546 = state_27485__$1;
(statearr_27515_27546[(2)] = inst_27429);

(statearr_27515_27546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (14))){
var inst_27451 = (state_27485[(7)]);
var inst_27453 = cljs.core.chunked_seq_QMARK_.call(null,inst_27451);
var state_27485__$1 = state_27485;
if(inst_27453){
var statearr_27516_27547 = state_27485__$1;
(statearr_27516_27547[(1)] = (17));

} else {
var statearr_27517_27548 = state_27485__$1;
(statearr_27517_27548[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (16))){
var inst_27469 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27518_27549 = state_27485__$1;
(statearr_27518_27549[(2)] = inst_27469);

(statearr_27518_27549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (10))){
var inst_27440 = (state_27485[(8)]);
var inst_27438 = (state_27485[(10)]);
var inst_27445 = cljs.core._nth.call(null,inst_27438,inst_27440);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27485__$1,(13),out,inst_27445);
} else {
if((state_val_27486 === (18))){
var inst_27451 = (state_27485[(7)]);
var inst_27460 = cljs.core.first.call(null,inst_27451);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27485__$1,(20),out,inst_27460);
} else {
if((state_val_27486 === (8))){
var inst_27440 = (state_27485[(8)]);
var inst_27439 = (state_27485[(12)]);
var inst_27442 = (inst_27440 < inst_27439);
var inst_27443 = inst_27442;
var state_27485__$1 = state_27485;
if(cljs.core.truth_(inst_27443)){
var statearr_27519_27550 = state_27485__$1;
(statearr_27519_27550[(1)] = (10));

} else {
var statearr_27520_27551 = state_27485__$1;
(statearr_27520_27551[(1)] = (11));

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
});})(c__19810__auto__))
;
return ((function (switch__19745__auto__,c__19810__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19746__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19746__auto____0 = (function (){
var statearr_27524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27524[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19746__auto__);

(statearr_27524[(1)] = (1));

return statearr_27524;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19746__auto____1 = (function (state_27485){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27525){if((e27525 instanceof Object)){
var ex__19749__auto__ = e27525;
var statearr_27526_27552 = state_27485;
(statearr_27526_27552[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27553 = state_27485;
state_27485 = G__27553;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19746__auto__ = function(state_27485){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19746__auto____1.call(this,state_27485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19746__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19746__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__))
})();
var state__19812__auto__ = (function (){var statearr_27527 = f__19811__auto__.call(null);
(statearr_27527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_27527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__))
);

return c__19810__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27554 = [];
var len__17395__auto___27557 = arguments.length;
var i__17396__auto___27558 = (0);
while(true){
if((i__17396__auto___27558 < len__17395__auto___27557)){
args27554.push((arguments[i__17396__auto___27558]));

var G__27559 = (i__17396__auto___27558 + (1));
i__17396__auto___27558 = G__27559;
continue;
} else {
}
break;
}

var G__27556 = args27554.length;
switch (G__27556) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27554.length)].join('')));

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
var args27561 = [];
var len__17395__auto___27564 = arguments.length;
var i__17396__auto___27565 = (0);
while(true){
if((i__17396__auto___27565 < len__17395__auto___27564)){
args27561.push((arguments[i__17396__auto___27565]));

var G__27566 = (i__17396__auto___27565 + (1));
i__17396__auto___27565 = G__27566;
continue;
} else {
}
break;
}

var G__27563 = args27561.length;
switch (G__27563) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27561.length)].join('')));

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
var args27568 = [];
var len__17395__auto___27619 = arguments.length;
var i__17396__auto___27620 = (0);
while(true){
if((i__17396__auto___27620 < len__17395__auto___27619)){
args27568.push((arguments[i__17396__auto___27620]));

var G__27621 = (i__17396__auto___27620 + (1));
i__17396__auto___27620 = G__27621;
continue;
} else {
}
break;
}

var G__27570 = args27568.length;
switch (G__27570) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27568.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19810__auto___27623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___27623,out){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___27623,out){
return (function (state_27594){
var state_val_27595 = (state_27594[(1)]);
if((state_val_27595 === (7))){
var inst_27589 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
var statearr_27596_27624 = state_27594__$1;
(statearr_27596_27624[(2)] = inst_27589);

(statearr_27596_27624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (1))){
var inst_27571 = null;
var state_27594__$1 = (function (){var statearr_27597 = state_27594;
(statearr_27597[(7)] = inst_27571);

return statearr_27597;
})();
var statearr_27598_27625 = state_27594__$1;
(statearr_27598_27625[(2)] = null);

(statearr_27598_27625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (4))){
var inst_27574 = (state_27594[(8)]);
var inst_27574__$1 = (state_27594[(2)]);
var inst_27575 = (inst_27574__$1 == null);
var inst_27576 = cljs.core.not.call(null,inst_27575);
var state_27594__$1 = (function (){var statearr_27599 = state_27594;
(statearr_27599[(8)] = inst_27574__$1);

return statearr_27599;
})();
if(inst_27576){
var statearr_27600_27626 = state_27594__$1;
(statearr_27600_27626[(1)] = (5));

} else {
var statearr_27601_27627 = state_27594__$1;
(statearr_27601_27627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (6))){
var state_27594__$1 = state_27594;
var statearr_27602_27628 = state_27594__$1;
(statearr_27602_27628[(2)] = null);

(statearr_27602_27628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (3))){
var inst_27591 = (state_27594[(2)]);
var inst_27592 = cljs.core.async.close_BANG_.call(null,out);
var state_27594__$1 = (function (){var statearr_27603 = state_27594;
(statearr_27603[(9)] = inst_27591);

return statearr_27603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27594__$1,inst_27592);
} else {
if((state_val_27595 === (2))){
var state_27594__$1 = state_27594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27594__$1,(4),ch);
} else {
if((state_val_27595 === (11))){
var inst_27574 = (state_27594[(8)]);
var inst_27583 = (state_27594[(2)]);
var inst_27571 = inst_27574;
var state_27594__$1 = (function (){var statearr_27604 = state_27594;
(statearr_27604[(10)] = inst_27583);

(statearr_27604[(7)] = inst_27571);

return statearr_27604;
})();
var statearr_27605_27629 = state_27594__$1;
(statearr_27605_27629[(2)] = null);

(statearr_27605_27629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (9))){
var inst_27574 = (state_27594[(8)]);
var state_27594__$1 = state_27594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27594__$1,(11),out,inst_27574);
} else {
if((state_val_27595 === (5))){
var inst_27574 = (state_27594[(8)]);
var inst_27571 = (state_27594[(7)]);
var inst_27578 = cljs.core._EQ_.call(null,inst_27574,inst_27571);
var state_27594__$1 = state_27594;
if(inst_27578){
var statearr_27607_27630 = state_27594__$1;
(statearr_27607_27630[(1)] = (8));

} else {
var statearr_27608_27631 = state_27594__$1;
(statearr_27608_27631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (10))){
var inst_27586 = (state_27594[(2)]);
var state_27594__$1 = state_27594;
var statearr_27609_27632 = state_27594__$1;
(statearr_27609_27632[(2)] = inst_27586);

(statearr_27609_27632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27595 === (8))){
var inst_27571 = (state_27594[(7)]);
var tmp27606 = inst_27571;
var inst_27571__$1 = tmp27606;
var state_27594__$1 = (function (){var statearr_27610 = state_27594;
(statearr_27610[(7)] = inst_27571__$1);

return statearr_27610;
})();
var statearr_27611_27633 = state_27594__$1;
(statearr_27611_27633[(2)] = null);

(statearr_27611_27633[(1)] = (2));


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
});})(c__19810__auto___27623,out))
;
return ((function (switch__19745__auto__,c__19810__auto___27623,out){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_27615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27615[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_27615[(1)] = (1));

return statearr_27615;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_27594){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27616){if((e27616 instanceof Object)){
var ex__19749__auto__ = e27616;
var statearr_27617_27634 = state_27594;
(statearr_27617_27634[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27635 = state_27594;
state_27594 = G__27635;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_27594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_27594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___27623,out))
})();
var state__19812__auto__ = (function (){var statearr_27618 = f__19811__auto__.call(null);
(statearr_27618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___27623);

return statearr_27618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___27623,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27636 = [];
var len__17395__auto___27706 = arguments.length;
var i__17396__auto___27707 = (0);
while(true){
if((i__17396__auto___27707 < len__17395__auto___27706)){
args27636.push((arguments[i__17396__auto___27707]));

var G__27708 = (i__17396__auto___27707 + (1));
i__17396__auto___27707 = G__27708;
continue;
} else {
}
break;
}

var G__27638 = args27636.length;
switch (G__27638) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27636.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19810__auto___27710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___27710,out){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___27710,out){
return (function (state_27676){
var state_val_27677 = (state_27676[(1)]);
if((state_val_27677 === (7))){
var inst_27672 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27678_27711 = state_27676__$1;
(statearr_27678_27711[(2)] = inst_27672);

(statearr_27678_27711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (1))){
var inst_27639 = (new Array(n));
var inst_27640 = inst_27639;
var inst_27641 = (0);
var state_27676__$1 = (function (){var statearr_27679 = state_27676;
(statearr_27679[(7)] = inst_27640);

(statearr_27679[(8)] = inst_27641);

return statearr_27679;
})();
var statearr_27680_27712 = state_27676__$1;
(statearr_27680_27712[(2)] = null);

(statearr_27680_27712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (4))){
var inst_27644 = (state_27676[(9)]);
var inst_27644__$1 = (state_27676[(2)]);
var inst_27645 = (inst_27644__$1 == null);
var inst_27646 = cljs.core.not.call(null,inst_27645);
var state_27676__$1 = (function (){var statearr_27681 = state_27676;
(statearr_27681[(9)] = inst_27644__$1);

return statearr_27681;
})();
if(inst_27646){
var statearr_27682_27713 = state_27676__$1;
(statearr_27682_27713[(1)] = (5));

} else {
var statearr_27683_27714 = state_27676__$1;
(statearr_27683_27714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (15))){
var inst_27666 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27684_27715 = state_27676__$1;
(statearr_27684_27715[(2)] = inst_27666);

(statearr_27684_27715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (13))){
var state_27676__$1 = state_27676;
var statearr_27685_27716 = state_27676__$1;
(statearr_27685_27716[(2)] = null);

(statearr_27685_27716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (6))){
var inst_27641 = (state_27676[(8)]);
var inst_27662 = (inst_27641 > (0));
var state_27676__$1 = state_27676;
if(cljs.core.truth_(inst_27662)){
var statearr_27686_27717 = state_27676__$1;
(statearr_27686_27717[(1)] = (12));

} else {
var statearr_27687_27718 = state_27676__$1;
(statearr_27687_27718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (3))){
var inst_27674 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27676__$1,inst_27674);
} else {
if((state_val_27677 === (12))){
var inst_27640 = (state_27676[(7)]);
var inst_27664 = cljs.core.vec.call(null,inst_27640);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27676__$1,(15),out,inst_27664);
} else {
if((state_val_27677 === (2))){
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27676__$1,(4),ch);
} else {
if((state_val_27677 === (11))){
var inst_27656 = (state_27676[(2)]);
var inst_27657 = (new Array(n));
var inst_27640 = inst_27657;
var inst_27641 = (0);
var state_27676__$1 = (function (){var statearr_27688 = state_27676;
(statearr_27688[(7)] = inst_27640);

(statearr_27688[(10)] = inst_27656);

(statearr_27688[(8)] = inst_27641);

return statearr_27688;
})();
var statearr_27689_27719 = state_27676__$1;
(statearr_27689_27719[(2)] = null);

(statearr_27689_27719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (9))){
var inst_27640 = (state_27676[(7)]);
var inst_27654 = cljs.core.vec.call(null,inst_27640);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27676__$1,(11),out,inst_27654);
} else {
if((state_val_27677 === (5))){
var inst_27640 = (state_27676[(7)]);
var inst_27644 = (state_27676[(9)]);
var inst_27649 = (state_27676[(11)]);
var inst_27641 = (state_27676[(8)]);
var inst_27648 = (inst_27640[inst_27641] = inst_27644);
var inst_27649__$1 = (inst_27641 + (1));
var inst_27650 = (inst_27649__$1 < n);
var state_27676__$1 = (function (){var statearr_27690 = state_27676;
(statearr_27690[(12)] = inst_27648);

(statearr_27690[(11)] = inst_27649__$1);

return statearr_27690;
})();
if(cljs.core.truth_(inst_27650)){
var statearr_27691_27720 = state_27676__$1;
(statearr_27691_27720[(1)] = (8));

} else {
var statearr_27692_27721 = state_27676__$1;
(statearr_27692_27721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (14))){
var inst_27669 = (state_27676[(2)]);
var inst_27670 = cljs.core.async.close_BANG_.call(null,out);
var state_27676__$1 = (function (){var statearr_27694 = state_27676;
(statearr_27694[(13)] = inst_27669);

return statearr_27694;
})();
var statearr_27695_27722 = state_27676__$1;
(statearr_27695_27722[(2)] = inst_27670);

(statearr_27695_27722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (10))){
var inst_27660 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27696_27723 = state_27676__$1;
(statearr_27696_27723[(2)] = inst_27660);

(statearr_27696_27723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (8))){
var inst_27640 = (state_27676[(7)]);
var inst_27649 = (state_27676[(11)]);
var tmp27693 = inst_27640;
var inst_27640__$1 = tmp27693;
var inst_27641 = inst_27649;
var state_27676__$1 = (function (){var statearr_27697 = state_27676;
(statearr_27697[(7)] = inst_27640__$1);

(statearr_27697[(8)] = inst_27641);

return statearr_27697;
})();
var statearr_27698_27724 = state_27676__$1;
(statearr_27698_27724[(2)] = null);

(statearr_27698_27724[(1)] = (2));


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
});})(c__19810__auto___27710,out))
;
return ((function (switch__19745__auto__,c__19810__auto___27710,out){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_27702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27702[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_27702[(1)] = (1));

return statearr_27702;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_27676){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27703){if((e27703 instanceof Object)){
var ex__19749__auto__ = e27703;
var statearr_27704_27725 = state_27676;
(statearr_27704_27725[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27726 = state_27676;
state_27676 = G__27726;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___27710,out))
})();
var state__19812__auto__ = (function (){var statearr_27705 = f__19811__auto__.call(null);
(statearr_27705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___27710);

return statearr_27705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___27710,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27727 = [];
var len__17395__auto___27801 = arguments.length;
var i__17396__auto___27802 = (0);
while(true){
if((i__17396__auto___27802 < len__17395__auto___27801)){
args27727.push((arguments[i__17396__auto___27802]));

var G__27803 = (i__17396__auto___27802 + (1));
i__17396__auto___27802 = G__27803;
continue;
} else {
}
break;
}

var G__27729 = args27727.length;
switch (G__27729) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27727.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19810__auto___27805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___27805,out){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___27805,out){
return (function (state_27771){
var state_val_27772 = (state_27771[(1)]);
if((state_val_27772 === (7))){
var inst_27767 = (state_27771[(2)]);
var state_27771__$1 = state_27771;
var statearr_27773_27806 = state_27771__$1;
(statearr_27773_27806[(2)] = inst_27767);

(statearr_27773_27806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (1))){
var inst_27730 = [];
var inst_27731 = inst_27730;
var inst_27732 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27771__$1 = (function (){var statearr_27774 = state_27771;
(statearr_27774[(7)] = inst_27731);

(statearr_27774[(8)] = inst_27732);

return statearr_27774;
})();
var statearr_27775_27807 = state_27771__$1;
(statearr_27775_27807[(2)] = null);

(statearr_27775_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (4))){
var inst_27735 = (state_27771[(9)]);
var inst_27735__$1 = (state_27771[(2)]);
var inst_27736 = (inst_27735__$1 == null);
var inst_27737 = cljs.core.not.call(null,inst_27736);
var state_27771__$1 = (function (){var statearr_27776 = state_27771;
(statearr_27776[(9)] = inst_27735__$1);

return statearr_27776;
})();
if(inst_27737){
var statearr_27777_27808 = state_27771__$1;
(statearr_27777_27808[(1)] = (5));

} else {
var statearr_27778_27809 = state_27771__$1;
(statearr_27778_27809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (15))){
var inst_27761 = (state_27771[(2)]);
var state_27771__$1 = state_27771;
var statearr_27779_27810 = state_27771__$1;
(statearr_27779_27810[(2)] = inst_27761);

(statearr_27779_27810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (13))){
var state_27771__$1 = state_27771;
var statearr_27780_27811 = state_27771__$1;
(statearr_27780_27811[(2)] = null);

(statearr_27780_27811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (6))){
var inst_27731 = (state_27771[(7)]);
var inst_27756 = inst_27731.length;
var inst_27757 = (inst_27756 > (0));
var state_27771__$1 = state_27771;
if(cljs.core.truth_(inst_27757)){
var statearr_27781_27812 = state_27771__$1;
(statearr_27781_27812[(1)] = (12));

} else {
var statearr_27782_27813 = state_27771__$1;
(statearr_27782_27813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (3))){
var inst_27769 = (state_27771[(2)]);
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27771__$1,inst_27769);
} else {
if((state_val_27772 === (12))){
var inst_27731 = (state_27771[(7)]);
var inst_27759 = cljs.core.vec.call(null,inst_27731);
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27771__$1,(15),out,inst_27759);
} else {
if((state_val_27772 === (2))){
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27771__$1,(4),ch);
} else {
if((state_val_27772 === (11))){
var inst_27739 = (state_27771[(10)]);
var inst_27735 = (state_27771[(9)]);
var inst_27749 = (state_27771[(2)]);
var inst_27750 = [];
var inst_27751 = inst_27750.push(inst_27735);
var inst_27731 = inst_27750;
var inst_27732 = inst_27739;
var state_27771__$1 = (function (){var statearr_27783 = state_27771;
(statearr_27783[(7)] = inst_27731);

(statearr_27783[(11)] = inst_27749);

(statearr_27783[(12)] = inst_27751);

(statearr_27783[(8)] = inst_27732);

return statearr_27783;
})();
var statearr_27784_27814 = state_27771__$1;
(statearr_27784_27814[(2)] = null);

(statearr_27784_27814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (9))){
var inst_27731 = (state_27771[(7)]);
var inst_27747 = cljs.core.vec.call(null,inst_27731);
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27771__$1,(11),out,inst_27747);
} else {
if((state_val_27772 === (5))){
var inst_27739 = (state_27771[(10)]);
var inst_27735 = (state_27771[(9)]);
var inst_27732 = (state_27771[(8)]);
var inst_27739__$1 = f.call(null,inst_27735);
var inst_27740 = cljs.core._EQ_.call(null,inst_27739__$1,inst_27732);
var inst_27741 = cljs.core.keyword_identical_QMARK_.call(null,inst_27732,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27742 = (inst_27740) || (inst_27741);
var state_27771__$1 = (function (){var statearr_27785 = state_27771;
(statearr_27785[(10)] = inst_27739__$1);

return statearr_27785;
})();
if(cljs.core.truth_(inst_27742)){
var statearr_27786_27815 = state_27771__$1;
(statearr_27786_27815[(1)] = (8));

} else {
var statearr_27787_27816 = state_27771__$1;
(statearr_27787_27816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (14))){
var inst_27764 = (state_27771[(2)]);
var inst_27765 = cljs.core.async.close_BANG_.call(null,out);
var state_27771__$1 = (function (){var statearr_27789 = state_27771;
(statearr_27789[(13)] = inst_27764);

return statearr_27789;
})();
var statearr_27790_27817 = state_27771__$1;
(statearr_27790_27817[(2)] = inst_27765);

(statearr_27790_27817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (10))){
var inst_27754 = (state_27771[(2)]);
var state_27771__$1 = state_27771;
var statearr_27791_27818 = state_27771__$1;
(statearr_27791_27818[(2)] = inst_27754);

(statearr_27791_27818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (8))){
var inst_27739 = (state_27771[(10)]);
var inst_27731 = (state_27771[(7)]);
var inst_27735 = (state_27771[(9)]);
var inst_27744 = inst_27731.push(inst_27735);
var tmp27788 = inst_27731;
var inst_27731__$1 = tmp27788;
var inst_27732 = inst_27739;
var state_27771__$1 = (function (){var statearr_27792 = state_27771;
(statearr_27792[(14)] = inst_27744);

(statearr_27792[(7)] = inst_27731__$1);

(statearr_27792[(8)] = inst_27732);

return statearr_27792;
})();
var statearr_27793_27819 = state_27771__$1;
(statearr_27793_27819[(2)] = null);

(statearr_27793_27819[(1)] = (2));


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
});})(c__19810__auto___27805,out))
;
return ((function (switch__19745__auto__,c__19810__auto___27805,out){
return (function() {
var cljs$core$async$state_machine__19746__auto__ = null;
var cljs$core$async$state_machine__19746__auto____0 = (function (){
var statearr_27797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27797[(0)] = cljs$core$async$state_machine__19746__auto__);

(statearr_27797[(1)] = (1));

return statearr_27797;
});
var cljs$core$async$state_machine__19746__auto____1 = (function (state_27771){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_27771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e27798){if((e27798 instanceof Object)){
var ex__19749__auto__ = e27798;
var statearr_27799_27820 = state_27771;
(statearr_27799_27820[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27821 = state_27771;
state_27771 = G__27821;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
cljs$core$async$state_machine__19746__auto__ = function(state_27771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19746__auto____1.call(this,state_27771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19746__auto____0;
cljs$core$async$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19746__auto____1;
return cljs$core$async$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___27805,out))
})();
var state__19812__auto__ = (function (){var statearr_27800 = f__19811__auto__.call(null);
(statearr_27800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___27805);

return statearr_27800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___27805,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1443563492228