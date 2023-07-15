"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var authorization_1 = require("../../middleware/authorization");
var endpoint = "http://localhost:3000/products";
describe("Products API", function () {
    var user = {
        firstname: "test",
        lastname: "test",
        username: "admin",
        password_digest: "123",
    };
    var p = {
        name: "book",
        price: "1000",
        description: "book book book",
    };
    it("should return list product", function (done) {
        request_1.default.get(endpoint, function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it("should return product by id", function (done) {
        request_1.default.get("".concat(endpoint, "/1"), function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it("should create product", function (done) {
        request_1.default.post(endpoint, {
            json: true,
            auth: { bearer: (0, authorization_1.token)(user) },
            body: p,
        }, function (err, res) {
            expect(res.statusCode).toEqual(201);
            done();
        });
    });
    it("should update product", function (done) {
        request_1.default.put("".concat(endpoint, "/3"), {
            json: true,
            auth: { bearer: (0, authorization_1.token)(user) },
            body: {
                name: "pen",
                price: "1000",
                description: "ok",
            },
        }, function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it("should delete user", function (done) {
        request_1.default.delete("".concat(endpoint, "/4"), {
            json: true,
            auth: { bearer: (0, authorization_1.token)(user) },
        }, function (err, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});
