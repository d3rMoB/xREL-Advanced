// SearchEngine Description
// ##################################################################
/*

!edit tampermonky/xREL-Advanced/Externals/Resources/...search_config.js
!this file is only created when installing and saved local to the script location
!if users edit this, all data is retained even after an update

/*
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
*/

// for example google and youtube
// Release Name based search engines
// ##################################################################

// google.de
newEngine = {
    id : "googlede",
    title : "google.de",
    baseUrl : "https://www.google.de/",
    icon : "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/xCItCnZQcchQnSyIijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8Af6PCVDM4DqiaZaSTCSGbWxW6XxFCBH0YRFBipj4niil4jq97+Ph6F+dZ3uf+HBElbzLAJxDPMt2wiDeIpzctnfM+cZSVJIX4nHjMoAsSP3JddvmNc9FhP8+MGpn0PHGUWCh2sNzBrGSoxFPEMUXVKN+fdVnhvMVZrdRY6578heG8trLMdZrDSGIRSxAhQEYNZVRgIU6rRoqJNO0nPPxDjl8kl0yuMhg5FlCFCsnxg//B727NwuSEmxROAF0vtv0xAnTvAs26bX8f23bzBAg8A1da219tADOfpNfbWuwI6N0GLq7bmrwHXO4AA0+6ZEiOFKDpLxSA9zP6phzQfwv0rLm9tfZx+gBkqKvUDXBwCIwWKXvd492hzt7+PdPq7wcUZ3KBCcVn8gAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YIDRAaKrljUV4AAAKSSURBVDjLbZNfiFVVFMZ/a59z5453VPxTiEg2hiPhQy8xzigppRUSFBWVZJDQgxZBVm89OA+9C1rNTD3YQw8J0nuZNP0BTUqjgnJGR7QpA+efNTnHe+ecvT4fzr2mw3ywYMHm22t/e30f3IYYYxpj3Ozug+4+4u4Nd683+8EYY2+MMWUhuPsKdx+UlMldKgp5npdV5JK7JM26+4C7r2jxrEUGjprZo8qyUP/hexpfHae4fBEEaec6qjt20t6zBavVXNIJYHcIYdpijKmZvW9me+P41TDTf4ji9DfgDtX2ckyjDiGh+uRzLH1tPySJS/pI0hsp0G1me5TNluSTQ9jdq1j00iu0re8CjLkL55k7+S21Z16AJAEIZrZH0ieUul35759r6uUHNfH8E5obGW5pLuEubzQ0H+4+kALb8Yhlx1j87Cje8RaV9V1gBkARARmENiiaH2eth/BICnSC0OwoYUkblQfugxBukV//MOOfhu7Y2MP3p+zdWSUY61LgjlO1VrMArudQj/Bv/X9KCvyB2Qbr6GJi+gKXx/9k08oeggXSBPpfrYEgSnx8Yo7Pfi5Yu9xaCi8FYAhLGL/rRQ7MdPPu8BeMTF5EKqekCSSpuDIZGRqOtCWwcW1CKC8YSvr6+qbMwu6kY3XlzPjf/PbfJU5dOcsirxBxJrJpzvz1KwdP/cLUtTVs66zydG+FJLFM0tstI71nZvuuXp8Mh388wtcTZ4kS7aFS+shzjEBv7Sne2bqLVctSlzQo6c3brfypmT2W5TfC6bGfOD72HaMzY0iic8kaHr/nIbbc283S6mKX9GXTytfmh2lA0qzLVcRCeZGXFQu5boXpA3dfvuCamnHubSbuXDPK9WbfH2PsmR/nm5hLtBkovR6mAAAAAElFTkSuQmCC",
    method : "get",
    searchName : "as_q",
    searchUrl : "https://www.google.de/search",
    category : "all",
    active : true
};
searchEngines.push(newEngine);

// Product name based search engines
// ##################################################################

//youtube.de
newEngine = {
    id : "youtubede",
    title : "youtube.de",
    baseUrl : "https://youtube.de/",
    icon : "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAD/EAAA/0AAAP9AAAD/cAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/QAAA/0AAAP8Q////AP///wD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8AAAD/MAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/MAAA/1AAAP//AAD//wAA//8AAP//AAD//wAA//8QEP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//1BQ//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/gAAA//8AAP//AAD//wAA//8AAP//AAD/////////////wMD//yAg//8AAP//AAD//wAA//8AAP//AAD/gAAA/4AAAP//AAD//wAA//8AAP//AAD//wAA/////////////7Cw//8gIP//AAD//wAA//8AAP//AAD//wAA/4AAAP+AAAD//wAA//8AAP//AAD//wAA//8AAP//4OD//0BA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP+AAAD/UAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/YAAA/zAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/zD///8AAAD/YAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/2D///8A////AP///wAAAP8QAAD/QAAA/0AAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP9AAAD/QAAA/xD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAAD//wAA//8AAA==",
    method : "get",
    searchName : "search_query",
    searchUrl : "https://www.youtube.com/results",
    category : "all",
    active : false
};
newEngine["modifyReleaseName"] = function(prodName) { return prodName + " Trailer" };
productNameSearchEngines.push(newEngine);

// [if the search of the page only works with product names, not release names!]
// ##################################################################
