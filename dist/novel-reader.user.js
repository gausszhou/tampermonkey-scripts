// ==UserScript==
// @name         Novel Reader
// @version      0.0.10
// @description  小说阅读器，特点是仿起点风格的网站样式，支持UU看书，笔趣阁，书趣阁，81中文网
// @author       gausszhou@qq.com
// @namespace    gausszhou
// @license      MIT
// @grant        none
// @run-at       document-start
// @icon         https://www.gausszhou.top/favicon.ico
// @match      *://www.uukanshu.com/*.html
// @match      *://www.shuquge.com/txt/*/*.html
// @match      *://www.biquge.lu/book/*/*.html
// @match      *://www.biqugeu.net/*/*.html
// @match      *://www.ibiquge.net/*/*.html
// @match      *://www.230book.net/book/*/*.html
// @match      *://www.69shu.com/txt/*/*
// @match      *://www.81zw.cc/book/*/*.html
// @match      *://www.81zw.com/book/*/*.html
// @match      *://www.81zw.me/book/*/*.html
// @match      *://www.81zw.net/book/*/*.html
// @match      *://www.kehuan.net.cn/book/*/*.html
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(991);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(27), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(920), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(466), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{display:none}body.read iframe,body.read .weizhi,body.read .weizhi+div,body.read .at-share-btn,body.read .sao_mobile_box,body.read .addthis-animated,body.read .addthis-smartlayers,body.read .addthis-smartlayers-desktop{display:none !important}body.read{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat;font-size:18px;font-family:\"Microsoft YaHei\", PingFangSC-Regular, HelveticaNeue-Light, \"Helvetica Neue Light\", sans-serif}body.read ._bread{box-sizing:border-box;width:800px;margin:1em auto 1em;display:flex;align-items:center;font:12px/22px PingFangSC-Regular, \"-apple-system\", Simsun}body.read ._bread .separate{color:rgba(0,0,0,0.4)}body.read ._bread a{margin:0 0.5em !important;padding:0 !important;background-color:transparent !important}body.read ._bread a,body.read ._bread b{padding:0;font-weight:400;font-size:12px;color:#1a1a1a !important}body.read ._content{box-sizing:border-box;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat;width:800px;margin:0 auto 1em;padding:2em;color:#262626;font-weight:500;text-indent:2em;text-align:left;border:1px solid #d8d8d8;position:relative}body.read ._content .book-mark{position:absolute;top:0px;right:48px;width:24px;height:40px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-repeat:no-repeat;background-position:-228px -143.5px;background-size:340px}body.read ._content br{content:\"\";margin:0.5em 0;display:block;font-size:150%}body.read ._content p{word-wrap:wrap;word-break:break-all;margin-top:0.5em;line-height:1.8;text-align:justify}body.read ._content ._content_title{display:flex;align-items:center;text-indent:0;padding:0 0 0.5em;margin:0 0 0.5em;font:24px/32px PingFangSC-Regular, HelveticaNeue-Light, \"Helvetica Neue Light\", \"Microsoft YaHei\", sans-serif}body.read ._content ._content_title span{font-size:12px;padding:0 1em;margin:0}body.read ._nav{box-sizing:border-box;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat;width:800px;margin:1em auto 1em;height:70px;display:flex;align-items:center;border:1px solid #d8d8d8}body.read ._nav a,body.read ._nav span{flex:1;height:100%;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#333;font:18px/70px PingFangSC-Regular, HelveticaNeue-Light, \"Helvetica Neue Light\", \"Microsoft YaHei\", sans-serif}body.read ._nav span{color:#ccc}body.read ._nav .separate{width:1px;height:32px;border-right:1px solid #d8d8d8}body.read ._nav a:hover{background:rgba(0,0,0,0.03)}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 609:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 991:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 62:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 793:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 173:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 36:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 464:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 920:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==";

/***/ }),

/***/ 27:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=";

/***/ }),

/***/ 466:
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(62);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(36);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(793);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(892);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(173);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(464);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss
var styles = __webpack_require__(265);
;// CONCATENATED MODULE: ./src/assets/styles/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const assets_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/ui.js
var dq = document.querySelector.bind(document);

function UI() {
  this.init();
}

UI.prototype.init = function () {
  console.log("欢迎使用小说整治插件");
};

UI.prototype.mounted = function () {
  this.body = document.body;
  this.new_bread_el = document.createElement("div");
  this.new_bread_el.className = "_bread";
  this.new_content_el = document.createElement("div");
  this.new_content_el.className = "_content";
  this.new_title_el = document.createElement("div");
  this.new_title_el.className = "_content_title";
  this.new_nav_el = document.createElement("div");
  this.new_nav_el.className = "_nav";
}; // 网站策略判定


UI.prototype.judge = function () {
  try {
    if (dq(".bread_728x90")) {
      this.kehuanNet();
      return false;
    }

    if (dq(".zhengwan_top")) {
      this.uukanshu();
      return false;
    }

    if (dq(".page_chapter")) {
      this.shuquge();
      return false;
    }

    if (dq(".modbg")) {
      this.shuba();
      return false;
    }

    this.biquge();
  } catch (error) {
    alert(error);
  }
}; // 各个网站的策略


UI.prototype.kehuanNet = function () {
  this.body.classList.add("kehuan");
  this.old_bread_el = dq("#container .topnav h2");
  this.old_title_el = dq("#container > h1");
  this.old_content_el = dq("#container .text");
  this.nav_prev = dq(".next a:nth-child(1)");
  this.nav_menu = dq(".next a:nth-child(2)");
  this.nav_next = dq(".next a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

UI.prototype.uukanshu = function () {
  this.body.classList.add("uukanshu");
  this.old_bread_el = dq(".srcbox");
  this.old_title_el = dq(".h1title #timu");
  this.old_content_el = dq("#contentbox");
  this.nav_prev = dq(".fanye #prev");
  this.nav_menu = dq(".fanye #htmlmulu");
  this.nav_next = dq(".fanye #next");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

UI.prototype.shuquge = function () {
  this.body.classList.add("shuquge");
  this.old_bread_el = dq(".path .p");
  this.old_title_el = dq(".content h1"); // title

  this.old_content_el = dq("#content");
  this.old_nav_el = dq(".page_chapter ul"); // btns

  this.nav_prev = dq(".page_chapter li:nth-child(1) a");
  this.nav_menu = dq(".page_chapter li:nth-child(2) a");
  this.nav_next = dq(".page_chapter li:nth-child(3) a");
  this.nav_space = dq(".page_chapter li:nth-child(4) a");
  this.ads = [".header", "div.box_con > div.bookname div.lm", ".info > .link", ".footer"];
  this.process();
};

UI.prototype.biquge = function () {
  this.body.classList.add("biquge");
  this.old_title_el = dq(".content_read .bookname h1"); // title

  this.old_content_el = dq(".content_read #content");
  this.old_nav_el = dq(".page_chapter ul"); // btns

  this.nav_prev = dq(".bottem2 a:nth-child(1)");
  this.nav_menu = dq(".bottem2 a:nth-child(2)");
  this.nav_next = dq(".bottem2 a:nth-child(3)");
  this.nav_space = dq(".bottem2 a:nth-child(4)");
  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

UI.prototype.shuba = function () {
  this.body.classList.add("shuba");
  this.old_bread_el = dq(".bread");
  this.old_title_el = dq("h1.hide720"); // title

  this.old_content_el = dq(".txtnav");
  this.old_nav_el = dq(".page1"); // btns

  this.nav_prev = dq(".page1 a:nth-child(1)");
  this.nav_menu = dq(".page1 a:nth-child(3)");
  this.nav_next = dq(".page1 a:nth-child(4)");
  this.ads = [".hide720"];
  this.process();
}; // 开始处理


UI.prototype.process = function () {
  if (this.old_content_el) {
    this.mode = "read";
    this.processRead();
    this.body.classList.add("read");
  }

  this.processRemoveAD();
}; // 处理页面


UI.prototype.processRead = function () {
  this.processReadBread();
  this.processReadContent();
  this.processReadNav();
  this.body.innerHTML = "";
  this.body.appendChild(this.new_bread_el);
  this.body.appendChild(this.new_content_el);
  this.body.appendChild(this.new_nav_el);
  var p_list = document.querySelectorAll("._content > p");
  p_list.forEach(function (p) {
    p.innerHTML = p.innerHTML.trim();
  });
}; // 去除广告


UI.prototype.processRemoveAD = function () {
  if (this.ads.length) {
    console.log(this.ads.length);
    this.ads.forEach(function (selector) {
      var ad = dq(selector);
      console.log(ad);
      if (ad) ad.parentElement.removeChild(ad);
    });
  }
}; // 处理面包屑


UI.prototype.processReadBread = function () {
  var _this = this;

  this.breadCrumbs = this.old_bread_el && this.old_bread_el.getElementsByTagName("a");

  if (this.breadCrumbs && this.breadCrumbs.length) {
    Array.from(this.breadCrumbs).forEach(function (item, index) {
      if (index < 3) _this.new_bread_el.appendChild(item);

      if (index < 2) {
        var separate = document.createElement("span");
        separate.className += "separate";
        separate.innerText = ">";

        _this.new_bread_el.appendChild(separate);
      }
    });
  }
}; // 处理正文


UI.prototype.processReadContent = function () {
  this.new_title_el.innerHTML = this.old_title_el.innerHTML;
  var txt = this.new_title_el.outerHTML + this.old_content_el.innerHTML;
  this.new_content_el.innerHTML = removeTextADS(txt);
  var mark = document.createElement("div");
  mark.className += "book-mark";
  this.new_content_el.appendChild(mark);
}; // 去除正文中的广告


function removeTextADS(txt) {
  var ads = [/(八一中文网).*com/, "请退出转码页面，请下载爱阅小说app 阅读最新章节。", "txt下载地址： ", "手机阅读："];
  ads.forEach(function (item) {
    txt = txt.replace(item, "");
  });
  return txt;
} // 处理底部导航


UI.prototype.processReadNav = function () {
  if (this.nav_prev) {
    this.new_nav_el.appendChild(this.nav_prev);
  } else {
    this.new_nav_el.innerHTML += "<span>上一章</span>";
  }

  this.processReadNavSeparate();

  if (this.nav_menu) {
    this.new_nav_el.appendChild(this.nav_menu);
  } else {
    this.new_nav_el.innerHTML += "<span>目录</span>";
  }

  this.processReadNavSeparate();

  if (this.nav_next) {
    this.new_nav_el.appendChild(this.nav_next);
  } else {
    this.new_nav_el.innerHTML += "<span>下一章</span>";
  }

  this.processReadNavSeparate();

  if (this.nav_space) {
    this.new_nav_el.appendChild(this.nav_space);
  }
}; // 处理底部分割线


UI.prototype.processReadNavSeparate = function () {
  var separate = document.createElement("div");
  separate.className += "separate";
  this.new_nav_el.appendChild(separate);
};

/* harmony default export */ const ui = (UI);
;// CONCATENATED MODULE: ./src/main.js


var main_ui = new ui();

(function () {
  window.addEventListener("load", function () {
    init();
  });
  window.addEventListener("DOMContentLoaded", function () {
    init();
  });
})();

var isInit = false;

function init() {
  if (isInit) return;
  isInit = true;
  main_ui.mounted();
  main_ui.judge();
  document.body.style.display = "block";
}
})();

/******/ })()
;