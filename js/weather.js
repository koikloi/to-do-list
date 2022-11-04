const API_KEY = "6c2cf0bbf837ec2c1a86fd160bc60615"


// 경도,위도 표시 //
// 날씨 api 호출 후 url 가져오기 //
// 가져온 데이터를 날씨와 도시로 나눠 입력 //
function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerHTML = data.name;
    weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// 에러 발생 시 경보 //
function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);