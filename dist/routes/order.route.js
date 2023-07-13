"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_handler_1 = __importDefault(require("../handlers/order.handler"));
var authorization_1 = require("../middleware/authorization");
var orderRouter = express_1.default.Router();
var order = new order_handler_1.default();
orderRouter.get("/", authorization_1.authorization, order.index);
orderRouter.get("/:id", authorization_1.authorization, order.show);
orderRouter.get("/current-order/:id", authorization_1.authorization, order.getCurrentOrders);
orderRouter.post("/", authorization_1.authorization, order.create);
orderRouter.post("/add-to-order/:id", authorization_1.authorization, order.addToOrder);
orderRouter.put("/:id", authorization_1.authorization, order.update);
orderRouter.delete("/:id", authorization_1.authorization, order.delete);
exports.default = orderRouter;
