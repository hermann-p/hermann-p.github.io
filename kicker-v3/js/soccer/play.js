// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.play');
goog.require('cljs.core');
goog.require('soccer.channels');
goog.require('cljs.core.async');
goog.require('soccer.pixi');
goog.require('soccer.assets');
goog.require('dommy.core');
if(typeof soccer.play.g !== 'undefined'){
} else {
soccer.play.g = 9.81;
}
if(typeof soccer.play.dt !== 'undefined'){
} else {
soccer.play.dt = ((1) / (60));
}
soccer.play.dist = (function soccer$play$dist(a,b){
var vec__54764 = soccer.pixi.get_pos.call(null,a);
var x1 = cljs.core.nth.call(null,vec__54764,(0),null);
var y1 = cljs.core.nth.call(null,vec__54764,(1),null);
var vec__54765 = soccer.pixi.get_pos.call(null,b);
var x2 = cljs.core.nth.call(null,vec__54765,(0),null);
var y2 = cljs.core.nth.call(null,vec__54765,(1),null);
var dx = (x1 - x2);
var dy = (y1 - y2);
return Math.sqrt(((dx * dx) + (dy * dy)));
});
/**
 * Add gravity acceleration to y-speed
 */
soccer.play.apply_gravity = (function soccer$play$apply_gravity(ball){
return cljs.core.update.call(null,ball,new cljs.core.Keyword(null,"vy","vy",-2018509997),cljs.core._PLUS_,(soccer.play.g * soccer.play.dt));
});
/**
 * Apply speed vectors to ball
 */
soccer.play.update_pos = (function soccer$play$update_pos(ball){
return cljs.core.update.call(null,cljs.core.update.call(null,ball,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,(soccer.play.dt * new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(ball))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,(soccer.play.dt * new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(ball)));
});
/**
 * When ball is in range of our foot, set its speed to the position
 *   difference vector
 */
soccer.play.collision = (function soccer$play$collision(p__54766,ball){
var map__54769 = p__54766;
var map__54769__$1 = ((((!((map__54769 == null)))?((((map__54769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54769):map__54769);
var ball_size = cljs.core.get.call(null,map__54769__$1,new cljs.core.Keyword(null,"ball-size","ball-size",-1943594170));
var foot_size = cljs.core.get.call(null,map__54769__$1,new cljs.core.Keyword(null,"foot-size","foot-size",1062826101));
var foot = cljs.core.get.call(null,map__54769__$1,new cljs.core.Keyword(null,"foot","foot",-487226607));
if((new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(ball) > (0))){
var min_dist = (ball_size + foot_size);
var cur_dist = soccer.play.dist.call(null,foot,ball);
if((cur_dist < min_dist)){
soccer.assets.play_sound.call(null,new cljs.core.Keyword(null,"hit-ball","hit-ball",1586655808));

var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(foot));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(foot));
return cljs.core.assoc.call(null,ball,new cljs.core.Keyword(null,"vx","vx",-1685168462),((20) * dx),new cljs.core.Keyword(null,"vy","vy",-2018509997),((10) * dy));
} else {
return ball;
}
} else {
return ball;
}
});
/**
 * Is the ball still visible?
 */
soccer.play.on_screen_QMARK_ = (function soccer$play$on_screen_QMARK_(p__54771,p__54772){
var map__54777 = p__54771;
var map__54777__$1 = ((((!((map__54777 == null)))?((((map__54777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54777):map__54777);
var game = map__54777__$1;
var x_tiles = cljs.core.get.call(null,map__54777__$1,new cljs.core.Keyword(null,"x-tiles","x-tiles",1561421041));
var y_tiles = cljs.core.get.call(null,map__54777__$1,new cljs.core.Keyword(null,"y-tiles","y-tiles",-243091014));
var map__54778 = p__54772;
var map__54778__$1 = ((((!((map__54778 == null)))?((((map__54778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54778):map__54778);
var ball = map__54778__$1;
var x = cljs.core.get.call(null,map__54778__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__54778__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((-1) < x)) && ((x < (x_tiles + (1)))),(y < (y_tiles + (1)))], null));
});
soccer.play.score_ball = (function soccer$play$score_ball(game,ball){
if(cljs.core.not.call(null,soccer.play.on_screen_QMARK_.call(null,game,ball))){
if((new cljs.core.Keyword(null,"y-tiles","y-tiles",-243091014).cljs$core$IFn$_invoke$arity$1(game) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball))){
soccer.assets.play_sound.call(null,new cljs.core.Keyword(null,"sad","sad",427137188));
} else {
soccer.assets.play_sound.call(null,new cljs.core.Keyword(null,"cheer","cheer",671821149));
}
} else {
}

return ball;
});
soccer.play.register_entity_BANG_ = (function soccer$play$register_entity_BANG_(p__54781,p__54782){
var map__54787 = p__54781;
var map__54787__$1 = ((((!((map__54787 == null)))?((((map__54787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54787):map__54787);
var stage = cljs.core.get.call(null,map__54787__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var map__54788 = p__54782;
var map__54788__$1 = ((((!((map__54788 == null)))?((((map__54788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54788):map__54788);
var en = map__54788__$1;
var sprite = cljs.core.get.call(null,map__54788__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
stage.addChild(sprite);

return en;
});
soccer.play.remove_entity_BANG_ = (function soccer$play$remove_entity_BANG_(p__54791,p__54792){
var map__54797 = p__54791;
var map__54797__$1 = ((((!((map__54797 == null)))?((((map__54797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54797):map__54797);
var stage = cljs.core.get.call(null,map__54797__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var map__54798 = p__54792;
var map__54798__$1 = ((((!((map__54798 == null)))?((((map__54798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54798):map__54798);
var en = map__54798__$1;
var sprite = cljs.core.get.call(null,map__54798__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
stage.removeChild(sprite);

return en;
});
soccer.play.mk_entity = (function soccer$play$mk_entity(var_args){
var args__5645__auto__ = [];
var len__5638__auto___54805 = arguments.length;
var i__5639__auto___54806 = (0);
while(true){
if((i__5639__auto___54806 < len__5638__auto___54805)){
args__5645__auto__.push((arguments[i__5639__auto___54806]));

var G__54807 = (i__5639__auto___54806 + (1));
i__5639__auto___54806 = G__54807;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((3) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((3)),(0))):null);
return soccer.play.mk_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5646__auto__);
});

soccer.play.mk_entity.cljs$core$IFn$_invoke$arity$variadic = (function (t,x,y,args){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.apply.call(null,soccer.pixi.mk_sprite,soccer.assets.get_tex.call(null,t),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,args),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});

soccer.play.mk_entity.cljs$lang$maxFixedArity = (3);

soccer.play.mk_entity.cljs$lang$applyTo = (function (seq54801){
var G__54802 = cljs.core.first.call(null,seq54801);
var seq54801__$1 = cljs.core.next.call(null,seq54801);
var G__54803 = cljs.core.first.call(null,seq54801__$1);
var seq54801__$2 = cljs.core.next.call(null,seq54801__$1);
var G__54804 = cljs.core.first.call(null,seq54801__$2);
var seq54801__$3 = cljs.core.next.call(null,seq54801__$2);
return soccer.play.mk_entity.cljs$core$IFn$_invoke$arity$variadic(G__54802,G__54803,G__54804,seq54801__$3);
});
soccer.play.mk_ball = (function soccer$play$mk_ball(x,y,r){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0)], null),soccer.play.mk_entity.call(null,new cljs.core.Keyword(null,"ball","ball",542859139),x,y,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"w","w",354169001),((2) * r),new cljs.core.Keyword(null,"h","h",1109658740),((2) * r),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"x","x",2099068185),0.5,new cljs.core.Keyword(null,"y","y",-1757859776),0.5));
});
soccer.play.to_screen = (function soccer$play$to_screen(x,y,p__54808){
var map__54811 = p__54808;
var map__54811__$1 = ((((!((map__54811 == null)))?((((map__54811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54811):map__54811);
var x_tiles = cljs.core.get.call(null,map__54811__$1,new cljs.core.Keyword(null,"x-tiles","x-tiles",1561421041));
var y_tiles = cljs.core.get.call(null,map__54811__$1,new cljs.core.Keyword(null,"y-tiles","y-tiles",-243091014));
var width = window.innerWidth;
var height = window.innerHeight;
var sx = (x * (width / x_tiles));
var sy = (y * (height / y_tiles));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null);
});
soccer.play.to_game = (function soccer$play$to_game(x,y,p__54813){
var map__54816 = p__54813;
var map__54816__$1 = ((((!((map__54816 == null)))?((((map__54816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54816):map__54816);
var x_tiles = cljs.core.get.call(null,map__54816__$1,new cljs.core.Keyword(null,"x-tiles","x-tiles",1561421041));
var y_tiles = cljs.core.get.call(null,map__54816__$1,new cljs.core.Keyword(null,"y-tiles","y-tiles",-243091014));
var width = window.innerWidth;
var height = window.innerHeight;
var gx = (x * (x_tiles / width));
var gy = (y * (y_tiles / height));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gx,gy], null);
});
if(typeof soccer.play.action !== 'undefined'){
} else {
soccer.play.action = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.play","action"),((function (method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__,hierarchy__5497__auto__){
return (function (evt,_){
return cljs.core.first.call(null,evt);
});})(method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__,hierarchy__5497__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.play.action,new cljs.core.Keyword(null,"startdrag","startdrag",-1284613324),(function (p__54818,game){
var vec__54819 = p__54818;
var _ = cljs.core.nth.call(null,vec__54819,(0),null);
var x = cljs.core.nth.call(null,vec__54819,(1),null);
var y = cljs.core.nth.call(null,vec__54819,(2),null);
return soccer.play.action.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag","drag",449951290),x,y], null),cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true));
}));
cljs.core._add_method.call(null,soccer.play.action,new cljs.core.Keyword(null,"enddrag","enddrag",-175684184),(function (_,game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);
}));
cljs.core._add_method.call(null,soccer.play.action,new cljs.core.Keyword(null,"move","move",-2110884309),(function (p__54820,game){
var vec__54821 = p__54820;
var _ = cljs.core.nth.call(null,vec__54821,(0),null);
var x = cljs.core.nth.call(null,vec__54821,(1),null);
var y = cljs.core.nth.call(null,vec__54821,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(game))){
return soccer.play.action.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag","drag",449951290),x,y], null),game);
} else {
return game;
}
}));
cljs.core._add_method.call(null,soccer.play.action,new cljs.core.Keyword(null,"drag","drag",449951290),(function (p__54822,game){
var vec__54823 = p__54822;
var _ = cljs.core.nth.call(null,vec__54823,(0),null);
var x = cljs.core.nth.call(null,vec__54823,(1),null);
var y = cljs.core.nth.call(null,vec__54823,(2),null);
var vec__54824 = soccer.play.to_game.call(null,x,y,game);
var nx = cljs.core.nth.call(null,vec__54824,(0),null);
var ny = cljs.core.nth.call(null,vec__54824,(1),null);
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"foot","foot",-487226607),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"foot","foot",-487226607).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny));
}));
cljs.core._add_method.call(null,soccer.play.action,new cljs.core.Keyword(null,"add-ball","add-ball",-1756478446),(function (v,p__54825){
var map__54826 = p__54825;
var map__54826__$1 = ((((!((map__54826 == null)))?((((map__54826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54826):map__54826);
var game = map__54826__$1;
var ball_size = cljs.core.get.call(null,map__54826__$1,new cljs.core.Keyword(null,"ball-size","ball-size",-1943594170));
var balls = cljs.core.get.call(null,map__54826__$1,new cljs.core.Keyword(null,"balls","balls",1987549674));
var x_tiles = cljs.core.get.call(null,map__54826__$1,new cljs.core.Keyword(null,"x-tiles","x-tiles",1561421041));
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"balls","balls",1987549674),cljs.core.conj.call(null,balls,soccer.play.register_entity_BANG_.call(null,game,soccer.pixi.update_sprite_BANG_.call(null,soccer.play.mk_ball.call(null,cljs.core.rand.call(null,x_tiles),(-1),ball_size),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"fg-layer","fg-layer",-1616098109).cljs$core$IFn$_invoke$arity$1(game)))));
}));
soccer.play.time_step = (function soccer$play$time_step(p__54828){
var map__54850 = p__54828;
var map__54850__$1 = ((((!((map__54850 == null)))?((((map__54850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54850):map__54850);
var game = map__54850__$1;
var balls = cljs.core.get.call(null,map__54850__$1,new cljs.core.Keyword(null,"balls","balls",1987549674));
var time = cljs.core.get.call(null,map__54850__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var spawn_intervall = cljs.core.get.call(null,map__54850__$1,new cljs.core.Keyword(null,"spawn-intervall","spawn-intervall",18137975));
var seq__54852_54871 = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.partial.call(null,soccer.play.on_screen_QMARK_,game)),balls));
var chunk__54853_54872 = null;
var count__54854_54873 = (0);
var i__54855_54874 = (0);
while(true){
if((i__54855_54874 < count__54854_54873)){
var old_ball_54875 = cljs.core._nth.call(null,chunk__54853_54872,i__54855_54874);
soccer.play.remove_entity_BANG_.call(null,game,old_ball_54875);

var G__54876 = seq__54852_54871;
var G__54877 = chunk__54853_54872;
var G__54878 = count__54854_54873;
var G__54879 = (i__54855_54874 + (1));
seq__54852_54871 = G__54876;
chunk__54853_54872 = G__54877;
count__54854_54873 = G__54878;
i__54855_54874 = G__54879;
continue;
} else {
var temp__4657__auto___54880 = cljs.core.seq.call(null,seq__54852_54871);
if(temp__4657__auto___54880){
var seq__54852_54881__$1 = temp__4657__auto___54880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54852_54881__$1)){
var c__5383__auto___54882 = cljs.core.chunk_first.call(null,seq__54852_54881__$1);
var G__54883 = cljs.core.chunk_rest.call(null,seq__54852_54881__$1);
var G__54884 = c__5383__auto___54882;
var G__54885 = cljs.core.count.call(null,c__5383__auto___54882);
var G__54886 = (0);
seq__54852_54871 = G__54883;
chunk__54853_54872 = G__54884;
count__54854_54873 = G__54885;
i__54855_54874 = G__54886;
continue;
} else {
var old_ball_54887 = cljs.core.first.call(null,seq__54852_54881__$1);
soccer.play.remove_entity_BANG_.call(null,game,old_ball_54887);

var G__54888 = cljs.core.next.call(null,seq__54852_54881__$1);
var G__54889 = null;
var G__54890 = (0);
var G__54891 = (0);
seq__54852_54871 = G__54888;
chunk__54853_54872 = G__54889;
count__54854_54873 = G__54890;
i__54855_54874 = G__54891;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,time,spawn_intervall))){
var c__7010__auto___54892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto___54892,map__54850,map__54850__$1,game,balls,time,spawn_intervall){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto___54892,map__54850,map__54850__$1,game,balls,time,spawn_intervall){
return (function (state_54862){
var state_val_54863 = (state_54862[(1)]);
if((state_val_54863 === (1))){
var inst_54856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54857 = [new cljs.core.Keyword(null,"add-ball","add-ball",-1756478446)];
var inst_54858 = (new cljs.core.PersistentVector(null,1,(5),inst_54856,inst_54857,null));
var state_54862__$1 = state_54862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54862__$1,(2),soccer.channels.event_chan,inst_54858);
} else {
if((state_val_54863 === (2))){
var inst_54860 = (state_54862[(2)]);
var state_54862__$1 = state_54862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54862__$1,inst_54860);
} else {
return null;
}
}
});})(c__7010__auto___54892,map__54850,map__54850__$1,game,balls,time,spawn_intervall))
;
return ((function (switch__6989__auto__,c__7010__auto___54892,map__54850,map__54850__$1,game,balls,time,spawn_intervall){
return (function() {
var soccer$play$time_step_$_state_machine__6990__auto__ = null;
var soccer$play$time_step_$_state_machine__6990__auto____0 = (function (){
var statearr_54867 = [null,null,null,null,null,null,null];
(statearr_54867[(0)] = soccer$play$time_step_$_state_machine__6990__auto__);

(statearr_54867[(1)] = (1));

return statearr_54867;
});
var soccer$play$time_step_$_state_machine__6990__auto____1 = (function (state_54862){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_54862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e54868){if((e54868 instanceof Object)){
var ex__6993__auto__ = e54868;
var statearr_54869_54893 = state_54862;
(statearr_54869_54893[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54894 = state_54862;
state_54862 = G__54894;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$play$time_step_$_state_machine__6990__auto__ = function(state_54862){
switch(arguments.length){
case 0:
return soccer$play$time_step_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$play$time_step_$_state_machine__6990__auto____1.call(this,state_54862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$play$time_step_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$play$time_step_$_state_machine__6990__auto____0;
soccer$play$time_step_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$play$time_step_$_state_machine__6990__auto____1;
return soccer$play$time_step_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto___54892,map__54850,map__54850__$1,game,balls,time,spawn_intervall))
})();
var state__7012__auto__ = (function (){var statearr_54870 = f__7011__auto__.call(null);
(statearr_54870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto___54892);

return statearr_54870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto___54892,map__54850,map__54850__$1,game,balls,time,spawn_intervall))
);

} else {
}

return cljs.core.assoc.call(null,cljs.core.update.call(null,game,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc),new cljs.core.Keyword(null,"balls","balls",1987549674),cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,soccer.play.score_ball,game),soccer.play.update_pos,soccer.play.apply_gravity,cljs.core.partial.call(null,soccer.play.collision,game)),cljs.core.filter.call(null,cljs.core.partial.call(null,soccer.play.on_screen_QMARK_,game),balls))));
});
soccer.play.resize = (function soccer$play$resize(p__54895){
var map__54898 = p__54895;
var map__54898__$1 = ((((!((map__54898 == null)))?((((map__54898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54898):map__54898);
var game = map__54898__$1;
var x_tiles = cljs.core.get.call(null,map__54898__$1,new cljs.core.Keyword(null,"x-tiles","x-tiles",1561421041));
var stage = cljs.core.get.call(null,map__54898__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var balls = cljs.core.get.call(null,map__54898__$1,new cljs.core.Keyword(null,"balls","balls",1987549674));
var foot = cljs.core.get.call(null,map__54898__$1,new cljs.core.Keyword(null,"foot","foot",-487226607));
var w = window.innerWidth;
var h = window.innerHeight;
var y_tiles = ((x_tiles * (window.innerHeight / window.innerWidth)) | (0));
var sx = (w / x_tiles);
var sy = (h / y_tiles);
dommy.core.set_attr_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("canvas"))[(0)]),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h);

stage.scale.set(sx,sy);

cljs.core.println.call(null,"field:",[cljs.core.str(x_tiles),cljs.core.str("x"),cljs.core.str(y_tiles)].join(''));

return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"y-tiles","y-tiles",-243091014),y_tiles);
});
soccer.play.enter = (function soccer$play$enter(game){
var x_tiles = (20);
var y_tiles = ((x_tiles * (window.innerHeight / window.innerWidth)) | (0));
var foot_size = 0.5;
var display_list = soccer.pixi.mk_display_list.call(null);
var bg_layer = soccer.pixi.mk_layer.call(null,(-1));
var fg_layer = soccer.pixi.mk_layer.call(null,(1));
var cnv_55040 = (dommy.utils.__GT_Array.call(null,document.getElementsByTagName("canvas"))[(0)]);
dommy.core.listen_BANG_.call(null,cnv_55040,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),((function (cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (p1__54900_SHARP_){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (state_54980){
var state_val_54981 = (state_54980[(1)]);
if((state_val_54981 === (1))){
var inst_54972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54973 = p1__54900_SHARP_.clientX;
var inst_54974 = p1__54900_SHARP_.clientY;
var inst_54975 = [new cljs.core.Keyword(null,"startdrag","startdrag",-1284613324),inst_54973,inst_54974];
var inst_54976 = (new cljs.core.PersistentVector(null,3,(5),inst_54972,inst_54975,null));
var state_54980__$1 = state_54980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54980__$1,(2),soccer.channels.event_chan,inst_54976);
} else {
if((state_val_54981 === (2))){
var inst_54978 = (state_54980[(2)]);
var state_54980__$1 = state_54980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54980__$1,inst_54978);
} else {
return null;
}
}
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
;
return ((function (switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function() {
var soccer$play$enter_$_state_machine__6990__auto__ = null;
var soccer$play$enter_$_state_machine__6990__auto____0 = (function (){
var statearr_54985 = [null,null,null,null,null,null,null];
(statearr_54985[(0)] = soccer$play$enter_$_state_machine__6990__auto__);

(statearr_54985[(1)] = (1));

return statearr_54985;
});
var soccer$play$enter_$_state_machine__6990__auto____1 = (function (state_54980){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_54980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e54986){if((e54986 instanceof Object)){
var ex__6993__auto__ = e54986;
var statearr_54987_55041 = state_54980;
(statearr_54987_55041[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55042 = state_54980;
state_54980 = G__55042;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$play$enter_$_state_machine__6990__auto__ = function(state_54980){
switch(arguments.length){
case 0:
return soccer$play$enter_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$play$enter_$_state_machine__6990__auto____1.call(this,state_54980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$play$enter_$_state_machine__6990__auto____0;
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$play$enter_$_state_machine__6990__auto____1;
return soccer$play$enter_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
})();
var state__7012__auto__ = (function (){var statearr_54988 = f__7011__auto__.call(null);
(statearr_54988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_54988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

return c__7010__auto__;
});})(cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

dommy.core.listen_BANG_.call(null,cnv_55040,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),((function (cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (p1__54901_SHARP_){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (state_54997){
var state_val_54998 = (state_54997[(1)]);
if((state_val_54998 === (1))){
var inst_54989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54990 = p1__54901_SHARP_.clientX;
var inst_54991 = p1__54901_SHARP_.clientY;
var inst_54992 = [new cljs.core.Keyword(null,"enddrag","enddrag",-175684184),inst_54990,inst_54991];
var inst_54993 = (new cljs.core.PersistentVector(null,3,(5),inst_54989,inst_54992,null));
var state_54997__$1 = state_54997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54997__$1,(2),soccer.channels.event_chan,inst_54993);
} else {
if((state_val_54998 === (2))){
var inst_54995 = (state_54997[(2)]);
var state_54997__$1 = state_54997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54997__$1,inst_54995);
} else {
return null;
}
}
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
;
return ((function (switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function() {
var soccer$play$enter_$_state_machine__6990__auto__ = null;
var soccer$play$enter_$_state_machine__6990__auto____0 = (function (){
var statearr_55002 = [null,null,null,null,null,null,null];
(statearr_55002[(0)] = soccer$play$enter_$_state_machine__6990__auto__);

(statearr_55002[(1)] = (1));

return statearr_55002;
});
var soccer$play$enter_$_state_machine__6990__auto____1 = (function (state_54997){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_54997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e55003){if((e55003 instanceof Object)){
var ex__6993__auto__ = e55003;
var statearr_55004_55043 = state_54997;
(statearr_55004_55043[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55044 = state_54997;
state_54997 = G__55044;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$play$enter_$_state_machine__6990__auto__ = function(state_54997){
switch(arguments.length){
case 0:
return soccer$play$enter_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$play$enter_$_state_machine__6990__auto____1.call(this,state_54997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$play$enter_$_state_machine__6990__auto____0;
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$play$enter_$_state_machine__6990__auto____1;
return soccer$play$enter_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
})();
var state__7012__auto__ = (function (){var statearr_55005 = f__7011__auto__.call(null);
(statearr_55005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_55005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

return c__7010__auto__;
});})(cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

dommy.core.listen_BANG_.call(null,cnv_55040,new cljs.core.Keyword(null,"touchmove","touchmove",1885249923),((function (cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (p1__54902_SHARP_){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (state_55014){
var state_val_55015 = (state_55014[(1)]);
if((state_val_55015 === (1))){
var inst_55006 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55007 = p1__54902_SHARP_.clientX;
var inst_55008 = p1__54902_SHARP_.clientY;
var inst_55009 = [new cljs.core.Keyword(null,"drag","drag",449951290),inst_55007,inst_55008];
var inst_55010 = (new cljs.core.PersistentVector(null,3,(5),inst_55006,inst_55009,null));
var state_55014__$1 = state_55014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55014__$1,(2),soccer.channels.event_chan,inst_55010);
} else {
if((state_val_55015 === (2))){
var inst_55012 = (state_55014[(2)]);
var state_55014__$1 = state_55014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55014__$1,inst_55012);
} else {
return null;
}
}
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
;
return ((function (switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function() {
var soccer$play$enter_$_state_machine__6990__auto__ = null;
var soccer$play$enter_$_state_machine__6990__auto____0 = (function (){
var statearr_55019 = [null,null,null,null,null,null,null];
(statearr_55019[(0)] = soccer$play$enter_$_state_machine__6990__auto__);

(statearr_55019[(1)] = (1));

return statearr_55019;
});
var soccer$play$enter_$_state_machine__6990__auto____1 = (function (state_55014){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_55014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e55020){if((e55020 instanceof Object)){
var ex__6993__auto__ = e55020;
var statearr_55021_55045 = state_55014;
(statearr_55021_55045[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55046 = state_55014;
state_55014 = G__55046;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$play$enter_$_state_machine__6990__auto__ = function(state_55014){
switch(arguments.length){
case 0:
return soccer$play$enter_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$play$enter_$_state_machine__6990__auto____1.call(this,state_55014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$play$enter_$_state_machine__6990__auto____0;
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$play$enter_$_state_machine__6990__auto____1;
return soccer$play$enter_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
})();
var state__7012__auto__ = (function (){var statearr_55022 = f__7011__auto__.call(null);
(statearr_55022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_55022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

return c__7010__auto__;
});})(cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

dommy.core.listen_BANG_.call(null,cnv_55040,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),((function (cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (p1__54903_SHARP_){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function (state_55031){
var state_val_55032 = (state_55031[(1)]);
if((state_val_55032 === (1))){
var inst_55023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55024 = p1__54903_SHARP_.clientX;
var inst_55025 = p1__54903_SHARP_.clientY;
var inst_55026 = [new cljs.core.Keyword(null,"move","move",-2110884309),inst_55024,inst_55025];
var inst_55027 = (new cljs.core.PersistentVector(null,3,(5),inst_55023,inst_55026,null));
var state_55031__$1 = state_55031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55031__$1,(2),soccer.channels.event_chan,inst_55027);
} else {
if((state_val_55032 === (2))){
var inst_55029 = (state_55031[(2)]);
var state_55031__$1 = state_55031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55031__$1,inst_55029);
} else {
return null;
}
}
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
;
return ((function (switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer){
return (function() {
var soccer$play$enter_$_state_machine__6990__auto__ = null;
var soccer$play$enter_$_state_machine__6990__auto____0 = (function (){
var statearr_55036 = [null,null,null,null,null,null,null];
(statearr_55036[(0)] = soccer$play$enter_$_state_machine__6990__auto__);

(statearr_55036[(1)] = (1));

return statearr_55036;
});
var soccer$play$enter_$_state_machine__6990__auto____1 = (function (state_55031){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_55031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e55037){if((e55037 instanceof Object)){
var ex__6993__auto__ = e55037;
var statearr_55038_55047 = state_55031;
(statearr_55038_55047[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55048 = state_55031;
state_55031 = G__55048;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$play$enter_$_state_machine__6990__auto__ = function(state_55031){
switch(arguments.length){
case 0:
return soccer$play$enter_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$play$enter_$_state_machine__6990__auto____1.call(this,state_55031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$play$enter_$_state_machine__6990__auto____0;
soccer$play$enter_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$play$enter_$_state_machine__6990__auto____1;
return soccer$play$enter_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
})();
var state__7012__auto__ = (function (){var statearr_55039 = f__7011__auto__.call(null);
(statearr_55039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_55039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__,cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

return c__7010__auto__;
});})(cnv_55040,x_tiles,y_tiles,foot_size,display_list,bg_layer,fg_layer))
);

soccer.pixi.attach_list_BANG_.call(null,display_list,new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(game));

return soccer.play.resize.call(null,cljs.core.into.call(null,game,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"display-list","display-list",553496994),new cljs.core.Keyword(null,"fg-layer","fg-layer",-1616098109),new cljs.core.Keyword(null,"ball-size","ball-size",-1943594170),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"balls","balls",1987549674),new cljs.core.Keyword(null,"bg-layer","bg-layer",961868974),new cljs.core.Keyword(null,"x-tiles","x-tiles",1561421041),new cljs.core.Keyword(null,"foot","foot",-487226607),new cljs.core.Keyword(null,"foot-size","foot-size",1062826101),new cljs.core.Keyword(null,"spawn-intervall","spawn-intervall",18137975),new cljs.core.Keyword(null,"y-tiles","y-tiles",-243091014),new cljs.core.Keyword(null,"bg","bg",-206688421)],[display_list,fg_layer,0.7,(1),cljs.core.PersistentVector.EMPTY,bg_layer,x_tiles,soccer.play.register_entity_BANG_.call(null,game,soccer.play.mk_entity.call(null,new cljs.core.Keyword(null,"foot","foot",-487226607),(0),(12),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"w","w",354169001),((2) * foot_size),new cljs.core.Keyword(null,"h","h",1109658740),((2) * foot_size),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"x","x",2099068185),0.5,new cljs.core.Keyword(null,"y","y",-1757859776),0.5,new cljs.core.Keyword(null,"layer","layer",-1601820589),fg_layer)),foot_size,((2.5 * (60)) | (0)),y_tiles,soccer.play.register_entity_BANG_.call(null,game,soccer.play.mk_entity.call(null,new cljs.core.Keyword(null,"bg","bg",-206688421),(0),(0),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"w","w",354169001),x_tiles,new cljs.core.Keyword(null,"h","h",1109658740),y_tiles,new cljs.core.Keyword(null,"layer","layer",-1601820589),bg_layer))])));
});
soccer.play.leave = (function soccer$play$leave(game){
return game;
});
soccer.play.draw = (function soccer$play$draw(p__55049){
var map__55056 = p__55049;
var map__55056__$1 = ((((!((map__55056 == null)))?((((map__55056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55056):map__55056);
var game = map__55056__$1;
var renderer = cljs.core.get.call(null,map__55056__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var stage = cljs.core.get.call(null,map__55056__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var foot = cljs.core.get.call(null,map__55056__$1,new cljs.core.Keyword(null,"foot","foot",-487226607));
var balls = cljs.core.get.call(null,map__55056__$1,new cljs.core.Keyword(null,"balls","balls",1987549674));
soccer.pixi.set_pos.call(null,foot,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(foot),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(foot));

var seq__55058_55062 = cljs.core.seq.call(null,balls);
var chunk__55059_55063 = null;
var count__55060_55064 = (0);
var i__55061_55065 = (0);
while(true){
if((i__55061_55065 < count__55060_55064)){
var ball_55066 = cljs.core._nth.call(null,chunk__55059_55063,i__55061_55065);
soccer.pixi.set_pos.call(null,ball_55066,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball_55066),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball_55066));

var G__55067 = seq__55058_55062;
var G__55068 = chunk__55059_55063;
var G__55069 = count__55060_55064;
var G__55070 = (i__55061_55065 + (1));
seq__55058_55062 = G__55067;
chunk__55059_55063 = G__55068;
count__55060_55064 = G__55069;
i__55061_55065 = G__55070;
continue;
} else {
var temp__4657__auto___55071 = cljs.core.seq.call(null,seq__55058_55062);
if(temp__4657__auto___55071){
var seq__55058_55072__$1 = temp__4657__auto___55071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55058_55072__$1)){
var c__5383__auto___55073 = cljs.core.chunk_first.call(null,seq__55058_55072__$1);
var G__55074 = cljs.core.chunk_rest.call(null,seq__55058_55072__$1);
var G__55075 = c__5383__auto___55073;
var G__55076 = cljs.core.count.call(null,c__5383__auto___55073);
var G__55077 = (0);
seq__55058_55062 = G__55074;
chunk__55059_55063 = G__55075;
count__55060_55064 = G__55076;
i__55061_55065 = G__55077;
continue;
} else {
var ball_55078 = cljs.core.first.call(null,seq__55058_55072__$1);
soccer.pixi.set_pos.call(null,ball_55078,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ball_55078),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ball_55078));

var G__55079 = cljs.core.next.call(null,seq__55058_55072__$1);
var G__55080 = null;
var G__55081 = (0);
var G__55082 = (0);
seq__55058_55062 = G__55079;
chunk__55059_55063 = G__55080;
count__55060_55064 = G__55081;
i__55061_55065 = G__55082;
continue;
}
} else {
}
}
break;
}

renderer.render(stage);

return game;
});
soccer.play.mk_state = (function soccer$play$mk_state(container){
return cljs.core.into.call(null,container,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enter","enter",1792452624),soccer.play.enter,new cljs.core.Keyword(null,"leave","leave",1022579443),soccer.play.leave,new cljs.core.Keyword(null,"time-tick","time-tick",331405371),soccer.play.time_step,new cljs.core.Keyword(null,"draw","draw",1358331674),soccer.play.draw,new cljs.core.Keyword(null,"resize","resize",297367086),soccer.play.resize,new cljs.core.Keyword(null,"process-evt","process-evt",-1905216397),soccer.play.action], null));
});

//# sourceMappingURL=play.js.map