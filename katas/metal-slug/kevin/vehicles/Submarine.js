import { Vehicle } from './Vehicle.js';
export class Submarine extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
        this.setvehicleLifePoints(3);
    }
}