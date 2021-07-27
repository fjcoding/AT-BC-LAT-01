export class Weapon {
    constructor (name, attackPower, multipleEnemies) {
        this.weaponName = name;
        this.weaponAttackPower = attackPower;
        this.weaponHitsMultiple = multipleEnemies;
    }

    dealsDamage(){
        return this.weaponAttackPower;
    }
}