"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var verifyAuthToken = function (req, res, next) {
    console.log('in liddlewre');
    try {
        var authorization = req.headers.authorization;
        var TOKEN_SECRET = process.env.TOKEN_SECRET;
        var token = authorization && authorization.split(' ')[1];
        console.log(token);
        // @ts-ignore
        // if(token && jwt.verify(token, TOKEN_SECRET)) {
        //   next();
        // }
        next();
    }
    catch (err) {
        res.status(401);
        res.send(err);
        return;
    }
};
exports.default = verifyAuthToken;
