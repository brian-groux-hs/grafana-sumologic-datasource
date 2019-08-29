define(["lodash","@grafana/data","@grafana/ui","rxjs","angular","app/core/utils/datemath","app/core/table_model","app/plugins/sdk"],function(t,e,r,n,s,o,i,a){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=10)}([function(e,r){e.exports=t},function(t,r){t.exports=e},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e){t.exports=s},function(t,e){t.exports=o},function(t,e){t.exports=i},function(t,e){t.exports=a},function(t,e){ace.define("ace/mode/sumologic_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,e,r){"use strict";var n=t("../lib/oop"),s=t("./text_highlight_rules").TextHighlightRules,o=function(){var t=this.createKeywordMapper({"support.function":"abs|accum|acos|asin|atan|atan2|avg|backshift|cbrt|ceil|concat|cos|cosh|count|count_distinct|count_frequent|diff|exp|expm1|fields|fillmissing|filter|first|last|floor|format|formatDate|lookup|hypot|if|ipv4ToNumber|isNull|isEmpty|isBlank|join|length|limit|log|log10|log1p|luhn|num|number|toLong|pct|merge|max|min|most_recent|least_recent|now|outlier|csv|split|json|keyvalue|kv|xml|parseDate|parseHex|pct_sampling|predict|queryEndTime|queryStartTime|queryTimeRange|replace|rollingstd|round|save|sessionize|sin|sinh|smooth|sort|sqrt|stddev|substring|sum|tan|tanh|timeslice|toDegrees|toLowerCase|toUpperCase|top|toRadians|total|trace|transaction|transpose|urldecode|where|getCIDRPrefix|compareCIDRPrefix|maskFromCIDRlogreduce|details|compare|logcompare",keyword:"as|by|from|in|matches|nodrop|on|regex|with_collector|_index|_source|_sourceCategory|_sourceHost|_sourceName|_view","constant.language":"true|false"},"identifier",!0);this.$rules={start:[{token:"string",regex:/"(?:[^"\\]|\\.)*?"/},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language",regex:"\\d+[smh]"},{token:"constant.language",regex:"\\d+[kKMGBTP]"},{token:t,regex:"[a-zA-Z]+"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\/|%|=|==|!=|<=|>=|<>|<|>"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};n.inherits(o,s),e.SumologicHighlightRules=o}),ace.define("ace/mode/sumologic_completions",["require","exports","module","ace/token_iterator","ace/lib/lang"],function(t,e,r){"use strict";var n=t("../lib/lang"),s=["_collector","_index","_source","_sourceCategory","_sourceHost","_sourceName","_view","as","by","from","in","on","matches","regex","nodrop","with","abs","accum","acos","asin","atan","atan2","avg","backshift","cbrt","ceil","concat","cos","cosh","count","count_distinct","count_frequent","diff","exp","expm1","fields","fillmissing","filter","first","last","floor","format","formatDate","lookup","hypot","if","ipv4ToNumber","isNull","isEmpty","isBlank","join","length","limit","log","log10","log1p","luhn","num","number","toLong","pct","merge","max","min","most_recent","least_recent","now","outlier","csv","split","json","keyvalue","kv","xml","parseDate","parseHex","pct_sampling","predict","queryEndTime","queryStartTime","queryTimeRange","replace","rollingstd","round","save","sessionize","sin","sinh","smooth","sort","sqrt","stddev","substring","sum","tan","tanh","timeslice","toDegrees","toLowerCase","toUpperCase","top","toRadians","total","trace","transaction","transpose","urldecode","where","getCIDRPrefix","compareCIDRPrefix","maskFromCIDR","logreduce","details","compare","logcompare"].map(function(t){return{caption:t,value:t,meta:"keyword",score:Number.MAX_VALUE}});function o(t){var e=n.escapeHTML(t.docText);return e=function(t,e){for(var r=[],n=0,s=0,o=e=e||60,i="",a=0;a<t.length;a++)" "===t[a]?n=a:a>=o&&0!=n&&(i=t.slice(s,n),r.push(i),s=n+1,o=a+e,n=0);return i=t.slice(s),r.push(i),r.join("&nbsp<br>")}(e,40).replace(/```(.+)```/,"<pre>$1</pre>").replace(/`([^`]+)`/,"<code>$1</code>"),["<b>",n.escapeHTML(t.def),"</b>","<hr></hr>",e,"<br>&nbsp"].join("")}var i=[].map(function(t){return{caption:t.name,value:t.value,docHTML:o(t),meta:"function",score:Number.MAX_VALUE}}),a=function(){};(function(){this.getCompletions=function(t,e,r,n,o){o(null,s.concat(i))}}).call(a.prototype),e.SumologicCompletions=a}),ace.define("ace/mode/behaviour/sumologic",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(t,e,r){"use strict";var n=t("../../lib/oop"),s=(t("../behaviour").Behaviour,t("./cstyle").CstyleBehaviour),o=(t("../../token_iterator").TokenIterator,function(){this.inherit(s)});n.inherits(o,s),e.SumologicBehaviour=o}),ace.define("ace/mode/sumologic",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sumologic_highlight_rules"],function(t,e,r){"use strict";var n=t("../lib/oop"),s=t("./text").Mode,o=t("./sumologic_highlight_rules").SumologicHighlightRules,i=t("./sumologic_completions").SumologicCompletions,a=t("./behaviour/sumologic").SumologicBehaviour,u=function(){this.HighlightRules=o,this.$behaviour=new a,this.$completer=new i,this.completer=this.$completer};n.inherits(u,s),function(){this.$id="ace/mode/sumologic"}.call(u.prototype),e.Mode=u})},function(t,e){ace.define("ace/snippets/sumologic",["require","exports","module"],function(t,e,r){"use strict";e.snippets=[],e.scope="sumologic"})},function(t,e,r){"use strict";r.r(e);var n=r(0),s=r.n(n),o=r(5),i=r.n(o),a=r(6),u=r.n(a),c=r(3),l=function(t,e,r,n){return new(r||(r=Promise))(function(s,o){function i(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){t.done?s(t.value):new r(function(e){e(t.value)}).then(i,a)}u((n=n.apply(t,e||[])).next())})},h=function(t,e){var r,n,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(s=(s=i.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},d=function(){function t(t,e,r,n,s){this.params=t,this.format=e,this.timeoutSec=r,this.datasource=n,this.backendSrv=s,this.offset=0,this.maximumOffset=1e4,this.messageCount=0,this.recordCount=0}return t.$inject=["params","format","timeoutSec","datasource","backendSrv"],t.prototype.getResult=function(){return l(this,void 0,void 0,function(){var t,e,r,n,o,i,a,u,c;return h(this,function(l){switch(l.label){case 0:return t=this.format.slice(0,-1),"time_series_records"===this.format&&(t="record"),["record","message"].includes(t)?[4,this.delay(1e3*Math.random())]:[2,Promise.reject({message:"unsupported type"})];case 1:l.sent(),e=0,l.label=2;case 2:if(!(e<6))return[3,9];l.label=3;case 3:return l.trys.push([3,5,,6]),[4,this.doRequest("POST","/v1/search/jobs",this.params)];case 4:return r=l.sent(),[3,6];case 5:return l.sent(),[3,6];case 6:return r.data&&r.data.id?[3,9]:[4,this.delay(this.calculateRetryWait(1e3,e))];case 7:return l.sent(),[3,8];case 8:return e++,[3,2];case 9:if(6===e)throw{job_id:r.data.id,message:"max retries exceeded"};e=0,l.label=10;case 10:if(!(e<6))return[3,20];l.label=11;case 11:return l.trys.push([11,15,,19]),n=this,[4,this.doRequest("GET","/v1/search/jobs/"+r.data.id)];case 12:return n.status=l.sent(),"DONE GATHERING RESULTS"===this.status.data.state?[3,14]:[4,this.delay(this.calculateRetryWait(1e3,e))];case 13:return l.sent(),[3,19];case 14:if(!(s.a.isEmpty(this.status.data.pendingErrors)&&s.a.isEmpty(this.status.data.pendingWarnings)||(o="",s.a.isEmpty(this.status.data.pendingErrors)||(o+="Error:\n"+this.status.data.pendingErrors.join("\n")+"\n"),s.a.isEmpty(this.status.data.pendingWarnings)||(o+="Warning:\n"+this.status.data.pendingWarnings.join("\n")),console.error(o),"Messages may have been omitted from your results due to a regex that performs poorly against your data."===this.status.data.pendingWarnings[0])))throw{job_id:r.data.id,message:o};return[3,20];case 15:return(i=l.sent()).data&&i.data.code&&"searchjob.jobid.invalid"===i.data.code?[4,this.delay(this.calculateRetryWait(1e3,e))]:[3,17];case 16:return l.sent(),[3,19];case 17:return this.doRequest("DELETE","/v1/search/jobs/"+r.data.id),[2,Promise.reject(i)];case 18:return[3,19];case 19:return e++,[3,10];case 20:if(6===e)throw this.doRequest("DELETE","/v1/search/jobs/"+r.data.id),{job_id:r.data.id,message:"max retries exceeded"};a={},e=0,l.label=21;case 21:if(!(e<6))return[3,26];l.label=22;case 22:return l.trys.push([22,24,,25]),0===this.status.data[t+"Count"]?[3,26]:0===(u=Math.min(this.maximumOffset,this.status.data[t+"Count"])-this.offset)?[3,26]:[4,this.doRequest("GET","/v1/search/jobs/"+r.data.id+"/"+t+"s?offset="+this.offset+"&limit="+u)];case 23:return c=l.sent(),this.offset+=c.data[t+"s"].length,a.data?a.data.records?a.data.records=(a.data.records||[]).concat(c.data.records):a.data.messages&&(a.data.messages=(a.data.messages||[]).concat(c.data.messages)):a=c,this.offset>=Math.min(this.maximumOffset,this.status.data[t+"Count"])?[3,26]:[3,25];case 24:return l.sent(),[3,25];case 25:return e++,[3,21];case 26:if(6===e)throw this.doRequest("DELETE","/v1/search/jobs/"+r.data.id),{job_id:r.data.id,message:"max retries exceeded"};try{this.doRequest("DELETE","/v1/search/jobs/"+r.data.id)}catch(t){}return[2,a.data]}})})},t.prototype.getResultObservable=function(){var t=this,e=new Date;return new c.Observable(function(r){l(t,void 0,void 0,function(){var t,n,o,i,a,u,l,d,p,f,m,b;return h(this,function(h){switch(h.label){case 0:if(t=this.format.slice(0,-1),"time_series_records"===this.format&&(t="record"),!["record","message"].includes(t))throw{message:"unsupported type"};return[4,this.delay(1e3*Math.random())];case 1:h.sent(),n=0,h.label=2;case 2:if(!(n<6))return[3,9];h.label=3;case 3:return h.trys.push([3,5,,6]),[4,this.doRequest("POST","/v1/search/jobs",this.params)];case 4:return o=h.sent(),[3,6];case 5:return h.sent(),[3,6];case 6:return o.data&&o.data.id?[3,9]:[4,this.delay(this.calculateRetryWait(1e3,n))];case 7:return h.sent(),[3,8];case 8:return n++,[3,2];case 9:if(6===n)throw{job_id:o.data.id,message:"max retries exceeded"};h.label=10;case 10:if((new Date).valueOf()-e.valueOf()>1e3*this.timeoutSec)throw console.error("timeout"),this.doRequest("DELETE","/v1/search/jobs/"+o.data.id),{job_id:o.data.id,message:"timeout"};i=void 0,i=0,h.label=11;case 11:if(!(i<6))return[3,20];h.label=12;case 12:return h.trys.push([12,15,,19]),a=this,[4,this.doRequest("GET","/v1/search/jobs/"+o.data.id)];case 13:if(a.status=h.sent(),u=this.messageCount,l=this.recordCount,this.messageCount=this.status.data.messageCount,this.recordCount=this.status.data.recordCount,!(s.a.isEmpty(this.status.data.pendingErrors)&&s.a.isEmpty(this.status.data.pendingWarnings)||(d="",s.a.isEmpty(this.status.data.pendingErrors)||(d+="Error:\n"+this.status.data.pendingErrors.join("\n")+"\n"),s.a.isEmpty(this.status.data.pendingWarnings)||(d+="Warning:\n"+this.status.data.pendingWarnings.join("\n")),console.error(d),"Messages may have been omitted from your results due to a regex that performs poorly against your data."===this.status.data.pendingWarnings[0])))throw{job_id:o.data.id,message:d};return"DONE GATHERING RESULTS"===this.status.data.state?[3,20]:("time_series_records"===this.format||"records"===this.format)&&this.recordCount>l?[3,20]:"messages"===this.format&&this.messageCount>u?[3,20]:[4,this.delay(this.calculateRetryWait(1e3,i))];case 14:return h.sent(),[3,19];case 15:return(p=h.sent()).data&&p.data.code&&"searchjob.jobid.invalid"===p.data.code?[4,this.delay(this.calculateRetryWait(1e3,i))]:[3,17];case 16:return h.sent(),[3,19];case 17:throw this.doRequest("DELETE","/v1/search/jobs/"+o.data.id),console.error(p),p;case 18:return[3,19];case 19:return i++,[3,11];case 20:if(6===i)throw this.doRequest("DELETE","/v1/search/jobs/"+o.data.id),{job_id:o.data.id,message:"max retries exceeded"};i=0,h.label=21;case 21:if(!(i<6))return[3,29];if(0==(f=Math.min(this.maximumOffset,this.status.data[t+"Count"])-this.offset))return[2,c.EMPTY];h.label=22;case 22:return h.trys.push([22,24,,28]),[4,this.doRequest("GET","/v1/search/jobs/"+o.data.id+"/"+t+"s?offset="+this.offset+"&limit="+f)];case 23:if(m=h.sent(),this.offset+=m.data[t+"s"].length,this.offset>=Math.min(this.maximumOffset,this.status.data[t+"Count"])){try{this.doRequest("DELETE","/v1/search/jobs/"+o.data.id)}catch(t){}return[2,r.next(m.data)]}return r.next(m.data),[3,29];case 24:return(b=h.sent()).data&&b.data.code&&"searchjob.jobid.invalid"===b.data.code?[4,this.delay(this.calculateRetryWait(1e3,i))]:[3,26];case 25:return h.sent(),[3,28];case 26:throw this.doRequest("DELETE","/v1/search/jobs/"+o.data.id),console.error(b),b;case 27:return[3,28];case 28:return i++,[3,21];case 29:if(6===i)throw this.doRequest("DELETE","/v1/search/jobs/"+o.data.id),{job_id:o.data.id,message:"max retries exceeded"};return[3,10];case 30:return[2]}})})})},t.prototype.doRequest=function(t,e,r){return void 0===r&&(r={}),l(this,void 0,void 0,function(){var n,s,o,i=this;return h(this,function(a){switch(a.label){case 0:return 0!==this.datasource.token?[3,2]:[4,this.delay(Math.ceil(1e3/this.datasource.MAX_AVAILABLE_TOKEN))];case 1:return a.sent(),[2,this.doRequest(t,e,r)];case 2:n={method:t,url:this.datasource.url+e,data:r,headers:{},inspect:{type:"sumologic"},withCredentials:!1},(this.datasource.basicAuth||this.datasource.withCredentials)&&(n.withCredentials=!0),this.datasource.basicAuth&&(n.headers.Authorization=this.datasource.basicAuth),n.headers["Content-Type"]="application/json",this.datasource.token--,null===this.datasource.tokenTimer&&(this.datasource.tokenTimer=setInterval(function(){i.datasource.provideToken()},Math.ceil(1e3/this.datasource.MAX_AVAILABLE_TOKEN))),a.label=3;case 3:return a.trys.push([3,5,,9]),[4,this.backendSrv.datasourceRequest(n)];case 4:return(s=a.sent()).data.status&&404===s.data.status?[2,Promise.reject(s)]:[2,s];case 5:return(o=a.sent()).data&&o.data.code&&"rate.limit.exceeded"===o.data.code?(this.datasource.token=0,[4,this.retryable(3,function(t){return l(i,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,this.delay(this.calculateRetryWait(1e3,t))];case 1:return e.sent(),[2,this.backendSrv.datasourceRequest(n)]}})})}).catch(function(t){return console.error("rate limit exceeded"),t})]):[3,7];case 6:return[2,a.sent()];case 7:return o.data&&o.data.code&&"searchjob.jobid.invalid"===o.data.code?[2,Promise.reject(o)]:(console.error(o),[2,Promise.reject(o)]);case 8:return[3,9];case 9:return[2]}})})},t.prototype.delay=function(t){return new Promise(function(e){return setTimeout(e,t)})},t.prototype.retryable=function(t,e){return l(this,void 0,void 0,function(){var r,n;return h(this,function(s){for(r=Promise.reject({}).catch(function(){return e(t)}),n=0;n<t;n++)!function(t){r=r.catch(function(r){return e(t+1)})}(n);return[2,r]})})},t.prototype.calculateRetryWait=function(t,e){return t*Math.min(10,Math.pow(2,e))+Math.floor(1e3*Math.random())},t}(),p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function f(t,e){function r(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function m(t){return"function"==typeof t}var b=!1,y={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;b=t},get useDeprecatedSynchronousErrorHandling(){return b}};function g(t){setTimeout(function(){throw t},0)}var v={closed:!0,next:function(t){},error:function(t){if(y.useDeprecatedSynchronousErrorHandling)throw t;g(t)},complete:function(){}},_=Array.isArray||function(t){return t&&"number"==typeof t.length};function x(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}x.prototype=Object.create(Error.prototype);var E=x,w=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var r,n=this._parentOrParents,s=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var i=0;i<n.length;++i){n[i].remove(this)}if(m(s))try{s.call(this)}catch(t){e=t instanceof E?S(t.errors):[t]}if(_(o)){i=-1;for(var a=o.length;++i<a;){var u=o[i];if(null!==(r=u)&&"object"==typeof r)try{u.unsubscribe()}catch(t){e=e||[],t instanceof E?e=e.concat(S(t.errors)):e.push(t)}}}if(e)throw new E(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var s=r._parentOrParents;if(null===s)r._parentOrParents=this;else if(s instanceof t){if(s===this)return r;r._parentOrParents=[s,this]}else{if(-1!==s.indexOf(this))return r;s.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function S(t){return t.reduce(function(t,e){return t.concat(e instanceof E?e.errors:e)},[])}var T="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),j=function(t){function e(r,n,s){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=v;break;case 1:if(!r){o.destination=v;break}if("object"==typeof r){r instanceof e?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new k(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new k(o,r,n,s)}return o}return f(e,t),e.prototype[T]=function(){return this},e.create=function(t,r,n){var s=new e(t,r,n);return s.syncErrorThrowable=!1,s},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(w),k=function(t){function e(e,r,n,s){var o,i=t.call(this)||this;i._parentSubscriber=e;var a=i;return m(r)?o=r:r&&(o=r.next,n=r.error,s=r.complete,r!==v&&(m((a=Object.create(r)).unsubscribe)&&i.add(a.unsubscribe.bind(a)),a.unsubscribe=i.unsubscribe.bind(i))),i._context=a,i._next=o,i._error=n,i._complete=s,i}return f(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;y.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=y.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):g(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;g(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};y.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),y.useDeprecatedSynchronousErrorHandling)throw t;g(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!y.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return y.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(g(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(j);var O=function(){function t(t,e,r){void 0===r&&(r=!1),this.accumulator=t,this.seed=e,this.hasSeed=r}return t.prototype.call=function(t,e){return e.subscribe(new R(t,this.accumulator,this.seed,this.hasSeed))},t}(),R=function(t){function e(e,r,n,s){var o=t.call(this,e)||this;return o.accumulator=r,o._seed=n,o.hasSeed=s,o.index=0,o}return f(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.accumulator(this.seed,t,r)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(j);var q,C=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new D(t,this.project,this.thisArg))},t}(),D=function(t){function e(e,r,n){var s=t.call(this,e)||this;return s.project=r,s.count=0,s.thisArg=n||s,s}return f(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(j),A=r(2),P=r(1),L=(q=function(t,e){return(q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}q(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),M=function(t,e,r,n){return new(r||(r=Promise))(function(s,o){function i(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){t.done?s(t.value):new r(function(e){e(t.value)}).then(i,a)}u((n=n.apply(t,e||[])).next())})},F=function(t,e){var r,n,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(s=(s=i.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],n=0}finally{r=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},I=function(t){function e(e,r,n,s,o){var i=t.call(this,e)||this;return i.type=e.type,i.name=e.name,i.url=e.url,i.basicAuth=e.basicAuth,i.withCredentials=e.withCredentials,i.timeoutSec=e.jsonData.timeout||180,i.$q=r,i.backendSrv=n,i.templateSrv=s,i.timeSrv=o,i.fieldIndex={tagKeys:new Set,tagValues:{}},i.MAX_AVAILABLE_TOKEN=4,i.token=i.MAX_AVAILABLE_TOKEN,i.tokenTimer=null,i.excludeFieldList=["_raw","_collectorid","_sourceid","_messageid","_messagecount","_messagetime","_receipttime","_size","_timeslice","processing_time_ms"],i}return e.$inject=["instanceSettings","$q","backendSrv","templateSrv","timeSrv"],L(e,t),e.prototype.provideToken=function(){this.token<this.MAX_AVAILABLE_TOKEN&&(this.token+=1,this.token===this.MAX_AVAILABLE_TOKEN&&(clearInterval(this.tokenTimer),this.tokenTimer=null))},e.prototype.query=function(t,e){var r,n,o=this,i=this;return s.a.chain(t.targets).filter(function(t){return!t.hide&&!!t.query}).map(function(e){var r={query:o.templateSrv.replace(o.stripComment(e.query),t.scopedVars),from:o.convertTime(t.range.from,!1),to:o.convertTime(t.range.to,!0),timeZone:"Etc/UTC"},n=o.templateSrv.getAdhocFilters(o.name);if(n.length>0){var s=" | where "+n.map(function(t){switch(t.operator){case"=~":return t.key+' matches "'+t.value+'"';case"!~":return"!("+t.key+' matches "'+t.value+'")';default:return t.key+" "+t.operator+' "'+t.value+'"'}}).join(" and ");-1===r.query.indexOf("|")?r.query+=s:r.query=r.query.replace(/\|/,s+" |")}return o.logQueryObservable(r,e.format).pipe(function(t,e){var r=!1;return arguments.length>=2&&(r=!0),function(n){return n.lift(new O(t,e,r))}}(function(t,e){return t.fields=e.fields,e.records?t.records=(t.records||[]).concat(e.records):e.messages&&(t.messages=(t.messages||[]).concat(e.messages)),t},{}))}).value()[0].pipe((r=function(e){e=(e=[e]).filter(function(t){return!s.a.isEmpty(t)}),o.hasAdhocFilter()&&(o.fieldIndex={tagKeys:new Set,tagValues:{}},e.forEach(function(t){t.fields.map(function(t){return t.name}).filter(function(t){return!o.excludeFieldList.includes(t)}).forEach(function(t){o.fieldIndex.tagKeys.add(t)})}),e.forEach(function(t){(t.records||t.messages).forEach(function(t){Object.keys(t.map).filter(function(t){return!o.excludeFieldList.includes(t)}).forEach(function(e){o.fieldIndex.tagValues[e]||(o.fieldIndex.tagValues[e]=new Set),o.fieldIndex.tagValues[e].add(t.map[e])})})}));var r=s.a.chain(e).filter(function(e,r){return"records"===t.targets[r].format||"messages"===t.targets[r].format}).flatten().value();return r.length>0?{key:"sumologic-table",state:P.LoadingState.Done,request:t,data:[i.transformDataToTable(r)],unsubscribe:function(){}}:{key:"sumologic-time-series",state:P.LoadingState.Done,request:t,data:s.a.flatten(e.map(function(e,r){return"time_series_records"===t.targets[r].format?i.transformRecordsToTimeSeries(e,t.targets[r],t.intervalMs,t.range.to.valueOf()):e})),unsubscribe:function(){}}},function(t){if("function"!=typeof r)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return t.lift(new C(r,n))})).subscribe({next:function(t){return e(t)}}),this.$q.when({data:[]})},e.prototype.metricFindQuery=function(t){return M(this,void 0,void 0,function(){var e,r,n,o,i,a;return F(this,function(u){switch(u.label){case 0:return e=this.timeSrv.timeRange(),(r=t.match(/^record_values\(([^,]+?),\s?([^\)]+?)\)/))?(n=r[1].toLowerCase(),o=r[2],i={query:this.templateSrv.replace(this.stripComment(o)),from:String(this.convertTime(e.from,!1)),to:String(this.convertTime(e.to,!0)),timeZone:"Etc/UTC"},[4,this.logQuery(i,"records")]):[3,2];case 1:return a=u.sent(),s.a.isEmpty(a)?[2,[]]:[2,a.records.map(function(t){return{text:t.map[n],value:t.map[n]}})];case 2:return[2]}})})},e.prototype.annotationQuery=function(t){return M(this,void 0,void 0,function(){var e,r,n,o,i,a,u,c=this;return F(this,function(l){switch(l.label){case 0:return e=t.annotation,r=e.query||"",n=(n=e.tagKeys||"").split(","),o=e.titleFormat||"",i=e.textFormat||"",r?(a={query:this.templateSrv.replace(this.stripComment(r)),from:String(this.convertTime(t.range.from,!1)),to:String(this.convertTime(t.range.to,!0)),timeZone:"Etc/UTC"},[4,this.logQuery(a,"messages")]):[2,Promise.resolve([])];case 1:return u=l.sent(),s.a.isEmpty(u)?[2,[]]:[2,u.messages.map(function(t){var r=s.a.chain(t.map).filter(function(t,e){return s.a.includes(n,e)}).value();return{annotation:e,time:parseInt(t.map._messagetime,10),title:c.renderTemplate(o,t.map),tags:r,text:c.renderTemplate(i,t.map)}})]}})})},e.prototype.testDatasource=function(){return M(this,void 0,void 0,function(){var t;return F(this,function(e){switch(e.label){case 0:t={query:"| count _sourceCategory",from:(new Date).getTime()-6e5,to:(new Date).getTime(),timeZone:"Etc/UTC"},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.logQuery(t,"records")];case 2:return e.sent(),[2,{status:"success",message:"Data source is working",title:"Success"}];case 3:return e.sent(),[2,{status:"error",message:"Data source is not working",title:"Error"}];case 4:return[2]}})})},e.prototype.logQuery=function(t,e){return M(this,void 0,void 0,function(){return F(this,function(r){switch(r.label){case 0:return[4,new d(t,e,this.timeoutSec,this,this.backendSrv).getResult()];case 1:return[2,r.sent()]}})})},e.prototype.logQueryObservable=function(t,e){return new d(t,e,this.timeoutSec,this,this.backendSrv).getResultObservable()},e.prototype.transformDataToTable=function(t){var e=new u.a;if(0===t.length)return Object(P.toDataFrame)(e);var r=t[0].records?"records":"messages",n=s.a.chain(t).map(function(t){return s.a.map(t.fields,"name")}).flatten().uniq().value();return e.columns=n.map(function(t){return{text:t,filterable:!0}}),t.forEach(function(t){for(var s=0,o=t[r];s<o.length;s++){for(var i=o[s],a=[],u=0,c=n;u<c.length;u++){var l=c[u];a.push(i.map[l]||"")}e.rows.push(a)}}),Object(P.toDataFrame)(e)},e.prototype.transformRecordsToTimeSeries=function(t,e,r,n){var o=this,i="",a=[],u=t.fields,c=t.records;if(0===c.length)return Object(P.toDataFrame)({target:i,datapoints:a});var l=u.find(function(t){return"string"!==t.fieldType&&t.keyField});l=l?l.name:"";var h=[];u.forEach(function(t){"string"===t.fieldType||t.keyField||h.push(t.name)});var d=[];return 0===h.length?Object(P.toDataFrame)({target:i,datapoints:a}):(c=c.sort(function(t,e){return""===l?0:t.map[l]<e.map[l]?-1:t.map[l]>e.map[l]?1:0}),h.forEach(function(t){var a={};c.forEach(function(u){i=o.createMetricLabel(s.a.extend(u.map,{field:t}),e),a[i]=a[i]||[];var c=parseFloat(u.map[l]||n),h=a[i].length;h>0&&c-a[i][h-1][1]>r&&a[i].push([null,a[i][h-1][1]+r]),a[i].push([parseFloat(u.map[t]),c])}),s.a.each(a,function(t,e){d.push(Object(P.toDataFrame)({target:e,datapoints:t}))})}),d)},e.prototype.createMetricLabel=function(t,e){return s.a.isUndefined(e)||s.a.isEmpty(e.aliasFormat)?"":this.renderTemplate(this.templateSrv.replace(e.aliasFormat),t)||"{}"},e.prototype.renderTemplate=function(t,e){return t.replace(/\{\{\s*(.+?)\s*\}\}/g,function(t,r){return e[r]?e[r]:r})},e.prototype.stripComment=function(t){return t.split("\n").map(function(t){return t.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm,"")}).filter(function(t){return""!==t}).join("\n")},e.prototype.convertTime=function(t,e){return s.a.isString(t)&&(t=i.a.parse(t,e)),t.valueOf()},e.prototype.hasAdhocFilter=function(){return s.a.some(this.templateSrv.variables,function(t){return"adhoc"===t.type})},e.prototype.getTagKeys=function(t){void 0===t&&(t={});var e=Array.from(this.fieldIndex.tagKeys).map(function(t){return{text:t}});return Promise.resolve(e)},e.prototype.getTagValues=function(t){void 0===t&&(t={});var e=Array.from(this.fieldIndex.tagValues[t.key]).map(function(t){return{text:t}});return Promise.resolve(e)},e}(A.DataSourceApi),H=r(4),$=r.n(H);$.a.module("grafana.directives").directive("sumologicQueryParameter",function(){return{templateUrl:"public/plugins/mtanda-sumologic-datasource/partials/query.parameter.html",controller:"SumologicQueryParameterCtrl",restrict:"E",scope:{target:"=",datasource:"=",panelType:"=",isLastQuery:"=",onChange:"&"}}}),$.a.module("grafana.controllers").controller("SumologicQueryParameterCtrl",["$scope",function(t){t.init=function(){var e=t.target;e.query=e.query||"",e.aliasFormat=e.aliasFormat||"",this.formats=[{text:"Time series (Records)",value:"time_series_records"},{text:"Records",value:"records"},{text:"Messages",value:"messages"}],s.a.includes(s.a.map(this.formats,"value"),e.format)||(e.format=t.getDefaultFormat()),t.onChange||(t.onChange=function(){})},t.getDefaultFormat=function(){return"table"===t.panelType?"records":"time_series_records"},t.init()}]);var N=r(7),U=(r(8),r(9),function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}()),V=function(t){function e(e,r){return t.call(this,e,r)||this}return e.$inject=["$scope","$injector"],U(e,t),e.templateUrl="partials/query.editor.html",e}(N.QueryCtrl),W=function(){function t(t,e){this.scope=t}return t.$inject=["$scope","$injector"],t.templateUrl="partials/annotations.editor.html",t}(),Q=function(){function t(t){this.current.jsonData.timeout=this.current.jsonData.timeout||30}return t.$inject=["$scope"],t.templateUrl="public/plugins/mtanda-sumologic-datasource/partials/config.html",t}();r.d(e,"plugin",function(){return K});var K=new A.DataSourcePlugin(I).setConfigCtrl(Q).setQueryCtrl(V).setAnnotationQueryCtrl(W)}])});