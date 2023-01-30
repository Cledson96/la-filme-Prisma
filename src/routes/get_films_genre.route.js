"use strict";
exports.__esModule = true;
var express_1 = require("express");
var get_films_genre_controller_js_1 = require("../controllers/get_films_genre.controller.js");
var router = (0, express_1.Router)();
router.get("/films_genre:id", get_films_genre_controller_js_1.films);
exports["default"] = router;
