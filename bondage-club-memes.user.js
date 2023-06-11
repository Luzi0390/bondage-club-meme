// ==UserScript==
// @name         BondageClubMemes
// @namespace    BondageClubMemes
// @version      0.0.1
// @description  斗图用
// @author       Luzi
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant        none
// @license      MIT
// ==/UserScript==


(function () {
  'use strict';

  const script = document.createElement("script");
  script.src = `https://luzi0390.github.io/bondage-club-memes/main.js`;
  window.s = script;
  document.head.appendChild(script);
})();