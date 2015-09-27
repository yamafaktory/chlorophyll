// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.bus');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.route');
chlorophyll.bus.errors = cljs.core.async.chan.call(null);
chlorophyll.bus.events = cljs.core.async.chan.call(null);
chlorophyll.bus.storage = cljs.core.async.chan.call(null);
chlorophyll.bus.when_storage = (function chlorophyll$bus$when_storage(v){
chlorophyll.atom.sync.call(null,v);

return chlorophyll.route.channel_switch.call(null,chlorophyll.atom.get_set_channel.call(null));
});
chlorophyll.bus.dispatcher = (function chlorophyll$bus$dispatcher(){
var c__19478__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19478__auto__){
return (function (){
var f__19479__auto__ = (function (){var switch__19457__auto__ = ((function (c__19478__auto__){
return (function (state_20321){
var state_val_20322 = (state_20321[(1)]);
if((state_val_20322 === (7))){
var inst_20282 = (state_20321[(7)]);
var inst_20280 = (state_20321[(8)]);
var inst_20280__$1 = (state_20321[(2)]);
var inst_20281 = cljs.core.nth.call(null,inst_20280__$1,(0),null);
var inst_20282__$1 = cljs.core.nth.call(null,inst_20280__$1,(1),null);
var inst_20283 = cljs.core._EQ_.call(null,inst_20282__$1,chlorophyll.bus.events);
var state_20321__$1 = (function (){var statearr_20323 = state_20321;
(statearr_20323[(7)] = inst_20282__$1);

(statearr_20323[(8)] = inst_20280__$1);

(statearr_20323[(9)] = inst_20281);

return statearr_20323;
})();
if(inst_20283){
var statearr_20324_20354 = state_20321__$1;
(statearr_20324_20354[(1)] = (8));

} else {
var statearr_20325_20355 = state_20321__$1;
(statearr_20325_20355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (1))){
var state_20321__$1 = state_20321;
var statearr_20326_20356 = state_20321__$1;
(statearr_20326_20356[(2)] = null);

(statearr_20326_20356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (4))){
var inst_20276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20277 = [chlorophyll.bus.events,chlorophyll.bus.errors,chlorophyll.bus.storage];
var inst_20278 = (new cljs.core.PersistentVector(null,3,(5),inst_20276,inst_20277,null));
var state_20321__$1 = state_20321;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20321__$1,(7),inst_20278);
} else {
if((state_val_20322 === (15))){
var inst_20282 = (state_20321[(7)]);
var inst_20303 = cljs.core._EQ_.call(null,inst_20282,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_20321__$1 = state_20321;
if(inst_20303){
var statearr_20327_20357 = state_20321__$1;
(statearr_20327_20357[(1)] = (17));

} else {
var statearr_20328_20358 = state_20321__$1;
(statearr_20328_20358[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (13))){
var inst_20311 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
var statearr_20329_20359 = state_20321__$1;
(statearr_20329_20359[(2)] = inst_20311);

(statearr_20329_20359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (6))){
var inst_20317 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
var statearr_20330_20360 = state_20321__$1;
(statearr_20330_20360[(2)] = inst_20317);

(statearr_20330_20360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (17))){
var inst_20281 = (state_20321[(9)]);
var state_20321__$1 = state_20321;
var statearr_20331_20361 = state_20321__$1;
(statearr_20331_20361[(2)] = inst_20281);

(statearr_20331_20361[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (3))){
var inst_20319 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20321__$1,inst_20319);
} else {
if((state_val_20322 === (12))){
var inst_20282 = (state_20321[(7)]);
var inst_20297 = cljs.core._EQ_.call(null,inst_20282,chlorophyll.bus.storage);
var state_20321__$1 = state_20321;
if(inst_20297){
var statearr_20332_20362 = state_20321__$1;
(statearr_20332_20362[(1)] = (14));

} else {
var statearr_20333_20363 = state_20321__$1;
(statearr_20333_20363[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (2))){
var state_20321__$1 = state_20321;
var statearr_20334_20364 = state_20321__$1;
(statearr_20334_20364[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (19))){
var inst_20307 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
var statearr_20336_20365 = state_20321__$1;
(statearr_20336_20365[(2)] = inst_20307);

(statearr_20336_20365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (11))){
var inst_20280 = (state_20321[(8)]);
var inst_20293 = cljs.core.nth.call(null,inst_20280,(0),null);
var inst_20294 = cljs.core.pr_str.call(null,inst_20293);
var inst_20295 = console.log(inst_20294);
var state_20321__$1 = state_20321;
var statearr_20337_20366 = state_20321__$1;
(statearr_20337_20366[(2)] = inst_20295);

(statearr_20337_20366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (9))){
var inst_20282 = (state_20321[(7)]);
var inst_20290 = cljs.core._EQ_.call(null,inst_20282,chlorophyll.bus.errors);
var state_20321__$1 = state_20321;
if(inst_20290){
var statearr_20338_20367 = state_20321__$1;
(statearr_20338_20367[(1)] = (11));

} else {
var statearr_20339_20368 = state_20321__$1;
(statearr_20339_20368[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (5))){
var state_20321__$1 = state_20321;
var statearr_20340_20369 = state_20321__$1;
(statearr_20340_20369[(2)] = null);

(statearr_20340_20369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (14))){
var inst_20280 = (state_20321[(8)]);
var inst_20300 = cljs.core.nth.call(null,inst_20280,(0),null);
var inst_20301 = chlorophyll.bus.when_storage.call(null,inst_20300);
var state_20321__$1 = state_20321;
var statearr_20341_20370 = state_20321__$1;
(statearr_20341_20370[(2)] = inst_20301);

(statearr_20341_20370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (16))){
var inst_20309 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
var statearr_20342_20371 = state_20321__$1;
(statearr_20342_20371[(2)] = inst_20309);

(statearr_20342_20371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (10))){
var inst_20313 = (state_20321[(2)]);
var state_20321__$1 = (function (){var statearr_20343 = state_20321;
(statearr_20343[(10)] = inst_20313);

return statearr_20343;
})();
var statearr_20344_20372 = state_20321__$1;
(statearr_20344_20372[(2)] = null);

(statearr_20344_20372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (18))){
var state_20321__$1 = state_20321;
var statearr_20345_20373 = state_20321__$1;
(statearr_20345_20373[(2)] = null);

(statearr_20345_20373[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (8))){
var inst_20280 = (state_20321[(8)]);
var inst_20286 = cljs.core.nth.call(null,inst_20280,(0),null);
var inst_20287 = cljs.core.pr_str.call(null,inst_20286);
var inst_20288 = console.log(inst_20287);
var state_20321__$1 = state_20321;
var statearr_20346_20374 = state_20321__$1;
(statearr_20346_20374[(2)] = inst_20288);

(statearr_20346_20374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19478__auto__))
;
return ((function (switch__19457__auto__,c__19478__auto__){
return (function() {
var chlorophyll$bus$dispatcher_$_state_machine__19458__auto__ = null;
var chlorophyll$bus$dispatcher_$_state_machine__19458__auto____0 = (function (){
var statearr_20350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20350[(0)] = chlorophyll$bus$dispatcher_$_state_machine__19458__auto__);

(statearr_20350[(1)] = (1));

return statearr_20350;
});
var chlorophyll$bus$dispatcher_$_state_machine__19458__auto____1 = (function (state_20321){
while(true){
var ret_value__19459__auto__ = (function (){try{while(true){
var result__19460__auto__ = switch__19457__auto__.call(null,state_20321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19460__auto__;
}
break;
}
}catch (e20351){if((e20351 instanceof Object)){
var ex__19461__auto__ = e20351;
var statearr_20352_20375 = state_20321;
(statearr_20352_20375[(5)] = ex__19461__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20376 = state_20321;
state_20321 = G__20376;
continue;
} else {
return ret_value__19459__auto__;
}
break;
}
});
chlorophyll$bus$dispatcher_$_state_machine__19458__auto__ = function(state_20321){
switch(arguments.length){
case 0:
return chlorophyll$bus$dispatcher_$_state_machine__19458__auto____0.call(this);
case 1:
return chlorophyll$bus$dispatcher_$_state_machine__19458__auto____1.call(this,state_20321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$bus$dispatcher_$_state_machine__19458__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$bus$dispatcher_$_state_machine__19458__auto____0;
chlorophyll$bus$dispatcher_$_state_machine__19458__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$bus$dispatcher_$_state_machine__19458__auto____1;
return chlorophyll$bus$dispatcher_$_state_machine__19458__auto__;
})()
;})(switch__19457__auto__,c__19478__auto__))
})();
var state__19480__auto__ = (function (){var statearr_20353 = f__19479__auto__.call(null);
(statearr_20353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19478__auto__);

return statearr_20353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19480__auto__);
});})(c__19478__auto__))
);

return c__19478__auto__;
});

//# sourceMappingURL=bus.js.map?rel=1443379875970