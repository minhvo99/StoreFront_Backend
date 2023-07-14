import express from "express";
import { authorization } from "../middleware/authorization";
import ProductHandler from "../handlers/product.handler";

const productRouter = express.Router();
const product = new ProductHandler();

productRouter.get("/", product.index);
productRouter.get("/:id", product.show);
productRouter.post("/", authorization, product.create);
productRouter.put("/:id", authorization, product.update);
productRouter.delete("/:id", authorization, product.delete);

export default productRouter;
