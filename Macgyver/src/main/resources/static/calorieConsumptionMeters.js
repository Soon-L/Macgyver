// 칼로리 소모량 계산기
export function calorieConsumptionMeters(excersise, weight, exerciseTime){
    let consumeCalorie;


    if(excersise === 'running'){
        consumeCalorie = parseInt(weight * exerciseTime * 0.1225);
    }
    else if(excersise === 'step'){
        consumeCalorie = parseInt(weight * exerciseTime * 0.1225);
    }
    else if(excersise === 'swimming'){
        consumeCalorie = parseInt(weight *exerciseTime * 0.1575);
    }
    else if(excersise === 'cycle'){
        consumeCalorie = parseInt(weight * exerciseTime * 0.14);
    }
    else if(excersise === 'jumping'){
        consumeCalorie = parseInt(weight * exerciseTime * 0.175);
    }

    alert('칼로리 소모량은 ' + consumeCalorie + 'kcal입니다.');
    

}