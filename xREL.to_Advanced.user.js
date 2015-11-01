// ==UserScript==
// @name			xREL-Advanced
// @namespace		https://github.com/d3rMoB/xREL-Advanced
// @description		This Script adds some functions to xREL
// @autor			MoB
// @email			der.mad.mob(at)gmail.com
// @include			*xrel.to*
// @exclude			http://api.xrel.to*
// @exclude			https://api.xrel.to*
// @require			http://code.jquery.com/jquery-latest.js
// @require			https://github.com/Krinkle/jquery-json/raw/master/dist/jquery.json.min.js
// @grant			GM_log
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_xmlhttpRequest
// @icon			https://github.com/d3rMoB/xREL-Advanced/raw/master/xrel.png
// @updateURL		https://github.com/d3rMoB/xREL-Advanced/raw/master/xREL.to_Advanced.user.js
// @version			0.2
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

// warez-world.org
newEngine = new Object();
newEngine["id"] = "warez-worldorg";
newEngine["title"] = "warez-world.org";
newEngine["baseUrl"] = "http://warez-world.org/?s=%s";
newEngine["icon"] = "data:image/x-icon;base64,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";
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

// goldesel.to
newEngine = new Object();
newEngine["id"] = "goldeselto";
newEngine["title"] = "goldesel.to";
newEngine["baseUrl"] = "http://goldesel.to/suche/%s";
newEngine["icon"] = "data:image/x-icon;base64,AAABAAIAEBAAAAAAIABoBAAAJgAAACAgAAAAACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAAAA////Af///wH///8B////Af///wGNjY0HjY2NG42NjTmNjY09jY2NPY2NjSWNjY0L////Af///wH///8B////Af///wH///8B////Af///wGNjY0djY2NcXaMna9ki6u/ZIusvWyMpb2NjY2vjY2Ng42NjS2NjY0D////Af///wH///8B////Af///wGNjY0VVIy4nRyL4/ULi/D/C4vw/wuL8P8Li/D/E4vp9UuMv9uNjY2fjY2NJ////wH///8B////Af///wH///8BNY7PawuO8P8Nje3nEY3qW0+NuxONjY0NG43jUwuN78ULjvD/Q43F4Y2NjWeNjY0D////Af///wH///8B////AQuR7tULkO/zTI69RY2NjVeNjY2DjY2NiY2NjYWBjZVhEZDq3Q6R7P2BjZWPjY2NDf///wH///8B////Af///wGNjY0DjY2NMWWPqqc1ks7lJZPb6yKT3eUwktLfZ4+pwT+Rx9cLlO//XI+xq42NjRH///8B////Af///wH///8BjY2NGzSVz8ELmO//DJfu5wuX7pULl+9/C5fvywuY7/8YluTxC5jv/0+Su7WNjY0T////Af///wH///8B////ASqY14cLnO//FprmyTKW0RP///8B////Af///wELm+9vC5zv/wuc7/9KlL+3jY2NE////wH///8B////AY2NjQUPoOvpD5/r+26RpEn///8B////Af///wH///8B////AQug7rMLoO7/Spa/t42NjRP///8B////Af///wEbouEdC6Xu/yef2OmNjY0/////Af///wH///8B////Af///wEPpOpvC6Xu/0qZvreNjY0T////Af///wH///8BDKjsGwup7v8potfvjY2Na42NjQX///8B////Af///wH///8BH6TedQup7v9Km763jY2NE////wH///8B////Af///wELq+7lEKrq/YCPlrWNjY0/jY2NB////wH///8BjY2NHSGm3MMLrO7/Sp2+t42NjRP///8B////Af///wH///8BC6/tewuv7f8wpdHpjY2NsY2NjXONjY1DjY2NV1mas60Mr+v9C6/t/0qevreNjY0T////Af///wH///8B////AQuy7QULsu23C7Lt/x2t3+9TnbfTYZmswTamzeUMsuv9C7Lt/wuy7f9FocGrjY2NEf///wH///8B////Af///wH///8B////AQu07WcLtO3RC7Tt/wu07f8LtO3lC7TtmQy07IULtO3/GLDjaY2NjQP///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AQAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8oAAAAIAAAAEAAAAABACAAAAAAAIAQAAAAAAAAAAAAAAAAAAAAAAAA////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQeNjY0TjY2NGY2NjRmNjY0ZjY2NGY2NjReNjY0NjY2NA////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NB42NjReNjY0pjY2NP42NjVeNjY1jjY2NY42NjWONjY1jjY2NX42NjU2NjY01jY2NH42NjQ2NjY0D////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NA42NjRGNjY0zjY2NX42NjYWNjY2bjY2Nq42NjbGNjY2xjY2NsY2NjbGNjY2vjY2Np42NjZONjY1xjY2NR42NjR+NjY0H////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQONjY0XjY2NSY2NjYWNjY2tjY2NwUeLwt1Fi8TXQovGzUCLyMlAi8jJQYvHzWCMr8WNjY29jY2Nw42NjbmNjY2bjY2NZY2NjSuNjY0J////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NE42NjUuNjY2TR4zD3RmL5vcLi/D/C4vw/wuL8P8Li/D/C4vw/wuL8P8Li/D/C4vw/wuL8P8xjNPZbIymy42NjcWNjY2pjY2Na42NjSeNjY0F////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQmNjY01Y42tnxiM5vcLjPD/C4zw/wuM8P8LjPD/C4zw/wuM8P8LjPD/C4zw/wuM8P8LjPD/C4zw/wuM8P8LjPD/PYzK342NjceNjY2ljY2NWY2NjRf///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NGVqNtIELjfD/C43w/wuN8P8LjfD/Do3u4w+N7XsLjfAj////Af///wH///8BC43wdwuN8KsLjfD/C43w/wuN8P8LjfD/No3P542NjcGNjY2HjY2NLY2NjQP///8B////Af///wH///8B////Af///wH///8B////Af///wFajrQrEo/r6wuP8P8Lj/D/C4/w/xyP452NjY0HjY2NBY2NjRGNjY0XjY2NGY2NjRmNjY0ZjY2NExeP5zkLj/DdC4/w/wuP8P8Lj/D/UY66342NjaGNjY1HjY2NC////wH///8B////Af///wH///8B////Af///wH///8B////ARGQ630LkPD/C5Dw/wuQ8P8ZkOWZjY2NF42NjR+NjY05jY2NU42NjWGNjY1jjY2NY42NjWONjY1XjY2NO0aPwz8NkO/hC5Dw/wuQ8P8ZkOX5jY2Nr42NjV+NjY0X////Af///wH///8B////Af///wH///8B////Af///wH///8BC5Lv3QuS7/8Lku//DJLvzY2NjR+NjY1HjY2NcY2NjZWNjY2pjY2NsY2NjbGNjY2xjY2NsY2NjauNjY2XjY2NdTKQ0ZMLku//C5Lv/wuS7/9rjqfDjY2Na42NjRv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQmNjY0pjY2NY42NjZmNjY25UJC720aRwttDkcXRQZHGy0CRx8lBkcbNjY2Nr42NjbuNjY23f46XoQuU7/8LlO//C5Tv/0aRwtuNjY1zjY2NH////wH///8B////Af///wH///8B////Af///wH///8B////Af///wGNjY0HjY2NKY2NjWtpj6i5N5LO5wuV7/8Lle//C5Xv/wuV7/8Lle//C5Xv/wuV7/8Lle//JpPb12mPqLuNjY2/EpXq+wuV7/8Lle//PpLJ4Y2NjXuNjY0l////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NA42NjR2NjY1hQ5PF0QuX7/8Ll+//C5fv/wuX7/8Ll+//C5fv/wuX7/8Ll+//C5fv/wuX7/8Ll+//C5fv/zmTzNMZluX3C5fv/wuX7/82lM7ljY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////Af///wGNjY0LjY2NQzCW09ULme//C5nv/wuZ7/8Lme//EpjqoQ2Z7lf///8B////Af///wELme93C5nvuwuZ7/8Lme//C5nv/wuZ7/8Lme//C5nv/yeW2u+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8B////AY2NjR02ls+xC5vv/wub7/8Lm+//EZrq6S2X1UWNjY0D////Af///wH///8B////Af///wH///8BC5vvZwub7/8Lm+//C5vv/wub7/8Lm+//J5ja742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wGNjY0DU5S5TQud7/8Lne//C53v/xWc6O9RlLpLjY2NA////wH///8B////Af///wH///8B////Af///wH///8BC53vVQud7/8Lne//C53v/wud7/8nmtrvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////AY2NjQcenOGzC5/v/wuf7/8Ln+//UJW7k42NjRv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BDJ/umwuf7/8Ln+//C5/v/yeb2u+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8BjY2NDQ6i7PMLou7/C6Lu/x6f4O+NjY1fjY2NF////wH///8B////Af///wH///8B////Af///wH///8B////Af///wELou4zC6Lu/wui7v8Lou7/J53Z742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wEpn9gtC6Tu/wuk7v8LpO7/RJrD1Y2NjV+NjY0X////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wENpO3xC6Tu/wuk7v8nn9nvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////ARSk6EkLpu7/C6bu/wum7v9OmbzTjY2Na42NjRv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AROl6McLpu7/C6bu/yeh2e+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8BDajsRQuo7v8LqO7/C6ju/1Cau9mNjY2FjY2NL42NjQP///8B////Af///wH///8B////Af///wH///8B////Af///wGNjY0JFqbmzQuo7v8LqO7/J6LZ742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wELqu4jC6ru/wuq7v8Lqu7/SZzA442NjaeNjY1VjY2NE////wH///8B////Af///wH///8B////Af///wH///8BjY2NA42NjR0Xp+XhC6ru/wuq7v8npNnvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////Af///wEMq+7vC6vu/wur7v8gpt71jY2Nv42NjYmNjY05jY2NC////wH///8B////Af///wH///8B////AY2NjQONjY0RcpOhUwur7v8Lq+7/C6vu/yel2e+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8B////AQyt7qsLre7/C63u/wut7v9kl6zXjY2NtY2NjXuNjY07jY2NE42NjQX///8B////Af///wGNjY0FjY2NG42NjUc8ocm/C63u/wut7v8Lre7/J6bZ742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wH///8BC6/tRQuv7f8Lr+3/C6/t/xis4/eNjY3HjY2NtY2NjYuNjY1bjY2NNY2NjR+NjY0ZjY2NIY2NjTeNjY1hcZShoxGt6PsLr+3/C6/t/wuv7f8nqNjvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BC7Dtqwuw7f8LsO3/C7Dt/yWp2uuNjY3FjY2NwY2Nja2NjY2RjY2NcY2NjWWNjY11jY2Nk3WTn7sgqt7zC7Dt/wuw7f8LsO3/C7Dt/yeo2O+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8B////Af///wELsu0RC7Lt3Quy7f8Lsu3/C7Lt/xav5fFWnbXLjY2NwY2NjcONjY25jY2Ns42NjbtQnrrbEbDo+wuy7f8Lsu3/C7Lt/wuy7f8Lsu3/J6rY742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wELs+0jC7Pt3Quz7f8Ls+3/C7Pt/wuz7f8Ls+3/P6THx0Ckxsk3pszPC7Pt/wuz7f8Ls+3/C7Pt/wuz7f8Ls+3/C7Pt/wuz7f8hrd3hjY2NX42NjR3///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BC7TtiQu07f8LtO3/C7Tt/wu07f8LtO3/C7Tt/wu07f8LtO3/C7Tt/wu07f8MtO3vEbLpWQy07d8LtO3/C7Tt/xSx58mNjY0fjY2NC////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BC7XtEQu17XcLte3NC7Xt/wu17f8Lte3/C7Xt/wu17f8Lte2ZC7Xtd////wH///8BC7Xt3Qu17f8Lte3/C7Xtu////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
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
	$("html body h1:contains('xREL')").parent().prepend("<div id='xrelSeConfig' style='text-align: left; -moz-box-shadow: 0 0 5px #888; -webkit-box-shadow: 0 0 5px #888; box-shadow: 0 0 5px #888; position: absolute; top:0px; left:-155px; padding: 10px; width: 150px; min-height: 50px; height: auto; background-color: rgba(255,255,255,0.9); z-index:1000;'><a href='#' id='xrelSeConfgiClose'>Close</a></div>")	
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