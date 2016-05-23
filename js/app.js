"use strict";

//Finds users location be lat and lon
		var lat = google.loader.ClientLocation.latitude;
		var lon = google.loader.ClientLocation.longitude;
		var city = google.loader.ClientLocation.address.city;

//applies the users city
		document.getElementsByClassName("city")[0].innerHTML = city;
	
//Retrieves weather data
		$.ajax({ url: "https://api.forecast.io/forecast/c199afcc2ac8c994a18563502f3e65bc/" + lat + "," + lon,
  				 dataType: 'jsonp',
  				 success: function(results){
  					console.log(results);
  					console.log(results.currently.temperature);
  					document.getElementsByClassName("temp")[0].innerHTML = results.currently.temperature + "° F";
  				 	document.getElementsByClassName("summary")[0].innerHTML = results.currently.summary;
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
		               







  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude, longitude);
	}


  navigator.geolocation.getCurrentPosition(success);







		    

