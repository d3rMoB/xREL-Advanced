// ==UserScript==
// @name			xREL-Advanced
// @namespace		https://github.com/d3rMoB/xREL-Advanced
// @description		This Script adds some functions to xREL
// @autor			d3rMoB
// @email			der.mad.mob(at)gmail.com
// @include			*xrel.to*
// @exclude			http*://api.xrel.to*
// @connect         api.themoviedb.org
// @connect         image.tmdb.org
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_xmlhttpRequest
// @version			0.3.2-3
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
        GM_addStyle('#top_bar_fix { background: url(data:image/png;base64,R0lGODlh8gQhAOcqAAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAP8ALAAAAADyBCEAAAj+AHcIHEiwoMGDCBMqXMiwocOEOiIO9PEjCJEjSG5o3Mixo8ePHf+JHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqTQqyqVOnSIwMCfKjB4+HWLNq3cq1q9evYMM2jKhjYsWLGZ+qbbq0rdu3cOPKnUu3rt27ePPq3cu3b8y1gKFKpWpVrOHDiBMrXpyYrFmLGANL1ui3suXLmDNr3sy5s+fPoEFPHq0x6tSqVxmrXs26teutjgVShIwEh+3buHPr3p07tO/fwIMLH068uPHjvnkrX77cNOHUr6NLn05dbOwds9Ey374cuffv4MP+ix9Pvrx5udzTNx+Murr79/DjD7yeHaP6+7bP69/Pv7///wAGaBd+BNrmXHvyJajggo1JJNtZ9hXInYAUVmjhhRhmqOFxEuJ3YGEMhijiiA7RB2FtHTK34YostujiizDGSFOK6n0IHYk45jiiibTR2J2MQAYp5JBEFlmcj9zZqOOSTCbIo3ZI7mbklFRWaeWVWAoVJXNKNunll9E9GeGWuGVp5plopqkmkWQqd0QRQgCBIJh01tlgWQ/22OZta/bp55+ABhrenru9GeecdiaqKFdiokiooJBGKumklA5IaG6Gygniopx2ylCjOYQq6qiklmoqqZWmquqqrLYa06n+sMYaa6aIemrrrTuAKuuusLrq66/ABgvopZjCCYQPV5Gl7LLMNuvss9BGK+201FbrIK6q6crrtqMK6+234IYbI7G4ZYpsrtamq+667LbbLLarNeputOLWa++9+JrH7b6lmpvsvAAHLDC78GZ7bX1IDMxsvgw37PDDnPErcaj+oqvwxRhjXDBj8masA8QghyzyyG1NLHHFHqesMsEbK9ZxxiTHLPPMNM9kMr8or6zzztC27PLBJ6Zc89BEFz3zzfvmzPPSTPt852NoMWb01FRXbe/OSjOt9cpOI9ao1FaHLfbYqe5sBBFUnbv12ip3fdjXi5Et99x0p2k22j+ozfbj3he7bdjLGNct+OCEB4k0t2en/S/fjAPst3VA0wZ24ZRXbrmAh2+beFW5Zu7556Dz+3hYgF98+emopy4eubdt3kPnoccu++yjgwW3Yqrnrvvuoc1equuw+y788BLX/tXtifGu/PLM70V8qEUMcezrOjxv/fWnGu8V8og17/334CtlffTTB4/9+dZr31WjSrTv/vvwxy8//OHXb//9Oh2h//789+///wB8k/SQVT3WGfCAzFEfoyIXtbjh74EQjGBKDkg+AuYAgRjMoG0UCBsGYmRyEgyhCO13QCLEyYIaTKEBAwIAOw==) no-repeat center top; width: 100%; display: block; margin: 0; padding: 0; text-shadow: 0 0px #000; }')
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
