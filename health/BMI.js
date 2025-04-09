// 입력칸 :  키, 몸무게, 나이, 성별(네이버 참고)

// 추후 input으로 변환하기
let weight = 80; // kg 기준으로 적기
let height = (175*(1/100)); // cm 기준으로 적기

function BMI(weight, height){

    let BMI = weight*(1/(height*height));

    if(BMI<18.5){
        console.log("저체중입니다.")
    }
    else if(BMI>=18.5 && BMI<25){
        console.log("정상체중입니다.")
    }
    else if(BMI>=25 && BMI<30){
        console.log("과체중입니다.")
    }
    else if(BMI>=30){
        console.log("비만입니다.")
    }
}


// 추후 기준 변경 예정, 나이 고려 여부 회의하기 //////////////////////









