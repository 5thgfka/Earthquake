
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