// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.bus');
goog.require('cljs.core');
goog.require('cljs.core.async');
chlorophyll.bus.errors = cljs.core.async.chan.call(null);
chlorophyll.bus.events = cljs.core.async.chan.call(null);
chlorophyll.bus.storage = cljs.core.async.chan.call(null);
chlorophyll.bus.dispatcher = (function chlorophyll$bus$dispatcher(){
var c__19472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19472__auto__){
return (function (){
var f__19473__auto__ = (function (){var switch__19451__auto__ = ((function (c__19472__auto__){
return (function (state_20013){
var state_val_20014 = (state_20013[(1)]);
if((state_val_20014 === (7))){
var inst_19971 = (state_20013[(7)]);
var inst_19973 = (state_20013[(8)]);
var inst_19971__$1 = (state_20013[(2)]);
var inst_19972 = cljs.core.nth.call(null,inst_19971__$1,(0),null);
var inst_19973__$1 = cljs.core.nth.call(null,inst_19971__$1,(1),null);
var inst_19974 = cljs.core._EQ_.call(null,inst_19973__$1,chlorophyll.bus.events);
var state_20013__$1 = (function (){var statearr_20015 = state_20013;
(statearr_20015[(7)] = inst_19971__$1);

(statearr_20015[(9)] = inst_19972);

(statearr_20015[(8)] = inst_19973__$1);

return statearr_20015;
})();
if(inst_19974){
var statearr_20016_20046 = state_20013__$1;
(statearr_20016_20046[(1)] = (8));

} else {
var statearr_20017_20047 = state_20013__$1;
(statearr_20017_20047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (1))){
var state_20013__$1 = state_20013;
var statearr_20018_20048 = state_20013__$1;
(statearr_20018_20048[(2)] = null);

(statearr_20018_20048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (4))){
var inst_19967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19968 = [chlorophyll.bus.events,chlorophyll.bus.errors,chlorophyll.bus.storage];
var inst_19969 = (new cljs.core.PersistentVector(null,3,(5),inst_19967,inst_19968,null));
var state_20013__$1 = state_20013;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20013__$1,(7),inst_19969);
} else {
if((state_val_20014 === (15))){
var inst_19973 = (state_20013[(8)]);
var inst_19995 = cljs.core._EQ_.call(null,inst_19973,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_20013__$1 = state_20013;
if(inst_19995){
var statearr_20019_20049 = state_20013__$1;
(statearr_20019_20049[(1)] = (17));

} else {
var statearr_20020_20050 = state_20013__$1;
(statearr_20020_20050[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (13))){
var inst_20003 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20021_20051 = state_20013__$1;
(statearr_20021_20051[(2)] = inst_20003);

(statearr_20021_20051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (6))){
var inst_20009 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20022_20052 = state_20013__$1;
(statearr_20022_20052[(2)] = inst_20009);

(statearr_20022_20052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (17))){
var inst_19972 = (state_20013[(9)]);
var state_20013__$1 = state_20013;
var statearr_20023_20053 = state_20013__$1;
(statearr_20023_20053[(2)] = inst_19972);

(statearr_20023_20053[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (3))){
var inst_20011 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20013__$1,inst_20011);
} else {
if((state_val_20014 === (12))){
var inst_19973 = (state_20013[(8)]);
var inst_19988 = cljs.core._EQ_.call(null,inst_19973,chlorophyll.bus.storage);
var state_20013__$1 = state_20013;
if(inst_19988){
var statearr_20024_20054 = state_20013__$1;
(statearr_20024_20054[(1)] = (14));

} else {
var statearr_20025_20055 = state_20013__$1;
(statearr_20025_20055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (2))){
var state_20013__$1 = state_20013;
var statearr_20026_20056 = state_20013__$1;
(statearr_20026_20056[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (19))){
var inst_19999 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20028_20057 = state_20013__$1;
(statearr_20028_20057[(2)] = inst_19999);

(statearr_20028_20057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (11))){
var inst_19971 = (state_20013[(7)]);
var inst_19984 = cljs.core.nth.call(null,inst_19971,(0),null);
var inst_19985 = cljs.core.pr_str.call(null,inst_19984);
var inst_19986 = console.log(inst_19985);
var state_20013__$1 = state_20013;
var statearr_20029_20058 = state_20013__$1;
(statearr_20029_20058[(2)] = inst_19986);

(statearr_20029_20058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (9))){
var inst_19973 = (state_20013[(8)]);
var inst_19981 = cljs.core._EQ_.call(null,inst_19973,chlorophyll.bus.errors);
var state_20013__$1 = state_20013;
if(inst_19981){
var statearr_20030_20059 = state_20013__$1;
(statearr_20030_20059[(1)] = (11));

} else {
var statearr_20031_20060 = state_20013__$1;
(statearr_20031_20060[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (5))){
var state_20013__$1 = state_20013;
var statearr_20032_20061 = state_20013__$1;
(statearr_20032_20061[(2)] = null);

(statearr_20032_20061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (14))){
var inst_19971 = (state_20013[(7)]);
var inst_19991 = cljs.core.nth.call(null,inst_19971,(0),null);
var inst_19992 = cljs.core.pr_str.call(null,inst_19991);
var inst_19993 = console.log(inst_19992);
var state_20013__$1 = state_20013;
var statearr_20033_20062 = state_20013__$1;
(statearr_20033_20062[(2)] = inst_19993);

(statearr_20033_20062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (16))){
var inst_20001 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20034_20063 = state_20013__$1;
(statearr_20034_20063[(2)] = inst_20001);

(statearr_20034_20063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (10))){
var inst_20005 = (state_20013[(2)]);
var state_20013__$1 = (function (){var statearr_20035 = state_20013;
(statearr_20035[(10)] = inst_20005);

return statearr_20035;
})();
var statearr_20036_20064 = state_20013__$1;
(statearr_20036_20064[(2)] = null);

(statearr_20036_20064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (18))){
var state_20013__$1 = state_20013;
var statearr_20037_20065 = state_20013__$1;
(statearr_20037_20065[(2)] = null);

(statearr_20037_20065[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (8))){
var inst_19971 = (state_20013[(7)]);
var inst_19977 = cljs.core.nth.call(null,inst_19971,(0),null);
var inst_19978 = cljs.core.pr_str.call(null,inst_19977);
var inst_19979 = console.log(inst_19978);
var state_20013__$1 = state_20013;
var statearr_20038_20066 = state_20013__$1;
(statearr_20038_20066[(2)] = inst_19979);

(statearr_20038_20066[(1)] = (10));


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
});})(c__19472__auto__))
;
return ((function (switch__19451__auto__,c__19472__auto__){
return (function() {
var chlorophyll$bus$dispatcher_$_state_machine__19452__auto__ = null;
var chlorophyll$bus$dispatcher_$_state_machine__19452__auto____0 = (function (){
var statearr_20042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20042[(0)] = chlorophyll$bus$dispatcher_$_state_machine__19452__auto__);

(statearr_20042[(1)] = (1));

return statearr_20042;
});
var chlorophyll$bus$dispatcher_$_state_machine__19452__auto____1 = (function (state_20013){
while(true){
var ret_value__19453__auto__ = (function (){try{while(true){
var result__19454__auto__ = switch__19451__auto__.call(null,state_20013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19454__auto__;
}
break;
}
}catch (e20043){if((e20043 instanceof Object)){
var ex__19455__auto__ = e20043;
var statearr_20044_20067 = state_20013;
(statearr_20044_20067[(5)] = ex__19455__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20068 = state_20013;
state_20013 = G__20068;
continue;
} else {
return ret_value__19453__auto__;
}
break;
}
});
chlorophyll$bus$dispatcher_$_state_machine__19452__auto__ = function(state_20013){
switch(arguments.length){
case 0:
return chlorophyll$bus$dispatcher_$_state_machine__19452__auto____0.call(this);
case 1:
return chlorophyll$bus$dispatcher_$_state_machine__19452__auto____1.call(this,state_20013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$bus$dispatcher_$_state_machine__19452__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$bus$dispatcher_$_state_machine__19452__auto____0;
chlorophyll$bus$dispatcher_$_state_machine__19452__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$bus$dispatcher_$_state_machine__19452__auto____1;
return chlorophyll$bus$dispatcher_$_state_machine__19452__auto__;
})()
;})(switch__19451__auto__,c__19472__auto__))
})();
var state__19474__auto__ = (function (){var statearr_20045 = f__19473__auto__.call(null);
(statearr_20045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19472__auto__);

return statearr_20045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19474__auto__);
});})(c__19472__auto__))
);

return c__19472__auto__;
});

//# sourceMappingURL=bus.js.map?rel=1443127990688