// ==UserScript==
// @name         游戏手柄
// @version      0.0.1
// @description  在浏览器中使用你的游戏手柄
// @author       gausszhou@qq.com
// @grant        none
// @run-at       document-end
// @icon         https://dos.zczc.cz/favicon.ico
// @match        https://*/*
// @match        http://*/*
// ==/UserScript==

(function () {
  'use strict'
  if (location.href === 'http://localhost:8080/') return
  var script = document.createElement('script')
  script.src = 'http://localhost:8080/app.bundle.js'
  document.body.appendChild(script)
})()
