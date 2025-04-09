// 입력창 : 성별, 키(cm), 몸무게(kg), 나이(만나이)
// 추후 input으로 변환환
const gender = 'male';
const height = 180;
const weight = 75;
const age = 25;

function BMR(gender, height, weight, age){
    let result = 0;
    
    // 남자: 66.47 +(13.75 X 체중) +(5 X 키) – (6.76 X 나이)
    // 여자: 665.1+(9.56 X 체중)+(1.85 X 키) – (4.68 X 나이)
    
    if(gender == 'male'){
       result = 66.47 + (13.75 * weight) + (5 * height) - (6.76 * age);
    }
    else{
       result = 665.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
    }
    
    console.log(result.toFixed(0)); // 소수점 첫째자리에서 반올림림
}
