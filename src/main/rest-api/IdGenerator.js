export class IdGenerator {
    constructor (idLength = 6, charaters = 'abcdefghijklmnopqrstuvwxyz') {
        this.idLength = idLength;
        this.charaters = charaters;
    }

    generateId() {
        let id = '';
        for (let indexOfCharacter = 1; indexOfCharacter <= this.idLength; indexOfCharacter++) {
            id += this.charaters.charAt(Math.round(Math.random() * this.charaters.length));
        }
        console.log(id);
        return id;
    }
}