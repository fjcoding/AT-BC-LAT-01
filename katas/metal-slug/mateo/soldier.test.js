import { soldier } from "./soldier";

describe('this test is for soldier class', () => {
    test('the method newWeapon gives the new atack damage of the soldier after he gets a new weapon', () => {
        const soldierInstance = new soldier();
        expect(soldierInstance.newWeapon(5)).toBe(6);
        expect(soldierInstance.newWeapon(2)).toBe(3);
        expect(soldierInstance.newWeapon(4)).toBe(5);
        expect(soldierInstance.newWeapon(5)).toBe(6);
    })
    
    test('the method newVehicle gives the new health of the soldier after he gets a vehicle', () => {
        const soldierInstance = new soldier();
        expect(soldierInstance.newVehicle(3)).toBe(4);
        expect(soldierInstance.newVehicle(4)).toBe(5);
        expect(soldierInstance.newVehicle(1)).toBe(2);
        expect(soldierInstance.newVehicle(3)).toBe(7);
    })
})