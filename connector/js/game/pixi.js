// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.pixi');
goog.require('cljs.core');
goog.require('dommy.core');
if(typeof game.pixi.pixi !== 'undefined'){
} else {
game.pixi.pixi = PIXI;
}
game.pixi.mk_view = (function game$pixi$mk_view(var_args){
var args__7329__auto__ = [];
var len__7322__auto___10454 = arguments.length;
var i__7323__auto___10455 = (0);
while(true){
if((i__7323__auto___10455 < len__7322__auto___10454)){
args__7329__auto__.push((arguments[i__7323__auto___10455]));

var G__10456 = (i__7323__auto___10455 + (1));
i__7323__auto___10455 = G__10456;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((2) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((2)),(0),null)):null);
return game.pixi.mk_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7330__auto__);
});

game.pixi.mk_view.cljs$core$IFn$_invoke$arity$variadic = (function (width,height,base){
var renderer = game.pixi.pixi.autoDetectRenderer.call(null,width,height,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true], null)));
var stage = (new game.pixi.pixi.Container());
renderer.autoResize = true;

renderer.transparent = true;

dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,(cljs.core.truth_(base)?base:new cljs.core.Keyword(null,"body","body",-2049205669)))),dommy.core.set_attr_BANG_.call(null,dommy.core.set_style_BANG_.call(null,renderer.view,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"),new cljs.core.Keyword(null,"id","id",-1388402092),"canvas"));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stage","stage",1843544772),stage], null);
});

game.pixi.mk_view.cljs$lang$maxFixedArity = (2);

game.pixi.mk_view.cljs$lang$applyTo = (function (seq10451){
var G__10452 = cljs.core.first.call(null,seq10451);
var seq10451__$1 = cljs.core.next.call(null,seq10451);
var G__10453 = cljs.core.first.call(null,seq10451__$1);
var seq10451__$2 = cljs.core.next.call(null,seq10451__$1);
return game.pixi.mk_view.cljs$core$IFn$_invoke$arity$variadic(G__10452,G__10453,seq10451__$2);
});

game.pixi.dispatch = (function game$pixi$dispatch(el){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(el))){
return new cljs.core.Keyword(null,"wrapped","wrapped",1775172701);
} else {
return new cljs.core.Keyword(null,"raw","raw",1604651272);
}
});
game.pixi.mk_display_list = (function game$pixi$mk_display_list(){
return (new game.pixi.pixi.DisplayList());
});
game.pixi.mk_layer = (function game$pixi$mk_layer(var_args){
var args10457 = [];
var len__7322__auto___10460 = arguments.length;
var i__7323__auto___10461 = (0);
while(true){
if((i__7323__auto___10461 < len__7322__auto___10460)){
args10457.push((arguments[i__7323__auto___10461]));

var G__10462 = (i__7323__auto___10461 + (1));
i__7323__auto___10461 = G__10462;
continue;
} else {
}
break;
}

var G__10459 = args10457.length;
switch (G__10459) {
case 1:
return game.pixi.mk_layer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return game.pixi.mk_layer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10457.length)].join('')));

}
});

game.pixi.mk_layer.cljs$core$IFn$_invoke$arity$1 = (function (z_index){
return game.pixi.mk_layer.call(null,z_index,false);
});

game.pixi.mk_layer.cljs$core$IFn$_invoke$arity$2 = (function (z_index,z_order_fn){
return (new game.pixi.pixi.DisplayGroup(z_index,z_order_fn));
});

game.pixi.mk_layer.cljs$lang$maxFixedArity = 2;

game.pixi.attach_list_BANG_ = (function game$pixi$attach_list_BANG_(display_list,stage){
stage.displayList = display_list;

return display_list;
});
game.pixi.attach_el_BANG_ = (function game$pixi$attach_el_BANG_(child,parent){
parent.addChild(child);

return child;
});
if(typeof game.pixi.get_pos !== 'undefined'){
} else {
game.pixi.get_pos = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","get-pos"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.get_pos,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__10464__delegate = function (el,args){
return cljs.core.apply.call(null,game.pixi.get_pos,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(el),args);
};
var G__10464 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10465__i = 0, G__10465__a = new Array(arguments.length -  1);
while (G__10465__i < G__10465__a.length) {G__10465__a[G__10465__i] = arguments[G__10465__i + 1]; ++G__10465__i;}
  args = new cljs.core.IndexedSeq(G__10465__a,0);
} 
return G__10464__delegate.call(this,el,args);};
G__10464.cljs$lang$maxFixedArity = 1;
G__10464.cljs$lang$applyTo = (function (arglist__10466){
var el = cljs.core.first(arglist__10466);
var args = cljs.core.rest(arglist__10466);
return G__10464__delegate(el,args);
});
G__10464.cljs$core$IFn$_invoke$arity$variadic = G__10464__delegate;
return G__10464;
})()
);
cljs.core._add_method.call(null,game.pixi.get_pos,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() {
var G__10467 = null;
var G__10467__1 = (function (el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el.position.x,el.position.y], null);
});
var G__10467__2 = (function() { 
var G__10468__delegate = function (el,args){
var n_args = cljs.core.count.call(null,args);
if(cljs.core.even_QMARK_.call(null,n_args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("pixi/get-pos: need even number of args"),cljs.core.str("\n"),cljs.core.str("(even? n-args)")].join('')));
}

if(cljs.core._EQ_.call(null,(4),n_args)){
return game.pixi.get_pos.call(null,el);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.first.call(null,args))){
return cljs.core.first.call(null,game.pixi.get_pos.call(null,el));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.first.call(null,args))){
return cljs.core.second.call(null,game.pixi.get_pos.call(null,el));
} else {
return null;

}
}
}
};
var G__10468 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10469__i = 0, G__10469__a = new Array(arguments.length -  1);
while (G__10469__i < G__10469__a.length) {G__10469__a[G__10469__i] = arguments[G__10469__i + 1]; ++G__10469__i;}
  args = new cljs.core.IndexedSeq(G__10469__a,0);
} 
return G__10468__delegate.call(this,el,args);};
G__10468.cljs$lang$maxFixedArity = 1;
G__10468.cljs$lang$applyTo = (function (arglist__10470){
var el = cljs.core.first(arglist__10470);
var args = cljs.core.rest(arglist__10470);
return G__10468__delegate(el,args);
});
G__10468.cljs$core$IFn$_invoke$arity$variadic = G__10468__delegate;
return G__10468;
})()
;
G__10467 = function(el,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return G__10467__1.call(this,el);
default:
var G__10471 = null;
if (arguments.length > 1) {
var G__10472__i = 0, G__10472__a = new Array(arguments.length -  1);
while (G__10472__i < G__10472__a.length) {G__10472__a[G__10472__i] = arguments[G__10472__i + 1]; ++G__10472__i;}
G__10471 = new cljs.core.IndexedSeq(G__10472__a,0);
}
return G__10467__2.cljs$core$IFn$_invoke$arity$variadic(el, G__10471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10467.cljs$lang$maxFixedArity = 1;
G__10467.cljs$lang$applyTo = G__10467__2.cljs$lang$applyTo;
G__10467.cljs$core$IFn$_invoke$arity$1 = G__10467__1;
G__10467.cljs$core$IFn$_invoke$arity$variadic = G__10467__2.cljs$core$IFn$_invoke$arity$variadic;
return G__10467;
})()
);
if(typeof game.pixi.set_pos !== 'undefined'){
} else {
game.pixi.set_pos = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","set-pos"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.set_pos,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__10474__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__10473_SHARP_){
return cljs.core.apply.call(null,game.pixi.set_pos,p1__10473_SHARP_,args);
}));
};
var G__10474 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10475__i = 0, G__10475__a = new Array(arguments.length -  1);
while (G__10475__i < G__10475__a.length) {G__10475__a[G__10475__i] = arguments[G__10475__i + 1]; ++G__10475__i;}
  args = new cljs.core.IndexedSeq(G__10475__a,0);
} 
return G__10474__delegate.call(this,el,args);};
G__10474.cljs$lang$maxFixedArity = 1;
G__10474.cljs$lang$applyTo = (function (arglist__10476){
var el = cljs.core.first(arglist__10476);
var args = cljs.core.rest(arglist__10476);
return G__10474__delegate(el,args);
});
G__10474.cljs$core$IFn$_invoke$arity$variadic = G__10474__delegate;
return G__10474;
})()
);
cljs.core._add_method.call(null,game.pixi.set_pos,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__10478__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_10479__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_10479__$1)){
var G__10477_10480 = (((cljs.core.first.call(null,args_10479__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_10479__$1).fqn:null);
switch (G__10477_10480) {
case "x":
el.x = cljs.core.second.call(null,args_10479__$1);

break;
case "y":
el.y = cljs.core.second.call(null,args_10479__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_10479__$1))].join('')));

}

var G__10482 = cljs.core.drop.call(null,(2),args_10479__$1);
args_10479__$1 = G__10482;
continue;
} else {
}
break;
}

return el;
};
var G__10478 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10483__i = 0, G__10483__a = new Array(arguments.length -  1);
while (G__10483__i < G__10483__a.length) {G__10483__a[G__10483__i] = arguments[G__10483__i + 1]; ++G__10483__i;}
  args = new cljs.core.IndexedSeq(G__10483__a,0);
} 
return G__10478__delegate.call(this,el,args);};
G__10478.cljs$lang$maxFixedArity = 1;
G__10478.cljs$lang$applyTo = (function (arglist__10484){
var el = cljs.core.first(arglist__10484);
var args = cljs.core.rest(arglist__10484);
return G__10478__delegate(el,args);
});
G__10478.cljs$core$IFn$_invoke$arity$variadic = G__10478__delegate;
return G__10478;
})()
);
if(typeof game.pixi.move !== 'undefined'){
} else {
game.pixi.move = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","move"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.move,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__10486__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__10485_SHARP_){
return cljs.core.apply.call(null,game.pixi.move,p1__10485_SHARP_,args);
}));
};
var G__10486 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10487__i = 0, G__10487__a = new Array(arguments.length -  1);
while (G__10487__i < G__10487__a.length) {G__10487__a[G__10487__i] = arguments[G__10487__i + 1]; ++G__10487__i;}
  args = new cljs.core.IndexedSeq(G__10487__a,0);
} 
return G__10486__delegate.call(this,el,args);};
G__10486.cljs$lang$maxFixedArity = 1;
G__10486.cljs$lang$applyTo = (function (arglist__10488){
var el = cljs.core.first(arglist__10488);
var args = cljs.core.rest(arglist__10488);
return G__10486__delegate(el,args);
});
G__10486.cljs$core$IFn$_invoke$arity$variadic = G__10486__delegate;
return G__10486;
})()
);
cljs.core._add_method.call(null,game.pixi.move,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__10490__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_10491__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_10491__$1)){
var G__10489_10492 = (((cljs.core.first.call(null,args_10491__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_10491__$1).fqn:null);
switch (G__10489_10492) {
case "x":
el.x = (el.x + cljs.core.second.call(null,args_10491__$1));

break;
case "y":
el.y = (el.y + cljs.core.second.call(null,args_10491__$1));

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_10491__$1))].join('')));

}

var G__10494 = cljs.core.drop.call(null,(2),args_10491__$1);
args_10491__$1 = G__10494;
continue;
} else {
}
break;
}

return el;
};
var G__10490 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10495__i = 0, G__10495__a = new Array(arguments.length -  1);
while (G__10495__i < G__10495__a.length) {G__10495__a[G__10495__i] = arguments[G__10495__i + 1]; ++G__10495__i;}
  args = new cljs.core.IndexedSeq(G__10495__a,0);
} 
return G__10490__delegate.call(this,el,args);};
G__10490.cljs$lang$maxFixedArity = 1;
G__10490.cljs$lang$applyTo = (function (arglist__10496){
var el = cljs.core.first(arglist__10496);
var args = cljs.core.rest(arglist__10496);
return G__10490__delegate(el,args);
});
G__10490.cljs$core$IFn$_invoke$arity$variadic = G__10490__delegate;
return G__10490;
})()
);
if(typeof game.pixi.set_size !== 'undefined'){
} else {
game.pixi.set_size = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","set-size"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.set_size,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__10498__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__10497_SHARP_){
return cljs.core.apply.call(null,game.pixi.set_size,p1__10497_SHARP_,args);
}));
};
var G__10498 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10499__i = 0, G__10499__a = new Array(arguments.length -  1);
while (G__10499__i < G__10499__a.length) {G__10499__a[G__10499__i] = arguments[G__10499__i + 1]; ++G__10499__i;}
  args = new cljs.core.IndexedSeq(G__10499__a,0);
} 
return G__10498__delegate.call(this,el,args);};
G__10498.cljs$lang$maxFixedArity = 1;
G__10498.cljs$lang$applyTo = (function (arglist__10500){
var el = cljs.core.first(arglist__10500);
var args = cljs.core.rest(arglist__10500);
return G__10498__delegate(el,args);
});
G__10498.cljs$core$IFn$_invoke$arity$variadic = G__10498__delegate;
return G__10498;
})()
);
cljs.core._add_method.call(null,game.pixi.set_size,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__10502__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_10503__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_10503__$1)){
var G__10501_10504 = (((cljs.core.first.call(null,args_10503__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_10503__$1).fqn:null);
switch (G__10501_10504) {
case "w":
el.width = cljs.core.second.call(null,args_10503__$1);

break;
case "h":
el.height = cljs.core.second.call(null,args_10503__$1);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_10503__$1))].join('')));

}

var G__10506 = cljs.core.drop.call(null,(2),args_10503__$1);
args_10503__$1 = G__10506;
continue;
} else {
}
break;
}

return el;
};
var G__10502 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10507__i = 0, G__10507__a = new Array(arguments.length -  1);
while (G__10507__i < G__10507__a.length) {G__10507__a[G__10507__i] = arguments[G__10507__i + 1]; ++G__10507__i;}
  args = new cljs.core.IndexedSeq(G__10507__a,0);
} 
return G__10502__delegate.call(this,el,args);};
G__10502.cljs$lang$maxFixedArity = 1;
G__10502.cljs$lang$applyTo = (function (arglist__10508){
var el = cljs.core.first(arglist__10508);
var args = cljs.core.rest(arglist__10508);
return G__10502__delegate(el,args);
});
G__10502.cljs$core$IFn$_invoke$arity$variadic = G__10502__delegate;
return G__10502;
})()
);
if(typeof game.pixi.set_scale !== 'undefined'){
} else {
game.pixi.set_scale = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","set-scale"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.set_scale,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__10510__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__10509_SHARP_){
return cljs.core.apply.call(null,game.pixi.set_scale,p1__10509_SHARP_,args);
}));
};
var G__10510 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10511__i = 0, G__10511__a = new Array(arguments.length -  1);
while (G__10511__i < G__10511__a.length) {G__10511__a[G__10511__i] = arguments[G__10511__i + 1]; ++G__10511__i;}
  args = new cljs.core.IndexedSeq(G__10511__a,0);
} 
return G__10510__delegate.call(this,el,args);};
G__10510.cljs$lang$maxFixedArity = 1;
G__10510.cljs$lang$applyTo = (function (arglist__10512){
var el = cljs.core.first(arglist__10512);
var args = cljs.core.rest(arglist__10512);
return G__10510__delegate(el,args);
});
G__10510.cljs$core$IFn$_invoke$arity$variadic = G__10510__delegate;
return G__10510;
})()
);
cljs.core._add_method.call(null,game.pixi.set_scale,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__10514__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_10515__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_10515__$1)){
var G__10513_10516 = (((cljs.core.first.call(null,args_10515__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_10515__$1).fqn:null);
switch (G__10513_10516) {
case "x":
el.scale.x = cljs.core.second.call(null,args_10515__$1);

break;
case "y":
el.scale.y = cljs.core.second.call(null,args_10515__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_10515__$1))].join('')));

}

var G__10518 = cljs.core.drop.call(null,(2),args_10515__$1);
args_10515__$1 = G__10518;
continue;
} else {
}
break;
}

return el;
};
var G__10514 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10519__i = 0, G__10519__a = new Array(arguments.length -  1);
while (G__10519__i < G__10519__a.length) {G__10519__a[G__10519__i] = arguments[G__10519__i + 1]; ++G__10519__i;}
  args = new cljs.core.IndexedSeq(G__10519__a,0);
} 
return G__10514__delegate.call(this,el,args);};
G__10514.cljs$lang$maxFixedArity = 1;
G__10514.cljs$lang$applyTo = (function (arglist__10520){
var el = cljs.core.first(arglist__10520);
var args = cljs.core.rest(arglist__10520);
return G__10514__delegate(el,args);
});
G__10514.cljs$core$IFn$_invoke$arity$variadic = G__10514__delegate;
return G__10514;
})()
);
if(typeof game.pixi.set_anchor !== 'undefined'){
} else {
game.pixi.set_anchor = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","set-anchor"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.set_anchor,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__10522__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__10521_SHARP_){
return cljs.core.apply.call(null,game.pixi.set_anchor,p1__10521_SHARP_,args);
}));
};
var G__10522 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10523__i = 0, G__10523__a = new Array(arguments.length -  1);
while (G__10523__i < G__10523__a.length) {G__10523__a[G__10523__i] = arguments[G__10523__i + 1]; ++G__10523__i;}
  args = new cljs.core.IndexedSeq(G__10523__a,0);
} 
return G__10522__delegate.call(this,el,args);};
G__10522.cljs$lang$maxFixedArity = 1;
G__10522.cljs$lang$applyTo = (function (arglist__10524){
var el = cljs.core.first(arglist__10524);
var args = cljs.core.rest(arglist__10524);
return G__10522__delegate(el,args);
});
G__10522.cljs$core$IFn$_invoke$arity$variadic = G__10522__delegate;
return G__10522;
})()
);
cljs.core._add_method.call(null,game.pixi.set_anchor,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__10526__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_10527__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_10527__$1)){
if((((0) <= cljs.core.second.call(null,args_10527__$1))) && ((cljs.core.second.call(null,args_10527__$1) <= (1)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("pixi/set-anchor: must be in [0, 1]"),cljs.core.str("\n"),cljs.core.str("(<= 0 (second args) 1)")].join('')));
}

var G__10525_10528 = (((cljs.core.first.call(null,args_10527__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_10527__$1).fqn:null);
switch (G__10525_10528) {
case "x":
el.anchor.x = cljs.core.second.call(null,args_10527__$1);

break;
case "y":
el.anchor.y = cljs.core.second.call(null,args_10527__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_10527__$1))].join('')));

}

var G__10530 = cljs.core.drop.call(null,(2),args_10527__$1);
args_10527__$1 = G__10530;
continue;
} else {
}
break;
}

return el;
};
var G__10526 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__10531__i = 0, G__10531__a = new Array(arguments.length -  1);
while (G__10531__i < G__10531__a.length) {G__10531__a[G__10531__i] = arguments[G__10531__i + 1]; ++G__10531__i;}
  args = new cljs.core.IndexedSeq(G__10531__a,0);
} 
return G__10526__delegate.call(this,el,args);};
G__10526.cljs$lang$maxFixedArity = 1;
G__10526.cljs$lang$applyTo = (function (arglist__10532){
var el = cljs.core.first(arglist__10532);
var args = cljs.core.rest(arglist__10532);
return G__10526__delegate(el,args);
});
G__10526.cljs$core$IFn$_invoke$arity$variadic = G__10526__delegate;
return G__10526;
})()
);
if(typeof game.pixi.rotate_BANG_ !== 'undefined'){
} else {
game.pixi.rotate_BANG_ = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","rotate!"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.rotate_BANG_,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function (el,angle){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__10533_SHARP_){
return game.pixi.rotate_BANG_.call(null,p1__10533_SHARP_,angle);
}));
}));
cljs.core._add_method.call(null,game.pixi.rotate_BANG_,new cljs.core.Keyword(null,"raw","raw",1604651272),(function (el,angle){
var cur_angle = el.rotation;
return el.rotation = (cur_angle + angle);
}));
if(typeof game.pixi.update_sprite_BANG_ !== 'undefined'){
} else {
game.pixi.update_sprite_BANG_ = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game.pixi","update-sprite!"),game.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,game.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__10534__delegate = function (sprite,args){
return cljs.core.assoc.call(null,sprite,new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.apply.call(null,game.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(sprite),args));
};
var G__10534 = function (sprite,var_args){
var args = null;
if (arguments.length > 1) {
var G__10535__i = 0, G__10535__a = new Array(arguments.length -  1);
while (G__10535__i < G__10535__a.length) {G__10535__a[G__10535__i] = arguments[G__10535__i + 1]; ++G__10535__i;}
  args = new cljs.core.IndexedSeq(G__10535__a,0);
} 
return G__10534__delegate.call(this,sprite,args);};
G__10534.cljs$lang$maxFixedArity = 1;
G__10534.cljs$lang$applyTo = (function (arglist__10536){
var sprite = cljs.core.first(arglist__10536);
var args = cljs.core.rest(arglist__10536);
return G__10534__delegate(sprite,args);
});
G__10534.cljs$core$IFn$_invoke$arity$variadic = G__10534__delegate;
return G__10534;
})()
);
cljs.core._add_method.call(null,game.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__10542__delegate = function (sprite,args){
var ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"layer","layer",-1601820589),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null], null), null);
var args_10543__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_10543__$1)){
var op_10544 = cljs.core.first.call(null,args_10543__$1);
var vec__10538_10545 = cljs.core.split_with.call(null,((function (args_10543__$1,op_10544,ops){
return (function (p1__10537_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,ops,p1__10537_SHARP_));
});})(args_10543__$1,op_10544,ops))
,cljs.core.rest.call(null,args_10543__$1));
var params_10546 = cljs.core.nth.call(null,vec__10538_10545,(0),null);
var next_10547 = cljs.core.nth.call(null,vec__10538_10545,(1),null);
var G__10541_10548 = (((op_10544 instanceof cljs.core.Keyword))?op_10544.fqn:null);
switch (G__10541_10548) {
case "pos":
cljs.core.apply.call(null,game.pixi.set_pos,sprite,params_10546);

break;
case "size":
cljs.core.apply.call(null,game.pixi.set_size,sprite,params_10546);

break;
case "scale":
cljs.core.apply.call(null,game.pixi.set_scale,sprite,params_10546);

break;
case "anchor":
cljs.core.apply.call(null,game.pixi.set_anchor,sprite,params_10546);

break;
case "rotate":
game.pixi.rotate_BANG_.call(null,sprite,cljs.core.first.call(null,params_10546));

break;
case "layer":
sprite.displayGroup = cljs.core.first.call(null,params_10546);

break;
case "list":
game.pixi.attach_el_BANG_.call(null,sprite,cljs.core.first.call(null,params_10546));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_10544)].join('')));

}

var G__10550 = next_10547;
args_10543__$1 = G__10550;
continue;
} else {
}
break;
}

return sprite;
};
var G__10542 = function (sprite,var_args){
var args = null;
if (arguments.length > 1) {
var G__10551__i = 0, G__10551__a = new Array(arguments.length -  1);
while (G__10551__i < G__10551__a.length) {G__10551__a[G__10551__i] = arguments[G__10551__i + 1]; ++G__10551__i;}
  args = new cljs.core.IndexedSeq(G__10551__a,0);
} 
return G__10542__delegate.call(this,sprite,args);};
G__10542.cljs$lang$maxFixedArity = 1;
G__10542.cljs$lang$applyTo = (function (arglist__10552){
var sprite = cljs.core.first(arglist__10552);
var args = cljs.core.rest(arglist__10552);
return G__10542__delegate(sprite,args);
});
G__10542.cljs$core$IFn$_invoke$arity$variadic = G__10542__delegate;
return G__10542;
})()
);
game.pixi.mk_sprite = (function game$pixi$mk_sprite(var_args){
var args__7329__auto__ = [];
var len__7322__auto___10555 = arguments.length;
var i__7323__auto___10556 = (0);
while(true){
if((i__7323__auto___10556 < len__7322__auto___10555)){
args__7329__auto__.push((arguments[i__7323__auto___10556]));

var G__10557 = (i__7323__auto___10556 + (1));
i__7323__auto___10556 = G__10557;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return game.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

game.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic = (function (tex,args){
return cljs.core.apply.call(null,game.pixi.update_sprite_BANG_,(new game.pixi.pixi.Sprite(tex)),args);
});

game.pixi.mk_sprite.cljs$lang$maxFixedArity = (1);

game.pixi.mk_sprite.cljs$lang$applyTo = (function (seq10553){
var G__10554 = cljs.core.first.call(null,seq10553);
var seq10553__$1 = cljs.core.next.call(null,seq10553);
return game.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic(G__10554,seq10553__$1);
});

game.pixi.update_pos_BANG_ = (function game$pixi$update_pos_BANG_(p__10558){
var map__10561 = p__10558;
var map__10561__$1 = ((((!((map__10561 == null)))?((((map__10561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10561):map__10561);
var el = map__10561__$1;
var x = cljs.core.get.call(null,map__10561__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__10561__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sprite = cljs.core.get.call(null,map__10561__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
return game.pixi.set_pos.call(null,el,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});

//# sourceMappingURL=pixi.js.map