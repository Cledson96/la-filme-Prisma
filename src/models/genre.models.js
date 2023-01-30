"use strict";
exports.__esModule = true;
var joi_1 = require("joi");
var genreSchema = joi_1["default"].object({
    name: joi_1["default"].string().required()
});
exports["default"] = genreSchema;
