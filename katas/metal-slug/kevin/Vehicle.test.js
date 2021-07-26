import { Tank, Plane, Camel, Submarine } from './Vehicle.js';
test('Verify that Tank has 3 lifepoints', () => {
    let tank = new Tank();
    const expectedTankLifePoints = 3;
    expect(tank.lifePoints).toBe(expectedTankLifePoints);
});
test('Verify that Plane has 4 lifepoints', () => {
    let plane = new Plane();
    const expectedPlanekLifePoints = 4;
    expect(plane.lifePoints).toBe(expectedPlanekLifePoints);
});
test('Verify that Camel has 1 lifepoints', () => {
    let camel = new Camel();
    const expectedCamelLifePoints = 1;
    expect(camel.lifePoints).toBe(expectedCamelLifePoints);
});
test('Verify that Submarine has 3 lifepoints', () => {
    let submarine = new Submarine();
    const expectedSubmarineLifePoints = 3;
    expect(submarine.lifePoints).toBe(expectedSubmarineLifePoints);
});