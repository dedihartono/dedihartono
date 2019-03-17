const assert = require("chai").assert;
const app = require("../controllers/app");

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(11, 1993);

describe("App", () => {
  describe("sayHello()", () => {
    it("sayHello should return hello world!", () => {
      assert.equal(sayHelloResult, "hello world!");
    });

    it("sayHello should return type string", () => {
      assert.typeOf(sayHelloResult, "string");
    });
  });

  describe("addNumbers()", () => {
    it("addNumbers should be above 2004", () => {
      assert.isAbove(addNumbersResult, 2000);
    });

    it("addNumbers should return type number", () => {
      assert.typeOf(addNumbersResult, "number");
    });
  });
});
