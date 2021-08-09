//Example 2: Decorating Objects with Multiple Decorators
function man(){
    this.movement = function () {
        return 'can walk';
    };
}

// We can use anonymous functions to decorate an object
function canFly (man) {
    var previousMovement = man.movement(); //base function
    man.movement = function() { //we overwrite the method
        return previousMovement + ', fly'; //and in using the previous method, we are extending over it
    };
}

// Because the function could refer to anything, we don't need to create the target object first
function canBreatheinSpace (man) {
    var previousMovement = man.movement();
    man.movement = function() {
        return previousMovement + ', can breathe in space';
    };
}

// In this decorator we are adding a completely new behavior, not extending an existing one
function canTakeBullets(man) {
    man.resistances = function() {
        return 'resists bullets';
    };
}

//so, now we have two typical men
var jimmy = new man();
var clark = new man();

//but then, clark has some interesting abilities...
canFly(clark);
canBreatheinSpace(clark);
canTakeBullets(clark);

//creating another object of the same class to show that the decorations are unique to clark
var bruce = new man();

console.log(jimmy); //a man should walk
console.log('Jimmy');
console.log(jimmy.movement());
console.log(clark); //but a superman...
console.log('Clark');
console.log(clark.movement());
console.log(clark.resistances());
console.log('Bruce'); //man created to show that the changes affect only the clark object
console.log(bruce.movement());