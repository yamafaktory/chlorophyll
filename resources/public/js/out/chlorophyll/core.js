// Compiled by ClojureScript 1.7.122 {}
goog.provide('chlorophyll.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.ui');
goog.require('chlorophyll.bus');
goog.require('chlorophyll.route');
goog.require('figwheel.client');
goog.require('cljs.core.async');
/**
 * The main function is a loop that manages the channels.
 */
chlorophyll.core.main = (function chlorophyll$core$main(){
chlorophyll.route.routes.call(null);

var c__19710__auto___31576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___31576){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___31576){
return (function (state_31547){
var state_val_31548 = (state_31547[(1)]);
if((state_val_31548 === (7))){
var inst_31516 = (state_31547[(7)]);
var inst_31514 = (state_31547[(8)]);
var inst_31514__$1 = (state_31547[(2)]);
var inst_31515 = cljs.core.nth.call(null,inst_31514__$1,(0),null);
var inst_31516__$1 = cljs.core.nth.call(null,inst_31514__$1,(1),null);
var inst_31517 = cljs.core._EQ_.call(null,inst_31516__$1,chlorophyll.bus.events);
var state_31547__$1 = (function (){var statearr_31549 = state_31547;
(statearr_31549[(7)] = inst_31516__$1);

(statearr_31549[(9)] = inst_31515);

(statearr_31549[(8)] = inst_31514__$1);

return statearr_31549;
})();
if(inst_31517){
var statearr_31550_31577 = state_31547__$1;
(statearr_31550_31577[(1)] = (8));

} else {
var statearr_31551_31578 = state_31547__$1;
(statearr_31551_31578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (1))){
var state_31547__$1 = state_31547;
var statearr_31552_31579 = state_31547__$1;
(statearr_31552_31579[(2)] = null);

(statearr_31552_31579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (4))){
var inst_31510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31511 = [chlorophyll.bus.events,chlorophyll.bus.errors];
var inst_31512 = (new cljs.core.PersistentVector(null,2,(5),inst_31510,inst_31511,null));
var state_31547__$1 = state_31547;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31547__$1,(7),inst_31512);
} else {
if((state_val_31548 === (15))){
var state_31547__$1 = state_31547;
var statearr_31553_31580 = state_31547__$1;
(statearr_31553_31580[(2)] = null);

(statearr_31553_31580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (13))){
var inst_31537 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31554_31581 = state_31547__$1;
(statearr_31554_31581[(2)] = inst_31537);

(statearr_31554_31581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (6))){
var inst_31543 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31555_31582 = state_31547__$1;
(statearr_31555_31582[(2)] = inst_31543);

(statearr_31555_31582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (3))){
var inst_31545 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31547__$1,inst_31545);
} else {
if((state_val_31548 === (12))){
var inst_31516 = (state_31547[(7)]);
var inst_31531 = cljs.core._EQ_.call(null,inst_31516,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_31547__$1 = state_31547;
if(inst_31531){
var statearr_31556_31583 = state_31547__$1;
(statearr_31556_31583[(1)] = (14));

} else {
var statearr_31557_31584 = state_31547__$1;
(statearr_31557_31584[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (2))){
var state_31547__$1 = state_31547;
var statearr_31558_31585 = state_31547__$1;
(statearr_31558_31585[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (11))){
var inst_31514 = (state_31547[(8)]);
var inst_31527 = cljs.core.nth.call(null,inst_31514,(0),null);
var inst_31528 = cljs.core.pr_str.call(null,inst_31527);
var inst_31529 = console.log(inst_31528);
var state_31547__$1 = state_31547;
var statearr_31560_31586 = state_31547__$1;
(statearr_31560_31586[(2)] = inst_31529);

(statearr_31560_31586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (9))){
var inst_31516 = (state_31547[(7)]);
var inst_31524 = cljs.core._EQ_.call(null,inst_31516,chlorophyll.bus.errors);
var state_31547__$1 = state_31547;
if(inst_31524){
var statearr_31561_31587 = state_31547__$1;
(statearr_31561_31587[(1)] = (11));

} else {
var statearr_31562_31588 = state_31547__$1;
(statearr_31562_31588[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (5))){
var state_31547__$1 = state_31547;
var statearr_31563_31589 = state_31547__$1;
(statearr_31563_31589[(2)] = null);

(statearr_31563_31589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (14))){
var inst_31515 = (state_31547[(9)]);
var state_31547__$1 = state_31547;
var statearr_31564_31590 = state_31547__$1;
(statearr_31564_31590[(2)] = inst_31515);

(statearr_31564_31590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (16))){
var inst_31535 = (state_31547[(2)]);
var state_31547__$1 = state_31547;
var statearr_31565_31591 = state_31547__$1;
(statearr_31565_31591[(2)] = inst_31535);

(statearr_31565_31591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (10))){
var inst_31539 = (state_31547[(2)]);
var state_31547__$1 = (function (){var statearr_31566 = state_31547;
(statearr_31566[(10)] = inst_31539);

return statearr_31566;
})();
var statearr_31567_31592 = state_31547__$1;
(statearr_31567_31592[(2)] = null);

(statearr_31567_31592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31548 === (8))){
var inst_31514 = (state_31547[(8)]);
var inst_31520 = cljs.core.nth.call(null,inst_31514,(0),null);
var inst_31521 = cljs.core.pr_str.call(null,inst_31520);
var inst_31522 = console.log(inst_31521);
var state_31547__$1 = state_31547;
var statearr_31568_31593 = state_31547__$1;
(statearr_31568_31593[(2)] = inst_31522);

(statearr_31568_31593[(1)] = (10));


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
});})(c__19710__auto___31576))
;
return ((function (switch__19645__auto__,c__19710__auto___31576){
return (function() {
var chlorophyll$core$main_$_state_machine__19646__auto__ = null;
var chlorophyll$core$main_$_state_machine__19646__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31572[(0)] = chlorophyll$core$main_$_state_machine__19646__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var chlorophyll$core$main_$_state_machine__19646__auto____1 = (function (state_31547){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_31547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e31573){if((e31573 instanceof Object)){
var ex__19649__auto__ = e31573;
var statearr_31574_31594 = state_31547;
(statearr_31574_31594[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31595 = state_31547;
state_31547 = G__31595;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
chlorophyll$core$main_$_state_machine__19646__auto__ = function(state_31547){
switch(arguments.length){
case 0:
return chlorophyll$core$main_$_state_machine__19646__auto____0.call(this);
case 1:
return chlorophyll$core$main_$_state_machine__19646__auto____1.call(this,state_31547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$core$main_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$core$main_$_state_machine__19646__auto____0;
chlorophyll$core$main_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$core$main_$_state_machine__19646__auto____1;
return chlorophyll$core$main_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___31576))
})();
var state__19712__auto__ = (function (){var statearr_31575 = f__19711__auto__.call(null);
(statearr_31575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___31576);

return statearr_31575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___31576))
);


return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.app], null),document.getElementById("app"));
});
chlorophyll.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1442169943564