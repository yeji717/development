const API_KEY = "f39e5def088fe8a33afcbf4f66570c7f";



function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response ) => response.json())
    .then((data => {
        const weather = document.querySelector(".weather"); 
        const city = document.querySelector(".area");
        const temp = document.querySelector(".temperature");
        city.innerText = data.name; 
        weather.innerText = data.weather[0].main;
        let weatherlist = data.weather[0].main;
        temp.innerText = data.main.temp;

        if(weatherlist == 'Clear'){
            document.querySelector(".clear").classList.add('on');
        }else if(weatherlist == 'Clouds'){
          
            document.querySelector(".clouds").classList.add('on');
        }
    }));
}



function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);