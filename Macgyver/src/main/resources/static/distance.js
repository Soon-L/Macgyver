// 두 좌표 사이 거리구하기 (주행 거리)
export function getDistance(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;

    return (Math.sqrt(x * x + y * y)).toFixed(2);
    // Math.sqrt() <- 결과의 제곱근을 리턴
}
