import { Flyweight } from './Flyweight';

export class FlyweightFactory {
    constructor() {
        this.flyweight = {};
    }

    get(brand, model, type) {
        if (!this.flyweight[brand + model + type]) {
            this.flyweight[brand + model + type] = new Flyweight(brand, model, type);
        }
        return brand + model + type;
    }

    getAll() {
        return this.flyweight;
    }
}