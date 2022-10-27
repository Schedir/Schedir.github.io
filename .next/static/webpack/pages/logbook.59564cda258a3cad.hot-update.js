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

/***/ "./components/Logbooks/BoxDx.jsx":
/*!***************************************!*\
  !*** ./components/Logbooks/BoxDx.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\nvar BoxDx = function(props) {\n    var boxAnimate = {\n        offscreen: {\n            x: 10,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-end mr-[10vw]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mx-3 md:mt-2 md:mx-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    initial: \"offscreen\",\n                    whileInView: \"onscreen\",\n                    viewport: {\n                        once: false,\n                        amount: 0.9,\n                        margin: [\n                            \"-150px 0px 0px 0px\"\n                        ]\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n                        className: \"block p-3 md:p-6 max-w-xl \" + props.imgurl + \" bg-cover bg-center rounded-lg border shadow-md border-gray-700 md:min-w-[30vw] md:min-h-[15vh]\",\n                        variants: boxAnimate,\n                        whileHover: {\n                            scale: 1.07\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mb-2 md:text-2xl font-bold tracking-tight text-white\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxDx.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-normal text-xs md:text-xl text-gray-100\",\n                                children: props.text\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxDx.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxDx.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxDx.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxDx.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxDx.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxDx.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = BoxDx;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxDx);\nvar _c;\n$RefreshReg$(_c, \"BoxDx\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2Jvb2tzL0JveER4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUI7QUFDaUU7QUFFMUYsSUFBTU0sS0FBSyxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUV2QixJQUFNQyxVQUFVLEdBQUM7UUFDZkMsU0FBUyxFQUFDO1lBQUNDLENBQUMsRUFBQyxFQUFFO1lBQUVDLE9BQU8sRUFBQyxDQUFDO1lBQ3hCQyxVQUFVLEVBQUU7Z0JBQ1ZDLElBQUksRUFBRSxXQUFXO2dCQUNqQkMsUUFBUSxFQUFFLEdBQUc7YUFBQztTQUFDO1FBQ25CQyxRQUFRLEVBQUM7WUFDUEwsQ0FBQyxFQUFDLENBQUM7WUFDSEMsT0FBTyxFQUFDLENBQUM7WUFDVEMsVUFBVSxFQUFFO2dCQUNWSSxJQUFJLEVBQUMsUUFBUTtnQkFDYkMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hKLElBQUksRUFBRSxXQUFXO2dCQUNqQkMsUUFBUSxFQUFFLEdBQUc7YUFBQztTQUNqQjtLQUFDO0lBRUoscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDRCQUE0QjtrQkFDekMsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHVCQUF1QjtzQkFFcEMsNEVBQUNkLDBEQUFlOzBCQUNkLDRFQUFDSixxREFBVTtvQkFDVG1CLE9BQU8sRUFBRSxXQUFXO29CQUNwQkMsV0FBVyxFQUFFLFVBQVU7b0JBQ3ZCQyxRQUFRLEVBQUU7d0JBQUNDLElBQUksRUFBQyxLQUFLO3dCQUFFQyxNQUFNLEVBQUMsR0FBRzt3QkFBRUMsTUFBTSxFQUFDOzRCQUFDLG9CQUFvQjt5QkFBQztxQkFBQzs4QkFFakUsNEVBQUN4QixtREFBUTt3QkFBQ2tCLFNBQVMsRUFBRSw0QkFBNEIsR0FBR1osS0FBSyxDQUFDb0IsTUFBTSxHQUFJLGlHQUFpRzt3QkFDcktDLFFBQVEsRUFBRXBCLFVBQVU7d0JBQUVxQixVQUFVLEVBQUU7NEJBQUVDLEtBQUssRUFBRSxJQUFJO3lCQUFFO3dCQUNqREMsUUFBUSxFQUFFOzRCQUFFRCxLQUFLLEVBQUUsR0FBRzt5QkFBRTs7MENBR3BCLDhEQUFDRSxJQUFFO2dDQUFDYixTQUFTLEVBQUMsc0RBQXNEOzBDQUFFWixLQUFLLENBQUMwQixLQUFLOzs7OztxQ0FBTTswQ0FDdkYsOERBQUNDLEdBQUM7Z0NBQUNmLFNBQVMsRUFBQyw4Q0FBOEM7MENBQUVaLEtBQUssQ0FBQzRCLElBQUk7Ozs7O3FDQUFLOzs7Ozs7NkJBRXJFOzs7Ozt5QkFFQTs7Ozs7cUJBQ0c7Ozs7O2lCQUVkOzs7OzthQUNGLENBQ1A7Q0FDRjtBQTNDSzdCLEtBQUFBLEtBQUs7QUE2Q1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dib29rcy9Cb3hEeC5qc3g/ZWFiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtLCB1c2VTcHJpbmcsIEFuaW1hdGVQcmVzZW5jZX0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgQm94RHggPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBib3hBbmltYXRlPXtcbiAgICBvZmZzY3JlZW46e3g6MTAsIG9wYWNpdHk6MCxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgZHVyYXRpb246IDAuNX19LFxuICAgIG9uc2NyZWVuOntcbiAgICAgIHg6MCwgXG4gICAgICBvcGFjaXR5OjEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6XCJzcHJpbmdcIixcbiAgICAgICAgYm91bmNlOiAwLjQsXG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjV9XG4gICAgfX1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZW5kIG1yLVsxMHZ3XSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgbWQ6bXQtMiBtZDpteC0xMFwiPlxuXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e1wib2Zmc2NyZWVuXCJ9XG4gICAgICAgICAgICB3aGlsZUluVmlldz17XCJvbnNjcmVlblwifVxuICAgICAgICAgICAgdmlld3BvcnQ9e3tvbmNlOmZhbHNlLCBhbW91bnQ6MC45LCBtYXJnaW46WyctMTUwcHggMHB4IDBweCAwcHgnXX19PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxtb3Rpb24uYSBjbGFzc05hbWU9e1wiYmxvY2sgcC0zIG1kOnAtNiBtYXgtdy14bCBcIisgKHByb3BzLmltZ3VybCkgKyBcIiBiZy1jb3ZlciBiZy1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgc2hhZG93LW1kIGJvcmRlci1ncmF5LTcwMCBtZDptaW4tdy1bMzB2d10gbWQ6bWluLWgtWzE1dmhdXCJ9XG4gICAgICAgICAgICB2YXJpYW50cz17Ym94QW5pbWF0ZX0gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNyB9fSBcbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX0gPlxuXG5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMiBtZDp0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZVwiPntwcm9wcy50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQteHMgbWQ6dGV4dC14bCB0ZXh0LWdyYXktMTAwXCI+e3Byb3BzLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9tb3Rpb24uYT5cblxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm94RHgiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTcHJpbmciLCJBbmltYXRlUHJlc2VuY2UiLCJCb3hEeCIsInByb3BzIiwiYm94QW5pbWF0ZSIsIm9mZnNjcmVlbiIsIngiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsIm9uc2NyZWVuIiwidHlwZSIsImJvdW5jZSIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsIm1hcmdpbiIsImEiLCJpbWd1cmwiLCJ2YXJpYW50cyIsIndoaWxlSG92ZXIiLCJzY2FsZSIsIndoaWxlVGFwIiwiaDUiLCJ0aXRsZSIsInAiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Logbooks/BoxDx.jsx\n"));

/***/ })

});