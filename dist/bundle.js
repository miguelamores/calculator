!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("myRange"),t=document.getElementById("year"),n=document.getElementById("calculate"),o=document.getElementById("amount"),r=document.getElementById("amount-label"),u=document.getElementById("tax"),l=document.getElementById("tax-label"),a=document.getElementById("insurance"),c=document.getElementById("insurance-label"),i=function(e){e.className="form-group__input form-group__input--error"},d=function(e){e.className="error-label error-label__show"};t.value=e.value,e.oninput=function(){t.value=this.value};var m=document.getElementById("interest"),s=document.getElementById("interestOutput");s.value=m.value,m.oninput=function(){s.value=this.value};var f=document.getElementsByClassName("result")[0];n.onclick=function(){var e;window.screen.width<=600&&(f.style.animation="moveInLeft 1s ease-out",f.style.opacity=1,window.scrollBy(0,300)),e=!1,""===o.value?(i(o),d(r),e=!0):(o.className="form-group__input",r.className="error-label__hide",e=!1),""===u.value?(i(u),d(l),e=!0):(u.className="form-group__input",l.className="error-label__hide",e=!1),""===a.value?(i(a),d(c),e=!0):(a.className="form-group__input",c.className="error-label__hide",e=!1),e||p()};var p=function(){var e=s.value/100/12*o.value/(1-Math.pow(1+s.value/100/12,12*-t.value));document.getElementById("interestLabel").textContent="$ ".concat(e.toFixed(2))}})}]);