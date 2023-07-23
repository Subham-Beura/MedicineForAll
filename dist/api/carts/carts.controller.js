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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFromCart = exports.removeItemsFromCart = exports.addItemsToCart = exports.createCart = exports.getItemsFromCart = void 0;
const users_controller_1 = require("../users/users.controller");
const getItemsFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield users_controller_1.prisma.cart.findMany({
            where: {
                userId: req.params.id,
            },
            include: {
                CartItems: true,
            },
        });
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getItemsFromCart = getItemsFromCart;
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield users_controller_1.prisma.cart.create({
            data: Object.assign({}, req.body),
        });
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createCart = createCart;
const addItemsToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield users_controller_1.prisma.cartItems.create({
            data: {
                cartId: String(req.params.cart_id),
                medicineInShopsId: String(req.body.medicineInShopsId),
            },
        });
        res.status(200).json({ message: "Item added to cart" });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.addItemsToCart = addItemsToCart;
const removeItemsFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield users_controller_1.prisma.cartItems.delete({
            where: {
                id: String(req.params.item_id),
            },
        });
        res.status(200).json({ message: "Item removed from cart" });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.removeItemsFromCart = removeItemsFromCart;
const orderFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield users_controller_1.prisma.orders.create({
            data: {
                userId: String(req.body.userId),
                cartId: String(req.body.cartId),
                transactionsId: String(req.body.transactionsId),
                isDelivered: false,
            },
        });
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.orderFromCart = orderFromCart;
