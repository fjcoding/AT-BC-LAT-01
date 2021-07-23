export class CharactersSchema {
    characters = [{
        character: 'Soldier1',
        hole: 'soldier',
        habilities: 'habilities',
        health: 30,
        vehicle: 'camel',
    },
    {
        character: 'Enemy1',
        hole: 'enime',
        habilities: 'habilities',
        health: 30,
        vehicle: null,
    },
    ];

    displayCharacters() {
        return this;
    }

    insertNewCharacterSchema(newCharacter) {
        this.characters.push(newCharacter);
    }
}

class Character {
    constructor(_character, _hole, _healt, _vehicle) {
        this.character = _character;
        this.hole = _hole;
        this.health = _healt;
        this.vehicle = _vehicle;
    }
}

export class Soldier extends Character {
    constructor(_character, _vehicle) {
        super(_character, 'soldier', 30, _vehicle);
        this.habilities = ['shootWeapon', 'useKnife', 'throwGranades'];
    }

    showCurrentSchema() {
        let schemaInstance = new CharactersSchema;
        schemaInstance.insertNewCharacterSchema(this);

        return schemaInstance.displayCharacters();
    }
}