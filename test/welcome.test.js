const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with json containing a message welcome", done => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
