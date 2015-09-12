// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.util');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
/**
 * Multi-arity getter an setter for browser local storage.
 */
chlorophyll.util.local_storage = (function chlorophyll$util$local_storage(var_args){
var args23792 = [];
var len__17395__auto___23795 = arguments.length;
var i__17396__auto___23796 = (0);
while(true){
if((i__17396__auto___23796 < len__17395__auto___23795)){
args23792.push((arguments[i__17396__auto___23796]));

var G__23797 = (i__17396__auto___23796 + (1));
i__17396__auto___23796 = G__23797;
continue;
} else {
}
break;
}

var G__23794 = args23792.length;
switch (G__23794) {
case 1:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chlorophyll.util.local_storage.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23792.length)].join('')));

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

//# sourceMappingURL=util.js.map?rel=1442099110497