import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import { Product, ProductStore } from "../models/product";
import verifyAuthToken from "../utilities/verifyAuthToken";


dotenv.config();

const store = new ProductStore();

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
  const { body: { id }} = req;
  const product = await store.show(id);
  return res.json(product);
}

const create = async(req: Request, res: Response) => {
  const { body: { name, color, quantity }, headers: { authorization } } = req;
  const product: Product = {
    name: name,
    color: color,
    quantity: quantity
  }

  try {
    const returnProduct = await store.create(product);
    res.json(returnProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
    return;
  }
}

const update = async(_req: Request, res: Response) => {
  const { body: { name, color, quantity, id} } = _req;
  const product: Product = {
    id: id,
    name: name,
    color: color,
    quantity: quantity
  }
  try {
    const _product = await store.update(product);
    res.json(_product);
  } catch (err) {
    res.status(400);
    res.json(err)
  }
}

const _delete = async(_req: Request, res: Response) => {
  const { body: { id }} = _req;
  try {
    const product = await store.delete(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err)
  }
};

const products_routes = (app: express.Application) => {
  app.get('/products', index);
  app.get('/products/:id', show);
  app.post('/products', create);
  app.put('/products/:id', update);
  app.delete('/products/:id', _delete);
};

export default products_routes;
