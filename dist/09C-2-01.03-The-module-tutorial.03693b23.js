parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"53Eb":[function(require,module,exports) {
var define;
var t;!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof t&&t.amd?t("CanvasCircularCountdown",[],r):"object"==typeof exports?exports.CanvasCircularCountdown=r():e.CanvasCircularCountdown=r()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="./src/index.js")}({"./node_modules/@georapbox/timer/dist/Timer.js":function(t,e,r){var n;window,n=function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="./src/index.js")}({"./src/index.js":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=a(r("./src/tick.js")),i=a(r("./src/now.js"));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._started=!1,this._now=0,this._time=0,this._duration=e,this._callback=r,"function"==typeof e&&(this._duration=0,this._callback=e)}return n(t,[{key:"time",value:function(){return{remaining:Math.max(0,this._duration-this._time),elapsed:this._time}}},{key:"start",value:function(t){return t&&this.reset(!0),this._started||Number(this._duration)&&this._time>this._duration?this:(this._started=!0,this._now=(0,i.default)(),window.requestAnimationFrame(o.default.bind(this,this)),this)}},{key:"stop",value:function(){return this._started=!1,this}},{key:"reset",value:function(t){return t&&this.stop(),this._time=0,this}}]),t}();e.default=s,t.exports=e.default},"./src/now.js":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return window.performance?window.performance.now():Date.now?Date.now():(new Date).getTime()},t.exports=e.default},"./src/tick.js":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!1===t._started)return;t._time=t._time+(0,i.default)()-t._now,t.stop().start(),t._callback&&t._callback(t)};var n,o=r("./src/now.js"),i=(n=o)&&n.__esModule?n:{default:n};t.exports=e.default}})},t.exports=n()},"./src/drawCanvas.js":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r=e.options,n=1.5*Math.PI,o=n+t/50*Math.PI,i=Math.ceil(t),a=r.radius<0?0:r.radius,s=r.radius-r.progressBarOffset-r.progressBarWidth/2;s=s<0?0:s;var u=a,c=a;e._ctx.clearRect(0,0,e._canvas.width,e._canvas.height),e._ctx.beginPath(),e._ctx.arc(u,c,a,0,2*Math.PI,!1),e._ctx.fillStyle=r.circleBackgroundColor,e._ctx.fill(),r.progressBarWidth&&(e._ctx.beginPath(),e._ctx.arc(u,c,s,n,4*Math.PI,!1),e._ctx.lineWidth=r.progressBarWidth,e._ctx.strokeStyle=r.emptyProgressBarBackgroundColor,e._ctx.stroke());r.progressBarWidth&&(e._ctx.beginPath(),e._ctx.arc(u,c,s,n,o,!1),e._ctx.lineWidth=r.progressBarWidth,e._ctx.strokeStyle="function"==typeof r.filledProgressBarBackgroundColor?r.filledProgressBarBackgroundColor(i,e._timer.time()):r.filledProgressBarBackgroundColor,e._ctx.stroke());if("function"==typeof r.showCaption?r.showCaption(i,e._timer.time()):r.showCaption){e._ctx.fillStyle="function"==typeof r.captionColor?r.captionColor(i,e._timer.time()):r.captionColor,e._ctx.font="function"==typeof r.captionFont?r.captionFont(i,e._timer.time()):r.captionFont,e._ctx.textBaseline="middle",e._ctx.textAlign="center";var l=i+"%";"string"==typeof r.captionText?l=r.captionText:"function"==typeof r.captionText&&(l=r.captionText(i,e._timer.time())),e._ctx.fillText(l,u,c)}},t.exports=e.default},"./src/index.js":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=l(r("./node_modules/@georapbox/timer/dist/Timer.js")),s=l(r("./src/drawCanvas.js")),u=l(r("./src/makeHighResCanvas.js")),c=l(r("./src/utils/normalise.js"));function l(t){return t&&t.__esModule?t:{default:t}}var f=function(){function t(e,r,i){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);if("function"==typeof r&&(i=r,r={}),this.options=o({},{duration:6e4,radius:150,progressBarWidth:15,progressBarOffset:5,circleBackgroundColor:"#ffffff",emptyProgressBarBackgroundColor:"#dddddd",filledProgressBarBackgroundColor:"#00bfeb",showCaption:!0,captionColor:"#343a40",captionFont:"20px sans-serif"},r),"number"!=typeof this.options.duration)throw new TypeError("Expected a number for duration, instead got "+n(this.options.duration));if("CANVAS"===e.nodeName)this._canvas=e;else{var f=document.createElement("canvas");e.appendChild(f),this._canvas=f}this._timer=new a.default(this.options.duration,function(t){var e=100*(0,c.default)(t.time().remaining,0,l.options.duration);(0,s.default)(e,l),"function"==typeof i&&i(Math.ceil(e),t.time(),l)}),this._canvas.width=2*this.options.radius,this._canvas.height=2*this.options.radius,this._ctx=(0,u.default)(this._canvas),(0,s.default)(100,this)}return i(t,[{key:"style",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{delete t.duration}catch(n){}var e=o({},this.options);this.options=o({duration:this.options.duration},e,t);var r=100*(0,c.default)(this._timer.time().remaining,0,this.options.duration);return this._canvas.width=2*this.options.radius,this._canvas.height=2*this.options.radius,this._ctx=(0,u.default)(this._canvas),(0,s.default)(r,this),this}},{key:"start",value:function(){return 0===this.options.duration?this:(this._timer.start(!1),this)}},{key:"stop",value:function(){return this._timer.stop(),this}},{key:"reset",value:function(){return this._timer.reset(!0),(0,s.default)(100,this),this}}]),t}();e.default=f,t.exports=e.default},"./src/makeHighResCanvas.js":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.getContext("2d"),r=window.devicePixelRatio||1,n=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,o=r/n;if(r!==n){var i=t.width,a=t.height;t.width=Math.round(i*o),t.height=Math.round(a*o),t.style.width=i+"px",t.style.height=a+"px",e.scale(o,o)}return e},t.exports=e.default},"./src/utils/normalise.js":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){if("number"!=typeof t||"number"!=typeof e||"number"!=typeof r)throw new TypeError('"normalise" expects numbers as arguments');return(t-e)/(r-e)},t.exports=e.default}})});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("canvas-circular-countdown"));function t(e){return e&&e.__esModule?e:{default:e}}window.addEventListener("DOMContentLoaded",u);var n,o=document.getElementById("countdown-canvas"),a=document.querySelector("form");function u(){n=new e.default(o,{duration:0}),console.log(n)}function d(t){(n=new e.default(o,{duration:t})).start()}a.addEventListener("submit",function(e){var t=new Date,n=new Date(a.elements.date.value+" "+a.elements.time.value).getTime()-t.getTime();console.log(n),d(n),e.preventDefault()});
},{"canvas-circular-countdown":"53Eb"}]},{},["Focm"], null)
//# sourceMappingURL=/09C-2-01.03-The-module-tutorial.03693b23.js.map