// ==UserScript==
// @name         Youtube CC Downloader
// @version      0.0.1
// @description  下载Youtube的英文/英文自动生成以及对应的机翻中文字幕
// @author       gausszhou
// @namespace    gausszhou
// @license      MIT
// @grant        none
// @icon         https://www.gausszhou.top/favicon.ico
// @run-at       document-start
// @match        *://www.youtube.com/watch?v=*
// @match        *://www.youtube.com/*
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 737:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#ytcc-downloader-panel .double-translation-plugin-download-zhhans-subtitle-btn{position:relative;top:-36%;margin-right:3px;border-radius:25px;border:none;opacity:0.95;background-color:#fff;outline:none}#ytcc-downloader-panel .double-translation-plugin-download-en-subtitle-btn{position:relative;top:-36%;margin-right:3px;border-radius:25px;border:none;opacity:0.95;background-color:#fff;outline:none}\n", ""]);
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
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss
var styles = __webpack_require__(737);
;// CONCATENATED MODULE: ./src/styles/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const src_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/ad.js
function FxxkAds() {
  setInterval(function () {
    try {
      isVideoAdsTime();
    } catch (err) {}
  }, 200);
}

function isVideoAdsTime() {
  var ad = document.querySelector(".ad-showing");
  var skipAdButton = document.querySelector(".ytp-ad-skip-button");
  // 底部广告
  var ads = document.querySelector(".ytp-ad-overlay-container");
  if (ads !== null) {
    ads.style.display = "none";
  }

  // 跳过广告
  if (skipAdButton) {
    skipAdButton.click();
  }
  return ad != null;
}


;// CONCATENATED MODULE: ./src/components/utils.js
function msTohhmmss(time) {
  let second = Math.floor(time / 1000);
  let minute = Math.floor(second / 60);
  let hour = Math.floor(minute / 60);
  minute = Math.floor(minute - hour * 60);
  second = Math.floor(second - minute * 60 - hour * 60 * 60);
  let ms = Math.floor(time - (second + minute * 60 + hour * 60 * 60));

  hour = "00" + hour;
  minute = "00" + minute;
  second = "00" + second;
  ms = ms + "000";

  hour = hour.substr(hour.length - 2, hour.length);
  minute = minute.substr(minute.length - 2, minute.length);
  second = second.substr(second.length - 2, second.length);
  ms = ms.substr(0, 3);
  return [hour, minute, second].join(":") + "." + ms;
}

// 生成字幕
function GenerateSRTFromContent(captionTranslateContent) {
  var result = [];
  var index = 0;
  if (
    captionTranslateContent != null &&
    captionTranslateContent instanceof Array
  ) {
    for (var i = 0; i < captionTranslateContent.length; i++) {
      var item = captionTranslateContent[i];

      if (!item || !item.segs || !(item.segs instanceof Array)) {
        continue;
      }

      var text = [];
      for (var k = 0; k < item.segs.length; k++) {
        text.push(item.segs[k].utf8);
      }

      var displayText = text.join("").trim();
      displayText = displayText.replace(/\s+/gi, " ");

      var displayTime = [
        msTohhmmss(parseInt(item.tStartMs)),
        msTohhmmss(parseInt(item.tStartMs) + parseInt(item.dDurationMs))
      ].join(" --> ");

      if (displayText.length > 0) {
        result.push(++index);
        result.push(displayTime);
        result.push(displayText + "\n");
      }
    }
  }

  return result.join("\n");
}

function GenerateSRTFromXML(captionTranslateXML) {
  let domparser = new DOMParser();
  let doc = domparser.parseFromString(captionTranslateXML, "text/xml");
  let textNodes = doc.getElementsByTagName("text");
  const result = [];
  Array.from(textNodes).forEach((textNode, index) => {
    const start = textNode.getAttribute("start");
    const duration = textNode.getAttribute("dur");
    const end = parseInt(start) + parseInt(duration);
    const displayTime = [msTohhmmss(start * 1000), msTohhmmss(end * 1000)].join(" --> ");
    const displayText = textNode.textContent.replace(/(&.*;)/g,"");
    result.push(++index);
    result.push(displayTime);
    result.push(displayText + "\n");
  });

  return result.join("\n");
}

;// CONCATENATED MODULE: ./src/main.js




(function () {

  let first_load = true;
  let captionUrl_1 = null; // zh
  let captionUrl_2 = null; // en
  let captionUrl_3 = null; // a.en
  let saveZhSubtitleButton = null; // zh button
  let saveEnSubtitleButton = null; // en button
  let saveEnAutoSubtitleButton = null; // en auto button
  let checkTranslateCaptionTimer = null;
  let captionDelayLoadTime = 50;

  function main() {
    FxxkAds();
    HookDataUpdate();
    HookVideoCreate();
    if (first_load) {
      first_load = false;
      setTimeout(() => {
        AddTranslationButton();
        HiddenDownloadSubtitleButton();
        ResetTranslateCaptionsUrl();
        GetTranslateCaptionsUrl();
        FetchTranslateCaptionsContent();
      }, 3000);
    }
  }

  main();

  // TODO

  function getVideoTitle() {
    return window.ytInitialPlayerResponse.videoDetails.title;
  }

  function getCaptionTracks() {
    try {
      const tracks =
        window.ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer
          .captionTracks;
      return tracks;
    } catch (err) {
      return [];
    }
  }

  function HasTranslateCaption() {
    try {
      window.ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer
        .captionTracks;
      return true;
    } catch (err) {
      return false;
    }
  }

  function GenerateCaptionsUrl(baseUrl, toLang) {
    var url = baseUrl;
    if (baseUrl) {
      if (toLang) {
        return url + "&fmt=json3&xorb=2&xobt=3&xovt=3&tlang=" + toLang;
      }
      return url;
    }
    return null;
  }

  function ResetTranslateCaptionsUrl() {
    captionUrl_1 = null;
    captionUrl_2 = null;
    captionUrl_3 = null;
  }
  function Wrap() {
    return arguments;
  }

  function HiddenDownloadSubtitleButton() {
    console.log("[info] HiddenDownloadSubtitleButton");
    if (saveEnAutoSubtitleButton.style.display === "inline-block") {
      saveEnAutoSubtitleButton.style.display = "none";
    }
    if (saveEnSubtitleButton.style.display === "inline-block") {
      saveEnSubtitleButton.style.display = "none";
    }
    if (saveZhSubtitleButton.style.display === "inline-block") {
      saveZhSubtitleButton.style.display = "none";
    }
  }

  function GetTranslateCaptionsUrl() {
    let videoId = window.ytInitialPlayerResponse.videoDetails.videoId;
    let videoTitle = window.ytInitialPlayerResponse.videoDetails.title;
    let videoAuthor = window.ytInitialPlayerResponse.videoDetails.author;
    let videoViewCount = window.ytInitialPlayerResponse.videoDetails.viewCount;
    let captionTracks = getCaptionTracks();

    if (captionTracks.length == 0) {
      console.log("[info] 当前视频没有字幕！！！");
    }
    let autoEnSubtitleUrl = null;
    let enSubtitleUrl = "";
    try {
      for (let i = 0; i < captionTracks.length; i++) {
        let item = captionTracks[i];
        if (item.vssId == "a.en") {
          autoEnSubtitleUrl = item.baseUrl;
        }
        if (item.vssId == "a.en") {
          autoEnSubtitleUrl = item.baseUrl;
        }
      }

      captionUrl_1 = GenerateCaptionsUrl(autoEnSubtitleUrl, "zh-Hans");
      captionUrl_2 = GenerateCaptionsUrl(enSubtitleUrl);
      captionUrl_3 = autoEnSubtitleUrl;

      console.log("[info] 欢迎使用 [油管字幕下载] 插件");
      console.log("[info] 视频标题: " + videoTitle);
      console.log("[info] 视频作者: " + videoAuthor);
      console.log("[info] 视频ID: " + videoId);
      console.log("[info] 播放数: " + videoViewCount);
      console.log(
        "[info] 字幕数: ",
        captionTracks.map((item) => item.vssId)
      );
      console.log("[info] 中文字幕: " + captionUrl_1);
      console.log("[info] 英文字幕: " + captionUrl_2);
      console.log("[info] 自动生成: " + captionUrl_3);
    } catch (e) {
      console.log("[info] 字幕获取失败");
    }
  }

  function FetchTranslateCaptionsContent() {
    if (captionUrl_1 !== null) {
      fetch(captionUrl_1)
        .then(function (response) {
          response.json().then(function (response) {
            const captionTranslateContent = response.events;
            const subtitleContent = GenerateSRTFromContent(
              captionTranslateContent
            );
            const fileContent =
              "data:text/plain;charset=utf-8," +
              encodeURIComponent(subtitleContent);
            const filename = "[中字]" + getVideoTitle() + ".srt";
            saveZhSubtitleButton.setAttribute("href", fileContent);
            saveZhSubtitleButton.setAttribute("download", filename);
            saveZhSubtitleButton.style.display = "inline-block";
            console.log("[info] 获取中文字幕：成功");
          });
        })
        .catch(function (err) {
          console.log("[info] 获取中文字幕：失败");
        });
    }

    if (captionUrl_2 !== null) {
      fetch(captionUrl_2)
        .then(function (response) {
          response.json().then(function (response) {
            const captionTranslateContent = response.events;
            const subtitleContent = GenerateSRTFromContent(
              captionTranslateContent
            );
            const fileContent =
              "data:text/plain;charset=utf-8," +
              encodeURIComponent(subtitleContent);
            const filename = "[英字]" + getVideoTitle() + ".srt";
            saveEnSubtitleButton.setAttribute("href", fileContent);
            saveEnSubtitleButton.setAttribute("download", filename);
            saveEnSubtitleButton.style.display = "inline-block";
            console.log("[info] 获取英文字幕: 成功");
          });
        })
        .catch(function (err) {
          console.log("[info] 获取英文字幕: 失败");
        });
    }

    if (captionUrl_3 !== null) {
      fetch(captionUrl_3)
        .then(function (response) {
          response.text().then(function (response) {
            const captionTranslateXML = response;
            const subtitleContent = GenerateSRTFromXML(captionTranslateXML);
            const fileContent =
              "data:text/plain;charset=utf-8," +
              encodeURIComponent(subtitleContent);
            const filename = "[英字自动生成]" + getVideoTitle() + ".srt";
            saveEnAutoSubtitleButton.setAttribute("href", fileContent);
            saveEnAutoSubtitleButton.setAttribute("download", filename);
            saveEnAutoSubtitleButton.style.display = "inline-block";
            console.log("[info] 获取自动生成字幕: 成功");
          });
        })
        .catch(function (err) {
          console.log("[info] 获取自动生成字幕: 失败");
        });
    }
  }

  function HookVideoCreate() {
    console.log("[info] HookVideoCreate");
    var createElement = document.createElement;
    // 监听Video标签的创建
    document.createElement = function (tagName, options) {
      let element = createElement.apply(document, Wrap(tagName, options));
      if (tagName.toLowerCase() === "video") {
        element.addEventListener("loadstart", function () {
          if (this.classList.contains("html5-main-video")) {
            if (checkTranslateCaptionTimer !== null) {
              clearInterval(checkTranslateCaptionTimer);
              checkTranslateCaptionTimer = null;
            }

            checkTranslateCaptionTimer = setInterval(function () {
              if (HasTranslateCaption()) {
                clearInterval(checkTranslateCaptionTimer);
                checkTranslateCaptionTimer = null;

                setTimeout(function () {
                  try {
                    AddTranslationButton();
                    HiddenDownloadSubtitleButton();
                    ResetTranslateCaptionsUrl();
                    GetTranslateCaptionsUrl();
                    FetchTranslateCaptionsContent();
                  } catch (err) {}
                }, captionDelayLoadTime);
              }
            }, 300);
          }
        });
        element.addEventListener("ended", function () {
          if (this.classList.contains("html5-main-video")) {
            HiddenDownloadSubtitleButton();
          }
        });
      }
      return element;
    };
  }

  function AddTranslationButton() {
    var coltrolPanel = document.querySelector(
      ".ytp-chrome-controls .ytp-right-controls"
    );
    if (
      coltrolPanel &&
      coltrolPanel.querySelector(".double-translation-plugin-btn") == null
    ) {
      // 管理面板
      if (document.getElementById("ytcc-downloader-panel")) return;

      // 保存中文字幕
      saveZhSubtitleButton = document.createElement("a");
      saveZhSubtitleButton.style.display = "none";
      const _saveZhSubtitleButton = document.createElement("button");
      _saveZhSubtitleButton.className =
        "double-translation-plugin-download-zhhans-subtitle-btn";
      _saveZhSubtitleButton.innerText = "中字";
      saveZhSubtitleButton.appendChild(_saveZhSubtitleButton);

      // 保存英文字幕
      const _saveEnSubtitleButton = document.createElement("button");
      _saveEnSubtitleButton.className =
        "double-translation-plugin-download-en-subtitle-btn";
      _saveEnSubtitleButton.innerText = "英字";
      saveEnSubtitleButton = document.createElement("a");
      saveEnSubtitleButton.style.display = "none";
      saveEnSubtitleButton.appendChild(_saveEnSubtitleButton);

      // 保存自动生成
      const _saveEnAutoSubtitleButton = document.createElement("button");
      _saveEnAutoSubtitleButton.className =
        "double-translation-plugin-download-en-subtitle-btn";
      _saveEnAutoSubtitleButton.innerText = "英字自动生成";
      saveEnAutoSubtitleButton = document.createElement("a");
      saveEnAutoSubtitleButton.style.display = "none";
      saveEnAutoSubtitleButton.appendChild(_saveEnAutoSubtitleButton);

      const panel = document.createElement("div");
      panel.id = "ytcc-downloader-panel";
      panel.style.position = "absolute";
      panel.style.bottom = "100%";
      panel.style.right = "0";

      panel.prepend(saveEnAutoSubtitleButton);
      panel.prepend(saveEnSubtitleButton);
      panel.prepend(saveZhSubtitleButton);
      coltrolPanel.prepend(panel);
      return true;
    }
  }

  function HookDataUpdate() {
    console.log("[info] HookDataUpdate");
    setInterval(function () {
      try {
        var pageManger = document.querySelector("#page-manager");
        if (pageManger !== null) {
          if (pageManger.isHook !== undefined) {
            return;
          }
          pageManger.isHook = true;
          var oldUpdatePageData = pageManger.updatePageData;
          var updatePageData = function (data) {
            try {
              window.ytInitialPlayerResponse = data.playerResponse;
              AddTranslationButton();
              HiddenDownloadSubtitleButton();
              ResetTranslateCaptionsUrl();
              GetTranslateCaptionsUrl();
              FetchTranslateCaptionsContent();
            } catch (err) {}

            return oldUpdatePageData.apply(this, arguments);
          };
          if (oldUpdatePageData !== updatePageData) {
            pageManger.updatePageData = updatePageData;
          }
        }
      } catch (err) {}
    }, 1000);
  }
  
})();

})();

/******/ })()
;