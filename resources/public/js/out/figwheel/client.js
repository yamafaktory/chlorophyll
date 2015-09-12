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
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27320__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27321__i = 0, G__27321__a = new Array(arguments.length -  0);
while (G__27321__i < G__27321__a.length) {G__27321__a[G__27321__i] = arguments[G__27321__i + 0]; ++G__27321__i;}
  args = new cljs.core.IndexedSeq(G__27321__a,0);
} 
return G__27320__delegate.call(this,args);};
G__27320.cljs$lang$maxFixedArity = 0;
G__27320.cljs$lang$applyTo = (function (arglist__27322){
var args = cljs.core.seq(arglist__27322);
return G__27320__delegate(args);
});
G__27320.cljs$core$IFn$_invoke$arity$variadic = G__27320__delegate;
return G__27320;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27323){
var map__27326 = p__27323;
var map__27326__$1 = ((((!((map__27326 == null)))?((((map__27326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var message = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19716__auto___27456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___27456,ch){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___27456,ch){
return (function (state_27430){
var state_val_27431 = (state_27430[(1)]);
if((state_val_27431 === (7))){
var inst_27426 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27432_27457 = state_27430__$1;
(statearr_27432_27457[(2)] = inst_27426);

(statearr_27432_27457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (1))){
var state_27430__$1 = state_27430;
var statearr_27433_27458 = state_27430__$1;
(statearr_27433_27458[(2)] = null);

(statearr_27433_27458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (4))){
var inst_27394 = (state_27430[(7)]);
var inst_27394__$1 = (state_27430[(2)]);
var state_27430__$1 = (function (){var statearr_27434 = state_27430;
(statearr_27434[(7)] = inst_27394__$1);

return statearr_27434;
})();
if(cljs.core.truth_(inst_27394__$1)){
var statearr_27435_27459 = state_27430__$1;
(statearr_27435_27459[(1)] = (5));

} else {
var statearr_27436_27460 = state_27430__$1;
(statearr_27436_27460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (13))){
var state_27430__$1 = state_27430;
var statearr_27437_27461 = state_27430__$1;
(statearr_27437_27461[(2)] = null);

(statearr_27437_27461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (6))){
var state_27430__$1 = state_27430;
var statearr_27438_27462 = state_27430__$1;
(statearr_27438_27462[(2)] = null);

(statearr_27438_27462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (3))){
var inst_27428 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27430__$1,inst_27428);
} else {
if((state_val_27431 === (12))){
var inst_27401 = (state_27430[(8)]);
var inst_27414 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27401);
var inst_27415 = cljs.core.first.call(null,inst_27414);
var inst_27416 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27415);
var inst_27417 = console.warn("Figwheel: Not loading code with warnings - ",inst_27416);
var state_27430__$1 = state_27430;
var statearr_27439_27463 = state_27430__$1;
(statearr_27439_27463[(2)] = inst_27417);

(statearr_27439_27463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (2))){
var state_27430__$1 = state_27430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27430__$1,(4),ch);
} else {
if((state_val_27431 === (11))){
var inst_27410 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27440_27464 = state_27430__$1;
(statearr_27440_27464[(2)] = inst_27410);

(statearr_27440_27464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (9))){
var inst_27400 = (state_27430[(9)]);
var inst_27412 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27400,opts);
var state_27430__$1 = state_27430;
if(cljs.core.truth_(inst_27412)){
var statearr_27441_27465 = state_27430__$1;
(statearr_27441_27465[(1)] = (12));

} else {
var statearr_27442_27466 = state_27430__$1;
(statearr_27442_27466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (5))){
var inst_27394 = (state_27430[(7)]);
var inst_27400 = (state_27430[(9)]);
var inst_27396 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27397 = (new cljs.core.PersistentArrayMap(null,2,inst_27396,null));
var inst_27398 = (new cljs.core.PersistentHashSet(null,inst_27397,null));
var inst_27399 = figwheel.client.focus_msgs.call(null,inst_27398,inst_27394);
var inst_27400__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27399);
var inst_27401 = cljs.core.first.call(null,inst_27399);
var inst_27402 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27400__$1,opts);
var state_27430__$1 = (function (){var statearr_27443 = state_27430;
(statearr_27443[(9)] = inst_27400__$1);

(statearr_27443[(8)] = inst_27401);

return statearr_27443;
})();
if(cljs.core.truth_(inst_27402)){
var statearr_27444_27467 = state_27430__$1;
(statearr_27444_27467[(1)] = (8));

} else {
var statearr_27445_27468 = state_27430__$1;
(statearr_27445_27468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (14))){
var inst_27420 = (state_27430[(2)]);
var state_27430__$1 = state_27430;
var statearr_27446_27469 = state_27430__$1;
(statearr_27446_27469[(2)] = inst_27420);

(statearr_27446_27469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (10))){
var inst_27422 = (state_27430[(2)]);
var state_27430__$1 = (function (){var statearr_27447 = state_27430;
(statearr_27447[(10)] = inst_27422);

return statearr_27447;
})();
var statearr_27448_27470 = state_27430__$1;
(statearr_27448_27470[(2)] = null);

(statearr_27448_27470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27431 === (8))){
var inst_27401 = (state_27430[(8)]);
var inst_27404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27405 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27401);
var inst_27406 = cljs.core.async.timeout.call(null,(1000));
var inst_27407 = [inst_27405,inst_27406];
var inst_27408 = (new cljs.core.PersistentVector(null,2,(5),inst_27404,inst_27407,null));
var state_27430__$1 = state_27430;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27430__$1,(11),inst_27408);
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
});})(c__19716__auto___27456,ch))
;
return ((function (switch__19651__auto__,c__19716__auto___27456,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19652__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19652__auto____0 = (function (){
var statearr_27452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27452[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19652__auto__);

(statearr_27452[(1)] = (1));

return statearr_27452;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19652__auto____1 = (function (state_27430){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_27430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e27453){if((e27453 instanceof Object)){
var ex__19655__auto__ = e27453;
var statearr_27454_27471 = state_27430;
(statearr_27454_27471[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27472 = state_27430;
state_27430 = G__27472;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19652__auto__ = function(state_27430){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19652__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19652__auto____1.call(this,state_27430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19652__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19652__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___27456,ch))
})();
var state__19718__auto__ = (function (){var statearr_27455 = f__19717__auto__.call(null);
(statearr_27455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___27456);

return statearr_27455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___27456,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27473_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27473_SHARP_));
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
var base_path_27480 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27480){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27478 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27479 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27478,_STAR_print_newline_STAR_27479,base_path_27480){
return (function() { 
var G__27481__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27482__i = 0, G__27482__a = new Array(arguments.length -  0);
while (G__27482__i < G__27482__a.length) {G__27482__a[G__27482__i] = arguments[G__27482__i + 0]; ++G__27482__i;}
  args = new cljs.core.IndexedSeq(G__27482__a,0);
} 
return G__27481__delegate.call(this,args);};
G__27481.cljs$lang$maxFixedArity = 0;
G__27481.cljs$lang$applyTo = (function (arglist__27483){
var args = cljs.core.seq(arglist__27483);
return G__27481__delegate(args);
});
G__27481.cljs$core$IFn$_invoke$arity$variadic = G__27481__delegate;
return G__27481;
})()
;})(_STAR_print_fn_STAR_27478,_STAR_print_newline_STAR_27479,base_path_27480))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27479;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27478;
}}catch (e27477){if((e27477 instanceof Error)){
var e = e27477;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27480], null));
} else {
var e = e27477;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27480))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27484){
var map__27491 = p__27484;
var map__27491__$1 = ((((!((map__27491 == null)))?((((map__27491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27491):map__27491);
var opts = map__27491__$1;
var build_id = cljs.core.get.call(null,map__27491__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27491,map__27491__$1,opts,build_id){
return (function (p__27493){
var vec__27494 = p__27493;
var map__27495 = cljs.core.nth.call(null,vec__27494,(0),null);
var map__27495__$1 = ((((!((map__27495 == null)))?((((map__27495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27495):map__27495);
var msg = map__27495__$1;
var msg_name = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27494,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27494,map__27495,map__27495__$1,msg,msg_name,_,map__27491,map__27491__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27494,map__27495,map__27495__$1,msg,msg_name,_,map__27491,map__27491__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27491,map__27491__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27501){
var vec__27502 = p__27501;
var map__27503 = cljs.core.nth.call(null,vec__27502,(0),null);
var map__27503__$1 = ((((!((map__27503 == null)))?((((map__27503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27503):map__27503);
var msg = map__27503__$1;
var msg_name = cljs.core.get.call(null,map__27503__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27502,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27505){
var map__27515 = p__27505;
var map__27515__$1 = ((((!((map__27515 == null)))?((((map__27515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27515):map__27515);
var on_compile_warning = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27515,map__27515__$1,on_compile_warning,on_compile_fail){
return (function (p__27517){
var vec__27518 = p__27517;
var map__27519 = cljs.core.nth.call(null,vec__27518,(0),null);
var map__27519__$1 = ((((!((map__27519 == null)))?((((map__27519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27519):map__27519);
var msg = map__27519__$1;
var msg_name = cljs.core.get.call(null,map__27519__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27518,(1));
var pred__27521 = cljs.core._EQ_;
var expr__27522 = msg_name;
if(cljs.core.truth_(pred__27521.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27522))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27521.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27522))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27515,map__27515__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__,msg_hist,msg_names,msg){
return (function (state_27723){
var state_val_27724 = (state_27723[(1)]);
if((state_val_27724 === (7))){
var inst_27657 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27725_27766 = state_27723__$1;
(statearr_27725_27766[(2)] = inst_27657);

(statearr_27725_27766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (20))){
var inst_27685 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27685)){
var statearr_27726_27767 = state_27723__$1;
(statearr_27726_27767[(1)] = (22));

} else {
var statearr_27727_27768 = state_27723__$1;
(statearr_27727_27768[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (27))){
var inst_27697 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27698 = figwheel.client.heads_up.display_warning.call(null,inst_27697);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(30),inst_27698);
} else {
if((state_val_27724 === (1))){
var inst_27645 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27645)){
var statearr_27728_27769 = state_27723__$1;
(statearr_27728_27769[(1)] = (2));

} else {
var statearr_27729_27770 = state_27723__$1;
(statearr_27729_27770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (24))){
var inst_27713 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27730_27771 = state_27723__$1;
(statearr_27730_27771[(2)] = inst_27713);

(statearr_27730_27771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (4))){
var inst_27721 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27723__$1,inst_27721);
} else {
if((state_val_27724 === (15))){
var inst_27673 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27674 = figwheel.client.format_messages.call(null,inst_27673);
var inst_27675 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27676 = figwheel.client.heads_up.display_error.call(null,inst_27674,inst_27675);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(18),inst_27676);
} else {
if((state_val_27724 === (21))){
var inst_27715 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27731_27772 = state_27723__$1;
(statearr_27731_27772[(2)] = inst_27715);

(statearr_27731_27772[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (31))){
var inst_27704 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(34),inst_27704);
} else {
if((state_val_27724 === (32))){
var state_27723__$1 = state_27723;
var statearr_27732_27773 = state_27723__$1;
(statearr_27732_27773[(2)] = null);

(statearr_27732_27773[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (33))){
var inst_27709 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27733_27774 = state_27723__$1;
(statearr_27733_27774[(2)] = inst_27709);

(statearr_27733_27774[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (13))){
var inst_27663 = (state_27723[(2)]);
var inst_27664 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27665 = figwheel.client.format_messages.call(null,inst_27664);
var inst_27666 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27667 = figwheel.client.heads_up.display_error.call(null,inst_27665,inst_27666);
var state_27723__$1 = (function (){var statearr_27734 = state_27723;
(statearr_27734[(7)] = inst_27663);

return statearr_27734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(14),inst_27667);
} else {
if((state_val_27724 === (22))){
var inst_27687 = figwheel.client.heads_up.clear.call(null);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(25),inst_27687);
} else {
if((state_val_27724 === (29))){
var inst_27711 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27735_27775 = state_27723__$1;
(statearr_27735_27775[(2)] = inst_27711);

(statearr_27735_27775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (6))){
var inst_27653 = figwheel.client.heads_up.clear.call(null);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(9),inst_27653);
} else {
if((state_val_27724 === (28))){
var inst_27702 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27702)){
var statearr_27736_27776 = state_27723__$1;
(statearr_27736_27776[(1)] = (31));

} else {
var statearr_27737_27777 = state_27723__$1;
(statearr_27737_27777[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (25))){
var inst_27689 = (state_27723[(2)]);
var inst_27690 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27691 = figwheel.client.heads_up.display_warning.call(null,inst_27690);
var state_27723__$1 = (function (){var statearr_27738 = state_27723;
(statearr_27738[(8)] = inst_27689);

return statearr_27738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(26),inst_27691);
} else {
if((state_val_27724 === (34))){
var inst_27706 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27739_27778 = state_27723__$1;
(statearr_27739_27778[(2)] = inst_27706);

(statearr_27739_27778[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (17))){
var inst_27717 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27740_27779 = state_27723__$1;
(statearr_27740_27779[(2)] = inst_27717);

(statearr_27740_27779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (3))){
var inst_27659 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27659)){
var statearr_27741_27780 = state_27723__$1;
(statearr_27741_27780[(1)] = (10));

} else {
var statearr_27742_27781 = state_27723__$1;
(statearr_27742_27781[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (12))){
var inst_27719 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27743_27782 = state_27723__$1;
(statearr_27743_27782[(2)] = inst_27719);

(statearr_27743_27782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (2))){
var inst_27647 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27647)){
var statearr_27744_27783 = state_27723__$1;
(statearr_27744_27783[(1)] = (5));

} else {
var statearr_27745_27784 = state_27723__$1;
(statearr_27745_27784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (23))){
var inst_27695 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27695)){
var statearr_27746_27785 = state_27723__$1;
(statearr_27746_27785[(1)] = (27));

} else {
var statearr_27747_27786 = state_27723__$1;
(statearr_27747_27786[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (19))){
var inst_27682 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27683 = figwheel.client.heads_up.append_message.call(null,inst_27682);
var state_27723__$1 = state_27723;
var statearr_27748_27787 = state_27723__$1;
(statearr_27748_27787[(2)] = inst_27683);

(statearr_27748_27787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (11))){
var inst_27671 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27671)){
var statearr_27749_27788 = state_27723__$1;
(statearr_27749_27788[(1)] = (15));

} else {
var statearr_27750_27789 = state_27723__$1;
(statearr_27750_27789[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (9))){
var inst_27655 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27751_27790 = state_27723__$1;
(statearr_27751_27790[(2)] = inst_27655);

(statearr_27751_27790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (5))){
var inst_27649 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(8),inst_27649);
} else {
if((state_val_27724 === (14))){
var inst_27669 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27752_27791 = state_27723__$1;
(statearr_27752_27791[(2)] = inst_27669);

(statearr_27752_27791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (26))){
var inst_27693 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27753_27792 = state_27723__$1;
(statearr_27753_27792[(2)] = inst_27693);

(statearr_27753_27792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (16))){
var inst_27680 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27680)){
var statearr_27754_27793 = state_27723__$1;
(statearr_27754_27793[(1)] = (19));

} else {
var statearr_27755_27794 = state_27723__$1;
(statearr_27755_27794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (30))){
var inst_27700 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27756_27795 = state_27723__$1;
(statearr_27756_27795[(2)] = inst_27700);

(statearr_27756_27795[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (10))){
var inst_27661 = figwheel.client.heads_up.clear.call(null);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(13),inst_27661);
} else {
if((state_val_27724 === (18))){
var inst_27678 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27757_27796 = state_27723__$1;
(statearr_27757_27796[(2)] = inst_27678);

(statearr_27757_27796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (8))){
var inst_27651 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27758_27797 = state_27723__$1;
(statearr_27758_27797[(2)] = inst_27651);

(statearr_27758_27797[(1)] = (7));


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
});})(c__19716__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19651__auto__,c__19716__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto____0 = (function (){
var statearr_27762 = [null,null,null,null,null,null,null,null,null];
(statearr_27762[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto__);

(statearr_27762[(1)] = (1));

return statearr_27762;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto____1 = (function (state_27723){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_27723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e27763){if((e27763 instanceof Object)){
var ex__19655__auto__ = e27763;
var statearr_27764_27798 = state_27723;
(statearr_27764_27798[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27799 = state_27723;
state_27723 = G__27799;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto__ = function(state_27723){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto____1.call(this,state_27723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__,msg_hist,msg_names,msg))
})();
var state__19718__auto__ = (function (){var statearr_27765 = f__19717__auto__.call(null);
(statearr_27765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_27765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__,msg_hist,msg_names,msg))
);

return c__19716__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19716__auto___27862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___27862,ch){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___27862,ch){
return (function (state_27845){
var state_val_27846 = (state_27845[(1)]);
if((state_val_27846 === (1))){
var state_27845__$1 = state_27845;
var statearr_27847_27863 = state_27845__$1;
(statearr_27847_27863[(2)] = null);

(statearr_27847_27863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (2))){
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27845__$1,(4),ch);
} else {
if((state_val_27846 === (3))){
var inst_27843 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27845__$1,inst_27843);
} else {
if((state_val_27846 === (4))){
var inst_27833 = (state_27845[(7)]);
var inst_27833__$1 = (state_27845[(2)]);
var state_27845__$1 = (function (){var statearr_27848 = state_27845;
(statearr_27848[(7)] = inst_27833__$1);

return statearr_27848;
})();
if(cljs.core.truth_(inst_27833__$1)){
var statearr_27849_27864 = state_27845__$1;
(statearr_27849_27864[(1)] = (5));

} else {
var statearr_27850_27865 = state_27845__$1;
(statearr_27850_27865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (5))){
var inst_27833 = (state_27845[(7)]);
var inst_27835 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27833);
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27845__$1,(8),inst_27835);
} else {
if((state_val_27846 === (6))){
var state_27845__$1 = state_27845;
var statearr_27851_27866 = state_27845__$1;
(statearr_27851_27866[(2)] = null);

(statearr_27851_27866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (7))){
var inst_27841 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
var statearr_27852_27867 = state_27845__$1;
(statearr_27852_27867[(2)] = inst_27841);

(statearr_27852_27867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (8))){
var inst_27837 = (state_27845[(2)]);
var state_27845__$1 = (function (){var statearr_27853 = state_27845;
(statearr_27853[(8)] = inst_27837);

return statearr_27853;
})();
var statearr_27854_27868 = state_27845__$1;
(statearr_27854_27868[(2)] = null);

(statearr_27854_27868[(1)] = (2));


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
});})(c__19716__auto___27862,ch))
;
return ((function (switch__19651__auto__,c__19716__auto___27862,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19652__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19652__auto____0 = (function (){
var statearr_27858 = [null,null,null,null,null,null,null,null,null];
(statearr_27858[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19652__auto__);

(statearr_27858[(1)] = (1));

return statearr_27858;
});
var figwheel$client$heads_up_plugin_$_state_machine__19652__auto____1 = (function (state_27845){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_27845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e27859){if((e27859 instanceof Object)){
var ex__19655__auto__ = e27859;
var statearr_27860_27869 = state_27845;
(statearr_27860_27869[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27870 = state_27845;
state_27845 = G__27870;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19652__auto__ = function(state_27845){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19652__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19652__auto____1.call(this,state_27845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19652__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19652__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___27862,ch))
})();
var state__19718__auto__ = (function (){var statearr_27861 = f__19717__auto__.call(null);
(statearr_27861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___27862);

return statearr_27861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___27862,ch))
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
var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__){
return (function (state_27891){
var state_val_27892 = (state_27891[(1)]);
if((state_val_27892 === (1))){
var inst_27886 = cljs.core.async.timeout.call(null,(3000));
var state_27891__$1 = state_27891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27891__$1,(2),inst_27886);
} else {
if((state_val_27892 === (2))){
var inst_27888 = (state_27891[(2)]);
var inst_27889 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27891__$1 = (function (){var statearr_27893 = state_27891;
(statearr_27893[(7)] = inst_27888);

return statearr_27893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27891__$1,inst_27889);
} else {
return null;
}
}
});})(c__19716__auto__))
;
return ((function (switch__19651__auto__,c__19716__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19652__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19652__auto____0 = (function (){
var statearr_27897 = [null,null,null,null,null,null,null,null];
(statearr_27897[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19652__auto__);

(statearr_27897[(1)] = (1));

return statearr_27897;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19652__auto____1 = (function (state_27891){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_27891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e27898){if((e27898 instanceof Object)){
var ex__19655__auto__ = e27898;
var statearr_27899_27901 = state_27891;
(statearr_27899_27901[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27902 = state_27891;
state_27891 = G__27902;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19652__auto__ = function(state_27891){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19652__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19652__auto____1.call(this,state_27891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19652__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19652__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__))
})();
var state__19718__auto__ = (function (){var statearr_27900 = f__19717__auto__.call(null);
(statearr_27900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_27900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__))
);

return c__19716__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27903){
var map__27910 = p__27903;
var map__27910__$1 = ((((!((map__27910 == null)))?((((map__27910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27910):map__27910);
var ed = map__27910__$1;
var formatted_exception = cljs.core.get.call(null,map__27910__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27910__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27910__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27912_27916 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27913_27917 = null;
var count__27914_27918 = (0);
var i__27915_27919 = (0);
while(true){
if((i__27915_27919 < count__27914_27918)){
var msg_27920 = cljs.core._nth.call(null,chunk__27913_27917,i__27915_27919);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27920);

var G__27921 = seq__27912_27916;
var G__27922 = chunk__27913_27917;
var G__27923 = count__27914_27918;
var G__27924 = (i__27915_27919 + (1));
seq__27912_27916 = G__27921;
chunk__27913_27917 = G__27922;
count__27914_27918 = G__27923;
i__27915_27919 = G__27924;
continue;
} else {
var temp__4425__auto___27925 = cljs.core.seq.call(null,seq__27912_27916);
if(temp__4425__auto___27925){
var seq__27912_27926__$1 = temp__4425__auto___27925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27912_27926__$1)){
var c__17140__auto___27927 = cljs.core.chunk_first.call(null,seq__27912_27926__$1);
var G__27928 = cljs.core.chunk_rest.call(null,seq__27912_27926__$1);
var G__27929 = c__17140__auto___27927;
var G__27930 = cljs.core.count.call(null,c__17140__auto___27927);
var G__27931 = (0);
seq__27912_27916 = G__27928;
chunk__27913_27917 = G__27929;
count__27914_27918 = G__27930;
i__27915_27919 = G__27931;
continue;
} else {
var msg_27932 = cljs.core.first.call(null,seq__27912_27926__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27932);

var G__27933 = cljs.core.next.call(null,seq__27912_27926__$1);
var G__27934 = null;
var G__27935 = (0);
var G__27936 = (0);
seq__27912_27916 = G__27933;
chunk__27913_27917 = G__27934;
count__27914_27918 = G__27935;
i__27915_27919 = G__27936;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27937){
var map__27940 = p__27937;
var map__27940__$1 = ((((!((map__27940 == null)))?((((map__27940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27940):map__27940);
var w = map__27940__$1;
var message = cljs.core.get.call(null,map__27940__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27948 = cljs.core.seq.call(null,plugins);
var chunk__27949 = null;
var count__27950 = (0);
var i__27951 = (0);
while(true){
if((i__27951 < count__27950)){
var vec__27952 = cljs.core._nth.call(null,chunk__27949,i__27951);
var k = cljs.core.nth.call(null,vec__27952,(0),null);
var plugin = cljs.core.nth.call(null,vec__27952,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27954 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27948,chunk__27949,count__27950,i__27951,pl_27954,vec__27952,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27954.call(null,msg_hist);
});})(seq__27948,chunk__27949,count__27950,i__27951,pl_27954,vec__27952,k,plugin))
);
} else {
}

var G__27955 = seq__27948;
var G__27956 = chunk__27949;
var G__27957 = count__27950;
var G__27958 = (i__27951 + (1));
seq__27948 = G__27955;
chunk__27949 = G__27956;
count__27950 = G__27957;
i__27951 = G__27958;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27948);
if(temp__4425__auto__){
var seq__27948__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27948__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__27948__$1);
var G__27959 = cljs.core.chunk_rest.call(null,seq__27948__$1);
var G__27960 = c__17140__auto__;
var G__27961 = cljs.core.count.call(null,c__17140__auto__);
var G__27962 = (0);
seq__27948 = G__27959;
chunk__27949 = G__27960;
count__27950 = G__27961;
i__27951 = G__27962;
continue;
} else {
var vec__27953 = cljs.core.first.call(null,seq__27948__$1);
var k = cljs.core.nth.call(null,vec__27953,(0),null);
var plugin = cljs.core.nth.call(null,vec__27953,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27963 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27948,chunk__27949,count__27950,i__27951,pl_27963,vec__27953,k,plugin,seq__27948__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27963.call(null,msg_hist);
});})(seq__27948,chunk__27949,count__27950,i__27951,pl_27963,vec__27953,k,plugin,seq__27948__$1,temp__4425__auto__))
);
} else {
}

var G__27964 = cljs.core.next.call(null,seq__27948__$1);
var G__27965 = null;
var G__27966 = (0);
var G__27967 = (0);
seq__27948 = G__27964;
chunk__27949 = G__27965;
count__27950 = G__27966;
i__27951 = G__27967;
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
var args27968 = [];
var len__17395__auto___27971 = arguments.length;
var i__17396__auto___27972 = (0);
while(true){
if((i__17396__auto___27972 < len__17395__auto___27971)){
args27968.push((arguments[i__17396__auto___27972]));

var G__27973 = (i__17396__auto___27972 + (1));
i__17396__auto___27972 = G__27973;
continue;
} else {
}
break;
}

var G__27970 = args27968.length;
switch (G__27970) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27968.length)].join('')));

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
var len__17395__auto___27979 = arguments.length;
var i__17396__auto___27980 = (0);
while(true){
if((i__17396__auto___27980 < len__17395__auto___27979)){
args__17402__auto__.push((arguments[i__17396__auto___27980]));

var G__27981 = (i__17396__auto___27980 + (1));
i__17396__auto___27980 = G__27981;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((0) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17403__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27976){
var map__27977 = p__27976;
var map__27977__$1 = ((((!((map__27977 == null)))?((((map__27977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27977):map__27977);
var opts = map__27977__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27975){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27975));
});

//# sourceMappingURL=client.js.map?rel=1442099117006