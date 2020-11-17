webpackHotUpdate_N_E("pages/Shop",{

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "ti ti-shopping-cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 52
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: ["Cart", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["'('", productsCount ? productsCount : '', "')'"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 36
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0aWNvbi9DYXJ0aWNvbi5qcyJdLCJuYW1lcyI6WyJDYXJ0aWNvbiIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY2FydCIsInNldENhcnQiLCJwcm9kdWN0c0NvdW50IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsUHJvZHVjdHNDb3VudCIsInRvdGFsUHJpY2UiLCJ0b3RhbFByb2R1Y3RzUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUVDLDhEQUFGLENBRGY7QUFBQSxNQUNaQyxJQURZO0FBQUEsTUFDUEMsT0FETzs7QUFFbkIsTUFBTUMsYUFBYSxHQUFLLFNBQVNGLElBQVQsSUFBaUJHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhSixJQUFiLEVBQW9CSyxNQUF2QyxHQUFrREwsSUFBSSxDQUFDTSxrQkFBdkQsR0FBNEUsRUFBbEc7QUFDQSxNQUFNQyxVQUFVLEdBQUssU0FBU1AsSUFBVCxJQUFpQkcsTUFBTSxDQUFDQyxJQUFQLENBQWFKLElBQWIsRUFBb0JLLE1BQXZDLEdBQWtETCxJQUFJLENBQUNRLGtCQUF2RCxHQUE0RSxFQUEvRjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBRyxlQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFDMkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQzQyxlQUVnQjtBQUFBLHNDQUFXO0FBQUEsMEJBQVlOLGFBQWEsR0FBRUEsYUFBRixHQUFnQixFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQVZEOztHQUFNTCxROztLQUFBQSxRO0FBV1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1Nob3AuZWI2OTU0MjM3MDVhMjZhZDRiYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi8uLi9jb250ZXh0L0FwcENvbnRleHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IENhcnRpY29uID0gKCkgPT4ge1xyXG4gICAgY29uc3RbIGNhcnQsc2V0Q2FydCBdID0gdXNlQ29udGV4dCggQXBwQ29udGV4dCk7XHJcbiAgICBjb25zdCBwcm9kdWN0c0NvdW50ID0gKCBudWxsICE9PSBjYXJ0ICYmIE9iamVjdC5rZXlzKCBjYXJ0ICkubGVuZ3RoICkgPyBjYXJ0LnRvdGFsUHJvZHVjdHNDb3VudCA6ICcnO1xyXG4gICAgY29uc3QgdG90YWxQcmljZSA9ICggbnVsbCAhPT0gY2FydCAmJiBPYmplY3Qua2V5cyggY2FydCApLmxlbmd0aCApID8gY2FydC50b3RhbFByb2R1Y3RzUHJpY2UgOiAnJztcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aSB0aS1zaG9wcGluZy1jYXJ0XCI+PC9pPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DYXJ0PGxhYmVsPicoJ3sgcHJvZHVjdHNDb3VudCA/cHJvZHVjdHNDb3VudDonJ30nKSc8L2xhYmVsPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhcnRpY29uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9