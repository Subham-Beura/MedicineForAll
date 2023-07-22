import request from "supertest";
import app from "../../app";
describe("Auth Routest", () => {
  describe("Login", () => {
    it("should return 200", async () => {
      const response = await request(app).post("/auth/login").send({
        email_id: "s@b.com",
        password: "Subham",
      });
      expect(response.body.success).toBe(true);
      expect(response.status).toBe(200);
    });
  });
  describe("POST /auth/register", () => {
    it("should return 201 on creation", async () => {
      // const response = await request(app).post("/auth/register").send({
      //   email_id: "s2@b.com",
      //   password: "XXXXXX",
      //   first_name: "XXXXXX",
      //   middle_name: "",
      //   last_name: "XXXXX",
      // });
      // // expect(response.body.success).toBe(true);
      // expect(response.status).toBe(201);
    });
  });
});
