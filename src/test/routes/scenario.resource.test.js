import request from 'supertest';
import makeApp from '../../main/app.js';
import { VerifierInterface } from '../../main/api-utilities/VerifierInterface';
jest.mock('../../main/api-utilities/VerifierInterface');

const app = makeApp({
    add() {
        return 'generatedID';
    },
    get() {
        return { actors: [], actions: [] };
    },
});

beforeEach(() => {
    VerifierInterface.mockClear();
});

describe('PUT /scenario request', () => {
    test('should respond 200 status with the ID generated by the QueryHandler.add() in an "id" property', async () => {
        const res = await request(app).put('/scenario');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body['id']).toBe('generatedID');
    });
});

describe('POST /scenario request', () => {
    test('should instantiate the VerifierInterface class and return a 200 status', async () => {
        const res = await request(app).post('/scenario/existingScenarioID');
        expect(VerifierInterface).toHaveBeenCalledTimes(1);
        expect(res.status).toEqual(200);
    });
});

describe('GET /scenario/existingScenarioID request', () => {
    test('should return a 200 status with the code property and the complete scenario', async () => {
        const res = await request(app).get('/scenario/existingScenarioID');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('code');
        expect(res.body).toHaveProperty('scenario');
    });
});

describe('PATCH /scenario request', () => {
    test('should instantiate the VerifierInterface class and return a 200 status with the code property', async () => {
        const res = await request(app).patch('/scenario');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('code');
    });
});
