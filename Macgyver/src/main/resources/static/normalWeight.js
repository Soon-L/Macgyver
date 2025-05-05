// 입력창 : 키(cm 기준), 소수점 둘째자리에서 반올림으로 기준 잡음음


export function normalWeight(){
    const height = parseFloat(document.getElementById('NormalWeightHeight').value); // cm
    let changeHeight = parseFloat(height/100);

    let minWeight = parseFloat((18.5 * changeHeight * changeHeight).toFixed(1));
    let maxWeight = parseFloat((25 * changeHeight * changeHeight).toFixed(1));
    
    alert('정상체중은 ' + minWeight + 'kg부터 ' + maxWeight + 'kg까지입니다.');
}
