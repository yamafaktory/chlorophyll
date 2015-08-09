// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__28446_SHARP_,p2__28447_SHARP_){
var and__16501__auto__ = p1__28446_SHARP_;
if(cljs.core.truth_(and__16501__auto__)){
return p2__28447_SHARP_;
} else {
return and__16501__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16513__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16513__auto__){
return or__16513__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16513__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16513__auto__){
return or__16513__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16513__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17411__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17411__auto__,method_table__17407__auto__,prefer_table__17408__auto__,method_cache__17409__auto__,cached_hierarchy__17410__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28448){
var map__28449 = p__28448;
var map__28449__$1 = ((((!((map__28449 == null)))?((((map__28449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28449):map__28449);
var file = cljs.core.get.call(null,map__28449__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28451){
var map__28452 = p__28451;
var map__28452__$1 = ((((!((map__28452 == null)))?((((map__28452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28452):map__28452);
var namespace = cljs.core.get.call(null,map__28452__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17411__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17411__auto__,method_table__17407__auto__,prefer_table__17408__auto__,method_cache__17409__auto__,cached_hierarchy__17410__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28454){if((e28454 instanceof Error)){
var e = e28454;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28454;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args28455 = [];
var len__17552__auto___28458 = arguments.length;
var i__17553__auto___28459 = (0);
while(true){
if((i__17553__auto___28459 < len__17552__auto___28458)){
args28455.push((arguments[i__17553__auto___28459]));

var G__28460 = (i__17553__auto___28459 + (1));
i__17553__auto___28459 = G__28460;
continue;
} else {
}
break;
}

var G__28457 = args28455.length;
switch (G__28457) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28455.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28462,callback){
var map__28465 = p__28462;
var map__28465__$1 = ((((!((map__28465 == null)))?((((map__28465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28465):map__28465);
var file_msg = map__28465__$1;
var request_url = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28465,map__28465__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28465,map__28465__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28467){
var map__28470 = p__28467;
var map__28470__$1 = ((((!((map__28470 == null)))?((((map__28470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28470):map__28470);
var file_msg = map__28470__$1;
var namespace = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16513__auto__ = meta_data;
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16501__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16501__auto__){
var or__16513__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
var or__16513__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16513__auto____$1)){
return or__16513__auto____$1;
} else {
var and__16501__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16501__auto____$1){
var or__16513__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16513__auto____$2){
return or__16513__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16501__auto____$1;
}
}
}
} else {
return and__16501__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28472,callback){
var map__28475 = p__28472;
var map__28475__$1 = ((((!((map__28475 == null)))?((((map__28475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);
var file_msg = map__28475__$1;
var request_url = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19934__auto___28563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto___28563,out){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto___28563,out){
return (function (state_28545){
var state_val_28546 = (state_28545[(1)]);
if((state_val_28546 === (1))){
var inst_28523 = cljs.core.nth.call(null,files,(0),null);
var inst_28524 = cljs.core.nthnext.call(null,files,(1));
var inst_28525 = files;
var state_28545__$1 = (function (){var statearr_28547 = state_28545;
(statearr_28547[(7)] = inst_28525);

(statearr_28547[(8)] = inst_28524);

(statearr_28547[(9)] = inst_28523);

return statearr_28547;
})();
var statearr_28548_28564 = state_28545__$1;
(statearr_28548_28564[(2)] = null);

(statearr_28548_28564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (2))){
var inst_28525 = (state_28545[(7)]);
var inst_28528 = (state_28545[(10)]);
var inst_28528__$1 = cljs.core.nth.call(null,inst_28525,(0),null);
var inst_28529 = cljs.core.nthnext.call(null,inst_28525,(1));
var inst_28530 = (inst_28528__$1 == null);
var inst_28531 = cljs.core.not.call(null,inst_28530);
var state_28545__$1 = (function (){var statearr_28549 = state_28545;
(statearr_28549[(11)] = inst_28529);

(statearr_28549[(10)] = inst_28528__$1);

return statearr_28549;
})();
if(inst_28531){
var statearr_28550_28565 = state_28545__$1;
(statearr_28550_28565[(1)] = (4));

} else {
var statearr_28551_28566 = state_28545__$1;
(statearr_28551_28566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (3))){
var inst_28543 = (state_28545[(2)]);
var state_28545__$1 = state_28545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28545__$1,inst_28543);
} else {
if((state_val_28546 === (4))){
var inst_28528 = (state_28545[(10)]);
var inst_28533 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28528);
var state_28545__$1 = state_28545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28545__$1,(7),inst_28533);
} else {
if((state_val_28546 === (5))){
var inst_28539 = cljs.core.async.close_BANG_.call(null,out);
var state_28545__$1 = state_28545;
var statearr_28552_28567 = state_28545__$1;
(statearr_28552_28567[(2)] = inst_28539);

(statearr_28552_28567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (6))){
var inst_28541 = (state_28545[(2)]);
var state_28545__$1 = state_28545;
var statearr_28553_28568 = state_28545__$1;
(statearr_28553_28568[(2)] = inst_28541);

(statearr_28553_28568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (7))){
var inst_28529 = (state_28545[(11)]);
var inst_28535 = (state_28545[(2)]);
var inst_28536 = cljs.core.async.put_BANG_.call(null,out,inst_28535);
var inst_28525 = inst_28529;
var state_28545__$1 = (function (){var statearr_28554 = state_28545;
(statearr_28554[(7)] = inst_28525);

(statearr_28554[(12)] = inst_28536);

return statearr_28554;
})();
var statearr_28555_28569 = state_28545__$1;
(statearr_28555_28569[(2)] = null);

(statearr_28555_28569[(1)] = (2));


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
});})(c__19934__auto___28563,out))
;
return ((function (switch__19869__auto__,c__19934__auto___28563,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto____0 = (function (){
var statearr_28559 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28559[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto__);

(statearr_28559[(1)] = (1));

return statearr_28559;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto____1 = (function (state_28545){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_28545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e28560){if((e28560 instanceof Object)){
var ex__19873__auto__ = e28560;
var statearr_28561_28570 = state_28545;
(statearr_28561_28570[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28571 = state_28545;
state_28545 = G__28571;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto__ = function(state_28545){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto____1.call(this,state_28545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto___28563,out))
})();
var state__19936__auto__ = (function (){var statearr_28562 = f__19935__auto__.call(null);
(statearr_28562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto___28563);

return statearr_28562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto___28563,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__28572,p__28573){
var map__28578 = p__28572;
var map__28578__$1 = ((((!((map__28578 == null)))?((((map__28578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28578):map__28578);
var opts = map__28578__$1;
var url_rewriter = cljs.core.get.call(null,map__28578__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28579 = p__28573;
var map__28579__$1 = ((((!((map__28579 == null)))?((((map__28579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28579):map__28579);
var file_msg = map__28579__$1;
var file = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28582,opts){
var map__28586 = p__28582;
var map__28586__$1 = ((((!((map__28586 == null)))?((((map__28586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28586):map__28586);
var eval_body__$1 = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16501__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16501__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16501__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28588){var e = e28588;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28593,p__28594){
var map__28822 = p__28593;
var map__28822__$1 = ((((!((map__28822 == null)))?((((map__28822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);
var opts = map__28822__$1;
var before_jsload = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__28823 = p__28594;
var map__28823__$1 = ((((!((map__28823 == null)))?((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var msg = map__28823__$1;
var files = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (state_28964){
var state_val_28965 = (state_28964[(1)]);
if((state_val_28965 === (7))){
var inst_28839 = (state_28964[(7)]);
var inst_28837 = (state_28964[(8)]);
var inst_28838 = (state_28964[(9)]);
var inst_28840 = (state_28964[(10)]);
var inst_28845 = cljs.core._nth.call(null,inst_28838,inst_28840);
var inst_28846 = figwheel.client.file_reloading.eval_body.call(null,inst_28845,opts);
var inst_28847 = (inst_28840 + (1));
var tmp28966 = inst_28839;
var tmp28967 = inst_28837;
var tmp28968 = inst_28838;
var inst_28837__$1 = tmp28967;
var inst_28838__$1 = tmp28968;
var inst_28839__$1 = tmp28966;
var inst_28840__$1 = inst_28847;
var state_28964__$1 = (function (){var statearr_28969 = state_28964;
(statearr_28969[(7)] = inst_28839__$1);

(statearr_28969[(8)] = inst_28837__$1);

(statearr_28969[(9)] = inst_28838__$1);

(statearr_28969[(10)] = inst_28840__$1);

(statearr_28969[(11)] = inst_28846);

return statearr_28969;
})();
var statearr_28970_29049 = state_28964__$1;
(statearr_28970_29049[(2)] = null);

(statearr_28970_29049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (20))){
var inst_28883 = (state_28964[(12)]);
var inst_28886 = (state_28964[(13)]);
var inst_28889 = (state_28964[(14)]);
var inst_28882 = (state_28964[(15)]);
var inst_28887 = (state_28964[(16)]);
var inst_28892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28894 = (function (){var all_files = inst_28882;
var files_SINGLEQUOTE_ = inst_28883;
var res_SINGLEQUOTE_ = inst_28886;
var res = inst_28887;
var files_not_loaded = inst_28889;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28883,inst_28886,inst_28889,inst_28882,inst_28887,inst_28892,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (p__28893){
var map__28971 = p__28893;
var map__28971__$1 = ((((!((map__28971 == null)))?((((map__28971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28971):map__28971);
var namespace = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28883,inst_28886,inst_28889,inst_28882,inst_28887,inst_28892,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var inst_28895 = cljs.core.map.call(null,inst_28894,inst_28887);
var inst_28896 = cljs.core.pr_str.call(null,inst_28895);
var inst_28897 = figwheel.client.utils.log.call(null,inst_28896);
var inst_28898 = (function (){var all_files = inst_28882;
var files_SINGLEQUOTE_ = inst_28883;
var res_SINGLEQUOTE_ = inst_28886;
var res = inst_28887;
var files_not_loaded = inst_28889;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28883,inst_28886,inst_28889,inst_28882,inst_28887,inst_28892,inst_28894,inst_28895,inst_28896,inst_28897,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28883,inst_28886,inst_28889,inst_28882,inst_28887,inst_28892,inst_28894,inst_28895,inst_28896,inst_28897,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var inst_28899 = setTimeout(inst_28898,(10));
var state_28964__$1 = (function (){var statearr_28973 = state_28964;
(statearr_28973[(17)] = inst_28897);

(statearr_28973[(18)] = inst_28892);

return statearr_28973;
})();
var statearr_28974_29050 = state_28964__$1;
(statearr_28974_29050[(2)] = inst_28899);

(statearr_28974_29050[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (27))){
var state_28964__$1 = state_28964;
var statearr_28975_29051 = state_28964__$1;
(statearr_28975_29051[(2)] = false);

(statearr_28975_29051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (1))){
var inst_28829 = (state_28964[(19)]);
var inst_28826 = before_jsload.call(null,files);
var inst_28827 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28828 = (function (){return ((function (inst_28829,inst_28826,inst_28827,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (p1__28589_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28589_SHARP_);
});
;})(inst_28829,inst_28826,inst_28827,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var inst_28829__$1 = cljs.core.filter.call(null,inst_28828,files);
var inst_28830 = cljs.core.not_empty.call(null,inst_28829__$1);
var state_28964__$1 = (function (){var statearr_28976 = state_28964;
(statearr_28976[(20)] = inst_28826);

(statearr_28976[(19)] = inst_28829__$1);

(statearr_28976[(21)] = inst_28827);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28830)){
var statearr_28977_29052 = state_28964__$1;
(statearr_28977_29052[(1)] = (2));

} else {
var statearr_28978_29053 = state_28964__$1;
(statearr_28978_29053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (24))){
var state_28964__$1 = state_28964;
var statearr_28979_29054 = state_28964__$1;
(statearr_28979_29054[(2)] = null);

(statearr_28979_29054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (39))){
var state_28964__$1 = state_28964;
var statearr_28980_29055 = state_28964__$1;
(statearr_28980_29055[(2)] = null);

(statearr_28980_29055[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (4))){
var inst_28874 = (state_28964[(2)]);
var inst_28875 = (function (){return ((function (inst_28874,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (p1__28590_SHARP_){
var and__16501__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28590_SHARP_);
if(cljs.core.truth_(and__16501__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28590_SHARP_));
} else {
return and__16501__auto__;
}
});
;})(inst_28874,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var inst_28876 = cljs.core.filter.call(null,inst_28875,files);
var state_28964__$1 = (function (){var statearr_28981 = state_28964;
(statearr_28981[(22)] = inst_28874);

(statearr_28981[(23)] = inst_28876);

return statearr_28981;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28982_29056 = state_28964__$1;
(statearr_28982_29056[(1)] = (16));

} else {
var statearr_28983_29057 = state_28964__$1;
(statearr_28983_29057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (15))){
var inst_28864 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28984_29058 = state_28964__$1;
(statearr_28984_29058[(2)] = inst_28864);

(statearr_28984_29058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (21))){
var state_28964__$1 = state_28964;
var statearr_28985_29059 = state_28964__$1;
(statearr_28985_29059[(2)] = null);

(statearr_28985_29059[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (31))){
var inst_28921 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28986_29060 = state_28964__$1;
(statearr_28986_29060[(2)] = inst_28921);

(statearr_28986_29060[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (32))){
var inst_28909 = (state_28964[(24)]);
var inst_28926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28909);
var state_28964__$1 = state_28964;
var statearr_28987_29061 = state_28964__$1;
(statearr_28987_29061[(2)] = inst_28926);

(statearr_28987_29061[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (40))){
var inst_28932 = (state_28964[(25)]);
var inst_28950 = (state_28964[(2)]);
var inst_28951 = cljs.core.not_empty.call(null,inst_28932);
var state_28964__$1 = (function (){var statearr_28988 = state_28964;
(statearr_28988[(26)] = inst_28950);

return statearr_28988;
})();
if(cljs.core.truth_(inst_28951)){
var statearr_28989_29062 = state_28964__$1;
(statearr_28989_29062[(1)] = (41));

} else {
var statearr_28990_29063 = state_28964__$1;
(statearr_28990_29063[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (33))){
var inst_28909 = (state_28964[(24)]);
var state_28964__$1 = state_28964;
var statearr_28991_29064 = state_28964__$1;
(statearr_28991_29064[(2)] = inst_28909);

(statearr_28991_29064[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (13))){
var inst_28850 = (state_28964[(27)]);
var inst_28854 = cljs.core.chunk_first.call(null,inst_28850);
var inst_28855 = cljs.core.chunk_rest.call(null,inst_28850);
var inst_28856 = cljs.core.count.call(null,inst_28854);
var inst_28837 = inst_28855;
var inst_28838 = inst_28854;
var inst_28839 = inst_28856;
var inst_28840 = (0);
var state_28964__$1 = (function (){var statearr_28992 = state_28964;
(statearr_28992[(7)] = inst_28839);

(statearr_28992[(8)] = inst_28837);

(statearr_28992[(9)] = inst_28838);

(statearr_28992[(10)] = inst_28840);

return statearr_28992;
})();
var statearr_28993_29065 = state_28964__$1;
(statearr_28993_29065[(2)] = null);

(statearr_28993_29065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (22))){
var inst_28889 = (state_28964[(14)]);
var inst_28902 = (state_28964[(2)]);
var inst_28903 = cljs.core.not_empty.call(null,inst_28889);
var state_28964__$1 = (function (){var statearr_28994 = state_28964;
(statearr_28994[(28)] = inst_28902);

return statearr_28994;
})();
if(cljs.core.truth_(inst_28903)){
var statearr_28995_29066 = state_28964__$1;
(statearr_28995_29066[(1)] = (23));

} else {
var statearr_28996_29067 = state_28964__$1;
(statearr_28996_29067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (36))){
var state_28964__$1 = state_28964;
var statearr_28997_29068 = state_28964__$1;
(statearr_28997_29068[(2)] = null);

(statearr_28997_29068[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (41))){
var inst_28932 = (state_28964[(25)]);
var inst_28953 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28932);
var inst_28954 = cljs.core.pr_str.call(null,inst_28953);
var inst_28955 = [cljs.core.str("not required: "),cljs.core.str(inst_28954)].join('');
var inst_28956 = figwheel.client.utils.log.call(null,inst_28955);
var state_28964__$1 = state_28964;
var statearr_28998_29069 = state_28964__$1;
(statearr_28998_29069[(2)] = inst_28956);

(statearr_28998_29069[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (43))){
var inst_28959 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28999_29070 = state_28964__$1;
(statearr_28999_29070[(2)] = inst_28959);

(statearr_28999_29070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (29))){
var state_28964__$1 = state_28964;
var statearr_29000_29071 = state_28964__$1;
(statearr_29000_29071[(2)] = true);

(statearr_29000_29071[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (6))){
var inst_28871 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_29001_29072 = state_28964__$1;
(statearr_29001_29072[(2)] = inst_28871);

(statearr_29001_29072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (28))){
var inst_28924 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
if(cljs.core.truth_(inst_28924)){
var statearr_29002_29073 = state_28964__$1;
(statearr_29002_29073[(1)] = (32));

} else {
var statearr_29003_29074 = state_28964__$1;
(statearr_29003_29074[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (25))){
var inst_28962 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28964__$1,inst_28962);
} else {
if((state_val_28965 === (34))){
var inst_28930 = (state_28964[(29)]);
var inst_28929 = (state_28964[(2)]);
var inst_28930__$1 = cljs.core.get.call(null,inst_28929,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28931 = cljs.core.get.call(null,inst_28929,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28932 = cljs.core.get.call(null,inst_28929,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28933 = cljs.core.not_empty.call(null,inst_28930__$1);
var state_28964__$1 = (function (){var statearr_29004 = state_28964;
(statearr_29004[(30)] = inst_28931);

(statearr_29004[(25)] = inst_28932);

(statearr_29004[(29)] = inst_28930__$1);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28933)){
var statearr_29005_29075 = state_28964__$1;
(statearr_29005_29075[(1)] = (35));

} else {
var statearr_29006_29076 = state_28964__$1;
(statearr_29006_29076[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (17))){
var inst_28876 = (state_28964[(23)]);
var state_28964__$1 = state_28964;
var statearr_29007_29077 = state_28964__$1;
(statearr_29007_29077[(2)] = inst_28876);

(statearr_29007_29077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (3))){
var state_28964__$1 = state_28964;
var statearr_29008_29078 = state_28964__$1;
(statearr_29008_29078[(2)] = null);

(statearr_29008_29078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (12))){
var inst_28867 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_29009_29079 = state_28964__$1;
(statearr_29009_29079[(2)] = inst_28867);

(statearr_29009_29079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (2))){
var inst_28829 = (state_28964[(19)]);
var inst_28836 = cljs.core.seq.call(null,inst_28829);
var inst_28837 = inst_28836;
var inst_28838 = null;
var inst_28839 = (0);
var inst_28840 = (0);
var state_28964__$1 = (function (){var statearr_29010 = state_28964;
(statearr_29010[(7)] = inst_28839);

(statearr_29010[(8)] = inst_28837);

(statearr_29010[(9)] = inst_28838);

(statearr_29010[(10)] = inst_28840);

return statearr_29010;
})();
var statearr_29011_29080 = state_28964__$1;
(statearr_29011_29080[(2)] = null);

(statearr_29011_29080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (23))){
var inst_28883 = (state_28964[(12)]);
var inst_28886 = (state_28964[(13)]);
var inst_28889 = (state_28964[(14)]);
var inst_28882 = (state_28964[(15)]);
var inst_28887 = (state_28964[(16)]);
var inst_28909 = (state_28964[(24)]);
var inst_28905 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28908 = (function (){var all_files = inst_28882;
var files_SINGLEQUOTE_ = inst_28883;
var res_SINGLEQUOTE_ = inst_28886;
var res = inst_28887;
var files_not_loaded = inst_28889;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28883,inst_28886,inst_28889,inst_28882,inst_28887,inst_28909,inst_28905,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (p__28907){
var map__29012 = p__28907;
var map__29012__$1 = ((((!((map__29012 == null)))?((((map__29012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29012):map__29012);
var meta_data = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28883,inst_28886,inst_28889,inst_28882,inst_28887,inst_28909,inst_28905,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var inst_28909__$1 = cljs.core.group_by.call(null,inst_28908,inst_28889);
var inst_28911 = (inst_28909__$1 == null);
var inst_28912 = cljs.core.not.call(null,inst_28911);
var state_28964__$1 = (function (){var statearr_29014 = state_28964;
(statearr_29014[(31)] = inst_28905);

(statearr_29014[(24)] = inst_28909__$1);

return statearr_29014;
})();
if(inst_28912){
var statearr_29015_29081 = state_28964__$1;
(statearr_29015_29081[(1)] = (26));

} else {
var statearr_29016_29082 = state_28964__$1;
(statearr_29016_29082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (35))){
var inst_28930 = (state_28964[(29)]);
var inst_28935 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28930);
var inst_28936 = cljs.core.pr_str.call(null,inst_28935);
var inst_28937 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28936)].join('');
var inst_28938 = figwheel.client.utils.log.call(null,inst_28937);
var state_28964__$1 = state_28964;
var statearr_29017_29083 = state_28964__$1;
(statearr_29017_29083[(2)] = inst_28938);

(statearr_29017_29083[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (19))){
var inst_28883 = (state_28964[(12)]);
var inst_28886 = (state_28964[(13)]);
var inst_28882 = (state_28964[(15)]);
var inst_28887 = (state_28964[(16)]);
var inst_28886__$1 = (state_28964[(2)]);
var inst_28887__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28886__$1);
var inst_28888 = (function (){var all_files = inst_28882;
var files_SINGLEQUOTE_ = inst_28883;
var res_SINGLEQUOTE_ = inst_28886__$1;
var res = inst_28887__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28883,inst_28886,inst_28882,inst_28887,inst_28886__$1,inst_28887__$1,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (p1__28592_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28592_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28883,inst_28886,inst_28882,inst_28887,inst_28886__$1,inst_28887__$1,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var inst_28889 = cljs.core.filter.call(null,inst_28888,inst_28886__$1);
var inst_28890 = cljs.core.not_empty.call(null,inst_28887__$1);
var state_28964__$1 = (function (){var statearr_29018 = state_28964;
(statearr_29018[(13)] = inst_28886__$1);

(statearr_29018[(14)] = inst_28889);

(statearr_29018[(16)] = inst_28887__$1);

return statearr_29018;
})();
if(cljs.core.truth_(inst_28890)){
var statearr_29019_29084 = state_28964__$1;
(statearr_29019_29084[(1)] = (20));

} else {
var statearr_29020_29085 = state_28964__$1;
(statearr_29020_29085[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (11))){
var state_28964__$1 = state_28964;
var statearr_29021_29086 = state_28964__$1;
(statearr_29021_29086[(2)] = null);

(statearr_29021_29086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (9))){
var inst_28869 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_29022_29087 = state_28964__$1;
(statearr_29022_29087[(2)] = inst_28869);

(statearr_29022_29087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (5))){
var inst_28839 = (state_28964[(7)]);
var inst_28840 = (state_28964[(10)]);
var inst_28842 = (inst_28840 < inst_28839);
var inst_28843 = inst_28842;
var state_28964__$1 = state_28964;
if(cljs.core.truth_(inst_28843)){
var statearr_29023_29088 = state_28964__$1;
(statearr_29023_29088[(1)] = (7));

} else {
var statearr_29024_29089 = state_28964__$1;
(statearr_29024_29089[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (14))){
var inst_28850 = (state_28964[(27)]);
var inst_28859 = cljs.core.first.call(null,inst_28850);
var inst_28860 = figwheel.client.file_reloading.eval_body.call(null,inst_28859,opts);
var inst_28861 = cljs.core.next.call(null,inst_28850);
var inst_28837 = inst_28861;
var inst_28838 = null;
var inst_28839 = (0);
var inst_28840 = (0);
var state_28964__$1 = (function (){var statearr_29025 = state_28964;
(statearr_29025[(7)] = inst_28839);

(statearr_29025[(8)] = inst_28837);

(statearr_29025[(9)] = inst_28838);

(statearr_29025[(10)] = inst_28840);

(statearr_29025[(32)] = inst_28860);

return statearr_29025;
})();
var statearr_29026_29090 = state_28964__$1;
(statearr_29026_29090[(2)] = null);

(statearr_29026_29090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (26))){
var inst_28909 = (state_28964[(24)]);
var inst_28914 = inst_28909.cljs$lang$protocol_mask$partition0$;
var inst_28915 = (inst_28914 & (64));
var inst_28916 = inst_28909.cljs$core$ISeq$;
var inst_28917 = (inst_28915) || (inst_28916);
var state_28964__$1 = state_28964;
if(cljs.core.truth_(inst_28917)){
var statearr_29027_29091 = state_28964__$1;
(statearr_29027_29091[(1)] = (29));

} else {
var statearr_29028_29092 = state_28964__$1;
(statearr_29028_29092[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (16))){
var inst_28876 = (state_28964[(23)]);
var inst_28878 = (function (){var all_files = inst_28876;
return ((function (all_files,inst_28876,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function (p1__28591_SHARP_){
return cljs.core.update_in.call(null,p1__28591_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28876,state_val_28965,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var inst_28879 = cljs.core.map.call(null,inst_28878,inst_28876);
var state_28964__$1 = state_28964;
var statearr_29029_29093 = state_28964__$1;
(statearr_29029_29093[(2)] = inst_28879);

(statearr_29029_29093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (38))){
var inst_28931 = (state_28964[(30)]);
var inst_28944 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28931);
var inst_28945 = cljs.core.pr_str.call(null,inst_28944);
var inst_28946 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28945)].join('');
var inst_28947 = figwheel.client.utils.log.call(null,inst_28946);
var state_28964__$1 = state_28964;
var statearr_29030_29094 = state_28964__$1;
(statearr_29030_29094[(2)] = inst_28947);

(statearr_29030_29094[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (30))){
var state_28964__$1 = state_28964;
var statearr_29031_29095 = state_28964__$1;
(statearr_29031_29095[(2)] = false);

(statearr_29031_29095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (10))){
var inst_28850 = (state_28964[(27)]);
var inst_28852 = cljs.core.chunked_seq_QMARK_.call(null,inst_28850);
var state_28964__$1 = state_28964;
if(inst_28852){
var statearr_29032_29096 = state_28964__$1;
(statearr_29032_29096[(1)] = (13));

} else {
var statearr_29033_29097 = state_28964__$1;
(statearr_29033_29097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (18))){
var inst_28883 = (state_28964[(12)]);
var inst_28882 = (state_28964[(15)]);
var inst_28882__$1 = (state_28964[(2)]);
var inst_28883__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28882__$1);
var inst_28884 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28883__$1);
var state_28964__$1 = (function (){var statearr_29034 = state_28964;
(statearr_29034[(12)] = inst_28883__$1);

(statearr_29034[(15)] = inst_28882__$1);

return statearr_29034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28964__$1,(19),inst_28884);
} else {
if((state_val_28965 === (42))){
var state_28964__$1 = state_28964;
var statearr_29035_29098 = state_28964__$1;
(statearr_29035_29098[(2)] = null);

(statearr_29035_29098[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (37))){
var inst_28931 = (state_28964[(30)]);
var inst_28941 = (state_28964[(2)]);
var inst_28942 = cljs.core.not_empty.call(null,inst_28931);
var state_28964__$1 = (function (){var statearr_29036 = state_28964;
(statearr_29036[(33)] = inst_28941);

return statearr_29036;
})();
if(cljs.core.truth_(inst_28942)){
var statearr_29037_29099 = state_28964__$1;
(statearr_29037_29099[(1)] = (38));

} else {
var statearr_29038_29100 = state_28964__$1;
(statearr_29038_29100[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (8))){
var inst_28837 = (state_28964[(8)]);
var inst_28850 = (state_28964[(27)]);
var inst_28850__$1 = cljs.core.seq.call(null,inst_28837);
var state_28964__$1 = (function (){var statearr_29039 = state_28964;
(statearr_29039[(27)] = inst_28850__$1);

return statearr_29039;
})();
if(inst_28850__$1){
var statearr_29040_29101 = state_28964__$1;
(statearr_29040_29101[(1)] = (10));

} else {
var statearr_29041_29102 = state_28964__$1;
(statearr_29041_29102[(1)] = (11));

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
});})(c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
;
return ((function (switch__19869__auto__,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto____0 = (function (){
var statearr_29045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29045[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto__);

(statearr_29045[(1)] = (1));

return statearr_29045;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto____1 = (function (state_28964){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_28964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e29046){if((e29046 instanceof Object)){
var ex__19873__auto__ = e29046;
var statearr_29047_29103 = state_28964;
(statearr_29047_29103[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29104 = state_28964;
state_28964 = G__29104;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto__ = function(state_28964){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto____1.call(this,state_28964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
})();
var state__19936__auto__ = (function (){var statearr_29048 = f__19935__auto__.call(null);
(statearr_29048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_29048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28823,map__28823__$1,msg,files))
);

return c__19934__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29107,link){
var map__29110 = p__29107;
var map__29110__$1 = ((((!((map__29110 == null)))?((((map__29110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29110):map__29110);
var file = cljs.core.get.call(null,map__29110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4413__auto__ = link.href;
if(cljs.core.truth_(temp__4413__auto__)){
var link_href = temp__4413__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4413__auto__,map__29110,map__29110__$1,file){
return (function (p1__29105_SHARP_,p2__29106_SHARP_){
if(cljs.core._EQ_.call(null,p1__29105_SHARP_,p2__29106_SHARP_)){
return p1__29105_SHARP_;
} else {
return false;
}
});})(link_href,temp__4413__auto__,map__29110,map__29110__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4413__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29116){
var map__29117 = p__29116;
var map__29117__$1 = ((((!((map__29117 == null)))?((((map__29117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29117):map__29117);
var match_length = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29117__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29112_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29112_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4413__auto__)){
var res = temp__4413__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args29119 = [];
var len__17552__auto___29122 = arguments.length;
var i__17553__auto___29123 = (0);
while(true){
if((i__17553__auto___29123 < len__17552__auto___29122)){
args29119.push((arguments[i__17553__auto___29123]));

var G__29124 = (i__17553__auto___29123 + (1));
i__17553__auto___29123 = G__29124;
continue;
} else {
}
break;
}

var G__29121 = args29119.length;
switch (G__29121) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29119.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29126){
var map__29129 = p__29126;
var map__29129__$1 = ((((!((map__29129 == null)))?((((map__29129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29129):map__29129);
var f_data = map__29129__$1;
var file = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4411__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4411__auto__)){
var link = temp__4411__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16513__auto__ = request_url;
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29131,files_msg){
var map__29154 = p__29131;
var map__29154__$1 = ((((!((map__29154 == null)))?((((map__29154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29154):map__29154);
var opts = map__29154__$1;
var on_cssload = cljs.core.get.call(null,map__29154__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29156_29176 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29157_29177 = null;
var count__29158_29178 = (0);
var i__29159_29179 = (0);
while(true){
if((i__29159_29179 < count__29158_29178)){
var f_29180 = cljs.core._nth.call(null,chunk__29157_29177,i__29159_29179);
figwheel.client.file_reloading.reload_css_file.call(null,f_29180);

var G__29181 = seq__29156_29176;
var G__29182 = chunk__29157_29177;
var G__29183 = count__29158_29178;
var G__29184 = (i__29159_29179 + (1));
seq__29156_29176 = G__29181;
chunk__29157_29177 = G__29182;
count__29158_29178 = G__29183;
i__29159_29179 = G__29184;
continue;
} else {
var temp__4413__auto___29185 = cljs.core.seq.call(null,seq__29156_29176);
if(temp__4413__auto___29185){
var seq__29156_29186__$1 = temp__4413__auto___29185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29156_29186__$1)){
var c__17297__auto___29187 = cljs.core.chunk_first.call(null,seq__29156_29186__$1);
var G__29188 = cljs.core.chunk_rest.call(null,seq__29156_29186__$1);
var G__29189 = c__17297__auto___29187;
var G__29190 = cljs.core.count.call(null,c__17297__auto___29187);
var G__29191 = (0);
seq__29156_29176 = G__29188;
chunk__29157_29177 = G__29189;
count__29158_29178 = G__29190;
i__29159_29179 = G__29191;
continue;
} else {
var f_29192 = cljs.core.first.call(null,seq__29156_29186__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29192);

var G__29193 = cljs.core.next.call(null,seq__29156_29186__$1);
var G__29194 = null;
var G__29195 = (0);
var G__29196 = (0);
seq__29156_29176 = G__29193;
chunk__29157_29177 = G__29194;
count__29158_29178 = G__29195;
i__29159_29179 = G__29196;
continue;
}
} else {
}
}
break;
}

var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__,map__29154,map__29154__$1,opts,on_cssload){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__,map__29154,map__29154__$1,opts,on_cssload){
return (function (state_29166){
var state_val_29167 = (state_29166[(1)]);
if((state_val_29167 === (1))){
var inst_29160 = cljs.core.async.timeout.call(null,(100));
var state_29166__$1 = state_29166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29166__$1,(2),inst_29160);
} else {
if((state_val_29167 === (2))){
var inst_29162 = (state_29166[(2)]);
var inst_29163 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29164 = on_cssload.call(null,inst_29163);
var state_29166__$1 = (function (){var statearr_29168 = state_29166;
(statearr_29168[(7)] = inst_29162);

return statearr_29168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29166__$1,inst_29164);
} else {
return null;
}
}
});})(c__19934__auto__,map__29154,map__29154__$1,opts,on_cssload))
;
return ((function (switch__19869__auto__,c__19934__auto__,map__29154,map__29154__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto____0 = (function (){
var statearr_29172 = [null,null,null,null,null,null,null,null];
(statearr_29172[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto__);

(statearr_29172[(1)] = (1));

return statearr_29172;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto____1 = (function (state_29166){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_29166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e29173){if((e29173 instanceof Object)){
var ex__19873__auto__ = e29173;
var statearr_29174_29197 = state_29166;
(statearr_29174_29197[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29198 = state_29166;
state_29166 = G__29198;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto__ = function(state_29166){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto____1.call(this,state_29166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__,map__29154,map__29154__$1,opts,on_cssload))
})();
var state__19936__auto__ = (function (){var statearr_29175 = f__19935__auto__.call(null);
(statearr_29175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_29175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__,map__29154,map__29154__$1,opts,on_cssload))
);

return c__19934__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1438461406278