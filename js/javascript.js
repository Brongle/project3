let map;

async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(52.23029990325073, 21.000073548420396); {
	var mapO = {
		center: myLocation,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
  }
	var myMap= new google.maps.Map(el,mapO);
	

	var marker = new google.maps.Marker({
	  position: myLocation,
	  map: myMap,
	  title: "Capital of Poland",
	  animation: google.maps.Animation.DROP,
	  icon: "images/gris.jpg"
	});
	
	var contentPL= '<h1>Warsaw, Poland</h1><p> My family is from Poland and Warsaw is the capital of Poland with many beautiful areas to visit. Although my family is not from Warsaw the city has many interesting sites and a very rich history.</p>';

    var infowindow = new google.maps.InfoWindow({
		content: contentPL
	});
	google.maps.event.addListener(marker, 'mouseover', function() {
		infowindow.open(myMap, marker);
	});
}

google.maps.event.addDomListener(window,'load', initMap);
