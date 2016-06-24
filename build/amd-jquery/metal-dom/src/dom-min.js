define(["exports","metal/src/metal","./metalData","./DomDelegatedEventHandle","./DomEventHandle"],function(e,t,n,r,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=i(n),l=i(r),c=i(a),u="__metal_next_target__",d={blur:!0,error:!0,focus:!0,invalid:!0,load:!0,scroll:!0},f=function(){function e(){s(this,e)}return e.addClasses=function(n,r){t.core.isObject(n)&&t.core.isString(r)&&("classList"in n?e.addClassesWithNative_(n,r):e.addClassesWithoutNative_(n,r))},e.addClassesWithNative_=function(e,t){t.split(" ").forEach(function(t){t&&e.classList.add(t)})},e.addClassesWithoutNative_=function(e,t){var n=" "+e.className+" ",r="";t=t.split(" ");for(var a=0;a<t.length;a++){var i=t[a];n.indexOf(" "+i+" ")===-1&&(r+=" "+i)}r&&(e.className=e.className+r)},e.addElementListener_=function(t,n,r){var a=o["default"].get(t);e.addToArr_(a.listeners,n,r)},e.addSelectorListener_=function(t,n,r,a){var i=o["default"].get(t);e.addToArr_(i.delegating[n].selectors,r,a)},e.addToArr_=function(e,t,n){e[t]||(e[t]=[]),e[t].push(n)},e.attachDelegateEvent_=function(t,n){var r=o["default"].get(t);r.delegating[n]||(r.delegating[n]={handle:e.on(t,n,e.handleDelegateEvent_,!!d[n]),selectors:{}})},e.closest=function(t,n){for(;t&&!e.match(t,n);)t=t.parentNode;return t},e.append=function(n,r){if(t.core.isString(r)&&(r=e.buildFragment(r)),r instanceof NodeList)for(var a=Array.prototype.slice.call(r),i=0;i<a.length;i++)n.appendChild(a[i]);else n.appendChild(r);return r},e.buildFragment=function(e){var t=document.createElement("div");t.innerHTML="<br>"+e,t.removeChild(t.firstChild);for(var n=document.createDocumentFragment();t.firstChild;)n.appendChild(t.firstChild);return n},e.contains=function(e,n){return t.core.isDocument(e)?e.documentElement.contains(n):e.contains(n)},e.delegate=function(n,r,a,i,s){var o=e.customEvents[r];return o&&o.delegate&&(r=o.originalEvent,i=o.handler.bind(o,i)),s&&(i=i.bind(),i.defaultListener_=!0),e.attachDelegateEvent_(n,r),t.core.isString(a)?e.addSelectorListener_(n,r,a,i):e.addElementListener_(a,r,i),new l["default"](t.core.isString(a)?n:a,r,i,t.core.isString(a)?a:null)},e.enterDocument=function(t){t&&e.append(document.body,t)},e.exitDocument=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},e.handleDelegateEvent_=function(n){e.normalizeDelegateEvent_(n);for(var r=t.core.isDef(n[u])?n[u]:n.target,a=!0,i=n.currentTarget,s=n.currentTarget.parentNode,o=[];r&&r!==s&&!n.stopped;)n.delegateTarget=r,a&=e.triggerMatchedListeners_(i,r,n,o),r=r.parentNode;for(var l=0;l<o.length&&!n.defaultPrevented;l++)n.delegateTarget=o[l].element,a&=o[l].fn(n);return n.delegateTarget=null,n[u]=s,a},e.hasClass=function(t,n){return"classList"in t?e.hasClassWithNative_(t,n):e.hasClassWithoutNative_(t,n)},e.hasClassWithNative_=function(e,t){return e.classList.contains(t)},e.hasClassWithoutNative_=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0},e.isEmpty=function(e){return 0===e.childNodes.length},e.match=function(t,n){if(!t||1!==t.nodeType)return!1;var r=Element.prototype,a=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector;return a?a.call(t,n):e.matchFallback_(t,n)},e.matchFallback_=function(e,t){for(var n=document.querySelectorAll(t,e.parentNode),r=0;r<n.length;++r)if(n[r]===e)return!0;return!1},e.next=function(t,n){do if(t=t.nextSibling,t&&e.match(t,n))return t;while(t);return null},e.normalizeDelegateEvent_=function(t){t.stopPropagation=e.stopPropagation_,t.stopImmediatePropagation=e.stopImmediatePropagation_},e.on=function(n,r,a,i){if(t.core.isString(n))return e.delegate(document,r,n,a);var s=e.customEvents[r];return s&&s.event&&(r=s.originalEvent,a=s.handler.bind(s,a)),n.addEventListener(r,a,i),new c["default"](n,r,a,i)},e.once=function(e,t,n){var r=this.on(e,t,function(){return r.removeListener(),n.apply(this,arguments)});return r},e.parent=function(t,n){return e.closest(t.parentNode,n)},e.registerCustomEvent=function(t,n){e.customEvents[t]=n},e.removeChildren=function(e){for(var t;t=e.firstChild;)e.removeChild(t)},e.removeClasses=function(n,r){t.core.isObject(n)&&t.core.isString(r)&&("classList"in n?e.removeClassesWithNative_(n,r):e.removeClassesWithoutNative_(n,r))},e.removeClassesWithNative_=function(e,t){t.split(" ").forEach(function(t){t&&e.classList.remove(t)})},e.removeClassesWithoutNative_=function(e,t){var n=" "+e.className+" ";t=t.split(" ");for(var r=0;r<t.length;r++)n=n.replace(" "+t[r]+" "," ");e.className=n.trim()},e.replace=function(e,t){e&&t&&e!==t&&e.parentNode&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e))},e.stopImmediatePropagation_=function(){this.stopped=!0,this.stoppedImmediate=!0,Event.prototype.stopImmediatePropagation.call(this)},e.stopPropagation_=function(){this.stopped=!0,Event.prototype.stopPropagation.call(this)},e.supportsEvent=function(n,r){return!!e.customEvents[r]||(t.core.isString(n)&&(g[n]||(g[n]=document.createElement(n)),n=g[n]),"on"+r in n)},e.toElement=function(e){return t.core.isElement(e)||t.core.isDocument(e)?e:t.core.isString(e)?"#"===e[0]&&e.indexOf(" ")===-1?document.getElementById(e.substr(1)):document.querySelector(e):null},e.toggleClasses=function(n,r){t.core.isObject(n)&&t.core.isString(r)&&("classList"in n?e.toggleClassesWithNative_(n,r):e.toggleClassesWithoutNative_(n,r))},e.toggleClassesWithNative_=function(e,t){t.split(" ").forEach(function(t){e.classList.toggle(t)})},e.toggleClassesWithoutNative_=function(e,t){var n=" "+e.className+" ";t=t.split(" ");for(var r=0;r<t.length;r++){var a=" "+t[r]+" ",i=n.indexOf(a);n=i===-1?n+t[r]+" ":n.substring(0,i)+" "+n.substring(i+a.length)}e.className=n.trim()},e.triggerEvent=function(e,n,r){var a=document.createEvent("HTMLEvents");a.initEvent(n,!0,!0),t.object.mixin(a,r),e.dispatchEvent(a)},e.triggerListeners_=function(e,t,n,r){var a=!0;e=e||[];for(var i=0;i<e.length&&!t.stoppedImmediate;i++)e[i].defaultListener_?r.push({element:n,fn:e[i]}):a&=e[i](t);return a},e.triggerMatchedListeners_=function(t,n,r,a){for(var i=o["default"].get(n),s=i.listeners[r.type],l=e.triggerListeners_(s,r,n,a),c=o["default"].get(t).delegating[r.type].selectors,u=Object.keys(c),d=0;d<u.length&&!r.stoppedImmediate;d++)e.match(n,u[d])&&(s=c[u[d]],l&=e.triggerListeners_(s,r,n,a));return l},e}(),g={};f.customEvents={},e["default"]=f});