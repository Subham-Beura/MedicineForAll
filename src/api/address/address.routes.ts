import { Router } from "express";
import { createAddress, getAddressList } from "./address.controllers";
import { auth } from "../middlewares/auth";
const router = Router();

router.get("/", getAddressList);
router.post("/", createAddress);
router.delete("/");
export default router;
