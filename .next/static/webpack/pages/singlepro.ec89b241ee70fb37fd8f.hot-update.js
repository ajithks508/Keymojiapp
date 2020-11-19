webpackHotUpdate_N_E("pages/singlepro",{

/***/ "./pages/singlepro.js":
/*!****************************!*\
  !*** ./pages/singlepro.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_single_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/single/Layout */ "./components/single/Layout.js");
/* harmony import */ var _components_single_Singleproduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/single/Singleproduct */ "./components/single/Singleproduct.js");
/* harmony import */ var _components_single_Relatedproducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/single/Relatedproducts */ "./components/single/Relatedproducts.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ApolloClient */ "./components/ApolloClient.js");
/* harmony import */ var _queries_sinproduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries/sinproduct */ "./queries/sinproduct.js");
/* harmony import */ var _components_single_Layout1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/single/Layout1 */ "./components/single/Layout1.js");




var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\pages\\singlepro.js",
    _this = undefined;








var singlepro = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(function (propsin) {
  var products = propsin.products,
      relproduct = propsin.relproduct;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_single_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content-wrap",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_single_Singleproduct__WEBPACK_IMPORTED_MODULE_4__["default"], {
          products: products
        }, products.id, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_single_Layout1__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "content-wrap",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "product-container",
          children: relproduct.length ? relproduct.map(function (cat) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_single_Relatedproducts__WEBPACK_IMPORTED_MODULE_5__["default"], {
              cat: cat
            }, cat.slug, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 31
            }, _this);
          }) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, _this);
});

singlepro.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var slug, id, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = context.query.slug;
            id = slug ? slug.split('-').pop() : context.query.id;
            _context.next = 4;
            return _components_ApolloClient__WEBPACK_IMPORTED_MODULE_7__["default"].query({
              query: _queries_sinproduct__WEBPACK_IMPORTED_MODULE_8__["default"],
              variables: {
                id: id
              }
            });

          case 4:
            res = _context.sent;
            return _context.abrupt("return", {
              products: res.data.product,
              relproduct: res.data.product.productCategories.nodes[0].products.nodes
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

/* harmony default export */ __webpack_exports__["default"] = (singlepro);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2luZ2xlcHJvLmpzIl0sIm5hbWVzIjpbInNpbmdsZXBybyIsIndpdGhSb3V0ZXIiLCJwcm9wc2luIiwicHJvZHVjdHMiLCJyZWxwcm9kdWN0IiwiaWQiLCJsZW5ndGgiLCJtYXAiLCJjYXQiLCJzbHVnIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5Iiwic3BsaXQiLCJwb3AiLCJjbGllbnQiLCJTSU5HTEVfUFJPRFVDVFMiLCJ2YXJpYWJsZXMiLCJyZXMiLCJkYXRhIiwicHJvZHVjdCIsInByb2R1Y3RDYXRlZ29yaWVzIiwibm9kZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsOERBQVUsQ0FBRSxVQUFBQyxPQUFPLEVBQUk7QUFBQSxNQUVoQ0MsUUFGZ0MsR0FFUkQsT0FGUSxDQUVoQ0MsUUFGZ0M7QUFBQSxNQUV2QkMsVUFGdUIsR0FFUkYsT0FGUSxDQUV2QkUsVUFGdUI7QUFJeEMsc0JBQ0M7QUFBQSw0QkFDQSxxRUFBQyxpRUFBRDtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0MscUVBQUMsd0VBQUQ7QUFBbUMsa0JBQVEsRUFBR0Q7QUFBOUMsV0FBcUJBLFFBQVEsQ0FBQ0UsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFNQSxxRUFBQyxrRUFBRDtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0JBQ0dELFVBQVUsQ0FBQ0UsTUFBWCxHQUNBRixVQUFVLENBQUNHLEdBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLGdDQUFJLHFFQUFDLDBFQUFEO0FBQWtDLGlCQUFHLEVBQUdBO0FBQXhDLGVBQXVCQSxHQUFHLENBQUNDLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUo7QUFBQSxXQUFuQixDQURBLEdBRUs7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWtCQSxDQXRCMkIsQ0FBNUI7O0FBd0JBVCxTQUFTLENBQUNVLGVBQVY7QUFBQSw4TEFBNEIsaUJBQWdCQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWkYsZ0JBRlksR0FFREUsT0FGQyxDQUVyQkMsS0FGcUIsQ0FFWkgsSUFGWTtBQUlyQkosY0FKcUIsR0FJaEJJLElBQUksR0FBR0EsSUFBSSxDQUFDSSxLQUFMLENBQVksR0FBWixFQUFrQkMsR0FBbEIsRUFBSCxHQUE2QkgsT0FBTyxDQUFDQyxLQUFSLENBQWNQLEVBSi9CO0FBQUE7QUFBQSxtQkFNVFUsZ0VBQU0sQ0FBQ0gsS0FBUCxDQUFjO0FBQy9CQSxtQkFBSyxFQUFFSSwyREFEd0I7QUFFL0JDLHVCQUFTLEVBQUU7QUFBRVosa0JBQUUsRUFBRkE7QUFBRjtBQUZvQixhQUFkLENBTlM7O0FBQUE7QUFNckJhLGVBTnFCO0FBQUEsNkNBV3BCO0FBQ05mLHNCQUFRLEVBQUVlLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxPQURiO0FBRU5oQix3QkFBVSxFQUFDYyxHQUFHLENBQUNDLElBQUosQ0FBU0MsT0FBVCxDQUFpQkMsaUJBQWpCLENBQW1DQyxLQUFuQyxDQUF5QyxDQUF6QyxFQUE0Q25CLFFBQTVDLENBQXFEbUI7QUFGMUQsYUFYb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JldEIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2luZ2xlcHJvLmVjODliMjQxZWU3MGZiMzdmZDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2xlL0xheW91dCc7XHJcbmltcG9ydCBTaW5nbGVwcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2xlL1NpbmdsZXByb2R1Y3QnO1xyXG5pbXBvcnQgUmVsYXRlZHByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvc2luZ2xlL1JlbGF0ZWRwcm9kdWN0cyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBvbGxvQ2xpZW50XCI7XHJcbmltcG9ydCBTSU5HTEVfUFJPRFVDVFMgZnJvbSBcIi4uL3F1ZXJpZXMvc2lucHJvZHVjdFwiO1xyXG5pbXBvcnQgTGF5b3V0MSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaW5nbGUvTGF5b3V0MVwiO1xyXG5jb25zdCBzaW5nbGVwcm8gPSB3aXRoUm91dGVyKCBwcm9wc2luID0+IHtcclxuXHJcblx0Y29uc3QgeyBwcm9kdWN0cyxyZWxwcm9kdWN0IH0gPSBwcm9wc2luO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwXCI+XHJcblx0XHRcdFx0PFNpbmdsZXByb2R1Y3Qga2V5PXsgcHJvZHVjdHMuaWQgfSBwcm9kdWN0cz17IHByb2R1Y3RzIH0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdFx0PExheW91dDE+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0eyByZWxwcm9kdWN0Lmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHRyZWxwcm9kdWN0Lm1hcCggY2F0ID0+IDxSZWxhdGVkcHJvZHVjdHMga2V5PXsgY2F0LnNsdWcgfSBjYXQ9eyBjYXQgfS8+IClcclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAnJyB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQxPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59KTtcclxuXHJcbnNpbmdsZXByby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiggY29udGV4dCApIHtcclxuXHJcblx0bGV0IHsgcXVlcnk6IHsgc2x1ZyB9IH0gPSBjb250ZXh0O1xyXG5cclxuXHRjb25zdCBpZCA9IHNsdWcgPyBzbHVnLnNwbGl0KCAnLScgKS5wb3AoKSA6IGNvbnRleHQucXVlcnkuaWQ7XHJcblxyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5xdWVyeSgoe1xyXG5cdFx0cXVlcnk6IFNJTkdMRV9QUk9EVUNUUyxcclxuXHRcdHZhcmlhYmxlczogeyBpZCB9XHJcblx0fSkpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvZHVjdHM6IHJlcy5kYXRhLnByb2R1Y3QsXHJcblx0XHRyZWxwcm9kdWN0OnJlcy5kYXRhLnByb2R1Y3QucHJvZHVjdENhdGVnb3JpZXMubm9kZXNbMF0ucHJvZHVjdHMubm9kZXNcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2luZ2xlcHJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9