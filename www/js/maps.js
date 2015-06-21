
// initialize the map
function initBingMaps(myLat, myLong) {
	setTimeout(function() {
		var mcenter = new Microsoft.Maps.Location(myLat, myLong);
		bingMap = new Microsoft.Maps.Map(document.getElementById("map_canvas"), {
			credentials: APIKey.bing,
			center: mcenter,
			zoom: 8,
			mapTypeId: Microsoft.Maps.MapTypeId.road,
			showCopyright: false
		});
		// add pin to map
		var pin = new Microsoft.Maps.Pushpin(mcenter, {icon: './img/BluePushpin.png', width: 38, height: 51, draggable: true}); 
		bingMap.entities.push(pin);
	}, 200);
}