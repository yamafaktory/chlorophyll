// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chlorophyll.bus');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljsjs.localForage');
localforage.driver = "localforage.LOCALSTORAGE";
/**
 * Multi-arity getter an setter for browser local storage.
 */
chlorophyll.util.local_storage = (function chlorophyll$util$local_storage(var_args){
var args19863 = [];
var len__17395__auto___19866 = arguments.length;
var i__17396__auto___19867 = (0);
while(true){
if((i__17396__auto___19867 < len__17395__auto___19866)){
args19863.push((arguments[i__17396__auto___19867]));

var G__19868 = (i__17396__auto___19867 + (1));
i__17396__auto___19867 = G__19868;
continue;
} else {
}
break;
}

var G__19865 = args19863.length;
switch (G__19865) {
case 1:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19863.length)].join('')));

}
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1 = (function (v){
var cb = (function chlorophyll$util$cb(e,v__$1){
return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.storage,((cljs.core.some_QMARK_.call(null,v__$1))?cljs.reader.read_string.call(null,v__$1):null));
});
return localforage.getItem(v,cb);
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
return localforage.setItem(k,v);
});

chlorophyll.util.local_storage.cljs$lang$maxFixedArity = 2;
console.info(chlorophyll.util.local_storage.call(null,"chlorophyll-tiles"));

//# sourceMappingURL=util.js.map?rel=1443127953184