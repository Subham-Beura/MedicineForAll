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
exports.createAddress = exports.getAddressList = void 0;
const users_controller_1 = require("../users/users.controller");
const getAddressList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userId } = req.params;
    if (!userId)
        return res.status(400).json({ message: "Invalid id" });
    const addressList = yield users_controller_1.prisma.address.findMany({
        where: { userId: userId },
    });
    console.log(userId);
    res.json(addressList);
});
exports.getAddressList = getAddressList;
const createAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    if (!userId)
        return res.status(400).json({ message: "Invalid id" });
    const address = yield users_controller_1.prisma.address.create({
        data: Object.assign({}, req.body),
    });
    res.json(address);
});
exports.createAddress = createAddress;
