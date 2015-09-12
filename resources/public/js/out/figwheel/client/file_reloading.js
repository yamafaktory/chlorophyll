// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16337__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16337__auto__){
return or__16337__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16337__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28304_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28304_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28309 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28310 = null;
var count__28311 = (0);
var i__28312 = (0);
while(true){
if((i__28312 < count__28311)){
var n = cljs.core._nth.call(null,chunk__28310,i__28312);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28313 = seq__28309;
var G__28314 = chunk__28310;
var G__28315 = count__28311;
var G__28316 = (i__28312 + (1));
seq__28309 = G__28313;
chunk__28310 = G__28314;
count__28311 = G__28315;
i__28312 = G__28316;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28309);
if(temp__4425__auto__){
var seq__28309__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28309__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28309__$1);
var G__28317 = cljs.core.chunk_rest.call(null,seq__28309__$1);
var G__28318 = c__17140__auto__;
var G__28319 = cljs.core.count.call(null,c__17140__auto__);
var G__28320 = (0);
seq__28309 = G__28317;
chunk__28310 = G__28318;
count__28311 = G__28319;
i__28312 = G__28320;
continue;
} else {
var n = cljs.core.first.call(null,seq__28309__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28321 = cljs.core.next.call(null,seq__28309__$1);
var G__28322 = null;
var G__28323 = (0);
var G__28324 = (0);
seq__28309 = G__28321;
chunk__28310 = G__28322;
count__28311 = G__28323;
i__28312 = G__28324;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28363_28370 = cljs.core.seq.call(null,deps);
var chunk__28364_28371 = null;
var count__28365_28372 = (0);
var i__28366_28373 = (0);
while(true){
if((i__28366_28373 < count__28365_28372)){
var dep_28374 = cljs.core._nth.call(null,chunk__28364_28371,i__28366_28373);
topo_sort_helper_STAR_.call(null,dep_28374,(depth + (1)),state);

var G__28375 = seq__28363_28370;
var G__28376 = chunk__28364_28371;
var G__28377 = count__28365_28372;
var G__28378 = (i__28366_28373 + (1));
seq__28363_28370 = G__28375;
chunk__28364_28371 = G__28376;
count__28365_28372 = G__28377;
i__28366_28373 = G__28378;
continue;
} else {
var temp__4425__auto___28379 = cljs.core.seq.call(null,seq__28363_28370);
if(temp__4425__auto___28379){
var seq__28363_28380__$1 = temp__4425__auto___28379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28363_28380__$1)){
var c__17140__auto___28381 = cljs.core.chunk_first.call(null,seq__28363_28380__$1);
var G__28382 = cljs.core.chunk_rest.call(null,seq__28363_28380__$1);
var G__28383 = c__17140__auto___28381;
var G__28384 = cljs.core.count.call(null,c__17140__auto___28381);
var G__28385 = (0);
seq__28363_28370 = G__28382;
chunk__28364_28371 = G__28383;
count__28365_28372 = G__28384;
i__28366_28373 = G__28385;
continue;
} else {
var dep_28386 = cljs.core.first.call(null,seq__28363_28380__$1);
topo_sort_helper_STAR_.call(null,dep_28386,(depth + (1)),state);

var G__28387 = cljs.core.next.call(null,seq__28363_28380__$1);
var G__28388 = null;
var G__28389 = (0);
var G__28390 = (0);
seq__28363_28370 = G__28387;
chunk__28364_28371 = G__28388;
count__28365_28372 = G__28389;
i__28366_28373 = G__28390;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28367){
var vec__28369 = p__28367;
var x = cljs.core.nth.call(null,vec__28369,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28369,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28369,x,xs,get_deps__$1){
return (function (p1__28325_SHARP_){
return clojure.set.difference.call(null,p1__28325_SHARP_,x);
});})(vec__28369,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28403 = cljs.core.seq.call(null,provides);
var chunk__28404 = null;
var count__28405 = (0);
var i__28406 = (0);
while(true){
if((i__28406 < count__28405)){
var prov = cljs.core._nth.call(null,chunk__28404,i__28406);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28407_28415 = cljs.core.seq.call(null,requires);
var chunk__28408_28416 = null;
var count__28409_28417 = (0);
var i__28410_28418 = (0);
while(true){
if((i__28410_28418 < count__28409_28417)){
var req_28419 = cljs.core._nth.call(null,chunk__28408_28416,i__28410_28418);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28419,prov);

var G__28420 = seq__28407_28415;
var G__28421 = chunk__28408_28416;
var G__28422 = count__28409_28417;
var G__28423 = (i__28410_28418 + (1));
seq__28407_28415 = G__28420;
chunk__28408_28416 = G__28421;
count__28409_28417 = G__28422;
i__28410_28418 = G__28423;
continue;
} else {
var temp__4425__auto___28424 = cljs.core.seq.call(null,seq__28407_28415);
if(temp__4425__auto___28424){
var seq__28407_28425__$1 = temp__4425__auto___28424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28407_28425__$1)){
var c__17140__auto___28426 = cljs.core.chunk_first.call(null,seq__28407_28425__$1);
var G__28427 = cljs.core.chunk_rest.call(null,seq__28407_28425__$1);
var G__28428 = c__17140__auto___28426;
var G__28429 = cljs.core.count.call(null,c__17140__auto___28426);
var G__28430 = (0);
seq__28407_28415 = G__28427;
chunk__28408_28416 = G__28428;
count__28409_28417 = G__28429;
i__28410_28418 = G__28430;
continue;
} else {
var req_28431 = cljs.core.first.call(null,seq__28407_28425__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28431,prov);

var G__28432 = cljs.core.next.call(null,seq__28407_28425__$1);
var G__28433 = null;
var G__28434 = (0);
var G__28435 = (0);
seq__28407_28415 = G__28432;
chunk__28408_28416 = G__28433;
count__28409_28417 = G__28434;
i__28410_28418 = G__28435;
continue;
}
} else {
}
}
break;
}

var G__28436 = seq__28403;
var G__28437 = chunk__28404;
var G__28438 = count__28405;
var G__28439 = (i__28406 + (1));
seq__28403 = G__28436;
chunk__28404 = G__28437;
count__28405 = G__28438;
i__28406 = G__28439;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28403);
if(temp__4425__auto__){
var seq__28403__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28403__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28403__$1);
var G__28440 = cljs.core.chunk_rest.call(null,seq__28403__$1);
var G__28441 = c__17140__auto__;
var G__28442 = cljs.core.count.call(null,c__17140__auto__);
var G__28443 = (0);
seq__28403 = G__28440;
chunk__28404 = G__28441;
count__28405 = G__28442;
i__28406 = G__28443;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28403__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28411_28444 = cljs.core.seq.call(null,requires);
var chunk__28412_28445 = null;
var count__28413_28446 = (0);
var i__28414_28447 = (0);
while(true){
if((i__28414_28447 < count__28413_28446)){
var req_28448 = cljs.core._nth.call(null,chunk__28412_28445,i__28414_28447);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28448,prov);

var G__28449 = seq__28411_28444;
var G__28450 = chunk__28412_28445;
var G__28451 = count__28413_28446;
var G__28452 = (i__28414_28447 + (1));
seq__28411_28444 = G__28449;
chunk__28412_28445 = G__28450;
count__28413_28446 = G__28451;
i__28414_28447 = G__28452;
continue;
} else {
var temp__4425__auto___28453__$1 = cljs.core.seq.call(null,seq__28411_28444);
if(temp__4425__auto___28453__$1){
var seq__28411_28454__$1 = temp__4425__auto___28453__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28411_28454__$1)){
var c__17140__auto___28455 = cljs.core.chunk_first.call(null,seq__28411_28454__$1);
var G__28456 = cljs.core.chunk_rest.call(null,seq__28411_28454__$1);
var G__28457 = c__17140__auto___28455;
var G__28458 = cljs.core.count.call(null,c__17140__auto___28455);
var G__28459 = (0);
seq__28411_28444 = G__28456;
chunk__28412_28445 = G__28457;
count__28413_28446 = G__28458;
i__28414_28447 = G__28459;
continue;
} else {
var req_28460 = cljs.core.first.call(null,seq__28411_28454__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28460,prov);

var G__28461 = cljs.core.next.call(null,seq__28411_28454__$1);
var G__28462 = null;
var G__28463 = (0);
var G__28464 = (0);
seq__28411_28444 = G__28461;
chunk__28412_28445 = G__28462;
count__28413_28446 = G__28463;
i__28414_28447 = G__28464;
continue;
}
} else {
}
}
break;
}

var G__28465 = cljs.core.next.call(null,seq__28403__$1);
var G__28466 = null;
var G__28467 = (0);
var G__28468 = (0);
seq__28403 = G__28465;
chunk__28404 = G__28466;
count__28405 = G__28467;
i__28406 = G__28468;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28473_28477 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28474_28478 = null;
var count__28475_28479 = (0);
var i__28476_28480 = (0);
while(true){
if((i__28476_28480 < count__28475_28479)){
var ns_28481 = cljs.core._nth.call(null,chunk__28474_28478,i__28476_28480);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28481);

var G__28482 = seq__28473_28477;
var G__28483 = chunk__28474_28478;
var G__28484 = count__28475_28479;
var G__28485 = (i__28476_28480 + (1));
seq__28473_28477 = G__28482;
chunk__28474_28478 = G__28483;
count__28475_28479 = G__28484;
i__28476_28480 = G__28485;
continue;
} else {
var temp__4425__auto___28486 = cljs.core.seq.call(null,seq__28473_28477);
if(temp__4425__auto___28486){
var seq__28473_28487__$1 = temp__4425__auto___28486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28473_28487__$1)){
var c__17140__auto___28488 = cljs.core.chunk_first.call(null,seq__28473_28487__$1);
var G__28489 = cljs.core.chunk_rest.call(null,seq__28473_28487__$1);
var G__28490 = c__17140__auto___28488;
var G__28491 = cljs.core.count.call(null,c__17140__auto___28488);
var G__28492 = (0);
seq__28473_28477 = G__28489;
chunk__28474_28478 = G__28490;
count__28475_28479 = G__28491;
i__28476_28480 = G__28492;
continue;
} else {
var ns_28493 = cljs.core.first.call(null,seq__28473_28487__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28493);

var G__28494 = cljs.core.next.call(null,seq__28473_28487__$1);
var G__28495 = null;
var G__28496 = (0);
var G__28497 = (0);
seq__28473_28477 = G__28494;
chunk__28474_28478 = G__28495;
count__28475_28479 = G__28496;
i__28476_28480 = G__28497;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16337__auto__ = goog.require__;
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28498__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28499__i = 0, G__28499__a = new Array(arguments.length -  0);
while (G__28499__i < G__28499__a.length) {G__28499__a[G__28499__i] = arguments[G__28499__i + 0]; ++G__28499__i;}
  args = new cljs.core.IndexedSeq(G__28499__a,0);
} 
return G__28498__delegate.call(this,args);};
G__28498.cljs$lang$maxFixedArity = 0;
G__28498.cljs$lang$applyTo = (function (arglist__28500){
var args = cljs.core.seq(arglist__28500);
return G__28498__delegate(args);
});
G__28498.cljs$core$IFn$_invoke$arity$variadic = G__28498__delegate;
return G__28498;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28501 = cljs.core._EQ_;
var expr__28502 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28501.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28502))){
return ((function (pred__28501,expr__28502){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28504){if((e28504 instanceof Error)){
var e = e28504;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28504;

}
}})());
});
;})(pred__28501,expr__28502))
} else {
if(cljs.core.truth_(pred__28501.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28502))){
return ((function (pred__28501,expr__28502){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28501,expr__28502){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28501,expr__28502))
);

return deferred.addErrback(((function (deferred,pred__28501,expr__28502){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28501,expr__28502))
);
});
;})(pred__28501,expr__28502))
} else {
return ((function (pred__28501,expr__28502){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28501,expr__28502))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28505,callback){
var map__28508 = p__28505;
var map__28508__$1 = ((((!((map__28508 == null)))?((((map__28508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28508):map__28508);
var file_msg = map__28508__$1;
var request_url = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28508,map__28508__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28508,map__28508__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__){
return (function (state_28532){
var state_val_28533 = (state_28532[(1)]);
if((state_val_28533 === (7))){
var inst_28528 = (state_28532[(2)]);
var state_28532__$1 = state_28532;
var statearr_28534_28554 = state_28532__$1;
(statearr_28534_28554[(2)] = inst_28528);

(statearr_28534_28554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (1))){
var state_28532__$1 = state_28532;
var statearr_28535_28555 = state_28532__$1;
(statearr_28535_28555[(2)] = null);

(statearr_28535_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (4))){
var inst_28512 = (state_28532[(7)]);
var inst_28512__$1 = (state_28532[(2)]);
var state_28532__$1 = (function (){var statearr_28536 = state_28532;
(statearr_28536[(7)] = inst_28512__$1);

return statearr_28536;
})();
if(cljs.core.truth_(inst_28512__$1)){
var statearr_28537_28556 = state_28532__$1;
(statearr_28537_28556[(1)] = (5));

} else {
var statearr_28538_28557 = state_28532__$1;
(statearr_28538_28557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (6))){
var state_28532__$1 = state_28532;
var statearr_28539_28558 = state_28532__$1;
(statearr_28539_28558[(2)] = null);

(statearr_28539_28558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (3))){
var inst_28530 = (state_28532[(2)]);
var state_28532__$1 = state_28532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28532__$1,inst_28530);
} else {
if((state_val_28533 === (2))){
var state_28532__$1 = state_28532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28532__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28533 === (11))){
var inst_28524 = (state_28532[(2)]);
var state_28532__$1 = (function (){var statearr_28540 = state_28532;
(statearr_28540[(8)] = inst_28524);

return statearr_28540;
})();
var statearr_28541_28559 = state_28532__$1;
(statearr_28541_28559[(2)] = null);

(statearr_28541_28559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (9))){
var inst_28518 = (state_28532[(9)]);
var inst_28516 = (state_28532[(10)]);
var inst_28520 = inst_28518.call(null,inst_28516);
var state_28532__$1 = state_28532;
var statearr_28542_28560 = state_28532__$1;
(statearr_28542_28560[(2)] = inst_28520);

(statearr_28542_28560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (5))){
var inst_28512 = (state_28532[(7)]);
var inst_28514 = figwheel.client.file_reloading.blocking_load.call(null,inst_28512);
var state_28532__$1 = state_28532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28532__$1,(8),inst_28514);
} else {
if((state_val_28533 === (10))){
var inst_28516 = (state_28532[(10)]);
var inst_28522 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28516);
var state_28532__$1 = state_28532;
var statearr_28543_28561 = state_28532__$1;
(statearr_28543_28561[(2)] = inst_28522);

(statearr_28543_28561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28533 === (8))){
var inst_28512 = (state_28532[(7)]);
var inst_28518 = (state_28532[(9)]);
var inst_28516 = (state_28532[(2)]);
var inst_28517 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28518__$1 = cljs.core.get.call(null,inst_28517,inst_28512);
var state_28532__$1 = (function (){var statearr_28544 = state_28532;
(statearr_28544[(9)] = inst_28518__$1);

(statearr_28544[(10)] = inst_28516);

return statearr_28544;
})();
if(cljs.core.truth_(inst_28518__$1)){
var statearr_28545_28562 = state_28532__$1;
(statearr_28545_28562[(1)] = (9));

} else {
var statearr_28546_28563 = state_28532__$1;
(statearr_28546_28563[(1)] = (10));

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
});})(c__19716__auto__))
;
return ((function (switch__19651__auto__,c__19716__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19652__auto__ = null;
var figwheel$client$file_reloading$state_machine__19652__auto____0 = (function (){
var statearr_28550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28550[(0)] = figwheel$client$file_reloading$state_machine__19652__auto__);

(statearr_28550[(1)] = (1));

return statearr_28550;
});
var figwheel$client$file_reloading$state_machine__19652__auto____1 = (function (state_28532){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_28532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e28551){if((e28551 instanceof Object)){
var ex__19655__auto__ = e28551;
var statearr_28552_28564 = state_28532;
(statearr_28552_28564[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28565 = state_28532;
state_28532 = G__28565;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19652__auto__ = function(state_28532){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19652__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19652__auto____1.call(this,state_28532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19652__auto____0;
figwheel$client$file_reloading$state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19652__auto____1;
return figwheel$client$file_reloading$state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__))
})();
var state__19718__auto__ = (function (){var statearr_28553 = f__19717__auto__.call(null);
(statearr_28553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__))
);

return c__19716__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28566,callback){
var map__28569 = p__28566;
var map__28569__$1 = ((((!((map__28569 == null)))?((((map__28569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);
var file_msg = map__28569__$1;
var namespace = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28569,map__28569__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28569,map__28569__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28571){
var map__28574 = p__28571;
var map__28574__$1 = ((((!((map__28574 == null)))?((((map__28574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28574):map__28574);
var file_msg = map__28574__$1;
var namespace = cljs.core.get.call(null,map__28574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16325__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16325__auto__){
var or__16337__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
var or__16337__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16337__auto____$1)){
return or__16337__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16325__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28576,callback){
var map__28579 = p__28576;
var map__28579__$1 = ((((!((map__28579 == null)))?((((map__28579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28579):map__28579);
var file_msg = map__28579__$1;
var request_url = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19716__auto___28667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto___28667,out){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto___28667,out){
return (function (state_28649){
var state_val_28650 = (state_28649[(1)]);
if((state_val_28650 === (1))){
var inst_28627 = cljs.core.nth.call(null,files,(0),null);
var inst_28628 = cljs.core.nthnext.call(null,files,(1));
var inst_28629 = files;
var state_28649__$1 = (function (){var statearr_28651 = state_28649;
(statearr_28651[(7)] = inst_28628);

(statearr_28651[(8)] = inst_28629);

(statearr_28651[(9)] = inst_28627);

return statearr_28651;
})();
var statearr_28652_28668 = state_28649__$1;
(statearr_28652_28668[(2)] = null);

(statearr_28652_28668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (2))){
var inst_28632 = (state_28649[(10)]);
var inst_28629 = (state_28649[(8)]);
var inst_28632__$1 = cljs.core.nth.call(null,inst_28629,(0),null);
var inst_28633 = cljs.core.nthnext.call(null,inst_28629,(1));
var inst_28634 = (inst_28632__$1 == null);
var inst_28635 = cljs.core.not.call(null,inst_28634);
var state_28649__$1 = (function (){var statearr_28653 = state_28649;
(statearr_28653[(10)] = inst_28632__$1);

(statearr_28653[(11)] = inst_28633);

return statearr_28653;
})();
if(inst_28635){
var statearr_28654_28669 = state_28649__$1;
(statearr_28654_28669[(1)] = (4));

} else {
var statearr_28655_28670 = state_28649__$1;
(statearr_28655_28670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (3))){
var inst_28647 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28649__$1,inst_28647);
} else {
if((state_val_28650 === (4))){
var inst_28632 = (state_28649[(10)]);
var inst_28637 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28632);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28649__$1,(7),inst_28637);
} else {
if((state_val_28650 === (5))){
var inst_28643 = cljs.core.async.close_BANG_.call(null,out);
var state_28649__$1 = state_28649;
var statearr_28656_28671 = state_28649__$1;
(statearr_28656_28671[(2)] = inst_28643);

(statearr_28656_28671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (6))){
var inst_28645 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28657_28672 = state_28649__$1;
(statearr_28657_28672[(2)] = inst_28645);

(statearr_28657_28672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (7))){
var inst_28633 = (state_28649[(11)]);
var inst_28639 = (state_28649[(2)]);
var inst_28640 = cljs.core.async.put_BANG_.call(null,out,inst_28639);
var inst_28629 = inst_28633;
var state_28649__$1 = (function (){var statearr_28658 = state_28649;
(statearr_28658[(12)] = inst_28640);

(statearr_28658[(8)] = inst_28629);

return statearr_28658;
})();
var statearr_28659_28673 = state_28649__$1;
(statearr_28659_28673[(2)] = null);

(statearr_28659_28673[(1)] = (2));


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
});})(c__19716__auto___28667,out))
;
return ((function (switch__19651__auto__,c__19716__auto___28667,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto____0 = (function (){
var statearr_28663 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28663[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto__);

(statearr_28663[(1)] = (1));

return statearr_28663;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto____1 = (function (state_28649){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_28649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e28664){if((e28664 instanceof Object)){
var ex__19655__auto__ = e28664;
var statearr_28665_28674 = state_28649;
(statearr_28665_28674[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28675 = state_28649;
state_28649 = G__28675;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto__ = function(state_28649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto____1.call(this,state_28649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto___28667,out))
})();
var state__19718__auto__ = (function (){var statearr_28666 = f__19717__auto__.call(null);
(statearr_28666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto___28667);

return statearr_28666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto___28667,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28676,opts){
var map__28680 = p__28676;
var map__28680__$1 = ((((!((map__28680 == null)))?((((map__28680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);
var eval_body__$1 = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16325__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16325__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16325__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28682){var e = e28682;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28683_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28683_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28688){
var vec__28689 = p__28688;
var k = cljs.core.nth.call(null,vec__28689,(0),null);
var v = cljs.core.nth.call(null,vec__28689,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28690){
var vec__28691 = p__28690;
var k = cljs.core.nth.call(null,vec__28691,(0),null);
var v = cljs.core.nth.call(null,vec__28691,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28695,p__28696){
var map__28943 = p__28695;
var map__28943__$1 = ((((!((map__28943 == null)))?((((map__28943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28943):map__28943);
var opts = map__28943__$1;
var before_jsload = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28944 = p__28696;
var map__28944__$1 = ((((!((map__28944 == null)))?((((map__28944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28944):map__28944);
var msg = map__28944__$1;
var files = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19717__auto__ = (function (){var switch__19651__auto__ = ((function (c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29097){
var state_val_29098 = (state_29097[(1)]);
if((state_val_29098 === (7))){
var inst_28960 = (state_29097[(7)]);
var inst_28959 = (state_29097[(8)]);
var inst_28958 = (state_29097[(9)]);
var inst_28961 = (state_29097[(10)]);
var inst_28966 = cljs.core._nth.call(null,inst_28959,inst_28961);
var inst_28967 = figwheel.client.file_reloading.eval_body.call(null,inst_28966,opts);
var inst_28968 = (inst_28961 + (1));
var tmp29099 = inst_28960;
var tmp29100 = inst_28959;
var tmp29101 = inst_28958;
var inst_28958__$1 = tmp29101;
var inst_28959__$1 = tmp29100;
var inst_28960__$1 = tmp29099;
var inst_28961__$1 = inst_28968;
var state_29097__$1 = (function (){var statearr_29102 = state_29097;
(statearr_29102[(7)] = inst_28960__$1);

(statearr_29102[(11)] = inst_28967);

(statearr_29102[(8)] = inst_28959__$1);

(statearr_29102[(9)] = inst_28958__$1);

(statearr_29102[(10)] = inst_28961__$1);

return statearr_29102;
})();
var statearr_29103_29189 = state_29097__$1;
(statearr_29103_29189[(2)] = null);

(statearr_29103_29189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (20))){
var inst_29001 = (state_29097[(12)]);
var inst_29009 = figwheel.client.file_reloading.sort_files.call(null,inst_29001);
var state_29097__$1 = state_29097;
var statearr_29104_29190 = state_29097__$1;
(statearr_29104_29190[(2)] = inst_29009);

(statearr_29104_29190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (27))){
var state_29097__$1 = state_29097;
var statearr_29105_29191 = state_29097__$1;
(statearr_29105_29191[(2)] = null);

(statearr_29105_29191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (1))){
var inst_28950 = (state_29097[(13)]);
var inst_28947 = before_jsload.call(null,files);
var inst_28948 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28949 = (function (){return ((function (inst_28950,inst_28947,inst_28948,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28692_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28692_SHARP_);
});
;})(inst_28950,inst_28947,inst_28948,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28950__$1 = cljs.core.filter.call(null,inst_28949,files);
var inst_28951 = cljs.core.not_empty.call(null,inst_28950__$1);
var state_29097__$1 = (function (){var statearr_29106 = state_29097;
(statearr_29106[(13)] = inst_28950__$1);

(statearr_29106[(14)] = inst_28947);

(statearr_29106[(15)] = inst_28948);

return statearr_29106;
})();
if(cljs.core.truth_(inst_28951)){
var statearr_29107_29192 = state_29097__$1;
(statearr_29107_29192[(1)] = (2));

} else {
var statearr_29108_29193 = state_29097__$1;
(statearr_29108_29193[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (24))){
var state_29097__$1 = state_29097;
var statearr_29109_29194 = state_29097__$1;
(statearr_29109_29194[(2)] = null);

(statearr_29109_29194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (39))){
var inst_29051 = (state_29097[(16)]);
var state_29097__$1 = state_29097;
var statearr_29110_29195 = state_29097__$1;
(statearr_29110_29195[(2)] = inst_29051);

(statearr_29110_29195[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (46))){
var inst_29092 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29111_29196 = state_29097__$1;
(statearr_29111_29196[(2)] = inst_29092);

(statearr_29111_29196[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (4))){
var inst_28995 = (state_29097[(2)]);
var inst_28996 = cljs.core.List.EMPTY;
var inst_28997 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28996);
var inst_28998 = (function (){return ((function (inst_28995,inst_28996,inst_28997,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28693_SHARP_){
var and__16325__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28693_SHARP_);
if(cljs.core.truth_(and__16325__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28693_SHARP_));
} else {
return and__16325__auto__;
}
});
;})(inst_28995,inst_28996,inst_28997,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28999 = cljs.core.filter.call(null,inst_28998,files);
var inst_29000 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29001 = cljs.core.concat.call(null,inst_28999,inst_29000);
var state_29097__$1 = (function (){var statearr_29112 = state_29097;
(statearr_29112[(12)] = inst_29001);

(statearr_29112[(17)] = inst_28997);

(statearr_29112[(18)] = inst_28995);

return statearr_29112;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29113_29197 = state_29097__$1;
(statearr_29113_29197[(1)] = (16));

} else {
var statearr_29114_29198 = state_29097__$1;
(statearr_29114_29198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (15))){
var inst_28985 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29115_29199 = state_29097__$1;
(statearr_29115_29199[(2)] = inst_28985);

(statearr_29115_29199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (21))){
var inst_29011 = (state_29097[(19)]);
var inst_29011__$1 = (state_29097[(2)]);
var inst_29012 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29011__$1);
var state_29097__$1 = (function (){var statearr_29116 = state_29097;
(statearr_29116[(19)] = inst_29011__$1);

return statearr_29116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29097__$1,(22),inst_29012);
} else {
if((state_val_29098 === (31))){
var inst_29095 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29097__$1,inst_29095);
} else {
if((state_val_29098 === (32))){
var inst_29051 = (state_29097[(16)]);
var inst_29056 = inst_29051.cljs$lang$protocol_mask$partition0$;
var inst_29057 = (inst_29056 & (64));
var inst_29058 = inst_29051.cljs$core$ISeq$;
var inst_29059 = (inst_29057) || (inst_29058);
var state_29097__$1 = state_29097;
if(cljs.core.truth_(inst_29059)){
var statearr_29117_29200 = state_29097__$1;
(statearr_29117_29200[(1)] = (35));

} else {
var statearr_29118_29201 = state_29097__$1;
(statearr_29118_29201[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (40))){
var inst_29072 = (state_29097[(20)]);
var inst_29071 = (state_29097[(2)]);
var inst_29072__$1 = cljs.core.get.call(null,inst_29071,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29073 = cljs.core.get.call(null,inst_29071,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29074 = cljs.core.not_empty.call(null,inst_29072__$1);
var state_29097__$1 = (function (){var statearr_29119 = state_29097;
(statearr_29119[(21)] = inst_29073);

(statearr_29119[(20)] = inst_29072__$1);

return statearr_29119;
})();
if(cljs.core.truth_(inst_29074)){
var statearr_29120_29202 = state_29097__$1;
(statearr_29120_29202[(1)] = (41));

} else {
var statearr_29121_29203 = state_29097__$1;
(statearr_29121_29203[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (33))){
var state_29097__$1 = state_29097;
var statearr_29122_29204 = state_29097__$1;
(statearr_29122_29204[(2)] = false);

(statearr_29122_29204[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (13))){
var inst_28971 = (state_29097[(22)]);
var inst_28975 = cljs.core.chunk_first.call(null,inst_28971);
var inst_28976 = cljs.core.chunk_rest.call(null,inst_28971);
var inst_28977 = cljs.core.count.call(null,inst_28975);
var inst_28958 = inst_28976;
var inst_28959 = inst_28975;
var inst_28960 = inst_28977;
var inst_28961 = (0);
var state_29097__$1 = (function (){var statearr_29123 = state_29097;
(statearr_29123[(7)] = inst_28960);

(statearr_29123[(8)] = inst_28959);

(statearr_29123[(9)] = inst_28958);

(statearr_29123[(10)] = inst_28961);

return statearr_29123;
})();
var statearr_29124_29205 = state_29097__$1;
(statearr_29124_29205[(2)] = null);

(statearr_29124_29205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (22))){
var inst_29015 = (state_29097[(23)]);
var inst_29014 = (state_29097[(24)]);
var inst_29019 = (state_29097[(25)]);
var inst_29011 = (state_29097[(19)]);
var inst_29014__$1 = (state_29097[(2)]);
var inst_29015__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29014__$1);
var inst_29016 = (function (){var all_files = inst_29011;
var res_SINGLEQUOTE_ = inst_29014__$1;
var res = inst_29015__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29015,inst_29014,inst_29019,inst_29011,inst_29014__$1,inst_29015__$1,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28694_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28694_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29015,inst_29014,inst_29019,inst_29011,inst_29014__$1,inst_29015__$1,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29017 = cljs.core.filter.call(null,inst_29016,inst_29014__$1);
var inst_29018 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29019__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29018);
var inst_29020 = cljs.core.not_empty.call(null,inst_29019__$1);
var state_29097__$1 = (function (){var statearr_29125 = state_29097;
(statearr_29125[(23)] = inst_29015__$1);

(statearr_29125[(24)] = inst_29014__$1);

(statearr_29125[(25)] = inst_29019__$1);

(statearr_29125[(26)] = inst_29017);

return statearr_29125;
})();
if(cljs.core.truth_(inst_29020)){
var statearr_29126_29206 = state_29097__$1;
(statearr_29126_29206[(1)] = (23));

} else {
var statearr_29127_29207 = state_29097__$1;
(statearr_29127_29207[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (36))){
var state_29097__$1 = state_29097;
var statearr_29128_29208 = state_29097__$1;
(statearr_29128_29208[(2)] = false);

(statearr_29128_29208[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (41))){
var inst_29072 = (state_29097[(20)]);
var inst_29076 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29077 = cljs.core.map.call(null,inst_29076,inst_29072);
var inst_29078 = cljs.core.pr_str.call(null,inst_29077);
var inst_29079 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29078)].join('');
var inst_29080 = figwheel.client.utils.log.call(null,inst_29079);
var state_29097__$1 = state_29097;
var statearr_29129_29209 = state_29097__$1;
(statearr_29129_29209[(2)] = inst_29080);

(statearr_29129_29209[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (43))){
var inst_29073 = (state_29097[(21)]);
var inst_29083 = (state_29097[(2)]);
var inst_29084 = cljs.core.not_empty.call(null,inst_29073);
var state_29097__$1 = (function (){var statearr_29130 = state_29097;
(statearr_29130[(27)] = inst_29083);

return statearr_29130;
})();
if(cljs.core.truth_(inst_29084)){
var statearr_29131_29210 = state_29097__$1;
(statearr_29131_29210[(1)] = (44));

} else {
var statearr_29132_29211 = state_29097__$1;
(statearr_29132_29211[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (29))){
var inst_29015 = (state_29097[(23)]);
var inst_29014 = (state_29097[(24)]);
var inst_29019 = (state_29097[(25)]);
var inst_29051 = (state_29097[(16)]);
var inst_29011 = (state_29097[(19)]);
var inst_29017 = (state_29097[(26)]);
var inst_29047 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29050 = (function (){var all_files = inst_29011;
var res_SINGLEQUOTE_ = inst_29014;
var res = inst_29015;
var files_not_loaded = inst_29017;
var dependencies_that_loaded = inst_29019;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29051,inst_29011,inst_29017,inst_29047,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29049){
var map__29133 = p__29049;
var map__29133__$1 = ((((!((map__29133 == null)))?((((map__29133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29133):map__29133);
var namespace = cljs.core.get.call(null,map__29133__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29051,inst_29011,inst_29017,inst_29047,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29051__$1 = cljs.core.group_by.call(null,inst_29050,inst_29017);
var inst_29053 = (inst_29051__$1 == null);
var inst_29054 = cljs.core.not.call(null,inst_29053);
var state_29097__$1 = (function (){var statearr_29135 = state_29097;
(statearr_29135[(16)] = inst_29051__$1);

(statearr_29135[(28)] = inst_29047);

return statearr_29135;
})();
if(inst_29054){
var statearr_29136_29212 = state_29097__$1;
(statearr_29136_29212[(1)] = (32));

} else {
var statearr_29137_29213 = state_29097__$1;
(statearr_29137_29213[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (44))){
var inst_29073 = (state_29097[(21)]);
var inst_29086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29073);
var inst_29087 = cljs.core.pr_str.call(null,inst_29086);
var inst_29088 = [cljs.core.str("not required: "),cljs.core.str(inst_29087)].join('');
var inst_29089 = figwheel.client.utils.log.call(null,inst_29088);
var state_29097__$1 = state_29097;
var statearr_29138_29214 = state_29097__$1;
(statearr_29138_29214[(2)] = inst_29089);

(statearr_29138_29214[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (6))){
var inst_28992 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29139_29215 = state_29097__$1;
(statearr_29139_29215[(2)] = inst_28992);

(statearr_29139_29215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (28))){
var inst_29017 = (state_29097[(26)]);
var inst_29044 = (state_29097[(2)]);
var inst_29045 = cljs.core.not_empty.call(null,inst_29017);
var state_29097__$1 = (function (){var statearr_29140 = state_29097;
(statearr_29140[(29)] = inst_29044);

return statearr_29140;
})();
if(cljs.core.truth_(inst_29045)){
var statearr_29141_29216 = state_29097__$1;
(statearr_29141_29216[(1)] = (29));

} else {
var statearr_29142_29217 = state_29097__$1;
(statearr_29142_29217[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (25))){
var inst_29015 = (state_29097[(23)]);
var inst_29031 = (state_29097[(2)]);
var inst_29032 = cljs.core.not_empty.call(null,inst_29015);
var state_29097__$1 = (function (){var statearr_29143 = state_29097;
(statearr_29143[(30)] = inst_29031);

return statearr_29143;
})();
if(cljs.core.truth_(inst_29032)){
var statearr_29144_29218 = state_29097__$1;
(statearr_29144_29218[(1)] = (26));

} else {
var statearr_29145_29219 = state_29097__$1;
(statearr_29145_29219[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (34))){
var inst_29066 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
if(cljs.core.truth_(inst_29066)){
var statearr_29146_29220 = state_29097__$1;
(statearr_29146_29220[(1)] = (38));

} else {
var statearr_29147_29221 = state_29097__$1;
(statearr_29147_29221[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (17))){
var state_29097__$1 = state_29097;
var statearr_29148_29222 = state_29097__$1;
(statearr_29148_29222[(2)] = recompile_dependents);

(statearr_29148_29222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (3))){
var state_29097__$1 = state_29097;
var statearr_29149_29223 = state_29097__$1;
(statearr_29149_29223[(2)] = null);

(statearr_29149_29223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (12))){
var inst_28988 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29150_29224 = state_29097__$1;
(statearr_29150_29224[(2)] = inst_28988);

(statearr_29150_29224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (2))){
var inst_28950 = (state_29097[(13)]);
var inst_28957 = cljs.core.seq.call(null,inst_28950);
var inst_28958 = inst_28957;
var inst_28959 = null;
var inst_28960 = (0);
var inst_28961 = (0);
var state_29097__$1 = (function (){var statearr_29151 = state_29097;
(statearr_29151[(7)] = inst_28960);

(statearr_29151[(8)] = inst_28959);

(statearr_29151[(9)] = inst_28958);

(statearr_29151[(10)] = inst_28961);

return statearr_29151;
})();
var statearr_29152_29225 = state_29097__$1;
(statearr_29152_29225[(2)] = null);

(statearr_29152_29225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (23))){
var inst_29015 = (state_29097[(23)]);
var inst_29014 = (state_29097[(24)]);
var inst_29019 = (state_29097[(25)]);
var inst_29011 = (state_29097[(19)]);
var inst_29017 = (state_29097[(26)]);
var inst_29022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29024 = (function (){var all_files = inst_29011;
var res_SINGLEQUOTE_ = inst_29014;
var res = inst_29015;
var files_not_loaded = inst_29017;
var dependencies_that_loaded = inst_29019;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29011,inst_29017,inst_29022,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29023){
var map__29153 = p__29023;
var map__29153__$1 = ((((!((map__29153 == null)))?((((map__29153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29153):map__29153);
var request_url = cljs.core.get.call(null,map__29153__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29011,inst_29017,inst_29022,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29025 = cljs.core.reverse.call(null,inst_29019);
var inst_29026 = cljs.core.map.call(null,inst_29024,inst_29025);
var inst_29027 = cljs.core.pr_str.call(null,inst_29026);
var inst_29028 = figwheel.client.utils.log.call(null,inst_29027);
var state_29097__$1 = (function (){var statearr_29155 = state_29097;
(statearr_29155[(31)] = inst_29022);

return statearr_29155;
})();
var statearr_29156_29226 = state_29097__$1;
(statearr_29156_29226[(2)] = inst_29028);

(statearr_29156_29226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (35))){
var state_29097__$1 = state_29097;
var statearr_29157_29227 = state_29097__$1;
(statearr_29157_29227[(2)] = true);

(statearr_29157_29227[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (19))){
var inst_29001 = (state_29097[(12)]);
var inst_29007 = figwheel.client.file_reloading.expand_files.call(null,inst_29001);
var state_29097__$1 = state_29097;
var statearr_29158_29228 = state_29097__$1;
(statearr_29158_29228[(2)] = inst_29007);

(statearr_29158_29228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (11))){
var state_29097__$1 = state_29097;
var statearr_29159_29229 = state_29097__$1;
(statearr_29159_29229[(2)] = null);

(statearr_29159_29229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (9))){
var inst_28990 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29160_29230 = state_29097__$1;
(statearr_29160_29230[(2)] = inst_28990);

(statearr_29160_29230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (5))){
var inst_28960 = (state_29097[(7)]);
var inst_28961 = (state_29097[(10)]);
var inst_28963 = (inst_28961 < inst_28960);
var inst_28964 = inst_28963;
var state_29097__$1 = state_29097;
if(cljs.core.truth_(inst_28964)){
var statearr_29161_29231 = state_29097__$1;
(statearr_29161_29231[(1)] = (7));

} else {
var statearr_29162_29232 = state_29097__$1;
(statearr_29162_29232[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (14))){
var inst_28971 = (state_29097[(22)]);
var inst_28980 = cljs.core.first.call(null,inst_28971);
var inst_28981 = figwheel.client.file_reloading.eval_body.call(null,inst_28980,opts);
var inst_28982 = cljs.core.next.call(null,inst_28971);
var inst_28958 = inst_28982;
var inst_28959 = null;
var inst_28960 = (0);
var inst_28961 = (0);
var state_29097__$1 = (function (){var statearr_29163 = state_29097;
(statearr_29163[(7)] = inst_28960);

(statearr_29163[(8)] = inst_28959);

(statearr_29163[(9)] = inst_28958);

(statearr_29163[(10)] = inst_28961);

(statearr_29163[(32)] = inst_28981);

return statearr_29163;
})();
var statearr_29164_29233 = state_29097__$1;
(statearr_29164_29233[(2)] = null);

(statearr_29164_29233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (45))){
var state_29097__$1 = state_29097;
var statearr_29165_29234 = state_29097__$1;
(statearr_29165_29234[(2)] = null);

(statearr_29165_29234[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (26))){
var inst_29015 = (state_29097[(23)]);
var inst_29014 = (state_29097[(24)]);
var inst_29019 = (state_29097[(25)]);
var inst_29011 = (state_29097[(19)]);
var inst_29017 = (state_29097[(26)]);
var inst_29034 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29036 = (function (){var all_files = inst_29011;
var res_SINGLEQUOTE_ = inst_29014;
var res = inst_29015;
var files_not_loaded = inst_29017;
var dependencies_that_loaded = inst_29019;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29011,inst_29017,inst_29034,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29035){
var map__29166 = p__29035;
var map__29166__$1 = ((((!((map__29166 == null)))?((((map__29166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29166):map__29166);
var namespace = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29011,inst_29017,inst_29034,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29037 = cljs.core.map.call(null,inst_29036,inst_29015);
var inst_29038 = cljs.core.pr_str.call(null,inst_29037);
var inst_29039 = figwheel.client.utils.log.call(null,inst_29038);
var inst_29040 = (function (){var all_files = inst_29011;
var res_SINGLEQUOTE_ = inst_29014;
var res = inst_29015;
var files_not_loaded = inst_29017;
var dependencies_that_loaded = inst_29019;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29011,inst_29017,inst_29034,inst_29036,inst_29037,inst_29038,inst_29039,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29015,inst_29014,inst_29019,inst_29011,inst_29017,inst_29034,inst_29036,inst_29037,inst_29038,inst_29039,state_val_29098,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29041 = setTimeout(inst_29040,(10));
var state_29097__$1 = (function (){var statearr_29168 = state_29097;
(statearr_29168[(33)] = inst_29034);

(statearr_29168[(34)] = inst_29039);

return statearr_29168;
})();
var statearr_29169_29235 = state_29097__$1;
(statearr_29169_29235[(2)] = inst_29041);

(statearr_29169_29235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (16))){
var state_29097__$1 = state_29097;
var statearr_29170_29236 = state_29097__$1;
(statearr_29170_29236[(2)] = reload_dependents);

(statearr_29170_29236[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (38))){
var inst_29051 = (state_29097[(16)]);
var inst_29068 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29051);
var state_29097__$1 = state_29097;
var statearr_29171_29237 = state_29097__$1;
(statearr_29171_29237[(2)] = inst_29068);

(statearr_29171_29237[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (30))){
var state_29097__$1 = state_29097;
var statearr_29172_29238 = state_29097__$1;
(statearr_29172_29238[(2)] = null);

(statearr_29172_29238[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (10))){
var inst_28971 = (state_29097[(22)]);
var inst_28973 = cljs.core.chunked_seq_QMARK_.call(null,inst_28971);
var state_29097__$1 = state_29097;
if(inst_28973){
var statearr_29173_29239 = state_29097__$1;
(statearr_29173_29239[(1)] = (13));

} else {
var statearr_29174_29240 = state_29097__$1;
(statearr_29174_29240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (18))){
var inst_29005 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
if(cljs.core.truth_(inst_29005)){
var statearr_29175_29241 = state_29097__$1;
(statearr_29175_29241[(1)] = (19));

} else {
var statearr_29176_29242 = state_29097__$1;
(statearr_29176_29242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (42))){
var state_29097__$1 = state_29097;
var statearr_29177_29243 = state_29097__$1;
(statearr_29177_29243[(2)] = null);

(statearr_29177_29243[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (37))){
var inst_29063 = (state_29097[(2)]);
var state_29097__$1 = state_29097;
var statearr_29178_29244 = state_29097__$1;
(statearr_29178_29244[(2)] = inst_29063);

(statearr_29178_29244[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29098 === (8))){
var inst_28958 = (state_29097[(9)]);
var inst_28971 = (state_29097[(22)]);
var inst_28971__$1 = cljs.core.seq.call(null,inst_28958);
var state_29097__$1 = (function (){var statearr_29179 = state_29097;
(statearr_29179[(22)] = inst_28971__$1);

return statearr_29179;
})();
if(inst_28971__$1){
var statearr_29180_29245 = state_29097__$1;
(statearr_29180_29245[(1)] = (10));

} else {
var statearr_29181_29246 = state_29097__$1;
(statearr_29181_29246[(1)] = (11));

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
}
}
}
});})(c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19651__auto__,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto____0 = (function (){
var statearr_29185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29185[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto__);

(statearr_29185[(1)] = (1));

return statearr_29185;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto____1 = (function (state_29097){
while(true){
var ret_value__19653__auto__ = (function (){try{while(true){
var result__19654__auto__ = switch__19651__auto__.call(null,state_29097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19654__auto__;
}
break;
}
}catch (e29186){if((e29186 instanceof Object)){
var ex__19655__auto__ = e29186;
var statearr_29187_29247 = state_29097;
(statearr_29187_29247[(5)] = ex__19655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29248 = state_29097;
state_29097 = G__29248;
continue;
} else {
return ret_value__19653__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto__ = function(state_29097){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto____1.call(this,state_29097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19652__auto__;
})()
;})(switch__19651__auto__,c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19718__auto__ = (function (){var statearr_29188 = f__19717__auto__.call(null);
(statearr_29188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19716__auto__);

return statearr_29188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19718__auto__);
});})(c__19716__auto__,map__28943,map__28943__$1,opts,before_jsload,on_jsload,reload_dependents,map__28944,map__28944__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19716__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29251,link){
var map__29254 = p__29251;
var map__29254__$1 = ((((!((map__29254 == null)))?((((map__29254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29254):map__29254);
var file = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29254,map__29254__$1,file){
return (function (p1__29249_SHARP_,p2__29250_SHARP_){
if(cljs.core._EQ_.call(null,p1__29249_SHARP_,p2__29250_SHARP_)){
return p1__29249_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29254,map__29254__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29260){
var map__29261 = p__29260;
var map__29261__$1 = ((((!((map__29261 == null)))?((((map__29261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29261):map__29261);
var match_length = cljs.core.get.call(null,map__29261__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29261__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29256_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29256_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29263 = [];
var len__17395__auto___29266 = arguments.length;
var i__17396__auto___29267 = (0);
while(true){
if((i__17396__auto___29267 < len__17395__auto___29266)){
args29263.push((arguments[i__17396__auto___29267]));

var G__29268 = (i__17396__auto___29267 + (1));
i__17396__auto___29267 = G__29268;
continue;
} else {
}
break;
}

var G__29265 = args29263.length;
switch (G__29265) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29263.length)].join('')));

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
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29270_SHARP_,p2__29271_SHARP_){
return cljs.core.assoc.call(null,p1__29270_SHARP_,cljs.core.get.call(null,p2__29271_SHARP_,key),p2__29271_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29272){
var map__29275 = p__29272;
var map__29275__$1 = ((((!((map__29275 == null)))?((((map__29275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29275):map__29275);
var f_data = map__29275__$1;
var file = cljs.core.get.call(null,map__29275__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29277,files_msg){
var map__29284 = p__29277;
var map__29284__$1 = ((((!((map__29284 == null)))?((((map__29284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29284):map__29284);
var opts = map__29284__$1;
var on_cssload = cljs.core.get.call(null,map__29284__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29286_29290 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29287_29291 = null;
var count__29288_29292 = (0);
var i__29289_29293 = (0);
while(true){
if((i__29289_29293 < count__29288_29292)){
var f_29294 = cljs.core._nth.call(null,chunk__29287_29291,i__29289_29293);
figwheel.client.file_reloading.reload_css_file.call(null,f_29294);

var G__29295 = seq__29286_29290;
var G__29296 = chunk__29287_29291;
var G__29297 = count__29288_29292;
var G__29298 = (i__29289_29293 + (1));
seq__29286_29290 = G__29295;
chunk__29287_29291 = G__29296;
count__29288_29292 = G__29297;
i__29289_29293 = G__29298;
continue;
} else {
var temp__4425__auto___29299 = cljs.core.seq.call(null,seq__29286_29290);
if(temp__4425__auto___29299){
var seq__29286_29300__$1 = temp__4425__auto___29299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29286_29300__$1)){
var c__17140__auto___29301 = cljs.core.chunk_first.call(null,seq__29286_29300__$1);
var G__29302 = cljs.core.chunk_rest.call(null,seq__29286_29300__$1);
var G__29303 = c__17140__auto___29301;
var G__29304 = cljs.core.count.call(null,c__17140__auto___29301);
var G__29305 = (0);
seq__29286_29290 = G__29302;
chunk__29287_29291 = G__29303;
count__29288_29292 = G__29304;
i__29289_29293 = G__29305;
continue;
} else {
var f_29306 = cljs.core.first.call(null,seq__29286_29300__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29306);

var G__29307 = cljs.core.next.call(null,seq__29286_29300__$1);
var G__29308 = null;
var G__29309 = (0);
var G__29310 = (0);
seq__29286_29290 = G__29307;
chunk__29287_29291 = G__29308;
count__29288_29292 = G__29309;
i__29289_29293 = G__29310;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29284,map__29284__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29284,map__29284__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1442099118437