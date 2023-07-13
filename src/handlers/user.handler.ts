import jwt, { Secret } from "jsonwebtoken";
import { Request, Response } from "express";
import { Users } from "./../models/users";
import dotenv from "dotenv";
import { BaseUser, User } from "../interfaces/user.interface";
dotenv.config();
const SERECT = process.env.SECRET_KEY as Secret;
const user = new Users();

export default class UserHandlers {
      async index(req: Request, res: Response) {
            try {
                  const users: BaseUser = await user.index();
                  res.json(users);
            } catch (error) {
                  throw new Error(`Error: ${error}`);
            }
      }
      async show(req: Request, res: Response) {
            try {
                  const id = parseInt(req.params.id);
                  if (!id) return res.status(400).send(`Missing required parameter id: ${id}`);
                  const users: BaseUser = await user.show(id);
                  res.json(users);
            } catch (error) {
                  res.status(400);
                  res.json(error);
            }
      }
      async create(req: Request, res: Response) {
            try {
                  const users: User = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username: req.body.username,
                        password_digest: req.body.password_digest,
                  };
                  const newUser = await user.create(users);
                  const token = jwt.sign({ user: newUser }, SERECT);
                  res.status(201).json(token);
            } catch (err) {
                  console.log(err);
                  res.status(400).json(err);
            }
      }
      async update(req: Request, res: Response) {
            const baseUser: BaseUser = {
                  id: req.body.id,
                  firstname: req.body.firstname,
                  lastname: req.body.lastname,
                  username: req.body.username,
                  password_digest: req.body.password_digest,
            };
            try {
                  if (!baseUser.firstname || !baseUser.lastname || !baseUser.id) {
                        res.status(400);
                        res.json(`Params ${baseUser} invalid`);
                        return false;
                  }
                  const u = await user.update(baseUser);
                  res.json(u);
            } catch (err) {
                  res.status(400).json(err);
            }
      }

      async deleteUser(req: Request, res: Response) {
            try {
                  const id = parseInt(req.params.id);
                  if (!id) {
                        res.status(400).send("Required parameter :id.");
                        return false;
                  }
                  await user.deleteUser(id);
                  res.send(200).json('Delete successfully!!!.');
            } catch (err) {
                  res.status(400).json(err);
            }
      }
}
