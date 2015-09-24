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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28735_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28735_SHARP_));
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
var seq__28740 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28741 = null;
var count__28742 = (0);
var i__28743 = (0);
while(true){
if((i__28743 < count__28742)){
var n = cljs.core._nth.call(null,chunk__28741,i__28743);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28744 = seq__28740;
var G__28745 = chunk__28741;
var G__28746 = count__28742;
var G__28747 = (i__28743 + (1));
seq__28740 = G__28744;
chunk__28741 = G__28745;
count__28742 = G__28746;
i__28743 = G__28747;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28740);
if(temp__4425__auto__){
var seq__28740__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28740__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28740__$1);
var G__28748 = cljs.core.chunk_rest.call(null,seq__28740__$1);
var G__28749 = c__17140__auto__;
var G__28750 = cljs.core.count.call(null,c__17140__auto__);
var G__28751 = (0);
seq__28740 = G__28748;
chunk__28741 = G__28749;
count__28742 = G__28750;
i__28743 = G__28751;
continue;
} else {
var n = cljs.core.first.call(null,seq__28740__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28752 = cljs.core.next.call(null,seq__28740__$1);
var G__28753 = null;
var G__28754 = (0);
var G__28755 = (0);
seq__28740 = G__28752;
chunk__28741 = G__28753;
count__28742 = G__28754;
i__28743 = G__28755;
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

var seq__28794_28801 = cljs.core.seq.call(null,deps);
var chunk__28795_28802 = null;
var count__28796_28803 = (0);
var i__28797_28804 = (0);
while(true){
if((i__28797_28804 < count__28796_28803)){
var dep_28805 = cljs.core._nth.call(null,chunk__28795_28802,i__28797_28804);
topo_sort_helper_STAR_.call(null,dep_28805,(depth + (1)),state);

var G__28806 = seq__28794_28801;
var G__28807 = chunk__28795_28802;
var G__28808 = count__28796_28803;
var G__28809 = (i__28797_28804 + (1));
seq__28794_28801 = G__28806;
chunk__28795_28802 = G__28807;
count__28796_28803 = G__28808;
i__28797_28804 = G__28809;
continue;
} else {
var temp__4425__auto___28810 = cljs.core.seq.call(null,seq__28794_28801);
if(temp__4425__auto___28810){
var seq__28794_28811__$1 = temp__4425__auto___28810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28794_28811__$1)){
var c__17140__auto___28812 = cljs.core.chunk_first.call(null,seq__28794_28811__$1);
var G__28813 = cljs.core.chunk_rest.call(null,seq__28794_28811__$1);
var G__28814 = c__17140__auto___28812;
var G__28815 = cljs.core.count.call(null,c__17140__auto___28812);
var G__28816 = (0);
seq__28794_28801 = G__28813;
chunk__28795_28802 = G__28814;
count__28796_28803 = G__28815;
i__28797_28804 = G__28816;
continue;
} else {
var dep_28817 = cljs.core.first.call(null,seq__28794_28811__$1);
topo_sort_helper_STAR_.call(null,dep_28817,(depth + (1)),state);

var G__28818 = cljs.core.next.call(null,seq__28794_28811__$1);
var G__28819 = null;
var G__28820 = (0);
var G__28821 = (0);
seq__28794_28801 = G__28818;
chunk__28795_28802 = G__28819;
count__28796_28803 = G__28820;
i__28797_28804 = G__28821;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28798){
var vec__28800 = p__28798;
var x = cljs.core.nth.call(null,vec__28800,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28800,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28800,x,xs,get_deps__$1){
return (function (p1__28756_SHARP_){
return clojure.set.difference.call(null,p1__28756_SHARP_,x);
});})(vec__28800,x,xs,get_deps__$1))
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
var seq__28834 = cljs.core.seq.call(null,provides);
var chunk__28835 = null;
var count__28836 = (0);
var i__28837 = (0);
while(true){
if((i__28837 < count__28836)){
var prov = cljs.core._nth.call(null,chunk__28835,i__28837);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28838_28846 = cljs.core.seq.call(null,requires);
var chunk__28839_28847 = null;
var count__28840_28848 = (0);
var i__28841_28849 = (0);
while(true){
if((i__28841_28849 < count__28840_28848)){
var req_28850 = cljs.core._nth.call(null,chunk__28839_28847,i__28841_28849);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28850,prov);

var G__28851 = seq__28838_28846;
var G__28852 = chunk__28839_28847;
var G__28853 = count__28840_28848;
var G__28854 = (i__28841_28849 + (1));
seq__28838_28846 = G__28851;
chunk__28839_28847 = G__28852;
count__28840_28848 = G__28853;
i__28841_28849 = G__28854;
continue;
} else {
var temp__4425__auto___28855 = cljs.core.seq.call(null,seq__28838_28846);
if(temp__4425__auto___28855){
var seq__28838_28856__$1 = temp__4425__auto___28855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28838_28856__$1)){
var c__17140__auto___28857 = cljs.core.chunk_first.call(null,seq__28838_28856__$1);
var G__28858 = cljs.core.chunk_rest.call(null,seq__28838_28856__$1);
var G__28859 = c__17140__auto___28857;
var G__28860 = cljs.core.count.call(null,c__17140__auto___28857);
var G__28861 = (0);
seq__28838_28846 = G__28858;
chunk__28839_28847 = G__28859;
count__28840_28848 = G__28860;
i__28841_28849 = G__28861;
continue;
} else {
var req_28862 = cljs.core.first.call(null,seq__28838_28856__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28862,prov);

var G__28863 = cljs.core.next.call(null,seq__28838_28856__$1);
var G__28864 = null;
var G__28865 = (0);
var G__28866 = (0);
seq__28838_28846 = G__28863;
chunk__28839_28847 = G__28864;
count__28840_28848 = G__28865;
i__28841_28849 = G__28866;
continue;
}
} else {
}
}
break;
}

var G__28867 = seq__28834;
var G__28868 = chunk__28835;
var G__28869 = count__28836;
var G__28870 = (i__28837 + (1));
seq__28834 = G__28867;
chunk__28835 = G__28868;
count__28836 = G__28869;
i__28837 = G__28870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28834);
if(temp__4425__auto__){
var seq__28834__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28834__$1)){
var c__17140__auto__ = cljs.core.chunk_first.call(null,seq__28834__$1);
var G__28871 = cljs.core.chunk_rest.call(null,seq__28834__$1);
var G__28872 = c__17140__auto__;
var G__28873 = cljs.core.count.call(null,c__17140__auto__);
var G__28874 = (0);
seq__28834 = G__28871;
chunk__28835 = G__28872;
count__28836 = G__28873;
i__28837 = G__28874;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28834__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28842_28875 = cljs.core.seq.call(null,requires);
var chunk__28843_28876 = null;
var count__28844_28877 = (0);
var i__28845_28878 = (0);
while(true){
if((i__28845_28878 < count__28844_28877)){
var req_28879 = cljs.core._nth.call(null,chunk__28843_28876,i__28845_28878);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28879,prov);

var G__28880 = seq__28842_28875;
var G__28881 = chunk__28843_28876;
var G__28882 = count__28844_28877;
var G__28883 = (i__28845_28878 + (1));
seq__28842_28875 = G__28880;
chunk__28843_28876 = G__28881;
count__28844_28877 = G__28882;
i__28845_28878 = G__28883;
continue;
} else {
var temp__4425__auto___28884__$1 = cljs.core.seq.call(null,seq__28842_28875);
if(temp__4425__auto___28884__$1){
var seq__28842_28885__$1 = temp__4425__auto___28884__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28842_28885__$1)){
var c__17140__auto___28886 = cljs.core.chunk_first.call(null,seq__28842_28885__$1);
var G__28887 = cljs.core.chunk_rest.call(null,seq__28842_28885__$1);
var G__28888 = c__17140__auto___28886;
var G__28889 = cljs.core.count.call(null,c__17140__auto___28886);
var G__28890 = (0);
seq__28842_28875 = G__28887;
chunk__28843_28876 = G__28888;
count__28844_28877 = G__28889;
i__28845_28878 = G__28890;
continue;
} else {
var req_28891 = cljs.core.first.call(null,seq__28842_28885__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28891,prov);

var G__28892 = cljs.core.next.call(null,seq__28842_28885__$1);
var G__28893 = null;
var G__28894 = (0);
var G__28895 = (0);
seq__28842_28875 = G__28892;
chunk__28843_28876 = G__28893;
count__28844_28877 = G__28894;
i__28845_28878 = G__28895;
continue;
}
} else {
}
}
break;
}

var G__28896 = cljs.core.next.call(null,seq__28834__$1);
var G__28897 = null;
var G__28898 = (0);
var G__28899 = (0);
seq__28834 = G__28896;
chunk__28835 = G__28897;
count__28836 = G__28898;
i__28837 = G__28899;
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
var seq__28904_28908 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28905_28909 = null;
var count__28906_28910 = (0);
var i__28907_28911 = (0);
while(true){
if((i__28907_28911 < count__28906_28910)){
var ns_28912 = cljs.core._nth.call(null,chunk__28905_28909,i__28907_28911);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28912);

var G__28913 = seq__28904_28908;
var G__28914 = chunk__28905_28909;
var G__28915 = count__28906_28910;
var G__28916 = (i__28907_28911 + (1));
seq__28904_28908 = G__28913;
chunk__28905_28909 = G__28914;
count__28906_28910 = G__28915;
i__28907_28911 = G__28916;
continue;
} else {
var temp__4425__auto___28917 = cljs.core.seq.call(null,seq__28904_28908);
if(temp__4425__auto___28917){
var seq__28904_28918__$1 = temp__4425__auto___28917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28904_28918__$1)){
var c__17140__auto___28919 = cljs.core.chunk_first.call(null,seq__28904_28918__$1);
var G__28920 = cljs.core.chunk_rest.call(null,seq__28904_28918__$1);
var G__28921 = c__17140__auto___28919;
var G__28922 = cljs.core.count.call(null,c__17140__auto___28919);
var G__28923 = (0);
seq__28904_28908 = G__28920;
chunk__28905_28909 = G__28921;
count__28906_28910 = G__28922;
i__28907_28911 = G__28923;
continue;
} else {
var ns_28924 = cljs.core.first.call(null,seq__28904_28918__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28924);

var G__28925 = cljs.core.next.call(null,seq__28904_28918__$1);
var G__28926 = null;
var G__28927 = (0);
var G__28928 = (0);
seq__28904_28908 = G__28925;
chunk__28905_28909 = G__28926;
count__28906_28910 = G__28927;
i__28907_28911 = G__28928;
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
var G__28929__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28930__i = 0, G__28930__a = new Array(arguments.length -  0);
while (G__28930__i < G__28930__a.length) {G__28930__a[G__28930__i] = arguments[G__28930__i + 0]; ++G__28930__i;}
  args = new cljs.core.IndexedSeq(G__28930__a,0);
} 
return G__28929__delegate.call(this,args);};
G__28929.cljs$lang$maxFixedArity = 0;
G__28929.cljs$lang$applyTo = (function (arglist__28931){
var args = cljs.core.seq(arglist__28931);
return G__28929__delegate(args);
});
G__28929.cljs$core$IFn$_invoke$arity$variadic = G__28929__delegate;
return G__28929;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28932 = cljs.core._EQ_;
var expr__28933 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28932.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28933))){
return ((function (pred__28932,expr__28933){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28935){if((e28935 instanceof Error)){
var e = e28935;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28935;

}
}})());
});
;})(pred__28932,expr__28933))
} else {
if(cljs.core.truth_(pred__28932.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28933))){
return ((function (pred__28932,expr__28933){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28932,expr__28933){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28932,expr__28933))
);

return deferred.addErrback(((function (deferred,pred__28932,expr__28933){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28932,expr__28933))
);
});
;})(pred__28932,expr__28933))
} else {
return ((function (pred__28932,expr__28933){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28932,expr__28933))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28936,callback){
var map__28939 = p__28936;
var map__28939__$1 = ((((!((map__28939 == null)))?((((map__28939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28939):map__28939);
var file_msg = map__28939__$1;
var request_url = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28939,map__28939__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28939,map__28939__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__){
return (function (state_28963){
var state_val_28964 = (state_28963[(1)]);
if((state_val_28964 === (7))){
var inst_28959 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
var statearr_28965_28985 = state_28963__$1;
(statearr_28965_28985[(2)] = inst_28959);

(statearr_28965_28985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (1))){
var state_28963__$1 = state_28963;
var statearr_28966_28986 = state_28963__$1;
(statearr_28966_28986[(2)] = null);

(statearr_28966_28986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (4))){
var inst_28943 = (state_28963[(7)]);
var inst_28943__$1 = (state_28963[(2)]);
var state_28963__$1 = (function (){var statearr_28967 = state_28963;
(statearr_28967[(7)] = inst_28943__$1);

return statearr_28967;
})();
if(cljs.core.truth_(inst_28943__$1)){
var statearr_28968_28987 = state_28963__$1;
(statearr_28968_28987[(1)] = (5));

} else {
var statearr_28969_28988 = state_28963__$1;
(statearr_28969_28988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (6))){
var state_28963__$1 = state_28963;
var statearr_28970_28989 = state_28963__$1;
(statearr_28970_28989[(2)] = null);

(statearr_28970_28989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (3))){
var inst_28961 = (state_28963[(2)]);
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28963__$1,inst_28961);
} else {
if((state_val_28964 === (2))){
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28963__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28964 === (11))){
var inst_28955 = (state_28963[(2)]);
var state_28963__$1 = (function (){var statearr_28971 = state_28963;
(statearr_28971[(8)] = inst_28955);

return statearr_28971;
})();
var statearr_28972_28990 = state_28963__$1;
(statearr_28972_28990[(2)] = null);

(statearr_28972_28990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (9))){
var inst_28949 = (state_28963[(9)]);
var inst_28947 = (state_28963[(10)]);
var inst_28951 = inst_28949.call(null,inst_28947);
var state_28963__$1 = state_28963;
var statearr_28973_28991 = state_28963__$1;
(statearr_28973_28991[(2)] = inst_28951);

(statearr_28973_28991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (5))){
var inst_28943 = (state_28963[(7)]);
var inst_28945 = figwheel.client.file_reloading.blocking_load.call(null,inst_28943);
var state_28963__$1 = state_28963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28963__$1,(8),inst_28945);
} else {
if((state_val_28964 === (10))){
var inst_28947 = (state_28963[(10)]);
var inst_28953 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28947);
var state_28963__$1 = state_28963;
var statearr_28974_28992 = state_28963__$1;
(statearr_28974_28992[(2)] = inst_28953);

(statearr_28974_28992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28964 === (8))){
var inst_28949 = (state_28963[(9)]);
var inst_28943 = (state_28963[(7)]);
var inst_28947 = (state_28963[(2)]);
var inst_28948 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28949__$1 = cljs.core.get.call(null,inst_28948,inst_28943);
var state_28963__$1 = (function (){var statearr_28975 = state_28963;
(statearr_28975[(9)] = inst_28949__$1);

(statearr_28975[(10)] = inst_28947);

return statearr_28975;
})();
if(cljs.core.truth_(inst_28949__$1)){
var statearr_28976_28993 = state_28963__$1;
(statearr_28976_28993[(1)] = (9));

} else {
var statearr_28977_28994 = state_28963__$1;
(statearr_28977_28994[(1)] = (10));

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
});})(c__19856__auto__))
;
return ((function (switch__19791__auto__,c__19856__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19792__auto__ = null;
var figwheel$client$file_reloading$state_machine__19792__auto____0 = (function (){
var statearr_28981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28981[(0)] = figwheel$client$file_reloading$state_machine__19792__auto__);

(statearr_28981[(1)] = (1));

return statearr_28981;
});
var figwheel$client$file_reloading$state_machine__19792__auto____1 = (function (state_28963){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_28963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e28982){if((e28982 instanceof Object)){
var ex__19795__auto__ = e28982;
var statearr_28983_28995 = state_28963;
(statearr_28983_28995[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28996 = state_28963;
state_28963 = G__28996;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19792__auto__ = function(state_28963){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19792__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19792__auto____1.call(this,state_28963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19792__auto____0;
figwheel$client$file_reloading$state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19792__auto____1;
return figwheel$client$file_reloading$state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__))
})();
var state__19858__auto__ = (function (){var statearr_28984 = f__19857__auto__.call(null);
(statearr_28984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_28984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__))
);

return c__19856__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28997,callback){
var map__29000 = p__28997;
var map__29000__$1 = ((((!((map__29000 == null)))?((((map__29000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29000):map__29000);
var file_msg = map__29000__$1;
var namespace = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29000,map__29000__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29000,map__29000__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29002){
var map__29005 = p__29002;
var map__29005__$1 = ((((!((map__29005 == null)))?((((map__29005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29005):map__29005);
var file_msg = map__29005__$1;
var namespace = cljs.core.get.call(null,map__29005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29007,callback){
var map__29010 = p__29007;
var map__29010__$1 = ((((!((map__29010 == null)))?((((map__29010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29010):map__29010);
var file_msg = map__29010__$1;
var request_url = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19856__auto___29098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto___29098,out){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto___29098,out){
return (function (state_29080){
var state_val_29081 = (state_29080[(1)]);
if((state_val_29081 === (1))){
var inst_29058 = cljs.core.nth.call(null,files,(0),null);
var inst_29059 = cljs.core.nthnext.call(null,files,(1));
var inst_29060 = files;
var state_29080__$1 = (function (){var statearr_29082 = state_29080;
(statearr_29082[(7)] = inst_29060);

(statearr_29082[(8)] = inst_29058);

(statearr_29082[(9)] = inst_29059);

return statearr_29082;
})();
var statearr_29083_29099 = state_29080__$1;
(statearr_29083_29099[(2)] = null);

(statearr_29083_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (2))){
var inst_29060 = (state_29080[(7)]);
var inst_29063 = (state_29080[(10)]);
var inst_29063__$1 = cljs.core.nth.call(null,inst_29060,(0),null);
var inst_29064 = cljs.core.nthnext.call(null,inst_29060,(1));
var inst_29065 = (inst_29063__$1 == null);
var inst_29066 = cljs.core.not.call(null,inst_29065);
var state_29080__$1 = (function (){var statearr_29084 = state_29080;
(statearr_29084[(11)] = inst_29064);

(statearr_29084[(10)] = inst_29063__$1);

return statearr_29084;
})();
if(inst_29066){
var statearr_29085_29100 = state_29080__$1;
(statearr_29085_29100[(1)] = (4));

} else {
var statearr_29086_29101 = state_29080__$1;
(statearr_29086_29101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (3))){
var inst_29078 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29080__$1,inst_29078);
} else {
if((state_val_29081 === (4))){
var inst_29063 = (state_29080[(10)]);
var inst_29068 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29063);
var state_29080__$1 = state_29080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29080__$1,(7),inst_29068);
} else {
if((state_val_29081 === (5))){
var inst_29074 = cljs.core.async.close_BANG_.call(null,out);
var state_29080__$1 = state_29080;
var statearr_29087_29102 = state_29080__$1;
(statearr_29087_29102[(2)] = inst_29074);

(statearr_29087_29102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (6))){
var inst_29076 = (state_29080[(2)]);
var state_29080__$1 = state_29080;
var statearr_29088_29103 = state_29080__$1;
(statearr_29088_29103[(2)] = inst_29076);

(statearr_29088_29103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29081 === (7))){
var inst_29064 = (state_29080[(11)]);
var inst_29070 = (state_29080[(2)]);
var inst_29071 = cljs.core.async.put_BANG_.call(null,out,inst_29070);
var inst_29060 = inst_29064;
var state_29080__$1 = (function (){var statearr_29089 = state_29080;
(statearr_29089[(7)] = inst_29060);

(statearr_29089[(12)] = inst_29071);

return statearr_29089;
})();
var statearr_29090_29104 = state_29080__$1;
(statearr_29090_29104[(2)] = null);

(statearr_29090_29104[(1)] = (2));


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
});})(c__19856__auto___29098,out))
;
return ((function (switch__19791__auto__,c__19856__auto___29098,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto____0 = (function (){
var statearr_29094 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29094[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto__);

(statearr_29094[(1)] = (1));

return statearr_29094;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto____1 = (function (state_29080){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_29080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e29095){if((e29095 instanceof Object)){
var ex__19795__auto__ = e29095;
var statearr_29096_29105 = state_29080;
(statearr_29096_29105[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29106 = state_29080;
state_29080 = G__29106;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto__ = function(state_29080){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto____1.call(this,state_29080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto___29098,out))
})();
var state__19858__auto__ = (function (){var statearr_29097 = f__19857__auto__.call(null);
(statearr_29097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto___29098);

return statearr_29097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto___29098,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29107,opts){
var map__29111 = p__29107;
var map__29111__$1 = ((((!((map__29111 == null)))?((((map__29111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29111):map__29111);
var eval_body__$1 = cljs.core.get.call(null,map__29111__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29111__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29113){var e = e29113;
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
return (function (p1__29114_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29114_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29119){
var vec__29120 = p__29119;
var k = cljs.core.nth.call(null,vec__29120,(0),null);
var v = cljs.core.nth.call(null,vec__29120,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29121){
var vec__29122 = p__29121;
var k = cljs.core.nth.call(null,vec__29122,(0),null);
var v = cljs.core.nth.call(null,vec__29122,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29126,p__29127){
var map__29374 = p__29126;
var map__29374__$1 = ((((!((map__29374 == null)))?((((map__29374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29374):map__29374);
var opts = map__29374__$1;
var before_jsload = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29375 = p__29127;
var map__29375__$1 = ((((!((map__29375 == null)))?((((map__29375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29375):map__29375);
var msg = map__29375__$1;
var files = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19857__auto__ = (function (){var switch__19791__auto__ = ((function (c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29528){
var state_val_29529 = (state_29528[(1)]);
if((state_val_29529 === (7))){
var inst_29391 = (state_29528[(7)]);
var inst_29390 = (state_29528[(8)]);
var inst_29389 = (state_29528[(9)]);
var inst_29392 = (state_29528[(10)]);
var inst_29397 = cljs.core._nth.call(null,inst_29390,inst_29392);
var inst_29398 = figwheel.client.file_reloading.eval_body.call(null,inst_29397,opts);
var inst_29399 = (inst_29392 + (1));
var tmp29530 = inst_29391;
var tmp29531 = inst_29390;
var tmp29532 = inst_29389;
var inst_29389__$1 = tmp29532;
var inst_29390__$1 = tmp29531;
var inst_29391__$1 = tmp29530;
var inst_29392__$1 = inst_29399;
var state_29528__$1 = (function (){var statearr_29533 = state_29528;
(statearr_29533[(7)] = inst_29391__$1);

(statearr_29533[(11)] = inst_29398);

(statearr_29533[(8)] = inst_29390__$1);

(statearr_29533[(9)] = inst_29389__$1);

(statearr_29533[(10)] = inst_29392__$1);

return statearr_29533;
})();
var statearr_29534_29620 = state_29528__$1;
(statearr_29534_29620[(2)] = null);

(statearr_29534_29620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (20))){
var inst_29432 = (state_29528[(12)]);
var inst_29440 = figwheel.client.file_reloading.sort_files.call(null,inst_29432);
var state_29528__$1 = state_29528;
var statearr_29535_29621 = state_29528__$1;
(statearr_29535_29621[(2)] = inst_29440);

(statearr_29535_29621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (27))){
var state_29528__$1 = state_29528;
var statearr_29536_29622 = state_29528__$1;
(statearr_29536_29622[(2)] = null);

(statearr_29536_29622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (1))){
var inst_29381 = (state_29528[(13)]);
var inst_29378 = before_jsload.call(null,files);
var inst_29379 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29380 = (function (){return ((function (inst_29381,inst_29378,inst_29379,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29123_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29123_SHARP_);
});
;})(inst_29381,inst_29378,inst_29379,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29381__$1 = cljs.core.filter.call(null,inst_29380,files);
var inst_29382 = cljs.core.not_empty.call(null,inst_29381__$1);
var state_29528__$1 = (function (){var statearr_29537 = state_29528;
(statearr_29537[(14)] = inst_29379);

(statearr_29537[(13)] = inst_29381__$1);

(statearr_29537[(15)] = inst_29378);

return statearr_29537;
})();
if(cljs.core.truth_(inst_29382)){
var statearr_29538_29623 = state_29528__$1;
(statearr_29538_29623[(1)] = (2));

} else {
var statearr_29539_29624 = state_29528__$1;
(statearr_29539_29624[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (24))){
var state_29528__$1 = state_29528;
var statearr_29540_29625 = state_29528__$1;
(statearr_29540_29625[(2)] = null);

(statearr_29540_29625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (39))){
var inst_29482 = (state_29528[(16)]);
var state_29528__$1 = state_29528;
var statearr_29541_29626 = state_29528__$1;
(statearr_29541_29626[(2)] = inst_29482);

(statearr_29541_29626[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (46))){
var inst_29523 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29542_29627 = state_29528__$1;
(statearr_29542_29627[(2)] = inst_29523);

(statearr_29542_29627[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (4))){
var inst_29426 = (state_29528[(2)]);
var inst_29427 = cljs.core.List.EMPTY;
var inst_29428 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29427);
var inst_29429 = (function (){return ((function (inst_29426,inst_29427,inst_29428,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29124_SHARP_){
var and__16325__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29124_SHARP_);
if(cljs.core.truth_(and__16325__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29124_SHARP_));
} else {
return and__16325__auto__;
}
});
;})(inst_29426,inst_29427,inst_29428,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29430 = cljs.core.filter.call(null,inst_29429,files);
var inst_29431 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29432 = cljs.core.concat.call(null,inst_29430,inst_29431);
var state_29528__$1 = (function (){var statearr_29543 = state_29528;
(statearr_29543[(17)] = inst_29426);

(statearr_29543[(12)] = inst_29432);

(statearr_29543[(18)] = inst_29428);

return statearr_29543;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29544_29628 = state_29528__$1;
(statearr_29544_29628[(1)] = (16));

} else {
var statearr_29545_29629 = state_29528__$1;
(statearr_29545_29629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (15))){
var inst_29416 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29546_29630 = state_29528__$1;
(statearr_29546_29630[(2)] = inst_29416);

(statearr_29546_29630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (21))){
var inst_29442 = (state_29528[(19)]);
var inst_29442__$1 = (state_29528[(2)]);
var inst_29443 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29442__$1);
var state_29528__$1 = (function (){var statearr_29547 = state_29528;
(statearr_29547[(19)] = inst_29442__$1);

return statearr_29547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29528__$1,(22),inst_29443);
} else {
if((state_val_29529 === (31))){
var inst_29526 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29528__$1,inst_29526);
} else {
if((state_val_29529 === (32))){
var inst_29482 = (state_29528[(16)]);
var inst_29487 = inst_29482.cljs$lang$protocol_mask$partition0$;
var inst_29488 = (inst_29487 & (64));
var inst_29489 = inst_29482.cljs$core$ISeq$;
var inst_29490 = (inst_29488) || (inst_29489);
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29490)){
var statearr_29548_29631 = state_29528__$1;
(statearr_29548_29631[(1)] = (35));

} else {
var statearr_29549_29632 = state_29528__$1;
(statearr_29549_29632[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (40))){
var inst_29503 = (state_29528[(20)]);
var inst_29502 = (state_29528[(2)]);
var inst_29503__$1 = cljs.core.get.call(null,inst_29502,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29504 = cljs.core.get.call(null,inst_29502,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29505 = cljs.core.not_empty.call(null,inst_29503__$1);
var state_29528__$1 = (function (){var statearr_29550 = state_29528;
(statearr_29550[(20)] = inst_29503__$1);

(statearr_29550[(21)] = inst_29504);

return statearr_29550;
})();
if(cljs.core.truth_(inst_29505)){
var statearr_29551_29633 = state_29528__$1;
(statearr_29551_29633[(1)] = (41));

} else {
var statearr_29552_29634 = state_29528__$1;
(statearr_29552_29634[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (33))){
var state_29528__$1 = state_29528;
var statearr_29553_29635 = state_29528__$1;
(statearr_29553_29635[(2)] = false);

(statearr_29553_29635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (13))){
var inst_29402 = (state_29528[(22)]);
var inst_29406 = cljs.core.chunk_first.call(null,inst_29402);
var inst_29407 = cljs.core.chunk_rest.call(null,inst_29402);
var inst_29408 = cljs.core.count.call(null,inst_29406);
var inst_29389 = inst_29407;
var inst_29390 = inst_29406;
var inst_29391 = inst_29408;
var inst_29392 = (0);
var state_29528__$1 = (function (){var statearr_29554 = state_29528;
(statearr_29554[(7)] = inst_29391);

(statearr_29554[(8)] = inst_29390);

(statearr_29554[(9)] = inst_29389);

(statearr_29554[(10)] = inst_29392);

return statearr_29554;
})();
var statearr_29555_29636 = state_29528__$1;
(statearr_29555_29636[(2)] = null);

(statearr_29555_29636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (22))){
var inst_29446 = (state_29528[(23)]);
var inst_29445 = (state_29528[(24)]);
var inst_29450 = (state_29528[(25)]);
var inst_29442 = (state_29528[(19)]);
var inst_29445__$1 = (state_29528[(2)]);
var inst_29446__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29445__$1);
var inst_29447 = (function (){var all_files = inst_29442;
var res_SINGLEQUOTE_ = inst_29445__$1;
var res = inst_29446__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29446,inst_29445,inst_29450,inst_29442,inst_29445__$1,inst_29446__$1,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29125_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29125_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29446,inst_29445,inst_29450,inst_29442,inst_29445__$1,inst_29446__$1,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29448 = cljs.core.filter.call(null,inst_29447,inst_29445__$1);
var inst_29449 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29450__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29449);
var inst_29451 = cljs.core.not_empty.call(null,inst_29450__$1);
var state_29528__$1 = (function (){var statearr_29556 = state_29528;
(statearr_29556[(23)] = inst_29446__$1);

(statearr_29556[(24)] = inst_29445__$1);

(statearr_29556[(25)] = inst_29450__$1);

(statearr_29556[(26)] = inst_29448);

return statearr_29556;
})();
if(cljs.core.truth_(inst_29451)){
var statearr_29557_29637 = state_29528__$1;
(statearr_29557_29637[(1)] = (23));

} else {
var statearr_29558_29638 = state_29528__$1;
(statearr_29558_29638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (36))){
var state_29528__$1 = state_29528;
var statearr_29559_29639 = state_29528__$1;
(statearr_29559_29639[(2)] = false);

(statearr_29559_29639[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (41))){
var inst_29503 = (state_29528[(20)]);
var inst_29507 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29508 = cljs.core.map.call(null,inst_29507,inst_29503);
var inst_29509 = cljs.core.pr_str.call(null,inst_29508);
var inst_29510 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29509)].join('');
var inst_29511 = figwheel.client.utils.log.call(null,inst_29510);
var state_29528__$1 = state_29528;
var statearr_29560_29640 = state_29528__$1;
(statearr_29560_29640[(2)] = inst_29511);

(statearr_29560_29640[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (43))){
var inst_29504 = (state_29528[(21)]);
var inst_29514 = (state_29528[(2)]);
var inst_29515 = cljs.core.not_empty.call(null,inst_29504);
var state_29528__$1 = (function (){var statearr_29561 = state_29528;
(statearr_29561[(27)] = inst_29514);

return statearr_29561;
})();
if(cljs.core.truth_(inst_29515)){
var statearr_29562_29641 = state_29528__$1;
(statearr_29562_29641[(1)] = (44));

} else {
var statearr_29563_29642 = state_29528__$1;
(statearr_29563_29642[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (29))){
var inst_29446 = (state_29528[(23)]);
var inst_29445 = (state_29528[(24)]);
var inst_29450 = (state_29528[(25)]);
var inst_29442 = (state_29528[(19)]);
var inst_29482 = (state_29528[(16)]);
var inst_29448 = (state_29528[(26)]);
var inst_29478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29481 = (function (){var all_files = inst_29442;
var res_SINGLEQUOTE_ = inst_29445;
var res = inst_29446;
var files_not_loaded = inst_29448;
var dependencies_that_loaded = inst_29450;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29482,inst_29448,inst_29478,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29480){
var map__29564 = p__29480;
var map__29564__$1 = ((((!((map__29564 == null)))?((((map__29564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29564):map__29564);
var namespace = cljs.core.get.call(null,map__29564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29482,inst_29448,inst_29478,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29482__$1 = cljs.core.group_by.call(null,inst_29481,inst_29448);
var inst_29484 = (inst_29482__$1 == null);
var inst_29485 = cljs.core.not.call(null,inst_29484);
var state_29528__$1 = (function (){var statearr_29566 = state_29528;
(statearr_29566[(16)] = inst_29482__$1);

(statearr_29566[(28)] = inst_29478);

return statearr_29566;
})();
if(inst_29485){
var statearr_29567_29643 = state_29528__$1;
(statearr_29567_29643[(1)] = (32));

} else {
var statearr_29568_29644 = state_29528__$1;
(statearr_29568_29644[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (44))){
var inst_29504 = (state_29528[(21)]);
var inst_29517 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29504);
var inst_29518 = cljs.core.pr_str.call(null,inst_29517);
var inst_29519 = [cljs.core.str("not required: "),cljs.core.str(inst_29518)].join('');
var inst_29520 = figwheel.client.utils.log.call(null,inst_29519);
var state_29528__$1 = state_29528;
var statearr_29569_29645 = state_29528__$1;
(statearr_29569_29645[(2)] = inst_29520);

(statearr_29569_29645[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (6))){
var inst_29423 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29570_29646 = state_29528__$1;
(statearr_29570_29646[(2)] = inst_29423);

(statearr_29570_29646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (28))){
var inst_29448 = (state_29528[(26)]);
var inst_29475 = (state_29528[(2)]);
var inst_29476 = cljs.core.not_empty.call(null,inst_29448);
var state_29528__$1 = (function (){var statearr_29571 = state_29528;
(statearr_29571[(29)] = inst_29475);

return statearr_29571;
})();
if(cljs.core.truth_(inst_29476)){
var statearr_29572_29647 = state_29528__$1;
(statearr_29572_29647[(1)] = (29));

} else {
var statearr_29573_29648 = state_29528__$1;
(statearr_29573_29648[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (25))){
var inst_29446 = (state_29528[(23)]);
var inst_29462 = (state_29528[(2)]);
var inst_29463 = cljs.core.not_empty.call(null,inst_29446);
var state_29528__$1 = (function (){var statearr_29574 = state_29528;
(statearr_29574[(30)] = inst_29462);

return statearr_29574;
})();
if(cljs.core.truth_(inst_29463)){
var statearr_29575_29649 = state_29528__$1;
(statearr_29575_29649[(1)] = (26));

} else {
var statearr_29576_29650 = state_29528__$1;
(statearr_29576_29650[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (34))){
var inst_29497 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29497)){
var statearr_29577_29651 = state_29528__$1;
(statearr_29577_29651[(1)] = (38));

} else {
var statearr_29578_29652 = state_29528__$1;
(statearr_29578_29652[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (17))){
var state_29528__$1 = state_29528;
var statearr_29579_29653 = state_29528__$1;
(statearr_29579_29653[(2)] = recompile_dependents);

(statearr_29579_29653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (3))){
var state_29528__$1 = state_29528;
var statearr_29580_29654 = state_29528__$1;
(statearr_29580_29654[(2)] = null);

(statearr_29580_29654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (12))){
var inst_29419 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29581_29655 = state_29528__$1;
(statearr_29581_29655[(2)] = inst_29419);

(statearr_29581_29655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (2))){
var inst_29381 = (state_29528[(13)]);
var inst_29388 = cljs.core.seq.call(null,inst_29381);
var inst_29389 = inst_29388;
var inst_29390 = null;
var inst_29391 = (0);
var inst_29392 = (0);
var state_29528__$1 = (function (){var statearr_29582 = state_29528;
(statearr_29582[(7)] = inst_29391);

(statearr_29582[(8)] = inst_29390);

(statearr_29582[(9)] = inst_29389);

(statearr_29582[(10)] = inst_29392);

return statearr_29582;
})();
var statearr_29583_29656 = state_29528__$1;
(statearr_29583_29656[(2)] = null);

(statearr_29583_29656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (23))){
var inst_29446 = (state_29528[(23)]);
var inst_29445 = (state_29528[(24)]);
var inst_29450 = (state_29528[(25)]);
var inst_29442 = (state_29528[(19)]);
var inst_29448 = (state_29528[(26)]);
var inst_29453 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29455 = (function (){var all_files = inst_29442;
var res_SINGLEQUOTE_ = inst_29445;
var res = inst_29446;
var files_not_loaded = inst_29448;
var dependencies_that_loaded = inst_29450;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29448,inst_29453,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29454){
var map__29584 = p__29454;
var map__29584__$1 = ((((!((map__29584 == null)))?((((map__29584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29584):map__29584);
var request_url = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29448,inst_29453,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29456 = cljs.core.reverse.call(null,inst_29450);
var inst_29457 = cljs.core.map.call(null,inst_29455,inst_29456);
var inst_29458 = cljs.core.pr_str.call(null,inst_29457);
var inst_29459 = figwheel.client.utils.log.call(null,inst_29458);
var state_29528__$1 = (function (){var statearr_29586 = state_29528;
(statearr_29586[(31)] = inst_29453);

return statearr_29586;
})();
var statearr_29587_29657 = state_29528__$1;
(statearr_29587_29657[(2)] = inst_29459);

(statearr_29587_29657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (35))){
var state_29528__$1 = state_29528;
var statearr_29588_29658 = state_29528__$1;
(statearr_29588_29658[(2)] = true);

(statearr_29588_29658[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (19))){
var inst_29432 = (state_29528[(12)]);
var inst_29438 = figwheel.client.file_reloading.expand_files.call(null,inst_29432);
var state_29528__$1 = state_29528;
var statearr_29589_29659 = state_29528__$1;
(statearr_29589_29659[(2)] = inst_29438);

(statearr_29589_29659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (11))){
var state_29528__$1 = state_29528;
var statearr_29590_29660 = state_29528__$1;
(statearr_29590_29660[(2)] = null);

(statearr_29590_29660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (9))){
var inst_29421 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29591_29661 = state_29528__$1;
(statearr_29591_29661[(2)] = inst_29421);

(statearr_29591_29661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (5))){
var inst_29391 = (state_29528[(7)]);
var inst_29392 = (state_29528[(10)]);
var inst_29394 = (inst_29392 < inst_29391);
var inst_29395 = inst_29394;
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29395)){
var statearr_29592_29662 = state_29528__$1;
(statearr_29592_29662[(1)] = (7));

} else {
var statearr_29593_29663 = state_29528__$1;
(statearr_29593_29663[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (14))){
var inst_29402 = (state_29528[(22)]);
var inst_29411 = cljs.core.first.call(null,inst_29402);
var inst_29412 = figwheel.client.file_reloading.eval_body.call(null,inst_29411,opts);
var inst_29413 = cljs.core.next.call(null,inst_29402);
var inst_29389 = inst_29413;
var inst_29390 = null;
var inst_29391 = (0);
var inst_29392 = (0);
var state_29528__$1 = (function (){var statearr_29594 = state_29528;
(statearr_29594[(7)] = inst_29391);

(statearr_29594[(8)] = inst_29390);

(statearr_29594[(9)] = inst_29389);

(statearr_29594[(32)] = inst_29412);

(statearr_29594[(10)] = inst_29392);

return statearr_29594;
})();
var statearr_29595_29664 = state_29528__$1;
(statearr_29595_29664[(2)] = null);

(statearr_29595_29664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (45))){
var state_29528__$1 = state_29528;
var statearr_29596_29665 = state_29528__$1;
(statearr_29596_29665[(2)] = null);

(statearr_29596_29665[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (26))){
var inst_29446 = (state_29528[(23)]);
var inst_29445 = (state_29528[(24)]);
var inst_29450 = (state_29528[(25)]);
var inst_29442 = (state_29528[(19)]);
var inst_29448 = (state_29528[(26)]);
var inst_29465 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29467 = (function (){var all_files = inst_29442;
var res_SINGLEQUOTE_ = inst_29445;
var res = inst_29446;
var files_not_loaded = inst_29448;
var dependencies_that_loaded = inst_29450;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29448,inst_29465,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29466){
var map__29597 = p__29466;
var map__29597__$1 = ((((!((map__29597 == null)))?((((map__29597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29597):map__29597);
var namespace = cljs.core.get.call(null,map__29597__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29448,inst_29465,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29468 = cljs.core.map.call(null,inst_29467,inst_29446);
var inst_29469 = cljs.core.pr_str.call(null,inst_29468);
var inst_29470 = figwheel.client.utils.log.call(null,inst_29469);
var inst_29471 = (function (){var all_files = inst_29442;
var res_SINGLEQUOTE_ = inst_29445;
var res = inst_29446;
var files_not_loaded = inst_29448;
var dependencies_that_loaded = inst_29450;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29448,inst_29465,inst_29467,inst_29468,inst_29469,inst_29470,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29446,inst_29445,inst_29450,inst_29442,inst_29448,inst_29465,inst_29467,inst_29468,inst_29469,inst_29470,state_val_29529,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29472 = setTimeout(inst_29471,(10));
var state_29528__$1 = (function (){var statearr_29599 = state_29528;
(statearr_29599[(33)] = inst_29465);

(statearr_29599[(34)] = inst_29470);

return statearr_29599;
})();
var statearr_29600_29666 = state_29528__$1;
(statearr_29600_29666[(2)] = inst_29472);

(statearr_29600_29666[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (16))){
var state_29528__$1 = state_29528;
var statearr_29601_29667 = state_29528__$1;
(statearr_29601_29667[(2)] = reload_dependents);

(statearr_29601_29667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (38))){
var inst_29482 = (state_29528[(16)]);
var inst_29499 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29482);
var state_29528__$1 = state_29528;
var statearr_29602_29668 = state_29528__$1;
(statearr_29602_29668[(2)] = inst_29499);

(statearr_29602_29668[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (30))){
var state_29528__$1 = state_29528;
var statearr_29603_29669 = state_29528__$1;
(statearr_29603_29669[(2)] = null);

(statearr_29603_29669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (10))){
var inst_29402 = (state_29528[(22)]);
var inst_29404 = cljs.core.chunked_seq_QMARK_.call(null,inst_29402);
var state_29528__$1 = state_29528;
if(inst_29404){
var statearr_29604_29670 = state_29528__$1;
(statearr_29604_29670[(1)] = (13));

} else {
var statearr_29605_29671 = state_29528__$1;
(statearr_29605_29671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (18))){
var inst_29436 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29436)){
var statearr_29606_29672 = state_29528__$1;
(statearr_29606_29672[(1)] = (19));

} else {
var statearr_29607_29673 = state_29528__$1;
(statearr_29607_29673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (42))){
var state_29528__$1 = state_29528;
var statearr_29608_29674 = state_29528__$1;
(statearr_29608_29674[(2)] = null);

(statearr_29608_29674[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (37))){
var inst_29494 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29609_29675 = state_29528__$1;
(statearr_29609_29675[(2)] = inst_29494);

(statearr_29609_29675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (8))){
var inst_29389 = (state_29528[(9)]);
var inst_29402 = (state_29528[(22)]);
var inst_29402__$1 = cljs.core.seq.call(null,inst_29389);
var state_29528__$1 = (function (){var statearr_29610 = state_29528;
(statearr_29610[(22)] = inst_29402__$1);

return statearr_29610;
})();
if(inst_29402__$1){
var statearr_29611_29676 = state_29528__$1;
(statearr_29611_29676[(1)] = (10));

} else {
var statearr_29612_29677 = state_29528__$1;
(statearr_29612_29677[(1)] = (11));

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
});})(c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19791__auto__,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto____0 = (function (){
var statearr_29616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29616[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto__);

(statearr_29616[(1)] = (1));

return statearr_29616;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto____1 = (function (state_29528){
while(true){
var ret_value__19793__auto__ = (function (){try{while(true){
var result__19794__auto__ = switch__19791__auto__.call(null,state_29528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19794__auto__;
}
break;
}
}catch (e29617){if((e29617 instanceof Object)){
var ex__19795__auto__ = e29617;
var statearr_29618_29678 = state_29528;
(statearr_29618_29678[(5)] = ex__19795__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29679 = state_29528;
state_29528 = G__29679;
continue;
} else {
return ret_value__19793__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto__ = function(state_29528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto____1.call(this,state_29528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19792__auto__;
})()
;})(switch__19791__auto__,c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19858__auto__ = (function (){var statearr_29619 = f__19857__auto__.call(null);
(statearr_29619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19856__auto__);

return statearr_29619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19858__auto__);
});})(c__19856__auto__,map__29374,map__29374__$1,opts,before_jsload,on_jsload,reload_dependents,map__29375,map__29375__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19856__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29682,link){
var map__29685 = p__29682;
var map__29685__$1 = ((((!((map__29685 == null)))?((((map__29685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29685):map__29685);
var file = cljs.core.get.call(null,map__29685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29685,map__29685__$1,file){
return (function (p1__29680_SHARP_,p2__29681_SHARP_){
if(cljs.core._EQ_.call(null,p1__29680_SHARP_,p2__29681_SHARP_)){
return p1__29680_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29685,map__29685__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29691){
var map__29692 = p__29691;
var map__29692__$1 = ((((!((map__29692 == null)))?((((map__29692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29692):map__29692);
var match_length = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29687_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29687_SHARP_);
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
var args29694 = [];
var len__17395__auto___29697 = arguments.length;
var i__17396__auto___29698 = (0);
while(true){
if((i__17396__auto___29698 < len__17395__auto___29697)){
args29694.push((arguments[i__17396__auto___29698]));

var G__29699 = (i__17396__auto___29698 + (1));
i__17396__auto___29698 = G__29699;
continue;
} else {
}
break;
}

var G__29696 = args29694.length;
switch (G__29696) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29694.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29701_SHARP_,p2__29702_SHARP_){
return cljs.core.assoc.call(null,p1__29701_SHARP_,cljs.core.get.call(null,p2__29702_SHARP_,key),p2__29702_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29703){
var map__29706 = p__29703;
var map__29706__$1 = ((((!((map__29706 == null)))?((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);
var f_data = map__29706__$1;
var file = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29708,files_msg){
var map__29715 = p__29708;
var map__29715__$1 = ((((!((map__29715 == null)))?((((map__29715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29715):map__29715);
var opts = map__29715__$1;
var on_cssload = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29717_29721 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29718_29722 = null;
var count__29719_29723 = (0);
var i__29720_29724 = (0);
while(true){
if((i__29720_29724 < count__29719_29723)){
var f_29725 = cljs.core._nth.call(null,chunk__29718_29722,i__29720_29724);
figwheel.client.file_reloading.reload_css_file.call(null,f_29725);

var G__29726 = seq__29717_29721;
var G__29727 = chunk__29718_29722;
var G__29728 = count__29719_29723;
var G__29729 = (i__29720_29724 + (1));
seq__29717_29721 = G__29726;
chunk__29718_29722 = G__29727;
count__29719_29723 = G__29728;
i__29720_29724 = G__29729;
continue;
} else {
var temp__4425__auto___29730 = cljs.core.seq.call(null,seq__29717_29721);
if(temp__4425__auto___29730){
var seq__29717_29731__$1 = temp__4425__auto___29730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29717_29731__$1)){
var c__17140__auto___29732 = cljs.core.chunk_first.call(null,seq__29717_29731__$1);
var G__29733 = cljs.core.chunk_rest.call(null,seq__29717_29731__$1);
var G__29734 = c__17140__auto___29732;
var G__29735 = cljs.core.count.call(null,c__17140__auto___29732);
var G__29736 = (0);
seq__29717_29721 = G__29733;
chunk__29718_29722 = G__29734;
count__29719_29723 = G__29735;
i__29720_29724 = G__29736;
continue;
} else {
var f_29737 = cljs.core.first.call(null,seq__29717_29731__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29737);

var G__29738 = cljs.core.next.call(null,seq__29717_29731__$1);
var G__29739 = null;
var G__29740 = (0);
var G__29741 = (0);
seq__29717_29721 = G__29738;
chunk__29718_29722 = G__29739;
count__29719_29723 = G__29740;
i__29720_29724 = G__29741;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29715,map__29715__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29715,map__29715__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1442954642295