import { Vehicle } from './Vehicle.js';

describe('Vehicle expected to reduce its pointsOfHealt when receives an attackPower', () => {
    const tank = new Vehicle('tank', 3);

    test('less than its own pointOfHealth', () => {
        expect( tank.receiveAttack(1) ).toBe( 2 );
        expect( tank.receiveAttack(1) ).toBe( 1 );
    });

    test('greater than its own pointsOfHealth', () => {
        expect( tank.receiveAttack(2) ).toBe( 0 );
        expect( tank.receiveAttack(1) ).toBe( 0 );
    });
});