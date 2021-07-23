import { Vehicle } from './Vehicle.js';
export class Plane extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
        this.setvehicleLifePoints(4);
    }
}