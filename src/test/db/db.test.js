import { mockQueryHandler } from '../../main/__mocks__/firebase-mock';
jest.mock('../../main/__mocks__/firebase-mock');

describe('Tests for Create, Read and Update operations', () => {
    const successfulCreationData = 'mock register added';
    const successfulUpdateData = Promise.resolve('mock register updated');
    const testDocumentID = Promise.resolve('BFDUCchwAQXCXLq4AAxp');
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
    const successfulReadingData = testScenarioData;

    test('the MSM is able to call the add method from the firestore Object', async () => {
        const queryCall = mockQueryHandler.add(testScenarioData);
        expect(mockQueryHandler.add).toHaveBeenCalledTimes(1); //we know the mock works 
    });
/* WORK IN PROGRESS
    test('the MSM is able to create a new document in the database', async () => {
        const queryCall = mockQueryHandler.add(testScenarioData);
        let result = new Promise (function(resolve, reject) { //resolves intro string
            resolve('mock register added');
        });
        //await expect(queryCall).resolves.toEqual(successfulCreationData); //successfulCreationData doesn't resolve
        expect(mockQueryHandler.add).toHaveBeenCalledTimes(1); //we know the mock works
        //TODO expect(queryCall).toHaveBeenCalledWith({json});
    });

    test('the MSM is able to read an existing document in the database', async () => {
        //TODO: CODE HERE
        const queryCall = mockQueryHandler.get(testDocumentID);
        const result = successfulReadingData;
        await expect(result).resolves.toEqual(successfulReadingData);
        expect(mockQueryHandler.get).toHaveBeenCalledTimes(1);
        //TODO expect(queryCall).toHaveBeenCalledWith({json});
    });

    test('the MSM is able to update an existing document in the database', async () => {
        //TODO: CODE HERE
        const queryCall = mockQueryHandler.set(testDocumentID, testScenarioData);
        let result = new Promise (function(resolve, reject) {
            resolve(successfulUpdateData);
        });
        await expect(result).resolves.toEqual(successfulUpdateData);
        expect(mockQueryHandler.set).toHaveBeenCalledTimes(1);
        //TODO expect(queryCall).toHaveBeenCalledWith({json});
    });
    */
});
