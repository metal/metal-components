define(["exports","metal/src/metal","metal-component/src/all/component","metal-soy/src/Soy","./ButtonGroup.soy.js","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,n,r,o,i){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var c=l(t),f=l(n),d=l(r),p=l(o),h=l(i),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"handleClick_",value:function(e){var t=e.delegateTarget,n=t.getAttribute("data-index"),r=this.selected.indexOf(this.buttons[n].label);r===-1?(this.selected.push(this.buttons[n].label),this.selected=this.selected):this.selected.length>this.minSelected&&(this.selected.splice(r,1),this.selected=this.selected)}},{key:"setterSelectedFn_",value:function(e){for(var t=Math.min(this.minSelected,this.buttons.length),n=0;e.length<t;)e.indexOf(this.buttons[n].label)===-1&&e.push(this.buttons[n].label),n++;return e}}]),t}(f["default"]);d["default"].register(y,p["default"]),y.STATE={buttons:{validator:function(e){return e instanceof Array},valueFn:function(){return[]}},minSelected:{validator:c["default"].isNumber,value:0,writeOnce:!0},selected:{setter:"setterSelectedFn_",validator:Array.isArray,valueFn:function(){return[]}}},y.SELECTED_CLASS="btn-group-selected",e["default"]=y,h["default"].register("buttonGroup",y)});