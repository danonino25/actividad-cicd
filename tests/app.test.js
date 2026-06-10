const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  test("Debe responder Hola Mundo", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola Mundo");
  });
});



