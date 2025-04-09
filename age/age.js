// 나이 계산
function getAge(birth){
    let yourBirth = birth;
    let today = new Date();  
    let year = today.getFullYear();
    let yourAge = 0;
    
    yourAge = year - yourBirth;
    return yourAge;
}

let test1 = document.querySelector(".test1")
let test2 = document.querySelector(".test2")
let form1 = document.querySelector(".form1")


form1.addEventListener("submit", function(){
    age(test2.value);
    alert("")
});

