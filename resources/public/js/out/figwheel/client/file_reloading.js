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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28996_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28996_SHARP_));
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
var seq__29001 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29002 = null;
var count__29003 = (0);
var i__29004 = (0);
while(true){
if((i__29004 < count__29003)){
var n = cljs.core._nth.call(null,chunk__29002,i__29004);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29005 = seq__29001;
var G__29006 = chunk__29002;
var G__29007 = count__29003;
var G__29008 = (i__29004 + (1));
seq__29001 = G__29005;
chunk__29002 = G__29006;
count__29003 = G__29007;
i__29004 = G__29008;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29001);
if(temp__4425__auto__){
var seq__29001__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29001__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__29001__$1);
var G__29009 = cljs.core.chunk_rest.call(null,seq__29001__$1);
var G__29010 = c__17140__auto__;
var G__29011 = cljs.core.count.call(null,c__17140__auto__);
var G__29012 = (0);
seq__29001 = G__29009;
chunk__29002 = G__29010;
count__29003 = G__29011;
i__29004 = G__29012;
continue;
} else {
var n = cljs.core.first.call(null,seq__29001__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29013 = cljs.core.next.call(null,seq__29001__$1);
var G__29014 = null;
var G__29015 = (0);
var G__29016 = (0);
seq__29001 = G__29013;
chunk__29002 = G__29014;
count__29003 = G__29015;
i__29004 = G__29016;
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

var seq__29055_29062 = cljs.core.seq.call(null,deps);
var chunk__29056_29063 = null;
var count__29057_29064 = (0);
var i__29058_29065 = (0);
while(true){
if((i__29058_29065 < count__29057_29064)){
var dep_29066 = cljs.core._nth.call(null,chunk__29056_29063,i__29058_29065);
topo_sort_helper_STAR_.call(null,dep_29066,(depth + (1)),state);

var G__29067 = seq__29055_29062;
var G__29068 = chunk__29056_29063;
var G__29069 = count__29057_29064;
var G__29070 = (i__29058_29065 + (1));
seq__29055_29062 = G__29067;
chunk__29056_29063 = G__29068;
count__29057_29064 = G__29069;
i__29058_29065 = G__29070;
continue;
} else {
var temp__4425__auto___29071 = cljs.core.seq.call(null,seq__29055_29062);
if(temp__4425__auto___29071){
var seq__29055_29072__$1 = temp__4425__auto___29071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29055_29072__$1)){
var c__17140__auto___29073 = cljs.core.chunk_first.call(null,seq__29055_29072__$1);
var G__29074 = cljs.core.chunk_rest.call(null,seq__29055_29072__$1);
var G__29075 = c__17140__auto___29073;
var G__29076 = cljs.core.count.call(null,c__17140__auto___29073);
var G__29077 = (0);
seq__29055_29062 = G__29074;
chunk__29056_29063 = G__29075;
count__29057_29064 = G__29076;
i__29058_29065 = G__29077;
continue;
} else {
var dep_29078 = cljs.core.first.call(null,seq__29055_29072__$1);
topo_sort_helper_STAR_.call(null,dep_29078,(depth + (1)),state);

var G__29079 = cljs.core.next.call(null,seq__29055_29072__$1);
var G__29080 = null;
var G__29081 = (0);
var G__29082 = (0);
seq__29055_29062 = G__29079;
chunk__29056_29063 = G__29080;
count__29057_29064 = G__29081;
i__29058_29065 = G__29082;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29059){
var vec__29061 = p__29059;
var x = cljs.core.nth.call(null,vec__29061,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29061,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29061,x,xs,get_deps__$1){
return (function (p1__29017_SHARP_){
return clojure.set.difference.call(null,p1__29017_SHARP_,x);
});})(vec__29061,x,xs,get_deps__$1))
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
var seq__29095 = cljs.core.seq.call(null,provides);
var chunk__29096 = null;
var count__29097 = (0);
var i__29098 = (0);
while(true){
if((i__29098 < count__29097)){
var prov = cljs.core._nth.call(null,chunk__29096,i__29098);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29099_29107 = cljs.core.seq.call(null,requires);
var chunk__29100_29108 = null;
var count__29101_29109 = (0);
var i__29102_29110 = (0);
while(true){
if((i__29102_29110 < count__29101_29109)){
var req_29111 = cljs.core._nth.call(null,chunk__29100_29108,i__29102_29110);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29111,prov);

var G__29112 = seq__29099_29107;
var G__29113 = chunk__29100_29108;
var G__29114 = count__29101_29109;
var G__29115 = (i__29102_29110 + (1));
seq__29099_29107 = G__29112;
chunk__29100_29108 = G__29113;
count__29101_29109 = G__29114;
i__29102_29110 = G__29115;
continue;
} else {
var temp__4425__auto___29116 = cljs.core.seq.call(null,seq__29099_29107);
if(temp__4425__auto___29116){
var seq__29099_29117__$1 = temp__4425__auto___29116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29099_29117__$1)){
var c__17140__auto___29118 = cljs.core.chunk_first.call(null,seq__29099_29117__$1);
var G__29119 = cljs.core.chunk_rest.call(null,seq__29099_29117__$1);
var G__29120 = c__17140__auto___29118;
var G__29121 = cljs.core.count.call(null,c__17140__auto___29118);
var G__29122 = (0);
seq__29099_29107 = G__29119;
chunk__29100_29108 = G__29120;
count__29101_29109 = G__29121;
i__29102_29110 = G__29122;
continue;
} else {
var req_29123 = cljs.core.first.call(null,seq__29099_29117__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29123,prov);

var G__29124 = cljs.core.next.call(null,seq__29099_29117__$1);
var G__29125 = null;
var G__29126 = (0);
var G__29127 = (0);
seq__29099_29107 = G__29124;
chunk__29100_29108 = G__29125;
count__29101_29109 = G__29126;
i__29102_29110 = G__29127;
continue;
}
} else {
}
}
break;
}

var G__29128 = seq__29095;
var G__29129 = chunk__29096;
var G__29130 = count__29097;
var G__29131 = (i__29098 + (1));
seq__29095 = G__29128;
chunk__29096 = G__29129;
count__29097 = G__29130;
i__29098 = G__29131;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29095);
if(temp__4425__auto__){
var seq__29095__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29095__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__29095__$1);
var G__29132 = cljs.core.chunk_rest.call(null,seq__29095__$1);
var G__29133 = c__17140__auto__;
var G__29134 = cljs.core.count.call(null,c__17140__auto__);
var G__29135 = (0);
seq__29095 = G__29132;
chunk__29096 = G__29133;
count__29097 = G__29134;
i__29098 = G__29135;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29095__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29103_29136 = cljs.core.seq.call(null,requires);
var chunk__29104_29137 = null;
var count__29105_29138 = (0);
var i__29106_29139 = (0);
while(true){
if((i__29106_29139 < count__29105_29138)){
var req_29140 = cljs.core._nth.call(null,chunk__29104_29137,i__29106_29139);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29140,prov);

var G__29141 = seq__29103_29136;
var G__29142 = chunk__29104_29137;
var G__29143 = count__29105_29138;
var G__29144 = (i__29106_29139 + (1));
seq__29103_29136 = G__29141;
chunk__29104_29137 = G__29142;
count__29105_29138 = G__29143;
i__29106_29139 = G__29144;
continue;
} else {
var temp__4425__auto___29145__$1 = cljs.core.seq.call(null,seq__29103_29136);
if(temp__4425__auto___29145__$1){
var seq__29103_29146__$1 = temp__4425__auto___29145__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29103_29146__$1)){
var c__17140__auto___29147 = cljs.core.chunk_first.call(null,seq__29103_29146__$1);
var G__29148 = cljs.core.chunk_rest.call(null,seq__29103_29146__$1);
var G__29149 = c__17140__auto___29147;
var G__29150 = cljs.core.count.call(null,c__17140__auto___29147);
var G__29151 = (0);
seq__29103_29136 = G__29148;
chunk__29104_29137 = G__29149;
count__29105_29138 = G__29150;
i__29106_29139 = G__29151;
continue;
} else {
var req_29152 = cljs.core.first.call(null,seq__29103_29146__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29152,prov);

var G__29153 = cljs.core.next.call(null,seq__29103_29146__$1);
var G__29154 = null;
var G__29155 = (0);
var G__29156 = (0);
seq__29103_29136 = G__29153;
chunk__29104_29137 = G__29154;
count__29105_29138 = G__29155;
i__29106_29139 = G__29156;
continue;
}
} else {
}
}
break;
}

var G__29157 = cljs.core.next.call(null,seq__29095__$1);
var G__29158 = null;
var G__29159 = (0);
var G__29160 = (0);
seq__29095 = G__29157;
chunk__29096 = G__29158;
count__29097 = G__29159;
i__29098 = G__29160;
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
var seq__29165_29169 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29166_29170 = null;
var count__29167_29171 = (0);
var i__29168_29172 = (0);
while(true){
if((i__29168_29172 < count__29167_29171)){
var ns_29173 = cljs.core._nth.call(null,chunk__29166_29170,i__29168_29172);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29173);

var G__29174 = seq__29165_29169;
var G__29175 = chunk__29166_29170;
var G__29176 = count__29167_29171;
var G__29177 = (i__29168_29172 + (1));
seq__29165_29169 = G__29174;
chunk__29166_29170 = G__29175;
count__29167_29171 = G__29176;
i__29168_29172 = G__29177;
continue;
} else {
var temp__4425__auto___29178 = cljs.core.seq.call(null,seq__29165_29169);
if(temp__4425__auto___29178){
var seq__29165_29179__$1 = temp__4425__auto___29178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29165_29179__$1)){
var c__17140__auto___29180 = cljs.core.chunk_first.call(null,seq__29165_29179__$1);
var G__29181 = cljs.core.chunk_rest.call(null,seq__29165_29179__$1);
var G__29182 = c__17140__auto___29180;
var G__29183 = cljs.core.count.call(null,c__17140__auto___29180);
var G__29184 = (0);
seq__29165_29169 = G__29181;
chunk__29166_29170 = G__29182;
count__29167_29171 = G__29183;
i__29168_29172 = G__29184;
continue;
} else {
var ns_29185 = cljs.core.first.call(null,seq__29165_29179__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29185);

var G__29186 = cljs.core.next.call(null,seq__29165_29179__$1);
var G__29187 = null;
var G__29188 = (0);
var G__29189 = (0);
seq__29165_29169 = G__29186;
chunk__29166_29170 = G__29187;
count__29167_29171 = G__29188;
i__29168_29172 = G__29189;
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
var G__29190__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29191__i = 0, G__29191__a = new Array(arguments.length -  0);
while (G__29191__i < G__29191__a.length) {G__29191__a[G__29191__i] = arguments[G__29191__i + 0]; ++G__29191__i;}
  args = new cljs.core.IndexedSeq(G__29191__a,0);
} 
return G__29190__delegate.call(this,args);};
G__29190.cljs$lang$maxFixedArity = 0;
G__29190.cljs$lang$applyTo = (function (arglist__29192){
var args = cljs.core.seq(arglist__29192);
return G__29190__delegate(args);
});
G__29190.cljs$core$IFn$_invoke$arity$variadic = G__29190__delegate;
return G__29190;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29193 = cljs.core._EQ_;
var expr__29194 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29193.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29194))){
return ((function (pred__29193,expr__29194){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29196){if((e29196 instanceof Error)){
var e = e29196;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29196;

}
}})());
});
;})(pred__29193,expr__29194))
} else {
if(cljs.core.truth_(pred__29193.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29194))){
return ((function (pred__29193,expr__29194){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29193,expr__29194){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29193,expr__29194))
);

return deferred.addErrback(((function (deferred,pred__29193,expr__29194){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29193,expr__29194))
);
});
;})(pred__29193,expr__29194))
} else {
return ((function (pred__29193,expr__29194){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29193,expr__29194))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29197,callback){
var map__29200 = p__29197;
var map__29200__$1 = ((((!((map__29200 == null)))?((((map__29200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29200):map__29200);
var file_msg = map__29200__$1;
var request_url = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29200,map__29200__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29200,map__29200__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__){
return (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (7))){
var inst_29220 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29226_29246 = state_29224__$1;
(statearr_29226_29246[(2)] = inst_29220);

(statearr_29226_29246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (1))){
var state_29224__$1 = state_29224;
var statearr_29227_29247 = state_29224__$1;
(statearr_29227_29247[(2)] = null);

(statearr_29227_29247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (4))){
var inst_29204 = (state_29224[(7)]);
var inst_29204__$1 = (state_29224[(2)]);
var state_29224__$1 = (function (){var statearr_29228 = state_29224;
(statearr_29228[(7)] = inst_29204__$1);

return statearr_29228;
})();
if(cljs.core.truth_(inst_29204__$1)){
var statearr_29229_29248 = state_29224__$1;
(statearr_29229_29248[(1)] = (5));

} else {
var statearr_29230_29249 = state_29224__$1;
(statearr_29230_29249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (6))){
var state_29224__$1 = state_29224;
var statearr_29231_29250 = state_29224__$1;
(statearr_29231_29250[(2)] = null);

(statearr_29231_29250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (3))){
var inst_29222 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29224__$1,inst_29222);
} else {
if((state_val_29225 === (2))){
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29225 === (11))){
var inst_29216 = (state_29224[(2)]);
var state_29224__$1 = (function (){var statearr_29232 = state_29224;
(statearr_29232[(8)] = inst_29216);

return statearr_29232;
})();
var statearr_29233_29251 = state_29224__$1;
(statearr_29233_29251[(2)] = null);

(statearr_29233_29251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (9))){
var inst_29210 = (state_29224[(9)]);
var inst_29208 = (state_29224[(10)]);
var inst_29212 = inst_29210.call(null,inst_29208);
var state_29224__$1 = state_29224;
var statearr_29234_29252 = state_29224__$1;
(statearr_29234_29252[(2)] = inst_29212);

(statearr_29234_29252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (5))){
var inst_29204 = (state_29224[(7)]);
var inst_29206 = figwheel.client.file_reloading.blocking_load.call(null,inst_29204);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(8),inst_29206);
} else {
if((state_val_29225 === (10))){
var inst_29208 = (state_29224[(10)]);
var inst_29214 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29208);
var state_29224__$1 = state_29224;
var statearr_29235_29253 = state_29224__$1;
(statearr_29235_29253[(2)] = inst_29214);

(statearr_29235_29253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (8))){
var inst_29204 = (state_29224[(7)]);
var inst_29210 = (state_29224[(9)]);
var inst_29208 = (state_29224[(2)]);
var inst_29209 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29210__$1 = cljs.core.get.call(null,inst_29209,inst_29204);
var state_29224__$1 = (function (){var statearr_29236 = state_29224;
(statearr_29236[(9)] = inst_29210__$1);

(statearr_29236[(10)] = inst_29208);

return statearr_29236;
})();
if(cljs.core.truth_(inst_29210__$1)){
var statearr_29237_29254 = state_29224__$1;
(statearr_29237_29254[(1)] = (9));

} else {
var statearr_29238_29255 = state_29224__$1;
(statearr_29238_29255[(1)] = (10));

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
});})(c__19810__auto__))
;
return ((function (switch__19745__auto__,c__19810__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19746__auto__ = null;
var figwheel$client$file_reloading$state_machine__19746__auto____0 = (function (){
var statearr_29242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29242[(0)] = figwheel$client$file_reloading$state_machine__19746__auto__);

(statearr_29242[(1)] = (1));

return statearr_29242;
});
var figwheel$client$file_reloading$state_machine__19746__auto____1 = (function (state_29224){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_29224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e29243){if((e29243 instanceof Object)){
var ex__19749__auto__ = e29243;
var statearr_29244_29256 = state_29224;
(statearr_29244_29256[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29257 = state_29224;
state_29224 = G__29257;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19746__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19746__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19746__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19746__auto____0;
figwheel$client$file_reloading$state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19746__auto____1;
return figwheel$client$file_reloading$state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__))
})();
var state__19812__auto__ = (function (){var statearr_29245 = f__19811__auto__.call(null);
(statearr_29245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_29245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__))
);

return c__19810__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29258,callback){
var map__29261 = p__29258;
var map__29261__$1 = ((((!((map__29261 == null)))?((((map__29261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29261):map__29261);
var file_msg = map__29261__$1;
var namespace = cljs.core.get.call(null,map__29261__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29261,map__29261__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29261,map__29261__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29263){
var map__29266 = p__29263;
var map__29266__$1 = ((((!((map__29266 == null)))?((((map__29266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29266):map__29266);
var file_msg = map__29266__$1;
var namespace = cljs.core.get.call(null,map__29266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29268,callback){
var map__29271 = p__29268;
var map__29271__$1 = ((((!((map__29271 == null)))?((((map__29271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29271):map__29271);
var file_msg = map__29271__$1;
var request_url = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19810__auto___29359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto___29359,out){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto___29359,out){
return (function (state_29341){
var state_val_29342 = (state_29341[(1)]);
if((state_val_29342 === (1))){
var inst_29319 = cljs.core.nth.call(null,files,(0),null);
var inst_29320 = cljs.core.nthnext.call(null,files,(1));
var inst_29321 = files;
var state_29341__$1 = (function (){var statearr_29343 = state_29341;
(statearr_29343[(7)] = inst_29320);

(statearr_29343[(8)] = inst_29321);

(statearr_29343[(9)] = inst_29319);

return statearr_29343;
})();
var statearr_29344_29360 = state_29341__$1;
(statearr_29344_29360[(2)] = null);

(statearr_29344_29360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (2))){
var inst_29324 = (state_29341[(10)]);
var inst_29321 = (state_29341[(8)]);
var inst_29324__$1 = cljs.core.nth.call(null,inst_29321,(0),null);
var inst_29325 = cljs.core.nthnext.call(null,inst_29321,(1));
var inst_29326 = (inst_29324__$1 == null);
var inst_29327 = cljs.core.not.call(null,inst_29326);
var state_29341__$1 = (function (){var statearr_29345 = state_29341;
(statearr_29345[(11)] = inst_29325);

(statearr_29345[(10)] = inst_29324__$1);

return statearr_29345;
})();
if(inst_29327){
var statearr_29346_29361 = state_29341__$1;
(statearr_29346_29361[(1)] = (4));

} else {
var statearr_29347_29362 = state_29341__$1;
(statearr_29347_29362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (3))){
var inst_29339 = (state_29341[(2)]);
var state_29341__$1 = state_29341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29341__$1,inst_29339);
} else {
if((state_val_29342 === (4))){
var inst_29324 = (state_29341[(10)]);
var inst_29329 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29324);
var state_29341__$1 = state_29341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29341__$1,(7),inst_29329);
} else {
if((state_val_29342 === (5))){
var inst_29335 = cljs.core.async.close_BANG_.call(null,out);
var state_29341__$1 = state_29341;
var statearr_29348_29363 = state_29341__$1;
(statearr_29348_29363[(2)] = inst_29335);

(statearr_29348_29363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (6))){
var inst_29337 = (state_29341[(2)]);
var state_29341__$1 = state_29341;
var statearr_29349_29364 = state_29341__$1;
(statearr_29349_29364[(2)] = inst_29337);

(statearr_29349_29364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (7))){
var inst_29325 = (state_29341[(11)]);
var inst_29331 = (state_29341[(2)]);
var inst_29332 = cljs.core.async.put_BANG_.call(null,out,inst_29331);
var inst_29321 = inst_29325;
var state_29341__$1 = (function (){var statearr_29350 = state_29341;
(statearr_29350[(12)] = inst_29332);

(statearr_29350[(8)] = inst_29321);

return statearr_29350;
})();
var statearr_29351_29365 = state_29341__$1;
(statearr_29351_29365[(2)] = null);

(statearr_29351_29365[(1)] = (2));


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
});})(c__19810__auto___29359,out))
;
return ((function (switch__19745__auto__,c__19810__auto___29359,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto____0 = (function (){
var statearr_29355 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29355[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto__);

(statearr_29355[(1)] = (1));

return statearr_29355;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto____1 = (function (state_29341){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_29341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e29356){if((e29356 instanceof Object)){
var ex__19749__auto__ = e29356;
var statearr_29357_29366 = state_29341;
(statearr_29357_29366[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29367 = state_29341;
state_29341 = G__29367;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto__ = function(state_29341){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto____1.call(this,state_29341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto___29359,out))
})();
var state__19812__auto__ = (function (){var statearr_29358 = f__19811__auto__.call(null);
(statearr_29358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto___29359);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto___29359,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29368,opts){
var map__29372 = p__29368;
var map__29372__$1 = ((((!((map__29372 == null)))?((((map__29372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);
var eval_body__$1 = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29374){var e = e29374;
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
return (function (p1__29375_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29375_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29380){
var vec__29381 = p__29380;
var k = cljs.core.nth.call(null,vec__29381,(0),null);
var v = cljs.core.nth.call(null,vec__29381,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29382){
var vec__29383 = p__29382;
var k = cljs.core.nth.call(null,vec__29383,(0),null);
var v = cljs.core.nth.call(null,vec__29383,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29387,p__29388){
var map__29635 = p__29387;
var map__29635__$1 = ((((!((map__29635 == null)))?((((map__29635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29635):map__29635);
var opts = map__29635__$1;
var before_jsload = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29636 = p__29388;
var map__29636__$1 = ((((!((map__29636 == null)))?((((map__29636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636):map__29636);
var msg = map__29636__$1;
var files = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19811__auto__ = (function (){var switch__19745__auto__ = ((function (c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29789){
var state_val_29790 = (state_29789[(1)]);
if((state_val_29790 === (7))){
var inst_29653 = (state_29789[(7)]);
var inst_29652 = (state_29789[(8)]);
var inst_29650 = (state_29789[(9)]);
var inst_29651 = (state_29789[(10)]);
var inst_29658 = cljs.core._nth.call(null,inst_29651,inst_29653);
var inst_29659 = figwheel.client.file_reloading.eval_body.call(null,inst_29658,opts);
var inst_29660 = (inst_29653 + (1));
var tmp29791 = inst_29652;
var tmp29792 = inst_29650;
var tmp29793 = inst_29651;
var inst_29650__$1 = tmp29792;
var inst_29651__$1 = tmp29793;
var inst_29652__$1 = tmp29791;
var inst_29653__$1 = inst_29660;
var state_29789__$1 = (function (){var statearr_29794 = state_29789;
(statearr_29794[(7)] = inst_29653__$1);

(statearr_29794[(8)] = inst_29652__$1);

(statearr_29794[(9)] = inst_29650__$1);

(statearr_29794[(10)] = inst_29651__$1);

(statearr_29794[(11)] = inst_29659);

return statearr_29794;
})();
var statearr_29795_29881 = state_29789__$1;
(statearr_29795_29881[(2)] = null);

(statearr_29795_29881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (20))){
var inst_29693 = (state_29789[(12)]);
var inst_29701 = figwheel.client.file_reloading.sort_files.call(null,inst_29693);
var state_29789__$1 = state_29789;
var statearr_29796_29882 = state_29789__$1;
(statearr_29796_29882[(2)] = inst_29701);

(statearr_29796_29882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (27))){
var state_29789__$1 = state_29789;
var statearr_29797_29883 = state_29789__$1;
(statearr_29797_29883[(2)] = null);

(statearr_29797_29883[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (1))){
var inst_29642 = (state_29789[(13)]);
var inst_29639 = before_jsload.call(null,files);
var inst_29640 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29641 = (function (){return ((function (inst_29642,inst_29639,inst_29640,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29384_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29384_SHARP_);
});
;})(inst_29642,inst_29639,inst_29640,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29642__$1 = cljs.core.filter.call(null,inst_29641,files);
var inst_29643 = cljs.core.not_empty.call(null,inst_29642__$1);
var state_29789__$1 = (function (){var statearr_29798 = state_29789;
(statearr_29798[(13)] = inst_29642__$1);

(statearr_29798[(14)] = inst_29639);

(statearr_29798[(15)] = inst_29640);

return statearr_29798;
})();
if(cljs.core.truth_(inst_29643)){
var statearr_29799_29884 = state_29789__$1;
(statearr_29799_29884[(1)] = (2));

} else {
var statearr_29800_29885 = state_29789__$1;
(statearr_29800_29885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (24))){
var state_29789__$1 = state_29789;
var statearr_29801_29886 = state_29789__$1;
(statearr_29801_29886[(2)] = null);

(statearr_29801_29886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (39))){
var inst_29743 = (state_29789[(16)]);
var state_29789__$1 = state_29789;
var statearr_29802_29887 = state_29789__$1;
(statearr_29802_29887[(2)] = inst_29743);

(statearr_29802_29887[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (46))){
var inst_29784 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29803_29888 = state_29789__$1;
(statearr_29803_29888[(2)] = inst_29784);

(statearr_29803_29888[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (4))){
var inst_29687 = (state_29789[(2)]);
var inst_29688 = cljs.core.List.EMPTY;
var inst_29689 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29688);
var inst_29690 = (function (){return ((function (inst_29687,inst_29688,inst_29689,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29385_SHARP_){
var and__16325__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29385_SHARP_);
if(cljs.core.truth_(and__16325__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29385_SHARP_));
} else {
return and__16325__auto__;
}
});
;})(inst_29687,inst_29688,inst_29689,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29691 = cljs.core.filter.call(null,inst_29690,files);
var inst_29692 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29693 = cljs.core.concat.call(null,inst_29691,inst_29692);
var state_29789__$1 = (function (){var statearr_29804 = state_29789;
(statearr_29804[(17)] = inst_29687);

(statearr_29804[(12)] = inst_29693);

(statearr_29804[(18)] = inst_29689);

return statearr_29804;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29805_29889 = state_29789__$1;
(statearr_29805_29889[(1)] = (16));

} else {
var statearr_29806_29890 = state_29789__$1;
(statearr_29806_29890[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (15))){
var inst_29677 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29807_29891 = state_29789__$1;
(statearr_29807_29891[(2)] = inst_29677);

(statearr_29807_29891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (21))){
var inst_29703 = (state_29789[(19)]);
var inst_29703__$1 = (state_29789[(2)]);
var inst_29704 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29703__$1);
var state_29789__$1 = (function (){var statearr_29808 = state_29789;
(statearr_29808[(19)] = inst_29703__$1);

return statearr_29808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29789__$1,(22),inst_29704);
} else {
if((state_val_29790 === (31))){
var inst_29787 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29789__$1,inst_29787);
} else {
if((state_val_29790 === (32))){
var inst_29743 = (state_29789[(16)]);
var inst_29748 = inst_29743.cljs$lang$protocol_mask$partition0$;
var inst_29749 = (inst_29748 & (64));
var inst_29750 = inst_29743.cljs$core$ISeq$;
var inst_29751 = (inst_29749) || (inst_29750);
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29751)){
var statearr_29809_29892 = state_29789__$1;
(statearr_29809_29892[(1)] = (35));

} else {
var statearr_29810_29893 = state_29789__$1;
(statearr_29810_29893[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (40))){
var inst_29764 = (state_29789[(20)]);
var inst_29763 = (state_29789[(2)]);
var inst_29764__$1 = cljs.core.get.call(null,inst_29763,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29765 = cljs.core.get.call(null,inst_29763,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29766 = cljs.core.not_empty.call(null,inst_29764__$1);
var state_29789__$1 = (function (){var statearr_29811 = state_29789;
(statearr_29811[(20)] = inst_29764__$1);

(statearr_29811[(21)] = inst_29765);

return statearr_29811;
})();
if(cljs.core.truth_(inst_29766)){
var statearr_29812_29894 = state_29789__$1;
(statearr_29812_29894[(1)] = (41));

} else {
var statearr_29813_29895 = state_29789__$1;
(statearr_29813_29895[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (33))){
var state_29789__$1 = state_29789;
var statearr_29814_29896 = state_29789__$1;
(statearr_29814_29896[(2)] = false);

(statearr_29814_29896[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (13))){
var inst_29663 = (state_29789[(22)]);
var inst_29667 = cljs.core.chunk_first.call(null,inst_29663);
var inst_29668 = cljs.core.chunk_rest.call(null,inst_29663);
var inst_29669 = cljs.core.count.call(null,inst_29667);
var inst_29650 = inst_29668;
var inst_29651 = inst_29667;
var inst_29652 = inst_29669;
var inst_29653 = (0);
var state_29789__$1 = (function (){var statearr_29815 = state_29789;
(statearr_29815[(7)] = inst_29653);

(statearr_29815[(8)] = inst_29652);

(statearr_29815[(9)] = inst_29650);

(statearr_29815[(10)] = inst_29651);

return statearr_29815;
})();
var statearr_29816_29897 = state_29789__$1;
(statearr_29816_29897[(2)] = null);

(statearr_29816_29897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (22))){
var inst_29706 = (state_29789[(23)]);
var inst_29703 = (state_29789[(19)]);
var inst_29711 = (state_29789[(24)]);
var inst_29707 = (state_29789[(25)]);
var inst_29706__$1 = (state_29789[(2)]);
var inst_29707__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29706__$1);
var inst_29708 = (function (){var all_files = inst_29703;
var res_SINGLEQUOTE_ = inst_29706__$1;
var res = inst_29707__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29706,inst_29703,inst_29711,inst_29707,inst_29706__$1,inst_29707__$1,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29386_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29386_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29706,inst_29703,inst_29711,inst_29707,inst_29706__$1,inst_29707__$1,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29709 = cljs.core.filter.call(null,inst_29708,inst_29706__$1);
var inst_29710 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29711__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29710);
var inst_29712 = cljs.core.not_empty.call(null,inst_29711__$1);
var state_29789__$1 = (function (){var statearr_29817 = state_29789;
(statearr_29817[(23)] = inst_29706__$1);

(statearr_29817[(26)] = inst_29709);

(statearr_29817[(24)] = inst_29711__$1);

(statearr_29817[(25)] = inst_29707__$1);

return statearr_29817;
})();
if(cljs.core.truth_(inst_29712)){
var statearr_29818_29898 = state_29789__$1;
(statearr_29818_29898[(1)] = (23));

} else {
var statearr_29819_29899 = state_29789__$1;
(statearr_29819_29899[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (36))){
var state_29789__$1 = state_29789;
var statearr_29820_29900 = state_29789__$1;
(statearr_29820_29900[(2)] = false);

(statearr_29820_29900[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (41))){
var inst_29764 = (state_29789[(20)]);
var inst_29768 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29769 = cljs.core.map.call(null,inst_29768,inst_29764);
var inst_29770 = cljs.core.pr_str.call(null,inst_29769);
var inst_29771 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29770)].join('');
var inst_29772 = figwheel.client.utils.log.call(null,inst_29771);
var state_29789__$1 = state_29789;
var statearr_29821_29901 = state_29789__$1;
(statearr_29821_29901[(2)] = inst_29772);

(statearr_29821_29901[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (43))){
var inst_29765 = (state_29789[(21)]);
var inst_29775 = (state_29789[(2)]);
var inst_29776 = cljs.core.not_empty.call(null,inst_29765);
var state_29789__$1 = (function (){var statearr_29822 = state_29789;
(statearr_29822[(27)] = inst_29775);

return statearr_29822;
})();
if(cljs.core.truth_(inst_29776)){
var statearr_29823_29902 = state_29789__$1;
(statearr_29823_29902[(1)] = (44));

} else {
var statearr_29824_29903 = state_29789__$1;
(statearr_29824_29903[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (29))){
var inst_29706 = (state_29789[(23)]);
var inst_29703 = (state_29789[(19)]);
var inst_29709 = (state_29789[(26)]);
var inst_29743 = (state_29789[(16)]);
var inst_29711 = (state_29789[(24)]);
var inst_29707 = (state_29789[(25)]);
var inst_29739 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29742 = (function (){var all_files = inst_29703;
var res_SINGLEQUOTE_ = inst_29706;
var res = inst_29707;
var files_not_loaded = inst_29709;
var dependencies_that_loaded = inst_29711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29743,inst_29711,inst_29707,inst_29739,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29741){
var map__29825 = p__29741;
var map__29825__$1 = ((((!((map__29825 == null)))?((((map__29825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29825):map__29825);
var namespace = cljs.core.get.call(null,map__29825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29743,inst_29711,inst_29707,inst_29739,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29743__$1 = cljs.core.group_by.call(null,inst_29742,inst_29709);
var inst_29745 = (inst_29743__$1 == null);
var inst_29746 = cljs.core.not.call(null,inst_29745);
var state_29789__$1 = (function (){var statearr_29827 = state_29789;
(statearr_29827[(28)] = inst_29739);

(statearr_29827[(16)] = inst_29743__$1);

return statearr_29827;
})();
if(inst_29746){
var statearr_29828_29904 = state_29789__$1;
(statearr_29828_29904[(1)] = (32));

} else {
var statearr_29829_29905 = state_29789__$1;
(statearr_29829_29905[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (44))){
var inst_29765 = (state_29789[(21)]);
var inst_29778 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29765);
var inst_29779 = cljs.core.pr_str.call(null,inst_29778);
var inst_29780 = [cljs.core.str("not required: "),cljs.core.str(inst_29779)].join('');
var inst_29781 = figwheel.client.utils.log.call(null,inst_29780);
var state_29789__$1 = state_29789;
var statearr_29830_29906 = state_29789__$1;
(statearr_29830_29906[(2)] = inst_29781);

(statearr_29830_29906[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (6))){
var inst_29684 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29831_29907 = state_29789__$1;
(statearr_29831_29907[(2)] = inst_29684);

(statearr_29831_29907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (28))){
var inst_29709 = (state_29789[(26)]);
var inst_29736 = (state_29789[(2)]);
var inst_29737 = cljs.core.not_empty.call(null,inst_29709);
var state_29789__$1 = (function (){var statearr_29832 = state_29789;
(statearr_29832[(29)] = inst_29736);

return statearr_29832;
})();
if(cljs.core.truth_(inst_29737)){
var statearr_29833_29908 = state_29789__$1;
(statearr_29833_29908[(1)] = (29));

} else {
var statearr_29834_29909 = state_29789__$1;
(statearr_29834_29909[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (25))){
var inst_29707 = (state_29789[(25)]);
var inst_29723 = (state_29789[(2)]);
var inst_29724 = cljs.core.not_empty.call(null,inst_29707);
var state_29789__$1 = (function (){var statearr_29835 = state_29789;
(statearr_29835[(30)] = inst_29723);

return statearr_29835;
})();
if(cljs.core.truth_(inst_29724)){
var statearr_29836_29910 = state_29789__$1;
(statearr_29836_29910[(1)] = (26));

} else {
var statearr_29837_29911 = state_29789__$1;
(statearr_29837_29911[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (34))){
var inst_29758 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29758)){
var statearr_29838_29912 = state_29789__$1;
(statearr_29838_29912[(1)] = (38));

} else {
var statearr_29839_29913 = state_29789__$1;
(statearr_29839_29913[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (17))){
var state_29789__$1 = state_29789;
var statearr_29840_29914 = state_29789__$1;
(statearr_29840_29914[(2)] = recompile_dependents);

(statearr_29840_29914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (3))){
var state_29789__$1 = state_29789;
var statearr_29841_29915 = state_29789__$1;
(statearr_29841_29915[(2)] = null);

(statearr_29841_29915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (12))){
var inst_29680 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29842_29916 = state_29789__$1;
(statearr_29842_29916[(2)] = inst_29680);

(statearr_29842_29916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (2))){
var inst_29642 = (state_29789[(13)]);
var inst_29649 = cljs.core.seq.call(null,inst_29642);
var inst_29650 = inst_29649;
var inst_29651 = null;
var inst_29652 = (0);
var inst_29653 = (0);
var state_29789__$1 = (function (){var statearr_29843 = state_29789;
(statearr_29843[(7)] = inst_29653);

(statearr_29843[(8)] = inst_29652);

(statearr_29843[(9)] = inst_29650);

(statearr_29843[(10)] = inst_29651);

return statearr_29843;
})();
var statearr_29844_29917 = state_29789__$1;
(statearr_29844_29917[(2)] = null);

(statearr_29844_29917[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (23))){
var inst_29706 = (state_29789[(23)]);
var inst_29703 = (state_29789[(19)]);
var inst_29709 = (state_29789[(26)]);
var inst_29711 = (state_29789[(24)]);
var inst_29707 = (state_29789[(25)]);
var inst_29714 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29716 = (function (){var all_files = inst_29703;
var res_SINGLEQUOTE_ = inst_29706;
var res = inst_29707;
var files_not_loaded = inst_29709;
var dependencies_that_loaded = inst_29711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29711,inst_29707,inst_29714,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29715){
var map__29845 = p__29715;
var map__29845__$1 = ((((!((map__29845 == null)))?((((map__29845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29845):map__29845);
var request_url = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29711,inst_29707,inst_29714,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29717 = cljs.core.reverse.call(null,inst_29711);
var inst_29718 = cljs.core.map.call(null,inst_29716,inst_29717);
var inst_29719 = cljs.core.pr_str.call(null,inst_29718);
var inst_29720 = figwheel.client.utils.log.call(null,inst_29719);
var state_29789__$1 = (function (){var statearr_29847 = state_29789;
(statearr_29847[(31)] = inst_29714);

return statearr_29847;
})();
var statearr_29848_29918 = state_29789__$1;
(statearr_29848_29918[(2)] = inst_29720);

(statearr_29848_29918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (35))){
var state_29789__$1 = state_29789;
var statearr_29849_29919 = state_29789__$1;
(statearr_29849_29919[(2)] = true);

(statearr_29849_29919[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (19))){
var inst_29693 = (state_29789[(12)]);
var inst_29699 = figwheel.client.file_reloading.expand_files.call(null,inst_29693);
var state_29789__$1 = state_29789;
var statearr_29850_29920 = state_29789__$1;
(statearr_29850_29920[(2)] = inst_29699);

(statearr_29850_29920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (11))){
var state_29789__$1 = state_29789;
var statearr_29851_29921 = state_29789__$1;
(statearr_29851_29921[(2)] = null);

(statearr_29851_29921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (9))){
var inst_29682 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29852_29922 = state_29789__$1;
(statearr_29852_29922[(2)] = inst_29682);

(statearr_29852_29922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (5))){
var inst_29653 = (state_29789[(7)]);
var inst_29652 = (state_29789[(8)]);
var inst_29655 = (inst_29653 < inst_29652);
var inst_29656 = inst_29655;
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29656)){
var statearr_29853_29923 = state_29789__$1;
(statearr_29853_29923[(1)] = (7));

} else {
var statearr_29854_29924 = state_29789__$1;
(statearr_29854_29924[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (14))){
var inst_29663 = (state_29789[(22)]);
var inst_29672 = cljs.core.first.call(null,inst_29663);
var inst_29673 = figwheel.client.file_reloading.eval_body.call(null,inst_29672,opts);
var inst_29674 = cljs.core.next.call(null,inst_29663);
var inst_29650 = inst_29674;
var inst_29651 = null;
var inst_29652 = (0);
var inst_29653 = (0);
var state_29789__$1 = (function (){var statearr_29855 = state_29789;
(statearr_29855[(7)] = inst_29653);

(statearr_29855[(8)] = inst_29652);

(statearr_29855[(9)] = inst_29650);

(statearr_29855[(10)] = inst_29651);

(statearr_29855[(32)] = inst_29673);

return statearr_29855;
})();
var statearr_29856_29925 = state_29789__$1;
(statearr_29856_29925[(2)] = null);

(statearr_29856_29925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (45))){
var state_29789__$1 = state_29789;
var statearr_29857_29926 = state_29789__$1;
(statearr_29857_29926[(2)] = null);

(statearr_29857_29926[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (26))){
var inst_29706 = (state_29789[(23)]);
var inst_29703 = (state_29789[(19)]);
var inst_29709 = (state_29789[(26)]);
var inst_29711 = (state_29789[(24)]);
var inst_29707 = (state_29789[(25)]);
var inst_29726 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29728 = (function (){var all_files = inst_29703;
var res_SINGLEQUOTE_ = inst_29706;
var res = inst_29707;
var files_not_loaded = inst_29709;
var dependencies_that_loaded = inst_29711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29711,inst_29707,inst_29726,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29727){
var map__29858 = p__29727;
var map__29858__$1 = ((((!((map__29858 == null)))?((((map__29858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29858):map__29858);
var namespace = cljs.core.get.call(null,map__29858__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29711,inst_29707,inst_29726,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29729 = cljs.core.map.call(null,inst_29728,inst_29707);
var inst_29730 = cljs.core.pr_str.call(null,inst_29729);
var inst_29731 = figwheel.client.utils.log.call(null,inst_29730);
var inst_29732 = (function (){var all_files = inst_29703;
var res_SINGLEQUOTE_ = inst_29706;
var res = inst_29707;
var files_not_loaded = inst_29709;
var dependencies_that_loaded = inst_29711;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29711,inst_29707,inst_29726,inst_29728,inst_29729,inst_29730,inst_29731,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29706,inst_29703,inst_29709,inst_29711,inst_29707,inst_29726,inst_29728,inst_29729,inst_29730,inst_29731,state_val_29790,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29733 = setTimeout(inst_29732,(10));
var state_29789__$1 = (function (){var statearr_29860 = state_29789;
(statearr_29860[(33)] = inst_29726);

(statearr_29860[(34)] = inst_29731);

return statearr_29860;
})();
var statearr_29861_29927 = state_29789__$1;
(statearr_29861_29927[(2)] = inst_29733);

(statearr_29861_29927[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (16))){
var state_29789__$1 = state_29789;
var statearr_29862_29928 = state_29789__$1;
(statearr_29862_29928[(2)] = reload_dependents);

(statearr_29862_29928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (38))){
var inst_29743 = (state_29789[(16)]);
var inst_29760 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29743);
var state_29789__$1 = state_29789;
var statearr_29863_29929 = state_29789__$1;
(statearr_29863_29929[(2)] = inst_29760);

(statearr_29863_29929[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (30))){
var state_29789__$1 = state_29789;
var statearr_29864_29930 = state_29789__$1;
(statearr_29864_29930[(2)] = null);

(statearr_29864_29930[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (10))){
var inst_29663 = (state_29789[(22)]);
var inst_29665 = cljs.core.chunked_seq_QMARK_.call(null,inst_29663);
var state_29789__$1 = state_29789;
if(inst_29665){
var statearr_29865_29931 = state_29789__$1;
(statearr_29865_29931[(1)] = (13));

} else {
var statearr_29866_29932 = state_29789__$1;
(statearr_29866_29932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (18))){
var inst_29697 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29697)){
var statearr_29867_29933 = state_29789__$1;
(statearr_29867_29933[(1)] = (19));

} else {
var statearr_29868_29934 = state_29789__$1;
(statearr_29868_29934[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (42))){
var state_29789__$1 = state_29789;
var statearr_29869_29935 = state_29789__$1;
(statearr_29869_29935[(2)] = null);

(statearr_29869_29935[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (37))){
var inst_29755 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29870_29936 = state_29789__$1;
(statearr_29870_29936[(2)] = inst_29755);

(statearr_29870_29936[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (8))){
var inst_29650 = (state_29789[(9)]);
var inst_29663 = (state_29789[(22)]);
var inst_29663__$1 = cljs.core.seq.call(null,inst_29650);
var state_29789__$1 = (function (){var statearr_29871 = state_29789;
(statearr_29871[(22)] = inst_29663__$1);

return statearr_29871;
})();
if(inst_29663__$1){
var statearr_29872_29937 = state_29789__$1;
(statearr_29872_29937[(1)] = (10));

} else {
var statearr_29873_29938 = state_29789__$1;
(statearr_29873_29938[(1)] = (11));

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
});})(c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19745__auto__,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto____0 = (function (){
var statearr_29877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29877[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto__);

(statearr_29877[(1)] = (1));

return statearr_29877;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto____1 = (function (state_29789){
while(true){
var ret_value__19747__auto__ = (function (){try{while(true){
var result__19748__auto__ = switch__19745__auto__.call(null,state_29789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19748__auto__;
}
break;
}
}catch (e29878){if((e29878 instanceof Object)){
var ex__19749__auto__ = e29878;
var statearr_29879_29939 = state_29789;
(statearr_29879_29939[(5)] = ex__19749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29940 = state_29789;
state_29789 = G__29940;
continue;
} else {
return ret_value__19747__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto__ = function(state_29789){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto____1.call(this,state_29789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19746__auto__;
})()
;})(switch__19745__auto__,c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19812__auto__ = (function (){var statearr_29880 = f__19811__auto__.call(null);
(statearr_29880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19810__auto__);

return statearr_29880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19812__auto__);
});})(c__19810__auto__,map__29635,map__29635__$1,opts,before_jsload,on_jsload,reload_dependents,map__29636,map__29636__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19810__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29943,link){
var map__29946 = p__29943;
var map__29946__$1 = ((((!((map__29946 == null)))?((((map__29946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29946):map__29946);
var file = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29946,map__29946__$1,file){
return (function (p1__29941_SHARP_,p2__29942_SHARP_){
if(cljs.core._EQ_.call(null,p1__29941_SHARP_,p2__29942_SHARP_)){
return p1__29941_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29946,map__29946__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29952){
var map__29953 = p__29952;
var map__29953__$1 = ((((!((map__29953 == null)))?((((map__29953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29953):map__29953);
var match_length = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29948_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29948_SHARP_);
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
var args29955 = [];
var len__17395__auto___29958 = arguments.length;
var i__17396__auto___29959 = (0);
while(true){
if((i__17396__auto___29959 < len__17395__auto___29958)){
args29955.push((arguments[i__17396__auto___29959]));

var G__29960 = (i__17396__auto___29959 + (1));
i__17396__auto___29959 = G__29960;
continue;
} else {
}
break;
}

var G__29957 = args29955.length;
switch (G__29957) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29955.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29962_SHARP_,p2__29963_SHARP_){
return cljs.core.assoc.call(null,p1__29962_SHARP_,cljs.core.get.call(null,p2__29963_SHARP_,key),p2__29963_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29964){
var map__29967 = p__29964;
var map__29967__$1 = ((((!((map__29967 == null)))?((((map__29967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29967):map__29967);
var f_data = map__29967__$1;
var file = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29969,files_msg){
var map__29976 = p__29969;
var map__29976__$1 = ((((!((map__29976 == null)))?((((map__29976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29976):map__29976);
var opts = map__29976__$1;
var on_cssload = cljs.core.get.call(null,map__29976__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29978_29982 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29979_29983 = null;
var count__29980_29984 = (0);
var i__29981_29985 = (0);
while(true){
if((i__29981_29985 < count__29980_29984)){
var f_29986 = cljs.core._nth.call(null,chunk__29979_29983,i__29981_29985);
figwheel.client.file_reloading.reload_css_file.call(null,f_29986);

var G__29987 = seq__29978_29982;
var G__29988 = chunk__29979_29983;
var G__29989 = count__29980_29984;
var G__29990 = (i__29981_29985 + (1));
seq__29978_29982 = G__29987;
chunk__29979_29983 = G__29988;
count__29980_29984 = G__29989;
i__29981_29985 = G__29990;
continue;
} else {
var temp__4425__auto___29991 = cljs.core.seq.call(null,seq__29978_29982);
if(temp__4425__auto___29991){
var seq__29978_29992__$1 = temp__4425__auto___29991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29978_29992__$1)){
var c__17140__auto___29993 = cljs.core.chunk_first.call(null,seq__29978_29992__$1);
var G__29994 = cljs.core.chunk_rest.call(null,seq__29978_29992__$1);
var G__29995 = c__17140__auto___29993;
var G__29996 = cljs.core.count.call(null,c__17140__auto___29993);
var G__29997 = (0);
seq__29978_29982 = G__29994;
chunk__29979_29983 = G__29995;
count__29980_29984 = G__29996;
i__29981_29985 = G__29997;
continue;
} else {
var f_29998 = cljs.core.first.call(null,seq__29978_29992__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29998);

var G__29999 = cljs.core.next.call(null,seq__29978_29992__$1);
var G__30000 = null;
var G__30001 = (0);
var G__30002 = (0);
seq__29978_29982 = G__29999;
chunk__29979_29983 = G__30000;
count__29980_29984 = G__30001;
i__29981_29985 = G__30002;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29976,map__29976__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29976,map__29976__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1443563495313