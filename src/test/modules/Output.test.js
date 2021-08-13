import { Output } from '../../main/modules/Output.js';

const testResults = new Output();

var actorsArray = [
    { 'health': 14, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': 'Handgun' },
    { 'health': 0, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle' },
    { 'health': 1, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': 'tank cannon' }];

test('Obtain the results as an object called results with Actor name and the status related to the health attribute', () => {
    expect(testResults.generateResults(actorsArray)).toEqual(
        {
            'Marco': 'Alive',
            'RAS1': 'Dead',
            'RAT1': 'Alive'
        });
});