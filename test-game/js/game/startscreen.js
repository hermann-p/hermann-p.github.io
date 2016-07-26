// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.startscreen');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('game.chans');
goog.require('dommy.core');
goog.require('hipo.core');
game.startscreen.events = cljs.core.async.chan.call(null);
game.startscreen.init = (function game$startscreen$init(){
dommy.core.append_BANG_.call(null,document.body,(function (){var v14600 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.view","span.view",1041541939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"mainMenu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The Noodle Connection"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selection","div.selection",-379428883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"difficultyMenu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),"first selection"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),"second selection"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),"third selection"], null)], null)], null)], null);
var el__9503__auto__ = hipo.interpreter.create.call(null,v14600,null);
hipo.core.set_hiccup_BANG_.call(null,el__9503__auto__,v14600);

return el__9503__auto__;
})());

return cljs.core.PersistentArrayMap.EMPTY;
});
game.startscreen.enter = (function game$startscreen$enter(state){
dommy.core.set_style_BANG_.call(null,document.getElementById("mainMenu"),new cljs.core.Keyword(null,"left","left",-399115937),"0px");

return state;
});
game.startscreen.exit = (function game$startscreen$exit(state){
dommy.core.set_style_BANG_.call(null,document.getElementById("mainMenu"),new cljs.core.Keyword(null,"left","left",-399115937),"100%");

var c__8831__auto___14625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8831__auto___14625){
return (function (){
var f__8832__auto__ = (function (){var switch__8810__auto__ = ((function (c__8831__auto___14625){
return (function (state_14616){
var state_val_14617 = (state_14616[(1)]);
if((state_val_14617 === (1))){
var state_14616__$1 = state_14616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14616__$1,(2),game.startscreen.events,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
if((state_val_14617 === (2))){
var inst_14614 = (state_14616[(2)]);
var state_14616__$1 = state_14616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14616__$1,inst_14614);
} else {
return null;
}
}
});})(c__8831__auto___14625))
;
return ((function (switch__8810__auto__,c__8831__auto___14625){
return (function() {
var game$startscreen$exit_$_state_machine__8811__auto__ = null;
var game$startscreen$exit_$_state_machine__8811__auto____0 = (function (){
var statearr_14621 = [null,null,null,null,null,null,null];
(statearr_14621[(0)] = game$startscreen$exit_$_state_machine__8811__auto__);

(statearr_14621[(1)] = (1));

return statearr_14621;
});
var game$startscreen$exit_$_state_machine__8811__auto____1 = (function (state_14616){
while(true){
var ret_value__8812__auto__ = (function (){try{while(true){
var result__8813__auto__ = switch__8810__auto__.call(null,state_14616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8813__auto__;
}
break;
}
}catch (e14622){if((e14622 instanceof Object)){
var ex__8814__auto__ = e14622;
var statearr_14623_14626 = state_14616;
(statearr_14623_14626[(5)] = ex__8814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14627 = state_14616;
state_14616 = G__14627;
continue;
} else {
return ret_value__8812__auto__;
}
break;
}
});
game$startscreen$exit_$_state_machine__8811__auto__ = function(state_14616){
switch(arguments.length){
case 0:
return game$startscreen$exit_$_state_machine__8811__auto____0.call(this);
case 1:
return game$startscreen$exit_$_state_machine__8811__auto____1.call(this,state_14616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$startscreen$exit_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$0 = game$startscreen$exit_$_state_machine__8811__auto____0;
game$startscreen$exit_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$1 = game$startscreen$exit_$_state_machine__8811__auto____1;
return game$startscreen$exit_$_state_machine__8811__auto__;
})()
;})(switch__8810__auto__,c__8831__auto___14625))
})();
var state__8833__auto__ = (function (){var statearr_14624 = f__8832__auto__.call(null);
(statearr_14624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8831__auto___14625);

return statearr_14624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8833__auto__);
});})(c__8831__auto___14625))
);


return state;
});

//# sourceMappingURL=startscreen.js.map