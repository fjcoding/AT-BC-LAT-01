//Example 1: Decorating Constructors With New Functionality
function Vehicle(vechicleType) {
    this.vechicleType = vechicleType || 'car';
    this.model = 'default';
    this.license ='00000-000';
}

// Test instance for a basic vehicle
var testInstance = new Vehicle('car');
console.log(testInstance);

var truck = new Vehicle('truck');

//new functionality
truck.setModel = function(modelName) {
    this.model = modelName;
};

//another new functionality
truck.setColor =function(color) {
    this.color = color;
};

truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

var secondInstance = new Vehicle('car');
console.log(secondInstance);
