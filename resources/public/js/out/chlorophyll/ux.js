// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.ux');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chlorophyll.bus');
goog.require('chlorophyll.atom');
chlorophyll.ux.select_channel = (function chlorophyll$ux$select_channel(c){
return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130),c], null));
});
chlorophyll.ux.add_new_tile = (function chlorophyll$ux$add_new_tile(){

return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.events,new cljs.core.Keyword(null,"new-tile","new-tile",726478736));
});
/**
 * Push a change event with the tile id in the events bus.
 */
chlorophyll.ux.change_tile = (function chlorophyll$ux$change_tile(id){
return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"changed-tile","changed-tile",1882254924),id], null));
});
/**
 * Push a select event with the tile id in the events bus.
 */
chlorophyll.ux.select_tile = (function chlorophyll$ux$select_tile(id){
return cljs.core.async.put_BANG_.call(null,chlorophyll.bus.events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-tile","selected-tile",984867167),id], null));
});

//# sourceMappingURL=ux.js.map?rel=1442349054896