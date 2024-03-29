import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./api/users/users.routes";
import addressRoutes from "./api/address/address.routes";
import medicinesRoutes from "./api/medicines/medicines.routes";
import shopsRoutes from "./api/shop/shop.routes";
import searchRoutes from "./api/search/search.routes";
import cartRoutes from "./api/carts/carts.routes";
import { auth } from "./middlewares/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/address", addressRoutes);
app.use("/medicines", medicinesRoutes);
app.use("/shops", shopsRoutes);
app.use("/search", searchRoutes);
app.use("/carts", cartRoutes);
export default app;
