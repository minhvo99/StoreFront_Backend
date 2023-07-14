import { Request, Response } from "express";
import { OrderModel } from "../models/order";
import { Order, OrderProduct } from "../interfaces/order.interface";
const orders = new OrderModel();

export default class OrderHandler {
      async index(_req: Request, res: Response) {
            try {
                  const order = await orders.index();
                  res.status(200).json(order);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }

      async show(req: Request, res: Response) {
            const id = parseInt(req.params.id);
            try {
                  if (id === null || !id) return res.sendStatus(400).json(`Params ${id} invalid!`);
                  const order = await orders.show(id);
                  res.status(200).json(order);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }

      async create(req: Request, res: Response) {
            try {
                  const order: Order = {
                        user_id: req.body.user_id,
                        status: req.body.status,
                  };
                  if (!order.user_id || !order.status) {
                        return res.status(400).json({
                              error: "Missing one or more required parameters",
                        });
                  }

                  const newOrder = await orders.create(order);

                  res.status(201).json(newOrder);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }

      async addToOrder(req: Request, res: Response) {
            try {
                  const addOrder: OrderProduct = {
                        order_id: parseInt(req.params.id),
                        product_id: parseInt(req.body.product_id),
                        quantity: parseInt(req.body.quantity),
                  };
                  if (  !addOrder.product_id || !addOrder.quantity) {
                        return res.status(400).json({
                              error: "Missing required parameters",
                        });
                  }

                  const product = await orders.addToOrder(addOrder);

                  res.status(200).json(product);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error('Can not add product to order');
            }
      }

      async update(req: Request, res: Response) {
            try {
                  const o: Order = {
                        id: parseInt(req.params.id),
                        user_id: req.body.user_id,
                        status: req.body.status,
                  };

                  if (!o.id || !o.user_id || !o.status) {
                        return res.status(400).json({
                              error: "Missing required parameters",
                        });
                  }

                  const order = await orders.update(o);
                  res.status(201).json(order);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }

      async delete(req: Request, res: Response) {
            try {
                  const id = parseInt(req.params.id);
                  const result = await orders.delete(id);
                  res.status(200).json(result);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }

      async getCurrentOrders(req: Request, res: Response) {
            try {
                  const id = parseInt(req.params.id);
                  const currentOrders = await orders.getCurrentOrders(id);
                  res.status(200).json(currentOrders);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }
}
