define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-events/src/events","metal-state/src/all/state"],function(e,t,n,r,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var d=l(t),u=l(n),c=l(a),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function _(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:_(a,t,n)}if("value"in r)return r.value;var l=r.get;if(void 0!==l)return l.call(n)},E=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.headerEventHandler_=new r.EventHandler,n.on("headerChanged",n.syncHeader),n.syncHeader(),n}return s(t,e),f(t,[{key:"disposeInternal",value:function(){h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disposeInternal",this).call(this),this.headerEventHandler_.removeAllListeners()}},{key:"getContentElement_",value:function(e){if(d["default"].isElement(this.content))return this.content;var t=u["default"].next(e,this.content);return t?t:(t=e.querySelector(this.content),t?t:this.container.querySelector(this.content))}},{key:"handleClick_",value:function(e){this.toggle(e.delegateTarget||e.currentTarget)}},{key:"handleKeydown_",value:function(e){13!==e.keyCode&&32!==e.keyCode||(this.toggle(e.delegateTarget||e.currentTarget),e.preventDefault())}},{key:"syncHeader",value:function(){this.headerEventHandler_.removeAllListeners(),this.header&&(d["default"].isString(this.header)?this.headerEventHandler_.add(u["default"].delegate(this.container,"click",this.header,this.handleClick_.bind(this)),u["default"].delegate(this.container,"keydown",this.header,this.handleKeydown_.bind(this))):this.headerEventHandler_.add(u["default"].on(this.header,"click",this.handleClick_.bind(this)),u["default"].on(this.header,"keydown",this.handleKeydown_.bind(this))))}},{key:"toggle",value:function(e){var n=this.getContentElement_(e);u["default"].toggleClasses(n,t.CSS_EXPANDED),u["default"].toggleClasses(n,t.CSS_COLLAPSED),u["default"].hasClass(n,t.CSS_EXPANDED)?(u["default"].addClasses(e,t.CSS_HEADER_EXPANDED),u["default"].removeClasses(e,t.CSS_HEADER_COLLAPSED)):(u["default"].removeClasses(e,t.CSS_HEADER_EXPANDED),u["default"].addClasses(e,t.CSS_HEADER_COLLAPSED))}}]),t}(c["default"]);E.STATE={container:{setter:u["default"].toElement,validator:function(e){return d["default"].isString(e)||d["default"].isElement(e)},value:document},content:{validator:function(e){return d["default"].isString(e)||d["default"].isElement(e)}},header:{validator:function(e){return d["default"].isString(e)||d["default"].isElement(e)}}},E.CSS_COLLAPSED="toggler-collapsed",E.CSS_EXPANDED="toggler-expanded",E.CSS_HEADER_COLLAPSED="toggler-header-collapsed",E.CSS_HEADER_EXPANDED="toggler-header-expanded",e["default"]=E});