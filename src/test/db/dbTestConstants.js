//reference values for the db unit tests
export const notExistingScenarioID = 'thisisnotascenarioid';

export const testScenarioData = {
    'scenes': 5,
    'actors': [{
        'name': 'Marco',
        'type': 'PF Squad Soldier',
        'health': 1,
        'weapon': {
            'name': 'handgun',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 0,
            'yPos': 0
        }
    }, {
        'name': 'Polo',
        'type': 'PF Squad Soldier',
        'health': 1,
        'weapon': {
            'name': 'handgun',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 0,
            'yPos': 1
        }
    }, {
        'name': 'RAS1',
        'type': 'Rebel Army soldier',
        'health': 1,
        'weapon': {
            'name': 'rifle',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 5,
            'yPos': 0
        }
    }, {
        'name': 'RAS2',
        'type': 'Rebel Army soldier',
        'health': 1,
        'weapon': {
            'name': 'rifle',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 5,
            'yPos': 1
        }
    }],
    'actions': [{
        'actor': 'Marco',
        'action': 'Shot Weapon',
        'target': 'east',
        'scenes': 100
    }]
};

export const testScenarioID = '00kEXu7aRQr35ymqAqH2';

export const updatedMockQueryData = {
    'scenes': 4,
    'actors': [{
        'name': 'Marco',
        'type': 'PF Squad Soldier',
        'health': 1,
        'weapon': {
            'name': 'handgun',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 1,
            'yPos': 1
        }
    }, {
        'name': 'Polo',
        'type': 'PF Squad Soldier',
        'health': 1,
        'weapon': {
            'name': 'handgun',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 0,
            'yPos': 1
        }
    }, {
        'name': 'RAS1',
        'type': 'Rebel Army soldier',
        'health': 1,
        'weapon': {
            'name': 'rifle',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 5,
            'yPos': 0
        }
    }, {
        'name': 'RAS2',
        'type': 'Rebel Army soldier',
        'health': 1,
        'weapon': {
            'name': 'rifle',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 5,
            'yPos': 1
        }
    }],
    'actions': [{
        'actor': 'Marco',
        'action': 'Shot Weapon',
        'target': 'east',
        'scenes': 100
    }]
};
