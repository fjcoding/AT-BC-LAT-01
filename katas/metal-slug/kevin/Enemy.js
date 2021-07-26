export class Enemy {
    constructor(lifePoints, attackPower, distance) {
        this.lifePoints = lifePoints;
        this.attackPower = attackPower;
        this.distance = distance;
    }
}
export class EnemySoldier extends Enemy {
    constructor(lifePoints, attackPower, distance) {
        super(lifePoints, attackPower, distance);
    }
}
export class Mercenarie extends Enemy {
    constructor(lifePoints, attackPower) {
        super(lifePoints, attackPower);
    }
}
export class Alien extends Enemy {
    constructor(lifePoints, attackPower, distance) {
        super(lifePoints, attackPower, distance);
    }
}
export class Boss extends Enemy {
    constructor(lifePoints, attackPower, distance) {
        super(lifePoints, attackPower, distance);
    }
}
export class EnemyVehicle extends Enemy {
    constructor(lifePoints, attackPower, distance) {
        super(lifePoints, attackPower, distance);
    }
}