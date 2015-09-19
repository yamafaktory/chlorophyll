// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.route');
goog.require('cljs.core');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.ux');
goog.require('pushy.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
var action__18453__auto___19750 = (function (params__18454__auto__){
if(cljs.core.map_QMARK_.call(null,params__18454__auto__)){
var map__19746 = params__18454__auto__;
var map__19746__$1 = ((((!((map__19746 == null)))?((((map__19746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19746):map__19746);
var params = map__19746__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18454__auto__)){
var map__19748 = params__18454__auto__;
var map__19748__$1 = ((((!((map__19748 == null)))?((((map__19748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19748):map__19748);
var params = map__19748__$1;
return chlorophyll.ux.select_channel.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/channel/:c",action__18453__auto___19750);

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
chlorophyll.route.channel_switch.call(null,chlorophyll.atom.get_set_channel.call(null));

//# sourceMappingURL=route.js.map?rel=1442673317053