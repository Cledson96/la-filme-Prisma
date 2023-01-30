"use strict";
exports.__esModule = true;
var express_1 = require("express");
var delete_films_controller_js_1 = require("../controllers/delete_films.controller.js");
var router = (0, express_1.Router)();
router["delete"]("/films/:id", delete_films_controller_js_1.delete_films);
exports["default"] = router;
