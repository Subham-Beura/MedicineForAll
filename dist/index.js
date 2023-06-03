"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
try {
    const dbURL = process.env.DB_URL;
    mongoose_1.default.connect(dbURL);
    console.log("DB Connected");
}
catch (error) {
    console.log("DB Connection Error");
}
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/auth", authRoutes_1.default);
app.listen(port, () => console.log("⚡️⚡️⚡️⚡️⚡️   Server is on!!" + port));
