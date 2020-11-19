webpackHotUpdate_N_E("pages/listproduct",{

/***/ "./pages/listproduct.js":
/*!******************************!*\
  !*** ./pages/listproduct.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_catbyproduct_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/catbyproduct/Layout */ "./components/catbyproduct/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ApolloClient */ "./components/ApolloClient.js");
/* harmony import */ var _queries_productlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queries/productlist */ "./queries/productlist.js");
/* harmony import */ var _components_catbyproduct_Productlistbycat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/catbyproduct/Productlistbycat */ "./components/catbyproduct/Productlistbycat.js");




var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\pages\\listproduct.js",
    _this = undefined;






var listproduct = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (propli) {
  var categoryName = propli.categoryName,
      products = propli.products;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_catbyproduct_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "content-wrap",
      children: [categoryName ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        className: "product-container pl-5",
        children: categoryName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 22
      }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "product-container",
        children: undefined !== products && products.length ? products.map(function (lst) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_catbyproduct_Productlistbycat__WEBPACK_IMPORTED_MODULE_7__["default"], {
            lst: lst
          }, lst.id, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 28
          }, _this);
        }) : ' '
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, _this);
});

listproduct.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var slug, id, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = context.query.slug;
            id = slug ? slug.split('-').pop() : context.query.id;
            _context.next = 4;
            return _components_ApolloClient__WEBPACK_IMPORTED_MODULE_5__["default"].query({
              query: _queries_productlist__WEBPACK_IMPORTED_MODULE_6__["default"],
              variables: {
                id: id
              }
            });

          case 4:
            res = _context.sent;
            return _context.abrupt("return", {
              categoryName: res.data.productCategory.name,
              products: res.data.productCategory.products.nodes
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (listproduct);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdHByb2R1Y3QuanMiXSwibmFtZXMiOlsibGlzdHByb2R1Y3QiLCJ3aXRoUm91dGVyIiwicHJvcGxpIiwiY2F0ZWdvcnlOYW1lIiwicHJvZHVjdHMiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJtYXAiLCJsc3QiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwicXVlcnkiLCJzcGxpdCIsInBvcCIsImNsaWVudCIsIlBST0RVQ1RTX0xJU1QiLCJ2YXJpYWJsZXMiLCJyZXMiLCJkYXRhIiwicHJvZHVjdENhdGVnb3J5IiwibmFtZSIsIm5vZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDhEQUFVLENBQUUsVUFBQUMsTUFBTSxFQUFJO0FBQUEsTUFFakNDLFlBRmlDLEdBRU5ELE1BRk0sQ0FFakNDLFlBRmlDO0FBQUEsTUFFbkJDLFFBRm1CLEdBRU5GLE1BRk0sQ0FFbkJFLFFBRm1CO0FBSXpDLHNCQUNDLHFFQUFDLHVFQUFEO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLGlCQUNHRCxZQUFZLGdCQUFHO0FBQUksaUJBQVMsRUFBQyx3QkFBZDtBQUFBLGtCQUF5Q0E7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQWtFLEVBRGpGLGVBRUM7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0JBQ0dFLFNBQVMsS0FBS0QsUUFBZCxJQUEwQkEsUUFBUSxDQUFDRSxNQUFuQyxHQUNERixRQUFRLENBQUNHLEdBQVQsQ0FBYyxVQUFBQyxHQUFHO0FBQUEsOEJBQUkscUVBQUMsaUZBQUQ7QUFBaUMsZUFBRyxFQUFHQTtBQUF2QyxhQUF3QkEsR0FBRyxDQUFDQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBakIsQ0FEQyxHQUVFO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVlBLENBaEI2QixDQUE5Qjs7QUFrQkFULFdBQVcsQ0FBQ1UsZUFBWjtBQUFBLDhMQUE4QixpQkFBZ0JDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkQyxnQkFGYyxHQUVIRCxPQUZHLENBRXZCRSxLQUZ1QixDQUVkRCxJQUZjO0FBSXZCSCxjQUp1QixHQUlsQkcsSUFBSSxHQUFHQSxJQUFJLENBQUNFLEtBQUwsQ0FBWSxHQUFaLEVBQWtCQyxHQUFsQixFQUFILEdBQTZCSixPQUFPLENBQUNFLEtBQVIsQ0FBY0osRUFKN0I7QUFBQTtBQUFBLG1CQU1YTyxnRUFBTSxDQUFDSCxLQUFQLENBQWM7QUFDL0JBLG1CQUFLLEVBQUVJLDREQUR3QjtBQUUvQkMsdUJBQVMsRUFBRTtBQUFFVCxrQkFBRSxFQUFGQTtBQUFGO0FBRm9CLGFBQWQsQ0FOVzs7QUFBQTtBQU12QlUsZUFOdUI7QUFBQSw2Q0FXdEI7QUFDTmhCLDBCQUFZLEVBQUVnQixHQUFHLENBQUNDLElBQUosQ0FBU0MsZUFBVCxDQUF5QkMsSUFEakM7QUFFTmxCLHNCQUFRLEVBQUVlLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxlQUFULENBQXlCakIsUUFBekIsQ0FBa0NtQjtBQUZ0QyxhQVhzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQmV2QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saXN0cHJvZHVjdC5iYjI2YjNlNWFlOWFkMjcwMTQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXRieXByb2R1Y3QvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBvbGxvQ2xpZW50XCI7XHJcbmltcG9ydCBQUk9EVUNUU19MSVNUIGZyb20gXCIuLi9xdWVyaWVzL3Byb2R1Y3RsaXN0XCI7XHJcbmltcG9ydCBQcm9kdWN0bGlzdGJ5Y2F0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhdGJ5cHJvZHVjdC9Qcm9kdWN0bGlzdGJ5Y2F0XCI7XHJcblxyXG5jb25zdCBsaXN0cHJvZHVjdCA9IHdpdGhSb3V0ZXIoIHByb3BsaSA9PiB7XHJcblxyXG5cdGNvbnN0IHsgY2F0ZWdvcnlOYW1lLCBwcm9kdWN0cyB9ID0gcHJvcGxpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBcIj5cclxuXHRcdFx0XHR7IGNhdGVnb3J5TmFtZSA/IDxoMyBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lciBwbC01XCI+eyBjYXRlZ29yeU5hbWUgfTwvaDM+IDogJycgfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdHsgdW5kZWZpbmVkICE9PSBwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdHByb2R1Y3RzLm1hcCggbHN0ID0+IDxQcm9kdWN0bGlzdGJ5Y2F0IGtleT17IGxzdC5pZCB9IGxzdD17IGxzdCB9IC8+IClcclxuXHRcdFx0XHRcdCkgOiAnICd9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KVxyXG59KTtcclxuXHJcbmxpc3Rwcm9kdWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCBjb250ZXh0ICkge1xyXG5cclxuXHRsZXQgeyBxdWVyeTogeyBzbHVnIH0gfSA9IGNvbnRleHQ7XHJcblxyXG5cdGNvbnN0IGlkID0gc2x1ZyA/IHNsdWcuc3BsaXQoICctJyApLnBvcCgpIDogY29udGV4dC5xdWVyeS5pZDtcclxuXHJcblx0Y29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KCh7XHJcblx0XHRxdWVyeTogUFJPRFVDVFNfTElTVCxcclxuXHRcdHZhcmlhYmxlczogeyBpZCB9XHJcblx0fSkpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2F0ZWdvcnlOYW1lOiByZXMuZGF0YS5wcm9kdWN0Q2F0ZWdvcnkubmFtZSxcclxuXHRcdHByb2R1Y3RzOiByZXMuZGF0YS5wcm9kdWN0Q2F0ZWdvcnkucHJvZHVjdHMubm9kZXNcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdHByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=