"use strict";

//Finds users location be lat and lon
/*		var lat = google.loader.ClientLocation.latitude;
		var lon = google.loader.ClientLocation.longitude;
		var city = google.loader.ClientLocation.address.city;
*/

//More accurate user location
function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
        
  

//applies the users city
		//document.getElementsByClassName("city")[0].innerHTML = city;
	
//Retrieves weather data
		$.ajax({ url: "https://api.forecast.io/forecast/c199afcc2ac8c994a18563502f3e65bc/" + lat + "," + lon,
  				 dataType: 'jsonp',
  				 success: function(results){
  					
  					//Temprature
  					document.getElementsByClassName("temp")[0].innerHTML = results.currently.temperature + "° F";
  				 	
  				 	//Short Summary
  				 	document.getElementsByClassName("summary")[0].innerHTML = results.currently.summary;
  				 	
  				 	//Long Summary
  				 	document.getElementsByClassName("summary-long")[0].innerHTML = results.daily.summary;

					//animated icon
                    var skycons = new Skycons({"color": "white"});//color of icon
                    skycons.set("icon1", results.currently.icon);//applies correct icon to page
  				 	skycons.play();//start icon animation
  				 },
				 error: function(){
					console.log('Not Working');
					alert('Weather data not available.');
				 }

		});	
		               
}

  navigator.geolocation.getCurrentPosition(success);

















		    

