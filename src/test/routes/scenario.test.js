import request from 'supertest';
import app from '../../main/app.js';
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

test('the PUT request should respond a 200 status with the ID generated', async() => {
    const res = await request(app)
        .put('/scenario')
        .send(exampleValidScenario);
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('id');
});

test('the PUT request should respond a 200 status with the error message that the actor RAT1 doesnt exists', async() => {
    const res = await request(app)
        .put('/scenario')
        .send(exampleErrorScenario);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedErrorActorDoesntExist);
});

test('the POST request should respond a 200 status and a JSON object with the the executed scenario', async() => {
    const res = await request(app)
        .post('/scenario')
        .send(exampleValidScenario);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedExecutedScenario);
});


test('the GET request should return the executed scenario persisted in that ID', async() => {
    const resCreateScenario = await request(app)
        .put('/scenario')
        .send(exampleValidScenario);
    const expectedGeneratedID = resCreateScenario.body['id'];
    const res = await request(app).get('/scenario/' + expectedGeneratedID);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expectedExecutedScenario);
});