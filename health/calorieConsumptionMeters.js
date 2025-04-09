// 칼로리 소모량 계산기

// input으로 처리
const weight = 50; // kg
const exerciseTime = 100; // 분
const walkUpStep = 10; // 층




// 함수들 보류
// 달리기
function running(weight, exerciseTime){
    //const weight = 60; // 몸무게
    //const exerciseTime = 30; // 분
    const kcal = 8;
    let consumeCalorie = weight * kcal * exerciseTime * (1/60);

}




// 일반 계단(층수계산)
function normalStep(weight, walkUpStep){
    //칼로리 소모량 = (체중 x 계단 높이 x 오른 계단 수) x 0.09
    //const weight = 60; // kg
    //const walkUpStep = 10; // 층
    const stepHeight = 172; // mm
    const stepCount = 16; // 아파트 기준
    let consumeCalorie = weight * stepHeight * stepCount * walkUpStep * 9 * (1/100);

}





// 수영(자유형 보통 기준)
function swimming(weight, exerciseTime){
    // 칼로리 소모량 = 체중 * 시간 * 운동강도
    //const weight = 60; // kg
    //const exerciseTime = 30; // 분
    const strength = 8.3 // 참고 : https://xn--yq5bk9r.com/blog/calc-swimming-calorie

    let consumeCalorie = weight * exerciseTime * (1/60) * strength;

}





// 자전거
function cycle(weight, exerciseTime){
    //const weight = 60; //kg
    //const exerciseTime = 30; // 분
    const kcal = 35; // 1kg 당 1시간 소모량
    
    let consumeCalorie = weight * exerciseTime * (1/60) * kcal;

}






//줄넘기
function jumpRope(weight, exerciseTime){
    //const weight = 60; //kg
    //const exerciseTime = 30; // 분
    const kcal = 13;

    let consumeCalorie = weight * exerciseTime * (1/60) * kcal;
}