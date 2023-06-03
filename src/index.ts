import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors);
app.use(bodyParser.json());
try {
  const dbURL = process.env.DB_URL as string;
  mongoose.connect(dbURL);
  console.log("DB Connected");
} catch (error) {
  console.log("DB Connection Error");
}

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("⚡️⚡️⚡️⚡️⚡️   Server is on!!"));
