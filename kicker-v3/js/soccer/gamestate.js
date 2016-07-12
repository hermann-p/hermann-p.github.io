// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.gamestate');
goog.require('cljs.core');
soccer.gamestate.draw = (function soccer$gamestate$draw(game){
var state = new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game);
return cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"draw","draw",1358331674)], null)).call(null,state.call(null,game));
});
soccer.gamestate.time_tick = (function soccer$gamestate$time_tick(game){
var state = new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game);
return cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"time-tick","time-tick",331405371)], null)));
});
soccer.gamestate.enter = (function soccer$gamestate$enter(game,state_kw){
cljs.core.println.call(null,"gamestate/enter",state_kw);

var temp__4655__auto__ = new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(temp__4655__auto__)){
var cur_state = temp__4655__auto__;
return cljs.core.assoc.call(null,((function (cur_state,temp__4655__auto__){
return (function (p1__13249_SHARP_){
return cljs.core.update_in.call(null,p1__13249_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_kw], null),(function (){var or__4580__auto__ = cljs.core.get_in.call(null,p1__13249_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_kw,new cljs.core.Keyword(null,"enter","enter",1792452624)], null));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.identity;
}
})());
});})(cur_state,temp__4655__auto__))
.call(null,cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state], null),(function (){var or__4580__auto__ = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,new cljs.core.Keyword(null,"leave","leave",1022579443)], null));
if(cljs.core.truth_(or__4580__auto__)){
return or__4580__auto__;
} else {
return cljs.core.identity;
}
})())),new cljs.core.Keyword(null,"cur-state","cur-state",545726752),state_kw);
} else {
return null;
}
});
soccer.gamestate.resize = (function soccer$gamestate$resize(game){
cljs.core.println.call(null,"gamestate/resize");

var states = cljs.core.filter.call(null,(function (kw){
return cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new cljs.core.Keyword(null,"resize","resize",297367086)], null));
}),cljs.core.keys.call(null,game));
return cljs.core.reduce.call(null,((function (states){
return (function (g,s_kw){
var state = cljs.core.get.call(null,g,s_kw);
return cljs.core.assoc.call(null,g,s_kw,new cljs.core.Keyword(null,"resize","resize",297367086).cljs$core$IFn$_invoke$arity$1(state).call(null,state));
});})(states))
,game,states);
});
soccer.gamestate.process = (function soccer$gamestate$process(evt,game){
var temp__4655__auto__ = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"process-evt","process-evt",-1905216397)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var event_fn = temp__4655__auto__;
return cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game)], null),cljs.core.partial.call(null,event_fn,evt));
} else {
cljs.core.println.call(null,"state",new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game),"has no event-processor:",cljs.core.keys.call(null,cljs.core.get.call(null,game,new cljs.core.Keyword(null,"cur-state","cur-state",545726752).cljs$core$IFn$_invoke$arity$1(game))));

return game;
}
});

//# sourceMappingURL=gamestate.js.map