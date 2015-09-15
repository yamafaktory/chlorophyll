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
var c__19453__auto___19872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19453__auto___19872){
return (function (){
var f__19454__auto__ = (function (){var switch__19432__auto__ = ((function (c__19453__auto___19872){
return (function (state_19843){
var state_val_19844 = (state_19843[(1)]);
if((state_val_19844 === (7))){
var inst_19810 = (state_19843[(7)]);
var inst_19812 = (state_19843[(8)]);
var inst_19810__$1 = (state_19843[(2)]);
var inst_19811 = cljs.core.nth.call(null,inst_19810__$1,(0),null);
var inst_19812__$1 = cljs.core.nth.call(null,inst_19810__$1,(1),null);
var inst_19813 = cljs.core._EQ_.call(null,inst_19812__$1,chlorophyll.bus.events);
var state_19843__$1 = (function (){var statearr_19845 = state_19843;
(statearr_19845[(7)] = inst_19810__$1);

(statearr_19845[(8)] = inst_19812__$1);

(statearr_19845[(9)] = inst_19811);

return statearr_19845;
})();
if(inst_19813){
var statearr_19846_19873 = state_19843__$1;
(statearr_19846_19873[(1)] = (8));

} else {
var statearr_19847_19874 = state_19843__$1;
(statearr_19847_19874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (1))){
var state_19843__$1 = state_19843;
var statearr_19848_19875 = state_19843__$1;
(statearr_19848_19875[(2)] = null);

(statearr_19848_19875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (4))){
var inst_19806 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19807 = [chlorophyll.bus.events,chlorophyll.bus.errors];
var inst_19808 = (new cljs.core.PersistentVector(null,2,(5),inst_19806,inst_19807,null));
var state_19843__$1 = state_19843;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19843__$1,(7),inst_19808);
} else {
if((state_val_19844 === (15))){
var state_19843__$1 = state_19843;
var statearr_19849_19876 = state_19843__$1;
(statearr_19849_19876[(2)] = null);

(statearr_19849_19876[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (13))){
var inst_19833 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19850_19877 = state_19843__$1;
(statearr_19850_19877[(2)] = inst_19833);

(statearr_19850_19877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (6))){
var inst_19839 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19851_19878 = state_19843__$1;
(statearr_19851_19878[(2)] = inst_19839);

(statearr_19851_19878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (3))){
var inst_19841 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19843__$1,inst_19841);
} else {
if((state_val_19844 === (12))){
var inst_19812 = (state_19843[(8)]);
var inst_19827 = cljs.core._EQ_.call(null,inst_19812,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_19843__$1 = state_19843;
if(inst_19827){
var statearr_19852_19879 = state_19843__$1;
(statearr_19852_19879[(1)] = (14));

} else {
var statearr_19853_19880 = state_19843__$1;
(statearr_19853_19880[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (2))){
var state_19843__$1 = state_19843;
var statearr_19854_19881 = state_19843__$1;
(statearr_19854_19881[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (11))){
var inst_19810 = (state_19843[(7)]);
var inst_19823 = cljs.core.nth.call(null,inst_19810,(0),null);
var inst_19824 = cljs.core.pr_str.call(null,inst_19823);
var inst_19825 = console.log(inst_19824);
var state_19843__$1 = state_19843;
var statearr_19856_19882 = state_19843__$1;
(statearr_19856_19882[(2)] = inst_19825);

(statearr_19856_19882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (9))){
var inst_19812 = (state_19843[(8)]);
var inst_19820 = cljs.core._EQ_.call(null,inst_19812,chlorophyll.bus.errors);
var state_19843__$1 = state_19843;
if(inst_19820){
var statearr_19857_19883 = state_19843__$1;
(statearr_19857_19883[(1)] = (11));

} else {
var statearr_19858_19884 = state_19843__$1;
(statearr_19858_19884[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (5))){
var state_19843__$1 = state_19843;
var statearr_19859_19885 = state_19843__$1;
(statearr_19859_19885[(2)] = null);

(statearr_19859_19885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (14))){
var inst_19811 = (state_19843[(9)]);
var state_19843__$1 = state_19843;
var statearr_19860_19886 = state_19843__$1;
(statearr_19860_19886[(2)] = inst_19811);

(statearr_19860_19886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (16))){
var inst_19831 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19861_19887 = state_19843__$1;
(statearr_19861_19887[(2)] = inst_19831);

(statearr_19861_19887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (10))){
var inst_19835 = (state_19843[(2)]);
var state_19843__$1 = (function (){var statearr_19862 = state_19843;
(statearr_19862[(10)] = inst_19835);

return statearr_19862;
})();
var statearr_19863_19888 = state_19843__$1;
(statearr_19863_19888[(2)] = null);

(statearr_19863_19888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (8))){
var inst_19810 = (state_19843[(7)]);
var inst_19816 = cljs.core.nth.call(null,inst_19810,(0),null);
var inst_19817 = cljs.core.pr_str.call(null,inst_19816);
var inst_19818 = console.log(inst_19817);
var state_19843__$1 = state_19843;
var statearr_19864_19889 = state_19843__$1;
(statearr_19864_19889[(2)] = inst_19818);

(statearr_19864_19889[(1)] = (10));


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
});})(c__19453__auto___19872))
;
return ((function (switch__19432__auto__,c__19453__auto___19872){
return (function() {
var chlorophyll$core$main_$_state_machine__19433__auto__ = null;
var chlorophyll$core$main_$_state_machine__19433__auto____0 = (function (){
var statearr_19868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19868[(0)] = chlorophyll$core$main_$_state_machine__19433__auto__);

(statearr_19868[(1)] = (1));

return statearr_19868;
});
var chlorophyll$core$main_$_state_machine__19433__auto____1 = (function (state_19843){
while(true){
var ret_value__19434__auto__ = (function (){try{while(true){
var result__19435__auto__ = switch__19432__auto__.call(null,state_19843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19435__auto__;
}
break;
}
}catch (e19869){if((e19869 instanceof Object)){
var ex__19436__auto__ = e19869;
var statearr_19870_19890 = state_19843;
(statearr_19870_19890[(5)] = ex__19436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19891 = state_19843;
state_19843 = G__19891;
continue;
} else {
return ret_value__19434__auto__;
}
break;
}
});
chlorophyll$core$main_$_state_machine__19433__auto__ = function(state_19843){
switch(arguments.length){
case 0:
return chlorophyll$core$main_$_state_machine__19433__auto____0.call(this);
case 1:
return chlorophyll$core$main_$_state_machine__19433__auto____1.call(this,state_19843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chlorophyll$core$main_$_state_machine__19433__auto__.cljs$core$IFn$_invoke$arity$0 = chlorophyll$core$main_$_state_machine__19433__auto____0;
chlorophyll$core$main_$_state_machine__19433__auto__.cljs$core$IFn$_invoke$arity$1 = chlorophyll$core$main_$_state_machine__19433__auto____1;
return chlorophyll$core$main_$_state_machine__19433__auto__;
})()
;})(switch__19432__auto__,c__19453__auto___19872))
})();
var state__19455__auto__ = (function (){var statearr_19871 = f__19454__auto__.call(null);
(statearr_19871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19453__auto___19872);

return statearr_19871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19455__auto__);
});})(c__19453__auto___19872))
);


return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.app], null),document.getElementById("app"));
});
chlorophyll.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1442341131324