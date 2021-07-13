export function squareDigits(num) {
        let  strNum = num.toString();
        let  result = 0;

                for(let i = 0; i < strNum.length; i++){
                        let squareNum = parseInt(strNum[i]) * parseInt(strNum[i]);
                        result = result + String(squareNum);
                }



        return parseInt(result);

}

