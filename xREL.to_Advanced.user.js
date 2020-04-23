// ==UserScript==
// @name			xREL-Advanced
// @namespace		https://github.com/d3rMoB/xREL-Advanced
// @description		This Script adds some functions to xREL
// @autor			d3rMoB
// @email			der.mad.mob(at)gmail.com
// @include			*xrel.to*
// @exclude			http*://api.xrel.to*
// @require			https://code.jquery.com/jquery-latest.js
// @require			https://raw.githubusercontent.com/Krinkle/jquery-json/master/dist/jquery.json.min.js
// @connect         api.themoviedb.org
// @connect         image.tmdb.org
// @connect         boerse.to
// @connect         warez.to
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_xmlhttpRequest
// @icon64			https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/xrel.png
// @updateURL		https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/xREL.to_Advanced.user.js
// @version			0.3.2
// ==/UserScript==

// release name search engines
var searchEngines = [];
var productNameSearchEngines = [];
var xrelOptions = [];
var newEngine = [];

// Options

newEngine = {
    id : "searchbars",
    title : "Search Bars",
    info : "Fügt Icons hinter den Releasenamen ein für eine Schnellsuche auf Drittanbieterseiten.",
    active : true
};
xrelOptions.push(newEngine);

newEngine = {
    id : "actorimages",
    title : "Actor Images",
    info : "Zeigt Bilder auf den Informationsseiten der Schauspieler und Rewgisseure an.",
    active : false
};
xrelOptions.push(newEngine);

newEngine = {
    id : "expandedtrailers",
    title : "Expanded Trailers",
    info : "Wechselt die Ansicht der Trailerübersicht.",
    active : false
};
xrelOptions.push(newEngine);

newEngine = {
    id : "newtab",
    title : "New Tab",
    info : "Alle externen Links werden in einem neuen Tab geöffnet.",
    active : false
};
xrelOptions.push(newEngine);

newEngine = {
    id : "copybutton",
    title : "Copy Button",
    info : "Zeigt einen Button zum kopieren des Releasenamen.",
    active : false
};
xrelOptions.push(newEngine);


// Release Name based search engines

// 1load.sx
newEngine = {
    id : "1loadsx",
    title : "1load.sx",
    baseUrl : "https://1load.sx",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/1loadsx.png",
    method : "get",
    searchName : "s",
    searchUrl : "http://1load.sx",
    active : false
};
searchEngines.push(newEngine);

// boerse.to
newEngine = {
    id : "boerseto",
    title : "boerse.to",
    baseUrl : "https://boerse.to",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/boerseto.png",
    method : "post",
    searchName : "keywords",
    searchUrl : "https://boerse.to/search/search",
    tokenUrl : "https://boerse.to/search",
    tokenName : "_xfToken",
    active : true
};
searchEngines.push(newEngine);

// crawli.net
newEngine = {
    id : "crawlinet",
    title : "crawli.net",
    baseUrl : "http://www.crawli.net/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/crawlinet.png",
    method : "post",
    searchName : "key",
    searchUrl : "http://www.crawli.net/all/",
    active : false,
};
searchEngines.push(newEngine);

// ddl-warez.to
newEngine = {
    id : "ddlwarezto",
    title : "ddl-warez.to",
    baseUrl : "https://ddl-warez.to",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/ddlwarezto.png",
    method : "get",
    searchName : "search",
    searchUrl : "https://ddl-warez.to",
    active : true
};
searchEngines.push(newEngine);

// gload.cc
newEngine = {
    id : "gloadcc",
    title : "gload.cc",
    baseUrl : "http://gload.cc",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/gloadcc.png",
    method : "get",
    searchName : "s",
    searchUrl : "http://gload.cc",
    active : false
};
searchEngines.push(newEngine);

// movie-blog.sx
newEngine = {
    id : "movieblogsx",
    title : "movie-blog.sx",
    baseUrl : "http://www.movie-blog.sx",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/movieblogsx.png",
    method : "get",
    searchName : "s",
    searchUrl : "http://www.movie-blog.sx/index.php",
    active : false
};
searchEngines.push(newEngine);

// nima4k.org
newEngine = {
    id : "nima4korg",
    title : "nima4k.org",
    baseUrl : "https://nima4k.org/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/nima4korg.png",
    method : "post",
    searchName : "search",
    searchUrl : "https://nima4k.org/search",
    active : false
};
searchEngines.push(newEngine);

// warez.to
newEngine = {
    id : "warezto",
    title : "warez.to",
    baseUrl : "https://warez.to",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/warezto.png",
    method : "post",
    searchName : "keyword",
    searchUrl : "https://warez.to/search",
    tokenUrl : "https://warez.to/",
    tokenName : "_token",
    active : false
};
searchEngines.push(newEngine);

// warez-world.org
newEngine = {
    id : "warezworldorg",
    title : "warez-world.org",
    baseUrl : "https://warez-world.org/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/warezworldorg.png",
    method : "post",
    searchName : "q",
    searchUrl : "https://warez-world.org/search",
    active : false
};
searchEngines.push(newEngine);

// google.de
newEngine = {
    id : "googlede",
    title : "google.de",
    baseUrl : "http://www.google.de/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/googlede.png",
    method : "get",
    searchName : "as_q",
    searchUrl : "http://www.google.de/search",
    active : true
};
searchEngines.push(newEngine);


// product name based search engines
// [if the search of the page only works with product names, not release names!]

// 3dl.tv
newEngine = {
    id : "3dltv",
    title : "3dl.tv",
    baseUrl : "http://3dl.tv",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/3dltv.png",
    method : "url",
    searchUrl : "https://3dl.tv/?q=%s&action=search",
    active : false
};
productNameSearchEngines.push(newEngine);

// crystal-warez.in
newEngine = {
    id : "crystalwarezin",
    title : "crystal-warez.in",
    baseUrl : "https://crystal-warez.in/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/crystalwarezin.png",
    method : "url",
    searchUrl : "http://crystal-warez.in/suche/%s",
    active : false
};
productNameSearchEngines.push(newEngine);

// ddl-search.biz
newEngine = {
    id : "ddlsearchbiz",
    title : "ddl-search.biz",
    baseUrl : "http://www.ddl-search.biz/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/ddlsearchbiz.png",
    method : "post",
    searchName : "allesSearchInput",
    searchUrl : "http://www.ddl-search.biz/Alles/",
    active : false
};
productNameSearchEngines.push(newEngine);

// funxd.pw
newEngine = {
    id : "funxdpw",
    title : "funxd.pw",
    baseUrl : "http://funxd.pw/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/funxdpw.png",
    method : "get",
    searchName : "s",
    searchUrl : "http://funxd.pw/",
    active : false
};
productNameSearchEngines.push(newEngine);

// funxd.site
newEngine = {
    id : "funxdsite",
    title : "funxd.site",
    baseUrl : "http://funxd.site/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/funxdsite.png",
    method : "get",
    searchName : "s",
    searchUrl : "http://funxd.site/",
    active : false
};
productNameSearchEngines.push(newEngine);

// g4u.to
newEngine = {
    id : "g4uto",
    title : "g4u.to",
    baseUrl : "https://g4u.to/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/g4uto.png",
    method : "post",
    searchName : "searchItem",
    searchUrl : "https://g4u.to/search.html",
    active : false,
};
productNameSearchEngines.push(newEngine);

// goldesel.to
newEngine = {
    id : "goldeselto",
    title : "goldesel.to",
    baseUrl : "http://goldesel.to/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/goldeselto.png",
    method : "url",
    searchUrl : "http://goldesel.to/suche/%s",
    active : false
};
productNameSearchEngines.push(newEngine);

// https://www.skidrowcodex.net/?s=bannerlord
newEngine = {
    id : "skidrowcodexnet",
    title : "skidrowcodex.net",
    baseUrl : "https://www.skidrowcodex.net/",
    icon : "https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/skidrowcodexnet.png",
    method : "url",
    searchUrl : "https://www.skidrowcodex.net/?s=%s",
    active : false
};
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


$(document).ready(function() {
    GM_addStyle(".release_us {	background-position: top left !important; } .release_highlight {	background-position: top !important; } .getReleaseName, .xrelSeToggle {	cursor: pointer; } .release_options {	padding-top: 0px !important; } .release_options a img {	width:13px; } .release_options span img {	width:13px; getReleaseName} .nfo_title .getReleaseName { margin-left:5px; } .nfo_title .getReleaseName img { width:16px; vertical-align: sub; }");
    GM_addStyle("#xrelAdvMenu { text-align: left; -moz-box-shadow: 0 0 5px #888; -webkit-box-shadow: 0 0 5px #888; box-shadow: 0 0 5px #888; position: fixed; top:0px; left:-160px; padding: 10px; width: 150px; min-height: 50px; height: auto; background-color: rgba(255,255,255,0.9); z-index:100; } .xrelAdvMenuConfig, .xrelAdvMenuSearch { margin-bottom: 10px }");
    GM_addStyle(".infobox {	display:none;	position:absolute;	border:1px solid #333;	background-color:#161616;	border-radius:5px;	padding:10px;	color:#fff;	font-size:12px Arial; z-index:101; }");

    if (xrelConfig.searchbars) {
        searchBars();
        initOption.searchbars = true;
    } else {
        initOption.searchbars = false;
    }
    if (xrelConfig.actorimages) {
        actorImages();
        initOption.actorimages = true;
    } else {
        initOption.actorimages = false;
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

        $('input.xrelSeCheckbox,input.xrelOptionCheckbox:not(checked)').each(function() {
            var id = $(this).attr('id');
            config[id] = false;
            xrelConfig[id] = false;

            if ( id == 'expandedtrailers' ) {
                expandTrailers(true);
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

            if ( !initOption[id] ) {
                if (id == 'searchbars')
                    searchBars();
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

            if(!xrelConfig[engine.id]) {
                hidden = "display: none;";
            }

            links += '<span style="' + hidden + '" class="xrelSeToggle" data-id="' + engine.id + '" data-rel="' + relName + '"><img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" />&nbsp;</span>';
        }

        return links;
    }

    function openUrl(id, rel) {
        var sEngine = getObjects(searchEngines, 'id', id);
        if ($.isEmptyObject(sEngine[0])) {
            sEngine = getObjects(productNameSearchEngines, 'id', id);
        }

        if (sEngine[0].method == "url") {
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
        $('div[class^=release_title] a[class^=sub]').each(function() {
            var relName;
            var productName;
            var productLink = $(this).parent().children('a').first();

            if($(this).hasClass("extdirname") && $(this).is("[title]")) {
                relName = $(this).attr('title');
            } else {
                relName = $(this).text();
            }

            if(productLink.is("[title]")) {
                productName = productLink.attr('title');
            } else {
                productName = productLink.text();
            }

            $(this).after('<br /><span data-id="searchbars">' + createIcon(productName, productNameSearchEngines) + createIcon(relName, searchEngines) + '</span>' );
        });

        // nfo view (add a collectr icon to the nfo view title)
        $('div.nfo_title div span.sub').each(function() {
            var relName = $(this).text();
            var productLink = $('#release_tools_content a').eq(1).attr("href");
            var productName = productLink.replace(/.*\/(.+)\.html$/g, "$1").replace(/-/g, ' ');

            $(this).parent().after( '<div style="float:left;" data-id="searchbars">&nbsp;' + createIcon(productName, productNameSearchEngines) + createIcon(relName, searchEngines) + '</div>' );
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

    // Add Pictures to persons
    function actorImages() {
        if (window.location.href.indexOf("/person/") > -1) {
            var actor = $(".headline2").html();
            var apiKEY = "api_key=509a5d5562c3e47a40b9b7ba5617e6a7";
            var actorID = '';
            $('#middle_spawn').after('<div id="middle_left" data-id="actorimages"><div style="position: relative; left: 0pt; top: 0pt;" id="rightbox"><div><div class="box_title1">' + actor + '</div><div style="line-height: 15px;" id="release_info_box" class="box1"></div></div></div></div>');

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
        $('.release_item [class^="release_title"] a[class^="sub"]').each(function() {
            var content;

            if($(this).hasClass('extdirname')) {
                content = $(this).prop('title');
            } else {
                content = $(this).text();
            }

            var html = '<br><span class="getReleaseName" data-id="copybutton" data-name="' + content + '"><img src="https://raw.githubusercontent.com/d3rMoB/xREL-Advanced/master/img/copy.png"></span>';
            $(this).parent().parent().find('.release_options').append(html);
        });

        // Make the created Icon clickable
        $('.getReleaseName').on("click", function() {
            window.prompt('Einfach STRG+C, schliessen mit ENTER',$(this).data('name'));
            return false;
        });
    }

});
