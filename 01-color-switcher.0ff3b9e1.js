!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(t){r=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.currentTarget.disabled=!0})),e.addEventListener("click",(function(){clearInterval(r),t.disabled=!1}));var r=null}();
//# sourceMappingURL=01-color-switcher.0ff3b9e1.js.map