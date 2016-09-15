define(["exports","metal-component/src/all/component","metal-soy/src/Soy"],function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Popover=void 0;var s,a=n(t),u=n(o);goog.loadModule(function(e){function t(e,t,r){e=e||{},o.asserts.assertType(null==e.content||e.content instanceof Function||e.content instanceof n.UnsanitizedText||goog.isString(e.content),"content",e.content,"?soydata.SanitizedHtml|string|undefined");var s=e.content;o.asserts.assertType(null==e.title||e.title instanceof Function||e.title instanceof n.UnsanitizedText||goog.isString(e.title),"title",e.title,"?soydata.SanitizedHtml|string|undefined");var u=e.title,c=["top","top","right","bottom","bottom","bottom","left","top"],p=null!=e.alignedPosition?e.alignedPosition:e.position,d=null!=p?c[p]:"bottom";i("div",null,null,"class","popover "+d+(e.elementClasses?" "+e.elementClasses:""),"role","tooltip"),(e.withArrow||null==e.withArrow)&&a("div",null,null,"class","arrow"),i("h3",null,null,"class","popover-title"+(u?"":" hidden")),u&&u(),l("h3"),i("div",null,null,"class","popover-content"),i("p"),s&&s(),l("p"),l("div"),l("div")}goog.module("Popover.incrementaldom");var o=goog.require("soy"),n=goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi");var r=goog.require("incrementaldom"),i=r.elementOpen,l=r.elementClose,a=r.elementVoid;r.elementOpenStart,r.elementOpenEnd,r.text,r.attr;return e.render=t,goog.DEBUG&&(t.soyTemplateName="Popover.render"),e.render.params=["content","title","alignedPosition","elementClasses","position","withArrow"],e.render.types={content:"html",title:"html",alignedPosition:"any",elementClasses:"any",position:"any",withArrow:"any"},e.templates=s=e,e});var c=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(a["default"]);u["default"].register(c,s),e.Popover=c,e.templates=s,e["default"]=s});