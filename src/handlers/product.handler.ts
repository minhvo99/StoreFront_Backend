import { Products } from "../models/product";
import express from "express";
import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { Product } from "../interfaces/product..interface";

dotenv.config();
const product = new Products();
export default class ProductHandler {
      async index(req: express.Request, res: express.Response, next: express.NextFunction) {
            try {
                  const p: Product[] = await product.index();
                  res.json(p);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }
      async show(req: express.Request, res: express.Response, next: express.NextFunction) {
            try {
                  const id = parseInt(req.params.id);
                  if (!id) return res.sendStatus(400).json(`Missing required params: id.`);
                  const p: Product = await product.show(id);
                  res.json(p);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }
      async create(req: express.Request, res: express.Response, next: express.NextFunction) {
            try {
                  const p: Product = {
                        id: req.body.id,
                        name: req.body.name,
                        price: req.body.price,
                        description: req.body.description,
                  };
                  const newProduct = await product.create(p);
                  return res.status(201).json(newProduct);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }
      async update(req: express.Request, res: express.Response, next: express.NextFunction) {
            const p: Product = {
                  id: parseInt(req.params.id),
                  name: req.body.name,
                  price: req.body.price,
                  description: req.body.description,
            };
            try {
                  if (!p.id && !Number(p.id)) return res.sendStatus(400).json(`Params ${p.id} invalid`);
                  const newProduct = await product.update(p);
                  res.json(newProduct);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Can not update product ${p.name} : ${error}`);
            }
      }
      async delete(req: express.Request, res: express.Response, next: express.NextFunction) {
            try {
                  const id = parseInt(req.params.id);
                  if (!id && !Number(id)) return res.sendStatus(400).json(`Params ${id} invalid`);
                  const p = await product.delete(id);
                  res.sendStatus(200).json(p);
            } catch (error) {
                  res.sendStatus(400);
                  throw new Error(`Error: ${error}`);
            }
      }
}
