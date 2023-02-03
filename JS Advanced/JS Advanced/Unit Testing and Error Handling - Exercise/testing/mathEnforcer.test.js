const { expect } = require("chai");
const mathEnforcer = require("./mathEnforcer");

describe("Math Enforcer", () => {
  describe("addFive", () => {
    it("should return undefined there are no parameters", () => {
      expect(mathEnforcer.addFive()).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.addFive("a")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.addFive("5")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.addFive([])).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.addFive(new RegExp())).to.be.undefined;
    });
    it("If the parameter is a number, add 5 to it, and return the result.", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it("If the parameter is a negative number, add 5 to it, and return the result.", () => {
      expect(mathEnforcer.addFive(-5)).to.equal(0);
    });
    it("If the parameter is a floating number, add 5 to it, and return the result.", () => {
      expect(mathEnforcer.addFive(1.6)).to.be.closeTo(6.6, 0.1);
    });
    it("If the parameter is a negative floating number, add 5 to it, and return the result.", () => {
      expect(mathEnforcer.addFive(-1.6)).to.be.closeTo(3.4, 0.1);
    });
    it("If the parameter is a negative floating number, add 5 to it, and return the result.", () => {
      expect(mathEnforcer.addFive(-10.6)).to.be.closeTo(-5.6, 0.1);
    });
  });
  describe("subtractTen", () => {
    it("should return undefined there are no parameters", () => {
      expect(mathEnforcer.subtractTen()).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.subtractTen("5")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.subtractTen("a")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.subtractTen(new RegExp())).to.be.undefined;
    });
    it("If the parameter is a negative number, subtract 10 from it, and return the result.", () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });
    it("If the parameter is a negative number, subtract 10 from it, and return the result.", () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });
    it("If the parameter is a negative number, subtract 10 from it, and return the result.", () => {
      expect(mathEnforcer.subtractTen(10.6)).to.be.closeTo(0.6, 0.1);
    });
    it("If the parameter is a negative floating number, subtract 10 from it, and return the result.", () => {
      expect(mathEnforcer.subtractTen(-10.6)).to.be.closeTo(-20.6, 0.1);
    });
    it("If the parameter is a negative floating number, subtract 10 from it, and return the result.", () => {
      expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.1);
    });
  });
  describe("sum", () => {
    it("should return undefined there are no parameters", () => {
      expect(mathEnforcer.sum()).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum("5", "5")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum("a")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum([], 1)).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum({}, "")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum(1, "a")).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum(2, [])).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum(3, {})).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum("", 5)).to.be.undefined;
    });
    it("should return undefined if the parameters are not numbers", () => {
      expect(mathEnforcer.sum([], {})).to.be.undefined;
    });
    it("should return undefined if the parameters are not numbers", () => {
      expect(mathEnforcer.sum("asd", {})).to.be.undefined;
    });
    it("should return undefined if the parameter is not a number", () => {
      expect(mathEnforcer.sum(new RegExp())).to.be.undefined;
    });
    it("If the parameters are numbers, sum them, and return the result.", () => {
      expect(mathEnforcer.sum(10, 10)).to.equal(20);
    });
    it("If the parameters are negative numbers, sum them, and return the result.", () => {
      expect(mathEnforcer.sum(-10, 10)).to.equal(0);
    });
    it("If the first parameter is a negative number, sum them, and return the result.", () => {
      expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
    });
    it("If the parameters are floating numbers, sum them, and return the result.", () => {
      expect(mathEnforcer.sum(10.6, 5.7)).to.be.closeTo(16.3, 0.1);
    });
    it("If the parameters are floating negative numbers, sum them, and return the result.", () => {
      expect(mathEnforcer.sum(-5.67, -10.7)).to.be.closeTo(-16.37, 0.1);
    });
    it(`valid input negative Integers-> (-1,-1) -> -2`, () => {
      expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
    });
  });
});
