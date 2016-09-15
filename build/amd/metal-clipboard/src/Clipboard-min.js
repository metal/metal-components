define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-state/src/State"],function(t,e,i,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var c=r(e),s=r(i),u=r(n),d=function p(t,e,i){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:p(r,e,i)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(i)},f=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),h=function(t){function e(t){a(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.listener_=s["default"].on(i.selector,"click",function(t){return i.initialize(t)}),i}return l(e,t),f(e,[{key:"disposeInternal",value:function(){this.listener_.dispose(),this.listener_=null,this.clipboardAction_&&(this.clipboardAction_.dispose(),this.clipboardAction_=null)}},{key:"initialize",value:function(t){this.clipboardAction_&&(this.clipboardAction_=null),this.clipboardAction_=new g({host:this,action:this.action(t.delegateTarget),target:this.target(t.delegateTarget),text:this.text(t.delegateTarget),trigger:t.delegateTarget})}}]),e}(u["default"]);h.STATE={action:{validator:c["default"].isFunction,value:function(t){return t.getAttribute("data-action")}},selector:{value:"[data-clipboard]",validator:c["default"].isString},target:{validator:c["default"].isFunction,value:function(t){return document.querySelector(t.getAttribute("data-target"))}},text:{validator:c["default"].isFunction,value:function(t){return t.getAttribute("data-text")}}};var g=function(t){function e(t){a(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.text?i.selectValue():i.target&&i.selectTarget(),i}return l(e,t),f(e,[{key:"clearSelection",value:function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"disposeInternal",value:function(){this.removeFakeElement(),d(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"disposeInternal",this).call(this)}},{key:"handleResult",value:function(t){t?this.host.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.host.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"removeFakeElement",value:function(){this.fake&&s["default"].exitDocument(this.fake),this.removeFakeHandler&&this.removeFakeHandler.removeListener()}},{key:"selectTarget",value:function(){if("INPUT"===this.target.nodeName||"TEXTAREA"===this.target.nodeName)this.target.select(),this.selectedText=this.target.value;else{var t=document.createRange(),e=window.getSelection();t.selectNodeContents(this.target),e.addRange(t),this.selectedText=e.toString()}this.copyText()}},{key:"selectValue",value:function(){this.removeFakeElement(),this.removeFakeHandler=s["default"].once(document,"click",this.removeFakeElement.bind(this)),this.fake=document.createElement("textarea"),this.fake.style.position="fixed",this.fake.style.left="-9999px",this.fake.setAttribute("readonly",""),this.fake.value=this.text,this.selectedText=this.text,s["default"].enterDocument(this.fake),this.fake.select(),this.copyText()}}]),e}(u["default"]);g.STATE={action:{value:"copy",validator:function(t){return"copy"===t||"cut"===t}},host:{validator:function(t){return t instanceof h}},selectedText:{validator:c["default"].isString},target:{validator:c["default"].isElement},text:{validator:c["default"].isString},trigger:{validator:c["default"].isElement}},t["default"]=h});