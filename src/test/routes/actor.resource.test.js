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

describe('PUT /actor request', () => {
    test('should instantiate the VerifierInterface class and respond code 400 because is missing the parameters', async() => {
        const res = await request(app).put('/actor');
        expect(VerifierInterface).toHaveBeenCalledTimes(1);
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('code');
        expect(res.body['code']).toEqual(400);
    });
});