export class Output {

    generateResults(actorsArray) {
        var results = new Object();
        for (var index = 0; index < actorsArray.length; index++) {
            if (actorsArray[index].health > 0) {
                results[actorsArray[index].name] = 'Alive';
            } else {
                results[actorsArray[index].name] = 'Dead';
            }
        }
        return results;
    }

}
