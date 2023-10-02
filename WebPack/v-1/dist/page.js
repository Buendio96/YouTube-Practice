/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./models/page.ts":
/*!************************!*\
  !*** ./models/page.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\nclass Page {\n  constructor(title, img) {\n    this.title = title;\n    this.img = img;\n    this.date = new Date();\n    this.container = document.getElementById('container');\n  }\n  getTime() {\n    return this.date.toLocaleTimeString();\n  }\n  createContent() {\n    const isDate = this.date.toLocaleDateString();\n    const isDay = this.date.toLocaleDateString('en-US', {\n      weekday: 'long'\n    });\n    const content = \"\\n\\t\\t\\t\\t<img src=\".concat(this.img, \" class=\\\"image\\\" alt=\\\"Some picture\\\">\\n\\t\\t\\t\\t<div class=\\\"content\\\">\\n\\t\\t\\t\\t\\t<h2 class=\\\"title\\\">\").concat(this.title, \"</h2>\\n\\t\\t\\t\\t\\t<div class=\\\"box\\\">\\n\\t\\t\\t\\t\\t\\t<span class=\\\"dey\\\">\").concat(isDay, \"</span>\\n\\t\\t\\t\\t\\t\\t<span class=\\\"date\\\">\").concat(isDate, \"</span>\\n\\t\\t\\t\\t\\t\\t<span id=\\\"time\\\" class=\\\"time\\\"></span>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\n\\t\\t\\t\");\n    return content;\n  }\n  initClock() {\n    const timeEl = document.getElementById('time');\n    if (timeEl) {\n      timeEl.textContent = new Date().toLocaleTimeString();\n    }\n  }\n  render() {\n    const content = this.createContent();\n    if (this.container) {\n      this.container.insertAdjacentHTML('beforeend', content);\n    }\n    ;\n    this.initClock();\n    setInterval(() => this.initClock(), 1000);\n  }\n  init() {\n    document.addEventListener('DOMContentLoaded', () => {\n      this.render();\n    });\n  }\n}\n;\n\n//# sourceURL=webpack:///./models/page.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./models/page.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;