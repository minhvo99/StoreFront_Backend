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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var product = new product_1.Products();
var ProductHandler = /** @class */ (function () {
    function ProductHandler() {
    }
    ProductHandler.prototype.index = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var p, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, product.index()];
                    case 1:
                        p = _a.sent();
                        res.json(p);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_1));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductHandler.prototype.show = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, p, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        if (!id)
                            return [2 /*return*/, res.sendStatus(400).json("Missing required params: id.")];
                        return [4 /*yield*/, product.show(id)];
                    case 1:
                        p = _a.sent();
                        res.json(p);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_2));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductHandler.prototype.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var p, newProduct, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        p = {
                            id: req.body.id,
                            name: req.body.name,
                            price: req.body.price,
                            description: req.body.description,
                        };
                        return [4 /*yield*/, product.create(p)];
                    case 1:
                        newProduct = _a.sent();
                        return [2 /*return*/, res.status(201).json(newProduct)];
                    case 2:
                        error_3 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_3));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductHandler.prototype.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var p, newProduct, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = {
                            id: parseInt(req.params.id),
                            name: req.body.name,
                            price: req.body.price,
                            description: req.body.description,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (!p.id && !Number(p.id))
                            return [2 /*return*/, res.sendStatus(400).json("Params ".concat(p.id, " invalid"))];
                        return [4 /*yield*/, product.update(p)];
                    case 2:
                        newProduct = _a.sent();
                        res.json(newProduct);
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Can not update product ".concat(p.name, " : ").concat(error_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductHandler.prototype.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, p, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        if (!id && !Number(id))
                            return [2 /*return*/, res.sendStatus(400).json("Params ".concat(id, " invalid"))];
                        return [4 /*yield*/, product.delete(id)];
                    case 1:
                        p = _a.sent();
                        res.sendStatus(200).json(p);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_5));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProductHandler;
}());
exports.default = ProductHandler;
