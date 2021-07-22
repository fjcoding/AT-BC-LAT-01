import { Camel, Plain, Submarine, Tank } from './Vehicle';

describe('Creation', () => {
    test('Given a camel instance can return its default health value 1', () => {
        const camelInstance = new Camel();
        expect(camelInstance.getHealth()).toBe(1);
    });
    test('Given a plain instance can return its default health value 4', () => {
        const plainInstance = new Plain();
        expect(plainInstance.getHealth()).toBe(4);
    });
    test('Given a tank instance can return its default health value 3', () => {
        const tankInstance = new Tank();
        expect(tankInstance.getHealth()).toBe(3);
    });
    test('Given a submarine instance can return its default health value 3', () => {
        const submarineInstance = new Submarine();
        expect(submarineInstance.getHealth()).toBe(3);
    });
});

describe('Reduce vehicles health', () => {
    test('Given a plain instance we can reduce its health by 1 - it should return 3', () => {
        const plainInstance = new Plain();
        plainInstance.reciveDamage(1);
        expect(plainInstance.getHealth()).toBe(3);
    });
    test('Given a camel instance we can reduce its health by 1 - it should return 0', () => {
        const camelInstance = new Camel();
        camelInstance.reciveDamage(1);
        expect(camelInstance.getHealth()).toBe(0);
    });
    test('Given a camel instance we can reduce its health by 2 and it should be less than 0 - it should return 0', () => {
        const camelInstance = new Camel();
        camelInstance.reciveDamage(2);
        expect(camelInstance.getHealth()).toBe(0);
    });
});
