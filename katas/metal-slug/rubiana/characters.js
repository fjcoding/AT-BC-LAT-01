export class Character {
    constructor(_character, _hole, _habilities, _health, _vehicle) {
            this.character = _character;
            this.hole = _hole;
            this.habilities = _habilities;
            this.health = _health;
            this.vehicle = _vehicle;
        }
        //shoot a weapon, use a knife and throw granades
    characters = [{
            character: 'Soldier1',
            hole: 'soldier',
            habilities: 'habilities', //[shootWeapon(), useKnife(), throwGranades()],
            healt: 30,
            vehicle: 'camel',
        },
        {
            character: 'Enime1',
            hole: 'enime',
            habilities: 'habilities', //[shootWeapon(), useKnife(), throwGranades()],
            healt: 30,
            vehicle: null,
        },
    ];

    displayCharacters() {
        return this.characters
    }
}

export class Soldier extends Character {

    createNewSoldier(_character, _hole, _habilities, _health, _vehicle) {
        let newCharacter = new Character(_character, 'soldier', _habilities, 30, _vehicle);

        if (this.characters.push(newCharacter)) {
            return true
        } else {
            return false
        }
    }
}

class Enemie extends Character {

}

class Civilian extends Character {

}