export class Enemy extends Character{
    constructor(CharacterType, Health, Armor, Abilitie){
        super(CharacterType, Health);
        this.Armor = Armor;
        this.Abilitie = Abilitie;
    }
}