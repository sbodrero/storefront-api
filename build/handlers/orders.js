"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var orders_1 = require("../models/orders");
dotenv_1.default.config();
var store = new orders_1.OrderStore();
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.index()];
            case 1:
                order = _a.sent();
                return [2 /*return*/, res.json(order)];
            case 2:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                return [4 /*yield*/, store.show(id)];
            case 1:
                order = _a.sent();
                return [2 /*return*/, res.json(order)];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, status, user_id, authorization, order, returnOrder, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body, 'req.body');
                _a = req.body, status = _a.status, user_id = _a.user_id, authorization = req.headers.authorization;
                order = {
                    status: status,
                    user_id: user_id,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store.create(order)];
            case 2:
                returnOrder = _b.sent();
                res.json(returnOrder);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                res.status(400);
                res.json(err_2);
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
var update = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, status, user_id, id, order, _order, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = _req.body, status = _a.status, user_id = _a.user_id, id = _a.id;
                order = {
                    id: id,
                    status: status,
                    user_id: user_id,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store.update(order)];
            case 2:
                _order = _b.sent();
                res.json(_order);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                res.status(400);
                res.json(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var _delete = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = _req.body.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store.delete(id)];
            case 2:
                order = _a.sent();
                res.json(order);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.status(400);
                res.json(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var addProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, quantity, orderId, productId, addedProduct, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, quantity = _a.quantity, orderId = _a.orderId, productId = _a.productId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store.addProduct(quantity, orderId, productId)];
            case 2:
                addedProduct = _b.sent();
                res.json(addedProduct);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _b.sent();
                res.status(400);
                res.json(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var orders_routes = function (app) {
    app.get('/orders', index);
    app.get('/orders/:id', show);
    app.post('/orders', create);
    app.put('/orders/:id', update);
    app.delete('/orders/:id', _delete);
    app.post('/orders/:id/products', addProduct);
};
exports.default = orders_routes;
