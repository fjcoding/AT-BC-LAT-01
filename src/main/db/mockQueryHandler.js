import { testScenarioData, testScenarioID } from '../../test/db/dbTestConstants';


export class mockQueryHandler { //a custom mock of the QueryHandler class
    static async add(data) {
        const mockPromise = new Promise(function(resolve, reject) {
            if (typeof data == 'object') {
                resolve(testScenarioID);
            } else {
                reject('Invalid Data Object');
            }
        });
        return mockPromise; //if the promise is solved, it returns a String
    }

    static async get(docId) {
        const mockPromise = new Promise(function(resolve, reject) {
            if (docId == testScenarioID) {
                resolve(testScenarioData);
            } else {
                reject('query data not found');
            }
        });
        return mockPromise; //if the promise is solved, it returns a Javascript Object
    }

    static async set(docId, newData) {
        const mockPromise2 = new Promise(function(resolve, reject) {
            if (docId == testScenarioID) {
                resolve(newData);
            } else {
                console.log('new register added'); // query data not found
                reject('new register added');
            }
        });
        return mockPromise2;
    }
}