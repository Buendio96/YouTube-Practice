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

/***/ "./models/page.js":
/*!************************!*\
  !*** ./models/page.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n\r\nclass Page {\r\n\tconstructor(title, img) {\r\n\t\tthis.title = title;\r\n\t\tthis.img = img;\r\n\t\tthis.date = new Date();\r\n\t\tthis.container = document.getElementById('container');\r\n\t};\r\n\r\n\tcreateContent() {\r\n\t\tconst title = this.title;\r\n\t\tconst isDate = this.date.toLocaleDateString();\r\n\t\tconst isDay = this.date.toLocaleDateString(undefined, { weekday: 'long' });\r\n\t\tconst content = `\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<h2>${title}</h2>\r\n\t\t\t\t<div class=\"box\">\r\n\t\t\t\t\t<span class=\"date\">${isDate}</span>\r\n\t\t\t\t\t<span class=\"dey\">${isDay}</span>\r\n\t\t\t\t\t<span class=\"time\">${this.getTime()}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t`\r\n\t\treturn content\r\n\t};\r\n\tgetTime() {\r\n\t\tsetInterval(() => {\r\n\t\t\tconst isTime = new Date().toLocaleTimeString();\r\n\t\t\tconst timeElement = document.querySelector('.time');\r\n\t\t\tif (timeElement) {\r\n\t\t\t\ttimeElement.textContent = isTime;\r\n\t\t\t}\r\n\t\t}, 1000);\r\n\t};\r\n\trender() {\r\n\t\tconst image = this.img;\r\n\t\tconst content = this.createContent();\r\n\t\tconst imageEl = document.createElement('img');\r\n\r\n\t\timageEl.classList.add('image')\r\n\t\timageEl.src = image;\r\n\t\timageEl.alt = 'Some image';\r\n\r\n\t\tthis.container.appendChild(imageEl);\r\n\t\tthis.container.insertAdjacentHTML('beforeend', content);\r\n\r\n\t};\r\n\r\n\tinit() {\r\n\t\tdocument.addEventListener('DOMContentLoaded', () => {\r\n\t\t\tthis.render();\r\n\t\t});\r\n\t}\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./models/page.js?");

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
/******/ 	__webpack_modules__["./models/page.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;