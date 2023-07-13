"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_route_1 = __importDefault(require("./user.route"));
var product_route_1 = __importDefault(require("./product.route"));
var order_route_1 = __importDefault(require("./order.route"));
var appRouter = express_1.default.Router();
appRouter.use("/users", user_route_1.default);
appRouter.use("/products", product_route_1.default);
appRouter.use("/order", order_route_1.default);
exports.default = appRouter;
