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

/***/ "./components/Home/Homesec21.jsx":
/*!***************************************!*\
  !*** ./components/Home/Homesec21.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Homesec21 = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    function useParallax(value, distance) {\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(value, [\n            0,\n            1\n        ], [\n            -distance,\n            distance\n        ]);\n    }\n    _s1(useParallax, \"qXJXoNhB4Q97FzV6bHSnSFJpnfA=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n        ];\n    });\n    ;\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref,\n        offset: [\n            \"end end\",\n            \"start start\"\n        ]\n    });\n    const { scrollYProgress1  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)();\n    const springscroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollYProgress, {\n        stiffness: 500,\n        damping: 150\n    });\n    const springscroll1 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollYProgress1, {\n        stiffness: 500,\n        damping: 150\n    });\n    const y = useParallax(springscroll1, 200);\n    const boxAnimate = {\n        offscreen: {\n            x: -100,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        }\n    };\n    const txtAnimate = {\n        offscreen: {\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        },\n        onscreen: {\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 3.8\n            }\n        }\n    };\n    const boxAnimate2 = {\n        offscreen: {\n            x: 80,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"z-20 mt-[30vh] lg:mt-[60vh] mb-[70vh] \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end z-30 mb-[0vh] lg:h-screen mr-[7%]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"fixed top-[23vh] left-[10vw]\",\n                        style: {\n                            opacity: (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [\n                                0,\n                                .6,\n                                .7,\n                                1\n                            ], [\n                                0 + \"%\",\n                                100 + \"%\",\n                                100 + \"%\",\n                                0 + \"%\"\n                            ])\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {\n                                className: \"text-transparent bg-clip-text text-left background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold \",\n                                children: \"Sea of sharing cultures\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                                className: \"text-transparent bg-clip-text text-left background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] \",\n                                children: [\n                                    \"Every land reached is the beginning of many lives:  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 67\n                                    }, undefined),\n                                    \"the relationship between the new land and the foreigner  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 72\n                                    }, undefined),\n                                    \"is a mutual gift. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    \"New smells, new sounds, new flavors,\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 51\n                                    }, undefined),\n                                    \"new relationships, new stories.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 46\n                                    }, undefined),\n                                    \"Arriving by sea in a new land and feeling like a foreigner \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 74\n                                    }, undefined),\n                                    \"is the privilege that allows us to be free,\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 58\n                                    }, undefined),\n                                    \"to include and to transform ourselves into something new.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        style: {\n                            y\n                        },\n                        className: \"flex justify-end mx-[10vw] mt-[-20vh]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: 'container h-[60vh] w-[20vw] bg-clip-padding bg-[url(\"/HomeMedia/IMG_2.png\")] bg-bottom bg-cover'\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex justify-end mx-[10vw] mt-[-20vh] mr-[20vw]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                            style: {\n                                y\n                            },\n                            className: 'container h-[30vh] w-[20vw] bg-clip-padding bg-[url(\"/HomeMedia/IMG_3.png\")] bg-bottom bg-cover z-[10]'\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/Homesec21.jsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Homesec21, \"x476Pa/nGMJTZ1Ne1VYX3GVn8Tw=\", true, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n    ];\n});\n_c = Homesec21;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homesec21);\nvar _c;\n$RefreshReg$(_c, \"Homesec21\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs7Ozs7Ozs7Ozs7a0NBR25CLDhEQUFDL0IscURBQVU7d0JBQ1QrQixXQUFVO2tDQUNSLDRFQUFDL0IscURBQVU7NEJBQ1RnQyxPQUFPO2dDQUFDZjs0QkFBQzs0QkFDVGMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQjtHQTNHTTNCOztRQU8wQkYsb0RBQVNBO1FBSVJBLG9EQUFTQTtRQUVqQkQsb0RBQVNBO1FBQ1JBLG9EQUFTQTtRQXVEUEUsdURBQVlBOzs7S0FyRWxDQztBQTZHTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvSG9tZXNlYzIxLmpzeD9lZDQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gLCB1c2VTcHJpbmcsIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBIb21lc2VjMjEgPSAoKSA9PiB7ICAgIFxuICBcbiAgICBmdW5jdGlvbiB1c2VQYXJhbGxheCh2YWx1ZSwgZGlzdGFuY2UpIHtcbiAgICAgIHJldHVybiB1c2VUcmFuc2Zvcm0odmFsdWUsIFswLCAxXSwgWy1kaXN0YW5jZSwgZGlzdGFuY2VdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7XG4gICAgdGFyZ2V0OiByZWYsXG4gICAgb2Zmc2V0OiBbXCJlbmQgZW5kXCIsIFwic3RhcnQgc3RhcnRcIl1cbiAgICB9KTtcbiAgICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzczEgfSA9IHVzZVNjcm9sbCgpO1xuICAgIFxuICAgIGNvbnN0IHNwcmluZ3Njcm9sbCA9IHVzZVNwcmluZyhzY3JvbGxZUHJvZ3Jlc3MsIHsgc3RpZmZuZXNzOiA1MDAsIGRhbXBpbmc6IDE1MCB9KVxuICAgIGNvbnN0IHNwcmluZ3Njcm9sbDEgPSB1c2VTcHJpbmcoc2Nyb2xsWVByb2dyZXNzMSwgeyBzdGlmZm5lc3M6IDUwMCwgZGFtcGluZzogMTUwIH0pXG5cbiAgICBjb25zdCB5ID0gdXNlUGFyYWxsYXgoc3ByaW5nc2Nyb2xsMSwgMjAwKTtcblxuICAgIGNvbnN0IGJveEFuaW1hdGU9e1xuICAgIG9mZnNjcmVlbjp7eDotMTAwLCBvcGFjaXR5OjAsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjh9fSxcbiAgICBvbnNjcmVlbjp7XG4gICAgICB4OjAsIFxuICAgICAgb3BhY2l0eToxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOlwic3ByaW5nXCIsXG4gICAgICAgIGJvdW5jZTogMC40LFxuICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICBkdXJhdGlvbjogMC44fVxuICAgIH19XG5cbiAgICBjb25zdCB0eHRBbmltYXRlPXtcbiAgICAgIG9mZnNjcmVlbjp7b3BhY2l0eTowLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC44fX0sXG4gICAgICBvbnNjcmVlbjp7XG4gICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIHR5cGU6XCJzcHJpbmdcIixcbiAgICAgICAgICBib3VuY2U6IDAuNCxcbiAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAzLjh9XG4gICAgICB9fVxuXG4gICAgICBjb25zdCBib3hBbmltYXRlMj17XG4gICAgICAgIG9mZnNjcmVlbjp7eDo4MCwgb3BhY2l0eTowLFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44fX0sXG4gICAgICAgIG9uc2NyZWVuOntcbiAgICAgICAgICB4OjAsIFxuICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOlwic3ByaW5nXCIsXG4gICAgICAgICAgICBib3VuY2U6IDAuNCxcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44fVxuICAgICAgICB9fVxuICAgICAgXG4gICAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9J3otMjAgbXQtWzMwdmhdIGxnOm10LVs2MHZoXSBtYi1bNzB2aF0gJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1lbmQgei0zMCBtYi1bMHZoXSBsZzpoLXNjcmVlbiBtci1bNyVdJz5cbiAgICAgICAgICA8bW90aW9uLmRpdiAgXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZpeGVkIHRvcC1bMjN2aF0gbGVmdC1bMTB2d10nXG4gICAgICAgICAgICBzdHlsZT17e29wYWNpdHk6dXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgXG4gICAgICAgICAgICAgIFswLCAuNiwuNywgMV0sXG4gICAgICAgICAgICAgIFswICsgJyUnLCAxMDAgKyAnJScsMTAwICsgJyUnLCAwICsgJyUnXSl9fSA+XG4gICAgICAgICAgICAgIDxtb3Rpb24uaDIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgdGV4dC1sZWZ0IGJhY2tncm91bmQtYW5pbWF0ZSBiZy1ncmFkaWVudC10by1yIGZyb20tc2NoZWRpci1ncmVlbiB2aWEtc2NoZWRpci1yZWQyIHRvLXNjaGVkaXIteWVsbCB0ZXh0LVsyNXB4XSBzbTp0ZXh0LVs0MHB4XSBtZDp0ZXh0LVs1NXB4XSBsZzp0ZXh0LVs3MHB4XSBmb250LWJvbGQgJz5cbiAgICAgICAgICAgICAgU2VhIG9mIHNoYXJpbmcgY3VsdHVyZXM8L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHRleHQtbGVmdCAgYmFja2dyb3VuZC1hbmltYXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zY2hlZGlyLWdyZWVuIHZpYS1zY2hlZGlyLXJlZDIgdG8tc2NoZWRpci15ZWxsIHRleHQtWzE1cHhdIHNtOnRleHQtWzE1cHhdIG1kOnRleHQtWzIwcHhdIGxnOnRleHQtWzI3cHhdICc+XG4gICAgICAgICAgICAgIEV2ZXJ5IGxhbmQgcmVhY2hlZCBpcyB0aGUgYmVnaW5uaW5nIG9mIG1hbnkgbGl2ZXM6ICA8YnIvPlxuICAgICAgICAgICAgICB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIG5ldyBsYW5kIGFuZCB0aGUgZm9yZWlnbmVyICA8YnIvPiBcbiAgICAgICAgICAgICAgaXMgYSBtdXR1YWwgZ2lmdC4gPGJyLz5cbiAgICAgICAgICAgICAgTmV3IHNtZWxscywgbmV3IHNvdW5kcywgbmV3IGZsYXZvcnMsPGJyLz5cbiAgICAgICAgICAgICAgbmV3IHJlbGF0aW9uc2hpcHMsIG5ldyBzdG9yaWVzLjxici8+XG4gICAgICAgICAgICAgIEFycml2aW5nIGJ5IHNlYSBpbiBhIG5ldyBsYW5kIGFuZCBmZWVsaW5nIGxpa2UgYSBmb3JlaWduZXIgPGJyLz5cbiAgICAgICAgICAgICAgaXMgdGhlIHByaXZpbGVnZSB0aGF0IGFsbG93cyB1cyB0byBiZSBmcmVlLDxici8+XG4gICAgICAgICAgICAgIHRvIGluY2x1ZGUgYW5kIHRvIHRyYW5zZm9ybSBvdXJzZWx2ZXMgaW50byBzb21ldGhpbmcgbmV3LlxuICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIHN0eWxlPXt7eX19IFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZW5kIG14LVsxMHZ3XSBtdC1bLTIwdmhdJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBoLVs2MHZoXSB3LVsyMHZ3XSBiZy1jbGlwLXBhZGRpbmcgYmctW3VybChcIi9Ib21lTWVkaWEvSU1HXzIucG5nXCIpXSBiZy1ib3R0b20gYmctY292ZXInPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWVuZCBteC1bMTB2d10gbXQtWy0yMHZoXSBtci1bMjB2d10nPlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICBzdHlsZT17e3l9fSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhaW5lciBoLVszMHZoXSB3LVsyMHZ3XSBiZy1jbGlwLXBhZGRpbmcgYmctW3VybChcIi9Ib21lTWVkaWEvSU1HXzMucG5nXCIpXSBiZy1ib3R0b20gYmctY292ZXIgei1bMTBdJz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lc2VjMjEiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VTcHJpbmciLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJIb21lc2VjMjEiLCJ1c2VQYXJhbGxheCIsInZhbHVlIiwiZGlzdGFuY2UiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzY3JvbGxZUHJvZ3Jlc3MxIiwic3ByaW5nc2Nyb2xsIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInNwcmluZ3Njcm9sbDEiLCJ5IiwiYm94QW5pbWF0ZSIsIm9mZnNjcmVlbiIsIngiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsIm9uc2NyZWVuIiwidHlwZSIsImJvdW5jZSIsInR4dEFuaW1hdGUiLCJib3hBbmltYXRlMiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaDIiLCJzcGFuIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/Homesec21.jsx\n"));

/***/ })

});