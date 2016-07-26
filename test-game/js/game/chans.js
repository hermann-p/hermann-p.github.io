// Compiled by ClojureScript 1.9.89 {}
goog.provide('game.chans');
goog.require('cljs.core');
goog.require('cljs.core.async');
game.chans.state = cljs.core.async.chan.call(null);
game.chans.action = cljs.core.async.chan.call(null);
game.chans.time = cljs.core.async.chan.call(null);

//# sourceMappingURL=chans.js.map