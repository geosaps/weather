
/* --------------------WEATHER API-----------------*/ 

var openWeatherMap = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather'
if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON(openWeatherMap, {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            units: 'metric',
            APPID: 'ca9b2afd2e67184739aed6b91d60d245'
        }).done(function(weather) {
            var obj = JSON.parse(JSON.stringify(weather));
        /* $('#info').html(JSON.stringify(weather)); */ 

    document.getElementById("location").innerHTML = "" + obj.name + ", " + obj.sys.country + "";
    document.getElementById("temperature").innerHTML = "" + Math.floor(obj.main.temp) + " &#8451";  
    document.getElementById("fahrenheit").innerHTML = "" + (Math.floor(obj.main.temp*1.8000+32)) + " &#8457"; 
    document.getElementById("weather").innerHTML = obj.weather[0].description;
    document.getElementById("humidity").innerHTML = obj.main.humidity + " %";
    $(".icon").html("<img src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    

        if (obj.main.temp < -20) {
            $('body').css({'background-image': 'url(https://static.pexels.com/photos/259880/pexels-photo-259880.jpeg)'});
        } else if (obj.main.temp >= -20 && obj.main.temp < 0) {
            $('body').css({'background-image': 'url(https://static.pexels.com/photos/29818/pexels-photo-29818.jpg)'});
        } else if (obj.main.temp >= 0 && obj.main.temp < 20) {
            $('body').css({'background-image': 'url(https://static.pexels.com/photos/370037/pexels-photo-370037.jpeg)'});
        }   else if (obj.main.temp >= 20) {
            $('body').css({'background-image': 'url(https://static.pexels.com/photos/196979/pexels-photo-196979.jpeg)'});
        }



        })
    })
}


