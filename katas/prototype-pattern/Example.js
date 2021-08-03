function Candy(name) {
    this.name = name;
}
Candy.prototype.printName = function () {
    console.log(this.name);
};
var chocolate = new Candy('chocolate');
chocolate.printName();
var gummyBears = new Candy('gummy bears');
gummyBears.printName();