module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/gallery.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client-config.js":
/*!**************************!*\
  !*** ./client-config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const clientConfig = {
  siteUrl: 'http://localhost:3000',
  graphqlUrl: 'http://localhost/wordpress/graphql'
};
/* harmony default export */ __webpack_exports__["default"] = (clientConfig);

/***/ }),

/***/ "./components/ApolloClient.js":
/*!************************************!*\
  !*** ./components/ApolloClient.js ***!
  \************************************/
/*! exports provided: middleware, afterware, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleware", function() { return middleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterware", function() { return afterware; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fragmentTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fragmentTypes */ "./fragmentTypes.json");
var _fragmentTypes__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../fragmentTypes */ "./fragmentTypes.json", 1);
/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../client-config */ "./client-config.js");







 // Fragment matcher.

const fragmentMatcher = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["IntrospectionFragmentMatcher"]({
  introspectionQueryResultData: _fragmentTypes__WEBPACK_IMPORTED_MODULE_5__
});
const middleware = new apollo_link__WEBPACK_IMPORTED_MODULE_4__["ApolloLink"]((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */
  const session = false ? undefined : null;

  if (session) {
    operation.setContext(({
      headers = {}
    }) => ({
      headers: {
        "woocommerce-session": `Session ${session}`
      }
    }));
  }

  return forward(operation);
});
/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */

const afterware = new apollo_link__WEBPACK_IMPORTED_MODULE_4__["ApolloLink"]((operation, forward) => {
  return forward(operation).map(response => {
    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext();
    const {
      response: {
        headers
      }
    } = context;
    const session = headers.get("woocommerce-session");

    if (session) {
      // Remove session data if session destroyed.
      if ("false" === session) {
        localStorage.removeItem("woo-session"); // Update session new data if changed.
      } else if (localStorage.getItem("woo-session") !== session) {
        localStorage.setItem("woo-session", headers.get("woocommerce-session"));
      }
    }

    return response;
  });
}); // Apollo GraphQL client.

const client = new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link: middleware.concat(afterware.concat(Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["createHttpLink"])({
    uri: _client_config__WEBPACK_IMPORTED_MODULE_6__["default"].graphqlUrl,
    fetch: node_fetch__WEBPACK_IMPORTED_MODULE_0___default.a
  }))),
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]({
    fragmentMatcher
  })
});
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sticky_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sticky-footer */ "react-sticky-footer");
/* harmony import */ var react_sticky_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sticky_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carticon_Carticon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carticon/Carticon */ "./components/carticon/Carticon.js");

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\Footer.js";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_sticky_footer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bottomThreshold: 50,
    normalStyles: {
      backgroundColor: "#d0d3d4",
      padding: "2rem",
      align: "centers"
    },
    stickyStyles: {
      backgroundColor: "rgba(255,255,255,.8)",
      padding: "2rem",
      width: "100%"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      style: {
        textAlign: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/Shop",
        className: "colf",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "ti ti-layout-grid2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 58
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 96
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          style: {
            fontSize: "10px",
            color: "black"
          },
          children: "Shop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/Shop",
        className: "colf",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "ti ti-heart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 58
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 89
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          style: {
            fontSize: "10px",
            color: "black"
          },
          children: "Wishlist"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/Shop",
        className: "colf",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "ti ti-user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 58
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 88
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          style: {
            fontSize: "10px",
            color: "black"
          },
          children: "Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/Shop",
        className: "colf",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_carticon_Carticon__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 58
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footerdata.js":
/*!**********************************!*\
  !*** ./components/Footerdata.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Footerdata = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "footer-area",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "row section_gap",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget tp_widgets",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
              className: "footer_title large_title",
              children: "Importent Links"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
              className: "list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Disclaimer"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Privacy Policy"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Shipping Policy"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Terms and Conditions"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Return and Refund Policy"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Contact"
                })
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "offset-lg-1 col-lg-2 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget tp_widgets",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
              className: "footer_title large_title",
              children: "UseFullLinks"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
              className: "list",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "FAQ"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Careers"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Contact Us"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "lnk",
                  href: "#",
                  children: "Sitemap"
                })
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-lg-2 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget instafeed",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ship",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("i", {
                  className: "ti ti-truck",
                  children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                    children: "FREE SHIPPING"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "smtxt",
                children: "All Over India"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ship",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("i", {
                  className: "ti ti-headphone-alt",
                  children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                    children: "24/7 SUPPORT"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "smtxt",
                children: "Get in touch 24/7"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ship",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("i", {
                  className: "ti ti-share-alt",
                  children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                    children: "RETURN POLICY"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "smtxt",
                children: "14 days easy return"
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "offset-lg-1 col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "single-footer-widget tp_widgets",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h4", {
              className: "footer_title",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "ti ti-home"
              }), "Contact Us"]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "ml-40",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                className: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ti ti-location-pin"
                }), "Orbiz Arcade,Calicut Road,NH-17,Kakkad,Malappuram,Kerala-676306"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ti ti-location-pin"
                }), "Kazhi Street,OPP Vijaya College,Basavanagudi,Bangalore-560004"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                className: "sm-head",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "ti ti-mobile"
                }), "Phone Number"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "(+91)9567555656 (+91)7012717083"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                className: "sm-head",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "ti ti-email"
                }), "Email"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "connect@orbiz.in"
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footerdata);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navdata */ "./components/Navdata.js");

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\Header.js";


const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navdata__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Navdata.js":
/*!*******************************!*\
  !*** ./components/Navdata.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\Navdata.js";








const Navdata = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bg: "light",
    expand: "lg",
    className: "header_area",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Brand, {
      href: "#home",
      className: "navbar-brand logo_h",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "imglogo",
        src: "http://localhost/wordpress/wp-content/uploads/2020/11/cropped-logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
      id: "basic-navbar-nav",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mr-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "/",
          className: "nav-item",
          children: "HOME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "/Shop",
          className: "nav-item",
          children: "SHOP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "/gallery",
          className: "nav-item",
          children: "GALLERY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "/About",
          className: "nav-item",
          children: "ABOUT US"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "/singleproduct",
          className: "nav-item",
          children: "CART"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "WISHLIST"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "MY ACCOUNT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
          href: "#link",
          className: "nav-item",
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
        inline: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
          type: "text",
          placeholder: "Search",
          className: "form-control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          variant: "secondary",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "ti ti-search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 47
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navdata);

/***/ }),

/***/ "./components/carticon/Carticon.js":
/*!*****************************************!*\
  !*** ./components/carticon/Carticon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../context/AppContext */ "./components/context/AppContext.js");

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\carticon\\Carticon.js";




const Carticon = () => {
  const {
    0: cart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);
  const productsCount = null !== cart && Object.keys(cart).length ? cart.totalProductsCount : '';
  const totalPrice = null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : '';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "woo-next-cart-wrap",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "woo-next-cart-icon-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "ti ti-shopping-cart woo-next-cart-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined), productsCount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "woo-next-cart-count",
          children: productsCount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 39
        }, undefined) : '']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      style: {
        fontSize: "10px",
        color: "black"
      },
      children: "Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 8
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Carticon);

/***/ }),

/***/ "./components/context/AppContext.js":
/*!******************************************!*\
  !*** ./components/context/AppContext.js ***!
  \******************************************/
/*! exports provided: AppContext, AppProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return AppProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\context\\AppContext.js";

const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext([{}, () => {}]);
const AppProvider = props => {
  const {
    0: cart,
    1: setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // @TODO Will add option to show the cart with localStorage later.
    if (false) {}
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: [cart, setCart],
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./components/gallery/Gallery.js":
/*!***************************************!*\
  !*** ./components/gallery/Gallery.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\gallery\\Gallery.js";





const Gallery = propgl => {
  const {
    mediaItem
  } = propgl;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        src: mediaItem.image.sourceUrl,
        thumbnail: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./components/gallery/Layout.js":
/*!**************************************!*\
  !*** ./components/gallery/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Style.css */ "./styles/Style.css");
/* harmony import */ var _styles_Style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./components/Footer.js");
/* harmony import */ var _Footerdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footerdata */ "./components/Footerdata.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./components/Header.js");
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Gallery */ "./components/gallery/Gallery.js");
/* harmony import */ var _ApolloClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ApolloClient */ "./components/ApolloClient.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/AppContext */ "./components/context/AppContext.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\components\\gallery\\Layout.js";










const Layout = propgly => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__["AppProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
      client: _ApolloClient__WEBPACK_IMPORTED_MODULE_6__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["ApolloProvider"], {
        client: _ApolloClient__WEBPACK_IMPORTED_MODULE_6__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Gallery"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "stylesheet",
            href: "https://unpkg.com/@icon/themify-icons/themify-icons.css"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), propgly.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footerdata__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./fragmentTypes.json":
/*!****************************!*\
  !*** ./fragmentTypes.json ***!
  \****************************/
/*! exports provided: __schema, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"__schema\":{\"types\":[{\"kind\":\"INTERFACE\",\"name\":\"Node\",\"possibleTypes\":[{\"name\":\"Coupon\"},{\"name\":\"ContentType\"},{\"name\":\"Taxonomy\"},{\"name\":\"ProductCategory\"},{\"name\":\"MediaItem\"},{\"name\":\"User\"},{\"name\":\"Comment\"},{\"name\":\"CommentAuthor\"},{\"name\":\"Post\"},{\"name\":\"Category\"},{\"name\":\"PostFormat\"},{\"name\":\"Tag\"},{\"name\":\"ProductType\"},{\"name\":\"VisibleProduct\"},{\"name\":\"ProductTag\"},{\"name\":\"PaColor\"},{\"name\":\"ProductVariation\"},{\"name\":\"VariableProduct\"},{\"name\":\"PaSize\"},{\"name\":\"ShippingClass\"},{\"name\":\"Page\"},{\"name\":\"UserRole\"},{\"name\":\"Customer\"},{\"name\":\"Order\"},{\"name\":\"TaxRate\"},{\"name\":\"Refund\"},{\"name\":\"ShippingMethod\"},{\"name\":\"ExternalProduct\"},{\"name\":\"GroupProduct\"},{\"name\":\"Menu\"},{\"name\":\"MenuItem\"},{\"name\":\"Plugin\"},{\"name\":\"SimpleProduct\"},{\"name\":\"Theme\"}]},{\"kind\":\"INTERFACE\",\"name\":\"TermNode\",\"possibleTypes\":[{\"name\":\"ProductCategory\"},{\"name\":\"Category\"},{\"name\":\"PostFormat\"},{\"name\":\"Tag\"},{\"name\":\"ProductType\"},{\"name\":\"VisibleProduct\"},{\"name\":\"ProductTag\"},{\"name\":\"PaColor\"},{\"name\":\"PaSize\"},{\"name\":\"ShippingClass\"}]},{\"kind\":\"INTERFACE\",\"name\":\"UniformResourceIdentifiable\",\"possibleTypes\":[{\"name\":\"ProductCategory\"},{\"name\":\"MediaItem\"},{\"name\":\"User\"},{\"name\":\"Post\"},{\"name\":\"Category\"},{\"name\":\"PostFormat\"},{\"name\":\"Tag\"},{\"name\":\"ProductType\"},{\"name\":\"VisibleProduct\"},{\"name\":\"ProductTag\"},{\"name\":\"PaColor\"},{\"name\":\"PaSize\"},{\"name\":\"ShippingClass\"},{\"name\":\"Page\"}]},{\"kind\":\"INTERFACE\",\"name\":\"ContentNode\",\"possibleTypes\":[{\"name\":\"MediaItem\"},{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"UNION\",\"name\":\"CommentAuthorUnion\",\"possibleTypes\":[{\"name\":\"User\"},{\"name\":\"CommentAuthor\"}]},{\"kind\":\"UNION\",\"name\":\"PostObjectUnion\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"},{\"name\":\"MediaItem\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithTitle\",\"possibleTypes\":[{\"name\":\"MediaItem\"},{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithContentEditor\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithAuthor\",\"possibleTypes\":[{\"name\":\"MediaItem\"},{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithFeaturedImage\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithExcerpt\",\"possibleTypes\":[{\"name\":\"Post\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithComments\",\"possibleTypes\":[{\"name\":\"MediaItem\"},{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithTrackbacks\",\"possibleTypes\":[{\"name\":\"Post\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithRevisions\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"UNION\",\"name\":\"TermObjectUnion\",\"possibleTypes\":[{\"name\":\"Category\"},{\"name\":\"Tag\"},{\"name\":\"PostFormat\"},{\"name\":\"ProductType\"},{\"name\":\"VisibleProduct\"},{\"name\":\"ProductCategory\"},{\"name\":\"ProductTag\"},{\"name\":\"ShippingClass\"},{\"name\":\"PaColor\"},{\"name\":\"PaSize\"}]},{\"kind\":\"INTERFACE\",\"name\":\"Product\",\"possibleTypes\":[{\"name\":\"VariableProduct\"},{\"name\":\"ExternalProduct\"},{\"name\":\"GroupProduct\"},{\"name\":\"SimpleProduct\"}]},{\"kind\":\"INTERFACE\",\"name\":\"ProductAttribute\",\"possibleTypes\":[{\"name\":\"GlobalProductAttribute\"},{\"name\":\"LocalProductAttribute\"}]},{\"kind\":\"INTERFACE\",\"name\":\"NodeWithPageAttributes\",\"possibleTypes\":[{\"name\":\"Page\"}]},{\"kind\":\"INTERFACE\",\"name\":\"HierarchicalContentNode\",\"possibleTypes\":[{\"name\":\"MediaItem\"},{\"name\":\"Page\"}]},{\"kind\":\"UNION\",\"name\":\"ContentRevisionUnion\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"UNION\",\"name\":\"MenuItemObjectUnion\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"},{\"name\":\"Category\"},{\"name\":\"Tag\"},{\"name\":\"ProductCategory\"},{\"name\":\"ProductTag\"},{\"name\":\"MenuItem\"}]}]}}");

/***/ }),

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gallery_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/gallery/Layout */ "./components/gallery/Layout.js");
/* harmony import */ var _components_gallery_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/gallery/Gallery */ "./components/gallery/Gallery.js");
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ApolloClient */ "./components/ApolloClient.js");
/* harmony import */ var _queries_mediaitems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries/mediaitems */ "./queries/mediaitems.js");

var _jsxFileName = "C:\\Users\\ajith\\Desktop\\keymoji\\pages\\gallery.js";





const gallery = propg => {
  const {
    mediaItems
  } = propg;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_gallery_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product-container",
      children: mediaItems.length ? mediaItems.map(mediaItem => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_gallery_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
        mediaItem: mediaItem
      }, mediaItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 35
      }, undefined)) : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, undefined);
};

gallery.getInitialProps = async () => {
  const result = await _components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__["default"].query({
    query: _queries_mediaitems__WEBPACK_IMPORTED_MODULE_4__["default"]
  });
  return {
    mediaItems: result.data.products.nodes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ }),

/***/ "./queries/mediaitems.js":
/*!*******************************!*\
  !*** ./queries/mediaitems.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const MEDIA_LIST = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query {
  products {
    nodes {
      image {
        id
        slug
        sourceUrl
      }
    }
  }
}`;
/* harmony default export */ __webpack_exports__["default"] = (MEDIA_LIST);

/***/ }),

/***/ "./styles/Style.css":
/*!**************************!*\
  !*** ./styles/Style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-sticky-footer":
/*!**************************************!*\
  !*** external "react-sticky-footer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky-footer");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fwb2xsb0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlcmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZkYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydGljb24vQ2FydGljb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250ZXh0L0FwcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYWxsZXJ5L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYWxsZXJ5L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3F1ZXJpZXMvbWVkaWFpdGVtcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3ktZm9vdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjbGllbnRDb25maWciLCJzaXRlVXJsIiwiZ3JhcGhxbFVybCIsImZyYWdtZW50TWF0Y2hlciIsIkludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIiLCJpbnRyb3NwZWN0aW9uUXVlcnlSZXN1bHREYXRhIiwibWlkZGxld2FyZSIsIkFwb2xsb0xpbmsiLCJvcGVyYXRpb24iLCJmb3J3YXJkIiwic2Vzc2lvbiIsImxvY2FsU3RvcmFnZSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiYWZ0ZXJ3YXJlIiwibWFwIiwicmVzcG9uc2UiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImdldCIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwic2V0SXRlbSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJjb25jYXQiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsImZldGNoIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiRm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImFsaWduIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIiwiRm9vdGVyZGF0YSIsIkhlYWRlciIsIk5hdmRhdGEiLCJDYXJ0aWNvbiIsImNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsInByb2R1Y3RzQ291bnQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxQcm9kdWN0c0NvdW50IiwidG90YWxQcmljZSIsInRvdGFsUHJvZHVjdHNQcmljZSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwicHJvcHMiLCJzZXRDYXJ0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjaGlsZHJlbiIsIkdhbGxlcnkiLCJwcm9wZ2wiLCJtZWRpYUl0ZW0iLCJpbWFnZSIsInNvdXJjZVVybCIsIkxheW91dCIsInByb3BnbHkiLCJnYWxsZXJ5IiwicHJvcGciLCJtZWRpYUl0ZW1zIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXN1bHQiLCJxdWVyeSIsIk1FRElBX0xJU1QiLCJkYXRhIiwicHJvZHVjdHMiLCJub2RlcyIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMv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LHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2dhbGxlcnkuanNcIik7XG4iLCJjb25zdCBjbGllbnRDb25maWcgPSB7XHJcblx0c2l0ZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcblx0Z3JhcGhxbFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Qvd29yZHByZXNzL2dyYXBocWwnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Q29uZmlnOyIsImltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xyXG5pbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSBcImFwb2xsby1saW5rXCI7XHJcbmltcG9ydCB7IEludHJvc3BlY3Rpb25GcmFnbWVudE1hdGNoZXIgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5pbXBvcnQgaW50cm9zcGVjdGlvblF1ZXJ5UmVzdWx0RGF0YSBmcm9tICcuLi9mcmFnbWVudFR5cGVzJztcclxuXHJcbmltcG9ydCBjbGllbnRDb25maWcgZnJvbSAnLi8uLi9jbGllbnQtY29uZmlnJztcclxuXHJcbi8vIEZyYWdtZW50IG1hdGNoZXIuXHJcbmNvbnN0IGZyYWdtZW50TWF0Y2hlciA9IG5ldyBJbnRyb3NwZWN0aW9uRnJhZ21lbnRNYXRjaGVyKHtcclxuXHRpbnRyb3NwZWN0aW9uUXVlcnlSZXN1bHREYXRhXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlID0gbmV3IEFwb2xsb0xpbmsoICggb3BlcmF0aW9uLCBmb3J3YXJkICkgPT4ge1xyXG5cdC8qKlxyXG5cdCAqIElmIHNlc3Npb24gZGF0YSBleGlzdCBpbiBsb2NhbCBzdG9yYWdlLCBzZXQgdmFsdWUgYXMgc2Vzc2lvbiBoZWFkZXIuXHJcblx0ICovXHJcblx0Y29uc3Qgc2Vzc2lvbiA9ICggcHJvY2Vzcy5icm93c2VyICkgPyAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFwid29vLXNlc3Npb25cIiApIDogbnVsbDtcclxuXHJcblx0aWYgKCBzZXNzaW9uICkge1xyXG5cdFx0b3BlcmF0aW9uLnNldENvbnRleHQoICggeyBoZWFkZXJzID0ge30gfSApID0+ICgge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJ3b29jb21tZXJjZS1zZXNzaW9uXCI6IGBTZXNzaW9uICR7IHNlc3Npb24gfWBcclxuXHRcdFx0fVxyXG5cdFx0fSApICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZm9yd2FyZCggb3BlcmF0aW9uICk7XHJcblxyXG59ICk7XHJcblxyXG4vKipcclxuICogQWZ0ZXJ3YXJlIG9wZXJhdGlvbi5cclxuICpcclxuICogVGhpcyBjYXRjaGVzIHRoZSBpbmNvbWluZyBzZXNzaW9uIHRva2VuIGFuZCBzdG9yZXMgaXQgaW4gbG9jYWxTdG9yYWdlLCBmb3IgZnV0dXJlIEdyYXBoUUwgcmVxdWVzdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWZ0ZXJ3YXJlID0gbmV3IEFwb2xsb0xpbmsoICggb3BlcmF0aW9uLCBmb3J3YXJkICkgPT4ge1xyXG5cclxuXHRyZXR1cm4gZm9yd2FyZCggb3BlcmF0aW9uICkubWFwKCByZXNwb25zZSA9PiB7XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrIGZvciBzZXNzaW9uIGhlYWRlciBhbmQgdXBkYXRlIHNlc3Npb24gaW4gbG9jYWwgc3RvcmFnZSBhY2NvcmRpbmdseS5cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgY29udGV4dCA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XHJcblx0XHRjb25zdCB7IHJlc3BvbnNlOiB7IGhlYWRlcnMgfSB9ICA9IGNvbnRleHQ7XHJcblx0XHRjb25zdCBzZXNzaW9uID0gaGVhZGVycy5nZXQoIFwid29vY29tbWVyY2Utc2Vzc2lvblwiICk7XHJcblxyXG5cdFx0aWYgKCBzZXNzaW9uICkge1xyXG5cclxuXHRcdFx0Ly8gUmVtb3ZlIHNlc3Npb24gZGF0YSBpZiBzZXNzaW9uIGRlc3Ryb3llZC5cclxuXHRcdFx0aWYgKCBcImZhbHNlXCIgPT09IHNlc3Npb24gKSB7XHJcblxyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBcIndvby1zZXNzaW9uXCIgKTtcclxuXHJcblx0XHRcdFx0Ly8gVXBkYXRlIHNlc3Npb24gbmV3IGRhdGEgaWYgY2hhbmdlZC5cclxuXHRcdFx0fSBlbHNlIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIFwid29vLXNlc3Npb25cIiApICE9PSBzZXNzaW9uICkge1xyXG5cclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggXCJ3b28tc2Vzc2lvblwiLCBoZWFkZXJzLmdldCggXCJ3b29jb21tZXJjZS1zZXNzaW9uXCIgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXNwb25zZTtcclxuXHJcblx0fSApO1xyXG59ICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gQXBvbGxvIEdyYXBoUUwgY2xpZW50LlxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuXHRsaW5rOiBtaWRkbGV3YXJlLmNvbmNhdCggYWZ0ZXJ3YXJlLmNvbmNhdCggY3JlYXRlSHR0cExpbmsoe1xyXG5cdFx0dXJpOiBjbGllbnRDb25maWcuZ3JhcGhxbFVybCxcclxuXHRcdGZldGNoOiBmZXRjaFxyXG5cdH0pICkgKSxcclxuXHRjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoIHsgZnJhZ21lbnRNYXRjaGVyIH0gKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XHJcbiIsImltcG9ydCBTdGlja3lGb290ZXIgZnJvbSAncmVhY3Qtc3RpY2t5LWZvb3Rlcic7XHJcbmltcG9ydCBDYXJ0aWNvbiBmcm9tICcuL2NhcnRpY29uL0NhcnRpY29uJztcclxuY29uc3QgRm9vdGVyID0gKCkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFN0aWNreUZvb3RlciBib3R0b21UaHJlc2hvbGQ9ezUwfSBub3JtYWxTdHlsZXM9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2QwZDNkNFwiLHBhZGRpbmc6IFwiMnJlbVwiLGFsaWduOlwiY2VudGVyc1wifX1cclxuICAgICAgICBzdGlja3lTdHlsZXM9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwuOClcIixwYWRkaW5nOiBcIjJyZW1cIix3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1Nob3BcIiBjbGFzc05hbWU9XCJjb2xmXCI+PGkgY2xhc3NOYW1lPVwidGkgdGktbGF5b3V0LWdyaWQyXCI+PC9pPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6XCIxMHB4XCIsY29sb3I6XCJibGFja1wifX0+U2hvcDwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvU2hvcFwiIGNsYXNzTmFtZT1cImNvbGZcIj48aSBjbGFzc05hbWU9XCJ0aSB0aS1oZWFydFwiPjwvaT48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2ZvbnRTaXplOlwiMTBweFwiLGNvbG9yOlwiYmxhY2tcIn19Pldpc2hsaXN0PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9TaG9wXCIgY2xhc3NOYW1lPVwiY29sZlwiPjxpIGNsYXNzTmFtZT1cInRpIHRpLXVzZXJcIj48L2k+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3tmb250U2l6ZTpcIjEwcHhcIixjb2xvcjpcImJsYWNrXCJ9fT5BY2NvdW50PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9TaG9wXCIgY2xhc3NOYW1lPVwiY29sZlwiPjxDYXJ0aWNvbi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3RpY2t5Rm9vdGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiY29uc3QgRm9vdGVyZGF0YSA9ICgpID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2VjdGlvbl9nYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXQgdHBfd2lkZ2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb290ZXJfdGl0bGUgbGFyZ2VfdGl0bGVcIj5JbXBvcnRlbnQgTGlua3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSAgY2xhc3NOYW1lPVwibG5rXCIgaHJlZj1cIiNcIj5EaXNjbGFpbWVyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPlByaXZhY3kgUG9saWN5PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPlNoaXBwaW5nIFBvbGljeTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibG5rXCIgaHJlZj1cIiNcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibG5rXCIgaHJlZj1cIiNcIj5SZXR1cm4gYW5kIFJlZnVuZCBQb2xpY3k8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImxua1wiIGhyZWY9XCIjXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtbGctMSBjb2wtbGctMiBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldCB0cF93aWRnZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvb3Rlcl90aXRsZSBsYXJnZV90aXRsZVwiPlVzZUZ1bGxMaW5rczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibG5rXCIgaHJlZj1cIiNcIj5GQVE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibG5rXCIgaHJlZj1cIiNcIj5DYXJlZXJzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImxua1wiIGhyZWY9XCIjXCI+Q29udGFjdCBVczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsbmtcIiBocmVmPVwiI1wiPlNpdGVtYXA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTIgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXQgaW5zdGFmZWVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cInRpIHRpLXRydWNrXCI+IDxsYWJlbD5GUkVFIFNISVBQSU5HPC9sYWJlbD48L2k+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic210eHRcIj5BbGwgT3ZlciBJbmRpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cInRpIHRpLWhlYWRwaG9uZS1hbHRcIj4gPGxhYmVsPjI0LzcgU1VQUE9SVDwvbGFiZWw+PC9pPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNtdHh0XCI+R2V0IGluIHRvdWNoIDI0Lzc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJ0aSB0aS1zaGFyZS1hbHRcIj4gPGxhYmVsPlJFVFVSTiBQT0xJQ1k8L2xhYmVsPjwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbXR4dFwiPjE0IGRheXMgZWFzeSByZXR1cm48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LWxnLTEgY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXQgdHBfd2lkZ2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb290ZXJfdGl0bGVcIj48c3BhbiBjbGFzc05hbWU9XCJ0aSB0aS1ob21lXCI+PC9zcGFuPkNvbnRhY3QgVXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU+PGkgY2xhc3NOYW1lPVwidGkgdGktbG9jYXRpb24tcGluXCI+PC9pPk9yYml6IEFyY2FkZSxDYWxpY3V0IFJvYWQsTkgtMTcsS2Fra2FkLE1hbGFwcHVyYW0sS2VyYWxhLTY3NjMwNjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJ0aSB0aS1sb2NhdGlvbi1waW5cIj48L2k+S2F6aGkgU3RyZWV0LE9QUCBWaWpheWEgQ29sbGVnZSxCYXNhdmFuYWd1ZGksQmFuZ2Fsb3JlLTU2MDAwNDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbS1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpIHRpLW1vYmlsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKzkxKTk1Njc1NTU2NTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCs5MSk3MDEyNzE3MDgzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic20taGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aSB0aS1lbWFpbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RAb3JiaXouaW5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcmRhdGE7IiwiaW1wb3J0IE5hdmRhdGEgZnJvbSBcIi4vTmF2ZGF0YVwiO1xyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxOYXZkYXRhLz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBOYXZkYXRhID0gKCkgPT57XHJcbiAgICByZXR1cm4gPE5hdmJhciBiZz1cImxpZ2h0XCIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJoZWFkZXJfYXJlYVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIGxvZ29faFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImltZ2xvZ29cIiBzcmM9XCJodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMS9jcm9wcGVkLWxvZ28ucG5nXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+SE9NRTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1Nob3BcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlNIT1A8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9nYWxsZXJ5XCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5HQUxMRVJZPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvQWJvdXRcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkFCT1VUIFVTPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvc2luZ2xlcHJvZHVjdFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Q0FSVDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPldJU0hMSVNUPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+TVkgQUNDT1VOVDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkxPR09VVDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj48aSBjbGFzc05hbWU9XCJ0aSB0aS1zZWFyY2hcIj48L2k+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyPlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmRhdGE7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLy4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDYXJ0aWNvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0WyBjYXJ0IF0gPSB1c2VDb250ZXh0KCBBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IHByb2R1Y3RzQ291bnQgPSAoIG51bGwgIT09IGNhcnQgJiYgT2JqZWN0LmtleXMoIGNhcnQgKS5sZW5ndGggKSA/IGNhcnQudG90YWxQcm9kdWN0c0NvdW50IDogJyc7XHJcbiAgICBjb25zdCB0b3RhbFByaWNlID0gKCBudWxsICE9PSBjYXJ0ICYmIE9iamVjdC5rZXlzKCBjYXJ0ICkubGVuZ3RoICkgPyBjYXJ0LnRvdGFsUHJvZHVjdHNQcmljZSA6ICcnO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1pY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRpIHRpLXNob3BwaW5nLWNhcnQgd29vLW5leHQtY2FydC1pY29uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvZHVjdHNDb3VudCA/IDxzcGFuIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtY291bnRcIj57IHByb2R1Y3RzQ291bnQgfTwvc3Bhbj4gOiAnJyB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aSBzdHlsZT17e2ZvbnRTaXplOlwiMTBweFwiLGNvbG9yOlwiYmxhY2tcIn19PkNhcnQ8L2k+XHJcbiAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYXJ0aWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChbXHJcblx0e30sXHJcblx0KCkgPT4ge31cclxuXSk7XHJcbmV4cG9ydCBjb25zdCBBcHBQcm92aWRlciA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG5cdGNvbnN0IFsgY2FydCwgc2V0Q2FydCBdID0gdXNlU3RhdGUoIG51bGwgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG5cdFx0Ly8gQFRPRE8gV2lsbCBhZGQgb3B0aW9uIHRvIHNob3cgdGhlIGNhcnQgd2l0aCBsb2NhbFN0b3JhZ2UgbGF0ZXIuXHJcblx0XHRpZiAoIHByb2Nlc3MuYnJvd3NlciApIHtcclxuXHJcblx0XHRcdGxldCBjYXJ0RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCAna2V5bW9qaS1jYXJ0JyApO1xyXG5cdFx0XHRjYXJ0RGF0YSA9IG51bGwgIT09IGNhcnREYXRhID8gSlNPTi5wYXJzZSggY2FydERhdGEgKSA6ICcnO1xyXG5cdFx0XHRzZXRDYXJ0KGNhcnREYXRhKTtcclxuXHJcblx0XHR9XHJcblxyXG4gICAgfSwgW10gKTtcclxuICAgIHJldHVybiAoXHJcblx0XHQ8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IFsgY2FydCwgc2V0Q2FydCBdIH0+XHJcblx0XHRcdHsgcHJvcHMuY2hpbGRyZW4gfVxyXG5cdFx0PC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG5cdCk7XHJcbn07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XHJcbmNvbnN0IEdhbGxlcnkgPSAocHJvcGdsKSA9PntcclxuICAgIGNvbnN0IHsgbWVkaWFJdGVtIH0gPSBwcm9wZ2w7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTIgY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxhPjxJbWFnZSBzcmM9e21lZGlhSXRlbS5pbWFnZS5zb3VyY2VVcmx9IHRodW1ibmFpbCAvPjwvYT4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7IiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvU3R5bGUuY3NzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInO1xyXG5pbXBvcnQgRm9vdGVyZGF0YSBmcm9tICcuLi9Gb290ZXJkYXRhJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9BcG9sbG9DbGllbnRcIjtcclxuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgYXMgQXBvbGxvSG9va3NQcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BnbHkpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8QXBwUHJvdmlkZXI+XHJcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17IGNsaWVudCB9PlxyXG4gICAgICAgICAgICA8QXBvbGxvSG9va3NQcm92aWRlciBjbGllbnQ9eyBjbGllbnQgfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGl0bGU+R2FsbGVyeTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vQGljb24vdGhlbWlmeS1pY29ucy90aGVtaWZ5LWljb25zLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjUuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIHtwcm9wZ2x5LmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8Rm9vdGVyZGF0YS8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBvbGxvSG9va3NQcm92aWRlcj5cclxuXHRcdFx0PC9BcG9sbG9Qcm92aWRlcj5cclxuXHRcdDwvQXBwUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbGxlcnkvTGF5b3V0XCI7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbGxlcnkvR2FsbGVyeVwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0Fwb2xsb0NsaWVudFwiO1xyXG5pbXBvcnQgTUVESUFfTElTVCBmcm9tIFwiLi4vcXVlcmllcy9tZWRpYWl0ZW1zXCI7XHJcblxyXG5cclxuY29uc3QgZ2FsbGVyeSA9ICggcHJvcGcgKSA9PiB7XHJcblx0Y29uc3QgeyBtZWRpYUl0ZW1zIH0gPSBwcm9wZztcclxuXHRyZXR1cm4oIFxyXG5cdFx0PExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdHsgbWVkaWFJdGVtcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRtZWRpYUl0ZW1zLm1hcCggbWVkaWFJdGVtID0+IDxHYWxsZXJ5IGtleT17IG1lZGlhSXRlbS5pZCB9IG1lZGlhSXRlbT17IG1lZGlhSXRlbSB9Lz4gKVxyXG5cdFx0XHRcdFx0XHQpIDogJycgfVxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuXHRcdClcclxuXHR9O1xyXG5cdGdhbGxlcnkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeSgge1xyXG5cdFx0XHRxdWVyeTogTUVESUFfTElTVCxcclxuXHRcdH0gKTtcclxuXHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG1lZGlhSXRlbXM6IHJlc3VsdC5kYXRhLnByb2R1Y3RzLm5vZGVzLFxyXG5cdFx0fVxyXG5cdFxyXG5cdH07XHJcblx0XHJcblx0ZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeTsiLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5cclxuY29uc3QgTUVESUFfTElTVCA9IGdxbGBxdWVyeSB7XHJcbiAgcHJvZHVjdHMge1xyXG4gICAgbm9kZXMge1xyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzbHVnXHJcbiAgICAgICAgc291cmNlVXJsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG5leHBvcnQgZGVmYXVsdCBNRURJQV9MSVNUOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvUm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreS1mb290ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=