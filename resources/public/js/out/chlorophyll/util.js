// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('cljsjs.localForage');
/**
 * Multi-arity getter an setter for browser local storage.
 */
chlorophyll.util.local_storage = (function chlorophyll$util$local_storage(var_args){
var args19694 = [];
var len__17395__auto___19697 = arguments.length;
var i__17396__auto___19698 = (0);
while(true){
if((i__17396__auto___19698 < len__17395__auto___19697)){
args19694.push((arguments[i__17396__auto___19698]));

var G__19699 = (i__17396__auto___19698 + (1));
i__17396__auto___19698 = G__19699;
continue;
} else {
}
break;
}

var G__19696 = args19694.length;
switch (G__19696) {
case 1:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19694.length)].join('')));

}
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1 = (function (v){
var loc = forage.getItem.call(null,v);
if(cljs.core.some_QMARK_.call(null,loc)){
return cljs.reader.read_string.call(null,loc);
} else {
return null;
}
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
return forage.setItem.call(null,k,v);
});

chlorophyll.util.local_storage.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map?rel=1442781918547