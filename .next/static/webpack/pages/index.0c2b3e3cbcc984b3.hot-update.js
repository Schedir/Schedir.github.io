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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst HomeSec3 = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    function useParallax(value, distance) {\n        _s1();\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(value, [\n            0,\n            1\n        ], [\n            -distance,\n            distance\n        ]);\n    }\n    _s1(useParallax, \"qXJXoNhB4Q97FzV6bHSnSFJpnfA=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n        ];\n    });\n    ;\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        target: ref\n    });\n    const springscroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollYProgress, {\n        stiffness: 500,\n        damping: 150\n    });\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(springscroll, [\n        0,\n        .3\n    ], [\n        150,\n        0\n    ]);\n    const boxAnimate = {\n        offscreen: {\n            opacity: 0,\n            transition: {\n                ease: \"easeInOut\",\n                duration: 1\n            }\n        },\n        onscreen: {\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                bounce: 0.4,\n                ease: \"easeInOut\",\n                duration: 0.5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative bg-schedir-blue\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \" h-[200vh] items-center justify-center my-auto mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-[35vh] text-right mx-[10%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                            style: {\n                                backgroundPositionY: (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(springscroll, [\n                                    0,\n                                    1\n                                ], [\n                                    -10 + \"%\",\n                                    110 + \"%\"\n                                ])\n                            },\n                            className: 'bg-auto bg-center bg-clip-text bg-[url(\"/media/sfondosfumatura2.png\")] text-transparent',\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold \",\n                                    children: \"The breathe of balance\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]\",\n                                    children: [\n                                        \"Muoversi grazie al vento \\xe8 un viaggio verso le nostre radici,\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 80\n                                        }, undefined),\n                                        \" \\xe8 un legame intimo con una Natura divina, \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 128\n                                        }, undefined),\n                                        \"misteriosa ed affascinante,\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 160\n                                        }, undefined),\n                                        \" quella stessa Natura da cui tutto si trasforma e continua a vivere, \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 234\n                                        }, undefined),\n                                        \"noi compresi.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 252\n                                        }, undefined),\n                                        \"Tutto \\xe8 in sintonia quando la barca danza insieme al vento.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \" max-w-lg maxh-lg mx-[10vw] pt-[40vh]\",\n                        style: {\n                            y\n                        },\n                        initial: \"offscreen\",\n                        whileInView: \"onscreen\",\n                        viewport: {\n                            once: false,\n                            amount: 0.5,\n                            margin: [\n                                \"-150px 0px 0px 0px\"\n                            ]\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                            variants: boxAnimate,\n                            src: \"/media/IMG_1367.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/Home/HomeSec3.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomeSec3, \"BhX3xheKhwcIR5y03MVOPes2buk=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n    ];\n});\n_c = HomeSec3;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeSec3);\nvar _c;\n$RefreshReg$(_c, \"HomeSec3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvSG9tZVNlYzMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEyQztBQUNnRDtBQUUzRixNQUFNUSxXQUFXLElBQU07OztJQUVuQixTQUFTQyxZQUFZQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTs7UUFDbEMsT0FBT0wsMkRBQVlBLENBQUNJLE9BQU87WUFBQztZQUFHO1NBQUUsRUFBRTtZQUFDLENBQUNDO1lBQVVBO1NBQVM7SUFDMUQ7UUFGT0Y7O1lBQ0VILHVEQUFZQTs7OztJQUd2QixNQUFNTSxNQUFNWCw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3ZCLE1BQU0sRUFBRVksZ0JBQWUsRUFBRSxHQUFHUix3REFBU0EsQ0FBQztRQUFFUyxRQUFRRjtJQUFJO0lBQ3BELE1BQU1HLGVBQWVSLHdEQUFTQSxDQUFDTSxpQkFBaUI7UUFBRUcsV0FBVztRQUFLQyxTQUFTO0lBQUk7SUFDL0UsTUFBTUMsSUFBSVosMkRBQVlBLENBQUNTLGNBQWM7UUFBQztRQUFHO0tBQUcsRUFBRTtRQUFDO1FBQUs7S0FBRTtJQUN0RCxNQUFNSSxhQUFXO1FBQ2ZDLFdBQVU7WUFBQ0MsU0FBUTtZQUNqQkMsWUFBWTtnQkFDVkMsTUFBTTtnQkFDTkMsVUFBVTtZQUFDO1FBQUM7UUFDaEJDLFVBQVM7WUFDUEosU0FBUTtZQUNSQyxZQUFZO2dCQUNWSSxNQUFLO2dCQUNMQyxRQUFRO2dCQUNSSixNQUFNO2dCQUNOQyxVQUFVO1lBQUc7UUFDakI7SUFBQztJQUNMLHFCQUNFLDhEQUFDcEIsMERBQWVBO2tCQUNkLDRFQUFDd0I7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUloQixLQUFLQTtnQkFBS2lCLFdBQVU7O2tDQUN2Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUMxQixxREFBVTs0QkFDVDJCLE9BQU87Z0NBQUNDLHFCQUFvQnpCLDJEQUFZQSxDQUFDUyxjQUFjO29DQUFDO29DQUFHO2lDQUFFLEVBQUU7b0NBQUMsQ0FBQyxLQUFLO29DQUFLLE1BQU07aUNBQUk7NEJBQUM7NEJBQ3RGYyxXQUFVOzs4Q0FDUiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQXNFOzs7Ozs7OENBR3JGLDhEQUFDRDtvQ0FBSUMsV0FBVTs7d0NBQTJEO3NEQUNiLDhEQUFDRzs7Ozs7d0NBQUk7c0RBQTJDLDhEQUFDQTs7Ozs7d0NBQUk7c0RBQTJCLDhEQUFDQTs7Ozs7d0NBQUk7c0RBQXFFLDhEQUFDQTs7Ozs7d0NBQUk7c0RBQWEsOERBQUNBOzs7Ozt3Q0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU10UCw4REFBQzdCLHFEQUFVO3dCQUFDMEIsV0FBVTt3QkFBd0NDLE9BQU87NEJBQUNaO3dCQUFDO3dCQUMvRGUsU0FBUzt3QkFDVEMsYUFBYTt3QkFDYkMsVUFBVTs0QkFBQ0MsTUFBSyxLQUFLOzRCQUFFQyxRQUFPOzRCQUFLQyxRQUFPO2dDQUFDOzZCQUFxQjt3QkFBQTtrQ0FDdEUsNEVBQUNuQyxxREFBVTs0QkFBQ3FDLFVBQVVyQjs0QkFBWXNCLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRDtHQW5ETWpDOztRQU8wQkgsb0RBQVNBO1FBQ2hCRSxvREFBU0E7UUFDcEJELHVEQUFZQTtRQW9Ca0JBLHVEQUFZQTs7O0tBN0JsREU7QUFxRE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0hvbWVTZWMzLmpzeD8zODBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3QsIHVzZVJlZiwgbWF0cml4fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiAsIEFuaW1hdGVQcmVzZW5jZSwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0sIHVzZVNwcmluZ30gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgSG9tZVNlYzMgPSAoKSA9PiB7XG4gIFxuICAgIGZ1bmN0aW9uIHVzZVBhcmFsbGF4KHZhbHVlLCBkaXN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdXNlVHJhbnNmb3JtKHZhbHVlLCBbMCwgMV0sIFstZGlzdGFuY2UsIGRpc3RhbmNlXSk7XG4gICAgICB9O1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoeyB0YXJnZXQ6IHJlZiB9KTtcbiAgICBjb25zdCBzcHJpbmdzY3JvbGwgPSB1c2VTcHJpbmcoc2Nyb2xsWVByb2dyZXNzLCB7IHN0aWZmbmVzczogNTAwLCBkYW1waW5nOiAxNTAgfSlcbiAgICBjb25zdCB5ID0gdXNlVHJhbnNmb3JtKHNwcmluZ3Njcm9sbCwgWzAsIC4zXSwgWzE1MCwgMF0pXG4gICAgY29uc3QgYm94QW5pbWF0ZT17XG4gICAgICBvZmZzY3JlZW46e29wYWNpdHk6MCxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgZHVyYXRpb246IDF9fSxcbiAgICAgIG9uc2NyZWVuOntcbiAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgdHlwZTpcInNwcmluZ1wiLFxuICAgICAgICAgIGJvdW5jZTogMC40LFxuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuNX1cbiAgICAgIH19XG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBiZy1zY2hlZGlyLWJsdWUnPlxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCIgaC1bMjAwdmhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS1hdXRvIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RpY2t5IHRvcC1bMzV2aF0gdGV4dC1yaWdodCBteC1bMTAlXSc+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZFBvc2l0aW9uWTp1c2VUcmFuc2Zvcm0oc3ByaW5nc2Nyb2xsLCBbMCwgMV0sIFstMTAgKyAnJScsIDExMCArICclJ10pfX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1hdXRvIGJnLWNlbnRlciBiZy1jbGlwLXRleHQgYmctW3VybChcIi9tZWRpYS9zZm9uZG9zZnVtYXR1cmEyLnBuZ1wiKV0gdGV4dC10cmFuc3BhcmVudCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1bMjVweF0gc206dGV4dC1bNDBweF0gbWQ6dGV4dC1bNTVweF0gbGc6dGV4dC1bNzBweF0gZm9udC1ib2xkICc+XG4gICAgICAgICAgICAgICAgICAgIFRoZSBicmVhdGhlIG9mIGJhbGFuY2VcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtWzE1cHhdIHNtOnRleHQtWzE1cHhdIG1kOnRleHQtWzIwcHhdIGxnOnRleHQtWzIzcHhdJz5cbiAgICAgICAgICAgICAgICAgIE11b3ZlcnNpIGdyYXppZSBhbCB2ZW50byDDqCB1biB2aWFnZ2lvIHZlcnNvIGxlIG5vc3RyZSByYWRpY2ksPGJyLz4gw6ggdW4gbGVnYW1lIGludGltbyBjb24gdW5hIE5hdHVyYSBkaXZpbmEsIDxici8+bWlzdGVyaW9zYSBlZCBhZmZhc2NpbmFudGUsPGJyLz4gcXVlbGxhIHN0ZXNzYSBOYXR1cmEgZGEgY3VpIHR1dHRvIHNpIHRyYXNmb3JtYSBlIGNvbnRpbnVhIGEgdml2ZXJlLCA8YnIvPm5vaSBjb21wcmVzaS48YnIvPlxuICAgICAgICAgICAgICAgICAgVHV0dG8gw6ggaW4gc2ludG9uaWEgcXVhbmRvIGxhIGJhcmNhIGRhbnphIGluc2llbWUgYWwgdmVudG8uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPScgbWF4LXctbGcgbWF4aC1sZyBteC1bMTB2d10gcHQtWzQwdmhdJyBzdHlsZT17e3l9fVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17XCJvZmZzY3JlZW5cIn1cbiAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXtcIm9uc2NyZWVuXCJ9XG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydD17e29uY2U6ZmFsc2UsIGFtb3VudDowLjUsIG1hcmdpbjpbJy0xNTBweCAwcHggMHB4IDBweCddfX0+XG4gICAgICAgICAgICA8bW90aW9uLmltZyB2YXJpYW50cz17Ym94QW5pbWF0ZX0gc3JjPScvbWVkaWEvSU1HXzEzNjcucG5nJy8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVTZWMzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwibWF0cml4IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwidXNlU3ByaW5nIiwiSG9tZVNlYzMiLCJ1c2VQYXJhbGxheCIsInZhbHVlIiwiZGlzdGFuY2UiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJzcHJpbmdzY3JvbGwiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwieSIsImJveEFuaW1hdGUiLCJvZmZzY3JlZW4iLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsIm9uc2NyZWVuIiwidHlwZSIsImJvdW5jZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJyIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwibWFyZ2luIiwiaW1nIiwidmFyaWFudHMiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/HomeSec3.jsx\n"));

/***/ })

});