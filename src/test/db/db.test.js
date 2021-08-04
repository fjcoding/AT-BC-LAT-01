// eslint-disable-next-line jest/no-mocks-import
import { db } from '../../main/__mocks__/firebase-mock.js';
//global.db = firebaseMock();

//import { db } from '../../main/server';

describe('Database connection', () => {
    test('should add a json and return the id', () => {
        let res = db
            .collection()
            .add({
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
                }]});
        expect(res).toBe('BFDUCchwAQXCXLq4AAxp');
    });
});