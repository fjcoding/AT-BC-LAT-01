function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles';
};

let audi = new Car('A3', '2010', '85000');

console.log(audi.toString);