import request from 'supertest';
import app from '../../main/app.js';


test('the GET request should have the message property in the status 200', async() => {
    const res = await request(app).get('/scenario');
    const message = {
        message: 'Handling GET requests to API/scenario',
    };
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toEqual(message);
});

test('the PUT request should respond a 200 status', async() => {
    const res = await request(app).put('/scenario');
    expect(res.status).toEqual(200);
});

test('the POST request should respond a 500 error because is not passing any JSON object', async() => {
    const res = await request(app).post('/scenario');
    expect(res.status).toEqual(500);
});