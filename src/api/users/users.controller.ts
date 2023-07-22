import { Request, Response } from "express";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";
import { SECRET_KEY } from "../middlewares/auth";
const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
  try {
    let newUser = req.body;

    // Encryption
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(newUser.password, salt);
    // newUser.password = hash;
    // Saving in DB
    const User = await prisma.user.create({ data: newUser });

    return res.status(201).json({
      success: true,
      msg: "saved",
      payload: User,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function login(req: Request, res: Response) {
  try {
    console.log("Some tried to log in");
    const { email_id, password } = req.body;
    console.log(email_id);
    let userExists = await prisma.user.findUnique({
      where: { email_id: email_id },
    });
    // Username Not Found
    if (!userExists)
      return res.json({
        success: false,
        msg: "Not User",
      });

    // wrong Password
    // let isValidPassword = await bcrypt.compare(password, userExists.password);
    let isValidPassword = userExists.password == password;
    if (!isValidPassword)
      return res.json({
        success: false,
        msg: "Wrong Password",
      });

    // Token Creation
    if (!SECRET_KEY) throw new Error("JWT_KEY must be defined");
    const token = jwt.sign({ emp_id: userExists.id.toString() }, SECRET_KEY, {
      expiresIn: "24 hours",
    });
    const secondsInOneDay = 60 * 60 * 24;
    let expiry = new Date().getTime();
    expiry += secondsInOneDay * 1000;
    res.json({
      success: true,
      userExists,
      token,
      expiry,
      msg: "Welcome To Find My Medicine",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
// export async function getAllUsers(req: Request, res: Response) {
//   let allUsers = await User.find();
//   return res.json({ allUsers, success: true });
// }

// export async function changePassword(req: Request, res: Response) {
//   const data = req.body;
//   const emp_id = req.params.emp_id;
//   console.log(emp_id);
//   let user = await User.findOne({ emp_id })!;
//   if (user?.password != data.oldPassword)
//     return res.json({
//       success: false,
//       msg: "Wrong Password",
//     });
//   // if (!bcrypt.compare(user?.password!, data.oldPassword))
//   //   console.log("Wrong Password");
//   // const salt = await bcrypt.genSalt(10);
//   // const hash: string = await bcrypt.hash(data.newPassword1, salt);
//   let newUser = user;
//   newUser!.password = data.newPassword1;
//   // newUser!.password = hash;
//   const doc = new User(newUser);
//   console.log(doc);
//   let saved = await doc.save();

//   return res.json({
//     success: true,
//     msg: "Password Changed",
//   });
// }
