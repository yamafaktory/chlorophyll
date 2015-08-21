// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
/**
 * Multi-arity getter an setter for browser local storage.
 */
chlorophyll.util.local_storage = (function chlorophyll$util$local_storage(){
var args19989 = [];
var len__17552__auto___19992 = arguments.length;
var i__17553__auto___19993 = (0);
while(true){
if((i__17553__auto___19993 < len__17552__auto___19992)){
args19989.push((arguments[i__17553__auto___19993]));

var G__19994 = (i__17553__auto___19993 + (1));
i__17553__auto___19993 = G__19994;
continue;
} else {
}
break;
}

var G__19991 = args19989.length;
switch (G__19991) {
case 1:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19989.length)].join('')));

}
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1 = (function (v){
var loc = localStorage.getItem(v);
if(cljs.core.some_QMARK_.call(null,loc)){
return cljs.reader.read_string.call(null,loc);
} else {
return null;
}
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
return localStorage.setItem(k,v);
});

chlorophyll.util.local_storage.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map?rel=1440161368681