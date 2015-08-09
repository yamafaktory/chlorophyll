// Compiled by ClojureScript 0.0-3211 {}
goog.provide('chlorophyll.style.main');
goog.require('cljs.core');
chlorophyll.style.main.reset_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem"], null);
chlorophyll.style.main.rgba_lumen = (function chlorophyll$style$main$rgba_lumen(hex,alpha){

return [cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(3),[cljs.core.str(hex),cljs.core.str(",")].join('')))),cljs.core.str(alpha),cljs.core.str(")")].join('');
});
if(typeof chlorophyll.style.main.rgba !== 'undefined'){
} else {
/**
 * Create the corresponding rgba attribute
 * in order to lighten or darken an element.
 */
chlorophyll.style.main.rgba = (function (){var method_table__23145__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23148__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23149__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chlorophyll.style.main","rgba"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23149__auto__,method_table__23145__auto__,prefer_table__23146__auto__,method_cache__23147__auto__,cached_hierarchy__23148__auto__));
})();
}
cljs.core._add_method.call(null,chlorophyll.style.main.rgba,new cljs.core.Keyword(null,"lighten","lighten",-234464980),(function (rgba){
return chlorophyll.style.main.rgba_lumen.call(null,(255),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(rgba));
}));
cljs.core._add_method.call(null,chlorophyll.style.main.rgba,new cljs.core.Keyword(null,"darken","darken",1770242949),(function (rgba){
return chlorophyll.style.main.rgba_lumen.call(null,(0),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(rgba));
}));

//# sourceMappingURL=main.js.map?rel=1435342737574