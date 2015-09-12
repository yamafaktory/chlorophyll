// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28252_28266 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28253_28267 = null;
var count__28254_28268 = (0);
var i__28255_28269 = (0);
while(true){
if((i__28255_28269 < count__28254_28268)){
var f_28270 = cljs.core._nth.call(null,chunk__28253_28267,i__28255_28269);
cljs.core.println.call(null,"  ",f_28270);

var G__28271 = seq__28252_28266;
var G__28272 = chunk__28253_28267;
var G__28273 = count__28254_28268;
var G__28274 = (i__28255_28269 + (1));
seq__28252_28266 = G__28271;
chunk__28253_28267 = G__28272;
count__28254_28268 = G__28273;
i__28255_28269 = G__28274;
continue;
} else {
var temp__4425__auto___28275 = cljs.core.seq.call(null,seq__28252_28266);
if(temp__4425__auto___28275){
var seq__28252_28276__$1 = temp__4425__auto___28275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28252_28276__$1)){
var c__17140__auto___28277 = cljs.core.chunk_first.call(null,seq__28252_28276__$1);
var G__28278 = cljs.core.chunk_rest.call(null,seq__28252_28276__$1);
var G__28279 = c__17140__auto___28277;
var G__28280 = cljs.core.count.call(null,c__17140__auto___28277);
var G__28281 = (0);
seq__28252_28266 = G__28278;
chunk__28253_28267 = G__28279;
count__28254_28268 = G__28280;
i__28255_28269 = G__28281;
continue;
} else {
var f_28282 = cljs.core.first.call(null,seq__28252_28276__$1);
cljs.core.println.call(null,"  ",f_28282);

var G__28283 = cljs.core.next.call(null,seq__28252_28276__$1);
var G__28284 = null;
var G__28285 = (0);
var G__28286 = (0);
seq__28252_28266 = G__28283;
chunk__28253_28267 = G__28284;
count__28254_28268 = G__28285;
i__28255_28269 = G__28286;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28287 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16337__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28287);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28287)))?cljs.core.second.call(null,arglists_28287):arglists_28287));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28256 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28257 = null;
var count__28258 = (0);
var i__28259 = (0);
while(true){
if((i__28259 < count__28258)){
var vec__28260 = cljs.core._nth.call(null,chunk__28257,i__28259);
var name = cljs.core.nth.call(null,vec__28260,(0),null);
var map__28261 = cljs.core.nth.call(null,vec__28260,(1),null);
var map__28261__$1 = ((((!((map__28261 == null)))?((((map__28261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28261):map__28261);
var doc = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28261__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28288 = seq__28256;
var G__28289 = chunk__28257;
var G__28290 = count__28258;
var G__28291 = (i__28259 + (1));
seq__28256 = G__28288;
chunk__28257 = G__28289;
count__28258 = G__28290;
i__28259 = G__28291;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28256);
if(temp__4425__auto__){
var seq__28256__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28256__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28256__$1);
var G__28292 = cljs.core.chunk_rest.call(null,seq__28256__$1);
var G__28293 = c__17140__auto__;
var G__28294 = cljs.core.count.call(null,c__17140__auto__);
var G__28295 = (0);
seq__28256 = G__28292;
chunk__28257 = G__28293;
count__28258 = G__28294;
i__28259 = G__28295;
continue;
} else {
var vec__28263 = cljs.core.first.call(null,seq__28256__$1);
var name = cljs.core.nth.call(null,vec__28263,(0),null);
var map__28264 = cljs.core.nth.call(null,vec__28263,(1),null);
var map__28264__$1 = ((((!((map__28264 == null)))?((((map__28264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28264):map__28264);
var doc = cljs.core.get.call(null,map__28264__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28264__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28296 = cljs.core.next.call(null,seq__28256__$1);
var G__28297 = null;
var G__28298 = (0);
var G__28299 = (0);
seq__28256 = G__28296;
chunk__28257 = G__28297;
count__28258 = G__28298;
i__28259 = G__28299;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1442099117504