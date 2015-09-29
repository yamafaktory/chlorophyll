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
var seq__28944_28958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28945_28959 = null;
var count__28946_28960 = (0);
var i__28947_28961 = (0);
while(true){
if((i__28947_28961 < count__28946_28960)){
var f_28962 = cljs.core._nth.call(null,chunk__28945_28959,i__28947_28961);
cljs.core.println.call(null,"  ",f_28962);

var G__28963 = seq__28944_28958;
var G__28964 = chunk__28945_28959;
var G__28965 = count__28946_28960;
var G__28966 = (i__28947_28961 + (1));
seq__28944_28958 = G__28963;
chunk__28945_28959 = G__28964;
count__28946_28960 = G__28965;
i__28947_28961 = G__28966;
continue;
} else {
var temp__4425__auto___28967 = cljs.core.seq.call(null,seq__28944_28958);
if(temp__4425__auto___28967){
var seq__28944_28968__$1 = temp__4425__auto___28967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28944_28968__$1)){
var c__17140__auto___28969 = cljs.core.chunk_first.call(null,seq__28944_28968__$1);
var G__28970 = cljs.core.chunk_rest.call(null,seq__28944_28968__$1);
var G__28971 = c__17140__auto___28969;
var G__28972 = cljs.core.count.call(null,c__17140__auto___28969);
var G__28973 = (0);
seq__28944_28958 = G__28970;
chunk__28945_28959 = G__28971;
count__28946_28960 = G__28972;
i__28947_28961 = G__28973;
continue;
} else {
var f_28974 = cljs.core.first.call(null,seq__28944_28968__$1);
cljs.core.println.call(null,"  ",f_28974);

var G__28975 = cljs.core.next.call(null,seq__28944_28968__$1);
var G__28976 = null;
var G__28977 = (0);
var G__28978 = (0);
seq__28944_28958 = G__28975;
chunk__28945_28959 = G__28976;
count__28946_28960 = G__28977;
i__28947_28961 = G__28978;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28979 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16337__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28979);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28979)))?cljs.core.second.call(null,arglists_28979):arglists_28979));
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
var seq__28948 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28949 = null;
var count__28950 = (0);
var i__28951 = (0);
while(true){
if((i__28951 < count__28950)){
var vec__28952 = cljs.core._nth.call(null,chunk__28949,i__28951);
var name = cljs.core.nth.call(null,vec__28952,(0),null);
var map__28953 = cljs.core.nth.call(null,vec__28952,(1),null);
var map__28953__$1 = ((((!((map__28953 == null)))?((((map__28953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28953):map__28953);
var doc = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28980 = seq__28948;
var G__28981 = chunk__28949;
var G__28982 = count__28950;
var G__28983 = (i__28951 + (1));
seq__28948 = G__28980;
chunk__28949 = G__28981;
count__28950 = G__28982;
i__28951 = G__28983;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28948);
if(temp__4425__auto__){
var seq__28948__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28948__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28948__$1);
var G__28984 = cljs.core.chunk_rest.call(null,seq__28948__$1);
var G__28985 = c__17140__auto__;
var G__28986 = cljs.core.count.call(null,c__17140__auto__);
var G__28987 = (0);
seq__28948 = G__28984;
chunk__28949 = G__28985;
count__28950 = G__28986;
i__28951 = G__28987;
continue;
} else {
var vec__28955 = cljs.core.first.call(null,seq__28948__$1);
var name = cljs.core.nth.call(null,vec__28955,(0),null);
var map__28956 = cljs.core.nth.call(null,vec__28955,(1),null);
var map__28956__$1 = ((((!((map__28956 == null)))?((((map__28956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28956):map__28956);
var doc = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28988 = cljs.core.next.call(null,seq__28948__$1);
var G__28989 = null;
var G__28990 = (0);
var G__28991 = (0);
seq__28948 = G__28988;
chunk__28949 = G__28989;
count__28950 = G__28990;
i__28951 = G__28991;
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

//# sourceMappingURL=repl.js.map?rel=1443563494433