"use strict";

//More accurate user location
function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
        //console.log(lat);
     
    $.ajax({ url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyDB_0HCG9l1LKKjHU_6OEKtFE0Cohl1UJU" ,
               dataType: 'json',
               success: function(results){
              
              //city
              var city = results.results["0"].address_components[3].long_name;
              //state
              var state = results.results["0"].address_components[5].short_name;
              document.getElementsByClassName("location")[0].innerHTML = city+ ", " + state;
               },
             error: function(){
              console.log('not working :(');
             }
    });
      
    //Retrieves weather data
    $.ajax({ url: "https://api.forecast.io/forecast/c199afcc2ac8c994a18563502f3e65bc/" + lat + "," + lon,
           dataType: 'jsonp',
           success: function(results){
            //console.log(results);
            
            var temp = results.currently.temperature;
            //Convert to Celcus equation
            var num = (temp - 32) * 5 / 9;
            var cel = Math.round(num * 100) / 100;
            //Temprature
            document.getElementsByClassName("temp")[0].innerHTML = temp + "° F";
            document.getElementsByClassName("temp2")[0].innerHTML = cel + "° C";



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
          //console.log('Not Working');
          alert('Weather data not available.');
         }

    }); 
                   
}

  navigator.geolocation.getCurrentPosition(success);

  $( "#button" ).click(function() {
  $( ".thing" ).toggle();
});

















		    

