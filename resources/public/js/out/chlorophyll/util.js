// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.util');
goog.require('cljs.core');
goog.require('cljsjs.localforage');
goog.require('reagent.core');
goog.require('chlorophyll.bus');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('cljs.reader');
localforage.setDriver = "localforage.INDEXEDDB";
localforage.setName = "chlorophyll";
/**
 * Multi-arity getter an setter for browser data storage.
 */
chlorophyll.util.data_storage = (function chlorophyll$util$data_storage(var_args){
var args24243 = [];
var len__17395__auto___24246 = arguments.length;
var i__17396__auto___24247 = (0);
while(true){
if((i__17396__auto___24247 < len__17395__auto___24246)){
args24243.push((arguments[i__17396__auto___24247]));

var G__24248 = (i__17396__auto___24247 + (1));
i__17396__auto___24247 = G__24248;
continue;
} else {
}
break;
}

var G__24245 = args24243.length;
switch (G__24245) {
case 1:
return chlorophyll.util.data_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chlorophyll.util.data_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24243.length)].join('')));

}
});

chlorophyll.util.data_storage.cljs$core$IFn$_invoke$arity$1 = (function (v){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
var cb = ((function (r){
return (function (e,v__$1){
return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.storage,((cljs.core.some_QMARK_.call(null,v__$1))?cognitect.transit.read.call(null,r,v__$1):cljs.core.PersistentArrayMap.EMPTY));
});})(r))
;
return localforage.getItem(v,cb);
});

chlorophyll.util.data_storage.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return localforage.setItem(k,cognitect.transit.write.call(null,w,v));
});

chlorophyll.util.data_storage.cljs$lang$maxFixedArity = 2;
chlorophyll.util.data_storage.call(null,"chlorophyll-channel");
chlorophyll.util.data_storage.call(null,"chlorophyll-tiles");

//# sourceMappingURL=util.js.map?rel=1443563484886