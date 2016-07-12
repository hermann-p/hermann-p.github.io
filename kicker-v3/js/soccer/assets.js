// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.assets');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof soccer.assets.pixi !== 'undefined'){
} else {
soccer.assets.pixi = PIXI;
}
if(typeof soccer.assets.url_list !== 'undefined'){
} else {
soccer.assets.url_list = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof soccer.assets.assets !== 'undefined'){
} else {
soccer.assets.assets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
soccer.assets.count_requested = (function soccer$assets$count_requested(){
return (cljs.core.count.call(null,(function (){var or__4580__auto__ = new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()) + cljs.core.count.call(null,(function (){var or__4580__auto__ = new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
soccer.assets.count_loaded = (function soccer$assets$count_loaded(){
var is_ready_QMARK_ = (function soccer$assets$count_loaded_$_is_ready_QMARK_(p__21204){
var vec__21206 = p__21204;
var k = cljs.core.nth.call(null,vec__21206,(0),null);
var v = cljs.core.nth.call(null,vec__21206,(1),null);
return new cljs.core.Keyword(null,"ready","ready",1086465795).cljs$core$IFn$_invoke$arity$1(v);
});
return (cljs.core.count.call(null,cljs.core.filter.call(null,is_ready_QMARK_,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets)))) + cljs.core.count.call(null,cljs.core.filter.call(null,is_ready_QMARK_,new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets)))));
});
soccer.assets.percent_done = (function soccer$assets$percent_done(){
var total = soccer.assets.count_requested.call(null);
var loaded = soccer.assets.count_loaded.call(null);
if(!((total === (0)))){
return ((100) * (loaded / total));
} else {
return (100);
}
});
soccer.assets.ready_QMARK_ = (function soccer$assets$ready_QMARK_(){
return cljs.core._EQ_.call(null,soccer.assets.count_requested.call(null),soccer.assets.count_loaded.call(null));
});
soccer.assets.asset_error_BANG_ = (function soccer$assets$asset_error_BANG_(type_key,id){
cljs.core.println.call(null,"Could not load",((cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"img","img",1442687358)))?"image":"sound"),id);

return cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__21207_SHARP_){
return cljs.core.assoc.call(null,p1__21207_SHARP_,type_key,cljs.core.dissoc.call(null,type_key.call(null,cljs.core.deref.call(null,soccer.assets.assets)),id));
}));
});
soccer.assets.request = (function soccer$assets$request(type_key,id,url){
return cljs.core.swap_BANG_.call(null,soccer.assets.url_list,(function (p1__21208_SHARP_){
return cljs.core.conj.call(null,p1__21208_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),type_key,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"url","url",276297046),url], null));
}));
});
soccer.assets.load_img = (function soccer$assets$load_img(id,url){
cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__21209_SHARP_){
return cljs.core.assoc_in.call(null,p1__21209_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

return soccer.assets.pixi.loader.add(url).load((function soccer$assets$load_img_$_on_load(){
var texture = (soccer.assets.pixi.loader.resources[url]).texture;
return cljs.core.swap_BANG_.call(null,soccer.assets.assets,((function (texture){
return (function (p1__21210_SHARP_){
return cljs.core.assoc_in.call(null,p1__21210_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ready","ready",1086465795),true,new cljs.core.Keyword(null,"data","data",-232669377),texture], null));
});})(texture))
);
}));
});
soccer.assets.load_sound = (function soccer$assets$load_sound(id,url){
cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__21211_SHARP_){
return cljs.core.assoc_in.call(null,p1__21211_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null));
}));

var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto__){
return (function (state_21271){
var state_val_21272 = (state_21271[(1)]);
if((state_val_21272 === (1))){
var inst_21250 = cljs.core.deref.call(null,soccer.assets.assets);
var inst_21251 = new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024).cljs$core$IFn$_invoke$arity$1(inst_21250);
var inst_21252 = [new cljs.core.Keyword(null,"response-type","response-type",-1493770458)];
var inst_21253 = [new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380)];
var inst_21254 = cljs.core.PersistentHashMap.fromArrays(inst_21252,inst_21253);
var inst_21255 = cljs_http.client.get.call(null,url,inst_21254);
var state_21271__$1 = (function (){var statearr_21273 = state_21271;
(statearr_21273[(7)] = inst_21251);

return statearr_21273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21271__$1,(2),inst_21255);
} else {
if((state_val_21272 === (2))){
var inst_21257 = (state_21271[(8)]);
var inst_21257__$1 = (state_21271[(2)]);
var inst_21258 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_21257__$1);
var inst_21259 = cljs.core._EQ_.call(null,(200),inst_21258);
var state_21271__$1 = (function (){var statearr_21274 = state_21271;
(statearr_21274[(8)] = inst_21257__$1);

return statearr_21274;
})();
if(inst_21259){
var statearr_21275_21287 = state_21271__$1;
(statearr_21275_21287[(1)] = (3));

} else {
var statearr_21276_21288 = state_21271__$1;
(statearr_21276_21288[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (3))){
var inst_21251 = (state_21271[(7)]);
var inst_21257 = (state_21271[(8)]);
var inst_21261 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21257);
var inst_21262 = (function (){var ctx = inst_21251;
var response = inst_21257;
return ((function (ctx,response,inst_21251,inst_21257,inst_21261,state_val_21272,c__7010__auto__){
return (function (buffer){
return cljs.core.swap_BANG_.call(null,soccer.assets.assets,((function (ctx,response,inst_21251,inst_21257,inst_21261,state_val_21272,c__7010__auto__){
return (function (p1__21212_SHARP_){
return cljs.core.assoc_in.call(null,p1__21212_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),buffer,new cljs.core.Keyword(null,"ready","ready",1086465795),true], null));
});})(ctx,response,inst_21251,inst_21257,inst_21261,state_val_21272,c__7010__auto__))
);
});
;})(ctx,response,inst_21251,inst_21257,inst_21261,state_val_21272,c__7010__auto__))
})();
var inst_21263 = (function (){var ctx = inst_21251;
var response = inst_21257;
return ((function (ctx,response,inst_21251,inst_21257,inst_21261,inst_21262,state_val_21272,c__7010__auto__){
return (function (){
cljs.core.println.call(null,"Error decoding",url);

return soccer.assets.asset_error_BANG_.call(null,new cljs.core.Keyword(null,"snd","snd",643718828),id);
});
;})(ctx,response,inst_21251,inst_21257,inst_21261,inst_21262,state_val_21272,c__7010__auto__))
})();
var inst_21264 = inst_21251.decodeAudioData(inst_21261,inst_21262,inst_21263);
var state_21271__$1 = state_21271;
var statearr_21277_21289 = state_21271__$1;
(statearr_21277_21289[(2)] = inst_21264);

(statearr_21277_21289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (4))){
var inst_21266 = cljs.core.println.call(null,"Error loading",url);
var inst_21267 = soccer.assets.asset_error_BANG_.call(null,new cljs.core.Keyword(null,"snd","snd",643718828),id);
var state_21271__$1 = (function (){var statearr_21278 = state_21271;
(statearr_21278[(9)] = inst_21266);

return statearr_21278;
})();
var statearr_21279_21290 = state_21271__$1;
(statearr_21279_21290[(2)] = inst_21267);

(statearr_21279_21290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21272 === (5))){
var inst_21269 = (state_21271[(2)]);
var state_21271__$1 = state_21271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21271__$1,inst_21269);
} else {
return null;
}
}
}
}
}
});})(c__7010__auto__))
;
return ((function (switch__6989__auto__,c__7010__auto__){
return (function() {
var soccer$assets$load_sound_$_state_machine__6990__auto__ = null;
var soccer$assets$load_sound_$_state_machine__6990__auto____0 = (function (){
var statearr_21283 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21283[(0)] = soccer$assets$load_sound_$_state_machine__6990__auto__);

(statearr_21283[(1)] = (1));

return statearr_21283;
});
var soccer$assets$load_sound_$_state_machine__6990__auto____1 = (function (state_21271){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_21271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e21284){if((e21284 instanceof Object)){
var ex__6993__auto__ = e21284;
var statearr_21285_21291 = state_21271;
(statearr_21285_21291[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21292 = state_21271;
state_21271 = G__21292;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$assets$load_sound_$_state_machine__6990__auto__ = function(state_21271){
switch(arguments.length){
case 0:
return soccer$assets$load_sound_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$assets$load_sound_$_state_machine__6990__auto____1.call(this,state_21271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$assets$load_sound_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$assets$load_sound_$_state_machine__6990__auto____0;
soccer$assets$load_sound_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$assets$load_sound_$_state_machine__6990__auto____1;
return soccer$assets$load_sound_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto__))
})();
var state__7012__auto__ = (function (){var statearr_21286 = f__7011__auto__.call(null);
(statearr_21286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_21286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__))
);

return c__7010__auto__;
});
soccer.assets.load_asset = (function soccer$assets$load_asset(p__21293){
var map__21297 = p__21293;
var map__21297__$1 = ((((!((map__21297 == null)))?((((map__21297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21297):map__21297);
var type_key = cljs.core.get.call(null,map__21297__$1,new cljs.core.Keyword(null,"type-key","type-key",569807662));
var id = cljs.core.get.call(null,map__21297__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.call(null,map__21297__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,soccer.assets.assets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id], null)))){
var G__21299 = (((type_key instanceof cljs.core.Keyword))?type_key.fqn:null);
switch (G__21299) {
case "img":
return soccer.assets.load_img.call(null,id,url);

break;
case "snd":
return soccer.assets.load_sound.call(null,id,url);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type_key)].join('')));

}
} else {
return null;
}
});
soccer.assets.load = (function soccer$assets$load(){
cljs.core.swap_BANG_.call(null,soccer.assets.assets,(function (p1__21301_SHARP_){
return cljs.core.assoc.call(null,p1__21301_SHARP_,new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024),(function (){var or__4580__auto__ = (new AudioContext());
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return (new webkitAudioContext());
}
})());
}));

var seq__21306 = cljs.core.seq.call(null,cljs.core.deref.call(null,soccer.assets.url_list));
var chunk__21307 = null;
var count__21308 = (0);
var i__21309 = (0);
while(true){
if((i__21309 < count__21308)){
var asset = cljs.core._nth.call(null,chunk__21307,i__21309);
soccer.assets.load_asset.call(null,asset);

var G__21310 = seq__21306;
var G__21311 = chunk__21307;
var G__21312 = count__21308;
var G__21313 = (i__21309 + (1));
seq__21306 = G__21310;
chunk__21307 = G__21311;
count__21308 = G__21312;
i__21309 = G__21313;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21306);
if(temp__4657__auto__){
var seq__21306__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21306__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__21306__$1);
var G__21314 = cljs.core.chunk_rest.call(null,seq__21306__$1);
var G__21315 = c__5383__auto__;
var G__21316 = cljs.core.count.call(null,c__5383__auto__);
var G__21317 = (0);
seq__21306 = G__21314;
chunk__21307 = G__21315;
count__21308 = G__21316;
i__21309 = G__21317;
continue;
} else {
var asset = cljs.core.first.call(null,seq__21306__$1);
soccer.assets.load_asset.call(null,asset);

var G__21318 = cljs.core.next.call(null,seq__21306__$1);
var G__21319 = null;
var G__21320 = (0);
var G__21321 = (0);
seq__21306 = G__21318;
chunk__21307 = G__21319;
count__21308 = G__21320;
i__21309 = G__21321;
continue;
}
} else {
return null;
}
}
break;
}
});
soccer.assets.request_all = (function soccer$assets$request_all(reqmap){
if(cljs.core.map_QMARK_.call(null,reqmap)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Expected asset map {:type [{:id ... :url ...} ...]}"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"reqmap","reqmap",387190031,null))))].join('')));
}

var seq__21330_21338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__21331_21339 = null;
var count__21332_21340 = (0);
var i__21333_21341 = (0);
while(true){
if((i__21333_21341 < count__21332_21340)){
var img_21342 = cljs.core._nth.call(null,chunk__21331_21339,i__21333_21341);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_21342),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_21342)], null));

var G__21343 = seq__21330_21338;
var G__21344 = chunk__21331_21339;
var G__21345 = count__21332_21340;
var G__21346 = (i__21333_21341 + (1));
seq__21330_21338 = G__21343;
chunk__21331_21339 = G__21344;
count__21332_21340 = G__21345;
i__21333_21341 = G__21346;
continue;
} else {
var temp__4657__auto___21347 = cljs.core.seq.call(null,seq__21330_21338);
if(temp__4657__auto___21347){
var seq__21330_21348__$1 = temp__4657__auto___21347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21330_21348__$1)){
var c__5383__auto___21349 = cljs.core.chunk_first.call(null,seq__21330_21348__$1);
var G__21350 = cljs.core.chunk_rest.call(null,seq__21330_21348__$1);
var G__21351 = c__5383__auto___21349;
var G__21352 = cljs.core.count.call(null,c__5383__auto___21349);
var G__21353 = (0);
seq__21330_21338 = G__21350;
chunk__21331_21339 = G__21351;
count__21332_21340 = G__21352;
i__21333_21341 = G__21353;
continue;
} else {
var img_21354 = cljs.core.first.call(null,seq__21330_21348__$1);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(img_21354),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(img_21354)], null));

var G__21355 = cljs.core.next.call(null,seq__21330_21348__$1);
var G__21356 = null;
var G__21357 = (0);
var G__21358 = (0);
seq__21330_21338 = G__21355;
chunk__21331_21339 = G__21356;
count__21332_21340 = G__21357;
i__21333_21341 = G__21358;
continue;
}
} else {
}
}
break;
}

var seq__21334 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(reqmap));
var chunk__21335 = null;
var count__21336 = (0);
var i__21337 = (0);
while(true){
if((i__21337 < count__21336)){
var snd = cljs.core._nth.call(null,chunk__21335,i__21337);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd)], null));

var G__21359 = seq__21334;
var G__21360 = chunk__21335;
var G__21361 = count__21336;
var G__21362 = (i__21337 + (1));
seq__21334 = G__21359;
chunk__21335 = G__21360;
count__21336 = G__21361;
i__21337 = G__21362;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21334);
if(temp__4657__auto__){
var seq__21334__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21334__$1)){
var c__5383__auto__ = cljs.core.chunk_first.call(null,seq__21334__$1);
var G__21363 = cljs.core.chunk_rest.call(null,seq__21334__$1);
var G__21364 = c__5383__auto__;
var G__21365 = cljs.core.count.call(null,c__5383__auto__);
var G__21366 = (0);
seq__21334 = G__21363;
chunk__21335 = G__21364;
count__21336 = G__21365;
i__21337 = G__21366;
continue;
} else {
var snd = cljs.core.first.call(null,seq__21334__$1);
soccer.assets.load_asset.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type-key","type-key",569807662),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snd),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(snd)], null));

var G__21367 = cljs.core.next.call(null,seq__21334__$1);
var G__21368 = null;
var G__21369 = (0);
var G__21370 = (0);
seq__21334 = G__21367;
chunk__21335 = G__21368;
count__21336 = G__21369;
i__21337 = G__21370;
continue;
}
} else {
return null;
}
}
break;
}
});
soccer.assets.get_asset = (function soccer$assets$get_asset(type_key,id){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,soccer.assets.assets),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_key,id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var asset = temp__4655__auto__;
return asset;
} else {
return cljs.core.println.call(null,"No",((cljs.core._EQ_.call(null,type_key,new cljs.core.Keyword(null,"image","image",-58725096)))?"image":"sound"),"named",id,"loaded!");
}
});
soccer.assets.get_tex = (function soccer$assets$get_tex(id){
return soccer.assets.get_asset.call(null,new cljs.core.Keyword(null,"img","img",1442687358),id);
});
soccer.assets.get_sprite = (function soccer$assets$get_sprite(id){
return (new soccer.assets.pixi.Sprite(soccer.assets.get_asset.call(null,new cljs.core.Keyword(null,"img","img",1442687358),id)));
});
soccer.assets.play_sound = (function soccer$assets$play_sound(id){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,soccer.assets.assets),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828),id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var sound = temp__4655__auto__;
var ctx = new cljs.core.Keyword(null,"audio-ctx","audio-ctx",-1473649024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,soccer.assets.assets));
var src = ctx.createBufferSource();
src.buffer = sound;

var G__21372 = src;
G__21372.connect(ctx.destination);

G__21372.start((0));

return G__21372;
} else {
return null;
}
});

//# sourceMappingURL=assets.js.map