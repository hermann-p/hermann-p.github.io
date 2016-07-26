// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.loading');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('dommy.core');
goog.require('cljs_http.client');
goog.require('game.assets');
goog.require('cljs.core.async');
goog.require('game.chans');
game.loading.enter = (function game$loading$enter(state){
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"top","top",-1856271961),"0");

return state;
});
game.loading.exit = (function game$loading$exit(state){
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"top","top",-1856271961),"-110%");

return state;
});
game.loading.tick = (function game$loading$tick(state){
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str((.9 * game.assets.percent_done.call(null))),cljs.core.str("%")].join(''));

if(cljs.core.truth_(game.assets.ready_QMARK_.call(null))){
var c__8907__auto___9235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8907__auto___9235){
return (function (){
var f__8908__auto__ = (function (){var switch__8886__auto__ = ((function (c__8907__auto___9235){
return (function (state_9225){
var state_val_9226 = (state_9225[(1)]);
if((state_val_9226 === (1))){
var inst_9212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9213 = [new cljs.core.Keyword(null,"as","as",1148689641)];
var inst_9214 = [new cljs.core.Keyword(null,"json","json",1279968570)];
var inst_9215 = cljs.core.PersistentHashMap.fromArrays(inst_9213,inst_9214);
var inst_9216 = cljs_http.client.get.call(null,"level/ortho_test.json",inst_9215);
var state_9225__$1 = (function (){var statearr_9227 = state_9225;
(statearr_9227[(7)] = inst_9212);

return statearr_9227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9225__$1,(3),inst_9216);
} else {
if((state_val_9226 === (2))){
var inst_9223 = (state_9225[(2)]);
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9225__$1,inst_9223);
} else {
if((state_val_9226 === (3))){
var inst_9212 = (state_9225[(7)]);
var inst_9218 = (state_9225[(2)]);
var inst_9219 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_9218);
var inst_9220 = [new cljs.core.Keyword(null,"play","play",-580418022),inst_9219];
var inst_9221 = (new cljs.core.PersistentVector(null,2,(5),inst_9212,inst_9220,null));
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9225__$1,(2),game.chans.state,inst_9221);
} else {
return null;
}
}
}
});})(c__8907__auto___9235))
;
return ((function (switch__8886__auto__,c__8907__auto___9235){
return (function() {
var game$loading$tick_$_state_machine__8887__auto__ = null;
var game$loading$tick_$_state_machine__8887__auto____0 = (function (){
var statearr_9231 = [null,null,null,null,null,null,null,null];
(statearr_9231[(0)] = game$loading$tick_$_state_machine__8887__auto__);

(statearr_9231[(1)] = (1));

return statearr_9231;
});
var game$loading$tick_$_state_machine__8887__auto____1 = (function (state_9225){
while(true){
var ret_value__8888__auto__ = (function (){try{while(true){
var result__8889__auto__ = switch__8886__auto__.call(null,state_9225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8889__auto__;
}
break;
}
}catch (e9232){if((e9232 instanceof Object)){
var ex__8890__auto__ = e9232;
var statearr_9233_9236 = state_9225;
(statearr_9233_9236[(5)] = ex__8890__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9237 = state_9225;
state_9225 = G__9237;
continue;
} else {
return ret_value__8888__auto__;
}
break;
}
});
game$loading$tick_$_state_machine__8887__auto__ = function(state_9225){
switch(arguments.length){
case 0:
return game$loading$tick_$_state_machine__8887__auto____0.call(this);
case 1:
return game$loading$tick_$_state_machine__8887__auto____1.call(this,state_9225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$loading$tick_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$0 = game$loading$tick_$_state_machine__8887__auto____0;
game$loading$tick_$_state_machine__8887__auto__.cljs$core$IFn$_invoke$arity$1 = game$loading$tick_$_state_machine__8887__auto____1;
return game$loading$tick_$_state_machine__8887__auto__;
})()
;})(switch__8886__auto__,c__8907__auto___9235))
})();
var state__8909__auto__ = (function (){var statearr_9234 = f__8908__auto__.call(null);
(statearr_9234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8907__auto___9235);

return statearr_9234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8909__auto__);
});})(c__8907__auto___9235))
);

} else {
}

return state;
});
game.loading.draw = (function game$loading$draw(state){
return state;
});
game.loading.mk_loading_screen = (function game$loading$mk_loading_screen(){
dommy.core.append_BANG_.call(null,document.body,(function (){var v9239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.view","span.view",1041541939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"loadingScreen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selection","div.selection",-379428883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"loadingScreenView"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"id","id",-1388402092),"loadingProgress"], null)], null)], null)], null);
var el__7659__auto__ = hipo.interpreter.create.call(null,v9239,null);
hipo.core.set_hiccup_BANG_.call(null,el__7659__auto__,v9239);

return el__7659__auto__;
})());

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),document.getElementById("loadingScreen"),new cljs.core.Keyword(null,"bar","bar",-1386246584),document.getElementById("loadingProgress")], null);
});
game.loading.mk_state = (function game$loading$mk_state(){
return cljs.core.into.call(null,game.loading.mk_loading_screen.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enter","enter",1792452624),game.loading.enter,new cljs.core.Keyword(null,"leave","leave",1022579443),game.loading.exit,new cljs.core.Keyword(null,"time-tick","time-tick",331405371),game.loading.tick,new cljs.core.Keyword(null,"draw","draw",1358331674),game.loading.draw], null));
});

//# sourceMappingURL=loading.js.map