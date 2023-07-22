import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { getAllUsers, login, register } from "./users.controller";
// import { getUserList } from "./users.controller";

const router = Router();

// router.get("/", auth, getAllUsers);

router.post("/register", register);
router.post("/login", login);
router.get("/", auth, getAllUsers);
// router.post("/changepassword/:emp_id", auth, changePassword);
export default router;
