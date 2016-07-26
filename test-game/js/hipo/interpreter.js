// Compiled by ClojureScript 1.9.89 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__13800){
var map__13803 = p__13800;
var map__13803__$1 = ((((!((map__13803 == null)))?((((map__13803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13803):map__13803);
var m = map__13803__$1;
var interceptors = cljs.core.get.call(null,map__13803__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))){
var b__13660__auto__ = ((function (en,temp__4655__auto__,map__13803,map__13803__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___13805__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___13805__$1)){
var l_13806 = temp__4655__auto___13805__$1;
el.removeEventListener(en,l_13806);
} else {
}

var temp__4657__auto__ = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__13803,map__13803__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__13660__auto__ = ((function (temp__4655__auto__,map__13803,map__13803__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__13803,map__13803__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4655__auto___13807 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___13807)){
var h_13808 = temp__4655__auto___13807;
el.appendChild(hipo.interpreter.create_child.call(null,h_13808,m));
} else {
}

var G__13809 = cljs.core.rest.call(null,v__$1);
v__$1 = G__13809;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__13820_13830 = cljs.core.seq.call(null,attrs);
var chunk__13821_13831 = null;
var count__13822_13832 = (0);
var i__13823_13833 = (0);
while(true){
if((i__13823_13833 < count__13822_13832)){
var vec__13824_13834 = cljs.core._nth.call(null,chunk__13821_13831,i__13823_13833);
var sok_13835 = cljs.core.nth.call(null,vec__13824_13834,(0),null);
var v_13836 = cljs.core.nth.call(null,vec__13824_13834,(1),null);
if(cljs.core.truth_(v_13836)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_13835,null,v_13836,m);
} else {
}

var G__13837 = seq__13820_13830;
var G__13838 = chunk__13821_13831;
var G__13839 = count__13822_13832;
var G__13840 = (i__13823_13833 + (1));
seq__13820_13830 = G__13837;
chunk__13821_13831 = G__13838;
count__13822_13832 = G__13839;
i__13823_13833 = G__13840;
continue;
} else {
var temp__4657__auto___13841 = cljs.core.seq.call(null,seq__13820_13830);
if(temp__4657__auto___13841){
var seq__13820_13842__$1 = temp__4657__auto___13841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13820_13842__$1)){
var c__7058__auto___13843 = cljs.core.chunk_first.call(null,seq__13820_13842__$1);
var G__13844 = cljs.core.chunk_rest.call(null,seq__13820_13842__$1);
var G__13845 = c__7058__auto___13843;
var G__13846 = cljs.core.count.call(null,c__7058__auto___13843);
var G__13847 = (0);
seq__13820_13830 = G__13844;
chunk__13821_13831 = G__13845;
count__13822_13832 = G__13846;
i__13823_13833 = G__13847;
continue;
} else {
var vec__13827_13848 = cljs.core.first.call(null,seq__13820_13842__$1);
var sok_13849 = cljs.core.nth.call(null,vec__13827_13848,(0),null);
var v_13850 = cljs.core.nth.call(null,vec__13827_13848,(1),null);
if(cljs.core.truth_(v_13850)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_13849,null,v_13850,m);
} else {
}

var G__13851 = cljs.core.next.call(null,seq__13820_13842__$1);
var G__13852 = null;
var G__13853 = (0);
var G__13854 = (0);
seq__13820_13830 = G__13851;
chunk__13821_13831 = G__13852;
count__13822_13832 = G__13853;
i__13823_13833 = G__13854;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__6247__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__13871_13887 = cljs.core.seq.call(null,nm);
var chunk__13873_13888 = null;
var count__13874_13889 = (0);
var i__13875_13890 = (0);
while(true){
if((i__13875_13890 < count__13874_13889)){
var vec__13877_13891 = cljs.core._nth.call(null,chunk__13873_13888,i__13875_13890);
var sok_13892 = cljs.core.nth.call(null,vec__13877_13891,(0),null);
var nv_13893 = cljs.core.nth.call(null,vec__13877_13891,(1),null);
var ov_13894 = cljs.core.get.call(null,om,sok_13892);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_13892,ov_13894,nv_13893,m);

var G__13895 = seq__13871_13887;
var G__13896 = chunk__13873_13888;
var G__13897 = count__13874_13889;
var G__13898 = (i__13875_13890 + (1));
seq__13871_13887 = G__13895;
chunk__13873_13888 = G__13896;
count__13874_13889 = G__13897;
i__13875_13890 = G__13898;
continue;
} else {
var temp__4657__auto___13899 = cljs.core.seq.call(null,seq__13871_13887);
if(temp__4657__auto___13899){
var seq__13871_13900__$1 = temp__4657__auto___13899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13871_13900__$1)){
var c__7058__auto___13901 = cljs.core.chunk_first.call(null,seq__13871_13900__$1);
var G__13902 = cljs.core.chunk_rest.call(null,seq__13871_13900__$1);
var G__13903 = c__7058__auto___13901;
var G__13904 = cljs.core.count.call(null,c__7058__auto___13901);
var G__13905 = (0);
seq__13871_13887 = G__13902;
chunk__13873_13888 = G__13903;
count__13874_13889 = G__13904;
i__13875_13890 = G__13905;
continue;
} else {
var vec__13880_13906 = cljs.core.first.call(null,seq__13871_13900__$1);
var sok_13907 = cljs.core.nth.call(null,vec__13880_13906,(0),null);
var nv_13908 = cljs.core.nth.call(null,vec__13880_13906,(1),null);
var ov_13909 = cljs.core.get.call(null,om,sok_13907);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_13907,ov_13909,nv_13908,m);

var G__13910 = cljs.core.next.call(null,seq__13871_13900__$1);
var G__13911 = null;
var G__13912 = (0);
var G__13913 = (0);
seq__13871_13887 = G__13910;
chunk__13873_13888 = G__13911;
count__13874_13889 = G__13912;
i__13875_13890 = G__13913;
continue;
}
} else {
}
}
break;
}

var seq__13883 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__13884 = null;
var count__13885 = (0);
var i__13886 = (0);
while(true){
if((i__13886 < count__13885)){
var sok = cljs.core._nth.call(null,chunk__13884,i__13886);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__13914 = seq__13883;
var G__13915 = chunk__13884;
var G__13916 = count__13885;
var G__13917 = (i__13886 + (1));
seq__13883 = G__13914;
chunk__13884 = G__13915;
count__13885 = G__13916;
i__13886 = G__13917;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13883);
if(temp__4657__auto__){
var seq__13883__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13883__$1)){
var c__7058__auto__ = cljs.core.chunk_first.call(null,seq__13883__$1);
var G__13918 = cljs.core.chunk_rest.call(null,seq__13883__$1);
var G__13919 = c__7058__auto__;
var G__13920 = cljs.core.count.call(null,c__7058__auto__);
var G__13921 = (0);
seq__13883 = G__13918;
chunk__13884 = G__13919;
count__13885 = G__13920;
i__13886 = G__13921;
continue;
} else {
var sok = cljs.core.first.call(null,seq__13883__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__13922 = cljs.core.next.call(null,seq__13883__$1);
var G__13923 = null;
var G__13924 = (0);
var G__13925 = (0);
seq__13883 = G__13922;
chunk__13884 = G__13923;
count__13885 = G__13924;
i__13886 = G__13925;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7027__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__13930(s__13931){
return (new cljs.core.LazySeq(null,(function (){
var s__13931__$1 = s__13931;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13931__$1);
if(temp__4657__auto__){
var s__13931__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13931__$2)){
var c__7025__auto__ = cljs.core.chunk_first.call(null,s__13931__$2);
var size__7026__auto__ = cljs.core.count.call(null,c__7025__auto__);
var b__13933 = cljs.core.chunk_buffer.call(null,size__7026__auto__);
if((function (){var i__13932 = (0);
while(true){
if((i__13932 < size__7026__auto__)){
var ih = cljs.core._nth.call(null,c__7025__auto__,i__13932);
cljs.core.chunk_append.call(null,b__13933,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__13934 = (i__13932 + (1));
i__13932 = G__13934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13933),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__13930.call(null,cljs.core.chunk_rest.call(null,s__13931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13933),null);
}
} else {
var ih = cljs.core.first.call(null,s__13931__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__13930.call(null,cljs.core.rest.call(null,s__13931__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7027__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__7027__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__7027__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__13935){
var map__13960 = p__13935;
var map__13960__$1 = ((((!((map__13960 == null)))?((((map__13960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13960):map__13960);
var m = map__13960__$1;
var interceptors = cljs.core.get.call(null,map__13960__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__13962_13984 = cljs.core.seq.call(null,nm);
var chunk__13963_13985 = null;
var count__13964_13986 = (0);
var i__13965_13987 = (0);
while(true){
if((i__13965_13987 < count__13964_13986)){
var vec__13966_13988 = cljs.core._nth.call(null,chunk__13963_13985,i__13965_13987);
var i_13989 = cljs.core.nth.call(null,vec__13966_13988,(0),null);
var vec__13969_13990 = cljs.core.nth.call(null,vec__13966_13988,(1),null);
var ii_13991 = cljs.core.nth.call(null,vec__13969_13990,(0),null);
var h_13992 = cljs.core.nth.call(null,vec__13969_13990,(1),null);
var temp__4655__auto___13993 = cljs.core.get.call(null,om,i_13989);
if(cljs.core.truth_(temp__4655__auto___13993)){
var vec__13972_13994 = temp__4655__auto___13993;
var iii_13995 = cljs.core.nth.call(null,vec__13972_13994,(0),null);
var oh_13996 = cljs.core.nth.call(null,vec__13972_13994,(1),null);
var cel_13997 = cljs.core.nth.call(null,cs,iii_13995);
if((ii_13991 === iii_13995)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_13997,oh_13996,h_13992,m);
} else {
var b__13660__auto___13998 = ((function (seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,cel_13997,vec__13972_13994,iii_13995,oh_13996,temp__4655__auto___13993,vec__13966_13988,i_13989,vec__13969_13990,ii_13991,h_13992,om,nm,cs,map__13960,map__13960__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_13997);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_13996,h_13992,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_13991,ncel);
});})(seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,cel_13997,vec__13972_13994,iii_13995,oh_13996,temp__4655__auto___13993,vec__13966_13988,i_13989,vec__13969_13990,ii_13991,h_13992,om,nm,cs,map__13960,map__13960__$1,m,interceptors))
;
var v__13661__auto___13999 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___13999)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___13999))){
b__13660__auto___13998.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___13998,v__13661__auto___13999,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_13992,new cljs.core.Keyword(null,"index","index",-1531685915),ii_13991], null));
}
}
} else {
var b__13660__auto___14000 = ((function (seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,temp__4655__auto___13993,vec__13966_13988,i_13989,vec__13969_13990,ii_13991,h_13992,om,nm,cs,map__13960,map__13960__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_13991,hipo.interpreter.create_child.call(null,h_13992,m));
});})(seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,temp__4655__auto___13993,vec__13966_13988,i_13989,vec__13969_13990,ii_13991,h_13992,om,nm,cs,map__13960,map__13960__$1,m,interceptors))
;
var v__13661__auto___14001 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14001)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14001))){
b__13660__auto___14000.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14000,v__13661__auto___14001,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_13992,new cljs.core.Keyword(null,"index","index",-1531685915),ii_13991], null));
}
}

var G__14002 = seq__13962_13984;
var G__14003 = chunk__13963_13985;
var G__14004 = count__13964_13986;
var G__14005 = (i__13965_13987 + (1));
seq__13962_13984 = G__14002;
chunk__13963_13985 = G__14003;
count__13964_13986 = G__14004;
i__13965_13987 = G__14005;
continue;
} else {
var temp__4657__auto___14006 = cljs.core.seq.call(null,seq__13962_13984);
if(temp__4657__auto___14006){
var seq__13962_14007__$1 = temp__4657__auto___14006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13962_14007__$1)){
var c__7058__auto___14008 = cljs.core.chunk_first.call(null,seq__13962_14007__$1);
var G__14009 = cljs.core.chunk_rest.call(null,seq__13962_14007__$1);
var G__14010 = c__7058__auto___14008;
var G__14011 = cljs.core.count.call(null,c__7058__auto___14008);
var G__14012 = (0);
seq__13962_13984 = G__14009;
chunk__13963_13985 = G__14010;
count__13964_13986 = G__14011;
i__13965_13987 = G__14012;
continue;
} else {
var vec__13975_14013 = cljs.core.first.call(null,seq__13962_14007__$1);
var i_14014 = cljs.core.nth.call(null,vec__13975_14013,(0),null);
var vec__13978_14015 = cljs.core.nth.call(null,vec__13975_14013,(1),null);
var ii_14016 = cljs.core.nth.call(null,vec__13978_14015,(0),null);
var h_14017 = cljs.core.nth.call(null,vec__13978_14015,(1),null);
var temp__4655__auto___14018 = cljs.core.get.call(null,om,i_14014);
if(cljs.core.truth_(temp__4655__auto___14018)){
var vec__13981_14019 = temp__4655__auto___14018;
var iii_14020 = cljs.core.nth.call(null,vec__13981_14019,(0),null);
var oh_14021 = cljs.core.nth.call(null,vec__13981_14019,(1),null);
var cel_14022 = cljs.core.nth.call(null,cs,iii_14020);
if((ii_14016 === iii_14020)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_14022,oh_14021,h_14017,m);
} else {
var b__13660__auto___14023 = ((function (seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,cel_14022,vec__13981_14019,iii_14020,oh_14021,temp__4655__auto___14018,vec__13975_14013,i_14014,vec__13978_14015,ii_14016,h_14017,seq__13962_14007__$1,temp__4657__auto___14006,om,nm,cs,map__13960,map__13960__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_14022);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_14021,h_14017,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_14016,ncel);
});})(seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,cel_14022,vec__13981_14019,iii_14020,oh_14021,temp__4655__auto___14018,vec__13975_14013,i_14014,vec__13978_14015,ii_14016,h_14017,seq__13962_14007__$1,temp__4657__auto___14006,om,nm,cs,map__13960,map__13960__$1,m,interceptors))
;
var v__13661__auto___14024 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14024)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14024))){
b__13660__auto___14023.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14023,v__13661__auto___14024,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_14017,new cljs.core.Keyword(null,"index","index",-1531685915),ii_14016], null));
}
}
} else {
var b__13660__auto___14025 = ((function (seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,temp__4655__auto___14018,vec__13975_14013,i_14014,vec__13978_14015,ii_14016,h_14017,seq__13962_14007__$1,temp__4657__auto___14006,om,nm,cs,map__13960,map__13960__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_14016,hipo.interpreter.create_child.call(null,h_14017,m));
});})(seq__13962_13984,chunk__13963_13985,count__13964_13986,i__13965_13987,temp__4655__auto___14018,vec__13975_14013,i_14014,vec__13978_14015,ii_14016,h_14017,seq__13962_14007__$1,temp__4657__auto___14006,om,nm,cs,map__13960,map__13960__$1,m,interceptors))
;
var v__13661__auto___14026 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14026)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14026))){
b__13660__auto___14025.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14025,v__13661__auto___14026,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_14017,new cljs.core.Keyword(null,"index","index",-1531685915),ii_14016], null));
}
}

var G__14027 = cljs.core.next.call(null,seq__13962_14007__$1);
var G__14028 = null;
var G__14029 = (0);
var G__14030 = (0);
seq__13962_13984 = G__14027;
chunk__13963_13985 = G__14028;
count__13964_13986 = G__14029;
i__13965_13987 = G__14030;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__13660__auto__ = ((function (d,om,nm,cs,map__13960,map__13960__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__13960,map__13960__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__14031){
var map__14034 = p__14031;
var map__14034__$1 = ((((!((map__14034 == null)))?((((map__14034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14034):map__14034);
var m = map__14034__$1;
var interceptors = cljs.core.get.call(null,map__14034__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__13660__auto___14036 = ((function (oc,nc,d,map__14034,map__14034__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__14034,map__14034__$1,m,interceptors))
;
var v__13661__auto___14037 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14037)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14037))){
b__13660__auto___14036.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14036,v__13661__auto___14037,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__7162__auto___14038 = (function (){var x__6585__auto__ = oc;
var y__6586__auto__ = nc;
return ((x__6585__auto__ < y__6586__auto__) ? x__6585__auto__ : y__6586__auto__);
})();
var i_14039 = (0);
while(true){
if((i_14039 < n__7162__auto___14038)){
var ov_14040 = cljs.core.nth.call(null,och,i_14039);
var nv_14041 = cljs.core.nth.call(null,nch,i_14039);
if(!(((ov_14040 == null)) && ((nv_14041 == null)))){
if((ov_14040 == null)){
var b__13660__auto___14042 = ((function (i_14039,ov_14040,nv_14041,n__7162__auto___14038,oc,nc,d,map__14034,map__14034__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_14039,hipo.interpreter.create_child.call(null,nv_14041,m));
});})(i_14039,ov_14040,nv_14041,n__7162__auto___14038,oc,nc,d,map__14034,map__14034__$1,m,interceptors))
;
var v__13661__auto___14043 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14043)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14043))){
b__13660__auto___14042.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14042,v__13661__auto___14043,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_14041,new cljs.core.Keyword(null,"index","index",-1531685915),i_14039], null));
}
} else {
if((nv_14041 == null)){
var b__13660__auto___14044 = ((function (i_14039,ov_14040,nv_14041,n__7162__auto___14038,oc,nc,d,map__14034,map__14034__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_14039);
});})(i_14039,ov_14040,nv_14041,n__7162__auto___14038,oc,nc,d,map__14034,map__14034__$1,m,interceptors))
;
var v__13661__auto___14045 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14045)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14045))){
b__13660__auto___14044.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14044,v__13661__auto___14045,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_14039], null));
}
} else {
var temp__4655__auto___14046 = hipo.dom.child.call(null,el,i_14039);
if(cljs.core.truth_(temp__4655__auto___14046)){
var cel_14047 = temp__4655__auto___14046;
hipo.interpreter.reconciliate_BANG_.call(null,cel_14047,ov_14040,nv_14041,m);
} else {
}

}
}
} else {
}

var G__14048 = (i_14039 + (1));
i_14039 = G__14048;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__13660__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__14034,map__14034__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__14034,map__14034__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__13660__auto___14049 = ((function (f,cs,oc,nc,d,map__14034,map__14034__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__14034,map__14034__$1,m,interceptors))
;
var v__13661__auto___14050 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14050)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14050))){
b__13660__auto___14049.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14049,v__13661__auto___14050,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__14051){
var map__14054 = p__14051;
var map__14054__$1 = ((((!((map__14054 == null)))?((((map__14054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14054):map__14054);
var m = map__14054__$1;
var interceptors = cljs.core.get.call(null,map__14054__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__13660__auto__ = ((function (map__14054,map__14054__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__14054,map__14054__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__14056){
var map__14059 = p__14056;
var map__14059__$1 = ((((!((map__14059 == null)))?((((map__14059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14059):map__14059);
var m = map__14059__$1;
var interceptors = cljs.core.get.call(null,map__14059__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__6247__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__13660__auto__ = ((function (nel,map__14059,map__14059__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__14059,map__14059__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__13660__auto___14061 = ((function (om,nm,och,nch,map__14059,map__14059__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__14059,map__14059__$1,m,interceptors))
;
var v__13661__auto___14062 = interceptors;
if((cljs.core.not.call(null,v__13661__auto___14062)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto___14062))){
b__13660__auto___14061.call(null);
} else {
hipo.interceptor.call.call(null,b__13660__auto___14061,v__13661__auto___14062,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__14063){
var map__14066 = p__14063;
var map__14066__$1 = ((((!((map__14066 == null)))?((((map__14066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14066):map__14066);
var m = map__14066__$1;
var interceptors = cljs.core.get.call(null,map__14066__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__6247__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__6247__auto__){
return or__6247__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__13660__auto__ = ((function (map__14066,map__14066__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__13660__auto__ = ((function (map__14066,map__14066__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str(nh)].join(''));
});})(map__14066,map__14066__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__14066,map__14066__$1,m,interceptors))
;
var v__13661__auto__ = interceptors;
if((cljs.core.not.call(null,v__13661__auto__)) || (cljs.core.empty_QMARK_.call(null,v__13661__auto__))){
return b__13660__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__13660__auto__,v__13661__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map