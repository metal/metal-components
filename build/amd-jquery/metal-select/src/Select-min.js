define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","metal-soy/src/Soy","./Select.soy.js","metal-jquery-adapter/src/JQueryAdapter","metal-dropdown/src/Dropdown"],function(e,t,n,o,r,s,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var c=u(t),f=u(n),h=u(o),p=u(r),y=u(s),_=u(i),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),v=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),m(t,[{key:"findItemIndex_",value:function(e){for(var t=this.element.querySelectorAll("li"),n=0;n<t.length;n++)if(t.item(n)===e)return n}},{key:"focusIndex_",value:function(e){var t=this.element.querySelector(".select-option:nth-child("+(e+1)+") a");t&&(this.focusedIndex_=e,t.focus())}},{key:"getDropdown",value:function(){return this.components.dropdown}},{key:"handleDropdownStateSynced_",value:function(e){this.openedWithKeyboard_?(this.focusIndex_(0),this.openedWithKeyboard_=!1):e.changes.expanded&&(this.focusedIndex_=null)}},{key:"handleItemClick_",value:function(e){this.selectedIndex=this.findItemIndex_(e.delegateTarget),this.getDropdown().close(),e.preventDefault()}},{key:"handleKeyDown_",value:function(e){if(this.getDropdown().expanded)switch(e.keyCode){case 27:this.getDropdown().close();break;case 38:this.focusedIndex_=c["default"].isDefAndNotNull(this.focusedIndex_)?this.focusedIndex_:1,this.focusIndex_(0===this.focusedIndex_?this.items.length-1:this.focusedIndex_-1),e.preventDefault();break;case 40:this.focusedIndex_=c["default"].isDefAndNotNull(this.focusedIndex_)?this.focusedIndex_:-1,this.focusIndex_(this.focusedIndex_===this.items.length-1?0:this.focusedIndex_+1),e.preventDefault()}else if((13===e.keyCode||32===e.keyCode)&&f["default"].hasClass(e.target,"dropdown-select"))return this.openedWithKeyboard_=!0,this.getDropdown().open(),void e.preventDefault()}},{key:"setItems_",value:function(e){return e.map(function(e){return p["default"].toIncDom(e)})}}]),t}(h["default"]);p["default"].register(v,y["default"]),v.STATE={arrowClass:{value:"caret"},buttonClass:{validator:c["default"].isString,value:"btn btn-default"},hiddenInputName:{validator:c["default"].isString},items:{setter:"setItems_",validator:function(e){return e instanceof Array},valueFn:function(){return[]}},label:{setter:function(e){return p["default"].toIncDom(e)},validator:c["default"].isString},selectedIndex:{validator:c["default"].isNumber,valueFn:function(){return this.label||!this.items.length?-1:0}},values:{validator:function(e){return e instanceof Array}}},v.ELEMENT_CLASSES="select",e["default"]=v,_["default"].register("select",v)});