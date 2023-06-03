import { Schema, model } from "mongoose";
import User from "../types/user";

const userSchema = new Schema({
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
export default model<User>("users", userSchema);
