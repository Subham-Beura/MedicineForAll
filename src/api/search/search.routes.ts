import { Router } from "express";
import { searchMedicines } from "./search.controller";
const router = Router();
router.get("/", searchMedicines);
export default router;
