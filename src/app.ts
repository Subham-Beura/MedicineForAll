import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./api/users/users.routes";
import addressRoutes from "./api/address/address.routes";
import medicinesRoutes from "./api/medicines/medicines.routes";
import shopsRoutes from "./api/shop/shop.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/address", addressRoutes);
app.use("/medicines", medicinesRoutes);
app.use("/shops", shopsRoutes);
export default app;
