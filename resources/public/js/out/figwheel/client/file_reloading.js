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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28494_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28494_SHARP_));
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
var seq__28499 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28500 = null;
var count__28501 = (0);
var i__28502 = (0);
while(true){
if((i__28502 < count__28501)){
var n = cljs.core._nth.call(null,chunk__28500,i__28502);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28503 = seq__28499;
var G__28504 = chunk__28500;
var G__28505 = count__28501;
var G__28506 = (i__28502 + (1));
seq__28499 = G__28503;
chunk__28500 = G__28504;
count__28501 = G__28505;
i__28502 = G__28506;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28499);
if(temp__4425__auto__){
var seq__28499__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28499__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28499__$1);
var G__28507 = cljs.core.chunk_rest.call(null,seq__28499__$1);
var G__28508 = c__17140__auto__;
var G__28509 = cljs.core.count.call(null,c__17140__auto__);
var G__28510 = (0);
seq__28499 = G__28507;
chunk__28500 = G__28508;
count__28501 = G__28509;
i__28502 = G__28510;
continue;
} else {
var n = cljs.core.first.call(null,seq__28499__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28511 = cljs.core.next.call(null,seq__28499__$1);
var G__28512 = null;
var G__28513 = (0);
var G__28514 = (0);
seq__28499 = G__28511;
chunk__28500 = G__28512;
count__28501 = G__28513;
i__28502 = G__28514;
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

var seq__28553_28560 = cljs.core.seq.call(null,deps);
var chunk__28554_28561 = null;
var count__28555_28562 = (0);
var i__28556_28563 = (0);
while(true){
if((i__28556_28563 < count__28555_28562)){
var dep_28564 = cljs.core._nth.call(null,chunk__28554_28561,i__28556_28563);
topo_sort_helper_STAR_.call(null,dep_28564,(depth + (1)),state);

var G__28565 = seq__28553_28560;
var G__28566 = chunk__28554_28561;
var G__28567 = count__28555_28562;
var G__28568 = (i__28556_28563 + (1));
seq__28553_28560 = G__28565;
chunk__28554_28561 = G__28566;
count__28555_28562 = G__28567;
i__28556_28563 = G__28568;
continue;
} else {
var temp__4425__auto___28569 = cljs.core.seq.call(null,seq__28553_28560);
if(temp__4425__auto___28569){
var seq__28553_28570__$1 = temp__4425__auto___28569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28553_28570__$1)){
var c__17140__auto___28571 = cljs.core.chunk_first.call(null,seq__28553_28570__$1);
var G__28572 = cljs.core.chunk_rest.call(null,seq__28553_28570__$1);
var G__28573 = c__17140__auto___28571;
var G__28574 = cljs.core.count.call(null,c__17140__auto___28571);
var G__28575 = (0);
seq__28553_28560 = G__28572;
chunk__28554_28561 = G__28573;
count__28555_28562 = G__28574;
i__28556_28563 = G__28575;
continue;
} else {
var dep_28576 = cljs.core.first.call(null,seq__28553_28570__$1);
topo_sort_helper_STAR_.call(null,dep_28576,(depth + (1)),state);

var G__28577 = cljs.core.next.call(null,seq__28553_28570__$1);
var G__28578 = null;
var G__28579 = (0);
var G__28580 = (0);
seq__28553_28560 = G__28577;
chunk__28554_28561 = G__28578;
count__28555_28562 = G__28579;
i__28556_28563 = G__28580;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28557){
var vec__28559 = p__28557;
var x = cljs.core.nth.call(null,vec__28559,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28559,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28559,x,xs,get_deps__$1){
return (function (p1__28515_SHARP_){
return clojure.set.difference.call(null,p1__28515_SHARP_,x);
});})(vec__28559,x,xs,get_deps__$1))
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
var seq__28593 = cljs.core.seq.call(null,provides);
var chunk__28594 = null;
var count__28595 = (0);
var i__28596 = (0);
while(true){
if((i__28596 < count__28595)){
var prov = cljs.core._nth.call(null,chunk__28594,i__28596);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28597_28605 = cljs.core.seq.call(null,requires);
var chunk__28598_28606 = null;
var count__28599_28607 = (0);
var i__28600_28608 = (0);
while(true){
if((i__28600_28608 < count__28599_28607)){
var req_28609 = cljs.core._nth.call(null,chunk__28598_28606,i__28600_28608);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28609,prov);

var G__28610 = seq__28597_28605;
var G__28611 = chunk__28598_28606;
var G__28612 = count__28599_28607;
var G__28613 = (i__28600_28608 + (1));
seq__28597_28605 = G__28610;
chunk__28598_28606 = G__28611;
count__28599_28607 = G__28612;
i__28600_28608 = G__28613;
continue;
} else {
var temp__4425__auto___28614 = cljs.core.seq.call(null,seq__28597_28605);
if(temp__4425__auto___28614){
var seq__28597_28615__$1 = temp__4425__auto___28614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28597_28615__$1)){
var c__17140__auto___28616 = cljs.core.chunk_first.call(null,seq__28597_28615__$1);
var G__28617 = cljs.core.chunk_rest.call(null,seq__28597_28615__$1);
var G__28618 = c__17140__auto___28616;
var G__28619 = cljs.core.count.call(null,c__17140__auto___28616);
var G__28620 = (0);
seq__28597_28605 = G__28617;
chunk__28598_28606 = G__28618;
count__28599_28607 = G__28619;
i__28600_28608 = G__28620;
continue;
} else {
var req_28621 = cljs.core.first.call(null,seq__28597_28615__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28621,prov);

var G__28622 = cljs.core.next.call(null,seq__28597_28615__$1);
var G__28623 = null;
var G__28624 = (0);
var G__28625 = (0);
seq__28597_28605 = G__28622;
chunk__28598_28606 = G__28623;
count__28599_28607 = G__28624;
i__28600_28608 = G__28625;
continue;
}
} else {
}
}
break;
}

var G__28626 = seq__28593;
var G__28627 = chunk__28594;
var G__28628 = count__28595;
var G__28629 = (i__28596 + (1));
seq__28593 = G__28626;
chunk__28594 = G__28627;
count__28595 = G__28628;
i__28596 = G__28629;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28593);
if(temp__4425__auto__){
var seq__28593__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28593__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28593__$1);
var G__28630 = cljs.core.chunk_rest.call(null,seq__28593__$1);
var G__28631 = c__17140__auto__;
var G__28632 = cljs.core.count.call(null,c__17140__auto__);
var G__28633 = (0);
seq__28593 = G__28630;
chunk__28594 = G__28631;
count__28595 = G__28632;
i__28596 = G__28633;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28593__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28601_28634 = cljs.core.seq.call(null,requires);
var chunk__28602_28635 = null;
var count__28603_28636 = (0);
var i__28604_28637 = (0);
while(true){
if((i__28604_28637 < count__28603_28636)){
var req_28638 = cljs.core._nth.call(null,chunk__28602_28635,i__28604_28637);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28638,prov);

var G__28639 = seq__28601_28634;
var G__28640 = chunk__28602_28635;
var G__28641 = count__28603_28636;
var G__28642 = (i__28604_28637 + (1));
seq__28601_28634 = G__28639;
chunk__28602_28635 = G__28640;
count__28603_28636 = G__28641;
i__28604_28637 = G__28642;
continue;
} else {
var temp__4425__auto___28643__$1 = cljs.core.seq.call(null,seq__28601_28634);
if(temp__4425__auto___28643__$1){
var seq__28601_28644__$1 = temp__4425__auto___28643__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28601_28644__$1)){
var c__17140__auto___28645 = cljs.core.chunk_first.call(null,seq__28601_28644__$1);
var G__28646 = cljs.core.chunk_rest.call(null,seq__28601_28644__$1);
var G__28647 = c__17140__auto___28645;
var G__28648 = cljs.core.count.call(null,c__17140__auto___28645);
var G__28649 = (0);
seq__28601_28634 = G__28646;
chunk__28602_28635 = G__28647;
count__28603_28636 = G__28648;
i__28604_28637 = G__28649;
continue;
} else {
var req_28650 = cljs.core.first.call(null,seq__28601_28644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28650,prov);

var G__28651 = cljs.core.next.call(null,seq__28601_28644__$1);
var G__28652 = null;
var G__28653 = (0);
var G__28654 = (0);
seq__28601_28634 = G__28651;
chunk__28602_28635 = G__28652;
count__28603_28636 = G__28653;
i__28604_28637 = G__28654;
continue;
}
} else {
}
}
break;
}

var G__28655 = cljs.core.next.call(null,seq__28593__$1);
var G__28656 = null;
var G__28657 = (0);
var G__28658 = (0);
seq__28593 = G__28655;
chunk__28594 = G__28656;
count__28595 = G__28657;
i__28596 = G__28658;
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
var seq__28663_28667 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28664_28668 = null;
var count__28665_28669 = (0);
var i__28666_28670 = (0);
while(true){
if((i__28666_28670 < count__28665_28669)){
var ns_28671 = cljs.core._nth.call(null,chunk__28664_28668,i__28666_28670);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28671);

var G__28672 = seq__28663_28667;
var G__28673 = chunk__28664_28668;
var G__28674 = count__28665_28669;
var G__28675 = (i__28666_28670 + (1));
seq__28663_28667 = G__28672;
chunk__28664_28668 = G__28673;
count__28665_28669 = G__28674;
i__28666_28670 = G__28675;
continue;
} else {
var temp__4425__auto___28676 = cljs.core.seq.call(null,seq__28663_28667);
if(temp__4425__auto___28676){
var seq__28663_28677__$1 = temp__4425__auto___28676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28663_28677__$1)){
var c__17140__auto___28678 = cljs.core.chunk_first.call(null,seq__28663_28677__$1);
var G__28679 = cljs.core.chunk_rest.call(null,seq__28663_28677__$1);
var G__28680 = c__17140__auto___28678;
var G__28681 = cljs.core.count.call(null,c__17140__auto___28678);
var G__28682 = (0);
seq__28663_28667 = G__28679;
chunk__28664_28668 = G__28680;
count__28665_28669 = G__28681;
i__28666_28670 = G__28682;
continue;
} else {
var ns_28683 = cljs.core.first.call(null,seq__28663_28677__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28683);

var G__28684 = cljs.core.next.call(null,seq__28663_28677__$1);
var G__28685 = null;
var G__28686 = (0);
var G__28687 = (0);
seq__28663_28667 = G__28684;
chunk__28664_28668 = G__28685;
count__28665_28669 = G__28686;
i__28666_28670 = G__28687;
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
var G__28688__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28689__i = 0, G__28689__a = new Array(arguments.length -  0);
while (G__28689__i < G__28689__a.length) {G__28689__a[G__28689__i] = arguments[G__28689__i + 0]; ++G__28689__i;}
  args = new cljs.core.IndexedSeq(G__28689__a,0);
} 
return G__28688__delegate.call(this,args);};
G__28688.cljs$lang$maxFixedArity = 0;
G__28688.cljs$lang$applyTo = (function (arglist__28690){
var args = cljs.core.seq(arglist__28690);
return G__28688__delegate(args);
});
G__28688.cljs$core$IFn$_invoke$arity$variadic = G__28688__delegate;
return G__28688;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28691 = cljs.core._EQ_;
var expr__28692 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28691.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28692))){
return ((function (pred__28691,expr__28692){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28694){if((e28694 instanceof Error)){
var e = e28694;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28694;

}
}})());
});
;})(pred__28691,expr__28692))
} else {
if(cljs.core.truth_(pred__28691.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28692))){
return ((function (pred__28691,expr__28692){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28691,expr__28692){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28691,expr__28692))
);

return deferred.addErrback(((function (deferred,pred__28691,expr__28692){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28691,expr__28692))
);
});
;})(pred__28691,expr__28692))
} else {
return ((function (pred__28691,expr__28692){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28691,expr__28692))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28695,callback){
var map__28698 = p__28695;
var map__28698__$1 = ((((!((map__28698 == null)))?((((map__28698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28698):map__28698);
var file_msg = map__28698__$1;
var request_url = cljs.core.get.call(null,map__28698__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28698,map__28698__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28698,map__28698__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__){
return (function (state_28722){
var state_val_28723 = (state_28722[(1)]);
if((state_val_28723 === (7))){
var inst_28718 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28724_28744 = state_28722__$1;
(statearr_28724_28744[(2)] = inst_28718);

(statearr_28724_28744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (1))){
var state_28722__$1 = state_28722;
var statearr_28725_28745 = state_28722__$1;
(statearr_28725_28745[(2)] = null);

(statearr_28725_28745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (4))){
var inst_28702 = (state_28722[(7)]);
var inst_28702__$1 = (state_28722[(2)]);
var state_28722__$1 = (function (){var statearr_28726 = state_28722;
(statearr_28726[(7)] = inst_28702__$1);

return statearr_28726;
})();
if(cljs.core.truth_(inst_28702__$1)){
var statearr_28727_28746 = state_28722__$1;
(statearr_28727_28746[(1)] = (5));

} else {
var statearr_28728_28747 = state_28722__$1;
(statearr_28728_28747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (6))){
var state_28722__$1 = state_28722;
var statearr_28729_28748 = state_28722__$1;
(statearr_28729_28748[(2)] = null);

(statearr_28729_28748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (3))){
var inst_28720 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28722__$1,inst_28720);
} else {
if((state_val_28723 === (2))){
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28722__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28723 === (11))){
var inst_28714 = (state_28722[(2)]);
var state_28722__$1 = (function (){var statearr_28730 = state_28722;
(statearr_28730[(8)] = inst_28714);

return statearr_28730;
})();
var statearr_28731_28749 = state_28722__$1;
(statearr_28731_28749[(2)] = null);

(statearr_28731_28749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (9))){
var inst_28706 = (state_28722[(9)]);
var inst_28708 = (state_28722[(10)]);
var inst_28710 = inst_28708.call(null,inst_28706);
var state_28722__$1 = state_28722;
var statearr_28732_28750 = state_28722__$1;
(statearr_28732_28750[(2)] = inst_28710);

(statearr_28732_28750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (5))){
var inst_28702 = (state_28722[(7)]);
var inst_28704 = figwheel.client.file_reloading.blocking_load.call(null,inst_28702);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28722__$1,(8),inst_28704);
} else {
if((state_val_28723 === (10))){
var inst_28706 = (state_28722[(9)]);
var inst_28712 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28706);
var state_28722__$1 = state_28722;
var statearr_28733_28751 = state_28722__$1;
(statearr_28733_28751[(2)] = inst_28712);

(statearr_28733_28751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (8))){
var inst_28702 = (state_28722[(7)]);
var inst_28708 = (state_28722[(10)]);
var inst_28706 = (state_28722[(2)]);
var inst_28707 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28708__$1 = cljs.core.get.call(null,inst_28707,inst_28702);
var state_28722__$1 = (function (){var statearr_28734 = state_28722;
(statearr_28734[(9)] = inst_28706);

(statearr_28734[(10)] = inst_28708__$1);

return statearr_28734;
})();
if(cljs.core.truth_(inst_28708__$1)){
var statearr_28735_28752 = state_28722__$1;
(statearr_28735_28752[(1)] = (9));

} else {
var statearr_28736_28753 = state_28722__$1;
(statearr_28736_28753[(1)] = (10));

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
});})(c__19710__auto__))
;
return ((function (switch__19645__auto__,c__19710__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19646__auto__ = null;
var figwheel$client$file_reloading$state_machine__19646__auto____0 = (function (){
var statearr_28740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28740[(0)] = figwheel$client$file_reloading$state_machine__19646__auto__);

(statearr_28740[(1)] = (1));

return statearr_28740;
});
var figwheel$client$file_reloading$state_machine__19646__auto____1 = (function (state_28722){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_28722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e28741){if((e28741 instanceof Object)){
var ex__19649__auto__ = e28741;
var statearr_28742_28754 = state_28722;
(statearr_28742_28754[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28755 = state_28722;
state_28722 = G__28755;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19646__auto__ = function(state_28722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19646__auto____1.call(this,state_28722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19646__auto____0;
figwheel$client$file_reloading$state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19646__auto____1;
return figwheel$client$file_reloading$state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__))
})();
var state__19712__auto__ = (function (){var statearr_28743 = f__19711__auto__.call(null);
(statearr_28743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_28743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__))
);

return c__19710__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28756,callback){
var map__28759 = p__28756;
var map__28759__$1 = ((((!((map__28759 == null)))?((((map__28759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28759):map__28759);
var file_msg = map__28759__$1;
var namespace = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28759,map__28759__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28759,map__28759__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28761){
var map__28764 = p__28761;
var map__28764__$1 = ((((!((map__28764 == null)))?((((map__28764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28764):map__28764);
var file_msg = map__28764__$1;
var namespace = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28766,callback){
var map__28769 = p__28766;
var map__28769__$1 = ((((!((map__28769 == null)))?((((map__28769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28769):map__28769);
var file_msg = map__28769__$1;
var request_url = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19710__auto___28857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto___28857,out){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto___28857,out){
return (function (state_28839){
var state_val_28840 = (state_28839[(1)]);
if((state_val_28840 === (1))){
var inst_28817 = cljs.core.nth.call(null,files,(0),null);
var inst_28818 = cljs.core.nthnext.call(null,files,(1));
var inst_28819 = files;
var state_28839__$1 = (function (){var statearr_28841 = state_28839;
(statearr_28841[(7)] = inst_28818);

(statearr_28841[(8)] = inst_28817);

(statearr_28841[(9)] = inst_28819);

return statearr_28841;
})();
var statearr_28842_28858 = state_28839__$1;
(statearr_28842_28858[(2)] = null);

(statearr_28842_28858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (2))){
var inst_28822 = (state_28839[(10)]);
var inst_28819 = (state_28839[(9)]);
var inst_28822__$1 = cljs.core.nth.call(null,inst_28819,(0),null);
var inst_28823 = cljs.core.nthnext.call(null,inst_28819,(1));
var inst_28824 = (inst_28822__$1 == null);
var inst_28825 = cljs.core.not.call(null,inst_28824);
var state_28839__$1 = (function (){var statearr_28843 = state_28839;
(statearr_28843[(10)] = inst_28822__$1);

(statearr_28843[(11)] = inst_28823);

return statearr_28843;
})();
if(inst_28825){
var statearr_28844_28859 = state_28839__$1;
(statearr_28844_28859[(1)] = (4));

} else {
var statearr_28845_28860 = state_28839__$1;
(statearr_28845_28860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (3))){
var inst_28837 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28839__$1,inst_28837);
} else {
if((state_val_28840 === (4))){
var inst_28822 = (state_28839[(10)]);
var inst_28827 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28822);
var state_28839__$1 = state_28839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28839__$1,(7),inst_28827);
} else {
if((state_val_28840 === (5))){
var inst_28833 = cljs.core.async.close_BANG_.call(null,out);
var state_28839__$1 = state_28839;
var statearr_28846_28861 = state_28839__$1;
(statearr_28846_28861[(2)] = inst_28833);

(statearr_28846_28861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (6))){
var inst_28835 = (state_28839[(2)]);
var state_28839__$1 = state_28839;
var statearr_28847_28862 = state_28839__$1;
(statearr_28847_28862[(2)] = inst_28835);

(statearr_28847_28862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28840 === (7))){
var inst_28823 = (state_28839[(11)]);
var inst_28829 = (state_28839[(2)]);
var inst_28830 = cljs.core.async.put_BANG_.call(null,out,inst_28829);
var inst_28819 = inst_28823;
var state_28839__$1 = (function (){var statearr_28848 = state_28839;
(statearr_28848[(9)] = inst_28819);

(statearr_28848[(12)] = inst_28830);

return statearr_28848;
})();
var statearr_28849_28863 = state_28839__$1;
(statearr_28849_28863[(2)] = null);

(statearr_28849_28863[(1)] = (2));


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
});})(c__19710__auto___28857,out))
;
return ((function (switch__19645__auto__,c__19710__auto___28857,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto____0 = (function (){
var statearr_28853 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28853[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto__);

(statearr_28853[(1)] = (1));

return statearr_28853;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto____1 = (function (state_28839){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_28839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e28854){if((e28854 instanceof Object)){
var ex__19649__auto__ = e28854;
var statearr_28855_28864 = state_28839;
(statearr_28855_28864[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28865 = state_28839;
state_28839 = G__28865;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto__ = function(state_28839){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto____1.call(this,state_28839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto___28857,out))
})();
var state__19712__auto__ = (function (){var statearr_28856 = f__19711__auto__.call(null);
(statearr_28856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto___28857);

return statearr_28856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto___28857,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28866,opts){
var map__28870 = p__28866;
var map__28870__$1 = ((((!((map__28870 == null)))?((((map__28870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28870):map__28870);
var eval_body__$1 = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28872){var e = e28872;
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
return (function (p1__28873_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28873_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28878){
var vec__28879 = p__28878;
var k = cljs.core.nth.call(null,vec__28879,(0),null);
var v = cljs.core.nth.call(null,vec__28879,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28880){
var vec__28881 = p__28880;
var k = cljs.core.nth.call(null,vec__28881,(0),null);
var v = cljs.core.nth.call(null,vec__28881,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28885,p__28886){
var map__29133 = p__28885;
var map__29133__$1 = ((((!((map__29133 == null)))?((((map__29133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29133):map__29133);
var opts = map__29133__$1;
var before_jsload = cljs.core.get.call(null,map__29133__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29133__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29133__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29134 = p__28886;
var map__29134__$1 = ((((!((map__29134 == null)))?((((map__29134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29134):map__29134);
var msg = map__29134__$1;
var files = cljs.core.get.call(null,map__29134__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29134__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29134__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29287){
var state_val_29288 = (state_29287[(1)]);
if((state_val_29288 === (7))){
var inst_29148 = (state_29287[(7)]);
var inst_29151 = (state_29287[(8)]);
var inst_29149 = (state_29287[(9)]);
var inst_29150 = (state_29287[(10)]);
var inst_29156 = cljs.core._nth.call(null,inst_29149,inst_29151);
var inst_29157 = figwheel.client.file_reloading.eval_body.call(null,inst_29156,opts);
var inst_29158 = (inst_29151 + (1));
var tmp29289 = inst_29148;
var tmp29290 = inst_29149;
var tmp29291 = inst_29150;
var inst_29148__$1 = tmp29289;
var inst_29149__$1 = tmp29290;
var inst_29150__$1 = tmp29291;
var inst_29151__$1 = inst_29158;
var state_29287__$1 = (function (){var statearr_29292 = state_29287;
(statearr_29292[(7)] = inst_29148__$1);

(statearr_29292[(11)] = inst_29157);

(statearr_29292[(8)] = inst_29151__$1);

(statearr_29292[(9)] = inst_29149__$1);

(statearr_29292[(10)] = inst_29150__$1);

return statearr_29292;
})();
var statearr_29293_29379 = state_29287__$1;
(statearr_29293_29379[(2)] = null);

(statearr_29293_29379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (20))){
var inst_29191 = (state_29287[(12)]);
var inst_29199 = figwheel.client.file_reloading.sort_files.call(null,inst_29191);
var state_29287__$1 = state_29287;
var statearr_29294_29380 = state_29287__$1;
(statearr_29294_29380[(2)] = inst_29199);

(statearr_29294_29380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (27))){
var state_29287__$1 = state_29287;
var statearr_29295_29381 = state_29287__$1;
(statearr_29295_29381[(2)] = null);

(statearr_29295_29381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (1))){
var inst_29140 = (state_29287[(13)]);
var inst_29137 = before_jsload.call(null,files);
var inst_29138 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29139 = (function (){return ((function (inst_29140,inst_29137,inst_29138,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28882_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28882_SHARP_);
});
;})(inst_29140,inst_29137,inst_29138,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29140__$1 = cljs.core.filter.call(null,inst_29139,files);
var inst_29141 = cljs.core.not_empty.call(null,inst_29140__$1);
var state_29287__$1 = (function (){var statearr_29296 = state_29287;
(statearr_29296[(13)] = inst_29140__$1);

(statearr_29296[(14)] = inst_29138);

(statearr_29296[(15)] = inst_29137);

return statearr_29296;
})();
if(cljs.core.truth_(inst_29141)){
var statearr_29297_29382 = state_29287__$1;
(statearr_29297_29382[(1)] = (2));

} else {
var statearr_29298_29383 = state_29287__$1;
(statearr_29298_29383[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (24))){
var state_29287__$1 = state_29287;
var statearr_29299_29384 = state_29287__$1;
(statearr_29299_29384[(2)] = null);

(statearr_29299_29384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (39))){
var inst_29241 = (state_29287[(16)]);
var state_29287__$1 = state_29287;
var statearr_29300_29385 = state_29287__$1;
(statearr_29300_29385[(2)] = inst_29241);

(statearr_29300_29385[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (46))){
var inst_29282 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
var statearr_29301_29386 = state_29287__$1;
(statearr_29301_29386[(2)] = inst_29282);

(statearr_29301_29386[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (4))){
var inst_29185 = (state_29287[(2)]);
var inst_29186 = cljs.core.List.EMPTY;
var inst_29187 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29186);
var inst_29188 = (function (){return ((function (inst_29185,inst_29186,inst_29187,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28883_SHARP_){
var and__16325__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28883_SHARP_);
if(cljs.core.truth_(and__16325__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28883_SHARP_));
} else {
return and__16325__auto__;
}
});
;})(inst_29185,inst_29186,inst_29187,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29189 = cljs.core.filter.call(null,inst_29188,files);
var inst_29190 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29191 = cljs.core.concat.call(null,inst_29189,inst_29190);
var state_29287__$1 = (function (){var statearr_29302 = state_29287;
(statearr_29302[(17)] = inst_29187);

(statearr_29302[(12)] = inst_29191);

(statearr_29302[(18)] = inst_29185);

return statearr_29302;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29303_29387 = state_29287__$1;
(statearr_29303_29387[(1)] = (16));

} else {
var statearr_29304_29388 = state_29287__$1;
(statearr_29304_29388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (15))){
var inst_29175 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
var statearr_29305_29389 = state_29287__$1;
(statearr_29305_29389[(2)] = inst_29175);

(statearr_29305_29389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (21))){
var inst_29201 = (state_29287[(19)]);
var inst_29201__$1 = (state_29287[(2)]);
var inst_29202 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29201__$1);
var state_29287__$1 = (function (){var statearr_29306 = state_29287;
(statearr_29306[(19)] = inst_29201__$1);

return statearr_29306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29287__$1,(22),inst_29202);
} else {
if((state_val_29288 === (31))){
var inst_29285 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29287__$1,inst_29285);
} else {
if((state_val_29288 === (32))){
var inst_29241 = (state_29287[(16)]);
var inst_29246 = inst_29241.cljs$lang$protocol_mask$partition0$;
var inst_29247 = (inst_29246 & (64));
var inst_29248 = inst_29241.cljs$core$ISeq$;
var inst_29249 = (inst_29247) || (inst_29248);
var state_29287__$1 = state_29287;
if(cljs.core.truth_(inst_29249)){
var statearr_29307_29390 = state_29287__$1;
(statearr_29307_29390[(1)] = (35));

} else {
var statearr_29308_29391 = state_29287__$1;
(statearr_29308_29391[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (40))){
var inst_29262 = (state_29287[(20)]);
var inst_29261 = (state_29287[(2)]);
var inst_29262__$1 = cljs.core.get.call(null,inst_29261,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29263 = cljs.core.get.call(null,inst_29261,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29264 = cljs.core.not_empty.call(null,inst_29262__$1);
var state_29287__$1 = (function (){var statearr_29309 = state_29287;
(statearr_29309[(20)] = inst_29262__$1);

(statearr_29309[(21)] = inst_29263);

return statearr_29309;
})();
if(cljs.core.truth_(inst_29264)){
var statearr_29310_29392 = state_29287__$1;
(statearr_29310_29392[(1)] = (41));

} else {
var statearr_29311_29393 = state_29287__$1;
(statearr_29311_29393[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (33))){
var state_29287__$1 = state_29287;
var statearr_29312_29394 = state_29287__$1;
(statearr_29312_29394[(2)] = false);

(statearr_29312_29394[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (13))){
var inst_29161 = (state_29287[(22)]);
var inst_29165 = cljs.core.chunk_first.call(null,inst_29161);
var inst_29166 = cljs.core.chunk_rest.call(null,inst_29161);
var inst_29167 = cljs.core.count.call(null,inst_29165);
var inst_29148 = inst_29166;
var inst_29149 = inst_29165;
var inst_29150 = inst_29167;
var inst_29151 = (0);
var state_29287__$1 = (function (){var statearr_29313 = state_29287;
(statearr_29313[(7)] = inst_29148);

(statearr_29313[(8)] = inst_29151);

(statearr_29313[(9)] = inst_29149);

(statearr_29313[(10)] = inst_29150);

return statearr_29313;
})();
var statearr_29314_29395 = state_29287__$1;
(statearr_29314_29395[(2)] = null);

(statearr_29314_29395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (22))){
var inst_29201 = (state_29287[(19)]);
var inst_29205 = (state_29287[(23)]);
var inst_29204 = (state_29287[(24)]);
var inst_29209 = (state_29287[(25)]);
var inst_29204__$1 = (state_29287[(2)]);
var inst_29205__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29204__$1);
var inst_29206 = (function (){var all_files = inst_29201;
var res_SINGLEQUOTE_ = inst_29204__$1;
var res = inst_29205__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29201,inst_29205,inst_29204,inst_29209,inst_29204__$1,inst_29205__$1,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28884_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28884_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29201,inst_29205,inst_29204,inst_29209,inst_29204__$1,inst_29205__$1,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29207 = cljs.core.filter.call(null,inst_29206,inst_29204__$1);
var inst_29208 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29209__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29208);
var inst_29210 = cljs.core.not_empty.call(null,inst_29209__$1);
var state_29287__$1 = (function (){var statearr_29315 = state_29287;
(statearr_29315[(26)] = inst_29207);

(statearr_29315[(23)] = inst_29205__$1);

(statearr_29315[(24)] = inst_29204__$1);

(statearr_29315[(25)] = inst_29209__$1);

return statearr_29315;
})();
if(cljs.core.truth_(inst_29210)){
var statearr_29316_29396 = state_29287__$1;
(statearr_29316_29396[(1)] = (23));

} else {
var statearr_29317_29397 = state_29287__$1;
(statearr_29317_29397[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (36))){
var state_29287__$1 = state_29287;
var statearr_29318_29398 = state_29287__$1;
(statearr_29318_29398[(2)] = false);

(statearr_29318_29398[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (41))){
var inst_29262 = (state_29287[(20)]);
var inst_29266 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29267 = cljs.core.map.call(null,inst_29266,inst_29262);
var inst_29268 = cljs.core.pr_str.call(null,inst_29267);
var inst_29269 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29268)].join('');
var inst_29270 = figwheel.client.utils.log.call(null,inst_29269);
var state_29287__$1 = state_29287;
var statearr_29319_29399 = state_29287__$1;
(statearr_29319_29399[(2)] = inst_29270);

(statearr_29319_29399[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (43))){
var inst_29263 = (state_29287[(21)]);
var inst_29273 = (state_29287[(2)]);
var inst_29274 = cljs.core.not_empty.call(null,inst_29263);
var state_29287__$1 = (function (){var statearr_29320 = state_29287;
(statearr_29320[(27)] = inst_29273);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29274)){
var statearr_29321_29400 = state_29287__$1;
(statearr_29321_29400[(1)] = (44));

} else {
var statearr_29322_29401 = state_29287__$1;
(statearr_29322_29401[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (29))){
var inst_29201 = (state_29287[(19)]);
var inst_29207 = (state_29287[(26)]);
var inst_29205 = (state_29287[(23)]);
var inst_29204 = (state_29287[(24)]);
var inst_29241 = (state_29287[(16)]);
var inst_29209 = (state_29287[(25)]);
var inst_29237 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29240 = (function (){var all_files = inst_29201;
var res_SINGLEQUOTE_ = inst_29204;
var res = inst_29205;
var files_not_loaded = inst_29207;
var dependencies_that_loaded = inst_29209;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29241,inst_29209,inst_29237,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29239){
var map__29323 = p__29239;
var map__29323__$1 = ((((!((map__29323 == null)))?((((map__29323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29323):map__29323);
var namespace = cljs.core.get.call(null,map__29323__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29241,inst_29209,inst_29237,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29241__$1 = cljs.core.group_by.call(null,inst_29240,inst_29207);
var inst_29243 = (inst_29241__$1 == null);
var inst_29244 = cljs.core.not.call(null,inst_29243);
var state_29287__$1 = (function (){var statearr_29325 = state_29287;
(statearr_29325[(16)] = inst_29241__$1);

(statearr_29325[(28)] = inst_29237);

return statearr_29325;
})();
if(inst_29244){
var statearr_29326_29402 = state_29287__$1;
(statearr_29326_29402[(1)] = (32));

} else {
var statearr_29327_29403 = state_29287__$1;
(statearr_29327_29403[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (44))){
var inst_29263 = (state_29287[(21)]);
var inst_29276 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29263);
var inst_29277 = cljs.core.pr_str.call(null,inst_29276);
var inst_29278 = [cljs.core.str("not required: "),cljs.core.str(inst_29277)].join('');
var inst_29279 = figwheel.client.utils.log.call(null,inst_29278);
var state_29287__$1 = state_29287;
var statearr_29328_29404 = state_29287__$1;
(statearr_29328_29404[(2)] = inst_29279);

(statearr_29328_29404[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (6))){
var inst_29182 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
var statearr_29329_29405 = state_29287__$1;
(statearr_29329_29405[(2)] = inst_29182);

(statearr_29329_29405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (28))){
var inst_29207 = (state_29287[(26)]);
var inst_29234 = (state_29287[(2)]);
var inst_29235 = cljs.core.not_empty.call(null,inst_29207);
var state_29287__$1 = (function (){var statearr_29330 = state_29287;
(statearr_29330[(29)] = inst_29234);

return statearr_29330;
})();
if(cljs.core.truth_(inst_29235)){
var statearr_29331_29406 = state_29287__$1;
(statearr_29331_29406[(1)] = (29));

} else {
var statearr_29332_29407 = state_29287__$1;
(statearr_29332_29407[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (25))){
var inst_29205 = (state_29287[(23)]);
var inst_29221 = (state_29287[(2)]);
var inst_29222 = cljs.core.not_empty.call(null,inst_29205);
var state_29287__$1 = (function (){var statearr_29333 = state_29287;
(statearr_29333[(30)] = inst_29221);

return statearr_29333;
})();
if(cljs.core.truth_(inst_29222)){
var statearr_29334_29408 = state_29287__$1;
(statearr_29334_29408[(1)] = (26));

} else {
var statearr_29335_29409 = state_29287__$1;
(statearr_29335_29409[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (34))){
var inst_29256 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
if(cljs.core.truth_(inst_29256)){
var statearr_29336_29410 = state_29287__$1;
(statearr_29336_29410[(1)] = (38));

} else {
var statearr_29337_29411 = state_29287__$1;
(statearr_29337_29411[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (17))){
var state_29287__$1 = state_29287;
var statearr_29338_29412 = state_29287__$1;
(statearr_29338_29412[(2)] = recompile_dependents);

(statearr_29338_29412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (3))){
var state_29287__$1 = state_29287;
var statearr_29339_29413 = state_29287__$1;
(statearr_29339_29413[(2)] = null);

(statearr_29339_29413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (12))){
var inst_29178 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
var statearr_29340_29414 = state_29287__$1;
(statearr_29340_29414[(2)] = inst_29178);

(statearr_29340_29414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (2))){
var inst_29140 = (state_29287[(13)]);
var inst_29147 = cljs.core.seq.call(null,inst_29140);
var inst_29148 = inst_29147;
var inst_29149 = null;
var inst_29150 = (0);
var inst_29151 = (0);
var state_29287__$1 = (function (){var statearr_29341 = state_29287;
(statearr_29341[(7)] = inst_29148);

(statearr_29341[(8)] = inst_29151);

(statearr_29341[(9)] = inst_29149);

(statearr_29341[(10)] = inst_29150);

return statearr_29341;
})();
var statearr_29342_29415 = state_29287__$1;
(statearr_29342_29415[(2)] = null);

(statearr_29342_29415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (23))){
var inst_29201 = (state_29287[(19)]);
var inst_29207 = (state_29287[(26)]);
var inst_29205 = (state_29287[(23)]);
var inst_29204 = (state_29287[(24)]);
var inst_29209 = (state_29287[(25)]);
var inst_29212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29214 = (function (){var all_files = inst_29201;
var res_SINGLEQUOTE_ = inst_29204;
var res = inst_29205;
var files_not_loaded = inst_29207;
var dependencies_that_loaded = inst_29209;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29209,inst_29212,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29213){
var map__29343 = p__29213;
var map__29343__$1 = ((((!((map__29343 == null)))?((((map__29343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29343):map__29343);
var request_url = cljs.core.get.call(null,map__29343__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29209,inst_29212,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29215 = cljs.core.reverse.call(null,inst_29209);
var inst_29216 = cljs.core.map.call(null,inst_29214,inst_29215);
var inst_29217 = cljs.core.pr_str.call(null,inst_29216);
var inst_29218 = figwheel.client.utils.log.call(null,inst_29217);
var state_29287__$1 = (function (){var statearr_29345 = state_29287;
(statearr_29345[(31)] = inst_29212);

return statearr_29345;
})();
var statearr_29346_29416 = state_29287__$1;
(statearr_29346_29416[(2)] = inst_29218);

(statearr_29346_29416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (35))){
var state_29287__$1 = state_29287;
var statearr_29347_29417 = state_29287__$1;
(statearr_29347_29417[(2)] = true);

(statearr_29347_29417[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (19))){
var inst_29191 = (state_29287[(12)]);
var inst_29197 = figwheel.client.file_reloading.expand_files.call(null,inst_29191);
var state_29287__$1 = state_29287;
var statearr_29348_29418 = state_29287__$1;
(statearr_29348_29418[(2)] = inst_29197);

(statearr_29348_29418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (11))){
var state_29287__$1 = state_29287;
var statearr_29349_29419 = state_29287__$1;
(statearr_29349_29419[(2)] = null);

(statearr_29349_29419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (9))){
var inst_29180 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
var statearr_29350_29420 = state_29287__$1;
(statearr_29350_29420[(2)] = inst_29180);

(statearr_29350_29420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (5))){
var inst_29151 = (state_29287[(8)]);
var inst_29150 = (state_29287[(10)]);
var inst_29153 = (inst_29151 < inst_29150);
var inst_29154 = inst_29153;
var state_29287__$1 = state_29287;
if(cljs.core.truth_(inst_29154)){
var statearr_29351_29421 = state_29287__$1;
(statearr_29351_29421[(1)] = (7));

} else {
var statearr_29352_29422 = state_29287__$1;
(statearr_29352_29422[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (14))){
var inst_29161 = (state_29287[(22)]);
var inst_29170 = cljs.core.first.call(null,inst_29161);
var inst_29171 = figwheel.client.file_reloading.eval_body.call(null,inst_29170,opts);
var inst_29172 = cljs.core.next.call(null,inst_29161);
var inst_29148 = inst_29172;
var inst_29149 = null;
var inst_29150 = (0);
var inst_29151 = (0);
var state_29287__$1 = (function (){var statearr_29353 = state_29287;
(statearr_29353[(32)] = inst_29171);

(statearr_29353[(7)] = inst_29148);

(statearr_29353[(8)] = inst_29151);

(statearr_29353[(9)] = inst_29149);

(statearr_29353[(10)] = inst_29150);

return statearr_29353;
})();
var statearr_29354_29423 = state_29287__$1;
(statearr_29354_29423[(2)] = null);

(statearr_29354_29423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (45))){
var state_29287__$1 = state_29287;
var statearr_29355_29424 = state_29287__$1;
(statearr_29355_29424[(2)] = null);

(statearr_29355_29424[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (26))){
var inst_29201 = (state_29287[(19)]);
var inst_29207 = (state_29287[(26)]);
var inst_29205 = (state_29287[(23)]);
var inst_29204 = (state_29287[(24)]);
var inst_29209 = (state_29287[(25)]);
var inst_29224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29226 = (function (){var all_files = inst_29201;
var res_SINGLEQUOTE_ = inst_29204;
var res = inst_29205;
var files_not_loaded = inst_29207;
var dependencies_that_loaded = inst_29209;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29209,inst_29224,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29225){
var map__29356 = p__29225;
var map__29356__$1 = ((((!((map__29356 == null)))?((((map__29356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29356):map__29356);
var namespace = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29209,inst_29224,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29227 = cljs.core.map.call(null,inst_29226,inst_29205);
var inst_29228 = cljs.core.pr_str.call(null,inst_29227);
var inst_29229 = figwheel.client.utils.log.call(null,inst_29228);
var inst_29230 = (function (){var all_files = inst_29201;
var res_SINGLEQUOTE_ = inst_29204;
var res = inst_29205;
var files_not_loaded = inst_29207;
var dependencies_that_loaded = inst_29209;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29209,inst_29224,inst_29226,inst_29227,inst_29228,inst_29229,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29201,inst_29207,inst_29205,inst_29204,inst_29209,inst_29224,inst_29226,inst_29227,inst_29228,inst_29229,state_val_29288,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29231 = setTimeout(inst_29230,(10));
var state_29287__$1 = (function (){var statearr_29358 = state_29287;
(statearr_29358[(33)] = inst_29224);

(statearr_29358[(34)] = inst_29229);

return statearr_29358;
})();
var statearr_29359_29425 = state_29287__$1;
(statearr_29359_29425[(2)] = inst_29231);

(statearr_29359_29425[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (16))){
var state_29287__$1 = state_29287;
var statearr_29360_29426 = state_29287__$1;
(statearr_29360_29426[(2)] = reload_dependents);

(statearr_29360_29426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (38))){
var inst_29241 = (state_29287[(16)]);
var inst_29258 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29241);
var state_29287__$1 = state_29287;
var statearr_29361_29427 = state_29287__$1;
(statearr_29361_29427[(2)] = inst_29258);

(statearr_29361_29427[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (30))){
var state_29287__$1 = state_29287;
var statearr_29362_29428 = state_29287__$1;
(statearr_29362_29428[(2)] = null);

(statearr_29362_29428[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (10))){
var inst_29161 = (state_29287[(22)]);
var inst_29163 = cljs.core.chunked_seq_QMARK_.call(null,inst_29161);
var state_29287__$1 = state_29287;
if(inst_29163){
var statearr_29363_29429 = state_29287__$1;
(statearr_29363_29429[(1)] = (13));

} else {
var statearr_29364_29430 = state_29287__$1;
(statearr_29364_29430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (18))){
var inst_29195 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
if(cljs.core.truth_(inst_29195)){
var statearr_29365_29431 = state_29287__$1;
(statearr_29365_29431[(1)] = (19));

} else {
var statearr_29366_29432 = state_29287__$1;
(statearr_29366_29432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (42))){
var state_29287__$1 = state_29287;
var statearr_29367_29433 = state_29287__$1;
(statearr_29367_29433[(2)] = null);

(statearr_29367_29433[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (37))){
var inst_29253 = (state_29287[(2)]);
var state_29287__$1 = state_29287;
var statearr_29368_29434 = state_29287__$1;
(statearr_29368_29434[(2)] = inst_29253);

(statearr_29368_29434[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29288 === (8))){
var inst_29161 = (state_29287[(22)]);
var inst_29148 = (state_29287[(7)]);
var inst_29161__$1 = cljs.core.seq.call(null,inst_29148);
var state_29287__$1 = (function (){var statearr_29369 = state_29287;
(statearr_29369[(22)] = inst_29161__$1);

return statearr_29369;
})();
if(inst_29161__$1){
var statearr_29370_29435 = state_29287__$1;
(statearr_29370_29435[(1)] = (10));

} else {
var statearr_29371_29436 = state_29287__$1;
(statearr_29371_29436[(1)] = (11));

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
});})(c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19645__auto__,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto____0 = (function (){
var statearr_29375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29375[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto__);

(statearr_29375[(1)] = (1));

return statearr_29375;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto____1 = (function (state_29287){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_29287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e29376){if((e29376 instanceof Object)){
var ex__19649__auto__ = e29376;
var statearr_29377_29437 = state_29287;
(statearr_29377_29437[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29438 = state_29287;
state_29287 = G__29438;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto__ = function(state_29287){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto____1.call(this,state_29287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19712__auto__ = (function (){var statearr_29378 = f__19711__auto__.call(null);
(statearr_29378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_29378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__,map__29133,map__29133__$1,opts,before_jsload,on_jsload,reload_dependents,map__29134,map__29134__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19710__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29441,link){
var map__29444 = p__29441;
var map__29444__$1 = ((((!((map__29444 == null)))?((((map__29444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29444):map__29444);
var file = cljs.core.get.call(null,map__29444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29444,map__29444__$1,file){
return (function (p1__29439_SHARP_,p2__29440_SHARP_){
if(cljs.core._EQ_.call(null,p1__29439_SHARP_,p2__29440_SHARP_)){
return p1__29439_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29444,map__29444__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29450){
var map__29451 = p__29450;
var map__29451__$1 = ((((!((map__29451 == null)))?((((map__29451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29451):map__29451);
var match_length = cljs.core.get.call(null,map__29451__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29451__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29446_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29446_SHARP_);
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
var args29453 = [];
var len__17395__auto___29456 = arguments.length;
var i__17396__auto___29457 = (0);
while(true){
if((i__17396__auto___29457 < len__17395__auto___29456)){
args29453.push((arguments[i__17396__auto___29457]));

var G__29458 = (i__17396__auto___29457 + (1));
i__17396__auto___29457 = G__29458;
continue;
} else {
}
break;
}

var G__29455 = args29453.length;
switch (G__29455) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29453.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29460_SHARP_,p2__29461_SHARP_){
return cljs.core.assoc.call(null,p1__29460_SHARP_,cljs.core.get.call(null,p2__29461_SHARP_,key),p2__29461_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29462){
var map__29465 = p__29462;
var map__29465__$1 = ((((!((map__29465 == null)))?((((map__29465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29465):map__29465);
var f_data = map__29465__$1;
var file = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29467,files_msg){
var map__29474 = p__29467;
var map__29474__$1 = ((((!((map__29474 == null)))?((((map__29474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29474):map__29474);
var opts = map__29474__$1;
var on_cssload = cljs.core.get.call(null,map__29474__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29476_29480 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29477_29481 = null;
var count__29478_29482 = (0);
var i__29479_29483 = (0);
while(true){
if((i__29479_29483 < count__29478_29482)){
var f_29484 = cljs.core._nth.call(null,chunk__29477_29481,i__29479_29483);
figwheel.client.file_reloading.reload_css_file.call(null,f_29484);

var G__29485 = seq__29476_29480;
var G__29486 = chunk__29477_29481;
var G__29487 = count__29478_29482;
var G__29488 = (i__29479_29483 + (1));
seq__29476_29480 = G__29485;
chunk__29477_29481 = G__29486;
count__29478_29482 = G__29487;
i__29479_29483 = G__29488;
continue;
} else {
var temp__4425__auto___29489 = cljs.core.seq.call(null,seq__29476_29480);
if(temp__4425__auto___29489){
var seq__29476_29490__$1 = temp__4425__auto___29489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29476_29490__$1)){
var c__17140__auto___29491 = cljs.core.chunk_first.call(null,seq__29476_29490__$1);
var G__29492 = cljs.core.chunk_rest.call(null,seq__29476_29490__$1);
var G__29493 = c__17140__auto___29491;
var G__29494 = cljs.core.count.call(null,c__17140__auto___29491);
var G__29495 = (0);
seq__29476_29480 = G__29492;
chunk__29477_29481 = G__29493;
count__29478_29482 = G__29494;
i__29479_29483 = G__29495;
continue;
} else {
var f_29496 = cljs.core.first.call(null,seq__29476_29490__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29496);

var G__29497 = cljs.core.next.call(null,seq__29476_29490__$1);
var G__29498 = null;
var G__29499 = (0);
var G__29500 = (0);
seq__29476_29480 = G__29497;
chunk__29477_29481 = G__29498;
count__29478_29482 = G__29499;
i__29479_29483 = G__29500;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29474,map__29474__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29474,map__29474__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1442160861209