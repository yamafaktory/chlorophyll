// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4413__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4413__auto__)){
var ns = temp__4413__auto__;
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
var seq__28396_28410 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28397_28411 = null;
var count__28398_28412 = (0);
var i__28399_28413 = (0);
while(true){
if((i__28399_28413 < count__28398_28412)){
var f_28414 = cljs.core._nth.call(null,chunk__28397_28411,i__28399_28413);
cljs.core.println.call(null,"  ",f_28414);

var G__28415 = seq__28396_28410;
var G__28416 = chunk__28397_28411;
var G__28417 = count__28398_28412;
var G__28418 = (i__28399_28413 + (1));
seq__28396_28410 = G__28415;
chunk__28397_28411 = G__28416;
count__28398_28412 = G__28417;
i__28399_28413 = G__28418;
continue;
} else {
var temp__4413__auto___28419 = cljs.core.seq.call(null,seq__28396_28410);
if(temp__4413__auto___28419){
var seq__28396_28420__$1 = temp__4413__auto___28419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28396_28420__$1)){
var c__17297__auto___28421 = cljs.core.chunk_first.call(null,seq__28396_28420__$1);
var G__28422 = cljs.core.chunk_rest.call(null,seq__28396_28420__$1);
var G__28423 = c__17297__auto___28421;
var G__28424 = cljs.core.count.call(null,c__17297__auto___28421);
var G__28425 = (0);
seq__28396_28410 = G__28422;
chunk__28397_28411 = G__28423;
count__28398_28412 = G__28424;
i__28399_28413 = G__28425;
continue;
} else {
var f_28426 = cljs.core.first.call(null,seq__28396_28420__$1);
cljs.core.println.call(null,"  ",f_28426);

var G__28427 = cljs.core.next.call(null,seq__28396_28420__$1);
var G__28428 = null;
var G__28429 = (0);
var G__28430 = (0);
seq__28396_28410 = G__28427;
chunk__28397_28411 = G__28428;
count__28398_28412 = G__28429;
i__28399_28413 = G__28430;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28431 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16513__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28431);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28431)))?cljs.core.second.call(null,arglists_28431):arglists_28431));
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
var seq__28400 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28401 = null;
var count__28402 = (0);
var i__28403 = (0);
while(true){
if((i__28403 < count__28402)){
var vec__28404 = cljs.core._nth.call(null,chunk__28401,i__28403);
var name = cljs.core.nth.call(null,vec__28404,(0),null);
var map__28405 = cljs.core.nth.call(null,vec__28404,(1),null);
var map__28405__$1 = ((((!((map__28405 == null)))?((((map__28405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);
var doc = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28432 = seq__28400;
var G__28433 = chunk__28401;
var G__28434 = count__28402;
var G__28435 = (i__28403 + (1));
seq__28400 = G__28432;
chunk__28401 = G__28433;
count__28402 = G__28434;
i__28403 = G__28435;
continue;
} else {
var temp__4413__auto__ = cljs.core.seq.call(null,seq__28400);
if(temp__4413__auto__){
var seq__28400__$1 = temp__4413__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28400__$1)){
var c__17297__auto__ = cljs.core.chunk_first.call(null,seq__28400__$1);
var G__28436 = cljs.core.chunk_rest.call(null,seq__28400__$1);
var G__28437 = c__17297__auto__;
var G__28438 = cljs.core.count.call(null,c__17297__auto__);
var G__28439 = (0);
seq__28400 = G__28436;
chunk__28401 = G__28437;
count__28402 = G__28438;
i__28403 = G__28439;
continue;
} else {
var vec__28407 = cljs.core.first.call(null,seq__28400__$1);
var name = cljs.core.nth.call(null,vec__28407,(0),null);
var map__28408 = cljs.core.nth.call(null,vec__28407,(1),null);
var map__28408__$1 = ((((!((map__28408 == null)))?((((map__28408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28408):map__28408);
var doc = cljs.core.get.call(null,map__28408__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28408__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28440 = cljs.core.next.call(null,seq__28400__$1);
var G__28441 = null;
var G__28442 = (0);
var G__28443 = (0);
seq__28400 = G__28440;
chunk__28401 = G__28441;
count__28402 = G__28442;
i__28403 = G__28443;
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

//# sourceMappingURL=repl.js.map?rel=1438461405674