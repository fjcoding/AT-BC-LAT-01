//Example 1: Decorating Constructors With New Functionality
function jojo(name, stand) { //since season 3, every jojo has a special psioninc ability (stand)
    this.name = name || 'Jojo';
    this.stand = stand || 'Stand';
}

//But there's a special case: Joseph Joestar, who also has Hamon
var joseph = new jojo('Joseph', 'Hermit Purple');

//so we decorate him with an additional property to reflect that
joseph.addSpecialAbility = function(newPower) {
    this.specialAbility = newPower;
};

//we could add some new behaviors onto objects, like the Arrow that grants some stands the Requiem Status
var giorno = new jojo('Giorno Giovanna', 'Gold Experience');
//you need to create the object before decorating it, so don't forget it!
giorno.receiveArrow =function() {
    this.stand = this.stand + ' Requiem';
};

// Typical Jojos
var jotaro = new jojo('Jotaro Kujo', 'Star Platinum');
var josuke = new jojo('Josuke Higashikata');

//until now joseph only has a stand...
joseph.addSpecialAbility('Hamon');

//and giorno needs to receive an arrowhead to upgrade his stand
giorno.receiveArrow();

//you can check the abilitIes of diferrent jojos to ensure only the decorated ones have the new properties and behavior
console.log(joseph);
console.log(jotaro);
console.log(josuke);
console.log(giorno);
