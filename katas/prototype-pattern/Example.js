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

//Another example

const Warrior = function(name) {
    this.name = name;
    this.hp = 100;
};

Warrior.prototype.bash = function(target) {
    target.hp -= 15;
};

Warrior.prototype.omniSlash = function(target) {
    // The target's hp may not be under 50 or this attack will fail on the opponent
    if (target.hp < 50) {
        return;
    }
    target.hp -= 50;
};

const sam = new Warrior('Sam');
const lenardo = new Warrior('Lenardo');

sam.bash(lenardo);
console.log(sam.bash == lenardo.bash);

//If we don't use prototype

const Warrior1 = function(name) {
    this.name = name;
    this.hp = 100;

    this.bash = function(target) {
        target.hp -= 15;
    };

    this.omniSlash = function(target) {
    // The target's hp may not be under 50 or this attack will fail on the opponent
        if (target.hp < 50) {
            return;
        }
        target.hp -= 50;
    };
};

const sam1 = new Warrior1('Sam');
const lenardo1 = new Warrior1('Lenardo');

console.log(sam1.bash === lenardo1.bash);