import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SERECt = process.env.SECRET_KEY as Secret;

 export const authorization = (req: Request, res: Response, next: NextFunction) =>{
      if (!req.headers.authorization) {
            res.sendStatus(401);
            res.json("Access denied, invalid token");
            return false;
      }
      try {
            const authorizationHeader = req.headers["authorization"];
            const token = authorizationHeader?.split(" ")[1];
            jwt.verify(token, SERECt);
            next();
      } catch (error) {
            res.sendStatus(401);
            res.json("Access denied, invalid token");
            return;
      }
}
