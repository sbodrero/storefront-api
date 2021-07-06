'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
var dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
var verifyAuthToken = function (req, res, next) {
  try {
    var authorization = req.headers.authorization;
    var TOKEN_SECRET = process.env.TOKEN_SECRET;
    var token = authorization && authorization.split(' ')[1];
    // @ts-ignore
    jsonwebtoken_1.default.verify(token, TOKEN_SECRET);
    next();
  } catch (err) {
    res.status(401);
    res.send(err);
    return;
  }
};
exports.default = verifyAuthToken;
