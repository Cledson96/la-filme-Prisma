"use strict";
exports.__esModule = true;
var express_1 = require("express");
var update_films_controller_js_1 = require("../controllers/update_films.controller.js");
var router = (0, express_1.Router)();
router.patch("/films/:id", update_films_controller_js_1.update_films);
exports["default"] = router;
