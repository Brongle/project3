function initMap() {
	var place = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(52.228197039017445, 21.020672913786676);
	var mapO = {
		center: myLocation,
		zoom: 10;
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
	var myMap= new google.maps.Map(place,mapO);
	
	var marker = new google.maps.Marker({
		position: myLocation,
		map,
		 title: "Capital of Poland",
		 animation: google.maps.Animation.DROP,
	});
	
	var content= '<h1>Warsaw, Poland</h1> <p> My family is from Poland and Warsaw is the capital of Poland with many beautiful areas to visit. Although my family is not from Warsaw the city has many interesting sites and a very rich history.</p>'
}

google.maps.event.addDomListener(window,'load', init);
		