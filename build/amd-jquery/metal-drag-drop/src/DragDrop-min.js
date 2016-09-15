define(["exports","metal/src/metal","metal-dom/src/all/dom","./Drag","metal-position/src/all/position","metal-events/src/events"],function(t,e,r,o,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var l=i(r),u=i(o),f=i(a),g=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),p=function h(t,e,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:h(a,e,r)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(r)},v=function(t){function r(t){n(this,r);var e=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.activeTargets_=[],e}return c(r,t),g(r,[{key:"addTarget",value:function(t){this.targets.push(t),this.targets=this.targets}},{key:"buildEventObject_",value:function(){var t=p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"buildEventObject_",this).call(this);return t.target=this.activeTargets_[0],t.allActiveTargets=this.activeTargets_,t}},{key:"cleanUpAfterDragging_",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"cleanUpAfterDragging_",this).call(this),this.targets.forEach(function(t){return t.removeAttribute("aria-dropeffect")}),this.activeTargets_.length&&l["default"].removeClasses(this.activeTargets_[0],this.targetOverClass),this.activeTargets_=[]}},{key:"findAllActiveTargets_",value:function(){var t,e=[],r=this.getSourceRegion_(),o=this.targets;return o.forEach(function(a,i){var n=f["default"].getRegion(a);o[i]!==this.activeDragPlaceholder_&&f["default"].intersectRegion(n,r)&&(!t||f["default"].insideRegion(t,n)?(e=[o[i]].concat(e),t=n):e.push(o[i]))}.bind(this)),e}},{key:"getSourceRegion_",value:function(){if(e.core.isDefAndNotNull(this.mousePos_)){var t=this.mousePos_.x,r=this.mousePos_.y;return f["default"].makeRegion(r,0,t,t,r,0)}var o=e.object.mixin({},this.sourceRegion_);return o.left-=document.body.scrollLeft,o.right-=document.body.scrollLeft,o.top-=document.body.scrollTop,o.bottom-=document.body.scrollTop,o}},{key:"handleContainerChanged_",value:function(t,e){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"handleContainerChanged_",this).call(this,t,e),this.prevTargetsSelector_&&(this.targets=this.prevTargetsSelector_)}},{key:"removeTarget",value:function(t){e.array.remove(this.targets,t),this.targets=this.targets}},{key:"setterTargetsFn_",value:function(t){return this.prevTargetsSelector_=e.core.isString(t)?t:null,this.toElements_(t)}},{key:"startDragging_",value:function(){var t=this;this.ariaDropEffect&&this.targets.forEach(function(e){return e.setAttribute("aria-dropeffect",t.ariaDropEffect)}),p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"startDragging_",this).call(this)}},{key:"updatePosition",value:function(t,e){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"updatePosition",this).call(this,t,e);var o=this.findAllActiveTargets_();o[0]!==this.activeTargets_[0]&&(this.activeTargets_[0]&&(l["default"].removeClasses(this.activeTargets_[0],this.targetOverClass),this.emit(r.Events.TARGET_LEAVE,this.buildEventObject_())),this.activeTargets_=o,this.activeTargets_[0]&&(l["default"].addClasses(this.activeTargets_[0],this.targetOverClass),this.emit(r.Events.TARGET_ENTER,this.buildEventObject_())))}}]),r}(u["default"]);v.STATE={ariaDropEffect:{validator:e.core.isString},targetOverClass:{validator:e.core.isString,value:"targetOver"},targets:{setter:"setterTargetsFn_",validator:"validateElementOrString_"}},v.Events={DRAG:"drag",END:"end",TARGET_ENTER:"targetEnter",TARGET_LEAVE:"targetLeave"},t["default"]=v});