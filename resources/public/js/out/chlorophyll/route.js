// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.route');
goog.require('cljs.core');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.ux');
goog.require('pushy.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
var action__18473__auto___24282 = (function (params__18474__auto__){
if(cljs.core.map_QMARK_.call(null,params__18474__auto__)){
var map__24278 = params__18474__auto__;
var map__24278__$1 = ((((!((map__24278 == null)))?((((map__24278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24278):map__24278);
var params = map__24278__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18474__auto__)){
var map__24280 = params__18474__auto__;
var map__24280__$1 = ((((!((map__24280 == null)))?((((map__24280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24280):map__24280);
var params = map__24280__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/channel/:c",action__18473__auto___24282);

chlorophyll.route.history = pushy.core.pushy.call(null,secretary.core.dispatch_BANG_,(function (r){
if(cljs.core.truth_(secretary.core.locate_route.call(null,r))){
return r;
} else {
return null;
}
}));
chlorophyll.route.channel_switch = (function chlorophyll$route$channel_switch(c){
return pushy.core.set_token_BANG_.call(null,chlorophyll.route.history,[cljs.core.str("/channel/"),cljs.core.str(c)].join(''));
});
pushy.core.start_BANG_.call(null,chlorophyll.route.history);

//# sourceMappingURL=route.js.map?rel=1443563485060