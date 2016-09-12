define(["exports","metal/src/metal","./Treeview.soy.js","metal-component/src/all/component","metal-keyboard-focus/src/KeyboardFocusManager","metal-soy/src/Soy","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,n,o,r,a,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var c=s(t),f=s(n),h=s(o),p=s(r),y=s(a),_=s(i),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),g(t,[{key:"attached",value:function(){this.keyboardFocusManager_=new p["default"](this,"li").setFocusHandler(this.handleNextFocus_.bind(this)).start(),this.keyboardFocusManager_.on(p["default"].EVENT_FOCUSED,this.handleKeyboardFocused_.bind(this))}},{key:"disposed",value:function(){this.keyboardFocusManager_.dispose(),this.keyboardFocusManager_=null}},{key:"getNodeObj",value:function(e){for(var t=this.nodes[e[0]],n=1;n<e.length;n++)t=t.children[e[n]];return t}},{key:"getPath_",value:function(e){return e.getAttribute("data-treeview-path").split("-")}},{key:"handleKeyboardFocused_",value:function(e){this.lastFocusedRef_=e.ref}},{key:"handleLeftArrow_",value:function(e,n){if(n.expanded)n.expanded=!1,this.nodes=this.nodes;else if(e.length>1)return e.pop(),t.NODE_REF_PREFIX+e.join("-")}},{key:"handleNextFocus_",value:function(e){e.stopPropagation();var t=this.getPath_(e.delegateTarget),n=this.getNodeObj(t);switch(e.keyCode){case 37:return this.handleLeftArrow_(t,n);case 39:return this.handleRightArrow_(t,n);default:return!0}}},{key:"handleNodeClicked_",value:function(e){this.toggleExpandedState_(e.delegateTarget.parentNode.parentNode)}},{key:"handleNodeKeyUp_",value:function(e){13!==e.keyCode&&32!==e.keyCode||(this.toggleExpandedState_(e.delegateTarget),e.stopPropagation())}},{key:"handleRightArrow_",value:function(e,n){return n.expanded?(e.push(0),t.NODE_REF_PREFIX+e.join("-")):void(n.children&&(n.expanded=!0,this.nodes=this.nodes))}},{key:"toggleExpandedState_",value:function(e){var t=this.getNodeObj(this.getPath_(e));t.expanded=!t.expanded,this.nodes=this.nodes}}]),t}(h["default"]);y["default"].register(b,f["default"]),b.NODE_REF_PREFIX="node-",b.STATE={lastFocusedRef_:{internal:!0,validator:c["default"].isString},nodes:{validator:Array.isArray,valueFn:function(){return[]}}},e["default"]=b,_["default"].register("treeview",b)});