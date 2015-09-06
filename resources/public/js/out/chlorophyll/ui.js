// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.style');
goog.require('chlorophyll.ux');
/**
 * A tile input component
 */
chlorophyll.ui.tile_input = (function chlorophyll$ui$tile_input(id,element,text_size,alpha){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),chlorophyll.style.font.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),text_size], null)),new cljs.core.Keyword(null,"color","color",1011675173),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),alpha], null)),new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"max-length","max-length",-254826109),(50),new cljs.core.Keyword(null,"default-value","default-value",232220170),chlorophyll.atom.get_set_tile.call(null,id,cljs.core.keyword.call(null,element)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
chlorophyll.ux.change_tile.call(null,id);

return chlorophyll.atom.get_set_tile.call(null,id,cljs.core.keyword.call(null,element),v);
})], null)], null);
});
/**
 * A tile component.
 */
chlorophyll.ui.tile = (function chlorophyll$ui$tile(tile__$1){
var id = cljs.core.get.call(null,tile__$1,(0));
var bg = chlorophyll.atom.get_set_tile.call(null,id,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.call(null,chlorophyll.style.reset,chlorophyll.style.padding,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"color","color",1011675173),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.8], null)),new cljs.core.Keyword(null,"background-color","background-color",570434026),(((bg == null))?(function (){var rand = chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"random","random",-557811113)], null));
chlorophyll.atom.get_set_tile.call(null,id,new cljs.core.Keyword(null,"color","color",1011675173),rand.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158)));

return rand.call(null,new cljs.core.Keyword(null,"color","color",1011675173));
})():[cljs.core.str("rgba("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (id,bg){
return (function (v){
return [cljs.core.str(v),cljs.core.str(",")].join('');
});})(id,bg))
,bg))),cljs.core.str("1)")].join('')
),new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 2rem"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,bg){
return (function (event){
chlorophyll.ux.select_tile.call(null,id);

return null;
});})(id,bg))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.tile_input,id,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"big","big",903550151),.8], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.tile_input,id,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"small","small",2133478704),.7], null)], null);
});
/**
 * A button to add a new tile.
 */
chlorophyll.ui.add_tile = (function chlorophyll$ui$add_tile(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.call(null,chlorophyll.style.reset,chlorophyll.style.padding,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.7], null)),new cljs.core.Keyword(null,"background-color","background-color",570434026),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"darken","darken",1770242949),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.4], null)),new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 2rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),chlorophyll.style.font.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
chlorophyll.ux.add_new_tile.call(null);

chlorophyll.atom.add_tile.call(null,"Title","Content");

return null;
})], null),"Add a new tile"], null);
});
/**
 * Core app component.
 */
chlorophyll.ui.app = (function chlorophyll$ui$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.call(null,chlorophyll.style.reset,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"darken","darken",1770242949),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.005], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.add_tile], null),cljs.core.doall.call(null,cljs.core.map.call(null,chlorophyll.ui.tile,cljs.core.reverse.call(null,cljs.core.deref.call(null,chlorophyll.atom.tiles))))], null);
});

//# sourceMappingURL=ui.js.map?rel=1441456869581