module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/svm/Projects/tailwindc2/boilerplate/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst IndexPage = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n  className: \"break-words\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }\n}, __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, \"NextJS TS Tailwind Starter\"), __jsx(\"h1\", {\n  className: \"text-5xl pt-20 pr-20 pl-20 pb-10\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  className: \"flex flex-row justify-center items-center pb-10\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}, __jsx(\"a\", {\n  href: \"https://nextjs.org\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 11\n  }\n}, __jsx(\"img\", {\n  src: \"https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png\",\n  className: \"pr-20\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 11\n  }\n}))), __jsx(\"strong\", {\n  className: \"items-center\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 7\n  }\n}, \"NextJS \", __jsx(\"h1\", {\n  className: \"text-blue-500\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 20\n  }\n}, \"Typescript\"), \" and \", __jsx(\"h1\", {\n  className: \"text-green-500\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 70\n  }\n}, \"TailwindCSS\"), \" Starter\")), __jsx(\"div\", {\n  className: \"flex justify-center text-2xl\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }\n}, \"Edit \", __jsx(\"code\", {\n  className: \"text-md pr-2 pl-2 pb-7\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 18\n  }\n}, \"pages/index.tsx\"), \" to get started\"), __jsx(\"div\", {\n  className: \"flex justify-center gap-10 mb-10 text-2xl\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  className: \"bg-blue-200 rounded-xl p-5\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }\n}, __jsx(\"img\", {\n  className: \"pr-20\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }\n}), __jsx(\"a\", {\n  href: \"https://nextjs.org\",\n  className: \"rounded-sm\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }\n}, \"Check out \", __jsx(\"strong\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 71\n  }\n}, \"NextJS\"))), __jsx(\"div\", {\n  className: \"bg-blue-200 rounded-xl p-5\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }\n}, __jsx(\"a\", {\n  href: \"https://tailwindcss.com\",\n  className: \"rounded-sm\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 10\n  }\n}, \"Check out \", __jsx(\"strong\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 77\n  }\n}, \"TailwindCSS\")))), __jsx(\"hr\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }\n}), \"\\xA9 Copyright Sysnomid \", __jsx(\"b\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 31\n  }\n}, \"2020\"), __jsx(\"a\", {\n  href: \"https://github.com/Sysnomid\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsTUFDaEIsbUVBRUE7QUFBSyxXQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUlFO0FBQUksV0FBUyxFQUFDLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBRyxNQUFJLEVBQUMsb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNBO0FBQUssS0FBRyxFQUFDLGlGQUFUO0FBQTJGLFdBQVMsRUFBQyxPQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREEsQ0FESixDQURGLEVBTUU7QUFBUSxXQUFTLEVBQUMsY0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNhO0FBQUksV0FBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEYixXQUMrRDtBQUFJLFdBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQvRCxhQU5GLENBSkYsRUFjRTtBQUFLLFdBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ2E7QUFBTSxXQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGIsb0JBZEYsRUFpQkU7QUFBSyxXQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLFdBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQUcsTUFBSSxFQUFDLG9CQUFSO0FBQTZCLFdBQVMsRUFBQyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTlELENBRkYsQ0FERixFQUtFO0FBQUssV0FBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRztBQUFHLE1BQUksRUFBQyx5QkFBUjtBQUFrQyxXQUFTLEVBQUMsWUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbkUsQ0FESCxDQUxGLENBakJGLEVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUExQkYsOEJBMkI0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBM0I1QixFQTRCRTtBQUFHLE1BQUksRUFBQyw2QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBNUJGLENBRkEsQ0FERjs7QUFxQ2VBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW5kZXhQYWdlID0gKCkgPT4gKFxuICA8PiBcbiAgey8qRGVsZXRlIGNvbnRlbnQgaGVyZSBhbmQgYWRkIHlvdXIgb3duKi99XG4gIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWstd29yZHNcIj5cbiAgICA8dGl0bGU+XG4gICAgICAgICAgTmV4dEpTIFRTIFRhaWx3aW5kIFN0YXJ0ZXJcbiAgICA8L3RpdGxlPlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBwdC0yMCBwci0yMCBwbC0yMCBwYi0xMFwiPiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGItMTBcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Fzc2V0cy52ZXJjZWwuY29tL2ltYWdlL3VwbG9hZC92MTU4ODgwNTg1OC9yZXBvc2l0b3JpZXMvdmVyY2VsL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwicHItMjBcIj48L2ltZz5cbiAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICBOZXh0SlMgPGgxIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5UeXBlc2NyaXB0PC9oMT4gYW5kIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMFwiPlRhaWx3aW5kQ1NTPC9oMT4gU3RhcnRlclxuICAgICAgPC9zdHJvbmc+XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC0yeGxcIj5cbiAgICAgICAgICAgIEVkaXQgPGNvZGUgY2xhc3NOYW1lPVwidGV4dC1tZCBwci0yIHBsLTIgcGItN1wiPnBhZ2VzL2luZGV4LnRzeDwvY29kZT4gdG8gZ2V0IHN0YXJ0ZWRcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTEwIG1iLTEwIHRleHQtMnhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIHJvdW5kZWQteGwgcC01XCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHItMjBcIj48L2ltZz5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiIGNsYXNzTmFtZT1cInJvdW5kZWQtc21cIj5DaGVjayBvdXQgPHN0cm9uZz5OZXh0SlM8L3N0cm9uZz48L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS0yMDAgcm91bmRlZC14bCBwLTVcIj5cbiAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RhaWx3aW5kY3NzLmNvbVwiIGNsYXNzTmFtZT1cInJvdW5kZWQtc21cIj5DaGVjayBvdXQgPHN0cm9uZz5UYWlsd2luZENTUzwvc3Ryb25nPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgICZjb3B5OyBDb3B5cmlnaHQgU3lzbm9taWQgPGI+MjAyMDwvYj5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N5c25vbWlkXCI+PC9hPlxuICA8L2Rpdj5cbiAgXG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });