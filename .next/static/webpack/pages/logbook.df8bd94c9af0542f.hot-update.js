"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/logbook",{

/***/ "./components/Logbooks/TextDx.jsx":
/*!****************************************!*\
  !*** ./components/Logbooks/TextDx.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar TextDx = function(param) {\n    var text = param.text, auth = param.auth;\n    var boxAnimate = {\n        offscreen: {\n            x: 10,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-end mr-[9vw]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-3 md:mt-10 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    initial: \"offscreen\",\n                    whileInView: \"onscreen\",\n                    viewport: {\n                        once: false,\n                        amount: 0.9,\n                        margin: [\n                            \"-150px 0px 0px 0px\"\n                        ]\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n                        href: \"#\",\n                        className: \"block p-6 max-w-xl bg-transparent hover:scale-105\",\n                        variants: boxAnimate,\n                        whileHover: {\n                            scale: 1.07\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mb-2 md:text-2xl text-center tracking-tight text-white\",\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/TextDx.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-normal text-xs md:text-1xl text-right text-gray-400\",\n                                children: auth\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/TextDx.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/TextDx.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/TextDx.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/TextDx.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/TextDx.jsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/TextDx.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = TextDx;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextDx);\nvar _c;\n$RefreshReg$(_c, \"TextDx\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2Jvb2tzL1RleHREeC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXVEO0FBQzlCO0FBRXpCLElBQU1HLE1BQU0sR0FBRyxnQkFBa0I7UUFBaEJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7SUFFekIsSUFBTUMsVUFBVSxHQUFDO1FBQ2ZDLFNBQVMsRUFBQztZQUFDQyxDQUFDLEVBQUMsRUFBRTtZQUFFQyxPQUFPLEVBQUMsQ0FBQztZQUN4QkMsVUFBVSxFQUFFO2dCQUNWQyxJQUFJLEVBQUUsV0FBVztnQkFDakJDLFFBQVEsRUFBRSxHQUFHO2FBQUM7U0FBQztRQUNuQkMsUUFBUSxFQUFDO1lBQ1BMLENBQUMsRUFBQyxDQUFDO1lBQ0hDLE9BQU8sRUFBQyxDQUFDO1lBQ1RDLFVBQVUsRUFBRTtnQkFDVkksSUFBSSxFQUFDLFFBQVE7Z0JBQ2JDLE1BQU0sRUFBRSxHQUFHO2dCQUNYSixJQUFJLEVBQUUsV0FBVztnQkFDakJDLFFBQVEsRUFBRSxHQUFHO2FBQUM7U0FDakI7S0FBQztJQUVKLHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQywyQkFBMkI7a0JBQ3RDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7c0JBQzdCLDRFQUFDaEIsMERBQWU7MEJBQ2QsNEVBQUNELHFEQUFVO29CQUNUa0IsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCQyxXQUFXLEVBQUUsVUFBVTtvQkFDdkJDLFFBQVEsRUFBRTt3QkFBQ0MsSUFBSSxFQUFDLEtBQUs7d0JBQUVDLE1BQU0sRUFBQyxHQUFHO3dCQUFFQyxNQUFNLEVBQUM7NEJBQUMsb0JBQW9CO3lCQUFDO3FCQUFDOzhCQUVqRSw0RUFBQ3ZCLG1EQUFRO3dCQUFDeUIsSUFBSSxFQUFDLEdBQUc7d0JBQUNSLFNBQVMsRUFBQyxtREFBbUQ7d0JBQ2hGUyxRQUFRLEVBQUVwQixVQUFVO3dCQUFFcUIsVUFBVSxFQUFFOzRCQUFFQyxLQUFLLEVBQUUsSUFBSTt5QkFBRTs7MENBQzdDLDhEQUFDQyxJQUFFO2dDQUFDWixTQUFTLEVBQUMsd0RBQXdEOzBDQUFFYixJQUFJOzs7OztxQ0FBTTswQ0FDbEYsOERBQUMwQixHQUFDO2dDQUFDYixTQUFTLEVBQUMsMERBQTBEOzBDQUFFWixJQUFJOzs7OztxQ0FBSzs7Ozs7OzZCQUMzRTs7Ozs7eUJBRUE7Ozs7O3FCQUNHOzs7OztpQkFFZDs7Ozs7YUFDSixDQUNQO0NBQ0Y7QUF0Q0tGLEtBQUFBLE1BQU07QUF3Q1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dib29rcy9UZXh0RHguanN4Pzc4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uICwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBUZXh0RHggPSAoe3RleHQsIGF1dGh9KSA9PiB7XG5cbiAgY29uc3QgYm94QW5pbWF0ZT17XG4gICAgb2Zmc2NyZWVuOnt4OjEwLCBvcGFjaXR5OjAsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjV9fSxcbiAgICBvbnNjcmVlbjp7XG4gICAgICB4OjAsIFxuICAgICAgb3BhY2l0eToxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOlwic3ByaW5nXCIsXG4gICAgICAgIGJvdW5jZTogMC40LFxuICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICBkdXJhdGlvbjogMC41fVxuICAgIH19XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWVuZCBtci1bOXZ3XSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyBtZDptdC0xMCBcIj5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17XCJvZmZzY3JlZW5cIn1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e1wib25zY3JlZW5cIn1cbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3tvbmNlOmZhbHNlLCBhbW91bnQ6MC45LCBtYXJnaW46WyctMTUwcHggMHB4IDBweCAwcHgnXX19PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHAtNiBtYXgtdy14bCBiZy10cmFuc3BhcmVudCBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICB2YXJpYW50cz17Ym94QW5pbWF0ZX0gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNyB9fT5cbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0yIG1kOnRleHQtMnhsIHRleHQtY2VudGVyIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGVcIj57dGV4dH08L2g1PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC14cyBtZDp0ZXh0LTF4bCB0ZXh0LXJpZ2h0IHRleHQtZ3JheS00MDBcIj57YXV0aH08L3A+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0RHgiXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiUmVhY3QiLCJUZXh0RHgiLCJ0ZXh0IiwiYXV0aCIsImJveEFuaW1hdGUiLCJvZmZzY3JlZW4iLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJvbnNjcmVlbiIsInR5cGUiLCJib3VuY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJtYXJnaW4iLCJhIiwiaHJlZiIsInZhcmlhbnRzIiwid2hpbGVIb3ZlciIsInNjYWxlIiwiaDUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Logbooks/TextDx.jsx\n"));

/***/ })

});