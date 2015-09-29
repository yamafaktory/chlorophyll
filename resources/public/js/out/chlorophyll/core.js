// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.core');
goog.require('cljs.core');
goog.require('chlorophyll.dispatcher');
goog.require('chlorophyll.route');
goog.require('chlorophyll.ui');
goog.require('reagent.core');
/**
 * The main function mounts the core component and instantiate the dispacher.
 */
chlorophyll.core.main = (function chlorophyll$core$main(){
chlorophyll.dispatcher.start.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.app], null),document.getElementById("app"));
});
chlorophyll.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1443564331740