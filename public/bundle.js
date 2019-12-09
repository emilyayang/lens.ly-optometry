/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// import * as firebase from 'firebase/app';\n// import firebaseConfig from '../../firebase.js'\n// import 'firebase/auth';\n\n// firebase.initializeApp(firebaseConfig);\n\n// export const auth = firebase.auth\n\n// export default firebase;\n\n\n// (function () {\n\n//   // Initialize Firebase\n//   firebase.initializeApp(firebaseConfig);\n\n//   //get elements\n//   const preObject = document.getElementById('object');\n//   //create references\n//   const dbRefObject = firebase.database().ref().child('object');\n//   //sync object changes\n//   dbRefObject.on('value', snap => {\n//     preObject.innerText = JSON.stringify(snap.val(), null, 3);\n\n//   });\n\n// }());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvaW5kZXguanM/MGJjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuLy8gaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gJy4uLy4uL2ZpcmViYXNlLmpzJ1xuLy8gaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcblxuLy8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbi8vIGV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aFxuXG4vLyBleHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcblxuXG4vLyAoZnVuY3Rpb24gKCkge1xuXG4vLyAgIC8vIEluaXRpYWxpemUgRmlyZWJhc2Vcbi8vICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbi8vICAgLy9nZXQgZWxlbWVudHNcbi8vICAgY29uc3QgcHJlT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdCcpO1xuLy8gICAvL2NyZWF0ZSByZWZlcmVuY2VzXG4vLyAgIGNvbnN0IGRiUmVmT2JqZWN0ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnb2JqZWN0Jyk7XG4vLyAgIC8vc3luYyBvYmplY3QgY2hhbmdlc1xuLy8gICBkYlJlZk9iamVjdC5vbigndmFsdWUnLCBzbmFwID0+IHtcbi8vICAgICBwcmVPYmplY3QuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoc25hcC52YWwoKSwgbnVsbCwgMyk7XG5cbi8vICAgfSk7XG5cbi8vIH0oKSk7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/index.js\n");

/***/ })

/******/ });