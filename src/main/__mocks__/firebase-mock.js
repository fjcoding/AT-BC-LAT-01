/*const collection = (collectionName) => {
    return {
        add: (objData) => {
            return promise;
        }
    };
};

const db = () => {
    collection: collection();
};*/
const MSMScenario = {
    AfikxexqU34hcNoYG6wo: {
        actors: [{
            name: 'Marco',
            type: 'PF Squad Soldier',
            weapon: 'Handgun'
        }, {
            name: 'RAS1',
            type: 'Rebel Army soldier',
            weapon: 'rifle'
        }, {
            name: 'RAT1',
            type: 'Rebel Army Tank',
            weapon: 'tank cannon'
        }],
        actions: [{
            actor: 'Marco',
            action: 'Pick Shotgun'
        }, {
            actor: 'Marco',
            action: 'Shoot Weapon'
        }, {
            actor: 'RAS1',
            action: 'receive attack',
            from: 'Marco'
        }, {
            actor: 'RAT1',
            action: 'receive attack',
            from: 'Marco'
        }]
    }
};

/*const promise = new Promise((resolve) => {
    resolve('BFDUCchwAQXCXLq4AAxp');
});*/

export const db = jest.mock('../server.js');

db.collection = () => {
    return {
        add: (objData) => {
            MSMScenario.BFDUCchwAQXCXLq4AAxp = objData;
            return 'BFDUCchwAQXCXLq4AAxp';
        }
    };
};

MSMScenario.BFDUCchwAQXCXLq4AAxp = {
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

/*export default jest.fn(() => {
    return db;
});*/