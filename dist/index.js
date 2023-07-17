"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_route_1 = __importDefault(require("./routes/index.route"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("", index_route_1.default);
app.listen(port, function () {
    console.log("Server is running on port http://localhost:".concat(port));
});
exports.default = app;
