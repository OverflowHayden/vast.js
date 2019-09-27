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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot":
/*!**********************************************************************!*\
  !*** ./node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.eot?a32fa1f27abbfa96ff2f79e1ade723d5";

/***/ }),

/***/ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot?v=4.4.95":
/*!*******************************************************************************!*\
  !*** ./node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot?v=4.4.95 ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.eot?a32fa1f27abbfa96ff2f79e1ade723d5";

/***/ }),

/***/ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.ttf?v=4.4.95":
/*!*******************************************************************************!*\
  !*** ./node_modules/@mdi/font/fonts/materialdesignicons-webfont.ttf?v=4.4.95 ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.ttf?3ac50b5b36eb2f11b000dce1792d0bb0";

/***/ }),

/***/ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff2?v=4.4.95":
/*!*********************************************************************************!*\
  !*** ./node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff2?v=4.4.95 ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.woff2?7ec5dab7e7ff250971d2ff50379778dc";

/***/ }),

/***/ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff?v=4.4.95":
/*!********************************************************************************!*\
  !*** ./node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff?v=4.4.95 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.woff?a0d13d16cc2f3647680d9f1ff003f58b";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/appbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/appbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_components_appbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/components/appbar.scss */ "./src/scss/components/appbar.scss");
/* harmony import */ var _scss_components_appbar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_components_appbar_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var project_fast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! project-fast */ "./node_modules/project-fast/src/assets/js/app.js");
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fast-appbar',
  mounted: function mounted() {
    project_fast__WEBPACK_IMPORTED_MODULE_1__["default"].Appbar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/base.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/base.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_components_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/components/base.scss */ "./src/scss/components/base.scss");
/* harmony import */ var _scss_components_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_components_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_components_mdi_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/components/mdi.scss */ "./src/scss/components/mdi.scss");
/* harmony import */ var _scss_components_mdi_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_mdi_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/button.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/button.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_components_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/components/button.scss */ "./src/scss/components/button.scss");
/* harmony import */ var _scss_components_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_components_button_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fast-button',
  props: ['href', 'type', 'icon'],
  computed: {
    typeClass: function typeClass() {
      if (typeof this.type === 'string') {
        return 'button--' + this.type;
      }

      if (_typeof(this.type) === 'object') {
        return Object.entries(this.type).filter(function (type) {
          return type[1];
        }).map(function (type) {
          return 'button--' + type[0];
        }).join(' ');
      }

      return this.type;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/checkbox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/checkbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_components_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/components/checkbox.scss */ "./src/scss/components/checkbox.scss");
/* harmony import */ var _scss_components_checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_components_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fast-checkbox',
  props: {
    label: '',
    name: '',
    id: '',
    disabled: false
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/drawer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/drawer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_components_drawer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/components/drawer.scss */ "./src/scss/components/drawer.scss");
/* harmony import */ var _scss_components_drawer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_components_drawer_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var project_fast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! project-fast */ "./node_modules/project-fast/src/assets/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fast-drawer',
  mounted: function mounted() {
    project_fast__WEBPACK_IMPORTED_MODULE_1__["default"].Drawer();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/layout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer */ "./src/js/components/drawer.vue");
/* harmony import */ var _appbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appbar */ "./src/js/components/appbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fast-layout',
  components: {
    FastAppbar: _appbar__WEBPACK_IMPORTED_MODULE_1__["default"],
    FastDrawer: _drawer__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_components_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/components/main.scss */ "./src/scss/components/main.scss");
/* harmony import */ var _scss_components_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_components_main_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'fast-main'
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/appbar.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/scss/components/appbar.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ---------------------------------------------- //\n * Colors\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Style settings\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Font\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Neat\n/* ---------------------------------------------- */\n.menu {\n  display: inline-block;\n  position: relative;\n}\n.menu__list {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: inline-block;\n  list-style: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: auto;\n  margin: 0;\n  padding: 8px 0;\n  min-width: 170px;\n  max-width: calc(100vw - 32px);\n  max-height: 0;\n  white-space: nowrap;\n  opacity: 0;\n  overflow-x: hidden;\n  will-change: transform, opacity;\n  transform-origin: top left;\n  transform: scale(0.8);\n  overflow-y: hidden;\n  transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), z-index 0s linear 0.12s, max-height 0s linear 0.22s;\n  z-index: -1;\n}\n.menu__list.menu--open {\n  display: inline-block;\n  opacity: 1;\n  transform: scale(1);\n  overflow-y: auto;\n  max-height: calc(100vh - 32px);\n  transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);\n  z-index: 4;\n}\n.menu__list-item {\n  font-size: 1.6rem;\n  font-weight: 400;\n  display: flex;\n  color: rgba(0, 0, 0, 0.87);\n  height: 48px;\n  align-items: center;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n}\n.menu__list-item a, .menu__list-item span {\n  position: relative;\n  overflow: hidden;\n  color: inherit;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 0 16px;\n  align-items: center;\n}\n.menu__list-item a:active, .menu__list-item a:focus, .menu__list-item span:active, .menu__list-item span:focus {\n  outline: none;\n}\n.menu__list-item a:after, .menu__list-item span:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n  background-color: #fff;\n}\n.menu__list-item a:active:after, .menu__list-item span:active:after {\n  transform: scale(0, 0);\n  opacity: 0.2;\n  transition: 0s;\n}\n.menu__list-item a:hover, .menu__list-item span:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.menu__list-item a:active, .menu__list-item a:focus, .menu__list-item span:active, .menu__list-item span:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n.menu__list-item form {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.menu__list-item button {\n  appearance: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  color: inherit;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 0 16px;\n  align-items: center;\n}\n.menu__list-item button:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.menu__list-divider {\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  height: 0;\n  margin: 0;\n}\n\n.app-bar {\n  background: #F37748;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 12px;\n  height: 62px;\n  will-change: top;\n  z-index: 19;\n}\n.app-bar--prominent {\n  height: 128px;\n  align-items: flex-start;\n}\n.app-bar--prominent .app-bar__title {\n  align-self: flex-end;\n}\n.app-bar--dense {\n  height: 54px;\n  padding: 2px 4px;\n}\n.app-bar__nav-toggle {\n  position: relative;\n  overflow: hidden;\n  background: #F37748;\n  border: 2px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  color: #fff;\n  display: inline-block;\n  font-size: 1.6rem;\n  font-weight: 600;\n  line-height: 1.6rem;\n  padding: 12px 22px 11px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  transition: background 0.2s ease;\n  text-transform: uppercase;\n  vertical-align: middle;\n  background: none;\n  border: 2px solid transparent;\n  box-shadow: none;\n  color: #F37748;\n  padding: 8px;\n  border-radius: 50%;\n  font-size: 2.4rem;\n  color: #fff;\n  padding: 12px 8px;\n}\n.app-bar__nav-toggle:active, .app-bar__nav-toggle:focus {\n  outline: none;\n}\n.app-bar__nav-toggle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n  background-color: #fff;\n}\n.app-bar__nav-toggle:active:after {\n  transform: scale(0, 0);\n  opacity: 0.2;\n  transition: 0s;\n}\n.app-bar__nav-toggle .fa, .app-bar__nav-toggle .mdi {\n  margin-left: -4px;\n  margin-right: 14px;\n}\n.app-bar__nav-toggle:hover {\n  background: #f26935;\n  color: #fff;\n}\n.app-bar__nav-toggle:hover {\n  background: whitesmoke;\n  color: #F37748;\n}\n.app-bar__nav-toggle .fa, .app-bar__nav-toggle .mdi {\n  margin: 0;\n}\n.app-bar__nav-toggle:hover {\n  background: #f26935;\n  color: #fff;\n}\n.app-bar__title {\n  font-size: 2rem;\n  font-weight: 500;\n  line-height: 3.2rem;\n  letter-spacing: 0.025rem;\n  margin-left: 20px;\n}\n.app-bar__actions {\n  margin-left: auto;\n}\n.app-bar__actions form {\n  display: inline-block;\n}\n.app-bar .button {\n  color: #fff;\n  padding: 12px 8px;\n}\n.app-bar .button.button--icon {\n  border-radius: 50%;\n}\n.app-bar .button .mdi {\n  font-size: 2.4rem;\n  line-height: 1.6rem;\n}\n.app-bar .button:hover {\n  background: #f26935;\n  color: #fff;\n}\n.app-bar .menu__list {\n  left: auto;\n  right: 0;\n  transform-origin: top right;\n}\n\n.with-app-bar {\n  padding-top: 62px;\n}\n.with-app-bar--prominent {\n  padding-top: 128px;\n}\n.with-app-bar--dense {\n  padding-top: 54px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/base.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/scss/components/base.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nselect {\n  word-wrap: normal;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=date],\ninput[type=time],\ninput[type=datetime-local],\ninput[type=month] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n/* ---------------------------------------------- //\n * Colors\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Style settings\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Font\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Neat\n/* ---------------------------------------------- */\nhtml {\n  font-size: 62.5%;\n  overflow-x: hidden;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.6rem;\n  line-height: 1.4em;\n  letter-spacing: 0.05rem;\n  overflow-x: hidden;\n}\n\n:focus, :active {\n  outline: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  line-height: 140%;\n  font-weight: 400;\n}\n\nh1 {\n  font-size: 4.2rem;\n}\n\nh2 {\n  font-size: 3.4rem;\n}\n\nh3 {\n  font-size: 2.8rem;\n}\n\nh4 {\n  font-size: 2.2rem;\n}\n\nh5 {\n  font-size: 1.8rem;\n  font-weight: 500;\n}\n\nh6 {\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: none;\n}\n\nhr {\n  background: #999999;\n  border: none;\n  width: 100%;\n  height: 1px;\n  margin: 30px 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/button.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/scss/components/button.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ---------------------------------------------- //\n * Colors\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Style settings\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Font\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Neat\n/* ---------------------------------------------- */\n.button {\n  position: relative;\n  overflow: hidden;\n  background: #F37748;\n  border: 2px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  color: #fff;\n  display: inline-block;\n  font-size: 1.6rem;\n  font-weight: 500;\n  line-height: 1.6rem;\n  letter-spacing: 0.125rem;\n  padding: 12px 22px 11px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  transition: background 0.2s ease;\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.button:active, .button:focus {\n  outline: none;\n}\n.button:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n  background-color: #fff;\n}\n.button:active:after {\n  transform: scale(0, 0);\n  opacity: 0.2;\n  transition: 0s;\n}\n.button .fa, .button .mdi {\n  margin-left: -4px;\n  margin-right: 14px;\n}\n.button:hover {\n  background: #f26935;\n  color: #fff;\n}\n.button--alt {\n  background: none;\n  border: 2px solid #F37748;\n  box-shadow: none;\n  color: #F37748;\n}\n.button--alt:hover {\n  background: whitesmoke;\n  color: #F37748;\n}\n.button--text {\n  background: none;\n  border: 2px solid transparent;\n  box-shadow: none;\n  color: #F37748;\n}\n.button--text:hover {\n  background: whitesmoke;\n  color: #F37748;\n}\n.button--compact {\n  padding: 8px 16px 7px;\n  font-size: 80%;\n}\n.button--icon {\n  padding: 8px;\n}\n.button--icon .fa, .button--icon .mdi {\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/checkbox.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/scss/components/checkbox.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ---------------------------------------------- //\n * Colors\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Style settings\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Font\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Neat\n/* ---------------------------------------------- */\n.checkbox {\n  margin: 0 0 15px;\n}\n.checkbox::selection {\n  background: transparent;\n}\n.checkbox__input {\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #757575;\n  border-radius: 2px;\n  text-indent: -999em;\n  position: relative;\n  transition: border 0.2s ease, background 0.2s ease;\n}\n.checkbox__input:hover {\n  background: rgba(0, 0, 0, 0.06);\n}\n.checkbox__input:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #757575 20%, transparent 20.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n  background-color: #fff;\n}\n.checkbox__input:active:after {\n  transform: scale(0, 0);\n  opacity: 0.2;\n  transition: 0s;\n}\n.checkbox__input::selection {\n  background: transparent;\n}\n.checkbox__label {\n  cursor: pointer;\n  margin-left: 12px;\n  margin-bottom: 0;\n}\n.checkbox__label::selection {\n  background: transparent;\n}\n.checkbox input[type=checkbox] {\n  visibility: hidden;\n  position: absolute;\n}\n.checkbox input[type=checkbox]:checked + .checkbox__input {\n  background: #F37748;\n  border-color: #F37748;\n}\n.checkbox input[type=checkbox]:checked + .checkbox__input:before {\n  content: \"\";\n  position: absolute;\n  top: 6px;\n  left: 1px;\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(45deg);\n  transform-origin: 0 100%;\n  animation: checkbox-check 0.125s 0.25s cubic-bezier(0.4, 0, 0.23, 1) forwards;\n}\n.checkbox input[type=checkbox]:checked + .checkbox__input:after {\n  background-image: radial-gradient(circle, #F37748 20%, transparent 20.01%);\n}\n.checkbox input[type=checkbox]:indeterminate + .checkbox__input {\n  background: #F37748;\n  border-color: #F37748;\n}\n.checkbox input[type=checkbox]:indeterminate + .checkbox__input:before {\n  content: \"\";\n  position: absolute;\n  top: 7px;\n  left: 2px;\n  border-bottom: 2px solid transparent;\n  animation: checkbox-indeterminate 0.125s 0.25s cubic-bezier(0.4, 0, 0.23, 1) forwards;\n}\n.checkbox input[type=checkbox]:indeterminate + .checkbox__input:after {\n  background-image: radial-gradient(circle, #F37748 20%, transparent 20.01%);\n}\n.checkbox input[type=checkbox]:disabled + .checkbox__input {\n  border-color: #757575;\n  opacity: 0.7;\n}\n.checkbox input[type=checkbox]:disabled + .checkbox__input + .checkbox__label {\n  opacity: 0.7;\n}\n.checkbox input[type=checkbox]:disabled:checked + .checkbox__input {\n  background: #757575;\n}\n\n@keyframes checkbox-check {\n  0% {\n    width: 0;\n    height: 0;\n    border-color: #fff;\n    transform: translate3d(0, 0, 0) rotate(45deg);\n  }\n  33% {\n    width: 7px;\n    height: 0;\n    transform: translate3d(0, 0, 0) rotate(45deg);\n  }\n  100% {\n    width: 7px;\n    height: 12px;\n    border-color: #fff;\n    transform: translate3d(0, -10px, 0) rotate(45deg);\n  }\n}\n@keyframes checkbox-indeterminate {\n  0% {\n    width: 0;\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    width: 12px;\n    transform: translate3d(0, 0, 0);\n    border-color: #fff;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/drawer.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/scss/components/drawer.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ---------------------------------------------- //\n * Colors\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Style settings\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Font\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Neat\n/* ---------------------------------------------- */\n.drawer {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  width: 240px;\n}\n.drawer-scroll-lock {\n  overflow: hidden;\n}\n.drawer--temporary, .drawer--persistent {\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: calc(100% - 64px);\n  max-width: 320px;\n  height: 100%;\n  opacity: 0.0001;\n  transform: translateX(-100%);\n  will-change: transform;\n  z-index: 21;\n}\n.drawer--temporary .drawer__drawer, .drawer--persistent .drawer__drawer {\n  width: 100%;\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.drawer--temporary .drawer__label, .drawer--persistent .drawer__label {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 16px;\n  right: -16px;\n}\n.drawer--temporary .drawer__antiSelect, .drawer--persistent .drawer__antiSelect {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  visibility: hidden;\n  z-index: 22;\n}\n.drawer--persistent {\n  transition: transform 0.2s ease, opacity 0s ease 0.2s;\n}\n.drawer--persistent .drawer__drawer {\n  box-shadow: none;\n  border-right: 1px solid #e0e0e0;\n}\n.drawer--persistent.drawer--open {\n  opacity: 1;\n  transform: translateX(0);\n  transition: transform 0.25s ease;\n  will-change: transform;\n}\n.drawer--permanent {\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: calc(100% - 64px);\n  max-width: 320px;\n  height: 100%;\n  opacity: 1;\n  transform: translateX(0);\n  z-index: 21;\n}\n.drawer--permanent .drawer__drawer {\n  width: 100%;\n  border-right: 1px solid #e0e0e0;\n}\n.drawer--permanent + .main {\n  margin-left: 320px;\n}\n.drawer--permanent + .main .app-bar {\n  left: 320px;\n}\n.drawer--compact {\n  max-width: 240px;\n}\n.drawer__bg {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n  opacity: 0.001;\n  transform: translateZ(0);\n  visibility: hidden;\n}\n.drawer__noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.drawer__drawer {\n  background: #fff;\n  height: 100%;\n}\n.drawer__drawer.drawer--dark {\n  background: #696969;\n  color: #fff;\n}\n.drawer__drawer.drawer--dark .list__item, .drawer__drawer.drawer--dark .list__item-graphic, .drawer__drawer.drawer--dark .list__item-meta, .drawer__drawer.drawer--dark .list__item-header, .drawer__drawer.drawer--dark .list__item-secondary-text {\n  color: #fff;\n}\n.drawer__drawer.drawer--dark .drawer__content {\n  scrollbar-width: thin;\n  scrollbar-color: #696969 #696969;\n}\n.drawer__drawer.drawer--dark .drawer__content::-webkit-scrollbar {\n  width: 10px;\n}\n.drawer__drawer.drawer--dark .drawer__content::-webkit-scrollbar-track {\n  background: #696969;\n}\n.drawer__drawer.drawer--dark .drawer__content:hover {\n  scrollbar-color: #363636 #696969;\n}\n.drawer__drawer.drawer--dark .drawer__content:hover::-webkit-scrollbar-thumb {\n  background: #363636;\n}\n.drawer__header {\n  background: url(\"\") no-repeat center bottom 50px/auto calc(100% - 65px);\n  background-color: #F37748;\n  color: #fff;\n  display: flex;\n  align-items: flex-end;\n  min-height: 135px;\n  padding: 16px;\n}\n.drawer--compact .drawer__header {\n  background-position: 95%;\n  background-size: auto 65%;\n  min-height: 62px;\n  padding: 8px 16px;\n  align-items: center;\n}\n.drawer__content {\n  max-height: calc(100vh - 135px);\n  height: 100%;\n  overflow-y: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  scrollbar-width: thin;\n  scrollbar-color: #fff #fff;\n}\n.drawer__content::-webkit-scrollbar {\n  width: 10px;\n}\n.drawer__content::-webkit-scrollbar-track {\n  background: #fff;\n}\n.drawer__content:hover {\n  scrollbar-color: #cccccc #fff;\n}\n.drawer__content:hover::-webkit-scrollbar-thumb {\n  background: #cccccc;\n}\n.drawer--compact .drawer__content {\n  max-height: calc(100vh - 62px);\n}\n.drawer .list {\n  background: transparent;\n  padding: 0;\n  width: 100%;\n}\n.drawer .list--bottom {\n  align-self: flex-end;\n}\n.drawer .list__item {\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n.persistent--open, .permanent--open {\n  overflow-x: hidden;\n}\n.persistent--open .main, .permanent--open .main {\n  margin-left: 320px;\n}\n.persistent--open .main .app-bar, .permanent--open .main .app-bar {\n  left: 320px;\n}\n.persistent--open .drawer--compact + .main, .permanent--open .drawer--compact + .main {\n  margin-left: 240px;\n}\n.persistent--open .drawer--compact + .main .app-bar, .permanent--open .drawer--compact + .main .app-bar {\n  left: 240px;\n}\n\n.permanent--open .app-bar__nav-toggle {\n  display: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/main.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/scss/components/main.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ---------------------------------------------- //\n * Colors\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Style settings\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Font\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Neat\n/* ---------------------------------------------- */\n.main {\n  padding: 30px;\n  min-height: calc(100vh - 62px);\n}\n.with-app-bar--prominent .main {\n  min-height: calc(100vh - 128px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/mdi.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/scss/components/mdi.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* ---------------------------------------------- //\n * Colors\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Style settings\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Font\n// ---------------------------------------------- */\n/* ---------------------------------------------- //\n * Neat\n/* ---------------------------------------------- */\n@font-face {\n  font-family: \"Material Design Icons\";\n  src: url(" + escape(__webpack_require__(/*! @mdi/font/fonts/materialdesignicons-webfont.eot?v=4.4.95 */ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot?v=4.4.95")) + ");\n  src: url(" + escape(__webpack_require__(/*! @mdi/font/fonts/materialdesignicons-webfont.eot */ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot")) + "?#iefix&v=4.4.95) format(\"embedded-opentype\"), url(" + escape(__webpack_require__(/*! @mdi/font/fonts/materialdesignicons-webfont.woff2?v=4.4.95 */ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff2?v=4.4.95")) + ") format(\"woff2\"), url(" + escape(__webpack_require__(/*! @mdi/font/fonts/materialdesignicons-webfont.woff?v=4.4.95 */ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff?v=4.4.95")) + ") format(\"woff\"), url(" + escape(__webpack_require__(/*! @mdi/font/fonts/materialdesignicons-webfont.ttf?v=4.4.95 */ "./node_modules/@mdi/font/fonts/materialdesignicons-webfont.ttf?v=4.4.95")) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.mdi:before,\n.mdi-set {\n  display: inline-block;\n  font: normal normal normal 24px/1 \"Material Design Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.mdi-account::before {\n  content: \"\\F004\";\n}\n\n.mdi-account-badge-horizontal::before {\n  content: \"\\FDF0\";\n}\n\n.mdi-account-badge-horizontal-outline::before {\n  content: \"\\FDF1\";\n}\n\n.mdi-account-box::before {\n  content: \"\\F006\";\n}\n\n.mdi-account-box-multiple::before {\n  content: \"\\F933\";\n}\n\n.mdi-account-box-outline::before {\n  content: \"\\F007\";\n}\n\n.mdi-account-check::before {\n  content: \"\\F008\";\n}\n\n.mdi-account-check-outline::before {\n  content: \"\\FBBE\";\n}\n\n.mdi-account-child::before {\n  content: \"\\FA88\";\n}\n\n.mdi-account-child-circle::before {\n  content: \"\\FA89\";\n}\n\n.mdi-account-circle::before {\n  content: \"\\F009\";\n}\n\n.mdi-account-circle-outline::before {\n  content: \"\\FB31\";\n}\n\n.mdi-account-details::before {\n  content: \"\\F631\";\n}\n\n.mdi-account-multiple::before {\n  content: \"\\F00E\";\n}\n\n.mdi-account-multiple-minus::before {\n  content: \"\\F5D3\";\n}\n\n.mdi-account-multiple-minus-outline::before {\n  content: \"\\FBC1\";\n}\n\n.mdi-account-multiple-outline::before {\n  content: \"\\F00F\";\n}\n\n.mdi-account-multiple-plus::before {\n  content: \"\\F010\";\n}\n\n.mdi-account-multiple-plus-outline::before {\n  content: \"\\F7FF\";\n}\n\n.mdi-account-outline::before {\n  content: \"\\F013\";\n}\n\n.mdi-account-plus::before {\n  content: \"\\F014\";\n}\n\n.mdi-account-supervisor::before {\n  content: \"\\FA8A\";\n}\n\n.mdi-account-supervisor-circle::before {\n  content: \"\\FA8B\";\n}\n\n.mdi-adjust::before {\n  content: \"\\F01A\";\n}\n\n.mdi-air-purifier::before {\n  content: \"\\FD20\";\n}\n\n.mdi-airplane::before {\n  content: \"\\F01D\";\n}\n\n.mdi-airplane-landing::before {\n  content: \"\\F5D4\";\n}\n\n.mdi-airplane-off::before {\n  content: \"\\F01E\";\n}\n\n.mdi-airplane-takeoff::before {\n  content: \"\\F5D5\";\n}\n\n.mdi-alarm::before {\n  content: \"\\F020\";\n}\n\n.mdi-alarm-check::before {\n  content: \"\\F021\";\n}\n\n.mdi-alarm-off::before {\n  content: \"\\F023\";\n}\n\n.mdi-alarm-plus::before {\n  content: \"\\F024\";\n}\n\n.mdi-alarm-snooze::before {\n  content: \"\\F68D\";\n}\n\n.mdi-album::before {\n  content: \"\\F025\";\n}\n\n.mdi-alert::before {\n  content: \"\\F026\";\n}\n\n.mdi-alert-circle::before {\n  content: \"\\F028\";\n}\n\n.mdi-alert-circle-outline::before {\n  content: \"\\F5D6\";\n}\n\n.mdi-alert-decagram::before {\n  content: \"\\F6BC\";\n}\n\n.mdi-alert-octagon::before {\n  content: \"\\F029\";\n}\n\n.mdi-all-inclusive::before {\n  content: \"\\F6BD\";\n}\n\n.mdi-android::before {\n  content: \"\\F032\";\n}\n\n.mdi-android-auto::before {\n  content: \"\\FA8D\";\n}\n\n.mdi-android-debug-bridge::before {\n  content: \"\\F033\";\n}\n\n.mdi-android-head::before {\n  content: \"\\F78F\";\n}\n\n.mdi-android-messages::before {\n  content: \"\\FD21\";\n}\n\n.mdi-android-studio::before {\n  content: \"\\F034\";\n}\n\n.mdi-animation::before {\n  content: \"\\F5D8\";\n}\n\n.mdi-animation-play::before {\n  content: \"\\F939\";\n}\n\n.mdi-api::before {\n  content: \"\\F00C6\";\n}\n\n.mdi-apps::before {\n  content: \"\\F03B\";\n}\n\n.mdi-apps-box::before {\n  content: \"\\FD22\";\n}\n\n.mdi-arrow-collapse-horizontal::before {\n  content: \"\\F84B\";\n}\n\n.mdi-arrow-collapse-vertical::before {\n  content: \"\\F84C\";\n}\n\n.mdi-arrow-down-drop-circle::before {\n  content: \"\\F04A\";\n}\n\n.mdi-arrow-expand-horizontal::before {\n  content: \"\\F84D\";\n}\n\n.mdi-arrow-expand-vertical::before {\n  content: \"\\F84E\";\n}\n\n.mdi-arrow-left::before {\n  content: \"\\F04D\";\n}\n\n.mdi-arrow-right::before {\n  content: \"\\F054\";\n}\n\n.mdi-artist::before {\n  content: \"\\F802\";\n}\n\n.mdi-aspect-ratio::before {\n  content: \"\\FA23\";\n}\n\n.mdi-assistant::before {\n  content: \"\\F064\";\n}\n\n.mdi-at::before {\n  content: \"\\F065\";\n}\n\n.mdi-atm::before {\n  content: \"\\FD23\";\n}\n\n.mdi-attachment::before {\n  content: \"\\F066\";\n}\n\n.mdi-auto-fix::before {\n  content: \"\\F068\";\n}\n\n.mdi-auto-upload::before {\n  content: \"\\F069\";\n}\n\n.mdi-autorenew::before {\n  content: \"\\F06A\";\n}\n\n.mdi-av-timer::before {\n  content: \"\\F06B\";\n}\n\n.mdi-baby::before {\n  content: \"\\F06C\";\n}\n\n.mdi-baby-carriage::before {\n  content: \"\\F68E\";\n}\n\n.mdi-baby-face::before {\n  content: \"\\FE99\";\n}\n\n.mdi-baby-face-outline::before {\n  content: \"\\FE9A\";\n}\n\n.mdi-backspace::before {\n  content: \"\\F06E\";\n}\n\n.mdi-backspace-outline::before {\n  content: \"\\FB38\";\n}\n\n.mdi-backup-restore::before {\n  content: \"\\F06F\";\n}\n\n.mdi-bag-carry-on::before {\n  content: \"\\FF58\";\n}\n\n.mdi-bag-carry-on-check::before {\n  content: \"\\FD41\";\n}\n\n.mdi-bag-carry-on-off::before {\n  content: \"\\FF59\";\n}\n\n.mdi-bag-checked::before {\n  content: \"\\FF5A\";\n}\n\n.mdi-ballot::before {\n  content: \"\\F9C8\";\n}\n\n.mdi-ballot-outline::before {\n  content: \"\\F9C9\";\n}\n\n.mdi-bandage::before {\n  content: \"\\FD8B\";\n}\n\n.mdi-bank::before {\n  content: \"\\F070\";\n}\n\n.mdi-bank-outline::before {\n  content: \"\\FE9D\";\n}\n\n.mdi-basket::before {\n  content: \"\\F076\";\n}\n\n.mdi-basket-fill::before {\n  content: \"\\F077\";\n}\n\n.mdi-basket-unfill::before {\n  content: \"\\F078\";\n}\n\n.mdi-basketball::before {\n  content: \"\\F805\";\n}\n\n.mdi-battery::before {\n  content: \"\\F079\";\n}\n\n.mdi-battery-10::before {\n  content: \"\\F07A\";\n}\n\n.mdi-battery-20::before {\n  content: \"\\F07B\";\n}\n\n.mdi-battery-30::before {\n  content: \"\\F07C\";\n}\n\n.mdi-battery-40::before {\n  content: \"\\F07D\";\n}\n\n.mdi-battery-50::before {\n  content: \"\\F07E\";\n}\n\n.mdi-battery-60::before {\n  content: \"\\F07F\";\n}\n\n.mdi-battery-70::before {\n  content: \"\\F080\";\n}\n\n.mdi-battery-80::before {\n  content: \"\\F081\";\n}\n\n.mdi-battery-90::before {\n  content: \"\\F082\";\n}\n\n.mdi-battery-alert::before {\n  content: \"\\F083\";\n}\n\n.mdi-battery-charging::before {\n  content: \"\\F084\";\n}\n\n.mdi-battery-charging-10::before {\n  content: \"\\F89B\";\n}\n\n.mdi-battery-charging-100::before {\n  content: \"\\F085\";\n}\n\n.mdi-battery-charging-20::before {\n  content: \"\\F086\";\n}\n\n.mdi-battery-charging-30::before {\n  content: \"\\F087\";\n}\n\n.mdi-battery-charging-40::before {\n  content: \"\\F088\";\n}\n\n.mdi-battery-charging-50::before {\n  content: \"\\F89C\";\n}\n\n.mdi-battery-charging-60::before {\n  content: \"\\F089\";\n}\n\n.mdi-battery-charging-70::before {\n  content: \"\\F89D\";\n}\n\n.mdi-battery-charging-80::before {\n  content: \"\\F08A\";\n}\n\n.mdi-battery-charging-90::before {\n  content: \"\\F08B\";\n}\n\n.mdi-battery-charging-outline::before {\n  content: \"\\F89E\";\n}\n\n.mdi-battery-outline::before {\n  content: \"\\F08E\";\n}\n\n.mdi-battery-unknown::before {\n  content: \"\\F091\";\n}\n\n.mdi-bed-double-outline::before {\n  content: \"\\F0093\";\n}\n\n.mdi-bed-king::before {\n  content: \"\\F0094\";\n}\n\n.mdi-bee::before {\n  content: \"\\FFC1\";\n}\n\n.mdi-bee-flower::before {\n  content: \"\\FFC2\";\n}\n\n.mdi-bell::before {\n  content: \"\\F09A\";\n}\n\n.mdi-bell-alert::before {\n  content: \"\\FD35\";\n}\n\n.mdi-bell-alert-outline::before {\n  content: \"\\FE9E\";\n}\n\n.mdi-bell-circle::before {\n  content: \"\\FD36\";\n}\n\n.mdi-bell-circle-outline::before {\n  content: \"\\FD37\";\n}\n\n.mdi-bell-off::before {\n  content: \"\\F09B\";\n}\n\n.mdi-bell-off-outline::before {\n  content: \"\\FA90\";\n}\n\n.mdi-bell-outline::before {\n  content: \"\\F09C\";\n}\n\n.mdi-bell-plus::before {\n  content: \"\\F09D\";\n}\n\n.mdi-bell-plus-outline::before {\n  content: \"\\FA91\";\n}\n\n.mdi-bell-ring::before {\n  content: \"\\F09E\";\n}\n\n.mdi-bell-ring-outline::before {\n  content: \"\\F09F\";\n}\n\n.mdi-bell-sleep::before {\n  content: \"\\F0A0\";\n}\n\n.mdi-bell-sleep-outline::before {\n  content: \"\\FA92\";\n}\n\n.mdi-biathlon::before {\n  content: \"\\FDF7\";\n}\n\n.mdi-bike::before {\n  content: \"\\F0A3\";\n}\n\n.mdi-blogger::before {\n  content: \"\\F0AE\";\n}\n\n.mdi-bluetooth-audio::before {\n  content: \"\\F0B0\";\n}\n\n.mdi-bluetooth-connect::before {\n  content: \"\\F0B1\";\n}\n\n.mdi-bluetooth-off::before {\n  content: \"\\F0B2\";\n}\n\n.mdi-bluetooth-settings::before {\n  content: \"\\F0B3\";\n}\n\n.mdi-bluetooth-transfer::before {\n  content: \"\\F0B4\";\n}\n\n.mdi-blur::before {\n  content: \"\\F0B5\";\n}\n\n.mdi-blur-linear::before {\n  content: \"\\F0B6\";\n}\n\n.mdi-blur-off::before {\n  content: \"\\F0B7\";\n}\n\n.mdi-blur-radial::before {\n  content: \"\\F0B8\";\n}\n\n.mdi-book::before {\n  content: \"\\F0BA\";\n}\n\n.mdi-book-open::before {\n  content: \"\\F0BD\";\n}\n\n.mdi-book-open-outline::before {\n  content: \"\\FB3F\";\n}\n\n.mdi-book-open-page-variant::before {\n  content: \"\\F5DA\";\n}\n\n.mdi-book-open-variant::before {\n  content: \"\\F0BE\";\n}\n\n.mdi-book-outline::before {\n  content: \"\\FB40\";\n}\n\n.mdi-book-variant::before {\n  content: \"\\F0BF\";\n}\n\n.mdi-book-variant-multiple::before {\n  content: \"\\F0BC\";\n}\n\n.mdi-bookmark::before {\n  content: \"\\F0C0\";\n}\n\n.mdi-bookmark-check::before {\n  content: \"\\F0C1\";\n}\n\n.mdi-bookmark-minus::before {\n  content: \"\\F9CB\";\n}\n\n.mdi-bookmark-minus-outline::before {\n  content: \"\\F9CC\";\n}\n\n.mdi-bookmark-multiple::before {\n  content: \"\\FDF8\";\n}\n\n.mdi-bookmark-multiple-outline::before {\n  content: \"\\FDF9\";\n}\n\n.mdi-bookmark-music::before {\n  content: \"\\F0C2\";\n}\n\n.mdi-bookmark-off::before {\n  content: \"\\F9CD\";\n}\n\n.mdi-bookmark-off-outline::before {\n  content: \"\\F9CE\";\n}\n\n.mdi-bookmark-outline::before {\n  content: \"\\F0C3\";\n}\n\n.mdi-bookmark-plus::before {\n  content: \"\\F0C5\";\n}\n\n.mdi-bookmark-plus-outline::before {\n  content: \"\\F0C4\";\n}\n\n.mdi-bookmark-remove::before {\n  content: \"\\F0C6\";\n}\n\n.mdi-boom-gate::before {\n  content: \"\\FEA3\";\n}\n\n.mdi-boom-gate-alert::before {\n  content: \"\\FEA4\";\n}\n\n.mdi-boom-gate-alert-outline::before {\n  content: \"\\FEA5\";\n}\n\n.mdi-boom-gate-down::before {\n  content: \"\\FEA6\";\n}\n\n.mdi-boom-gate-down-outline::before {\n  content: \"\\FEA7\";\n}\n\n.mdi-boom-gate-outline::before {\n  content: \"\\FEA8\";\n}\n\n.mdi-boom-gate-up::before {\n  content: \"\\FEA9\";\n}\n\n.mdi-boom-gate-up-outline::before {\n  content: \"\\FEAA\";\n}\n\n.mdi-boombox::before {\n  content: \"\\F5DC\";\n}\n\n.mdi-bootstrap::before {\n  content: \"\\F6C5\";\n}\n\n.mdi-border-all::before {\n  content: \"\\F0C7\";\n}\n\n.mdi-border-all-variant::before {\n  content: \"\\F8A0\";\n}\n\n.mdi-border-bottom::before {\n  content: \"\\F0C8\";\n}\n\n.mdi-border-bottom-variant::before {\n  content: \"\\F8A1\";\n}\n\n.mdi-border-color::before {\n  content: \"\\F0C9\";\n}\n\n.mdi-border-horizontal::before {\n  content: \"\\F0CA\";\n}\n\n.mdi-border-inside::before {\n  content: \"\\F0CB\";\n}\n\n.mdi-border-left::before {\n  content: \"\\F0CC\";\n}\n\n.mdi-border-left-variant::before {\n  content: \"\\F8A2\";\n}\n\n.mdi-border-none::before {\n  content: \"\\F0CD\";\n}\n\n.mdi-border-none-variant::before {\n  content: \"\\F8A3\";\n}\n\n.mdi-border-outside::before {\n  content: \"\\F0CE\";\n}\n\n.mdi-border-right::before {\n  content: \"\\F0CF\";\n}\n\n.mdi-border-right-variant::before {\n  content: \"\\F8A4\";\n}\n\n.mdi-border-style::before {\n  content: \"\\F0D0\";\n}\n\n.mdi-border-top::before {\n  content: \"\\F0D1\";\n}\n\n.mdi-border-top-variant::before {\n  content: \"\\F8A5\";\n}\n\n.mdi-border-vertical::before {\n  content: \"\\F0D2\";\n}\n\n.mdi-bottle-soda::before {\n  content: \"\\F009B\";\n}\n\n.mdi-bottle-soda-classic::before {\n  content: \"\\F009C\";\n}\n\n.mdi-bottle-soda-outline::before {\n  content: \"\\F009D\";\n}\n\n.mdi-bottle-wine::before {\n  content: \"\\F853\";\n}\n\n.mdi-bow-tie::before {\n  content: \"\\F677\";\n}\n\n.mdi-bowl::before {\n  content: \"\\F617\";\n}\n\n.mdi-bowling::before {\n  content: \"\\F0D3\";\n}\n\n.mdi-box::before {\n  content: \"\\F0D4\";\n}\n\n.mdi-box-cutter::before {\n  content: \"\\F0D5\";\n}\n\n.mdi-box-shadow::before {\n  content: \"\\F637\";\n}\n\n.mdi-boxing-glove::before {\n  content: \"\\FB41\";\n}\n\n.mdi-braille::before {\n  content: \"\\F9CF\";\n}\n\n.mdi-brain::before {\n  content: \"\\F9D0\";\n}\n\n.mdi-bread-slice::before {\n  content: \"\\FCCA\";\n}\n\n.mdi-bread-slice-outline::before {\n  content: \"\\FCCB\";\n}\n\n.mdi-bridge::before {\n  content: \"\\F618\";\n}\n\n.mdi-briefcase::before {\n  content: \"\\F0D6\";\n}\n\n.mdi-briefcase-account::before {\n  content: \"\\FCCC\";\n}\n\n.mdi-briefcase-account-outline::before {\n  content: \"\\FCCD\";\n}\n\n.mdi-briefcase-check::before {\n  content: \"\\F0D7\";\n}\n\n.mdi-briefcase-download::before {\n  content: \"\\F0D8\";\n}\n\n.mdi-briefcase-download-outline::before {\n  content: \"\\FC19\";\n}\n\n.mdi-briefcase-edit::before {\n  content: \"\\FA97\";\n}\n\n.mdi-briefcase-edit-outline::before {\n  content: \"\\FC1A\";\n}\n\n.mdi-briefcase-minus::before {\n  content: \"\\FA29\";\n}\n\n.mdi-briefcase-minus-outline::before {\n  content: \"\\FC1B\";\n}\n\n.mdi-briefcase-outline::before {\n  content: \"\\F813\";\n}\n\n.mdi-briefcase-plus::before {\n  content: \"\\FA2A\";\n}\n\n.mdi-briefcase-plus-outline::before {\n  content: \"\\FC1C\";\n}\n\n.mdi-briefcase-remove::before {\n  content: \"\\FA2B\";\n}\n\n.mdi-briefcase-remove-outline::before {\n  content: \"\\FC1D\";\n}\n\n.mdi-briefcase-search::before {\n  content: \"\\FA2C\";\n}\n\n.mdi-briefcase-search-outline::before {\n  content: \"\\FC1E\";\n}\n\n.mdi-briefcase-upload::before {\n  content: \"\\F0D9\";\n}\n\n.mdi-briefcase-upload-outline::before {\n  content: \"\\FC1F\";\n}\n\n.mdi-brightness-1::before {\n  content: \"\\F0DA\";\n}\n\n.mdi-brightness-2::before {\n  content: \"\\F0DB\";\n}\n\n.mdi-brightness-3::before {\n  content: \"\\F0DC\";\n}\n\n.mdi-brightness-4::before {\n  content: \"\\F0DD\";\n}\n\n.mdi-brightness-5::before {\n  content: \"\\F0DE\";\n}\n\n.mdi-brightness-6::before {\n  content: \"\\F0DF\";\n}\n\n.mdi-brightness-7::before {\n  content: \"\\F0E0\";\n}\n\n.mdi-brightness-auto::before {\n  content: \"\\F0E1\";\n}\n\n.mdi-brightness-percent::before {\n  content: \"\\FCCE\";\n}\n\n.mdi-broom::before {\n  content: \"\\F0E2\";\n}\n\n.mdi-brush::before {\n  content: \"\\F0E3\";\n}\n\n.mdi-buddhism::before {\n  content: \"\\F94A\";\n}\n\n.mdi-buffer::before {\n  content: \"\\F619\";\n}\n\n.mdi-bug::before {\n  content: \"\\F0E4\";\n}\n\n.mdi-bug-check::before {\n  content: \"\\FA2D\";\n}\n\n.mdi-bug-check-outline::before {\n  content: \"\\FA2E\";\n}\n\n.mdi-bug-outline::before {\n  content: \"\\FA2F\";\n}\n\n.mdi-bugle::before {\n  content: \"\\FD90\";\n}\n\n.mdi-bulldozer::before {\n  content: \"\\FB07\";\n}\n\n.mdi-bullet::before {\n  content: \"\\FCCF\";\n}\n\n.mdi-bulletin-board::before {\n  content: \"\\F0E5\";\n}\n\n.mdi-bullhorn::before {\n  content: \"\\F0E6\";\n}\n\n.mdi-bullhorn-outline::before {\n  content: \"\\FB08\";\n}\n\n.mdi-bullseye::before {\n  content: \"\\F5DD\";\n}\n\n.mdi-bullseye-arrow::before {\n  content: \"\\F8C8\";\n}\n\n.mdi-bus::before {\n  content: \"\\F0E7\";\n}\n\n.mdi-bus-alert::before {\n  content: \"\\FA98\";\n}\n\n.mdi-bus-articulated-end::before {\n  content: \"\\F79B\";\n}\n\n.mdi-bus-articulated-front::before {\n  content: \"\\F79C\";\n}\n\n.mdi-bus-clock::before {\n  content: \"\\F8C9\";\n}\n\n.mdi-bus-double-decker::before {\n  content: \"\\F79D\";\n}\n\n.mdi-bus-multiple::before {\n  content: \"\\FF5C\";\n}\n\n.mdi-bus-school::before {\n  content: \"\\F79E\";\n}\n\n.mdi-bus-side::before {\n  content: \"\\F79F\";\n}\n\n.mdi-bus-stop::before {\n  content: \"\\F0034\";\n}\n\n.mdi-bus-stop-covered::before {\n  content: \"\\F0035\";\n}\n\n.mdi-bus-stop-uncovered::before {\n  content: \"\\F0036\";\n}\n\n.mdi-cached::before {\n  content: \"\\F0E8\";\n}\n\n.mdi-cactus::before {\n  content: \"\\FD91\";\n}\n\n.mdi-cake::before {\n  content: \"\\F0E9\";\n}\n\n.mdi-cake-layered::before {\n  content: \"\\F0EA\";\n}\n\n.mdi-cake-variant::before {\n  content: \"\\F0EB\";\n}\n\n.mdi-calculator::before {\n  content: \"\\F0EC\";\n}\n\n.mdi-calculator-variant::before {\n  content: \"\\FA99\";\n}\n\n.mdi-calendar::before {\n  content: \"\\F0ED\";\n}\n\n.mdi-calendar-account::before {\n  content: \"\\FEF4\";\n}\n\n.mdi-calendar-account-outline::before {\n  content: \"\\FEF5\";\n}\n\n.mdi-calendar-alert::before {\n  content: \"\\FA30\";\n}\n\n.mdi-calendar-blank::before {\n  content: \"\\F0EE\";\n}\n\n.mdi-calendar-blank-multiple::before {\n  content: \"\\F009E\";\n}\n\n.mdi-calendar-blank-outline::before {\n  content: \"\\FB42\";\n}\n\n.mdi-calendar-check::before {\n  content: \"\\F0EF\";\n}\n\n.mdi-calendar-check-outline::before {\n  content: \"\\FC20\";\n}\n\n.mdi-calendar-clock::before {\n  content: \"\\F0F0\";\n}\n\n.mdi-calendar-edit::before {\n  content: \"\\F8A6\";\n}\n\n.mdi-calendar-export::before {\n  content: \"\\FB09\";\n}\n\n.mdi-calendar-heart::before {\n  content: \"\\F9D1\";\n}\n\n.mdi-calendar-import::before {\n  content: \"\\FB0A\";\n}\n\n.mdi-calendar-minus::before {\n  content: \"\\FD38\";\n}\n\n.mdi-calendar-month::before {\n  content: \"\\FDFA\";\n}\n\n.mdi-calendar-month-outline::before {\n  content: \"\\FDFB\";\n}\n\n.mdi-calendar-multiple::before {\n  content: \"\\F0F1\";\n}\n\n.mdi-calendar-multiple-check::before {\n  content: \"\\F0F2\";\n}\n\n.mdi-calendar-multiselect::before {\n  content: \"\\FA31\";\n}\n\n.mdi-calendar-outline::before {\n  content: \"\\FB43\";\n}\n\n.mdi-calendar-plus::before {\n  content: \"\\F0F3\";\n}\n\n.mdi-calendar-question::before {\n  content: \"\\F691\";\n}\n\n.mdi-calendar-range::before {\n  content: \"\\F678\";\n}\n\n.mdi-calendar-range-outline::before {\n  content: \"\\FB44\";\n}\n\n.mdi-calendar-remove::before {\n  content: \"\\F0F4\";\n}\n\n.mdi-calendar-remove-outline::before {\n  content: \"\\FC21\";\n}\n\n.mdi-calendar-repeat::before {\n  content: \"\\FEAB\";\n}\n\n.mdi-calendar-repeat-outline::before {\n  content: \"\\FEAC\";\n}\n\n.mdi-calendar-search::before {\n  content: \"\\F94B\";\n}\n\n.mdi-calendar-star::before {\n  content: \"\\F9D2\";\n}\n\n.mdi-calendar-text::before {\n  content: \"\\F0F5\";\n}\n\n.mdi-calendar-text-outline::before {\n  content: \"\\FC22\";\n}\n\n.mdi-calendar-today::before {\n  content: \"\\F0F6\";\n}\n\n.mdi-calendar-week::before {\n  content: \"\\FA32\";\n}\n\n.mdi-calendar-week-begin::before {\n  content: \"\\FA33\";\n}\n\n.mdi-calendar-weekend::before {\n  content: \"\\FEF6\";\n}\n\n.mdi-calendar-weekend-outline::before {\n  content: \"\\FEF7\";\n}\n\n.mdi-call-made::before {\n  content: \"\\F0F7\";\n}\n\n.mdi-call-merge::before {\n  content: \"\\F0F8\";\n}\n\n.mdi-call-missed::before {\n  content: \"\\F0F9\";\n}\n\n.mdi-call-received::before {\n  content: \"\\F0FA\";\n}\n\n.mdi-call-split::before {\n  content: \"\\F0FB\";\n}\n\n.mdi-camcorder::before {\n  content: \"\\F0FC\";\n}\n\n.mdi-camcorder-box::before {\n  content: \"\\F0FD\";\n}\n\n.mdi-camcorder-box-off::before {\n  content: \"\\F0FE\";\n}\n\n.mdi-camcorder-off::before {\n  content: \"\\F0FF\";\n}\n\n.mdi-camera::before {\n  content: \"\\F100\";\n}\n\n.mdi-camera-account::before {\n  content: \"\\F8CA\";\n}\n\n.mdi-camera-burst::before {\n  content: \"\\F692\";\n}\n\n.mdi-camera-control::before {\n  content: \"\\FB45\";\n}\n\n.mdi-camera-enhance::before {\n  content: \"\\F101\";\n}\n\n.mdi-camera-enhance-outline::before {\n  content: \"\\FB46\";\n}\n\n.mdi-camera-front::before {\n  content: \"\\F102\";\n}\n\n.mdi-camera-front-variant::before {\n  content: \"\\F103\";\n}\n\n.mdi-camera-gopro::before {\n  content: \"\\F7A0\";\n}\n\n.mdi-camera-image::before {\n  content: \"\\F8CB\";\n}\n\n.mdi-camera-iris::before {\n  content: \"\\F104\";\n}\n\n.mdi-camera-metering-center::before {\n  content: \"\\F7A1\";\n}\n\n.mdi-camera-metering-matrix::before {\n  content: \"\\F7A2\";\n}\n\n.mdi-camera-metering-partial::before {\n  content: \"\\F7A3\";\n}\n\n.mdi-camera-metering-spot::before {\n  content: \"\\F7A4\";\n}\n\n.mdi-camera-off::before {\n  content: \"\\F5DF\";\n}\n\n.mdi-camera-outline::before {\n  content: \"\\FD39\";\n}\n\n.mdi-camera-party-mode::before {\n  content: \"\\F105\";\n}\n\n.mdi-camera-plus::before {\n  content: \"\\FEF8\";\n}\n\n.mdi-camera-plus-outline::before {\n  content: \"\\FEF9\";\n}\n\n.mdi-camera-rear::before {\n  content: \"\\F106\";\n}\n\n.mdi-camera-rear-variant::before {\n  content: \"\\F107\";\n}\n\n.mdi-camera-retake::before {\n  content: \"\\FDFC\";\n}\n\n.mdi-camera-retake-outline::before {\n  content: \"\\FDFD\";\n}\n\n.mdi-camera-switch::before {\n  content: \"\\F108\";\n}\n\n.mdi-camera-timer::before {\n  content: \"\\F109\";\n}\n\n.mdi-camera-wireless::before {\n  content: \"\\FD92\";\n}\n\n.mdi-camera-wireless-outline::before {\n  content: \"\\FD93\";\n}\n\n.mdi-campfire::before {\n  content: \"\\FEFA\";\n}\n\n.mdi-cancel::before {\n  content: \"\\F739\";\n}\n\n.mdi-candle::before {\n  content: \"\\F5E2\";\n}\n\n.mdi-candycane::before {\n  content: \"\\F10A\";\n}\n\n.mdi-cannabis::before {\n  content: \"\\F7A5\";\n}\n\n.mdi-caps-lock::before {\n  content: \"\\FA9A\";\n}\n\n.mdi-car::before {\n  content: \"\\F10B\";\n}\n\n.mdi-car-2-plus::before {\n  content: \"\\F0037\";\n}\n\n.mdi-car-3-plus::before {\n  content: \"\\F0038\";\n}\n\n.mdi-car-back::before {\n  content: \"\\FDFE\";\n}\n\n.mdi-car-battery::before {\n  content: \"\\F10C\";\n}\n\n.mdi-car-brake-abs::before {\n  content: \"\\FC23\";\n}\n\n.mdi-car-brake-alert::before {\n  content: \"\\FC24\";\n}\n\n.mdi-car-brake-hold::before {\n  content: \"\\FD3A\";\n}\n\n.mdi-car-brake-parking::before {\n  content: \"\\FD3B\";\n}\n\n.mdi-car-brake-retarder::before {\n  content: \"\\F0039\";\n}\n\n.mdi-car-child-seat::before {\n  content: \"\\FFC3\";\n}\n\n.mdi-car-clutch::before {\n  content: \"\\F003A\";\n}\n\n.mdi-car-connected::before {\n  content: \"\\F10D\";\n}\n\n.mdi-car-convertible::before {\n  content: \"\\F7A6\";\n}\n\n.mdi-car-coolant-level::before {\n  content: \"\\F003B\";\n}\n\n.mdi-car-cruise-control::before {\n  content: \"\\FD3C\";\n}\n\n.mdi-car-defrost-front::before {\n  content: \"\\FD3D\";\n}\n\n.mdi-car-defrost-rear::before {\n  content: \"\\FD3E\";\n}\n\n.mdi-car-door::before {\n  content: \"\\FB47\";\n}\n\n.mdi-car-door-lock::before {\n  content: \"\\F00C8\";\n}\n\n.mdi-car-electric::before {\n  content: \"\\FB48\";\n}\n\n.mdi-car-esp::before {\n  content: \"\\FC25\";\n}\n\n.mdi-car-estate::before {\n  content: \"\\F7A7\";\n}\n\n.mdi-car-hatchback::before {\n  content: \"\\F7A8\";\n}\n\n.mdi-car-key::before {\n  content: \"\\FB49\";\n}\n\n.mdi-car-light-dimmed::before {\n  content: \"\\FC26\";\n}\n\n.mdi-car-light-fog::before {\n  content: \"\\FC27\";\n}\n\n.mdi-car-light-high::before {\n  content: \"\\FC28\";\n}\n\n.mdi-car-limousine::before {\n  content: \"\\F8CC\";\n}\n\n.mdi-car-multiple::before {\n  content: \"\\FB4A\";\n}\n\n.mdi-car-off::before {\n  content: \"\\FDFF\";\n}\n\n.mdi-car-parking-lights::before {\n  content: \"\\FD3F\";\n}\n\n.mdi-car-pickup::before {\n  content: \"\\F7A9\";\n}\n\n.mdi-car-seat::before {\n  content: \"\\FFC4\";\n}\n\n.mdi-car-seat-cooler::before {\n  content: \"\\FFC5\";\n}\n\n.mdi-car-seat-heater::before {\n  content: \"\\FFC6\";\n}\n\n.mdi-car-shift-pattern::before {\n  content: \"\\FF5D\";\n}\n\n.mdi-car-side::before {\n  content: \"\\F7AA\";\n}\n\n.mdi-car-sports::before {\n  content: \"\\F7AB\";\n}\n\n.mdi-car-tire-alert::before {\n  content: \"\\FC29\";\n}\n\n.mdi-car-traction-control::before {\n  content: \"\\FD40\";\n}\n\n.mdi-car-turbocharger::before {\n  content: \"\\F003C\";\n}\n\n.mdi-car-wash::before {\n  content: \"\\F10E\";\n}\n\n.mdi-car-windshield::before {\n  content: \"\\F003D\";\n}\n\n.mdi-car-windshield-outline::before {\n  content: \"\\F003E\";\n}\n\n.mdi-caravan::before {\n  content: \"\\F7AC\";\n}\n\n.mdi-card::before {\n  content: \"\\FB4B\";\n}\n\n.mdi-card-bulleted::before {\n  content: \"\\FB4C\";\n}\n\n.mdi-card-bulleted-off::before {\n  content: \"\\FB4D\";\n}\n\n.mdi-card-bulleted-off-outline::before {\n  content: \"\\FB4E\";\n}\n\n.mdi-card-bulleted-outline::before {\n  content: \"\\FB4F\";\n}\n\n.mdi-card-bulleted-settings::before {\n  content: \"\\FB50\";\n}\n\n.mdi-card-bulleted-settings-outline::before {\n  content: \"\\FB51\";\n}\n\n.mdi-card-outline::before {\n  content: \"\\FB52\";\n}\n\n.mdi-card-search::before {\n  content: \"\\F009F\";\n}\n\n.mdi-card-search-outline::before {\n  content: \"\\F00A0\";\n}\n\n.mdi-card-text::before {\n  content: \"\\FB53\";\n}\n\n.mdi-card-text-outline::before {\n  content: \"\\FB54\";\n}\n\n.mdi-cards::before {\n  content: \"\\F638\";\n}\n\n.mdi-cards-club::before {\n  content: \"\\F8CD\";\n}\n\n.mdi-cards-diamond::before {\n  content: \"\\F8CE\";\n}\n\n.mdi-cards-diamond-outline::before {\n  content: \"\\F003F\";\n}\n\n.mdi-cards-heart::before {\n  content: \"\\F8CF\";\n}\n\n.mdi-cards-outline::before {\n  content: \"\\F639\";\n}\n\n.mdi-cards-playing-outline::before {\n  content: \"\\F63A\";\n}\n\n.mdi-cards-spade::before {\n  content: \"\\F8D0\";\n}\n\n.mdi-cards-variant::before {\n  content: \"\\F6C6\";\n}\n\n.mdi-carrot::before {\n  content: \"\\F10F\";\n}\n\n.mdi-cart::before {\n  content: \"\\F110\";\n}\n\n.mdi-cart-arrow-down::before {\n  content: \"\\FD42\";\n}\n\n.mdi-cart-arrow-right::before {\n  content: \"\\FC2A\";\n}\n\n.mdi-cart-arrow-up::before {\n  content: \"\\FD43\";\n}\n\n.mdi-cart-minus::before {\n  content: \"\\FD44\";\n}\n\n.mdi-cart-off::before {\n  content: \"\\F66B\";\n}\n\n.mdi-cart-outline::before {\n  content: \"\\F111\";\n}\n\n.mdi-cart-plus::before {\n  content: \"\\F112\";\n}\n\n.mdi-cart-remove::before {\n  content: \"\\FD45\";\n}\n\n.mdi-case-sensitive-alt::before {\n  content: \"\\F113\";\n}\n\n.mdi-cash::before {\n  content: \"\\F114\";\n}\n\n.mdi-cash-100::before {\n  content: \"\\F115\";\n}\n\n.mdi-cash-marker::before {\n  content: \"\\FD94\";\n}\n\n.mdi-cash-multiple::before {\n  content: \"\\F116\";\n}\n\n.mdi-cash-refund::before {\n  content: \"\\FA9B\";\n}\n\n.mdi-cash-register::before {\n  content: \"\\FCD0\";\n}\n\n.mdi-cash-usd-outline::before {\n  content: \"\\F117\";\n}\n\n.mdi-cassette::before {\n  content: \"\\F9D3\";\n}\n\n.mdi-cast::before {\n  content: \"\\F118\";\n}\n\n.mdi-cast-audio::before {\n  content: \"\\F0040\";\n}\n\n.mdi-cast-connected::before {\n  content: \"\\F119\";\n}\n\n.mdi-cast-education::before {\n  content: \"\\FE6D\";\n}\n\n.mdi-cast-off::before {\n  content: \"\\F789\";\n}\n\n.mdi-castle::before {\n  content: \"\\F11A\";\n}\n\n.mdi-cat::before {\n  content: \"\\F11B\";\n}\n\n.mdi-cctv::before {\n  content: \"\\F7AD\";\n}\n\n.mdi-ceiling-light::before {\n  content: \"\\F768\";\n}\n\n.mdi-cellphone::before {\n  content: \"\\F11C\";\n}\n\n.mdi-cellphone-android::before {\n  content: \"\\F11D\";\n}\n\n.mdi-cellphone-arrow-down::before {\n  content: \"\\F9D4\";\n}\n\n.mdi-cellphone-basic::before {\n  content: \"\\F11E\";\n}\n\n.mdi-cellphone-dock::before {\n  content: \"\\F11F\";\n}\n\n.mdi-cellphone-erase::before {\n  content: \"\\F94C\";\n}\n\n.mdi-cellphone-information::before {\n  content: \"\\FF5E\";\n}\n\n.mdi-cellphone-iphone::before {\n  content: \"\\F120\";\n}\n\n.mdi-cellphone-key::before {\n  content: \"\\F94D\";\n}\n\n.mdi-cellphone-link::before {\n  content: \"\\F121\";\n}\n\n.mdi-cellphone-link-off::before {\n  content: \"\\F122\";\n}\n\n.mdi-cellphone-lock::before {\n  content: \"\\F94E\";\n}\n\n.mdi-cellphone-message::before {\n  content: \"\\F8D2\";\n}\n\n.mdi-cellphone-nfc::before {\n  content: \"\\FEAD\";\n}\n\n.mdi-cellphone-off::before {\n  content: \"\\F94F\";\n}\n\n.mdi-cellphone-play::before {\n  content: \"\\F0041\";\n}\n\n.mdi-cellphone-screenshot::before {\n  content: \"\\FA34\";\n}\n\n.mdi-cellphone-settings::before {\n  content: \"\\F123\";\n}\n\n.mdi-cellphone-settings-variant::before {\n  content: \"\\F950\";\n}\n\n.mdi-cellphone-sound::before {\n  content: \"\\F951\";\n}\n\n.mdi-cellphone-text::before {\n  content: \"\\F8D1\";\n}\n\n.mdi-cellphone-wireless::before {\n  content: \"\\F814\";\n}\n\n.mdi-celtic-cross::before {\n  content: \"\\FCD1\";\n}\n\n.mdi-certificate::before {\n  content: \"\\F124\";\n}\n\n.mdi-chair-rolling::before {\n  content: \"\\FFBA\";\n}\n\n.mdi-chair-school::before {\n  content: \"\\F125\";\n}\n\n.mdi-charity::before {\n  content: \"\\FC2B\";\n}\n\n.mdi-chart-arc::before {\n  content: \"\\F126\";\n}\n\n.mdi-chart-areaspline::before {\n  content: \"\\F127\";\n}\n\n.mdi-chart-areaspline-variant::before {\n  content: \"\\FEAE\";\n}\n\n.mdi-chart-bar::before {\n  content: \"\\F128\";\n}\n\n.mdi-chart-bar-stacked::before {\n  content: \"\\F769\";\n}\n\n.mdi-chart-bell-curve::before {\n  content: \"\\FC2C\";\n}\n\n.mdi-chart-bell-curve-cumulative::before {\n  content: \"\\FFC7\";\n}\n\n.mdi-chart-bubble::before {\n  content: \"\\F5E3\";\n}\n\n.mdi-chart-donut::before {\n  content: \"\\F7AE\";\n}\n\n.mdi-chart-donut-variant::before {\n  content: \"\\F7AF\";\n}\n\n.mdi-chart-gantt::before {\n  content: \"\\F66C\";\n}\n\n.mdi-chart-histogram::before {\n  content: \"\\F129\";\n}\n\n.mdi-chart-line::before {\n  content: \"\\F12A\";\n}\n\n.mdi-chart-line-stacked::before {\n  content: \"\\F76A\";\n}\n\n.mdi-chart-line-variant::before {\n  content: \"\\F7B0\";\n}\n\n.mdi-chart-multiline::before {\n  content: \"\\F8D3\";\n}\n\n.mdi-chart-pie::before {\n  content: \"\\F12B\";\n}\n\n.mdi-chart-scatter-plot::before {\n  content: \"\\FEAF\";\n}\n\n.mdi-chart-scatter-plot-hexbin::before {\n  content: \"\\F66D\";\n}\n\n.mdi-chart-timeline::before {\n  content: \"\\F66E\";\n}\n\n.mdi-chart-timeline-variant::before {\n  content: \"\\FEB0\";\n}\n\n.mdi-chart-tree::before {\n  content: \"\\FEB1\";\n}\n\n.mdi-chat::before {\n  content: \"\\FB55\";\n}\n\n.mdi-chat-alert::before {\n  content: \"\\FB56\";\n}\n\n.mdi-chat-outline::before {\n  content: \"\\FEFB\";\n}\n\n.mdi-chat-processing::before {\n  content: \"\\FB57\";\n}\n\n.mdi-check::before {\n  content: \"\\F12C\";\n}\n\n.mdi-check-all::before {\n  content: \"\\F12D\";\n}\n\n.mdi-check-bold::before {\n  content: \"\\FE6E\";\n}\n\n.mdi-check-box-multiple-outline::before {\n  content: \"\\FC2D\";\n}\n\n.mdi-check-box-outline::before {\n  content: \"\\FC2E\";\n}\n\n.mdi-check-circle::before {\n  content: \"\\F5E0\";\n}\n\n.mdi-check-circle-outline::before {\n  content: \"\\F5E1\";\n}\n\n.mdi-check-decagram::before {\n  content: \"\\F790\";\n}\n\n.mdi-check-network::before {\n  content: \"\\FC2F\";\n}\n\n.mdi-check-network-outline::before {\n  content: \"\\FC30\";\n}\n\n.mdi-check-outline::before {\n  content: \"\\F854\";\n}\n\n.mdi-check-underline::before {\n  content: \"\\FE70\";\n}\n\n.mdi-check-underline-circle::before {\n  content: \"\\FE71\";\n}\n\n.mdi-check-underline-circle-outline::before {\n  content: \"\\FE72\";\n}\n\n.mdi-checkbook::before {\n  content: \"\\FA9C\";\n}\n\n.mdi-checkbox-blank::before {\n  content: \"\\F12E\";\n}\n\n.mdi-checkbox-blank-circle::before {\n  content: \"\\F12F\";\n}\n\n.mdi-checkbox-blank-circle-outline::before {\n  content: \"\\F130\";\n}\n\n.mdi-checkbox-blank-outline::before {\n  content: \"\\F131\";\n}\n\n.mdi-checkbox-intermediate::before {\n  content: \"\\F855\";\n}\n\n.mdi-checkbox-marked::before {\n  content: \"\\F132\";\n}\n\n.mdi-checkbox-marked-circle::before {\n  content: \"\\F133\";\n}\n\n.mdi-checkbox-marked-circle-outline::before {\n  content: \"\\F134\";\n}\n\n.mdi-checkbox-marked-outline::before {\n  content: \"\\F135\";\n}\n\n.mdi-checkbox-multiple-blank::before {\n  content: \"\\F136\";\n}\n\n.mdi-checkbox-multiple-blank-circle::before {\n  content: \"\\F63B\";\n}\n\n.mdi-checkbox-multiple-blank-circle-outline::before {\n  content: \"\\F63C\";\n}\n\n.mdi-checkbox-multiple-blank-outline::before {\n  content: \"\\F137\";\n}\n\n.mdi-checkbox-multiple-marked::before {\n  content: \"\\F138\";\n}\n\n.mdi-checkbox-multiple-marked-circle::before {\n  content: \"\\F63D\";\n}\n\n.mdi-checkbox-multiple-marked-circle-outline::before {\n  content: \"\\F63E\";\n}\n\n.mdi-checkbox-multiple-marked-outline::before {\n  content: \"\\F139\";\n}\n\n.mdi-checkerboard::before {\n  content: \"\\F13A\";\n}\n\n.mdi-chef-hat::before {\n  content: \"\\FB58\";\n}\n\n.mdi-chemical-weapon::before {\n  content: \"\\F13B\";\n}\n\n.mdi-chess-bishop::before {\n  content: \"\\F85B\";\n}\n\n.mdi-chess-king::before {\n  content: \"\\F856\";\n}\n\n.mdi-chess-knight::before {\n  content: \"\\F857\";\n}\n\n.mdi-chess-pawn::before {\n  content: \"\\F858\";\n}\n\n.mdi-chess-queen::before {\n  content: \"\\F859\";\n}\n\n.mdi-chess-rook::before {\n  content: \"\\F85A\";\n}\n\n.mdi-chevron-double-down::before {\n  content: \"\\F13C\";\n}\n\n.mdi-chevron-double-left::before {\n  content: \"\\F13D\";\n}\n\n.mdi-chevron-double-right::before {\n  content: \"\\F13E\";\n}\n\n.mdi-chevron-double-up::before {\n  content: \"\\F13F\";\n}\n\n.mdi-chevron-down::before {\n  content: \"\\F140\";\n}\n\n.mdi-chevron-down-box::before {\n  content: \"\\F9D5\";\n}\n\n.mdi-chevron-down-box-outline::before {\n  content: \"\\F9D6\";\n}\n\n.mdi-chevron-down-circle::before {\n  content: \"\\FB0B\";\n}\n\n.mdi-chevron-down-circle-outline::before {\n  content: \"\\FB0C\";\n}\n\n.mdi-chevron-left::before {\n  content: \"\\F141\";\n}\n\n.mdi-chevron-left-box::before {\n  content: \"\\F9D7\";\n}\n\n.mdi-chevron-left-box-outline::before {\n  content: \"\\F9D8\";\n}\n\n.mdi-chevron-left-circle::before {\n  content: \"\\FB0D\";\n}\n\n.mdi-chevron-left-circle-outline::before {\n  content: \"\\FB0E\";\n}\n\n.mdi-chevron-right::before {\n  content: \"\\F142\";\n}\n\n.mdi-chevron-right-box::before {\n  content: \"\\F9D9\";\n}\n\n.mdi-chevron-right-box-outline::before {\n  content: \"\\F9DA\";\n}\n\n.mdi-chevron-right-circle::before {\n  content: \"\\FB0F\";\n}\n\n.mdi-chevron-right-circle-outline::before {\n  content: \"\\FB10\";\n}\n\n.mdi-chevron-triple-down::before {\n  content: \"\\FD95\";\n}\n\n.mdi-chevron-triple-left::before {\n  content: \"\\FD96\";\n}\n\n.mdi-chevron-triple-right::before {\n  content: \"\\FD97\";\n}\n\n.mdi-chevron-triple-up::before {\n  content: \"\\FD98\";\n}\n\n.mdi-chevron-up::before {\n  content: \"\\F143\";\n}\n\n.mdi-chevron-up-box::before {\n  content: \"\\F9DB\";\n}\n\n.mdi-chevron-up-box-outline::before {\n  content: \"\\F9DC\";\n}\n\n.mdi-chevron-up-circle::before {\n  content: \"\\FB11\";\n}\n\n.mdi-chevron-up-circle-outline::before {\n  content: \"\\FB12\";\n}\n\n.mdi-chili-hot::before {\n  content: \"\\F7B1\";\n}\n\n.mdi-chili-medium::before {\n  content: \"\\F7B2\";\n}\n\n.mdi-chili-mild::before {\n  content: \"\\F7B3\";\n}\n\n.mdi-chip::before {\n  content: \"\\F61A\";\n}\n\n.mdi-christianity::before {\n  content: \"\\F952\";\n}\n\n.mdi-christianity-outline::before {\n  content: \"\\FCD2\";\n}\n\n.mdi-church::before {\n  content: \"\\F144\";\n}\n\n.mdi-circle::before {\n  content: \"\\F764\";\n}\n\n.mdi-circle-double::before {\n  content: \"\\FEB2\";\n}\n\n.mdi-circle-edit-outline::before {\n  content: \"\\F8D4\";\n}\n\n.mdi-circle-expand::before {\n  content: \"\\FEB3\";\n}\n\n.mdi-circle-medium::before {\n  content: \"\\F9DD\";\n}\n\n.mdi-circle-outline::before {\n  content: \"\\F765\";\n}\n\n.mdi-circle-slice-1::before {\n  content: \"\\FA9D\";\n}\n\n.mdi-circle-slice-2::before {\n  content: \"\\FA9E\";\n}\n\n.mdi-circle-slice-3::before {\n  content: \"\\FA9F\";\n}\n\n.mdi-circle-slice-4::before {\n  content: \"\\FAA0\";\n}\n\n.mdi-circle-slice-5::before {\n  content: \"\\FAA1\";\n}\n\n.mdi-circle-slice-6::before {\n  content: \"\\FAA2\";\n}\n\n.mdi-circle-slice-7::before {\n  content: \"\\FAA3\";\n}\n\n.mdi-circle-slice-8::before {\n  content: \"\\FAA4\";\n}\n\n.mdi-circle-small::before {\n  content: \"\\F9DE\";\n}\n\n.mdi-circular-saw::before {\n  content: \"\\FE73\";\n}\n\n.mdi-cisco-webex::before {\n  content: \"\\F145\";\n}\n\n.mdi-city::before {\n  content: \"\\F146\";\n}\n\n.mdi-city-variant::before {\n  content: \"\\FA35\";\n}\n\n.mdi-city-variant-outline::before {\n  content: \"\\FA36\";\n}\n\n.mdi-clipboard::before {\n  content: \"\\F147\";\n}\n\n.mdi-clipboard-account::before {\n  content: \"\\F148\";\n}\n\n.mdi-clipboard-account-outline::before {\n  content: \"\\FC31\";\n}\n\n.mdi-clipboard-alert::before {\n  content: \"\\F149\";\n}\n\n.mdi-clipboard-alert-outline::before {\n  content: \"\\FCD3\";\n}\n\n.mdi-clipboard-arrow-down::before {\n  content: \"\\F14A\";\n}\n\n.mdi-clipboard-arrow-down-outline::before {\n  content: \"\\FC32\";\n}\n\n.mdi-clipboard-arrow-left::before {\n  content: \"\\F14B\";\n}\n\n.mdi-clipboard-arrow-left-outline::before {\n  content: \"\\FCD4\";\n}\n\n.mdi-clipboard-arrow-right::before {\n  content: \"\\FCD5\";\n}\n\n.mdi-clipboard-arrow-right-outline::before {\n  content: \"\\FCD6\";\n}\n\n.mdi-clipboard-arrow-up::before {\n  content: \"\\FC33\";\n}\n\n.mdi-clipboard-arrow-up-outline::before {\n  content: \"\\FC34\";\n}\n\n.mdi-clipboard-check::before {\n  content: \"\\F14C\";\n}\n\n.mdi-clipboard-check-outline::before {\n  content: \"\\F8A7\";\n}\n\n.mdi-clipboard-flow::before {\n  content: \"\\F6C7\";\n}\n\n.mdi-clipboard-outline::before {\n  content: \"\\F14D\";\n}\n\n.mdi-clipboard-play::before {\n  content: \"\\FC35\";\n}\n\n.mdi-clipboard-play-outline::before {\n  content: \"\\FC36\";\n}\n\n.mdi-clipboard-plus::before {\n  content: \"\\F750\";\n}\n\n.mdi-clipboard-pulse::before {\n  content: \"\\F85C\";\n}\n\n.mdi-clipboard-pulse-outline::before {\n  content: \"\\F85D\";\n}\n\n.mdi-clipboard-text::before {\n  content: \"\\F14E\";\n}\n\n.mdi-clipboard-text-outline::before {\n  content: \"\\FA37\";\n}\n\n.mdi-clipboard-text-play::before {\n  content: \"\\FC37\";\n}\n\n.mdi-clipboard-text-play-outline::before {\n  content: \"\\FC38\";\n}\n\n.mdi-clippy::before {\n  content: \"\\F14F\";\n}\n\n.mdi-clock::before {\n  content: \"\\F953\";\n}\n\n.mdi-clock-alert::before {\n  content: \"\\F954\";\n}\n\n.mdi-clock-alert-outline::before {\n  content: \"\\F5CE\";\n}\n\n.mdi-clock-check::before {\n  content: \"\\FFC8\";\n}\n\n.mdi-clock-check-outline::before {\n  content: \"\\FFC9\";\n}\n\n.mdi-clock-digital::before {\n  content: \"\\FEB4\";\n}\n\n.mdi-clock-end::before {\n  content: \"\\F151\";\n}\n\n.mdi-clock-fast::before {\n  content: \"\\F152\";\n}\n\n.mdi-clock-in::before {\n  content: \"\\F153\";\n}\n\n.mdi-clock-out::before {\n  content: \"\\F154\";\n}\n\n.mdi-clock-outline::before {\n  content: \"\\F150\";\n}\n\n.mdi-clock-start::before {\n  content: \"\\F155\";\n}\n\n.mdi-close::before {\n  content: \"\\F156\";\n}\n\n.mdi-close-box::before {\n  content: \"\\F157\";\n}\n\n.mdi-close-box-multiple::before {\n  content: \"\\FC39\";\n}\n\n.mdi-close-box-multiple-outline::before {\n  content: \"\\FC3A\";\n}\n\n.mdi-close-box-outline::before {\n  content: \"\\F158\";\n}\n\n.mdi-close-circle::before {\n  content: \"\\F159\";\n}\n\n.mdi-close-circle-outline::before {\n  content: \"\\F15A\";\n}\n\n.mdi-close-network::before {\n  content: \"\\F15B\";\n}\n\n.mdi-close-network-outline::before {\n  content: \"\\FC3B\";\n}\n\n.mdi-close-octagon::before {\n  content: \"\\F15C\";\n}\n\n.mdi-close-octagon-outline::before {\n  content: \"\\F15D\";\n}\n\n.mdi-close-outline::before {\n  content: \"\\F6C8\";\n}\n\n.mdi-closed-caption::before {\n  content: \"\\F15E\";\n}\n\n.mdi-closed-caption-outline::before {\n  content: \"\\FD99\";\n}\n\n.mdi-cloud::before {\n  content: \"\\F15F\";\n}\n\n.mdi-cloud-alert::before {\n  content: \"\\F9DF\";\n}\n\n.mdi-cloud-braces::before {\n  content: \"\\F7B4\";\n}\n\n.mdi-cloud-check::before {\n  content: \"\\F160\";\n}\n\n.mdi-cloud-circle::before {\n  content: \"\\F161\";\n}\n\n.mdi-cloud-download::before {\n  content: \"\\F162\";\n}\n\n.mdi-cloud-download-outline::before {\n  content: \"\\FB59\";\n}\n\n.mdi-cloud-off-outline::before {\n  content: \"\\F164\";\n}\n\n.mdi-cloud-outline::before {\n  content: \"\\F163\";\n}\n\n.mdi-cloud-print::before {\n  content: \"\\F165\";\n}\n\n.mdi-cloud-print-outline::before {\n  content: \"\\F166\";\n}\n\n.mdi-cloud-question::before {\n  content: \"\\FA38\";\n}\n\n.mdi-cloud-search::before {\n  content: \"\\F955\";\n}\n\n.mdi-cloud-search-outline::before {\n  content: \"\\F956\";\n}\n\n.mdi-cloud-sync::before {\n  content: \"\\F63F\";\n}\n\n.mdi-cloud-tags::before {\n  content: \"\\F7B5\";\n}\n\n.mdi-cloud-upload::before {\n  content: \"\\F167\";\n}\n\n.mdi-cloud-upload-outline::before {\n  content: \"\\FB5A\";\n}\n\n.mdi-clover::before {\n  content: \"\\F815\";\n}\n\n.mdi-coach-lamp::before {\n  content: \"\\F0042\";\n}\n\n.mdi-coat-rack::before {\n  content: \"\\F00C9\";\n}\n\n.mdi-code-array::before {\n  content: \"\\F168\";\n}\n\n.mdi-code-braces::before {\n  content: \"\\F169\";\n}\n\n.mdi-code-brackets::before {\n  content: \"\\F16A\";\n}\n\n.mdi-code-equal::before {\n  content: \"\\F16B\";\n}\n\n.mdi-code-greater-than::before {\n  content: \"\\F16C\";\n}\n\n.mdi-code-greater-than-or-equal::before {\n  content: \"\\F16D\";\n}\n\n.mdi-code-less-than::before {\n  content: \"\\F16E\";\n}\n\n.mdi-code-less-than-or-equal::before {\n  content: \"\\F16F\";\n}\n\n.mdi-code-not-equal::before {\n  content: \"\\F170\";\n}\n\n.mdi-code-not-equal-variant::before {\n  content: \"\\F171\";\n}\n\n.mdi-code-parentheses::before {\n  content: \"\\F172\";\n}\n\n.mdi-code-string::before {\n  content: \"\\F173\";\n}\n\n.mdi-code-tags::before {\n  content: \"\\F174\";\n}\n\n.mdi-code-tags-check::before {\n  content: \"\\F693\";\n}\n\n.mdi-codepen::before {\n  content: \"\\F175\";\n}\n\n.mdi-coffee::before {\n  content: \"\\F176\";\n}\n\n.mdi-coffee-maker::before {\n  content: \"\\F00CA\";\n}\n\n.mdi-coffee-off::before {\n  content: \"\\FFCA\";\n}\n\n.mdi-coffee-off-outline::before {\n  content: \"\\FFCB\";\n}\n\n.mdi-coffee-outline::before {\n  content: \"\\F6C9\";\n}\n\n.mdi-coffee-to-go::before {\n  content: \"\\F177\";\n}\n\n.mdi-coffin::before {\n  content: \"\\FB5B\";\n}\n\n.mdi-cogs::before {\n  content: \"\\F8D5\";\n}\n\n.mdi-coin-outline::before {\n  content: \"\\F178\";\n}\n\n.mdi-coins::before {\n  content: \"\\F694\";\n}\n\n.mdi-collage::before {\n  content: \"\\F640\";\n}\n\n.mdi-collapse-all::before {\n  content: \"\\FAA5\";\n}\n\n.mdi-collapse-all-outline::before {\n  content: \"\\FAA6\";\n}\n\n.mdi-color-helper::before {\n  content: \"\\F179\";\n}\n\n.mdi-comma::before {\n  content: \"\\FE74\";\n}\n\n.mdi-comma-box::before {\n  content: \"\\FE75\";\n}\n\n.mdi-comma-box-outline::before {\n  content: \"\\FE76\";\n}\n\n.mdi-comma-circle::before {\n  content: \"\\FE77\";\n}\n\n.mdi-comma-circle-outline::before {\n  content: \"\\FE78\";\n}\n\n.mdi-comment::before {\n  content: \"\\F17A\";\n}\n\n.mdi-comment-account::before {\n  content: \"\\F17B\";\n}\n\n.mdi-comment-account-outline::before {\n  content: \"\\F17C\";\n}\n\n.mdi-comment-alert::before {\n  content: \"\\F17D\";\n}\n\n.mdi-comment-alert-outline::before {\n  content: \"\\F17E\";\n}\n\n.mdi-comment-arrow-left::before {\n  content: \"\\F9E0\";\n}\n\n.mdi-comment-arrow-left-outline::before {\n  content: \"\\F9E1\";\n}\n\n.mdi-comment-arrow-right::before {\n  content: \"\\F9E2\";\n}\n\n.mdi-comment-arrow-right-outline::before {\n  content: \"\\F9E3\";\n}\n\n.mdi-comment-check::before {\n  content: \"\\F17F\";\n}\n\n.mdi-comment-check-outline::before {\n  content: \"\\F180\";\n}\n\n.mdi-comment-eye::before {\n  content: \"\\FA39\";\n}\n\n.mdi-comment-eye-outline::before {\n  content: \"\\FA3A\";\n}\n\n.mdi-comment-multiple::before {\n  content: \"\\F85E\";\n}\n\n.mdi-comment-multiple-outline::before {\n  content: \"\\F181\";\n}\n\n.mdi-comment-outline::before {\n  content: \"\\F182\";\n}\n\n.mdi-comment-plus::before {\n  content: \"\\F9E4\";\n}\n\n.mdi-comment-plus-outline::before {\n  content: \"\\F183\";\n}\n\n.mdi-comment-processing::before {\n  content: \"\\F184\";\n}\n\n.mdi-comment-processing-outline::before {\n  content: \"\\F185\";\n}\n\n.mdi-comment-question::before {\n  content: \"\\F816\";\n}\n\n.mdi-comment-question-outline::before {\n  content: \"\\F186\";\n}\n\n.mdi-comment-quote::before {\n  content: \"\\F0043\";\n}\n\n.mdi-comment-quote-outline::before {\n  content: \"\\F0044\";\n}\n\n.mdi-comment-remove::before {\n  content: \"\\F5DE\";\n}\n\n.mdi-comment-remove-outline::before {\n  content: \"\\F187\";\n}\n\n.mdi-comment-search::before {\n  content: \"\\FA3B\";\n}\n\n.mdi-comment-search-outline::before {\n  content: \"\\FA3C\";\n}\n\n.mdi-comment-text::before {\n  content: \"\\F188\";\n}\n\n.mdi-comment-text-multiple::before {\n  content: \"\\F85F\";\n}\n\n.mdi-comment-text-multiple-outline::before {\n  content: \"\\F860\";\n}\n\n.mdi-comment-text-outline::before {\n  content: \"\\F189\";\n}\n\n.mdi-compare::before {\n  content: \"\\F18A\";\n}\n\n.mdi-compass::before {\n  content: \"\\F18B\";\n}\n\n.mdi-compass-off::before {\n  content: \"\\FB5C\";\n}\n\n.mdi-compass-off-outline::before {\n  content: \"\\FB5D\";\n}\n\n.mdi-compass-outline::before {\n  content: \"\\F18C\";\n}\n\n.mdi-concourse-ci::before {\n  content: \"\\F00CB\";\n}\n\n.mdi-console::before {\n  content: \"\\F18D\";\n}\n\n.mdi-console-line::before {\n  content: \"\\F7B6\";\n}\n\n.mdi-console-network::before {\n  content: \"\\F8A8\";\n}\n\n.mdi-console-network-outline::before {\n  content: \"\\FC3C\";\n}\n\n.mdi-contact-mail::before {\n  content: \"\\F18E\";\n}\n\n.mdi-contact-mail-outline::before {\n  content: \"\\FEB5\";\n}\n\n.mdi-contact-phone::before {\n  content: \"\\FEB6\";\n}\n\n.mdi-contact-phone-outline::before {\n  content: \"\\FEB7\";\n}\n\n.mdi-contactless-payment::before {\n  content: \"\\FD46\";\n}\n\n.mdi-contacts::before {\n  content: \"\\F6CA\";\n}\n\n.mdi-contain::before {\n  content: \"\\FA3D\";\n}\n\n.mdi-contain-end::before {\n  content: \"\\FA3E\";\n}\n\n.mdi-contain-start::before {\n  content: \"\\FA3F\";\n}\n\n.mdi-content-copy::before {\n  content: \"\\F18F\";\n}\n\n.mdi-content-cut::before {\n  content: \"\\F190\";\n}\n\n.mdi-content-duplicate::before {\n  content: \"\\F191\";\n}\n\n.mdi-content-paste::before {\n  content: \"\\F192\";\n}\n\n.mdi-content-save::before {\n  content: \"\\F193\";\n}\n\n.mdi-content-save-alert::before {\n  content: \"\\FF5F\";\n}\n\n.mdi-content-save-alert-outline::before {\n  content: \"\\FF60\";\n}\n\n.mdi-content-save-all::before {\n  content: \"\\F194\";\n}\n\n.mdi-content-save-all-outline::before {\n  content: \"\\FF61\";\n}\n\n.mdi-content-save-edit::before {\n  content: \"\\FCD7\";\n}\n\n.mdi-content-save-edit-outline::before {\n  content: \"\\FCD8\";\n}\n\n.mdi-content-save-move::before {\n  content: \"\\FE79\";\n}\n\n.mdi-content-save-move-outline::before {\n  content: \"\\FE7A\";\n}\n\n.mdi-content-save-outline::before {\n  content: \"\\F817\";\n}\n\n.mdi-content-save-settings::before {\n  content: \"\\F61B\";\n}\n\n.mdi-content-save-settings-outline::before {\n  content: \"\\FB13\";\n}\n\n.mdi-contrast::before {\n  content: \"\\F195\";\n}\n\n.mdi-contrast-box::before {\n  content: \"\\F196\";\n}\n\n.mdi-contrast-circle::before {\n  content: \"\\F197\";\n}\n\n.mdi-controller-classic::before {\n  content: \"\\FB5E\";\n}\n\n.mdi-controller-classic-outline::before {\n  content: \"\\FB5F\";\n}\n\n.mdi-cookie::before {\n  content: \"\\F198\";\n}\n\n.mdi-coolant-temperature::before {\n  content: \"\\F3C8\";\n}\n\n.mdi-copyright::before {\n  content: \"\\F5E6\";\n}\n\n.mdi-cordova::before {\n  content: \"\\F957\";\n}\n\n.mdi-corn::before {\n  content: \"\\F7B7\";\n}\n\n.mdi-counter::before {\n  content: \"\\F199\";\n}\n\n.mdi-cow::before {\n  content: \"\\F19A\";\n}\n\n.mdi-cowboy::before {\n  content: \"\\FEB8\";\n}\n\n.mdi-cpu-32-bit::before {\n  content: \"\\FEFC\";\n}\n\n.mdi-cpu-64-bit::before {\n  content: \"\\FEFD\";\n}\n\n.mdi-crane::before {\n  content: \"\\F861\";\n}\n\n.mdi-creation::before {\n  content: \"\\F1C9\";\n}\n\n.mdi-creative-commons::before {\n  content: \"\\FD47\";\n}\n\n.mdi-credit-card::before {\n  content: \"\\F0010\";\n}\n\n.mdi-credit-card-clock::before {\n  content: \"\\FEFE\";\n}\n\n.mdi-credit-card-clock-outline::before {\n  content: \"\\FFBC\";\n}\n\n.mdi-credit-card-marker::before {\n  content: \"\\F6A7\";\n}\n\n.mdi-credit-card-marker-outline::before {\n  content: \"\\FD9A\";\n}\n\n.mdi-credit-card-minus::before {\n  content: \"\\FFCC\";\n}\n\n.mdi-credit-card-minus-outline::before {\n  content: \"\\FFCD\";\n}\n\n.mdi-credit-card-multiple::before {\n  content: \"\\F0011\";\n}\n\n.mdi-credit-card-multiple-outline::before {\n  content: \"\\F19C\";\n}\n\n.mdi-credit-card-off::before {\n  content: \"\\F0012\";\n}\n\n.mdi-credit-card-off-outline::before {\n  content: \"\\F5E4\";\n}\n\n.mdi-credit-card-outline::before {\n  content: \"\\F19B\";\n}\n\n.mdi-credit-card-plus::before {\n  content: \"\\F0013\";\n}\n\n.mdi-credit-card-plus-outline::before {\n  content: \"\\F675\";\n}\n\n.mdi-credit-card-refund::before {\n  content: \"\\F0014\";\n}\n\n.mdi-credit-card-refund-outline::before {\n  content: \"\\FAA7\";\n}\n\n.mdi-credit-card-remove::before {\n  content: \"\\FFCE\";\n}\n\n.mdi-credit-card-remove-outline::before {\n  content: \"\\FFCF\";\n}\n\n.mdi-credit-card-scan::before {\n  content: \"\\F0015\";\n}\n\n.mdi-credit-card-scan-outline::before {\n  content: \"\\F19D\";\n}\n\n.mdi-credit-card-settings::before {\n  content: \"\\F0016\";\n}\n\n.mdi-credit-card-settings-outline::before {\n  content: \"\\F8D6\";\n}\n\n.mdi-credit-card-wireless::before {\n  content: \"\\F801\";\n}\n\n.mdi-credit-card-wireless-outline::before {\n  content: \"\\FD48\";\n}\n\n.mdi-cricket::before {\n  content: \"\\FD49\";\n}\n\n.mdi-crop::before {\n  content: \"\\F19E\";\n}\n\n.mdi-crop-free::before {\n  content: \"\\F19F\";\n}\n\n.mdi-crop-landscape::before {\n  content: \"\\F1A0\";\n}\n\n.mdi-crop-portrait::before {\n  content: \"\\F1A1\";\n}\n\n.mdi-crop-rotate::before {\n  content: \"\\F695\";\n}\n\n.mdi-crop-square::before {\n  content: \"\\F1A2\";\n}\n\n.mdi-crosshairs::before {\n  content: \"\\F1A3\";\n}\n\n.mdi-crosshairs-gps::before {\n  content: \"\\F1A4\";\n}\n\n.mdi-crosshairs-off::before {\n  content: \"\\FF62\";\n}\n\n.mdi-crown::before {\n  content: \"\\F1A5\";\n}\n\n.mdi-cryengine::before {\n  content: \"\\F958\";\n}\n\n.mdi-crystal-ball::before {\n  content: \"\\FB14\";\n}\n\n.mdi-cube::before {\n  content: \"\\F1A6\";\n}\n\n.mdi-cube-outline::before {\n  content: \"\\F1A7\";\n}\n\n.mdi-cube-scan::before {\n  content: \"\\FB60\";\n}\n\n.mdi-cube-send::before {\n  content: \"\\F1A8\";\n}\n\n.mdi-cube-unfolded::before {\n  content: \"\\F1A9\";\n}\n\n.mdi-cup::before {\n  content: \"\\F1AA\";\n}\n\n.mdi-cup-off::before {\n  content: \"\\F5E5\";\n}\n\n.mdi-cup-water::before {\n  content: \"\\F1AB\";\n}\n\n.mdi-cupboard::before {\n  content: \"\\FF63\";\n}\n\n.mdi-cupboard-outline::before {\n  content: \"\\FF64\";\n}\n\n.mdi-cupcake::before {\n  content: \"\\F959\";\n}\n\n.mdi-curling::before {\n  content: \"\\F862\";\n}\n\n.mdi-currency-bdt::before {\n  content: \"\\F863\";\n}\n\n.mdi-currency-brl::before {\n  content: \"\\FB61\";\n}\n\n.mdi-currency-btc::before {\n  content: \"\\F1AC\";\n}\n\n.mdi-currency-cny::before {\n  content: \"\\F7B9\";\n}\n\n.mdi-currency-eth::before {\n  content: \"\\F7BA\";\n}\n\n.mdi-currency-eur::before {\n  content: \"\\F1AD\";\n}\n\n.mdi-currency-gbp::before {\n  content: \"\\F1AE\";\n}\n\n.mdi-currency-ils::before {\n  content: \"\\FC3D\";\n}\n\n.mdi-currency-inr::before {\n  content: \"\\F1AF\";\n}\n\n.mdi-currency-jpy::before {\n  content: \"\\F7BB\";\n}\n\n.mdi-currency-krw::before {\n  content: \"\\F7BC\";\n}\n\n.mdi-currency-kzt::before {\n  content: \"\\F864\";\n}\n\n.mdi-currency-ngn::before {\n  content: \"\\F1B0\";\n}\n\n.mdi-currency-php::before {\n  content: \"\\F9E5\";\n}\n\n.mdi-currency-rial::before {\n  content: \"\\FEB9\";\n}\n\n.mdi-currency-rub::before {\n  content: \"\\F1B1\";\n}\n\n.mdi-currency-sign::before {\n  content: \"\\F7BD\";\n}\n\n.mdi-currency-try::before {\n  content: \"\\F1B2\";\n}\n\n.mdi-currency-twd::before {\n  content: \"\\F7BE\";\n}\n\n.mdi-currency-usd::before {\n  content: \"\\F1B3\";\n}\n\n.mdi-currency-usd-off::before {\n  content: \"\\F679\";\n}\n\n.mdi-current-ac::before {\n  content: \"\\F95A\";\n}\n\n.mdi-current-dc::before {\n  content: \"\\F95B\";\n}\n\n.mdi-cursor-default::before {\n  content: \"\\F1B4\";\n}\n\n.mdi-cursor-default-click::before {\n  content: \"\\FCD9\";\n}\n\n.mdi-cursor-default-click-outline::before {\n  content: \"\\FCDA\";\n}\n\n.mdi-cursor-default-outline::before {\n  content: \"\\F1B5\";\n}\n\n.mdi-cursor-move::before {\n  content: \"\\F1B6\";\n}\n\n.mdi-cursor-pointer::before {\n  content: \"\\F1B7\";\n}\n\n.mdi-cursor-text::before {\n  content: \"\\F5E7\";\n}\n\n.mdi-database::before {\n  content: \"\\F1B8\";\n}\n\n.mdi-database-check::before {\n  content: \"\\FAA8\";\n}\n\n.mdi-database-edit::before {\n  content: \"\\FB62\";\n}\n\n.mdi-database-export::before {\n  content: \"\\F95D\";\n}\n\n.mdi-database-import::before {\n  content: \"\\F95C\";\n}\n\n.mdi-database-lock::before {\n  content: \"\\FAA9\";\n}\n\n.mdi-database-minus::before {\n  content: \"\\F1B9\";\n}\n\n.mdi-database-plus::before {\n  content: \"\\F1BA\";\n}\n\n.mdi-database-refresh::before {\n  content: \"\\FCDB\";\n}\n\n.mdi-database-remove::before {\n  content: \"\\FCDC\";\n}\n\n.mdi-database-search::before {\n  content: \"\\F865\";\n}\n\n.mdi-database-settings::before {\n  content: \"\\FCDD\";\n}\n\n.mdi-death-star::before {\n  content: \"\\F8D7\";\n}\n\n.mdi-death-star-variant::before {\n  content: \"\\F8D8\";\n}\n\n.mdi-deathly-hallows::before {\n  content: \"\\FB63\";\n}\n\n.mdi-debian::before {\n  content: \"\\F8D9\";\n}\n\n.mdi-debug-step-into::before {\n  content: \"\\F1BB\";\n}\n\n.mdi-debug-step-out::before {\n  content: \"\\F1BC\";\n}\n\n.mdi-debug-step-over::before {\n  content: \"\\F1BD\";\n}\n\n.mdi-decagram::before {\n  content: \"\\F76B\";\n}\n\n.mdi-decagram-outline::before {\n  content: \"\\F76C\";\n}\n\n.mdi-decimal::before {\n  content: \"\\F00CC\";\n}\n\n.mdi-decimal-comma::before {\n  content: \"\\F00CD\";\n}\n\n.mdi-decimal-comma-decrease::before {\n  content: \"\\F00CE\";\n}\n\n.mdi-decimal-comma-increase::before {\n  content: \"\\F00CF\";\n}\n\n.mdi-decimal-decrease::before {\n  content: \"\\F1BE\";\n}\n\n.mdi-decimal-increase::before {\n  content: \"\\F1BF\";\n}\n\n.mdi-delete::before {\n  content: \"\\F1C0\";\n}\n\n.mdi-delete-alert::before {\n  content: \"\\F00D0\";\n}\n\n.mdi-delete-alert-outline::before {\n  content: \"\\F00D1\";\n}\n\n.mdi-delete-circle::before {\n  content: \"\\F682\";\n}\n\n.mdi-delete-circle-outline::before {\n  content: \"\\FB64\";\n}\n\n.mdi-delete-empty::before {\n  content: \"\\F6CB\";\n}\n\n.mdi-delete-empty-outline::before {\n  content: \"\\FEBA\";\n}\n\n.mdi-delete-forever::before {\n  content: \"\\F5E8\";\n}\n\n.mdi-delete-forever-outline::before {\n  content: \"\\FB65\";\n}\n\n.mdi-delete-off::before {\n  content: \"\\F00D2\";\n}\n\n.mdi-delete-off-outline::before {\n  content: \"\\F00D3\";\n}\n\n.mdi-delete-outline::before {\n  content: \"\\F9E6\";\n}\n\n.mdi-delete-restore::before {\n  content: \"\\F818\";\n}\n\n.mdi-delete-sweep::before {\n  content: \"\\F5E9\";\n}\n\n.mdi-delete-sweep-outline::before {\n  content: \"\\FC3E\";\n}\n\n.mdi-delete-variant::before {\n  content: \"\\F1C1\";\n}\n\n.mdi-delta::before {\n  content: \"\\F1C2\";\n}\n\n.mdi-desk-lamp::before {\n  content: \"\\F95E\";\n}\n\n.mdi-deskphone::before {\n  content: \"\\F1C3\";\n}\n\n.mdi-desktop-classic::before {\n  content: \"\\F7BF\";\n}\n\n.mdi-desktop-mac::before {\n  content: \"\\F1C4\";\n}\n\n.mdi-desktop-mac-dashboard::before {\n  content: \"\\F9E7\";\n}\n\n.mdi-desktop-tower::before {\n  content: \"\\F1C5\";\n}\n\n.mdi-desktop-tower-monitor::before {\n  content: \"\\FAAA\";\n}\n\n.mdi-details::before {\n  content: \"\\F1C6\";\n}\n\n.mdi-dev-to::before {\n  content: \"\\FD4A\";\n}\n\n.mdi-developer-board::before {\n  content: \"\\F696\";\n}\n\n.mdi-deviantart::before {\n  content: \"\\F1C7\";\n}\n\n.mdi-devices::before {\n  content: \"\\FFD0\";\n}\n\n.mdi-dialpad::before {\n  content: \"\\F61C\";\n}\n\n.mdi-diameter::before {\n  content: \"\\FC3F\";\n}\n\n.mdi-diameter-outline::before {\n  content: \"\\FC40\";\n}\n\n.mdi-diameter-variant::before {\n  content: \"\\FC41\";\n}\n\n.mdi-diamond::before {\n  content: \"\\FB66\";\n}\n\n.mdi-diamond-outline::before {\n  content: \"\\FB67\";\n}\n\n.mdi-diamond-stone::before {\n  content: \"\\F1C8\";\n}\n\n.mdi-dice-1::before {\n  content: \"\\F1CA\";\n}\n\n.mdi-dice-2::before {\n  content: \"\\F1CB\";\n}\n\n.mdi-dice-3::before {\n  content: \"\\F1CC\";\n}\n\n.mdi-dice-4::before {\n  content: \"\\F1CD\";\n}\n\n.mdi-dice-5::before {\n  content: \"\\F1CE\";\n}\n\n.mdi-dice-6::before {\n  content: \"\\F1CF\";\n}\n\n.mdi-dice-d10-outline::before {\n  content: \"\\F76E\";\n}\n\n.mdi-dice-d12-outline::before {\n  content: \"\\F866\";\n}\n\n.mdi-dice-d20-outline::before {\n  content: \"\\F5EA\";\n}\n\n.mdi-dice-d4-outline::before {\n  content: \"\\F5EB\";\n}\n\n.mdi-dice-d6-outline::before {\n  content: \"\\F5EC\";\n}\n\n.mdi-dice-d8-outline::before {\n  content: \"\\F5ED\";\n}\n\n.mdi-dice-multiple::before {\n  content: \"\\F76D\";\n}\n\n.mdi-dictionary::before {\n  content: \"\\F61D\";\n}\n\n.mdi-dip-switch::before {\n  content: \"\\F7C0\";\n}\n\n.mdi-directions::before {\n  content: \"\\F1D0\";\n}\n\n.mdi-directions-fork::before {\n  content: \"\\F641\";\n}\n\n.mdi-disc::before {\n  content: \"\\F5EE\";\n}\n\n.mdi-disc-alert::before {\n  content: \"\\F1D1\";\n}\n\n.mdi-disc-player::before {\n  content: \"\\F95F\";\n}\n\n.mdi-discord::before {\n  content: \"\\F66F\";\n}\n\n.mdi-dishwasher::before {\n  content: \"\\FAAB\";\n}\n\n.mdi-disqus::before {\n  content: \"\\F1D2\";\n}\n\n.mdi-disqus-outline::before {\n  content: \"\\F1D3\";\n}\n\n.mdi-diving-flippers::before {\n  content: \"\\FD9B\";\n}\n\n.mdi-diving-helmet::before {\n  content: \"\\FD9C\";\n}\n\n.mdi-diving-scuba::before {\n  content: \"\\FD9D\";\n}\n\n.mdi-diving-scuba-flag::before {\n  content: \"\\FD9E\";\n}\n\n.mdi-diving-scuba-tank::before {\n  content: \"\\FD9F\";\n}\n\n.mdi-diving-scuba-tank-multiple::before {\n  content: \"\\FDA0\";\n}\n\n.mdi-diving-snorkel::before {\n  content: \"\\FDA1\";\n}\n\n.mdi-division::before {\n  content: \"\\F1D4\";\n}\n\n.mdi-division-box::before {\n  content: \"\\F1D5\";\n}\n\n.mdi-dlna::before {\n  content: \"\\FA40\";\n}\n\n.mdi-dna::before {\n  content: \"\\F683\";\n}\n\n.mdi-dns::before {\n  content: \"\\F1D6\";\n}\n\n.mdi-dns-outline::before {\n  content: \"\\FB68\";\n}\n\n.mdi-do-not-disturb::before {\n  content: \"\\F697\";\n}\n\n.mdi-do-not-disturb-off::before {\n  content: \"\\F698\";\n}\n\n.mdi-dock-bottom::before {\n  content: \"\\F00D4\";\n}\n\n.mdi-dock-left::before {\n  content: \"\\F00D5\";\n}\n\n.mdi-dock-right::before {\n  content: \"\\F00D6\";\n}\n\n.mdi-dock-window::before {\n  content: \"\\F00D7\";\n}\n\n.mdi-docker::before {\n  content: \"\\F867\";\n}\n\n.mdi-doctor::before {\n  content: \"\\FA41\";\n}\n\n.mdi-dog::before {\n  content: \"\\FA42\";\n}\n\n.mdi-dog-service::before {\n  content: \"\\FAAC\";\n}\n\n.mdi-dog-side::before {\n  content: \"\\FA43\";\n}\n\n.mdi-dolby::before {\n  content: \"\\F6B2\";\n}\n\n.mdi-dolly::before {\n  content: \"\\FEBB\";\n}\n\n.mdi-domain::before {\n  content: \"\\F1D7\";\n}\n\n.mdi-domain-off::before {\n  content: \"\\FD4B\";\n}\n\n.mdi-domain-plus::before {\n  content: \"\\F00D8\";\n}\n\n.mdi-domain-remove::before {\n  content: \"\\F00D9\";\n}\n\n.mdi-domino-mask::before {\n  content: \"\\F0045\";\n}\n\n.mdi-donkey::before {\n  content: \"\\F7C1\";\n}\n\n.mdi-door::before {\n  content: \"\\F819\";\n}\n\n.mdi-door-closed::before {\n  content: \"\\F81A\";\n}\n\n.mdi-door-closed-lock::before {\n  content: \"\\F00DA\";\n}\n\n.mdi-door-open::before {\n  content: \"\\F81B\";\n}\n\n.mdi-doorbell-video::before {\n  content: \"\\F868\";\n}\n\n.mdi-dot-net::before {\n  content: \"\\FAAD\";\n}\n\n.mdi-dots-horizontal::before {\n  content: \"\\F1D8\";\n}\n\n.mdi-dots-horizontal-circle::before {\n  content: \"\\F7C2\";\n}\n\n.mdi-dots-horizontal-circle-outline::before {\n  content: \"\\FB69\";\n}\n\n.mdi-dots-vertical::before {\n  content: \"\\F1D9\";\n}\n\n.mdi-dots-vertical-circle::before {\n  content: \"\\F7C3\";\n}\n\n.mdi-dots-vertical-circle-outline::before {\n  content: \"\\FB6A\";\n}\n\n.mdi-douban::before {\n  content: \"\\F699\";\n}\n\n.mdi-download::before {\n  content: \"\\F1DA\";\n}\n\n.mdi-download-multiple::before {\n  content: \"\\F9E8\";\n}\n\n.mdi-download-network::before {\n  content: \"\\F6F3\";\n}\n\n.mdi-download-network-outline::before {\n  content: \"\\FC42\";\n}\n\n.mdi-download-off::before {\n  content: \"\\F00DB\";\n}\n\n.mdi-download-off-outline::before {\n  content: \"\\F00DC\";\n}\n\n.mdi-download-outline::before {\n  content: \"\\FB6B\";\n}\n\n.mdi-drag::before {\n  content: \"\\F1DB\";\n}\n\n.mdi-drag-horizontal::before {\n  content: \"\\F1DC\";\n}\n\n.mdi-drag-variant::before {\n  content: \"\\FB6C\";\n}\n\n.mdi-drag-vertical::before {\n  content: \"\\F1DD\";\n}\n\n.mdi-drama-masks::before {\n  content: \"\\FCDE\";\n}\n\n.mdi-draw::before {\n  content: \"\\FF66\";\n}\n\n.mdi-drawing::before {\n  content: \"\\F1DE\";\n}\n\n.mdi-drawing-box::before {\n  content: \"\\F1DF\";\n}\n\n.mdi-dresser::before {\n  content: \"\\FF67\";\n}\n\n.mdi-dresser-outline::before {\n  content: \"\\FF68\";\n}\n\n.mdi-dribbble::before {\n  content: \"\\F1E0\";\n}\n\n.mdi-dribbble-box::before {\n  content: \"\\F1E1\";\n}\n\n.mdi-drone::before {\n  content: \"\\F1E2\";\n}\n\n.mdi-dropbox::before {\n  content: \"\\F1E3\";\n}\n\n.mdi-drupal::before {\n  content: \"\\F1E4\";\n}\n\n.mdi-duck::before {\n  content: \"\\F1E5\";\n}\n\n.mdi-dumbbell::before {\n  content: \"\\F1E6\";\n}\n\n.mdi-dump-truck::before {\n  content: \"\\FC43\";\n}\n\n.mdi-ear-hearing::before {\n  content: \"\\F7C4\";\n}\n\n.mdi-ear-hearing-off::before {\n  content: \"\\FA44\";\n}\n\n.mdi-earth::before {\n  content: \"\\F1E7\";\n}\n\n.mdi-earth-box::before {\n  content: \"\\F6CC\";\n}\n\n.mdi-earth-box-off::before {\n  content: \"\\F6CD\";\n}\n\n.mdi-earth-off::before {\n  content: \"\\F1E8\";\n}\n\n.mdi-edge::before {\n  content: \"\\F1E9\";\n}\n\n.mdi-egg::before {\n  content: \"\\FAAE\";\n}\n\n.mdi-egg-easter::before {\n  content: \"\\FAAF\";\n}\n\n.mdi-eight-track::before {\n  content: \"\\F9E9\";\n}\n\n.mdi-eject::before {\n  content: \"\\F1EA\";\n}\n\n.mdi-eject-outline::before {\n  content: \"\\FB6D\";\n}\n\n.mdi-electric-switch::before {\n  content: \"\\FEBC\";\n}\n\n.mdi-electron-framework::before {\n  content: \"\\F0046\";\n}\n\n.mdi-elephant::before {\n  content: \"\\F7C5\";\n}\n\n.mdi-elevation-decline::before {\n  content: \"\\F1EB\";\n}\n\n.mdi-elevation-rise::before {\n  content: \"\\F1EC\";\n}\n\n.mdi-elevator::before {\n  content: \"\\F1ED\";\n}\n\n.mdi-ellipse::before {\n  content: \"\\FEBD\";\n}\n\n.mdi-ellipse-outline::before {\n  content: \"\\FEBE\";\n}\n\n.mdi-email::before {\n  content: \"\\F1EE\";\n}\n\n.mdi-email-alert::before {\n  content: \"\\F6CE\";\n}\n\n.mdi-email-box::before {\n  content: \"\\FCDF\";\n}\n\n.mdi-email-check::before {\n  content: \"\\FAB0\";\n}\n\n.mdi-email-check-outline::before {\n  content: \"\\FAB1\";\n}\n\n.mdi-email-edit::before {\n  content: \"\\FF00\";\n}\n\n.mdi-email-edit-outline::before {\n  content: \"\\FF01\";\n}\n\n.mdi-email-lock::before {\n  content: \"\\F1F1\";\n}\n\n.mdi-email-mark-as-unread::before {\n  content: \"\\FB6E\";\n}\n\n.mdi-email-minus::before {\n  content: \"\\FF02\";\n}\n\n.mdi-email-minus-outline::before {\n  content: \"\\FF03\";\n}\n\n.mdi-email-multiple::before {\n  content: \"\\FF04\";\n}\n\n.mdi-email-multiple-outline::before {\n  content: \"\\FF05\";\n}\n\n.mdi-email-newsletter::before {\n  content: \"\\FFD1\";\n}\n\n.mdi-email-open::before {\n  content: \"\\F1EF\";\n}\n\n.mdi-email-open-multiple::before {\n  content: \"\\FF06\";\n}\n\n.mdi-email-open-multiple-outline::before {\n  content: \"\\FF07\";\n}\n\n.mdi-email-open-outline::before {\n  content: \"\\F5EF\";\n}\n\n.mdi-email-outline::before {\n  content: \"\\F1F0\";\n}\n\n.mdi-email-plus::before {\n  content: \"\\F9EA\";\n}\n\n.mdi-email-plus-outline::before {\n  content: \"\\F9EB\";\n}\n\n.mdi-email-search::before {\n  content: \"\\F960\";\n}\n\n.mdi-email-search-outline::before {\n  content: \"\\F961\";\n}\n\n.mdi-email-variant::before {\n  content: \"\\F5F0\";\n}\n\n.mdi-ember::before {\n  content: \"\\FB15\";\n}\n\n.mdi-emby::before {\n  content: \"\\F6B3\";\n}\n\n.mdi-emoticon::before {\n  content: \"\\FC44\";\n}\n\n.mdi-emoticon-angry::before {\n  content: \"\\FC45\";\n}\n\n.mdi-emoticon-angry-outline::before {\n  content: \"\\FC46\";\n}\n\n.mdi-emoticon-cool::before {\n  content: \"\\FC47\";\n}\n\n.mdi-emoticon-cool-outline::before {\n  content: \"\\F1F3\";\n}\n\n.mdi-emoticon-cry::before {\n  content: \"\\FC48\";\n}\n\n.mdi-emoticon-cry-outline::before {\n  content: \"\\FC49\";\n}\n\n.mdi-emoticon-dead::before {\n  content: \"\\FC4A\";\n}\n\n.mdi-emoticon-dead-outline::before {\n  content: \"\\F69A\";\n}\n\n.mdi-emoticon-devil::before {\n  content: \"\\FC4B\";\n}\n\n.mdi-emoticon-devil-outline::before {\n  content: \"\\F1F4\";\n}\n\n.mdi-emoticon-excited::before {\n  content: \"\\FC4C\";\n}\n\n.mdi-emoticon-excited-outline::before {\n  content: \"\\F69B\";\n}\n\n.mdi-emoticon-frown::before {\n  content: \"\\FF69\";\n}\n\n.mdi-emoticon-frown-outline::before {\n  content: \"\\FF6A\";\n}\n\n.mdi-emoticon-happy::before {\n  content: \"\\FC4D\";\n}\n\n.mdi-emoticon-happy-outline::before {\n  content: \"\\F1F5\";\n}\n\n.mdi-emoticon-kiss::before {\n  content: \"\\FC4E\";\n}\n\n.mdi-emoticon-kiss-outline::before {\n  content: \"\\FC4F\";\n}\n\n.mdi-emoticon-neutral::before {\n  content: \"\\FC50\";\n}\n\n.mdi-emoticon-neutral-outline::before {\n  content: \"\\F1F6\";\n}\n\n.mdi-emoticon-outline::before {\n  content: \"\\F1F2\";\n}\n\n.mdi-emoticon-poop::before {\n  content: \"\\F1F7\";\n}\n\n.mdi-emoticon-poop-outline::before {\n  content: \"\\FC51\";\n}\n\n.mdi-emoticon-sad::before {\n  content: \"\\FC52\";\n}\n\n.mdi-emoticon-sad-outline::before {\n  content: \"\\F1F8\";\n}\n\n.mdi-emoticon-tongue::before {\n  content: \"\\F1F9\";\n}\n\n.mdi-emoticon-tongue-outline::before {\n  content: \"\\FC53\";\n}\n\n.mdi-emoticon-wink::before {\n  content: \"\\FC54\";\n}\n\n.mdi-emoticon-wink-outline::before {\n  content: \"\\FC55\";\n}\n\n.mdi-engine::before {\n  content: \"\\F1FA\";\n}\n\n.mdi-engine-off::before {\n  content: \"\\FA45\";\n}\n\n.mdi-engine-off-outline::before {\n  content: \"\\FA46\";\n}\n\n.mdi-engine-outline::before {\n  content: \"\\F1FB\";\n}\n\n.mdi-equal::before {\n  content: \"\\F1FC\";\n}\n\n.mdi-equal-box::before {\n  content: \"\\F1FD\";\n}\n\n.mdi-equalizer::before {\n  content: \"\\FEBF\";\n}\n\n.mdi-equalizer-outline::before {\n  content: \"\\FEC0\";\n}\n\n.mdi-eraser::before {\n  content: \"\\F1FE\";\n}\n\n.mdi-eraser-variant::before {\n  content: \"\\F642\";\n}\n\n.mdi-escalator::before {\n  content: \"\\F1FF\";\n}\n\n.mdi-eslint::before {\n  content: \"\\FC56\";\n}\n\n.mdi-et::before {\n  content: \"\\FAB2\";\n}\n\n.mdi-ethereum::before {\n  content: \"\\F869\";\n}\n\n.mdi-ethernet::before {\n  content: \"\\F200\";\n}\n\n.mdi-ethernet-cable::before {\n  content: \"\\F201\";\n}\n\n.mdi-ethernet-cable-off::before {\n  content: \"\\F202\";\n}\n\n.mdi-etsy::before {\n  content: \"\\F203\";\n}\n\n.mdi-ev-station::before {\n  content: \"\\F5F1\";\n}\n\n.mdi-eventbrite::before {\n  content: \"\\F7C6\";\n}\n\n.mdi-evernote::before {\n  content: \"\\F204\";\n}\n\n.mdi-excavator::before {\n  content: \"\\F0047\";\n}\n\n.mdi-exclamation::before {\n  content: \"\\F205\";\n}\n\n.mdi-exit-run::before {\n  content: \"\\FA47\";\n}\n\n.mdi-exit-to-app::before {\n  content: \"\\F206\";\n}\n\n.mdi-expand-all::before {\n  content: \"\\FAB3\";\n}\n\n.mdi-expand-all-outline::before {\n  content: \"\\FAB4\";\n}\n\n.mdi-expansion-card::before {\n  content: \"\\F8AD\";\n}\n\n.mdi-expansion-card-variant::before {\n  content: \"\\FFD2\";\n}\n\n.mdi-exponent::before {\n  content: \"\\F962\";\n}\n\n.mdi-exponent-box::before {\n  content: \"\\F963\";\n}\n\n.mdi-export::before {\n  content: \"\\F207\";\n}\n\n.mdi-export-variant::before {\n  content: \"\\FB6F\";\n}\n\n.mdi-eye::before {\n  content: \"\\F208\";\n}\n\n.mdi-eye-check::before {\n  content: \"\\FCE0\";\n}\n\n.mdi-eye-check-outline::before {\n  content: \"\\FCE1\";\n}\n\n.mdi-eye-circle::before {\n  content: \"\\FB70\";\n}\n\n.mdi-eye-circle-outline::before {\n  content: \"\\FB71\";\n}\n\n.mdi-eye-minus::before {\n  content: \"\\F0048\";\n}\n\n.mdi-eye-minus-outline::before {\n  content: \"\\F0049\";\n}\n\n.mdi-eye-off::before {\n  content: \"\\F209\";\n}\n\n.mdi-eye-off-outline::before {\n  content: \"\\F6D0\";\n}\n\n.mdi-eye-outline::before {\n  content: \"\\F6CF\";\n}\n\n.mdi-eye-plus::before {\n  content: \"\\F86A\";\n}\n\n.mdi-eye-plus-outline::before {\n  content: \"\\F86B\";\n}\n\n.mdi-eye-settings::before {\n  content: \"\\F86C\";\n}\n\n.mdi-eye-settings-outline::before {\n  content: \"\\F86D\";\n}\n\n.mdi-eyedropper::before {\n  content: \"\\F20A\";\n}\n\n.mdi-eyedropper-variant::before {\n  content: \"\\F20B\";\n}\n\n.mdi-face::before {\n  content: \"\\F643\";\n}\n\n.mdi-face-agent::before {\n  content: \"\\FD4C\";\n}\n\n.mdi-face-outline::before {\n  content: \"\\FB72\";\n}\n\n.mdi-face-profile::before {\n  content: \"\\F644\";\n}\n\n.mdi-face-profile-woman::before {\n  content: \"\\F00A1\";\n}\n\n.mdi-face-recognition::before {\n  content: \"\\FC57\";\n}\n\n.mdi-face-woman::before {\n  content: \"\\F00A2\";\n}\n\n.mdi-face-woman-outline::before {\n  content: \"\\F00A3\";\n}\n\n.mdi-facebook::before {\n  content: \"\\F20C\";\n}\n\n.mdi-facebook-box::before {\n  content: \"\\F20D\";\n}\n\n.mdi-facebook-messenger::before {\n  content: \"\\F20E\";\n}\n\n.mdi-facebook-workplace::before {\n  content: \"\\FB16\";\n}\n\n.mdi-factory::before {\n  content: \"\\F20F\";\n}\n\n.mdi-fan::before {\n  content: \"\\F210\";\n}\n\n.mdi-fan-off::before {\n  content: \"\\F81C\";\n}\n\n.mdi-fast-forward::before {\n  content: \"\\F211\";\n}\n\n.mdi-fast-forward-10::before {\n  content: \"\\FD4D\";\n}\n\n.mdi-fast-forward-30::before {\n  content: \"\\FCE2\";\n}\n\n.mdi-fast-forward-outline::before {\n  content: \"\\F6D1\";\n}\n\n.mdi-fax::before {\n  content: \"\\F212\";\n}\n\n.mdi-feather::before {\n  content: \"\\F6D2\";\n}\n\n.mdi-feature-search::before {\n  content: \"\\FA48\";\n}\n\n.mdi-feature-search-outline::before {\n  content: \"\\FA49\";\n}\n\n.mdi-fedora::before {\n  content: \"\\F8DA\";\n}\n\n.mdi-ferris-wheel::before {\n  content: \"\\FEC1\";\n}\n\n.mdi-ferry::before {\n  content: \"\\F213\";\n}\n\n.mdi-file::before {\n  content: \"\\F214\";\n}\n\n.mdi-file-account::before {\n  content: \"\\F73A\";\n}\n\n.mdi-file-account-outline::before {\n  content: \"\\F004A\";\n}\n\n.mdi-file-alert::before {\n  content: \"\\FA4A\";\n}\n\n.mdi-file-alert-outline::before {\n  content: \"\\FA4B\";\n}\n\n.mdi-file-cabinet::before {\n  content: \"\\FAB5\";\n}\n\n.mdi-file-cad::before {\n  content: \"\\FF08\";\n}\n\n.mdi-file-cad-box::before {\n  content: \"\\FF09\";\n}\n\n.mdi-file-cancel::before {\n  content: \"\\FDA2\";\n}\n\n.mdi-file-cancel-outline::before {\n  content: \"\\FDA3\";\n}\n\n.mdi-file-chart::before {\n  content: \"\\F215\";\n}\n\n.mdi-file-chart-outline::before {\n  content: \"\\F004B\";\n}\n\n.mdi-file-check::before {\n  content: \"\\F216\";\n}\n\n.mdi-file-check-outline::before {\n  content: \"\\FE7B\";\n}\n\n.mdi-file-cloud::before {\n  content: \"\\F217\";\n}\n\n.mdi-file-cloud-outline::before {\n  content: \"\\F004C\";\n}\n\n.mdi-file-code::before {\n  content: \"\\F22E\";\n}\n\n.mdi-file-code-outline::before {\n  content: \"\\F004D\";\n}\n\n.mdi-file-compare::before {\n  content: \"\\F8A9\";\n}\n\n.mdi-file-delimited::before {\n  content: \"\\F218\";\n}\n\n.mdi-file-delimited-outline::before {\n  content: \"\\FEC2\";\n}\n\n.mdi-file-document::before {\n  content: \"\\F219\";\n}\n\n.mdi-file-document-box::before {\n  content: \"\\F21A\";\n}\n\n.mdi-file-document-box-check::before {\n  content: \"\\FEC3\";\n}\n\n.mdi-file-document-box-check-outline::before {\n  content: \"\\FEC4\";\n}\n\n.mdi-file-document-box-minus::before {\n  content: \"\\FEC5\";\n}\n\n.mdi-file-document-box-minus-outline::before {\n  content: \"\\FEC6\";\n}\n\n.mdi-file-document-box-multiple::before {\n  content: \"\\FAB6\";\n}\n\n.mdi-file-document-box-multiple-outline::before {\n  content: \"\\FAB7\";\n}\n\n.mdi-file-document-box-outline::before {\n  content: \"\\F9EC\";\n}\n\n.mdi-file-document-box-plus::before {\n  content: \"\\FEC7\";\n}\n\n.mdi-file-document-box-plus-outline::before {\n  content: \"\\FEC8\";\n}\n\n.mdi-file-document-box-remove::before {\n  content: \"\\FEC9\";\n}\n\n.mdi-file-document-box-remove-outline::before {\n  content: \"\\FECA\";\n}\n\n.mdi-file-document-box-search::before {\n  content: \"\\FECB\";\n}\n\n.mdi-file-document-box-search-outline::before {\n  content: \"\\FECC\";\n}\n\n.mdi-file-document-edit::before {\n  content: \"\\FDA4\";\n}\n\n.mdi-file-document-edit-outline::before {\n  content: \"\\FDA5\";\n}\n\n.mdi-file-document-outline::before {\n  content: \"\\F9ED\";\n}\n\n.mdi-file-download::before {\n  content: \"\\F964\";\n}\n\n.mdi-file-download-outline::before {\n  content: \"\\F965\";\n}\n\n.mdi-file-excel::before {\n  content: \"\\F21B\";\n}\n\n.mdi-file-excel-box::before {\n  content: \"\\F21C\";\n}\n\n.mdi-file-excel-box-outline::before {\n  content: \"\\F004E\";\n}\n\n.mdi-file-excel-outline::before {\n  content: \"\\F004F\";\n}\n\n.mdi-file-export::before {\n  content: \"\\F21D\";\n}\n\n.mdi-file-export-outline::before {\n  content: \"\\F0050\";\n}\n\n.mdi-file-eye::before {\n  content: \"\\FDA6\";\n}\n\n.mdi-file-eye-outline::before {\n  content: \"\\FDA7\";\n}\n\n.mdi-file-find::before {\n  content: \"\\F21E\";\n}\n\n.mdi-file-find-outline::before {\n  content: \"\\FB73\";\n}\n\n.mdi-file-hidden::before {\n  content: \"\\F613\";\n}\n\n.mdi-file-image::before {\n  content: \"\\F21F\";\n}\n\n.mdi-file-image-outline::before {\n  content: \"\\FECD\";\n}\n\n.mdi-file-import::before {\n  content: \"\\F220\";\n}\n\n.mdi-file-import-outline::before {\n  content: \"\\F0051\";\n}\n\n.mdi-file-lock::before {\n  content: \"\\F221\";\n}\n\n.mdi-file-lock-outline::before {\n  content: \"\\F0052\";\n}\n\n.mdi-file-move::before {\n  content: \"\\FAB8\";\n}\n\n.mdi-file-move-outline::before {\n  content: \"\\F0053\";\n}\n\n.mdi-file-multiple::before {\n  content: \"\\F222\";\n}\n\n.mdi-file-multiple-outline::before {\n  content: \"\\F0054\";\n}\n\n.mdi-file-music::before {\n  content: \"\\F223\";\n}\n\n.mdi-file-music-outline::before {\n  content: \"\\FE7C\";\n}\n\n.mdi-file-outline::before {\n  content: \"\\F224\";\n}\n\n.mdi-file-pdf::before {\n  content: \"\\F225\";\n}\n\n.mdi-file-pdf-box::before {\n  content: \"\\F226\";\n}\n\n.mdi-file-pdf-box-outline::before {\n  content: \"\\FFD3\";\n}\n\n.mdi-file-pdf-outline::before {\n  content: \"\\FE7D\";\n}\n\n.mdi-file-percent::before {\n  content: \"\\F81D\";\n}\n\n.mdi-file-percent-outline::before {\n  content: \"\\F0055\";\n}\n\n.mdi-file-plus::before {\n  content: \"\\F751\";\n}\n\n.mdi-file-plus-outline::before {\n  content: \"\\FF0A\";\n}\n\n.mdi-file-powerpoint::before {\n  content: \"\\F227\";\n}\n\n.mdi-file-powerpoint-box::before {\n  content: \"\\F228\";\n}\n\n.mdi-file-powerpoint-box-outline::before {\n  content: \"\\F0056\";\n}\n\n.mdi-file-powerpoint-outline::before {\n  content: \"\\F0057\";\n}\n\n.mdi-file-presentation-box::before {\n  content: \"\\F229\";\n}\n\n.mdi-file-question::before {\n  content: \"\\F86E\";\n}\n\n.mdi-file-question-outline::before {\n  content: \"\\F0058\";\n}\n\n.mdi-file-remove::before {\n  content: \"\\FB74\";\n}\n\n.mdi-file-remove-outline::before {\n  content: \"\\F0059\";\n}\n\n.mdi-file-replace::before {\n  content: \"\\FB17\";\n}\n\n.mdi-file-replace-outline::before {\n  content: \"\\FB18\";\n}\n\n.mdi-file-restore::before {\n  content: \"\\F670\";\n}\n\n.mdi-file-restore-outline::before {\n  content: \"\\F005A\";\n}\n\n.mdi-file-search::before {\n  content: \"\\FC58\";\n}\n\n.mdi-file-search-outline::before {\n  content: \"\\FC59\";\n}\n\n.mdi-file-send::before {\n  content: \"\\F22A\";\n}\n\n.mdi-file-send-outline::before {\n  content: \"\\F005B\";\n}\n\n.mdi-file-settings::before {\n  content: \"\\F00A4\";\n}\n\n.mdi-file-settings-outline::before {\n  content: \"\\F00A5\";\n}\n\n.mdi-file-settings-variant::before {\n  content: \"\\F00A6\";\n}\n\n.mdi-file-settings-variant-outline::before {\n  content: \"\\F00A7\";\n}\n\n.mdi-file-star::before {\n  content: \"\\F005C\";\n}\n\n.mdi-file-star-outline::before {\n  content: \"\\F005D\";\n}\n\n.mdi-file-swap::before {\n  content: \"\\FFD4\";\n}\n\n.mdi-file-swap-outline::before {\n  content: \"\\FFD5\";\n}\n\n.mdi-file-table::before {\n  content: \"\\FC5A\";\n}\n\n.mdi-file-table-outline::before {\n  content: \"\\FC5B\";\n}\n\n.mdi-file-tree::before {\n  content: \"\\F645\";\n}\n\n.mdi-file-undo::before {\n  content: \"\\F8DB\";\n}\n\n.mdi-file-undo-outline::before {\n  content: \"\\F005E\";\n}\n\n.mdi-file-upload::before {\n  content: \"\\FA4C\";\n}\n\n.mdi-file-upload-outline::before {\n  content: \"\\FA4D\";\n}\n\n.mdi-file-video::before {\n  content: \"\\F22B\";\n}\n\n.mdi-file-video-outline::before {\n  content: \"\\FE10\";\n}\n\n.mdi-file-word::before {\n  content: \"\\F22C\";\n}\n\n.mdi-file-word-box::before {\n  content: \"\\F22D\";\n}\n\n.mdi-file-word-box-outline::before {\n  content: \"\\F005F\";\n}\n\n.mdi-file-word-outline::before {\n  content: \"\\F0060\";\n}\n\n.mdi-film::before {\n  content: \"\\F22F\";\n}\n\n.mdi-filmstrip::before {\n  content: \"\\F230\";\n}\n\n.mdi-filmstrip-off::before {\n  content: \"\\F231\";\n}\n\n.mdi-filter::before {\n  content: \"\\F232\";\n}\n\n.mdi-filter-minus::before {\n  content: \"\\FF0B\";\n}\n\n.mdi-filter-minus-outline::before {\n  content: \"\\FF0C\";\n}\n\n.mdi-filter-outline::before {\n  content: \"\\F233\";\n}\n\n.mdi-filter-plus::before {\n  content: \"\\FF0D\";\n}\n\n.mdi-filter-plus-outline::before {\n  content: \"\\FF0E\";\n}\n\n.mdi-filter-remove::before {\n  content: \"\\F234\";\n}\n\n.mdi-filter-remove-outline::before {\n  content: \"\\F235\";\n}\n\n.mdi-filter-variant::before {\n  content: \"\\F236\";\n}\n\n.mdi-filter-variant-remove::before {\n  content: \"\\F0061\";\n}\n\n.mdi-finance::before {\n  content: \"\\F81E\";\n}\n\n.mdi-find-replace::before {\n  content: \"\\F6D3\";\n}\n\n.mdi-fingerprint::before {\n  content: \"\\F237\";\n}\n\n.mdi-fingerprint-off::before {\n  content: \"\\FECE\";\n}\n\n.mdi-fire::before {\n  content: \"\\F238\";\n}\n\n.mdi-fire-extinguisher::before {\n  content: \"\\FF0F\";\n}\n\n.mdi-fire-truck::before {\n  content: \"\\F8AA\";\n}\n\n.mdi-firebase::before {\n  content: \"\\F966\";\n}\n\n.mdi-firefox::before {\n  content: \"\\F239\";\n}\n\n.mdi-fireplace::before {\n  content: \"\\FE11\";\n}\n\n.mdi-fireplace-off::before {\n  content: \"\\FE12\";\n}\n\n.mdi-firework::before {\n  content: \"\\FE13\";\n}\n\n.mdi-fish::before {\n  content: \"\\F23A\";\n}\n\n.mdi-fishbowl::before {\n  content: \"\\FF10\";\n}\n\n.mdi-fishbowl-outline::before {\n  content: \"\\FF11\";\n}\n\n.mdi-fit-to-page::before {\n  content: \"\\FF12\";\n}\n\n.mdi-fit-to-page-outline::before {\n  content: \"\\FF13\";\n}\n\n.mdi-flag::before {\n  content: \"\\F23B\";\n}\n\n.mdi-flag-checkered::before {\n  content: \"\\F23C\";\n}\n\n.mdi-flag-minus::before {\n  content: \"\\FB75\";\n}\n\n.mdi-flag-minus-outline::before {\n  content: \"\\F00DD\";\n}\n\n.mdi-flag-outline::before {\n  content: \"\\F23D\";\n}\n\n.mdi-flag-plus::before {\n  content: \"\\FB76\";\n}\n\n.mdi-flag-plus-outline::before {\n  content: \"\\F00DE\";\n}\n\n.mdi-flag-remove::before {\n  content: \"\\FB77\";\n}\n\n.mdi-flag-remove-outline::before {\n  content: \"\\F00DF\";\n}\n\n.mdi-flag-triangle::before {\n  content: \"\\F23F\";\n}\n\n.mdi-flag-variant::before {\n  content: \"\\F240\";\n}\n\n.mdi-flag-variant-outline::before {\n  content: \"\\F23E\";\n}\n\n.mdi-flare::before {\n  content: \"\\FD4E\";\n}\n\n.mdi-flash::before {\n  content: \"\\F241\";\n}\n\n.mdi-flash-alert::before {\n  content: \"\\FF14\";\n}\n\n.mdi-flash-alert-outline::before {\n  content: \"\\FF15\";\n}\n\n.mdi-flash-auto::before {\n  content: \"\\F242\";\n}\n\n.mdi-flash-circle::before {\n  content: \"\\F81F\";\n}\n\n.mdi-flash-off::before {\n  content: \"\\F243\";\n}\n\n.mdi-flash-outline::before {\n  content: \"\\F6D4\";\n}\n\n.mdi-flash-red-eye::before {\n  content: \"\\F67A\";\n}\n\n.mdi-flashlight::before {\n  content: \"\\F244\";\n}\n\n.mdi-flashlight-off::before {\n  content: \"\\F245\";\n}\n\n.mdi-flask::before {\n  content: \"\\F093\";\n}\n\n.mdi-flask-empty::before {\n  content: \"\\F094\";\n}\n\n.mdi-flask-empty-outline::before {\n  content: \"\\F095\";\n}\n\n.mdi-flask-outline::before {\n  content: \"\\F096\";\n}\n\n.mdi-flattr::before {\n  content: \"\\F246\";\n}\n\n.mdi-flickr::before {\n  content: \"\\FCE3\";\n}\n\n.mdi-flip-to-back::before {\n  content: \"\\F247\";\n}\n\n.mdi-flip-to-front::before {\n  content: \"\\F248\";\n}\n\n.mdi-floor-lamp::before {\n  content: \"\\F8DC\";\n}\n\n.mdi-floor-lamp-dual::before {\n  content: \"\\F0062\";\n}\n\n.mdi-floor-lamp-variant::before {\n  content: \"\\F0063\";\n}\n\n.mdi-floor-plan::before {\n  content: \"\\F820\";\n}\n\n.mdi-floppy::before {\n  content: \"\\F249\";\n}\n\n.mdi-floppy-variant::before {\n  content: \"\\F9EE\";\n}\n\n.mdi-flower::before {\n  content: \"\\F24A\";\n}\n\n.mdi-flower-outline::before {\n  content: \"\\F9EF\";\n}\n\n.mdi-flower-poppy::before {\n  content: \"\\FCE4\";\n}\n\n.mdi-flower-tulip::before {\n  content: \"\\F9F0\";\n}\n\n.mdi-flower-tulip-outline::before {\n  content: \"\\F9F1\";\n}\n\n.mdi-focus-auto::before {\n  content: \"\\FF6B\";\n}\n\n.mdi-focus-field::before {\n  content: \"\\FF6C\";\n}\n\n.mdi-focus-field-horizontal::before {\n  content: \"\\FF6D\";\n}\n\n.mdi-focus-field-vertical::before {\n  content: \"\\FF6E\";\n}\n\n.mdi-folder::before {\n  content: \"\\F24B\";\n}\n\n.mdi-folder-account::before {\n  content: \"\\F24C\";\n}\n\n.mdi-folder-account-outline::before {\n  content: \"\\FB78\";\n}\n\n.mdi-folder-alert::before {\n  content: \"\\FDA8\";\n}\n\n.mdi-folder-alert-outline::before {\n  content: \"\\FDA9\";\n}\n\n.mdi-folder-clock::before {\n  content: \"\\FAB9\";\n}\n\n.mdi-folder-clock-outline::before {\n  content: \"\\FABA\";\n}\n\n.mdi-folder-download::before {\n  content: \"\\F24D\";\n}\n\n.mdi-folder-edit::before {\n  content: \"\\F8DD\";\n}\n\n.mdi-folder-edit-outline::before {\n  content: \"\\FDAA\";\n}\n\n.mdi-folder-google-drive::before {\n  content: \"\\F24E\";\n}\n\n.mdi-folder-home::before {\n  content: \"\\F00E0\";\n}\n\n.mdi-folder-home-outline::before {\n  content: \"\\F00E1\";\n}\n\n.mdi-folder-image::before {\n  content: \"\\F24F\";\n}\n\n.mdi-folder-information::before {\n  content: \"\\F00E2\";\n}\n\n.mdi-folder-information-outline::before {\n  content: \"\\F00E3\";\n}\n\n.mdi-folder-key::before {\n  content: \"\\F8AB\";\n}\n\n.mdi-folder-key-network::before {\n  content: \"\\F8AC\";\n}\n\n.mdi-folder-key-network-outline::before {\n  content: \"\\FC5C\";\n}\n\n.mdi-folder-lock::before {\n  content: \"\\F250\";\n}\n\n.mdi-folder-lock-open::before {\n  content: \"\\F251\";\n}\n\n.mdi-folder-move::before {\n  content: \"\\F252\";\n}\n\n.mdi-folder-multiple::before {\n  content: \"\\F253\";\n}\n\n.mdi-folder-multiple-image::before {\n  content: \"\\F254\";\n}\n\n.mdi-folder-multiple-outline::before {\n  content: \"\\F255\";\n}\n\n.mdi-folder-network::before {\n  content: \"\\F86F\";\n}\n\n.mdi-folder-network-outline::before {\n  content: \"\\FC5D\";\n}\n\n.mdi-folder-open::before {\n  content: \"\\F76F\";\n}\n\n.mdi-folder-open-outline::before {\n  content: \"\\FDAB\";\n}\n\n.mdi-folder-outline::before {\n  content: \"\\F256\";\n}\n\n.mdi-folder-plus::before {\n  content: \"\\F257\";\n}\n\n.mdi-folder-plus-outline::before {\n  content: \"\\FB79\";\n}\n\n.mdi-folder-pound::before {\n  content: \"\\FCE5\";\n}\n\n.mdi-folder-pound-outline::before {\n  content: \"\\FCE6\";\n}\n\n.mdi-folder-remove::before {\n  content: \"\\F258\";\n}\n\n.mdi-folder-remove-outline::before {\n  content: \"\\FB7A\";\n}\n\n.mdi-folder-search::before {\n  content: \"\\F967\";\n}\n\n.mdi-folder-search-outline::before {\n  content: \"\\F968\";\n}\n\n.mdi-folder-settings::before {\n  content: \"\\F00A8\";\n}\n\n.mdi-folder-settings-outline::before {\n  content: \"\\F00A9\";\n}\n\n.mdi-folder-settings-variant::before {\n  content: \"\\F00AA\";\n}\n\n.mdi-folder-settings-variant-outline::before {\n  content: \"\\F00AB\";\n}\n\n.mdi-folder-star::before {\n  content: \"\\F69C\";\n}\n\n.mdi-folder-star-outline::before {\n  content: \"\\FB7B\";\n}\n\n.mdi-folder-swap::before {\n  content: \"\\FFD6\";\n}\n\n.mdi-folder-swap-outline::before {\n  content: \"\\FFD7\";\n}\n\n.mdi-folder-sync::before {\n  content: \"\\FCE7\";\n}\n\n.mdi-folder-sync-outline::before {\n  content: \"\\FCE8\";\n}\n\n.mdi-folder-text::before {\n  content: \"\\FC5E\";\n}\n\n.mdi-folder-text-outline::before {\n  content: \"\\FC5F\";\n}\n\n.mdi-folder-upload::before {\n  content: \"\\F259\";\n}\n\n.mdi-folder-zip::before {\n  content: \"\\F6EA\";\n}\n\n.mdi-folder-zip-outline::before {\n  content: \"\\F7B8\";\n}\n\n.mdi-font-awesome::before {\n  content: \"\\F03A\";\n}\n\n.mdi-food::before {\n  content: \"\\F25A\";\n}\n\n.mdi-food-apple::before {\n  content: \"\\F25B\";\n}\n\n.mdi-food-apple-outline::before {\n  content: \"\\FC60\";\n}\n\n.mdi-food-croissant::before {\n  content: \"\\F7C7\";\n}\n\n.mdi-food-fork-drink::before {\n  content: \"\\F5F2\";\n}\n\n.mdi-food-off::before {\n  content: \"\\F5F3\";\n}\n\n.mdi-food-variant::before {\n  content: \"\\F25C\";\n}\n\n.mdi-foot-print::before {\n  content: \"\\FF6F\";\n}\n\n.mdi-football::before {\n  content: \"\\F25D\";\n}\n\n.mdi-football-australian::before {\n  content: \"\\F25E\";\n}\n\n.mdi-football-helmet::before {\n  content: \"\\F25F\";\n}\n\n.mdi-forklift::before {\n  content: \"\\F7C8\";\n}\n\n.mdi-format-align-bottom::before {\n  content: \"\\F752\";\n}\n\n.mdi-format-align-center::before {\n  content: \"\\F260\";\n}\n\n.mdi-format-align-justify::before {\n  content: \"\\F261\";\n}\n\n.mdi-format-align-left::before {\n  content: \"\\F262\";\n}\n\n.mdi-format-align-middle::before {\n  content: \"\\F753\";\n}\n\n.mdi-format-align-right::before {\n  content: \"\\F263\";\n}\n\n.mdi-format-align-top::before {\n  content: \"\\F754\";\n}\n\n.mdi-format-annotation-minus::before {\n  content: \"\\FABB\";\n}\n\n.mdi-format-annotation-plus::before {\n  content: \"\\F646\";\n}\n\n.mdi-format-bold::before {\n  content: \"\\F264\";\n}\n\n.mdi-format-clear::before {\n  content: \"\\F265\";\n}\n\n.mdi-format-color-fill::before {\n  content: \"\\F266\";\n}\n\n.mdi-format-color-highlight::before {\n  content: \"\\FE14\";\n}\n\n.mdi-format-color-text::before {\n  content: \"\\F69D\";\n}\n\n.mdi-format-columns::before {\n  content: \"\\F8DE\";\n}\n\n.mdi-format-float-center::before {\n  content: \"\\F267\";\n}\n\n.mdi-format-float-left::before {\n  content: \"\\F268\";\n}\n\n.mdi-format-float-none::before {\n  content: \"\\F269\";\n}\n\n.mdi-format-float-right::before {\n  content: \"\\F26A\";\n}\n\n.mdi-format-font::before {\n  content: \"\\F6D5\";\n}\n\n.mdi-format-font-size-decrease::before {\n  content: \"\\F9F2\";\n}\n\n.mdi-format-font-size-increase::before {\n  content: \"\\F9F3\";\n}\n\n.mdi-format-header-1::before {\n  content: \"\\F26B\";\n}\n\n.mdi-format-header-2::before {\n  content: \"\\F26C\";\n}\n\n.mdi-format-header-3::before {\n  content: \"\\F26D\";\n}\n\n.mdi-format-header-4::before {\n  content: \"\\F26E\";\n}\n\n.mdi-format-header-5::before {\n  content: \"\\F26F\";\n}\n\n.mdi-format-header-6::before {\n  content: \"\\F270\";\n}\n\n.mdi-format-header-decrease::before {\n  content: \"\\F271\";\n}\n\n.mdi-format-header-equal::before {\n  content: \"\\F272\";\n}\n\n.mdi-format-header-increase::before {\n  content: \"\\F273\";\n}\n\n.mdi-format-header-pound::before {\n  content: \"\\F274\";\n}\n\n.mdi-format-horizontal-align-center::before {\n  content: \"\\F61E\";\n}\n\n.mdi-format-horizontal-align-left::before {\n  content: \"\\F61F\";\n}\n\n.mdi-format-horizontal-align-right::before {\n  content: \"\\F620\";\n}\n\n.mdi-format-indent-decrease::before {\n  content: \"\\F275\";\n}\n\n.mdi-format-indent-increase::before {\n  content: \"\\F276\";\n}\n\n.mdi-format-italic::before {\n  content: \"\\F277\";\n}\n\n.mdi-format-letter-case::before {\n  content: \"\\FB19\";\n}\n\n.mdi-format-letter-case-lower::before {\n  content: \"\\FB1A\";\n}\n\n.mdi-format-letter-case-upper::before {\n  content: \"\\FB1B\";\n}\n\n.mdi-format-letter-ends-with::before {\n  content: \"\\FFD8\";\n}\n\n.mdi-format-letter-matches::before {\n  content: \"\\FFD9\";\n}\n\n.mdi-format-letter-starts-with::before {\n  content: \"\\FFDA\";\n}\n\n.mdi-format-line-spacing::before {\n  content: \"\\F278\";\n}\n\n.mdi-format-line-style::before {\n  content: \"\\F5C8\";\n}\n\n.mdi-format-line-weight::before {\n  content: \"\\F5C9\";\n}\n\n.mdi-format-list-bulleted::before {\n  content: \"\\F279\";\n}\n\n.mdi-format-list-bulleted-square::before {\n  content: \"\\FDAC\";\n}\n\n.mdi-format-list-bulleted-triangle::before {\n  content: \"\\FECF\";\n}\n\n.mdi-format-list-bulleted-type::before {\n  content: \"\\F27A\";\n}\n\n.mdi-format-list-checkbox::before {\n  content: \"\\F969\";\n}\n\n.mdi-format-list-checks::before {\n  content: \"\\F755\";\n}\n\n.mdi-format-list-numbered::before {\n  content: \"\\F27B\";\n}\n\n.mdi-format-list-numbered-rtl::before {\n  content: \"\\FCE9\";\n}\n\n.mdi-format-overline::before {\n  content: \"\\FED0\";\n}\n\n.mdi-format-page-break::before {\n  content: \"\\F6D6\";\n}\n\n.mdi-format-paint::before {\n  content: \"\\F27C\";\n}\n\n.mdi-format-paragraph::before {\n  content: \"\\F27D\";\n}\n\n.mdi-format-pilcrow::before {\n  content: \"\\F6D7\";\n}\n\n.mdi-format-quote-close::before {\n  content: \"\\F27E\";\n}\n\n.mdi-format-quote-open::before {\n  content: \"\\F756\";\n}\n\n.mdi-format-rotate-90::before {\n  content: \"\\F6A9\";\n}\n\n.mdi-format-section::before {\n  content: \"\\F69E\";\n}\n\n.mdi-format-size::before {\n  content: \"\\F27F\";\n}\n\n.mdi-format-strikethrough::before {\n  content: \"\\F280\";\n}\n\n.mdi-format-strikethrough-variant::before {\n  content: \"\\F281\";\n}\n\n.mdi-format-subscript::before {\n  content: \"\\F282\";\n}\n\n.mdi-format-superscript::before {\n  content: \"\\F283\";\n}\n\n.mdi-format-text::before {\n  content: \"\\F284\";\n}\n\n.mdi-format-text-rotation-angle-down::before {\n  content: \"\\FFDB\";\n}\n\n.mdi-format-text-rotation-angle-up::before {\n  content: \"\\FFDC\";\n}\n\n.mdi-format-text-rotation-down::before {\n  content: \"\\FD4F\";\n}\n\n.mdi-format-text-rotation-down-vertical::before {\n  content: \"\\FFDD\";\n}\n\n.mdi-format-text-rotation-none::before {\n  content: \"\\FD50\";\n}\n\n.mdi-format-text-rotation-up::before {\n  content: \"\\FFDE\";\n}\n\n.mdi-format-text-rotation-vertical::before {\n  content: \"\\FFDF\";\n}\n\n.mdi-format-text-variant::before {\n  content: \"\\FE15\";\n}\n\n.mdi-format-text-wrapping-clip::before {\n  content: \"\\FCEA\";\n}\n\n.mdi-format-text-wrapping-overflow::before {\n  content: \"\\FCEB\";\n}\n\n.mdi-format-text-wrapping-wrap::before {\n  content: \"\\FCEC\";\n}\n\n.mdi-format-textbox::before {\n  content: \"\\FCED\";\n}\n\n.mdi-format-textdirection-l-to-r::before {\n  content: \"\\F285\";\n}\n\n.mdi-format-textdirection-r-to-l::before {\n  content: \"\\F286\";\n}\n\n.mdi-format-title::before {\n  content: \"\\F5F4\";\n}\n\n.mdi-format-underline::before {\n  content: \"\\F287\";\n}\n\n.mdi-format-vertical-align-bottom::before {\n  content: \"\\F621\";\n}\n\n.mdi-format-vertical-align-center::before {\n  content: \"\\F622\";\n}\n\n.mdi-format-vertical-align-top::before {\n  content: \"\\F623\";\n}\n\n.mdi-format-wrap-inline::before {\n  content: \"\\F288\";\n}\n\n.mdi-format-wrap-square::before {\n  content: \"\\F289\";\n}\n\n.mdi-format-wrap-tight::before {\n  content: \"\\F28A\";\n}\n\n.mdi-format-wrap-top-bottom::before {\n  content: \"\\F28B\";\n}\n\n.mdi-forum::before {\n  content: \"\\F28C\";\n}\n\n.mdi-forum-outline::before {\n  content: \"\\F821\";\n}\n\n.mdi-forward::before {\n  content: \"\\F28D\";\n}\n\n.mdi-forwardburger::before {\n  content: \"\\FD51\";\n}\n\n.mdi-fountain::before {\n  content: \"\\F96A\";\n}\n\n.mdi-fountain-pen::before {\n  content: \"\\FCEE\";\n}\n\n.mdi-fountain-pen-tip::before {\n  content: \"\\FCEF\";\n}\n\n.mdi-foursquare::before {\n  content: \"\\F28E\";\n}\n\n.mdi-freebsd::before {\n  content: \"\\F8DF\";\n}\n\n.mdi-frequently-asked-questions::before {\n  content: \"\\FED1\";\n}\n\n.mdi-fridge::before {\n  content: \"\\F290\";\n}\n\n.mdi-fridge-bottom::before {\n  content: \"\\F292\";\n}\n\n.mdi-fridge-outline::before {\n  content: \"\\F28F\";\n}\n\n.mdi-fridge-top::before {\n  content: \"\\F291\";\n}\n\n.mdi-fruit-cherries::before {\n  content: \"\\F0064\";\n}\n\n.mdi-fruit-citrus::before {\n  content: \"\\F0065\";\n}\n\n.mdi-fruit-grapes::before {\n  content: \"\\F0066\";\n}\n\n.mdi-fruit-grapes-outline::before {\n  content: \"\\F0067\";\n}\n\n.mdi-fruit-pineapple::before {\n  content: \"\\F0068\";\n}\n\n.mdi-fruit-watermelon::before {\n  content: \"\\F0069\";\n}\n\n.mdi-fuel::before {\n  content: \"\\F7C9\";\n}\n\n.mdi-fullscreen::before {\n  content: \"\\F293\";\n}\n\n.mdi-fullscreen-exit::before {\n  content: \"\\F294\";\n}\n\n.mdi-function::before {\n  content: \"\\F295\";\n}\n\n.mdi-function-variant::before {\n  content: \"\\F870\";\n}\n\n.mdi-furigana-horizontal::before {\n  content: \"\\F00AC\";\n}\n\n.mdi-furigana-vertical::before {\n  content: \"\\F00AD\";\n}\n\n.mdi-fuse::before {\n  content: \"\\FC61\";\n}\n\n.mdi-fuse-blade::before {\n  content: \"\\FC62\";\n}\n\n.mdi-gamepad::before {\n  content: \"\\F296\";\n}\n\n.mdi-gamepad-circle::before {\n  content: \"\\FE16\";\n}\n\n.mdi-gamepad-circle-down::before {\n  content: \"\\FE17\";\n}\n\n.mdi-gamepad-circle-left::before {\n  content: \"\\FE18\";\n}\n\n.mdi-gamepad-circle-outline::before {\n  content: \"\\FE19\";\n}\n\n.mdi-gamepad-circle-right::before {\n  content: \"\\FE1A\";\n}\n\n.mdi-gamepad-circle-up::before {\n  content: \"\\FE1B\";\n}\n\n.mdi-gamepad-down::before {\n  content: \"\\FE1C\";\n}\n\n.mdi-gamepad-left::before {\n  content: \"\\FE1D\";\n}\n\n.mdi-gamepad-right::before {\n  content: \"\\FE1E\";\n}\n\n.mdi-gamepad-round::before {\n  content: \"\\FE1F\";\n}\n\n.mdi-gamepad-round-down::before {\n  content: \"\\FE7E\";\n}\n\n.mdi-gamepad-round-left::before {\n  content: \"\\FE7F\";\n}\n\n.mdi-gamepad-round-outline::before {\n  content: \"\\FE80\";\n}\n\n.mdi-gamepad-round-right::before {\n  content: \"\\FE81\";\n}\n\n.mdi-gamepad-round-up::before {\n  content: \"\\FE82\";\n}\n\n.mdi-gamepad-square::before {\n  content: \"\\FED2\";\n}\n\n.mdi-gamepad-square-outline::before {\n  content: \"\\FED3\";\n}\n\n.mdi-gamepad-up::before {\n  content: \"\\FE83\";\n}\n\n.mdi-gamepad-variant::before {\n  content: \"\\F297\";\n}\n\n.mdi-gamepad-variant-outline::before {\n  content: \"\\FED4\";\n}\n\n.mdi-gantry-crane::before {\n  content: \"\\FDAD\";\n}\n\n.mdi-garage::before {\n  content: \"\\F6D8\";\n}\n\n.mdi-garage-alert::before {\n  content: \"\\F871\";\n}\n\n.mdi-garage-open::before {\n  content: \"\\F6D9\";\n}\n\n.mdi-gas-cylinder::before {\n  content: \"\\F647\";\n}\n\n.mdi-gas-station::before {\n  content: \"\\F298\";\n}\n\n.mdi-gas-station-outline::before {\n  content: \"\\FED5\";\n}\n\n.mdi-gate::before {\n  content: \"\\F299\";\n}\n\n.mdi-gate-and::before {\n  content: \"\\F8E0\";\n}\n\n.mdi-gate-nand::before {\n  content: \"\\F8E1\";\n}\n\n.mdi-gate-nor::before {\n  content: \"\\F8E2\";\n}\n\n.mdi-gate-not::before {\n  content: \"\\F8E3\";\n}\n\n.mdi-gate-or::before {\n  content: \"\\F8E4\";\n}\n\n.mdi-gate-xnor::before {\n  content: \"\\F8E5\";\n}\n\n.mdi-gate-xor::before {\n  content: \"\\F8E6\";\n}\n\n.mdi-gatsby::before {\n  content: \"\\FE84\";\n}\n\n.mdi-gauge::before {\n  content: \"\\F29A\";\n}\n\n.mdi-gauge-empty::before {\n  content: \"\\F872\";\n}\n\n.mdi-gauge-full::before {\n  content: \"\\F873\";\n}\n\n.mdi-gauge-low::before {\n  content: \"\\F874\";\n}\n\n.mdi-gavel::before {\n  content: \"\\F29B\";\n}\n\n.mdi-gender-female::before {\n  content: \"\\F29C\";\n}\n\n.mdi-gender-male::before {\n  content: \"\\F29D\";\n}\n\n.mdi-gender-male-female::before {\n  content: \"\\F29E\";\n}\n\n.mdi-gender-transgender::before {\n  content: \"\\F29F\";\n}\n\n.mdi-gentoo::before {\n  content: \"\\F8E7\";\n}\n\n.mdi-gesture::before {\n  content: \"\\F7CA\";\n}\n\n.mdi-gesture-double-tap::before {\n  content: \"\\F73B\";\n}\n\n.mdi-gesture-pinch::before {\n  content: \"\\FABC\";\n}\n\n.mdi-gesture-spread::before {\n  content: \"\\FABD\";\n}\n\n.mdi-gesture-swipe::before {\n  content: \"\\FD52\";\n}\n\n.mdi-gesture-swipe-down::before {\n  content: \"\\F73C\";\n}\n\n.mdi-gesture-swipe-horizontal::before {\n  content: \"\\FABE\";\n}\n\n.mdi-gesture-swipe-left::before {\n  content: \"\\F73D\";\n}\n\n.mdi-gesture-swipe-right::before {\n  content: \"\\F73E\";\n}\n\n.mdi-gesture-swipe-up::before {\n  content: \"\\F73F\";\n}\n\n.mdi-gesture-swipe-vertical::before {\n  content: \"\\FABF\";\n}\n\n.mdi-gesture-tap::before {\n  content: \"\\F740\";\n}\n\n.mdi-gesture-tap-hold::before {\n  content: \"\\FD53\";\n}\n\n.mdi-gesture-two-double-tap::before {\n  content: \"\\F741\";\n}\n\n.mdi-gesture-two-tap::before {\n  content: \"\\F742\";\n}\n\n.mdi-ghost::before {\n  content: \"\\F2A0\";\n}\n\n.mdi-ghost-off::before {\n  content: \"\\F9F4\";\n}\n\n.mdi-gif::before {\n  content: \"\\FD54\";\n}\n\n.mdi-gift::before {\n  content: \"\\FE85\";\n}\n\n.mdi-gift-outline::before {\n  content: \"\\F2A1\";\n}\n\n.mdi-git::before {\n  content: \"\\F2A2\";\n}\n\n.mdi-github-box::before {\n  content: \"\\F2A3\";\n}\n\n.mdi-github-circle::before {\n  content: \"\\F2A4\";\n}\n\n.mdi-github-face::before {\n  content: \"\\F6DA\";\n}\n\n.mdi-gitlab::before {\n  content: \"\\FB7C\";\n}\n\n.mdi-glass-cocktail::before {\n  content: \"\\F356\";\n}\n\n.mdi-glass-flute::before {\n  content: \"\\F2A5\";\n}\n\n.mdi-glass-mug::before {\n  content: \"\\F2A6\";\n}\n\n.mdi-glass-stange::before {\n  content: \"\\F2A7\";\n}\n\n.mdi-glass-tulip::before {\n  content: \"\\F2A8\";\n}\n\n.mdi-glass-wine::before {\n  content: \"\\F875\";\n}\n\n.mdi-glassdoor::before {\n  content: \"\\F2A9\";\n}\n\n.mdi-glasses::before {\n  content: \"\\F2AA\";\n}\n\n.mdi-globe-model::before {\n  content: \"\\F8E8\";\n}\n\n.mdi-gmail::before {\n  content: \"\\F2AB\";\n}\n\n.mdi-gnome::before {\n  content: \"\\F2AC\";\n}\n\n.mdi-go-kart::before {\n  content: \"\\FD55\";\n}\n\n.mdi-go-kart-track::before {\n  content: \"\\FD56\";\n}\n\n.mdi-gog::before {\n  content: \"\\FB7D\";\n}\n\n.mdi-golf::before {\n  content: \"\\F822\";\n}\n\n.mdi-golf-tee::before {\n  content: \"\\F00AE\";\n}\n\n.mdi-gondola::before {\n  content: \"\\F685\";\n}\n\n.mdi-goodreads::before {\n  content: \"\\FD57\";\n}\n\n.mdi-google::before {\n  content: \"\\F2AD\";\n}\n\n.mdi-google-adwords::before {\n  content: \"\\FC63\";\n}\n\n.mdi-google-analytics::before {\n  content: \"\\F7CB\";\n}\n\n.mdi-google-assistant::before {\n  content: \"\\F7CC\";\n}\n\n.mdi-google-cardboard::before {\n  content: \"\\F2AE\";\n}\n\n.mdi-google-chrome::before {\n  content: \"\\F2AF\";\n}\n\n.mdi-google-circles::before {\n  content: \"\\F2B0\";\n}\n\n.mdi-google-circles-communities::before {\n  content: \"\\F2B1\";\n}\n\n.mdi-google-circles-extended::before {\n  content: \"\\F2B2\";\n}\n\n.mdi-google-circles-group::before {\n  content: \"\\F2B3\";\n}\n\n.mdi-google-classroom::before {\n  content: \"\\F2C0\";\n}\n\n.mdi-google-controller::before {\n  content: \"\\F2B4\";\n}\n\n.mdi-google-controller-off::before {\n  content: \"\\F2B5\";\n}\n\n.mdi-google-drive::before {\n  content: \"\\F2B6\";\n}\n\n.mdi-google-earth::before {\n  content: \"\\F2B7\";\n}\n\n.mdi-google-fit::before {\n  content: \"\\F96B\";\n}\n\n.mdi-google-glass::before {\n  content: \"\\F2B8\";\n}\n\n.mdi-google-hangouts::before {\n  content: \"\\F2C9\";\n}\n\n.mdi-google-home::before {\n  content: \"\\F823\";\n}\n\n.mdi-google-keep::before {\n  content: \"\\F6DB\";\n}\n\n.mdi-google-lens::before {\n  content: \"\\F9F5\";\n}\n\n.mdi-google-maps::before {\n  content: \"\\F5F5\";\n}\n\n.mdi-google-my-business::before {\n  content: \"\\F006A\";\n}\n\n.mdi-google-nearby::before {\n  content: \"\\F2B9\";\n}\n\n.mdi-google-pages::before {\n  content: \"\\F2BA\";\n}\n\n.mdi-google-photos::before {\n  content: \"\\F6DC\";\n}\n\n.mdi-google-physical-web::before {\n  content: \"\\F2BB\";\n}\n\n.mdi-google-play::before {\n  content: \"\\F2BC\";\n}\n\n.mdi-google-plus::before {\n  content: \"\\F2BD\";\n}\n\n.mdi-google-plus-box::before {\n  content: \"\\F2BE\";\n}\n\n.mdi-google-podcast::before {\n  content: \"\\FED6\";\n}\n\n.mdi-google-spreadsheet::before {\n  content: \"\\F9F6\";\n}\n\n.mdi-google-street-view::before {\n  content: \"\\FC64\";\n}\n\n.mdi-google-translate::before {\n  content: \"\\F2BF\";\n}\n\n.mdi-gradient::before {\n  content: \"\\F69F\";\n}\n\n.mdi-grain::before {\n  content: \"\\FD58\";\n}\n\n.mdi-graph::before {\n  content: \"\\F006B\";\n}\n\n.mdi-graph-outline::before {\n  content: \"\\F006C\";\n}\n\n.mdi-graphql::before {\n  content: \"\\F876\";\n}\n\n.mdi-grave-stone::before {\n  content: \"\\FB7E\";\n}\n\n.mdi-grease-pencil::before {\n  content: \"\\F648\";\n}\n\n.mdi-greater-than::before {\n  content: \"\\F96C\";\n}\n\n.mdi-greater-than-or-equal::before {\n  content: \"\\F96D\";\n}\n\n.mdi-grid::before {\n  content: \"\\F2C1\";\n}\n\n.mdi-grid-large::before {\n  content: \"\\F757\";\n}\n\n.mdi-grid-off::before {\n  content: \"\\F2C2\";\n}\n\n.mdi-grill::before {\n  content: \"\\FE86\";\n}\n\n.mdi-group::before {\n  content: \"\\F2C3\";\n}\n\n.mdi-guitar-acoustic::before {\n  content: \"\\F770\";\n}\n\n.mdi-guitar-electric::before {\n  content: \"\\F2C4\";\n}\n\n.mdi-guitar-pick::before {\n  content: \"\\F2C5\";\n}\n\n.mdi-guitar-pick-outline::before {\n  content: \"\\F2C6\";\n}\n\n.mdi-guy-fawkes-mask::before {\n  content: \"\\F824\";\n}\n\n.mdi-hackernews::before {\n  content: \"\\F624\";\n}\n\n.mdi-hail::before {\n  content: \"\\FAC0\";\n}\n\n.mdi-halloween::before {\n  content: \"\\FB7F\";\n}\n\n.mdi-hamburger::before {\n  content: \"\\F684\";\n}\n\n.mdi-hammer::before {\n  content: \"\\F8E9\";\n}\n\n.mdi-hand::before {\n  content: \"\\FA4E\";\n}\n\n.mdi-hand-left::before {\n  content: \"\\FE87\";\n}\n\n.mdi-hand-okay::before {\n  content: \"\\FA4F\";\n}\n\n.mdi-hand-peace::before {\n  content: \"\\FA50\";\n}\n\n.mdi-hand-peace-variant::before {\n  content: \"\\FA51\";\n}\n\n.mdi-hand-pointing-down::before {\n  content: \"\\FA52\";\n}\n\n.mdi-hand-pointing-left::before {\n  content: \"\\FA53\";\n}\n\n.mdi-hand-pointing-right::before {\n  content: \"\\F2C7\";\n}\n\n.mdi-hand-pointing-up::before {\n  content: \"\\FA54\";\n}\n\n.mdi-hand-right::before {\n  content: \"\\FE88\";\n}\n\n.mdi-hand-saw::before {\n  content: \"\\FE89\";\n}\n\n.mdi-handball::before {\n  content: \"\\FF70\";\n}\n\n.mdi-hanger::before {\n  content: \"\\F2C8\";\n}\n\n.mdi-hard-hat::before {\n  content: \"\\F96E\";\n}\n\n.mdi-harddisk::before {\n  content: \"\\F2CA\";\n}\n\n.mdi-harddisk-plus::before {\n  content: \"\\F006D\";\n}\n\n.mdi-harddisk-remove::before {\n  content: \"\\F006E\";\n}\n\n.mdi-hat-fedora::before {\n  content: \"\\FB80\";\n}\n\n.mdi-hazard-lights::before {\n  content: \"\\FC65\";\n}\n\n.mdi-hdr::before {\n  content: \"\\FD59\";\n}\n\n.mdi-hdr-off::before {\n  content: \"\\FD5A\";\n}\n\n.mdi-headphones::before {\n  content: \"\\F2CB\";\n}\n\n.mdi-headphones-bluetooth::before {\n  content: \"\\F96F\";\n}\n\n.mdi-headphones-box::before {\n  content: \"\\F2CC\";\n}\n\n.mdi-headphones-off::before {\n  content: \"\\F7CD\";\n}\n\n.mdi-headphones-settings::before {\n  content: \"\\F2CD\";\n}\n\n.mdi-headset::before {\n  content: \"\\F2CE\";\n}\n\n.mdi-headset-dock::before {\n  content: \"\\F2CF\";\n}\n\n.mdi-headset-off::before {\n  content: \"\\F2D0\";\n}\n\n.mdi-heart::before {\n  content: \"\\F2D1\";\n}\n\n.mdi-heart-box::before {\n  content: \"\\F2D2\";\n}\n\n.mdi-heart-box-outline::before {\n  content: \"\\F2D3\";\n}\n\n.mdi-heart-broken::before {\n  content: \"\\F2D4\";\n}\n\n.mdi-heart-broken-outline::before {\n  content: \"\\FCF0\";\n}\n\n.mdi-heart-circle::before {\n  content: \"\\F970\";\n}\n\n.mdi-heart-circle-outline::before {\n  content: \"\\F971\";\n}\n\n.mdi-heart-flash::before {\n  content: \"\\FF16\";\n}\n\n.mdi-heart-half::before {\n  content: \"\\F6DE\";\n}\n\n.mdi-heart-half-full::before {\n  content: \"\\F6DD\";\n}\n\n.mdi-heart-half-outline::before {\n  content: \"\\F6DF\";\n}\n\n.mdi-heart-multiple::before {\n  content: \"\\FA55\";\n}\n\n.mdi-heart-multiple-outline::before {\n  content: \"\\FA56\";\n}\n\n.mdi-heart-off::before {\n  content: \"\\F758\";\n}\n\n.mdi-heart-outline::before {\n  content: \"\\F2D5\";\n}\n\n.mdi-heart-pulse::before {\n  content: \"\\F5F6\";\n}\n\n.mdi-helicopter::before {\n  content: \"\\FAC1\";\n}\n\n.mdi-help::before {\n  content: \"\\F2D6\";\n}\n\n.mdi-help-box::before {\n  content: \"\\F78A\";\n}\n\n.mdi-help-circle::before {\n  content: \"\\F2D7\";\n}\n\n.mdi-help-circle-outline::before {\n  content: \"\\F625\";\n}\n\n.mdi-help-network::before {\n  content: \"\\F6F4\";\n}\n\n.mdi-help-network-outline::before {\n  content: \"\\FC66\";\n}\n\n.mdi-help-rhombus::before {\n  content: \"\\FB81\";\n}\n\n.mdi-help-rhombus-outline::before {\n  content: \"\\FB82\";\n}\n\n.mdi-hexagon::before {\n  content: \"\\F2D8\";\n}\n\n.mdi-hexagon-multiple::before {\n  content: \"\\F6E0\";\n}\n\n.mdi-hexagon-outline::before {\n  content: \"\\F2D9\";\n}\n\n.mdi-hexagon-slice-1::before {\n  content: \"\\FAC2\";\n}\n\n.mdi-hexagon-slice-2::before {\n  content: \"\\FAC3\";\n}\n\n.mdi-hexagon-slice-3::before {\n  content: \"\\FAC4\";\n}\n\n.mdi-hexagon-slice-4::before {\n  content: \"\\FAC5\";\n}\n\n.mdi-hexagon-slice-5::before {\n  content: \"\\FAC6\";\n}\n\n.mdi-hexagon-slice-6::before {\n  content: \"\\FAC7\";\n}\n\n.mdi-hexagram::before {\n  content: \"\\FAC8\";\n}\n\n.mdi-hexagram-outline::before {\n  content: \"\\FAC9\";\n}\n\n.mdi-high-definition::before {\n  content: \"\\F7CE\";\n}\n\n.mdi-high-definition-box::before {\n  content: \"\\F877\";\n}\n\n.mdi-highway::before {\n  content: \"\\F5F7\";\n}\n\n.mdi-hiking::before {\n  content: \"\\FD5B\";\n}\n\n.mdi-hinduism::before {\n  content: \"\\F972\";\n}\n\n.mdi-history::before {\n  content: \"\\F2DA\";\n}\n\n.mdi-hockey-puck::before {\n  content: \"\\F878\";\n}\n\n.mdi-hockey-sticks::before {\n  content: \"\\F879\";\n}\n\n.mdi-hololens::before {\n  content: \"\\F2DB\";\n}\n\n.mdi-home::before {\n  content: \"\\F2DC\";\n}\n\n.mdi-home-account::before {\n  content: \"\\F825\";\n}\n\n.mdi-home-alert::before {\n  content: \"\\F87A\";\n}\n\n.mdi-home-analytics::before {\n  content: \"\\FED7\";\n}\n\n.mdi-home-assistant::before {\n  content: \"\\F7CF\";\n}\n\n.mdi-home-automation::before {\n  content: \"\\F7D0\";\n}\n\n.mdi-home-circle::before {\n  content: \"\\F7D1\";\n}\n\n.mdi-home-circle-outline::before {\n  content: \"\\F006F\";\n}\n\n.mdi-home-city::before {\n  content: \"\\FCF1\";\n}\n\n.mdi-home-city-outline::before {\n  content: \"\\FCF2\";\n}\n\n.mdi-home-currency-usd::before {\n  content: \"\\F8AE\";\n}\n\n.mdi-home-export-outline::before {\n  content: \"\\FFB8\";\n}\n\n.mdi-home-flood::before {\n  content: \"\\FF17\";\n}\n\n.mdi-home-floor-0::before {\n  content: \"\\FDAE\";\n}\n\n.mdi-home-floor-1::before {\n  content: \"\\FD5C\";\n}\n\n.mdi-home-floor-2::before {\n  content: \"\\FD5D\";\n}\n\n.mdi-home-floor-3::before {\n  content: \"\\FD5E\";\n}\n\n.mdi-home-floor-a::before {\n  content: \"\\FD5F\";\n}\n\n.mdi-home-floor-b::before {\n  content: \"\\FD60\";\n}\n\n.mdi-home-floor-g::before {\n  content: \"\\FD61\";\n}\n\n.mdi-home-floor-l::before {\n  content: \"\\FD62\";\n}\n\n.mdi-home-floor-negative-1::before {\n  content: \"\\FDAF\";\n}\n\n.mdi-home-group::before {\n  content: \"\\FDB0\";\n}\n\n.mdi-home-heart::before {\n  content: \"\\F826\";\n}\n\n.mdi-home-import-outline::before {\n  content: \"\\FFB9\";\n}\n\n.mdi-home-lock::before {\n  content: \"\\F8EA\";\n}\n\n.mdi-home-lock-open::before {\n  content: \"\\F8EB\";\n}\n\n.mdi-home-map-marker::before {\n  content: \"\\F5F8\";\n}\n\n.mdi-home-minus::before {\n  content: \"\\F973\";\n}\n\n.mdi-home-modern::before {\n  content: \"\\F2DD\";\n}\n\n.mdi-home-outline::before {\n  content: \"\\F6A0\";\n}\n\n.mdi-home-plus::before {\n  content: \"\\F974\";\n}\n\n.mdi-home-thermometer::before {\n  content: \"\\FF71\";\n}\n\n.mdi-home-thermometer-outline::before {\n  content: \"\\FF72\";\n}\n\n.mdi-home-variant::before {\n  content: \"\\F2DE\";\n}\n\n.mdi-home-variant-outline::before {\n  content: \"\\FB83\";\n}\n\n.mdi-hook::before {\n  content: \"\\F6E1\";\n}\n\n.mdi-hook-off::before {\n  content: \"\\F6E2\";\n}\n\n.mdi-hops::before {\n  content: \"\\F2DF\";\n}\n\n.mdi-horseshoe::before {\n  content: \"\\FA57\";\n}\n\n.mdi-hospital::before {\n  content: \"\\F0017\";\n}\n\n.mdi-hospital-box::before {\n  content: \"\\F2E0\";\n}\n\n.mdi-hospital-box-outline::before {\n  content: \"\\F0018\";\n}\n\n.mdi-hospital-building::before {\n  content: \"\\F2E1\";\n}\n\n.mdi-hospital-marker::before {\n  content: \"\\F2E2\";\n}\n\n.mdi-hot-tub::before {\n  content: \"\\F827\";\n}\n\n.mdi-hotel::before {\n  content: \"\\F2E3\";\n}\n\n.mdi-houzz::before {\n  content: \"\\F2E4\";\n}\n\n.mdi-houzz-box::before {\n  content: \"\\F2E5\";\n}\n\n.mdi-hubspot::before {\n  content: \"\\FCF3\";\n}\n\n.mdi-hulu::before {\n  content: \"\\F828\";\n}\n\n.mdi-human::before {\n  content: \"\\F2E6\";\n}\n\n.mdi-human-child::before {\n  content: \"\\F2E7\";\n}\n\n.mdi-human-female::before {\n  content: \"\\F649\";\n}\n\n.mdi-human-female-boy::before {\n  content: \"\\FA58\";\n}\n\n.mdi-human-female-female::before {\n  content: \"\\FA59\";\n}\n\n.mdi-human-female-girl::before {\n  content: \"\\FA5A\";\n}\n\n.mdi-human-greeting::before {\n  content: \"\\F64A\";\n}\n\n.mdi-human-handsdown::before {\n  content: \"\\F64B\";\n}\n\n.mdi-human-handsup::before {\n  content: \"\\F64C\";\n}\n\n.mdi-human-male::before {\n  content: \"\\F64D\";\n}\n\n.mdi-human-male-boy::before {\n  content: \"\\FA5B\";\n}\n\n.mdi-human-male-female::before {\n  content: \"\\F2E8\";\n}\n\n.mdi-human-male-girl::before {\n  content: \"\\FA5C\";\n}\n\n.mdi-human-male-height::before {\n  content: \"\\FF18\";\n}\n\n.mdi-human-male-height-variant::before {\n  content: \"\\FF19\";\n}\n\n.mdi-human-male-male::before {\n  content: \"\\FA5D\";\n}\n\n.mdi-human-pregnant::before {\n  content: \"\\F5CF\";\n}\n\n.mdi-humble-bundle::before {\n  content: \"\\F743\";\n}\n\n.mdi-ice-cream::before {\n  content: \"\\F829\";\n}\n\n.mdi-ice-pop::before {\n  content: \"\\FF1A\";\n}\n\n.mdi-id-card::before {\n  content: \"\\FFE0\";\n}\n\n.mdi-identifier::before {\n  content: \"\\FF1B\";\n}\n\n.mdi-iframe::before {\n  content: \"\\FC67\";\n}\n\n.mdi-iframe-outline::before {\n  content: \"\\FC68\";\n}\n\n.mdi-image::before {\n  content: \"\\F2E9\";\n}\n\n.mdi-image-album::before {\n  content: \"\\F2EA\";\n}\n\n.mdi-image-area::before {\n  content: \"\\F2EB\";\n}\n\n.mdi-image-area-close::before {\n  content: \"\\F2EC\";\n}\n\n.mdi-image-auto-adjust::before {\n  content: \"\\FFE1\";\n}\n\n.mdi-image-broken::before {\n  content: \"\\F2ED\";\n}\n\n.mdi-image-broken-variant::before {\n  content: \"\\F2EE\";\n}\n\n.mdi-image-filter::before {\n  content: \"\\F2EF\";\n}\n\n.mdi-image-filter-black-white::before {\n  content: \"\\F2F0\";\n}\n\n.mdi-image-filter-center-focus::before {\n  content: \"\\F2F1\";\n}\n\n.mdi-image-filter-center-focus-strong::before {\n  content: \"\\FF1C\";\n}\n\n.mdi-image-filter-center-focus-strong-outline::before {\n  content: \"\\FF1D\";\n}\n\n.mdi-image-filter-center-focus-weak::before {\n  content: \"\\F2F2\";\n}\n\n.mdi-image-filter-drama::before {\n  content: \"\\F2F3\";\n}\n\n.mdi-image-filter-frames::before {\n  content: \"\\F2F4\";\n}\n\n.mdi-image-filter-hdr::before {\n  content: \"\\F2F5\";\n}\n\n.mdi-image-filter-none::before {\n  content: \"\\F2F6\";\n}\n\n.mdi-image-filter-tilt-shift::before {\n  content: \"\\F2F7\";\n}\n\n.mdi-image-filter-vintage::before {\n  content: \"\\F2F8\";\n}\n\n.mdi-image-frame::before {\n  content: \"\\FE8A\";\n}\n\n.mdi-image-move::before {\n  content: \"\\F9F7\";\n}\n\n.mdi-image-multiple::before {\n  content: \"\\F2F9\";\n}\n\n.mdi-image-off::before {\n  content: \"\\F82A\";\n}\n\n.mdi-image-outline::before {\n  content: \"\\F975\";\n}\n\n.mdi-image-plus::before {\n  content: \"\\F87B\";\n}\n\n.mdi-image-search::before {\n  content: \"\\F976\";\n}\n\n.mdi-image-search-outline::before {\n  content: \"\\F977\";\n}\n\n.mdi-image-size-select-actual::before {\n  content: \"\\FC69\";\n}\n\n.mdi-image-size-select-large::before {\n  content: \"\\FC6A\";\n}\n\n.mdi-image-size-select-small::before {\n  content: \"\\FC6B\";\n}\n\n.mdi-import::before {\n  content: \"\\F2FA\";\n}\n\n.mdi-inbox::before {\n  content: \"\\F686\";\n}\n\n.mdi-inbox-arrow-down::before {\n  content: \"\\F2FB\";\n}\n\n.mdi-inbox-arrow-up::before {\n  content: \"\\F3D1\";\n}\n\n.mdi-inbox-multiple::before {\n  content: \"\\F8AF\";\n}\n\n.mdi-inbox-multiple-outline::before {\n  content: \"\\FB84\";\n}\n\n.mdi-incognito::before {\n  content: \"\\F5F9\";\n}\n\n.mdi-infinity::before {\n  content: \"\\F6E3\";\n}\n\n.mdi-information::before {\n  content: \"\\F2FC\";\n}\n\n.mdi-information-outline::before {\n  content: \"\\F2FD\";\n}\n\n.mdi-information-variant::before {\n  content: \"\\F64E\";\n}\n\n.mdi-instagram::before {\n  content: \"\\F2FE\";\n}\n\n.mdi-instapaper::before {\n  content: \"\\F2FF\";\n}\n\n.mdi-instrument-triangle::before {\n  content: \"\\F0070\";\n}\n\n.mdi-internet-explorer::before {\n  content: \"\\F300\";\n}\n\n.mdi-invert-colors::before {\n  content: \"\\F301\";\n}\n\n.mdi-invert-colors-off::before {\n  content: \"\\FE8B\";\n}\n\n.mdi-ip::before {\n  content: \"\\FA5E\";\n}\n\n.mdi-ip-network::before {\n  content: \"\\FA5F\";\n}\n\n.mdi-ip-network-outline::before {\n  content: \"\\FC6C\";\n}\n\n.mdi-ipod::before {\n  content: \"\\FC6D\";\n}\n\n.mdi-islam::before {\n  content: \"\\F978\";\n}\n\n.mdi-island::before {\n  content: \"\\F0071\";\n}\n\n.mdi-itunes::before {\n  content: \"\\F676\";\n}\n\n.mdi-iv-bag::before {\n  content: \"\\F00E4\";\n}\n\n.mdi-jabber::before {\n  content: \"\\FDB1\";\n}\n\n.mdi-jeepney::before {\n  content: \"\\F302\";\n}\n\n.mdi-jellyfish::before {\n  content: \"\\FF1E\";\n}\n\n.mdi-jellyfish-outline::before {\n  content: \"\\FF1F\";\n}\n\n.mdi-jira::before {\n  content: \"\\F303\";\n}\n\n.mdi-jquery::before {\n  content: \"\\F87C\";\n}\n\n.mdi-jsfiddle::before {\n  content: \"\\F304\";\n}\n\n.mdi-json::before {\n  content: \"\\F626\";\n}\n\n.mdi-judaism::before {\n  content: \"\\F979\";\n}\n\n.mdi-kabaddi::before {\n  content: \"\\FD63\";\n}\n\n.mdi-karate::before {\n  content: \"\\F82B\";\n}\n\n.mdi-keg::before {\n  content: \"\\F305\";\n}\n\n.mdi-kettle::before {\n  content: \"\\F5FA\";\n}\n\n.mdi-kettle-outline::before {\n  content: \"\\FF73\";\n}\n\n.mdi-key::before {\n  content: \"\\F306\";\n}\n\n.mdi-key-change::before {\n  content: \"\\F307\";\n}\n\n.mdi-key-minus::before {\n  content: \"\\F308\";\n}\n\n.mdi-key-outline::before {\n  content: \"\\FDB2\";\n}\n\n.mdi-key-plus::before {\n  content: \"\\F309\";\n}\n\n.mdi-key-remove::before {\n  content: \"\\F30A\";\n}\n\n.mdi-key-variant::before {\n  content: \"\\F30B\";\n}\n\n.mdi-key-wireless::before {\n  content: \"\\FFE2\";\n}\n\n.mdi-keyboard::before {\n  content: \"\\F30C\";\n}\n\n.mdi-keyboard-backspace::before {\n  content: \"\\F30D\";\n}\n\n.mdi-keyboard-caps::before {\n  content: \"\\F30E\";\n}\n\n.mdi-keyboard-close::before {\n  content: \"\\F30F\";\n}\n\n.mdi-keyboard-off::before {\n  content: \"\\F310\";\n}\n\n.mdi-keyboard-off-outline::before {\n  content: \"\\FE8C\";\n}\n\n.mdi-keyboard-outline::before {\n  content: \"\\F97A\";\n}\n\n.mdi-keyboard-return::before {\n  content: \"\\F311\";\n}\n\n.mdi-keyboard-settings::before {\n  content: \"\\F9F8\";\n}\n\n.mdi-keyboard-settings-outline::before {\n  content: \"\\F9F9\";\n}\n\n.mdi-keyboard-space::before {\n  content: \"\\F0072\";\n}\n\n.mdi-keyboard-tab::before {\n  content: \"\\F312\";\n}\n\n.mdi-keyboard-variant::before {\n  content: \"\\F313\";\n}\n\n.mdi-kickstarter::before {\n  content: \"\\F744\";\n}\n\n.mdi-knife::before {\n  content: \"\\F9FA\";\n}\n\n.mdi-knife-military::before {\n  content: \"\\F9FB\";\n}\n\n.mdi-kodi::before {\n  content: \"\\F314\";\n}\n\n.mdi-label::before {\n  content: \"\\F315\";\n}\n\n.mdi-label-off::before {\n  content: \"\\FACA\";\n}\n\n.mdi-label-off-outline::before {\n  content: \"\\FACB\";\n}\n\n.mdi-label-outline::before {\n  content: \"\\F316\";\n}\n\n.mdi-label-variant::before {\n  content: \"\\FACC\";\n}\n\n.mdi-label-variant-outline::before {\n  content: \"\\FACD\";\n}\n\n.mdi-ladybug::before {\n  content: \"\\F82C\";\n}\n\n.mdi-lambda::before {\n  content: \"\\F627\";\n}\n\n.mdi-lamp::before {\n  content: \"\\F6B4\";\n}\n\n.mdi-lan::before {\n  content: \"\\F317\";\n}\n\n.mdi-lan-connect::before {\n  content: \"\\F318\";\n}\n\n.mdi-lan-disconnect::before {\n  content: \"\\F319\";\n}\n\n.mdi-lan-pending::before {\n  content: \"\\F31A\";\n}\n\n.mdi-language-c::before {\n  content: \"\\F671\";\n}\n\n.mdi-language-cpp::before {\n  content: \"\\F672\";\n}\n\n.mdi-language-csharp::before {\n  content: \"\\F31B\";\n}\n\n.mdi-language-css3::before {\n  content: \"\\F31C\";\n}\n\n.mdi-language-go::before {\n  content: \"\\F7D2\";\n}\n\n.mdi-language-haskell::before {\n  content: \"\\FC6E\";\n}\n\n.mdi-language-html5::before {\n  content: \"\\F31D\";\n}\n\n.mdi-language-java::before {\n  content: \"\\FB1C\";\n}\n\n.mdi-language-javascript::before {\n  content: \"\\F31E\";\n}\n\n.mdi-language-lua::before {\n  content: \"\\F8B0\";\n}\n\n.mdi-language-php::before {\n  content: \"\\F31F\";\n}\n\n.mdi-language-python::before {\n  content: \"\\F320\";\n}\n\n.mdi-language-python-text::before {\n  content: \"\\F321\";\n}\n\n.mdi-language-r::before {\n  content: \"\\F7D3\";\n}\n\n.mdi-language-ruby-on-rails::before {\n  content: \"\\FACE\";\n}\n\n.mdi-language-swift::before {\n  content: \"\\F6E4\";\n}\n\n.mdi-language-typescript::before {\n  content: \"\\F6E5\";\n}\n\n.mdi-laptop::before {\n  content: \"\\F322\";\n}\n\n.mdi-laptop-chromebook::before {\n  content: \"\\F323\";\n}\n\n.mdi-laptop-mac::before {\n  content: \"\\F324\";\n}\n\n.mdi-laptop-off::before {\n  content: \"\\F6E6\";\n}\n\n.mdi-laptop-windows::before {\n  content: \"\\F325\";\n}\n\n.mdi-laravel::before {\n  content: \"\\FACF\";\n}\n\n.mdi-lasso::before {\n  content: \"\\FF20\";\n}\n\n.mdi-lastfm::before {\n  content: \"\\F326\";\n}\n\n.mdi-lastpass::before {\n  content: \"\\F446\";\n}\n\n.mdi-latitude::before {\n  content: \"\\FF74\";\n}\n\n.mdi-launch::before {\n  content: \"\\F327\";\n}\n\n.mdi-lava-lamp::before {\n  content: \"\\F7D4\";\n}\n\n.mdi-layers::before {\n  content: \"\\F328\";\n}\n\n.mdi-layers-minus::before {\n  content: \"\\FE8D\";\n}\n\n.mdi-layers-off::before {\n  content: \"\\F329\";\n}\n\n.mdi-layers-off-outline::before {\n  content: \"\\F9FC\";\n}\n\n.mdi-layers-outline::before {\n  content: \"\\F9FD\";\n}\n\n.mdi-layers-plus::before {\n  content: \"\\FE30\";\n}\n\n.mdi-layers-remove::before {\n  content: \"\\FE31\";\n}\n\n.mdi-layers-triple::before {\n  content: \"\\FF75\";\n}\n\n.mdi-layers-triple-outline::before {\n  content: \"\\FF76\";\n}\n\n.mdi-lead-pencil::before {\n  content: \"\\F64F\";\n}\n\n.mdi-leaf::before {\n  content: \"\\F32A\";\n}\n\n.mdi-leaf-maple::before {\n  content: \"\\FC6F\";\n}\n\n.mdi-leak::before {\n  content: \"\\FDB3\";\n}\n\n.mdi-leak-off::before {\n  content: \"\\FDB4\";\n}\n\n.mdi-led-off::before {\n  content: \"\\F32B\";\n}\n\n.mdi-led-on::before {\n  content: \"\\F32C\";\n}\n\n.mdi-led-outline::before {\n  content: \"\\F32D\";\n}\n\n.mdi-led-strip::before {\n  content: \"\\F7D5\";\n}\n\n.mdi-led-strip-variant::before {\n  content: \"\\F0073\";\n}\n\n.mdi-led-variant-off::before {\n  content: \"\\F32E\";\n}\n\n.mdi-led-variant-on::before {\n  content: \"\\F32F\";\n}\n\n.mdi-led-variant-outline::before {\n  content: \"\\F330\";\n}\n\n.mdi-less-than::before {\n  content: \"\\F97B\";\n}\n\n.mdi-less-than-or-equal::before {\n  content: \"\\F97C\";\n}\n\n.mdi-library::before {\n  content: \"\\F331\";\n}\n\n.mdi-library-books::before {\n  content: \"\\F332\";\n}\n\n.mdi-library-movie::before {\n  content: \"\\FCF4\";\n}\n\n.mdi-library-music::before {\n  content: \"\\F333\";\n}\n\n.mdi-library-music-outline::before {\n  content: \"\\FF21\";\n}\n\n.mdi-library-shelves::before {\n  content: \"\\FB85\";\n}\n\n.mdi-library-video::before {\n  content: \"\\FCF5\";\n}\n\n.mdi-license::before {\n  content: \"\\FFE3\";\n}\n\n.mdi-lifebuoy::before {\n  content: \"\\F87D\";\n}\n\n.mdi-light-switch::before {\n  content: \"\\F97D\";\n}\n\n.mdi-lightbulb::before {\n  content: \"\\F335\";\n}\n\n.mdi-lightbulb-off::before {\n  content: \"\\FE32\";\n}\n\n.mdi-lightbulb-off-outline::before {\n  content: \"\\FE33\";\n}\n\n.mdi-lightbulb-on::before {\n  content: \"\\F6E7\";\n}\n\n.mdi-lightbulb-on-outline::before {\n  content: \"\\F6E8\";\n}\n\n.mdi-lightbulb-outline::before {\n  content: \"\\F336\";\n}\n\n.mdi-lighthouse::before {\n  content: \"\\F9FE\";\n}\n\n.mdi-lighthouse-on::before {\n  content: \"\\F9FF\";\n}\n\n.mdi-link::before {\n  content: \"\\F337\";\n}\n\n.mdi-link-box::before {\n  content: \"\\FCF6\";\n}\n\n.mdi-link-box-outline::before {\n  content: \"\\FCF7\";\n}\n\n.mdi-link-box-variant::before {\n  content: \"\\FCF8\";\n}\n\n.mdi-link-box-variant-outline::before {\n  content: \"\\FCF9\";\n}\n\n.mdi-link-lock::before {\n  content: \"\\F00E5\";\n}\n\n.mdi-link-off::before {\n  content: \"\\F338\";\n}\n\n.mdi-link-plus::before {\n  content: \"\\FC70\";\n}\n\n.mdi-link-variant::before {\n  content: \"\\F339\";\n}\n\n.mdi-link-variant-off::before {\n  content: \"\\F33A\";\n}\n\n.mdi-linkedin::before {\n  content: \"\\F33B\";\n}\n\n.mdi-linkedin-box::before {\n  content: \"\\F33C\";\n}\n\n.mdi-linux::before {\n  content: \"\\F33D\";\n}\n\n.mdi-linux-mint::before {\n  content: \"\\F8EC\";\n}\n\n.mdi-litecoin::before {\n  content: \"\\FA60\";\n}\n\n.mdi-loading::before {\n  content: \"\\F771\";\n}\n\n.mdi-location-enter::before {\n  content: \"\\FFE4\";\n}\n\n.mdi-location-exit::before {\n  content: \"\\FFE5\";\n}\n\n.mdi-lock::before {\n  content: \"\\F33E\";\n}\n\n.mdi-lock-alert::before {\n  content: \"\\F8ED\";\n}\n\n.mdi-lock-clock::before {\n  content: \"\\F97E\";\n}\n\n.mdi-lock-open::before {\n  content: \"\\F33F\";\n}\n\n.mdi-lock-open-outline::before {\n  content: \"\\F340\";\n}\n\n.mdi-lock-open-variant::before {\n  content: \"\\FFE6\";\n}\n\n.mdi-lock-open-variant-outline::before {\n  content: \"\\FFE7\";\n}\n\n.mdi-lock-outline::before {\n  content: \"\\F341\";\n}\n\n.mdi-lock-pattern::before {\n  content: \"\\F6E9\";\n}\n\n.mdi-lock-plus::before {\n  content: \"\\F5FB\";\n}\n\n.mdi-lock-question::before {\n  content: \"\\F8EE\";\n}\n\n.mdi-lock-reset::before {\n  content: \"\\F772\";\n}\n\n.mdi-lock-smart::before {\n  content: \"\\F8B1\";\n}\n\n.mdi-locker::before {\n  content: \"\\F7D6\";\n}\n\n.mdi-locker-multiple::before {\n  content: \"\\F7D7\";\n}\n\n.mdi-login::before {\n  content: \"\\F342\";\n}\n\n.mdi-login-variant::before {\n  content: \"\\F5FC\";\n}\n\n.mdi-logout::before {\n  content: \"\\F343\";\n}\n\n.mdi-logout-variant::before {\n  content: \"\\F5FD\";\n}\n\n.mdi-longitude::before {\n  content: \"\\FF77\";\n}\n\n.mdi-looks::before {\n  content: \"\\F344\";\n}\n\n.mdi-loupe::before {\n  content: \"\\F345\";\n}\n\n.mdi-lumx::before {\n  content: \"\\F346\";\n}\n\n.mdi-lungs::before {\n  content: \"\\F00AF\";\n}\n\n.mdi-lyft::before {\n  content: \"\\FB1D\";\n}\n\n.mdi-magnet::before {\n  content: \"\\F347\";\n}\n\n.mdi-magnet-on::before {\n  content: \"\\F348\";\n}\n\n.mdi-magnify::before {\n  content: \"\\F349\";\n}\n\n.mdi-magnify-close::before {\n  content: \"\\F97F\";\n}\n\n.mdi-magnify-minus::before {\n  content: \"\\F34A\";\n}\n\n.mdi-magnify-minus-cursor::before {\n  content: \"\\FA61\";\n}\n\n.mdi-magnify-minus-outline::before {\n  content: \"\\F6EB\";\n}\n\n.mdi-magnify-plus::before {\n  content: \"\\F34B\";\n}\n\n.mdi-magnify-plus-cursor::before {\n  content: \"\\FA62\";\n}\n\n.mdi-magnify-plus-outline::before {\n  content: \"\\F6EC\";\n}\n\n.mdi-mail::before {\n  content: \"\\FED8\";\n}\n\n.mdi-mail-ru::before {\n  content: \"\\F34C\";\n}\n\n.mdi-mailbox::before {\n  content: \"\\F6ED\";\n}\n\n.mdi-mailbox-open::before {\n  content: \"\\FD64\";\n}\n\n.mdi-mailbox-open-outline::before {\n  content: \"\\FD65\";\n}\n\n.mdi-mailbox-open-up::before {\n  content: \"\\FD66\";\n}\n\n.mdi-mailbox-open-up-outline::before {\n  content: \"\\FD67\";\n}\n\n.mdi-mailbox-outline::before {\n  content: \"\\FD68\";\n}\n\n.mdi-mailbox-up::before {\n  content: \"\\FD69\";\n}\n\n.mdi-mailbox-up-outline::before {\n  content: \"\\FD6A\";\n}\n\n.mdi-map::before {\n  content: \"\\F34D\";\n}\n\n.mdi-map-check::before {\n  content: \"\\FED9\";\n}\n\n.mdi-map-check-outline::before {\n  content: \"\\FEDA\";\n}\n\n.mdi-map-clock::before {\n  content: \"\\FCFA\";\n}\n\n.mdi-map-clock-outline::before {\n  content: \"\\FCFB\";\n}\n\n.mdi-map-legend::before {\n  content: \"\\FA00\";\n}\n\n.mdi-map-marker::before {\n  content: \"\\F34E\";\n}\n\n.mdi-map-marker-alert::before {\n  content: \"\\FF22\";\n}\n\n.mdi-map-marker-alert-outline::before {\n  content: \"\\FF23\";\n}\n\n.mdi-map-marker-check::before {\n  content: \"\\FC71\";\n}\n\n.mdi-map-marker-circle::before {\n  content: \"\\F34F\";\n}\n\n.mdi-map-marker-distance::before {\n  content: \"\\F8EF\";\n}\n\n.mdi-map-marker-minus::before {\n  content: \"\\F650\";\n}\n\n.mdi-map-marker-multiple::before {\n  content: \"\\F350\";\n}\n\n.mdi-map-marker-off::before {\n  content: \"\\F351\";\n}\n\n.mdi-map-marker-outline::before {\n  content: \"\\F7D8\";\n}\n\n.mdi-map-marker-path::before {\n  content: \"\\FCFC\";\n}\n\n.mdi-map-marker-plus::before {\n  content: \"\\F651\";\n}\n\n.mdi-map-marker-question::before {\n  content: \"\\FF24\";\n}\n\n.mdi-map-marker-question-outline::before {\n  content: \"\\FF25\";\n}\n\n.mdi-map-marker-radius::before {\n  content: \"\\F352\";\n}\n\n.mdi-map-marker-remove::before {\n  content: \"\\FF26\";\n}\n\n.mdi-map-marker-remove-variant::before {\n  content: \"\\FF27\";\n}\n\n.mdi-map-minus::before {\n  content: \"\\F980\";\n}\n\n.mdi-map-outline::before {\n  content: \"\\F981\";\n}\n\n.mdi-map-plus::before {\n  content: \"\\F982\";\n}\n\n.mdi-map-search::before {\n  content: \"\\F983\";\n}\n\n.mdi-map-search-outline::before {\n  content: \"\\F984\";\n}\n\n.mdi-mapbox::before {\n  content: \"\\FB86\";\n}\n\n.mdi-margin::before {\n  content: \"\\F353\";\n}\n\n.mdi-markdown::before {\n  content: \"\\F354\";\n}\n\n.mdi-markdown-outline::before {\n  content: \"\\FF78\";\n}\n\n.mdi-marker::before {\n  content: \"\\F652\";\n}\n\n.mdi-marker-cancel::before {\n  content: \"\\FDB5\";\n}\n\n.mdi-marker-check::before {\n  content: \"\\F355\";\n}\n\n.mdi-mastodon::before {\n  content: \"\\FAD0\";\n}\n\n.mdi-mastodon-variant::before {\n  content: \"\\FAD1\";\n}\n\n.mdi-material-design::before {\n  content: \"\\F985\";\n}\n\n.mdi-material-ui::before {\n  content: \"\\F357\";\n}\n\n.mdi-math-compass::before {\n  content: \"\\F358\";\n}\n\n.mdi-math-cos::before {\n  content: \"\\FC72\";\n}\n\n.mdi-math-integral::before {\n  content: \"\\FFE8\";\n}\n\n.mdi-math-integral-box::before {\n  content: \"\\FFE9\";\n}\n\n.mdi-math-log::before {\n  content: \"\\F00B0\";\n}\n\n.mdi-math-norm::before {\n  content: \"\\FFEA\";\n}\n\n.mdi-math-norm-box::before {\n  content: \"\\FFEB\";\n}\n\n.mdi-math-sin::before {\n  content: \"\\FC73\";\n}\n\n.mdi-math-tan::before {\n  content: \"\\FC74\";\n}\n\n.mdi-matrix::before {\n  content: \"\\F628\";\n}\n\n.mdi-maxcdn::before {\n  content: \"\\F359\";\n}\n\n.mdi-medal::before {\n  content: \"\\F986\";\n}\n\n.mdi-medical-bag::before {\n  content: \"\\F6EE\";\n}\n\n.mdi-medium::before {\n  content: \"\\F35A\";\n}\n\n.mdi-meetup::before {\n  content: \"\\FAD2\";\n}\n\n.mdi-memory::before {\n  content: \"\\F35B\";\n}\n\n.mdi-menu::before {\n  content: \"\\F35C\";\n}\n\n.mdi-menu-down::before {\n  content: \"\\F35D\";\n}\n\n.mdi-menu-down-outline::before {\n  content: \"\\F6B5\";\n}\n\n.mdi-menu-left::before {\n  content: \"\\F35E\";\n}\n\n.mdi-menu-left-outline::before {\n  content: \"\\FA01\";\n}\n\n.mdi-menu-open::before {\n  content: \"\\FB87\";\n}\n\n.mdi-menu-right::before {\n  content: \"\\F35F\";\n}\n\n.mdi-menu-right-outline::before {\n  content: \"\\FA02\";\n}\n\n.mdi-menu-swap::before {\n  content: \"\\FA63\";\n}\n\n.mdi-menu-swap-outline::before {\n  content: \"\\FA64\";\n}\n\n.mdi-menu-up::before {\n  content: \"\\F360\";\n}\n\n.mdi-menu-up-outline::before {\n  content: \"\\F6B6\";\n}\n\n.mdi-merge::before {\n  content: \"\\FF79\";\n}\n\n.mdi-message::before {\n  content: \"\\F361\";\n}\n\n.mdi-message-alert::before {\n  content: \"\\F362\";\n}\n\n.mdi-message-alert-outline::before {\n  content: \"\\FA03\";\n}\n\n.mdi-message-bulleted::before {\n  content: \"\\F6A1\";\n}\n\n.mdi-message-bulleted-off::before {\n  content: \"\\F6A2\";\n}\n\n.mdi-message-draw::before {\n  content: \"\\F363\";\n}\n\n.mdi-message-image::before {\n  content: \"\\F364\";\n}\n\n.mdi-message-lock::before {\n  content: \"\\FFEC\";\n}\n\n.mdi-message-outline::before {\n  content: \"\\F365\";\n}\n\n.mdi-message-plus::before {\n  content: \"\\F653\";\n}\n\n.mdi-message-plus-outline::before {\n  content: \"\\F00E6\";\n}\n\n.mdi-message-processing::before {\n  content: \"\\F366\";\n}\n\n.mdi-message-reply::before {\n  content: \"\\F367\";\n}\n\n.mdi-message-reply-text::before {\n  content: \"\\F368\";\n}\n\n.mdi-message-settings::before {\n  content: \"\\F6EF\";\n}\n\n.mdi-message-settings-variant::before {\n  content: \"\\F6F0\";\n}\n\n.mdi-message-text::before {\n  content: \"\\F369\";\n}\n\n.mdi-message-text-lock::before {\n  content: \"\\FFED\";\n}\n\n.mdi-message-text-outline::before {\n  content: \"\\F36A\";\n}\n\n.mdi-message-video::before {\n  content: \"\\F36B\";\n}\n\n.mdi-meteor::before {\n  content: \"\\F629\";\n}\n\n.mdi-metronome::before {\n  content: \"\\F7D9\";\n}\n\n.mdi-metronome-tick::before {\n  content: \"\\F7DA\";\n}\n\n.mdi-micro-sd::before {\n  content: \"\\F7DB\";\n}\n\n.mdi-microphone::before {\n  content: \"\\F36C\";\n}\n\n.mdi-microphone-minus::before {\n  content: \"\\F8B2\";\n}\n\n.mdi-microphone-off::before {\n  content: \"\\F36D\";\n}\n\n.mdi-microphone-outline::before {\n  content: \"\\F36E\";\n}\n\n.mdi-microphone-plus::before {\n  content: \"\\F8B3\";\n}\n\n.mdi-microphone-settings::before {\n  content: \"\\F36F\";\n}\n\n.mdi-microphone-variant::before {\n  content: \"\\F370\";\n}\n\n.mdi-microphone-variant-off::before {\n  content: \"\\F371\";\n}\n\n.mdi-microscope::before {\n  content: \"\\F654\";\n}\n\n.mdi-microsoft::before {\n  content: \"\\F372\";\n}\n\n.mdi-microsoft-dynamics::before {\n  content: \"\\F987\";\n}\n\n.mdi-microwave::before {\n  content: \"\\FC75\";\n}\n\n.mdi-middleware::before {\n  content: \"\\FF7A\";\n}\n\n.mdi-middleware-outline::before {\n  content: \"\\FF7B\";\n}\n\n.mdi-midi::before {\n  content: \"\\F8F0\";\n}\n\n.mdi-midi-port::before {\n  content: \"\\F8F1\";\n}\n\n.mdi-mine::before {\n  content: \"\\FDB6\";\n}\n\n.mdi-minecraft::before {\n  content: \"\\F373\";\n}\n\n.mdi-mini-sd::before {\n  content: \"\\FA04\";\n}\n\n.mdi-minidisc::before {\n  content: \"\\FA05\";\n}\n\n.mdi-minus::before {\n  content: \"\\F374\";\n}\n\n.mdi-minus-box::before {\n  content: \"\\F375\";\n}\n\n.mdi-minus-box-outline::before {\n  content: \"\\F6F1\";\n}\n\n.mdi-minus-circle::before {\n  content: \"\\F376\";\n}\n\n.mdi-minus-circle-outline::before {\n  content: \"\\F377\";\n}\n\n.mdi-minus-network::before {\n  content: \"\\F378\";\n}\n\n.mdi-minus-network-outline::before {\n  content: \"\\FC76\";\n}\n\n.mdi-mixcloud::before {\n  content: \"\\F62A\";\n}\n\n.mdi-mixed-martial-arts::before {\n  content: \"\\FD6B\";\n}\n\n.mdi-mixed-reality::before {\n  content: \"\\F87E\";\n}\n\n.mdi-mixer::before {\n  content: \"\\F7DC\";\n}\n\n.mdi-molecule::before {\n  content: \"\\FB88\";\n}\n\n.mdi-monitor::before {\n  content: \"\\F379\";\n}\n\n.mdi-monitor-cellphone::before {\n  content: \"\\F988\";\n}\n\n.mdi-monitor-cellphone-star::before {\n  content: \"\\F989\";\n}\n\n.mdi-monitor-dashboard::before {\n  content: \"\\FA06\";\n}\n\n.mdi-monitor-lock::before {\n  content: \"\\FDB7\";\n}\n\n.mdi-monitor-multiple::before {\n  content: \"\\F37A\";\n}\n\n.mdi-monitor-off::before {\n  content: \"\\FD6C\";\n}\n\n.mdi-monitor-screenshot::before {\n  content: \"\\FE34\";\n}\n\n.mdi-monitor-speaker::before {\n  content: \"\\FF7C\";\n}\n\n.mdi-monitor-speaker-off::before {\n  content: \"\\FF7D\";\n}\n\n.mdi-monitor-star::before {\n  content: \"\\FDB8\";\n}\n\n.mdi-moon-first-quarter::before {\n  content: \"\\FF7E\";\n}\n\n.mdi-moon-full::before {\n  content: \"\\FF7F\";\n}\n\n.mdi-moon-last-quarter::before {\n  content: \"\\FF80\";\n}\n\n.mdi-moon-new::before {\n  content: \"\\FF81\";\n}\n\n.mdi-moon-waning-crescent::before {\n  content: \"\\FF82\";\n}\n\n.mdi-moon-waning-gibbous::before {\n  content: \"\\FF83\";\n}\n\n.mdi-moon-waxing-crescent::before {\n  content: \"\\FF84\";\n}\n\n.mdi-moon-waxing-gibbous::before {\n  content: \"\\FF85\";\n}\n\n.mdi-moped::before {\n  content: \"\\F00B1\";\n}\n\n.mdi-more::before {\n  content: \"\\F37B\";\n}\n\n.mdi-mother-nurse::before {\n  content: \"\\FCFD\";\n}\n\n.mdi-motion-sensor::before {\n  content: \"\\FD6D\";\n}\n\n.mdi-motorbike::before {\n  content: \"\\F37C\";\n}\n\n.mdi-mouse::before {\n  content: \"\\F37D\";\n}\n\n.mdi-mouse-bluetooth::before {\n  content: \"\\F98A\";\n}\n\n.mdi-mouse-off::before {\n  content: \"\\F37E\";\n}\n\n.mdi-mouse-variant::before {\n  content: \"\\F37F\";\n}\n\n.mdi-mouse-variant-off::before {\n  content: \"\\F380\";\n}\n\n.mdi-move-resize::before {\n  content: \"\\F655\";\n}\n\n.mdi-move-resize-variant::before {\n  content: \"\\F656\";\n}\n\n.mdi-movie::before {\n  content: \"\\F381\";\n}\n\n.mdi-movie-open::before {\n  content: \"\\FFEE\";\n}\n\n.mdi-movie-open-outline::before {\n  content: \"\\FFEF\";\n}\n\n.mdi-movie-outline::before {\n  content: \"\\FDB9\";\n}\n\n.mdi-movie-roll::before {\n  content: \"\\F7DD\";\n}\n\n.mdi-muffin::before {\n  content: \"\\F98B\";\n}\n\n.mdi-multiplication::before {\n  content: \"\\F382\";\n}\n\n.mdi-multiplication-box::before {\n  content: \"\\F383\";\n}\n\n.mdi-mushroom::before {\n  content: \"\\F7DE\";\n}\n\n.mdi-mushroom-outline::before {\n  content: \"\\F7DF\";\n}\n\n.mdi-music::before {\n  content: \"\\F759\";\n}\n\n.mdi-music-accidental-double-flat::before {\n  content: \"\\FF86\";\n}\n\n.mdi-music-accidental-double-sharp::before {\n  content: \"\\FF87\";\n}\n\n.mdi-music-accidental-flat::before {\n  content: \"\\FF88\";\n}\n\n.mdi-music-accidental-natural::before {\n  content: \"\\FF89\";\n}\n\n.mdi-music-accidental-sharp::before {\n  content: \"\\FF8A\";\n}\n\n.mdi-music-box::before {\n  content: \"\\F384\";\n}\n\n.mdi-music-box-outline::before {\n  content: \"\\F385\";\n}\n\n.mdi-music-circle::before {\n  content: \"\\F386\";\n}\n\n.mdi-music-circle-outline::before {\n  content: \"\\FAD3\";\n}\n\n.mdi-music-clef-alto::before {\n  content: \"\\FF8B\";\n}\n\n.mdi-music-clef-bass::before {\n  content: \"\\FF8C\";\n}\n\n.mdi-music-clef-treble::before {\n  content: \"\\FF8D\";\n}\n\n.mdi-music-note::before {\n  content: \"\\F387\";\n}\n\n.mdi-music-note-bluetooth::before {\n  content: \"\\F5FE\";\n}\n\n.mdi-music-note-bluetooth-off::before {\n  content: \"\\F5FF\";\n}\n\n.mdi-music-note-eighth::before {\n  content: \"\\F388\";\n}\n\n.mdi-music-note-eighth-dotted::before {\n  content: \"\\FF8E\";\n}\n\n.mdi-music-note-half::before {\n  content: \"\\F389\";\n}\n\n.mdi-music-note-half-dotted::before {\n  content: \"\\FF8F\";\n}\n\n.mdi-music-note-off::before {\n  content: \"\\F38A\";\n}\n\n.mdi-music-note-off-outline::before {\n  content: \"\\FF90\";\n}\n\n.mdi-music-note-outline::before {\n  content: \"\\FF91\";\n}\n\n.mdi-music-note-plus::before {\n  content: \"\\FDBA\";\n}\n\n.mdi-music-note-quarter::before {\n  content: \"\\F38B\";\n}\n\n.mdi-music-note-quarter-dotted::before {\n  content: \"\\FF92\";\n}\n\n.mdi-music-note-sixteenth::before {\n  content: \"\\F38C\";\n}\n\n.mdi-music-note-sixteenth-dotted::before {\n  content: \"\\FF93\";\n}\n\n.mdi-music-note-whole::before {\n  content: \"\\F38D\";\n}\n\n.mdi-music-note-whole-dotted::before {\n  content: \"\\FF94\";\n}\n\n.mdi-music-off::before {\n  content: \"\\F75A\";\n}\n\n.mdi-music-rest-eighth::before {\n  content: \"\\FF95\";\n}\n\n.mdi-music-rest-half::before {\n  content: \"\\FF96\";\n}\n\n.mdi-music-rest-quarter::before {\n  content: \"\\FF97\";\n}\n\n.mdi-music-rest-sixteenth::before {\n  content: \"\\FF98\";\n}\n\n.mdi-music-rest-whole::before {\n  content: \"\\FF99\";\n}\n\n.mdi-nail::before {\n  content: \"\\FDBB\";\n}\n\n.mdi-nas::before {\n  content: \"\\F8F2\";\n}\n\n.mdi-nativescript::before {\n  content: \"\\F87F\";\n}\n\n.mdi-nature::before {\n  content: \"\\F38E\";\n}\n\n.mdi-nature-people::before {\n  content: \"\\F38F\";\n}\n\n.mdi-navigation::before {\n  content: \"\\F390\";\n}\n\n.mdi-near-me::before {\n  content: \"\\F5CD\";\n}\n\n.mdi-necklace::before {\n  content: \"\\FF28\";\n}\n\n.mdi-needle::before {\n  content: \"\\F391\";\n}\n\n.mdi-netflix::before {\n  content: \"\\F745\";\n}\n\n.mdi-network::before {\n  content: \"\\F6F2\";\n}\n\n.mdi-network-off::before {\n  content: \"\\FC77\";\n}\n\n.mdi-network-off-outline::before {\n  content: \"\\FC78\";\n}\n\n.mdi-network-outline::before {\n  content: \"\\FC79\";\n}\n\n.mdi-network-router::before {\n  content: \"\\F00B2\";\n}\n\n.mdi-network-strength-1::before {\n  content: \"\\F8F3\";\n}\n\n.mdi-network-strength-1-alert::before {\n  content: \"\\F8F4\";\n}\n\n.mdi-network-strength-2::before {\n  content: \"\\F8F5\";\n}\n\n.mdi-network-strength-2-alert::before {\n  content: \"\\F8F6\";\n}\n\n.mdi-network-strength-3::before {\n  content: \"\\F8F7\";\n}\n\n.mdi-network-strength-3-alert::before {\n  content: \"\\F8F8\";\n}\n\n.mdi-network-strength-4::before {\n  content: \"\\F8F9\";\n}\n\n.mdi-network-strength-4-alert::before {\n  content: \"\\F8FA\";\n}\n\n.mdi-network-strength-off::before {\n  content: \"\\F8FB\";\n}\n\n.mdi-network-strength-off-outline::before {\n  content: \"\\F8FC\";\n}\n\n.mdi-network-strength-outline::before {\n  content: \"\\F8FD\";\n}\n\n.mdi-new-box::before {\n  content: \"\\F394\";\n}\n\n.mdi-newspaper::before {\n  content: \"\\F395\";\n}\n\n.mdi-newspaper-minus::before {\n  content: \"\\FF29\";\n}\n\n.mdi-newspaper-plus::before {\n  content: \"\\FF2A\";\n}\n\n.mdi-newspaper-variant::before {\n  content: \"\\F0023\";\n}\n\n.mdi-newspaper-variant-multiple::before {\n  content: \"\\F0024\";\n}\n\n.mdi-newspaper-variant-multiple-outline::before {\n  content: \"\\F0025\";\n}\n\n.mdi-newspaper-variant-outline::before {\n  content: \"\\F0026\";\n}\n\n.mdi-nfc::before {\n  content: \"\\F396\";\n}\n\n.mdi-nfc-off::before {\n  content: \"\\FE35\";\n}\n\n.mdi-nfc-search-variant::before {\n  content: \"\\FE36\";\n}\n\n.mdi-nfc-tap::before {\n  content: \"\\F397\";\n}\n\n.mdi-nfc-variant::before {\n  content: \"\\F398\";\n}\n\n.mdi-nfc-variant-off::before {\n  content: \"\\FE37\";\n}\n\n.mdi-ninja::before {\n  content: \"\\F773\";\n}\n\n.mdi-nintendo-switch::before {\n  content: \"\\F7E0\";\n}\n\n.mdi-nodejs::before {\n  content: \"\\F399\";\n}\n\n.mdi-not-equal::before {\n  content: \"\\F98C\";\n}\n\n.mdi-not-equal-variant::before {\n  content: \"\\F98D\";\n}\n\n.mdi-note::before {\n  content: \"\\F39A\";\n}\n\n.mdi-note-multiple::before {\n  content: \"\\F6B7\";\n}\n\n.mdi-note-multiple-outline::before {\n  content: \"\\F6B8\";\n}\n\n.mdi-note-outline::before {\n  content: \"\\F39B\";\n}\n\n.mdi-note-plus::before {\n  content: \"\\F39C\";\n}\n\n.mdi-note-plus-outline::before {\n  content: \"\\F39D\";\n}\n\n.mdi-note-text::before {\n  content: \"\\F39E\";\n}\n\n.mdi-notebook::before {\n  content: \"\\F82D\";\n}\n\n.mdi-notebook-multiple::before {\n  content: \"\\FE38\";\n}\n\n.mdi-notebook-outline::before {\n  content: \"\\FEDC\";\n}\n\n.mdi-notification-clear-all::before {\n  content: \"\\F39F\";\n}\n\n.mdi-npm::before {\n  content: \"\\F6F6\";\n}\n\n.mdi-npm-variant::before {\n  content: \"\\F98E\";\n}\n\n.mdi-npm-variant-outline::before {\n  content: \"\\F98F\";\n}\n\n.mdi-nuke::before {\n  content: \"\\F6A3\";\n}\n\n.mdi-null::before {\n  content: \"\\F7E1\";\n}\n\n.mdi-numeric::before {\n  content: \"\\F3A0\";\n}\n\n.mdi-numeric-0::before {\n  content: \"0\";\n}\n\n.mdi-numeric-0-box::before {\n  content: \"\\F3A1\";\n}\n\n.mdi-numeric-0-box-multiple::before {\n  content: \"\\FF2B\";\n}\n\n.mdi-numeric-0-box-multiple-outline::before {\n  content: \"\\F3A2\";\n}\n\n.mdi-numeric-0-box-outline::before {\n  content: \"\\F3A3\";\n}\n\n.mdi-numeric-0-circle::before {\n  content: \"\\FC7A\";\n}\n\n.mdi-numeric-0-circle-outline::before {\n  content: \"\\FC7B\";\n}\n\n.mdi-numeric-1::before {\n  content: \"1\";\n}\n\n.mdi-numeric-1-box::before {\n  content: \"\\F3A4\";\n}\n\n.mdi-numeric-1-box-multiple::before {\n  content: \"\\FF2C\";\n}\n\n.mdi-numeric-1-box-multiple-outline::before {\n  content: \"\\F3A5\";\n}\n\n.mdi-numeric-1-box-outline::before {\n  content: \"\\F3A6\";\n}\n\n.mdi-numeric-1-circle::before {\n  content: \"\\FC7C\";\n}\n\n.mdi-numeric-1-circle-outline::before {\n  content: \"\\FC7D\";\n}\n\n.mdi-numeric-10::before {\n  content: \"\\F000A\";\n}\n\n.mdi-numeric-10-box::before {\n  content: \"\\FF9A\";\n}\n\n.mdi-numeric-10-box-multiple::before {\n  content: \"\\F000B\";\n}\n\n.mdi-numeric-10-box-multiple-outline::before {\n  content: \"\\F000C\";\n}\n\n.mdi-numeric-10-box-outline::before {\n  content: \"\\FF9B\";\n}\n\n.mdi-numeric-10-circle::before {\n  content: \"\\F000D\";\n}\n\n.mdi-numeric-10-circle-outline::before {\n  content: \"\\F000E\";\n}\n\n.mdi-numeric-2::before {\n  content: \"2\";\n}\n\n.mdi-numeric-2-box::before {\n  content: \"\\F3A7\";\n}\n\n.mdi-numeric-2-box-multiple::before {\n  content: \"\\FF2D\";\n}\n\n.mdi-numeric-2-box-multiple-outline::before {\n  content: \"\\F3A8\";\n}\n\n.mdi-numeric-2-box-outline::before {\n  content: \"\\F3A9\";\n}\n\n.mdi-numeric-2-circle::before {\n  content: \"\\FC7E\";\n}\n\n.mdi-numeric-2-circle-outline::before {\n  content: \"\\FC7F\";\n}\n\n.mdi-numeric-3::before {\n  content: \"3\";\n}\n\n.mdi-numeric-3-box::before {\n  content: \"\\F3AA\";\n}\n\n.mdi-numeric-3-box-multiple::before {\n  content: \"\\FF2E\";\n}\n\n.mdi-numeric-3-box-multiple-outline::before {\n  content: \"\\F3AB\";\n}\n\n.mdi-numeric-3-box-outline::before {\n  content: \"\\F3AC\";\n}\n\n.mdi-numeric-3-circle::before {\n  content: \"\\FC80\";\n}\n\n.mdi-numeric-3-circle-outline::before {\n  content: \"\\FC81\";\n}\n\n.mdi-numeric-4::before {\n  content: \"4\";\n}\n\n.mdi-numeric-4-box::before {\n  content: \"\\F3AD\";\n}\n\n.mdi-numeric-4-box-multiple::before {\n  content: \"\\FF2F\";\n}\n\n.mdi-numeric-4-box-multiple-outline::before {\n  content: \"\\F3AE\";\n}\n\n.mdi-numeric-4-box-outline::before {\n  content: \"\\F3AF\";\n}\n\n.mdi-numeric-4-circle::before {\n  content: \"\\FC82\";\n}\n\n.mdi-numeric-4-circle-outline::before {\n  content: \"\\FC83\";\n}\n\n.mdi-numeric-5::before {\n  content: \"5\";\n}\n\n.mdi-numeric-5-box::before {\n  content: \"\\F3B0\";\n}\n\n.mdi-numeric-5-box-multiple::before {\n  content: \"\\FF30\";\n}\n\n.mdi-numeric-5-box-multiple-outline::before {\n  content: \"\\F3B1\";\n}\n\n.mdi-numeric-5-box-outline::before {\n  content: \"\\F3B2\";\n}\n\n.mdi-numeric-5-circle::before {\n  content: \"\\FC84\";\n}\n\n.mdi-numeric-5-circle-outline::before {\n  content: \"\\FC85\";\n}\n\n.mdi-numeric-6::before {\n  content: \"6\";\n}\n\n.mdi-numeric-6-box::before {\n  content: \"\\F3B3\";\n}\n\n.mdi-numeric-6-box-multiple::before {\n  content: \"\\FF31\";\n}\n\n.mdi-numeric-6-box-multiple-outline::before {\n  content: \"\\F3B4\";\n}\n\n.mdi-numeric-6-box-outline::before {\n  content: \"\\F3B5\";\n}\n\n.mdi-numeric-6-circle::before {\n  content: \"\\FC86\";\n}\n\n.mdi-numeric-6-circle-outline::before {\n  content: \"\\FC87\";\n}\n\n.mdi-numeric-7::before {\n  content: \"7\";\n}\n\n.mdi-numeric-7-box::before {\n  content: \"\\F3B6\";\n}\n\n.mdi-numeric-7-box-multiple::before {\n  content: \"\\FF32\";\n}\n\n.mdi-numeric-7-box-multiple-outline::before {\n  content: \"\\F3B7\";\n}\n\n.mdi-numeric-7-box-outline::before {\n  content: \"\\F3B8\";\n}\n\n.mdi-numeric-7-circle::before {\n  content: \"\\FC88\";\n}\n\n.mdi-numeric-7-circle-outline::before {\n  content: \"\\FC89\";\n}\n\n.mdi-numeric-8::before {\n  content: \"8\";\n}\n\n.mdi-numeric-8-box::before {\n  content: \"\\F3B9\";\n}\n\n.mdi-numeric-8-box-multiple::before {\n  content: \"\\FF33\";\n}\n\n.mdi-numeric-8-box-multiple-outline::before {\n  content: \"\\F3BA\";\n}\n\n.mdi-numeric-8-box-outline::before {\n  content: \"\\F3BB\";\n}\n\n.mdi-numeric-8-circle::before {\n  content: \"\\FC8A\";\n}\n\n.mdi-numeric-8-circle-outline::before {\n  content: \"\\FC8B\";\n}\n\n.mdi-numeric-9::before {\n  content: \"9\";\n}\n\n.mdi-numeric-9-box::before {\n  content: \"\\F3BC\";\n}\n\n.mdi-numeric-9-box-multiple::before {\n  content: \"\\FF34\";\n}\n\n.mdi-numeric-9-box-multiple-outline::before {\n  content: \"\\F3BD\";\n}\n\n.mdi-numeric-9-box-outline::before {\n  content: \"\\F3BE\";\n}\n\n.mdi-numeric-9-circle::before {\n  content: \"\\FC8C\";\n}\n\n.mdi-numeric-9-circle-outline::before {\n  content: \"\\FC8D\";\n}\n\n.mdi-numeric-9-plus::before {\n  content: \"\\F000F\";\n}\n\n.mdi-numeric-9-plus-box::before {\n  content: \"\\F3BF\";\n}\n\n.mdi-numeric-9-plus-box-multiple::before {\n  content: \"\\FF35\";\n}\n\n.mdi-numeric-9-plus-box-multiple-outline::before {\n  content: \"\\F3C0\";\n}\n\n.mdi-numeric-9-plus-box-outline::before {\n  content: \"\\F3C1\";\n}\n\n.mdi-numeric-9-plus-circle::before {\n  content: \"\\FC8E\";\n}\n\n.mdi-numeric-9-plus-circle-outline::before {\n  content: \"\\FC8F\";\n}\n\n.mdi-numeric-negative-1::before {\n  content: \"\\F0074\";\n}\n\n.mdi-nut::before {\n  content: \"\\F6F7\";\n}\n\n.mdi-nutrition::before {\n  content: \"\\F3C2\";\n}\n\n.mdi-oar::before {\n  content: \"\\F67B\";\n}\n\n.mdi-ocarina::before {\n  content: \"\\FDBC\";\n}\n\n.mdi-octagon::before {\n  content: \"\\F3C3\";\n}\n\n.mdi-octagon-outline::before {\n  content: \"\\F3C4\";\n}\n\n.mdi-octagram::before {\n  content: \"\\F6F8\";\n}\n\n.mdi-octagram-outline::before {\n  content: \"\\F774\";\n}\n\n.mdi-odnoklassniki::before {\n  content: \"\\F3C5\";\n}\n\n.mdi-office::before {\n  content: \"\\F3C6\";\n}\n\n.mdi-office-building::before {\n  content: \"\\F990\";\n}\n\n.mdi-oil::before {\n  content: \"\\F3C7\";\n}\n\n.mdi-oil-lamp::before {\n  content: \"\\FF36\";\n}\n\n.mdi-oil-level::before {\n  content: \"\\F0075\";\n}\n\n.mdi-oil-temperature::before {\n  content: \"\\F0019\";\n}\n\n.mdi-omega::before {\n  content: \"\\F3C9\";\n}\n\n.mdi-one-up::before {\n  content: \"\\FB89\";\n}\n\n.mdi-onedrive::before {\n  content: \"\\F3CA\";\n}\n\n.mdi-onenote::before {\n  content: \"\\F746\";\n}\n\n.mdi-onepassword::before {\n  content: \"\\F880\";\n}\n\n.mdi-opacity::before {\n  content: \"\\F5CC\";\n}\n\n.mdi-open-in-app::before {\n  content: \"\\F3CB\";\n}\n\n.mdi-open-in-new::before {\n  content: \"\\F3CC\";\n}\n\n.mdi-open-source-initiative::before {\n  content: \"\\FB8A\";\n}\n\n.mdi-openid::before {\n  content: \"\\F3CD\";\n}\n\n.mdi-opera::before {\n  content: \"\\F3CE\";\n}\n\n.mdi-orbit::before {\n  content: \"\\F018\";\n}\n\n.mdi-origin::before {\n  content: \"\\FB2B\";\n}\n\n.mdi-ornament::before {\n  content: \"\\F3CF\";\n}\n\n.mdi-ornament-variant::before {\n  content: \"\\F3D0\";\n}\n\n.mdi-outdoor-lamp::before {\n  content: \"\\F0076\";\n}\n\n.mdi-outlook::before {\n  content: \"\\FCFE\";\n}\n\n.mdi-overscan::before {\n  content: \"\\F0027\";\n}\n\n.mdi-owl::before {\n  content: \"\\F3D2\";\n}\n\n.mdi-pac-man::before {\n  content: \"\\FB8B\";\n}\n\n.mdi-package::before {\n  content: \"\\F3D3\";\n}\n\n.mdi-package-down::before {\n  content: \"\\F3D4\";\n}\n\n.mdi-package-up::before {\n  content: \"\\F3D5\";\n}\n\n.mdi-package-variant::before {\n  content: \"\\F3D6\";\n}\n\n.mdi-package-variant-closed::before {\n  content: \"\\F3D7\";\n}\n\n.mdi-page-first::before {\n  content: \"\\F600\";\n}\n\n.mdi-page-last::before {\n  content: \"\\F601\";\n}\n\n.mdi-page-layout-body::before {\n  content: \"\\F6F9\";\n}\n\n.mdi-page-layout-footer::before {\n  content: \"\\F6FA\";\n}\n\n.mdi-page-layout-header::before {\n  content: \"\\F6FB\";\n}\n\n.mdi-page-layout-header-footer::before {\n  content: \"\\FF9C\";\n}\n\n.mdi-page-layout-sidebar-left::before {\n  content: \"\\F6FC\";\n}\n\n.mdi-page-layout-sidebar-right::before {\n  content: \"\\F6FD\";\n}\n\n.mdi-page-next::before {\n  content: \"\\FB8C\";\n}\n\n.mdi-page-next-outline::before {\n  content: \"\\FB8D\";\n}\n\n.mdi-page-previous::before {\n  content: \"\\FB8E\";\n}\n\n.mdi-page-previous-outline::before {\n  content: \"\\FB8F\";\n}\n\n.mdi-palette::before {\n  content: \"\\F3D8\";\n}\n\n.mdi-palette-advanced::before {\n  content: \"\\F3D9\";\n}\n\n.mdi-palette-outline::before {\n  content: \"\\FE6C\";\n}\n\n.mdi-palette-swatch::before {\n  content: \"\\F8B4\";\n}\n\n.mdi-palm-tree::before {\n  content: \"\\F0077\";\n}\n\n.mdi-pan::before {\n  content: \"\\FB90\";\n}\n\n.mdi-pan-bottom-left::before {\n  content: \"\\FB91\";\n}\n\n.mdi-pan-bottom-right::before {\n  content: \"\\FB92\";\n}\n\n.mdi-pan-down::before {\n  content: \"\\FB93\";\n}\n\n.mdi-pan-horizontal::before {\n  content: \"\\FB94\";\n}\n\n.mdi-pan-left::before {\n  content: \"\\FB95\";\n}\n\n.mdi-pan-right::before {\n  content: \"\\FB96\";\n}\n\n.mdi-pan-top-left::before {\n  content: \"\\FB97\";\n}\n\n.mdi-pan-top-right::before {\n  content: \"\\FB98\";\n}\n\n.mdi-pan-up::before {\n  content: \"\\FB99\";\n}\n\n.mdi-pan-vertical::before {\n  content: \"\\FB9A\";\n}\n\n.mdi-panda::before {\n  content: \"\\F3DA\";\n}\n\n.mdi-pandora::before {\n  content: \"\\F3DB\";\n}\n\n.mdi-panorama::before {\n  content: \"\\F3DC\";\n}\n\n.mdi-panorama-fisheye::before {\n  content: \"\\F3DD\";\n}\n\n.mdi-panorama-horizontal::before {\n  content: \"\\F3DE\";\n}\n\n.mdi-panorama-vertical::before {\n  content: \"\\F3DF\";\n}\n\n.mdi-panorama-wide-angle::before {\n  content: \"\\F3E0\";\n}\n\n.mdi-paper-cut-vertical::before {\n  content: \"\\F3E1\";\n}\n\n.mdi-paperclip::before {\n  content: \"\\F3E2\";\n}\n\n.mdi-parachute::before {\n  content: \"\\FC90\";\n}\n\n.mdi-parachute-outline::before {\n  content: \"\\FC91\";\n}\n\n.mdi-parking::before {\n  content: \"\\F3E3\";\n}\n\n.mdi-party-popper::before {\n  content: \"\\F0078\";\n}\n\n.mdi-passport::before {\n  content: \"\\F7E2\";\n}\n\n.mdi-passport-biometric::before {\n  content: \"\\FDBD\";\n}\n\n.mdi-patio-heater::before {\n  content: \"\\FF9D\";\n}\n\n.mdi-patreon::before {\n  content: \"\\F881\";\n}\n\n.mdi-pause::before {\n  content: \"\\F3E4\";\n}\n\n.mdi-pause-circle::before {\n  content: \"\\F3E5\";\n}\n\n.mdi-pause-circle-outline::before {\n  content: \"\\F3E6\";\n}\n\n.mdi-pause-octagon::before {\n  content: \"\\F3E7\";\n}\n\n.mdi-pause-octagon-outline::before {\n  content: \"\\F3E8\";\n}\n\n.mdi-paw::before {\n  content: \"\\F3E9\";\n}\n\n.mdi-paw-off::before {\n  content: \"\\F657\";\n}\n\n.mdi-paypal::before {\n  content: \"\\F882\";\n}\n\n.mdi-pdf-box::before {\n  content: \"\\FE39\";\n}\n\n.mdi-peace::before {\n  content: \"\\F883\";\n}\n\n.mdi-peanut::before {\n  content: \"\\F001E\";\n}\n\n.mdi-peanut-off::before {\n  content: \"\\F001F\";\n}\n\n.mdi-peanut-off-outline::before {\n  content: \"\\F0021\";\n}\n\n.mdi-peanut-outline::before {\n  content: \"\\F0020\";\n}\n\n.mdi-pen::before {\n  content: \"\\F3EA\";\n}\n\n.mdi-pen-lock::before {\n  content: \"\\FDBE\";\n}\n\n.mdi-pen-minus::before {\n  content: \"\\FDBF\";\n}\n\n.mdi-pen-off::before {\n  content: \"\\FDC0\";\n}\n\n.mdi-pen-plus::before {\n  content: \"\\FDC1\";\n}\n\n.mdi-pen-remove::before {\n  content: \"\\FDC2\";\n}\n\n.mdi-pencil::before {\n  content: \"\\F3EB\";\n}\n\n.mdi-pencil-box::before {\n  content: \"\\F3EC\";\n}\n\n.mdi-pencil-box-outline::before {\n  content: \"\\F3ED\";\n}\n\n.mdi-pencil-circle::before {\n  content: \"\\F6FE\";\n}\n\n.mdi-pencil-circle-outline::before {\n  content: \"\\F775\";\n}\n\n.mdi-pencil-lock::before {\n  content: \"\\F3EE\";\n}\n\n.mdi-pencil-lock-outline::before {\n  content: \"\\FDC3\";\n}\n\n.mdi-pencil-minus::before {\n  content: \"\\FDC4\";\n}\n\n.mdi-pencil-minus-outline::before {\n  content: \"\\FDC5\";\n}\n\n.mdi-pencil-off::before {\n  content: \"\\F3EF\";\n}\n\n.mdi-pencil-off-outline::before {\n  content: \"\\FDC6\";\n}\n\n.mdi-pencil-outline::before {\n  content: \"\\FC92\";\n}\n\n.mdi-pencil-plus::before {\n  content: \"\\FDC7\";\n}\n\n.mdi-pencil-plus-outline::before {\n  content: \"\\FDC8\";\n}\n\n.mdi-pencil-remove::before {\n  content: \"\\FDC9\";\n}\n\n.mdi-pencil-remove-outline::before {\n  content: \"\\FDCA\";\n}\n\n.mdi-penguin::before {\n  content: \"\\FEDD\";\n}\n\n.mdi-pentagon::before {\n  content: \"\\F6FF\";\n}\n\n.mdi-pentagon-outline::before {\n  content: \"\\F700\";\n}\n\n.mdi-percent::before {\n  content: \"\\F3F0\";\n}\n\n.mdi-periodic-table::before {\n  content: \"\\F8B5\";\n}\n\n.mdi-periodic-table-co2::before {\n  content: \"\\F7E3\";\n}\n\n.mdi-periscope::before {\n  content: \"\\F747\";\n}\n\n.mdi-perspective-less::before {\n  content: \"\\FCFF\";\n}\n\n.mdi-perspective-more::before {\n  content: \"\\FD00\";\n}\n\n.mdi-pharmacy::before {\n  content: \"\\F3F1\";\n}\n\n.mdi-phone::before {\n  content: \"\\F3F2\";\n}\n\n.mdi-phone-alert::before {\n  content: \"\\FF37\";\n}\n\n.mdi-phone-bluetooth::before {\n  content: \"\\F3F3\";\n}\n\n.mdi-phone-cancel::before {\n  content: \"\\F00E7\";\n}\n\n.mdi-phone-classic::before {\n  content: \"\\F602\";\n}\n\n.mdi-phone-forward::before {\n  content: \"\\F3F4\";\n}\n\n.mdi-phone-hangup::before {\n  content: \"\\F3F5\";\n}\n\n.mdi-phone-in-talk::before {\n  content: \"\\F3F6\";\n}\n\n.mdi-phone-incoming::before {\n  content: \"\\F3F7\";\n}\n\n.mdi-phone-lock::before {\n  content: \"\\F3F8\";\n}\n\n.mdi-phone-log::before {\n  content: \"\\F3F9\";\n}\n\n.mdi-phone-minus::before {\n  content: \"\\F658\";\n}\n\n.mdi-phone-missed::before {\n  content: \"\\F3FA\";\n}\n\n.mdi-phone-off::before {\n  content: \"\\FDCB\";\n}\n\n.mdi-phone-outgoing::before {\n  content: \"\\F3FB\";\n}\n\n.mdi-phone-outline::before {\n  content: \"\\FDCC\";\n}\n\n.mdi-phone-paused::before {\n  content: \"\\F3FC\";\n}\n\n.mdi-phone-plus::before {\n  content: \"\\F659\";\n}\n\n.mdi-phone-return::before {\n  content: \"\\F82E\";\n}\n\n.mdi-phone-rotate-landscape::before {\n  content: \"\\F884\";\n}\n\n.mdi-phone-rotate-portrait::before {\n  content: \"\\F885\";\n}\n\n.mdi-phone-settings::before {\n  content: \"\\F3FD\";\n}\n\n.mdi-phone-voip::before {\n  content: \"\\F3FE\";\n}\n\n.mdi-pi::before {\n  content: \"\\F3FF\";\n}\n\n.mdi-pi-box::before {\n  content: \"\\F400\";\n}\n\n.mdi-pi-hole::before {\n  content: \"\\FDCD\";\n}\n\n.mdi-piano::before {\n  content: \"\\F67C\";\n}\n\n.mdi-pickaxe::before {\n  content: \"\\F8B6\";\n}\n\n.mdi-picture-in-picture-bottom-right::before {\n  content: \"\\FE3A\";\n}\n\n.mdi-picture-in-picture-bottom-right-outline::before {\n  content: \"\\FE3B\";\n}\n\n.mdi-picture-in-picture-top-right::before {\n  content: \"\\FE3C\";\n}\n\n.mdi-picture-in-picture-top-right-outline::before {\n  content: \"\\FE3D\";\n}\n\n.mdi-pier::before {\n  content: \"\\F886\";\n}\n\n.mdi-pier-crane::before {\n  content: \"\\F887\";\n}\n\n.mdi-pig::before {\n  content: \"\\F401\";\n}\n\n.mdi-pig-variant::before {\n  content: \"\\F0028\";\n}\n\n.mdi-piggy-bank::before {\n  content: \"\\F0029\";\n}\n\n.mdi-pill::before {\n  content: \"\\F402\";\n}\n\n.mdi-pillar::before {\n  content: \"\\F701\";\n}\n\n.mdi-pin::before {\n  content: \"\\F403\";\n}\n\n.mdi-pin-off::before {\n  content: \"\\F404\";\n}\n\n.mdi-pin-off-outline::before {\n  content: \"\\F92F\";\n}\n\n.mdi-pin-outline::before {\n  content: \"\\F930\";\n}\n\n.mdi-pine-tree::before {\n  content: \"\\F405\";\n}\n\n.mdi-pine-tree-box::before {\n  content: \"\\F406\";\n}\n\n.mdi-pinterest::before {\n  content: \"\\F407\";\n}\n\n.mdi-pinterest-box::before {\n  content: \"\\F408\";\n}\n\n.mdi-pinwheel::before {\n  content: \"\\FAD4\";\n}\n\n.mdi-pinwheel-outline::before {\n  content: \"\\FAD5\";\n}\n\n.mdi-pipe::before {\n  content: \"\\F7E4\";\n}\n\n.mdi-pipe-disconnected::before {\n  content: \"\\F7E5\";\n}\n\n.mdi-pipe-leak::before {\n  content: \"\\F888\";\n}\n\n.mdi-pirate::before {\n  content: \"\\FA07\";\n}\n\n.mdi-pistol::before {\n  content: \"\\F702\";\n}\n\n.mdi-piston::before {\n  content: \"\\F889\";\n}\n\n.mdi-pizza::before {\n  content: \"\\F409\";\n}\n\n.mdi-play::before {\n  content: \"\\F40A\";\n}\n\n.mdi-play-box-outline::before {\n  content: \"\\F40B\";\n}\n\n.mdi-play-circle::before {\n  content: \"\\F40C\";\n}\n\n.mdi-play-circle-outline::before {\n  content: \"\\F40D\";\n}\n\n.mdi-play-network::before {\n  content: \"\\F88A\";\n}\n\n.mdi-play-network-outline::before {\n  content: \"\\FC93\";\n}\n\n.mdi-play-outline::before {\n  content: \"\\FF38\";\n}\n\n.mdi-play-pause::before {\n  content: \"\\F40E\";\n}\n\n.mdi-play-protected-content::before {\n  content: \"\\F40F\";\n}\n\n.mdi-play-speed::before {\n  content: \"\\F8FE\";\n}\n\n.mdi-playlist-check::before {\n  content: \"\\F5C7\";\n}\n\n.mdi-playlist-edit::before {\n  content: \"\\F8FF\";\n}\n\n.mdi-playlist-minus::before {\n  content: \"\\F410\";\n}\n\n.mdi-playlist-music::before {\n  content: \"\\FC94\";\n}\n\n.mdi-playlist-music-outline::before {\n  content: \"\\FC95\";\n}\n\n.mdi-playlist-play::before {\n  content: \"\\F411\";\n}\n\n.mdi-playlist-plus::before {\n  content: \"\\F412\";\n}\n\n.mdi-playlist-remove::before {\n  content: \"\\F413\";\n}\n\n.mdi-playlist-star::before {\n  content: \"\\FDCE\";\n}\n\n.mdi-playstation::before {\n  content: \"\\F414\";\n}\n\n.mdi-plex::before {\n  content: \"\\F6B9\";\n}\n\n.mdi-plus::before {\n  content: \"\\F415\";\n}\n\n.mdi-plus-box::before {\n  content: \"\\F416\";\n}\n\n.mdi-plus-box-multiple::before {\n  content: \"\\F334\";\n}\n\n.mdi-plus-box-outline::before {\n  content: \"\\F703\";\n}\n\n.mdi-plus-circle::before {\n  content: \"\\F417\";\n}\n\n.mdi-plus-circle-multiple-outline::before {\n  content: \"\\F418\";\n}\n\n.mdi-plus-circle-outline::before {\n  content: \"\\F419\";\n}\n\n.mdi-plus-minus::before {\n  content: \"\\F991\";\n}\n\n.mdi-plus-minus-box::before {\n  content: \"\\F992\";\n}\n\n.mdi-plus-network::before {\n  content: \"\\F41A\";\n}\n\n.mdi-plus-network-outline::before {\n  content: \"\\FC96\";\n}\n\n.mdi-plus-one::before {\n  content: \"\\F41B\";\n}\n\n.mdi-plus-outline::before {\n  content: \"\\F704\";\n}\n\n.mdi-pocket::before {\n  content: \"\\F41C\";\n}\n\n.mdi-podcast::before {\n  content: \"\\F993\";\n}\n\n.mdi-podium::before {\n  content: \"\\FD01\";\n}\n\n.mdi-podium-bronze::before {\n  content: \"\\FD02\";\n}\n\n.mdi-podium-gold::before {\n  content: \"\\FD03\";\n}\n\n.mdi-podium-silver::before {\n  content: \"\\FD04\";\n}\n\n.mdi-point-of-sale::before {\n  content: \"\\FD6E\";\n}\n\n.mdi-pokeball::before {\n  content: \"\\F41D\";\n}\n\n.mdi-pokemon-go::before {\n  content: \"\\FA08\";\n}\n\n.mdi-poker-chip::before {\n  content: \"\\F82F\";\n}\n\n.mdi-polaroid::before {\n  content: \"\\F41E\";\n}\n\n.mdi-poll::before {\n  content: \"\\F41F\";\n}\n\n.mdi-poll-box::before {\n  content: \"\\F420\";\n}\n\n.mdi-polymer::before {\n  content: \"\\F421\";\n}\n\n.mdi-pool::before {\n  content: \"\\F606\";\n}\n\n.mdi-popcorn::before {\n  content: \"\\F422\";\n}\n\n.mdi-post::before {\n  content: \"\\F002A\";\n}\n\n.mdi-post-outline::before {\n  content: \"\\F002B\";\n}\n\n.mdi-postage-stamp::before {\n  content: \"\\FC97\";\n}\n\n.mdi-pot::before {\n  content: \"\\F65A\";\n}\n\n.mdi-pot-mix::before {\n  content: \"\\F65B\";\n}\n\n.mdi-pound::before {\n  content: \"\\F423\";\n}\n\n.mdi-pound-box::before {\n  content: \"\\F424\";\n}\n\n.mdi-power::before {\n  content: \"\\F425\";\n}\n\n.mdi-power-cycle::before {\n  content: \"\\F900\";\n}\n\n.mdi-power-off::before {\n  content: \"\\F901\";\n}\n\n.mdi-power-on::before {\n  content: \"\\F902\";\n}\n\n.mdi-power-plug::before {\n  content: \"\\F6A4\";\n}\n\n.mdi-power-plug-off::before {\n  content: \"\\F6A5\";\n}\n\n.mdi-power-settings::before {\n  content: \"\\F426\";\n}\n\n.mdi-power-sleep::before {\n  content: \"\\F903\";\n}\n\n.mdi-power-socket::before {\n  content: \"\\F427\";\n}\n\n.mdi-power-socket-au::before {\n  content: \"\\F904\";\n}\n\n.mdi-power-socket-eu::before {\n  content: \"\\F7E6\";\n}\n\n.mdi-power-socket-uk::before {\n  content: \"\\F7E7\";\n}\n\n.mdi-power-socket-us::before {\n  content: \"\\F7E8\";\n}\n\n.mdi-power-standby::before {\n  content: \"\\F905\";\n}\n\n.mdi-powershell::before {\n  content: \"\\FA09\";\n}\n\n.mdi-prescription::before {\n  content: \"\\F705\";\n}\n\n.mdi-presentation::before {\n  content: \"\\F428\";\n}\n\n.mdi-presentation-play::before {\n  content: \"\\F429\";\n}\n\n.mdi-printer::before {\n  content: \"\\F42A\";\n}\n\n.mdi-printer-3d::before {\n  content: \"\\F42B\";\n}\n\n.mdi-printer-3d-nozzle::before {\n  content: \"\\FE3E\";\n}\n\n.mdi-printer-3d-nozzle-outline::before {\n  content: \"\\FE3F\";\n}\n\n.mdi-printer-alert::before {\n  content: \"\\F42C\";\n}\n\n.mdi-printer-off::before {\n  content: \"\\FE40\";\n}\n\n.mdi-printer-pos::before {\n  content: \"\\F0079\";\n}\n\n.mdi-printer-settings::before {\n  content: \"\\F706\";\n}\n\n.mdi-printer-wireless::before {\n  content: \"\\FA0A\";\n}\n\n.mdi-priority-high::before {\n  content: \"\\F603\";\n}\n\n.mdi-priority-low::before {\n  content: \"\\F604\";\n}\n\n.mdi-professional-hexagon::before {\n  content: \"\\F42D\";\n}\n\n.mdi-progress-alert::before {\n  content: \"\\FC98\";\n}\n\n.mdi-progress-check::before {\n  content: \"\\F994\";\n}\n\n.mdi-progress-clock::before {\n  content: \"\\F995\";\n}\n\n.mdi-progress-download::before {\n  content: \"\\F996\";\n}\n\n.mdi-progress-upload::before {\n  content: \"\\F997\";\n}\n\n.mdi-progress-wrench::before {\n  content: \"\\FC99\";\n}\n\n.mdi-projector::before {\n  content: \"\\F42E\";\n}\n\n.mdi-projector-screen::before {\n  content: \"\\F42F\";\n}\n\n.mdi-protocol::before {\n  content: \"\\FFF9\";\n}\n\n.mdi-publish::before {\n  content: \"\\F6A6\";\n}\n\n.mdi-pulse::before {\n  content: \"\\F430\";\n}\n\n.mdi-pumpkin::before {\n  content: \"\\FB9B\";\n}\n\n.mdi-purse::before {\n  content: \"\\FF39\";\n}\n\n.mdi-purse-outline::before {\n  content: \"\\FF3A\";\n}\n\n.mdi-puzzle::before {\n  content: \"\\F431\";\n}\n\n.mdi-puzzle-outline::before {\n  content: \"\\FA65\";\n}\n\n.mdi-qi::before {\n  content: \"\\F998\";\n}\n\n.mdi-qqchat::before {\n  content: \"\\F605\";\n}\n\n.mdi-qrcode::before {\n  content: \"\\F432\";\n}\n\n.mdi-qrcode-edit::before {\n  content: \"\\F8B7\";\n}\n\n.mdi-qrcode-scan::before {\n  content: \"\\F433\";\n}\n\n.mdi-quadcopter::before {\n  content: \"\\F434\";\n}\n\n.mdi-quality-high::before {\n  content: \"\\F435\";\n}\n\n.mdi-quality-low::before {\n  content: \"\\FA0B\";\n}\n\n.mdi-quality-medium::before {\n  content: \"\\FA0C\";\n}\n\n.mdi-quicktime::before {\n  content: \"\\F436\";\n}\n\n.mdi-quora::before {\n  content: \"\\FD05\";\n}\n\n.mdi-rabbit::before {\n  content: \"\\F906\";\n}\n\n.mdi-racing-helmet::before {\n  content: \"\\FD6F\";\n}\n\n.mdi-racquetball::before {\n  content: \"\\FD70\";\n}\n\n.mdi-radar::before {\n  content: \"\\F437\";\n}\n\n.mdi-radiator::before {\n  content: \"\\F438\";\n}\n\n.mdi-radiator-disabled::before {\n  content: \"\\FAD6\";\n}\n\n.mdi-radiator-off::before {\n  content: \"\\FAD7\";\n}\n\n.mdi-radio::before {\n  content: \"\\F439\";\n}\n\n.mdi-radio-am::before {\n  content: \"\\FC9A\";\n}\n\n.mdi-radio-fm::before {\n  content: \"\\FC9B\";\n}\n\n.mdi-radio-handheld::before {\n  content: \"\\F43A\";\n}\n\n.mdi-radio-tower::before {\n  content: \"\\F43B\";\n}\n\n.mdi-radioactive::before {\n  content: \"\\F43C\";\n}\n\n.mdi-radioactive-off::before {\n  content: \"\\FEDE\";\n}\n\n.mdi-radiobox-blank::before {\n  content: \"\\F43D\";\n}\n\n.mdi-radiobox-marked::before {\n  content: \"\\F43E\";\n}\n\n.mdi-radius::before {\n  content: \"\\FC9C\";\n}\n\n.mdi-radius-outline::before {\n  content: \"\\FC9D\";\n}\n\n.mdi-railroad-light::before {\n  content: \"\\FF3B\";\n}\n\n.mdi-raspberry-pi::before {\n  content: \"\\F43F\";\n}\n\n.mdi-ray-end::before {\n  content: \"\\F440\";\n}\n\n.mdi-ray-end-arrow::before {\n  content: \"\\F441\";\n}\n\n.mdi-ray-start::before {\n  content: \"\\F442\";\n}\n\n.mdi-ray-start-arrow::before {\n  content: \"\\F443\";\n}\n\n.mdi-ray-start-end::before {\n  content: \"\\F444\";\n}\n\n.mdi-ray-vertex::before {\n  content: \"\\F445\";\n}\n\n.mdi-react::before {\n  content: \"\\F707\";\n}\n\n.mdi-read::before {\n  content: \"\\F447\";\n}\n\n.mdi-receipt::before {\n  content: \"\\F449\";\n}\n\n.mdi-record::before {\n  content: \"\\F44A\";\n}\n\n.mdi-record-circle::before {\n  content: \"\\FEDF\";\n}\n\n.mdi-record-circle-outline::before {\n  content: \"\\FEE0\";\n}\n\n.mdi-record-player::before {\n  content: \"\\F999\";\n}\n\n.mdi-record-rec::before {\n  content: \"\\F44B\";\n}\n\n.mdi-rectangle::before {\n  content: \"\\FE41\";\n}\n\n.mdi-rectangle-outline::before {\n  content: \"\\FE42\";\n}\n\n.mdi-recycle::before {\n  content: \"\\F44C\";\n}\n\n.mdi-reddit::before {\n  content: \"\\F44D\";\n}\n\n.mdi-redo::before {\n  content: \"\\F44E\";\n}\n\n.mdi-redo-variant::before {\n  content: \"\\F44F\";\n}\n\n.mdi-reflect-horizontal::before {\n  content: \"\\FA0D\";\n}\n\n.mdi-reflect-vertical::before {\n  content: \"\\FA0E\";\n}\n\n.mdi-refresh::before {\n  content: \"\\F450\";\n}\n\n.mdi-regex::before {\n  content: \"\\F451\";\n}\n\n.mdi-registered-trademark::before {\n  content: \"\\FA66\";\n}\n\n.mdi-relative-scale::before {\n  content: \"\\F452\";\n}\n\n.mdi-reload::before {\n  content: \"\\F453\";\n}\n\n.mdi-reminder::before {\n  content: \"\\F88B\";\n}\n\n.mdi-remote::before {\n  content: \"\\F454\";\n}\n\n.mdi-remote-desktop::before {\n  content: \"\\F8B8\";\n}\n\n.mdi-remote-off::before {\n  content: \"\\FEE1\";\n}\n\n.mdi-remote-tv::before {\n  content: \"\\FEE2\";\n}\n\n.mdi-remote-tv-off::before {\n  content: \"\\FEE3\";\n}\n\n.mdi-rename-box::before {\n  content: \"\\F455\";\n}\n\n.mdi-reorder-horizontal::before {\n  content: \"\\F687\";\n}\n\n.mdi-reorder-vertical::before {\n  content: \"\\F688\";\n}\n\n.mdi-repeat::before {\n  content: \"\\F456\";\n}\n\n.mdi-repeat-off::before {\n  content: \"\\F457\";\n}\n\n.mdi-repeat-once::before {\n  content: \"\\F458\";\n}\n\n.mdi-replay::before {\n  content: \"\\F459\";\n}\n\n.mdi-reply::before {\n  content: \"\\F45A\";\n}\n\n.mdi-reply-all::before {\n  content: \"\\F45B\";\n}\n\n.mdi-reply-all-outline::before {\n  content: \"\\FF3C\";\n}\n\n.mdi-reply-outline::before {\n  content: \"\\FF3D\";\n}\n\n.mdi-reproduction::before {\n  content: \"\\F45C\";\n}\n\n.mdi-resistor::before {\n  content: \"\\FB1F\";\n}\n\n.mdi-resistor-nodes::before {\n  content: \"\\FB20\";\n}\n\n.mdi-resize::before {\n  content: \"\\FA67\";\n}\n\n.mdi-resize-bottom-right::before {\n  content: \"\\F45D\";\n}\n\n.mdi-responsive::before {\n  content: \"\\F45E\";\n}\n\n.mdi-restart::before {\n  content: \"\\F708\";\n}\n\n.mdi-restart-off::before {\n  content: \"\\FD71\";\n}\n\n.mdi-restore::before {\n  content: \"\\F99A\";\n}\n\n.mdi-rewind::before {\n  content: \"\\F45F\";\n}\n\n.mdi-rewind-10::before {\n  content: \"\\FD06\";\n}\n\n.mdi-rewind-30::before {\n  content: \"\\FD72\";\n}\n\n.mdi-rewind-outline::before {\n  content: \"\\F709\";\n}\n\n.mdi-rhombus::before {\n  content: \"\\F70A\";\n}\n\n.mdi-rhombus-medium::before {\n  content: \"\\FA0F\";\n}\n\n.mdi-rhombus-outline::before {\n  content: \"\\F70B\";\n}\n\n.mdi-rhombus-split::before {\n  content: \"\\FA10\";\n}\n\n.mdi-ribbon::before {\n  content: \"\\F460\";\n}\n\n.mdi-rice::before {\n  content: \"\\F7E9\";\n}\n\n.mdi-ring::before {\n  content: \"\\F7EA\";\n}\n\n.mdi-rivet::before {\n  content: \"\\FE43\";\n}\n\n.mdi-road::before {\n  content: \"\\F461\";\n}\n\n.mdi-road-variant::before {\n  content: \"\\F462\";\n}\n\n.mdi-robber::before {\n  content: \"\\F007A\";\n}\n\n.mdi-robot::before {\n  content: \"\\F6A8\";\n}\n\n.mdi-robot-industrial::before {\n  content: \"\\FB21\";\n}\n\n.mdi-robot-vacuum::before {\n  content: \"\\F70C\";\n}\n\n.mdi-robot-vacuum-variant::before {\n  content: \"\\F907\";\n}\n\n.mdi-rocket::before {\n  content: \"\\F463\";\n}\n\n.mdi-roller-skate::before {\n  content: \"\\FD07\";\n}\n\n.mdi-rollerblade::before {\n  content: \"\\FD08\";\n}\n\n.mdi-rollupjs::before {\n  content: \"\\FB9C\";\n}\n\n.mdi-roman-numeral-1::before {\n  content: \"\\F00B3\";\n}\n\n.mdi-roman-numeral-10::before {\n  content: \"\\F00BC\";\n}\n\n.mdi-roman-numeral-2::before {\n  content: \"\\F00B4\";\n}\n\n.mdi-roman-numeral-3::before {\n  content: \"\\F00B5\";\n}\n\n.mdi-roman-numeral-4::before {\n  content: \"\\F00B6\";\n}\n\n.mdi-roman-numeral-5::before {\n  content: \"\\F00B7\";\n}\n\n.mdi-roman-numeral-6::before {\n  content: \"\\F00B8\";\n}\n\n.mdi-roman-numeral-7::before {\n  content: \"\\F00B9\";\n}\n\n.mdi-roman-numeral-8::before {\n  content: \"\\F00BA\";\n}\n\n.mdi-roman-numeral-9::before {\n  content: \"\\F00BB\";\n}\n\n.mdi-room-service::before {\n  content: \"\\F88C\";\n}\n\n.mdi-room-service-outline::before {\n  content: \"\\FD73\";\n}\n\n.mdi-rotate-3d::before {\n  content: \"\\FEE4\";\n}\n\n.mdi-rotate-3d-variant::before {\n  content: \"\\F464\";\n}\n\n.mdi-rotate-left::before {\n  content: \"\\F465\";\n}\n\n.mdi-rotate-left-variant::before {\n  content: \"\\F466\";\n}\n\n.mdi-rotate-orbit::before {\n  content: \"\\FD74\";\n}\n\n.mdi-rotate-right::before {\n  content: \"\\F467\";\n}\n\n.mdi-rotate-right-variant::before {\n  content: \"\\F468\";\n}\n\n.mdi-rounded-corner::before {\n  content: \"\\F607\";\n}\n\n.mdi-router-wireless::before {\n  content: \"\\F469\";\n}\n\n.mdi-router-wireless-settings::before {\n  content: \"\\FA68\";\n}\n\n.mdi-routes::before {\n  content: \"\\F46A\";\n}\n\n.mdi-routes-clock::before {\n  content: \"\\F007B\";\n}\n\n.mdi-rowing::before {\n  content: \"\\F608\";\n}\n\n.mdi-rss::before {\n  content: \"\\F46B\";\n}\n\n.mdi-rss-box::before {\n  content: \"\\F46C\";\n}\n\n.mdi-rss-off::before {\n  content: \"\\FF3E\";\n}\n\n.mdi-ruby::before {\n  content: \"\\FD09\";\n}\n\n.mdi-rugby::before {\n  content: \"\\FD75\";\n}\n\n.mdi-ruler::before {\n  content: \"\\F46D\";\n}\n\n.mdi-ruler-square::before {\n  content: \"\\FC9E\";\n}\n\n.mdi-ruler-square-compass::before {\n  content: \"\\FEDB\";\n}\n\n.mdi-run::before {\n  content: \"\\F70D\";\n}\n\n.mdi-run-fast::before {\n  content: \"\\F46E\";\n}\n\n.mdi-sack::before {\n  content: \"\\FD0A\";\n}\n\n.mdi-sack-percent::before {\n  content: \"\\FD0B\";\n}\n\n.mdi-safe::before {\n  content: \"\\FA69\";\n}\n\n.mdi-safety-goggles::before {\n  content: \"\\FD0C\";\n}\n\n.mdi-sailing::before {\n  content: \"\\FEE5\";\n}\n\n.mdi-sale::before {\n  content: \"\\F46F\";\n}\n\n.mdi-salesforce::before {\n  content: \"\\F88D\";\n}\n\n.mdi-sass::before {\n  content: \"\\F7EB\";\n}\n\n.mdi-satellite::before {\n  content: \"\\F470\";\n}\n\n.mdi-satellite-uplink::before {\n  content: \"\\F908\";\n}\n\n.mdi-satellite-variant::before {\n  content: \"\\F471\";\n}\n\n.mdi-sausage::before {\n  content: \"\\F8B9\";\n}\n\n.mdi-saw-blade::before {\n  content: \"\\FE44\";\n}\n\n.mdi-saxophone::before {\n  content: \"\\F609\";\n}\n\n.mdi-scale::before {\n  content: \"\\F472\";\n}\n\n.mdi-scale-balance::before {\n  content: \"\\F5D1\";\n}\n\n.mdi-scale-bathroom::before {\n  content: \"\\F473\";\n}\n\n.mdi-scale-off::before {\n  content: \"\\F007C\";\n}\n\n.mdi-scanner::before {\n  content: \"\\F6AA\";\n}\n\n.mdi-scanner-off::before {\n  content: \"\\F909\";\n}\n\n.mdi-scatter-plot::before {\n  content: \"\\FEE6\";\n}\n\n.mdi-scatter-plot-outline::before {\n  content: \"\\FEE7\";\n}\n\n.mdi-school::before {\n  content: \"\\F474\";\n}\n\n.mdi-scissors-cutting::before {\n  content: \"\\FA6A\";\n}\n\n.mdi-screen-rotation::before {\n  content: \"\\F475\";\n}\n\n.mdi-screen-rotation-lock::before {\n  content: \"\\F476\";\n}\n\n.mdi-screw-flat-top::before {\n  content: \"\\FDCF\";\n}\n\n.mdi-screw-lag::before {\n  content: \"\\FE54\";\n}\n\n.mdi-screw-machine-flat-top::before {\n  content: \"\\FE55\";\n}\n\n.mdi-screw-machine-round-top::before {\n  content: \"\\FE56\";\n}\n\n.mdi-screw-round-top::before {\n  content: \"\\FE57\";\n}\n\n.mdi-screwdriver::before {\n  content: \"\\F477\";\n}\n\n.mdi-script::before {\n  content: \"\\FB9D\";\n}\n\n.mdi-script-outline::before {\n  content: \"\\F478\";\n}\n\n.mdi-script-text::before {\n  content: \"\\FB9E\";\n}\n\n.mdi-script-text-outline::before {\n  content: \"\\FB9F\";\n}\n\n.mdi-sd::before {\n  content: \"\\F479\";\n}\n\n.mdi-seal::before {\n  content: \"\\F47A\";\n}\n\n.mdi-seal-variant::before {\n  content: \"\\FFFA\";\n}\n\n.mdi-search-web::before {\n  content: \"\\F70E\";\n}\n\n.mdi-seat::before {\n  content: \"\\FC9F\";\n}\n\n.mdi-seat-flat::before {\n  content: \"\\F47B\";\n}\n\n.mdi-seat-flat-angled::before {\n  content: \"\\F47C\";\n}\n\n.mdi-seat-individual-suite::before {\n  content: \"\\F47D\";\n}\n\n.mdi-seat-legroom-extra::before {\n  content: \"\\F47E\";\n}\n\n.mdi-seat-legroom-normal::before {\n  content: \"\\F47F\";\n}\n\n.mdi-seat-legroom-reduced::before {\n  content: \"\\F480\";\n}\n\n.mdi-seat-outline::before {\n  content: \"\\FCA0\";\n}\n\n.mdi-seat-recline-extra::before {\n  content: \"\\F481\";\n}\n\n.mdi-seat-recline-normal::before {\n  content: \"\\F482\";\n}\n\n.mdi-seatbelt::before {\n  content: \"\\FCA1\";\n}\n\n.mdi-security::before {\n  content: \"\\F483\";\n}\n\n.mdi-security-network::before {\n  content: \"\\F484\";\n}\n\n.mdi-seed::before {\n  content: \"\\FE45\";\n}\n\n.mdi-seed-outline::before {\n  content: \"\\FE46\";\n}\n\n.mdi-segment::before {\n  content: \"\\FEE8\";\n}\n\n.mdi-select::before {\n  content: \"\\F485\";\n}\n\n.mdi-select-all::before {\n  content: \"\\F486\";\n}\n\n.mdi-select-color::before {\n  content: \"\\FD0D\";\n}\n\n.mdi-select-compare::before {\n  content: \"\\FAD8\";\n}\n\n.mdi-select-drag::before {\n  content: \"\\FA6B\";\n}\n\n.mdi-select-group::before {\n  content: \"\\FF9F\";\n}\n\n.mdi-select-inverse::before {\n  content: \"\\F487\";\n}\n\n.mdi-select-off::before {\n  content: \"\\F488\";\n}\n\n.mdi-select-place::before {\n  content: \"\\FFFB\";\n}\n\n.mdi-selection::before {\n  content: \"\\F489\";\n}\n\n.mdi-selection-drag::before {\n  content: \"\\FA6C\";\n}\n\n.mdi-selection-ellipse::before {\n  content: \"\\FD0E\";\n}\n\n.mdi-selection-ellipse-arrow-inside::before {\n  content: \"\\FF3F\";\n}\n\n.mdi-selection-off::before {\n  content: \"\\F776\";\n}\n\n.mdi-send::before {\n  content: \"\\F48A\";\n}\n\n.mdi-send-circle::before {\n  content: \"\\FE58\";\n}\n\n.mdi-send-circle-outline::before {\n  content: \"\\FE59\";\n}\n\n.mdi-send-lock::before {\n  content: \"\\F7EC\";\n}\n\n.mdi-serial-port::before {\n  content: \"\\F65C\";\n}\n\n.mdi-server::before {\n  content: \"\\F48B\";\n}\n\n.mdi-server-minus::before {\n  content: \"\\F48C\";\n}\n\n.mdi-server-network::before {\n  content: \"\\F48D\";\n}\n\n.mdi-server-network-off::before {\n  content: \"\\F48E\";\n}\n\n.mdi-server-off::before {\n  content: \"\\F48F\";\n}\n\n.mdi-server-plus::before {\n  content: \"\\F490\";\n}\n\n.mdi-server-remove::before {\n  content: \"\\F491\";\n}\n\n.mdi-server-security::before {\n  content: \"\\F492\";\n}\n\n.mdi-set-all::before {\n  content: \"\\F777\";\n}\n\n.mdi-set-center::before {\n  content: \"\\F778\";\n}\n\n.mdi-set-center-right::before {\n  content: \"\\F779\";\n}\n\n.mdi-set-left::before {\n  content: \"\\F77A\";\n}\n\n.mdi-set-left-center::before {\n  content: \"\\F77B\";\n}\n\n.mdi-set-left-right::before {\n  content: \"\\F77C\";\n}\n\n.mdi-set-none::before {\n  content: \"\\F77D\";\n}\n\n.mdi-set-right::before {\n  content: \"\\F77E\";\n}\n\n.mdi-set-top-box::before {\n  content: \"\\F99E\";\n}\n\n.mdi-settings::before {\n  content: \"\\F493\";\n}\n\n.mdi-settings-box::before {\n  content: \"\\F494\";\n}\n\n.mdi-settings-helper::before {\n  content: \"\\FA6D\";\n}\n\n.mdi-settings-outline::before {\n  content: \"\\F8BA\";\n}\n\n.mdi-settings-transfer::before {\n  content: \"\\F007D\";\n}\n\n.mdi-settings-transfer-outline::before {\n  content: \"\\F007E\";\n}\n\n.mdi-shape::before {\n  content: \"\\F830\";\n}\n\n.mdi-shape-circle-plus::before {\n  content: \"\\F65D\";\n}\n\n.mdi-shape-outline::before {\n  content: \"\\F831\";\n}\n\n.mdi-shape-plus::before {\n  content: \"\\F495\";\n}\n\n.mdi-shape-polygon-plus::before {\n  content: \"\\F65E\";\n}\n\n.mdi-shape-rectangle-plus::before {\n  content: \"\\F65F\";\n}\n\n.mdi-shape-square-plus::before {\n  content: \"\\F660\";\n}\n\n.mdi-share::before {\n  content: \"\\F496\";\n}\n\n.mdi-share-off::before {\n  content: \"\\FF40\";\n}\n\n.mdi-share-off-outline::before {\n  content: \"\\FF41\";\n}\n\n.mdi-share-outline::before {\n  content: \"\\F931\";\n}\n\n.mdi-share-variant::before {\n  content: \"\\F497\";\n}\n\n.mdi-sheep::before {\n  content: \"\\FCA2\";\n}\n\n.mdi-shield::before {\n  content: \"\\F498\";\n}\n\n.mdi-shield-account::before {\n  content: \"\\F88E\";\n}\n\n.mdi-shield-account-outline::before {\n  content: \"\\FA11\";\n}\n\n.mdi-shield-airplane::before {\n  content: \"\\F6BA\";\n}\n\n.mdi-shield-airplane-outline::before {\n  content: \"\\FCA3\";\n}\n\n.mdi-shield-alert::before {\n  content: \"\\FEE9\";\n}\n\n.mdi-shield-alert-outline::before {\n  content: \"\\FEEA\";\n}\n\n.mdi-shield-car::before {\n  content: \"\\FFA0\";\n}\n\n.mdi-shield-check::before {\n  content: \"\\F565\";\n}\n\n.mdi-shield-check-outline::before {\n  content: \"\\FCA4\";\n}\n\n.mdi-shield-cross::before {\n  content: \"\\FCA5\";\n}\n\n.mdi-shield-cross-outline::before {\n  content: \"\\FCA6\";\n}\n\n.mdi-shield-half-full::before {\n  content: \"\\F77F\";\n}\n\n.mdi-shield-home::before {\n  content: \"\\F689\";\n}\n\n.mdi-shield-home-outline::before {\n  content: \"\\FCA7\";\n}\n\n.mdi-shield-key::before {\n  content: \"\\FBA0\";\n}\n\n.mdi-shield-key-outline::before {\n  content: \"\\FBA1\";\n}\n\n.mdi-shield-link-variant::before {\n  content: \"\\FD0F\";\n}\n\n.mdi-shield-link-variant-outline::before {\n  content: \"\\FD10\";\n}\n\n.mdi-shield-lock::before {\n  content: \"\\F99C\";\n}\n\n.mdi-shield-lock-outline::before {\n  content: \"\\FCA8\";\n}\n\n.mdi-shield-off::before {\n  content: \"\\F99D\";\n}\n\n.mdi-shield-off-outline::before {\n  content: \"\\F99B\";\n}\n\n.mdi-shield-outline::before {\n  content: \"\\F499\";\n}\n\n.mdi-shield-plus::before {\n  content: \"\\FAD9\";\n}\n\n.mdi-shield-plus-outline::before {\n  content: \"\\FADA\";\n}\n\n.mdi-shield-remove::before {\n  content: \"\\FADB\";\n}\n\n.mdi-shield-remove-outline::before {\n  content: \"\\FADC\";\n}\n\n.mdi-shield-search::before {\n  content: \"\\FD76\";\n}\n\n.mdi-shield-sun::before {\n  content: \"\\F007F\";\n}\n\n.mdi-shield-sun-outline::before {\n  content: \"\\F0080\";\n}\n\n.mdi-ship-wheel::before {\n  content: \"\\F832\";\n}\n\n.mdi-shoe-formal::before {\n  content: \"\\FB22\";\n}\n\n.mdi-shoe-heel::before {\n  content: \"\\FB23\";\n}\n\n.mdi-shoe-print::before {\n  content: \"\\FE5A\";\n}\n\n.mdi-shopify::before {\n  content: \"\\FADD\";\n}\n\n.mdi-shopping::before {\n  content: \"\\F49A\";\n}\n\n.mdi-shopping-music::before {\n  content: \"\\F49B\";\n}\n\n.mdi-shopping-search::before {\n  content: \"\\FFA1\";\n}\n\n.mdi-shovel::before {\n  content: \"\\F70F\";\n}\n\n.mdi-shovel-off::before {\n  content: \"\\F710\";\n}\n\n.mdi-shower::before {\n  content: \"\\F99F\";\n}\n\n.mdi-shower-head::before {\n  content: \"\\F9A0\";\n}\n\n.mdi-shredder::before {\n  content: \"\\F49C\";\n}\n\n.mdi-shuffle::before {\n  content: \"\\F49D\";\n}\n\n.mdi-shuffle-disabled::before {\n  content: \"\\F49E\";\n}\n\n.mdi-shuffle-variant::before {\n  content: \"\\F49F\";\n}\n\n.mdi-sigma::before {\n  content: \"\\F4A0\";\n}\n\n.mdi-sigma-lower::before {\n  content: \"\\F62B\";\n}\n\n.mdi-sign-caution::before {\n  content: \"\\F4A1\";\n}\n\n.mdi-sign-direction::before {\n  content: \"\\F780\";\n}\n\n.mdi-sign-direction-minus::before {\n  content: \"\\F0022\";\n}\n\n.mdi-sign-direction-plus::before {\n  content: \"\\FFFD\";\n}\n\n.mdi-sign-direction-remove::before {\n  content: \"\\FFFE\";\n}\n\n.mdi-sign-text::before {\n  content: \"\\F781\";\n}\n\n.mdi-signal::before {\n  content: \"\\F4A2\";\n}\n\n.mdi-signal-2g::before {\n  content: \"\\F711\";\n}\n\n.mdi-signal-3g::before {\n  content: \"\\F712\";\n}\n\n.mdi-signal-4g::before {\n  content: \"\\F713\";\n}\n\n.mdi-signal-5g::before {\n  content: \"\\FA6E\";\n}\n\n.mdi-signal-cellular-1::before {\n  content: \"\\F8BB\";\n}\n\n.mdi-signal-cellular-2::before {\n  content: \"\\F8BC\";\n}\n\n.mdi-signal-cellular-3::before {\n  content: \"\\F8BD\";\n}\n\n.mdi-signal-cellular-outline::before {\n  content: \"\\F8BE\";\n}\n\n.mdi-signal-distance-variant::before {\n  content: \"\\FE47\";\n}\n\n.mdi-signal-hspa::before {\n  content: \"\\F714\";\n}\n\n.mdi-signal-hspa-plus::before {\n  content: \"\\F715\";\n}\n\n.mdi-signal-off::before {\n  content: \"\\F782\";\n}\n\n.mdi-signal-variant::before {\n  content: \"\\F60A\";\n}\n\n.mdi-signature::before {\n  content: \"\\FE5B\";\n}\n\n.mdi-signature-freehand::before {\n  content: \"\\FE5C\";\n}\n\n.mdi-signature-image::before {\n  content: \"\\FE5D\";\n}\n\n.mdi-signature-text::before {\n  content: \"\\FE5E\";\n}\n\n.mdi-silo::before {\n  content: \"\\FB24\";\n}\n\n.mdi-silverware::before {\n  content: \"\\F4A3\";\n}\n\n.mdi-silverware-clean::before {\n  content: \"\\FFFF\";\n}\n\n.mdi-silverware-fork::before {\n  content: \"\\F4A4\";\n}\n\n.mdi-silverware-fork-knife::before {\n  content: \"\\FA6F\";\n}\n\n.mdi-silverware-spoon::before {\n  content: \"\\F4A5\";\n}\n\n.mdi-silverware-variant::before {\n  content: \"\\F4A6\";\n}\n\n.mdi-sim::before {\n  content: \"\\F4A7\";\n}\n\n.mdi-sim-alert::before {\n  content: \"\\F4A8\";\n}\n\n.mdi-sim-off::before {\n  content: \"\\F4A9\";\n}\n\n.mdi-sina-weibo::before {\n  content: \"\\FADE\";\n}\n\n.mdi-sitemap::before {\n  content: \"\\F4AA\";\n}\n\n.mdi-skate::before {\n  content: \"\\FD11\";\n}\n\n.mdi-skew-less::before {\n  content: \"\\FD12\";\n}\n\n.mdi-skew-more::before {\n  content: \"\\FD13\";\n}\n\n.mdi-skip-backward::before {\n  content: \"\\F4AB\";\n}\n\n.mdi-skip-backward-outline::before {\n  content: \"\\FF42\";\n}\n\n.mdi-skip-forward::before {\n  content: \"\\F4AC\";\n}\n\n.mdi-skip-forward-outline::before {\n  content: \"\\FF43\";\n}\n\n.mdi-skip-next::before {\n  content: \"\\F4AD\";\n}\n\n.mdi-skip-next-circle::before {\n  content: \"\\F661\";\n}\n\n.mdi-skip-next-circle-outline::before {\n  content: \"\\F662\";\n}\n\n.mdi-skip-next-outline::before {\n  content: \"\\FF44\";\n}\n\n.mdi-skip-previous::before {\n  content: \"\\F4AE\";\n}\n\n.mdi-skip-previous-circle::before {\n  content: \"\\F663\";\n}\n\n.mdi-skip-previous-circle-outline::before {\n  content: \"\\F664\";\n}\n\n.mdi-skip-previous-outline::before {\n  content: \"\\FF45\";\n}\n\n.mdi-skull::before {\n  content: \"\\F68B\";\n}\n\n.mdi-skull-crossbones::before {\n  content: \"\\FBA2\";\n}\n\n.mdi-skull-crossbones-outline::before {\n  content: \"\\FBA3\";\n}\n\n.mdi-skull-outline::before {\n  content: \"\\FBA4\";\n}\n\n.mdi-skype::before {\n  content: \"\\F4AF\";\n}\n\n.mdi-skype-business::before {\n  content: \"\\F4B0\";\n}\n\n.mdi-slack::before {\n  content: \"\\F4B1\";\n}\n\n.mdi-slackware::before {\n  content: \"\\F90A\";\n}\n\n.mdi-slash-forward::before {\n  content: \"\\F0000\";\n}\n\n.mdi-slash-forward-box::before {\n  content: \"\\F0001\";\n}\n\n.mdi-sleep::before {\n  content: \"\\F4B2\";\n}\n\n.mdi-sleep-off::before {\n  content: \"\\F4B3\";\n}\n\n.mdi-slope-downhill::before {\n  content: \"\\FE5F\";\n}\n\n.mdi-slope-uphill::before {\n  content: \"\\FE60\";\n}\n\n.mdi-smart-card::before {\n  content: \"\\F00E8\";\n}\n\n.mdi-smart-card-outline::before {\n  content: \"\\F00E9\";\n}\n\n.mdi-smart-card-reader::before {\n  content: \"\\F00EA\";\n}\n\n.mdi-smart-card-reader-outline::before {\n  content: \"\\F00EB\";\n}\n\n.mdi-smog::before {\n  content: \"\\FA70\";\n}\n\n.mdi-smoke-detector::before {\n  content: \"\\F392\";\n}\n\n.mdi-smoking::before {\n  content: \"\\F4B4\";\n}\n\n.mdi-smoking-off::before {\n  content: \"\\F4B5\";\n}\n\n.mdi-snapchat::before {\n  content: \"\\F4B6\";\n}\n\n.mdi-snowflake::before {\n  content: \"\\F716\";\n}\n\n.mdi-snowflake-alert::before {\n  content: \"\\FF46\";\n}\n\n.mdi-snowflake-variant::before {\n  content: \"\\FF47\";\n}\n\n.mdi-snowman::before {\n  content: \"\\F4B7\";\n}\n\n.mdi-soccer::before {\n  content: \"\\F4B8\";\n}\n\n.mdi-soccer-field::before {\n  content: \"\\F833\";\n}\n\n.mdi-sofa::before {\n  content: \"\\F4B9\";\n}\n\n.mdi-solar-panel::before {\n  content: \"\\FD77\";\n}\n\n.mdi-solar-panel-large::before {\n  content: \"\\FD78\";\n}\n\n.mdi-solar-power::before {\n  content: \"\\FA71\";\n}\n\n.mdi-soldering-iron::before {\n  content: \"\\F00BD\";\n}\n\n.mdi-solid::before {\n  content: \"\\F68C\";\n}\n\n.mdi-sort::before {\n  content: \"\\F4BA\";\n}\n\n.mdi-sort-alphabetical::before {\n  content: \"\\F4BB\";\n}\n\n.mdi-sort-ascending::before {\n  content: \"\\F4BC\";\n}\n\n.mdi-sort-descending::before {\n  content: \"\\F4BD\";\n}\n\n.mdi-sort-numeric::before {\n  content: \"\\F4BE\";\n}\n\n.mdi-sort-variant::before {\n  content: \"\\F4BF\";\n}\n\n.mdi-sort-variant-lock::before {\n  content: \"\\FCA9\";\n}\n\n.mdi-sort-variant-lock-open::before {\n  content: \"\\FCAA\";\n}\n\n.mdi-soundcloud::before {\n  content: \"\\F4C0\";\n}\n\n.mdi-source-branch::before {\n  content: \"\\F62C\";\n}\n\n.mdi-source-commit::before {\n  content: \"\\F717\";\n}\n\n.mdi-source-commit-end::before {\n  content: \"\\F718\";\n}\n\n.mdi-source-commit-end-local::before {\n  content: \"\\F719\";\n}\n\n.mdi-source-commit-local::before {\n  content: \"\\F71A\";\n}\n\n.mdi-source-commit-next-local::before {\n  content: \"\\F71B\";\n}\n\n.mdi-source-commit-start::before {\n  content: \"\\F71C\";\n}\n\n.mdi-source-commit-start-next-local::before {\n  content: \"\\F71D\";\n}\n\n.mdi-source-fork::before {\n  content: \"\\F4C1\";\n}\n\n.mdi-source-merge::before {\n  content: \"\\F62D\";\n}\n\n.mdi-source-pull::before {\n  content: \"\\F4C2\";\n}\n\n.mdi-source-repository::before {\n  content: \"\\FCAB\";\n}\n\n.mdi-source-repository-multiple::before {\n  content: \"\\FCAC\";\n}\n\n.mdi-soy-sauce::before {\n  content: \"\\F7ED\";\n}\n\n.mdi-spa::before {\n  content: \"\\FCAD\";\n}\n\n.mdi-spa-outline::before {\n  content: \"\\FCAE\";\n}\n\n.mdi-space-invaders::before {\n  content: \"\\FBA5\";\n}\n\n.mdi-spade::before {\n  content: \"\\FE48\";\n}\n\n.mdi-speaker::before {\n  content: \"\\F4C3\";\n}\n\n.mdi-speaker-bluetooth::before {\n  content: \"\\F9A1\";\n}\n\n.mdi-speaker-multiple::before {\n  content: \"\\FD14\";\n}\n\n.mdi-speaker-off::before {\n  content: \"\\F4C4\";\n}\n\n.mdi-speaker-wireless::before {\n  content: \"\\F71E\";\n}\n\n.mdi-speedometer::before {\n  content: \"\\F4C5\";\n}\n\n.mdi-speedometer-medium::before {\n  content: \"\\FFA2\";\n}\n\n.mdi-speedometer-slow::before {\n  content: \"\\FFA3\";\n}\n\n.mdi-spellcheck::before {\n  content: \"\\F4C6\";\n}\n\n.mdi-spider-web::before {\n  content: \"\\FBA6\";\n}\n\n.mdi-spotify::before {\n  content: \"\\F4C7\";\n}\n\n.mdi-spotlight::before {\n  content: \"\\F4C8\";\n}\n\n.mdi-spotlight-beam::before {\n  content: \"\\F4C9\";\n}\n\n.mdi-spray::before {\n  content: \"\\F665\";\n}\n\n.mdi-spray-bottle::before {\n  content: \"\\FADF\";\n}\n\n.mdi-sprinkler::before {\n  content: \"\\F0081\";\n}\n\n.mdi-sprinkler-variant::before {\n  content: \"\\F0082\";\n}\n\n.mdi-sprout::before {\n  content: \"\\FE49\";\n}\n\n.mdi-sprout-outline::before {\n  content: \"\\FE4A\";\n}\n\n.mdi-square::before {\n  content: \"\\F763\";\n}\n\n.mdi-square-edit-outline::before {\n  content: \"\\F90B\";\n}\n\n.mdi-square-inc::before {\n  content: \"\\F4CA\";\n}\n\n.mdi-square-inc-cash::before {\n  content: \"\\F4CB\";\n}\n\n.mdi-square-medium::before {\n  content: \"\\FA12\";\n}\n\n.mdi-square-medium-outline::before {\n  content: \"\\FA13\";\n}\n\n.mdi-square-outline::before {\n  content: \"\\F762\";\n}\n\n.mdi-square-root::before {\n  content: \"\\F783\";\n}\n\n.mdi-square-root-box::before {\n  content: \"\\F9A2\";\n}\n\n.mdi-square-small::before {\n  content: \"\\FA14\";\n}\n\n.mdi-squeegee::before {\n  content: \"\\FAE0\";\n}\n\n.mdi-ssh::before {\n  content: \"\\F8BF\";\n}\n\n.mdi-stack-exchange::before {\n  content: \"\\F60B\";\n}\n\n.mdi-stack-overflow::before {\n  content: \"\\F4CC\";\n}\n\n.mdi-stadium::before {\n  content: \"\\F001A\";\n}\n\n.mdi-stadium-variant::before {\n  content: \"\\F71F\";\n}\n\n.mdi-stairs::before {\n  content: \"\\F4CD\";\n}\n\n.mdi-stamper::before {\n  content: \"\\FD15\";\n}\n\n.mdi-standard-definition::before {\n  content: \"\\F7EE\";\n}\n\n.mdi-star::before {\n  content: \"\\F4CE\";\n}\n\n.mdi-star-box::before {\n  content: \"\\FA72\";\n}\n\n.mdi-star-box-outline::before {\n  content: \"\\FA73\";\n}\n\n.mdi-star-circle::before {\n  content: \"\\F4CF\";\n}\n\n.mdi-star-circle-outline::before {\n  content: \"\\F9A3\";\n}\n\n.mdi-star-face::before {\n  content: \"\\F9A4\";\n}\n\n.mdi-star-four-points::before {\n  content: \"\\FAE1\";\n}\n\n.mdi-star-four-points-outline::before {\n  content: \"\\FAE2\";\n}\n\n.mdi-star-half::before {\n  content: \"\\F4D0\";\n}\n\n.mdi-star-off::before {\n  content: \"\\F4D1\";\n}\n\n.mdi-star-outline::before {\n  content: \"\\F4D2\";\n}\n\n.mdi-star-three-points::before {\n  content: \"\\FAE3\";\n}\n\n.mdi-star-three-points-outline::before {\n  content: \"\\FAE4\";\n}\n\n.mdi-steam::before {\n  content: \"\\F4D3\";\n}\n\n.mdi-steam-box::before {\n  content: \"\\F90C\";\n}\n\n.mdi-steering::before {\n  content: \"\\F4D4\";\n}\n\n.mdi-steering-off::before {\n  content: \"\\F90D\";\n}\n\n.mdi-step-backward::before {\n  content: \"\\F4D5\";\n}\n\n.mdi-step-backward-2::before {\n  content: \"\\F4D6\";\n}\n\n.mdi-step-forward::before {\n  content: \"\\F4D7\";\n}\n\n.mdi-step-forward-2::before {\n  content: \"\\F4D8\";\n}\n\n.mdi-stethoscope::before {\n  content: \"\\F4D9\";\n}\n\n.mdi-sticker::before {\n  content: \"\\F5D0\";\n}\n\n.mdi-sticker-emoji::before {\n  content: \"\\F784\";\n}\n\n.mdi-stocking::before {\n  content: \"\\F4DA\";\n}\n\n.mdi-stomach::before {\n  content: \"\\F00BE\";\n}\n\n.mdi-stop::before {\n  content: \"\\F4DB\";\n}\n\n.mdi-stop-circle::before {\n  content: \"\\F666\";\n}\n\n.mdi-stop-circle-outline::before {\n  content: \"\\F667\";\n}\n\n.mdi-store::before {\n  content: \"\\F4DC\";\n}\n\n.mdi-store-24-hour::before {\n  content: \"\\F4DD\";\n}\n\n.mdi-storefront::before {\n  content: \"\\F00EC\";\n}\n\n.mdi-stove::before {\n  content: \"\\F4DE\";\n}\n\n.mdi-strava::before {\n  content: \"\\FB25\";\n}\n\n.mdi-stretch-to-page::before {\n  content: \"\\FF48\";\n}\n\n.mdi-stretch-to-page-outline::before {\n  content: \"\\FF49\";\n}\n\n.mdi-subdirectory-arrow-left::before {\n  content: \"\\F60C\";\n}\n\n.mdi-subdirectory-arrow-right::before {\n  content: \"\\F60D\";\n}\n\n.mdi-subtitles::before {\n  content: \"\\FA15\";\n}\n\n.mdi-subtitles-outline::before {\n  content: \"\\FA16\";\n}\n\n.mdi-subway::before {\n  content: \"\\F6AB\";\n}\n\n.mdi-subway-alert-variant::before {\n  content: \"\\FD79\";\n}\n\n.mdi-subway-variant::before {\n  content: \"\\F4DF\";\n}\n\n.mdi-summit::before {\n  content: \"\\F785\";\n}\n\n.mdi-sunglasses::before {\n  content: \"\\F4E0\";\n}\n\n.mdi-surround-sound::before {\n  content: \"\\F5C5\";\n}\n\n.mdi-surround-sound-2-0::before {\n  content: \"\\F7EF\";\n}\n\n.mdi-surround-sound-3-1::before {\n  content: \"\\F7F0\";\n}\n\n.mdi-surround-sound-5-1::before {\n  content: \"\\F7F1\";\n}\n\n.mdi-surround-sound-7-1::before {\n  content: \"\\F7F2\";\n}\n\n.mdi-svg::before {\n  content: \"\\F720\";\n}\n\n.mdi-swap-horizontal::before {\n  content: \"\\F4E1\";\n}\n\n.mdi-swap-horizontal-bold::before {\n  content: \"\\FBA9\";\n}\n\n.mdi-swap-horizontal-circle::before {\n  content: \"\\F0002\";\n}\n\n.mdi-swap-horizontal-circle-outline::before {\n  content: \"\\F0003\";\n}\n\n.mdi-swap-horizontal-variant::before {\n  content: \"\\F8C0\";\n}\n\n.mdi-swap-vertical::before {\n  content: \"\\F4E2\";\n}\n\n.mdi-swap-vertical-bold::before {\n  content: \"\\FBAA\";\n}\n\n.mdi-swap-vertical-circle::before {\n  content: \"\\F0004\";\n}\n\n.mdi-swap-vertical-circle-outline::before {\n  content: \"\\F0005\";\n}\n\n.mdi-swap-vertical-variant::before {\n  content: \"\\F8C1\";\n}\n\n.mdi-swim::before {\n  content: \"\\F4E3\";\n}\n\n.mdi-switch::before {\n  content: \"\\F4E4\";\n}\n\n.mdi-sword::before {\n  content: \"\\F4E5\";\n}\n\n.mdi-sword-cross::before {\n  content: \"\\F786\";\n}\n\n.mdi-symfony::before {\n  content: \"\\FAE5\";\n}\n\n.mdi-sync::before {\n  content: \"\\F4E6\";\n}\n\n.mdi-sync-alert::before {\n  content: \"\\F4E7\";\n}\n\n.mdi-sync-off::before {\n  content: \"\\F4E8\";\n}\n\n.mdi-tab::before {\n  content: \"\\F4E9\";\n}\n\n.mdi-tab-minus::before {\n  content: \"\\FB26\";\n}\n\n.mdi-tab-plus::before {\n  content: \"\\F75B\";\n}\n\n.mdi-tab-remove::before {\n  content: \"\\FB27\";\n}\n\n.mdi-tab-unselected::before {\n  content: \"\\F4EA\";\n}\n\n.mdi-table::before {\n  content: \"\\F4EB\";\n}\n\n.mdi-table-border::before {\n  content: \"\\FA17\";\n}\n\n.mdi-table-chair::before {\n  content: \"\\F0083\";\n}\n\n.mdi-table-column::before {\n  content: \"\\F834\";\n}\n\n.mdi-table-column-plus-after::before {\n  content: \"\\F4EC\";\n}\n\n.mdi-table-column-plus-before::before {\n  content: \"\\F4ED\";\n}\n\n.mdi-table-column-remove::before {\n  content: \"\\F4EE\";\n}\n\n.mdi-table-column-width::before {\n  content: \"\\F4EF\";\n}\n\n.mdi-table-edit::before {\n  content: \"\\F4F0\";\n}\n\n.mdi-table-eye::before {\n  content: \"\\F00BF\";\n}\n\n.mdi-table-large::before {\n  content: \"\\F4F1\";\n}\n\n.mdi-table-large-plus::before {\n  content: \"\\FFA4\";\n}\n\n.mdi-table-large-remove::before {\n  content: \"\\FFA5\";\n}\n\n.mdi-table-merge-cells::before {\n  content: \"\\F9A5\";\n}\n\n.mdi-table-of-contents::before {\n  content: \"\\F835\";\n}\n\n.mdi-table-plus::before {\n  content: \"\\FA74\";\n}\n\n.mdi-table-remove::before {\n  content: \"\\FA75\";\n}\n\n.mdi-table-row::before {\n  content: \"\\F836\";\n}\n\n.mdi-table-row-height::before {\n  content: \"\\F4F2\";\n}\n\n.mdi-table-row-plus-after::before {\n  content: \"\\F4F3\";\n}\n\n.mdi-table-row-plus-before::before {\n  content: \"\\F4F4\";\n}\n\n.mdi-table-row-remove::before {\n  content: \"\\F4F5\";\n}\n\n.mdi-table-search::before {\n  content: \"\\F90E\";\n}\n\n.mdi-table-settings::before {\n  content: \"\\F837\";\n}\n\n.mdi-table-tennis::before {\n  content: \"\\FE4B\";\n}\n\n.mdi-tablet::before {\n  content: \"\\F4F6\";\n}\n\n.mdi-tablet-android::before {\n  content: \"\\F4F7\";\n}\n\n.mdi-tablet-cellphone::before {\n  content: \"\\F9A6\";\n}\n\n.mdi-tablet-dashboard::before {\n  content: \"\\FEEB\";\n}\n\n.mdi-tablet-ipad::before {\n  content: \"\\F4F8\";\n}\n\n.mdi-taco::before {\n  content: \"\\F761\";\n}\n\n.mdi-tag::before {\n  content: \"\\F4F9\";\n}\n\n.mdi-tag-faces::before {\n  content: \"\\F4FA\";\n}\n\n.mdi-tag-heart::before {\n  content: \"\\F68A\";\n}\n\n.mdi-tag-heart-outline::before {\n  content: \"\\FBAB\";\n}\n\n.mdi-tag-minus::before {\n  content: \"\\F90F\";\n}\n\n.mdi-tag-multiple::before {\n  content: \"\\F4FB\";\n}\n\n.mdi-tag-outline::before {\n  content: \"\\F4FC\";\n}\n\n.mdi-tag-plus::before {\n  content: \"\\F721\";\n}\n\n.mdi-tag-remove::before {\n  content: \"\\F722\";\n}\n\n.mdi-tag-text-outline::before {\n  content: \"\\F4FD\";\n}\n\n.mdi-tank::before {\n  content: \"\\FD16\";\n}\n\n.mdi-tanker-truck::before {\n  content: \"\\F0006\";\n}\n\n.mdi-tape-measure::before {\n  content: \"\\FB28\";\n}\n\n.mdi-target::before {\n  content: \"\\F4FE\";\n}\n\n.mdi-target-account::before {\n  content: \"\\FBAC\";\n}\n\n.mdi-target-variant::before {\n  content: \"\\FA76\";\n}\n\n.mdi-taxi::before {\n  content: \"\\F4FF\";\n}\n\n.mdi-tea::before {\n  content: \"\\FD7A\";\n}\n\n.mdi-tea-outline::before {\n  content: \"\\FD7B\";\n}\n\n.mdi-teach::before {\n  content: \"\\F88F\";\n}\n\n.mdi-teamviewer::before {\n  content: \"\\F500\";\n}\n\n.mdi-telegram::before {\n  content: \"\\F501\";\n}\n\n.mdi-telescope::before {\n  content: \"\\FB29\";\n}\n\n.mdi-television::before {\n  content: \"\\F502\";\n}\n\n.mdi-television-box::before {\n  content: \"\\F838\";\n}\n\n.mdi-television-classic::before {\n  content: \"\\F7F3\";\n}\n\n.mdi-television-classic-off::before {\n  content: \"\\F839\";\n}\n\n.mdi-television-guide::before {\n  content: \"\\F503\";\n}\n\n.mdi-television-off::before {\n  content: \"\\F83A\";\n}\n\n.mdi-television-pause::before {\n  content: \"\\FFA6\";\n}\n\n.mdi-television-play::before {\n  content: \"\\FEEC\";\n}\n\n.mdi-television-stop::before {\n  content: \"\\FFA7\";\n}\n\n.mdi-temperature-celsius::before {\n  content: \"\\F504\";\n}\n\n.mdi-temperature-fahrenheit::before {\n  content: \"\\F505\";\n}\n\n.mdi-temperature-kelvin::before {\n  content: \"\\F506\";\n}\n\n.mdi-tennis::before {\n  content: \"\\FD7C\";\n}\n\n.mdi-tennis-ball::before {\n  content: \"\\F507\";\n}\n\n.mdi-tent::before {\n  content: \"\\F508\";\n}\n\n.mdi-terraform::before {\n  content: \"\\F0084\";\n}\n\n.mdi-terrain::before {\n  content: \"\\F509\";\n}\n\n.mdi-test-tube::before {\n  content: \"\\F668\";\n}\n\n.mdi-test-tube-empty::before {\n  content: \"\\F910\";\n}\n\n.mdi-test-tube-off::before {\n  content: \"\\F911\";\n}\n\n.mdi-text::before {\n  content: \"\\F9A7\";\n}\n\n.mdi-text-shadow::before {\n  content: \"\\F669\";\n}\n\n.mdi-text-short::before {\n  content: \"\\F9A8\";\n}\n\n.mdi-text-subject::before {\n  content: \"\\F9A9\";\n}\n\n.mdi-text-to-speech::before {\n  content: \"\\F50A\";\n}\n\n.mdi-text-to-speech-off::before {\n  content: \"\\F50B\";\n}\n\n.mdi-textarea::before {\n  content: \"\\F00C0\";\n}\n\n.mdi-textbox::before {\n  content: \"\\F60E\";\n}\n\n.mdi-textbox-password::before {\n  content: \"\\F7F4\";\n}\n\n.mdi-texture::before {\n  content: \"\\F50C\";\n}\n\n.mdi-texture-box::before {\n  content: \"\\F0007\";\n}\n\n.mdi-theater::before {\n  content: \"\\F50D\";\n}\n\n.mdi-theme-light-dark::before {\n  content: \"\\F50E\";\n}\n\n.mdi-thermometer::before {\n  content: \"\\F50F\";\n}\n\n.mdi-thermometer-alert::before {\n  content: \"\\FE61\";\n}\n\n.mdi-thermometer-chevron-down::before {\n  content: \"\\FE62\";\n}\n\n.mdi-thermometer-chevron-up::before {\n  content: \"\\FE63\";\n}\n\n.mdi-thermometer-high::before {\n  content: \"\\F00ED\";\n}\n\n.mdi-thermometer-lines::before {\n  content: \"\\F510\";\n}\n\n.mdi-thermometer-low::before {\n  content: \"\\F00EE\";\n}\n\n.mdi-thermometer-minus::before {\n  content: \"\\FE64\";\n}\n\n.mdi-thermometer-plus::before {\n  content: \"\\FE65\";\n}\n\n.mdi-thermostat::before {\n  content: \"\\F393\";\n}\n\n.mdi-thermostat-box::before {\n  content: \"\\F890\";\n}\n\n.mdi-thought-bubble::before {\n  content: \"\\F7F5\";\n}\n\n.mdi-thought-bubble-outline::before {\n  content: \"\\F7F6\";\n}\n\n.mdi-thumb-down::before {\n  content: \"\\F511\";\n}\n\n.mdi-thumb-down-outline::before {\n  content: \"\\F512\";\n}\n\n.mdi-thumb-up::before {\n  content: \"\\F513\";\n}\n\n.mdi-thumb-up-outline::before {\n  content: \"\\F514\";\n}\n\n.mdi-thumbs-up-down::before {\n  content: \"\\F515\";\n}\n\n.mdi-ticket::before {\n  content: \"\\F516\";\n}\n\n.mdi-ticket-account::before {\n  content: \"\\F517\";\n}\n\n.mdi-ticket-confirmation::before {\n  content: \"\\F518\";\n}\n\n.mdi-ticket-outline::before {\n  content: \"\\F912\";\n}\n\n.mdi-ticket-percent::before {\n  content: \"\\F723\";\n}\n\n.mdi-tie::before {\n  content: \"\\F519\";\n}\n\n.mdi-tilde::before {\n  content: \"\\F724\";\n}\n\n.mdi-timelapse::before {\n  content: \"\\F51A\";\n}\n\n.mdi-timeline::before {\n  content: \"\\FBAD\";\n}\n\n.mdi-timeline-alert::before {\n  content: \"\\FFB2\";\n}\n\n.mdi-timeline-alert-outline::before {\n  content: \"\\FFB5\";\n}\n\n.mdi-timeline-help::before {\n  content: \"\\FFB6\";\n}\n\n.mdi-timeline-help-outline::before {\n  content: \"\\FFB7\";\n}\n\n.mdi-timeline-outline::before {\n  content: \"\\FBAE\";\n}\n\n.mdi-timeline-plus::before {\n  content: \"\\FFB3\";\n}\n\n.mdi-timeline-plus-outline::before {\n  content: \"\\FFB4\";\n}\n\n.mdi-timeline-text::before {\n  content: \"\\FBAF\";\n}\n\n.mdi-timeline-text-outline::before {\n  content: \"\\FBB0\";\n}\n\n.mdi-timer::before {\n  content: \"\\F51B\";\n}\n\n.mdi-timer-10::before {\n  content: \"\\F51C\";\n}\n\n.mdi-timer-3::before {\n  content: \"\\F51D\";\n}\n\n.mdi-timer-off::before {\n  content: \"\\F51E\";\n}\n\n.mdi-timer-sand::before {\n  content: \"\\F51F\";\n}\n\n.mdi-timer-sand-empty::before {\n  content: \"\\F6AC\";\n}\n\n.mdi-timer-sand-full::before {\n  content: \"\\F78B\";\n}\n\n.mdi-timetable::before {\n  content: \"\\F520\";\n}\n\n.mdi-toaster::before {\n  content: \"\\F0085\";\n}\n\n.mdi-toaster-oven::before {\n  content: \"\\FCAF\";\n}\n\n.mdi-toggle-switch::before {\n  content: \"\\F521\";\n}\n\n.mdi-toggle-switch-off::before {\n  content: \"\\F522\";\n}\n\n.mdi-toggle-switch-off-outline::before {\n  content: \"\\FA18\";\n}\n\n.mdi-toggle-switch-outline::before {\n  content: \"\\FA19\";\n}\n\n.mdi-toilet::before {\n  content: \"\\F9AA\";\n}\n\n.mdi-toolbox::before {\n  content: \"\\F9AB\";\n}\n\n.mdi-toolbox-outline::before {\n  content: \"\\F9AC\";\n}\n\n.mdi-tools::before {\n  content: \"\\F0086\";\n}\n\n.mdi-tooltip::before {\n  content: \"\\F523\";\n}\n\n.mdi-tooltip-account::before {\n  content: \"\\F00C\";\n}\n\n.mdi-tooltip-edit::before {\n  content: \"\\F524\";\n}\n\n.mdi-tooltip-image::before {\n  content: \"\\F525\";\n}\n\n.mdi-tooltip-image-outline::before {\n  content: \"\\FBB1\";\n}\n\n.mdi-tooltip-outline::before {\n  content: \"\\F526\";\n}\n\n.mdi-tooltip-plus::before {\n  content: \"\\FBB2\";\n}\n\n.mdi-tooltip-plus-outline::before {\n  content: \"\\F527\";\n}\n\n.mdi-tooltip-text::before {\n  content: \"\\F528\";\n}\n\n.mdi-tooltip-text-outline::before {\n  content: \"\\FBB3\";\n}\n\n.mdi-tooth::before {\n  content: \"\\F8C2\";\n}\n\n.mdi-tooth-outline::before {\n  content: \"\\F529\";\n}\n\n.mdi-tor::before {\n  content: \"\\F52A\";\n}\n\n.mdi-tortoise::before {\n  content: \"\\FD17\";\n}\n\n.mdi-tournament::before {\n  content: \"\\F9AD\";\n}\n\n.mdi-tower-beach::before {\n  content: \"\\F680\";\n}\n\n.mdi-tower-fire::before {\n  content: \"\\F681\";\n}\n\n.mdi-towing::before {\n  content: \"\\F83B\";\n}\n\n.mdi-track-light::before {\n  content: \"\\F913\";\n}\n\n.mdi-trackpad::before {\n  content: \"\\F7F7\";\n}\n\n.mdi-trackpad-lock::before {\n  content: \"\\F932\";\n}\n\n.mdi-tractor::before {\n  content: \"\\F891\";\n}\n\n.mdi-trademark::before {\n  content: \"\\FA77\";\n}\n\n.mdi-traffic-light::before {\n  content: \"\\F52B\";\n}\n\n.mdi-train::before {\n  content: \"\\F52C\";\n}\n\n.mdi-train-car::before {\n  content: \"\\FBB4\";\n}\n\n.mdi-train-variant::before {\n  content: \"\\F8C3\";\n}\n\n.mdi-tram::before {\n  content: \"\\F52D\";\n}\n\n.mdi-tram-side::before {\n  content: \"\\F0008\";\n}\n\n.mdi-transcribe::before {\n  content: \"\\F52E\";\n}\n\n.mdi-transcribe-close::before {\n  content: \"\\F52F\";\n}\n\n.mdi-transfer::before {\n  content: \"\\F0087\";\n}\n\n.mdi-transfer-down::before {\n  content: \"\\FD7D\";\n}\n\n.mdi-transfer-left::before {\n  content: \"\\FD7E\";\n}\n\n.mdi-transfer-right::before {\n  content: \"\\F530\";\n}\n\n.mdi-transfer-up::before {\n  content: \"\\FD7F\";\n}\n\n.mdi-transit-connection::before {\n  content: \"\\FD18\";\n}\n\n.mdi-transit-connection-variant::before {\n  content: \"\\FD19\";\n}\n\n.mdi-transit-detour::before {\n  content: \"\\FFA8\";\n}\n\n.mdi-transit-transfer::before {\n  content: \"\\F6AD\";\n}\n\n.mdi-transition::before {\n  content: \"\\F914\";\n}\n\n.mdi-transition-masked::before {\n  content: \"\\F915\";\n}\n\n.mdi-translate::before {\n  content: \"\\F5CA\";\n}\n\n.mdi-translate-off::before {\n  content: \"\\FE66\";\n}\n\n.mdi-transmission-tower::before {\n  content: \"\\FD1A\";\n}\n\n.mdi-trash-can::before {\n  content: \"\\FA78\";\n}\n\n.mdi-trash-can-outline::before {\n  content: \"\\FA79\";\n}\n\n.mdi-treasure-chest::before {\n  content: \"\\F725\";\n}\n\n.mdi-tree::before {\n  content: \"\\F531\";\n}\n\n.mdi-tree-outline::before {\n  content: \"\\FE4C\";\n}\n\n.mdi-trello::before {\n  content: \"\\F532\";\n}\n\n.mdi-trending-down::before {\n  content: \"\\F533\";\n}\n\n.mdi-trending-neutral::before {\n  content: \"\\F534\";\n}\n\n.mdi-trending-up::before {\n  content: \"\\F535\";\n}\n\n.mdi-triangle::before {\n  content: \"\\F536\";\n}\n\n.mdi-triangle-outline::before {\n  content: \"\\F537\";\n}\n\n.mdi-triforce::before {\n  content: \"\\FBB5\";\n}\n\n.mdi-trophy::before {\n  content: \"\\F538\";\n}\n\n.mdi-trophy-award::before {\n  content: \"\\F539\";\n}\n\n.mdi-trophy-broken::before {\n  content: \"\\FD80\";\n}\n\n.mdi-trophy-outline::before {\n  content: \"\\F53A\";\n}\n\n.mdi-trophy-variant::before {\n  content: \"\\F53B\";\n}\n\n.mdi-trophy-variant-outline::before {\n  content: \"\\F53C\";\n}\n\n.mdi-truck::before {\n  content: \"\\F53D\";\n}\n\n.mdi-truck-check::before {\n  content: \"\\FCB0\";\n}\n\n.mdi-truck-delivery::before {\n  content: \"\\F53E\";\n}\n\n.mdi-truck-fast::before {\n  content: \"\\F787\";\n}\n\n.mdi-truck-trailer::before {\n  content: \"\\F726\";\n}\n\n.mdi-trumpet::before {\n  content: \"\\F00C1\";\n}\n\n.mdi-tshirt-crew::before {\n  content: \"\\FA7A\";\n}\n\n.mdi-tshirt-crew-outline::before {\n  content: \"\\F53F\";\n}\n\n.mdi-tshirt-v::before {\n  content: \"\\FA7B\";\n}\n\n.mdi-tshirt-v-outline::before {\n  content: \"\\F540\";\n}\n\n.mdi-tumble-dryer::before {\n  content: \"\\F916\";\n}\n\n.mdi-tumblr::before {\n  content: \"\\F541\";\n}\n\n.mdi-tumblr-box::before {\n  content: \"\\F917\";\n}\n\n.mdi-tumblr-reblog::before {\n  content: \"\\F542\";\n}\n\n.mdi-tune::before {\n  content: \"\\F62E\";\n}\n\n.mdi-tune-vertical::before {\n  content: \"\\F66A\";\n}\n\n.mdi-turnstile::before {\n  content: \"\\FCB1\";\n}\n\n.mdi-turnstile-outline::before {\n  content: \"\\FCB2\";\n}\n\n.mdi-turtle::before {\n  content: \"\\FCB3\";\n}\n\n.mdi-twitch::before {\n  content: \"\\F543\";\n}\n\n.mdi-twitter::before {\n  content: \"\\F544\";\n}\n\n.mdi-twitter-box::before {\n  content: \"\\F545\";\n}\n\n.mdi-twitter-circle::before {\n  content: \"\\F546\";\n}\n\n.mdi-twitter-retweet::before {\n  content: \"\\F547\";\n}\n\n.mdi-two-factor-authentication::before {\n  content: \"\\F9AE\";\n}\n\n.mdi-typewriter::before {\n  content: \"\\FF4A\";\n}\n\n.mdi-uber::before {\n  content: \"\\F748\";\n}\n\n.mdi-ubisoft::before {\n  content: \"\\FBB6\";\n}\n\n.mdi-ubuntu::before {\n  content: \"\\F548\";\n}\n\n.mdi-ufo::before {\n  content: \"\\F00EF\";\n}\n\n.mdi-ufo-outline::before {\n  content: \"\\F00F0\";\n}\n\n.mdi-ultra-high-definition::before {\n  content: \"\\F7F8\";\n}\n\n.mdi-umbraco::before {\n  content: \"\\F549\";\n}\n\n.mdi-umbrella::before {\n  content: \"\\F54A\";\n}\n\n.mdi-umbrella-closed::before {\n  content: \"\\F9AF\";\n}\n\n.mdi-umbrella-outline::before {\n  content: \"\\F54B\";\n}\n\n.mdi-undo::before {\n  content: \"\\F54C\";\n}\n\n.mdi-undo-variant::before {\n  content: \"\\F54D\";\n}\n\n.mdi-unfold-less-horizontal::before {\n  content: \"\\F54E\";\n}\n\n.mdi-unfold-less-vertical::before {\n  content: \"\\F75F\";\n}\n\n.mdi-unfold-more-horizontal::before {\n  content: \"\\F54F\";\n}\n\n.mdi-unfold-more-vertical::before {\n  content: \"\\F760\";\n}\n\n.mdi-ungroup::before {\n  content: \"\\F550\";\n}\n\n.mdi-unicode::before {\n  content: \"\\FEED\";\n}\n\n.mdi-unity::before {\n  content: \"\\F6AE\";\n}\n\n.mdi-unreal::before {\n  content: \"\\F9B0\";\n}\n\n.mdi-untappd::before {\n  content: \"\\F551\";\n}\n\n.mdi-update::before {\n  content: \"\\F6AF\";\n}\n\n.mdi-upload::before {\n  content: \"\\F552\";\n}\n\n.mdi-upload-multiple::before {\n  content: \"\\F83C\";\n}\n\n.mdi-upload-network::before {\n  content: \"\\F6F5\";\n}\n\n.mdi-upload-network-outline::before {\n  content: \"\\FCB4\";\n}\n\n.mdi-upload-off::before {\n  content: \"\\F00F1\";\n}\n\n.mdi-upload-off-outline::before {\n  content: \"\\F00F2\";\n}\n\n.mdi-upload-outline::before {\n  content: \"\\FE67\";\n}\n\n.mdi-usb::before {\n  content: \"\\F553\";\n}\n\n.mdi-valve::before {\n  content: \"\\F0088\";\n}\n\n.mdi-valve-closed::before {\n  content: \"\\F0089\";\n}\n\n.mdi-valve-open::before {\n  content: \"\\F008A\";\n}\n\n.mdi-van-passenger::before {\n  content: \"\\F7F9\";\n}\n\n.mdi-van-utility::before {\n  content: \"\\F7FA\";\n}\n\n.mdi-vanish::before {\n  content: \"\\F7FB\";\n}\n\n.mdi-variable::before {\n  content: \"\\FAE6\";\n}\n\n.mdi-vector-arrange-above::before {\n  content: \"\\F554\";\n}\n\n.mdi-vector-arrange-below::before {\n  content: \"\\F555\";\n}\n\n.mdi-vector-bezier::before {\n  content: \"\\FAE7\";\n}\n\n.mdi-vector-circle::before {\n  content: \"\\F556\";\n}\n\n.mdi-vector-circle-variant::before {\n  content: \"\\F557\";\n}\n\n.mdi-vector-combine::before {\n  content: \"\\F558\";\n}\n\n.mdi-vector-curve::before {\n  content: \"\\F559\";\n}\n\n.mdi-vector-difference::before {\n  content: \"\\F55A\";\n}\n\n.mdi-vector-difference-ab::before {\n  content: \"\\F55B\";\n}\n\n.mdi-vector-difference-ba::before {\n  content: \"\\F55C\";\n}\n\n.mdi-vector-ellipse::before {\n  content: \"\\F892\";\n}\n\n.mdi-vector-intersection::before {\n  content: \"\\F55D\";\n}\n\n.mdi-vector-line::before {\n  content: \"\\F55E\";\n}\n\n.mdi-vector-link::before {\n  content: \"\\F0009\";\n}\n\n.mdi-vector-point::before {\n  content: \"\\F55F\";\n}\n\n.mdi-vector-polygon::before {\n  content: \"\\F560\";\n}\n\n.mdi-vector-polyline::before {\n  content: \"\\F561\";\n}\n\n.mdi-vector-radius::before {\n  content: \"\\F749\";\n}\n\n.mdi-vector-rectangle::before {\n  content: \"\\F5C6\";\n}\n\n.mdi-vector-selection::before {\n  content: \"\\F562\";\n}\n\n.mdi-vector-square::before {\n  content: \"\\F001\";\n}\n\n.mdi-vector-triangle::before {\n  content: \"\\F563\";\n}\n\n.mdi-vector-union::before {\n  content: \"\\F564\";\n}\n\n.mdi-venmo::before {\n  content: \"\\F578\";\n}\n\n.mdi-vhs::before {\n  content: \"\\FA1A\";\n}\n\n.mdi-vibrate::before {\n  content: \"\\F566\";\n}\n\n.mdi-vibrate-off::before {\n  content: \"\\FCB5\";\n}\n\n.mdi-video::before {\n  content: \"\\F567\";\n}\n\n.mdi-video-3d::before {\n  content: \"\\F7FC\";\n}\n\n.mdi-video-3d-variant::before {\n  content: \"\\FEEE\";\n}\n\n.mdi-video-4k-box::before {\n  content: \"\\F83D\";\n}\n\n.mdi-video-account::before {\n  content: \"\\F918\";\n}\n\n.mdi-video-check::before {\n  content: \"\\F008B\";\n}\n\n.mdi-video-check-outline::before {\n  content: \"\\F008C\";\n}\n\n.mdi-video-image::before {\n  content: \"\\F919\";\n}\n\n.mdi-video-input-antenna::before {\n  content: \"\\F83E\";\n}\n\n.mdi-video-input-component::before {\n  content: \"\\F83F\";\n}\n\n.mdi-video-input-hdmi::before {\n  content: \"\\F840\";\n}\n\n.mdi-video-input-scart::before {\n  content: \"\\FFA9\";\n}\n\n.mdi-video-input-svideo::before {\n  content: \"\\F841\";\n}\n\n.mdi-video-minus::before {\n  content: \"\\F9B1\";\n}\n\n.mdi-video-off::before {\n  content: \"\\F568\";\n}\n\n.mdi-video-off-outline::before {\n  content: \"\\FBB7\";\n}\n\n.mdi-video-outline::before {\n  content: \"\\FBB8\";\n}\n\n.mdi-video-plus::before {\n  content: \"\\F9B2\";\n}\n\n.mdi-video-stabilization::before {\n  content: \"\\F91A\";\n}\n\n.mdi-video-switch::before {\n  content: \"\\F569\";\n}\n\n.mdi-video-vintage::before {\n  content: \"\\FA1B\";\n}\n\n.mdi-video-wireless::before {\n  content: \"\\FEEF\";\n}\n\n.mdi-video-wireless-outline::before {\n  content: \"\\FEF0\";\n}\n\n.mdi-view-agenda::before {\n  content: \"\\F56A\";\n}\n\n.mdi-view-array::before {\n  content: \"\\F56B\";\n}\n\n.mdi-view-carousel::before {\n  content: \"\\F56C\";\n}\n\n.mdi-view-column::before {\n  content: \"\\F56D\";\n}\n\n.mdi-view-comfy::before {\n  content: \"\\FE4D\";\n}\n\n.mdi-view-compact::before {\n  content: \"\\FE4E\";\n}\n\n.mdi-view-compact-outline::before {\n  content: \"\\FE4F\";\n}\n\n.mdi-view-dashboard::before {\n  content: \"\\F56E\";\n}\n\n.mdi-view-dashboard-outline::before {\n  content: \"\\FA1C\";\n}\n\n.mdi-view-dashboard-variant::before {\n  content: \"\\F842\";\n}\n\n.mdi-view-day::before {\n  content: \"\\F56F\";\n}\n\n.mdi-view-grid::before {\n  content: \"\\F570\";\n}\n\n.mdi-view-grid-plus::before {\n  content: \"\\FFAA\";\n}\n\n.mdi-view-headline::before {\n  content: \"\\F571\";\n}\n\n.mdi-view-list::before {\n  content: \"\\F572\";\n}\n\n.mdi-view-module::before {\n  content: \"\\F573\";\n}\n\n.mdi-view-parallel::before {\n  content: \"\\F727\";\n}\n\n.mdi-view-quilt::before {\n  content: \"\\F574\";\n}\n\n.mdi-view-sequential::before {\n  content: \"\\F728\";\n}\n\n.mdi-view-split-horizontal::before {\n  content: \"\\FBA7\";\n}\n\n.mdi-view-split-vertical::before {\n  content: \"\\FBA8\";\n}\n\n.mdi-view-stream::before {\n  content: \"\\F575\";\n}\n\n.mdi-view-week::before {\n  content: \"\\F576\";\n}\n\n.mdi-vimeo::before {\n  content: \"\\F577\";\n}\n\n.mdi-violin::before {\n  content: \"\\F60F\";\n}\n\n.mdi-virtual-reality::before {\n  content: \"\\F893\";\n}\n\n.mdi-visual-studio::before {\n  content: \"\\F610\";\n}\n\n.mdi-visual-studio-code::before {\n  content: \"\\FA1D\";\n}\n\n.mdi-vk::before {\n  content: \"\\F579\";\n}\n\n.mdi-vk-box::before {\n  content: \"\\F57A\";\n}\n\n.mdi-vk-circle::before {\n  content: \"\\F57B\";\n}\n\n.mdi-vlc::before {\n  content: \"\\F57C\";\n}\n\n.mdi-voice::before {\n  content: \"\\F5CB\";\n}\n\n.mdi-voice-off::before {\n  content: \"\\FEF1\";\n}\n\n.mdi-voicemail::before {\n  content: \"\\F57D\";\n}\n\n.mdi-volleyball::before {\n  content: \"\\F9B3\";\n}\n\n.mdi-volume-high::before {\n  content: \"\\F57E\";\n}\n\n.mdi-volume-low::before {\n  content: \"\\F57F\";\n}\n\n.mdi-volume-medium::before {\n  content: \"\\F580\";\n}\n\n.mdi-volume-minus::before {\n  content: \"\\F75D\";\n}\n\n.mdi-volume-mute::before {\n  content: \"\\F75E\";\n}\n\n.mdi-volume-off::before {\n  content: \"\\F581\";\n}\n\n.mdi-volume-plus::before {\n  content: \"\\F75C\";\n}\n\n.mdi-volume-variant-off::before {\n  content: \"\\FE68\";\n}\n\n.mdi-vote::before {\n  content: \"\\FA1E\";\n}\n\n.mdi-vote-outline::before {\n  content: \"\\FA1F\";\n}\n\n.mdi-vpn::before {\n  content: \"\\F582\";\n}\n\n.mdi-vuejs::before {\n  content: \"\\F843\";\n}\n\n.mdi-vuetify::before {\n  content: \"\\FE50\";\n}\n\n.mdi-walk::before {\n  content: \"\\F583\";\n}\n\n.mdi-wall::before {\n  content: \"\\F7FD\";\n}\n\n.mdi-wall-sconce::before {\n  content: \"\\F91B\";\n}\n\n.mdi-wall-sconce-flat::before {\n  content: \"\\F91C\";\n}\n\n.mdi-wall-sconce-variant::before {\n  content: \"\\F91D\";\n}\n\n.mdi-wallet::before {\n  content: \"\\F584\";\n}\n\n.mdi-wallet-giftcard::before {\n  content: \"\\F585\";\n}\n\n.mdi-wallet-membership::before {\n  content: \"\\F586\";\n}\n\n.mdi-wallet-outline::before {\n  content: \"\\FBB9\";\n}\n\n.mdi-wallet-plus::before {\n  content: \"\\FFAB\";\n}\n\n.mdi-wallet-plus-outline::before {\n  content: \"\\FFAC\";\n}\n\n.mdi-wallet-travel::before {\n  content: \"\\F587\";\n}\n\n.mdi-wallpaper::before {\n  content: \"\\FE69\";\n}\n\n.mdi-wan::before {\n  content: \"\\F588\";\n}\n\n.mdi-wardrobe::before {\n  content: \"\\FFAD\";\n}\n\n.mdi-wardrobe-outline::before {\n  content: \"\\FFAE\";\n}\n\n.mdi-warehouse::before {\n  content: \"\\FFBB\";\n}\n\n.mdi-washing-machine::before {\n  content: \"\\F729\";\n}\n\n.mdi-watch::before {\n  content: \"\\F589\";\n}\n\n.mdi-watch-export::before {\n  content: \"\\F58A\";\n}\n\n.mdi-watch-export-variant::before {\n  content: \"\\F894\";\n}\n\n.mdi-watch-import::before {\n  content: \"\\F58B\";\n}\n\n.mdi-watch-import-variant::before {\n  content: \"\\F895\";\n}\n\n.mdi-watch-variant::before {\n  content: \"\\F896\";\n}\n\n.mdi-watch-vibrate::before {\n  content: \"\\F6B0\";\n}\n\n.mdi-watch-vibrate-off::before {\n  content: \"\\FCB6\";\n}\n\n.mdi-water::before {\n  content: \"\\F58C\";\n}\n\n.mdi-water-boiler::before {\n  content: \"\\FFAF\";\n}\n\n.mdi-water-off::before {\n  content: \"\\F58D\";\n}\n\n.mdi-water-outline::before {\n  content: \"\\FE6A\";\n}\n\n.mdi-water-percent::before {\n  content: \"\\F58E\";\n}\n\n.mdi-water-pump::before {\n  content: \"\\F58F\";\n}\n\n.mdi-water-pump-off::before {\n  content: \"\\FFB0\";\n}\n\n.mdi-water-well::before {\n  content: \"\\F008D\";\n}\n\n.mdi-water-well-outline::before {\n  content: \"\\F008E\";\n}\n\n.mdi-watermark::before {\n  content: \"\\F612\";\n}\n\n.mdi-wave::before {\n  content: \"\\FF4B\";\n}\n\n.mdi-waves::before {\n  content: \"\\F78C\";\n}\n\n.mdi-waze::before {\n  content: \"\\FBBA\";\n}\n\n.mdi-weather-cloudy::before {\n  content: \"\\F590\";\n}\n\n.mdi-weather-cloudy-alert::before {\n  content: \"\\FF4C\";\n}\n\n.mdi-weather-cloudy-arrow-right::before {\n  content: \"\\FE51\";\n}\n\n.mdi-weather-fog::before {\n  content: \"\\F591\";\n}\n\n.mdi-weather-hail::before {\n  content: \"\\F592\";\n}\n\n.mdi-weather-hazy::before {\n  content: \"\\FF4D\";\n}\n\n.mdi-weather-hurricane::before {\n  content: \"\\F897\";\n}\n\n.mdi-weather-lightning::before {\n  content: \"\\F593\";\n}\n\n.mdi-weather-lightning-rainy::before {\n  content: \"\\F67D\";\n}\n\n.mdi-weather-night::before {\n  content: \"\\F594\";\n}\n\n.mdi-weather-night-partly-cloudy::before {\n  content: \"\\FF4E\";\n}\n\n.mdi-weather-partly-cloudy::before {\n  content: \"\\F595\";\n}\n\n.mdi-weather-partly-lightning::before {\n  content: \"\\FF4F\";\n}\n\n.mdi-weather-partly-rainy::before {\n  content: \"\\FF50\";\n}\n\n.mdi-weather-partly-snowy::before {\n  content: \"\\FF51\";\n}\n\n.mdi-weather-partly-snowy-rainy::before {\n  content: \"\\FF52\";\n}\n\n.mdi-weather-pouring::before {\n  content: \"\\F596\";\n}\n\n.mdi-weather-rainy::before {\n  content: \"\\F597\";\n}\n\n.mdi-weather-snowy::before {\n  content: \"\\F598\";\n}\n\n.mdi-weather-snowy-heavy::before {\n  content: \"\\FF53\";\n}\n\n.mdi-weather-snowy-rainy::before {\n  content: \"\\F67E\";\n}\n\n.mdi-weather-sunny::before {\n  content: \"\\F599\";\n}\n\n.mdi-weather-sunny-alert::before {\n  content: \"\\FF54\";\n}\n\n.mdi-weather-sunset::before {\n  content: \"\\F59A\";\n}\n\n.mdi-weather-sunset-down::before {\n  content: \"\\F59B\";\n}\n\n.mdi-weather-sunset-up::before {\n  content: \"\\F59C\";\n}\n\n.mdi-weather-tornado::before {\n  content: \"\\FF55\";\n}\n\n.mdi-weather-windy::before {\n  content: \"\\F59D\";\n}\n\n.mdi-weather-windy-variant::before {\n  content: \"\\F59E\";\n}\n\n.mdi-web::before {\n  content: \"\\F59F\";\n}\n\n.mdi-web-box::before {\n  content: \"\\FFB1\";\n}\n\n.mdi-webcam::before {\n  content: \"\\F5A0\";\n}\n\n.mdi-webhook::before {\n  content: \"\\F62F\";\n}\n\n.mdi-webpack::before {\n  content: \"\\F72A\";\n}\n\n.mdi-wechat::before {\n  content: \"\\F611\";\n}\n\n.mdi-weight::before {\n  content: \"\\F5A1\";\n}\n\n.mdi-weight-gram::before {\n  content: \"\\FD1B\";\n}\n\n.mdi-weight-kilogram::before {\n  content: \"\\F5A2\";\n}\n\n.mdi-weight-pound::before {\n  content: \"\\F9B4\";\n}\n\n.mdi-whatsapp::before {\n  content: \"\\F5A3\";\n}\n\n.mdi-wheelchair-accessibility::before {\n  content: \"\\F5A4\";\n}\n\n.mdi-whistle::before {\n  content: \"\\F9B5\";\n}\n\n.mdi-white-balance-auto::before {\n  content: \"\\F5A5\";\n}\n\n.mdi-white-balance-incandescent::before {\n  content: \"\\F5A6\";\n}\n\n.mdi-white-balance-iridescent::before {\n  content: \"\\F5A7\";\n}\n\n.mdi-white-balance-sunny::before {\n  content: \"\\F5A8\";\n}\n\n.mdi-widgets::before {\n  content: \"\\F72B\";\n}\n\n.mdi-wifi::before {\n  content: \"\\F5A9\";\n}\n\n.mdi-wifi-off::before {\n  content: \"\\F5AA\";\n}\n\n.mdi-wifi-star::before {\n  content: \"\\FE6B\";\n}\n\n.mdi-wifi-strength-1::before {\n  content: \"\\F91E\";\n}\n\n.mdi-wifi-strength-1-alert::before {\n  content: \"\\F91F\";\n}\n\n.mdi-wifi-strength-1-lock::before {\n  content: \"\\F920\";\n}\n\n.mdi-wifi-strength-2::before {\n  content: \"\\F921\";\n}\n\n.mdi-wifi-strength-2-alert::before {\n  content: \"\\F922\";\n}\n\n.mdi-wifi-strength-2-lock::before {\n  content: \"\\F923\";\n}\n\n.mdi-wifi-strength-3::before {\n  content: \"\\F924\";\n}\n\n.mdi-wifi-strength-3-alert::before {\n  content: \"\\F925\";\n}\n\n.mdi-wifi-strength-3-lock::before {\n  content: \"\\F926\";\n}\n\n.mdi-wifi-strength-4::before {\n  content: \"\\F927\";\n}\n\n.mdi-wifi-strength-4-alert::before {\n  content: \"\\F928\";\n}\n\n.mdi-wifi-strength-4-lock::before {\n  content: \"\\F929\";\n}\n\n.mdi-wifi-strength-alert-outline::before {\n  content: \"\\F92A\";\n}\n\n.mdi-wifi-strength-lock-outline::before {\n  content: \"\\F92B\";\n}\n\n.mdi-wifi-strength-off::before {\n  content: \"\\F92C\";\n}\n\n.mdi-wifi-strength-off-outline::before {\n  content: \"\\F92D\";\n}\n\n.mdi-wifi-strength-outline::before {\n  content: \"\\F92E\";\n}\n\n.mdi-wii::before {\n  content: \"\\F5AB\";\n}\n\n.mdi-wiiu::before {\n  content: \"\\F72C\";\n}\n\n.mdi-wikipedia::before {\n  content: \"\\F5AC\";\n}\n\n.mdi-wind-turbine::before {\n  content: \"\\FD81\";\n}\n\n.mdi-window-close::before {\n  content: \"\\F5AD\";\n}\n\n.mdi-window-closed::before {\n  content: \"\\F5AE\";\n}\n\n.mdi-window-maximize::before {\n  content: \"\\F5AF\";\n}\n\n.mdi-window-minimize::before {\n  content: \"\\F5B0\";\n}\n\n.mdi-window-open::before {\n  content: \"\\F5B1\";\n}\n\n.mdi-window-restore::before {\n  content: \"\\F5B2\";\n}\n\n.mdi-windows::before {\n  content: \"\\F5B3\";\n}\n\n.mdi-windows-classic::before {\n  content: \"\\FA20\";\n}\n\n.mdi-wiper::before {\n  content: \"\\FAE8\";\n}\n\n.mdi-wiper-wash::before {\n  content: \"\\FD82\";\n}\n\n.mdi-wordpress::before {\n  content: \"\\F5B4\";\n}\n\n.mdi-worker::before {\n  content: \"\\F5B5\";\n}\n\n.mdi-wrap::before {\n  content: \"\\F5B6\";\n}\n\n.mdi-wrap-disabled::before {\n  content: \"\\FBBB\";\n}\n\n.mdi-wrench::before {\n  content: \"\\F5B7\";\n}\n\n.mdi-wrench-outline::before {\n  content: \"\\FBBC\";\n}\n\n.mdi-wunderlist::before {\n  content: \"\\F5B8\";\n}\n\n.mdi-xamarin::before {\n  content: \"\\F844\";\n}\n\n.mdi-xamarin-outline::before {\n  content: \"\\F845\";\n}\n\n.mdi-xaml::before {\n  content: \"\\F673\";\n}\n\n.mdi-xbox::before {\n  content: \"\\F5B9\";\n}\n\n.mdi-xbox-controller::before {\n  content: \"\\F5BA\";\n}\n\n.mdi-xbox-controller-battery-alert::before {\n  content: \"\\F74A\";\n}\n\n.mdi-xbox-controller-battery-charging::before {\n  content: \"\\FA21\";\n}\n\n.mdi-xbox-controller-battery-empty::before {\n  content: \"\\F74B\";\n}\n\n.mdi-xbox-controller-battery-full::before {\n  content: \"\\F74C\";\n}\n\n.mdi-xbox-controller-battery-low::before {\n  content: \"\\F74D\";\n}\n\n.mdi-xbox-controller-battery-medium::before {\n  content: \"\\F74E\";\n}\n\n.mdi-xbox-controller-battery-unknown::before {\n  content: \"\\F74F\";\n}\n\n.mdi-xbox-controller-menu::before {\n  content: \"\\FE52\";\n}\n\n.mdi-xbox-controller-off::before {\n  content: \"\\F5BB\";\n}\n\n.mdi-xbox-controller-view::before {\n  content: \"\\FE53\";\n}\n\n.mdi-xda::before {\n  content: \"\\F5BC\";\n}\n\n.mdi-xing::before {\n  content: \"\\F5BD\";\n}\n\n.mdi-xing-box::before {\n  content: \"\\F5BE\";\n}\n\n.mdi-xing-circle::before {\n  content: \"\\F5BF\";\n}\n\n.mdi-xml::before {\n  content: \"\\F5C0\";\n}\n\n.mdi-xmpp::before {\n  content: \"\\F7FE\";\n}\n\n.mdi-yahoo::before {\n  content: \"\\FB2A\";\n}\n\n.mdi-yammer::before {\n  content: \"\\F788\";\n}\n\n.mdi-yeast::before {\n  content: \"\\F5C1\";\n}\n\n.mdi-yelp::before {\n  content: \"\\F5C2\";\n}\n\n.mdi-yin-yang::before {\n  content: \"\\F67F\";\n}\n\n.mdi-youtube::before {\n  content: \"\\F5C3\";\n}\n\n.mdi-youtube-creator-studio::before {\n  content: \"\\F846\";\n}\n\n.mdi-youtube-gaming::before {\n  content: \"\\F847\";\n}\n\n.mdi-youtube-subscription::before {\n  content: \"\\FD1C\";\n}\n\n.mdi-youtube-tv::before {\n  content: \"\\F448\";\n}\n\n.mdi-z-wave::before {\n  content: \"\\FAE9\";\n}\n\n.mdi-zend::before {\n  content: \"\\FAEA\";\n}\n\n.mdi-zigbee::before {\n  content: \"\\FD1D\";\n}\n\n.mdi-zip-box::before {\n  content: \"\\F5C4\";\n}\n\n.mdi-zip-box-outline::before {\n  content: \"\\F001B\";\n}\n\n.mdi-zip-disk::before {\n  content: \"\\FA22\";\n}\n\n.mdi-zodiac-aquarius::before {\n  content: \"\\FA7C\";\n}\n\n.mdi-zodiac-aries::before {\n  content: \"\\FA7D\";\n}\n\n.mdi-zodiac-cancer::before {\n  content: \"\\FA7E\";\n}\n\n.mdi-zodiac-capricorn::before {\n  content: \"\\FA7F\";\n}\n\n.mdi-zodiac-gemini::before {\n  content: \"\\FA80\";\n}\n\n.mdi-zodiac-leo::before {\n  content: \"\\FA81\";\n}\n\n.mdi-zodiac-libra::before {\n  content: \"\\FA82\";\n}\n\n.mdi-zodiac-pisces::before {\n  content: \"\\FA83\";\n}\n\n.mdi-zodiac-sagittarius::before {\n  content: \"\\FA84\";\n}\n\n.mdi-zodiac-scorpio::before {\n  content: \"\\FA85\";\n}\n\n.mdi-zodiac-taurus::before {\n  content: \"\\FA86\";\n}\n\n.mdi-zodiac-virgo::before {\n  content: \"\\FA87\";\n}\n\n.mdi-blank::before {\n  content: \"\\F68C\";\n  visibility: hidden;\n}\n\n.mdi-18px.mdi-set, .mdi-18px.mdi:before {\n  font-size: 18px;\n}\n\n.mdi-24px.mdi-set, .mdi-24px.mdi:before {\n  font-size: 24px;\n}\n\n.mdi-36px.mdi-set, .mdi-36px.mdi:before {\n  font-size: 36px;\n}\n\n.mdi-48px.mdi-set, .mdi-48px.mdi:before {\n  font-size: 48px;\n}\n\n.mdi-dark:before {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdi-dark.mdi-inactive:before {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mdi-light:before {\n  color: white;\n}\n.mdi-light.mdi-inactive:before {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mdi-rotate-45 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(45deg);\n      transform: scaleX(-1) rotate(45deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: scaleY(-1) rotate(45deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-45:before {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.mdi-rotate-90 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(90deg);\n      transform: scaleX(-1) rotate(90deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(90deg);\n      -ms-transform: rotate(90deg);\n      transform: scaleY(-1) rotate(90deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-90:before {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.mdi-rotate-135 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(135deg);\n      transform: scaleX(-1) rotate(135deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: scaleY(-1) rotate(135deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-135:before {\n  -webkit-transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n.mdi-rotate-180 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(180deg);\n      transform: scaleX(-1) rotate(180deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(180deg);\n      -ms-transform: rotate(180deg);\n      transform: scaleY(-1) rotate(180deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-180:before {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.mdi-rotate-225 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(225deg);\n      transform: scaleX(-1) rotate(225deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(225deg);\n      -ms-transform: rotate(225deg);\n      transform: scaleY(-1) rotate(225deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-225:before {\n  -webkit-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  transform: rotate(225deg);\n}\n\n.mdi-rotate-270 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(270deg);\n      transform: scaleX(-1) rotate(270deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(270deg);\n      -ms-transform: rotate(270deg);\n      transform: scaleY(-1) rotate(270deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-270:before {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.mdi-rotate-315 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(315deg);\n      transform: scaleX(-1) rotate(315deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(315deg);\n      -ms-transform: rotate(315deg);\n      transform: scaleY(-1) rotate(315deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-315:before {\n  -webkit-transform: rotate(315deg);\n  -ms-transform: rotate(315deg);\n  transform: rotate(315deg);\n}\n\n.mdi-flip-h:before {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n\n.mdi-flip-v:before {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  filter: FlipV;\n  -ms-filter: \"FlipV\";\n}\n\n.mdi-spin:before {\n  -webkit-animation: mdi-spin 2s infinite linear;\n  animation: mdi-spin 2s infinite linear;\n}\n\n@-webkit-keyframes mdi-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes mdi-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.mdi {\n  font-size: 110%;\n  display: inline-block;\n  vertical-align: middle;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/app.js":
/*!********************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/app.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/esm/index.all.js");
/* harmony import */ var _components_legacy_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/legacy-support.js */ "./node_modules/project-fast/src/assets/js/components/legacy-support.js");
/* harmony import */ var _components_appbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/appbar.js */ "./node_modules/project-fast/src/assets/js/components/appbar.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu.js */ "./node_modules/project-fast/src/assets/js/components/menu.js");
/* harmony import */ var _components_drawer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/drawer.js */ "./node_modules/project-fast/src/assets/js/components/drawer.js");
/* harmony import */ var _components_fab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fab.js */ "./node_modules/project-fast/src/assets/js/components/fab.js");
/* harmony import */ var _components_upload_field_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/upload-field.js */ "./node_modules/project-fast/src/assets/js/components/upload-field.js");
/* harmony import */ var _components_data_table_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/data-table.js */ "./node_modules/project-fast/src/assets/js/components/data-table.js");
/* harmony import */ var _components_snackbar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/snackbar.js */ "./node_modules/project-fast/src/assets/js/components/snackbar.js");










Object(_components_legacy_support_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_components_appbar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_components_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_components_drawer_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_components_fab_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_components_upload_field_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_components_data_table_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_components_snackbar_js__WEBPACK_IMPORTED_MODULE_8__["default"])();

/* harmony default export */ __webpack_exports__["default"] = ({
    LegacySupport: _components_legacy_support_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Appbar: _components_appbar_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    Menu: _components_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    Drawer: _components_drawer_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    Fab: _components_fab_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    Upload: _components_upload_field_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    DataTable: _components_data_table_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    Snackbar: _components_snackbar_js__WEBPACK_IMPORTED_MODULE_8__["default"],
});


/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/appbar.js":
/*!**********************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/appbar.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fastAppbar; });
function fastAppbar () {
    if(document.querySelector('.app-bar')) {
        var appBar = document.querySelector('.app-bar');
        var scrollPosition = 0;
        var scrollDirection = 0;
        var ticking = false;

        document.body.classList.remove('with-app-bar--prominent');
        document.body.classList.remove('with-app-bar--dense');
        document.body.classList.remove('with-app-bar--fixed');
        document.body.classList.add('with-app-bar');

        if(appBar.classList.contains('app-bar--prominent')) {
            document.body.classList.add('with-app-bar--prominent');
        }
        if(appBar.classList.contains('app-bar--dense')) {
            document.body.classList.add('with-app-bar--dense');
        }
        if(appBar.classList.contains('app-bar--fixed')) {
            document.body.classList.add('with-app-bar--fixed');
        }

        if(!document.body.classList.contains('with-app-bar--fixed')) {
            window.addEventListener('scroll', function (e) {
                scrollDirection = window.scrollY - scrollPosition;

                scrollPosition = window.scrollY;

                if (!ticking) {

                    window.requestAnimationFrame(function () {
                        appBarScroll(scrollDirection);
                        ticking = false;
                    });

                    ticking = true;

                }
            });
        }
    }

}

function appBarScroll(scrollDirection) {
    var appBar = document.querySelector('.app-bar');
    var appBarHeight = parseInt(window.getComputedStyle(appBar).height, 10);
    var position = parseInt(window.getComputedStyle(appBar).top, 10);

    if((position - scrollDirection < -appBarHeight || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) && window.scrollY >= appBarHeight) {
        appBar.style.top = '-' + appBarHeight + 'px';
    }
    else if(position - scrollDirection > 0 || window.pageYOffset <= 0 || window.scrollY == 0) {
        appBar.style.top = '0px';
    }
    else {
        appBar.style.top = position - scrollDirection + 'px';
    }
}

/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/data-table.js":
/*!**************************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/data-table.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fastDataTable; });
function fastDataTable () {
    if(document.querySelector('.data-table') &&
        document.querySelectorAll('.data-table td input[type="checkbox"]').length > 0 &&
        document.querySelector('.data-table th input[type="checkbox"]')) {
        const tableCheckboxes = document.querySelectorAll('.data-table td input[type="checkbox"]');
        const headCheckbox = document.querySelector('.data-table th input[type="checkbox"]');

        for (var i = 0, element; element = tableCheckboxes[i]; i++) {
            if (element !== null) {
                element.addEventListener('click', countCheckboxes);
            }
        }

        function countCheckboxes() {
            let count = 0;

            for (let i = 0, element; element = tableCheckboxes[i]; i++) {
                if (element !== null) {
                    element.checked ? count++ : null;
                }
            }

            if(count > 0) {
                document.querySelector('.data-table').classList.add('data-table--checked');
                document.querySelector('.data-table__selected-count').innerText = count;

                if(count == tableCheckboxes.length) {
                    headCheckbox.indeterminate = false;
                    headCheckbox.checked = true;
                }
                else {
                    headCheckbox.indeterminate = true;
                    headCheckbox.checked = false;
                }
            }
            else {
                document.querySelector('.data-table').classList.remove('data-table--checked');
                headCheckbox.indeterminate = false;
                headCheckbox.checked = false;
            }
        }

        headCheckbox.addEventListener('click', allCheckboxes);

        function allCheckboxes() {
            for (let i = 0, element; element = tableCheckboxes[i]; i++) {
                if (element !== null) {
                    if(headCheckbox.checked == true) {
                        element.checked = true;
                    }
                    else {
                        element.checked = false;
                    }
                }
            }

            if(headCheckbox.checked == true) {
                document.querySelector('.data-table').classList.add('data-table--checked');
                document.querySelector('.data-table__selected-count').innerText = tableCheckboxes.length;
            }
            else {
                document.querySelector('.data-table').classList.remove('data-table--checked');
            }
        }
    }
}

/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/drawer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/drawer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fastDrawer; });
function fastDrawer () {
    //----------------------------------------------------------------------------------
// Drawer
// https://codepen.io/RadiationX/pen/YWLqBX
//----------------------------------------------------------------------------------
    /* Change persistent to temporary on small screens */
    if((document.querySelector('.drawer--persistent') || document.querySelector('.drawer--permanent')) && window.innerWidth < 767) {
        document.querySelector('.drawer').classList.remove('drawer--persistent');
        document.querySelector('.drawer').classList.remove('drawer--permanent');
        document.querySelector('.drawer').classList.add('drawer--temporary');
    }

    if(document.querySelector('.app-bar__nav-toggle') && document.querySelector('.drawer--temporary')) {
        var drawer,
            drawerElem,
            iconElem;
        drawerElem = document.querySelector('.drawer');
        iconElem = document.querySelector('.app-bar__nav-toggle');
        drawer = new Drawer(drawerElem);
        drawer.setDrawerIcon(new DrawerIcon(iconElem));

        //Use methods
        drawer.onOpenListener(function () {
            document.body.classList.add('drawer-scroll-lock');

            if(document.querySelector('.drawer--persistent')) {
                document.body.classList.add('persistent--open');
            }
        });
        drawer.onCloseListener(function () {
            document.body.classList.remove('drawer-scroll-lock');

            if(document.querySelector('.drawer--persistent')) {
                document.body.classList.remove('persistent--open');
            }
        });

        document.querySelectorAll('.drawer a').forEach(function (item) {
            item.addEventListener('click', function () {
                drawer.closeDrawer();
            })
        });

        /*drawer.onMoveListener(function (x, percent, animation, duration) {
            console.log(x + " " + percent + " " + animation + " " + duration);
        });
        drawer.openDrawer();
        drawer.closeDrawer();
        drawer.toggleDrawer();
        drawer.isOpen();
        drawer.resetIconOnClick();*/
    }

    /* Drawer persistent */
    if(document.querySelector('.app-bar__nav-toggle') && document.querySelector('.drawer--persistent')) {
        var toggle = document.querySelector('.app-bar__nav-toggle');
        var drawer = document.querySelector('.drawer--persistent');

        toggle.addEventListener('click', function(e){
            e.preventDefault();

            if(drawer.classList.contains('drawer--open')) {
                drawer.classList.remove('drawer--open');
                document.body.classList.remove('persistent--open');
            }
            else {
                drawer.classList.add('drawer--open');
                document.body.classList.add('persistent--open');
            }
        });
    }

    /* Drawer permanent */
    if(document.querySelector('.app-bar__nav-toggle') && document.querySelector('.drawer--permanent')) {
        var toggle = document.querySelector('.app-bar__nav-toggle');
        var drawer = document.querySelector('.drawer--permanent');

        document.body.classList.add('permanent--open');
    }


    /* Drawer Library */
    function Drawer(drawerElem) {
        "use strict";

        function checkMobile(a) {
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
        }
        var drawerIcon = {
                set: function (a) {},
                setState: function (a, b) {},
                setOnClick: function(a) {}
            },
            drawerBg,
            drawerStarted = false,
            width = drawerElem.offsetWidth,
            correct = 0,
            percent = 0,
            trx = 0,
            opened = false,
            startMoveTime = 0,
            startX = 0,
            speedSwipe = 0,
            isMobile = checkMobile(navigator.userAgent || navigator.vendor || window.opera),
            isIE = window.navigator.msPointerEnabled,
            isIE11 = window.navigator.pointerEnabled,
            typeStart = "touchstart",
            typeMove = "touchmove",
            typeEnd = "touchend",
            trZ = "translateZ(0)",
            stateMoved = false,
            transformProp = "transform",
            transitionProp = "transition",
            propPrefixCss = "",
            antiSelect,
            onOpened = function () {},
            onClosed = function () {},
            onMove = function (x, percent, animation, duration) {};

        function setProperty(elem, property, value) {
            elem.style[property] = value;
        }

        function transfrom(x) {
            setProperty(drawerElem, transformProp, x + " " + trZ);
        }

        function move(x, e) {
            if (x < 0) {
                x = 0;
            }
            if (x > width) {
                x = width;
            }
            if (!stateMoved) {
                if (!isMobile) {
                    antiSelect.style.visibility = "visible";
                    if (!document.body.classList.contains("drawer__noselect"))
                        document.body.classList.add("drawer__noselect");
                }
                if (trx == x) {
                    stateMoved = false;
                    return;
                } else {
                    e.preventDefault();
                    stateMoved = true;
                }

            }
            trx = x;
            transfrom("translateX(-" + x + "px)");
            percent = (1 - (x / width));
            if (percent >= 1) {
                percent = 1;
            } else if (percent <= 0) {
                percent = 0;
            }
            drawerIcon.set(percent * 100);
            drawerBg.style.opacity = percent;
            onMove(320 - x, percent, false, 0);
        }

        function setTransition(s) {
            setProperty(drawerElem, transitionProp, propPrefixCss + "transform " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
            setProperty(drawerBg, transitionProp, "opacity " + s + "s cubic-bezier(0.0, 0.0, 0.2, 1)");
        }

        function clearTransition() {
            setProperty(drawerElem, transitionProp, "none");
            setProperty(drawerBg, transitionProp, "none");
        }

        function openDrawer(s) {
            s = s || 0.225;
            opened = true;
            setTransition(s);
            drawerElem.style.opacity = 1;
            drawerBg.style.opacity = 1;
            drawerBg.style.visibility = "visible";
            transfrom("translateX(0)");
            drawerIcon.setState(1, s);
            onMove(width, 1, true, s);
            setTimeout(function () {
                clearTransition();
                if (drawerStarted) {
                    return;
                }
                onOpened();
            }, s * 1000);
        }

        function closeDrawer(s) {
            s = s || 0.225;
            opened = false;
            setTransition(s);
            drawerBg.style.opacity = 0.001;
            transfrom("translateX(-" + width + "px)");
            drawerIcon.setState(0, s);
            onMove(0, 0, true, s);
            setTimeout(function () {
                clearTransition();
                if (drawerStarted) {
                    return;
                }
                drawerElem.style.opacity = 0.001;
                drawerBg.style.visibility = "hidden";
                onClosed();
            }, s * 1000);
        }

        function toggleDrawer() {
            if (opened) {
                closeDrawer(0.225);
            } else {
                openDrawer(0.225);
            }
        }

        function onMovedNoOpen(e) {
            move(correct - e.touches[0].clientX, e);
        }

        function onMovedOpen(e) {
            move(startX - e.touches[0].clientX, e);
        }

        function onMovedNoOpenDesktop(e) {
            move(correct - e.clientX, e);
        }

        function onMovedOpenDesktop(e) {
            move(startX - e.clientX, e);
        }

        window.addEventListener("resize", function (e) {
            width = drawerElem.offsetWidth;
            if (!opened) {
                transfrom("translateX(-" + width + "px)");
            }
        });

        drawerElem.addEventListener(typeStart, function (e) {
            drawerElem.style.opacity = 1;
            drawerBg.style.visibility = "visible";
            startX = isMobile ? e.touches[0].clientX : e.clientX;
            startMoveTime = new Date();
            correct = width + startX;
            drawerStarted = true;
        });
        document.addEventListener(typeStart, function (e) {
            if (!drawerStarted) {
                return;
            }
            if (opened) {
                document.addEventListener(typeMove, isMobile ? onMovedOpen : onMovedOpenDesktop);
            } else {
                document.addEventListener(typeMove, isMobile ? onMovedNoOpen : onMovedNoOpenDesktop);
            }
        });

        document.addEventListener(typeEnd, function (e) {
            drawerStarted = false;
            stateMoved = false;
            if (!isMobile) {
                antiSelect.style.visibility = "hidden";
                document.body.classList.remove("drawer__noselect");
            }
            document.removeEventListener(typeMove, isMobile ? onMovedOpen : onMovedOpenDesktop);
            document.removeEventListener(typeMove, isMobile ? onMovedNoOpen : onMovedNoOpenDesktop);

            speedSwipe = (((width / 2) / ((Math.abs((isMobile ? e.changedTouches[0].clientX : e.clientX) - startX)) / (new Date() - startMoveTime))) / 1000).toFixed(3);
            if (speedSwipe == Infinity) {
                if (!opened) {
                    closeDrawer(0);
                } else {
                    openDrawer(0);
                }
                return;
            }
            if (trx == 0) {
                return;
            }
            if (speedSwipe <= 0.150) {
                speedSwipe = 0.150;
            } else if (speedSwipe >= 0.5) {
                speedSwipe = 0.5;
            }
            var intent = (startX - (isMobile ? e.changedTouches[0].clientX : e.clientX)) > 0;
            if ((width / 2.25) > trx) {
                if (intent && speedSwipe < 0.4) {
                    closeDrawer(speedSwipe);
                } else {
                    openDrawer(speedSwipe);
                }
            } else {
                if (!intent && speedSwipe < 0.4) {
                    openDrawer(speedSwipe);
                } else {
                    closeDrawer(speedSwipe);
                }
            }
            trx = 0;
        });
        this.setDrawerIcon = function (icon) {
            drawerIcon = icon;
            drawerIcon.setOnClick(function (e) {
                toggleDrawer();
            });
        };
        this.getDrawerIcon = function () {
            return drawerIcon;
        };
        this.resetIconOnClick = function(){
            drawerIcon.setOnClick(function (e) {
                toggleDrawer();
            });
        };
        this.onOpenListener = function (listener) {
            onOpened = listener;
        };
        this.onCloseListener = function (listener) {
            onClosed = listener;
        };
        this.onMoveListener = function (listener) {
            onMove = listener;
        };
        this.openDrawer = function () {
            openDrawer();
        };
        this.closeDrawer = function () {
            closeDrawer();
        };
        this.toggleDrawer = function () {
            toggleDrawer();
        };
        this.isOpen = function () {
            return opened;
        };

        (function () {
            if (document.querySelector('.drawer__bg')) {
                drawerBg = document.querySelector('.drawer__bg');
            }
            else {
                drawerBg = document.createElement("DIV");
                drawerBg.className = "drawer__bg";
                drawerBg.id = "drawer__bg";
                drawerElem.parentElement.insertBefore(drawerBg, drawerElem);
            }
            drawerBg.onclick = function () {
                if (opened) {
                    closeDrawer(0.225);
                }
            };
            antiSelect = document.createElement("DIV");
            antiSelect.className = "drawer__antiSelect";
            drawerElem.appendChild(antiSelect);
            var label = document.createElement("DIV");
            label.className = "drawer__label";
            drawerElem.appendChild(label);
            //Find prop name
            var vendors;
            if (antiSelect.style.transform === undefined) {
                vendors = ['Webkit', 'Moz', 'ms', 'O'];
                for (var vendor in vendors) {
                    if (antiSelect.style[vendors[vendor] + 'Transform'] !== undefined) {
                        transformProp = vendors[vendor] + 'Transform';
                        propPrefixCss = "-" + vendors[vendor].toLowerCase() + "-";
                    }
                    if (antiSelect.style[vendors[vendor] + 'Transition'] !== undefined) {
                        transitionProp = vendors[vendor] + 'Transition';
                    }
                }
            }
            if (/.*opera.*presto/i.test(navigator.userAgent)) {
                trZ = "";
            }
        })();
    }

    /* Hamburger Library */
    function DrawerIcon(icon) {
        "use strict";
        var ic,
            line1,
            line2,
            line3,
            const1 = 1 / 300,
            const2 = 1 / 500,
            const3 = 2 / 3,
            direction = true,
            locked = false,
            rotateLine,
            scaleX,
            transY,
            transX,
            scaleX2,
            transX2,
            rotateIc,
            transformProp = "transform",
            transitionProp = "transition",
            trZ = "translateZ(0)",
            propPrefixCss = "";

        function setProperty(elem, property, value) {
            elem.style[property] = value;
        }

        function enableAnimation(duration) {
            var transition = propPrefixCss + "transform " + duration + "s ease";
            setProperty(line1, transitionProp, transition);
            setProperty(line2, transitionProp, transition);
            setProperty(line3, transitionProp, transition);
            setProperty(ic, transitionProp, transition);
        }

        function disableAnimation() {
            setProperty(line1, transitionProp, "none");
            setProperty(line2, transitionProp, "none");
            setProperty(line3, transitionProp, "none");
            setProperty(ic, transitionProp, "none");
        }

        this.state = function () {
            return direction;
        };

        this.setOnClick = function (listener) {
            icon.onclick = listener;
        };

        this.set = function (percent) {
            if (locked) {
                return;
            }
            if (percent > 100) {
                percent = 100;
            }
            if (percent < 0) {
                percent = 0;
            }
            if (percent >= 100) {
                direction = false;
            }
            if (percent <= 0) {
                direction = true;
            }

            rotateLine = 0.45 * percent;
            scaleX = 1 - const1 * percent;
            transY = 0.054 * percent;
            transX = 0.033 * percent;
            scaleX2 = 1 - const2 * percent;
            transX2 = -0.01 * percent;
            if (direction) {
                rotateIc = 1.80 * percent;
            } else {
                rotateIc = 360 - (1.80 * percent);
            }
            setProperty(line1, transformProp, "rotate(" + rotateLine + "deg) scaleX(" + scaleX + ") translateY(" + transY + "px) translateX(" + transX + "px) " + trZ);
            setProperty(line2, transformProp, "scaleX(" + scaleX2 + ") translateX(" + transX2 + "px) " + trZ);
            setProperty(line3, transformProp, "rotate(" + (-rotateLine) + "deg) scaleX(" + scaleX + ") translateY(" + (-transY) + "px) translateX(" + transX + "px) " + trZ);
            setProperty(ic, transformProp, "rotate(" + rotateIc + "deg) " + trZ);
        };

        this.setState = function (state, duration) {
            duration = duration || 0.225;
            enableAnimation(duration);
            var temp = this;
            switch (state) {
                case 0:
                    this.set(1);
                    break;
                case 1:
                    this.set(100);
                    break;
            }
            setTimeout(function () {
                disableAnimation();
                if (state === 0) {
                    temp.set(0);
                }
            }, Number(duration) * 1000);
        };

        this.lock = function () {
            locked = true;
        };
        this.unLock = function () {
            locked = false;
        };

        (function () {
            icon.innerHTML += '<span class="ic"><i class="line one"></i><i class="line two"></i><i class="line thr"></i></span>';
            ic = icon.querySelector(".ic");
            line1 = ic.querySelector(".one");
            line2 = ic.querySelector(".two");
            line3 = ic.querySelector(".thr");
            //Find prop name
            var testEl = document.createElement('div'),
                vendors;
            if (testEl.style.transform === undefined) {
                vendors = ['Webkit', 'Moz', 'ms', 'O'];
                for (var vendor in vendors) {
                    if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
                        transformProp = vendors[vendor] + 'Transform';
                        propPrefixCss = "-" + vendors[vendor].toLowerCase() + "-";
                    }
                    if (testEl.style[vendors[vendor] + 'Transition'] !== undefined) {
                        transitionProp = vendors[vendor] + 'Transition';
                    }
                }
            }
            if (/.*opera.*presto/i.test(navigator.userAgent)) {
                trZ = "";
            }
        })();
    }

    function hasClass(element, className) {
        do {
            if (element.classList && element.classList.contains(className)) {
                return true;
            }
            element = element.parentNode;
        } while (element);
        return false;
    }
}

/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/fab.js":
/*!*******************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/fab.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fastFab; });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/esm/index.all.js");


function fastFab () {
    const fabTooltip = document.querySelector('.fab--menu');
    Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fabTooltip, {
        placement: 'left',
        theme: 'light',
    });

    //----------------------------------------------------------------------------------
    // FAB toggle on mobile
    //----------------------------------------------------------------------------------
    if(document.querySelector('.fab--menu')) {
        var fab = document.querySelector('.fab');

        fab.addEventListener('touchstart', function(e){
            if(document.activeElement != this) {
                e.preventDefault();
            }

            this.focus();
        });
    }
}

/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/legacy-support.js":
/*!******************************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/legacy-support.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return legacySupport; });
function legacySupport () {
    function hasClass(element, className) {
        do {
            if (element.classList && element.classList.contains(className)) {
                return true;
            }
            element = element.parentNode;
        } while (element);
        return false;
    }

    //----------------------------------------------------------------------------------
    // IE & Edge placeholder-shown fix
    //----------------------------------------------------------------------------------
    function placeholderPolyfill() {
        this.classList[this.value ? 'add' : 'remove']('placeholder-hidden');
    }

    if ((!(document.documentMode) && window.StyleMedia) || ((/*@cc_on!@*/ false) || (document.documentMode))) {
        document.querySelectorAll('[placeholder]').forEach(el => {
            el.classList[el.value ? 'add' : 'remove']('placeholder-hidden');
            el.addEventListener('change', placeholderPolyfill);
            el.addEventListener('keyup', placeholderPolyfill);
        });

        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }

        if (!Object.prototype.forEach) {
            Object.defineProperty(Object.prototype, 'forEach', {
                value: function (callback, thisArg) {
                    if (this == null) {
                        throw new TypeError('Not an object');
                    }
                    thisArg = thisArg || window;
                    for (var key in this) {
                        if (this.hasOwnProperty(key)) {
                            callback.call(thisArg, this[key], key, this);
                        }
                    }
                }
            });
        }

        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }

    document.documentElement.className += (window.self == window.top ? " top" : "framed");
}

/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/menu.js":
/*!********************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/menu.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fastMenu; });
function fastMenu () {
    if (document.querySelectorAll('.menu__toggle').length > 0) {
        var menus = document.querySelectorAll('.menu__toggle');

        for (var i = 0, menu; menu = menus[i]; i++) {
            if (menu !== null) {
                menu.addEventListener('click', function (e) {
                    e.preventDefault();
                    var menuList = document.querySelector(this.dataset.menu);

                    if (menuList.classList.contains('menu--open')) {
                        menuList.classList.remove('menu--open');
                    } else {
                        menuList.classList.add('menu--open');
                    }
                });
            }
        }

        document.body.addEventListener('mousedown', function (e) {
            if (hasClass(e.target, 'menu') == false) {
                var menuLists = document.querySelectorAll('.menu__list');

                for (var i = 0, menuList; menuList = menuLists[i]; i++) {
                    if (menu !== null) {
                        if (menuList.classList.contains('menu--open')) {
                            menuList.classList.remove('menu--open');
                        }
                    }
                }
            }
        }, true);
    }

    function hasClass(element, className) {
        do {
            if (element.classList && element.classList.contains(className)) {
                return true;
            }
            element = element.parentNode;
        } while (element);
        return false;
    }
}

/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/snackbar.js":
/*!************************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/snackbar.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fastSnackbar; });
function fastSnackbar () {
    return __webpack_require__(/*! snackbarlightjs */ "./node_modules/snackbarlightjs/src/js/snackbarlight.js");
}

/***/ }),

/***/ "./node_modules/project-fast/src/assets/js/components/upload-field.js":
/*!****************************************************************************!*\
  !*** ./node_modules/project-fast/src/assets/js/components/upload-field.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fastUpload; });
function fastUpload () {
    //----------------------------------------------------------------------------------
    // Upload field value
    //----------------------------------------------------------------------------------
    if(document.querySelectorAll('.upload-field').length > 0) {
        var uploadFields = document.querySelectorAll('.upload-field');

        uploadFields.forEach(function(field) {
            if (field !== null) {

                field.querySelector('.upload-field__input').addEventListener('change', function() {
                    var values = [];

                    for (let i = 0, files = this.files.length; i < files; i++) {
                        const file = this.files[i];
                        values.push(file.name);
                    }

                    field.querySelector('.upload-field__value').innerHTML = values.join();
                });
            }
        });
    }
}

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/snackbarlightjs/src/js/snackbarlight.js":
/*!**************************************************************!*\
  !*** ./node_modules/snackbarlightjs/src/js/snackbarlight.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Constructor
 *
 * @param {[type]}   data     [description]
 * @param {[type]}   options  [description]
 * @param {Function} callback [description]
 */
function Snackbar(data, options, callback){
	if (data !== "") {
		this.options = this.activateOptions(options);
		this.data = data;
		this.callback = callback;
		this.start();
		this.snackbar();
	} else {
		console.warn("SnackbarLight: You can not create a empty snackbar please give it a string.");
	}
}

Snackbar.prototype = {

	/**
	 * Default options
	 *
	 * @type {Object}
	 */
	options: {
		// How long it takes for the snackbar to disappear
		timeout: 5000,
		// Wich class is used to tell that the snackbar is active
		activeClass: "active",
		// Name of the link or action if specified
		link: false,
		// If not used clicking will activate the callback or do nothing
		url: "#",
	},

	/**
	 * Create container for the snackbar
	 *
	 * @return {void}
	 */
	start: function() {
		if (!document.getElementById("snackbar-container")) {
			var snackbarContainer = document.createElement("div");
			
			snackbarContainer.setAttribute("id", "snackbar-container");
			
			document.body.appendChild(snackbarContainer);
		}
	},

	/**
	 * Timer
	 *
	 * @param  {Function} callback
	 * @param  {int}   delay
	 * @return {void}
	 */
	timer: function(callback, delay) {
	    var remaining = delay;

	    this.timer = {
	    	// Create random timer id
	    	timerId: Math.round(Math.random()*1000),

		    pause: function() {
		        // Clear the timeout
		        window.clearTimeout(this.timerId);
		        // Set the remaining to what time remains
		        remaining -= new Date() - start;
		    },

		    resume: function() {
		        start = new Date();
		        // Clear the timeout
		        window.clearTimeout(this.timerId);
		        // Set the timeout again
		        this.timerId = window.setTimeout(callback, remaining);
		    },	
	    };
	    // Start the timer
	    this.timer.resume();
	},

	/**
	 * snackbar
	 *
	 * @return {void}
	 */
	snackbar: function() {
		var __self = this,
			snackbar = document.createElement("div");
		
		// Put the snackbar inside the snackbar container
		document.getElementById("snackbar-container").appendChild(snackbar);

	  	// Set the html inside the snackbar
	  	snackbar.innerHTML = this.getData();
		
		// Set the class of the snackbar
		snackbar.setAttribute("class", "snackbar");

		// Wait to set the active class so animations will be activated
		setTimeout(function() {
			snackbar.setAttribute("class","snackbar " + __self.options.activeClass);
		}, 50);

		// If the timeout is false the snackbar will not be destroyed after some time
		// only when the user clicks on it
		if (this.options.timeout !== false) {
			// Start the timer
			this.timer(function() {
				snackbar.setAttribute("class", "snackbar");
				__self.destroy(snackbar);
			}, this.options.timeout);
		}

		// Add the event listeners
		this.listeners(snackbar);
	},

	/**
	 * Get the data/ message to display in the snackbar
	 *
	 * @return {string}
	 */
	getData: function() {
		if (this.options.link !== false) {
			return "<span>" + this.data + "</span><a href='" + this.options.url + "'>" + this.options.link + "</a>";
		}
		return "<span>" + this.data + "</span>";
	},

	/**
	 * Activate the listeners
	 *
	 * @param  {Object} element
	 * @return {void}
	 */
	listeners: function(element) {
		var __self = this;
		// Adding event listener for when user clicks on the snackbar to remove it
		element.addEventListener("click", function(){
			if (typeof __self.callback == "function") {
				__self.callback();
			}
			element.setAttribute("class", "snackbar");
	    	__self.destroy(element);
		});

		// Stopping the timer when user hovers on the snackbar
		element.addEventListener("mouseenter",function(){
			__self.timer.pause();
		});
		element.addEventListener("mouseout",function(){
			__self.timer.resume();
		});
	},

	/**
	 * Remove the snackbar
	 *
	 * @param  {object} element
	 * @return {void}
	 */
	destroy: function(element) {
		// Delay for removing the element (for when there are animations)
		this.timer.pause();
		setTimeout(function() {
			element.remove();
		}, 10000);
	},

	/**
	 * Compare the options to the default ones.
	 *
	 * @param  {Object} newOptions
	 * @return {Object}
	 */
	activateOptions: function(newOptions) {
		var __self = this,
  			options = newOptions || {};

    	for (var opt in this.options) {
        	if (__self.options.hasOwnProperty(opt) && !options.hasOwnProperty(opt)) {
            	options[opt] = __self.options[opt];
        	}
        }
       	return options;
	},
};

///////////////////////////////
// Vuejs/ browserify support //
///////////////////////////////
SnackbarLight = {
	/**
	 * Install function for Vue
	 *
	 * @param  {Object} Vue
	 * @return {void}
	 */
	install: function(Vue){
		var __self = this;
		Vue.prototype.$snackbar = {};
	  	Vue.prototype.$snackbar.create = function(data, options, callback){
	  		__self.create(data, options, callback);
	  	};
	},

	/**
	 * Create a new snackbar
	 *
	 * @param  {string}   data
	 * @param  {Object}   options
	 * @param  {Function} callback
	 * @return {void}
	 */
	create: function(data, options, callback){
		new Snackbar(data, options, callback);
	}
};

if (true) {
	// Export
    module.exports = SnackbarLight;
} else {}

/////////////////
// Data-toggle //
/////////////////

// Search all elements for the data toggle the snackbar
var elements = document.querySelectorAll("[data-toggle=snackbar]");

// Loop them and add event listeners to them
for (var i = elements.length - 1; i >= 0; i--) {
	elements[i].addEventListener("click", function(){
		var options = {};

		if (this.getAttribute("data-link") !== null) {
			options.link = this.getAttribute("data-link");
		}
		if (this.getAttribute("data-timeout") !== null) {
			options.timeout = this.getAttribute("data-timeout");
		}
		if (this.getAttribute("data-activeClass") !== null) {
			options.activeClass = this.getAttribute("data-active-class");
		}
		if (this.getAttribute("data-url")) {
			options.url = this.getAttribute("data-url");
		}
			
		new Snackbar(this.getAttribute("data-content"), options);
	});
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tippy.js/esm/index.all.js":
/*!************************************************!*\
  !*** ./node_modules/tippy.js/esm/index.all.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/**!
* tippy.js v4.3.5
* (c) 2017-2019 atomiks
* MIT License
*/


var css = ".tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px);transform:perspective(700px) translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(60deg);transform:perspective(700px) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px);transform:perspective(700px) translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(-60deg);transform:perspective(700px) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px);transform:perspective(700px) translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(-60deg);transform:perspective(700px) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px);transform:perspective(700px) translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(60deg);transform:perspective(700px) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:initial}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}";

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "4.3.5";

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);
var isUCBrowser = /UCBrowser\//.test(ua);
var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;

var defaultProps = {
  a11y: true,
  allowHTML: true,
  animateFill: true,
  animation: 'shift-away',
  appendTo: function appendTo() {
    return document.body;
  },
  aria: 'describedby',
  arrow: false,
  arrowType: 'sharp',
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [325, 275],
  flip: true,
  flipBehavior: 'flip',
  flipOnUpdate: false,
  followCursor: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  maxWidth: 350,
  multiple: false,
  offset: 0,
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  placement: 'top',
  popperOptions: {},
  role: 'tooltip',
  showOnInit: false,
  size: 'regular',
  sticky: false,
  target: '',
  theme: 'dark',
  touch: true,
  touchHold: false,
  trigger: 'mouseenter focus',
  triggerTarget: null,
  updateDuration: 0,
  wait: null,
  zIndex: 9999
  /**
   * If the set() method encounters one of these, the popperInstance must be
   * recreated
   */

};
var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'arrowType', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];

var elementProto = isBrowser ? Element.prototype : {};
var matches = elementProto.matches || elementProto.matchesSelector || elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector || elementProto.msMatchesSelector;
/**
 * Ponyfill for Array.from - converts iterable values to an array
 */

function arrayFrom(value) {
  return [].slice.call(value);
}
/**
 * Ponyfill for Element.prototype.closest
 */

function closest(element, selector) {
  return closestCallback(element, function (el) {
    return matches.call(el, selector);
  });
}
/**
 * Works like Element.prototype.closest, but uses a callback instead
 */

function closestCallback(element, callback) {
  while (element) {
    if (callback(element)) {
      return element;
    }

    element = element.parentElement;
  }

  return null;
}

// Passive event listener config
var PASSIVE = {
  passive: true // Popper `preventOverflow` padding

};
var PADDING = 4; // Popper attributes
// In Popper v2 these will be `data-*` instead of `x-*` to adhere to HTML5 spec

var PLACEMENT_ATTRIBUTE = 'x-placement';
var OUT_OF_BOUNDARIES_ATTRIBUTE = 'x-out-of-boundaries'; // Classes

var IOS_CLASS = "tippy-iOS";
var ACTIVE_CLASS = "tippy-active";
var POPPER_CLASS = "tippy-popper";
var TOOLTIP_CLASS = "tippy-tooltip";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var ROUND_ARROW_CLASS = "tippy-roundarrow"; // Selectors

var POPPER_SELECTOR = ".".concat(POPPER_CLASS);
var TOOLTIP_SELECTOR = ".".concat(TOOLTIP_CLASS);
var CONTENT_SELECTOR = ".".concat(CONTENT_CLASS);
var BACKDROP_SELECTOR = ".".concat(BACKDROP_CLASS);
var ARROW_SELECTOR = ".".concat(ARROW_CLASS);
var ROUND_ARROW_SELECTOR = ".".concat(ROUND_ARROW_CLASS);

var isUsingTouch = false;
function onDocumentTouch() {
  if (isUsingTouch) {
    return;
  }

  isUsingTouch = true;

  if (isIOS) {
    document.body.classList.add(IOS_CLASS);
  }

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
var lastMouseMoveTime = 0;
function onDocumentMouseMove() {
  var now = performance.now(); // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference

  if (now - lastMouseMoveTime < 20) {
    isUsingTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);

    if (!isIOS) {
      document.body.classList.remove(IOS_CLASS);
    }
  }

  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var _document = document,
      activeElement = _document.activeElement;

  if (activeElement && activeElement.blur && activeElement._tippy) {
    activeElement.blur();
  }
}
/**
 * Adds the needed global event listeners
 */

function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouch, PASSIVE);
  window.addEventListener('blur', onWindowBlur);
}

var keys = Object.keys(defaultProps);
/**
 * Returns an object of optional props from data-tippy-* attributes
 */

function getDataAttributeOptions(reference) {
  return keys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-".concat(key)) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
}
/**
 * Polyfills the virtual reference (plain object) with Element.prototype props
 * Mutating because DOM elements are mutated, adds `_tippy` property
 */

function polyfillElementPrototypeProperties(virtualReference) {
  var polyfills = {
    isVirtual: true,
    attributes: virtualReference.attributes || {},
    contains: function contains() {},
    setAttribute: function setAttribute(key, value) {
      virtualReference.attributes[key] = value;
    },
    getAttribute: function getAttribute(key) {
      return virtualReference.attributes[key];
    },
    removeAttribute: function removeAttribute(key) {
      delete virtualReference.attributes[key];
    },
    hasAttribute: function hasAttribute(key) {
      return key in virtualReference.attributes;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    classList: {
      classNames: {},
      add: function add(key) {
        virtualReference.classList.classNames[key] = true;
      },
      remove: function remove(key) {
        delete virtualReference.classList.classNames[key];
      },
      contains: function contains(key) {
        return key in virtualReference.classList.classNames;
      }
    }
  };

  for (var key in polyfills) {
    virtualReference[key] = polyfills[key];
  }
}

/**
 * Determines if a value is a "bare" virtual element (before mutations done
 * by `polyfillElementPrototypeProperties()`). JSDOM elements show up as
 * [object Object], we can check if the value is "element-like" if it has
 * `addEventListener`
 */

function isBareVirtualElement(value) {
  return {}.toString.call(value) === '[object Object]' && !value.addEventListener;
}
/**
 * Determines if the value is a reference element
 */

function isReferenceElement(value) {
  return !!value._tippy && !matches.call(value, POPPER_SELECTOR);
}
/**
 * Safe .hasOwnProperty check, for prototype-less objects
 */

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
/**
 * Returns an array of elements based on the value
 */

function getArrayOfElements(value) {
  if (isSingular(value)) {
    // TODO: VirtualReference is not compatible to type Element
    return [value];
  }

  if (value instanceof NodeList) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    return arrayFrom(document.querySelectorAll(value));
  } catch (e) {
    return [];
  }
}
/**
 * Returns a value at a given index depending on if it's an array or number
 */

function getValue(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? defaultValue : v;
  }

  return value;
}
/**
 * Debounce utility. To avoid bloating bundle size, we're only passing 1
 * argument here, a more generic function would pass all arguments. Only
 * `onMouseMove` uses this which takes the event object for now.
 */

function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
/**
 * Prevents errors from being thrown while accessing nested modifier objects
 * in `popperOptions`
 */

function getModifier(obj, key) {
  return obj && obj.modifiers && obj.modifiers[key];
}
/**
 * Determines if an array or string includes a value
 */

function includes(a, b) {
  return a.indexOf(b) > -1;
}
/**
 * Determines if the value is a real element
 */

function isRealElement(value) {
  return value instanceof Element;
}
/**
 * Determines if the value is singular-like
 */

function isSingular(value) {
  return !!(value && hasOwnProperty(value, 'isVirtual')) || isRealElement(value);
}
/**
 * Firefox extensions don't allow setting .innerHTML directly, this will trick it
 */

function innerHTML() {
  return 'innerHTML';
}
/**
 * Evaluates a function if one, or returns the value
 */

function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(null, args) : value;
}
/**
 * Sets a popperInstance `flip` modifier's enabled state
 */

function setFlipModifierEnabled(modifiers, value) {
  modifiers.filter(function (m) {
    return m.name === 'flip';
  })[0].enabled = value;
}
/**
 * Determines if an element can receive focus
 * Always returns true for virtual objects
 */

function canReceiveFocus(element) {
  return isRealElement(element) ? matches.call(element, 'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]') && !element.hasAttribute('disabled') : true;
}
/**
 * Returns a new `div` element
 */

function div() {
  return document.createElement('div');
}
/**
 * Applies a transition duration to a list of elements
 */

function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = "".concat(value, "ms");
    }
  });
}
/**
 * Sets the visibility state to elements so they can begin to transition
 */

function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
/**
 * Evaluates the props object by merging data attributes and
 * disabling conflicting options where necessary
 */

function evaluateProps(reference, props) {
  var out = _extends({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeOptions(reference));

  if (out.arrow || isUCBrowser) {
    out.animateFill = false;
  }

  return out;
}
/**
 * Validates an object of options with the valid default props object
 */

function validateOptions(options, defaultProps) {
  Object.keys(options).forEach(function (option) {
    if (!hasOwnProperty(defaultProps, option)) {
      throw new Error("[tippy]: `".concat(option, "` is not a valid option"));
    }
  });
}

/**
 * Sets the innerHTML of an element
 */

function setInnerHTML(element, html) {
  element[innerHTML()] = isRealElement(html) ? html[innerHTML()] : html;
}
/**
 * Sets the content of a tooltip
 */

function setContent(contentEl, props) {
  if (isRealElement(props.content)) {
    setInnerHTML(contentEl, '');
    contentEl.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    var key = props.allowHTML ? 'innerHTML' : 'textContent';
    contentEl[key] = props.content;
  }
}
/**
 * Returns the child elements of a popper element
 */

function getChildren(popper) {
  return {
    tooltip: popper.querySelector(TOOLTIP_SELECTOR),
    backdrop: popper.querySelector(BACKDROP_SELECTOR),
    content: popper.querySelector(CONTENT_SELECTOR),
    arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(ROUND_ARROW_SELECTOR)
  };
}
/**
 * Adds `data-inertia` attribute
 */

function addInertia(tooltip) {
  tooltip.setAttribute('data-inertia', '');
}
/**
 * Removes `data-inertia` attribute
 */

function removeInertia(tooltip) {
  tooltip.removeAttribute('data-inertia');
}
/**
 * Creates an arrow element and returns it
 */

function createArrowElement(arrowType) {
  var arrow = div();

  if (arrowType === 'round') {
    arrow.className = ROUND_ARROW_CLASS;
    setInnerHTML(arrow, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>');
  } else {
    arrow.className = ARROW_CLASS;
  }

  return arrow;
}
/**
 * Creates a backdrop element and returns it
 */

function createBackdropElement() {
  var backdrop = div();
  backdrop.className = BACKDROP_CLASS;
  backdrop.setAttribute('data-state', 'hidden');
  return backdrop;
}
/**
 * Adds interactive-related attributes
 */

function addInteractive(popper, tooltip) {
  popper.setAttribute('tabindex', '-1');
  tooltip.setAttribute('data-interactive', '');
}
/**
 * Removes interactive-related attributes
 */

function removeInteractive(popper, tooltip) {
  popper.removeAttribute('tabindex');
  tooltip.removeAttribute('data-interactive');
}
/**
 * Add/remove transitionend listener from tooltip
 */

function updateTransitionEndListener(tooltip, action, listener) {
  // UC Browser hasn't adopted the `transitionend` event despite supporting
  // unprefixed transitions...
  var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend';
  tooltip[action + 'EventListener'](eventName, listener);
}
/**
 * Returns the popper's placement, ignoring shifting (top-start, etc)
 */

function getBasicPlacement(popper) {
  var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
  return fullPlacement ? fullPlacement.split('-')[0] : '';
}
/**
 * Triggers reflow
 */

function reflow(popper) {
  void popper.offsetHeight;
}
/**
 * Adds/removes theme from tooltip's classList
 */

function updateTheme(tooltip, action, theme) {
  theme.split(' ').forEach(function (themeName) {
    tooltip.classList[action](themeName + '-theme');
  });
}
/**
 * Constructs the popper element and returns it
 */

function createPopperElement(id, props) {
  var popper = div();
  popper.className = POPPER_CLASS;
  popper.id = "tippy-".concat(id);
  popper.style.zIndex = '' + props.zIndex;
  popper.style.position = 'absolute';
  popper.style.top = '0';
  popper.style.left = '0';

  if (props.role) {
    popper.setAttribute('role', props.role);
  }

  var tooltip = div();
  tooltip.className = TOOLTIP_CLASS;
  tooltip.style.maxWidth = props.maxWidth + (typeof props.maxWidth === 'number' ? 'px' : '');
  tooltip.setAttribute('data-size', props.size);
  tooltip.setAttribute('data-animation', props.animation);
  tooltip.setAttribute('data-state', 'hidden');
  updateTheme(tooltip, 'add', props.theme);
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');

  if (props.interactive) {
    addInteractive(popper, tooltip);
  }

  if (props.arrow) {
    tooltip.appendChild(createArrowElement(props.arrowType));
  }

  if (props.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  }

  if (props.inertia) {
    addInertia(tooltip);
  }

  setContent(content, props);
  tooltip.appendChild(content);
  popper.appendChild(tooltip);
  return popper;
}
/**
 * Updates the popper element based on the new props
 */

function updatePopperElement(popper, prevProps, nextProps) {
  var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      backdrop = _getChildren.backdrop,
      arrow = _getChildren.arrow;

  popper.style.zIndex = '' + nextProps.zIndex;
  tooltip.setAttribute('data-size', nextProps.size);
  tooltip.setAttribute('data-animation', nextProps.animation);
  tooltip.style.maxWidth = nextProps.maxWidth + (typeof nextProps.maxWidth === 'number' ? 'px' : '');

  if (nextProps.role) {
    popper.setAttribute('role', nextProps.role);
  } else {
    popper.removeAttribute('role');
  }

  if (prevProps.content !== nextProps.content) {
    setContent(content, nextProps);
  } // animateFill


  if (!prevProps.animateFill && nextProps.animateFill) {
    tooltip.appendChild(createBackdropElement());
    tooltip.setAttribute('data-animatefill', '');
  } else if (prevProps.animateFill && !nextProps.animateFill) {
    tooltip.removeChild(backdrop);
    tooltip.removeAttribute('data-animatefill');
  } // arrow


  if (!prevProps.arrow && nextProps.arrow) {
    tooltip.appendChild(createArrowElement(nextProps.arrowType));
  } else if (prevProps.arrow && !nextProps.arrow) {
    tooltip.removeChild(arrow);
  } // arrowType


  if (prevProps.arrow && nextProps.arrow && prevProps.arrowType !== nextProps.arrowType) {
    tooltip.replaceChild(createArrowElement(nextProps.arrowType), arrow);
  } // interactive


  if (!prevProps.interactive && nextProps.interactive) {
    addInteractive(popper, tooltip);
  } else if (prevProps.interactive && !nextProps.interactive) {
    removeInteractive(popper, tooltip);
  } // inertia


  if (!prevProps.inertia && nextProps.inertia) {
    addInertia(tooltip);
  } else if (prevProps.inertia && !nextProps.inertia) {
    removeInertia(tooltip);
  } // theme


  if (prevProps.theme !== nextProps.theme) {
    updateTheme(tooltip, 'remove', prevProps.theme);
    updateTheme(tooltip, 'add', nextProps.theme);
  }
}
/**
 * Hides all visible poppers on the document
 */

function hideAll() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  arrayFrom(document.querySelectorAll(POPPER_SELECTOR)).forEach(function (popper) {
    var instance = popper._tippy;

    if (instance) {
      var isExcluded = false;

      if (excludedReferenceOrInstance) {
        isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : popper === excludedReferenceOrInstance.popper;
      }

      if (!isExcluded) {
        instance.hide(duration);
      }
    }
  });
}
/**
 * Determines if the mouse cursor is outside of the popper's interactive border
 * region
 */

function isCursorOutsideInteractiveBorder(popperPlacement, popperRect, event, props) {
  if (!popperPlacement) {
    return true;
  }

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = props.interactiveBorder,
      distance = props.distance;
  var exceedsTop = popperRect.top - y > (popperPlacement === 'top' ? interactiveBorder + distance : interactiveBorder);
  var exceedsBottom = y - popperRect.bottom > (popperPlacement === 'bottom' ? interactiveBorder + distance : interactiveBorder);
  var exceedsLeft = popperRect.left - x > (popperPlacement === 'left' ? interactiveBorder + distance : interactiveBorder);
  var exceedsRight = x - popperRect.right > (popperPlacement === 'right' ? interactiveBorder + distance : interactiveBorder);
  return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
}
/**
 * Returns the distance offset, taking into account the default offset due to
 * the transform: translate() rule (10px) in CSS
 */

function getOffsetDistanceInPx(distance) {
  return -(distance - 10) + 'px';
}

var idCounter = 1; // Workaround for IE11's lack of new MouseEvent constructor

var mouseMoveListeners = [];
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, collectionProps) {
  var props = evaluateProps(reference, collectionProps); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var lastTriggerEventType;
  var lastMouseMoveEvent;
  var showTimeoutId;
  var hideTimeoutId;
  var scheduleHideAnimationFrameId;
  var isScheduledToShow = false;
  var isBeingDestroyed = false;
  var previousPlacement;
  var wasVisibleDuringPreviousUpdate = false;
  var hasMountCallbackRun = false;
  var currentMountCallback;
  var currentTransitionEndListener;
  var listeners = [];
  var currentComputedPadding;
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper = createPopperElement(id, props);
  var popperChildren = getChildren(popper);
  var popperInstance = null;
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    set: set,
    setContent: setContent,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
    /* ==================== Initial instance mutations =================== */

  };
  reference._tippy = instance;
  popper._tippy = instance;
  addTriggersToReference();

  if (!props.lazy) {
    createPopperInstance();
  }

  if (props.showOnInit) {
    scheduleShow();
  } // Ensure the event listeners target can receive focus


  if (props.a11y && !props.target && !canReceiveFocus(getEventListenersTarget())) {
    getEventListenersTarget().setAttribute('tabindex', '0');
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function (event) {
    if (instance.props.interactive && instance.state.isVisible && lastTriggerEventType === 'mouseenter') {
      // We don't want props.onTrigger() to be called here, since the `event`
      // object is not related to the reference element
      scheduleShow(event, true);
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && lastTriggerEventType === 'mouseenter') {
      document.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  /**
   * Removes the follow cursor listener
   */

  function removeFollowCursorListener() {
    document.removeEventListener('mousemove', positionVirtualReferenceNearCursor);
  }
  /**
   * Cleans up interactive mouse listeners
   */


  function cleanupInteractiveMouseListeners() {
    document.body.removeEventListener('mouseleave', scheduleHide);
    document.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  /**
   * Returns correct target used for event listeners
   */


  function getEventListenersTarget() {
    return instance.props.triggerTarget || reference;
  }
  /**
   * Adds the document click event listener for the instance
   */


  function addDocumentClickListener() {
    document.addEventListener('click', onDocumentClick, true);
  }
  /**
   * Removes the document click event listener for the instance
   */


  function removeDocumentClickListener() {
    document.removeEventListener('click', onDocumentClick, true);
  }
  /**
   * Returns transitionable inner elements used in show/hide methods
   */


  function getTransitionableElements() {
    return [instance.popperChildren.tooltip, instance.popperChildren.backdrop, instance.popperChildren.content];
  }
  /**
   * Determines if the instance is in `followCursor` mode.
   * NOTE: in v5, touch devices will use `initial` behavior no matter the value.
   */


  function getIsInLooseFollowCursorMode() {
    var followCursor = instance.props.followCursor;
    return followCursor && lastTriggerEventType !== 'focus' || isUsingTouch && followCursor === 'initial';
  }
  /**
   * Updates the tooltip's position on each animation frame
   */


  function makeSticky() {
    setTransitionDuration([popper], isIE ? 0 : instance.props.updateDuration);
    var prevRefRect = reference.getBoundingClientRect();

    function updatePosition() {
      var currentRefRect = reference.getBoundingClientRect(); // Only schedule an update if the reference rect has changed

      if (prevRefRect.top !== currentRefRect.top || prevRefRect.right !== currentRefRect.right || prevRefRect.bottom !== currentRefRect.bottom || prevRefRect.left !== currentRefRect.left) {
        instance.popperInstance.scheduleUpdate();
      }

      prevRefRect = currentRefRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    updatePosition();
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned out
   */


  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }
  /**
   * Invokes a callback once the tooltip has fully transitioned in
   */


  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  /**
   * Invokes a callback once the tooltip's CSS transition ends
   */


  function onTransitionEnd(duration, callback) {
    var tooltip = instance.popperChildren.tooltip;
    /**
     * Listener added as the `transitionend` handler
     */

    function listener(event) {
      if (event.target === tooltip) {
        updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }
  /**
   * Adds an event listener to the reference and stores it in `listeners`
   */


  function on(eventType, handler) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    getEventListenersTarget().addEventListener(eventType, handler, options);
    listeners.push({
      eventType: eventType,
      handler: handler,
      options: options
    });
  }
  /**
   * Adds event listeners to the reference based on the `trigger` prop
   */


  function addTriggersToReference() {
    if (instance.props.touchHold && !instance.props.target) {
      on('touchstart', onTrigger, PASSIVE);
      on('touchend', onMouseLeave, PASSIVE);
    }

    instance.props.trigger.trim().split(' ').forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      } // Non-delegates


      if (!instance.props.target) {
        on(eventType, onTrigger);

        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;

          case 'focus':
            on(isIE ? 'focusout' : 'blur', onBlur);
            break;
        }
      } else {
        // Delegates
        switch (eventType) {
          case 'mouseenter':
            on('mouseover', onDelegateShow);
            on('mouseout', onDelegateHide);
            break;

          case 'focus':
            on('focusin', onDelegateShow);
            on('focusout', onDelegateHide);
            break;

          case 'click':
            on(eventType, onDelegateShow);
            break;
        }
      }
    });
  }
  /**
   * Removes event listeners from the reference
   */


  function removeTriggersFromReference() {
    listeners.forEach(function (_ref) {
      var eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      getEventListenersTarget().removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  /**
   * Positions the virtual reference near the cursor
   */


  function positionVirtualReferenceNearCursor(event) {
    var _lastMouseMoveEvent = lastMouseMoveEvent = event,
        x = _lastMouseMoveEvent.clientX,
        y = _lastMouseMoveEvent.clientY; // Gets set once popperInstance `onCreate` has been called


    if (!currentComputedPadding) {
      return;
    } // If the instance is interactive, avoid updating the position unless it's
    // over the reference element


    var isCursorOverReference = closestCallback(event.target, function (el) {
      return el === reference;
    });
    var rect = reference.getBoundingClientRect();
    var followCursor = instance.props.followCursor;
    var isHorizontal = followCursor === 'horizontal';
    var isVertical = followCursor === 'vertical'; // The virtual reference needs some size to prevent itself from overflowing

    var isVerticalPlacement = includes(['top', 'bottom'], getBasicPlacement(popper));
    var fullPlacement = popper.getAttribute(PLACEMENT_ATTRIBUTE);
    var isVariation = fullPlacement ? !!fullPlacement.split('-')[1] : false;
    var size = isVerticalPlacement ? popper.offsetWidth : popper.offsetHeight;
    var halfSize = size / 2;
    var verticalIncrease = isVerticalPlacement ? 0 : isVariation ? size : halfSize;
    var horizontalIncrease = isVerticalPlacement ? isVariation ? size : halfSize : 0;

    if (isCursorOverReference || !instance.props.interactive) {
      instance.popperInstance.reference = _extends({}, instance.popperInstance.reference, {
        // This will exist in next Popper.js feature release to fix #532
        // @ts-ignore
        referenceNode: reference,
        // These `client` values don't get used by Popper.js if they are 0
        clientWidth: 0,
        clientHeight: 0,
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            width: isVerticalPlacement ? size : 0,
            height: isVerticalPlacement ? 0 : size,
            top: (isHorizontal ? rect.top : y) - verticalIncrease,
            bottom: (isHorizontal ? rect.bottom : y) + verticalIncrease,
            left: (isVertical ? rect.left : x) - horizontalIncrease,
            right: (isVertical ? rect.right : x) + horizontalIncrease
          };
        }
      });
      instance.popperInstance.update();
    }

    if (followCursor === 'initial' && instance.state.isVisible) {
      removeFollowCursorListener();
    }
  }
  /**
   * Creates the tippy instance for a delegate when it's been triggered
   */


  function createDelegateChildTippy(event) {
    if (event) {
      var targetEl = closest(event.target, instance.props.target);

      if (targetEl && !targetEl._tippy) {
        createTippy(targetEl, _extends({}, instance.props, {
          content: invokeWithArgsOrReturn(collectionProps.content, [targetEl]),
          appendTo: collectionProps.appendTo,
          target: '',
          showOnInit: true
        }));
      }
    }
  }
  /**
   * Event listener invoked upon trigger
   */


  function onTrigger(event) {
    if (!instance.state.isEnabled || isEventListenerStopped(event)) {
      return;
    }

    if (!instance.state.isVisible) {
      lastTriggerEventType = event.type;

      if (event instanceof MouseEvent) {
        lastMouseMoveEvent = event; // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved

        mouseMoveListeners.forEach(function (listener) {
          return listener(event);
        });
      }
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && instance.props.hideOnClick !== false && instance.state.isVisible) {
      scheduleHide();
    } else {
      scheduleShow(event);
    }
  }
  /**
   * Event listener used for interactive tooltips to detect when they should
   * hide
   */


  function onMouseMove(event) {
    var isCursorOverPopper = closest(event.target, POPPER_SELECTOR) === popper;
    var isCursorOverReference = closestCallback(event.target, function (el) {
      return el === reference;
    });

    if (isCursorOverPopper || isCursorOverReference) {
      return;
    }

    if (isCursorOutsideInteractiveBorder(getBasicPlacement(popper), popper.getBoundingClientRect(), event, instance.props)) {
      cleanupInteractiveMouseListeners();
      scheduleHide();
    }
  }
  /**
   * Event listener invoked upon mouseleave
   */


  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (instance.props.interactive) {
      document.body.addEventListener('mouseleave', scheduleHide);
      document.addEventListener('mousemove', debouncedOnMouseMove);
      mouseMoveListeners.push(debouncedOnMouseMove);
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked upon blur
   */


  function onBlur(event) {
    if (event.target !== getEventListenersTarget()) {
      return;
    }

    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide();
  }
  /**
   * Event listener invoked when a child target is triggered
   */


  function onDelegateShow(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleShow(event);
    }
  }
  /**
   * Event listener invoked when a child target should hide
   */


  function onDelegateHide(event) {
    if (closest(event.target, instance.props.target)) {
      scheduleHide();
    }
  }
  /**
   * Determines if an event listener should stop further execution due to the
   * `touchHold` option
   */


  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = includes(event.type, 'touch');
    var touchHold = instance.props.touchHold;
    return supportsTouch && isUsingTouch && touchHold && !isTouchEvent || isUsingTouch && !touchHold && isTouchEvent;
  }
  /**
   * Runs the mount callback
   */


  function runMountCallback() {
    if (!hasMountCallbackRun && currentMountCallback) {
      hasMountCallbackRun = true;
      reflow(popper);
      currentMountCallback();
    }
  }
  /**
   * Creates the popper instance for the instance
   */


  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var _instance$popperChild = instance.popperChildren,
        tooltip = _instance$popperChild.tooltip,
        arrow = _instance$popperChild.arrow;
    var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');

    function applyMutations(data) {
      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        setFlipModifierEnabled(instance.popperInstance.modifiers, false);
      } // Apply all of the popper's attributes to the tootip node as well.
      // Allows users to avoid using the .tippy-popper selector for themes.


      tooltip.setAttribute(PLACEMENT_ATTRIBUTE, data.placement);

      if (data.attributes[OUT_OF_BOUNDARIES_ATTRIBUTE] !== false) {
        tooltip.setAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE, '');
      } else {
        tooltip.removeAttribute(OUT_OF_BOUNDARIES_ATTRIBUTE);
      } // Prevents a transition when changing placements (while tippy is visible)
      // for scroll/resize updates


      if (previousPlacement && previousPlacement !== data.placement && wasVisibleDuringPreviousUpdate) {
        tooltip.style.transition = 'none';
        requestAnimationFrame(function () {
          tooltip.style.transition = '';
        });
      }

      previousPlacement = data.placement;
      wasVisibleDuringPreviousUpdate = instance.state.isVisible;
      var basicPlacement = getBasicPlacement(popper);
      var styles = tooltip.style; // Account for the `distance` offset

      styles.top = styles.bottom = styles.left = styles.right = '';
      styles[basicPlacement] = getOffsetDistanceInPx(instance.props.distance);
      var padding = preventOverflowModifier && preventOverflowModifier.padding !== undefined ? preventOverflowModifier.padding : PADDING;
      var isPaddingNumber = typeof padding === 'number';

      var computedPadding = _extends({
        top: isPaddingNumber ? padding : padding.top,
        bottom: isPaddingNumber ? padding : padding.bottom,
        left: isPaddingNumber ? padding : padding.left,
        right: isPaddingNumber ? padding : padding.right
      }, !isPaddingNumber && padding);

      computedPadding[basicPlacement] = isPaddingNumber ? padding + instance.props.distance : (padding[basicPlacement] || 0) + instance.props.distance;
      instance.popperInstance.modifiers.filter(function (m) {
        return m.name === 'preventOverflow';
      })[0].padding = computedPadding;
      currentComputedPadding = computedPadding;
    }

    var config = _extends({
      eventsEnabled: false,
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
        preventOverflow: _extends({
          boundariesElement: instance.props.boundary,
          padding: PADDING
        }, preventOverflowModifier),
        arrow: _extends({
          element: arrow,
          enabled: !!arrow
        }, getModifier(popperOptions, 'arrow')),
        flip: _extends({
          enabled: instance.props.flip,
          // The tooltip is offset by 10px from the popper in CSS,
          // we need to account for its distance
          padding: instance.props.distance + PADDING,
          behavior: instance.props.flipBehavior
        }, getModifier(popperOptions, 'flip')),
        offset: _extends({
          offset: instance.props.offset
        }, getModifier(popperOptions, 'offset'))
      }),
      onCreate: function onCreate(data) {
        applyMutations(data);
        runMountCallback();

        if (popperOptions && popperOptions.onCreate) {
          popperOptions.onCreate(data);
        }
      },
      onUpdate: function onUpdate(data) {
        applyMutations(data);
        runMountCallback();

        if (popperOptions && popperOptions.onUpdate) {
          popperOptions.onUpdate(data);
        }
      }
    });

    instance.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](reference, popper, config);
  }
  /**
   * Mounts the tooltip to the DOM
   */


  function mount() {
    hasMountCallbackRun = false;
    var isInLooseFollowCursorMode = getIsInLooseFollowCursorMode();

    if (instance.popperInstance) {
      setFlipModifierEnabled(instance.popperInstance.modifiers, instance.props.flip);

      if (!isInLooseFollowCursorMode) {
        instance.popperInstance.reference = reference;
        instance.popperInstance.enableEventListeners();
      }

      instance.popperInstance.scheduleUpdate();
    } else {
      createPopperInstance();

      if (!isInLooseFollowCursorMode) {
        instance.popperInstance.enableEventListeners();
      }
    }

    var appendTo = instance.props.appendTo;
    var parentNode = appendTo === 'parent' ? reference.parentNode : invokeWithArgsOrReturn(appendTo, [reference]);

    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
      instance.props.onMount(instance);
      instance.state.isMounted = true;
    }
  }
  /**
   * Setup before show() is invoked (delays, etc.)
   */


  function scheduleShow(event, shouldAvoidCallingOnTrigger) {
    clearDelayTimeouts();

    if (instance.state.isVisible) {
      return;
    } // Is a delegate, create an instance for the child target


    if (instance.props.target) {
      return createDelegateChildTippy(event);
    }

    isScheduledToShow = true;

    if (event && !shouldAvoidCallingOnTrigger) {
      instance.props.onTrigger(instance, event);
    }

    if (instance.props.wait) {
      return instance.props.wait(instance, event);
    } // If the tooltip has a delay, we need to be listening to the mousemove as
    // soon as the trigger event is fired, so that it's in the correct position
    // upon mount.
    // Edge case: if the tooltip is still mounted, but then scheduleShow() is
    // called, it causes a jump.


    if (getIsInLooseFollowCursorMode() && !instance.state.isMounted) {
      if (!instance.popperInstance) {
        createPopperInstance();
      }

      document.addEventListener('mousemove', positionVirtualReferenceNearCursor);
    }

    addDocumentClickListener();
    var delay = getValue(instance.props.delay, 0, defaultProps.delay);

    if (delay) {
      showTimeoutId = setTimeout(function () {
        show();
      }, delay);
    } else {
      show();
    }
  }
  /**
   * Setup before hide() is invoked (delays, etc.)
   */


  function scheduleHide() {
    clearDelayTimeouts();

    if (!instance.state.isVisible) {
      removeFollowCursorListener();
      removeDocumentClickListener();
      return;
    }

    isScheduledToShow = false;
    var delay = getValue(instance.props.delay, 1, defaultProps.delay);

    if (delay) {
      hideTimeoutId = setTimeout(function () {
        if (instance.state.isVisible) {
          hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrameId = requestAnimationFrame(function () {
        hide();
      });
    }
  }
  /**
   * Listener to handle clicks on the document to determine if the
   * instance should hide
   */


  function onDocumentClick(event) {
    // Clicked on interactive popper
    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getEventListenersTarget().contains(event.target)) {
      if (isUsingTouch) {
        return;
      }

      if (instance.state.isVisible && includes(instance.props.trigger, 'click')) {
        return;
      }
    }

    if (instance.props.hideOnClick === true) {
      clearDelayTimeouts();
      hide();
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */

  /**
   * Enables the instance to allow it to show or hide
   */


  function enable() {
    instance.state.isEnabled = true;
  }
  /**
   * Disables the instance to disallow it to show or hide
   */


  function disable() {
    instance.state.isEnabled = false;
  }
  /**
   * Clears pending timeouts related to the `delay` prop if any
   */


  function clearDelayTimeouts() {
    clearTimeout(showTimeoutId);
    clearTimeout(hideTimeoutId);
    cancelAnimationFrame(scheduleHideAnimationFrameId);
  }
  /**
   * Sets new props for the instance and redraws the tooltip
   */


  function set(options) {
    // Backwards-compatible after TypeScript change
    options = options || {};
    validateOptions(options, defaultProps);
    removeTriggersFromReference();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, _extends({}, instance.props, {}, options, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = hasOwnProperty(options, 'ignoreAttributes') ? options.ignoreAttributes || false : prevProps.ignoreAttributes;
    instance.props = nextProps;
    addTriggersToReference();
    cleanupInteractiveMouseListeners();
    debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    updatePopperElement(popper, prevProps, nextProps);
    instance.popperChildren = getChildren(popper);

    if (instance.popperInstance) {
      if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return hasOwnProperty(options, prop) && options[prop] !== prevProps[prop];
      })) {
        instance.popperInstance.destroy();
        createPopperInstance();

        if (instance.state.isVisible) {
          instance.popperInstance.enableEventListeners();
        }

        if (instance.props.followCursor && lastMouseMoveEvent) {
          positionVirtualReferenceNearCursor(lastMouseMoveEvent);
        }
      } else {
        instance.popperInstance.update();
      }
    }
  }
  /**
   * Shortcut for .set({ content: newContent })
   */


  function setContent(content) {
    set({
      content: content
    });
  }
  /**
   * Shows the tooltip
   */


  function show() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 0, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled || isUsingTouch && !instance.props.touch) {
      return;
    } // Standardize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getEventListenersTarget().hasAttribute('disabled')) {
      return;
    }

    if (instance.props.onShow(instance) === false) {
      return;
    }

    addDocumentClickListener();
    popper.style.visibility = 'visible';
    instance.state.isVisible = true;

    if (instance.props.interactive) {
      getEventListenersTarget().classList.add(ACTIVE_CLASS);
    } // Prevent a transition if the popper is at the opposite placement


    var transitionableElements = getTransitionableElements();
    setTransitionDuration(transitionableElements.concat(popper), 0);

    currentMountCallback = function currentMountCallback() {
      if (!instance.state.isVisible) {
        return;
      }

      var isInLooseFollowCursorMode = getIsInLooseFollowCursorMode();

      if (isInLooseFollowCursorMode && lastMouseMoveEvent) {
        positionVirtualReferenceNearCursor(lastMouseMoveEvent);
      } else if (!isInLooseFollowCursorMode) {
        // Double update will apply correct mutations
        instance.popperInstance.update();
      }

      if (instance.popperChildren.backdrop) {
        instance.popperChildren.content.style.transitionDelay = Math.round(duration / 12) + 'ms';
      }

      if (instance.props.sticky) {
        makeSticky();
      }

      setTransitionDuration([popper], instance.props.updateDuration);
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'visible');
      onTransitionedIn(duration, function () {
        if (instance.props.aria) {
          getEventListenersTarget().setAttribute("aria-".concat(instance.props.aria), popper.id);
        }

        instance.props.onShown(instance);
        instance.state.isShown = true;
      });
    };

    mount();
  }
  /**
   * Hides the tooltip
   */


  function hide() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getValue(instance.props.duration, 1, defaultProps.duration[1]);

    if (instance.state.isDestroyed || !instance.state.isEnabled && !isBeingDestroyed) {
      return;
    }

    if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
      return;
    }

    removeDocumentClickListener();
    popper.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    wasVisibleDuringPreviousUpdate = false;

    if (instance.props.interactive) {
      getEventListenersTarget().classList.remove(ACTIVE_CLASS);
    }

    var transitionableElements = getTransitionableElements();
    setTransitionDuration(transitionableElements, duration);
    setVisibilityState(transitionableElements, 'hidden');
    onTransitionedOut(duration, function () {
      if (!isScheduledToShow) {
        removeFollowCursorListener();
      }

      if (instance.props.aria) {
        getEventListenersTarget().removeAttribute("aria-".concat(instance.props.aria));
      }

      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      popper.parentNode.removeChild(popper);
      instance.props.onHidden(instance);
      instance.state.isMounted = false;
    });
  }
  /**
   * Destroys the tooltip
   */


  function destroy(destroyTargetInstances) {
    if (instance.state.isDestroyed) {
      return;
    }

    isBeingDestroyed = true; // If the popper is currently mounted to the DOM, we want to ensure it gets
    // hidden and unmounted instantly upon destruction

    if (instance.state.isMounted) {
      hide(0);
    }

    removeTriggersFromReference();
    delete reference._tippy;
    var target = instance.props.target;

    if (target && destroyTargetInstances && isRealElement(reference)) {
      arrayFrom(reference.querySelectorAll(target)).forEach(function (child) {
        if (child._tippy) {
          child._tippy.destroy();
        }
      });
    }

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    isBeingDestroyed = false;
    instance.state.isDestroyed = true;
  }
}

/**
 * Groups an array of instances by taking control of their props during
 * certain lifecycles.
 */
function group(instances) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? instances[0].props.delay : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration;

  var isAnyTippyOpen = false;
  instances.forEach(function (instance) {
    if (instance._originalProps) {
      instance.set(instance._originalProps);
    } else {
      instance._originalProps = _extends({}, instance.props);
    }
  });

  function setIsAnyTippyOpen(value) {
    isAnyTippyOpen = value;
    updateInstances();
  }

  function onShow(instance) {
    instance._originalProps.onShow(instance);

    instances.forEach(function (instance) {
      instance.set({
        duration: duration
      });

      if (instance.state.isVisible) {
        instance.hide();
      }
    });
    setIsAnyTippyOpen(true);
  }

  function onHide(instance) {
    instance._originalProps.onHide(instance);

    setIsAnyTippyOpen(false);
  }

  function onShown(instance) {
    instance._originalProps.onShown(instance);

    instance.set({
      duration: instance._originalProps.duration
    });
  }

  function updateInstances() {
    instances.forEach(function (instance) {
      instance.set({
        onShow: onShow,
        onShown: onShown,
        onHide: onHide,
        delay: isAnyTippyOpen ? [0, Array.isArray(delay) ? delay[1] : delay] : delay,
        duration: isAnyTippyOpen ? duration : instance._originalProps.duration
      });
    });
  }

  updateInstances();
}

var globalEventListenersBound = false;
/**
 * Exported module
 */

function tippy(targets, options) {
  validateOptions(options || {}, defaultProps);

  if (!globalEventListenersBound) {
    bindGlobalEventListeners();
    globalEventListenersBound = true;
  }

  var props = _extends({}, defaultProps, {}, options); // If they are specifying a virtual positioning reference, we need to polyfill
  // some native DOM props


  if (isBareVirtualElement(targets)) {
    polyfillElementPrototypeProperties(targets);
  }

  var instances = getArrayOfElements(targets).reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, props);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isSingular(targets) ? instances[0] : instances;
}
/**
 * Static props
 */


tippy.version = version;
tippy.defaults = defaultProps;
/**
 * Static methods
 */

tippy.setDefaults = function (partialDefaults) {
  Object.keys(partialDefaults).forEach(function (key) {
    // @ts-ignore
    defaultProps[key] = partialDefaults[key];
  });
};

tippy.hideAll = hideAll;
tippy.group = group;
/**
 * Auto-init tooltips for elements with a `data-tippy="..."` attribute
 */

function autoInit() {
  arrayFrom(document.querySelectorAll('[data-tippy]')).forEach(function (el) {
    var content = el.getAttribute('data-tippy');

    if (content) {
      tippy(el, {
        content: content
      });
    }
  });
}

if (isBrowser) {
  setTimeout(autoInit);
}

/**
 * Injects a string of CSS styles to a style node in <head>
 */

function injectCSS(css) {
  if (isBrowser) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css;
    style.setAttribute('data-tippy-stylesheet', '');
    var head = document.head;
    var firstStyleOrLinkTag = head.querySelector('style,link');

    if (firstStyleOrLinkTag) {
      head.insertBefore(style, firstStyleOrLinkTag);
    } else {
      head.appendChild(style);
    }
  }
}

injectCSS(css);

/* harmony default export */ __webpack_exports__["default"] = (tippy);
//# sourceMappingURL=index.all.js.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/appbar.vue?vue&type=template&id=7b3b90fe&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/appbar.vue?vue&type=template&id=7b3b90fe& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "app-bar" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("span", { staticClass: "app-bar__title" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "app-bar__nav-toggle" }, [
      _c("i", { staticClass: "mdi mdi-menu" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/button.vue?vue&type=template&id=7788f444&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/button.vue?vue&type=template&id=7788f444& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    { staticClass: "button", class: _vm.typeClass, attrs: { href: _vm.href } },
    [
      _vm.icon
        ? _c("i", { staticClass: "mdi", class: "mdi-" + _vm.icon })
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/checkbox.vue?vue&type=template&id=4744d4ef&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/checkbox.vue?vue&type=template&id=4744d4ef& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "checkbox" }, [
    _c("input", {
      attrs: {
        id: _vm.id,
        name: _vm.name,
        type: "checkbox",
        disabled: _vm.disabled
      }
    }),
    _vm._v(" "),
    _c("label", { staticClass: "checkbox__input", attrs: { for: _vm.id } }),
    _vm._v(" "),
    _c("label", { staticClass: "checkbox__label", attrs: { for: _vm.id } }, [
      _vm._v(_vm._s(_vm.label))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/drawer.vue?vue&type=template&id=6fb53fc6&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/drawer.vue?vue&type=template&id=6fb53fc6& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "drawer drawer--temporary" }, [
    _c("div", { staticClass: "drawer__drawer" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("nav", { staticClass: "drawer__content" }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "drawer__header" }, [
      _c("span", { staticClass: "drawer__header-text" }, [
        _vm._v("Drawer header")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/layout.vue?vue&type=template&id=798cc454&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/layout.vue?vue&type=template&id=798cc454& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("fast-drawer", [_vm._t("drawer")], 2),
      _vm._v(" "),
      _c("fast-appbar", [_vm._t("appbar")], 2),
      _vm._v(" "),
      _c("fast-main", [_vm._t("main")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/main.vue?vue&type=template&id=3d25fde5&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/components/main.vue?vue&type=template&id=3d25fde5& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving the component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var project_fast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! project-fast */ "./node_modules/project-fast/src/assets/js/app.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/base */ "./src/js/components/base.vue");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button */ "./src/js/components/button.vue");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkbox */ "./src/js/components/checkbox.vue");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout */ "./src/js/components/layout.vue");
/* harmony import */ var _components_appbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/appbar */ "./src/js/components/appbar.vue");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/drawer */ "./src/js/components/drawer.vue");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main */ "./src/js/components/main.vue");








 //
// // Declare install function executed by Vue.use()
// export function
//
// // Create module definition for Vue.use()
// const plugin = {
//     install,
// };
//
// // Auto-install when vue is found (eg. in browser via <script> tag)
// let GlobalVue = null;
// if (typeof window !== 'undefined') {
//     GlobalVue = window.Vue;
// } else if (typeof global !== 'undefined') {
//     GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//     GlobalVue.use(plugin);
// }

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    // if (install.installed) return;
    // install.installed = true;
    Vue.component('fast-layout', _components_layout__WEBPACK_IMPORTED_MODULE_5__["default"]);
    Vue.component('fast-button', _components_button__WEBPACK_IMPORTED_MODULE_3__["default"]);
    Vue.component('fast-checkbox', _components_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"]);
    Vue.component('fast-appbar', _components_appbar__WEBPACK_IMPORTED_MODULE_6__["default"]);
    Vue.component('fast-drawer', _components_drawer__WEBPACK_IMPORTED_MODULE_7__["default"]);
    Vue.component('fast-main', _components_main__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }
});

/***/ }),

/***/ "./src/js/components/appbar.vue":
/*!**************************************!*\
  !*** ./src/js/components/appbar.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appbar_vue_vue_type_template_id_7b3b90fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appbar.vue?vue&type=template&id=7b3b90fe& */ "./src/js/components/appbar.vue?vue&type=template&id=7b3b90fe&");
/* harmony import */ var _appbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appbar.vue?vue&type=script&lang=js& */ "./src/js/components/appbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _appbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _appbar_vue_vue_type_template_id_7b3b90fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _appbar_vue_vue_type_template_id_7b3b90fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/appbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/appbar.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/js/components/appbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./appbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/appbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/appbar.vue?vue&type=template&id=7b3b90fe&":
/*!*********************************************************************!*\
  !*** ./src/js/components/appbar.vue?vue&type=template&id=7b3b90fe& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appbar_vue_vue_type_template_id_7b3b90fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./appbar.vue?vue&type=template&id=7b3b90fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/appbar.vue?vue&type=template&id=7b3b90fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appbar_vue_vue_type_template_id_7b3b90fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appbar_vue_vue_type_template_id_7b3b90fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/base.vue":
/*!************************************!*\
  !*** ./src/js/components/base.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.vue?vue&type=script&lang=js& */ "./src/js/components/base.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/base.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/base.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/js/components/base.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./base.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/base.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/button.vue":
/*!**************************************!*\
  !*** ./src/js/components/button.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_vue_vue_type_template_id_7788f444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.vue?vue&type=template&id=7788f444& */ "./src/js/components/button.vue?vue&type=template&id=7788f444&");
/* harmony import */ var _button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.vue?vue&type=script&lang=js& */ "./src/js/components/button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _button_vue_vue_type_template_id_7788f444___WEBPACK_IMPORTED_MODULE_0__["render"],
  _button_vue_vue_type_template_id_7788f444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/button.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/js/components/button.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/button.vue?vue&type=template&id=7788f444&":
/*!*********************************************************************!*\
  !*** ./src/js/components/button.vue?vue&type=template&id=7788f444& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_7788f444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./button.vue?vue&type=template&id=7788f444& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/button.vue?vue&type=template&id=7788f444&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_7788f444___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_7788f444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/checkbox.vue":
/*!****************************************!*\
  !*** ./src/js/components/checkbox.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_vue_vue_type_template_id_4744d4ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.vue?vue&type=template&id=4744d4ef& */ "./src/js/components/checkbox.vue?vue&type=template&id=4744d4ef&");
/* harmony import */ var _checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.vue?vue&type=script&lang=js& */ "./src/js/components/checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkbox_vue_vue_type_template_id_4744d4ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkbox_vue_vue_type_template_id_4744d4ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/checkbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/js/components/checkbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./checkbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/checkbox.vue?vue&type=template&id=4744d4ef&":
/*!***********************************************************************!*\
  !*** ./src/js/components/checkbox.vue?vue&type=template&id=4744d4ef& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_template_id_4744d4ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./checkbox.vue?vue&type=template&id=4744d4ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/checkbox.vue?vue&type=template&id=4744d4ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_template_id_4744d4ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_template_id_4744d4ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/drawer.vue":
/*!**************************************!*\
  !*** ./src/js/components/drawer.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer_vue_vue_type_template_id_6fb53fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.vue?vue&type=template&id=6fb53fc6& */ "./src/js/components/drawer.vue?vue&type=template&id=6fb53fc6&");
/* harmony import */ var _drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.vue?vue&type=script&lang=js& */ "./src/js/components/drawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _drawer_vue_vue_type_template_id_6fb53fc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _drawer_vue_vue_type_template_id_6fb53fc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/drawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/drawer.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/js/components/drawer.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./drawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/drawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/drawer.vue?vue&type=template&id=6fb53fc6&":
/*!*********************************************************************!*\
  !*** ./src/js/components/drawer.vue?vue&type=template&id=6fb53fc6& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_template_id_6fb53fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./drawer.vue?vue&type=template&id=6fb53fc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/drawer.vue?vue&type=template&id=6fb53fc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_template_id_6fb53fc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_template_id_6fb53fc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/layout.vue":
/*!**************************************!*\
  !*** ./src/js/components/layout.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_798cc454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=798cc454& */ "./src/js/components/layout.vue?vue&type=template&id=798cc454&");
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ "./src/js/components/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_798cc454___WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_798cc454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/layout.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/js/components/layout.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/layout.vue?vue&type=template&id=798cc454&":
/*!*********************************************************************!*\
  !*** ./src/js/components/layout.vue?vue&type=template&id=798cc454& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_798cc454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=798cc454& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/layout.vue?vue&type=template&id=798cc454&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_798cc454___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_798cc454___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/components/main.vue":
/*!************************************!*\
  !*** ./src/js/components/main.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_3d25fde5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=3d25fde5& */ "./src/js/components/main.vue?vue&type=template&id=3d25fde5&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/js/components/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_3d25fde5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_3d25fde5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/components/main.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/js/components/main.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/main.vue?vue&type=template&id=3d25fde5&":
/*!*******************************************************************!*\
  !*** ./src/js/components/main.vue?vue&type=template&id=3d25fde5& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3d25fde5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=3d25fde5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/components/main.vue?vue&type=template&id=3d25fde5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3d25fde5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3d25fde5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/scss/components/appbar.scss":
/*!*****************************************!*\
  !*** ./src/scss/components/appbar.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./appbar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/appbar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/components/base.scss":
/*!***************************************!*\
  !*** ./src/scss/components/base.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./base.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/components/button.scss":
/*!*****************************************!*\
  !*** ./src/scss/components/button.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./button.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/button.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/components/checkbox.scss":
/*!*******************************************!*\
  !*** ./src/scss/components/checkbox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./checkbox.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/checkbox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/components/drawer.scss":
/*!*****************************************!*\
  !*** ./src/scss/components/drawer.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./drawer.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/drawer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/components/main.scss":
/*!***************************************!*\
  !*** ./src/scss/components/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/scss/components/mdi.scss":
/*!**************************************!*\
  !*** ./src/scss/components/mdi.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./mdi.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/components/mdi.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sites\vast.js\src\js\app.js */"./src/js/app.js");


/***/ })

/******/ });