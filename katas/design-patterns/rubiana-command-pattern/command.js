class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];

    }

    do(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd;
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd;
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract;
    }

    execute(currentValue) {
        return currentValue - this.valueToSubtract;
    }

    undo(currentValue) {
        return currentValue + this.valueToSubtract;
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply;
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply;
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply;
    }
}

class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide;
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide;
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide;
    }
}

class AddThenMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
        this.addCommand = new AddCommand(valueToAdd);
        this.multiplyCommand = new MultiplyCommand(valueToMultiply);
    }

    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue);
        return this.multiplyCommand.execute(newValue);
    }

    undo(currentValue) {
        const newValue = this.multiplyCommand.undo(currentValue);
        return this.addCommand.undo(newValue);
    }
}

const calculator = new Calculator();
calculator.do(new AddCommand(10));
calculator.do(new MultiplyCommand(2));
console.log(calculator.value);

calculator.undo();
console.log(calculator.value);

calculator.do(new AddThenMultiplyCommand(10, 2));
console.log(calculator.value);

calculator.do(new SubtractCommand(10));
console.log(calculator.value);

calculator.do(new DivideCommand(2));
console.log(calculator.value);