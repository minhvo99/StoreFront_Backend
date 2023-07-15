"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var authorization_1 = require("../../middleware/authorization");
var endpoint = "http://localhost:3000/users";
describe("User API", function () {
    var user = {
        firstname: "test",
        lastname: "test",
        username: "admin",
        password_digest: "123",
    };
    it("should return list user", function (done) {
        request_1.default.get(endpoint, function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it("should return user bt id", function (done) {
        request_1.default.get("".concat(endpoint, "/1"), function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it("should create user", function (done) {
        request_1.default.post(endpoint, { json: true, body: user }, function (err, res) {
            expect(res.statusCode).toEqual(201);
            done();
        });
    });
    it("should update user", function (done) {
        request_1.default.put("".concat(endpoint, "/6"), {
            json: true,
            auth: { bearer: (0, authorization_1.token)(user) },
            body: {
                id: "8",
                firstname: "updated",
                lastname: "updated",
                username: "admin",
                password_digest: "1234",
            },
        }, function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it('should delete user', function (done) {
        request_1.default.delete("".concat(endpoint, "/8"), {
            json: true,
            auth: { bearer: (0, authorization_1.token)(user) }
        }, function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});
