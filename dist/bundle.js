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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "dist/img/about-man.svg";

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_scroll_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_scroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_scroll_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_slider_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_main_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_main_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_main_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_map_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_map_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_map_js__);







/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/resolve-url-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../node_modules/sass-loader/lib/loader.js??ref--1-4!./main.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/resolve-url-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../node_modules/sass-loader/lib/loader.js??ref--1-4!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700);", ""]);

// module
exports.push([module.i, "@font-face {\n  font-family: Proxima Nova;\n  src: url(" + __webpack_require__(5) + ") format(\"woff2\"),url(" + __webpack_require__(6) + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: Proxima Nova;\n  src: url(" + __webpack_require__(7) + ") format(\"woff2\"),url(" + __webpack_require__(8) + ") format(\"woff\"),url(" + __webpack_require__(9) + ") format(\"truetype\");\n  font-weight: 800;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: #ebebeb;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1200px;\n  padding: 0 15px;\n  margin: 0 auto;\n}\n\n.header {\n  height: 100vh;\n  background: url(" + __webpack_require__(10) + ") no-repeat 50% 50%;\n  background-size: cover;\n  color: #fff;\n  font-family: Proxima Nova,sans-serif;\n  font-weight: 600;\n}\n\n.header .nav {\n  position: relative;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-top: 30px;\n}\n\n.header .nav,\n.header .nav__menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.header .nav__menu {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n@media screen and (max-width:1024px) {\n  .header .nav__menu {\n    display: none;\n  }\n}\n\n.header .nav__menu.is-active {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 120px;\n}\n\n.header .nav__menu.is-active li {\n  margin: 0;\n  font-size: 20px;\n}\n\n.header .nav__item {\n  text-transform: uppercase;\n}\n\n.header .nav__item:not(:first-child) {\n  margin-left: 35px;\n}\n\n.header .nav__link {\n  color: #fff;\n}\n\n.header .nav__icon {\n  display: none;\n}\n\n@media screen and (max-width:1024px) {\n  .header .nav__icon {\n    position: absolute;\n    top: 55px;\n    right: 0;\n    display: inline-block;\n    border: 0;\n    color: #fff;\n    font-size: 30px;\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    outline: none;\n  }\n}\n\n.header .nav__icon .line {\n  width: 40px;\n  height: 5px;\n  border-radius: 2px;\n  background-color: #fff;\n  display: block;\n  margin: 8px auto;\n  transition: all .3s ease-in-out;\n}\n\n.header .nav__icon.is-active .line:first-child {\n  -webkit-transform: translateY(13px) rotate(45deg);\n  transform: translateY(13px) rotate(45deg);\n}\n\n.header .nav__icon.is-active .line:nth-child(2) {\n  opacity: 0;\n}\n\n.header .nav__icon.is-active .line:nth-child(3) {\n  -webkit-transform: translateY(-13px) rotate(-45deg);\n  transform: translateY(-13px) rotate(-45deg);\n}\n\n.header__title {\n  padding-top: 330px;\n  margin: 0;\n  font-size: 72px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n@media screen and (max-width:1024px) {\n  .header__title {\n    font-size: 40px;\n    padding-top: 200px;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .header__title {\n    font-size: 30px;\n  }\n}\n\n.header__text {\n  padding-top: 30px;\n  margin: 0 auto;\n  font-family: PT Sans,sans-serif;\n  font-size: 30px;\n  font-weight: 400;\n  font-style: italic;\n  text-align: center;\n  color: #fefdfd;\n}\n\n@media screen and (max-width:767px) {\n  .header__text {\n    font-size: 20px;\n  }\n}\n\n.nav__icon.is-active .line:nth-child(2) {\n  opacity: 0;\n}\n\n.nav__icon.is-active .line:first-child {\n  -webkit-transform: translateY(13px) rotate(45deg);\n  transform: translateY(13px) rotate(45deg);\n}\n\n.nav__icon.is-active .line:nth-child(3) {\n  -webkit-transform: translateY(-13px) rotate(-45deg);\n  transform: translateY(-13px) rotate(-45deg);\n}\n\n.about {\n  padding: 125px 0;\n  font-family: PT Sans,sans-serif;\n  font-size: 20px;\n  color: #665f60;\n  outline: none;\n}\n\n.about__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n@media screen and (max-width:1024px) {\n  .about__container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n}\n\n.about__info {\n  width: 54%;\n}\n\n@media screen and (max-width:1024px) {\n  .about__info {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    width: 100%;\n  }\n}\n\n.about__img {\n  position: relative;\n  width: 380px;\n  height: 555px;\n  padding-top: 175px;\n  background: url(" + __webpack_require__(11) + ") no-repeat 50% 50%;\n  background-size: cover;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fefbfc;\n}\n\n.about__img:before {\n  content: \"\";\n  position: absolute;\n  top: 75px;\n  left: 50%;\n  display: block;\n  -webkit-mask: url(" + __webpack_require__(0) + ") no-repeat 50% 50%;\n  mask: url(" + __webpack_require__(0) + ") no-repeat 50% 50%;\n  background-color: #fff;\n  width: 51px;\n  height: 54px;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n@media screen and (max-width:1024px) {\n  .about__img {\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n    -ms-flex-item-align: start;\n    align-self: flex-start;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .about__img {\n    width: 100%;\n  }\n}\n\n.about__text:first-child {\n  margin: 0;\n}\n\n.about__text-hero {\n  font-weight: 700;\n}\n\n.about__button,\n.about__text-info {\n  font-style: italic;\n}\n\n.about__button {\n  display: block;\n  width: 195px;\n  height: 50px;\n  border: 1px solid #7d7a7c;\n  margin: 95px 0 0 225px;\n  color: #7d7a7c;\n  line-height: 50px;\n  text-align: center;\n}\n\n@media screen and (max-width:1024px) {\n  .about__button {\n    margin: 20px 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .about__button {\n    margin: 20px auto;\n  }\n}\n\n.services {\n  outline: none;\n}\n\n.services__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media screen and (max-width:767px) {\n  .services__container {\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n}\n\n.services__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n  width: 65%;\n  list-style: none;\n}\n\n@media screen and (max-width:1024px) {\n  .services__list {\n    width: 50%;\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .services__list {\n    width: 100%;\n  }\n}\n\n.services__item {\n  position: relative;\n  width: 50%;\n  height: 400px;\n  padding-top: 100px;\n  font-family: PT Sans,sans-serif;\n  color: #665f60;\n  text-align: center;\n}\n\n.services__item-img {\n  width: 50px;\n  height: 54px;\n  fill: #665f60;\n}\n\n.services__item:nth-child(3n+1) {\n  background: #dbdbdb;\n}\n\n.services__item-title {\n  padding-top: 30px;\n  margin: 0;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.services__item-text {\n  max-width: 195px;\n  padding-top: 20px;\n  margin: 0 auto;\n  font-size: 18px;\n  font-style: italic;\n}\n\n@media screen and (max-width:1024px) {\n  .services__item {\n    width: 100%;\n  }\n\n  .services__item:nth-child(3) {\n    background: #dbdbdb;\n  }\n\n  .services__item:nth-child(4) {\n    background: transparent;\n  }\n}\n\n.services__info {\n  width: 35%;\n  padding-top: 115px;\n  background: url(" + __webpack_require__(12) + ") no-repeat 50% 50%;\n  background-size: cover;\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  color: #fefcfd;\n  text-align: center;\n}\n\n.services__info-img {\n  width: 62px;\n  height: 60px;\n  fill: #fff;\n}\n\n.services__info-title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.services__info-text {\n  padding-top: 120px;\n  margin: 0 30px;\n  font-style: italic;\n}\n\n.services__info-author {\n  margin: 0;\n  font-weight: 700;\n}\n\n@media screen and (max-width:1024px) {\n  .services__info {\n    width: 50%;\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .services__info {\n    width: 100%;\n    height: 800px;\n  }\n}\n\n.works {\n  background: url(" + __webpack_require__(20) + ") no-repeat 50% 50%;\n  background-size: cover;\n  outline: none;\n}\n\n.works__container {\n  padding: 40px 0;\n}\n\n.works__icon {\n  display: block;\n  margin: 0 auto;\n  width: 40px;\n  height: 60px;\n  fill: #fff;\n}\n\n.works__title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  color: #fefcfd;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.works__hero {\n  position: relative;\n  padding-bottom: 50px;\n}\n\n.works__slider {\n  max-width: 730px;\n  padding-top: 75px;\n  margin: 0 auto;\n}\n\n.works__slider button[class^=ion-ios-circle] {\n  position: absolute;\n  bottom: 0;\n  color: #ebebeb;\n}\n\n.works__slider button[class^=ion-ios-circle]:nth-of-type(3) {\n  left: calc(50% - 30px);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.works__slider button[class^=ion-ios-circle]:nth-of-type(4) {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.works__slider button[class^=ion-ios-circle]:nth-of-type(5) {\n  left: calc(50% + 30px);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.works__slider button[class^=ion-ios-arrow] {\n  position: absolute;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-size: 60px;\n  color: #fff;\n}\n\n@media screen and (max-width:1024px) {\n  .works__slider button[class^=ion-ios-arrow] {\n    display: none;\n  }\n}\n\n.works__slider button[class^=ion-ios-arrow]:first-of-type {\n  left: 15px;\n  top: 50%;\n}\n\n.works__slider button[class^=ion-ios-arrow]:nth-of-type(2) {\n  right: 15px;\n  top: 50%;\n}\n\n.works__slider button[class^=ion-ios-circle] {\n  border: none;\n  background: transparent;\n}\n\n@media screen and (max-width:1024px) {\n  .works__slider-img {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width:1024px) {\n  .works__slider {\n    width: 100%;\n    text-align: center;\n  }\n}\n\n.works__button {\n  display: block;\n  width: 195px;\n  height: 50px;\n  border: 1px solid #7d7a7c;\n  margin: 95px 0 0 225px;\n  color: #7d7a7c;\n  font-style: italic;\n  line-height: 50px;\n  text-align: center;\n  margin: 50px auto 0;\n  color: #fff;\n  border-color: #fff;\n}\n\n@media screen and (max-width:1024px) {\n  .works__button {\n    margin: 20px 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .works__button {\n    margin: 20px auto;\n  }\n}\n\n@media screen and (max-width:1024px) {\n  .works__button {\n    margin: 50px auto 0;\n  }\n}\n\n.team {\n  padding-top: 40px;\n}\n\n.team__icon {\n  display: block;\n  margin: 0 auto;\n  width: 60px;\n  height: 60px;\n  fill: #665f60;\n}\n\n.team__title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  color: #fefcfd;\n  text-align: center;\n  text-transform: uppercase;\n  color: #665f60;\n}\n\n.team__hero {\n  position: relative;\n  margin: 70px 0 100px;\n}\n\n.team__slider {\n  padding-top: 120px;\n  width: 100%;\n  margin: 0 auto;\n  max-width: 1080px;\n}\n\n.team__slider button[class^=ion-ios-arrow] {\n  position: absolute;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-size: 60px;\n  color: #665f60;\n}\n\n@media screen and (max-width:1024px) {\n  .team__slider button[class^=ion-ios-arrow] {\n    display: none;\n  }\n}\n\n.team__slider button[class^=ion-ios-arrow]:first-of-type {\n  left: 15px;\n  top: 50%;\n}\n\n.team__slider button[class^=ion-ios-arrow]:nth-of-type(2) {\n  right: 15px;\n  top: 50%;\n}\n\n.team__slide {\n  position: relative;\n  width: 350px;\n  margin: 0 auto;\n  background: #fff;\n  text-align: center;\n}\n\n@media screen and (max-width:767px) {\n  .team__slide {\n    width: 100%;\n  }\n}\n\n.team__slide-header {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n  transform: translate(-50%,-50%);\n}\n\n.team__slide-main {\n  height: 300px;\n}\n\n.team__slide-main-name {\n  padding-top: 165px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 24px;\n  font-weight: 800;\n  color: #9f9acf;\n  text-transform: uppercase;\n}\n\n.team__slide-main-position {\n  padding-top: 35px;\n  margin: 0;\n  font-family: PT Sans,sans-serif;\n  font-size: 24px;\n  font-style: italic;\n  color: #665f60;\n}\n\n.team__slide-footer {\n  height: 70px;\n  background: #9f9acf;\n}\n\n.team__slide-footer-social {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.team__slide-footer-social-item {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #ebebeb;\n  line-height: 32px;\n}\n\n.team__slide-footer-social-item i {\n  color: #9f9acf;\n}\n\n.team__slide-footer-social-item:not(:first-child) {\n  margin-left: 12px;\n}\n\n.contact {\n  position: relative;\n  padding-top: 40px;\n  background: rgba(159,154,207,.5);\n  overflow: hidden;\n}\n\n.contact__container {\n  text-align: center;\n}\n\n.contact__map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 900px;\n  width: 100%;\n  z-index: -1;\n}\n\n.contact__icon {\n  display: block;\n  margin: 0 auto;\n  width: 42px;\n  height: 60px;\n  fill: #fff;\n}\n\n.contact__title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  color: #fefcfd;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.contact__address {\n  position: absolute;\n  right: 0;\n  top: 220px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 350px;\n  background: hsla(0,0%,92%,.5);\n  text-align: center;\n  -webkit-transform: translateX(calc(100% - 91px));\n  transform: translateX(calc(100% - 91px));\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease,-webkit-transform .3s ease;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__address {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.contact__address-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 91px;\n  height: 91px;\n  background: #9f9acf;\n}\n\n.contact__address-icon--home {\n  width: 38px;\n  height: 36px;\n  fill: #fff;\n}\n\n.contact__address-text {\n  -ms-flex-item-align: center;\n  -ms-grid-row-align: center;\n  align-self: center;\n  width: calc(100% - 91px);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  text-align: center;\n  color: #665f60;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__address {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    left: 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .contact__address {\n    width: 100%;\n  }\n}\n\n.contact__address:hover {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.contact__phone {\n  position: absolute;\n  right: 0;\n  top: 311px;\n  width: 350px;\n  background: hsla(0,0%,92%,.5);\n  text-align: center;\n  -webkit-transform: translateX(calc(100% - 91px));\n  transform: translateX(calc(100% - 91px));\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease,-webkit-transform .3s ease;\n}\n\n.contact__phone,\n.contact__phone-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.contact__phone-icon {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 91px;\n  height: 91px;\n  background: #9f9acf;\n}\n\n.contact__phone-icon--home {\n  width: 38px;\n  height: 36px;\n  fill: #fff;\n}\n\n.contact__phone-text {\n  -ms-flex-item-align: center;\n  -ms-grid-row-align: center;\n  align-self: center;\n  width: calc(100% - 91px);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  text-align: center;\n  color: #665f60;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__phone {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    left: 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .contact__phone {\n    width: 100%;\n  }\n}\n\n.contact__phone:hover {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.contact__form {\n  max-width: 860px;\n  padding-top: 270px;\n  margin: 0 auto;\n}\n\n.contact__form-input {\n  width: 40%;\n  height: 56px;\n  padding: 0 27px;\n  border: none;\n  border-radius: 4px;\n  background: hsla(0,0%,92%,.5);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  font-style: italic;\n  color: #fff;\n  line-height: 56px;\n  outline: none;\n}\n\n@media screen and (max-width:767px) {\n  .contact__form-input {\n    margin-top: 25px;\n    width: 100%;\n  }\n}\n\n.contact__form-input::-webkit-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-input:-ms-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-input::placeholder {\n  color: #fff;\n}\n\n.contact__form-message {\n  width: 100%;\n  height: 200px;\n  padding: 0 27px;\n  margin-top: 25px;\n  border: none;\n  border-radius: 4px;\n  background: hsla(0,0%,92%,.5);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  font-style: italic;\n  color: #fff;\n  line-height: 56px;\n  outline: none;\n}\n\n.contact__form-message::-webkit-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-message:-ms-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-message::placeholder {\n  color: #fff;\n}\n\n.contact__info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.contact__button {\n  width: 293px;\n  height: 70px;\n  margin: 55px auto;\n  border: 0;\n  border-radius: 4px;\n  border-bottom: 4px solid rgba(255,0,0,.15);\n  background-color: #9f9acf;\n  outline: none;\n  cursor: pointer;\n}\n\n.contact__button:hover {\n  background: #dbdbdb;\n}\n\n.contact__button-text {\n  font-family: Proxima Nova,sans-serif;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 70px;\n  letter-spacing: .4px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.contact__top {\n  position: absolute;\n  right: 0;\n  bottom: 150px;\n  display: block;\n  width: 84px;\n  height: 84px;\n  opacity: .5;\n  background: rgba(159,154,207,.5);\n  font-size: 50px;\n  color: #fff;\n  line-height: 84px;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__top {\n    display: none;\n  }\n}\n\n.footer {\n  background: #9f9acf;\n}\n\n.footer__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 185px;\n}\n\n@media screen and (max-width:1024px) {\n  .footer__container {\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n}\n\n.footer__text {\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  letter-spacing: .4px;\n  color: #fff;\n}\n\n.footer__text--hero {\n  font-weight: 800;\n}\n\n.footer__social {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@media screen and (max-width:1024px) {\n  .footer__social {\n    margin: 0 20px;\n  }\n}\n\n.footer__social a {\n  display: block;\n  text-align: center;\n  color: #9f9acf;\n}\n\n.footer__social-item {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #ebebeb;\n  line-height: 32px;\n}\n\n.footer__social-item:not(:first-child) {\n  margin-left: 12px;\n}\n\n", "", {"version":3,"sources":["C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/common/fonts.scss","C:/home/exams/exam-3/exam3/src/scss/main.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/common/common.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/sections/header.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/common/variables.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/helpers/media-queries.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/sections/about.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/sections/services.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/sections/works.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/common/mixins.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/sections/team.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/sections/contact.scss","C:/home/exams/exam-3/exam3/src/scss/C:/home/exams/exam-3/exam3/src/scss/sections/footer.scss"],"names":[],"mappings":"AAeY;EAdR,0BAAA;EACA,oGAAA;EACgE,iBAAA;EAChD,mBAAA;CCGnB;;ADFqB;EAGlB,0BAAA;EAA2B,iJAAA;EAI3B,iBAAA;EAAgB,mBAAA;CCEnB;;ACdD;EACE,uBAAA;CDiBD;;ACdD;EACE,UAAA;EACA,oBAAA;CDiBD;;ACdD;EACE,sBAAA;CDiBD;;AChBA;EAEC,kBAAA;EAAiB,gBAAA;EAEjB,eAAA;CDkBD;;AEjCD;EACE,cAAA;EAAa,4DAAA;EAC2C,uBAAA;EAExD,YAAA;ECHqB,qCAAA;EDIkB,iBAAA;CFqCxC;;AE1CD;EASI,mBAAA;EAAkB,0BAAA;EAGC,uBAAA;EAAnB,oBAAA;EAAmB,kBAAA;CFsCtB;;AElDD;;EAUI,qBAAA;EAAA,qBAAA;EAAa,cAAA;EAAA,0BAAA;EACb,uBAAA;EAA8B,+BAAA;CFiDjC;;AEtBI;EAlBC,WAAA;EACA,UAAA;EAAS,iBAAA;CF6Cd;;AIrCA;EF7BD;IAwBQ,cAAA;GF+CL;CACF;;AExED;EA4BQ,eAAA;EAAc,mBAAA;EAEd,SAAA;EAAQ,WAAA;CFiDf;;AE/ED;EAkCU,UAAA;EAAS,gBAAA;CFkDlB;;AEpFD;EAyCM,0BAAA;CF+CL;;AE1CI;EAFG,kBAAA;CFgDP;;AE5FD;EAiDM,YAAA;CF+CL;;AEhGD;EAqDM,cAAA;CF+CL;;AEXI;EAzFL;IAuDQ,mBAAA;IAAkB,UAAA;IAElB,SAAA;IAAQ,sBAAA;IACa,UAAA;IAErB,YAAA;IACA,gBAAA;IACA,wBAAA;IAAuB,sBAAA;IACF,gBAAA;IAErB,cAAA;GFkDL;CACF;;AEpHD;EAqEQ,YAAA;EAAW,YAAA;EAEX,mBAAA;EAAkB,uBAAA;ECtEH,eAAA;EDyEf,iBAAA;EAAgB,gCAAA;CFoDvB;;AE9HD;EA+EQ,kDAAA;EAAA,0CAAA;CFoDP;;AEnID;EAmFQ,WAAA;CFoDP;;AEnDM;EAGC,oDAAA;EAA2C,4CAAA;CFqDlD;;AEhDC;EACE,mBAAA;EACA,UAAA;EACA,gBAAA;EACA,iBAAA;EAAgB,0BAAA;EACS,mBAAA;CFoD5B;;AIxHA;EF+DC;IAQI,gBAAA;IAAe,mBAAA;GFuDlB;CACF;;AElDE;EAdD;IAYI,gBAAA;GFyDH;CACF;;AEtDC;EACE,kBAAA;EACA,eAAA;EAAc,gCAAA;EACoB,gBAAA;EAElC,iBAAA;EAAgB,mBAAA;EACE,mBAAA;EAElB,eAAA;CFyDH;;AErDE;EAZD;IAUI,gBAAA;GF4DH;CACF;;AExDD;EACE,WAAA;CF2DD;;AExDD;EACE,kDAAA;EAAyC,0CAAA;CF4D1C;;AEzDD;EACE,oDAAA;EAA2C,4CAAA;CF6D5C;;AE5DA;EGpIC,iBAAA;EACA,gCAAA;EAAkC,gBAAA;EACnB,eAAA;EAEf,cAAA;CLoMD;;AKhHA;EAjFG,qBAAA;EAAa,qBAAA;EAAb,cAAA;EAAa,0BAAA;EACiB,uBAAA;EAA9B,+BAAA;CLyMH;;AIrLA;ECtBC;IAII,6BAAA;IAAsB,8BAAA;IAAtB,2BAAA;IAAA,uBAAA;GL+MH;CACF;;AK9ME;EAGC,WAAA;CL+MH;;AIlMA;ECdC;IAGI,6BAAA;IAAQ,kBAAA;IAAR,SAAA;IAAQ,2BAAA;IACY,wBAAA;IAApB,qBAAA;IAAoB,YAAA;GLuNvB;CACF;;AKrNE;EAGC,mBAAA;EAAkB,aAAA;EACN,cAAA;EAEZ,mBAAA;EAAkB,4DAAA;EACkC,uBAAA;EAEpD,qCAAA;EAAuC,gBAAA;EACxB,mBAAA;EAEf,0BAAA;EAAyB,eAAA;CLuN5B;;AKjME;EAlBG,YAAA;EAAW,mBAAA;EAEX,UAAA;EAAS,UAAA;EACA,eAAA;EAET,8DAAA;EAAA,sDAAA;EAAkD,uBAAA;EAElD,YAAA;EAAW,aAAA;EACC,oCAAA;EACe,4BAAA;CLyNhC;;AKxNI;EAxBH;IA0BI,6BAAA;IAAA,kBAAA;IAAQ,SAAA;IAAA,2BAAA;IACR,uBAAA;GL8NH;CACF;;AI/OA;ECXC;IA8BI,YAAA;GLiOH;CACF;;AKhOE;EAIG,UAAA;CLgOL;;AK/NI;EAGC,iBAAA;CLgOL;;AKxNC;;EAJI,mBAAA;CLiOL;;AK7NC;EACE,eAAA;EAAc,aAAA;EAEd,aAAA;EAAY,0BAAA;EFpEO,uBAAA;EEuEnB,eAAA;EFvEmB,kBAAA;EEyEF,mBAAA;CLgOpB;;AInRA;EC2CC;IAWI,eAAA;GLkOH;CACF;;AInRA;ECqCC;IAcI,kBAAA;GLqOH;CACF;;AKpOE;ECvFD,cAAA;CN+TD;;AM7TC;EACE,qBAAA;EAAA,qBAAA;EAAA,cAAA;CNkUH;;AM9TE;EALD;IAGI,oBAAA;IAAA,gBAAA;GNsUH;CACF;;AMrUE;EAGC,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,oBAAA;EAAA,gBAAA;EAAe,WAAA;EAEf,UAAA;EAAS,WAAA;EACC,iBAAA;CN0Ub;;AI5TA;EEnBC;IAQI,WAAA;IAAU,6BAAA;IACV,kBAAA;IAAQ,SAAA;GN8UX;CACF;;AI/TA;EEzBC;IAYI,YAAA;GNiVH;CACF;;AMhVE;EAGC,mBAAA;EACA,WAAA;EAAU,cAAA;EACG,mBAAA;EAEb,gCAAA;EAAkC,eAAA;EHvBf,mBAAA;CH0WtB;;AM/UG;EACE,YAAA;EAAW,aAAA;EAEX,cAAA;CNkVL;;AMjVI;EAGC,oBAAA;CNkVL;;AMjVI;EAGC,kBAAA;EAAiB,UAAA;EAEjB,iBAAA;EAAgB,0BAAA;CNmVrB;;AMjVI;EAGC,iBAAA;EAAgB,kBAAA;EACC,eAAA;EAEjB,gBAAA;EAAe,mBAAA;CNmVpB;;AMjVI;EAhCH;IAkCI,YAAA;GNoVH;;EM1UA;IAPK,oBAAA;GNqVL;;EM1XD;IAyCM,wBAAA;GNqVL;CACF;;AMjVC;EACE,WAAA;EACA,mBAAA;EAAkB,4DAAA;EACoC,uBAAA;EAEtD,gCAAA;EAAkC,gBAAA;EACnB,eAAA;EAEf,mBAAA;CNoVH;;AMjTE;EAhCG,YAAA;EACA,aAAA;EAAY,WAAA;CNsVjB;;AMpVI;EAGC,kBAAA;EAAiB,UAAA;EACR,qCAAA;EAET,gBAAA;EACA,iBAAA;EACA,0BAAA;CNqVL;;AMlVG;EACE,mBAAA;EACA,eAAA;EAAc,mBAAA;CNsVnB;;AMpVI;EAGC,UAAA;EAAS,iBAAA;CNsVd;;AIjaA;EE2CC;IAoCI,WAAA;IACA,6BAAA;IAAA,kBAAA;IAAA,SAAA;GNyVH;CACF;;AIpaA;EEqCC;IAwCI,YAAA;IACA,cAAA;GN4VH;CACF;;AM3VE;EClHD,6DAAA;EAAuD,uBAAA;EAEvD,cAAA;CPidD;;AOhXA;EA9FG,gBAAA;CPkdH;;AO/cC;EACE,eAAA;EACA,eAAA;EAAc,YAAA;EACH,aAAA;EAEX,WAAA;CPkdH;;AO/cC;ECEA,kBAAA;EACA,UAAA;EAAS,qCAAA;EAC8B,gBAAA;EAEvC,iBAAA;EAAgB,eAAA;EAEhB,mBAAA;EACA,0BAAA;CRidD;;AOtdC;EACE,mBAAA;EACA,qBAAA;CPydH;;AOtdC;EACE,iBAAA;EACA,kBAAA;EAAiB,eAAA;CP0dpB;;AO5dC;EAMI,mBAAA;EACA,UAAA;EACA,eAAA;CP0dL;;AO1cI;EAbG,uBAAA;EACA,oCAAA;EAAA,4BAAA;CP4dP;;AOxeC;EAgBM,UAAA;EAAS,oCAAA;EACT,4BAAA;CP6dP;;AO9eC;EAqBM,uBAAA;EAAsB,oCAAA;EACK,4BAAA;CP8dlC;;AO7dM;EAID,mBAAA;EACA,WAAA;EAAU,aAAA;EACE,wBAAA;EAEZ,gBAAA;EAAe,YAAA;CP8dpB;;AI1fA;EGHC;IAkCM,cAAA;GPgeL;CACF;;AOrdI;EARG,WAAA;EAAU,SAAA;CPkejB;;AOxgBC;EA2CM,YAAA;EAAW,SAAA;CPkelB;;AO7gBC;EAiDI,aAAA;EAAY,wBAAA;CPiejB;;AI/gBA;EGkDG;IAEI,YAAA;GPgeL;CACF;;AIrhBA;EGHC;IA2DI,YAAA;IAAW,mBAAA;GPmed;CACF;;AO/dC;ECzFA,eAAA;EACA,aAAA;EAAY,aAAA;EACA,0BAAA;ELIS,uBAAA;EKFC,eAAA;EAEtB,mBAAA;EACA,kBAAA;EACA,mBAAA;EDoFE,oBAAA;EAAmB,YAAA;EJ5FA,mBAAA;CHukBtB;;AI3iBA;EG6DC;IC/EE,eAAA;GRkkBD;CACF;;AI3iBA;EGuDC;IC5EE,kBAAA;GRqkBD;CACF;;AIvjBA;EG6DC;IAOI,oBAAA;GPwfH;CACF;;AS1lBD;EACE,kBAAA;CT6lBD;;AS3lBC;EACE,eAAA;EAAc,eAAA;EACA,YAAA;EAEd,aAAA;EAAY,cAAA;CT+lBf;;AS7lBE;EDUD,kBAAA;EAAiB,UAAA;EACR,qCAAA;EAC8B,gBAAA;EACxB,iBAAA;EAEf,eAAA;EACA,mBAAA;EAAkB,0BAAA;ECZhB,eAAA;CTqmBH;;ASlmBC;EACE,mBAAA;EACA,qBAAA;CTqmBH;;ASlmBC;EACE,mBAAA;EACA,YAAA;EAAW,eAAA;EACG,kBAAA;CTsmBjB;;ASzmBC;EAOI,mBAAA;EAAkB,WAAA;EAElB,aAAA;EAAY,wBAAA;EACW,gBAAA;EAEvB,eAAA;CTsmBL;;ASxlBI;EA1BH;IAcM,cAAA;GTymBL;CACF;;ASxnBC;EAkBM,WAAA;EAAU,SAAA;CT2mBjB;;AS7nBC;EAuBM,YAAA;EAAW,SAAA;CT2mBlB;;ASzmBM;EAKH,mBAAA;EAAkB,aAAA;EACN,eAAA;EAEZ,iBAAA;ENrDmB,mBAAA;CH8pBtB;;AI5nBA;EKeC;IAOI,YAAA;GT2mBH;CACF;;ASzmBG;EACE,mBAAA;EAAkB,OAAA;EACZ,UAAA;EAEN,wCAAA;EAAA,gCAAA;CT6mBL;;AS5mBI;EAGC,cAAA;CT6mBL;;ASzlBI;EAjBG,mBAAA;EAAkB,UAAA;EACT,qCAAA;EAET,gBAAA;EAAe,iBAAA;EACC,eAAA;EAEhB,0BAAA;CT8mBP;;AS3mBK;EACE,kBAAA;EACA,UAAA;EAAS,gCAAA;EACyB,gBAAA;EAElC,mBAAA;EAAkB,eAAA;CT+mBzB;;AS7mBM;EAID,aAAA;EAAY,oBAAA;CT8mBjB;;AS3mBK;EACE,mBAAA;EAAkB,SAAA;EACV,oCAAA;EACmB,4BAAA;EAAA,qBAAA;EAC3B,qBAAA;EAAa,cAAA;EACb,yBAAA;EAAuB,sBAAA;EAAvB,wBAAA;EAAuB,0BAAA;EACJ,uBAAA;EAAnB,oBAAA;EAAmB,UAAA;EAEnB,WAAA;EAAU,iBAAA;CTsnBjB;;ASnnBO;EACE,YAAA;EAAW,aAAA;EACC,mBAAA;EAEZ,oBAAA;ENxGa,kBAAA;CH+tBtB;;AS3nBO;EAQI,eAAA;CTunBX;;AStnBU;EAGC,kBAAA;CTunBX;;AU5uBD;EACE,mBAAA;EAAkB,kBAAA;EAElB,iCAAA;EPMqB,iBAAA;CH0uBtB;;AUhhBA;EA5NG,mBAAA;CVgvBH;;AU/uBE;EAGC,mBAAA;EAAkB,OAAA;EACZ,QAAA;EAEN,cAAA;EAAa,YAAA;EACF,YAAA;CVivBd;;AU/uBE;EAGC,eAAA;EAAc,eAAA;EAEd,YAAA;EAAW,aAAA;EACC,WAAA;CVivBf;;AU/uBE;EFND,kBAAA;EAAiB,UAAA;EAEjB,qCAAA;EAAuC,gBAAA;EACxB,iBAAA;EAEf,eAAA;EACA,mBAAA;EAAkB,0BAAA;CR0vBnB;;AUtvBE;EAGC,mBAAA;EACA,SAAA;EAAQ,WAAA;EACE,qBAAA;EACG,qBAAA;EAAb,cAAA;EAAa,aAAA;EAEb,8BAAA;EAAmC,mBAAA;EACjB,iDAAA;EACsB,yCAAA;EAAA,uCAAA;EACxC,+BAAA;EAA+B,0DAAA;CV4vBlC;;AUrtBE;EAhDD;IAWI,iCAAA;IAAA,yBAAA;GVgwBH;CACF;;AU9vBG;EACE,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,sBAAA;EAAA,wBAAA;EAAuB,0BAAA;EACvB,uBAAA;EAAmB,oBAAA;EAAA,YAAA;EACR,aAAA;EAEX,oBAAA;CVuwBL;;AUhwBI;EAJG,YAAA;EACA,aAAA;EAAY,WAAA;CVywBnB;;AUvwBM;EAID,4BAAA;EAAA,2BAAA;EAAA,mBAAA;EACA,yBAAA;EAAwB,gCAAA;EACU,gBAAA;EAElC,mBAAA;EAAkB,eAAA;CV0wBvB;;AI9yBA;EMEC;IAsCI,iCAAA;IAAyB,yBAAA;IAAA,QAAA;GV6wB5B;CACF;;AIhzBA;EMJC;IA0CI,YAAA;GV+wBH;CACF;;AU1zBC;EA8CI,iCAAA;EAAA,yBAAA;CVixBL;;AUhxBI;EAID,mBAAA;EAAkB,SAAA;EACV,WAAA;EAGR,aAAA;EAAY,8BAAA;EACuB,mBAAA;EAEnC,iDAAA;EAAA,yCAAA;EAAwC,uCAAA;EACT,+BAAA;EAA/B,0DAAA;CVkxBH;;AUhxBG;;EAPA,qBAAA;EAAA,qBAAA;EAAA,cAAA;CV8xBH;;AUvxBG;EAEE,yBAAA;EAAA,sBAAA;EAAA,wBAAA;EAAuB,0BAAA;EACJ,uBAAA;EAAnB,oBAAA;EAAmB,YAAA;EAEnB,aAAA;EAAY,oBAAA;CV8xBjB;;AU3xBK;EACE,YAAA;EAAW,aAAA;EACC,WAAA;CV+xBnB;;AU7xBM;EAID,4BAAA;EAAA,2BAAA;EAAkB,mBAAA;EAAA,yBAAA;EACM,gCAAA;EAExB,gBAAA;EAAe,mBAAA;EACG,eAAA;CVgyBvB;;AIn3BA;EMoDC;IAmCI,iCAAA;IAAA,yBAAA;IAAyB,QAAA;GVmyB5B;CACF;;AIr3BA;EM8CC;IAuCI,YAAA;GVqyBH;CACF;;AU70BC;EA2CI,iCAAA;EAAA,yBAAA;CVuyBL;;AUtyBI;EAID,iBAAA;EAAgB,mBAAA;EAEhB,eAAA;CVsyBH;;AU1vBE;EAzCG,WAAA;EACA,aAAA;EAAY,gBAAA;EACG,aAAA;EAEf,mBAAA;EAAkB,8BAAA;EACiB,gCAAA;EAEnC,gBAAA;EAAe,mBAAA;EACG,YAAA;EAElB,kBAAA;EAAiB,cAAA;CVwyBtB;;AU9xBI;EArBD;IAcI,iBAAA;IAAgB,YAAA;GV2yBrB;CACF;;AUryBI;EAFG,YAAA;CV2yBP;;AU9zBG;EAmBI,YAAA;CV+yBP;;AUl0BG;EAmBI,YAAA;CVmzBP;;AU/yBG;EACE,YAAA;EACA,cAAA;EAAa,gBAAA;EACE,iBAAA;EAEf,aAAA;EAAY,mBAAA;EACM,8BAAA;EAElB,gCAAA;EAAkC,gBAAA;EACnB,mBAAA;EAEf,YAAA;EPtKiB,kBAAA;EOuKA,cAAA;CVmzBtB;;AU/zBG;EAgBI,YAAA;CVmzBP;;AUn0BG;EAgBI,YAAA;CVuzBP;;AUv0BG;EAgBI,YAAA;CV2zBP;;AUtzBC;EACE,qBAAA;EAAa,qBAAA;EAAb,cAAA;EAAa,0BAAA;EACiB,uBAAA;EAA9B,+BAAA;EAA8B,oBAAA;EACf,gBAAA;EAAA,YAAA;CV+zBlB;;AU7zBE;EAGC,aAAA;EAAY,aAAA;EACA,kBAAA;EAEZ,UAAA;EAAS,mBAAA;EACS,2CAAA;EAElB,0BAAA;EPtLmB,cAAA;EOuLN,gBAAA;CV+zBhB;;AU9yBE;EAbG,oBAAA;CV+zBL;;AU9zBI;EAGC,qCAAA;EAAuC,gBAAA;EAEvC,iBAAA;EAAgB,YAAA;EPzMC,kBAAA;EO4MjB,qBAAA;EAAqB,mBAAA;EACH,0BAAA;CVg0BvB;;AU9zBI;EAID,mBAAA;EAAkB,SAAA;EAElB,cAAA;EAAa,eAAA;EACC,YAAA;EAEd,aAAA;EAAY,YAAA;EACA,iCAAA;EAEZ,gBAAA;EAAe,YAAA;EP3NI,kBAAA;CH2hCtB;;AI//BA;EMsLC;IAaI,cAAA;GVi0BH;CACF;;AWliCD;EACE,oBAAA;CXqiCD;;AWniCC;EACE,qBAAA;EAAA,qBAAA;EAAa,cAAA;EAAA,0BAAA;EACb,uBAAA;EAA8B,+BAAA;EAAA,0BAAA;EAC9B,uBAAA;EAAmB,oBAAA;EAAA,cAAA;CX6iCtB;;AIthCA;EO1BC;IAMI,oBAAA;IAAe,gBAAA;IAAA,0BAAA;IACf,8BAAA;GXijCH;CACF;;AWhjCE;EAGC,gCAAA;EAAkC,gBAAA;EACnB,qBAAA;EACM,YAAA;CXkjCxB;;AW/iCG;EACE,iBAAA;CXkjCL;;AW9iCC;EACE,qBAAA;EAAa,qBAAA;EAAb,cAAA;EAAa,UAAA;EAEb,WAAA;EAAU,iBAAA;CXojCb;;AInjCA;EOJC;IAMI,eAAA;GXsjCH;CACF;;AW7jCC;EAUI,eAAA;EAAc,mBAAA;EAEd,eAAA;CXujCL;;AWpjCG;EACE,YAAA;EACA,aAAA;EAAY,mBAAA;EACM,oBAAA;EAElB,kBAAA;CXujCL;;AWljCI;EAFG,kBAAA;CXwjCP","file":"main.scss","sourcesContent":["@font-face {\r\n    font-family: 'Proxima Nova';\r\n    src: url('proxima-nova-semibold-webfont.woff2') format('woff2'),\r\n         url('proxima-nova-semibold-webfont.ttf') format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Proxima Nova';\r\n    src: url('proxima-nova-bold-webfont.woff2') format('woff2'),\r\n         url('proxima-nova-bold-webfont.woff') format('woff'),\r\n         url('proxima-nova-bold-webfont.ttf') format('truetype');\r\n    font-weight: 800;\r\n    font-style: normal;\r\n}\r\n@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700');\r\n","@import url(\"https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700\");\n\n@font-face {\n  font-family: Proxima Nova;\n  src: url(./../fonts/proxima-nova/proxima-nova-semibold-webfont.woff2) format(\"woff2\"),url(./../fonts/proxima-nova/proxima-nova-semibold-webfont.ttf) format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: Proxima Nova;\n  src: url(./../fonts/proxima-nova/proxima-nova-bold-webfont.woff2) format(\"woff2\"),url(./../fonts/proxima-nova/proxima-nova-bold-webfont.woff) format(\"woff\"),url(./../fonts/proxima-nova/proxima-nova-bold-webfont.ttf) format(\"truetype\");\n  font-weight: 800;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: #ebebeb;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1200px;\n  padding: 0 15px;\n  margin: 0 auto;\n}\n\n.header {\n  height: 100vh;\n  background: url(./../img/header-bg.jpg) no-repeat 50% 50%;\n  background-size: cover;\n  color: #fff;\n  font-family: Proxima Nova,sans-serif;\n  font-weight: 600;\n}\n\n.header .nav {\n  position: relative;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-top: 30px;\n}\n\n.header .nav,\n.header .nav__menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.header .nav__menu {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n@media screen and (max-width:1024px) {\n  .header .nav__menu {\n    display: none;\n  }\n}\n\n.header .nav__menu.is-active {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 120px;\n}\n\n.header .nav__menu.is-active li {\n  margin: 0;\n  font-size: 20px;\n}\n\n.header .nav__item {\n  text-transform: uppercase;\n}\n\n.header .nav__item:not(:first-child) {\n  margin-left: 35px;\n}\n\n.header .nav__link {\n  color: #fff;\n}\n\n.header .nav__icon {\n  display: none;\n}\n\n@media screen and (max-width:1024px) {\n  .header .nav__icon {\n    position: absolute;\n    top: 55px;\n    right: 0;\n    display: inline-block;\n    border: 0;\n    color: #fff;\n    font-size: 30px;\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    outline: none;\n  }\n}\n\n.header .nav__icon .line {\n  width: 40px;\n  height: 5px;\n  border-radius: 2px;\n  background-color: #fff;\n  display: block;\n  margin: 8px auto;\n  transition: all .3s ease-in-out;\n}\n\n.header .nav__icon.is-active .line:first-child {\n  -webkit-transform: translateY(13px) rotate(45deg);\n  transform: translateY(13px) rotate(45deg);\n}\n\n.header .nav__icon.is-active .line:nth-child(2) {\n  opacity: 0;\n}\n\n.header .nav__icon.is-active .line:nth-child(3) {\n  -webkit-transform: translateY(-13px) rotate(-45deg);\n  transform: translateY(-13px) rotate(-45deg);\n}\n\n.header__title {\n  padding-top: 330px;\n  margin: 0;\n  font-size: 72px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n@media screen and (max-width:1024px) {\n  .header__title {\n    font-size: 40px;\n    padding-top: 200px;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .header__title {\n    font-size: 30px;\n  }\n}\n\n.header__text {\n  padding-top: 30px;\n  margin: 0 auto;\n  font-family: PT Sans,sans-serif;\n  font-size: 30px;\n  font-weight: 400;\n  font-style: italic;\n  text-align: center;\n  color: #fefdfd;\n}\n\n@media screen and (max-width:767px) {\n  .header__text {\n    font-size: 20px;\n  }\n}\n\n.nav__icon.is-active .line:nth-child(2) {\n  opacity: 0;\n}\n\n.nav__icon.is-active .line:first-child {\n  -webkit-transform: translateY(13px) rotate(45deg);\n  transform: translateY(13px) rotate(45deg);\n}\n\n.nav__icon.is-active .line:nth-child(3) {\n  -webkit-transform: translateY(-13px) rotate(-45deg);\n  transform: translateY(-13px) rotate(-45deg);\n}\n\n.about {\n  padding: 125px 0;\n  font-family: PT Sans,sans-serif;\n  font-size: 20px;\n  color: #665f60;\n  outline: none;\n}\n\n.about__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n@media screen and (max-width:1024px) {\n  .about__container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n}\n\n.about__info {\n  width: 54%;\n}\n\n@media screen and (max-width:1024px) {\n  .about__info {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    width: 100%;\n  }\n}\n\n.about__img {\n  position: relative;\n  width: 380px;\n  height: 555px;\n  padding-top: 175px;\n  background: url(./../img/about.jpg) no-repeat 50% 50%;\n  background-size: cover;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fefbfc;\n}\n\n.about__img:before {\n  content: \"\";\n  position: absolute;\n  top: 75px;\n  left: 50%;\n  display: block;\n  -webkit-mask: url(./../img/about-man.svg) no-repeat 50% 50%;\n  mask: url(./../img/about-man.svg) no-repeat 50% 50%;\n  background-color: #fff;\n  width: 51px;\n  height: 54px;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n@media screen and (max-width:1024px) {\n  .about__img {\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n    -ms-flex-item-align: start;\n    align-self: flex-start;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .about__img {\n    width: 100%;\n  }\n}\n\n.about__text:first-child {\n  margin: 0;\n}\n\n.about__text-hero {\n  font-weight: 700;\n}\n\n.about__button,\n.about__text-info {\n  font-style: italic;\n}\n\n.about__button {\n  display: block;\n  width: 195px;\n  height: 50px;\n  border: 1px solid #7d7a7c;\n  margin: 95px 0 0 225px;\n  color: #7d7a7c;\n  line-height: 50px;\n  text-align: center;\n}\n\n@media screen and (max-width:1024px) {\n  .about__button {\n    margin: 20px 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .about__button {\n    margin: 20px auto;\n  }\n}\n\n.services {\n  outline: none;\n}\n\n.services__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media screen and (max-width:767px) {\n  .services__container {\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n}\n\n.services__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n  width: 65%;\n  list-style: none;\n}\n\n@media screen and (max-width:1024px) {\n  .services__list {\n    width: 50%;\n    -webkit-box-ordinal-group: 3;\n    -ms-flex-order: 2;\n    order: 2;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .services__list {\n    width: 100%;\n  }\n}\n\n.services__item {\n  position: relative;\n  width: 50%;\n  height: 400px;\n  padding-top: 100px;\n  font-family: PT Sans,sans-serif;\n  color: #665f60;\n  text-align: center;\n}\n\n.services__item-img {\n  width: 50px;\n  height: 54px;\n  fill: #665f60;\n}\n\n.services__item:nth-child(3n+1) {\n  background: #dbdbdb;\n}\n\n.services__item-title {\n  padding-top: 30px;\n  margin: 0;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.services__item-text {\n  max-width: 195px;\n  padding-top: 20px;\n  margin: 0 auto;\n  font-size: 18px;\n  font-style: italic;\n}\n\n@media screen and (max-width:1024px) {\n  .services__item {\n    width: 100%;\n  }\n\n  .services__item:nth-child(3) {\n    background: #dbdbdb;\n  }\n\n  .services__item:nth-child(4) {\n    background: transparent;\n  }\n}\n\n.services__info {\n  width: 35%;\n  padding-top: 115px;\n  background: url(./../img/service.jpg) no-repeat 50% 50%;\n  background-size: cover;\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  color: #fefcfd;\n  text-align: center;\n}\n\n.services__info-img {\n  width: 62px;\n  height: 60px;\n  fill: #fff;\n}\n\n.services__info-title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.services__info-text {\n  padding-top: 120px;\n  margin: 0 30px;\n  font-style: italic;\n}\n\n.services__info-author {\n  margin: 0;\n  font-weight: 700;\n}\n\n@media screen and (max-width:1024px) {\n  .services__info {\n    width: 50%;\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .services__info {\n    width: 100%;\n    height: 800px;\n  }\n}\n\n.works {\n  background: url(./../img/works-bg.jpg) no-repeat 50% 50%;\n  background-size: cover;\n  outline: none;\n}\n\n.works__container {\n  padding: 40px 0;\n}\n\n.works__icon {\n  display: block;\n  margin: 0 auto;\n  width: 40px;\n  height: 60px;\n  fill: #fff;\n}\n\n.works__title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  color: #fefcfd;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.works__hero {\n  position: relative;\n  padding-bottom: 50px;\n}\n\n.works__slider {\n  max-width: 730px;\n  padding-top: 75px;\n  margin: 0 auto;\n}\n\n.works__slider button[class^=ion-ios-circle] {\n  position: absolute;\n  bottom: 0;\n  color: #ebebeb;\n}\n\n.works__slider button[class^=ion-ios-circle]:nth-of-type(3) {\n  left: calc(50% - 30px);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.works__slider button[class^=ion-ios-circle]:nth-of-type(4) {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.works__slider button[class^=ion-ios-circle]:nth-of-type(5) {\n  left: calc(50% + 30px);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.works__slider button[class^=ion-ios-arrow] {\n  position: absolute;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-size: 60px;\n  color: #fff;\n}\n\n@media screen and (max-width:1024px) {\n  .works__slider button[class^=ion-ios-arrow] {\n    display: none;\n  }\n}\n\n.works__slider button[class^=ion-ios-arrow]:first-of-type {\n  left: 15px;\n  top: 50%;\n}\n\n.works__slider button[class^=ion-ios-arrow]:nth-of-type(2) {\n  right: 15px;\n  top: 50%;\n}\n\n.works__slider button[class^=ion-ios-circle] {\n  border: none;\n  background: transparent;\n}\n\n@media screen and (max-width:1024px) {\n  .works__slider-img {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width:1024px) {\n  .works__slider {\n    width: 100%;\n    text-align: center;\n  }\n}\n\n.works__button {\n  display: block;\n  width: 195px;\n  height: 50px;\n  border: 1px solid #7d7a7c;\n  margin: 95px 0 0 225px;\n  color: #7d7a7c;\n  font-style: italic;\n  line-height: 50px;\n  text-align: center;\n  margin: 50px auto 0;\n  color: #fff;\n  border-color: #fff;\n}\n\n@media screen and (max-width:1024px) {\n  .works__button {\n    margin: 20px 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .works__button {\n    margin: 20px auto;\n  }\n}\n\n@media screen and (max-width:1024px) {\n  .works__button {\n    margin: 50px auto 0;\n  }\n}\n\n.team {\n  padding-top: 40px;\n}\n\n.team__icon {\n  display: block;\n  margin: 0 auto;\n  width: 60px;\n  height: 60px;\n  fill: #665f60;\n}\n\n.team__title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  color: #fefcfd;\n  text-align: center;\n  text-transform: uppercase;\n  color: #665f60;\n}\n\n.team__hero {\n  position: relative;\n  margin: 70px 0 100px;\n}\n\n.team__slider {\n  padding-top: 120px;\n  width: 100%;\n  margin: 0 auto;\n  max-width: 1080px;\n}\n\n.team__slider button[class^=ion-ios-arrow] {\n  position: absolute;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-size: 60px;\n  color: #665f60;\n}\n\n@media screen and (max-width:1024px) {\n  .team__slider button[class^=ion-ios-arrow] {\n    display: none;\n  }\n}\n\n.team__slider button[class^=ion-ios-arrow]:first-of-type {\n  left: 15px;\n  top: 50%;\n}\n\n.team__slider button[class^=ion-ios-arrow]:nth-of-type(2) {\n  right: 15px;\n  top: 50%;\n}\n\n.team__slide {\n  position: relative;\n  width: 350px;\n  margin: 0 auto;\n  background: #fff;\n  text-align: center;\n}\n\n@media screen and (max-width:767px) {\n  .team__slide {\n    width: 100%;\n  }\n}\n\n.team__slide-header {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n  transform: translate(-50%,-50%);\n}\n\n.team__slide-main {\n  height: 300px;\n}\n\n.team__slide-main-name {\n  padding-top: 165px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 24px;\n  font-weight: 800;\n  color: #9f9acf;\n  text-transform: uppercase;\n}\n\n.team__slide-main-position {\n  padding-top: 35px;\n  margin: 0;\n  font-family: PT Sans,sans-serif;\n  font-size: 24px;\n  font-style: italic;\n  color: #665f60;\n}\n\n.team__slide-footer {\n  height: 70px;\n  background: #9f9acf;\n}\n\n.team__slide-footer-social {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.team__slide-footer-social-item {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #ebebeb;\n  line-height: 32px;\n}\n\n.team__slide-footer-social-item i {\n  color: #9f9acf;\n}\n\n.team__slide-footer-social-item:not(:first-child) {\n  margin-left: 12px;\n}\n\n.contact {\n  position: relative;\n  padding-top: 40px;\n  background: rgba(159,154,207,.5);\n  overflow: hidden;\n}\n\n.contact__container {\n  text-align: center;\n}\n\n.contact__map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 900px;\n  width: 100%;\n  z-index: -1;\n}\n\n.contact__icon {\n  display: block;\n  margin: 0 auto;\n  width: 42px;\n  height: 60px;\n  fill: #fff;\n}\n\n.contact__title {\n  padding-top: 30px;\n  margin: 0;\n  font-family: Proxima Nova,sans-serif;\n  font-size: 36px;\n  font-weight: 600;\n  color: #fefcfd;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.contact__address {\n  position: absolute;\n  right: 0;\n  top: 220px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 350px;\n  background: hsla(0,0%,92%,.5);\n  text-align: center;\n  -webkit-transform: translateX(calc(100% - 91px));\n  transform: translateX(calc(100% - 91px));\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease,-webkit-transform .3s ease;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__address {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.contact__address-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 91px;\n  height: 91px;\n  background: #9f9acf;\n}\n\n.contact__address-icon--home {\n  width: 38px;\n  height: 36px;\n  fill: #fff;\n}\n\n.contact__address-text {\n  -ms-flex-item-align: center;\n  -ms-grid-row-align: center;\n  align-self: center;\n  width: calc(100% - 91px);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  text-align: center;\n  color: #665f60;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__address {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    left: 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .contact__address {\n    width: 100%;\n  }\n}\n\n.contact__address:hover {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.contact__phone {\n  position: absolute;\n  right: 0;\n  top: 311px;\n  width: 350px;\n  background: hsla(0,0%,92%,.5);\n  text-align: center;\n  -webkit-transform: translateX(calc(100% - 91px));\n  transform: translateX(calc(100% - 91px));\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease,-webkit-transform .3s ease;\n}\n\n.contact__phone,\n.contact__phone-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.contact__phone-icon {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 91px;\n  height: 91px;\n  background: #9f9acf;\n}\n\n.contact__phone-icon--home {\n  width: 38px;\n  height: 36px;\n  fill: #fff;\n}\n\n.contact__phone-text {\n  -ms-flex-item-align: center;\n  -ms-grid-row-align: center;\n  align-self: center;\n  width: calc(100% - 91px);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  text-align: center;\n  color: #665f60;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__phone {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    left: 0;\n  }\n}\n\n@media screen and (max-width:767px) {\n  .contact__phone {\n    width: 100%;\n  }\n}\n\n.contact__phone:hover {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.contact__form {\n  max-width: 860px;\n  padding-top: 270px;\n  margin: 0 auto;\n}\n\n.contact__form-input {\n  width: 40%;\n  height: 56px;\n  padding: 0 27px;\n  border: none;\n  border-radius: 4px;\n  background: hsla(0,0%,92%,.5);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  font-style: italic;\n  color: #fff;\n  line-height: 56px;\n  outline: none;\n}\n\n@media screen and (max-width:767px) {\n  .contact__form-input {\n    margin-top: 25px;\n    width: 100%;\n  }\n}\n\n.contact__form-input::-webkit-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-input:-ms-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-input::placeholder {\n  color: #fff;\n}\n\n.contact__form-message {\n  width: 100%;\n  height: 200px;\n  padding: 0 27px;\n  margin-top: 25px;\n  border: none;\n  border-radius: 4px;\n  background: hsla(0,0%,92%,.5);\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  font-style: italic;\n  color: #fff;\n  line-height: 56px;\n  outline: none;\n}\n\n.contact__form-message::-webkit-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-message:-ms-input-placeholder {\n  color: #fff;\n}\n\n.contact__form-message::placeholder {\n  color: #fff;\n}\n\n.contact__info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.contact__button {\n  width: 293px;\n  height: 70px;\n  margin: 55px auto;\n  border: 0;\n  border-radius: 4px;\n  border-bottom: 4px solid rgba(255,0,0,.15);\n  background-color: #9f9acf;\n  outline: none;\n  cursor: pointer;\n}\n\n.contact__button:hover {\n  background: #dbdbdb;\n}\n\n.contact__button-text {\n  font-family: Proxima Nova,sans-serif;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 70px;\n  letter-spacing: .4px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.contact__top {\n  position: absolute;\n  right: 0;\n  bottom: 150px;\n  display: block;\n  width: 84px;\n  height: 84px;\n  opacity: .5;\n  background: rgba(159,154,207,.5);\n  font-size: 50px;\n  color: #fff;\n  line-height: 84px;\n}\n\n@media screen and (max-width:1024px) {\n  .contact__top {\n    display: none;\n  }\n}\n\n.footer {\n  background: #9f9acf;\n}\n\n.footer__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 185px;\n}\n\n@media screen and (max-width:1024px) {\n  .footer__container {\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n}\n\n.footer__text {\n  font-family: PT Sans,sans-serif;\n  font-size: 18px;\n  letter-spacing: .4px;\n  color: #fff;\n}\n\n.footer__text--hero {\n  font-weight: 800;\n}\n\n.footer__social {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@media screen and (max-width:1024px) {\n  .footer__social {\n    margin: 0 20px;\n  }\n}\n\n.footer__social a {\n  display: block;\n  text-align: center;\n  color: #9f9acf;\n}\n\n.footer__social-item {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #ebebeb;\n  line-height: 32px;\n}\n\n.footer__social-item:not(:first-child) {\n  margin-left: 12px;\n}\n\n","* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background: $c-grey;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n.container {\r\n  max-width: 1200px;\r\n  padding: 0 15px;\r\n  margin: 0 auto;\r\n}\r\n",".header {\r\n  height: 100vh;\r\n  background: url('./img/header-bg.jpg') no-repeat 50% 50%;\r\n  background-size: cover;\r\n  color: $c-white;\r\n  font-family: 'Proxima Nova', sans-serif;\r\n  font-weight: 600;\r\n\r\n  .nav {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 30px;\r\n\r\n    &__logo {}\r\n\r\n    &__menu {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n      @include tab {\r\n        display: none;\r\n      };\r\n\r\n      &.is-active {\r\n        display: block;\r\n        position: absolute;\r\n        right: 0;\r\n        top: 120px;\r\n\r\n        li {\r\n          margin: 0;\r\n          font-size: 20px;\r\n        }\r\n      }\r\n    }\r\n\r\n    &__item {\r\n      text-transform: uppercase;\r\n\r\n      &:not(:first-child) {\r\n        margin-left: 35px;\r\n      }\r\n    }\r\n\r\n    &__link {\r\n      color: $c-white;\r\n    }\r\n\r\n    &__icon {\r\n      display: none;\r\n      @include tab {\r\n        position: absolute;\r\n        top: 55px;\r\n        right: 0;\r\n        display: inline-block;\r\n        border: 0;\r\n        color: $c-white;\r\n        font-size: 30px;\r\n        background: transparent;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        outline: none;\r\n      };\r\n\r\n      & .line {\r\n        width: 40px;\r\n        height: 5px;\r\n        border-radius: 2px;\r\n        background-color: $c-white;\r\n        display: block;\r\n        margin: 8px auto;\r\n        transition: all 0.3s ease-in-out;\r\n      }\r\n\r\n      &.is-active .line:nth-child(1) {\r\n        transform: translateY(13px) rotate(45deg);\r\n      }\r\n\r\n      &.is-active .line:nth-child(2) {\r\n        opacity: 0;\r\n      }\r\n\r\n      &.is-active .line:nth-child(3) {\r\n        transform: translateY(-13px) rotate(-45deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    padding-top: 330px;\r\n    margin: 0;\r\n    font-size: 72px;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    @include tab {\r\n      font-size: 40px;\r\n      padding-top: 200px;\r\n    };\r\n    @include mob {\r\n      font-size: 30px;\r\n    };\r\n  }\r\n\r\n  &__text {\r\n    padding-top: 30px;\r\n    margin: 0 auto;\r\n    font-family: 'PT Sans', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: 400;\r\n    font-style: italic;\r\n    text-align: center;\r\n    color: $c-light-white;\r\n    @include mob {\r\n      font-size: 20px;\r\n    };\r\n  }\r\n}\r\n\r\n.nav__icon.is-active .line:nth-child(2) {\r\n  opacity: 0;\r\n}\r\n\r\n.nav__icon.is-active .line:nth-child(1) {\r\n  transform: translateY(13px) rotate(45deg);\r\n}\r\n\r\n.nav__icon.is-active .line:nth-child(3) {\r\n  transform: translateY(-13px) rotate(-45deg);\r\n}\r\n","//colors\r\n$c-white:       #ffffff;\r\n$c-light-white: #fefdfd;\r\n$c-hero-white:  #fefbfc;\r\n$c-simple-white:#fefcfd;\r\n$c-grey:        #ebebeb;\r\n$c-lighter-grey:#dbdbdb;\r\n$c-light-grey:  #7d7a7c;\r\n$c-dark-grey:   #665f60;\r\n$c-lilac:       #9f9acf;\r\n","//\r\n// MEDIA QUERIES MIXIN\r\n// --------------------------------------------------\r\n\r\n// Break Point (Desktop First)\r\n$desktop-l-width\t: 1440px;\r\n$tablet-l-width\t\t: 1024px;\r\n$tablet-s-width\t\t: 768px;\r\n$mob-l-width\t\t\t: 640px;\r\n$mob-m-width\t\t\t: 425px;\r\n$mob-s-width\t\t\t: 375px;\r\n\r\n// only PC\r\n@mixin pc-only {\r\n\t@media screen and (min-width: #{$tablet-l-width} + 1) {\r\n\t\t@content;\r\n\t}\r\n}\r\n// PC large\r\n@mixin pc-large {\r\n\t@media screen and (min-width: #{$desktop-l-width} + 1) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n// --------------------------------------------------\r\n\r\n// tablet\r\n@mixin tab {\r\n\t@media screen and (max-width: #{$tablet-l-width}) {\r\n\t\t@content;\r\n\t}\r\n}\r\n// mobile\r\n@mixin mob {\r\n\t@media screen and (max-width: #{$tablet-s-width} - 1) {\r\n\t\t@content;\r\n\t}\r\n}\r\n// mobile large\r\n@mixin mob-large {\r\n\t@media screen and (max-width: #{$mob-l-width}) {\r\n\t\t@content;\r\n\t}\r\n}\r\n// mobile mid\r\n@mixin mob-mid {\r\n\t@media screen and (max-width: #{$mob-m-width}) {\r\n\t\t@content;\r\n\t}\r\n}\r\n// mobile small\r\n@mixin mob-small {\r\n\t@media screen and (max-width: #{$mob-s-width}) {\r\n\t\t@content;\r\n\t}\r\n}\r\n",".about {\r\n  padding: 125px 0;\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-size: 20px;\r\n  color: $c-dark-grey;\r\n  outline: none;\r\n\r\n  &__container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    @include tab {\r\n      flex-direction: column;\r\n    };\r\n  }\r\n\r\n  &__info {\r\n    width: 54%;\r\n    @include tab {\r\n      order: 1;\r\n      align-items: stretch;\r\n      width: 100%;\r\n    };\r\n  }\r\n\r\n  &__img {\r\n    position: relative;\r\n    width: 380px;\r\n    height: 555px;\r\n    padding-top: 175px;\r\n    background: url('./img/about.jpg') no-repeat 50% 50%;\r\n    background-size: cover;\r\n    font-family: 'Proxima Nova', sans-serif;\r\n    font-size: 36px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: $c-hero-white;\r\n\r\n    &::before {\r\n      content: \"\";\r\n      position: absolute;\r\n      top: 75px;\r\n      left: 50%;\r\n      display: block;\r\n      mask: url('./img/about-man.svg') no-repeat 50% 50%;\r\n      background-color: $c-white;\r\n      width: 51px;\r\n      height: 54px;\r\n      transform: translateX(-50%);\r\n    }\r\n    @include tab {\r\n      order: 2;\r\n      align-self: flex-start;\r\n    };\r\n    @include mob {\r\n      width: 100%;\r\n    };\r\n  }\r\n\r\n  &__text {\r\n    &:first-child {\r\n      margin: 0;\r\n    }\r\n\r\n    &-hero {\r\n      font-weight: bold;\r\n    }\r\n\r\n    &-info {\r\n      font-style: italic;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    display: block;\r\n    width: 195px;\r\n    height: 50px;\r\n    border: solid 1px $c-light-grey;\r\n    margin: 95px 0 0 225px;\r\n    color: $c-light-grey;\r\n    font-style: italic;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    @include tab {\r\n      margin: 20px 0;\r\n    };\r\n    @include mob {\r\n      margin: 20px auto;\r\n    };\r\n  }\r\n}\r\n",".services {\r\n  outline: none;\r\n\r\n  &__container {\r\n    display: flex;\r\n    @include mob {\r\n      flex-wrap: wrap;\r\n    };\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 65%;\r\n    list-style: none;\r\n    @include tab {\r\n      width: 50%;\r\n      order: 2;\r\n    };\r\n    @include mob {\r\n      width: 100%;\r\n    };\r\n  }\r\n\r\n  &__item {\r\n    position: relative;\r\n    width: 50%;\r\n    height: 400px;\r\n    padding-top: 100px;\r\n    font-family: 'PT Sans', sans-serif;\r\n    color: $c-dark-grey;\r\n    text-align: center;\r\n\r\n    &-img {\r\n      width: 50px;\r\n      height: 54px;\r\n      fill: $c-dark-grey;\r\n    }\r\n\r\n    &:nth-child(3n+1) {\r\n      background: $c-lighter-grey;\r\n    }\r\n\r\n    &-title {\r\n      padding-top: 30px;\r\n      margin: 0;\r\n      font-weight: 700;\r\n      text-transform: uppercase;\r\n    }\r\n\r\n    &-text {\r\n      max-width: 195px;\r\n      padding-top: 20px;\r\n      margin: 0 auto;\r\n      font-size: 18px;\r\n      font-style: italic;\r\n    }\r\n    @include tab {\r\n      width: 100%;\r\n\r\n      &:nth-child(3) {\r\n        background: $c-lighter-grey;\r\n      }\r\n\r\n      &:nth-child(4) {\r\n        background: transparent;\r\n      }\r\n    };\r\n  }\r\n\r\n  &__info {\r\n    width: 35%;\r\n    padding-top: 115px;\r\n    background: url('./img/service.jpg') no-repeat 50% 50%;\r\n    background-size: cover;\r\n    font-family: 'PT Sans', sans-serif;\r\n    font-size: 18px;\r\n    color: $c-simple-white;\r\n    text-align: center;\r\n\r\n    &-img {\r\n      width: 62px;\r\n      height: 60px;\r\n      fill: $c-white;\r\n    }\r\n\r\n    &-title {\r\n      padding-top: 30px;\r\n      margin: 0;\r\n      font-family: 'Proxima Nova', sans-serif;\r\n      font-size: 36px;\r\n      font-weight: 600;\r\n      text-transform: uppercase;\r\n    }\r\n\r\n    &-text {\r\n      padding-top: 120px;\r\n      margin: 0 30px;\r\n      font-style: italic;\r\n    }\r\n\r\n    &-author {\r\n      margin: 0;\r\n      font-weight: 700;\r\n    }\r\n    @include tab {\r\n      width: 50%;\r\n      order: 1;\r\n    };\r\n    @include mob {\r\n      width: 100%;\r\n      height: 800px;\r\n    };\r\n  }\r\n}\r\n",".works {\r\n  background: url('./img/works-bg.jpg') no-repeat 50% 50%;\r\n  background-size: cover;\r\n  outline: none;\r\n\r\n  &__container {\r\n    padding: 40px 0;\r\n  }\r\n\r\n  &__icon {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 40px;\r\n    height: 60px;\r\n    fill: $c-white;\r\n  }\r\n\r\n  &__title {\r\n    @include title;\r\n  }\r\n\r\n  &__hero {\r\n    position: relative;\r\n    padding-bottom: 50px;\r\n  }\r\n\r\n  &__slider {\r\n    max-width: 730px;\r\n    padding-top: 75px;\r\n    margin: 0 auto;\r\n\r\n    button[class^=\"ion-ios-circle\"] {\r\n      position: absolute;\r\n      bottom: 0;\r\n      color: $c-grey;\r\n\r\n      &:nth-of-type(3) {\r\n        left: calc(50% - 30px);\r\n        transform: translateX(-50%);\r\n      }\r\n\r\n      &:nth-of-type(4) {\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n      }\r\n\r\n      &:nth-of-type(5) {\r\n        left: calc(50% + 30px);\r\n        transform: translateX(-50%);\r\n      }\r\n    }\r\n\r\n    button[class^=\"ion-ios-arrow\"] {\r\n      position: absolute;\r\n      padding: 0;\r\n      border: none;\r\n      background: transparent;\r\n      font-size: 60px;\r\n      color: $c-white;\r\n      @include tab {\r\n        display: none;\r\n      };\r\n\r\n      &:nth-of-type(1) {\r\n        left: 15px;\r\n        top: 50%;\r\n      }\r\n\r\n      &:nth-of-type(2) {\r\n        right: 15px;\r\n        top: 50%;\r\n      }\r\n    }\r\n\r\n    button[class^=\"ion-ios-circle\"] {\r\n      border: none;\r\n      background: transparent;\r\n    }\r\n\r\n    &-img {\r\n      @include tab {\r\n        width: 100%;\r\n      };\r\n    }\r\n    @include tab {\r\n      width: 100%;\r\n      text-align: center;\r\n    };\r\n  }\r\n\r\n  &__button {\r\n    display: block;\r\n    @include button;\r\n    margin: 50px auto 0;\r\n    color: $c-white;\r\n    border-color: $c-white;\r\n    @include tab {\r\n      margin: 50px auto 0;\r\n    };\r\n  }\r\n}\r\n","@mixin button {\r\n  display: block;\r\n  width: 195px;\r\n  height: 50px;\r\n  border: solid 1px $c-light-grey;\r\n  margin: 95px 0 0 225px;\r\n  color: $c-light-grey;\r\n  font-style: italic;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  @include tab {\r\n    margin: 20px 0;\r\n  };\r\n  @include mob {\r\n    margin: 20px auto;\r\n  };\r\n}\r\n\r\n@mixin title {\r\n  padding-top: 30px;\r\n  margin: 0;\r\n  font-family: 'Proxima Nova', sans-serif;\r\n  font-size: 36px;\r\n  font-weight: 600;\r\n  color: $c-simple-white;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n",".team {\r\n  padding-top: 40px;\r\n\r\n  &__icon {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 60px;\r\n    height: 60px;\r\n    fill: $c-dark-grey;\r\n  }\r\n\r\n  &__title {\r\n    @include title;\r\n    color: $c-dark-grey;\r\n  }\r\n\r\n  &__hero {\r\n    position: relative;\r\n    margin: 70px 0 100px;\r\n  }\r\n\r\n  &__slider {\r\n    padding-top: 120px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    max-width: 1080px;\r\n\r\n    button[class^=\"ion-ios-arrow\"] {\r\n      position: absolute;\r\n      padding: 0;\r\n      border: none;\r\n      background: transparent;\r\n      font-size: 60px;\r\n      color: $c-dark-grey;\r\n      @include tab {\r\n        display: none;\r\n      };\r\n\r\n      &:nth-of-type(1) {\r\n        left: 15px;\r\n        top: 50%;\r\n      }\r\n\r\n      &:nth-of-type(2) {\r\n        right: 15px;\r\n        top: 50%;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__slide {\r\n    position: relative;\r\n    width: 350px;\r\n    margin: 0 auto;\r\n    background: $c-white;\r\n    text-align: center;\r\n    @include mob {\r\n      width: 100%;\r\n    };\r\n\r\n    &-header {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n    }\r\n\r\n    &-main {\r\n      height: 300px;\r\n\r\n      &-name {\r\n        padding-top: 165px;\r\n        margin: 0;\r\n        font-family: 'Proxima Nova', sans-serif;\r\n        font-size: 24px;\r\n        font-weight: 800;\r\n        color: $c-lilac;\r\n        text-transform: uppercase;\r\n      }\r\n\r\n      &-position {\r\n        padding-top: 35px;\r\n        margin: 0;\r\n        font-family: 'PT Sans', sans-serif;\r\n        font-size: 24px;\r\n        font-style: italic;\r\n        color: $c-dark-grey;\r\n      }\r\n    }\r\n\r\n    &-footer {\r\n      height: 70px;\r\n      background: $c-lilac;\r\n\r\n      &-social {\r\n        position: relative;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0;\r\n        padding: 0;\r\n        list-style: none;\r\n\r\n        &-item {\r\n          width: 32px;\r\n          height: 32px;\r\n          border-radius: 50%;\r\n          background: $c-grey;\r\n          line-height: 32px;\r\n\r\n          i {\r\n            color: $c-lilac;\r\n          }\r\n\r\n          &:not(:first-child) {\r\n            margin-left: 12px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".contact {\r\n  position: relative;\r\n  padding-top: 40px;\r\n  background: rgba($c-lilac, .5);\r\n  overflow: hidden;\r\n\r\n  &__container {\r\n    text-align: center;\r\n  }\r\n\r\n  &__map {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 900px;\r\n    width: 100%;\r\n    z-index: -1;\r\n  }\r\n\r\n  &__icon {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 42px;\r\n    height: 60px;\r\n    fill: $c-white;\r\n  }\r\n\r\n  &__title {\r\n    @include title;\r\n  }\r\n\r\n  &__address {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 220px;\r\n    display: flex;\r\n    width: 350px;\r\n    background: rgba(235, 235, 235, .5);\r\n    text-align: center;\r\n    transform: translateX(calc(100% - 91px));\r\n    transition: transform 0.3s ease;\r\n    @include tab {\r\n      transform: translateX(0%);\r\n    };\r\n\r\n    &-icon {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 91px;\r\n      height: 91px;\r\n      background: $c-lilac;\r\n\r\n      &--home {\r\n        width: 38px;\r\n        height: 36px;\r\n        fill: $c-white;\r\n      }\r\n    }\r\n\r\n    &-text {\r\n      align-self: center;\r\n      width: calc(100% - 91px);\r\n      font-family: 'PT Sans', sans-serif;\r\n      font-size: 18px;\r\n      text-align: center;\r\n      color: $c-dark-grey;\r\n    }\r\n    @include tab {\r\n      transform: translateX(0%);\r\n      left: 0;\r\n    };\r\n    @include mob {\r\n      width: 100%;\r\n    };\r\n\r\n    &:hover {\r\n      transform: translateX(0);\r\n    }\r\n  }\r\n\r\n  &__phone {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 311px;\r\n    display: flex;\r\n    width: 350px;\r\n    background: rgba(235, 235, 235, .5);\r\n    text-align: center;\r\n    transform: translateX(calc(100% - 91px));\r\n    transition: transform 0.3s ease;\r\n\r\n    &-icon {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 91px;\r\n      height: 91px;\r\n      background: $c-lilac;\r\n\r\n      &--home {\r\n        width: 38px;\r\n        height: 36px;\r\n        fill: $c-white;\r\n      }\r\n    }\r\n\r\n    &-text {\r\n      align-self: center;\r\n      width: calc(100% - 91px);\r\n      font-family: 'PT Sans', sans-serif;\r\n      font-size: 18px;\r\n      text-align: center;\r\n      color: $c-dark-grey;\r\n    }\r\n    @include tab {\r\n      transform: translateX(0%);\r\n      left: 0;\r\n    };\r\n    @include mob {\r\n      width: 100%;\r\n    };\r\n\r\n    &:hover {\r\n      transform: translateX(0);\r\n    }\r\n  }\r\n\r\n  &__form {\r\n    max-width: 860px;\r\n    padding-top: 270px;\r\n    margin: 0 auto;\r\n\r\n    &-input {\r\n      width: 40%;\r\n      height: 56px;\r\n      padding: 0 27px;\r\n      border: none;\r\n      border-radius: 4px;\r\n      background: rgba(235, 235, 235, .5);\r\n      font-family: 'PT Sans', sans-serif;\r\n      font-size: 18px;\r\n      font-style: italic;\r\n      color: $c-white;\r\n      line-height: 56px;\r\n      outline: none;\r\n      @include mob {\r\n        margin-top: 25px;\r\n        width: 100%;\r\n      };\r\n\r\n      &::placeholder {\r\n        color: $c-white;\r\n      }\r\n    }\r\n\r\n    &-message {\r\n      width: 100%;\r\n      height: 200px;\r\n      padding: 0 27px;\r\n      margin-top: 25px;\r\n      border: none;\r\n      border-radius: 4px;\r\n      background: rgba(235, 235, 235, .5);\r\n      font-family: 'PT Sans', sans-serif;\r\n      font-size: 18px;\r\n      font-style: italic;\r\n      color: $c-white;\r\n      line-height: 56px;\r\n      outline: none;\r\n\r\n      &::placeholder {\r\n        color: $c-white;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__info {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n  }\r\n\r\n  &__button {\r\n    width: 293px;\r\n    height: 70px;\r\n    margin: 55px auto;\r\n    border: 0;\r\n    border-radius: 4px;\r\n    border-bottom: 4px solid rgba(255, 0, 0, .15);\r\n    background-color: $c-lilac;\r\n    outline: none;\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n      background: $c-lighter-grey;\r\n    }\r\n\r\n    &-text {\r\n      font-family: 'Proxima Nova', sans-serif;\r\n      font-size: 20px;\r\n      font-weight: 800;\r\n      color: $c-white;\r\n      line-height: 70px;\r\n      letter-spacing: 0.4px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n    }\r\n  }\r\n\r\n  &__top {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 150px;\r\n    display: block;\r\n    width: 84px;\r\n    height: 84px;\r\n    opacity: 0.5;\r\n    background: rgba(159, 154, 207, .5);\r\n    font-size: 50px;\r\n    color: $c-white;\r\n    line-height: 84px;\r\n    @include tab {\r\n      display: none;\r\n    };\r\n  }\r\n}\r\n",".footer {\r\n  background: $c-lilac;\r\n\r\n  &__container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 185px;\r\n    @include tab {\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n    };\r\n  }\r\n\r\n  &__text {\r\n    font-family: 'PT Sans', sans-serif;\r\n    font-size: 18px;\r\n    letter-spacing: 0.4px;\r\n    color: $c-white;\r\n\r\n    &--hero {\r\n      font-weight: 800;\r\n    }\r\n  }\r\n\r\n  &__social {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    @include tab {\r\n      margin: 0 20px;\r\n    };\r\n\r\n    a {\r\n      display: block;\r\n      text-align: center;\r\n      color: $c-lilac;\r\n    }\r\n\r\n    &-item {\r\n      width: 32px;\r\n      height: 32px;\r\n      border-radius: 50%;\r\n      background: $c-grey;\r\n      line-height: 32px;\r\n\r\n      &:not(:first-child) {\r\n        margin-left: 12px;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = "dist/fonts/proxima-nova-semibold-webfont.woff2";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "dist/fonts/proxima-nova-semibold-webfont.ttf";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "dist/fonts/proxima-nova-bold-webfont.woff2";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "dist/fonts/proxima-nova-bold-webfont.woff";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "dist/fonts/proxima-nova-bold-webfont.ttf";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "dist/img/header-bg.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "dist/img/about.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "dist/img/service.jpg";

/***/ }),
/* 13 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 14 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 15 */
/***/ (function(module, exports) {

function smoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
}
smoothScroll();


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_siema__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_siema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_siema__);


const siema = document.querySelector('.works__slider');
const slider1 = new __WEBPACK_IMPORTED_MODULE_0_siema___default.a({
  selector: siema,
  duration: 1200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: false,
  onChange: getDots,
  onInit: getFirstDot,
});

const siema2 = document.querySelector('.team__slider');
const slider2 = new __WEBPACK_IMPORTED_MODULE_0_siema___default.a({
  selector: siema2,
  duration: 1200,
  easing: 'ease-out',
  perPage: {
    425: 1,
    768: 2,
    1100: 3,
  },
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true,

});


__WEBPACK_IMPORTED_MODULE_0_siema___default.a.prototype.addArrows = function() {
  // make buttons & append them inside Siema's container
  this.prevArrow = document.createElement('button');
  this.nextArrow = document.createElement('button');
  this.prevArrow.classList.add('ion-ios-arrow-left');
  this.nextArrow.classList.add('ion-ios-arrow-right');
  // this.prevArrow.textContent = 'previous slide';
  // this.nextArrow.textContent = 'next slide';
  this.selector.appendChild(this.prevArrow)
  this.selector.appendChild(this.nextArrow)
  // event handlers on buttons
  this.prevArrow.addEventListener('click', () => this.prev());
  this.nextArrow.addEventListener('click', () => this.next());
}
slider1.addArrows();
slider2.addArrows();


function getDots() {
  let thisSlide = this.currentSlide;
  let buttons = document.querySelectorAll('.ion-ios-circle-outline')
  buttons.forEach(function(elem, index) {
    elem.classList.remove('ion-record');
    if (index == thisSlide) {
      elem.classList.add('ion-record');
    }
  });
}

function getFirstDot() {
  let thisSlide = this.currentSlide;
  document.addEventListener("DOMContentLoaded", function(event) {
    let buttons = document.querySelectorAll('.ion-ios-circle-outline');
    buttons.forEach(function(elem, index) {
      if (index == thisSlide) {
        elem.classList.add('ion-record');
      }
    });

  });
}


// // Add a function that generates pagination to prototype
__WEBPACK_IMPORTED_MODULE_0_siema___default.a.prototype.addPagination = function() {
  for (let i = 0; i < this.innerElements.length; i++) {
    const btn = document.createElement('button');
    btn.classList.add('ion-ios-circle-outline');
    btn.addEventListener('click', () => this.goTo(i));
    btn.addEventListener('click', () => {
      let btns = document.querySelectorAll('.ion-ios-circle-outline')
      btns.forEach(elem => {
        elem.classList.remove('ion-record');
      })
      btn.classList.toggle('ion-record');
    });
    this.selector.appendChild(btn);
  }
}
slider1.addPagination();


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==typeof exports?exports.Siema=t():e.Siema=t()}(this,function(){return function(e){function t(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),o=function(){function e(t){var i=this;s(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.startIndex,this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return n(e,[{key:"init",value:function(){if(window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null},this.selector.addEventListener("touchstart",this.touchstartHandler,{passive:!0}),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler,{passive:!0}),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler)),null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selector.style.overflow="hidden",this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent(),this.config.onInit.call(this)}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===r(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;0===this.currentSlide&&this.config.loop?this.currentSlide=this.innerElements.length-this.perPage:this.currentSlide=Math.max(this.currentSlide-e,0),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide===this.innerElements.length-this.perPage&&this.config.loop?this.currentSlide=0:this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(){this.sliderFrame.style[this.transformProperty]="translate3d(-"+this.currentSlide*(this.selectorWidth/this.perPage)+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=this.drag.endX-this.drag.startX,t=Math.abs(e),i=Math.ceil(t/(this.selectorWidth/this.perPage));e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent()}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.slideToCurrent()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null}}},{key:"touchstartHandler",value:function(e){e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo&&(this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))*-1+"px, 0, 0)")}},{key:"mousedownHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){e.preventDefault(),this.pointerDown&&(this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing,this.sliderFrame.style[this.transformProperty]="translate3d("+(this.currentSlide*(this.selectorWidth/this.perPage)+(this.drag.startX-this.drag.endX))*-1+"px, 0, 0)")}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.updateAfterDrag(),this.clearDrag())}},{key:"updateFrame",value:function(){this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=this.selectorWidth/this.perPage*this.innerElements.length+"px",this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing,this.config.draggable&&(this.selector.style.cursor="-webkit-grab");for(var e=document.createDocumentFragment(),t=0;t<this.innerElements.length;t++){var i=document.createElement("div");i.style.cssFloat="left",i.style.float="left",i.style.width=100/this.innerElements.length+"%",i.appendChild(this.innerElements[t]),e.appendChild(i)}this.sliderFrame.appendChild(e),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e,1),this.currentSlide=e<=this.currentSlide?this.currentSlide-1:this.currentSlide,this.updateFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(this.innerElements.indexOf(e)!==-1)throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t,0,e),this.currentSlide=t<=this.currentSlide?this.currentSlide+1:this.currentSlide,this.updateFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(window.removeEventListener("resize",this.resizeHandler),this.selector.style.cursor="auto",this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),e){for(var i=document.createDocumentFragment(),s=0;s<this.innerElements.length;s++)i.appendChild(this.innerElements[s]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,threshold:20,loop:!1,onInit:function(){},onChange:function(){}},i=e;for(var s in i)t[s]=i[s];return t}},{key:"webkitOrNot",value:function(){var e=document.documentElement.style;return"string"==typeof e.transform?"transform":"WebkitTransform"}}]),e}();t.default=o,e.exports=t.default}])});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function runMenu () {
  let gamburgerMenu = document.querySelector('.nav__icon');
  let menu = document.querySelector('.nav__menu');
    gamburgerMenu.addEventListener('click', e => {
      e.preventDefault();
      gamburgerMenu.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    } );
}
runMenu ();


/***/ }),
/* 19 */
/***/ (function(module, exports) {


function initMap() {
  let kiev = {
    lat: 50.401699,
    lng: 30.252512
  };
  let image = '/dist/img/contact-map-pin.png'
  let map = new google.maps.Map(document.querySelector('.contact__map'), {
    zoom: 10,
    center: kiev,
    disableDefaultUI: true
  });

  let marker = new google.maps.Marker({
    position: kiev,
    map: map,
    icon: image,
  });

  let infowindow = new google.maps.InfoWindow({
    content: 'Beetroot Academy',
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    let uluru = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(kiev);
  })
};

initMap();


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "dist/img/works-bg.jpg";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map