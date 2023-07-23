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
exports.deleteMedicineFromShop = exports.updateMedicineInShop = exports.getMedicineFromShopById = exports.addMedicineToShop = exports.getAllMedicinesByShop = exports.deleteShop = exports.updateShop = exports.createShop = exports.getShopById = exports.getAllShops = void 0;
const users_controller_1 = require("../users/users.controller");
const getAllShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shops = yield users_controller_1.prisma.shop.findMany();
    res.json(shops);
});
exports.getAllShops = getAllShops;
const getShopById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const shop = yield users_controller_1.prisma.shop.findUnique({
        where: {
            id: String(id),
        },
    });
    if (!shop)
        return res.status(404).json({ error: "Shop not found" });
    res.status(200).json(shop);
});
exports.getShopById = getShopById;
const createShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shop = yield users_controller_1.prisma.shop.create({
            data: Object.assign({}, req.body),
        });
        res.status(201).json(shop);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.createShop = createShop;
const updateShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const shop = yield users_controller_1.prisma.shop.update({
            where: {
                id: String(id),
            },
            data: Object.assign({}, req.body),
        });
        if (!shop)
            return res.status(404).json({ error: "Shop not found" });
        res.status(200).json(shop);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateShop = updateShop;
const deleteShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const shop = yield users_controller_1.prisma.shop.delete({
            where: {
                id: String(id),
            },
        });
        if (!shop)
            return res.status(404).json({ error: "Shop not found" });
        res.status(200).json(shop);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteShop = deleteShop;
const getAllMedicinesByShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const medicines = yield users_controller_1.prisma.medicineInShops.findMany({
            where: {
                shopId: String(id),
            },
        });
        res.status(200).json(medicines);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getAllMedicinesByShop = getAllMedicinesByShop;
const addMedicineToShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const medicineStock = req.body;
        const medicine = yield users_controller_1.prisma.medicineInShops.create({
            data: Object.assign(Object.assign({}, medicineStock), { shopId: id }),
        });
        res.json(medicine);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.addMedicineToShop = addMedicineToShop;
const getMedicineFromShopById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: shopId, medicineInShopId } = req.params;
        const medicine = yield users_controller_1.prisma.medicineInShops.findUnique({
            where: {
                id: medicineInShopId,
            },
        });
        res.json(medicine);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getMedicineFromShopById = getMedicineFromShopById;
const updateMedicineInShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, medicineId } = req.params;
        const medicineStock = req.body;
        const medicine = yield users_controller_1.prisma.medicineInShops.updateMany({
            where: {
                shopId: id,
                medicineId: medicineId,
            },
            data: Object.assign({}, medicineStock),
        });
        res.json(medicine);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateMedicineInShop = updateMedicineInShop;
const deleteMedicineFromShop = (req, res) => {
    try {
        const { id } = req.params;
        const { medicineId } = req.body;
        const medicine = users_controller_1.prisma.medicineInShops.deleteMany({
            where: {
                shopId: id,
                medicineId: medicineId,
            },
        });
        res.json(medicine);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.deleteMedicineFromShop = deleteMedicineFromShop;
