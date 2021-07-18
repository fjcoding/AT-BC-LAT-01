export class Args {
    stringSplitter(stringInput) {
        let stringInputSplit = stringInput.split(' ');
        return stringInputSplit;
    }
    getFlagsPosition(stringSplitted) {
        let stringSplit = stringSplitted;
        let flagPositionList = [];
        let flagCounter = 0;
        for (let index = 0; index < stringSplit.length; index++) {
            if (stringSplit[index].includes('-')) {
                flagPositionList[flagCounter] = index;
                flagCounter++;
            }
        }
        return flagPositionList;
    }
}