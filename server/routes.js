"use strict";
exports.__esModule = true;
var express = require("express");
exports.routes = express.Router();
exports.routes.get('/', function (req, res) { return res.send({ hello: 'world' }); });
exports.routes.get('/users', function (req, res) { return res.send([]); });
exports.routes.post('/users', function (req, res) { return res.send({ body: req.body }); });
