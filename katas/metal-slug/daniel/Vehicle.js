export class Vehicle {
    constructor (name = 'camel', pointsOfHealth = 0) {
        this.name = name;
        this.pointsOfHealth = pointsOfHealth;
    }

    receiveAttack(attackPower = 1) {
        if (this.pointsOfHealth > attackPower) {
            this.pointsOfHealth = this.pointsOfHealth - attackPower;
            return this.pointsOfHealth;
        }
        return 0;
    }
}

export const vehicles = {
    tank: new Vehicle('tank', 3),
    plane: new Vehicle('plane', 4),
    camel: new Vehicle('camel', 1),
    submarine: new Vehicle('submarine', 3)
};