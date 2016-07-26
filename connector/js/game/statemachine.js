// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.statemachine');
goog.require('cljs.core');
game.statemachine.draw = (function game$statemachine$draw(game__$1){
var state = new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game__$1);
return cljs.core.get_in.call(null,game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"draw","draw",1358331674)], null)).call(null,state.call(null,game__$1));
});
game.statemachine.time_tick = (function game$statemachine$time_tick(game__$1){
var state = new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game__$1);
return cljs.core.update_in.call(null,game__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),cljs.core.get_in.call(null,game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"time-tick","time-tick",331405371)], null)));
});
game.statemachine.enter = (function game$statemachine$enter(game__$1,event){
var state_kw = cljs.core.first.call(null,event);
var temp__4655__auto__ = new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var cur_state = temp__4655__auto__;
return cljs.core.assoc.call(null,((function (cur_state,temp__4655__auto__,state_kw){
return (function (p1__10968_SHARP_){
return cljs.core.update_in.call(null,p1__10968_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_kw], null),(function (){var or__6247__auto__ = cljs.core.get_in.call(null,p1__10968_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_kw,new cljs.core.Keyword(null,"enter","enter",1792452624)], null));
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.identity;
}
})());
});})(cur_state,temp__4655__auto__,state_kw))
.call(null,cljs.core.update_in.call(null,((cljs.core.seq.call(null,cljs.core.rest.call(null,event)))?cljs.core.update_in.call(null,game__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_kw], null),cljs.core.into,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter-info","enter-info",1386357938),cljs.core.rest.call(null,event)], null)):game__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state], null),(function (){var or__6247__auto__ = cljs.core.get_in.call(null,game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,new cljs.core.Keyword(null,"leave","leave",1022579443)], null));
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.identity;
}
})())),new cljs.core.Keyword(null,"cur-state","cur-state",545726752),state_kw);
} else {
return null;
}
});
game.statemachine.resize = (function game$statemachine$resize(game__$1){
var states = cljs.core.filter.call(null,(function (kw){
return cljs.core.get_in.call(null,game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new cljs.core.Keyword(null,"resize","resize",297367086)], null));
}),cljs.core.keys.call(null,game__$1));
return cljs.core.reduce.call(null,((function (states){
return (function (g,s_kw){
var state = cljs.core.get.call(null,g,s_kw);
cljs.core.println.call(null,"tick-fn:",cljs.core.get_in.call(null,game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"time-tick","time-tick",331405371)], null)));

return cljs.core.assoc.call(null,g,s_kw,new cljs.core.Keyword(null,"resize","resize",297367086).cljs$core$IFn$_invoke$arity$1(state).call(null,state));
});})(states))
,game__$1,states);
});
game.statemachine.process = (function game$statemachine$process(game__$1,evt){
var temp__4655__auto__ = cljs.core.get_in.call(null,game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game__$1),new cljs.core.Keyword(null,"process-evt","process-evt",-1905216397)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var event_fn = temp__4655__auto__;
return cljs.core.update_in.call(null,game__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game__$1)], null),cljs.core.partial.call(null,event_fn,evt));
} else {
cljs.core.println.call(null,"state",new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game__$1),"has no event-processor:",cljs.core.keys.call(null,cljs.core.get.call(null,game__$1,new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game__$1))));

return game__$1;
}
});

//# sourceMappingURL=statemachine.js.map