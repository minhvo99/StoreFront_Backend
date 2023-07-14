import express from "express";
import OrderHandler from "../handlers/order.handler";
import { authorization } from "../middleware/authorization";
const orderRouter = express.Router();
const order = new OrderHandler();

orderRouter.get("/", authorization, order.index);
orderRouter.get("/:id", authorization, order.show);
orderRouter.get("/current-order/:id", authorization, order.getCurrentOrders);
orderRouter.post("/", authorization, order.create);
orderRouter.post("/add-to-order/:id", authorization, order.addToOrder);
orderRouter.put("/:id", authorization, order.update);
orderRouter.delete("/:id", authorization, order.delete);

export default orderRouter;
