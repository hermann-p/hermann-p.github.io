// Compiled by ClojureScript 1.9.89 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__6247__auto__ = elem.textContent;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args12627 = [];
var len__7322__auto___12630 = arguments.length;
var i__7323__auto___12631 = (0);
while(true){
if((i__7323__auto___12631 < len__7322__auto___12630)){
args12627.push((arguments[i__7323__auto___12631]));

var G__12632 = (i__7323__auto___12631 + (1));
i__7323__auto___12631 = G__12632;
continue;
} else {
}
break;
}

var G__12629 = args12627.length;
switch (G__12629) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12627.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args12634 = [];
var len__7322__auto___12637 = arguments.length;
var i__7323__auto___12638 = (0);
while(true){
if((i__7323__auto___12638 < len__7322__auto___12637)){
args12634.push((arguments[i__7323__auto___12638]));

var G__12639 = (i__7323__auto___12638 + (1));
i__7323__auto___12638 = G__12639;
continue;
} else {
}
break;
}

var G__12636 = args12634.length;
switch (G__12636) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12634.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args12642 = [];
var len__7322__auto___12645 = arguments.length;
var i__7323__auto___12646 = (0);
while(true){
if((i__7323__auto___12646 < len__7322__auto___12645)){
args12642.push((arguments[i__7323__auto___12646]));

var G__12647 = (i__7323__auto___12646 + (1));
i__7323__auto___12646 = G__12647;
continue;
} else {
}
break;
}

var G__12644 = args12642.length;
switch (G__12644) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12642.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__12641_SHARP_){
return !((p1__12641_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___12661 = arguments.length;
var i__7323__auto___12662 = (0);
while(true){
if((i__7323__auto___12662 < len__7322__auto___12661)){
args__7329__auto__.push((arguments[i__7323__auto___12662]));

var G__12663 = (i__7323__auto___12662 + (1));
i__7323__auto___12662 = G__12663;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__12651_12664 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__12652_12665 = null;
var count__12653_12666 = (0);
var i__12654_12667 = (0);
while(true){
if((i__12654_12667 < count__12653_12666)){
var vec__12655_12668 = cljs.core._nth.call(null,chunk__12652_12665,i__12654_12667);
var k_12669 = cljs.core.nth.call(null,vec__12655_12668,(0),null);
var v_12670 = cljs.core.nth.call(null,vec__12655_12668,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_12669),v_12670);

var G__12671 = seq__12651_12664;
var G__12672 = chunk__12652_12665;
var G__12673 = count__12653_12666;
var G__12674 = (i__12654_12667 + (1));
seq__12651_12664 = G__12671;
chunk__12652_12665 = G__12672;
count__12653_12666 = G__12673;
i__12654_12667 = G__12674;
continue;
} else {
var temp__4657__auto___12675 = cljs.core.seq.call(null,seq__12651_12664);
if(temp__4657__auto___12675){
var seq__12651_12676__$1 = temp__4657__auto___12675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12651_12676__$1)){
var c__7058__auto___12677 = cljs.core.chunk_first.call(null,seq__12651_12676__$1);
var G__12678 = cljs.core.chunk_rest.call(null,seq__12651_12676__$1);
var G__12679 = c__7058__auto___12677;
var G__12680 = cljs.core.count.call(null,c__7058__auto___12677);
var G__12681 = (0);
seq__12651_12664 = G__12678;
chunk__12652_12665 = G__12679;
count__12653_12666 = G__12680;
i__12654_12667 = G__12681;
continue;
} else {
var vec__12658_12682 = cljs.core.first.call(null,seq__12651_12676__$1);
var k_12683 = cljs.core.nth.call(null,vec__12658_12682,(0),null);
var v_12684 = cljs.core.nth.call(null,vec__12658_12682,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_12683),v_12684);

var G__12685 = cljs.core.next.call(null,seq__12651_12676__$1);
var G__12686 = null;
var G__12687 = (0);
var G__12688 = (0);
seq__12651_12664 = G__12685;
chunk__12652_12665 = G__12686;
count__12653_12666 = G__12687;
i__12654_12667 = G__12688;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq12649){
var G__12650 = cljs.core.first.call(null,seq12649);
var seq12649__$1 = cljs.core.next.call(null,seq12649);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12650,seq12649__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___12695 = arguments.length;
var i__7323__auto___12696 = (0);
while(true){
if((i__7323__auto___12696 < len__7322__auto___12695)){
args__7329__auto__.push((arguments[i__7323__auto___12696]));

var G__12697 = (i__7323__auto___12696 + (1));
i__7323__auto___12696 = G__12697;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__12691_12698 = cljs.core.seq.call(null,keywords);
var chunk__12692_12699 = null;
var count__12693_12700 = (0);
var i__12694_12701 = (0);
while(true){
if((i__12694_12701 < count__12693_12700)){
var kw_12702 = cljs.core._nth.call(null,chunk__12692_12699,i__12694_12701);
style.removeProperty(dommy.utils.as_str.call(null,kw_12702));

var G__12703 = seq__12691_12698;
var G__12704 = chunk__12692_12699;
var G__12705 = count__12693_12700;
var G__12706 = (i__12694_12701 + (1));
seq__12691_12698 = G__12703;
chunk__12692_12699 = G__12704;
count__12693_12700 = G__12705;
i__12694_12701 = G__12706;
continue;
} else {
var temp__4657__auto___12707 = cljs.core.seq.call(null,seq__12691_12698);
if(temp__4657__auto___12707){
var seq__12691_12708__$1 = temp__4657__auto___12707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12691_12708__$1)){
var c__7058__auto___12709 = cljs.core.chunk_first.call(null,seq__12691_12708__$1);
var G__12710 = cljs.core.chunk_rest.call(null,seq__12691_12708__$1);
var G__12711 = c__7058__auto___12709;
var G__12712 = cljs.core.count.call(null,c__7058__auto___12709);
var G__12713 = (0);
seq__12691_12698 = G__12710;
chunk__12692_12699 = G__12711;
count__12693_12700 = G__12712;
i__12694_12701 = G__12713;
continue;
} else {
var kw_12714 = cljs.core.first.call(null,seq__12691_12708__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_12714));

var G__12715 = cljs.core.next.call(null,seq__12691_12708__$1);
var G__12716 = null;
var G__12717 = (0);
var G__12718 = (0);
seq__12691_12698 = G__12715;
chunk__12692_12699 = G__12716;
count__12693_12700 = G__12717;
i__12694_12701 = G__12718;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq12689){
var G__12690 = cljs.core.first.call(null,seq12689);
var seq12689__$1 = cljs.core.next.call(null,seq12689);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12690,seq12689__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___12731 = arguments.length;
var i__7323__auto___12732 = (0);
while(true){
if((i__7323__auto___12732 < len__7322__auto___12731)){
args__7329__auto__.push((arguments[i__7323__auto___12732]));

var G__12733 = (i__7323__auto___12732 + (1));
i__7323__auto___12732 = G__12733;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__12721_12734 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__12722_12735 = null;
var count__12723_12736 = (0);
var i__12724_12737 = (0);
while(true){
if((i__12724_12737 < count__12723_12736)){
var vec__12725_12738 = cljs.core._nth.call(null,chunk__12722_12735,i__12724_12737);
var k_12739 = cljs.core.nth.call(null,vec__12725_12738,(0),null);
var v_12740 = cljs.core.nth.call(null,vec__12725_12738,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_12739,[cljs.core.str(v_12740),cljs.core.str("px")].join(''));

var G__12741 = seq__12721_12734;
var G__12742 = chunk__12722_12735;
var G__12743 = count__12723_12736;
var G__12744 = (i__12724_12737 + (1));
seq__12721_12734 = G__12741;
chunk__12722_12735 = G__12742;
count__12723_12736 = G__12743;
i__12724_12737 = G__12744;
continue;
} else {
var temp__4657__auto___12745 = cljs.core.seq.call(null,seq__12721_12734);
if(temp__4657__auto___12745){
var seq__12721_12746__$1 = temp__4657__auto___12745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12721_12746__$1)){
var c__7058__auto___12747 = cljs.core.chunk_first.call(null,seq__12721_12746__$1);
var G__12748 = cljs.core.chunk_rest.call(null,seq__12721_12746__$1);
var G__12749 = c__7058__auto___12747;
var G__12750 = cljs.core.count.call(null,c__7058__auto___12747);
var G__12751 = (0);
seq__12721_12734 = G__12748;
chunk__12722_12735 = G__12749;
count__12723_12736 = G__12750;
i__12724_12737 = G__12751;
continue;
} else {
var vec__12728_12752 = cljs.core.first.call(null,seq__12721_12746__$1);
var k_12753 = cljs.core.nth.call(null,vec__12728_12752,(0),null);
var v_12754 = cljs.core.nth.call(null,vec__12728_12752,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_12753,[cljs.core.str(v_12754),cljs.core.str("px")].join(''));

var G__12755 = cljs.core.next.call(null,seq__12721_12746__$1);
var G__12756 = null;
var G__12757 = (0);
var G__12758 = (0);
seq__12721_12734 = G__12755;
chunk__12722_12735 = G__12756;
count__12723_12736 = G__12757;
i__12724_12737 = G__12758;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq12719){
var G__12720 = cljs.core.first.call(null,seq12719);
var seq12719__$1 = cljs.core.next.call(null,seq12719);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12720,seq12719__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args12759 = [];
var len__7322__auto___12778 = arguments.length;
var i__7323__auto___12779 = (0);
while(true){
if((i__7323__auto___12779 < len__7322__auto___12778)){
args12759.push((arguments[i__7323__auto___12779]));

var G__12780 = (i__7323__auto___12779 + (1));
i__7323__auto___12779 = G__12780;
continue;
} else {
}
break;
}

var G__12765 = args12759.length;
switch (G__12765) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7341__auto__ = (new cljs.core.IndexedSeq(args12759.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7341__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__12766 = elem;
(G__12766[k__$1] = v);

return G__12766;
} else {
var G__12767 = elem;
G__12767.setAttribute(k__$1,v);

return G__12767;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__12768_12782 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__12769_12783 = null;
var count__12770_12784 = (0);
var i__12771_12785 = (0);
while(true){
if((i__12771_12785 < count__12770_12784)){
var vec__12772_12786 = cljs.core._nth.call(null,chunk__12769_12783,i__12771_12785);
var k_12787__$1 = cljs.core.nth.call(null,vec__12772_12786,(0),null);
var v_12788__$1 = cljs.core.nth.call(null,vec__12772_12786,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_12787__$1,v_12788__$1);

var G__12789 = seq__12768_12782;
var G__12790 = chunk__12769_12783;
var G__12791 = count__12770_12784;
var G__12792 = (i__12771_12785 + (1));
seq__12768_12782 = G__12789;
chunk__12769_12783 = G__12790;
count__12770_12784 = G__12791;
i__12771_12785 = G__12792;
continue;
} else {
var temp__4657__auto___12793 = cljs.core.seq.call(null,seq__12768_12782);
if(temp__4657__auto___12793){
var seq__12768_12794__$1 = temp__4657__auto___12793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12768_12794__$1)){
var c__7058__auto___12795 = cljs.core.chunk_first.call(null,seq__12768_12794__$1);
var G__12796 = cljs.core.chunk_rest.call(null,seq__12768_12794__$1);
var G__12797 = c__7058__auto___12795;
var G__12798 = cljs.core.count.call(null,c__7058__auto___12795);
var G__12799 = (0);
seq__12768_12782 = G__12796;
chunk__12769_12783 = G__12797;
count__12770_12784 = G__12798;
i__12771_12785 = G__12799;
continue;
} else {
var vec__12775_12800 = cljs.core.first.call(null,seq__12768_12794__$1);
var k_12801__$1 = cljs.core.nth.call(null,vec__12775_12800,(0),null);
var v_12802__$1 = cljs.core.nth.call(null,vec__12775_12800,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_12801__$1,v_12802__$1);

var G__12803 = cljs.core.next.call(null,seq__12768_12794__$1);
var G__12804 = null;
var G__12805 = (0);
var G__12806 = (0);
seq__12768_12782 = G__12803;
chunk__12769_12783 = G__12804;
count__12770_12784 = G__12805;
i__12771_12785 = G__12806;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq12760){
var G__12761 = cljs.core.first.call(null,seq12760);
var seq12760__$1 = cljs.core.next.call(null,seq12760);
var G__12762 = cljs.core.first.call(null,seq12760__$1);
var seq12760__$2 = cljs.core.next.call(null,seq12760__$1);
var G__12763 = cljs.core.first.call(null,seq12760__$2);
var seq12760__$3 = cljs.core.next.call(null,seq12760__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12761,G__12762,G__12763,seq12760__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args12807 = [];
var len__7322__auto___12817 = arguments.length;
var i__7323__auto___12818 = (0);
while(true){
if((i__7323__auto___12818 < len__7322__auto___12817)){
args12807.push((arguments[i__7323__auto___12818]));

var G__12819 = (i__7323__auto___12818 + (1));
i__7323__auto___12818 = G__12819;
continue;
} else {
}
break;
}

var G__12812 = args12807.length;
switch (G__12812) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7341__auto__ = (new cljs.core.IndexedSeq(args12807.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7341__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_12821__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_12821__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_12821__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__12813_12822 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__12814_12823 = null;
var count__12815_12824 = (0);
var i__12816_12825 = (0);
while(true){
if((i__12816_12825 < count__12815_12824)){
var k_12826__$1 = cljs.core._nth.call(null,chunk__12814_12823,i__12816_12825);
dommy.core.remove_attr_BANG_.call(null,elem,k_12826__$1);

var G__12827 = seq__12813_12822;
var G__12828 = chunk__12814_12823;
var G__12829 = count__12815_12824;
var G__12830 = (i__12816_12825 + (1));
seq__12813_12822 = G__12827;
chunk__12814_12823 = G__12828;
count__12815_12824 = G__12829;
i__12816_12825 = G__12830;
continue;
} else {
var temp__4657__auto___12831 = cljs.core.seq.call(null,seq__12813_12822);
if(temp__4657__auto___12831){
var seq__12813_12832__$1 = temp__4657__auto___12831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12813_12832__$1)){
var c__7058__auto___12833 = cljs.core.chunk_first.call(null,seq__12813_12832__$1);
var G__12834 = cljs.core.chunk_rest.call(null,seq__12813_12832__$1);
var G__12835 = c__7058__auto___12833;
var G__12836 = cljs.core.count.call(null,c__7058__auto___12833);
var G__12837 = (0);
seq__12813_12822 = G__12834;
chunk__12814_12823 = G__12835;
count__12815_12824 = G__12836;
i__12816_12825 = G__12837;
continue;
} else {
var k_12838__$1 = cljs.core.first.call(null,seq__12813_12832__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_12838__$1);

var G__12839 = cljs.core.next.call(null,seq__12813_12832__$1);
var G__12840 = null;
var G__12841 = (0);
var G__12842 = (0);
seq__12813_12822 = G__12839;
chunk__12814_12823 = G__12840;
count__12815_12824 = G__12841;
i__12816_12825 = G__12842;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq12808){
var G__12809 = cljs.core.first.call(null,seq12808);
var seq12808__$1 = cljs.core.next.call(null,seq12808);
var G__12810 = cljs.core.first.call(null,seq12808__$1);
var seq12808__$2 = cljs.core.next.call(null,seq12808__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12809,G__12810,seq12808__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args12843 = [];
var len__7322__auto___12846 = arguments.length;
var i__7323__auto___12847 = (0);
while(true){
if((i__7323__auto___12847 < len__7322__auto___12846)){
args12843.push((arguments[i__7323__auto___12847]));

var G__12848 = (i__7323__auto___12847 + (1));
i__7323__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var G__12845 = args12843.length;
switch (G__12845) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12843.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args12850 = [];
var len__7322__auto___12868 = arguments.length;
var i__7323__auto___12869 = (0);
while(true){
if((i__7323__auto___12869 < len__7322__auto___12868)){
args12850.push((arguments[i__7323__auto___12869]));

var G__12870 = (i__7323__auto___12869 + (1));
i__7323__auto___12869 = G__12870;
continue;
} else {
}
break;
}

var G__12855 = args12850.length;
switch (G__12855) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7341__auto__ = (new cljs.core.IndexedSeq(args12850.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7341__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___12872 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12872)){
var class_list_12873 = temp__4655__auto___12872;
var seq__12856_12874 = cljs.core.seq.call(null,classes__$1);
var chunk__12857_12875 = null;
var count__12858_12876 = (0);
var i__12859_12877 = (0);
while(true){
if((i__12859_12877 < count__12858_12876)){
var c_12878 = cljs.core._nth.call(null,chunk__12857_12875,i__12859_12877);
class_list_12873.add(c_12878);

var G__12879 = seq__12856_12874;
var G__12880 = chunk__12857_12875;
var G__12881 = count__12858_12876;
var G__12882 = (i__12859_12877 + (1));
seq__12856_12874 = G__12879;
chunk__12857_12875 = G__12880;
count__12858_12876 = G__12881;
i__12859_12877 = G__12882;
continue;
} else {
var temp__4657__auto___12883 = cljs.core.seq.call(null,seq__12856_12874);
if(temp__4657__auto___12883){
var seq__12856_12884__$1 = temp__4657__auto___12883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12856_12884__$1)){
var c__7058__auto___12885 = cljs.core.chunk_first.call(null,seq__12856_12884__$1);
var G__12886 = cljs.core.chunk_rest.call(null,seq__12856_12884__$1);
var G__12887 = c__7058__auto___12885;
var G__12888 = cljs.core.count.call(null,c__7058__auto___12885);
var G__12889 = (0);
seq__12856_12874 = G__12886;
chunk__12857_12875 = G__12887;
count__12858_12876 = G__12888;
i__12859_12877 = G__12889;
continue;
} else {
var c_12890 = cljs.core.first.call(null,seq__12856_12884__$1);
class_list_12873.add(c_12890);

var G__12891 = cljs.core.next.call(null,seq__12856_12884__$1);
var G__12892 = null;
var G__12893 = (0);
var G__12894 = (0);
seq__12856_12874 = G__12891;
chunk__12857_12875 = G__12892;
count__12858_12876 = G__12893;
i__12859_12877 = G__12894;
continue;
}
} else {
}
}
break;
}
} else {
var seq__12860_12895 = cljs.core.seq.call(null,classes__$1);
var chunk__12861_12896 = null;
var count__12862_12897 = (0);
var i__12863_12898 = (0);
while(true){
if((i__12863_12898 < count__12862_12897)){
var c_12899 = cljs.core._nth.call(null,chunk__12861_12896,i__12863_12898);
var class_name_12900 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_12900,c_12899))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_12900 === ""))?c_12899:[cljs.core.str(class_name_12900),cljs.core.str(" "),cljs.core.str(c_12899)].join('')));
}

var G__12901 = seq__12860_12895;
var G__12902 = chunk__12861_12896;
var G__12903 = count__12862_12897;
var G__12904 = (i__12863_12898 + (1));
seq__12860_12895 = G__12901;
chunk__12861_12896 = G__12902;
count__12862_12897 = G__12903;
i__12863_12898 = G__12904;
continue;
} else {
var temp__4657__auto___12905 = cljs.core.seq.call(null,seq__12860_12895);
if(temp__4657__auto___12905){
var seq__12860_12906__$1 = temp__4657__auto___12905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12860_12906__$1)){
var c__7058__auto___12907 = cljs.core.chunk_first.call(null,seq__12860_12906__$1);
var G__12908 = cljs.core.chunk_rest.call(null,seq__12860_12906__$1);
var G__12909 = c__7058__auto___12907;
var G__12910 = cljs.core.count.call(null,c__7058__auto___12907);
var G__12911 = (0);
seq__12860_12895 = G__12908;
chunk__12861_12896 = G__12909;
count__12862_12897 = G__12910;
i__12863_12898 = G__12911;
continue;
} else {
var c_12912 = cljs.core.first.call(null,seq__12860_12906__$1);
var class_name_12913 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_12913,c_12912))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_12913 === ""))?c_12912:[cljs.core.str(class_name_12913),cljs.core.str(" "),cljs.core.str(c_12912)].join('')));
}

var G__12914 = cljs.core.next.call(null,seq__12860_12906__$1);
var G__12915 = null;
var G__12916 = (0);
var G__12917 = (0);
seq__12860_12895 = G__12914;
chunk__12861_12896 = G__12915;
count__12862_12897 = G__12916;
i__12863_12898 = G__12917;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__12864_12918 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__12865_12919 = null;
var count__12866_12920 = (0);
var i__12867_12921 = (0);
while(true){
if((i__12867_12921 < count__12866_12920)){
var c_12922 = cljs.core._nth.call(null,chunk__12865_12919,i__12867_12921);
dommy.core.add_class_BANG_.call(null,elem,c_12922);

var G__12923 = seq__12864_12918;
var G__12924 = chunk__12865_12919;
var G__12925 = count__12866_12920;
var G__12926 = (i__12867_12921 + (1));
seq__12864_12918 = G__12923;
chunk__12865_12919 = G__12924;
count__12866_12920 = G__12925;
i__12867_12921 = G__12926;
continue;
} else {
var temp__4657__auto___12927 = cljs.core.seq.call(null,seq__12864_12918);
if(temp__4657__auto___12927){
var seq__12864_12928__$1 = temp__4657__auto___12927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12864_12928__$1)){
var c__7058__auto___12929 = cljs.core.chunk_first.call(null,seq__12864_12928__$1);
var G__12930 = cljs.core.chunk_rest.call(null,seq__12864_12928__$1);
var G__12931 = c__7058__auto___12929;
var G__12932 = cljs.core.count.call(null,c__7058__auto___12929);
var G__12933 = (0);
seq__12864_12918 = G__12930;
chunk__12865_12919 = G__12931;
count__12866_12920 = G__12932;
i__12867_12921 = G__12933;
continue;
} else {
var c_12934 = cljs.core.first.call(null,seq__12864_12928__$1);
dommy.core.add_class_BANG_.call(null,elem,c_12934);

var G__12935 = cljs.core.next.call(null,seq__12864_12928__$1);
var G__12936 = null;
var G__12937 = (0);
var G__12938 = (0);
seq__12864_12918 = G__12935;
chunk__12865_12919 = G__12936;
count__12866_12920 = G__12937;
i__12867_12921 = G__12938;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq12851){
var G__12852 = cljs.core.first.call(null,seq12851);
var seq12851__$1 = cljs.core.next.call(null,seq12851);
var G__12853 = cljs.core.first.call(null,seq12851__$1);
var seq12851__$2 = cljs.core.next.call(null,seq12851__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12852,G__12853,seq12851__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args12939 = [];
var len__7322__auto___12949 = arguments.length;
var i__7323__auto___12950 = (0);
while(true){
if((i__7323__auto___12950 < len__7322__auto___12949)){
args12939.push((arguments[i__7323__auto___12950]));

var G__12951 = (i__7323__auto___12950 + (1));
i__7323__auto___12950 = G__12951;
continue;
} else {
}
break;
}

var G__12944 = args12939.length;
switch (G__12944) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7341__auto__ = (new cljs.core.IndexedSeq(args12939.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7341__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___12953 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12953)){
var class_list_12954 = temp__4655__auto___12953;
class_list_12954.remove(c__$1);
} else {
var class_name_12955 = dommy.core.class$.call(null,elem);
var new_class_name_12956 = dommy.utils.remove_class_str.call(null,class_name_12955,c__$1);
if((class_name_12955 === new_class_name_12956)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_12956);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__12945 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__12946 = null;
var count__12947 = (0);
var i__12948 = (0);
while(true){
if((i__12948 < count__12947)){
var c = cljs.core._nth.call(null,chunk__12946,i__12948);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__12957 = seq__12945;
var G__12958 = chunk__12946;
var G__12959 = count__12947;
var G__12960 = (i__12948 + (1));
seq__12945 = G__12957;
chunk__12946 = G__12958;
count__12947 = G__12959;
i__12948 = G__12960;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12945);
if(temp__4657__auto__){
var seq__12945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12945__$1)){
var c__7058__auto__ = cljs.core.chunk_first.call(null,seq__12945__$1);
var G__12961 = cljs.core.chunk_rest.call(null,seq__12945__$1);
var G__12962 = c__7058__auto__;
var G__12963 = cljs.core.count.call(null,c__7058__auto__);
var G__12964 = (0);
seq__12945 = G__12961;
chunk__12946 = G__12962;
count__12947 = G__12963;
i__12948 = G__12964;
continue;
} else {
var c = cljs.core.first.call(null,seq__12945__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__12965 = cljs.core.next.call(null,seq__12945__$1);
var G__12966 = null;
var G__12967 = (0);
var G__12968 = (0);
seq__12945 = G__12965;
chunk__12946 = G__12966;
count__12947 = G__12967;
i__12948 = G__12968;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq12940){
var G__12941 = cljs.core.first.call(null,seq12940);
var seq12940__$1 = cljs.core.next.call(null,seq12940);
var G__12942 = cljs.core.first.call(null,seq12940__$1);
var seq12940__$2 = cljs.core.next.call(null,seq12940__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12941,G__12942,seq12940__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args12969 = [];
var len__7322__auto___12972 = arguments.length;
var i__7323__auto___12973 = (0);
while(true){
if((i__7323__auto___12973 < len__7322__auto___12972)){
args12969.push((arguments[i__7323__auto___12973]));

var G__12974 = (i__7323__auto___12973 + (1));
i__7323__auto___12973 = G__12974;
continue;
} else {
}
break;
}

var G__12971 = args12969.length;
switch (G__12971) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12969.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___12976 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12976)){
var class_list_12977 = temp__4655__auto___12976;
class_list_12977.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args12978 = [];
var len__7322__auto___12981 = arguments.length;
var i__7323__auto___12982 = (0);
while(true){
if((i__7323__auto___12982 < len__7322__auto___12981)){
args12978.push((arguments[i__7323__auto___12982]));

var G__12983 = (i__7323__auto___12982 + (1));
i__7323__auto___12982 = G__12983;
continue;
} else {
}
break;
}

var G__12980 = args12978.length;
switch (G__12980) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12978.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args12985 = [];
var len__7322__auto___12988 = arguments.length;
var i__7323__auto___12989 = (0);
while(true){
if((i__7323__auto___12989 < len__7322__auto___12988)){
args12985.push((arguments[i__7323__auto___12989]));

var G__12990 = (i__7323__auto___12989 + (1));
i__7323__auto___12989 = G__12990;
continue;
} else {
}
break;
}

var G__12987 = args12985.length;
switch (G__12987) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12985.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args12992 = [];
var len__7322__auto___13003 = arguments.length;
var i__7323__auto___13004 = (0);
while(true){
if((i__7323__auto___13004 < len__7322__auto___13003)){
args12992.push((arguments[i__7323__auto___13004]));

var G__13005 = (i__7323__auto___13004 + (1));
i__7323__auto___13004 = G__13005;
continue;
} else {
}
break;
}

var G__12997 = args12992.length;
switch (G__12997) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7341__auto__ = (new cljs.core.IndexedSeq(args12992.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7341__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__12998 = parent;
G__12998.appendChild(child);

return G__12998;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__12999_13007 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__13000_13008 = null;
var count__13001_13009 = (0);
var i__13002_13010 = (0);
while(true){
if((i__13002_13010 < count__13001_13009)){
var c_13011 = cljs.core._nth.call(null,chunk__13000_13008,i__13002_13010);
dommy.core.append_BANG_.call(null,parent,c_13011);

var G__13012 = seq__12999_13007;
var G__13013 = chunk__13000_13008;
var G__13014 = count__13001_13009;
var G__13015 = (i__13002_13010 + (1));
seq__12999_13007 = G__13012;
chunk__13000_13008 = G__13013;
count__13001_13009 = G__13014;
i__13002_13010 = G__13015;
continue;
} else {
var temp__4657__auto___13016 = cljs.core.seq.call(null,seq__12999_13007);
if(temp__4657__auto___13016){
var seq__12999_13017__$1 = temp__4657__auto___13016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12999_13017__$1)){
var c__7058__auto___13018 = cljs.core.chunk_first.call(null,seq__12999_13017__$1);
var G__13019 = cljs.core.chunk_rest.call(null,seq__12999_13017__$1);
var G__13020 = c__7058__auto___13018;
var G__13021 = cljs.core.count.call(null,c__7058__auto___13018);
var G__13022 = (0);
seq__12999_13007 = G__13019;
chunk__13000_13008 = G__13020;
count__13001_13009 = G__13021;
i__13002_13010 = G__13022;
continue;
} else {
var c_13023 = cljs.core.first.call(null,seq__12999_13017__$1);
dommy.core.append_BANG_.call(null,parent,c_13023);

var G__13024 = cljs.core.next.call(null,seq__12999_13017__$1);
var G__13025 = null;
var G__13026 = (0);
var G__13027 = (0);
seq__12999_13007 = G__13024;
chunk__13000_13008 = G__13025;
count__13001_13009 = G__13026;
i__13002_13010 = G__13027;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq12993){
var G__12994 = cljs.core.first.call(null,seq12993);
var seq12993__$1 = cljs.core.next.call(null,seq12993);
var G__12995 = cljs.core.first.call(null,seq12993__$1);
var seq12993__$2 = cljs.core.next.call(null,seq12993__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12994,G__12995,seq12993__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args13028 = [];
var len__7322__auto___13039 = arguments.length;
var i__7323__auto___13040 = (0);
while(true){
if((i__7323__auto___13040 < len__7322__auto___13039)){
args13028.push((arguments[i__7323__auto___13040]));

var G__13041 = (i__7323__auto___13040 + (1));
i__7323__auto___13040 = G__13041;
continue;
} else {
}
break;
}

var G__13033 = args13028.length;
switch (G__13033) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7341__auto__ = (new cljs.core.IndexedSeq(args13028.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7341__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__13034 = parent;
G__13034.insertBefore(child,parent.firstChild);

return G__13034;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__13035_13043 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__13036_13044 = null;
var count__13037_13045 = (0);
var i__13038_13046 = (0);
while(true){
if((i__13038_13046 < count__13037_13045)){
var c_13047 = cljs.core._nth.call(null,chunk__13036_13044,i__13038_13046);
dommy.core.prepend_BANG_.call(null,parent,c_13047);

var G__13048 = seq__13035_13043;
var G__13049 = chunk__13036_13044;
var G__13050 = count__13037_13045;
var G__13051 = (i__13038_13046 + (1));
seq__13035_13043 = G__13048;
chunk__13036_13044 = G__13049;
count__13037_13045 = G__13050;
i__13038_13046 = G__13051;
continue;
} else {
var temp__4657__auto___13052 = cljs.core.seq.call(null,seq__13035_13043);
if(temp__4657__auto___13052){
var seq__13035_13053__$1 = temp__4657__auto___13052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13035_13053__$1)){
var c__7058__auto___13054 = cljs.core.chunk_first.call(null,seq__13035_13053__$1);
var G__13055 = cljs.core.chunk_rest.call(null,seq__13035_13053__$1);
var G__13056 = c__7058__auto___13054;
var G__13057 = cljs.core.count.call(null,c__7058__auto___13054);
var G__13058 = (0);
seq__13035_13043 = G__13055;
chunk__13036_13044 = G__13056;
count__13037_13045 = G__13057;
i__13038_13046 = G__13058;
continue;
} else {
var c_13059 = cljs.core.first.call(null,seq__13035_13053__$1);
dommy.core.prepend_BANG_.call(null,parent,c_13059);

var G__13060 = cljs.core.next.call(null,seq__13035_13053__$1);
var G__13061 = null;
var G__13062 = (0);
var G__13063 = (0);
seq__13035_13043 = G__13060;
chunk__13036_13044 = G__13061;
count__13037_13045 = G__13062;
i__13038_13046 = G__13063;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq13029){
var G__13030 = cljs.core.first.call(null,seq13029);
var seq13029__$1 = cljs.core.next.call(null,seq13029);
var G__13031 = cljs.core.first.call(null,seq13029__$1);
var seq13029__$2 = cljs.core.next.call(null,seq13029__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13030,G__13031,seq13029__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___13064 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___13064)){
var next_13065 = temp__4655__auto___13064;
dommy.core.insert_before_BANG_.call(null,elem,next_13065);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args13066 = [];
var len__7322__auto___13070 = arguments.length;
var i__7323__auto___13071 = (0);
while(true){
if((i__7323__auto___13071 < len__7322__auto___13070)){
args13066.push((arguments[i__7323__auto___13071]));

var G__13072 = (i__7323__auto___13071 + (1));
i__7323__auto___13071 = G__13072;
continue;
} else {
}
break;
}

var G__13068 = args13066.length;
switch (G__13068) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13066.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__13069 = p;
G__13069.removeChild(elem);

return G__13069;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13074){
var vec__13075 = p__13074;
var special_mouse_event = cljs.core.nth.call(null,vec__13075,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__13075,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__13075,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__13075,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__6247__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__6235__auto__ = related_target;
if(cljs.core.truth_(and__6235__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__6235__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__13075,special_mouse_event,real_mouse_event))
});})(vec__13075,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__6235__auto__ = selected_target;
if(cljs.core.truth_(and__6235__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__6235__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__6247__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___13081 = arguments.length;
var i__7323__auto___13082 = (0);
while(true){
if((i__7323__auto___13082 < len__7322__auto___13081)){
args__7329__auto__.push((arguments[i__7323__auto___13082]));

var G__13083 = (i__7323__auto___13082 + (1));
i__7323__auto___13082 = G__13083;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((2) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7330__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq13078){
var G__13079 = cljs.core.first.call(null,seq13078);
var seq13078__$1 = cljs.core.next.call(null,seq13078);
var G__13080 = cljs.core.first.call(null,seq13078__$1);
var seq13078__$2 = cljs.core.next.call(null,seq13078__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13079,G__13080,seq13078__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___13123 = arguments.length;
var i__7323__auto___13124 = (0);
while(true){
if((i__7323__auto___13124 < len__7322__auto___13123)){
args__7329__auto__.push((arguments[i__7323__auto___13124]));

var G__13125 = (i__7323__auto___13124 + (1));
i__7323__auto___13124 = G__13125;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__13086_13126 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_13127 = cljs.core.nth.call(null,vec__13086_13126,(0),null);
var selector_13128 = cljs.core.nth.call(null,vec__13086_13126,(1),null);
var seq__13089_13129 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__13096_13130 = null;
var count__13097_13131 = (0);
var i__13098_13132 = (0);
while(true){
if((i__13098_13132 < count__13097_13131)){
var vec__13105_13133 = cljs.core._nth.call(null,chunk__13096_13130,i__13098_13132);
var orig_type_13134 = cljs.core.nth.call(null,vec__13105_13133,(0),null);
var f_13135 = cljs.core.nth.call(null,vec__13105_13133,(1),null);
var seq__13099_13136 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13134,cljs.core.PersistentArrayMap.fromArray([orig_type_13134,cljs.core.identity], true, false)));
var chunk__13101_13137 = null;
var count__13102_13138 = (0);
var i__13103_13139 = (0);
while(true){
if((i__13103_13139 < count__13102_13138)){
var vec__13108_13140 = cljs.core._nth.call(null,chunk__13101_13137,i__13103_13139);
var actual_type_13141 = cljs.core.nth.call(null,vec__13108_13140,(0),null);
var factory_13142 = cljs.core.nth.call(null,vec__13108_13140,(1),null);
var canonical_f_13143 = (cljs.core.truth_(selector_13128)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13127,selector_13128):cljs.core.identity).call(null,factory_13142.call(null,f_13135));
dommy.core.update_event_listeners_BANG_.call(null,elem_13127,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13128,actual_type_13141,f_13135], null),canonical_f_13143);

if(cljs.core.truth_(elem_13127.addEventListener)){
elem_13127.addEventListener(cljs.core.name.call(null,actual_type_13141),canonical_f_13143);
} else {
elem_13127.attachEvent(cljs.core.name.call(null,actual_type_13141),canonical_f_13143);
}

var G__13144 = seq__13099_13136;
var G__13145 = chunk__13101_13137;
var G__13146 = count__13102_13138;
var G__13147 = (i__13103_13139 + (1));
seq__13099_13136 = G__13144;
chunk__13101_13137 = G__13145;
count__13102_13138 = G__13146;
i__13103_13139 = G__13147;
continue;
} else {
var temp__4657__auto___13148 = cljs.core.seq.call(null,seq__13099_13136);
if(temp__4657__auto___13148){
var seq__13099_13149__$1 = temp__4657__auto___13148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13099_13149__$1)){
var c__7058__auto___13150 = cljs.core.chunk_first.call(null,seq__13099_13149__$1);
var G__13151 = cljs.core.chunk_rest.call(null,seq__13099_13149__$1);
var G__13152 = c__7058__auto___13150;
var G__13153 = cljs.core.count.call(null,c__7058__auto___13150);
var G__13154 = (0);
seq__13099_13136 = G__13151;
chunk__13101_13137 = G__13152;
count__13102_13138 = G__13153;
i__13103_13139 = G__13154;
continue;
} else {
var vec__13111_13155 = cljs.core.first.call(null,seq__13099_13149__$1);
var actual_type_13156 = cljs.core.nth.call(null,vec__13111_13155,(0),null);
var factory_13157 = cljs.core.nth.call(null,vec__13111_13155,(1),null);
var canonical_f_13158 = (cljs.core.truth_(selector_13128)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13127,selector_13128):cljs.core.identity).call(null,factory_13157.call(null,f_13135));
dommy.core.update_event_listeners_BANG_.call(null,elem_13127,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13128,actual_type_13156,f_13135], null),canonical_f_13158);

if(cljs.core.truth_(elem_13127.addEventListener)){
elem_13127.addEventListener(cljs.core.name.call(null,actual_type_13156),canonical_f_13158);
} else {
elem_13127.attachEvent(cljs.core.name.call(null,actual_type_13156),canonical_f_13158);
}

var G__13159 = cljs.core.next.call(null,seq__13099_13149__$1);
var G__13160 = null;
var G__13161 = (0);
var G__13162 = (0);
seq__13099_13136 = G__13159;
chunk__13101_13137 = G__13160;
count__13102_13138 = G__13161;
i__13103_13139 = G__13162;
continue;
}
} else {
}
}
break;
}

var G__13163 = seq__13089_13129;
var G__13164 = chunk__13096_13130;
var G__13165 = count__13097_13131;
var G__13166 = (i__13098_13132 + (1));
seq__13089_13129 = G__13163;
chunk__13096_13130 = G__13164;
count__13097_13131 = G__13165;
i__13098_13132 = G__13166;
continue;
} else {
var temp__4657__auto___13167 = cljs.core.seq.call(null,seq__13089_13129);
if(temp__4657__auto___13167){
var seq__13089_13168__$1 = temp__4657__auto___13167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13089_13168__$1)){
var c__7058__auto___13169 = cljs.core.chunk_first.call(null,seq__13089_13168__$1);
var G__13170 = cljs.core.chunk_rest.call(null,seq__13089_13168__$1);
var G__13171 = c__7058__auto___13169;
var G__13172 = cljs.core.count.call(null,c__7058__auto___13169);
var G__13173 = (0);
seq__13089_13129 = G__13170;
chunk__13096_13130 = G__13171;
count__13097_13131 = G__13172;
i__13098_13132 = G__13173;
continue;
} else {
var vec__13114_13174 = cljs.core.first.call(null,seq__13089_13168__$1);
var orig_type_13175 = cljs.core.nth.call(null,vec__13114_13174,(0),null);
var f_13176 = cljs.core.nth.call(null,vec__13114_13174,(1),null);
var seq__13090_13177 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13175,cljs.core.PersistentArrayMap.fromArray([orig_type_13175,cljs.core.identity], true, false)));
var chunk__13092_13178 = null;
var count__13093_13179 = (0);
var i__13094_13180 = (0);
while(true){
if((i__13094_13180 < count__13093_13179)){
var vec__13117_13181 = cljs.core._nth.call(null,chunk__13092_13178,i__13094_13180);
var actual_type_13182 = cljs.core.nth.call(null,vec__13117_13181,(0),null);
var factory_13183 = cljs.core.nth.call(null,vec__13117_13181,(1),null);
var canonical_f_13184 = (cljs.core.truth_(selector_13128)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13127,selector_13128):cljs.core.identity).call(null,factory_13183.call(null,f_13176));
dommy.core.update_event_listeners_BANG_.call(null,elem_13127,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13128,actual_type_13182,f_13176], null),canonical_f_13184);

if(cljs.core.truth_(elem_13127.addEventListener)){
elem_13127.addEventListener(cljs.core.name.call(null,actual_type_13182),canonical_f_13184);
} else {
elem_13127.attachEvent(cljs.core.name.call(null,actual_type_13182),canonical_f_13184);
}

var G__13185 = seq__13090_13177;
var G__13186 = chunk__13092_13178;
var G__13187 = count__13093_13179;
var G__13188 = (i__13094_13180 + (1));
seq__13090_13177 = G__13185;
chunk__13092_13178 = G__13186;
count__13093_13179 = G__13187;
i__13094_13180 = G__13188;
continue;
} else {
var temp__4657__auto___13189__$1 = cljs.core.seq.call(null,seq__13090_13177);
if(temp__4657__auto___13189__$1){
var seq__13090_13190__$1 = temp__4657__auto___13189__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13090_13190__$1)){
var c__7058__auto___13191 = cljs.core.chunk_first.call(null,seq__13090_13190__$1);
var G__13192 = cljs.core.chunk_rest.call(null,seq__13090_13190__$1);
var G__13193 = c__7058__auto___13191;
var G__13194 = cljs.core.count.call(null,c__7058__auto___13191);
var G__13195 = (0);
seq__13090_13177 = G__13192;
chunk__13092_13178 = G__13193;
count__13093_13179 = G__13194;
i__13094_13180 = G__13195;
continue;
} else {
var vec__13120_13196 = cljs.core.first.call(null,seq__13090_13190__$1);
var actual_type_13197 = cljs.core.nth.call(null,vec__13120_13196,(0),null);
var factory_13198 = cljs.core.nth.call(null,vec__13120_13196,(1),null);
var canonical_f_13199 = (cljs.core.truth_(selector_13128)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13127,selector_13128):cljs.core.identity).call(null,factory_13198.call(null,f_13176));
dommy.core.update_event_listeners_BANG_.call(null,elem_13127,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13128,actual_type_13197,f_13176], null),canonical_f_13199);

if(cljs.core.truth_(elem_13127.addEventListener)){
elem_13127.addEventListener(cljs.core.name.call(null,actual_type_13197),canonical_f_13199);
} else {
elem_13127.attachEvent(cljs.core.name.call(null,actual_type_13197),canonical_f_13199);
}

var G__13200 = cljs.core.next.call(null,seq__13090_13190__$1);
var G__13201 = null;
var G__13202 = (0);
var G__13203 = (0);
seq__13090_13177 = G__13200;
chunk__13092_13178 = G__13201;
count__13093_13179 = G__13202;
i__13094_13180 = G__13203;
continue;
}
} else {
}
}
break;
}

var G__13204 = cljs.core.next.call(null,seq__13089_13168__$1);
var G__13205 = null;
var G__13206 = (0);
var G__13207 = (0);
seq__13089_13129 = G__13204;
chunk__13096_13130 = G__13205;
count__13097_13131 = G__13206;
i__13098_13132 = G__13207;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq13084){
var G__13085 = cljs.core.first.call(null,seq13084);
var seq13084__$1 = cljs.core.next.call(null,seq13084);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13085,seq13084__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___13247 = arguments.length;
var i__7323__auto___13248 = (0);
while(true){
if((i__7323__auto___13248 < len__7322__auto___13247)){
args__7329__auto__.push((arguments[i__7323__auto___13248]));

var G__13249 = (i__7323__auto___13248 + (1));
i__7323__auto___13248 = G__13249;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__13210_13250 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_13251 = cljs.core.nth.call(null,vec__13210_13250,(0),null);
var selector_13252 = cljs.core.nth.call(null,vec__13210_13250,(1),null);
var seq__13213_13253 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__13220_13254 = null;
var count__13221_13255 = (0);
var i__13222_13256 = (0);
while(true){
if((i__13222_13256 < count__13221_13255)){
var vec__13229_13257 = cljs.core._nth.call(null,chunk__13220_13254,i__13222_13256);
var orig_type_13258 = cljs.core.nth.call(null,vec__13229_13257,(0),null);
var f_13259 = cljs.core.nth.call(null,vec__13229_13257,(1),null);
var seq__13223_13260 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13258,cljs.core.PersistentArrayMap.fromArray([orig_type_13258,cljs.core.identity], true, false)));
var chunk__13225_13261 = null;
var count__13226_13262 = (0);
var i__13227_13263 = (0);
while(true){
if((i__13227_13263 < count__13226_13262)){
var vec__13232_13264 = cljs.core._nth.call(null,chunk__13225_13261,i__13227_13263);
var actual_type_13265 = cljs.core.nth.call(null,vec__13232_13264,(0),null);
var __13266 = cljs.core.nth.call(null,vec__13232_13264,(1),null);
var keys_13267 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13252,actual_type_13265,f_13259], null);
var canonical_f_13268 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13251),keys_13267);
dommy.core.update_event_listeners_BANG_.call(null,elem_13251,dommy.utils.dissoc_in,keys_13267);

if(cljs.core.truth_(elem_13251.removeEventListener)){
elem_13251.removeEventListener(cljs.core.name.call(null,actual_type_13265),canonical_f_13268);
} else {
elem_13251.detachEvent(cljs.core.name.call(null,actual_type_13265),canonical_f_13268);
}

var G__13269 = seq__13223_13260;
var G__13270 = chunk__13225_13261;
var G__13271 = count__13226_13262;
var G__13272 = (i__13227_13263 + (1));
seq__13223_13260 = G__13269;
chunk__13225_13261 = G__13270;
count__13226_13262 = G__13271;
i__13227_13263 = G__13272;
continue;
} else {
var temp__4657__auto___13273 = cljs.core.seq.call(null,seq__13223_13260);
if(temp__4657__auto___13273){
var seq__13223_13274__$1 = temp__4657__auto___13273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13223_13274__$1)){
var c__7058__auto___13275 = cljs.core.chunk_first.call(null,seq__13223_13274__$1);
var G__13276 = cljs.core.chunk_rest.call(null,seq__13223_13274__$1);
var G__13277 = c__7058__auto___13275;
var G__13278 = cljs.core.count.call(null,c__7058__auto___13275);
var G__13279 = (0);
seq__13223_13260 = G__13276;
chunk__13225_13261 = G__13277;
count__13226_13262 = G__13278;
i__13227_13263 = G__13279;
continue;
} else {
var vec__13235_13280 = cljs.core.first.call(null,seq__13223_13274__$1);
var actual_type_13281 = cljs.core.nth.call(null,vec__13235_13280,(0),null);
var __13282 = cljs.core.nth.call(null,vec__13235_13280,(1),null);
var keys_13283 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13252,actual_type_13281,f_13259], null);
var canonical_f_13284 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13251),keys_13283);
dommy.core.update_event_listeners_BANG_.call(null,elem_13251,dommy.utils.dissoc_in,keys_13283);

if(cljs.core.truth_(elem_13251.removeEventListener)){
elem_13251.removeEventListener(cljs.core.name.call(null,actual_type_13281),canonical_f_13284);
} else {
elem_13251.detachEvent(cljs.core.name.call(null,actual_type_13281),canonical_f_13284);
}

var G__13285 = cljs.core.next.call(null,seq__13223_13274__$1);
var G__13286 = null;
var G__13287 = (0);
var G__13288 = (0);
seq__13223_13260 = G__13285;
chunk__13225_13261 = G__13286;
count__13226_13262 = G__13287;
i__13227_13263 = G__13288;
continue;
}
} else {
}
}
break;
}

var G__13289 = seq__13213_13253;
var G__13290 = chunk__13220_13254;
var G__13291 = count__13221_13255;
var G__13292 = (i__13222_13256 + (1));
seq__13213_13253 = G__13289;
chunk__13220_13254 = G__13290;
count__13221_13255 = G__13291;
i__13222_13256 = G__13292;
continue;
} else {
var temp__4657__auto___13293 = cljs.core.seq.call(null,seq__13213_13253);
if(temp__4657__auto___13293){
var seq__13213_13294__$1 = temp__4657__auto___13293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13213_13294__$1)){
var c__7058__auto___13295 = cljs.core.chunk_first.call(null,seq__13213_13294__$1);
var G__13296 = cljs.core.chunk_rest.call(null,seq__13213_13294__$1);
var G__13297 = c__7058__auto___13295;
var G__13298 = cljs.core.count.call(null,c__7058__auto___13295);
var G__13299 = (0);
seq__13213_13253 = G__13296;
chunk__13220_13254 = G__13297;
count__13221_13255 = G__13298;
i__13222_13256 = G__13299;
continue;
} else {
var vec__13238_13300 = cljs.core.first.call(null,seq__13213_13294__$1);
var orig_type_13301 = cljs.core.nth.call(null,vec__13238_13300,(0),null);
var f_13302 = cljs.core.nth.call(null,vec__13238_13300,(1),null);
var seq__13214_13303 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13301,cljs.core.PersistentArrayMap.fromArray([orig_type_13301,cljs.core.identity], true, false)));
var chunk__13216_13304 = null;
var count__13217_13305 = (0);
var i__13218_13306 = (0);
while(true){
if((i__13218_13306 < count__13217_13305)){
var vec__13241_13307 = cljs.core._nth.call(null,chunk__13216_13304,i__13218_13306);
var actual_type_13308 = cljs.core.nth.call(null,vec__13241_13307,(0),null);
var __13309 = cljs.core.nth.call(null,vec__13241_13307,(1),null);
var keys_13310 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13252,actual_type_13308,f_13302], null);
var canonical_f_13311 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13251),keys_13310);
dommy.core.update_event_listeners_BANG_.call(null,elem_13251,dommy.utils.dissoc_in,keys_13310);

if(cljs.core.truth_(elem_13251.removeEventListener)){
elem_13251.removeEventListener(cljs.core.name.call(null,actual_type_13308),canonical_f_13311);
} else {
elem_13251.detachEvent(cljs.core.name.call(null,actual_type_13308),canonical_f_13311);
}

var G__13312 = seq__13214_13303;
var G__13313 = chunk__13216_13304;
var G__13314 = count__13217_13305;
var G__13315 = (i__13218_13306 + (1));
seq__13214_13303 = G__13312;
chunk__13216_13304 = G__13313;
count__13217_13305 = G__13314;
i__13218_13306 = G__13315;
continue;
} else {
var temp__4657__auto___13316__$1 = cljs.core.seq.call(null,seq__13214_13303);
if(temp__4657__auto___13316__$1){
var seq__13214_13317__$1 = temp__4657__auto___13316__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13214_13317__$1)){
var c__7058__auto___13318 = cljs.core.chunk_first.call(null,seq__13214_13317__$1);
var G__13319 = cljs.core.chunk_rest.call(null,seq__13214_13317__$1);
var G__13320 = c__7058__auto___13318;
var G__13321 = cljs.core.count.call(null,c__7058__auto___13318);
var G__13322 = (0);
seq__13214_13303 = G__13319;
chunk__13216_13304 = G__13320;
count__13217_13305 = G__13321;
i__13218_13306 = G__13322;
continue;
} else {
var vec__13244_13323 = cljs.core.first.call(null,seq__13214_13317__$1);
var actual_type_13324 = cljs.core.nth.call(null,vec__13244_13323,(0),null);
var __13325 = cljs.core.nth.call(null,vec__13244_13323,(1),null);
var keys_13326 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13252,actual_type_13324,f_13302], null);
var canonical_f_13327 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13251),keys_13326);
dommy.core.update_event_listeners_BANG_.call(null,elem_13251,dommy.utils.dissoc_in,keys_13326);

if(cljs.core.truth_(elem_13251.removeEventListener)){
elem_13251.removeEventListener(cljs.core.name.call(null,actual_type_13324),canonical_f_13327);
} else {
elem_13251.detachEvent(cljs.core.name.call(null,actual_type_13324),canonical_f_13327);
}

var G__13328 = cljs.core.next.call(null,seq__13214_13317__$1);
var G__13329 = null;
var G__13330 = (0);
var G__13331 = (0);
seq__13214_13303 = G__13328;
chunk__13216_13304 = G__13329;
count__13217_13305 = G__13330;
i__13218_13306 = G__13331;
continue;
}
} else {
}
}
break;
}

var G__13332 = cljs.core.next.call(null,seq__13213_13294__$1);
var G__13333 = null;
var G__13334 = (0);
var G__13335 = (0);
seq__13213_13253 = G__13332;
chunk__13220_13254 = G__13333;
count__13221_13255 = G__13334;
i__13222_13256 = G__13335;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq13208){
var G__13209 = cljs.core.first.call(null,seq13208);
var seq13208__$1 = cljs.core.next.call(null,seq13208);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13209,seq13208__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___13351 = arguments.length;
var i__7323__auto___13352 = (0);
while(true){
if((i__7323__auto___13352 < len__7322__auto___13351)){
args__7329__auto__.push((arguments[i__7323__auto___13352]));

var G__13353 = (i__7323__auto___13352 + (1));
i__7323__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__13338_13354 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_13355 = cljs.core.nth.call(null,vec__13338_13354,(0),null);
var selector_13356 = cljs.core.nth.call(null,vec__13338_13354,(1),null);
var seq__13341_13357 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__13342_13358 = null;
var count__13343_13359 = (0);
var i__13344_13360 = (0);
while(true){
if((i__13344_13360 < count__13343_13359)){
var vec__13345_13361 = cljs.core._nth.call(null,chunk__13342_13358,i__13344_13360);
var type_13362 = cljs.core.nth.call(null,vec__13345_13361,(0),null);
var f_13363 = cljs.core.nth.call(null,vec__13345_13361,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_13362,((function (seq__13341_13357,chunk__13342_13358,count__13343_13359,i__13344_13360,vec__13345_13361,type_13362,f_13363,vec__13338_13354,elem_13355,selector_13356){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_13362,dommy$core$this_fn);

return f_13363.call(null,e);
});})(seq__13341_13357,chunk__13342_13358,count__13343_13359,i__13344_13360,vec__13345_13361,type_13362,f_13363,vec__13338_13354,elem_13355,selector_13356))
);

var G__13364 = seq__13341_13357;
var G__13365 = chunk__13342_13358;
var G__13366 = count__13343_13359;
var G__13367 = (i__13344_13360 + (1));
seq__13341_13357 = G__13364;
chunk__13342_13358 = G__13365;
count__13343_13359 = G__13366;
i__13344_13360 = G__13367;
continue;
} else {
var temp__4657__auto___13368 = cljs.core.seq.call(null,seq__13341_13357);
if(temp__4657__auto___13368){
var seq__13341_13369__$1 = temp__4657__auto___13368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13341_13369__$1)){
var c__7058__auto___13370 = cljs.core.chunk_first.call(null,seq__13341_13369__$1);
var G__13371 = cljs.core.chunk_rest.call(null,seq__13341_13369__$1);
var G__13372 = c__7058__auto___13370;
var G__13373 = cljs.core.count.call(null,c__7058__auto___13370);
var G__13374 = (0);
seq__13341_13357 = G__13371;
chunk__13342_13358 = G__13372;
count__13343_13359 = G__13373;
i__13344_13360 = G__13374;
continue;
} else {
var vec__13348_13375 = cljs.core.first.call(null,seq__13341_13369__$1);
var type_13376 = cljs.core.nth.call(null,vec__13348_13375,(0),null);
var f_13377 = cljs.core.nth.call(null,vec__13348_13375,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_13376,((function (seq__13341_13357,chunk__13342_13358,count__13343_13359,i__13344_13360,vec__13348_13375,type_13376,f_13377,seq__13341_13369__$1,temp__4657__auto___13368,vec__13338_13354,elem_13355,selector_13356){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_13376,dommy$core$this_fn);

return f_13377.call(null,e);
});})(seq__13341_13357,chunk__13342_13358,count__13343_13359,i__13344_13360,vec__13348_13375,type_13376,f_13377,seq__13341_13369__$1,temp__4657__auto___13368,vec__13338_13354,elem_13355,selector_13356))
);

var G__13378 = cljs.core.next.call(null,seq__13341_13369__$1);
var G__13379 = null;
var G__13380 = (0);
var G__13381 = (0);
seq__13341_13357 = G__13378;
chunk__13342_13358 = G__13379;
count__13343_13359 = G__13380;
i__13344_13360 = G__13381;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq13336){
var G__13337 = cljs.core.first.call(null,seq13336);
var seq13336__$1 = cljs.core.next.call(null,seq13336);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13337,seq13336__$1);
});


//# sourceMappingURL=core.js.map