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
var seq__28683_28697 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28684_28698 = null;
var count__28685_28699 = (0);
var i__28686_28700 = (0);
while(true){
if((i__28686_28700 < count__28685_28699)){
var f_28701 = cljs.core._nth.call(null,chunk__28684_28698,i__28686_28700);
cljs.core.println.call(null,"  ",f_28701);

var G__28702 = seq__28683_28697;
var G__28703 = chunk__28684_28698;
var G__28704 = count__28685_28699;
var G__28705 = (i__28686_28700 + (1));
seq__28683_28697 = G__28702;
chunk__28684_28698 = G__28703;
count__28685_28699 = G__28704;
i__28686_28700 = G__28705;
continue;
} else {
var temp__4425__auto___28706 = cljs.core.seq.call(null,seq__28683_28697);
if(temp__4425__auto___28706){
var seq__28683_28707__$1 = temp__4425__auto___28706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28683_28707__$1)){
var c__17140__auto___28708 = cljs.core.chunk_first.call(null,seq__28683_28707__$1);
var G__28709 = cljs.core.chunk_rest.call(null,seq__28683_28707__$1);
var G__28710 = c__17140__auto___28708;
var G__28711 = cljs.core.count.call(null,c__17140__auto___28708);
var G__28712 = (0);
seq__28683_28697 = G__28709;
chunk__28684_28698 = G__28710;
count__28685_28699 = G__28711;
i__28686_28700 = G__28712;
continue;
} else {
var f_28713 = cljs.core.first.call(null,seq__28683_28707__$1);
cljs.core.println.call(null,"  ",f_28713);

var G__28714 = cljs.core.next.call(null,seq__28683_28707__$1);
var G__28715 = null;
var G__28716 = (0);
var G__28717 = (0);
seq__28683_28697 = G__28714;
chunk__28684_28698 = G__28715;
count__28685_28699 = G__28716;
i__28686_28700 = G__28717;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28718 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16337__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28718);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28718)))?cljs.core.second.call(null,arglists_28718):arglists_28718));
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
var seq__28687 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28688 = null;
var count__28689 = (0);
var i__28690 = (0);
while(true){
if((i__28690 < count__28689)){
var vec__28691 = cljs.core._nth.call(null,chunk__28688,i__28690);
var name = cljs.core.nth.call(null,vec__28691,(0),null);
var map__28692 = cljs.core.nth.call(null,vec__28691,(1),null);
var map__28692__$1 = ((((!((map__28692 == null)))?((((map__28692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28692):map__28692);
var doc = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28692__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28719 = seq__28687;
var G__28720 = chunk__28688;
var G__28721 = count__28689;
var G__28722 = (i__28690 + (1));
seq__28687 = G__28719;
chunk__28688 = G__28720;
count__28689 = G__28721;
i__28690 = G__28722;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28687);
if(temp__4425__auto__){
var seq__28687__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28687__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28687__$1);
var G__28723 = cljs.core.chunk_rest.call(null,seq__28687__$1);
var G__28724 = c__17140__auto__;
var G__28725 = cljs.core.count.call(null,c__17140__auto__);
var G__28726 = (0);
seq__28687 = G__28723;
chunk__28688 = G__28724;
count__28689 = G__28725;
i__28690 = G__28726;
continue;
} else {
var vec__28694 = cljs.core.first.call(null,seq__28687__$1);
var name = cljs.core.nth.call(null,vec__28694,(0),null);
var map__28695 = cljs.core.nth.call(null,vec__28694,(1),null);
var map__28695__$1 = ((((!((map__28695 == null)))?((((map__28695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28695):map__28695);
var doc = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28695__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28727 = cljs.core.next.call(null,seq__28687__$1);
var G__28728 = null;
var G__28729 = (0);
var G__28730 = (0);
seq__28687 = G__28727;
chunk__28688 = G__28728;
count__28689 = G__28729;
i__28690 = G__28730;
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

//# sourceMappingURL=repl.js.map?rel=1442954641186