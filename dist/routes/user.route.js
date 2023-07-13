"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_handler_1 = __importDefault(require("../handlers/user.handler"));
var express_1 = __importDefault(require("express"));
var authorization_1 = require("../middleware/authorization");
var userRouter = express_1.default.Router();
var userHandler = new user_handler_1.default();
userRouter.get("/", userHandler.index);
userRouter.get("/:id", userHandler.show);
userRouter.post("/", userHandler.create);
userRouter.put("/:id", authorization_1.authorization, userHandler.update);
userRouter.delete("/:id", authorization_1.authorization, userHandler.deleteUser);
exports.default = userRouter;
