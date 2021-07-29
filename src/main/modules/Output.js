export class Response {
    constructor (results, parserActorsArray){
        this.results = results;
        this.parserActorsArray = parserActorsArray;
    }

    generateResults(parserActorsArray) {
        var results = new Object();
        for (var index = 0; index < parserActorsArray.length; index++){

            console.log(parserActorsArray[index].name);
            if (parserActorsArray[index].health > 0){
                results[parserActorsArray[index].name] = 'Alive';
                console.log(results[parserActorsArray[index].name]);
            } else {
                results[parserActorsArray[index].name] = 'Dead';
            }
        }
        console.log(results);
        return results;
    }

}
