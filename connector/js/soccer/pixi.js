// Compiled by ClojureScript 1.9.89 {}
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
var args8941 = [];
var len__7322__auto___8944 = arguments.length;
var i__7323__auto___8945 = (0);
while(true){
if((i__7323__auto___8945 < len__7322__auto___8944)){
args8941.push((arguments[i__7323__auto___8945]));

var G__8946 = (i__7323__auto___8945 + (1));
i__7323__auto___8945 = G__8946;
continue;
} else {
}
break;
}

var G__8943 = args8941.length;
switch (G__8943) {
case 1:
return soccer.pixi.mk_layer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return soccer.pixi.mk_layer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8941.length)].join('')));

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
soccer.pixi.get_pos = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","get-pos"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.get_pos,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__8948__delegate = function (el,args){
return cljs.core.apply.call(null,soccer.pixi.get_pos,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(el),args);
};
var G__8948 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8949__i = 0, G__8949__a = new Array(arguments.length -  1);
while (G__8949__i < G__8949__a.length) {G__8949__a[G__8949__i] = arguments[G__8949__i + 1]; ++G__8949__i;}
  args = new cljs.core.IndexedSeq(G__8949__a,0);
} 
return G__8948__delegate.call(this,el,args);};
G__8948.cljs$lang$maxFixedArity = 1;
G__8948.cljs$lang$applyTo = (function (arglist__8950){
var el = cljs.core.first(arglist__8950);
var args = cljs.core.rest(arglist__8950);
return G__8948__delegate(el,args);
});
G__8948.cljs$core$IFn$_invoke$arity$variadic = G__8948__delegate;
return G__8948;
})()
);
cljs.core._add_method.call(null,soccer.pixi.get_pos,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() {
var G__8951 = null;
var G__8951__1 = (function (el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el.position.x,el.position.y], null);
});
var G__8951__2 = (function() { 
var G__8952__delegate = function (el,args){
var n_args = cljs.core.count.call(null,args);
if(cljs.core.even_QMARK_.call(null,n_args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("pixi/get-pos: need even number of args"),cljs.core.str("\n"),cljs.core.str("(even? n-args)")].join('')));
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
var G__8952 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8953__i = 0, G__8953__a = new Array(arguments.length -  1);
while (G__8953__i < G__8953__a.length) {G__8953__a[G__8953__i] = arguments[G__8953__i + 1]; ++G__8953__i;}
  args = new cljs.core.IndexedSeq(G__8953__a,0);
} 
return G__8952__delegate.call(this,el,args);};
G__8952.cljs$lang$maxFixedArity = 1;
G__8952.cljs$lang$applyTo = (function (arglist__8954){
var el = cljs.core.first(arglist__8954);
var args = cljs.core.rest(arglist__8954);
return G__8952__delegate(el,args);
});
G__8952.cljs$core$IFn$_invoke$arity$variadic = G__8952__delegate;
return G__8952;
})()
;
G__8951 = function(el,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return G__8951__1.call(this,el);
default:
var G__8955 = null;
if (arguments.length > 1) {
var G__8956__i = 0, G__8956__a = new Array(arguments.length -  1);
while (G__8956__i < G__8956__a.length) {G__8956__a[G__8956__i] = arguments[G__8956__i + 1]; ++G__8956__i;}
G__8955 = new cljs.core.IndexedSeq(G__8956__a,0);
}
return G__8951__2.cljs$core$IFn$_invoke$arity$variadic(el, G__8955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8951.cljs$lang$maxFixedArity = 1;
G__8951.cljs$lang$applyTo = G__8951__2.cljs$lang$applyTo;
G__8951.cljs$core$IFn$_invoke$arity$1 = G__8951__1;
G__8951.cljs$core$IFn$_invoke$arity$variadic = G__8951__2.cljs$core$IFn$_invoke$arity$variadic;
return G__8951;
})()
);
if(typeof soccer.pixi.set_pos !== 'undefined'){
} else {
soccer.pixi.set_pos = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-pos"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_pos,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__8958__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__8957_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_pos,p1__8957_SHARP_,args);
}));
};
var G__8958 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8959__i = 0, G__8959__a = new Array(arguments.length -  1);
while (G__8959__i < G__8959__a.length) {G__8959__a[G__8959__i] = arguments[G__8959__i + 1]; ++G__8959__i;}
  args = new cljs.core.IndexedSeq(G__8959__a,0);
} 
return G__8958__delegate.call(this,el,args);};
G__8958.cljs$lang$maxFixedArity = 1;
G__8958.cljs$lang$applyTo = (function (arglist__8960){
var el = cljs.core.first(arglist__8960);
var args = cljs.core.rest(arglist__8960);
return G__8958__delegate(el,args);
});
G__8958.cljs$core$IFn$_invoke$arity$variadic = G__8958__delegate;
return G__8958;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_pos,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__8962__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_8963__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_8963__$1)){
var G__8961_8964 = (((cljs.core.first.call(null,args_8963__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_8963__$1).fqn:null);
switch (G__8961_8964) {
case "x":
el.x = cljs.core.second.call(null,args_8963__$1);

break;
case "y":
el.y = cljs.core.second.call(null,args_8963__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_8963__$1))].join('')));

}

var G__8966 = cljs.core.drop.call(null,(2),args_8963__$1);
args_8963__$1 = G__8966;
continue;
} else {
}
break;
}

return el;
};
var G__8962 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8967__i = 0, G__8967__a = new Array(arguments.length -  1);
while (G__8967__i < G__8967__a.length) {G__8967__a[G__8967__i] = arguments[G__8967__i + 1]; ++G__8967__i;}
  args = new cljs.core.IndexedSeq(G__8967__a,0);
} 
return G__8962__delegate.call(this,el,args);};
G__8962.cljs$lang$maxFixedArity = 1;
G__8962.cljs$lang$applyTo = (function (arglist__8968){
var el = cljs.core.first(arglist__8968);
var args = cljs.core.rest(arglist__8968);
return G__8962__delegate(el,args);
});
G__8962.cljs$core$IFn$_invoke$arity$variadic = G__8962__delegate;
return G__8962;
})()
);
if(typeof soccer.pixi.move !== 'undefined'){
} else {
soccer.pixi.move = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","move"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.move,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__8970__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__8969_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.move,p1__8969_SHARP_,args);
}));
};
var G__8970 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8971__i = 0, G__8971__a = new Array(arguments.length -  1);
while (G__8971__i < G__8971__a.length) {G__8971__a[G__8971__i] = arguments[G__8971__i + 1]; ++G__8971__i;}
  args = new cljs.core.IndexedSeq(G__8971__a,0);
} 
return G__8970__delegate.call(this,el,args);};
G__8970.cljs$lang$maxFixedArity = 1;
G__8970.cljs$lang$applyTo = (function (arglist__8972){
var el = cljs.core.first(arglist__8972);
var args = cljs.core.rest(arglist__8972);
return G__8970__delegate(el,args);
});
G__8970.cljs$core$IFn$_invoke$arity$variadic = G__8970__delegate;
return G__8970;
})()
);
cljs.core._add_method.call(null,soccer.pixi.move,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__8974__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_8975__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_8975__$1)){
var G__8973_8976 = (((cljs.core.first.call(null,args_8975__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_8975__$1).fqn:null);
switch (G__8973_8976) {
case "x":
el.x = (el.x + cljs.core.second.call(null,args_8975__$1));

break;
case "y":
el.y = (el.y + cljs.core.second.call(null,args_8975__$1));

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_8975__$1))].join('')));

}

var G__8978 = cljs.core.drop.call(null,(2),args_8975__$1);
args_8975__$1 = G__8978;
continue;
} else {
}
break;
}

return el;
};
var G__8974 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8979__i = 0, G__8979__a = new Array(arguments.length -  1);
while (G__8979__i < G__8979__a.length) {G__8979__a[G__8979__i] = arguments[G__8979__i + 1]; ++G__8979__i;}
  args = new cljs.core.IndexedSeq(G__8979__a,0);
} 
return G__8974__delegate.call(this,el,args);};
G__8974.cljs$lang$maxFixedArity = 1;
G__8974.cljs$lang$applyTo = (function (arglist__8980){
var el = cljs.core.first(arglist__8980);
var args = cljs.core.rest(arglist__8980);
return G__8974__delegate(el,args);
});
G__8974.cljs$core$IFn$_invoke$arity$variadic = G__8974__delegate;
return G__8974;
})()
);
if(typeof soccer.pixi.set_size !== 'undefined'){
} else {
soccer.pixi.set_size = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-size"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_size,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__8982__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__8981_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_size,p1__8981_SHARP_,args);
}));
};
var G__8982 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8983__i = 0, G__8983__a = new Array(arguments.length -  1);
while (G__8983__i < G__8983__a.length) {G__8983__a[G__8983__i] = arguments[G__8983__i + 1]; ++G__8983__i;}
  args = new cljs.core.IndexedSeq(G__8983__a,0);
} 
return G__8982__delegate.call(this,el,args);};
G__8982.cljs$lang$maxFixedArity = 1;
G__8982.cljs$lang$applyTo = (function (arglist__8984){
var el = cljs.core.first(arglist__8984);
var args = cljs.core.rest(arglist__8984);
return G__8982__delegate(el,args);
});
G__8982.cljs$core$IFn$_invoke$arity$variadic = G__8982__delegate;
return G__8982;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_size,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__8986__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_8987__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_8987__$1)){
var G__8985_8988 = (((cljs.core.first.call(null,args_8987__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_8987__$1).fqn:null);
switch (G__8985_8988) {
case "w":
el.width = cljs.core.second.call(null,args_8987__$1);

break;
case "h":
el.height = cljs.core.second.call(null,args_8987__$1);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_8987__$1))].join('')));

}

var G__8990 = cljs.core.drop.call(null,(2),args_8987__$1);
args_8987__$1 = G__8990;
continue;
} else {
}
break;
}

return el;
};
var G__8986 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8991__i = 0, G__8991__a = new Array(arguments.length -  1);
while (G__8991__i < G__8991__a.length) {G__8991__a[G__8991__i] = arguments[G__8991__i + 1]; ++G__8991__i;}
  args = new cljs.core.IndexedSeq(G__8991__a,0);
} 
return G__8986__delegate.call(this,el,args);};
G__8986.cljs$lang$maxFixedArity = 1;
G__8986.cljs$lang$applyTo = (function (arglist__8992){
var el = cljs.core.first(arglist__8992);
var args = cljs.core.rest(arglist__8992);
return G__8986__delegate(el,args);
});
G__8986.cljs$core$IFn$_invoke$arity$variadic = G__8986__delegate;
return G__8986;
})()
);
if(typeof soccer.pixi.set_scale !== 'undefined'){
} else {
soccer.pixi.set_scale = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-scale"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_scale,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__8994__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__8993_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_scale,p1__8993_SHARP_,args);
}));
};
var G__8994 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__8995__i = 0, G__8995__a = new Array(arguments.length -  1);
while (G__8995__i < G__8995__a.length) {G__8995__a[G__8995__i] = arguments[G__8995__i + 1]; ++G__8995__i;}
  args = new cljs.core.IndexedSeq(G__8995__a,0);
} 
return G__8994__delegate.call(this,el,args);};
G__8994.cljs$lang$maxFixedArity = 1;
G__8994.cljs$lang$applyTo = (function (arglist__8996){
var el = cljs.core.first(arglist__8996);
var args = cljs.core.rest(arglist__8996);
return G__8994__delegate(el,args);
});
G__8994.cljs$core$IFn$_invoke$arity$variadic = G__8994__delegate;
return G__8994;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_scale,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__8998__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_8999__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_8999__$1)){
var G__8997_9000 = (((cljs.core.first.call(null,args_8999__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_8999__$1).fqn:null);
switch (G__8997_9000) {
case "x":
el.scale.x = cljs.core.second.call(null,args_8999__$1);

break;
case "y":
el.scale.y = cljs.core.second.call(null,args_8999__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_8999__$1))].join('')));

}

var G__9002 = cljs.core.drop.call(null,(2),args_8999__$1);
args_8999__$1 = G__9002;
continue;
} else {
}
break;
}

return el;
};
var G__8998 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__9003__i = 0, G__9003__a = new Array(arguments.length -  1);
while (G__9003__i < G__9003__a.length) {G__9003__a[G__9003__i] = arguments[G__9003__i + 1]; ++G__9003__i;}
  args = new cljs.core.IndexedSeq(G__9003__a,0);
} 
return G__8998__delegate.call(this,el,args);};
G__8998.cljs$lang$maxFixedArity = 1;
G__8998.cljs$lang$applyTo = (function (arglist__9004){
var el = cljs.core.first(arglist__9004);
var args = cljs.core.rest(arglist__9004);
return G__8998__delegate(el,args);
});
G__8998.cljs$core$IFn$_invoke$arity$variadic = G__8998__delegate;
return G__8998;
})()
);
if(typeof soccer.pixi.set_anchor !== 'undefined'){
} else {
soccer.pixi.set_anchor = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","set-anchor"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.set_anchor,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__9006__delegate = function (el,args){
return cljs.core.update_in.call(null,el,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprite","sprite",172516848)], null),(function (p1__9005_SHARP_){
return cljs.core.apply.call(null,soccer.pixi.set_anchor,p1__9005_SHARP_,args);
}));
};
var G__9006 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__9007__i = 0, G__9007__a = new Array(arguments.length -  1);
while (G__9007__i < G__9007__a.length) {G__9007__a[G__9007__i] = arguments[G__9007__i + 1]; ++G__9007__i;}
  args = new cljs.core.IndexedSeq(G__9007__a,0);
} 
return G__9006__delegate.call(this,el,args);};
G__9006.cljs$lang$maxFixedArity = 1;
G__9006.cljs$lang$applyTo = (function (arglist__9008){
var el = cljs.core.first(arglist__9008);
var args = cljs.core.rest(arglist__9008);
return G__9006__delegate(el,args);
});
G__9006.cljs$core$IFn$_invoke$arity$variadic = G__9006__delegate;
return G__9006;
})()
);
cljs.core._add_method.call(null,soccer.pixi.set_anchor,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__9010__delegate = function (el,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new Error("Assert failed: (even? (count args))"));
}

var args_9011__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_9011__$1)){
if((((0) <= cljs.core.second.call(null,args_9011__$1))) && ((cljs.core.second.call(null,args_9011__$1) <= (1)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("pixi/set-anchor: must be in [0, 1]"),cljs.core.str("\n"),cljs.core.str("(<= 0 (second args) 1)")].join('')));
}

var G__9009_9012 = (((cljs.core.first.call(null,args_9011__$1) instanceof cljs.core.Keyword))?cljs.core.first.call(null,args_9011__$1).fqn:null);
switch (G__9009_9012) {
case "x":
el.anchor.x = cljs.core.second.call(null,args_9011__$1);

break;
case "y":
el.anchor.y = cljs.core.second.call(null,args_9011__$1);

break;
case "default":
cljs.core.List.EMPTY;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first.call(null,args_9011__$1))].join('')));

}

var G__9014 = cljs.core.drop.call(null,(2),args_9011__$1);
args_9011__$1 = G__9014;
continue;
} else {
}
break;
}

return el;
};
var G__9010 = function (el,var_args){
var args = null;
if (arguments.length > 1) {
var G__9015__i = 0, G__9015__a = new Array(arguments.length -  1);
while (G__9015__i < G__9015__a.length) {G__9015__a[G__9015__i] = arguments[G__9015__i + 1]; ++G__9015__i;}
  args = new cljs.core.IndexedSeq(G__9015__a,0);
} 
return G__9010__delegate.call(this,el,args);};
G__9010.cljs$lang$maxFixedArity = 1;
G__9010.cljs$lang$applyTo = (function (arglist__9016){
var el = cljs.core.first(arglist__9016);
var args = cljs.core.rest(arglist__9016);
return G__9010__delegate(el,args);
});
G__9010.cljs$core$IFn$_invoke$arity$variadic = G__9010__delegate;
return G__9010;
})()
);
soccer.pixi.mk_sprite = (function soccer$pixi$mk_sprite(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9024 = arguments.length;
var i__7323__auto___9025 = (0);
while(true){
if((i__7323__auto___9025 < len__7322__auto___9024)){
args__7329__auto__.push((arguments[i__7323__auto___9025]));

var G__9026 = (i__7323__auto___9025 + (1));
i__7323__auto___9025 = G__9026;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return soccer.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

soccer.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic = (function (tex,args){
var sprite = (new soccer.pixi.pixi.Sprite(tex));
var ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"layer","layer",-1601820589),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null], null), null);
var args_9027__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_9027__$1)){
var op_9028 = cljs.core.first.call(null,args_9027__$1);
var vec__9020_9029 = cljs.core.split_with.call(null,((function (args_9027__$1,op_9028,sprite,ops){
return (function (p1__9017_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,ops,p1__9017_SHARP_));
});})(args_9027__$1,op_9028,sprite,ops))
,cljs.core.rest.call(null,args_9027__$1));
var params_9030 = cljs.core.nth.call(null,vec__9020_9029,(0),null);
var next_9031 = cljs.core.nth.call(null,vec__9020_9029,(1),null);
var G__9023_9032 = (((op_9028 instanceof cljs.core.Keyword))?op_9028.fqn:null);
switch (G__9023_9032) {
case "pos":
cljs.core.apply.call(null,soccer.pixi.set_pos,sprite,params_9030);

break;
case "size":
cljs.core.apply.call(null,soccer.pixi.set_size,sprite,params_9030);

break;
case "scale":
cljs.core.apply.call(null,soccer.pixi.set_scale,sprite,params_9030);

break;
case "anchor":
cljs.core.apply.call(null,soccer.pixi.set_anchor,sprite,params_9030);

break;
case "layer":
sprite.displayGroup = cljs.core.first.call(null,params_9030);

break;
case "list":
soccer.pixi.attach_el_BANG_.call(null,sprite,cljs.core.first.call(null,params_9030));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_9028)].join('')));

}

var G__9034 = next_9031;
args_9027__$1 = G__9034;
continue;
} else {
}
break;
}

return sprite;
});

soccer.pixi.mk_sprite.cljs$lang$maxFixedArity = (1);

soccer.pixi.mk_sprite.cljs$lang$applyTo = (function (seq9018){
var G__9019 = cljs.core.first.call(null,seq9018);
var seq9018__$1 = cljs.core.next.call(null,seq9018);
return soccer.pixi.mk_sprite.cljs$core$IFn$_invoke$arity$variadic(G__9019,seq9018__$1);
});

if(typeof soccer.pixi.update_sprite_BANG_ !== 'undefined'){
} else {
soccer.pixi.update_sprite_BANG_ = (function (){var method_table__7172__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7176__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"soccer.pixi","update-sprite!"),soccer.pixi.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7176__auto__,method_table__7172__auto__,prefer_table__7173__auto__,method_cache__7174__auto__,cached_hierarchy__7175__auto__));
})();
}
cljs.core._add_method.call(null,soccer.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),(function() { 
var G__9035__delegate = function (sprite,args){
return cljs.core.assoc.call(null,sprite,new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.apply.call(null,soccer.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(sprite),args));
};
var G__9035 = function (sprite,var_args){
var args = null;
if (arguments.length > 1) {
var G__9036__i = 0, G__9036__a = new Array(arguments.length -  1);
while (G__9036__i < G__9036__a.length) {G__9036__a[G__9036__i] = arguments[G__9036__i + 1]; ++G__9036__i;}
  args = new cljs.core.IndexedSeq(G__9036__a,0);
} 
return G__9035__delegate.call(this,sprite,args);};
G__9035.cljs$lang$maxFixedArity = 1;
G__9035.cljs$lang$applyTo = (function (arglist__9037){
var sprite = cljs.core.first(arglist__9037);
var args = cljs.core.rest(arglist__9037);
return G__9035__delegate(sprite,args);
});
G__9035.cljs$core$IFn$_invoke$arity$variadic = G__9035__delegate;
return G__9035;
})()
);
cljs.core._add_method.call(null,soccer.pixi.update_sprite_BANG_,new cljs.core.Keyword(null,"raw","raw",1604651272),(function() { 
var G__9043__delegate = function (sprite,args){
var ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"layer","layer",-1601820589),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null], null), null);
var args_9044__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_9044__$1)){
var op_9045 = cljs.core.first.call(null,args_9044__$1);
var vec__9039_9046 = cljs.core.split_with.call(null,((function (args_9044__$1,op_9045,ops){
return (function (p1__9038_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,ops,p1__9038_SHARP_));
});})(args_9044__$1,op_9045,ops))
,cljs.core.rest.call(null,args_9044__$1));
var params_9047 = cljs.core.nth.call(null,vec__9039_9046,(0),null);
var next_9048 = cljs.core.nth.call(null,vec__9039_9046,(1),null);
var G__9042_9049 = (((op_9045 instanceof cljs.core.Keyword))?op_9045.fqn:null);
switch (G__9042_9049) {
case "pos":
cljs.core.apply.call(null,soccer.pixi.set_pos,sprite,params_9047);

break;
case "size":
cljs.core.apply.call(null,soccer.pixi.set_size,sprite,params_9047);

break;
case "scale":
cljs.core.apply.call(null,soccer.pixi.set_scale,sprite,params_9047);

break;
case "anchor":
cljs.core.apply.call(null,soccer.pixi.set_anchor,sprite,params_9047);

break;
case "layer":
sprite.displayGroup = cljs.core.first.call(null,params_9047);

break;
case "list":
soccer.pixi.attach_el_BANG_.call(null,sprite,cljs.core.first.call(null,params_9047));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_9045)].join('')));

}

var G__9051 = next_9048;
args_9044__$1 = G__9051;
continue;
} else {
}
break;
}

return sprite;
};
var G__9043 = function (sprite,var_args){
var args = null;
if (arguments.length > 1) {
var G__9052__i = 0, G__9052__a = new Array(arguments.length -  1);
while (G__9052__i < G__9052__a.length) {G__9052__a[G__9052__i] = arguments[G__9052__i + 1]; ++G__9052__i;}
  args = new cljs.core.IndexedSeq(G__9052__a,0);
} 
return G__9043__delegate.call(this,sprite,args);};
G__9043.cljs$lang$maxFixedArity = 1;
G__9043.cljs$lang$applyTo = (function (arglist__9053){
var sprite = cljs.core.first(arglist__9053);
var args = cljs.core.rest(arglist__9053);
return G__9043__delegate(sprite,args);
});
G__9043.cljs$core$IFn$_invoke$arity$variadic = G__9043__delegate;
return G__9043;
})()
);
soccer.pixi.update_pos_BANG_ = (function soccer$pixi$update_pos_BANG_(p__9054){
var map__9057 = p__9054;
var map__9057__$1 = ((((!((map__9057 == null)))?((((map__9057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9057):map__9057);
var sprite = map__9057__$1;
var x = cljs.core.get.call(null,map__9057__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9057__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return soccer.pixi.set_pos.call(null,sprite,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});

//# sourceMappingURL=pixi.js.map