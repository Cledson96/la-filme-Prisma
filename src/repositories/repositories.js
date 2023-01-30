"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteFilms = exports.updateFilms = exports.insertFilms = exports.findFilmID = exports.findFilm = exports.insertPlatform = exports.findPlatformID = exports.findPlatform = exports.insertGenre = exports.findGenreID = exports.findGenre = void 0;
var db_js_1 = require("../database/db.js");
function findGenre(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].genre.findFirst({
                    where: {
                        name: body.name
                    }
                })];
        });
    });
}
exports.findGenre = findGenre;
function findGenreID(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].genre.findFirst({
                    where: {
                        id: body.genre_id
                    }
                })];
        });
    });
}
exports.findGenreID = findGenreID;
function insertGenre(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].genre.create({
                    data: {
                        name: body.name
                    }
                })];
        });
    });
}
exports.insertGenre = insertGenre;
function findPlatform(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].platform.findFirst({
                    where: {
                        name: body.name
                    }
                })];
        });
    });
}
exports.findPlatform = findPlatform;
function findPlatformID(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].platform.findFirst({
                    where: {
                        id: body.platform_id
                    }
                })];
        });
    });
}
exports.findPlatformID = findPlatformID;
function insertPlatform(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].platform.create({
                    data: {
                        name: body.name
                    }
                })];
        });
    });
}
exports.insertPlatform = insertPlatform;
function findFilm(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].films.findFirst({
                    where: {
                        name: body.name
                    }
                })];
        });
    });
}
exports.findFilm = findFilm;
function findFilmID(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].films.findFirst({
                    where: {
                        id: body.id
                    }
                })];
        });
    });
}
exports.findFilmID = findFilmID;
function insertFilms(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].films.create({
                    data: body
                })];
        });
    });
}
exports.insertFilms = insertFilms;
function updateFilms(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].films.update({
                    where: {
                        id: body.id
                    },
                    data: {
                        status: 'assistido'
                    }
                })];
        });
    });
}
exports.updateFilms = updateFilms;
function deleteFilms(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, db_js_1["default"].films["delete"]({
                    where: {
                        id: body.id
                    }
                })];
        });
    });
}
exports.deleteFilms = deleteFilms;
