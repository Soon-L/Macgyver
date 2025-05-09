export function BMI(weight, height){

    // 예외처리
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("정확한 숫자를 입력해주세요!");
        return;
    }

    let BMI = weight*(1/(height*height));

    if(BMI<18.5){
        alert("저체중입니다.")
    }
    else if(BMI>=18.5 && BMI<25){
        alert("정상체중입니다.")
    }
    else if(BMI>=25 && BMI<30){
        alert("과체중입니다.")
    }
    else if(BMI>=30){
        alert("비만입니다.")
    }
}











