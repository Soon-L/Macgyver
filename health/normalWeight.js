// 입력창 : 키(cm 기준), 소수점 둘째자리에서 반올림으로 기준 잡음음
const height = 170; // cm

function normalWeight(height){
    let changeHeight = height * 1/100;

    let minWeight = (18.5 * height * height).toFixed(1);
    let maxWeight = (25 * height * height).toFixed(1);
    
    console.log('정상체중은 ' + minWeight + '부터 ' + maxWeight + '까지입니다.');
}
