const request = require("supertest");
const assert = require("chai").assert;
const app = require("../index");

describe("GET /", () => {
  it("respond with json containing a message users works", () => {
    request(app)
      .get("/api/users/test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        assert.equal(res.body.message, "User Works");
      });
  });
});
