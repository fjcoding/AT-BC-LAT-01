import { Flag } from './Flag.js';
test('Validate that the flag Logging was created correctly with his characther and value', () => {
    const flagL = new Flag('-l', false);
    expect(flagL.character).toBe('-l');
    expect(flagL.value).toBe(false);
});
test('Validate that the flag Port was created correctly with his characther and value', () => {
    const flagP = new Flag('-p', 8080);
    expect(flagP.character).toBe('-p');
    expect(flagP.value).toBe(8080);
});
test('Validate that the flag Directory was created correctly with his characther and value', () => {
    const flagD = new Flag('-d', '/usr/logs');
    expect(flagD.character).toBe('-d');
    expect(flagD.value).toBe('/usr/logs');
});
test('Validate that if a flag its created with no value,  flag generate a null value for those cases', () => {
    const flagD = new Flag('-p',);
    expect(flagD.character).toBe('-p');
    expect(flagD.value).toBe(null);
});