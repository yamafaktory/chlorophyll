// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('chlorophyll.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19794__delegate = function (x){
if(cljs.core.truth_(chlorophyll.core.main)){
return cljs.core.apply.call(null,chlorophyll.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chlorophyll.core/main' is missing");
}
};
var G__19794 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19795__i = 0, G__19795__a = new Array(arguments.length -  0);
while (G__19795__i < G__19795__a.length) {G__19795__a[G__19795__i] = arguments[G__19795__i + 0]; ++G__19795__i;}
  x = new cljs.core.IndexedSeq(G__19795__a,0);
} 
return G__19794__delegate.call(this,x);};
G__19794.cljs$lang$maxFixedArity = 0;
G__19794.cljs$lang$applyTo = (function (arglist__19796){
var x = cljs.core.seq(arglist__19796);
return G__19794__delegate(x);
});
G__19794.cljs$core$IFn$_invoke$arity$variadic = G__19794__delegate;
return G__19794;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1440534419046