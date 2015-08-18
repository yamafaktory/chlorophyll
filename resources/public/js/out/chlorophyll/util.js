// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
/**
 * Multi-arity getter an setter for browser local storage.
 */
chlorophyll.util.local_storage = (function chlorophyll$util$local_storage(){
var args19961 = [];
var len__17552__auto___19964 = arguments.length;
var i__17553__auto___19965 = (0);
while(true){
if((i__17553__auto___19965 < len__17552__auto___19964)){
args19961.push((arguments[i__17553__auto___19965]));

var G__19966 = (i__17553__auto___19965 + (1));
i__17553__auto___19965 = G__19966;
continue;
} else {
}
break;
}

var G__19963 = args19961.length;
switch (G__19963) {
case 1:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19961.length)].join('')));

}
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.reader.read_string.call(null,localStorage.getItem(v));
});

chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
return localStorage.setItem(k,v);
});

chlorophyll.util.local_storage.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=util.js.map?rel=1439932785146