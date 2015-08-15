// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.atom');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof chlorophyll.atom.tiles !== 'undefined'){
} else {
chlorophyll.atom.tiles = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Futuristic heuristic.",new cljs.core.Keyword(null,"content","content",15833224),"fzef ze fzefzefz",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(106),(80),(126)], null)], null),(1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Digging the grave!",new cljs.core.Keyword(null,"content","content",15833224),"rhrhtrh rth rthr",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(120),(65),(65)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Incoming abstraction.",new cljs.core.Keyword(null,"content","content",15833224),"iloui uiu u",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(71),(113),(135)], null)], null)], null));
}
/**
 * Multi-arity getter and setter for tiles.
 */
chlorophyll.atom.get_set_tile = (function chlorophyll$atom$get_set_tile(){
var args19949 = [];
var len__17564__auto___19952 = arguments.length;
var i__17565__auto___19953 = (0);
while(true){
if((i__17565__auto___19953 < len__17564__auto___19952)){
args19949.push((arguments[i__17565__auto___19953]));

var G__19954 = (i__17565__auto___19953 + (1));
i__17565__auto___19953 = G__19954;
continue;
} else {
}
break;
}

var G__19951 = args19949.length;
switch (G__19951) {
case 2:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19949.length)].join('')));

}
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2 = (function (i,k){
return cljs.core.deref.call(null,chlorophyll.atom.tiles).call(null,i).call(null,k);
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3 = (function (i,k,v){
return cljs.core.swap_BANG_.call(null,chlorophyll.atom.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,k], null),v);
});

chlorophyll.atom.get_set_tile.cljs$lang$maxFixedArity = 3;
/**
 * Add a new tile in the tiles atom.
 */
chlorophyll.atom.add_tile = (function chlorophyll$atom$add_tile(t,c){
var pos = cljs.core.count.call(null,cljs.core.deref.call(null,chlorophyll.atom.tiles));
return cljs.core.swap_BANG_.call(null,chlorophyll.atom.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"content","content",15833224),c], null));
});

//# sourceMappingURL=atom.js.map?rel=1439662707266