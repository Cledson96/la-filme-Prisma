"use strict";
exports.__esModule = true;
var express_1 = require("express");
var post_films_controller_js_1 = require("../controllers/post_films.controller.js");
var router = (0, express_1.Router)();
router.post("/films", post_films_controller_js_1.films);
exports["default"] = router;
