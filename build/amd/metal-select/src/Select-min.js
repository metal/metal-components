define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","metal-soy/src/Soy","./Select.soy.js","metal-dropdown/src/Dropdown"],function(e,t,n,o,r,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var d=i(t),c=i(n),f=i(o),h=i(r),p=i(s),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),_(t,[{key:"findItemIndex_",value:function(e){for(var t=this.element.querySelectorAll("li"),n=0;n<t.length;n++)if(t.item(n)===e)return n}},{key:"focusIndex_",value:function(e){var t=this.element.querySelector(".select-option:nth-child("+(e+1)+") a");t&&(this.focusedIndex_=e,t.focus())}},{key:"getDropdown",value:function(){return this.components.dropdown}},{key:"handleDropdownStateSynced_",value:function(e){this.openedWithKeyboard_?(this.focusIndex_(0),this.openedWithKeyboard_=!1):e.changes.expanded&&(this.focusedIndex_=null)}},{key:"handleItemClick_",value:function(e){this.selectedIndex=this.findItemIndex_(e.delegateTarget),this.getDropdown().close(),e.preventDefault()}},{key:"handleKeyDown_",value:function(e){if(this.getDropdown().expanded)switch(e.keyCode){case 27:this.getDropdown().close();break;case 38:this.focusedIndex_=d["default"].isDefAndNotNull(this.focusedIndex_)?this.focusedIndex_:1,this.focusIndex_(0===this.focusedIndex_?this.items.length-1:this.focusedIndex_-1),e.preventDefault();break;case 40:this.focusedIndex_=d["default"].isDefAndNotNull(this.focusedIndex_)?this.focusedIndex_:-1,this.focusIndex_(this.focusedIndex_===this.items.length-1?0:this.focusedIndex_+1),e.preventDefault()}else if((13===e.keyCode||32===e.keyCode)&&c["default"].hasClass(e.target,"dropdown-select"))return this.openedWithKeyboard_=!0,this.getDropdown().open(),void e.preventDefault()}},{key:"setItems_",value:function(e){return e.map(function(e){return h["default"].toIncDom(e)})}}]),t}(f["default"]);h["default"].register(y,p["default"]),y.STATE={arrowClass:{value:"caret"},buttonClass:{validator:d["default"].isString,value:"btn btn-default"},hiddenInputName:{validator:d["default"].isString},items:{setter:"setItems_",validator:function(e){return e instanceof Array},valueFn:function(){return[]}},label:{setter:function(e){return h["default"].toIncDom(e)},validator:d["default"].isString},selectedIndex:{validator:d["default"].isNumber,valueFn:function(){return this.label||!this.items.length?-1:0}},values:{validator:function(e){return e instanceof Array}}},y.ELEMENT_CLASSES="select",e["default"]=y});