define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-promise/src/promise/Promise","metal-component/src/all/component","metal-events/src/events","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,n,r,i,a,u){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var f=o(t),d=o(n),p=o(r),h=o(i),m=o(u),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),v(t,[{key:"created",value:function(){this.eventHandler_=new a.EventHandler,this.on("select",this.select)}},{key:"attached",value:function(){this.inputElement&&this.eventHandler_.add(d["default"].on(this.inputElement,"input",this.handleUserInput_.bind(this)))}},{key:"detached",value:function(){this.eventHandler_.removeAllListeners()}},{key:"handleUserInput_",value:function(){this.request(this.inputElement.value)}},{key:"request",value:function(e){var t=this;this.pendingRequest&&this.pendingRequest.cancel("Cancelled by another request");var n=t.data(e);return f["default"].isPromise(n)||(n=p["default"].resolve(n)),this.pendingRequest=n.then(function(e){if(Array.isArray(e))return e.map(t.format.bind(t)).filter(function(e){return f["default"].isDefAndNotNull(e)})}),this.pendingRequest}},{key:"setData_",value:function(e){return f["default"].isFunction(e)?e:function(){return e}}}]),t}(h["default"]);y.STATE={data:{setter:"setData_"},format:{value:f["default"].identityFunction,validator:f["default"].isFunction},inputElement:{setter:d["default"].toElement},select:{value:function(e){this.inputElement.value=e.text,this.inputElement.focus()},validator:f["default"].isFunction},visible:{validator:f["default"].isBoolean,value:!1}},e["default"]=y,m["default"].register("autocompleteBase",y)});