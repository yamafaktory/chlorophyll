// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.route');
goog.require('cljs.core');
goog.require('chlorophyll.ux');
goog.require('secretary.core');
goog.require('pushy.core');
chlorophyll.route.routes = (function chlorophyll$route$routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");

var action__19522__auto__ = (function (params__19523__auto__){
if(cljs.core.map_QMARK_.call(null,params__19523__auto__)){
var map__19828 = params__19523__auto__;
var map__19828__$1 = ((((!((map__19828 == null)))?((((map__19828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19828):map__19828);
var params = map__19828__$1;
return console.log([cljs.core.str("test: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19523__auto__)){
var map__19830 = params__19523__auto__;
var map__19830__$1 = ((((!((map__19830 == null)))?((((map__19830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19830):map__19830);
var params = map__19830__$1;
return console.log([cljs.core.str("test: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/test/:id",action__19522__auto__);

return ((function (action__19522__auto__){
return (function() { 
var G__19832__delegate = function (args__19521__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/test/:id",args__19521__auto__);
};
var G__19832 = function (var_args){
var args__19521__auto__ = null;
if (arguments.length > 0) {
var G__19833__i = 0, G__19833__a = new Array(arguments.length -  0);
while (G__19833__i < G__19833__a.length) {G__19833__a[G__19833__i] = arguments[G__19833__i + 0]; ++G__19833__i;}
  args__19521__auto__ = new cljs.core.IndexedSeq(G__19833__a,0);
} 
return G__19832__delegate.call(this,args__19521__auto__);};
G__19832.cljs$lang$maxFixedArity = 0;
G__19832.cljs$lang$applyTo = (function (arglist__19834){
var args__19521__auto__ = cljs.core.seq(arglist__19834);
return G__19832__delegate(args__19521__auto__);
});
G__19832.cljs$core$IFn$_invoke$arity$variadic = G__19832__delegate;
return G__19832;
})()
;
;})(action__19522__auto__))
});
chlorophyll.route.history = pushy.core.pushy.call(null,secretary.core.dispatch_BANG_,(function (x){
if(cljs.core.truth_(secretary.core.locate_route.call(null,x))){
return x;
} else {
return null;
}
}));
pushy.core.start_BANG_.call(null,chlorophyll.route.history);

//# sourceMappingURL=route.js.map?rel=1442175584182