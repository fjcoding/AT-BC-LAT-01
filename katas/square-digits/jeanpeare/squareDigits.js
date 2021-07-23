export function squareDigits(num) {
    let divideArr = [...`${num}`].map(c => parseInt(c)); 
    var arraylength = divideArr.length;                  
    var arrayindex = 0;                                  
    let resultArr = [];                                  
    while (arrayindex < arraylength) {
        resultArr[arrayindex] = Math.pow(divideArr[arrayindex], 2);         
        arrayindex++;
    }
    var resultInt = resultArr.join('');                  
    return parseInt(resultInt);                          
}