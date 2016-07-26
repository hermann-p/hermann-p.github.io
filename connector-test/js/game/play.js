// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.play');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('hipo.core');
goog.require('dommy.core');
goog.require('cljs_http.client');
goog.require('game.assets');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('game.chans');
goog.require('game.pixi');
if(typeof game.play.pixi !== 'undefined'){
} else {
game.play.pixi = PIXI;
}
if(typeof game.play.ortho_tiles !== 'undefined'){
} else {
game.play.ortho_tiles = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,false,true], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false,false], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false,true,true], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,true,true], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false,false,true], null)], null);
}
if(typeof game.play.hex_tiles !== 'undefined'){
} else {
game.play.hex_tiles = cljs.core.PersistentArrayMap.EMPTY;
}
game.play.req_action = (function game$play$req_action(actn){
var c__8907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8907__auto__){
return (function (){
var f__8908__auto__ = (function (){var switch__8886__auto__ = ((function (c__8907__auto__){
return (function (state_12905){
var state_val_12906 = (state_12905[(1)]);
if((state_val_12906 === (1))){
var state_12905__$1 = state_12905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12905__$1,(2),game.chans.action,actn);
} else {
if((state_val_12906 === (2))){
var inst_12903 = (state_12905[(2)]);
var state_12905__$1 = state_12905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12905__$1,inst_12903);
} else {
return null;
}
}
});})(c__8907__auto__))
;
return ((function (switch__8886__auto__,c__8907__auto__){
return (function() {
var game$play$req_action_$_state_machine__8887__auto__ = null;
var game$play$req_action_$_state_machine__8887__auto____0 = (function (){
var statearr_12910 = [null,null,null,null,null,null,null];
(statearr_12910[(0)] = game$play$req_action_$_state_machine__8887__auto__);

(statearr_12910[(1)] = (1));

return statearr_12910;
});
var game$play$req_action_$_state_machine__8887__auto____1 = (function (state_12905){
while(true){
var ret_value__8888__auto__ = (function (){try{while(true){
var result__8889__auto__ = switch__8886__auto__.call(null,state_12905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8889__auto__;
}
break;
}
}catch (e12911){if((e12911 instanceof Object)){
var ex__8890__auto__ = e12911;
var statearr_12912_12914 = state_12905;
(statearr_12912_12914[(5)] = ex__8890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12915 = state_12905;
state_12905 = G__12915;
continue;
} else {
return ret_value__8888__auto__;
}
break;
}
});
game$play$req_action_$_state_machine__8887__auto__ = function(state_12905){
switch(arguments.length){
case 0:
return game$play$req_action_$_state_machine__8887__auto____0.call(this);
case 1:
return game$play$req_action_$_state_machine__8887__auto____1.call(this,state_12905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$play$req_action_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$0 = game$play$req_action_$_state_machine__8887__auto____0;
game$play$req_action_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$1 = game$play$req_action_$_state_machine__8887__auto____1;
return game$play$req_action_$_state_machine__8887__auto__;
})()
;})(switch__8886__auto__,c__8907__auto__))
})();
var state__8909__auto__ = (function (){var statearr_12913 = f__8908__auto__.call(null);
(statearr_12913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8907__auto__);

return statearr_12913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8909__auto__);
});})(c__8907__auto__))
);

return c__8907__auto__;
});
game.play.mouse_fn = (function game$play$mouse_fn(evt){
evt.preventDefault();

game.play.req_action.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),evt.pageX,evt.pageY], null));

evt.preventDefault();

return false;
});
game.play.touch_fn = (function game$play$touch_fn(e){
var touch = (e.changedTouches[(0)]);
game.play.req_action.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),touch.pageX,touch.pageY], null));

e.preventDefault();

return false;
});
game.play.display_connection_BANG_ = (function game$play$display_connection_BANG_(tile,connected_QMARK_){
new cljs.core.Keyword(null,"conn-sprite","conn-sprite",1838648251).cljs$core$IFn$_invoke$arity$1(tile).visible = connected_QMARK_;

new cljs.core.Keyword(null,"disc-sprite","disc-sprite",1397525195).cljs$core$IFn$_invoke$arity$1(tile).visible = cljs.core.not.call(null,connected_QMARK_);

return tile;
});
game.play.rotate_tile = (function game$play$rotate_tile(tile){
var n = cljs.core.count.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(tile));
var angle = ((Math.PI * (2)) / n);
game.pixi.rotate_BANG_.call(null,new cljs.core.Keyword(null,"conn-sprite","conn-sprite",1838648251).cljs$core$IFn$_invoke$arity$1(tile),angle);

game.pixi.rotate_BANG_.call(null,new cljs.core.Keyword(null,"disc-sprite","disc-sprite",1397525195).cljs$core$IFn$_invoke$arity$1(tile),angle);

return cljs.core.update_in.call(null,tile,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663)], null),((function (n,angle){
return (function (p1__12916_SHARP_){
return cljs.core.take.call(null,n,cljs.core.drop.call(null,(n - (1)),cljs.core.cycle.call(null,p1__12916_SHARP_)));
});})(n,angle))
);
});
game.play.ttype = (function game$play$ttype(var_args){
var args__7329__auto__ = [];
var len__7322__auto___12922 = arguments.length;
var i__7323__auto___12923 = (0);
while(true){
if((i__7323__auto___12923 < len__7322__auto___12922)){
args__7329__auto__.push((arguments[i__7323__auto___12923]));

var G__12924 = (i__7323__auto___12923 + (1));
i__7323__auto___12923 = G__12924;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return game.play.ttype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

game.play.ttype.cljs$core$IFn$_invoke$arity$variadic = (function (p__12919,stuff){
var map__12920 = p__12919;
var map__12920__$1 = ((((!((map__12920 == null)))?((((map__12920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12920):map__12920);
var tile_type = cljs.core.get.call(null,map__12920__$1,new cljs.core.Keyword(null,"tile-type","tile-type",-1513519103));
return tile_type;
});

game.play.ttype.cljs$lang$maxFixedArity = (1);

game.play.ttype.cljs$lang$applyTo = (function (seq12917){
var G__12918 = cljs.core.first.call(null,seq12917);
var seq12917__$1 = cljs.core.next.call(null,seq12917);
return game.play.ttype.cljs$core$IFn$_invoke$arity$variadic(G__12918,seq12917__$1);
});

if(typeof game.play.nb !== 'undefined'){
} else {
game.play.nb = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.play","nb"),game.play.ttype,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.play.nb,new cljs.core.Keyword(null,"ortho","ortho",1692272971),(function (p__12925,id,dir){
var map__12926 = p__12925;
var map__12926__$1 = ((((!((map__12926 == null)))?((((map__12926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12926):map__12926);
var level_data = map__12926__$1;
var width = cljs.core.get.call(null,map__12926__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12926__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tiles = cljs.core.get.call(null,map__12926__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var G__12928 = dir;
switch (G__12928) {
case (0):
if((cljs.core.mod.call(null,id,width) > (0))){
return cljs.core.nth.call(null,tiles,(id - (1)));
} else {
return null;
}

break;
case (1):
if((id >= width)){
return cljs.core.nth.call(null,tiles,(id - width));
} else {
return null;
}

break;
case (2):
if((cljs.core.mod.call(null,(id + (1)),width) > (0))){
return cljs.core.nth.call(null,tiles,(id + (1)));
} else {
return null;
}

break;
case (3):
if((((width * height) - (1)) >= (id + width))){
return cljs.core.nth.call(null,tiles,(id + width));
} else {
return null;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dir)].join('')));

}
}));
if(typeof game.play.tile__GT_pixel !== 'undefined'){
} else {
game.play.tile__GT_pixel = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.play","tile->pixel"),game.play.ttype,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.play.tile__GT_pixel,new cljs.core.Keyword(null,"ortho","ortho",1692272971),(function (p__12930,tile){
var map__12931 = p__12930;
var map__12931__$1 = ((((!((map__12931 == null)))?((((map__12931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12931):map__12931);
var width = cljs.core.get.call(null,map__12931__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12931__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var base_unit = cljs.core.get.call(null,map__12931__$1,new cljs.core.Keyword(null,"base-unit","base-unit",834344087));
var id = ((cljs.core.map_QMARK_.call(null,tile))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tile):tile);
var row = ((id / width) | (0));
var col = cljs.core.mod.call(null,id,width);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(col + 0.5),new cljs.core.Keyword(null,"y","y",-1757859776),(row + 0.5)], null);
}));
if(typeof game.play.pixel__GT_tile !== 'undefined'){
} else {
game.play.pixel__GT_tile = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.play","pixel->tile"),game.play.ttype,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.play.pixel__GT_tile,new cljs.core.Keyword(null,"ortho","ortho",1692272971),(function (p__12933,x,y){
var map__12934 = p__12933;
var map__12934__$1 = ((((!((map__12934 == null)))?((((map__12934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12934):map__12934);
var base_unit = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"base-unit","base-unit",834344087));
var width = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var _PERCENT_ = (function (){var i = ((y / base_unit) | (0));
var j = ((x / base_unit) | (0));
return ((i * width) + j);
})();
if((((0) <= _PERCENT_)) && ((_PERCENT_ <= ((width * height) - (1))))){
} else {
throw (new Error("Assert failed: (<= 0 % (dec (* width height)))"));
}

return _PERCENT_;
}));
game.play.connected_QMARK_ = (function game$play$connected_QMARK_(a,b,a_dir){
var a_conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(a);
var b_conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(b);
var n_conns = cljs.core.count.call(null,a_conn);
var b_dir = cljs.core.mod.call(null,(a_dir + (n_conns / (2))),n_conns);
var and__6235__auto__ = cljs.core.nth.call(null,a_conn,a_dir);
if(cljs.core.truth_(and__6235__auto__)){
return cljs.core.nth.call(null,b_conn,b_dir);
} else {
return and__6235__auto__;
}
});
game.play.all_neighbors = (function game$play$all_neighbors(state,p__12936){
var map__12943 = p__12936;
var map__12943__$1 = ((((!((map__12943 == null)))?((((map__12943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12943):map__12943);
var tile = map__12943__$1;
var conn = cljs.core.get.call(null,map__12943__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var id = cljs.core.get.call(null,map__12943__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.identity,(function (){var iter__7027__auto__ = ((function (map__12943,map__12943__$1,tile,conn,id){
return (function game$play$all_neighbors_$_iter__12945(s__12946){
return (new cljs.core.LazySeq(null,((function (map__12943,map__12943__$1,tile,conn,id){
return (function (){
var s__12946__$1 = s__12946;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12946__$1);
if(temp__4657__auto__){
var s__12946__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12946__$2)){
var c__7025__auto__ = cljs.core.chunk_first.call(null,s__12946__$2);
var size__7026__auto__ = cljs.core.count.call(null,c__7025__auto__);
var b__12948 = cljs.core.chunk_buffer.call(null,size__7026__auto__);
if((function (){var i__12947 = (0);
while(true){
if((i__12947 < size__7026__auto__)){
var i = cljs.core._nth.call(null,c__7025__auto__,i__12947);
cljs.core.chunk_append.call(null,b__12948,(function (){var temp__4655__auto__ = game.play.nb.call(null,state,id,i);
if(cljs.core.truth_(temp__4655__auto__)){
var neighbor = temp__4655__auto__;
if(cljs.core.truth_(game.play.connected_QMARK_.call(null,tile,neighbor,i))){
return neighbor;
} else {
return null;
}
} else {
return null;
}
})());

var G__12949 = (i__12947 + (1));
i__12947 = G__12949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12948),game$play$all_neighbors_$_iter__12945.call(null,cljs.core.chunk_rest.call(null,s__12946__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12948),null);
}
} else {
var i = cljs.core.first.call(null,s__12946__$2);
return cljs.core.cons.call(null,(function (){var temp__4655__auto__ = game.play.nb.call(null,state,id,i);
if(cljs.core.truth_(temp__4655__auto__)){
var neighbor = temp__4655__auto__;
if(cljs.core.truth_(game.play.connected_QMARK_.call(null,tile,neighbor,i))){
return neighbor;
} else {
return null;
}
} else {
return null;
}
})(),game$play$all_neighbors_$_iter__12945.call(null,cljs.core.rest.call(null,s__12946__$2)));
}
} else {
return null;
}
break;
}
});})(map__12943,map__12943__$1,tile,conn,id))
,null,null));
});})(map__12943,map__12943__$1,tile,conn,id))
;
return iter__7027__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,conn)));
})()));
});
game.play.show_connected_BANG_ = (function game$play$show_connected_BANG_(p__12950){
var map__12957 = p__12950;
var map__12957__$1 = ((((!((map__12957 == null)))?((((map__12957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12957):map__12957);
var state = map__12957__$1;
var tiles = cljs.core.get.call(null,map__12957__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var start = cljs.core.get.call(null,map__12957__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var walk = ((function (map__12957,map__12957__$1,state,tiles,start){
return (function game$play$show_connected_BANG__$_walk(known,unvisited,this$){
var known__$1 = clojure.set.union.call(null,known,cljs.core.PersistentHashSet.fromArray([this$], true));
var neighbors = clojure.set.difference.call(null,game.play.all_neighbors.call(null,state,this$),unvisited);
var unvisited__$1 = clojure.set.difference.call(null,clojure.set.union.call(null,unvisited,neighbors),known__$1);
var next = cljs.core.first.call(null,unvisited__$1);
if(cljs.core.truth_(next)){
return cljs.core.into.call(null,game$play$show_connected_BANG__$_walk.call(null,known__$1,unvisited__$1,next),cljs.core.PersistentHashSet.fromArray([this$], true));
} else {
return cljs.core.PersistentHashSet.fromArray([this$], true);
}
});})(map__12957,map__12957__$1,state,tiles,start))
;
var connected = walk.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.nth.call(null,tiles,start));
var seq__12959_12963 = cljs.core.seq.call(null,tiles);
var chunk__12960_12964 = null;
var count__12961_12965 = (0);
var i__12962_12966 = (0);
while(true){
if((i__12962_12966 < count__12961_12965)){
var tile_12967 = cljs.core._nth.call(null,chunk__12960_12964,i__12962_12966);
game.play.display_connection_BANG_.call(null,tile_12967,cljs.core.contains_QMARK_.call(null,connected,tile_12967));

var G__12968 = seq__12959_12963;
var G__12969 = chunk__12960_12964;
var G__12970 = count__12961_12965;
var G__12971 = (i__12962_12966 + (1));
seq__12959_12963 = G__12968;
chunk__12960_12964 = G__12969;
count__12961_12965 = G__12970;
i__12962_12966 = G__12971;
continue;
} else {
var temp__4657__auto___12972 = cljs.core.seq.call(null,seq__12959_12963);
if(temp__4657__auto___12972){
var seq__12959_12973__$1 = temp__4657__auto___12972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12959_12973__$1)){
var c__7058__auto___12974 = cljs.core.chunk_first.call(null,seq__12959_12973__$1);
var G__12975 = cljs.core.chunk_rest.call(null,seq__12959_12973__$1);
var G__12976 = c__7058__auto___12974;
var G__12977 = cljs.core.count.call(null,c__7058__auto___12974);
var G__12978 = (0);
seq__12959_12963 = G__12975;
chunk__12960_12964 = G__12976;
count__12961_12965 = G__12977;
i__12962_12966 = G__12978;
continue;
} else {
var tile_12979 = cljs.core.first.call(null,seq__12959_12973__$1);
game.play.display_connection_BANG_.call(null,tile_12979,cljs.core.contains_QMARK_.call(null,connected,tile_12979));

var G__12980 = cljs.core.next.call(null,seq__12959_12973__$1);
var G__12981 = null;
var G__12982 = (0);
var G__12983 = (0);
seq__12959_12963 = G__12980;
chunk__12960_12964 = G__12981;
count__12961_12965 = G__12982;
i__12962_12966 = G__12983;
continue;
}
} else {
}
}
break;
}

return state;
});
game.play.num_conns = (function game$play$num_conns(tile){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.true_QMARK_,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(tile)));
});
game.play.level_won_QMARK_ = (function game$play$level_won_QMARK_(p__12984){
var map__12987 = p__12984;
var map__12987__$1 = ((((!((map__12987 == null)))?((((map__12987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12987):map__12987);
var state = map__12987__$1;
var tiles = cljs.core.get.call(null,map__12987__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,((function (map__12987,map__12987__$1,state,tiles){
return (function (tile){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,game.play.all_neighbors.call(null,state,tile)),game.play.num_conns.call(null,tile));
});})(map__12987,map__12987__$1,state,tiles))
,tiles));
});
game.play.mk_sprites = (function game$play$mk_sprites(atlas,type){
var atlas__$1 = (((atlas instanceof cljs.core.Keyword))?atlas:cljs.core.keyword.call(null,atlas));
var textures = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.assets.get_tex.call(null,atlas__$1,[cljs.core.str("t"),cljs.core.str(type),cljs.core.str(".png")].join('')),game.assets.get_tex.call(null,atlas__$1,[cljs.core.str("s"),cljs.core.str(type),cljs.core.str(".png")].join(''))], null);
var sprites = cljs.core.map.call(null,((function (atlas__$1,textures){
return (function (p1__12989_SHARP_){
return game.pixi.mk_sprite.call(null,p1__12989_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"w","w",354169001),1.01,new cljs.core.Keyword(null,"h","h",1109658740),1.01,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"x","x",2099068185),0.5,new cljs.core.Keyword(null,"y","y",-1757859776),0.5);
});})(atlas__$1,textures))
,textures);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disc-sprite","disc-sprite",1397525195),cljs.core.first.call(null,sprites),new cljs.core.Keyword(null,"conn-sprite","conn-sprite",1838648251),cljs.core.second.call(null,sprites)], null);
});
game.play.mk_tile = (function game$play$mk_tile(p__12991,tile){
var map__12994 = p__12991;
var map__12994__$1 = ((((!((map__12994 == null)))?((((map__12994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12994):map__12994);
var tile_type = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"tile-type","tile-type",-1513519103));
var atlas = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"atlas","atlas",1594808522));
return ((function (map__12994,map__12994__$1,tile_type,atlas){
return (function (p1__12990_SHARP_){
var r = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(tile);
var tile__$1 = p1__12990_SHARP_;
while(true){
if(((0) < r)){
var G__12996 = (r - (1));
var G__12997 = game.play.rotate_tile.call(null,tile__$1);
r = G__12996;
tile__$1 = G__12997;
continue;
} else {
return tile__$1;
}
break;
}
});})(map__12994,map__12994__$1,tile_type,atlas))
.call(null,cljs.core.into.call(null,game.play.mk_sprites.call(null,atlas,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(tile)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conn","conn",278309663),cljs.core.get.call(null,((cljs.core._EQ_.call(null,cljs.core.keyword.call(null,tile_type),new cljs.core.Keyword(null,"ortho","ortho",1692272971)))?game.play.ortho_tiles:game.play.hex_tiles),new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(tile))], null)));
});
game.play.place_tiles_BANG_ = (function game$play$place_tiles_BANG_(p__12998){
var map__13009 = p__12998;
var map__13009__$1 = ((((!((map__13009 == null)))?((((map__13009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13009):map__13009);
var state = map__13009__$1;
var tiles = cljs.core.get.call(null,map__13009__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var base_unit = cljs.core.get.call(null,map__13009__$1,new cljs.core.Keyword(null,"base-unit","base-unit",834344087));
var seq__13011_13019 = cljs.core.seq.call(null,tiles);
var chunk__13012_13020 = null;
var count__13013_13021 = (0);
var i__13014_13022 = (0);
while(true){
if((i__13014_13022 < count__13013_13021)){
var tile_13023 = cljs.core._nth.call(null,chunk__13012_13020,i__13014_13022);
var map__13015_13024 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(tile_13023);
var map__13015_13025__$1 = ((((!((map__13015_13024 == null)))?((((map__13015_13024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13015_13024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13015_13024):map__13015_13024);
var x_13026 = cljs.core.get.call(null,map__13015_13025__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_13027 = cljs.core.get.call(null,map__13015_13025__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
game.pixi.update_sprite_BANG_.call(null,new cljs.core.Keyword(null,"conn-sprite","conn-sprite",1838648251).cljs$core$IFn$_invoke$arity$1(tile_13023),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185),x_13026,new cljs.core.Keyword(null,"y","y",-1757859776),y_13027);

game.pixi.update_sprite_BANG_.call(null,new cljs.core.Keyword(null,"disc-sprite","disc-sprite",1397525195).cljs$core$IFn$_invoke$arity$1(tile_13023),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185),x_13026,new cljs.core.Keyword(null,"y","y",-1757859776),y_13027);

var G__13028 = seq__13011_13019;
var G__13029 = chunk__13012_13020;
var G__13030 = count__13013_13021;
var G__13031 = (i__13014_13022 + (1));
seq__13011_13019 = G__13028;
chunk__13012_13020 = G__13029;
count__13013_13021 = G__13030;
i__13014_13022 = G__13031;
continue;
} else {
var temp__4657__auto___13032 = cljs.core.seq.call(null,seq__13011_13019);
if(temp__4657__auto___13032){
var seq__13011_13033__$1 = temp__4657__auto___13032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13011_13033__$1)){
var c__7058__auto___13034 = cljs.core.chunk_first.call(null,seq__13011_13033__$1);
var G__13035 = cljs.core.chunk_rest.call(null,seq__13011_13033__$1);
var G__13036 = c__7058__auto___13034;
var G__13037 = cljs.core.count.call(null,c__7058__auto___13034);
var G__13038 = (0);
seq__13011_13019 = G__13035;
chunk__13012_13020 = G__13036;
count__13013_13021 = G__13037;
i__13014_13022 = G__13038;
continue;
} else {
var tile_13039 = cljs.core.first.call(null,seq__13011_13033__$1);
var map__13017_13040 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(tile_13039);
var map__13017_13041__$1 = ((((!((map__13017_13040 == null)))?((((map__13017_13040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13017_13040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13017_13040):map__13017_13040);
var x_13042 = cljs.core.get.call(null,map__13017_13041__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_13043 = cljs.core.get.call(null,map__13017_13041__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
game.pixi.update_sprite_BANG_.call(null,new cljs.core.Keyword(null,"conn-sprite","conn-sprite",1838648251).cljs$core$IFn$_invoke$arity$1(tile_13039),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185),x_13042,new cljs.core.Keyword(null,"y","y",-1757859776),y_13043);

game.pixi.update_sprite_BANG_.call(null,new cljs.core.Keyword(null,"disc-sprite","disc-sprite",1397525195).cljs$core$IFn$_invoke$arity$1(tile_13039),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185),x_13042,new cljs.core.Keyword(null,"y","y",-1757859776),y_13043);

var G__13044 = cljs.core.next.call(null,seq__13011_13033__$1);
var G__13045 = null;
var G__13046 = (0);
var G__13047 = (0);
seq__13011_13019 = G__13044;
chunk__13012_13020 = G__13045;
count__13013_13021 = G__13046;
i__13014_13022 = G__13047;
continue;
}
} else {
}
}
break;
}

return state;
});
game.play.show_tiles_BANG_ = (function game$play$show_tiles_BANG_(p__13048){
var map__13055 = p__13048;
var map__13055__$1 = ((((!((map__13055 == null)))?((((map__13055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13055):map__13055);
var state = map__13055__$1;
var tiles = cljs.core.get.call(null,map__13055__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var stage = cljs.core.get.call(null,map__13055__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var seq__13057_13061 = cljs.core.seq.call(null,tiles);
var chunk__13058_13062 = null;
var count__13059_13063 = (0);
var i__13060_13064 = (0);
while(true){
if((i__13060_13064 < count__13059_13063)){
var tile_13065 = cljs.core._nth.call(null,chunk__13058_13062,i__13060_13064);
stage.addChild(new cljs.core.Keyword(null,"conn-sprite","conn-sprite",1838648251).cljs$core$IFn$_invoke$arity$1(tile_13065));

stage.addChild(new cljs.core.Keyword(null,"disc-sprite","disc-sprite",1397525195).cljs$core$IFn$_invoke$arity$1(tile_13065));

var G__13066 = seq__13057_13061;
var G__13067 = chunk__13058_13062;
var G__13068 = count__13059_13063;
var G__13069 = (i__13060_13064 + (1));
seq__13057_13061 = G__13066;
chunk__13058_13062 = G__13067;
count__13059_13063 = G__13068;
i__13060_13064 = G__13069;
continue;
} else {
var temp__4657__auto___13070 = cljs.core.seq.call(null,seq__13057_13061);
if(temp__4657__auto___13070){
var seq__13057_13071__$1 = temp__4657__auto___13070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13057_13071__$1)){
var c__7058__auto___13072 = cljs.core.chunk_first.call(null,seq__13057_13071__$1);
var G__13073 = cljs.core.chunk_rest.call(null,seq__13057_13071__$1);
var G__13074 = c__7058__auto___13072;
var G__13075 = cljs.core.count.call(null,c__7058__auto___13072);
var G__13076 = (0);
seq__13057_13061 = G__13073;
chunk__13058_13062 = G__13074;
count__13059_13063 = G__13075;
i__13060_13064 = G__13076;
continue;
} else {
var tile_13077 = cljs.core.first.call(null,seq__13057_13071__$1);
stage.addChild(new cljs.core.Keyword(null,"conn-sprite","conn-sprite",1838648251).cljs$core$IFn$_invoke$arity$1(tile_13077));

stage.addChild(new cljs.core.Keyword(null,"disc-sprite","disc-sprite",1397525195).cljs$core$IFn$_invoke$arity$1(tile_13077));

var G__13078 = cljs.core.next.call(null,seq__13057_13071__$1);
var G__13079 = null;
var G__13080 = (0);
var G__13081 = (0);
seq__13057_13061 = G__13078;
chunk__13058_13062 = G__13079;
count__13059_13063 = G__13080;
i__13060_13064 = G__13081;
continue;
}
} else {
}
}
break;
}

game.play.req_action.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redraw","redraw",-1075394793)], null));

return state;
});
if(typeof game.play.board_aspect !== 'undefined'){
} else {
game.play.board_aspect = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.play","board-aspect"),game.play.ttype,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.play.board_aspect,new cljs.core.Keyword(null,"ortho","ortho",1692272971),(function (state){
return (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(state));
}));
if(typeof game.play.base_unit !== 'undefined'){
} else {
game.play.base_unit = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.play","base-unit"),game.play.ttype,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.play.base_unit,new cljs.core.Keyword(null,"ortho","ortho",1692272971),(function (state){
return (new cljs.core.Keyword(null,"cnv-w","cnv-w",-1133821338).cljs$core$IFn$_invoke$arity$1(state) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state));
}));
game.play.finalize_resizing = (function game$play$finalize_resizing(state){
return game.play.place_tiles_BANG_.call(null,cljs.core.update_in.call(null,(function (p1__13082_SHARP_){
return cljs.core.update_in.call(null,p1__13082_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),cljs.core.partial.call(null,cljs.core.map,(function (tile){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"pos","pos",-864607220),game.play.tile__GT_pixel.call(null,p1__13082_SHARP_,tile));
})));
}).call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"base-unit","base-unit",834344087),game.play.base_unit.call(null,state))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),cljs.core.vec));
});
game.play.screen_mode = (function game$play$screen_mode(_){
if((window.innerWidth > window.innerHeight)){
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
} else {
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
}
});
game.play.center_in = (function game$play$center_in(big,small){
return ((big - small) / (2));
});
game.play.resize = (function game$play$resize(p__13083){
var map__13092 = p__13083;
var map__13092__$1 = ((((!((map__13092 == null)))?((((map__13092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13092):map__13092);
var state = map__13092__$1;
var width = cljs.core.get.call(null,map__13092__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__13092__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var stage = cljs.core.get.call(null,map__13092__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var renderer = cljs.core.get.call(null,map__13092__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var aspect = game.play.board_aspect.call(null,state);
var screen_w = window.innerWidth;
var screen_h = window.innerHeight;
var vec__13094 = (((screen_w < screen_h))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_w,(screen_w / aspect)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(screen_h * aspect),screen_h], null));
var cnv_w = cljs.core.nth.call(null,vec__13094,(0),null);
var cnv_h = cljs.core.nth.call(null,vec__13094,(1),null);
var vec__13097 = (((screen_w < screen_h))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),game.play.center_in.call(null,screen_h,cnv_h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.play.center_in.call(null,screen_w,cnv_w),(0)], null));
var left = cljs.core.nth.call(null,vec__13097,(0),null);
var top = cljs.core.nth.call(null,vec__13097,(1),null);
var cnv = document.getElementById("canvas");
renderer.resize(cnv_w,cnv_h);

dommy.core.set_style_BANG_.call(null,cnv,new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(left),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str(top),cljs.core.str("px")].join(''));

stage.scale.set((cnv_w / width),(cnv_h / height));

return game.play.finalize_resizing.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cnv-w","cnv-w",-1133821338),cnv_w,new cljs.core.Keyword(null,"cnv-h","cnv-h",1182794953),cnv_h,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top));
});
game.play.init_from_level = (function game$play$init_from_level(level_data){
var map__13102 = level_data;
var map__13102__$1 = ((((!((map__13102 == null)))?((((map__13102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13102):map__13102);
var tiles = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var start = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,level_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atlas","atlas",1594808522)], null),cljs.core.keyword),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-type","tile-type",-1513519103)], null),cljs.core.keyword),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,game.play.mk_tile,level_data))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),cljs.core.partial.call(null,cljs.core.map_indexed,((function (map__13102,map__13102__$1,tiles,start){
return (function (idx,tile){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"id","id",-1388402092),idx);
});})(map__13102,map__13102__$1,tiles,start))
)),new cljs.core.Keyword(null,"time","time",1385887882),(0));
});
game.play.time_tick = (function game$play$time_tick(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.inc);
});
game.play.exit_level = (function game$play$exit_level(_){
game.assets.play_sound.call(null,new cljs.core.Keyword(null,"level","level",1290497552));

var c__8907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8907__auto__){
return (function (){
var f__8908__auto__ = (function (){var switch__8886__auto__ = ((function (c__8907__auto__){
return (function (state_13140){
var state_val_13141 = (state_13140[(1)]);
if((state_val_13141 === (1))){
var inst_13127 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13128 = [new cljs.core.Keyword(null,"as","as",1148689641)];
var inst_13129 = [new cljs.core.Keyword(null,"json","json",1279968570)];
var inst_13130 = cljs.core.PersistentHashMap.fromArrays(inst_13128,inst_13129);
var inst_13131 = cljs_http.client.get.call(null,"level/ortho_test2.json",inst_13130);
var state_13140__$1 = (function (){var statearr_13142 = state_13140;
(statearr_13142[(7)] = inst_13127);

return statearr_13142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13140__$1,(3),inst_13131);
} else {
if((state_val_13141 === (2))){
var inst_13138 = (state_13140[(2)]);
var state_13140__$1 = state_13140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13140__$1,inst_13138);
} else {
if((state_val_13141 === (3))){
var inst_13127 = (state_13140[(7)]);
var inst_13133 = (state_13140[(2)]);
var inst_13134 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13133);
var inst_13135 = [new cljs.core.Keyword(null,"play","play",-580418022),inst_13134];
var inst_13136 = (new cljs.core.PersistentVector(null,2,(5),inst_13127,inst_13135,null));
var state_13140__$1 = state_13140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13140__$1,(2),game.chans.state,inst_13136);
} else {
return null;
}
}
}
});})(c__8907__auto__))
;
return ((function (switch__8886__auto__,c__8907__auto__){
return (function() {
var game$play$exit_level_$_state_machine__8887__auto__ = null;
var game$play$exit_level_$_state_machine__8887__auto____0 = (function (){
var statearr_13146 = [null,null,null,null,null,null,null,null];
(statearr_13146[(0)] = game$play$exit_level_$_state_machine__8887__auto__);

(statearr_13146[(1)] = (1));

return statearr_13146;
});
var game$play$exit_level_$_state_machine__8887__auto____1 = (function (state_13140){
while(true){
var ret_value__8888__auto__ = (function (){try{while(true){
var result__8889__auto__ = switch__8886__auto__.call(null,state_13140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8889__auto__;
}
break;
}
}catch (e13147){if((e13147 instanceof Object)){
var ex__8890__auto__ = e13147;
var statearr_13148_13150 = state_13140;
(statearr_13148_13150[(5)] = ex__8890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13151 = state_13140;
state_13140 = G__13151;
continue;
} else {
return ret_value__8888__auto__;
}
break;
}
});
game$play$exit_level_$_state_machine__8887__auto__ = function(state_13140){
switch(arguments.length){
case 0:
return game$play$exit_level_$_state_machine__8887__auto____0.call(this);
case 1:
return game$play$exit_level_$_state_machine__8887__auto____1.call(this,state_13140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$play$exit_level_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$0 = game$play$exit_level_$_state_machine__8887__auto____0;
game$play$exit_level_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$1 = game$play$exit_level_$_state_machine__8887__auto____1;
return game$play$exit_level_$_state_machine__8887__auto__;
})()
;})(switch__8886__auto__,c__8907__auto__))
})();
var state__8909__auto__ = (function (){var statearr_13149 = f__8908__auto__.call(null);
(statearr_13149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8907__auto__);

return statearr_13149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8909__auto__);
});})(c__8907__auto__))
);

return c__8907__auto__;
});
if(typeof game.play.action !== 'undefined'){
} else {
game.play.action = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.play","action"),((function (method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__,hierarchy__7176__auto__){
return (function (event,_){
return cljs.core.first.call(null,event);
});})(method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__,hierarchy__7176__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.play.action,new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (event,state){
var vec__13153 = event;
var _ = cljs.core.nth.call(null,vec__13153,(0),null);
var x = cljs.core.nth.call(null,vec__13153,(1),null);
var y = cljs.core.nth.call(null,vec__13153,(2),null);
var x__$1 = (x - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(state));
var y__$1 = (y - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(state));
var state__$1 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),game.play.pixel__GT_tile.call(null,state,x__$1,y__$1)], null),game.play.rotate_tile);
game.assets.play_sound.call(null,cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click1","click1",-2077734044),new cljs.core.Keyword(null,"click2","click2",-1642802445),new cljs.core.Keyword(null,"click3","click3",262848281)], null),new cljs.core.Keyword(null,"snd","snd",643718828).cljs$core$IFn$_invoke$arity$1(state__$1)));

game.play.show_connected_BANG_.call(null,state__$1);

game.play.req_action.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redraw","redraw",-1075394793)], null));

if(cljs.core.truth_(game.play.level_won_QMARK_.call(null,state__$1))){
game.play.req_action.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"won","won",910394405)], null));
} else {
}

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",927465255)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snd","snd",643718828)], null),((function (vec__13153,_,x,y,x__$1,y__$1,state__$1){
return (function (p1__13152_SHARP_){
return cljs.core.mod.call(null,(p1__13152_SHARP_ + (1)),(3));
});})(vec__13153,_,x,y,x__$1,y__$1,state__$1))
);
}));
cljs.core._add_method.call(null,game.play.action,new cljs.core.Keyword(null,"redraw","redraw",-1075394793),(function (_,p__13156){
var map__13157 = p__13156;
var map__13157__$1 = ((((!((map__13157 == null)))?((((map__13157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13157):map__13157);
var state = map__13157__$1;
var renderer = cljs.core.get.call(null,map__13157__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var stage = cljs.core.get.call(null,map__13157__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
renderer.render(stage);

return state;
}));
cljs.core._add_method.call(null,game.play.action,new cljs.core.Keyword(null,"resize","resize",297367086),(function (_,state){
return game.play.action.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redraw","redraw",-1075394793)], null),game.play.resize.call(null,state));
}));
cljs.core._add_method.call(null,game.play.action,new cljs.core.Keyword(null,"won","won",910394405),(function (_,state){
dommy.core.unlisten_BANG_.call(null,document.getElementById("canvas"),new cljs.core.Keyword(null,"click","click",1912301393),game.play.mouse_fn,new cljs.core.Keyword(null,"touchstart","touchstart",369858804),game.play.touch_fn);

dommy.core.listen_BANG_.call(null,document.getElementById("level"),new cljs.core.Keyword(null,"click","click",1912301393),game.play.exit_level,new cljs.core.Keyword(null,"touchstart","touchstart",369858804),game.play.exit_level);

alert([cljs.core.str("Won after "),cljs.core.str(new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.str(" moves, "),cljs.core.str((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state) / (60))),cljs.core.str(" seconds")].join(''));

return state;
}));
game.play.init = (function game$play$init(){
dommy.core.append_BANG_.call(null,document.body,(function (){var v13160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.view","span.view",1041541939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"level"], null)], null);
var el__7659__auto__ = hipo.interpreter.create.call(null,v13160,null);
hipo.core.set_hiccup_BANG_.call(null,el__7659__auto__,v13160);

return el__7659__auto__;
})());

return game.pixi.mk_view.call(null,(500),(500),new cljs.core.Keyword(null,"#level","#level",-1748173145));
});
game.play.enter = (function game$play$enter(state){
dommy.core.set_style_BANG_.call(null,document.getElementById("level"),new cljs.core.Keyword(null,"left","left",-399115937),"0");

dommy.core.unlisten_BANG_.call(null,document.getElementById("level"),new cljs.core.Keyword(null,"click","click",1912301393),game.play.exit_level,new cljs.core.Keyword(null,"touchstart","touchstart",369858804),game.play.exit_level);

dommy.core.listen_BANG_.call(null,document.getElementById("canvas"),new cljs.core.Keyword(null,"click","click",1912301393),game.play.mouse_fn,new cljs.core.Keyword(null,"touchstart","touchstart",369858804),game.play.touch_fn);

dommy.core.listen_BANG_.call(null,window,new cljs.core.Keyword(null,"resize","resize",297367086),(function (_){
return game.play.req_action.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resize","resize",297367086)], null));
}));

return game.play.show_connected_BANG_.call(null,cljs.core.update_in.call(null,(function (st){
var map__13163_13165 = game.play.tile__GT_pixel.call(null,st,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(st));
var map__13163_13166__$1 = ((((!((map__13163_13165 == null)))?((((map__13163_13165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13163_13165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13163_13165):map__13163_13165);
var x_13167 = cljs.core.get.call(null,map__13163_13166__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_13168 = cljs.core.get.call(null,map__13163_13166__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(st).addChild(game.pixi.mk_sprite.call(null,game.assets.get_tex.call(null,new cljs.core.Keyword(null,"atlas","atlas",1594808522).cljs$core$IFn$_invoke$arity$1(st),"star.png"),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"x","x",2099068185),0.5,new cljs.core.Keyword(null,"y","y",-1757859776),0.5,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185),x_13167,new cljs.core.Keyword(null,"y","y",-1757859776),y_13168,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"w","w",354169001),(1),new cljs.core.Keyword(null,"h","h",1109658740),(1)));

return st;
}).call(null,game.play.show_tiles_BANG_.call(null,cljs.core.assoc.call(null,game.play.resize.call(null,cljs.core.assoc.call(null,cljs.core.into.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stage","stage",1843544772),(new game.play.pixi.Container())),game.play.init_from_level.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"enter-info","enter-info",1386357938).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"snd","snd",643718828),(0))),new cljs.core.Keyword(null,"moves","moves",927465255),(0)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),cljs.core.vec));
});
game.play.leave = (function game$play$leave(state){
dommy.core.set_style_BANG_.call(null,document.getElementById("level"),new cljs.core.Keyword(null,"left","left",-399115937),"100%");

new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(state).destroy();

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"stage","stage",1843544772));
});
game.play.mk_state = (function game$play$mk_state(){
return cljs.core.into.call(null,game.play.init.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enter","enter",1792452624),game.play.enter,new cljs.core.Keyword(null,"leave","leave",1022579443),game.play.leave,new cljs.core.Keyword(null,"process-evt","process-evt",-1905216397),game.play.action,new cljs.core.Keyword(null,"time-tick","time-tick",331405371),game.play.time_tick,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (state){
return state;
})], null));
});

//# sourceMappingURL=play.js.map