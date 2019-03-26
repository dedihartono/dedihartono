const request = require("supertest");
const assert = require("chai").assert;
const app = require("../index");

describe("GET /", () => {
  it("respond with json containing a message welcome", () => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.message, "Welcome!");
      });
  });
});
