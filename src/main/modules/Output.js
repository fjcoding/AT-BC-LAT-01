export class Output {

    generateResults(parserActorsArray) {
        var results = new Object();
        for (var index = 0; index < parserActorsArray.length; index++) {
            if (parserActorsArray[index].health > 0) {
                results[parserActorsArray[index].name] = 'Alive';
            } else {
                results[parserActorsArray[index].name] = 'Dead';
            }
        }
        return results;
    }

}
