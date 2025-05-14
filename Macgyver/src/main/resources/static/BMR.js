import { shareKakao } from './kakaotalkSharingApi.js';
export function BMR(gender, height, weight, age) {
    let BMR;

    if (gender === 'male') {
        BMR = parseFloat(66.47 + (13.75 * weight) + (5.003 * height) - (6.775 * age));

    } else if (gender === 'female') {
        BMR = parseFloat(665.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
    }

    //  결과 : BMR 수치 및 섭취 칼로리 공시
    const message = `당신의 BMR는 ${BMR.toFixed(2)}입니다~`;
    document.getElementById("BMRResult").innerHTML = message;

    //  카카오톡 공유하기로 보내기
    document.getElementById("kakaotalk-sharing-btn-bmr").onclick = function() {
        const resultText = document.getElementById("BMRResult").innerHTML;
        if (resultText) {
            shareKakao(resultText);
        } else {
            alert('bmr를 계산해주세요');
        }
    };
}