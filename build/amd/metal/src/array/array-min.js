define(["exports","../core"],function(e,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=r(n),f=function(){function e(){t(this,e)}return e.equal=function(e,n){if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==n[r])return!1;return!0},e.firstDefinedValue=function(e){for(var n=0;n<e.length;n++)if(void 0!==e[n])return e[n]},e.flatten=function(n,r){for(var t=r||[],u=0;u<n.length;u++)Array.isArray(n[u])?e.flatten(n[u],t):t.push(n[u]);return t},e.remove=function(n,r){var t,u=n.indexOf(r);return(t=u>=0)&&e.removeAt(n,u),t},e.removeAt=function(e,n){return 1===Array.prototype.splice.call(e,n,1).length},e.slice=function(e,n,r){for(var t=[],f=u["default"].isDef(r)?r:e.length,o=n;o<f;o++)t.push(e[o]);return t},e}();e["default"]=f});