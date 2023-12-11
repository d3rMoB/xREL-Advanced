# xREL-Advanced
> <i>Dieses Skript fügt xREL einige Funktionen hinzu</i>

##
* [Features](#features)
* [Installation](#installation)
* [Version](#version)
* [Screenshots](#screenshots)
* [Description](#description)

## Features
<ul>
	<li>Schnellsuche für Releases und Produktnamen auf externen Seiten (<a href="https://github.com/DudeX13/xREL-Advanced/blob/master/README.md#description">Konfigurierbar</a>). </li>
	<li>Die Profile der Schauspieler/Regisseure werden durch Bilder der Person ergänzt</li>
  	<li>Funktion zum unkomplizierten Kopieren von Releasenamen</li>
  	<li>Alternative Ansicht für die Rubrik mit den Top-Trailern</li>
 	<li>Links die zu externen Seiten führen werden in einem neuen Tab geöffnet</li>
  	<li>Darkmode Funktion zum umschalten zum dunklen Webseiten Theme</li>
  	<li>Dropdownsuche für Releases auf bekannten deutschen Downloadseiten</li>
  	<li>QuickCover Ansicht Cover in Releaseübersicht</li>
  	<li>QuickFilter Filter nach Categorie, Audio, Video und nach Namen in allen Übersichten</li>
  	<li>Produktname Filter zeigt nur ein Produkt pro Seite</li>
	<li>Zeige MediaInfo aus den Kommentaren auf Produktseite</li>
</ul>

## Installation
<ol>
	<li>Installation eines beliebigen Userscript-Managers.<br>
Getestet wurde Tampermonkey für Chrome und Firefox: https://www.tampermonkey.net/</li>
	<li>Es folgt die Installation des Scripts über folgenden Link:<br> https://github.com/DudeX13/xREL-Advanced/raw/master/xREL.to_Advanced.user.js</li>
	<li>Updates werden anschließend automatisch gesucht und bei Bedarf installiert.</li>
</ol>

## Version
<details>
<br>
<b>ToDo 0.3.x</b>
<ul>
	<li>fix Chrome XHR get API error</li>
</ul>
<b>Version 0.3.9</b>
<ul>
	<li>Content-security-policy (CSP) Block</li>
	<li>injected JavaScript in sandbox mode</li>
</ul>
<b>Version 0.3.8</b>
<ul>
	<li>Update DarkMode CSS for new Startpage</li>
	<li>Disable QuickSerch for Startpage</li>
</ul>
<b>Version 0.3.7</b>
<ul>
	<li>Add API Method Search</li>
	<li>Add Search Category filter</li>
	<li>Update Copy Button</li>
</ul>
<b>Version 0.3.6.1</b>
<ul>
	<li>Add MediaInfo</li>
</ul>
<b>Version 0.3.6</b>
<ul>
	<li>Remove Filter from NFOviewer</li>
	<li>Fix Styles Rework</li>
</ul>
<b>Version 0.3.4</b>
<ul>
	<li>Add Produktname Filter</li>
	<li>Add Filter to Produktübersicht</li>
	<li>Fix Styles for Filter</li>
</ul>	
<b>Version 0.3.4</b>
<ul>
	<li>Add External user-based SearchConfig</li>
  	<li>Add Advanced CSS</li>
  	<li>Add Advanced-Dark CSS</li>
  	<li>Add Advanced-Light CSS</li>
  	<li>Add Lightmode switch back CSS</li>
  	<li>Fix some CSS styles</li>
</ul>
	
<b>Version 0.3.3</b>
<ul>
  	<li>Add QuickFilter</li>
</ul>

<b>Version 0.3.2-3</b>
<ul>
  	<li>Add QuickCover</li>
  	<li>Add SearchDropdown to nfo view</li>
</ul>

<b>Version 0.3.2-1</b>
<ul>
  	<li>Add Darkmode CSS</li>
  	<li>Add SearchDropdown</li>
  	<li>Add ModifyReleaseName</li>
  	<li>Add SearchMethod</li>
  	<li>Remove all external content in the Script "jquery, images ..."</li>
</ul>
</details>

## Screenshots
![screenshot](https://raw.githubusercontent.com/DudeX13/xREL-Advanced/master/img/screanshot.jpg)


## Description
<ul>
  	<li>Konfigurierbar Downloadseiten</li>
</ul>



> edit tampermonky/xREL-Advanced/Externals/Resources/...search_config.js <br>
> this file is only created when installing and saved local to the script location <br>
> if users edit this, all data is retained even after an update



```sh
newEngine = {
    id : "unique search id",
    title : "display search name",
    baseUrl : "main url address",
    icon : "set image (use url to image, or use base64 to save the image local in script",
    method : "get,post,mod,url (*description-method)",
    searchName : "search query",
    searchUrl : "serch url address",
    category : "set specific category where the icon is visible", (all,movie,tv,title(game...))
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
   method : "api",  // request searchUrl api and searchName json node selekt open whit baseUrl
```
