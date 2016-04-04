function getLocation() {

x = document.getElementById("latlong");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
		} else { 
    	x.innerHTML = "Geolocation is not supported by this browser.";
		}
}

function showPosition(position) {
		x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;	
        latitude = position.coords.latitude;
		longitude = position.coords.longitude;

        console.log(latitude,longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
        	break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unavailableknown error occurred.";
            break;
    }
}

function goToLocation(){
        ireland = new google.maps.LatLng(53.351175, -6.266990);
        map.panTo(ireland);
}