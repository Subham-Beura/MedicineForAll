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
exports.deleteShop = exports.updateShop = exports.createShop = exports.getShopById = exports.getAllShops = void 0;
const getAllShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAllShops = getAllShops;
const getShopById = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getShopById = getShopById;
const createShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.createShop = createShop;
const updateShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateShop = updateShop;
const deleteShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteShop = deleteShop;