(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/paper-dashboard.scss?v=1.1.0":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/assets/scss/paper-dashboard.scss?v=1.1.0 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/nucleo-icons.eot */ "./src/assets/fonts/nucleo-icons.eot"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../fonts/nucleo-icons.woff2 */ "./src/assets/fonts/nucleo-icons.woff2"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../fonts/nucleo-icons.woff */ "./src/assets/fonts/nucleo-icons.woff"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../fonts/nucleo-icons.ttf */ "./src/assets/fonts/nucleo-icons.ttf"));

// Module
exports.push([module.i, "/*!\n\n =========================================================\n * Paper Dashboard React - v1.1.0 based on Paper Dashboard 2 - v2.0.0\n =========================================================\n\n * Product Page: https://www.creative-tim.com/product/paper-dashboard-2\n * Copyright 2018 Creative Tim (http://www.creative-tim.com)\n\n * Designed by www.invisionapp.com Coded by www.creative-tim.com\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2015 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n.animated.flipOutX,\n.animated.flipOutY {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake; }\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown; }\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n/* perfect-scrollbar v0.6.13 */\n.ps-container {\n  touch-action: auto;\n  overflow: hidden !important;\n  -ms-overflow-style: none; }\n\n@supports (-ms-overflow-style: none) {\n  .ps-container {\n    overflow: auto !important; } }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps-container {\n    overflow: auto !important; } }\n\n.ps-container.ps-active-x > .ps-scrollbar-x-rail,\n.ps-container.ps-active-y > .ps-scrollbar-y-rail {\n  display: block;\n  background-color: transparent; }\n\n.ps-container.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #999;\n  width: 11px; }\n\n.ps-container > .ps-scrollbar-x-rail {\n  display: none;\n  position: absolute;\n  /* please don't change 'position' */\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  bottom: 0px;\n  /* there must be 'bottom' for ps-scrollbar-x-rail */\n  height: 15px; }\n\n.ps-container > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  position: absolute;\n  /* please don't change 'position' */\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  bottom: 2px;\n  /* there must be 'bottom' for ps-scrollbar-x */\n  height: 6px; }\n\n.ps-container > .ps-scrollbar-x-rail:hover > .ps-scrollbar-x, .ps-container > .ps-scrollbar-x-rail:active > .ps-scrollbar-x {\n  height: 11px; }\n\n.ps-container > .ps-scrollbar-y-rail {\n  display: none;\n  position: absolute;\n  /* please don't change 'position' */\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  right: 0;\n  /* there must be 'right' for ps-scrollbar-y-rail */\n  width: 15px; }\n\n.ps-container > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  position: absolute;\n  /* please don't change 'position' */\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  right: 2px;\n  /* there must be 'right' for ps-scrollbar-y */\n  width: 6px; }\n\n.ps-container > .ps-scrollbar-y-rail:hover > .ps-scrollbar-y, .ps-container > .ps-scrollbar-y-rail:active > .ps-scrollbar-y {\n  width: 11px; }\n\n.ps-container:hover.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #999;\n  width: 11px; }\n\n.ps-container:hover > .ps-scrollbar-x-rail,\n.ps-container:hover > .ps-scrollbar-y-rail {\n  opacity: 0.6; }\n\n.ps-container:hover > .ps-scrollbar-x-rail:hover {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover > .ps-scrollbar-x-rail:hover > .ps-scrollbar-x {\n  background-color: #999; }\n\n.ps-container:hover > .ps-scrollbar-y-rail:hover {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover > .ps-scrollbar-y-rail:hover > .ps-scrollbar-y {\n  background-color: #999; }\n\n.btn,\n.navbar .navbar-nav > a.btn {\n  border-width: 2px;\n  font-weight: 600;\n  font-size: 0.8571em;\n  line-height: 1.35em;\n  text-transform: uppercase;\n  border: none;\n  margin: 10px 1px;\n  border-radius: 3px;\n  padding: 11px 22px;\n  cursor: pointer;\n  background-color: #66615B;\n  color: #FFFFFF;\n  transition: all 150ms linear; }\n  .btn:hover, .btn:focus, .btn:active, .btn.active, .btn:active:focus, .btn:active:hover, .btn.active:focus, .btn.active:hover,\n  .show > .btn.dropdown-toggle,\n  .show > .btn.dropdown-toggle:focus,\n  .show > .btn.dropdown-toggle:hover,\n  .navbar .navbar-nav > a.btn:hover,\n  .navbar .navbar-nav > a.btn:focus,\n  .navbar .navbar-nav > a.btn:active,\n  .navbar .navbar-nav > a.btn.active,\n  .navbar .navbar-nav > a.btn:active:focus,\n  .navbar .navbar-nav > a.btn:active:hover,\n  .navbar .navbar-nav > a.btn.active:focus,\n  .navbar .navbar-nav > a.btn.active:hover,\n  .show >\n  .navbar .navbar-nav > a.btn.dropdown-toggle,\n  .show >\n  .navbar .navbar-nav > a.btn.dropdown-toggle:focus,\n  .show >\n  .navbar .navbar-nav > a.btn.dropdown-toggle:hover {\n    background-color: #403D39 !important;\n    color: #FFFFFF !important;\n    box-shadow: none !important; }\n  .btn:not([data-action]):hover,\n  .navbar .navbar-nav > a.btn:not([data-action]):hover {\n    box-shadow: none; }\n  .btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active,\n  fieldset[disabled] .btn,\n  fieldset[disabled] .btn:hover,\n  fieldset[disabled] .btn:focus,\n  fieldset[disabled] .btn.focus,\n  fieldset[disabled] .btn:active,\n  fieldset[disabled] .btn.active,\n  .navbar .navbar-nav > a.btn.disabled,\n  .navbar .navbar-nav > a.btn.disabled:hover,\n  .navbar .navbar-nav > a.btn.disabled:focus,\n  .navbar .navbar-nav > a.btn.disabled.focus,\n  .navbar .navbar-nav > a.btn.disabled:active,\n  .navbar .navbar-nav > a.btn.disabled.active,\n  .navbar .navbar-nav > a.btn:disabled,\n  .navbar .navbar-nav > a.btn:disabled:hover,\n  .navbar .navbar-nav > a.btn:disabled:focus,\n  .navbar .navbar-nav > a.btn:disabled.focus,\n  .navbar .navbar-nav > a.btn:disabled:active,\n  .navbar .navbar-nav > a.btn:disabled.active,\n  .navbar .navbar-nav > a.btn[disabled],\n  .navbar .navbar-nav > a.btn[disabled]:hover,\n  .navbar .navbar-nav > a.btn[disabled]:focus,\n  .navbar .navbar-nav > a.btn[disabled].focus,\n  .navbar .navbar-nav > a.btn[disabled]:active,\n  .navbar .navbar-nav > a.btn[disabled].active,\n  fieldset[disabled]\n  .navbar .navbar-nav > a.btn,\n  fieldset[disabled]\n  .navbar .navbar-nav > a.btn:hover,\n  fieldset[disabled]\n  .navbar .navbar-nav > a.btn:focus,\n  fieldset[disabled]\n  .navbar .navbar-nav > a.btn.focus,\n  fieldset[disabled]\n  .navbar .navbar-nav > a.btn:active,\n  fieldset[disabled]\n  .navbar .navbar-nav > a.btn.active {\n    background-color: #66615B;\n    border-color: #66615B; }\n  .btn.btn-simple,\n  .navbar .navbar-nav > a.btn.btn-simple {\n    color: #66615B;\n    border-color: #66615B; }\n    .btn.btn-simple:hover, .btn.btn-simple:focus, .btn.btn-simple:active,\n    .navbar .navbar-nav > a.btn.btn-simple:hover,\n    .navbar .navbar-nav > a.btn.btn-simple:focus,\n    .navbar .navbar-nav > a.btn.btn-simple:active {\n      background-color: transparent;\n      color: #403D39;\n      border-color: #403D39;\n      box-shadow: none; }\n  .btn.btn-link,\n  .navbar .navbar-nav > a.btn.btn-link {\n    color: #66615B; }\n    .btn.btn-link:hover, .btn.btn-link:focus, .btn.btn-link:active, .btn.btn-link:active:focus,\n    .navbar .navbar-nav > a.btn.btn-link:hover,\n    .navbar .navbar-nav > a.btn.btn-link:focus,\n    .navbar .navbar-nav > a.btn.btn-link:active,\n    .navbar .navbar-nav > a.btn.btn-link:active:focus {\n      background-color: transparent;\n      color: #403D39;\n      text-decoration: none;\n      box-shadow: none; }\n  .btn:hover, .btn:focus,\n  .navbar .navbar-nav > a.btn:hover,\n  .navbar .navbar-nav > a.btn:focus {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    outline: 0 !important; }\n  .btn:active, .btn.active,\n  .open > .btn.dropdown-toggle,\n  .navbar .navbar-nav > a.btn:active,\n  .navbar .navbar-nav > a.btn.active,\n  .open >\n  .navbar .navbar-nav > a.btn.dropdown-toggle {\n    box-shadow: none;\n    outline: 0 !important; }\n  .btn .badge,\n  .navbar .navbar-nav > a.btn .badge {\n    margin: 0; }\n  .btn.btn-icon,\n  .navbar .navbar-nav > a.btn.btn-icon {\n    height: 2.375rem;\n    min-width: 2.375rem;\n    width: 2.375rem;\n    padding: 0;\n    font-size: 0.9375rem;\n    overflow: hidden;\n    position: relative;\n    line-height: normal; }\n    .btn.btn-icon.btn-simple,\n    .navbar .navbar-nav > a.btn.btn-icon.btn-simple {\n      padding: 0; }\n    .btn.btn-icon.btn-sm,\n    .navbar .navbar-nav > a.btn.btn-icon.btn-sm {\n      height: 1.875rem;\n      min-width: 1.875rem;\n      width: 1.875rem; }\n      .btn.btn-icon.btn-sm .fa,\n      .btn.btn-icon.btn-sm .far,\n      .btn.btn-icon.btn-sm .fas,\n      .btn.btn-icon.btn-sm .nc-icon,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-sm .fa,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-sm .far,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-sm .fas,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-sm .nc-icon {\n        font-size: 0.6875rem; }\n    .btn.btn-icon.btn-lg,\n    .navbar .navbar-nav > a.btn.btn-icon.btn-lg {\n      height: 3.6rem;\n      min-width: 3.6rem;\n      width: 3.6rem; }\n      .btn.btn-icon.btn-lg .fa,\n      .btn.btn-icon.btn-lg .far,\n      .btn.btn-icon.btn-lg .fas,\n      .btn.btn-icon.btn-lg .nc-icon,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-lg .fa,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-lg .far,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-lg .fas,\n      .navbar .navbar-nav > a.btn.btn-icon.btn-lg .nc-icon {\n        font-size: 1.325rem; }\n    .btn.btn-icon:not(.btn-footer) .nc-icon,\n    .btn.btn-icon:not(.btn-footer) .fa,\n    .btn.btn-icon:not(.btn-footer) .far,\n    .btn.btn-icon:not(.btn-footer) .fas,\n    .navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .nc-icon,\n    .navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fa,\n    .navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .far,\n    .navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fas {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-12px, -12px);\n              transform: translate(-12px, -12px);\n      line-height: 1.5626rem;\n      width: 24px; }\n    .btn.btn-icon.btn-neutral,\n    .navbar .navbar-nav > a.btn.btn-icon.btn-neutral {\n      font-size: 20px; }\n  .btn:not(.btn-icon) .nc-icon,\n  .navbar .navbar-nav > a.btn:not(.btn-icon) .nc-icon {\n    position: relative;\n    top: 1px; }\n\n.btn-primary {\n  background-color: #51cbce;\n  color: #FFFFFF; }\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .btn-primary:active:focus, .btn-primary:active:hover, .btn-primary.active:focus, .btn-primary.active:hover,\n  .show > .btn-primary.dropdown-toggle,\n  .show > .btn-primary.dropdown-toggle:focus,\n  .show > .btn-primary.dropdown-toggle:hover {\n    background-color: #34b5b8 !important;\n    color: #FFFFFF !important;\n    box-shadow: none !important; }\n  .btn-primary:not([data-action]):hover {\n    box-shadow: none; }\n  .btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active,\n  fieldset[disabled] .btn-primary,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus,\n  fieldset[disabled] .btn-primary:active,\n  fieldset[disabled] .btn-primary.active {\n    background-color: #51cbce;\n    border-color: #51cbce; }\n  .btn-primary.btn-simple {\n    color: #51cbce;\n    border-color: #51cbce; }\n    .btn-primary.btn-simple:hover, .btn-primary.btn-simple:focus, .btn-primary.btn-simple:active {\n      background-color: transparent;\n      color: #34b5b8;\n      border-color: #34b5b8;\n      box-shadow: none; }\n  .btn-primary.btn-link {\n    color: #51cbce; }\n    .btn-primary.btn-link:hover, .btn-primary.btn-link:focus, .btn-primary.btn-link:active, .btn-primary.btn-link:active:focus {\n      background-color: transparent;\n      color: #34b5b8;\n      text-decoration: none;\n      box-shadow: none; }\n\n.btn-success {\n  background-color: #6bd098;\n  color: #FFFFFF; }\n  .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .btn-success:active:focus, .btn-success:active:hover, .btn-success.active:focus, .btn-success.active:hover,\n  .show > .btn-success.dropdown-toggle,\n  .show > .btn-success.dropdown-toggle:focus,\n  .show > .btn-success.dropdown-toggle:hover {\n    background-color: #44c47d !important;\n    color: #FFFFFF !important;\n    box-shadow: none !important; }\n  .btn-success:not([data-action]):hover {\n    box-shadow: none; }\n  .btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success:disabled, .btn-success:disabled:hover, .btn-success:disabled:focus, .btn-success:disabled.focus, .btn-success:disabled:active, .btn-success:disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active,\n  fieldset[disabled] .btn-success,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus,\n  fieldset[disabled] .btn-success:active,\n  fieldset[disabled] .btn-success.active {\n    background-color: #6bd098;\n    border-color: #6bd098; }\n  .btn-success.btn-simple {\n    color: #6bd098;\n    border-color: #6bd098; }\n    .btn-success.btn-simple:hover, .btn-success.btn-simple:focus, .btn-success.btn-simple:active {\n      background-color: transparent;\n      color: #44c47d;\n      border-color: #44c47d;\n      box-shadow: none; }\n  .btn-success.btn-link {\n    color: #6bd098; }\n    .btn-success.btn-link:hover, .btn-success.btn-link:focus, .btn-success.btn-link:active, .btn-success.btn-link:active:focus {\n      background-color: transparent;\n      color: #44c47d;\n      text-decoration: none;\n      box-shadow: none; }\n\n.btn-info {\n  background-color: #51bcda;\n  color: #FFFFFF; }\n  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .btn-info:active:focus, .btn-info:active:hover, .btn-info.active:focus, .btn-info.active:hover,\n  .show > .btn-info.dropdown-toggle,\n  .show > .btn-info.dropdown-toggle:focus,\n  .show > .btn-info.dropdown-toggle:hover {\n    background-color: #2ba9cd !important;\n    color: #FFFFFF !important;\n    box-shadow: none !important; }\n  .btn-info:not([data-action]):hover {\n    box-shadow: none; }\n  .btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info:disabled, .btn-info:disabled:hover, .btn-info:disabled:focus, .btn-info:disabled.focus, .btn-info:disabled:active, .btn-info:disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active,\n  fieldset[disabled] .btn-info,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus,\n  fieldset[disabled] .btn-info:active,\n  fieldset[disabled] .btn-info.active {\n    background-color: #51bcda;\n    border-color: #51bcda; }\n  .btn-info.btn-simple {\n    color: #51bcda;\n    border-color: #51bcda; }\n    .btn-info.btn-simple:hover, .btn-info.btn-simple:focus, .btn-info.btn-simple:active {\n      background-color: transparent;\n      color: #2ba9cd;\n      border-color: #2ba9cd;\n      box-shadow: none; }\n  .btn-info.btn-link {\n    color: #51bcda; }\n    .btn-info.btn-link:hover, .btn-info.btn-link:focus, .btn-info.btn-link:active, .btn-info.btn-link:active:focus {\n      background-color: transparent;\n      color: #2ba9cd;\n      text-decoration: none;\n      box-shadow: none; }\n\n.btn-warning {\n  background-color: #fbc658;\n  color: #FFFFFF; }\n  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .btn-warning:active:focus, .btn-warning:active:hover, .btn-warning.active:focus, .btn-warning.active:hover,\n  .show > .btn-warning.dropdown-toggle,\n  .show > .btn-warning.dropdown-toggle:focus,\n  .show > .btn-warning.dropdown-toggle:hover {\n    background-color: #fab526 !important;\n    color: #FFFFFF !important;\n    box-shadow: none !important; }\n  .btn-warning:not([data-action]):hover {\n    box-shadow: none; }\n  .btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning:disabled, .btn-warning:disabled:hover, .btn-warning:disabled:focus, .btn-warning:disabled.focus, .btn-warning:disabled:active, .btn-warning:disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active,\n  fieldset[disabled] .btn-warning,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus,\n  fieldset[disabled] .btn-warning:active,\n  fieldset[disabled] .btn-warning.active {\n    background-color: #fbc658;\n    border-color: #fbc658; }\n  .btn-warning.btn-simple {\n    color: #fbc658;\n    border-color: #fbc658; }\n    .btn-warning.btn-simple:hover, .btn-warning.btn-simple:focus, .btn-warning.btn-simple:active {\n      background-color: transparent;\n      color: #fab526;\n      border-color: #fab526;\n      box-shadow: none; }\n  .btn-warning.btn-link {\n    color: #fbc658; }\n    .btn-warning.btn-link:hover, .btn-warning.btn-link:focus, .btn-warning.btn-link:active, .btn-warning.btn-link:active:focus {\n      background-color: transparent;\n      color: #fab526;\n      text-decoration: none;\n      box-shadow: none; }\n\n.btn-danger {\n  background-color: #ef8157;\n  color: #FFFFFF; }\n  .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .btn-danger:active:focus, .btn-danger:active:hover, .btn-danger.active:focus, .btn-danger.active:hover,\n  .show > .btn-danger.dropdown-toggle,\n  .show > .btn-danger.dropdown-toggle:focus,\n  .show > .btn-danger.dropdown-toggle:hover {\n    background-color: #eb6532 !important;\n    color: #FFFFFF !important;\n    box-shadow: none !important; }\n  .btn-danger:not([data-action]):hover {\n    box-shadow: none; }\n  .btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger:disabled, .btn-danger:disabled:hover, .btn-danger:disabled:focus, .btn-danger:disabled.focus, .btn-danger:disabled:active, .btn-danger:disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active,\n  fieldset[disabled] .btn-danger,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus,\n  fieldset[disabled] .btn-danger:active,\n  fieldset[disabled] .btn-danger.active {\n    background-color: #ef8157;\n    border-color: #ef8157; }\n  .btn-danger.btn-simple {\n    color: #ef8157;\n    border-color: #ef8157; }\n    .btn-danger.btn-simple:hover, .btn-danger.btn-simple:focus, .btn-danger.btn-simple:active {\n      background-color: transparent;\n      color: #eb6532;\n      border-color: #eb6532;\n      box-shadow: none; }\n  .btn-danger.btn-link {\n    color: #ef8157; }\n    .btn-danger.btn-link:hover, .btn-danger.btn-link:focus, .btn-danger.btn-link:active, .btn-danger.btn-link:active:focus {\n      background-color: transparent;\n      color: #eb6532;\n      text-decoration: none;\n      box-shadow: none; }\n\n.btn-outline-default {\n  background: transparent;\n  border: 2px solid #66615B !important;\n  color: #66615B;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n  .btn-outline-default:hover, .btn-outline-default:focus, .btn-outline-default:active, .btn-outline-default:focus:active, .btn-outline-default.active,\n  .open > .btn-outline-default.dropdown-toggle {\n    background-color: #66615B !important;\n    color: rgba(255, 255, 255, 0.8) !important;\n    border-color: #66615B !important; }\n    .btn-outline-default:hover .caret, .btn-outline-default:focus .caret, .btn-outline-default:active .caret, .btn-outline-default:focus:active .caret, .btn-outline-default.active .caret,\n    .open > .btn-outline-default.dropdown-toggle .caret {\n      border-top-color: rgba(255, 255, 255, 0.8) !important; }\n  .btn-outline-default .caret {\n    border-top-color: #FFFFFF !important; }\n  .btn-outline-default.disabled, .btn-outline-default.disabled:hover, .btn-outline-default.disabled:focus, .btn-outline-default.disabled.focus, .btn-outline-default.disabled:active, .btn-outline-default.disabled.active, .btn-outline-default:disabled, .btn-outline-default:disabled:hover, .btn-outline-default:disabled:focus, .btn-outline-default:disabled.focus, .btn-outline-default:disabled:active, .btn-outline-default:disabled.active, .btn-outline-default[disabled], .btn-outline-default[disabled]:hover, .btn-outline-default[disabled]:focus, .btn-outline-default[disabled].focus, .btn-outline-default[disabled]:active, .btn-outline-default[disabled].active,\n  fieldset[disabled] .btn-outline-default,\n  fieldset[disabled] .btn-outline-default:hover,\n  fieldset[disabled] .btn-outline-default:focus,\n  fieldset[disabled] .btn-outline-default.focus,\n  fieldset[disabled] .btn-outline-default:active,\n  fieldset[disabled] .btn-outline-default.active {\n    background-color: transparent !important;\n    border-color: #66615B !important; }\n\n.btn-outline-primary {\n  background: transparent;\n  border: 2px solid #51cbce !important;\n  color: #51cbce;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n  .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:active, .btn-outline-primary:focus:active, .btn-outline-primary.active,\n  .open > .btn-outline-primary.dropdown-toggle {\n    background-color: #51cbce !important;\n    color: rgba(255, 255, 255, 0.8) !important;\n    border-color: #51cbce !important; }\n    .btn-outline-primary:hover .caret, .btn-outline-primary:focus .caret, .btn-outline-primary:active .caret, .btn-outline-primary:focus:active .caret, .btn-outline-primary.active .caret,\n    .open > .btn-outline-primary.dropdown-toggle .caret {\n      border-top-color: rgba(255, 255, 255, 0.8) !important; }\n  .btn-outline-primary .caret {\n    border-top-color: #FFFFFF !important; }\n  .btn-outline-primary.disabled, .btn-outline-primary.disabled:hover, .btn-outline-primary.disabled:focus, .btn-outline-primary.disabled.focus, .btn-outline-primary.disabled:active, .btn-outline-primary.disabled.active, .btn-outline-primary:disabled, .btn-outline-primary:disabled:hover, .btn-outline-primary:disabled:focus, .btn-outline-primary:disabled.focus, .btn-outline-primary:disabled:active, .btn-outline-primary:disabled.active, .btn-outline-primary[disabled], .btn-outline-primary[disabled]:hover, .btn-outline-primary[disabled]:focus, .btn-outline-primary[disabled].focus, .btn-outline-primary[disabled]:active, .btn-outline-primary[disabled].active,\n  fieldset[disabled] .btn-outline-primary,\n  fieldset[disabled] .btn-outline-primary:hover,\n  fieldset[disabled] .btn-outline-primary:focus,\n  fieldset[disabled] .btn-outline-primary.focus,\n  fieldset[disabled] .btn-outline-primary:active,\n  fieldset[disabled] .btn-outline-primary.active {\n    background-color: transparent !important;\n    border-color: #51cbce !important; }\n\n.btn-outline-success {\n  background: transparent;\n  border: 2px solid #6bd098 !important;\n  color: #6bd098;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n  .btn-outline-success:hover, .btn-outline-success:focus, .btn-outline-success:active, .btn-outline-success:focus:active, .btn-outline-success.active,\n  .open > .btn-outline-success.dropdown-toggle {\n    background-color: #6bd098 !important;\n    color: rgba(255, 255, 255, 0.8) !important;\n    border-color: #6bd098 !important; }\n    .btn-outline-success:hover .caret, .btn-outline-success:focus .caret, .btn-outline-success:active .caret, .btn-outline-success:focus:active .caret, .btn-outline-success.active .caret,\n    .open > .btn-outline-success.dropdown-toggle .caret {\n      border-top-color: rgba(255, 255, 255, 0.8) !important; }\n  .btn-outline-success .caret {\n    border-top-color: #FFFFFF !important; }\n  .btn-outline-success.disabled, .btn-outline-success.disabled:hover, .btn-outline-success.disabled:focus, .btn-outline-success.disabled.focus, .btn-outline-success.disabled:active, .btn-outline-success.disabled.active, .btn-outline-success:disabled, .btn-outline-success:disabled:hover, .btn-outline-success:disabled:focus, .btn-outline-success:disabled.focus, .btn-outline-success:disabled:active, .btn-outline-success:disabled.active, .btn-outline-success[disabled], .btn-outline-success[disabled]:hover, .btn-outline-success[disabled]:focus, .btn-outline-success[disabled].focus, .btn-outline-success[disabled]:active, .btn-outline-success[disabled].active,\n  fieldset[disabled] .btn-outline-success,\n  fieldset[disabled] .btn-outline-success:hover,\n  fieldset[disabled] .btn-outline-success:focus,\n  fieldset[disabled] .btn-outline-success.focus,\n  fieldset[disabled] .btn-outline-success:active,\n  fieldset[disabled] .btn-outline-success.active {\n    background-color: transparent !important;\n    border-color: #6bd098 !important; }\n\n.btn-outline-info {\n  background: transparent;\n  border: 2px solid #51bcda !important;\n  color: #51bcda;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n  .btn-outline-info:hover, .btn-outline-info:focus, .btn-outline-info:active, .btn-outline-info:focus:active, .btn-outline-info.active,\n  .open > .btn-outline-info.dropdown-toggle {\n    background-color: #51bcda !important;\n    color: rgba(255, 255, 255, 0.8) !important;\n    border-color: #51bcda !important; }\n    .btn-outline-info:hover .caret, .btn-outline-info:focus .caret, .btn-outline-info:active .caret, .btn-outline-info:focus:active .caret, .btn-outline-info.active .caret,\n    .open > .btn-outline-info.dropdown-toggle .caret {\n      border-top-color: rgba(255, 255, 255, 0.8) !important; }\n  .btn-outline-info .caret {\n    border-top-color: #FFFFFF !important; }\n  .btn-outline-info.disabled, .btn-outline-info.disabled:hover, .btn-outline-info.disabled:focus, .btn-outline-info.disabled.focus, .btn-outline-info.disabled:active, .btn-outline-info.disabled.active, .btn-outline-info:disabled, .btn-outline-info:disabled:hover, .btn-outline-info:disabled:focus, .btn-outline-info:disabled.focus, .btn-outline-info:disabled:active, .btn-outline-info:disabled.active, .btn-outline-info[disabled], .btn-outline-info[disabled]:hover, .btn-outline-info[disabled]:focus, .btn-outline-info[disabled].focus, .btn-outline-info[disabled]:active, .btn-outline-info[disabled].active,\n  fieldset[disabled] .btn-outline-info,\n  fieldset[disabled] .btn-outline-info:hover,\n  fieldset[disabled] .btn-outline-info:focus,\n  fieldset[disabled] .btn-outline-info.focus,\n  fieldset[disabled] .btn-outline-info:active,\n  fieldset[disabled] .btn-outline-info.active {\n    background-color: transparent !important;\n    border-color: #51bcda !important; }\n\n.btn-outline-warning {\n  background: transparent;\n  border: 2px solid #fbc658 !important;\n  color: #fbc658;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n  .btn-outline-warning:hover, .btn-outline-warning:focus, .btn-outline-warning:active, .btn-outline-warning:focus:active, .btn-outline-warning.active,\n  .open > .btn-outline-warning.dropdown-toggle {\n    background-color: #fbc658 !important;\n    color: rgba(255, 255, 255, 0.8) !important;\n    border-color: #fbc658 !important; }\n    .btn-outline-warning:hover .caret, .btn-outline-warning:focus .caret, .btn-outline-warning:active .caret, .btn-outline-warning:focus:active .caret, .btn-outline-warning.active .caret,\n    .open > .btn-outline-warning.dropdown-toggle .caret {\n      border-top-color: rgba(255, 255, 255, 0.8) !important; }\n  .btn-outline-warning .caret {\n    border-top-color: #FFFFFF !important; }\n  .btn-outline-warning.disabled, .btn-outline-warning.disabled:hover, .btn-outline-warning.disabled:focus, .btn-outline-warning.disabled.focus, .btn-outline-warning.disabled:active, .btn-outline-warning.disabled.active, .btn-outline-warning:disabled, .btn-outline-warning:disabled:hover, .btn-outline-warning:disabled:focus, .btn-outline-warning:disabled.focus, .btn-outline-warning:disabled:active, .btn-outline-warning:disabled.active, .btn-outline-warning[disabled], .btn-outline-warning[disabled]:hover, .btn-outline-warning[disabled]:focus, .btn-outline-warning[disabled].focus, .btn-outline-warning[disabled]:active, .btn-outline-warning[disabled].active,\n  fieldset[disabled] .btn-outline-warning,\n  fieldset[disabled] .btn-outline-warning:hover,\n  fieldset[disabled] .btn-outline-warning:focus,\n  fieldset[disabled] .btn-outline-warning.focus,\n  fieldset[disabled] .btn-outline-warning:active,\n  fieldset[disabled] .btn-outline-warning.active {\n    background-color: transparent !important;\n    border-color: #fbc658 !important; }\n\n.btn-outline-danger {\n  background: transparent;\n  border: 2px solid #ef8157 !important;\n  color: #ef8157;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n  .btn-outline-danger:hover, .btn-outline-danger:focus, .btn-outline-danger:active, .btn-outline-danger:focus:active, .btn-outline-danger.active,\n  .open > .btn-outline-danger.dropdown-toggle {\n    background-color: #ef8157 !important;\n    color: rgba(255, 255, 255, 0.8) !important;\n    border-color: #ef8157 !important; }\n    .btn-outline-danger:hover .caret, .btn-outline-danger:focus .caret, .btn-outline-danger:active .caret, .btn-outline-danger:focus:active .caret, .btn-outline-danger.active .caret,\n    .open > .btn-outline-danger.dropdown-toggle .caret {\n      border-top-color: rgba(255, 255, 255, 0.8) !important; }\n  .btn-outline-danger .caret {\n    border-top-color: #FFFFFF !important; }\n  .btn-outline-danger.disabled, .btn-outline-danger.disabled:hover, .btn-outline-danger.disabled:focus, .btn-outline-danger.disabled.focus, .btn-outline-danger.disabled:active, .btn-outline-danger.disabled.active, .btn-outline-danger:disabled, .btn-outline-danger:disabled:hover, .btn-outline-danger:disabled:focus, .btn-outline-danger:disabled.focus, .btn-outline-danger:disabled:active, .btn-outline-danger:disabled.active, .btn-outline-danger[disabled], .btn-outline-danger[disabled]:hover, .btn-outline-danger[disabled]:focus, .btn-outline-danger[disabled].focus, .btn-outline-danger[disabled]:active, .btn-outline-danger[disabled].active,\n  fieldset[disabled] .btn-outline-danger,\n  fieldset[disabled] .btn-outline-danger:hover,\n  fieldset[disabled] .btn-outline-danger:focus,\n  fieldset[disabled] .btn-outline-danger.focus,\n  fieldset[disabled] .btn-outline-danger:active,\n  fieldset[disabled] .btn-outline-danger.active {\n    background-color: transparent !important;\n    border-color: #ef8157 !important; }\n\n.btn-outline-neutral {\n  background: transparent;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n  .btn-outline-neutral:hover, .btn-outline-neutral:focus, .btn-outline-neutral:active, .btn-outline-neutral:focus:active, .btn-outline-neutral.active,\n  .open > .btn-outline-neutral.dropdown-toggle {\n    background-color: #FFFFFF !important;\n    color: rgba(255, 255, 255, 0.8) !important;\n    border-color: #FFFFFF !important; }\n    .btn-outline-neutral:hover .caret, .btn-outline-neutral:focus .caret, .btn-outline-neutral:active .caret, .btn-outline-neutral:focus:active .caret, .btn-outline-neutral.active .caret,\n    .open > .btn-outline-neutral.dropdown-toggle .caret {\n      border-top-color: rgba(255, 255, 255, 0.8) !important; }\n  .btn-outline-neutral .caret {\n    border-top-color: #FFFFFF !important; }\n  .btn-outline-neutral.disabled, .btn-outline-neutral.disabled:hover, .btn-outline-neutral.disabled:focus, .btn-outline-neutral.disabled.focus, .btn-outline-neutral.disabled:active, .btn-outline-neutral.disabled.active, .btn-outline-neutral:disabled, .btn-outline-neutral:disabled:hover, .btn-outline-neutral:disabled:focus, .btn-outline-neutral:disabled.focus, .btn-outline-neutral:disabled:active, .btn-outline-neutral:disabled.active, .btn-outline-neutral[disabled], .btn-outline-neutral[disabled]:hover, .btn-outline-neutral[disabled]:focus, .btn-outline-neutral[disabled].focus, .btn-outline-neutral[disabled]:active, .btn-outline-neutral[disabled].active,\n  fieldset[disabled] .btn-outline-neutral,\n  fieldset[disabled] .btn-outline-neutral:hover,\n  fieldset[disabled] .btn-outline-neutral:focus,\n  fieldset[disabled] .btn-outline-neutral.focus,\n  fieldset[disabled] .btn-outline-neutral:active,\n  fieldset[disabled] .btn-outline-neutral.active {\n    background-color: transparent !important;\n    border-color: #FFFFFF !important; }\n  .btn-outline-neutral:hover, .btn-outline-neutral:focus {\n    color: #403D39;\n    background-color: #FFFFFF; }\n\n.btn-neutral {\n  background-color: #FFFFFF;\n  color: #51cbce;\n  color: #66615B; }\n  .btn-neutral:hover, .btn-neutral:focus, .btn-neutral:active, .btn-neutral.active, .btn-neutral:active:focus, .btn-neutral:active:hover, .btn-neutral.active:focus, .btn-neutral.active:hover,\n  .show > .btn-neutral.dropdown-toggle,\n  .show > .btn-neutral.dropdown-toggle:focus,\n  .show > .btn-neutral.dropdown-toggle:hover {\n    background-color: #FFFFFF !important;\n    color: #FFFFFF !important;\n    box-shadow: none !important; }\n  .btn-neutral:not([data-action]):hover {\n    box-shadow: none; }\n  .btn-neutral.disabled, .btn-neutral.disabled:hover, .btn-neutral.disabled:focus, .btn-neutral.disabled.focus, .btn-neutral.disabled:active, .btn-neutral.disabled.active, .btn-neutral:disabled, .btn-neutral:disabled:hover, .btn-neutral:disabled:focus, .btn-neutral:disabled.focus, .btn-neutral:disabled:active, .btn-neutral:disabled.active, .btn-neutral[disabled], .btn-neutral[disabled]:hover, .btn-neutral[disabled]:focus, .btn-neutral[disabled].focus, .btn-neutral[disabled]:active, .btn-neutral[disabled].active,\n  fieldset[disabled] .btn-neutral,\n  fieldset[disabled] .btn-neutral:hover,\n  fieldset[disabled] .btn-neutral:focus,\n  fieldset[disabled] .btn-neutral.focus,\n  fieldset[disabled] .btn-neutral:active,\n  fieldset[disabled] .btn-neutral.active {\n    background-color: #FFFFFF;\n    border-color: #FFFFFF; }\n  .btn-neutral.btn-danger {\n    color: #ef8157; }\n    .btn-neutral.btn-danger:hover, .btn-neutral.btn-danger:focus, .btn-neutral.btn-danger:active, .btn-neutral.btn-danger:active:focus {\n      color: #eb6532 !important; }\n  .btn-neutral.btn-info {\n    color: #51bcda !important; }\n    .btn-neutral.btn-info:hover, .btn-neutral.btn-info:focus, .btn-neutral.btn-info:active, .btn-neutral.btn-info:active:focus {\n      color: #2ba9cd !important; }\n  .btn-neutral.btn-warning {\n    color: #fbc658 !important; }\n    .btn-neutral.btn-warning:hover, .btn-neutral.btn-warning:focus, .btn-neutral.btn-warning:active, .btn-neutral.btn-warning:active:focus {\n      color: #fab526 !important; }\n  .btn-neutral.btn-success {\n    color: #6bd098 !important; }\n    .btn-neutral.btn-success:hover, .btn-neutral.btn-success:focus, .btn-neutral.btn-success:active, .btn-neutral.btn-success:active:focus {\n      color: #44c47d !important; }\n  .btn-neutral.btn-default {\n    color: #66615B !important; }\n    .btn-neutral.btn-default:hover, .btn-neutral.btn-default:focus, .btn-neutral.btn-default:active, .btn-neutral.btn-default:active:focus {\n      color: #403D39 !important; }\n  .btn-neutral.active, .btn-neutral:active, .btn-neutral:active:focus, .btn-neutral:active:hover, .btn-neutral.active:focus, .btn-neutral.active:hover,\n  .show > .btn-neutral.dropdown-toggle,\n  .show > .btn-neutral.dropdown-toggle:focus,\n  .show > .btn-neutral.dropdown-toggle:hover {\n    background-color: #FFFFFF !important;\n    color: #34b5b8 !important;\n    box-shadow: none !important; }\n  .btn-neutral:hover, .btn-neutral:focus {\n    color: #34b5b8 !important; }\n    .btn-neutral:hover:not(.nav-link), .btn-neutral:focus:not(.nav-link) {\n      box-shadow: none; }\n  .btn-neutral.btn-simple {\n    color: #FFFFFF;\n    border-color: #FFFFFF; }\n    .btn-neutral.btn-simple:hover, .btn-neutral.btn-simple:focus, .btn-neutral.btn-simple:active {\n      background-color: transparent;\n      color: #FFFFFF;\n      border-color: #FFFFFF;\n      box-shadow: none; }\n  .btn-neutral.btn-link {\n    color: #FFFFFF; }\n    .btn-neutral.btn-link:hover, .btn-neutral.btn-link:focus, .btn-neutral.btn-link:active, .btn-neutral.btn-link:active:focus {\n      background-color: transparent;\n      color: #FFFFFF;\n      text-decoration: none;\n      box-shadow: none; }\n  .btn-neutral:hover, .btn-neutral:focus {\n    color: #403D39; }\n  .btn-neutral.btn-border:hover, .btn-neutral.btn-border:focus {\n    color: #66615B; }\n  .btn-neutral.btn-border:active, .btn-neutral.btn-border.active,\n  .open > .btn-neutral.btn-border.dropdown-toggle {\n    background-color: #FFFFFF;\n    color: #66615B; }\n  .btn-neutral.btn-link:active, .btn-neutral.btn-link.active {\n    background-color: transparent; }\n\n.btn:disabled, .btn[disabled], .btn.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  pointer-events: none; }\n\n.btn-simple {\n  border: 1px solid;\n  border-color: #66615B;\n  padding: 10px 22px;\n  background-color: transparent; }\n\n.btn-simple.disabled, .btn-simple.disabled:hover, .btn-simple.disabled:focus, .btn-simple.disabled.focus, .btn-simple.disabled:active, .btn-simple.disabled.active, .btn-simple:disabled, .btn-simple:disabled:hover, .btn-simple:disabled:focus, .btn-simple:disabled.focus, .btn-simple:disabled:active, .btn-simple:disabled.active, .btn-simple[disabled], .btn-simple[disabled]:hover, .btn-simple[disabled]:focus, .btn-simple[disabled].focus, .btn-simple[disabled]:active, .btn-simple[disabled].active,\nfieldset[disabled] .btn-simple,\nfieldset[disabled] .btn-simple:hover,\nfieldset[disabled] .btn-simple:focus,\nfieldset[disabled] .btn-simple.focus,\nfieldset[disabled] .btn-simple:active,\nfieldset[disabled] .btn-simple.active,\n.btn-link.disabled,\n.btn-link.disabled:hover,\n.btn-link.disabled:focus,\n.btn-link.disabled.focus,\n.btn-link.disabled:active,\n.btn-link.disabled.active,\n.btn-link:disabled,\n.btn-link:disabled:hover,\n.btn-link:disabled:focus,\n.btn-link:disabled.focus,\n.btn-link:disabled:active,\n.btn-link:disabled.active,\n.btn-link[disabled],\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\n.btn-link[disabled].focus,\n.btn-link[disabled]:active,\n.btn-link[disabled].active,\nfieldset[disabled]\n.btn-link,\nfieldset[disabled]\n.btn-link:hover,\nfieldset[disabled]\n.btn-link:focus,\nfieldset[disabled]\n.btn-link.focus,\nfieldset[disabled]\n.btn-link:active,\nfieldset[disabled]\n.btn-link.active {\n  background-color: transparent; }\n\n.btn-link {\n  border: 0;\n  padding: 0.5rem 0.7rem;\n  background-color: transparent; }\n\n.btn-lg {\n  font-size: 1rem;\n  border-radius: 6px;\n  padding: 15px 48px; }\n  .btn-lg.btn-simple {\n    padding: 14px 47px; }\n\n.btn-sm {\n  font-size: 0.8571em;\n  border-radius: 3px;\n  padding: 5px 15px; }\n  .btn-sm.btn-simple {\n    padding: 4px 14px; }\n\n.btn-wd {\n  min-width: 140px; }\n\n.btn-group.select {\n  width: 100%; }\n\n.btn-group.select .btn {\n  text-align: left; }\n\n.btn-group.select .caret {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px; }\n\n.btn-group .btn + .btn {\n  margin-left: -3px; }\n\n.btn-group .btn:focus {\n  background-color: #51bcda !important; }\n\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px;\n  padding-right: 23px;\n  padding-left: 23px; }\n  .btn-round.btn-simple {\n    padding: 10px 22px; }\n\n.no-caret.dropdown-toggle::after {\n  display: none; }\n\n::-moz-placeholder {\n  color: #9A9A9A; }\n\n:-ms-input-placeholder {\n  color: #9A9A9A; }\n\n::-webkit-input-placeholder {\n  color: #9A9A9A; }\n\n.form-control {\n  background-color: #FFFFFF;\n  border: 1px solid #DDDDDD;\n  border-radius: 4px;\n  color: #66615b;\n  line-height: normal;\n  font-size: 14px;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  box-shadow: none; }\n  .form-control:focus {\n    border: 1px solid #9A9A9A;\n    box-shadow: none;\n    outline: 0 !important;\n    color: #66615B; }\n    .form-control:focus + .input-group-append .input-group-text,\n    .form-control:focus ~ .input-group-append .input-group-text,\n    .form-control:focus + .input-group-prepend .input-group-text,\n    .form-control:focus ~ .input-group-prepend .input-group-text {\n      border: 1px solid #ccc;\n      border-left: none;\n      background-color: transparent; }\n  .has-success .form-control,\n  .has-error .form-control,\n  .has-success .form-control:focus,\n  .has-error .form-control:focus {\n    box-shadow: none; }\n  .has-success .form-control {\n    border: 1px solid #ccc;\n    color: #66615b; }\n    .has-success .form-control.form-control-success {\n      padding-right: 2.5em !important; }\n  .has-success .form-control:focus {\n    border: 1px solid #6bd098;\n    color: #6bd098; }\n  .has-danger .form-control {\n    background-color: #FFC0A4;\n    border: 1px solid #ef8157;\n    color: #ef8157; }\n    .has-danger .form-control.form-control-danger {\n      padding-right: 2.5em !important; }\n  .has-danger .form-control:focus {\n    background-color: #FFFFFF;\n    border: 1px solid #ef8157; }\n  .form-control + .form-control-feedback {\n    border-radius: 6px;\n    font-size: 14px;\n    margin-top: -7px;\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    vertical-align: middle; }\n  .open .form-control {\n    border-radius: 6px 6px 0 0;\n    border-bottom-color: transparent; }\n  .form-control + .input-group-append .input-group-text,\n  .form-control + .input-group-prepend .input-group-text {\n    background-color: #FFFFFF; }\n\n.form-group.no-border.form-control-lg .input-group-append .input-group-text,\n.input-group.no-border.form-control-lg .input-group-append .input-group-text {\n  padding: 15px 0 15px 11px; }\n\n.form-group.no-border.form-control-lg .form-control,\n.input-group.no-border.form-control-lg .form-control {\n  padding: 15px 11px; }\n  .form-group.no-border.form-control-lg .form-control + .input-group-prepend .input-group-text,\n  .form-group.no-border.form-control-lg .form-control + .input-group-append .input-group-text,\n  .input-group.no-border.form-control-lg .form-control + .input-group-prepend .input-group-text,\n  .input-group.no-border.form-control-lg .form-control + .input-group-append .input-group-text {\n    padding: 15px 11px 15px 0; }\n\n.form-group.form-control-lg .form-control,\n.input-group.form-control-lg .form-control {\n  padding: 14px 10px; }\n  .form-group.form-control-lg .form-control + .input-group-prepend .input-group-text,\n  .form-group.form-control-lg .form-control + .input-group-append .input-group-text,\n  .input-group.form-control-lg .form-control + .input-group-prepend .input-group-text,\n  .input-group.form-control-lg .form-control + .input-group-append .input-group-text {\n    padding: 14px 10px 14px 0; }\n\n.form-group.form-control-lg .input-group-prepend .input-group-text,\n.form-group.form-control-lg .input-group-append .input-group-text,\n.input-group.form-control-lg .input-group-prepend .input-group-text,\n.input-group.form-control-lg .input-group-append .input-group-text {\n  padding: 14px 0 15px 10px; }\n  .form-group.form-control-lg .input-group-prepend .input-group-text + .form-control,\n  .form-group.form-control-lg .input-group-append .input-group-text + .form-control,\n  .input-group.form-control-lg .input-group-prepend .input-group-text + .form-control,\n  .input-group.form-control-lg .input-group-append .input-group-text + .form-control {\n    padding: 15px 10px 15px 8px; }\n\n.form-group.no-border .form-control,\n.input-group.no-border .form-control {\n  padding: 11px 11px; }\n  .form-group.no-border .form-control + .input-group-prepend .input-group-text,\n  .form-group.no-border .form-control + .input-group-append .input-group-text,\n  .input-group.no-border .form-control + .input-group-prepend .input-group-text,\n  .input-group.no-border .form-control + .input-group-append .input-group-text {\n    padding: 11px 11px 11px 0; }\n\n.form-group.no-border .input-group-prepend .input-group-text,\n.form-group.no-border .input-group-append .input-group-text,\n.input-group.no-border .input-group-prepend .input-group-text,\n.input-group.no-border .input-group-append .input-group-text {\n  padding: 11px 0 11px 11px; }\n\n.form-group .form-control,\n.input-group .form-control {\n  padding: 10px 10px 10px 10px; }\n  .form-group .form-control + .input-group-prepend .input-group-text,\n  .form-group .form-control + .input-group-append .input-group-text,\n  .input-group .form-control + .input-group-prepend .input-group-text,\n  .input-group .form-control + .input-group-append .input-group-text {\n    padding: 10px 10px 10px 0; }\n\n.form-group .input-group-prepend .input-group-text,\n.form-group .input-group-append .input-group-text,\n.input-group .input-group-prepend .input-group-text,\n.input-group .input-group-append .input-group-text {\n  padding: 10px 0 10px 10px; }\n  .form-group .input-group-prepend .input-group-text + .form-control,\n  .form-group .input-group-prepend .input-group-text ~ .form-control,\n  .form-group .input-group-append .input-group-text + .form-control,\n  .form-group .input-group-append .input-group-text ~ .form-control,\n  .input-group .input-group-prepend .input-group-text + .form-control,\n  .input-group .input-group-prepend .input-group-text ~ .form-control,\n  .input-group .input-group-append .input-group-text + .form-control,\n  .input-group .input-group-append .input-group-text ~ .form-control {\n    padding: 10px 11px 11px 8px; }\n\n.input-group.has-success .input-group-prepend .input-group-text,\n.input-group.has-success .input-group-append .input-group-text {\n  border: 1px solid #ccc;\n  color: #66615b;\n  background-color: #FFFFFF;\n  border-right: none; }\n\n.form-group.no-border .form-control,\n.form-group.no-border .form-control + .input-group-prepend .input-group-text,\n.form-group.no-border .form-control + .input-group-append .input-group-text,\n.input-group.no-border .form-control,\n.input-group.no-border .form-control + .input-group-prepend .input-group-text,\n.input-group.no-border .form-control + .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.3);\n  border: medium none; }\n  .form-group.no-border .form-control:focus, .form-group.no-border .form-control:active, .form-group.no-border .form-control:active,\n  .form-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n  .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n  .form-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n  .form-group.no-border .form-control + .input-group-append .input-group-text:focus,\n  .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n  .form-group.no-border .form-control + .input-group-append .input-group-text:active,\n  .input-group.no-border .form-control:focus,\n  .input-group.no-border .form-control:active,\n  .input-group.no-border .form-control:active,\n  .input-group.no-border .form-control + .input-group-prepend .input-group-text:focus,\n  .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n  .input-group.no-border .form-control + .input-group-prepend .input-group-text:active,\n  .input-group.no-border .form-control + .input-group-append .input-group-text:focus,\n  .input-group.no-border .form-control + .input-group-append .input-group-text:active,\n  .input-group.no-border .form-control + .input-group-append .input-group-text:active {\n    border: medium none;\n    background-color: rgba(222, 222, 222, 0.5); }\n\n.form-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.form-group.no-border .form-control:focus + .input-group-append .input-group-text,\n.input-group.no-border .form-control:focus + .input-group-prepend .input-group-text,\n.input-group.no-border .form-control:focus + .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.5); }\n\n.form-group.no-border .input-group-prepend .input-group-text,\n.form-group.no-border .input-group-append .input-group-text,\n.input-group.no-border .input-group-prepend .input-group-text,\n.input-group.no-border .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.3);\n  border: none; }\n\n.has-error .form-control-feedback, .has-error .control-label {\n  color: #ef8157; }\n\n.has-success .form-control-feedback, .has-success .control-label {\n  color: #6bd098; }\n\n.input-group.has-danger .input-group-prepend {\n  border-radius: 4px; }\n  .input-group.has-danger .input-group-prepend .input-group-text {\n    border: 1px solid #ef8157;\n    border-right: none; }\n\n.input-group.has-danger .error {\n  display: block;\n  width: 100%;\n  color: #ef8157;\n  margin-top: 3px; }\n\n.input-group.has-success .input-group-prepend {\n  border-radius: 4px; }\n  .input-group.has-success .input-group-prepend .input-group-text {\n    border-right: none; }\n\n.input-group-focus .input-group-prepend .input-group-text,\n.input-group-focus .input-group-append .input-group-text {\n  background-color: #FFFFFF;\n  border-color: #9A9A9A; }\n\n.input-group-focus.no-border .input-group-prepend .input-group-text,\n.input-group-focus.no-border .input-group-append .input-group-text {\n  background-color: rgba(222, 222, 222, 0.5); }\n\n.input-group-focus.has-danger .input-group-append .input-group-text,\n.input-group-focus.has-danger .input-group-prepend .input-group-text {\n  background-color: #FFC0A4; }\n\n.input-group-focus.has-success .input-group-append .input-group-text,\n.input-group-focus.has-success .input-group-prepend .input-group-text {\n  background-color: #ABF3CB;\n  border: 1px solid #6bd098;\n  border-right: none; }\n\n.input-group-append .input-group-text,\n.input-group-prepend .input-group-text {\n  background-color: transparent;\n  border: 1px solid #E3E3E3;\n  color: #66615B;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out; }\n  .input-group-append .input-group-text i,\n  .input-group-prepend .input-group-text i {\n    opacity: .5; }\n  .has-danger .input-group-append .input-group-text, .has-danger\n  .input-group-prepend .input-group-text {\n    background-color: #FFC0A4; }\n  .has-success .input-group-append .input-group-text, .has-success\n  .input-group-prepend .input-group-text {\n    background-color: #ABF3CB; }\n  .has-danger.input-group-focus .input-group-append .input-group-text, .has-danger.input-group-focus\n  .input-group-prepend .input-group-text {\n    background-color: #FFFFFF;\n    color: #ef8157; }\n  .has-success.input-group-focus .input-group-append .input-group-text, .has-success.input-group-focus\n  .input-group-prepend .input-group-text {\n    background-color: #FFFFFF;\n    color: #6bd098; }\n  .has-danger .form-control:focus + .input-group-append .input-group-text, .has-danger .form-control:focus +\n  .input-group-prepend .input-group-text {\n    color: #ef8157; }\n  .has-success .form-control:focus + .input-group-append .input-group-text, .has-success .form-control:focus +\n  .input-group-prepend .input-group-text {\n    color: #6bd098; }\n  .input-group-append .input-group-text + .form-control,\n  .input-group-append .input-group-text ~ .form-control,\n  .input-group-prepend .input-group-text + .form-control,\n  .input-group-prepend .input-group-text ~ .form-control {\n    padding: -0.5rem 0.7rem;\n    padding-left: 18px; }\n  .input-group-append .input-group-text i,\n  .input-group-prepend .input-group-text i {\n    width: 17px; }\n\n.input-group-append,\n.input-group-prepend {\n  margin: 0; }\n\n.input-group-append .input-group-text {\n  border-left: none; }\n\n.input-group-prepend .input-group-text {\n  border-right: none; }\n\n.input-group,\n.form-group {\n  margin-bottom: 10px;\n  position: relative; }\n  .input-group .form-control-static,\n  .form-group .form-control-static {\n    margin-top: 9px; }\n  .input-group.has-danger .error,\n  .form-group.has-danger .error {\n    color: #ef8157; }\n\n.input-group[disabled] .input-group-prepend .input-group-text,\n.input-group[disabled] .input-group-append .input-group-text {\n  background-color: #E3E3E3; }\n\n.input-group .form-control:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {\n  border-radius: 4px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0 none; }\n\n.input-group .form-control:first-child,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-right: 0 none; }\n\n.input-group .form-control:last-child,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child) {\n  border-left: 0 none; }\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: #E3E3E3;\n  color: #66615B;\n  cursor: not-allowed; }\n\n.input-group-btn .btn {\n  border-width: 1px;\n  padding: 11px 0.7rem; }\n\n.input-group-btn .btn-default:not(.btn-fill) {\n  border-color: #DDDDDD; }\n\n.input-group-btn:last-child > .btn {\n  margin-left: 0; }\n\ntextarea.form-control {\n  max-width: 100%;\n  max-height: 80px;\n  padding: 10px 10px 0 0;\n  resize: none;\n  border: none;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px;\n  line-height: 2; }\n\n.has-success.form-group .form-control,\n.has-success.form-group.no-border .form-control,\n.has-danger.form-group .form-control,\n.has-danger.form-group.no-border .form-control {\n  padding-right: 32px; }\n\n.form.form-newsletter .form-group {\n  float: left;\n  width: 78%;\n  margin-right: 2%;\n  margin-top: 9px; }\n\n.input-group .input-group-btn {\n  padding: 0 12px; }\n\n.form-group input[type=file] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100; }\n\n.form-text {\n  font-size: 0.8571em; }\n\n.form-control-lg {\n  padding: 0;\n  font-size: inherit;\n  line-height: 0;\n  border-radius: 0; }\n\n.form-horizontal .col-form-label,\n.form-horizontal .label-on-right {\n  padding: 10px 5px 0 15px;\n  text-align: right;\n  max-width: 180px; }\n\n.form-horizontal .checkbox-radios {\n  margin-bottom: 15px; }\n  .form-horizontal .checkbox-radios .form-check:first-child {\n    margin-top: 8px; }\n\n.form-horizontal .label-on-right {\n  text-align: left;\n  padding: 10px 15px 0 5px; }\n\n.form-horizontal .form-check-inline {\n  margin-top: 6px; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: \"Montserrat\", \"Helvetica Neue\", Arial, sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400; }\n\na {\n  color: #51cbce; }\n  a:hover, a:focus {\n    color: #51cbce; }\n\nh1, .h1 {\n  font-size: 3.5em;\n  line-height: 1.15;\n  margin-bottom: 30px; }\n  h1 small, .h1 small {\n    font-weight: 700;\n    text-transform: uppercase;\n    opacity: .8; }\n\nh2, .h2 {\n  font-size: 2.5em;\n  margin-bottom: 30px; }\n\nh3, .h3 {\n  font-size: 2em;\n  margin-bottom: 30px;\n  line-height: 1.4em; }\n\nh4, .h4 {\n  font-size: 1.714em;\n  line-height: 1.45em;\n  margin-top: 30px;\n  margin-bottom: 15px; }\n  h4 + .category,\n  h4.title + .category, .h4 + .category,\n  .h4.title + .category {\n    margin-top: -10px; }\n\nh5, .h5 {\n  font-size: 1.57em;\n  line-height: 1.4em;\n  margin-bottom: 15px; }\n\nh6, .h6 {\n  font-size: 1em;\n  font-weight: 700;\n  text-transform: uppercase; }\n\np.description {\n  font-size: 1.14em; }\n\n.title {\n  font-weight: 700; }\n  .title.title-up {\n    text-transform: uppercase; }\n    .title.title-up a {\n      color: #2c2c2c;\n      text-decoration: none; }\n  .title + .category {\n    margin-top: -10px; }\n\n.description,\n.card-description,\n.footer-big p,\n.card .footer .stats {\n  color: #9A9A9A;\n  font-weight: 300; }\n\n.category,\n.card-category {\n  text-transform: capitalize;\n  font-weight: 400;\n  color: #9A9A9A;\n  font-size: 0.7142em; }\n\n.card-category {\n  font-size: 1em; }\n\n.text-primary,\na.text-primary:focus, a.text-primary:hover {\n  color: #51cbce !important; }\n\n.text-info,\na.text-info:focus, a.text-info:hover {\n  color: #51bcda !important; }\n\n.text-success,\na.text-success:focus, a.text-success:hover {\n  color: #6bd098 !important; }\n\n.text-warning,\na.text-warning:focus, a.text-warning:hover {\n  color: #fbc658 !important; }\n\n.text-danger,\na.text-danger:focus, a.text-danger:hover {\n  color: #ef8157 !important; }\n\n.text-gray,\na.text-gray:focus, a.text-gray:hover {\n  color: #E3E3E3 !important; }\n\n.blockquote {\n  border-left: none;\n  border: 1px solid #66615B;\n  padding: 20px;\n  font-size: 1.1em;\n  line-height: 1.8; }\n  .blockquote small {\n    color: #66615B;\n    font-size: 0.8571em;\n    text-transform: uppercase; }\n  .blockquote.blockquote-primary {\n    border-color: #51cbce;\n    color: #51cbce; }\n    .blockquote.blockquote-primary small {\n      color: #51cbce; }\n  .blockquote.blockquote-danger {\n    border-color: #ef8157;\n    color: #ef8157; }\n    .blockquote.blockquote-danger small {\n      color: #ef8157; }\n  .blockquote.blockquote-white {\n    border-color: rgba(255, 255, 255, 0.8);\n    color: #FFFFFF; }\n    .blockquote.blockquote-white small {\n      color: rgba(255, 255, 255, 0.8); }\n\nbody {\n  color: #2c2c2c;\n  font-size: 14px;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Arial, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n\n.main {\n  position: relative;\n  background: #FFFFFF; }\n\n/* Animations */\n.nav-pills .nav-link,\n.navbar,\n.nav-tabs .nav-link,\n.sidebar .nav a,\n.sidebar .nav a i,\n.animation-transition-general,\n.sidebar .navbar-minimize,\n.off-canvas-sidebar .navbar-minimize,\n.sidebar .logo a.logo-mini,\n.sidebar .logo a.logo-normal,\n.off-canvas-sidebar .logo a.logo-mini,\n.off-canvas-sidebar .logo a.logo-normal,\n.tag,\n.tag [data-role=\"remove\"],\n.animation-transition-general,\n.sidebar .navbar-minimize,\n.off-canvas-sidebar .navbar-minimize,\n.sidebar .logo a.logo-mini,\n.sidebar .logo a.logo-normal,\n.off-canvas-sidebar .logo a.logo-mini,\n.off-canvas-sidebar .logo a.logo-normal {\n  transition: all 300ms ease 0s; }\n\n.dropdown-toggle:after,\n.bootstrap-switch-label:before,\n.caret {\n  transition: all 150ms ease 0s; }\n\n.dropdown-toggle[aria-expanded=\"true\"]:after,\na[data-toggle=\"collapse\"][aria-expanded=\"true\"] .caret,\n.card-collapse .card a[data-toggle=\"collapse\"][aria-expanded=\"true\"] i,\n.card-collapse .card a[data-toggle=\"collapse\"].expanded i {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.button-bar {\n  display: block;\n  position: relative;\n  width: 22px;\n  height: 1px;\n  border-radius: 1px;\n  background: #FFFFFF; }\n  .button-bar + .button-bar {\n    margin-top: 7px; }\n  .button-bar:nth-child(2) {\n    width: 17px; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid\\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.pull-left {\n  float: left; }\n\n.pull-right {\n  float: right; }\n\n.offline-doc .navbar.navbar-transparent {\n  padding-top: 25px;\n  border-bottom: none; }\n  .offline-doc .navbar.navbar-transparent .navbar-minimize {\n    display: none; }\n  .offline-doc .navbar.navbar-transparent .navbar-brand,\n  .offline-doc .navbar.navbar-transparent .collapse .navbar-nav .nav-link {\n    color: #FFFFFF !important; }\n\n.offline-doc .footer {\n  z-index: 3 !important; }\n\n.offline-doc .page-header .container {\n  z-index: 3; }\n\n.offline-doc .page-header:after {\n  background-color: rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 2; }\n\n.fixed-plugin .dropdown-menu li {\n  padding: 2px !important; }\n\n.badge.badge-default {\n  border-color: #66615B;\n  background-color: #66615B; }\n\n.badge.badge-primary {\n  border-color: #51cbce;\n  background-color: #51cbce; }\n\n.badge.badge-info {\n  border-color: #51bcda;\n  background-color: #51bcda; }\n\n.badge.badge-success {\n  border-color: #6bd098;\n  background-color: #6bd098; }\n\n.badge.badge-warning {\n  border-color: #fbc658;\n  background-color: #fbc658; }\n\n.badge.badge-danger {\n  border-color: #ef8157;\n  background-color: #ef8157; }\n\n.badge.badge-neutral {\n  border-color: #FFFFFF;\n  background-color: #FFFFFF;\n  color: inherit; }\n\n.card-user form .form-group {\n  margin-bottom: 20px; }\n\n.from-check,\n.form-check-radio {\n  margin-bottom: 12px;\n  position: relative; }\n\n.form-check {\n  padding-left: 0;\n  margin-bottom: .5rem; }\n  .form-check .form-check-label {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    padding-left: 35px;\n    line-height: 26px;\n    margin-bottom: 0; }\n  .form-check .form-check-sign::before,\n  .form-check .form-check-sign::after {\n    content: \" \";\n    display: inline-block;\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    left: 0;\n    cursor: pointer;\n    border-radius: 6px;\n    top: 0;\n    background-color: #AAA7A4;\n    transition: opacity 0.3s linear; }\n  .form-check .form-check-sign::after {\n    font-family: 'FontAwesome';\n    content: \"\\f00c\";\n    top: -1px;\n    text-align: center;\n    font-size: 15px;\n    opacity: 0;\n    color: #FFF;\n    border: 0;\n    background-color: inherit; }\n  .form-check.disabled .form-check-label {\n    color: #9A9A9A;\n    opacity: .5;\n    cursor: not-allowed; }\n\n.form-check input[type=\"checkbox\"],\n.form-check-radio input[type=\"radio\"] {\n  opacity: 0;\n  position: absolute;\n  visibility: hidden; }\n\n.form-check input[type=\"checkbox\"]:checked + .form-check-sign::after {\n  opacity: 1; }\n\n.form-control input[type=\"checkbox\"]:disabled + .form-check-sign::before,\n.checkbox input[type=\"checkbox\"]:disabled + .form-check-sign::after {\n  cursor: not-allowed; }\n\n.form-check .form-check-label input[type=\"checkbox\"]:disabled + .form-check-sign,\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign {\n  pointer-events: none !important; }\n\n.form-check-radio {\n  margin-left: -3px; }\n  .form-check-radio .form-check-label {\n    padding-left: 2rem; }\n  .form-check-radio.disabled .form-check-label {\n    color: #9A9A9A;\n    opacity: .5;\n    cursor: not-allowed; }\n\n.form-check-radio .form-check-sign::before {\n  font-family: 'FontAwesome';\n  content: \"\\f10c\";\n  font-size: 22px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  position: absolute;\n  opacity: .50;\n  left: 5px;\n  top: -5px; }\n\n.form-check-label input[type=\"checkbox\"]:checked + .form-check-sign:before {\n  background-color: #66615B; }\n\n.form-check-radio input[type=\"radio\"] + .form-check-sign:after,\n.form-check-radio input[type=\"radio\"] {\n  opacity: 0;\n  transition: opacity 0.3s linear;\n  content: \" \";\n  display: block; }\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n  font-family: 'FontAwesome';\n  content: \"\\f192\";\n  top: -5px;\n  position: absolute;\n  left: 5px;\n  opacity: 1;\n  font-size: 22px; }\n\n.form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n  opacity: 1; }\n\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::before,\n.form-check-radio input[type=\"radio\"]:disabled + .form-check-sign::after {\n  color: #9A9A9A; }\n\n.navbar {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  min-height: 53px;\n  margin-bottom: 20px; }\n  .navbar a {\n    vertical-align: middle; }\n    .navbar a:not(.btn):not(.dropdown-item) {\n      color: #FFFFFF; }\n    .navbar a.dropdown-item {\n      color: #66615B; }\n  .navbar.bg-white .input-group .form-control,\n  .navbar.bg-white .input-group.no-border .form-control {\n    color: #66615B; }\n    .navbar.bg-white .input-group .form-control::-moz-placeholder,\n    .navbar.bg-white .input-group.no-border .form-control::-moz-placeholder {\n      color: #66615B; }\n    .navbar.bg-white .input-group .form-control:-ms-input-placeholder,\n    .navbar.bg-white .input-group.no-border .form-control:-ms-input-placeholder {\n      color: #66615B; }\n    .navbar.bg-white .input-group .form-control::-webkit-input-placeholder,\n    .navbar.bg-white .input-group.no-border .form-control::-webkit-input-placeholder {\n      color: #66615B; }\n  .navbar.bg-white .input-group-prepend .input-group-text i,\n  .navbar.bg-white .input-group-append .input-group-text i {\n    color: #66615B;\n    opacity: .5; }\n  .navbar .form-group,\n  .navbar .input-group {\n    margin: 0;\n    margin-left: -3px;\n    margin-right: 5px; }\n    .navbar .form-group .form-group-addon,\n    .navbar .form-group .input-group-prepend .input-group-text,\n    .navbar .form-group .input-group-append .input-group-text,\n    .navbar .input-group .form-group-addon,\n    .navbar .input-group .input-group-prepend .input-group-text,\n    .navbar .input-group .input-group-append .input-group-text {\n      color: #66615B; }\n      .navbar .form-group .form-group-addon i,\n      .navbar .form-group .input-group-prepend .input-group-text i,\n      .navbar .form-group .input-group-append .input-group-text i,\n      .navbar .input-group .form-group-addon i,\n      .navbar .input-group .input-group-prepend .input-group-text i,\n      .navbar .input-group .input-group-append .input-group-text i {\n        opacity: 1; }\n    .navbar .form-group.no-border .form-control,\n    .navbar .input-group.no-border .form-control {\n      color: #66615B; }\n      .navbar .form-group.no-border .form-control::-moz-placeholder,\n      .navbar .input-group.no-border .form-control::-moz-placeholder {\n        color: #66615B; }\n      .navbar .form-group.no-border .form-control:-ms-input-placeholder,\n      .navbar .input-group.no-border .form-control:-ms-input-placeholder {\n        color: #66615B; }\n      .navbar .form-group.no-border .form-control::-webkit-input-placeholder,\n      .navbar .input-group.no-border .form-control::-webkit-input-placeholder {\n        color: #66615B; }\n  .navbar p {\n    display: inline-block;\n    margin: 0;\n    line-height: 1.8em;\n    font-size: 1em;\n    font-weight: 400; }\n  .navbar.navbar-absolute {\n    position: absolute;\n    width: 100%;\n    padding-top: 10px;\n    z-index: 1029; }\n  .documentation .navbar.fixed-top {\n    left: 0;\n    width: auto;\n    width: initial; }\n  .navbar .navbar-wrapper {\n    display: -webkit-inline-flex;\n    display: inline-flex;\n    -webkit-align-items: center;\n            align-items: center; }\n    .navbar .navbar-wrapper .navbar-minimize {\n      padding-right: 10px; }\n      .navbar .navbar-wrapper .navbar-minimize .btn {\n        margin: 0; }\n    .navbar .navbar-wrapper .navbar-toggle .navbar-toggler {\n      padding-left: 0; }\n    .navbar .navbar-wrapper .navbar-toggle:hover .navbar-toggler-bar.bar2 {\n      width: 22px; }\n  .navbar .navbar-nav.navbar-logo {\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 49px;\n    top: -4px; }\n  .navbar .navbar-nav .nav-link.btn {\n    padding: 11px 22px; }\n    .navbar .navbar-nav .nav-link.btn.btn-lg {\n      padding: 15px 48px; }\n    .navbar .navbar-nav .nav-link.btn.btn-sm {\n      padding: 5px 15px; }\n  .navbar .navbar-nav .nav-link {\n    text-transform: uppercase;\n    font-size: 0.7142em;\n    padding: 0.5rem 0.7rem;\n    line-height: 1.625rem;\n    margin-right: 3px; }\n    .navbar .navbar-nav .nav-link i.fa + p,\n    .navbar .navbar-nav .nav-link i.nc-icon + p {\n      margin-left: 3px; }\n    .navbar .navbar-nav .nav-link i.fa,\n    .navbar .navbar-nav .nav-link i.nc-icon {\n      font-size: 18px;\n      position: relative;\n      top: 3px;\n      text-align: center;\n      width: 21px; }\n    .navbar .navbar-nav .nav-link i.nc-icon {\n      top: 4px;\n      font-size: 16px; }\n    .navbar .navbar-nav .nav-link.profile-photo .profile-photo-small {\n      width: 27px;\n      height: 27px; }\n    .navbar .navbar-nav .nav-link.disabled {\n      opacity: .5;\n      color: #FFFFFF; }\n  .navbar .navbar-nav .nav-item.active .nav-link:not(.btn),\n  .navbar .navbar-nav .nav-item .nav-link:not(.btn):focus,\n  .navbar .navbar-nav .nav-item .nav-link:not(.btn):hover,\n  .navbar .navbar-nav .nav-item .nav-link:not(.btn):active {\n    border-radius: 3px;\n    color: #66615B; }\n  .navbar .logo-container {\n    width: 27px;\n    height: 27px;\n    overflow: hidden;\n    margin: 0 auto;\n    border-radius: 50%;\n    border: 1px solid transparent; }\n  .navbar .navbar-brand {\n    text-transform: capitalize;\n    font-size: 20px;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    line-height: 1.625rem; }\n  .navbar .navbar-toggler {\n    width: 37px;\n    height: 27px;\n    vertical-align: middle;\n    outline: 0;\n    cursor: pointer; }\n    .navbar .navbar-toggler .navbar-toggler-bar.navbar-kebab {\n      width: 3px;\n      height: 3px;\n      border-radius: 50%;\n      margin: 0 auto; }\n  .navbar .button-dropdown .navbar-toggler-bar:nth-child(2) {\n    width: 17px; }\n  .navbar.navbar-transparent {\n    background-color: transparent !important;\n    box-shadow: none;\n    border-bottom: 1px solid #ddd; }\n    .navbar.navbar-transparent a:not(.dropdown-item):not(.btn) {\n      color: #66615B; }\n      .navbar.navbar-transparent a:not(.dropdown-item):not(.btn).disabled {\n        opacity: .5;\n        color: #66615B; }\n    .navbar.navbar-transparent .button-bar {\n      background: #66615B; }\n    .navbar.navbar-transparent .nav-item .nav-link:not(.btn) {\n      color: #66615B; }\n    .navbar.navbar-transparent .nav-item.active .nav-link:not(.btn),\n    .navbar.navbar-transparent .nav-item .nav-link:not(.btn):focus,\n    .navbar.navbar-transparent .nav-item .nav-link:not(.btn):hover,\n    .navbar.navbar-transparent .nav-item .nav-link:not(.btn):focus:hover,\n    .navbar.navbar-transparent .nav-item .nav-link:not(.btn):active {\n      color: #51cbce; }\n  .navbar.bg-white a:not(.dropdown-item):not(.btn) {\n    color: #66615B; }\n    .navbar.bg-white a:not(.dropdown-item):not(.btn).disabled {\n      opacity: .5;\n      color: #66615B; }\n  .navbar.bg-white .button-bar {\n    background: #66615B; }\n  .navbar.bg-white .nav-item.active .nav-link:not(.btn),\n  .navbar.bg-white .nav-item .nav-link:not(.btn):focus,\n  .navbar.bg-white .nav-item .nav-link:not(.btn):hover,\n  .navbar.bg-white .nav-item .nav-link:not(.btn):active {\n    color: #51bcda; }\n  .navbar.bg-white .logo-container {\n    border: 1px solid #66615B; }\n  .navbar .navbar-collapse .nav-item a {\n    font-size: 14px; }\n\n.bg-default {\n  background-color: #66615B !important; }\n\n.bg-primary {\n  background-color: #51cbce !important; }\n\n.bg-info {\n  background-color: #51bcda !important; }\n\n.bg-success {\n  background-color: #6bd098 !important; }\n\n.bg-danger {\n  background-color: #ef8157 !important; }\n\n.bg-warning {\n  background-color: #fbc658 !important; }\n\n.bg-white {\n  background-color: #FFFFFF !important; }\n\n.page-header {\n  min-height: 100vh;\n  max-height: 1000px;\n  padding: 0;\n  color: #FFFFFF;\n  position: relative; }\n  .page-header .page-header-image {\n    position: absolute;\n    background-size: cover;\n    background-position: center center;\n    width: 100%;\n    height: 100%;\n    z-index: -1; }\n  .page-header .content-center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 2;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center;\n    color: #FFFFFF;\n    padding: 0 15px;\n    width: 100%;\n    max-width: 880px; }\n  .page-header footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%; }\n  .page-header .container {\n    height: 100%;\n    z-index: 1; }\n  .page-header .category,\n  .page-header .description {\n    color: rgba(255, 255, 255, 0.8); }\n  .page-header.page-header-small {\n    min-height: 60vh;\n    max-height: 440px; }\n  .page-header.page-header-mini {\n    min-height: 40vh;\n    max-height: 340px; }\n  .page-header .title {\n    margin-bottom: 15px; }\n  .page-header .title + h4 {\n    margin-top: 10px; }\n  .page-header:after, .page-header:before {\n    position: absolute;\n    z-index: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    left: 0;\n    top: 0;\n    content: \"\"; }\n  .page-header:before {\n    background-color: rgba(0, 0, 0, 0.3); }\n  .page-header[filter-color=\"orange\"] {\n    background: rgba(44, 44, 44, 0.2);\n    /* For browsers that do not support gradients */\n    /* For Safari 5.1 to 6.0 */\n    /* For Opera 11.1 to 12.0 */\n    /* For Firefox 3.6 to 15 */\n    background: linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6));\n    /* Standard syntax */ }\n\n.dropdown .dropdown-menu,\n.dropup .dropdown-menu,\n.bootstrap-select .dropdown-menu {\n  display: block;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  box-shadow: 1px 2px 7px 1px rgba(0, 0, 0, 0.125);\n  visibility: hidden;\n  position: absolute;\n  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.3s ease 0s, height 0s linear 0.35s; }\n  .dropdown .dropdown-menu[x-placement=\"top-start\"],\n  .dropup .dropdown-menu[x-placement=\"top-start\"],\n  .bootstrap-select .dropdown-menu[x-placement=\"top-start\"] {\n    -webkit-transform: translate3d(-20px, 0px, 0) !important;\n    transform: translate3d(-20px, 0px, 0) !important; }\n  .dropdown .dropdown-menu[x-placement=\"bottom-start\"],\n  .dropup .dropdown-menu[x-placement=\"bottom-start\"],\n  .bootstrap-select .dropdown-menu[x-placement=\"bottom-start\"] {\n    -webkit-transform: translate3d(-20px, 0px, 0) !important;\n    transform: translate3d(-20px, 0px, 0) !important; }\n\n.dropdown.show .dropdown-menu,\n.dropup.show .dropdown-menu,\n.bootstrap-select.show .dropdown-menu {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  visibility: visible; }\n  .dropdown.show .dropdown-menu[x-placement=\"top-start\"],\n  .dropup.show .dropdown-menu[x-placement=\"top-start\"],\n  .bootstrap-select.show .dropdown-menu[x-placement=\"top-start\"] {\n    -webkit-transform: translate3d(-20px, -50px, 0) !important;\n    transform: translate3d(-20px, -50px, 0) !important;\n    top: auto !important;\n    bottom: 0 !important; }\n  .dropdown.show .dropdown-menu[x-placement=\"bottom-start\"],\n  .dropup.show .dropdown-menu[x-placement=\"bottom-start\"],\n  .bootstrap-select.show .dropdown-menu[x-placement=\"bottom-start\"] {\n    -webkit-transform: translate3d(-20px, 50px, 0) !important;\n    transform: translate3d(-20px, 50px, 0) !important;\n    bottom: auto !important;\n    top: 0 !important; }\n\n.dropup .dropdown-menu,\n.dropdown-btn .dropdown-menu {\n  -webkit-transform: translate3d(-20px, 0px, 0) !important;\n  transform: translate3d(-20px, 0px, 0) !important;\n  top: auto !important;\n  bottom: 0 !important; }\n\n.dropup.show .dropdown-menu,\n.dropdown-btn.show .dropdown-menu {\n  opacity: 1;\n  visibility: visible; }\n  .dropup.show .dropdown-menu .dropdown-menu.inner,\n  .dropdown-btn.show .dropdown-menu .dropdown-menu.inner {\n    -webkit-transform: translate3d(0, 0px, 0) !important;\n    transform: translate3d(0, 0px, 0) !important; }\n\n.bootstrap-select.show .dropdown-menu.show[x-placement=\"top-start\"] {\n  -webkit-transform: translate3d(-20px, -60px, 0) !important;\n  transform: translate3d(-20px, -60px, 0) !important;\n  top: auto !important;\n  bottom: 0 !important; }\n\n.bootstrap-select.show .dropdown-menu.show li:last-child a:hover {\n  border-radius: 0 0 12px 12px; }\n\n.bootstrap-select.dropup.show:before {\n  top: -1px !important; }\n\n.bootstrap-select.dropup.show:after {\n  top: -2px !important; }\n\n.dropdown-menu {\n  background-color: #FFFFFF;\n  border: 0 none;\n  border-radius: 12px;\n  margin-top: 10px;\n  padding: 0px; }\n  .dropdown-menu .divider {\n    background-color: #F1EAE0;\n    margin: 0px; }\n  .dropdown-menu .dropdown-header {\n    color: #9A9A9A;\n    font-size: 0.8571em;\n    padding: 10px 15px; }\n  .dropdown-menu .no-notification {\n    color: #9A9A9A;\n    font-size: 1.2em;\n    padding: 30px 30px;\n    text-align: center; }\n  .dropdown-menu .dropdown-item {\n    color: #66615b;\n    font-size: 14px;\n    padding: 10px 45px 10px 15px;\n    clear: both;\n    white-space: nowrap;\n    width: 100%;\n    display: block; }\n    .dropdown-menu .dropdown-item img {\n      margin-top: -3px; }\n  .dropdown-menu .dropdown-item:focus {\n    outline: 0 !important; }\n  .btn-group.select .dropdown-menu {\n    min-width: 100%; }\n  .dropdown-menu .dropdown-item:first-child {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px; }\n  .dropdown-menu .dropdown-item:last-child {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px; }\n  .select .dropdown-menu .dropdown-item:first-child {\n    border-radius: 0;\n    border-bottom: 0 none; }\n  .dropdown-menu .dropdown-item:hover,\n  .dropdown-menu .dropdown-item:focus {\n    color: #FFFFFF !important;\n    opacity: 1;\n    text-decoration: none; }\n  .dropdown-menu .dropdown-item:hover,\n  .dropdown-menu .dropdown-item:focus {\n    background-color: #66615B; }\n  .dropdown-menu.dropdown-primary .dropdown-item:hover,\n  .dropdown-menu.dropdown-primary .dropdown-item:focus {\n    background-color: #6dd3d6; }\n  .dropdown-menu.dropdown-info .dropdown-item:hover,\n  .dropdown-menu.dropdown-info .dropdown-item:focus {\n    background-color: #6ec7e0; }\n  .dropdown-menu.dropdown-success .dropdown-item:hover,\n  .dropdown-menu.dropdown-success .dropdown-item:focus {\n    background-color: #86d9ab; }\n  .dropdown-menu.dropdown-warning .dropdown-item:hover,\n  .dropdown-menu.dropdown-warning .dropdown-item:focus {\n    background-color: #fcd27b; }\n  .dropdown-menu.dropdown-danger .dropdown-item:hover,\n  .dropdown-menu.dropdown-danger .dropdown-item:focus {\n    background-color: #f29978; }\n\n.dropdown-divider {\n  margin: 0 !important; }\n\n.btn-group.select.open {\n  overflow: visible; }\n\n.dropdown-menu-right {\n  right: -2px;\n  left: auto; }\n\n.navbar-nav .dropdown-menu:before,\n.dropdown .dropdown-menu[x-placement=\"bottom-start\"]:before,\n.dropdown .dropdown-menu[x-placement=\"bottom-end\"]:before,\n.card.card-just-text .dropdown .dropdown-menu:before,\n.card-just-text .dropdown .dropdown-menu:before,\n.dropdown-btn .dropdown-menu:before {\n  border-bottom: 11px solid #F1EAE0;\n  border-left: 11px solid rgba(0, 0, 0, 0);\n  border-right: 11px solid rgba(0, 0, 0, 0);\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  right: 12px;\n  top: -12px; }\n\n.navbar-nav .dropdown-menu:after,\n.dropdown .dropdown-menu[x-placement=\"bottom-start\"]:after,\n.dropdown .dropdown-menu[x-placement=\"bottom-end\"]:after,\n.card.card-just-text .dropdown .dropdown-menu:after,\n.card-just-text .dropdown .dropdown-menu:after,\n.dropdown-btn .dropdown-menu:after {\n  border-bottom: 11px solid #FFFFFF;\n  border-left: 11px solid rgba(0, 0, 0, 0);\n  border-right: 11px solid rgba(0, 0, 0, 0);\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  right: 12px;\n  top: -11px; }\n\n.dropdown .dropdown-menu.dropdown-notification[x-placement=\"top-start\"]:before,\n.dropdown .dropdown-menu.dropdown-notification[x-placement=\"bottom-start\"]:before {\n  left: 30px !important;\n  right: auto; }\n\n.dropdown .dropdown-menu.dropdown-notification[x-placement=\"top-start\"]:after,\n.dropdown .dropdown-menu.dropdown-notification[x-placement=\"bottom-start\"]:after {\n  left: 30px !important;\n  right: auto; }\n\n@media screen and (min-width: 768px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .navbar-search-form {\n    display: none; }\n  .navbar-nav .dropdown-item .dropdown-menu,\n  .dropdown .dropdown-menu,\n  .dropdown-btn .dropdown-menu {\n    -webkit-transform: translate3d(0px, -40px, 0px);\n            transform: translate3d(0px, -40px, 0px);\n    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.3s ease 0s, height 0s linear 0.35s; }\n  .navbar-nav .dropdown-item.show .dropdown-menu,\n  .dropdown.show .dropdown-menu,\n  .dropdown-btn.show .dropdown-menu {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    visibility: visible !important; }\n  .bootstrap-select .dropdown-menu {\n    transition: all 150ms linear; }\n  .bootstrap-datetimepicker-widget {\n    visibility: visible !important; }\n  .bootstrap-select .show .dropdown-menu {\n    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.3s ease 0s, height 0s linear 0.35s;\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px); }\n  .navbar-nav.navbar-right li .dropdown-menu:before,\n  .navbar-nav.navbar-right li .dropdown-menu:after {\n    left: auto;\n    right: 12px; }\n  .footer:not(.footer-big) nav ul li:first-child {\n    margin-left: 0; }\n  body > .navbar-collapse.collapse {\n    display: none !important; } }\n\n.dropdown-sharing .dropup-item {\n  color: #66615b;\n  font-size: 14px; }\n  .dropdown-sharing .dropup-item .social-line {\n    line-height: 28px;\n    padding: 10px 20px 5px 20px !important; }\n    .dropdown-sharing .dropup-item .social-line [class*=\"icon-\"] {\n      font-size: 20px; }\n  .dropdown-sharing .dropup-item:last-child {\n    margin: 0 13px;\n    display: block; }\n  .dropdown-sharing .dropup-item .btn {\n    margin: 10px; }\n\n.dropdown-sharing .dropup-item:hover .social-line,\n.dropdown-sharing .dropup-item:hover .action-line,\n.dropdown-sharing .dropup-item:focus .social-line,\n.dropdown-sharing .dropup-item:focus .action-line {\n  background-color: #FFFFFF;\n  color: #66615b;\n  opacity: 1;\n  text-decoration: none; }\n\n.show .dropdown-sharing,\n.show .dropdown-actions {\n  margin-bottom: 1px; }\n\n.dropdown-actions .dropdown-item {\n  margin: -15px 35px; }\n  .dropdown-actions .dropdown-item .action-line {\n    padding: 5px 10px;\n    line-height: 24px;\n    font-weight: bold; }\n    .dropdown-actions .dropdown-item .action-line [class*=\"icon-\"] {\n      font-size: 24px; }\n    .dropdown-actions .dropdown-item .action-line .col-sm-9 {\n      line-height: 34px; }\n  .dropdown-actions .dropdown-item .link-danger {\n    color: #ef8157; }\n    .dropdown-actions .dropdown-item .link-danger:hover, .dropdown-actions .dropdown-item .link-danger:active, .dropdown-actions .dropdown-item .link-danger:focus {\n      color: #ef8157; }\n\n.dropdown-actions li:hover a,\n.dropdown-actions li:focus a {\n  color: #66615b;\n  opacity: 1;\n  text-decoration: none; }\n\n.dropdown-actions .action-line .icon-simple {\n  margin-left: -15px; }\n\n.dropdown .dropdown-menu[x-placement=\"top-start\"]:before,\n.dropdown .dropdown-menu[x-placement=\"top-end\"]:before,\n.dropup .dropdown-menu:before {\n  border-top: 11px solid #DCD9D1;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  right: 12px;\n  bottom: -12px; }\n\n.dropdown .dropdown-menu[x-placement=\"top-start\"]:after,\n.dropdown .dropdown-menu[x-placement=\"top-end\"]:after,\n.dropup .dropdown-menu:after {\n  border-top: 11px solid #FFF;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  right: 12px;\n  bottom: -11px; }\n\n.dropup .dropdown-toggle:after,\n.dropdown .dropdown-toggle:after {\n  margin-left: 0; }\n\n.dropdown-notification .dropdown-notification-list .notification-item {\n  border-bottom: 1px solid #F1EAE0;\n  font-size: 16px;\n  color: #66615b; }\n  .dropdown-notification .dropdown-notification-list .notification-item .notification-text {\n    padding-left: 40px;\n    position: relative;\n    min-width: 330px;\n    min-height: 70px;\n    white-space: normal; }\n    .dropdown-notification .dropdown-notification-list .notification-item .notification-text .label {\n      display: block;\n      position: absolute;\n      top: 50%;\n      margin-top: -12px;\n      left: 7px; }\n    .dropdown-notification .dropdown-notification-list .notification-item .notification-text .message {\n      font-size: 0.9em;\n      line-height: 0.7;\n      margin-left: 10px; }\n    .dropdown-notification .dropdown-notification-list .notification-item .notification-text .time {\n      color: #9A9A9A;\n      font-size: 0.7em;\n      margin-left: 10px; }\n  .dropdown-notification .dropdown-notification-list .notification-item .read-notification {\n    font-size: 12px;\n    opacity: 0;\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    margin-top: -12px; }\n  .dropdown-notification .dropdown-notification-list .notification-item:hover {\n    text-decoration: none; }\n    .dropdown-notification .dropdown-notification-list .notification-item:hover .notification-text {\n      color: #66615b;\n      background-color: #F0EFEB !important; }\n    .dropdown-notification .dropdown-notification-list .notification-item:hover .read-notification {\n      opacity: 1 !important; }\n\n.dropdown-notification .dropdown-footer {\n  background-color: #E8E7E3;\n  border-radius: 0 0 8px 8px; }\n  .dropdown-notification .dropdown-footer .dropdown-footer-menu {\n    list-style: outside none none;\n    padding: 0px 5px; }\n    .dropdown-notification .dropdown-footer .dropdown-footer-menu li {\n      display: inline-block;\n      text-align: left;\n      padding: 0 10px; }\n      .dropdown-notification .dropdown-footer .dropdown-footer-menu li a {\n        color: #9C9B99;\n        font-size: 0.9em;\n        line-height: 35px; }\n\n.alert {\n  border: 0;\n  border-radius: 3px;\n  color: #FFFFFF;\n  padding-top: .9rem;\n  padding-bottom: .9rem;\n  position: relative; }\n  .alert.alert-success {\n    background-color: #7ed6a5; }\n  .alert.alert-danger {\n    background-color: #f1926e; }\n  .alert.alert-warning {\n    background-color: #fccf71; }\n  .alert.alert-info {\n    background-color: #66c4de; }\n  .alert.alert-primary {\n    background-color: #65d1d4; }\n  .alert .close {\n    color: #FFFFFF;\n    opacity: .9;\n    text-shadow: none;\n    line-height: 0;\n    outline: 0; }\n    .alert .close i.fa,\n    .alert .close i.nc-icon {\n      font-size: 14px !important; }\n    .alert .close:hover, .alert .close:focus {\n      opacity: 1; }\n  .alert span[data-notify=\"icon\"] {\n    font-size: 27px;\n    display: block;\n    left: 19px;\n    position: absolute;\n    top: 50%;\n    margin-top: -11px; }\n  .alert button.close {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    margin-top: -13px;\n    width: 25px;\n    height: 25px;\n    padding: 3px; }\n  .alert .close ~ span {\n    display: block;\n    max-width: 89%; }\n  .alert.alert-with-icon {\n    padding-left: 65px; }\n\nimg {\n  max-width: 100%;\n  border-radius: 3px; }\n\n.img-raised {\n  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3); }\n\n/*--------------------------------\n\nnucleo-icons Web Font - built using nucleoapp.com\nLicense - nucleoapp.com/license/\n\n-------------------------------- */\n@font-face {\n  font-family: 'nucleo-icons';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*------------------------\n\tbase class definition\n-------------------------*/\n.nc-icon {\n  display: inline-block;\n  font: normal normal normal 14px/1 'nucleo-icons';\n  font-size: inherit;\n  speak: none;\n  text-transform: none;\n  /* Better Font Rendering */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/*------------------------\n  change icon size\n-------------------------*/\n.nc-icon.lg {\n  font-size: 1.33333333em;\n  vertical-align: -16%; }\n\n.nc-icon.x2 {\n  font-size: 2em; }\n\n.nc-icon.x3 {\n  font-size: 3em; }\n\n/*----------------------------------\n  add a square/circle background\n-----------------------------------*/\n.nc-icon.square,\n.nc-icon.circle {\n  padding: 0.33333333em;\n  vertical-align: -16%;\n  background-color: #eee; }\n\n.nc-icon.circle {\n  border-radius: 50%; }\n\n/*------------------------\n  list icons\n-------------------------*/\n.nc-icon-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n\n.nc-icon-ul > li {\n  position: relative; }\n\n.nc-icon-ul > li > .nc-icon {\n  position: absolute;\n  left: -1.57142857em;\n  top: 0.14285714em;\n  text-align: center; }\n\n.nc-icon-ul > li > .nc-icon.lg {\n  top: 0;\n  left: -1.35714286em; }\n\n.nc-icon-ul > li > .nc-icon.circle,\n.nc-icon-ul > li > .nc-icon.square {\n  top: -0.19047619em;\n  left: -1.9047619em; }\n\n/*------------------------\n  spinning icons\n-------------------------*/\n.nc-icon.spin {\n  -webkit-animation: nc-icon-spin 2s infinite linear;\n  animation: nc-icon-spin 2s infinite linear; }\n\n@-webkit-keyframes nc-icon-spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes nc-icon-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n/*------------------------\n  rotated/flipped icons\n-------------------------*/\n.nc-icon.rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.nc-icon.rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.nc-icon.rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.nc-icon.flip-y {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.nc-icon.flip-x {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n/*------------------------\n\tfont icons\n-------------------------*/\n.nc-air-baloon::before {\n  content: \"\\ea01\"; }\n\n.nc-album-2::before {\n  content: \"\\ea02\"; }\n\n.nc-alert-circle-i::before {\n  content: \"\\ea04\"; }\n\n.nc-align-center::before {\n  content: \"\\ea03\"; }\n\n.nc-align-left-2::before {\n  content: \"\\ea05\"; }\n\n.nc-ambulance::before {\n  content: \"\\ea06\"; }\n\n.nc-app::before {\n  content: \"\\ea07\"; }\n\n.nc-atom::before {\n  content: \"\\ea08\"; }\n\n.nc-badge::before {\n  content: \"\\ea09\"; }\n\n.nc-bag-16::before {\n  content: \"\\ea0a\"; }\n\n.nc-bank::before {\n  content: \"\\ea0b\"; }\n\n.nc-basket::before {\n  content: \"\\ea0c\"; }\n\n.nc-bell-55::before {\n  content: \"\\ea0d\"; }\n\n.nc-bold::before {\n  content: \"\\ea0e\"; }\n\n.nc-book-bookmark::before {\n  content: \"\\ea0f\"; }\n\n.nc-bookmark-2::before {\n  content: \"\\ea10\"; }\n\n.nc-box-2::before {\n  content: \"\\ea11\"; }\n\n.nc-box::before {\n  content: \"\\ea12\"; }\n\n.nc-briefcase-24::before {\n  content: \"\\ea13\"; }\n\n.nc-bulb-63::before {\n  content: \"\\ea14\"; }\n\n.nc-bullet-list-67::before {\n  content: \"\\ea15\"; }\n\n.nc-bus-front-12::before {\n  content: \"\\ea16\"; }\n\n.nc-button-pause::before {\n  content: \"\\ea17\"; }\n\n.nc-button-play::before {\n  content: \"\\ea18\"; }\n\n.nc-button-power::before {\n  content: \"\\ea19\"; }\n\n.nc-calendar-60::before {\n  content: \"\\ea1a\"; }\n\n.nc-camera-compact::before {\n  content: \"\\ea1b\"; }\n\n.nc-caps-small::before {\n  content: \"\\ea1c\"; }\n\n.nc-cart-simple::before {\n  content: \"\\ea1d\"; }\n\n.nc-chart-bar-32::before {\n  content: \"\\ea1e\"; }\n\n.nc-chart-pie-36::before {\n  content: \"\\ea1f\"; }\n\n.nc-chat-33::before {\n  content: \"\\ea20\"; }\n\n.nc-check-2::before {\n  content: \"\\ea21\"; }\n\n.nc-circle-10::before {\n  content: \"\\ea22\"; }\n\n.nc-cloud-download-93::before {\n  content: \"\\ea23\"; }\n\n.nc-cloud-upload-94::before {\n  content: \"\\ea24\"; }\n\n.nc-compass-05::before {\n  content: \"\\ea25\"; }\n\n.nc-controller-modern::before {\n  content: \"\\ea26\"; }\n\n.nc-credit-card::before {\n  content: \"\\ea27\"; }\n\n.nc-delivery-fast::before {\n  content: \"\\ea28\"; }\n\n.nc-diamond::before {\n  content: \"\\ea29\"; }\n\n.nc-email-85::before {\n  content: \"\\ea2a\"; }\n\n.nc-favourite-28::before {\n  content: \"\\ea2b\"; }\n\n.nc-glasses-2::before {\n  content: \"\\ea2c\"; }\n\n.nc-globe-2::before {\n  content: \"\\ea2d\"; }\n\n.nc-globe::before {\n  content: \"\\ea2e\"; }\n\n.nc-hat-3::before {\n  content: \"\\ea2f\"; }\n\n.nc-headphones::before {\n  content: \"\\ea30\"; }\n\n.nc-html5::before {\n  content: \"\\ea31\"; }\n\n.nc-image::before {\n  content: \"\\ea32\"; }\n\n.nc-istanbul::before {\n  content: \"\\ea33\"; }\n\n.nc-key-25::before {\n  content: \"\\ea34\"; }\n\n.nc-laptop::before {\n  content: \"\\ea35\"; }\n\n.nc-layout-11::before {\n  content: \"\\ea36\"; }\n\n.nc-lock-circle-open::before {\n  content: \"\\ea37\"; }\n\n.nc-map-big::before {\n  content: \"\\ea38\"; }\n\n.nc-minimal-down::before {\n  content: \"\\ea39\"; }\n\n.nc-minimal-left::before {\n  content: \"\\ea3a\"; }\n\n.nc-minimal-right::before {\n  content: \"\\ea3b\"; }\n\n.nc-minimal-up::before {\n  content: \"\\ea3c\"; }\n\n.nc-mobile::before {\n  content: \"\\ea3d\"; }\n\n.nc-money-coins::before {\n  content: \"\\ea3e\"; }\n\n.nc-note-03::before {\n  content: \"\\ea3f\"; }\n\n.nc-palette::before {\n  content: \"\\ea40\"; }\n\n.nc-paper::before {\n  content: \"\\ea41\"; }\n\n.nc-pin-3::before {\n  content: \"\\ea42\"; }\n\n.nc-planet::before {\n  content: \"\\ea43\"; }\n\n.nc-refresh-69::before {\n  content: \"\\ea44\"; }\n\n.nc-ruler-pencil::before {\n  content: \"\\ea45\"; }\n\n.nc-satisfied::before {\n  content: \"\\ea46\"; }\n\n.nc-scissors::before {\n  content: \"\\ea47\"; }\n\n.nc-send::before {\n  content: \"\\ea48\"; }\n\n.nc-settings-gear-65::before {\n  content: \"\\ea49\"; }\n\n.nc-settings::before {\n  content: \"\\ea4a\"; }\n\n.nc-share-66::before {\n  content: \"\\ea4b\"; }\n\n.nc-shop::before {\n  content: \"\\ea4c\"; }\n\n.nc-simple-add::before {\n  content: \"\\ea4d\"; }\n\n.nc-simple-delete::before {\n  content: \"\\ea4e\"; }\n\n.nc-simple-remove::before {\n  content: \"\\ea4f\"; }\n\n.nc-single-02::before {\n  content: \"\\ea50\"; }\n\n.nc-single-copy-04::before {\n  content: \"\\ea51\"; }\n\n.nc-sound-wave::before {\n  content: \"\\ea52\"; }\n\n.nc-spaceship::before {\n  content: \"\\ea53\"; }\n\n.nc-sun-fog-29::before {\n  content: \"\\ea54\"; }\n\n.nc-support-17::before {\n  content: \"\\ea55\"; }\n\n.nc-tablet-2::before {\n  content: \"\\ea56\"; }\n\n.nc-tag-content::before {\n  content: \"\\ea57\"; }\n\n.nc-tap-01::before {\n  content: \"\\ea58\"; }\n\n.nc-tie-bow::before {\n  content: \"\\ea59\"; }\n\n.nc-tile-56::before {\n  content: \"\\ea5a\"; }\n\n.nc-time-alarm::before {\n  content: \"\\ea5b\"; }\n\n.nc-touch-id::before {\n  content: \"\\ea5c\"; }\n\n.nc-trophy::before {\n  content: \"\\ea5d\"; }\n\n.nc-tv-2::before {\n  content: \"\\ea5e\"; }\n\n.nc-umbrella-13::before {\n  content: \"\\ea5f\"; }\n\n.nc-user-run::before {\n  content: \"\\ea60\"; }\n\n.nc-vector::before {\n  content: \"\\ea61\"; }\n\n.nc-watch-time::before {\n  content: \"\\ea62\"; }\n\n.nc-world-2::before {\n  content: \"\\ea63\"; }\n\n.nc-zoom-split::before {\n  content: \"\\ea64\"; }\n\n/* all icon font classes list here */\n.table .img-wrapper {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto; }\n\n.table .img-row {\n  max-width: 60px;\n  width: 60px; }\n\n.table .form-check {\n  margin: 0; }\n  .table .form-check label .form-check-sign::before,\n  .table .form-check label .form-check-sign::after {\n    top: -17px;\n    left: 4px; }\n\n.table .btn {\n  margin: 0; }\n\n.table small, .table .small {\n  font-weight: 300; }\n\n.card-tasks .card-body .table {\n  margin-bottom: 0; }\n  .card-tasks .card-body .table > thead > tr > th,\n  .card-tasks .card-body .table > tbody > tr > th,\n  .card-tasks .card-body .table > tfoot > tr > th,\n  .card-tasks .card-body .table > thead > tr > td,\n  .card-tasks .card-body .table > tbody > tr > td,\n  .card-tasks .card-body .table > tfoot > tr > td {\n    padding-top: 0;\n    padding-bottom: 0; }\n\n.table > thead > tr > th {\n  font-size: 14px;\n  font-weight: 700;\n  padding-bottom: 0;\n  text-transform: uppercase;\n  border: 0; }\n\n.table .radio,\n.table .checkbox {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  width: 15px; }\n  .table .radio .icons,\n  .table .checkbox .icons {\n    position: relative; }\n  .table .radio label:after, .table .radio label:before,\n  .table .checkbox label:after,\n  .table .checkbox label:before {\n    top: -17px;\n    left: -3px; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 7px;\n  vertical-align: middle; }\n\n.table .th-description {\n  max-width: 150px; }\n\n.table .td-price {\n  font-size: 26px;\n  font-weight: 300;\n  margin-top: 5px;\n  position: relative;\n  top: 4px;\n  text-align: right; }\n\n.table .td-total {\n  font-weight: 700;\n  font-size: 1.57em;\n  padding-top: 20px;\n  text-align: right; }\n\n.table .td-actions .btn {\n  margin: 0px; }\n\n.table > tbody > tr {\n  position: relative; }\n\n.table-shopping > thead > tr > th {\n  font-size: 1em;\n  text-transform: uppercase; }\n\n.table-shopping > tbody > tr > td {\n  font-size: 1em; }\n  .table-shopping > tbody > tr > td b {\n    display: block;\n    margin-bottom: 5px; }\n\n.table-shopping .td-name {\n  font-weight: 400;\n  font-size: 1.5em; }\n  .table-shopping .td-name small {\n    color: #9A9A9A;\n    font-size: 0.75em;\n    font-weight: 300; }\n\n.table-shopping .td-number {\n  font-weight: 300;\n  font-size: 1.714em; }\n\n.table-shopping .td-name {\n  min-width: 200px; }\n\n.table-shopping .td-number {\n  text-align: right;\n  min-width: 170px; }\n  .table-shopping .td-number small {\n    margin-right: 3px; }\n\n.table-shopping .img-container {\n  width: 120px;\n  max-height: 160px;\n  overflow: hidden;\n  display: block; }\n  .table-shopping .img-container img {\n    width: 100%; }\n\n.table-responsive {\n  overflow: scroll;\n  padding-bottom: 10px; }\n\n#tables .table-responsive {\n  margin-bottom: 30px; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh; }\n  .wrapper.wrapper-full-page {\n    min-height: 100vh;\n    height: auto; }\n\n.sidebar,\n.off-canvas-sidebar {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  bottom: 0;\n  width: 260px;\n  left: 0;\n  z-index: 1030;\n  border-right: 1px solid #ddd; }\n  .sidebar .sidebar-wrapper,\n  .off-canvas-sidebar .sidebar-wrapper {\n    position: relative;\n    height: calc(100vh - 75px);\n    overflow: auto;\n    width: 260px;\n    z-index: 4;\n    padding-bottom: 100px; }\n    .sidebar .sidebar-wrapper .dropdown .dropdown-backdrop,\n    .off-canvas-sidebar .sidebar-wrapper .dropdown .dropdown-backdrop {\n      display: none !important; }\n    .sidebar .sidebar-wrapper .navbar-form,\n    .off-canvas-sidebar .sidebar-wrapper .navbar-form {\n      border: none; }\n  .sidebar .navbar-minimize,\n  .off-canvas-sidebar .navbar-minimize {\n    position: absolute;\n    right: 20px;\n    top: 2px;\n    opacity: 1; }\n  .sidebar .logo-tim,\n  .off-canvas-sidebar .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n    .sidebar .logo-tim img,\n    .off-canvas-sidebar .logo-tim img {\n      width: 60px;\n      height: 60px; }\n  .sidebar .nav,\n  .off-canvas-sidebar .nav {\n    margin-top: 20px;\n    display: block; }\n    .sidebar .nav .caret,\n    .off-canvas-sidebar .nav .caret {\n      top: 14px;\n      position: absolute;\n      right: 10px; }\n    .sidebar .nav li > a + div .nav li > a,\n    .off-canvas-sidebar .nav li > a + div .nav li > a {\n      margin-top: 7px; }\n    .sidebar .nav li > a,\n    .off-canvas-sidebar .nav li > a {\n      margin: 10px 15px 0;\n      color: #FFFFFF;\n      display: block;\n      text-decoration: none;\n      position: relative;\n      text-transform: uppercase;\n      cursor: pointer;\n      font-size: 12px;\n      padding: 10px 8px;\n      line-height: 30px;\n      opacity: .7; }\n    .sidebar .nav li .nav > li > a,\n    .off-canvas-sidebar .nav li .nav > li > a {\n      padding: 5px 8px; }\n    .sidebar .nav li.active > a,\n    .sidebar .nav li.active > a > i,\n    .off-canvas-sidebar .nav li.active > a,\n    .off-canvas-sidebar .nav li.active > a > i {\n      opacity: 1; }\n    .sidebar .nav li:hover:not(.active) > a,\n    .sidebar .nav li:focus:not(.active) > a,\n    .off-canvas-sidebar .nav li:hover:not(.active) > a,\n    .off-canvas-sidebar .nav li:focus:not(.active) > a {\n      opacity: 1; }\n    .sidebar .nav i,\n    .off-canvas-sidebar .nav i {\n      font-size: 24px;\n      float: left;\n      margin-right: 12px;\n      line-height: 30px;\n      width: 34px;\n      text-align: center;\n      color: rgba(255, 255, 255, 0.5);\n      position: relative; }\n    .sidebar .nav p,\n    .off-canvas-sidebar .nav p {\n      margin-bottom: 0; }\n    .sidebar .nav .collapse .nav,\n    .sidebar .nav .collapsing .nav,\n    .off-canvas-sidebar .nav .collapse .nav,\n    .off-canvas-sidebar .nav .collapsing .nav {\n      margin-top: 0; }\n  .sidebar .sidebar-background,\n  .off-canvas-sidebar .sidebar-background {\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center center; }\n    .sidebar .sidebar-background:after,\n    .off-canvas-sidebar .sidebar-background:after {\n      position: absolute;\n      z-index: 3;\n      width: 100%;\n      height: 100%;\n      content: \"\";\n      display: block;\n      background: #FFFFFF;\n      opacity: 1; }\n  .sidebar .logo,\n  .off-canvas-sidebar .logo {\n    position: relative;\n    padding: 7px 0.7rem;\n    z-index: 4; }\n    .sidebar .logo a.logo-mini,\n    .off-canvas-sidebar .logo a.logo-mini {\n      opacity: 1;\n      float: left;\n      width: 34px;\n      text-align: center;\n      margin-left: 10px;\n      margin-right: 12px; }\n    .sidebar .logo a.logo-normal,\n    .off-canvas-sidebar .logo a.logo-normal {\n      display: block;\n      opacity: 1;\n      padding: 11px 0 8px;\n      -webkit-transform: translate3d(0px, 0, 0);\n      transform: translate3d(0px, 0, 0); }\n    .sidebar .logo:after,\n    .off-canvas-sidebar .logo:after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      right: 15px;\n      height: 1px;\n      width: calc(100% - 30px);\n      background-color: rgba(255, 255, 255, 0.5); }\n    .sidebar .logo p,\n    .off-canvas-sidebar .logo p {\n      float: left;\n      font-size: 20px;\n      margin: 10px 10px;\n      color: #FFFFFF;\n      line-height: 20px;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n    .sidebar .logo .simple-text,\n    .off-canvas-sidebar .logo .simple-text {\n      text-transform: uppercase;\n      padding: 0.5rem 0;\n      display: block;\n      white-space: nowrap;\n      font-size: 1rem;\n      color: #FFFFFF;\n      text-decoration: none;\n      font-weight: 400;\n      line-height: 30px;\n      overflow: hidden; }\n  .sidebar .logo-tim,\n  .off-canvas-sidebar .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n    .sidebar .logo-tim img,\n    .off-canvas-sidebar .logo-tim img {\n      width: 60px;\n      height: 60px; }\n  .sidebar:before, .sidebar:after,\n  .off-canvas-sidebar:before,\n  .off-canvas-sidebar:after {\n    display: block;\n    content: \"\";\n    opacity: 1;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0; }\n  .sidebar:after,\n  .off-canvas-sidebar:after {\n    background: #66615B;\n    background: linear-gradient(#66615B 0%, #000 80%);\n    z-index: 3; }\n  .sidebar[data-color=\"white\"]:after,\n  .off-canvas-sidebar[data-color=\"white\"]:after {\n    background: #FFFFFF; }\n  .sidebar[data-color=\"white\"] .nav li a,\n  .sidebar[data-color=\"white\"] .nav li a i,\n  .sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"],\n  .sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"] i,\n  .sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"] ~ div > ul > li .sidebar-mini-icon,\n  .sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"] ~ div > ul > li > a,\n  .off-canvas-sidebar[data-color=\"white\"] .nav li a,\n  .off-canvas-sidebar[data-color=\"white\"] .nav li a i,\n  .off-canvas-sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"],\n  .off-canvas-sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"] i,\n  .off-canvas-sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"] ~ div > ul > li .sidebar-mini-icon,\n  .off-canvas-sidebar[data-color=\"white\"] .nav li a[data-toggle=\"collapse\"] ~ div > ul > li > a {\n    color: #66615B;\n    opacity: .7; }\n  .sidebar[data-color=\"white\"] .nav li:hover:not(.active) > a,\n  .sidebar[data-color=\"white\"] .nav li:focus:not(.active) > a,\n  .off-canvas-sidebar[data-color=\"white\"] .nav li:hover:not(.active) > a,\n  .off-canvas-sidebar[data-color=\"white\"] .nav li:focus:not(.active) > a {\n    opacity: 1; }\n  .sidebar[data-color=\"white\"] .logo .simple-text,\n  .off-canvas-sidebar[data-color=\"white\"] .logo .simple-text {\n    color: #66615B; }\n  .sidebar[data-color=\"white\"] .logo:after,\n  .off-canvas-sidebar[data-color=\"white\"] .logo:after {\n    background-color: #66615B;\n    opacity: .4; }\n  .sidebar[data-color=\"white\"] .user .info a span,\n  .sidebar[data-color=\"white\"] .user .nav .sidebar-mini-icon,\n  .sidebar[data-color=\"white\"] .user .nav .sidebar-normal,\n  .off-canvas-sidebar[data-color=\"white\"] .user .info a span,\n  .off-canvas-sidebar[data-color=\"white\"] .user .nav .sidebar-mini-icon,\n  .off-canvas-sidebar[data-color=\"white\"] .user .nav .sidebar-normal {\n    color: #66615B !important; }\n  .sidebar[data-color=\"white\"] .user:after,\n  .off-canvas-sidebar[data-color=\"white\"] .user:after {\n    background-color: #66615B;\n    opacity: .4; }\n  .sidebar[data-color=\"black\"]:after,\n  .off-canvas-sidebar[data-color=\"black\"]:after {\n    background: #212120; }\n  .sidebar[data-active-color=\"primary\"] .nav li.active > a,\n  .sidebar[data-active-color=\"primary\"] .nav li.active > a i,\n  .sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a,\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a,\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a i,\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .off-canvas-sidebar[data-active-color=\"primary\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a {\n    color: #51cbce;\n    opacity: 1; }\n  .sidebar[data-active-color=\"info\"] .nav li.active > a,\n  .sidebar[data-active-color=\"info\"] .nav li.active > a i,\n  .sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a,\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a,\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a i,\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .off-canvas-sidebar[data-active-color=\"info\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a {\n    color: #51bcda;\n    opacity: 1; }\n  .sidebar[data-active-color=\"success\"] .nav li.active > a,\n  .sidebar[data-active-color=\"success\"] .nav li.active > a i,\n  .sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a,\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a,\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a i,\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .off-canvas-sidebar[data-active-color=\"success\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a {\n    color: #6bd098;\n    opacity: 1; }\n  .sidebar[data-active-color=\"warning\"] .nav li.active > a,\n  .sidebar[data-active-color=\"warning\"] .nav li.active > a i,\n  .sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a,\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a,\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a i,\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .off-canvas-sidebar[data-active-color=\"warning\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a {\n    color: #fbc658;\n    opacity: 1; }\n  .sidebar[data-active-color=\"danger\"] .nav li.active > a,\n  .sidebar[data-active-color=\"danger\"] .nav li.active > a i,\n  .sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a,\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a,\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a i,\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"],\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"] i,\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active .sidebar-mini-icon,\n  .off-canvas-sidebar[data-active-color=\"danger\"] .nav li.active > a[data-toggle=\"collapse\"] ~ div > ul > li.active > a {\n    color: #ef8157;\n    opacity: 1; }\n\n.visible-on-sidebar-regular {\n  display: inline-block !important; }\n\n.visible-on-sidebar-mini {\n  display: none !important; }\n\n.off-canvas-sidebar .nav > li > a,\n.off-canvas-sidebar .nav > li > a:hover {\n  color: #FFFFFF; }\n\n.off-canvas-sidebar .nav > li > a:focus {\n  background: rgba(200, 200, 200, 0.2); }\n\n.main-panel {\n  position: relative;\n  float: right;\n  width: calc(100% - 260px);\n  background-color: #f4f3ef;\n  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n  .main-panel > .content {\n    padding: 0 30px 30px;\n    min-height: calc(100vh - 123px);\n    margin-top: 93px; }\n  .main-panel > .navbar {\n    margin-bottom: 0; }\n  .main-panel .header {\n    margin-bottom: 50px; }\n\n.perfect-scrollbar-on .sidebar,\n.perfect-scrollbar-on .main-panel {\n  height: 100%;\n  max-height: 100%; }\n\n.panel-header {\n  height: 260px;\n  padding-top: 80px;\n  padding-bottom: 45px;\n  background: #141E30;\n  /* fallback for old browsers */\n  background: linear-gradient(to right, #0c2646 0%, #204065 60%, #2a5788 100%);\n  position: relative;\n  overflow: hidden; }\n  .panel-header .header .title {\n    color: #FFFFFF; }\n  .panel-header .header .category {\n    max-width: 600px;\n    color: rgba(255, 255, 255, 0.5);\n    margin: 0 auto;\n    font-size: 13px; }\n    .panel-header .header .category a {\n      color: #FFFFFF; }\n\n.panel-header-sm {\n  height: 135px; }\n\n.panel-header-lg {\n  height: 380px; }\n\n.footer {\n  padding: 24px 0; }\n  .footer.footer-default {\n    background-color: #f2f2f2; }\n  .footer nav {\n    display: inline-block;\n    float: left;\n    padding-left: 0; }\n  .footer ul {\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none; }\n    .footer ul li {\n      display: inline-block; }\n      .footer ul li a {\n        color: inherit;\n        padding: 0.5rem;\n        font-size: 0.8571em;\n        text-transform: uppercase;\n        text-decoration: none; }\n        .footer ul li a:hover {\n          text-decoration: none; }\n  .footer .copyright {\n    font-size: 0.8571em;\n    line-height: 1.8; }\n  .footer:after {\n    display: table;\n    clear: both;\n    content: \" \"; }\n\n.fixed-plugin {\n  position: fixed;\n  right: 0;\n  width: 64px;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1031;\n  border-radius: 8px 0 0 8px;\n  text-align: center;\n  top: 120px; }\n  .fixed-plugin li > a,\n  .fixed-plugin .badge {\n    transition: all .34s;\n    -webkit-transition: all .34s;\n    -moz-transition: all .34s; }\n  .fixed-plugin .fa-cog {\n    color: #FFFFFF;\n    padding: 10px;\n    border-radius: 0 0 6px 6px;\n    width: auto; }\n  .fixed-plugin .dropdown-menu {\n    right: 80px;\n    left: auto !important;\n    top: -52px !important;\n    width: 290px;\n    border-radius: 10px;\n    padding: 0 10px; }\n  .fixed-plugin .dropdown .dropdown-menu .nc-icon {\n    top: 2px;\n    right: 10px;\n    font-size: 14px; }\n  .fixed-plugin .dropdown-menu:after,\n  .fixed-plugin .dropdown-menu:before {\n    right: 10px;\n    margin-left: auto;\n    left: auto; }\n  .fixed-plugin .fa-circle-thin {\n    color: #FFFFFF; }\n  .fixed-plugin .active .fa-circle-thin {\n    color: #00bbff; }\n  .fixed-plugin .dropdown-menu > .active > a,\n  .fixed-plugin .dropdown-menu > .active > a:hover,\n  .fixed-plugin .dropdown-menu > .active > a:focus {\n    color: #777777;\n    text-align: center; }\n  .fixed-plugin img {\n    border-radius: 0;\n    width: 100%;\n    height: 100px;\n    margin: 0 auto; }\n  .fixed-plugin .dropdown-menu li > a:hover,\n  .fixed-plugin .dropdown-menu li > a:focus {\n    box-shadow: none; }\n  .fixed-plugin .badge {\n    border: 3px solid #FFFFFF;\n    border-radius: 50%;\n    cursor: pointer;\n    display: inline-block;\n    height: 23px;\n    margin-right: 5px;\n    position: relative;\n    width: 23px; }\n    .fixed-plugin .badge.badge-light {\n      border: 1px solid #E3E3E3; }\n      .fixed-plugin .badge.badge-light.active, .fixed-plugin .badge.badge-light:hover {\n        border: 3px solid #0bf; }\n  .fixed-plugin .badge.active,\n  .fixed-plugin .badge:hover {\n    border-color: #00bbff; }\n  .fixed-plugin .badge-blue {\n    background-color: #51bcda; }\n  .fixed-plugin .badge-green {\n    background-color: #6bd098; }\n  .fixed-plugin .badge-orange {\n    background-color: #51cbce; }\n  .fixed-plugin .badge-yellow {\n    background-color: #fbc658; }\n  .fixed-plugin .badge-red {\n    background-color: #ef8157; }\n  .fixed-plugin h5 {\n    font-size: 14px;\n    margin: 10px; }\n  .fixed-plugin .dropdown-menu li {\n    display: block;\n    padding: 15px 2px;\n    width: 25%;\n    float: left; }\n  .fixed-plugin li.adjustments-line,\n  .fixed-plugin li.header-title,\n  .fixed-plugin li.button-container {\n    width: 100%;\n    height: 35px;\n    min-height: inherit; }\n  .fixed-plugin li.button-container {\n    height: auto; }\n    .fixed-plugin li.button-container div {\n      margin-bottom: 5px; }\n  .fixed-plugin #sharrreTitle {\n    text-align: center;\n    padding: 10px 0;\n    height: 50px; }\n  .fixed-plugin li.header-title {\n    height: 30px;\n    line-height: 25px;\n    font-size: 12px;\n    font-weight: 600;\n    text-align: center;\n    text-transform: uppercase; }\n  .fixed-plugin .adjustments-line p {\n    float: left;\n    display: inline-block;\n    margin-bottom: 0;\n    font-size: 1em;\n    color: #3C4858; }\n  .fixed-plugin .adjustments-line a {\n    color: transparent; }\n    .fixed-plugin .adjustments-line a .badge-colors {\n      position: relative;\n      top: -2px; }\n    .fixed-plugin .adjustments-line a a:hover,\n    .fixed-plugin .adjustments-line a a:focus {\n      color: transparent; }\n  .fixed-plugin .adjustments-line .togglebutton {\n    text-align: center; }\n    .fixed-plugin .adjustments-line .togglebutton .label-switch {\n      position: relative;\n      left: -10px;\n      font-size: 0.7142em;\n      color: #66615B; }\n      .fixed-plugin .adjustments-line .togglebutton .label-switch.label-right {\n        left: 10px; }\n    .fixed-plugin .adjustments-line .togglebutton .toggle {\n      margin-right: 0; }\n  .fixed-plugin .adjustments-line .dropdown-menu > li.adjustments-line > a {\n    padding-right: 0;\n    padding-left: 0;\n    border-bottom: 1px solid #ddd;\n    border-radius: 0;\n    margin: 0; }\n  .fixed-plugin .dropdown-menu > li > a.img-holder {\n    font-size: 16px;\n    text-align: center;\n    border-radius: 10px;\n    background-color: #FFF;\n    border: 3px solid #FFF;\n    padding-left: 0;\n    padding-right: 0;\n    opacity: 1;\n    cursor: pointer;\n    display: block;\n    max-height: 100px;\n    overflow: hidden;\n    padding: 0; }\n    .fixed-plugin .dropdown-menu > li > a.img-holder img {\n      margin-top: auto; }\n  .fixed-plugin .dropdown-menu > li a.switch-trigger:hover,\n  .fixed-plugin .dropdown-menu > li > a.switch-trigger:focus {\n    background-color: transparent; }\n  .fixed-plugin .dropdown-menu > li:hover > a.img-holder, .fixed-plugin .dropdown-menu > li:focus > a.img-holder {\n    border-color: rgba(0, 187, 255, 0.53); }\n  .fixed-plugin .dropdown-menu > .active > a.img-holder,\n  .fixed-plugin .dropdown-menu > .active > a.img-holder {\n    border-color: #00bbff;\n    background-color: #FFFFFF; }\n  .fixed-plugin .btn-social {\n    width: 50%;\n    display: block;\n    width: 48%;\n    float: left;\n    font-weight: 600; }\n  .fixed-plugin .btn-social i {\n    margin-right: 5px; }\n  .fixed-plugin .btn-social:first-child {\n    margin-right: 2%; }\n  .fixed-plugin .dropdown .dropdown-menu {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0; }\n    .fixed-plugin .dropdown .dropdown-menu:before {\n      border-bottom: 16px solid rgba(0, 0, 0, 0);\n      border-left: 16px solid rgba(0, 0, 0, 0.2);\n      border-top: 16px solid rgba(0, 0, 0, 0);\n      right: -27px;\n      bottom: 425px; }\n    .fixed-plugin .dropdown .dropdown-menu:after {\n      border-bottom: 16px solid rgba(0, 0, 0, 0);\n      border-left: 16px solid #FFFFFF;\n      border-top: 16px solid rgba(0, 0, 0, 0);\n      right: -26px;\n      bottom: 425px; }\n    .fixed-plugin .dropdown .dropdown-menu:before, .fixed-plugin .dropdown .dropdown-menu:after {\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      width: 16px;\n      transform: translateY(-50px);\n      -webkit-transform: translateY(-50px);\n      -moz-transform: translateY(-50px); }\n  .fixed-plugin .dropdown.show-dropdown .show .dropdown-menu .show {\n    -webkit-transform: translate3d(0, -60px, 0) !important;\n            transform: translate3d(0, -60px, 0) !important;\n    bottom: auto !important;\n    top: 0 !important; }\n  .fixed-plugin .bootstrap-switch {\n    margin: 0; }\n\n.fixed-plugin .show-dropdown .dropdown-menu[x-placement=bottom-start] {\n  -webkit-transform: translate3d(0, -100px, 0) !important;\n  transform: translate3d(0, -100px, 0) !important; }\n  .fixed-plugin .show-dropdown .dropdown-menu[x-placement=bottom-start]:before, .fixed-plugin .show-dropdown .dropdown-menu[x-placement=bottom-start]:after {\n    top: 100px; }\n\n.fixed-plugin .show-dropdown .dropdown-menu[x-placement=top-start] {\n  -webkit-transform: translate3d(0, 100px, 0) !important;\n  transform: translate3d(0, 100px, 0) !important; }\n\n.fixed-plugin .show-dropdown.show .dropdown-menu.show[x-placement=bottom-start] {\n  -webkit-transform: translate3d(0, -60px, 0) !important;\n  transform: translate3d(0, -60px, 0) !important; }\n\n.fixed-plugin .show-dropdown.show .dropdown-menu.show[x-placement=top-start] {\n  -webkit-transform: translate3d(0, 470px, 0) !important;\n  transform: translate3d(0, 470px, 0) !important; }\n\n.card {\n  border-radius: 12px;\n  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);\n  background-color: #FFFFFF;\n  color: #252422;\n  margin-bottom: 20px;\n  position: relative;\n  border: 0 none;\n  transition: box-shadow 200ms ease, -webkit-transform 300ms cubic-bezier(0.34, 2, 0.6, 1);\n  transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease;\n  transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease, -webkit-transform 300ms cubic-bezier(0.34, 2, 0.6, 1); }\n  .card .card-body {\n    padding: 15px 15px 10px 15px; }\n    .card .card-body.table-full-width {\n      padding-left: 0;\n      padding-right: 0; }\n  .card .card-header {\n    padding: 15px 15px 0;\n    border: 0; }\n    .card .card-header:not([data-background-color]) {\n      background-color: transparent; }\n    .card .card-header .card-title {\n      margin-top: 10px; }\n  .card .map {\n    border-radius: 3px; }\n    .card .map.map-big {\n      height: 400px; }\n  .card[data-background-color=\"orange\"] {\n    background-color: #51cbce; }\n    .card[data-background-color=\"orange\"] .card-header {\n      background-color: #51cbce; }\n    .card[data-background-color=\"orange\"] .card-footer .stats {\n      color: #FFFFFF; }\n  .card[data-background-color=\"red\"] {\n    background-color: #ef8157; }\n  .card[data-background-color=\"yellow\"] {\n    background-color: #fbc658; }\n  .card[data-background-color=\"blue\"] {\n    background-color: #51bcda; }\n  .card[data-background-color=\"green\"] {\n    background-color: #6bd098; }\n  .card .image {\n    overflow: hidden;\n    height: 200px;\n    position: relative; }\n  .card .avatar {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-bottom: 15px; }\n  .card .numbers {\n    font-size: 2em; }\n  .card .big-title {\n    font-size: 12px;\n    text-align: center;\n    font-weight: 500;\n    padding-bottom: 15px; }\n  .card label {\n    font-size: 0.8571em;\n    margin-bottom: 5px;\n    color: #9A9A9A; }\n  .card .card-footer {\n    background-color: transparent;\n    border: 0; }\n    .card .card-footer .stats i {\n      margin-right: 5px;\n      position: relative;\n      top: 0px;\n      color: #66615B; }\n    .card .card-footer .btn {\n      margin: 0; }\n  .card.card-plain {\n    background-color: transparent;\n    box-shadow: none;\n    border-radius: 0; }\n    .card.card-plain .card-body {\n      padding-left: 5px;\n      padding-right: 5px; }\n    .card.card-plain img {\n      border-radius: 12px; }\n\n.card-plain {\n  background: transparent;\n  box-shadow: none; }\n  .card-plain .card-header,\n  .card-plain .card-footer {\n    margin-left: 0;\n    margin-right: 0;\n    background-color: transparent; }\n  .card-plain:not(.card-subcategories).card-body {\n    padding-left: 0;\n    padding-right: 0; }\n\n.card-chart .card-header .card-title {\n  margin-top: 10px;\n  margin-bottom: 0; }\n\n.card-chart .card-header .card-category {\n  margin-bottom: 5px; }\n\n.card-chart .table {\n  margin-bottom: 0; }\n  .card-chart .table td {\n    border-top: none;\n    border-bottom: 1px solid #e9ecef; }\n\n.card-chart .card-progress {\n  margin-top: 30px; }\n\n.card-chart .chart-area {\n  height: 190px;\n  width: calc(100% + 30px);\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.card-chart .card-footer {\n  margin-top: 15px; }\n  .card-chart .card-footer .stats {\n    color: #9A9A9A; }\n\n.card-chart .dropdown {\n  position: absolute;\n  right: 20px;\n  top: 20px; }\n  .card-chart .dropdown .btn {\n    margin: 0; }\n\n.card-user .image {\n  height: 130px; }\n  .card-user .image img {\n    border-radius: 12px; }\n\n.card-user .author {\n  text-align: center;\n  text-transform: none;\n  margin-top: -77px; }\n  .card-user .author a + p.description {\n    margin-top: -7px; }\n\n.card-user .avatar {\n  width: 124px;\n  height: 124px;\n  position: relative; }\n\n.card-user .card-body {\n  min-height: 240px; }\n\n.card-user hr {\n  margin: 5px 15px 15px; }\n\n.card-user .card-body + .card-footer {\n  padding-top: 0; }\n\n.card-user .card-footer h5 {\n  font-size: 1.25em;\n  margin-bottom: 0; }\n\n.card-user .button-container {\n  margin-bottom: 6px;\n  text-align: center; }\n\n.map {\n  height: 500px; }\n\n.card-stats .card-body {\n  padding: 15px 15px 0px; }\n  .card-stats .card-body .numbers {\n    text-align: right;\n    font-size: 2em; }\n    .card-stats .card-body .numbers p {\n      margin-bottom: 0; }\n    .card-stats .card-body .numbers .card-category {\n      color: #9A9A9A;\n      font-size: 16px;\n      line-height: 1.4em; }\n\n.card-stats .card-footer {\n  padding: 0px 15px 15px; }\n  .card-stats .card-footer .stats {\n    color: #9A9A9A; }\n  .card-stats .card-footer hr {\n    margin-top: 10px;\n    margin-bottom: 15px; }\n\n.card-stats .icon-big {\n  font-size: 3em;\n  min-height: 64px; }\n  .card-stats .icon-big i {\n    line-height: 59px; }\n\n@media screen and (max-width: 991px) {\n  .navbar {\n    padding: 0; }\n    .navbar.navbar-absolute {\n      padding-top: 0; }\n    .navbar .navbar-brand {\n      font-size: 16px;\n      margin-right: 0; }\n  .profile-photo .profile-photo-small {\n    margin-left: -2px; }\n  .button-dropdown {\n    display: none; }\n  #minimizeSidebar {\n    display: none; }\n  .navbar .container-fluid {\n    padding-right: 15px;\n    padding-left: 15px; }\n  .navbar .navbar-collapse .input-group {\n    margin: 0;\n    margin-top: 5px; }\n  .navbar .navbar-nav .nav-item:first-child {\n    margin-top: 10px; }\n  .navbar .navbar-nav .nav-item:not(:last-child) {\n    margin-bottom: 10px; }\n  .navbar .dropdown.show .dropdown-menu {\n    display: block; }\n  .navbar .dropdown .dropdown-menu {\n    display: none; }\n  .navbar .dropdown.show .dropdown-menu,\n  .navbar .dropdown .dropdown-menu {\n    border: 0;\n    transition: none;\n    -webkit-box-shadow: none;\n    width: auto;\n    margin: 0px 1rem;\n    margin-top: 0px;\n    box-shadow: none;\n    position: static;\n    padding-left: 10px; }\n    .navbar .dropdown.show .dropdown-menu:before,\n    .navbar .dropdown .dropdown-menu:before {\n      display: none; }\n  .navbar .dropdown-menu .dropdown-item:focus,\n  .navbar .dropdown-menu .dropdown-item:hover {\n    color: #FFFFFF; }\n  .navbar.bg-white .dropdown-menu .dropdown-item:focus,\n  .navbar.bg-white .dropdown-menu .dropdown-item:hover {\n    color: #66615B; }\n  .navbar .navbar-toggler-bar {\n    display: block;\n    position: relative;\n    width: 22px;\n    height: 1px;\n    border-radius: 1px;\n    background: #66615B; }\n    .navbar .navbar-toggler-bar + .navbar-toggler-bar {\n      margin-top: 7px; }\n    .navbar .navbar-toggler-bar + .navbar-toggler-bar.navbar-kebab {\n      margin-top: 3px; }\n    .navbar .navbar-toggler-bar.bar2 {\n      width: 17px;\n      transition: width .2s linear; }\n  .navbar.bg-white:not(.navbar-transparent) .navbar-toggler-bar {\n    background-color: #66615B; }\n  .navbar .toggled .navbar-toggler-bar {\n    width: 24px; }\n    .navbar .toggled .navbar-toggler-bar + .navbar-toggler-bar {\n      margin-top: 5px; }\n  .wrapper {\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n  .nav-open .main-panel {\n    right: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0); }\n  .nav-open .sidebar {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0); }\n  .nav-open body {\n    position: relative;\n    overflow-x: hidden; }\n  .nav-open .menu-on-right .main-panel {\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0); }\n  .nav-open .menu-on-right .navbar-collapse,\n  .nav-open .menu-on-right .sidebar {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0); }\n  .nav-open .menu-on-right .navbar-translate {\n    -webkit-transform: translate3d(-300px, 0, 0);\n    transform: translate3d(-300px, 0, 0); }\n  .nav-open .menu-on-right #bodyClick {\n    right: 260px;\n    left: auto; }\n  .menu-on-right .sidebar {\n    left: auto;\n    right: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0); }\n  .bar1,\n  .bar2,\n  .bar3 {\n    outline: 1px solid transparent; }\n  .bar1 {\n    top: 0px;\n    -webkit-animation: topbar-back 500ms linear 0s;\n    animation: topbar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .bar2 {\n    opacity: 1; }\n  .bar3 {\n    bottom: 0px;\n    -webkit-animation: bottombar-back 500ms linear 0s;\n    animation: bottombar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .toggled .bar1 {\n    top: 6px;\n    -webkit-animation: topbar-x 500ms linear 0s;\n    animation: topbar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .toggled .bar2 {\n    opacity: 0; }\n  .toggled .bar3 {\n    bottom: 6px;\n    -webkit-animation: bottombar-x 500ms linear 0s;\n    animation: bottombar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg);\n              transform: rotate(145deg); }\n    75% {\n      -webkit-transform: rotate(130deg);\n              transform: rotate(130deg); }\n    100% {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); } }\n  @-webkit-keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg); }\n    75% {\n      -webkit-transform: rotate(130deg); }\n    100% {\n      -webkit-transform: rotate(135deg); } }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n    45% {\n      -webkit-transform: rotate(-10deg);\n              transform: rotate(-10deg); }\n    75% {\n      -webkit-transform: rotate(5deg);\n              transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0); } }\n  @-webkit-keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg); }\n    45% {\n      -webkit-transform: rotate(-10deg); }\n    75% {\n      -webkit-transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0); } }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg);\n              transform: rotate(-145deg); }\n    75% {\n      -webkit-transform: rotate(-130deg);\n              transform: rotate(-130deg); }\n    100% {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); } }\n  @-webkit-keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg); }\n    75% {\n      -webkit-transform: rotate(-130deg); }\n    100% {\n      -webkit-transform: rotate(-135deg); } }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); }\n    45% {\n      -webkit-transform: rotate(10deg);\n              transform: rotate(10deg); }\n    75% {\n      -webkit-transform: rotate(-5deg);\n              transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0); } }\n  @-webkit-keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg); }\n    45% {\n      -webkit-transform: rotate(10deg); }\n    75% {\n      -webkit-transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0); } }\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  #bodyClick {\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    opacity: 1;\n    top: 0;\n    right: 0;\n    left: 260px;\n    content: \"\";\n    z-index: 9999;\n    overflow-x: hidden;\n    background-color: transparent;\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n  .footer .copyright {\n    text-align: right; }\n  .section-nucleo-icons .icons-container {\n    margin-top: 65px; }\n  .navbar-nav .nav-link i.fa,\n  .navbar-nav .nav-link i.nc-icon {\n    opacity: .5; }\n  .sidebar,\n  .bootstrap-navbar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    width: 260px;\n    right: auto;\n    left: 0;\n    z-index: 1032;\n    visibility: visible;\n    overflow-y: visible;\n    padding: 0;\n    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0); }\n  .main-panel {\n    width: 100%; }\n  .timeline:before {\n    left: 5% !important; }\n  .timeline > li > .timeline-badge {\n    left: 5% !important; }\n  .timeline > li > .timeline-panel {\n    float: right !important;\n    width: 82% !important; }\n    .timeline > li > .timeline-panel:before {\n      border-left-width: 0 !important;\n      border-right-width: 15px !important;\n      left: -15px !important;\n      right: auto !important; }\n    .timeline > li > .timeline-panel:after {\n      border-left-width: 0 !important;\n      border-right-width: 14px !important;\n      left: -14px !important;\n      right: auto !important; } }\n\n@media (max-width: 991px) and (min-width: 768px) {\n  .nav-tabs-navigation.verical-navs {\n    padding: 0px 2px; } }\n\n@media screen and (min-width: 768px) {\n  .footer .footer-nav {\n    padding-left: 21px; }\n  .footer .credits {\n    padding-right: 15px; } }\n\n@media screen and (min-width: 992px) {\n  .navbar-collapse {\n    background: none !important; }\n  .navbar .navbar-toggle {\n    display: none; }\n  .navbar-nav .nav-link.profile-photo {\n    padding: 0;\n    margin: 7px 0.7rem; }\n  .section-nucleo-icons .icons-container {\n    margin: 0 0 0 auto; }\n  .dropdown-menu .dropdown-item {\n    color: inherit; }\n  .footer .copyright {\n    float: right;\n    padding-right: 15px; }\n  .sidebar .sidebar-wrapper li.active > a:not([data-toggle=\"collapse\"]):before,\n  .sidebar .sidebar-wrapper li.active > [data-toggle=\"collapse\"] + div .nav li:before {\n    border-right: 17px solid #DDDDDD;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    right: -16px;\n    opacity: 1;\n    top: 7px;\n    transition: opacity 150ms ease-in; }\n  .sidebar .sidebar-wrapper li.active > a:not([data-toggle=\"collapse\"]):after,\n  .sidebar .sidebar-wrapper li.active > [data-toggle=\"collapse\"] + div .nav li:after {\n    border-right: 17px solid #f4f3ef;\n    border-top: 17px solid transparent;\n    border-bottom: 17px solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    right: -17px;\n    opacity: 1;\n    top: 7px;\n    transition: opacity 150ms ease-in; }\n  .sidebar .sidebar-wrapper li.active > [data-toggle=\"collapse\"] + div .nav li a:before, .sidebar .sidebar-wrapper li.active > [data-toggle=\"collapse\"] + div .nav li a:after {\n    top: 0; } }\n\n@media screen and (max-width: 768px) {\n  .card-stats [class*=\"col-\"] .statistics::after {\n    display: none; }\n  .main-panel .content {\n    padding-left: 15px;\n    padding-right: 15px; }\n  .footer nav {\n    display: block;\n    margin-bottom: 5px;\n    float: none; }\n  .landing-page .section-story-overview .image-container:nth-child(2) {\n    margin-left: 0;\n    margin-bottom: 30px; }\n  .card .form-horizontal .col-md-3.col-form-label {\n    text-align: left; } }\n\n@media screen and (max-width: 767px) {\n  .nav-tabs-navigation.verical-navs {\n    padding: 0 28px; }\n  .typography-line {\n    padding-left: 23% !important; }\n    .typography-line span {\n      width: 60px !important; }\n  .login-page .navbar,\n  .lock-page .navbar,\n  .register-page .navbar {\n    padding: .5rem 1rem; }\n  .footer .footer-nav,\n  .footer .credits {\n    margin: 0 auto !important; }\n  .footer .footer-nav {\n    margin-bottom: 10px !important; }\n  .register-page .content {\n    padding-top: 5vh; }\n  .register-page .footer {\n    position: relative; }\n  .register-page .info-area.info-horizontal {\n    margin-top: 0; } }\n\n@media screen and (max-width: 374px) {\n  .login-page .content {\n    padding-top: 10vh; } }\n\n@media screen and (max-width: 413px) {\n  .fixed-plugin .dropdown.show-dropdown.show .dropdown-menu.show {\n    width: 225px !important; }\n    .fixed-plugin .dropdown.show-dropdown.show .dropdown-menu.show[x-placement=top-start] {\n      -webkit-transform: translate3d(0, 400px, 0) !important;\n              transform: translate3d(0, 400px, 0) !important; }\n    .fixed-plugin .dropdown.show-dropdown.show .dropdown-menu.show:before, .fixed-plugin .dropdown.show-dropdown.show .dropdown-menu.show:after {\n      bottom: 360px !important; } }\n\n@media screen and (max-width: 576px) {\n  .navbar[class*='navbar-toggleable-'] .container {\n    margin-left: 0;\n    margin-right: 0; }\n  .card-contributions .card-stats {\n    -webkit-flex-direction: column;\n            flex-direction: column; }\n    .card-contributions .card-stats .bootstrap-switch {\n      margin-bottom: 15px; }\n  .footer .copyright {\n    text-align: center; }\n  .section-nucleo-icons .icons-container i {\n    font-size: 30px; }\n    .section-nucleo-icons .icons-container i:nth-child(6) {\n      font-size: 48px; }\n  .page-header .container h6.category-absolute {\n    width: 90%; }\n  .card-timeline .timeline .timeline-panel {\n    width: 38%;\n    padding: 15px; } }\n\n.alert .close {\n  font-weight: 300;\n  font-size: 29px; }\n  .alert .close i.fa,\n  .alert .close i.fas,\n  .alert .close i.far,\n  .alert .close i.fal,\n  .alert .close i.fab,\n  .alert .close i.nc-icon {\n    font-size: 14px !important; }\n\n.btn.btn-icon.btn-sm .fa,\n.btn.btn-icon.btn-sm .far,\n.btn.btn-icon.btn-sm .fas,\n.btn.btn-icon.btn-sm .fal,\n.btn.btn-icon.btn-sm .fab,\n.btn.btn-icon.btn-sm .nc-icon,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fa,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .far,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fas,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fal,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .fab,\n.navbar .navbar-nav > a.btn.btn-icon.btn-sm .nc-icon {\n  font-size: 0.6875rem; }\n\n.btn.btn-icon.btn-lg .fa,\n.btn.btn-icon.btn-lg .far,\n.btn.btn-icon.btn-lg .fas,\n.btn.btn-icon.btn-lg .fal,\n.btn.btn-icon.btn-lg .fab,\n.btn.btn-icon.btn-lg .nc-icon,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fa,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .far,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fas,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fal,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .fab,\n.navbar .navbar-nav > a.btn.btn-icon.btn-lg .nc-icon {\n  font-size: 1.325rem; }\n\n.btn.btn-icon:not(.btn-footer) .nc-icon,\n.btn.btn-icon:not(.btn-footer) .fa,\n.btn.btn-icon:not(.btn-footer) .far,\n.btn.btn-icon:not(.btn-footer) .fas,\n.btn.btn-icon:not(.btn-footer) .fal,\n.btn.btn-icon:not(.btn-footer) .fas,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .nc-icon,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fa,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .far,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fas,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fal,\n.navbar .navbar-nav > a.btn.btn-icon:not(.btn-footer) .fas {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-12px, -12px);\n          transform: translate(-12px, -12px);\n  line-height: 1.5626rem;\n  width: 24px; }\n\n.form-check .form-check-sign {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.form-check-radio .form-check-sign {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n  .form-check-radio .form-check-sign::before {\n    font-size: 22px;\n    content: \"\\f111\";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    display: inline-block;\n    position: absolute;\n    opacity: .50;\n    left: 5px;\n    top: -5px; }\n\n.form-check .form-check-sign:after {\n  font-family: \"Font Awesome 5 Free\";\n  top: 4px; }\n\n.form-check-radio .form-check-sign::after, .form-check-radio input[type=\"radio\"]:checked + .form-check-sign::after {\n  font-family: \"Font Awesome 5 Free\";\n  top: -1px; }\n\n.form-check-radio .form-check-sign::before, .form-check-radio input[type=\"radio\"]:checked + .form-check-sign::before {\n  font-family: \"Font Awesome 5 Free\";\n  top: -1px; }\n\n.dropup .dropdown-toggle:after,\n.dropdown .dropdown-toggle:after {\n  margin-left: 3px; }\n\n.fixed-plugin .dropdown .dropdown-menu:before {\n  right: -17px;\n  top: 28%; }\n\n.fixed-plugin .dropdown .dropdown-menu:after {\n  right: -16px;\n  top: 28%; }\n\n.fixed-plugin .gh-btn,\n.fixed-plugin .gh-count,\n.fixed-plugin .gh-ico {\n  float: left; }\n\n.fixed-plugin .gh-btn,\n.fixed-plugin .gh-count {\n  padding: 2px 5px 2px 4px;\n  color: #333;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  border-radius: 3px; }\n\n.fixed-plugin .gh-btn {\n  background-color: #eee;\n  background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);\n  background-repeat: no-repeat;\n  border: 1px solid #d5d5d5; }\n\n.fixed-plugin .gh-btn:hover,\n.fixed-plugin .gh-btn:focus {\n  text-decoration: none;\n  background-color: #ddd;\n  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);\n  border-color: #ccc; }\n\n.fixed-plugin .gh-btn:active {\n  background-image: none;\n  background-color: #dcdcdc;\n  border-color: #b5b5b5;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15); }\n\n.fixed-plugin .gh-ico {\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n.fixed-plugin .gh-count {\n  position: relative;\n  display: none;\n  /* hidden to start */\n  margin-left: 4px;\n  background-color: #fafafa;\n  border: 1px solid #d4d4d4; }\n\n.fixed-plugin .gh-count:hover,\n.fixed-plugin .gh-count:focus {\n  color: #4183C4; }\n\n.fixed-plugin .gh-count:before,\n.fixed-plugin .gh-count:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.fixed-plugin .gh-count:before {\n  top: 50%;\n  left: -3px;\n  margin-top: -4px;\n  border-width: 4px 4px 4px 0;\n  border-right-color: #fafafa; }\n\n.fixed-plugin .gh-count:after {\n  top: 50%;\n  left: -4px;\n  z-index: -1;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #d4d4d4; }\n\n.fixed-plugin .github-btn-large {\n  height: 30px; }\n\n.fixed-plugin .github-btn-large .gh-btn,\n.fixed-plugin .github-btn-large .gh-count {\n  padding: 3px 10px 3px 8px;\n  font-size: 16px;\n  line-height: 22px;\n  border-radius: 4px; }\n\n.fixed-plugin .github-btn-large .gh-ico {\n  width: 20px;\n  height: 20px; }\n\n.fixed-plugin .github-btn-large .gh-count {\n  margin-left: 6px; }\n\n.fixed-plugin .github-btn-large .gh-count:before {\n  left: -5px;\n  margin-top: -6px;\n  border-width: 6px 6px 6px 0; }\n\n.fixed-plugin .github-btn-large .gh-count:after {\n  left: -6px;\n  margin-top: -7px;\n  border-width: 7px 7px 7px 0; }\n\n.fixed-plugin .github-btn {\n  display: inline-block; }\n  .fixed-plugin .github-btn .gh-btn .gh-ico {\n    margin-top: 3px; }\n\n.fixed-plugin .SocialMediaShareButton {\n  display: inline-block; }\n\n@media screen and (max-width: 400px) {\n  .fixed-plugin .dropdown-menu {\n    width: 250px; } }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 4px); }\n\n.form-control {\n  height: unset; }\n\n.navbar .navbar-nav .nav-link i.fa + p,\n.navbar .navbar-nav .nav-link i.fal + p,\n.navbar .navbar-nav .nav-link i.fas + p,\n.navbar .navbar-nav .nav-link i.fab + p,\n.navbar .navbar-nav .nav-link i.far + p,\n.navbar .navbar-nav .nav-link i.nc-icon + p {\n  margin-left: 7px; }\n\n.navbar .navbar-nav .nav-link i.fa,\n.navbar .navbar-nav .nav-link i.fal,\n.navbar .navbar-nav .nav-link i.fas,\n.navbar .navbar-nav .nav-link i.fab,\n.navbar .navbar-nav .nav-link i.far,\n.navbar .navbar-nav .nav-link i.nc-icon {\n  font-size: 18px;\n  position: relative;\n  top: 3px;\n  text-align: center;\n  width: 21px; }\n\n/*--------------------------------\n\nnucleo-icons Web Font - built using nucleoapp.com\nLicense - nucleoapp.com/license/\n\n-------------------------------- */\n@font-face {\n  font-family: 'nucleo-icons';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___3___ + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@media screen and (max-width: 991px) {\n  .navbar-nav .nav-link i.fa,\n  .navbar-nav .nav-link i.fal,\n  .navbar-nav .nav-link i.fas,\n  .navbar-nav .nav-link i.fab,\n  .navbar-nav .nav-link i.far,\n  .navbar-nav .nav-link i.nc-icon {\n    opacity: .5; }\n  .navbar .dropdown.show .dropdown-menu {\n    border: 0;\n    transition: none;\n    -webkit-box-shadow: none;\n    width: auto;\n    margin: 0 1rem;\n    box-shadow: none;\n    position: static !important;\n    padding-left: 10px;\n    display: block !important;\n    -webkit-transform: translateZ(0) !important;\n    transform: translateZ(0) !important;\n    background: inherit; }\n    .navbar .dropdown.show .dropdown-menu:before, .navbar .dropdown.show .dropdown-menu:after {\n      display: none; }\n  .navbar.bg-dark .dropdown.show .dropdown-menu a {\n    color: #FFFFFF; } }\n\n*, *:focus, a, a:focus {\n  outline: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/course-list.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/course-list.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.courses-name{\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n    font-size: 1.5rem;\n    color: #747474;\n}\n.one-course{\n    text-align: left;\n    margin-left:1rem;\n    margin-bottom: 2rem;\n\n}", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/courses.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/courses.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navbar-absolute {\n    position: absolute;\n    margin-top: 0%;\n}\n.container1{\n    margin-top: 3%;\n    margin-left: 8%;\n    margin-bottom: 3%\n}\n.form-control{\n    height: 3rem;\n}\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n    color: #fff;\n    background-color: #51cbce !important;\n}\n.nav-pills .nav-link{\n    margin-top: 2rem;\n}\n/* course */\n.profile-titre{\n    color: #747474;\n    font-weight: bold;\n}\n.social{\n    font-size: 1.5rem;\n    padding-left: 3rem; \n}\n.social-titre{\n    color: #747474;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n.btn-round{\n    padding-right: 2rem;\n}\n.title{\n    margin-top: 1.5rem;\n    font-size:2rem;\n}\n\n.add-course-btn{\n    margin-left: 5rem;\n    margin-right: 5rem;\n  }", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/login.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/login.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./../img/bg1.png */ "./src/assets/img/bg1.png"));

// Module
exports.push([module.i, "/* titre */\n.logo{\n  color: whitesmoke;\n}\n\nbody{\nmargin:0;\ncolor:#6a6f8c;\nbackground:#c8c8c8;\n  font:600 16px/18px 'Open Sans',sans-serif;\n}\n*,:after,:before{box-sizing:border-box}\n.clearfix:after,.clearfix:before{content:'';display:table}\n.clearfix:after{clear:both;display:block}\na{color:inherit;text-decoration:none}\n\n.login-wrap{\n  \nwidth:100%;\nmargin-top: -60px;\n  margin-right:auto;\n  margin-left: auto;\nmax-width:450px;\nmin-height:620px;\nposition:relative;\nbox-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);\n}\n.login-html{\nwidth:100%;\nheight:100%;\nposition:absolute;\npadding:40px 70px 40px 70px;\nbackground-image: linear-gradient(to left bottom, #58606d, #606570, #686b73, #6f7077, #76767a);\n}\n.login-html .sign-in-htm,\n.login-html .sign-up-htm{\ntop:0;\nleft:0;\nright:0;\nbottom:0;\nposition:absolute;\n-webkit-transform:rotateY(180deg);\n        transform:rotateY(180deg);\n-webkit-backface-visibility:hidden;\n        backface-visibility:hidden;\ntransition:all .4s linear;\n}\n.login-html .sign-in,\n.login-html .sign-up,\n.login-form .group .check{\ndisplay:none;\n}\n.login-html .tab,\n.login-form .group .label,\n.login-form .group .button{\ntext-transform:uppercase;\n}\n.login-html .tab{\nfont-size:22px;\nmargin-right:15px;\npadding-bottom:5px;\nmargin:0 15px 10px 0;\ndisplay:inline-block;\nborder-bottom:2px solid transparent;\n}\n.login-html .sign-in:checked + .tab,\n.login-html .sign-up:checked + .tab{\ncolor:#fff;\nborder-color:gray;\n}\n.login-form{\nmin-height:345px;\nposition:relative;\n-webkit-perspective:1000px;\n        perspective:1000px;\n-webkit-transform-style:preserve-3d;\n        transform-style:preserve-3d;\n}\n.login-form .group{\nmargin-bottom:15px;\n}\n.login-form .group .label,\n.login-form .group .input,\n.login-form .group .button{\nwidth:100%;\ncolor:#fff;\ndisplay:block;\n}\n.login-form .group .input,\n.login-form .group .button{\nborder:none;\npadding:15px 20px;\nborder-radius:25px;\nbackground:rgba(255,255,255,.1);\n}\n.login-form .group input[data-type=\"password\"]{\n/* text-security:circle; */\n-webkit-text-security:circle;\n}\n.login-form .group .label{\ncolor:#aaa;\nfont-size:12px;\n}\n.login-form .group .button{\nbackground:rgba(51, 50, 50, 0.671);\n}\n.login-form .group label .icon{\nwidth:15px;\nheight:15px;\nborder-radius:2px;\nposition:relative;\ndisplay:inline-block;\nbackground:rgba(255,255,255,.1);\n}\n.login-form .group label .icon:before,\n.login-form .group label .icon:after{\ncontent:'';\nwidth:10px;\nheight:2px;\nbackground:#fff;\nposition:absolute;\ntransition:all .2s ease-in-out 0s;\n}\n.login-form .group label .icon:before{\nleft:3px;\nwidth:5px;\nbottom:6px;\n-webkit-transform:scale(0) rotate(0);\n        transform:scale(0) rotate(0);\n}\n.login-form .group label .icon:after{\ntop:6px;\nright:0;\n-webkit-transform:scale(0) rotate(0);\n        transform:scale(0) rotate(0);\n}\n.login-form .group .check:checked + label{\ncolor:#fff;\n}\n.login-form .group .check:checked + label .icon{\nbackground:rgb(34, 34, 34);\n}\n.login-form .group .check:checked + label .icon:before{\n-webkit-transform:scale(1) rotate(45deg);\n        transform:scale(1) rotate(45deg);\n}\n.login-form .group .check:checked + label .icon:after{\n-webkit-transform:scale(1) rotate(-45deg);\n        transform:scale(1) rotate(-45deg);\n}\n.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{\n-webkit-transform:rotate(0);\n        transform:rotate(0);\n}\n.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{\n-webkit-transform:rotate(0);\n        transform:rotate(0);\n}\n\n.hr{\nheight:2px;\nmargin:60px 0 50px 0;\nbackground:rgba(255,255,255,.2);\n}\n.foot-lnk{\ntext-align:center;\n\n}\n/* logo */\n.logo{\n  text-align: center;\n  font-size: 4rem;\n  font-weight: bold;\n  padding: 3rem;\n}\n\n.bglogin {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat ;\n  width: 100%;\n  height: 1080px;\n  background-size: cover;\n}", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/student-list.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/student-list.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.students-name{\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n    font-size: 1.5rem;\n    color: #747474;\n}\n.one-student{\n    text-align: left;\n    margin-left:1rem;\n    margin-bottom: 2rem;\n\n}\n/* student profile */\n.profile-titre{\n    color: #747474;\n    font-weight: bold;\n}\n.social{\n    font-size: 1.5rem;\n    padding-left: 3rem; \n}\n.social-titre{\n    color: #747474;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n.btn-round{\n    padding-right: 2rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/students.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/students.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navbar-absolute {\n    position: absolute;\n    margin-top: 0%;\n}\n.container1{\n    margin-top: 3%;\n    margin-left: 8%;\n    margin-bottom: 3%\n}\n.form-control{\n    height: 3rem;\n}\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n    color: #fff;\n    background-color: #51cbce !important;\n}\n.nav-pills .nav-link{\n    margin-top: 2rem;\n}\n.add-student-btn{\n    margin-left: 5rem;\n    margin-right: 5rem;\n  }", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teacher-list.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/teacher-list.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.teachers-name{\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n    font-size: 1.5rem;\n    color: #747474;\n}\n.one-teacher{\n    text-align: left;\n    margin-left:1rem;\n    margin-bottom: 2rem;\n}\n/* teacher profile */\n.profile-titre{\n    color: #747474;\n    font-weight: bold;\n}\n.social{\n    font-size: 1.5rem;\n    padding-left: 3rem; \n}\n.social-titre{\n    color: #747474;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n.btn-round{\n    padding-right: 2rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teachers.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/teachers.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navbar-absolute {\n    position: absolute;\n    margin-top: 0%;\n}\n.container1{\n    margin-top: 3%;\n    margin-left: 8%;\n    margin-bottom: 3%\n}\n.form-control{\n    height: 3rem;\n}\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n    color: #fff;\n    background-color: #51cbce !important;\n}\n.nav-pills .nav-link{\n    margin-top: 2rem;\n}\n.add-teacher-btn{\n    margin-left: 5rem;\n    margin-right: 5rem;\n  }\n  ", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/demo/demo.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/assets/demo/demo.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tim-row {\n  margin-bottom: 20px;\n}\n\n.tim-white-buttons {\n  background-color: #777777;\n}\n\n.typography-line {\n  padding-left: 25%;\n  margin-bottom: 35px;\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.typography-line span {\n  bottom: 10px;\n  color: #c0c1c2;\n  display: block;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 13px;\n  left: 0;\n  position: absolute;\n  width: 260px;\n  text-transform: none;\n}\n\n.tim-row {\n  padding-top: 60px;\n}\n\n.tim-row h3 {\n  margin-top: 0;\n}\n\n.offline-doc .page-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.offline-doc .footer {\n  position: absolute;\n  width: 100%;\n  background: transparent;\n  bottom: 0;\n  color: #fff;\n  z-index: 1;\n}\n\n@media all and (min-width: 992px) {\n  .sidebar .nav>li.active-pro {\n    position: absolute;\n    width: 100%;\n    bottom: 10px;\n  }\n}\n\n.card.card-upgrade .card-category {\n  max-width: 530px;\n  margin: 0 auto;\n}\n\n/* Nucleo Style */\n\n.demo-iconshtml {\n  font-size: 62.5%;\n}\n\n.demo-icons body {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: white;\n}\n\n.demo-icons a {\n  color: #608CEE;\n  text-decoration: none;\n}\n\n.demo-icons header {\n  text-align: center;\n  padding: 100px 0 0;\n}\n\n.demo-icons header h1 {\n  font-size: 2.8rem;\n}\n\n.demo-icons header p {\n  font-size: 1.4rem;\n  margin-top: 1em;\n}\n\n.demo-icons header a:hover {\n  text-decoration: underline;\n}\n\n.demo-icons .nc-icon {\n  font-size: 34px;\n}\n\n.demo-icons section h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em .2em;\n  margin-bottom: 1em;\n}\n\n.demo-icons ul {\n  padding-left: 0;\n}\n\n.demo-icons ul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.demo-icons ul li {\n  width: 20%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: .25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\n.demo-icons ul li:hover {\n  background: #f4f4f4;\n}\n\n.demo-icons ul p,\n.demo-icons ul em,\n.demo-icons ul input {\n  display: inline-block;\n  font-size: 1rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\n.demo-icons ul p {\n  padding: 20px 0 0;\n  font-size: 12px;\n  margin: 0;\n}\n\n.demo-icons ul p::-moz-selection,\n.demo-icons ul em::-moz-selection {\n  background: #608CEE;\n  color: #efefef;\n}\n\n.demo-icons ul p::selection,\n.demo-icons ul em::selection {\n  background: #608CEE;\n  color: #efefef;\n}\n\n.demo-icons ul em {\n  font-size: 12px;\n}\n\n.demo-icons ul em::before {\n  content: '[';\n}\n\n.demo-icons ul em::after {\n  content: ']';\n}\n\n.demo-icons ul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  display: none;\n}", ""]);



/***/ }),

/***/ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/react-scripts/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.btn-info {\n  background-color: #34b5b8 !important;\n  color: #FFFFFF;\n}\n\n.logout {\n  font-size: 14px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  color: #66615B;\n  padding: 10px 45px 10px 15px;\n  clear: both;\n  white-space: nowrap;\n  width: 100%;\n  display: block;\n  font-weight: 400;\n  background-color: transparent;\n  border: 0;\n  text-decoration: none;\n  box-sizing: border-box;\n  list-style: none;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1.5;\n  font: 600 16px/18px 'Open Sans',sans-serif;\n}\n.logout:hover{\n  color: white;\n  background-color: #66615B;\n}\n.logout:focus{\n  outline: none;\n}\n.add_classe{\n  display: block !important;\n}\n.modal_body{\n  overflow-y: visible !important;\n  overflow-y: initial !important\n}\n.form{\n  height: 550px;\n  overflow-y: auto;\n}\n", ""]);



/***/ }),

/***/ "./src/assets/css/course-list.css":
/*!****************************************!*\
  !*** ./src/assets/css/course-list.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./course-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/course-list.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./course-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/course-list.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./course-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/course-list.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/courses.css":
/*!************************************!*\
  !*** ./src/assets/css/courses.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./courses.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/courses.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./courses.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/courses.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./courses.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/courses.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/login.css":
/*!**********************************!*\
  !*** ./src/assets/css/login.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/login.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/login.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/student-list.css":
/*!*****************************************!*\
  !*** ./src/assets/css/student-list.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./student-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/student-list.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./student-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/student-list.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./student-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/student-list.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/students.css":
/*!*************************************!*\
  !*** ./src/assets/css/students.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./students.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/students.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./students.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/students.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./students.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/students.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/teacher-list.css":
/*!*****************************************!*\
  !*** ./src/assets/css/teacher-list.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./teacher-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teacher-list.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./teacher-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teacher-list.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./teacher-list.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teacher-list.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/teachers.css":
/*!*************************************!*\
  !*** ./src/assets/css/teachers.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./teachers.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teachers.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./teachers.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teachers.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./teachers.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/teachers.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/demo/demo.css":
/*!**********************************!*\
  !*** ./src/assets/demo/demo.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/demo/demo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/demo/demo.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./demo.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/demo/demo.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/fonts/nucleo-icons.eot":
/*!*******************************************!*\
  !*** ./src/assets/fonts/nucleo-icons.eot ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nucleo-icons.f32ed5ad.eot";

/***/ }),

/***/ "./src/assets/fonts/nucleo-icons.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/nucleo-icons.ttf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nucleo-icons.48ac036d.ttf";

/***/ }),

/***/ "./src/assets/fonts/nucleo-icons.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/nucleo-icons.woff ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nucleo-icons.6836b93b.woff";

/***/ }),

/***/ "./src/assets/fonts/nucleo-icons.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/nucleo-icons.woff2 ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nucleo-icons.5c78b4cf.woff2";

/***/ }),

/***/ "./src/assets/img/bg1.png":
/*!********************************!*\
  !*** ./src/assets/img/bg1.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg1.24e62cb4.png";

/***/ }),

/***/ "./src/assets/img/damir-bosnjak.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/damir-bosnjak.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/damir-bosnjak.a6f24e7d.jpg";

/***/ }),

/***/ "./src/assets/img/mike.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/mike.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mike.aab414f7.jpg";

/***/ }),

/***/ "./src/assets/scss/paper-dashboard.scss?v=1.1.0":
/*!******************************************************!*\
  !*** ./src/assets/scss/paper-dashboard.scss?v=1.1.0 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./paper-dashboard.scss?v=1.1.0 */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/paper-dashboard.scss?v=1.1.0");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./paper-dashboard.scss?v=1.1.0 */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/paper-dashboard.scss?v=1.1.0", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./paper-dashboard.scss?v=1.1.0 */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/paper-dashboard.scss?v=1.1.0");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/components/Footer/Footer.jsx";

/*eslint-disable*/

 // used for making the prop types of this component



var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer" + (this.props.default ? " footer-default" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        fluid: this.props.fluid ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "footer-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "general manager")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Demo")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "credits ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\xA9 ", 1900 + new Date().getYear(), ", education ", ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-heart heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), ' ', " by Titi and Miled")))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Footer.propTypes = {
  default: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Navbars/DemoNavbar.jsx":
/*!***********************************************!*\
  !*** ./src/components/Navbars/DemoNavbar.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! routes.js */ "./src/routes.js");






var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/components/Navbars/DemoNavbar.jsx";





var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    _this.disconnect = function (e) {
      e.preventDefault();

      try {
        _this.props.user.connection.signOut().then(function () {
          return _this.props.disconnect();
        });

        _this.props.history.push('/');
      } catch (err) {
        console.log(err);

        _this.props.history.push('/');
      } finally {
        _this.props.history.push('/');
      }
    };

    _this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    _this.toggle = _this.toggle.bind(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.dropdownToggle = _this.dropdownToggle.bind(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.sidebarToggle = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "toggle",
    value: function toggle() {
      if (this.state.isOpen) {
        this.setState({
          color: "transparent"
        });
      } else {
        this.setState({
          color: "dark"
        });
      }

      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "dropdownToggle",
    value: function dropdownToggle(e) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "getBrand",
    value: function getBrand() {
      var brandName = "Default Brand";
      routes_js__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (prop, key) {
        if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
          brandName = prop.name;
          console.log(prop.layout + prop.path);
        }

        return null;
      });
      console.log('brand', brandName);
      return brandName;
    }
  }, {
    key: "openSidebar",
    value: function openSidebar() {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    } // function that adds color dark/transparent to the navbar on resize (this is for the collapse)

  }, {
    key: "updateColor",
    value: function updateColor() {
      if (window.innerWidth < 993 && this.state.isOpen) {
        this.setState({
          color: "dark"
        });
      } else {
        this.setState({
          color: "transparent"
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.updateColor.bind(this));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(e) {
      if (window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf("nav-open") !== -1) {
        document.documentElement.classList.toggle("nav-open");
        this.sidebarToggle.current.classList.toggle("toggled");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (// add or remove classes depending if we are on full-screen-maps page or not
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
          color: this.props.location.pathname.indexOf("full-screen-maps") !== -1 ? "dark" : this.state.color,
          expand: "lg",
          className: this.props.location.pathname.indexOf("full-screen-maps") !== -1 ? "navbar-absolute fixed-top" : "navbar-absolute fixed-top " + (this.state.color === "transparent" ? "navbar-transparent " : ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
          fluid: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "navbar-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "navbar-toggle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          type: "button",
          ref: this.sidebarToggle,
          className: "navbar-toggler",
          onClick: function onClick() {
            return _this2.openSidebar();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "navbar-toggler-bar bar1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "navbar-toggler-bar bar2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "navbar-toggler-bar bar3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarBrand"], {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, this.getBrand())), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
          onClick: this.toggle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "navbar-toggler-bar navbar-kebab",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "navbar-toggler-bar navbar-kebab",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "navbar-toggler-bar navbar-kebab",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
          isOpen: this.state.isOpen,
          navbar: true,
          className: "justify-content-end",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
          className: "no-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          placeholder: "Search...",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
          addonType: "append",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "nc-icon nc-zoom-split",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
          navbar: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
          nav: true,
          isOpen: this.state.dropdownOpen,
          toggle: function toggle(e) {
            return _this2.dropdownToggle(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
          caret: true,
          nav: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "nc-icon nc-settings-gear-65",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
          right: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
          tag: "a",
          onClick: function onClick() {
            _this2.props.history.push('/help');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, "Help"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
          onClick: this.disconnect,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, "Logout")))))))
      );
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    disconnect: function disconnect() {
      dispatch({
        type: 'DISCONNECT'
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.jsx":
/*!********************************************!*\
  !*** ./src/components/Sidebar/Sidebar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! logo.svg */ "./src/logo.svg");
/* harmony import */ var logo_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(logo_svg__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/components/Sidebar/Sidebar.jsx";


 // javascript plugin used to create scrollbars on windows



var ps;

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar).call(this, props));

    _this.activeRoute.bind(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));

    _this.sidebar = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  } // verifies if routeName is the one active (in browser input)


  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "activeRoute",
    value: function activeRoute(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["default"](this.sidebar.current, {
          suppressScrollX: true,
          suppressScrollY: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sidebar",
        "data-color": this.props.bgColor // data-active-color={this.props.activeColor}
        ,
        "data-active-color": "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        className: "simple-text logo-mini",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: logo_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "react-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        className: "simple-text logo-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "general manager")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sidebar-wrapper",
        ref: this.sidebar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.props.routes.map(function (prop, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: _this2.activeRoute(prop.path) + (prop.pro ? " active-pro" : ""),
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
          to: prop.layout + prop.path,
          className: "nav-link",
          activeClassName: "active",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: prop.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, prop.name)));
      }))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/react-scripts/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/react-scripts/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _views_Login_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/Login.jsx */ "./src/views/Login.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_scss_paper_dashboard_scss_v_1_1_0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/scss/paper-dashboard.scss?v=1.1.0 */ "./src/assets/scss/paper-dashboard.scss?v=1.1.0");
/* harmony import */ var assets_scss_paper_dashboard_scss_v_1_1_0__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_scss_paper_dashboard_scss_v_1_1_0__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_demo_demo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/demo/demo.css */ "./src/assets/demo/demo.css");
/* harmony import */ var assets_demo_demo_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_demo_demo_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var layouts_Admin_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! layouts/Admin.jsx */ "./src/layouts/Admin.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/index.js";














var hist = Object(history__WEBPACK_IMPORTED_MODULE_2__["createBrowserHistory"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_11__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_13__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Router"], {
  history: hist,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  exact: true,
  path: "/",
  component: _views_Login_jsx__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/admin",
  render: function render(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(layouts_Admin_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
  to: "/admin/dashboard",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})))), document.getElementById("root"));

/***/ }),

/***/ "./src/layouts/Admin.jsx":
/*!*******************************!*\
  !*** ./src/layouts/Admin.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_Navbars_DemoNavbar_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Navbars/DemoNavbar.jsx */ "./src/components/Navbars/DemoNavbar.jsx");
/* harmony import */ var components_Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Footer/Footer.jsx */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var components_Sidebar_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Sidebar/Sidebar.jsx */ "./src/components/Sidebar/Sidebar.jsx");
/* harmony import */ var views_students_StudentProfile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! views/students/StudentProfile */ "./src/views/students/StudentProfile.jsx");
/* harmony import */ var views_students_AddStudent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! views/students/AddStudent */ "./src/views/students/AddStudent.js");
/* harmony import */ var views_courses_AddCourse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! views/courses/AddCourse */ "./src/views/courses/AddCourse.js");
/* harmony import */ var views_teachers_teacher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! views/teachers/teacher */ "./src/views/teachers/teacher.js");
/* harmony import */ var views_teachers_teachers_profile_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! views/teachers/teachers-profile.jsx */ "./src/views/teachers/teachers-profile.jsx");
/* harmony import */ var views_courses_CourseInfo_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! views/courses/CourseInfo.jsx */ "./src/views/courses/CourseInfo.jsx");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! routes.js */ "./src/routes.js");





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/layouts/Admin.jsx";
 // javascript plugin used to create scrollbars on windows













var ps;

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dashboard);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard).call(this, props));

    _this.handleActiveClick = function (color) {
      _this.setState({
        activeColor: color
      });
    };

    _this.handleBgClick = function (color) {
      _this.setState({
        backgroundColor: color
      });
    };

    _this.state = {
      backgroundColor: "black",
      activeColor: "warning"
    };
    _this.mainPanel = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](this.mainPanel.current);
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(e) {
      if (e.history.action === "PUSH") {
        this.mainPanel.current.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Sidebar_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, this.props, {
        routes: routes_js__WEBPACK_IMPORTED_MODULE_17__["default"],
        bgColor: this.state.backgroundColor,
        activeColor: this.state.activeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main-panel",
        ref: this.mainPanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Navbars_DemoNavbar_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, routes_js__WEBPACK_IMPORTED_MODULE_17__["default"].map(function (prop, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
          exact: true,
          path: prop.layout + prop.path,
          component: prop.component,
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/professors/add",
        component: views_teachers_teacher__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/students/add",
        component: views_students_AddStudent__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/courses/add",
        component: views_courses_AddCourse__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/professors/profile/:id",
        component: views_teachers_teachers_profile_jsx__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/students/profile/:id",
        component: views_students_StudentProfile__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/course/profile/:id",
        component: views_courses_CourseInfo_jsx__WEBPACK_IMPORTED_MODULE_16__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/reducers/classes.js":
/*!*********************************!*\
  !*** ./src/reducers/classes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reducerClasses = function reducerClasses() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_CLASS':
      return state.concat(action);

    case 'EDIT_CLASS':
      {
        var classToEdit = state.filter(function (el) {
          return el.id === action.classe.id;
        })[0];
        if (typeof classToEdit === 'undefined') return state;
        classToEdit.start = action.classe.start;
        classToEdit.end = action.classe.end;
        return state.map(function (el) {
          return el.id === action.classe.id ? classToEdit : el;
        });
      }

    case 'INIT_CLASSES':
      return state = action.classes;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducerClasses);

/***/ }),

/***/ "./src/reducers/corses.js":
/*!********************************!*\
  !*** ./src/reducers/corses.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reducerCorses = function reducerCorses() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_CORSE':
      return state.concat(action.corse);

    case 'INIT_CORSES':
      return state = action.corses;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducerCorses);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/reducers/classes.js");
/* harmony import */ var _corses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corses */ "./src/reducers/corses.js");
/* harmony import */ var _professors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./professors */ "./src/reducers/professors.js");
/* harmony import */ var _students__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students */ "./src/reducers/students.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./src/reducers/user.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  classes: _classes__WEBPACK_IMPORTED_MODULE_1__["default"],
  corses: _corses__WEBPACK_IMPORTED_MODULE_2__["default"],
  students: _students__WEBPACK_IMPORTED_MODULE_4__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_5__["default"],
  professors: _professors__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/reducers/professors.js":
/*!************************************!*\
  !*** ./src/reducers/professors.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reducerProfessors = function reducerProfessors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_PROF':
      return state.concat(action.prof);

    case 'INIT_PROFS':
      return state = action.profs;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducerProfessors);

/***/ }),

/***/ "./src/reducers/students.js":
/*!**********************************!*\
  !*** ./src/reducers/students.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reducerStudents = function reducerStudents() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_STUD':
      return state.concat(action.student);

    case 'INIT_STUDS':
      return state = action.students;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducerStudents);

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reducerUser = function reducerUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isConnected: false,
    connection: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CONNECT':
      return {
        isConnected: true,
        connection: action.connection
      };

    case 'DISCONNECT':
      return {
        isConnected: false,
        connection: null
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducerUser);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var views_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! views/Dashboard.jsx */ "./src/views/Dashboard.jsx");
/* harmony import */ var views_Calendar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/Calendar.jsx */ "./src/views/Calendar.jsx");
/* harmony import */ var views_teachers_TeachersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! views/teachers/TeachersList */ "./src/views/teachers/TeachersList.js");
/* harmony import */ var views_students_StudentsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! views/students/StudentsList */ "./src/views/students/StudentsList.js");
/* harmony import */ var views_courses_CoursesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! views/courses/CoursesList */ "./src/views/courses/CoursesList.js");





var routes = [{
  path: "/dashboard",
  name: "Dashboard",
  icon: "nc-icon nc-bank",
  component: views_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_0__["default"],
  layout: "/admin"
}, {
  path: "/calendar",
  name: "Calendar",
  icon: "nc-icon nc-calendar-60",
  component: views_Calendar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  layout: "/admin"
}, {
  path: "/professors",
  name: "Professors",
  icon: "nc-icon nc-single-02",
  component: views_teachers_TeachersList__WEBPACK_IMPORTED_MODULE_2__["default"],
  layout: "/admin"
}, {
  path: "/students",
  name: "Students",
  icon: "nc-icon nc-single-02",
  component: views_students_StudentsList__WEBPACK_IMPORTED_MODULE_5__["default"],
  layout: "/admin"
}, {
  path: "/courses",
  name: "Courses",
  icon: "nc-icon nc-book-bookmark",
  component: views_courses_CoursesList__WEBPACK_IMPORTED_MODULE_4__["default"],
  layout: "/admin"
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/variables/charts.jsx":
/*!**********************************!*\
  !*** ./src/variables/charts.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dashboard24HoursPerformanceChart = {
  data: function data(canvas) {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        borderColor: "#5FFBF1",
        backgroundColor: "#5FFBF1",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354, 356, 300]
      }]
    };
  },
  options: {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5 //padding: 20

        },
        gridLines: {
          drawBorder: false,
          zeroLineColor: "#ccc",
          color: "rgba(255,255,255,0.05)"
        }
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent",
          display: false
        },
        ticks: {
          padding: 20,
          fontColor: "#9f9f9f"
        }
      }]
    }
  }
};
var dashboardEmailStatisticsChart = {
  data: function data(canvas) {
    return {
      labels: [1, 2, 3],
      datasets: [{
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
        borderWidth: 0,
        data: [342, 480, 530, 120]
      }]
    };
  },
  options: {
    legend: {
      display: false
    },
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          zeroLineColor: "transparent",
          color: "rgba(255,255,255,0.05)"
        }
      }],
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          display: false
        }
      }]
    }
  }
};
var dashboardNASDAQChart = {
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: "#fbc658",
      backgroundColor: "transparent",
      pointBorderColor: "#fbc658",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    }, {
      data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      fill: false,
      borderColor: "#51CACF",
      backgroundColor: "transparent",
      pointBorderColor: "#51CACF",
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    }]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};
module.exports = {
  dashboard24HoursPerformanceChart: dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart: dashboardEmailStatisticsChart,
  dashboardNASDAQChart: dashboardNASDAQChart
};

/***/ }),

/***/ "./src/variables/firebaseConfig.js":
/*!*****************************************!*\
  !*** ./src/variables/firebaseConfig.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDSjWKFiDWFLfl7M3MnAsQefS18UZ7BNfU",
  authDomain: "oauth-8c49b.firebaseapp.com",
  databaseURL: "https://oauth-8c49b.firebaseio.com",
  projectId: "oauth-8c49b",
  storageBucket: "oauth-8c49b.appspot.com",
  messagingSenderId: "962794367709",
  appId: "1:962794367709:web:1593db2b029ac1ec"
};
/* harmony default export */ __webpack_exports__["default"] = (firebaseConfig);

/***/ }),

/***/ "./src/views/Calendar.jsx":
/*!********************************!*\
  !*** ./src/views/Calendar.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/bootstrap */ "./node_modules/@fullcalendar/bootstrap/main.js");
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fullcalendar/core/main.css */ "./node_modules/@fullcalendar/core/main.css");
/* harmony import */ var _fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_main_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var fullcalendar_reactwrapper_dist_css_fullcalendar_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! fullcalendar-reactwrapper/dist/css/fullcalendar.min.css */ "./node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css");
/* harmony import */ var fullcalendar_reactwrapper_dist_css_fullcalendar_min_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(fullcalendar_reactwrapper_dist_css_fullcalendar_min_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _algorithm_create_class__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./algorithm/create_class */ "./src/views/algorithm/create_class.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);






var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/Calendar.jsx";

















var CalendarFull =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CalendarFull, _React$Component);

  function CalendarFull(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CalendarFull);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CalendarFull).call(this, props));

    _this.componentDidMount = function () {
      axios__WEBPACK_IMPORTED_MODULE_20___default.a.get('/classes').then(function (res) {
        return _this.props.initClassesReducer(res.data);
      });
    };

    _this.addClass = function (e) {
      _this.toggle(e);

      var newEvents = Object(_algorithm_create_class__WEBPACK_IMPORTED_MODULE_18__["default"])({
        class: _this.state.class,
        course: _this.state.course,
        professor: _this.state.professor,
        start: _this.state.start,
        color: _this.state.color,
        textColor: _this.state.textColor,
        repeat: _this.state.repeat,
        end: _this.state.end
      });
      axios__WEBPACK_IMPORTED_MODULE_20___default.a.post('/add_classes', newEvents).then(function () {
        _this.props.addClassReducer(newEvents);
      }).then(function () {
        axios__WEBPACK_IMPORTED_MODULE_20___default.a.get('/classes').then(function (res) {
          return _this.props.initClassesReducer(res.data);
        });
      }).then(function () {
        return _this.setState(_this.state);
      }).catch(function (err) {
        return console.log('add_classes', err);
      });
    };

    _this.handleForm = function (e) {
      _this.setState(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    };

    _this.toggle = function (event) {
      var name = event.target.name;
      var state = !(_this.state[name] === true);

      _this.setState(function (prevState) {
        return Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, state);
      });
    };

    _this.state = {
      /** modal */
      add: false,

      /** to add a class */
      class: '',
      course: "Science",
      professor: 'Titi',
      start: moment__WEBPACK_IMPORTED_MODULE_13___default()(new Date()).format('YYYY-MM-DDTHH:mm'),
      end: moment__WEBPACK_IMPORTED_MODULE_13___default()(new Date()).format('YYYY-MM-DDTHH:mm'),
      color: '#055049',
      textColor: '#faf35e',
      repeat: '7'
    };
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CalendarFull, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // this.setState({shouldUpdate: false})
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
        header: {
          left: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          center: 'title',
          right: 'prev,next today'
        },
        navLinks: true,
        defaultView: "dayGridMonth",
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7___default.a, _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_8___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12___default.a],
        weekends: false,
        events: this.props.classes,
        themeSystem: "bootstrap",
        displayEventEnd: "true",
        dateClick: function dateClick(info) {
          return _this2.setState({
            add: true,
            start: moment__WEBPACK_IMPORTED_MODULE_13___default()(info.date).format('YYYY-MM-DDTHH:mm'),
            end: moment__WEBPACK_IMPORTED_MODULE_13___default()(info.date).format('YYYY-MM-DDTHH:mm')
          });
        },
        eventPositioned: function eventPositioned(_ref2) {
          var event = _ref2.event,
              isStart = _ref2.isStart,
              isEnd = _ref2.isEnd,
              isMirror = _ref2.isMirror;
          console.log(isStart, isEnd, isMirror, event.id, event);

          if (isStart && isEnd && isMirror) {
            axios__WEBPACK_IMPORTED_MODULE_20___default.a.put("/update_classes/".concat(event.id), {
              id: parseFloat(event.id),
              start: event.start,
              end: event.end
            }).then(function () {
              return _this2.props.editClassReducer({
                id: parseFloat(event.id),
                start: event.start,
                end: event.end
              });
            }).catch(function (err) {
              return console.log('p update_classes', err);
            });
          }
        },
        eventResize: function eventResize(_ref3) {
          var event = _ref3.event;
          axios__WEBPACK_IMPORTED_MODULE_20___default.a.put("/update_classes/".concat(event.id), {
            id: parseFloat(event.id),
            start: event.start,
            end: event.end
          }).then(function () {
            return _this2.props.editClassReducer({
              id: parseFloat(event.id),
              start: event.start,
              end: event.end
            });
          }).catch(function (err) {
            return console.log('r update_classes', err);
          });
        },
        editable: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Modal"], {
        isOpen: this.state.add,
        className: "add_classes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["ModalHeader"], {
        name: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Add New Class"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["ModalBody"], {
        className: "modal_body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Form"], {
        className: "form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Class"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "text",
        value: this.state.class,
        onChange: this.handleForm,
        required: true,
        name: "class",
        placeholder: "class name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Course"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "select",
        name: "course",
        required: true,
        onChange: this.handleForm,
        value: this.state.course,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Maths",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Maths"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Physics",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Physics"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Science",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Science"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Dance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Dance"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Sport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Sport"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Professor"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "select",
        name: "professor",
        required: true,
        onChange: this.handleForm,
        value: this.state.professor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Jane Doe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Jane Doe"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Titi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Titi"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Jasser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Jasser"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Asma",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Asma"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "Nessrine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Nessrine"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Start Date"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "datetime-local",
        name: "start",
        value: this.state.start,
        onChange: this.handleForm,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Repeat"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "select",
        name: "repeat",
        required: true,
        onChange: this.handleForm,
        value: this.state.repeat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Only This Time"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        value: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Every Week"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "End Date"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "datetime-local",
        name: "end",
        value: this.state.end,
        onChange: this.handleForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Class Background Color"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "color",
        name: "color",
        value: this.state.color,
        onChange: this.handleForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Class Text Color"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Input"], {
        type: "color",
        name: "textColor",
        value: this.state.textColor,
        onChange: this.handleForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        name: "add",
        color: "primary",
        onClick: this.addClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Add"), ' ', react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_17__["Button"], {
        name: "add",
        color: "secondary",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Cancel")))))));
    }
  }]);

  return CalendarFull;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addClassReducer: function addClassReducer(classe) {
      dispatch({
        type: 'ADD_CLASS',
        classe: classe
      });
    },
    editClassReducer: function editClassReducer(classe) {
      dispatch({
        type: 'EDIT_CLASS',
        classe: classe
      });
    },
    initClassesReducer: function initClassesReducer(classes) {
      dispatch({
        type: 'INIT_CLASSES',
        classes: classes
      });
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    classes: state.classes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps)(CalendarFull));

/***/ }),

/***/ "./src/views/Dashboard.jsx":
/*!*********************************!*\
  !*** ./src/views/Dashboard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! variables/charts.jsx */ "./src/variables/charts.jsx");
/* harmony import */ var variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/Dashboard.jsx";
 // react plugin used to create charts

 // reactstrap components

 // core components





var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, _React$Component);

  function Dashboard() {
    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dashboard);

    return Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard).apply(this, arguments));
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dashboard, [{
    key: "datasetKeyProvider",
    value: function datasetKeyProvider() {
      return Math.random();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/corses').then(function (res) {
        return _this.props.initCoursesReducer(res.data);
      });
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/students').then(function (res) {
        return _this.props.initStudentsReducer(res.data);
      });
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/classes').then(function (res) {
        return _this.props.initClassesReducer(res.data);
      });
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/professors').then(function (res) {
        console.log('prof data', res.data);

        _this.props.initProfessorsReducer(res.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('props', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: "3",
        md: "6",
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "4",
        xs: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-big text-center icon-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "nc-icon nc-globe text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8",
        xs: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "card-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Students Number"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        tag: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.props.students.length), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/admin/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-sync-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), " Update now"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: "3",
        md: "6",
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "4",
        xs: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-big text-center icon-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "nc-icon nc-money-coins text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8",
        xs: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "card-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Teachers Number"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/admin/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-sync-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), " Update now"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: "3",
        md: "6",
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "4",
        xs: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-big text-center icon-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "nc-icon nc-vector text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8",
        xs: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "card-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Classes Number"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        tag: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, this.props.classes.length), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/admin/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-sync-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), " Update now"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: "3",
        md: "6",
        sm: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "4",
        xs: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-big text-center icon-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "nc-icon nc-favourite-28 text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8",
        xs: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "card-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Courses Number"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        tag: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.props.corses.length), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "stats",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/admin/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-sync-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), " Update now")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Inscriptions every session"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "card-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Inscriptions")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        datasetKeyProvider: function datasetKeyProvider() {
          return _this2.datasetKeyProvider;
        },
        data: variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__["dashboard24HoursPerformanceChart"].data,
        options: variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__["dashboard24HoursPerformanceChart"].options,
        width: 400,
        height: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "courses inscriptions Statistics")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Pie"], {
        data: variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__["dashboardEmailStatisticsChart"].data,
        options: variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__["dashboardEmailStatisticsChart"].options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-circle text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), " Opened", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-circle text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), " Read", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-circle text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), " Deleted", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-circle text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), " Unopened")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "NASDAQ: AAPL"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "card-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Line Chart with Points")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        datasetKeyProvider: function datasetKeyProvider() {
          return _this2.datasetKeyProvider;
        },
        data: variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__["dashboardNASDAQChart"].data,
        options: variables_charts_jsx__WEBPACK_IMPORTED_MODULE_8__["dashboardNASDAQChart"].options,
        width: 400,
        height: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chart-legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-circle text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), " BMW 5 Series")))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initCoursesReducer: function initCoursesReducer(corses) {
      dispatch({
        type: 'INIT_CORSES',
        corses: corses
      });
    },
    initStudentsReducer: function initStudentsReducer(students) {
      dispatch({
        type: 'INIT_STUDS',
        students: students
      });
    },
    initClassesReducer: function initClassesReducer(classes) {
      dispatch({
        type: 'INIT_CLASSES',
        classes: classes
      });
    },
    initProfessorsReducer: function initProfessorsReducer(profs) {
      dispatch({
        type: 'INIT_PROFS',
        profs: profs
      });
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    corses: state.corses,
    students: state.students,
    classes: state.classes,
    profs: state.profs
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Dashboard));

/***/ }),

/***/ "./src/views/Login.jsx":
/*!*****************************!*\
  !*** ./src/views/Login.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_login_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../assets/css/login.css */ "./src/assets/css/login.css");
/* harmony import */ var _assets_css_login_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_login_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-social-login-buttons */ "./node_modules/react-social-login-buttons/lib/index.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_with_firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-with-firebase-auth */ "./node_modules/react-with-firebase-auth/dist/index.es.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _variables_firebaseConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../variables/firebaseConfig */ "./src/variables/firebaseConfig.js");






var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/Login.jsx";









var firebaseApp = firebase_app__WEBPACK_IMPORTED_MODULE_12__["initializeApp"](_variables_firebaseConfig__WEBPACK_IMPORTED_MODULE_14__["default"]);
var firebaseAppAuth = firebaseApp.auth();
var providers = {
  googleProvider: new firebase_app__WEBPACK_IMPORTED_MODULE_12__["auth"].GoogleAuthProvider()
};

var FormPage =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FormPage, _Component);

  function FormPage(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FormPage);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(FormPage).call(this, props));

    _this.signInSignUp = function () {
      var _this$props = _this.props,
          signInWithEmailAndPassword = _this$props.signInWithEmailAndPassword,
          createUserWithEmailAndPassword = _this$props.createUserWithEmailAndPassword;
      var create = createUserWithEmailAndPassword(_this.state.email, _this.state.password);
      create.then(function (value) {
        if (!value) {
          var _create = signInWithEmailAndPassword(_this.state.email, _this.state.password);

          _create.then(function (value) {
            if (!value) alert('wrong email or password');
          });
        }
      });
    };

    _this.handleChange = function (event) {
      _this.setState(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    };

    var user = props.user;
    _this.state = {
      email: '',
      password: '',
      isConnected: user != null
    };
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FormPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isConnected: this.props.user != null
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var user = nextProps.user;
      this.setState({
        isConnected: user != null
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.user != null) {
        var user = nextProps.user,
            signOut = nextProps.signOut;
        this.props.login({
          user: user,
          signOut: signOut
        });
      }

      return this.state.isConnected !== nextState.isConnected;
    }
  }, {
    key: "render",
    value: function render() {
      var signInWithGoogle = this.props.signInWithGoogle;
      console.log(this.props, this.state.isConnected);
      if (this.state.isConnected) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
        to: "/admin/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "bglogin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, " General Manager")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "login-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "login-html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "tab-1",
        type: "radio",
        name: "tab",
        className: "sign-in",
        defaultChecked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "tab-1",
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Authentication"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "tab-2",
        type: "radio",
        name: "tab",
        className: "sign-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "tab-2",
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "login-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sign-in-htm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "user",
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        required: true,
        id: "user",
        name: "email",
        type: "email",
        className: "input",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "pass",
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        required: true,
        id: "pass",
        name: "password",
        type: "password",
        className: "input",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "check",
        type: "checkbox",
        className: "check",
        defaultChecked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), " Keep me Signed in")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: this.state.isConnected ? '/admin/dashboard' : '/',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "button",
        onClick: this.signInSignUp,
        className: "button",
        defaultValue: "Sign in / Sign up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "foot-lnk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: this.state.isConnected ? '/admin/dashboard' : '/',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginButton"], {
        className: "gmail-button",
        onClick: signInWithGoogle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))))))));
    }
  }]);

  return FormPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(connection) {
      dispatch({
        type: 'CONNECT',
        connection: connection
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(null, mapDispatchToProps)(Object(react_with_firebase_auth__WEBPACK_IMPORTED_MODULE_11__["default"])({
  providers: providers,
  firebaseAppAuth: firebaseAppAuth
})(FormPage)));

/***/ }),

/***/ "./src/views/algorithm/create_class.js":
/*!*********************************************!*\
  !*** ./src/views/algorithm/create_class.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


var addOneClass = function addOneClass(objectC, duration) {
  return {
    groupId: Math.random() * 1000000,
    start: moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(objectC.start)).format('YYYY-MM-DDTHH:mm'),
    end: moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(objectC.start).setMinutes(new Date(objectC.start).getMinutes() + duration)).format('YYYY-MM-DDTHH:mm'),
    title: objectC.professor + ' - ' + objectC.course + ' - ' + objectC.class,
    class: objectC.class,
    color: objectC.color,
    textColor: objectC.textColor,
    professor: objectC.professor,
    course: objectC.course
  };
};

var f = function f(objectC) {
  var duration = 90;

  switch (objectC.repeat) {
    case '1':
      return [addOneClass(objectC, duration)];

    case '7':
      {
        var x = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(objectC.start)).format('YYYY-MM-DDTHH:mm');
        var events = [];
        var groupId = Math.random();

        while (x <= objectC.end) {
          var y = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(objectC.start).setMinutes(new Date(objectC.start).getMinutes() + duration)).format('YYYY-MM-DDTHH:mm');
          events.push({
            id: Math.random(),
            groupId: groupId,
            start: x,
            end: y,
            title: objectC.professor + ' - ' + objectC.course + ' - ' + objectC.class,
            class: objectC.class,
            color: objectC.color,
            textColor: objectC.textColor,
            professor: objectC.professor,
            course: objectC.course
          });
          x = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(x).setDate(new Date(x).getDate() + 7)).format('YYYY-MM-DDTHH:mm');
        }

        console.log('events', events);
        return events;
      }

    default:
      return [addOneClass(objectC, duration)];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (f);

/***/ }),

/***/ "./src/views/courses/AddCourse.js":
/*!****************************************!*\
  !*** ./src/views/courses/AddCourse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_courses_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/courses.css */ "./src/assets/css/courses.css");
/* harmony import */ var _assets_css_courses_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_courses_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var views_courses_AddCoursesInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! views/courses/AddCoursesInfo */ "./src/views/courses/AddCoursesInfo.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/courses/AddCourse.js";





var Course =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Course, _Component);

  function Course(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Course);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Course).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Course, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav nav-pills mb-3",
        id: "pills-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-link active",
        id: "pills-home-tab",
        "data-toggle": "pill",
        href: "#pills-home",
        role: "tab",
        "aria-controls": "pills-home",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Course Informations"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-content",
        id: "pills-tabContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-pane fade show active",
        id: "pills-home",
        role: "tabpanel",
        "aria-labelledby": "pills-home-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(views_courses_AddCoursesInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))))))))));
    }
  }]);

  return Course;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ }),

/***/ "./src/views/courses/AddCoursesInfo.js":
/*!*********************************************!*\
  !*** ./src/views/courses/AddCoursesInfo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_courses_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../assets/css/courses.css */ "./src/assets/css/courses.css");
/* harmony import */ var _assets_css_courses_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_courses_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/courses/AddCoursesInfo.js";






var BasicInfoCourse =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BasicInfoCourse, _Component);

  function BasicInfoCourse(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BasicInfoCourse);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BasicInfoCourse).call(this, props));

    _this.saveInfos = function (e) {
      if (e.target.name === 'img') _this.setState({
        image: URL.createObjectURL(e.target.files[0])
      });
    };

    _this.handleChange = function (e) {
      _this.setState(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    };

    _this.addCourse = function () {
      console.log('add course');

      if (!_this.state.imagePreviewUrl || !_this.state.name || !_this.state.duration || !_this.state.description || !_this.state.price) {
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/add_corse', {
          picture: _this.state.imagePreviewUrl,
          name: _this.state.name,
          duration: _this.state.duration,
          description: _this.state.description,
          price: _this.state.price
        }).then(function () {
          return _this.props.addCourseReducer({
            picture: _this.state.imagePreviewUrl,
            name: _this.state.name,
            duration: _this.state.duration,
            description: _this.state.description,
            price: _this.state.price
          });
        }).catch(function (err) {
          return alert(err);
        }); // this.props.history.push('/admin/courses')
      }
    };

    _this.state = {
      file: '',
      imagePreviewUrl: '',
      name: '',
      duration: '',
      description: '',
      price: ''
    };
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BasicInfoCourse, [{
    key: "_handleImgSubmit",
    value: function _handleImgSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
    }
  }, {
    key: "_handleImageChange",
    value: function _handleImageChange(e) {
      var _this2 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function () {
        _this2.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var imagePreviewUrl = this.state.imagePreviewUrl;
      var $imagePreview = imagePreviewUrl ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: imagePreviewUrl,
        alt: "prev",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "previewText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\"Add Photo\"");
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "name",
        placeholder: "Course Name",
        value: this.state.name,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        name: "duration",
        placeholder: "Course Duration",
        value: this.state.duration,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "duration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Minutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        className: "form-control",
        name: "description",
        rows: 3,
        placeholder: "Course Description",
        value: this.state.description,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        name: "price",
        placeholder: "Course Price",
        value: this.state.price,
        onChange: this.handleChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "DT")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "previewComponent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onSubmit: function onSubmit(e) {
          return _this3._handleImgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "file",
        className: "image",
        onChange: function onChange(e) {
          return _this3._handleImageChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "submitButton",
        type: "submit",
        onClick: function onClick(e) {
          return _this3._handleImgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "\"Select file\""), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "imgPreview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, $imagePreview))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.addCourse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Save"))));
    }
  }]);

  return BasicInfoCourse;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCourseReducer: function addCourseReducer(corse) {
      dispatch({
        type: 'ADD_CORSE',
        corse: corse
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(BasicInfoCourse)));

/***/ }),

/***/ "./src/views/courses/CourseInfo.jsx":
/*!******************************************!*\
  !*** ./src/views/courses/CourseInfo.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_courses_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/courses.css */ "./src/assets/css/courses.css");
/* harmony import */ var _assets_css_courses_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_courses_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/courses/CourseInfo.jsx";





var CourseInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CourseInfo, _React$Component);

  function CourseInfo(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseInfo);

    console.log('props', props);
    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CourseInfo).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseInfo, [{
    key: "render",
    value: function render() {
      console.log('one course prev', this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "card-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "...",
        src: this.props.location.course.picture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "avatar border-gray",
        alt: "...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.location.course.name)))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "card-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        className: "profile-titre",
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Course")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: this.props.location.course.name,
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        value: this.props.location.course.duration,
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "duration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Minutes")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
        className: "form-control",
        rows: 10,
        value: this.props.location.course.description,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "number",
        className: "form-control",
        value: this.props.location.course.price,
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "DT")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        disabled: true,
        type: "textarea",
        defaultValue: "Oh so, your weak rhyme You doubt I'll bother, reading into it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))))))))));
    }
  }]);

  return CourseInfo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    corses: state.contactReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(CourseInfo));

/***/ }),

/***/ "./src/views/courses/CoursesList.js":
/*!******************************************!*\
  !*** ./src/views/courses/CoursesList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CourseInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CourseInfo */ "./src/views/courses/CourseInfo.jsx");
/* harmony import */ var _OneCourse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OneCourse */ "./src/views/courses/OneCourse.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/courses/CoursesList.js";








var CourseList =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CourseList, _Component);

  function CourseList(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseList);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CourseList).call(this, props));

    _this.componentDidMount = function () {
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('/corses').then(function (res) {
        return _this.props.initCoursesReducer(res.data);
      });
    };

    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        key: this.props.location.pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        to: "/admin/courses/add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success add-course-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Add Course+"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "courses-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row courses",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.corse.map(function (course, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
          key: i,
          to: {
            pathname: "/admin/course/profile/".concat(course._id),
            course: _this2.props.corse.filter(function (el) {
              return el._id === course._id;
            })[0]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_OneCourse__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: i,
          course: course,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }));
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/course/profile/:id",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CourseInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
            course: _this2.props.corse.filter(function (el) {
              return el._id === props.match.params.id;
            })[0],
            _id: props.match.params.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }))));
    }
  }]);

  return CourseList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    corse: state.corses
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initCoursesReducer: function initCoursesReducer(corses) {
      dispatch({
        type: 'INIT_CORSES',
        corses: corses
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(CourseList));

/***/ }),

/***/ "./src/views/courses/OneCourse.js":
/*!****************************************!*\
  !*** ./src/views/courses/OneCourse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_course_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/course-list.css */ "./src/assets/css/course-list.css");
/* harmony import */ var _assets_css_course_list_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_course_list_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/courses/OneCourse.js";



var OneCourse =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OneCourse, _Component);

  function OneCourse(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneCourse);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OneCourse).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneCourse, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-deck one-course",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.course.picture,
        className: "card-img-top",
        alt: "pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "card-title courses-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.course.name))));
    }
  }]);

  return OneCourse;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OneCourse);

/***/ }),

/***/ "./src/views/students/AddStudent.js":
/*!******************************************!*\
  !*** ./src/views/students/AddStudent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_students_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/students.css */ "./src/assets/css/students.css");
/* harmony import */ var _assets_css_students_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_students_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var views_students_AddStudentInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! views/students/AddStudentInfo */ "./src/views/students/AddStudentInfo.js");
/* harmony import */ var views_teachers_teacher_social_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! views/teachers/teacher-social-info */ "./src/views/teachers/teacher-social-info.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/students/AddStudent.js";






var Student =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Student, _Component);

  function Student(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Student);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Student).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Student, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav nav-pills mb-3",
        id: "pills-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-link active",
        id: "pills-home-tab",
        "data-toggle": "pill",
        href: "#pills-home",
        role: "tab",
        "aria-controls": "pills-home",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Basic Informations")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-link",
        id: "pills-contact-tab",
        "data-toggle": "pill",
        href: "#pills-contact",
        role: "tab",
        "aria-controls": "pills-contact",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Social Informations"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-content",
        id: "pills-tabContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-pane fade show active",
        id: "pills-home",
        role: "tabpanel",
        "aria-labelledby": "pills-home-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(views_students_AddStudentInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        getBasicInfo: this.getBasicInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-pane fade",
        id: "pills-contact",
        role: "tabpanel",
        "aria-labelledby": "pills-contact-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(views_teachers_teacher_social_info__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))))))))));
    }
  }]);

  return Student;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Student);

/***/ }),

/***/ "./src/views/students/AddStudentInfo.js":
/*!**********************************************!*\
  !*** ./src/views/students/AddStudentInfo.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/students/AddStudentInfo.js";






var BasicInfoStudent =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BasicInfoStudent, _Component);

  function BasicInfoStudent(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BasicInfoStudent);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BasicInfoStudent).call(this, props));

    _this.saveInfos = function (e) {
      if (e.target.name === 'img') _this.setState({
        image: URL.createObjectURL(e.target.files[0])
      });
    };

    _this.handleChange = function (e) {
      _this.setState(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value), function () {
        return _this.props.getBasicInfo(_this.state.name, _this.state.birthdate, _this.state.course, _this.state.email, _this.state.phone, _this.state.address, _this.state.state, _this.state.zipcode, _this.state.about, _this.state.imagePreviewUrl);
      });
    };

    _this.addStudent = function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/add_student', {
        picture: _this.state.picture,
        name: _this.state.name,
        phone: _this.state.phone,
        address: _this.state.address,
        birthdate: _this.state.birthdate,
        courses: _this.state.courses,
        email: _this.state.email,
        state: _this.state.state,
        zipcode: _this.state.zipcode,
        about: _this.state.about
      }).then(function () {
        return _this.props.addStudentReducer({
          picture: _this.state.picture,
          name: _this.state.name,
          phone: _this.state.phone,
          address: _this.state.address,
          birthdate: _this.state.birthdate,
          courses: _this.state.courses,
          email: _this.state.email,
          state: _this.state.state,
          zipcode: _this.state.zipcode,
          about: _this.state.about
        });
      }).catch(function (err) {
        return alert(err);
      });

      _this.props.history.push('/admin/students');
    };

    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BasicInfoStudent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('student props', this.props);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/corses').then(function (res) {
        return _this2.props.initCourseReducer(res.data);
      });
    }
  }, {
    key: "_handleImgSubmit",
    value: function _handleImgSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
    }
  }, {
    key: "_handleImageChange",
    value: function _handleImageChange(e) {
      var _this3 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function () {
        _this3.setState({
          file: file,
          imagePreviewUrl: reader.result
        }, function () {
          return _this3.props.getBasicInfo(_this3.state.name, _this3.state.birthdate, _this3.state.course, _this3.state.email, _this3.state.phone, _this3.state.address, _this3.state.state, _this3.state.zipcode, _this3.state.about, _this3.state.imagePreviewUrl);
        });
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var imagePreviewUrl = this.state.imagePreviewUrl;
      var $imagePreview = imagePreviewUrl ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: imagePreviewUrl,
        alt: "prev",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "previewText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\"Add Photo\"");
      console.log('img', imagePreviewUrl);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "name",
        placeholder: "Full Name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "date",
        className: "form-control",
        name: "birthdate",
        placeholder: "Date of birth",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-3",
        name: "gender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        id: "inputState",
        className: "form-control",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Select Gender"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Male"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Female")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Studying :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        multiple: true,
        className: "form-control",
        name: "courses",
        id: "exampleFormControlSelect2",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.props.corse.map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          key: i,
          value: el._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, el.name);
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "email",
        placeholder: "Email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "tel",
        className: "form-control",
        name: "phone",
        placeholder: "Mobile.No",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "address",
        placeholder: "Adress",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        id: "inputState",
        className: "form-control",
        name: "state",
        defaultValue: "Tunis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Tunis"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Sousse"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Sfax"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "zipcode",
        placeholder: "Zip Code",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "textarea",
        name: "about",
        defaultValue: "Oh so, your weak rhyme You doubt I'll bother, reading into it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "previewComponent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onSubmit: function onSubmit(e) {
          return _this4._handleImgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "file",
        className: "image",
        onChange: function onChange(e) {
          return _this4._handleImageChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "submitButton",
        type: "submit",
        onClick: function onClick(e) {
          return _this4._handleImgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "\"Select file\""), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "imgPreview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, $imagePreview))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Save"))));
    }
  }]);

  return BasicInfoStudent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    corse: state.corses
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initCourseReducer: function initCourseReducer(corses) {
      dispatch({
        type: 'INIT_CORSES',
        corses: corses
      });
    },
    addStudentReducer: function addStudentReducer(student) {
      dispatch({
        type: 'ADD_STUD',
        student: student
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(BasicInfoStudent)));

/***/ }),

/***/ "./src/views/students/OneStudent.js":
/*!******************************************!*\
  !*** ./src/views/students/OneStudent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_student_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/student-list.css */ "./src/assets/css/student-list.css");
/* harmony import */ var _assets_css_student_list_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_student_list_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/students/OneStudent.js";



var OneStudent =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OneStudent, _Component);

  function OneStudent(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneStudent);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OneStudent).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneStudent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-deck one-student",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.student.picture,
        className: "card-img-top",
        alt: "pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "card-title students-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.student.name))));
    }
  }]);

  return OneStudent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OneStudent);

/***/ }),

/***/ "./src/views/students/StudentProfile.jsx":
/*!***********************************************!*\
  !*** ./src/views/students/StudentProfile.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_student_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/student-list.css */ "./src/assets/css/student-list.css");
/* harmony import */ var _assets_css_student_list_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_student_list_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/students/StudentProfile.jsx";

 // reactstrap components



var StudentProfile =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StudentProfile, _React$Component);

  function StudentProfile() {
    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentProfile);

    return Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StudentProfile).apply(this, arguments));
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentProfile, [{
    key: "render",
    value: function render() {
      console.log('profile', this.props);
      var student = this.props.location.student;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "...",
        src: __webpack_require__(/*! assets/img/damir-bosnjak.jpg */ "./src/assets/img/damir-bosnjak.jpg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "...",
        className: "avatar border-gray",
        src: student.picture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, student.name))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "social-titre text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Social Informations")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "ml-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "info",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "ml-auto mr-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "primary",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "mr-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "danger",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "mr-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "secondary",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-linkedin-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        className: "profile-titre",
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Profile")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: student.name,
        placeholder: "Full Name",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: student.birthdate,
        placeholder: "Date of birth",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: student.gender ? 'Female' : 'Male',
        placeholder: "Gendre",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        value: student.email,
        placeholder: "Email",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "tel",
        className: "form-control",
        value: student.phone,
        placeholder: "Mobile.No",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: student.address,
        placeholder: "Adress",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: student.state,
        placeholder: "City",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: student.zipcode,
        placeholder: "Zip Code",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        disabled: true,
        type: "textarea",
        defaultValue: "Oh so, your weak rhyme You doubt I'll bother, reading into it",
        value: student.about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }))))))))));
    }
  }]);

  return StudentProfile;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StudentProfile);

/***/ }),

/***/ "./src/views/students/StudentsList.js":
/*!********************************************!*\
  !*** ./src/views/students/StudentsList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _OneStudent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OneStudent */ "./src/views/students/OneStudent.js");
/* harmony import */ var _assets_css_students_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../assets/css/students.css */ "./src/assets/css/students.css");
/* harmony import */ var _assets_css_students_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_students_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _StudentProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StudentProfile */ "./src/views/students/StudentProfile.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/students/StudentsList.js";









var StudentList =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StudentList, _Component);

  function StudentList(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentList);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StudentList).call(this, props));

    _this.componentDidMount = function () {
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('/students').then(function (res) {
        return _this.props.initStudentsReducer(res.data);
      });
    };

    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
        to: "/admin/students/add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success add-student-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Add Student+"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "students-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row students",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.students.map(function (student, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
          key: i,
          to: {
            pathname: "/admin/students/profile/".concat(student._id),
            student: _this2.props.students.filter(function (el) {
              return el._id === student._id;
            })[0]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_OneStudent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: i,
          student: student,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }));
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: "/admin/students/profile/:id",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_StudentProfile__WEBPACK_IMPORTED_MODULE_10__["default"], {
            student: _this2.props.students.filter(function (el) {
              return el._id === props.match.params.id;
            })[0],
            _id: props.match.params.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))));
    }
  }]);

  return StudentList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    students: state.students
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initStudentsReducer: function initStudentsReducer(students) {
      dispatch({
        type: 'INIT_STUDS',
        students: students
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(StudentList));

/***/ }),

/***/ "./src/views/teachers/OneTeacher.js":
/*!******************************************!*\
  !*** ./src/views/teachers/OneTeacher.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_teacher_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/teacher-list.css */ "./src/assets/css/teacher-list.css");
/* harmony import */ var _assets_css_teacher_list_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_teacher_list_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/teachers/OneTeacher.js";



var OneTeacher =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OneTeacher, _Component);

  function OneTeacher(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneTeacher);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OneTeacher).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneTeacher, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-deck one-teacher",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.prof.picture,
        className: "card-img-top",
        alt: "pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "card-title teachers-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.course.name))));
    }
  }]);

  return OneTeacher;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OneTeacher);

/***/ }),

/***/ "./src/views/teachers/TeachersList.js":
/*!********************************************!*\
  !*** ./src/views/teachers/TeachersList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _OneTeacher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OneTeacher */ "./src/views/teachers/OneTeacher.js");
/* harmony import */ var _assets_css_teachers_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../assets/css/teachers.css */ "./src/assets/css/teachers.css");
/* harmony import */ var _assets_css_teachers_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_teachers_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _teacher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher */ "./src/views/teachers/teacher.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/teachers/TeachersList.js";









var TeacherList =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TeacherList, _Component);

  function TeacherList(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherList);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TeacherList).call(this, props));

    _this.componentDidMount = function () {
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('/professors').then(function (res) {
        return _this.props.initProfsReducer(res.data);
      });
    };

    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success add-teacher-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Add professor+")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "teachers-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row teachers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.profs.map(function (prof, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
          key: i,
          to: {
            pathname: "/admin/professors/profile/".concat(prof._id),
            prof: _this2.props.profs.filter(function (el) {
              return el._id === prof._id;
            })[0]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_OneTeacher__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: i,
          prof: prof,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/admin/professors/profile/:id",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_teacher__WEBPACK_IMPORTED_MODULE_10__["default"], {
            course: _this2.props.profs.filter(function (el) {
              return el._id === props.match.params.id;
            })[0],
            _id: props.match.params.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))));
    }
  }]);

  return TeacherList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    profs: state.profs
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initProfsReducer: function initProfsReducer(profs) {
      dispatch({
        type: 'INIT_PROFFS',
        profs: profs
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(TeacherList));

/***/ }),

/***/ "./src/views/teachers/teacher-basic-info.js":
/*!**************************************************!*\
  !*** ./src/views/teachers/teacher-basic-info.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/teachers/teacher-basic-info.js";






var TeacherBasicInfo =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TeacherBasicInfo, _Component);

  function TeacherBasicInfo(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TeacherBasicInfo);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TeacherBasicInfo).call(this, props));

    _this.saveInfos = function (e) {
      if (e.target.name === 'img') _this.setState({
        image: URL.createObjectURL(e.target.files[0])
      });
    };

    _this.handleChange = function (e) {
      _this.setState(Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    };

    _this.addCourse = function () {
      if (!_this.state.imagePreviewUrl || !_this.state.name || !_this.state.duration || !_this.state.description || !_this.state.price) console.log('add course');
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/add_corse', {
        picture: _this.state.imagePreviewUrl,
        name: _this.state.name,
        duration: _this.state.duration,
        description: _this.state.description,
        price: _this.state.price
      }).then(function () {
        return _this.props.addCourseReducer({
          picture: _this.state.imagePreviewUrl,
          name: _this.state.name,
          duration: _this.state.duration,
          description: _this.state.description,
          price: _this.state.price
        });
      }).catch(function (err) {
        return alert(err);
      });

      _this.props.history.push('/admin/courses');
    };

    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TeacherBasicInfo, [{
    key: "_handleImgSubmit",
    value: function _handleImgSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
    }
  }, {
    key: "_handleImageChange",
    value: function _handleImageChange(e) {
      var _this2 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function () {
        _this2.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var imagePreviewUrl = this.state.imagePreviewUrl;
      var $imagePreview = imagePreviewUrl ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: imagePreviewUrl,
        alt: "prev",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "previewText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "\"Add Photo\"");
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputName",
        placeholder: "Full Name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "date",
        className: "form-control",
        id: "inputdate",
        placeholder: "Date of birth",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        id: "inputState",
        className: "form-control",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Male"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Female")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Teaching :"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        multiple: true,
        className: "form-control",
        id: "exampleFormControlSelect2",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Math"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "science"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Sport"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "physics"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Music"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Painting"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "English")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "inputEmail",
        placeholder: "Email",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "tel",
        className: "form-control",
        id: "inputTel",
        placeholder: "Mobile.No",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputAdress",
        placeholder: "Adress",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        id: "inputState",
        className: "form-control",
        defaultValue: "Tunis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "Tunis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Tunis"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "Sousse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Sousse"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "Sfax",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Sfax"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputZip",
        placeholder: "Zip Code",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "textarea",
        defaultValue: "Oh so, your weak rhyme You doubt I'll bother, reading into it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "previewComponent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onSubmit: function onSubmit(e) {
          return _this3._handleImgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "file",
        className: "image",
        onChange: function onChange(e) {
          return _this3._handleImageChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "submitButton",
        type: "submit",
        onClick: function onClick(e) {
          return _this3._handleImgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "\"Select file\""), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "imgPreview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, $imagePreview))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Save"))));
    }
  }]);

  return TeacherBasicInfo;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCourseReducer: function addCourseReducer(corse) {
      dispatch({
        type: 'ADD_CORSE',
        corse: corse
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(TeacherBasicInfo)));

/***/ }),

/***/ "./src/views/teachers/teacher-social-info.js":
/*!***************************************************!*\
  !*** ./src/views/teachers/teacher-social-info.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/teachers/teacher-social-info.js";


var SocialInfo =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SocialInfo, _Component);

  function SocialInfo(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SocialInfo);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SocialInfo).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SocialInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputName",
        placeholder: "Facebook URL",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputName",
        placeholder: "Twitter URL",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputName",
        placeholder: "Google+ URL",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputName",
        placeholder: "LinkedIn URL",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Save")));
    }
  }]);

  return SocialInfo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SocialInfo);

/***/ }),

/***/ "./src/views/teachers/teacher.js":
/*!***************************************!*\
  !*** ./src/views/teachers/teacher.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_teachers_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/teachers.css */ "./src/assets/css/teachers.css");
/* harmony import */ var _assets_css_teachers_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_teachers_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var views_teachers_teacher_basic_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! views/teachers/teacher-basic-info */ "./src/views/teachers/teacher-basic-info.js");
/* harmony import */ var views_teachers_teacher_social_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! views/teachers/teacher-social-info */ "./src/views/teachers/teacher-social-info.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/teachers/teacher.js";






var Teacher =
/*#__PURE__*/
function (_Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Teacher, _Component);

  function Teacher(props) {
    var _this;

    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Teacher);

    _this = Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Teacher).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Teacher, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        md: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav nav-pills mb-3",
        id: "pills-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-link active",
        id: "pills-home-tab",
        "data-toggle": "pill",
        href: "#pills-home",
        role: "tab",
        "aria-controls": "pills-home",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Basic Informations")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-link",
        id: "pills-contact-tab",
        "data-toggle": "pill",
        href: "#pills-contact",
        role: "tab",
        "aria-controls": "pills-contact",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Social Informations"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-content",
        id: "pills-tabContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-pane fade show active",
        id: "pills-home",
        role: "tabpanel",
        "aria-labelledby": "pills-home-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(views_teachers_teacher_basic_info__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-pane fade",
        id: "pills-contact",
        role: "tabpanel",
        "aria-labelledby": "pills-contact-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(views_teachers_teacher_social_info__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))))))))));
    }
  }]);

  return Teacher;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Teacher);

/***/ }),

/***/ "./src/views/teachers/teachers-profile.jsx":
/*!*************************************************!*\
  !*** ./src/views/teachers/teachers-profile.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_teacher_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../assets/css/teacher-list.css */ "./src/assets/css/teacher-list.css");
/* harmony import */ var _assets_css_teacher_list_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_teacher_list_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/home/miled/Documents/demo-project/frontend/src/views/teachers/teachers-profile.jsx";

 // reactstrap components



var TeacherProfile =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TeacherProfile, _React$Component);

  function TeacherProfile() {
    Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeacherProfile);

    return Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TeacherProfile).apply(this, arguments));
  }

  Object(_home_miled_Documents_demo_project_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TeacherProfile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "...",
        src: __webpack_require__(/*! assets/img/damir-bosnjak.jpg */ "./src/assets/img/damir-bosnjak.jpg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#pablo",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "...",
        className: "avatar border-gray",
        src: __webpack_require__(/*! assets/img/mike.jpg */ "./src/assets/img/mike.jpg"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Chet Faker"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "social-titre text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Social Informations")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "ml-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "info",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "ml-auto mr-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "primary",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "mr-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "danger",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "mr-auto",
        lg: "3",
        md: "6",
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-round btn-icon",
        color: "secondary",
        outline: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-linkedin-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "card-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        className: "profile-titre",
        tag: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Profile")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputName",
        placeholder: "Full Name",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "date",
        className: "form-control",
        id: "inputdate",
        placeholder: "Date of birth",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputGendre",
        placeholder: "Gendre",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputCourse",
        placeholder: "Course",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "inputEmail",
        placeholder: "Email",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "tel",
        className: "form-control",
        id: "inputTel",
        placeholder: "Mobile.No",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputAdress",
        placeholder: "Adress",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputCity",
        placeholder: "City",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputZip",
        placeholder: "Zip Code",
        required: true,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: "10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        disabled: true,
        type: "textarea",
        defaultValue: "Oh so, your weak rhyme You doubt I'll bother, reading into it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      })))))))))));
    }
  }]);

  return TeacherProfile;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TeacherProfile);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/miled/Documents/demo-project/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/miled/Documents/demo-project/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map