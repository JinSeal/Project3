webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DonationForm.js":
/*!************************************!*\
  !*** ./components/DonationForm.js ***!
  \************************************/
/*! exports provided: default, ALL_CATS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CATS_QUERY", function() { return ALL_CATS_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-stripe-checkout */ "./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_17__);











var _jsxFileName = "/Users/jinz/Projects/project3/frontend/components/DonationForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  mutation CREATE_DONATION_MUTATION(\n    $amount: Float!\n    $email: String!\n    $token: String!\n    $cat: Integer!\n  ) {\n    createDonation(\n      amount: $amount\n      email: $email\n      stripetoken: $token\n      cat: $cat\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__["default"])(["\n  query ALL_CATS_QUERY {\n    allCats {\n      id\n      name\n      image\n      iucnStatus\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Styles = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "DonationForm__Styles",
  componentId: "d9hi8b-0"
})(["background-color:white;padding:2rem 5rem;"]);
var ALL_CATS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());
var CREATE_DONATION_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject2());

var DonationForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(DonationForm, _Component);

  function DonationForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DonationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(DonationForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      email: "",
      updates: false,
      gift: _this.props.amount || 20,
      allocation: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "saveToState", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onToken", function _callee(res, createDonation) {
      var donation;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(createDonation({
                variables: {
                  amount: _this.state.gift,
                  token: res.id,
                  email: _this.state.email,
                  cat: _this.state.cat
                }
              })["catch"](function (err) {
                alert(err.message);
              }));

            case 2:
              donation = _context.sent;
              Router.push({
                pathname: "/thankyou"
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DonationForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_16__["Query"], {
        query: ALL_CATS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data;

        var catsName = underscore__WEBPACK_IMPORTED_MODULE_17___default.a.pluck(data.allCats, "name");

        var cat = underscore__WEBPACK_IMPORTED_MODULE_17___default.a.where(data.allCats, {
          name: _this2.state.allocation
        })[0];

        var image = cat ? cat.image : "/image/stripe.jpg";
        return __jsx(Styles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["FormField"], {
          label: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Heading"], {
          size: 500,
          marginTop: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Gift Amount *"), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Autocomplete"], {
          height: 50,
          items: [25.0, 50.0, 100.0, 200.0, 500.0],
          onChange: function onChange(changedItem) {
            return _this2.setState({
              gift: changedItem
            });
          },
          initialInputValue: _this2.state.gift.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, function (props) {
          var getInputProps = props.getInputProps,
              getRef = props.getRef,
              inputValue = props.inputValue,
              openMenu = props.openMenu;
          return __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["TextInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            placeholder: "Choose or Enter an Amount",
            width: 400,
            value: inputValue,
            innerRef: getRef,
            label: "Gift Amount"
          }, getInputProps({
            onFocus: function onFocus() {
              openMenu();
            }
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }));
        }), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Heading"], {
          size: 500,
          marginTop: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "Allocation"), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Combobox"], {
          name: "allocation",
          openOnFocus: true,
          width: 400,
          items: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(catsName), ["All Cats"]),
          onChange: function onChange(selected) {
            return _this2.setState({
              allocation: selected
            });
          },
          placeholder: "Select a Cat",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }), __jsx("div", {
          style: {
            display: "flex",
            alignItems: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Checkbox"], {
          name: "updates",
          checked: _this2.state.update,
          onChange: function onChange(e) {
            return _this2.setState({
              update: e.target.checked
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Heading"], {
          size: 500,
          marginTop: 0,
          marginLeft: 10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "Keep me updated on Free Spirits news")), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_16__["Mutation"], {
          mutation: CREATE_DONATION_MUTATION,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, function (createDonation) {
          return __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_15___default.a, {
            amount: _this2.state.gift * 100,
            name: "Free Spirits",
            description: "Donate to save wild cats",
            image: image,
            stripeKey: "pk_test_KiZyYKiQtlmrqhtoGEbkdtuR00es4lCEgx",
            currency: "AUD",
            token: function token(res) {
              return _this2.onToken(res, createDonation);
            },
            bitcoin: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_13__["Button"], {
            height: 50,
            marginTop: 30,
            appearance: "primary",
            intent: "success",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, "Complete this Transaction"));
        })));
      });
    }
  }]);

  return DonationForm;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DonationForm);


/***/ })

})
//# sourceMappingURL=index.js.d7860aef9a2fbb6df348.hot-update.js.map