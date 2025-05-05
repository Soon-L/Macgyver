// 날짜 간 일수 계산
function getDayDiff(day1,day2){
    
    const date1 = new Date(day1);
    const date2 = new Date(day2);
    
    const diffDate = date1.getTime() - date2.getTime();

    return Math.abs(diffDate / (1000 * 60 * 60 * 24))
}



// 현재 연도 가져오기
let currentYear = new Date().getFullYear()

// select 요소 가져오기
let yearSelect = document.getElementById("year")



// 현재 연도부터 10년 전까지 년도 추가
for (var i = currentYear - 10 ; i < currentYear; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

// 현재 연도부터 10년 후까지 년도 추가
for (var i = currentYear; i <= currentYear + 10; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    if(currentYear==i){
        option.selected = true;
        yearSelect.appendChild(option);
    }
    yearSelect.appendChild(option);
}

// 현재 월 가져오기
let currentMonth = new Date().getMonth()+1

// select 요소 가져오기
let monthSelect = document.getElementById("month")

// 1월부터 12월까지 추가
for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    if(currentMonth==i){
        option.selected = true;
        monthSelect.appendChild(option);
    }
    monthSelect.appendChild(option);
}

// 현재 날짜 가져오기
let currentDay = new Date().getDate()


// 현재 월의 마지막 날짜 가져오기
let lastDay = new Date(yearSelect.value, monthSelect.value,0)

// select 요소 가져오기
let DaySelect = document.getElementById("days")

// 현재 월의 날짜만큼 반복하여 추가
for (var i = 1; i <=lastDay.getDate(); i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    if(currentDay==i){
        option.selected = true;
        DaySelect.appendChild(option);
    }
    DaySelect.appendChild(option);
}