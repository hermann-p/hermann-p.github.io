// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.core');
goog.require('cljs.core');
goog.require('game.play');
goog.require('game.statemachine');
goog.require('dommy.core');
goog.require('game.loading');
goog.require('game.assets');
goog.require('cljs.core.async');
goog.require('game.chans');
goog.require('game.startscreen');
cljs.core.enable_console_print_BANG_.call(null);
game.core.init = (function game$core$init(){
game.assets.request_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"atl","atl",-1114073302),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"hex-dark","hex-dark",579776266),new cljs.core.Keyword(null,"url","url",276297046),"vis/hex_dark.json"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"hex-green","hex-green",-679370919),new cljs.core.Keyword(null,"url","url",276297046),"vis/hex_green.json"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ortho-grey","ortho-grey",-1290183650),new cljs.core.Keyword(null,"url","url",276297046),"vis/ortho_grey.json"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ortho-orange","ortho-orange",-549278581),new cljs.core.Keyword(null,"url","url",276297046),"vis/ortho_orange.json"], null)], null),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"click1","click1",-2077734044),new cljs.core.Keyword(null,"url","url",276297046),"audio/rotate1.wav"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"click2","click2",-1642802445),new cljs.core.Keyword(null,"url","url",276297046),"audio/rotate2.wav"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"click3","click3",262848281),new cljs.core.Keyword(null,"url","url",276297046),"audio/rotate3.wav"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"url","url",276297046),"audio/levelup.wav"], null)], null)], null));

game.assets.load.call(null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading","loading",-737050189),game.loading.mk_state.call(null),new cljs.core.Keyword(null,"play","play",-580418022),game.play.mk_state.call(null),new cljs.core.Keyword(null,"cur-state","cur-state",545726752),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
});
game.core.tick = (function game$core$tick(){
var c__8907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8907__auto__){
return (function (){
var f__8908__auto__ = (function (){var switch__8886__auto__ = ((function (c__8907__auto__){
return (function (state_13192){
var state_val_13193 = (state_13192[(1)]);
if((state_val_13193 === (1))){
var inst_13186 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13187 = [new cljs.core.Keyword(null,"tick","tick",-835886976)];
var inst_13188 = (new cljs.core.PersistentVector(null,1,(5),inst_13186,inst_13187,null));
var state_13192__$1 = state_13192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13192__$1,(2),game.chans.time,inst_13188);
} else {
if((state_val_13193 === (2))){
var inst_13190 = (state_13192[(2)]);
var state_13192__$1 = state_13192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13192__$1,inst_13190);
} else {
return null;
}
}
});})(c__8907__auto__))
;
return ((function (switch__8886__auto__,c__8907__auto__){
return (function() {
var game$core$tick_$_state_machine__8887__auto__ = null;
var game$core$tick_$_state_machine__8887__auto____0 = (function (){
var statearr_13197 = [null,null,null,null,null,null,null];
(statearr_13197[(0)] = game$core$tick_$_state_machine__8887__auto__);

(statearr_13197[(1)] = (1));

return statearr_13197;
});
var game$core$tick_$_state_machine__8887__auto____1 = (function (state_13192){
while(true){
var ret_value__8888__auto__ = (function (){try{while(true){
var result__8889__auto__ = switch__8886__auto__.call(null,state_13192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8889__auto__;
}
break;
}
}catch (e13198){if((e13198 instanceof Object)){
var ex__8890__auto__ = e13198;
var statearr_13199_13201 = state_13192;
(statearr_13199_13201[(5)] = ex__8890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13202 = state_13192;
state_13192 = G__13202;
continue;
} else {
return ret_value__8888__auto__;
}
break;
}
});
game$core$tick_$_state_machine__8887__auto__ = function(state_13192){
switch(arguments.length){
case 0:
return game$core$tick_$_state_machine__8887__auto____0.call(this);
case 1:
return game$core$tick_$_state_machine__8887__auto____1.call(this,state_13192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$tick_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$tick_$_state_machine__8887__auto____0;
game$core$tick_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$tick_$_state_machine__8887__auto____1;
return game$core$tick_$_state_machine__8887__auto__;
})()
;})(switch__8886__auto__,c__8907__auto__))
})();
var state__8909__auto__ = (function (){var statearr_13200 = f__8908__auto__.call(null);
(statearr_13200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8907__auto__);

return statearr_13200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8909__auto__);
});})(c__8907__auto__))
);

return c__8907__auto__;
});
var c__8907__auto___13270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8907__auto___13270){
return (function (){
var f__8908__auto__ = (function (){var switch__8886__auto__ = ((function (c__8907__auto___13270){
return (function (state_13242){
var state_val_13243 = (state_13242[(1)]);
if((state_val_13243 === (7))){
var inst_13238 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13244_13271 = state_13242__$1;
(statearr_13244_13271[(2)] = inst_13238);

(statearr_13244_13271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (1))){
var inst_13203 = game.core.init.call(null);
var inst_13204 = inst_13203;
var state_13242__$1 = (function (){var statearr_13245 = state_13242;
(statearr_13245[(7)] = inst_13204);

return statearr_13245;
})();
var statearr_13246_13272 = state_13242__$1;
(statearr_13246_13272[(2)] = null);

(statearr_13246_13272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (4))){
var inst_13215 = (state_13242[(8)]);
var inst_13213 = (state_13242[(2)]);
var inst_13214 = cljs.core.nth.call(null,inst_13213,(0),null);
var inst_13215__$1 = cljs.core.nth.call(null,inst_13213,(1),null);
var inst_13216 = cljs.core._EQ_.call(null,inst_13215__$1,game.chans.time);
var state_13242__$1 = (function (){var statearr_13247 = state_13242;
(statearr_13247[(8)] = inst_13215__$1);

(statearr_13247[(9)] = inst_13214);

return statearr_13247;
})();
if(inst_13216){
var statearr_13248_13273 = state_13242__$1;
(statearr_13248_13273[(1)] = (5));

} else {
var statearr_13249_13274 = state_13242__$1;
(statearr_13249_13274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (13))){
var inst_13234 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13250_13275 = state_13242__$1;
(statearr_13250_13275[(2)] = inst_13234);

(statearr_13250_13275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (6))){
var inst_13215 = (state_13242[(8)]);
var inst_13223 = cljs.core._EQ_.call(null,inst_13215,game.chans.state);
var state_13242__$1 = state_13242;
if(inst_13223){
var statearr_13251_13276 = state_13242__$1;
(statearr_13251_13276[(1)] = (8));

} else {
var statearr_13252_13277 = state_13242__$1;
(statearr_13252_13277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (3))){
var inst_13240 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13242__$1,inst_13240);
} else {
if((state_val_13243 === (12))){
var state_13242__$1 = state_13242;
var statearr_13253_13278 = state_13242__$1;
(statearr_13253_13278[(2)] = null);

(statearr_13253_13278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (2))){
var inst_13209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13210 = [game.chans.state,game.chans.action,game.chans.time];
var inst_13211 = (new cljs.core.PersistentVector(null,3,(5),inst_13209,inst_13210,null));
var state_13242__$1 = state_13242;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13242__$1,(4),inst_13211);
} else {
if((state_val_13243 === (11))){
var inst_13204 = (state_13242[(7)]);
var inst_13214 = (state_13242[(9)]);
var inst_13230 = game.statemachine.process.call(null,inst_13204,inst_13214);
var inst_13204__$1 = inst_13230;
var state_13242__$1 = (function (){var statearr_13254 = state_13242;
(statearr_13254[(7)] = inst_13204__$1);

return statearr_13254;
})();
var statearr_13255_13279 = state_13242__$1;
(statearr_13255_13279[(2)] = null);

(statearr_13255_13279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (9))){
var inst_13215 = (state_13242[(8)]);
var inst_13228 = cljs.core._EQ_.call(null,inst_13215,game.chans.action);
var state_13242__$1 = state_13242;
if(inst_13228){
var statearr_13256_13280 = state_13242__$1;
(statearr_13256_13280[(1)] = (11));

} else {
var statearr_13257_13281 = state_13242__$1;
(statearr_13257_13281[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (5))){
var inst_13204 = (state_13242[(7)]);
var inst_13218 = cljs.core.partial.call(null,game.core.tick);
var inst_13219 = window.requestAnimationFrame(inst_13218);
var inst_13220 = game.statemachine.time_tick.call(null,inst_13204);
var inst_13204__$1 = inst_13220;
var state_13242__$1 = (function (){var statearr_13258 = state_13242;
(statearr_13258[(7)] = inst_13204__$1);

(statearr_13258[(10)] = inst_13219);

return statearr_13258;
})();
var statearr_13259_13282 = state_13242__$1;
(statearr_13259_13282[(2)] = null);

(statearr_13259_13282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (10))){
var inst_13236 = (state_13242[(2)]);
var state_13242__$1 = state_13242;
var statearr_13260_13283 = state_13242__$1;
(statearr_13260_13283[(2)] = inst_13236);

(statearr_13260_13283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13243 === (8))){
var inst_13204 = (state_13242[(7)]);
var inst_13214 = (state_13242[(9)]);
var inst_13225 = game.statemachine.enter.call(null,inst_13204,inst_13214);
var inst_13204__$1 = inst_13225;
var state_13242__$1 = (function (){var statearr_13261 = state_13242;
(statearr_13261[(7)] = inst_13204__$1);

return statearr_13261;
})();
var statearr_13262_13284 = state_13242__$1;
(statearr_13262_13284[(2)] = null);

(statearr_13262_13284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8907__auto___13270))
;
return ((function (switch__8886__auto__,c__8907__auto___13270){
return (function() {
var game$core$state_machine__8887__auto__ = null;
var game$core$state_machine__8887__auto____0 = (function (){
var statearr_13266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13266[(0)] = game$core$state_machine__8887__auto__);

(statearr_13266[(1)] = (1));

return statearr_13266;
});
var game$core$state_machine__8887__auto____1 = (function (state_13242){
while(true){
var ret_value__8888__auto__ = (function (){try{while(true){
var result__8889__auto__ = switch__8886__auto__.call(null,state_13242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8889__auto__;
}
break;
}
}catch (e13267){if((e13267 instanceof Object)){
var ex__8890__auto__ = e13267;
var statearr_13268_13285 = state_13242;
(statearr_13268_13285[(5)] = ex__8890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13286 = state_13242;
state_13242 = G__13286;
continue;
} else {
return ret_value__8888__auto__;
}
break;
}
});
game$core$state_machine__8887__auto__ = function(state_13242){
switch(arguments.length){
case 0:
return game$core$state_machine__8887__auto____0.call(this);
case 1:
return game$core$state_machine__8887__auto____1.call(this,state_13242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$state_machine__8887__auto____0;
game$core$state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$state_machine__8887__auto____1;
return game$core$state_machine__8887__auto__;
})()
;})(switch__8886__auto__,c__8907__auto___13270))
})();
var state__8909__auto__ = (function (){var statearr_13269 = f__8908__auto__.call(null);
(statearr_13269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8907__auto___13270);

return statearr_13269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8909__auto__);
});})(c__8907__auto___13270))
);

var c__8907__auto___13302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8907__auto___13302){
return (function (){
var f__8908__auto__ = (function (){var switch__8886__auto__ = ((function (c__8907__auto___13302){
return (function (state_13293){
var state_val_13294 = (state_13293[(1)]);
if((state_val_13294 === (1))){
var inst_13287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13288 = [new cljs.core.Keyword(null,"loading","loading",-737050189)];
var inst_13289 = (new cljs.core.PersistentVector(null,1,(5),inst_13287,inst_13288,null));
var state_13293__$1 = state_13293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13293__$1,(2),game.chans.state,inst_13289);
} else {
if((state_val_13294 === (2))){
var inst_13291 = (state_13293[(2)]);
var state_13293__$1 = state_13293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13293__$1,inst_13291);
} else {
return null;
}
}
});})(c__8907__auto___13302))
;
return ((function (switch__8886__auto__,c__8907__auto___13302){
return (function() {
var game$core$state_machine__8887__auto__ = null;
var game$core$state_machine__8887__auto____0 = (function (){
var statearr_13298 = [null,null,null,null,null,null,null];
(statearr_13298[(0)] = game$core$state_machine__8887__auto__);

(statearr_13298[(1)] = (1));

return statearr_13298;
});
var game$core$state_machine__8887__auto____1 = (function (state_13293){
while(true){
var ret_value__8888__auto__ = (function (){try{while(true){
var result__8889__auto__ = switch__8886__auto__.call(null,state_13293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8889__auto__;
}
break;
}
}catch (e13299){if((e13299 instanceof Object)){
var ex__8890__auto__ = e13299;
var statearr_13300_13303 = state_13293;
(statearr_13300_13303[(5)] = ex__8890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13304 = state_13293;
state_13293 = G__13304;
continue;
} else {
return ret_value__8888__auto__;
}
break;
}
});
game$core$state_machine__8887__auto__ = function(state_13293){
switch(arguments.length){
case 0:
return game$core$state_machine__8887__auto____0.call(this);
case 1:
return game$core$state_machine__8887__auto____1.call(this,state_13293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$state_machine__8887__auto____0;
game$core$state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$state_machine__8887__auto____1;
return game$core$state_machine__8887__auto__;
})()
;})(switch__8886__auto__,c__8907__auto___13302))
})();
var state__8909__auto__ = (function (){var statearr_13301 = f__8908__auto__.call(null);
(statearr_13301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8907__auto___13302);

return statearr_13301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8909__auto__);
});})(c__8907__auto___13302))
);

game.core.tick.call(null);

//# sourceMappingURL=core.js.map