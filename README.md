# xREL-Advanced
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

<b>Features</b>
<ul>
  <li>Schnellsuche für Releases auf bekannten deutschen Downloadseiten (Konfigurierbar)</li>
  <li>Die Profile der Schauspieler/Regisseure werden durch Bilder der Person ergänzt</li>
  <li>Funktion zum unkomplizierten Kopieren von Releasenamen</li>
  <li>Alternative Ansicht für die Rubrik mit den Top-Trailern</li>
  <li>Links die zu externen Seiten führen werden in einem neuen Tab geöffnet</li>
  <li>Darkmode Funktion zum umschalten zum dunklen Webseiten Theme</li>
  <li>Dropdownsuche für Releases auf bekannten deutschen Downloadseiten</li>
</ul>

<b>Installation</b>
<ol>
  <li>Installation eines beliebigen Userscript-Managers.<br>
Getestet wurde Tampermonkey für Chrome und Firefox: https://www.tampermonkey.net/</li>
  <li>Es folgt die Installation des Scripts über folgenden Link:<br> https://github.com/DudeX13/xREL-Advanced/raw/master/xREL.to_Advanced.user.js</li>
  <li>Updates werden anschließend automatisch gesucht und bei Bedarf installiert.</li>
</ol>

<b>Screanshot</b>
<div align="center">
	<a href="https://raw.githubusercontent.com/DudeX13/xREL-Advanced/master/img/screanshot.jpg"><img src="https://raw.githubusercontent.com/DudeX13/xREL-Advanced/master/img/screanshot.jpg"></a>
</div>

<br>
<b>Description</b>
<ul>
  <li>Konfigurierbar Downloadseiten</li>
</ul>

```sh
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
searchEngines.push(newEngine);               //end of search item whit releasename or
productNameSearchEngines.push(newEngine);    //end of search item whit productname

*description-method
   method : "get",  // open url whit searchUrl?searchName=
   method : "post", // open searchUrl > post releasename or productname to searchName
   method : "mod",  // open (get method) url whit searchUrl/releasename or productname
   method : "url",  // open (get method) url searchUrl
```
