export class Args {
    stringSplitter(stringInput) {
        let stringInputSplit = stringInput.split(' ');
        return stringInputSplit;
    }
    getFlagsPosition(stringSplitted) {
        let flagPositionList = [];
        let flagCounter = 0;
        for (let index = 0; index < stringSplitted.length; index++) {
            if (stringSplitted[index].includes('-')) {
                flagPositionList[flagCounter] = index;
                flagCounter++;
            }
        }
        return flagPositionList;
    }
}