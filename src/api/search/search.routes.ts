import { Router } from "express";
import { searchMedicines } from "./search.controller";
const router = Router();
router.post("/", searchMedicines);
export default router;
