//재료 비율 계산기

function cookingRatioCal(weightArr){
    let sumWeight=0;
    const ratioArr= [];
    for(let i = 0; i<weightArr.length;i++){
        sumWeight+=weightArr[i];
    }
    
    for(let i = 0; i < weightArr.length; i++){
        ratioArr.push(weightArr[i]/sumWeight);
    }
    console.log(sumWeight);
    console.log(ratioArr);
}

cookingRatioCal([1,23,3]);