'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.app = void 0;
var express_1 = __importDefault(require('express'));
var body_parser_1 = __importDefault(require('body-parser'));
var logger_1 = __importDefault(require('./utilities/logger'));
var products_1 = __importDefault(require('./handlers/products'));
var users_1 = __importDefault(require('./handlers/users'));
var orders_1 = __importDefault(require('./handlers/orders'));
var dashboard_1 = __importDefault(require('./handlers/dashboard'));
exports.app = express_1.default();
var port = 3000;
exports.app.use(body_parser_1.default.json());
exports.app.use(logger_1.default);
exports.app.get('/', function (req, res) {
  res.send('Store home');
});
products_1.default(exports.app);
users_1.default(exports.app);
orders_1.default(exports.app);
dashboard_1.default(exports.app);
exports.app.listen(port, function () {
  console.log('Server is running on port : ' + port);
});
