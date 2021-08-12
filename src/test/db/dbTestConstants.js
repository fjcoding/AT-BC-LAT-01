//reference values for the db unit tests
export const notExistingScenarioID = 'thisisnotascenarioid';

export const testScenarioData = {
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
export const testScenarioID = '00kEXu7aRQr35ymqAqH2';

export const updatedMockQueryData = {
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
