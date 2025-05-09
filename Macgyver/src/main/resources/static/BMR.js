
export function BMR(gender, height, weight, age){
    let result;

    if(gender === 'male'){
       result = parseFloat(66.47 + (13.75 * weight) + (5.003 * height) - (6.775 * age));
       
    }
    else if(gender === 'female'){
       result = parseFloat(665.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
    }
    
    alert('BMR은 ' + result.toFixed(0) + 'kcal입니다.'); // 소수점 첫째자리에서 반올림
}

