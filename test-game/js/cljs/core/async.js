// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9775 = [];
var len__7322__auto___9781 = arguments.length;
var i__7323__auto___9782 = (0);
while(true){
if((i__7323__auto___9782 < len__7322__auto___9781)){
args9775.push((arguments[i__7323__auto___9782]));

var G__9783 = (i__7323__auto___9782 + (1));
i__7323__auto___9782 = G__9783;
continue;
} else {
}
break;
}

var G__9777 = args9775.length;
switch (G__9777) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9775.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9778 = (function (f,blockable,meta9779){
this.f = f;
this.blockable = blockable;
this.meta9779 = meta9779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9780,meta9779__$1){
var self__ = this;
var _9780__$1 = this;
return (new cljs.core.async.t_cljs$core$async9778(self__.f,self__.blockable,meta9779__$1));
});

cljs.core.async.t_cljs$core$async9778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9780){
var self__ = this;
var _9780__$1 = this;
return self__.meta9779;
});

cljs.core.async.t_cljs$core$async9778.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9779","meta9779",919723696,null)], null);
});

cljs.core.async.t_cljs$core$async9778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9778";

cljs.core.async.t_cljs$core$async9778.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async9778");
});

cljs.core.async.__GT_t_cljs$core$async9778 = (function cljs$core$async$__GT_t_cljs$core$async9778(f__$1,blockable__$1,meta9779){
return (new cljs.core.async.t_cljs$core$async9778(f__$1,blockable__$1,meta9779));
});

}

return (new cljs.core.async.t_cljs$core$async9778(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9787 = [];
var len__7322__auto___9790 = arguments.length;
var i__7323__auto___9791 = (0);
while(true){
if((i__7323__auto___9791 < len__7322__auto___9790)){
args9787.push((arguments[i__7323__auto___9791]));

var G__9792 = (i__7323__auto___9791 + (1));
i__7323__auto___9791 = G__9792;
continue;
} else {
}
break;
}

var G__9789 = args9787.length;
switch (G__9789) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9787.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9794 = [];
var len__7322__auto___9797 = arguments.length;
var i__7323__auto___9798 = (0);
while(true){
if((i__7323__auto___9798 < len__7322__auto___9797)){
args9794.push((arguments[i__7323__auto___9798]));

var G__9799 = (i__7323__auto___9798 + (1));
i__7323__auto___9798 = G__9799;
continue;
} else {
}
break;
}

var G__9796 = args9794.length;
switch (G__9796) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9794.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9801 = [];
var len__7322__auto___9804 = arguments.length;
var i__7323__auto___9805 = (0);
while(true){
if((i__7323__auto___9805 < len__7322__auto___9804)){
args9801.push((arguments[i__7323__auto___9805]));

var G__9806 = (i__7323__auto___9805 + (1));
i__7323__auto___9805 = G__9806;
continue;
} else {
}
break;
}

var G__9803 = args9801.length;
switch (G__9803) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9801.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9808 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9808);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9808,ret){
return (function (){
return fn1.call(null,val_9808);
});})(val_9808,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9809 = [];
var len__7322__auto___9812 = arguments.length;
var i__7323__auto___9813 = (0);
while(true){
if((i__7323__auto___9813 < len__7322__auto___9812)){
args9809.push((arguments[i__7323__auto___9813]));

var G__9814 = (i__7323__auto___9813 + (1));
i__7323__auto___9813 = G__9814;
continue;
} else {
}
break;
}

var G__9811 = args9809.length;
switch (G__9811) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9809.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7162__auto___9816 = n;
var x_9817 = (0);
while(true){
if((x_9817 < n__7162__auto___9816)){
(a[x_9817] = (0));

var G__9818 = (x_9817 + (1));
x_9817 = G__9818;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9819 = (i + (1));
i = G__9819;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9823 = (function (alt_flag,flag,meta9824){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9824 = meta9824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9825,meta9824__$1){
var self__ = this;
var _9825__$1 = this;
return (new cljs.core.async.t_cljs$core$async9823(self__.alt_flag,self__.flag,meta9824__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9825){
var self__ = this;
var _9825__$1 = this;
return self__.meta9824;
});})(flag))
;

cljs.core.async.t_cljs$core$async9823.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9823.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9824","meta9824",1313391328,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9823";

cljs.core.async.t_cljs$core$async9823.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async9823");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9823 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9823(alt_flag__$1,flag__$1,meta9824){
return (new cljs.core.async.t_cljs$core$async9823(alt_flag__$1,flag__$1,meta9824));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9823(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9829 = (function (alt_handler,flag,cb,meta9830){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9830 = meta9830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9831,meta9830__$1){
var self__ = this;
var _9831__$1 = this;
return (new cljs.core.async.t_cljs$core$async9829(self__.alt_handler,self__.flag,self__.cb,meta9830__$1));
});

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9831){
var self__ = this;
var _9831__$1 = this;
return self__.meta9830;
});

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9830","meta9830",1736643207,null)], null);
});

cljs.core.async.t_cljs$core$async9829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9829";

cljs.core.async.t_cljs$core$async9829.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async9829");
});

cljs.core.async.__GT_t_cljs$core$async9829 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9829(alt_handler__$1,flag__$1,cb__$1,meta9830){
return (new cljs.core.async.t_cljs$core$async9829(alt_handler__$1,flag__$1,cb__$1,meta9830));
});

}

return (new cljs.core.async.t_cljs$core$async9829(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9832_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9832_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9833_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9833_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6247__auto__ = wport;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9834 = (i + (1));
i = G__9834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6247__auto__ = ret;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6235__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6235__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6235__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9840 = arguments.length;
var i__7323__auto___9841 = (0);
while(true){
if((i__7323__auto___9841 < len__7322__auto___9840)){
args__7329__auto__.push((arguments[i__7323__auto___9841]));

var G__9842 = (i__7323__auto___9841 + (1));
i__7323__auto___9841 = G__9842;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9837){
var map__9838 = p__9837;
var map__9838__$1 = ((((!((map__9838 == null)))?((((map__9838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9838):map__9838);
var opts = map__9838__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9835){
var G__9836 = cljs.core.first.call(null,seq9835);
var seq9835__$1 = cljs.core.next.call(null,seq9835);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9836,seq9835__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9843 = [];
var len__7322__auto___9893 = arguments.length;
var i__7323__auto___9894 = (0);
while(true){
if((i__7323__auto___9894 < len__7322__auto___9893)){
args9843.push((arguments[i__7323__auto___9894]));

var G__9895 = (i__7323__auto___9894 + (1));
i__7323__auto___9894 = G__9895;
continue;
} else {
}
break;
}

var G__9845 = args9843.length;
switch (G__9845) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9843.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9730__auto___9897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___9897){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___9897){
return (function (state_9869){
var state_val_9870 = (state_9869[(1)]);
if((state_val_9870 === (7))){
var inst_9865 = (state_9869[(2)]);
var state_9869__$1 = state_9869;
var statearr_9871_9898 = state_9869__$1;
(statearr_9871_9898[(2)] = inst_9865);

(statearr_9871_9898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (1))){
var state_9869__$1 = state_9869;
var statearr_9872_9899 = state_9869__$1;
(statearr_9872_9899[(2)] = null);

(statearr_9872_9899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (4))){
var inst_9848 = (state_9869[(7)]);
var inst_9848__$1 = (state_9869[(2)]);
var inst_9849 = (inst_9848__$1 == null);
var state_9869__$1 = (function (){var statearr_9873 = state_9869;
(statearr_9873[(7)] = inst_9848__$1);

return statearr_9873;
})();
if(cljs.core.truth_(inst_9849)){
var statearr_9874_9900 = state_9869__$1;
(statearr_9874_9900[(1)] = (5));

} else {
var statearr_9875_9901 = state_9869__$1;
(statearr_9875_9901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (13))){
var state_9869__$1 = state_9869;
var statearr_9876_9902 = state_9869__$1;
(statearr_9876_9902[(2)] = null);

(statearr_9876_9902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (6))){
var inst_9848 = (state_9869[(7)]);
var state_9869__$1 = state_9869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9869__$1,(11),to,inst_9848);
} else {
if((state_val_9870 === (3))){
var inst_9867 = (state_9869[(2)]);
var state_9869__$1 = state_9869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9869__$1,inst_9867);
} else {
if((state_val_9870 === (12))){
var state_9869__$1 = state_9869;
var statearr_9877_9903 = state_9869__$1;
(statearr_9877_9903[(2)] = null);

(statearr_9877_9903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (2))){
var state_9869__$1 = state_9869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9869__$1,(4),from);
} else {
if((state_val_9870 === (11))){
var inst_9858 = (state_9869[(2)]);
var state_9869__$1 = state_9869;
if(cljs.core.truth_(inst_9858)){
var statearr_9878_9904 = state_9869__$1;
(statearr_9878_9904[(1)] = (12));

} else {
var statearr_9879_9905 = state_9869__$1;
(statearr_9879_9905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (9))){
var state_9869__$1 = state_9869;
var statearr_9880_9906 = state_9869__$1;
(statearr_9880_9906[(2)] = null);

(statearr_9880_9906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (5))){
var state_9869__$1 = state_9869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9881_9907 = state_9869__$1;
(statearr_9881_9907[(1)] = (8));

} else {
var statearr_9882_9908 = state_9869__$1;
(statearr_9882_9908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (14))){
var inst_9863 = (state_9869[(2)]);
var state_9869__$1 = state_9869;
var statearr_9883_9909 = state_9869__$1;
(statearr_9883_9909[(2)] = inst_9863);

(statearr_9883_9909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (10))){
var inst_9855 = (state_9869[(2)]);
var state_9869__$1 = state_9869;
var statearr_9884_9910 = state_9869__$1;
(statearr_9884_9910[(2)] = inst_9855);

(statearr_9884_9910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9870 === (8))){
var inst_9852 = cljs.core.async.close_BANG_.call(null,to);
var state_9869__$1 = state_9869;
var statearr_9885_9911 = state_9869__$1;
(statearr_9885_9911[(2)] = inst_9852);

(statearr_9885_9911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___9897))
;
return ((function (switch__9618__auto__,c__9730__auto___9897){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_9889 = [null,null,null,null,null,null,null,null];
(statearr_9889[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_9889[(1)] = (1));

return statearr_9889;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_9869){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_9869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e9890){if((e9890 instanceof Object)){
var ex__9622__auto__ = e9890;
var statearr_9891_9912 = state_9869;
(statearr_9891_9912[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9913 = state_9869;
state_9869 = G__9913;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_9869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_9869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___9897))
})();
var state__9732__auto__ = (function (){var statearr_9892 = f__9731__auto__.call(null);
(statearr_9892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___9897);

return statearr_9892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___9897))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10101){
var vec__10102 = p__10101;
var v = cljs.core.nth.call(null,vec__10102,(0),null);
var p = cljs.core.nth.call(null,vec__10102,(1),null);
var job = vec__10102;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9730__auto___10288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___10288,res,vec__10102,v,p,job,jobs,results){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___10288,res,vec__10102,v,p,job,jobs,results){
return (function (state_10109){
var state_val_10110 = (state_10109[(1)]);
if((state_val_10110 === (1))){
var state_10109__$1 = state_10109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10109__$1,(2),res,v);
} else {
if((state_val_10110 === (2))){
var inst_10106 = (state_10109[(2)]);
var inst_10107 = cljs.core.async.close_BANG_.call(null,res);
var state_10109__$1 = (function (){var statearr_10111 = state_10109;
(statearr_10111[(7)] = inst_10106);

return statearr_10111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10109__$1,inst_10107);
} else {
return null;
}
}
});})(c__9730__auto___10288,res,vec__10102,v,p,job,jobs,results))
;
return ((function (switch__9618__auto__,c__9730__auto___10288,res,vec__10102,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0 = (function (){
var statearr_10115 = [null,null,null,null,null,null,null,null];
(statearr_10115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__);

(statearr_10115[(1)] = (1));

return statearr_10115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1 = (function (state_10109){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10116){if((e10116 instanceof Object)){
var ex__9622__auto__ = e10116;
var statearr_10117_10289 = state_10109;
(statearr_10117_10289[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10290 = state_10109;
state_10109 = G__10290;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = function(state_10109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1.call(this,state_10109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___10288,res,vec__10102,v,p,job,jobs,results))
})();
var state__9732__auto__ = (function (){var statearr_10118 = f__9731__auto__.call(null);
(statearr_10118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___10288);

return statearr_10118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___10288,res,vec__10102,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10119){
var vec__10120 = p__10119;
var v = cljs.core.nth.call(null,vec__10120,(0),null);
var p = cljs.core.nth.call(null,vec__10120,(1),null);
var job = vec__10120;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7162__auto___10291 = n;
var __10292 = (0);
while(true){
if((__10292 < n__7162__auto___10291)){
var G__10123_10293 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10123_10293) {
case "compute":
var c__9730__auto___10295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10292,c__9730__auto___10295,G__10123_10293,n__7162__auto___10291,jobs,results,process,async){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (__10292,c__9730__auto___10295,G__10123_10293,n__7162__auto___10291,jobs,results,process,async){
return (function (state_10136){
var state_val_10137 = (state_10136[(1)]);
if((state_val_10137 === (1))){
var state_10136__$1 = state_10136;
var statearr_10138_10296 = state_10136__$1;
(statearr_10138_10296[(2)] = null);

(statearr_10138_10296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10137 === (2))){
var state_10136__$1 = state_10136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10136__$1,(4),jobs);
} else {
if((state_val_10137 === (3))){
var inst_10134 = (state_10136[(2)]);
var state_10136__$1 = state_10136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10136__$1,inst_10134);
} else {
if((state_val_10137 === (4))){
var inst_10126 = (state_10136[(2)]);
var inst_10127 = process.call(null,inst_10126);
var state_10136__$1 = state_10136;
if(cljs.core.truth_(inst_10127)){
var statearr_10139_10297 = state_10136__$1;
(statearr_10139_10297[(1)] = (5));

} else {
var statearr_10140_10298 = state_10136__$1;
(statearr_10140_10298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10137 === (5))){
var state_10136__$1 = state_10136;
var statearr_10141_10299 = state_10136__$1;
(statearr_10141_10299[(2)] = null);

(statearr_10141_10299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10137 === (6))){
var state_10136__$1 = state_10136;
var statearr_10142_10300 = state_10136__$1;
(statearr_10142_10300[(2)] = null);

(statearr_10142_10300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10137 === (7))){
var inst_10132 = (state_10136[(2)]);
var state_10136__$1 = state_10136;
var statearr_10143_10301 = state_10136__$1;
(statearr_10143_10301[(2)] = inst_10132);

(statearr_10143_10301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10292,c__9730__auto___10295,G__10123_10293,n__7162__auto___10291,jobs,results,process,async))
;
return ((function (__10292,switch__9618__auto__,c__9730__auto___10295,G__10123_10293,n__7162__auto___10291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0 = (function (){
var statearr_10147 = [null,null,null,null,null,null,null];
(statearr_10147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__);

(statearr_10147[(1)] = (1));

return statearr_10147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1 = (function (state_10136){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10148){if((e10148 instanceof Object)){
var ex__9622__auto__ = e10148;
var statearr_10149_10302 = state_10136;
(statearr_10149_10302[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10303 = state_10136;
state_10136 = G__10303;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = function(state_10136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1.call(this,state_10136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__;
})()
;})(__10292,switch__9618__auto__,c__9730__auto___10295,G__10123_10293,n__7162__auto___10291,jobs,results,process,async))
})();
var state__9732__auto__ = (function (){var statearr_10150 = f__9731__auto__.call(null);
(statearr_10150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___10295);

return statearr_10150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(__10292,c__9730__auto___10295,G__10123_10293,n__7162__auto___10291,jobs,results,process,async))
);


break;
case "async":
var c__9730__auto___10304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10292,c__9730__auto___10304,G__10123_10293,n__7162__auto___10291,jobs,results,process,async){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (__10292,c__9730__auto___10304,G__10123_10293,n__7162__auto___10291,jobs,results,process,async){
return (function (state_10163){
var state_val_10164 = (state_10163[(1)]);
if((state_val_10164 === (1))){
var state_10163__$1 = state_10163;
var statearr_10165_10305 = state_10163__$1;
(statearr_10165_10305[(2)] = null);

(statearr_10165_10305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10164 === (2))){
var state_10163__$1 = state_10163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10163__$1,(4),jobs);
} else {
if((state_val_10164 === (3))){
var inst_10161 = (state_10163[(2)]);
var state_10163__$1 = state_10163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10163__$1,inst_10161);
} else {
if((state_val_10164 === (4))){
var inst_10153 = (state_10163[(2)]);
var inst_10154 = async.call(null,inst_10153);
var state_10163__$1 = state_10163;
if(cljs.core.truth_(inst_10154)){
var statearr_10166_10306 = state_10163__$1;
(statearr_10166_10306[(1)] = (5));

} else {
var statearr_10167_10307 = state_10163__$1;
(statearr_10167_10307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10164 === (5))){
var state_10163__$1 = state_10163;
var statearr_10168_10308 = state_10163__$1;
(statearr_10168_10308[(2)] = null);

(statearr_10168_10308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10164 === (6))){
var state_10163__$1 = state_10163;
var statearr_10169_10309 = state_10163__$1;
(statearr_10169_10309[(2)] = null);

(statearr_10169_10309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10164 === (7))){
var inst_10159 = (state_10163[(2)]);
var state_10163__$1 = state_10163;
var statearr_10170_10310 = state_10163__$1;
(statearr_10170_10310[(2)] = inst_10159);

(statearr_10170_10310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10292,c__9730__auto___10304,G__10123_10293,n__7162__auto___10291,jobs,results,process,async))
;
return ((function (__10292,switch__9618__auto__,c__9730__auto___10304,G__10123_10293,n__7162__auto___10291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0 = (function (){
var statearr_10174 = [null,null,null,null,null,null,null];
(statearr_10174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__);

(statearr_10174[(1)] = (1));

return statearr_10174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1 = (function (state_10163){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10175){if((e10175 instanceof Object)){
var ex__9622__auto__ = e10175;
var statearr_10176_10311 = state_10163;
(statearr_10176_10311[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10312 = state_10163;
state_10163 = G__10312;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = function(state_10163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1.call(this,state_10163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__;
})()
;})(__10292,switch__9618__auto__,c__9730__auto___10304,G__10123_10293,n__7162__auto___10291,jobs,results,process,async))
})();
var state__9732__auto__ = (function (){var statearr_10177 = f__9731__auto__.call(null);
(statearr_10177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___10304);

return statearr_10177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(__10292,c__9730__auto___10304,G__10123_10293,n__7162__auto___10291,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10313 = (__10292 + (1));
__10292 = G__10313;
continue;
} else {
}
break;
}

var c__9730__auto___10314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___10314,jobs,results,process,async){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___10314,jobs,results,process,async){
return (function (state_10199){
var state_val_10200 = (state_10199[(1)]);
if((state_val_10200 === (1))){
var state_10199__$1 = state_10199;
var statearr_10201_10315 = state_10199__$1;
(statearr_10201_10315[(2)] = null);

(statearr_10201_10315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10200 === (2))){
var state_10199__$1 = state_10199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10199__$1,(4),from);
} else {
if((state_val_10200 === (3))){
var inst_10197 = (state_10199[(2)]);
var state_10199__$1 = state_10199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10199__$1,inst_10197);
} else {
if((state_val_10200 === (4))){
var inst_10180 = (state_10199[(7)]);
var inst_10180__$1 = (state_10199[(2)]);
var inst_10181 = (inst_10180__$1 == null);
var state_10199__$1 = (function (){var statearr_10202 = state_10199;
(statearr_10202[(7)] = inst_10180__$1);

return statearr_10202;
})();
if(cljs.core.truth_(inst_10181)){
var statearr_10203_10316 = state_10199__$1;
(statearr_10203_10316[(1)] = (5));

} else {
var statearr_10204_10317 = state_10199__$1;
(statearr_10204_10317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10200 === (5))){
var inst_10183 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10199__$1 = state_10199;
var statearr_10205_10318 = state_10199__$1;
(statearr_10205_10318[(2)] = inst_10183);

(statearr_10205_10318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10200 === (6))){
var inst_10185 = (state_10199[(8)]);
var inst_10180 = (state_10199[(7)]);
var inst_10185__$1 = cljs.core.async.chan.call(null,(1));
var inst_10186 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10187 = [inst_10180,inst_10185__$1];
var inst_10188 = (new cljs.core.PersistentVector(null,2,(5),inst_10186,inst_10187,null));
var state_10199__$1 = (function (){var statearr_10206 = state_10199;
(statearr_10206[(8)] = inst_10185__$1);

return statearr_10206;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10199__$1,(8),jobs,inst_10188);
} else {
if((state_val_10200 === (7))){
var inst_10195 = (state_10199[(2)]);
var state_10199__$1 = state_10199;
var statearr_10207_10319 = state_10199__$1;
(statearr_10207_10319[(2)] = inst_10195);

(statearr_10207_10319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10200 === (8))){
var inst_10185 = (state_10199[(8)]);
var inst_10190 = (state_10199[(2)]);
var state_10199__$1 = (function (){var statearr_10208 = state_10199;
(statearr_10208[(9)] = inst_10190);

return statearr_10208;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10199__$1,(9),results,inst_10185);
} else {
if((state_val_10200 === (9))){
var inst_10192 = (state_10199[(2)]);
var state_10199__$1 = (function (){var statearr_10209 = state_10199;
(statearr_10209[(10)] = inst_10192);

return statearr_10209;
})();
var statearr_10210_10320 = state_10199__$1;
(statearr_10210_10320[(2)] = null);

(statearr_10210_10320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___10314,jobs,results,process,async))
;
return ((function (switch__9618__auto__,c__9730__auto___10314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0 = (function (){
var statearr_10214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__);

(statearr_10214[(1)] = (1));

return statearr_10214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1 = (function (state_10199){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10215){if((e10215 instanceof Object)){
var ex__9622__auto__ = e10215;
var statearr_10216_10321 = state_10199;
(statearr_10216_10321[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10322 = state_10199;
state_10199 = G__10322;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = function(state_10199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1.call(this,state_10199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___10314,jobs,results,process,async))
})();
var state__9732__auto__ = (function (){var statearr_10217 = f__9731__auto__.call(null);
(statearr_10217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___10314);

return statearr_10217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___10314,jobs,results,process,async))
);


var c__9730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto__,jobs,results,process,async){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto__,jobs,results,process,async){
return (function (state_10255){
var state_val_10256 = (state_10255[(1)]);
if((state_val_10256 === (7))){
var inst_10251 = (state_10255[(2)]);
var state_10255__$1 = state_10255;
var statearr_10257_10323 = state_10255__$1;
(statearr_10257_10323[(2)] = inst_10251);

(statearr_10257_10323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (20))){
var state_10255__$1 = state_10255;
var statearr_10258_10324 = state_10255__$1;
(statearr_10258_10324[(2)] = null);

(statearr_10258_10324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (1))){
var state_10255__$1 = state_10255;
var statearr_10259_10325 = state_10255__$1;
(statearr_10259_10325[(2)] = null);

(statearr_10259_10325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (4))){
var inst_10220 = (state_10255[(7)]);
var inst_10220__$1 = (state_10255[(2)]);
var inst_10221 = (inst_10220__$1 == null);
var state_10255__$1 = (function (){var statearr_10260 = state_10255;
(statearr_10260[(7)] = inst_10220__$1);

return statearr_10260;
})();
if(cljs.core.truth_(inst_10221)){
var statearr_10261_10326 = state_10255__$1;
(statearr_10261_10326[(1)] = (5));

} else {
var statearr_10262_10327 = state_10255__$1;
(statearr_10262_10327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (15))){
var inst_10233 = (state_10255[(8)]);
var state_10255__$1 = state_10255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10255__$1,(18),to,inst_10233);
} else {
if((state_val_10256 === (21))){
var inst_10246 = (state_10255[(2)]);
var state_10255__$1 = state_10255;
var statearr_10263_10328 = state_10255__$1;
(statearr_10263_10328[(2)] = inst_10246);

(statearr_10263_10328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (13))){
var inst_10248 = (state_10255[(2)]);
var state_10255__$1 = (function (){var statearr_10264 = state_10255;
(statearr_10264[(9)] = inst_10248);

return statearr_10264;
})();
var statearr_10265_10329 = state_10255__$1;
(statearr_10265_10329[(2)] = null);

(statearr_10265_10329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (6))){
var inst_10220 = (state_10255[(7)]);
var state_10255__$1 = state_10255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10255__$1,(11),inst_10220);
} else {
if((state_val_10256 === (17))){
var inst_10241 = (state_10255[(2)]);
var state_10255__$1 = state_10255;
if(cljs.core.truth_(inst_10241)){
var statearr_10266_10330 = state_10255__$1;
(statearr_10266_10330[(1)] = (19));

} else {
var statearr_10267_10331 = state_10255__$1;
(statearr_10267_10331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (3))){
var inst_10253 = (state_10255[(2)]);
var state_10255__$1 = state_10255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10255__$1,inst_10253);
} else {
if((state_val_10256 === (12))){
var inst_10230 = (state_10255[(10)]);
var state_10255__$1 = state_10255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10255__$1,(14),inst_10230);
} else {
if((state_val_10256 === (2))){
var state_10255__$1 = state_10255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10255__$1,(4),results);
} else {
if((state_val_10256 === (19))){
var state_10255__$1 = state_10255;
var statearr_10268_10332 = state_10255__$1;
(statearr_10268_10332[(2)] = null);

(statearr_10268_10332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (11))){
var inst_10230 = (state_10255[(2)]);
var state_10255__$1 = (function (){var statearr_10269 = state_10255;
(statearr_10269[(10)] = inst_10230);

return statearr_10269;
})();
var statearr_10270_10333 = state_10255__$1;
(statearr_10270_10333[(2)] = null);

(statearr_10270_10333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (9))){
var state_10255__$1 = state_10255;
var statearr_10271_10334 = state_10255__$1;
(statearr_10271_10334[(2)] = null);

(statearr_10271_10334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (5))){
var state_10255__$1 = state_10255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10272_10335 = state_10255__$1;
(statearr_10272_10335[(1)] = (8));

} else {
var statearr_10273_10336 = state_10255__$1;
(statearr_10273_10336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (14))){
var inst_10233 = (state_10255[(8)]);
var inst_10235 = (state_10255[(11)]);
var inst_10233__$1 = (state_10255[(2)]);
var inst_10234 = (inst_10233__$1 == null);
var inst_10235__$1 = cljs.core.not.call(null,inst_10234);
var state_10255__$1 = (function (){var statearr_10274 = state_10255;
(statearr_10274[(8)] = inst_10233__$1);

(statearr_10274[(11)] = inst_10235__$1);

return statearr_10274;
})();
if(inst_10235__$1){
var statearr_10275_10337 = state_10255__$1;
(statearr_10275_10337[(1)] = (15));

} else {
var statearr_10276_10338 = state_10255__$1;
(statearr_10276_10338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (16))){
var inst_10235 = (state_10255[(11)]);
var state_10255__$1 = state_10255;
var statearr_10277_10339 = state_10255__$1;
(statearr_10277_10339[(2)] = inst_10235);

(statearr_10277_10339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (10))){
var inst_10227 = (state_10255[(2)]);
var state_10255__$1 = state_10255;
var statearr_10278_10340 = state_10255__$1;
(statearr_10278_10340[(2)] = inst_10227);

(statearr_10278_10340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (18))){
var inst_10238 = (state_10255[(2)]);
var state_10255__$1 = state_10255;
var statearr_10279_10341 = state_10255__$1;
(statearr_10279_10341[(2)] = inst_10238);

(statearr_10279_10341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10256 === (8))){
var inst_10224 = cljs.core.async.close_BANG_.call(null,to);
var state_10255__$1 = state_10255;
var statearr_10280_10342 = state_10255__$1;
(statearr_10280_10342[(2)] = inst_10224);

(statearr_10280_10342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto__,jobs,results,process,async))
;
return ((function (switch__9618__auto__,c__9730__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0 = (function (){
var statearr_10284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__);

(statearr_10284[(1)] = (1));

return statearr_10284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1 = (function (state_10255){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10285){if((e10285 instanceof Object)){
var ex__9622__auto__ = e10285;
var statearr_10286_10343 = state_10255;
(statearr_10286_10343[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10344 = state_10255;
state_10255 = G__10344;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__ = function(state_10255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1.call(this,state_10255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto__,jobs,results,process,async))
})();
var state__9732__auto__ = (function (){var statearr_10287 = f__9731__auto__.call(null);
(statearr_10287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto__);

return statearr_10287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto__,jobs,results,process,async))
);

return c__9730__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10345 = [];
var len__7322__auto___10348 = arguments.length;
var i__7323__auto___10349 = (0);
while(true){
if((i__7323__auto___10349 < len__7322__auto___10348)){
args10345.push((arguments[i__7323__auto___10349]));

var G__10350 = (i__7323__auto___10349 + (1));
i__7323__auto___10349 = G__10350;
continue;
} else {
}
break;
}

var G__10347 = args10345.length;
switch (G__10347) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10345.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args10352 = [];
var len__7322__auto___10355 = arguments.length;
var i__7323__auto___10356 = (0);
while(true){
if((i__7323__auto___10356 < len__7322__auto___10355)){
args10352.push((arguments[i__7323__auto___10356]));

var G__10357 = (i__7323__auto___10356 + (1));
i__7323__auto___10356 = G__10357;
continue;
} else {
}
break;
}

var G__10354 = args10352.length;
switch (G__10354) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10352.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args10359 = [];
var len__7322__auto___10412 = arguments.length;
var i__7323__auto___10413 = (0);
while(true){
if((i__7323__auto___10413 < len__7322__auto___10412)){
args10359.push((arguments[i__7323__auto___10413]));

var G__10414 = (i__7323__auto___10413 + (1));
i__7323__auto___10413 = G__10414;
continue;
} else {
}
break;
}

var G__10361 = args10359.length;
switch (G__10361) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10359.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9730__auto___10416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___10416,tc,fc){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___10416,tc,fc){
return (function (state_10387){
var state_val_10388 = (state_10387[(1)]);
if((state_val_10388 === (7))){
var inst_10383 = (state_10387[(2)]);
var state_10387__$1 = state_10387;
var statearr_10389_10417 = state_10387__$1;
(statearr_10389_10417[(2)] = inst_10383);

(statearr_10389_10417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (1))){
var state_10387__$1 = state_10387;
var statearr_10390_10418 = state_10387__$1;
(statearr_10390_10418[(2)] = null);

(statearr_10390_10418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (4))){
var inst_10364 = (state_10387[(7)]);
var inst_10364__$1 = (state_10387[(2)]);
var inst_10365 = (inst_10364__$1 == null);
var state_10387__$1 = (function (){var statearr_10391 = state_10387;
(statearr_10391[(7)] = inst_10364__$1);

return statearr_10391;
})();
if(cljs.core.truth_(inst_10365)){
var statearr_10392_10419 = state_10387__$1;
(statearr_10392_10419[(1)] = (5));

} else {
var statearr_10393_10420 = state_10387__$1;
(statearr_10393_10420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (13))){
var state_10387__$1 = state_10387;
var statearr_10394_10421 = state_10387__$1;
(statearr_10394_10421[(2)] = null);

(statearr_10394_10421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (6))){
var inst_10364 = (state_10387[(7)]);
var inst_10370 = p.call(null,inst_10364);
var state_10387__$1 = state_10387;
if(cljs.core.truth_(inst_10370)){
var statearr_10395_10422 = state_10387__$1;
(statearr_10395_10422[(1)] = (9));

} else {
var statearr_10396_10423 = state_10387__$1;
(statearr_10396_10423[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (3))){
var inst_10385 = (state_10387[(2)]);
var state_10387__$1 = state_10387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10387__$1,inst_10385);
} else {
if((state_val_10388 === (12))){
var state_10387__$1 = state_10387;
var statearr_10397_10424 = state_10387__$1;
(statearr_10397_10424[(2)] = null);

(statearr_10397_10424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (2))){
var state_10387__$1 = state_10387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10387__$1,(4),ch);
} else {
if((state_val_10388 === (11))){
var inst_10364 = (state_10387[(7)]);
var inst_10374 = (state_10387[(2)]);
var state_10387__$1 = state_10387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10387__$1,(8),inst_10374,inst_10364);
} else {
if((state_val_10388 === (9))){
var state_10387__$1 = state_10387;
var statearr_10398_10425 = state_10387__$1;
(statearr_10398_10425[(2)] = tc);

(statearr_10398_10425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (5))){
var inst_10367 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10368 = cljs.core.async.close_BANG_.call(null,fc);
var state_10387__$1 = (function (){var statearr_10399 = state_10387;
(statearr_10399[(8)] = inst_10367);

return statearr_10399;
})();
var statearr_10400_10426 = state_10387__$1;
(statearr_10400_10426[(2)] = inst_10368);

(statearr_10400_10426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (14))){
var inst_10381 = (state_10387[(2)]);
var state_10387__$1 = state_10387;
var statearr_10401_10427 = state_10387__$1;
(statearr_10401_10427[(2)] = inst_10381);

(statearr_10401_10427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (10))){
var state_10387__$1 = state_10387;
var statearr_10402_10428 = state_10387__$1;
(statearr_10402_10428[(2)] = fc);

(statearr_10402_10428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (8))){
var inst_10376 = (state_10387[(2)]);
var state_10387__$1 = state_10387;
if(cljs.core.truth_(inst_10376)){
var statearr_10403_10429 = state_10387__$1;
(statearr_10403_10429[(1)] = (12));

} else {
var statearr_10404_10430 = state_10387__$1;
(statearr_10404_10430[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___10416,tc,fc))
;
return ((function (switch__9618__auto__,c__9730__auto___10416,tc,fc){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_10408 = [null,null,null,null,null,null,null,null,null];
(statearr_10408[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_10408[(1)] = (1));

return statearr_10408;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_10387){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10409){if((e10409 instanceof Object)){
var ex__9622__auto__ = e10409;
var statearr_10410_10431 = state_10387;
(statearr_10410_10431[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10432 = state_10387;
state_10387 = G__10432;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_10387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_10387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___10416,tc,fc))
})();
var state__9732__auto__ = (function (){var statearr_10411 = f__9731__auto__.call(null);
(statearr_10411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___10416);

return statearr_10411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___10416,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto__){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto__){
return (function (state_10496){
var state_val_10497 = (state_10496[(1)]);
if((state_val_10497 === (7))){
var inst_10492 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
var statearr_10498_10519 = state_10496__$1;
(statearr_10498_10519[(2)] = inst_10492);

(statearr_10498_10519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (1))){
var inst_10476 = init;
var state_10496__$1 = (function (){var statearr_10499 = state_10496;
(statearr_10499[(7)] = inst_10476);

return statearr_10499;
})();
var statearr_10500_10520 = state_10496__$1;
(statearr_10500_10520[(2)] = null);

(statearr_10500_10520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (4))){
var inst_10479 = (state_10496[(8)]);
var inst_10479__$1 = (state_10496[(2)]);
var inst_10480 = (inst_10479__$1 == null);
var state_10496__$1 = (function (){var statearr_10501 = state_10496;
(statearr_10501[(8)] = inst_10479__$1);

return statearr_10501;
})();
if(cljs.core.truth_(inst_10480)){
var statearr_10502_10521 = state_10496__$1;
(statearr_10502_10521[(1)] = (5));

} else {
var statearr_10503_10522 = state_10496__$1;
(statearr_10503_10522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (6))){
var inst_10476 = (state_10496[(7)]);
var inst_10479 = (state_10496[(8)]);
var inst_10483 = (state_10496[(9)]);
var inst_10483__$1 = f.call(null,inst_10476,inst_10479);
var inst_10484 = cljs.core.reduced_QMARK_.call(null,inst_10483__$1);
var state_10496__$1 = (function (){var statearr_10504 = state_10496;
(statearr_10504[(9)] = inst_10483__$1);

return statearr_10504;
})();
if(inst_10484){
var statearr_10505_10523 = state_10496__$1;
(statearr_10505_10523[(1)] = (8));

} else {
var statearr_10506_10524 = state_10496__$1;
(statearr_10506_10524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (3))){
var inst_10494 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10496__$1,inst_10494);
} else {
if((state_val_10497 === (2))){
var state_10496__$1 = state_10496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10496__$1,(4),ch);
} else {
if((state_val_10497 === (9))){
var inst_10483 = (state_10496[(9)]);
var inst_10476 = inst_10483;
var state_10496__$1 = (function (){var statearr_10507 = state_10496;
(statearr_10507[(7)] = inst_10476);

return statearr_10507;
})();
var statearr_10508_10525 = state_10496__$1;
(statearr_10508_10525[(2)] = null);

(statearr_10508_10525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (5))){
var inst_10476 = (state_10496[(7)]);
var state_10496__$1 = state_10496;
var statearr_10509_10526 = state_10496__$1;
(statearr_10509_10526[(2)] = inst_10476);

(statearr_10509_10526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (10))){
var inst_10490 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
var statearr_10510_10527 = state_10496__$1;
(statearr_10510_10527[(2)] = inst_10490);

(statearr_10510_10527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (8))){
var inst_10483 = (state_10496[(9)]);
var inst_10486 = cljs.core.deref.call(null,inst_10483);
var state_10496__$1 = state_10496;
var statearr_10511_10528 = state_10496__$1;
(statearr_10511_10528[(2)] = inst_10486);

(statearr_10511_10528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto__))
;
return ((function (switch__9618__auto__,c__9730__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9619__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9619__auto____0 = (function (){
var statearr_10515 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10515[(0)] = cljs$core$async$reduce_$_state_machine__9619__auto__);

(statearr_10515[(1)] = (1));

return statearr_10515;
});
var cljs$core$async$reduce_$_state_machine__9619__auto____1 = (function (state_10496){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10516){if((e10516 instanceof Object)){
var ex__9622__auto__ = e10516;
var statearr_10517_10529 = state_10496;
(statearr_10517_10529[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10530 = state_10496;
state_10496 = G__10530;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9619__auto__ = function(state_10496){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9619__auto____1.call(this,state_10496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9619__auto____0;
cljs$core$async$reduce_$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9619__auto____1;
return cljs$core$async$reduce_$_state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto__))
})();
var state__9732__auto__ = (function (){var statearr_10518 = f__9731__auto__.call(null);
(statearr_10518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto__);

return statearr_10518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto__))
);

return c__9730__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10531 = [];
var len__7322__auto___10583 = arguments.length;
var i__7323__auto___10584 = (0);
while(true){
if((i__7323__auto___10584 < len__7322__auto___10583)){
args10531.push((arguments[i__7323__auto___10584]));

var G__10585 = (i__7323__auto___10584 + (1));
i__7323__auto___10584 = G__10585;
continue;
} else {
}
break;
}

var G__10533 = args10531.length;
switch (G__10533) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10531.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto__){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto__){
return (function (state_10558){
var state_val_10559 = (state_10558[(1)]);
if((state_val_10559 === (7))){
var inst_10540 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10560_10587 = state_10558__$1;
(statearr_10560_10587[(2)] = inst_10540);

(statearr_10560_10587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (1))){
var inst_10534 = cljs.core.seq.call(null,coll);
var inst_10535 = inst_10534;
var state_10558__$1 = (function (){var statearr_10561 = state_10558;
(statearr_10561[(7)] = inst_10535);

return statearr_10561;
})();
var statearr_10562_10588 = state_10558__$1;
(statearr_10562_10588[(2)] = null);

(statearr_10562_10588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (4))){
var inst_10535 = (state_10558[(7)]);
var inst_10538 = cljs.core.first.call(null,inst_10535);
var state_10558__$1 = state_10558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10558__$1,(7),ch,inst_10538);
} else {
if((state_val_10559 === (13))){
var inst_10552 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10563_10589 = state_10558__$1;
(statearr_10563_10589[(2)] = inst_10552);

(statearr_10563_10589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (6))){
var inst_10543 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
if(cljs.core.truth_(inst_10543)){
var statearr_10564_10590 = state_10558__$1;
(statearr_10564_10590[(1)] = (8));

} else {
var statearr_10565_10591 = state_10558__$1;
(statearr_10565_10591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (3))){
var inst_10556 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10558__$1,inst_10556);
} else {
if((state_val_10559 === (12))){
var state_10558__$1 = state_10558;
var statearr_10566_10592 = state_10558__$1;
(statearr_10566_10592[(2)] = null);

(statearr_10566_10592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (2))){
var inst_10535 = (state_10558[(7)]);
var state_10558__$1 = state_10558;
if(cljs.core.truth_(inst_10535)){
var statearr_10567_10593 = state_10558__$1;
(statearr_10567_10593[(1)] = (4));

} else {
var statearr_10568_10594 = state_10558__$1;
(statearr_10568_10594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (11))){
var inst_10549 = cljs.core.async.close_BANG_.call(null,ch);
var state_10558__$1 = state_10558;
var statearr_10569_10595 = state_10558__$1;
(statearr_10569_10595[(2)] = inst_10549);

(statearr_10569_10595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (9))){
var state_10558__$1 = state_10558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10570_10596 = state_10558__$1;
(statearr_10570_10596[(1)] = (11));

} else {
var statearr_10571_10597 = state_10558__$1;
(statearr_10571_10597[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (5))){
var inst_10535 = (state_10558[(7)]);
var state_10558__$1 = state_10558;
var statearr_10572_10598 = state_10558__$1;
(statearr_10572_10598[(2)] = inst_10535);

(statearr_10572_10598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (10))){
var inst_10554 = (state_10558[(2)]);
var state_10558__$1 = state_10558;
var statearr_10573_10599 = state_10558__$1;
(statearr_10573_10599[(2)] = inst_10554);

(statearr_10573_10599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10559 === (8))){
var inst_10535 = (state_10558[(7)]);
var inst_10545 = cljs.core.next.call(null,inst_10535);
var inst_10535__$1 = inst_10545;
var state_10558__$1 = (function (){var statearr_10574 = state_10558;
(statearr_10574[(7)] = inst_10535__$1);

return statearr_10574;
})();
var statearr_10575_10600 = state_10558__$1;
(statearr_10575_10600[(2)] = null);

(statearr_10575_10600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto__))
;
return ((function (switch__9618__auto__,c__9730__auto__){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_10579 = [null,null,null,null,null,null,null,null];
(statearr_10579[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_10579[(1)] = (1));

return statearr_10579;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_10558){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e10580){if((e10580 instanceof Object)){
var ex__9622__auto__ = e10580;
var statearr_10581_10601 = state_10558;
(statearr_10581_10601[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10602 = state_10558;
state_10558 = G__10602;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_10558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_10558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto__))
})();
var state__9732__auto__ = (function (){var statearr_10582 = f__9731__auto__.call(null);
(statearr_10582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto__);

return statearr_10582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto__))
);

return c__9730__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6910__auto__ = (((_ == null))?null:_);
var m__6911__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,_);
} else {
var m__6911__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6911__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m);
} else {
var m__6911__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10828 = (function (mult,ch,cs,meta10829){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10829 = meta10829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10830,meta10829__$1){
var self__ = this;
var _10830__$1 = this;
return (new cljs.core.async.t_cljs$core$async10828(self__.mult,self__.ch,self__.cs,meta10829__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10830){
var self__ = this;
var _10830__$1 = this;
return self__.meta10829;
});})(cs))
;

cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10828.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10828.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10829","meta10829",1997871064,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10828";

cljs.core.async.t_cljs$core$async10828.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async10828");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10828 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10828(mult__$1,ch__$1,cs__$1,meta10829){
return (new cljs.core.async.t_cljs$core$async10828(mult__$1,ch__$1,cs__$1,meta10829));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10828(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9730__auto___11053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___11053,cs,m,dchan,dctr,done){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___11053,cs,m,dchan,dctr,done){
return (function (state_10965){
var state_val_10966 = (state_10965[(1)]);
if((state_val_10966 === (7))){
var inst_10961 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10967_11054 = state_10965__$1;
(statearr_10967_11054[(2)] = inst_10961);

(statearr_10967_11054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (20))){
var inst_10864 = (state_10965[(7)]);
var inst_10876 = cljs.core.first.call(null,inst_10864);
var inst_10877 = cljs.core.nth.call(null,inst_10876,(0),null);
var inst_10878 = cljs.core.nth.call(null,inst_10876,(1),null);
var state_10965__$1 = (function (){var statearr_10968 = state_10965;
(statearr_10968[(8)] = inst_10877);

return statearr_10968;
})();
if(cljs.core.truth_(inst_10878)){
var statearr_10969_11055 = state_10965__$1;
(statearr_10969_11055[(1)] = (22));

} else {
var statearr_10970_11056 = state_10965__$1;
(statearr_10970_11056[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (27))){
var inst_10906 = (state_10965[(9)]);
var inst_10908 = (state_10965[(10)]);
var inst_10833 = (state_10965[(11)]);
var inst_10913 = (state_10965[(12)]);
var inst_10913__$1 = cljs.core._nth.call(null,inst_10906,inst_10908);
var inst_10914 = cljs.core.async.put_BANG_.call(null,inst_10913__$1,inst_10833,done);
var state_10965__$1 = (function (){var statearr_10971 = state_10965;
(statearr_10971[(12)] = inst_10913__$1);

return statearr_10971;
})();
if(cljs.core.truth_(inst_10914)){
var statearr_10972_11057 = state_10965__$1;
(statearr_10972_11057[(1)] = (30));

} else {
var statearr_10973_11058 = state_10965__$1;
(statearr_10973_11058[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (1))){
var state_10965__$1 = state_10965;
var statearr_10974_11059 = state_10965__$1;
(statearr_10974_11059[(2)] = null);

(statearr_10974_11059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (24))){
var inst_10864 = (state_10965[(7)]);
var inst_10883 = (state_10965[(2)]);
var inst_10884 = cljs.core.next.call(null,inst_10864);
var inst_10842 = inst_10884;
var inst_10843 = null;
var inst_10844 = (0);
var inst_10845 = (0);
var state_10965__$1 = (function (){var statearr_10975 = state_10965;
(statearr_10975[(13)] = inst_10842);

(statearr_10975[(14)] = inst_10843);

(statearr_10975[(15)] = inst_10883);

(statearr_10975[(16)] = inst_10845);

(statearr_10975[(17)] = inst_10844);

return statearr_10975;
})();
var statearr_10976_11060 = state_10965__$1;
(statearr_10976_11060[(2)] = null);

(statearr_10976_11060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (39))){
var state_10965__$1 = state_10965;
var statearr_10980_11061 = state_10965__$1;
(statearr_10980_11061[(2)] = null);

(statearr_10980_11061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (4))){
var inst_10833 = (state_10965[(11)]);
var inst_10833__$1 = (state_10965[(2)]);
var inst_10834 = (inst_10833__$1 == null);
var state_10965__$1 = (function (){var statearr_10981 = state_10965;
(statearr_10981[(11)] = inst_10833__$1);

return statearr_10981;
})();
if(cljs.core.truth_(inst_10834)){
var statearr_10982_11062 = state_10965__$1;
(statearr_10982_11062[(1)] = (5));

} else {
var statearr_10983_11063 = state_10965__$1;
(statearr_10983_11063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (15))){
var inst_10842 = (state_10965[(13)]);
var inst_10843 = (state_10965[(14)]);
var inst_10845 = (state_10965[(16)]);
var inst_10844 = (state_10965[(17)]);
var inst_10860 = (state_10965[(2)]);
var inst_10861 = (inst_10845 + (1));
var tmp10977 = inst_10842;
var tmp10978 = inst_10843;
var tmp10979 = inst_10844;
var inst_10842__$1 = tmp10977;
var inst_10843__$1 = tmp10978;
var inst_10844__$1 = tmp10979;
var inst_10845__$1 = inst_10861;
var state_10965__$1 = (function (){var statearr_10984 = state_10965;
(statearr_10984[(13)] = inst_10842__$1);

(statearr_10984[(14)] = inst_10843__$1);

(statearr_10984[(18)] = inst_10860);

(statearr_10984[(16)] = inst_10845__$1);

(statearr_10984[(17)] = inst_10844__$1);

return statearr_10984;
})();
var statearr_10985_11064 = state_10965__$1;
(statearr_10985_11064[(2)] = null);

(statearr_10985_11064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (21))){
var inst_10887 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_10989_11065 = state_10965__$1;
(statearr_10989_11065[(2)] = inst_10887);

(statearr_10989_11065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (31))){
var inst_10913 = (state_10965[(12)]);
var inst_10917 = done.call(null,null);
var inst_10918 = cljs.core.async.untap_STAR_.call(null,m,inst_10913);
var state_10965__$1 = (function (){var statearr_10990 = state_10965;
(statearr_10990[(19)] = inst_10917);

return statearr_10990;
})();
var statearr_10991_11066 = state_10965__$1;
(statearr_10991_11066[(2)] = inst_10918);

(statearr_10991_11066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (32))){
var inst_10905 = (state_10965[(20)]);
var inst_10906 = (state_10965[(9)]);
var inst_10907 = (state_10965[(21)]);
var inst_10908 = (state_10965[(10)]);
var inst_10920 = (state_10965[(2)]);
var inst_10921 = (inst_10908 + (1));
var tmp10986 = inst_10905;
var tmp10987 = inst_10906;
var tmp10988 = inst_10907;
var inst_10905__$1 = tmp10986;
var inst_10906__$1 = tmp10987;
var inst_10907__$1 = tmp10988;
var inst_10908__$1 = inst_10921;
var state_10965__$1 = (function (){var statearr_10992 = state_10965;
(statearr_10992[(20)] = inst_10905__$1);

(statearr_10992[(9)] = inst_10906__$1);

(statearr_10992[(21)] = inst_10907__$1);

(statearr_10992[(10)] = inst_10908__$1);

(statearr_10992[(22)] = inst_10920);

return statearr_10992;
})();
var statearr_10993_11067 = state_10965__$1;
(statearr_10993_11067[(2)] = null);

(statearr_10993_11067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (40))){
var inst_10933 = (state_10965[(23)]);
var inst_10937 = done.call(null,null);
var inst_10938 = cljs.core.async.untap_STAR_.call(null,m,inst_10933);
var state_10965__$1 = (function (){var statearr_10994 = state_10965;
(statearr_10994[(24)] = inst_10937);

return statearr_10994;
})();
var statearr_10995_11068 = state_10965__$1;
(statearr_10995_11068[(2)] = inst_10938);

(statearr_10995_11068[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (33))){
var inst_10924 = (state_10965[(25)]);
var inst_10926 = cljs.core.chunked_seq_QMARK_.call(null,inst_10924);
var state_10965__$1 = state_10965;
if(inst_10926){
var statearr_10996_11069 = state_10965__$1;
(statearr_10996_11069[(1)] = (36));

} else {
var statearr_10997_11070 = state_10965__$1;
(statearr_10997_11070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (13))){
var inst_10854 = (state_10965[(26)]);
var inst_10857 = cljs.core.async.close_BANG_.call(null,inst_10854);
var state_10965__$1 = state_10965;
var statearr_10998_11071 = state_10965__$1;
(statearr_10998_11071[(2)] = inst_10857);

(statearr_10998_11071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (22))){
var inst_10877 = (state_10965[(8)]);
var inst_10880 = cljs.core.async.close_BANG_.call(null,inst_10877);
var state_10965__$1 = state_10965;
var statearr_10999_11072 = state_10965__$1;
(statearr_10999_11072[(2)] = inst_10880);

(statearr_10999_11072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (36))){
var inst_10924 = (state_10965[(25)]);
var inst_10928 = cljs.core.chunk_first.call(null,inst_10924);
var inst_10929 = cljs.core.chunk_rest.call(null,inst_10924);
var inst_10930 = cljs.core.count.call(null,inst_10928);
var inst_10905 = inst_10929;
var inst_10906 = inst_10928;
var inst_10907 = inst_10930;
var inst_10908 = (0);
var state_10965__$1 = (function (){var statearr_11000 = state_10965;
(statearr_11000[(20)] = inst_10905);

(statearr_11000[(9)] = inst_10906);

(statearr_11000[(21)] = inst_10907);

(statearr_11000[(10)] = inst_10908);

return statearr_11000;
})();
var statearr_11001_11073 = state_10965__$1;
(statearr_11001_11073[(2)] = null);

(statearr_11001_11073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (41))){
var inst_10924 = (state_10965[(25)]);
var inst_10940 = (state_10965[(2)]);
var inst_10941 = cljs.core.next.call(null,inst_10924);
var inst_10905 = inst_10941;
var inst_10906 = null;
var inst_10907 = (0);
var inst_10908 = (0);
var state_10965__$1 = (function (){var statearr_11002 = state_10965;
(statearr_11002[(27)] = inst_10940);

(statearr_11002[(20)] = inst_10905);

(statearr_11002[(9)] = inst_10906);

(statearr_11002[(21)] = inst_10907);

(statearr_11002[(10)] = inst_10908);

return statearr_11002;
})();
var statearr_11003_11074 = state_10965__$1;
(statearr_11003_11074[(2)] = null);

(statearr_11003_11074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (43))){
var state_10965__$1 = state_10965;
var statearr_11004_11075 = state_10965__$1;
(statearr_11004_11075[(2)] = null);

(statearr_11004_11075[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (29))){
var inst_10949 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_11005_11076 = state_10965__$1;
(statearr_11005_11076[(2)] = inst_10949);

(statearr_11005_11076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (44))){
var inst_10958 = (state_10965[(2)]);
var state_10965__$1 = (function (){var statearr_11006 = state_10965;
(statearr_11006[(28)] = inst_10958);

return statearr_11006;
})();
var statearr_11007_11077 = state_10965__$1;
(statearr_11007_11077[(2)] = null);

(statearr_11007_11077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (6))){
var inst_10897 = (state_10965[(29)]);
var inst_10896 = cljs.core.deref.call(null,cs);
var inst_10897__$1 = cljs.core.keys.call(null,inst_10896);
var inst_10898 = cljs.core.count.call(null,inst_10897__$1);
var inst_10899 = cljs.core.reset_BANG_.call(null,dctr,inst_10898);
var inst_10904 = cljs.core.seq.call(null,inst_10897__$1);
var inst_10905 = inst_10904;
var inst_10906 = null;
var inst_10907 = (0);
var inst_10908 = (0);
var state_10965__$1 = (function (){var statearr_11008 = state_10965;
(statearr_11008[(20)] = inst_10905);

(statearr_11008[(9)] = inst_10906);

(statearr_11008[(21)] = inst_10907);

(statearr_11008[(10)] = inst_10908);

(statearr_11008[(29)] = inst_10897__$1);

(statearr_11008[(30)] = inst_10899);

return statearr_11008;
})();
var statearr_11009_11078 = state_10965__$1;
(statearr_11009_11078[(2)] = null);

(statearr_11009_11078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (28))){
var inst_10905 = (state_10965[(20)]);
var inst_10924 = (state_10965[(25)]);
var inst_10924__$1 = cljs.core.seq.call(null,inst_10905);
var state_10965__$1 = (function (){var statearr_11010 = state_10965;
(statearr_11010[(25)] = inst_10924__$1);

return statearr_11010;
})();
if(inst_10924__$1){
var statearr_11011_11079 = state_10965__$1;
(statearr_11011_11079[(1)] = (33));

} else {
var statearr_11012_11080 = state_10965__$1;
(statearr_11012_11080[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (25))){
var inst_10907 = (state_10965[(21)]);
var inst_10908 = (state_10965[(10)]);
var inst_10910 = (inst_10908 < inst_10907);
var inst_10911 = inst_10910;
var state_10965__$1 = state_10965;
if(cljs.core.truth_(inst_10911)){
var statearr_11013_11081 = state_10965__$1;
(statearr_11013_11081[(1)] = (27));

} else {
var statearr_11014_11082 = state_10965__$1;
(statearr_11014_11082[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (34))){
var state_10965__$1 = state_10965;
var statearr_11015_11083 = state_10965__$1;
(statearr_11015_11083[(2)] = null);

(statearr_11015_11083[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (17))){
var state_10965__$1 = state_10965;
var statearr_11016_11084 = state_10965__$1;
(statearr_11016_11084[(2)] = null);

(statearr_11016_11084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (3))){
var inst_10963 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10965__$1,inst_10963);
} else {
if((state_val_10966 === (12))){
var inst_10892 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_11017_11085 = state_10965__$1;
(statearr_11017_11085[(2)] = inst_10892);

(statearr_11017_11085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (2))){
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10965__$1,(4),ch);
} else {
if((state_val_10966 === (23))){
var state_10965__$1 = state_10965;
var statearr_11018_11086 = state_10965__$1;
(statearr_11018_11086[(2)] = null);

(statearr_11018_11086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (35))){
var inst_10947 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_11019_11087 = state_10965__$1;
(statearr_11019_11087[(2)] = inst_10947);

(statearr_11019_11087[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (19))){
var inst_10864 = (state_10965[(7)]);
var inst_10868 = cljs.core.chunk_first.call(null,inst_10864);
var inst_10869 = cljs.core.chunk_rest.call(null,inst_10864);
var inst_10870 = cljs.core.count.call(null,inst_10868);
var inst_10842 = inst_10869;
var inst_10843 = inst_10868;
var inst_10844 = inst_10870;
var inst_10845 = (0);
var state_10965__$1 = (function (){var statearr_11020 = state_10965;
(statearr_11020[(13)] = inst_10842);

(statearr_11020[(14)] = inst_10843);

(statearr_11020[(16)] = inst_10845);

(statearr_11020[(17)] = inst_10844);

return statearr_11020;
})();
var statearr_11021_11088 = state_10965__$1;
(statearr_11021_11088[(2)] = null);

(statearr_11021_11088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (11))){
var inst_10842 = (state_10965[(13)]);
var inst_10864 = (state_10965[(7)]);
var inst_10864__$1 = cljs.core.seq.call(null,inst_10842);
var state_10965__$1 = (function (){var statearr_11022 = state_10965;
(statearr_11022[(7)] = inst_10864__$1);

return statearr_11022;
})();
if(inst_10864__$1){
var statearr_11023_11089 = state_10965__$1;
(statearr_11023_11089[(1)] = (16));

} else {
var statearr_11024_11090 = state_10965__$1;
(statearr_11024_11090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (9))){
var inst_10894 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_11025_11091 = state_10965__$1;
(statearr_11025_11091[(2)] = inst_10894);

(statearr_11025_11091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (5))){
var inst_10840 = cljs.core.deref.call(null,cs);
var inst_10841 = cljs.core.seq.call(null,inst_10840);
var inst_10842 = inst_10841;
var inst_10843 = null;
var inst_10844 = (0);
var inst_10845 = (0);
var state_10965__$1 = (function (){var statearr_11026 = state_10965;
(statearr_11026[(13)] = inst_10842);

(statearr_11026[(14)] = inst_10843);

(statearr_11026[(16)] = inst_10845);

(statearr_11026[(17)] = inst_10844);

return statearr_11026;
})();
var statearr_11027_11092 = state_10965__$1;
(statearr_11027_11092[(2)] = null);

(statearr_11027_11092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (14))){
var state_10965__$1 = state_10965;
var statearr_11028_11093 = state_10965__$1;
(statearr_11028_11093[(2)] = null);

(statearr_11028_11093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (45))){
var inst_10955 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_11029_11094 = state_10965__$1;
(statearr_11029_11094[(2)] = inst_10955);

(statearr_11029_11094[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (26))){
var inst_10897 = (state_10965[(29)]);
var inst_10951 = (state_10965[(2)]);
var inst_10952 = cljs.core.seq.call(null,inst_10897);
var state_10965__$1 = (function (){var statearr_11030 = state_10965;
(statearr_11030[(31)] = inst_10951);

return statearr_11030;
})();
if(inst_10952){
var statearr_11031_11095 = state_10965__$1;
(statearr_11031_11095[(1)] = (42));

} else {
var statearr_11032_11096 = state_10965__$1;
(statearr_11032_11096[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (16))){
var inst_10864 = (state_10965[(7)]);
var inst_10866 = cljs.core.chunked_seq_QMARK_.call(null,inst_10864);
var state_10965__$1 = state_10965;
if(inst_10866){
var statearr_11033_11097 = state_10965__$1;
(statearr_11033_11097[(1)] = (19));

} else {
var statearr_11034_11098 = state_10965__$1;
(statearr_11034_11098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (38))){
var inst_10944 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_11035_11099 = state_10965__$1;
(statearr_11035_11099[(2)] = inst_10944);

(statearr_11035_11099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (30))){
var state_10965__$1 = state_10965;
var statearr_11036_11100 = state_10965__$1;
(statearr_11036_11100[(2)] = null);

(statearr_11036_11100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (10))){
var inst_10843 = (state_10965[(14)]);
var inst_10845 = (state_10965[(16)]);
var inst_10853 = cljs.core._nth.call(null,inst_10843,inst_10845);
var inst_10854 = cljs.core.nth.call(null,inst_10853,(0),null);
var inst_10855 = cljs.core.nth.call(null,inst_10853,(1),null);
var state_10965__$1 = (function (){var statearr_11037 = state_10965;
(statearr_11037[(26)] = inst_10854);

return statearr_11037;
})();
if(cljs.core.truth_(inst_10855)){
var statearr_11038_11101 = state_10965__$1;
(statearr_11038_11101[(1)] = (13));

} else {
var statearr_11039_11102 = state_10965__$1;
(statearr_11039_11102[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (18))){
var inst_10890 = (state_10965[(2)]);
var state_10965__$1 = state_10965;
var statearr_11040_11103 = state_10965__$1;
(statearr_11040_11103[(2)] = inst_10890);

(statearr_11040_11103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (42))){
var state_10965__$1 = state_10965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10965__$1,(45),dchan);
} else {
if((state_val_10966 === (37))){
var inst_10933 = (state_10965[(23)]);
var inst_10833 = (state_10965[(11)]);
var inst_10924 = (state_10965[(25)]);
var inst_10933__$1 = cljs.core.first.call(null,inst_10924);
var inst_10934 = cljs.core.async.put_BANG_.call(null,inst_10933__$1,inst_10833,done);
var state_10965__$1 = (function (){var statearr_11041 = state_10965;
(statearr_11041[(23)] = inst_10933__$1);

return statearr_11041;
})();
if(cljs.core.truth_(inst_10934)){
var statearr_11042_11104 = state_10965__$1;
(statearr_11042_11104[(1)] = (39));

} else {
var statearr_11043_11105 = state_10965__$1;
(statearr_11043_11105[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10966 === (8))){
var inst_10845 = (state_10965[(16)]);
var inst_10844 = (state_10965[(17)]);
var inst_10847 = (inst_10845 < inst_10844);
var inst_10848 = inst_10847;
var state_10965__$1 = state_10965;
if(cljs.core.truth_(inst_10848)){
var statearr_11044_11106 = state_10965__$1;
(statearr_11044_11106[(1)] = (10));

} else {
var statearr_11045_11107 = state_10965__$1;
(statearr_11045_11107[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___11053,cs,m,dchan,dctr,done))
;
return ((function (switch__9618__auto__,c__9730__auto___11053,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9619__auto__ = null;
var cljs$core$async$mult_$_state_machine__9619__auto____0 = (function (){
var statearr_11049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11049[(0)] = cljs$core$async$mult_$_state_machine__9619__auto__);

(statearr_11049[(1)] = (1));

return statearr_11049;
});
var cljs$core$async$mult_$_state_machine__9619__auto____1 = (function (state_10965){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_10965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e11050){if((e11050 instanceof Object)){
var ex__9622__auto__ = e11050;
var statearr_11051_11108 = state_10965;
(statearr_11051_11108[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11109 = state_10965;
state_10965 = G__11109;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9619__auto__ = function(state_10965){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9619__auto____1.call(this,state_10965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9619__auto____0;
cljs$core$async$mult_$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9619__auto____1;
return cljs$core$async$mult_$_state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___11053,cs,m,dchan,dctr,done))
})();
var state__9732__auto__ = (function (){var statearr_11052 = f__9731__auto__.call(null);
(statearr_11052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___11053);

return statearr_11052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___11053,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11110 = [];
var len__7322__auto___11113 = arguments.length;
var i__7323__auto___11114 = (0);
while(true){
if((i__7323__auto___11114 < len__7322__auto___11113)){
args11110.push((arguments[i__7323__auto___11114]));

var G__11115 = (i__7323__auto___11114 + (1));
i__7323__auto___11114 = G__11115;
continue;
} else {
}
break;
}

var G__11112 = args11110.length;
switch (G__11112) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11110.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m);
} else {
var m__6911__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,state_map);
} else {
var m__6911__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,m,mode);
} else {
var m__6911__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___11127 = arguments.length;
var i__7323__auto___11128 = (0);
while(true){
if((i__7323__auto___11128 < len__7322__auto___11127)){
args__7329__auto__.push((arguments[i__7323__auto___11128]));

var G__11129 = (i__7323__auto___11128 + (1));
i__7323__auto___11128 = G__11129;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((3) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7330__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11121){
var map__11122 = p__11121;
var map__11122__$1 = ((((!((map__11122 == null)))?((((map__11122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11122):map__11122);
var opts = map__11122__$1;
var statearr_11124_11130 = state;
(statearr_11124_11130[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11122,map__11122__$1,opts){
return (function (val){
var statearr_11125_11131 = state;
(statearr_11125_11131[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11122,map__11122__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11126_11132 = state;
(statearr_11126_11132[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11117){
var G__11118 = cljs.core.first.call(null,seq11117);
var seq11117__$1 = cljs.core.next.call(null,seq11117);
var G__11119 = cljs.core.first.call(null,seq11117__$1);
var seq11117__$2 = cljs.core.next.call(null,seq11117__$1);
var G__11120 = cljs.core.first.call(null,seq11117__$2);
var seq11117__$3 = cljs.core.next.call(null,seq11117__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11118,G__11119,G__11120,seq11117__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11298 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11299){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11299 = meta11299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11300,meta11299__$1){
var self__ = this;
var _11300__$1 = this;
return (new cljs.core.async.t_cljs$core$async11298(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11299__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11300){
var self__ = this;
var _11300__$1 = this;
return self__.meta11299;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11299","meta11299",2046729840,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11298";

cljs.core.async.t_cljs$core$async11298.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11298");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11298 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11298(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11299){
return (new cljs.core.async.t_cljs$core$async11298(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11299));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11298(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9730__auto___11463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___11463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___11463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11400){
var state_val_11401 = (state_11400[(1)]);
if((state_val_11401 === (7))){
var inst_11316 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
var statearr_11402_11464 = state_11400__$1;
(statearr_11402_11464[(2)] = inst_11316);

(statearr_11402_11464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (20))){
var inst_11328 = (state_11400[(7)]);
var state_11400__$1 = state_11400;
var statearr_11403_11465 = state_11400__$1;
(statearr_11403_11465[(2)] = inst_11328);

(statearr_11403_11465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (27))){
var state_11400__$1 = state_11400;
var statearr_11404_11466 = state_11400__$1;
(statearr_11404_11466[(2)] = null);

(statearr_11404_11466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (1))){
var inst_11304 = (state_11400[(8)]);
var inst_11304__$1 = calc_state.call(null);
var inst_11306 = (inst_11304__$1 == null);
var inst_11307 = cljs.core.not.call(null,inst_11306);
var state_11400__$1 = (function (){var statearr_11405 = state_11400;
(statearr_11405[(8)] = inst_11304__$1);

return statearr_11405;
})();
if(inst_11307){
var statearr_11406_11467 = state_11400__$1;
(statearr_11406_11467[(1)] = (2));

} else {
var statearr_11407_11468 = state_11400__$1;
(statearr_11407_11468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (24))){
var inst_11374 = (state_11400[(9)]);
var inst_11351 = (state_11400[(10)]);
var inst_11360 = (state_11400[(11)]);
var inst_11374__$1 = inst_11351.call(null,inst_11360);
var state_11400__$1 = (function (){var statearr_11408 = state_11400;
(statearr_11408[(9)] = inst_11374__$1);

return statearr_11408;
})();
if(cljs.core.truth_(inst_11374__$1)){
var statearr_11409_11469 = state_11400__$1;
(statearr_11409_11469[(1)] = (29));

} else {
var statearr_11410_11470 = state_11400__$1;
(statearr_11410_11470[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (4))){
var inst_11319 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11319)){
var statearr_11411_11471 = state_11400__$1;
(statearr_11411_11471[(1)] = (8));

} else {
var statearr_11412_11472 = state_11400__$1;
(statearr_11412_11472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (15))){
var inst_11345 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11345)){
var statearr_11413_11473 = state_11400__$1;
(statearr_11413_11473[(1)] = (19));

} else {
var statearr_11414_11474 = state_11400__$1;
(statearr_11414_11474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (21))){
var inst_11350 = (state_11400[(12)]);
var inst_11350__$1 = (state_11400[(2)]);
var inst_11351 = cljs.core.get.call(null,inst_11350__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11352 = cljs.core.get.call(null,inst_11350__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11353 = cljs.core.get.call(null,inst_11350__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11400__$1 = (function (){var statearr_11415 = state_11400;
(statearr_11415[(13)] = inst_11352);

(statearr_11415[(10)] = inst_11351);

(statearr_11415[(12)] = inst_11350__$1);

return statearr_11415;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11400__$1,(22),inst_11353);
} else {
if((state_val_11401 === (31))){
var inst_11382 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11382)){
var statearr_11416_11475 = state_11400__$1;
(statearr_11416_11475[(1)] = (32));

} else {
var statearr_11417_11476 = state_11400__$1;
(statearr_11417_11476[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (32))){
var inst_11359 = (state_11400[(14)]);
var state_11400__$1 = state_11400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11400__$1,(35),out,inst_11359);
} else {
if((state_val_11401 === (33))){
var inst_11350 = (state_11400[(12)]);
var inst_11328 = inst_11350;
var state_11400__$1 = (function (){var statearr_11418 = state_11400;
(statearr_11418[(7)] = inst_11328);

return statearr_11418;
})();
var statearr_11419_11477 = state_11400__$1;
(statearr_11419_11477[(2)] = null);

(statearr_11419_11477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (13))){
var inst_11328 = (state_11400[(7)]);
var inst_11335 = inst_11328.cljs$lang$protocol_mask$partition0$;
var inst_11336 = (inst_11335 & (64));
var inst_11337 = inst_11328.cljs$core$ISeq$;
var inst_11338 = (inst_11336) || (inst_11337);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11338)){
var statearr_11420_11478 = state_11400__$1;
(statearr_11420_11478[(1)] = (16));

} else {
var statearr_11421_11479 = state_11400__$1;
(statearr_11421_11479[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (22))){
var inst_11359 = (state_11400[(14)]);
var inst_11360 = (state_11400[(11)]);
var inst_11358 = (state_11400[(2)]);
var inst_11359__$1 = cljs.core.nth.call(null,inst_11358,(0),null);
var inst_11360__$1 = cljs.core.nth.call(null,inst_11358,(1),null);
var inst_11361 = (inst_11359__$1 == null);
var inst_11362 = cljs.core._EQ_.call(null,inst_11360__$1,change);
var inst_11363 = (inst_11361) || (inst_11362);
var state_11400__$1 = (function (){var statearr_11422 = state_11400;
(statearr_11422[(14)] = inst_11359__$1);

(statearr_11422[(11)] = inst_11360__$1);

return statearr_11422;
})();
if(cljs.core.truth_(inst_11363)){
var statearr_11423_11480 = state_11400__$1;
(statearr_11423_11480[(1)] = (23));

} else {
var statearr_11424_11481 = state_11400__$1;
(statearr_11424_11481[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (36))){
var inst_11350 = (state_11400[(12)]);
var inst_11328 = inst_11350;
var state_11400__$1 = (function (){var statearr_11425 = state_11400;
(statearr_11425[(7)] = inst_11328);

return statearr_11425;
})();
var statearr_11426_11482 = state_11400__$1;
(statearr_11426_11482[(2)] = null);

(statearr_11426_11482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (29))){
var inst_11374 = (state_11400[(9)]);
var state_11400__$1 = state_11400;
var statearr_11427_11483 = state_11400__$1;
(statearr_11427_11483[(2)] = inst_11374);

(statearr_11427_11483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (6))){
var state_11400__$1 = state_11400;
var statearr_11428_11484 = state_11400__$1;
(statearr_11428_11484[(2)] = false);

(statearr_11428_11484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (28))){
var inst_11370 = (state_11400[(2)]);
var inst_11371 = calc_state.call(null);
var inst_11328 = inst_11371;
var state_11400__$1 = (function (){var statearr_11429 = state_11400;
(statearr_11429[(7)] = inst_11328);

(statearr_11429[(15)] = inst_11370);

return statearr_11429;
})();
var statearr_11430_11485 = state_11400__$1;
(statearr_11430_11485[(2)] = null);

(statearr_11430_11485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (25))){
var inst_11396 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
var statearr_11431_11486 = state_11400__$1;
(statearr_11431_11486[(2)] = inst_11396);

(statearr_11431_11486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (34))){
var inst_11394 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
var statearr_11432_11487 = state_11400__$1;
(statearr_11432_11487[(2)] = inst_11394);

(statearr_11432_11487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (17))){
var state_11400__$1 = state_11400;
var statearr_11433_11488 = state_11400__$1;
(statearr_11433_11488[(2)] = false);

(statearr_11433_11488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (3))){
var state_11400__$1 = state_11400;
var statearr_11434_11489 = state_11400__$1;
(statearr_11434_11489[(2)] = false);

(statearr_11434_11489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (12))){
var inst_11398 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11400__$1,inst_11398);
} else {
if((state_val_11401 === (2))){
var inst_11304 = (state_11400[(8)]);
var inst_11309 = inst_11304.cljs$lang$protocol_mask$partition0$;
var inst_11310 = (inst_11309 & (64));
var inst_11311 = inst_11304.cljs$core$ISeq$;
var inst_11312 = (inst_11310) || (inst_11311);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11312)){
var statearr_11435_11490 = state_11400__$1;
(statearr_11435_11490[(1)] = (5));

} else {
var statearr_11436_11491 = state_11400__$1;
(statearr_11436_11491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (23))){
var inst_11359 = (state_11400[(14)]);
var inst_11365 = (inst_11359 == null);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11365)){
var statearr_11437_11492 = state_11400__$1;
(statearr_11437_11492[(1)] = (26));

} else {
var statearr_11438_11493 = state_11400__$1;
(statearr_11438_11493[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (35))){
var inst_11385 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
if(cljs.core.truth_(inst_11385)){
var statearr_11439_11494 = state_11400__$1;
(statearr_11439_11494[(1)] = (36));

} else {
var statearr_11440_11495 = state_11400__$1;
(statearr_11440_11495[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (19))){
var inst_11328 = (state_11400[(7)]);
var inst_11347 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11328);
var state_11400__$1 = state_11400;
var statearr_11441_11496 = state_11400__$1;
(statearr_11441_11496[(2)] = inst_11347);

(statearr_11441_11496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (11))){
var inst_11328 = (state_11400[(7)]);
var inst_11332 = (inst_11328 == null);
var inst_11333 = cljs.core.not.call(null,inst_11332);
var state_11400__$1 = state_11400;
if(inst_11333){
var statearr_11442_11497 = state_11400__$1;
(statearr_11442_11497[(1)] = (13));

} else {
var statearr_11443_11498 = state_11400__$1;
(statearr_11443_11498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (9))){
var inst_11304 = (state_11400[(8)]);
var state_11400__$1 = state_11400;
var statearr_11444_11499 = state_11400__$1;
(statearr_11444_11499[(2)] = inst_11304);

(statearr_11444_11499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (5))){
var state_11400__$1 = state_11400;
var statearr_11445_11500 = state_11400__$1;
(statearr_11445_11500[(2)] = true);

(statearr_11445_11500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (14))){
var state_11400__$1 = state_11400;
var statearr_11446_11501 = state_11400__$1;
(statearr_11446_11501[(2)] = false);

(statearr_11446_11501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (26))){
var inst_11360 = (state_11400[(11)]);
var inst_11367 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11360);
var state_11400__$1 = state_11400;
var statearr_11447_11502 = state_11400__$1;
(statearr_11447_11502[(2)] = inst_11367);

(statearr_11447_11502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (16))){
var state_11400__$1 = state_11400;
var statearr_11448_11503 = state_11400__$1;
(statearr_11448_11503[(2)] = true);

(statearr_11448_11503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (38))){
var inst_11390 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
var statearr_11449_11504 = state_11400__$1;
(statearr_11449_11504[(2)] = inst_11390);

(statearr_11449_11504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (30))){
var inst_11352 = (state_11400[(13)]);
var inst_11351 = (state_11400[(10)]);
var inst_11360 = (state_11400[(11)]);
var inst_11377 = cljs.core.empty_QMARK_.call(null,inst_11351);
var inst_11378 = inst_11352.call(null,inst_11360);
var inst_11379 = cljs.core.not.call(null,inst_11378);
var inst_11380 = (inst_11377) && (inst_11379);
var state_11400__$1 = state_11400;
var statearr_11450_11505 = state_11400__$1;
(statearr_11450_11505[(2)] = inst_11380);

(statearr_11450_11505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (10))){
var inst_11304 = (state_11400[(8)]);
var inst_11324 = (state_11400[(2)]);
var inst_11325 = cljs.core.get.call(null,inst_11324,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11326 = cljs.core.get.call(null,inst_11324,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11327 = cljs.core.get.call(null,inst_11324,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11328 = inst_11304;
var state_11400__$1 = (function (){var statearr_11451 = state_11400;
(statearr_11451[(7)] = inst_11328);

(statearr_11451[(16)] = inst_11326);

(statearr_11451[(17)] = inst_11325);

(statearr_11451[(18)] = inst_11327);

return statearr_11451;
})();
var statearr_11452_11506 = state_11400__$1;
(statearr_11452_11506[(2)] = null);

(statearr_11452_11506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (18))){
var inst_11342 = (state_11400[(2)]);
var state_11400__$1 = state_11400;
var statearr_11453_11507 = state_11400__$1;
(statearr_11453_11507[(2)] = inst_11342);

(statearr_11453_11507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (37))){
var state_11400__$1 = state_11400;
var statearr_11454_11508 = state_11400__$1;
(statearr_11454_11508[(2)] = null);

(statearr_11454_11508[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11401 === (8))){
var inst_11304 = (state_11400[(8)]);
var inst_11321 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11304);
var state_11400__$1 = state_11400;
var statearr_11455_11509 = state_11400__$1;
(statearr_11455_11509[(2)] = inst_11321);

(statearr_11455_11509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___11463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9618__auto__,c__9730__auto___11463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9619__auto__ = null;
var cljs$core$async$mix_$_state_machine__9619__auto____0 = (function (){
var statearr_11459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11459[(0)] = cljs$core$async$mix_$_state_machine__9619__auto__);

(statearr_11459[(1)] = (1));

return statearr_11459;
});
var cljs$core$async$mix_$_state_machine__9619__auto____1 = (function (state_11400){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_11400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e11460){if((e11460 instanceof Object)){
var ex__9622__auto__ = e11460;
var statearr_11461_11510 = state_11400;
(statearr_11461_11510[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11511 = state_11400;
state_11400 = G__11511;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9619__auto__ = function(state_11400){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9619__auto____1.call(this,state_11400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9619__auto____0;
cljs$core$async$mix_$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9619__auto____1;
return cljs$core$async$mix_$_state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___11463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9732__auto__ = (function (){var statearr_11462 = f__9731__auto__.call(null);
(statearr_11462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___11463);

return statearr_11462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___11463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6911__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p,v,ch);
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11512 = [];
var len__7322__auto___11515 = arguments.length;
var i__7323__auto___11516 = (0);
while(true){
if((i__7323__auto___11516 < len__7322__auto___11515)){
args11512.push((arguments[i__7323__auto___11516]));

var G__11517 = (i__7323__auto___11516 + (1));
i__7323__auto___11516 = G__11517;
continue;
} else {
}
break;
}

var G__11514 = args11512.length;
switch (G__11514) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11512.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p);
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return m__6911__auto__.call(null,p,v);
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return m__6911__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11520 = [];
var len__7322__auto___11645 = arguments.length;
var i__7323__auto___11646 = (0);
while(true){
if((i__7323__auto___11646 < len__7322__auto___11645)){
args11520.push((arguments[i__7323__auto___11646]));

var G__11647 = (i__7323__auto___11646 + (1));
i__7323__auto___11646 = G__11647;
continue;
} else {
}
break;
}

var G__11522 = args11520.length;
switch (G__11522) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11520.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6247__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6247__auto__,mults){
return (function (p1__11519_SHARP_){
if(cljs.core.truth_(p1__11519_SHARP_.call(null,topic))){
return p1__11519_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11519_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6247__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11523 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11524){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11524 = meta11524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11525,meta11524__$1){
var self__ = this;
var _11525__$1 = this;
return (new cljs.core.async.t_cljs$core$async11523(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11524__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11525){
var self__ = this;
var _11525__$1 = this;
return self__.meta11524;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11524","meta11524",1149239094,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11523";

cljs.core.async.t_cljs$core$async11523.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11523");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11523 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11524){
return (new cljs.core.async.t_cljs$core$async11523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11524));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11523(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9730__auto___11649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___11649,mults,ensure_mult,p){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___11649,mults,ensure_mult,p){
return (function (state_11597){
var state_val_11598 = (state_11597[(1)]);
if((state_val_11598 === (7))){
var inst_11593 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
var statearr_11599_11650 = state_11597__$1;
(statearr_11599_11650[(2)] = inst_11593);

(statearr_11599_11650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (20))){
var state_11597__$1 = state_11597;
var statearr_11600_11651 = state_11597__$1;
(statearr_11600_11651[(2)] = null);

(statearr_11600_11651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (1))){
var state_11597__$1 = state_11597;
var statearr_11601_11652 = state_11597__$1;
(statearr_11601_11652[(2)] = null);

(statearr_11601_11652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (24))){
var inst_11576 = (state_11597[(7)]);
var inst_11585 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11576);
var state_11597__$1 = state_11597;
var statearr_11602_11653 = state_11597__$1;
(statearr_11602_11653[(2)] = inst_11585);

(statearr_11602_11653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (4))){
var inst_11528 = (state_11597[(8)]);
var inst_11528__$1 = (state_11597[(2)]);
var inst_11529 = (inst_11528__$1 == null);
var state_11597__$1 = (function (){var statearr_11603 = state_11597;
(statearr_11603[(8)] = inst_11528__$1);

return statearr_11603;
})();
if(cljs.core.truth_(inst_11529)){
var statearr_11604_11654 = state_11597__$1;
(statearr_11604_11654[(1)] = (5));

} else {
var statearr_11605_11655 = state_11597__$1;
(statearr_11605_11655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (15))){
var inst_11570 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
var statearr_11606_11656 = state_11597__$1;
(statearr_11606_11656[(2)] = inst_11570);

(statearr_11606_11656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (21))){
var inst_11590 = (state_11597[(2)]);
var state_11597__$1 = (function (){var statearr_11607 = state_11597;
(statearr_11607[(9)] = inst_11590);

return statearr_11607;
})();
var statearr_11608_11657 = state_11597__$1;
(statearr_11608_11657[(2)] = null);

(statearr_11608_11657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (13))){
var inst_11552 = (state_11597[(10)]);
var inst_11554 = cljs.core.chunked_seq_QMARK_.call(null,inst_11552);
var state_11597__$1 = state_11597;
if(inst_11554){
var statearr_11609_11658 = state_11597__$1;
(statearr_11609_11658[(1)] = (16));

} else {
var statearr_11610_11659 = state_11597__$1;
(statearr_11610_11659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (22))){
var inst_11582 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
if(cljs.core.truth_(inst_11582)){
var statearr_11611_11660 = state_11597__$1;
(statearr_11611_11660[(1)] = (23));

} else {
var statearr_11612_11661 = state_11597__$1;
(statearr_11612_11661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (6))){
var inst_11578 = (state_11597[(11)]);
var inst_11576 = (state_11597[(7)]);
var inst_11528 = (state_11597[(8)]);
var inst_11576__$1 = topic_fn.call(null,inst_11528);
var inst_11577 = cljs.core.deref.call(null,mults);
var inst_11578__$1 = cljs.core.get.call(null,inst_11577,inst_11576__$1);
var state_11597__$1 = (function (){var statearr_11613 = state_11597;
(statearr_11613[(11)] = inst_11578__$1);

(statearr_11613[(7)] = inst_11576__$1);

return statearr_11613;
})();
if(cljs.core.truth_(inst_11578__$1)){
var statearr_11614_11662 = state_11597__$1;
(statearr_11614_11662[(1)] = (19));

} else {
var statearr_11615_11663 = state_11597__$1;
(statearr_11615_11663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (25))){
var inst_11587 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
var statearr_11616_11664 = state_11597__$1;
(statearr_11616_11664[(2)] = inst_11587);

(statearr_11616_11664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (17))){
var inst_11552 = (state_11597[(10)]);
var inst_11561 = cljs.core.first.call(null,inst_11552);
var inst_11562 = cljs.core.async.muxch_STAR_.call(null,inst_11561);
var inst_11563 = cljs.core.async.close_BANG_.call(null,inst_11562);
var inst_11564 = cljs.core.next.call(null,inst_11552);
var inst_11538 = inst_11564;
var inst_11539 = null;
var inst_11540 = (0);
var inst_11541 = (0);
var state_11597__$1 = (function (){var statearr_11617 = state_11597;
(statearr_11617[(12)] = inst_11538);

(statearr_11617[(13)] = inst_11540);

(statearr_11617[(14)] = inst_11539);

(statearr_11617[(15)] = inst_11563);

(statearr_11617[(16)] = inst_11541);

return statearr_11617;
})();
var statearr_11618_11665 = state_11597__$1;
(statearr_11618_11665[(2)] = null);

(statearr_11618_11665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (3))){
var inst_11595 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11597__$1,inst_11595);
} else {
if((state_val_11598 === (12))){
var inst_11572 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
var statearr_11619_11666 = state_11597__$1;
(statearr_11619_11666[(2)] = inst_11572);

(statearr_11619_11666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (2))){
var state_11597__$1 = state_11597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11597__$1,(4),ch);
} else {
if((state_val_11598 === (23))){
var state_11597__$1 = state_11597;
var statearr_11620_11667 = state_11597__$1;
(statearr_11620_11667[(2)] = null);

(statearr_11620_11667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (19))){
var inst_11578 = (state_11597[(11)]);
var inst_11528 = (state_11597[(8)]);
var inst_11580 = cljs.core.async.muxch_STAR_.call(null,inst_11578);
var state_11597__$1 = state_11597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11597__$1,(22),inst_11580,inst_11528);
} else {
if((state_val_11598 === (11))){
var inst_11538 = (state_11597[(12)]);
var inst_11552 = (state_11597[(10)]);
var inst_11552__$1 = cljs.core.seq.call(null,inst_11538);
var state_11597__$1 = (function (){var statearr_11621 = state_11597;
(statearr_11621[(10)] = inst_11552__$1);

return statearr_11621;
})();
if(inst_11552__$1){
var statearr_11622_11668 = state_11597__$1;
(statearr_11622_11668[(1)] = (13));

} else {
var statearr_11623_11669 = state_11597__$1;
(statearr_11623_11669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (9))){
var inst_11574 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
var statearr_11624_11670 = state_11597__$1;
(statearr_11624_11670[(2)] = inst_11574);

(statearr_11624_11670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (5))){
var inst_11535 = cljs.core.deref.call(null,mults);
var inst_11536 = cljs.core.vals.call(null,inst_11535);
var inst_11537 = cljs.core.seq.call(null,inst_11536);
var inst_11538 = inst_11537;
var inst_11539 = null;
var inst_11540 = (0);
var inst_11541 = (0);
var state_11597__$1 = (function (){var statearr_11625 = state_11597;
(statearr_11625[(12)] = inst_11538);

(statearr_11625[(13)] = inst_11540);

(statearr_11625[(14)] = inst_11539);

(statearr_11625[(16)] = inst_11541);

return statearr_11625;
})();
var statearr_11626_11671 = state_11597__$1;
(statearr_11626_11671[(2)] = null);

(statearr_11626_11671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (14))){
var state_11597__$1 = state_11597;
var statearr_11630_11672 = state_11597__$1;
(statearr_11630_11672[(2)] = null);

(statearr_11630_11672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (16))){
var inst_11552 = (state_11597[(10)]);
var inst_11556 = cljs.core.chunk_first.call(null,inst_11552);
var inst_11557 = cljs.core.chunk_rest.call(null,inst_11552);
var inst_11558 = cljs.core.count.call(null,inst_11556);
var inst_11538 = inst_11557;
var inst_11539 = inst_11556;
var inst_11540 = inst_11558;
var inst_11541 = (0);
var state_11597__$1 = (function (){var statearr_11631 = state_11597;
(statearr_11631[(12)] = inst_11538);

(statearr_11631[(13)] = inst_11540);

(statearr_11631[(14)] = inst_11539);

(statearr_11631[(16)] = inst_11541);

return statearr_11631;
})();
var statearr_11632_11673 = state_11597__$1;
(statearr_11632_11673[(2)] = null);

(statearr_11632_11673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (10))){
var inst_11538 = (state_11597[(12)]);
var inst_11540 = (state_11597[(13)]);
var inst_11539 = (state_11597[(14)]);
var inst_11541 = (state_11597[(16)]);
var inst_11546 = cljs.core._nth.call(null,inst_11539,inst_11541);
var inst_11547 = cljs.core.async.muxch_STAR_.call(null,inst_11546);
var inst_11548 = cljs.core.async.close_BANG_.call(null,inst_11547);
var inst_11549 = (inst_11541 + (1));
var tmp11627 = inst_11538;
var tmp11628 = inst_11540;
var tmp11629 = inst_11539;
var inst_11538__$1 = tmp11627;
var inst_11539__$1 = tmp11629;
var inst_11540__$1 = tmp11628;
var inst_11541__$1 = inst_11549;
var state_11597__$1 = (function (){var statearr_11633 = state_11597;
(statearr_11633[(12)] = inst_11538__$1);

(statearr_11633[(13)] = inst_11540__$1);

(statearr_11633[(17)] = inst_11548);

(statearr_11633[(14)] = inst_11539__$1);

(statearr_11633[(16)] = inst_11541__$1);

return statearr_11633;
})();
var statearr_11634_11674 = state_11597__$1;
(statearr_11634_11674[(2)] = null);

(statearr_11634_11674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (18))){
var inst_11567 = (state_11597[(2)]);
var state_11597__$1 = state_11597;
var statearr_11635_11675 = state_11597__$1;
(statearr_11635_11675[(2)] = inst_11567);

(statearr_11635_11675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11598 === (8))){
var inst_11540 = (state_11597[(13)]);
var inst_11541 = (state_11597[(16)]);
var inst_11543 = (inst_11541 < inst_11540);
var inst_11544 = inst_11543;
var state_11597__$1 = state_11597;
if(cljs.core.truth_(inst_11544)){
var statearr_11636_11676 = state_11597__$1;
(statearr_11636_11676[(1)] = (10));

} else {
var statearr_11637_11677 = state_11597__$1;
(statearr_11637_11677[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___11649,mults,ensure_mult,p))
;
return ((function (switch__9618__auto__,c__9730__auto___11649,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_11641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11641[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_11641[(1)] = (1));

return statearr_11641;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_11597){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_11597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e11642){if((e11642 instanceof Object)){
var ex__9622__auto__ = e11642;
var statearr_11643_11678 = state_11597;
(statearr_11643_11678[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11679 = state_11597;
state_11597 = G__11679;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_11597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_11597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___11649,mults,ensure_mult,p))
})();
var state__9732__auto__ = (function (){var statearr_11644 = f__9731__auto__.call(null);
(statearr_11644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___11649);

return statearr_11644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___11649,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11680 = [];
var len__7322__auto___11683 = arguments.length;
var i__7323__auto___11684 = (0);
while(true){
if((i__7323__auto___11684 < len__7322__auto___11683)){
args11680.push((arguments[i__7323__auto___11684]));

var G__11685 = (i__7323__auto___11684 + (1));
i__7323__auto___11684 = G__11685;
continue;
} else {
}
break;
}

var G__11682 = args11680.length;
switch (G__11682) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11680.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11687 = [];
var len__7322__auto___11690 = arguments.length;
var i__7323__auto___11691 = (0);
while(true){
if((i__7323__auto___11691 < len__7322__auto___11690)){
args11687.push((arguments[i__7323__auto___11691]));

var G__11692 = (i__7323__auto___11691 + (1));
i__7323__auto___11691 = G__11692;
continue;
} else {
}
break;
}

var G__11689 = args11687.length;
switch (G__11689) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11687.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11694 = [];
var len__7322__auto___11765 = arguments.length;
var i__7323__auto___11766 = (0);
while(true){
if((i__7323__auto___11766 < len__7322__auto___11765)){
args11694.push((arguments[i__7323__auto___11766]));

var G__11767 = (i__7323__auto___11766 + (1));
i__7323__auto___11766 = G__11767;
continue;
} else {
}
break;
}

var G__11696 = args11694.length;
switch (G__11696) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11694.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9730__auto___11769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___11769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___11769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11735){
var state_val_11736 = (state_11735[(1)]);
if((state_val_11736 === (7))){
var state_11735__$1 = state_11735;
var statearr_11737_11770 = state_11735__$1;
(statearr_11737_11770[(2)] = null);

(statearr_11737_11770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (1))){
var state_11735__$1 = state_11735;
var statearr_11738_11771 = state_11735__$1;
(statearr_11738_11771[(2)] = null);

(statearr_11738_11771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (4))){
var inst_11699 = (state_11735[(7)]);
var inst_11701 = (inst_11699 < cnt);
var state_11735__$1 = state_11735;
if(cljs.core.truth_(inst_11701)){
var statearr_11739_11772 = state_11735__$1;
(statearr_11739_11772[(1)] = (6));

} else {
var statearr_11740_11773 = state_11735__$1;
(statearr_11740_11773[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (15))){
var inst_11731 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11741_11774 = state_11735__$1;
(statearr_11741_11774[(2)] = inst_11731);

(statearr_11741_11774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (13))){
var inst_11724 = cljs.core.async.close_BANG_.call(null,out);
var state_11735__$1 = state_11735;
var statearr_11742_11775 = state_11735__$1;
(statearr_11742_11775[(2)] = inst_11724);

(statearr_11742_11775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (6))){
var state_11735__$1 = state_11735;
var statearr_11743_11776 = state_11735__$1;
(statearr_11743_11776[(2)] = null);

(statearr_11743_11776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (3))){
var inst_11733 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11735__$1,inst_11733);
} else {
if((state_val_11736 === (12))){
var inst_11721 = (state_11735[(8)]);
var inst_11721__$1 = (state_11735[(2)]);
var inst_11722 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11721__$1);
var state_11735__$1 = (function (){var statearr_11744 = state_11735;
(statearr_11744[(8)] = inst_11721__$1);

return statearr_11744;
})();
if(cljs.core.truth_(inst_11722)){
var statearr_11745_11777 = state_11735__$1;
(statearr_11745_11777[(1)] = (13));

} else {
var statearr_11746_11778 = state_11735__$1;
(statearr_11746_11778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (2))){
var inst_11698 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11699 = (0);
var state_11735__$1 = (function (){var statearr_11747 = state_11735;
(statearr_11747[(9)] = inst_11698);

(statearr_11747[(7)] = inst_11699);

return statearr_11747;
})();
var statearr_11748_11779 = state_11735__$1;
(statearr_11748_11779[(2)] = null);

(statearr_11748_11779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (11))){
var inst_11699 = (state_11735[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11735,(10),Object,null,(9));
var inst_11708 = chs__$1.call(null,inst_11699);
var inst_11709 = done.call(null,inst_11699);
var inst_11710 = cljs.core.async.take_BANG_.call(null,inst_11708,inst_11709);
var state_11735__$1 = state_11735;
var statearr_11749_11780 = state_11735__$1;
(statearr_11749_11780[(2)] = inst_11710);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (9))){
var inst_11699 = (state_11735[(7)]);
var inst_11712 = (state_11735[(2)]);
var inst_11713 = (inst_11699 + (1));
var inst_11699__$1 = inst_11713;
var state_11735__$1 = (function (){var statearr_11750 = state_11735;
(statearr_11750[(7)] = inst_11699__$1);

(statearr_11750[(10)] = inst_11712);

return statearr_11750;
})();
var statearr_11751_11781 = state_11735__$1;
(statearr_11751_11781[(2)] = null);

(statearr_11751_11781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (5))){
var inst_11719 = (state_11735[(2)]);
var state_11735__$1 = (function (){var statearr_11752 = state_11735;
(statearr_11752[(11)] = inst_11719);

return statearr_11752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11735__$1,(12),dchan);
} else {
if((state_val_11736 === (14))){
var inst_11721 = (state_11735[(8)]);
var inst_11726 = cljs.core.apply.call(null,f,inst_11721);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11735__$1,(16),out,inst_11726);
} else {
if((state_val_11736 === (16))){
var inst_11728 = (state_11735[(2)]);
var state_11735__$1 = (function (){var statearr_11753 = state_11735;
(statearr_11753[(12)] = inst_11728);

return statearr_11753;
})();
var statearr_11754_11782 = state_11735__$1;
(statearr_11754_11782[(2)] = null);

(statearr_11754_11782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (10))){
var inst_11703 = (state_11735[(2)]);
var inst_11704 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11735__$1 = (function (){var statearr_11755 = state_11735;
(statearr_11755[(13)] = inst_11703);

return statearr_11755;
})();
var statearr_11756_11783 = state_11735__$1;
(statearr_11756_11783[(2)] = inst_11704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11736 === (8))){
var inst_11717 = (state_11735[(2)]);
var state_11735__$1 = state_11735;
var statearr_11757_11784 = state_11735__$1;
(statearr_11757_11784[(2)] = inst_11717);

(statearr_11757_11784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___11769,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9618__auto__,c__9730__auto___11769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_11761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11761[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_11761[(1)] = (1));

return statearr_11761;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_11735){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_11735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e11762){if((e11762 instanceof Object)){
var ex__9622__auto__ = e11762;
var statearr_11763_11785 = state_11735;
(statearr_11763_11785[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11786 = state_11735;
state_11735 = G__11786;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_11735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_11735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___11769,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9732__auto__ = (function (){var statearr_11764 = f__9731__auto__.call(null);
(statearr_11764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___11769);

return statearr_11764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___11769,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11788 = [];
var len__7322__auto___11846 = arguments.length;
var i__7323__auto___11847 = (0);
while(true){
if((i__7323__auto___11847 < len__7322__auto___11846)){
args11788.push((arguments[i__7323__auto___11847]));

var G__11848 = (i__7323__auto___11847 + (1));
i__7323__auto___11847 = G__11848;
continue;
} else {
}
break;
}

var G__11790 = args11788.length;
switch (G__11790) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11788.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9730__auto___11850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___11850,out){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___11850,out){
return (function (state_11822){
var state_val_11823 = (state_11822[(1)]);
if((state_val_11823 === (7))){
var inst_11801 = (state_11822[(7)]);
var inst_11802 = (state_11822[(8)]);
var inst_11801__$1 = (state_11822[(2)]);
var inst_11802__$1 = cljs.core.nth.call(null,inst_11801__$1,(0),null);
var inst_11803 = cljs.core.nth.call(null,inst_11801__$1,(1),null);
var inst_11804 = (inst_11802__$1 == null);
var state_11822__$1 = (function (){var statearr_11824 = state_11822;
(statearr_11824[(9)] = inst_11803);

(statearr_11824[(7)] = inst_11801__$1);

(statearr_11824[(8)] = inst_11802__$1);

return statearr_11824;
})();
if(cljs.core.truth_(inst_11804)){
var statearr_11825_11851 = state_11822__$1;
(statearr_11825_11851[(1)] = (8));

} else {
var statearr_11826_11852 = state_11822__$1;
(statearr_11826_11852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (1))){
var inst_11791 = cljs.core.vec.call(null,chs);
var inst_11792 = inst_11791;
var state_11822__$1 = (function (){var statearr_11827 = state_11822;
(statearr_11827[(10)] = inst_11792);

return statearr_11827;
})();
var statearr_11828_11853 = state_11822__$1;
(statearr_11828_11853[(2)] = null);

(statearr_11828_11853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (4))){
var inst_11792 = (state_11822[(10)]);
var state_11822__$1 = state_11822;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11822__$1,(7),inst_11792);
} else {
if((state_val_11823 === (6))){
var inst_11818 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11829_11854 = state_11822__$1;
(statearr_11829_11854[(2)] = inst_11818);

(statearr_11829_11854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (3))){
var inst_11820 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11822__$1,inst_11820);
} else {
if((state_val_11823 === (2))){
var inst_11792 = (state_11822[(10)]);
var inst_11794 = cljs.core.count.call(null,inst_11792);
var inst_11795 = (inst_11794 > (0));
var state_11822__$1 = state_11822;
if(cljs.core.truth_(inst_11795)){
var statearr_11831_11855 = state_11822__$1;
(statearr_11831_11855[(1)] = (4));

} else {
var statearr_11832_11856 = state_11822__$1;
(statearr_11832_11856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (11))){
var inst_11792 = (state_11822[(10)]);
var inst_11811 = (state_11822[(2)]);
var tmp11830 = inst_11792;
var inst_11792__$1 = tmp11830;
var state_11822__$1 = (function (){var statearr_11833 = state_11822;
(statearr_11833[(10)] = inst_11792__$1);

(statearr_11833[(11)] = inst_11811);

return statearr_11833;
})();
var statearr_11834_11857 = state_11822__$1;
(statearr_11834_11857[(2)] = null);

(statearr_11834_11857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (9))){
var inst_11802 = (state_11822[(8)]);
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11822__$1,(11),out,inst_11802);
} else {
if((state_val_11823 === (5))){
var inst_11816 = cljs.core.async.close_BANG_.call(null,out);
var state_11822__$1 = state_11822;
var statearr_11835_11858 = state_11822__$1;
(statearr_11835_11858[(2)] = inst_11816);

(statearr_11835_11858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (10))){
var inst_11814 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11836_11859 = state_11822__$1;
(statearr_11836_11859[(2)] = inst_11814);

(statearr_11836_11859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (8))){
var inst_11803 = (state_11822[(9)]);
var inst_11801 = (state_11822[(7)]);
var inst_11792 = (state_11822[(10)]);
var inst_11802 = (state_11822[(8)]);
var inst_11806 = (function (){var cs = inst_11792;
var vec__11797 = inst_11801;
var v = inst_11802;
var c = inst_11803;
return ((function (cs,vec__11797,v,c,inst_11803,inst_11801,inst_11792,inst_11802,state_val_11823,c__9730__auto___11850,out){
return (function (p1__11787_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11787_SHARP_);
});
;})(cs,vec__11797,v,c,inst_11803,inst_11801,inst_11792,inst_11802,state_val_11823,c__9730__auto___11850,out))
})();
var inst_11807 = cljs.core.filterv.call(null,inst_11806,inst_11792);
var inst_11792__$1 = inst_11807;
var state_11822__$1 = (function (){var statearr_11837 = state_11822;
(statearr_11837[(10)] = inst_11792__$1);

return statearr_11837;
})();
var statearr_11838_11860 = state_11822__$1;
(statearr_11838_11860[(2)] = null);

(statearr_11838_11860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___11850,out))
;
return ((function (switch__9618__auto__,c__9730__auto___11850,out){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_11842 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11842[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_11842[(1)] = (1));

return statearr_11842;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_11822){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_11822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e11843){if((e11843 instanceof Object)){
var ex__9622__auto__ = e11843;
var statearr_11844_11861 = state_11822;
(statearr_11844_11861[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11862 = state_11822;
state_11822 = G__11862;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_11822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_11822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___11850,out))
})();
var state__9732__auto__ = (function (){var statearr_11845 = f__9731__auto__.call(null);
(statearr_11845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___11850);

return statearr_11845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___11850,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11863 = [];
var len__7322__auto___11912 = arguments.length;
var i__7323__auto___11913 = (0);
while(true){
if((i__7323__auto___11913 < len__7322__auto___11912)){
args11863.push((arguments[i__7323__auto___11913]));

var G__11914 = (i__7323__auto___11913 + (1));
i__7323__auto___11913 = G__11914;
continue;
} else {
}
break;
}

var G__11865 = args11863.length;
switch (G__11865) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11863.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9730__auto___11916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___11916,out){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___11916,out){
return (function (state_11889){
var state_val_11890 = (state_11889[(1)]);
if((state_val_11890 === (7))){
var inst_11871 = (state_11889[(7)]);
var inst_11871__$1 = (state_11889[(2)]);
var inst_11872 = (inst_11871__$1 == null);
var inst_11873 = cljs.core.not.call(null,inst_11872);
var state_11889__$1 = (function (){var statearr_11891 = state_11889;
(statearr_11891[(7)] = inst_11871__$1);

return statearr_11891;
})();
if(inst_11873){
var statearr_11892_11917 = state_11889__$1;
(statearr_11892_11917[(1)] = (8));

} else {
var statearr_11893_11918 = state_11889__$1;
(statearr_11893_11918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (1))){
var inst_11866 = (0);
var state_11889__$1 = (function (){var statearr_11894 = state_11889;
(statearr_11894[(8)] = inst_11866);

return statearr_11894;
})();
var statearr_11895_11919 = state_11889__$1;
(statearr_11895_11919[(2)] = null);

(statearr_11895_11919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (4))){
var state_11889__$1 = state_11889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11889__$1,(7),ch);
} else {
if((state_val_11890 === (6))){
var inst_11884 = (state_11889[(2)]);
var state_11889__$1 = state_11889;
var statearr_11896_11920 = state_11889__$1;
(statearr_11896_11920[(2)] = inst_11884);

(statearr_11896_11920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (3))){
var inst_11886 = (state_11889[(2)]);
var inst_11887 = cljs.core.async.close_BANG_.call(null,out);
var state_11889__$1 = (function (){var statearr_11897 = state_11889;
(statearr_11897[(9)] = inst_11886);

return statearr_11897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11889__$1,inst_11887);
} else {
if((state_val_11890 === (2))){
var inst_11866 = (state_11889[(8)]);
var inst_11868 = (inst_11866 < n);
var state_11889__$1 = state_11889;
if(cljs.core.truth_(inst_11868)){
var statearr_11898_11921 = state_11889__$1;
(statearr_11898_11921[(1)] = (4));

} else {
var statearr_11899_11922 = state_11889__$1;
(statearr_11899_11922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (11))){
var inst_11866 = (state_11889[(8)]);
var inst_11876 = (state_11889[(2)]);
var inst_11877 = (inst_11866 + (1));
var inst_11866__$1 = inst_11877;
var state_11889__$1 = (function (){var statearr_11900 = state_11889;
(statearr_11900[(8)] = inst_11866__$1);

(statearr_11900[(10)] = inst_11876);

return statearr_11900;
})();
var statearr_11901_11923 = state_11889__$1;
(statearr_11901_11923[(2)] = null);

(statearr_11901_11923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (9))){
var state_11889__$1 = state_11889;
var statearr_11902_11924 = state_11889__$1;
(statearr_11902_11924[(2)] = null);

(statearr_11902_11924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (5))){
var state_11889__$1 = state_11889;
var statearr_11903_11925 = state_11889__$1;
(statearr_11903_11925[(2)] = null);

(statearr_11903_11925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (10))){
var inst_11881 = (state_11889[(2)]);
var state_11889__$1 = state_11889;
var statearr_11904_11926 = state_11889__$1;
(statearr_11904_11926[(2)] = inst_11881);

(statearr_11904_11926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11890 === (8))){
var inst_11871 = (state_11889[(7)]);
var state_11889__$1 = state_11889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11889__$1,(11),out,inst_11871);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___11916,out))
;
return ((function (switch__9618__auto__,c__9730__auto___11916,out){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_11908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11908[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_11908[(1)] = (1));

return statearr_11908;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_11889){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_11889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e11909){if((e11909 instanceof Object)){
var ex__9622__auto__ = e11909;
var statearr_11910_11927 = state_11889;
(statearr_11910_11927[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11928 = state_11889;
state_11889 = G__11928;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_11889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_11889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___11916,out))
})();
var state__9732__auto__ = (function (){var statearr_11911 = f__9731__auto__.call(null);
(statearr_11911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___11916);

return statearr_11911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___11916,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11936 = (function (map_LT_,f,ch,meta11937){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11937 = meta11937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11938,meta11937__$1){
var self__ = this;
var _11938__$1 = this;
return (new cljs.core.async.t_cljs$core$async11936(self__.map_LT_,self__.f,self__.ch,meta11937__$1));
});

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11938){
var self__ = this;
var _11938__$1 = this;
return self__.meta11937;
});

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11939 = (function (map_LT_,f,ch,meta11937,_,fn1,meta11940){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11937 = meta11937;
this._ = _;
this.fn1 = fn1;
this.meta11940 = meta11940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11941,meta11940__$1){
var self__ = this;
var _11941__$1 = this;
return (new cljs.core.async.t_cljs$core$async11939(self__.map_LT_,self__.f,self__.ch,self__.meta11937,self__._,self__.fn1,meta11940__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11941){
var self__ = this;
var _11941__$1 = this;
return self__.meta11940;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11939.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11939.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11929_SHARP_){
return f1.call(null,(((p1__11929_SHARP_ == null))?null:self__.f.call(null,p1__11929_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11939.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11937","meta11937",-839019055,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11936","cljs.core.async/t_cljs$core$async11936",-1107656205,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11940","meta11940",-1621659733,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11939";

cljs.core.async.t_cljs$core$async11939.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11939");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11939 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11939(map_LT___$1,f__$1,ch__$1,meta11937__$1,___$2,fn1__$1,meta11940){
return (new cljs.core.async.t_cljs$core$async11939(map_LT___$1,f__$1,ch__$1,meta11937__$1,___$2,fn1__$1,meta11940));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11939(self__.map_LT_,self__.f,self__.ch,self__.meta11937,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6235__auto__ = ret;
if(cljs.core.truth_(and__6235__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6235__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11937","meta11937",-839019055,null)], null);
});

cljs.core.async.t_cljs$core$async11936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11936";

cljs.core.async.t_cljs$core$async11936.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11936");
});

cljs.core.async.__GT_t_cljs$core$async11936 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11936(map_LT___$1,f__$1,ch__$1,meta11937){
return (new cljs.core.async.t_cljs$core$async11936(map_LT___$1,f__$1,ch__$1,meta11937));
});

}

return (new cljs.core.async.t_cljs$core$async11936(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11945 = (function (map_GT_,f,ch,meta11946){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11946 = meta11946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11947,meta11946__$1){
var self__ = this;
var _11947__$1 = this;
return (new cljs.core.async.t_cljs$core$async11945(self__.map_GT_,self__.f,self__.ch,meta11946__$1));
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11947){
var self__ = this;
var _11947__$1 = this;
return self__.meta11946;
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11946","meta11946",509876440,null)], null);
});

cljs.core.async.t_cljs$core$async11945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11945";

cljs.core.async.t_cljs$core$async11945.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11945");
});

cljs.core.async.__GT_t_cljs$core$async11945 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11945(map_GT___$1,f__$1,ch__$1,meta11946){
return (new cljs.core.async.t_cljs$core$async11945(map_GT___$1,f__$1,ch__$1,meta11946));
});

}

return (new cljs.core.async.t_cljs$core$async11945(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11951 = (function (filter_GT_,p,ch,meta11952){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11952 = meta11952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11953,meta11952__$1){
var self__ = this;
var _11953__$1 = this;
return (new cljs.core.async.t_cljs$core$async11951(self__.filter_GT_,self__.p,self__.ch,meta11952__$1));
});

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11953){
var self__ = this;
var _11953__$1 = this;
return self__.meta11952;
});

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11952","meta11952",758159212,null)], null);
});

cljs.core.async.t_cljs$core$async11951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11951";

cljs.core.async.t_cljs$core$async11951.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write.call(null,writer__6854__auto__,"cljs.core.async/t_cljs$core$async11951");
});

cljs.core.async.__GT_t_cljs$core$async11951 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11951(filter_GT___$1,p__$1,ch__$1,meta11952){
return (new cljs.core.async.t_cljs$core$async11951(filter_GT___$1,p__$1,ch__$1,meta11952));
});

}

return (new cljs.core.async.t_cljs$core$async11951(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11954 = [];
var len__7322__auto___11998 = arguments.length;
var i__7323__auto___11999 = (0);
while(true){
if((i__7323__auto___11999 < len__7322__auto___11998)){
args11954.push((arguments[i__7323__auto___11999]));

var G__12000 = (i__7323__auto___11999 + (1));
i__7323__auto___11999 = G__12000;
continue;
} else {
}
break;
}

var G__11956 = args11954.length;
switch (G__11956) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11954.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9730__auto___12002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___12002,out){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___12002,out){
return (function (state_11977){
var state_val_11978 = (state_11977[(1)]);
if((state_val_11978 === (7))){
var inst_11973 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11979_12003 = state_11977__$1;
(statearr_11979_12003[(2)] = inst_11973);

(statearr_11979_12003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (1))){
var state_11977__$1 = state_11977;
var statearr_11980_12004 = state_11977__$1;
(statearr_11980_12004[(2)] = null);

(statearr_11980_12004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (4))){
var inst_11959 = (state_11977[(7)]);
var inst_11959__$1 = (state_11977[(2)]);
var inst_11960 = (inst_11959__$1 == null);
var state_11977__$1 = (function (){var statearr_11981 = state_11977;
(statearr_11981[(7)] = inst_11959__$1);

return statearr_11981;
})();
if(cljs.core.truth_(inst_11960)){
var statearr_11982_12005 = state_11977__$1;
(statearr_11982_12005[(1)] = (5));

} else {
var statearr_11983_12006 = state_11977__$1;
(statearr_11983_12006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (6))){
var inst_11959 = (state_11977[(7)]);
var inst_11964 = p.call(null,inst_11959);
var state_11977__$1 = state_11977;
if(cljs.core.truth_(inst_11964)){
var statearr_11984_12007 = state_11977__$1;
(statearr_11984_12007[(1)] = (8));

} else {
var statearr_11985_12008 = state_11977__$1;
(statearr_11985_12008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (3))){
var inst_11975 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11977__$1,inst_11975);
} else {
if((state_val_11978 === (2))){
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11977__$1,(4),ch);
} else {
if((state_val_11978 === (11))){
var inst_11967 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11986_12009 = state_11977__$1;
(statearr_11986_12009[(2)] = inst_11967);

(statearr_11986_12009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (9))){
var state_11977__$1 = state_11977;
var statearr_11987_12010 = state_11977__$1;
(statearr_11987_12010[(2)] = null);

(statearr_11987_12010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (5))){
var inst_11962 = cljs.core.async.close_BANG_.call(null,out);
var state_11977__$1 = state_11977;
var statearr_11988_12011 = state_11977__$1;
(statearr_11988_12011[(2)] = inst_11962);

(statearr_11988_12011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (10))){
var inst_11970 = (state_11977[(2)]);
var state_11977__$1 = (function (){var statearr_11989 = state_11977;
(statearr_11989[(8)] = inst_11970);

return statearr_11989;
})();
var statearr_11990_12012 = state_11977__$1;
(statearr_11990_12012[(2)] = null);

(statearr_11990_12012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (8))){
var inst_11959 = (state_11977[(7)]);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11977__$1,(11),out,inst_11959);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___12002,out))
;
return ((function (switch__9618__auto__,c__9730__auto___12002,out){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_11994 = [null,null,null,null,null,null,null,null,null];
(statearr_11994[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_11994[(1)] = (1));

return statearr_11994;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_11977){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_11977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e11995){if((e11995 instanceof Object)){
var ex__9622__auto__ = e11995;
var statearr_11996_12013 = state_11977;
(statearr_11996_12013[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12014 = state_11977;
state_11977 = G__12014;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_11977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_11977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___12002,out))
})();
var state__9732__auto__ = (function (){var statearr_11997 = f__9731__auto__.call(null);
(statearr_11997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___12002);

return statearr_11997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___12002,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12015 = [];
var len__7322__auto___12018 = arguments.length;
var i__7323__auto___12019 = (0);
while(true){
if((i__7323__auto___12019 < len__7322__auto___12018)){
args12015.push((arguments[i__7323__auto___12019]));

var G__12020 = (i__7323__auto___12019 + (1));
i__7323__auto___12019 = G__12020;
continue;
} else {
}
break;
}

var G__12017 = args12015.length;
switch (G__12017) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12015.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto__){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto__){
return (function (state_12187){
var state_val_12188 = (state_12187[(1)]);
if((state_val_12188 === (7))){
var inst_12183 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12189_12230 = state_12187__$1;
(statearr_12189_12230[(2)] = inst_12183);

(statearr_12189_12230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (20))){
var inst_12153 = (state_12187[(7)]);
var inst_12164 = (state_12187[(2)]);
var inst_12165 = cljs.core.next.call(null,inst_12153);
var inst_12139 = inst_12165;
var inst_12140 = null;
var inst_12141 = (0);
var inst_12142 = (0);
var state_12187__$1 = (function (){var statearr_12190 = state_12187;
(statearr_12190[(8)] = inst_12139);

(statearr_12190[(9)] = inst_12142);

(statearr_12190[(10)] = inst_12164);

(statearr_12190[(11)] = inst_12141);

(statearr_12190[(12)] = inst_12140);

return statearr_12190;
})();
var statearr_12191_12231 = state_12187__$1;
(statearr_12191_12231[(2)] = null);

(statearr_12191_12231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (1))){
var state_12187__$1 = state_12187;
var statearr_12192_12232 = state_12187__$1;
(statearr_12192_12232[(2)] = null);

(statearr_12192_12232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (4))){
var inst_12128 = (state_12187[(13)]);
var inst_12128__$1 = (state_12187[(2)]);
var inst_12129 = (inst_12128__$1 == null);
var state_12187__$1 = (function (){var statearr_12193 = state_12187;
(statearr_12193[(13)] = inst_12128__$1);

return statearr_12193;
})();
if(cljs.core.truth_(inst_12129)){
var statearr_12194_12233 = state_12187__$1;
(statearr_12194_12233[(1)] = (5));

} else {
var statearr_12195_12234 = state_12187__$1;
(statearr_12195_12234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (15))){
var state_12187__$1 = state_12187;
var statearr_12199_12235 = state_12187__$1;
(statearr_12199_12235[(2)] = null);

(statearr_12199_12235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (21))){
var state_12187__$1 = state_12187;
var statearr_12200_12236 = state_12187__$1;
(statearr_12200_12236[(2)] = null);

(statearr_12200_12236[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (13))){
var inst_12139 = (state_12187[(8)]);
var inst_12142 = (state_12187[(9)]);
var inst_12141 = (state_12187[(11)]);
var inst_12140 = (state_12187[(12)]);
var inst_12149 = (state_12187[(2)]);
var inst_12150 = (inst_12142 + (1));
var tmp12196 = inst_12139;
var tmp12197 = inst_12141;
var tmp12198 = inst_12140;
var inst_12139__$1 = tmp12196;
var inst_12140__$1 = tmp12198;
var inst_12141__$1 = tmp12197;
var inst_12142__$1 = inst_12150;
var state_12187__$1 = (function (){var statearr_12201 = state_12187;
(statearr_12201[(8)] = inst_12139__$1);

(statearr_12201[(9)] = inst_12142__$1);

(statearr_12201[(11)] = inst_12141__$1);

(statearr_12201[(14)] = inst_12149);

(statearr_12201[(12)] = inst_12140__$1);

return statearr_12201;
})();
var statearr_12202_12237 = state_12187__$1;
(statearr_12202_12237[(2)] = null);

(statearr_12202_12237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (22))){
var state_12187__$1 = state_12187;
var statearr_12203_12238 = state_12187__$1;
(statearr_12203_12238[(2)] = null);

(statearr_12203_12238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (6))){
var inst_12128 = (state_12187[(13)]);
var inst_12137 = f.call(null,inst_12128);
var inst_12138 = cljs.core.seq.call(null,inst_12137);
var inst_12139 = inst_12138;
var inst_12140 = null;
var inst_12141 = (0);
var inst_12142 = (0);
var state_12187__$1 = (function (){var statearr_12204 = state_12187;
(statearr_12204[(8)] = inst_12139);

(statearr_12204[(9)] = inst_12142);

(statearr_12204[(11)] = inst_12141);

(statearr_12204[(12)] = inst_12140);

return statearr_12204;
})();
var statearr_12205_12239 = state_12187__$1;
(statearr_12205_12239[(2)] = null);

(statearr_12205_12239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (17))){
var inst_12153 = (state_12187[(7)]);
var inst_12157 = cljs.core.chunk_first.call(null,inst_12153);
var inst_12158 = cljs.core.chunk_rest.call(null,inst_12153);
var inst_12159 = cljs.core.count.call(null,inst_12157);
var inst_12139 = inst_12158;
var inst_12140 = inst_12157;
var inst_12141 = inst_12159;
var inst_12142 = (0);
var state_12187__$1 = (function (){var statearr_12206 = state_12187;
(statearr_12206[(8)] = inst_12139);

(statearr_12206[(9)] = inst_12142);

(statearr_12206[(11)] = inst_12141);

(statearr_12206[(12)] = inst_12140);

return statearr_12206;
})();
var statearr_12207_12240 = state_12187__$1;
(statearr_12207_12240[(2)] = null);

(statearr_12207_12240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (3))){
var inst_12185 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12187__$1,inst_12185);
} else {
if((state_val_12188 === (12))){
var inst_12173 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12208_12241 = state_12187__$1;
(statearr_12208_12241[(2)] = inst_12173);

(statearr_12208_12241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (2))){
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12187__$1,(4),in$);
} else {
if((state_val_12188 === (23))){
var inst_12181 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12209_12242 = state_12187__$1;
(statearr_12209_12242[(2)] = inst_12181);

(statearr_12209_12242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (19))){
var inst_12168 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12210_12243 = state_12187__$1;
(statearr_12210_12243[(2)] = inst_12168);

(statearr_12210_12243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (11))){
var inst_12139 = (state_12187[(8)]);
var inst_12153 = (state_12187[(7)]);
var inst_12153__$1 = cljs.core.seq.call(null,inst_12139);
var state_12187__$1 = (function (){var statearr_12211 = state_12187;
(statearr_12211[(7)] = inst_12153__$1);

return statearr_12211;
})();
if(inst_12153__$1){
var statearr_12212_12244 = state_12187__$1;
(statearr_12212_12244[(1)] = (14));

} else {
var statearr_12213_12245 = state_12187__$1;
(statearr_12213_12245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (9))){
var inst_12175 = (state_12187[(2)]);
var inst_12176 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12187__$1 = (function (){var statearr_12214 = state_12187;
(statearr_12214[(15)] = inst_12175);

return statearr_12214;
})();
if(cljs.core.truth_(inst_12176)){
var statearr_12215_12246 = state_12187__$1;
(statearr_12215_12246[(1)] = (21));

} else {
var statearr_12216_12247 = state_12187__$1;
(statearr_12216_12247[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (5))){
var inst_12131 = cljs.core.async.close_BANG_.call(null,out);
var state_12187__$1 = state_12187;
var statearr_12217_12248 = state_12187__$1;
(statearr_12217_12248[(2)] = inst_12131);

(statearr_12217_12248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (14))){
var inst_12153 = (state_12187[(7)]);
var inst_12155 = cljs.core.chunked_seq_QMARK_.call(null,inst_12153);
var state_12187__$1 = state_12187;
if(inst_12155){
var statearr_12218_12249 = state_12187__$1;
(statearr_12218_12249[(1)] = (17));

} else {
var statearr_12219_12250 = state_12187__$1;
(statearr_12219_12250[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (16))){
var inst_12171 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12220_12251 = state_12187__$1;
(statearr_12220_12251[(2)] = inst_12171);

(statearr_12220_12251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (10))){
var inst_12142 = (state_12187[(9)]);
var inst_12140 = (state_12187[(12)]);
var inst_12147 = cljs.core._nth.call(null,inst_12140,inst_12142);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12187__$1,(13),out,inst_12147);
} else {
if((state_val_12188 === (18))){
var inst_12153 = (state_12187[(7)]);
var inst_12162 = cljs.core.first.call(null,inst_12153);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12187__$1,(20),out,inst_12162);
} else {
if((state_val_12188 === (8))){
var inst_12142 = (state_12187[(9)]);
var inst_12141 = (state_12187[(11)]);
var inst_12144 = (inst_12142 < inst_12141);
var inst_12145 = inst_12144;
var state_12187__$1 = state_12187;
if(cljs.core.truth_(inst_12145)){
var statearr_12221_12252 = state_12187__$1;
(statearr_12221_12252[(1)] = (10));

} else {
var statearr_12222_12253 = state_12187__$1;
(statearr_12222_12253[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto__))
;
return ((function (switch__9618__auto__,c__9730__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9619__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9619__auto____0 = (function (){
var statearr_12226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12226[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9619__auto__);

(statearr_12226[(1)] = (1));

return statearr_12226;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9619__auto____1 = (function (state_12187){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_12187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e12227){if((e12227 instanceof Object)){
var ex__9622__auto__ = e12227;
var statearr_12228_12254 = state_12187;
(statearr_12228_12254[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12255 = state_12187;
state_12187 = G__12255;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9619__auto__ = function(state_12187){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9619__auto____1.call(this,state_12187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9619__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9619__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto__))
})();
var state__9732__auto__ = (function (){var statearr_12229 = f__9731__auto__.call(null);
(statearr_12229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto__);

return statearr_12229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto__))
);

return c__9730__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12256 = [];
var len__7322__auto___12259 = arguments.length;
var i__7323__auto___12260 = (0);
while(true){
if((i__7323__auto___12260 < len__7322__auto___12259)){
args12256.push((arguments[i__7323__auto___12260]));

var G__12261 = (i__7323__auto___12260 + (1));
i__7323__auto___12260 = G__12261;
continue;
} else {
}
break;
}

var G__12258 = args12256.length;
switch (G__12258) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12256.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12263 = [];
var len__7322__auto___12266 = arguments.length;
var i__7323__auto___12267 = (0);
while(true){
if((i__7323__auto___12267 < len__7322__auto___12266)){
args12263.push((arguments[i__7323__auto___12267]));

var G__12268 = (i__7323__auto___12267 + (1));
i__7323__auto___12267 = G__12268;
continue;
} else {
}
break;
}

var G__12265 = args12263.length;
switch (G__12265) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12263.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12270 = [];
var len__7322__auto___12321 = arguments.length;
var i__7323__auto___12322 = (0);
while(true){
if((i__7323__auto___12322 < len__7322__auto___12321)){
args12270.push((arguments[i__7323__auto___12322]));

var G__12323 = (i__7323__auto___12322 + (1));
i__7323__auto___12322 = G__12323;
continue;
} else {
}
break;
}

var G__12272 = args12270.length;
switch (G__12272) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12270.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9730__auto___12325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___12325,out){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___12325,out){
return (function (state_12296){
var state_val_12297 = (state_12296[(1)]);
if((state_val_12297 === (7))){
var inst_12291 = (state_12296[(2)]);
var state_12296__$1 = state_12296;
var statearr_12298_12326 = state_12296__$1;
(statearr_12298_12326[(2)] = inst_12291);

(statearr_12298_12326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (1))){
var inst_12273 = null;
var state_12296__$1 = (function (){var statearr_12299 = state_12296;
(statearr_12299[(7)] = inst_12273);

return statearr_12299;
})();
var statearr_12300_12327 = state_12296__$1;
(statearr_12300_12327[(2)] = null);

(statearr_12300_12327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (4))){
var inst_12276 = (state_12296[(8)]);
var inst_12276__$1 = (state_12296[(2)]);
var inst_12277 = (inst_12276__$1 == null);
var inst_12278 = cljs.core.not.call(null,inst_12277);
var state_12296__$1 = (function (){var statearr_12301 = state_12296;
(statearr_12301[(8)] = inst_12276__$1);

return statearr_12301;
})();
if(inst_12278){
var statearr_12302_12328 = state_12296__$1;
(statearr_12302_12328[(1)] = (5));

} else {
var statearr_12303_12329 = state_12296__$1;
(statearr_12303_12329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (6))){
var state_12296__$1 = state_12296;
var statearr_12304_12330 = state_12296__$1;
(statearr_12304_12330[(2)] = null);

(statearr_12304_12330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (3))){
var inst_12293 = (state_12296[(2)]);
var inst_12294 = cljs.core.async.close_BANG_.call(null,out);
var state_12296__$1 = (function (){var statearr_12305 = state_12296;
(statearr_12305[(9)] = inst_12293);

return statearr_12305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12296__$1,inst_12294);
} else {
if((state_val_12297 === (2))){
var state_12296__$1 = state_12296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12296__$1,(4),ch);
} else {
if((state_val_12297 === (11))){
var inst_12276 = (state_12296[(8)]);
var inst_12285 = (state_12296[(2)]);
var inst_12273 = inst_12276;
var state_12296__$1 = (function (){var statearr_12306 = state_12296;
(statearr_12306[(7)] = inst_12273);

(statearr_12306[(10)] = inst_12285);

return statearr_12306;
})();
var statearr_12307_12331 = state_12296__$1;
(statearr_12307_12331[(2)] = null);

(statearr_12307_12331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (9))){
var inst_12276 = (state_12296[(8)]);
var state_12296__$1 = state_12296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12296__$1,(11),out,inst_12276);
} else {
if((state_val_12297 === (5))){
var inst_12276 = (state_12296[(8)]);
var inst_12273 = (state_12296[(7)]);
var inst_12280 = cljs.core._EQ_.call(null,inst_12276,inst_12273);
var state_12296__$1 = state_12296;
if(inst_12280){
var statearr_12309_12332 = state_12296__$1;
(statearr_12309_12332[(1)] = (8));

} else {
var statearr_12310_12333 = state_12296__$1;
(statearr_12310_12333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (10))){
var inst_12288 = (state_12296[(2)]);
var state_12296__$1 = state_12296;
var statearr_12311_12334 = state_12296__$1;
(statearr_12311_12334[(2)] = inst_12288);

(statearr_12311_12334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12297 === (8))){
var inst_12273 = (state_12296[(7)]);
var tmp12308 = inst_12273;
var inst_12273__$1 = tmp12308;
var state_12296__$1 = (function (){var statearr_12312 = state_12296;
(statearr_12312[(7)] = inst_12273__$1);

return statearr_12312;
})();
var statearr_12313_12335 = state_12296__$1;
(statearr_12313_12335[(2)] = null);

(statearr_12313_12335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___12325,out))
;
return ((function (switch__9618__auto__,c__9730__auto___12325,out){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_12317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12317[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_12317[(1)] = (1));

return statearr_12317;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_12296){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_12296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e12318){if((e12318 instanceof Object)){
var ex__9622__auto__ = e12318;
var statearr_12319_12336 = state_12296;
(statearr_12319_12336[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12337 = state_12296;
state_12296 = G__12337;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_12296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_12296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___12325,out))
})();
var state__9732__auto__ = (function (){var statearr_12320 = f__9731__auto__.call(null);
(statearr_12320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___12325);

return statearr_12320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___12325,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12338 = [];
var len__7322__auto___12408 = arguments.length;
var i__7323__auto___12409 = (0);
while(true){
if((i__7323__auto___12409 < len__7322__auto___12408)){
args12338.push((arguments[i__7323__auto___12409]));

var G__12410 = (i__7323__auto___12409 + (1));
i__7323__auto___12409 = G__12410;
continue;
} else {
}
break;
}

var G__12340 = args12338.length;
switch (G__12340) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12338.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9730__auto___12412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___12412,out){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___12412,out){
return (function (state_12378){
var state_val_12379 = (state_12378[(1)]);
if((state_val_12379 === (7))){
var inst_12374 = (state_12378[(2)]);
var state_12378__$1 = state_12378;
var statearr_12380_12413 = state_12378__$1;
(statearr_12380_12413[(2)] = inst_12374);

(statearr_12380_12413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (1))){
var inst_12341 = (new Array(n));
var inst_12342 = inst_12341;
var inst_12343 = (0);
var state_12378__$1 = (function (){var statearr_12381 = state_12378;
(statearr_12381[(7)] = inst_12343);

(statearr_12381[(8)] = inst_12342);

return statearr_12381;
})();
var statearr_12382_12414 = state_12378__$1;
(statearr_12382_12414[(2)] = null);

(statearr_12382_12414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (4))){
var inst_12346 = (state_12378[(9)]);
var inst_12346__$1 = (state_12378[(2)]);
var inst_12347 = (inst_12346__$1 == null);
var inst_12348 = cljs.core.not.call(null,inst_12347);
var state_12378__$1 = (function (){var statearr_12383 = state_12378;
(statearr_12383[(9)] = inst_12346__$1);

return statearr_12383;
})();
if(inst_12348){
var statearr_12384_12415 = state_12378__$1;
(statearr_12384_12415[(1)] = (5));

} else {
var statearr_12385_12416 = state_12378__$1;
(statearr_12385_12416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (15))){
var inst_12368 = (state_12378[(2)]);
var state_12378__$1 = state_12378;
var statearr_12386_12417 = state_12378__$1;
(statearr_12386_12417[(2)] = inst_12368);

(statearr_12386_12417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (13))){
var state_12378__$1 = state_12378;
var statearr_12387_12418 = state_12378__$1;
(statearr_12387_12418[(2)] = null);

(statearr_12387_12418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (6))){
var inst_12343 = (state_12378[(7)]);
var inst_12364 = (inst_12343 > (0));
var state_12378__$1 = state_12378;
if(cljs.core.truth_(inst_12364)){
var statearr_12388_12419 = state_12378__$1;
(statearr_12388_12419[(1)] = (12));

} else {
var statearr_12389_12420 = state_12378__$1;
(statearr_12389_12420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (3))){
var inst_12376 = (state_12378[(2)]);
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12378__$1,inst_12376);
} else {
if((state_val_12379 === (12))){
var inst_12342 = (state_12378[(8)]);
var inst_12366 = cljs.core.vec.call(null,inst_12342);
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12378__$1,(15),out,inst_12366);
} else {
if((state_val_12379 === (2))){
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12378__$1,(4),ch);
} else {
if((state_val_12379 === (11))){
var inst_12358 = (state_12378[(2)]);
var inst_12359 = (new Array(n));
var inst_12342 = inst_12359;
var inst_12343 = (0);
var state_12378__$1 = (function (){var statearr_12390 = state_12378;
(statearr_12390[(7)] = inst_12343);

(statearr_12390[(10)] = inst_12358);

(statearr_12390[(8)] = inst_12342);

return statearr_12390;
})();
var statearr_12391_12421 = state_12378__$1;
(statearr_12391_12421[(2)] = null);

(statearr_12391_12421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (9))){
var inst_12342 = (state_12378[(8)]);
var inst_12356 = cljs.core.vec.call(null,inst_12342);
var state_12378__$1 = state_12378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12378__$1,(11),out,inst_12356);
} else {
if((state_val_12379 === (5))){
var inst_12346 = (state_12378[(9)]);
var inst_12343 = (state_12378[(7)]);
var inst_12351 = (state_12378[(11)]);
var inst_12342 = (state_12378[(8)]);
var inst_12350 = (inst_12342[inst_12343] = inst_12346);
var inst_12351__$1 = (inst_12343 + (1));
var inst_12352 = (inst_12351__$1 < n);
var state_12378__$1 = (function (){var statearr_12392 = state_12378;
(statearr_12392[(11)] = inst_12351__$1);

(statearr_12392[(12)] = inst_12350);

return statearr_12392;
})();
if(cljs.core.truth_(inst_12352)){
var statearr_12393_12422 = state_12378__$1;
(statearr_12393_12422[(1)] = (8));

} else {
var statearr_12394_12423 = state_12378__$1;
(statearr_12394_12423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (14))){
var inst_12371 = (state_12378[(2)]);
var inst_12372 = cljs.core.async.close_BANG_.call(null,out);
var state_12378__$1 = (function (){var statearr_12396 = state_12378;
(statearr_12396[(13)] = inst_12371);

return statearr_12396;
})();
var statearr_12397_12424 = state_12378__$1;
(statearr_12397_12424[(2)] = inst_12372);

(statearr_12397_12424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (10))){
var inst_12362 = (state_12378[(2)]);
var state_12378__$1 = state_12378;
var statearr_12398_12425 = state_12378__$1;
(statearr_12398_12425[(2)] = inst_12362);

(statearr_12398_12425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12379 === (8))){
var inst_12351 = (state_12378[(11)]);
var inst_12342 = (state_12378[(8)]);
var tmp12395 = inst_12342;
var inst_12342__$1 = tmp12395;
var inst_12343 = inst_12351;
var state_12378__$1 = (function (){var statearr_12399 = state_12378;
(statearr_12399[(7)] = inst_12343);

(statearr_12399[(8)] = inst_12342__$1);

return statearr_12399;
})();
var statearr_12400_12426 = state_12378__$1;
(statearr_12400_12426[(2)] = null);

(statearr_12400_12426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___12412,out))
;
return ((function (switch__9618__auto__,c__9730__auto___12412,out){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_12404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12404[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_12404[(1)] = (1));

return statearr_12404;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_12378){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_12378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e12405){if((e12405 instanceof Object)){
var ex__9622__auto__ = e12405;
var statearr_12406_12427 = state_12378;
(statearr_12406_12427[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12428 = state_12378;
state_12378 = G__12428;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_12378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_12378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___12412,out))
})();
var state__9732__auto__ = (function (){var statearr_12407 = f__9731__auto__.call(null);
(statearr_12407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___12412);

return statearr_12407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___12412,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12429 = [];
var len__7322__auto___12503 = arguments.length;
var i__7323__auto___12504 = (0);
while(true){
if((i__7323__auto___12504 < len__7322__auto___12503)){
args12429.push((arguments[i__7323__auto___12504]));

var G__12505 = (i__7323__auto___12504 + (1));
i__7323__auto___12504 = G__12505;
continue;
} else {
}
break;
}

var G__12431 = args12429.length;
switch (G__12431) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12429.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9730__auto___12507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9730__auto___12507,out){
return (function (){
var f__9731__auto__ = (function (){var switch__9618__auto__ = ((function (c__9730__auto___12507,out){
return (function (state_12473){
var state_val_12474 = (state_12473[(1)]);
if((state_val_12474 === (7))){
var inst_12469 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
var statearr_12475_12508 = state_12473__$1;
(statearr_12475_12508[(2)] = inst_12469);

(statearr_12475_12508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (1))){
var inst_12432 = [];
var inst_12433 = inst_12432;
var inst_12434 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12473__$1 = (function (){var statearr_12476 = state_12473;
(statearr_12476[(7)] = inst_12433);

(statearr_12476[(8)] = inst_12434);

return statearr_12476;
})();
var statearr_12477_12509 = state_12473__$1;
(statearr_12477_12509[(2)] = null);

(statearr_12477_12509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (4))){
var inst_12437 = (state_12473[(9)]);
var inst_12437__$1 = (state_12473[(2)]);
var inst_12438 = (inst_12437__$1 == null);
var inst_12439 = cljs.core.not.call(null,inst_12438);
var state_12473__$1 = (function (){var statearr_12478 = state_12473;
(statearr_12478[(9)] = inst_12437__$1);

return statearr_12478;
})();
if(inst_12439){
var statearr_12479_12510 = state_12473__$1;
(statearr_12479_12510[(1)] = (5));

} else {
var statearr_12480_12511 = state_12473__$1;
(statearr_12480_12511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (15))){
var inst_12463 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
var statearr_12481_12512 = state_12473__$1;
(statearr_12481_12512[(2)] = inst_12463);

(statearr_12481_12512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (13))){
var state_12473__$1 = state_12473;
var statearr_12482_12513 = state_12473__$1;
(statearr_12482_12513[(2)] = null);

(statearr_12482_12513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (6))){
var inst_12433 = (state_12473[(7)]);
var inst_12458 = inst_12433.length;
var inst_12459 = (inst_12458 > (0));
var state_12473__$1 = state_12473;
if(cljs.core.truth_(inst_12459)){
var statearr_12483_12514 = state_12473__$1;
(statearr_12483_12514[(1)] = (12));

} else {
var statearr_12484_12515 = state_12473__$1;
(statearr_12484_12515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (3))){
var inst_12471 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12473__$1,inst_12471);
} else {
if((state_val_12474 === (12))){
var inst_12433 = (state_12473[(7)]);
var inst_12461 = cljs.core.vec.call(null,inst_12433);
var state_12473__$1 = state_12473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12473__$1,(15),out,inst_12461);
} else {
if((state_val_12474 === (2))){
var state_12473__$1 = state_12473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12473__$1,(4),ch);
} else {
if((state_val_12474 === (11))){
var inst_12441 = (state_12473[(10)]);
var inst_12437 = (state_12473[(9)]);
var inst_12451 = (state_12473[(2)]);
var inst_12452 = [];
var inst_12453 = inst_12452.push(inst_12437);
var inst_12433 = inst_12452;
var inst_12434 = inst_12441;
var state_12473__$1 = (function (){var statearr_12485 = state_12473;
(statearr_12485[(11)] = inst_12451);

(statearr_12485[(7)] = inst_12433);

(statearr_12485[(8)] = inst_12434);

(statearr_12485[(12)] = inst_12453);

return statearr_12485;
})();
var statearr_12486_12516 = state_12473__$1;
(statearr_12486_12516[(2)] = null);

(statearr_12486_12516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (9))){
var inst_12433 = (state_12473[(7)]);
var inst_12449 = cljs.core.vec.call(null,inst_12433);
var state_12473__$1 = state_12473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12473__$1,(11),out,inst_12449);
} else {
if((state_val_12474 === (5))){
var inst_12434 = (state_12473[(8)]);
var inst_12441 = (state_12473[(10)]);
var inst_12437 = (state_12473[(9)]);
var inst_12441__$1 = f.call(null,inst_12437);
var inst_12442 = cljs.core._EQ_.call(null,inst_12441__$1,inst_12434);
var inst_12443 = cljs.core.keyword_identical_QMARK_.call(null,inst_12434,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12444 = (inst_12442) || (inst_12443);
var state_12473__$1 = (function (){var statearr_12487 = state_12473;
(statearr_12487[(10)] = inst_12441__$1);

return statearr_12487;
})();
if(cljs.core.truth_(inst_12444)){
var statearr_12488_12517 = state_12473__$1;
(statearr_12488_12517[(1)] = (8));

} else {
var statearr_12489_12518 = state_12473__$1;
(statearr_12489_12518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (14))){
var inst_12466 = (state_12473[(2)]);
var inst_12467 = cljs.core.async.close_BANG_.call(null,out);
var state_12473__$1 = (function (){var statearr_12491 = state_12473;
(statearr_12491[(13)] = inst_12466);

return statearr_12491;
})();
var statearr_12492_12519 = state_12473__$1;
(statearr_12492_12519[(2)] = inst_12467);

(statearr_12492_12519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (10))){
var inst_12456 = (state_12473[(2)]);
var state_12473__$1 = state_12473;
var statearr_12493_12520 = state_12473__$1;
(statearr_12493_12520[(2)] = inst_12456);

(statearr_12493_12520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12474 === (8))){
var inst_12433 = (state_12473[(7)]);
var inst_12441 = (state_12473[(10)]);
var inst_12437 = (state_12473[(9)]);
var inst_12446 = inst_12433.push(inst_12437);
var tmp12490 = inst_12433;
var inst_12433__$1 = tmp12490;
var inst_12434 = inst_12441;
var state_12473__$1 = (function (){var statearr_12494 = state_12473;
(statearr_12494[(7)] = inst_12433__$1);

(statearr_12494[(8)] = inst_12434);

(statearr_12494[(14)] = inst_12446);

return statearr_12494;
})();
var statearr_12495_12521 = state_12473__$1;
(statearr_12495_12521[(2)] = null);

(statearr_12495_12521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9730__auto___12507,out))
;
return ((function (switch__9618__auto__,c__9730__auto___12507,out){
return (function() {
var cljs$core$async$state_machine__9619__auto__ = null;
var cljs$core$async$state_machine__9619__auto____0 = (function (){
var statearr_12499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12499[(0)] = cljs$core$async$state_machine__9619__auto__);

(statearr_12499[(1)] = (1));

return statearr_12499;
});
var cljs$core$async$state_machine__9619__auto____1 = (function (state_12473){
while(true){
var ret_value__9620__auto__ = (function (){try{while(true){
var result__9621__auto__ = switch__9618__auto__.call(null,state_12473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9621__auto__;
}
break;
}
}catch (e12500){if((e12500 instanceof Object)){
var ex__9622__auto__ = e12500;
var statearr_12501_12522 = state_12473;
(statearr_12501_12522[(5)] = ex__9622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12523 = state_12473;
state_12473 = G__12523;
continue;
} else {
return ret_value__9620__auto__;
}
break;
}
});
cljs$core$async$state_machine__9619__auto__ = function(state_12473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9619__auto____1.call(this,state_12473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9619__auto____0;
cljs$core$async$state_machine__9619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9619__auto____1;
return cljs$core$async$state_machine__9619__auto__;
})()
;})(switch__9618__auto__,c__9730__auto___12507,out))
})();
var state__9732__auto__ = (function (){var statearr_12502 = f__9731__auto__.call(null);
(statearr_12502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9730__auto___12507);

return statearr_12502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9732__auto__);
});})(c__9730__auto___12507,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map