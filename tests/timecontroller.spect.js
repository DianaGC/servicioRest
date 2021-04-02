const model = require('../models/model');
const request = require('supertest');
const baseUrl = '/api/time';
const app = require("../app");

describe("API developers", async () =>{
    it('It should respond with an json file', async () =>{
        const response = await request(app).post();

		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);

    })
})