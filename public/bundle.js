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

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAq0eSj9qWghaUmVUAgsrAnUP3Nl2fpRYE\",\n  authDomain: \"robertson-optometry.firebaseapp.com\",\n  databaseURL: \"https://robertson-optometry.firebaseio.com\",\n  projectId: \"robertson-optometry\",\n  storageBucket: \"robertson-optometry.appspot.com\",\n  messagingSenderId: \"720347680157\",\n  appId: \"1:720347680157:web:5b93c9bede03cf2d83f374\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebaseConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlLmpzPzJhZGMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBcTBlU2o5cVdnaGFVbVZVQWdzckFuVVAzTmwyZnBSWUVcIixcbiAgYXV0aERvbWFpbjogXCJyb2JlcnRzb24tb3B0b21ldHJ5LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3JvYmVydHNvbi1vcHRvbWV0cnkuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInJvYmVydHNvbi1vcHRvbWV0cnlcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJyb2JlcnRzb24tb3B0b21ldHJ5LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjcyMDM0NzY4MDE1N1wiLFxuICBhcHBJZDogXCIxOjcyMDM0NzY4MDE1Nzp3ZWI6NWI5M2M5YmVkZTAzY2YyZDgzZjM3NFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZUNvbmZpZzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _firebase = __webpack_require__(/*! ../../firebase.js */ \"./firebase.js\");\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n\n  // Initialize Firebase\n  firebase.initializeApp(_firebase2.default);\n\n  //get elements\n  var preObject = document.getElementById('object');\n  //create references\n  var dbRefObject = firebase.database().ref().child('object');\n  //sync object changes\n  dbRefObject.on('value', function (snap) {\n    preObject.innerText = JSON.stringify(snap.val(), null, 3);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9zcmMvaW5kZXguanM/MGJjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSAnLi4vLi4vZmlyZWJhc2UuanMnXG5cblxuXG4oZnVuY3Rpb24gKCkge1xuXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbiAgLy9nZXQgZWxlbWVudHNcbiAgY29uc3QgcHJlT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdCcpO1xuICAvL2NyZWF0ZSByZWZlcmVuY2VzXG4gIGNvbnN0IGRiUmVmT2JqZWN0ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnb2JqZWN0Jyk7XG4gIC8vc3luYyBvYmplY3QgY2hhbmdlc1xuICBkYlJlZk9iamVjdC5vbigndmFsdWUnLCBzbmFwID0+IHtcbiAgICBwcmVPYmplY3QuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoc25hcC52YWwoKSwgbnVsbCwgMyk7XG5cbiAgfSk7XG5cbn0oKSk7XG5cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/index.js\n");

/***/ })

/******/ });