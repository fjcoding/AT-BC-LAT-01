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

export const Player1 = new Player(
    'Player',
    1,
    3);

export class Enemy extends Character{
    constructor(CharacterType, Health, Armor, Abilitie){
        super(CharacterType, Health);
        this.Armor = Armor;
        this.Abilitie = Abilitie;
    }
};

export const Soldier = new Enemy(
    'Soldier',
    1,
    0,
    'Dont have'
)

export const Mercenarie = new Enemy(
    'Mercenarie',
    1,
    2,
    'Dont have'
)

export const Alien = new Enemy(
    'Alien',
    4,
    0,
    'Invisible'
)

export const Boss = new Enemy(
    'Boss',
    10,
    10,
    'Heal'
)

console.log(Enemy);
    