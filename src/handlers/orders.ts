import express, { Request, Response, Application } from 'express';
import dotenv from "dotenv";
import { Order, OrderStore } from "../models/orders";

dotenv.config()

const store = new OrderStore();

const index = async(req:Request, res: Response) => {
  try {
    const order = await store.index();
    return res.json(order)
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const show = async(req: Request, res: Response) => {
  const { params: { id }} = req;
  const order = await store.show(id);
  return res.json(order);
}

const create = async(req: Request, res: Response) => {
  console.log(req.body, 'req.body');
  const { body: { status, user_id }, headers: { authorization } } = req;
  const order: Order = {
    status,
    user_id,
  }
  try {
    const returnOrder = await store.create(order);
    res.json(returnOrder);
  } catch (err) {
    res.status(400);
    res.json(err);
    return;
  }
}

const update = async(_req: Request, res: Response) => {
  const { body: { status, user_id, id} } = _req;
  const order: Order = {
    id,
    status,
    user_id,
  }
  try {
    const _order = await store.update(order);
    res.json(_order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const _delete = async(_req: Request, res: Response) => {
  const { body: { id }} = _req;
  try {
    const order = await store.delete(id);
    res.json(order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const addProduct= async(req: Request, res: Response) => {
  const { body : { quantity, orderId, productId } } = req;
  try {
    const addedProduct = await store.addProduct(quantity, orderId,productId);
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
}

const orders_routes = (app: Application) => {
  app.get('/orders', index);
  app.get('/orders/:id', show);
  app.post('/orders', create);
  app.put('/orders/:id', update);
  app.delete('/orders/:id', _delete);
  app.post('/orders/:id/products', addProduct);
}


export default orders_routes;
