webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_home_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/Layout */ "./components/home/Layout.js");
/* harmony import */ var _components_home_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/Category */ "./components/home/Category.js");
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ApolloClient */ "./components/ApolloClient.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _queries_categorieslist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries/categorieslist */ "./queries/categorieslist.js");




var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\pages\\index.js",
    _this = undefined;







var index = function index(props) {
  console.warn(props);
  var category = props.category;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_home_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "product-container",
      children: category.length ? category.map(function (cat) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_home_Category__WEBPACK_IMPORTED_MODULE_4__["default"], {
          cat: cat
        }, cat.id, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 27
        }, _this);
      }) : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, _this);
};

index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _components_ApolloClient__WEBPACK_IMPORTED_MODULE_5__["default"].query({
            query: _queries_categorieslist__WEBPACK_IMPORTED_MODULE_7__["default"]
          });

        case 2:
          result = _context.sent;
          return _context.abrupt("return", {
            category: result.data.productCategories.nodes
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiY2F0ZWdvcnkiLCJsZW5ndGgiLCJtYXAiLCJjYXQiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImNsaWVudCIsInF1ZXJ5IiwiQ0FURUdPUllfTElTVCIsInJlc3VsdCIsImRhdGEiLCJwcm9kdWN0Q2F0ZWdvcmllcyIsIm5vZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCQyxTQUFPLENBQUNDLElBQVIsQ0FBY0YsS0FBZDtBQUR3QixNQUVoQkcsUUFGZ0IsR0FFSEgsS0FGRyxDQUVoQkcsUUFGZ0I7QUFHeEIsc0JBQ0MscUVBQUMsK0RBQUQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLGdCQUNHQSxRQUFRLENBQUNDLE1BQVQsR0FDREQsUUFBUSxDQUFDRSxHQUFULENBQWMsVUFBQUMsR0FBRztBQUFBLDRCQUFJLHFFQUFDLGlFQUFEO0FBQXlCLGFBQUcsRUFBR0E7QUFBL0IsV0FBZ0JBLEdBQUcsQ0FBQ0MsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBLE9BQWpCLENBREMsR0FFSTtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFTQyxDQVpGOztBQWFDUixLQUFLLENBQUNTLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUZDLGdFQUFNLENBQUNDLEtBQVAsQ0FBYztBQUNsQ0EsaUJBQUssRUFBRUMsK0RBQWFBO0FBRGMsV0FBZCxDQUZFOztBQUFBO0FBRWpCQyxnQkFGaUI7QUFBQSwyQ0FNaEI7QUFDTlQsb0JBQVEsRUFBRVMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLGlCQUFaLENBQThCQztBQURsQyxXQU5nQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVdjaEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGUyNmVlOGU4ZjBkNDFlZDU2ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9MYXlvdXRcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcG9sbG9DbGllbnRcIjtcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBDQVRFR09SWV9MSVNUIGZyb20gXCIuLi9xdWVyaWVzL2NhdGVnb3JpZXNsaXN0XCI7XHJcblxyXG5jb25zdCBpbmRleCA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnNvbGUud2FybiggcHJvcHMgKTtcclxuXHRjb25zdCB7IGNhdGVnb3J5IH0gPSBwcm9wcztcclxuXHRyZXR1cm4oIFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdHsgY2F0ZWdvcnkubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0Y2F0ZWdvcnkubWFwKCBjYXQgPT4gPENhdGVnb3J5IGtleT17IGNhdC5pZCB9IGNhdD17IGNhdCB9Lz4gKVxyXG5cdFx0XHRcdFx0XHQpIDogJycgfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdFx0KVxyXG5cdH07XHJcblx0aW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeSgge1xyXG5cdFx0XHRxdWVyeTogQ0FURUdPUllfTElTVCxcclxuXHRcdH0gKTtcclxuXHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNhdGVnb3J5OiByZXN1bHQuZGF0YS5wcm9kdWN0Q2F0ZWdvcmllcy5ub2RlcyxcclxuXHRcdH1cclxuXHRcclxuXHR9O1xyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwic291cmNlUm9vdCI6IiJ9