(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"9a8T":function(e,t,n){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=(a(n(1)),n(6)),s=a(r),i=a(n(7)),l=a(n(8)),c=a(n(9)),u=a(n(10)),f=a(n(11)),d=a(n(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(p=!0),p)return m=(0,f.default)(m,b),(0,u.default)(m,b.once),m},x=function(){m=(0,d.default)(),h()};e.exports={init:function(e){b=o(b,e),m=(0,d.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()}(b.disable)||t?void m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})):(b.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?h(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){h(!0)})):document.addEventListener(b.startEvent,(function(){h(!0)})),window.addEventListener("resize",(0,i.default)(h,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,i.default)(h,b.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,u.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||l.default.ready("[data-aos]",x),m)},refresh:h,refreshHard:x}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=f,a=d;return f=d=void 0,x=t,p=e.apply(a,n)}function s(e){var n=e-h;return void 0===h||n>=t||n<0||N&&e-x>=m}function l(){var e=w();return s(e)?c(e):void(b=setTimeout(l,function(e){var n=t-(e-h);return N?g(n,m-(e-x)):n}(e)))}function c(e){return b=void 0,k&&f?o(e):(f=d=void 0,p)}function u(){var e=w(),n=s(e);if(f=arguments,d=this,h=e,n){if(void 0===b)return function(e){return x=e,b=setTimeout(l,t),v?o(e):p}(h);if(N)return b=setTimeout(l,t),o(h)}return void 0===b&&(b=setTimeout(l,t)),p}var f,d,m,p,b,h,x=0,v=!1,N=!1,k=!0;if("function"!=typeof e)throw new TypeError(i);return t=r(t)||0,a(n)&&(v=!!n.leading,m=(N="maxWait"in n)?y(r(n.maxWait)||0,t):m,k="trailing"in n?!!n.trailing:k),u.cancel=function(){void 0!==b&&clearTimeout(b),x=0,f=h=d=b=void 0},u.flush=function(){return void 0===b?p:c(w())},u}function a(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||function(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}(e)&&v.call(e)==c}function r(e){if("number"==typeof e)return e;if(o(e))return l;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=d.test(e);return n||m.test(e)?p(e.slice(2),n?2:8):f.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="Expected a function",l=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,b="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,x=b||h||Function("return this")(),v=Object.prototype.toString,y=Math.max,g=Math.min,w=function(){return x.Date.now()};e.exports=function(e,t,o){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError(i);return a(o)&&(r="leading"in o?!!o.leading:r,s="trailing"in o?!!o.trailing:s),n(e,t,{leading:r,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t="undefined"==typeof e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function a(e){return"symbol"==("undefined"==typeof e?"undefined":r(e))||function(e){return!!e&&"object"==("undefined"==typeof e?"undefined":r(e))}(e)&&x.call(e)==l}function o(e){if("number"==typeof e)return e;if(a(e))return i;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var o=f.test(e);return o||d.test(e)?m(e.slice(2),o?2:8):u.test(e)?i:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",i=NaN,l="[object Symbol]",c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt,p="object"==("undefined"==typeof t?"undefined":r(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,h=p||b||Function("return this")(),x=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return h.Date.now()};e.exports=function(e,t,a){function r(t){var n=f,a=d;return f=d=void 0,x=t,p=e.apply(a,n)}function i(e){var n=e-h;return void 0===h||n>=t||n<0||N&&e-x>=m}function l(){var e=g();return i(e)?c(e):void(b=setTimeout(l,function(e){var n=t-(e-h);return N?y(n,m-(e-x)):n}(e)))}function c(e){return b=void 0,k&&f?r(e):(f=d=void 0,p)}function u(){var e=g(),n=i(e);if(f=arguments,d=this,h=e,n){if(void 0===b)return function(e){return x=e,b=setTimeout(l,t),w?r(e):p}(h);if(N)return b=setTimeout(l,t),r(h)}return void 0===b&&(b=setTimeout(l,t)),p}var f,d,m,p,b,h,x=0,w=!1,N=!1,k=!0;if("function"!=typeof e)throw new TypeError(s);return t=o(t)||0,n(a)&&(w=!!a.leading,m=(N="maxWait"in a)?v(o(a.maxWait)||0,t):m,k="trailing"in a?!!a.trailing:k),u.cancel=function(){void 0!==b&&clearTimeout(b),x=0,f=h=d=b=void 0},u.flush=function(){return void 0===b?p:c(g())},u}}).call(t,function(){return this}())},function(e,t){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1){if((a=t[n]).dataset&&a.dataset.aos)return!0;if(a.children&&e(a.children))return!0}return!1}(t.concat(n)))return o()}))}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var r=window.document,s=new(n())(a);o=t,s.observe(r.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"phone",value:function(){var e=n();return!(!o.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!s.test(e)&&!i.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,o){!function(e,t,n){var a=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof a&&("false"===a||!n&&"true"!==a)&&e.node.classList.remove("aos-animate")}(e,a+n,t)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(12));t.default=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(13));t.default=function(e,t){var n=0,o=0,r=window.innerHeight,s={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(o=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(e=document.querySelectorAll(s.anchor)[0]),n=(0,a.default)(e).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return s.anchorPlacement||s.offset||isNaN(t)||(o=t),n+o}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))}}])},QeBL:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function i(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"default",(function(){return q}));var c=n("9a8T"),u=n.n(c),f=n("q1tI"),d=n.n(f),m=d.a.createElement;function p(){return m(d.a.Fragment,null,m("nav",{id:"header",className:"w-full z-30 top-0 text-white py-1 lg:py-6"},m("div",{className:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"},m("div",{className:"pl-4 flex items-center"},m("a",{className:"text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl",href:"#"},"tsfresh")))))}var b=d.a.createElement;function h(){return b("div",{className:"container mx-auto"},b("div",{className:"text-center px-3 lg:px-0"},b("h1",{className:"my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"},"Extract Features on Time Series Easily"),b("p",{className:"leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"},"Automatically extract hundreds of relevant features to solve your time series problem with ease")),b("div",{className:"flex items-center w-full mx-auto content-end"},b("div",{className:"browser-mockup flex flex-1 m-6 md:px-0 md:m-12 w-1/2 rounded shadow-xl"},b("div",{className:"bg-black w-full h-full"},b("p",{className:"text-white font-mono overflow-x-auto text-base p-10"},b("span",{className:"whitespace-no-wrap"},b("span",{className:"text-green-500 font-bold"},"from")," ",b("span",{className:"text-blue-500 font-bold"},"tsfresh")," ",b("span",{className:"text-green-500 font-bold"},"import")," ","extract_relevant_features"),b("br",null),b("span",{className:"whitespace-no-wrap"},b("span",{className:"text-green-500 font-bold"},"from")," ",b("span",{className:"text-blue-500 font-bold"},"tsfresh.examples.robot_execution_failures")," ",b("span",{className:"text-green-500 font-bold"},"import")," ","load_robot_execution_failures")," ",b("br",null),b("br",null),b("span",{className:"whitespace-no-wrap"},"timeseries, y = load_robot_execution_failures()"),b("br",null),b("br",null),b("span",{className:"whitespace-no-wrap"},"features = extract_relevant_features(timeseries, y, column_id=",b("span",{className:"text-blue-600"},'"id"'),", column_sort=",b("span",{className:"text-blue-600"},'"time"'),")"),b("br",null))))))}var x=d.a.createElement;function v(e){var t=e.title,n=e.children;return x("div",{"data-aos":"fade-up",className:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},x("div",{className:"flex-1 overflow-hidden"},x("div",{className:"flex flex-wrap"},x("p",{className:"w-full mb-2 font-bold text-xl text-gray-800 px-6"},t),x("p",{className:"text-gray-600 text-base px-6 mb-5"},n))))}var y=d.a.createElement;function g(){return y("div",{className:"w-full mb-4"},y("div",{className:"h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"}))}var w=d.a.createElement;function N(){return w("section",{className:"bg-white border-b py-12 "},w("div",{className:"container mx-auto flex flex-wrap items-center justify-between pb-12"},w("h2",{className:"w-full my-2 text-3xl font-black leading-tight text-center text-gray-800 lg:mt-8"},"Use Cases"),w(g,null),w(v,{title:"Classification"},"Use the extracted relevant features to train your usual ML model to distinguish between different time series classes."),w(v,{title:"Forecasting"},"No need for complicated methods! With ",w("code",null,"tsfresh")," your time series forecasting problem becomes a usual regression problem."),w(v,{title:"Outlier Detection"},"Detect interesting patterns and outliers in your time series data by clustering the extracted features or training an ML method on them.")),w("p",{className:"text-lg p-3 text-center"},w("code",null,"tsfresh")," is the basis for your next time series project!"))}var k=d.a.createElement;function j(e){var t=e.children;return k("p",{"data-aos":"zoom-in",className:"w-full md:w-1/3 p-5 font-bold text-white text-xl"},t)}function _(){return k("section",{className:"bg-gray-700 p-5 w-full mx-auto text-center"},k("div",{className:"container mx-auto flex flex-wrap items-center justify-between"},k(j,null,k("a",{className:"hover:underline",href:"https://scholar.google.com/scholar?cites=365611925060572663&as_sdt=2005&sciodt=0,5&hl=de"},"> 150 paper citations")),k(j,null,k("a",{className:"hover:underline",href:"https://github.com/blue-yonder/tsfresh"},"> 4k stars on github")),k(j,null,k("a",{className:"hover:underline",href:"https://pepy.tech/project/tsfresh"},"> 2M downloads"))))}var O=d.a.createElement;function E(){return O(d.a.Fragment,null,O("section",{className:"bg-gray-100 border-b py-8"},O("div",{className:"container max-w-5xl mx-auto m-8"},O("h2",{className:"w-full my-2 text-5xl font-black leading-tight text-center text-gray-800"},"Extract ",O("span",{className:"text-tsfresh-green"},"Relevant")," ","Features Automatically"),O("div",{className:"w-full mb-4"},O("div",{className:"h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"})),O("div",{className:"flex flex-wrap items-center"},O("div",{className:"w-full sm:w-1/2 p-6"},O("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3"},"Do not waste time on feature engineering"),O("p",{className:"text-gray-600 mb-8"},"tsfresh extracts hundreds of field-tested features on your time series data in seconds, so you can spend more time on using these features.")),O("div",{"data-aos":"fade-up",className:"w-full sm:w-1/2 p-6"},O("img",{className:"w-full",src:"/tsfresh-website-frontend/images/feature_extraction.svg"}))),O("div",{className:"flex flex-wrap flex-col-reverse sm:flex-row items-center"},O("div",{"data-aos":"fade-down",className:"w-full sm:w-1/2 p-6"},O("img",{className:"w-full",src:"/tsfresh-website-frontend/images/feature_selection.svg"})),O("div",{className:"w-full sm:w-1/2 p-6 mt-6"},O("div",{className:"align-middle"},O("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3"},"Use only, what is relevant for you"),O("p",{className:"text-gray-600 mb-8"},"Using statistical hypothesis tests, tsfresh knows which of the features are relevant to solve your problem, so it can tailor down its large feature library for your use case.")))))))}var S=d.a.createElement;function T(){return S("section",{className:"bg-white border-b py-8"},S("div",{className:"container mx-auto flex flex-wrap pt-4 pb-12"},S("h2",{className:"w-full my-2 text-4xl font-black leading-tight text-center text-gray-800"},"Getting Started"),S(g,null),S("div",{className:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},S("div",{className:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"},S("a",{href:"https://tsfresh.readthedocs.io/en/latest/text/quick_start.html",className:"flex flex-wrap no-underline hover:no-underline"},S("p",{className:"w-full text-gray-600 text-xs md:text-sm px-6 mt-6"},"FEATURE EXTRACTION"),S("div",{className:"w-full mb-2 font-bold text-xl text-gray-800 px-6"},"Learn how to extract features"),S("p",{className:"text-gray-600 text-base px-6 mb-5"},"Follow our QuickStart tutorial and set up your first feature extraction project on time series."))),S("div",{className:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"},S("div",{className:"flex items-center justify-center"},S("a",{href:"https://tsfresh.readthedocs.io/en/latest/text/quick_start.html",className:"mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"},"Tutorial")))),S("div",{className:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},S("div",{className:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"},S("a",{href:"https://tsfresh.readthedocs.io/en/latest/",className:"flex flex-wrap no-underline hover:no-underline"},S("p",{className:"w-full text-gray-600 text-xs md:text-sm px-6 mt-6"},"FEATURE SELECTION"),S("div",{className:"w-full mb-2 font-bold text-xl text-gray-800 px-6"},"Understand how we select relevant features"),S("p",{className:"text-gray-600 text-base px-6 mb-5"},"Read through the documentation on how the feature selection and all the other algorithms work."))),S("div",{className:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"},S("div",{className:"flex items-center justify-center"},S("a",{href:"https://tsfresh.readthedocs.io/en/latest/",className:"mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"},"Documentation")))),S("div",{className:"w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"},S("div",{className:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"},S("a",{href:"https://nils-braun.github.io/tsfresh-on-cluster-1/",className:"flex flex-wrap no-underline hover:no-underline"},S("p",{className:"w-full text-gray-600 text-xs md:text-sm px-6 mt-6"},"LARGE DATA"),S("div",{className:"w-full mb-2 font-bold text-xl text-gray-800 px-6"},"Use tsfresh on large data samples"),S("p",{className:" text-gray-600 text-base px-6 mb-5"},"Find out, how to apply tsfresh on large data samples using multiprocessing, dask or spark."))),S("div",{className:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"},S("div",{className:"flex items-center justify-center"},S("a",{href:"https://nils-braun.github.io/tsfresh-on-cluster-1/",className:"mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"},"Think big"))))))}var M=d.a.createElement;function A(){return M(d.a.Fragment,null,M("section",{className:"gradient w-full mx-auto text-center pt-6 pb-12"},M("h2",{className:"w-full my-2 text-4xl font-black leading-tight text-center text-white"},"Extract Features Now"),M("div",{className:"w-full mb-4"},M("div",{className:"h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"})),M("h3",{className:"my-4 text-2xl font-bold"},"Install tsfresh via ",M("code",null,"pip")," or ",M("code",null,"conda"),"."),M("div",{"data-aos":"zoom-out",className:"mx-auto w-1/2 bg-black rounded my-6 py-4 px-8 shadow-lg"},M("p",{className:"text-left text-gray-200 font-mono "},M("span",{className:"font-bold text-orange-700"},"$ "),"pip install -U tsfresh",M("br",null),"# or ",M("br",null),M("span",{className:"font-bold text-orange-700"},"$ "),"conda install -c conda-forge tsfresh"))))}var z=d.a.createElement;function D(){return z(d.a.Fragment,null,z("footer",{className:"bg-white"},z("div",{className:"container mx-auto mt-8 px-8"},z("div",{className:"w-full flex flex-col md:flex-row py-6"},z("div",{className:"flex-1 mb-6"},z("a",{href:"#",className:" no-underline hover:no-underline "},z("span",{className:"text-black font-bold text-2xl lg:text-4xl"},"ts"),z("span",{className:"text-tsfresh-green font-bold text-2xl lg:text-4xl"},"fresh"))),z("div",{className:"flex-1"},z("p",{className:"uppercase font-extrabold text-gray-500 md:mb-6"},"GitHub"),z("ul",{className:"list-reset mb-6"},z("li",{className:"mt-2 inline-block mr-2 md:block md:mr-0"},z("a",{href:"https://github.com/blue-yonder/tsfresh/blob/main/README.md",className:"font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"},"Readme")),z("li",{className:"mt-2 inline-block mr-2 md:block md:mr-0"},z("a",{href:"https://github.com/blue-yonder/tsfresh",className:"font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"},"Code")),z("li",{className:"mt-2 inline-block mr-2 md:block md:mr-0"},z("a",{href:"https://github.com/blue-yonder/tsfresh/pulls",className:"font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"},"Contribute")))),z("div",{className:"flex-1"},z("p",{className:"uppercase font-extrabold text-gray-500 md:mb-6"},"Docs"),z("ul",{className:"list-reset mb-6"},z("li",{className:"mt-2 inline-block mr-2 md:block md:mr-0"},z("a",{href:"https://tsfresh.readthedocs.io/en/stable/",className:"font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"},"Stable")),z("li",{className:"mt-2 inline-block mr-2 md:block md:mr-0"},z("a",{href:"https://tsfresh.readthedocs.io/en/latest/",className:"font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"},"Latest")))),z("div",{className:"flex-1"},z("p",{className:"uppercase font-extrabold text-gray-500 md:mb-6"},"Issues"),z("ul",{className:"list-reset mb-6"},z("li",{className:"mt-2 inline-block mr-2 md:block md:mr-0"},z("a",{href:"#",className:"font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"},"List")),z("li",{className:"mt-2 inline-block mr-2 md:block md:mr-0"},z("a",{href:"#",className:"font-light no-underline hover:underline text-gray-800 hover:text-tsfresh-green"},"Create"))))),z("div",{className:"w-full text-center text-gray-700 text-xs m-4"},z("p",null,"Created by the"," ",z("a",{className:"underline",href:"mailto:nilslennartbraun@gmail.com"},"tsfresh authors"),". This work is licensed under"," ",z("a",{className:"underline",href:"https://creativecommons.org/licenses/by-sa/4.0/"},"CC BY-SA 4.0"),".")))))}var L=d.a.createElement;function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i(this,n)}}var q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(i,e);var t,n,r,s=P(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),s.apply(this,arguments)}return t=i,(n=[{key:"componentDidMount",value:function(){u.a.init({duration:750})}},{key:"render",value:function(){return L("div",{className:"gradient leading-relaxed tracking-wide flex flex-col"},L(p,null),L(h,null),L(N,null),L(_,null),L(E,null),L(T,null),L(A,null),L(D,null))}}])&&a(t.prototype,n),r&&a(t,r),i}(d.a.Component)},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports}},[["/EDR",0,1]]]);