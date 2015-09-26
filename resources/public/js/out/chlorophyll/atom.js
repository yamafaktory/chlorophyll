// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.atom');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('chlorophyll.util');
if(typeof chlorophyll.atom.channel !== 'undefined'){
} else {
chlorophyll.atom.channel = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Multi-arity getter and setter for channel.
 */
chlorophyll.atom.get_set_channel = (function chlorophyll$atom$get_set_channel(var_args){
var args21471 = [];
var len__17395__auto___21474 = arguments.length;
var i__17396__auto___21475 = (0);
while(true){
if((i__17396__auto___21475 < len__17395__auto___21474)){
args21471.push((arguments[i__17396__auto___21475]));

var G__21476 = (i__17396__auto___21475 + (1));
i__17396__auto___21475 = G__21476;
continue;
} else {
}
break;
}

var G__21473 = args21471.length;
switch (G__21473) {
case 0:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21471.length)].join('')));

}
});

chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.deref.call(null,chlorophyll.atom.channel);
});

chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$1 = (function (v){
cljs.core.reset_BANG_.call(null,chlorophyll.atom.channel,v);

return chlorophyll.util.data_storage.call(null,"chlorophyll-channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.deref.call(null,chlorophyll.atom.channel)], null));
});

chlorophyll.atom.get_set_channel.cljs$lang$maxFixedArity = 1;
if(typeof chlorophyll.atom.tiles !== 'undefined'){
} else {
chlorophyll.atom.tiles = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Multi-arity getter and setter for tiles.
 */
chlorophyll.atom.get_set_tile = (function chlorophyll$atom$get_set_tile(var_args){
var args21478 = [];
var len__17395__auto___21481 = arguments.length;
var i__17396__auto___21482 = (0);
while(true){
if((i__17396__auto___21482 < len__17395__auto___21481)){
args21478.push((arguments[i__17396__auto___21482]));

var G__21483 = (i__17396__auto___21482 + (1));
i__17396__auto___21482 = G__21483;
continue;
} else {
}
break;
}

var G__21480 = args21478.length;
switch (G__21480) {
case 2:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21478.length)].join('')));

}
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2 = (function (i,k){
return cljs.core.deref.call(null,chlorophyll.atom.tiles).call(null,i).call(null,k);
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3 = (function (i,k,v){
var c = reagent.core.cursor.call(null,chlorophyll.atom.tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,k], null));
cljs.core.reset_BANG_.call(null,c,v);

return chlorophyll.util.data_storage.call(null,"chlorophyll-tiles",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.deref.call(null,chlorophyll.atom.tiles)], null));
});

chlorophyll.atom.get_set_tile.cljs$lang$maxFixedArity = 3;
/**
 * Add a new tile in the tiles atom.
 */
chlorophyll.atom.add_tile = (function chlorophyll$atom$add_tile(t,c,ch){
var pos = cljs.core.count.call(null,cljs.core.deref.call(null,chlorophyll.atom.tiles));
return cljs.core.swap_BANG_.call(null,chlorophyll.atom.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"content","content",15833224),c,new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
});
/**
 * Synchronize an atom after a callback from data-storage via the async dispatcher.
 */
chlorophyll.atom.sync = (function chlorophyll$atom$sync(v){
var a = cljs.core.name.call(null,cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.key,v)));
return console.log(cljs.core.pr_str.call(null,cljs.core.symbol.call(null,a)));
});

//# sourceMappingURL=atom.js.map?rel=1443303470743