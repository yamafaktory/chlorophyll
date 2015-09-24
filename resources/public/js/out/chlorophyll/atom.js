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
var args20072 = [];
var len__17395__auto___20075 = arguments.length;
var i__17396__auto___20076 = (0);
while(true){
if((i__17396__auto___20076 < len__17395__auto___20075)){
args20072.push((arguments[i__17396__auto___20076]));

var G__20077 = (i__17396__auto___20076 + (1));
i__17396__auto___20076 = G__20077;
continue;
} else {
}
break;
}

var G__20074 = args20072.length;
switch (G__20074) {
case 0:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20072.length)].join('')));

}
});

chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.deref.call(null,chlorophyll.atom.channel);
});

chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$1 = (function (v){
cljs.core.reset_BANG_.call(null,chlorophyll.atom.channel,v);

return chlorophyll.util.local_storage.call(null,"chlorophyll-channel",goog.string.quote(cljs.core.deref.call(null,chlorophyll.atom.channel)));
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
var args20079 = [];
var len__17395__auto___20082 = arguments.length;
var i__17396__auto___20083 = (0);
while(true){
if((i__17396__auto___20083 < len__17395__auto___20082)){
args20079.push((arguments[i__17396__auto___20083]));

var G__20084 = (i__17396__auto___20083 + (1));
i__17396__auto___20083 = G__20084;
continue;
} else {
}
break;
}

var G__20081 = args20079.length;
switch (G__20081) {
case 2:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20079.length)].join('')));

}
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2 = (function (i,k){
return cljs.core.deref.call(null,chlorophyll.atom.tiles).call(null,i).call(null,k);
});

chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3 = (function (i,k,v){
var c = reagent.core.cursor.call(null,chlorophyll.atom.tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,k], null));
cljs.core.reset_BANG_.call(null,c,v);

return chlorophyll.util.local_storage.call(null,"chlorophyll-tiles",cljs.core.deref.call(null,chlorophyll.atom.tiles));
});

chlorophyll.atom.get_set_tile.cljs$lang$maxFixedArity = 3;
/**
 * Add a new tile in the tiles atom.
 */
chlorophyll.atom.add_tile = (function chlorophyll$atom$add_tile(t,c,ch){
var pos = cljs.core.count.call(null,cljs.core.deref.call(null,chlorophyll.atom.tiles));
return cljs.core.swap_BANG_.call(null,chlorophyll.atom.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"content","content",15833224),c,new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
});

//# sourceMappingURL=atom.js.map?rel=1443128132873