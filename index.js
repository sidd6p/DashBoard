
const authorEl = document.getElementById('author');
const timeEl = document.getElementById("time");
const weatherEl = document.getElementById("weather");



// BACKGROUND
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        // throw Error("This is error");
        document.body.style.background  = `url(${data.urls.regular})`;
        authorEl.textContent = `By: ${data.user.username}`;
    })
    .catch(error => {
        document.body.style.background = `url('https://images.unsplash.com/photo-1444465693019-aa0b6392460d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTI2MTkyMTM&ixlib=rb-1.2.1&q=80&w=1080')`;
        // console.log(error);
    });



// WEATHER
function getweather(latitude, longitude) {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available");
            }
            return res.json()
        })
        .then(data => {
            weatherEl.innerHTML = `
                                    <div>
                                        Temperature: ${data.main.temp} C
                                    </div>
                                    <div>
                                        Humidity: ${data.main.humidity} %
                                    </div>
                                    <div>
                                        Pressure: ${data.main.pressure} hPa
                                    </div>
                                    <div>
                                        Wind: ${data.wind.speed} m/s
                                    </div>
                                `
        })
        .catch(error => {
            weatherEl.innerHTML = error;
        })
}

if ('geolocation' in navigator) {
    const options = {
        enableHighAccuracy: true,
    }
    navigator.geolocation.getCurrentPosition(position => {
        getweather(position.coords.latitude, position.coords.longitude);
    }, (error) => {
        // console.log(error.code);
        weatherEl.innerText = error.message;
    },  options);
}   
else {
    weatherEl.innerText = 'Unable to Access Location';
}



// TIME
function getTime() {
    const date = new Date();
    timeEl.innerHTML = `
        ${date.toLocaleTimeString('en-us', {timeStyle: 'medium'})}
    `
}

setInterval(getTime, 1000);





// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleTimeString('en-us', {timeStyle: 'short'}));
// fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
//     .then(res => {
//         if (!res.ok) {
//             throw Error("404 Error");
//         }
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })