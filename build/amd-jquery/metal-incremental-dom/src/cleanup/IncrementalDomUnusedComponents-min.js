define(["exports"],function(e){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),r=[],u=!1,o=function(){function e(){n(this,e)}return t(e,null,[{key:"disposeUnused",value:function(){if(!u){u=!0;for(var e=0;e<r.length;e++){var n=r[e];n.isDisposed()||n.getRenderer().getParent()||(n.element=null,n.dispose())}r=[],u=!1}}},{key:"schedule",value:function(e){for(var n=0;n<e.length;n++)e[n].isDisposed()||(e[n].getRenderer().parent_=null,r.push(e[n]))}}]),e}();e["default"]=o});