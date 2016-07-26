// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.scores');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('game.chans');
goog.require('dommy.core');
goog.require('hipo.core');
game.scores.init = (function game$scores$init(state){
dommy.core.append_BANG_.call(null,document.body,(function (){var v14809 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.view","span.view",1041541939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"scores"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"scoreImg"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"scoreMsg"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"scoreNextButton"], null),"continue"], null)], null);
var el__9503__auto__ = hipo.interpreter.create.call(null,v14809,null);
hipo.core.set_hiccup_BANG_.call(null,el__9503__auto__,v14809);

return el__9503__auto__;
})());

return state;
});
game.scores.enter = (function game$scores$enter(state){
return state;
});
game.scores.exit = (function game$scores$exit(state){
return state;
});

//# sourceMappingURL=scores.js.map