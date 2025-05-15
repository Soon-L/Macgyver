// 칼로리 소모량 계산기
import { shareKakao } from "./kakaotalkSharingApi.js";
export function calorieConsumptionMeters(excersise, weight, exerciseTime) {

    let consumeCalorie;

    if (excersise === 'running') {
        consumeCalorie = parseInt(weight * exerciseTime * 0.1225);
    } else if (excersise === 'step') {
        consumeCalorie = parseInt(weight * exerciseTime * 0.1225);
    } else if (excersise === 'swimming') {
        consumeCalorie = parseInt(weight * exerciseTime * 0.1575);
    } else if (excersise === 'cycle') {
        consumeCalorie = parseInt(weight * exerciseTime * 0.14);
    } else if (excersise === 'jumping') {
        consumeCalorie = parseInt(weight * exerciseTime * 0.175);
    }

    // 결과 : 칼로리 수치 공시
    const message = `당신의 칼로리 소모량은 ${consumeCalorie}Kcal입니다`;
    // 결과값 html에 넣어주기
    document.getElementById("CalorieResult").innerHTML = message;


    // 카카오톡 공유하기로 보내기
    document.getElementById("kakaotalk-sharing-btn-calorie").onclick = function() {
        const resultText = document.getElementById("CalorieResult").innerHTML;
        if (resultText) {
            shareKakao(resultText);
        } else {
            alert('칼로리를 계산해주세요');
        }
    };

}