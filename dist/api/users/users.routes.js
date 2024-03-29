"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const users_controller_1 = require("./users.controller");
// import { getUserList } from "./users.controller";
const router = (0, express_1.Router)();
// router.get("/", auth, getAllUsers);
router.post("/register", users_controller_1.register);
router.post("/login", users_controller_1.login);
router.get("/", auth_1.auth, users_controller_1.getAllUsers);
// router.post("/changepassword/:emp_id", auth, changePassword);
exports.default = router;
