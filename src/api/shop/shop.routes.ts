import { Router } from "express";
import {
  addMedicineToShop,
  createShop,
  deleteMedicineFromShop,
  deleteShop,
  getAllMedicinesByShop,
  getAllShops,
  getMedicineFromShopById,
  getShopById,
  updateMedicineInShop,
  updateShop,
} from "./shop.controller";
const router = Router();

// Shop Details
router.get("/", getAllShops);
router.get("/:id", getShopById);
router.post("/", createShop);
router.put("/:id", updateShop);
router.delete("/:id", deleteShop);

// Shop Medicines
router.get("/:id/medicines", getAllMedicinesByShop);
router.get("/:id/medicines/:medicineInShopId", getMedicineFromShopById);
router.post("/:id/medicines", addMedicineToShop);
router.put("/:id/medicines/:medicineId", updateMedicineInShop);
router.delete("/:id/medicines/:medicineId", deleteMedicineFromShop);

export default router;
