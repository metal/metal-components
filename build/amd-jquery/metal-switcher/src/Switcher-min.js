define(["exports","metal/src/metal","./Switcher.soy.js","metal-component/src/all/component","metal-soy/src/Soy","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,r,n,o,a){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var f=u(t),s=u(r),p=u(n),y=u(o),d=u(a),h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),b=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),h(t,[{key:"handleClick",value:function(){this.checked=!this.checked}}]),t}(p["default"]);b.STATE={checked:{validator:f["default"].isBoolean,value:!1}},y["default"].register(b,s["default"]),e["default"]=b,d["default"].register("switcher",b)});