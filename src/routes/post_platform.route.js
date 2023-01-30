"use strict";
exports.__esModule = true;
var express_1 = require("express");
var post_platform_controller_js_1 = require("../controllers/post_platform.controller.js");
var router = (0, express_1.Router)();
router.post("/platform", post_platform_controller_js_1.platform);
exports["default"] = router;
