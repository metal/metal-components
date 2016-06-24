define(["exports","metal-component/src/Component","metal-soy/src/Soy"],function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Treeview=void 0;var s,i=o(n),d=o(t);goog.loadModule(function(e){function n(e,n,o){l("div",null,null,"class","treeview"+(e.elementClasses?" "+e.elementClasses:""),"role","tree"),t(e,null,o),a("div")}function t(e,n,t){if(e.nodes){l("ul",null,null,"class","treeview-nodes");for(var r=e.nodes,s=r.length,i=0;i<s;i++){var d=r[i],u=i;o({node:d,path:null!=e.parentPath?e.parentPath+"-"+u:u},null,t)}a("ul")}}function o(e,n,o){l("li",null,null,"class","treeview-node","data-treeview-path",e.path),e.node&&(l("div",null,null,"class","treeview-node-wrapper"+(e.node.expanded?" expanded":"")),l("div",null,null,"class","treeview-node-main clearfix"+(e.node.children?" hasChildren":""),"data-onclick","handleNodeClicked_","data-onkeyup","handleNodeKeyUp_","aria-expanded",e.node.expanded?"true":"false","role","treeitem","tabindex","0"),e.node.children&&i("div",null,null,"class","treeview-node-toggler"),l("span",null,null,"class","treeview-node-name"),d((goog.asserts.assert(null!=e.node.name),e.node.name)),a("span"),a("div"),t({nodes:e.node.children,parentPath:e.path},null,o),a("div")),a("li")}goog.module("Treeview.incrementaldom");goog.require("soy"),goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts");var r=goog.require("incrementaldom"),l=r.elementOpen,a=r.elementClose,i=r.elementVoid,d=(r.elementOpenStart,r.elementOpenEnd,r.text);r.attr;return e.render=n,goog.DEBUG&&(n.soyTemplateName="Treeview.render"),e.nodes=t,goog.DEBUG&&(t.soyTemplateName="Treeview.nodes"),e.node=o,goog.DEBUG&&(o.soyTemplateName="Treeview.node"),e.render.params=["elementClasses","nodes"],e.nodes.params=["nodes","parentPath"],e.node.params=["node","path"],e.templates=s=e,e});var u=function(e){function n(){return r(this,n),l(this,e.apply(this,arguments))}return a(n,e),n}(i["default"]);d["default"].register(u,s),e["default"]=s,e.Treeview=u,e.templates=s});