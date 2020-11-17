webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carticon/Carticon.js":
/*!*****************************************!*\
  !*** ./components/carticon/Carticon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../context/AppContext */ "./components/context/AppContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\carticon\\Carticon.js",
    _this = undefined,
    _s = $RefreshSig$();





var Carticon = function Carticon() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__["AppContext"]),
      cart = _useContext[0],
      setCart = _useContext[1];

  var productsCount = null !== cart && Object.keys(cart).length ? cart.totalProductsCount : '';
  var totalPrice = null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : '';
  console.log(productsCount);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "ti ti-shopping-cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 52
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: ["Cart", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["'('", productsCount ? productsCount : '', "')'"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 36
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(Carticon, "gN9iSMXZR5gECgbD7pxZgOxISDs=");

_c = Carticon;
/* harmony default export */ __webpack_exports__["default"] = (Carticon);

var _c;

$RefreshReg$(_c, "Carticon");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0aWNvbi9DYXJ0aWNvbi5qcyJdLCJuYW1lcyI6WyJDYXJ0aWNvbiIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY2FydCIsInNldENhcnQiLCJwcm9kdWN0c0NvdW50IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsUHJvZHVjdHNDb3VudCIsInRvdGFsUHJpY2UiLCJ0b3RhbFByb2R1Y3RzUHJpY2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLG9CQUNLQyx3REFBVSxDQUFFQyw4REFBRixDQURmO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ1BDLE9BRE87O0FBRW5CLE1BQU1DLGFBQWEsR0FBSyxTQUFTRixJQUFULElBQWlCRyxNQUFNLENBQUNDLElBQVAsQ0FBYUosSUFBYixFQUFvQkssTUFBdkMsR0FBa0RMLElBQUksQ0FBQ00sa0JBQXZELEdBQTRFLEVBQWxHO0FBQ0EsTUFBTUMsVUFBVSxHQUFLLFNBQVNQLElBQVQsSUFBaUJHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhSixJQUFiLEVBQW9CSyxNQUF2QyxHQUFrREwsSUFBSSxDQUFDUSxrQkFBdkQsR0FBNEUsRUFBL0Y7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLGFBQVo7QUFDQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBQzJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEM0MsZUFFZ0I7QUFBQSxzQ0FBVztBQUFBLDBCQUFZQSxhQUFhLEdBQUVBLGFBQUYsR0FBZ0IsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FYRDs7R0FBTUwsUTs7S0FBQUEsUTtBQVlTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YWY3ODkyNzRhOWIzZWVkYTY5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLy4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQ2FydGljb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdFsgY2FydCxzZXRDYXJ0IF0gPSB1c2VDb250ZXh0KCBBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IHByb2R1Y3RzQ291bnQgPSAoIG51bGwgIT09IGNhcnQgJiYgT2JqZWN0LmtleXMoIGNhcnQgKS5sZW5ndGggKSA/IGNhcnQudG90YWxQcm9kdWN0c0NvdW50IDogJyc7XHJcbiAgICBjb25zdCB0b3RhbFByaWNlID0gKCBudWxsICE9PSBjYXJ0ICYmIE9iamVjdC5rZXlzKCBjYXJ0ICkubGVuZ3RoICkgPyBjYXJ0LnRvdGFsUHJvZHVjdHNQcmljZSA6ICcnO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHNDb3VudClcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aSB0aS1zaG9wcGluZy1jYXJ0XCI+PC9pPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DYXJ0PGxhYmVsPicoJ3sgcHJvZHVjdHNDb3VudCA/cHJvZHVjdHNDb3VudDonJ30nKSc8L2xhYmVsPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhcnRpY29uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9