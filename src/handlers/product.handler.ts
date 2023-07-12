import { Products } from '../models/product';
import express from 'express'
import client from "../configs/database";
class ProductController {
    async index(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Product>{
        
    }
    async get(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Product>{

    }
    async create(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Product>{
        
    }
    async update(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Product>{
        
    }
    async delete(req: express.Request, res: express.Response, next: express.NextFunction): Promise<Product>{
        
    }
}

module.exports = new ProductController()