import { FlyweightFactory } from './FlyweightFactory';

export class PhoneCollection {
    constructor() {
        this.collection = {};
        this.factory = new FlyweightFactory;
    }

    add(brand, model, type, memory, tag) {
        this.collection[tag] = {
            flyweight: this.factory.get(brand, model, type),
            memory: memory,
            tag: tag
        };
    }

    get(tag) {
        return this.collection[tag];
    }

    getAll() {
        return this.collection;
    }
}