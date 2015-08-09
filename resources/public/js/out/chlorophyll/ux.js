// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.ux');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chlorophyll.bus');
goog.require('chlorophyll.atom');
/**
 * Push a select event with the tile id in the events bus.
 */
chlorophyll.ux.select_tile = (function chlorophyll$ux$select_tile(id){
return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-tile","selected-tile",984867167),id], null));
});
chlorophyll.ux.add_new_tile = (function chlorophyll$ux$add_new_tile(){

return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.events,new cljs.core.Keyword(null,"new-tile","new-tile",726478736));
});

//# sourceMappingURL=ux.js.map?rel=1439156578081