// 가임기 = 배란일-3일 ~ 배란일+5일일



export function childbearingPeriod(){

    const period = parseInt(document.getElementById('ChildbearingPeriod').value) // 생리주기
    const StartDay = new Date(document.getElementById('LastChildbearingPeriod').value); // 시작일
    const EndDay = new Date(document.getElementById('LastChildbearingPeriod').value); // 종료일


    
    StartDay.setMonth(StartDay.getMonth() + 1);
    StartDay.setDate(StartDay.getDate() + period -17);

    
    EndDay.setMonth(EndDay.getMonth() + 1);
    EndDay.setDate(EndDay.getDate() + period - 9);

    console.log('다음 예상 가임기는 ' + StartDay.getMonth() + '월 ' + StartDay.getDate() + '일 부터 ' +
    EndDay.getMonth() +  '월 ' + EndDay.getDate() + '일 까지입니다.');



}