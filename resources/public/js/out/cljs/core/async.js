// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24494 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24494 = (function (fn_handler,f,meta24495){
this.fn_handler = fn_handler;
this.f = f;
this.meta24495 = meta24495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24496,meta24495__$1){
var self__ = this;
var _24496__$1 = this;
return (new cljs.core.async.t24494(self__.fn_handler,self__.f,meta24495__$1));
});

cljs.core.async.t24494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24496){
var self__ = this;
var _24496__$1 = this;
return self__.meta24495;
});

cljs.core.async.t24494.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24495","meta24495",-752545506,null)], null);
});

cljs.core.async.t24494.cljs$lang$type = true;

cljs.core.async.t24494.cljs$lang$ctorStr = "cljs.core.async/t24494";

cljs.core.async.t24494.cljs$lang$ctorPrWriter = (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t24494");
});

cljs.core.async.__GT_t24494 = (function cljs$core$async$fn_handler_$___GT_t24494(fn_handler__$1,f__$1,meta24495){
return (new cljs.core.async.t24494(fn_handler__$1,f__$1,meta24495));
});

}

return (new cljs.core.async.t24494(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args24499 = [];
var len__17552__auto___24502 = arguments.length;
var i__17553__auto___24503 = (0);
while(true){
if((i__17553__auto___24503 < len__17552__auto___24502)){
args24499.push((arguments[i__17553__auto___24503]));

var G__24504 = (i__17553__auto___24503 + (1));
i__17553__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var G__24501 = args24499.length;
switch (G__24501) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24499.length)].join('')));

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
var args24506 = [];
var len__17552__auto___24509 = arguments.length;
var i__17553__auto___24510 = (0);
while(true){
if((i__17553__auto___24510 < len__17552__auto___24509)){
args24506.push((arguments[i__17553__auto___24510]));

var G__24511 = (i__17553__auto___24510 + (1));
i__17553__auto___24510 = G__24511;
continue;
} else {
}
break;
}

var G__24508 = args24506.length;
switch (G__24508) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24506.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24513 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24513);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24513,ret){
return (function (){
return fn1.call(null,val_24513);
});})(val_24513,ret))
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
var args24514 = [];
var len__17552__auto___24517 = arguments.length;
var i__17553__auto___24518 = (0);
while(true){
if((i__17553__auto___24518 < len__17552__auto___24517)){
args24514.push((arguments[i__17553__auto___24518]));

var G__24519 = (i__17553__auto___24518 + (1));
i__17553__auto___24518 = G__24519;
continue;
} else {
}
break;
}

var G__24516 = args24514.length;
switch (G__24516) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24514.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4411__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4411__auto__)){
var ret = temp__4411__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4411__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4411__auto__)){
var retb = temp__4411__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4411__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4411__auto__))
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
var n__17397__auto___24521 = n;
var x_24522 = (0);
while(true){
if((x_24522 < n__17397__auto___24521)){
(a[x_24522] = (0));

var G__24523 = (x_24522 + (1));
x_24522 = G__24523;
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

var G__24524 = (i + (1));
i = G__24524;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24528 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24528 = (function (alt_flag,flag,meta24529){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24529 = meta24529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24530,meta24529__$1){
var self__ = this;
var _24530__$1 = this;
return (new cljs.core.async.t24528(self__.alt_flag,self__.flag,meta24529__$1));
});})(flag))
;

cljs.core.async.t24528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24530){
var self__ = this;
var _24530__$1 = this;
return self__.meta24529;
});})(flag))
;

cljs.core.async.t24528.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24528.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24529","meta24529",164263602,null)], null);
});})(flag))
;

cljs.core.async.t24528.cljs$lang$type = true;

cljs.core.async.t24528.cljs$lang$ctorStr = "cljs.core.async/t24528";

cljs.core.async.t24528.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t24528");
});})(flag))
;

cljs.core.async.__GT_t24528 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24528(alt_flag__$1,flag__$1,meta24529){
return (new cljs.core.async.t24528(alt_flag__$1,flag__$1,meta24529));
});})(flag))
;

}

return (new cljs.core.async.t24528(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24534 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24534 = (function (alt_handler,flag,cb,meta24535){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24535 = meta24535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24536,meta24535__$1){
var self__ = this;
var _24536__$1 = this;
return (new cljs.core.async.t24534(self__.alt_handler,self__.flag,self__.cb,meta24535__$1));
});

cljs.core.async.t24534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24536){
var self__ = this;
var _24536__$1 = this;
return self__.meta24535;
});

cljs.core.async.t24534.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24535","meta24535",-611960981,null)], null);
});

cljs.core.async.t24534.cljs$lang$type = true;

cljs.core.async.t24534.cljs$lang$ctorStr = "cljs.core.async/t24534";

cljs.core.async.t24534.cljs$lang$ctorPrWriter = (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t24534");
});

cljs.core.async.__GT_t24534 = (function cljs$core$async$alt_handler_$___GT_t24534(alt_handler__$1,flag__$1,cb__$1,meta24535){
return (new cljs.core.async.t24534(alt_handler__$1,flag__$1,cb__$1,meta24535));
});

}

return (new cljs.core.async.t24534(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24537_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24537_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24538_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24538_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16513__auto__ = wport;
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24539 = (i + (1));
i = G__24539;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16513__auto__ = ret;
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4413__auto__ = (function (){var and__16501__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16501__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16501__auto__;
}
})();
if(cljs.core.truth_(temp__4413__auto__)){
var got = temp__4413__auto__;
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
var args__17559__auto__ = [];
var len__17552__auto___24545 = arguments.length;
var i__17553__auto___24546 = (0);
while(true){
if((i__17553__auto___24546 < len__17552__auto___24545)){
args__17559__auto__.push((arguments[i__17553__auto___24546]));

var G__24547 = (i__17553__auto___24546 + (1));
i__17553__auto___24546 = G__24547;
continue;
} else {
}
break;
}

var argseq__17560__auto__ = ((((1) < args__17559__auto__.length))?(new cljs.core.IndexedSeq(args__17559__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17560__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24542){
var map__24543 = p__24542;
var map__24543__$1 = ((((!((map__24543 == null)))?((((map__24543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24543):map__24543);
var opts = map__24543__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24540){
var G__24541 = cljs.core.first.call(null,seq24540);
var seq24540__$1 = cljs.core.next.call(null,seq24540);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24541,seq24540__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args24548 = [];
var len__17552__auto___24598 = arguments.length;
var i__17553__auto___24599 = (0);
while(true){
if((i__17553__auto___24599 < len__17552__auto___24598)){
args24548.push((arguments[i__17553__auto___24599]));

var G__24600 = (i__17553__auto___24599 + (1));
i__17553__auto___24599 = G__24600;
continue;
} else {
}
break;
}

var G__24550 = args24548.length;
switch (G__24550) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24548.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19934__auto___24602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___24602){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___24602){
return (function (state_24574){
var state_val_24575 = (state_24574[(1)]);
if((state_val_24575 === (7))){
var inst_24570 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24576_24603 = state_24574__$1;
(statearr_24576_24603[(2)] = inst_24570);

(statearr_24576_24603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (1))){
var state_24574__$1 = state_24574;
var statearr_24577_24604 = state_24574__$1;
(statearr_24577_24604[(2)] = null);

(statearr_24577_24604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (4))){
var inst_24553 = (state_24574[(7)]);
var inst_24553__$1 = (state_24574[(2)]);
var inst_24554 = (inst_24553__$1 == null);
var state_24574__$1 = (function (){var statearr_24578 = state_24574;
(statearr_24578[(7)] = inst_24553__$1);

return statearr_24578;
})();
if(cljs.core.truth_(inst_24554)){
var statearr_24579_24605 = state_24574__$1;
(statearr_24579_24605[(1)] = (5));

} else {
var statearr_24580_24606 = state_24574__$1;
(statearr_24580_24606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (13))){
var state_24574__$1 = state_24574;
var statearr_24581_24607 = state_24574__$1;
(statearr_24581_24607[(2)] = null);

(statearr_24581_24607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (6))){
var inst_24553 = (state_24574[(7)]);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24574__$1,(11),to,inst_24553);
} else {
if((state_val_24575 === (3))){
var inst_24572 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24574__$1,inst_24572);
} else {
if((state_val_24575 === (12))){
var state_24574__$1 = state_24574;
var statearr_24582_24608 = state_24574__$1;
(statearr_24582_24608[(2)] = null);

(statearr_24582_24608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (2))){
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(4),from);
} else {
if((state_val_24575 === (11))){
var inst_24563 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24563)){
var statearr_24583_24609 = state_24574__$1;
(statearr_24583_24609[(1)] = (12));

} else {
var statearr_24584_24610 = state_24574__$1;
(statearr_24584_24610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (9))){
var state_24574__$1 = state_24574;
var statearr_24585_24611 = state_24574__$1;
(statearr_24585_24611[(2)] = null);

(statearr_24585_24611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (5))){
var state_24574__$1 = state_24574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24586_24612 = state_24574__$1;
(statearr_24586_24612[(1)] = (8));

} else {
var statearr_24587_24613 = state_24574__$1;
(statearr_24587_24613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (14))){
var inst_24568 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24588_24614 = state_24574__$1;
(statearr_24588_24614[(2)] = inst_24568);

(statearr_24588_24614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (10))){
var inst_24560 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24589_24615 = state_24574__$1;
(statearr_24589_24615[(2)] = inst_24560);

(statearr_24589_24615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (8))){
var inst_24557 = cljs.core.async.close_BANG_.call(null,to);
var state_24574__$1 = state_24574;
var statearr_24590_24616 = state_24574__$1;
(statearr_24590_24616[(2)] = inst_24557);

(statearr_24590_24616[(1)] = (10));


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
});})(c__19934__auto___24602))
;
return ((function (switch__19869__auto__,c__19934__auto___24602){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_24594 = [null,null,null,null,null,null,null,null];
(statearr_24594[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_24594[(1)] = (1));

return statearr_24594;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_24574){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_24574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e24595){if((e24595 instanceof Object)){
var ex__19873__auto__ = e24595;
var statearr_24596_24617 = state_24574;
(statearr_24596_24617[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24618 = state_24574;
state_24574 = G__24618;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_24574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_24574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___24602))
})();
var state__19936__auto__ = (function (){var statearr_24597 = f__19935__auto__.call(null);
(statearr_24597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___24602);

return statearr_24597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___24602))
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
return (function (p__24802){
var vec__24803 = p__24802;
var v = cljs.core.nth.call(null,vec__24803,(0),null);
var p = cljs.core.nth.call(null,vec__24803,(1),null);
var job = vec__24803;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19934__auto___24985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___24985,res,vec__24803,v,p,job,jobs,results){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___24985,res,vec__24803,v,p,job,jobs,results){
return (function (state_24808){
var state_val_24809 = (state_24808[(1)]);
if((state_val_24809 === (1))){
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24808__$1,(2),res,v);
} else {
if((state_val_24809 === (2))){
var inst_24805 = (state_24808[(2)]);
var inst_24806 = cljs.core.async.close_BANG_.call(null,res);
var state_24808__$1 = (function (){var statearr_24810 = state_24808;
(statearr_24810[(7)] = inst_24805);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24808__$1,inst_24806);
} else {
return null;
}
}
});})(c__19934__auto___24985,res,vec__24803,v,p,job,jobs,results))
;
return ((function (switch__19869__auto__,c__19934__auto___24985,res,vec__24803,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0 = (function (){
var statearr_24814 = [null,null,null,null,null,null,null,null];
(statearr_24814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__);

(statearr_24814[(1)] = (1));

return statearr_24814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1 = (function (state_24808){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_24808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e24815){if((e24815 instanceof Object)){
var ex__19873__auto__ = e24815;
var statearr_24816_24986 = state_24808;
(statearr_24816_24986[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24987 = state_24808;
state_24808 = G__24987;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = function(state_24808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1.call(this,state_24808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___24985,res,vec__24803,v,p,job,jobs,results))
})();
var state__19936__auto__ = (function (){var statearr_24817 = f__19935__auto__.call(null);
(statearr_24817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___24985);

return statearr_24817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___24985,res,vec__24803,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24818){
var vec__24819 = p__24818;
var v = cljs.core.nth.call(null,vec__24819,(0),null);
var p = cljs.core.nth.call(null,vec__24819,(1),null);
var job = vec__24819;
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
var n__17397__auto___24988 = n;
var __24989 = (0);
while(true){
if((__24989 < n__17397__auto___24988)){
var G__24820_24990 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24820_24990) {
case "compute":
var c__19934__auto___24992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24989,c__19934__auto___24992,G__24820_24990,n__17397__auto___24988,jobs,results,process,async){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (__24989,c__19934__auto___24992,G__24820_24990,n__17397__auto___24988,jobs,results,process,async){
return (function (state_24833){
var state_val_24834 = (state_24833[(1)]);
if((state_val_24834 === (1))){
var state_24833__$1 = state_24833;
var statearr_24835_24993 = state_24833__$1;
(statearr_24835_24993[(2)] = null);

(statearr_24835_24993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (2))){
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24833__$1,(4),jobs);
} else {
if((state_val_24834 === (3))){
var inst_24831 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24833__$1,inst_24831);
} else {
if((state_val_24834 === (4))){
var inst_24823 = (state_24833[(2)]);
var inst_24824 = process.call(null,inst_24823);
var state_24833__$1 = state_24833;
if(cljs.core.truth_(inst_24824)){
var statearr_24836_24994 = state_24833__$1;
(statearr_24836_24994[(1)] = (5));

} else {
var statearr_24837_24995 = state_24833__$1;
(statearr_24837_24995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (5))){
var state_24833__$1 = state_24833;
var statearr_24838_24996 = state_24833__$1;
(statearr_24838_24996[(2)] = null);

(statearr_24838_24996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (6))){
var state_24833__$1 = state_24833;
var statearr_24839_24997 = state_24833__$1;
(statearr_24839_24997[(2)] = null);

(statearr_24839_24997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24834 === (7))){
var inst_24829 = (state_24833[(2)]);
var state_24833__$1 = state_24833;
var statearr_24840_24998 = state_24833__$1;
(statearr_24840_24998[(2)] = inst_24829);

(statearr_24840_24998[(1)] = (3));


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
});})(__24989,c__19934__auto___24992,G__24820_24990,n__17397__auto___24988,jobs,results,process,async))
;
return ((function (__24989,switch__19869__auto__,c__19934__auto___24992,G__24820_24990,n__17397__auto___24988,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0 = (function (){
var statearr_24844 = [null,null,null,null,null,null,null];
(statearr_24844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__);

(statearr_24844[(1)] = (1));

return statearr_24844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1 = (function (state_24833){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_24833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e24845){if((e24845 instanceof Object)){
var ex__19873__auto__ = e24845;
var statearr_24846_24999 = state_24833;
(statearr_24846_24999[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25000 = state_24833;
state_24833 = G__25000;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = function(state_24833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1.call(this,state_24833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__;
})()
;})(__24989,switch__19869__auto__,c__19934__auto___24992,G__24820_24990,n__17397__auto___24988,jobs,results,process,async))
})();
var state__19936__auto__ = (function (){var statearr_24847 = f__19935__auto__.call(null);
(statearr_24847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___24992);

return statearr_24847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(__24989,c__19934__auto___24992,G__24820_24990,n__17397__auto___24988,jobs,results,process,async))
);


break;
case "async":
var c__19934__auto___25001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24989,c__19934__auto___25001,G__24820_24990,n__17397__auto___24988,jobs,results,process,async){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (__24989,c__19934__auto___25001,G__24820_24990,n__17397__auto___24988,jobs,results,process,async){
return (function (state_24860){
var state_val_24861 = (state_24860[(1)]);
if((state_val_24861 === (1))){
var state_24860__$1 = state_24860;
var statearr_24862_25002 = state_24860__$1;
(statearr_24862_25002[(2)] = null);

(statearr_24862_25002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24861 === (2))){
var state_24860__$1 = state_24860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24860__$1,(4),jobs);
} else {
if((state_val_24861 === (3))){
var inst_24858 = (state_24860[(2)]);
var state_24860__$1 = state_24860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24860__$1,inst_24858);
} else {
if((state_val_24861 === (4))){
var inst_24850 = (state_24860[(2)]);
var inst_24851 = async.call(null,inst_24850);
var state_24860__$1 = state_24860;
if(cljs.core.truth_(inst_24851)){
var statearr_24863_25003 = state_24860__$1;
(statearr_24863_25003[(1)] = (5));

} else {
var statearr_24864_25004 = state_24860__$1;
(statearr_24864_25004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24861 === (5))){
var state_24860__$1 = state_24860;
var statearr_24865_25005 = state_24860__$1;
(statearr_24865_25005[(2)] = null);

(statearr_24865_25005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24861 === (6))){
var state_24860__$1 = state_24860;
var statearr_24866_25006 = state_24860__$1;
(statearr_24866_25006[(2)] = null);

(statearr_24866_25006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24861 === (7))){
var inst_24856 = (state_24860[(2)]);
var state_24860__$1 = state_24860;
var statearr_24867_25007 = state_24860__$1;
(statearr_24867_25007[(2)] = inst_24856);

(statearr_24867_25007[(1)] = (3));


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
});})(__24989,c__19934__auto___25001,G__24820_24990,n__17397__auto___24988,jobs,results,process,async))
;
return ((function (__24989,switch__19869__auto__,c__19934__auto___25001,G__24820_24990,n__17397__auto___24988,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0 = (function (){
var statearr_24871 = [null,null,null,null,null,null,null];
(statearr_24871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__);

(statearr_24871[(1)] = (1));

return statearr_24871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1 = (function (state_24860){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_24860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e24872){if((e24872 instanceof Object)){
var ex__19873__auto__ = e24872;
var statearr_24873_25008 = state_24860;
(statearr_24873_25008[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25009 = state_24860;
state_24860 = G__25009;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = function(state_24860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1.call(this,state_24860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__;
})()
;})(__24989,switch__19869__auto__,c__19934__auto___25001,G__24820_24990,n__17397__auto___24988,jobs,results,process,async))
})();
var state__19936__auto__ = (function (){var statearr_24874 = f__19935__auto__.call(null);
(statearr_24874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___25001);

return statearr_24874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(__24989,c__19934__auto___25001,G__24820_24990,n__17397__auto___24988,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25010 = (__24989 + (1));
__24989 = G__25010;
continue;
} else {
}
break;
}

var c__19934__auto___25011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___25011,jobs,results,process,async){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___25011,jobs,results,process,async){
return (function (state_24896){
var state_val_24897 = (state_24896[(1)]);
if((state_val_24897 === (1))){
var state_24896__$1 = state_24896;
var statearr_24898_25012 = state_24896__$1;
(statearr_24898_25012[(2)] = null);

(statearr_24898_25012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24897 === (2))){
var state_24896__$1 = state_24896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24896__$1,(4),from);
} else {
if((state_val_24897 === (3))){
var inst_24894 = (state_24896[(2)]);
var state_24896__$1 = state_24896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24896__$1,inst_24894);
} else {
if((state_val_24897 === (4))){
var inst_24877 = (state_24896[(7)]);
var inst_24877__$1 = (state_24896[(2)]);
var inst_24878 = (inst_24877__$1 == null);
var state_24896__$1 = (function (){var statearr_24899 = state_24896;
(statearr_24899[(7)] = inst_24877__$1);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24878)){
var statearr_24900_25013 = state_24896__$1;
(statearr_24900_25013[(1)] = (5));

} else {
var statearr_24901_25014 = state_24896__$1;
(statearr_24901_25014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24897 === (5))){
var inst_24880 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24896__$1 = state_24896;
var statearr_24902_25015 = state_24896__$1;
(statearr_24902_25015[(2)] = inst_24880);

(statearr_24902_25015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24897 === (6))){
var inst_24882 = (state_24896[(8)]);
var inst_24877 = (state_24896[(7)]);
var inst_24882__$1 = cljs.core.async.chan.call(null,(1));
var inst_24883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24884 = [inst_24877,inst_24882__$1];
var inst_24885 = (new cljs.core.PersistentVector(null,2,(5),inst_24883,inst_24884,null));
var state_24896__$1 = (function (){var statearr_24903 = state_24896;
(statearr_24903[(8)] = inst_24882__$1);

return statearr_24903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24896__$1,(8),jobs,inst_24885);
} else {
if((state_val_24897 === (7))){
var inst_24892 = (state_24896[(2)]);
var state_24896__$1 = state_24896;
var statearr_24904_25016 = state_24896__$1;
(statearr_24904_25016[(2)] = inst_24892);

(statearr_24904_25016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24897 === (8))){
var inst_24882 = (state_24896[(8)]);
var inst_24887 = (state_24896[(2)]);
var state_24896__$1 = (function (){var statearr_24905 = state_24896;
(statearr_24905[(9)] = inst_24887);

return statearr_24905;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24896__$1,(9),results,inst_24882);
} else {
if((state_val_24897 === (9))){
var inst_24889 = (state_24896[(2)]);
var state_24896__$1 = (function (){var statearr_24906 = state_24896;
(statearr_24906[(10)] = inst_24889);

return statearr_24906;
})();
var statearr_24907_25017 = state_24896__$1;
(statearr_24907_25017[(2)] = null);

(statearr_24907_25017[(1)] = (2));


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
});})(c__19934__auto___25011,jobs,results,process,async))
;
return ((function (switch__19869__auto__,c__19934__auto___25011,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0 = (function (){
var statearr_24911 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__);

(statearr_24911[(1)] = (1));

return statearr_24911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1 = (function (state_24896){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_24896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e24912){if((e24912 instanceof Object)){
var ex__19873__auto__ = e24912;
var statearr_24913_25018 = state_24896;
(statearr_24913_25018[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25019 = state_24896;
state_24896 = G__25019;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = function(state_24896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1.call(this,state_24896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___25011,jobs,results,process,async))
})();
var state__19936__auto__ = (function (){var statearr_24914 = f__19935__auto__.call(null);
(statearr_24914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___25011);

return statearr_24914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___25011,jobs,results,process,async))
);


var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__,jobs,results,process,async){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__,jobs,results,process,async){
return (function (state_24952){
var state_val_24953 = (state_24952[(1)]);
if((state_val_24953 === (7))){
var inst_24948 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
var statearr_24954_25020 = state_24952__$1;
(statearr_24954_25020[(2)] = inst_24948);

(statearr_24954_25020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (20))){
var state_24952__$1 = state_24952;
var statearr_24955_25021 = state_24952__$1;
(statearr_24955_25021[(2)] = null);

(statearr_24955_25021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (1))){
var state_24952__$1 = state_24952;
var statearr_24956_25022 = state_24952__$1;
(statearr_24956_25022[(2)] = null);

(statearr_24956_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (4))){
var inst_24917 = (state_24952[(7)]);
var inst_24917__$1 = (state_24952[(2)]);
var inst_24918 = (inst_24917__$1 == null);
var state_24952__$1 = (function (){var statearr_24957 = state_24952;
(statearr_24957[(7)] = inst_24917__$1);

return statearr_24957;
})();
if(cljs.core.truth_(inst_24918)){
var statearr_24958_25023 = state_24952__$1;
(statearr_24958_25023[(1)] = (5));

} else {
var statearr_24959_25024 = state_24952__$1;
(statearr_24959_25024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (15))){
var inst_24930 = (state_24952[(8)]);
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24952__$1,(18),to,inst_24930);
} else {
if((state_val_24953 === (21))){
var inst_24943 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
var statearr_24960_25025 = state_24952__$1;
(statearr_24960_25025[(2)] = inst_24943);

(statearr_24960_25025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (13))){
var inst_24945 = (state_24952[(2)]);
var state_24952__$1 = (function (){var statearr_24961 = state_24952;
(statearr_24961[(9)] = inst_24945);

return statearr_24961;
})();
var statearr_24962_25026 = state_24952__$1;
(statearr_24962_25026[(2)] = null);

(statearr_24962_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (6))){
var inst_24917 = (state_24952[(7)]);
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24952__$1,(11),inst_24917);
} else {
if((state_val_24953 === (17))){
var inst_24938 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
if(cljs.core.truth_(inst_24938)){
var statearr_24963_25027 = state_24952__$1;
(statearr_24963_25027[(1)] = (19));

} else {
var statearr_24964_25028 = state_24952__$1;
(statearr_24964_25028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (3))){
var inst_24950 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24952__$1,inst_24950);
} else {
if((state_val_24953 === (12))){
var inst_24927 = (state_24952[(10)]);
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24952__$1,(14),inst_24927);
} else {
if((state_val_24953 === (2))){
var state_24952__$1 = state_24952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24952__$1,(4),results);
} else {
if((state_val_24953 === (19))){
var state_24952__$1 = state_24952;
var statearr_24965_25029 = state_24952__$1;
(statearr_24965_25029[(2)] = null);

(statearr_24965_25029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (11))){
var inst_24927 = (state_24952[(2)]);
var state_24952__$1 = (function (){var statearr_24966 = state_24952;
(statearr_24966[(10)] = inst_24927);

return statearr_24966;
})();
var statearr_24967_25030 = state_24952__$1;
(statearr_24967_25030[(2)] = null);

(statearr_24967_25030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (9))){
var state_24952__$1 = state_24952;
var statearr_24968_25031 = state_24952__$1;
(statearr_24968_25031[(2)] = null);

(statearr_24968_25031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (5))){
var state_24952__$1 = state_24952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24969_25032 = state_24952__$1;
(statearr_24969_25032[(1)] = (8));

} else {
var statearr_24970_25033 = state_24952__$1;
(statearr_24970_25033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (14))){
var inst_24930 = (state_24952[(8)]);
var inst_24932 = (state_24952[(11)]);
var inst_24930__$1 = (state_24952[(2)]);
var inst_24931 = (inst_24930__$1 == null);
var inst_24932__$1 = cljs.core.not.call(null,inst_24931);
var state_24952__$1 = (function (){var statearr_24971 = state_24952;
(statearr_24971[(8)] = inst_24930__$1);

(statearr_24971[(11)] = inst_24932__$1);

return statearr_24971;
})();
if(inst_24932__$1){
var statearr_24972_25034 = state_24952__$1;
(statearr_24972_25034[(1)] = (15));

} else {
var statearr_24973_25035 = state_24952__$1;
(statearr_24973_25035[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (16))){
var inst_24932 = (state_24952[(11)]);
var state_24952__$1 = state_24952;
var statearr_24974_25036 = state_24952__$1;
(statearr_24974_25036[(2)] = inst_24932);

(statearr_24974_25036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (10))){
var inst_24924 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
var statearr_24975_25037 = state_24952__$1;
(statearr_24975_25037[(2)] = inst_24924);

(statearr_24975_25037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (18))){
var inst_24935 = (state_24952[(2)]);
var state_24952__$1 = state_24952;
var statearr_24976_25038 = state_24952__$1;
(statearr_24976_25038[(2)] = inst_24935);

(statearr_24976_25038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24953 === (8))){
var inst_24921 = cljs.core.async.close_BANG_.call(null,to);
var state_24952__$1 = state_24952;
var statearr_24977_25039 = state_24952__$1;
(statearr_24977_25039[(2)] = inst_24921);

(statearr_24977_25039[(1)] = (10));


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
});})(c__19934__auto__,jobs,results,process,async))
;
return ((function (switch__19869__auto__,c__19934__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0 = (function (){
var statearr_24981 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__);

(statearr_24981[(1)] = (1));

return statearr_24981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1 = (function (state_24952){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_24952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e24982){if((e24982 instanceof Object)){
var ex__19873__auto__ = e24982;
var statearr_24983_25040 = state_24952;
(statearr_24983_25040[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25041 = state_24952;
state_24952 = G__25041;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__ = function(state_24952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1.call(this,state_24952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19870__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__,jobs,results,process,async))
})();
var state__19936__auto__ = (function (){var statearr_24984 = f__19935__auto__.call(null);
(statearr_24984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_24984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__,jobs,results,process,async))
);

return c__19934__auto__;
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
var args25042 = [];
var len__17552__auto___25045 = arguments.length;
var i__17553__auto___25046 = (0);
while(true){
if((i__17553__auto___25046 < len__17552__auto___25045)){
args25042.push((arguments[i__17553__auto___25046]));

var G__25047 = (i__17553__auto___25046 + (1));
i__17553__auto___25046 = G__25047;
continue;
} else {
}
break;
}

var G__25044 = args25042.length;
switch (G__25044) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25042.length)].join('')));

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
var args25049 = [];
var len__17552__auto___25052 = arguments.length;
var i__17553__auto___25053 = (0);
while(true){
if((i__17553__auto___25053 < len__17552__auto___25052)){
args25049.push((arguments[i__17553__auto___25053]));

var G__25054 = (i__17553__auto___25053 + (1));
i__17553__auto___25053 = G__25054;
continue;
} else {
}
break;
}

var G__25051 = args25049.length;
switch (G__25051) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25049.length)].join('')));

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
var args25056 = [];
var len__17552__auto___25109 = arguments.length;
var i__17553__auto___25110 = (0);
while(true){
if((i__17553__auto___25110 < len__17552__auto___25109)){
args25056.push((arguments[i__17553__auto___25110]));

var G__25111 = (i__17553__auto___25110 + (1));
i__17553__auto___25110 = G__25111;
continue;
} else {
}
break;
}

var G__25058 = args25056.length;
switch (G__25058) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25056.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19934__auto___25113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___25113,tc,fc){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___25113,tc,fc){
return (function (state_25084){
var state_val_25085 = (state_25084[(1)]);
if((state_val_25085 === (7))){
var inst_25080 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25086_25114 = state_25084__$1;
(statearr_25086_25114[(2)] = inst_25080);

(statearr_25086_25114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (1))){
var state_25084__$1 = state_25084;
var statearr_25087_25115 = state_25084__$1;
(statearr_25087_25115[(2)] = null);

(statearr_25087_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (4))){
var inst_25061 = (state_25084[(7)]);
var inst_25061__$1 = (state_25084[(2)]);
var inst_25062 = (inst_25061__$1 == null);
var state_25084__$1 = (function (){var statearr_25088 = state_25084;
(statearr_25088[(7)] = inst_25061__$1);

return statearr_25088;
})();
if(cljs.core.truth_(inst_25062)){
var statearr_25089_25116 = state_25084__$1;
(statearr_25089_25116[(1)] = (5));

} else {
var statearr_25090_25117 = state_25084__$1;
(statearr_25090_25117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (13))){
var state_25084__$1 = state_25084;
var statearr_25091_25118 = state_25084__$1;
(statearr_25091_25118[(2)] = null);

(statearr_25091_25118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (6))){
var inst_25061 = (state_25084[(7)]);
var inst_25067 = p.call(null,inst_25061);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25067)){
var statearr_25092_25119 = state_25084__$1;
(statearr_25092_25119[(1)] = (9));

} else {
var statearr_25093_25120 = state_25084__$1;
(statearr_25093_25120[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (3))){
var inst_25082 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25084__$1,inst_25082);
} else {
if((state_val_25085 === (12))){
var state_25084__$1 = state_25084;
var statearr_25094_25121 = state_25084__$1;
(statearr_25094_25121[(2)] = null);

(statearr_25094_25121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (2))){
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(4),ch);
} else {
if((state_val_25085 === (11))){
var inst_25061 = (state_25084[(7)]);
var inst_25071 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25084__$1,(8),inst_25071,inst_25061);
} else {
if((state_val_25085 === (9))){
var state_25084__$1 = state_25084;
var statearr_25095_25122 = state_25084__$1;
(statearr_25095_25122[(2)] = tc);

(statearr_25095_25122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (5))){
var inst_25064 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25065 = cljs.core.async.close_BANG_.call(null,fc);
var state_25084__$1 = (function (){var statearr_25096 = state_25084;
(statearr_25096[(8)] = inst_25064);

return statearr_25096;
})();
var statearr_25097_25123 = state_25084__$1;
(statearr_25097_25123[(2)] = inst_25065);

(statearr_25097_25123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (14))){
var inst_25078 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25098_25124 = state_25084__$1;
(statearr_25098_25124[(2)] = inst_25078);

(statearr_25098_25124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (10))){
var state_25084__$1 = state_25084;
var statearr_25099_25125 = state_25084__$1;
(statearr_25099_25125[(2)] = fc);

(statearr_25099_25125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (8))){
var inst_25073 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25073)){
var statearr_25100_25126 = state_25084__$1;
(statearr_25100_25126[(1)] = (12));

} else {
var statearr_25101_25127 = state_25084__$1;
(statearr_25101_25127[(1)] = (13));

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
});})(c__19934__auto___25113,tc,fc))
;
return ((function (switch__19869__auto__,c__19934__auto___25113,tc,fc){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_25105 = [null,null,null,null,null,null,null,null,null];
(statearr_25105[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_25105[(1)] = (1));

return statearr_25105;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_25084){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_25084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e25106){if((e25106 instanceof Object)){
var ex__19873__auto__ = e25106;
var statearr_25107_25128 = state_25084;
(statearr_25107_25128[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25129 = state_25084;
state_25084 = G__25129;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_25084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_25084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___25113,tc,fc))
})();
var state__19936__auto__ = (function (){var statearr_25108 = f__19935__auto__.call(null);
(statearr_25108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___25113);

return statearr_25108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___25113,tc,fc))
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
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_25176){
var state_val_25177 = (state_25176[(1)]);
if((state_val_25177 === (1))){
var inst_25162 = init;
var state_25176__$1 = (function (){var statearr_25178 = state_25176;
(statearr_25178[(7)] = inst_25162);

return statearr_25178;
})();
var statearr_25179_25194 = state_25176__$1;
(statearr_25179_25194[(2)] = null);

(statearr_25179_25194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (2))){
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25176__$1,(4),ch);
} else {
if((state_val_25177 === (3))){
var inst_25174 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25176__$1,inst_25174);
} else {
if((state_val_25177 === (4))){
var inst_25165 = (state_25176[(8)]);
var inst_25165__$1 = (state_25176[(2)]);
var inst_25166 = (inst_25165__$1 == null);
var state_25176__$1 = (function (){var statearr_25180 = state_25176;
(statearr_25180[(8)] = inst_25165__$1);

return statearr_25180;
})();
if(cljs.core.truth_(inst_25166)){
var statearr_25181_25195 = state_25176__$1;
(statearr_25181_25195[(1)] = (5));

} else {
var statearr_25182_25196 = state_25176__$1;
(statearr_25182_25196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (5))){
var inst_25162 = (state_25176[(7)]);
var state_25176__$1 = state_25176;
var statearr_25183_25197 = state_25176__$1;
(statearr_25183_25197[(2)] = inst_25162);

(statearr_25183_25197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (6))){
var inst_25162 = (state_25176[(7)]);
var inst_25165 = (state_25176[(8)]);
var inst_25169 = f.call(null,inst_25162,inst_25165);
var inst_25162__$1 = inst_25169;
var state_25176__$1 = (function (){var statearr_25184 = state_25176;
(statearr_25184[(7)] = inst_25162__$1);

return statearr_25184;
})();
var statearr_25185_25198 = state_25176__$1;
(statearr_25185_25198[(2)] = null);

(statearr_25185_25198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (7))){
var inst_25172 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25186_25199 = state_25176__$1;
(statearr_25186_25199[(2)] = inst_25172);

(statearr_25186_25199[(1)] = (3));


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
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19870__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19870__auto____0 = (function (){
var statearr_25190 = [null,null,null,null,null,null,null,null,null];
(statearr_25190[(0)] = cljs$core$async$reduce_$_state_machine__19870__auto__);

(statearr_25190[(1)] = (1));

return statearr_25190;
});
var cljs$core$async$reduce_$_state_machine__19870__auto____1 = (function (state_25176){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_25176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e25191){if((e25191 instanceof Object)){
var ex__19873__auto__ = e25191;
var statearr_25192_25200 = state_25176;
(statearr_25192_25200[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25201 = state_25176;
state_25176 = G__25201;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19870__auto__ = function(state_25176){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19870__auto____1.call(this,state_25176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19870__auto____0;
cljs$core$async$reduce_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19870__auto____1;
return cljs$core$async$reduce_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_25193 = f__19935__auto__.call(null);
(statearr_25193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_25193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
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
var args25202 = [];
var len__17552__auto___25254 = arguments.length;
var i__17553__auto___25255 = (0);
while(true){
if((i__17553__auto___25255 < len__17552__auto___25254)){
args25202.push((arguments[i__17553__auto___25255]));

var G__25256 = (i__17553__auto___25255 + (1));
i__17553__auto___25255 = G__25256;
continue;
} else {
}
break;
}

var G__25204 = args25202.length;
switch (G__25204) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25202.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_25229){
var state_val_25230 = (state_25229[(1)]);
if((state_val_25230 === (7))){
var inst_25211 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
var statearr_25231_25258 = state_25229__$1;
(statearr_25231_25258[(2)] = inst_25211);

(statearr_25231_25258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (1))){
var inst_25205 = cljs.core.seq.call(null,coll);
var inst_25206 = inst_25205;
var state_25229__$1 = (function (){var statearr_25232 = state_25229;
(statearr_25232[(7)] = inst_25206);

return statearr_25232;
})();
var statearr_25233_25259 = state_25229__$1;
(statearr_25233_25259[(2)] = null);

(statearr_25233_25259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (4))){
var inst_25206 = (state_25229[(7)]);
var inst_25209 = cljs.core.first.call(null,inst_25206);
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25229__$1,(7),ch,inst_25209);
} else {
if((state_val_25230 === (13))){
var inst_25223 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
var statearr_25234_25260 = state_25229__$1;
(statearr_25234_25260[(2)] = inst_25223);

(statearr_25234_25260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (6))){
var inst_25214 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
if(cljs.core.truth_(inst_25214)){
var statearr_25235_25261 = state_25229__$1;
(statearr_25235_25261[(1)] = (8));

} else {
var statearr_25236_25262 = state_25229__$1;
(statearr_25236_25262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (3))){
var inst_25227 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25229__$1,inst_25227);
} else {
if((state_val_25230 === (12))){
var state_25229__$1 = state_25229;
var statearr_25237_25263 = state_25229__$1;
(statearr_25237_25263[(2)] = null);

(statearr_25237_25263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (2))){
var inst_25206 = (state_25229[(7)]);
var state_25229__$1 = state_25229;
if(cljs.core.truth_(inst_25206)){
var statearr_25238_25264 = state_25229__$1;
(statearr_25238_25264[(1)] = (4));

} else {
var statearr_25239_25265 = state_25229__$1;
(statearr_25239_25265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (11))){
var inst_25220 = cljs.core.async.close_BANG_.call(null,ch);
var state_25229__$1 = state_25229;
var statearr_25240_25266 = state_25229__$1;
(statearr_25240_25266[(2)] = inst_25220);

(statearr_25240_25266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (9))){
var state_25229__$1 = state_25229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25241_25267 = state_25229__$1;
(statearr_25241_25267[(1)] = (11));

} else {
var statearr_25242_25268 = state_25229__$1;
(statearr_25242_25268[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (5))){
var inst_25206 = (state_25229[(7)]);
var state_25229__$1 = state_25229;
var statearr_25243_25269 = state_25229__$1;
(statearr_25243_25269[(2)] = inst_25206);

(statearr_25243_25269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (10))){
var inst_25225 = (state_25229[(2)]);
var state_25229__$1 = state_25229;
var statearr_25244_25270 = state_25229__$1;
(statearr_25244_25270[(2)] = inst_25225);

(statearr_25244_25270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25230 === (8))){
var inst_25206 = (state_25229[(7)]);
var inst_25216 = cljs.core.next.call(null,inst_25206);
var inst_25206__$1 = inst_25216;
var state_25229__$1 = (function (){var statearr_25245 = state_25229;
(statearr_25245[(7)] = inst_25206__$1);

return statearr_25245;
})();
var statearr_25246_25271 = state_25229__$1;
(statearr_25246_25271[(2)] = null);

(statearr_25246_25271[(1)] = (2));


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
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_25250 = [null,null,null,null,null,null,null,null];
(statearr_25250[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_25250[(1)] = (1));

return statearr_25250;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_25229){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_25229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e25251){if((e25251 instanceof Object)){
var ex__19873__auto__ = e25251;
var statearr_25252_25272 = state_25229;
(statearr_25252_25272[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25273 = state_25229;
state_25229 = G__25273;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_25229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_25229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_25253 = f__19935__auto__.call(null);
(statearr_25253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_25253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
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

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17149__auto__ = (((_ == null))?null:_);
var m__17150__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,_);
} else {
var m__17150__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17150__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m,ch);
} else {
var m__17150__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m,ch);
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
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m);
} else {
var m__17150__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t25499 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25499 = (function (mult,ch,cs,meta25500){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25500 = meta25500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25501,meta25500__$1){
var self__ = this;
var _25501__$1 = this;
return (new cljs.core.async.t25499(self__.mult,self__.ch,self__.cs,meta25500__$1));
});})(cs))
;

cljs.core.async.t25499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25501){
var self__ = this;
var _25501__$1 = this;
return self__.meta25500;
});})(cs))
;

cljs.core.async.t25499.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25499.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25499.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25499.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25499.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25499.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25500","meta25500",-430733506,null)], null);
});})(cs))
;

cljs.core.async.t25499.cljs$lang$type = true;

cljs.core.async.t25499.cljs$lang$ctorStr = "cljs.core.async/t25499";

cljs.core.async.t25499.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t25499");
});})(cs))
;

cljs.core.async.__GT_t25499 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25499(mult__$1,ch__$1,cs__$1,meta25500){
return (new cljs.core.async.t25499(mult__$1,ch__$1,cs__$1,meta25500));
});})(cs))
;

}

return (new cljs.core.async.t25499(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19934__auto___25720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___25720,cs,m,dchan,dctr,done){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___25720,cs,m,dchan,dctr,done){
return (function (state_25632){
var state_val_25633 = (state_25632[(1)]);
if((state_val_25633 === (7))){
var inst_25628 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25634_25721 = state_25632__$1;
(statearr_25634_25721[(2)] = inst_25628);

(statearr_25634_25721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (20))){
var inst_25533 = (state_25632[(7)]);
var inst_25543 = cljs.core.first.call(null,inst_25533);
var inst_25544 = cljs.core.nth.call(null,inst_25543,(0),null);
var inst_25545 = cljs.core.nth.call(null,inst_25543,(1),null);
var state_25632__$1 = (function (){var statearr_25635 = state_25632;
(statearr_25635[(8)] = inst_25544);

return statearr_25635;
})();
if(cljs.core.truth_(inst_25545)){
var statearr_25636_25722 = state_25632__$1;
(statearr_25636_25722[(1)] = (22));

} else {
var statearr_25637_25723 = state_25632__$1;
(statearr_25637_25723[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (27))){
var inst_25575 = (state_25632[(9)]);
var inst_25573 = (state_25632[(10)]);
var inst_25580 = (state_25632[(11)]);
var inst_25504 = (state_25632[(12)]);
var inst_25580__$1 = cljs.core._nth.call(null,inst_25573,inst_25575);
var inst_25581 = cljs.core.async.put_BANG_.call(null,inst_25580__$1,inst_25504,done);
var state_25632__$1 = (function (){var statearr_25638 = state_25632;
(statearr_25638[(11)] = inst_25580__$1);

return statearr_25638;
})();
if(cljs.core.truth_(inst_25581)){
var statearr_25639_25724 = state_25632__$1;
(statearr_25639_25724[(1)] = (30));

} else {
var statearr_25640_25725 = state_25632__$1;
(statearr_25640_25725[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (1))){
var state_25632__$1 = state_25632;
var statearr_25641_25726 = state_25632__$1;
(statearr_25641_25726[(2)] = null);

(statearr_25641_25726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (24))){
var inst_25533 = (state_25632[(7)]);
var inst_25550 = (state_25632[(2)]);
var inst_25551 = cljs.core.next.call(null,inst_25533);
var inst_25513 = inst_25551;
var inst_25514 = null;
var inst_25515 = (0);
var inst_25516 = (0);
var state_25632__$1 = (function (){var statearr_25642 = state_25632;
(statearr_25642[(13)] = inst_25516);

(statearr_25642[(14)] = inst_25513);

(statearr_25642[(15)] = inst_25550);

(statearr_25642[(16)] = inst_25514);

(statearr_25642[(17)] = inst_25515);

return statearr_25642;
})();
var statearr_25643_25727 = state_25632__$1;
(statearr_25643_25727[(2)] = null);

(statearr_25643_25727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (39))){
var state_25632__$1 = state_25632;
var statearr_25647_25728 = state_25632__$1;
(statearr_25647_25728[(2)] = null);

(statearr_25647_25728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (4))){
var inst_25504 = (state_25632[(12)]);
var inst_25504__$1 = (state_25632[(2)]);
var inst_25505 = (inst_25504__$1 == null);
var state_25632__$1 = (function (){var statearr_25648 = state_25632;
(statearr_25648[(12)] = inst_25504__$1);

return statearr_25648;
})();
if(cljs.core.truth_(inst_25505)){
var statearr_25649_25729 = state_25632__$1;
(statearr_25649_25729[(1)] = (5));

} else {
var statearr_25650_25730 = state_25632__$1;
(statearr_25650_25730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (15))){
var inst_25516 = (state_25632[(13)]);
var inst_25513 = (state_25632[(14)]);
var inst_25514 = (state_25632[(16)]);
var inst_25515 = (state_25632[(17)]);
var inst_25529 = (state_25632[(2)]);
var inst_25530 = (inst_25516 + (1));
var tmp25644 = inst_25513;
var tmp25645 = inst_25514;
var tmp25646 = inst_25515;
var inst_25513__$1 = tmp25644;
var inst_25514__$1 = tmp25645;
var inst_25515__$1 = tmp25646;
var inst_25516__$1 = inst_25530;
var state_25632__$1 = (function (){var statearr_25651 = state_25632;
(statearr_25651[(13)] = inst_25516__$1);

(statearr_25651[(14)] = inst_25513__$1);

(statearr_25651[(16)] = inst_25514__$1);

(statearr_25651[(17)] = inst_25515__$1);

(statearr_25651[(18)] = inst_25529);

return statearr_25651;
})();
var statearr_25652_25731 = state_25632__$1;
(statearr_25652_25731[(2)] = null);

(statearr_25652_25731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (21))){
var inst_25554 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25656_25732 = state_25632__$1;
(statearr_25656_25732[(2)] = inst_25554);

(statearr_25656_25732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (31))){
var inst_25580 = (state_25632[(11)]);
var inst_25584 = done.call(null,null);
var inst_25585 = cljs.core.async.untap_STAR_.call(null,m,inst_25580);
var state_25632__$1 = (function (){var statearr_25657 = state_25632;
(statearr_25657[(19)] = inst_25584);

return statearr_25657;
})();
var statearr_25658_25733 = state_25632__$1;
(statearr_25658_25733[(2)] = inst_25585);

(statearr_25658_25733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (32))){
var inst_25575 = (state_25632[(9)]);
var inst_25573 = (state_25632[(10)]);
var inst_25574 = (state_25632[(20)]);
var inst_25572 = (state_25632[(21)]);
var inst_25587 = (state_25632[(2)]);
var inst_25588 = (inst_25575 + (1));
var tmp25653 = inst_25573;
var tmp25654 = inst_25574;
var tmp25655 = inst_25572;
var inst_25572__$1 = tmp25655;
var inst_25573__$1 = tmp25653;
var inst_25574__$1 = tmp25654;
var inst_25575__$1 = inst_25588;
var state_25632__$1 = (function (){var statearr_25659 = state_25632;
(statearr_25659[(9)] = inst_25575__$1);

(statearr_25659[(22)] = inst_25587);

(statearr_25659[(10)] = inst_25573__$1);

(statearr_25659[(20)] = inst_25574__$1);

(statearr_25659[(21)] = inst_25572__$1);

return statearr_25659;
})();
var statearr_25660_25734 = state_25632__$1;
(statearr_25660_25734[(2)] = null);

(statearr_25660_25734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (40))){
var inst_25600 = (state_25632[(23)]);
var inst_25604 = done.call(null,null);
var inst_25605 = cljs.core.async.untap_STAR_.call(null,m,inst_25600);
var state_25632__$1 = (function (){var statearr_25661 = state_25632;
(statearr_25661[(24)] = inst_25604);

return statearr_25661;
})();
var statearr_25662_25735 = state_25632__$1;
(statearr_25662_25735[(2)] = inst_25605);

(statearr_25662_25735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (33))){
var inst_25591 = (state_25632[(25)]);
var inst_25593 = cljs.core.chunked_seq_QMARK_.call(null,inst_25591);
var state_25632__$1 = state_25632;
if(inst_25593){
var statearr_25663_25736 = state_25632__$1;
(statearr_25663_25736[(1)] = (36));

} else {
var statearr_25664_25737 = state_25632__$1;
(statearr_25664_25737[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (13))){
var inst_25523 = (state_25632[(26)]);
var inst_25526 = cljs.core.async.close_BANG_.call(null,inst_25523);
var state_25632__$1 = state_25632;
var statearr_25665_25738 = state_25632__$1;
(statearr_25665_25738[(2)] = inst_25526);

(statearr_25665_25738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (22))){
var inst_25544 = (state_25632[(8)]);
var inst_25547 = cljs.core.async.close_BANG_.call(null,inst_25544);
var state_25632__$1 = state_25632;
var statearr_25666_25739 = state_25632__$1;
(statearr_25666_25739[(2)] = inst_25547);

(statearr_25666_25739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (36))){
var inst_25591 = (state_25632[(25)]);
var inst_25595 = cljs.core.chunk_first.call(null,inst_25591);
var inst_25596 = cljs.core.chunk_rest.call(null,inst_25591);
var inst_25597 = cljs.core.count.call(null,inst_25595);
var inst_25572 = inst_25596;
var inst_25573 = inst_25595;
var inst_25574 = inst_25597;
var inst_25575 = (0);
var state_25632__$1 = (function (){var statearr_25667 = state_25632;
(statearr_25667[(9)] = inst_25575);

(statearr_25667[(10)] = inst_25573);

(statearr_25667[(20)] = inst_25574);

(statearr_25667[(21)] = inst_25572);

return statearr_25667;
})();
var statearr_25668_25740 = state_25632__$1;
(statearr_25668_25740[(2)] = null);

(statearr_25668_25740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (41))){
var inst_25591 = (state_25632[(25)]);
var inst_25607 = (state_25632[(2)]);
var inst_25608 = cljs.core.next.call(null,inst_25591);
var inst_25572 = inst_25608;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25632__$1 = (function (){var statearr_25669 = state_25632;
(statearr_25669[(9)] = inst_25575);

(statearr_25669[(10)] = inst_25573);

(statearr_25669[(20)] = inst_25574);

(statearr_25669[(27)] = inst_25607);

(statearr_25669[(21)] = inst_25572);

return statearr_25669;
})();
var statearr_25670_25741 = state_25632__$1;
(statearr_25670_25741[(2)] = null);

(statearr_25670_25741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (43))){
var state_25632__$1 = state_25632;
var statearr_25671_25742 = state_25632__$1;
(statearr_25671_25742[(2)] = null);

(statearr_25671_25742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (29))){
var inst_25616 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25672_25743 = state_25632__$1;
(statearr_25672_25743[(2)] = inst_25616);

(statearr_25672_25743[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (44))){
var inst_25625 = (state_25632[(2)]);
var state_25632__$1 = (function (){var statearr_25673 = state_25632;
(statearr_25673[(28)] = inst_25625);

return statearr_25673;
})();
var statearr_25674_25744 = state_25632__$1;
(statearr_25674_25744[(2)] = null);

(statearr_25674_25744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (6))){
var inst_25564 = (state_25632[(29)]);
var inst_25563 = cljs.core.deref.call(null,cs);
var inst_25564__$1 = cljs.core.keys.call(null,inst_25563);
var inst_25565 = cljs.core.count.call(null,inst_25564__$1);
var inst_25566 = cljs.core.reset_BANG_.call(null,dctr,inst_25565);
var inst_25571 = cljs.core.seq.call(null,inst_25564__$1);
var inst_25572 = inst_25571;
var inst_25573 = null;
var inst_25574 = (0);
var inst_25575 = (0);
var state_25632__$1 = (function (){var statearr_25675 = state_25632;
(statearr_25675[(9)] = inst_25575);

(statearr_25675[(10)] = inst_25573);

(statearr_25675[(20)] = inst_25574);

(statearr_25675[(29)] = inst_25564__$1);

(statearr_25675[(30)] = inst_25566);

(statearr_25675[(21)] = inst_25572);

return statearr_25675;
})();
var statearr_25676_25745 = state_25632__$1;
(statearr_25676_25745[(2)] = null);

(statearr_25676_25745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (28))){
var inst_25591 = (state_25632[(25)]);
var inst_25572 = (state_25632[(21)]);
var inst_25591__$1 = cljs.core.seq.call(null,inst_25572);
var state_25632__$1 = (function (){var statearr_25677 = state_25632;
(statearr_25677[(25)] = inst_25591__$1);

return statearr_25677;
})();
if(inst_25591__$1){
var statearr_25678_25746 = state_25632__$1;
(statearr_25678_25746[(1)] = (33));

} else {
var statearr_25679_25747 = state_25632__$1;
(statearr_25679_25747[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (25))){
var inst_25575 = (state_25632[(9)]);
var inst_25574 = (state_25632[(20)]);
var inst_25577 = (inst_25575 < inst_25574);
var inst_25578 = inst_25577;
var state_25632__$1 = state_25632;
if(cljs.core.truth_(inst_25578)){
var statearr_25680_25748 = state_25632__$1;
(statearr_25680_25748[(1)] = (27));

} else {
var statearr_25681_25749 = state_25632__$1;
(statearr_25681_25749[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (34))){
var state_25632__$1 = state_25632;
var statearr_25682_25750 = state_25632__$1;
(statearr_25682_25750[(2)] = null);

(statearr_25682_25750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (17))){
var state_25632__$1 = state_25632;
var statearr_25683_25751 = state_25632__$1;
(statearr_25683_25751[(2)] = null);

(statearr_25683_25751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (3))){
var inst_25630 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25632__$1,inst_25630);
} else {
if((state_val_25633 === (12))){
var inst_25559 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25684_25752 = state_25632__$1;
(statearr_25684_25752[(2)] = inst_25559);

(statearr_25684_25752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (2))){
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25632__$1,(4),ch);
} else {
if((state_val_25633 === (23))){
var state_25632__$1 = state_25632;
var statearr_25685_25753 = state_25632__$1;
(statearr_25685_25753[(2)] = null);

(statearr_25685_25753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (35))){
var inst_25614 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25686_25754 = state_25632__$1;
(statearr_25686_25754[(2)] = inst_25614);

(statearr_25686_25754[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (19))){
var inst_25533 = (state_25632[(7)]);
var inst_25537 = cljs.core.chunk_first.call(null,inst_25533);
var inst_25538 = cljs.core.chunk_rest.call(null,inst_25533);
var inst_25539 = cljs.core.count.call(null,inst_25537);
var inst_25513 = inst_25538;
var inst_25514 = inst_25537;
var inst_25515 = inst_25539;
var inst_25516 = (0);
var state_25632__$1 = (function (){var statearr_25687 = state_25632;
(statearr_25687[(13)] = inst_25516);

(statearr_25687[(14)] = inst_25513);

(statearr_25687[(16)] = inst_25514);

(statearr_25687[(17)] = inst_25515);

return statearr_25687;
})();
var statearr_25688_25755 = state_25632__$1;
(statearr_25688_25755[(2)] = null);

(statearr_25688_25755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (11))){
var inst_25533 = (state_25632[(7)]);
var inst_25513 = (state_25632[(14)]);
var inst_25533__$1 = cljs.core.seq.call(null,inst_25513);
var state_25632__$1 = (function (){var statearr_25689 = state_25632;
(statearr_25689[(7)] = inst_25533__$1);

return statearr_25689;
})();
if(inst_25533__$1){
var statearr_25690_25756 = state_25632__$1;
(statearr_25690_25756[(1)] = (16));

} else {
var statearr_25691_25757 = state_25632__$1;
(statearr_25691_25757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (9))){
var inst_25561 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25692_25758 = state_25632__$1;
(statearr_25692_25758[(2)] = inst_25561);

(statearr_25692_25758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (5))){
var inst_25511 = cljs.core.deref.call(null,cs);
var inst_25512 = cljs.core.seq.call(null,inst_25511);
var inst_25513 = inst_25512;
var inst_25514 = null;
var inst_25515 = (0);
var inst_25516 = (0);
var state_25632__$1 = (function (){var statearr_25693 = state_25632;
(statearr_25693[(13)] = inst_25516);

(statearr_25693[(14)] = inst_25513);

(statearr_25693[(16)] = inst_25514);

(statearr_25693[(17)] = inst_25515);

return statearr_25693;
})();
var statearr_25694_25759 = state_25632__$1;
(statearr_25694_25759[(2)] = null);

(statearr_25694_25759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (14))){
var state_25632__$1 = state_25632;
var statearr_25695_25760 = state_25632__$1;
(statearr_25695_25760[(2)] = null);

(statearr_25695_25760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (45))){
var inst_25622 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25696_25761 = state_25632__$1;
(statearr_25696_25761[(2)] = inst_25622);

(statearr_25696_25761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (26))){
var inst_25564 = (state_25632[(29)]);
var inst_25618 = (state_25632[(2)]);
var inst_25619 = cljs.core.seq.call(null,inst_25564);
var state_25632__$1 = (function (){var statearr_25697 = state_25632;
(statearr_25697[(31)] = inst_25618);

return statearr_25697;
})();
if(inst_25619){
var statearr_25698_25762 = state_25632__$1;
(statearr_25698_25762[(1)] = (42));

} else {
var statearr_25699_25763 = state_25632__$1;
(statearr_25699_25763[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (16))){
var inst_25533 = (state_25632[(7)]);
var inst_25535 = cljs.core.chunked_seq_QMARK_.call(null,inst_25533);
var state_25632__$1 = state_25632;
if(inst_25535){
var statearr_25700_25764 = state_25632__$1;
(statearr_25700_25764[(1)] = (19));

} else {
var statearr_25701_25765 = state_25632__$1;
(statearr_25701_25765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (38))){
var inst_25611 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25702_25766 = state_25632__$1;
(statearr_25702_25766[(2)] = inst_25611);

(statearr_25702_25766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (30))){
var state_25632__$1 = state_25632;
var statearr_25703_25767 = state_25632__$1;
(statearr_25703_25767[(2)] = null);

(statearr_25703_25767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (10))){
var inst_25516 = (state_25632[(13)]);
var inst_25514 = (state_25632[(16)]);
var inst_25522 = cljs.core._nth.call(null,inst_25514,inst_25516);
var inst_25523 = cljs.core.nth.call(null,inst_25522,(0),null);
var inst_25524 = cljs.core.nth.call(null,inst_25522,(1),null);
var state_25632__$1 = (function (){var statearr_25704 = state_25632;
(statearr_25704[(26)] = inst_25523);

return statearr_25704;
})();
if(cljs.core.truth_(inst_25524)){
var statearr_25705_25768 = state_25632__$1;
(statearr_25705_25768[(1)] = (13));

} else {
var statearr_25706_25769 = state_25632__$1;
(statearr_25706_25769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (18))){
var inst_25557 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25707_25770 = state_25632__$1;
(statearr_25707_25770[(2)] = inst_25557);

(statearr_25707_25770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (42))){
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25632__$1,(45),dchan);
} else {
if((state_val_25633 === (37))){
var inst_25591 = (state_25632[(25)]);
var inst_25600 = (state_25632[(23)]);
var inst_25504 = (state_25632[(12)]);
var inst_25600__$1 = cljs.core.first.call(null,inst_25591);
var inst_25601 = cljs.core.async.put_BANG_.call(null,inst_25600__$1,inst_25504,done);
var state_25632__$1 = (function (){var statearr_25708 = state_25632;
(statearr_25708[(23)] = inst_25600__$1);

return statearr_25708;
})();
if(cljs.core.truth_(inst_25601)){
var statearr_25709_25771 = state_25632__$1;
(statearr_25709_25771[(1)] = (39));

} else {
var statearr_25710_25772 = state_25632__$1;
(statearr_25710_25772[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (8))){
var inst_25516 = (state_25632[(13)]);
var inst_25515 = (state_25632[(17)]);
var inst_25518 = (inst_25516 < inst_25515);
var inst_25519 = inst_25518;
var state_25632__$1 = state_25632;
if(cljs.core.truth_(inst_25519)){
var statearr_25711_25773 = state_25632__$1;
(statearr_25711_25773[(1)] = (10));

} else {
var statearr_25712_25774 = state_25632__$1;
(statearr_25712_25774[(1)] = (11));

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
});})(c__19934__auto___25720,cs,m,dchan,dctr,done))
;
return ((function (switch__19869__auto__,c__19934__auto___25720,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19870__auto__ = null;
var cljs$core$async$mult_$_state_machine__19870__auto____0 = (function (){
var statearr_25716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25716[(0)] = cljs$core$async$mult_$_state_machine__19870__auto__);

(statearr_25716[(1)] = (1));

return statearr_25716;
});
var cljs$core$async$mult_$_state_machine__19870__auto____1 = (function (state_25632){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_25632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object)){
var ex__19873__auto__ = e25717;
var statearr_25718_25775 = state_25632;
(statearr_25718_25775[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25776 = state_25632;
state_25632 = G__25776;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19870__auto__ = function(state_25632){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19870__auto____1.call(this,state_25632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19870__auto____0;
cljs$core$async$mult_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19870__auto____1;
return cljs$core$async$mult_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___25720,cs,m,dchan,dctr,done))
})();
var state__19936__auto__ = (function (){var statearr_25719 = f__19935__auto__.call(null);
(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___25720);

return statearr_25719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___25720,cs,m,dchan,dctr,done))
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
var args25777 = [];
var len__17552__auto___25780 = arguments.length;
var i__17553__auto___25781 = (0);
while(true){
if((i__17553__auto___25781 < len__17552__auto___25780)){
args25777.push((arguments[i__17553__auto___25781]));

var G__25782 = (i__17553__auto___25781 + (1));
i__17553__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var G__25779 = args25777.length;
switch (G__25779) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25777.length)].join('')));

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

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m,ch);
} else {
var m__17150__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m,ch);
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
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m,ch);
} else {
var m__17150__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m,ch);
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
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m);
} else {
var m__17150__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m);
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
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m,state_map);
} else {
var m__17150__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m,state_map);
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
var x__17149__auto__ = (((m == null))?null:m);
var m__17150__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,m,mode);
} else {
var m__17150__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17559__auto__ = [];
var len__17552__auto___25796 = arguments.length;
var i__17553__auto___25797 = (0);
while(true){
if((i__17553__auto___25797 < len__17552__auto___25796)){
args__17559__auto__.push((arguments[i__17553__auto___25797]));

var G__25798 = (i__17553__auto___25797 + (1));
i__17553__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var argseq__17560__auto__ = ((((3) < args__17559__auto__.length))?(new cljs.core.IndexedSeq(args__17559__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17560__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25790){
var map__25791 = p__25790;
var map__25791__$1 = ((((!((map__25791 == null)))?((((map__25791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25791):map__25791);
var opts = map__25791__$1;
var statearr_25793_25799 = state;
(statearr_25793_25799[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4413__auto__ = cljs.core.async.do_alts.call(null,((function (map__25791,map__25791__$1,opts){
return (function (val){
var statearr_25794_25800 = state;
(statearr_25794_25800[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25791,map__25791__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4413__auto__)){
var cb = temp__4413__auto__;
var statearr_25795_25801 = state;
(statearr_25795_25801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25786){
var G__25787 = cljs.core.first.call(null,seq25786);
var seq25786__$1 = cljs.core.next.call(null,seq25786);
var G__25788 = cljs.core.first.call(null,seq25786__$1);
var seq25786__$2 = cljs.core.next.call(null,seq25786__$1);
var G__25789 = cljs.core.first.call(null,seq25786__$2);
var seq25786__$3 = cljs.core.next.call(null,seq25786__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25787,G__25788,G__25789,seq25786__$3);
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
if(typeof cljs.core.async.t25965 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25965 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25966){
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
this.meta25966 = meta25966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25967,meta25966__$1){
var self__ = this;
var _25967__$1 = this;
return (new cljs.core.async.t25965(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25966__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25967){
var self__ = this;
var _25967__$1 = this;
return self__.meta25966;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t25965.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25966","meta25966",738894913,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25965.cljs$lang$type = true;

cljs.core.async.t25965.cljs$lang$ctorStr = "cljs.core.async/t25965";

cljs.core.async.t25965.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t25965");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25965 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25966){
return (new cljs.core.async.t25965(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25966));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25965(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19934__auto___26128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___26128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___26128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26065){
var state_val_26066 = (state_26065[(1)]);
if((state_val_26066 === (7))){
var inst_25983 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26067_26129 = state_26065__$1;
(statearr_26067_26129[(2)] = inst_25983);

(statearr_26067_26129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (20))){
var inst_25995 = (state_26065[(7)]);
var state_26065__$1 = state_26065;
var statearr_26068_26130 = state_26065__$1;
(statearr_26068_26130[(2)] = inst_25995);

(statearr_26068_26130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (27))){
var state_26065__$1 = state_26065;
var statearr_26069_26131 = state_26065__$1;
(statearr_26069_26131[(2)] = null);

(statearr_26069_26131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (1))){
var inst_25971 = (state_26065[(8)]);
var inst_25971__$1 = calc_state.call(null);
var inst_25973 = (inst_25971__$1 == null);
var inst_25974 = cljs.core.not.call(null,inst_25973);
var state_26065__$1 = (function (){var statearr_26070 = state_26065;
(statearr_26070[(8)] = inst_25971__$1);

return statearr_26070;
})();
if(inst_25974){
var statearr_26071_26132 = state_26065__$1;
(statearr_26071_26132[(1)] = (2));

} else {
var statearr_26072_26133 = state_26065__$1;
(statearr_26072_26133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (24))){
var inst_26025 = (state_26065[(9)]);
var inst_26018 = (state_26065[(10)]);
var inst_26039 = (state_26065[(11)]);
var inst_26039__$1 = inst_26018.call(null,inst_26025);
var state_26065__$1 = (function (){var statearr_26073 = state_26065;
(statearr_26073[(11)] = inst_26039__$1);

return statearr_26073;
})();
if(cljs.core.truth_(inst_26039__$1)){
var statearr_26074_26134 = state_26065__$1;
(statearr_26074_26134[(1)] = (29));

} else {
var statearr_26075_26135 = state_26065__$1;
(statearr_26075_26135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (4))){
var inst_25986 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_25986)){
var statearr_26076_26136 = state_26065__$1;
(statearr_26076_26136[(1)] = (8));

} else {
var statearr_26077_26137 = state_26065__$1;
(statearr_26077_26137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (15))){
var inst_26012 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26012)){
var statearr_26078_26138 = state_26065__$1;
(statearr_26078_26138[(1)] = (19));

} else {
var statearr_26079_26139 = state_26065__$1;
(statearr_26079_26139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (21))){
var inst_26017 = (state_26065[(12)]);
var inst_26017__$1 = (state_26065[(2)]);
var inst_26018 = cljs.core.get.call(null,inst_26017__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26019 = cljs.core.get.call(null,inst_26017__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26020 = cljs.core.get.call(null,inst_26017__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26065__$1 = (function (){var statearr_26080 = state_26065;
(statearr_26080[(12)] = inst_26017__$1);

(statearr_26080[(10)] = inst_26018);

(statearr_26080[(13)] = inst_26019);

return statearr_26080;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26065__$1,(22),inst_26020);
} else {
if((state_val_26066 === (31))){
var inst_26047 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26047)){
var statearr_26081_26140 = state_26065__$1;
(statearr_26081_26140[(1)] = (32));

} else {
var statearr_26082_26141 = state_26065__$1;
(statearr_26082_26141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (32))){
var inst_26024 = (state_26065[(14)]);
var state_26065__$1 = state_26065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26065__$1,(35),out,inst_26024);
} else {
if((state_val_26066 === (33))){
var inst_26017 = (state_26065[(12)]);
var inst_25995 = inst_26017;
var state_26065__$1 = (function (){var statearr_26083 = state_26065;
(statearr_26083[(7)] = inst_25995);

return statearr_26083;
})();
var statearr_26084_26142 = state_26065__$1;
(statearr_26084_26142[(2)] = null);

(statearr_26084_26142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (13))){
var inst_25995 = (state_26065[(7)]);
var inst_26002 = inst_25995.cljs$lang$protocol_mask$partition0$;
var inst_26003 = (inst_26002 & (64));
var inst_26004 = inst_25995.cljs$core$ISeq$;
var inst_26005 = (inst_26003) || (inst_26004);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26005)){
var statearr_26085_26143 = state_26065__$1;
(statearr_26085_26143[(1)] = (16));

} else {
var statearr_26086_26144 = state_26065__$1;
(statearr_26086_26144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (22))){
var inst_26025 = (state_26065[(9)]);
var inst_26024 = (state_26065[(14)]);
var inst_26023 = (state_26065[(2)]);
var inst_26024__$1 = cljs.core.nth.call(null,inst_26023,(0),null);
var inst_26025__$1 = cljs.core.nth.call(null,inst_26023,(1),null);
var inst_26026 = (inst_26024__$1 == null);
var inst_26027 = cljs.core._EQ_.call(null,inst_26025__$1,change);
var inst_26028 = (inst_26026) || (inst_26027);
var state_26065__$1 = (function (){var statearr_26087 = state_26065;
(statearr_26087[(9)] = inst_26025__$1);

(statearr_26087[(14)] = inst_26024__$1);

return statearr_26087;
})();
if(cljs.core.truth_(inst_26028)){
var statearr_26088_26145 = state_26065__$1;
(statearr_26088_26145[(1)] = (23));

} else {
var statearr_26089_26146 = state_26065__$1;
(statearr_26089_26146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (36))){
var inst_26017 = (state_26065[(12)]);
var inst_25995 = inst_26017;
var state_26065__$1 = (function (){var statearr_26090 = state_26065;
(statearr_26090[(7)] = inst_25995);

return statearr_26090;
})();
var statearr_26091_26147 = state_26065__$1;
(statearr_26091_26147[(2)] = null);

(statearr_26091_26147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (29))){
var inst_26039 = (state_26065[(11)]);
var state_26065__$1 = state_26065;
var statearr_26092_26148 = state_26065__$1;
(statearr_26092_26148[(2)] = inst_26039);

(statearr_26092_26148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (6))){
var state_26065__$1 = state_26065;
var statearr_26093_26149 = state_26065__$1;
(statearr_26093_26149[(2)] = false);

(statearr_26093_26149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (28))){
var inst_26035 = (state_26065[(2)]);
var inst_26036 = calc_state.call(null);
var inst_25995 = inst_26036;
var state_26065__$1 = (function (){var statearr_26094 = state_26065;
(statearr_26094[(7)] = inst_25995);

(statearr_26094[(15)] = inst_26035);

return statearr_26094;
})();
var statearr_26095_26150 = state_26065__$1;
(statearr_26095_26150[(2)] = null);

(statearr_26095_26150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (25))){
var inst_26061 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26096_26151 = state_26065__$1;
(statearr_26096_26151[(2)] = inst_26061);

(statearr_26096_26151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (34))){
var inst_26059 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26097_26152 = state_26065__$1;
(statearr_26097_26152[(2)] = inst_26059);

(statearr_26097_26152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (17))){
var state_26065__$1 = state_26065;
var statearr_26098_26153 = state_26065__$1;
(statearr_26098_26153[(2)] = false);

(statearr_26098_26153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (3))){
var state_26065__$1 = state_26065;
var statearr_26099_26154 = state_26065__$1;
(statearr_26099_26154[(2)] = false);

(statearr_26099_26154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (12))){
var inst_26063 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26065__$1,inst_26063);
} else {
if((state_val_26066 === (2))){
var inst_25971 = (state_26065[(8)]);
var inst_25976 = inst_25971.cljs$lang$protocol_mask$partition0$;
var inst_25977 = (inst_25976 & (64));
var inst_25978 = inst_25971.cljs$core$ISeq$;
var inst_25979 = (inst_25977) || (inst_25978);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_25979)){
var statearr_26100_26155 = state_26065__$1;
(statearr_26100_26155[(1)] = (5));

} else {
var statearr_26101_26156 = state_26065__$1;
(statearr_26101_26156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (23))){
var inst_26024 = (state_26065[(14)]);
var inst_26030 = (inst_26024 == null);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26030)){
var statearr_26102_26157 = state_26065__$1;
(statearr_26102_26157[(1)] = (26));

} else {
var statearr_26103_26158 = state_26065__$1;
(statearr_26103_26158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (35))){
var inst_26050 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
if(cljs.core.truth_(inst_26050)){
var statearr_26104_26159 = state_26065__$1;
(statearr_26104_26159[(1)] = (36));

} else {
var statearr_26105_26160 = state_26065__$1;
(statearr_26105_26160[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (19))){
var inst_25995 = (state_26065[(7)]);
var inst_26014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25995);
var state_26065__$1 = state_26065;
var statearr_26106_26161 = state_26065__$1;
(statearr_26106_26161[(2)] = inst_26014);

(statearr_26106_26161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (11))){
var inst_25995 = (state_26065[(7)]);
var inst_25999 = (inst_25995 == null);
var inst_26000 = cljs.core.not.call(null,inst_25999);
var state_26065__$1 = state_26065;
if(inst_26000){
var statearr_26107_26162 = state_26065__$1;
(statearr_26107_26162[(1)] = (13));

} else {
var statearr_26108_26163 = state_26065__$1;
(statearr_26108_26163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (9))){
var inst_25971 = (state_26065[(8)]);
var state_26065__$1 = state_26065;
var statearr_26109_26164 = state_26065__$1;
(statearr_26109_26164[(2)] = inst_25971);

(statearr_26109_26164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (5))){
var state_26065__$1 = state_26065;
var statearr_26110_26165 = state_26065__$1;
(statearr_26110_26165[(2)] = true);

(statearr_26110_26165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (14))){
var state_26065__$1 = state_26065;
var statearr_26111_26166 = state_26065__$1;
(statearr_26111_26166[(2)] = false);

(statearr_26111_26166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (26))){
var inst_26025 = (state_26065[(9)]);
var inst_26032 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26025);
var state_26065__$1 = state_26065;
var statearr_26112_26167 = state_26065__$1;
(statearr_26112_26167[(2)] = inst_26032);

(statearr_26112_26167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (16))){
var state_26065__$1 = state_26065;
var statearr_26113_26168 = state_26065__$1;
(statearr_26113_26168[(2)] = true);

(statearr_26113_26168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (38))){
var inst_26055 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26114_26169 = state_26065__$1;
(statearr_26114_26169[(2)] = inst_26055);

(statearr_26114_26169[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (30))){
var inst_26025 = (state_26065[(9)]);
var inst_26018 = (state_26065[(10)]);
var inst_26019 = (state_26065[(13)]);
var inst_26042 = cljs.core.empty_QMARK_.call(null,inst_26018);
var inst_26043 = inst_26019.call(null,inst_26025);
var inst_26044 = cljs.core.not.call(null,inst_26043);
var inst_26045 = (inst_26042) && (inst_26044);
var state_26065__$1 = state_26065;
var statearr_26115_26170 = state_26065__$1;
(statearr_26115_26170[(2)] = inst_26045);

(statearr_26115_26170[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (10))){
var inst_25971 = (state_26065[(8)]);
var inst_25991 = (state_26065[(2)]);
var inst_25992 = cljs.core.get.call(null,inst_25991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25993 = cljs.core.get.call(null,inst_25991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25994 = cljs.core.get.call(null,inst_25991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25995 = inst_25971;
var state_26065__$1 = (function (){var statearr_26116 = state_26065;
(statearr_26116[(16)] = inst_25992);

(statearr_26116[(7)] = inst_25995);

(statearr_26116[(17)] = inst_25993);

(statearr_26116[(18)] = inst_25994);

return statearr_26116;
})();
var statearr_26117_26171 = state_26065__$1;
(statearr_26117_26171[(2)] = null);

(statearr_26117_26171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (18))){
var inst_26009 = (state_26065[(2)]);
var state_26065__$1 = state_26065;
var statearr_26118_26172 = state_26065__$1;
(statearr_26118_26172[(2)] = inst_26009);

(statearr_26118_26172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (37))){
var state_26065__$1 = state_26065;
var statearr_26119_26173 = state_26065__$1;
(statearr_26119_26173[(2)] = null);

(statearr_26119_26173[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26066 === (8))){
var inst_25971 = (state_26065[(8)]);
var inst_25988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25971);
var state_26065__$1 = state_26065;
var statearr_26120_26174 = state_26065__$1;
(statearr_26120_26174[(2)] = inst_25988);

(statearr_26120_26174[(1)] = (10));


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
});})(c__19934__auto___26128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19869__auto__,c__19934__auto___26128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19870__auto__ = null;
var cljs$core$async$mix_$_state_machine__19870__auto____0 = (function (){
var statearr_26124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26124[(0)] = cljs$core$async$mix_$_state_machine__19870__auto__);

(statearr_26124[(1)] = (1));

return statearr_26124;
});
var cljs$core$async$mix_$_state_machine__19870__auto____1 = (function (state_26065){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26125){if((e26125 instanceof Object)){
var ex__19873__auto__ = e26125;
var statearr_26126_26175 = state_26065;
(statearr_26126_26175[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26176 = state_26065;
state_26065 = G__26176;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19870__auto__ = function(state_26065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19870__auto____1.call(this,state_26065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19870__auto____0;
cljs$core$async$mix_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19870__auto____1;
return cljs$core$async$mix_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___26128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19936__auto__ = (function (){var statearr_26127 = f__19935__auto__.call(null);
(statearr_26127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___26128);

return statearr_26127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___26128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17149__auto__ = (((p == null))?null:p);
var m__17150__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17150__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17149__auto__ = (((p == null))?null:p);
var m__17150__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,p,v,ch);
} else {
var m__17150__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args26179 = [];
var len__17552__auto___26182 = arguments.length;
var i__17553__auto___26183 = (0);
while(true){
if((i__17553__auto___26183 < len__17552__auto___26182)){
args26179.push((arguments[i__17553__auto___26183]));

var G__26184 = (i__17553__auto___26183 + (1));
i__17553__auto___26183 = G__26184;
continue;
} else {
}
break;
}

var G__26181 = args26179.length;
switch (G__26181) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26179.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17149__auto__ = (((p == null))?null:p);
var m__17150__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,p);
} else {
var m__17150__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,p);
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
var x__17149__auto__ = (((p == null))?null:p);
var m__17150__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17149__auto__)]);
if(!((m__17150__auto__ == null))){
return m__17150__auto__.call(null,p,v);
} else {
var m__17150__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17150__auto____$1 == null))){
return m__17150__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
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
var args26187 = [];
var len__17552__auto___26312 = arguments.length;
var i__17553__auto___26313 = (0);
while(true){
if((i__17553__auto___26313 < len__17552__auto___26312)){
args26187.push((arguments[i__17553__auto___26313]));

var G__26314 = (i__17553__auto___26313 + (1));
i__17553__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var G__26189 = args26187.length;
switch (G__26189) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26187.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16513__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16513__auto__,mults){
return (function (p1__26186_SHARP_){
if(cljs.core.truth_(p1__26186_SHARP_.call(null,topic))){
return p1__26186_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26186_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16513__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26190 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26190 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26191){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26191 = meta26191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26192,meta26191__$1){
var self__ = this;
var _26192__$1 = this;
return (new cljs.core.async.t26190(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26191__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26192){
var self__ = this;
var _26192__$1 = this;
return self__.meta26191;
});})(mults,ensure_mult))
;

cljs.core.async.t26190.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26190.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26190.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26190.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4413__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4413__auto__)){
var m = temp__4413__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26190.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26191","meta26191",-1142146912,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t26190.cljs$lang$type = true;

cljs.core.async.t26190.cljs$lang$ctorStr = "cljs.core.async/t26190";

cljs.core.async.t26190.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t26190");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26190 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26191){
return (new cljs.core.async.t26190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26191));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26190(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19934__auto___26316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___26316,mults,ensure_mult,p){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___26316,mults,ensure_mult,p){
return (function (state_26264){
var state_val_26265 = (state_26264[(1)]);
if((state_val_26265 === (7))){
var inst_26260 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26266_26317 = state_26264__$1;
(statearr_26266_26317[(2)] = inst_26260);

(statearr_26266_26317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (20))){
var state_26264__$1 = state_26264;
var statearr_26267_26318 = state_26264__$1;
(statearr_26267_26318[(2)] = null);

(statearr_26267_26318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (1))){
var state_26264__$1 = state_26264;
var statearr_26268_26319 = state_26264__$1;
(statearr_26268_26319[(2)] = null);

(statearr_26268_26319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (24))){
var inst_26243 = (state_26264[(7)]);
var inst_26252 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26243);
var state_26264__$1 = state_26264;
var statearr_26269_26320 = state_26264__$1;
(statearr_26269_26320[(2)] = inst_26252);

(statearr_26269_26320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (4))){
var inst_26195 = (state_26264[(8)]);
var inst_26195__$1 = (state_26264[(2)]);
var inst_26196 = (inst_26195__$1 == null);
var state_26264__$1 = (function (){var statearr_26270 = state_26264;
(statearr_26270[(8)] = inst_26195__$1);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26196)){
var statearr_26271_26321 = state_26264__$1;
(statearr_26271_26321[(1)] = (5));

} else {
var statearr_26272_26322 = state_26264__$1;
(statearr_26272_26322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (15))){
var inst_26237 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26273_26323 = state_26264__$1;
(statearr_26273_26323[(2)] = inst_26237);

(statearr_26273_26323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (21))){
var inst_26257 = (state_26264[(2)]);
var state_26264__$1 = (function (){var statearr_26274 = state_26264;
(statearr_26274[(9)] = inst_26257);

return statearr_26274;
})();
var statearr_26275_26324 = state_26264__$1;
(statearr_26275_26324[(2)] = null);

(statearr_26275_26324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (13))){
var inst_26219 = (state_26264[(10)]);
var inst_26221 = cljs.core.chunked_seq_QMARK_.call(null,inst_26219);
var state_26264__$1 = state_26264;
if(inst_26221){
var statearr_26276_26325 = state_26264__$1;
(statearr_26276_26325[(1)] = (16));

} else {
var statearr_26277_26326 = state_26264__$1;
(statearr_26277_26326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (22))){
var inst_26249 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26249)){
var statearr_26278_26327 = state_26264__$1;
(statearr_26278_26327[(1)] = (23));

} else {
var statearr_26279_26328 = state_26264__$1;
(statearr_26279_26328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (6))){
var inst_26245 = (state_26264[(11)]);
var inst_26195 = (state_26264[(8)]);
var inst_26243 = (state_26264[(7)]);
var inst_26243__$1 = topic_fn.call(null,inst_26195);
var inst_26244 = cljs.core.deref.call(null,mults);
var inst_26245__$1 = cljs.core.get.call(null,inst_26244,inst_26243__$1);
var state_26264__$1 = (function (){var statearr_26280 = state_26264;
(statearr_26280[(11)] = inst_26245__$1);

(statearr_26280[(7)] = inst_26243__$1);

return statearr_26280;
})();
if(cljs.core.truth_(inst_26245__$1)){
var statearr_26281_26329 = state_26264__$1;
(statearr_26281_26329[(1)] = (19));

} else {
var statearr_26282_26330 = state_26264__$1;
(statearr_26282_26330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (25))){
var inst_26254 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26283_26331 = state_26264__$1;
(statearr_26283_26331[(2)] = inst_26254);

(statearr_26283_26331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (17))){
var inst_26219 = (state_26264[(10)]);
var inst_26228 = cljs.core.first.call(null,inst_26219);
var inst_26229 = cljs.core.async.muxch_STAR_.call(null,inst_26228);
var inst_26230 = cljs.core.async.close_BANG_.call(null,inst_26229);
var inst_26231 = cljs.core.next.call(null,inst_26219);
var inst_26205 = inst_26231;
var inst_26206 = null;
var inst_26207 = (0);
var inst_26208 = (0);
var state_26264__$1 = (function (){var statearr_26284 = state_26264;
(statearr_26284[(12)] = inst_26207);

(statearr_26284[(13)] = inst_26230);

(statearr_26284[(14)] = inst_26205);

(statearr_26284[(15)] = inst_26208);

(statearr_26284[(16)] = inst_26206);

return statearr_26284;
})();
var statearr_26285_26332 = state_26264__$1;
(statearr_26285_26332[(2)] = null);

(statearr_26285_26332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (3))){
var inst_26262 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26264__$1,inst_26262);
} else {
if((state_val_26265 === (12))){
var inst_26239 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26286_26333 = state_26264__$1;
(statearr_26286_26333[(2)] = inst_26239);

(statearr_26286_26333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (2))){
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26264__$1,(4),ch);
} else {
if((state_val_26265 === (23))){
var state_26264__$1 = state_26264;
var statearr_26287_26334 = state_26264__$1;
(statearr_26287_26334[(2)] = null);

(statearr_26287_26334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (19))){
var inst_26245 = (state_26264[(11)]);
var inst_26195 = (state_26264[(8)]);
var inst_26247 = cljs.core.async.muxch_STAR_.call(null,inst_26245);
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26264__$1,(22),inst_26247,inst_26195);
} else {
if((state_val_26265 === (11))){
var inst_26219 = (state_26264[(10)]);
var inst_26205 = (state_26264[(14)]);
var inst_26219__$1 = cljs.core.seq.call(null,inst_26205);
var state_26264__$1 = (function (){var statearr_26288 = state_26264;
(statearr_26288[(10)] = inst_26219__$1);

return statearr_26288;
})();
if(inst_26219__$1){
var statearr_26289_26335 = state_26264__$1;
(statearr_26289_26335[(1)] = (13));

} else {
var statearr_26290_26336 = state_26264__$1;
(statearr_26290_26336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (9))){
var inst_26241 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26291_26337 = state_26264__$1;
(statearr_26291_26337[(2)] = inst_26241);

(statearr_26291_26337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (5))){
var inst_26202 = cljs.core.deref.call(null,mults);
var inst_26203 = cljs.core.vals.call(null,inst_26202);
var inst_26204 = cljs.core.seq.call(null,inst_26203);
var inst_26205 = inst_26204;
var inst_26206 = null;
var inst_26207 = (0);
var inst_26208 = (0);
var state_26264__$1 = (function (){var statearr_26292 = state_26264;
(statearr_26292[(12)] = inst_26207);

(statearr_26292[(14)] = inst_26205);

(statearr_26292[(15)] = inst_26208);

(statearr_26292[(16)] = inst_26206);

return statearr_26292;
})();
var statearr_26293_26338 = state_26264__$1;
(statearr_26293_26338[(2)] = null);

(statearr_26293_26338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (14))){
var state_26264__$1 = state_26264;
var statearr_26297_26339 = state_26264__$1;
(statearr_26297_26339[(2)] = null);

(statearr_26297_26339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (16))){
var inst_26219 = (state_26264[(10)]);
var inst_26223 = cljs.core.chunk_first.call(null,inst_26219);
var inst_26224 = cljs.core.chunk_rest.call(null,inst_26219);
var inst_26225 = cljs.core.count.call(null,inst_26223);
var inst_26205 = inst_26224;
var inst_26206 = inst_26223;
var inst_26207 = inst_26225;
var inst_26208 = (0);
var state_26264__$1 = (function (){var statearr_26298 = state_26264;
(statearr_26298[(12)] = inst_26207);

(statearr_26298[(14)] = inst_26205);

(statearr_26298[(15)] = inst_26208);

(statearr_26298[(16)] = inst_26206);

return statearr_26298;
})();
var statearr_26299_26340 = state_26264__$1;
(statearr_26299_26340[(2)] = null);

(statearr_26299_26340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (10))){
var inst_26207 = (state_26264[(12)]);
var inst_26205 = (state_26264[(14)]);
var inst_26208 = (state_26264[(15)]);
var inst_26206 = (state_26264[(16)]);
var inst_26213 = cljs.core._nth.call(null,inst_26206,inst_26208);
var inst_26214 = cljs.core.async.muxch_STAR_.call(null,inst_26213);
var inst_26215 = cljs.core.async.close_BANG_.call(null,inst_26214);
var inst_26216 = (inst_26208 + (1));
var tmp26294 = inst_26207;
var tmp26295 = inst_26205;
var tmp26296 = inst_26206;
var inst_26205__$1 = tmp26295;
var inst_26206__$1 = tmp26296;
var inst_26207__$1 = tmp26294;
var inst_26208__$1 = inst_26216;
var state_26264__$1 = (function (){var statearr_26300 = state_26264;
(statearr_26300[(12)] = inst_26207__$1);

(statearr_26300[(17)] = inst_26215);

(statearr_26300[(14)] = inst_26205__$1);

(statearr_26300[(15)] = inst_26208__$1);

(statearr_26300[(16)] = inst_26206__$1);

return statearr_26300;
})();
var statearr_26301_26341 = state_26264__$1;
(statearr_26301_26341[(2)] = null);

(statearr_26301_26341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (18))){
var inst_26234 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26302_26342 = state_26264__$1;
(statearr_26302_26342[(2)] = inst_26234);

(statearr_26302_26342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26265 === (8))){
var inst_26207 = (state_26264[(12)]);
var inst_26208 = (state_26264[(15)]);
var inst_26210 = (inst_26208 < inst_26207);
var inst_26211 = inst_26210;
var state_26264__$1 = state_26264;
if(cljs.core.truth_(inst_26211)){
var statearr_26303_26343 = state_26264__$1;
(statearr_26303_26343[(1)] = (10));

} else {
var statearr_26304_26344 = state_26264__$1;
(statearr_26304_26344[(1)] = (11));

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
});})(c__19934__auto___26316,mults,ensure_mult,p))
;
return ((function (switch__19869__auto__,c__19934__auto___26316,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_26308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26308[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_26308[(1)] = (1));

return statearr_26308;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_26264){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26309){if((e26309 instanceof Object)){
var ex__19873__auto__ = e26309;
var statearr_26310_26345 = state_26264;
(statearr_26310_26345[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26346 = state_26264;
state_26264 = G__26346;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_26264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_26264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___26316,mults,ensure_mult,p))
})();
var state__19936__auto__ = (function (){var statearr_26311 = f__19935__auto__.call(null);
(statearr_26311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___26316);

return statearr_26311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___26316,mults,ensure_mult,p))
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
var args26347 = [];
var len__17552__auto___26350 = arguments.length;
var i__17553__auto___26351 = (0);
while(true){
if((i__17553__auto___26351 < len__17552__auto___26350)){
args26347.push((arguments[i__17553__auto___26351]));

var G__26352 = (i__17553__auto___26351 + (1));
i__17553__auto___26351 = G__26352;
continue;
} else {
}
break;
}

var G__26349 = args26347.length;
switch (G__26349) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26347.length)].join('')));

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
var args26354 = [];
var len__17552__auto___26357 = arguments.length;
var i__17553__auto___26358 = (0);
while(true){
if((i__17553__auto___26358 < len__17552__auto___26357)){
args26354.push((arguments[i__17553__auto___26358]));

var G__26359 = (i__17553__auto___26358 + (1));
i__17553__auto___26358 = G__26359;
continue;
} else {
}
break;
}

var G__26356 = args26354.length;
switch (G__26356) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26354.length)].join('')));

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
var args26361 = [];
var len__17552__auto___26432 = arguments.length;
var i__17553__auto___26433 = (0);
while(true){
if((i__17553__auto___26433 < len__17552__auto___26432)){
args26361.push((arguments[i__17553__auto___26433]));

var G__26434 = (i__17553__auto___26433 + (1));
i__17553__auto___26433 = G__26434;
continue;
} else {
}
break;
}

var G__26363 = args26361.length;
switch (G__26363) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26361.length)].join('')));

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
var c__19934__auto___26436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___26436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___26436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26402){
var state_val_26403 = (state_26402[(1)]);
if((state_val_26403 === (7))){
var state_26402__$1 = state_26402;
var statearr_26404_26437 = state_26402__$1;
(statearr_26404_26437[(2)] = null);

(statearr_26404_26437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (1))){
var state_26402__$1 = state_26402;
var statearr_26405_26438 = state_26402__$1;
(statearr_26405_26438[(2)] = null);

(statearr_26405_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (4))){
var inst_26366 = (state_26402[(7)]);
var inst_26368 = (inst_26366 < cnt);
var state_26402__$1 = state_26402;
if(cljs.core.truth_(inst_26368)){
var statearr_26406_26439 = state_26402__$1;
(statearr_26406_26439[(1)] = (6));

} else {
var statearr_26407_26440 = state_26402__$1;
(statearr_26407_26440[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (15))){
var inst_26398 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
var statearr_26408_26441 = state_26402__$1;
(statearr_26408_26441[(2)] = inst_26398);

(statearr_26408_26441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (13))){
var inst_26391 = cljs.core.async.close_BANG_.call(null,out);
var state_26402__$1 = state_26402;
var statearr_26409_26442 = state_26402__$1;
(statearr_26409_26442[(2)] = inst_26391);

(statearr_26409_26442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (6))){
var state_26402__$1 = state_26402;
var statearr_26410_26443 = state_26402__$1;
(statearr_26410_26443[(2)] = null);

(statearr_26410_26443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (3))){
var inst_26400 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26402__$1,inst_26400);
} else {
if((state_val_26403 === (12))){
var inst_26388 = (state_26402[(8)]);
var inst_26388__$1 = (state_26402[(2)]);
var inst_26389 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26388__$1);
var state_26402__$1 = (function (){var statearr_26411 = state_26402;
(statearr_26411[(8)] = inst_26388__$1);

return statearr_26411;
})();
if(cljs.core.truth_(inst_26389)){
var statearr_26412_26444 = state_26402__$1;
(statearr_26412_26444[(1)] = (13));

} else {
var statearr_26413_26445 = state_26402__$1;
(statearr_26413_26445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (2))){
var inst_26365 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26366 = (0);
var state_26402__$1 = (function (){var statearr_26414 = state_26402;
(statearr_26414[(7)] = inst_26366);

(statearr_26414[(9)] = inst_26365);

return statearr_26414;
})();
var statearr_26415_26446 = state_26402__$1;
(statearr_26415_26446[(2)] = null);

(statearr_26415_26446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (11))){
var inst_26366 = (state_26402[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26402,(10),Object,null,(9));
var inst_26375 = chs__$1.call(null,inst_26366);
var inst_26376 = done.call(null,inst_26366);
var inst_26377 = cljs.core.async.take_BANG_.call(null,inst_26375,inst_26376);
var state_26402__$1 = state_26402;
var statearr_26416_26447 = state_26402__$1;
(statearr_26416_26447[(2)] = inst_26377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (9))){
var inst_26366 = (state_26402[(7)]);
var inst_26379 = (state_26402[(2)]);
var inst_26380 = (inst_26366 + (1));
var inst_26366__$1 = inst_26380;
var state_26402__$1 = (function (){var statearr_26417 = state_26402;
(statearr_26417[(10)] = inst_26379);

(statearr_26417[(7)] = inst_26366__$1);

return statearr_26417;
})();
var statearr_26418_26448 = state_26402__$1;
(statearr_26418_26448[(2)] = null);

(statearr_26418_26448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (5))){
var inst_26386 = (state_26402[(2)]);
var state_26402__$1 = (function (){var statearr_26419 = state_26402;
(statearr_26419[(11)] = inst_26386);

return statearr_26419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26402__$1,(12),dchan);
} else {
if((state_val_26403 === (14))){
var inst_26388 = (state_26402[(8)]);
var inst_26393 = cljs.core.apply.call(null,f,inst_26388);
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26402__$1,(16),out,inst_26393);
} else {
if((state_val_26403 === (16))){
var inst_26395 = (state_26402[(2)]);
var state_26402__$1 = (function (){var statearr_26420 = state_26402;
(statearr_26420[(12)] = inst_26395);

return statearr_26420;
})();
var statearr_26421_26449 = state_26402__$1;
(statearr_26421_26449[(2)] = null);

(statearr_26421_26449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (10))){
var inst_26370 = (state_26402[(2)]);
var inst_26371 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26402__$1 = (function (){var statearr_26422 = state_26402;
(statearr_26422[(13)] = inst_26370);

return statearr_26422;
})();
var statearr_26423_26450 = state_26402__$1;
(statearr_26423_26450[(2)] = inst_26371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26402__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (8))){
var inst_26384 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
var statearr_26424_26451 = state_26402__$1;
(statearr_26424_26451[(2)] = inst_26384);

(statearr_26424_26451[(1)] = (5));


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
});})(c__19934__auto___26436,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19869__auto__,c__19934__auto___26436,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_26428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26428[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_26428[(1)] = (1));

return statearr_26428;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_26402){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26429){if((e26429 instanceof Object)){
var ex__19873__auto__ = e26429;
var statearr_26430_26452 = state_26402;
(statearr_26430_26452[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26453 = state_26402;
state_26402 = G__26453;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_26402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_26402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___26436,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19936__auto__ = (function (){var statearr_26431 = f__19935__auto__.call(null);
(statearr_26431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___26436);

return statearr_26431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___26436,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26455 = [];
var len__17552__auto___26511 = arguments.length;
var i__17553__auto___26512 = (0);
while(true){
if((i__17553__auto___26512 < len__17552__auto___26511)){
args26455.push((arguments[i__17553__auto___26512]));

var G__26513 = (i__17553__auto___26512 + (1));
i__17553__auto___26512 = G__26513;
continue;
} else {
}
break;
}

var G__26457 = args26455.length;
switch (G__26457) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26455.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19934__auto___26515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___26515,out){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___26515,out){
return (function (state_26487){
var state_val_26488 = (state_26487[(1)]);
if((state_val_26488 === (7))){
var inst_26466 = (state_26487[(7)]);
var inst_26467 = (state_26487[(8)]);
var inst_26466__$1 = (state_26487[(2)]);
var inst_26467__$1 = cljs.core.nth.call(null,inst_26466__$1,(0),null);
var inst_26468 = cljs.core.nth.call(null,inst_26466__$1,(1),null);
var inst_26469 = (inst_26467__$1 == null);
var state_26487__$1 = (function (){var statearr_26489 = state_26487;
(statearr_26489[(7)] = inst_26466__$1);

(statearr_26489[(9)] = inst_26468);

(statearr_26489[(8)] = inst_26467__$1);

return statearr_26489;
})();
if(cljs.core.truth_(inst_26469)){
var statearr_26490_26516 = state_26487__$1;
(statearr_26490_26516[(1)] = (8));

} else {
var statearr_26491_26517 = state_26487__$1;
(statearr_26491_26517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26488 === (1))){
var inst_26458 = cljs.core.vec.call(null,chs);
var inst_26459 = inst_26458;
var state_26487__$1 = (function (){var statearr_26492 = state_26487;
(statearr_26492[(10)] = inst_26459);

return statearr_26492;
})();
var statearr_26493_26518 = state_26487__$1;
(statearr_26493_26518[(2)] = null);

(statearr_26493_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26488 === (4))){
var inst_26459 = (state_26487[(10)]);
var state_26487__$1 = state_26487;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26487__$1,(7),inst_26459);
} else {
if((state_val_26488 === (6))){
var inst_26483 = (state_26487[(2)]);
var state_26487__$1 = state_26487;
var statearr_26494_26519 = state_26487__$1;
(statearr_26494_26519[(2)] = inst_26483);

(statearr_26494_26519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26488 === (3))){
var inst_26485 = (state_26487[(2)]);
var state_26487__$1 = state_26487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26487__$1,inst_26485);
} else {
if((state_val_26488 === (2))){
var inst_26459 = (state_26487[(10)]);
var inst_26461 = cljs.core.count.call(null,inst_26459);
var inst_26462 = (inst_26461 > (0));
var state_26487__$1 = state_26487;
if(cljs.core.truth_(inst_26462)){
var statearr_26496_26520 = state_26487__$1;
(statearr_26496_26520[(1)] = (4));

} else {
var statearr_26497_26521 = state_26487__$1;
(statearr_26497_26521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26488 === (11))){
var inst_26459 = (state_26487[(10)]);
var inst_26476 = (state_26487[(2)]);
var tmp26495 = inst_26459;
var inst_26459__$1 = tmp26495;
var state_26487__$1 = (function (){var statearr_26498 = state_26487;
(statearr_26498[(10)] = inst_26459__$1);

(statearr_26498[(11)] = inst_26476);

return statearr_26498;
})();
var statearr_26499_26522 = state_26487__$1;
(statearr_26499_26522[(2)] = null);

(statearr_26499_26522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26488 === (9))){
var inst_26467 = (state_26487[(8)]);
var state_26487__$1 = state_26487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26487__$1,(11),out,inst_26467);
} else {
if((state_val_26488 === (5))){
var inst_26481 = cljs.core.async.close_BANG_.call(null,out);
var state_26487__$1 = state_26487;
var statearr_26500_26523 = state_26487__$1;
(statearr_26500_26523[(2)] = inst_26481);

(statearr_26500_26523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26488 === (10))){
var inst_26479 = (state_26487[(2)]);
var state_26487__$1 = state_26487;
var statearr_26501_26524 = state_26487__$1;
(statearr_26501_26524[(2)] = inst_26479);

(statearr_26501_26524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26488 === (8))){
var inst_26466 = (state_26487[(7)]);
var inst_26468 = (state_26487[(9)]);
var inst_26459 = (state_26487[(10)]);
var inst_26467 = (state_26487[(8)]);
var inst_26471 = (function (){var cs = inst_26459;
var vec__26464 = inst_26466;
var v = inst_26467;
var c = inst_26468;
return ((function (cs,vec__26464,v,c,inst_26466,inst_26468,inst_26459,inst_26467,state_val_26488,c__19934__auto___26515,out){
return (function (p1__26454_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26454_SHARP_);
});
;})(cs,vec__26464,v,c,inst_26466,inst_26468,inst_26459,inst_26467,state_val_26488,c__19934__auto___26515,out))
})();
var inst_26472 = cljs.core.filterv.call(null,inst_26471,inst_26459);
var inst_26459__$1 = inst_26472;
var state_26487__$1 = (function (){var statearr_26502 = state_26487;
(statearr_26502[(10)] = inst_26459__$1);

return statearr_26502;
})();
var statearr_26503_26525 = state_26487__$1;
(statearr_26503_26525[(2)] = null);

(statearr_26503_26525[(1)] = (2));


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
});})(c__19934__auto___26515,out))
;
return ((function (switch__19869__auto__,c__19934__auto___26515,out){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_26507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26507[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_26507[(1)] = (1));

return statearr_26507;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_26487){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26508){if((e26508 instanceof Object)){
var ex__19873__auto__ = e26508;
var statearr_26509_26526 = state_26487;
(statearr_26509_26526[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26527 = state_26487;
state_26487 = G__26527;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_26487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_26487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___26515,out))
})();
var state__19936__auto__ = (function (){var statearr_26510 = f__19935__auto__.call(null);
(statearr_26510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___26515);

return statearr_26510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___26515,out))
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
var args26528 = [];
var len__17552__auto___26577 = arguments.length;
var i__17553__auto___26578 = (0);
while(true){
if((i__17553__auto___26578 < len__17552__auto___26577)){
args26528.push((arguments[i__17553__auto___26578]));

var G__26579 = (i__17553__auto___26578 + (1));
i__17553__auto___26578 = G__26579;
continue;
} else {
}
break;
}

var G__26530 = args26528.length;
switch (G__26530) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26528.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19934__auto___26581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___26581,out){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___26581,out){
return (function (state_26554){
var state_val_26555 = (state_26554[(1)]);
if((state_val_26555 === (7))){
var inst_26536 = (state_26554[(7)]);
var inst_26536__$1 = (state_26554[(2)]);
var inst_26537 = (inst_26536__$1 == null);
var inst_26538 = cljs.core.not.call(null,inst_26537);
var state_26554__$1 = (function (){var statearr_26556 = state_26554;
(statearr_26556[(7)] = inst_26536__$1);

return statearr_26556;
})();
if(inst_26538){
var statearr_26557_26582 = state_26554__$1;
(statearr_26557_26582[(1)] = (8));

} else {
var statearr_26558_26583 = state_26554__$1;
(statearr_26558_26583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (1))){
var inst_26531 = (0);
var state_26554__$1 = (function (){var statearr_26559 = state_26554;
(statearr_26559[(8)] = inst_26531);

return statearr_26559;
})();
var statearr_26560_26584 = state_26554__$1;
(statearr_26560_26584[(2)] = null);

(statearr_26560_26584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (4))){
var state_26554__$1 = state_26554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26554__$1,(7),ch);
} else {
if((state_val_26555 === (6))){
var inst_26549 = (state_26554[(2)]);
var state_26554__$1 = state_26554;
var statearr_26561_26585 = state_26554__$1;
(statearr_26561_26585[(2)] = inst_26549);

(statearr_26561_26585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (3))){
var inst_26551 = (state_26554[(2)]);
var inst_26552 = cljs.core.async.close_BANG_.call(null,out);
var state_26554__$1 = (function (){var statearr_26562 = state_26554;
(statearr_26562[(9)] = inst_26551);

return statearr_26562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26554__$1,inst_26552);
} else {
if((state_val_26555 === (2))){
var inst_26531 = (state_26554[(8)]);
var inst_26533 = (inst_26531 < n);
var state_26554__$1 = state_26554;
if(cljs.core.truth_(inst_26533)){
var statearr_26563_26586 = state_26554__$1;
(statearr_26563_26586[(1)] = (4));

} else {
var statearr_26564_26587 = state_26554__$1;
(statearr_26564_26587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (11))){
var inst_26531 = (state_26554[(8)]);
var inst_26541 = (state_26554[(2)]);
var inst_26542 = (inst_26531 + (1));
var inst_26531__$1 = inst_26542;
var state_26554__$1 = (function (){var statearr_26565 = state_26554;
(statearr_26565[(8)] = inst_26531__$1);

(statearr_26565[(10)] = inst_26541);

return statearr_26565;
})();
var statearr_26566_26588 = state_26554__$1;
(statearr_26566_26588[(2)] = null);

(statearr_26566_26588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (9))){
var state_26554__$1 = state_26554;
var statearr_26567_26589 = state_26554__$1;
(statearr_26567_26589[(2)] = null);

(statearr_26567_26589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (5))){
var state_26554__$1 = state_26554;
var statearr_26568_26590 = state_26554__$1;
(statearr_26568_26590[(2)] = null);

(statearr_26568_26590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (10))){
var inst_26546 = (state_26554[(2)]);
var state_26554__$1 = state_26554;
var statearr_26569_26591 = state_26554__$1;
(statearr_26569_26591[(2)] = inst_26546);

(statearr_26569_26591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26555 === (8))){
var inst_26536 = (state_26554[(7)]);
var state_26554__$1 = state_26554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26554__$1,(11),out,inst_26536);
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
});})(c__19934__auto___26581,out))
;
return ((function (switch__19869__auto__,c__19934__auto___26581,out){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_26573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26573[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_26573[(1)] = (1));

return statearr_26573;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_26554){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26574){if((e26574 instanceof Object)){
var ex__19873__auto__ = e26574;
var statearr_26575_26592 = state_26554;
(statearr_26575_26592[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26593 = state_26554;
state_26554 = G__26593;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_26554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_26554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___26581,out))
})();
var state__19936__auto__ = (function (){var statearr_26576 = f__19935__auto__.call(null);
(statearr_26576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___26581);

return statearr_26576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___26581,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26601 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26601 = (function (map_LT_,f,ch,meta26602){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26602 = meta26602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26603,meta26602__$1){
var self__ = this;
var _26603__$1 = this;
return (new cljs.core.async.t26601(self__.map_LT_,self__.f,self__.ch,meta26602__$1));
});

cljs.core.async.t26601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26603){
var self__ = this;
var _26603__$1 = this;
return self__.meta26602;
});

cljs.core.async.t26601.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26601.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26601.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26604 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26604 = (function (map_LT_,f,ch,meta26602,_,fn1,meta26605){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26602 = meta26602;
this._ = _;
this.fn1 = fn1;
this.meta26605 = meta26605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26606,meta26605__$1){
var self__ = this;
var _26606__$1 = this;
return (new cljs.core.async.t26604(self__.map_LT_,self__.f,self__.ch,self__.meta26602,self__._,self__.fn1,meta26605__$1));
});})(___$1))
;

cljs.core.async.t26604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26606){
var self__ = this;
var _26606__$1 = this;
return self__.meta26605;
});})(___$1))
;

cljs.core.async.t26604.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26594_SHARP_){
return f1.call(null,(((p1__26594_SHARP_ == null))?null:self__.f.call(null,p1__26594_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26604.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26602","meta26602",1842387467,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t26601","cljs.core.async/t26601",1600640790,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26605","meta26605",-1255289836,null)], null);
});})(___$1))
;

cljs.core.async.t26604.cljs$lang$type = true;

cljs.core.async.t26604.cljs$lang$ctorStr = "cljs.core.async/t26604";

cljs.core.async.t26604.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t26604");
});})(___$1))
;

cljs.core.async.__GT_t26604 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26604(map_LT___$1,f__$1,ch__$1,meta26602__$1,___$2,fn1__$1,meta26605){
return (new cljs.core.async.t26604(map_LT___$1,f__$1,ch__$1,meta26602__$1,___$2,fn1__$1,meta26605));
});})(___$1))
;

}

return (new cljs.core.async.t26604(self__.map_LT_,self__.f,self__.ch,self__.meta26602,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16501__auto__ = ret;
if(cljs.core.truth_(and__16501__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16501__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26601.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26602","meta26602",1842387467,null)], null);
});

cljs.core.async.t26601.cljs$lang$type = true;

cljs.core.async.t26601.cljs$lang$ctorStr = "cljs.core.async/t26601";

cljs.core.async.t26601.cljs$lang$ctorPrWriter = (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t26601");
});

cljs.core.async.__GT_t26601 = (function cljs$core$async$map_LT__$___GT_t26601(map_LT___$1,f__$1,ch__$1,meta26602){
return (new cljs.core.async.t26601(map_LT___$1,f__$1,ch__$1,meta26602));
});

}

return (new cljs.core.async.t26601(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26610 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26610 = (function (map_GT_,f,ch,meta26611){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26611 = meta26611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26612,meta26611__$1){
var self__ = this;
var _26612__$1 = this;
return (new cljs.core.async.t26610(self__.map_GT_,self__.f,self__.ch,meta26611__$1));
});

cljs.core.async.t26610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26612){
var self__ = this;
var _26612__$1 = this;
return self__.meta26611;
});

cljs.core.async.t26610.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26610.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26610.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26611","meta26611",-841892996,null)], null);
});

cljs.core.async.t26610.cljs$lang$type = true;

cljs.core.async.t26610.cljs$lang$ctorStr = "cljs.core.async/t26610";

cljs.core.async.t26610.cljs$lang$ctorPrWriter = (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t26610");
});

cljs.core.async.__GT_t26610 = (function cljs$core$async$map_GT__$___GT_t26610(map_GT___$1,f__$1,ch__$1,meta26611){
return (new cljs.core.async.t26610(map_GT___$1,f__$1,ch__$1,meta26611));
});

}

return (new cljs.core.async.t26610(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26616 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26616 = (function (filter_GT_,p,ch,meta26617){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26617 = meta26617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26618,meta26617__$1){
var self__ = this;
var _26618__$1 = this;
return (new cljs.core.async.t26616(self__.filter_GT_,self__.p,self__.ch,meta26617__$1));
});

cljs.core.async.t26616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26618){
var self__ = this;
var _26618__$1 = this;
return self__.meta26617;
});

cljs.core.async.t26616.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26616.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26617","meta26617",1353780143,null)], null);
});

cljs.core.async.t26616.cljs$lang$type = true;

cljs.core.async.t26616.cljs$lang$ctorStr = "cljs.core.async/t26616";

cljs.core.async.t26616.cljs$lang$ctorPrWriter = (function (this__17092__auto__,writer__17093__auto__,opt__17094__auto__){
return cljs.core._write.call(null,writer__17093__auto__,"cljs.core.async/t26616");
});

cljs.core.async.__GT_t26616 = (function cljs$core$async$filter_GT__$___GT_t26616(filter_GT___$1,p__$1,ch__$1,meta26617){
return (new cljs.core.async.t26616(filter_GT___$1,p__$1,ch__$1,meta26617));
});

}

return (new cljs.core.async.t26616(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26619 = [];
var len__17552__auto___26663 = arguments.length;
var i__17553__auto___26664 = (0);
while(true){
if((i__17553__auto___26664 < len__17552__auto___26663)){
args26619.push((arguments[i__17553__auto___26664]));

var G__26665 = (i__17553__auto___26664 + (1));
i__17553__auto___26664 = G__26665;
continue;
} else {
}
break;
}

var G__26621 = args26619.length;
switch (G__26621) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26619.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19934__auto___26667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___26667,out){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___26667,out){
return (function (state_26642){
var state_val_26643 = (state_26642[(1)]);
if((state_val_26643 === (7))){
var inst_26638 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26644_26668 = state_26642__$1;
(statearr_26644_26668[(2)] = inst_26638);

(statearr_26644_26668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (1))){
var state_26642__$1 = state_26642;
var statearr_26645_26669 = state_26642__$1;
(statearr_26645_26669[(2)] = null);

(statearr_26645_26669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (4))){
var inst_26624 = (state_26642[(7)]);
var inst_26624__$1 = (state_26642[(2)]);
var inst_26625 = (inst_26624__$1 == null);
var state_26642__$1 = (function (){var statearr_26646 = state_26642;
(statearr_26646[(7)] = inst_26624__$1);

return statearr_26646;
})();
if(cljs.core.truth_(inst_26625)){
var statearr_26647_26670 = state_26642__$1;
(statearr_26647_26670[(1)] = (5));

} else {
var statearr_26648_26671 = state_26642__$1;
(statearr_26648_26671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (6))){
var inst_26624 = (state_26642[(7)]);
var inst_26629 = p.call(null,inst_26624);
var state_26642__$1 = state_26642;
if(cljs.core.truth_(inst_26629)){
var statearr_26649_26672 = state_26642__$1;
(statearr_26649_26672[(1)] = (8));

} else {
var statearr_26650_26673 = state_26642__$1;
(statearr_26650_26673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (3))){
var inst_26640 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26642__$1,inst_26640);
} else {
if((state_val_26643 === (2))){
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26642__$1,(4),ch);
} else {
if((state_val_26643 === (11))){
var inst_26632 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26651_26674 = state_26642__$1;
(statearr_26651_26674[(2)] = inst_26632);

(statearr_26651_26674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (9))){
var state_26642__$1 = state_26642;
var statearr_26652_26675 = state_26642__$1;
(statearr_26652_26675[(2)] = null);

(statearr_26652_26675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (5))){
var inst_26627 = cljs.core.async.close_BANG_.call(null,out);
var state_26642__$1 = state_26642;
var statearr_26653_26676 = state_26642__$1;
(statearr_26653_26676[(2)] = inst_26627);

(statearr_26653_26676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (10))){
var inst_26635 = (state_26642[(2)]);
var state_26642__$1 = (function (){var statearr_26654 = state_26642;
(statearr_26654[(8)] = inst_26635);

return statearr_26654;
})();
var statearr_26655_26677 = state_26642__$1;
(statearr_26655_26677[(2)] = null);

(statearr_26655_26677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (8))){
var inst_26624 = (state_26642[(7)]);
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26642__$1,(11),out,inst_26624);
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
});})(c__19934__auto___26667,out))
;
return ((function (switch__19869__auto__,c__19934__auto___26667,out){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_26659 = [null,null,null,null,null,null,null,null,null];
(statearr_26659[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_26659[(1)] = (1));

return statearr_26659;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_26642){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26660){if((e26660 instanceof Object)){
var ex__19873__auto__ = e26660;
var statearr_26661_26678 = state_26642;
(statearr_26661_26678[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26679 = state_26642;
state_26642 = G__26679;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_26642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_26642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___26667,out))
})();
var state__19936__auto__ = (function (){var statearr_26662 = f__19935__auto__.call(null);
(statearr_26662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___26667);

return statearr_26662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___26667,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args26680 = [];
var len__17552__auto___26683 = arguments.length;
var i__17553__auto___26684 = (0);
while(true){
if((i__17553__auto___26684 < len__17552__auto___26683)){
args26680.push((arguments[i__17553__auto___26684]));

var G__26685 = (i__17553__auto___26684 + (1));
i__17553__auto___26684 = G__26685;
continue;
} else {
}
break;
}

var G__26682 = args26680.length;
switch (G__26682) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26680.length)].join('')));

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
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_26852){
var state_val_26853 = (state_26852[(1)]);
if((state_val_26853 === (7))){
var inst_26848 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26854_26895 = state_26852__$1;
(statearr_26854_26895[(2)] = inst_26848);

(statearr_26854_26895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (20))){
var inst_26818 = (state_26852[(7)]);
var inst_26829 = (state_26852[(2)]);
var inst_26830 = cljs.core.next.call(null,inst_26818);
var inst_26804 = inst_26830;
var inst_26805 = null;
var inst_26806 = (0);
var inst_26807 = (0);
var state_26852__$1 = (function (){var statearr_26855 = state_26852;
(statearr_26855[(8)] = inst_26829);

(statearr_26855[(9)] = inst_26807);

(statearr_26855[(10)] = inst_26804);

(statearr_26855[(11)] = inst_26805);

(statearr_26855[(12)] = inst_26806);

return statearr_26855;
})();
var statearr_26856_26896 = state_26852__$1;
(statearr_26856_26896[(2)] = null);

(statearr_26856_26896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (1))){
var state_26852__$1 = state_26852;
var statearr_26857_26897 = state_26852__$1;
(statearr_26857_26897[(2)] = null);

(statearr_26857_26897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (4))){
var inst_26793 = (state_26852[(13)]);
var inst_26793__$1 = (state_26852[(2)]);
var inst_26794 = (inst_26793__$1 == null);
var state_26852__$1 = (function (){var statearr_26858 = state_26852;
(statearr_26858[(13)] = inst_26793__$1);

return statearr_26858;
})();
if(cljs.core.truth_(inst_26794)){
var statearr_26859_26898 = state_26852__$1;
(statearr_26859_26898[(1)] = (5));

} else {
var statearr_26860_26899 = state_26852__$1;
(statearr_26860_26899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (15))){
var state_26852__$1 = state_26852;
var statearr_26864_26900 = state_26852__$1;
(statearr_26864_26900[(2)] = null);

(statearr_26864_26900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (21))){
var state_26852__$1 = state_26852;
var statearr_26865_26901 = state_26852__$1;
(statearr_26865_26901[(2)] = null);

(statearr_26865_26901[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (13))){
var inst_26807 = (state_26852[(9)]);
var inst_26804 = (state_26852[(10)]);
var inst_26805 = (state_26852[(11)]);
var inst_26806 = (state_26852[(12)]);
var inst_26814 = (state_26852[(2)]);
var inst_26815 = (inst_26807 + (1));
var tmp26861 = inst_26804;
var tmp26862 = inst_26805;
var tmp26863 = inst_26806;
var inst_26804__$1 = tmp26861;
var inst_26805__$1 = tmp26862;
var inst_26806__$1 = tmp26863;
var inst_26807__$1 = inst_26815;
var state_26852__$1 = (function (){var statearr_26866 = state_26852;
(statearr_26866[(9)] = inst_26807__$1);

(statearr_26866[(14)] = inst_26814);

(statearr_26866[(10)] = inst_26804__$1);

(statearr_26866[(11)] = inst_26805__$1);

(statearr_26866[(12)] = inst_26806__$1);

return statearr_26866;
})();
var statearr_26867_26902 = state_26852__$1;
(statearr_26867_26902[(2)] = null);

(statearr_26867_26902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (22))){
var state_26852__$1 = state_26852;
var statearr_26868_26903 = state_26852__$1;
(statearr_26868_26903[(2)] = null);

(statearr_26868_26903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (6))){
var inst_26793 = (state_26852[(13)]);
var inst_26802 = f.call(null,inst_26793);
var inst_26803 = cljs.core.seq.call(null,inst_26802);
var inst_26804 = inst_26803;
var inst_26805 = null;
var inst_26806 = (0);
var inst_26807 = (0);
var state_26852__$1 = (function (){var statearr_26869 = state_26852;
(statearr_26869[(9)] = inst_26807);

(statearr_26869[(10)] = inst_26804);

(statearr_26869[(11)] = inst_26805);

(statearr_26869[(12)] = inst_26806);

return statearr_26869;
})();
var statearr_26870_26904 = state_26852__$1;
(statearr_26870_26904[(2)] = null);

(statearr_26870_26904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (17))){
var inst_26818 = (state_26852[(7)]);
var inst_26822 = cljs.core.chunk_first.call(null,inst_26818);
var inst_26823 = cljs.core.chunk_rest.call(null,inst_26818);
var inst_26824 = cljs.core.count.call(null,inst_26822);
var inst_26804 = inst_26823;
var inst_26805 = inst_26822;
var inst_26806 = inst_26824;
var inst_26807 = (0);
var state_26852__$1 = (function (){var statearr_26871 = state_26852;
(statearr_26871[(9)] = inst_26807);

(statearr_26871[(10)] = inst_26804);

(statearr_26871[(11)] = inst_26805);

(statearr_26871[(12)] = inst_26806);

return statearr_26871;
})();
var statearr_26872_26905 = state_26852__$1;
(statearr_26872_26905[(2)] = null);

(statearr_26872_26905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (3))){
var inst_26850 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26852__$1,inst_26850);
} else {
if((state_val_26853 === (12))){
var inst_26838 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26873_26906 = state_26852__$1;
(statearr_26873_26906[(2)] = inst_26838);

(statearr_26873_26906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (2))){
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26852__$1,(4),in$);
} else {
if((state_val_26853 === (23))){
var inst_26846 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26874_26907 = state_26852__$1;
(statearr_26874_26907[(2)] = inst_26846);

(statearr_26874_26907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (19))){
var inst_26833 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26875_26908 = state_26852__$1;
(statearr_26875_26908[(2)] = inst_26833);

(statearr_26875_26908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (11))){
var inst_26818 = (state_26852[(7)]);
var inst_26804 = (state_26852[(10)]);
var inst_26818__$1 = cljs.core.seq.call(null,inst_26804);
var state_26852__$1 = (function (){var statearr_26876 = state_26852;
(statearr_26876[(7)] = inst_26818__$1);

return statearr_26876;
})();
if(inst_26818__$1){
var statearr_26877_26909 = state_26852__$1;
(statearr_26877_26909[(1)] = (14));

} else {
var statearr_26878_26910 = state_26852__$1;
(statearr_26878_26910[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (9))){
var inst_26840 = (state_26852[(2)]);
var inst_26841 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26852__$1 = (function (){var statearr_26879 = state_26852;
(statearr_26879[(15)] = inst_26840);

return statearr_26879;
})();
if(cljs.core.truth_(inst_26841)){
var statearr_26880_26911 = state_26852__$1;
(statearr_26880_26911[(1)] = (21));

} else {
var statearr_26881_26912 = state_26852__$1;
(statearr_26881_26912[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (5))){
var inst_26796 = cljs.core.async.close_BANG_.call(null,out);
var state_26852__$1 = state_26852;
var statearr_26882_26913 = state_26852__$1;
(statearr_26882_26913[(2)] = inst_26796);

(statearr_26882_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (14))){
var inst_26818 = (state_26852[(7)]);
var inst_26820 = cljs.core.chunked_seq_QMARK_.call(null,inst_26818);
var state_26852__$1 = state_26852;
if(inst_26820){
var statearr_26883_26914 = state_26852__$1;
(statearr_26883_26914[(1)] = (17));

} else {
var statearr_26884_26915 = state_26852__$1;
(statearr_26884_26915[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (16))){
var inst_26836 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26885_26916 = state_26852__$1;
(statearr_26885_26916[(2)] = inst_26836);

(statearr_26885_26916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (10))){
var inst_26807 = (state_26852[(9)]);
var inst_26805 = (state_26852[(11)]);
var inst_26812 = cljs.core._nth.call(null,inst_26805,inst_26807);
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26852__$1,(13),out,inst_26812);
} else {
if((state_val_26853 === (18))){
var inst_26818 = (state_26852[(7)]);
var inst_26827 = cljs.core.first.call(null,inst_26818);
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26852__$1,(20),out,inst_26827);
} else {
if((state_val_26853 === (8))){
var inst_26807 = (state_26852[(9)]);
var inst_26806 = (state_26852[(12)]);
var inst_26809 = (inst_26807 < inst_26806);
var inst_26810 = inst_26809;
var state_26852__$1 = state_26852;
if(cljs.core.truth_(inst_26810)){
var statearr_26886_26917 = state_26852__$1;
(statearr_26886_26917[(1)] = (10));

} else {
var statearr_26887_26918 = state_26852__$1;
(statearr_26887_26918[(1)] = (11));

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
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19870__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19870__auto____0 = (function (){
var statearr_26891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26891[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19870__auto__);

(statearr_26891[(1)] = (1));

return statearr_26891;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19870__auto____1 = (function (state_26852){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26892){if((e26892 instanceof Object)){
var ex__19873__auto__ = e26892;
var statearr_26893_26919 = state_26852;
(statearr_26893_26919[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26920 = state_26852;
state_26852 = G__26920;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19870__auto__ = function(state_26852){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19870__auto____1.call(this,state_26852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19870__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19870__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_26894 = f__19935__auto__.call(null);
(statearr_26894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_26894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args26921 = [];
var len__17552__auto___26924 = arguments.length;
var i__17553__auto___26925 = (0);
while(true){
if((i__17553__auto___26925 < len__17552__auto___26924)){
args26921.push((arguments[i__17553__auto___26925]));

var G__26926 = (i__17553__auto___26925 + (1));
i__17553__auto___26925 = G__26926;
continue;
} else {
}
break;
}

var G__26923 = args26921.length;
switch (G__26923) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26921.length)].join('')));

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
var args26928 = [];
var len__17552__auto___26931 = arguments.length;
var i__17553__auto___26932 = (0);
while(true){
if((i__17553__auto___26932 < len__17552__auto___26931)){
args26928.push((arguments[i__17553__auto___26932]));

var G__26933 = (i__17553__auto___26932 + (1));
i__17553__auto___26932 = G__26933;
continue;
} else {
}
break;
}

var G__26930 = args26928.length;
switch (G__26930) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26928.length)].join('')));

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
var args26935 = [];
var len__17552__auto___26986 = arguments.length;
var i__17553__auto___26987 = (0);
while(true){
if((i__17553__auto___26987 < len__17552__auto___26986)){
args26935.push((arguments[i__17553__auto___26987]));

var G__26988 = (i__17553__auto___26987 + (1));
i__17553__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var G__26937 = args26935.length;
switch (G__26937) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26935.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19934__auto___26990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___26990,out){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___26990,out){
return (function (state_26961){
var state_val_26962 = (state_26961[(1)]);
if((state_val_26962 === (7))){
var inst_26956 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
var statearr_26963_26991 = state_26961__$1;
(statearr_26963_26991[(2)] = inst_26956);

(statearr_26963_26991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (1))){
var inst_26938 = null;
var state_26961__$1 = (function (){var statearr_26964 = state_26961;
(statearr_26964[(7)] = inst_26938);

return statearr_26964;
})();
var statearr_26965_26992 = state_26961__$1;
(statearr_26965_26992[(2)] = null);

(statearr_26965_26992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (4))){
var inst_26941 = (state_26961[(8)]);
var inst_26941__$1 = (state_26961[(2)]);
var inst_26942 = (inst_26941__$1 == null);
var inst_26943 = cljs.core.not.call(null,inst_26942);
var state_26961__$1 = (function (){var statearr_26966 = state_26961;
(statearr_26966[(8)] = inst_26941__$1);

return statearr_26966;
})();
if(inst_26943){
var statearr_26967_26993 = state_26961__$1;
(statearr_26967_26993[(1)] = (5));

} else {
var statearr_26968_26994 = state_26961__$1;
(statearr_26968_26994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (6))){
var state_26961__$1 = state_26961;
var statearr_26969_26995 = state_26961__$1;
(statearr_26969_26995[(2)] = null);

(statearr_26969_26995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (3))){
var inst_26958 = (state_26961[(2)]);
var inst_26959 = cljs.core.async.close_BANG_.call(null,out);
var state_26961__$1 = (function (){var statearr_26970 = state_26961;
(statearr_26970[(9)] = inst_26958);

return statearr_26970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26961__$1,inst_26959);
} else {
if((state_val_26962 === (2))){
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26961__$1,(4),ch);
} else {
if((state_val_26962 === (11))){
var inst_26941 = (state_26961[(8)]);
var inst_26950 = (state_26961[(2)]);
var inst_26938 = inst_26941;
var state_26961__$1 = (function (){var statearr_26971 = state_26961;
(statearr_26971[(7)] = inst_26938);

(statearr_26971[(10)] = inst_26950);

return statearr_26971;
})();
var statearr_26972_26996 = state_26961__$1;
(statearr_26972_26996[(2)] = null);

(statearr_26972_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (9))){
var inst_26941 = (state_26961[(8)]);
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26961__$1,(11),out,inst_26941);
} else {
if((state_val_26962 === (5))){
var inst_26938 = (state_26961[(7)]);
var inst_26941 = (state_26961[(8)]);
var inst_26945 = cljs.core._EQ_.call(null,inst_26941,inst_26938);
var state_26961__$1 = state_26961;
if(inst_26945){
var statearr_26974_26997 = state_26961__$1;
(statearr_26974_26997[(1)] = (8));

} else {
var statearr_26975_26998 = state_26961__$1;
(statearr_26975_26998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (10))){
var inst_26953 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
var statearr_26976_26999 = state_26961__$1;
(statearr_26976_26999[(2)] = inst_26953);

(statearr_26976_26999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26962 === (8))){
var inst_26938 = (state_26961[(7)]);
var tmp26973 = inst_26938;
var inst_26938__$1 = tmp26973;
var state_26961__$1 = (function (){var statearr_26977 = state_26961;
(statearr_26977[(7)] = inst_26938__$1);

return statearr_26977;
})();
var statearr_26978_27000 = state_26961__$1;
(statearr_26978_27000[(2)] = null);

(statearr_26978_27000[(1)] = (2));


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
});})(c__19934__auto___26990,out))
;
return ((function (switch__19869__auto__,c__19934__auto___26990,out){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_26982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26982[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_26982[(1)] = (1));

return statearr_26982;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_26961){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_26961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e26983){if((e26983 instanceof Object)){
var ex__19873__auto__ = e26983;
var statearr_26984_27001 = state_26961;
(statearr_26984_27001[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27002 = state_26961;
state_26961 = G__27002;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_26961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_26961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___26990,out))
})();
var state__19936__auto__ = (function (){var statearr_26985 = f__19935__auto__.call(null);
(statearr_26985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___26990);

return statearr_26985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___26990,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args27003 = [];
var len__17552__auto___27073 = arguments.length;
var i__17553__auto___27074 = (0);
while(true){
if((i__17553__auto___27074 < len__17552__auto___27073)){
args27003.push((arguments[i__17553__auto___27074]));

var G__27075 = (i__17553__auto___27074 + (1));
i__17553__auto___27074 = G__27075;
continue;
} else {
}
break;
}

var G__27005 = args27003.length;
switch (G__27005) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27003.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19934__auto___27077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___27077,out){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___27077,out){
return (function (state_27043){
var state_val_27044 = (state_27043[(1)]);
if((state_val_27044 === (7))){
var inst_27039 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27045_27078 = state_27043__$1;
(statearr_27045_27078[(2)] = inst_27039);

(statearr_27045_27078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (1))){
var inst_27006 = (new Array(n));
var inst_27007 = inst_27006;
var inst_27008 = (0);
var state_27043__$1 = (function (){var statearr_27046 = state_27043;
(statearr_27046[(7)] = inst_27007);

(statearr_27046[(8)] = inst_27008);

return statearr_27046;
})();
var statearr_27047_27079 = state_27043__$1;
(statearr_27047_27079[(2)] = null);

(statearr_27047_27079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (4))){
var inst_27011 = (state_27043[(9)]);
var inst_27011__$1 = (state_27043[(2)]);
var inst_27012 = (inst_27011__$1 == null);
var inst_27013 = cljs.core.not.call(null,inst_27012);
var state_27043__$1 = (function (){var statearr_27048 = state_27043;
(statearr_27048[(9)] = inst_27011__$1);

return statearr_27048;
})();
if(inst_27013){
var statearr_27049_27080 = state_27043__$1;
(statearr_27049_27080[(1)] = (5));

} else {
var statearr_27050_27081 = state_27043__$1;
(statearr_27050_27081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (15))){
var inst_27033 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27051_27082 = state_27043__$1;
(statearr_27051_27082[(2)] = inst_27033);

(statearr_27051_27082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (13))){
var state_27043__$1 = state_27043;
var statearr_27052_27083 = state_27043__$1;
(statearr_27052_27083[(2)] = null);

(statearr_27052_27083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (6))){
var inst_27008 = (state_27043[(8)]);
var inst_27029 = (inst_27008 > (0));
var state_27043__$1 = state_27043;
if(cljs.core.truth_(inst_27029)){
var statearr_27053_27084 = state_27043__$1;
(statearr_27053_27084[(1)] = (12));

} else {
var statearr_27054_27085 = state_27043__$1;
(statearr_27054_27085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (3))){
var inst_27041 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27043__$1,inst_27041);
} else {
if((state_val_27044 === (12))){
var inst_27007 = (state_27043[(7)]);
var inst_27031 = cljs.core.vec.call(null,inst_27007);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27043__$1,(15),out,inst_27031);
} else {
if((state_val_27044 === (2))){
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27043__$1,(4),ch);
} else {
if((state_val_27044 === (11))){
var inst_27023 = (state_27043[(2)]);
var inst_27024 = (new Array(n));
var inst_27007 = inst_27024;
var inst_27008 = (0);
var state_27043__$1 = (function (){var statearr_27055 = state_27043;
(statearr_27055[(10)] = inst_27023);

(statearr_27055[(7)] = inst_27007);

(statearr_27055[(8)] = inst_27008);

return statearr_27055;
})();
var statearr_27056_27086 = state_27043__$1;
(statearr_27056_27086[(2)] = null);

(statearr_27056_27086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (9))){
var inst_27007 = (state_27043[(7)]);
var inst_27021 = cljs.core.vec.call(null,inst_27007);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27043__$1,(11),out,inst_27021);
} else {
if((state_val_27044 === (5))){
var inst_27011 = (state_27043[(9)]);
var inst_27016 = (state_27043[(11)]);
var inst_27007 = (state_27043[(7)]);
var inst_27008 = (state_27043[(8)]);
var inst_27015 = (inst_27007[inst_27008] = inst_27011);
var inst_27016__$1 = (inst_27008 + (1));
var inst_27017 = (inst_27016__$1 < n);
var state_27043__$1 = (function (){var statearr_27057 = state_27043;
(statearr_27057[(12)] = inst_27015);

(statearr_27057[(11)] = inst_27016__$1);

return statearr_27057;
})();
if(cljs.core.truth_(inst_27017)){
var statearr_27058_27087 = state_27043__$1;
(statearr_27058_27087[(1)] = (8));

} else {
var statearr_27059_27088 = state_27043__$1;
(statearr_27059_27088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (14))){
var inst_27036 = (state_27043[(2)]);
var inst_27037 = cljs.core.async.close_BANG_.call(null,out);
var state_27043__$1 = (function (){var statearr_27061 = state_27043;
(statearr_27061[(13)] = inst_27036);

return statearr_27061;
})();
var statearr_27062_27089 = state_27043__$1;
(statearr_27062_27089[(2)] = inst_27037);

(statearr_27062_27089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (10))){
var inst_27027 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27063_27090 = state_27043__$1;
(statearr_27063_27090[(2)] = inst_27027);

(statearr_27063_27090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (8))){
var inst_27016 = (state_27043[(11)]);
var inst_27007 = (state_27043[(7)]);
var tmp27060 = inst_27007;
var inst_27007__$1 = tmp27060;
var inst_27008 = inst_27016;
var state_27043__$1 = (function (){var statearr_27064 = state_27043;
(statearr_27064[(7)] = inst_27007__$1);

(statearr_27064[(8)] = inst_27008);

return statearr_27064;
})();
var statearr_27065_27091 = state_27043__$1;
(statearr_27065_27091[(2)] = null);

(statearr_27065_27091[(1)] = (2));


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
});})(c__19934__auto___27077,out))
;
return ((function (switch__19869__auto__,c__19934__auto___27077,out){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_27069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27069[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_27069[(1)] = (1));

return statearr_27069;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_27043){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_27043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e27070){if((e27070 instanceof Object)){
var ex__19873__auto__ = e27070;
var statearr_27071_27092 = state_27043;
(statearr_27071_27092[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27093 = state_27043;
state_27043 = G__27093;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_27043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_27043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___27077,out))
})();
var state__19936__auto__ = (function (){var statearr_27072 = f__19935__auto__.call(null);
(statearr_27072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___27077);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___27077,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args27094 = [];
var len__17552__auto___27168 = arguments.length;
var i__17553__auto___27169 = (0);
while(true){
if((i__17553__auto___27169 < len__17552__auto___27168)){
args27094.push((arguments[i__17553__auto___27169]));

var G__27170 = (i__17553__auto___27169 + (1));
i__17553__auto___27169 = G__27170;
continue;
} else {
}
break;
}

var G__27096 = args27094.length;
switch (G__27096) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27094.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19934__auto___27172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___27172,out){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___27172,out){
return (function (state_27138){
var state_val_27139 = (state_27138[(1)]);
if((state_val_27139 === (7))){
var inst_27134 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27140_27173 = state_27138__$1;
(statearr_27140_27173[(2)] = inst_27134);

(statearr_27140_27173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (1))){
var inst_27097 = [];
var inst_27098 = inst_27097;
var inst_27099 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27138__$1 = (function (){var statearr_27141 = state_27138;
(statearr_27141[(7)] = inst_27099);

(statearr_27141[(8)] = inst_27098);

return statearr_27141;
})();
var statearr_27142_27174 = state_27138__$1;
(statearr_27142_27174[(2)] = null);

(statearr_27142_27174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (4))){
var inst_27102 = (state_27138[(9)]);
var inst_27102__$1 = (state_27138[(2)]);
var inst_27103 = (inst_27102__$1 == null);
var inst_27104 = cljs.core.not.call(null,inst_27103);
var state_27138__$1 = (function (){var statearr_27143 = state_27138;
(statearr_27143[(9)] = inst_27102__$1);

return statearr_27143;
})();
if(inst_27104){
var statearr_27144_27175 = state_27138__$1;
(statearr_27144_27175[(1)] = (5));

} else {
var statearr_27145_27176 = state_27138__$1;
(statearr_27145_27176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (15))){
var inst_27128 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27146_27177 = state_27138__$1;
(statearr_27146_27177[(2)] = inst_27128);

(statearr_27146_27177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (13))){
var state_27138__$1 = state_27138;
var statearr_27147_27178 = state_27138__$1;
(statearr_27147_27178[(2)] = null);

(statearr_27147_27178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (6))){
var inst_27098 = (state_27138[(8)]);
var inst_27123 = inst_27098.length;
var inst_27124 = (inst_27123 > (0));
var state_27138__$1 = state_27138;
if(cljs.core.truth_(inst_27124)){
var statearr_27148_27179 = state_27138__$1;
(statearr_27148_27179[(1)] = (12));

} else {
var statearr_27149_27180 = state_27138__$1;
(statearr_27149_27180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (3))){
var inst_27136 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27138__$1,inst_27136);
} else {
if((state_val_27139 === (12))){
var inst_27098 = (state_27138[(8)]);
var inst_27126 = cljs.core.vec.call(null,inst_27098);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27138__$1,(15),out,inst_27126);
} else {
if((state_val_27139 === (2))){
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27138__$1,(4),ch);
} else {
if((state_val_27139 === (11))){
var inst_27102 = (state_27138[(9)]);
var inst_27106 = (state_27138[(10)]);
var inst_27116 = (state_27138[(2)]);
var inst_27117 = [];
var inst_27118 = inst_27117.push(inst_27102);
var inst_27098 = inst_27117;
var inst_27099 = inst_27106;
var state_27138__$1 = (function (){var statearr_27150 = state_27138;
(statearr_27150[(11)] = inst_27116);

(statearr_27150[(7)] = inst_27099);

(statearr_27150[(8)] = inst_27098);

(statearr_27150[(12)] = inst_27118);

return statearr_27150;
})();
var statearr_27151_27181 = state_27138__$1;
(statearr_27151_27181[(2)] = null);

(statearr_27151_27181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (9))){
var inst_27098 = (state_27138[(8)]);
var inst_27114 = cljs.core.vec.call(null,inst_27098);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27138__$1,(11),out,inst_27114);
} else {
if((state_val_27139 === (5))){
var inst_27102 = (state_27138[(9)]);
var inst_27099 = (state_27138[(7)]);
var inst_27106 = (state_27138[(10)]);
var inst_27106__$1 = f.call(null,inst_27102);
var inst_27107 = cljs.core._EQ_.call(null,inst_27106__$1,inst_27099);
var inst_27108 = cljs.core.keyword_identical_QMARK_.call(null,inst_27099,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27109 = (inst_27107) || (inst_27108);
var state_27138__$1 = (function (){var statearr_27152 = state_27138;
(statearr_27152[(10)] = inst_27106__$1);

return statearr_27152;
})();
if(cljs.core.truth_(inst_27109)){
var statearr_27153_27182 = state_27138__$1;
(statearr_27153_27182[(1)] = (8));

} else {
var statearr_27154_27183 = state_27138__$1;
(statearr_27154_27183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (14))){
var inst_27131 = (state_27138[(2)]);
var inst_27132 = cljs.core.async.close_BANG_.call(null,out);
var state_27138__$1 = (function (){var statearr_27156 = state_27138;
(statearr_27156[(13)] = inst_27131);

return statearr_27156;
})();
var statearr_27157_27184 = state_27138__$1;
(statearr_27157_27184[(2)] = inst_27132);

(statearr_27157_27184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (10))){
var inst_27121 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27158_27185 = state_27138__$1;
(statearr_27158_27185[(2)] = inst_27121);

(statearr_27158_27185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (8))){
var inst_27102 = (state_27138[(9)]);
var inst_27098 = (state_27138[(8)]);
var inst_27106 = (state_27138[(10)]);
var inst_27111 = inst_27098.push(inst_27102);
var tmp27155 = inst_27098;
var inst_27098__$1 = tmp27155;
var inst_27099 = inst_27106;
var state_27138__$1 = (function (){var statearr_27159 = state_27138;
(statearr_27159[(7)] = inst_27099);

(statearr_27159[(8)] = inst_27098__$1);

(statearr_27159[(14)] = inst_27111);

return statearr_27159;
})();
var statearr_27160_27186 = state_27138__$1;
(statearr_27160_27186[(2)] = null);

(statearr_27160_27186[(1)] = (2));


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
});})(c__19934__auto___27172,out))
;
return ((function (switch__19869__auto__,c__19934__auto___27172,out){
return (function() {
var cljs$core$async$state_machine__19870__auto__ = null;
var cljs$core$async$state_machine__19870__auto____0 = (function (){
var statearr_27164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27164[(0)] = cljs$core$async$state_machine__19870__auto__);

(statearr_27164[(1)] = (1));

return statearr_27164;
});
var cljs$core$async$state_machine__19870__auto____1 = (function (state_27138){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_27138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e27165){if((e27165 instanceof Object)){
var ex__19873__auto__ = e27165;
var statearr_27166_27187 = state_27138;
(statearr_27166_27187[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27188 = state_27138;
state_27138 = G__27188;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
cljs$core$async$state_machine__19870__auto__ = function(state_27138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19870__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19870__auto____1.call(this,state_27138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19870__auto____0;
cljs$core$async$state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19870__auto____1;
return cljs$core$async$state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___27172,out))
})();
var state__19936__auto__ = (function (){var statearr_27167 = f__19935__auto__.call(null);
(statearr_27167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___27172);

return statearr_27167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___27172,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1438461403528