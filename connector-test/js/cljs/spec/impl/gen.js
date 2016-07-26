// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7518 = arguments.length;
var i__7323__auto___7519 = (0);
while(true){
if((i__7323__auto___7519 < len__7322__auto___7518)){
args__7329__auto__.push((arguments[i__7323__auto___7519]));

var G__7520 = (i__7323__auto___7519 + (1));
i__7323__auto___7519 = G__7520;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq7517){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7517));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7522 = arguments.length;
var i__7323__auto___7523 = (0);
while(true){
if((i__7323__auto___7523 < len__7322__auto___7522)){
args__7329__auto__.push((arguments[i__7323__auto___7523]));

var G__7524 = (i__7323__auto___7523 + (1));
i__7323__auto___7523 = G__7524;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq7521){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7521));
});

var g_QMARK__7525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_7526 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__7525){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__7525))
,null));
var mkg_7527 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__7525,g_7526){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__7525,g_7526))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__7525,g_7526,mkg_7527){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__7525).call(null,x);
});})(g_QMARK__7525,g_7526,mkg_7527))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__7525,g_7526,mkg_7527){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_7527).call(null,gfn);
});})(g_QMARK__7525,g_7526,mkg_7527))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__7525,g_7526,mkg_7527){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_7526).call(null,generator);
});})(g_QMARK__7525,g_7526,mkg_7527))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7489__auto___7545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__7489__auto___7545){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7546 = arguments.length;
var i__7323__auto___7547 = (0);
while(true){
if((i__7323__auto___7547 < len__7322__auto___7546)){
args__7329__auto__.push((arguments[i__7323__auto___7547]));

var G__7548 = (i__7323__auto___7547 + (1));
i__7323__auto___7547 = G__7548;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7545))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7545),args);
});})(g__7489__auto___7545))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__7489__auto___7545){
return (function (seq7528){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7528));
});})(g__7489__auto___7545))
;


var g__7489__auto___7549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__7489__auto___7549){
return (function cljs$spec$impl$gen$list(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7550 = arguments.length;
var i__7323__auto___7551 = (0);
while(true){
if((i__7323__auto___7551 < len__7322__auto___7550)){
args__7329__auto__.push((arguments[i__7323__auto___7551]));

var G__7552 = (i__7323__auto___7551 + (1));
i__7323__auto___7551 = G__7552;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7549))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7549),args);
});})(g__7489__auto___7549))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__7489__auto___7549){
return (function (seq7529){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7529));
});})(g__7489__auto___7549))
;


var g__7489__auto___7553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__7489__auto___7553){
return (function cljs$spec$impl$gen$map(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7554 = arguments.length;
var i__7323__auto___7555 = (0);
while(true){
if((i__7323__auto___7555 < len__7322__auto___7554)){
args__7329__auto__.push((arguments[i__7323__auto___7555]));

var G__7556 = (i__7323__auto___7555 + (1));
i__7323__auto___7555 = G__7556;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7553))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7553),args);
});})(g__7489__auto___7553))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__7489__auto___7553){
return (function (seq7530){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7530));
});})(g__7489__auto___7553))
;


var g__7489__auto___7557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__7489__auto___7557){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7558 = arguments.length;
var i__7323__auto___7559 = (0);
while(true){
if((i__7323__auto___7559 < len__7322__auto___7558)){
args__7329__auto__.push((arguments[i__7323__auto___7559]));

var G__7560 = (i__7323__auto___7559 + (1));
i__7323__auto___7559 = G__7560;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7557))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7557),args);
});})(g__7489__auto___7557))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__7489__auto___7557){
return (function (seq7531){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7531));
});})(g__7489__auto___7557))
;


var g__7489__auto___7561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__7489__auto___7561){
return (function cljs$spec$impl$gen$set(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7562 = arguments.length;
var i__7323__auto___7563 = (0);
while(true){
if((i__7323__auto___7563 < len__7322__auto___7562)){
args__7329__auto__.push((arguments[i__7323__auto___7563]));

var G__7564 = (i__7323__auto___7563 + (1));
i__7323__auto___7563 = G__7564;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7561))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7561),args);
});})(g__7489__auto___7561))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__7489__auto___7561){
return (function (seq7532){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7532));
});})(g__7489__auto___7561))
;


var g__7489__auto___7565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__7489__auto___7565){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7566 = arguments.length;
var i__7323__auto___7567 = (0);
while(true){
if((i__7323__auto___7567 < len__7322__auto___7566)){
args__7329__auto__.push((arguments[i__7323__auto___7567]));

var G__7568 = (i__7323__auto___7567 + (1));
i__7323__auto___7567 = G__7568;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7565))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7565),args);
});})(g__7489__auto___7565))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__7489__auto___7565){
return (function (seq7533){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7533));
});})(g__7489__auto___7565))
;


var g__7489__auto___7569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__7489__auto___7569){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7570 = arguments.length;
var i__7323__auto___7571 = (0);
while(true){
if((i__7323__auto___7571 < len__7322__auto___7570)){
args__7329__auto__.push((arguments[i__7323__auto___7571]));

var G__7572 = (i__7323__auto___7571 + (1));
i__7323__auto___7571 = G__7572;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7569))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7569),args);
});})(g__7489__auto___7569))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__7489__auto___7569){
return (function (seq7534){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7534));
});})(g__7489__auto___7569))
;


var g__7489__auto___7573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__7489__auto___7573){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7574 = arguments.length;
var i__7323__auto___7575 = (0);
while(true){
if((i__7323__auto___7575 < len__7322__auto___7574)){
args__7329__auto__.push((arguments[i__7323__auto___7575]));

var G__7576 = (i__7323__auto___7575 + (1));
i__7323__auto___7575 = G__7576;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7573))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7573),args);
});})(g__7489__auto___7573))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__7489__auto___7573){
return (function (seq7535){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7535));
});})(g__7489__auto___7573))
;


var g__7489__auto___7577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__7489__auto___7577){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7578 = arguments.length;
var i__7323__auto___7579 = (0);
while(true){
if((i__7323__auto___7579 < len__7322__auto___7578)){
args__7329__auto__.push((arguments[i__7323__auto___7579]));

var G__7580 = (i__7323__auto___7579 + (1));
i__7323__auto___7579 = G__7580;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7577))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7577),args);
});})(g__7489__auto___7577))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__7489__auto___7577){
return (function (seq7536){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7536));
});})(g__7489__auto___7577))
;


var g__7489__auto___7581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__7489__auto___7581){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7582 = arguments.length;
var i__7323__auto___7583 = (0);
while(true){
if((i__7323__auto___7583 < len__7322__auto___7582)){
args__7329__auto__.push((arguments[i__7323__auto___7583]));

var G__7584 = (i__7323__auto___7583 + (1));
i__7323__auto___7583 = G__7584;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7581))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7581),args);
});})(g__7489__auto___7581))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__7489__auto___7581){
return (function (seq7537){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7537));
});})(g__7489__auto___7581))
;


var g__7489__auto___7585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__7489__auto___7585){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7586 = arguments.length;
var i__7323__auto___7587 = (0);
while(true){
if((i__7323__auto___7587 < len__7322__auto___7586)){
args__7329__auto__.push((arguments[i__7323__auto___7587]));

var G__7588 = (i__7323__auto___7587 + (1));
i__7323__auto___7587 = G__7588;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7585))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7585),args);
});})(g__7489__auto___7585))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__7489__auto___7585){
return (function (seq7538){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7538));
});})(g__7489__auto___7585))
;


var g__7489__auto___7589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__7489__auto___7589){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7590 = arguments.length;
var i__7323__auto___7591 = (0);
while(true){
if((i__7323__auto___7591 < len__7322__auto___7590)){
args__7329__auto__.push((arguments[i__7323__auto___7591]));

var G__7592 = (i__7323__auto___7591 + (1));
i__7323__auto___7591 = G__7592;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7589))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7589),args);
});})(g__7489__auto___7589))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__7489__auto___7589){
return (function (seq7539){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7539));
});})(g__7489__auto___7589))
;


var g__7489__auto___7593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__7489__auto___7593){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7594 = arguments.length;
var i__7323__auto___7595 = (0);
while(true){
if((i__7323__auto___7595 < len__7322__auto___7594)){
args__7329__auto__.push((arguments[i__7323__auto___7595]));

var G__7596 = (i__7323__auto___7595 + (1));
i__7323__auto___7595 = G__7596;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7593))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7593),args);
});})(g__7489__auto___7593))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__7489__auto___7593){
return (function (seq7540){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7540));
});})(g__7489__auto___7593))
;


var g__7489__auto___7597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__7489__auto___7597){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7598 = arguments.length;
var i__7323__auto___7599 = (0);
while(true){
if((i__7323__auto___7599 < len__7322__auto___7598)){
args__7329__auto__.push((arguments[i__7323__auto___7599]));

var G__7600 = (i__7323__auto___7599 + (1));
i__7323__auto___7599 = G__7600;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7597))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7597),args);
});})(g__7489__auto___7597))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__7489__auto___7597){
return (function (seq7541){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7541));
});})(g__7489__auto___7597))
;


var g__7489__auto___7601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__7489__auto___7601){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7602 = arguments.length;
var i__7323__auto___7603 = (0);
while(true){
if((i__7323__auto___7603 < len__7322__auto___7602)){
args__7329__auto__.push((arguments[i__7323__auto___7603]));

var G__7604 = (i__7323__auto___7603 + (1));
i__7323__auto___7603 = G__7604;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7601))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7601),args);
});})(g__7489__auto___7601))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__7489__auto___7601){
return (function (seq7542){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7542));
});})(g__7489__auto___7601))
;


var g__7489__auto___7605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__7489__auto___7605){
return (function cljs$spec$impl$gen$return(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7606 = arguments.length;
var i__7323__auto___7607 = (0);
while(true){
if((i__7323__auto___7607 < len__7322__auto___7606)){
args__7329__auto__.push((arguments[i__7323__auto___7607]));

var G__7608 = (i__7323__auto___7607 + (1));
i__7323__auto___7607 = G__7608;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7605))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7605),args);
});})(g__7489__auto___7605))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__7489__auto___7605){
return (function (seq7543){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7543));
});})(g__7489__auto___7605))
;


var g__7489__auto___7609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__7489__auto___7609){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7610 = arguments.length;
var i__7323__auto___7611 = (0);
while(true){
if((i__7323__auto___7611 < len__7322__auto___7610)){
args__7329__auto__.push((arguments[i__7323__auto___7611]));

var G__7612 = (i__7323__auto___7611 + (1));
i__7323__auto___7611 = G__7612;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7489__auto___7609))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7489__auto___7609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7489__auto___7609),args);
});})(g__7489__auto___7609))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__7489__auto___7609){
return (function (seq7544){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7544));
});})(g__7489__auto___7609))
;

var g__7502__auto___7634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__7502__auto___7634){
return (function cljs$spec$impl$gen$any(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7635 = arguments.length;
var i__7323__auto___7636 = (0);
while(true){
if((i__7323__auto___7636 < len__7322__auto___7635)){
args__7329__auto__.push((arguments[i__7323__auto___7636]));

var G__7637 = (i__7323__auto___7636 + (1));
i__7323__auto___7636 = G__7637;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7634))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7634){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7634);
});})(g__7502__auto___7634))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__7502__auto___7634){
return (function (seq7613){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7613));
});})(g__7502__auto___7634))
;


var g__7502__auto___7638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__7502__auto___7638){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7639 = arguments.length;
var i__7323__auto___7640 = (0);
while(true){
if((i__7323__auto___7640 < len__7322__auto___7639)){
args__7329__auto__.push((arguments[i__7323__auto___7640]));

var G__7641 = (i__7323__auto___7640 + (1));
i__7323__auto___7640 = G__7641;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7638))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7638){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7638);
});})(g__7502__auto___7638))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__7502__auto___7638){
return (function (seq7614){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7614));
});})(g__7502__auto___7638))
;


var g__7502__auto___7642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__7502__auto___7642){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7643 = arguments.length;
var i__7323__auto___7644 = (0);
while(true){
if((i__7323__auto___7644 < len__7322__auto___7643)){
args__7329__auto__.push((arguments[i__7323__auto___7644]));

var G__7645 = (i__7323__auto___7644 + (1));
i__7323__auto___7644 = G__7645;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7642))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7642){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7642);
});})(g__7502__auto___7642))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__7502__auto___7642){
return (function (seq7615){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7615));
});})(g__7502__auto___7642))
;


var g__7502__auto___7646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__7502__auto___7646){
return (function cljs$spec$impl$gen$char(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7647 = arguments.length;
var i__7323__auto___7648 = (0);
while(true){
if((i__7323__auto___7648 < len__7322__auto___7647)){
args__7329__auto__.push((arguments[i__7323__auto___7648]));

var G__7649 = (i__7323__auto___7648 + (1));
i__7323__auto___7648 = G__7649;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7646))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7646){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7646);
});})(g__7502__auto___7646))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__7502__auto___7646){
return (function (seq7616){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7616));
});})(g__7502__auto___7646))
;


var g__7502__auto___7650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__7502__auto___7650){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7651 = arguments.length;
var i__7323__auto___7652 = (0);
while(true){
if((i__7323__auto___7652 < len__7322__auto___7651)){
args__7329__auto__.push((arguments[i__7323__auto___7652]));

var G__7653 = (i__7323__auto___7652 + (1));
i__7323__auto___7652 = G__7653;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7650))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7650){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7650);
});})(g__7502__auto___7650))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__7502__auto___7650){
return (function (seq7617){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7617));
});})(g__7502__auto___7650))
;


var g__7502__auto___7654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__7502__auto___7654){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7655 = arguments.length;
var i__7323__auto___7656 = (0);
while(true){
if((i__7323__auto___7656 < len__7322__auto___7655)){
args__7329__auto__.push((arguments[i__7323__auto___7656]));

var G__7657 = (i__7323__auto___7656 + (1));
i__7323__auto___7656 = G__7657;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7654))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7654){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7654);
});})(g__7502__auto___7654))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__7502__auto___7654){
return (function (seq7618){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7618));
});})(g__7502__auto___7654))
;


var g__7502__auto___7658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__7502__auto___7658){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7659 = arguments.length;
var i__7323__auto___7660 = (0);
while(true){
if((i__7323__auto___7660 < len__7322__auto___7659)){
args__7329__auto__.push((arguments[i__7323__auto___7660]));

var G__7661 = (i__7323__auto___7660 + (1));
i__7323__auto___7660 = G__7661;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7658))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7658){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7658);
});})(g__7502__auto___7658))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__7502__auto___7658){
return (function (seq7619){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7619));
});})(g__7502__auto___7658))
;


var g__7502__auto___7662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__7502__auto___7662){
return (function cljs$spec$impl$gen$double(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7663 = arguments.length;
var i__7323__auto___7664 = (0);
while(true){
if((i__7323__auto___7664 < len__7322__auto___7663)){
args__7329__auto__.push((arguments[i__7323__auto___7664]));

var G__7665 = (i__7323__auto___7664 + (1));
i__7323__auto___7664 = G__7665;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7662))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7662){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7662);
});})(g__7502__auto___7662))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__7502__auto___7662){
return (function (seq7620){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7620));
});})(g__7502__auto___7662))
;


var g__7502__auto___7666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__7502__auto___7666){
return (function cljs$spec$impl$gen$int(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7667 = arguments.length;
var i__7323__auto___7668 = (0);
while(true){
if((i__7323__auto___7668 < len__7322__auto___7667)){
args__7329__auto__.push((arguments[i__7323__auto___7668]));

var G__7669 = (i__7323__auto___7668 + (1));
i__7323__auto___7668 = G__7669;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7666))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7666){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7666);
});})(g__7502__auto___7666))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__7502__auto___7666){
return (function (seq7621){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7621));
});})(g__7502__auto___7666))
;


var g__7502__auto___7670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__7502__auto___7670){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7671 = arguments.length;
var i__7323__auto___7672 = (0);
while(true){
if((i__7323__auto___7672 < len__7322__auto___7671)){
args__7329__auto__.push((arguments[i__7323__auto___7672]));

var G__7673 = (i__7323__auto___7672 + (1));
i__7323__auto___7672 = G__7673;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7670))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7670){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7670);
});})(g__7502__auto___7670))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__7502__auto___7670){
return (function (seq7622){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7622));
});})(g__7502__auto___7670))
;


var g__7502__auto___7674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__7502__auto___7674){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7675 = arguments.length;
var i__7323__auto___7676 = (0);
while(true){
if((i__7323__auto___7676 < len__7322__auto___7675)){
args__7329__auto__.push((arguments[i__7323__auto___7676]));

var G__7677 = (i__7323__auto___7676 + (1));
i__7323__auto___7676 = G__7677;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7674))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7674){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7674);
});})(g__7502__auto___7674))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__7502__auto___7674){
return (function (seq7623){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7623));
});})(g__7502__auto___7674))
;


var g__7502__auto___7678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__7502__auto___7678){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7679 = arguments.length;
var i__7323__auto___7680 = (0);
while(true){
if((i__7323__auto___7680 < len__7322__auto___7679)){
args__7329__auto__.push((arguments[i__7323__auto___7680]));

var G__7681 = (i__7323__auto___7680 + (1));
i__7323__auto___7680 = G__7681;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7678))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7678){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7678);
});})(g__7502__auto___7678))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__7502__auto___7678){
return (function (seq7624){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7624));
});})(g__7502__auto___7678))
;


var g__7502__auto___7682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__7502__auto___7682){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7683 = arguments.length;
var i__7323__auto___7684 = (0);
while(true){
if((i__7323__auto___7684 < len__7322__auto___7683)){
args__7329__auto__.push((arguments[i__7323__auto___7684]));

var G__7685 = (i__7323__auto___7684 + (1));
i__7323__auto___7684 = G__7685;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7682))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7682){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7682);
});})(g__7502__auto___7682))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__7502__auto___7682){
return (function (seq7625){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7625));
});})(g__7502__auto___7682))
;


var g__7502__auto___7686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__7502__auto___7686){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7687 = arguments.length;
var i__7323__auto___7688 = (0);
while(true){
if((i__7323__auto___7688 < len__7322__auto___7687)){
args__7329__auto__.push((arguments[i__7323__auto___7688]));

var G__7689 = (i__7323__auto___7688 + (1));
i__7323__auto___7688 = G__7689;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7686))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7686){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7686);
});})(g__7502__auto___7686))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__7502__auto___7686){
return (function (seq7626){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7626));
});})(g__7502__auto___7686))
;


var g__7502__auto___7690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__7502__auto___7690){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7691 = arguments.length;
var i__7323__auto___7692 = (0);
while(true){
if((i__7323__auto___7692 < len__7322__auto___7691)){
args__7329__auto__.push((arguments[i__7323__auto___7692]));

var G__7693 = (i__7323__auto___7692 + (1));
i__7323__auto___7692 = G__7693;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7690))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7690){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7690);
});})(g__7502__auto___7690))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__7502__auto___7690){
return (function (seq7627){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7627));
});})(g__7502__auto___7690))
;


var g__7502__auto___7694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__7502__auto___7694){
return (function cljs$spec$impl$gen$string(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7695 = arguments.length;
var i__7323__auto___7696 = (0);
while(true){
if((i__7323__auto___7696 < len__7322__auto___7695)){
args__7329__auto__.push((arguments[i__7323__auto___7696]));

var G__7697 = (i__7323__auto___7696 + (1));
i__7323__auto___7696 = G__7697;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7694))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7694){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7694);
});})(g__7502__auto___7694))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__7502__auto___7694){
return (function (seq7628){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7628));
});})(g__7502__auto___7694))
;


var g__7502__auto___7698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__7502__auto___7698){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7699 = arguments.length;
var i__7323__auto___7700 = (0);
while(true){
if((i__7323__auto___7700 < len__7322__auto___7699)){
args__7329__auto__.push((arguments[i__7323__auto___7700]));

var G__7701 = (i__7323__auto___7700 + (1));
i__7323__auto___7700 = G__7701;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7698))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7698){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7698);
});})(g__7502__auto___7698))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__7502__auto___7698){
return (function (seq7629){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7629));
});})(g__7502__auto___7698))
;


var g__7502__auto___7702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__7502__auto___7702){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7703 = arguments.length;
var i__7323__auto___7704 = (0);
while(true){
if((i__7323__auto___7704 < len__7322__auto___7703)){
args__7329__auto__.push((arguments[i__7323__auto___7704]));

var G__7705 = (i__7323__auto___7704 + (1));
i__7323__auto___7704 = G__7705;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7702))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7702){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7702);
});})(g__7502__auto___7702))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__7502__auto___7702){
return (function (seq7630){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7630));
});})(g__7502__auto___7702))
;


var g__7502__auto___7706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__7502__auto___7706){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7707 = arguments.length;
var i__7323__auto___7708 = (0);
while(true){
if((i__7323__auto___7708 < len__7322__auto___7707)){
args__7329__auto__.push((arguments[i__7323__auto___7708]));

var G__7709 = (i__7323__auto___7708 + (1));
i__7323__auto___7708 = G__7709;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7706))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7706){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7706);
});})(g__7502__auto___7706))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__7502__auto___7706){
return (function (seq7631){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7631));
});})(g__7502__auto___7706))
;


var g__7502__auto___7710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__7502__auto___7710){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7711 = arguments.length;
var i__7323__auto___7712 = (0);
while(true){
if((i__7323__auto___7712 < len__7322__auto___7711)){
args__7329__auto__.push((arguments[i__7323__auto___7712]));

var G__7713 = (i__7323__auto___7712 + (1));
i__7323__auto___7712 = G__7713;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7710))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7710){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7710);
});})(g__7502__auto___7710))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__7502__auto___7710){
return (function (seq7632){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7632));
});})(g__7502__auto___7710))
;


var g__7502__auto___7714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__7502__auto___7714){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7715 = arguments.length;
var i__7323__auto___7716 = (0);
while(true){
if((i__7323__auto___7716 < len__7322__auto___7715)){
args__7329__auto__.push((arguments[i__7323__auto___7716]));

var G__7717 = (i__7323__auto___7716 + (1));
i__7323__auto___7716 = G__7717;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});})(g__7502__auto___7714))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7502__auto___7714){
return (function (args){
return cljs.core.deref.call(null,g__7502__auto___7714);
});})(g__7502__auto___7714))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__7502__auto___7714){
return (function (seq7633){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7633));
});})(g__7502__auto___7714))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7329__auto__ = [];
var len__7322__auto___7720 = arguments.length;
var i__7323__auto___7721 = (0);
while(true){
if((i__7323__auto___7721 < len__7322__auto___7720)){
args__7329__auto__.push((arguments[i__7323__auto___7721]));

var G__7722 = (i__7323__auto___7721 + (1));
i__7323__auto___7721 = G__7722;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((0) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7330__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__7718_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__7718_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq7719){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7719));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__7723_SHARP_){
return (new Date(p1__7723_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map