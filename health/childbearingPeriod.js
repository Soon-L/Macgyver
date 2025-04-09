// 마지막 생리 시작일, 평균 생리 주기
// 가임기 = 배란일-3일 ~ 배란일+5일일
// 배란일 = (마지막 생리 시작일 + 평균 생리 주기) - 14


// 임신 예정일은 보통 마지막 생리일부터 2주후쯤으로 보나 정확한 날을 계산하기 어려움
// -> 임신 예정일 대신 가임기로 기능 만듦


const lastMenses = new Date(); // 마지막 생리일, input 처리
const mensesPeriod = 30; // 생리 주기, input 처리

function childbearingPeriod(lastMenses, mensesPeriod){
    const ovulationDay = new Date(lastMenses); // 배란일
    ovulationDay.setDate(lastMenses.getDate()+mensesPeriod-14);

    const startDay = new Date(ovulationDay); // 가임기 시작일
    startDay.setDate(ovulationDay.getDate()-3);

    const endDay = new Date(ovulationDay); // 가임기 끝날
    startDay.setDate(ovulationDay.getDate()+5);

    console.log(startDay);
}