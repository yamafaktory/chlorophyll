// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.bus');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chlorophyll.atom');
chlorophyll.bus.errors = cljs.core.async.chan.call(null);
chlorophyll.bus.events = cljs.core.async.chan.call(null);
chlorophyll.bus.storage = cljs.core.async.chan.call(null);
chlorophyll.bus.dispatcher = (function chlorophyll$bus$dispatcher(){
var c__19473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19473__auto__){
return (function (){
var f__19474__auto__ = (function (){var switch__19452__auto__ = ((function (c__19473__auto__){
return (function (state_21328){
var state_val_21329 = (state_21328[(1)]);
if((state_val_21329 === (7))){
var inst_21289 = (state_21328[(7)]);
var inst_21287 = (state_21328[(8)]);
var inst_21287__$1 = (state_21328[(2)]);
var inst_21288 = cljs.core.nth.call(null,inst_21287__$1,(0),null);
var inst_21289__$1 = cljs.core.nth.call(null,inst_21287__$1,(1),null);
var inst_21290 = cljs.core._EQ_.call(null,inst_21289__$1,chlorophyll.bus.events);
var state_21328__$1 = (function (){var statearr_21330 = state_21328;
(statearr_21330[(7)] = inst_21289__$1);

(statearr_21330[(9)] = inst_21288);

(statearr_21330[(8)] = inst_21287__$1);

return statearr_21330;
})();
if(inst_21290){
var statearr_21331_21361 = state_21328__$1;
(statearr_21331_21361[(1)] = (8));

} else {
var statearr_21332_21362 = state_21328__$1;
(statearr_21332_21362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (1))){
var state_21328__$1 = state_21328;
var statearr_21333_21363 = state_21328__$1;
(statearr_21333_21363[(2)] = null);

(statearr_21333_21363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (4))){
var inst_21283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21284 = [chlorophyll.bus.events,chlorophyll.bus.errors,chlorophyll.bus.storage];
var inst_21285 = (new cljs.core.PersistentVector(null,3,(5),inst_21283,inst_21284,null));
var state_21328__$1 = state_21328;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21328__$1,(7),inst_21285);
} else {
if((state_val_21329 === (15))){
var inst_21289 = (state_21328[(7)]);
var inst_21310 = cljs.core._EQ_.call(null,inst_21289,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_21328__$1 = state_21328;
if(inst_21310){
var statearr_21334_21364 = state_21328__$1;
(statearr_21334_21364[(1)] = (17));

} else {
var statearr_21335_21365 = state_21328__$1;
(statearr_21335_21365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (13))){
var inst_21318 = (state_21328[(2)]);
var state_21328__$1 = state_21328;
var statearr_21336_21366 = state_21328__$1;
(statearr_21336_21366[(2)] = inst_21318);

(statearr_21336_21366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (6))){
var inst_21324 = (state_21328[(2)]);
var state_21328__$1 = state_21328;
var statearr_21337_21367 = state_21328__$1;
(statearr_21337_21367[(2)] = inst_21324);

(statearr_21337_21367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (17))){
var inst_21288 = (state_21328[(9)]);
var state_21328__$1 = state_21328;
var statearr_21338_21368 = state_21328__$1;
(statearr_21338_21368[(2)] = inst_21288);

(statearr_21338_21368[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (3))){
var inst_21326 = (state_21328[(2)]);
var state_21328__$1 = state_21328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21328__$1,inst_21326);
} else {
if((state_val_21329 === (12))){
var inst_21289 = (state_21328[(7)]);
var inst_21304 = cljs.core._EQ_.call(null,inst_21289,chlorophyll.bus.storage);
var state_21328__$1 = state_21328;
if(inst_21304){
var statearr_21339_21369 = state_21328__$1;
(statearr_21339_21369[(1)] = (14));

} else {
var statearr_21340_21370 = state_21328__$1;
(statearr_21340_21370[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (2))){
var state_21328__$1 = state_21328;
var statearr_21341_21371 = state_21328__$1;
(statearr_21341_21371[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (19))){
var inst_21314 = (state_21328[(2)]);
var state_21328__$1 = state_21328;
var statearr_21343_21372 = state_21328__$1;
(statearr_21343_21372[(2)] = inst_21314);

(statearr_21343_21372[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (11))){
var inst_21287 = (state_21328[(8)]);
var inst_21300 = cljs.core.nth.call(null,inst_21287,(0),null);
var inst_21301 = cljs.core.pr_str.call(null,inst_21300);
var inst_21302 = console.log(inst_21301);
var state_21328__$1 = state_21328;
var statearr_21344_21373 = state_21328__$1;
(statearr_21344_21373[(2)] = inst_21302);

(statearr_21344_21373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (9))){
var inst_21289 = (state_21328[(7)]);
var inst_21297 = cljs.core._EQ_.call(null,inst_21289,chlorophyll.bus.errors);
var state_21328__$1 = state_21328;
if(inst_21297){
var statearr_21345_21374 = state_21328__$1;
(statearr_21345_21374[(1)] = (11));

} else {
var statearr_21346_21375 = state_21328__$1;
(statearr_21346_21375[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (5))){
var state_21328__$1 = state_21328;
var statearr_21347_21376 = state_21328__$1;
(statearr_21347_21376[(2)] = null);

(statearr_21347_21376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (14))){
var inst_21287 = (state_21328[(8)]);
var inst_21307 = cljs.core.nth.call(null,inst_21287,(0),null);
var inst_21308 = chlorophyll.atom.sync.call(null,inst_21307);
var state_21328__$1 = state_21328;
var statearr_21348_21377 = state_21328__$1;
(statearr_21348_21377[(2)] = inst_21308);

(statearr_21348_21377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (16))){
var inst_21316 = (state_21328[(2)]);
var state_21328__$1 = state_21328;
var statearr_21349_21378 = state_21328__$1;
(statearr_21349_21378[(2)] = inst_21316);

(statearr_21349_21378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (10))){
var inst_21320 = (state_21328[(2)]);
var state_21328__$1 = (function (){var statearr_21350 = state_21328;
(statearr_21350[(10)] = inst_21320);

return statearr_21350;
})();
var statearr_21351_21379 = state_21328__$1;
(statearr_21351_21379[(2)] = null);

(statearr_21351_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (18))){
var state_21328__$1 = state_21328;
var statearr_21352_21380 = state_21328__$1;
(statearr_21352_21380[(2)] = null);

(statearr_21352_21380[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21329 === (8))){
var inst_21287 = (state_21328[(8)]);
var inst_21293 = cljs.core.nth.call(null,inst_21287,(0),null);
var inst_21294 = cljs.core.pr_str.call(null,inst_21293);
var inst_21295 = console.log(inst_21294);
var state_21328__$1 = state_21328;
var statearr_21353_21381 = state_21328__$1;
(statearr_21353_21381[(2)] = inst_21295);

(statearr_21353_21381[(1)] = (10));


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
});})(c__19473__auto__))
;
return ((function (switch__19452__auto__,c__19473__auto__){
return (function() {
var chlorophyll$bus$dispatcher_$_state_machine__19453__auto__ = null;
var chlorophyll$bus$dispatcher_$_state_machine__19453__auto____0 = (function (){
var statearr_21357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21357[(0)] = chlorophyll$bus$dispatcher_$_state_machine__19453__auto__);

(statearr_21357[(1)] = (1));

return statearr_21357;
});
var chlorophyll$bus$dispatcher_$_state_machine__19453__auto____1 = (function (state_21328){
while(true){
var ret_value__19454__auto__ = (function (){try{while(true){
var result__19455__auto__ = switch__19452__auto__.call(null,state_21328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19455__auto__;
}
break;
}
}catch (e21358){if((e21358 instanceof Object)){
var ex__19456__auto__ = e21358;
var statearr_21359_21382 = state_21328;
(statearr_21359_21382[(5)] = ex__19456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21383 = state_21328;
state_21328 = G__21383;
continue;
} else {
return ret_value__19454__auto__;
}
break;
}
});
chlorophyll$bus$dispatcher_$_state_machine__19453__auto__ = function(state_21328){
switch(arguments.length){
case 0:
return chlorophyll$bus$dispatcher_$_state_machine__19453__auto____0.call(this);
case 1:
return chlorophyll$bus$dispatcher_$_state_machine__19453__auto____1.call(this,state_21328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$bus$dispatcher_$_state_machine__19453__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$bus$dispatcher_$_state_machine__19453__auto____0;
chlorophyll$bus$dispatcher_$_state_machine__19453__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$bus$dispatcher_$_state_machine__19453__auto____1;
return chlorophyll$bus$dispatcher_$_state_machine__19453__auto__;
})()
;})(switch__19452__auto__,c__19473__auto__))
})();
var state__19475__auto__ = (function (){var statearr_21360 = f__19474__auto__.call(null);
(statearr_21360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19473__auto__);

return statearr_21360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19475__auto__);
});})(c__19473__auto__))
);

return c__19473__auto__;
});

//# sourceMappingURL=bus.js.map?rel=1443302809110