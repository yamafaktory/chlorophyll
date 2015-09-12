// Compiled by ClojureScript 1.7.122 {}
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
var c__19716__auto___23964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___23964){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___23964){
return (function (state_23935){
var state_val_23936 = (state_23935[(1)]);
if((state_val_23936 === (7))){
var inst_23904 = (state_23935[(7)]);
var inst_23902 = (state_23935[(8)]);
var inst_23902__$1 = (state_23935[(2)]);
var inst_23903 = cljs.core.nth.call(null,inst_23902__$1,(0),null);
var inst_23904__$1 = cljs.core.nth.call(null,inst_23902__$1,(1),null);
var inst_23905 = cljs.core._EQ_.call(null,inst_23904__$1,chlorophyll.bus.events);
var state_23935__$1 = (function (){var statearr_23937 = state_23935;
(statearr_23937[(7)] = inst_23904__$1);

(statearr_23937[(9)] = inst_23903);

(statearr_23937[(8)] = inst_23902__$1);

return statearr_23937;
})();
if(inst_23905){
var statearr_23938_23965 = state_23935__$1;
(statearr_23938_23965[(1)] = (8));

} else {
var statearr_23939_23966 = state_23935__$1;
(statearr_23939_23966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (1))){
var state_23935__$1 = state_23935;
var statearr_23940_23967 = state_23935__$1;
(statearr_23940_23967[(2)] = null);

(statearr_23940_23967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (4))){
var inst_23898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23899 = [chlorophyll.bus.events,chlorophyll.bus.errors];
var inst_23900 = (new cljs.core.PersistentVector(null,2,(5),inst_23898,inst_23899,null));
var state_23935__$1 = state_23935;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23935__$1,(7),inst_23900);
} else {
if((state_val_23936 === (15))){
var state_23935__$1 = state_23935;
var statearr_23941_23968 = state_23935__$1;
(statearr_23941_23968[(2)] = null);

(statearr_23941_23968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (13))){
var inst_23925 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23942_23969 = state_23935__$1;
(statearr_23942_23969[(2)] = inst_23925);

(statearr_23942_23969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (6))){
var inst_23931 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23943_23970 = state_23935__$1;
(statearr_23943_23970[(2)] = inst_23931);

(statearr_23943_23970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (3))){
var inst_23933 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23935__$1,inst_23933);
} else {
if((state_val_23936 === (12))){
var inst_23904 = (state_23935[(7)]);
var inst_23919 = cljs.core._EQ_.call(null,inst_23904,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_23935__$1 = state_23935;
if(inst_23919){
var statearr_23944_23971 = state_23935__$1;
(statearr_23944_23971[(1)] = (14));

} else {
var statearr_23945_23972 = state_23935__$1;
(statearr_23945_23972[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (2))){
var state_23935__$1 = state_23935;
var statearr_23946_23973 = state_23935__$1;
(statearr_23946_23973[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (11))){
var inst_23902 = (state_23935[(8)]);
var inst_23915 = cljs.core.nth.call(null,inst_23902,(0),null);
var inst_23916 = cljs.core.pr_str.call(null,inst_23915);
var inst_23917 = console.log(inst_23916);
var state_23935__$1 = state_23935;
var statearr_23948_23974 = state_23935__$1;
(statearr_23948_23974[(2)] = inst_23917);

(statearr_23948_23974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (9))){
var inst_23904 = (state_23935[(7)]);
var inst_23912 = cljs.core._EQ_.call(null,inst_23904,chlorophyll.bus.errors);
var state_23935__$1 = state_23935;
if(inst_23912){
var statearr_23949_23975 = state_23935__$1;
(statearr_23949_23975[(1)] = (11));

} else {
var statearr_23950_23976 = state_23935__$1;
(statearr_23950_23976[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (5))){
var state_23935__$1 = state_23935;
var statearr_23951_23977 = state_23935__$1;
(statearr_23951_23977[(2)] = null);

(statearr_23951_23977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (14))){
var inst_23903 = (state_23935[(9)]);
var state_23935__$1 = state_23935;
var statearr_23952_23978 = state_23935__$1;
(statearr_23952_23978[(2)] = inst_23903);

(statearr_23952_23978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (16))){
var inst_23923 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23953_23979 = state_23935__$1;
(statearr_23953_23979[(2)] = inst_23923);

(statearr_23953_23979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (10))){
var inst_23927 = (state_23935[(2)]);
var state_23935__$1 = (function (){var statearr_23954 = state_23935;
(statearr_23954[(10)] = inst_23927);

return statearr_23954;
})();
var statearr_23955_23980 = state_23935__$1;
(statearr_23955_23980[(2)] = null);

(statearr_23955_23980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (8))){
var inst_23902 = (state_23935[(8)]);
var inst_23908 = cljs.core.nth.call(null,inst_23902,(0),null);
var inst_23909 = cljs.core.pr_str.call(null,inst_23908);
var inst_23910 = console.log(inst_23909);
var state_23935__$1 = state_23935;
var statearr_23956_23981 = state_23935__$1;
(statearr_23956_23981[(2)] = inst_23910);

(statearr_23956_23981[(1)] = (10));


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
});})(c__19716__auto___23964))
;
return ((function (switch__19651__auto__,c__19716__auto___23964){
return (function() {
var chlorophyll$core$main_$_state_machine__19652__auto__ = null;
var chlorophyll$core$main_$_state_machine__19652__auto____0 = (function (){
var statearr_23960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23960[(0)] = chlorophyll$core$main_$_state_machine__19652__auto__);

(statearr_23960[(1)] = (1));

return statearr_23960;
});
var chlorophyll$core$main_$_state_machine__19652__auto____1 = (function (state_23935){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_23935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e23961){if((e23961 instanceof Object)){
var ex__19655__auto__ = e23961;
var statearr_23962_23982 = state_23935;
(statearr_23962_23982[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23983 = state_23935;
state_23935 = G__23983;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
chlorophyll$core$main_$_state_machine__19652__auto__ = function(state_23935){
switch(arguments.length){
case 0:
return chlorophyll$core$main_$_state_machine__19652__auto____0.call(this);
case 1:
return chlorophyll$core$main_$_state_machine__19652__auto____1.call(this,state_23935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$core$main_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$core$main_$_state_machine__19652__auto____0;
chlorophyll$core$main_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$core$main_$_state_machine__19652__auto____1;
return chlorophyll$core$main_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___23964))
})();
var state__19718__auto__ = (function (){var statearr_23963 = f__19717__auto__.call(null);
(statearr_23963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___23964);

return statearr_23963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___23964))
);


return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.app], null),document.getElementById("app"));
});
chlorophyll.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1442099110752