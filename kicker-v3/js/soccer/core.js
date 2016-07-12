// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.core');
goog.require('cljs.core');
goog.require('soccer.pixi');
goog.require('soccer.channels');
goog.require('soccer.main');
goog.require('soccer.gamestate');
goog.require('cljs.core.async');
if(typeof soccer.core.pixi !== 'undefined'){
} else {
soccer.core.pixi = PIXI;
}
var c__7010__auto___55308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto___55308){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto___55308){
return (function (state_55299){
var state_val_55300 = (state_55299[(1)]);
if((state_val_55300 === (1))){
var state_55299__$1 = state_55299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55299__$1,(2),soccer.channels.state_chan,new cljs.core.Keyword(null,"loading","loading",-737050189));
} else {
if((state_val_55300 === (2))){
var inst_55297 = (state_55299[(2)]);
var state_55299__$1 = state_55299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55299__$1,inst_55297);
} else {
return null;
}
}
});})(c__7010__auto___55308))
;
return ((function (switch__6989__auto__,c__7010__auto___55308){
return (function() {
var soccer$core$state_machine__6990__auto__ = null;
var soccer$core$state_machine__6990__auto____0 = (function (){
var statearr_55304 = [null,null,null,null,null,null,null];
(statearr_55304[(0)] = soccer$core$state_machine__6990__auto__);

(statearr_55304[(1)] = (1));

return statearr_55304;
});
var soccer$core$state_machine__6990__auto____1 = (function (state_55299){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_55299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e55305){if((e55305 instanceof Object)){
var ex__6993__auto__ = e55305;
var statearr_55306_55309 = state_55299;
(statearr_55306_55309[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55310 = state_55299;
state_55299 = G__55310;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$core$state_machine__6990__auto__ = function(state_55299){
switch(arguments.length){
case 0:
return soccer$core$state_machine__6990__auto____0.call(this);
case 1:
return soccer$core$state_machine__6990__auto____1.call(this,state_55299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$core$state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$core$state_machine__6990__auto____0;
soccer$core$state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$core$state_machine__6990__auto____1;
return soccer$core$state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto___55308))
})();
var state__7012__auto__ = (function (){var statearr_55307 = f__7011__auto__.call(null);
(statearr_55307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto___55308);

return statearr_55307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto___55308))
);

soccer.core.request_frame = (function soccer$core$request_frame(){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto__){
return (function (state_55326){
var state_val_55327 = (state_55326[(1)]);
if((state_val_55327 === (1))){
var state_55326__$1 = state_55326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55326__$1,(2),soccer.channels.time_chan,new cljs.core.Keyword(null,"tick","tick",-835886976));
} else {
if((state_val_55327 === (2))){
var inst_55324 = (state_55326[(2)]);
var state_55326__$1 = state_55326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55326__$1,inst_55324);
} else {
return null;
}
}
});})(c__7010__auto__))
;
return ((function (switch__6989__auto__,c__7010__auto__){
return (function() {
var soccer$core$request_frame_$_state_machine__6990__auto__ = null;
var soccer$core$request_frame_$_state_machine__6990__auto____0 = (function (){
var statearr_55331 = [null,null,null,null,null,null,null];
(statearr_55331[(0)] = soccer$core$request_frame_$_state_machine__6990__auto__);

(statearr_55331[(1)] = (1));

return statearr_55331;
});
var soccer$core$request_frame_$_state_machine__6990__auto____1 = (function (state_55326){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_55326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e55332){if((e55332 instanceof Object)){
var ex__6993__auto__ = e55332;
var statearr_55333_55335 = state_55326;
(statearr_55333_55335[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55336 = state_55326;
state_55326 = G__55336;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$core$request_frame_$_state_machine__6990__auto__ = function(state_55326){
switch(arguments.length){
case 0:
return soccer$core$request_frame_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$core$request_frame_$_state_machine__6990__auto____1.call(this,state_55326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$core$request_frame_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$core$request_frame_$_state_machine__6990__auto____0;
soccer$core$request_frame_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$core$request_frame_$_state_machine__6990__auto____1;
return soccer$core$request_frame_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto__))
})();
var state__7012__auto__ = (function (){var statearr_55334 = f__7011__auto__.call(null);
(statearr_55334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_55334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__))
);

return c__7010__auto__;
});
var c__7010__auto___55416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto___55416){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto___55416){
return (function (state_55383){
var state_val_55384 = (state_55383[(1)]);
if((state_val_55384 === (7))){
var inst_55379 = (state_55383[(2)]);
var state_55383__$1 = state_55383;
var statearr_55385_55417 = state_55383__$1;
(statearr_55385_55417[(2)] = inst_55379);

(statearr_55385_55417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (1))){
var inst_55337 = soccer.main.init.call(null);
var inst_55338 = inst_55337;
var state_55383__$1 = (function (){var statearr_55386 = state_55383;
(statearr_55386[(7)] = inst_55338);

return statearr_55386;
})();
var statearr_55387_55418 = state_55383__$1;
(statearr_55387_55418[(2)] = null);

(statearr_55387_55418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (4))){
var inst_55347 = (state_55383[(8)]);
var inst_55345 = (state_55383[(2)]);
var inst_55346 = cljs.core.nth.call(null,inst_55345,(0),null);
var inst_55347__$1 = cljs.core.nth.call(null,inst_55345,(1),null);
var inst_55348 = cljs.core._EQ_.call(null,soccer.channels.time_chan,inst_55347__$1);
var state_55383__$1 = (function (){var statearr_55388 = state_55383;
(statearr_55388[(9)] = inst_55346);

(statearr_55388[(8)] = inst_55347__$1);

return statearr_55388;
})();
if(inst_55348){
var statearr_55389_55419 = state_55383__$1;
(statearr_55389_55419[(1)] = (5));

} else {
var statearr_55390_55420 = state_55383__$1;
(statearr_55390_55420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (15))){
var state_55383__$1 = state_55383;
var statearr_55391_55421 = state_55383__$1;
(statearr_55391_55421[(2)] = null);

(statearr_55391_55421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (13))){
var inst_55375 = (state_55383[(2)]);
var state_55383__$1 = state_55383;
var statearr_55392_55422 = state_55383__$1;
(statearr_55392_55422[(2)] = inst_55375);

(statearr_55392_55422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (6))){
var inst_55347 = (state_55383[(8)]);
var inst_55355 = cljs.core._EQ_.call(null,soccer.channels.state_chan,inst_55347);
var state_55383__$1 = state_55383;
if(inst_55355){
var statearr_55393_55423 = state_55383__$1;
(statearr_55393_55423[(1)] = (8));

} else {
var statearr_55394_55424 = state_55383__$1;
(statearr_55394_55424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (3))){
var inst_55381 = (state_55383[(2)]);
var state_55383__$1 = state_55383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55383__$1,inst_55381);
} else {
if((state_val_55384 === (12))){
var inst_55347 = (state_55383[(8)]);
var inst_55366 = cljs.core._EQ_.call(null,soccer.channels.global_chan,inst_55347);
var state_55383__$1 = state_55383;
if(inst_55366){
var statearr_55395_55425 = state_55383__$1;
(statearr_55395_55425[(1)] = (14));

} else {
var statearr_55396_55426 = state_55383__$1;
(statearr_55396_55426[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (2))){
var inst_55341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55342 = [soccer.channels.state_chan,soccer.channels.time_chan,soccer.channels.event_chan,soccer.channels.global_chan];
var inst_55343 = (new cljs.core.PersistentVector(null,4,(5),inst_55341,inst_55342,null));
var state_55383__$1 = state_55383;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55383__$1,(4),inst_55343);
} else {
if((state_val_55384 === (11))){
var inst_55338 = (state_55383[(7)]);
var inst_55346 = (state_55383[(9)]);
var inst_55363 = soccer.gamestate.process.call(null,inst_55346,inst_55338);
var inst_55338__$1 = inst_55363;
var state_55383__$1 = (function (){var statearr_55397 = state_55383;
(statearr_55397[(7)] = inst_55338__$1);

return statearr_55397;
})();
var statearr_55398_55427 = state_55383__$1;
(statearr_55398_55427[(2)] = null);

(statearr_55398_55427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (9))){
var inst_55347 = (state_55383[(8)]);
var inst_55361 = cljs.core._EQ_.call(null,soccer.channels.event_chan,inst_55347);
var state_55383__$1 = state_55383;
if(inst_55361){
var statearr_55399_55428 = state_55383__$1;
(statearr_55399_55428[(1)] = (11));

} else {
var statearr_55400_55429 = state_55383__$1;
(statearr_55400_55429[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (5))){
var inst_55338 = (state_55383[(7)]);
var inst_55350 = window.requestAnimationFrame(soccer.core.request_frame);
var inst_55351 = soccer.gamestate.draw.call(null,inst_55338);
var inst_55352 = soccer.gamestate.time_tick.call(null,inst_55338);
var inst_55338__$1 = inst_55352;
var state_55383__$1 = (function (){var statearr_55401 = state_55383;
(statearr_55401[(7)] = inst_55338__$1);

(statearr_55401[(10)] = inst_55350);

(statearr_55401[(11)] = inst_55351);

return statearr_55401;
})();
var statearr_55402_55430 = state_55383__$1;
(statearr_55402_55430[(2)] = null);

(statearr_55402_55430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (14))){
var inst_55338 = (state_55383[(7)]);
var inst_55346 = (state_55383[(9)]);
var inst_55368 = cljs.core.println.call(null,"global-channel:",inst_55346);
var inst_55369 = soccer.main.event.call(null,inst_55338,inst_55346);
var inst_55338__$1 = inst_55369;
var state_55383__$1 = (function (){var statearr_55403 = state_55383;
(statearr_55403[(7)] = inst_55338__$1);

(statearr_55403[(12)] = inst_55368);

return statearr_55403;
})();
var statearr_55404_55431 = state_55383__$1;
(statearr_55404_55431[(2)] = null);

(statearr_55404_55431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (16))){
var inst_55373 = (state_55383[(2)]);
var state_55383__$1 = state_55383;
var statearr_55405_55432 = state_55383__$1;
(statearr_55405_55432[(2)] = inst_55373);

(statearr_55405_55432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (10))){
var inst_55377 = (state_55383[(2)]);
var state_55383__$1 = state_55383;
var statearr_55406_55433 = state_55383__$1;
(statearr_55406_55433[(2)] = inst_55377);

(statearr_55406_55433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55384 === (8))){
var inst_55338 = (state_55383[(7)]);
var inst_55346 = (state_55383[(9)]);
var inst_55357 = cljs.core.println.call(null,"state-channel:",inst_55346);
var inst_55358 = soccer.gamestate.enter.call(null,inst_55338,inst_55346);
var inst_55338__$1 = inst_55358;
var state_55383__$1 = (function (){var statearr_55407 = state_55383;
(statearr_55407[(13)] = inst_55357);

(statearr_55407[(7)] = inst_55338__$1);

return statearr_55407;
})();
var statearr_55408_55434 = state_55383__$1;
(statearr_55408_55434[(2)] = null);

(statearr_55408_55434[(1)] = (2));


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
}
}
}
});})(c__7010__auto___55416))
;
return ((function (switch__6989__auto__,c__7010__auto___55416){
return (function() {
var soccer$core$state_machine__6990__auto__ = null;
var soccer$core$state_machine__6990__auto____0 = (function (){
var statearr_55412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55412[(0)] = soccer$core$state_machine__6990__auto__);

(statearr_55412[(1)] = (1));

return statearr_55412;
});
var soccer$core$state_machine__6990__auto____1 = (function (state_55383){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_55383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e55413){if((e55413 instanceof Object)){
var ex__6993__auto__ = e55413;
var statearr_55414_55435 = state_55383;
(statearr_55414_55435[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55436 = state_55383;
state_55383 = G__55436;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$core$state_machine__6990__auto__ = function(state_55383){
switch(arguments.length){
case 0:
return soccer$core$state_machine__6990__auto____0.call(this);
case 1:
return soccer$core$state_machine__6990__auto____1.call(this,state_55383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$core$state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$core$state_machine__6990__auto____0;
soccer$core$state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$core$state_machine__6990__auto____1;
return soccer$core$state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto___55416))
})();
var state__7012__auto__ = (function (){var statearr_55415 = f__7011__auto__.call(null);
(statearr_55415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto___55416);

return statearr_55415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto___55416))
);

soccer.core.request_frame.call(null);

//# sourceMappingURL=core.js.map