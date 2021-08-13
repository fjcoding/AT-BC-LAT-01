import request from 'supertest';
import makeApp from '../../main/app.js';
import { VerifierInterface } from '../../main/api-utilities/VerifierInterface';
jest.mock('../../main/api-utilities/VerifierInterface');

const app = makeApp({
    add() {
        return 'generatedID';
    },
    get() {
        return { 'actors': [], 'actions': [] };
    }
});
beforeEach(() => {
    VerifierInterface.mockClear();
});

describe('PUT /action request', () => {
    test('should respond code 400 because is missing the Scenario ID property', async() => {
        const res = await request(app)
            .put('/action')
            .send({
                'actor': 'Marco',
                'action': 'Shot Weapon',
                'target': 'east'
            });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('code');
        expect(res.body['code']).toEqual(400);
    });
});

describe('POST /action/scenarioID request', () => {
    test('should instantiate the VerifierInterface class and return a 200 status', async() => {
        const res = await request(app).post('/action/scenarioID');
        expect(VerifierInterface).toHaveBeenCalledTimes(1);
        expect(res.status).toEqual(200);
    });
});