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
exports.searchMedicines = void 0;
const users_controller_1 = require("../users/users.controller");
const searchMedicines = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.body;
        const name = req.body.name;
        const medicines = yield users_controller_1.prisma.medicine.findMany({
            where: {
                name: {
                    search: name,
                },
            },
            include: {
                MedicineInShops: {
                    include: {
                        shop: {
                            include: {
                                Address: true,
                            },
                        },
                    },
                },
                Company: true,
            },
        });
        res.status(200).json(medicines);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.searchMedicines = searchMedicines;
