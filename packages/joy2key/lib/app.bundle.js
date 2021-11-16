// ==UserScript==
// @name         游戏手柄
// @version      0.0.1
// @description  在浏览器中使用你的游戏手柄
// @author       gausszhou@qq.com
// @grant        none
// @run-at       document-end
// @icon         https://dos.zczc.cz/favicon.ico
// @match        https://dos.zczc.cz/*
// @match        http://dos.zczc.cz/*
// ==/UserScript==



/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(2);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#gauss-plugin .board{width:320px;height:180px;border:1px solid #000;background-color:rgba(255,255,255,0.5);z-index:2147483648;position:fixed;bottom:1px;cursor:move}#gauss-plugin .board.board0{left:1px}#gauss-plugin .board.board1{right:1px}#gauss-plugin .board .container{position:relative;width:100%;height:100%}#gauss-plugin .joy{position:absolute;width:70px;height:70px;border:1px solid #000}#gauss-plugin .joy0{top:15px;left:30px}#gauss-plugin .joy1{right:75px;bottom:15px}#gauss-plugin .mask{width:100%;height:100%;position:relative}#gauss-plugin .stick{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);background-color:#000;width:20px;height:20px;border-radius:50%}#gauss-plugin .css-icon{display:inline-block;height:1em;width:1em;font-size:20px;box-sizing:border-box;text-indent:-9999px;vertical-align:middle;position:relative}#gauss-plugin .css-icon::before,#gauss-plugin .css-icon::after{content:\"\";box-sizing:inherit;position:absolute;left:50%;top:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}#gauss-plugin .icon-arrow-up::before{height:0.65em;width:0.65em;border-style:solid;border-width:2px 0 0 2px;-ms-transform:translate(-50%, -25%) rotate(45deg);transform:translate(-50%, -25%) rotate(45deg)}#gauss-plugin .icon-arrow-down::before{height:0.65em;width:0.65em;border-style:solid;border-width:2px 0 0 2px;-ms-transform:translate(-50%, -75%) rotate(225deg);transform:translate(-50%, -75%) rotate(225deg)}#gauss-plugin .icon-arrow-left::before{height:0.65em;width:0.65em;border-style:solid;border-width:2px 0 0 2px;-ms-transform:translate(-25%, -50%) rotate(-45deg);transform:translate(-25%, -50%) rotate(-45deg)}#gauss-plugin .icon-arrow-right::before{height:0.65em;width:0.65em;border-style:solid;border-width:2px 0 0 2px;-ms-transform:translate(-75%, -50%) rotate(135deg);transform:translate(-75%, -50%) rotate(135deg)}#gauss-plugin .direct,#gauss-plugin .abxy{position:absolute;width:70px;height:70px}#gauss-plugin .direct{left:75px;bottom:15px;border:1px solid #000}#gauss-plugin .abxy{top:15px;right:30px}#gauss-plugin .abxy .abxy-container,#gauss-plugin .direct .direct-container{position:relative;width:100%;height:100%}#gauss-plugin .abxy-container .btn,#gauss-plugin .direct-container .arrow{position:absolute}#gauss-plugin .abxy-container .up,#gauss-plugin .abxy-container .down,#gauss-plugin .direct-container .up,#gauss-plugin .direct-container .down{left:50%;transform:translateX(-50%)}#gauss-plugin .abxy-container .down,#gauss-plugin .direct-container .down{bottom:0}#gauss-plugin .abxy-container .left,#gauss-plugin .abxy-container .right,#gauss-plugin .direct-container .left,#gauss-plugin .direct-container .right{top:50%;transform:translateY(-50%)}#gauss-plugin .abxy-container .right,#gauss-plugin .direct-container .right{right:0}#gauss-plugin .direct-container .active{color:#409eff}#gauss-plugin .abxy-container .btn{border:1px solid #000;box-shadow:1px 1px rgba(0,0,0,0.5);width:25px;height:25px;display:flex;justify-content:center;align-items:center;border-radius:50%}#gauss-plugin .abxy-container .active{color:#409eff;border-color:#409eff;box-shadow:none}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/assets/styles/index.scss
var styles = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/controller.js

function obj2arr(obj) {
  let arr = []
  Object.keys(obj).map((objk, objindex) => {
    arr.push(obj[objk])
  })
  return arr;
}

//模拟键盘触发事件方法
function triggerKeyDownEvent(el, keyCode) {
  var eventObj = document.createEventObject ?
    document.createEventObject() : document.createEvent("Events");

  if (eventObj.initEvent) {
    eventObj.initEvent("keydown", true, true);
  }

  eventObj.keyCode = keyCode;
  eventObj.which = keyCode;

  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);
}
function triggerKeyUpEvent(el, keyCode) {
  var eventObj = document.createEventObject ?
    document.createEventObject() : document.createEvent("Events");

  if (eventObj.initEvent) {
    eventObj.initEvent("keyup", true, true);
  }

  eventObj.keyCode = keyCode;
  eventObj.which = keyCode;

  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);
}


function Controller() {
  this.gamepads = [];
  this.connectState = 0; // 0 wait 1 connecting 2 disconnect
}

Controller.prototype.init = function () {
  window.addEventListener("gamepadconnected", (e) => {
    let gamepad = e.gamepad;
    console.log("%d 号控制器 %s 已连接", gamepad.index, gamepad.id);
    this.onConnect && this.onConnect(gamepad.index)
    this.connectState = 1;
    let gamepads = obj2arr(navigator.getGamepads());
    this.store(gamepads)
    this.update()
  });
  window.addEventListener("gamepaddisconnected", (e) => {
    let gamepad = e.gamepad;
    console.log("%d号控制器 %s 已断开", gamepad.index, gamepad.id);
    this.onDisconnect && this.onDisconnect(gamepad.index)
    this.gamepads.splice(gamepad.index, 1)
    if (this.gamepads.length == 0) {
      this.connectState = 2;
      console.log("所有控制器都已经断开")
    }
  });
}

Controller.prototype.update = function () {
  this.check();
  let updateReq;
  if (this.connectState == 2) {
    window.cancelAnimationFrame(updateReq)
  } else {
    updateReq = window.requestAnimationFrame(this.update.bind(this))
  }
}

Controller.prototype.store = function (gamepads) {
  // 遍历所有控制器
  gamepads.forEach((item, index) => {
    if (item) {
      let gp = {
        axes: [],
        buttons: []
      };
      item.axes.forEach((val, key) => {
        gp.axes.push(val)
      })
      item.buttons.forEach((val, key) => {
        gp.buttons.push(val.value)
      })
      this.gamepads.push(gp)
    }
  })
}

Controller.prototype.check = function () {
  let gamepads = obj2arr(navigator.getGamepads());
  gamepads.forEach((item, index) => {
    if (item) {
      item.axes.forEach((val, key) => {
        if (val != this.gamepads[index].axes[key]) {
          this.gamepads[index].axes[key] = val
          this.emit('axes', index, key, val)
        }
      })
      item.buttons.forEach((val, key) => {
        if (val.value != this.gamepads[index].buttons[key]) {
          this.gamepads[index].buttons[key] = val.value
          this.emit('buttons', index, key, val.value)
        }
      })
    }
  })

}

Controller.prototype.emit = function (event, index, key, val) {
  if (event == 'axes') {
    this.onChangeJoy && this.onChangeJoy(index, key, val)
  } else {
    this.onChangeBtn && this.onChangeBtn(index, key, val)
    // 12
    let arr = [0, 1, 2, 3, 12, 13, 14, 15]
    let target = [13, 27, 18, 17, 38, 40, 37, 39]
    let findIndex = arr.findIndex((item) => item == key)
    // 38 
    if (findIndex > -1) {
      val ? triggerKeyDownEvent(document, target[findIndex]) : triggerKeyUpEvent(document, target[findIndex])
    }
  }
}

/* harmony default export */ var components_controller = (Controller);
// CONCATENATED MODULE: ./src/components/ui.js


function UI() {
  this.boards = []
}

UI.prototype.init = function () {
  this.boards = []
}

UI.prototype.create = function (index) {
  let plugin = document.createElement('div');
  plugin.id = "gauss-plugin"
  document.body.append(plugin)
  this.createBoard(index)
  this.createJoy(index)
  this.createDirect(index)
  this.createABXY(index)
}


UI.prototype.createBoard = function (index) {
  let board = document.createElement('div')
  board.className = `board board${index}`
  board.innerHTML = `
    <div class="board-container"></div>
  `
  document.querySelector("#gauss-plugin").append(board)
  this.boards.push(board)
  this.bindMove(board)

}

UI.prototype.bindMove = function (board) {
  let offsetX = 0;
  let offsetY = 0;
  let endX = 0;
  let endY = 0;
  board.onmousedown = function (e) {
    let rect = board.getBoundingClientRect()
    offsetX = e.clientX - rect.x
    offsetY = e.clientY - rect.y
    console.log(rect)
    board.onmousemove = function (e) {
      endX = e.clientX
      endY = e.clientY
      console.log(endX - offsetX)
      board.style.left = (endX - offsetX) + "px"
      board.style.top = (endY - offsetY) + "px"
    }
  }
  board.onmouseup = function (e) {
    board.onmousemove = null
  }
}

UI.prototype.destroy = function (index) {
  let board = document.querySelector(`.board${index}`)
  board.parentElement.removeChild(board);
}

UI.prototype.createJoy = function (index) {
  let joy0 = document.createElement('div');
  joy0.className = "joy joy0"
  joy0.innerHTML = `
  <div class="mask">
    <div class="stick stick0"></div>
  </div>
      `
  let joy1 = document.createElement('div');
  joy1.className = "joy joy1"
  joy1.innerHTML = `
<div class="mask">
  <div class="stick stick1"></div>
</div>
    `
  let container = document.querySelector(`.board${index}`).querySelector('.board-container');
  container.appendChild(joy0)
  container.appendChild(joy1)
}

UI.prototype.changeJoy = function (index, key, val) {
  let joy = document.querySelector(`.board${index}`).querySelector(`.joy${Math.floor(key / 2)}`)
  let stick = joy.querySelector('.stick')
  if (key == 0 || key == 2) {
    stick.style.left = 50 + val * 50 + "%"
  } else {
    stick.style.top = 50 + val * 50 + "%"
  }
}

UI.prototype.createDirect = function (index) {
  let direct = document.createElement('div')
  direct.className = "direct"
  direct.innerHTML = `
  <div class="direct-container">
    <div class="direct-12  arrow up css-icon icon-arrow-up"></div>
    <div class="direct-13 arrow down css-icon  icon-arrow-down"></div>
    <div class="direct-14 arrow left css-icon  icon-arrow-left"></div>
    <div class="direct-15 arrow right css-icon  icon-arrow-right"></div>
  </div>
  `
  let container = document.querySelector(`.board${index}`).querySelector('.board-container');
  container.appendChild(direct)
}

UI.prototype.createABXY = function (index) {
  let abxy = document.createElement('div')
  abxy.className = "abxy"
  abxy.innerHTML = `
  <div class="abxy-container">
    <div class="btn down  abxy-0 ">A</div>
    <div class="btn right  abxy-1">B</div>
    <div class="btn left  abxy-2">X</div>
    <div class="btn up  abxy-3">Y</div>
  </div>
  `
  let container = document.querySelector(`.board${index}`).querySelector('.board-container');
  container.appendChild(abxy)
}


UI.prototype.changeBtn = function (index, key, val) {

  // abxy
  if (key < 4) {
    let abxy = document.querySelector(`.board${index}`).querySelector(`.abxy`)
    let btn = abxy.querySelector(`.abxy-${key}`)
    if (val) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }

  }
  // direct
  else if (key > 11 && key < 16) {
    let direct = document.querySelector(`.board${index}`).querySelector(`.direct`)
    let btn = direct.querySelector(`.direct-${key}`)
    if (val) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  }

}

/* harmony default export */ var components_ui = (UI);

// CONCATENATED MODULE: ./src/main.js




window.onload = () => {
  const controller = new components_controller()
  const ui = new components_ui()
  controller.init()
  ui.init()
  controller.onConnect = (id) => {
    ui.create(id)
  }
  controller.onDisconnect = (id) => {
    ui.destroy(id)
  }
  controller.onChangeJoy = (index, key, val) => {
    ui.changeJoy(index, key, val)
  }
  controller.onChangeBtn = (index, key, val) => {
    ui.changeBtn(index, key, val)
  }
  document.onkeydown = (e) => {
    console.log(e.keyCode);
  }
}

/***/ })
/******/ ]);