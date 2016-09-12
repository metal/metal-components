define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","metal-drag-drop/src/all/drag","metal-position/src/all/position","metal-soy/src/Soy","./Slider.soy.js","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,a,n,i,r,o,l,u){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var f=s(t),p=s(a),v=s(n),y=s(r),g=s(o),_=s(l),m=s(u),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),D=function w(e,t,a){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:w(i,t,a)}if("value"in n)return n.value;var r=n.get;if(void 0!==r)return r.call(a)},O=function(e){function t(){return c(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),b(t,[{key:"attached",value:function(){this.drag_=new i.Drag({constrain:this.element.querySelector(".rail"),container:this.element,handles:".handle",sources:".rail-handle"}),this.on("elementChanged",this.handleElementChanged_),this.attachDragEvents_()}},{key:"attachDragEvents_",value:function(){this.drag_.on(i.Drag.Events.DRAG,this.updateValueFromDragData_.bind(this)),this.drag_.on(i.Drag.Events.END,this.updateValueFromDragData_.bind(this))}},{key:"disposeInternal",value:function(){D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disposeInternal",this).call(this),this.drag_.dispose()}},{key:"getDrag",value:function(){return this.drag_}},{key:"handleElementChanged_",value:function(e){this.drag_.container=e.newVal,this.drag_.constrain=e.newVal.querySelector(".rail")}},{key:"onRailMouseDown_",value:function(e){(p["default"].hasClass(e.target,"rail")||p["default"].hasClass(e.target,"rail-active"))&&this.updateValue_(e.offsetX,0)}},{key:"syncMax",value:function(e){e<this.value?this.value=e:this.updateHandlePosition_()}},{key:"syncMin",value:function(e){e>this.value?this.value=e:this.updateHandlePosition_()}},{key:"syncValue",value:function(){this.updateHandlePosition_()}},{key:"updateHandlePosition_",value:function(){if(!this.drag_||!this.drag_.isDragging()){var e=100*(this.value-this.min)/(this.max-this.min)+"%";this.element.querySelector(".rail-handle").style.left=e}}},{key:"updateValue_",value:function(e,t){var a=y["default"].getRegion(this.element);this.value=Math.round(t+e/a.width*(this.max-this.min))}},{key:"updateValueFromDragData_",value:function(e){this.updateValue_(e.relativeX,this.min)}}]),t}(v["default"]);g["default"].register(O,_["default"]),O.STATE={inputName:{validator:f["default"].isString},max:{value:100},min:{value:0},value:{validator:function(e){return f["default"].isNumber(e)&&this.min<=e&&e<=this.max},value:0}},e["default"]=O,m["default"].register("slider",O)});