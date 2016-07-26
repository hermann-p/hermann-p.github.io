// Compiled by ClojureScript 1.9.89 {}
goog.provide('soccer.loading');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('dommy.core');
goog.require('game.assets');
goog.require('game.chans');
goog.require('cljs.core.async');
soccer.loading.enter = (function soccer$loading$enter(state){
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"top","top",-1856271961),"0");

return state;
});
soccer.loading.exit = (function soccer$loading$exit(state){
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"top","top",-1856271961),"-100%");

return state;
});
soccer.loading.tick = (function soccer$loading$tick(state){
dommy.core.set_attr_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"value","value",305978217),game.assets.percent_done.call(null));

if(cljs.core.truth_(game.assets.ready_QMARK_.call(null))){
var c__8831__auto___14043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8831__auto___14043){
return (function (){
var f__8832__auto__ = (function (){var switch__8810__auto__ = ((function (c__8831__auto___14043){
return (function (state_14034){
var state_val_14035 = (state_14034[(1)]);
if((state_val_14035 === (1))){
var state_14034__$1 = state_14034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14034__$1,(2),game.chans.state,new cljs.core.Keyword(null,"play","play",-580418022));
} else {
if((state_val_14035 === (2))){
var inst_14032 = (state_14034[(2)]);
var state_14034__$1 = state_14034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14034__$1,inst_14032);
} else {
return null;
}
}
});})(c__8831__auto___14043))
;
return ((function (switch__8810__auto__,c__8831__auto___14043){
return (function() {
var soccer$loading$tick_$_state_machine__8811__auto__ = null;
var soccer$loading$tick_$_state_machine__8811__auto____0 = (function (){
var statearr_14039 = [null,null,null,null,null,null,null];
(statearr_14039[(0)] = soccer$loading$tick_$_state_machine__8811__auto__);

(statearr_14039[(1)] = (1));

return statearr_14039;
});
var soccer$loading$tick_$_state_machine__8811__auto____1 = (function (state_14034){
while(true){
var ret_value__8812__auto__ = (function (){try{while(true){
var result__8813__auto__ = switch__8810__auto__.call(null,state_14034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8813__auto__;
}
break;
}
}catch (e14040){if((e14040 instanceof Object)){
var ex__8814__auto__ = e14040;
var statearr_14041_14044 = state_14034;
(statearr_14041_14044[(5)] = ex__8814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14045 = state_14034;
state_14034 = G__14045;
continue;
} else {
return ret_value__8812__auto__;
}
break;
}
});
soccer$loading$tick_$_state_machine__8811__auto__ = function(state_14034){
switch(arguments.length){
case 0:
return soccer$loading$tick_$_state_machine__8811__auto____0.call(this);
case 1:
return soccer$loading$tick_$_state_machine__8811__auto____1.call(this,state_14034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$loading$tick_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$loading$tick_$_state_machine__8811__auto____0;
soccer$loading$tick_$_state_machine__8811__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$loading$tick_$_state_machine__8811__auto____1;
return soccer$loading$tick_$_state_machine__8811__auto__;
})()
;})(switch__8810__auto__,c__8831__auto___14043))
})();
var state__8833__auto__ = (function (){var statearr_14042 = f__8832__auto__.call(null);
(statearr_14042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8831__auto___14043);

return statearr_14042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8833__auto__);
});})(c__8831__auto___14043))
);

} else {
}

return state;
});
soccer.loading.draw = (function soccer$loading$draw(state){
return state;
});
soccer.loading.mk_loading_screen = (function soccer$loading$mk_loading_screen(){
dommy.core.append_BANG_.call(null,document.body,(function (){var v14047 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.view","span.view",1041541939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"loadingScreen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selection","div.selection",-379428883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"id","id",-1388402092),"loadingProgress"], null)], null)], null)], null);
var el__9503__auto__ = hipo.interpreter.create.call(null,v14047,null);
hipo.core.set_hiccup_BANG_.call(null,el__9503__auto__,v14047);

return el__9503__auto__;
})());

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),document.getElementById("loadingScreen"),new cljs.core.Keyword(null,"bar","bar",-1386246584),document.getElementById("loadingProgress")], null);
});
soccer.loading.mk_state = (function soccer$loading$mk_state(){
return cljs.core.into.call(null,soccer.loading.mk_loading_screen.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enter","enter",1792452624),soccer.loading.enter,new cljs.core.Keyword(null,"leave","leave",1022579443),soccer.loading.exit,new cljs.core.Keyword(null,"time-tick","time-tick",331405371),soccer.loading.tick,new cljs.core.Keyword(null,"draw","draw",1358331674),soccer.loading.draw], null));
});

//# sourceMappingURL=loading.js.map