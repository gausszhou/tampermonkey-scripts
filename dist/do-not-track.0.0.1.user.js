// ==UserScript==
// @name         Do Not Track
// @namespace    http://tampermonkey.net/
// @version      2025-06-17
// @description  try to take over the world!
// @author       You
// @match        *
// @match        *://*/*
// @icon         https://www.gausszhou.top/favicon.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==
/******/ (() => { // webpackBootstrap
(function() {
    'use strict';
    window.doNotTrack = 1;
    Object.defineProperty(navigator, 'doNotTrack', { get() {return 1 }});
})();
/******/ })()
;