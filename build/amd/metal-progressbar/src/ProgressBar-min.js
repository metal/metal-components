define(["exports","metal/src/metal","metal-component/src/all/component","metal-soy/src/Soy","./ProgressBar.soy.js"],function(e,t,n,r,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=o(t),f=o(n),c=o(r),p=o(a),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return u(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),d(t,[{key:"setterValueFn_",value:function(e){return e<this.min&&(e=this.min),e>this.max&&(e=this.max),e}},{key:"syncMax",value:function(e){e<this.value&&(this.value=e)}},{key:"syncMin",value:function(e){e>this.value&&(this.value=e)}}]),t}(f["default"]);y.STATE={barClass:{validator:s["default"].isString},label:{validator:function(e){return!s["default"].isDefAndNotNull(e)||s["default"].isString(e)}},max:{validator:s["default"].isNumber,value:100},min:{validator:s["default"].isNumber,value:0},value:{setter:"setterValueFn_",validator:s["default"].isNumber,value:0}},c["default"].register(y,p["default"]),e["default"]=y});