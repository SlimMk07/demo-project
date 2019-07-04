webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.6c9634981ae596d61900.hot-update.js.map