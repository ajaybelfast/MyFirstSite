function initialize(){

	var mapOptions = {
		//center: new google.maps.LatLng(-33.865143, 151.209900),	sydney	
		center: new google.maps.LatLng(53,8), //ireland
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.Roadmap,	

		zoomControl: true,
		zoomControlOptions:{ position: google.maps.ControlPosition.RIGHT_CENTER },
		};

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function (position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);
         });
	}
}

google.maps.event.addDomListener(window, 'load', initialize);

function goToCity() {
	var geocoder = new google.maps.Geocoder();

	var address = document.getElementById('address').value;
		
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
    		map.setCenter(results[0].geometry.location);
      
      	var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      	}); 

      	var y = document.getElementById("latlong");
 	    y.innerHTML = results[0].geometry.location;

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}