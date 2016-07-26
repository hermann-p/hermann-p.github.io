// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6235__auto__ = v;
if(cljs.core.truth_(and__6235__auto__)){
return (v > (0));
} else {
return and__6235__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__9002_SHARP_,p2__9001_SHARP_){
var vec__9006 = clojure.string.split.call(null,p2__9001_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__9006,(0),null);
var v = cljs.core.nth.call(null,vec__9006,(1),null);
return cljs.core.assoc.call(null,p1__9002_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__9009_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__9009_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__9010){
var vec__9014 = p__9010;
var k = cljs.core.nth.call(null,vec__9014,(0),null);
var v = cljs.core.nth.call(null,vec__9014,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__9017_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__9017_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6235__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6235__auto__){
var and__6235__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6235__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6235__auto____$1;
}
} else {
return and__6235__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__9018_SHARP_){
return cljs_http.client.decode_body.call(null,p1__9018_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9025 = arguments.length;
var i__7323__auto___9026 = (0);
while(true){
if((i__7323__auto___9026 < len__7322__auto___9025)){
args__7329__auto__.push((arguments[i__7323__auto___9026]));

var G__9027 = (i__7323__auto___9026 + (1));
i__7323__auto___9026 = G__9027;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__9021){
var vec__9022 = p__9021;
var default_headers = cljs.core.nth.call(null,vec__9022,(0),null);
return ((function (vec__9022,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__9022,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq9019){
var G__9020 = cljs.core.first.call(null,seq9019);
var seq9019__$1 = cljs.core.next.call(null,seq9019);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__9020,seq9019__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9034 = arguments.length;
var i__7323__auto___9035 = (0);
while(true){
if((i__7323__auto___9035 < len__7322__auto___9034)){
args__7329__auto__.push((arguments[i__7323__auto___9035]));

var G__9036 = (i__7323__auto___9035 + (1));
i__7323__auto___9035 = G__9036;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__9030){
var vec__9031 = p__9030;
var accept = cljs.core.nth.call(null,vec__9031,(0),null);
return ((function (vec__9031,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__9031,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq9028){
var G__9029 = cljs.core.first.call(null,seq9028);
var seq9028__$1 = cljs.core.next.call(null,seq9028);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__9029,seq9028__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9043 = arguments.length;
var i__7323__auto___9044 = (0);
while(true){
if((i__7323__auto___9044 < len__7322__auto___9043)){
args__7329__auto__.push((arguments[i__7323__auto___9044]));

var G__9045 = (i__7323__auto___9044 + (1));
i__7323__auto___9044 = G__9045;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__9039){
var vec__9040 = p__9039;
var content_type = cljs.core.nth.call(null,vec__9040,(0),null);
return ((function (vec__9040,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__9040,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq9037){
var G__9038 = cljs.core.first.call(null,seq9037);
var seq9037__$1 = cljs.core.next.call(null,seq9037);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__9038,seq9037__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__9048 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__9048__$1 = ((((!((map__9048 == null)))?((((map__9048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9048):map__9048);
var encoding = cljs.core.get.call(null,map__9048__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__9048__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__9054 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__9054__$1 = ((((!((map__9054 == null)))?((((map__9054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9054):map__9054);
var decoding = cljs.core.get.call(null,map__9054__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__9054__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__9054,map__9054__$1,decoding,decoding_opts){
return (function (p1__9050_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__9050_SHARP_,decoding,decoding_opts);
});})(map__9054,map__9054__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__9054,map__9054__$1,decoding,decoding_opts,transit_decode){
return (function (p1__9051_SHARP_){
return cljs_http.client.decode_body.call(null,p1__9051_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__9054,map__9054__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__9056_SHARP_){
return cljs_http.client.decode_body.call(null,p1__9056_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__9060){
var map__9061 = p__9060;
var map__9061__$1 = ((((!((map__9061 == null)))?((((map__9061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9061):map__9061);
var req = map__9061__$1;
var query_params = cljs.core.get.call(null,map__9061__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__9066){
var map__9067 = p__9066;
var map__9067__$1 = ((((!((map__9067 == null)))?((((map__9067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9067):map__9067);
var request = map__9067__$1;
var form_params = cljs.core.get.call(null,map__9067__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__9067__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__9067__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6235__auto__ = form_params;
if(cljs.core.truth_(and__6235__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6235__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__9079_9089 = cljs.core.seq.call(null,params);
var chunk__9080_9090 = null;
var count__9081_9091 = (0);
var i__9082_9092 = (0);
while(true){
if((i__9082_9092 < count__9081_9091)){
var vec__9083_9093 = cljs.core._nth.call(null,chunk__9080_9090,i__9082_9092);
var k_9094 = cljs.core.nth.call(null,vec__9083_9093,(0),null);
var v_9095 = cljs.core.nth.call(null,vec__9083_9093,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_9095)){
form_data.append(cljs.core.name.call(null,k_9094),cljs.core.first.call(null,v_9095),cljs.core.second.call(null,v_9095));
} else {
form_data.append(cljs.core.name.call(null,k_9094),v_9095);
}

var G__9096 = seq__9079_9089;
var G__9097 = chunk__9080_9090;
var G__9098 = count__9081_9091;
var G__9099 = (i__9082_9092 + (1));
seq__9079_9089 = G__9096;
chunk__9080_9090 = G__9097;
count__9081_9091 = G__9098;
i__9082_9092 = G__9099;
continue;
} else {
var temp__4657__auto___9100 = cljs.core.seq.call(null,seq__9079_9089);
if(temp__4657__auto___9100){
var seq__9079_9101__$1 = temp__4657__auto___9100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9079_9101__$1)){
var c__7058__auto___9102 = cljs.core.chunk_first.call(null,seq__9079_9101__$1);
var G__9103 = cljs.core.chunk_rest.call(null,seq__9079_9101__$1);
var G__9104 = c__7058__auto___9102;
var G__9105 = cljs.core.count.call(null,c__7058__auto___9102);
var G__9106 = (0);
seq__9079_9089 = G__9103;
chunk__9080_9090 = G__9104;
count__9081_9091 = G__9105;
i__9082_9092 = G__9106;
continue;
} else {
var vec__9086_9107 = cljs.core.first.call(null,seq__9079_9101__$1);
var k_9108 = cljs.core.nth.call(null,vec__9086_9107,(0),null);
var v_9109 = cljs.core.nth.call(null,vec__9086_9107,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_9109)){
form_data.append(cljs.core.name.call(null,k_9108),cljs.core.first.call(null,v_9109),cljs.core.second.call(null,v_9109));
} else {
form_data.append(cljs.core.name.call(null,k_9108),v_9109);
}

var G__9110 = cljs.core.next.call(null,seq__9079_9101__$1);
var G__9111 = null;
var G__9112 = (0);
var G__9113 = (0);
seq__9079_9089 = G__9110;
chunk__9080_9090 = G__9111;
count__9081_9091 = G__9112;
i__9082_9092 = G__9113;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__9117){
var map__9118 = p__9117;
var map__9118__$1 = ((((!((map__9118 == null)))?((((map__9118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9118):map__9118);
var request = map__9118__$1;
var multipart_params = cljs.core.get.call(null,map__9118__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__9118__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6235__auto__ = multipart_params;
if(cljs.core.truth_(and__6235__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6235__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__9120_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__9120_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__9125){
var map__9126 = p__9125;
var map__9126__$1 = ((((!((map__9126 == null)))?((((map__9126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9126):map__9126);
var req = map__9126__$1;
var query_params = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__9126,map__9126__$1,req,query_params){
return (function (p1__9121_SHARP_){
return cljs.core.merge.call(null,p1__9121_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__9126,map__9126__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9134 = arguments.length;
var i__7323__auto___9135 = (0);
while(true){
if((i__7323__auto___9135 < len__7322__auto___9134)){
args__7329__auto__.push((arguments[i__7323__auto___9135]));

var G__9136 = (i__7323__auto___9135 + (1));
i__7323__auto___9135 = G__9136;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__9130){
var vec__9131 = p__9130;
var credentials = cljs.core.nth.call(null,vec__9131,(0),null);
return ((function (vec__9131,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6247__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__9131,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq9128){
var G__9129 = cljs.core.first.call(null,seq9128);
var seq9128__$1 = cljs.core.next.call(null,seq9128);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__9129,seq9128__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9143 = arguments.length;
var i__7323__auto___9144 = (0);
while(true){
if((i__7323__auto___9144 < len__7322__auto___9143)){
args__7329__auto__.push((arguments[i__7323__auto___9144]));

var G__9145 = (i__7323__auto___9144 + (1));
i__7323__auto___9144 = G__9145;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9139){
var vec__9140 = p__9139;
var req = cljs.core.nth.call(null,vec__9140,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq9137){
var G__9138 = cljs.core.first.call(null,seq9137);
var seq9137__$1 = cljs.core.next.call(null,seq9137);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__9138,seq9137__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9152 = arguments.length;
var i__7323__auto___9153 = (0);
while(true){
if((i__7323__auto___9153 < len__7322__auto___9152)){
args__7329__auto__.push((arguments[i__7323__auto___9153]));

var G__9154 = (i__7323__auto___9153 + (1));
i__7323__auto___9153 = G__9154;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9148){
var vec__9149 = p__9148;
var req = cljs.core.nth.call(null,vec__9149,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq9146){
var G__9147 = cljs.core.first.call(null,seq9146);
var seq9146__$1 = cljs.core.next.call(null,seq9146);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__9147,seq9146__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9161 = arguments.length;
var i__7323__auto___9162 = (0);
while(true){
if((i__7323__auto___9162 < len__7322__auto___9161)){
args__7329__auto__.push((arguments[i__7323__auto___9162]));

var G__9163 = (i__7323__auto___9162 + (1));
i__7323__auto___9162 = G__9163;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9157){
var vec__9158 = p__9157;
var req = cljs.core.nth.call(null,vec__9158,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq9155){
var G__9156 = cljs.core.first.call(null,seq9155);
var seq9155__$1 = cljs.core.next.call(null,seq9155);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__9156,seq9155__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9170 = arguments.length;
var i__7323__auto___9171 = (0);
while(true){
if((i__7323__auto___9171 < len__7322__auto___9170)){
args__7329__auto__.push((arguments[i__7323__auto___9171]));

var G__9172 = (i__7323__auto___9171 + (1));
i__7323__auto___9171 = G__9172;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9166){
var vec__9167 = p__9166;
var req = cljs.core.nth.call(null,vec__9167,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq9164){
var G__9165 = cljs.core.first.call(null,seq9164);
var seq9164__$1 = cljs.core.next.call(null,seq9164);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__9165,seq9164__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9179 = arguments.length;
var i__7323__auto___9180 = (0);
while(true){
if((i__7323__auto___9180 < len__7322__auto___9179)){
args__7329__auto__.push((arguments[i__7323__auto___9180]));

var G__9181 = (i__7323__auto___9180 + (1));
i__7323__auto___9180 = G__9181;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9175){
var vec__9176 = p__9175;
var req = cljs.core.nth.call(null,vec__9176,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq9173){
var G__9174 = cljs.core.first.call(null,seq9173);
var seq9173__$1 = cljs.core.next.call(null,seq9173);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__9174,seq9173__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9188 = arguments.length;
var i__7323__auto___9189 = (0);
while(true){
if((i__7323__auto___9189 < len__7322__auto___9188)){
args__7329__auto__.push((arguments[i__7323__auto___9189]));

var G__9190 = (i__7323__auto___9189 + (1));
i__7323__auto___9189 = G__9190;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9184){
var vec__9185 = p__9184;
var req = cljs.core.nth.call(null,vec__9185,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq9182){
var G__9183 = cljs.core.first.call(null,seq9182);
var seq9182__$1 = cljs.core.next.call(null,seq9182);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__9183,seq9182__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9197 = arguments.length;
var i__7323__auto___9198 = (0);
while(true){
if((i__7323__auto___9198 < len__7322__auto___9197)){
args__7329__auto__.push((arguments[i__7323__auto___9198]));

var G__9199 = (i__7323__auto___9198 + (1));
i__7323__auto___9198 = G__9199;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9193){
var vec__9194 = p__9193;
var req = cljs.core.nth.call(null,vec__9194,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq9191){
var G__9192 = cljs.core.first.call(null,seq9191);
var seq9191__$1 = cljs.core.next.call(null,seq9191);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__9192,seq9191__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9206 = arguments.length;
var i__7323__auto___9207 = (0);
while(true){
if((i__7323__auto___9207 < len__7322__auto___9206)){
args__7329__auto__.push((arguments[i__7323__auto___9207]));

var G__9208 = (i__7323__auto___9207 + (1));
i__7323__auto___9207 = G__9208;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9202){
var vec__9203 = p__9202;
var req = cljs.core.nth.call(null,vec__9203,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq9200){
var G__9201 = cljs.core.first.call(null,seq9200);
var seq9200__$1 = cljs.core.next.call(null,seq9200);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__9201,seq9200__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7329__auto__ = [];
var len__7322__auto___9215 = arguments.length;
var i__7323__auto___9216 = (0);
while(true){
if((i__7323__auto___9216 < len__7322__auto___9215)){
args__7329__auto__.push((arguments[i__7323__auto___9216]));

var G__9217 = (i__7323__auto___9216 + (1));
i__7323__auto___9216 = G__9217;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__9211){
var vec__9212 = p__9211;
var req = cljs.core.nth.call(null,vec__9212,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq9209){
var G__9210 = cljs.core.first.call(null,seq9209);
var seq9209__$1 = cljs.core.next.call(null,seq9209);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__9210,seq9209__$1);
});


//# sourceMappingURL=client.js.map