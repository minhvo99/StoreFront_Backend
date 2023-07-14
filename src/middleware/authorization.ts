import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../interfaces/user.interface";
dotenv.config();
const SERECT = process.env.SECRET_KEY as Secret;

export const authorization = (req: Request, res: Response, next: NextFunction) => {
      if (!req.headers.authorization) {
            res.sendStatus(401);
            res.json("Access denied, invalid token");
            return false;
      }
      try {
            const authorizationHeader = req.headers["authorization"];
            const token = authorizationHeader?.split(" ")[1];
            jwt.verify(token, SERECT, (err, data) => {
                  if (err) res.sendStatus(403);
                  next();
            });
      } catch (error) {
            res.sendStatus(401);
            res.json("Access denied, invalid token");
            return;
      }
};
export const token = (user: User): string => {
      return jwt.sign(user, SERECT)
}