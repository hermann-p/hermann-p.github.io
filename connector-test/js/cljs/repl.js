// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9514){
var map__9539 = p__9514;
var map__9539__$1 = ((((!((map__9539 == null)))?((((map__9539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9539):map__9539);
var m = map__9539__$1;
var n = cljs.core.get.call(null,map__9539__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9541_9563 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9542_9564 = null;
var count__9543_9565 = (0);
var i__9544_9566 = (0);
while(true){
if((i__9544_9566 < count__9543_9565)){
var f_9567 = cljs.core._nth.call(null,chunk__9542_9564,i__9544_9566);
cljs.core.println.call(null,"  ",f_9567);

var G__9568 = seq__9541_9563;
var G__9569 = chunk__9542_9564;
var G__9570 = count__9543_9565;
var G__9571 = (i__9544_9566 + (1));
seq__9541_9563 = G__9568;
chunk__9542_9564 = G__9569;
count__9543_9565 = G__9570;
i__9544_9566 = G__9571;
continue;
} else {
var temp__4657__auto___9572 = cljs.core.seq.call(null,seq__9541_9563);
if(temp__4657__auto___9572){
var seq__9541_9573__$1 = temp__4657__auto___9572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9541_9573__$1)){
var c__7058__auto___9574 = cljs.core.chunk_first.call(null,seq__9541_9573__$1);
var G__9575 = cljs.core.chunk_rest.call(null,seq__9541_9573__$1);
var G__9576 = c__7058__auto___9574;
var G__9577 = cljs.core.count.call(null,c__7058__auto___9574);
var G__9578 = (0);
seq__9541_9563 = G__9575;
chunk__9542_9564 = G__9576;
count__9543_9565 = G__9577;
i__9544_9566 = G__9578;
continue;
} else {
var f_9579 = cljs.core.first.call(null,seq__9541_9573__$1);
cljs.core.println.call(null,"  ",f_9579);

var G__9580 = cljs.core.next.call(null,seq__9541_9573__$1);
var G__9581 = null;
var G__9582 = (0);
var G__9583 = (0);
seq__9541_9563 = G__9580;
chunk__9542_9564 = G__9581;
count__9543_9565 = G__9582;
i__9544_9566 = G__9583;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9584 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6247__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9584);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9584)))?cljs.core.second.call(null,arglists_9584):arglists_9584));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9545_9585 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9546_9586 = null;
var count__9547_9587 = (0);
var i__9548_9588 = (0);
while(true){
if((i__9548_9588 < count__9547_9587)){
var vec__9549_9589 = cljs.core._nth.call(null,chunk__9546_9586,i__9548_9588);
var name_9590 = cljs.core.nth.call(null,vec__9549_9589,(0),null);
var map__9552_9591 = cljs.core.nth.call(null,vec__9549_9589,(1),null);
var map__9552_9592__$1 = ((((!((map__9552_9591 == null)))?((((map__9552_9591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9552_9591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9552_9591):map__9552_9591);
var doc_9593 = cljs.core.get.call(null,map__9552_9592__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9594 = cljs.core.get.call(null,map__9552_9592__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9590);

cljs.core.println.call(null," ",arglists_9594);

if(cljs.core.truth_(doc_9593)){
cljs.core.println.call(null," ",doc_9593);
} else {
}

var G__9595 = seq__9545_9585;
var G__9596 = chunk__9546_9586;
var G__9597 = count__9547_9587;
var G__9598 = (i__9548_9588 + (1));
seq__9545_9585 = G__9595;
chunk__9546_9586 = G__9596;
count__9547_9587 = G__9597;
i__9548_9588 = G__9598;
continue;
} else {
var temp__4657__auto___9599 = cljs.core.seq.call(null,seq__9545_9585);
if(temp__4657__auto___9599){
var seq__9545_9600__$1 = temp__4657__auto___9599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9545_9600__$1)){
var c__7058__auto___9601 = cljs.core.chunk_first.call(null,seq__9545_9600__$1);
var G__9602 = cljs.core.chunk_rest.call(null,seq__9545_9600__$1);
var G__9603 = c__7058__auto___9601;
var G__9604 = cljs.core.count.call(null,c__7058__auto___9601);
var G__9605 = (0);
seq__9545_9585 = G__9602;
chunk__9546_9586 = G__9603;
count__9547_9587 = G__9604;
i__9548_9588 = G__9605;
continue;
} else {
var vec__9554_9606 = cljs.core.first.call(null,seq__9545_9600__$1);
var name_9607 = cljs.core.nth.call(null,vec__9554_9606,(0),null);
var map__9557_9608 = cljs.core.nth.call(null,vec__9554_9606,(1),null);
var map__9557_9609__$1 = ((((!((map__9557_9608 == null)))?((((map__9557_9608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9557_9608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9557_9608):map__9557_9608);
var doc_9610 = cljs.core.get.call(null,map__9557_9609__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9611 = cljs.core.get.call(null,map__9557_9609__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9607);

cljs.core.println.call(null," ",arglists_9611);

if(cljs.core.truth_(doc_9610)){
cljs.core.println.call(null," ",doc_9610);
} else {
}

var G__9612 = cljs.core.next.call(null,seq__9545_9600__$1);
var G__9613 = null;
var G__9614 = (0);
var G__9615 = (0);
seq__9545_9585 = G__9612;
chunk__9546_9586 = G__9613;
count__9547_9587 = G__9614;
i__9548_9588 = G__9615;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__9559 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9560 = null;
var count__9561 = (0);
var i__9562 = (0);
while(true){
if((i__9562 < count__9561)){
var role = cljs.core._nth.call(null,chunk__9560,i__9562);
var temp__4657__auto___9616__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9616__$1)){
var spec_9617 = temp__4657__auto___9616__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9617));
} else {
}

var G__9618 = seq__9559;
var G__9619 = chunk__9560;
var G__9620 = count__9561;
var G__9621 = (i__9562 + (1));
seq__9559 = G__9618;
chunk__9560 = G__9619;
count__9561 = G__9620;
i__9562 = G__9621;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__9559);
if(temp__4657__auto____$1){
var seq__9559__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9559__$1)){
var c__7058__auto__ = cljs.core.chunk_first.call(null,seq__9559__$1);
var G__9622 = cljs.core.chunk_rest.call(null,seq__9559__$1);
var G__9623 = c__7058__auto__;
var G__9624 = cljs.core.count.call(null,c__7058__auto__);
var G__9625 = (0);
seq__9559 = G__9622;
chunk__9560 = G__9623;
count__9561 = G__9624;
i__9562 = G__9625;
continue;
} else {
var role = cljs.core.first.call(null,seq__9559__$1);
var temp__4657__auto___9626__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9626__$2)){
var spec_9627 = temp__4657__auto___9626__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9627));
} else {
}

var G__9628 = cljs.core.next.call(null,seq__9559__$1);
var G__9629 = null;
var G__9630 = (0);
var G__9631 = (0);
seq__9559 = G__9628;
chunk__9560 = G__9629;
count__9561 = G__9630;
i__9562 = G__9631;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map