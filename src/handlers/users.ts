import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User, UserStore } from "../models/users";

const store = new UserStore();

dotenv.config();

const { TOKEN_SECRET } = process.env;

const index = async(_req: Request, res: Response) => {
  try {
    const products = await store.index();
    return res.json(products);
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const show = async(req: Request, res: Response) => {
  const { params: { id }} = req;
  const product = await store.show(id);
  return res.json(product);
}

const create = async(req: Request, res: Response) => {
  const { body: { first_name, last_name, password }} = req;
  const user: User = {
    first_name,
    last_name,
    password,
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

const users_routes = (app: express.Application) => {
  app.get('/users', index);
  app.get('/users/:id', show);
  app.post('/users', create);
};

export default users_routes;
