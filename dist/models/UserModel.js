"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    emailID: String,
    password: String,
    name: {
        salutation: String,
        firstName: String,
        middleName: String,
        lastName: String,
    },
    empDetails: {
        dob: Date,
        aadhar: String,
        gender: String,
        bloodGroup: String,
    },
    contactDetails: {
        contactno1: Number,
        contactno2: Number,
        permanentAddress: String,
        currentAddress: String,
    },
});
exports.default = (0, mongoose_1.model)("users", userSchema);
