// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17559__auto__ = [];
var len__17552__auto___28148 = arguments.length;
var i__17553__auto___28149 = (0);
while(true){
if((i__17553__auto___28149 < len__17552__auto___28148)){
args__17559__auto__.push((arguments[i__17553__auto___28149]));

var G__28150 = (i__17553__auto___28149 + (1));
i__17553__auto___28149 = G__28150;
continue;
} else {
}
break;
}

var argseq__17560__auto__ = ((((2) < args__17559__auto__.length))?(new cljs.core.IndexedSeq(args__17559__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17560__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28140_28151 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28141_28152 = null;
var count__28142_28153 = (0);
var i__28143_28154 = (0);
while(true){
if((i__28143_28154 < count__28142_28153)){
var k_28155 = cljs.core._nth.call(null,chunk__28141_28152,i__28143_28154);
e.setAttribute(cljs.core.name.call(null,k_28155),cljs.core.get.call(null,attrs,k_28155));

var G__28156 = seq__28140_28151;
var G__28157 = chunk__28141_28152;
var G__28158 = count__28142_28153;
var G__28159 = (i__28143_28154 + (1));
seq__28140_28151 = G__28156;
chunk__28141_28152 = G__28157;
count__28142_28153 = G__28158;
i__28143_28154 = G__28159;
continue;
} else {
var temp__4413__auto___28160 = cljs.core.seq.call(null,seq__28140_28151);
if(temp__4413__auto___28160){
var seq__28140_28161__$1 = temp__4413__auto___28160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28140_28161__$1)){
var c__17297__auto___28162 = cljs.core.chunk_first.call(null,seq__28140_28161__$1);
var G__28163 = cljs.core.chunk_rest.call(null,seq__28140_28161__$1);
var G__28164 = c__17297__auto___28162;
var G__28165 = cljs.core.count.call(null,c__17297__auto___28162);
var G__28166 = (0);
seq__28140_28151 = G__28163;
chunk__28141_28152 = G__28164;
count__28142_28153 = G__28165;
i__28143_28154 = G__28166;
continue;
} else {
var k_28167 = cljs.core.first.call(null,seq__28140_28161__$1);
e.setAttribute(cljs.core.name.call(null,k_28167),cljs.core.get.call(null,attrs,k_28167));

var G__28168 = cljs.core.next.call(null,seq__28140_28161__$1);
var G__28169 = null;
var G__28170 = (0);
var G__28171 = (0);
seq__28140_28151 = G__28168;
chunk__28141_28152 = G__28169;
count__28142_28153 = G__28170;
i__28143_28154 = G__28171;
continue;
}
} else {
}
}
break;
}

var seq__28144_28172 = cljs.core.seq.call(null,children);
var chunk__28145_28173 = null;
var count__28146_28174 = (0);
var i__28147_28175 = (0);
while(true){
if((i__28147_28175 < count__28146_28174)){
var ch_28176 = cljs.core._nth.call(null,chunk__28145_28173,i__28147_28175);
e.appendChild(ch_28176);

var G__28177 = seq__28144_28172;
var G__28178 = chunk__28145_28173;
var G__28179 = count__28146_28174;
var G__28180 = (i__28147_28175 + (1));
seq__28144_28172 = G__28177;
chunk__28145_28173 = G__28178;
count__28146_28174 = G__28179;
i__28147_28175 = G__28180;
continue;
} else {
var temp__4413__auto___28181 = cljs.core.seq.call(null,seq__28144_28172);
if(temp__4413__auto___28181){
var seq__28144_28182__$1 = temp__4413__auto___28181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28144_28182__$1)){
var c__17297__auto___28183 = cljs.core.chunk_first.call(null,seq__28144_28182__$1);
var G__28184 = cljs.core.chunk_rest.call(null,seq__28144_28182__$1);
var G__28185 = c__17297__auto___28183;
var G__28186 = cljs.core.count.call(null,c__17297__auto___28183);
var G__28187 = (0);
seq__28144_28172 = G__28184;
chunk__28145_28173 = G__28185;
count__28146_28174 = G__28186;
i__28147_28175 = G__28187;
continue;
} else {
var ch_28188 = cljs.core.first.call(null,seq__28144_28182__$1);
e.appendChild(ch_28188);

var G__28189 = cljs.core.next.call(null,seq__28144_28182__$1);
var G__28190 = null;
var G__28191 = (0);
var G__28192 = (0);
seq__28144_28172 = G__28189;
chunk__28145_28173 = G__28190;
count__28146_28174 = G__28191;
i__28147_28175 = G__28192;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28137){
var G__28138 = cljs.core.first.call(null,seq28137);
var seq28137__$1 = cljs.core.next.call(null,seq28137);
var G__28139 = cljs.core.first.call(null,seq28137__$1);
var seq28137__$2 = cljs.core.next.call(null,seq28137__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28138,G__28139,seq28137__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17407__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17408__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17411__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17407__auto__,prefer_table__17408__auto__,method_cache__17409__auto__,cached_hierarchy__17410__auto__,hierarchy__17411__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17407__auto__,prefer_table__17408__auto__,method_cache__17409__auto__,cached_hierarchy__17410__auto__,hierarchy__17411__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17411__auto__,method_table__17407__auto__,prefer_table__17408__auto__,method_cache__17409__auto__,cached_hierarchy__17410__auto__));
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
var el_28193 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28193.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28193.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28193.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28193);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28194,st_map){
var map__28199 = p__28194;
var map__28199__$1 = ((((!((map__28199 == null)))?((((map__28199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28199):map__28199);
var container_el = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28199,map__28199__$1,container_el){
return (function (p__28201){
var vec__28202 = p__28201;
var k = cljs.core.nth.call(null,vec__28202,(0),null);
var v = cljs.core.nth.call(null,vec__28202,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28199,map__28199__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28203,dom_str){
var map__28206 = p__28203;
var map__28206__$1 = ((((!((map__28206 == null)))?((((map__28206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28206):map__28206);
var c = map__28206__$1;
var content_area_el = cljs.core.get.call(null,map__28206__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28208){
var map__28211 = p__28208;
var map__28211__$1 = ((((!((map__28211 == null)))?((((map__28211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28211):map__28211);
var content_area_el = cljs.core.get.call(null,map__28211__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_28254){
var state_val_28255 = (state_28254[(1)]);
if((state_val_28255 === (1))){
var inst_28239 = (state_28254[(7)]);
var inst_28239__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28240 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28241 = ["10px","10px","100%","68px","1.0"];
var inst_28242 = cljs.core.PersistentHashMap.fromArrays(inst_28240,inst_28241);
var inst_28243 = cljs.core.merge.call(null,inst_28242,style);
var inst_28244 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28239__$1,inst_28243);
var inst_28245 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28239__$1,msg);
var inst_28246 = cljs.core.async.timeout.call(null,(300));
var state_28254__$1 = (function (){var statearr_28256 = state_28254;
(statearr_28256[(7)] = inst_28239__$1);

(statearr_28256[(8)] = inst_28244);

(statearr_28256[(9)] = inst_28245);

return statearr_28256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(2),inst_28246);
} else {
if((state_val_28255 === (2))){
var inst_28239 = (state_28254[(7)]);
var inst_28248 = (state_28254[(2)]);
var inst_28249 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28250 = ["auto"];
var inst_28251 = cljs.core.PersistentHashMap.fromArrays(inst_28249,inst_28250);
var inst_28252 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28239,inst_28251);
var state_28254__$1 = (function (){var statearr_28257 = state_28254;
(statearr_28257[(10)] = inst_28248);

return statearr_28257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28254__$1,inst_28252);
} else {
return null;
}
}
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto____0 = (function (){
var statearr_28261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28261[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto__);

(statearr_28261[(1)] = (1));

return statearr_28261;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto____1 = (function (state_28254){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_28254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e28262){if((e28262 instanceof Object)){
var ex__19873__auto__ = e28262;
var statearr_28263_28265 = state_28254;
(statearr_28263_28265[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28266 = state_28254;
state_28254 = G__28266;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto__ = function(state_28254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto____1.call(this,state_28254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_28264 = f__19935__auto__.call(null);
(statearr_28264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_28264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
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
var temp__4411__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4411__auto__)){
var vec__28268 = temp__4411__auto__;
var f = cljs.core.nth.call(null,vec__28268,(0),null);
var ln = cljs.core.nth.call(null,vec__28268,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28271 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28271,(0),null);
var file_line = cljs.core.nth.call(null,vec__28271,(1),null);
var file_column = cljs.core.nth.call(null,vec__28271,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28271,file_name,file_line,file_column){
return (function (p1__28269_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28269_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28271,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16513__auto__ = file_line;
if(cljs.core.truth_(or__16513__auto__)){
return or__16513__auto__;
} else {
var and__16501__auto__ = cause;
if(cljs.core.truth_(and__16501__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16501__auto__;
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
var map__28274 = figwheel.client.heads_up.ensure_container.call(null);
var map__28274__$1 = ((((!((map__28274 == null)))?((((map__28274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28274):map__28274);
var content_area_el = cljs.core.get.call(null,map__28274__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_28322){
var state_val_28323 = (state_28322[(1)]);
if((state_val_28323 === (1))){
var inst_28305 = (state_28322[(7)]);
var inst_28305__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28306 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28307 = ["0.0"];
var inst_28308 = cljs.core.PersistentHashMap.fromArrays(inst_28306,inst_28307);
var inst_28309 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28305__$1,inst_28308);
var inst_28310 = cljs.core.async.timeout.call(null,(300));
var state_28322__$1 = (function (){var statearr_28324 = state_28322;
(statearr_28324[(7)] = inst_28305__$1);

(statearr_28324[(8)] = inst_28309);

return statearr_28324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28322__$1,(2),inst_28310);
} else {
if((state_val_28323 === (2))){
var inst_28305 = (state_28322[(7)]);
var inst_28312 = (state_28322[(2)]);
var inst_28313 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28314 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28315 = cljs.core.PersistentHashMap.fromArrays(inst_28313,inst_28314);
var inst_28316 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28305,inst_28315);
var inst_28317 = cljs.core.async.timeout.call(null,(200));
var state_28322__$1 = (function (){var statearr_28325 = state_28322;
(statearr_28325[(9)] = inst_28312);

(statearr_28325[(10)] = inst_28316);

return statearr_28325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28322__$1,(3),inst_28317);
} else {
if((state_val_28323 === (3))){
var inst_28305 = (state_28322[(7)]);
var inst_28319 = (state_28322[(2)]);
var inst_28320 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28305,"");
var state_28322__$1 = (function (){var statearr_28326 = state_28322;
(statearr_28326[(11)] = inst_28319);

return statearr_28326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28322__$1,inst_28320);
} else {
return null;
}
}
}
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19870__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19870__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28330[(0)] = figwheel$client$heads_up$clear_$_state_machine__19870__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var figwheel$client$heads_up$clear_$_state_machine__19870__auto____1 = (function (state_28322){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_28322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object)){
var ex__19873__auto__ = e28331;
var statearr_28332_28334 = state_28322;
(statearr_28332_28334[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28335 = state_28322;
state_28322 = G__28335;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19870__auto__ = function(state_28322){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19870__auto____1.call(this,state_28322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19870__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19870__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_28333 = f__19935__auto__.call(null);
(statearr_28333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19934__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19934__auto__){
return (function (){
var f__19935__auto__ = (function (){var switch__19869__auto__ = ((function (c__19934__auto__){
return (function (state_28367){
var state_val_28368 = (state_28367[(1)]);
if((state_val_28368 === (1))){
var inst_28357 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28367__$1 = state_28367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28367__$1,(2),inst_28357);
} else {
if((state_val_28368 === (2))){
var inst_28359 = (state_28367[(2)]);
var inst_28360 = cljs.core.async.timeout.call(null,(400));
var state_28367__$1 = (function (){var statearr_28369 = state_28367;
(statearr_28369[(7)] = inst_28359);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28367__$1,(3),inst_28360);
} else {
if((state_val_28368 === (3))){
var inst_28362 = (state_28367[(2)]);
var inst_28363 = figwheel.client.heads_up.clear.call(null);
var state_28367__$1 = (function (){var statearr_28370 = state_28367;
(statearr_28370[(8)] = inst_28362);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28367__$1,(4),inst_28363);
} else {
if((state_val_28368 === (4))){
var inst_28365 = (state_28367[(2)]);
var state_28367__$1 = state_28367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28367__$1,inst_28365);
} else {
return null;
}
}
}
}
});})(c__19934__auto__))
;
return ((function (switch__19869__auto__,c__19934__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto____0 = (function (){
var statearr_28374 = [null,null,null,null,null,null,null,null,null];
(statearr_28374[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto__);

(statearr_28374[(1)] = (1));

return statearr_28374;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto____1 = (function (state_28367){
while(true){
var ret_value__19871__auto__ = (function (){try{while(true){
var result__19872__auto__ = switch__19869__auto__.call(null,state_28367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19872__auto__;
}
break;
}
}catch (e28375){if((e28375 instanceof Object)){
var ex__19873__auto__ = e28375;
var statearr_28376_28378 = state_28367;
(statearr_28376_28378[(5)] = ex__19873__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28379 = state_28367;
state_28367 = G__28379;
continue;
} else {
return ret_value__19871__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto__ = function(state_28367){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto____1.call(this,state_28367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19870__auto__;
})()
;})(switch__19869__auto__,c__19934__auto__))
})();
var state__19936__auto__ = (function (){var statearr_28377 = f__19935__auto__.call(null);
(statearr_28377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19934__auto__);

return statearr_28377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19936__auto__);
});})(c__19934__auto__))
);

return c__19934__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1438461405606