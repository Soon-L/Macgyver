import { shareKakao } from './kakaotalkSharingApi.js';
export function BMI(weight, height) {

    // 예외처리
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("정확한 숫자를 입력해주세요!");
        return;
    }

    let BMI = weight * (1 / (height * height));
    let result = "";

    if (BMI < 18.5) {
        result = "저체중입니다.";
    } else if (BMI >= 18.5 && BMI < 25) {
        result = "정상체중입니다.";
    } else if (BMI >= 25 && BMI < 30) {
        result = "과체중입니다.";
    } else if (BMI >= 30) {
        result = "비만입니다.";
    }

    // 결과 : BMI 수치 및 비만 여부 공시
    const message = `당신의 BMI는 ${BMI.toFixed(2)}이며, ${result}`;
    // 결과값 html에 넣어주기
    document.getElementById("BMIResult").innerHTML = message;
}

// 카카오톡 공유하기로 보내기
document.getElementById("kakaotalk-sharing-btn-bmi").onclick = function() {
    const resultText = document.getElementById("BMIResult").innerHTML;
    if (resultText) {
        shareKakao(resultText);
    } else {
        alert('bmi를 계산해주세요');
    }
};