export class Character {
    constructor (CharacterType, Health) {
        this.CharacterType = CharacterType;
        this.Health = Health;
    }
}

export const Civilian = new Character (
    'Civilian',
    1);

export class Player extends Character{
    constructor(CharacterType, Health, Life){
        super(CharacterType, Health);
        this.Life = Life;
    }
}