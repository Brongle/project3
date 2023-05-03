function initMap() {
	var map = new google.maps.Map(document.getElementById('canvas'), {
	  center: {lat: 52.23029990325073, lng: 21.000073548420396}
	  zoom: 10;
	});
	var plCapital = new google.maps.Marker({
		position: {lat: 52.2, lng: 21}
		map; map,
		title: 'Capital of Poland'
	});
	var plCapitalInfo =  new google.maps.InfoWindow({
		content:<h1>Warsaw, Poland</h1> <p> My family is from Poland and Warsaw is the capital of Poland with many beautiful areas to visit. Although my family is not from Warsaw the city has many interesting sites and a very rich history.</p>';
	});
}
google.maps.event.addDomListener(window, 'load', initMap);