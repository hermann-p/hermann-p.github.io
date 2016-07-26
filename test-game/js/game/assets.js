// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.assets');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof game.assets.pixi !== 'undefined'){
} else {
game.assets.pixi = PIXI;
}
if(typeof game.assets.Howl !== 'undefined'){
} else {
game.assets.Howl = Howl;
}
if(typeof game.assets.url_list !== 'undefined'){
} else {
game.assets.url_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof game.assets.assets !== 'undefined'){
} else {
game.assets.assets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
game.assets.count_requested = (function game$assets$count_requested(){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__9034_SHARP_){
return cljs.core.count.call(null,(function (){var or__6247__auto__ = p1__9034_SHARP_.call(null,cljs.core.deref.call(null,game.assets.assets));
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"atl","atl",-1114073302)], null)));
});
game.assets.count_loaded = (function game$assets$count_loaded(){
var is_ready_QMARK_ = (function game$assets$count_loaded_$_is_ready_QMARK_(p__9057){
var vec__9061 = p__9057;
var k = cljs.core.nth.call(null,vec__9061,(0),null);
var v = cljs.core.nth.call(null,vec__9061,(1),null);
return new cljs.core.Keyword(null,"ready","ready",1086465795).cljs$core$IFn$_invoke$arity$1(v);
});
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__9035_SHARP_){
return cljs.core.count.call(null,cljs.core.filter.call(null,is_ready_QMARK_,p1__9035_SHARP_.call(null,cljs.core.deref.call(null,game.assets.assets))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"atl","atl",-1114073302)], null)));
});
game.assets.percent_done = (function game$assets$percent_done(){
var total = game.assets.count_requested.call(null);
var loaded = game.assets.count_loaded.call(null);
if(!((total === (0)))){
return ((100) * (loaded / total));
} else {
return (100);
}
});
game.assets.ready_QMARK_ = (function game$assets$ready_QMARK_(){
return cljs.core._EQ_.call(null,game.assets.count_requested.call(null),game.assets.count_loaded.call(null));
});
game.assets.asset_error_BANG_ = (function game$assets$asset_error_BANG_(type_key,id){
cljs.core.println.call(null,"Could not load",((cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"img","img",1442687358)))?"image":"sound"),id);

return cljs.core.swap_BANG_.call(null,game.assets.assets,(function (p1__9064_SHARP_){
return cljs.core.assoc.call(null,p1__9064_SHARP_,type_key,cljs.core.dissoc.call(null,type_key.call(null,cljs.core.deref.call(null,game.assets.assets)),id));
}));
});
game.assets.request = (function game$assets$request(type_key,id,url){
return cljs.core.swap_BANG_.call(null,game.assets.url_list,(function (p1__9065_SHARP_){
return cljs.core.conj.call(null,p1__9065_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),type_key,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"url","url",276297046),url], null));
}));
});
game.assets.load_img = (function game$assets$load_img(id,url){
cljs.core.swap_BANG_.call(null,game.assets.assets,(function (p1__9066_SHARP_){
return cljs.core.assoc_in.call(null,p1__9066_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

return game.assets.pixi.loader.add(url).load((function game$assets$load_img_$_on_load(){
var texture = (game.assets.pixi.loader.resources[url]).texture;
return cljs.core.swap_BANG_.call(null,game.assets.assets,((function (texture){
return (function (p1__9067_SHARP_){
return cljs.core.assoc_in.call(null,p1__9067_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ready","ready",1086465795),true,new cljs.core.Keyword(null,"data","data",-232669377),texture], null));
});})(texture))
);
}));
});
game.assets.load_atlas = (function game$assets$load_atlas(id,url){
cljs.core.swap_BANG_.call(null,game.assets.assets,(function (p1__9068_SHARP_){
return cljs.core.assoc_in.call(null,p1__9068_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atl","atl",-1114073302),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

return game.assets.pixi.loader.add(url).load((function game$assets$load_atlas_$_on_load(){
cljs.core.println.call(null,"atlas",id,url,"loaded");

var atlas = (game.assets.pixi.loader.resources[url]);
return cljs.core.swap_BANG_.call(null,game.assets.assets,((function (atlas){
return (function (p1__9069_SHARP_){
return cljs.core.assoc_in.call(null,p1__9069_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atl","atl",-1114073302),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ready","ready",1086465795),true,new cljs.core.Keyword(null,"data","data",-232669377),atlas], null));
});})(atlas))
);
}));
});
game.assets.load_sound = (function game$assets$load_sound(id,url){
cljs.core.swap_BANG_.call(null,game.assets.assets,(function (p1__9070_SHARP_){
return cljs.core.assoc_in.call(null,p1__9070_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

var sound = (new game.assets.Howl(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null)], null))));
var G__9073 = sound;
G__9073.once("load",((function (G__9073,sound){
return (function (){
cljs.core.println.call(null,"sound",url,"loaded");

return cljs.core.swap_BANG_.call(null,game.assets.assets,((function (G__9073,sound){
return (function (p1__9071_SHARP_){
return cljs.core.assoc_in.call(null,p1__9071_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),sound,new cljs.core.Keyword(null,"ready","ready",1086465795),true], null));
});})(G__9073,sound))
);
});})(G__9073,sound))
);

G__9073.once("loaderror",cljs.core.partial.call(null,game.assets.asset_error_BANG_,new cljs.core.Keyword(null,"snd","snd",643718828),id));

return G__9073;
});
game.assets.load_asset = (function game$assets$load_asset(p__9074){
var map__9078 = p__9074;
var map__9078__$1 = ((((!((map__9078 == null)))?((((map__9078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9078):map__9078);
var type_key = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));
var id = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,game.assets.assets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id], null)))){
var G__9080 = (((type_key instanceof cljs.core.Keyword))?type_key.fqn:null);
switch (G__9080) {
case "img":
return game.assets.load_img.call(null,id,url);

break;
case "snd":
return game.assets.load_sound.call(null,id,url);

break;
case "atl":
return game.assets.load_atlas.call(null,id,url);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type_key)].join('')));

}
} else {
return null;
}
});
game.assets.load = (function game$assets$load(){
var seq__9086 = cljs.core.seq.call(null,cljs.core.deref.call(null,game.assets.url_list));
var chunk__9087 = null;
var count__9088 = (0);
var i__9089 = (0);
while(true){
if((i__9089 < count__9088)){
var asset = cljs.core._nth.call(null,chunk__9087,i__9089);
game.assets.load_asset.call(null,asset);

var G__9090 = seq__9086;
var G__9091 = chunk__9087;
var G__9092 = count__9088;
var G__9093 = (i__9089 + (1));
seq__9086 = G__9090;
chunk__9087 = G__9091;
count__9088 = G__9092;
i__9089 = G__9093;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9086);
if(temp__4657__auto__){
var seq__9086__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9086__$1)){
var c__7058__auto__ = cljs.core.chunk_first.call(null,seq__9086__$1);
var G__9094 = cljs.core.chunk_rest.call(null,seq__9086__$1);
var G__9095 = c__7058__auto__;
var G__9096 = cljs.core.count.call(null,c__7058__auto__);
var G__9097 = (0);
seq__9086 = G__9094;
chunk__9087 = G__9095;
count__9088 = G__9096;
i__9089 = G__9097;
continue;
} else {
var asset = cljs.core.first.call(null,seq__9086__$1);
game.assets.load_asset.call(null,asset);

var G__9098 = cljs.core.next.call(null,seq__9086__$1);
var G__9099 = null;
var G__9100 = (0);
var G__9101 = (0);
seq__9086 = G__9098;
chunk__9087 = G__9099;
count__9088 = G__9100;
i__9089 = G__9101;
continue;
}
} else {
return null;
}
}
break;
}
});
game.assets.request_all = (function game$assets$request_all(reqmap){
if(cljs.core.map_QMARK_.call(null,reqmap)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Expected asset map {:type [{:id ... :url ...} ...]}"),cljs.core.str("\n"),cljs.core.str("(map? reqmap)")].join('')));
}

var seq__9114_9126 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__9115_9127 = null;
var count__9116_9128 = (0);
var i__9117_9129 = (0);
while(true){
if((i__9117_9129 < count__9116_9128)){
var img_9130 = cljs.core._nth.call(null,chunk__9115_9127,i__9117_9129);
game.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-ke","type-ke",1711703116),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_9130),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_9130)], null));

var G__9131 = seq__9114_9126;
var G__9132 = chunk__9115_9127;
var G__9133 = count__9116_9128;
var G__9134 = (i__9117_9129 + (1));
seq__9114_9126 = G__9131;
chunk__9115_9127 = G__9132;
count__9116_9128 = G__9133;
i__9117_9129 = G__9134;
continue;
} else {
var temp__4657__auto___9135 = cljs.core.seq.call(null,seq__9114_9126);
if(temp__4657__auto___9135){
var seq__9114_9136__$1 = temp__4657__auto___9135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9114_9136__$1)){
var c__7058__auto___9137 = cljs.core.chunk_first.call(null,seq__9114_9136__$1);
var G__9138 = cljs.core.chunk_rest.call(null,seq__9114_9136__$1);
var G__9139 = c__7058__auto___9137;
var G__9140 = cljs.core.count.call(null,c__7058__auto___9137);
var G__9141 = (0);
seq__9114_9126 = G__9138;
chunk__9115_9127 = G__9139;
count__9116_9128 = G__9140;
i__9117_9129 = G__9141;
continue;
} else {
var img_9142 = cljs.core.first.call(null,seq__9114_9136__$1);
game.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-ke","type-ke",1711703116),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_9142),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_9142)], null));

var G__9143 = cljs.core.next.call(null,seq__9114_9136__$1);
var G__9144 = null;
var G__9145 = (0);
var G__9146 = (0);
seq__9114_9126 = G__9143;
chunk__9115_9127 = G__9144;
count__9116_9128 = G__9145;
i__9117_9129 = G__9146;
continue;
}
} else {
}
}
break;
}

var seq__9118_9147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__9119_9148 = null;
var count__9120_9149 = (0);
var i__9121_9150 = (0);
while(true){
if((i__9121_9150 < count__9120_9149)){
var snd_9151 = cljs.core._nth.call(null,chunk__9119_9148,i__9121_9150);
game.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd_9151),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd_9151)], null));

var G__9152 = seq__9118_9147;
var G__9153 = chunk__9119_9148;
var G__9154 = count__9120_9149;
var G__9155 = (i__9121_9150 + (1));
seq__9118_9147 = G__9152;
chunk__9119_9148 = G__9153;
count__9120_9149 = G__9154;
i__9121_9150 = G__9155;
continue;
} else {
var temp__4657__auto___9156 = cljs.core.seq.call(null,seq__9118_9147);
if(temp__4657__auto___9156){
var seq__9118_9157__$1 = temp__4657__auto___9156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9118_9157__$1)){
var c__7058__auto___9158 = cljs.core.chunk_first.call(null,seq__9118_9157__$1);
var G__9159 = cljs.core.chunk_rest.call(null,seq__9118_9157__$1);
var G__9160 = c__7058__auto___9158;
var G__9161 = cljs.core.count.call(null,c__7058__auto___9158);
var G__9162 = (0);
seq__9118_9147 = G__9159;
chunk__9119_9148 = G__9160;
count__9120_9149 = G__9161;
i__9121_9150 = G__9162;
continue;
} else {
var snd_9163 = cljs.core.first.call(null,seq__9118_9157__$1);
game.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd_9163),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd_9163)], null));

var G__9164 = cljs.core.next.call(null,seq__9118_9157__$1);
var G__9165 = null;
var G__9166 = (0);
var G__9167 = (0);
seq__9118_9147 = G__9164;
chunk__9119_9148 = G__9165;
count__9120_9149 = G__9166;
i__9121_9150 = G__9167;
continue;
}
} else {
}
}
break;
}

var seq__9122 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"atl","atl",-1114073302).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__9123 = null;
var count__9124 = (0);
var i__9125 = (0);
while(true){
if((i__9125 < count__9124)){
var atl = cljs.core._nth.call(null,chunk__9123,i__9125);
game.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"atl","atl",-1114073302),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(atl),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(atl)], null));

var G__9168 = seq__9122;
var G__9169 = chunk__9123;
var G__9170 = count__9124;
var G__9171 = (i__9125 + (1));
seq__9122 = G__9168;
chunk__9123 = G__9169;
count__9124 = G__9170;
i__9125 = G__9171;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9122);
if(temp__4657__auto__){
var seq__9122__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9122__$1)){
var c__7058__auto__ = cljs.core.chunk_first.call(null,seq__9122__$1);
var G__9172 = cljs.core.chunk_rest.call(null,seq__9122__$1);
var G__9173 = c__7058__auto__;
var G__9174 = cljs.core.count.call(null,c__7058__auto__);
var G__9175 = (0);
seq__9122 = G__9172;
chunk__9123 = G__9173;
count__9124 = G__9174;
i__9125 = G__9175;
continue;
} else {
var atl = cljs.core.first.call(null,seq__9122__$1);
game.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"atl","atl",-1114073302),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(atl),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(atl)], null));

var G__9176 = cljs.core.next.call(null,seq__9122__$1);
var G__9177 = null;
var G__9178 = (0);
var G__9179 = (0);
seq__9122 = G__9176;
chunk__9123 = G__9177;
count__9124 = G__9178;
i__9125 = G__9179;
continue;
}
} else {
return null;
}
}
break;
}
});
game.assets.get_asset = (function game$assets$get_asset(type_key,id){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,game.assets.assets),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var asset = temp__4655__auto__;
return asset;
} else {
return cljs.core.println.call(null,"No",type_key,"named",id,"loaded!","\n",cljs.core.keys.call(null,type_key.call(null,cljs.core.deref.call(null,game.assets.assets))));
}
});
game.assets.get_tex = (function game$assets$get_tex(var_args){
var args9180 = [];
var len__7322__auto___9183 = arguments.length;
var i__7323__auto___9184 = (0);
while(true){
if((i__7323__auto___9184 < len__7322__auto___9183)){
args9180.push((arguments[i__7323__auto___9184]));

var G__9185 = (i__7323__auto___9184 + (1));
i__7323__auto___9184 = G__9185;
continue;
} else {
}
break;
}

var G__9182 = args9180.length;
switch (G__9182) {
case 1:
return game.assets.get_tex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.assets.get_tex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9180.length)].join('')));

}
});

game.assets.get_tex.cljs$core$IFn$_invoke$arity$1 = (function (id){
return game.assets.get_asset.call(null,new cljs.core.Keyword(null,"img","img",1442687358),id);
});

game.assets.get_tex.cljs$core$IFn$_invoke$arity$2 = (function (atl,id){
var atlas = game.assets.get_asset.call(null,new cljs.core.Keyword(null,"atl","atl",-1114073302),atl);
var texname = (((id instanceof cljs.core.Keyword))?[cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str(".png")].join(''):id);
return (atlas.textures[texname]);
});

game.assets.get_tex.cljs$lang$maxFixedArity = 2;

game.assets.get_sprite = (function game$assets$get_sprite(id){
return (new game.assets.pixi.Sprite(game.assets.get_asset.call(null,new cljs.core.Keyword(null,"img","img",1442687358),id)));
});
game.assets.play_sound = (function game$assets$play_sound(id){
var temp__4655__auto__ = game.assets.get_asset.call(null,new cljs.core.Keyword(null,"snd","snd",643718828),id);
if(cljs.core.truth_(temp__4655__auto__)){
var sound = temp__4655__auto__;
return sound.play();
} else {
return cljs.core.println.call(null,"Sound",id,"not found");
}
});

//# sourceMappingURL=assets.js.map