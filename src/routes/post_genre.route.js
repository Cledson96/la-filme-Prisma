"use strict";
exports.__esModule = true;
var express_1 = require("express");
var post_genre_controller_js_1 = require("../controllers/post_genre.controller.js");
var router = (0, express_1.Router)();
router.post("/genre", post_genre_controller_js_1.genre);
exports["default"] = router;
