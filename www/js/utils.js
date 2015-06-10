
config = {
	actionBarDark : true,
	controlsDark : true,
	listsDark : true,
	coloredTitleBar : true,

	onscreenready:function(element, id) {
        var screen = element.querySelector('[data-bb-type=screen]');
        // Set our styles
        screen.style.fontSize = "2.5em";

        // add the settings menu (swipedown menu) to each screen
        //if (id != "about") {
        //    insertMenu(screen);
        //}
    },
}

function initApp() {
	$.get("http://www.12322.org/csi/datasvr.jsp?order_info=TASK4", 
        function(data, status) {
            //$('#content').text(data);
            xmlDoc = $.parseXML( "<rss version='2.0'>" + data + "</rss>");
            $("#earthquaketable>thead").append("<tr><th>震中</th><th>时间</th><th>经纬</th><th>震级</th></tr>");
            for (var i = 0; i < 50; i++) {
                var type = xmlDoc.getElementsByTagName('rid'+i)[0].textContent;
                var otime = xmlDoc.getElementsByTagName('o_time'+i)[0].textContent;
                var lat = xmlDoc.getElementsByTagName('lat'+i)[0].textContent;
                var lon = xmlDoc.getElementsByTagName('lon'+i)[0].textContent;
                var location = xmlDoc.getElementsByTagName('location_name'+i)[0].textContent;
                var m = xmlDoc.getElementsByTagName('m'+i)[0].textContent;

                var html_row = 
                            "<tr>"+
                                "<td>"+ location + "</td>"+
                                "<td>"+ otime + "</td>"+
                                "<td>("+ lat+","+lon + ")</td>"+
                                "<td>"+ m + "</td>"+
                            "</tr>";
                $("#earthquaketable>tbody").append(html_row);
            };
        }
	);
	bb.pushScreen('main.html', 'main');
}

/*function insertMenu(screen) {
	var menu = document.createElement('div'), about = document.createElement('div');

	menu.setAttribute('data-bb-type', 'menu');

	// About button
	about.setAttribute('data-bb-type', 'menu-item');
	about.setAttribute('data-bb-img', 'img/info.png');
	about.setAttribute('data-bb-pin', 'left');
	about.innerHTML = 'About';
	about.onclick = showScreen.about;

	// Add menu
	menu.appendChild(about);
	screen.appendChild(menu);
}
*/
showScreen = {
	about : function() {
		bb.pushScreen('about.html', 'menu');
		// show info screen
	}
}