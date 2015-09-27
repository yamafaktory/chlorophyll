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
var args19905 = [];
var len__17395__auto___19908 = arguments.length;
var i__17396__auto___19909 = (0);
while(true){
if((i__17396__auto___19909 < len__17395__auto___19908)){
args19905.push((arguments[i__17396__auto___19909]));

var G__19910 = (i__17396__auto___19909 + (1));
i__17396__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var G__19907 = args19905.length;
switch (G__19907) {
case 0:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19905.length)].join('')));

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
var args19912 = [];
var len__17395__auto___19915 = arguments.length;
var i__17396__auto___19916 = (0);
while(true){
if((i__17396__auto___19916 < len__17395__auto___19915)){
args19912.push((arguments[i__17396__auto___19916]));

var G__19917 = (i__17396__auto___19916 + (1));
i__17396__auto___19916 = G__19917;
continue;
} else {
}
break;
}

var G__19914 = args19912.length;
switch (G__19914) {
case 2:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19912.length)].join('')));

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
var a = cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.key,v));
var pred__19922 = cljs.core._EQ_;
var expr__19923 = a;
if(cljs.core.truth_(pred__19922.call(null,new cljs.core.Keyword(null,"channel","channel",734187692),expr__19923))){
return cljs.core.reset_BANG_.call(null,chlorophyll.atom.channel,v.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240)));
} else {
if(cljs.core.truth_(pred__19922.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240),expr__19923))){
return cljs.core.reset_BANG_.call(null,chlorophyll.atom.tiles,v.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19923)].join('')));
}
}
});

//# sourceMappingURL=atom.js.map?rel=1443377348808