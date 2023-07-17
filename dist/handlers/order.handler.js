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
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../models/order");
var orders = new order_1.OrderModel();
var OrderHandler = /** @class */ (function () {
    function OrderHandler() {
    }
    OrderHandler.prototype.index = function (_req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var order, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, orders.index()];
                    case 1:
                        order = _a.sent();
                        res.status(200).json(order);
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
    OrderHandler.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, order, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = parseInt(req.params.id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (id === null || !id)
                            return [2 /*return*/, res.sendStatus(400).json("Params ".concat(id, " invalid!"))];
                        return [4 /*yield*/, orders.show(id)];
                    case 2:
                        order = _a.sent();
                        res.status(200).json(order);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderHandler.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var order, newOrder, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        order = {
                            user_id: req.body.user_id,
                            status: req.body.status,
                        };
                        if (!order.user_id || !order.status) {
                            return [2 /*return*/, res.status(400).json({
                                    error: "Missing one or more required parameters",
                                })];
                        }
                        return [4 /*yield*/, orders.create(order)];
                    case 1:
                        newOrder = _a.sent();
                        res.status(201).json(newOrder);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_3));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrderHandler.prototype.addToOrder = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var addOrder, product, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        addOrder = {
                            order_id: parseInt(req.params.id),
                            product_id: parseInt(req.body.product_id),
                            quantity: parseInt(req.body.quantity),
                        };
                        if (!addOrder.product_id || !addOrder.quantity) {
                            return [2 /*return*/, res.status(400).json({
                                    error: "Missing required parameters",
                                })];
                        }
                        return [4 /*yield*/, orders.addToOrder(addOrder)];
                    case 1:
                        product = _a.sent();
                        res.status(200).json(product);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Can not add product to order: ".concat(error_4, "}"));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrderHandler.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var o, order, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        o = {
                            id: parseInt(req.params.id),
                            user_id: req.body.user_id,
                            status: req.body.status,
                        };
                        if (!o.id || !o.user_id || !o.status) {
                            return [2 /*return*/, res.status(400).json({
                                    error: "Missing required parameters",
                                })];
                        }
                        return [4 /*yield*/, orders.update(o)];
                    case 1:
                        order = _a.sent();
                        res.status(201).json(order);
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
    OrderHandler.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, orders.delete(id)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_6));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrderHandler.prototype.getCurrentOrders = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, currentOrders, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, orders.getCurrentOrders(id)];
                    case 1:
                        currentOrders = _a.sent();
                        res.status(200).json(currentOrders);
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        res.sendStatus(400);
                        throw new Error("Error: ".concat(error_7));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return OrderHandler;
}());
exports.default = OrderHandler;
