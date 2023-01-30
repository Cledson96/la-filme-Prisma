"use strict";
exports.__esModule = true;
var joi_1 = require("joi");
var platformSchema = joi_1["default"].object({
    name: joi_1["default"].string().required()
});
exports["default"] = platformSchema;
