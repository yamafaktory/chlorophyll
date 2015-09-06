// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.atom');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chlorophyll.util');
if(typeof chlorophyll.atom.tiles !== 'undefined'){
} else {
chlorophyll.atom.tiles = reagent.core.atom.call(null,(function (){var loc = chlorophyll.util.local_storage.call(null,"tiles");
if(cljs.core.some_QMARK_.call(null,loc)){
return loc;
} else {
return null;
}
})());
}
/**
 * Multi-arity getter and setter for tiles.
 */
chlorophyll.atom.get_set_tile = (function chlorophyll$atom$get_set_tile(){
var args19928 = [];
var len__17533__auto___19931 = arguments.length;
var i__17534__auto___19932 = (0);
while(true){
if((i__17534__auto___19932 < len__17533__auto___19931)){
args19928.push((arguments[i__17534__auto___19932]));

var G__19933 = (i__17534__auto___19932 + (1));
i__17534__auto___19932 = G__19933;
continue;
} else {
}
break;
}

var G__19930 = args19928.length;
switch (G__19930) {
case 2:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19928.length)].join('')));

}
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2 = (function (i,k){
return cljs.core.deref.call(null,chlorophyll.atom.tiles).call(null,i).call(null,k);
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3 = (function (i,k,v){
var c = reagent.core.cursor.call(null,chlorophyll.atom.tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,k], null));
cljs.core.reset_BANG_.call(null,c,v);

return chlorophyll.util.local_storage.call(null,"tiles",cljs.core.deref.call(null,chlorophyll.atom.tiles));
});

chlorophyll.atom.get_set_tile.cljs$lang$maxFixedArity = 3;
/**
 * Add a new tile in the tiles atom.
 */
chlorophyll.atom.add_tile = (function chlorophyll$atom$add_tile(t,c){
var pos = cljs.core.count.call(null,cljs.core.deref.call(null,chlorophyll.atom.tiles));
return cljs.core.swap_BANG_.call(null,chlorophyll.atom.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"content","content",15833224),c], null));
});

//# sourceMappingURL=atom.js.map?rel=1441456539102