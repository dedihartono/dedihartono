process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const index = require("../index");
const should = chai.should();

chai.use(chaiHttp);

describe("Users", () => {
  describe("/GET /", () => {
    it("it should GET all the users", done => {
      chai
        .request(index)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
