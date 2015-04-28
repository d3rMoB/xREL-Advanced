// ==UserScript==
// @name			xREL Advanced
// @namespace		xRELAdvanced
// @description		This Script adds some functions to xREL
// @autor			MoB
// @email			der.mad.mob(at)gmail.com
// @include			*xrel.to*
// @exclude			http://api.xrel.to*
// @exclude			https://api.xrel.to*
// @icon			https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/blob/master/xrel.png
// @version			0.2
// @require			http://code.jquery.com/jquery-latest.js
// @require			https://raw.githubusercontent.com/Krinkle/jquery-json/master/dist/jquery.json.min.js
// @grant			GM_log
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_xmlhttpRequest
// @updateURL		https://github.com/d3rMoB/xREL-Advanced/blob/master/xREL.to_Advanced.user.js
// ==/UserScript==

// release name search engines
var searchEngines = new Array();
var productNameSearchEngines = new Array();

//
// Release Name based search engines
//

// crawli.net
newEngine = new Object();
newEngine["id"] = "crawlinet";
newEngine["title"] = "crawli.net";
newEngine["baseUrl"] = "http://www.crawli.net/alles/%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCwwNCjHhkd4AAAB2SURBVDjLY0xKSvrPQAFgYWBgYJg3bx5ZmpOSkhiYGCgELMic/4pvUSQZ7wtDGGfQfGnCCGcyoWtmvC8M14huIFwjkoEUe4G6YYDV/8gA5nRsYYAO/iu+HSJhwITuZ2SnYw0HfIGIUwNSoKGwB086SEpKItsAABeVI9/RqvTPAAAAAElFTkSuQmCC";
newEngine["active"] = false;
searchEngines.push(newEngine);

// ddl-search.biz
newEngine = new Object();
newEngine["id"] = "ddlsearchbiz";
newEngine["title"] = "ddl-search.biz";
newEngine["baseUrl"] = "http://ddl-search.biz/FremdSuche/?s=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kKBBIdEi9AAvsAAAJFSURBVDjLndFPSJNxHMfxz/N3zx4x3Rro8u+croYRogQNhgMjIkMiuoUeokN1qEOHLp46lJpzVlCgGCQNSaSDhIWQoNIfbfnnWWlLh+ac20hj6jbn9jzz1ymIkoW+T9/TCz58KfxRc4tdjERjlRxL6xPJ5JYipyZa790NIU3U7+P6jZtHV/y++rk5DwWKTlAUk9RmZ+eXmcpGu7o6e9ICZ+vOG7fj0Vt6vT7e7mhTqTj+Y4xn+x87BxTXQG9jJs9KfX29uyKM7qC2Qq3OrLWevBB4dP9OrShmBHhBNbjDcUFrVbmiMRxzfZ2arTcfKZZmZ2Yi/wCCOuuUxXbG7GhrLGBAfQbgk4EAA+QoQD6ydRylZBWs+dw705Lk/Rtgc/MKC83llTk8YAIwpQBBABUMQLMAOAbJQ0WlOlEUtbtNYLfj0XWGSWkUACxgTAEqAqQAUAkAGxGkdAcEUywWe7ErsOLzDg8P9pouXq6v2SJYVatRItKADGB5HWB3kOGZfjW27A+8T/fOgqZWu+TdIGT8ByHvQoR8CBHyZY2QT9Is6ezoeBIOhzXpAAiCqvRcXe0zZ9/rn0Pjfrn/zUT06rUrL/P0uZfaHzxc9szNTyaS8mH8J4qh6aIMUX2c51kjAAYADEZjQ4vdQcZcEyuEkBrspxMWy21nz3PiXVgMb0Yip/djMDabzT4y+pZsRqOrC4vfqyenJHbPirW6utnzbZ4kZdkfDIWamL0CvqWlIbfbLQSCAa67++kItZ8tgiBUFRsMJRTg+gXC7u1GcQ6o1QAAAABJRU5ErkJggg=="
newEngine["active"] = false;
//searchEngines[1]["modifyReleaseName"] = function(relName) { return relName.replace(/\./g, " "); };
searchEngines.push(newEngine);

// dnmedia.biz
newEngine = new Object();
newEngine["id"] = "dnmediabiz";
newEngine["title"] = "dnmedia.biz";
newEngine["baseUrl"] = "http://dnmedia.biz/search_gcse?q=%s"
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAb9JREFUOE+FUmtLAkEU9a9qLwqzDNc0Q8uwh/klKDTNTW1Ns4eRli2lhQa+3dTKfKxamglCHwv61N0dXaWyYBhm786595wzh7c1IEXLPDhNTM47JJod0RxX/HngtUsCzDauoqO3zUK5ksgcKFZNAuxXWC9AWUlmg7irHEuHLPtGvuQvgImPnWjWYYITWyzcxC83bKZ/AAIs6vImj0kAPFH3Lrm2TUkgZQ7sjiosJRAgVNIRyrti8OuJu4vQ9sgMXIJfllGFXbxgFSrBCbtYDXUGANMRn73p5XwoTq7hiA/sAQPxVnuNOE7oKFVNZp3SJQaAD8uTbjJ3FY4f+iivH7qi9qA7sGn/fP+AejmehuEMJWhzqjU0Hoov98XE0fmOSMWxh0bps6u3ejMfjJUiKWJiHn7xoJl1bHZ3aoGYVOPDMs5+OIAB1dQdrMYjnXCTaCwS3TWB854VYC+FU3Qs3arUgAUS1nm4TkA6Dw/CZFkyGHF6njO5Rq7E5KVr67fb7OfBrK6ezZ/pjK1qnfL40e0+E1hVGd/16yMNADDau6yHKPQHQHKHILlqCC8+IodQmodknLY+GuDVUBZQNHo4fwElCLB7fxp5DwAAAABJRU5ErkJggg==";
newEngine["active"] = false;
searchEngines.push(newEngine);

// movie-blog.org
newEngine = new Object();
newEngine["id"] = "movieblogorg";
newEngine["title"] = "movie-blog.org";
newEngine["baseUrl"] = "http://www.movie-blog.org/index.php?s=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kKBg8xLofp7XoAAAL7SURBVDjLjZPLb1RVAMZ/5865c2fmTgu1M8p0KkgrNrZqtCiaroiJEtyQYmThK3Ghe/8CZYVxoRtMxI2aGFmYmKgxVcpDKaOQFiykCbbQp0OHgXmVmencx7nnuJEEN8bf6su3+K2+T/BvHCAPLN3T5eJxe/T+TGb34MBDT/T350fOX5guLy2vHjEwKQCEEPtyudyBsbGxZ3N9fUOfHD162HXd6p6nRw8ODz+6Z1tffxanm1ZgseELrpfusHDprFqZmRiVAOPj48c+PfbZjmymF4DhoV0ftn1FILtYqYRM3VQ0Ng2BFiAsEqkHSeVGJEwMSYDtOwfsbKaXxbUip385x+Wy4Ppti4bfwQgbgQ0mQloAGh1sYrtbsGR8UAIIGbc2lOLwx59ztZ4G2wUjAYWFQiBAGEBgb+kh3pMluNbCTnbttAC8MNRKxJCpLkLhoPwOkfKJoogwVARhSBCGmGSa+uN7uVNcJTICmejKWQDNZsfXMUG3myT02niBj5NM8Oo7b5DJ9uJ5PtpJ0d79As7MJK16BV9FYCd6JEC93mj7GtJugjC8RahAKUW5WOLQm68w9fssF53tOHMF6sVVDAYRMyBkWgLUapVqywM33Y1WAZu+YX29xNdfHOepZ55k6KWX2bWhWJwN8QIfY0DEQBsRlwDlG8X1+gYk090QhXi+RsYElhDs3fc8hbMnWKn7DL54gK0DjzD/8/eEQYDSkZYA63+t/nmjdJNE2gWj8LwQWwre/+A9pn+7wInvJjBAcW4WS8ZpewHa7xB1mm0J4G02/7h29Qrb8nksNEEQMDzyGCcnTjL50ykQAmPZeLcq4DegthSY6sIp2rc/kv/sfeZS4dfK/tfeykhLQKTRWnNu6jzaioMOoLEG1fllGivforzjwEWAu4LS9JkfTz+3/+ChuONAzOfK3AL4TWgsRVQXztAqfwX8ANTufV/sbmjWKq1E+r7XW8altDwPpZkia4UvqS++S9A+AlwGOvwHlpNKf7M1/3ABeBt4gP/B33UPYZAriBv5AAAAAElFTkSuQmCC";
newEngine["active"] = true;
searchEngines.push(newEngine);

// ddl-warez.in
newEngine = new Object();
newEngine["id"] = "ddl-warezin";
newEngine["title"] = "ddl-warez.in";
newEngine["baseUrl"] = "http://ddl-warez.in/?search=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADaElEQVR42m2S3U/aZxiG2cGy7G9quizb0p24j2zLmsV1jUm7udq1M0rrOjWlVkUtgqgERSbFD6pYhPhN1CrqkKoogvCjKoiAqIiIaNWD5dov3UEP1oM7efIk9/Xed55XArz3LqmHhz8oq1dfftSkrZDWKkcKquqC+RV1qduV9XvFderlSq3OpNQbCyTvMtfq2i8/UKj778jrM0UNWmQGE4q+ARptY6hto29m2dMe7jfr+R+gsLJOml8hz9xr1qG0DNLpmKff7WXIF2Q0sMmYqOG1V1jcPowO11tAS0vL+4+aNHU/V9Qi7zTTMe1kYFVgfDOGPbLHaDTJ1M4h4/EU47EkM7E9JkOxt4CSGpX0pqz6H8UzK91ON7ZAiKGtPfpFoymSxLydomsrRW/kAPPWPhZxNx47+A/QaOi8dKP8cfqxsZe/Zl5i8m3SF05gjaXo2D5gcv+Y+NkFnaLJnT5hMZlB5Y3QLogJenv//rBIruj/XalBOTxJ29IapvU4z7eTWHfSGMWXJ/azbL8+RxVMMHeQZXb3CNnSOg2rISTKtrZLeWVV2T8MPdS/cGFcC9ET3uW5GM+WSNMc2sccSxM8OacqkGAqmcWxm6ZcBKg8IqC0vrEyV1bLnz2DNDs96HxhNGvbaIJxngg7FK1EMYjdhdMLKoQEkyJgInHI3Tk/JbNeJNdKHo7kytU8tNppcK6iWAxgFLZpCURR+qMogruM7B0jnFxQ5k9gF2eXWKNuJUSNy4/kym1p8LqiBZltgmqHG8VLP/50Fv/RCf7MKYHjMzZOz1k4eo3UE8USO2Qje4bv8ATvQQbJR78WpX5StlLab6fGsUTxmJPfhuYonFimaGaNYtc6xYshChfD3HSuc2tO4O60lzujCxTYHG8AiVwxwb2+EUpHZvmlx47G5UPv2aTNF0EvxNGLNVS+KHmTHspdAq3eMNqlIJp5H5JPCqTL38ubKDQNkt89yDVdHyOBMC/CO0yKGhd/4Yp494X9I34ccNLtj+BPZbBvRLELYSRXS2SmL8qfcOuphTyDha8ajOQ0dPCl1szXeitXdFYqp93MxZN82zWK0fOK7mWBz1SdfK5oR3JfqSn4tFjGdU0XP2i6uap9xjcaUa1mvmu38rGqiweDU0xv7ZAj7vXzHgzOFS5Xa8lp7OBfJdgIkg/awOAAAAAASUVORK5CYII=";
newEngine["active"] = true;
searchEngines.push(newEngine);

// Google
newEngine = new Object();
newEngine["id"] = "Google";
newEngine["title"] = "Google.de";
newEngine["baseUrl"] = "http://www.google.de/search?as_q=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMChIaNSwA0WoAAAMKSURBVDjLJdLLa5xVGMDh33vO900mk8ltMkkT2thoIg1KFm1EIUgDVtsuvIFSXKgtCOpWXXZbtRs3ipvWC25iEVFEEIMEhNp6wVtsjdEUEtKm0RjTmXRmMt+cy+ui/8GzeABwXvXHpVUdOT6jycMf6Gsfz2tQr1n1hp6fntLfBW0ZowE0YLQh6BYogPFO1Vo4dW6BlWYfcdfdnP7iX5bXG+Q6O5l8+yyljgI2RkQsSAQgkrBiUGMTCN5z+Z8IxW6itWzvpHz4/QpgyY/fRTZ1Px4hmoBHaKlFxaMRjEZIJGFXTx7TihgyjFguL3sQj1gInQUcFhshUYOVQEvBGUsi5hbpyESZC3+sk7T1EmOGMQkRi8lgY2GRtSHDjc5e0hYMVGr0bzucBpIrqxVGbyvx/NExZs5fZfHvKl3tkRPTexCEM7PvcOpIk6t37sdKjhAi7Q3H/is7PH5xFdn37Pv66on7eGJ6nErd8dlPa0yNdjM63Mvp2bOc/OEt7GA3RCXEABjECWpSpGaR/mPn1GU1DowUeGBykJNPHwRRvl76mUPvHiOODUA0ICCtFAB1HvEpeMGUbItiLs/FpSZvzPzFykYdVcsdpd2MjR6ArImJBhMSFI9ERUgRQE0L4yqb7GnPePSeMs8cHaeyHVCB4b4hLjx1hsPlg2ijRlQBtUS5NSgq4FJk5qtf9aHJCfp6Db66wNZ/SzS2rzM09iT5Yj8ueB776GW+XJ9Dc10QLMZFYrAQQDSo1jbnWfr2RXr5jSRtoJmh5sbZfehTukqjLG5c4973jnOz0MJ6iwYhegEPJot1/px7gduT79jb32Swq0C5p42yLLDxzUsohn3lvQx2DEDmCKLEAKlPEQ9Jq7pB0V8jn/Zws+YRb4kBCu0lQnMNcXV2TAfNWh0kxfgcURxBAxoV094zQlv/g9S3PNosoCFHIkXCjqVt6BE0V+TzX2a5Xl1HgkFChB1DbEWIOZI0MeJqm1qZH0arlxDXwCV52sYOk594jkury7zyyZuExGKyhICABiCF1+fkf8mQe5HVipVlAAAAAElFTkSuQmCC";
newEngine["active"] = true;
searchEngines.push(newEngine);


// 
// product name based search engines
// [if the search of the page only works with product names, not release names!]
//

// drop-games.org
newEngine = new Object();
newEngine["id"] = "dropgamesorg";
newEngine["title"] = "drop-games.org";
newEngine["baseUrl"] = "http://drop-games.org/?s=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAkJJREFUOE+d0k9MkmEcB3DONP9MwHfzUm0ydcl6PbBYLqNTrrWlHZt17lVrE0pMHLNVVISRzcalAXlz61JerBRMRQyUF1EcqCiKvPEfhGPAtxePYcx6js/z/D7P78/D4ZRZNzo6ujpvdt4qd6fsmV6v/2IymWb+C6jh8+odDkfO7Xbnawmi/p8QqVTKGVQqJ7LZLIKRGIaHH4/PLcyf3CBJ8jr7MqKpNLSrQcw63QWxWNx+IqGiqlJgMBiZdDoNI72FZ54I3tA7eG8wBrncCl5Z5Gr7NU53T89EMpnED+825JY1DC0HIFvwYdzuQW/vvQ9lgYbGhktOp7MQj8ehnbFjwLYF+YIX92c96P5G45P5e6FZ1Cz5K6LRaKYOM4cIhBg8srigpvehsBaBdfRY1jGyuA6dTjd5LFBZXcUzm825TCaD1b0QRlx7eOeNYmhpC31zG5BbN/HAto3P0+Yc9xS3pgQhW8i2cDiMYvPWDsLQbzAw+BN4urKLfjaLfjZ4kA7BssPggkTSWgJ03bndGolEjoCDcATPbV683fgJtWufBXzoYxspX9rBpDeAuxR1sQQ4ffYMv9jAYgkMw+DjsgfKeQ9eug/whN7Dw8VNUNOrmLIu5RubmkpLON9CctRq9VxxhIlEAiEWmXL78MruwwsWeb3ih9Xrh1ar/dp2+crxg+DXCs4pFIpEIBBAKpVCLBY7woLRBHbZPZVKFeQJ+MKyf6Guro6oFwpVFEU5RkdHf42NjeVlMpldJBL1EwRR/WfwbyAeaAXvbkncAAAAAElFTkSuQmCC";
newEngine["active"] = false;
newEngine["modifyReleaseName"] = function(prodName) { return urlencode(prodName) };
productNameSearchEngines.push(newEngine);

// 1load.bz
newEngine = new Object();
newEngine["id"] = "1loadbz";
newEngine["title"] = "1load.bz";
newEngine["baseUrl"] = "http://1load.bz/?Suche=%s";
newEngine["icon"] = "data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A5/XwGKbZx1x3xaqNaL+gnP///////////////////wD///8A////AP///wD///8A////AP///wD7/fwDpNnHYECwickVnWz1C5dm/QqXZf////////////////+e1sJk9/v6B////wD///8A////AP///wDz+fcMbMaooROhcf8Rnm7/Dpxr/wyZaP8LmGb////////////+//7/Cpdl/167mqft9/QS////AP///wD1+vgKbsaooRqpe/8Xpnb/FKNz/xGfb/8PnWz/DZpp/////////////////wqXZf8Kl2X/XLqZqPP69wz///8AodTAZCKyhP8eroD/G6t8/xineP8VpHT/EqBw/xCdbf////////////////8Kl2X/Cpdl/wqXZf+W0r1r////AEGwiNAmt4r/I7OG/yCvgv8crH3/Gah5/xaldf8ToXH/////////////////C5hm/wqXZf8Kl2X/Pq2Fyf///wAcpnb/KruP/ye4i/8ktIf/IbGD/x2tf/8aqXv/F6Z2/////////////////w2aaf8LmGb/Cpdl/w2YZ/qe1sJkHad3/y7AlP8rvJH/KLmN/yW2if8isoT/Hq6A/xurfP////////////////8QnW3/DZtq/wyZZ/8Kl2X/OKqCzxiicP8xw5n/LsGV/yy+kv8puo7/xezg////////////////////////////E6Fx/xGebv8OnGv/DJlo/wuYZv8RmWX/Lr+T/zLEmf8vwZb/Lb+T/8bt4f///////////////////////////xemdv8Uo3P/EZ9v/w+dbP8Nmmn/DZRf/x+re/80x53/MsWa/zDCmP9Yzan/nODM//H69/////////////////8bq3z/GKd4/xWkdP8SoHD/EJ1t/y+jddsQl2P/KbiL/zXHnf8zxpv/McOZ/y7Blf9Wy6j/8fr3///////w+vf/IK+C/xysff8ZqHn/FqV1/xOhcf+SzrdxDZRf/xGZZv8quYz/Ncie/zPGnP8yxJn/L8GW/4/dxf/G7eH/b9Cy/yS0h/8hsYP/Ha1//xqpe/8Xpnb/8fn2DlW0jrMNlF//EJdk/yGtfv8wwpf/NMed/zLFmv8wwpj/LsCU/yu8kf8ouY3/JbaJ/yKyhP8eroD/G6t8/////wDm9O4ZU7ONtQ2UX/8NlF//Eppn/xumdf8hrn7/I7GB/yKugP8grH3/Hqp6/xymdv8ao3P/GKBw/xadbf////8A////AO338xKIyrB8KaBx4A2UX/8NlF//DZRf/w2UX/8Nkl7/DZFc/wyPWv8LjVn/C4pW/wqIVP8JhVH//B8AAPAfAADABwAAgAMAAIADAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAADAAAAA8AAAAA=="
newEngine["active"] = false;
productNameSearchEngines.push(newEngine);


// build defaultPersistConfigObj
var defaultPersistConfigObj = new Object();
var xrelSearchKey = "xrelsearch6";

function fillUpDefaultPersistConfigObj(sEngines) {
    for (var i = 0; i < sEngines.length; i++) {
        var engine = sEngines[i];
        defaultPersistConfigObj[engine.id] = engine.active;
    }
}

fillUpDefaultPersistConfigObj(productNameSearchEngines);
fillUpDefaultPersistConfigObj(searchEngines);


function fetchConfig() {
    var value = GM_getValue(xrelSearchKey, "__default") 
    if(value == "__default") {
        return defaultPersistConfigObj;
    }
    else {
        return $.evalJSON(value);   
    }
}

function saveConfig(config) {
    return GM_setValue(xrelSearchKey, $.toJSON(config));
}

// urlencode function
function urlencode(str) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: AJ
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: travc
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Lars Fischer
    // +      input by: Ratheous
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: This reflects PHP 5.3/6.0+ behavior
    // *     example 1: urlencode('Kevin van Zonneveld!');
    // *     returns 1: 'Kevin+van+Zonneveld%21'
    // *     example 2: urlencode('http://kevin.vanzonneveld.net/');
    // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
    // *     example 3: urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
    // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
 
    var hexStr = function(dec) {
        return '%' + dec.toString(16).toUpperCase();
    };
 
    var ret = '',
            unreserved = /[\w.-]/; // A-Za-z0-9_.- // Tilde is not here for historical reasons; to preserve it, use rawurlencode instead
    str = (str+'').toString();
 
    for (var i = 0, dl = str.length; i < dl; i++) {
        var ch = str.charAt(i);
        if (unreserved.test(ch)) {
            ret += ch;
        }
        else {
            var code = str.charCodeAt(i);
            // Reserved assumed to be in UTF-8, as in PHP
            if (code === 32) {
                ret += '+'; // %20 in rawurlencode
            }
            else if (code < 128) { // 1 byte
                ret += hexStr(code);
            }
            else if (code >= 128 && code < 2048) { // 2 bytes
                ret += hexStr((code >> 6) | 0xC0);
                ret += hexStr((code & 0x3F) | 0x80);
            }
            else if (code >= 2048 && code < 65536) { // 3 bytes
                ret += hexStr((code >> 12) | 0xE0);
                ret += hexStr(((code >> 6) & 0x3F) | 0x80);
                ret += hexStr((code & 0x3F) | 0x80);
            }
            else if (code >= 65536) { // 4 bytes
                ret += hexStr((code >> 18) | 0xF0);
                ret += hexStr(((code >> 12) & 0x3F) | 0x80);
                ret += hexStr(((code >> 6) & 0x3F) | 0x80);
                ret += hexStr((code & 0x3F) | 0x80);
            }
        }
    }
    return ret;
}

// global vars
var configPanelInizialized = false;


$(document).ready(function() {
	
	// release list (add a collectr icon to the rel-list)
	$('div.release_title > a.sub_link > span').each( function (idx) {

		var titleSpan = $(this);
		var relName;

		if(titleSpan.hasClass("truncd") && titleSpan.attr("title") != "") {
			relName = titleSpan.attr("title");
		} else {
			relName = titleSpan.text();
		}

		titleSpan.parent().after( createIconWithLink(relName, searchEngines));
        // add product name based search engines
        var productLink = $("a", titleSpan.parent().parent()).eq(0);
        var productName = productLink.text();
        
        titleSpan.parent().after('<br />' + createIconWithLink(productName, productNameSearchEngines));

		return;
	});

    $('div.release_title_p2p > a.sub_link > span').each( function (idx) {

		var titleSpan = $(this);
		var relName;

		if(titleSpan.hasClass("truncd") && titleSpan.attr("title") != "") {
			relName = titleSpan.attr("title");
		} else {
			relName = titleSpan.text();
		}

		titleSpan.parent().after( createIconWithLink(relName, searchEngines));
        // add product name based search engines
        var productLink = $("a", titleSpan.parent().parent()).eq(0);
        var productName = productLink.text();
        
        titleSpan.parent().after('<br />' +  createIconWithLink(productName, productNameSearchEngines));

		return;
	});

	// nfo view (add a collectr icon to the nfo view title)
	$('div.nfo_title > div > span.sub').each( function(idx) {
        
        // get product name out of the "Produktinformationen" link in the sidebox
        var productLink = $('#release_tools_content a').eq(1).attr("href");
        var productName = productLink.replace(/.*\/(.+)\.html$/g, "$1").replace(/-/g, ' ');
        
		var relName = $(this).text();
		
		$(this).append( '&nbsp; ' + createIconWithLink(relName, searchEngines) );
		$(this).append( createIconWithLink(productName, productNameSearchEngines) );

	});

	
	// product name [header]
	var productName = $('#extinfo_title > h3').text();
	$('#extinfo_title > h3').append( '&nbsp; ' + createIconWithLink(productName, productNameSearchEngines) );
	

	// Helper: creates the icons with a links
	var xrelConfig = null; 
	function createIconWithLink(relName, sEngines) {
	
	    // fetch only one time [this function gets called often]
	    if(xrelConfig == null) {
	        xrelConfig = fetchConfig();
	    }
	
		var links = "";		

		for (var i = 0; i < sEngines.length; i++) {
		    var engine = sEngines[i];
		    var hidden = "";
		    if(!xrelConfig[engine.id]) {
		        hidden = "display: none;";
		    }
			
			if(engine.modifyReleaseName)
				relNameMod = engine.modifyReleaseName(relName);
			else
				relNameMod = relName;

			url = engine.baseUrl.replace(/%s/, relNameMod);

			links += '<span style="' + hidden + '" class="xrelSeToggle_'+ engine.id +'"><a href="' + url + '" target="_blank" title="Suche auf '+ engine.title +' (Neues Fenster)"><img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" /></a>&nbsp;</span>';
		}

		return links;
	}
	
	
	$('#xrelSeConfig').hover(function() { 
        initConfigPanel();
        showConfigPanel();
        
    }, function() {});
	
	// config panel	
	$('body').prepend("<div id='xrelSeConfig' style='text-align: left; -moz-box-shadow: 0 0 5px #888; -webkit-box-shadow: 0 0 5px #888; box-shadow: 0 0 5px #888; position: absolute; top:0px; left:-155px; padding: 10px; width: 150px; min-height: 50px; height: auto; background-color: rgba(255,255,255,0.9); z-index:1000;'><a href='#' id='xrelSeConfgiClose'>Close</a></div>")	
    //-moz-border-bottom-right-radius: 10px; border-bottom-right-radius: 10px;

    $('#xrelSeConfig').hover(function() { 
        initConfigPanel();
        showConfigPanel();
        
    }, function() {});
    
    $('#xrelSeConfgiClose').click(function() { hideConfigPanel(); });


    function showConfigPanel() {
        $('#xrelSeConfig').css('left', '0px'); 
    }
    
    function hideConfigPanel() {
        $('#xrelSeConfig').css('left', '-155px');
    }    


    function initConfigPanel() {
        if(configPanelInizialized)
            return;

        $('#xrelSeConfig').prepend( '<b>Product Name Based</b><br>' + buildEngineActivatorElements( productNameSearchEngines) );
        $('#xrelSeConfig').prepend( '<b>Release Name Based</b><br>' + buildEngineActivatorElements( searchEngines) );
        
        // set inital values
        var xrelConfig = fetchConfig();
           
        $('input.xrelSeCheckbox').each( function() {
                    
            var id = $(this).attr('value');
            //console.log("xrelConfig[id]: ", xrelConfig[id]);
            if(xrelConfig[id])
                $(this).attr('checked', true);
            else
                $(this).attr('checked', false);
        });


        // add events to elements
        $('input.xrelSeCheckbox').change( function() {
                
           var config = new Object();

           $('input.xrelSeCheckbox:not(checked)').each( function() {
             var id = $(this).attr('id');
             var plainId = $(this).attr('value');
             config[plainId] = false;
             $("span." + id).hide();
           });
           
           $('input.xrelSeCheckbox:checked').each( function() {
             var id = $(this).attr('id')
             var plainId = $(this).attr('value');
             config[plainId] = true;
             $("span." + id).show();
           });

           saveConfig(config);
                       
        } );
        
        configPanelInizialized = true;
    }

    function buildEngineActivatorElements(sEngines) {
        var text = "";
        for (var i = 0; i < sEngines.length; i++) {
        	var engine = sEngines[i];
            text += '<input class="xrelSeCheckbox" id="xrelSeToggle_'+engine.id+'" type="checkbox" name="'+engine.id+'" value="'+engine.id+'" /> ';
            text += ' <img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" /> '+engine.title+'<br /> ';
        }
        return text;  
    }

	GM_addStyle(".getReleaseName {	cursor: pointer; } .release_options {	padding-top: 0px !important; } .release_options a img {	width:13px; } .release_options span img {	width:13px; getReleaseName} .nfo_title .getReleaseName { margin-left:5px; } .nfo_title .getReleaseName img { width:16px; vertical-align: sub; }");

    // Add Pictures to persons
    if (window.location.href.indexOf("/person/") > -1) {
		var actor = $(".headline2").html();
		var apiURL = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=site:themoviedb.org " + actor;
		$('#middle_spawn').after('<div id="middle_left"><div style="position: relative; left: 0pt; top: 0pt;" id="rightbox"><div><div class="box_title1">' + actor + '</div><div style="line-height: 15px;" id="release_info_box" class="box1"></div></div></div></div>');

		GM_xmlhttpRequest({
			method: "GET",
			url: apiURL,
			headers: {"Accept": "application/json"},
			onload: function(data) {
				var value = '';
				var myObject = jQuery.parseJSON(data.response)        
				for (var i = 0; i < myObject.responseData.results.length; i++) { 
					value = myObject.responseData.results[i].url;
					$("#release_info_box").append('<div class="box_content"><img src="' + value + '" title="' + actor + '" style="width:100%"></div>');
				}
			}
		});

        
    }
    
    // Expand the view of trailers / hide trailer navigation
    if (window.location.href.indexOf("entertainment-trailers") > -1) {
      if ($('.trailers_top').length != 0) {
        $('.trailers_top').css({
          height: 'auto'
        });
      }
      $('#trailers_top_pagination').hide();
    }
    
    // Make links open in a new tab
    $('a').each(function(){
        if($(this).attr('href')){
            var href = $(this).attr('href');
        	if(href.indexOf('derefer') != -1){
                $(this).attr('target', '_blank');
        	}
        }
    });
    $('area').each(function(){
        if($(this).attr('href')){
            var href = $(this).attr('href');
        	if(href.indexOf('derefer') != -1){
        	   $(this).attr('target', '_blank');
        	}
        }
    });

	// Create a copy button in the release options
	$('.release_item .release_title .sub_link').each(function(){
		if($(this).children('span').hasClass('truncd')){
			var content = $(this).children('span').attr('title');
		}
		else {
			var content = $(this).children('span').html();
		}
		if(content == ''){
			var content = $(this).children('span').html();	
		}
		html = '<br><span class="getReleaseName" data-name="'+content+'"><img src="http://xrel.beautify.it/img/copy.gif"></span>';
		$(this).parent().parent().find('.release_options').append(html);
	});

	// Create a copy button in the p2p release options
	$('.release_item .release_title_p2p .sub_link').each(function(){
		if($(this).children('span').hasClass('truncd')){
			var content = $(this).children('span').attr('title');
		}
		else {
			var content = $(this).children('span').html();
		}
		if(content == ''){
			var content = $(this).children('span').html();	
		}
		html = '<br><span class="getReleaseName" data-name="'+content+'"><img src="http://xrel.beautify.it/img/copy.gif"></span>';
		$(this).parent().parent().find('.release_options').append(html);
	});


	// Make the created Icon clickable
	$('.getReleaseName').click(function(){
		var content = $(this).attr("data-name");
		window.prompt('Einfach STRG+C, schliessen mit ENTER',content); return false;
	});

});