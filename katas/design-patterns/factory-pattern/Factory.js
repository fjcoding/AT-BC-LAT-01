function CharacterFactory() {
    this.createCharacter = function (type) {
        switch (type) {
            case 'Soldier':
                return new Soldier();
                break;
            case 'Mercenary':
                return new Mercenary();
                break;
            case 'Alien':
                return new Alien();
                break;
            case 'Boss':
                return new Boss();
                break;
        }
    };

    function Character(health, attackPower) {
        this.health = health;
        this.attackPower = attackPower;
    }

    function Soldier() {
        return new Character(1, 1);
    }
    function Mercenary() {
        return new Character(3, 2);
    }
    function Alien() {
        return new Character(2, 4);
    }
    function Boss() {
        return new Character(10, 6);
    }
}

const factory = new CharacterFactory();
const myCharacter = factory.createCharacter('Alien');
console.log(myCharacter);
