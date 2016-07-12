// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.main');
goog.require('cljs.core');
goog.require('soccer.play');
goog.require('soccer.loading');
goog.require('soccer.pixi');
goog.require('soccer.channels');
goog.require('soccer.assets');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('soccer.gamestate');
soccer.main.init = (function soccer$main$init(){
soccer.assets.request_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"evilos","evilos",-681069316),new cljs.core.Keyword(null,"url","url",276297046),"imgs/evilos.jpg"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"foot","foot",-487226607),new cljs.core.Keyword(null,"url","url",276297046),"imgs/shoe.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ball","ball",542859139),new cljs.core.Keyword(null,"url","url",276297046),"imgs/ball.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"url","url",276297046),"imgs/Soccer_Arena_01.jpeg"], null)], null),new cljs.core.Keyword(null,"snd","snd",643718828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"hit-ball","hit-ball",1586655808),new cljs.core.Keyword(null,"url","url",276297046),"snd/hit.mp3"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cheer","cheer",671821149),new cljs.core.Keyword(null,"url","url",276297046),"snd/cheer.mp3"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sad","sad",427137188),new cljs.core.Keyword(null,"url","url",276297046),"snd/aww.mp3"], null)], null)], null));

soccer.assets.load.call(null);

dommy.core.listen_BANG_.call(null,window,new cljs.core.Keyword(null,"resize","resize",297367086),(function (){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__){
return (function (){
var f__7011__auto__ = (function (){var switch__6989__auto__ = ((function (c__7010__auto__){
return (function (state_55283){
var state_val_55284 = (state_55283[(1)]);
if((state_val_55284 === (1))){
var inst_55277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55278 = [new cljs.core.Keyword(null,"resize","resize",297367086)];
var inst_55279 = (new cljs.core.PersistentVector(null,1,(5),inst_55277,inst_55278,null));
var state_55283__$1 = state_55283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55283__$1,(2),soccer.channels.global_chan,inst_55279);
} else {
if((state_val_55284 === (2))){
var inst_55281 = (state_55283[(2)]);
var state_55283__$1 = state_55283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55283__$1,inst_55281);
} else {
return null;
}
}
});})(c__7010__auto__))
;
return ((function (switch__6989__auto__,c__7010__auto__){
return (function() {
var soccer$main$init_$_state_machine__6990__auto__ = null;
var soccer$main$init_$_state_machine__6990__auto____0 = (function (){
var statearr_55288 = [null,null,null,null,null,null,null];
(statearr_55288[(0)] = soccer$main$init_$_state_machine__6990__auto__);

(statearr_55288[(1)] = (1));

return statearr_55288;
});
var soccer$main$init_$_state_machine__6990__auto____1 = (function (state_55283){
while(true){
var ret_value__6991__auto__ = (function (){try{while(true){
var result__6992__auto__ = switch__6989__auto__.call(null,state_55283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6992__auto__;
}
break;
}
}catch (e55289){if((e55289 instanceof Object)){
var ex__6993__auto__ = e55289;
var statearr_55290_55292 = state_55283;
(statearr_55290_55292[(5)] = ex__6993__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55293 = state_55283;
state_55283 = G__55293;
continue;
} else {
return ret_value__6991__auto__;
}
break;
}
});
soccer$main$init_$_state_machine__6990__auto__ = function(state_55283){
switch(arguments.length){
case 0:
return soccer$main$init_$_state_machine__6990__auto____0.call(this);
case 1:
return soccer$main$init_$_state_machine__6990__auto____1.call(this,state_55283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$main$init_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$main$init_$_state_machine__6990__auto____0;
soccer$main$init_$_state_machine__6990__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$main$init_$_state_machine__6990__auto____1;
return soccer$main$init_$_state_machine__6990__auto__;
})()
;})(switch__6989__auto__,c__7010__auto__))
})();
var state__7012__auto__ = (function (){var statearr_55291 = f__7011__auto__.call(null);
(statearr_55291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_55291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__))
);

return c__7010__auto__;
}));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading","loading",-737050189),soccer.loading.mk_state.call(null),new cljs.core.Keyword(null,"play","play",-580418022),soccer.play.mk_state.call(null,soccer.pixi.mk_view.call(null,window.innerWidth,window.innerHeight)),new cljs.core.Keyword(null,"cur-state","cur-state",545726752),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
});
if(typeof soccer.main.event !== 'undefined'){
} else {
soccer.main.event = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.main","event"),((function (method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__,hierarchy__5497__auto__){
return (function (_,e){
return cljs.core.first.call(null,e);
});})(method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__,hierarchy__5497__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.main.event,new cljs.core.Keyword(null,"resize","resize",297367086),(function (game,e){
return soccer.gamestate.resize.call(null,game);
}));

//# sourceMappingURL=main.js.map