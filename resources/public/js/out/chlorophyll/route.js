// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.route');
goog.require('cljs.core');
goog.require('chlorophyll.ux');
goog.require('pushy.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
var action__19523__auto___19755 = (function (params__19524__auto__){
if(cljs.core.map_QMARK_.call(null,params__19524__auto__)){
var map__19751 = params__19524__auto__;
var map__19751__$1 = ((((!((map__19751 == null)))?((((map__19751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19751):map__19751);
var params = map__19751__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19524__auto__)){
var map__19753 = params__19524__auto__;
var map__19753__$1 = ((((!((map__19753 == null)))?((((map__19753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19753):map__19753);
var params = map__19753__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/channel/:c",action__19523__auto___19755);

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

//# sourceMappingURL=route.js.map?rel=1442648258429