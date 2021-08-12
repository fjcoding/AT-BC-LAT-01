import { mockQueryHandler } from '../../main/db/mockQueryHandler';
import { notExistingScenarioID, testScenarioData, testScenarioID, updatedMockQueryData } from '../../test/db/dbTestConstants';

describe('Tests for Create, Read and Update operations', () => {
    test('the MSM is able to add new data and receive the data\'s ID', async () => {
        const queryReturn = await mockQueryHandler.add(testScenarioData);
        expect(queryReturn).toBe(testScenarioID); //use toBe to compare values
    });

    test('the MSM is able to return an error when it receives an invalid format', async () => {
        let error = 0;
        try {
            await mockQueryHandler.add('');
        } catch(event) {
            error = event;
        }
        expect(error).toBe('Invalid Data Object'); //use toBe to compare values
    });

    test('the MSM is able to read existing data', async () => {
        const queryReturn = await mockQueryHandler.get(testScenarioID);
        expect(queryReturn).toEqual(testScenarioData); //we use toEqual to compare objects
    });

    test('the MSM is able to to return an error when it cannot read existing data', async () => {
        let error = 0;
        try {
            await mockQueryHandler.get('');
        } catch(event) {
            error = event;
        }
        expect(error).toBe('query data not found'); //use toBe to compare values
    });

    test('the MSM is able to update existing data', async () => { //set doesn't return a response to the MSM app
        const queryReturn = await mockQueryHandler.set(testScenarioID, updatedMockQueryData);
        expect(queryReturn).toEqual(updatedMockQueryData);
    });

    test('the MSM is able to store new data when it cannot find the given ID', async () => {
        let error = 0;
        try {
            await mockQueryHandler.set(notExistingScenarioID, updatedMockQueryData);
        } catch(event) {
            error = event;
        }
        expect(error).toBe('new register added'); //use toBe to compare values
    });
});
