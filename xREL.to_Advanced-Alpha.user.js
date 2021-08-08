// ==UserScript==
// @name			xREL-Advanced
// @namespace		https://github.com/DudeX13/xREL-Advanced
// @description		This Script adds some functions to xREL
// @autor			DudeX13
// @include			*xrel.to*
// @exclude			http*://api.xrel.to*
// @connect         api.themoviedb.org
// @connect         image.tmdb.org
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_xmlhttpRequest
// @version			0.3.2-3-Alpha
// @updateURL		https://raw.githubusercontent.com/DudeX13/xREL-Advanced/master/xREL.to_Advanced-Alpha.user.js
// @icon64			data:image/png;base64,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MC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmRjNjlmMDhhLTdhMjMtY2Q0NC04MWUwLTQxMTdmNmM1NWU1MyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YjBhNjZmYS00ODA4LTRjZjEtYTMzMC03NTJkYmQ3NWM4NTAiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkYzY5ZjA4YS03YTIzLWNkNDQtODFlMC00MTE3ZjZjNTVlNTMiCiAgIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMzQiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxMzQiCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IkxpbnV4IgogICBHSU1QOlRpbWVTdGFtcD0iMTYyODMyMjc0MjI2MDA2NCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjI0IgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI5NjAwMDAvMTAwMDAiCiAgIHRpZmY6WVJlc29sdXRpb249Ijk2MDAwMC8xMDAwMCIKICAgeG1wOkNyZWF0ZURhdGU9IjIwMTctMDYtMTBUMTU6MzA6MzArMDI6MDAiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDE3LTA2LTEwVDE1OjM0OjQ3KzAyOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAxNy0wNi0xMFQxNTozNDo0NyswMjowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249ImNyZWF0ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM2OWYwOGEtN2EyMy1jZDQ0LTgxZTAtNDExN2Y2YzU1ZTUzIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMTctMDYtMTBUMTU6MzA6MzArMDI6MDAiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjYxOGQyOTItNWU0Yi00MDM4LWEzMGItM2E1YmQ0YzM5ZmY1IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMS0wOC0wN1QwOTo1MjoyMiswMjowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz6JUpiqAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5QgHBzQWbUsDygAAEcBJREFUeNrtmnmUXVWVxn/7vvdqSlWqEhJIQppABggzgQSU0QAqU9MoTbpFQBAHaBS7RQUiMkSNoNCogE23jSgiU4CIDNI2RFQEMgGRQZJQZABCRkiqUuO7Z3/9xz2v6tWUhLVoZXVnr3VXJffde+4539nDt/c+sF22y3bZLttlu/y/Fet9Q4+dsiPoAqCyn+fzwOt27AM/+GtPXI+dciJwRK/bbUDodW8zrlvsIw80M8CCeo0cRgCXABUD4PWj98nm5YCLt+G5t0ns18Di/n5M+qzfQ5UUKlCg+/J4BUdh/vtj/ZoLeg1E36uHVIGGDDRK0ndcr0cBycuuULraRXjufWG7xz6wBoXf9tyo0mb1uFeNvGGgcfozgXqk/twDwDum3OK/6D4/epwJVZrM7fhHO3vuld8DOqffjeyevxkMfzcANGxhPs/KvPMvsXB/5CNVJH6kCMcA+8lspT/6kWXAy0gvARuQPw9aCuyxJT8vGPVuABiqfoKEgcDmJifM8fd8lx86NifzoRjjgamZ3abDcTsXVMCYR8JpJkZItjtwEqgBeQLWtA0B7m+2GQApDO1vIEEKLHyvFh0ePGoIpl0xO8IpTjVsEmIM8I6MD5rYCTgbKCAkUUxOeOJV4NVu8zg6kes50N1Z1LKBPjfyXWiAN9C/C+jAkvcEAH/wsCmycAswEVmBnr7bECbMQEmcSBvq697tuDnujxz5uGSNwJ5b+OS7AMDD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
// ==/UserScript==

/*! jQuery JSON plugin v2.6.0 | github.com/Krinkle/jquery-json */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function($){"use strict";var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b,c,d,e,f=$.type(a);if("undefined"!==f){if("number"===f||"boolean"===f)return String(a);if("string"===f)return $.quoteString(a);if("function"==typeof a.toJSON)return $.toJSON(a.toJSON());if("date"===f){var g=a.getUTCMonth()+1,h=a.getUTCDate(),i=a.getUTCFullYear(),j=a.getUTCHours(),k=a.getUTCMinutes(),l=a.getUTCSeconds(),m=a.getUTCMilliseconds();return g<10&&(g="0"+g),h<10&&(h="0"+h),j<10&&(j="0"+j),k<10&&(k="0"+k),l<10&&(l="0"+l),m<100&&(m="0"+m),m<10&&(m="0"+m),'"'+i+"-"+g+"-"+h+"T"+j+":"+k+":"+l+"."+m+'Z"'}if(b=[],$.isArray(a)){for(c=0;c<a.length;c++)b.push($.toJSON(a[c])||"null");return"["+b.join(",")+"]"}if("object"==typeof a){for(c in a)if(hasOwn.call(a,c)){if(f=typeof c,"number"===f)d='"'+c+'"';else{if("string"!==f)continue;d=$.quoteString(c)}f=typeof a[c],"function"!==f&&"undefined"!==f&&(e=$.toJSON(a[c]),b.push(d+":"+e))}return"{"+b.join(",")+"}"}}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(a){return a.match(escape)?'"'+a.replace(escape,function(a){var b=meta[a];return"string"==typeof b?b:(b=a.charCodeAt(),"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16))})+'"':'"'+a+'"'}});

// release name search engines
var searchEngines = [];
var productNameSearchEngines = [];
var xrelOptions = [];
var newEngine = [];

// Options

newEngine = {
    id : "darkmode",
    title : "Dark Mode",
    info : "Dunkles Desing anzeigen.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "searchbars",
    title : "Search Bars",
    info : "Fügt Icons hinter den Releasenamen ein für eine Schnellsuche auf Drittanbieterseiten.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "searchbarsall",
    title : "Search Dropdown",
    info : "Fügt Icons hinter den Releasenamen ein der ein menue für alle Drittanbieterseiten anzeigt.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "actorimages",
    title : "Actor Images",
    info : "Zeigt Bilder auf den Informationsseiten der Schauspieler und Rewgisseure an.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "quickcover",
    title : "Quick Cover",
    info : "Zeigt das Cover beim Hover auf Producktname.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "quickfilter",
    title : "Quick Filter",
    info : "Release Filter Option.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "expandedtrailers",
    title : "Expanded Trailers",
    info : "Wechselt die Ansicht der Trailerübersicht.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "newtab",
    title : "New Tab",
    info : "Alle externen Links werden in einem neuen Tab geöffnet.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "copybutton",
    title : "Copy Button",
    info : "Zeigt einen Button zum kopieren des Releasenamen.",
    active : true
};
xrelOptions.push(newEngine);


// SearchEngine Description

/*
newEngine = {
    id : "unique search id",
    title : "display search name",
    baseUrl : "main url address",
    icon : "set image (use url to image, or use base64 to save the image local in script",
    method : "get,post,mod,url (*description-method)",
    searchName : "search query",
    searchUrl : "serch url address",
    active : false/true
};
newEngine["modifyReleaseName"] = function(prodName/relName) { edit releasename or productname add or modify whit regex };   //optinal
searchEngines.push(newEngine);                                                                                              //end of search item whit releasename
productNameSearchEngines.push(newEngine);                                                                                   //end of search item whit productname

*description-method
   method : "get",  // open url whit searchUrl?searchName=
   method : "post", // open searchUrl > post releasename or productname to searchName
   method : "mod",  // open (get method) url whit searchUrl/releasename or productname
   method : "url",  // open (get method) url searchUrl

*/



// Release Name based search engines

// google.de
newEngine = {
    id : "googlede",
    title : "google.de",
    baseUrl : "https://www.google.de/",
    icon : "data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///zD9/f2W/f392P39/fn9/f35/f391/39/ZT+/v4uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Cf39/Zn///////////////////////////////////////////39/ZX///8IAAAAAAAAAAAAAAAA/v7+Cf39/cH/////+v35/7TZp/92ul3/WKs6/1iqOv9yuFn/rNWd//j79v///////f39v////wgAAAAAAAAAAP39/Zn/////7PXp/3G3WP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP+Or1j//vDo///////9/f2VAAAAAP///zD/////+vz5/3G3V/9TqDT/WKo6/6LQkf/U6cz/1urO/6rUm/+Zo0r/8IZB//adZ////v7///////7+/i79/f2Y/////4nWzf9Lqkj/Vqo4/9Xqzv///////////////////////ebY//SHRv/0hUL//NjD///////9/f2U/f392v////8sxPH/Ebzt/43RsP/////////////////////////////////4roL/9IVC//i1jf///////f391/39/fr/////Cr37/wW8+/+16/7/////////////////9IVC//SFQv/0hUL/9IVC//SFQv/3pnX///////39/fn9/f36/////wu++/8FvPv/tuz+//////////////////SFQv/0hUL/9IVC//SFQv/0hUL/96p7///////9/f35/f392/////81yfz/CrL5/2uk9v///////////////////////////////////////////////////////f392P39/Zn/////ks/7/zdS7P84Rur/0NT6///////////////////////9/f////////////////////////39/Zb+/v4y//////n5/v9WYu3/NUPq/ztJ6/+VnPT/z9L6/9HU+v+WnfT/Ul7t/+Hj/P////////////////////8wAAAAAP39/Z3/////6Or9/1hj7v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9sdvD////////////9/f2YAAAAAAAAAAD///8K/f39w//////5+f7/paz2/11p7v88Suv/Okfq/1pm7v+iqfX/+fn+///////9/f3B/v7+CQAAAAAAAAAAAAAAAP///wr9/f2d///////////////////////////////////////////9/f2Z/v7+CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f2Z/f392/39/fr9/f36/f392v39/Zj///8wAAAAAAAAAAAAAAAAAAAAAPAPAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAACAAQAAwAMAAPAPAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/g3+/v5X/f39mf39/cj9/f3q/f39+f39/fn9/f3q/f39yP39/Zn+/v5W////DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f2c/f399f/////////////////////////////////////////////////////9/f31/f39mv7+/iMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/gn9/f2K/f39+////////////////////////////////////////////////////////////////////////////f39+v39/Yf///8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4k/f390v////////////////////////////////////////////////////////////////////////////////////////////////39/dD///8iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////MP39/er//////////////////////////+r05v+v16H/gsBs/2WxSf9Wqjj/Vqk3/2OwRv99vWX/pdKV/97u2P////////////////////////////39/ej+/v4vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f3q/////////////////////+v15/+Pxnv/VKk2/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/36+Z//d7tf///////////////////////39/ej///8iAAAAAAAAAAAAAAAAAAAAAAAAAAD///8K/f390//////////////////////E4bn/XKw+/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1apN/+x0pv///////////////////////39/dD///8IAAAAAAAAAAAAAAAAAAAAAP39/Yv/////////////////////sdij/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/YKU1/8qOPv/5wZ////////////////////////39/YcAAAAAAAAAAAAAAAD+/v4l/f39+////////////////8Lgt/9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9utlT/n86N/7faqv+426v/pdKV/3u8ZP9UqDX/U6g0/3egN//jiUH/9IVC//SFQv/82MP//////////////////f39+v7+/iMAAAAAAAAAAP39/Z3////////////////q9Ob/W6w+/1OoNP9TqDT/U6g0/1OoNP9nskz/zOXC/////////////////////////////////+Dv2v+osWP/8YVC//SFQv/0hUL/9IVC//WQVP/++fb//////////////////f39mgAAAAD+/v4O/f399v///////////////4LHj/9TqDT/U6g0/1OoNP9TqDT/dblc//L58P/////////////////////////////////////////////8+v/3p3f/9IVC//SFQv/0hUL/9IVC//rIqf/////////////////9/f31////DP7+/ln////////////////f9v7/Cbz2/zOwhv9TqDT/U6g0/2KwRv/v9+z///////////////////////////////////////////////////////738//1kFT/9IVC//SFQv/0hUL/9plg///////////////////////+/v5W/f39nP///////////////4jf/f8FvPv/Bbz7/yG1s/9QqDz/vN2w//////////////////////////////////////////////////////////////////rHqP/0hUL/9IVC//SFQv/0hUL//vDn//////////////////39/Zn9/f3L////////////////R878/wW8+/8FvPv/Bbz7/y7C5P/7/fr//////////////////////////////////////////////////////////////////ere//SFQv/0hUL/9IVC//SFQv/718H//////////////////f39yP39/ez///////////////8cwvv/Bbz7/wW8+/8FvPv/WNL8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//rIqv/////////////////9/f3q/f39+v///////////////we9+/8FvPv/Bbz7/wW8+/993P3///////////////////////////////////////SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+cGf//////////////////39/fn9/f36////////////////B737/wW8+/8FvPv/Bbz7/33c/f//////////////////////////////////////9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/6xaX//////////////////f39+f39/e3///////////////8cwvv/Bbz7/wW8+/8FvPv/WdP8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vVv//////////////////9/f3q/f39y////////////////0bN/P8FvPv/Bbz7/wW8+/8hrvn/+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/cj9/f2c////////////////ht/9/wW8+/8FvPv/FZP1/zRJ6/+zuPf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39mf7+/lr////////////////d9v7/B7n7/yB38f81Q+r/NUPq/0hV7P/u8P3////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v5X////D/39/ff///////////////9tkPT/NUPq/zVD6v81Q+r/NUPq/2Fs7//y8v7////////////////////////////////////////////09f7//////////////////////////////////////////////////f399f7+/g0AAAAA/f39n////////////////+Tm/P89Suv/NUPq/zVD6v81Q+r/NUPq/1Bc7f/IzPn/////////////////////////////////x8v5/0xY7P+MlPP////////////////////////////////////////////9/f2cAAAAAAAAAAD+/v4n/f39/P///////////////7W69/81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9ZZe7/k5v0/6609/+vtff/lJv0/1pm7v81Q+r/NUPq/zVD6v+GjvL//v7//////////////////////////////f39+/7+/iQAAAAAAAAAAAAAAAD9/f2N/////////////////////6Cn9f81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v+BivL////////////////////////////9/f2KAAAAAAAAAAAAAAAAAAAAAP7+/gv9/f3V/////////////////////7W69/8+S+v/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/P0zr/7q/+P///////////////////////f390v7+/gkAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3r/////////////////////+Xn/P94gfH/NkTq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NkTq/3Z/8f/l5/z///////////////////////39/er+/v4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f3r///////////////////////////k5vz/nqX1/2p08P9IVez/OEbq/zdF6v9GU+z/aHLv/5qh9f/i5Pz////////////////////////////9/f3q////MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3V/////////////////////////////////////////////////////////////////////////////////////////////////f390v7+/iQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wr9/f2N/f39/P///////////////////////////////////////////////////////////////////////////f39+/39/Yv+/v4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4n/f39n/39/ff//////////////////////////////////////////////////////f399v39/Z3+/v4lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Dv7+/lr9/f2c/f39y/39/e39/f36/f39+v39/ez9/f3L/f39nP7+/ln+/v4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AA///AAD//AAAP/gAAB/wAAAP4AAAB8AAAAPAAAADgAAAAYAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAcAAAAPAAAAD4AAAB/AAAA/4AAAf/AAAP/8AAP//wAP/",
    method : "get",
    searchName : "as_q",
    searchUrl : "https://www.google.de/search",
    active : true
};
searchEngines.push(newEngine);


// product name based search engines
// [if the search of the page only works with product names, not release names!]

//youtube.de
newEngine = {
    id : "youtubede",
    title : "youtube.de",
    baseUrl : "https://youtube.de/",
    icon : "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAD/EAAA/0AAAP9AAAD/cAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/QAAA/0AAAP8Q////AP///wD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8AAAD/MAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/MAAA/1AAAP//AAD//wAA//8AAP//AAD//wAA//8QEP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//1BQ//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/gAAA//8AAP//AAD//wAA//8AAP//AAD/////////////wMD//yAg//8AAP//AAD//wAA//8AAP//AAD/gAAA/4AAAP//AAD//wAA//8AAP//AAD//wAA/////////////7Cw//8gIP//AAD//wAA//8AAP//AAD//wAA/4AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//0BA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/UAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/YAAA/zAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/zD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8A////AP///wAAAP8QAAD/QAAA/0AAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP9AAAD/QAAA/xD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAAD//wAA//8AAA==",
    method : "get",
    searchName : "search_query",
    searchUrl : "https://www.youtube.com/results",
    active : false
};
newEngine["modifyReleaseName"] = function(prodName) { return prodName + " Trailer" };
productNameSearchEngines.push(newEngine);

// build defaultPersistConfigObj
var defaultPersistConfigObj = {};
var xrelSearchKey = "xrelsearch6";

function fillUpDefaultPersistConfigObj(sEngines) {
    for (var i = 0; i < sEngines.length; i++) {
        var engine = sEngines[i];
        defaultPersistConfigObj[engine.id] = engine.active;
    }
}

fillUpDefaultPersistConfigObj(searchEngines);
fillUpDefaultPersistConfigObj(productNameSearchEngines);
fillUpDefaultPersistConfigObj(xrelOptions);

function fetchConfig() {
    var value = GM_getValue(xrelSearchKey, "__default");
    if(value == "__default") {
        return defaultPersistConfigObj;
    } else {
        return $.evalJSON(value);
    }
}

function saveConfig(config) {
    return GM_setValue(xrelSearchKey, $.toJSON(config));
}

// global vars
var xrelConfig = fetchConfig();
var initOption = [];
var timeoutID;

var productLinkLast;
var lastmatch;


$(document).ready(function() {

    GM_addStyle(".release_us {	background-position: top left !important; } .release_highlight {	background-position: top !important; } .getReleaseName, .xrelSeToggle {	cursor: pointer; } .release_options {	padding-top: 0px !important; } .release_options a img {	width:13px; } .release_options span img {	width:13px; getReleaseName} .nfo_title .getReleaseName { margin-left:5px; } .nfo_title .getReleaseName img { width:16px; vertical-align: sub; }");
    GM_addStyle("#xrelAdvMenu { text-align: left; -moz-box-shadow: 0 0 5px #888; -webkit-box-shadow: 0 0 5px #888; box-shadow: 0 0 5px #888; position: fixed; top:0px; left:-160px; padding: 10px; width: 150px; min-height: 50px; height: auto; background-color: rgba(255,255,255,0.9); z-index:100; } .xrelAdvMenuConfig, .xrelAdvMenuSearch { margin-bottom: 10px }");
    GM_addStyle(".infobox {	display:none;	position:absolute;	border:1px solid #333;	background-color:#161616;	border-radius:5px;	padding:10px;	color:#fff;	font-size:12px Arial; z-index:101; }");

    GM_addStyle('.dropdown-titel { background: url(/static/img/bg/sidebar_top.jpg) no-repeat; line-height: 30px; height: 30px; width: 210px; display: none; position: absolute; color: #fff;background-color: #fff; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); z-index: 1;}')
    GM_addStyle('.dropdown-content {line-height: 20px; width: 180px; border-style: solid; border-width: 5px; border-color: #f2f1f1; padding: 0 0 0 20px; color: #000; background-color: #fff; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9);}')
    GM_addStyle('.dropdown-content a:hover {background-color: #ffffff;}')
    GM_addStyle('.dropdown:hover .dropdown-titel {display: block;}')

    GM_addStyle ('#HoverCover { position: fixed; z-index: 2; background-position: center; background-repeat: no-repeat; display: none; background-color: #f2f1f1; border-style: solid; border-width: 6px; border-color: #f2f1f1; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); background-image: url(https://www.xrel.to/static/img/dummy-cover-dark.jpg); width: 120px; height: 170px;}');
    GM_addStyle ('#HoverCover>div { display: inline-block; }');

    if (xrelConfig.darkmode) {
        darkmode();
        initOption.darkmode = true;
    } else {
        initOption.darkmode = false;
    }

    if (xrelConfig.searchbars) {
        searchBars();
        initOption.searchbars = true;
    } else {
        initOption.searchbars = false;
    }

    if (xrelConfig.searchbarsall) {
        searchBarsall();
        initOption.searchbarsall = true;
    } else {
        initOption.searchbarsall = false;
    }

    if (xrelConfig.actorimages) {
        actorImages();
        initOption.actorimages = true;
    } else {
        initOption.actorimages = false;
    }

    if (xrelConfig.quickcover) {
        quickcover(true);
        initOption.quickcover = true;
    } else {
        initOption.quickcover = false;
    }

    if (xrelConfig.quickfilter) {
        quickfilter();
        initOption.quickfilter = true;
    } else {
        initOption.quickfilter = false;
    }

    if (xrelConfig.expandedtrailers) {
        expandTrailers();
        initOption.expandedtrailers = true;
    } else {
        initOption.expandedtrailers = false;
    }
    if (xrelConfig.copybutton) {
        copyButton();
        initOption.copybutton = true;
    } else {
        initOption.copybutton = false;
    }
    if (!xrelConfig.newtab) {
        initOption.newtab = false;
    }

    // config panel
    // ##################################################################

    $("html body h1:contains('xREL')").parent().prepend('<div id="xrelAdvMenu"></div>');
    //-moz-border-bottom-right-radius: 10px; border-bottom-right-radius: 10px;

    var hidden;
    if(!xrelConfig.searchbars) {
        hidden = "display: none;";
    }

    $('#xrelAdvMenu').append('<div class="xrelAdvMenuConfig"><b>Options</b><br>' + buildActivatorElements(xrelOptions) + '</div><div data-id="searchbars" style="'+ hidden +'"><div class="xrelAdvMenuSearch"><b>Release Name Based</b><br>' + buildActivatorElements(searchEngines) + '</div><div class="xrelAdvMenuNameSearch"><b>Product Name Based</b><br>' + buildActivatorElements(productNameSearchEngines) + '</div></span>');

    $('#xrelAdvMenu .xrelSeCheckbox, .xrelOptionCheckbox').each(function() {
        var id = $(this).attr('value');
        if(xrelConfig[id])
            $(this).attr('checked', true);
        else
            $(this).attr('checked', false);
    });

    $('#xrelAdvMenu').hover(function() {
        window.clearTimeout(timeoutID);
        showConfigPanel();
    }, function() {
        timeoutID = window.setTimeout(hideConfigPanel, 500);
    });

    // add events to elements
    $('#xrelAdvMenu input').change(function() {
        var config = {};

        // reload page if darkmode disable (unstabel)
        $('input.xrelOptionCheckbox:checked').change(function() {
            var id = $(this).attr('id');
            if ( id == 'darkmode') {
                if (initOption.darkmode == true) {
                    config[id] = false;
                    xrelConfig[id] = false;
                    initOption[id] = false;
                    saveConfig(config);
                    location.reload();
                }

            }
        });


        $('input.xrelSeCheckbox,input.xrelOptionCheckbox:not(checked)').each(function() {
            var id = $(this).attr('id');
            config[id] = false;
            xrelConfig[id] = false;

            if ( id == 'expandedtrailers' || id == 'quickcover' ) {
                if ( id == 'expandedtrailers' ) expandTrailers(true);
                if ( id == 'quickcover' ) quickcover(false);
            } else {
                $('[data-id="'+ id +'"]').hide();
            }
        });

        $('input.xrelSeCheckbox:checked').each(function() {
            var id = $(this).attr('id');
            config[id] = true;
            xrelConfig[id] = true;

            $('[data-id="'+ id +'"]').show();
        });

        $('input.xrelOptionCheckbox:checked').each(function() {
            var id = $(this).attr('id');
            config[id] = true;
            xrelConfig[id] = true;

            if (id == 'expandedtrailers')
                expandTrailers();
            if (id == 'quickcover')
                quickcover(true);

            if ( !initOption[id] ) {
                if (id == 'darkmode')
                    darkmode();
                if (id == 'searchbars')
                    searchBars();
                if (id == 'searchbarsall')
                    searchBarsall();
                if (id == 'quickfilter')
                    quickfilter();
                if (id == 'actorimages')
                    actorImages();
                if (id == 'copybutton')
                    copyButton();
            }

            $('[data-id="'+ id +'"]').show();

            initOption[id] = true;
        });

        saveConfig(config);
    });


    // Show Cover at Mouse on productName
    // ##################################################################

    $("html body h1:contains('xREL')").parent().prepend('<div id="HoverCover"></div>');


    function quickcover(enable) {
        if ( enable == true) {
            $('div.release_title > a').bind (
                "mouseenter mouseleave", HoverCover
            );

            $('div.release_title_p2p > a').bind (
                "mouseenter mouseleave", HoverCover
            );
        } else {
            $('div.release_title > a').unbind (
                "mouseenter mouseleave", HoverCover
            );

            $('div.release_title_p2p > a').unbind (
                "mouseenter mouseleave", HoverCover
            );
        }
    }

    function HoverCover(e) {
        var titleSpan = $(this);

        var productName;
        var productLink = titleSpan.parent().children('a').first();

        const div = document.getElementById('HoverCover');
        if (e.type == 'mouseenter') {
            div.style.display = 'block';
            div.style.left = e.clientX+'px';
            div.style.top = e.clientY+'px';

            if (productLinkLast == productLink[0]) {
                div.style.backgroundImage = 'url(' + lastmatch + ')';
            } else {
                $(function(){
                    $.get(productLink[0], function(result){
                        var re = /https:\/\/uploads.xrel.to\/img_cover\/(.*)-full\.JPG\"/;
                        //var re = /<img src=\"https:\/\/uploads.xrel.to\/img_cover\/(.*)\.JPG\"/;
                        var matches = re.exec(result);
                        if (matches == null) {
                            var re = /<img src=\"https:\/\/uploads.xrel.to\/img_cover\/(.*)\.JPG\"/;
                            var matches = re.exec(result);
                        }
                        if (matches != null) {
                            div.style.backgroundImage = 'url(https://uploads.xrel.to/img_cover/' + matches[1] + '.JPG)';
                            lastmatch = 'https://uploads.xrel.to/img_cover/' + matches[1] + '.JPG)';
                        } else {
                            if (initOption.darkmode == true) {
                                div.style.backgroundImage = 'url(https://www.xrel.to/static/img/dummy-cover-dark.jpg)';
                                lastmatch = 'https://www.xrel.to/static/img/dummy-cover-dark.jpg';
                            } else {
                                div.style.backgroundImage = 'url(https://www.xrel.to/static/img/dummy-cover.jpg)';
                                lastmatch = 'https://www.xrel.to/static/img/dummy-cover.jpg';
                            }
                        }
                        productLinkLast = productLink[0];
                    });
                });
            }
        } else {
            div.style.display = 'none';
        }
    }

    // Make links open in a new tab
    // ##################################################################

    $('a, area').on("click", function() {
        if (xrelConfig.newtab) {
            var href = $(this).prop('href');
            if(href.indexOf('xrel.to') < 1 || href.indexOf('derefer') > -1) {
                $(this).attr('target', '_blank');
            }
        } else {
            $(this).attr('target', '_self');
        }
    });

    // Tooltip
    // ##################################################################

    $('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="infobox"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.infobox').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 10; //Get X coordinates
        var mousey = e.pageY + 5; //Get Y coordinates
        $('.infobox')
            .css({ top: mousey, left: mousex });
    });

    // functions
    // ##################################################################

    function showConfigPanel() {
        $('#xrelAdvMenu').css('left', '0px');
    }

    function hideConfigPanel() {
        $('#xrelAdvMenu').css('left', '-160px');
    }

    function buildActivatorElements(sEngines) {
        var text = "";
        for (var i = 0; i < sEngines.length; i++) {
            var engine = sEngines[i];

            if (engine.icon) {
                text += '<input class="xrelSeCheckbox" id="' + engine.id + '" type="checkbox" name="' + engine.id + '" value="' + engine.id + '" />&nbsp;<img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" />&nbsp;<a href="' + engine.baseUrl + '">' + engine.title + '<a /><br /> ';
            } else {
                text += '<span class="masterTooltip" title="'+ engine.info +'"><input class="xrelOptionCheckbox" id="' + engine.id + '" type="checkbox" name="' + engine.id + '" value="' + engine.id + '" />&nbsp;' + engine.title + '</span><br />';
            }
        }
        return text;
    }

    function createIcon(relName, sEngines) {
        var links = "";

        for (var i = 0; i < sEngines.length; i++) {
            var engine = sEngines[i];
            var hidden = "";
            var relNameMod;
            if(!xrelConfig[engine.id]) {
                hidden = "display: none;";
            }

			if(engine.modifyReleaseName) {
                relNameMod = engine.modifyReleaseName(relName);
            } else {
                relNameMod = relName;
            }

            links += '<span style="' + hidden + '" class="xrelSeToggle" data-id="' + engine.id + '" data-rel="' + relNameMod + '"><img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" />&nbsp;</span>';
        }

        return links;
    }

    function createIconAll(relName, sEngines) {
        var alllinks = "";

        for (var i = 0; i < sEngines.length; i++) {
            var engine = sEngines[i];
            var relNameMod;


			if(engine.modifyReleaseName) {
                relNameMod = engine.modifyReleaseName(relName);
            } else {
                relNameMod = relName;
            }

            alllinks += '<span style="display: inline"; class="xrelSeToggle" data-all="' + engine.id + '" data-rel="' + relNameMod + '"><img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" /> &nbsp; ' + engine.title + ' </span><br>';
        }

        return alllinks;
    }

    function openUrl(id, rel) {
        var sEngine = getObjects(searchEngines, 'id', id);
        if ($.isEmptyObject(sEngine[0])) {
            sEngine = getObjects(productNameSearchEngines, 'id', id);
        }

        if (sEngine[0].method == "mod") {
            var mod = sEngine[0].searchUrl + rel;
            window.open(mod);
        } else if (sEngine[0].method == "url") {
            var url = sEngine[0].searchUrl.replace(/%s/, rel);
            window.open(url);
        } else if (sEngine[0].hasOwnProperty("tokenName")) {
            GM_xmlhttpRequest({
                method: "GET",
                url: sEngine[0].tokenUrl,
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                onload: function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            createForm(sEngine, rel, $(this.responseText).find('input[name='+sEngine[0].tokenName+']').attr('value'));
                        } else {
                            if (confirm("Auf "+ sEngine[0].id +" wechseln?")) {
                                window.open(sEngine[0].baseUrl);
                            }
                        }
                    }
                }
            });
        } else {
            createForm(sEngine, rel);
        }
    }

    // get token for post requests [experimental]
    function createForm(engine, rel, token) {
        var form = document.createElement("form");
        var hiddenField;

        form.setAttribute("method", engine[0].method);
        form.setAttribute("action", engine[0].searchUrl);
        form.setAttribute("target", "_blank");

        hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", engine[0].searchName);
        hiddenField.setAttribute("value", rel);
        form.appendChild(hiddenField);

        if (engine[0].searchParm) {
            hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", engine[0].searchParm);
            hiddenField.setAttribute("value", engine[0].searchParmValue);
            form.appendChild(hiddenField);
        }

        if (engine[0].tokenName) {
            hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", engine[0].tokenName);
            hiddenField.setAttribute("value", token);
            form.appendChild(hiddenField);
        }

        document.body.appendChild(form);
        form.submit();
    }

    // add search engines to releases
    function searchBars() {
        GM_addStyle(".release_item {	height: auto !important; overflow: hidden !important; } ");

        // release list (add a collectr icon to the rel-list)
        $('div.release_title > a.sub').each(function() {
            var titleSpan = $(this);
            var relName;
            var productName;
            var productLink = titleSpan.parent().children('a').first();

            if(titleSpan.hasClass("extdirname") && titleSpan.is("[title]")) {
                relName = titleSpan.attr('title');
            } else {
                relName = titleSpan.text();
            }

            if(productLink.is("[title]")) {
                productName = productLink.attr('title');
            } else {
                productName = productLink.text();
            }

            titleSpan.parent().prepend('<span data-id="searchbars">' + createIcon(productName, productNameSearchEngines) + createIcon(relName, searchEngines) + '</span>' );
        });

        $('div.release_title_p2p > a.sub').each(function() {
            var titleSpan = $(this);
            var relName;
            var productName;
            var productLink = titleSpan.parent().children('a').first();

            if(titleSpan.hasClass("extdirname") && titleSpan.is("[title]")) {
                relName = titleSpan.attr('title');
            } else {
                relName = titleSpan.text();
            }

            if(productLink.is("[title]")) {
                productName = productLink.attr('title');
            } else {
                productName = productLink.text();
            }

            titleSpan.parent().prepend('<span data-id="searchbars">' + createIcon(productName, productNameSearchEngines) + createIcon(relName, searchEngines) + '</span>' );
        });

        $('div.dirname-truncated > a.sub').each(function() {
            var titleSpan = $(this);
            var relName;
            var productName;
            var productLink = titleSpan.parent().parent().children('a').first();

            if(titleSpan.is("[title]")) {
                relName = titleSpan.attr('title');
            } else {
                relName = titleSpan.text();
            }

            if(productLink.is("[title]")) {
                productName = productLink.attr('title');
            } else {
                productName = productLink.text();
            }

            titleSpan.parent().parent().prepend('<span data-id="searchbars">' + createIcon(productName, productNameSearchEngines) + createIcon(relName, searchEngines) + '</span>' );
        });

        // nfo view (add a collectr icon to the nfo view title)
        $('div.nfo_title div span.sub').each(function() {
            var titleSpan = $(this);
            var relName = titleSpan.text();
            var productLink = $('#release_tools_content a').eq(1).attr("href");
            var productName = productLink.replace(/.*\/(.+)\.html$/g, "$1").replace(/-/g, ' ');

            titleSpan.parent().after( '<div style="float:left;" data-id="searchbars">&nbsp;' + createIcon(productName, productNameSearchEngines) + createIcon(relName, searchEngines) + '</div>' );
        });

        // product information (add a collectr icon to the title)
        $('#extinfo_title h3').each( function() {
            $(this).append( '<span data-id="searchbars">&nbsp;' + createIcon($(this).text(), productNameSearchEngines) + '</span>' );
        });

        $('.xrelSeToggle').on("click" ,function() {
            openUrl($(this).data('id'), $(this).data('rel'));
        });
    }

    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) {
                continue;
            }

            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));
            }
            else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    }

    // add all search engines to releases
    function searchBarsall() {
        var searchallimg = 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAA3JJREFUWIXlV8tu00AUPTNOJ9QJtJTS8C60dYQoAqRSJCDwASzYs6/EohJ/wYIFG6Su+vgBdvAJFAlRugOU1s4LaBFFiSCkTpUZe1gUR449zoNGbLjSyL72nXvOPXM1YwP/uxG/s7S0NKJp2jMp5X3HcQ73E0jTtF+EkBeO4zyam5urhAgsLCwkdV3Pzs7OpgzDiDHG+omPRqMB0zTF2traN9u2L87Pz9cAIOYFJBKJpzMzM8cNw4hVKhVwzvcZEtJybTIP+AAgpVT6UkowxmAYRkxKeXx9ff0pgIcAQL1g13UfpNNp5oETQpSDUgpKac/vOOeoVCpIp9PMdd0HHm5TAcdxDjPGIIRomRisVlV5lBFCIKVsXoUQYIzB318x1aQgcDfL4JffA1TlDtpfE1CRUYF2so4EelkGP4mg/H0j0KkHelWiZwK1Wg2lUgHlShmNRgOH4odwdGQEZ06fxfDwcAigWCpg/Nz5gxHw/GKxAMsy4Uq3GV/fq6O+vYXt7S2cPHkK05emoWkxSCmRy1nI5S2cH79wcAL5Qg6muRmZCAC+ft1GtfoT12duoFQqolgqtOTrikCQCCEEP37+gGWZ+xNiMTAWx95eXbnWu7u7eP36FYQjWnIB4Z1SSUC1i21uZsEYw/Sly0ilToBSCs45Pn/+BMsyQ2CO64Rydq1AELy2W4Nt27h1MwNd15vJ4vE4pqYMjKVSePfuLer1emgz8qpuR4AGHwQJbG19wdUr15BIJJTqDB0ZQub2HQwMDCjXOxjfUYHgREopxsZSoWR+s3JW8/T04qLU6FoBz46NjCor8caHj+9RLIa7XVVt1wr4k42OjiqBAaBQyGNnZweJRLKluuB9z03ov4863wkhmJycwuTkVAuYariuG4Rpr4CKjOervhVUa9vN8QwoeqAduComqru7mQ+06YFOfhR4u8pVJCIV+FfWJKBp2i8hBDRNi/y69fv+BvP77eZRSiGEAKW0FiLguu5z0zS5ruuRJHodQfDBwUFYlsVt234JoPXHJ5PJnFteXv6WzWYF51z22zjncmNjQywuLn6fmJiYBTAG+JpwdXW1yjm/V61WHyeTybsABqPW7W+MUlovl8tvVlZWnuTz+SqAPaD135AAGAYwBEAHwALvD2oCgAvABvAdQC1IwE9kAPvq9JuA8+fatN+KpBVu0I1JFQAAAABJRU5ErkJggg==" width="14" height="14"';
        $('div.release_title > a.sub').each(function() {
            var titleSpan = $(this);
            var relName;
            var productName;
            var productLink = titleSpan.parent().children('a').first();

            if(titleSpan.hasClass("extdirname") && titleSpan.is("[title]")) {
                relName = titleSpan.attr('title');
            } else {
                relName = titleSpan.text();
            }

            if(productLink.is("[title]")) {
                productName = productLink.attr('title');
            } else {
                productName = productLink.text();
            }

            var searchhtml = '<div data-id="searchbarsall" class="dropdown"><img src= "' + searchallimg + '"><div class="dropdown-titel"> &nbsp; &nbsp; &nbsp; Release-Suche<div class="dropdown-content">Suchen nach:<br><div style="font-size:10px; max-width: 160px; white-space: nowrap; overflow: hidden; text-overflow:ellipsis;">' + productName + '<br>' + relName + '</div><br>' + createIconAll(productName, productNameSearchEngines) + createIconAll(relName, searchEngines) + '<br></div></div></div>';
            titleSpan.parent().parent().find('.release_options').append(searchhtml);
        });

        $('div.release_title_p2p > a.sub').each(function() {
            var titleSpan = $(this);
            var relName;
            var productName;
            var productLink = titleSpan.parent().children('a').first();

            if(titleSpan.hasClass("extdirname") && titleSpan.is("[title]")) {
                relName = titleSpan.attr('title');
            } else {
                relName = titleSpan.text();
            }

            if(productLink.is("[title]")) {
                productName = productLink.attr('title');
            } else {
                productName = productLink.text();
            }

            var searchhtml = '<div data-id="searchbarsall" class="dropdown"><img src= "' + searchallimg + '"><div class="dropdown-titel"> &nbsp; &nbsp; &nbsp; Release-Suche<div class="dropdown-content">Suchen nach:<br><div style="font-size:10px; max-width: 160px; white-space: nowrap; overflow: hidden; text-overflow:ellipsis;">' + productName + '<br>' + relName + '</div><br>' + createIconAll(productName, productNameSearchEngines) + createIconAll(relName, searchEngines) + '<br></div></div></div>';
            titleSpan.parent().parent().find('.release_options').append(searchhtml);
        });

        $('div.dirname-truncated > a.sub').each(function() {
            var titleSpan = $(this);
            var relName;
            var productName;
            var productLink = titleSpan.parent().parent().children('a').first();

            if(titleSpan.is("[title]")) {
                relName = titleSpan.attr('title');
            } else {
                relName = titleSpan.text();
            }

            if(productLink.is("[title]")) {
                productName = productLink.attr('title');
            } else {
                productName = productLink.text();
            }

            var searchhtml = '<div data-id="searchbarsall" class="dropdown"><img src= "' + searchallimg + '"><div class="dropdown-titel"> &nbsp; &nbsp; &nbsp; Release-Suche<div class="dropdown-content">Suchen nach:<br><div style="font-size:10px; max-width: 160px; white-space: nowrap; overflow: hidden; text-overflow:ellipsis;">' + productName + '<br>' + relName + '</div><br>' + createIconAll(productName, productNameSearchEngines) + createIconAll(relName, searchEngines) + '<br></div></div></div>';
            titleSpan.parent().parent().parent().find('.release_options').append(searchhtml);
        });

        // nfo view (add a collectr icon to the nfo view title)
        $('div.nfo_title div span.sub').each(function() {
            var titleSpan = $(this);
            var relName = titleSpan.text();
            var productLink = $('#release_tools_content a').eq(1).attr("href");
            var productName = productLink.replace(/.*\/(.+)\.html$/g, "$1").replace(/-/g, ' ');

            var searchhtml = '<div style="float:left;" data-id="searchbarsall" class="dropdown"><img src= "' + searchallimg + '"><div class="dropdown-titel"> &nbsp; &nbsp; &nbsp; Release-Suche<div class="dropdown-content">Suchen nach:<br><div style="font-size:10px; max-width: 160px; white-space: nowrap; overflow: hidden; text-overflow:ellipsis;">' + productName + '<br>' + relName + '</div><br>' + createIconAll(productName, productNameSearchEngines) + createIconAll(relName, searchEngines) + '<br></div></div></div>';
            titleSpan.parent().append( '<div style="float:left;" data-id="searchbars">&nbsp;' + searchhtml + '</div>' );
        });

        $('.xrelSeToggle').on("click" ,function() {
            openUrl($(this).data('all'), $(this).data('rel'));
        });

    }

    // Add Quick Filtermenue
    function quickfilter() {
        if (window.location.pathname.match(/^\/p2p\/.*\/releases\.html/) || window.location.pathname.match(/^\/p2p\/releases\.html/) || window.location.pathname.match(/^\/releases\.html/) || window.location.pathname.match(/^\/home\.html/) || window.location.pathname.match(/^\/.*-release-list\.html/)) {
            if (window.location.search.match(/^\?search_results\=.*/)) {
                document.getElementById("rls_filter_selection").outerHTML = '<div id="rls_filter_box" style="display:none;"><br></div><div id="rls_filter_selection"> <div id="rls_filter_menu" class="std_filter_bg"> <div class="std_filter_bg_left"></div> <div class="std_filter_bg_right"> Filter: <a href="#" id="open_rls_filter_mnu_link" style="padding-left: 10px;"> Quick Filter <img src="/static/img/icons/filter_arrow.gif" alt="" style="padding-left: 10px;"></a> </div> <div class="clear"></div> </div>  </div>';
                xreljs();
            }
            if (window.location.pathname.match(/^\/p2p\/.*/)) {
                document.getElementsByClassName("article_cat")[0].outerHTML = '<div class="article_cat"> Non-Scene-Releases </div><div id="rls_filter_box" style="display:none;"><br></div><div id="rls_filter_selection"> <div id="rls_filter_menu" class="std_filter_bg"> <div class="std_filter_bg_left"></div> <div class="std_filter_bg_right"> Filter: <a href="#" id="open_rls_filter_mnu_link" style="padding-left: 10px;"> Quick Filter <img src="/static/img/icons/filter_arrow.gif" alt="" style="padding-left: 10px;"></a> </div> <div class="clear"></div> </div>  </div>';
                xreljs();
            }

            // Constants
            {
                var ID_DIV_HEADER = "idDivHeader";
                var ID_DIV_CONTENT = "idDivContent";

                var KEY_FILTER_MASTERSWITCH = "filterMasterSwitch";
                var KEY_FILTER_HIDE = "hideFilter";
                var KEY_HIDE_NEW_COMMENTS = "hideNewComments";

                var DEFAULT_FILTER_STATUS = false;
            }

            // Variables, settings
            {
                var HIDE_FILTER_DEFAULT = true;
                var HIDE_NEW_COMMENTS_DEFAULT = false;
                var HIDE_BOTTOM_CLEARFIX = false; // autimatically deactivated if there more than one page
                var HIDE_BOTTOM_BANNER = false;

                var FILTER_US_RELEASE = false;
                var FILTER_SEASON_WHITELIST = [
                ]
                var FILTER_GROUP_WHITELIST = [
                ]

                var filter_MasterSwitch = GM_getValue(KEY_FILTER_MASTERSWITCH, DEFAULT_FILTER_STATUS);

                var contentDivStyleDisplay;
                var commentDivStyleDisplay;

                var FILTERS = {
                    CATEGORIES : {
                        name : "Category",
                        VALUE : {
                            //XVID  : {name: 'XviD', key: "filterCatXvid", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.XVID);}},
                            //SVCD  : {name: '(S)VCD', key: "filterCat(S)VCD", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.SVCD);}},
                            //DVD : {name: 'DVD-R', key: "filterCatDvd", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.DVD);}},
                            //MDVDR : {name: 'MDVDR', key: "filterCatMDVDR", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.MDVDR);}},
                            X264 : {name: 'x264', key: "filterCatX264", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.X264);}},
                            HDTV : {name: 'HDTV', key: "filterCatHdtv", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.HDTV);}},
                            COMPLETEHD : {name: 'Compl. HD', key: "filterCatCompleteHd", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.COMPLETEHD);}},
                            UHD : {name: 'Ultra HD', key: "filterCatUltra HD", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.UHD);}},
                            SERIE : {name: 'Serie', key: "filterCatSerie", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.SERIE);}},
                            DOKU : {name: 'Doku', key: "filterCatDoku", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.DOKU);}},
                            //SPORT : {name: 'Sport', key: "filterCatSport", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.SPORT);}},
                            //SHOW : {name: 'Show', key: "filterCatShow", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.SHOW);}},
                            //OMU : {name: 'OmU', key: "filterCatOmU", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.OMU);}},
                            //XXX : {name: 'XXX', key: "filterCatXXX", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.XXX);}},
                            //WINDOWS : {name: 'Windows', key: "filterCatWindows", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.WINDOWS);}},
                            //MACOS : {name: 'Mac OS', key: "filterCatMac OS", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.MACOS);}},
                            //UNIX : {name: 'Linux', key: "filterCatLinux", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.UNIX);}},
                            //SOFTWARE : {name: 'Software', key: "filterCatSoftware", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.SOFTWARE);}},
                            //ELEARN : {name: 'E-Learn', key: "filterCatE-Learn", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.ELEARN);}},
                            //ADDON : {name: 'Add-On', key: "filterCatAdd-On", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.ADDON);}},
                            //PS1 : {name: 'PS1', key: "filterCatPS1", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.PS1);}},
                            //PS2 : {name: 'PS2', key: "filterCatPS2", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.PS2);}},
                            //PS3 : {name: 'PS3', key: "filterCatPS3", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.PS3);}},
                            //PS4 : {name: 'PS4', key: "filterCatPS4", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.PS4);}},
                            //PS5 : {name: 'PS5', key: "filterCatPS5", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.PS5);}},
                            //PSP : {name: 'PSP', key: "filterCatPSP", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.PSP);}},
                            //NDS : {name: 'NDS', key: "filterCatNDS", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.NDS);}},
                            //NS : {name: 'NSwitch', key: "filterCatNSwitch", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.NS);}},
                            //WII : {name: 'Wii', key: "filterCatWii", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.WII);}},
                            //WIIEMU : {name: 'Wii-Emu', key: "filterCatWii-Emu", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.WIIEMU);}},
                            //XBOX : {name: 'XBOX', key: "filterCatXBOX", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.XBOX);}},
                            //XBOXONE : {name: 'Xbox One', key: "filterCatXbox One", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.XBOXONE);}},
                            //XBOX360 : {name: 'Xbox 360', key: "filterCatXbox 360", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.XBOX360);}},
                            //X360DLC : {name: 'X360-DLC', key: "filterCatX360-DLC", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.X360DLC);}},
                            //GAMECUBE : {name: 'GameCube', key: "filterCatGameCube", func: function(){onCheckboxClick(FILTERS.CATEGORIES.VALUE.GAMECUBE);}}
                        }
                    },
                    TYPES : {
                        name : "Type",
                        VALUE : {
                            TELESYNC : {name: 'TeleSync', key: "filterTypeTeleSync", func: function(){onCheckboxClick(FILTERS.TYPES.VALUE.TELESYNC);}},
                            WEBRIP : {name: 'Web-Rip', key: "filterTypeWebRip", func: function(){onCheckboxClick(FILTERS.TYPES.VALUE.WEBRIP);}},
                            DVDRIP : {name: 'DVD-Rip', key: "filterTypeDvdRip", func: function(){onCheckboxClick(FILTERS.TYPES.VALUE.DVDRIP);}},
                            DVDSCR : {name: 'DVD-Scr.', key: "filterTypeDvdScr", func: function(){onCheckboxClick(FILTERS.TYPES.VALUE.DVDSCR);}},
                            DVD : {name: 'DVD-R', key: "filterTypeDvd", func: function(){onCheckboxClick(FILTERS.TYPES.VALUE.DVD);}},
                            HDTV : {name: 'HDTV', key: "filterTypeHdtv", func: function(){onCheckboxClick(FILTERS.TYPES.VALUE.HDTV);}},
                            BLURAY : {name: 'Blu-ray', key: "filterTypeBluray", func: function(){onCheckboxClick(FILTERS.TYPES.VALUE.BLURAY);}}
                        }
                    },
                    RLSNAME : {
                        name : "Rls.-Name",
                        VALUE : {
                            BDRIP : {name: 'SD', searchtext: /\..*Rip\./i, key: "filterRlsnameBdRip", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.BDRIP);}},
                            P720 : {name: '720p', searchtext: /\.720p\./i, key: "filterRlsname720p", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.P720);}},
                            P1080 : {name: '1080p', searchtext: /\.1080p\./i, key: "filterRlsname1080p", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.P1080);}},
                            P2160 : {name: '2160p', searchtext: /\.2160p\./i, key: "filterRlsname2160p", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.P2160);}},
                            X264 : {name: 'X264', searchtext: /(\.h|x264)/i, key: "filterRlsnameX264", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.X264);}},
                            AVC : {name: 'AVC', searchtext: /\.AVC/i, key: "filterRlsnameAVC", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.AVC);}},
                            COMPLETEBLURAY : {name: 'Comp.BD', searchtext: /\.Complete\.Bluray/i, key: "filterRlsnameCompleteBluRay", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.COMPLETEBLURAY);}},
                            COMPLETEUHDBLURAY : {name: 'Comp.UHD', searchtext: /\.Complete\.UHD\.Bluray/i, key: "filterRlsnameCompleteBluRay", func: function(){onCheckboxClick(FILTERS.RLSNAME.VALUE.COMPLETEUHDBLURAY);}}
                        }
                    }
                };
            }

            drawUi();
            filterReleases();

            // Filter function
            function filterReleases() {
                var releases = getReleases();

                // Remove the filtering
                for (i = 0; i < releases.length; i++)
                    removeFiltering(releases[i]);

                // Filter
                if(filter_MasterSwitch)
                {
                    var releasesToRemove = [];

                    // Outside filter loop (releases)
                    for (i = 0; i < releases.length; i++) {
                        // Remove the filtering
                        removeFiltering(releases[i]);

                        // Inside filter loop (filtertypes, filters)
                        for (var t in FILTERS){
                            var filtertype = FILTERS[t];
                            for (var f in filtertype.VALUE){
                                var filter = filtertype.VALUE[f];
                                if(filter.bool){
                                    if(isRelease(releases[i], filtertype.name, filter)){
                                        releasesToRemove.push(releases[i]);
                                        break;
                                    }
                                }
                            }
                            // Break the (filtertypes) loop if the releases is already marked to remove
                            var releasesToRemoveLength = releasesToRemove.length;
                            if (releasesToRemoveLength > 0 && releasesToRemove[releasesToRemoveLength-1] == releases[i])
                                break;
                        }

                        // US-Release filter
                        if (typeof FILTER_US_RELEASE !== 'undefined' && FILTER_US_RELEASE) {
                            if (releases[i].className == "release_item release_us") {
                                releasesToRemove.push(releases[i]);
                                continue;
                            }
                        }

                        // Season filter
                        if (typeof FILTER_SEASON_WHITELIST !== 'undefined' && FILTER_SEASON_WHITELIST.length > 0 && window.location.pathname.search(/\/tv\//i) != -1) {
                            if (!isReleaseSeason(releases[i], FILTER_SEASON_WHITELIST)) {
                                releasesToRemove.push(releases[i]);
                                continue;
                            }
                        }

                        // Group filter
                        if (typeof FILTER_GROUP_WHITELIST !== 'undefined' && FILTER_GROUP_WHITELIST.length > 0) {
                            if (!isReleaseByGroup(releases[i], FILTER_GROUP_WHITELIST)) {
                                releasesToRemove.push(releases[i]);
                                continue;
                            }
                        }
                    }

                    // Remove the releases in releasesToRemove[]
                    for (i = 0; i < releasesToRemove.length; i++) {
                        releasesToRemove[i].style.display = 'none';
                        releasesToRemove[i].nextElementSibling.style.display = 'none';
                    }
                }
            }

            // Parses the release elements from the whole page
            function getReleases() {
                var releasesOdd = document.getElementsByClassName('release_item release_odd');
                var releasesEven = document.getElementsByClassName('release_item release_even');
                var releasesUS = document.getElementsByClassName('release_item release_us');
                var releasesHighlight = document.getElementsByClassName('release_item release_highlight');
                var allReleases = [];
                allReleases.push.apply(allReleases, releasesOdd);
                allReleases.push.apply(allReleases, releasesEven);
                allReleases.push.apply(allReleases, releasesUS);
                allReleases.push.apply(allReleases, releasesHighlight);
                return allReleases;
            }

            function isRelease(release, filtertypename, filter) {
                switch (filtertypename){
                    case FILTERS.TYPES.name: {return isReleaseType(release, filter.name)};
                    case FILTERS.CATEGORIES.name: {return isReleaseCat(release, filter.name)};
                    case FILTERS.RLSNAME.name: {return isReleaseName(release, filter.searchtext)};
                }
            }

            function isReleaseType(release, type) {
                var release_type = release.getElementsByClassName('release_type') [0];
                return release_type.firstChild.textContent == type;
            }

            function isReleaseCat(release, cat) {
                var release_cat = release.getElementsByClassName('release_cat') [0];
                var sub = release_cat.getElementsByClassName('sub') [0];
                var span = sub.getElementsByTagName('span') [0];
                return span.textContent == cat;
            }

            function isReleaseName(release, filter) {
                var release_title = release.getElementsByClassName('release_title') [0];
                var sub = release_title.getElementsByClassName('sub') [0];
                var title = sub.getAttribute("title");
                if (title == null) {
                    var title = sub.lastChild.textContent;
                }
                if ( title.search('\(S[0-9][0-9] E[0-9][0-9]\)') == true) {
                    var sub = release_title.getElementsByClassName('sub') [1];
                    var title = sub.getAttribute("title");
                    if (title == null) {
                        var title = sub.lastChild.textContent;
                    }
                }

                return title.search(filter) != -1;
            }

            function isReleaseSeason(release, seasonArray) {
                var release_title = release.getElementsByClassName('release_title')[0];
                var sub = release_title.getElementsByClassName('sub') [0];
                for (j = 0; j < seasonArray.length; j++)
                    if (sub.textContent.indexOf(seasonArray[j]) != - 1)
                        return true;
                return false;
            }

            function isReleaseByGroup(release, groupArray) {
                var release_grp = release.getElementsByClassName('release_grp')[0];
                for (j = 0; j < groupArray.length; j++)
                    if (release_grp.textContent.indexOf(groupArray[j]) != - 1)
                        return true;
                return false;
            }

            // Removes filtering from a given release
            function removeFiltering(release) {
                release.style.display = '';
            }

            // Draws the UI
            function drawUi() {

                GM_addStyle('#rls_filter_box { line-height: 160%; margin: 25px 0 0 430px; width: 268px; color: #479eff;}')

                // HeaderDiv
                {
                    // HeaderTextSpan
                    {
                        var headerTextSpan = document.createElement("span");
                        headerTextSpan.appendChild(document.createTextNode("Quick Filter "/*getFilterCaption()*/));
                        headerTextSpan.onclick = function() {
                            // Clicking on the header opens/closes the filter details UI
                            var contentDiv = document.getElementById(ID_DIV_CONTENT);
                            if (contentDiv.style.display !== "none") {
                                GM_setValue(KEY_FILTER_HIDE, true);
                                contentDivStyleDisplay = contentDiv.style.display;
                                contentDiv.style.display = "none";
                            } else {
                                GM_setValue(KEY_FILTER_HIDE, false);
                                contentDiv.style.display = contentDivStyleDisplay;
                            }
                        };
                        unselectable(headerTextSpan);
                    }

                    // HeaderCheckbox
                    {
                        var headerCheckbox = document.createElement("input");
                        headerCheckbox.setAttribute("type", "checkbox");
                        //filter_MasterSwitch = GM_getValue(KEY_FILTER_MASTERSWITCH, DEFAULT_FILTER_STATUS);
                        headerCheckbox.checked = filter_MasterSwitch;
                        headerCheckbox.onclick = function() {
                            GM_setValue(KEY_FILTER_MASTERSWITCH, headerCheckbox.checked);
                            filter_MasterSwitch = headerCheckbox.checked;
                            filterReleases();
                        };
                    }

                    var headerDiv = document.createElement("div");
                    headerDiv.id = ID_DIV_HEADER;

                    headerDiv.appendChild(headerTextSpan);
                    headerDiv.appendChild(headerCheckbox);
                }

                // ContentDiv
                {
                    var contentDiv = document.createElement("div");
                    contentDiv.id = ID_DIV_CONTENT;
                    contentDiv.style.display = "flex";
                    contentDiv.style.paddingTop = "5px";
                    contentDiv.style.paddingBottom = "5px";

                    for (var t in FILTERS){
                        var filtertype = FILTERS[t];
                        var typeDiv = document.createElement("div");
                        typeDiv.style.paddingLeft = "14px";

                        var typeSpan = document.createElement("span");
                        typeSpan.appendChild(document.createTextNode(filtertype.name));
                        unselectable(typeSpan);
                        typeDiv.appendChild(typeSpan);

                        for (var f in filtertype.VALUE){
                            var filter = filtertype.VALUE[f];
                            var span = document.createElement("span");
                            span.appendChild(document.createTextNode(filter.name + ' '));
                            unselectable(span);

                            filter.checkbox = document.createElement("input");
                            filter.checkbox.setAttribute("type", "checkbox");
                            filter.bool = GM_getValue(filter.key, DEFAULT_FILTER_STATUS);
                            filter.checkbox.checked = !filter.bool;
                            filter.checkbox.onclick = filter.func;

                            var div = document.createElement("div");
                            div.appendChild(span);
                            div.appendChild(filter.checkbox);
                            typeDiv.appendChild(div);
                        }
                        contentDiv.appendChild(typeDiv);
                    }
                }

                // Hide the filter
                if ( GM_getValue(KEY_FILTER_HIDE, (typeof HIDE_FILTER_DEFAULT !== 'undefined') ? HIDE_FILTER_DEFAULT : false) ) {
                    contentDivStyleDisplay = contentDiv.style.display;
                    contentDiv.style.display = "none";
                }

                // Add the filter UI to the correct place on the current page
                insertFilterUi(headerDiv);
                insertFilterUi(contentDiv);

                // Remove bottom banner
                if (typeof HIDE_BOTTOM_BANNER !== 'undefined' && HIDE_BOTTOM_BANNER) {
                    document.getElementById('bottom').style.display = 'none';
                }

                // Remove bottom clearfix (if only one page exists)
                if (typeof HIDE_BOTTOM_CLEARFIX !== 'undefined' && HIDE_BOTTOM_CLEARFIX) {
                    var clearfix = document.getElementsByClassName('releases_bottom clearfix')[0];
                    if(clearfix.childElementCount == 0)
                        clearfix.style.display = 'none';
                }

            }

            function onCheckboxClick(filter){
                GM_setValue(filter.key, !filter.checkbox.checked);
                filter.bool = !filter.checkbox.checked;
                filterReleases();
            }

            // Inserts a node into the rls_filter_selection div
            function insertFilterUi(filterUi) {

                var element = document.getElementById("rls_filter_box");
                if (element !== 'undefined') {
                    if(element.firstElementChild.className == "sub") {
                        element.replaceChild(filterUi, element.firstElementChild);
                    } else {
                        element.appendChild(filterUi);
                    }
                }
            }

            // Make span text unselectable
            function unselectable(span){
                if ('unselectable' in span)       // Internet Explorer, Opera
                    span.unselectable = !span.unselectable;
                else {
                    if (window.getComputedStyle) {
                        var style = window.getComputedStyle (span, null);
                        if ('MozUserSelect' in style) { // Firefox
                            span.style.MozUserSelect = (style.MozUserSelect == "none") ? "text" : "none";
                        }
                        else
                            if ('webkitUserSelect' in style)      // Google Chrome and Safari
                                span.style.webkitUserSelect = (style.webkitUserSelect == "none") ? "text" : "none";
                    }
                }
            }
        }
    }
    // Add Pictures to persons
    function actorImages() {
        if (window.location.href.indexOf("/person/") > -1) {
            var actor = $(".headline2").html();
            var apiKEY = "api_key=509a5d5562c3e47a40b9b7ba5617e6a7";
            var actorID = '';
            $('#middle_spawn').after('<br><div id="middle_left" data-id="actorimages"><div style="position: relative; left: 0pt; top: 0pt;" id="rightbox"><div><div class="box_title1">' + actor + '</div><div style="line-height: 15px;" id="release_info_box" class="box1"></div></div></div></div>');

            GM_xmlhttpRequest({
                method: "GET",
                url: "https://api.themoviedb.org/3/configuration?" + apiKEY,
                headers: {"Accept": "application/json"},
                onload: function(data) {
                    var myObject = $.parseJSON(this.responseText);
                    var baseURL = myObject.images.secure_base_url;

                    GM_xmlhttpRequest({
                        method: "GET",
                        url: "https://api.themoviedb.org/3/search/person?query=" + actor + "&" + apiKEY,
                        headers: {"Accept": "application/json"},
                        onload: function(data) {
                            var myObject = $.parseJSON(this.responseText);
                            actorID = myObject.results[0].id;

                            GM_xmlhttpRequest({
                                method: "GET",
                                url: "https://api.themoviedb.org/3/person/" + actorID + "/images?" + apiKEY,
                                headers: {"Accept": "application/json"},
                                onload: function(data) {
                                    var myObject = $.parseJSON(this.responseText);
                                    if (myObject.profiles.length > 0) {
                                        for (var i = 0; i < 3 && myObject.profiles.length >= i; i++) {
                                            var value = myObject.profiles[i].file_path;
                                            $("#release_info_box").append('<div class="box_content"><a href="' + baseURL + 'original' + value + '"><img src="' + baseURL + 'original' + value + '" title="' + actor + '" style="width:100%"></a></div>');
                                        }
                                    } else {
                                        $("#release_info_box").append('<div class="box_content"><span class="sub">Keine Bilder gefunden.</span></div>');
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    }

    // Expand the view of trailers / hide trailer navigation
    function expandTrailers(reduce) {
        if (!reduce) {
            //$('#trailers_top_pagination').attr('data-id', 'expandtrailers');
            if (window.location.href.indexOf("entertainment-trailers") > -1) {
                if ($('.trailers_top').length !== 0) {
                    $('.trailers_top').css({
                        height: 'auto'
                    });
                }
                $('#trailers_top_pagination').hide();
            }
        } else {
            $('.trailers_top').removeAttr( 'style' );
            $('#trailers_top_pagination').show();
        }
    }

    // Create a copy button in the release options
    function copyButton() {
        var copydataimg = 'data:image/x-icon;base64,R0lGODlhEAAQAOZgAP////b5+pnb/83V3QBayABgyfX4/ABSxhij/7bByuDf4aGqsig0QKDh///++19ocniBi////QBkywBeyCczPu7y90pUX2RveSgzP2dyfW54hPP2+evx9+7z97O/yBik/2t1geXr8vX4+hyo/11nci04Qx2q/2Frdfb5+8zT3e/z+ABey+zw9GBreABYx+3y9uvw9wBdzPT2+e3n4+nw93eBiwBTxOrv9ElTXgBTxwBiz19rdvT4/N7e4ABUxv/++V5ocyYyPX2BhvH1+vH1+QBfymNve+7z+P///gBTyGRueO/z9/P3/ABOyABcyurw9QBUxQBRxXyAhfT4+wBWxe3x9fP1+ABUxPL2+fT3+/H0+PD1+mVwe3B4fo2GfwBayv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGAALAAAAAAQABAAAAfWgGBgEgUThgUSgoqLBQ0Cjw0Fi5MrJggfCCNUBJycTjqCXgARSBEAp6inQhJFXz42UFERAbQBIhsAGo2PAg0uMwrBCj0OACAxlpgjVzkHzgdJTQAZUgA/DsWpqF0AFxoAMgEoKLW2uEYAJyAAWikD7/ApVgAtACQZAEtZBvwGU1hEOgDYAeDBBQAvPCRYmMBDhyosAHAJYuEEgCdMeKioUOHIkC03ACgRRAIADQgQOIQIwQFCDRgAgAh6cGrBglQ2Tz0QhAMDAzAlGFCgwKAEGAYYLAgKBAA7" width="13" height="13"';
        $('.release_item div.release_title > a.sub').each(function() {
            var content;
            var titleSpan = $(this);
            if(titleSpan.hasClass('extdirname')) {
                content = titleSpan.prop('title');
            } else {
                content = titleSpan.text();
            }

            var html = '<span class="getReleaseName" data-id="copybutton" data-name="' + content + '"><img src= "' + copydataimg + '"> &nbsp;</span>';
            titleSpan.parent().parent().find('.release_title > a.sub').prepend(html);
        });

        $('.release_item div.release_title_p2p > a.sub').each(function() {
            var content;
            var titleSpan = $(this);
            if(titleSpan.hasClass('extdirname')) {
                content = titleSpan.prop('title');
            } else {
                content = titleSpan.text();
            }

            var html = '<span class="getReleaseName" data-id="copybutton" data-name="' + content + '"><img src= "' + copydataimg + '"> &nbsp;</span>';
            titleSpan.parent().parent().find('.release_title_p2p > a.sub').prepend(html);
        });
        GM_addStyle('.dirname-truncated > * {display: inline-block; position: relative; max-width: 290px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}')
        GM_addStyle('.dirname-truncated > span {display: none; background: none;}')
        $('.release_item div.dirname-truncated > a.sub').each(function() {
            var content;
            var titleSpan = $(this);
            if(titleSpan.is("[title]")) {
                content = titleSpan.prop('title');
            } else {
                content = titleSpan.text();
            }

            var html = '<span style="display: inline; z-index: 1;" class="getReleaseName" data-id="copybutton" data-name="' + content + '"><img src= "' + copydataimg + '"></span>';
            titleSpan.parent().parent().find('.dirname-truncated').prepend(html);
        });

        // Make the created Icon clickable
        $('.getReleaseName').on("click", function() {
            window.prompt('Einfach STRG+C, schliessen mit ENTER',$(this).data('name'));
            return false;
        });
    }

    // add css darkmode styles
    function darkmode(css) {
        GM_addStyle('#xrelAdvMenu { box-shadow: 0 0 5px #040404; background-color: #404040; color: #fff;}')
        GM_addStyle('#HoverCover { background-color: #464646; border-color: #464646;}');
        GM_addStyle('.dropdown-titel { background: url(/static/img/bg/sidebar_top.jpg) no-repeat; line-height: 30px; height: 30px; width: 210px; display: none; position: absolute; color: #fff;background-color: #fff; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); z-index: 1;}')
        GM_addStyle('.dropdown-content {line-height: 20px; width: 180px; border-style: solid; border-width: 5px; border-color: #464646; padding: 0 0 0 20px; color: #fff; background-color: #242424; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9);}')
        GM_addStyle('.dropdown-content a:hover {background-color: #3b3b3b;}')
        GM_addStyle('.dropdown:hover .dropdown-titel {display: block;}')
        GM_addStyle('/*')
        GM_addStyle('a:link,')
        GM_addStyle('a:visited {')
        GM_addStyle('    color: #0078ff;')
        GM_addStyle('}')
        GM_addStyle('*/')
        GM_addStyle('html { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPIAAAABCAYAAABUt4CRAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSIVh1YQcchQFcGCqIijVqEIFUKt0KqDyaVf0KQhaXFxFFwLDn4sVh1cnHV1cBUEwQ8QNzcnRRcp8X9JoUWMB8f9eHfvcfcOEOolplkd44CmV8xkPCamM6ti4BUBhNCHEYzKzDLmJCkBz/F1Dx9f76I8y/vcn6NHzVoM8InEs8wwK8QbxNObFYPzPnGYFWSV+Jx4zKQLEj9yXXH5jXPeYYFnhs1Ucp44TCzm21hpY1YwNeIp4oiq6ZQvpF1WOW9x1kpV1rwnf2Ewq68sc53mIOJYxBIkiFBQRRElVBClVSfFQpL2Yx7+AccvkUshVxGMHAsoQ4Ps+MH/4He3Vm5ywk0KxoDOF9v+GAICu0CjZtvfx7bdOAH8z8CV3vKX68DMJ+m1lhY5Anq3gYvrlqbsAZc7QP+TIZuyI/lpCrkc8H5G35QBQrdA95rbW3Mfpw9AirpK3AAHh8BwnrLXPd7d1d7bv2ea/f0AqfVyvehLChwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBxMVNhGDkNTsAAAAUElEQVRYw+3YsQ0AMQhDUTvUmSj7T5QauC6nGyGn/yRL0OIOr7VauF73W6PtM0eEbGuMoYg4+96bowEAAAAAcKk5p6pKmamqOunuz48A//IA8RwcsqWMeFgAAAAASUVORK5CYII=) repeat-y top center; background-color: #3b3b3b; }')
        GM_addStyle('#center1 { background: #3b3b3b; color: #ffffff; border: 5px solid #3b3b3b; }')
        GM_addStyle('#top_bar_fix { background: url(data:image/png;base64,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) no-repeat center top; width: 100%; display: block; margin: 0; padding: 0; text-shadow: 0 0px #000; }')
        GM_addStyle('#top_bar { background-image: url("data:image/png;base64,R0lGODlhAQAfAMIGADc3Nzg4ODk5OTo6Ojs7O0pKSv///////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAcALAAAAAABAB8AAAMMCBrcLnBISeogt5YEADs="); text-shadow: 0 0px #000; }')
        GM_addStyle('#nav_bottom { background: url(data:image/png;base64,R0lGODlhBQAyAIQYADQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj4/Pz8/Pz9AQEBAQEFBQUJCQkNDQ0NEREREREZGRkdHR0hISElJSf///////////////////////////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAB8ALAAAAAAFADIAAAVboCKOZLmcDOM0bOO8cPzMdG1DOB7tu+T7k6BwSCkWK0ikZbm8OJ/QKHOZRBqLwwlvZ7PFHKlwKUEumxFo9GHNbhve8Li8QKcT7vi8fsDv+/8CgYEBhIWGAIiIIQA7) repeat-x center top; height: 50px; text-shadow: #f6f6f6 0 1px 0; color: #fff; }')
        GM_addStyle('#nav_bottom .tools a { filter: invert(80%); }')
        GM_addStyle('.nav_bottom_right input.submit { filter: invert(80%); }')
        GM_addStyle('.nav_bottom_right .search_input { background: #fff0; }')
        GM_addStyle('.nav_bottom_right .search_input > div input { border: 3px; width: 210px; padding: 5px !important; font-size: 12px; color: #fff !important; background: #3b3b3b; border-color: #464646; border-radius: 5px; border-style: solid; border-width: 3px; box-shadow: 0 3px 3px rgba(0, 0, 0, .2) inset; outline: none; }')
        GM_addStyle('.nav_bottom_right .search_input > div { background: #fff0; }')
        GM_addStyle('a:link, a:visited { color: #479eff; text-decoration: none; border-bottom: 1px dotted #0000; }')
        GM_addStyle('.box_content { background: #242424; color: #ffffff; }')
        GM_addStyle('.inline-release-info-box { filter: invert(80%); }')
        GM_addStyle('.release_updater { filter: invert(80%); }')
        GM_addStyle('#nav_cats { filter: invert(80%); }')
        GM_addStyle('.nav_subcats { height: 32px; background-color: #3b3b3b; }')
        GM_addStyle('.releases_bottom { filter: invert(80%); color: #000; }')
        GM_addStyle('.article { color: #ffffff; }')
        GM_addStyle('.article_cat { color: #ffffff; }')
        GM_addStyle('.headline1_2 { color: #ffffff; }')
        GM_addStyle('.release_odd { background: #292929; }')
        GM_addStyle('.sub { color: #fff; }')
        GM_addStyle('a.sub:visited { color: #fff }')
        GM_addStyle('a.sub:link { color: #fff; }')
        GM_addStyle('table.bb_table th { filter: invert(80%); border: 1px solid #6a6a6a; }')
        GM_addStyle('table.bb_table td { border: 1px solid #6a6a6a; }')
        GM_addStyle('.dirname-truncated > span > a { background: #4c5c75; }')
        GM_addStyle('.release_odd .dirname-truncated > span > a { background: #4c5c75; }')
        GM_addStyle('.box1 { background: #464646; }')
        GM_addStyle('.box_content { background: #242424; }')
        GM_addStyle('.blog_overview_btm_small { background: #242424; }')
        GM_addStyle('#rls_filter_selection { filter: invert(80%); color: #000; }')
        GM_addStyle('#rls_filter_box { filter: invert(80%); }')
        GM_addStyle('#shadowTable #row2 td.col2 { background-color: #242424; }')
        GM_addStyle('.my-xrel-notification { background: #333232; }')
        GM_addStyle('.tippy-box[data-theme="v3menu"] .tippy-content { background: #242424; }')
        GM_addStyle('.tippy-box[data-animation="scale"][data-placement^="bottom"] { background: #242424; border: 0; }')
        GM_addStyle('.comment_odd { background: #333232 }')
        GM_addStyle('.comment_item_big { width: 565px }')
        GM_addStyle('#searchAutoComplete .content { border: none; }')
        GM_addStyle('.font_grey { color: #fff }')
        GM_addStyle('#language_box { background: #242424; border: 0; }')
        GM_addStyle('.table { background: #242424; }')
        GM_addStyle('#shadowTable td { background: #333232; }')
        GM_addStyle('.my_xrel_tab { background: #333232; color: #ffffff; border: 0; }')
        GM_addStyle('.my_xrel_tab_bg { background: #242424; }')
        GM_addStyle('.my_xrel_active_tab { background: #004d66; color: #ffffff; border: 0; }')
        GM_addStyle('.sub { color: #a6a6a6; }')
        GM_addStyle('.sub_bar { filter: invert(80%); }')
        GM_addStyle('#fav_add { margin: -11px 0 0 582px }')
        GM_addStyle('#fav_content { background: #242424; }')
        GM_addStyle('#favs_bubble { top: 0px; }')
        GM_addStyle('a.fav_list_add_button { background: #242424; }')
        GM_addStyle('.fav_list_add_button span { color: #ffffff; }')
        GM_addStyle('.fav_list_topic { color: #ffffff; }')
        GM_addStyle('.mediathek_top { filter: invert(90%); }')
        GM_addStyle('.mediathek_bottom { filter: invert(90%); }')
        GM_addStyle('.featherlight .featherlight-content { background: #333232; }')
        GM_addStyle('.featherlight .featherlight-close-icon { font-family: Arial, sans-serif; background: #4f4e4e; }')
        GM_addStyle('.nfo_scaling { background: #464646; line-height: 35px; }')
        GM_addStyle('.fav_add_bg { color: #000; filter: invert(80%); }')
        GM_addStyle('.fav_add_r { filter: invert(80%); }')
        GM_addStyle('.fav_add_l { filter: invert(80%); }')
        GM_addStyle('#fav_add_list { color: #000; filter: invert(80%); }')
        GM_addStyle('.extinfo_box_date { background: #333232; }')
        GM_addStyle('#favs_button { filter: invert(80%); text-shadow: 0 -1px #fff; color: #000; }')
        GM_addStyle('.fav_entry, .fav_entry_bg_l, .fav_entry_bg_r { background: #242424; border-bottom: 2px dotted #333232 }')
        GM_addStyle('.fav_entry_text_cat { color: #ffffff; }')
        GM_addStyle('.fav_list_entry_odd { background: #242424; }')
        GM_addStyle('.fav_list_text a:link { color: #ffffff; }')
        GM_addStyle('.fav_list_entry_active { background-color: #004d66 !important; }')
        GM_addStyle('.fav_entry_rls a:link, .fav_entry_rls a:visited { color: #ffffff; }')
        GM_addStyle('#fav_content span.notfound { color: #fff; }')
        GM_addStyle('.font_cat2 { border-bottom: 0; color: #000; text-shadow: 0 1px #c6c6c6; }')
        GM_addStyle('table.bb_table td { background: #333232; color: #fff }')
        GM_addStyle('table.bb_table th { color: #000; }')
        GM_addStyle('.editor_frame { background: #242424; }')
        GM_addStyle('.editor_frame { background: #333232; }')
        GM_addStyle('.editor_icon { padding: 2px 0 0 4px; background: #464646; }')
        GM_addStyle('textarea.textarea, .inputlike { color: #fff; border-color: #464646; border-radius: 1px; border-style: solid; border-width: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, .1) inset; padding: 6px 8px; outline: none; }')
        GM_addStyle('.textarea { background: #3b3b3b; }')
        GM_addStyle('input[type="text"], input[type="password"], input[type="date"], input[type="url"], input[type="email"], textarea.textarea, .inputlike { color: #fff; background: #3b3b3b; border-color: #464646; border-radius: 1px; border-style: solid; border-width: 3px; box-shadow: 0 2px 5px rgba(0, 0, 0, .1) inset; padding: 6px 8px; outline: none; }')
        GM_addStyle('.middle_medium_text_boxes input.textbox { color: #fff; background: #3b3b3b; border-color: #464646; border-radius: 1px; border-style: solid; border-width: 3px; box-shadow: 0 2px 5px rgba(0, 0, 0, .1) inset; padding: 6px 8px; outline: none; }')
        GM_addStyle('.button_expand { background: #3b3b3b; border: #464646 solid 3px; }')
        GM_addStyle('.headline2 a:link, .headline2 a:visited { color: #ffffff; }')
        GM_addStyle('.bb_quote { background: #242424; }')
        GM_addStyle('legend { color: #fff }')
        GM_addStyle('.nav_bottom_left { font-weight: lighter }')
        GM_addStyle('#middle_spawn .article_cat + .horiz_line + div { color: #fff; background: #242424!important }')
        GM_addStyle('#middle_spawn .horiz_line_dotted + div:not(.article_text):not(.comment_helpful_frame):not(.comment_links_frame) { color: #fff; background: #242424!important }')
        GM_addStyle('#middle_spawn .article_cat + .horiz_line + div { background: #333232!important }')
        GM_addStyle('#middle_spawn .horiz_line_dotted + div:not(.article_text):not(.comment_helpful_frame):not(.comment_links_frame) { background: #333232!important }')
        GM_addStyle('.span_padding.sub { color: #fff!important }')
        GM_addStyle('.extinfo_top_list_entry_odd { background: #242424!important }')
        GM_addStyle('.extinfo_top_subtitle { background: none }')
        GM_addStyle('.extinfo_top_list { background: #242424; border-bottom: 1px solid #fff }')
        GM_addStyle('.tab_active { background: #242424!important }')
        GM_addStyle('.extinfo_top_description { background: #333232 }')
        GM_addStyle('.descr_content { background: url(/static/img/icons/extinfo_top_help.png) no-repeat 10px 10px; background-color: #242424!important }')
        GM_addStyle('.extinfo_awaited_entry_even { background: #242424!important }')
        GM_addStyle('.table-head { background: #242424!important }')
        GM_addStyle('.series_content { background: #242424 }')
        GM_addStyle('.trailers_new { background: #242424!important }')
        GM_addStyle('.horiz_line { background: #242424 }')
        GM_addStyle('.emoticon-popup { border: 4px solid #464646; background: #242424 }')
        GM_addStyle('#bottom_sitemap { background: url()}')
    }
});

function xreljs() {
(function(){'use strict';$(function(){releaseList_loadNukedTooltips();releaseList_beautifyTruncations();releaseList_setUpReleaseToolsBox();$('#open_rls_filter_mnu_link').click(function(e){$('#rls_filter_box').fadeToggle();e.preventDefault()})});function releaseList_loadNukedTooltips(){$('._nuke_icon').each(function(_,element){var content=element.dataset.nukeReasonHtml||element.title;tippy(element,{content,allowHTML:!!element.dataset.nukeReasonHtml,arrow:!1,animation:'scale',interactive:!0,offset:[0,5],placement:'bottom',delay:100,followCursor:!1,theme:'v3nuke',});element.removeAttribute('title')})}
function releaseList_beautifyTruncations(){var SELECTOR='.dirname-truncated > a:first-child[title]';var $document=$(document);var measurement=document.createElement('a');measurement.style.position='absolute';measurement.style.left='-1000px';measurement.className='sub';document.body.appendChild(measurement);var max_width=$('.release_title, .release_title_p2p').width();$(SELECTOR).each(function(_,tag){measurement.innerHTML=tag.title;if($(measurement).width()<max_width){tag.innerHTML=tag.title;tag.removeAttribute('title')}});document.body.removeChild(measurement);$document.on('mouseenter',SELECTOR,function(){var dirnameTruncated=this;var dirnameFullWrapper=this.nextElementSibling;if(!dirnameFullWrapper&&dirnameTruncated.title){var dirnameFull=dirnameTruncated.cloneNode(!1);dirnameFull.innerText=dirnameTruncated.title;dirnameFull.removeAttribute('title');var dirnameFullWrapper=document.createElement('span');dirnameFullWrapper.appendChild(dirnameFull);dirnameTruncated.parentNode.appendChild(dirnameFullWrapper)}
$(dirnameTruncated).hide();$(dirnameFullWrapper).show();$document.on('mouseover.dirname-truncated',function(event){if(event.target!==dirnameFullWrapper&&event.target.parentNode!==dirnameFullWrapper){$document.off('mouseover.dirname-truncated');$(dirnameFullWrapper).hide();$(dirnameTruncated).show()}})})}
function releaseList_setUpReleaseToolsBox(){var triggerButtons=document.querySelectorAll('.inline-release-info-box');var race=0;tippy(triggerButtons,{allowHTML:!0,arrow:!1,animation:'fade',placement:'right-start',interactive:!0,theme:'v3rlsinfo',trigger:'click',onTrigger:function(instance,e){e.preventDefault()},onShow:function(instance){var data=instance.reference.dataset;var lock=++race;$.ajax({url:'/ajax-rlssidebar.html?rls='+data.rlsId+'&sig='+data.ajaxSig+'&p2p='+(data.p2p||'0')}).done(function(responseText){if(race===lock){instance.setContent(responseText)}})}})}
var _loadNewNfoStyle_waitFor;var _imageMapCache={};var _imageLoadCallback=null;function applyImageMapCoords(coords){$('#nfo_image_map > map > area').each(function(i,area){$(area).attr('coords',coords[i])})}
window.loadNewNfoStyleURL=function(img_url,imagemap_url,font,indicator,imageLoadCallback){indicator.fadeIn();resetNFOZOomData(!0);_imageLoadCallback=imageLoadCallback;var realImageMapUrl=imagemap_url.replace('FONTIDX',String(font));if(realImageMapUrl in _imageMapCache){_loadNewNfoStyle_waitFor=1;applyImageMapCoords(_imageMapCache[realImageMapUrl])}else{_loadNewNfoStyle_waitFor=2;$.ajax({url:imagemap_url.replace('FONTIDX',String(font)),dataType:'json'}).done(function(coords){if(--_loadNewNfoStyle_waitFor===0){$('.loading-indicator-nfo-style').fadeOut()}
applyImageMapCoords(_imageMapCache[realImageMapUrl]=coords)})}
$('#nfo_image > img').attr('src',img_url.replace('FONTIDX',String(font)));Cookies.set('nfo_font',String(font),{expires:1000,sameSite:'lax'})}
$(function(){$('#nfo_image > img').on('load',function(){if(--_loadNewNfoStyle_waitFor===0){$('.loading-indicator-nfo-style').fadeOut()}
this.removeAttribute('width');this.removeAttribute('height');if(_imageLoadCallback){_imageLoadCallback()}});$('a.switch-nfo-view-button').on('click',function(ev){ev.preventDefault();window.nfoViewSwitchBar($(this).data('view'))});$('a.nfo-zoom-button').on('click',function(ev){ev.preventDefault();window.zoomNFO($(this).data('zoom'))})});window.nfoViewSwitchBar=function(viewtype){$('#nfo_text').toggle(viewtype==='text');$('#nfo_image').toggle(viewtype==='image');$('#nfo_proof').toggle(viewtype==='proof');$('#nfo_button_txt').toggleClass('sub_bar_active',viewtype==='text').toggleClass('sub_bar_inactive',viewtype!=='text');$('#nfo_button_img').toggleClass('sub_bar_active',viewtype==='image').toggleClass('sub_bar_inactive',viewtype!=='image');$('#nfo_button_proof').toggleClass('sub_bar_active',viewtype==='proof').toggleClass('sub_bar_inactive',viewtype!=='proof');$('.nfo_scaling, #img_nfo_style_box').toggle(viewtype==='image');if(viewtype==='proof'&&$('#loading_indicator_proof_releases').length>0){$.ajax({url:proofRlsURL,cache:!1}).done(function(responseText){if(!responseText||responseText==''){$('#proof_releases').remove()}else{$('#proof_releases_list').html(responseText);$('#nfo_proof').children().css({width:'auto'});$('#proof_releases_toggleall').on('change',function(){$('input[name="proof_releases[]"]').prop('checked',this.checked)})}})}}
var zdNFO=0;window.resetNFOZOomData=function(doImage){zdNFO={percent:100,orig_width:0,orig_height:0,orig_link_coords:0};if(doImage){$('#nfo_image > img').css({height:'auto',width:'auto'})}}
window.zoomNFO=function(step){var oldper=zdNFO.percent;zdNFO.percent=zdNFO.percent+step;var im=$('#nfo_image > img');var firstrun=(zdNFO.orig_width==0);if(step==100)zdNFO.percent=100;else if(zdNFO.percent>150)zdNFO.percent=150+100%Math.abs(step);else if(zdNFO.percent<20)zdNFO.percent=20-100%Math.abs(step);if(zdNFO.percent==oldper){return}
var areatags=$('#nfo_image_map > map > area');if(firstrun){zdNFO.orig_height=im.height();zdNFO.orig_width=im.width();zdNFO.orig_link_coords=new Array();for(var i=0;i<areatags.length;i++){zdNFO.orig_link_coords[i]=areatags[i].getAttribute('coords').split(',')}}
im.css({width:Math.ceil(zdNFO.orig_width*zdNFO.percent/100)+'px',height:Math.ceil(zdNFO.orig_height*zdNFO.percent/100)+'px',});for(var i=0;i<areatags.length;i++){var coords=areatags[i].getAttribute('coords').split(',');for(var j=0;j<4;j++){coords[j]=Math.ceil(parseInt(zdNFO.orig_link_coords[i][j])*zdNFO.percent/100)}
areatags[i].setAttribute('coords',coords.join(','))}}
window.resetNFOZOomData(!1);window.releaseListUpdater=function(URL){this.updateURL=URL;this.originalTitle=document.title;this.interval=30;this.scheduleNewReq=function(){setTimeout(this.request.bind(this),this.interval*1000)};this.request=function(){$.ajax({url:this.updateURL,cache:!1,headers:{Accept:'application/json'}}).done(function(result){if(result.error==0){var elm=$('#release_updater');elm.toggle(result.releases>0);$('.number_of_rlses',elm).text(result.releases);document.title=(result.releases>0?'['+result.releases+'] ':'')+this.originalTitle;if(this.interval>30)this.interval-=30}
this.scheduleNewReq()}.bind(this)).fail(function(){this.interval+=30;this.scheduleNewReq()}.bind(this))};$('#release_updater').click(function(){location.href=$('div > a',this).attr('href')});this.scheduleNewReq()}
window.releaseArchiveSelector=function(html_button,html_container,html_label,cat,meta_cat,year,month,month_name,lng_recent){html_button=$('#'+html_button);html_container=$('#'+html_container);html_label=$('#'+html_label);var loaded=!1,showing=!1;var selected_year_element=null;var year_now=null,month_now=null;var yearSelInner=null,yearSelUpBtn=null,yearSelDwnBtn=null,yearSelMax=0,yearSelStep=0;var positionPopup=function(){html_container.css({marginTop:(-html_container.height()+6)+'px',marginLeft:(html_label.width()+html_button.width()-html_container.width()+32)+'px',})};var loadPopup=function(){loaded=!0;$.ajax({url:'/releases-archivesel.html?cat='+cat+'&meta_cat='+meta_cat+'&archive='+year+'-'+month}).done(function(responseText){html_container.html(responseText);positionPopup();yearSelInner=$('.year-selection .inner',html_container);yearSelUpBtn=$('.switch_years .up',html_container);yearSelDwnBtn=$('.switch_years .down',html_container);yearSelStep=25;yearSelMax=$('.year-selection > div > a',html_container).length*yearSelStep-$('.year-selection',html_container).height()+$('.year-selection',html_container).height()%yearSelStep-yearSelStep;year_now=$('.archive_calendar',html_container).data('year-now');month_now=$('.archive_calendar',html_container).data('month-now');html_container.on('mousewheel',function(ev){moveYearSel(ev.deltaY<0);ev.preventDefault()});yearSelUpBtn.on('click',function(ev){moveYearSel(!1);ev.preventDefault()});yearSelDwnBtn.on('click',function(ev){moveYearSel(!0);ev.preventDefault()});$('.year-selection > div > a',html_container).each(function(){var t_year=$(this).data('year');this.href='#';if(t_year==year||(year==0&&selected_year_element===null))selected_year_element=$(this);else if(t_year>year&&year>0)moveYearSel(!0)}).on('click',function(ev){var a=$(this);var t_year=a.data('year');if(selected_year_element!==null)selected_year_element.removeClass('active');a.addClass('active');selected_year_element=a;$('.month-selection > div > a',html_container).each(function(index){this.href=(cat.length==0?'releases':'/'+(meta_cat.length>0?meta_cat+'-':'')+cat+'-release-list')+'.html?archive='+t_year+'-'+(index>8?'':'0')+(index+1);$(this).toggleClass('active',index+1==month&&t_year==year).toggleClass('future',t_year>=year_now&&index+1>month_now)});ev.preventDefault()})}).fail(function(){loaded=!1})};var showPopup=function(){html_container.fadeIn();showing=!0;html_button.addClass('archive_button_active');if(!loaded){positionPopup();loadPopup()}};var hidePopup=function(){html_container.fadeOut();showing=!1;html_button.removeClass('archive_button_active')};var moveYearSel=function(down){if(yearSelInner==null)
return;var pos=parseInt(yearSelInner.css('margin-top'));pos+=(down?-yearSelStep:yearSelStep);if(pos>=0){pos=0;yearSelUpBtn.addClass('inactive')}else{yearSelUpBtn.removeClass('inactive');if(pos<=-yearSelMax){pos=-yearSelMax;yearSelDwnBtn.addClass('inactive')}else{yearSelDwnBtn.removeClass('inactive')}}
yearSelInner.css({marginTop:pos+'px'})};$(html_button).on('click',function(ev){if(showing)
hidePopup();else showPopup();ev.preventDefault()})}})()
}
