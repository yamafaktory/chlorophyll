// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.style');
goog.require('cljs.core');
/**
 * Components reset style utlity.
 */
chlorophyll.style.reset = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"border","border",1444987323),"0"], null);
/**
 * Common padding for components.
 */
chlorophyll.style.padding = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem"], null);
/**
 * Generate a css rgba string to lighten or darken with alpha.
 */
chlorophyll.style.rgba_lumen = cljs.core.memoize.call(null,(function (hex,alpha){
return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(3),[cljs.core.str(hex),cljs.core.str(",")].join('')))),cljs.core.str(alpha),cljs.core.str(")")].join('');
}));
/**
 * Generate a css rgba property with random colors within the range [100 - 205].
 */
chlorophyll.style.rgba_random = (function chlorophyll$style$rgba_random(){
var v = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.call(null,(3),(function (){
return ((50) + cljs.core.rand_int.call(null,(106)));
})));
var c = cljs.core.apply.call(null,cljs.core.str,"rgba(",cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",v)),",1)");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),v,new cljs.core.Keyword(null,"color","color",1011675173),c], null);
});
if(typeof chlorophyll.style.rgba !== 'undefined'){
} else {
/**
 * Create the corresponding rgba attribute
 *   in order to lighten or darken an element.
 */
chlorophyll.style.rgba = (function (){var method_table__17250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chlorophyll.style","rgba"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17254__auto__,method_table__17250__auto__,prefer_table__17251__auto__,method_cache__17252__auto__,cached_hierarchy__17253__auto__));
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
/**
 * Return the given size in rem.
 */
chlorophyll.style.font_size = (function chlorophyll$style$font_size(s){
return [cljs.core.str(s),cljs.core.str("rem")].join('');
});
if(typeof chlorophyll.style.font !== 'undefined'){
} else {
/**
 * Create the corresponding rgba attribute
 *   in order to lighten or darken an element.
 */
chlorophyll.style.font = (function (){var method_table__17250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chlorophyll.style","font"),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17254__auto__,method_table__17250__auto__,prefer_table__17251__auto__,method_cache__17252__auto__,cached_hierarchy__17253__auto__));
})();
}
cljs.core._add_method.call(null,chlorophyll.style.font,new cljs.core.Keyword(null,"small","small",2133478704),(function (font){
return chlorophyll.style.font_size.call(null,(1));
}));
cljs.core._add_method.call(null,chlorophyll.style.font,new cljs.core.Keyword(null,"normal","normal",-1519123858),(function (font){
return chlorophyll.style.font_size.call(null,1.33);
}));
cljs.core._add_method.call(null,chlorophyll.style.font,new cljs.core.Keyword(null,"big","big",903550151),(function (font){
return chlorophyll.style.font_size.call(null,(2));
}));

//# sourceMappingURL=style.js.map?rel=1442954633133