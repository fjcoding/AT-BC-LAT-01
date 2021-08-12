const mockQueryData = {
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

const setMockQueryData = {
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
};  

export class mockQueryHandler { //a carbon copy of the QueryHandler class
    static async add(data) {
        const mockPromise = new Promise(function(resolve, reject) {
            console.log(data);//here we mock the actual query
            setTimeout(() => resolve('00kEXu7aRQr35ymqAqH2'), 500);
        });
        return mockPromise; //if the promise is solved, it returns a String
    }

    static async get(docId) {
        const mockPromise = new Promise(function(resolve, reject) {
            console.log(docId);//here we mock the query by returning a set object
            setTimeout(() => resolve(mockQueryData), 1000);
        });
        return mockPromise; //if the promise is solved, it returns a Javascript Object
    }

    static async set(docId, newData) {
        const mockPromise2 = new Promise(function(resolve, reject) {
            console.log(docId);//here we mock the query by returning a set object
            setTimeout(() => resolve(setMockQueryData), 1000);
        });
        return mockPromise2;
    }
}