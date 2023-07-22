"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicines_controller_1 = require("./medicines.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.get("/", medicines_controller_1.getAllMedicines);
router.get("/:med_id", auth_1.auth, medicines_controller_1.getMedicineById);
router.post("/", auth_1.auth, medicines_controller_1.createMedicine);
router.put("/:med_id", auth_1.auth, medicines_controller_1.updateMedicine);
router.delete("/:med_id", auth_1.auth, medicines_controller_1.deleteMedicine);
exports.default = router;
