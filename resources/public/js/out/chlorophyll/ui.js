// Compiled by ClojureScript 1.7.28 {}
goog.provide('chlorophyll.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chlorophyll.atom');
goog.require('chlorophyll.style');
goog.require('chlorophyll.ux');
/**
 * A tile component.
 */
chlorophyll.ui.tile = (function chlorophyll$ui$tile(tile__$1){
var id = cljs.core.get.call(null,tile__$1,(0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.call(null,chlorophyll.style.reset,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"color","color",1011675173),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.8], null)),new cljs.core.Keyword(null,"background-color","background-color",570434026),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"random","random",-557811113)], null)),new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id){
return (function (event){
chlorophyll.ux.select_tile.call(null,id);

return null;
});})(id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),chlorophyll.style.font.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"big","big",903550151)], null)),new cljs.core.Keyword(null,"color","color",1011675173),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.8], null)),new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),chlorophyll.atom.get_set_tile.call(null,id,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id){
return (function (e){
var v = e.target.value;
chlorophyll.ux.change_tile.call(null,id);

return chlorophyll.atom.get_set_tile.call(null,id,new cljs.core.Keyword(null,"title","title",636505583),v);
});})(id))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),chlorophyll.style.font.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)),new cljs.core.Keyword(null,"color","color",1011675173),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.7], null)),new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),chlorophyll.atom.get_set_tile.call(null,id,new cljs.core.Keyword(null,"content","content",15833224)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id){
return (function (e){
var v = e.target.value;
chlorophyll.ux.change_tile.call(null,id);

return chlorophyll.atom.get_set_tile.call(null,id,new cljs.core.Keyword(null,"content","content",15833224),v);
});})(id))
], null)], null)], null);
});
/**
 * A button to add a new tile.
 */
chlorophyll.ui.add_tile = (function chlorophyll$ui$add_tile(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.call(null,chlorophyll.style.reset,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.7], null)),new cljs.core.Keyword(null,"background-color","background-color",570434026),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"darken","darken",1770242949),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.4], null)),new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),chlorophyll.style.font.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null))], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
chlorophyll.ux.add_new_tile.call(null);

chlorophyll.atom.add_tile.call(null,"Title","Content");

return null;
})], null),"Add a new tile"], null);
});
/**
 * Core app component.
 */
chlorophyll.ui.app = (function chlorophyll$ui$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.conj.call(null,chlorophyll.style.reset,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),chlorophyll.style.rgba.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"darken","darken",1770242949),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),.005], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chlorophyll.ui.add_tile], null),cljs.core.doall.call(null,cljs.core.map.call(null,chlorophyll.ui.tile,cljs.core.reverse.call(null,cljs.core.deref.call(null,chlorophyll.atom.tiles))))], null);
});

//# sourceMappingURL=ui.js.map?rel=1439673455437