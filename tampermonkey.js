// ==UserScript==
// @name         开发模式
// @version      0.0.1
// @description  开发模式
// @author       gausszhou@qq.com
// @grant        none
// @run-at       document-end
// @match      *://*.bilibili.com/video/*
// @match      *://*.csdn.net/*
// @match      *://csdn.net/*
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
// @match      *://www.youtube.com/watch?v=*
// @match      *://www.youtube.com/*
// ==/UserScript==

(function () {
  'use strict'
  if (location.href === 'http://localhost:8080/') return
  var script = document.createElement('script')
  script.src = 'http://localhost:8080/app.bundle.js'
  console.log("[info] 进入开发模式")
  document.body.appendChild(script)
})()