// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.route');
goog.require('cljs.core');
goog.require('chlorophyll.ux');
goog.require('secretary.core');
goog.require('pushy.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
var action__19523__auto___19831 = (function (params__19524__auto__){
if(cljs.core.map_QMARK_.call(null,params__19524__auto__)){
var map__19827 = params__19524__auto__;
var map__19827__$1 = ((((!((map__19827 == null)))?((((map__19827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19827):map__19827);
var params = map__19827__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19524__auto__)){
var map__19829 = params__19524__auto__;
var map__19829__$1 = ((((!((map__19829 == null)))?((((map__19829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19829):map__19829);
var params = map__19829__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/channel/:c",action__19523__auto___19831);

chlorophyll.route.history = pushy.core.pushy.call(null,secretary.core.dispatch_BANG_,(function (r){
if(cljs.core.truth_(secretary.core.locate_route.call(null,r))){
return r;
} else {
return null;
}
}));
pushy.core.start_BANG_.call(null,chlorophyll.route.history);
pushy.core.set_token_BANG_.call(null,chlorophyll.route.history,"/channel/ddd");

//# sourceMappingURL=route.js.map?rel=1442349067162