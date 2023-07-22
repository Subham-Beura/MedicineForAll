import { Router } from "express";
import {
  createMedicine,
  deleteMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
} from "./medicines.controller";
import { auth } from "../middlewares/auth";
const router = Router();

router.get("/", getAllMedicines);
router.get("/:med_id", auth, getMedicineById);
router.post("/", auth, createMedicine);
router.put("/:med_id", auth, updateMedicine);
router.delete("/:med_id", auth, deleteMedicine);

export default router;
