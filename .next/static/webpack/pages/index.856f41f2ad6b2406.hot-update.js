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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst HomeSec3 = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    function useParallax(value, distance) {\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(value, [\n            0,\n            1\n        ], [\n            -distance,\n            distance\n        ]);\n    }\n    _s1(useParallax, \"qXJXoNhB4Q97FzV6bHSnSFJpnfA=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n        ];\n    });\n    ;\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref\n    });\n    const springscroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollYProgress, {\n        stiffness: 500,\n        damping: 150\n    });\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(springscroll, [\n        0,\n        .3\n    ], [\n        150,\n        0\n    ]);\n    const boxAnimate = {\n        offscreen: {\n            x: 10,\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        },\n        onscreen: {\n            x: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative bg-schedir-blue\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \" h-[200vh] items-center justify-center my-auto mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-[35vh] text-right mx-[20%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                            style: {\n                                backgroundPositionY: (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(springscroll, [\n                                    0,\n                                    1\n                                ], [\n                                    -10 + \"%\",\n                                    110 + \"%\"\n                                ])\n                            },\n                            className: 'bg-auto bg-center bg-clip-text bg-[url(\"/media/sfondosfumatura2.png\")] text-transparent',\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold \",\n                                    children: \"The breathe of balance\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]\",\n                                    children: [\n                                        \"Muoversi grazie al vento \\xe8 un viaggio verso le nostre radici,\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 80\n                                        }, undefined),\n                                        \" \\xe8 un legame intimo con una Natura divina, \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 128\n                                        }, undefined),\n                                        \"misteriosa ed affascinante,\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 160\n                                        }, undefined),\n                                        \" quella stessa Natura da cui tutto si trasforma e continua a vivere, \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 234\n                                        }, undefined),\n                                        \"noi compresi.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 252\n                                        }, undefined),\n                                        \"Tutto \\xe8 in sintonia quando la barca danza insieme al vento.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \" max-w-lg maxh-lg mx-[10vw] pt-[40vh]\",\n                        style: {\n                            y\n                        },\n                        initial: \"offscreen\",\n                        whileInView: \"onscreen\",\n                        viewport: {\n                            once: false,\n                            amount: 0.5,\n                            margin: [\n                                \"-150px 0px 0px 0px\"\n                            ]\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                            variants: boxAnimate,\n                            src: \"/media/IMG_1367.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomeSec3, \"BhX3xheKhwcIR5y03MVOPes2buk=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n    ];\n});\n_c = HomeSec3;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeSec3);\nvar _c;\n$RefreshReg$(_c, \"HomeSec3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvSG9tZVNlYzMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEyQztBQUNnRDtBQUUzRixNQUFNUSxXQUFXLElBQU07OztJQUVuQixTQUFTQyxZQUFZQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTs7UUFDbEMsT0FBT0wsMkRBQVlBLENBQUNJLE9BQU87WUFBQztZQUFHO1NBQUUsRUFBRTtZQUFDLENBQUNDO1lBQVVBO1NBQVM7SUFDMUQ7UUFGT0Y7O1lBQ0VILHVEQUFZQTs7OztJQUd2QixNQUFNTSxNQUFNWCw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3ZCLE1BQU0sRUFBRVksZ0JBQWUsRUFBRSxHQUFHUix3REFBU0EsQ0FBQztRQUFFUyxRQUFRRjtJQUFJO0lBQ3BELE1BQU1HLGVBQWVSLHdEQUFTQSxDQUFDTSxpQkFBaUI7UUFBRUcsV0FBVztRQUFLQyxTQUFTO0lBQUk7SUFDL0UsTUFBTUMsSUFBSVosMkRBQVlBLENBQUNTLGNBQWM7UUFBQztRQUFHO0tBQUcsRUFBRTtRQUFDO1FBQUs7S0FBRTtJQUN0RCxNQUFNSSxhQUFXO1FBQ2ZDLFdBQVU7WUFBQ0MsR0FBRTtZQUFJQyxTQUFRO1lBQ3ZCQyxZQUFZO2dCQUNWQyxNQUFNO2dCQUNOQyxVQUFVO1lBQUc7UUFBQztRQUNsQkMsVUFBUztZQUNQTCxHQUFFO1lBQ0ZDLFNBQVE7WUFDUkMsWUFBWTtnQkFDVkksTUFBSztnQkFDTEMsUUFBUTtnQkFDUkosTUFBTTtnQkFDTkMsVUFBVTtZQUFHO1FBQ2pCO0lBQUM7SUFDTCxxQkFDRSw4REFBQ3JCLDBEQUFlQTtrQkFDZCw0RUFBQ3lCO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJakIsS0FBS0E7Z0JBQUtrQixXQUFVOztrQ0FDdkIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDM0IscURBQVU7NEJBQ1Q0QixPQUFPO2dDQUFDQyxxQkFBb0IxQiwyREFBWUEsQ0FBQ1MsY0FBYztvQ0FBQztvQ0FBRztpQ0FBRSxFQUFFO29DQUFDLENBQUMsS0FBSztvQ0FBSyxNQUFNO2lDQUFJOzRCQUFDOzRCQUN0RmUsV0FBVTs7OENBQ1IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFzRTs7Ozs7OzhDQUdyRiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3dDQUEyRDtzREFDYiw4REFBQ0c7Ozs7O3dDQUFJO3NEQUEyQyw4REFBQ0E7Ozs7O3dDQUFJO3NEQUEyQiw4REFBQ0E7Ozs7O3dDQUFJO3NEQUFxRSw4REFBQ0E7Ozs7O3dDQUFJO3NEQUFhLDhEQUFDQTs7Ozs7d0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNdFAsOERBQUM5QixxREFBVTt3QkFBQzJCLFdBQVU7d0JBQXdDQyxPQUFPOzRCQUFDYjt3QkFBQzt3QkFDL0RnQixTQUFTO3dCQUNUQyxhQUFhO3dCQUNiQyxVQUFVOzRCQUFDQyxNQUFLLEtBQUs7NEJBQUVDLFFBQU87NEJBQUtDLFFBQU87Z0NBQUM7NkJBQXFCO3dCQUFBO2tDQUN0RSw0RUFBQ3BDLHFEQUFVOzRCQUFDc0MsVUFBVXRCOzRCQUFZdUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxEO0dBcERNbEM7O1FBTzBCSCxvREFBU0E7UUFDaEJFLG9EQUFTQTtRQUNwQkQsdURBQVlBO1FBcUJrQkEsdURBQVlBOzs7S0E5QmxERTtBQXNETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvSG9tZVNlYzMuanN4PzM4MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFjdCwgdXNlUmVmLCBtYXRyaXh9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uICwgQW5pbWF0ZVByZXNlbmNlLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSwgdXNlU3ByaW5nfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBIb21lU2VjMyA9ICgpID0+IHtcbiAgXG4gICAgZnVuY3Rpb24gdXNlUGFyYWxsYXgodmFsdWUsIGRpc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB1c2VUcmFuc2Zvcm0odmFsdWUsIFswLCAxXSwgWy1kaXN0YW5jZSwgZGlzdGFuY2VdKTtcbiAgICAgIH07XG5cbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7IHRhcmdldDogcmVmIH0pO1xuICAgIGNvbnN0IHNwcmluZ3Njcm9sbCA9IHVzZVNwcmluZyhzY3JvbGxZUHJvZ3Jlc3MsIHsgc3RpZmZuZXNzOiA1MDAsIGRhbXBpbmc6IDE1MCB9KVxuICAgIGNvbnN0IHkgPSB1c2VUcmFuc2Zvcm0oc3ByaW5nc2Nyb2xsLCBbMCwgLjNdLCBbMTUwLCAwXSlcbiAgICBjb25zdCBib3hBbmltYXRlPXtcbiAgICAgIG9mZnNjcmVlbjp7eDoxMCwgb3BhY2l0eTowLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC41fX0sXG4gICAgICBvbnNjcmVlbjp7XG4gICAgICAgIHg6MCwgXG4gICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIHR5cGU6XCJzcHJpbmdcIixcbiAgICAgICAgICBib3VuY2U6IDAuNCxcbiAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjV9XG4gICAgICB9fVxuICByZXR1cm4gKFxuICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgYmctc2NoZWRpci1ibHVlJz5cbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiIGgtWzIwMHZoXSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktYXV0byBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0aWNreSB0b3AtWzM1dmhdIHRleHQtcmlnaHQgbXgtWzIwJV0nPlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRQb3NpdGlvblk6dXNlVHJhbnNmb3JtKHNwcmluZ3Njcm9sbCwgWzAsIDFdLCBbLTEwICsgJyUnLCAxMTAgKyAnJSddKX19IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYXV0byBiZy1jZW50ZXIgYmctY2xpcC10ZXh0IGJnLVt1cmwoXCIvbWVkaWEvc2ZvbmRvc2Z1bWF0dXJhMi5wbmdcIildIHRleHQtdHJhbnNwYXJlbnQnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtWzI1cHhdIHNtOnRleHQtWzQwcHhdIG1kOnRleHQtWzU1cHhdIGxnOnRleHQtWzcwcHhdIGZvbnQtYm9sZCAnPlxuICAgICAgICAgICAgICAgICAgICBUaGUgYnJlYXRoZSBvZiBiYWxhbmNlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LVsxNXB4XSBzbTp0ZXh0LVsxNXB4XSBtZDp0ZXh0LVsyMHB4XSBsZzp0ZXh0LVsyM3B4XSc+XG4gICAgICAgICAgICAgICAgICBNdW92ZXJzaSBncmF6aWUgYWwgdmVudG8gw6ggdW4gdmlhZ2dpbyB2ZXJzbyBsZSBub3N0cmUgcmFkaWNpLDxici8+IMOoIHVuIGxlZ2FtZSBpbnRpbW8gY29uIHVuYSBOYXR1cmEgZGl2aW5hLCA8YnIvPm1pc3Rlcmlvc2EgZWQgYWZmYXNjaW5hbnRlLDxici8+IHF1ZWxsYSBzdGVzc2EgTmF0dXJhIGRhIGN1aSB0dXR0byBzaSB0cmFzZm9ybWEgZSBjb250aW51YSBhIHZpdmVyZSwgPGJyLz5ub2kgY29tcHJlc2kuPGJyLz5cbiAgICAgICAgICAgICAgICAgIFR1dHRvIMOoIGluIHNpbnRvbmlhIHF1YW5kbyBsYSBiYXJjYSBkYW56YSBpbnNpZW1lIGFsIHZlbnRvLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nIG1heC13LWxnIG1heGgtbGcgbXgtWzEwdnddIHB0LVs0MHZoXScgc3R5bGU9e3t5fX1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e1wib2Zmc2NyZWVuXCJ9XG4gICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17XCJvbnNjcmVlblwifVxuICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3tvbmNlOmZhbHNlLCBhbW91bnQ6MC41LCBtYXJnaW46WyctMTUwcHggMHB4IDBweCAwcHgnXX19PlxuICAgICAgICAgICAgPG1vdGlvbi5pbWcgdmFyaWFudHM9e2JveEFuaW1hdGV9IHNyYz0nL21lZGlhL0lNR18xMzY3LnBuZycvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lU2VjMyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIm1hdHJpeCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsInVzZVNwcmluZyIsIkhvbWVTZWMzIiwidXNlUGFyYWxsYXgiLCJ2YWx1ZSIsImRpc3RhbmNlIiwicmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwic3ByaW5nc2Nyb2xsIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInkiLCJib3hBbmltYXRlIiwib2Zmc2NyZWVuIiwieCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwib25zY3JlZW4iLCJ0eXBlIiwiYm91bmNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYnIiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJtYXJnaW4iLCJpbWciLCJ2YXJpYW50cyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/HomeSec3.jsx\n"));

/***/ })

});