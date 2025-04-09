// 두 좌표 사이 거리구하기 (주행 거리)
function getDistance(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;

    return Math.sqrt(x * x + y * y);
    // Math.sqrt() <- 결과의 제곱근을 리턴
}
