import { Vehicle } from './Vehicle.js';
export class Tank extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
        this.setvehicleLifePoints(3);
    }
}