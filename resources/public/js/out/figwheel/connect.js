// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('chlorophyll.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19955__delegate = function (x){
if(cljs.core.truth_(chlorophyll.core.main)){
return cljs.core.apply.call(null,chlorophyll.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chlorophyll.core/main' is missing");
}
};
var G__19955 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19956__i = 0, G__19956__a = new Array(arguments.length -  0);
while (G__19956__i < G__19956__a.length) {G__19956__a[G__19956__i] = arguments[G__19956__i + 0]; ++G__19956__i;}
  x = new cljs.core.IndexedSeq(G__19956__a,0);
} 
return G__19955__delegate.call(this,x);};
G__19955.cljs$lang$maxFixedArity = 0;
G__19955.cljs$lang$applyTo = (function (arglist__19957){
var x = cljs.core.seq(arglist__19957);
return G__19955__delegate(x);
});
G__19955.cljs$core$IFn$_invoke$arity$variadic = G__19955__delegate;
return G__19955;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1441143367406