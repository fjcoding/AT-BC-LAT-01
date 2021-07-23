export function squareDigits(num) {
<<<<<<< HEAD
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
=======
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
>>>>>>> eda6f56c57a2704f808e3fe108231e0e985f6428
}