function init() {
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(52.23029990325073, 21.000073548420396); {
	var mapO = {
		center: myLocation,
		zoom: 10;
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	});
  }
	var myMap= new google.maps.Map(el,mapO);
	const svgMarker = {
      path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "blue",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(0, 20),
  };
	var marker = new google.maps.Marker({
	  position: myLocation,
	  map: myMap,
	  title: "Capital of Poland",
	  animation: google.maps.Animation.DROP,
	  icon: svgMarker,
	});
	var contentPL= '<h1>Warsaw, Poland</h1><p> My family is from Poland and Warsaw is the capital of Poland with many beautiful areas to visit. Although my family is not from Warsaw the city has many interesting sites and a very rich history.</p>';

    var infowindow = new google.maps.InfoWindow({
		content: contentPL
	});
	google.maps.event.addListener(marker, 'mouseover'function() {
		infowindow.open(myMap, marker);
	});
}
google.maps.event.addDomListener(window,'load', init);
