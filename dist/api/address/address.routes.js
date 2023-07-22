"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const address_controllers_1 = require("./address.controllers");
const router = (0, express_1.Router)();
router.get("/", address_controllers_1.getAddressList);
router.post("/", address_controllers_1.createAddress);
router.delete("/");
exports.default = router;
