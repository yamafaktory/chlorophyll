// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.atom');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof chlorophyll.atom.tiles !== 'undefined'){
} else {
chlorophyll.atom.tiles = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Futuristic heuristic.",new cljs.core.Keyword(null,"content","content",15833224),"fzef ze fzefzefz"], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Digging the grave!",new cljs.core.Keyword(null,"content","content",15833224),"rhrhtrh rth rthr"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Incoming abstraction.",new cljs.core.Keyword(null,"content","content",15833224),"iloui uiu u"], null)], null));
}
/**
 * Multi-arity getter and setter for tiles.
 */
chlorophyll.atom.get_set_tile = (function chlorophyll$atom$get_set_tile(){
var args20092 = [];
var len__17552__auto___20095 = arguments.length;
var i__17553__auto___20096 = (0);
while(true){
if((i__17553__auto___20096 < len__17552__auto___20095)){
args20092.push((arguments[i__17553__auto___20096]));

var G__20097 = (i__17553__auto___20096 + (1));
i__17553__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var G__20094 = args20092.length;
switch (G__20094) {
case 2:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20092.length)].join('')));

}
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2 = (function (i,k){
return cljs.core.deref.call(null,chlorophyll.atom.tiles).call(null,i).call(null,k);
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3 = (function (i,k,v){
return cljs.core.swap_BANG_.call(null,chlorophyll.atom.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,k], null),v);
});

chlorophyll.atom.get_set_tile.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=atom.js.map?rel=1439153375067