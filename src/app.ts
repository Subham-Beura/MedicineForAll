import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./api/users/users.routes";

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

export default app;
