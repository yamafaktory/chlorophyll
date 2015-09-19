// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.bus');
goog.require('cljs.core');
goog.require('cljs.core.async');
chlorophyll.bus.events = cljs.core.async.chan.call(null);
chlorophyll.bus.errors = cljs.core.async.chan.call(null);
chlorophyll.bus.dispatcher = (function chlorophyll$bus$dispatcher(){
var c__19453__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto__){
return (function (){
var f__19454__auto__ = (function (){var switch__19432__auto__ = ((function (c__19453__auto__){
return (function (state_20078){
var state_val_20079 = (state_20078[(1)]);
if((state_val_20079 === (7))){
var inst_20047 = (state_20078[(7)]);
var inst_20045 = (state_20078[(8)]);
var inst_20045__$1 = (state_20078[(2)]);
var inst_20046 = cljs.core.nth.call(null,inst_20045__$1,(0),null);
var inst_20047__$1 = cljs.core.nth.call(null,inst_20045__$1,(1),null);
var inst_20048 = cljs.core._EQ_.call(null,inst_20047__$1,chlorophyll.bus.events);
var state_20078__$1 = (function (){var statearr_20080 = state_20078;
(statearr_20080[(7)] = inst_20047__$1);

(statearr_20080[(9)] = inst_20046);

(statearr_20080[(8)] = inst_20045__$1);

return statearr_20080;
})();
if(inst_20048){
var statearr_20081_20107 = state_20078__$1;
(statearr_20081_20107[(1)] = (8));

} else {
var statearr_20082_20108 = state_20078__$1;
(statearr_20082_20108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (1))){
var state_20078__$1 = state_20078;
var statearr_20083_20109 = state_20078__$1;
(statearr_20083_20109[(2)] = null);

(statearr_20083_20109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (4))){
var inst_20041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20042 = [chlorophyll.bus.events,chlorophyll.bus.errors];
var inst_20043 = (new cljs.core.PersistentVector(null,2,(5),inst_20041,inst_20042,null));
var state_20078__$1 = state_20078;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20078__$1,(7),inst_20043);
} else {
if((state_val_20079 === (15))){
var state_20078__$1 = state_20078;
var statearr_20084_20110 = state_20078__$1;
(statearr_20084_20110[(2)] = null);

(statearr_20084_20110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (13))){
var inst_20068 = (state_20078[(2)]);
var state_20078__$1 = state_20078;
var statearr_20085_20111 = state_20078__$1;
(statearr_20085_20111[(2)] = inst_20068);

(statearr_20085_20111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (6))){
var inst_20074 = (state_20078[(2)]);
var state_20078__$1 = state_20078;
var statearr_20086_20112 = state_20078__$1;
(statearr_20086_20112[(2)] = inst_20074);

(statearr_20086_20112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (3))){
var inst_20076 = (state_20078[(2)]);
var state_20078__$1 = state_20078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20078__$1,inst_20076);
} else {
if((state_val_20079 === (12))){
var inst_20047 = (state_20078[(7)]);
var inst_20062 = cljs.core._EQ_.call(null,inst_20047,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_20078__$1 = state_20078;
if(inst_20062){
var statearr_20087_20113 = state_20078__$1;
(statearr_20087_20113[(1)] = (14));

} else {
var statearr_20088_20114 = state_20078__$1;
(statearr_20088_20114[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (2))){
var state_20078__$1 = state_20078;
var statearr_20089_20115 = state_20078__$1;
(statearr_20089_20115[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (11))){
var inst_20045 = (state_20078[(8)]);
var inst_20058 = cljs.core.nth.call(null,inst_20045,(0),null);
var inst_20059 = cljs.core.pr_str.call(null,inst_20058);
var inst_20060 = console.log(inst_20059);
var state_20078__$1 = state_20078;
var statearr_20091_20116 = state_20078__$1;
(statearr_20091_20116[(2)] = inst_20060);

(statearr_20091_20116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (9))){
var inst_20047 = (state_20078[(7)]);
var inst_20055 = cljs.core._EQ_.call(null,inst_20047,chlorophyll.bus.errors);
var state_20078__$1 = state_20078;
if(inst_20055){
var statearr_20092_20117 = state_20078__$1;
(statearr_20092_20117[(1)] = (11));

} else {
var statearr_20093_20118 = state_20078__$1;
(statearr_20093_20118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (5))){
var state_20078__$1 = state_20078;
var statearr_20094_20119 = state_20078__$1;
(statearr_20094_20119[(2)] = null);

(statearr_20094_20119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (14))){
var inst_20046 = (state_20078[(9)]);
var state_20078__$1 = state_20078;
var statearr_20095_20120 = state_20078__$1;
(statearr_20095_20120[(2)] = inst_20046);

(statearr_20095_20120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (16))){
var inst_20066 = (state_20078[(2)]);
var state_20078__$1 = state_20078;
var statearr_20096_20121 = state_20078__$1;
(statearr_20096_20121[(2)] = inst_20066);

(statearr_20096_20121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (10))){
var inst_20070 = (state_20078[(2)]);
var state_20078__$1 = (function (){var statearr_20097 = state_20078;
(statearr_20097[(10)] = inst_20070);

return statearr_20097;
})();
var statearr_20098_20122 = state_20078__$1;
(statearr_20098_20122[(2)] = null);

(statearr_20098_20122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20079 === (8))){
var inst_20045 = (state_20078[(8)]);
var inst_20051 = cljs.core.nth.call(null,inst_20045,(0),null);
var inst_20052 = cljs.core.pr_str.call(null,inst_20051);
var inst_20053 = console.log(inst_20052);
var state_20078__$1 = state_20078;
var statearr_20099_20123 = state_20078__$1;
(statearr_20099_20123[(2)] = inst_20053);

(statearr_20099_20123[(1)] = (10));


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
});})(c__19453__auto__))
;
return ((function (switch__19432__auto__,c__19453__auto__){
return (function() {
var chlorophyll$bus$dispatcher_$_state_machine__19433__auto__ = null;
var chlorophyll$bus$dispatcher_$_state_machine__19433__auto____0 = (function (){
var statearr_20103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20103[(0)] = chlorophyll$bus$dispatcher_$_state_machine__19433__auto__);

(statearr_20103[(1)] = (1));

return statearr_20103;
});
var chlorophyll$bus$dispatcher_$_state_machine__19433__auto____1 = (function (state_20078){
while(true){
var ret_value__19434__auto__ = (function (){try{while(true){
var result__19435__auto__ = switch__19432__auto__.call(null,state_20078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19435__auto__;
}
break;
}
}catch (e20104){if((e20104 instanceof Object)){
var ex__19436__auto__ = e20104;
var statearr_20105_20124 = state_20078;
(statearr_20105_20124[(5)] = ex__19436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20125 = state_20078;
state_20078 = G__20125;
continue;
} else {
return ret_value__19434__auto__;
}
break;
}
});
chlorophyll$bus$dispatcher_$_state_machine__19433__auto__ = function(state_20078){
switch(arguments.length){
case 0:
return chlorophyll$bus$dispatcher_$_state_machine__19433__auto____0.call(this);
case 1:
return chlorophyll$bus$dispatcher_$_state_machine__19433__auto____1.call(this,state_20078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$bus$dispatcher_$_state_machine__19433__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$bus$dispatcher_$_state_machine__19433__auto____0;
chlorophyll$bus$dispatcher_$_state_machine__19433__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$bus$dispatcher_$_state_machine__19433__auto____1;
return chlorophyll$bus$dispatcher_$_state_machine__19433__auto__;
})()
;})(switch__19432__auto__,c__19453__auto__))
})();
var state__19455__auto__ = (function (){var statearr_20106 = f__19454__auto__.call(null);
(statearr_20106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto__);

return statearr_20106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto__))
);

return c__19453__auto__;
});

//# sourceMappingURL=bus.js.map?rel=1442646382286