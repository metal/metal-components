define(["exports","metal-component/src/all/component","metal-soy/src/Soy"],function(e,a,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function t(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function r(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Datatable=void 0;var o,u=n(a),p=n(l);goog.loadModule(function(e){function a(e,a,n){b("div",null,null,"class","datatable"+(e.elementClasses?" "+e.elementClasses:"")),l(c.$$augmentMap(e.data,{displayColumnsType:e.displayColumnsType,tableClasses:e.tableClasses}),null,n),g("div")}function l(e,a,l){var o;switch(goog.isObject(o=e.type)?o.toString():o){case"array":e.columns?s(e,null,l):n(e,null,l);break;case"boolean":t(e,null,l);break;case"null":r(e,null,l);break;case"number":u(e,null,l);break;case"object":p(e,null,l);break;case"string":y(e,null,l);break;case"undefined":d(e,null,l)}}function n(e,a,n){b("span",null,null,"class","datatable-array"),b("span",null,null,"class","datatable-label collapsed","data-onclick","toggleTableContents"),f("Array, "),f((goog.asserts.assert(null!=e.value.length),e.value.length)),f(" items"),g("span"),b("table",null,null,"class",(e.tableClasses?e.tableClasses+"":"")+" hidden"),b("tbody");for(var s=e.value,t=s.length,r=0;r<t;r++){var o=s[r];b("tr"),b("td"),l(c.$$augmentMap(o,{tableClasses:e.tableClasses,displayColumnsType:e.displayColumnsType}),null,n),g("td"),g("tr")}g("tbody"),g("table"),g("span")}function s(e,a,n){b("span",null,null,"class","datatable-array-object"),b("table",null,null,"class",e.tableClasses?e.tableClasses:""),b("thead"),b("tr");for(var s=e.columns,t=s.length,r=0;r<t;r++){var o=s[r];b("th"),f((goog.asserts.assert(null!=o),o)),e.displayColumnsType&&e.columnsType&&(b("span",null,null,"class","datatable-type"),f((goog.asserts.assert(null!=e.columnsType[o]),e.columnsType[o])),g("span")),g("th")}g("tr"),g("thead"),b("tbody");for(var u=e.value,p=u.length,d=0;d<p;d++){var y=u[d];b("tr");for(var i=e.columns,m=i.length,v=0;v<m;v++){var C=i[v];b("td"),l(c.$$augmentMap(y.value[C],{displayColumnsType:e.displayColumnsType,tableClasses:e.tableClasses}),null,n),g("td")}g("tr")}g("tbody"),g("table"),g("span")}function t(e,a,l){b("span",null,null,"class","datatable-boolean"),f((goog.asserts.assert(null!=e.value),e.value)),g("span")}function r(e,a,l){b("span",null,null,"class","datatable-null"),f("null"),g("span")}function u(e,a,l){b("span",null,null,"class","datatable-number"),f((goog.asserts.assert(null!=e.value),e.value)),g("span")}function p(e,a,n){b("span",null,null,"class","datatable-object"),b("span",null,null,"class","datatable-label collapsed","data-onclick","toggleTableContents"),f("Object, "),f((goog.asserts.assert(null!=c.$$getMapKeys(e.value).length),c.$$getMapKeys(e.value).length)),f(" items"),g("span"),b("table",null,null,"class",(e.tableClasses?e.tableClasses:"")+" hidden"),b("thead"),b("tr");for(var s=e.columns,t=s.length,r=0;r<t;r++){var o=s[r];b("th"),f((goog.asserts.assert(null!=o),o)),e.displayColumnsType&&e.columnsType&&(b("span",null,null,"class","datatable-type"),f((goog.asserts.assert(null!=e.columnsType[o]),e.columnsType[o])),g("span")),g("th")}g("tr"),g("thead"),b("tbody"),b("tr");for(var u=e.columns,p=u.length,d=0;d<p;d++){var y=u[d];b("td"),l(c.$$augmentMap(e.value[y],{displayColumnsType:e.displayColumnsType,tableClasses:e.tableClasses}),null,n),g("td")}g("tr"),g("tbody"),g("table"),g("span")}function d(e,a,l){b("span",null,null,"class","datatable-undefined"),f("undefined"),g("span")}function y(e,a,l){c.asserts.assertType(e.value instanceof Function||e.value instanceof i.UnsanitizedText||goog.isString(e.value),"value",e.value,"Function");var n=e.value;b("span",null,null,"class","datatable-string"),n(),g("span")}goog.module("Datatable.incrementaldom");var c=goog.require("soy"),i=goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi");var m=goog.require("incrementaldom"),b=m.elementOpen,g=m.elementClose,f=(m.elementVoid,m.elementOpenStart,m.elementOpenEnd,m.text);m.attr;return e.render=a,goog.DEBUG&&(a.soyTemplateName="Datatable.render"),e.render_=l,goog.DEBUG&&(l.soyTemplateName="Datatable.render_"),e.renderArray_=n,goog.DEBUG&&(n.soyTemplateName="Datatable.renderArray_"),e.renderArrayOfObjects_=s,goog.DEBUG&&(s.soyTemplateName="Datatable.renderArrayOfObjects_"),e.renderBoolean_=t,goog.DEBUG&&(t.soyTemplateName="Datatable.renderBoolean_"),e.renderNull_=r,goog.DEBUG&&(r.soyTemplateName="Datatable.renderNull_"),e.renderNumber_=u,goog.DEBUG&&(u.soyTemplateName="Datatable.renderNumber_"),e.renderObject_=p,goog.DEBUG&&(p.soyTemplateName="Datatable.renderObject_"),e.renderUndefined_=d,goog.DEBUG&&(d.soyTemplateName="Datatable.renderUndefined_"),e.renderString_=y,goog.DEBUG&&(y.soyTemplateName="Datatable.renderString_"),e.render.params=["data","displayColumnsType","elementClasses","tableClasses"],e.render.types={data:"any",displayColumnsType:"any",elementClasses:"any",tableClasses:"any"},e.render_.params=["type","columns"],e.render_.types={type:"any",columns:"any"},e.renderArray_.params=["value","displayColumnsType","tableClasses"],e.renderArray_.types={value:"any",displayColumnsType:"any",tableClasses:"any"},e.renderArrayOfObjects_.params=["columns","value","columnsType","displayColumnsType","tableClasses"],e.renderArrayOfObjects_.types={columns:"any",value:"any",columnsType:"any",displayColumnsType:"any",tableClasses:"any"},e.renderBoolean_.params=["value"],e.renderBoolean_.types={value:"any"},e.renderNull_.params=[],e.renderNull_.types={},e.renderNumber_.params=["value"],e.renderNumber_.types={value:"any"},e.renderObject_.params=["columns","value","columnsType","displayColumnsType","tableClasses"],e.renderObject_.types={columns:"any",value:"any",columnsType:"any",displayColumnsType:"any",tableClasses:"any"},e.renderUndefined_.params=[],e.renderUndefined_.types={},e.renderString_.params=["value"],e.renderString_.types={value:"html"},e.templates=o=e,e});var d=function(e){function a(){return s(this,a),t(this,e.apply(this,arguments))}return r(a,e),a}(u["default"]);p["default"].register(d,o),e.Datatable=d,e.templates=o,e["default"]=o});