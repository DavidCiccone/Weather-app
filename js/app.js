"use strict";

//Finds users location be lat and lon
		var lat = google.loader.ClientLocation.latitude;
		var lon = google.loader.ClientLocation.longitude;
	
//Retrieves weather data
		$.ajax({ url: "https://api.forecast.io/forecast/c199afcc2ac8c994a18563502f3e65bc/" + lat + "," + lon,
  				 dataType: 'jsonp',
  				 success: function(results){
  					console.log(results);
  					console.log(results.currently.temperature);
  					document.getElementsByClassName("temp")[0].innerHTML = results.currently.temperature + "° F";
  					document.getElementsByClassName("icon")[0].innerHTML = "<img class='img-width' src='images/" + results.currently.icon + ".png'>";
  				 	document.getElementsByClassName("summary")[0].innerHTML = results.currently.summary;
  				 	document.getElementsByClassName("summary-long")[0].innerHTML = results.daily.summary;
  				 },
				 error: function(){
					console.log('Not Working');
				 }

		});	
		               
		       


