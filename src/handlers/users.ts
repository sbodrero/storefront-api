import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { User, UserStore } from "../models/users";

const store = new UserStore();

dotenv.config();

const { TOKEN_SECRET } = process.env;

const create = async(req: Request, res: Response) => {
  const { body: { first_name, last_name, username, password, email }} = req;
  const user: User = {
    first_name,
    last_name,
    username,
    password,
    email
  };
  try {
    const returnUser = await store.create(user);
    // @ts-ignore
    const token = jwt.sign({ user: returnUser }, TOKEN_SECRET);
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const authenticate = async(req: Request, res: Response) => {
  const { body: { username, password } } = req;
  try {
    const user = await store.authenticate(username, password);

    // @ts-ignore
    const token = jwt.sign({ user: user }, TOKEN_SECRET);
    return res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const users_routes = (app: express.Application) => {
  app.post('/users', create);
  app.get('/users', authenticate);
};

export default users_routes;
