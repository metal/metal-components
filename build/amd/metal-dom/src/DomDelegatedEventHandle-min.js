define(["exports","metal/src/metal","./domData","metal-events/src/events"],function(e,t,n,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var a=o(n),l=function(e){function n(t,r,o,c){i(this,n);var a=s(this,e.call(this,t,r,o));return a.selector_=c,a}return c(n,e),n.prototype.removeListener=function(){var e=a["default"].get(this.emitter_),n=this.selector_,r=t.core.isString(n)?e.delegating[this.event_].selectors:e.listeners,o=t.core.isString(n)?n:this.event_;t.array.remove(r[o]||[],this.listener_),r[o]&&0===r[o].length&&delete r[o]},n}(r.EventHandle);e["default"]=l});