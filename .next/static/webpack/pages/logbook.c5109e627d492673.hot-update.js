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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"./components/Logbooks/Modal.jsx\");\n\n\n\n\nconst BoxSx = (props)=>{\n    const boxAnimate = {\n        offscreen: {\n            x: -10,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-start ml-[10vw]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-3 md:mt-10 md:mx-10 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: \"offscreen\",\n                        whileInView: \"onscreen\",\n                        \"data-modal-toggle\": \"defaultModal\",\n                        viewport: {\n                            once: false,\n                            amount: 0.5,\n                            margin: [\n                                \"-150px 0px 0px 0px\"\n                            ]\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {\n                            className: \"block p-0 overflow-hidden mb-8 rounded-xl border shadow-md border-gray-700 min-w-[30vw] md:min-w-[30vw] max-w-[30vw] min-h-[5vh] md:min-h-[35vh]\",\n                            variants: boxAnimate,\n                            whileHover: {\n                                scale: 1.07\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/LogMedia/\" + props.imgurl,\n                                    alt: \"\",\n                                    className: \"object-fill\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mt-[-70%] px-4 text-[15px] sm:text-[17px] md:text-[23px] xl:text-[25px] font-bold tracking-tight text-white\",\n                                    children: props.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal px-4 text-[10px] sm:text-[12px] md:text-[18px] xl:text-[20px] text-gray-100\",\n                                    children: props.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"defaultModal\",\n                tabIndex: \"-1\",\n                \"aria-hidden\": \"true\",\n                className: \"fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full h-full max-w-2xl md:h-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl font-semibold text-gray-900 dark:text-white\",\n                                        children: \"Terms of\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\",\n                                        \"data-modal-toggle\": \"defaultModal\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                \"aria-hidden\": \"true\",\n                                                className: \"w-5 h-5\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 20 20\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    fillRule: \"evenodd\",\n                                                    d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                                    clipRule: \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 148\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"sr-only\",\n                                                children: \"Close modal\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-6 space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                                        children: \"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                                        children: \"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-toggle\": \"defaultModal\",\n                                        type: \"button\",\n                                        className: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                        children: \"I accept\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-toggle\": \"defaultModal\",\n                                        type: \"button\",\n                                        className: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                        children: \"Decline\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Logbooks/BoxSx.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BoxSx;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxSx);\nvar _c;\n$RefreshReg$(_c, \"BoxSx\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2Jvb2tzL0JveFN4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBeUI7QUFDOEI7QUFDNUI7QUFFM0IsTUFBTUksUUFBUUMsQ0FBQUEsUUFBUztJQUVyQixNQUFNQyxhQUFXO1FBQ2ZDLFdBQVU7WUFBQ0MsR0FBRSxDQUFDO1lBQUlDLFNBQVE7WUFDeEJDLFlBQVk7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFVBQVU7WUFBRztRQUFDO1FBQ2xCQyxVQUFTO1lBQ1BMLEdBQUU7WUFDRkMsU0FBUTtZQUNSQyxZQUFZO2dCQUNWSSxNQUFLO2dCQUNMQyxRQUFRO2dCQUNSSixNQUFNO2dCQUNOQyxVQUFVO1lBQUc7UUFDakI7SUFBQztJQUVILHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQ0NDLFdBQVU7MEJBQ1YsNEVBQUNmLDBEQUFlQTs4QkFDZCw0RUFBQ0QscURBQVU7d0JBQ1RpQixTQUFTO3dCQUNUQyxhQUFhO3dCQUNiQyxxQkFBa0I7d0JBQ2xCQyxVQUFVOzRCQUFDQyxNQUFLLEtBQUs7NEJBQUVDLFFBQU87NEJBQUtDLFFBQU87Z0NBQUM7NkJBQXFCO3dCQUFBO2tDQUloRSw0RUFBQ3ZCLG1EQUFROzRCQUFDZ0IsV0FBWTs0QkFDcEJTLFVBQVVwQjs0QkFBWXFCLFlBQVk7Z0NBQUVDLE9BQU87NEJBQUs7NEJBQ2hEQyxVQUFVO2dDQUFFRCxPQUFPOzRCQUFJOzs4Q0FFdkIsOERBQUNFO29DQUFJQyxLQUFLLGVBQWUxQixNQUFNMkIsTUFBTTtvQ0FBR0MsS0FBSTtvQ0FBR2hCLFdBQVU7Ozs7Ozs4Q0FFekQsOERBQUNpQjtvQ0FBR2pCLFdBQVU7OENBQStHWixNQUFNOEIsS0FBSzs7Ozs7OzhDQUN4SSw4REFBQ0M7b0NBQUVuQixXQUFVOzhDQUEyRlosTUFBTWdDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFVMUgsOERBQUNyQjtnQkFBSXNCLElBQUc7Z0JBQWVDLFVBQVM7Z0JBQUtDLGVBQVk7Z0JBQU92QixXQUFVOzBCQUM5RCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBRVgsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FFWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDd0I7d0NBQUd4QixXQUFVO2tEQUFzRDs7Ozs7O2tEQUdwRSw4REFBQ3lCO3dDQUFPNUIsTUFBSzt3Q0FBU0csV0FBVTt3Q0FBNEtHLHFCQUFrQjs7MERBQzFOLDhEQUFDdUI7Z0RBQUlILGVBQVk7Z0RBQU92QixXQUFVO2dEQUFVMkIsTUFBSztnREFBZUMsU0FBUTtnREFBWUMsT0FBTTswREFBNkIsNEVBQUNDO29EQUFLQyxVQUFTO29EQUFVQyxHQUFFO29EQUFxTUMsVUFBUzs7Ozs7Ozs7Ozs7MERBQ2hXLDhEQUFDQztnREFBS2xDLFdBQVU7MERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJbEMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ21CO3dDQUFFbkIsV0FBVTtrREFBNkQ7Ozs7OztrREFHMUUsOERBQUNtQjt3Q0FBRW5CLFdBQVU7a0RBQTZEOzs7Ozs7Ozs7Ozs7MENBSzlFLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUN5Qjt3Q0FBT3RCLHFCQUFrQjt3Q0FBZU4sTUFBSzt3Q0FBU0csV0FBVTtrREFBdU47Ozs7OztrREFDeFIsOERBQUN5Qjt3Q0FBT3RCLHFCQUFrQjt3Q0FBZU4sTUFBSzt3Q0FBU0csV0FBVTtrREFBK1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeFo7S0FsRk1iO0FBb0ZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9nYm9va3MvQm94U3guanN4PzdmYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uICwgQW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5cbmNvbnN0IEJveFN4ID0gcHJvcHMgPT4ge1xuXG4gIGNvbnN0IGJveEFuaW1hdGU9e1xuICAgIG9mZnNjcmVlbjp7eDotMTAsIG9wYWNpdHk6MCxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgZHVyYXRpb246IDAuNX19LFxuICAgIG9uc2NyZWVuOntcbiAgICAgIHg6MCwgXG4gICAgICBvcGFjaXR5OjEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6XCJzcHJpbmdcIixcbiAgICAgICAgYm91bmNlOiAwLjQsXG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjV9XG4gICAgfX1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktc3RhcnQgbWwtWzEwdnddJz5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC0zIG1kOm10LTEwIG1kOm14LTEwIFwiPlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXtcIm9mZnNjcmVlblwifVxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17XCJvbnNjcmVlblwifVxuICAgICAgICAgICAgICBkYXRhLW1vZGFsLXRvZ2dsZT1cImRlZmF1bHRNb2RhbFwiXG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7b25jZTpmYWxzZSwgYW1vdW50OjAuNSwgbWFyZ2luOlsnLTE1MHB4IDBweCAwcHggMHB4J119fT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8bW90aW9uLmEgY2xhc3NOYW1lPXtgYmxvY2sgcC0wIG92ZXJmbG93LWhpZGRlbiBtYi04IHJvdW5kZWQteGwgYm9yZGVyIHNoYWRvdy1tZCBib3JkZXItZ3JheS03MDAgbWluLXctWzMwdnddIG1kOm1pbi13LVszMHZ3XSBtYXgtdy1bMzB2d10gbWluLWgtWzV2aF0gbWQ6bWluLWgtWzM1dmhdYH1cbiAgICAgICAgICAgICAgICB2YXJpYW50cz17Ym94QW5pbWF0ZX0gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNyB9fSBcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19PlxuXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL0xvZ01lZGlhL1wiKyAocHJvcHMuaW1ndXJsKX0gYWx0PVwiXCIgY2xhc3NOYW1lPSdvYmplY3QtZmlsbCcvPiBcblxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC1bLTcwJV0gcHgtNCB0ZXh0LVsxNXB4XSBzbTp0ZXh0LVsxN3B4XSBtZDp0ZXh0LVsyM3B4XSB4bDp0ZXh0LVsyNXB4XSBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZVwiPntwcm9wcy50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHB4LTQgdGV4dC1bMTBweF0gc206dGV4dC1bMTJweF0gbWQ6dGV4dC1bMThweF0geGw6dGV4dC1bMjBweF0gdGV4dC1ncmF5LTEwMFwiPntwcm9wcy50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtcIi9Mb2dNZWRpYS9cIisgKHByb3BzLmltZ3VybCl9IGFsdD1cIlwiIGNsYXNzTmFtZT0nYWJzb2x1dGUgbWItOCBtZDpwLTAgbWF4LXctWzMwdnddIG1pbi13LVszMHZ3XSBtZDptaW4tdy1bMzB2d10gbWluLWgtWzV2aF0gbWQ6bWluLWgtWzE1dmhdJy8+ICovfVxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuXG4gICAgICAgIHsvKiA8IS0tIE1haW4gbW9kYWwgLS0+ICovfVxuICAgICAgICA8ZGl2IGlkPVwiZGVmYXVsdE1vZGFsXCIgdGFiSW5kZXg9XCItMVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgaGlkZGVuIHctZnVsbCBwLTQgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIG1kOmluc2V0LTAgaC1tb2RhbCBtZDpoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbCBtYXgtdy0yeGwgbWQ6aC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgey8qIDwhLS0gTW9kYWwgY29udGVudCAtLT4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIE1vZGFsIGhlYWRlciAtLT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC00IGJvcmRlci1iIHJvdW5kZWQtdCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1zIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgdGV4dC1zbSBwLTEuNSBtbC1hdXRvIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiIGRhdGEtbW9kYWwtdG9nZ2xlPVwiZGVmYXVsdE1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DbG9zZSBtb2RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gTW9kYWwgYm9keSAtLT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpdGggbGVzcyB0aGFuIGEgbW9udGggdG8gZ28gYmVmb3JlIHRoZSBFdXJvcGVhbiBVbmlvbiBlbmFjdHMgbmV3IGNvbnN1bWVyIHByaXZhY3kgbGF3cyBmb3IgaXRzIGNpdGl6ZW5zLCBjb21wYW5pZXMgYXJvdW5kIHRoZSB3b3JsZCBhcmUgdXBkYXRpbmcgdGhlaXIgdGVybXMgb2Ygc2VydmljZSBhZ3JlZW1lbnRzIHRvIGNvbXBseS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgRXVyb3BlYW4gVW5pb27igJlzIEdlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24gKEcuRC5QLlIuKSBnb2VzIGludG8gZWZmZWN0IG9uIE1heSAyNSBhbmQgaXMgbWVhbnQgdG8gZW5zdXJlIGEgY29tbW9uIHNldCBvZiBkYXRhIHJpZ2h0cyBpbiB0aGUgRXVyb3BlYW4gVW5pb24uIEl0IHJlcXVpcmVzIG9yZ2FuaXphdGlvbnMgdG8gbm90aWZ5IHVzZXJzIGFzIHNvb24gYXMgcG9zc2libGUgb2YgaGlnaC1yaXNrIGRhdGEgYnJlYWNoZXMgdGhhdCBjb3VsZCBwZXJzb25hbGx5IGFmZmVjdCB0aGVtLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gTW9kYWwgZm9vdGVyIC0tPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTYgc3BhY2UteC0yIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWIgZGFyazpib3JkZXItZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1tb2RhbC10b2dnbGU9XCJkZWZhdWx0TW9kYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5JIGFjY2VwdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW1vZGFsLXRvZ2dsZT1cImRlZmF1bHRNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1zbSBmb250LW1lZGl1bSBweC01IHB5LTIuNSBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOnotMTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazpib3JkZXItZ3JheS01MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCI+RGVjbGluZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3hTeDsiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJNb2RhbCIsIkJveFN4IiwicHJvcHMiLCJib3hBbmltYXRlIiwib2Zmc2NyZWVuIiwieCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwib25zY3JlZW4iLCJ0eXBlIiwiYm91bmNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwiZGF0YS1tb2RhbC10b2dnbGUiLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJtYXJnaW4iLCJhIiwidmFyaWFudHMiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ3aGlsZVRhcCIsImltZyIsInNyYyIsImltZ3VybCIsImFsdCIsImg1IiwidGl0bGUiLCJwIiwidGV4dCIsImlkIiwidGFiSW5kZXgiLCJhcmlhLWhpZGRlbiIsImgzIiwiYnV0dG9uIiwic3ZnIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Logbooks/BoxSx.jsx\n"));

/***/ })

});