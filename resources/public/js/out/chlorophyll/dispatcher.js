// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.bus');
goog.require('chlorophyll.route');
chlorophyll.dispatcher.when_storage = (function chlorophyll$dispatcher$when_storage(v){
chlorophyll.atom.sync.call(null,v);

return chlorophyll.route.channel_switch.call(null,chlorophyll.atom.get_set_channel.call(null));
});
chlorophyll.dispatcher.start = (function chlorophyll$dispatcher$start(){
var c__19473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19473__auto__){
return (function (){
var f__19474__auto__ = (function (){var switch__19452__auto__ = ((function (c__19473__auto__){
return (function (state_20205){
var state_val_20206 = (state_20205[(1)]);
if((state_val_20206 === (7))){
var inst_20164 = (state_20205[(7)]);
var inst_20166 = (state_20205[(8)]);
var inst_20164__$1 = (state_20205[(2)]);
var inst_20165 = cljs.core.nth.call(null,inst_20164__$1,(0),null);
var inst_20166__$1 = cljs.core.nth.call(null,inst_20164__$1,(1),null);
var inst_20167 = cljs.core._EQ_.call(null,inst_20166__$1,chlorophyll.bus.events);
var state_20205__$1 = (function (){var statearr_20207 = state_20205;
(statearr_20207[(7)] = inst_20164__$1);

(statearr_20207[(9)] = inst_20165);

(statearr_20207[(8)] = inst_20166__$1);

return statearr_20207;
})();
if(inst_20167){
var statearr_20208_20238 = state_20205__$1;
(statearr_20208_20238[(1)] = (8));

} else {
var statearr_20209_20239 = state_20205__$1;
(statearr_20209_20239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (1))){
var state_20205__$1 = state_20205;
var statearr_20210_20240 = state_20205__$1;
(statearr_20210_20240[(2)] = null);

(statearr_20210_20240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (4))){
var inst_20160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20161 = [chlorophyll.bus.events,chlorophyll.bus.errors,chlorophyll.bus.storage];
var inst_20162 = (new cljs.core.PersistentVector(null,3,(5),inst_20160,inst_20161,null));
var state_20205__$1 = state_20205;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20205__$1,(7),inst_20162);
} else {
if((state_val_20206 === (15))){
var inst_20166 = (state_20205[(8)]);
var inst_20187 = cljs.core._EQ_.call(null,inst_20166,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_20205__$1 = state_20205;
if(inst_20187){
var statearr_20211_20241 = state_20205__$1;
(statearr_20211_20241[(1)] = (17));

} else {
var statearr_20212_20242 = state_20205__$1;
(statearr_20212_20242[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (13))){
var inst_20195 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20213_20243 = state_20205__$1;
(statearr_20213_20243[(2)] = inst_20195);

(statearr_20213_20243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (6))){
var inst_20201 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20214_20244 = state_20205__$1;
(statearr_20214_20244[(2)] = inst_20201);

(statearr_20214_20244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (17))){
var inst_20165 = (state_20205[(9)]);
var state_20205__$1 = state_20205;
var statearr_20215_20245 = state_20205__$1;
(statearr_20215_20245[(2)] = inst_20165);

(statearr_20215_20245[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (3))){
var inst_20203 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20205__$1,inst_20203);
} else {
if((state_val_20206 === (12))){
var inst_20166 = (state_20205[(8)]);
var inst_20181 = cljs.core._EQ_.call(null,inst_20166,chlorophyll.bus.storage);
var state_20205__$1 = state_20205;
if(inst_20181){
var statearr_20216_20246 = state_20205__$1;
(statearr_20216_20246[(1)] = (14));

} else {
var statearr_20217_20247 = state_20205__$1;
(statearr_20217_20247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (2))){
var state_20205__$1 = state_20205;
var statearr_20218_20248 = state_20205__$1;
(statearr_20218_20248[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (19))){
var inst_20191 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20220_20249 = state_20205__$1;
(statearr_20220_20249[(2)] = inst_20191);

(statearr_20220_20249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (11))){
var inst_20164 = (state_20205[(7)]);
var inst_20177 = cljs.core.nth.call(null,inst_20164,(0),null);
var inst_20178 = cljs.core.pr_str.call(null,inst_20177);
var inst_20179 = console.log(inst_20178);
var state_20205__$1 = state_20205;
var statearr_20221_20250 = state_20205__$1;
(statearr_20221_20250[(2)] = inst_20179);

(statearr_20221_20250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (9))){
var inst_20166 = (state_20205[(8)]);
var inst_20174 = cljs.core._EQ_.call(null,inst_20166,chlorophyll.bus.errors);
var state_20205__$1 = state_20205;
if(inst_20174){
var statearr_20222_20251 = state_20205__$1;
(statearr_20222_20251[(1)] = (11));

} else {
var statearr_20223_20252 = state_20205__$1;
(statearr_20223_20252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (5))){
var state_20205__$1 = state_20205;
var statearr_20224_20253 = state_20205__$1;
(statearr_20224_20253[(2)] = null);

(statearr_20224_20253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (14))){
var inst_20164 = (state_20205[(7)]);
var inst_20184 = cljs.core.nth.call(null,inst_20164,(0),null);
var inst_20185 = chlorophyll.dispatcher.when_storage.call(null,inst_20184);
var state_20205__$1 = state_20205;
var statearr_20225_20254 = state_20205__$1;
(statearr_20225_20254[(2)] = inst_20185);

(statearr_20225_20254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (16))){
var inst_20193 = (state_20205[(2)]);
var state_20205__$1 = state_20205;
var statearr_20226_20255 = state_20205__$1;
(statearr_20226_20255[(2)] = inst_20193);

(statearr_20226_20255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (10))){
var inst_20197 = (state_20205[(2)]);
var state_20205__$1 = (function (){var statearr_20227 = state_20205;
(statearr_20227[(10)] = inst_20197);

return statearr_20227;
})();
var statearr_20228_20256 = state_20205__$1;
(statearr_20228_20256[(2)] = null);

(statearr_20228_20256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (18))){
var state_20205__$1 = state_20205;
var statearr_20229_20257 = state_20205__$1;
(statearr_20229_20257[(2)] = null);

(statearr_20229_20257[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20206 === (8))){
var inst_20164 = (state_20205[(7)]);
var inst_20170 = cljs.core.nth.call(null,inst_20164,(0),null);
var inst_20171 = cljs.core.pr_str.call(null,inst_20170);
var inst_20172 = console.log(inst_20171);
var state_20205__$1 = state_20205;
var statearr_20230_20258 = state_20205__$1;
(statearr_20230_20258[(2)] = inst_20172);

(statearr_20230_20258[(1)] = (10));


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
var chlorophyll$dispatcher$start_$_state_machine__19453__auto__ = null;
var chlorophyll$dispatcher$start_$_state_machine__19453__auto____0 = (function (){
var statearr_20234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20234[(0)] = chlorophyll$dispatcher$start_$_state_machine__19453__auto__);

(statearr_20234[(1)] = (1));

return statearr_20234;
});
var chlorophyll$dispatcher$start_$_state_machine__19453__auto____1 = (function (state_20205){
while(true){
var ret_value__19454__auto__ = (function (){try{while(true){
var result__19455__auto__ = switch__19452__auto__.call(null,state_20205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19455__auto__;
}
break;
}
}catch (e20235){if((e20235 instanceof Object)){
var ex__19456__auto__ = e20235;
var statearr_20236_20259 = state_20205;
(statearr_20236_20259[(5)] = ex__19456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20260 = state_20205;
state_20205 = G__20260;
continue;
} else {
return ret_value__19454__auto__;
}
break;
}
});
chlorophyll$dispatcher$start_$_state_machine__19453__auto__ = function(state_20205){
switch(arguments.length){
case 0:
return chlorophyll$dispatcher$start_$_state_machine__19453__auto____0.call(this);
case 1:
return chlorophyll$dispatcher$start_$_state_machine__19453__auto____1.call(this,state_20205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$dispatcher$start_$_state_machine__19453__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$dispatcher$start_$_state_machine__19453__auto____0;
chlorophyll$dispatcher$start_$_state_machine__19453__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$dispatcher$start_$_state_machine__19453__auto____1;
return chlorophyll$dispatcher$start_$_state_machine__19453__auto__;
})()
;})(switch__19452__auto__,c__19473__auto__))
})();
var state__19475__auto__ = (function (){var statearr_20237 = f__19474__auto__.call(null);
(statearr_20237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19473__auto__);

return statearr_20237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19475__auto__);
});})(c__19473__auto__))
);

return c__19473__auto__;
});

//# sourceMappingURL=dispatcher.js.map?rel=1443564320772