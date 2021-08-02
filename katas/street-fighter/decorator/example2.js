//Example 2: Decorating Objects with Multiple Decorators
function MacBook(){
    this.cost = function () {
        return 997;
    };
    this.screenSize = function () {
        return 11.6;
    };
}

// Decorator 1
function memory (macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    };
}

// Decorator 2
function engraving (macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    };
}

// Decorator 3
function insurance (macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    };
}

var macBook = new MacBook();
memory(macBook);
engraving(macBook);
insurance(macBook);
var anotherMacbook = new MacBook();

// Expected output: 1522
console.log(macBook.cost());
console.log(anotherMacbook.cost());
// Expected output: 11.6
console.log(macBook.screenSize());
console.log(macBook);