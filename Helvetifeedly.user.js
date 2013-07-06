// ==UserScript==
// @name                        Helvetifeedly
// @namespace                   Helvetifeedly
// @version                     0.1
// @author                      Mescoda on http://mescoda.com/
// @description                 Style for Feedly.com
// @include                     http://www.feedly.com/home*
// @include                     https://www.feedly.com/home*
// @include                     http://cloud.feedly.com/*
// @include                     https://cloud.feedly.com/*
// @grant                       GM_xmlhttpRequest
// ==/UserScript==

(function() {
    var headElem = document.getElementsByTagName('head')[0],
        cssElem = document.createElement('style'),
        cssArray = [];
    cssArray.push("*{font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif !important;}")
    cssArray.push("#box .entryBody, #box .entryHeader{font-family: 'Helvetica Neue',Helvetica,Arial,'Hiragino Sans GB','WenQuanYi Micro Hei',simsun,sans-serif !important; font-size:16px; color:#333;}");
    cssElem.textContent = cssArray.join('\n');
    headElem.appendChild(cssElem);
})();