import { Flyweight } from './Flyweight';

export class FlyweightFactory {
    constructor () {
        this.flyweight = {};
    }

    get (brand, model, type) {
        if (!this.flyweight[brand + model + type]) {
            this.flyweight[brand + model + type] = new Flyweight(brand, model, type);
        }
        return this.flyweight[brand + model + type];
    }

    getAll () {
        var flyweights = [];
        Object.keys(this.flyweight).forEach(element => {
            flyweights.push(this.flyweight[element]);
        });
        return flyweights;
    }
}