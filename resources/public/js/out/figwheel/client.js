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
var G__27966__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27967__i = 0, G__27967__a = new Array(arguments.length -  0);
while (G__27967__i < G__27967__a.length) {G__27967__a[G__27967__i] = arguments[G__27967__i + 0]; ++G__27967__i;}
  args = new cljs.core.IndexedSeq(G__27967__a,0);
} 
return G__27966__delegate.call(this,args);};
G__27966.cljs$lang$maxFixedArity = 0;
G__27966.cljs$lang$applyTo = (function (arglist__27968){
var args = cljs.core.seq(arglist__27968);
return G__27966__delegate(args);
});
G__27966.cljs$core$IFn$_invoke$arity$variadic = G__27966__delegate;
return G__27966;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27969){
var map__27972 = p__27969;
var map__27972__$1 = ((((!((map__27972 == null)))?((((map__27972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972):map__27972);
var message = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19810__auto___28120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___28120,ch){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___28120,ch){
return (function (state_28090){
var state_val_28091 = (state_28090[(1)]);
if((state_val_28091 === (7))){
var inst_28086 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28092_28121 = state_28090__$1;
(statearr_28092_28121[(2)] = inst_28086);

(statearr_28092_28121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (1))){
var state_28090__$1 = state_28090;
var statearr_28093_28122 = state_28090__$1;
(statearr_28093_28122[(2)] = null);

(statearr_28093_28122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (4))){
var inst_28049 = (state_28090[(7)]);
var inst_28049__$1 = (state_28090[(2)]);
var state_28090__$1 = (function (){var statearr_28094 = state_28090;
(statearr_28094[(7)] = inst_28049__$1);

return statearr_28094;
})();
if(cljs.core.truth_(inst_28049__$1)){
var statearr_28095_28123 = state_28090__$1;
(statearr_28095_28123[(1)] = (5));

} else {
var statearr_28096_28124 = state_28090__$1;
(statearr_28096_28124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (15))){
var inst_28056 = (state_28090[(8)]);
var inst_28071 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28056);
var inst_28072 = cljs.core.first.call(null,inst_28071);
var inst_28073 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28072);
var inst_28074 = console.warn("Figwheel: Not loading code with warnings - ",inst_28073);
var state_28090__$1 = state_28090;
var statearr_28097_28125 = state_28090__$1;
(statearr_28097_28125[(2)] = inst_28074);

(statearr_28097_28125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (13))){
var inst_28079 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28098_28126 = state_28090__$1;
(statearr_28098_28126[(2)] = inst_28079);

(statearr_28098_28126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (6))){
var state_28090__$1 = state_28090;
var statearr_28099_28127 = state_28090__$1;
(statearr_28099_28127[(2)] = null);

(statearr_28099_28127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (17))){
var inst_28077 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28100_28128 = state_28090__$1;
(statearr_28100_28128[(2)] = inst_28077);

(statearr_28100_28128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (3))){
var inst_28088 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28090__$1,inst_28088);
} else {
if((state_val_28091 === (12))){
var inst_28055 = (state_28090[(9)]);
var inst_28069 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28055,opts);
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28069)){
var statearr_28101_28129 = state_28090__$1;
(statearr_28101_28129[(1)] = (15));

} else {
var statearr_28102_28130 = state_28090__$1;
(statearr_28102_28130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (2))){
var state_28090__$1 = state_28090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28090__$1,(4),ch);
} else {
if((state_val_28091 === (11))){
var inst_28056 = (state_28090[(8)]);
var inst_28061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28062 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28056);
var inst_28063 = cljs.core.async.timeout.call(null,(1000));
var inst_28064 = [inst_28062,inst_28063];
var inst_28065 = (new cljs.core.PersistentVector(null,2,(5),inst_28061,inst_28064,null));
var state_28090__$1 = state_28090;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28090__$1,(14),inst_28065);
} else {
if((state_val_28091 === (9))){
var state_28090__$1 = state_28090;
var statearr_28103_28131 = state_28090__$1;
(statearr_28103_28131[(2)] = null);

(statearr_28103_28131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (5))){
var inst_28049 = (state_28090[(7)]);
var inst_28051 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28052 = (new cljs.core.PersistentArrayMap(null,2,inst_28051,null));
var inst_28053 = (new cljs.core.PersistentHashSet(null,inst_28052,null));
var inst_28054 = figwheel.client.focus_msgs.call(null,inst_28053,inst_28049);
var inst_28055 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28054);
var inst_28056 = cljs.core.first.call(null,inst_28054);
var inst_28057 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28090__$1 = (function (){var statearr_28104 = state_28090;
(statearr_28104[(9)] = inst_28055);

(statearr_28104[(8)] = inst_28056);

return statearr_28104;
})();
if(cljs.core.truth_(inst_28057)){
var statearr_28105_28132 = state_28090__$1;
(statearr_28105_28132[(1)] = (8));

} else {
var statearr_28106_28133 = state_28090__$1;
(statearr_28106_28133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (14))){
var inst_28067 = (state_28090[(2)]);
var state_28090__$1 = state_28090;
var statearr_28107_28134 = state_28090__$1;
(statearr_28107_28134[(2)] = inst_28067);

(statearr_28107_28134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (16))){
var state_28090__$1 = state_28090;
var statearr_28108_28135 = state_28090__$1;
(statearr_28108_28135[(2)] = null);

(statearr_28108_28135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (10))){
var inst_28082 = (state_28090[(2)]);
var state_28090__$1 = (function (){var statearr_28109 = state_28090;
(statearr_28109[(10)] = inst_28082);

return statearr_28109;
})();
var statearr_28110_28136 = state_28090__$1;
(statearr_28110_28136[(2)] = null);

(statearr_28110_28136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28091 === (8))){
var inst_28055 = (state_28090[(9)]);
var inst_28059 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28055,opts);
var state_28090__$1 = state_28090;
if(cljs.core.truth_(inst_28059)){
var statearr_28111_28137 = state_28090__$1;
(statearr_28111_28137[(1)] = (11));

} else {
var statearr_28112_28138 = state_28090__$1;
(statearr_28112_28138[(1)] = (12));

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
});})(c__19810__auto___28120,ch))
;
return ((function (switch__19745__auto__,c__19810__auto___28120,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19746__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19746__auto____0 = (function (){
var statearr_28116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28116[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19746__auto__);

(statearr_28116[(1)] = (1));

return statearr_28116;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19746__auto____1 = (function (state_28090){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_28090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e28117){if((e28117 instanceof Object)){
var ex__19749__auto__ = e28117;
var statearr_28118_28139 = state_28090;
(statearr_28118_28139[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28140 = state_28090;
state_28090 = G__28140;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19746__auto__ = function(state_28090){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19746__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19746__auto____1.call(this,state_28090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19746__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19746__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___28120,ch))
})();
var state__19812__auto__ = (function (){var statearr_28119 = f__19811__auto__.call(null);
(statearr_28119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___28120);

return statearr_28119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___28120,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28141_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28141_SHARP_));
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
var base_path_28148 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28148){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28146 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28147 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28146,_STAR_print_newline_STAR_28147,base_path_28148){
return (function() { 
var G__28149__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28150__i = 0, G__28150__a = new Array(arguments.length -  0);
while (G__28150__i < G__28150__a.length) {G__28150__a[G__28150__i] = arguments[G__28150__i + 0]; ++G__28150__i;}
  args = new cljs.core.IndexedSeq(G__28150__a,0);
} 
return G__28149__delegate.call(this,args);};
G__28149.cljs$lang$maxFixedArity = 0;
G__28149.cljs$lang$applyTo = (function (arglist__28151){
var args = cljs.core.seq(arglist__28151);
return G__28149__delegate(args);
});
G__28149.cljs$core$IFn$_invoke$arity$variadic = G__28149__delegate;
return G__28149;
})()
;})(_STAR_print_fn_STAR_28146,_STAR_print_newline_STAR_28147,base_path_28148))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28147;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28146;
}}catch (e28145){if((e28145 instanceof Error)){
var e = e28145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28148], null));
} else {
var e = e28145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28148))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28152){
var map__28159 = p__28152;
var map__28159__$1 = ((((!((map__28159 == null)))?((((map__28159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28159):map__28159);
var opts = map__28159__$1;
var build_id = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28159,map__28159__$1,opts,build_id){
return (function (p__28161){
var vec__28162 = p__28161;
var map__28163 = cljs.core.nth.call(null,vec__28162,(0),null);
var map__28163__$1 = ((((!((map__28163 == null)))?((((map__28163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28163):map__28163);
var msg = map__28163__$1;
var msg_name = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28162,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28162,map__28163,map__28163__$1,msg,msg_name,_,map__28159,map__28159__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28162,map__28163,map__28163__$1,msg,msg_name,_,map__28159,map__28159__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28159,map__28159__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28169){
var vec__28170 = p__28169;
var map__28171 = cljs.core.nth.call(null,vec__28170,(0),null);
var map__28171__$1 = ((((!((map__28171 == null)))?((((map__28171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28171):map__28171);
var msg = map__28171__$1;
var msg_name = cljs.core.get.call(null,map__28171__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28170,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28173){
var map__28183 = p__28173;
var map__28183__$1 = ((((!((map__28183 == null)))?((((map__28183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28183):map__28183);
var on_compile_warning = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28183,map__28183__$1,on_compile_warning,on_compile_fail){
return (function (p__28185){
var vec__28186 = p__28185;
var map__28187 = cljs.core.nth.call(null,vec__28186,(0),null);
var map__28187__$1 = ((((!((map__28187 == null)))?((((map__28187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28187):map__28187);
var msg = map__28187__$1;
var msg_name = cljs.core.get.call(null,map__28187__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28186,(1));
var pred__28189 = cljs.core._EQ_;
var expr__28190 = msg_name;
if(cljs.core.truth_(pred__28189.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28190))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28189.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28190))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28183,map__28183__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__,msg_hist,msg_names,msg){
return (function (state_28406){
var state_val_28407 = (state_28406[(1)]);
if((state_val_28407 === (7))){
var inst_28330 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28330)){
var statearr_28408_28454 = state_28406__$1;
(statearr_28408_28454[(1)] = (8));

} else {
var statearr_28409_28455 = state_28406__$1;
(statearr_28409_28455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (20))){
var inst_28400 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28410_28456 = state_28406__$1;
(statearr_28410_28456[(2)] = inst_28400);

(statearr_28410_28456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (27))){
var inst_28396 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28411_28457 = state_28406__$1;
(statearr_28411_28457[(2)] = inst_28396);

(statearr_28411_28457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (1))){
var inst_28323 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28323)){
var statearr_28412_28458 = state_28406__$1;
(statearr_28412_28458[(1)] = (2));

} else {
var statearr_28413_28459 = state_28406__$1;
(statearr_28413_28459[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (24))){
var inst_28398 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28414_28460 = state_28406__$1;
(statearr_28414_28460[(2)] = inst_28398);

(statearr_28414_28460[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (4))){
var inst_28404 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else {
if((state_val_28407 === (15))){
var inst_28402 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28415_28461 = state_28406__$1;
(statearr_28415_28461[(2)] = inst_28402);

(statearr_28415_28461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (21))){
var inst_28361 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28416_28462 = state_28406__$1;
(statearr_28416_28462[(2)] = inst_28361);

(statearr_28416_28462[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (31))){
var inst_28385 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28385)){
var statearr_28417_28463 = state_28406__$1;
(statearr_28417_28463[(1)] = (34));

} else {
var statearr_28418_28464 = state_28406__$1;
(statearr_28418_28464[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (32))){
var inst_28394 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28419_28465 = state_28406__$1;
(statearr_28419_28465[(2)] = inst_28394);

(statearr_28419_28465[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (33))){
var inst_28383 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28420_28466 = state_28406__$1;
(statearr_28420_28466[(2)] = inst_28383);

(statearr_28420_28466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (13))){
var inst_28344 = figwheel.client.heads_up.clear.call(null);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(16),inst_28344);
} else {
if((state_val_28407 === (22))){
var inst_28365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28366 = figwheel.client.heads_up.append_message.call(null,inst_28365);
var state_28406__$1 = state_28406;
var statearr_28421_28467 = state_28406__$1;
(statearr_28421_28467[(2)] = inst_28366);

(statearr_28421_28467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (36))){
var inst_28392 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28422_28468 = state_28406__$1;
(statearr_28422_28468[(2)] = inst_28392);

(statearr_28422_28468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (29))){
var inst_28376 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28423_28469 = state_28406__$1;
(statearr_28423_28469[(2)] = inst_28376);

(statearr_28423_28469[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (6))){
var inst_28325 = (state_28406[(7)]);
var state_28406__$1 = state_28406;
var statearr_28424_28470 = state_28406__$1;
(statearr_28424_28470[(2)] = inst_28325);

(statearr_28424_28470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (28))){
var inst_28372 = (state_28406[(2)]);
var inst_28373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28374 = figwheel.client.heads_up.display_warning.call(null,inst_28373);
var state_28406__$1 = (function (){var statearr_28425 = state_28406;
(statearr_28425[(8)] = inst_28372);

return statearr_28425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(29),inst_28374);
} else {
if((state_val_28407 === (25))){
var inst_28370 = figwheel.client.heads_up.clear.call(null);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(28),inst_28370);
} else {
if((state_val_28407 === (34))){
var inst_28387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(37),inst_28387);
} else {
if((state_val_28407 === (17))){
var inst_28352 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28426_28471 = state_28406__$1;
(statearr_28426_28471[(2)] = inst_28352);

(statearr_28426_28471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (3))){
var inst_28342 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28342)){
var statearr_28427_28472 = state_28406__$1;
(statearr_28427_28472[(1)] = (13));

} else {
var statearr_28428_28473 = state_28406__$1;
(statearr_28428_28473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (12))){
var inst_28338 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28429_28474 = state_28406__$1;
(statearr_28429_28474[(2)] = inst_28338);

(statearr_28429_28474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (2))){
var inst_28325 = (state_28406[(7)]);
var inst_28325__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28406__$1 = (function (){var statearr_28430 = state_28406;
(statearr_28430[(7)] = inst_28325__$1);

return statearr_28430;
})();
if(cljs.core.truth_(inst_28325__$1)){
var statearr_28431_28475 = state_28406__$1;
(statearr_28431_28475[(1)] = (5));

} else {
var statearr_28432_28476 = state_28406__$1;
(statearr_28432_28476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (23))){
var inst_28368 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28368)){
var statearr_28433_28477 = state_28406__$1;
(statearr_28433_28477[(1)] = (25));

} else {
var statearr_28434_28478 = state_28406__$1;
(statearr_28434_28478[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (35))){
var state_28406__$1 = state_28406;
var statearr_28435_28479 = state_28406__$1;
(statearr_28435_28479[(2)] = null);

(statearr_28435_28479[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (19))){
var inst_28363 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28363)){
var statearr_28436_28480 = state_28406__$1;
(statearr_28436_28480[(1)] = (22));

} else {
var statearr_28437_28481 = state_28406__$1;
(statearr_28437_28481[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (11))){
var inst_28334 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28438_28482 = state_28406__$1;
(statearr_28438_28482[(2)] = inst_28334);

(statearr_28438_28482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (9))){
var inst_28336 = figwheel.client.heads_up.clear.call(null);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(12),inst_28336);
} else {
if((state_val_28407 === (5))){
var inst_28327 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28406__$1 = state_28406;
var statearr_28439_28483 = state_28406__$1;
(statearr_28439_28483[(2)] = inst_28327);

(statearr_28439_28483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (14))){
var inst_28354 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28354)){
var statearr_28440_28484 = state_28406__$1;
(statearr_28440_28484[(1)] = (18));

} else {
var statearr_28441_28485 = state_28406__$1;
(statearr_28441_28485[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (26))){
var inst_28378 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28378)){
var statearr_28442_28486 = state_28406__$1;
(statearr_28442_28486[(1)] = (30));

} else {
var statearr_28443_28487 = state_28406__$1;
(statearr_28443_28487[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (16))){
var inst_28346 = (state_28406[(2)]);
var inst_28347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28348 = figwheel.client.format_messages.call(null,inst_28347);
var inst_28349 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28350 = figwheel.client.heads_up.display_error.call(null,inst_28348,inst_28349);
var state_28406__$1 = (function (){var statearr_28444 = state_28406;
(statearr_28444[(9)] = inst_28346);

return statearr_28444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(17),inst_28350);
} else {
if((state_val_28407 === (30))){
var inst_28380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28381 = figwheel.client.heads_up.display_warning.call(null,inst_28380);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(33),inst_28381);
} else {
if((state_val_28407 === (10))){
var inst_28340 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28445_28488 = state_28406__$1;
(statearr_28445_28488[(2)] = inst_28340);

(statearr_28445_28488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (18))){
var inst_28356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28357 = figwheel.client.format_messages.call(null,inst_28356);
var inst_28358 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28359 = figwheel.client.heads_up.display_error.call(null,inst_28357,inst_28358);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(21),inst_28359);
} else {
if((state_val_28407 === (37))){
var inst_28389 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28446_28489 = state_28406__$1;
(statearr_28446_28489[(2)] = inst_28389);

(statearr_28446_28489[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (8))){
var inst_28332 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(11),inst_28332);
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
});})(c__19810__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19745__auto__,c__19810__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto____0 = (function (){
var statearr_28450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28450[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto__);

(statearr_28450[(1)] = (1));

return statearr_28450;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto____1 = (function (state_28406){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_28406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e28451){if((e28451 instanceof Object)){
var ex__19749__auto__ = e28451;
var statearr_28452_28490 = state_28406;
(statearr_28452_28490[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28491 = state_28406;
state_28406 = G__28491;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__,msg_hist,msg_names,msg))
})();
var state__19812__auto__ = (function (){var statearr_28453 = f__19811__auto__.call(null);
(statearr_28453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_28453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__,msg_hist,msg_names,msg))
);

return c__19810__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19810__auto___28554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___28554,ch){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___28554,ch){
return (function (state_28537){
var state_val_28538 = (state_28537[(1)]);
if((state_val_28538 === (1))){
var state_28537__$1 = state_28537;
var statearr_28539_28555 = state_28537__$1;
(statearr_28539_28555[(2)] = null);

(statearr_28539_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (2))){
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28537__$1,(4),ch);
} else {
if((state_val_28538 === (3))){
var inst_28535 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28537__$1,inst_28535);
} else {
if((state_val_28538 === (4))){
var inst_28525 = (state_28537[(7)]);
var inst_28525__$1 = (state_28537[(2)]);
var state_28537__$1 = (function (){var statearr_28540 = state_28537;
(statearr_28540[(7)] = inst_28525__$1);

return statearr_28540;
})();
if(cljs.core.truth_(inst_28525__$1)){
var statearr_28541_28556 = state_28537__$1;
(statearr_28541_28556[(1)] = (5));

} else {
var statearr_28542_28557 = state_28537__$1;
(statearr_28542_28557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (5))){
var inst_28525 = (state_28537[(7)]);
var inst_28527 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28525);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28537__$1,(8),inst_28527);
} else {
if((state_val_28538 === (6))){
var state_28537__$1 = state_28537;
var statearr_28543_28558 = state_28537__$1;
(statearr_28543_28558[(2)] = null);

(statearr_28543_28558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (7))){
var inst_28533 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28544_28559 = state_28537__$1;
(statearr_28544_28559[(2)] = inst_28533);

(statearr_28544_28559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (8))){
var inst_28529 = (state_28537[(2)]);
var state_28537__$1 = (function (){var statearr_28545 = state_28537;
(statearr_28545[(8)] = inst_28529);

return statearr_28545;
})();
var statearr_28546_28560 = state_28537__$1;
(statearr_28546_28560[(2)] = null);

(statearr_28546_28560[(1)] = (2));


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
});})(c__19810__auto___28554,ch))
;
return ((function (switch__19745__auto__,c__19810__auto___28554,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19746__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19746__auto____0 = (function (){
var statearr_28550 = [null,null,null,null,null,null,null,null,null];
(statearr_28550[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19746__auto__);

(statearr_28550[(1)] = (1));

return statearr_28550;
});
var figwheel$client$heads_up_plugin_$_state_machine__19746__auto____1 = (function (state_28537){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_28537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e28551){if((e28551 instanceof Object)){
var ex__19749__auto__ = e28551;
var statearr_28552_28561 = state_28537;
(statearr_28552_28561[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28562 = state_28537;
state_28537 = G__28562;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19746__auto__ = function(state_28537){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19746__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19746__auto____1.call(this,state_28537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19746__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19746__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___28554,ch))
})();
var state__19812__auto__ = (function (){var statearr_28553 = f__19811__auto__.call(null);
(statearr_28553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___28554);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___28554,ch))
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
var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__){
return (function (state_28583){
var state_val_28584 = (state_28583[(1)]);
if((state_val_28584 === (1))){
var inst_28578 = cljs.core.async.timeout.call(null,(3000));
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28583__$1,(2),inst_28578);
} else {
if((state_val_28584 === (2))){
var inst_28580 = (state_28583[(2)]);
var inst_28581 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28583__$1 = (function (){var statearr_28585 = state_28583;
(statearr_28585[(7)] = inst_28580);

return statearr_28585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28583__$1,inst_28581);
} else {
return null;
}
}
});})(c__19810__auto__))
;
return ((function (switch__19745__auto__,c__19810__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19746__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19746__auto____0 = (function (){
var statearr_28589 = [null,null,null,null,null,null,null,null];
(statearr_28589[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19746__auto__);

(statearr_28589[(1)] = (1));

return statearr_28589;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19746__auto____1 = (function (state_28583){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_28583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e28590){if((e28590 instanceof Object)){
var ex__19749__auto__ = e28590;
var statearr_28591_28593 = state_28583;
(statearr_28591_28593[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28594 = state_28583;
state_28583 = G__28594;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19746__auto__ = function(state_28583){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19746__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19746__auto____1.call(this,state_28583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19746__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19746__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__))
})();
var state__19812__auto__ = (function (){var statearr_28592 = f__19811__auto__.call(null);
(statearr_28592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_28592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__))
);

return c__19810__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28595){
var map__28602 = p__28595;
var map__28602__$1 = ((((!((map__28602 == null)))?((((map__28602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28602):map__28602);
var ed = map__28602__$1;
var formatted_exception = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28604_28608 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28605_28609 = null;
var count__28606_28610 = (0);
var i__28607_28611 = (0);
while(true){
if((i__28607_28611 < count__28606_28610)){
var msg_28612 = cljs.core._nth.call(null,chunk__28605_28609,i__28607_28611);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28612);

var G__28613 = seq__28604_28608;
var G__28614 = chunk__28605_28609;
var G__28615 = count__28606_28610;
var G__28616 = (i__28607_28611 + (1));
seq__28604_28608 = G__28613;
chunk__28605_28609 = G__28614;
count__28606_28610 = G__28615;
i__28607_28611 = G__28616;
continue;
} else {
var temp__4425__auto___28617 = cljs.core.seq.call(null,seq__28604_28608);
if(temp__4425__auto___28617){
var seq__28604_28618__$1 = temp__4425__auto___28617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28604_28618__$1)){
var c__17140__auto___28619 = cljs.core.chunk_first.call(null,seq__28604_28618__$1);
var G__28620 = cljs.core.chunk_rest.call(null,seq__28604_28618__$1);
var G__28621 = c__17140__auto___28619;
var G__28622 = cljs.core.count.call(null,c__17140__auto___28619);
var G__28623 = (0);
seq__28604_28608 = G__28620;
chunk__28605_28609 = G__28621;
count__28606_28610 = G__28622;
i__28607_28611 = G__28623;
continue;
} else {
var msg_28624 = cljs.core.first.call(null,seq__28604_28618__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28624);

var G__28625 = cljs.core.next.call(null,seq__28604_28618__$1);
var G__28626 = null;
var G__28627 = (0);
var G__28628 = (0);
seq__28604_28608 = G__28625;
chunk__28605_28609 = G__28626;
count__28606_28610 = G__28627;
i__28607_28611 = G__28628;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28629){
var map__28632 = p__28629;
var map__28632__$1 = ((((!((map__28632 == null)))?((((map__28632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28632):map__28632);
var w = map__28632__$1;
var message = cljs.core.get.call(null,map__28632__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28640 = cljs.core.seq.call(null,plugins);
var chunk__28641 = null;
var count__28642 = (0);
var i__28643 = (0);
while(true){
if((i__28643 < count__28642)){
var vec__28644 = cljs.core._nth.call(null,chunk__28641,i__28643);
var k = cljs.core.nth.call(null,vec__28644,(0),null);
var plugin = cljs.core.nth.call(null,vec__28644,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28646 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28640,chunk__28641,count__28642,i__28643,pl_28646,vec__28644,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28646.call(null,msg_hist);
});})(seq__28640,chunk__28641,count__28642,i__28643,pl_28646,vec__28644,k,plugin))
);
} else {
}

var G__28647 = seq__28640;
var G__28648 = chunk__28641;
var G__28649 = count__28642;
var G__28650 = (i__28643 + (1));
seq__28640 = G__28647;
chunk__28641 = G__28648;
count__28642 = G__28649;
i__28643 = G__28650;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28640);
if(temp__4425__auto__){
var seq__28640__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28640__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28640__$1);
var G__28651 = cljs.core.chunk_rest.call(null,seq__28640__$1);
var G__28652 = c__17140__auto__;
var G__28653 = cljs.core.count.call(null,c__17140__auto__);
var G__28654 = (0);
seq__28640 = G__28651;
chunk__28641 = G__28652;
count__28642 = G__28653;
i__28643 = G__28654;
continue;
} else {
var vec__28645 = cljs.core.first.call(null,seq__28640__$1);
var k = cljs.core.nth.call(null,vec__28645,(0),null);
var plugin = cljs.core.nth.call(null,vec__28645,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28655 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28640,chunk__28641,count__28642,i__28643,pl_28655,vec__28645,k,plugin,seq__28640__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28655.call(null,msg_hist);
});})(seq__28640,chunk__28641,count__28642,i__28643,pl_28655,vec__28645,k,plugin,seq__28640__$1,temp__4425__auto__))
);
} else {
}

var G__28656 = cljs.core.next.call(null,seq__28640__$1);
var G__28657 = null;
var G__28658 = (0);
var G__28659 = (0);
seq__28640 = G__28656;
chunk__28641 = G__28657;
count__28642 = G__28658;
i__28643 = G__28659;
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
var args28660 = [];
var len__17395__auto___28663 = arguments.length;
var i__17396__auto___28664 = (0);
while(true){
if((i__17396__auto___28664 < len__17395__auto___28663)){
args28660.push((arguments[i__17396__auto___28664]));

var G__28665 = (i__17396__auto___28664 + (1));
i__17396__auto___28664 = G__28665;
continue;
} else {
}
break;
}

var G__28662 = args28660.length;
switch (G__28662) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28660.length)].join('')));

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
var len__17395__auto___28671 = arguments.length;
var i__17396__auto___28672 = (0);
while(true){
if((i__17396__auto___28672 < len__17395__auto___28671)){
args__17402__auto__.push((arguments[i__17396__auto___28672]));

var G__28673 = (i__17396__auto___28672 + (1));
i__17396__auto___28672 = G__28673;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((0) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17403__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28668){
var map__28669 = p__28668;
var map__28669__$1 = ((((!((map__28669 == null)))?((((map__28669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28669):map__28669);
var opts = map__28669__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28667){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28667));
});

//# sourceMappingURL=client.js.map?rel=1443563493976