// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27705__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27706__i = 0, G__27706__a = new Array(arguments.length -  0);
while (G__27706__i < G__27706__a.length) {G__27706__a[G__27706__i] = arguments[G__27706__i + 0]; ++G__27706__i;}
  args = new cljs.core.IndexedSeq(G__27706__a,0);
} 
return G__27705__delegate.call(this,args);};
G__27705.cljs$lang$maxFixedArity = 0;
G__27705.cljs$lang$applyTo = (function (arglist__27707){
var args = cljs.core.seq(arglist__27707);
return G__27705__delegate(args);
});
G__27705.cljs$core$IFn$_invoke$arity$variadic = G__27705__delegate;
return G__27705;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27708){
var map__27711 = p__27708;
var map__27711__$1 = ((((!((map__27711 == null)))?((((map__27711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27711):map__27711);
var message = cljs.core.get.call(null,map__27711__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27711__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16337__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16325__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16325__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16325__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19856__auto___27859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___27859,ch){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___27859,ch){
return (function (state_27829){
var state_val_27830 = (state_27829[(1)]);
if((state_val_27830 === (7))){
var inst_27825 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27831_27860 = state_27829__$1;
(statearr_27831_27860[(2)] = inst_27825);

(statearr_27831_27860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (1))){
var state_27829__$1 = state_27829;
var statearr_27832_27861 = state_27829__$1;
(statearr_27832_27861[(2)] = null);

(statearr_27832_27861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (4))){
var inst_27788 = (state_27829[(7)]);
var inst_27788__$1 = (state_27829[(2)]);
var state_27829__$1 = (function (){var statearr_27833 = state_27829;
(statearr_27833[(7)] = inst_27788__$1);

return statearr_27833;
})();
if(cljs.core.truth_(inst_27788__$1)){
var statearr_27834_27862 = state_27829__$1;
(statearr_27834_27862[(1)] = (5));

} else {
var statearr_27835_27863 = state_27829__$1;
(statearr_27835_27863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (15))){
var inst_27795 = (state_27829[(8)]);
var inst_27810 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27795);
var inst_27811 = cljs.core.first.call(null,inst_27810);
var inst_27812 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27811);
var inst_27813 = console.warn("Figwheel: Not loading code with warnings - ",inst_27812);
var state_27829__$1 = state_27829;
var statearr_27836_27864 = state_27829__$1;
(statearr_27836_27864[(2)] = inst_27813);

(statearr_27836_27864[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (13))){
var inst_27818 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27837_27865 = state_27829__$1;
(statearr_27837_27865[(2)] = inst_27818);

(statearr_27837_27865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (6))){
var state_27829__$1 = state_27829;
var statearr_27838_27866 = state_27829__$1;
(statearr_27838_27866[(2)] = null);

(statearr_27838_27866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (17))){
var inst_27816 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27839_27867 = state_27829__$1;
(statearr_27839_27867[(2)] = inst_27816);

(statearr_27839_27867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (3))){
var inst_27827 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27829__$1,inst_27827);
} else {
if((state_val_27830 === (12))){
var inst_27794 = (state_27829[(9)]);
var inst_27808 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27794,opts);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27808)){
var statearr_27840_27868 = state_27829__$1;
(statearr_27840_27868[(1)] = (15));

} else {
var statearr_27841_27869 = state_27829__$1;
(statearr_27841_27869[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (2))){
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27829__$1,(4),ch);
} else {
if((state_val_27830 === (11))){
var inst_27795 = (state_27829[(8)]);
var inst_27800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27801 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27795);
var inst_27802 = cljs.core.async.timeout.call(null,(1000));
var inst_27803 = [inst_27801,inst_27802];
var inst_27804 = (new cljs.core.PersistentVector(null,2,(5),inst_27800,inst_27803,null));
var state_27829__$1 = state_27829;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27829__$1,(14),inst_27804);
} else {
if((state_val_27830 === (9))){
var state_27829__$1 = state_27829;
var statearr_27842_27870 = state_27829__$1;
(statearr_27842_27870[(2)] = null);

(statearr_27842_27870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (5))){
var inst_27788 = (state_27829[(7)]);
var inst_27790 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27791 = (new cljs.core.PersistentArrayMap(null,2,inst_27790,null));
var inst_27792 = (new cljs.core.PersistentHashSet(null,inst_27791,null));
var inst_27793 = figwheel.client.focus_msgs.call(null,inst_27792,inst_27788);
var inst_27794 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27793);
var inst_27795 = cljs.core.first.call(null,inst_27793);
var inst_27796 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_27829__$1 = (function (){var statearr_27843 = state_27829;
(statearr_27843[(9)] = inst_27794);

(statearr_27843[(8)] = inst_27795);

return statearr_27843;
})();
if(cljs.core.truth_(inst_27796)){
var statearr_27844_27871 = state_27829__$1;
(statearr_27844_27871[(1)] = (8));

} else {
var statearr_27845_27872 = state_27829__$1;
(statearr_27845_27872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (14))){
var inst_27806 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27846_27873 = state_27829__$1;
(statearr_27846_27873[(2)] = inst_27806);

(statearr_27846_27873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (16))){
var state_27829__$1 = state_27829;
var statearr_27847_27874 = state_27829__$1;
(statearr_27847_27874[(2)] = null);

(statearr_27847_27874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (10))){
var inst_27821 = (state_27829[(2)]);
var state_27829__$1 = (function (){var statearr_27848 = state_27829;
(statearr_27848[(10)] = inst_27821);

return statearr_27848;
})();
var statearr_27849_27875 = state_27829__$1;
(statearr_27849_27875[(2)] = null);

(statearr_27849_27875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (8))){
var inst_27794 = (state_27829[(9)]);
var inst_27798 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27794,opts);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27798)){
var statearr_27850_27876 = state_27829__$1;
(statearr_27850_27876[(1)] = (11));

} else {
var statearr_27851_27877 = state_27829__$1;
(statearr_27851_27877[(1)] = (12));

}

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
});})(c__19856__auto___27859,ch))
;
return ((function (switch__19791__auto__,c__19856__auto___27859,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19792__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19792__auto____0 = (function (){
var statearr_27855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27855[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19792__auto__);

(statearr_27855[(1)] = (1));

return statearr_27855;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19792__auto____1 = (function (state_27829){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_27829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e27856){if((e27856 instanceof Object)){
var ex__19795__auto__ = e27856;
var statearr_27857_27878 = state_27829;
(statearr_27857_27878[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27879 = state_27829;
state_27829 = G__27879;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19792__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19792__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19792__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19792__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19792__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___27859,ch))
})();
var state__19858__auto__ = (function (){var statearr_27858 = f__19857__auto__.call(null);
(statearr_27858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___27859);

return statearr_27858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___27859,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27880_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27880_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27887 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27887){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27885 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27886 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27885,_STAR_print_newline_STAR_27886,base_path_27887){
return (function() { 
var G__27888__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27889__i = 0, G__27889__a = new Array(arguments.length -  0);
while (G__27889__i < G__27889__a.length) {G__27889__a[G__27889__i] = arguments[G__27889__i + 0]; ++G__27889__i;}
  args = new cljs.core.IndexedSeq(G__27889__a,0);
} 
return G__27888__delegate.call(this,args);};
G__27888.cljs$lang$maxFixedArity = 0;
G__27888.cljs$lang$applyTo = (function (arglist__27890){
var args = cljs.core.seq(arglist__27890);
return G__27888__delegate(args);
});
G__27888.cljs$core$IFn$_invoke$arity$variadic = G__27888__delegate;
return G__27888;
})()
;})(_STAR_print_fn_STAR_27885,_STAR_print_newline_STAR_27886,base_path_27887))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27886;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27885;
}}catch (e27884){if((e27884 instanceof Error)){
var e = e27884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27887], null));
} else {
var e = e27884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27887))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27891){
var map__27898 = p__27891;
var map__27898__$1 = ((((!((map__27898 == null)))?((((map__27898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27898):map__27898);
var opts = map__27898__$1;
var build_id = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27898,map__27898__$1,opts,build_id){
return (function (p__27900){
var vec__27901 = p__27900;
var map__27902 = cljs.core.nth.call(null,vec__27901,(0),null);
var map__27902__$1 = ((((!((map__27902 == null)))?((((map__27902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27902):map__27902);
var msg = map__27902__$1;
var msg_name = cljs.core.get.call(null,map__27902__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27901,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27901,map__27902,map__27902__$1,msg,msg_name,_,map__27898,map__27898__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27901,map__27902,map__27902__$1,msg,msg_name,_,map__27898,map__27898__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27898,map__27898__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27908){
var vec__27909 = p__27908;
var map__27910 = cljs.core.nth.call(null,vec__27909,(0),null);
var map__27910__$1 = ((((!((map__27910 == null)))?((((map__27910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27910):map__27910);
var msg = map__27910__$1;
var msg_name = cljs.core.get.call(null,map__27910__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27909,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27912){
var map__27922 = p__27912;
var map__27922__$1 = ((((!((map__27922 == null)))?((((map__27922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27922):map__27922);
var on_compile_warning = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27922,map__27922__$1,on_compile_warning,on_compile_fail){
return (function (p__27924){
var vec__27925 = p__27924;
var map__27926 = cljs.core.nth.call(null,vec__27925,(0),null);
var map__27926__$1 = ((((!((map__27926 == null)))?((((map__27926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27926):map__27926);
var msg = map__27926__$1;
var msg_name = cljs.core.get.call(null,map__27926__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27925,(1));
var pred__27928 = cljs.core._EQ_;
var expr__27929 = msg_name;
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27929))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27929))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27922,map__27922__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__,msg_hist,msg_names,msg){
return (function (state_28145){
var state_val_28146 = (state_28145[(1)]);
if((state_val_28146 === (7))){
var inst_28069 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28069)){
var statearr_28147_28193 = state_28145__$1;
(statearr_28147_28193[(1)] = (8));

} else {
var statearr_28148_28194 = state_28145__$1;
(statearr_28148_28194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (20))){
var inst_28139 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28149_28195 = state_28145__$1;
(statearr_28149_28195[(2)] = inst_28139);

(statearr_28149_28195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (27))){
var inst_28135 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28150_28196 = state_28145__$1;
(statearr_28150_28196[(2)] = inst_28135);

(statearr_28150_28196[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (1))){
var inst_28062 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28062)){
var statearr_28151_28197 = state_28145__$1;
(statearr_28151_28197[(1)] = (2));

} else {
var statearr_28152_28198 = state_28145__$1;
(statearr_28152_28198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (24))){
var inst_28137 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28153_28199 = state_28145__$1;
(statearr_28153_28199[(2)] = inst_28137);

(statearr_28153_28199[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (4))){
var inst_28143 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28145__$1,inst_28143);
} else {
if((state_val_28146 === (15))){
var inst_28141 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28154_28200 = state_28145__$1;
(statearr_28154_28200[(2)] = inst_28141);

(statearr_28154_28200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (21))){
var inst_28100 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28155_28201 = state_28145__$1;
(statearr_28155_28201[(2)] = inst_28100);

(statearr_28155_28201[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (31))){
var inst_28124 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28124)){
var statearr_28156_28202 = state_28145__$1;
(statearr_28156_28202[(1)] = (34));

} else {
var statearr_28157_28203 = state_28145__$1;
(statearr_28157_28203[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (32))){
var inst_28133 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28158_28204 = state_28145__$1;
(statearr_28158_28204[(2)] = inst_28133);

(statearr_28158_28204[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (33))){
var inst_28122 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28159_28205 = state_28145__$1;
(statearr_28159_28205[(2)] = inst_28122);

(statearr_28159_28205[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (13))){
var inst_28083 = figwheel.client.heads_up.clear.call(null);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(16),inst_28083);
} else {
if((state_val_28146 === (22))){
var inst_28104 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28105 = figwheel.client.heads_up.append_message.call(null,inst_28104);
var state_28145__$1 = state_28145;
var statearr_28160_28206 = state_28145__$1;
(statearr_28160_28206[(2)] = inst_28105);

(statearr_28160_28206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (36))){
var inst_28131 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28161_28207 = state_28145__$1;
(statearr_28161_28207[(2)] = inst_28131);

(statearr_28161_28207[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (29))){
var inst_28115 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28162_28208 = state_28145__$1;
(statearr_28162_28208[(2)] = inst_28115);

(statearr_28162_28208[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (6))){
var inst_28064 = (state_28145[(7)]);
var state_28145__$1 = state_28145;
var statearr_28163_28209 = state_28145__$1;
(statearr_28163_28209[(2)] = inst_28064);

(statearr_28163_28209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (28))){
var inst_28111 = (state_28145[(2)]);
var inst_28112 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28113 = figwheel.client.heads_up.display_warning.call(null,inst_28112);
var state_28145__$1 = (function (){var statearr_28164 = state_28145;
(statearr_28164[(8)] = inst_28111);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(29),inst_28113);
} else {
if((state_val_28146 === (25))){
var inst_28109 = figwheel.client.heads_up.clear.call(null);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(28),inst_28109);
} else {
if((state_val_28146 === (34))){
var inst_28126 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(37),inst_28126);
} else {
if((state_val_28146 === (17))){
var inst_28091 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28165_28210 = state_28145__$1;
(statearr_28165_28210[(2)] = inst_28091);

(statearr_28165_28210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (3))){
var inst_28081 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28081)){
var statearr_28166_28211 = state_28145__$1;
(statearr_28166_28211[(1)] = (13));

} else {
var statearr_28167_28212 = state_28145__$1;
(statearr_28167_28212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (12))){
var inst_28077 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28168_28213 = state_28145__$1;
(statearr_28168_28213[(2)] = inst_28077);

(statearr_28168_28213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (2))){
var inst_28064 = (state_28145[(7)]);
var inst_28064__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28145__$1 = (function (){var statearr_28169 = state_28145;
(statearr_28169[(7)] = inst_28064__$1);

return statearr_28169;
})();
if(cljs.core.truth_(inst_28064__$1)){
var statearr_28170_28214 = state_28145__$1;
(statearr_28170_28214[(1)] = (5));

} else {
var statearr_28171_28215 = state_28145__$1;
(statearr_28171_28215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (23))){
var inst_28107 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28107)){
var statearr_28172_28216 = state_28145__$1;
(statearr_28172_28216[(1)] = (25));

} else {
var statearr_28173_28217 = state_28145__$1;
(statearr_28173_28217[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (35))){
var state_28145__$1 = state_28145;
var statearr_28174_28218 = state_28145__$1;
(statearr_28174_28218[(2)] = null);

(statearr_28174_28218[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (19))){
var inst_28102 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28102)){
var statearr_28175_28219 = state_28145__$1;
(statearr_28175_28219[(1)] = (22));

} else {
var statearr_28176_28220 = state_28145__$1;
(statearr_28176_28220[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (11))){
var inst_28073 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28177_28221 = state_28145__$1;
(statearr_28177_28221[(2)] = inst_28073);

(statearr_28177_28221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (9))){
var inst_28075 = figwheel.client.heads_up.clear.call(null);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(12),inst_28075);
} else {
if((state_val_28146 === (5))){
var inst_28066 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28145__$1 = state_28145;
var statearr_28178_28222 = state_28145__$1;
(statearr_28178_28222[(2)] = inst_28066);

(statearr_28178_28222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (14))){
var inst_28093 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28093)){
var statearr_28179_28223 = state_28145__$1;
(statearr_28179_28223[(1)] = (18));

} else {
var statearr_28180_28224 = state_28145__$1;
(statearr_28180_28224[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (26))){
var inst_28117 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28145__$1 = state_28145;
if(cljs.core.truth_(inst_28117)){
var statearr_28181_28225 = state_28145__$1;
(statearr_28181_28225[(1)] = (30));

} else {
var statearr_28182_28226 = state_28145__$1;
(statearr_28182_28226[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (16))){
var inst_28085 = (state_28145[(2)]);
var inst_28086 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28087 = figwheel.client.format_messages.call(null,inst_28086);
var inst_28088 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28089 = figwheel.client.heads_up.display_error.call(null,inst_28087,inst_28088);
var state_28145__$1 = (function (){var statearr_28183 = state_28145;
(statearr_28183[(9)] = inst_28085);

return statearr_28183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(17),inst_28089);
} else {
if((state_val_28146 === (30))){
var inst_28119 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28120 = figwheel.client.heads_up.display_warning.call(null,inst_28119);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(33),inst_28120);
} else {
if((state_val_28146 === (10))){
var inst_28079 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28184_28227 = state_28145__$1;
(statearr_28184_28227[(2)] = inst_28079);

(statearr_28184_28227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (18))){
var inst_28095 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28096 = figwheel.client.format_messages.call(null,inst_28095);
var inst_28097 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28098 = figwheel.client.heads_up.display_error.call(null,inst_28096,inst_28097);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(21),inst_28098);
} else {
if((state_val_28146 === (37))){
var inst_28128 = (state_28145[(2)]);
var state_28145__$1 = state_28145;
var statearr_28185_28228 = state_28145__$1;
(statearr_28185_28228[(2)] = inst_28128);

(statearr_28185_28228[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28146 === (8))){
var inst_28071 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28145__$1 = state_28145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28145__$1,(11),inst_28071);
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
});})(c__19856__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19791__auto__,c__19856__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto____0 = (function (){
var statearr_28189 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28189[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto__);

(statearr_28189[(1)] = (1));

return statearr_28189;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto____1 = (function (state_28145){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_28145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e28190){if((e28190 instanceof Object)){
var ex__19795__auto__ = e28190;
var statearr_28191_28229 = state_28145;
(statearr_28191_28229[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28230 = state_28145;
state_28145 = G__28230;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto__ = function(state_28145){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto____1.call(this,state_28145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__,msg_hist,msg_names,msg))
})();
var state__19858__auto__ = (function (){var statearr_28192 = f__19857__auto__.call(null);
(statearr_28192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_28192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__,msg_hist,msg_names,msg))
);

return c__19856__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19856__auto___28293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___28293,ch){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___28293,ch){
return (function (state_28276){
var state_val_28277 = (state_28276[(1)]);
if((state_val_28277 === (1))){
var state_28276__$1 = state_28276;
var statearr_28278_28294 = state_28276__$1;
(statearr_28278_28294[(2)] = null);

(statearr_28278_28294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (2))){
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28276__$1,(4),ch);
} else {
if((state_val_28277 === (3))){
var inst_28274 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28276__$1,inst_28274);
} else {
if((state_val_28277 === (4))){
var inst_28264 = (state_28276[(7)]);
var inst_28264__$1 = (state_28276[(2)]);
var state_28276__$1 = (function (){var statearr_28279 = state_28276;
(statearr_28279[(7)] = inst_28264__$1);

return statearr_28279;
})();
if(cljs.core.truth_(inst_28264__$1)){
var statearr_28280_28295 = state_28276__$1;
(statearr_28280_28295[(1)] = (5));

} else {
var statearr_28281_28296 = state_28276__$1;
(statearr_28281_28296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (5))){
var inst_28264 = (state_28276[(7)]);
var inst_28266 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28264);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28276__$1,(8),inst_28266);
} else {
if((state_val_28277 === (6))){
var state_28276__$1 = state_28276;
var statearr_28282_28297 = state_28276__$1;
(statearr_28282_28297[(2)] = null);

(statearr_28282_28297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (7))){
var inst_28272 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
var statearr_28283_28298 = state_28276__$1;
(statearr_28283_28298[(2)] = inst_28272);

(statearr_28283_28298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28277 === (8))){
var inst_28268 = (state_28276[(2)]);
var state_28276__$1 = (function (){var statearr_28284 = state_28276;
(statearr_28284[(8)] = inst_28268);

return statearr_28284;
})();
var statearr_28285_28299 = state_28276__$1;
(statearr_28285_28299[(2)] = null);

(statearr_28285_28299[(1)] = (2));


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
});})(c__19856__auto___28293,ch))
;
return ((function (switch__19791__auto__,c__19856__auto___28293,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19792__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19792__auto____0 = (function (){
var statearr_28289 = [null,null,null,null,null,null,null,null,null];
(statearr_28289[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19792__auto__);

(statearr_28289[(1)] = (1));

return statearr_28289;
});
var figwheel$client$heads_up_plugin_$_state_machine__19792__auto____1 = (function (state_28276){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_28276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e28290){if((e28290 instanceof Object)){
var ex__19795__auto__ = e28290;
var statearr_28291_28300 = state_28276;
(statearr_28291_28300[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28301 = state_28276;
state_28276 = G__28301;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19792__auto__ = function(state_28276){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19792__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19792__auto____1.call(this,state_28276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19792__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19792__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___28293,ch))
})();
var state__19858__auto__ = (function (){var statearr_28292 = f__19857__auto__.call(null);
(statearr_28292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___28293);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___28293,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__){
return (function (state_28322){
var state_val_28323 = (state_28322[(1)]);
if((state_val_28323 === (1))){
var inst_28317 = cljs.core.async.timeout.call(null,(3000));
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28322__$1,(2),inst_28317);
} else {
if((state_val_28323 === (2))){
var inst_28319 = (state_28322[(2)]);
var inst_28320 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28322__$1 = (function (){var statearr_28324 = state_28322;
(statearr_28324[(7)] = inst_28319);

return statearr_28324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28322__$1,inst_28320);
} else {
return null;
}
}
});})(c__19856__auto__))
;
return ((function (switch__19791__auto__,c__19856__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19792__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19792__auto____0 = (function (){
var statearr_28328 = [null,null,null,null,null,null,null,null];
(statearr_28328[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19792__auto__);

(statearr_28328[(1)] = (1));

return statearr_28328;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19792__auto____1 = (function (state_28322){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_28322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e28329){if((e28329 instanceof Object)){
var ex__19795__auto__ = e28329;
var statearr_28330_28332 = state_28322;
(statearr_28330_28332[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28333 = state_28322;
state_28322 = G__28333;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19792__auto__ = function(state_28322){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19792__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19792__auto____1.call(this,state_28322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19792__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19792__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__))
})();
var state__19858__auto__ = (function (){var statearr_28331 = f__19857__auto__.call(null);
(statearr_28331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__))
);

return c__19856__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28334){
var map__28341 = p__28334;
var map__28341__$1 = ((((!((map__28341 == null)))?((((map__28341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28341):map__28341);
var ed = map__28341__$1;
var formatted_exception = cljs.core.get.call(null,map__28341__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28341__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28341__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28343_28347 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28344_28348 = null;
var count__28345_28349 = (0);
var i__28346_28350 = (0);
while(true){
if((i__28346_28350 < count__28345_28349)){
var msg_28351 = cljs.core._nth.call(null,chunk__28344_28348,i__28346_28350);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28351);

var G__28352 = seq__28343_28347;
var G__28353 = chunk__28344_28348;
var G__28354 = count__28345_28349;
var G__28355 = (i__28346_28350 + (1));
seq__28343_28347 = G__28352;
chunk__28344_28348 = G__28353;
count__28345_28349 = G__28354;
i__28346_28350 = G__28355;
continue;
} else {
var temp__4425__auto___28356 = cljs.core.seq.call(null,seq__28343_28347);
if(temp__4425__auto___28356){
var seq__28343_28357__$1 = temp__4425__auto___28356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28343_28357__$1)){
var c__17140__auto___28358 = cljs.core.chunk_first.call(null,seq__28343_28357__$1);
var G__28359 = cljs.core.chunk_rest.call(null,seq__28343_28357__$1);
var G__28360 = c__17140__auto___28358;
var G__28361 = cljs.core.count.call(null,c__17140__auto___28358);
var G__28362 = (0);
seq__28343_28347 = G__28359;
chunk__28344_28348 = G__28360;
count__28345_28349 = G__28361;
i__28346_28350 = G__28362;
continue;
} else {
var msg_28363 = cljs.core.first.call(null,seq__28343_28357__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28363);

var G__28364 = cljs.core.next.call(null,seq__28343_28357__$1);
var G__28365 = null;
var G__28366 = (0);
var G__28367 = (0);
seq__28343_28347 = G__28364;
chunk__28344_28348 = G__28365;
count__28345_28349 = G__28366;
i__28346_28350 = G__28367;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28368){
var map__28371 = p__28368;
var map__28371__$1 = ((((!((map__28371 == null)))?((((map__28371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28371):map__28371);
var w = map__28371__$1;
var message = cljs.core.get.call(null,map__28371__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16325__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16325__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16325__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28379 = cljs.core.seq.call(null,plugins);
var chunk__28380 = null;
var count__28381 = (0);
var i__28382 = (0);
while(true){
if((i__28382 < count__28381)){
var vec__28383 = cljs.core._nth.call(null,chunk__28380,i__28382);
var k = cljs.core.nth.call(null,vec__28383,(0),null);
var plugin = cljs.core.nth.call(null,vec__28383,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28385 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28379,chunk__28380,count__28381,i__28382,pl_28385,vec__28383,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28385.call(null,msg_hist);
});})(seq__28379,chunk__28380,count__28381,i__28382,pl_28385,vec__28383,k,plugin))
);
} else {
}

var G__28386 = seq__28379;
var G__28387 = chunk__28380;
var G__28388 = count__28381;
var G__28389 = (i__28382 + (1));
seq__28379 = G__28386;
chunk__28380 = G__28387;
count__28381 = G__28388;
i__28382 = G__28389;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28379);
if(temp__4425__auto__){
var seq__28379__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28379__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28379__$1);
var G__28390 = cljs.core.chunk_rest.call(null,seq__28379__$1);
var G__28391 = c__17140__auto__;
var G__28392 = cljs.core.count.call(null,c__17140__auto__);
var G__28393 = (0);
seq__28379 = G__28390;
chunk__28380 = G__28391;
count__28381 = G__28392;
i__28382 = G__28393;
continue;
} else {
var vec__28384 = cljs.core.first.call(null,seq__28379__$1);
var k = cljs.core.nth.call(null,vec__28384,(0),null);
var plugin = cljs.core.nth.call(null,vec__28384,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28394 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28379,chunk__28380,count__28381,i__28382,pl_28394,vec__28384,k,plugin,seq__28379__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28394.call(null,msg_hist);
});})(seq__28379,chunk__28380,count__28381,i__28382,pl_28394,vec__28384,k,plugin,seq__28379__$1,temp__4425__auto__))
);
} else {
}

var G__28395 = cljs.core.next.call(null,seq__28379__$1);
var G__28396 = null;
var G__28397 = (0);
var G__28398 = (0);
seq__28379 = G__28395;
chunk__28380 = G__28396;
count__28381 = G__28397;
i__28382 = G__28398;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28399 = [];
var len__17395__auto___28402 = arguments.length;
var i__17396__auto___28403 = (0);
while(true){
if((i__17396__auto___28403 < len__17395__auto___28402)){
args28399.push((arguments[i__17396__auto___28403]));

var G__28404 = (i__17396__auto___28403 + (1));
i__17396__auto___28403 = G__28404;
continue;
} else {
}
break;
}

var G__28401 = args28399.length;
switch (G__28401) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28399.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17402__auto__ = [];
var len__17395__auto___28410 = arguments.length;
var i__17396__auto___28411 = (0);
while(true){
if((i__17396__auto___28411 < len__17395__auto___28410)){
args__17402__auto__.push((arguments[i__17396__auto___28411]));

var G__28412 = (i__17396__auto___28411 + (1));
i__17396__auto___28411 = G__28412;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((0) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17403__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28407){
var map__28408 = p__28407;
var map__28408__$1 = ((((!((map__28408 == null)))?((((map__28408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28408):map__28408);
var opts = map__28408__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28406){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28406));
});

//# sourceMappingURL=client.js.map?rel=1442954640723