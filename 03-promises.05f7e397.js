!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("6JpON");function u(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t?r({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.currentTarget.elements[2].value),r=Number(n.currentTarget.elements[1].value),o=Number(n.currentTarget.elements[0].value),a=1;a<=t;a+=1){u(a,o+r*(a-1)).then((function(n){var t=n.position,r=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.position,r=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))}))}n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.05f7e397.js.map