	function findLocation()
	{
	  navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
	}
	function foundLocation(position)
	{
	  var coords = getLatLong(position);
	  if (coords) {
  	    gourl = "http://www.wifipdx.com/closest/?lat=" + coords[0] + "\&lon=" + coords[1];
	    window.location.href = gourl;
	  }
	}
	function noLocation()
	{
	}
	function getLatLong(pos) {
	  var lat = null;
	  var long = null;

	  if (pos.coords) {
 	    lat = pos.coords.latitude;
	    long = pos.coords.longitude;
	  }
	  else {
	    if (pos.latitude && pos.longitude) {
	      lat = pos.latitude;
	      long = pos.longitude;
	    }
	  }

	  if (lat == null || long == null) {
	    return null;
	  }
	  return [lat, long];
	}
	window.onload = findLocation;
