// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('chlorophyll.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19806__delegate = function (x){
if(cljs.core.truth_(chlorophyll.core.main)){
return cljs.core.apply.call(null,chlorophyll.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chlorophyll.core/main' is missing");
}
};
var G__19806 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19807__i = 0, G__19807__a = new Array(arguments.length -  0);
while (G__19807__i < G__19807__a.length) {G__19807__a[G__19807__i] = arguments[G__19807__i + 0]; ++G__19807__i;}
  x = new cljs.core.IndexedSeq(G__19807__a,0);
} 
return G__19806__delegate.call(this,x);};
G__19806.cljs$lang$maxFixedArity = 0;
G__19806.cljs$lang$applyTo = (function (arglist__19808){
var x = cljs.core.seq(arglist__19808);
return G__19806__delegate(x);
});
G__19806.cljs$core$IFn$_invoke$arity$variadic = G__19806__delegate;
return G__19806;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1439807984097