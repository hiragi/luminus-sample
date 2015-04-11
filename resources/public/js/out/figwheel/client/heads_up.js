// Compiled by ClojureScript 0.0-3178 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__25966__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33766_33774 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33767_33775 = null;
var count__33768_33776 = (0);
var i__33769_33777 = (0);
while(true){
if((i__33769_33777 < count__33768_33776)){
var k_33778 = cljs.core._nth.call(null,chunk__33767_33775,i__33769_33777);
e.setAttribute(cljs.core.name.call(null,k_33778),cljs.core.get.call(null,attrs,k_33778));

var G__33779 = seq__33766_33774;
var G__33780 = chunk__33767_33775;
var G__33781 = count__33768_33776;
var G__33782 = (i__33769_33777 + (1));
seq__33766_33774 = G__33779;
chunk__33767_33775 = G__33780;
count__33768_33776 = G__33781;
i__33769_33777 = G__33782;
continue;
} else {
var temp__4126__auto___33783 = cljs.core.seq.call(null,seq__33766_33774);
if(temp__4126__auto___33783){
var seq__33766_33784__$1 = temp__4126__auto___33783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33766_33784__$1)){
var c__25711__auto___33785 = cljs.core.chunk_first.call(null,seq__33766_33784__$1);
var G__33786 = cljs.core.chunk_rest.call(null,seq__33766_33784__$1);
var G__33787 = c__25711__auto___33785;
var G__33788 = cljs.core.count.call(null,c__25711__auto___33785);
var G__33789 = (0);
seq__33766_33774 = G__33786;
chunk__33767_33775 = G__33787;
count__33768_33776 = G__33788;
i__33769_33777 = G__33789;
continue;
} else {
var k_33790 = cljs.core.first.call(null,seq__33766_33784__$1);
e.setAttribute(cljs.core.name.call(null,k_33790),cljs.core.get.call(null,attrs,k_33790));

var G__33791 = cljs.core.next.call(null,seq__33766_33784__$1);
var G__33792 = null;
var G__33793 = (0);
var G__33794 = (0);
seq__33766_33774 = G__33791;
chunk__33767_33775 = G__33792;
count__33768_33776 = G__33793;
i__33769_33777 = G__33794;
continue;
}
} else {
}
}
break;
}

var seq__33770_33795 = cljs.core.seq.call(null,children);
var chunk__33771_33796 = null;
var count__33772_33797 = (0);
var i__33773_33798 = (0);
while(true){
if((i__33773_33798 < count__33772_33797)){
var ch_33799 = cljs.core._nth.call(null,chunk__33771_33796,i__33773_33798);
e.appendChild(ch_33799);

var G__33800 = seq__33770_33795;
var G__33801 = chunk__33771_33796;
var G__33802 = count__33772_33797;
var G__33803 = (i__33773_33798 + (1));
seq__33770_33795 = G__33800;
chunk__33771_33796 = G__33801;
count__33772_33797 = G__33802;
i__33773_33798 = G__33803;
continue;
} else {
var temp__4126__auto___33804 = cljs.core.seq.call(null,seq__33770_33795);
if(temp__4126__auto___33804){
var seq__33770_33805__$1 = temp__4126__auto___33804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33770_33805__$1)){
var c__25711__auto___33806 = cljs.core.chunk_first.call(null,seq__33770_33805__$1);
var G__33807 = cljs.core.chunk_rest.call(null,seq__33770_33805__$1);
var G__33808 = c__25711__auto___33806;
var G__33809 = cljs.core.count.call(null,c__25711__auto___33806);
var G__33810 = (0);
seq__33770_33795 = G__33807;
chunk__33771_33796 = G__33808;
count__33772_33797 = G__33809;
i__33773_33798 = G__33810;
continue;
} else {
var ch_33811 = cljs.core.first.call(null,seq__33770_33805__$1);
e.appendChild(ch_33811);

var G__33812 = cljs.core.next.call(null,seq__33770_33805__$1);
var G__33813 = null;
var G__33814 = (0);
var G__33815 = (0);
seq__33770_33795 = G__33812;
chunk__33771_33796 = G__33813;
count__33772_33797 = G__33814;
i__33773_33798 = G__33815;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq33763){
var G__33764 = cljs.core.first.call(null,seq33763);
var seq33763__$1 = cljs.core.next.call(null,seq33763);
var G__33765 = cljs.core.first.call(null,seq33763__$1);
var seq33763__$2 = cljs.core.next.call(null,seq33763__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__33764,G__33765,seq33763__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25825__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__,hierarchy__25825__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25825__auto__,method_table__25821__auto__,prefer_table__25822__auto__,method_cache__25823__auto__,cached_hierarchy__25824__auto__));
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
var el_33816 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33816.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33816.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_33816.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33816);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__33817,st_map){
var map__33821 = p__33817;
var map__33821__$1 = ((cljs.core.seq_QMARK_.call(null,map__33821))?cljs.core.apply.call(null,cljs.core.hash_map,map__33821):map__33821);
var container_el = cljs.core.get.call(null,map__33821__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33821,map__33821__$1,container_el){
return (function (p__33822){
var vec__33823 = p__33822;
var k = cljs.core.nth.call(null,vec__33823,(0),null);
var v = cljs.core.nth.call(null,vec__33823,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33821,map__33821__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33824,dom_str){
var map__33826 = p__33824;
var map__33826__$1 = ((cljs.core.seq_QMARK_.call(null,map__33826))?cljs.core.apply.call(null,cljs.core.hash_map,map__33826):map__33826);
var c = map__33826__$1;
var content_area_el = cljs.core.get.call(null,map__33826__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33827){
var map__33829 = p__33827;
var map__33829__$1 = ((cljs.core.seq_QMARK_.call(null,map__33829))?cljs.core.apply.call(null,cljs.core.hash_map,map__33829):map__33829);
var content_area_el = cljs.core.get.call(null,map__33829__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__){
return (function (state_33871){
var state_val_33872 = (state_33871[(1)]);
if((state_val_33872 === (2))){
var inst_33856 = (state_33871[(7)]);
var inst_33865 = (state_33871[(2)]);
var inst_33866 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33867 = ["auto"];
var inst_33868 = cljs.core.PersistentHashMap.fromArrays(inst_33866,inst_33867);
var inst_33869 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33856,inst_33868);
var state_33871__$1 = (function (){var statearr_33873 = state_33871;
(statearr_33873[(8)] = inst_33865);

return statearr_33873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33871__$1,inst_33869);
} else {
if((state_val_33872 === (1))){
var inst_33856 = (state_33871[(7)]);
var inst_33856__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33857 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33858 = ["10px","10px","100%","68px","1.0"];
var inst_33859 = cljs.core.PersistentHashMap.fromArrays(inst_33857,inst_33858);
var inst_33860 = cljs.core.merge.call(null,inst_33859,style);
var inst_33861 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33856__$1,inst_33860);
var inst_33862 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33856__$1,msg);
var inst_33863 = cljs.core.async.timeout.call(null,(300));
var state_33871__$1 = (function (){var statearr_33874 = state_33871;
(statearr_33874[(9)] = inst_33861);

(statearr_33874[(7)] = inst_33856__$1);

(statearr_33874[(10)] = inst_33862);

return statearr_33874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33871__$1,(2),inst_33863);
} else {
return null;
}
}
});})(c__28196__auto__))
;
return ((function (switch__28134__auto__,c__28196__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto____0 = (function (){
var statearr_33878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33878[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto__);

(statearr_33878[(1)] = (1));

return statearr_33878;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto____1 = (function (state_33871){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_33871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e33879){if((e33879 instanceof Object)){
var ex__28138__auto__ = e33879;
var statearr_33880_33882 = state_33871;
(statearr_33880_33882[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33883 = state_33871;
state_33871 = G__33883;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto__ = function(state_33871){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto____1.call(this,state_33871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__))
})();
var state__28198__auto__ = (function (){var statearr_33881 = f__28197__auto__.call(null);
(statearr_33881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__))
);

return c__28196__auto__;
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
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__33885 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__33885,(0),null);
var ln = cljs.core.nth.call(null,vec__33885,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__33888 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__33888,(0),null);
var file_line = cljs.core.nth.call(null,vec__33888,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33888,file_name,file_line){
return (function (p1__33886_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__33886_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__33888,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__33890 = figwheel.client.heads_up.ensure_container.call(null);
var map__33890__$1 = ((cljs.core.seq_QMARK_.call(null,map__33890))?cljs.core.apply.call(null,cljs.core.hash_map,map__33890):map__33890);
var content_area_el = cljs.core.get.call(null,map__33890__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__){
return (function (state_33937){
var state_val_33938 = (state_33937[(1)]);
if((state_val_33938 === (3))){
var inst_33920 = (state_33937[(7)]);
var inst_33934 = (state_33937[(2)]);
var inst_33935 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33920,"");
var state_33937__$1 = (function (){var statearr_33939 = state_33937;
(statearr_33939[(8)] = inst_33934);

return statearr_33939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33937__$1,inst_33935);
} else {
if((state_val_33938 === (2))){
var inst_33920 = (state_33937[(7)]);
var inst_33927 = (state_33937[(2)]);
var inst_33928 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33929 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33930 = cljs.core.PersistentHashMap.fromArrays(inst_33928,inst_33929);
var inst_33931 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33920,inst_33930);
var inst_33932 = cljs.core.async.timeout.call(null,(200));
var state_33937__$1 = (function (){var statearr_33940 = state_33937;
(statearr_33940[(9)] = inst_33931);

(statearr_33940[(10)] = inst_33927);

return statearr_33940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33937__$1,(3),inst_33932);
} else {
if((state_val_33938 === (1))){
var inst_33920 = (state_33937[(7)]);
var inst_33920__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33921 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33922 = ["0.0"];
var inst_33923 = cljs.core.PersistentHashMap.fromArrays(inst_33921,inst_33922);
var inst_33924 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33920__$1,inst_33923);
var inst_33925 = cljs.core.async.timeout.call(null,(300));
var state_33937__$1 = (function (){var statearr_33941 = state_33937;
(statearr_33941[(7)] = inst_33920__$1);

(statearr_33941[(11)] = inst_33924);

return statearr_33941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33937__$1,(2),inst_33925);
} else {
return null;
}
}
}
});})(c__28196__auto__))
;
return ((function (switch__28134__auto__,c__28196__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28135__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28135__auto____0 = (function (){
var statearr_33945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33945[(0)] = figwheel$client$heads_up$clear_$_state_machine__28135__auto__);

(statearr_33945[(1)] = (1));

return statearr_33945;
});
var figwheel$client$heads_up$clear_$_state_machine__28135__auto____1 = (function (state_33937){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_33937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e33946){if((e33946 instanceof Object)){
var ex__28138__auto__ = e33946;
var statearr_33947_33949 = state_33937;
(statearr_33947_33949[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33950 = state_33937;
state_33937 = G__33950;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28135__auto__ = function(state_33937){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28135__auto____1.call(this,state_33937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28135__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28135__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__))
})();
var state__28198__auto__ = (function (){var statearr_33948 = f__28197__auto__.call(null);
(statearr_33948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_33948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__))
);

return c__28196__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28196__auto__){
return (function (){
var f__28197__auto__ = (function (){var switch__28134__auto__ = ((function (c__28196__auto__){
return (function (state_33982){
var state_val_33983 = (state_33982[(1)]);
if((state_val_33983 === (4))){
var inst_33980 = (state_33982[(2)]);
var state_33982__$1 = state_33982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33982__$1,inst_33980);
} else {
if((state_val_33983 === (3))){
var inst_33977 = (state_33982[(2)]);
var inst_33978 = figwheel.client.heads_up.clear.call(null);
var state_33982__$1 = (function (){var statearr_33984 = state_33982;
(statearr_33984[(7)] = inst_33977);

return statearr_33984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33982__$1,(4),inst_33978);
} else {
if((state_val_33983 === (2))){
var inst_33974 = (state_33982[(2)]);
var inst_33975 = cljs.core.async.timeout.call(null,(400));
var state_33982__$1 = (function (){var statearr_33985 = state_33982;
(statearr_33985[(8)] = inst_33974);

return statearr_33985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33982__$1,(3),inst_33975);
} else {
if((state_val_33983 === (1))){
var inst_33972 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33982__$1 = state_33982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33982__$1,(2),inst_33972);
} else {
return null;
}
}
}
}
});})(c__28196__auto__))
;
return ((function (switch__28134__auto__,c__28196__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto____0 = (function (){
var statearr_33989 = [null,null,null,null,null,null,null,null,null];
(statearr_33989[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto__);

(statearr_33989[(1)] = (1));

return statearr_33989;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto____1 = (function (state_33982){
while(true){
var ret_value__28136__auto__ = (function (){try{while(true){
var result__28137__auto__ = switch__28134__auto__.call(null,state_33982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28137__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28137__auto__;
}
break;
}
}catch (e33990){if((e33990 instanceof Object)){
var ex__28138__auto__ = e33990;
var statearr_33991_33993 = state_33982;
(statearr_33991_33993[(5)] = ex__28138__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28136__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33994 = state_33982;
state_33982 = G__33994;
continue;
} else {
return ret_value__28136__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto__ = function(state_33982){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto____1.call(this,state_33982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28135__auto__;
})()
;})(switch__28134__auto__,c__28196__auto__))
})();
var state__28198__auto__ = (function (){var statearr_33992 = f__28197__auto__.call(null);
(statearr_33992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28196__auto__);

return statearr_33992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28198__auto__);
});})(c__28196__auto__))
);

return c__28196__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map