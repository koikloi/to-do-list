const clock = document.getElementById("clock");

//new.date로 시간을 가져와서 시,분,초로 나눠서 표시//
//이너텍스트로 각각 출력 //
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 시간을 출력하고, 세트인터벌로 1초마다 갱신 //
getClock();
setInterval(getClock,1000);