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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst NavBar2 = ()=>{\n    _s();\n    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"transparent\");\n    const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#8BE8CB\");\n    const handleNav = ()=>{\n        setNav(!nav);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const changeColor = ()=>{\n            if (window.scrollY >= 850) {\n                setColor(\"#transparent\");\n                setTextColor(\"#E0E0E0\");\n            } else {\n                setColor(\"#transparent\");\n                setTextColor(\"#E0E0E0\");\n            }\n        };\n        window.addEventListener(\"scroll\", changeColor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute z-[100]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"Navbar\",\n            style: {\n                backgroundColor: \"\".concat(color)\n            },\n            className: \"fixed left-0 top-0 w-screen ease-in duration-300 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1500px] h-28 m-auto flex justify-between items-center p-4 mx-10 lg:mx-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        href: \"#\",\n                        className: \"flex items-center my-auto sm:mb-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/HomeMedia/posidonia_logo.png\",\n                                className: \"mr-1 h-20\",\n                                alt: \"Schedir Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"items-center p-2 font-bold text-xl md:text-3xl text-schedir-white hover:text-schedir-green\",\n                                children: \"posidonia\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex-row md:w-auto \",\n                        id: \"navbar-default\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-row p-3 mt-auto mr-auto bg-schedir-lavander/10 rounded-lg border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-schedir-lavander/50 lg:mr-20\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] rounded md:p-0\",\n                                            \"aria-current\": \"page\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/logbook\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0\",\n                                            children: \"Logbook\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/TheSchedir\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            href: \"#\",\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 \",\n                                            children: \"Schedir\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/JoinCrew\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 \",\n                                            children: \"Join the crew\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/components/NavBar2.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar2, \"HOQeb1aEQlK8CGanNtIDF4ETcnA=\");\n_c = NavBar2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar2);\nvar _c;\n$RefreshReg$(_c, \"NavBar2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhcjIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFDcEI7QUFFN0IsTUFBTUksVUFBVSxJQUFNOztJQUNsQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUNwQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1VLFlBQVksSUFBTTtRQUNwQkwsT0FBTyxDQUFDRDtJQUNaO0lBRUFILGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNVSxjQUFjLElBQU07WUFDdEIsSUFBR0MsT0FBT0MsT0FBTyxJQUFJLEtBQUk7Z0JBQ3JCTixTQUFTO2dCQUNURSxhQUFhO1lBQ2pCLE9BQ0s7Z0JBQ0RGLFNBQVM7Z0JBQ1RFLGFBQWE7WUFDakIsQ0FBQztRQUNMO1FBQ0FHLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO0lBQ3RDLEdBQUcsRUFBRTtJQUVQLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJRSxJQUFHO1lBQVNDLE9BQU87Z0JBQUNDLGlCQUFpQixHQUFTLE9BQU5iO1lBQU87WUFBR1UsV0FBVTtzQkFDN0QsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlLLE1BQUs7d0JBQUlKLFdBQVU7OzBDQUNwQiw4REFBQ0s7Z0NBQUlDLEtBQUk7Z0NBQWdDTixXQUFVO2dDQUFZTyxLQUFJOzs7Ozs7MENBQ25FLDhEQUFDQztnQ0FBSVIsV0FBVTswQ0FBNkY7Ozs7Ozs7Ozs7OztrQ0FJaEgsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUF1QkMsSUFBRztrQ0FDckMsNEVBQUNROzRCQUFHVCxXQUFVOzs4Q0FFViw4REFBQ1U7OENBQ0csNEVBQUN4QixrREFBSUE7d0NBQUNrQixNQUFLO2tEQUNQLDRFQUFDTDs0Q0FBSUMsV0FBVTs0Q0FBa0pXLGdCQUFhO3NEQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUc3TCw4REFBQ0Q7OENBQ0csNEVBQUN4QixrREFBSUE7d0NBQUNrQixNQUFLO2tEQUNQLDRFQUFDTDs0Q0FBS0MsV0FBVTtzREFBcUo7Ozs7Ozs7Ozs7Ozs7Ozs7OENBRzdLLDhEQUFDVTs4Q0FDRyw0RUFBQ3hCLGtEQUFJQTt3Q0FBQ2tCLE1BQUs7a0RBQ1AsNEVBQUNMOzRDQUFJSyxNQUFLOzRDQUFJSixXQUFVO3NEQUF1Sjs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHdkwsOERBQUNVOzhDQUNHLDRFQUFDeEIsa0RBQUlBO3dDQUFDa0IsTUFBSztrREFDUCw0RUFBQ0w7NENBQUlDLFdBQVU7c0RBQXVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRNO0dBakVNYjtLQUFBQTtBQW1FTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhcjIuanN4PzQ4MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBOYXZCYXIyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuYXYsIHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgndHJhbnNwYXJlbnQnKVxuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZSgnIzhCRThDQicpXG4gICAgXG4gICAgY29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xuICAgICAgICBzZXROYXYoIW5hdik7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gODUwKXtcbiAgICAgICAgICAgICAgICBzZXRDb2xvcignI3RyYW5zcGFyZW50Jyk7XG4gICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yKCcjRTBFMEUwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRDb2xvcignI3RyYW5zcGFyZW50Jyk7XG4gICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yKCcjRTBFMEUwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGFuZ2VDb2xvcik7XG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHotWzEwMF0nPlxuICAgICAgICA8ZGl2IGlkPSdOYXZiYXInIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcn1gfX0gY2xhc3NOYW1lPSdmaXhlZCBsZWZ0LTAgdG9wLTAgdy1zY3JlZW4gZWFzZS1pbiBkdXJhdGlvbi0zMDAgJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTUwMHB4XSBoLTI4IG0tYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC00IG14LTEwIGxnOm14LTUnPlxuICAgICAgICAgICAgICAgIDxkaXYgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBteS1hdXRvIHNtOm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvSG9tZU1lZGlhL3Bvc2lkb25pYV9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cIm1yLTEgaC0yMFwiIGFsdD1cIlNjaGVkaXIgTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPSdpdGVtcy1jZW50ZXIgcC0yIGZvbnQtYm9sZCB0ZXh0LXhsIG1kOnRleHQtM3hsIHRleHQtc2NoZWRpci13aGl0ZSBob3Zlcjp0ZXh0LXNjaGVkaXItZ3JlZW4nPnBvc2lkb25pYTwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgtcm93IG1kOnctYXV0byBcIiBpZD1cIm5hdmJhci1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHAtMyBtdC1hdXRvIG1yLWF1dG8gYmctc2NoZWRpci1sYXZhbmRlci8xMCByb3VuZGVkLWxnIGJvcmRlci0wIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBtZDptdC0wIG1kOnRleHQtc20gbWQ6Zm9udC1tZWRpdW0gbWQ6Ym9yZGVyLTAgbWQ6Ymctc2NoZWRpci1sYXZhbmRlci81MCBsZzptci0yMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNjaGVkaXItd2hpdGUgaG92ZXI6dGV4dC1zY2hlZGlyLXllbGwgaG92ZXI6c2NhbGUtMTA1IHB5LWF1dG8gcHgtYXV0byAgcHItMiB0ZXh0LVsxMXB4XSBzbTp0ZXh0LVsxNHB4XSBtZDp0ZXh0LVsxNnB4XSByb3VuZGVkIG1kOnAtMFwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5Ib21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2Jvb2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zY2hlZGlyLXdoaXRlIGhvdmVyOnRleHQtc2NoZWRpci15ZWxsIGhvdmVyOnNjYWxlLTEwNSBweS1hdXRvIHB4LWF1dG8gcHItMiB0ZXh0LVsxMXB4XSBzbTp0ZXh0LVsxNHB4XSBtZDp0ZXh0LVsxNnB4XSBtZDpib3JkZXItMCBtZDpwLTBcIj5Mb2dib29rPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1RoZVNjaGVkaXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc2NoZWRpci13aGl0ZSBob3Zlcjp0ZXh0LXNjaGVkaXIteWVsbCBob3ZlcjpzY2FsZS0xMDUgIHB5LWF1dG8gcHgtYXV0byBwci0yIHRleHQtWzExcHhdIHNtOnRleHQtWzE0cHhdIG1kOnRleHQtWzE2cHhdIG1kOmJvcmRlci0wIG1kOnAtMCBcIj5TY2hlZGlyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0pvaW5DcmV3XCI+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zY2hlZGlyLXdoaXRlIGhvdmVyOnRleHQtc2NoZWRpci15ZWxsIGhvdmVyOnNjYWxlLTEwNSAgcHktYXV0byBweC1hdXRvIHByLTIgdGV4dC1bMTFweF0gc206dGV4dC1bMTRweF0gbWQ6dGV4dC1bMTZweF0gbWQ6Ym9yZGVyLTAgbWQ6cC0wIFwiPkpvaW4gdGhlIGNyZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc2NoZWRpci13aGl0ZSBob3Zlcjp0ZXh0LXNjaGVkaXIteWVsbCBweS0yIHByLTQgcGwtMyB0ZXh0LVsxNnB4XSBtZDpib3JkZXItMCBtZDpwLTAgXCI+Sm9pbiB0aGUgY3JldzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyMjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJOYXZCYXIyIiwibmF2Iiwic2V0TmF2IiwiY29sb3IiLCJzZXRDb2xvciIsInRleHRDb2xvciIsInNldFRleHRDb2xvciIsImhhbmRsZU5hdiIsImNoYW5nZUNvbG9yIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImgxIiwidWwiLCJsaSIsImFyaWEtY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar2.jsx\n"));

/***/ }),

/***/ "./pages/logbook.js":
/*!**************************!*\
  !*** ./pages/logbook.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Logbooks_Timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Logbooks/Timeline */ \"./components/Logbooks/Timeline.jsx\");\n/* harmony import */ var _components_NavBar2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar2 */ \"./components/NavBar2.jsx\");\n\n\n\n\n\n\nconst Logbook = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Schedir\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logbooks_Timeline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzopastore/Desktop/GIT/Schedir.github.io/pages/logbook.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Logbook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logbook);\nvar _c;\n$RefreshReg$(_c, \"Logbook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dib29rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNJO0FBQzRDO0FBQ2xCO0FBQ1g7QUFFNUMsTUFBTVEsVUFBVSxJQUFNO0lBQ3BCLHFCQUNFLDhEQUFDTixxREFBVTs7MEJBQ1AsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNTO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ1QsMkRBQU9BOzs7OzswQkFDUiw4REFBQ0U7Z0JBQUlRLFdBQVU7MEJBQ2IsNEVBQUNYLHFFQUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtLQWRNRTtBQWdCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dib29rLmpzPzRkZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0sIHVzZVNwcmluZ30gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2Jvb2tzL1RpbWVsaW5lJztcbmltcG9ydCBOYXZCYXIyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyMic7XG5cbmNvbnN0IExvZ2Jvb2sgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TY2hlZGlyPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZCYXIyPjwvTmF2QmFyMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgICA8VGltZWxpbmUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2Jvb2s7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsInVzZVNwcmluZyIsIlRpbWVsaW5lIiwiTmF2QmFyMiIsIkxvZ2Jvb2siLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/logbook.js\n"));

/***/ })

});