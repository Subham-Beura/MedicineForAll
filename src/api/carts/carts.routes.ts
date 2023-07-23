import { Router } from "express";
import {
  addItemsToCart,
  createCart,
  getItemsFromCart,
  orderFromCart,
  removeItemsFromCart,
} from "./carts.controller";
const router = Router();
router.get("/:id", getItemsFromCart);
router.post("/", createCart);
router.put("/:cart_id", addItemsToCart);
router.delete("/:cart_id/:item_id", removeItemsFromCart);

router.post("/order", orderFromCart);
export default router;
