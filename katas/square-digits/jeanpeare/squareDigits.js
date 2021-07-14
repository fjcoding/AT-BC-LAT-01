export function squareDigits(num) {
    let divideArr = [...`${num}`].map(c => parseInt(c)); // Divide input number in an array
    var arraylength = divideArr.length;                            // Get the length of the Array created
    var arrayindex = 0;                                           // Declare the var j for looping
    let resultArr = [];                                  // Declare the Array which will contain the result
    while (arrayindex < arraylength) {
        resultArr[arrayindex] = Math.pow(divideArr[arrayindex], 2);         // Get the numbers elevated by 2
        arrayindex++;
    }
    var resultInt = resultArr.join('');                  // Get the result concatenated
    return parseInt(resultInt);                          // Return the concatenated result as Integer
}