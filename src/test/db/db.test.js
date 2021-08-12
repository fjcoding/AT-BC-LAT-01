import { mockQueryHandler } from '../../main/db/mockQueryHandler';
//jest.mock('../../main/db/mockQueryHandler');
//firestore returns undefined when the transaction is not successful
describe('Tests for Create, Read and Update operations', () => {
    const testScenarioData = {
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
    };
    const testScenarioID = '00kEXu7aRQr35ymqAqH2';

    test('the MSM is able to add new data and receive the data\'s ID', async () => {
        const queryReturn = await mockQueryHandler.add(testScenarioData);
        expect(queryReturn).toBe(testScenarioID); //use toBe to compare values
    });

    test('the MSM is able to read existing data', async () => {
        const queryReturn = await mockQueryHandler.get(testScenarioID);
        expect(queryReturn).toEqual(testScenarioData); //we use toEqual to compare objects and return to confirm queryReturn is completed before the assertion
    });

    test('the MSM is able to update existing data', async () => { //set doesn't return a response to the MSM app
        const newActor = {
            name: 'RAS2',
            type: 'Rebel Army soldier',
            weapon: 'shotgun'
        } 
        const queryReturn = await mockQueryHandler.set(testScenarioID, newActor);
        expect(queryReturn).toEqual({
            actors: [{
                name: 'Marco',
                type: 'PF Squad Soldier',
                weapon: 'Handgun'
            }, {
                name: 'RAS1',
                type: 'Rebel Army soldier',
                weapon: 'rifle'
            }, {
                name: 'RAS2',
                type: 'Rebel Army soldier',
                weapon: 'shotgun'
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
    });
});
