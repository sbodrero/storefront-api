'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var express_1 = __importDefault(require('express'));
var Images = express_1['default'].Router();
Images.get('/', function (req, res) {
  res.send('Images route');
});
exports['default'] = Images;
