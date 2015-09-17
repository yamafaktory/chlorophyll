// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('chlorophyll.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21162__delegate = function (x){
if(cljs.core.truth_(chlorophyll.core.main)){
return cljs.core.apply.call(null,chlorophyll.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chlorophyll.core/main' is missing");
}
};
var G__21162 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21163__i = 0, G__21163__a = new Array(arguments.length -  0);
while (G__21163__i < G__21163__a.length) {G__21163__a[G__21163__i] = arguments[G__21163__i + 0]; ++G__21163__i;}
  x = new cljs.core.IndexedSeq(G__21163__a,0);
} 
return G__21162__delegate.call(this,x);};
G__21162.cljs$lang$maxFixedArity = 0;
G__21162.cljs$lang$applyTo = (function (arglist__21164){
var x = cljs.core.seq(arglist__21164);
return G__21162__delegate(x);
});
G__21162.cljs$core$IFn$_invoke$arity$variadic = G__21162__delegate;
return G__21162;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1442520958037