export class Parser {
    argsSplitter(argsInput) {
        let argsInputSplit = argsInput.split(' ');
        return argsInputSplit;
    }
    getFlagsPosition(argsSplitted) {
        let argsSplit = argsSplitted;
        let positionList = [];
        let positionListCounter = 0;
        for (let index = 0; index < argsSplit.length; index++) {
            if (argsSplit[index].includes('-')) {
                positionList[positionListCounter] = index;
                positionListCounter++;
            }
        }
        return positionList;
    }
}
