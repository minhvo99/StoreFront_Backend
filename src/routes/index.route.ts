import express from "express";
import userRouter from "./user.route";
import productRouter from "./product.route";
import orderRouter from "./order.route";
const appRouter = express.Router();

appRouter.use("/users", userRouter);
appRouter.use("/products", productRouter);
appRouter.use("/order", orderRouter);

export default appRouter;
