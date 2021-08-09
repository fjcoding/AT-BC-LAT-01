class Observable {
    constructor() {
        this.observers = [];
    }

    // Suscribe una clase notificadora
    subscribe(c) {
        this.observers.push(c);
    }

    // Desuscribe la clase notificadora
    unsubscribe(c) {
        this.observers = this.observers.filter(observer => observer instanceof c !== true);
    }

    // Llama a todos nuestros suscriptores
    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model);
        });
    }
}
class NumberExample extends Observable {
    constructor() {
        super();
        this.value = 0;
    }

    increment() {
        this.value++;

        // Llama a los suscriptores
        this.notify(this);
    }
}

class NumberExampleSpanishConsole {
    notify(model) {
        console.log(`El nuevo número es ${model.value}`);
    }
}

class NumberExampleEnglishConsole {
    notify(model) {
        console.log(`The new number is ${model.value}`);
    }
}

// Instanciamos al sujeto
let numberExample = new NumberExample();

// Le suscribimos sus suscriptores o listeners
numberExample.subscribe(new NumberExampleEnglishConsole());
numberExample.subscribe(new NumberExampleSpanishConsole());

numberExample.increment();
numberExample.increment();
numberExample.increment();

numberExample.unsubscribe(NumberExampleEnglishConsole);

numberExample.increment();
numberExample.increment();

numberExample.unsubscribe(NumberExampleSpanishConsole);

numberExample.increment();
numberExample.increment();