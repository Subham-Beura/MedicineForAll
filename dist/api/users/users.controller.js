"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
// import bcrypt from "bcrypt";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const auth_1 = require("../middlewares/auth");
const prisma = new client_1.PrismaClient();
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let newUser = req.body;
            // Encryption
            // const salt = await bcrypt.genSalt(10);
            // const hash = await bcrypt.hash(newUser.password, salt);
            // newUser.password = hash;
            // Saving in DB
            const User = yield prisma.user.create({ data: newUser });
            return res.status(201).json({
                success: true,
                msg: "saved",
                payload: User,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Some tried to log in");
            const { email_id, password } = req.body;
            console.log(email_id);
            let userExists = yield prisma.user.findUnique({
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
            if (!auth_1.SECRET_KEY)
                throw new Error("JWT_KEY must be defined");
            const token = jsonwebtoken_1.default.sign({ emp_id: userExists.id.toString() }, auth_1.SECRET_KEY, {
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
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.login = login;
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