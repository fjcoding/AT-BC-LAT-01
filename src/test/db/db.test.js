import { mockQueryHandler } from '../../main/db/mockQueryHandler';
jest.mock('../../main/db/mockQueryHandler');

describe('Tests for Create, Read and Update operations', () => {
    const testScenarioData = Promise.resolve({
        actors: [{
            name: 'Marco',
            type: 'PF Squad Soldier',
            weapon: 'Handgun'
        }, {
            name: 'RAS1',
            type: 'Rebel Army soldier',
            weapon: 'rifle'
        }],
        actions: [{
            actor: 'Marco',
            action: 'Pick Shotgun',
            element: 'Shotgun'
        }, {
            actor: 'Marco',
            action: 'Shoot Weapon',
            element: 'Shotgun'
        }, {
            actor: 'RAS1',
            action: 'receive attack',
            from: 'Marco'
        }]
    });

    test('the MSM is able to call the add method from the firestore Object', async () => {
        const queryCall = mockQueryHandler.add(testScenarioData); //calling the mock method
        console.log(queryCall); //displayed to avoid the lint error
        expect(mockQueryHandler.add).toHaveBeenCalledTimes(1); //we know the mock works
    });
});
