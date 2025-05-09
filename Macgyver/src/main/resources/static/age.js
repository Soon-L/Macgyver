// 나이 계산
export function getAge(birth){
    let today = new Date();
    let year = today.getFullYear();
    let yourAge = year - birth;  
     
    return yourAge;

    
}

// let test1 = document.querySelector(".test1")
// let test2 = document.querySelector(".test2")
// let AgeForm = document.getElementById('AgeForm');


// AgeForm.addEventListener("submit", function(){
//     age(test2.value);
//     alert("")
// });



