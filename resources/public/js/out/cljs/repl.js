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
var seq__28442_28456 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28443_28457 = null;
var count__28444_28458 = (0);
var i__28445_28459 = (0);
while(true){
if((i__28445_28459 < count__28444_28458)){
var f_28460 = cljs.core._nth.call(null,chunk__28443_28457,i__28445_28459);
cljs.core.println.call(null,"  ",f_28460);

var G__28461 = seq__28442_28456;
var G__28462 = chunk__28443_28457;
var G__28463 = count__28444_28458;
var G__28464 = (i__28445_28459 + (1));
seq__28442_28456 = G__28461;
chunk__28443_28457 = G__28462;
count__28444_28458 = G__28463;
i__28445_28459 = G__28464;
continue;
} else {
var temp__4425__auto___28465 = cljs.core.seq.call(null,seq__28442_28456);
if(temp__4425__auto___28465){
var seq__28442_28466__$1 = temp__4425__auto___28465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28442_28466__$1)){
var c__17140__auto___28467 = cljs.core.chunk_first.call(null,seq__28442_28466__$1);
var G__28468 = cljs.core.chunk_rest.call(null,seq__28442_28466__$1);
var G__28469 = c__17140__auto___28467;
var G__28470 = cljs.core.count.call(null,c__17140__auto___28467);
var G__28471 = (0);
seq__28442_28456 = G__28468;
chunk__28443_28457 = G__28469;
count__28444_28458 = G__28470;
i__28445_28459 = G__28471;
continue;
} else {
var f_28472 = cljs.core.first.call(null,seq__28442_28466__$1);
cljs.core.println.call(null,"  ",f_28472);

var G__28473 = cljs.core.next.call(null,seq__28442_28466__$1);
var G__28474 = null;
var G__28475 = (0);
var G__28476 = (0);
seq__28442_28456 = G__28473;
chunk__28443_28457 = G__28474;
count__28444_28458 = G__28475;
i__28445_28459 = G__28476;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28477 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16337__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28477);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28477)))?cljs.core.second.call(null,arglists_28477):arglists_28477));
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
var seq__28446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28447 = null;
var count__28448 = (0);
var i__28449 = (0);
while(true){
if((i__28449 < count__28448)){
var vec__28450 = cljs.core._nth.call(null,chunk__28447,i__28449);
var name = cljs.core.nth.call(null,vec__28450,(0),null);
var map__28451 = cljs.core.nth.call(null,vec__28450,(1),null);
var map__28451__$1 = ((((!((map__28451 == null)))?((((map__28451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28451):map__28451);
var doc = cljs.core.get.call(null,map__28451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28478 = seq__28446;
var G__28479 = chunk__28447;
var G__28480 = count__28448;
var G__28481 = (i__28449 + (1));
seq__28446 = G__28478;
chunk__28447 = G__28479;
count__28448 = G__28480;
i__28449 = G__28481;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28446);
if(temp__4425__auto__){
var seq__28446__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28446__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28446__$1);
var G__28482 = cljs.core.chunk_rest.call(null,seq__28446__$1);
var G__28483 = c__17140__auto__;
var G__28484 = cljs.core.count.call(null,c__17140__auto__);
var G__28485 = (0);
seq__28446 = G__28482;
chunk__28447 = G__28483;
count__28448 = G__28484;
i__28449 = G__28485;
continue;
} else {
var vec__28453 = cljs.core.first.call(null,seq__28446__$1);
var name = cljs.core.nth.call(null,vec__28453,(0),null);
var map__28454 = cljs.core.nth.call(null,vec__28453,(1),null);
var map__28454__$1 = ((((!((map__28454 == null)))?((((map__28454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28454):map__28454);
var doc = cljs.core.get.call(null,map__28454__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28454__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28486 = cljs.core.next.call(null,seq__28446__$1);
var G__28487 = null;
var G__28488 = (0);
var G__28489 = (0);
seq__28446 = G__28486;
chunk__28447 = G__28487;
count__28448 = G__28488;
i__28449 = G__28489;
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

//# sourceMappingURL=repl.js.map?rel=1442160860205