// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.level');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('game.chans');
goog.require('dommy.core');
goog.require('hipo.core');
if(typeof game.level.events !== 'undefined'){
} else {
game.level.events = cljs.core.async.chan.call(null);
}
if(typeof game.level.process !== 'undefined'){
} else {
game.level.process = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.level","process"),((function (method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__,hierarchy__7176__auto__){
return (function (_,evt){
return cljs.core.first.call(null,evt);
});})(method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__,hierarchy__7176__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
game.level.init = (function game$level$init(state){
dommy.core.append_BANG_.call(null,document.body,(function (){var v14455 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.view","span.view",1041541939),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"levelBackButton"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"levelMessage"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selection","div.selection",-379428883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"field"], null)], null)], null)], null);
var el__9503__auto__ = hipo.interpreter.create.call(null,v14455,null);
hipo.core.set_hiccup_BANG_.call(null,el__9503__auto__,v14455);

return el__9503__auto__;
})());

return state;
});
game.level.enter = (function game$level$enter(state){
var c__8831__auto___14524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8831__auto___14524){
return (function (){
var f__8832__auto__ = (function (){var switch__8810__auto__ = ((function (c__8831__auto___14524){
return (function (state_14506){
var state_val_14507 = (state_14506[(1)]);
if((state_val_14507 === (1))){
var inst_14490 = state;
var state_14506__$1 = (function (){var statearr_14508 = state_14506;
(statearr_14508[(7)] = inst_14490);

return statearr_14508;
})();
var statearr_14509_14525 = state_14506__$1;
(statearr_14509_14525[(2)] = null);

(statearr_14509_14525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (2))){
var state_14506__$1 = state_14506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14506__$1,(4),game.level.events);
} else {
if((state_val_14507 === (3))){
var inst_14504 = (state_14506[(2)]);
var state_14506__$1 = state_14506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14506__$1,inst_14504);
} else {
if((state_val_14507 === (4))){
var inst_14493 = (state_14506[(8)]);
var inst_14493__$1 = (state_14506[(2)]);
var inst_14494 = cljs.core.first.call(null,inst_14493__$1);
var inst_14495 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"exit","exit",351849638),inst_14494);
var inst_14496 = !(inst_14495);
var state_14506__$1 = (function (){var statearr_14510 = state_14506;
(statearr_14510[(8)] = inst_14493__$1);

return statearr_14510;
})();
if(inst_14496){
var statearr_14511_14526 = state_14506__$1;
(statearr_14511_14526[(1)] = (5));

} else {
var statearr_14512_14527 = state_14506__$1;
(statearr_14512_14527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (5))){
var inst_14490 = (state_14506[(7)]);
var inst_14493 = (state_14506[(8)]);
var inst_14498 = game.level.process.call(null,inst_14490,inst_14493);
var inst_14490__$1 = inst_14498;
var state_14506__$1 = (function (){var statearr_14513 = state_14506;
(statearr_14513[(7)] = inst_14490__$1);

return statearr_14513;
})();
var statearr_14514_14528 = state_14506__$1;
(statearr_14514_14528[(2)] = null);

(statearr_14514_14528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (6))){
var state_14506__$1 = state_14506;
var statearr_14515_14529 = state_14506__$1;
(statearr_14515_14529[(2)] = null);

(statearr_14515_14529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (7))){
var inst_14502 = (state_14506[(2)]);
var state_14506__$1 = state_14506;
var statearr_14516_14530 = state_14506__$1;
(statearr_14516_14530[(2)] = inst_14502);

(statearr_14516_14530[(1)] = (3));


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
});})(c__8831__auto___14524))
;
return ((function (switch__8810__auto__,c__8831__auto___14524){
return (function() {
var game$level$enter_$_state_machine__8811__auto__ = null;
var game$level$enter_$_state_machine__8811__auto____0 = (function (){
var statearr_14520 = [null,null,null,null,null,null,null,null,null];
(statearr_14520[(0)] = game$level$enter_$_state_machine__8811__auto__);

(statearr_14520[(1)] = (1));

return statearr_14520;
});
var game$level$enter_$_state_machine__8811__auto____1 = (function (state_14506){
while(true){
var ret_value__8812__auto__ = (function (){try{while(true){
var result__8813__auto__ = switch__8810__auto__.call(null,state_14506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8813__auto__;
}
break;
}
}catch (e14521){if((e14521 instanceof Object)){
var ex__8814__auto__ = e14521;
var statearr_14522_14531 = state_14506;
(statearr_14522_14531[(5)] = ex__8814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14532 = state_14506;
state_14506 = G__14532;
continue;
} else {
return ret_value__8812__auto__;
}
break;
}
});
game$level$enter_$_state_machine__8811__auto__ = function(state_14506){
switch(arguments.length){
case 0:
return game$level$enter_$_state_machine__8811__auto____0.call(this);
case 1:
return game$level$enter_$_state_machine__8811__auto____1.call(this,state_14506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$level$enter_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$0 = game$level$enter_$_state_machine__8811__auto____0;
game$level$enter_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$1 = game$level$enter_$_state_machine__8811__auto____1;
return game$level$enter_$_state_machine__8811__auto__;
})()
;})(switch__8810__auto__,c__8831__auto___14524))
})();
var state__8833__auto__ = (function (){var statearr_14523 = f__8832__auto__.call(null);
(statearr_14523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8831__auto___14524);

return statearr_14523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8833__auto__);
});})(c__8831__auto___14524))
);


return state;
});
game.level.exit = (function game$level$exit(state){
var c__8831__auto___14563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8831__auto___14563){
return (function (){
var f__8832__auto__ = (function (){var switch__8810__auto__ = ((function (c__8831__auto___14563){
return (function (state_14554){
var state_val_14555 = (state_14554[(1)]);
if((state_val_14555 === (1))){
var inst_14548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14549 = [new cljs.core.Keyword(null,"exit","exit",351849638)];
var inst_14550 = (new cljs.core.PersistentVector(null,1,(5),inst_14548,inst_14549,null));
var state_14554__$1 = state_14554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14554__$1,(2),game.level.events,inst_14550);
} else {
if((state_val_14555 === (2))){
var inst_14552 = (state_14554[(2)]);
var state_14554__$1 = state_14554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14554__$1,inst_14552);
} else {
return null;
}
}
});})(c__8831__auto___14563))
;
return ((function (switch__8810__auto__,c__8831__auto___14563){
return (function() {
var game$level$exit_$_state_machine__8811__auto__ = null;
var game$level$exit_$_state_machine__8811__auto____0 = (function (){
var statearr_14559 = [null,null,null,null,null,null,null];
(statearr_14559[(0)] = game$level$exit_$_state_machine__8811__auto__);

(statearr_14559[(1)] = (1));

return statearr_14559;
});
var game$level$exit_$_state_machine__8811__auto____1 = (function (state_14554){
while(true){
var ret_value__8812__auto__ = (function (){try{while(true){
var result__8813__auto__ = switch__8810__auto__.call(null,state_14554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8813__auto__;
}
break;
}
}catch (e14560){if((e14560 instanceof Object)){
var ex__8814__auto__ = e14560;
var statearr_14561_14564 = state_14554;
(statearr_14561_14564[(5)] = ex__8814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14565 = state_14554;
state_14554 = G__14565;
continue;
} else {
return ret_value__8812__auto__;
}
break;
}
});
game$level$exit_$_state_machine__8811__auto__ = function(state_14554){
switch(arguments.length){
case 0:
return game$level$exit_$_state_machine__8811__auto____0.call(this);
case 1:
return game$level$exit_$_state_machine__8811__auto____1.call(this,state_14554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$level$exit_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$0 = game$level$exit_$_state_machine__8811__auto____0;
game$level$exit_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$1 = game$level$exit_$_state_machine__8811__auto____1;
return game$level$exit_$_state_machine__8811__auto__;
})()
;})(switch__8810__auto__,c__8831__auto___14563))
})();
var state__8833__auto__ = (function (){var statearr_14562 = f__8832__auto__.call(null);
(statearr_14562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8831__auto___14563);

return statearr_14562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8833__auto__);
});})(c__8831__auto___14563))
);


return state;
});

//# sourceMappingURL=level.js.map