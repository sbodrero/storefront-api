import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const verifyAuthToken = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  console.log('in liddlewre');
  try {
    const { headers: { authorization } } = req;
    const { TOKEN_SECRET } = process.env;
    const token = authorization && authorization.split(' ')[1]
    console.log(token);
    // @ts-ignore
    // if(token && jwt.verify(token, TOKEN_SECRET)) {
    //   next();
    // }
    next();
  } catch (err) {
    res.status(401);
    res.send(err);
    return;
  }
}

export default verifyAuthToken;
