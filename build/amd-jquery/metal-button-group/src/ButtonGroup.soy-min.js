define(["exports","metal-component/src/all/component","metal-soy/src/Soy"],function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.ButtonGroup=void 0;var a,u=l(t),c=l(n);goog.loadModule(function(e){function t(e,t,l){o("div",null,null,"class","btn-group component"+(e.elementClasses?" "+e.elementClasses:""));for(var a=e.buttons,c=a.length,i=0;i<c;i++){var p=a[i],d=p.type?p.type:"button",f=p.cssClass?p.cssClass:"btn btn-default",b="";b+=n({label:p.label,selected:e.selected},null,l),o("button",null,null,"type",d,"class",f+b,"data-index",i,"data-onclick","handleClick_","role","checkbox","aria-checked",b?"true":"false"),o("span",null,null,"class","btn-group-label"),u((goog.asserts.assert(null!=(p.label?p.label:"")),p.label?p.label:"")),s("span"),p.icon&&r("span",null,null,"class",p.icon),s("button")}s("div")}function n(e,t,n){var l="";if(e.selected)for(var o=e.selected,s=o.length,r=0;r<s;r++){var a=o[r];l+=a==e.label?" btn-group-selected":""}return l}goog.module("ButtonGroup.incrementaldom");goog.require("soy"),goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts");var l=goog.require("incrementaldom"),o=l.elementOpen,s=l.elementClose,r=l.elementVoid,u=(l.elementOpenStart,l.elementOpenEnd,l.text);l.attr;return e.render=t,goog.DEBUG&&(t.soyTemplateName="ButtonGroup.render"),e.selectedClass=n,goog.DEBUG&&(n.soyTemplateName="ButtonGroup.selectedClass"),e.render.params=["buttons","elementClasses","selected"],e.render.types={buttons:"any",elementClasses:"any",selected:"any"},e.selectedClass.params=["label","selected"],e.selectedClass.types={label:"any",selected:"any"},e.templates=a=e,e});var i=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(u["default"]);c["default"].register(i,a),e.ButtonGroup=i,e.templates=a,e["default"]=a});