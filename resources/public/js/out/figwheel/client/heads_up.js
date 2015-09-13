// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17402__auto__ = [];
var len__17395__auto___28194 = arguments.length;
var i__17396__auto___28195 = (0);
while(true){
if((i__17396__auto___28195 < len__17395__auto___28194)){
args__17402__auto__.push((arguments[i__17396__auto___28195]));

var G__28196 = (i__17396__auto___28195 + (1));
i__17396__auto___28195 = G__28196;
continue;
} else {
}
break;
}

var argseq__17403__auto__ = ((((2) < args__17402__auto__.length))?(new cljs.core.IndexedSeq(args__17402__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17403__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28186_28197 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28187_28198 = null;
var count__28188_28199 = (0);
var i__28189_28200 = (0);
while(true){
if((i__28189_28200 < count__28188_28199)){
var k_28201 = cljs.core._nth.call(null,chunk__28187_28198,i__28189_28200);
e.setAttribute(cljs.core.name.call(null,k_28201),cljs.core.get.call(null,attrs,k_28201));

var G__28202 = seq__28186_28197;
var G__28203 = chunk__28187_28198;
var G__28204 = count__28188_28199;
var G__28205 = (i__28189_28200 + (1));
seq__28186_28197 = G__28202;
chunk__28187_28198 = G__28203;
count__28188_28199 = G__28204;
i__28189_28200 = G__28205;
continue;
} else {
var temp__4425__auto___28206 = cljs.core.seq.call(null,seq__28186_28197);
if(temp__4425__auto___28206){
var seq__28186_28207__$1 = temp__4425__auto___28206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28186_28207__$1)){
var c__17140__auto___28208 = cljs.core.chunk_first.call(null,seq__28186_28207__$1);
var G__28209 = cljs.core.chunk_rest.call(null,seq__28186_28207__$1);
var G__28210 = c__17140__auto___28208;
var G__28211 = cljs.core.count.call(null,c__17140__auto___28208);
var G__28212 = (0);
seq__28186_28197 = G__28209;
chunk__28187_28198 = G__28210;
count__28188_28199 = G__28211;
i__28189_28200 = G__28212;
continue;
} else {
var k_28213 = cljs.core.first.call(null,seq__28186_28207__$1);
e.setAttribute(cljs.core.name.call(null,k_28213),cljs.core.get.call(null,attrs,k_28213));

var G__28214 = cljs.core.next.call(null,seq__28186_28207__$1);
var G__28215 = null;
var G__28216 = (0);
var G__28217 = (0);
seq__28186_28197 = G__28214;
chunk__28187_28198 = G__28215;
count__28188_28199 = G__28216;
i__28189_28200 = G__28217;
continue;
}
} else {
}
}
break;
}

var seq__28190_28218 = cljs.core.seq.call(null,children);
var chunk__28191_28219 = null;
var count__28192_28220 = (0);
var i__28193_28221 = (0);
while(true){
if((i__28193_28221 < count__28192_28220)){
var ch_28222 = cljs.core._nth.call(null,chunk__28191_28219,i__28193_28221);
e.appendChild(ch_28222);

var G__28223 = seq__28190_28218;
var G__28224 = chunk__28191_28219;
var G__28225 = count__28192_28220;
var G__28226 = (i__28193_28221 + (1));
seq__28190_28218 = G__28223;
chunk__28191_28219 = G__28224;
count__28192_28220 = G__28225;
i__28193_28221 = G__28226;
continue;
} else {
var temp__4425__auto___28227 = cljs.core.seq.call(null,seq__28190_28218);
if(temp__4425__auto___28227){
var seq__28190_28228__$1 = temp__4425__auto___28227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28190_28228__$1)){
var c__17140__auto___28229 = cljs.core.chunk_first.call(null,seq__28190_28228__$1);
var G__28230 = cljs.core.chunk_rest.call(null,seq__28190_28228__$1);
var G__28231 = c__17140__auto___28229;
var G__28232 = cljs.core.count.call(null,c__17140__auto___28229);
var G__28233 = (0);
seq__28190_28218 = G__28230;
chunk__28191_28219 = G__28231;
count__28192_28220 = G__28232;
i__28193_28221 = G__28233;
continue;
} else {
var ch_28234 = cljs.core.first.call(null,seq__28190_28228__$1);
e.appendChild(ch_28234);

var G__28235 = cljs.core.next.call(null,seq__28190_28228__$1);
var G__28236 = null;
var G__28237 = (0);
var G__28238 = (0);
seq__28190_28218 = G__28235;
chunk__28191_28219 = G__28236;
count__28192_28220 = G__28237;
i__28193_28221 = G__28238;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28183){
var G__28184 = cljs.core.first.call(null,seq28183);
var seq28183__$1 = cljs.core.next.call(null,seq28183);
var G__28185 = cljs.core.first.call(null,seq28183__$1);
var seq28183__$2 = cljs.core.next.call(null,seq28183__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28184,G__28185,seq28183__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17250__auto__,prefer_table__17251__auto__,method_cache__17252__auto__,cached_hierarchy__17253__auto__,hierarchy__17254__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17250__auto__,prefer_table__17251__auto__,method_cache__17252__auto__,cached_hierarchy__17253__auto__,hierarchy__17254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17254__auto__,method_table__17250__auto__,prefer_table__17251__auto__,method_cache__17252__auto__,cached_hierarchy__17253__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28239 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28239.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28239.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28239.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28239);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28240,st_map){
var map__28245 = p__28240;
var map__28245__$1 = ((((!((map__28245 == null)))?((((map__28245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28245):map__28245);
var container_el = cljs.core.get.call(null,map__28245__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28245,map__28245__$1,container_el){
return (function (p__28247){
var vec__28248 = p__28247;
var k = cljs.core.nth.call(null,vec__28248,(0),null);
var v = cljs.core.nth.call(null,vec__28248,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28245,map__28245__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28249,dom_str){
var map__28252 = p__28249;
var map__28252__$1 = ((((!((map__28252 == null)))?((((map__28252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28252):map__28252);
var c = map__28252__$1;
var content_area_el = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28254){
var map__28257 = p__28254;
var map__28257__$1 = ((((!((map__28257 == null)))?((((map__28257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28257):map__28257);
var content_area_el = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__){
return (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (1))){
var inst_28285 = (state_28300[(7)]);
var inst_28285__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28286 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28287 = ["10px","10px","100%","68px","1.0"];
var inst_28288 = cljs.core.PersistentHashMap.fromArrays(inst_28286,inst_28287);
var inst_28289 = cljs.core.merge.call(null,inst_28288,style);
var inst_28290 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28285__$1,inst_28289);
var inst_28291 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28285__$1,msg);
var inst_28292 = cljs.core.async.timeout.call(null,(300));
var state_28300__$1 = (function (){var statearr_28302 = state_28300;
(statearr_28302[(7)] = inst_28285__$1);

(statearr_28302[(8)] = inst_28291);

(statearr_28302[(9)] = inst_28290);

return statearr_28302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(2),inst_28292);
} else {
if((state_val_28301 === (2))){
var inst_28285 = (state_28300[(7)]);
var inst_28294 = (state_28300[(2)]);
var inst_28295 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28296 = ["auto"];
var inst_28297 = cljs.core.PersistentHashMap.fromArrays(inst_28295,inst_28296);
var inst_28298 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28285,inst_28297);
var state_28300__$1 = (function (){var statearr_28303 = state_28300;
(statearr_28303[(10)] = inst_28294);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else {
return null;
}
}
});})(c__19710__auto__))
;
return ((function (switch__19645__auto__,c__19710__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto____0 = (function (){
var statearr_28307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28307[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto__);

(statearr_28307[(1)] = (1));

return statearr_28307;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto____1 = (function (state_28300){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_28300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e28308){if((e28308 instanceof Object)){
var ex__19649__auto__ = e28308;
var statearr_28309_28311 = state_28300;
(statearr_28309_28311[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28312 = state_28300;
state_28300 = G__28312;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__))
})();
var state__19712__auto__ = (function (){var statearr_28310 = f__19711__auto__.call(null);
(statearr_28310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_28310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__))
);

return c__19710__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28314 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28314,(0),null);
var ln = cljs.core.nth.call(null,vec__28314,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28317 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28317,(0),null);
var file_line = cljs.core.nth.call(null,vec__28317,(1),null);
var file_column = cljs.core.nth.call(null,vec__28317,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28317,file_name,file_line,file_column){
return (function (p1__28315_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28315_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28317,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16337__auto__ = file_line;
if(cljs.core.truth_(or__16337__auto__)){
return or__16337__auto__;
} else {
var and__16325__auto__ = cause;
if(cljs.core.truth_(and__16325__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16325__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28320 = figwheel.client.heads_up.ensure_container.call(null);
var map__28320__$1 = ((((!((map__28320 == null)))?((((map__28320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);
var content_area_el = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__){
return (function (state_28368){
var state_val_28369 = (state_28368[(1)]);
if((state_val_28369 === (1))){
var inst_28351 = (state_28368[(7)]);
var inst_28351__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28352 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28353 = ["0.0"];
var inst_28354 = cljs.core.PersistentHashMap.fromArrays(inst_28352,inst_28353);
var inst_28355 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28351__$1,inst_28354);
var inst_28356 = cljs.core.async.timeout.call(null,(300));
var state_28368__$1 = (function (){var statearr_28370 = state_28368;
(statearr_28370[(7)] = inst_28351__$1);

(statearr_28370[(8)] = inst_28355);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28368__$1,(2),inst_28356);
} else {
if((state_val_28369 === (2))){
var inst_28351 = (state_28368[(7)]);
var inst_28358 = (state_28368[(2)]);
var inst_28359 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28360 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28361 = cljs.core.PersistentHashMap.fromArrays(inst_28359,inst_28360);
var inst_28362 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28351,inst_28361);
var inst_28363 = cljs.core.async.timeout.call(null,(200));
var state_28368__$1 = (function (){var statearr_28371 = state_28368;
(statearr_28371[(9)] = inst_28362);

(statearr_28371[(10)] = inst_28358);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28368__$1,(3),inst_28363);
} else {
if((state_val_28369 === (3))){
var inst_28351 = (state_28368[(7)]);
var inst_28365 = (state_28368[(2)]);
var inst_28366 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28351,"");
var state_28368__$1 = (function (){var statearr_28372 = state_28368;
(statearr_28372[(11)] = inst_28365);

return statearr_28372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28368__$1,inst_28366);
} else {
return null;
}
}
}
});})(c__19710__auto__))
;
return ((function (switch__19645__auto__,c__19710__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19646__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19646__auto____0 = (function (){
var statearr_28376 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28376[(0)] = figwheel$client$heads_up$clear_$_state_machine__19646__auto__);

(statearr_28376[(1)] = (1));

return statearr_28376;
});
var figwheel$client$heads_up$clear_$_state_machine__19646__auto____1 = (function (state_28368){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_28368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e28377){if((e28377 instanceof Object)){
var ex__19649__auto__ = e28377;
var statearr_28378_28380 = state_28368;
(statearr_28378_28380[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28381 = state_28368;
state_28368 = G__28381;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19646__auto__ = function(state_28368){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19646__auto____1.call(this,state_28368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19646__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19646__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__))
})();
var state__19712__auto__ = (function (){var statearr_28379 = f__19711__auto__.call(null);
(statearr_28379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_28379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__))
);

return c__19710__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19710__auto__){
return (function (){
var f__19711__auto__ = (function (){var switch__19645__auto__ = ((function (c__19710__auto__){
return (function (state_28413){
var state_val_28414 = (state_28413[(1)]);
if((state_val_28414 === (1))){
var inst_28403 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(2),inst_28403);
} else {
if((state_val_28414 === (2))){
var inst_28405 = (state_28413[(2)]);
var inst_28406 = cljs.core.async.timeout.call(null,(400));
var state_28413__$1 = (function (){var statearr_28415 = state_28413;
(statearr_28415[(7)] = inst_28405);

return statearr_28415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(3),inst_28406);
} else {
if((state_val_28414 === (3))){
var inst_28408 = (state_28413[(2)]);
var inst_28409 = figwheel.client.heads_up.clear.call(null);
var state_28413__$1 = (function (){var statearr_28416 = state_28413;
(statearr_28416[(8)] = inst_28408);

return statearr_28416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(4),inst_28409);
} else {
if((state_val_28414 === (4))){
var inst_28411 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28413__$1,inst_28411);
} else {
return null;
}
}
}
}
});})(c__19710__auto__))
;
return ((function (switch__19645__auto__,c__19710__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto____0 = (function (){
var statearr_28420 = [null,null,null,null,null,null,null,null,null];
(statearr_28420[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto__);

(statearr_28420[(1)] = (1));

return statearr_28420;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto____1 = (function (state_28413){
while(true){
var ret_value__19647__auto__ = (function (){try{while(true){
var result__19648__auto__ = switch__19645__auto__.call(null,state_28413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19648__auto__;
}
break;
}
}catch (e28421){if((e28421 instanceof Object)){
var ex__19649__auto__ = e28421;
var statearr_28422_28424 = state_28413;
(statearr_28422_28424[(5)] = ex__19649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28425 = state_28413;
state_28413 = G__28425;
continue;
} else {
return ret_value__19647__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto__ = function(state_28413){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto____1.call(this,state_28413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19646__auto__;
})()
;})(switch__19645__auto__,c__19710__auto__))
})();
var state__19712__auto__ = (function (){var statearr_28423 = f__19711__auto__.call(null);
(statearr_28423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19710__auto__);

return statearr_28423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19712__auto__);
});})(c__19710__auto__))
);

return c__19710__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1442160860109