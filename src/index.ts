import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

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

app.listen(port, () => console.log("Server is on!!"));
