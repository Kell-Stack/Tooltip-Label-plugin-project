!function(n){var e={};function t(l){if(e[l])return e[l].exports;var a=e[l]={i:l,l:!1,exports:{}};return n[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(l,a,function(e){return n[e]}.bind(null,a));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=411)}({411:
/*!**************************!*\
  !*** ./src/js/mobile.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(module,exports){eval("jQuery.noConflict();\n\n(function($, PLUGIN_ID) {\n  'use strict';\n\n  kintone.events.on('mobile.app.record.index.show', function() {\n    var config = kintone.plugin.app.getConfig(PLUGIN_ID);\n\n    var spaceElement = kintone.mobile.app.getHeaderSpaceElement();\n    var fragment = document.createDocumentFragment();\n    var headingEl = document.createElement('h3');\n    var messageEl = document.createElement('p');\n\n    messageEl.classList.add('plugin-space-message');\n    messageEl.textContent = config.message;\n    headingEl.classList.add('plugin-space-heading');\n    headingEl.textContent = 'Hello kintone plugin!';\n\n    fragment.appendChild(headingEl);\n    fragment.appendChild(messageEl);\n    spaceElement.appendChild(fragment);\n  });\n\n})(jQuery, kintone.$PLUGIN_ID);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9iaWxlLmpzPzI3ZGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQ0FBQyIsImZpbGUiOiI0MTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkubm9Db25mbGljdCgpO1xuXG4oZnVuY3Rpb24oJCwgUExVR0lOX0lEKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBraW50b25lLmV2ZW50cy5vbignbW9iaWxlLmFwcC5yZWNvcmQuaW5kZXguc2hvdycsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb25maWcgPSBraW50b25lLnBsdWdpbi5hcHAuZ2V0Q29uZmlnKFBMVUdJTl9JRCk7XG5cbiAgICB2YXIgc3BhY2VFbGVtZW50ID0ga2ludG9uZS5tb2JpbGUuYXBwLmdldEhlYWRlclNwYWNlRWxlbWVudCgpO1xuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB2YXIgaGVhZGluZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB2YXIgbWVzc2FnZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbWVzc2FnZUVsLmNsYXNzTGlzdC5hZGQoJ3BsdWdpbi1zcGFjZS1tZXNzYWdlJyk7XG4gICAgbWVzc2FnZUVsLnRleHRDb250ZW50ID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaGVhZGluZ0VsLmNsYXNzTGlzdC5hZGQoJ3BsdWdpbi1zcGFjZS1oZWFkaW5nJyk7XG4gICAgaGVhZGluZ0VsLnRleHRDb250ZW50ID0gJ0hlbGxvIGtpbnRvbmUgcGx1Z2luISc7XG5cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nRWwpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbCk7XG4gICAgc3BhY2VFbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgfSk7XG5cbn0pKGpRdWVyeSwga2ludG9uZS4kUExVR0lOX0lEKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///411\n")}});