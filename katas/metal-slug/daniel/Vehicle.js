export class Vehicle {
    constructor (name = 'camel', pointsOfHealth = 0) {
        this.name = name;
        this.pointsOfHealth = pointsOfHealth;
    }

    receiveAttack( attackPower = 1 ) {
        if ( this.pointsOfHealth >= attackPower ) {
            this.pointsOfHealth = this.pointsOfHealth - attackPower;
            return this.pointsOfHealth;
        }
        return 0;
    }
}