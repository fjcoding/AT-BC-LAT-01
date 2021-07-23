import { Vehicle } from './Vehicle';

describe('Creation', () => {
    test('Given a camel instance can return its default health value 1', () => {
        const camelHealth = 1;
        const camel = new Vehicle('Camel', camelHealth);
        expect(camel.getHealth()).toBe(1);
    });
    test('Given a tank instance can return its default health value 1', () => {
        const tankHealth = 3;
        const tank = new Vehicle('Tank', tankHealth);
        expect(tank.getHealth()).toBe(3);
    });
});

describe('Vehicles recive damage', () => {
    test('Given a Plane instance we can reduce its health by 1 - it should return 3', () => {
        const planeHealth = 4;
        const plane = new Vehicle('Plane', planeHealth);
        plane.receiveDamage(1);
        expect(plane.getHealth()).toBe(3);
    });
    test('Given a submarine instance we can reduce its health by 3 - it should return 0', () => {
        const submarineHealth = 3;
        const submarine = new Vehicle('Submarine', submarineHealth);
        submarine.receiveDamage(3);
        expect(submarine.getHealth()).toBe(0);
    });
    test('Given a camel instance we can reduce its health by 6 and it shoul retrurn a negative number- it should return 0', () => {
        const camelHealth = 1;
        const camel = new Vehicle('Camel', camelHealth);
        camel.receiveDamage(6);
        expect(camel.getHealth()).toBe(-5);
    });
});
