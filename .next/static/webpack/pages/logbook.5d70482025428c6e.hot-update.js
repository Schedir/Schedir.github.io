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

/***/ "./components/NavBar2.jsx":
/*!********************************!*\
  !*** ./components/NavBar2.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst NavBar2 = ()=>{\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"transparent\");\n    const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#8BE8CB\");\n    const handleNav = ()=>{\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const changeColor = ()=>{\n            if (window.scrollY >= 850) {\n                setColor(\"#transparent\");\n                setTextColor(\"#E0E0E0\");\n            } else {\n                setColor(\"#transparent\");\n                setTextColor(\"#E0E0E0\");\n            }\n        };\n        window.addEventListener(\"scroll\", changeColor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute z-[100]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"Navbar\",\n            style: {\n                backgroundColor: \"\".concat(color)\n            },\n            className: \"fixed left-0 top-0 w-screen ease-in duration-300 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1500px] h-28 m-auto flex justify-between items-center p-4 mx-10 lg:mx-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        href: \"#\",\n                        className: \"flex items-center my-auto ml-20 sm:mb-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/HomeMedia/posidonia_logo.png\",\n                            className: \"h-28 -mt-10\",\n                            alt: \"Schedir Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex-row md:w-auto \",\n                        id: \"navbar-default\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-row p-3 mt-auto mr-auto bg-schedir-lavander/10 rounded-lg border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-schedir-lavander/50 lg:mr-20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] rounded md:p-0\",\n                                            \"aria-current\": \"page\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/logbook\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0\",\n                                            children: \"Logbook\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/TheSchedir\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            href: \"#\",\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 \",\n                                            children: \"Schedir\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/JoinCrew\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 \",\n                                            children: \"Join the crew\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar2, \"HOQeb1aEQlK8CGanNtIDF4ETcnA=\");\n_c = NavBar2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar2);\nvar _c;\n$RefreshReg$(_c, \"NavBar2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhcjIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFDcEI7QUFFN0IsTUFBTUksVUFBVSxJQUFNOztJQUNsQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUNwQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1VLFlBQVksSUFBTTtRQUNwQkwsT0FBTyxDQUFDRDtJQUNaO0lBRUFILGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNVSxjQUFjLElBQU07WUFDdEIsSUFBR0MsT0FBT0MsT0FBTyxJQUFJLEtBQUk7Z0JBQ3JCTixTQUFTO2dCQUNURSxhQUFhO1lBQ2pCLE9BQ0s7Z0JBQ0RGLFNBQVM7Z0JBQ1RFLGFBQWE7WUFDakIsQ0FBQztRQUNMO1FBQ0FHLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO0lBQ3RDLEdBQUcsRUFBRTtJQUVQLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJRSxJQUFHO1lBQVNDLE9BQU87Z0JBQUNDLGlCQUFpQixHQUFTLE9BQU5iO1lBQU87WUFBR1UsV0FBVTtzQkFDN0QsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlLLE1BQUs7d0JBQUlKLFdBQVU7a0NBQ3BCLDRFQUFDSzs0QkFBSUMsS0FBSTs0QkFBZ0NOLFdBQVU7NEJBQWNPLEtBQUk7Ozs7Ozs7Ozs7O2tDQUl6RSw4REFBQ1I7d0JBQUlDLFdBQVU7d0JBQXVCQyxJQUFHO2tDQUNyQyw0RUFBQ087NEJBQUdSLFdBQVU7OzhDQUVWLDhEQUFDUzs4Q0FDRyw0RUFBQ3ZCLGtEQUFJQTt3Q0FBQ2tCLE1BQUs7a0RBQ1AsNEVBQUNMOzRDQUFJQyxXQUFVOzRDQUFrSlUsZ0JBQWE7c0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OENBRzdMLDhEQUFDRDs4Q0FDRyw0RUFBQ3ZCLGtEQUFJQTt3Q0FBQ2tCLE1BQUs7a0RBQ1AsNEVBQUNMOzRDQUFLQyxXQUFVO3NEQUFxSjs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHN0ssOERBQUNTOzhDQUNHLDRFQUFDdkIsa0RBQUlBO3dDQUFDa0IsTUFBSztrREFDUCw0RUFBQ0w7NENBQUlLLE1BQUs7NENBQUlKLFdBQVU7c0RBQXVKOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUd2TCw4REFBQ1M7OENBQ0csNEVBQUN2QixrREFBSUE7d0NBQUNrQixNQUFLO2tEQUNQLDRFQUFDTDs0Q0FBSUMsV0FBVTtzREFBdUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZdE07R0FoRU1iO0tBQUFBO0FBa0VOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyMi5qc3g/NDgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE5hdkJhcjIgPSAoKSA9PiB7XG4gICAgY29uc3QgW25hdiwgc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCd0cmFuc3BhcmVudCcpXG4gICAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IHVzZVN0YXRlKCcjOEJFOENCJylcbiAgICBcbiAgICBjb25zdCBoYW5kbGVOYXYgPSAoKSA9PiB7XG4gICAgICAgIHNldE5hdighbmF2KTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbmdlQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA4NTApe1xuICAgICAgICAgICAgICAgIHNldENvbG9yKCcjdHJhbnNwYXJlbnQnKTtcbiAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3IoJyNFMEUwRTAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldENvbG9yKCcjdHJhbnNwYXJlbnQnKTtcbiAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3IoJyNFMEUwRTAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZUNvbG9yKTtcbiAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgei1bMTAwXSc+XG4gICAgICAgIDxkaXYgaWQ9J05hdmJhcicgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfWB9fSBjbGFzc05hbWU9J2ZpeGVkIGxlZnQtMCB0b3AtMCB3LXNjcmVlbiBlYXNlLWluIGR1cmF0aW9uLTMwMCAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LVsxNTAwcHhdIGgtMjggbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTQgbXgtMTAgbGc6bXgtNSc+XG4gICAgICAgICAgICAgICAgPGRpdiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LWF1dG8gbWwtMjAgc206bWItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9Ib21lTWVkaWEvcG9zaWRvbmlhX2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaC0yOCAtbXQtMTBcIiBhbHQ9XCJTY2hlZGlyIExvZ29cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4LXJvdyBtZDp3LWF1dG8gXCIgaWQ9XCJuYXZiYXItZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwLTMgbXQtYXV0byBtci1hdXRvIGJnLXNjaGVkaXItbGF2YW5kZXIvMTAgcm91bmRlZC1sZyBib3JkZXItMCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggbWQ6bXQtMCBtZDp0ZXh0LXNtIG1kOmZvbnQtbWVkaXVtIG1kOmJvcmRlci0wIG1kOmJnLXNjaGVkaXItbGF2YW5kZXIvNTAgbGc6bXItMjBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zY2hlZGlyLXdoaXRlIGhvdmVyOnRleHQtc2NoZWRpci15ZWxsIGhvdmVyOnNjYWxlLTEwNSBweS1hdXRvIHB4LWF1dG8gIHByLTIgdGV4dC1bMTFweF0gc206dGV4dC1bMTRweF0gbWQ6dGV4dC1bMTZweF0gcm91bmRlZCBtZDpwLTBcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+SG9tZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dib29rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc2NoZWRpci13aGl0ZSBob3Zlcjp0ZXh0LXNjaGVkaXIteWVsbCBob3ZlcjpzY2FsZS0xMDUgcHktYXV0byBweC1hdXRvIHByLTIgdGV4dC1bMTFweF0gc206dGV4dC1bMTRweF0gbWQ6dGV4dC1bMTZweF0gbWQ6Ym9yZGVyLTAgbWQ6cC0wXCI+TG9nYm9vazwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9UaGVTY2hlZGlyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNjaGVkaXItd2hpdGUgaG92ZXI6dGV4dC1zY2hlZGlyLXllbGwgaG92ZXI6c2NhbGUtMTA1ICBweS1hdXRvIHB4LWF1dG8gcHItMiB0ZXh0LVsxMXB4XSBzbTp0ZXh0LVsxNHB4XSBtZDp0ZXh0LVsxNnB4XSBtZDpib3JkZXItMCBtZDpwLTAgXCI+U2NoZWRpcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Kb2luQ3Jld1wiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc2NoZWRpci13aGl0ZSBob3Zlcjp0ZXh0LXNjaGVkaXIteWVsbCBob3ZlcjpzY2FsZS0xMDUgIHB5LWF1dG8gcHgtYXV0byBwci0yIHRleHQtWzExcHhdIHNtOnRleHQtWzE0cHhdIG1kOnRleHQtWzE2cHhdIG1kOmJvcmRlci0wIG1kOnAtMCBcIj5Kb2luIHRoZSBjcmV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNjaGVkaXItd2hpdGUgaG92ZXI6dGV4dC1zY2hlZGlyLXllbGwgcHktMiBwci00IHBsLTMgdGV4dC1bMTZweF0gbWQ6Ym9yZGVyLTAgbWQ6cC0wIFwiPkpvaW4gdGhlIGNyZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTmF2QmFyMiIsIm5hdiIsInNldE5hdiIsImNvbG9yIiwic2V0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJzZXRUZXh0Q29sb3IiLCJoYW5kbGVOYXYiLCJjaGFuZ2VDb2xvciIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ1bCIsImxpIiwiYXJpYS1jdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar2.jsx\n"));

/***/ })

});