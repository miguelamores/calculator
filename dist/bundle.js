!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("myRange"),t=document.getElementById("year"),n=document.getElementById("amount"),o=document.getElementById("amount-label"),r=document.getElementById("tax"),u=document.getElementById("tax-label"),l=document.getElementById("insurance"),a=document.getElementById("insurance-label"),c=function(e){e.className="form-group__input form-group__input--error error-label error-label__show"},i=function(e){e.className="error-label error-label__show"};t.value=e.value,e.oninput=function(){t.value=this.value};var d=document.getElementById("interest"),m=document.getElementById("interestOutput");m.value=d.value,d.oninput=function(){m.value=this.value};var f=document.getElementsByClassName("result")[0];document.getElementById("calculate").onclick=function(){window.screen.width<=600&&(f.style.animation="moveInLeft 1s ease-out",f.style.opacity=1,window.scrollBy(0,300)),""===n.value&&(c(n),i(o)),""===r.value&&(c(r),i(u)),""===l.value&&(c(l),i(a))}})}]);