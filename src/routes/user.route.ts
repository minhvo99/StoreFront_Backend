import UserHandlers from "../handlers/user.handler";
import express from "express";
import { authorization } from "../middleware/authorization";

const userRouter = express.Router();
const userHandler = new UserHandlers();

userRouter.get("/users", userHandler.index);
userRouter.get("/users/:id", userHandler.show);
userRouter.post("/users", userHandler.create);
userRouter.put("/users/:id", authorization, userHandler.update);
userRouter.delete("/users/:id", authorization, userHandler.deleteUser);

export default userRouter;
