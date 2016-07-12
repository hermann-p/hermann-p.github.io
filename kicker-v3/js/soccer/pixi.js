// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.pixi');
goog.require('cljs.core');
goog.require('dommy.core');
if(typeof soccer.pixi.pixi !== 'undefined'){
} else {
soccer.pixi.pixi = PIXI;
}
soccer.pixi.mk_view = (function soccer$pixi$mk_view(width,height){
var renderer = soccer.pixi.pixi.autoDetectRenderer.call(null,width,height);
var stage = (new soccer.pixi.pixi.Container());
renderer.autoResize = true;

dommy.core.append_BANG_.call(null,document.body,dommy.core.set_style_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,renderer.view,new cljs.core.Keyword(null,"id","id",-1388402092),"canvas"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px"));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"stage","stage",1843544772),stage], null);
});
soccer.pixi.dispatch = (function soccer$pixi$dispatch(el){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(el))){
return new cljs.core.Keyword(null,"wrapped","wrapped",1775172701);
} else {
return new cljs.core.Keyword(null,"raw","raw",1604651272);
}
});
soccer.pixi.mk_display_list = (function soccer$pixi$mk_display_list(){
return (new soccer.pixi.pixi.DisplayList());
});
soccer.pixi.mk_layer = (function soccer$pixi$mk_layer(var_args){
var args54146 = [];
var len__5638__auto___54149 = arguments.length;
var i__5639__auto___54150 = (0);
while(true){
if((i__5639__auto___54150 < len__5638__auto___54149)){
args54146.push((arguments[i__5639__auto___54150]));

var G__54151 = (i__5639__auto___54150 + (1));
i__5639__auto___54150 = G__54151;
continue;
} else {
}
break;
}

var G__54148 = args54146.length;
switch (G__54148) {
case 1:
return soccer.pixi.mk_layer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return soccer.pixi.mk_layer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54146.length)].join('')));

}
});

soccer.pixi.mk_layer.cljs$core$IFn$_invoke$arity$1 = (function (z_index){
return soccer.pixi.mk_layer.call(null,z_index,false);
});

soccer.pixi.mk_layer.cljs$core$IFn$_invoke$arity$2 = (function (z_index,z_order_fn){
return (new soccer.pixi.pixi.DisplayGroup(z_index,z_order_fn));
});

soccer.pixi.mk_layer.cljs$lang$maxFixedArity = 2;
soccer.pixi.attach_list_BANG_ = (function soccer$pixi$attach_list_BANG_(display_list,stage){
stage.displayList = display_list;

return display_list;
});
soccer.pixi.attach_el_BANG_ = (function soccer$pixi$attach_el_BANG_(child,parent){
cljs.core.println.call(null,"pixi/attach-el!","\n","child:",child,"\n","parent:",parent);

parent.addChild(child);

return child;
});
if(typeof soccer.pixi.get_pos !== 'undefined'){
} else {
soccer.pixi.get_pos = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","get-pos"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.get_pos,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__54153__delegate = function (el,args){
return cljs.core.apply.call(null,soccer.pixi.get_pos,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(el),args);
};
var G__54153 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54154__i = 0, G__54154__a = new Array(arguments.length -  1);
while (G__54154__i < G__54154__a.length) {G__54154__a[G__54154__i] = arguments[G__54154__i + 1]; ++G__54154__i;}
  args = new cljs.core.IndexedSeq(G__54154__a,0);
} 
return G__54153__delegate.call(this,el,args);};
G__54153.cljs$lang$maxFixedArity = 1;
G__54153.cljs$lang$applyTo = (function (arglist__54155){
var el = cljs.core.first(arglist__54155);
var args = cljs.core.rest(arglist__54155);
return G__54153__delegate(el,args);
});
G__54153.cljs$core$IFn$_invoke$arity$variadic = G__54153__delegate;
return G__54153;
})()
);
cljs.core._add_method.call(null,soccer.pixi.get_pos,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() {
var G__54156 = null;
var G__54156__1 = (function (el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el.position.x,el.position.y], null);
});
var G__54156__2 = (function() { 
var G__54157__delegate = function (el,args){
var n_args = cljs.core.count.call(null,args);
if(cljs.core.even_QMARK_.call(null,n_args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("pixi/get-pos: need even number of args"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"n-args","n-args",-74553117,null))))].join('')));
}

if(cljs.core._EQ_.call(null,(4),n_args)){
return soccer.pixi.get_pos.call(null,el);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.first.call(null,args))){
return cljs.core.first.call(null,soccer.pixi.get_pos.call(null,el));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.first.call(null,args))){
return cljs.core.second.call(null,soccer.pixi.get_pos.call(null,el));
} else {
return null;

}
}
}
};
var G__54157 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54158__i = 0, G__54158__a = new Array(arguments.length -  1);
while (G__54158__i < G__54158__a.length) {G__54158__a[G__54158__i] = arguments[G__54158__i + 1]; ++G__54158__i;}
  args = new cljs.core.IndexedSeq(G__54158__a,0);
} 
return G__54157__delegate.call(this,el,args);};
G__54157.cljs$lang$maxFixedArity = 1;
G__54157.cljs$lang$applyTo = (function (arglist__54159){
var el = cljs.core.first(arglist__54159);
var args = cljs.core.rest(arglist__54159);
return G__54157__delegate(el,args);
});
G__54157.cljs$core$IFn$_invoke$arity$variadic = G__54157__delegate;
return G__54157;
})()
;
G__54156 = function(el,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return G__54156__1.call(this,el);
default:
var G__54160 = null;
if (arguments.length > 1) {
var G__54161__i = 0, G__54161__a = new Array(arguments.length -  1);
while (G__54161__i < G__54161__a.length) {G__54161__a[G__54161__i] = arguments[G__54161__i + 1]; ++G__54161__i;}
G__54160 = new cljs.core.IndexedSeq(G__54161__a,0);
}
return G__54156__2.cljs$core$IFn$_invoke$arity$variadic(el, G__54160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54156.cljs$lang$maxFixedArity = 1;
G__54156.cljs$lang$applyTo = G__54156__2.cljs$lang$applyTo;
G__54156.cljs$core$IFn$_invoke$arity$1 = G__54156__1;
G__54156.cljs$core$IFn$_invoke$arity$variadic = G__54156__2.cljs$core$IFn$_invoke$arity$variadic;
return G__54156;
})()
);
if(typeof soccer.pixi.set_pos !== 'undefined'){
} else {
soccer.pixi.set_pos = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-pos"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_pos,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__54163__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__54162_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_pos,p1__54162_SHARP_,args);
}));
};
var G__54163 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54164__i = 0, G__54164__a = new Array(arguments.length -  1);
while (G__54164__i < G__54164__a.length) {G__54164__a[G__54164__i] = arguments[G__54164__i + 1]; ++G__54164__i;}
  args = new cljs.core.IndexedSeq(G__54164__a,0);
} 
return G__54163__delegate.call(this,el,args);};
G__54163.cljs$lang$maxFixedArity = 1;
G__54163.cljs$lang$applyTo = (function (arglist__54165){
var el = cljs.core.first(arglist__54165);
var args = cljs.core.rest(arglist__54165);
return G__54163__delegate(el,args);
});
G__54163.cljs$core$IFn$_invoke$arity$variadic = G__54163__delegate;
return G__54163;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_pos,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__54167__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)))))].join('')));
}

var args_54168__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_54168__$1)){
var G__54166_54169 = (((cljs.core.first.call(null,args_54168__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_54168__$1).fqn:null);
switch (G__54166_54169) {
case "x":
el.x = cljs.core.second.call(null,args_54168__$1);

break;
case "y":
el.y = cljs.core.second.call(null,args_54168__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_54168__$1))].join('')));

}

var G__54171 = cljs.core.drop.call(null,(2),args_54168__$1);
args_54168__$1 = G__54171;
continue;
} else {
}
break;
}

return el;
};
var G__54167 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54172__i = 0, G__54172__a = new Array(arguments.length -  1);
while (G__54172__i < G__54172__a.length) {G__54172__a[G__54172__i] = arguments[G__54172__i + 1]; ++G__54172__i;}
  args = new cljs.core.IndexedSeq(G__54172__a,0);
} 
return G__54167__delegate.call(this,el,args);};
G__54167.cljs$lang$maxFixedArity = 1;
G__54167.cljs$lang$applyTo = (function (arglist__54173){
var el = cljs.core.first(arglist__54173);
var args = cljs.core.rest(arglist__54173);
return G__54167__delegate(el,args);
});
G__54167.cljs$core$IFn$_invoke$arity$variadic = G__54167__delegate;
return G__54167;
})()
);
if(typeof soccer.pixi.move !== 'undefined'){
} else {
soccer.pixi.move = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","move"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.move,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__54175__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__54174_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.move,p1__54174_SHARP_,args);
}));
};
var G__54175 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54176__i = 0, G__54176__a = new Array(arguments.length -  1);
while (G__54176__i < G__54176__a.length) {G__54176__a[G__54176__i] = arguments[G__54176__i + 1]; ++G__54176__i;}
  args = new cljs.core.IndexedSeq(G__54176__a,0);
} 
return G__54175__delegate.call(this,el,args);};
G__54175.cljs$lang$maxFixedArity = 1;
G__54175.cljs$lang$applyTo = (function (arglist__54177){
var el = cljs.core.first(arglist__54177);
var args = cljs.core.rest(arglist__54177);
return G__54175__delegate(el,args);
});
G__54175.cljs$core$IFn$_invoke$arity$variadic = G__54175__delegate;
return G__54175;
})()
);
cljs.core._add_method.call(null,soccer.pixi.move,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__54179__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)))))].join('')));
}

var args_54180__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_54180__$1)){
var G__54178_54181 = (((cljs.core.first.call(null,args_54180__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_54180__$1).fqn:null);
switch (G__54178_54181) {
case "x":
el.x = (el.x + cljs.core.second.call(null,args_54180__$1));

break;
case "y":
el.y = (el.y + cljs.core.second.call(null,args_54180__$1));

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_54180__$1))].join('')));

}

var G__54183 = cljs.core.drop.call(null,(2),args_54180__$1);
args_54180__$1 = G__54183;
continue;
} else {
}
break;
}

return el;
};
var G__54179 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54184__i = 0, G__54184__a = new Array(arguments.length -  1);
while (G__54184__i < G__54184__a.length) {G__54184__a[G__54184__i] = arguments[G__54184__i + 1]; ++G__54184__i;}
  args = new cljs.core.IndexedSeq(G__54184__a,0);
} 
return G__54179__delegate.call(this,el,args);};
G__54179.cljs$lang$maxFixedArity = 1;
G__54179.cljs$lang$applyTo = (function (arglist__54185){
var el = cljs.core.first(arglist__54185);
var args = cljs.core.rest(arglist__54185);
return G__54179__delegate(el,args);
});
G__54179.cljs$core$IFn$_invoke$arity$variadic = G__54179__delegate;
return G__54179;
})()
);
if(typeof soccer.pixi.set_size !== 'undefined'){
} else {
soccer.pixi.set_size = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-size"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_size,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__54187__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__54186_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_size,p1__54186_SHARP_,args);
}));
};
var G__54187 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54188__i = 0, G__54188__a = new Array(arguments.length -  1);
while (G__54188__i < G__54188__a.length) {G__54188__a[G__54188__i] = arguments[G__54188__i + 1]; ++G__54188__i;}
  args = new cljs.core.IndexedSeq(G__54188__a,0);
} 
return G__54187__delegate.call(this,el,args);};
G__54187.cljs$lang$maxFixedArity = 1;
G__54187.cljs$lang$applyTo = (function (arglist__54189){
var el = cljs.core.first(arglist__54189);
var args = cljs.core.rest(arglist__54189);
return G__54187__delegate(el,args);
});
G__54187.cljs$core$IFn$_invoke$arity$variadic = G__54187__delegate;
return G__54187;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_size,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__54191__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)))))].join('')));
}

var args_54192__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_54192__$1)){
var G__54190_54193 = (((cljs.core.first.call(null,args_54192__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_54192__$1).fqn:null);
switch (G__54190_54193) {
case "w":
el.width = cljs.core.second.call(null,args_54192__$1);

break;
case "h":
el.height = cljs.core.second.call(null,args_54192__$1);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_54192__$1))].join('')));

}

var G__54195 = cljs.core.drop.call(null,(2),args_54192__$1);
args_54192__$1 = G__54195;
continue;
} else {
}
break;
}

return el;
};
var G__54191 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54196__i = 0, G__54196__a = new Array(arguments.length -  1);
while (G__54196__i < G__54196__a.length) {G__54196__a[G__54196__i] = arguments[G__54196__i + 1]; ++G__54196__i;}
  args = new cljs.core.IndexedSeq(G__54196__a,0);
} 
return G__54191__delegate.call(this,el,args);};
G__54191.cljs$lang$maxFixedArity = 1;
G__54191.cljs$lang$applyTo = (function (arglist__54197){
var el = cljs.core.first(arglist__54197);
var args = cljs.core.rest(arglist__54197);
return G__54191__delegate(el,args);
});
G__54191.cljs$core$IFn$_invoke$arity$variadic = G__54191__delegate;
return G__54191;
})()
);
if(typeof soccer.pixi.set_scale !== 'undefined'){
} else {
soccer.pixi.set_scale = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-scale"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_scale,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__54199__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__54198_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_scale,p1__54198_SHARP_,args);
}));
};
var G__54199 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54200__i = 0, G__54200__a = new Array(arguments.length -  1);
while (G__54200__i < G__54200__a.length) {G__54200__a[G__54200__i] = arguments[G__54200__i + 1]; ++G__54200__i;}
  args = new cljs.core.IndexedSeq(G__54200__a,0);
} 
return G__54199__delegate.call(this,el,args);};
G__54199.cljs$lang$maxFixedArity = 1;
G__54199.cljs$lang$applyTo = (function (arglist__54201){
var el = cljs.core.first(arglist__54201);
var args = cljs.core.rest(arglist__54201);
return G__54199__delegate(el,args);
});
G__54199.cljs$core$IFn$_invoke$arity$variadic = G__54199__delegate;
return G__54199;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_scale,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__54203__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)))))].join('')));
}

var args_54204__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_54204__$1)){
var G__54202_54205 = (((cljs.core.first.call(null,args_54204__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_54204__$1).fqn:null);
switch (G__54202_54205) {
case "x":
el.scale.x = cljs.core.second.call(null,args_54204__$1);

break;
case "y":
el.scale.y = cljs.core.second.call(null,args_54204__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_54204__$1))].join('')));

}

var G__54207 = cljs.core.drop.call(null,(2),args_54204__$1);
args_54204__$1 = G__54207;
continue;
} else {
}
break;
}

return el;
};
var G__54203 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54208__i = 0, G__54208__a = new Array(arguments.length -  1);
while (G__54208__i < G__54208__a.length) {G__54208__a[G__54208__i] = arguments[G__54208__i + 1]; ++G__54208__i;}
  args = new cljs.core.IndexedSeq(G__54208__a,0);
} 
return G__54203__delegate.call(this,el,args);};
G__54203.cljs$lang$maxFixedArity = 1;
G__54203.cljs$lang$applyTo = (function (arglist__54209){
var el = cljs.core.first(arglist__54209);
var args = cljs.core.rest(arglist__54209);
return G__54203__delegate(el,args);
});
G__54203.cljs$core$IFn$_invoke$arity$variadic = G__54203__delegate;
return G__54203;
})()
);
if(typeof soccer.pixi.set_anchor !== 'undefined'){
} else {
soccer.pixi.set_anchor = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-anchor"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_anchor,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__54211__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__54210_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_anchor,p1__54210_SHARP_,args);
}));
};
var G__54211 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54212__i = 0, G__54212__a = new Array(arguments.length -  1);
while (G__54212__i < G__54212__a.length) {G__54212__a[G__54212__i] = arguments[G__54212__i + 1]; ++G__54212__i;}
  args = new cljs.core.IndexedSeq(G__54212__a,0);
} 
return G__54211__delegate.call(this,el,args);};
G__54211.cljs$lang$maxFixedArity = 1;
G__54211.cljs$lang$applyTo = (function (arglist__54213){
var el = cljs.core.first(arglist__54213);
var args = cljs.core.rest(arglist__54213);
return G__54211__delegate(el,args);
});
G__54211.cljs$core$IFn$_invoke$arity$variadic = G__54211__delegate;
return G__54211;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_anchor,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__54215__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)))))].join('')));
}

var args_54216__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_54216__$1)){
if((((0) <= cljs.core.second.call(null,args_54216__$1))) && ((cljs.core.second.call(null,args_54216__$1) <= (1)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("pixi/set-anchor: must be in [0, 1]"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(0),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)),(1))))].join('')));
}

var G__54214_54217 = (((cljs.core.first.call(null,args_54216__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_54216__$1).fqn:null);
switch (G__54214_54217) {
case "x":
el.anchor.x = cljs.core.second.call(null,args_54216__$1);

break;
case "y":
el.anchor.y = cljs.core.second.call(null,args_54216__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_54216__$1))].join('')));

}

var G__54219 = cljs.core.drop.call(null,(2),args_54216__$1);
args_54216__$1 = G__54219;
continue;
} else {
}
break;
}

return el;
};
var G__54215 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__54220__i = 0, G__54220__a = new Array(arguments.length -  1);
while (G__54220__i < G__54220__a.length) {G__54220__a[G__54220__i] = arguments[G__54220__i + 1]; ++G__54220__i;}
  args = new cljs.core.IndexedSeq(G__54220__a,0);
} 
return G__54215__delegate.call(this,el,args);};
G__54215.cljs$lang$maxFixedArity = 1;
G__54215.cljs$lang$applyTo = (function (arglist__54221){
var el = cljs.core.first(arglist__54221);
var args = cljs.core.rest(arglist__54221);
return G__54215__delegate(el,args);
});
G__54215.cljs$core$IFn$_invoke$arity$variadic = G__54215__delegate;
return G__54215;
})()
);
soccer.pixi.mk_sprite = (function soccer$pixi$mk_sprite(var_args){
var args__5645__auto__ = [];
var len__5638__auto___54227 = arguments.length;
var i__5639__auto___54228 = (0);
while(true){
if((i__5639__auto___54228 < len__5638__auto___54227)){
args__5645__auto__.push((arguments[i__5639__auto___54228]));

var G__54229 = (i__5639__auto___54228 + (1));
i__5639__auto___54228 = G__54229;
continue;
} else {
}
break;
}

var argseq__5646__auto__ = ((((1) < args__5645__auto__.length))?(new cljs.core.IndexedSeq(args__5645__auto__.slice((1)),(0))):null);
return soccer.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5646__auto__);
});

soccer.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic = (function (tex,args){
var sprite = (new soccer.pixi.pixi.Sprite(tex));
var ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"layer","layer",-1601820589),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null], null), null);
var args_54230__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_54230__$1)){
var op_54231 = cljs.core.first.call(null,args_54230__$1);
var vec__54225_54232 = cljs.core.split_with.call(null,((function (args_54230__$1,op_54231,sprite,ops){
return (function (p1__54222_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,ops,p1__54222_SHARP_));
});})(args_54230__$1,op_54231,sprite,ops))
,cljs.core.rest.call(null,args_54230__$1));
var params_54233 = cljs.core.nth.call(null,vec__54225_54232,(0),null);
var next_54234 = cljs.core.nth.call(null,vec__54225_54232,(1),null);
var G__54226_54235 = (((op_54231 instanceof cljs.core.Keyword))?op_54231.fqn:null);
switch (G__54226_54235) {
case "pos":
cljs.core.apply.call(null,soccer.pixi.set_pos,sprite,params_54233);

break;
case "size":
cljs.core.apply.call(null,soccer.pixi.set_size,sprite,params_54233);

break;
case "scale":
cljs.core.apply.call(null,soccer.pixi.set_scale,sprite,params_54233);

break;
case "anchor":
cljs.core.apply.call(null,soccer.pixi.set_anchor,sprite,params_54233);

break;
case "layer":
sprite.displayGroup = cljs.core.first.call(null,params_54233);

break;
case "list":
soccer.pixi.attach_el_BANG_.call(null,sprite,cljs.core.first.call(null,params_54233));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_54231)].join('')));

}

var G__54237 = next_54234;
args_54230__$1 = G__54237;
continue;
} else {
}
break;
}

return sprite;
});

soccer.pixi.mk_sprite.cljs$lang$maxFixedArity = (1);

soccer.pixi.mk_sprite.cljs$lang$applyTo = (function (seq54223){
var G__54224 = cljs.core.first.call(null,seq54223);
var seq54223__$1 = cljs.core.next.call(null,seq54223);
return soccer.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic(G__54224,seq54223__$1);
});
if(typeof soccer.pixi.update_sprite_BANG_ !== 'undefined'){
} else {
soccer.pixi.update_sprite_BANG_ = (function (){var method_table__5493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","update-sprite!"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5497__auto__,method_table__5493__auto__,prefer_table__5494__auto__,method_cache__5495__auto__,cached_hierarchy__5496__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__54238__delegate = function (sprite,args){
return cljs.core.assoc.call(null,sprite,new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.apply.call(null,soccer.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(sprite),args));
};
var G__54238 = function (sprite,var_args){
var args = null;
if (arguments.length > 1) {
var G__54239__i = 0, G__54239__a = new Array(arguments.length -  1);
while (G__54239__i < G__54239__a.length) {G__54239__a[G__54239__i] = arguments[G__54239__i + 1]; ++G__54239__i;}
  args = new cljs.core.IndexedSeq(G__54239__a,0);
} 
return G__54238__delegate.call(this,sprite,args);};
G__54238.cljs$lang$maxFixedArity = 1;
G__54238.cljs$lang$applyTo = (function (arglist__54240){
var sprite = cljs.core.first(arglist__54240);
var args = cljs.core.rest(arglist__54240);
return G__54238__delegate(sprite,args);
});
G__54238.cljs$core$IFn$_invoke$arity$variadic = G__54238__delegate;
return G__54238;
})()
);
cljs.core._add_method.call(null,soccer.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__54244__delegate = function (sprite,args){
var ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"layer","layer",-1601820589),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null], null), null);
var args_54245__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_54245__$1)){
var op_54246 = cljs.core.first.call(null,args_54245__$1);
var vec__54242_54247 = cljs.core.split_with.call(null,((function (args_54245__$1,op_54246,ops){
return (function (p1__54241_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,ops,p1__54241_SHARP_));
});})(args_54245__$1,op_54246,ops))
,cljs.core.rest.call(null,args_54245__$1));
var params_54248 = cljs.core.nth.call(null,vec__54242_54247,(0),null);
var next_54249 = cljs.core.nth.call(null,vec__54242_54247,(1),null);
var G__54243_54250 = (((op_54246 instanceof cljs.core.Keyword))?op_54246.fqn:null);
switch (G__54243_54250) {
case "pos":
cljs.core.apply.call(null,soccer.pixi.set_pos,sprite,params_54248);

break;
case "size":
cljs.core.apply.call(null,soccer.pixi.set_size,sprite,params_54248);

break;
case "scale":
cljs.core.apply.call(null,soccer.pixi.set_scale,sprite,params_54248);

break;
case "anchor":
cljs.core.apply.call(null,soccer.pixi.set_anchor,sprite,params_54248);

break;
case "layer":
sprite.displayGroup = cljs.core.first.call(null,params_54248);

break;
case "list":
soccer.pixi.attach_el_BANG_.call(null,sprite,cljs.core.first.call(null,params_54248));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_54246)].join('')));

}

var G__54252 = next_54249;
args_54245__$1 = G__54252;
continue;
} else {
}
break;
}

return sprite;
};
var G__54244 = function (sprite,var_args){
var args = null;
if (arguments.length > 1) {
var G__54253__i = 0, G__54253__a = new Array(arguments.length -  1);
while (G__54253__i < G__54253__a.length) {G__54253__a[G__54253__i] = arguments[G__54253__i + 1]; ++G__54253__i;}
  args = new cljs.core.IndexedSeq(G__54253__a,0);
} 
return G__54244__delegate.call(this,sprite,args);};
G__54244.cljs$lang$maxFixedArity = 1;
G__54244.cljs$lang$applyTo = (function (arglist__54254){
var sprite = cljs.core.first(arglist__54254);
var args = cljs.core.rest(arglist__54254);
return G__54244__delegate(sprite,args);
});
G__54244.cljs$core$IFn$_invoke$arity$variadic = G__54244__delegate;
return G__54244;
})()
);
soccer.pixi.update_pos_BANG_ = (function soccer$pixi$update_pos_BANG_(p__54255){
var map__54258 = p__54255;
var map__54258__$1 = ((((!((map__54258 == null)))?((((map__54258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54258):map__54258);
var sprite = map__54258__$1;
var x = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__54258__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return soccer.pixi.set_pos.call(null,sprite,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});

//# sourceMappingURL=pixi.js.map