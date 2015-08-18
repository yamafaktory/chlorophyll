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
var c__19931__auto___24236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19931__auto___24236){
return (function (){
var f__19932__auto__ = (function (){var switch__19866__auto__ = ((function (c__19931__auto___24236){
return (function (state_24207){
var state_val_24208 = (state_24207[(1)]);
if((state_val_24208 === (7))){
var inst_24174 = (state_24207[(7)]);
var inst_24176 = (state_24207[(8)]);
var inst_24174__$1 = (state_24207[(2)]);
var inst_24175 = cljs.core.nth.call(null,inst_24174__$1,(0),null);
var inst_24176__$1 = cljs.core.nth.call(null,inst_24174__$1,(1),null);
var inst_24177 = cljs.core._EQ_.call(null,inst_24176__$1,chlorophyll.bus.events);
var state_24207__$1 = (function (){var statearr_24209 = state_24207;
(statearr_24209[(7)] = inst_24174__$1);

(statearr_24209[(9)] = inst_24175);

(statearr_24209[(8)] = inst_24176__$1);

return statearr_24209;
})();
if(inst_24177){
var statearr_24210_24237 = state_24207__$1;
(statearr_24210_24237[(1)] = (8));

} else {
var statearr_24211_24238 = state_24207__$1;
(statearr_24211_24238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (1))){
var state_24207__$1 = state_24207;
var statearr_24212_24239 = state_24207__$1;
(statearr_24212_24239[(2)] = null);

(statearr_24212_24239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (4))){
var inst_24170 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24171 = [chlorophyll.bus.events,chlorophyll.bus.errors];
var inst_24172 = (new cljs.core.PersistentVector(null,2,(5),inst_24170,inst_24171,null));
var state_24207__$1 = state_24207;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24207__$1,(7),inst_24172);
} else {
if((state_val_24208 === (15))){
var state_24207__$1 = state_24207;
var statearr_24213_24240 = state_24207__$1;
(statearr_24213_24240[(2)] = null);

(statearr_24213_24240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (13))){
var inst_24197 = (state_24207[(2)]);
var state_24207__$1 = state_24207;
var statearr_24214_24241 = state_24207__$1;
(statearr_24214_24241[(2)] = inst_24197);

(statearr_24214_24241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (6))){
var inst_24203 = (state_24207[(2)]);
var state_24207__$1 = state_24207;
var statearr_24215_24242 = state_24207__$1;
(statearr_24215_24242[(2)] = inst_24203);

(statearr_24215_24242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (3))){
var inst_24205 = (state_24207[(2)]);
var state_24207__$1 = state_24207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24207__$1,inst_24205);
} else {
if((state_val_24208 === (12))){
var inst_24176 = (state_24207[(8)]);
var inst_24191 = cljs.core._EQ_.call(null,inst_24176,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_24207__$1 = state_24207;
if(inst_24191){
var statearr_24216_24243 = state_24207__$1;
(statearr_24216_24243[(1)] = (14));

} else {
var statearr_24217_24244 = state_24207__$1;
(statearr_24217_24244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (2))){
var state_24207__$1 = state_24207;
var statearr_24218_24245 = state_24207__$1;
(statearr_24218_24245[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (11))){
var inst_24174 = (state_24207[(7)]);
var inst_24187 = cljs.core.nth.call(null,inst_24174,(0),null);
var inst_24188 = cljs.core.pr_str.call(null,inst_24187);
var inst_24189 = console.log(inst_24188);
var state_24207__$1 = state_24207;
var statearr_24220_24246 = state_24207__$1;
(statearr_24220_24246[(2)] = inst_24189);

(statearr_24220_24246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (9))){
var inst_24176 = (state_24207[(8)]);
var inst_24184 = cljs.core._EQ_.call(null,inst_24176,chlorophyll.bus.errors);
var state_24207__$1 = state_24207;
if(inst_24184){
var statearr_24221_24247 = state_24207__$1;
(statearr_24221_24247[(1)] = (11));

} else {
var statearr_24222_24248 = state_24207__$1;
(statearr_24222_24248[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (5))){
var state_24207__$1 = state_24207;
var statearr_24223_24249 = state_24207__$1;
(statearr_24223_24249[(2)] = null);

(statearr_24223_24249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (14))){
var inst_24175 = (state_24207[(9)]);
var state_24207__$1 = state_24207;
var statearr_24224_24250 = state_24207__$1;
(statearr_24224_24250[(2)] = inst_24175);

(statearr_24224_24250[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (16))){
var inst_24195 = (state_24207[(2)]);
var state_24207__$1 = state_24207;
var statearr_24225_24251 = state_24207__$1;
(statearr_24225_24251[(2)] = inst_24195);

(statearr_24225_24251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (10))){
var inst_24199 = (state_24207[(2)]);
var state_24207__$1 = (function (){var statearr_24226 = state_24207;
(statearr_24226[(10)] = inst_24199);

return statearr_24226;
})();
var statearr_24227_24252 = state_24207__$1;
(statearr_24227_24252[(2)] = null);

(statearr_24227_24252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (8))){
var inst_24174 = (state_24207[(7)]);
var inst_24180 = cljs.core.nth.call(null,inst_24174,(0),null);
var inst_24181 = cljs.core.pr_str.call(null,inst_24180);
var inst_24182 = console.log(inst_24181);
var state_24207__$1 = state_24207;
var statearr_24228_24253 = state_24207__$1;
(statearr_24228_24253[(2)] = inst_24182);

(statearr_24228_24253[(1)] = (10));


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
});})(c__19931__auto___24236))
;
return ((function (switch__19866__auto__,c__19931__auto___24236){
return (function() {
var chlorophyll$core$main_$_state_machine__19867__auto__ = null;
var chlorophyll$core$main_$_state_machine__19867__auto____0 = (function (){
var statearr_24232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24232[(0)] = chlorophyll$core$main_$_state_machine__19867__auto__);

(statearr_24232[(1)] = (1));

return statearr_24232;
});
var chlorophyll$core$main_$_state_machine__19867__auto____1 = (function (state_24207){
while(true){
var ret_value__19868__auto__ = (function (){try{while(true){
var result__19869__auto__ = switch__19866__auto__.call(null,state_24207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19869__auto__;
}
break;
}
}catch (e24233){if((e24233 instanceof Object)){
var ex__19870__auto__ = e24233;
var statearr_24234_24254 = state_24207;
(statearr_24234_24254[(5)] = ex__19870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24255 = state_24207;
state_24207 = G__24255;
continue;
} else {
return ret_value__19868__auto__;
}
break;
}
});
chlorophyll$core$main_$_state_machine__19867__auto__ = function(state_24207){
switch(arguments.length){
case 0:
return chlorophyll$core$main_$_state_machine__19867__auto____0.call(this);
case 1:
return chlorophyll$core$main_$_state_machine__19867__auto____1.call(this,state_24207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$core$main_$_state_machine__19867__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$core$main_$_state_machine__19867__auto____0;
chlorophyll$core$main_$_state_machine__19867__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$core$main_$_state_machine__19867__auto____1;
return chlorophyll$core$main_$_state_machine__19867__auto__;
})()
;})(switch__19866__auto__,c__19931__auto___24236))
})();
var state__19933__auto__ = (function (){var statearr_24235 = f__19932__auto__.call(null);
(statearr_24235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19931__auto___24236);

return statearr_24235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19933__auto__);
});})(c__19931__auto___24236))
);


return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.app], null),document.getElementById("app"));
});
chlorophyll.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1439916834722