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

/***/ "./components/Home/HomeSec3.jsx":
/*!**************************************!*\
  !*** ./components/Home/HomeSec3.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst HomeSec3 = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    function useParallax(value, distance) {\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(value, [\n            0,\n            1\n        ], [\n            -distance,\n            distance\n        ]);\n    }\n    _s1(useParallax, \"qXJXoNhB4Q97FzV6bHSnSFJpnfA=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n        ];\n    });\n    ;\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref,\n        offset: [\n            \"end end\",\n            \"start start\"\n        ]\n    });\n    const springscroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollYProgress, {\n        stiffness: 500,\n        damping: 150\n    });\n    const y = useParallax(springscroll, -800);\n    const boxAnimate = {\n        offscreen: {\n            x: -100,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        }\n    };\n    const txtAnimate = {\n        offscreen: {\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        },\n        onscreen: {\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 3.8\n            }\n        }\n    };\n    const boxAnimate2 = {\n        offscreen: {\n            x: 80,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.8\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: ref,\n            className: \"z-20 mt-[0vh] mb-[100vh] \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end z-30 mb-[10vh] mr-[7%]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"fixed top-[50vw] lg:top-[23vh] lg:left-[50vw]\",\n                        style: {\n                            opacity: (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [\n                                0,\n                                .4,\n                                .6,\n                                1\n                            ], [\n                                0 + \"%\",\n                                100 + \"%\",\n                                100 + \"%\",\n                                0 + \"%\"\n                            ])\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {\n                                className: \"text-transparent bg-clip-text text-left background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold \",\n                                children: \"Being foreigners\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                                className: \"text-transparent bg-clip-text text-left background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] \",\n                                children: [\n                                    \"Every land reached is the beginning of many lives:  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 73\n                                    }, undefined),\n                                    \"the relationship between the new land and the foreigner  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 78\n                                    }, undefined),\n                                    \"is a mutual gift. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 39\n                                    }, undefined),\n                                    \"New smells, new sounds, new flavors,\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 57\n                                    }, undefined),\n                                    \"new relationships, new stories.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 52\n                                    }, undefined),\n                                    \"Arriving by sea in a new land and feeling like a foreigner \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 80\n                                    }, undefined),\n                                    \"is the privilege that allows us to be free,\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 64\n                                    }, undefined),\n                                    \"to include and to transform ourselves into something new.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" top-[80vh] lg:top-[40vh] mx-20 -z-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        style: {\n                            backgroundPositionX: (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [\n                                0,\n                                1\n                            ], [\n                                0 + \"%\",\n                                40 + \"%\"\n                            ])\n                        },\n                        className: 'mt-[-20vh] container h-[30vh] w-[40vw] lg:h-[70vh] lg:w-[40vw] bg-clip-padding bg-[url(\"/HomeMedia/IMG_5.png\")] bg-center z-[10]'\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 19\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(HomeSec3, \"iB42V34M2HrG5kLvDgb8FQX8k6k=\", true, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n    ];\n});\n_c = HomeSec3;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeSec3);\nvar _c;\n$RefreshReg$(_c, \"HomeSec3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBU0E7UUFJaEJELG9EQUFTQTtRQXVEQUUsdURBQVlBO1FBc0JFQSx1REFBWUE7OztLQXhGdERDO0FBd0dOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS9Ib21lU2VjMy5qc3g/MzgwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uICwgdXNlU3ByaW5nLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybX0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgSG9tZVNlYzMgPSAoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiB1c2VQYXJhbGxheCh2YWx1ZSwgZGlzdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHVzZVRyYW5zZm9ybSh2YWx1ZSwgWzAsIDFdLCBbLWRpc3RhbmNlLCBkaXN0YW5jZV0pO1xuICAgICAgfTtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuICAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgICAgdGFyZ2V0OiByZWYsXG4gICAgICBvZmZzZXQ6IFtcImVuZCBlbmRcIiwgXCJzdGFydCBzdGFydFwiXVxuICAgIH0pO1xuICAgIGNvbnN0IHNwcmluZ3Njcm9sbCA9IHVzZVNwcmluZyhzY3JvbGxZUHJvZ3Jlc3MsIHsgc3RpZmZuZXNzOiA1MDAsIGRhbXBpbmc6IDE1MCB9KVxuXG4gICAgY29uc3QgeSA9IHVzZVBhcmFsbGF4KHNwcmluZ3Njcm9sbCwgLTgwMCk7XG5cbiAgICBjb25zdCBib3hBbmltYXRlPXtcbiAgICAgIG9mZnNjcmVlbjp7eDotMTAwLCBvcGFjaXR5OjAsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjh9fSxcbiAgICAgIG9uc2NyZWVuOntcbiAgICAgICAgeDowLCBcbiAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgdHlwZTpcInNwcmluZ1wiLFxuICAgICAgICAgIGJvdW5jZTogMC40LFxuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOH1cbiAgICAgIH19XG5cbiAgICAgIGNvbnN0IHR4dEFuaW1hdGU9e1xuICAgICAgICBvZmZzY3JlZW46e29wYWNpdHk6MCxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuOH19LFxuICAgICAgICBvbnNjcmVlbjp7XG4gICAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6XCJzcHJpbmdcIixcbiAgICAgICAgICAgIGJvdW5jZTogMC40LFxuICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzLjh9XG4gICAgICAgIH19XG5cbiAgICAgICAgY29uc3QgYm94QW5pbWF0ZTI9e1xuICAgICAgICAgIG9mZnNjcmVlbjp7eDo4MCwgb3BhY2l0eTowLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMC44fX0sXG4gICAgICAgICAgb25zY3JlZW46e1xuICAgICAgICAgICAgeDowLCBcbiAgICAgICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgdHlwZTpcInNwcmluZ1wiLFxuICAgICAgICAgICAgICBib3VuY2U6IDAuNCxcbiAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuOH1cbiAgICAgICAgICB9fVxuICAgICAgICBcbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT0nei0yMCBtdC1bMHZoXSBtYi1bMTAwdmhdICc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZW5kIHotMzAgbWItWzEwdmhdIG1yLVs3JV0nPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2ICBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZml4ZWQgdG9wLVs1MHZ3XSBsZzp0b3AtWzIzdmhdIGxnOmxlZnQtWzUwdnddJ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OnVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFxuICAgICAgICAgICAgICAgICAgICBbMCwgLjQsLjYsIDFdLFxuICAgICAgICAgICAgICAgICAgICBbMCArICclJywgMTAwICsgJyUnLDEwMCArICclJywgMCArICclJ10pfX0gPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmgyIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHRleHQtbGVmdCBiYWNrZ3JvdW5kLWFuaW1hdGUgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNjaGVkaXItZ3JlZW4gdmlhLXNjaGVkaXItcmVkMiB0by1zY2hlZGlyLXllbGwgdGV4dC1bMjVweF0gc206dGV4dC1bNDBweF0gbWQ6dGV4dC1bNTVweF0gbGc6dGV4dC1bNzBweF0gZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgIEJlaW5nIGZvcmVpZ25lcnM8L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHRleHQtbGVmdCAgYmFja2dyb3VuZC1hbmltYXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zY2hlZGlyLWdyZWVuIHZpYS1zY2hlZGlyLXJlZDIgdG8tc2NoZWRpci15ZWxsIHRleHQtWzE1cHhdIHNtOnRleHQtWzE1cHhdIG1kOnRleHQtWzIwcHhdIGxnOnRleHQtWzI3cHhdICc+XG4gICAgICAgICAgICAgICAgICAgIEV2ZXJ5IGxhbmQgcmVhY2hlZCBpcyB0aGUgYmVnaW5uaW5nIG9mIG1hbnkgbGl2ZXM6ICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIG5ldyBsYW5kIGFuZCB0aGUgZm9yZWlnbmVyICA8YnIvPiBcbiAgICAgICAgICAgICAgICAgICAgaXMgYSBtdXR1YWwgZ2lmdC4gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgTmV3IHNtZWxscywgbmV3IHNvdW5kcywgbmV3IGZsYXZvcnMsPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgbmV3IHJlbGF0aW9uc2hpcHMsIG5ldyBzdG9yaWVzLjxici8+XG4gICAgICAgICAgICAgICAgICAgIEFycml2aW5nIGJ5IHNlYSBpbiBhIG5ldyBsYW5kIGFuZCBmZWVsaW5nIGxpa2UgYSBmb3JlaWduZXIgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgaXMgdGhlIHByaXZpbGVnZSB0aGF0IGFsbG93cyB1cyB0byBiZSBmcmVlLDxici8+XG4gICAgICAgICAgICAgICAgICAgIHRvIGluY2x1ZGUgYW5kIHRvIHRyYW5zZm9ybSBvdXJzZWx2ZXMgaW50byBzb21ldGhpbmcgbmV3LlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB0b3AtWzgwdmhdIGxnOnRvcC1bNDB2aF0gbXgtMjAgLXotMjAnPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kUG9zaXRpb25YOnVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFxuICAgICAgICAgICAgICAgICAgICAgIFswLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICBbMCArICclJywgNDAgKyAnJSddKX19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtWy0yMHZoXSBjb250YWluZXIgaC1bMzB2aF0gdy1bNDB2d10gXG4gICAgICAgICAgICAgICAgICAgIGxnOmgtWzcwdmhdIGxnOnctWzQwdnddIGJnLWNsaXAtcGFkZGluZyBiZy1bdXJsKFwiL0hvbWVNZWRpYS9JTUdfNS5wbmdcIildIGJnLWNlbnRlciB6LVsxMF0nPlxuICAgICAgICAgICAgICAgICAgICB7LyogPG1vdGlvbi5pbWcgXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLW1kJ1xuICAgICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7b25jZTpmYWxzZSwgYW1vdW50OjAuNSwgbWFyZ2luOlsnLTE1MHB4IDBweCAwcHggMHB4J119fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL0hvbWVNZWRpYS9JTUdfMS5wbmcnIHdpZHRoPVwiNTAlXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVNlYzMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VTcHJpbmciLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJIb21lU2VjMyIsInVzZVBhcmFsbGF4IiwidmFsdWUiLCJkaXN0YW5jZSIsInJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsInNwcmluZ3Njcm9sbCIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ5IiwiYm94QW5pbWF0ZSIsIm9mZnNjcmVlbiIsIngiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsIm9uc2NyZWVuIiwidHlwZSIsImJvdW5jZSIsInR4dEFuaW1hdGUiLCJib3hBbmltYXRlMiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaDIiLCJzcGFuIiwiYnIiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home/HomeSec3.jsx\n"));

/***/ })

});