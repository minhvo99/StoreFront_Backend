import UserHandlers from "../handlers/user.handler";
import express from "express";
import { authorization } from "../middleware/authorization";

const userRouter = express.Router();
const userHandler = new UserHandlers();

userRouter.get("/", userHandler.index);
userRouter.get("/:id", userHandler.show);
userRouter.post("/", userHandler.create);
userRouter.put("/:id", authorization, userHandler.update);
userRouter.delete("/:id", authorization, userHandler.deleteUser);

export default userRouter;
