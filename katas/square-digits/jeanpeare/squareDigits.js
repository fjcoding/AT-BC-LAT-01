export function squareDigits(num) {
    let divideArr = [...`${num}`].map(c => parseInt(c)); // Divide input number in an array
    var i = divideArr.length;                            // Get the length of the Array created
    var j = 0;                                           // Declare the var j for looping
    let resultArr = [];                                  // Declare the Array which will contain the result
    while (j<i) {
        resultArr[j] = Math.pow(divideArr[j],2);         // Get the numbers elevated by 2
        j++;
    }
    var resultInt = resultArr.join('');                  // Get the result concatenated
    return parseInt(resultInt);                          // Return the concatenated result as Integer
}