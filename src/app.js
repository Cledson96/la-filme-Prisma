"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var get_films_route_js_1 = require("./routes/get_films.route.js");
var post_films_route_js_1 = require("./routes/post_films.route.js");
var post_genre_route_js_1 = require("./routes/post_genre.route.js");
var post_platform_route_js_1 = require("./routes/post_platform.route.js");
var update_films_route_js_1 = require("./routes/update_films.route.js");
var delete_films_route_js_1 = require("./routes/delete_films.route.js");
//config
var app = (0, express_1["default"])();
dotenv_1["default"].config();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
//routes
app.use(post_genre_route_js_1["default"]);
app.use(post_platform_route_js_1["default"]);
app.use(get_films_route_js_1["default"]);
app.use(post_films_route_js_1["default"]);
app.use(update_films_route_js_1["default"]);
app.use(delete_films_route_js_1["default"]);
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server running in port ".concat(port)); });
