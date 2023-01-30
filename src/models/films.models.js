"use strict";
exports.__esModule = true;
var joi_1 = require("joi");
var filmsSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    genre_id: joi_1["default"].number().integer().required(),
    platform_id: joi_1["default"].number().integer().required(),
    note: joi_1["default"].string(),
    status: joi_1["default"].string().required()
});
exports["default"] = filmsSchema;
