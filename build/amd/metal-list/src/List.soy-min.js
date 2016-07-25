define(["exports","metal-component/src/all/component","metal-soy/src/Soy"],function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.List=void 0;var i,a=o(t),u=o(n);goog.loadModule(function(e){function t(e,t,s){e=e||{},n.asserts.assertType(null==e.itemsHtml||e.itemsHtml instanceof Function||e.itemsHtml instanceof o.UnsanitizedText||goog.isString(e.itemsHtml),"itemsHtml",e.itemsHtml,"?soydata.SanitizedHtml|string|undefined");var i=e.itemsHtml;if(r("div",null,null,"class","list"+(e.elementClasses?" "+e.elementClasses:"")),r("ul",null,null,"class","list-group","data-onclick","handleClick"),null!=i)i();else for(var u=e.items,m=u.length,c=0;c<m;c++){var d=u[c];a({index:c,item:d,key:"-items-"+c},null,s)}l("ul"),l("div")}goog.module("List.incrementaldom");var n=goog.require("soy"),o=goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi");var s=goog.require("incrementaldom"),r=s.elementOpen,l=s.elementClose,a=(s.elementVoid,s.elementOpenStart,s.elementOpenEnd,s.text,s.attr,u["default"].getTemplate("ListItem.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="List.render"),e.render.params=["itemsHtml","elementClasses","items"],e.render.types={itemsHtml:"html",elementClasses:"any",items:"any"},e.templates=i=e,e});var m=function(e){function t(){return s(this,t),r(this,e.apply(this,arguments))}return l(t,e),t}(a["default"]);u["default"].register(m,i),e.List=m,e.templates=i,e["default"]=i});