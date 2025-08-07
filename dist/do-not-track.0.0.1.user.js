// ==UserScript==
// @name         Do Not Track
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @match        *://**/*
// @icon         https://www.gausszhou.top/favicon.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==
/******/ (() => { // webpackBootstrap
window.doNotTrack = 1;
Object.defineProperty(navigator, "doNotTrack", {
  get() {
    return 1;
  }
});
/******/ })()
;