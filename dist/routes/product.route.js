"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authorization_1 = require("../middleware/authorization");
var product_handler_1 = __importDefault(require("../handlers/product.handler"));
var productRouter = express_1.default.Router();
var product = new product_handler_1.default();
productRouter.get("/", product.index);
productRouter.get("/:id", product.show);
productRouter.post("/", authorization_1.authorization, product.create);
productRouter.put("/:id", authorization_1.authorization, product.update);
productRouter.delete("/:id", authorization_1.authorization, product.delete);
exports.default = productRouter;
