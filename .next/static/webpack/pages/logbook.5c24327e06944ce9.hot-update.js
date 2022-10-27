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

/***/ "./components/Logbooks/BoxSx.jsx":
/*!***************************************!*\
  !*** ./components/Logbooks/BoxSx.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\nvar BoxSx = function(props) {\n    var boxAnimate = {\n        offscreen: {\n            x: -10,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-start ml-[1vw]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-3 md:mt-10 md:mx-10 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    initial: \"offscreen\",\n                    whileInView: \"onscreen\",\n                    viewport: {\n                        once: false,\n                        amount: 0.9,\n                        margin: [\n                            \"-150px 0px 0px 0px\"\n                        ]\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n                        className: \"block p-3 md:p-6 max-w-xl \" + props.imgurl + \" bg-cover bg-center rounded-lg border shadow-md border-gray-700 md:min-w-[30vw] md:min-h-[15vh]\",\n                        variants: boxAnimate,\n                        whileHover: {\n                            scale: 1.07\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mb-2 md:text-2xl font-bold tracking-tight text-white\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-normal text-xs md:text-xl text-gray-100\",\n                                children: props.text\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = BoxSx;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxSx);\nvar _c;\n$RefreshReg$(_c, \"BoxSx\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2Jvb2tzL0JveFN4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUI7QUFDOEI7QUFFdkQsSUFBTUcsS0FBSyxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUV2QixJQUFNQyxVQUFVLEdBQUM7UUFDZkMsU0FBUyxFQUFDO1lBQUNDLENBQUMsRUFBQyxDQUFDLEVBQUU7WUFBRUMsT0FBTyxFQUFDLENBQUM7WUFDekJDLFVBQVUsRUFBRTtnQkFDVkMsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCQyxRQUFRLEVBQUUsR0FBRzthQUFDO1NBQUM7UUFDbkJDLFFBQVEsRUFBQztZQUNQTCxDQUFDLEVBQUMsQ0FBQztZQUNIQyxPQUFPLEVBQUMsQ0FBQztZQUNUQyxVQUFVLEVBQUU7Z0JBQ1ZJLElBQUksRUFBQyxRQUFRO2dCQUNiQyxNQUFNLEVBQUUsR0FBRztnQkFDWEosSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCQyxRQUFRLEVBQUUsR0FBRzthQUFDO1NBQ2pCO0tBQUM7SUFFSixxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsNkJBQTZCO2tCQUN4Qyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMseUJBQXlCO3NCQUN0Qyw0RUFBQ2QsMERBQWU7MEJBQ2QsNEVBQUNELHFEQUFVO29CQUNUZ0IsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCQyxXQUFXLEVBQUUsVUFBVTtvQkFDdkJDLFFBQVEsRUFBRTt3QkFBQ0MsSUFBSSxFQUFDLEtBQUs7d0JBQUVDLE1BQU0sRUFBQyxHQUFHO3dCQUFFQyxNQUFNLEVBQUM7NEJBQUMsb0JBQW9CO3lCQUFDO3FCQUFDOzhCQUVqRSw0RUFBQ3JCLG1EQUFRO3dCQUFDZSxTQUFTLEVBQUUsNEJBQTRCLEdBQUlaLEtBQUssQ0FBQ29CLE1BQU0sR0FBSSxpR0FBaUc7d0JBQ3JLQyxRQUFRLEVBQUVwQixVQUFVO3dCQUFFcUIsVUFBVSxFQUFFOzRCQUFFQyxLQUFLLEVBQUUsSUFBSTt5QkFBRTt3QkFDakRDLFFBQVEsRUFBRTs0QkFBRUQsS0FBSyxFQUFFLEdBQUc7eUJBQUU7OzBDQUVyQiw4REFBQ0UsSUFBRTtnQ0FBQ2IsU0FBUyxFQUFDLHNEQUFzRDswQ0FBRVosS0FBSyxDQUFDMEIsS0FBSzs7Ozs7cUNBQU07MENBQ3ZGLDhEQUFDQyxHQUFDO2dDQUFDZixTQUFTLEVBQUMsOENBQThDOzBDQUFFWixLQUFLLENBQUM0QixJQUFJOzs7OztxQ0FBSzs7Ozs7OzZCQUVyRTs7Ozs7eUJBQ0E7Ozs7O3FCQUNHOzs7OztpQkFDZDs7Ozs7YUFDSixDQUNQO0NBQ0Y7QUF2Q0s3QixLQUFBQSxLQUFLO0FBeUNYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9nYm9va3MvQm94U3guanN4PzdmYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uICwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBCb3hTeCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGJveEFuaW1hdGU9e1xuICAgIG9mZnNjcmVlbjp7eDotMTAsIG9wYWNpdHk6MCxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgZHVyYXRpb246IDAuNX19LFxuICAgIG9uc2NyZWVuOntcbiAgICAgIHg6MCwgXG4gICAgICBvcGFjaXR5OjEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6XCJzcHJpbmdcIixcbiAgICAgICAgYm91bmNlOiAwLjQsXG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjV9XG4gICAgfX1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktc3RhcnQgbWwtWzF2d10nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgbWQ6bXQtMTAgbWQ6bXgtMTAgXCI+XG4gICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e1wib2Zmc2NyZWVuXCJ9XG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXtcIm9uc2NyZWVuXCJ9XG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7b25jZTpmYWxzZSwgYW1vdW50OjAuOSwgbWFyZ2luOlsnLTE1MHB4IDBweCAwcHggMHB4J119fT5cblxuICAgICAgICAgICAgICA8bW90aW9uLmEgY2xhc3NOYW1lPXtcImJsb2NrIHAtMyBtZDpwLTYgbWF4LXcteGwgXCIgKyAocHJvcHMuaW1ndXJsKSArIFwiIGJnLWNvdmVyIGJnLWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciBzaGFkb3ctbWQgYm9yZGVyLWdyYXktNzAwIG1kOm1pbi13LVszMHZ3XSBtZDptaW4taC1bMTV2aF1cIn1cbiAgICAgICAgICAgICAgIHZhcmlhbnRzPXtib3hBbmltYXRlfSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA3IH19IFxuICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fT5cblxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGVcIj57cHJvcHMudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQteHMgbWQ6dGV4dC14bCB0ZXh0LWdyYXktMTAwXCI+e3Byb3BzLnRleHR9PC9wPlxuXG4gICAgICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJveFN4Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQm94U3giLCJwcm9wcyIsImJveEFuaW1hdGUiLCJvZmZzY3JlZW4iLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJvbnNjcmVlbiIsInR5cGUiLCJib3VuY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJtYXJnaW4iLCJhIiwiaW1ndXJsIiwidmFyaWFudHMiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ3aGlsZVRhcCIsImg1IiwidGl0bGUiLCJwIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Logbooks/BoxSx.jsx\n"));

/***/ })

});