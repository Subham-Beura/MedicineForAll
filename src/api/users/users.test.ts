import request from "supertest";
import app from "../../app";
describe("Auth Routest", () => {
  let jwt: string = "";

  beforeAll(getJWT());

  it("JWT is OK", () => {
    expect(jwt).not.toBe("");
  });
  describe("Login", () => {
    it("should return 200", async () => {
      const response = await request(app).post("/auth/login").send({
        email_id: "admin@b.com",
        password: "admin",
      });
      expect(response.body.success).toBe(true);
      expect(response.status).toBe(200);
    });
  });
  describe("POST /auth/register", () => {
    it("should return 201 on creation", async () => {
      //   const response = await request(app).post("/auth/register").send({
      //     email_id: "s2@b.com",
      //     password: "XXXXXX",
      //     first_name: "XXXXXX",
      //     middle_name: "",
      //     last_name: "XXXXX",
      //   });
      //   // expect(response.body.success).toBe(true);
      //   expect(response.status).toBe(201);
    });
  });
  describe("GET /auth/", () => {
    it("should return 200", async () => {
      const response = await request(app)
        .get("/auth/")
        .send()
        .set("Authorization", "Bearer " + jwt);
      expect(response.status).toBe(200);
    });
    it("should have an list", async () => {
      const response = await request(app)
        .get("/auth/")
        .send()
        .set("Authorization", "Bearer " + jwt);
      expect(response.body.allUsers).toBeInstanceOf(Array);
    });
  });
  function getJWT(): jest.ProvidesHookCallback {
    return async () => {
      const res = await request(app)
        .post("/auth/login")
        .send({ email_id: "s2@b.com", password: "XXXXXX" });
      jwt = res.body.token;
    };
  }
});
