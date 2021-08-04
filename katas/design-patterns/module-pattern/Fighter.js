export class Fighter {
    constructor() {
        // Health will be designed using Module Pattern
        this.health = (() => {
            var pointOfHealth = 100;

            return {
                get: () => {
                    return pointOfHealth;
                },
                reduce: (damage) => {
                    pointOfHealth -= damage;
                }
            };
        })();

    }
}