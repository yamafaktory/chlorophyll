// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.atom');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('chlorophyll.util');
/**
 * Return the local storage value of key if exists.
 */
chlorophyll.atom.exist_QMARK_ = (function chlorophyll$atom$exist_QMARK_(v){
var l = chlorophyll.util.local_storage.call(null,v);
if(cljs.core.some_QMARK_.call(null,l)){
return l;
} else {
return null;
}
});
if(typeof chlorophyll.atom.channel !== 'undefined'){
} else {
chlorophyll.atom.channel = reagent.core.atom.call(null,chlorophyll.atom.exist_QMARK_.call(null,"chlorophyll-channel"));
}
/**
 * Multi-arity getter and setter for channel.
 */
chlorophyll.atom.get_set_channel = (function chlorophyll$atom$get_set_channel(var_args){
var args20013 = [];
var len__17395__auto___20016 = arguments.length;
var i__17396__auto___20017 = (0);
while(true){
if((i__17396__auto___20017 < len__17395__auto___20016)){
args20013.push((arguments[i__17396__auto___20017]));

var G__20018 = (i__17396__auto___20017 + (1));
i__17396__auto___20017 = G__20018;
continue;
} else {
}
break;
}

var G__20015 = args20013.length;
switch (G__20015) {
case 0:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chlorophyll.atom.get_set_channel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20013.length)].join('')));

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
chlorophyll.atom.tiles = reagent.core.atom.call(null,chlorophyll.atom.exist_QMARK_.call(null,"chlorophyll-tiles"));
}
/**
 * Multi-arity getter and setter for tiles.
 */
chlorophyll.atom.get_set_tile = (function chlorophyll$atom$get_set_tile(var_args){
var args20020 = [];
var len__17395__auto___20023 = arguments.length;
var i__17396__auto___20024 = (0);
while(true){
if((i__17396__auto___20024 < len__17395__auto___20023)){
args20020.push((arguments[i__17396__auto___20024]));

var G__20025 = (i__17396__auto___20024 + (1));
i__17396__auto___20024 = G__20025;
continue;
} else {
}
break;
}

var G__20022 = args20020.length;
switch (G__20022) {
case 2:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chlorophyll.atom.get_set_tile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20020.length)].join('')));

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

//# sourceMappingURL=atom.js.map?rel=1442697844542