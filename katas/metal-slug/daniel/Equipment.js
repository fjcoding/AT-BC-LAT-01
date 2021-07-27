class Equipment {
    constructor (name) {
        this.name = name;
        this.type = undefined;
    }

    equipCharacter(character, equipment = this) {
        character.equipment[this.type] = equipment;
    }
}

export class DefenceEquipment extends Equipment {
    constructor (name, pointsOfHealth = 1) {
        super();
        this.type = 'defence';
        this.name = name;
        this.pointsOfHealth = pointsOfHealth;
    }

    receiveAttack(character, attackPower = 1) {
        if (this.pointsOfHealth > attackPower) {
            this.pointsOfHealth = this.pointsOfHealth - attackPower;
            return this;
        }

        this.equipCharacter(character, new NoDefenceEquipment);
        return NoDefenceEquipment;
    }
}

export class NoDefenceEquipment extends DefenceEquipment {
    constructor () {
        super();
        this.type = 'defence';
        this.name = 'No equipment';
        this.pointsOfHealth = 0;
    }

    receiveAttack(character, attackPower = 1) {
        character.pointsOfHealth = character.pointsOfHealth - attackPower;
        if (character.pointsOfHealth <= 0) {
            character.numOfLifes--;

            if (character.numOfLifes < 0) {
                character.pointsOfHealth = 0;
                character.numOfLifes = 0;
            } else {
                character.pointsOfHealth = character.initialHealth;
            }
        }
        return this;
    }
}

class WeaponEquipment extends Equipment {
    constructor (name, attackPower = 0, type = 'weapon') {
        super(name);
        this.attackPower = attackPower;
        this.type = type;
    }

    reduceHealthOfEnemy (enemyHealth) {
        if (enemyHealth >= this.attackPower) return enemyHealth - this.attackPower;
        return 0;
    }

    attack () {
    }
}

export class HitSingleEnemyWeaponEquipment extends WeaponEquipment {
    constructor(name = 'handgun', attackPower = 1, type = 'gun') {
        super(name, attackPower, type);
    }

    attack (enemies) {
        if (enemies[0].pointsOfHealth >= 0) {
            enemies[0].pointsOfHealth = this.reduceHealthOfEnemy(enemies[0].pointsOfHealth);
        }
    }
}

export class HitMultipleEnemiesWeaponEquipment extends WeaponEquipment {
    constructor(name = 'shotgun', attackPower = 5, type = 'gun') {
        super(name, attackPower, type);
    }

    attack (enemies) {
        enemies.forEach(enemy => {
            if (enemy.pointsOfHealth >= 0) {
                enemy.pointsOfHealth = this.reduceHealthOfEnemy(enemy.pointsOfHealth);
            }
        });
    }
}
