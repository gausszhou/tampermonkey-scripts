// ==UserScript==
// @name         Novel Reader
// @version      0.0.16
// @description  小说阅读器，特点是仿起点风格的网站样式，支持UU看书，笔趣阁，书趣阁，81中文网等
// @author       gausszhou@qq.com
// @namespace    gausszhou
// @license      MIT
// @grant        none
// @run-at       document-start
// @icon         https://www.gausszhou.top/favicon.ico
// @match      *://book.qidian.com/info/*

// @match      *://www.uukanshu.com/*.html
// @match      *://www.ddxs.com/*.html
// @match      *://www.8dushu.net/ml/*/*.html
// @match      *://www.biqule8.com/*/*.html
// @match      *://www.biqugeu.net/*/*.html
// @match      *://www.ibiquge.net/*/*.html
// @match      *://www.qbiqu.com/*/*.html
// @match      *://www.b520.cc/*/*.html

// @match      *://www.shuquge.com/txt/*/*.html
// @match      *://www.69shu.com/txt/*/*
// @match      *://www.ptwxz.com/html/*/*/*.html
// @match      *://www.bqwxg.com/wenzhang/*/*/*.html

// @match      *://www.86ebook.com/book/*/*.html
// @match      *://www.xbiquge.so/book/*/*.html
// @match      *://www.xxdingdian.com/book/*/*.html
// @match      *://www.biquge.lu/book/*/*.html
// @match      *://www.230book.net/book/*/*.html
// @match      *://www.81zw.cc/book/*/*.html
// @match      *://www.81zw.com/book/*/*.html
// @match      *://www.81zw.me/book/*/*.html
// @match      *://www.81zw.net/book/*/*.html
// @match      *://www.kehuan.net.cn/book/*/*.html

// @match      *://www.taccx.com/html/*/*.html
// @match      *://www.shushuwuxs.com/*/*.html
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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{display:none}body.novel-reader-body iframe,body.novel-reader-body .weizhi,body.novel-reader-body .weizhi+div,body.novel-reader-body .at-share-btn,body.novel-reader-body .sao_mobile_box,body.novel-reader-body .addthis-animated,body.novel-reader-body .addthis-smartlayers,body.novel-reader-body .addthis-smartlayers-desktop{display:none !important}body.novel-reader-body{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat !important;font-size:18px;font-family:\"Microsoft YaHei\", PingFangSC-Regular, HelveticaNeue-Light, \"Helvetica Neue Light\",\r sans-serif}body.novel-reader-body .novel-reader-bread{box-sizing:border-box;width:800px;margin:1em auto 1em;display:flex;align-items:center;font:12px/22px PingFangSC-Regular, \"-apple-system\", Simsun}body.novel-reader-body .novel-reader-bread .novel-reader-bread-separate{color:rgba(0,0,0,0.4)}body.novel-reader-body .novel-reader-bread a{margin:0 0.5em !important;padding:0 !important;background-color:transparent !important}body.novel-reader-body .novel-reader-bread a,body.novel-reader-body .novel-reader-bread b{padding:0;font-weight:400;font-size:12px;color:#1a1a1a !important}body.novel-reader-body .novel-reader-content{box-sizing:border-box;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat;width:800px;margin:0 auto 1em;padding:2em;color:#262626;font-weight:500;text-indent:2em;text-align:left;border:1px solid #d8d8d8;position:relative}body.novel-reader-body .novel-reader-content .novel-reader-book-mark{position:absolute;top:0px;right:48px;width:24px;height:40px;background-repeat:no-repeat;background-position:-228px -143.5px;background-size:340px}body.novel-reader-body .novel-reader-content br{content:\"\";margin:0.5em 0;display:block;font-size:150%}body.novel-reader-body .novel-reader-content p{word-wrap:wrap;word-break:break-all;margin-top:0.5em;line-height:1.8;text-align:justify}body.novel-reader-body .novel-reader-content .novel-reader-content-title{display:flex;align-items:center;text-indent:0;padding:0 0 0.5em;margin:0 0 0.5em;font:24px/32px PingFangSC-Regular, HelveticaNeue-Light, \"Helvetica Neue Light\", \"Microsoft YaHei\",\r sans-serif}body.novel-reader-body .novel-reader-content .novel-reader-content-title span{font-size:12px;padding:0 1em;margin:0}body.novel-reader-body .novel-reader-bottom-nav{box-sizing:border-box;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat;width:800px;margin:1em auto 1em;height:70px;display:flex;align-items:center;border:1px solid #d8d8d8;white-space:nowrap}body.novel-reader-body .novel-reader-bottom-nav a,body.novel-reader-body .novel-reader-bottom-nav span{flex:1;height:100%;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#333 !important;font:18px/70px PingFangSC-Regular, HelveticaNeue-Light, \"Helvetica Neue Light\",\r \"Microsoft YaHei\", sans-serif}body.novel-reader-body .novel-reader-bottom-nav span{color:#ccc !important}body.novel-reader-body .novel-reader-bottom-nav .novel-reader-bottom-separate{width:1px;height:32px;border-right:1px solid #d8d8d8}body.novel-reader-body .novel-reader-bottom-nav a:hover{background:rgba(0,0,0,0.03)}\n", ""]);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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

;// CONCATENATED MODULE: ./src/components/qidian.js
var dq = document.querySelector.bind(document);
function QiDian() {
  this.body = null;
  this.novelName = "";
  this.init();
}
QiDian.prototype.init = function () {
  console.log("[Novel Reader]", "欢迎使用小说整治插件");
};
QiDian.prototype.mounted = function () {
  this.body = document.body;
  this.qidian();
};

// 各个网站的策略
QiDian.prototype.qidian = function () {
  this.process();
};
QiDian.prototype.process = function () {
  this.processContent();
  this.processButton();
};

// 处理内容
QiDian.prototype.processContent = function () {
  this.novelName = dq(".book-info h1 em").textContent;
};

// 添加搜索
QiDian.prototype.processButton = function () {
  var button = dq(".book-info h1 em");
  var href = "https://www.google.com/search?q=" + encodeURIComponent(this.novelName);
  button.addEventListener("click", function () {
    window.open(href);
  });
};
/* harmony default export */ const components_qidian = (QiDian);
;// CONCATENATED MODULE: ./src/components/reader.js
var reader_dq = document.querySelector.bind(document);
var CLASSNAME_BODY = "novel-reader-body";
var CLASSNAME_BREAD = "novel-reader-bread";
var CLASSNAME_BREAD_SEPARATE = "novel-reader-bread-separate";
var CLASSNAME_CONTENT = "novel-reader-content";
var CLASSNAME_TITLE = "novel-reader-content-title";
var CLASSNAME_BOOK_MARK = "novel-reader-book-mark";
var CLASSNAME_BOTTOM_NAV = "novel-reader-bottom-nav";
var CLASSNAME_BOTTOM_SEPARATE = "novel-reader-bottom-separate";
function Reader() {
  this.init();
}
Reader.prototype.init = function () {
  console.log("[Novel Reader]", "欢迎使用小说整治插件");
};
Reader.prototype.mounted = function () {
  this.body = document.body;

  // create Element
  this.$breadNew = document.createElement("div");
  this.$breadNew.className = CLASSNAME_BREAD;
  this.$contentNew = document.createElement("div");
  this.$contentNew.className = CLASSNAME_CONTENT;
  this.$titleNew = document.createElement("div");
  this.$titleNew.className = CLASSNAME_TITLE;
  this.$navNew = document.createElement("div");
  this.$navNew.className = CLASSNAME_BOTTOM_NAV;
};

// 网站策略判定 判定入口
Reader.prototype.judge = function () {
  try {
    if (reader_dq(".bread_728x90")) {
      this.kehuanNet();
      return false;
    }
    if (reader_dq(".zhengwan_top")) {
      this.uukanshu();
      return false;
    }
    if (reader_dq("#tbox")) {
      this.ddxs();
      return false;
    }
    if (reader_dq(".page_chapter")) {
      this.shuquge();
      return false;
    }
    if (reader_dq(".modbg")) {
      this.shuba();
      return false;
    }
    if (reader_dq("#content.fonts_mesne")) {
      this.ptwxz();
      return false;
    }
    if (reader_dq("#center_tip")) {
      this.e86book();
      return false;
    }
    if (reader_dq(".header_wap.pc_none")) {
      this.taccx();
      return false;
    }
    this.biquge();
  } catch (error) {
    console.error("[Novel Reader] error:", error);
  }
};

// 各个网站的策略

Reader.prototype.kehuanNet = function () {
  this.body.classList.add("kehuan");
  this.$breadOld = reader_dq("#container .topnav h2");
  this.$titleOld = reader_dq("#container > h1");
  this.$contentOld = reader_dq("#container .text");
  this.$prev = reader_dq(".next a:nth-child(1)");
  this.$menu = reader_dq(".next a:nth-child(2)");
  this.$next = reader_dq(".next a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};
Reader.prototype.ddxs = function () {
  this.body.classList.add("ddxs");
  this.$breadOld = reader_dq("#amain dl dt");
  this.$titleOld = reader_dq("#amain dl dd h1");
  this.$contentOld = reader_dq("#contents");
  this.$prev = reader_dq("#footlink a:nth-child(1)");
  this.$menu = reader_dq("#footlink a:nth-child(2)");
  this.$next = reader_dq("#footlink a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};
Reader.prototype.uukanshu = function () {
  this.body.classList.add("uukanshu");
  this.$breadOld = reader_dq(".srcbox");
  this.$titleOld = reader_dq(".h1title #timu");
  this.$contentOld = reader_dq("#contentbox");
  this.$prev = reader_dq(".fanye #prev");
  this.$menu = reader_dq(".fanye #htmlmulu");
  this.$next = reader_dq(".fanye #next");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};
Reader.prototype.shuquge = function () {
  this.body.classList.add("shuquge");
  this.$breadOld = reader_dq(".path .p");
  this.$titleOld = reader_dq(".content h1"); // title
  this.$contentOld = reader_dq("#content");
  this.$prev = reader_dq(".page_chapter li:nth-child(1) a");
  this.$menu = reader_dq(".page_chapter li:nth-child(2) a");
  this.$next = reader_dq(".page_chapter li:nth-child(3) a");
  this.nav_space = reader_dq(".page_chapter li:nth-child(4) a");
  this.ads = [".header", "div.box_con > div.bookname div.lm", ".info > .link", ".footer"];
  this.process();
};
Reader.prototype.shuba = function () {
  this.body.classList.add("shuba");
  this.$breadOld = reader_dq(".bread");
  this.$titleOld = reader_dq("h1.hide720"); // title
  this.$contentOld = reader_dq(".txtnav");
  this.$prev = reader_dq(".page1 a:nth-child(1)");
  this.$menu = reader_dq(".page1 a:nth-child(3)");
  this.$next = reader_dq(".page1 a:nth-child(4)");
  this.$space1 = reader_dq(".page1 a:nth-child(5)");
  this.ads = [".hide720"];
  this.process();
};
Reader.prototype.ptwxz = function () {
  this.body.classList.add("ptwxz");
  this.$breadOld = null;
  this.$titleOld = reader_dq("#main #content h1"); // title
  this.$contentOld = reader_dq("#main #content");
  this.$prev = reader_dq(".toplink a:nth-child(1)");
  this.$menu = reader_dq(".toplink a:nth-child(2)");
  this.$next = reader_dq(".toplink a:nth-child(3)");
  this.$space1 = reader_dq(".toplink a:nth-child(4)");
  this.$space2 = reader_dq(".toplink a:nth-child(5)");
  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};
Reader.prototype.e86book = function () {
  this.body.classList.add("e86book");
  this.$breadOld = reader_dq(".layout-tit");
  this.$titleOld = reader_dq(".reader-main .title"); // title
  this.$contentOld = reader_dq(".reader-main #content");
  this.$prev = reader_dq(".section-opt a:nth-child(1)");
  this.$menu = reader_dq(".section-opt a:nth-child(2)");
  this.$next = reader_dq(".section-opt a:nth-child(3)");
  this.$space1 = reader_dq(".section-opt a:nth-child(4)");
  this.$space2 = reader_dq(".section-opt a:nth-child(5)");
  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};
Reader.prototype.taccx = function () {
  this.body.classList.add("taccx");
  this.$breadOld = reader_dq("#read > div.book.reader > div.path.wap_none");
  this.$titleOld = reader_dq("#read > div.book.reader > div.content > h1"); // title
  this.$contentOld = reader_dq("#chaptercontent");
  this.$prev = reader_dq("#pb_prev");
  this.$menu = reader_dq("#pb_mulu");
  this.$next = reader_dq("#pb_next");
  this.$space1 = null;
  this.$space2 = null;
  this.ads = [];
  this.process();
};
Reader.prototype.biquge = function () {
  this.body.classList.add("biquge");
  this.$breadOld = reader_dq(".con_top");
  this.$titleOld = reader_dq(".content_read .bookname h1"); // title
  this.$contentOld = reader_dq(".content_read #content");
  this.$prev = reader_dq(".bottem2 a:nth-child(1)");
  this.$menu = reader_dq(".bottem2 a:nth-child(2)");
  this.$next = reader_dq(".bottem2 a:nth-child(3)");
  this.$space1 = reader_dq(".bottem2 a:nth-child(4)");
  this.$space2 = reader_dq(".bottem2 a:nth-child(5)");
  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

// 开始处理 入口
Reader.prototype.process = function () {
  if (this.$contentOld) {
    console.log("[Novel Reader]", "获取内容成功");
    this.processRead();
    this.body.classList.add(CLASSNAME_BODY);
  } else {
    console.log("[Novel Reader]", "未获取到内容");
  }
  this.processRemoveAD();
};

// 处理页面
Reader.prototype.processRead = function () {
  this.processReadBread();
  this.processReadContent();
  this.processReadNav();
  this.body.innerHTML = "";
  this.body.appendChild(this.$breadNew);
  this.body.appendChild(this.$contentNew);
  this.body.appendChild(this.$navNew);
  // 内容后处理
  var $pList = document.querySelectorAll(".".concat(CLASSNAME_CONTENT, " > p"));
  $pList.forEach(function (p) {
    p.innerHTML = p.innerHTML.trim();
    p.innerHTML = p.innerHTML.replace(/\s/g, "");
  });
};

// 去除广告
Reader.prototype.processRemoveAD = function () {
  if (this.ads.length) {
    console.log("[Novel Reader]", "开始去除广告");
    this.ads.forEach(function (selector) {
      var ad = reader_dq(selector);
      console.log("[Novel Reader] remove ad", ad);
      if (ad) ad.parentElement.removeChild(ad);
    });
  }
};

// 处理面包屑
Reader.prototype.processReadBread = function () {
  var _this = this;
  this.breadCrumbs = this.$breadOld && this.$breadOld.getElementsByTagName("a");
  if (this.breadCrumbs && this.breadCrumbs.length) {
    Array.from(this.breadCrumbs).forEach(function (item, index) {
      if (index < 3) _this.$breadNew.appendChild(item);
      if (index < 2) {
        var separate = document.createElement("span");
        separate.classList.add(CLASSNAME_BREAD_SEPARATE);
        separate.innerText = ">";
        _this.$breadNew.appendChild(separate);
      }
    });
  }
};

// 处理正文

Reader.prototype.processReadContent = function () {
  var _this$$contentNew$que, _this$$contentNew$que2;
  this.$titleNew.innerHTML = this.$titleOld.innerHTML;
  var txt = this.$titleNew.outerHTML + this.$contentOld.innerHTML;
  this.$contentNew.innerHTML = removeTextADS(txt);
  (_this$$contentNew$que = this.$contentNew.querySelector("h1")) === null || _this$$contentNew$que === void 0 ? void 0 : _this$$contentNew$que.remove();
  (_this$$contentNew$que2 = this.$contentNew.querySelector("table")) === null || _this$$contentNew$que2 === void 0 ? void 0 : _this$$contentNew$que2.remove();
  Array.from(this.$contentNew.querySelectorAll("a")).forEach(function (el) {
    return el.remove();
  });
  //
  var $mark = document.createElement("div");
  $mark.classList.add(CLASSNAME_BOOK_MARK);
  this.$contentNew.appendChild($mark);
};

// 去除正文中的广告
function removeTextADS(txt) {
  var ads = [/https?(.+)html/g, /wa?(.+)com/g, /八一中文网(.+)com/g, /<h1>.+<h1>/g, /请记住(.+)域名：/g, "【推荐下，换源app追书真的好用，这里下载大家去快可以试试吧。】", "【认识十年的老书友给我推荐的追书app，换源app！真特么好用，开车、睡前都靠这个朗读听书打发时间，这里可以下载】", "【讲真，最近一直用换源app看书追更，换源切换，朗读音色多，安卓苹果均可。】", "【话说，目前朗读听书最好用的app，换源app，安装最新版。】"];
  ads.forEach(function (item) {
    txt = txt.replace(item, "");
  });
  return txt;
}

// 处理底部导航
Reader.prototype.processReadNav = function () {
  if (this.$prev) {
    this.$navNew.appendChild(this.$prev);
  } else {
    this.$navNew.innerHTML += "<span>上一张</span>";
  }
  this.processReadNavSeparate();
  if (this.$menu) {
    this.$navNew.appendChild(this.$menu);
  } else {
    this.$navNew.innerHTML += "<span>目录</span>";
  }
  this.processReadNavSeparate();
  if (this.$next) {
    this.$navNew.appendChild(this.$next);
  } else {
    this.$navNew.innerHTML += "<span>下一章</span>";
  }
  this.processReadNavSeparate();
  if (this.$space1) {
    this.$navNew.appendChild(this.$space1);
  }
  if (this.$space2) {
    this.$navNew.appendChild(this.$space2);
  }
};

// 处理底部分割线
Reader.prototype.processReadNavSeparate = function () {
  var separate = document.createElement("div");
  separate.classList.add(CLASSNAME_BOTTOM_SEPARATE);
  this.$navNew.appendChild(separate);
};
/* harmony default export */ const components_reader = (Reader);
;// CONCATENATED MODULE: ./src/main.js



var isInit = false;
(function () {
  // window.addEventListener("DOMContentLoaded", () => {
  //   init()
  // })
  window.addEventListener("load", function () {
    init();
  });
  setTimeout(function () {
    init();
  }, 2000);
})();
function init() {
  if (isInit) return;
  isInit = true;
  if (location.hostname === "book.qidian.com") {
    var qidian = new components_qidian();
    qidian.mounted();
  } else {
    var reader = new components_reader();
    reader.mounted();
    reader.judge();
  }
  document.body.style.display = "block";
}
})();

/******/ })()
;