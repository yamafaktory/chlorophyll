// Compiled by ClojureScript 1.7.122 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy$core$recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__24295 = h;
G__24295.setUseFragment(false);

G__24295.setPathPrefix("");

G__24295.setEnabled(true);

return G__24295;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args24296 = [];
var len__17395__auto___24299 = arguments.length;
var i__17396__auto___24300 = (0);
while(true){
if((i__17396__auto___24300 < len__17395__auto___24299)){
args24296.push((arguments[i__17396__auto___24300]));

var G__24301 = (i__17396__auto___24300 + (1));
i__17396__auto___24300 = G__24301;
continue;
} else {
}
break;
}

var G__24298 = args24296.length;
switch (G__24298) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24296.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;

/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args24303 = [];
var len__17395__auto___24309 = arguments.length;
var i__17396__auto___24310 = (0);
while(true){
if((i__17396__auto___24310 < len__17395__auto___24309)){
args24303.push((arguments[i__17396__auto___24310]));

var G__24311 = (i__17396__auto___24310 + (1));
i__17396__auto___24310 = G__24311;
continue;
} else {
}
break;
}

var G__24305 = args24303.length;
switch (G__24305) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24303.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__16992__auto__ = (((this$ == null))?null:this$);
var m__16993__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,this$,token);
} else {
var m__16993__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__16992__auto__ = (((this$ == null))?null:this$);
var m__16993__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,this$,token,title);
} else {
var m__16993__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args24306 = [];
var len__17395__auto___24313 = arguments.length;
var i__17396__auto___24314 = (0);
while(true){
if((i__17396__auto___24314 < len__17395__auto___24313)){
args24306.push((arguments[i__17396__auto___24314]));

var G__24315 = (i__17396__auto___24314 + (1));
i__17396__auto___24314 = G__24315;
continue;
} else {
}
break;
}

var G__24308 = args24306.length;
switch (G__24308) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24306.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__16992__auto__ = (((this$ == null))?null:this$);
var m__16993__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,this$,token);
} else {
var m__16993__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__16992__auto__ = (((this$ == null))?null:this$);
var m__16993__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,this$,token,title);
} else {
var m__16993__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__16992__auto__ = (((this$ == null))?null:this$);
var m__16993__auto__ = (pushy.core.get_token[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,this$);
} else {
var m__16993__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__16992__auto__ = (((this$ == null))?null:this$);
var m__16993__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,this$);
} else {
var m__16993__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__16992__auto__ = (((this$ == null))?null:this$);
var m__16993__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__16992__auto__)]);
if(!((m__16993__auto__ == null))){
return m__16993__auto__.call(null,this$);
} else {
var m__16993__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__16993__auto____$1 == null))){
return m__16993__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (cljs.core.not.call(null,uri.hasDomain())) || (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(location.origin),cljs.core.str(".*$")].join('')),[cljs.core.str(uri)].join(''))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__17402__auto__ = [];
var len__17395__auto___24330 = arguments.length;
var i__17396__auto___24331 = (0);
while(true){
if((i__17396__auto___24331 < len__17395__auto___24330)){
args__17402__auto__.push((arguments[i__17396__auto___24331]));

var G__24332 = (i__17396__auto___24331 + (1));
i__17396__auto___24331 = G__24332;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((2) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((2)),(0))):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17403__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__24320){
var map__24321 = p__24320;
var map__24321__$1 = ((((!((map__24321 == null)))?((((map__24321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);
var processable_url_QMARK_ = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core24323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core24323 = (function (dispatch_fn,match_fn,p__24320,map__24321,processable_url_QMARK_,identity_fn,history,event_keys,meta24324){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__24320 = p__24320;
this.map__24321 = map__24321;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta24324 = meta24324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core24323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (_24325,meta24324__$1){
var self__ = this;
var _24325__$1 = this;
return (new pushy.core.t_pushy$core24323(self__.dispatch_fn,self__.match_fn,self__.p__24320,self__.map__24321,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta24324__$1));
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (_24325){
var self__ = this;
var _24325__$1 = this;
return self__.meta24324;
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
));

var temp__4425__auto___24333 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4425__auto___24333)){
var match_24334 = temp__4425__auto___24333;
self__.dispatch_fn.call(null,match_24334);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4425__auto__)){
var el = temp__4425__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__16325__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__16325__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (!(cljs.core._EQ_.call(null,"_blank",el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__16325__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__4423__auto___24335 = el.title;
if(cljs.core.truth_(temp__4423__auto___24335)){
var title_24336 = temp__4423__auto___24335;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_24336);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__24326_24337 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__24327_24338 = null;
var count__24328_24339 = (0);
var i__24329_24340 = (0);
while(true){
if((i__24329_24340 < count__24328_24339)){
var key_24341 = cljs.core._nth.call(null,chunk__24327_24338,i__24329_24340);
goog.events.unlistenByKey(key_24341);

var G__24342 = seq__24326_24337;
var G__24343 = chunk__24327_24338;
var G__24344 = count__24328_24339;
var G__24345 = (i__24329_24340 + (1));
seq__24326_24337 = G__24342;
chunk__24327_24338 = G__24343;
count__24328_24339 = G__24344;
i__24329_24340 = G__24345;
continue;
} else {
var temp__4425__auto___24346 = cljs.core.seq.call(null,seq__24326_24337);
if(temp__4425__auto___24346){
var seq__24326_24347__$1 = temp__4425__auto___24346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24326_24347__$1)){
var c__17140__auto___24348 = cljs.core.chunk_first.call(null,seq__24326_24347__$1);
var G__24349 = cljs.core.chunk_rest.call(null,seq__24326_24347__$1);
var G__24350 = c__17140__auto___24348;
var G__24351 = cljs.core.count.call(null,c__17140__auto___24348);
var G__24352 = (0);
seq__24326_24337 = G__24349;
chunk__24327_24338 = G__24350;
count__24328_24339 = G__24351;
i__24329_24340 = G__24352;
continue;
} else {
var key_24353 = cljs.core.first.call(null,seq__24326_24347__$1);
goog.events.unlistenByKey(key_24353);

var G__24354 = cljs.core.next.call(null,seq__24326_24347__$1);
var G__24355 = null;
var G__24356 = (0);
var G__24357 = (0);
seq__24326_24337 = G__24354;
chunk__24327_24338 = G__24355;
count__24328_24339 = G__24356;
i__24329_24340 = G__24357;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.getBasis = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__24320","p__24320",1946201748,null),new cljs.core.Symbol(null,"map__24321","map__24321",-2037178542,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta24324","meta24324",1505115439,null)], null);
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24323.cljs$lang$type = true;

pushy.core.t_pushy$core24323.cljs$lang$ctorStr = "pushy.core/t_pushy$core24323";

pushy.core.t_pushy$core24323.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function (this__16935__auto__,writer__16936__auto__,opt__16937__auto__){
return cljs.core._write.call(null,writer__16936__auto__,"pushy.core/t_pushy$core24323");
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.__GT_t_pushy$core24323 = ((function (history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core24323(dispatch_fn__$1,match_fn__$1,p__24320__$1,map__24321__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta24324){
return (new pushy.core.t_pushy$core24323(dispatch_fn__$1,match_fn__$1,p__24320__$1,map__24321__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta24324));
});})(history,event_keys,map__24321,map__24321__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core24323(dispatch_fn,match_fn,p__24320,map__24321__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq24317){
var G__24318 = cljs.core.first.call(null,seq24317);
var seq24317__$1 = cljs.core.next.call(null,seq24317);
var G__24319 = cljs.core.first.call(null,seq24317__$1);
var seq24317__$2 = cljs.core.next.call(null,seq24317__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__24318,G__24319,seq24317__$2);
});
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args24358 = [];
var len__17395__auto___24361 = arguments.length;
var i__17396__auto___24362 = (0);
while(true){
if((i__17396__auto___24362 < len__17395__auto___24361)){
args24358.push((arguments[i__17396__auto___24362]));

var G__24363 = (i__17396__auto___24362 + (1));
i__17396__auto___24362 = G__24363;
continue;
} else {
}
break;
}

var G__24360 = args24358.length;
switch (G__24360) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24358.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;
pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args24365 = [];
var len__17395__auto___24368 = arguments.length;
var i__17396__auto___24369 = (0);
while(true){
if((i__17396__auto___24369 < len__17395__auto___24368)){
args24365.push((arguments[i__17396__auto___24369]));

var G__24370 = (i__17396__auto___24369 + (1));
i__17396__auto___24369 = G__24370;
continue;
} else {
}
break;
}

var G__24367 = args24365.length;
switch (G__24367) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24365.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map?rel=1443563485384