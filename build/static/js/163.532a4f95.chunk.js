/*! For license information please see 163.532a4f95.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[163],{2328:function(t,e,n){"use strict";n.r(e);var r=n(87),a=n(46),o=n(3),i=n(45),l=n(0),c=n.n(l),u=n(62),s=n(28),d=n(869),p=n.n(d),f=n(327),m=n(453);function v(){v=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),l=new O(a||[]);return r(i,"_invoke",{value:w(t,n,l)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var d={};function p(){}function f(){}function m(){}var h={};c(h,o,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(L([])));_&&_!==e&&n.call(_,o)&&(h=_);var y=m.prototype=p.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,l){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function w(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:f,configurable:!0}),f.displayName=c(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var h=function(t){var e=Object(u.g)(),n=t.i,a=t.j,d=t.setIsEdit,p=t.setAllUnit,h=t.setCreateUnit,g=t.setAllBuilding,_=t.CreateUnit,y=t.id,b=Object(l.useState)(null),E=Object(i.a)(b,2),w=E[0],x=E[1],j=Object(l.useState)(null),N=Object(i.a)(j,2),O=N[0],L=N[1],P=function(){var t=Object(r.a)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/project/single/"+(null===n||void 0===n?void 0:n.Project));case 2:if(200!==(e=t.sent).status){t.next=7;break}x(e.data.name),t.next=8;break;case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(r.a)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/building/single/"+(null===n||void 0===n?void 0:n.building));case 2:if(200!==(e=t.sent).status){t.next=7;break}L(e.data.name),t.next=8;break;case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){P(),k()}),[]);var S=function(){var t=Object(r.a)(v().mark((function t(e){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)||"Select Project"===e){t.next=5;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});case 3:n=t.sent,g(n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(r.a)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/all/unit",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,p(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(r.a)(v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("".concat("https://growbuild-jg.onrender.com","/api/delete/unit/").concat(y));case 2:200===t.sent.status&&(window.alert("Unit Deleted!"),T(),e.go(0));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(r.a)(v().mark((function t(e){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(Object(o.a)(Object(o.a)({},_),{},{Project:null===e||void 0===e?void 0:e.Project,building:null===e||void 0===e?void 0:e.building,unit_name:null===e||void 0===e?void 0:e.unit_name,total_area_this_unit:null===e||void 0===e?void 0:e.total_area_this_unit,carpet_area:null===e||void 0===e?void 0:e.carpet_area,build_up_area:null===e||void 0===e?void 0:e.build_up_area,balcony_area:null===e||void 0===e?void 0:e.balcony_area,total_number_of_flat_on_this_unit:null===e||void 0===e?void 0:e.total_number_of_flat_on_this_unit,parking_detail:null===e||void 0===e?void 0:e.parking_detail,extra_facilities:null===e||void 0===e?void 0:e.extra_facilities,id:null===e||void 0===e?void 0:e._id})),d(!0),t.next=4,S(null===e||void 0===e?void 0:e.Project);case 4:h(Object(o.a)(Object(o.a)({},_),{},{Project:null===e||void 0===e?void 0:e.Project,building:null===e||void 0===e?void 0:e.building,unit_name:null===e||void 0===e?void 0:e.unit_name,total_area_this_unit:null===e||void 0===e?void 0:e.total_area_this_unit,carpet_area:null===e||void 0===e?void 0:e.carpet_area,build_up_area:null===e||void 0===e?void 0:e.build_up_area,balcony_area:null===e||void 0===e?void 0:e.balcony_area,total_number_of_flat_on_this_unit:null===e||void 0===e?void 0:e.total_number_of_flat_on_this_unit,parking_detail:null===e||void 0===e?void 0:e.parking_detail,extra_facilities:null===e||void 0===e?void 0:e.extra_facilities,id:null===e||void 0===e?void 0:e._id,price:null===e||void 0===e?void 0:e.price,TotalPrice:null===e||void 0===e?void 0:e.totalPrice}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("tr",null,c.a.createElement("td",null,a+1),c.a.createElement("td",null,null!==w?w:c.a.createElement(c.a.Fragment,null)),c.a.createElement("td",null,null!==O?O:c.a.createElement(c.a.Fragment,null)),c.a.createElement("td",null,null===n||void 0===n?void 0:n.unit_name),c.a.createElement("td",null,null===n||void 0===n?void 0:n.balcony_area),c.a.createElement("td",null,null===n||void 0===n?void 0:n.build_up_area),c.a.createElement("td",null,null===n||void 0===n?void 0:n.carpet_area),c.a.createElement("td",null,null===n||void 0===n?void 0:n.total_area_this_unit),c.a.createElement("td",null,null===n||void 0===n?void 0:n.price),c.a.createElement("td",null,null===n||void 0===n?void 0:n.totalPrice),c.a.createElement("td",null,c.a.createElement(f.a,{className:"cursor-pointer",color:"green",size:30,onClick:function(){A(n)}}),c.a.createElement(m.a,{className:"cursor-pointer",color:"red",size:30,onClick:function(){C(y)}})))};function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),l=new O(a||[]);return r(i,"_invoke",{value:w(t,n,l)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var d={};function p(){}function f(){}function m(){}var v={};c(v,o,(function(){return this}));var h=Object.getPrototypeOf,_=h&&h(h(L([])));_&&_!==e&&n.call(_,o)&&(v=_);var y=m.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e((function(a,i){!function r(a,o,i,l){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function w(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:f,configurable:!0}),f.displayName=c(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}e.default=function(){var t,e,n=Object(l.useState)(!1),d=Object(i.a)(n,2),f=d[0],m=d[1],v=Object(l.useState)(null),_=Object(i.a)(v,2),y=_[0],b=_[1],E=Object(l.useState)({Project:null,building:null,unit_name:null,total_area_this_unit:null,carpet_area:null,build_up_area:null,balcony_area:null,total_number_of_flat_on_this_unit:null,parking_detail:null,extra_facilities:null,id:null,price:null,TotalPrice:null}),w=Object(i.a)(E,2),x=w[0],j=w[1],N=Object(l.useState)(null),O=Object(i.a)(N,2),L=O[0],P=O[1],k=Object(l.useState)(null),S=Object(i.a)(k,2),T=(S[0],S[1]),C=function(n){t=n.target.name,e=n.target.value,j(Object(o.a)(Object(o.a)({},x),{},Object(a.a)({},t,e)))},A=Object(l.useState)(null),F=Object(i.a)(A,2),U=F[0],G=F[1],B=function(){var t=Object(r.a)(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/all/project",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,G(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=Object(u.g)();Object(l.useEffect)((function(){B()}),[]);var q=function(){var t=Object(r.a)(g().mark((function t(e){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)||"Select Project"===e){t.next=6;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/buildings/").concat(e),{Headers:{"Content-Type":"application/json"}});case 3:n=t.sent,P(n.data),console.log(n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(r.a)(g().mark((function t(e){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(24!==(null===e||void 0===e?void 0:e.length)&&12!==(null===e||void 0===e?void 0:e.length)){t.next=6;break}return t.next=3,s.a.get("".concat("https://growbuild-jg.onrender.com","/api/building/").concat(e),{Headers:{"Content-Type":"application/json"}});case 3:n=t.sent,T(n.data),console.log(n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(){var t=Object(r.a)(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("https://growbuild-jg.onrender.com/api/create/unit",{Project:x.Project,building:x.building,unit_name:x.unit_name,total_area_this_unit:x.total_area_this_unit,carpet_area:x.carpet_area,build_up_area:x.build_up_area,balcony_area:x.balcony_area,total_number_of_flat_on_this_unit:x.total_number_of_flat_on_this_unit,parking_detail:x.parking_detail,extra_facilities:x.extra_facilities,price:x.price,totalPrice:x.TotalPrice});case 2:200===t.sent.status&&(window.alert("Unit Upload Done!"),I.go(0));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(r.a)(g().mark((function t(e){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("".concat("https://growbuild-jg.onrender.com","/api/update/unit/").concat(e),{Project:x.Project,building:x.building,unit_name:x.unit_name,total_area_this_unit:x.total_area_this_unit,carpet_area:x.carpet_area,build_up_area:x.build_up_area,balcony_area:x.balcony_area,total_number_of_flat_on_this_unit:x.total_number_of_flat_on_this_unit,parking_detail:x.parking_detail,extra_facilities:x.extra_facilities,price:x.price,totalPrice:x.TotalPrice});case 2:200===t.sent.status&&(p()("Unit Updated!"),setTimeout((function(){I.go(0)}),2e3));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(r.a)(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://growbuild-jg.onrender.com/api/all/unit",{Headers:{"Content-Type":"application/json"}});case 2:e=t.sent,b(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){D()}),[]);var J=function(){if(null!=x.total_area_this_unit&&null!=x.price){var t=document.getElementById("totalArea"),e=document.getElementById("price");document.getElementById("TotalPrice").value=t.value*e.value}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container bg-white p-2 rounded-2"},c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg"},c.a.createElement("h3",{className:"text-alternate text-primary"},"Create New Unit"),c.a.createElement("hr",null),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Project"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"project",onChange:function(t){C(t),q(t.target.value)},name:"Project",value:x.Project},null===U?c.a.createElement("option",{value:null,name:null},"Loading..."):c.a.createElement("option",{value:null,name:null},"Select Project"),null!==U&&0===(null===U||void 0===U?void 0:U.length)&&c.a.createElement("option",{value:null,name:null},"No projects Avaliable"),null!==U&&(null===U||void 0===U?void 0:U.length)>0&&U.map((function(t){return c.a.createElement("option",{name:null===t||void 0===t?void 0:t._id,value:null===t||void 0===t?void 0:t._id},null===t||void 0===t?void 0:t.Name)}))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Select Building"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{className:"form-control",id:"building",name:"building",onChange:function(t){C(t),H(t.target.value)},value:x.building},null===x.project?c.a.createElement("option",{value:null,name:null},"First select Project"):c.a.createElement(c.a.Fragment,null,null===L&&c.a.createElement("option",{value:null,name:null},"Loading..."),null!==L&&0===(null===L||void 0===L?void 0:L.length)&&c.a.createElement("option",{value:null,name:null},"No Building Avaliable")),(null===L||void 0===L?void 0:L.length)>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null,name:null},"Select Building"),null===L||void 0===L?void 0:L.map((function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{value:null===t||void 0===t?void 0:t._id,name:null===t||void 0===t?void 0:t._id},null===t||void 0===t?void 0:t.buildingName))})))))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Unit Name"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"unitName",name:"unit_name",onChange:C,value:x.unit_name,required:""}))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Saleable Area This Unit"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number",className:"form-control",id:"totalArea",name:"total_area_this_unit",onChange:function(t){C(t),J()},value:x.total_area_this_unit,required:""}))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Carpet Area"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number",className:"form-control",id:"carpet",name:"carpet_area",onChange:C,value:x.carpet_area,required:""}))),c.a.createElement("div",{className:"col-md-6 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Built-Up Area"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number",className:"form-control",id:"builtup",name:"build_up_area",onChange:C,value:x.build_up_area,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Balcony Area"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number",className:"form-control",id:"balcony",name:"balcony_area",onChange:C,value:x.balcony_area,required:""}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Price per sq.ft"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number","aria-label":"price",placeholder:"Enter Price",className:"form-control",name:"price",id:"price",onChange:function(t){C(t),J()},value:x.price}))),c.a.createElement("div",{className:"col-md-4 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Total Price"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number","aria-label":"Total Price",placeholder:"Total Price",className:"form-control",name:"TotalPrice",id:"TotalPrice",onChange:C,value:x.TotalPrice}))),c.a.createElement("div",{className:"col-md-12 col-12 mb-2"},c.a.createElement("p",{className:"text-alternate"},"Extra Facilities"),c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",{type:"text",className:"form-control",id:"facilities",name:"extra_facilities",onChange:C,value:x.extra_facilities,required:""}))),c.a.createElement("div",{className:"col-md-12 col-12 text-right"},f?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-md mb-1 mr-1",onClick:function(){j(Object(o.a)(Object(o.a)({},x),{},{Project:null,building:null,unit_name:null,total_area_this_unit:null,carpet_area:null,build_up_area:null,balcony_area:null,total_number_of_flat_on_this_unit:null,parking_detail:null,extra_facilities:null,id:null})),m(!1)}}," ","Exit"," "),c.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return z(null===x||void 0===x?void 0:x.id)}}," ","Update"," ")):c.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-md mb-1 mr-1",onClick:function(){return Y()}}," ","Create"," "))),!f&&c.a.createElement("form",{className:"row px-4 py-4 mx-2 my-2 shadow-lg needs-validation",novalidate:!0},c.a.createElement("h3",{className:"text-alternate text-primary"},"All Units"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("table",{className:"table table-striped table-responsive"},c.a.createElement("tr",null,c.a.createElement("th",null,"Sno"),c.a.createElement("th",null,"Project"),c.a.createElement("th",null,"Building"),c.a.createElement("th",null,"Unit Name"),c.a.createElement("th",null,"Balcony Area"),c.a.createElement("th",null,"Build Up Area"),c.a.createElement("th",null,"Carpet Area"),c.a.createElement("th",null,"Saleable Area"),c.a.createElement("th",null,"Price per sq. ft"),c.a.createElement("th",null,"Total Price"),c.a.createElement("th",null,"Action")),null===y||void 0===y?void 0:y.map((function(t,e){var n=null===t||void 0===t?void 0:t._id;return c.a.createElement(h,{i:t,j:e,setIsEdit:m,setAllUnit:b,setCreateUnit:j,setAllBuilding:P,CreateUnit:x,id:n})})))))))}}}]);
//# sourceMappingURL=163.532a4f95.chunk.js.map