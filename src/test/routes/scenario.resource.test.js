import request from 'supertest';
import makeApp from '../../main/app.js';

const exampleErrorScenario = {
    'actors': [{
        'name': 'Marco',
        'type': 'PF Squad Soldier',
        'weapon': 'Handgun'
    }, {
        'name': 'RAS1',
        'type': 'Rebel Army soldier',
        'weapon': 'rifle'
    }],
    'actions': [{
        'actor': 'Marco',
        'action': 'Pick Shotgun',
        'element': 'Shotgun'
    }, {
        'actor': 'Marco',
        'action': 'Shoot Weapon',
        'element': 'Shotgun'
    }, {
        'actor': 'RAT1',
        'action': 'receive attack',
        'from': 'Marco'
    }]
};
const exampleValidScenario = {
    'actors': [{
        'name': 'Marco',
        'type': 'PF Squad Soldier',
        'weapon': 'Handgun'
    }, {
        'name': 'RAS1',
        'type': 'Rebel Army soldier',
        'weapon': 'rifle'
    }],
    'actions': [{
        'actor': 'Marco',
        'action': 'Pick Shotgun',
        'element': 'Shotgun'
    }, {
        'actor': 'Marco',
        'action': 'Shoot Weapon',
        'element': 'Shotgun'
    }, {
        'actor': 'RAS1',
        'action': 'receive attack',
        'from': 'Marco'
    }]
};
const expectedExecutedScenario = {
    'code': 202,
    'result': {
        'Marco': 'Dead',
        'RAS1': 'Dead'
    }
};
const expectedErrorActorDoesntExist = {
    'code': 400,
    'error': 'RAT1 actor does not exist'
};

const app = makeApp({
    add() {
        return 'generatedFakeID';
    },
    get() {
        const persistedScenario = { 'data': expectedExecutedScenario };
        return persistedScenario;
    }
});

describe('PUT /scenario request', () => {
    test('should respond 200 status with the ID generated', async() => {
        const res = await request(app)
            .put('/scenario')
            .send(exampleValidScenario);
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body['id']).toBe('generatedFakeID');
    });

    test('should respond 400 code with the error message that the actor RAT1 doesnt exists', async() => {
        const res = await request(app)
            .put('/scenario')
            .send(exampleErrorScenario);
        expect(res.body['code']).toEqual(400);
        expect(res.body).toEqual(expectedErrorActorDoesntExist);
    });
});


describe('POST /scenario request', () => {
    test('should respond a 200 status and a JSON object with the the executed scenario', async() => {
        const res = await request(app)
            .post('/scenario')
            .send(exampleValidScenario);
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(expectedExecutedScenario);
    });
});