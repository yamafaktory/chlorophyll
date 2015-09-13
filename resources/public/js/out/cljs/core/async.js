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
if(typeof cljs.core.async.t_cljs$core$async24679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24679 = (function (fn_handler,f,meta24680){
this.fn_handler = fn_handler;
this.f = f;
this.meta24680 = meta24680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24681,meta24680__$1){
var self__ = this;
var _24681__$1 = this;
return (new cljs.core.async.t_cljs$core$async24679(self__.fn_handler,self__.f,meta24680__$1));
});

cljs.core.async.t_cljs$core$async24679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24681){
var self__ = this;
var _24681__$1 = this;
return self__.meta24680;
});

cljs.core.async.t_cljs$core$async24679.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24680","meta24680",-1995128141,null)], null);
});

cljs.core.async.t_cljs$core$async24679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24679";

cljs.core.async.t_cljs$core$async24679.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24679");
});

cljs.core.async.__GT_t_cljs$core$async24679 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async24679(fn_handler__$1,f__$1,meta24680){
return (new cljs.core.async.t_cljs$core$async24679(fn_handler__$1,f__$1,meta24680));
});

}

return (new cljs.core.async.t_cljs$core$async24679(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args24684 = [];
var len__17395__auto___24687 = arguments.length;
var i__17396__auto___24688 = (0);
while(true){
if((i__17396__auto___24688 < len__17395__auto___24687)){
args24684.push((arguments[i__17396__auto___24688]));

var G__24689 = (i__17396__auto___24688 + (1));
i__17396__auto___24688 = G__24689;
continue;
} else {
}
break;
}

var G__24686 = args24684.length;
switch (G__24686) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24684.length)].join('')));

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
var args24691 = [];
var len__17395__auto___24694 = arguments.length;
var i__17396__auto___24695 = (0);
while(true){
if((i__17396__auto___24695 < len__17395__auto___24694)){
args24691.push((arguments[i__17396__auto___24695]));

var G__24696 = (i__17396__auto___24695 + (1));
i__17396__auto___24695 = G__24696;
continue;
} else {
}
break;
}

var G__24693 = args24691.length;
switch (G__24693) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24691.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24698 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24698);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24698,ret){
return (function (){
return fn1.call(null,val_24698);
});})(val_24698,ret))
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
var args24699 = [];
var len__17395__auto___24702 = arguments.length;
var i__17396__auto___24703 = (0);
while(true){
if((i__17396__auto___24703 < len__17395__auto___24702)){
args24699.push((arguments[i__17396__auto___24703]));

var G__24704 = (i__17396__auto___24703 + (1));
i__17396__auto___24703 = G__24704;
continue;
} else {
}
break;
}

var G__24701 = args24699.length;
switch (G__24701) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24699.length)].join('')));

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
var n__17240__auto___24706 = n;
var x_24707 = (0);
while(true){
if((x_24707 < n__17240__auto___24706)){
(a[x_24707] = (0));

var G__24708 = (x_24707 + (1));
x_24707 = G__24708;
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

var G__24709 = (i + (1));
i = G__24709;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24713 = (function (alt_flag,flag,meta24714){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24714 = meta24714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24715,meta24714__$1){
var self__ = this;
var _24715__$1 = this;
return (new cljs.core.async.t_cljs$core$async24713(self__.alt_flag,self__.flag,meta24714__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24715){
var self__ = this;
var _24715__$1 = this;
return self__.meta24714;
});})(flag))
;

cljs.core.async.t_cljs$core$async24713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24713.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24714","meta24714",-1104396906,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24713";

cljs.core.async.t_cljs$core$async24713.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24713");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24713 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24713(alt_flag__$1,flag__$1,meta24714){
return (new cljs.core.async.t_cljs$core$async24713(alt_flag__$1,flag__$1,meta24714));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24713(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24719 = (function (alt_handler,flag,cb,meta24720){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24720 = meta24720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24721,meta24720__$1){
var self__ = this;
var _24721__$1 = this;
return (new cljs.core.async.t_cljs$core$async24719(self__.alt_handler,self__.flag,self__.cb,meta24720__$1));
});

cljs.core.async.t_cljs$core$async24719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24721){
var self__ = this;
var _24721__$1 = this;
return self__.meta24720;
});

cljs.core.async.t_cljs$core$async24719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24720","meta24720",-1999851908,null)], null);
});

cljs.core.async.t_cljs$core$async24719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24719";

cljs.core.async.t_cljs$core$async24719.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24719");
});

cljs.core.async.__GT_t_cljs$core$async24719 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24719(alt_handler__$1,flag__$1,cb__$1,meta24720){
return (new cljs.core.async.t_cljs$core$async24719(alt_handler__$1,flag__$1,cb__$1,meta24720));
});

}

return (new cljs.core.async.t_cljs$core$async24719(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24722_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24722_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24723_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24723_SHARP_,port], null));
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
var G__24724 = (i + (1));
i = G__24724;
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
var len__17395__auto___24730 = arguments.length;
var i__17396__auto___24731 = (0);
while(true){
if((i__17396__auto___24731 < len__17395__auto___24730)){
args__17402__auto__.push((arguments[i__17396__auto___24731]));

var G__24732 = (i__17396__auto___24731 + (1));
i__17396__auto___24731 = G__24732;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((1) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17403__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24727){
var map__24728 = p__24727;
var map__24728__$1 = ((((!((map__24728 == null)))?((((map__24728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24728):map__24728);
var opts = map__24728__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24725){
var G__24726 = cljs.core.first.call(null,seq24725);
var seq24725__$1 = cljs.core.next.call(null,seq24725);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24726,seq24725__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24733 = [];
var len__17395__auto___24783 = arguments.length;
var i__17396__auto___24784 = (0);
while(true){
if((i__17396__auto___24784 < len__17395__auto___24783)){
args24733.push((arguments[i__17396__auto___24784]));

var G__24785 = (i__17396__auto___24784 + (1));
i__17396__auto___24784 = G__24785;
continue;
} else {
}
break;
}

var G__24735 = args24733.length;
switch (G__24735) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24733.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19710__auto___24787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___24787){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___24787){
return (function (state_24759){
var state_val_24760 = (state_24759[(1)]);
if((state_val_24760 === (7))){
var inst_24755 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24761_24788 = state_24759__$1;
(statearr_24761_24788[(2)] = inst_24755);

(statearr_24761_24788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (1))){
var state_24759__$1 = state_24759;
var statearr_24762_24789 = state_24759__$1;
(statearr_24762_24789[(2)] = null);

(statearr_24762_24789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (4))){
var inst_24738 = (state_24759[(7)]);
var inst_24738__$1 = (state_24759[(2)]);
var inst_24739 = (inst_24738__$1 == null);
var state_24759__$1 = (function (){var statearr_24763 = state_24759;
(statearr_24763[(7)] = inst_24738__$1);

return statearr_24763;
})();
if(cljs.core.truth_(inst_24739)){
var statearr_24764_24790 = state_24759__$1;
(statearr_24764_24790[(1)] = (5));

} else {
var statearr_24765_24791 = state_24759__$1;
(statearr_24765_24791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (13))){
var state_24759__$1 = state_24759;
var statearr_24766_24792 = state_24759__$1;
(statearr_24766_24792[(2)] = null);

(statearr_24766_24792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (6))){
var inst_24738 = (state_24759[(7)]);
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24759__$1,(11),to,inst_24738);
} else {
if((state_val_24760 === (3))){
var inst_24757 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24759__$1,inst_24757);
} else {
if((state_val_24760 === (12))){
var state_24759__$1 = state_24759;
var statearr_24767_24793 = state_24759__$1;
(statearr_24767_24793[(2)] = null);

(statearr_24767_24793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (2))){
var state_24759__$1 = state_24759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24759__$1,(4),from);
} else {
if((state_val_24760 === (11))){
var inst_24748 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
if(cljs.core.truth_(inst_24748)){
var statearr_24768_24794 = state_24759__$1;
(statearr_24768_24794[(1)] = (12));

} else {
var statearr_24769_24795 = state_24759__$1;
(statearr_24769_24795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (9))){
var state_24759__$1 = state_24759;
var statearr_24770_24796 = state_24759__$1;
(statearr_24770_24796[(2)] = null);

(statearr_24770_24796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (5))){
var state_24759__$1 = state_24759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24771_24797 = state_24759__$1;
(statearr_24771_24797[(1)] = (8));

} else {
var statearr_24772_24798 = state_24759__$1;
(statearr_24772_24798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (14))){
var inst_24753 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24773_24799 = state_24759__$1;
(statearr_24773_24799[(2)] = inst_24753);

(statearr_24773_24799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (10))){
var inst_24745 = (state_24759[(2)]);
var state_24759__$1 = state_24759;
var statearr_24774_24800 = state_24759__$1;
(statearr_24774_24800[(2)] = inst_24745);

(statearr_24774_24800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24760 === (8))){
var inst_24742 = cljs.core.async.close_BANG_.call(null,to);
var state_24759__$1 = state_24759;
var statearr_24775_24801 = state_24759__$1;
(statearr_24775_24801[(2)] = inst_24742);

(statearr_24775_24801[(1)] = (10));


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
});})(c__19710__auto___24787))
;
return ((function (switch__19645__auto__,c__19710__auto___24787){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_24779 = [null,null,null,null,null,null,null,null];
(statearr_24779[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_24779[(1)] = (1));

return statearr_24779;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_24759){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_24759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e24780){if((e24780 instanceof Object)){
var ex__19649__auto__ = e24780;
var statearr_24781_24802 = state_24759;
(statearr_24781_24802[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24803 = state_24759;
state_24759 = G__24803;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_24759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_24759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___24787))
})();
var state__19712__auto__ = (function (){var statearr_24782 = f__19711__auto__.call(null);
(statearr_24782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___24787);

return statearr_24782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___24787))
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
return (function (p__24987){
var vec__24988 = p__24987;
var v = cljs.core.nth.call(null,vec__24988,(0),null);
var p = cljs.core.nth.call(null,vec__24988,(1),null);
var job = vec__24988;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19710__auto___25170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___25170,res,vec__24988,v,p,job,jobs,results){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___25170,res,vec__24988,v,p,job,jobs,results){
return (function (state_24993){
var state_val_24994 = (state_24993[(1)]);
if((state_val_24994 === (1))){
var state_24993__$1 = state_24993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24993__$1,(2),res,v);
} else {
if((state_val_24994 === (2))){
var inst_24990 = (state_24993[(2)]);
var inst_24991 = cljs.core.async.close_BANG_.call(null,res);
var state_24993__$1 = (function (){var statearr_24995 = state_24993;
(statearr_24995[(7)] = inst_24990);

return statearr_24995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24993__$1,inst_24991);
} else {
return null;
}
}
});})(c__19710__auto___25170,res,vec__24988,v,p,job,jobs,results))
;
return ((function (switch__19645__auto__,c__19710__auto___25170,res,vec__24988,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0 = (function (){
var statearr_24999 = [null,null,null,null,null,null,null,null];
(statearr_24999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__);

(statearr_24999[(1)] = (1));

return statearr_24999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1 = (function (state_24993){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_24993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25000){if((e25000 instanceof Object)){
var ex__19649__auto__ = e25000;
var statearr_25001_25171 = state_24993;
(statearr_25001_25171[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25172 = state_24993;
state_24993 = G__25172;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = function(state_24993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1.call(this,state_24993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___25170,res,vec__24988,v,p,job,jobs,results))
})();
var state__19712__auto__ = (function (){var statearr_25002 = f__19711__auto__.call(null);
(statearr_25002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___25170);

return statearr_25002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___25170,res,vec__24988,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25003){
var vec__25004 = p__25003;
var v = cljs.core.nth.call(null,vec__25004,(0),null);
var p = cljs.core.nth.call(null,vec__25004,(1),null);
var job = vec__25004;
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
var n__17240__auto___25173 = n;
var __25174 = (0);
while(true){
if((__25174 < n__17240__auto___25173)){
var G__25005_25175 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25005_25175) {
case "compute":
var c__19710__auto___25177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25174,c__19710__auto___25177,G__25005_25175,n__17240__auto___25173,jobs,results,process,async){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (__25174,c__19710__auto___25177,G__25005_25175,n__17240__auto___25173,jobs,results,process,async){
return (function (state_25018){
var state_val_25019 = (state_25018[(1)]);
if((state_val_25019 === (1))){
var state_25018__$1 = state_25018;
var statearr_25020_25178 = state_25018__$1;
(statearr_25020_25178[(2)] = null);

(statearr_25020_25178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25019 === (2))){
var state_25018__$1 = state_25018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25018__$1,(4),jobs);
} else {
if((state_val_25019 === (3))){
var inst_25016 = (state_25018[(2)]);
var state_25018__$1 = state_25018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25018__$1,inst_25016);
} else {
if((state_val_25019 === (4))){
var inst_25008 = (state_25018[(2)]);
var inst_25009 = process.call(null,inst_25008);
var state_25018__$1 = state_25018;
if(cljs.core.truth_(inst_25009)){
var statearr_25021_25179 = state_25018__$1;
(statearr_25021_25179[(1)] = (5));

} else {
var statearr_25022_25180 = state_25018__$1;
(statearr_25022_25180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25019 === (5))){
var state_25018__$1 = state_25018;
var statearr_25023_25181 = state_25018__$1;
(statearr_25023_25181[(2)] = null);

(statearr_25023_25181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25019 === (6))){
var state_25018__$1 = state_25018;
var statearr_25024_25182 = state_25018__$1;
(statearr_25024_25182[(2)] = null);

(statearr_25024_25182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25019 === (7))){
var inst_25014 = (state_25018[(2)]);
var state_25018__$1 = state_25018;
var statearr_25025_25183 = state_25018__$1;
(statearr_25025_25183[(2)] = inst_25014);

(statearr_25025_25183[(1)] = (3));


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
});})(__25174,c__19710__auto___25177,G__25005_25175,n__17240__auto___25173,jobs,results,process,async))
;
return ((function (__25174,switch__19645__auto__,c__19710__auto___25177,G__25005_25175,n__17240__auto___25173,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0 = (function (){
var statearr_25029 = [null,null,null,null,null,null,null];
(statearr_25029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__);

(statearr_25029[(1)] = (1));

return statearr_25029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1 = (function (state_25018){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25030){if((e25030 instanceof Object)){
var ex__19649__auto__ = e25030;
var statearr_25031_25184 = state_25018;
(statearr_25031_25184[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25185 = state_25018;
state_25018 = G__25185;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = function(state_25018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1.call(this,state_25018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__;
})()
;})(__25174,switch__19645__auto__,c__19710__auto___25177,G__25005_25175,n__17240__auto___25173,jobs,results,process,async))
})();
var state__19712__auto__ = (function (){var statearr_25032 = f__19711__auto__.call(null);
(statearr_25032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___25177);

return statearr_25032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(__25174,c__19710__auto___25177,G__25005_25175,n__17240__auto___25173,jobs,results,process,async))
);


break;
case "async":
var c__19710__auto___25186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25174,c__19710__auto___25186,G__25005_25175,n__17240__auto___25173,jobs,results,process,async){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (__25174,c__19710__auto___25186,G__25005_25175,n__17240__auto___25173,jobs,results,process,async){
return (function (state_25045){
var state_val_25046 = (state_25045[(1)]);
if((state_val_25046 === (1))){
var state_25045__$1 = state_25045;
var statearr_25047_25187 = state_25045__$1;
(statearr_25047_25187[(2)] = null);

(statearr_25047_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (2))){
var state_25045__$1 = state_25045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25045__$1,(4),jobs);
} else {
if((state_val_25046 === (3))){
var inst_25043 = (state_25045[(2)]);
var state_25045__$1 = state_25045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25045__$1,inst_25043);
} else {
if((state_val_25046 === (4))){
var inst_25035 = (state_25045[(2)]);
var inst_25036 = async.call(null,inst_25035);
var state_25045__$1 = state_25045;
if(cljs.core.truth_(inst_25036)){
var statearr_25048_25188 = state_25045__$1;
(statearr_25048_25188[(1)] = (5));

} else {
var statearr_25049_25189 = state_25045__$1;
(statearr_25049_25189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (5))){
var state_25045__$1 = state_25045;
var statearr_25050_25190 = state_25045__$1;
(statearr_25050_25190[(2)] = null);

(statearr_25050_25190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (6))){
var state_25045__$1 = state_25045;
var statearr_25051_25191 = state_25045__$1;
(statearr_25051_25191[(2)] = null);

(statearr_25051_25191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25046 === (7))){
var inst_25041 = (state_25045[(2)]);
var state_25045__$1 = state_25045;
var statearr_25052_25192 = state_25045__$1;
(statearr_25052_25192[(2)] = inst_25041);

(statearr_25052_25192[(1)] = (3));


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
});})(__25174,c__19710__auto___25186,G__25005_25175,n__17240__auto___25173,jobs,results,process,async))
;
return ((function (__25174,switch__19645__auto__,c__19710__auto___25186,G__25005_25175,n__17240__auto___25173,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0 = (function (){
var statearr_25056 = [null,null,null,null,null,null,null];
(statearr_25056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__);

(statearr_25056[(1)] = (1));

return statearr_25056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1 = (function (state_25045){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25057){if((e25057 instanceof Object)){
var ex__19649__auto__ = e25057;
var statearr_25058_25193 = state_25045;
(statearr_25058_25193[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25194 = state_25045;
state_25045 = G__25194;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = function(state_25045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1.call(this,state_25045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__;
})()
;})(__25174,switch__19645__auto__,c__19710__auto___25186,G__25005_25175,n__17240__auto___25173,jobs,results,process,async))
})();
var state__19712__auto__ = (function (){var statearr_25059 = f__19711__auto__.call(null);
(statearr_25059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___25186);

return statearr_25059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(__25174,c__19710__auto___25186,G__25005_25175,n__17240__auto___25173,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25195 = (__25174 + (1));
__25174 = G__25195;
continue;
} else {
}
break;
}

var c__19710__auto___25196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___25196,jobs,results,process,async){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___25196,jobs,results,process,async){
return (function (state_25081){
var state_val_25082 = (state_25081[(1)]);
if((state_val_25082 === (1))){
var state_25081__$1 = state_25081;
var statearr_25083_25197 = state_25081__$1;
(statearr_25083_25197[(2)] = null);

(statearr_25083_25197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (2))){
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25081__$1,(4),from);
} else {
if((state_val_25082 === (3))){
var inst_25079 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25081__$1,inst_25079);
} else {
if((state_val_25082 === (4))){
var inst_25062 = (state_25081[(7)]);
var inst_25062__$1 = (state_25081[(2)]);
var inst_25063 = (inst_25062__$1 == null);
var state_25081__$1 = (function (){var statearr_25084 = state_25081;
(statearr_25084[(7)] = inst_25062__$1);

return statearr_25084;
})();
if(cljs.core.truth_(inst_25063)){
var statearr_25085_25198 = state_25081__$1;
(statearr_25085_25198[(1)] = (5));

} else {
var statearr_25086_25199 = state_25081__$1;
(statearr_25086_25199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (5))){
var inst_25065 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25081__$1 = state_25081;
var statearr_25087_25200 = state_25081__$1;
(statearr_25087_25200[(2)] = inst_25065);

(statearr_25087_25200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (6))){
var inst_25067 = (state_25081[(8)]);
var inst_25062 = (state_25081[(7)]);
var inst_25067__$1 = cljs.core.async.chan.call(null,(1));
var inst_25068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25069 = [inst_25062,inst_25067__$1];
var inst_25070 = (new cljs.core.PersistentVector(null,2,(5),inst_25068,inst_25069,null));
var state_25081__$1 = (function (){var statearr_25088 = state_25081;
(statearr_25088[(8)] = inst_25067__$1);

return statearr_25088;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25081__$1,(8),jobs,inst_25070);
} else {
if((state_val_25082 === (7))){
var inst_25077 = (state_25081[(2)]);
var state_25081__$1 = state_25081;
var statearr_25089_25201 = state_25081__$1;
(statearr_25089_25201[(2)] = inst_25077);

(statearr_25089_25201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25082 === (8))){
var inst_25067 = (state_25081[(8)]);
var inst_25072 = (state_25081[(2)]);
var state_25081__$1 = (function (){var statearr_25090 = state_25081;
(statearr_25090[(9)] = inst_25072);

return statearr_25090;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25081__$1,(9),results,inst_25067);
} else {
if((state_val_25082 === (9))){
var inst_25074 = (state_25081[(2)]);
var state_25081__$1 = (function (){var statearr_25091 = state_25081;
(statearr_25091[(10)] = inst_25074);

return statearr_25091;
})();
var statearr_25092_25202 = state_25081__$1;
(statearr_25092_25202[(2)] = null);

(statearr_25092_25202[(1)] = (2));


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
});})(c__19710__auto___25196,jobs,results,process,async))
;
return ((function (switch__19645__auto__,c__19710__auto___25196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0 = (function (){
var statearr_25096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__);

(statearr_25096[(1)] = (1));

return statearr_25096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1 = (function (state_25081){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25097){if((e25097 instanceof Object)){
var ex__19649__auto__ = e25097;
var statearr_25098_25203 = state_25081;
(statearr_25098_25203[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25204 = state_25081;
state_25081 = G__25204;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = function(state_25081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1.call(this,state_25081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___25196,jobs,results,process,async))
})();
var state__19712__auto__ = (function (){var statearr_25099 = f__19711__auto__.call(null);
(statearr_25099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___25196);

return statearr_25099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___25196,jobs,results,process,async))
);


var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__,jobs,results,process,async){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__,jobs,results,process,async){
return (function (state_25137){
var state_val_25138 = (state_25137[(1)]);
if((state_val_25138 === (7))){
var inst_25133 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25139_25205 = state_25137__$1;
(statearr_25139_25205[(2)] = inst_25133);

(statearr_25139_25205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (20))){
var state_25137__$1 = state_25137;
var statearr_25140_25206 = state_25137__$1;
(statearr_25140_25206[(2)] = null);

(statearr_25140_25206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (1))){
var state_25137__$1 = state_25137;
var statearr_25141_25207 = state_25137__$1;
(statearr_25141_25207[(2)] = null);

(statearr_25141_25207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (4))){
var inst_25102 = (state_25137[(7)]);
var inst_25102__$1 = (state_25137[(2)]);
var inst_25103 = (inst_25102__$1 == null);
var state_25137__$1 = (function (){var statearr_25142 = state_25137;
(statearr_25142[(7)] = inst_25102__$1);

return statearr_25142;
})();
if(cljs.core.truth_(inst_25103)){
var statearr_25143_25208 = state_25137__$1;
(statearr_25143_25208[(1)] = (5));

} else {
var statearr_25144_25209 = state_25137__$1;
(statearr_25144_25209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (15))){
var inst_25115 = (state_25137[(8)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25137__$1,(18),to,inst_25115);
} else {
if((state_val_25138 === (21))){
var inst_25128 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25145_25210 = state_25137__$1;
(statearr_25145_25210[(2)] = inst_25128);

(statearr_25145_25210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (13))){
var inst_25130 = (state_25137[(2)]);
var state_25137__$1 = (function (){var statearr_25146 = state_25137;
(statearr_25146[(9)] = inst_25130);

return statearr_25146;
})();
var statearr_25147_25211 = state_25137__$1;
(statearr_25147_25211[(2)] = null);

(statearr_25147_25211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (6))){
var inst_25102 = (state_25137[(7)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25137__$1,(11),inst_25102);
} else {
if((state_val_25138 === (17))){
var inst_25123 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
if(cljs.core.truth_(inst_25123)){
var statearr_25148_25212 = state_25137__$1;
(statearr_25148_25212[(1)] = (19));

} else {
var statearr_25149_25213 = state_25137__$1;
(statearr_25149_25213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (3))){
var inst_25135 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25137__$1,inst_25135);
} else {
if((state_val_25138 === (12))){
var inst_25112 = (state_25137[(10)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25137__$1,(14),inst_25112);
} else {
if((state_val_25138 === (2))){
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25137__$1,(4),results);
} else {
if((state_val_25138 === (19))){
var state_25137__$1 = state_25137;
var statearr_25150_25214 = state_25137__$1;
(statearr_25150_25214[(2)] = null);

(statearr_25150_25214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (11))){
var inst_25112 = (state_25137[(2)]);
var state_25137__$1 = (function (){var statearr_25151 = state_25137;
(statearr_25151[(10)] = inst_25112);

return statearr_25151;
})();
var statearr_25152_25215 = state_25137__$1;
(statearr_25152_25215[(2)] = null);

(statearr_25152_25215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (9))){
var state_25137__$1 = state_25137;
var statearr_25153_25216 = state_25137__$1;
(statearr_25153_25216[(2)] = null);

(statearr_25153_25216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (5))){
var state_25137__$1 = state_25137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25154_25217 = state_25137__$1;
(statearr_25154_25217[(1)] = (8));

} else {
var statearr_25155_25218 = state_25137__$1;
(statearr_25155_25218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (14))){
var inst_25117 = (state_25137[(11)]);
var inst_25115 = (state_25137[(8)]);
var inst_25115__$1 = (state_25137[(2)]);
var inst_25116 = (inst_25115__$1 == null);
var inst_25117__$1 = cljs.core.not.call(null,inst_25116);
var state_25137__$1 = (function (){var statearr_25156 = state_25137;
(statearr_25156[(11)] = inst_25117__$1);

(statearr_25156[(8)] = inst_25115__$1);

return statearr_25156;
})();
if(inst_25117__$1){
var statearr_25157_25219 = state_25137__$1;
(statearr_25157_25219[(1)] = (15));

} else {
var statearr_25158_25220 = state_25137__$1;
(statearr_25158_25220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (16))){
var inst_25117 = (state_25137[(11)]);
var state_25137__$1 = state_25137;
var statearr_25159_25221 = state_25137__$1;
(statearr_25159_25221[(2)] = inst_25117);

(statearr_25159_25221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (10))){
var inst_25109 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25160_25222 = state_25137__$1;
(statearr_25160_25222[(2)] = inst_25109);

(statearr_25160_25222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (18))){
var inst_25120 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25161_25223 = state_25137__$1;
(statearr_25161_25223[(2)] = inst_25120);

(statearr_25161_25223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (8))){
var inst_25106 = cljs.core.async.close_BANG_.call(null,to);
var state_25137__$1 = state_25137;
var statearr_25162_25224 = state_25137__$1;
(statearr_25162_25224[(2)] = inst_25106);

(statearr_25162_25224[(1)] = (10));


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
});})(c__19710__auto__,jobs,results,process,async))
;
return ((function (switch__19645__auto__,c__19710__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0 = (function (){
var statearr_25166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__);

(statearr_25166[(1)] = (1));

return statearr_25166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1 = (function (state_25137){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25167){if((e25167 instanceof Object)){
var ex__19649__auto__ = e25167;
var statearr_25168_25225 = state_25137;
(statearr_25168_25225[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25226 = state_25137;
state_25137 = G__25226;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__ = function(state_25137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1.call(this,state_25137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19646__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__,jobs,results,process,async))
})();
var state__19712__auto__ = (function (){var statearr_25169 = f__19711__auto__.call(null);
(statearr_25169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_25169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__,jobs,results,process,async))
);

return c__19710__auto__;
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
var args25227 = [];
var len__17395__auto___25230 = arguments.length;
var i__17396__auto___25231 = (0);
while(true){
if((i__17396__auto___25231 < len__17395__auto___25230)){
args25227.push((arguments[i__17396__auto___25231]));

var G__25232 = (i__17396__auto___25231 + (1));
i__17396__auto___25231 = G__25232;
continue;
} else {
}
break;
}

var G__25229 = args25227.length;
switch (G__25229) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25227.length)].join('')));

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
var args25234 = [];
var len__17395__auto___25237 = arguments.length;
var i__17396__auto___25238 = (0);
while(true){
if((i__17396__auto___25238 < len__17395__auto___25237)){
args25234.push((arguments[i__17396__auto___25238]));

var G__25239 = (i__17396__auto___25238 + (1));
i__17396__auto___25238 = G__25239;
continue;
} else {
}
break;
}

var G__25236 = args25234.length;
switch (G__25236) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25234.length)].join('')));

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
var args25241 = [];
var len__17395__auto___25294 = arguments.length;
var i__17396__auto___25295 = (0);
while(true){
if((i__17396__auto___25295 < len__17395__auto___25294)){
args25241.push((arguments[i__17396__auto___25295]));

var G__25296 = (i__17396__auto___25295 + (1));
i__17396__auto___25295 = G__25296;
continue;
} else {
}
break;
}

var G__25243 = args25241.length;
switch (G__25243) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25241.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19710__auto___25298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___25298,tc,fc){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___25298,tc,fc){
return (function (state_25269){
var state_val_25270 = (state_25269[(1)]);
if((state_val_25270 === (7))){
var inst_25265 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25271_25299 = state_25269__$1;
(statearr_25271_25299[(2)] = inst_25265);

(statearr_25271_25299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (1))){
var state_25269__$1 = state_25269;
var statearr_25272_25300 = state_25269__$1;
(statearr_25272_25300[(2)] = null);

(statearr_25272_25300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (4))){
var inst_25246 = (state_25269[(7)]);
var inst_25246__$1 = (state_25269[(2)]);
var inst_25247 = (inst_25246__$1 == null);
var state_25269__$1 = (function (){var statearr_25273 = state_25269;
(statearr_25273[(7)] = inst_25246__$1);

return statearr_25273;
})();
if(cljs.core.truth_(inst_25247)){
var statearr_25274_25301 = state_25269__$1;
(statearr_25274_25301[(1)] = (5));

} else {
var statearr_25275_25302 = state_25269__$1;
(statearr_25275_25302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (13))){
var state_25269__$1 = state_25269;
var statearr_25276_25303 = state_25269__$1;
(statearr_25276_25303[(2)] = null);

(statearr_25276_25303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (6))){
var inst_25246 = (state_25269[(7)]);
var inst_25252 = p.call(null,inst_25246);
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25252)){
var statearr_25277_25304 = state_25269__$1;
(statearr_25277_25304[(1)] = (9));

} else {
var statearr_25278_25305 = state_25269__$1;
(statearr_25278_25305[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (3))){
var inst_25267 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25269__$1,inst_25267);
} else {
if((state_val_25270 === (12))){
var state_25269__$1 = state_25269;
var statearr_25279_25306 = state_25269__$1;
(statearr_25279_25306[(2)] = null);

(statearr_25279_25306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (2))){
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25269__$1,(4),ch);
} else {
if((state_val_25270 === (11))){
var inst_25246 = (state_25269[(7)]);
var inst_25256 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25269__$1,(8),inst_25256,inst_25246);
} else {
if((state_val_25270 === (9))){
var state_25269__$1 = state_25269;
var statearr_25280_25307 = state_25269__$1;
(statearr_25280_25307[(2)] = tc);

(statearr_25280_25307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (5))){
var inst_25249 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25250 = cljs.core.async.close_BANG_.call(null,fc);
var state_25269__$1 = (function (){var statearr_25281 = state_25269;
(statearr_25281[(8)] = inst_25249);

return statearr_25281;
})();
var statearr_25282_25308 = state_25269__$1;
(statearr_25282_25308[(2)] = inst_25250);

(statearr_25282_25308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (14))){
var inst_25263 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25283_25309 = state_25269__$1;
(statearr_25283_25309[(2)] = inst_25263);

(statearr_25283_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (10))){
var state_25269__$1 = state_25269;
var statearr_25284_25310 = state_25269__$1;
(statearr_25284_25310[(2)] = fc);

(statearr_25284_25310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (8))){
var inst_25258 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25258)){
var statearr_25285_25311 = state_25269__$1;
(statearr_25285_25311[(1)] = (12));

} else {
var statearr_25286_25312 = state_25269__$1;
(statearr_25286_25312[(1)] = (13));

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
});})(c__19710__auto___25298,tc,fc))
;
return ((function (switch__19645__auto__,c__19710__auto___25298,tc,fc){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_25290 = [null,null,null,null,null,null,null,null,null];
(statearr_25290[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_25290[(1)] = (1));

return statearr_25290;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_25269){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25291){if((e25291 instanceof Object)){
var ex__19649__auto__ = e25291;
var statearr_25292_25313 = state_25269;
(statearr_25292_25313[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25314 = state_25269;
state_25269 = G__25314;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_25269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_25269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___25298,tc,fc))
})();
var state__19712__auto__ = (function (){var statearr_25293 = f__19711__auto__.call(null);
(statearr_25293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___25298);

return statearr_25293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___25298,tc,fc))
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
var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__){
return (function (state_25361){
var state_val_25362 = (state_25361[(1)]);
if((state_val_25362 === (1))){
var inst_25347 = init;
var state_25361__$1 = (function (){var statearr_25363 = state_25361;
(statearr_25363[(7)] = inst_25347);

return statearr_25363;
})();
var statearr_25364_25379 = state_25361__$1;
(statearr_25364_25379[(2)] = null);

(statearr_25364_25379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (2))){
var state_25361__$1 = state_25361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25361__$1,(4),ch);
} else {
if((state_val_25362 === (3))){
var inst_25359 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25361__$1,inst_25359);
} else {
if((state_val_25362 === (4))){
var inst_25350 = (state_25361[(8)]);
var inst_25350__$1 = (state_25361[(2)]);
var inst_25351 = (inst_25350__$1 == null);
var state_25361__$1 = (function (){var statearr_25365 = state_25361;
(statearr_25365[(8)] = inst_25350__$1);

return statearr_25365;
})();
if(cljs.core.truth_(inst_25351)){
var statearr_25366_25380 = state_25361__$1;
(statearr_25366_25380[(1)] = (5));

} else {
var statearr_25367_25381 = state_25361__$1;
(statearr_25367_25381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (5))){
var inst_25347 = (state_25361[(7)]);
var state_25361__$1 = state_25361;
var statearr_25368_25382 = state_25361__$1;
(statearr_25368_25382[(2)] = inst_25347);

(statearr_25368_25382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (6))){
var inst_25347 = (state_25361[(7)]);
var inst_25350 = (state_25361[(8)]);
var inst_25354 = f.call(null,inst_25347,inst_25350);
var inst_25347__$1 = inst_25354;
var state_25361__$1 = (function (){var statearr_25369 = state_25361;
(statearr_25369[(7)] = inst_25347__$1);

return statearr_25369;
})();
var statearr_25370_25383 = state_25361__$1;
(statearr_25370_25383[(2)] = null);

(statearr_25370_25383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25362 === (7))){
var inst_25357 = (state_25361[(2)]);
var state_25361__$1 = state_25361;
var statearr_25371_25384 = state_25361__$1;
(statearr_25371_25384[(2)] = inst_25357);

(statearr_25371_25384[(1)] = (3));


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
});})(c__19710__auto__))
;
return ((function (switch__19645__auto__,c__19710__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19646__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19646__auto____0 = (function (){
var statearr_25375 = [null,null,null,null,null,null,null,null,null];
(statearr_25375[(0)] = cljs$core$async$reduce_$_state_machine__19646__auto__);

(statearr_25375[(1)] = (1));

return statearr_25375;
});
var cljs$core$async$reduce_$_state_machine__19646__auto____1 = (function (state_25361){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25376){if((e25376 instanceof Object)){
var ex__19649__auto__ = e25376;
var statearr_25377_25385 = state_25361;
(statearr_25377_25385[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25386 = state_25361;
state_25361 = G__25386;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19646__auto__ = function(state_25361){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19646__auto____1.call(this,state_25361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19646__auto____0;
cljs$core$async$reduce_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19646__auto____1;
return cljs$core$async$reduce_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__))
})();
var state__19712__auto__ = (function (){var statearr_25378 = f__19711__auto__.call(null);
(statearr_25378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_25378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__))
);

return c__19710__auto__;
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
var args25387 = [];
var len__17395__auto___25439 = arguments.length;
var i__17396__auto___25440 = (0);
while(true){
if((i__17396__auto___25440 < len__17395__auto___25439)){
args25387.push((arguments[i__17396__auto___25440]));

var G__25441 = (i__17396__auto___25440 + (1));
i__17396__auto___25440 = G__25441;
continue;
} else {
}
break;
}

var G__25389 = args25387.length;
switch (G__25389) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25387.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__){
return (function (state_25414){
var state_val_25415 = (state_25414[(1)]);
if((state_val_25415 === (7))){
var inst_25396 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
var statearr_25416_25443 = state_25414__$1;
(statearr_25416_25443[(2)] = inst_25396);

(statearr_25416_25443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (1))){
var inst_25390 = cljs.core.seq.call(null,coll);
var inst_25391 = inst_25390;
var state_25414__$1 = (function (){var statearr_25417 = state_25414;
(statearr_25417[(7)] = inst_25391);

return statearr_25417;
})();
var statearr_25418_25444 = state_25414__$1;
(statearr_25418_25444[(2)] = null);

(statearr_25418_25444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (4))){
var inst_25391 = (state_25414[(7)]);
var inst_25394 = cljs.core.first.call(null,inst_25391);
var state_25414__$1 = state_25414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25414__$1,(7),ch,inst_25394);
} else {
if((state_val_25415 === (13))){
var inst_25408 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
var statearr_25419_25445 = state_25414__$1;
(statearr_25419_25445[(2)] = inst_25408);

(statearr_25419_25445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (6))){
var inst_25399 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
if(cljs.core.truth_(inst_25399)){
var statearr_25420_25446 = state_25414__$1;
(statearr_25420_25446[(1)] = (8));

} else {
var statearr_25421_25447 = state_25414__$1;
(statearr_25421_25447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (3))){
var inst_25412 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25414__$1,inst_25412);
} else {
if((state_val_25415 === (12))){
var state_25414__$1 = state_25414;
var statearr_25422_25448 = state_25414__$1;
(statearr_25422_25448[(2)] = null);

(statearr_25422_25448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (2))){
var inst_25391 = (state_25414[(7)]);
var state_25414__$1 = state_25414;
if(cljs.core.truth_(inst_25391)){
var statearr_25423_25449 = state_25414__$1;
(statearr_25423_25449[(1)] = (4));

} else {
var statearr_25424_25450 = state_25414__$1;
(statearr_25424_25450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (11))){
var inst_25405 = cljs.core.async.close_BANG_.call(null,ch);
var state_25414__$1 = state_25414;
var statearr_25425_25451 = state_25414__$1;
(statearr_25425_25451[(2)] = inst_25405);

(statearr_25425_25451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (9))){
var state_25414__$1 = state_25414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25426_25452 = state_25414__$1;
(statearr_25426_25452[(1)] = (11));

} else {
var statearr_25427_25453 = state_25414__$1;
(statearr_25427_25453[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (5))){
var inst_25391 = (state_25414[(7)]);
var state_25414__$1 = state_25414;
var statearr_25428_25454 = state_25414__$1;
(statearr_25428_25454[(2)] = inst_25391);

(statearr_25428_25454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (10))){
var inst_25410 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
var statearr_25429_25455 = state_25414__$1;
(statearr_25429_25455[(2)] = inst_25410);

(statearr_25429_25455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (8))){
var inst_25391 = (state_25414[(7)]);
var inst_25401 = cljs.core.next.call(null,inst_25391);
var inst_25391__$1 = inst_25401;
var state_25414__$1 = (function (){var statearr_25430 = state_25414;
(statearr_25430[(7)] = inst_25391__$1);

return statearr_25430;
})();
var statearr_25431_25456 = state_25414__$1;
(statearr_25431_25456[(2)] = null);

(statearr_25431_25456[(1)] = (2));


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
});})(c__19710__auto__))
;
return ((function (switch__19645__auto__,c__19710__auto__){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_25435 = [null,null,null,null,null,null,null,null];
(statearr_25435[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_25435[(1)] = (1));

return statearr_25435;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_25414){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25436){if((e25436 instanceof Object)){
var ex__19649__auto__ = e25436;
var statearr_25437_25457 = state_25414;
(statearr_25437_25457[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25458 = state_25414;
state_25414 = G__25458;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_25414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_25414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__))
})();
var state__19712__auto__ = (function (){var statearr_25438 = f__19711__auto__.call(null);
(statearr_25438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_25438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__))
);

return c__19710__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25680 = (function (mult,ch,cs,meta25681){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25681 = meta25681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25682,meta25681__$1){
var self__ = this;
var _25682__$1 = this;
return (new cljs.core.async.t_cljs$core$async25680(self__.mult,self__.ch,self__.cs,meta25681__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25682){
var self__ = this;
var _25682__$1 = this;
return self__.meta25681;
});})(cs))
;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25680.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25680.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25681","meta25681",616853313,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25680";

cljs.core.async.t_cljs$core$async25680.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async25680");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25680 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25680(mult__$1,ch__$1,cs__$1,meta25681){
return (new cljs.core.async.t_cljs$core$async25680(mult__$1,ch__$1,cs__$1,meta25681));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25680(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19710__auto___25901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___25901,cs,m,dchan,dctr,done){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___25901,cs,m,dchan,dctr,done){
return (function (state_25813){
var state_val_25814 = (state_25813[(1)]);
if((state_val_25814 === (7))){
var inst_25809 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25815_25902 = state_25813__$1;
(statearr_25815_25902[(2)] = inst_25809);

(statearr_25815_25902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (20))){
var inst_25714 = (state_25813[(7)]);
var inst_25724 = cljs.core.first.call(null,inst_25714);
var inst_25725 = cljs.core.nth.call(null,inst_25724,(0),null);
var inst_25726 = cljs.core.nth.call(null,inst_25724,(1),null);
var state_25813__$1 = (function (){var statearr_25816 = state_25813;
(statearr_25816[(8)] = inst_25725);

return statearr_25816;
})();
if(cljs.core.truth_(inst_25726)){
var statearr_25817_25903 = state_25813__$1;
(statearr_25817_25903[(1)] = (22));

} else {
var statearr_25818_25904 = state_25813__$1;
(statearr_25818_25904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (27))){
var inst_25756 = (state_25813[(9)]);
var inst_25685 = (state_25813[(10)]);
var inst_25761 = (state_25813[(11)]);
var inst_25754 = (state_25813[(12)]);
var inst_25761__$1 = cljs.core._nth.call(null,inst_25754,inst_25756);
var inst_25762 = cljs.core.async.put_BANG_.call(null,inst_25761__$1,inst_25685,done);
var state_25813__$1 = (function (){var statearr_25819 = state_25813;
(statearr_25819[(11)] = inst_25761__$1);

return statearr_25819;
})();
if(cljs.core.truth_(inst_25762)){
var statearr_25820_25905 = state_25813__$1;
(statearr_25820_25905[(1)] = (30));

} else {
var statearr_25821_25906 = state_25813__$1;
(statearr_25821_25906[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (1))){
var state_25813__$1 = state_25813;
var statearr_25822_25907 = state_25813__$1;
(statearr_25822_25907[(2)] = null);

(statearr_25822_25907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (24))){
var inst_25714 = (state_25813[(7)]);
var inst_25731 = (state_25813[(2)]);
var inst_25732 = cljs.core.next.call(null,inst_25714);
var inst_25694 = inst_25732;
var inst_25695 = null;
var inst_25696 = (0);
var inst_25697 = (0);
var state_25813__$1 = (function (){var statearr_25823 = state_25813;
(statearr_25823[(13)] = inst_25731);

(statearr_25823[(14)] = inst_25697);

(statearr_25823[(15)] = inst_25694);

(statearr_25823[(16)] = inst_25696);

(statearr_25823[(17)] = inst_25695);

return statearr_25823;
})();
var statearr_25824_25908 = state_25813__$1;
(statearr_25824_25908[(2)] = null);

(statearr_25824_25908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (39))){
var state_25813__$1 = state_25813;
var statearr_25828_25909 = state_25813__$1;
(statearr_25828_25909[(2)] = null);

(statearr_25828_25909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (4))){
var inst_25685 = (state_25813[(10)]);
var inst_25685__$1 = (state_25813[(2)]);
var inst_25686 = (inst_25685__$1 == null);
var state_25813__$1 = (function (){var statearr_25829 = state_25813;
(statearr_25829[(10)] = inst_25685__$1);

return statearr_25829;
})();
if(cljs.core.truth_(inst_25686)){
var statearr_25830_25910 = state_25813__$1;
(statearr_25830_25910[(1)] = (5));

} else {
var statearr_25831_25911 = state_25813__$1;
(statearr_25831_25911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (15))){
var inst_25697 = (state_25813[(14)]);
var inst_25694 = (state_25813[(15)]);
var inst_25696 = (state_25813[(16)]);
var inst_25695 = (state_25813[(17)]);
var inst_25710 = (state_25813[(2)]);
var inst_25711 = (inst_25697 + (1));
var tmp25825 = inst_25694;
var tmp25826 = inst_25696;
var tmp25827 = inst_25695;
var inst_25694__$1 = tmp25825;
var inst_25695__$1 = tmp25827;
var inst_25696__$1 = tmp25826;
var inst_25697__$1 = inst_25711;
var state_25813__$1 = (function (){var statearr_25832 = state_25813;
(statearr_25832[(14)] = inst_25697__$1);

(statearr_25832[(15)] = inst_25694__$1);

(statearr_25832[(18)] = inst_25710);

(statearr_25832[(16)] = inst_25696__$1);

(statearr_25832[(17)] = inst_25695__$1);

return statearr_25832;
})();
var statearr_25833_25912 = state_25813__$1;
(statearr_25833_25912[(2)] = null);

(statearr_25833_25912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (21))){
var inst_25735 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25837_25913 = state_25813__$1;
(statearr_25837_25913[(2)] = inst_25735);

(statearr_25837_25913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (31))){
var inst_25761 = (state_25813[(11)]);
var inst_25765 = done.call(null,null);
var inst_25766 = cljs.core.async.untap_STAR_.call(null,m,inst_25761);
var state_25813__$1 = (function (){var statearr_25838 = state_25813;
(statearr_25838[(19)] = inst_25765);

return statearr_25838;
})();
var statearr_25839_25914 = state_25813__$1;
(statearr_25839_25914[(2)] = inst_25766);

(statearr_25839_25914[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (32))){
var inst_25756 = (state_25813[(9)]);
var inst_25755 = (state_25813[(20)]);
var inst_25753 = (state_25813[(21)]);
var inst_25754 = (state_25813[(12)]);
var inst_25768 = (state_25813[(2)]);
var inst_25769 = (inst_25756 + (1));
var tmp25834 = inst_25755;
var tmp25835 = inst_25753;
var tmp25836 = inst_25754;
var inst_25753__$1 = tmp25835;
var inst_25754__$1 = tmp25836;
var inst_25755__$1 = tmp25834;
var inst_25756__$1 = inst_25769;
var state_25813__$1 = (function (){var statearr_25840 = state_25813;
(statearr_25840[(9)] = inst_25756__$1);

(statearr_25840[(22)] = inst_25768);

(statearr_25840[(20)] = inst_25755__$1);

(statearr_25840[(21)] = inst_25753__$1);

(statearr_25840[(12)] = inst_25754__$1);

return statearr_25840;
})();
var statearr_25841_25915 = state_25813__$1;
(statearr_25841_25915[(2)] = null);

(statearr_25841_25915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (40))){
var inst_25781 = (state_25813[(23)]);
var inst_25785 = done.call(null,null);
var inst_25786 = cljs.core.async.untap_STAR_.call(null,m,inst_25781);
var state_25813__$1 = (function (){var statearr_25842 = state_25813;
(statearr_25842[(24)] = inst_25785);

return statearr_25842;
})();
var statearr_25843_25916 = state_25813__$1;
(statearr_25843_25916[(2)] = inst_25786);

(statearr_25843_25916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (33))){
var inst_25772 = (state_25813[(25)]);
var inst_25774 = cljs.core.chunked_seq_QMARK_.call(null,inst_25772);
var state_25813__$1 = state_25813;
if(inst_25774){
var statearr_25844_25917 = state_25813__$1;
(statearr_25844_25917[(1)] = (36));

} else {
var statearr_25845_25918 = state_25813__$1;
(statearr_25845_25918[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (13))){
var inst_25704 = (state_25813[(26)]);
var inst_25707 = cljs.core.async.close_BANG_.call(null,inst_25704);
var state_25813__$1 = state_25813;
var statearr_25846_25919 = state_25813__$1;
(statearr_25846_25919[(2)] = inst_25707);

(statearr_25846_25919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (22))){
var inst_25725 = (state_25813[(8)]);
var inst_25728 = cljs.core.async.close_BANG_.call(null,inst_25725);
var state_25813__$1 = state_25813;
var statearr_25847_25920 = state_25813__$1;
(statearr_25847_25920[(2)] = inst_25728);

(statearr_25847_25920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (36))){
var inst_25772 = (state_25813[(25)]);
var inst_25776 = cljs.core.chunk_first.call(null,inst_25772);
var inst_25777 = cljs.core.chunk_rest.call(null,inst_25772);
var inst_25778 = cljs.core.count.call(null,inst_25776);
var inst_25753 = inst_25777;
var inst_25754 = inst_25776;
var inst_25755 = inst_25778;
var inst_25756 = (0);
var state_25813__$1 = (function (){var statearr_25848 = state_25813;
(statearr_25848[(9)] = inst_25756);

(statearr_25848[(20)] = inst_25755);

(statearr_25848[(21)] = inst_25753);

(statearr_25848[(12)] = inst_25754);

return statearr_25848;
})();
var statearr_25849_25921 = state_25813__$1;
(statearr_25849_25921[(2)] = null);

(statearr_25849_25921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (41))){
var inst_25772 = (state_25813[(25)]);
var inst_25788 = (state_25813[(2)]);
var inst_25789 = cljs.core.next.call(null,inst_25772);
var inst_25753 = inst_25789;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25813__$1 = (function (){var statearr_25850 = state_25813;
(statearr_25850[(9)] = inst_25756);

(statearr_25850[(27)] = inst_25788);

(statearr_25850[(20)] = inst_25755);

(statearr_25850[(21)] = inst_25753);

(statearr_25850[(12)] = inst_25754);

return statearr_25850;
})();
var statearr_25851_25922 = state_25813__$1;
(statearr_25851_25922[(2)] = null);

(statearr_25851_25922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (43))){
var state_25813__$1 = state_25813;
var statearr_25852_25923 = state_25813__$1;
(statearr_25852_25923[(2)] = null);

(statearr_25852_25923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (29))){
var inst_25797 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25853_25924 = state_25813__$1;
(statearr_25853_25924[(2)] = inst_25797);

(statearr_25853_25924[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (44))){
var inst_25806 = (state_25813[(2)]);
var state_25813__$1 = (function (){var statearr_25854 = state_25813;
(statearr_25854[(28)] = inst_25806);

return statearr_25854;
})();
var statearr_25855_25925 = state_25813__$1;
(statearr_25855_25925[(2)] = null);

(statearr_25855_25925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (6))){
var inst_25745 = (state_25813[(29)]);
var inst_25744 = cljs.core.deref.call(null,cs);
var inst_25745__$1 = cljs.core.keys.call(null,inst_25744);
var inst_25746 = cljs.core.count.call(null,inst_25745__$1);
var inst_25747 = cljs.core.reset_BANG_.call(null,dctr,inst_25746);
var inst_25752 = cljs.core.seq.call(null,inst_25745__$1);
var inst_25753 = inst_25752;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25813__$1 = (function (){var statearr_25856 = state_25813;
(statearr_25856[(9)] = inst_25756);

(statearr_25856[(30)] = inst_25747);

(statearr_25856[(20)] = inst_25755);

(statearr_25856[(29)] = inst_25745__$1);

(statearr_25856[(21)] = inst_25753);

(statearr_25856[(12)] = inst_25754);

return statearr_25856;
})();
var statearr_25857_25926 = state_25813__$1;
(statearr_25857_25926[(2)] = null);

(statearr_25857_25926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (28))){
var inst_25772 = (state_25813[(25)]);
var inst_25753 = (state_25813[(21)]);
var inst_25772__$1 = cljs.core.seq.call(null,inst_25753);
var state_25813__$1 = (function (){var statearr_25858 = state_25813;
(statearr_25858[(25)] = inst_25772__$1);

return statearr_25858;
})();
if(inst_25772__$1){
var statearr_25859_25927 = state_25813__$1;
(statearr_25859_25927[(1)] = (33));

} else {
var statearr_25860_25928 = state_25813__$1;
(statearr_25860_25928[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (25))){
var inst_25756 = (state_25813[(9)]);
var inst_25755 = (state_25813[(20)]);
var inst_25758 = (inst_25756 < inst_25755);
var inst_25759 = inst_25758;
var state_25813__$1 = state_25813;
if(cljs.core.truth_(inst_25759)){
var statearr_25861_25929 = state_25813__$1;
(statearr_25861_25929[(1)] = (27));

} else {
var statearr_25862_25930 = state_25813__$1;
(statearr_25862_25930[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (34))){
var state_25813__$1 = state_25813;
var statearr_25863_25931 = state_25813__$1;
(statearr_25863_25931[(2)] = null);

(statearr_25863_25931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (17))){
var state_25813__$1 = state_25813;
var statearr_25864_25932 = state_25813__$1;
(statearr_25864_25932[(2)] = null);

(statearr_25864_25932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (3))){
var inst_25811 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25813__$1,inst_25811);
} else {
if((state_val_25814 === (12))){
var inst_25740 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25865_25933 = state_25813__$1;
(statearr_25865_25933[(2)] = inst_25740);

(statearr_25865_25933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (2))){
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25813__$1,(4),ch);
} else {
if((state_val_25814 === (23))){
var state_25813__$1 = state_25813;
var statearr_25866_25934 = state_25813__$1;
(statearr_25866_25934[(2)] = null);

(statearr_25866_25934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (35))){
var inst_25795 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25867_25935 = state_25813__$1;
(statearr_25867_25935[(2)] = inst_25795);

(statearr_25867_25935[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (19))){
var inst_25714 = (state_25813[(7)]);
var inst_25718 = cljs.core.chunk_first.call(null,inst_25714);
var inst_25719 = cljs.core.chunk_rest.call(null,inst_25714);
var inst_25720 = cljs.core.count.call(null,inst_25718);
var inst_25694 = inst_25719;
var inst_25695 = inst_25718;
var inst_25696 = inst_25720;
var inst_25697 = (0);
var state_25813__$1 = (function (){var statearr_25868 = state_25813;
(statearr_25868[(14)] = inst_25697);

(statearr_25868[(15)] = inst_25694);

(statearr_25868[(16)] = inst_25696);

(statearr_25868[(17)] = inst_25695);

return statearr_25868;
})();
var statearr_25869_25936 = state_25813__$1;
(statearr_25869_25936[(2)] = null);

(statearr_25869_25936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (11))){
var inst_25714 = (state_25813[(7)]);
var inst_25694 = (state_25813[(15)]);
var inst_25714__$1 = cljs.core.seq.call(null,inst_25694);
var state_25813__$1 = (function (){var statearr_25870 = state_25813;
(statearr_25870[(7)] = inst_25714__$1);

return statearr_25870;
})();
if(inst_25714__$1){
var statearr_25871_25937 = state_25813__$1;
(statearr_25871_25937[(1)] = (16));

} else {
var statearr_25872_25938 = state_25813__$1;
(statearr_25872_25938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (9))){
var inst_25742 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25873_25939 = state_25813__$1;
(statearr_25873_25939[(2)] = inst_25742);

(statearr_25873_25939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (5))){
var inst_25692 = cljs.core.deref.call(null,cs);
var inst_25693 = cljs.core.seq.call(null,inst_25692);
var inst_25694 = inst_25693;
var inst_25695 = null;
var inst_25696 = (0);
var inst_25697 = (0);
var state_25813__$1 = (function (){var statearr_25874 = state_25813;
(statearr_25874[(14)] = inst_25697);

(statearr_25874[(15)] = inst_25694);

(statearr_25874[(16)] = inst_25696);

(statearr_25874[(17)] = inst_25695);

return statearr_25874;
})();
var statearr_25875_25940 = state_25813__$1;
(statearr_25875_25940[(2)] = null);

(statearr_25875_25940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (14))){
var state_25813__$1 = state_25813;
var statearr_25876_25941 = state_25813__$1;
(statearr_25876_25941[(2)] = null);

(statearr_25876_25941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (45))){
var inst_25803 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25877_25942 = state_25813__$1;
(statearr_25877_25942[(2)] = inst_25803);

(statearr_25877_25942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (26))){
var inst_25745 = (state_25813[(29)]);
var inst_25799 = (state_25813[(2)]);
var inst_25800 = cljs.core.seq.call(null,inst_25745);
var state_25813__$1 = (function (){var statearr_25878 = state_25813;
(statearr_25878[(31)] = inst_25799);

return statearr_25878;
})();
if(inst_25800){
var statearr_25879_25943 = state_25813__$1;
(statearr_25879_25943[(1)] = (42));

} else {
var statearr_25880_25944 = state_25813__$1;
(statearr_25880_25944[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (16))){
var inst_25714 = (state_25813[(7)]);
var inst_25716 = cljs.core.chunked_seq_QMARK_.call(null,inst_25714);
var state_25813__$1 = state_25813;
if(inst_25716){
var statearr_25881_25945 = state_25813__$1;
(statearr_25881_25945[(1)] = (19));

} else {
var statearr_25882_25946 = state_25813__$1;
(statearr_25882_25946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (38))){
var inst_25792 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25883_25947 = state_25813__$1;
(statearr_25883_25947[(2)] = inst_25792);

(statearr_25883_25947[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (30))){
var state_25813__$1 = state_25813;
var statearr_25884_25948 = state_25813__$1;
(statearr_25884_25948[(2)] = null);

(statearr_25884_25948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (10))){
var inst_25697 = (state_25813[(14)]);
var inst_25695 = (state_25813[(17)]);
var inst_25703 = cljs.core._nth.call(null,inst_25695,inst_25697);
var inst_25704 = cljs.core.nth.call(null,inst_25703,(0),null);
var inst_25705 = cljs.core.nth.call(null,inst_25703,(1),null);
var state_25813__$1 = (function (){var statearr_25885 = state_25813;
(statearr_25885[(26)] = inst_25704);

return statearr_25885;
})();
if(cljs.core.truth_(inst_25705)){
var statearr_25886_25949 = state_25813__$1;
(statearr_25886_25949[(1)] = (13));

} else {
var statearr_25887_25950 = state_25813__$1;
(statearr_25887_25950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (18))){
var inst_25738 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25888_25951 = state_25813__$1;
(statearr_25888_25951[(2)] = inst_25738);

(statearr_25888_25951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (42))){
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25813__$1,(45),dchan);
} else {
if((state_val_25814 === (37))){
var inst_25781 = (state_25813[(23)]);
var inst_25685 = (state_25813[(10)]);
var inst_25772 = (state_25813[(25)]);
var inst_25781__$1 = cljs.core.first.call(null,inst_25772);
var inst_25782 = cljs.core.async.put_BANG_.call(null,inst_25781__$1,inst_25685,done);
var state_25813__$1 = (function (){var statearr_25889 = state_25813;
(statearr_25889[(23)] = inst_25781__$1);

return statearr_25889;
})();
if(cljs.core.truth_(inst_25782)){
var statearr_25890_25952 = state_25813__$1;
(statearr_25890_25952[(1)] = (39));

} else {
var statearr_25891_25953 = state_25813__$1;
(statearr_25891_25953[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (8))){
var inst_25697 = (state_25813[(14)]);
var inst_25696 = (state_25813[(16)]);
var inst_25699 = (inst_25697 < inst_25696);
var inst_25700 = inst_25699;
var state_25813__$1 = state_25813;
if(cljs.core.truth_(inst_25700)){
var statearr_25892_25954 = state_25813__$1;
(statearr_25892_25954[(1)] = (10));

} else {
var statearr_25893_25955 = state_25813__$1;
(statearr_25893_25955[(1)] = (11));

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
});})(c__19710__auto___25901,cs,m,dchan,dctr,done))
;
return ((function (switch__19645__auto__,c__19710__auto___25901,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19646__auto__ = null;
var cljs$core$async$mult_$_state_machine__19646__auto____0 = (function (){
var statearr_25897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25897[(0)] = cljs$core$async$mult_$_state_machine__19646__auto__);

(statearr_25897[(1)] = (1));

return statearr_25897;
});
var cljs$core$async$mult_$_state_machine__19646__auto____1 = (function (state_25813){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_25813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e25898){if((e25898 instanceof Object)){
var ex__19649__auto__ = e25898;
var statearr_25899_25956 = state_25813;
(statearr_25899_25956[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25957 = state_25813;
state_25813 = G__25957;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19646__auto__ = function(state_25813){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19646__auto____1.call(this,state_25813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19646__auto____0;
cljs$core$async$mult_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19646__auto____1;
return cljs$core$async$mult_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___25901,cs,m,dchan,dctr,done))
})();
var state__19712__auto__ = (function (){var statearr_25900 = f__19711__auto__.call(null);
(statearr_25900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___25901);

return statearr_25900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___25901,cs,m,dchan,dctr,done))
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
var args25958 = [];
var len__17395__auto___25961 = arguments.length;
var i__17396__auto___25962 = (0);
while(true){
if((i__17396__auto___25962 < len__17395__auto___25961)){
args25958.push((arguments[i__17396__auto___25962]));

var G__25963 = (i__17396__auto___25962 + (1));
i__17396__auto___25962 = G__25963;
continue;
} else {
}
break;
}

var G__25960 = args25958.length;
switch (G__25960) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25958.length)].join('')));

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
var len__17395__auto___25975 = arguments.length;
var i__17396__auto___25976 = (0);
while(true){
if((i__17396__auto___25976 < len__17395__auto___25975)){
args__17402__auto__.push((arguments[i__17396__auto___25976]));

var G__25977 = (i__17396__auto___25976 + (1));
i__17396__auto___25976 = G__25977;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((3) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17403__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25969){
var map__25970 = p__25969;
var map__25970__$1 = ((((!((map__25970 == null)))?((((map__25970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25970):map__25970);
var opts = map__25970__$1;
var statearr_25972_25978 = state;
(statearr_25972_25978[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25970,map__25970__$1,opts){
return (function (val){
var statearr_25973_25979 = state;
(statearr_25973_25979[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25970,map__25970__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25974_25980 = state;
(statearr_25974_25980[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25965){
var G__25966 = cljs.core.first.call(null,seq25965);
var seq25965__$1 = cljs.core.next.call(null,seq25965);
var G__25967 = cljs.core.first.call(null,seq25965__$1);
var seq25965__$2 = cljs.core.next.call(null,seq25965__$1);
var G__25968 = cljs.core.first.call(null,seq25965__$2);
var seq25965__$3 = cljs.core.next.call(null,seq25965__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25966,G__25967,G__25968,seq25965__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26144 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26145){
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
this.meta26145 = meta26145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26146,meta26145__$1){
var self__ = this;
var _26146__$1 = this;
return (new cljs.core.async.t_cljs$core$async26144(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26145__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26146){
var self__ = this;
var _26146__$1 = this;
return self__.meta26145;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26144.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26145","meta26145",1695139078,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26144";

cljs.core.async.t_cljs$core$async26144.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26144");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26144 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26144(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26145){
return (new cljs.core.async.t_cljs$core$async26144(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26145));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26144(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19710__auto___26307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___26307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___26307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26244){
var state_val_26245 = (state_26244[(1)]);
if((state_val_26245 === (7))){
var inst_26162 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26246_26308 = state_26244__$1;
(statearr_26246_26308[(2)] = inst_26162);

(statearr_26246_26308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (20))){
var inst_26174 = (state_26244[(7)]);
var state_26244__$1 = state_26244;
var statearr_26247_26309 = state_26244__$1;
(statearr_26247_26309[(2)] = inst_26174);

(statearr_26247_26309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (27))){
var state_26244__$1 = state_26244;
var statearr_26248_26310 = state_26244__$1;
(statearr_26248_26310[(2)] = null);

(statearr_26248_26310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (1))){
var inst_26150 = (state_26244[(8)]);
var inst_26150__$1 = calc_state.call(null);
var inst_26152 = (inst_26150__$1 == null);
var inst_26153 = cljs.core.not.call(null,inst_26152);
var state_26244__$1 = (function (){var statearr_26249 = state_26244;
(statearr_26249[(8)] = inst_26150__$1);

return statearr_26249;
})();
if(inst_26153){
var statearr_26250_26311 = state_26244__$1;
(statearr_26250_26311[(1)] = (2));

} else {
var statearr_26251_26312 = state_26244__$1;
(statearr_26251_26312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (24))){
var inst_26218 = (state_26244[(9)]);
var inst_26204 = (state_26244[(10)]);
var inst_26197 = (state_26244[(11)]);
var inst_26218__$1 = inst_26197.call(null,inst_26204);
var state_26244__$1 = (function (){var statearr_26252 = state_26244;
(statearr_26252[(9)] = inst_26218__$1);

return statearr_26252;
})();
if(cljs.core.truth_(inst_26218__$1)){
var statearr_26253_26313 = state_26244__$1;
(statearr_26253_26313[(1)] = (29));

} else {
var statearr_26254_26314 = state_26244__$1;
(statearr_26254_26314[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (4))){
var inst_26165 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26165)){
var statearr_26255_26315 = state_26244__$1;
(statearr_26255_26315[(1)] = (8));

} else {
var statearr_26256_26316 = state_26244__$1;
(statearr_26256_26316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (15))){
var inst_26191 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26191)){
var statearr_26257_26317 = state_26244__$1;
(statearr_26257_26317[(1)] = (19));

} else {
var statearr_26258_26318 = state_26244__$1;
(statearr_26258_26318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (21))){
var inst_26196 = (state_26244[(12)]);
var inst_26196__$1 = (state_26244[(2)]);
var inst_26197 = cljs.core.get.call(null,inst_26196__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26198 = cljs.core.get.call(null,inst_26196__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26199 = cljs.core.get.call(null,inst_26196__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26244__$1 = (function (){var statearr_26259 = state_26244;
(statearr_26259[(13)] = inst_26198);

(statearr_26259[(11)] = inst_26197);

(statearr_26259[(12)] = inst_26196__$1);

return statearr_26259;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26244__$1,(22),inst_26199);
} else {
if((state_val_26245 === (31))){
var inst_26226 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26226)){
var statearr_26260_26319 = state_26244__$1;
(statearr_26260_26319[(1)] = (32));

} else {
var statearr_26261_26320 = state_26244__$1;
(statearr_26261_26320[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (32))){
var inst_26203 = (state_26244[(14)]);
var state_26244__$1 = state_26244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26244__$1,(35),out,inst_26203);
} else {
if((state_val_26245 === (33))){
var inst_26196 = (state_26244[(12)]);
var inst_26174 = inst_26196;
var state_26244__$1 = (function (){var statearr_26262 = state_26244;
(statearr_26262[(7)] = inst_26174);

return statearr_26262;
})();
var statearr_26263_26321 = state_26244__$1;
(statearr_26263_26321[(2)] = null);

(statearr_26263_26321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (13))){
var inst_26174 = (state_26244[(7)]);
var inst_26181 = inst_26174.cljs$lang$protocol_mask$partition0$;
var inst_26182 = (inst_26181 & (64));
var inst_26183 = inst_26174.cljs$core$ISeq$;
var inst_26184 = (inst_26182) || (inst_26183);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26184)){
var statearr_26264_26322 = state_26244__$1;
(statearr_26264_26322[(1)] = (16));

} else {
var statearr_26265_26323 = state_26244__$1;
(statearr_26265_26323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (22))){
var inst_26204 = (state_26244[(10)]);
var inst_26203 = (state_26244[(14)]);
var inst_26202 = (state_26244[(2)]);
var inst_26203__$1 = cljs.core.nth.call(null,inst_26202,(0),null);
var inst_26204__$1 = cljs.core.nth.call(null,inst_26202,(1),null);
var inst_26205 = (inst_26203__$1 == null);
var inst_26206 = cljs.core._EQ_.call(null,inst_26204__$1,change);
var inst_26207 = (inst_26205) || (inst_26206);
var state_26244__$1 = (function (){var statearr_26266 = state_26244;
(statearr_26266[(10)] = inst_26204__$1);

(statearr_26266[(14)] = inst_26203__$1);

return statearr_26266;
})();
if(cljs.core.truth_(inst_26207)){
var statearr_26267_26324 = state_26244__$1;
(statearr_26267_26324[(1)] = (23));

} else {
var statearr_26268_26325 = state_26244__$1;
(statearr_26268_26325[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (36))){
var inst_26196 = (state_26244[(12)]);
var inst_26174 = inst_26196;
var state_26244__$1 = (function (){var statearr_26269 = state_26244;
(statearr_26269[(7)] = inst_26174);

return statearr_26269;
})();
var statearr_26270_26326 = state_26244__$1;
(statearr_26270_26326[(2)] = null);

(statearr_26270_26326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (29))){
var inst_26218 = (state_26244[(9)]);
var state_26244__$1 = state_26244;
var statearr_26271_26327 = state_26244__$1;
(statearr_26271_26327[(2)] = inst_26218);

(statearr_26271_26327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (6))){
var state_26244__$1 = state_26244;
var statearr_26272_26328 = state_26244__$1;
(statearr_26272_26328[(2)] = false);

(statearr_26272_26328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (28))){
var inst_26214 = (state_26244[(2)]);
var inst_26215 = calc_state.call(null);
var inst_26174 = inst_26215;
var state_26244__$1 = (function (){var statearr_26273 = state_26244;
(statearr_26273[(7)] = inst_26174);

(statearr_26273[(15)] = inst_26214);

return statearr_26273;
})();
var statearr_26274_26329 = state_26244__$1;
(statearr_26274_26329[(2)] = null);

(statearr_26274_26329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (25))){
var inst_26240 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26275_26330 = state_26244__$1;
(statearr_26275_26330[(2)] = inst_26240);

(statearr_26275_26330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (34))){
var inst_26238 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26276_26331 = state_26244__$1;
(statearr_26276_26331[(2)] = inst_26238);

(statearr_26276_26331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (17))){
var state_26244__$1 = state_26244;
var statearr_26277_26332 = state_26244__$1;
(statearr_26277_26332[(2)] = false);

(statearr_26277_26332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (3))){
var state_26244__$1 = state_26244;
var statearr_26278_26333 = state_26244__$1;
(statearr_26278_26333[(2)] = false);

(statearr_26278_26333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (12))){
var inst_26242 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26244__$1,inst_26242);
} else {
if((state_val_26245 === (2))){
var inst_26150 = (state_26244[(8)]);
var inst_26155 = inst_26150.cljs$lang$protocol_mask$partition0$;
var inst_26156 = (inst_26155 & (64));
var inst_26157 = inst_26150.cljs$core$ISeq$;
var inst_26158 = (inst_26156) || (inst_26157);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26158)){
var statearr_26279_26334 = state_26244__$1;
(statearr_26279_26334[(1)] = (5));

} else {
var statearr_26280_26335 = state_26244__$1;
(statearr_26280_26335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (23))){
var inst_26203 = (state_26244[(14)]);
var inst_26209 = (inst_26203 == null);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26209)){
var statearr_26281_26336 = state_26244__$1;
(statearr_26281_26336[(1)] = (26));

} else {
var statearr_26282_26337 = state_26244__$1;
(statearr_26282_26337[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (35))){
var inst_26229 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
if(cljs.core.truth_(inst_26229)){
var statearr_26283_26338 = state_26244__$1;
(statearr_26283_26338[(1)] = (36));

} else {
var statearr_26284_26339 = state_26244__$1;
(statearr_26284_26339[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (19))){
var inst_26174 = (state_26244[(7)]);
var inst_26193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26174);
var state_26244__$1 = state_26244;
var statearr_26285_26340 = state_26244__$1;
(statearr_26285_26340[(2)] = inst_26193);

(statearr_26285_26340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (11))){
var inst_26174 = (state_26244[(7)]);
var inst_26178 = (inst_26174 == null);
var inst_26179 = cljs.core.not.call(null,inst_26178);
var state_26244__$1 = state_26244;
if(inst_26179){
var statearr_26286_26341 = state_26244__$1;
(statearr_26286_26341[(1)] = (13));

} else {
var statearr_26287_26342 = state_26244__$1;
(statearr_26287_26342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (9))){
var inst_26150 = (state_26244[(8)]);
var state_26244__$1 = state_26244;
var statearr_26288_26343 = state_26244__$1;
(statearr_26288_26343[(2)] = inst_26150);

(statearr_26288_26343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (5))){
var state_26244__$1 = state_26244;
var statearr_26289_26344 = state_26244__$1;
(statearr_26289_26344[(2)] = true);

(statearr_26289_26344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (14))){
var state_26244__$1 = state_26244;
var statearr_26290_26345 = state_26244__$1;
(statearr_26290_26345[(2)] = false);

(statearr_26290_26345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (26))){
var inst_26204 = (state_26244[(10)]);
var inst_26211 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26204);
var state_26244__$1 = state_26244;
var statearr_26291_26346 = state_26244__$1;
(statearr_26291_26346[(2)] = inst_26211);

(statearr_26291_26346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (16))){
var state_26244__$1 = state_26244;
var statearr_26292_26347 = state_26244__$1;
(statearr_26292_26347[(2)] = true);

(statearr_26292_26347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (38))){
var inst_26234 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26293_26348 = state_26244__$1;
(statearr_26293_26348[(2)] = inst_26234);

(statearr_26293_26348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (30))){
var inst_26198 = (state_26244[(13)]);
var inst_26204 = (state_26244[(10)]);
var inst_26197 = (state_26244[(11)]);
var inst_26221 = cljs.core.empty_QMARK_.call(null,inst_26197);
var inst_26222 = inst_26198.call(null,inst_26204);
var inst_26223 = cljs.core.not.call(null,inst_26222);
var inst_26224 = (inst_26221) && (inst_26223);
var state_26244__$1 = state_26244;
var statearr_26294_26349 = state_26244__$1;
(statearr_26294_26349[(2)] = inst_26224);

(statearr_26294_26349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (10))){
var inst_26150 = (state_26244[(8)]);
var inst_26170 = (state_26244[(2)]);
var inst_26171 = cljs.core.get.call(null,inst_26170,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26172 = cljs.core.get.call(null,inst_26170,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26173 = cljs.core.get.call(null,inst_26170,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26174 = inst_26150;
var state_26244__$1 = (function (){var statearr_26295 = state_26244;
(statearr_26295[(16)] = inst_26172);

(statearr_26295[(7)] = inst_26174);

(statearr_26295[(17)] = inst_26173);

(statearr_26295[(18)] = inst_26171);

return statearr_26295;
})();
var statearr_26296_26350 = state_26244__$1;
(statearr_26296_26350[(2)] = null);

(statearr_26296_26350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (18))){
var inst_26188 = (state_26244[(2)]);
var state_26244__$1 = state_26244;
var statearr_26297_26351 = state_26244__$1;
(statearr_26297_26351[(2)] = inst_26188);

(statearr_26297_26351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (37))){
var state_26244__$1 = state_26244;
var statearr_26298_26352 = state_26244__$1;
(statearr_26298_26352[(2)] = null);

(statearr_26298_26352[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26245 === (8))){
var inst_26150 = (state_26244[(8)]);
var inst_26167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26150);
var state_26244__$1 = state_26244;
var statearr_26299_26353 = state_26244__$1;
(statearr_26299_26353[(2)] = inst_26167);

(statearr_26299_26353[(1)] = (10));


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
});})(c__19710__auto___26307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19645__auto__,c__19710__auto___26307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19646__auto__ = null;
var cljs$core$async$mix_$_state_machine__19646__auto____0 = (function (){
var statearr_26303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26303[(0)] = cljs$core$async$mix_$_state_machine__19646__auto__);

(statearr_26303[(1)] = (1));

return statearr_26303;
});
var cljs$core$async$mix_$_state_machine__19646__auto____1 = (function (state_26244){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_26244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e26304){if((e26304 instanceof Object)){
var ex__19649__auto__ = e26304;
var statearr_26305_26354 = state_26244;
(statearr_26305_26354[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26355 = state_26244;
state_26244 = G__26355;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19646__auto__ = function(state_26244){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19646__auto____1.call(this,state_26244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19646__auto____0;
cljs$core$async$mix_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19646__auto____1;
return cljs$core$async$mix_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___26307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19712__auto__ = (function (){var statearr_26306 = f__19711__auto__.call(null);
(statearr_26306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___26307);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___26307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26356 = [];
var len__17395__auto___26359 = arguments.length;
var i__17396__auto___26360 = (0);
while(true){
if((i__17396__auto___26360 < len__17395__auto___26359)){
args26356.push((arguments[i__17396__auto___26360]));

var G__26361 = (i__17396__auto___26360 + (1));
i__17396__auto___26360 = G__26361;
continue;
} else {
}
break;
}

var G__26358 = args26356.length;
switch (G__26358) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26356.length)].join('')));

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
var args26364 = [];
var len__17395__auto___26489 = arguments.length;
var i__17396__auto___26490 = (0);
while(true){
if((i__17396__auto___26490 < len__17395__auto___26489)){
args26364.push((arguments[i__17396__auto___26490]));

var G__26491 = (i__17396__auto___26490 + (1));
i__17396__auto___26490 = G__26491;
continue;
} else {
}
break;
}

var G__26366 = args26364.length;
switch (G__26366) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26364.length)].join('')));

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
return (function (p1__26363_SHARP_){
if(cljs.core.truth_(p1__26363_SHARP_.call(null,topic))){
return p1__26363_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16337__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26367 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26368){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26368 = meta26368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26369,meta26368__$1){
var self__ = this;
var _26369__$1 = this;
return (new cljs.core.async.t_cljs$core$async26367(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26368__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26369){
var self__ = this;
var _26369__$1 = this;
return self__.meta26368;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26367.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26368","meta26368",1208182307,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26367";

cljs.core.async.t_cljs$core$async26367.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26367");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26367 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26367(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26368){
return (new cljs.core.async.t_cljs$core$async26367(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26368));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26367(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19710__auto___26493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___26493,mults,ensure_mult,p){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___26493,mults,ensure_mult,p){
return (function (state_26441){
var state_val_26442 = (state_26441[(1)]);
if((state_val_26442 === (7))){
var inst_26437 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26443_26494 = state_26441__$1;
(statearr_26443_26494[(2)] = inst_26437);

(statearr_26443_26494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (20))){
var state_26441__$1 = state_26441;
var statearr_26444_26495 = state_26441__$1;
(statearr_26444_26495[(2)] = null);

(statearr_26444_26495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (1))){
var state_26441__$1 = state_26441;
var statearr_26445_26496 = state_26441__$1;
(statearr_26445_26496[(2)] = null);

(statearr_26445_26496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (24))){
var inst_26420 = (state_26441[(7)]);
var inst_26429 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26420);
var state_26441__$1 = state_26441;
var statearr_26446_26497 = state_26441__$1;
(statearr_26446_26497[(2)] = inst_26429);

(statearr_26446_26497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (4))){
var inst_26372 = (state_26441[(8)]);
var inst_26372__$1 = (state_26441[(2)]);
var inst_26373 = (inst_26372__$1 == null);
var state_26441__$1 = (function (){var statearr_26447 = state_26441;
(statearr_26447[(8)] = inst_26372__$1);

return statearr_26447;
})();
if(cljs.core.truth_(inst_26373)){
var statearr_26448_26498 = state_26441__$1;
(statearr_26448_26498[(1)] = (5));

} else {
var statearr_26449_26499 = state_26441__$1;
(statearr_26449_26499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (15))){
var inst_26414 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26450_26500 = state_26441__$1;
(statearr_26450_26500[(2)] = inst_26414);

(statearr_26450_26500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (21))){
var inst_26434 = (state_26441[(2)]);
var state_26441__$1 = (function (){var statearr_26451 = state_26441;
(statearr_26451[(9)] = inst_26434);

return statearr_26451;
})();
var statearr_26452_26501 = state_26441__$1;
(statearr_26452_26501[(2)] = null);

(statearr_26452_26501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (13))){
var inst_26396 = (state_26441[(10)]);
var inst_26398 = cljs.core.chunked_seq_QMARK_.call(null,inst_26396);
var state_26441__$1 = state_26441;
if(inst_26398){
var statearr_26453_26502 = state_26441__$1;
(statearr_26453_26502[(1)] = (16));

} else {
var statearr_26454_26503 = state_26441__$1;
(statearr_26454_26503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (22))){
var inst_26426 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
if(cljs.core.truth_(inst_26426)){
var statearr_26455_26504 = state_26441__$1;
(statearr_26455_26504[(1)] = (23));

} else {
var statearr_26456_26505 = state_26441__$1;
(statearr_26456_26505[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (6))){
var inst_26420 = (state_26441[(7)]);
var inst_26372 = (state_26441[(8)]);
var inst_26422 = (state_26441[(11)]);
var inst_26420__$1 = topic_fn.call(null,inst_26372);
var inst_26421 = cljs.core.deref.call(null,mults);
var inst_26422__$1 = cljs.core.get.call(null,inst_26421,inst_26420__$1);
var state_26441__$1 = (function (){var statearr_26457 = state_26441;
(statearr_26457[(7)] = inst_26420__$1);

(statearr_26457[(11)] = inst_26422__$1);

return statearr_26457;
})();
if(cljs.core.truth_(inst_26422__$1)){
var statearr_26458_26506 = state_26441__$1;
(statearr_26458_26506[(1)] = (19));

} else {
var statearr_26459_26507 = state_26441__$1;
(statearr_26459_26507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (25))){
var inst_26431 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26460_26508 = state_26441__$1;
(statearr_26460_26508[(2)] = inst_26431);

(statearr_26460_26508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (17))){
var inst_26396 = (state_26441[(10)]);
var inst_26405 = cljs.core.first.call(null,inst_26396);
var inst_26406 = cljs.core.async.muxch_STAR_.call(null,inst_26405);
var inst_26407 = cljs.core.async.close_BANG_.call(null,inst_26406);
var inst_26408 = cljs.core.next.call(null,inst_26396);
var inst_26382 = inst_26408;
var inst_26383 = null;
var inst_26384 = (0);
var inst_26385 = (0);
var state_26441__$1 = (function (){var statearr_26461 = state_26441;
(statearr_26461[(12)] = inst_26384);

(statearr_26461[(13)] = inst_26382);

(statearr_26461[(14)] = inst_26407);

(statearr_26461[(15)] = inst_26383);

(statearr_26461[(16)] = inst_26385);

return statearr_26461;
})();
var statearr_26462_26509 = state_26441__$1;
(statearr_26462_26509[(2)] = null);

(statearr_26462_26509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (3))){
var inst_26439 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26441__$1,inst_26439);
} else {
if((state_val_26442 === (12))){
var inst_26416 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26463_26510 = state_26441__$1;
(statearr_26463_26510[(2)] = inst_26416);

(statearr_26463_26510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (2))){
var state_26441__$1 = state_26441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26441__$1,(4),ch);
} else {
if((state_val_26442 === (23))){
var state_26441__$1 = state_26441;
var statearr_26464_26511 = state_26441__$1;
(statearr_26464_26511[(2)] = null);

(statearr_26464_26511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (19))){
var inst_26372 = (state_26441[(8)]);
var inst_26422 = (state_26441[(11)]);
var inst_26424 = cljs.core.async.muxch_STAR_.call(null,inst_26422);
var state_26441__$1 = state_26441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26441__$1,(22),inst_26424,inst_26372);
} else {
if((state_val_26442 === (11))){
var inst_26382 = (state_26441[(13)]);
var inst_26396 = (state_26441[(10)]);
var inst_26396__$1 = cljs.core.seq.call(null,inst_26382);
var state_26441__$1 = (function (){var statearr_26465 = state_26441;
(statearr_26465[(10)] = inst_26396__$1);

return statearr_26465;
})();
if(inst_26396__$1){
var statearr_26466_26512 = state_26441__$1;
(statearr_26466_26512[(1)] = (13));

} else {
var statearr_26467_26513 = state_26441__$1;
(statearr_26467_26513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (9))){
var inst_26418 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26468_26514 = state_26441__$1;
(statearr_26468_26514[(2)] = inst_26418);

(statearr_26468_26514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (5))){
var inst_26379 = cljs.core.deref.call(null,mults);
var inst_26380 = cljs.core.vals.call(null,inst_26379);
var inst_26381 = cljs.core.seq.call(null,inst_26380);
var inst_26382 = inst_26381;
var inst_26383 = null;
var inst_26384 = (0);
var inst_26385 = (0);
var state_26441__$1 = (function (){var statearr_26469 = state_26441;
(statearr_26469[(12)] = inst_26384);

(statearr_26469[(13)] = inst_26382);

(statearr_26469[(15)] = inst_26383);

(statearr_26469[(16)] = inst_26385);

return statearr_26469;
})();
var statearr_26470_26515 = state_26441__$1;
(statearr_26470_26515[(2)] = null);

(statearr_26470_26515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (14))){
var state_26441__$1 = state_26441;
var statearr_26474_26516 = state_26441__$1;
(statearr_26474_26516[(2)] = null);

(statearr_26474_26516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (16))){
var inst_26396 = (state_26441[(10)]);
var inst_26400 = cljs.core.chunk_first.call(null,inst_26396);
var inst_26401 = cljs.core.chunk_rest.call(null,inst_26396);
var inst_26402 = cljs.core.count.call(null,inst_26400);
var inst_26382 = inst_26401;
var inst_26383 = inst_26400;
var inst_26384 = inst_26402;
var inst_26385 = (0);
var state_26441__$1 = (function (){var statearr_26475 = state_26441;
(statearr_26475[(12)] = inst_26384);

(statearr_26475[(13)] = inst_26382);

(statearr_26475[(15)] = inst_26383);

(statearr_26475[(16)] = inst_26385);

return statearr_26475;
})();
var statearr_26476_26517 = state_26441__$1;
(statearr_26476_26517[(2)] = null);

(statearr_26476_26517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (10))){
var inst_26384 = (state_26441[(12)]);
var inst_26382 = (state_26441[(13)]);
var inst_26383 = (state_26441[(15)]);
var inst_26385 = (state_26441[(16)]);
var inst_26390 = cljs.core._nth.call(null,inst_26383,inst_26385);
var inst_26391 = cljs.core.async.muxch_STAR_.call(null,inst_26390);
var inst_26392 = cljs.core.async.close_BANG_.call(null,inst_26391);
var inst_26393 = (inst_26385 + (1));
var tmp26471 = inst_26384;
var tmp26472 = inst_26382;
var tmp26473 = inst_26383;
var inst_26382__$1 = tmp26472;
var inst_26383__$1 = tmp26473;
var inst_26384__$1 = tmp26471;
var inst_26385__$1 = inst_26393;
var state_26441__$1 = (function (){var statearr_26477 = state_26441;
(statearr_26477[(12)] = inst_26384__$1);

(statearr_26477[(13)] = inst_26382__$1);

(statearr_26477[(15)] = inst_26383__$1);

(statearr_26477[(16)] = inst_26385__$1);

(statearr_26477[(17)] = inst_26392);

return statearr_26477;
})();
var statearr_26478_26518 = state_26441__$1;
(statearr_26478_26518[(2)] = null);

(statearr_26478_26518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (18))){
var inst_26411 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26479_26519 = state_26441__$1;
(statearr_26479_26519[(2)] = inst_26411);

(statearr_26479_26519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (8))){
var inst_26384 = (state_26441[(12)]);
var inst_26385 = (state_26441[(16)]);
var inst_26387 = (inst_26385 < inst_26384);
var inst_26388 = inst_26387;
var state_26441__$1 = state_26441;
if(cljs.core.truth_(inst_26388)){
var statearr_26480_26520 = state_26441__$1;
(statearr_26480_26520[(1)] = (10));

} else {
var statearr_26481_26521 = state_26441__$1;
(statearr_26481_26521[(1)] = (11));

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
});})(c__19710__auto___26493,mults,ensure_mult,p))
;
return ((function (switch__19645__auto__,c__19710__auto___26493,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_26485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26485[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_26485[(1)] = (1));

return statearr_26485;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_26441){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_26441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e26486){if((e26486 instanceof Object)){
var ex__19649__auto__ = e26486;
var statearr_26487_26522 = state_26441;
(statearr_26487_26522[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26523 = state_26441;
state_26441 = G__26523;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_26441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_26441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___26493,mults,ensure_mult,p))
})();
var state__19712__auto__ = (function (){var statearr_26488 = f__19711__auto__.call(null);
(statearr_26488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___26493);

return statearr_26488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___26493,mults,ensure_mult,p))
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
var args26524 = [];
var len__17395__auto___26527 = arguments.length;
var i__17396__auto___26528 = (0);
while(true){
if((i__17396__auto___26528 < len__17395__auto___26527)){
args26524.push((arguments[i__17396__auto___26528]));

var G__26529 = (i__17396__auto___26528 + (1));
i__17396__auto___26528 = G__26529;
continue;
} else {
}
break;
}

var G__26526 = args26524.length;
switch (G__26526) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26524.length)].join('')));

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
var args26531 = [];
var len__17395__auto___26534 = arguments.length;
var i__17396__auto___26535 = (0);
while(true){
if((i__17396__auto___26535 < len__17395__auto___26534)){
args26531.push((arguments[i__17396__auto___26535]));

var G__26536 = (i__17396__auto___26535 + (1));
i__17396__auto___26535 = G__26536;
continue;
} else {
}
break;
}

var G__26533 = args26531.length;
switch (G__26533) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26531.length)].join('')));

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
var args26538 = [];
var len__17395__auto___26609 = arguments.length;
var i__17396__auto___26610 = (0);
while(true){
if((i__17396__auto___26610 < len__17395__auto___26609)){
args26538.push((arguments[i__17396__auto___26610]));

var G__26611 = (i__17396__auto___26610 + (1));
i__17396__auto___26610 = G__26611;
continue;
} else {
}
break;
}

var G__26540 = args26538.length;
switch (G__26540) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26538.length)].join('')));

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
var c__19710__auto___26613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___26613,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___26613,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26579){
var state_val_26580 = (state_26579[(1)]);
if((state_val_26580 === (7))){
var state_26579__$1 = state_26579;
var statearr_26581_26614 = state_26579__$1;
(statearr_26581_26614[(2)] = null);

(statearr_26581_26614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (1))){
var state_26579__$1 = state_26579;
var statearr_26582_26615 = state_26579__$1;
(statearr_26582_26615[(2)] = null);

(statearr_26582_26615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (4))){
var inst_26543 = (state_26579[(7)]);
var inst_26545 = (inst_26543 < cnt);
var state_26579__$1 = state_26579;
if(cljs.core.truth_(inst_26545)){
var statearr_26583_26616 = state_26579__$1;
(statearr_26583_26616[(1)] = (6));

} else {
var statearr_26584_26617 = state_26579__$1;
(statearr_26584_26617[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (15))){
var inst_26575 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
var statearr_26585_26618 = state_26579__$1;
(statearr_26585_26618[(2)] = inst_26575);

(statearr_26585_26618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (13))){
var inst_26568 = cljs.core.async.close_BANG_.call(null,out);
var state_26579__$1 = state_26579;
var statearr_26586_26619 = state_26579__$1;
(statearr_26586_26619[(2)] = inst_26568);

(statearr_26586_26619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (6))){
var state_26579__$1 = state_26579;
var statearr_26587_26620 = state_26579__$1;
(statearr_26587_26620[(2)] = null);

(statearr_26587_26620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (3))){
var inst_26577 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26579__$1,inst_26577);
} else {
if((state_val_26580 === (12))){
var inst_26565 = (state_26579[(8)]);
var inst_26565__$1 = (state_26579[(2)]);
var inst_26566 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26565__$1);
var state_26579__$1 = (function (){var statearr_26588 = state_26579;
(statearr_26588[(8)] = inst_26565__$1);

return statearr_26588;
})();
if(cljs.core.truth_(inst_26566)){
var statearr_26589_26621 = state_26579__$1;
(statearr_26589_26621[(1)] = (13));

} else {
var statearr_26590_26622 = state_26579__$1;
(statearr_26590_26622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (2))){
var inst_26542 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26543 = (0);
var state_26579__$1 = (function (){var statearr_26591 = state_26579;
(statearr_26591[(9)] = inst_26542);

(statearr_26591[(7)] = inst_26543);

return statearr_26591;
})();
var statearr_26592_26623 = state_26579__$1;
(statearr_26592_26623[(2)] = null);

(statearr_26592_26623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (11))){
var inst_26543 = (state_26579[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26579,(10),Object,null,(9));
var inst_26552 = chs__$1.call(null,inst_26543);
var inst_26553 = done.call(null,inst_26543);
var inst_26554 = cljs.core.async.take_BANG_.call(null,inst_26552,inst_26553);
var state_26579__$1 = state_26579;
var statearr_26593_26624 = state_26579__$1;
(statearr_26593_26624[(2)] = inst_26554);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (9))){
var inst_26543 = (state_26579[(7)]);
var inst_26556 = (state_26579[(2)]);
var inst_26557 = (inst_26543 + (1));
var inst_26543__$1 = inst_26557;
var state_26579__$1 = (function (){var statearr_26594 = state_26579;
(statearr_26594[(7)] = inst_26543__$1);

(statearr_26594[(10)] = inst_26556);

return statearr_26594;
})();
var statearr_26595_26625 = state_26579__$1;
(statearr_26595_26625[(2)] = null);

(statearr_26595_26625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (5))){
var inst_26563 = (state_26579[(2)]);
var state_26579__$1 = (function (){var statearr_26596 = state_26579;
(statearr_26596[(11)] = inst_26563);

return statearr_26596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26579__$1,(12),dchan);
} else {
if((state_val_26580 === (14))){
var inst_26565 = (state_26579[(8)]);
var inst_26570 = cljs.core.apply.call(null,f,inst_26565);
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26579__$1,(16),out,inst_26570);
} else {
if((state_val_26580 === (16))){
var inst_26572 = (state_26579[(2)]);
var state_26579__$1 = (function (){var statearr_26597 = state_26579;
(statearr_26597[(12)] = inst_26572);

return statearr_26597;
})();
var statearr_26598_26626 = state_26579__$1;
(statearr_26598_26626[(2)] = null);

(statearr_26598_26626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (10))){
var inst_26547 = (state_26579[(2)]);
var inst_26548 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26579__$1 = (function (){var statearr_26599 = state_26579;
(statearr_26599[(13)] = inst_26547);

return statearr_26599;
})();
var statearr_26600_26627 = state_26579__$1;
(statearr_26600_26627[(2)] = inst_26548);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (8))){
var inst_26561 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
var statearr_26601_26628 = state_26579__$1;
(statearr_26601_26628[(2)] = inst_26561);

(statearr_26601_26628[(1)] = (5));


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
});})(c__19710__auto___26613,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19645__auto__,c__19710__auto___26613,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_26605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26605[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_26605[(1)] = (1));

return statearr_26605;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_26579){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_26579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e26606){if((e26606 instanceof Object)){
var ex__19649__auto__ = e26606;
var statearr_26607_26629 = state_26579;
(statearr_26607_26629[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26630 = state_26579;
state_26579 = G__26630;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_26579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_26579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___26613,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19712__auto__ = (function (){var statearr_26608 = f__19711__auto__.call(null);
(statearr_26608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___26613);

return statearr_26608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___26613,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26632 = [];
var len__17395__auto___26688 = arguments.length;
var i__17396__auto___26689 = (0);
while(true){
if((i__17396__auto___26689 < len__17395__auto___26688)){
args26632.push((arguments[i__17396__auto___26689]));

var G__26690 = (i__17396__auto___26689 + (1));
i__17396__auto___26689 = G__26690;
continue;
} else {
}
break;
}

var G__26634 = args26632.length;
switch (G__26634) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26632.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19710__auto___26692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___26692,out){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___26692,out){
return (function (state_26664){
var state_val_26665 = (state_26664[(1)]);
if((state_val_26665 === (7))){
var inst_26644 = (state_26664[(7)]);
var inst_26643 = (state_26664[(8)]);
var inst_26643__$1 = (state_26664[(2)]);
var inst_26644__$1 = cljs.core.nth.call(null,inst_26643__$1,(0),null);
var inst_26645 = cljs.core.nth.call(null,inst_26643__$1,(1),null);
var inst_26646 = (inst_26644__$1 == null);
var state_26664__$1 = (function (){var statearr_26666 = state_26664;
(statearr_26666[(7)] = inst_26644__$1);

(statearr_26666[(9)] = inst_26645);

(statearr_26666[(8)] = inst_26643__$1);

return statearr_26666;
})();
if(cljs.core.truth_(inst_26646)){
var statearr_26667_26693 = state_26664__$1;
(statearr_26667_26693[(1)] = (8));

} else {
var statearr_26668_26694 = state_26664__$1;
(statearr_26668_26694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (1))){
var inst_26635 = cljs.core.vec.call(null,chs);
var inst_26636 = inst_26635;
var state_26664__$1 = (function (){var statearr_26669 = state_26664;
(statearr_26669[(10)] = inst_26636);

return statearr_26669;
})();
var statearr_26670_26695 = state_26664__$1;
(statearr_26670_26695[(2)] = null);

(statearr_26670_26695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (4))){
var inst_26636 = (state_26664[(10)]);
var state_26664__$1 = state_26664;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26664__$1,(7),inst_26636);
} else {
if((state_val_26665 === (6))){
var inst_26660 = (state_26664[(2)]);
var state_26664__$1 = state_26664;
var statearr_26671_26696 = state_26664__$1;
(statearr_26671_26696[(2)] = inst_26660);

(statearr_26671_26696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (3))){
var inst_26662 = (state_26664[(2)]);
var state_26664__$1 = state_26664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26664__$1,inst_26662);
} else {
if((state_val_26665 === (2))){
var inst_26636 = (state_26664[(10)]);
var inst_26638 = cljs.core.count.call(null,inst_26636);
var inst_26639 = (inst_26638 > (0));
var state_26664__$1 = state_26664;
if(cljs.core.truth_(inst_26639)){
var statearr_26673_26697 = state_26664__$1;
(statearr_26673_26697[(1)] = (4));

} else {
var statearr_26674_26698 = state_26664__$1;
(statearr_26674_26698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (11))){
var inst_26636 = (state_26664[(10)]);
var inst_26653 = (state_26664[(2)]);
var tmp26672 = inst_26636;
var inst_26636__$1 = tmp26672;
var state_26664__$1 = (function (){var statearr_26675 = state_26664;
(statearr_26675[(11)] = inst_26653);

(statearr_26675[(10)] = inst_26636__$1);

return statearr_26675;
})();
var statearr_26676_26699 = state_26664__$1;
(statearr_26676_26699[(2)] = null);

(statearr_26676_26699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (9))){
var inst_26644 = (state_26664[(7)]);
var state_26664__$1 = state_26664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26664__$1,(11),out,inst_26644);
} else {
if((state_val_26665 === (5))){
var inst_26658 = cljs.core.async.close_BANG_.call(null,out);
var state_26664__$1 = state_26664;
var statearr_26677_26700 = state_26664__$1;
(statearr_26677_26700[(2)] = inst_26658);

(statearr_26677_26700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (10))){
var inst_26656 = (state_26664[(2)]);
var state_26664__$1 = state_26664;
var statearr_26678_26701 = state_26664__$1;
(statearr_26678_26701[(2)] = inst_26656);

(statearr_26678_26701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26665 === (8))){
var inst_26644 = (state_26664[(7)]);
var inst_26636 = (state_26664[(10)]);
var inst_26645 = (state_26664[(9)]);
var inst_26643 = (state_26664[(8)]);
var inst_26648 = (function (){var cs = inst_26636;
var vec__26641 = inst_26643;
var v = inst_26644;
var c = inst_26645;
return ((function (cs,vec__26641,v,c,inst_26644,inst_26636,inst_26645,inst_26643,state_val_26665,c__19710__auto___26692,out){
return (function (p1__26631_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26631_SHARP_);
});
;})(cs,vec__26641,v,c,inst_26644,inst_26636,inst_26645,inst_26643,state_val_26665,c__19710__auto___26692,out))
})();
var inst_26649 = cljs.core.filterv.call(null,inst_26648,inst_26636);
var inst_26636__$1 = inst_26649;
var state_26664__$1 = (function (){var statearr_26679 = state_26664;
(statearr_26679[(10)] = inst_26636__$1);

return statearr_26679;
})();
var statearr_26680_26702 = state_26664__$1;
(statearr_26680_26702[(2)] = null);

(statearr_26680_26702[(1)] = (2));


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
});})(c__19710__auto___26692,out))
;
return ((function (switch__19645__auto__,c__19710__auto___26692,out){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_26684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26684[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_26684[(1)] = (1));

return statearr_26684;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_26664){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_26664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e26685){if((e26685 instanceof Object)){
var ex__19649__auto__ = e26685;
var statearr_26686_26703 = state_26664;
(statearr_26686_26703[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26704 = state_26664;
state_26664 = G__26704;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_26664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_26664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___26692,out))
})();
var state__19712__auto__ = (function (){var statearr_26687 = f__19711__auto__.call(null);
(statearr_26687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___26692);

return statearr_26687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___26692,out))
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
var args26705 = [];
var len__17395__auto___26754 = arguments.length;
var i__17396__auto___26755 = (0);
while(true){
if((i__17396__auto___26755 < len__17395__auto___26754)){
args26705.push((arguments[i__17396__auto___26755]));

var G__26756 = (i__17396__auto___26755 + (1));
i__17396__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var G__26707 = args26705.length;
switch (G__26707) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26705.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19710__auto___26758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___26758,out){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___26758,out){
return (function (state_26731){
var state_val_26732 = (state_26731[(1)]);
if((state_val_26732 === (7))){
var inst_26713 = (state_26731[(7)]);
var inst_26713__$1 = (state_26731[(2)]);
var inst_26714 = (inst_26713__$1 == null);
var inst_26715 = cljs.core.not.call(null,inst_26714);
var state_26731__$1 = (function (){var statearr_26733 = state_26731;
(statearr_26733[(7)] = inst_26713__$1);

return statearr_26733;
})();
if(inst_26715){
var statearr_26734_26759 = state_26731__$1;
(statearr_26734_26759[(1)] = (8));

} else {
var statearr_26735_26760 = state_26731__$1;
(statearr_26735_26760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (1))){
var inst_26708 = (0);
var state_26731__$1 = (function (){var statearr_26736 = state_26731;
(statearr_26736[(8)] = inst_26708);

return statearr_26736;
})();
var statearr_26737_26761 = state_26731__$1;
(statearr_26737_26761[(2)] = null);

(statearr_26737_26761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (4))){
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26731__$1,(7),ch);
} else {
if((state_val_26732 === (6))){
var inst_26726 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26738_26762 = state_26731__$1;
(statearr_26738_26762[(2)] = inst_26726);

(statearr_26738_26762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (3))){
var inst_26728 = (state_26731[(2)]);
var inst_26729 = cljs.core.async.close_BANG_.call(null,out);
var state_26731__$1 = (function (){var statearr_26739 = state_26731;
(statearr_26739[(9)] = inst_26728);

return statearr_26739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26731__$1,inst_26729);
} else {
if((state_val_26732 === (2))){
var inst_26708 = (state_26731[(8)]);
var inst_26710 = (inst_26708 < n);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26710)){
var statearr_26740_26763 = state_26731__$1;
(statearr_26740_26763[(1)] = (4));

} else {
var statearr_26741_26764 = state_26731__$1;
(statearr_26741_26764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (11))){
var inst_26708 = (state_26731[(8)]);
var inst_26718 = (state_26731[(2)]);
var inst_26719 = (inst_26708 + (1));
var inst_26708__$1 = inst_26719;
var state_26731__$1 = (function (){var statearr_26742 = state_26731;
(statearr_26742[(8)] = inst_26708__$1);

(statearr_26742[(10)] = inst_26718);

return statearr_26742;
})();
var statearr_26743_26765 = state_26731__$1;
(statearr_26743_26765[(2)] = null);

(statearr_26743_26765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (9))){
var state_26731__$1 = state_26731;
var statearr_26744_26766 = state_26731__$1;
(statearr_26744_26766[(2)] = null);

(statearr_26744_26766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (5))){
var state_26731__$1 = state_26731;
var statearr_26745_26767 = state_26731__$1;
(statearr_26745_26767[(2)] = null);

(statearr_26745_26767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (10))){
var inst_26723 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26746_26768 = state_26731__$1;
(statearr_26746_26768[(2)] = inst_26723);

(statearr_26746_26768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (8))){
var inst_26713 = (state_26731[(7)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26731__$1,(11),out,inst_26713);
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
});})(c__19710__auto___26758,out))
;
return ((function (switch__19645__auto__,c__19710__auto___26758,out){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_26750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26750[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_26750[(1)] = (1));

return statearr_26750;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_26731){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_26731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e26751){if((e26751 instanceof Object)){
var ex__19649__auto__ = e26751;
var statearr_26752_26769 = state_26731;
(statearr_26752_26769[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26770 = state_26731;
state_26731 = G__26770;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_26731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_26731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___26758,out))
})();
var state__19712__auto__ = (function (){var statearr_26753 = f__19711__auto__.call(null);
(statearr_26753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___26758);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___26758,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26778 = (function (map_LT_,f,ch,meta26779){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26779 = meta26779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26780,meta26779__$1){
var self__ = this;
var _26780__$1 = this;
return (new cljs.core.async.t_cljs$core$async26778(self__.map_LT_,self__.f,self__.ch,meta26779__$1));
});

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26780){
var self__ = this;
var _26780__$1 = this;
return self__.meta26779;
});

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26781 = (function (map_LT_,f,ch,meta26779,_,fn1,meta26782){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26779 = meta26779;
this._ = _;
this.fn1 = fn1;
this.meta26782 = meta26782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26783,meta26782__$1){
var self__ = this;
var _26783__$1 = this;
return (new cljs.core.async.t_cljs$core$async26781(self__.map_LT_,self__.f,self__.ch,self__.meta26779,self__._,self__.fn1,meta26782__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26783){
var self__ = this;
var _26783__$1 = this;
return self__.meta26782;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26771_SHARP_){
return f1.call(null,(((p1__26771_SHARP_ == null))?null:self__.f.call(null,p1__26771_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26781.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26779","meta26779",1711096513,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26778","cljs.core.async/t_cljs$core$async26778",-312453299,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26782","meta26782",-994093150,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26781";

cljs.core.async.t_cljs$core$async26781.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26781");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26781 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26781(map_LT___$1,f__$1,ch__$1,meta26779__$1,___$2,fn1__$1,meta26782){
return (new cljs.core.async.t_cljs$core$async26781(map_LT___$1,f__$1,ch__$1,meta26779__$1,___$2,fn1__$1,meta26782));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26781(self__.map_LT_,self__.f,self__.ch,self__.meta26779,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26779","meta26779",1711096513,null)], null);
});

cljs.core.async.t_cljs$core$async26778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26778";

cljs.core.async.t_cljs$core$async26778.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26778");
});

cljs.core.async.__GT_t_cljs$core$async26778 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26778(map_LT___$1,f__$1,ch__$1,meta26779){
return (new cljs.core.async.t_cljs$core$async26778(map_LT___$1,f__$1,ch__$1,meta26779));
});

}

return (new cljs.core.async.t_cljs$core$async26778(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26787 = (function (map_GT_,f,ch,meta26788){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26788 = meta26788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26789,meta26788__$1){
var self__ = this;
var _26789__$1 = this;
return (new cljs.core.async.t_cljs$core$async26787(self__.map_GT_,self__.f,self__.ch,meta26788__$1));
});

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26789){
var self__ = this;
var _26789__$1 = this;
return self__.meta26788;
});

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26788","meta26788",-1596918922,null)], null);
});

cljs.core.async.t_cljs$core$async26787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26787";

cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26787");
});

cljs.core.async.__GT_t_cljs$core$async26787 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26787(map_GT___$1,f__$1,ch__$1,meta26788){
return (new cljs.core.async.t_cljs$core$async26787(map_GT___$1,f__$1,ch__$1,meta26788));
});

}

return (new cljs.core.async.t_cljs$core$async26787(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26793 = (function (filter_GT_,p,ch,meta26794){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26794 = meta26794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26795,meta26794__$1){
var self__ = this;
var _26795__$1 = this;
return (new cljs.core.async.t_cljs$core$async26793(self__.filter_GT_,self__.p,self__.ch,meta26794__$1));
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26795){
var self__ = this;
var _26795__$1 = this;
return self__.meta26794;
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26794","meta26794",-1050717068,null)], null);
});

cljs.core.async.t_cljs$core$async26793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26793";

cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26793");
});

cljs.core.async.__GT_t_cljs$core$async26793 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26793(filter_GT___$1,p__$1,ch__$1,meta26794){
return (new cljs.core.async.t_cljs$core$async26793(filter_GT___$1,p__$1,ch__$1,meta26794));
});

}

return (new cljs.core.async.t_cljs$core$async26793(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26796 = [];
var len__17395__auto___26840 = arguments.length;
var i__17396__auto___26841 = (0);
while(true){
if((i__17396__auto___26841 < len__17395__auto___26840)){
args26796.push((arguments[i__17396__auto___26841]));

var G__26842 = (i__17396__auto___26841 + (1));
i__17396__auto___26841 = G__26842;
continue;
} else {
}
break;
}

var G__26798 = args26796.length;
switch (G__26798) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26796.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19710__auto___26844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___26844,out){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___26844,out){
return (function (state_26819){
var state_val_26820 = (state_26819[(1)]);
if((state_val_26820 === (7))){
var inst_26815 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
var statearr_26821_26845 = state_26819__$1;
(statearr_26821_26845[(2)] = inst_26815);

(statearr_26821_26845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (1))){
var state_26819__$1 = state_26819;
var statearr_26822_26846 = state_26819__$1;
(statearr_26822_26846[(2)] = null);

(statearr_26822_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (4))){
var inst_26801 = (state_26819[(7)]);
var inst_26801__$1 = (state_26819[(2)]);
var inst_26802 = (inst_26801__$1 == null);
var state_26819__$1 = (function (){var statearr_26823 = state_26819;
(statearr_26823[(7)] = inst_26801__$1);

return statearr_26823;
})();
if(cljs.core.truth_(inst_26802)){
var statearr_26824_26847 = state_26819__$1;
(statearr_26824_26847[(1)] = (5));

} else {
var statearr_26825_26848 = state_26819__$1;
(statearr_26825_26848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (6))){
var inst_26801 = (state_26819[(7)]);
var inst_26806 = p.call(null,inst_26801);
var state_26819__$1 = state_26819;
if(cljs.core.truth_(inst_26806)){
var statearr_26826_26849 = state_26819__$1;
(statearr_26826_26849[(1)] = (8));

} else {
var statearr_26827_26850 = state_26819__$1;
(statearr_26827_26850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (3))){
var inst_26817 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26819__$1,inst_26817);
} else {
if((state_val_26820 === (2))){
var state_26819__$1 = state_26819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26819__$1,(4),ch);
} else {
if((state_val_26820 === (11))){
var inst_26809 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
var statearr_26828_26851 = state_26819__$1;
(statearr_26828_26851[(2)] = inst_26809);

(statearr_26828_26851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (9))){
var state_26819__$1 = state_26819;
var statearr_26829_26852 = state_26819__$1;
(statearr_26829_26852[(2)] = null);

(statearr_26829_26852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (5))){
var inst_26804 = cljs.core.async.close_BANG_.call(null,out);
var state_26819__$1 = state_26819;
var statearr_26830_26853 = state_26819__$1;
(statearr_26830_26853[(2)] = inst_26804);

(statearr_26830_26853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (10))){
var inst_26812 = (state_26819[(2)]);
var state_26819__$1 = (function (){var statearr_26831 = state_26819;
(statearr_26831[(8)] = inst_26812);

return statearr_26831;
})();
var statearr_26832_26854 = state_26819__$1;
(statearr_26832_26854[(2)] = null);

(statearr_26832_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (8))){
var inst_26801 = (state_26819[(7)]);
var state_26819__$1 = state_26819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26819__$1,(11),out,inst_26801);
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
});})(c__19710__auto___26844,out))
;
return ((function (switch__19645__auto__,c__19710__auto___26844,out){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_26836 = [null,null,null,null,null,null,null,null,null];
(statearr_26836[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_26836[(1)] = (1));

return statearr_26836;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_26819){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_26819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e26837){if((e26837 instanceof Object)){
var ex__19649__auto__ = e26837;
var statearr_26838_26855 = state_26819;
(statearr_26838_26855[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26856 = state_26819;
state_26819 = G__26856;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_26819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_26819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___26844,out))
})();
var state__19712__auto__ = (function (){var statearr_26839 = f__19711__auto__.call(null);
(statearr_26839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___26844);

return statearr_26839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___26844,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26857 = [];
var len__17395__auto___26860 = arguments.length;
var i__17396__auto___26861 = (0);
while(true){
if((i__17396__auto___26861 < len__17395__auto___26860)){
args26857.push((arguments[i__17396__auto___26861]));

var G__26862 = (i__17396__auto___26861 + (1));
i__17396__auto___26861 = G__26862;
continue;
} else {
}
break;
}

var G__26859 = args26857.length;
switch (G__26859) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26857.length)].join('')));

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
var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__){
return (function (state_27029){
var state_val_27030 = (state_27029[(1)]);
if((state_val_27030 === (7))){
var inst_27025 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
var statearr_27031_27072 = state_27029__$1;
(statearr_27031_27072[(2)] = inst_27025);

(statearr_27031_27072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (20))){
var inst_26995 = (state_27029[(7)]);
var inst_27006 = (state_27029[(2)]);
var inst_27007 = cljs.core.next.call(null,inst_26995);
var inst_26981 = inst_27007;
var inst_26982 = null;
var inst_26983 = (0);
var inst_26984 = (0);
var state_27029__$1 = (function (){var statearr_27032 = state_27029;
(statearr_27032[(8)] = inst_27006);

(statearr_27032[(9)] = inst_26984);

(statearr_27032[(10)] = inst_26982);

(statearr_27032[(11)] = inst_26983);

(statearr_27032[(12)] = inst_26981);

return statearr_27032;
})();
var statearr_27033_27073 = state_27029__$1;
(statearr_27033_27073[(2)] = null);

(statearr_27033_27073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (1))){
var state_27029__$1 = state_27029;
var statearr_27034_27074 = state_27029__$1;
(statearr_27034_27074[(2)] = null);

(statearr_27034_27074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (4))){
var inst_26970 = (state_27029[(13)]);
var inst_26970__$1 = (state_27029[(2)]);
var inst_26971 = (inst_26970__$1 == null);
var state_27029__$1 = (function (){var statearr_27035 = state_27029;
(statearr_27035[(13)] = inst_26970__$1);

return statearr_27035;
})();
if(cljs.core.truth_(inst_26971)){
var statearr_27036_27075 = state_27029__$1;
(statearr_27036_27075[(1)] = (5));

} else {
var statearr_27037_27076 = state_27029__$1;
(statearr_27037_27076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (15))){
var state_27029__$1 = state_27029;
var statearr_27041_27077 = state_27029__$1;
(statearr_27041_27077[(2)] = null);

(statearr_27041_27077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (21))){
var state_27029__$1 = state_27029;
var statearr_27042_27078 = state_27029__$1;
(statearr_27042_27078[(2)] = null);

(statearr_27042_27078[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (13))){
var inst_26984 = (state_27029[(9)]);
var inst_26982 = (state_27029[(10)]);
var inst_26983 = (state_27029[(11)]);
var inst_26981 = (state_27029[(12)]);
var inst_26991 = (state_27029[(2)]);
var inst_26992 = (inst_26984 + (1));
var tmp27038 = inst_26982;
var tmp27039 = inst_26983;
var tmp27040 = inst_26981;
var inst_26981__$1 = tmp27040;
var inst_26982__$1 = tmp27038;
var inst_26983__$1 = tmp27039;
var inst_26984__$1 = inst_26992;
var state_27029__$1 = (function (){var statearr_27043 = state_27029;
(statearr_27043[(14)] = inst_26991);

(statearr_27043[(9)] = inst_26984__$1);

(statearr_27043[(10)] = inst_26982__$1);

(statearr_27043[(11)] = inst_26983__$1);

(statearr_27043[(12)] = inst_26981__$1);

return statearr_27043;
})();
var statearr_27044_27079 = state_27029__$1;
(statearr_27044_27079[(2)] = null);

(statearr_27044_27079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (22))){
var state_27029__$1 = state_27029;
var statearr_27045_27080 = state_27029__$1;
(statearr_27045_27080[(2)] = null);

(statearr_27045_27080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (6))){
var inst_26970 = (state_27029[(13)]);
var inst_26979 = f.call(null,inst_26970);
var inst_26980 = cljs.core.seq.call(null,inst_26979);
var inst_26981 = inst_26980;
var inst_26982 = null;
var inst_26983 = (0);
var inst_26984 = (0);
var state_27029__$1 = (function (){var statearr_27046 = state_27029;
(statearr_27046[(9)] = inst_26984);

(statearr_27046[(10)] = inst_26982);

(statearr_27046[(11)] = inst_26983);

(statearr_27046[(12)] = inst_26981);

return statearr_27046;
})();
var statearr_27047_27081 = state_27029__$1;
(statearr_27047_27081[(2)] = null);

(statearr_27047_27081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (17))){
var inst_26995 = (state_27029[(7)]);
var inst_26999 = cljs.core.chunk_first.call(null,inst_26995);
var inst_27000 = cljs.core.chunk_rest.call(null,inst_26995);
var inst_27001 = cljs.core.count.call(null,inst_26999);
var inst_26981 = inst_27000;
var inst_26982 = inst_26999;
var inst_26983 = inst_27001;
var inst_26984 = (0);
var state_27029__$1 = (function (){var statearr_27048 = state_27029;
(statearr_27048[(9)] = inst_26984);

(statearr_27048[(10)] = inst_26982);

(statearr_27048[(11)] = inst_26983);

(statearr_27048[(12)] = inst_26981);

return statearr_27048;
})();
var statearr_27049_27082 = state_27029__$1;
(statearr_27049_27082[(2)] = null);

(statearr_27049_27082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (3))){
var inst_27027 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27029__$1,inst_27027);
} else {
if((state_val_27030 === (12))){
var inst_27015 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
var statearr_27050_27083 = state_27029__$1;
(statearr_27050_27083[(2)] = inst_27015);

(statearr_27050_27083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (2))){
var state_27029__$1 = state_27029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27029__$1,(4),in$);
} else {
if((state_val_27030 === (23))){
var inst_27023 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
var statearr_27051_27084 = state_27029__$1;
(statearr_27051_27084[(2)] = inst_27023);

(statearr_27051_27084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (19))){
var inst_27010 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
var statearr_27052_27085 = state_27029__$1;
(statearr_27052_27085[(2)] = inst_27010);

(statearr_27052_27085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (11))){
var inst_26981 = (state_27029[(12)]);
var inst_26995 = (state_27029[(7)]);
var inst_26995__$1 = cljs.core.seq.call(null,inst_26981);
var state_27029__$1 = (function (){var statearr_27053 = state_27029;
(statearr_27053[(7)] = inst_26995__$1);

return statearr_27053;
})();
if(inst_26995__$1){
var statearr_27054_27086 = state_27029__$1;
(statearr_27054_27086[(1)] = (14));

} else {
var statearr_27055_27087 = state_27029__$1;
(statearr_27055_27087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (9))){
var inst_27017 = (state_27029[(2)]);
var inst_27018 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27029__$1 = (function (){var statearr_27056 = state_27029;
(statearr_27056[(15)] = inst_27017);

return statearr_27056;
})();
if(cljs.core.truth_(inst_27018)){
var statearr_27057_27088 = state_27029__$1;
(statearr_27057_27088[(1)] = (21));

} else {
var statearr_27058_27089 = state_27029__$1;
(statearr_27058_27089[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (5))){
var inst_26973 = cljs.core.async.close_BANG_.call(null,out);
var state_27029__$1 = state_27029;
var statearr_27059_27090 = state_27029__$1;
(statearr_27059_27090[(2)] = inst_26973);

(statearr_27059_27090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (14))){
var inst_26995 = (state_27029[(7)]);
var inst_26997 = cljs.core.chunked_seq_QMARK_.call(null,inst_26995);
var state_27029__$1 = state_27029;
if(inst_26997){
var statearr_27060_27091 = state_27029__$1;
(statearr_27060_27091[(1)] = (17));

} else {
var statearr_27061_27092 = state_27029__$1;
(statearr_27061_27092[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (16))){
var inst_27013 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
var statearr_27062_27093 = state_27029__$1;
(statearr_27062_27093[(2)] = inst_27013);

(statearr_27062_27093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (10))){
var inst_26984 = (state_27029[(9)]);
var inst_26982 = (state_27029[(10)]);
var inst_26989 = cljs.core._nth.call(null,inst_26982,inst_26984);
var state_27029__$1 = state_27029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27029__$1,(13),out,inst_26989);
} else {
if((state_val_27030 === (18))){
var inst_26995 = (state_27029[(7)]);
var inst_27004 = cljs.core.first.call(null,inst_26995);
var state_27029__$1 = state_27029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27029__$1,(20),out,inst_27004);
} else {
if((state_val_27030 === (8))){
var inst_26984 = (state_27029[(9)]);
var inst_26983 = (state_27029[(11)]);
var inst_26986 = (inst_26984 < inst_26983);
var inst_26987 = inst_26986;
var state_27029__$1 = state_27029;
if(cljs.core.truth_(inst_26987)){
var statearr_27063_27094 = state_27029__$1;
(statearr_27063_27094[(1)] = (10));

} else {
var statearr_27064_27095 = state_27029__$1;
(statearr_27064_27095[(1)] = (11));

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
});})(c__19710__auto__))
;
return ((function (switch__19645__auto__,c__19710__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19646__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19646__auto____0 = (function (){
var statearr_27068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27068[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19646__auto__);

(statearr_27068[(1)] = (1));

return statearr_27068;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19646__auto____1 = (function (state_27029){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_27029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e27069){if((e27069 instanceof Object)){
var ex__19649__auto__ = e27069;
var statearr_27070_27096 = state_27029;
(statearr_27070_27096[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27097 = state_27029;
state_27029 = G__27097;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19646__auto__ = function(state_27029){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19646__auto____1.call(this,state_27029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19646__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19646__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__))
})();
var state__19712__auto__ = (function (){var statearr_27071 = f__19711__auto__.call(null);
(statearr_27071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_27071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__))
);

return c__19710__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27098 = [];
var len__17395__auto___27101 = arguments.length;
var i__17396__auto___27102 = (0);
while(true){
if((i__17396__auto___27102 < len__17395__auto___27101)){
args27098.push((arguments[i__17396__auto___27102]));

var G__27103 = (i__17396__auto___27102 + (1));
i__17396__auto___27102 = G__27103;
continue;
} else {
}
break;
}

var G__27100 = args27098.length;
switch (G__27100) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27098.length)].join('')));

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
var args27105 = [];
var len__17395__auto___27108 = arguments.length;
var i__17396__auto___27109 = (0);
while(true){
if((i__17396__auto___27109 < len__17395__auto___27108)){
args27105.push((arguments[i__17396__auto___27109]));

var G__27110 = (i__17396__auto___27109 + (1));
i__17396__auto___27109 = G__27110;
continue;
} else {
}
break;
}

var G__27107 = args27105.length;
switch (G__27107) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27105.length)].join('')));

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
var args27112 = [];
var len__17395__auto___27163 = arguments.length;
var i__17396__auto___27164 = (0);
while(true){
if((i__17396__auto___27164 < len__17395__auto___27163)){
args27112.push((arguments[i__17396__auto___27164]));

var G__27165 = (i__17396__auto___27164 + (1));
i__17396__auto___27164 = G__27165;
continue;
} else {
}
break;
}

var G__27114 = args27112.length;
switch (G__27114) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27112.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19710__auto___27167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___27167,out){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___27167,out){
return (function (state_27138){
var state_val_27139 = (state_27138[(1)]);
if((state_val_27139 === (7))){
var inst_27133 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27140_27168 = state_27138__$1;
(statearr_27140_27168[(2)] = inst_27133);

(statearr_27140_27168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (1))){
var inst_27115 = null;
var state_27138__$1 = (function (){var statearr_27141 = state_27138;
(statearr_27141[(7)] = inst_27115);

return statearr_27141;
})();
var statearr_27142_27169 = state_27138__$1;
(statearr_27142_27169[(2)] = null);

(statearr_27142_27169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (4))){
var inst_27118 = (state_27138[(8)]);
var inst_27118__$1 = (state_27138[(2)]);
var inst_27119 = (inst_27118__$1 == null);
var inst_27120 = cljs.core.not.call(null,inst_27119);
var state_27138__$1 = (function (){var statearr_27143 = state_27138;
(statearr_27143[(8)] = inst_27118__$1);

return statearr_27143;
})();
if(inst_27120){
var statearr_27144_27170 = state_27138__$1;
(statearr_27144_27170[(1)] = (5));

} else {
var statearr_27145_27171 = state_27138__$1;
(statearr_27145_27171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (6))){
var state_27138__$1 = state_27138;
var statearr_27146_27172 = state_27138__$1;
(statearr_27146_27172[(2)] = null);

(statearr_27146_27172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (3))){
var inst_27135 = (state_27138[(2)]);
var inst_27136 = cljs.core.async.close_BANG_.call(null,out);
var state_27138__$1 = (function (){var statearr_27147 = state_27138;
(statearr_27147[(9)] = inst_27135);

return statearr_27147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27138__$1,inst_27136);
} else {
if((state_val_27139 === (2))){
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27138__$1,(4),ch);
} else {
if((state_val_27139 === (11))){
var inst_27118 = (state_27138[(8)]);
var inst_27127 = (state_27138[(2)]);
var inst_27115 = inst_27118;
var state_27138__$1 = (function (){var statearr_27148 = state_27138;
(statearr_27148[(10)] = inst_27127);

(statearr_27148[(7)] = inst_27115);

return statearr_27148;
})();
var statearr_27149_27173 = state_27138__$1;
(statearr_27149_27173[(2)] = null);

(statearr_27149_27173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (9))){
var inst_27118 = (state_27138[(8)]);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27138__$1,(11),out,inst_27118);
} else {
if((state_val_27139 === (5))){
var inst_27115 = (state_27138[(7)]);
var inst_27118 = (state_27138[(8)]);
var inst_27122 = cljs.core._EQ_.call(null,inst_27118,inst_27115);
var state_27138__$1 = state_27138;
if(inst_27122){
var statearr_27151_27174 = state_27138__$1;
(statearr_27151_27174[(1)] = (8));

} else {
var statearr_27152_27175 = state_27138__$1;
(statearr_27152_27175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (10))){
var inst_27130 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27153_27176 = state_27138__$1;
(statearr_27153_27176[(2)] = inst_27130);

(statearr_27153_27176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (8))){
var inst_27115 = (state_27138[(7)]);
var tmp27150 = inst_27115;
var inst_27115__$1 = tmp27150;
var state_27138__$1 = (function (){var statearr_27154 = state_27138;
(statearr_27154[(7)] = inst_27115__$1);

return statearr_27154;
})();
var statearr_27155_27177 = state_27138__$1;
(statearr_27155_27177[(2)] = null);

(statearr_27155_27177[(1)] = (2));


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
});})(c__19710__auto___27167,out))
;
return ((function (switch__19645__auto__,c__19710__auto___27167,out){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_27159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27159[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_27159[(1)] = (1));

return statearr_27159;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_27138){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_27138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e27160){if((e27160 instanceof Object)){
var ex__19649__auto__ = e27160;
var statearr_27161_27178 = state_27138;
(statearr_27161_27178[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27179 = state_27138;
state_27138 = G__27179;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_27138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_27138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___27167,out))
})();
var state__19712__auto__ = (function (){var statearr_27162 = f__19711__auto__.call(null);
(statearr_27162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___27167);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___27167,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27180 = [];
var len__17395__auto___27250 = arguments.length;
var i__17396__auto___27251 = (0);
while(true){
if((i__17396__auto___27251 < len__17395__auto___27250)){
args27180.push((arguments[i__17396__auto___27251]));

var G__27252 = (i__17396__auto___27251 + (1));
i__17396__auto___27251 = G__27252;
continue;
} else {
}
break;
}

var G__27182 = args27180.length;
switch (G__27182) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27180.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19710__auto___27254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___27254,out){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___27254,out){
return (function (state_27220){
var state_val_27221 = (state_27220[(1)]);
if((state_val_27221 === (7))){
var inst_27216 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27222_27255 = state_27220__$1;
(statearr_27222_27255[(2)] = inst_27216);

(statearr_27222_27255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (1))){
var inst_27183 = (new Array(n));
var inst_27184 = inst_27183;
var inst_27185 = (0);
var state_27220__$1 = (function (){var statearr_27223 = state_27220;
(statearr_27223[(7)] = inst_27185);

(statearr_27223[(8)] = inst_27184);

return statearr_27223;
})();
var statearr_27224_27256 = state_27220__$1;
(statearr_27224_27256[(2)] = null);

(statearr_27224_27256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (4))){
var inst_27188 = (state_27220[(9)]);
var inst_27188__$1 = (state_27220[(2)]);
var inst_27189 = (inst_27188__$1 == null);
var inst_27190 = cljs.core.not.call(null,inst_27189);
var state_27220__$1 = (function (){var statearr_27225 = state_27220;
(statearr_27225[(9)] = inst_27188__$1);

return statearr_27225;
})();
if(inst_27190){
var statearr_27226_27257 = state_27220__$1;
(statearr_27226_27257[(1)] = (5));

} else {
var statearr_27227_27258 = state_27220__$1;
(statearr_27227_27258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (15))){
var inst_27210 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27228_27259 = state_27220__$1;
(statearr_27228_27259[(2)] = inst_27210);

(statearr_27228_27259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (13))){
var state_27220__$1 = state_27220;
var statearr_27229_27260 = state_27220__$1;
(statearr_27229_27260[(2)] = null);

(statearr_27229_27260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (6))){
var inst_27185 = (state_27220[(7)]);
var inst_27206 = (inst_27185 > (0));
var state_27220__$1 = state_27220;
if(cljs.core.truth_(inst_27206)){
var statearr_27230_27261 = state_27220__$1;
(statearr_27230_27261[(1)] = (12));

} else {
var statearr_27231_27262 = state_27220__$1;
(statearr_27231_27262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (3))){
var inst_27218 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27220__$1,inst_27218);
} else {
if((state_val_27221 === (12))){
var inst_27184 = (state_27220[(8)]);
var inst_27208 = cljs.core.vec.call(null,inst_27184);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27220__$1,(15),out,inst_27208);
} else {
if((state_val_27221 === (2))){
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27220__$1,(4),ch);
} else {
if((state_val_27221 === (11))){
var inst_27200 = (state_27220[(2)]);
var inst_27201 = (new Array(n));
var inst_27184 = inst_27201;
var inst_27185 = (0);
var state_27220__$1 = (function (){var statearr_27232 = state_27220;
(statearr_27232[(7)] = inst_27185);

(statearr_27232[(8)] = inst_27184);

(statearr_27232[(10)] = inst_27200);

return statearr_27232;
})();
var statearr_27233_27263 = state_27220__$1;
(statearr_27233_27263[(2)] = null);

(statearr_27233_27263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (9))){
var inst_27184 = (state_27220[(8)]);
var inst_27198 = cljs.core.vec.call(null,inst_27184);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27220__$1,(11),out,inst_27198);
} else {
if((state_val_27221 === (5))){
var inst_27193 = (state_27220[(11)]);
var inst_27185 = (state_27220[(7)]);
var inst_27188 = (state_27220[(9)]);
var inst_27184 = (state_27220[(8)]);
var inst_27192 = (inst_27184[inst_27185] = inst_27188);
var inst_27193__$1 = (inst_27185 + (1));
var inst_27194 = (inst_27193__$1 < n);
var state_27220__$1 = (function (){var statearr_27234 = state_27220;
(statearr_27234[(12)] = inst_27192);

(statearr_27234[(11)] = inst_27193__$1);

return statearr_27234;
})();
if(cljs.core.truth_(inst_27194)){
var statearr_27235_27264 = state_27220__$1;
(statearr_27235_27264[(1)] = (8));

} else {
var statearr_27236_27265 = state_27220__$1;
(statearr_27236_27265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (14))){
var inst_27213 = (state_27220[(2)]);
var inst_27214 = cljs.core.async.close_BANG_.call(null,out);
var state_27220__$1 = (function (){var statearr_27238 = state_27220;
(statearr_27238[(13)] = inst_27213);

return statearr_27238;
})();
var statearr_27239_27266 = state_27220__$1;
(statearr_27239_27266[(2)] = inst_27214);

(statearr_27239_27266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (10))){
var inst_27204 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27240_27267 = state_27220__$1;
(statearr_27240_27267[(2)] = inst_27204);

(statearr_27240_27267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (8))){
var inst_27193 = (state_27220[(11)]);
var inst_27184 = (state_27220[(8)]);
var tmp27237 = inst_27184;
var inst_27184__$1 = tmp27237;
var inst_27185 = inst_27193;
var state_27220__$1 = (function (){var statearr_27241 = state_27220;
(statearr_27241[(7)] = inst_27185);

(statearr_27241[(8)] = inst_27184__$1);

return statearr_27241;
})();
var statearr_27242_27268 = state_27220__$1;
(statearr_27242_27268[(2)] = null);

(statearr_27242_27268[(1)] = (2));


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
});})(c__19710__auto___27254,out))
;
return ((function (switch__19645__auto__,c__19710__auto___27254,out){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_27246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27246[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_27246[(1)] = (1));

return statearr_27246;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_27220){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_27220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e27247){if((e27247 instanceof Object)){
var ex__19649__auto__ = e27247;
var statearr_27248_27269 = state_27220;
(statearr_27248_27269[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27270 = state_27220;
state_27220 = G__27270;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_27220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_27220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___27254,out))
})();
var state__19712__auto__ = (function (){var statearr_27249 = f__19711__auto__.call(null);
(statearr_27249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___27254);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___27254,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27271 = [];
var len__17395__auto___27345 = arguments.length;
var i__17396__auto___27346 = (0);
while(true){
if((i__17396__auto___27346 < len__17395__auto___27345)){
args27271.push((arguments[i__17396__auto___27346]));

var G__27347 = (i__17396__auto___27346 + (1));
i__17396__auto___27346 = G__27347;
continue;
} else {
}
break;
}

var G__27273 = args27271.length;
switch (G__27273) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27271.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19710__auto___27349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___27349,out){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___27349,out){
return (function (state_27315){
var state_val_27316 = (state_27315[(1)]);
if((state_val_27316 === (7))){
var inst_27311 = (state_27315[(2)]);
var state_27315__$1 = state_27315;
var statearr_27317_27350 = state_27315__$1;
(statearr_27317_27350[(2)] = inst_27311);

(statearr_27317_27350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (1))){
var inst_27274 = [];
var inst_27275 = inst_27274;
var inst_27276 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27315__$1 = (function (){var statearr_27318 = state_27315;
(statearr_27318[(7)] = inst_27275);

(statearr_27318[(8)] = inst_27276);

return statearr_27318;
})();
var statearr_27319_27351 = state_27315__$1;
(statearr_27319_27351[(2)] = null);

(statearr_27319_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (4))){
var inst_27279 = (state_27315[(9)]);
var inst_27279__$1 = (state_27315[(2)]);
var inst_27280 = (inst_27279__$1 == null);
var inst_27281 = cljs.core.not.call(null,inst_27280);
var state_27315__$1 = (function (){var statearr_27320 = state_27315;
(statearr_27320[(9)] = inst_27279__$1);

return statearr_27320;
})();
if(inst_27281){
var statearr_27321_27352 = state_27315__$1;
(statearr_27321_27352[(1)] = (5));

} else {
var statearr_27322_27353 = state_27315__$1;
(statearr_27322_27353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (15))){
var inst_27305 = (state_27315[(2)]);
var state_27315__$1 = state_27315;
var statearr_27323_27354 = state_27315__$1;
(statearr_27323_27354[(2)] = inst_27305);

(statearr_27323_27354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (13))){
var state_27315__$1 = state_27315;
var statearr_27324_27355 = state_27315__$1;
(statearr_27324_27355[(2)] = null);

(statearr_27324_27355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (6))){
var inst_27275 = (state_27315[(7)]);
var inst_27300 = inst_27275.length;
var inst_27301 = (inst_27300 > (0));
var state_27315__$1 = state_27315;
if(cljs.core.truth_(inst_27301)){
var statearr_27325_27356 = state_27315__$1;
(statearr_27325_27356[(1)] = (12));

} else {
var statearr_27326_27357 = state_27315__$1;
(statearr_27326_27357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (3))){
var inst_27313 = (state_27315[(2)]);
var state_27315__$1 = state_27315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27315__$1,inst_27313);
} else {
if((state_val_27316 === (12))){
var inst_27275 = (state_27315[(7)]);
var inst_27303 = cljs.core.vec.call(null,inst_27275);
var state_27315__$1 = state_27315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27315__$1,(15),out,inst_27303);
} else {
if((state_val_27316 === (2))){
var state_27315__$1 = state_27315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27315__$1,(4),ch);
} else {
if((state_val_27316 === (11))){
var inst_27283 = (state_27315[(10)]);
var inst_27279 = (state_27315[(9)]);
var inst_27293 = (state_27315[(2)]);
var inst_27294 = [];
var inst_27295 = inst_27294.push(inst_27279);
var inst_27275 = inst_27294;
var inst_27276 = inst_27283;
var state_27315__$1 = (function (){var statearr_27327 = state_27315;
(statearr_27327[(7)] = inst_27275);

(statearr_27327[(11)] = inst_27295);

(statearr_27327[(12)] = inst_27293);

(statearr_27327[(8)] = inst_27276);

return statearr_27327;
})();
var statearr_27328_27358 = state_27315__$1;
(statearr_27328_27358[(2)] = null);

(statearr_27328_27358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (9))){
var inst_27275 = (state_27315[(7)]);
var inst_27291 = cljs.core.vec.call(null,inst_27275);
var state_27315__$1 = state_27315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27315__$1,(11),out,inst_27291);
} else {
if((state_val_27316 === (5))){
var inst_27283 = (state_27315[(10)]);
var inst_27279 = (state_27315[(9)]);
var inst_27276 = (state_27315[(8)]);
var inst_27283__$1 = f.call(null,inst_27279);
var inst_27284 = cljs.core._EQ_.call(null,inst_27283__$1,inst_27276);
var inst_27285 = cljs.core.keyword_identical_QMARK_.call(null,inst_27276,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27286 = (inst_27284) || (inst_27285);
var state_27315__$1 = (function (){var statearr_27329 = state_27315;
(statearr_27329[(10)] = inst_27283__$1);

return statearr_27329;
})();
if(cljs.core.truth_(inst_27286)){
var statearr_27330_27359 = state_27315__$1;
(statearr_27330_27359[(1)] = (8));

} else {
var statearr_27331_27360 = state_27315__$1;
(statearr_27331_27360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (14))){
var inst_27308 = (state_27315[(2)]);
var inst_27309 = cljs.core.async.close_BANG_.call(null,out);
var state_27315__$1 = (function (){var statearr_27333 = state_27315;
(statearr_27333[(13)] = inst_27308);

return statearr_27333;
})();
var statearr_27334_27361 = state_27315__$1;
(statearr_27334_27361[(2)] = inst_27309);

(statearr_27334_27361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (10))){
var inst_27298 = (state_27315[(2)]);
var state_27315__$1 = state_27315;
var statearr_27335_27362 = state_27315__$1;
(statearr_27335_27362[(2)] = inst_27298);

(statearr_27335_27362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27316 === (8))){
var inst_27283 = (state_27315[(10)]);
var inst_27275 = (state_27315[(7)]);
var inst_27279 = (state_27315[(9)]);
var inst_27288 = inst_27275.push(inst_27279);
var tmp27332 = inst_27275;
var inst_27275__$1 = tmp27332;
var inst_27276 = inst_27283;
var state_27315__$1 = (function (){var statearr_27336 = state_27315;
(statearr_27336[(7)] = inst_27275__$1);

(statearr_27336[(14)] = inst_27288);

(statearr_27336[(8)] = inst_27276);

return statearr_27336;
})();
var statearr_27337_27363 = state_27315__$1;
(statearr_27337_27363[(2)] = null);

(statearr_27337_27363[(1)] = (2));


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
});})(c__19710__auto___27349,out))
;
return ((function (switch__19645__auto__,c__19710__auto___27349,out){
return (function() {
var cljs$core$async$state_machine__19646__auto__ = null;
var cljs$core$async$state_machine__19646__auto____0 = (function (){
var statearr_27341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27341[(0)] = cljs$core$async$state_machine__19646__auto__);

(statearr_27341[(1)] = (1));

return statearr_27341;
});
var cljs$core$async$state_machine__19646__auto____1 = (function (state_27315){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_27315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e27342){if((e27342 instanceof Object)){
var ex__19649__auto__ = e27342;
var statearr_27343_27364 = state_27315;
(statearr_27343_27364[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27365 = state_27315;
state_27315 = G__27365;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
cljs$core$async$state_machine__19646__auto__ = function(state_27315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19646__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19646__auto____1.call(this,state_27315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19646__auto____0;
cljs$core$async$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19646__auto____1;
return cljs$core$async$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___27349,out))
})();
var state__19712__auto__ = (function (){var statearr_27344 = f__19711__auto__.call(null);
(statearr_27344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___27349);

return statearr_27344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___27349,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1442160856972