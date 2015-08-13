// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.style');
goog.require('cljs.core');
/**
 * Components reset style utlity.
 */
chlorophyll.style.reset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem"], null);
/**
 * Generate a css rgba string to lighten or darken with alpha.
 */
chlorophyll.style.rgba_lumen = cljs.core.memoize.call(null,(function (hex,alpha){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(3),[cljs.core.str(hex),cljs.core.str(",")].join('')))),cljs.core.str(alpha),cljs.core.str(")")].join('');
}));
/**
 * Generate a css rgba property with random colors.
 */
chlorophyll.style.rgba_random = (function chlorophyll$style$rgba_random(){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,(3),(function (){
return [cljs.core.str(cljs.core.rand_int.call(null,(256))),cljs.core.str(",")].join('');
})))),cljs.core.str("1)")].join('');
});
if(typeof chlorophyll.style.rgba !== 'undefined'){
} else {
/**
 * Create the corresponding rgba attribute
 * in order to lighten or darken an element.
 */
chlorophyll.style.rgba = (function (){var method_table__17407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17411__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chlorophyll.style","rgba"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17411__auto__,method_table__17407__auto__,prefer_table__17408__auto__,method_cache__17409__auto__,cached_hierarchy__17410__auto__));
})();
}
cljs.core._add_method.call(null,chlorophyll.style.rgba,new cljs.core.Keyword(null,"lighten","lighten",-234464980),(function (rgba){
return chlorophyll.style.rgba_lumen.call(null,(255),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(rgba));
}));
cljs.core._add_method.call(null,chlorophyll.style.rgba,new cljs.core.Keyword(null,"darken","darken",1770242949),(function (rgba){
return chlorophyll.style.rgba_lumen.call(null,(0),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(rgba));
}));
cljs.core._add_method.call(null,chlorophyll.style.rgba,new cljs.core.Keyword(null,"random","random",-557811113),(function (rgba){
return chlorophyll.style.rgba_random.call(null);
}));

//# sourceMappingURL=style.js.map?rel=1439502759829