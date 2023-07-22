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
exports.deleteMedicine = exports.updateMedicine = exports.createMedicine = exports.getMedicineById = exports.getAllMedicines = void 0;
const users_controller_1 = require("../users/users.controller");
const getAllMedicines = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const medicines = yield users_controller_1.prisma.medicine.findMany();
    res.status(200).json({
        medicines,
    });
});
exports.getAllMedicines = getAllMedicines;
const getMedicineById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { med_id } = req.params;
    const medicine = yield users_controller_1.prisma.medicine.findUnique({
        where: {
            id: med_id,
        },
    });
    if (!medicine)
        return res.status(404).json({ message: "Medicine not found" });
    res.status(200).json({
        medicine,
    });
});
exports.getMedicineById = getMedicineById;
const createMedicine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rating, companyId } = req.body;
    const medicine = yield users_controller_1.prisma.medicine.create({
        data: {
            name,
            rating,
            companyId: companyId && companyId,
        },
    });
    res.status(201).json({
        medicine,
    });
});
exports.createMedicine = createMedicine;
const updateMedicine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { med_id } = req.params;
    const { name, rating, companyId } = req.body;
    const medicine = yield users_controller_1.prisma.medicine.update({
        where: {
            id: med_id,
        },
        data: Object.assign({}, req.body),
    });
    res.status(200).json({
        medicine,
    });
});
exports.updateMedicine = updateMedicine;
const deleteMedicine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { med_id } = req.params;
    const medicine = yield users_controller_1.prisma.medicine.delete({
        where: {
            id: med_id,
        },
    });
    res.status(200).json({
        medicine,
    });
});
exports.deleteMedicine = deleteMedicine;
