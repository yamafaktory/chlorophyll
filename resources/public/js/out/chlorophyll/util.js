// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
/**
 * Multi-arity getter an setter for browser local storage.
 */
chlorophyll.util.local_storage = (function chlorophyll$util$local_storage(var_args){
var args19679 = [];
var len__17395__auto___19682 = arguments.length;
var i__17396__auto___19683 = (0);
while(true){
if((i__17396__auto___19683 < len__17395__auto___19682)){
args19679.push((arguments[i__17396__auto___19683]));

var G__19684 = (i__17396__auto___19683 + (1));
i__17396__auto___19683 = G__19684;
continue;
} else {
}
break;
}

var G__19681 = args19679.length;
switch (G__19681) {
case 1:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19679.length)].join('')));

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

//# sourceMappingURL=util.js.map?rel=1442160462583