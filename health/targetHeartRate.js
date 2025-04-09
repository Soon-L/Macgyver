// 입력창 :  나이(만나이?)
const age = 20; // 추후 input으로 처리

function targetHeartRate(age){
    let maxHeartRate = 220 - age;
    let minTarget = maxHeartRate * 50 * 1/100;
    let maxTarget = maxHeartRate * 85 * 1/100;

    console.log('목표심박수는 ' + minTarget + '부터 ' + maxTarget + '까지입니다.');
}
