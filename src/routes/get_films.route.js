"use strict";
exports.__esModule = true;
var express_1 = require("express");
var get_films_controller_js_1 = require("../controllers/get_films.controller.js");
var router = (0, express_1.Router)();
router.get("/films", get_films_controller_js_1.films);
exports["default"] = router;
