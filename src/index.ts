import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("⚡️⚡️⚡️⚡️⚡️   Server is on!!" + port));
