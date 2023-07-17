"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var __1 = __importDefault(require("../.."));
var request = (0, supertest_1.default)(__1.default);
var authorization_1 = require("../../middleware/authorization");
var user = {
    id: 1,
    username: 'testUser',
    password_digest: 'password123',
};
var auth = (0, authorization_1.token)(user);
describe('Users API ', function () {
    it('/users/create should return a user', function () {
        var data = {
            username: 'test',
            first_name: 'test',
            last_name: 'test',
            password: 'password123',
        };
        request
            .post('/api/users/create')
            .send(data)
            .expect('Content-Type', 'application/json')
            .expect(201)
            .expect({
            id: 1,
            username: 'test',
            first_name: 'test',
            last_name: 'test',
        });
    });
    it('/users/create should fail if required username is not sent', function () {
        var data = {
            first_name: 'test',
            last_name: 'test',
            password: 'password123',
        };
        request
            .post('/api/users/create')
            .set('Authorization', "Bearer ".concat(auth))
            .send(data)
            .expect('Content-Type', 'application/json')
            .expect(400)
            .expect({
            error: 'Missing username or password',
        });
    });
    it('/users/create should fail if required password is not sent', function () {
        var data = {
            username: 'test',
            first_name: 'test',
            last_name: 'test',
        };
        request
            .post('/api/users/create')
            .set('Authorization', "Bearer ".concat(auth))
            .send(data)
            .expect('Content-Type', 'application/json')
            .expect(400)
            .expect({
            error: 'Missing username or password',
        });
    });
    it('/users should return all users', function () {
        request
            .get('/api/users')
            .set('Authorization', "Bearer ".concat(auth))
            .expect(200)
            .expect('Content-Type', 'application/json')
            .expect([
            {
                id: 1,
                username: 'test',
                first_name: 'test',
                last_name: 'test',
            },
        ]);
    });
    it('/users/:id should show a user', function () {
        request
            .get('/api/users/1')
            .set('Authorization', "Bearer ".concat(auth))
            .expect('Content-Type', 'application/json')
            .expect(200)
            .expect({
            id: 1,
            first_name: 'test',
            last_name: 'test',
            password_digest: 'password123',
        });
    });
    it('/users/:id should update a user', function () {
        var data = {
            username: 'madison',
            first_name: 'Madison',
            last_name: 'Smith',
            password_digest: 'password123',
        };
        request
            .put('/api/users/1')
            .set('Authorization', "Bearer ".concat(auth))
            .send(data)
            .expect('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({
            id: 1,
            username: 'madison',
            first_name: 'Madison',
            last_name: 'Smith',
            password_digest: 'password123',
        });
    });
    it('/users/:id should delete a user', function () {
        request.delete('/api/users/1').expect(200).expect({
            status: 'Deleted user 1',
        });
    });
});
