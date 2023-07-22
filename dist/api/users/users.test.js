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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe("Auth Routest", () => {
    let jwt = "";
    beforeAll(getJWT());
    it("JWT is OK", () => {
        expect(jwt).not.toBe("");
    });
    describe("Login", () => {
        it("should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).post("/auth/login").send({
                email_id: "s@b.com",
                password: "Subham",
            });
            expect(response.body.success).toBe(true);
            expect(response.status).toBe(200);
        }));
    });
    describe("POST /auth/register", () => {
        it("should return 201 on creation", () => __awaiter(void 0, void 0, void 0, function* () {
            // const response = await request(app).post("/auth/register").send({
            //   email_id: "s2@b.com",
            //   password: "XXXXXX",
            //   first_name: "XXXXXX",
            //   middle_name: "",
            //   last_name: "XXXXX",
            // });
            // // expect(response.body.success).toBe(true);
            // expect(response.status).toBe(201);
        }));
    });
    describe("GET /auth/", () => {
        it("should return 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default)
                .get("/auth/")
                .send()
                .set("Authorization", "Bearer " + jwt);
            expect(response.status).toBe(200);
        }));
        it("should have an list", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default)
                .get("/auth/")
                .send()
                .set("Authorization", "Bearer " + jwt);
            expect(response.body.allUsers).toBeInstanceOf(Array);
        }));
    });
    function getJWT() {
        return () => __awaiter(this, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default)
                .post("/auth/login")
                .send({ email_id: "s2@b.com", password: "XXXXXX" });
            jwt = res.body.token;
        });
    }
});
