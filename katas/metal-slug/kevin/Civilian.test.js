import { Civilian } from './Civilian.js';
test('Verify that the civilian is tied', () => {
    let civilian = new Civilian(true);
    expect(civilian.isTied).toBe(true);
});
test('Verify that thecivilian is not tied', () => {
    let civilian = new Civilian(false);
    expect(civilian.isTied).toBe(false);
});