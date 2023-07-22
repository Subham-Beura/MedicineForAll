import { Router } from "express";
import {
  createShop,
  deleteShop,
  getAllShops,
  getShopById,
  updateShop,
} from "./shop.controller";
const router = Router();

router.get("/", getAllShops);
router.get("/:id", getShopById);
router.post("/", createShop);
router.put("/:id", updateShop);
router.delete("/:id", deleteShop);

export default router;
