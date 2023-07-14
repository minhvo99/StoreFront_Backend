"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = exports.authorization = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SERECT = process.env.SECRET_KEY;
var authorization = function (req, res, next) {
    if (!req.headers.authorization) {
        res.sendStatus(401);
        res.json("Access denied, invalid token");
        return false;
    }
    try {
        var authorizationHeader = req.headers["authorization"];
        var token_1 = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token_1, SERECT, function (err, data) {
            if (err)
                res.sendStatus(403);
            next();
        });
    }
    catch (error) {
        res.sendStatus(401);
        res.json("Access denied, invalid token");
        return;
    }
};
exports.authorization = authorization;
var token = function (user) {
    return jsonwebtoken_1.default.sign(user, SERECT);
};
exports.token = token;
