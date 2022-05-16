// ==UserScript==
// @name        Filitered Website
// @namespace   Violentmonkey Scripts
// @match       *://*example.com/*
// @grant       none
// @version     1.0
// @author      -
// @description Brute force element removal
// ==/UserScript==

window.setInterval(()=>{
  // Main page
  if (document.querySelector(".x") !== null) {
    document.querySelector(".x").remove();
  }
  // Search page
  if (document.querySelector("#y") !== null) {
    document.querySelector("#y").remove();
  }
  // User page
  if (document.querySelector("#z") !== null) {
    document.querySelector("#z").remove();
  }
}, 1000);
