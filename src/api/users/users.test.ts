import request from "supertest";
import app from "../../app";
describe("Auth Routest", () => {
  describe("Login", () => {
    it("should return 200", async () => {
      const response = await request(app).post("/api/auth/login").send({
        email: "XXXXXXXXXXXXX",
        password: "XXXXXXXX",
      });
      expect(response.status).toBe(200);
    });
  });
});
