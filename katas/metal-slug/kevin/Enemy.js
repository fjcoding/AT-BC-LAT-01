export class Enemy {
    constructor(lifePoints, attackPower) {
        this.lifePoints = lifePoints;
        this.attackPower = attackPower;
    }
}
export class EnemySoldier extends Enemy {
    constructor(lifePoints, attackPower) {
        super(lifePoints, attackPower);
    }
}
export class Mercenarie extends Enemy {
    constructor(lifePoints, attackPower) {
        super(lifePoints, attackPower);
    }
}
export class Alien extends Enemy {
    constructor(lifePoints, attackPower) {
        super(lifePoints, attackPower);
    }
}
export class Boss extends Enemy {
    constructor(lifePoints, attackPower) {
        super(lifePoints, attackPower);
    }
}
export class EnemyVehicle extends Enemy {
    constructor(lifePoints, attackPower) {
        super(lifePoints, attackPower);
    }
}