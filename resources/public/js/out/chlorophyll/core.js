// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.ui');
goog.require('chlorophyll.bus');
goog.require('figwheel.client');
goog.require('cljs.core.async');
/**
 * The main function is a loop that manages the channels.
 */
chlorophyll.core.main = (function chlorophyll$core$main(){
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_24077){
var state_val_24078 = (state_24077[(1)]);
if((state_val_24078 === (7))){
var inst_24046 = (state_24077[(7)]);
var inst_24044 = (state_24077[(8)]);
var inst_24044__$1 = (state_24077[(2)]);
var inst_24045 = cljs.core.nth.call(null,inst_24044__$1,(0),null);
var inst_24046__$1 = cljs.core.nth.call(null,inst_24044__$1,(1),null);
var inst_24047 = cljs.core._EQ_.call(null,inst_24046__$1,chlorophyll.bus.events);
var state_24077__$1 = (function (){var statearr_24079 = state_24077;
(statearr_24079[(7)] = inst_24046__$1);

(statearr_24079[(8)] = inst_24044__$1);

(statearr_24079[(9)] = inst_24045);

return statearr_24079;
})();
if(inst_24047){
var statearr_24080_24106 = state_24077__$1;
(statearr_24080_24106[(1)] = (8));

} else {
var statearr_24081_24107 = state_24077__$1;
(statearr_24081_24107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (1))){
var state_24077__$1 = state_24077;
var statearr_24082_24108 = state_24077__$1;
(statearr_24082_24108[(2)] = null);

(statearr_24082_24108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (4))){
var inst_24040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24041 = [chlorophyll.bus.events,chlorophyll.bus.errors];
var inst_24042 = (new cljs.core.PersistentVector(null,2,(5),inst_24040,inst_24041,null));
var state_24077__$1 = state_24077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24077__$1,(7),inst_24042);
} else {
if((state_val_24078 === (15))){
var state_24077__$1 = state_24077;
var statearr_24083_24109 = state_24077__$1;
(statearr_24083_24109[(2)] = null);

(statearr_24083_24109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (13))){
var inst_24067 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24084_24110 = state_24077__$1;
(statearr_24084_24110[(2)] = inst_24067);

(statearr_24084_24110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (6))){
var inst_24073 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24085_24111 = state_24077__$1;
(statearr_24085_24111[(2)] = inst_24073);

(statearr_24085_24111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (3))){
var inst_24075 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24077__$1,inst_24075);
} else {
if((state_val_24078 === (12))){
var inst_24046 = (state_24077[(7)]);
var inst_24061 = cljs.core._EQ_.call(null,inst_24046,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_24077__$1 = state_24077;
if(inst_24061){
var statearr_24086_24112 = state_24077__$1;
(statearr_24086_24112[(1)] = (14));

} else {
var statearr_24087_24113 = state_24077__$1;
(statearr_24087_24113[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (2))){
var state_24077__$1 = state_24077;
var statearr_24088_24114 = state_24077__$1;
(statearr_24088_24114[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (11))){
var inst_24044 = (state_24077[(8)]);
var inst_24057 = cljs.core.nth.call(null,inst_24044,(0),null);
var inst_24058 = cljs.core.pr_str.call(null,inst_24057);
var inst_24059 = console.log(inst_24058);
var state_24077__$1 = state_24077;
var statearr_24090_24115 = state_24077__$1;
(statearr_24090_24115[(2)] = inst_24059);

(statearr_24090_24115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (9))){
var inst_24046 = (state_24077[(7)]);
var inst_24054 = cljs.core._EQ_.call(null,inst_24046,chlorophyll.bus.errors);
var state_24077__$1 = state_24077;
if(inst_24054){
var statearr_24091_24116 = state_24077__$1;
(statearr_24091_24116[(1)] = (11));

} else {
var statearr_24092_24117 = state_24077__$1;
(statearr_24092_24117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (5))){
var state_24077__$1 = state_24077;
var statearr_24093_24118 = state_24077__$1;
(statearr_24093_24118[(2)] = null);

(statearr_24093_24118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (14))){
var inst_24045 = (state_24077[(9)]);
var state_24077__$1 = state_24077;
var statearr_24094_24119 = state_24077__$1;
(statearr_24094_24119[(2)] = inst_24045);

(statearr_24094_24119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (16))){
var inst_24065 = (state_24077[(2)]);
var state_24077__$1 = state_24077;
var statearr_24095_24120 = state_24077__$1;
(statearr_24095_24120[(2)] = inst_24065);

(statearr_24095_24120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (10))){
var inst_24069 = (state_24077[(2)]);
var state_24077__$1 = (function (){var statearr_24096 = state_24077;
(statearr_24096[(10)] = inst_24069);

return statearr_24096;
})();
var statearr_24097_24121 = state_24077__$1;
(statearr_24097_24121[(2)] = null);

(statearr_24097_24121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24078 === (8))){
var inst_24044 = (state_24077[(8)]);
var inst_24050 = cljs.core.nth.call(null,inst_24044,(0),null);
var inst_24051 = cljs.core.pr_str.call(null,inst_24050);
var inst_24052 = console.log(inst_24051);
var state_24077__$1 = state_24077;
var statearr_24098_24122 = state_24077__$1;
(statearr_24098_24122[(2)] = inst_24052);

(statearr_24098_24122[(1)] = (10));


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
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var chlorophyll$core$main_$_state_machine__19870__auto__ = null;
var chlorophyll$core$main_$_state_machine__19870__auto____0 = (function (){
var statearr_24102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24102[(0)] = chlorophyll$core$main_$_state_machine__19870__auto__);

(statearr_24102[(1)] = (1));

return statearr_24102;
});
var chlorophyll$core$main_$_state_machine__19870__auto____1 = (function (state_24077){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_24077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e24103){if((e24103 instanceof Object)){
var ex__19873__auto__ = e24103;
var statearr_24104_24123 = state_24077;
(statearr_24104_24123[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24124 = state_24077;
state_24077 = G__24124;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
chlorophyll$core$main_$_state_machine__19870__auto__ = function(state_24077){
switch(arguments.length){
case 0:
return chlorophyll$core$main_$_state_machine__19870__auto____0.call(this);
case 1:
return chlorophyll$core$main_$_state_machine__19870__auto____1.call(this,state_24077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$core$main_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$core$main_$_state_machine__19870__auto____0;
chlorophyll$core$main_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$core$main_$_state_machine__19870__auto____1;
return chlorophyll$core$main_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_24105 = f__19935__auto__.call(null);
(statearr_24105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_24105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.app], null),document.getElementById("app"));
chlorophyll.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1438461399684