!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),v=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return i;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var f=a.test(e);return f||u.test(e)?l(e.slice(2),f?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return g(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,u,l,f,c=0,s=!1,v=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){var n=e-f,i=e-c;return void 0===f||n>=t||n<0||v&&i>=a}function h(){var e,n,i,o=p();if(S(o))return O(o);l=setTimeout(h,(e=o-f,n=o-c,i=t-e,v?m(i,a-n):i))}function O(e){return(l=void 0,b&&o)?j(e):(o=r=void 0,u)}function T(){var e,n=p(),i=S(n);if(o=arguments,r=this,f=n,i){if(void 0===l)return c=e=f,l=setTimeout(h,t),s?j(e):u;if(v)return l=setTimeout(h,t),j(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=y(t)||0,g(i)&&(s=!!i.leading,a=(v="maxWait"in i)?d(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},T.flush=function(){return void 0===l?u:O(p())},T}(e,t,{leading:o,maxWait:t,trailing:r})};let b=document.querySelector(".feedback-form"),j=b.querySelector('input[name="email"]'),S=b.querySelector('textarea[name="message"]'),h="feedback-form-state",O=JSON.parse(localStorage.getItem(h));O&&(j.value=O.email||"",S.value=O.message||"");let T=t(()=>{let e={email:j.value,message:S.value};localStorage.setItem(h,JSON.stringify(e))},500);b.addEventListener("input",T),b.addEventListener("submit",e=>{e.preventDefault();let t={email:j.value,message:S.value};console.log("data",t),j.value="",S.value="",localStorage.removeItem(h)})}();
//# sourceMappingURL=03-feedback.cdd0024a.js.map
