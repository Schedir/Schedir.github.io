"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/HomeSec.jsx":
/*!*************************************!*\
  !*** ./components/Home/HomeSec.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-motion */ \"./node_modules/react-scroll-motion/dist/index.js\");\n/* harmony import */ var react_scroll_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_motion__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Animator = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c1 = Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-scroll-motion */ \"./node_modules/react-scroll-motion/dist/index.js\", 23)).then(_c = (it)=>it.Animator), {\n    loadableGenerated: {\n        modules: [\n            \"../components/Home/HomeSec.jsx -> \" + \"react-scroll-motion\"\n        ]\n    },\n    ssr: false\n});\n_c2 = Animator;\nconst HomeSec = ()=>{\n    _s();\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();\n    const springscroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)(scrollYProgress, {\n        stiffness: 500,\n        damping: 150\n    });\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(springscroll, [\n        0,\n        .3\n    ], [\n        150,\n        0\n    ]);\n    const arrowdx = {\n        offscreen: {\n            x: -200,\n            opacity: 1,\n            transition: {\n                delay: .5,\n                ease: \"easeInOut\",\n                duration: .5\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                delay: 0,\n                ease: \"easeInOut\",\n                duration: .5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-schedir-blue z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-[calc(50vw-150px)] top-[40vh] \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h1, {\n                        style: {\n                            scale: (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(springscroll, [\n                                0,\n                                .5\n                            ], [\n                                1.5,\n                                0\n                            ])\n                        },\n                        className: \"text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] mt-[5vh] font-bold bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2\",\n                        children: \"HomePage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-schedir-blue\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-[200vh] items-center justify-center my-auto mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sticky top-[35vh] text-right mx-[20%]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                style: {\n                                    backgroundPositionY: (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(springscroll, [\n                                        0,\n                                        1\n                                    ], [\n                                        -5 + \"%\",\n                                        120 + \"%\"\n                                    ])\n                                },\n                                className: 'bg-auto bg-center bg-clip-text bg-[url(\"/media/sfondo_sfum_1.png\")] text-transparent',\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold\",\n                                    children: \"Un viaggio inclusivo alla scoperta di storia, cultura, natura\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        initial: \"offscreen\",\n                        whileInView: \"onscreen\",\n                        className: \"flex justify-end mx-[5vw] my-5 mt-[-15vh] z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"text-left inline-flex items-center \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {\n                                    variants: arrowdx,\n                                    className: \"mx-4 text-white\",\n                                    children: \" Scopri la rotta\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {\n                                    variants: arrowdx,\n                                    whileHover: {\n                                        scale: 1.2\n                                    },\n                                    whileTap: {\n                                        scale: 0.9\n                                    },\n                                    className: \"background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell rounded-full p-[1.9px] overlflow-clip\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        \"aria-hidden\": \"true\",\n                                        className: \"w-14 h-10 rounded-full \",\n                                        fill: \"currentColor\",\n                                        viewBox: \"0 0 20 20\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 160\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomeSec, \"L4jyKYrmxA04Y+vw1apRCzeapGk=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c3 = HomeSec;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeSec);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, 'Animator$dynamic$import(\"react-scroll-motion\").then');\n$RefreshReg$(_c1, \"Animator$dynamic\");\n$RefreshReg$(_c2, \"Animator\");\n$RefreshReg$(_c3, \"HomeSec\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvSG9tZVNlYy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFtQztBQUN3RDtBQUN4RDtBQUN3STtBQUUzSyxNQUFNdUIsV0FBV2hCLG1EQUFPQSxPQUN0Qix5S0FBNkIsQ0FBQ2lCLElBQUksTUFBQyxDQUFDQyxLQUFPQSxHQUFHRixRQUFROzs7Ozs7SUFDcERHLEtBQUssS0FBSzs7O0FBR2QsTUFBTUMsVUFBVSxJQUFNOztJQUVwQixNQUFNLEVBQUVDLGdCQUFlLEVBQUUsR0FBR3hCLHdEQUFTQTtJQUNyQyxNQUFNeUIsZUFBZXZCLHdEQUFTQSxDQUFDc0IsaUJBQWlCO1FBQUVFLFdBQVc7UUFBS0MsU0FBUztJQUFJO0lBQy9FLE1BQU1DLElBQUkzQiwyREFBWUEsQ0FBQ3dCLGNBQWM7UUFBQztRQUFHO0tBQUcsRUFBRTtRQUFDO1FBQUs7S0FBRTtJQUV0RCxNQUFNSSxVQUFVO1FBQ2RDLFdBQVU7WUFDUkMsR0FBRSxDQUFDO1lBQ0hDLFNBQVE7WUFDUkMsWUFBWTtnQkFDVkMsT0FBTztnQkFDUEMsTUFBTTtnQkFDTkMsVUFBVTtZQUFFO1FBQUM7UUFDakJDLFVBQVM7WUFDUE4sR0FBRTtZQUNGQyxTQUFRO1lBQ1JDLFlBQVk7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLFVBQVU7WUFBRTtRQUNoQjtJQUFDO0lBRUgscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBRWIsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDekMsb0RBQVM7d0JBQ1YyQyxPQUFPOzRCQUFDQyxPQUFNekMsMkRBQVlBLENBQUN3QixjQUFjO2dDQUFDO2dDQUFHOzZCQUFHLEVBQUU7Z0NBQUM7Z0NBQUs7NkJBQUU7d0JBQUM7d0JBQzNEYyxXQUFVO2tDQUs2RDs7Ozs7Ozs7Ozs7Ozs7OzswQkFJM0UsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDekMscURBQVU7Z0NBQ1QyQyxPQUFPO29DQUFDRSxxQkFBb0IxQywyREFBWUEsQ0FBQ3dCLGNBQWM7d0NBQUM7d0NBQUc7cUNBQUUsRUFBRTt3Q0FBQyxDQUFDLElBQUk7d0NBQUssTUFBTTtxQ0FBSTtnQ0FBQztnQ0FDckZjLFdBQVU7MENBQ04sNEVBQUNEO29DQUFJQyxXQUFVOzhDQUFxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVFoRyw4REFBQ3pDLHFEQUFVO3dCQUNQOEMsU0FBUzt3QkFDVEMsYUFBYTt3QkFDYk4sV0FBVTtrQ0FDTiw0RUFBQ087NEJBQ0NDLE1BQUs7NEJBQ0xSLFdBQVU7OzhDQUNSLDhEQUFDekMsc0RBQVc7b0NBQ1ZtRCxVQUFVcEI7b0NBQVNVLFdBQVU7OENBQWtCOzs7Ozs7OENBQy9DLDhEQUFDekMsc0RBQVc7b0NBQ1ptRCxVQUFVcEI7b0NBQ1ZxQixZQUFZO3dDQUFFUixPQUFPO29DQUFJO29DQUN6QlMsVUFBVTt3Q0FBRVQsT0FBTztvQ0FBSTtvQ0FDdkJILFdBQVU7OENBRVIsNEVBQUNhO3dDQUFJQyxlQUFZO3dDQUFPZCxXQUFVO3dDQUEwQmUsTUFBSzt3Q0FBZUMsU0FBUTt3Q0FBWUMsT0FBTTtrREFBNkIsNEVBQUNDOzRDQUFLQyxVQUFTOzRDQUFVQyxHQUFFOzRDQUEySUMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkI5VTtHQWpHTXJDOztRQUV3QnZCLG9EQUFTQTtRQUNoQkUsb0RBQVNBO1FBQ3BCRCx1REFBWUE7UUF5QkFBLHVEQUFZQTtRQWNRQSx1REFBWUE7OztNQTNDbERzQjtBQW1HTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvSG9tZVNlYy5qc3g/MzY0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uICwgQW5pbWF0ZVByZXNlbmNlLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSwgdXNlU3ByaW5nfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgU2Nyb2xsQ29udGFpbmVyLCBTY3JvbGxQYWdlLCBiYXRjaCwgRmFkZSwgRmFkZUluLCBGYWRlT3V0LCBNb3ZlLCBNb3ZlSW4sIE1vdmVPdXQsIFN0aWNreSwgU3RpY2t5SW4sIFN0aWNreU91dCwgWm9vbSwgWm9vbUluLCBab29tT3V0IH0gZnJvbSBcInJlYWN0LXNjcm9sbC1tb3Rpb25cIjtcblxuY29uc3QgQW5pbWF0b3IgPSBkeW5hbWljKFxuICBpbXBvcnQoXCJyZWFjdC1zY3JvbGwtbW90aW9uXCIpLnRoZW4oKGl0KSA9PiBpdC5BbmltYXRvciksXG4gIHsgc3NyOiBmYWxzZSB9XG4pO1xuXG5jb25zdCBIb21lU2VjID0gKCkgPT4ge1xuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoKTtcbiAgY29uc3Qgc3ByaW5nc2Nyb2xsID0gdXNlU3ByaW5nKHNjcm9sbFlQcm9ncmVzcywgeyBzdGlmZm5lc3M6IDUwMCwgZGFtcGluZzogMTUwIH0pXG4gIGNvbnN0IHkgPSB1c2VUcmFuc2Zvcm0oc3ByaW5nc2Nyb2xsLCBbMCwgLjNdLCBbMTUwLCAwXSlcblxuICBjb25zdCBhcnJvd2R4ID0ge1xuICAgIG9mZnNjcmVlbjp7XG4gICAgICB4Oi0yMDAsIFxuICAgICAgb3BhY2l0eToxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkZWxheTogLjUsXG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiAuNX19LFxuICAgIG9uc2NyZWVuOntcbiAgICAgIHg6MCwgXG4gICAgICBvcGFjaXR5OjEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICBkdXJhdGlvbjogLjV9XG4gICAgfX1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgYmctc2NoZWRpci1ibHVlIHotMTAnPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtW2NhbGMoNTB2dy0xNTBweCldIHRvcC1bNDB2aF0gJz5cbiAgICAgICAgICA8bW90aW9uLmgxIFxuICAgICAgICAgIHN0eWxlPXt7c2NhbGU6dXNlVHJhbnNmb3JtKHNwcmluZ3Njcm9sbCwgWzAsIC41XSwgWzEuNSwgMF0pfX0gXG4gICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXRyYW5zcGFyZW50IHRleHQtWzI1cHhdIHNtOnRleHQtWzQwcHhdIG1kOnRleHQtWzU1cHhdIGxnOnRleHQtWzcwcHhdIFxuICAgICAgICAgIG10LVs1dmhdXG4gICAgICAgICAgZm9udC1ib2xkXG4gICAgICAgICAgYmctY2xpcC10ZXh0IGJhY2tncm91bmQtYW5pbWF0ZVxuICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zY2hlZGlyLWdyZWVuIHZpYS1zY2hlZGlyLXJlZDIgdG8tc2NoZWRpci15ZWxsIFxuICAgICAgICAgIGhvdmVyOmZyb20tc2NoZWRpci15ZWxsIGhvdmVyOnRvLXNjaGVkaXItZ3JlZW4gaG92ZXI6dmlhLXNjaGVkaXItcmVkMic+SG9tZVBhZ2U8L21vdGlvbi5oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGJnLXNjaGVkaXItYmx1ZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMjAwdmhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS1hdXRvIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RpY2t5IHRvcC1bMzV2aF0gdGV4dC1yaWdodCBteC1bMjAlXSc+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZFBvc2l0aW9uWTp1c2VUcmFuc2Zvcm0oc3ByaW5nc2Nyb2xsLCBbMCwgMV0sIFstNSArICclJywgMTIwICsgJyUnXSl9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYXV0byBiZy1jZW50ZXIgYmctY2xpcC10ZXh0IGJnLVt1cmwoXCIvbWVkaWEvc2ZvbmRvX3NmdW1fMS5wbmdcIildIHRleHQtdHJhbnNwYXJlbnQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1bMjVweF0gc206dGV4dC1bNDBweF0gbWQ6dGV4dC1bNTVweF0gbGc6dGV4dC1bNjBweF0gZm9udC1ib2xkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVuIHZpYWdnaW8gaW5jbHVzaXZvIGFsbGEgc2NvcGVydGEgZGkgc3RvcmlhLCBjdWx0dXJhLCBuYXR1cmFcblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBpbml0aWFsPXtcIm9mZnNjcmVlblwifVxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e1wib25zY3JlZW5cIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWVuZCBteC1bNXZ3XSBteS01IG10LVstMTV2aF0gei0xMCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXthcnJvd2R4fSBjbGFzc05hbWU9J214LTQgdGV4dC13aGl0ZSc+IFNjb3ByaSBsYSByb3R0YTwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuIFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXthcnJvd2R4fVxuICAgICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fSBcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kLWFuaW1hdGUgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNjaGVkaXItZ3JlZW4gdmlhLXNjaGVkaXItcmVkMiB0by1zY2hlZGlyLXllbGwgXG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1mdWxsIHAtWzEuOXB4XSBvdmVybGZsb3ctY2xpcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctMTQgaC0xMCByb3VuZGVkLWZ1bGwgXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMC4yOTMgMy4yOTNhMSAxIDAgMDExLjQxNCAwbDYgNmExIDEgMCAwMTAgMS40MTRsLTYgNmExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNC41ODYgMTFIM2ExIDEgMCAxMTAtMmgxMS41ODZsLTQuMjkzLTQuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvbW90aW9uLmRpdj4gXG4gICAgICAgIHsvKiA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGluaXRpYWw9e1wib2Zmc2NyZWVuXCJ9XG4gICAgICAgICAgICB3aGlsZUluVmlldz17XCJvbnNjcmVlblwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktc3RhcnQgbXgtWzV2d10gbXktNSBtdC1bLTE1dmhdIHotNTAgJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtbGVmdCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm90YXRlLTkwIFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdteC00IHRleHQtd2hpdGUnPiBGaWxvc29maWEgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuIFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17YXJyb3dieH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19IFxuICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmFja2dyb3VuZC1hbmltYXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zY2hlZGlyLWdyZWVuIHZpYS1zY2hlZGlyLXJlZDIgdG8tc2NoZWRpci15ZWxsIFxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGwgcC1bMS45cHhdIG92ZXJsZmxvdy1jbGlwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctMTQgaC0xMCByb3VuZGVkLWZ1bGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjI5MyAzLjI5M2ExIDEgMCAwMTEuNDE0IDBsNiA2YTEgMSAwIDAxMCAxLjQxNGwtNiA2YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtNC4yOTMtNC4yOTNhMSAxIDAgMDEwLTEuNDE0elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvbW90aW9uLmRpdj4gICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVNlYyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsInVzZVNwcmluZyIsImR5bmFtaWMiLCJTY3JvbGxDb250YWluZXIiLCJTY3JvbGxQYWdlIiwiYmF0Y2giLCJGYWRlIiwiRmFkZUluIiwiRmFkZU91dCIsIk1vdmUiLCJNb3ZlSW4iLCJNb3ZlT3V0IiwiU3RpY2t5IiwiU3RpY2t5SW4iLCJTdGlja3lPdXQiLCJab29tIiwiWm9vbUluIiwiWm9vbU91dCIsIkFuaW1hdG9yIiwidGhlbiIsIml0Iiwic3NyIiwiSG9tZVNlYyIsInNjcm9sbFlQcm9ncmVzcyIsInNwcmluZ3Njcm9sbCIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ5IiwiYXJyb3dkeCIsIm9mZnNjcmVlbiIsIngiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZWFzZSIsImR1cmF0aW9uIiwib25zY3JlZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN0eWxlIiwic2NhbGUiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwiYnV0dG9uIiwidHlwZSIsInNwYW4iLCJ2YXJpYW50cyIsIndoaWxlSG92ZXIiLCJ3aGlsZVRhcCIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/HomeSec.jsx\n"));

/***/ })

});