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
if(typeof cljs.core.async.t_cljs$core$async24874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24874 = (function (fn_handler,f,meta24875){
this.fn_handler = fn_handler;
this.f = f;
this.meta24875 = meta24875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24876,meta24875__$1){
var self__ = this;
var _24876__$1 = this;
return (new cljs.core.async.t_cljs$core$async24874(self__.fn_handler,self__.f,meta24875__$1));
});

cljs.core.async.t_cljs$core$async24874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24876){
var self__ = this;
var _24876__$1 = this;
return self__.meta24875;
});

cljs.core.async.t_cljs$core$async24874.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24875","meta24875",-609161162,null)], null);
});

cljs.core.async.t_cljs$core$async24874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24874";

cljs.core.async.t_cljs$core$async24874.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24874");
});

cljs.core.async.__GT_t_cljs$core$async24874 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async24874(fn_handler__$1,f__$1,meta24875){
return (new cljs.core.async.t_cljs$core$async24874(fn_handler__$1,f__$1,meta24875));
});

}

return (new cljs.core.async.t_cljs$core$async24874(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args24879 = [];
var len__17395__auto___24882 = arguments.length;
var i__17396__auto___24883 = (0);
while(true){
if((i__17396__auto___24883 < len__17395__auto___24882)){
args24879.push((arguments[i__17396__auto___24883]));

var G__24884 = (i__17396__auto___24883 + (1));
i__17396__auto___24883 = G__24884;
continue;
} else {
}
break;
}

var G__24881 = args24879.length;
switch (G__24881) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24879.length)].join('')));

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
var args24886 = [];
var len__17395__auto___24889 = arguments.length;
var i__17396__auto___24890 = (0);
while(true){
if((i__17396__auto___24890 < len__17395__auto___24889)){
args24886.push((arguments[i__17396__auto___24890]));

var G__24891 = (i__17396__auto___24890 + (1));
i__17396__auto___24890 = G__24891;
continue;
} else {
}
break;
}

var G__24888 = args24886.length;
switch (G__24888) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24886.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24893 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24893);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24893,ret){
return (function (){
return fn1.call(null,val_24893);
});})(val_24893,ret))
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
var args24894 = [];
var len__17395__auto___24897 = arguments.length;
var i__17396__auto___24898 = (0);
while(true){
if((i__17396__auto___24898 < len__17395__auto___24897)){
args24894.push((arguments[i__17396__auto___24898]));

var G__24899 = (i__17396__auto___24898 + (1));
i__17396__auto___24898 = G__24899;
continue;
} else {
}
break;
}

var G__24896 = args24894.length;
switch (G__24896) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24894.length)].join('')));

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
var n__17240__auto___24901 = n;
var x_24902 = (0);
while(true){
if((x_24902 < n__17240__auto___24901)){
(a[x_24902] = (0));

var G__24903 = (x_24902 + (1));
x_24902 = G__24903;
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

var G__24904 = (i + (1));
i = G__24904;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24908 = (function (alt_flag,flag,meta24909){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24909 = meta24909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24910,meta24909__$1){
var self__ = this;
var _24910__$1 = this;
return (new cljs.core.async.t_cljs$core$async24908(self__.alt_flag,self__.flag,meta24909__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24910){
var self__ = this;
var _24910__$1 = this;
return self__.meta24909;
});})(flag))
;

cljs.core.async.t_cljs$core$async24908.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24908.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24909","meta24909",1211700083,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24908";

cljs.core.async.t_cljs$core$async24908.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24908");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24908 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24908(alt_flag__$1,flag__$1,meta24909){
return (new cljs.core.async.t_cljs$core$async24908(alt_flag__$1,flag__$1,meta24909));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24908(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24914 = (function (alt_handler,flag,cb,meta24915){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24915 = meta24915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24916,meta24915__$1){
var self__ = this;
var _24916__$1 = this;
return (new cljs.core.async.t_cljs$core$async24914(self__.alt_handler,self__.flag,self__.cb,meta24915__$1));
});

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24916){
var self__ = this;
var _24916__$1 = this;
return self__.meta24915;
});

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24915","meta24915",-245419049,null)], null);
});

cljs.core.async.t_cljs$core$async24914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24914";

cljs.core.async.t_cljs$core$async24914.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async24914");
});

cljs.core.async.__GT_t_cljs$core$async24914 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24914(alt_handler__$1,flag__$1,cb__$1,meta24915){
return (new cljs.core.async.t_cljs$core$async24914(alt_handler__$1,flag__$1,cb__$1,meta24915));
});

}

return (new cljs.core.async.t_cljs$core$async24914(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24917_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24917_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24918_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24918_SHARP_,port], null));
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
var G__24919 = (i + (1));
i = G__24919;
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
var len__17395__auto___24925 = arguments.length;
var i__17396__auto___24926 = (0);
while(true){
if((i__17396__auto___24926 < len__17395__auto___24925)){
args__17402__auto__.push((arguments[i__17396__auto___24926]));

var G__24927 = (i__17396__auto___24926 + (1));
i__17396__auto___24926 = G__24927;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((1) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17403__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24922){
var map__24923 = p__24922;
var map__24923__$1 = ((((!((map__24923 == null)))?((((map__24923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24923):map__24923);
var opts = map__24923__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24920){
var G__24921 = cljs.core.first.call(null,seq24920);
var seq24920__$1 = cljs.core.next.call(null,seq24920);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24921,seq24920__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24928 = [];
var len__17395__auto___24978 = arguments.length;
var i__17396__auto___24979 = (0);
while(true){
if((i__17396__auto___24979 < len__17395__auto___24978)){
args24928.push((arguments[i__17396__auto___24979]));

var G__24980 = (i__17396__auto___24979 + (1));
i__17396__auto___24979 = G__24980;
continue;
} else {
}
break;
}

var G__24930 = args24928.length;
switch (G__24930) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24928.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19856__auto___24982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___24982){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___24982){
return (function (state_24954){
var state_val_24955 = (state_24954[(1)]);
if((state_val_24955 === (7))){
var inst_24950 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24956_24983 = state_24954__$1;
(statearr_24956_24983[(2)] = inst_24950);

(statearr_24956_24983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (1))){
var state_24954__$1 = state_24954;
var statearr_24957_24984 = state_24954__$1;
(statearr_24957_24984[(2)] = null);

(statearr_24957_24984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (4))){
var inst_24933 = (state_24954[(7)]);
var inst_24933__$1 = (state_24954[(2)]);
var inst_24934 = (inst_24933__$1 == null);
var state_24954__$1 = (function (){var statearr_24958 = state_24954;
(statearr_24958[(7)] = inst_24933__$1);

return statearr_24958;
})();
if(cljs.core.truth_(inst_24934)){
var statearr_24959_24985 = state_24954__$1;
(statearr_24959_24985[(1)] = (5));

} else {
var statearr_24960_24986 = state_24954__$1;
(statearr_24960_24986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (13))){
var state_24954__$1 = state_24954;
var statearr_24961_24987 = state_24954__$1;
(statearr_24961_24987[(2)] = null);

(statearr_24961_24987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (6))){
var inst_24933 = (state_24954[(7)]);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24954__$1,(11),to,inst_24933);
} else {
if((state_val_24955 === (3))){
var inst_24952 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24954__$1,inst_24952);
} else {
if((state_val_24955 === (12))){
var state_24954__$1 = state_24954;
var statearr_24962_24988 = state_24954__$1;
(statearr_24962_24988[(2)] = null);

(statearr_24962_24988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (2))){
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24954__$1,(4),from);
} else {
if((state_val_24955 === (11))){
var inst_24943 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
if(cljs.core.truth_(inst_24943)){
var statearr_24963_24989 = state_24954__$1;
(statearr_24963_24989[(1)] = (12));

} else {
var statearr_24964_24990 = state_24954__$1;
(statearr_24964_24990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (9))){
var state_24954__$1 = state_24954;
var statearr_24965_24991 = state_24954__$1;
(statearr_24965_24991[(2)] = null);

(statearr_24965_24991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (5))){
var state_24954__$1 = state_24954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24966_24992 = state_24954__$1;
(statearr_24966_24992[(1)] = (8));

} else {
var statearr_24967_24993 = state_24954__$1;
(statearr_24967_24993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (14))){
var inst_24948 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24968_24994 = state_24954__$1;
(statearr_24968_24994[(2)] = inst_24948);

(statearr_24968_24994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (10))){
var inst_24940 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24969_24995 = state_24954__$1;
(statearr_24969_24995[(2)] = inst_24940);

(statearr_24969_24995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (8))){
var inst_24937 = cljs.core.async.close_BANG_.call(null,to);
var state_24954__$1 = state_24954;
var statearr_24970_24996 = state_24954__$1;
(statearr_24970_24996[(2)] = inst_24937);

(statearr_24970_24996[(1)] = (10));


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
});})(c__19856__auto___24982))
;
return ((function (switch__19791__auto__,c__19856__auto___24982){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_24974 = [null,null,null,null,null,null,null,null];
(statearr_24974[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_24974[(1)] = (1));

return statearr_24974;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_24954){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_24954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e24975){if((e24975 instanceof Object)){
var ex__19795__auto__ = e24975;
var statearr_24976_24997 = state_24954;
(statearr_24976_24997[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24954;
state_24954 = G__24998;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_24954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_24954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___24982))
})();
var state__19858__auto__ = (function (){var statearr_24977 = f__19857__auto__.call(null);
(statearr_24977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___24982);

return statearr_24977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___24982))
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
return (function (p__25182){
var vec__25183 = p__25182;
var v = cljs.core.nth.call(null,vec__25183,(0),null);
var p = cljs.core.nth.call(null,vec__25183,(1),null);
var job = vec__25183;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19856__auto___25365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___25365,res,vec__25183,v,p,job,jobs,results){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___25365,res,vec__25183,v,p,job,jobs,results){
return (function (state_25188){
var state_val_25189 = (state_25188[(1)]);
if((state_val_25189 === (1))){
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25188__$1,(2),res,v);
} else {
if((state_val_25189 === (2))){
var inst_25185 = (state_25188[(2)]);
var inst_25186 = cljs.core.async.close_BANG_.call(null,res);
var state_25188__$1 = (function (){var statearr_25190 = state_25188;
(statearr_25190[(7)] = inst_25185);

return statearr_25190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else {
return null;
}
}
});})(c__19856__auto___25365,res,vec__25183,v,p,job,jobs,results))
;
return ((function (switch__19791__auto__,c__19856__auto___25365,res,vec__25183,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0 = (function (){
var statearr_25194 = [null,null,null,null,null,null,null,null];
(statearr_25194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__);

(statearr_25194[(1)] = (1));

return statearr_25194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1 = (function (state_25188){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25195){if((e25195 instanceof Object)){
var ex__19795__auto__ = e25195;
var statearr_25196_25366 = state_25188;
(statearr_25196_25366[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25367 = state_25188;
state_25188 = G__25367;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___25365,res,vec__25183,v,p,job,jobs,results))
})();
var state__19858__auto__ = (function (){var statearr_25197 = f__19857__auto__.call(null);
(statearr_25197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___25365);

return statearr_25197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___25365,res,vec__25183,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25198){
var vec__25199 = p__25198;
var v = cljs.core.nth.call(null,vec__25199,(0),null);
var p = cljs.core.nth.call(null,vec__25199,(1),null);
var job = vec__25199;
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
var n__17240__auto___25368 = n;
var __25369 = (0);
while(true){
if((__25369 < n__17240__auto___25368)){
var G__25200_25370 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25200_25370) {
case "compute":
var c__19856__auto___25372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25369,c__19856__auto___25372,G__25200_25370,n__17240__auto___25368,jobs,results,process,async){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (__25369,c__19856__auto___25372,G__25200_25370,n__17240__auto___25368,jobs,results,process,async){
return (function (state_25213){
var state_val_25214 = (state_25213[(1)]);
if((state_val_25214 === (1))){
var state_25213__$1 = state_25213;
var statearr_25215_25373 = state_25213__$1;
(statearr_25215_25373[(2)] = null);

(statearr_25215_25373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (2))){
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25213__$1,(4),jobs);
} else {
if((state_val_25214 === (3))){
var inst_25211 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25213__$1,inst_25211);
} else {
if((state_val_25214 === (4))){
var inst_25203 = (state_25213[(2)]);
var inst_25204 = process.call(null,inst_25203);
var state_25213__$1 = state_25213;
if(cljs.core.truth_(inst_25204)){
var statearr_25216_25374 = state_25213__$1;
(statearr_25216_25374[(1)] = (5));

} else {
var statearr_25217_25375 = state_25213__$1;
(statearr_25217_25375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (5))){
var state_25213__$1 = state_25213;
var statearr_25218_25376 = state_25213__$1;
(statearr_25218_25376[(2)] = null);

(statearr_25218_25376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (6))){
var state_25213__$1 = state_25213;
var statearr_25219_25377 = state_25213__$1;
(statearr_25219_25377[(2)] = null);

(statearr_25219_25377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (7))){
var inst_25209 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25220_25378 = state_25213__$1;
(statearr_25220_25378[(2)] = inst_25209);

(statearr_25220_25378[(1)] = (3));


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
});})(__25369,c__19856__auto___25372,G__25200_25370,n__17240__auto___25368,jobs,results,process,async))
;
return ((function (__25369,switch__19791__auto__,c__19856__auto___25372,G__25200_25370,n__17240__auto___25368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0 = (function (){
var statearr_25224 = [null,null,null,null,null,null,null];
(statearr_25224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__);

(statearr_25224[(1)] = (1));

return statearr_25224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1 = (function (state_25213){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25225){if((e25225 instanceof Object)){
var ex__19795__auto__ = e25225;
var statearr_25226_25379 = state_25213;
(statearr_25226_25379[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25380 = state_25213;
state_25213 = G__25380;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = function(state_25213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1.call(this,state_25213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__;
})()
;})(__25369,switch__19791__auto__,c__19856__auto___25372,G__25200_25370,n__17240__auto___25368,jobs,results,process,async))
})();
var state__19858__auto__ = (function (){var statearr_25227 = f__19857__auto__.call(null);
(statearr_25227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___25372);

return statearr_25227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(__25369,c__19856__auto___25372,G__25200_25370,n__17240__auto___25368,jobs,results,process,async))
);


break;
case "async":
var c__19856__auto___25381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25369,c__19856__auto___25381,G__25200_25370,n__17240__auto___25368,jobs,results,process,async){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (__25369,c__19856__auto___25381,G__25200_25370,n__17240__auto___25368,jobs,results,process,async){
return (function (state_25240){
var state_val_25241 = (state_25240[(1)]);
if((state_val_25241 === (1))){
var state_25240__$1 = state_25240;
var statearr_25242_25382 = state_25240__$1;
(statearr_25242_25382[(2)] = null);

(statearr_25242_25382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (2))){
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25240__$1,(4),jobs);
} else {
if((state_val_25241 === (3))){
var inst_25238 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25240__$1,inst_25238);
} else {
if((state_val_25241 === (4))){
var inst_25230 = (state_25240[(2)]);
var inst_25231 = async.call(null,inst_25230);
var state_25240__$1 = state_25240;
if(cljs.core.truth_(inst_25231)){
var statearr_25243_25383 = state_25240__$1;
(statearr_25243_25383[(1)] = (5));

} else {
var statearr_25244_25384 = state_25240__$1;
(statearr_25244_25384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (5))){
var state_25240__$1 = state_25240;
var statearr_25245_25385 = state_25240__$1;
(statearr_25245_25385[(2)] = null);

(statearr_25245_25385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (6))){
var state_25240__$1 = state_25240;
var statearr_25246_25386 = state_25240__$1;
(statearr_25246_25386[(2)] = null);

(statearr_25246_25386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25241 === (7))){
var inst_25236 = (state_25240[(2)]);
var state_25240__$1 = state_25240;
var statearr_25247_25387 = state_25240__$1;
(statearr_25247_25387[(2)] = inst_25236);

(statearr_25247_25387[(1)] = (3));


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
});})(__25369,c__19856__auto___25381,G__25200_25370,n__17240__auto___25368,jobs,results,process,async))
;
return ((function (__25369,switch__19791__auto__,c__19856__auto___25381,G__25200_25370,n__17240__auto___25368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0 = (function (){
var statearr_25251 = [null,null,null,null,null,null,null];
(statearr_25251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__);

(statearr_25251[(1)] = (1));

return statearr_25251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1 = (function (state_25240){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25252){if((e25252 instanceof Object)){
var ex__19795__auto__ = e25252;
var statearr_25253_25388 = state_25240;
(statearr_25253_25388[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25389 = state_25240;
state_25240 = G__25389;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = function(state_25240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1.call(this,state_25240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__;
})()
;})(__25369,switch__19791__auto__,c__19856__auto___25381,G__25200_25370,n__17240__auto___25368,jobs,results,process,async))
})();
var state__19858__auto__ = (function (){var statearr_25254 = f__19857__auto__.call(null);
(statearr_25254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___25381);

return statearr_25254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(__25369,c__19856__auto___25381,G__25200_25370,n__17240__auto___25368,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25390 = (__25369 + (1));
__25369 = G__25390;
continue;
} else {
}
break;
}

var c__19856__auto___25391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___25391,jobs,results,process,async){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___25391,jobs,results,process,async){
return (function (state_25276){
var state_val_25277 = (state_25276[(1)]);
if((state_val_25277 === (1))){
var state_25276__$1 = state_25276;
var statearr_25278_25392 = state_25276__$1;
(statearr_25278_25392[(2)] = null);

(statearr_25278_25392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (2))){
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25276__$1,(4),from);
} else {
if((state_val_25277 === (3))){
var inst_25274 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25276__$1,inst_25274);
} else {
if((state_val_25277 === (4))){
var inst_25257 = (state_25276[(7)]);
var inst_25257__$1 = (state_25276[(2)]);
var inst_25258 = (inst_25257__$1 == null);
var state_25276__$1 = (function (){var statearr_25279 = state_25276;
(statearr_25279[(7)] = inst_25257__$1);

return statearr_25279;
})();
if(cljs.core.truth_(inst_25258)){
var statearr_25280_25393 = state_25276__$1;
(statearr_25280_25393[(1)] = (5));

} else {
var statearr_25281_25394 = state_25276__$1;
(statearr_25281_25394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (5))){
var inst_25260 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25276__$1 = state_25276;
var statearr_25282_25395 = state_25276__$1;
(statearr_25282_25395[(2)] = inst_25260);

(statearr_25282_25395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (6))){
var inst_25257 = (state_25276[(7)]);
var inst_25262 = (state_25276[(8)]);
var inst_25262__$1 = cljs.core.async.chan.call(null,(1));
var inst_25263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25264 = [inst_25257,inst_25262__$1];
var inst_25265 = (new cljs.core.PersistentVector(null,2,(5),inst_25263,inst_25264,null));
var state_25276__$1 = (function (){var statearr_25283 = state_25276;
(statearr_25283[(8)] = inst_25262__$1);

return statearr_25283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25276__$1,(8),jobs,inst_25265);
} else {
if((state_val_25277 === (7))){
var inst_25272 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25284_25396 = state_25276__$1;
(statearr_25284_25396[(2)] = inst_25272);

(statearr_25284_25396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (8))){
var inst_25262 = (state_25276[(8)]);
var inst_25267 = (state_25276[(2)]);
var state_25276__$1 = (function (){var statearr_25285 = state_25276;
(statearr_25285[(9)] = inst_25267);

return statearr_25285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25276__$1,(9),results,inst_25262);
} else {
if((state_val_25277 === (9))){
var inst_25269 = (state_25276[(2)]);
var state_25276__$1 = (function (){var statearr_25286 = state_25276;
(statearr_25286[(10)] = inst_25269);

return statearr_25286;
})();
var statearr_25287_25397 = state_25276__$1;
(statearr_25287_25397[(2)] = null);

(statearr_25287_25397[(1)] = (2));


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
});})(c__19856__auto___25391,jobs,results,process,async))
;
return ((function (switch__19791__auto__,c__19856__auto___25391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0 = (function (){
var statearr_25291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__);

(statearr_25291[(1)] = (1));

return statearr_25291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1 = (function (state_25276){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25292){if((e25292 instanceof Object)){
var ex__19795__auto__ = e25292;
var statearr_25293_25398 = state_25276;
(statearr_25293_25398[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25399 = state_25276;
state_25276 = G__25399;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = function(state_25276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1.call(this,state_25276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___25391,jobs,results,process,async))
})();
var state__19858__auto__ = (function (){var statearr_25294 = f__19857__auto__.call(null);
(statearr_25294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___25391);

return statearr_25294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___25391,jobs,results,process,async))
);


var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__,jobs,results,process,async){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__,jobs,results,process,async){
return (function (state_25332){
var state_val_25333 = (state_25332[(1)]);
if((state_val_25333 === (7))){
var inst_25328 = (state_25332[(2)]);
var state_25332__$1 = state_25332;
var statearr_25334_25400 = state_25332__$1;
(statearr_25334_25400[(2)] = inst_25328);

(statearr_25334_25400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (20))){
var state_25332__$1 = state_25332;
var statearr_25335_25401 = state_25332__$1;
(statearr_25335_25401[(2)] = null);

(statearr_25335_25401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (1))){
var state_25332__$1 = state_25332;
var statearr_25336_25402 = state_25332__$1;
(statearr_25336_25402[(2)] = null);

(statearr_25336_25402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (4))){
var inst_25297 = (state_25332[(7)]);
var inst_25297__$1 = (state_25332[(2)]);
var inst_25298 = (inst_25297__$1 == null);
var state_25332__$1 = (function (){var statearr_25337 = state_25332;
(statearr_25337[(7)] = inst_25297__$1);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25298)){
var statearr_25338_25403 = state_25332__$1;
(statearr_25338_25403[(1)] = (5));

} else {
var statearr_25339_25404 = state_25332__$1;
(statearr_25339_25404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (15))){
var inst_25310 = (state_25332[(8)]);
var state_25332__$1 = state_25332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25332__$1,(18),to,inst_25310);
} else {
if((state_val_25333 === (21))){
var inst_25323 = (state_25332[(2)]);
var state_25332__$1 = state_25332;
var statearr_25340_25405 = state_25332__$1;
(statearr_25340_25405[(2)] = inst_25323);

(statearr_25340_25405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (13))){
var inst_25325 = (state_25332[(2)]);
var state_25332__$1 = (function (){var statearr_25341 = state_25332;
(statearr_25341[(9)] = inst_25325);

return statearr_25341;
})();
var statearr_25342_25406 = state_25332__$1;
(statearr_25342_25406[(2)] = null);

(statearr_25342_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (6))){
var inst_25297 = (state_25332[(7)]);
var state_25332__$1 = state_25332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25332__$1,(11),inst_25297);
} else {
if((state_val_25333 === (17))){
var inst_25318 = (state_25332[(2)]);
var state_25332__$1 = state_25332;
if(cljs.core.truth_(inst_25318)){
var statearr_25343_25407 = state_25332__$1;
(statearr_25343_25407[(1)] = (19));

} else {
var statearr_25344_25408 = state_25332__$1;
(statearr_25344_25408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (3))){
var inst_25330 = (state_25332[(2)]);
var state_25332__$1 = state_25332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25332__$1,inst_25330);
} else {
if((state_val_25333 === (12))){
var inst_25307 = (state_25332[(10)]);
var state_25332__$1 = state_25332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25332__$1,(14),inst_25307);
} else {
if((state_val_25333 === (2))){
var state_25332__$1 = state_25332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25332__$1,(4),results);
} else {
if((state_val_25333 === (19))){
var state_25332__$1 = state_25332;
var statearr_25345_25409 = state_25332__$1;
(statearr_25345_25409[(2)] = null);

(statearr_25345_25409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (11))){
var inst_25307 = (state_25332[(2)]);
var state_25332__$1 = (function (){var statearr_25346 = state_25332;
(statearr_25346[(10)] = inst_25307);

return statearr_25346;
})();
var statearr_25347_25410 = state_25332__$1;
(statearr_25347_25410[(2)] = null);

(statearr_25347_25410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (9))){
var state_25332__$1 = state_25332;
var statearr_25348_25411 = state_25332__$1;
(statearr_25348_25411[(2)] = null);

(statearr_25348_25411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (5))){
var state_25332__$1 = state_25332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25349_25412 = state_25332__$1;
(statearr_25349_25412[(1)] = (8));

} else {
var statearr_25350_25413 = state_25332__$1;
(statearr_25350_25413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (14))){
var inst_25310 = (state_25332[(8)]);
var inst_25312 = (state_25332[(11)]);
var inst_25310__$1 = (state_25332[(2)]);
var inst_25311 = (inst_25310__$1 == null);
var inst_25312__$1 = cljs.core.not.call(null,inst_25311);
var state_25332__$1 = (function (){var statearr_25351 = state_25332;
(statearr_25351[(8)] = inst_25310__$1);

(statearr_25351[(11)] = inst_25312__$1);

return statearr_25351;
})();
if(inst_25312__$1){
var statearr_25352_25414 = state_25332__$1;
(statearr_25352_25414[(1)] = (15));

} else {
var statearr_25353_25415 = state_25332__$1;
(statearr_25353_25415[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (16))){
var inst_25312 = (state_25332[(11)]);
var state_25332__$1 = state_25332;
var statearr_25354_25416 = state_25332__$1;
(statearr_25354_25416[(2)] = inst_25312);

(statearr_25354_25416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (10))){
var inst_25304 = (state_25332[(2)]);
var state_25332__$1 = state_25332;
var statearr_25355_25417 = state_25332__$1;
(statearr_25355_25417[(2)] = inst_25304);

(statearr_25355_25417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (18))){
var inst_25315 = (state_25332[(2)]);
var state_25332__$1 = state_25332;
var statearr_25356_25418 = state_25332__$1;
(statearr_25356_25418[(2)] = inst_25315);

(statearr_25356_25418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25333 === (8))){
var inst_25301 = cljs.core.async.close_BANG_.call(null,to);
var state_25332__$1 = state_25332;
var statearr_25357_25419 = state_25332__$1;
(statearr_25357_25419[(2)] = inst_25301);

(statearr_25357_25419[(1)] = (10));


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
});})(c__19856__auto__,jobs,results,process,async))
;
return ((function (switch__19791__auto__,c__19856__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0 = (function (){
var statearr_25361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__);

(statearr_25361[(1)] = (1));

return statearr_25361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1 = (function (state_25332){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25362){if((e25362 instanceof Object)){
var ex__19795__auto__ = e25362;
var statearr_25363_25420 = state_25332;
(statearr_25363_25420[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25421 = state_25332;
state_25332 = G__25421;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__ = function(state_25332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1.call(this,state_25332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19792__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__,jobs,results,process,async))
})();
var state__19858__auto__ = (function (){var statearr_25364 = f__19857__auto__.call(null);
(statearr_25364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_25364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__,jobs,results,process,async))
);

return c__19856__auto__;
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
var args25422 = [];
var len__17395__auto___25425 = arguments.length;
var i__17396__auto___25426 = (0);
while(true){
if((i__17396__auto___25426 < len__17395__auto___25425)){
args25422.push((arguments[i__17396__auto___25426]));

var G__25427 = (i__17396__auto___25426 + (1));
i__17396__auto___25426 = G__25427;
continue;
} else {
}
break;
}

var G__25424 = args25422.length;
switch (G__25424) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25422.length)].join('')));

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
var args25429 = [];
var len__17395__auto___25432 = arguments.length;
var i__17396__auto___25433 = (0);
while(true){
if((i__17396__auto___25433 < len__17395__auto___25432)){
args25429.push((arguments[i__17396__auto___25433]));

var G__25434 = (i__17396__auto___25433 + (1));
i__17396__auto___25433 = G__25434;
continue;
} else {
}
break;
}

var G__25431 = args25429.length;
switch (G__25431) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25429.length)].join('')));

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
var args25436 = [];
var len__17395__auto___25489 = arguments.length;
var i__17396__auto___25490 = (0);
while(true){
if((i__17396__auto___25490 < len__17395__auto___25489)){
args25436.push((arguments[i__17396__auto___25490]));

var G__25491 = (i__17396__auto___25490 + (1));
i__17396__auto___25490 = G__25491;
continue;
} else {
}
break;
}

var G__25438 = args25436.length;
switch (G__25438) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25436.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19856__auto___25493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___25493,tc,fc){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___25493,tc,fc){
return (function (state_25464){
var state_val_25465 = (state_25464[(1)]);
if((state_val_25465 === (7))){
var inst_25460 = (state_25464[(2)]);
var state_25464__$1 = state_25464;
var statearr_25466_25494 = state_25464__$1;
(statearr_25466_25494[(2)] = inst_25460);

(statearr_25466_25494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (1))){
var state_25464__$1 = state_25464;
var statearr_25467_25495 = state_25464__$1;
(statearr_25467_25495[(2)] = null);

(statearr_25467_25495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (4))){
var inst_25441 = (state_25464[(7)]);
var inst_25441__$1 = (state_25464[(2)]);
var inst_25442 = (inst_25441__$1 == null);
var state_25464__$1 = (function (){var statearr_25468 = state_25464;
(statearr_25468[(7)] = inst_25441__$1);

return statearr_25468;
})();
if(cljs.core.truth_(inst_25442)){
var statearr_25469_25496 = state_25464__$1;
(statearr_25469_25496[(1)] = (5));

} else {
var statearr_25470_25497 = state_25464__$1;
(statearr_25470_25497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (13))){
var state_25464__$1 = state_25464;
var statearr_25471_25498 = state_25464__$1;
(statearr_25471_25498[(2)] = null);

(statearr_25471_25498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (6))){
var inst_25441 = (state_25464[(7)]);
var inst_25447 = p.call(null,inst_25441);
var state_25464__$1 = state_25464;
if(cljs.core.truth_(inst_25447)){
var statearr_25472_25499 = state_25464__$1;
(statearr_25472_25499[(1)] = (9));

} else {
var statearr_25473_25500 = state_25464__$1;
(statearr_25473_25500[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (3))){
var inst_25462 = (state_25464[(2)]);
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25464__$1,inst_25462);
} else {
if((state_val_25465 === (12))){
var state_25464__$1 = state_25464;
var statearr_25474_25501 = state_25464__$1;
(statearr_25474_25501[(2)] = null);

(statearr_25474_25501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (2))){
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(4),ch);
} else {
if((state_val_25465 === (11))){
var inst_25441 = (state_25464[(7)]);
var inst_25451 = (state_25464[(2)]);
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25464__$1,(8),inst_25451,inst_25441);
} else {
if((state_val_25465 === (9))){
var state_25464__$1 = state_25464;
var statearr_25475_25502 = state_25464__$1;
(statearr_25475_25502[(2)] = tc);

(statearr_25475_25502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (5))){
var inst_25444 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25445 = cljs.core.async.close_BANG_.call(null,fc);
var state_25464__$1 = (function (){var statearr_25476 = state_25464;
(statearr_25476[(8)] = inst_25444);

return statearr_25476;
})();
var statearr_25477_25503 = state_25464__$1;
(statearr_25477_25503[(2)] = inst_25445);

(statearr_25477_25503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (14))){
var inst_25458 = (state_25464[(2)]);
var state_25464__$1 = state_25464;
var statearr_25478_25504 = state_25464__$1;
(statearr_25478_25504[(2)] = inst_25458);

(statearr_25478_25504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (10))){
var state_25464__$1 = state_25464;
var statearr_25479_25505 = state_25464__$1;
(statearr_25479_25505[(2)] = fc);

(statearr_25479_25505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (8))){
var inst_25453 = (state_25464[(2)]);
var state_25464__$1 = state_25464;
if(cljs.core.truth_(inst_25453)){
var statearr_25480_25506 = state_25464__$1;
(statearr_25480_25506[(1)] = (12));

} else {
var statearr_25481_25507 = state_25464__$1;
(statearr_25481_25507[(1)] = (13));

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
});})(c__19856__auto___25493,tc,fc))
;
return ((function (switch__19791__auto__,c__19856__auto___25493,tc,fc){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_25485 = [null,null,null,null,null,null,null,null,null];
(statearr_25485[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_25485[(1)] = (1));

return statearr_25485;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_25464){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25486){if((e25486 instanceof Object)){
var ex__19795__auto__ = e25486;
var statearr_25487_25508 = state_25464;
(statearr_25487_25508[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25509 = state_25464;
state_25464 = G__25509;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_25464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_25464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___25493,tc,fc))
})();
var state__19858__auto__ = (function (){var statearr_25488 = f__19857__auto__.call(null);
(statearr_25488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___25493);

return statearr_25488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___25493,tc,fc))
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
var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__){
return (function (state_25556){
var state_val_25557 = (state_25556[(1)]);
if((state_val_25557 === (1))){
var inst_25542 = init;
var state_25556__$1 = (function (){var statearr_25558 = state_25556;
(statearr_25558[(7)] = inst_25542);

return statearr_25558;
})();
var statearr_25559_25574 = state_25556__$1;
(statearr_25559_25574[(2)] = null);

(statearr_25559_25574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (2))){
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25556__$1,(4),ch);
} else {
if((state_val_25557 === (3))){
var inst_25554 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25556__$1,inst_25554);
} else {
if((state_val_25557 === (4))){
var inst_25545 = (state_25556[(8)]);
var inst_25545__$1 = (state_25556[(2)]);
var inst_25546 = (inst_25545__$1 == null);
var state_25556__$1 = (function (){var statearr_25560 = state_25556;
(statearr_25560[(8)] = inst_25545__$1);

return statearr_25560;
})();
if(cljs.core.truth_(inst_25546)){
var statearr_25561_25575 = state_25556__$1;
(statearr_25561_25575[(1)] = (5));

} else {
var statearr_25562_25576 = state_25556__$1;
(statearr_25562_25576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (5))){
var inst_25542 = (state_25556[(7)]);
var state_25556__$1 = state_25556;
var statearr_25563_25577 = state_25556__$1;
(statearr_25563_25577[(2)] = inst_25542);

(statearr_25563_25577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (6))){
var inst_25545 = (state_25556[(8)]);
var inst_25542 = (state_25556[(7)]);
var inst_25549 = f.call(null,inst_25542,inst_25545);
var inst_25542__$1 = inst_25549;
var state_25556__$1 = (function (){var statearr_25564 = state_25556;
(statearr_25564[(7)] = inst_25542__$1);

return statearr_25564;
})();
var statearr_25565_25578 = state_25556__$1;
(statearr_25565_25578[(2)] = null);

(statearr_25565_25578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (7))){
var inst_25552 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25566_25579 = state_25556__$1;
(statearr_25566_25579[(2)] = inst_25552);

(statearr_25566_25579[(1)] = (3));


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
});})(c__19856__auto__))
;
return ((function (switch__19791__auto__,c__19856__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19792__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19792__auto____0 = (function (){
var statearr_25570 = [null,null,null,null,null,null,null,null,null];
(statearr_25570[(0)] = cljs$core$async$reduce_$_state_machine__19792__auto__);

(statearr_25570[(1)] = (1));

return statearr_25570;
});
var cljs$core$async$reduce_$_state_machine__19792__auto____1 = (function (state_25556){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25571){if((e25571 instanceof Object)){
var ex__19795__auto__ = e25571;
var statearr_25572_25580 = state_25556;
(statearr_25572_25580[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25581 = state_25556;
state_25556 = G__25581;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19792__auto__ = function(state_25556){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19792__auto____1.call(this,state_25556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19792__auto____0;
cljs$core$async$reduce_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19792__auto____1;
return cljs$core$async$reduce_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__))
})();
var state__19858__auto__ = (function (){var statearr_25573 = f__19857__auto__.call(null);
(statearr_25573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_25573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__))
);

return c__19856__auto__;
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
var args25582 = [];
var len__17395__auto___25634 = arguments.length;
var i__17396__auto___25635 = (0);
while(true){
if((i__17396__auto___25635 < len__17395__auto___25634)){
args25582.push((arguments[i__17396__auto___25635]));

var G__25636 = (i__17396__auto___25635 + (1));
i__17396__auto___25635 = G__25636;
continue;
} else {
}
break;
}

var G__25584 = args25582.length;
switch (G__25584) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25582.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__){
return (function (state_25609){
var state_val_25610 = (state_25609[(1)]);
if((state_val_25610 === (7))){
var inst_25591 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
var statearr_25611_25638 = state_25609__$1;
(statearr_25611_25638[(2)] = inst_25591);

(statearr_25611_25638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (1))){
var inst_25585 = cljs.core.seq.call(null,coll);
var inst_25586 = inst_25585;
var state_25609__$1 = (function (){var statearr_25612 = state_25609;
(statearr_25612[(7)] = inst_25586);

return statearr_25612;
})();
var statearr_25613_25639 = state_25609__$1;
(statearr_25613_25639[(2)] = null);

(statearr_25613_25639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (4))){
var inst_25586 = (state_25609[(7)]);
var inst_25589 = cljs.core.first.call(null,inst_25586);
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25609__$1,(7),ch,inst_25589);
} else {
if((state_val_25610 === (13))){
var inst_25603 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
var statearr_25614_25640 = state_25609__$1;
(statearr_25614_25640[(2)] = inst_25603);

(statearr_25614_25640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (6))){
var inst_25594 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
if(cljs.core.truth_(inst_25594)){
var statearr_25615_25641 = state_25609__$1;
(statearr_25615_25641[(1)] = (8));

} else {
var statearr_25616_25642 = state_25609__$1;
(statearr_25616_25642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (3))){
var inst_25607 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25609__$1,inst_25607);
} else {
if((state_val_25610 === (12))){
var state_25609__$1 = state_25609;
var statearr_25617_25643 = state_25609__$1;
(statearr_25617_25643[(2)] = null);

(statearr_25617_25643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (2))){
var inst_25586 = (state_25609[(7)]);
var state_25609__$1 = state_25609;
if(cljs.core.truth_(inst_25586)){
var statearr_25618_25644 = state_25609__$1;
(statearr_25618_25644[(1)] = (4));

} else {
var statearr_25619_25645 = state_25609__$1;
(statearr_25619_25645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (11))){
var inst_25600 = cljs.core.async.close_BANG_.call(null,ch);
var state_25609__$1 = state_25609;
var statearr_25620_25646 = state_25609__$1;
(statearr_25620_25646[(2)] = inst_25600);

(statearr_25620_25646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (9))){
var state_25609__$1 = state_25609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25621_25647 = state_25609__$1;
(statearr_25621_25647[(1)] = (11));

} else {
var statearr_25622_25648 = state_25609__$1;
(statearr_25622_25648[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (5))){
var inst_25586 = (state_25609[(7)]);
var state_25609__$1 = state_25609;
var statearr_25623_25649 = state_25609__$1;
(statearr_25623_25649[(2)] = inst_25586);

(statearr_25623_25649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (10))){
var inst_25605 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
var statearr_25624_25650 = state_25609__$1;
(statearr_25624_25650[(2)] = inst_25605);

(statearr_25624_25650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (8))){
var inst_25586 = (state_25609[(7)]);
var inst_25596 = cljs.core.next.call(null,inst_25586);
var inst_25586__$1 = inst_25596;
var state_25609__$1 = (function (){var statearr_25625 = state_25609;
(statearr_25625[(7)] = inst_25586__$1);

return statearr_25625;
})();
var statearr_25626_25651 = state_25609__$1;
(statearr_25626_25651[(2)] = null);

(statearr_25626_25651[(1)] = (2));


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
});})(c__19856__auto__))
;
return ((function (switch__19791__auto__,c__19856__auto__){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_25630 = [null,null,null,null,null,null,null,null];
(statearr_25630[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_25630[(1)] = (1));

return statearr_25630;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_25609){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_25609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e25631){if((e25631 instanceof Object)){
var ex__19795__auto__ = e25631;
var statearr_25632_25652 = state_25609;
(statearr_25632_25652[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25653 = state_25609;
state_25609 = G__25653;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_25609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_25609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__))
})();
var state__19858__auto__ = (function (){var statearr_25633 = f__19857__auto__.call(null);
(statearr_25633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__))
);

return c__19856__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25875 = (function (mult,ch,cs,meta25876){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25876 = meta25876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25877,meta25876__$1){
var self__ = this;
var _25877__$1 = this;
return (new cljs.core.async.t_cljs$core$async25875(self__.mult,self__.ch,self__.cs,meta25876__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25877){
var self__ = this;
var _25877__$1 = this;
return self__.meta25876;
});})(cs))
;

cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25875.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25875.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25876","meta25876",1738286470,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25875";

cljs.core.async.t_cljs$core$async25875.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async25875");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25875 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25875(mult__$1,ch__$1,cs__$1,meta25876){
return (new cljs.core.async.t_cljs$core$async25875(mult__$1,ch__$1,cs__$1,meta25876));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25875(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19856__auto___26096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___26096,cs,m,dchan,dctr,done){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___26096,cs,m,dchan,dctr,done){
return (function (state_26008){
var state_val_26009 = (state_26008[(1)]);
if((state_val_26009 === (7))){
var inst_26004 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26010_26097 = state_26008__$1;
(statearr_26010_26097[(2)] = inst_26004);

(statearr_26010_26097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (20))){
var inst_25909 = (state_26008[(7)]);
var inst_25919 = cljs.core.first.call(null,inst_25909);
var inst_25920 = cljs.core.nth.call(null,inst_25919,(0),null);
var inst_25921 = cljs.core.nth.call(null,inst_25919,(1),null);
var state_26008__$1 = (function (){var statearr_26011 = state_26008;
(statearr_26011[(8)] = inst_25920);

return statearr_26011;
})();
if(cljs.core.truth_(inst_25921)){
var statearr_26012_26098 = state_26008__$1;
(statearr_26012_26098[(1)] = (22));

} else {
var statearr_26013_26099 = state_26008__$1;
(statearr_26013_26099[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (27))){
var inst_25880 = (state_26008[(9)]);
var inst_25956 = (state_26008[(10)]);
var inst_25951 = (state_26008[(11)]);
var inst_25949 = (state_26008[(12)]);
var inst_25956__$1 = cljs.core._nth.call(null,inst_25949,inst_25951);
var inst_25957 = cljs.core.async.put_BANG_.call(null,inst_25956__$1,inst_25880,done);
var state_26008__$1 = (function (){var statearr_26014 = state_26008;
(statearr_26014[(10)] = inst_25956__$1);

return statearr_26014;
})();
if(cljs.core.truth_(inst_25957)){
var statearr_26015_26100 = state_26008__$1;
(statearr_26015_26100[(1)] = (30));

} else {
var statearr_26016_26101 = state_26008__$1;
(statearr_26016_26101[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (1))){
var state_26008__$1 = state_26008;
var statearr_26017_26102 = state_26008__$1;
(statearr_26017_26102[(2)] = null);

(statearr_26017_26102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (24))){
var inst_25909 = (state_26008[(7)]);
var inst_25926 = (state_26008[(2)]);
var inst_25927 = cljs.core.next.call(null,inst_25909);
var inst_25889 = inst_25927;
var inst_25890 = null;
var inst_25891 = (0);
var inst_25892 = (0);
var state_26008__$1 = (function (){var statearr_26018 = state_26008;
(statearr_26018[(13)] = inst_25926);

(statearr_26018[(14)] = inst_25889);

(statearr_26018[(15)] = inst_25892);

(statearr_26018[(16)] = inst_25890);

(statearr_26018[(17)] = inst_25891);

return statearr_26018;
})();
var statearr_26019_26103 = state_26008__$1;
(statearr_26019_26103[(2)] = null);

(statearr_26019_26103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (39))){
var state_26008__$1 = state_26008;
var statearr_26023_26104 = state_26008__$1;
(statearr_26023_26104[(2)] = null);

(statearr_26023_26104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (4))){
var inst_25880 = (state_26008[(9)]);
var inst_25880__$1 = (state_26008[(2)]);
var inst_25881 = (inst_25880__$1 == null);
var state_26008__$1 = (function (){var statearr_26024 = state_26008;
(statearr_26024[(9)] = inst_25880__$1);

return statearr_26024;
})();
if(cljs.core.truth_(inst_25881)){
var statearr_26025_26105 = state_26008__$1;
(statearr_26025_26105[(1)] = (5));

} else {
var statearr_26026_26106 = state_26008__$1;
(statearr_26026_26106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (15))){
var inst_25889 = (state_26008[(14)]);
var inst_25892 = (state_26008[(15)]);
var inst_25890 = (state_26008[(16)]);
var inst_25891 = (state_26008[(17)]);
var inst_25905 = (state_26008[(2)]);
var inst_25906 = (inst_25892 + (1));
var tmp26020 = inst_25889;
var tmp26021 = inst_25890;
var tmp26022 = inst_25891;
var inst_25889__$1 = tmp26020;
var inst_25890__$1 = tmp26021;
var inst_25891__$1 = tmp26022;
var inst_25892__$1 = inst_25906;
var state_26008__$1 = (function (){var statearr_26027 = state_26008;
(statearr_26027[(14)] = inst_25889__$1);

(statearr_26027[(15)] = inst_25892__$1);

(statearr_26027[(18)] = inst_25905);

(statearr_26027[(16)] = inst_25890__$1);

(statearr_26027[(17)] = inst_25891__$1);

return statearr_26027;
})();
var statearr_26028_26107 = state_26008__$1;
(statearr_26028_26107[(2)] = null);

(statearr_26028_26107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (21))){
var inst_25930 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26032_26108 = state_26008__$1;
(statearr_26032_26108[(2)] = inst_25930);

(statearr_26032_26108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (31))){
var inst_25956 = (state_26008[(10)]);
var inst_25960 = done.call(null,null);
var inst_25961 = cljs.core.async.untap_STAR_.call(null,m,inst_25956);
var state_26008__$1 = (function (){var statearr_26033 = state_26008;
(statearr_26033[(19)] = inst_25960);

return statearr_26033;
})();
var statearr_26034_26109 = state_26008__$1;
(statearr_26034_26109[(2)] = inst_25961);

(statearr_26034_26109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (32))){
var inst_25948 = (state_26008[(20)]);
var inst_25951 = (state_26008[(11)]);
var inst_25949 = (state_26008[(12)]);
var inst_25950 = (state_26008[(21)]);
var inst_25963 = (state_26008[(2)]);
var inst_25964 = (inst_25951 + (1));
var tmp26029 = inst_25948;
var tmp26030 = inst_25949;
var tmp26031 = inst_25950;
var inst_25948__$1 = tmp26029;
var inst_25949__$1 = tmp26030;
var inst_25950__$1 = tmp26031;
var inst_25951__$1 = inst_25964;
var state_26008__$1 = (function (){var statearr_26035 = state_26008;
(statearr_26035[(20)] = inst_25948__$1);

(statearr_26035[(11)] = inst_25951__$1);

(statearr_26035[(22)] = inst_25963);

(statearr_26035[(12)] = inst_25949__$1);

(statearr_26035[(21)] = inst_25950__$1);

return statearr_26035;
})();
var statearr_26036_26110 = state_26008__$1;
(statearr_26036_26110[(2)] = null);

(statearr_26036_26110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (40))){
var inst_25976 = (state_26008[(23)]);
var inst_25980 = done.call(null,null);
var inst_25981 = cljs.core.async.untap_STAR_.call(null,m,inst_25976);
var state_26008__$1 = (function (){var statearr_26037 = state_26008;
(statearr_26037[(24)] = inst_25980);

return statearr_26037;
})();
var statearr_26038_26111 = state_26008__$1;
(statearr_26038_26111[(2)] = inst_25981);

(statearr_26038_26111[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (33))){
var inst_25967 = (state_26008[(25)]);
var inst_25969 = cljs.core.chunked_seq_QMARK_.call(null,inst_25967);
var state_26008__$1 = state_26008;
if(inst_25969){
var statearr_26039_26112 = state_26008__$1;
(statearr_26039_26112[(1)] = (36));

} else {
var statearr_26040_26113 = state_26008__$1;
(statearr_26040_26113[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (13))){
var inst_25899 = (state_26008[(26)]);
var inst_25902 = cljs.core.async.close_BANG_.call(null,inst_25899);
var state_26008__$1 = state_26008;
var statearr_26041_26114 = state_26008__$1;
(statearr_26041_26114[(2)] = inst_25902);

(statearr_26041_26114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (22))){
var inst_25920 = (state_26008[(8)]);
var inst_25923 = cljs.core.async.close_BANG_.call(null,inst_25920);
var state_26008__$1 = state_26008;
var statearr_26042_26115 = state_26008__$1;
(statearr_26042_26115[(2)] = inst_25923);

(statearr_26042_26115[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (36))){
var inst_25967 = (state_26008[(25)]);
var inst_25971 = cljs.core.chunk_first.call(null,inst_25967);
var inst_25972 = cljs.core.chunk_rest.call(null,inst_25967);
var inst_25973 = cljs.core.count.call(null,inst_25971);
var inst_25948 = inst_25972;
var inst_25949 = inst_25971;
var inst_25950 = inst_25973;
var inst_25951 = (0);
var state_26008__$1 = (function (){var statearr_26043 = state_26008;
(statearr_26043[(20)] = inst_25948);

(statearr_26043[(11)] = inst_25951);

(statearr_26043[(12)] = inst_25949);

(statearr_26043[(21)] = inst_25950);

return statearr_26043;
})();
var statearr_26044_26116 = state_26008__$1;
(statearr_26044_26116[(2)] = null);

(statearr_26044_26116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (41))){
var inst_25967 = (state_26008[(25)]);
var inst_25983 = (state_26008[(2)]);
var inst_25984 = cljs.core.next.call(null,inst_25967);
var inst_25948 = inst_25984;
var inst_25949 = null;
var inst_25950 = (0);
var inst_25951 = (0);
var state_26008__$1 = (function (){var statearr_26045 = state_26008;
(statearr_26045[(27)] = inst_25983);

(statearr_26045[(20)] = inst_25948);

(statearr_26045[(11)] = inst_25951);

(statearr_26045[(12)] = inst_25949);

(statearr_26045[(21)] = inst_25950);

return statearr_26045;
})();
var statearr_26046_26117 = state_26008__$1;
(statearr_26046_26117[(2)] = null);

(statearr_26046_26117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (43))){
var state_26008__$1 = state_26008;
var statearr_26047_26118 = state_26008__$1;
(statearr_26047_26118[(2)] = null);

(statearr_26047_26118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (29))){
var inst_25992 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26048_26119 = state_26008__$1;
(statearr_26048_26119[(2)] = inst_25992);

(statearr_26048_26119[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (44))){
var inst_26001 = (state_26008[(2)]);
var state_26008__$1 = (function (){var statearr_26049 = state_26008;
(statearr_26049[(28)] = inst_26001);

return statearr_26049;
})();
var statearr_26050_26120 = state_26008__$1;
(statearr_26050_26120[(2)] = null);

(statearr_26050_26120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (6))){
var inst_25940 = (state_26008[(29)]);
var inst_25939 = cljs.core.deref.call(null,cs);
var inst_25940__$1 = cljs.core.keys.call(null,inst_25939);
var inst_25941 = cljs.core.count.call(null,inst_25940__$1);
var inst_25942 = cljs.core.reset_BANG_.call(null,dctr,inst_25941);
var inst_25947 = cljs.core.seq.call(null,inst_25940__$1);
var inst_25948 = inst_25947;
var inst_25949 = null;
var inst_25950 = (0);
var inst_25951 = (0);
var state_26008__$1 = (function (){var statearr_26051 = state_26008;
(statearr_26051[(30)] = inst_25942);

(statearr_26051[(29)] = inst_25940__$1);

(statearr_26051[(20)] = inst_25948);

(statearr_26051[(11)] = inst_25951);

(statearr_26051[(12)] = inst_25949);

(statearr_26051[(21)] = inst_25950);

return statearr_26051;
})();
var statearr_26052_26121 = state_26008__$1;
(statearr_26052_26121[(2)] = null);

(statearr_26052_26121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (28))){
var inst_25948 = (state_26008[(20)]);
var inst_25967 = (state_26008[(25)]);
var inst_25967__$1 = cljs.core.seq.call(null,inst_25948);
var state_26008__$1 = (function (){var statearr_26053 = state_26008;
(statearr_26053[(25)] = inst_25967__$1);

return statearr_26053;
})();
if(inst_25967__$1){
var statearr_26054_26122 = state_26008__$1;
(statearr_26054_26122[(1)] = (33));

} else {
var statearr_26055_26123 = state_26008__$1;
(statearr_26055_26123[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (25))){
var inst_25951 = (state_26008[(11)]);
var inst_25950 = (state_26008[(21)]);
var inst_25953 = (inst_25951 < inst_25950);
var inst_25954 = inst_25953;
var state_26008__$1 = state_26008;
if(cljs.core.truth_(inst_25954)){
var statearr_26056_26124 = state_26008__$1;
(statearr_26056_26124[(1)] = (27));

} else {
var statearr_26057_26125 = state_26008__$1;
(statearr_26057_26125[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (34))){
var state_26008__$1 = state_26008;
var statearr_26058_26126 = state_26008__$1;
(statearr_26058_26126[(2)] = null);

(statearr_26058_26126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (17))){
var state_26008__$1 = state_26008;
var statearr_26059_26127 = state_26008__$1;
(statearr_26059_26127[(2)] = null);

(statearr_26059_26127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (3))){
var inst_26006 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26008__$1,inst_26006);
} else {
if((state_val_26009 === (12))){
var inst_25935 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26060_26128 = state_26008__$1;
(statearr_26060_26128[(2)] = inst_25935);

(statearr_26060_26128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (2))){
var state_26008__$1 = state_26008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26008__$1,(4),ch);
} else {
if((state_val_26009 === (23))){
var state_26008__$1 = state_26008;
var statearr_26061_26129 = state_26008__$1;
(statearr_26061_26129[(2)] = null);

(statearr_26061_26129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (35))){
var inst_25990 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26062_26130 = state_26008__$1;
(statearr_26062_26130[(2)] = inst_25990);

(statearr_26062_26130[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (19))){
var inst_25909 = (state_26008[(7)]);
var inst_25913 = cljs.core.chunk_first.call(null,inst_25909);
var inst_25914 = cljs.core.chunk_rest.call(null,inst_25909);
var inst_25915 = cljs.core.count.call(null,inst_25913);
var inst_25889 = inst_25914;
var inst_25890 = inst_25913;
var inst_25891 = inst_25915;
var inst_25892 = (0);
var state_26008__$1 = (function (){var statearr_26063 = state_26008;
(statearr_26063[(14)] = inst_25889);

(statearr_26063[(15)] = inst_25892);

(statearr_26063[(16)] = inst_25890);

(statearr_26063[(17)] = inst_25891);

return statearr_26063;
})();
var statearr_26064_26131 = state_26008__$1;
(statearr_26064_26131[(2)] = null);

(statearr_26064_26131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (11))){
var inst_25889 = (state_26008[(14)]);
var inst_25909 = (state_26008[(7)]);
var inst_25909__$1 = cljs.core.seq.call(null,inst_25889);
var state_26008__$1 = (function (){var statearr_26065 = state_26008;
(statearr_26065[(7)] = inst_25909__$1);

return statearr_26065;
})();
if(inst_25909__$1){
var statearr_26066_26132 = state_26008__$1;
(statearr_26066_26132[(1)] = (16));

} else {
var statearr_26067_26133 = state_26008__$1;
(statearr_26067_26133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (9))){
var inst_25937 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26068_26134 = state_26008__$1;
(statearr_26068_26134[(2)] = inst_25937);

(statearr_26068_26134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (5))){
var inst_25887 = cljs.core.deref.call(null,cs);
var inst_25888 = cljs.core.seq.call(null,inst_25887);
var inst_25889 = inst_25888;
var inst_25890 = null;
var inst_25891 = (0);
var inst_25892 = (0);
var state_26008__$1 = (function (){var statearr_26069 = state_26008;
(statearr_26069[(14)] = inst_25889);

(statearr_26069[(15)] = inst_25892);

(statearr_26069[(16)] = inst_25890);

(statearr_26069[(17)] = inst_25891);

return statearr_26069;
})();
var statearr_26070_26135 = state_26008__$1;
(statearr_26070_26135[(2)] = null);

(statearr_26070_26135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (14))){
var state_26008__$1 = state_26008;
var statearr_26071_26136 = state_26008__$1;
(statearr_26071_26136[(2)] = null);

(statearr_26071_26136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (45))){
var inst_25998 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26072_26137 = state_26008__$1;
(statearr_26072_26137[(2)] = inst_25998);

(statearr_26072_26137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (26))){
var inst_25940 = (state_26008[(29)]);
var inst_25994 = (state_26008[(2)]);
var inst_25995 = cljs.core.seq.call(null,inst_25940);
var state_26008__$1 = (function (){var statearr_26073 = state_26008;
(statearr_26073[(31)] = inst_25994);

return statearr_26073;
})();
if(inst_25995){
var statearr_26074_26138 = state_26008__$1;
(statearr_26074_26138[(1)] = (42));

} else {
var statearr_26075_26139 = state_26008__$1;
(statearr_26075_26139[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (16))){
var inst_25909 = (state_26008[(7)]);
var inst_25911 = cljs.core.chunked_seq_QMARK_.call(null,inst_25909);
var state_26008__$1 = state_26008;
if(inst_25911){
var statearr_26076_26140 = state_26008__$1;
(statearr_26076_26140[(1)] = (19));

} else {
var statearr_26077_26141 = state_26008__$1;
(statearr_26077_26141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (38))){
var inst_25987 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26078_26142 = state_26008__$1;
(statearr_26078_26142[(2)] = inst_25987);

(statearr_26078_26142[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (30))){
var state_26008__$1 = state_26008;
var statearr_26079_26143 = state_26008__$1;
(statearr_26079_26143[(2)] = null);

(statearr_26079_26143[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (10))){
var inst_25892 = (state_26008[(15)]);
var inst_25890 = (state_26008[(16)]);
var inst_25898 = cljs.core._nth.call(null,inst_25890,inst_25892);
var inst_25899 = cljs.core.nth.call(null,inst_25898,(0),null);
var inst_25900 = cljs.core.nth.call(null,inst_25898,(1),null);
var state_26008__$1 = (function (){var statearr_26080 = state_26008;
(statearr_26080[(26)] = inst_25899);

return statearr_26080;
})();
if(cljs.core.truth_(inst_25900)){
var statearr_26081_26144 = state_26008__$1;
(statearr_26081_26144[(1)] = (13));

} else {
var statearr_26082_26145 = state_26008__$1;
(statearr_26082_26145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (18))){
var inst_25933 = (state_26008[(2)]);
var state_26008__$1 = state_26008;
var statearr_26083_26146 = state_26008__$1;
(statearr_26083_26146[(2)] = inst_25933);

(statearr_26083_26146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (42))){
var state_26008__$1 = state_26008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26008__$1,(45),dchan);
} else {
if((state_val_26009 === (37))){
var inst_25976 = (state_26008[(23)]);
var inst_25880 = (state_26008[(9)]);
var inst_25967 = (state_26008[(25)]);
var inst_25976__$1 = cljs.core.first.call(null,inst_25967);
var inst_25977 = cljs.core.async.put_BANG_.call(null,inst_25976__$1,inst_25880,done);
var state_26008__$1 = (function (){var statearr_26084 = state_26008;
(statearr_26084[(23)] = inst_25976__$1);

return statearr_26084;
})();
if(cljs.core.truth_(inst_25977)){
var statearr_26085_26147 = state_26008__$1;
(statearr_26085_26147[(1)] = (39));

} else {
var statearr_26086_26148 = state_26008__$1;
(statearr_26086_26148[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26009 === (8))){
var inst_25892 = (state_26008[(15)]);
var inst_25891 = (state_26008[(17)]);
var inst_25894 = (inst_25892 < inst_25891);
var inst_25895 = inst_25894;
var state_26008__$1 = state_26008;
if(cljs.core.truth_(inst_25895)){
var statearr_26087_26149 = state_26008__$1;
(statearr_26087_26149[(1)] = (10));

} else {
var statearr_26088_26150 = state_26008__$1;
(statearr_26088_26150[(1)] = (11));

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
});})(c__19856__auto___26096,cs,m,dchan,dctr,done))
;
return ((function (switch__19791__auto__,c__19856__auto___26096,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19792__auto__ = null;
var cljs$core$async$mult_$_state_machine__19792__auto____0 = (function (){
var statearr_26092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26092[(0)] = cljs$core$async$mult_$_state_machine__19792__auto__);

(statearr_26092[(1)] = (1));

return statearr_26092;
});
var cljs$core$async$mult_$_state_machine__19792__auto____1 = (function (state_26008){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_26008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e26093){if((e26093 instanceof Object)){
var ex__19795__auto__ = e26093;
var statearr_26094_26151 = state_26008;
(statearr_26094_26151[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26152 = state_26008;
state_26008 = G__26152;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19792__auto__ = function(state_26008){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19792__auto____1.call(this,state_26008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19792__auto____0;
cljs$core$async$mult_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19792__auto____1;
return cljs$core$async$mult_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___26096,cs,m,dchan,dctr,done))
})();
var state__19858__auto__ = (function (){var statearr_26095 = f__19857__auto__.call(null);
(statearr_26095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___26096);

return statearr_26095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___26096,cs,m,dchan,dctr,done))
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
var args26153 = [];
var len__17395__auto___26156 = arguments.length;
var i__17396__auto___26157 = (0);
while(true){
if((i__17396__auto___26157 < len__17395__auto___26156)){
args26153.push((arguments[i__17396__auto___26157]));

var G__26158 = (i__17396__auto___26157 + (1));
i__17396__auto___26157 = G__26158;
continue;
} else {
}
break;
}

var G__26155 = args26153.length;
switch (G__26155) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26153.length)].join('')));

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
var len__17395__auto___26170 = arguments.length;
var i__17396__auto___26171 = (0);
while(true){
if((i__17396__auto___26171 < len__17395__auto___26170)){
args__17402__auto__.push((arguments[i__17396__auto___26171]));

var G__26172 = (i__17396__auto___26171 + (1));
i__17396__auto___26171 = G__26172;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((3) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17403__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26164){
var map__26165 = p__26164;
var map__26165__$1 = ((((!((map__26165 == null)))?((((map__26165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26165):map__26165);
var opts = map__26165__$1;
var statearr_26167_26173 = state;
(statearr_26167_26173[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26165,map__26165__$1,opts){
return (function (val){
var statearr_26168_26174 = state;
(statearr_26168_26174[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26165,map__26165__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26169_26175 = state;
(statearr_26169_26175[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26160){
var G__26161 = cljs.core.first.call(null,seq26160);
var seq26160__$1 = cljs.core.next.call(null,seq26160);
var G__26162 = cljs.core.first.call(null,seq26160__$1);
var seq26160__$2 = cljs.core.next.call(null,seq26160__$1);
var G__26163 = cljs.core.first.call(null,seq26160__$2);
var seq26160__$3 = cljs.core.next.call(null,seq26160__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26161,G__26162,G__26163,seq26160__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26339 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26340){
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
this.meta26340 = meta26340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26341,meta26340__$1){
var self__ = this;
var _26341__$1 = this;
return (new cljs.core.async.t_cljs$core$async26339(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26340__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26341){
var self__ = this;
var _26341__$1 = this;
return self__.meta26340;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26339.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26340","meta26340",-655137329,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26339";

cljs.core.async.t_cljs$core$async26339.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26339");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26339 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26339(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26340){
return (new cljs.core.async.t_cljs$core$async26339(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26340));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26339(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19856__auto___26502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___26502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___26502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26439){
var state_val_26440 = (state_26439[(1)]);
if((state_val_26440 === (7))){
var inst_26357 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26441_26503 = state_26439__$1;
(statearr_26441_26503[(2)] = inst_26357);

(statearr_26441_26503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (20))){
var inst_26369 = (state_26439[(7)]);
var state_26439__$1 = state_26439;
var statearr_26442_26504 = state_26439__$1;
(statearr_26442_26504[(2)] = inst_26369);

(statearr_26442_26504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (27))){
var state_26439__$1 = state_26439;
var statearr_26443_26505 = state_26439__$1;
(statearr_26443_26505[(2)] = null);

(statearr_26443_26505[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (1))){
var inst_26345 = (state_26439[(8)]);
var inst_26345__$1 = calc_state.call(null);
var inst_26347 = (inst_26345__$1 == null);
var inst_26348 = cljs.core.not.call(null,inst_26347);
var state_26439__$1 = (function (){var statearr_26444 = state_26439;
(statearr_26444[(8)] = inst_26345__$1);

return statearr_26444;
})();
if(inst_26348){
var statearr_26445_26506 = state_26439__$1;
(statearr_26445_26506[(1)] = (2));

} else {
var statearr_26446_26507 = state_26439__$1;
(statearr_26446_26507[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (24))){
var inst_26399 = (state_26439[(9)]);
var inst_26413 = (state_26439[(10)]);
var inst_26392 = (state_26439[(11)]);
var inst_26413__$1 = inst_26392.call(null,inst_26399);
var state_26439__$1 = (function (){var statearr_26447 = state_26439;
(statearr_26447[(10)] = inst_26413__$1);

return statearr_26447;
})();
if(cljs.core.truth_(inst_26413__$1)){
var statearr_26448_26508 = state_26439__$1;
(statearr_26448_26508[(1)] = (29));

} else {
var statearr_26449_26509 = state_26439__$1;
(statearr_26449_26509[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (4))){
var inst_26360 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26360)){
var statearr_26450_26510 = state_26439__$1;
(statearr_26450_26510[(1)] = (8));

} else {
var statearr_26451_26511 = state_26439__$1;
(statearr_26451_26511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (15))){
var inst_26386 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26386)){
var statearr_26452_26512 = state_26439__$1;
(statearr_26452_26512[(1)] = (19));

} else {
var statearr_26453_26513 = state_26439__$1;
(statearr_26453_26513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (21))){
var inst_26391 = (state_26439[(12)]);
var inst_26391__$1 = (state_26439[(2)]);
var inst_26392 = cljs.core.get.call(null,inst_26391__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26393 = cljs.core.get.call(null,inst_26391__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26394 = cljs.core.get.call(null,inst_26391__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26439__$1 = (function (){var statearr_26454 = state_26439;
(statearr_26454[(12)] = inst_26391__$1);

(statearr_26454[(13)] = inst_26393);

(statearr_26454[(11)] = inst_26392);

return statearr_26454;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26439__$1,(22),inst_26394);
} else {
if((state_val_26440 === (31))){
var inst_26421 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26421)){
var statearr_26455_26514 = state_26439__$1;
(statearr_26455_26514[(1)] = (32));

} else {
var statearr_26456_26515 = state_26439__$1;
(statearr_26456_26515[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (32))){
var inst_26398 = (state_26439[(14)]);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26439__$1,(35),out,inst_26398);
} else {
if((state_val_26440 === (33))){
var inst_26391 = (state_26439[(12)]);
var inst_26369 = inst_26391;
var state_26439__$1 = (function (){var statearr_26457 = state_26439;
(statearr_26457[(7)] = inst_26369);

return statearr_26457;
})();
var statearr_26458_26516 = state_26439__$1;
(statearr_26458_26516[(2)] = null);

(statearr_26458_26516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (13))){
var inst_26369 = (state_26439[(7)]);
var inst_26376 = inst_26369.cljs$lang$protocol_mask$partition0$;
var inst_26377 = (inst_26376 & (64));
var inst_26378 = inst_26369.cljs$core$ISeq$;
var inst_26379 = (inst_26377) || (inst_26378);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26379)){
var statearr_26459_26517 = state_26439__$1;
(statearr_26459_26517[(1)] = (16));

} else {
var statearr_26460_26518 = state_26439__$1;
(statearr_26460_26518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (22))){
var inst_26398 = (state_26439[(14)]);
var inst_26399 = (state_26439[(9)]);
var inst_26397 = (state_26439[(2)]);
var inst_26398__$1 = cljs.core.nth.call(null,inst_26397,(0),null);
var inst_26399__$1 = cljs.core.nth.call(null,inst_26397,(1),null);
var inst_26400 = (inst_26398__$1 == null);
var inst_26401 = cljs.core._EQ_.call(null,inst_26399__$1,change);
var inst_26402 = (inst_26400) || (inst_26401);
var state_26439__$1 = (function (){var statearr_26461 = state_26439;
(statearr_26461[(14)] = inst_26398__$1);

(statearr_26461[(9)] = inst_26399__$1);

return statearr_26461;
})();
if(cljs.core.truth_(inst_26402)){
var statearr_26462_26519 = state_26439__$1;
(statearr_26462_26519[(1)] = (23));

} else {
var statearr_26463_26520 = state_26439__$1;
(statearr_26463_26520[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (36))){
var inst_26391 = (state_26439[(12)]);
var inst_26369 = inst_26391;
var state_26439__$1 = (function (){var statearr_26464 = state_26439;
(statearr_26464[(7)] = inst_26369);

return statearr_26464;
})();
var statearr_26465_26521 = state_26439__$1;
(statearr_26465_26521[(2)] = null);

(statearr_26465_26521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (29))){
var inst_26413 = (state_26439[(10)]);
var state_26439__$1 = state_26439;
var statearr_26466_26522 = state_26439__$1;
(statearr_26466_26522[(2)] = inst_26413);

(statearr_26466_26522[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (6))){
var state_26439__$1 = state_26439;
var statearr_26467_26523 = state_26439__$1;
(statearr_26467_26523[(2)] = false);

(statearr_26467_26523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (28))){
var inst_26409 = (state_26439[(2)]);
var inst_26410 = calc_state.call(null);
var inst_26369 = inst_26410;
var state_26439__$1 = (function (){var statearr_26468 = state_26439;
(statearr_26468[(15)] = inst_26409);

(statearr_26468[(7)] = inst_26369);

return statearr_26468;
})();
var statearr_26469_26524 = state_26439__$1;
(statearr_26469_26524[(2)] = null);

(statearr_26469_26524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (25))){
var inst_26435 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26470_26525 = state_26439__$1;
(statearr_26470_26525[(2)] = inst_26435);

(statearr_26470_26525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (34))){
var inst_26433 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26471_26526 = state_26439__$1;
(statearr_26471_26526[(2)] = inst_26433);

(statearr_26471_26526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (17))){
var state_26439__$1 = state_26439;
var statearr_26472_26527 = state_26439__$1;
(statearr_26472_26527[(2)] = false);

(statearr_26472_26527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (3))){
var state_26439__$1 = state_26439;
var statearr_26473_26528 = state_26439__$1;
(statearr_26473_26528[(2)] = false);

(statearr_26473_26528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (12))){
var inst_26437 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26439__$1,inst_26437);
} else {
if((state_val_26440 === (2))){
var inst_26345 = (state_26439[(8)]);
var inst_26350 = inst_26345.cljs$lang$protocol_mask$partition0$;
var inst_26351 = (inst_26350 & (64));
var inst_26352 = inst_26345.cljs$core$ISeq$;
var inst_26353 = (inst_26351) || (inst_26352);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26353)){
var statearr_26474_26529 = state_26439__$1;
(statearr_26474_26529[(1)] = (5));

} else {
var statearr_26475_26530 = state_26439__$1;
(statearr_26475_26530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (23))){
var inst_26398 = (state_26439[(14)]);
var inst_26404 = (inst_26398 == null);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26404)){
var statearr_26476_26531 = state_26439__$1;
(statearr_26476_26531[(1)] = (26));

} else {
var statearr_26477_26532 = state_26439__$1;
(statearr_26477_26532[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (35))){
var inst_26424 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26424)){
var statearr_26478_26533 = state_26439__$1;
(statearr_26478_26533[(1)] = (36));

} else {
var statearr_26479_26534 = state_26439__$1;
(statearr_26479_26534[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (19))){
var inst_26369 = (state_26439[(7)]);
var inst_26388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26369);
var state_26439__$1 = state_26439;
var statearr_26480_26535 = state_26439__$1;
(statearr_26480_26535[(2)] = inst_26388);

(statearr_26480_26535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (11))){
var inst_26369 = (state_26439[(7)]);
var inst_26373 = (inst_26369 == null);
var inst_26374 = cljs.core.not.call(null,inst_26373);
var state_26439__$1 = state_26439;
if(inst_26374){
var statearr_26481_26536 = state_26439__$1;
(statearr_26481_26536[(1)] = (13));

} else {
var statearr_26482_26537 = state_26439__$1;
(statearr_26482_26537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (9))){
var inst_26345 = (state_26439[(8)]);
var state_26439__$1 = state_26439;
var statearr_26483_26538 = state_26439__$1;
(statearr_26483_26538[(2)] = inst_26345);

(statearr_26483_26538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (5))){
var state_26439__$1 = state_26439;
var statearr_26484_26539 = state_26439__$1;
(statearr_26484_26539[(2)] = true);

(statearr_26484_26539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (14))){
var state_26439__$1 = state_26439;
var statearr_26485_26540 = state_26439__$1;
(statearr_26485_26540[(2)] = false);

(statearr_26485_26540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (26))){
var inst_26399 = (state_26439[(9)]);
var inst_26406 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26399);
var state_26439__$1 = state_26439;
var statearr_26486_26541 = state_26439__$1;
(statearr_26486_26541[(2)] = inst_26406);

(statearr_26486_26541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (16))){
var state_26439__$1 = state_26439;
var statearr_26487_26542 = state_26439__$1;
(statearr_26487_26542[(2)] = true);

(statearr_26487_26542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (38))){
var inst_26429 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26488_26543 = state_26439__$1;
(statearr_26488_26543[(2)] = inst_26429);

(statearr_26488_26543[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (30))){
var inst_26399 = (state_26439[(9)]);
var inst_26393 = (state_26439[(13)]);
var inst_26392 = (state_26439[(11)]);
var inst_26416 = cljs.core.empty_QMARK_.call(null,inst_26392);
var inst_26417 = inst_26393.call(null,inst_26399);
var inst_26418 = cljs.core.not.call(null,inst_26417);
var inst_26419 = (inst_26416) && (inst_26418);
var state_26439__$1 = state_26439;
var statearr_26489_26544 = state_26439__$1;
(statearr_26489_26544[(2)] = inst_26419);

(statearr_26489_26544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (10))){
var inst_26345 = (state_26439[(8)]);
var inst_26365 = (state_26439[(2)]);
var inst_26366 = cljs.core.get.call(null,inst_26365,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26367 = cljs.core.get.call(null,inst_26365,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26368 = cljs.core.get.call(null,inst_26365,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26369 = inst_26345;
var state_26439__$1 = (function (){var statearr_26490 = state_26439;
(statearr_26490[(16)] = inst_26367);

(statearr_26490[(17)] = inst_26366);

(statearr_26490[(18)] = inst_26368);

(statearr_26490[(7)] = inst_26369);

return statearr_26490;
})();
var statearr_26491_26545 = state_26439__$1;
(statearr_26491_26545[(2)] = null);

(statearr_26491_26545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (18))){
var inst_26383 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26492_26546 = state_26439__$1;
(statearr_26492_26546[(2)] = inst_26383);

(statearr_26492_26546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (37))){
var state_26439__$1 = state_26439;
var statearr_26493_26547 = state_26439__$1;
(statearr_26493_26547[(2)] = null);

(statearr_26493_26547[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (8))){
var inst_26345 = (state_26439[(8)]);
var inst_26362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26345);
var state_26439__$1 = state_26439;
var statearr_26494_26548 = state_26439__$1;
(statearr_26494_26548[(2)] = inst_26362);

(statearr_26494_26548[(1)] = (10));


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
});})(c__19856__auto___26502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19791__auto__,c__19856__auto___26502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19792__auto__ = null;
var cljs$core$async$mix_$_state_machine__19792__auto____0 = (function (){
var statearr_26498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26498[(0)] = cljs$core$async$mix_$_state_machine__19792__auto__);

(statearr_26498[(1)] = (1));

return statearr_26498;
});
var cljs$core$async$mix_$_state_machine__19792__auto____1 = (function (state_26439){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_26439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e26499){if((e26499 instanceof Object)){
var ex__19795__auto__ = e26499;
var statearr_26500_26549 = state_26439;
(statearr_26500_26549[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26550 = state_26439;
state_26439 = G__26550;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19792__auto__ = function(state_26439){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19792__auto____1.call(this,state_26439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19792__auto____0;
cljs$core$async$mix_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19792__auto____1;
return cljs$core$async$mix_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___26502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19858__auto__ = (function (){var statearr_26501 = f__19857__auto__.call(null);
(statearr_26501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___26502);

return statearr_26501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___26502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26551 = [];
var len__17395__auto___26554 = arguments.length;
var i__17396__auto___26555 = (0);
while(true){
if((i__17396__auto___26555 < len__17395__auto___26554)){
args26551.push((arguments[i__17396__auto___26555]));

var G__26556 = (i__17396__auto___26555 + (1));
i__17396__auto___26555 = G__26556;
continue;
} else {
}
break;
}

var G__26553 = args26551.length;
switch (G__26553) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26551.length)].join('')));

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
var args26559 = [];
var len__17395__auto___26684 = arguments.length;
var i__17396__auto___26685 = (0);
while(true){
if((i__17396__auto___26685 < len__17395__auto___26684)){
args26559.push((arguments[i__17396__auto___26685]));

var G__26686 = (i__17396__auto___26685 + (1));
i__17396__auto___26685 = G__26686;
continue;
} else {
}
break;
}

var G__26561 = args26559.length;
switch (G__26561) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26559.length)].join('')));

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
return (function (p1__26558_SHARP_){
if(cljs.core.truth_(p1__26558_SHARP_.call(null,topic))){
return p1__26558_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26558_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16337__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26562 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26563){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26563 = meta26563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26564,meta26563__$1){
var self__ = this;
var _26564__$1 = this;
return (new cljs.core.async.t_cljs$core$async26562(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26563__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26564){
var self__ = this;
var _26564__$1 = this;
return self__.meta26563;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26562.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26563","meta26563",1340269502,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26562";

cljs.core.async.t_cljs$core$async26562.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26562");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26562 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26562(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26563){
return (new cljs.core.async.t_cljs$core$async26562(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26563));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26562(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19856__auto___26688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___26688,mults,ensure_mult,p){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___26688,mults,ensure_mult,p){
return (function (state_26636){
var state_val_26637 = (state_26636[(1)]);
if((state_val_26637 === (7))){
var inst_26632 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26638_26689 = state_26636__$1;
(statearr_26638_26689[(2)] = inst_26632);

(statearr_26638_26689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (20))){
var state_26636__$1 = state_26636;
var statearr_26639_26690 = state_26636__$1;
(statearr_26639_26690[(2)] = null);

(statearr_26639_26690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (1))){
var state_26636__$1 = state_26636;
var statearr_26640_26691 = state_26636__$1;
(statearr_26640_26691[(2)] = null);

(statearr_26640_26691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (24))){
var inst_26615 = (state_26636[(7)]);
var inst_26624 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26615);
var state_26636__$1 = state_26636;
var statearr_26641_26692 = state_26636__$1;
(statearr_26641_26692[(2)] = inst_26624);

(statearr_26641_26692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (4))){
var inst_26567 = (state_26636[(8)]);
var inst_26567__$1 = (state_26636[(2)]);
var inst_26568 = (inst_26567__$1 == null);
var state_26636__$1 = (function (){var statearr_26642 = state_26636;
(statearr_26642[(8)] = inst_26567__$1);

return statearr_26642;
})();
if(cljs.core.truth_(inst_26568)){
var statearr_26643_26693 = state_26636__$1;
(statearr_26643_26693[(1)] = (5));

} else {
var statearr_26644_26694 = state_26636__$1;
(statearr_26644_26694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (15))){
var inst_26609 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26645_26695 = state_26636__$1;
(statearr_26645_26695[(2)] = inst_26609);

(statearr_26645_26695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (21))){
var inst_26629 = (state_26636[(2)]);
var state_26636__$1 = (function (){var statearr_26646 = state_26636;
(statearr_26646[(9)] = inst_26629);

return statearr_26646;
})();
var statearr_26647_26696 = state_26636__$1;
(statearr_26647_26696[(2)] = null);

(statearr_26647_26696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (13))){
var inst_26591 = (state_26636[(10)]);
var inst_26593 = cljs.core.chunked_seq_QMARK_.call(null,inst_26591);
var state_26636__$1 = state_26636;
if(inst_26593){
var statearr_26648_26697 = state_26636__$1;
(statearr_26648_26697[(1)] = (16));

} else {
var statearr_26649_26698 = state_26636__$1;
(statearr_26649_26698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (22))){
var inst_26621 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
if(cljs.core.truth_(inst_26621)){
var statearr_26650_26699 = state_26636__$1;
(statearr_26650_26699[(1)] = (23));

} else {
var statearr_26651_26700 = state_26636__$1;
(statearr_26651_26700[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (6))){
var inst_26567 = (state_26636[(8)]);
var inst_26615 = (state_26636[(7)]);
var inst_26617 = (state_26636[(11)]);
var inst_26615__$1 = topic_fn.call(null,inst_26567);
var inst_26616 = cljs.core.deref.call(null,mults);
var inst_26617__$1 = cljs.core.get.call(null,inst_26616,inst_26615__$1);
var state_26636__$1 = (function (){var statearr_26652 = state_26636;
(statearr_26652[(7)] = inst_26615__$1);

(statearr_26652[(11)] = inst_26617__$1);

return statearr_26652;
})();
if(cljs.core.truth_(inst_26617__$1)){
var statearr_26653_26701 = state_26636__$1;
(statearr_26653_26701[(1)] = (19));

} else {
var statearr_26654_26702 = state_26636__$1;
(statearr_26654_26702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (25))){
var inst_26626 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26655_26703 = state_26636__$1;
(statearr_26655_26703[(2)] = inst_26626);

(statearr_26655_26703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (17))){
var inst_26591 = (state_26636[(10)]);
var inst_26600 = cljs.core.first.call(null,inst_26591);
var inst_26601 = cljs.core.async.muxch_STAR_.call(null,inst_26600);
var inst_26602 = cljs.core.async.close_BANG_.call(null,inst_26601);
var inst_26603 = cljs.core.next.call(null,inst_26591);
var inst_26577 = inst_26603;
var inst_26578 = null;
var inst_26579 = (0);
var inst_26580 = (0);
var state_26636__$1 = (function (){var statearr_26656 = state_26636;
(statearr_26656[(12)] = inst_26602);

(statearr_26656[(13)] = inst_26580);

(statearr_26656[(14)] = inst_26577);

(statearr_26656[(15)] = inst_26579);

(statearr_26656[(16)] = inst_26578);

return statearr_26656;
})();
var statearr_26657_26704 = state_26636__$1;
(statearr_26657_26704[(2)] = null);

(statearr_26657_26704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (3))){
var inst_26634 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26636__$1,inst_26634);
} else {
if((state_val_26637 === (12))){
var inst_26611 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26658_26705 = state_26636__$1;
(statearr_26658_26705[(2)] = inst_26611);

(statearr_26658_26705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (2))){
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26636__$1,(4),ch);
} else {
if((state_val_26637 === (23))){
var state_26636__$1 = state_26636;
var statearr_26659_26706 = state_26636__$1;
(statearr_26659_26706[(2)] = null);

(statearr_26659_26706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (19))){
var inst_26567 = (state_26636[(8)]);
var inst_26617 = (state_26636[(11)]);
var inst_26619 = cljs.core.async.muxch_STAR_.call(null,inst_26617);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26636__$1,(22),inst_26619,inst_26567);
} else {
if((state_val_26637 === (11))){
var inst_26577 = (state_26636[(14)]);
var inst_26591 = (state_26636[(10)]);
var inst_26591__$1 = cljs.core.seq.call(null,inst_26577);
var state_26636__$1 = (function (){var statearr_26660 = state_26636;
(statearr_26660[(10)] = inst_26591__$1);

return statearr_26660;
})();
if(inst_26591__$1){
var statearr_26661_26707 = state_26636__$1;
(statearr_26661_26707[(1)] = (13));

} else {
var statearr_26662_26708 = state_26636__$1;
(statearr_26662_26708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (9))){
var inst_26613 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26663_26709 = state_26636__$1;
(statearr_26663_26709[(2)] = inst_26613);

(statearr_26663_26709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (5))){
var inst_26574 = cljs.core.deref.call(null,mults);
var inst_26575 = cljs.core.vals.call(null,inst_26574);
var inst_26576 = cljs.core.seq.call(null,inst_26575);
var inst_26577 = inst_26576;
var inst_26578 = null;
var inst_26579 = (0);
var inst_26580 = (0);
var state_26636__$1 = (function (){var statearr_26664 = state_26636;
(statearr_26664[(13)] = inst_26580);

(statearr_26664[(14)] = inst_26577);

(statearr_26664[(15)] = inst_26579);

(statearr_26664[(16)] = inst_26578);

return statearr_26664;
})();
var statearr_26665_26710 = state_26636__$1;
(statearr_26665_26710[(2)] = null);

(statearr_26665_26710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (14))){
var state_26636__$1 = state_26636;
var statearr_26669_26711 = state_26636__$1;
(statearr_26669_26711[(2)] = null);

(statearr_26669_26711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (16))){
var inst_26591 = (state_26636[(10)]);
var inst_26595 = cljs.core.chunk_first.call(null,inst_26591);
var inst_26596 = cljs.core.chunk_rest.call(null,inst_26591);
var inst_26597 = cljs.core.count.call(null,inst_26595);
var inst_26577 = inst_26596;
var inst_26578 = inst_26595;
var inst_26579 = inst_26597;
var inst_26580 = (0);
var state_26636__$1 = (function (){var statearr_26670 = state_26636;
(statearr_26670[(13)] = inst_26580);

(statearr_26670[(14)] = inst_26577);

(statearr_26670[(15)] = inst_26579);

(statearr_26670[(16)] = inst_26578);

return statearr_26670;
})();
var statearr_26671_26712 = state_26636__$1;
(statearr_26671_26712[(2)] = null);

(statearr_26671_26712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (10))){
var inst_26580 = (state_26636[(13)]);
var inst_26577 = (state_26636[(14)]);
var inst_26579 = (state_26636[(15)]);
var inst_26578 = (state_26636[(16)]);
var inst_26585 = cljs.core._nth.call(null,inst_26578,inst_26580);
var inst_26586 = cljs.core.async.muxch_STAR_.call(null,inst_26585);
var inst_26587 = cljs.core.async.close_BANG_.call(null,inst_26586);
var inst_26588 = (inst_26580 + (1));
var tmp26666 = inst_26577;
var tmp26667 = inst_26579;
var tmp26668 = inst_26578;
var inst_26577__$1 = tmp26666;
var inst_26578__$1 = tmp26668;
var inst_26579__$1 = tmp26667;
var inst_26580__$1 = inst_26588;
var state_26636__$1 = (function (){var statearr_26672 = state_26636;
(statearr_26672[(13)] = inst_26580__$1);

(statearr_26672[(17)] = inst_26587);

(statearr_26672[(14)] = inst_26577__$1);

(statearr_26672[(15)] = inst_26579__$1);

(statearr_26672[(16)] = inst_26578__$1);

return statearr_26672;
})();
var statearr_26673_26713 = state_26636__$1;
(statearr_26673_26713[(2)] = null);

(statearr_26673_26713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (18))){
var inst_26606 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26674_26714 = state_26636__$1;
(statearr_26674_26714[(2)] = inst_26606);

(statearr_26674_26714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (8))){
var inst_26580 = (state_26636[(13)]);
var inst_26579 = (state_26636[(15)]);
var inst_26582 = (inst_26580 < inst_26579);
var inst_26583 = inst_26582;
var state_26636__$1 = state_26636;
if(cljs.core.truth_(inst_26583)){
var statearr_26675_26715 = state_26636__$1;
(statearr_26675_26715[(1)] = (10));

} else {
var statearr_26676_26716 = state_26636__$1;
(statearr_26676_26716[(1)] = (11));

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
});})(c__19856__auto___26688,mults,ensure_mult,p))
;
return ((function (switch__19791__auto__,c__19856__auto___26688,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_26680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26680[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_26680[(1)] = (1));

return statearr_26680;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_26636){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_26636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e26681){if((e26681 instanceof Object)){
var ex__19795__auto__ = e26681;
var statearr_26682_26717 = state_26636;
(statearr_26682_26717[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26718 = state_26636;
state_26636 = G__26718;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_26636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_26636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___26688,mults,ensure_mult,p))
})();
var state__19858__auto__ = (function (){var statearr_26683 = f__19857__auto__.call(null);
(statearr_26683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___26688);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___26688,mults,ensure_mult,p))
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
var args26719 = [];
var len__17395__auto___26722 = arguments.length;
var i__17396__auto___26723 = (0);
while(true){
if((i__17396__auto___26723 < len__17395__auto___26722)){
args26719.push((arguments[i__17396__auto___26723]));

var G__26724 = (i__17396__auto___26723 + (1));
i__17396__auto___26723 = G__26724;
continue;
} else {
}
break;
}

var G__26721 = args26719.length;
switch (G__26721) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26719.length)].join('')));

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
var args26726 = [];
var len__17395__auto___26729 = arguments.length;
var i__17396__auto___26730 = (0);
while(true){
if((i__17396__auto___26730 < len__17395__auto___26729)){
args26726.push((arguments[i__17396__auto___26730]));

var G__26731 = (i__17396__auto___26730 + (1));
i__17396__auto___26730 = G__26731;
continue;
} else {
}
break;
}

var G__26728 = args26726.length;
switch (G__26728) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26726.length)].join('')));

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
var args26733 = [];
var len__17395__auto___26804 = arguments.length;
var i__17396__auto___26805 = (0);
while(true){
if((i__17396__auto___26805 < len__17395__auto___26804)){
args26733.push((arguments[i__17396__auto___26805]));

var G__26806 = (i__17396__auto___26805 + (1));
i__17396__auto___26805 = G__26806;
continue;
} else {
}
break;
}

var G__26735 = args26733.length;
switch (G__26735) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26733.length)].join('')));

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
var c__19856__auto___26808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___26808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___26808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26774){
var state_val_26775 = (state_26774[(1)]);
if((state_val_26775 === (7))){
var state_26774__$1 = state_26774;
var statearr_26776_26809 = state_26774__$1;
(statearr_26776_26809[(2)] = null);

(statearr_26776_26809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (1))){
var state_26774__$1 = state_26774;
var statearr_26777_26810 = state_26774__$1;
(statearr_26777_26810[(2)] = null);

(statearr_26777_26810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (4))){
var inst_26738 = (state_26774[(7)]);
var inst_26740 = (inst_26738 < cnt);
var state_26774__$1 = state_26774;
if(cljs.core.truth_(inst_26740)){
var statearr_26778_26811 = state_26774__$1;
(statearr_26778_26811[(1)] = (6));

} else {
var statearr_26779_26812 = state_26774__$1;
(statearr_26779_26812[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (15))){
var inst_26770 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26780_26813 = state_26774__$1;
(statearr_26780_26813[(2)] = inst_26770);

(statearr_26780_26813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (13))){
var inst_26763 = cljs.core.async.close_BANG_.call(null,out);
var state_26774__$1 = state_26774;
var statearr_26781_26814 = state_26774__$1;
(statearr_26781_26814[(2)] = inst_26763);

(statearr_26781_26814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (6))){
var state_26774__$1 = state_26774;
var statearr_26782_26815 = state_26774__$1;
(statearr_26782_26815[(2)] = null);

(statearr_26782_26815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (3))){
var inst_26772 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26774__$1,inst_26772);
} else {
if((state_val_26775 === (12))){
var inst_26760 = (state_26774[(8)]);
var inst_26760__$1 = (state_26774[(2)]);
var inst_26761 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26760__$1);
var state_26774__$1 = (function (){var statearr_26783 = state_26774;
(statearr_26783[(8)] = inst_26760__$1);

return statearr_26783;
})();
if(cljs.core.truth_(inst_26761)){
var statearr_26784_26816 = state_26774__$1;
(statearr_26784_26816[(1)] = (13));

} else {
var statearr_26785_26817 = state_26774__$1;
(statearr_26785_26817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (2))){
var inst_26737 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26738 = (0);
var state_26774__$1 = (function (){var statearr_26786 = state_26774;
(statearr_26786[(9)] = inst_26737);

(statearr_26786[(7)] = inst_26738);

return statearr_26786;
})();
var statearr_26787_26818 = state_26774__$1;
(statearr_26787_26818[(2)] = null);

(statearr_26787_26818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (11))){
var inst_26738 = (state_26774[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26774,(10),Object,null,(9));
var inst_26747 = chs__$1.call(null,inst_26738);
var inst_26748 = done.call(null,inst_26738);
var inst_26749 = cljs.core.async.take_BANG_.call(null,inst_26747,inst_26748);
var state_26774__$1 = state_26774;
var statearr_26788_26819 = state_26774__$1;
(statearr_26788_26819[(2)] = inst_26749);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (9))){
var inst_26738 = (state_26774[(7)]);
var inst_26751 = (state_26774[(2)]);
var inst_26752 = (inst_26738 + (1));
var inst_26738__$1 = inst_26752;
var state_26774__$1 = (function (){var statearr_26789 = state_26774;
(statearr_26789[(7)] = inst_26738__$1);

(statearr_26789[(10)] = inst_26751);

return statearr_26789;
})();
var statearr_26790_26820 = state_26774__$1;
(statearr_26790_26820[(2)] = null);

(statearr_26790_26820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (5))){
var inst_26758 = (state_26774[(2)]);
var state_26774__$1 = (function (){var statearr_26791 = state_26774;
(statearr_26791[(11)] = inst_26758);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26774__$1,(12),dchan);
} else {
if((state_val_26775 === (14))){
var inst_26760 = (state_26774[(8)]);
var inst_26765 = cljs.core.apply.call(null,f,inst_26760);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26774__$1,(16),out,inst_26765);
} else {
if((state_val_26775 === (16))){
var inst_26767 = (state_26774[(2)]);
var state_26774__$1 = (function (){var statearr_26792 = state_26774;
(statearr_26792[(12)] = inst_26767);

return statearr_26792;
})();
var statearr_26793_26821 = state_26774__$1;
(statearr_26793_26821[(2)] = null);

(statearr_26793_26821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (10))){
var inst_26742 = (state_26774[(2)]);
var inst_26743 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26774__$1 = (function (){var statearr_26794 = state_26774;
(statearr_26794[(13)] = inst_26742);

return statearr_26794;
})();
var statearr_26795_26822 = state_26774__$1;
(statearr_26795_26822[(2)] = inst_26743);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (8))){
var inst_26756 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26796_26823 = state_26774__$1;
(statearr_26796_26823[(2)] = inst_26756);

(statearr_26796_26823[(1)] = (5));


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
});})(c__19856__auto___26808,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19791__auto__,c__19856__auto___26808,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_26800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26800[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_26800[(1)] = (1));

return statearr_26800;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_26774){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_26774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e26801){if((e26801 instanceof Object)){
var ex__19795__auto__ = e26801;
var statearr_26802_26824 = state_26774;
(statearr_26802_26824[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26825 = state_26774;
state_26774 = G__26825;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_26774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_26774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___26808,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19858__auto__ = (function (){var statearr_26803 = f__19857__auto__.call(null);
(statearr_26803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___26808);

return statearr_26803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___26808,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26827 = [];
var len__17395__auto___26883 = arguments.length;
var i__17396__auto___26884 = (0);
while(true){
if((i__17396__auto___26884 < len__17395__auto___26883)){
args26827.push((arguments[i__17396__auto___26884]));

var G__26885 = (i__17396__auto___26884 + (1));
i__17396__auto___26884 = G__26885;
continue;
} else {
}
break;
}

var G__26829 = args26827.length;
switch (G__26829) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26827.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19856__auto___26887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___26887,out){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___26887,out){
return (function (state_26859){
var state_val_26860 = (state_26859[(1)]);
if((state_val_26860 === (7))){
var inst_26838 = (state_26859[(7)]);
var inst_26839 = (state_26859[(8)]);
var inst_26838__$1 = (state_26859[(2)]);
var inst_26839__$1 = cljs.core.nth.call(null,inst_26838__$1,(0),null);
var inst_26840 = cljs.core.nth.call(null,inst_26838__$1,(1),null);
var inst_26841 = (inst_26839__$1 == null);
var state_26859__$1 = (function (){var statearr_26861 = state_26859;
(statearr_26861[(7)] = inst_26838__$1);

(statearr_26861[(8)] = inst_26839__$1);

(statearr_26861[(9)] = inst_26840);

return statearr_26861;
})();
if(cljs.core.truth_(inst_26841)){
var statearr_26862_26888 = state_26859__$1;
(statearr_26862_26888[(1)] = (8));

} else {
var statearr_26863_26889 = state_26859__$1;
(statearr_26863_26889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (1))){
var inst_26830 = cljs.core.vec.call(null,chs);
var inst_26831 = inst_26830;
var state_26859__$1 = (function (){var statearr_26864 = state_26859;
(statearr_26864[(10)] = inst_26831);

return statearr_26864;
})();
var statearr_26865_26890 = state_26859__$1;
(statearr_26865_26890[(2)] = null);

(statearr_26865_26890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (4))){
var inst_26831 = (state_26859[(10)]);
var state_26859__$1 = state_26859;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26859__$1,(7),inst_26831);
} else {
if((state_val_26860 === (6))){
var inst_26855 = (state_26859[(2)]);
var state_26859__$1 = state_26859;
var statearr_26866_26891 = state_26859__$1;
(statearr_26866_26891[(2)] = inst_26855);

(statearr_26866_26891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (3))){
var inst_26857 = (state_26859[(2)]);
var state_26859__$1 = state_26859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26859__$1,inst_26857);
} else {
if((state_val_26860 === (2))){
var inst_26831 = (state_26859[(10)]);
var inst_26833 = cljs.core.count.call(null,inst_26831);
var inst_26834 = (inst_26833 > (0));
var state_26859__$1 = state_26859;
if(cljs.core.truth_(inst_26834)){
var statearr_26868_26892 = state_26859__$1;
(statearr_26868_26892[(1)] = (4));

} else {
var statearr_26869_26893 = state_26859__$1;
(statearr_26869_26893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (11))){
var inst_26831 = (state_26859[(10)]);
var inst_26848 = (state_26859[(2)]);
var tmp26867 = inst_26831;
var inst_26831__$1 = tmp26867;
var state_26859__$1 = (function (){var statearr_26870 = state_26859;
(statearr_26870[(10)] = inst_26831__$1);

(statearr_26870[(11)] = inst_26848);

return statearr_26870;
})();
var statearr_26871_26894 = state_26859__$1;
(statearr_26871_26894[(2)] = null);

(statearr_26871_26894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (9))){
var inst_26839 = (state_26859[(8)]);
var state_26859__$1 = state_26859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26859__$1,(11),out,inst_26839);
} else {
if((state_val_26860 === (5))){
var inst_26853 = cljs.core.async.close_BANG_.call(null,out);
var state_26859__$1 = state_26859;
var statearr_26872_26895 = state_26859__$1;
(statearr_26872_26895[(2)] = inst_26853);

(statearr_26872_26895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (10))){
var inst_26851 = (state_26859[(2)]);
var state_26859__$1 = state_26859;
var statearr_26873_26896 = state_26859__$1;
(statearr_26873_26896[(2)] = inst_26851);

(statearr_26873_26896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (8))){
var inst_26831 = (state_26859[(10)]);
var inst_26838 = (state_26859[(7)]);
var inst_26839 = (state_26859[(8)]);
var inst_26840 = (state_26859[(9)]);
var inst_26843 = (function (){var cs = inst_26831;
var vec__26836 = inst_26838;
var v = inst_26839;
var c = inst_26840;
return ((function (cs,vec__26836,v,c,inst_26831,inst_26838,inst_26839,inst_26840,state_val_26860,c__19856__auto___26887,out){
return (function (p1__26826_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26826_SHARP_);
});
;})(cs,vec__26836,v,c,inst_26831,inst_26838,inst_26839,inst_26840,state_val_26860,c__19856__auto___26887,out))
})();
var inst_26844 = cljs.core.filterv.call(null,inst_26843,inst_26831);
var inst_26831__$1 = inst_26844;
var state_26859__$1 = (function (){var statearr_26874 = state_26859;
(statearr_26874[(10)] = inst_26831__$1);

return statearr_26874;
})();
var statearr_26875_26897 = state_26859__$1;
(statearr_26875_26897[(2)] = null);

(statearr_26875_26897[(1)] = (2));


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
});})(c__19856__auto___26887,out))
;
return ((function (switch__19791__auto__,c__19856__auto___26887,out){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_26879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26879[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_26879[(1)] = (1));

return statearr_26879;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_26859){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_26859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e26880){if((e26880 instanceof Object)){
var ex__19795__auto__ = e26880;
var statearr_26881_26898 = state_26859;
(statearr_26881_26898[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26899 = state_26859;
state_26859 = G__26899;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_26859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_26859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___26887,out))
})();
var state__19858__auto__ = (function (){var statearr_26882 = f__19857__auto__.call(null);
(statearr_26882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___26887);

return statearr_26882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___26887,out))
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
var args26900 = [];
var len__17395__auto___26949 = arguments.length;
var i__17396__auto___26950 = (0);
while(true){
if((i__17396__auto___26950 < len__17395__auto___26949)){
args26900.push((arguments[i__17396__auto___26950]));

var G__26951 = (i__17396__auto___26950 + (1));
i__17396__auto___26950 = G__26951;
continue;
} else {
}
break;
}

var G__26902 = args26900.length;
switch (G__26902) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26900.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19856__auto___26953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___26953,out){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___26953,out){
return (function (state_26926){
var state_val_26927 = (state_26926[(1)]);
if((state_val_26927 === (7))){
var inst_26908 = (state_26926[(7)]);
var inst_26908__$1 = (state_26926[(2)]);
var inst_26909 = (inst_26908__$1 == null);
var inst_26910 = cljs.core.not.call(null,inst_26909);
var state_26926__$1 = (function (){var statearr_26928 = state_26926;
(statearr_26928[(7)] = inst_26908__$1);

return statearr_26928;
})();
if(inst_26910){
var statearr_26929_26954 = state_26926__$1;
(statearr_26929_26954[(1)] = (8));

} else {
var statearr_26930_26955 = state_26926__$1;
(statearr_26930_26955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (1))){
var inst_26903 = (0);
var state_26926__$1 = (function (){var statearr_26931 = state_26926;
(statearr_26931[(8)] = inst_26903);

return statearr_26931;
})();
var statearr_26932_26956 = state_26926__$1;
(statearr_26932_26956[(2)] = null);

(statearr_26932_26956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (4))){
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26926__$1,(7),ch);
} else {
if((state_val_26927 === (6))){
var inst_26921 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26933_26957 = state_26926__$1;
(statearr_26933_26957[(2)] = inst_26921);

(statearr_26933_26957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (3))){
var inst_26923 = (state_26926[(2)]);
var inst_26924 = cljs.core.async.close_BANG_.call(null,out);
var state_26926__$1 = (function (){var statearr_26934 = state_26926;
(statearr_26934[(9)] = inst_26923);

return statearr_26934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26926__$1,inst_26924);
} else {
if((state_val_26927 === (2))){
var inst_26903 = (state_26926[(8)]);
var inst_26905 = (inst_26903 < n);
var state_26926__$1 = state_26926;
if(cljs.core.truth_(inst_26905)){
var statearr_26935_26958 = state_26926__$1;
(statearr_26935_26958[(1)] = (4));

} else {
var statearr_26936_26959 = state_26926__$1;
(statearr_26936_26959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (11))){
var inst_26903 = (state_26926[(8)]);
var inst_26913 = (state_26926[(2)]);
var inst_26914 = (inst_26903 + (1));
var inst_26903__$1 = inst_26914;
var state_26926__$1 = (function (){var statearr_26937 = state_26926;
(statearr_26937[(8)] = inst_26903__$1);

(statearr_26937[(10)] = inst_26913);

return statearr_26937;
})();
var statearr_26938_26960 = state_26926__$1;
(statearr_26938_26960[(2)] = null);

(statearr_26938_26960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (9))){
var state_26926__$1 = state_26926;
var statearr_26939_26961 = state_26926__$1;
(statearr_26939_26961[(2)] = null);

(statearr_26939_26961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (5))){
var state_26926__$1 = state_26926;
var statearr_26940_26962 = state_26926__$1;
(statearr_26940_26962[(2)] = null);

(statearr_26940_26962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (10))){
var inst_26918 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26941_26963 = state_26926__$1;
(statearr_26941_26963[(2)] = inst_26918);

(statearr_26941_26963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (8))){
var inst_26908 = (state_26926[(7)]);
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26926__$1,(11),out,inst_26908);
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
});})(c__19856__auto___26953,out))
;
return ((function (switch__19791__auto__,c__19856__auto___26953,out){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_26945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26945[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_26945[(1)] = (1));

return statearr_26945;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_26926){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_26926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e26946){if((e26946 instanceof Object)){
var ex__19795__auto__ = e26946;
var statearr_26947_26964 = state_26926;
(statearr_26947_26964[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26965 = state_26926;
state_26926 = G__26965;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_26926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_26926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___26953,out))
})();
var state__19858__auto__ = (function (){var statearr_26948 = f__19857__auto__.call(null);
(statearr_26948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___26953);

return statearr_26948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___26953,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26973 = (function (map_LT_,f,ch,meta26974){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26974 = meta26974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26975,meta26974__$1){
var self__ = this;
var _26975__$1 = this;
return (new cljs.core.async.t_cljs$core$async26973(self__.map_LT_,self__.f,self__.ch,meta26974__$1));
});

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26975){
var self__ = this;
var _26975__$1 = this;
return self__.meta26974;
});

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26976 = (function (map_LT_,f,ch,meta26974,_,fn1,meta26977){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26974 = meta26974;
this._ = _;
this.fn1 = fn1;
this.meta26977 = meta26977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26978,meta26977__$1){
var self__ = this;
var _26978__$1 = this;
return (new cljs.core.async.t_cljs$core$async26976(self__.map_LT_,self__.f,self__.ch,self__.meta26974,self__._,self__.fn1,meta26977__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26978){
var self__ = this;
var _26978__$1 = this;
return self__.meta26977;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26966_SHARP_){
return f1.call(null,(((p1__26966_SHARP_ == null))?null:self__.f.call(null,p1__26966_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26976.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26974","meta26974",-1281283264,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26973","cljs.core.async/t_cljs$core$async26973",80277808,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26977","meta26977",-1974434765,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26976";

cljs.core.async.t_cljs$core$async26976.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26976");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26976 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26976(map_LT___$1,f__$1,ch__$1,meta26974__$1,___$2,fn1__$1,meta26977){
return (new cljs.core.async.t_cljs$core$async26976(map_LT___$1,f__$1,ch__$1,meta26974__$1,___$2,fn1__$1,meta26977));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26976(self__.map_LT_,self__.f,self__.ch,self__.meta26974,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26974","meta26974",-1281283264,null)], null);
});

cljs.core.async.t_cljs$core$async26973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26973";

cljs.core.async.t_cljs$core$async26973.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26973");
});

cljs.core.async.__GT_t_cljs$core$async26973 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26973(map_LT___$1,f__$1,ch__$1,meta26974){
return (new cljs.core.async.t_cljs$core$async26973(map_LT___$1,f__$1,ch__$1,meta26974));
});

}

return (new cljs.core.async.t_cljs$core$async26973(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26982 = (function (map_GT_,f,ch,meta26983){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26983 = meta26983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26984,meta26983__$1){
var self__ = this;
var _26984__$1 = this;
return (new cljs.core.async.t_cljs$core$async26982(self__.map_GT_,self__.f,self__.ch,meta26983__$1));
});

cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26984){
var self__ = this;
var _26984__$1 = this;
return self__.meta26983;
});

cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26983","meta26983",-987127244,null)], null);
});

cljs.core.async.t_cljs$core$async26982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26982";

cljs.core.async.t_cljs$core$async26982.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26982");
});

cljs.core.async.__GT_t_cljs$core$async26982 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26982(map_GT___$1,f__$1,ch__$1,meta26983){
return (new cljs.core.async.t_cljs$core$async26982(map_GT___$1,f__$1,ch__$1,meta26983));
});

}

return (new cljs.core.async.t_cljs$core$async26982(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26988 = (function (filter_GT_,p,ch,meta26989){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26989 = meta26989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26990,meta26989__$1){
var self__ = this;
var _26990__$1 = this;
return (new cljs.core.async.t_cljs$core$async26988(self__.filter_GT_,self__.p,self__.ch,meta26989__$1));
});

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26990){
var self__ = this;
var _26990__$1 = this;
return self__.meta26989;
});

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26989","meta26989",-1468206521,null)], null);
});

cljs.core.async.t_cljs$core$async26988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26988";

cljs.core.async.t_cljs$core$async26988.cljs$lang$ctorPrWriter = (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"cljs.core.async/t_cljs$core$async26988");
});

cljs.core.async.__GT_t_cljs$core$async26988 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26988(filter_GT___$1,p__$1,ch__$1,meta26989){
return (new cljs.core.async.t_cljs$core$async26988(filter_GT___$1,p__$1,ch__$1,meta26989));
});

}

return (new cljs.core.async.t_cljs$core$async26988(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26991 = [];
var len__17395__auto___27035 = arguments.length;
var i__17396__auto___27036 = (0);
while(true){
if((i__17396__auto___27036 < len__17395__auto___27035)){
args26991.push((arguments[i__17396__auto___27036]));

var G__27037 = (i__17396__auto___27036 + (1));
i__17396__auto___27036 = G__27037;
continue;
} else {
}
break;
}

var G__26993 = args26991.length;
switch (G__26993) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26991.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19856__auto___27039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___27039,out){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___27039,out){
return (function (state_27014){
var state_val_27015 = (state_27014[(1)]);
if((state_val_27015 === (7))){
var inst_27010 = (state_27014[(2)]);
var state_27014__$1 = state_27014;
var statearr_27016_27040 = state_27014__$1;
(statearr_27016_27040[(2)] = inst_27010);

(statearr_27016_27040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (1))){
var state_27014__$1 = state_27014;
var statearr_27017_27041 = state_27014__$1;
(statearr_27017_27041[(2)] = null);

(statearr_27017_27041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (4))){
var inst_26996 = (state_27014[(7)]);
var inst_26996__$1 = (state_27014[(2)]);
var inst_26997 = (inst_26996__$1 == null);
var state_27014__$1 = (function (){var statearr_27018 = state_27014;
(statearr_27018[(7)] = inst_26996__$1);

return statearr_27018;
})();
if(cljs.core.truth_(inst_26997)){
var statearr_27019_27042 = state_27014__$1;
(statearr_27019_27042[(1)] = (5));

} else {
var statearr_27020_27043 = state_27014__$1;
(statearr_27020_27043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (6))){
var inst_26996 = (state_27014[(7)]);
var inst_27001 = p.call(null,inst_26996);
var state_27014__$1 = state_27014;
if(cljs.core.truth_(inst_27001)){
var statearr_27021_27044 = state_27014__$1;
(statearr_27021_27044[(1)] = (8));

} else {
var statearr_27022_27045 = state_27014__$1;
(statearr_27022_27045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (3))){
var inst_27012 = (state_27014[(2)]);
var state_27014__$1 = state_27014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27014__$1,inst_27012);
} else {
if((state_val_27015 === (2))){
var state_27014__$1 = state_27014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27014__$1,(4),ch);
} else {
if((state_val_27015 === (11))){
var inst_27004 = (state_27014[(2)]);
var state_27014__$1 = state_27014;
var statearr_27023_27046 = state_27014__$1;
(statearr_27023_27046[(2)] = inst_27004);

(statearr_27023_27046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (9))){
var state_27014__$1 = state_27014;
var statearr_27024_27047 = state_27014__$1;
(statearr_27024_27047[(2)] = null);

(statearr_27024_27047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (5))){
var inst_26999 = cljs.core.async.close_BANG_.call(null,out);
var state_27014__$1 = state_27014;
var statearr_27025_27048 = state_27014__$1;
(statearr_27025_27048[(2)] = inst_26999);

(statearr_27025_27048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (10))){
var inst_27007 = (state_27014[(2)]);
var state_27014__$1 = (function (){var statearr_27026 = state_27014;
(statearr_27026[(8)] = inst_27007);

return statearr_27026;
})();
var statearr_27027_27049 = state_27014__$1;
(statearr_27027_27049[(2)] = null);

(statearr_27027_27049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27015 === (8))){
var inst_26996 = (state_27014[(7)]);
var state_27014__$1 = state_27014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27014__$1,(11),out,inst_26996);
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
});})(c__19856__auto___27039,out))
;
return ((function (switch__19791__auto__,c__19856__auto___27039,out){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_27031 = [null,null,null,null,null,null,null,null,null];
(statearr_27031[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_27031[(1)] = (1));

return statearr_27031;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_27014){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_27014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e27032){if((e27032 instanceof Object)){
var ex__19795__auto__ = e27032;
var statearr_27033_27050 = state_27014;
(statearr_27033_27050[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27051 = state_27014;
state_27014 = G__27051;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_27014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_27014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___27039,out))
})();
var state__19858__auto__ = (function (){var statearr_27034 = f__19857__auto__.call(null);
(statearr_27034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___27039);

return statearr_27034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___27039,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27052 = [];
var len__17395__auto___27055 = arguments.length;
var i__17396__auto___27056 = (0);
while(true){
if((i__17396__auto___27056 < len__17395__auto___27055)){
args27052.push((arguments[i__17396__auto___27056]));

var G__27057 = (i__17396__auto___27056 + (1));
i__17396__auto___27056 = G__27057;
continue;
} else {
}
break;
}

var G__27054 = args27052.length;
switch (G__27054) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27052.length)].join('')));

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
var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__){
return (function (state_27224){
var state_val_27225 = (state_27224[(1)]);
if((state_val_27225 === (7))){
var inst_27220 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27226_27267 = state_27224__$1;
(statearr_27226_27267[(2)] = inst_27220);

(statearr_27226_27267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (20))){
var inst_27190 = (state_27224[(7)]);
var inst_27201 = (state_27224[(2)]);
var inst_27202 = cljs.core.next.call(null,inst_27190);
var inst_27176 = inst_27202;
var inst_27177 = null;
var inst_27178 = (0);
var inst_27179 = (0);
var state_27224__$1 = (function (){var statearr_27227 = state_27224;
(statearr_27227[(8)] = inst_27179);

(statearr_27227[(9)] = inst_27178);

(statearr_27227[(10)] = inst_27176);

(statearr_27227[(11)] = inst_27201);

(statearr_27227[(12)] = inst_27177);

return statearr_27227;
})();
var statearr_27228_27268 = state_27224__$1;
(statearr_27228_27268[(2)] = null);

(statearr_27228_27268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (1))){
var state_27224__$1 = state_27224;
var statearr_27229_27269 = state_27224__$1;
(statearr_27229_27269[(2)] = null);

(statearr_27229_27269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (4))){
var inst_27165 = (state_27224[(13)]);
var inst_27165__$1 = (state_27224[(2)]);
var inst_27166 = (inst_27165__$1 == null);
var state_27224__$1 = (function (){var statearr_27230 = state_27224;
(statearr_27230[(13)] = inst_27165__$1);

return statearr_27230;
})();
if(cljs.core.truth_(inst_27166)){
var statearr_27231_27270 = state_27224__$1;
(statearr_27231_27270[(1)] = (5));

} else {
var statearr_27232_27271 = state_27224__$1;
(statearr_27232_27271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (15))){
var state_27224__$1 = state_27224;
var statearr_27236_27272 = state_27224__$1;
(statearr_27236_27272[(2)] = null);

(statearr_27236_27272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (21))){
var state_27224__$1 = state_27224;
var statearr_27237_27273 = state_27224__$1;
(statearr_27237_27273[(2)] = null);

(statearr_27237_27273[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (13))){
var inst_27179 = (state_27224[(8)]);
var inst_27178 = (state_27224[(9)]);
var inst_27176 = (state_27224[(10)]);
var inst_27177 = (state_27224[(12)]);
var inst_27186 = (state_27224[(2)]);
var inst_27187 = (inst_27179 + (1));
var tmp27233 = inst_27178;
var tmp27234 = inst_27176;
var tmp27235 = inst_27177;
var inst_27176__$1 = tmp27234;
var inst_27177__$1 = tmp27235;
var inst_27178__$1 = tmp27233;
var inst_27179__$1 = inst_27187;
var state_27224__$1 = (function (){var statearr_27238 = state_27224;
(statearr_27238[(8)] = inst_27179__$1);

(statearr_27238[(9)] = inst_27178__$1);

(statearr_27238[(10)] = inst_27176__$1);

(statearr_27238[(12)] = inst_27177__$1);

(statearr_27238[(14)] = inst_27186);

return statearr_27238;
})();
var statearr_27239_27274 = state_27224__$1;
(statearr_27239_27274[(2)] = null);

(statearr_27239_27274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (22))){
var state_27224__$1 = state_27224;
var statearr_27240_27275 = state_27224__$1;
(statearr_27240_27275[(2)] = null);

(statearr_27240_27275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (6))){
var inst_27165 = (state_27224[(13)]);
var inst_27174 = f.call(null,inst_27165);
var inst_27175 = cljs.core.seq.call(null,inst_27174);
var inst_27176 = inst_27175;
var inst_27177 = null;
var inst_27178 = (0);
var inst_27179 = (0);
var state_27224__$1 = (function (){var statearr_27241 = state_27224;
(statearr_27241[(8)] = inst_27179);

(statearr_27241[(9)] = inst_27178);

(statearr_27241[(10)] = inst_27176);

(statearr_27241[(12)] = inst_27177);

return statearr_27241;
})();
var statearr_27242_27276 = state_27224__$1;
(statearr_27242_27276[(2)] = null);

(statearr_27242_27276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (17))){
var inst_27190 = (state_27224[(7)]);
var inst_27194 = cljs.core.chunk_first.call(null,inst_27190);
var inst_27195 = cljs.core.chunk_rest.call(null,inst_27190);
var inst_27196 = cljs.core.count.call(null,inst_27194);
var inst_27176 = inst_27195;
var inst_27177 = inst_27194;
var inst_27178 = inst_27196;
var inst_27179 = (0);
var state_27224__$1 = (function (){var statearr_27243 = state_27224;
(statearr_27243[(8)] = inst_27179);

(statearr_27243[(9)] = inst_27178);

(statearr_27243[(10)] = inst_27176);

(statearr_27243[(12)] = inst_27177);

return statearr_27243;
})();
var statearr_27244_27277 = state_27224__$1;
(statearr_27244_27277[(2)] = null);

(statearr_27244_27277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (3))){
var inst_27222 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else {
if((state_val_27225 === (12))){
var inst_27210 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27245_27278 = state_27224__$1;
(statearr_27245_27278[(2)] = inst_27210);

(statearr_27245_27278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (2))){
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(4),in$);
} else {
if((state_val_27225 === (23))){
var inst_27218 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27246_27279 = state_27224__$1;
(statearr_27246_27279[(2)] = inst_27218);

(statearr_27246_27279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (19))){
var inst_27205 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27247_27280 = state_27224__$1;
(statearr_27247_27280[(2)] = inst_27205);

(statearr_27247_27280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (11))){
var inst_27190 = (state_27224[(7)]);
var inst_27176 = (state_27224[(10)]);
var inst_27190__$1 = cljs.core.seq.call(null,inst_27176);
var state_27224__$1 = (function (){var statearr_27248 = state_27224;
(statearr_27248[(7)] = inst_27190__$1);

return statearr_27248;
})();
if(inst_27190__$1){
var statearr_27249_27281 = state_27224__$1;
(statearr_27249_27281[(1)] = (14));

} else {
var statearr_27250_27282 = state_27224__$1;
(statearr_27250_27282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (9))){
var inst_27212 = (state_27224[(2)]);
var inst_27213 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27224__$1 = (function (){var statearr_27251 = state_27224;
(statearr_27251[(15)] = inst_27212);

return statearr_27251;
})();
if(cljs.core.truth_(inst_27213)){
var statearr_27252_27283 = state_27224__$1;
(statearr_27252_27283[(1)] = (21));

} else {
var statearr_27253_27284 = state_27224__$1;
(statearr_27253_27284[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (5))){
var inst_27168 = cljs.core.async.close_BANG_.call(null,out);
var state_27224__$1 = state_27224;
var statearr_27254_27285 = state_27224__$1;
(statearr_27254_27285[(2)] = inst_27168);

(statearr_27254_27285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (14))){
var inst_27190 = (state_27224[(7)]);
var inst_27192 = cljs.core.chunked_seq_QMARK_.call(null,inst_27190);
var state_27224__$1 = state_27224;
if(inst_27192){
var statearr_27255_27286 = state_27224__$1;
(statearr_27255_27286[(1)] = (17));

} else {
var statearr_27256_27287 = state_27224__$1;
(statearr_27256_27287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (16))){
var inst_27208 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27257_27288 = state_27224__$1;
(statearr_27257_27288[(2)] = inst_27208);

(statearr_27257_27288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (10))){
var inst_27179 = (state_27224[(8)]);
var inst_27177 = (state_27224[(12)]);
var inst_27184 = cljs.core._nth.call(null,inst_27177,inst_27179);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(13),out,inst_27184);
} else {
if((state_val_27225 === (18))){
var inst_27190 = (state_27224[(7)]);
var inst_27199 = cljs.core.first.call(null,inst_27190);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(20),out,inst_27199);
} else {
if((state_val_27225 === (8))){
var inst_27179 = (state_27224[(8)]);
var inst_27178 = (state_27224[(9)]);
var inst_27181 = (inst_27179 < inst_27178);
var inst_27182 = inst_27181;
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27182)){
var statearr_27258_27289 = state_27224__$1;
(statearr_27258_27289[(1)] = (10));

} else {
var statearr_27259_27290 = state_27224__$1;
(statearr_27259_27290[(1)] = (11));

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
});})(c__19856__auto__))
;
return ((function (switch__19791__auto__,c__19856__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19792__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19792__auto____0 = (function (){
var statearr_27263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27263[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19792__auto__);

(statearr_27263[(1)] = (1));

return statearr_27263;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19792__auto____1 = (function (state_27224){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_27224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e27264){if((e27264 instanceof Object)){
var ex__19795__auto__ = e27264;
var statearr_27265_27291 = state_27224;
(statearr_27265_27291[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27292 = state_27224;
state_27224 = G__27292;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19792__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19792__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19792__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19792__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__))
})();
var state__19858__auto__ = (function (){var statearr_27266 = f__19857__auto__.call(null);
(statearr_27266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_27266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__))
);

return c__19856__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27293 = [];
var len__17395__auto___27296 = arguments.length;
var i__17396__auto___27297 = (0);
while(true){
if((i__17396__auto___27297 < len__17395__auto___27296)){
args27293.push((arguments[i__17396__auto___27297]));

var G__27298 = (i__17396__auto___27297 + (1));
i__17396__auto___27297 = G__27298;
continue;
} else {
}
break;
}

var G__27295 = args27293.length;
switch (G__27295) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27293.length)].join('')));

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
var args27300 = [];
var len__17395__auto___27303 = arguments.length;
var i__17396__auto___27304 = (0);
while(true){
if((i__17396__auto___27304 < len__17395__auto___27303)){
args27300.push((arguments[i__17396__auto___27304]));

var G__27305 = (i__17396__auto___27304 + (1));
i__17396__auto___27304 = G__27305;
continue;
} else {
}
break;
}

var G__27302 = args27300.length;
switch (G__27302) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27300.length)].join('')));

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
var args27307 = [];
var len__17395__auto___27358 = arguments.length;
var i__17396__auto___27359 = (0);
while(true){
if((i__17396__auto___27359 < len__17395__auto___27358)){
args27307.push((arguments[i__17396__auto___27359]));

var G__27360 = (i__17396__auto___27359 + (1));
i__17396__auto___27359 = G__27360;
continue;
} else {
}
break;
}

var G__27309 = args27307.length;
switch (G__27309) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27307.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19856__auto___27362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___27362,out){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___27362,out){
return (function (state_27333){
var state_val_27334 = (state_27333[(1)]);
if((state_val_27334 === (7))){
var inst_27328 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27335_27363 = state_27333__$1;
(statearr_27335_27363[(2)] = inst_27328);

(statearr_27335_27363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (1))){
var inst_27310 = null;
var state_27333__$1 = (function (){var statearr_27336 = state_27333;
(statearr_27336[(7)] = inst_27310);

return statearr_27336;
})();
var statearr_27337_27364 = state_27333__$1;
(statearr_27337_27364[(2)] = null);

(statearr_27337_27364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (4))){
var inst_27313 = (state_27333[(8)]);
var inst_27313__$1 = (state_27333[(2)]);
var inst_27314 = (inst_27313__$1 == null);
var inst_27315 = cljs.core.not.call(null,inst_27314);
var state_27333__$1 = (function (){var statearr_27338 = state_27333;
(statearr_27338[(8)] = inst_27313__$1);

return statearr_27338;
})();
if(inst_27315){
var statearr_27339_27365 = state_27333__$1;
(statearr_27339_27365[(1)] = (5));

} else {
var statearr_27340_27366 = state_27333__$1;
(statearr_27340_27366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (6))){
var state_27333__$1 = state_27333;
var statearr_27341_27367 = state_27333__$1;
(statearr_27341_27367[(2)] = null);

(statearr_27341_27367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (3))){
var inst_27330 = (state_27333[(2)]);
var inst_27331 = cljs.core.async.close_BANG_.call(null,out);
var state_27333__$1 = (function (){var statearr_27342 = state_27333;
(statearr_27342[(9)] = inst_27330);

return statearr_27342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27333__$1,inst_27331);
} else {
if((state_val_27334 === (2))){
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27333__$1,(4),ch);
} else {
if((state_val_27334 === (11))){
var inst_27313 = (state_27333[(8)]);
var inst_27322 = (state_27333[(2)]);
var inst_27310 = inst_27313;
var state_27333__$1 = (function (){var statearr_27343 = state_27333;
(statearr_27343[(10)] = inst_27322);

(statearr_27343[(7)] = inst_27310);

return statearr_27343;
})();
var statearr_27344_27368 = state_27333__$1;
(statearr_27344_27368[(2)] = null);

(statearr_27344_27368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (9))){
var inst_27313 = (state_27333[(8)]);
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27333__$1,(11),out,inst_27313);
} else {
if((state_val_27334 === (5))){
var inst_27313 = (state_27333[(8)]);
var inst_27310 = (state_27333[(7)]);
var inst_27317 = cljs.core._EQ_.call(null,inst_27313,inst_27310);
var state_27333__$1 = state_27333;
if(inst_27317){
var statearr_27346_27369 = state_27333__$1;
(statearr_27346_27369[(1)] = (8));

} else {
var statearr_27347_27370 = state_27333__$1;
(statearr_27347_27370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (10))){
var inst_27325 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27348_27371 = state_27333__$1;
(statearr_27348_27371[(2)] = inst_27325);

(statearr_27348_27371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (8))){
var inst_27310 = (state_27333[(7)]);
var tmp27345 = inst_27310;
var inst_27310__$1 = tmp27345;
var state_27333__$1 = (function (){var statearr_27349 = state_27333;
(statearr_27349[(7)] = inst_27310__$1);

return statearr_27349;
})();
var statearr_27350_27372 = state_27333__$1;
(statearr_27350_27372[(2)] = null);

(statearr_27350_27372[(1)] = (2));


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
});})(c__19856__auto___27362,out))
;
return ((function (switch__19791__auto__,c__19856__auto___27362,out){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_27354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27354[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_27354[(1)] = (1));

return statearr_27354;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_27333){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_27333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e27355){if((e27355 instanceof Object)){
var ex__19795__auto__ = e27355;
var statearr_27356_27373 = state_27333;
(statearr_27356_27373[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27374 = state_27333;
state_27333 = G__27374;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_27333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_27333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___27362,out))
})();
var state__19858__auto__ = (function (){var statearr_27357 = f__19857__auto__.call(null);
(statearr_27357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___27362);

return statearr_27357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___27362,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27375 = [];
var len__17395__auto___27445 = arguments.length;
var i__17396__auto___27446 = (0);
while(true){
if((i__17396__auto___27446 < len__17395__auto___27445)){
args27375.push((arguments[i__17396__auto___27446]));

var G__27447 = (i__17396__auto___27446 + (1));
i__17396__auto___27446 = G__27447;
continue;
} else {
}
break;
}

var G__27377 = args27375.length;
switch (G__27377) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27375.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19856__auto___27449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___27449,out){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___27449,out){
return (function (state_27415){
var state_val_27416 = (state_27415[(1)]);
if((state_val_27416 === (7))){
var inst_27411 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
var statearr_27417_27450 = state_27415__$1;
(statearr_27417_27450[(2)] = inst_27411);

(statearr_27417_27450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (1))){
var inst_27378 = (new Array(n));
var inst_27379 = inst_27378;
var inst_27380 = (0);
var state_27415__$1 = (function (){var statearr_27418 = state_27415;
(statearr_27418[(7)] = inst_27379);

(statearr_27418[(8)] = inst_27380);

return statearr_27418;
})();
var statearr_27419_27451 = state_27415__$1;
(statearr_27419_27451[(2)] = null);

(statearr_27419_27451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (4))){
var inst_27383 = (state_27415[(9)]);
var inst_27383__$1 = (state_27415[(2)]);
var inst_27384 = (inst_27383__$1 == null);
var inst_27385 = cljs.core.not.call(null,inst_27384);
var state_27415__$1 = (function (){var statearr_27420 = state_27415;
(statearr_27420[(9)] = inst_27383__$1);

return statearr_27420;
})();
if(inst_27385){
var statearr_27421_27452 = state_27415__$1;
(statearr_27421_27452[(1)] = (5));

} else {
var statearr_27422_27453 = state_27415__$1;
(statearr_27422_27453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (15))){
var inst_27405 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
var statearr_27423_27454 = state_27415__$1;
(statearr_27423_27454[(2)] = inst_27405);

(statearr_27423_27454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (13))){
var state_27415__$1 = state_27415;
var statearr_27424_27455 = state_27415__$1;
(statearr_27424_27455[(2)] = null);

(statearr_27424_27455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (6))){
var inst_27380 = (state_27415[(8)]);
var inst_27401 = (inst_27380 > (0));
var state_27415__$1 = state_27415;
if(cljs.core.truth_(inst_27401)){
var statearr_27425_27456 = state_27415__$1;
(statearr_27425_27456[(1)] = (12));

} else {
var statearr_27426_27457 = state_27415__$1;
(statearr_27426_27457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (3))){
var inst_27413 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27415__$1,inst_27413);
} else {
if((state_val_27416 === (12))){
var inst_27379 = (state_27415[(7)]);
var inst_27403 = cljs.core.vec.call(null,inst_27379);
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27415__$1,(15),out,inst_27403);
} else {
if((state_val_27416 === (2))){
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27415__$1,(4),ch);
} else {
if((state_val_27416 === (11))){
var inst_27395 = (state_27415[(2)]);
var inst_27396 = (new Array(n));
var inst_27379 = inst_27396;
var inst_27380 = (0);
var state_27415__$1 = (function (){var statearr_27427 = state_27415;
(statearr_27427[(10)] = inst_27395);

(statearr_27427[(7)] = inst_27379);

(statearr_27427[(8)] = inst_27380);

return statearr_27427;
})();
var statearr_27428_27458 = state_27415__$1;
(statearr_27428_27458[(2)] = null);

(statearr_27428_27458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (9))){
var inst_27379 = (state_27415[(7)]);
var inst_27393 = cljs.core.vec.call(null,inst_27379);
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27415__$1,(11),out,inst_27393);
} else {
if((state_val_27416 === (5))){
var inst_27383 = (state_27415[(9)]);
var inst_27379 = (state_27415[(7)]);
var inst_27380 = (state_27415[(8)]);
var inst_27388 = (state_27415[(11)]);
var inst_27387 = (inst_27379[inst_27380] = inst_27383);
var inst_27388__$1 = (inst_27380 + (1));
var inst_27389 = (inst_27388__$1 < n);
var state_27415__$1 = (function (){var statearr_27429 = state_27415;
(statearr_27429[(12)] = inst_27387);

(statearr_27429[(11)] = inst_27388__$1);

return statearr_27429;
})();
if(cljs.core.truth_(inst_27389)){
var statearr_27430_27459 = state_27415__$1;
(statearr_27430_27459[(1)] = (8));

} else {
var statearr_27431_27460 = state_27415__$1;
(statearr_27431_27460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (14))){
var inst_27408 = (state_27415[(2)]);
var inst_27409 = cljs.core.async.close_BANG_.call(null,out);
var state_27415__$1 = (function (){var statearr_27433 = state_27415;
(statearr_27433[(13)] = inst_27408);

return statearr_27433;
})();
var statearr_27434_27461 = state_27415__$1;
(statearr_27434_27461[(2)] = inst_27409);

(statearr_27434_27461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (10))){
var inst_27399 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
var statearr_27435_27462 = state_27415__$1;
(statearr_27435_27462[(2)] = inst_27399);

(statearr_27435_27462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (8))){
var inst_27379 = (state_27415[(7)]);
var inst_27388 = (state_27415[(11)]);
var tmp27432 = inst_27379;
var inst_27379__$1 = tmp27432;
var inst_27380 = inst_27388;
var state_27415__$1 = (function (){var statearr_27436 = state_27415;
(statearr_27436[(7)] = inst_27379__$1);

(statearr_27436[(8)] = inst_27380);

return statearr_27436;
})();
var statearr_27437_27463 = state_27415__$1;
(statearr_27437_27463[(2)] = null);

(statearr_27437_27463[(1)] = (2));


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
});})(c__19856__auto___27449,out))
;
return ((function (switch__19791__auto__,c__19856__auto___27449,out){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_27441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27441[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_27441[(1)] = (1));

return statearr_27441;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_27415){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_27415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e27442){if((e27442 instanceof Object)){
var ex__19795__auto__ = e27442;
var statearr_27443_27464 = state_27415;
(statearr_27443_27464[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27465 = state_27415;
state_27415 = G__27465;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_27415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_27415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___27449,out))
})();
var state__19858__auto__ = (function (){var statearr_27444 = f__19857__auto__.call(null);
(statearr_27444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___27449);

return statearr_27444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___27449,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27466 = [];
var len__17395__auto___27540 = arguments.length;
var i__17396__auto___27541 = (0);
while(true){
if((i__17396__auto___27541 < len__17395__auto___27540)){
args27466.push((arguments[i__17396__auto___27541]));

var G__27542 = (i__17396__auto___27541 + (1));
i__17396__auto___27541 = G__27542;
continue;
} else {
}
break;
}

var G__27468 = args27466.length;
switch (G__27468) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27466.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19856__auto___27544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___27544,out){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___27544,out){
return (function (state_27510){
var state_val_27511 = (state_27510[(1)]);
if((state_val_27511 === (7))){
var inst_27506 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27512_27545 = state_27510__$1;
(statearr_27512_27545[(2)] = inst_27506);

(statearr_27512_27545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (1))){
var inst_27469 = [];
var inst_27470 = inst_27469;
var inst_27471 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27510__$1 = (function (){var statearr_27513 = state_27510;
(statearr_27513[(7)] = inst_27471);

(statearr_27513[(8)] = inst_27470);

return statearr_27513;
})();
var statearr_27514_27546 = state_27510__$1;
(statearr_27514_27546[(2)] = null);

(statearr_27514_27546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (4))){
var inst_27474 = (state_27510[(9)]);
var inst_27474__$1 = (state_27510[(2)]);
var inst_27475 = (inst_27474__$1 == null);
var inst_27476 = cljs.core.not.call(null,inst_27475);
var state_27510__$1 = (function (){var statearr_27515 = state_27510;
(statearr_27515[(9)] = inst_27474__$1);

return statearr_27515;
})();
if(inst_27476){
var statearr_27516_27547 = state_27510__$1;
(statearr_27516_27547[(1)] = (5));

} else {
var statearr_27517_27548 = state_27510__$1;
(statearr_27517_27548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (15))){
var inst_27500 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27518_27549 = state_27510__$1;
(statearr_27518_27549[(2)] = inst_27500);

(statearr_27518_27549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (13))){
var state_27510__$1 = state_27510;
var statearr_27519_27550 = state_27510__$1;
(statearr_27519_27550[(2)] = null);

(statearr_27519_27550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (6))){
var inst_27470 = (state_27510[(8)]);
var inst_27495 = inst_27470.length;
var inst_27496 = (inst_27495 > (0));
var state_27510__$1 = state_27510;
if(cljs.core.truth_(inst_27496)){
var statearr_27520_27551 = state_27510__$1;
(statearr_27520_27551[(1)] = (12));

} else {
var statearr_27521_27552 = state_27510__$1;
(statearr_27521_27552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (3))){
var inst_27508 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27510__$1,inst_27508);
} else {
if((state_val_27511 === (12))){
var inst_27470 = (state_27510[(8)]);
var inst_27498 = cljs.core.vec.call(null,inst_27470);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27510__$1,(15),out,inst_27498);
} else {
if((state_val_27511 === (2))){
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27510__$1,(4),ch);
} else {
if((state_val_27511 === (11))){
var inst_27474 = (state_27510[(9)]);
var inst_27478 = (state_27510[(10)]);
var inst_27488 = (state_27510[(2)]);
var inst_27489 = [];
var inst_27490 = inst_27489.push(inst_27474);
var inst_27470 = inst_27489;
var inst_27471 = inst_27478;
var state_27510__$1 = (function (){var statearr_27522 = state_27510;
(statearr_27522[(11)] = inst_27488);

(statearr_27522[(7)] = inst_27471);

(statearr_27522[(8)] = inst_27470);

(statearr_27522[(12)] = inst_27490);

return statearr_27522;
})();
var statearr_27523_27553 = state_27510__$1;
(statearr_27523_27553[(2)] = null);

(statearr_27523_27553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (9))){
var inst_27470 = (state_27510[(8)]);
var inst_27486 = cljs.core.vec.call(null,inst_27470);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27510__$1,(11),out,inst_27486);
} else {
if((state_val_27511 === (5))){
var inst_27474 = (state_27510[(9)]);
var inst_27471 = (state_27510[(7)]);
var inst_27478 = (state_27510[(10)]);
var inst_27478__$1 = f.call(null,inst_27474);
var inst_27479 = cljs.core._EQ_.call(null,inst_27478__$1,inst_27471);
var inst_27480 = cljs.core.keyword_identical_QMARK_.call(null,inst_27471,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27481 = (inst_27479) || (inst_27480);
var state_27510__$1 = (function (){var statearr_27524 = state_27510;
(statearr_27524[(10)] = inst_27478__$1);

return statearr_27524;
})();
if(cljs.core.truth_(inst_27481)){
var statearr_27525_27554 = state_27510__$1;
(statearr_27525_27554[(1)] = (8));

} else {
var statearr_27526_27555 = state_27510__$1;
(statearr_27526_27555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (14))){
var inst_27503 = (state_27510[(2)]);
var inst_27504 = cljs.core.async.close_BANG_.call(null,out);
var state_27510__$1 = (function (){var statearr_27528 = state_27510;
(statearr_27528[(13)] = inst_27503);

return statearr_27528;
})();
var statearr_27529_27556 = state_27510__$1;
(statearr_27529_27556[(2)] = inst_27504);

(statearr_27529_27556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (10))){
var inst_27493 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27530_27557 = state_27510__$1;
(statearr_27530_27557[(2)] = inst_27493);

(statearr_27530_27557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (8))){
var inst_27474 = (state_27510[(9)]);
var inst_27470 = (state_27510[(8)]);
var inst_27478 = (state_27510[(10)]);
var inst_27483 = inst_27470.push(inst_27474);
var tmp27527 = inst_27470;
var inst_27470__$1 = tmp27527;
var inst_27471 = inst_27478;
var state_27510__$1 = (function (){var statearr_27531 = state_27510;
(statearr_27531[(7)] = inst_27471);

(statearr_27531[(8)] = inst_27470__$1);

(statearr_27531[(14)] = inst_27483);

return statearr_27531;
})();
var statearr_27532_27558 = state_27510__$1;
(statearr_27532_27558[(2)] = null);

(statearr_27532_27558[(1)] = (2));


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
});})(c__19856__auto___27544,out))
;
return ((function (switch__19791__auto__,c__19856__auto___27544,out){
return (function() {
var cljs$core$async$state_machine__19792__auto__ = null;
var cljs$core$async$state_machine__19792__auto____0 = (function (){
var statearr_27536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27536[(0)] = cljs$core$async$state_machine__19792__auto__);

(statearr_27536[(1)] = (1));

return statearr_27536;
});
var cljs$core$async$state_machine__19792__auto____1 = (function (state_27510){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_27510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e27537){if((e27537 instanceof Object)){
var ex__19795__auto__ = e27537;
var statearr_27538_27559 = state_27510;
(statearr_27538_27559[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27560 = state_27510;
state_27510 = G__27560;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
cljs$core$async$state_machine__19792__auto__ = function(state_27510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19792__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19792__auto____1.call(this,state_27510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19792__auto____0;
cljs$core$async$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19792__auto____1;
return cljs$core$async$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___27544,out))
})();
var state__19858__auto__ = (function (){var statearr_27539 = f__19857__auto__.call(null);
(statearr_27539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___27544);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___27544,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1442954638872