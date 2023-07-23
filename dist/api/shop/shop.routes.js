"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shop_controller_1 = require("./shop.controller");
const router = (0, express_1.Router)();
// Shop Details
router.get("/", shop_controller_1.getAllShops);
router.get("/:id", shop_controller_1.getShopById);
router.post("/", shop_controller_1.createShop);
router.put("/:id", shop_controller_1.updateShop);
router.delete("/:id", shop_controller_1.deleteShop);
// Shop Medicines
router.get("/:id/medicines", shop_controller_1.getAllMedicinesByShop);
router.get("/:id/medicines/:medicineInShopId", shop_controller_1.getMedicineFromShopById);
router.post("/:id/medicines", shop_controller_1.addMedicineToShop);
router.put("/:id/medicines/:medicineId", shop_controller_1.updateMedicineInShop);
router.delete("/:id/medicines/:medicineId", shop_controller_1.deleteMedicineFromShop);
exports.default = router;
