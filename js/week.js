const week = document.getElementById("week")

// 시계와 방식은 같으나 요일이 숫자로 표시됨 //
// 요일을 배열로 만들고 getDay()로 받은 값을 요일로 변경 후 출력 //
function getWeek() {
    const days = new Date();
    const month = days.getMonth();
    const date = days.getDate();
    const day = days.getDay()

    let weekday = new Array(7);
    weekday[0] = "일"
    weekday[1] = "월"
    weekday[2] = "화"
    weekday[3] = "수"
    weekday[4] = "목"
    weekday[5] = "금"
    weekday[6] = "토"
    const resultDay = weekday[day];
    
    week.innerText = `${month}월, ${date}일, ${resultDay}요일`;
}

getWeek();
setInterval(getWeek, 1000);