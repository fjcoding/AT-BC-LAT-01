export class Output {
    constructor(results, parserActorsArray) {
        this.results = results;
        this.parserActorsArray = parserActorsArray;
    }

    generateResults() {
        var results = new Object();
        for (var index = 0; index < this.parserActorsArray.length; index++) {
            if (this.parserActorsArray[index].health > 0) {
                results[this.parserActorsArray[index].name] = 'Alive';
            } else {
                results[this.parserActorsArray[index].name] = 'Dead';
            }
        }
        return results;
    }
}
