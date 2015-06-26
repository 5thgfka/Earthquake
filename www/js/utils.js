var detailsList = ['#epCenter', '#epTime', '#epLat', '#epLon', '#epM', '#epType', '#epDepth'];

config = {
	actionBarDark : true,
	controlsDark : true,
	listsDark : true,
	coloredTitleBar : true,

	onscreenready:function(element, id, params) {
        var screen = element.querySelector('[data-bb-type=screen]');
        // Set our styles
        screen.style.fontSize = "2.5em";

    },
    ondomready:function(element, id, params) {

        if(id == 'details') {
            // Localization at here
            var template = "<div class='row' style='center'><h1 style='font-size: 56px;font-weight: bold;'>{{Magnitude}}</h1><h1 id='epM' style='font-size: 56px;font-weight: bold;'></h1></div><div class='row'><div class='col-sm-3'>{{Epicenter}}£º</div><div class='col-sm-9' id='epCenter'></div></div><div class='row'><div class='col-sm-3'>{{Date}}£º</div><div class='col-sm-9' id='epTime'></div></div><div class='row'><div class='col-sm-3'>{{Type}}£º</div><div class='col-sm-9' id='epType'></div></div><div class='row'><div class='col-sm-3'>{{Lon}}£º</div><div class='col-sm-3' id='epLat'></div><div class='col-sm-3'>{{Lat}}£º</div><div class='col-sm-3' id='epLon'></div></div><div class='row'><div class='col-sm-4'>{{Depth}}£º</div><div class='col-sm-8' id='epDepth'></div></div>"
            var compiler = Handlebars.compile(template);
            var lang = blackberry.system.language;
            var dict = languages[(lang).substring(0,2)] == undefined ? languages['en']:languages[(lang).substring(0,2)];
            var plain = compiler(dict);
            // Localization End
            $("#infors").html(plain);
            for(var k in params) {
                if(k > 1) {
                    if(k == 2) {
                        // if equals 2, split it and 
                        var ll = params[k].replace('(', '');
                        var ll = ll.replace(')', '');

                        var l_l = ll.split(',')
                        $('#epLat').html(l_l[0]);
                        $('#epLon').html(l_l[1]);
                    }
                    else {
                        $(detailsList[parseInt(k) + 1]).html(params[k]);
                    }
                }
                else {
                    $(detailsList[k]).html(params[k]);
                }
            }
            initBingMaps(l_l[0], l_l[1]);
        }
    }
}

function initApp() {
    bb.pushScreen('main.html', 'main');
    var cw = document.body.clientWidth;
    var ch = window.screen.height;
    if (cw == 720) {
        width = cw;
        height = 2 * ch / 3;
    }
    else {
        width = cw;
        height = ch;
    }
    APIKey = {
        'bing': 'Your Bing Key'
    };

    WHKey = {
        'w': width,
        'h': height
    };
}
