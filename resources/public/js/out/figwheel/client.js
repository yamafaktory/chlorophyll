// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
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
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27347__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27348__i = 0, G__27348__a = new Array(arguments.length -  0);
while (G__27348__i < G__27348__a.length) {G__27348__a[G__27348__i] = arguments[G__27348__i + 0]; ++G__27348__i;}
  args = new cljs.core.IndexedSeq(G__27348__a,0);
} 
return G__27347__delegate.call(this,args);};
G__27347.cljs$lang$maxFixedArity = 0;
G__27347.cljs$lang$applyTo = (function (arglist__27349){
var args = cljs.core.seq(arglist__27349);
return G__27347__delegate(args);
});
G__27347.cljs$core$IFn$_invoke$arity$variadic = G__27347__delegate;
return G__27347;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27350){
var map__27353 = p__27350;
var map__27353__$1 = ((((!((map__27353 == null)))?((((map__27353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27353):map__27353);
var message = cljs.core.get.call(null,map__27353__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27353__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16513__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16501__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16501__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16501__auto__;
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
var c__19934__auto___27483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___27483,ch){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___27483,ch){
return (function (state_27457){
var state_val_27458 = (state_27457[(1)]);
if((state_val_27458 === (7))){
var inst_27453 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27459_27484 = state_27457__$1;
(statearr_27459_27484[(2)] = inst_27453);

(statearr_27459_27484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (1))){
var state_27457__$1 = state_27457;
var statearr_27460_27485 = state_27457__$1;
(statearr_27460_27485[(2)] = null);

(statearr_27460_27485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (4))){
var inst_27421 = (state_27457[(7)]);
var inst_27421__$1 = (state_27457[(2)]);
var state_27457__$1 = (function (){var statearr_27461 = state_27457;
(statearr_27461[(7)] = inst_27421__$1);

return statearr_27461;
})();
if(cljs.core.truth_(inst_27421__$1)){
var statearr_27462_27486 = state_27457__$1;
(statearr_27462_27486[(1)] = (5));

} else {
var statearr_27463_27487 = state_27457__$1;
(statearr_27463_27487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (13))){
var state_27457__$1 = state_27457;
var statearr_27464_27488 = state_27457__$1;
(statearr_27464_27488[(2)] = null);

(statearr_27464_27488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (6))){
var state_27457__$1 = state_27457;
var statearr_27465_27489 = state_27457__$1;
(statearr_27465_27489[(2)] = null);

(statearr_27465_27489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (3))){
var inst_27455 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27457__$1,inst_27455);
} else {
if((state_val_27458 === (12))){
var inst_27428 = (state_27457[(8)]);
var inst_27441 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27428);
var inst_27442 = cljs.core.first.call(null,inst_27441);
var inst_27443 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27442);
var inst_27444 = console.warn("Figwheel: Not loading code with warnings - ",inst_27443);
var state_27457__$1 = state_27457;
var statearr_27466_27490 = state_27457__$1;
(statearr_27466_27490[(2)] = inst_27444);

(statearr_27466_27490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (2))){
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27457__$1,(4),ch);
} else {
if((state_val_27458 === (11))){
var inst_27437 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27467_27491 = state_27457__$1;
(statearr_27467_27491[(2)] = inst_27437);

(statearr_27467_27491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (9))){
var inst_27427 = (state_27457[(9)]);
var inst_27439 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27427,opts);
var state_27457__$1 = state_27457;
if(cljs.core.truth_(inst_27439)){
var statearr_27468_27492 = state_27457__$1;
(statearr_27468_27492[(1)] = (12));

} else {
var statearr_27469_27493 = state_27457__$1;
(statearr_27469_27493[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (5))){
var inst_27427 = (state_27457[(9)]);
var inst_27421 = (state_27457[(7)]);
var inst_27423 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27424 = (new cljs.core.PersistentArrayMap(null,2,inst_27423,null));
var inst_27425 = (new cljs.core.PersistentHashSet(null,inst_27424,null));
var inst_27426 = figwheel.client.focus_msgs.call(null,inst_27425,inst_27421);
var inst_27427__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27426);
var inst_27428 = cljs.core.first.call(null,inst_27426);
var inst_27429 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27427__$1,opts);
var state_27457__$1 = (function (){var statearr_27470 = state_27457;
(statearr_27470[(8)] = inst_27428);

(statearr_27470[(9)] = inst_27427__$1);

return statearr_27470;
})();
if(cljs.core.truth_(inst_27429)){
var statearr_27471_27494 = state_27457__$1;
(statearr_27471_27494[(1)] = (8));

} else {
var statearr_27472_27495 = state_27457__$1;
(statearr_27472_27495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (14))){
var inst_27447 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27473_27496 = state_27457__$1;
(statearr_27473_27496[(2)] = inst_27447);

(statearr_27473_27496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (10))){
var inst_27449 = (state_27457[(2)]);
var state_27457__$1 = (function (){var statearr_27474 = state_27457;
(statearr_27474[(10)] = inst_27449);

return statearr_27474;
})();
var statearr_27475_27497 = state_27457__$1;
(statearr_27475_27497[(2)] = null);

(statearr_27475_27497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (8))){
var inst_27428 = (state_27457[(8)]);
var inst_27431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27432 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27428);
var inst_27433 = cljs.core.async.timeout.call(null,(1000));
var inst_27434 = [inst_27432,inst_27433];
var inst_27435 = (new cljs.core.PersistentVector(null,2,(5),inst_27431,inst_27434,null));
var state_27457__$1 = state_27457;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27457__$1,(11),inst_27435);
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
});})(c__19934__auto___27483,ch))
;
return ((function (switch__19869__auto__,c__19934__auto___27483,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19870__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19870__auto____0 = (function (){
var statearr_27479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27479[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19870__auto__);

(statearr_27479[(1)] = (1));

return statearr_27479;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19870__auto____1 = (function (state_27457){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_27457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e27480){if((e27480 instanceof Object)){
var ex__19873__auto__ = e27480;
var statearr_27481_27498 = state_27457;
(statearr_27481_27498[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27499 = state_27457;
state_27457 = G__27499;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19870__auto__ = function(state_27457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19870__auto____1.call(this,state_27457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19870__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19870__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___27483,ch))
})();
var state__19936__auto__ = (function (){var statearr_27482 = f__19935__auto__.call(null);
(statearr_27482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___27483);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___27483,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27500_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27500_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_27507 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27507){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27505 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27506 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27505,_STAR_print_newline_STAR_27506,base_path_27507){
return (function() { 
var G__27508__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27509__i = 0, G__27509__a = new Array(arguments.length -  0);
while (G__27509__i < G__27509__a.length) {G__27509__a[G__27509__i] = arguments[G__27509__i + 0]; ++G__27509__i;}
  args = new cljs.core.IndexedSeq(G__27509__a,0);
} 
return G__27508__delegate.call(this,args);};
G__27508.cljs$lang$maxFixedArity = 0;
G__27508.cljs$lang$applyTo = (function (arglist__27510){
var args = cljs.core.seq(arglist__27510);
return G__27508__delegate(args);
});
G__27508.cljs$core$IFn$_invoke$arity$variadic = G__27508__delegate;
return G__27508;
})()
;})(_STAR_print_fn_STAR_27505,_STAR_print_newline_STAR_27506,base_path_27507))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27506;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27505;
}}catch (e27504){if((e27504 instanceof Error)){
var e = e27504;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27507], null));
} else {
var e = e27504;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27507))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27511){
var map__27518 = p__27511;
var map__27518__$1 = ((((!((map__27518 == null)))?((((map__27518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27518):map__27518);
var opts = map__27518__$1;
var build_id = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27518,map__27518__$1,opts,build_id){
return (function (p__27520){
var vec__27521 = p__27520;
var map__27522 = cljs.core.nth.call(null,vec__27521,(0),null);
var map__27522__$1 = ((((!((map__27522 == null)))?((((map__27522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27522):map__27522);
var msg = map__27522__$1;
var msg_name = cljs.core.get.call(null,map__27522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27521,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27521,map__27522,map__27522__$1,msg,msg_name,_,map__27518,map__27518__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27521,map__27522,map__27522__$1,msg,msg_name,_,map__27518,map__27518__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27518,map__27518__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27528){
var vec__27529 = p__27528;
var map__27530 = cljs.core.nth.call(null,vec__27529,(0),null);
var map__27530__$1 = ((((!((map__27530 == null)))?((((map__27530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27530):map__27530);
var msg = map__27530__$1;
var msg_name = cljs.core.get.call(null,map__27530__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27529,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27532){
var map__27542 = p__27532;
var map__27542__$1 = ((((!((map__27542 == null)))?((((map__27542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27542):map__27542);
var on_compile_warning = cljs.core.get.call(null,map__27542__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27542__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27542,map__27542__$1,on_compile_warning,on_compile_fail){
return (function (p__27544){
var vec__27545 = p__27544;
var map__27546 = cljs.core.nth.call(null,vec__27545,(0),null);
var map__27546__$1 = ((((!((map__27546 == null)))?((((map__27546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27546):map__27546);
var msg = map__27546__$1;
var msg_name = cljs.core.get.call(null,map__27546__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27545,(1));
var pred__27548 = cljs.core._EQ_;
var expr__27549 = msg_name;
if(cljs.core.truth_(pred__27548.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27549))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27548.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27549))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27542,map__27542__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__,msg_hist,msg_names,msg){
return (function (state_27750){
var state_val_27751 = (state_27750[(1)]);
if((state_val_27751 === (7))){
var inst_27684 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27752_27793 = state_27750__$1;
(statearr_27752_27793[(2)] = inst_27684);

(statearr_27752_27793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (20))){
var inst_27712 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27712)){
var statearr_27753_27794 = state_27750__$1;
(statearr_27753_27794[(1)] = (22));

} else {
var statearr_27754_27795 = state_27750__$1;
(statearr_27754_27795[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (27))){
var inst_27724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27725 = figwheel.client.heads_up.display_warning.call(null,inst_27724);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(30),inst_27725);
} else {
if((state_val_27751 === (1))){
var inst_27672 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27672)){
var statearr_27755_27796 = state_27750__$1;
(statearr_27755_27796[(1)] = (2));

} else {
var statearr_27756_27797 = state_27750__$1;
(statearr_27756_27797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (24))){
var inst_27740 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27757_27798 = state_27750__$1;
(statearr_27757_27798[(2)] = inst_27740);

(statearr_27757_27798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (4))){
var inst_27748 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27750__$1,inst_27748);
} else {
if((state_val_27751 === (15))){
var inst_27700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27701 = figwheel.client.format_messages.call(null,inst_27700);
var inst_27702 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27703 = figwheel.client.heads_up.display_error.call(null,inst_27701,inst_27702);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(18),inst_27703);
} else {
if((state_val_27751 === (21))){
var inst_27742 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27758_27799 = state_27750__$1;
(statearr_27758_27799[(2)] = inst_27742);

(statearr_27758_27799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (31))){
var inst_27731 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(34),inst_27731);
} else {
if((state_val_27751 === (32))){
var state_27750__$1 = state_27750;
var statearr_27759_27800 = state_27750__$1;
(statearr_27759_27800[(2)] = null);

(statearr_27759_27800[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (33))){
var inst_27736 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27760_27801 = state_27750__$1;
(statearr_27760_27801[(2)] = inst_27736);

(statearr_27760_27801[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (13))){
var inst_27690 = (state_27750[(2)]);
var inst_27691 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27692 = figwheel.client.format_messages.call(null,inst_27691);
var inst_27693 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27694 = figwheel.client.heads_up.display_error.call(null,inst_27692,inst_27693);
var state_27750__$1 = (function (){var statearr_27761 = state_27750;
(statearr_27761[(7)] = inst_27690);

return statearr_27761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(14),inst_27694);
} else {
if((state_val_27751 === (22))){
var inst_27714 = figwheel.client.heads_up.clear.call(null);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(25),inst_27714);
} else {
if((state_val_27751 === (29))){
var inst_27738 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27762_27802 = state_27750__$1;
(statearr_27762_27802[(2)] = inst_27738);

(statearr_27762_27802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (6))){
var inst_27680 = figwheel.client.heads_up.clear.call(null);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(9),inst_27680);
} else {
if((state_val_27751 === (28))){
var inst_27729 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27729)){
var statearr_27763_27803 = state_27750__$1;
(statearr_27763_27803[(1)] = (31));

} else {
var statearr_27764_27804 = state_27750__$1;
(statearr_27764_27804[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (25))){
var inst_27716 = (state_27750[(2)]);
var inst_27717 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27718 = figwheel.client.heads_up.display_warning.call(null,inst_27717);
var state_27750__$1 = (function (){var statearr_27765 = state_27750;
(statearr_27765[(8)] = inst_27716);

return statearr_27765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(26),inst_27718);
} else {
if((state_val_27751 === (34))){
var inst_27733 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27766_27805 = state_27750__$1;
(statearr_27766_27805[(2)] = inst_27733);

(statearr_27766_27805[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (17))){
var inst_27744 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27767_27806 = state_27750__$1;
(statearr_27767_27806[(2)] = inst_27744);

(statearr_27767_27806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (3))){
var inst_27686 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27686)){
var statearr_27768_27807 = state_27750__$1;
(statearr_27768_27807[(1)] = (10));

} else {
var statearr_27769_27808 = state_27750__$1;
(statearr_27769_27808[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (12))){
var inst_27746 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27770_27809 = state_27750__$1;
(statearr_27770_27809[(2)] = inst_27746);

(statearr_27770_27809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (2))){
var inst_27674 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27674)){
var statearr_27771_27810 = state_27750__$1;
(statearr_27771_27810[(1)] = (5));

} else {
var statearr_27772_27811 = state_27750__$1;
(statearr_27772_27811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (23))){
var inst_27722 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27722)){
var statearr_27773_27812 = state_27750__$1;
(statearr_27773_27812[(1)] = (27));

} else {
var statearr_27774_27813 = state_27750__$1;
(statearr_27774_27813[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (19))){
var inst_27709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27710 = figwheel.client.heads_up.append_message.call(null,inst_27709);
var state_27750__$1 = state_27750;
var statearr_27775_27814 = state_27750__$1;
(statearr_27775_27814[(2)] = inst_27710);

(statearr_27775_27814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (11))){
var inst_27698 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27698)){
var statearr_27776_27815 = state_27750__$1;
(statearr_27776_27815[(1)] = (15));

} else {
var statearr_27777_27816 = state_27750__$1;
(statearr_27777_27816[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (9))){
var inst_27682 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27778_27817 = state_27750__$1;
(statearr_27778_27817[(2)] = inst_27682);

(statearr_27778_27817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (5))){
var inst_27676 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(8),inst_27676);
} else {
if((state_val_27751 === (14))){
var inst_27696 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27779_27818 = state_27750__$1;
(statearr_27779_27818[(2)] = inst_27696);

(statearr_27779_27818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (26))){
var inst_27720 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27780_27819 = state_27750__$1;
(statearr_27780_27819[(2)] = inst_27720);

(statearr_27780_27819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (16))){
var inst_27707 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27750__$1 = state_27750;
if(cljs.core.truth_(inst_27707)){
var statearr_27781_27820 = state_27750__$1;
(statearr_27781_27820[(1)] = (19));

} else {
var statearr_27782_27821 = state_27750__$1;
(statearr_27782_27821[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (30))){
var inst_27727 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27783_27822 = state_27750__$1;
(statearr_27783_27822[(2)] = inst_27727);

(statearr_27783_27822[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (10))){
var inst_27688 = figwheel.client.heads_up.clear.call(null);
var state_27750__$1 = state_27750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27750__$1,(13),inst_27688);
} else {
if((state_val_27751 === (18))){
var inst_27705 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27784_27823 = state_27750__$1;
(statearr_27784_27823[(2)] = inst_27705);

(statearr_27784_27823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27751 === (8))){
var inst_27678 = (state_27750[(2)]);
var state_27750__$1 = state_27750;
var statearr_27785_27824 = state_27750__$1;
(statearr_27785_27824[(2)] = inst_27678);

(statearr_27785_27824[(1)] = (7));


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
});})(c__19934__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19869__auto__,c__19934__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto____0 = (function (){
var statearr_27789 = [null,null,null,null,null,null,null,null,null];
(statearr_27789[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto__);

(statearr_27789[(1)] = (1));

return statearr_27789;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto____1 = (function (state_27750){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_27750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e27790){if((e27790 instanceof Object)){
var ex__19873__auto__ = e27790;
var statearr_27791_27825 = state_27750;
(statearr_27791_27825[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27826 = state_27750;
state_27750 = G__27826;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto__ = function(state_27750){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto____1.call(this,state_27750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__,msg_hist,msg_names,msg))
})();
var state__19936__auto__ = (function (){var statearr_27792 = f__19935__auto__.call(null);
(statearr_27792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_27792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__,msg_hist,msg_names,msg))
);

return c__19934__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19934__auto___27889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___27889,ch){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___27889,ch){
return (function (state_27872){
var state_val_27873 = (state_27872[(1)]);
if((state_val_27873 === (1))){
var state_27872__$1 = state_27872;
var statearr_27874_27890 = state_27872__$1;
(statearr_27874_27890[(2)] = null);

(statearr_27874_27890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (2))){
var state_27872__$1 = state_27872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27872__$1,(4),ch);
} else {
if((state_val_27873 === (3))){
var inst_27870 = (state_27872[(2)]);
var state_27872__$1 = state_27872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27872__$1,inst_27870);
} else {
if((state_val_27873 === (4))){
var inst_27860 = (state_27872[(7)]);
var inst_27860__$1 = (state_27872[(2)]);
var state_27872__$1 = (function (){var statearr_27875 = state_27872;
(statearr_27875[(7)] = inst_27860__$1);

return statearr_27875;
})();
if(cljs.core.truth_(inst_27860__$1)){
var statearr_27876_27891 = state_27872__$1;
(statearr_27876_27891[(1)] = (5));

} else {
var statearr_27877_27892 = state_27872__$1;
(statearr_27877_27892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (5))){
var inst_27860 = (state_27872[(7)]);
var inst_27862 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27860);
var state_27872__$1 = state_27872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27872__$1,(8),inst_27862);
} else {
if((state_val_27873 === (6))){
var state_27872__$1 = state_27872;
var statearr_27878_27893 = state_27872__$1;
(statearr_27878_27893[(2)] = null);

(statearr_27878_27893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (7))){
var inst_27868 = (state_27872[(2)]);
var state_27872__$1 = state_27872;
var statearr_27879_27894 = state_27872__$1;
(statearr_27879_27894[(2)] = inst_27868);

(statearr_27879_27894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (8))){
var inst_27864 = (state_27872[(2)]);
var state_27872__$1 = (function (){var statearr_27880 = state_27872;
(statearr_27880[(8)] = inst_27864);

return statearr_27880;
})();
var statearr_27881_27895 = state_27872__$1;
(statearr_27881_27895[(2)] = null);

(statearr_27881_27895[(1)] = (2));


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
});})(c__19934__auto___27889,ch))
;
return ((function (switch__19869__auto__,c__19934__auto___27889,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19870__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19870__auto____0 = (function (){
var statearr_27885 = [null,null,null,null,null,null,null,null,null];
(statearr_27885[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19870__auto__);

(statearr_27885[(1)] = (1));

return statearr_27885;
});
var figwheel$client$heads_up_plugin_$_state_machine__19870__auto____1 = (function (state_27872){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_27872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e27886){if((e27886 instanceof Object)){
var ex__19873__auto__ = e27886;
var statearr_27887_27896 = state_27872;
(statearr_27887_27896[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27897 = state_27872;
state_27872 = G__27897;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19870__auto__ = function(state_27872){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19870__auto____1.call(this,state_27872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19870__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19870__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___27889,ch))
})();
var state__19936__auto__ = (function (){var statearr_27888 = f__19935__auto__.call(null);
(statearr_27888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___27889);

return statearr_27888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___27889,ch))
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
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_27918){
var state_val_27919 = (state_27918[(1)]);
if((state_val_27919 === (1))){
var inst_27913 = cljs.core.async.timeout.call(null,(3000));
var state_27918__$1 = state_27918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27918__$1,(2),inst_27913);
} else {
if((state_val_27919 === (2))){
var inst_27915 = (state_27918[(2)]);
var inst_27916 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27918__$1 = (function (){var statearr_27920 = state_27918;
(statearr_27920[(7)] = inst_27915);

return statearr_27920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27918__$1,inst_27916);
} else {
return null;
}
}
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19870__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19870__auto____0 = (function (){
var statearr_27924 = [null,null,null,null,null,null,null,null];
(statearr_27924[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19870__auto__);

(statearr_27924[(1)] = (1));

return statearr_27924;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19870__auto____1 = (function (state_27918){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_27918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e27925){if((e27925 instanceof Object)){
var ex__19873__auto__ = e27925;
var statearr_27926_27928 = state_27918;
(statearr_27926_27928[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27929 = state_27918;
state_27918 = G__27929;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19870__auto__ = function(state_27918){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19870__auto____1.call(this,state_27918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19870__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19870__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_27927 = f__19935__auto__.call(null);
(statearr_27927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_27927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27930){
var map__27937 = p__27930;
var map__27937__$1 = ((((!((map__27937 == null)))?((((map__27937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27937):map__27937);
var ed = map__27937__$1;
var formatted_exception = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27937__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27939_27943 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27940_27944 = null;
var count__27941_27945 = (0);
var i__27942_27946 = (0);
while(true){
if((i__27942_27946 < count__27941_27945)){
var msg_27947 = cljs.core._nth.call(null,chunk__27940_27944,i__27942_27946);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27947);

var G__27948 = seq__27939_27943;
var G__27949 = chunk__27940_27944;
var G__27950 = count__27941_27945;
var G__27951 = (i__27942_27946 + (1));
seq__27939_27943 = G__27948;
chunk__27940_27944 = G__27949;
count__27941_27945 = G__27950;
i__27942_27946 = G__27951;
continue;
} else {
var temp__4413__auto___27952 = cljs.core.seq.call(null,seq__27939_27943);
if(temp__4413__auto___27952){
var seq__27939_27953__$1 = temp__4413__auto___27952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27939_27953__$1)){
var c__17297__auto___27954 = cljs.core.chunk_first.call(null,seq__27939_27953__$1);
var G__27955 = cljs.core.chunk_rest.call(null,seq__27939_27953__$1);
var G__27956 = c__17297__auto___27954;
var G__27957 = cljs.core.count.call(null,c__17297__auto___27954);
var G__27958 = (0);
seq__27939_27943 = G__27955;
chunk__27940_27944 = G__27956;
count__27941_27945 = G__27957;
i__27942_27946 = G__27958;
continue;
} else {
var msg_27959 = cljs.core.first.call(null,seq__27939_27953__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27959);

var G__27960 = cljs.core.next.call(null,seq__27939_27953__$1);
var G__27961 = null;
var G__27962 = (0);
var G__27963 = (0);
seq__27939_27943 = G__27960;
chunk__27940_27944 = G__27961;
count__27941_27945 = G__27962;
i__27942_27946 = G__27963;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27964){
var map__27967 = p__27964;
var map__27967__$1 = ((((!((map__27967 == null)))?((((map__27967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27967):map__27967);
var w = map__27967__$1;
var message = cljs.core.get.call(null,map__27967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__16501__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16501__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16501__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27975 = cljs.core.seq.call(null,plugins);
var chunk__27976 = null;
var count__27977 = (0);
var i__27978 = (0);
while(true){
if((i__27978 < count__27977)){
var vec__27979 = cljs.core._nth.call(null,chunk__27976,i__27978);
var k = cljs.core.nth.call(null,vec__27979,(0),null);
var plugin = cljs.core.nth.call(null,vec__27979,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27981 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27975,chunk__27976,count__27977,i__27978,pl_27981,vec__27979,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27981.call(null,msg_hist);
});})(seq__27975,chunk__27976,count__27977,i__27978,pl_27981,vec__27979,k,plugin))
);
} else {
}

var G__27982 = seq__27975;
var G__27983 = chunk__27976;
var G__27984 = count__27977;
var G__27985 = (i__27978 + (1));
seq__27975 = G__27982;
chunk__27976 = G__27983;
count__27977 = G__27984;
i__27978 = G__27985;
continue;
} else {
var temp__4413__auto__ = cljs.core.seq.call(null,seq__27975);
if(temp__4413__auto__){
var seq__27975__$1 = temp__4413__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27975__$1)){
var c__17297__auto__ = cljs.core.chunk_first.call(null,seq__27975__$1);
var G__27986 = cljs.core.chunk_rest.call(null,seq__27975__$1);
var G__27987 = c__17297__auto__;
var G__27988 = cljs.core.count.call(null,c__17297__auto__);
var G__27989 = (0);
seq__27975 = G__27986;
chunk__27976 = G__27987;
count__27977 = G__27988;
i__27978 = G__27989;
continue;
} else {
var vec__27980 = cljs.core.first.call(null,seq__27975__$1);
var k = cljs.core.nth.call(null,vec__27980,(0),null);
var plugin = cljs.core.nth.call(null,vec__27980,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27990 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27975,chunk__27976,count__27977,i__27978,pl_27990,vec__27980,k,plugin,seq__27975__$1,temp__4413__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27990.call(null,msg_hist);
});})(seq__27975,chunk__27976,count__27977,i__27978,pl_27990,vec__27980,k,plugin,seq__27975__$1,temp__4413__auto__))
);
} else {
}

var G__27991 = cljs.core.next.call(null,seq__27975__$1);
var G__27992 = null;
var G__27993 = (0);
var G__27994 = (0);
seq__27975 = G__27991;
chunk__27976 = G__27992;
count__27977 = G__27993;
i__27978 = G__27994;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args27995 = [];
var len__17552__auto___27998 = arguments.length;
var i__17553__auto___27999 = (0);
while(true){
if((i__17553__auto___27999 < len__17552__auto___27998)){
args27995.push((arguments[i__17553__auto___27999]));

var G__28000 = (i__17553__auto___27999 + (1));
i__17553__auto___27999 = G__28000;
continue;
} else {
}
break;
}

var G__27997 = args27995.length;
switch (G__27997) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27995.length)].join('')));

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17559__auto__ = [];
var len__17552__auto___28006 = arguments.length;
var i__17553__auto___28007 = (0);
while(true){
if((i__17553__auto___28007 < len__17552__auto___28006)){
args__17559__auto__.push((arguments[i__17553__auto___28007]));

var G__28008 = (i__17553__auto___28007 + (1));
i__17553__auto___28007 = G__28008;
continue;
} else {
}
break;
}

var argseq__17560__auto__ = ((((0) < args__17559__auto__.length))?(new cljs.core.IndexedSeq(args__17559__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17560__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28003){
var map__28004 = p__28003;
var map__28004__$1 = ((((!((map__28004 == null)))?((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var opts = map__28004__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28002){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28002));
});

//# sourceMappingURL=client.js.map?rel=1438461404880