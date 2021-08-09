class Pizza {
    constructor() {
        this.tomato = false;
        this.cheese = false;
        this.thinDough = false;
        this.pineappleSlices = 0;
        this.baconStrips = 0;
        this.otherIngredients = [];
    }

    setTomato() {
        this.tomato = true;
        return this;
    }

    setCheese() {
        this.cheese = true;
        return this;
    }

    setThinDough() {
        this.thinDough = true;
        return this;
    }

    setPineappleSlices(slices) {
        this.pineappleSlices = slices;
        return this;
    }

    setBaconStrips(strips) {
        this.baconStrips = strips;
        return this;
    }

    addOtherIngredients(ingredient) {
        this.otherIngredients.push(ingredient);
        return this;
    }

    build() {
        return {
            tomato: this.tomato,
            cheese: this.cheese,
            thinDough: this.thinDough,
            pineappleSlices: this.pineappleSlices,
            baconStrips: this.baconStrips,
            otherIngredients: this.otherIngredients
        };
    }
}

let pizza = new Pizza()
    .setTomato()
    .setCheese()
    .setThinDough()
    .setPineappleSlices(3)
    .setBaconStrips(4)
    .setOtherIngredients(['Pepperoni', 'Sausages'])
    .build();

console.log(pizza.build);