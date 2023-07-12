import express from "express";
import userRouter from "./user.route";
const appRouter = express.Router()

appRouter.use("/", userRouter)

export default appRouter


