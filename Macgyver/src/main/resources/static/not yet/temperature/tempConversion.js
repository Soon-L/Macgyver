function tempConversion(temp,input){
    let result = 0;
    if(temp=='C'){
        result = input*1.8+32;
    }
    else if(temp=='F'){
        result = (input-32)*1.8;
    }

    console.log(result);
}

tempConversion('f',32);