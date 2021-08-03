class Fruit {
    constructor(name, taste) {
        this.name = name;
        this.taste = taste;
    }

    getTaste() {
        return `The ${this.name} tastes ${this.taste}.`;
    }
}

const apple = new Fruit('apple', 'sweet');
const orange = new Fruit('orange', 'tangy');

console.log(apple.getTaste());
console.log(orange.getTaste());