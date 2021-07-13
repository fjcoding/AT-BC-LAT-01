export function squareDigits(num) {
    let div = [...`${num}`].map(c => parseInt(c)); //Divide input number in an array
    var i = div.length;
    var j = 0;
    let resa =[];
    while (j<i){
        resa[j] = Math.pow(div[j],2);
        /*console.log(resa[j],div[j]);*/
        j++;
    }
    var resint = resa.join('');
    /*console.log(resint);*/
    return parseInt(resint);
}