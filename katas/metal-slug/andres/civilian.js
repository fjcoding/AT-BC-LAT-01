export class Civilian {
    constructor (name, itemToGive) {
        this.civilianName = name;
        this.carriedItem = itemToGive;
    }

    giveItem(){
        return this.carriedItem;
    }

    showName(){
        return this.civilianName;
    }
}