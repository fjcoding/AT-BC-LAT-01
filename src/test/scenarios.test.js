import request from 'supertest';
import app from '../main/app.js';


test('the GET request should have the message property in the status 200', async() => {
    const res = await request(app).get('/scenarios');
    const message = {
        message: 'Handling GET requests to API/scenarios',
    };
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toEqual(message);
});

test('the POST response should have a message property in the status 200', async() => {
    const res = await request(app).post('/scenarios');
    const message = {
        message: 'Handling POST requests to API/scenarios',
    };
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toEqual(message);
});

test('the PUT response should have a message property in the status 200 including the ID passed by the request.', async() => {
    const res = await request(app).put('/scenarios/exampleID');
    const message = {
        message: 'Handling PUT requests with a specified Object ID to API/scenarios',
        id: 'exampleID'
    };
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toEqual(message);
});

test('the PUT request should return error status 404 if it is missing an ID', async() => {
    const res = await request(app).put('/scenarios');
    expect(res.status).toEqual(404);
});