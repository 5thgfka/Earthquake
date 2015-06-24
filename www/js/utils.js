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
