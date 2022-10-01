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

/***/ "./components/Logbook/BoxDx.jsx":
/*!**************************************!*\
  !*** ./components/Logbook/BoxDx.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar BoxDx = function(param) {\n    var title = param.title, text = param.text;\n    var boxAnimate = {\n        offscreen: {\n            x: 10,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 1\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                delay: 0.1,\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 1\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid ml-[50%] justify-items-start\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-3 md:mb-10 md:ml-[5em]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    initial: \"offscreen\",\n                    whileInView: \"onscreen\",\n                    viewport: {\n                        once: false,\n                        amount: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n                        href: \"#\",\n                        className: \"block p-3 md:p-6 max-w-xl bg-[url('/media/prova.jpg')] rounded-lg border shadow-md border-gray-700 \",\n                        variants: boxAnimate,\n                        whileHover: {\n                            scale: 1.1\n                        },\n                        exit: {\n                            y: -1000\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbook/BoxDx.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-normal text-xs md:text-xl text-gray-700 dark:text-gray-400\",\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbook/BoxDx.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbook/BoxDx.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbook/BoxDx.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbook/BoxDx.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbook/BoxDx.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbook/BoxDx.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = BoxDx;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxDx);\nvar _c;\n$RefreshReg$(_c, \"BoxDx\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2Jvb2svQm94RHguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUF1RDtBQUM5QjtBQUV6QixJQUFNRyxLQUFLLEdBQUcsZ0JBQW1CO1FBQWpCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJO0lBRXpCLElBQU1DLFVBQVUsR0FBQztRQUNmQyxTQUFTLEVBQUM7WUFBQ0MsQ0FBQyxFQUFDLEVBQUU7WUFBRUMsT0FBTyxFQUFDLENBQUM7WUFDeEJDLFVBQVUsRUFBRTtnQkFDVkMsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCQyxRQUFRLEVBQUUsQ0FBQzthQUFDO1NBQUM7UUFDakJDLFFBQVEsRUFBQztZQUNQTCxDQUFDLEVBQUMsQ0FBQztZQUNIQyxPQUFPLEVBQUMsQ0FBQztZQUNUQyxVQUFVLEVBQUU7Z0JBQ1ZJLElBQUksRUFBQyxRQUFRO2dCQUNiQyxLQUFLLEVBQUMsR0FBRztnQkFDVEMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hMLElBQUksRUFBRSxXQUFXO2dCQUNqQkMsUUFBUSxFQUFFLENBQUM7YUFBQztTQUNmO0tBQUM7SUFFSixxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsbUNBQW1DO2tCQUNoRCw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsMkJBQTJCO3NCQUV4Qyw0RUFBQ2pCLDBEQUFlOzBCQUNkLDRFQUFDRCxxREFBVTtvQkFDVG1CLE9BQU8sRUFBRSxXQUFXO29CQUNwQkMsV0FBVyxFQUFFLFVBQVU7b0JBQ3ZCQyxRQUFRLEVBQUU7d0JBQUNDLElBQUksRUFBQyxLQUFLO3dCQUFFQyxNQUFNLEVBQUMsR0FBRztxQkFBQzs4QkFFbEMsNEVBQUN2QixtREFBUTt3QkFBQ3lCLElBQUksRUFBQyxHQUFHO3dCQUFDUCxTQUFTLEVBQUMscUdBQXFHO3dCQUNsSVEsUUFBUSxFQUFFcEIsVUFBVTt3QkFBRXFCLFVBQVUsRUFBRTs0QkFBRUMsS0FBSyxFQUFFLEdBQUc7eUJBQUU7d0JBQUVDLElBQUksRUFBRTs0QkFBQ0MsQ0FBQyxFQUFDLENBQUMsSUFBSTt5QkFBQzs7MENBRzdELDhEQUFDQyxJQUFFO2dDQUFDYixTQUFTLEVBQUMseUVBQXlFOzBDQUFFZCxLQUFLOzs7OztxQ0FBTTswQ0FDcEcsOERBQUM0QixHQUFDO2dDQUFDZCxTQUFTLEVBQUMsaUVBQWlFOzBDQUFFYixJQUFJOzs7OztxQ0FBSzs7Ozs7OzZCQUNsRjs7Ozs7eUJBRUE7Ozs7O3FCQUNHOzs7OztpQkFFZDs7Ozs7YUFDRixDQUNQO0NBQ0Y7QUExQ0tGLEtBQUFBLEtBQUs7QUE0Q1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dib29rL0JveER4LmpzeD9kYmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiAsIEFuaW1hdGVQcmVzZW5jZX0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQm94RHggPSAoe3RpdGxlLCB0ZXh0fSkgPT4ge1xuXG4gIGNvbnN0IGJveEFuaW1hdGU9e1xuICAgIG9mZnNjcmVlbjp7eDoxMCwgb3BhY2l0eTowLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICBkdXJhdGlvbjogMX19LFxuICAgIG9uc2NyZWVuOntcbiAgICAgIHg6MCwgXG4gICAgICBvcGFjaXR5OjEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6XCJzcHJpbmdcIixcbiAgICAgICAgZGVsYXk6MC4xLFxuICAgICAgICBib3VuY2U6IDAuNCxcbiAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgZHVyYXRpb246IDF9XG4gICAgfX1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIG1sLVs1MCVdIGp1c3RpZnktaXRlbXMtc3RhcnQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIG1kOm1iLTEwIG1kOm1sLVs1ZW1dXCI+XG5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17XCJvZmZzY3JlZW5cIn1cbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXtcIm9uc2NyZWVuXCJ9XG4gICAgICAgICAgICB2aWV3cG9ydD17e29uY2U6ZmFsc2UsIGFtb3VudDowLjV9fT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBwLTMgbWQ6cC02IG1heC13LXhsIGJnLVt1cmwoJy9tZWRpYS9wcm92YS5qcGcnKV0gcm91bmRlZC1sZyBib3JkZXIgc2hhZG93LW1kIGJvcmRlci1ncmF5LTcwMCBcIiBcbiAgICAgICAgICAgIHZhcmlhbnRzPXtib3hBbmltYXRlfSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX0gZXhpdD17e3k6LTEwMDB9fT5cblxuXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC14cyBtZDp0ZXh0LXhsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+e3RleHR9PC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uYT5cblxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm94RHgiXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiUmVhY3QiLCJCb3hEeCIsInRpdGxlIiwidGV4dCIsImJveEFuaW1hdGUiLCJvZmZzY3JlZW4iLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJvbnNjcmVlbiIsInR5cGUiLCJkZWxheSIsImJvdW5jZSIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImEiLCJocmVmIiwidmFyaWFudHMiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJleGl0IiwieSIsImg1IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Logbook/BoxDx.jsx\n"));

/***/ })

});