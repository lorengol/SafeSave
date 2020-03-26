"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
exports.routes = express.Router();
exports.routes.get('/', function (req, res) { return res.send({ hello: 'world' }); });
exports.routes.get('/users', function (req, res) { return res.send([]); });
exports.routes.post('/users', function (req, res) { return res.send({ body: req.body }); });
