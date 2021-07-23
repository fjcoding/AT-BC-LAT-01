import { Vehicle } from './Vehicle.js';
export class Camel extends Vehicle {
    constructor(lifePoints) {
        super(lifePoints);
        this.setvehicleLifePoints(1);
    }
}