const { expect } = require("chai");
const createCalculator = require("../addSubtract");

describe("Add and subtract numbers", function () {
  let calc;
  beforeEach(() => {
    calc = createCalculator();
  });
  it("should return a module containing the functions", () => {
    expect(calc.hasOwnProperty("get")).to.equal(true);
    expect(calc.hasOwnProperty("add")).to.equal(true);
    expect(calc.hasOwnProperty("subtract")).to.equal(true);
  });
  it("should have a 0 as an initial value", () => {
    expect(calc.get()).to.equal(0);
  });
  it("should sum numbers", () => {
    calc.add(1);
    calc.add(2);
    expect(calc.get()).to.equal(3);
  });
  it("should subtract numbers", () => {
    calc.add(1);
    calc.add(2);
    calc.subtract(2);
    expect(calc.get()).to.equal(1);
  });
  it("should subtract numbers", () => {
    calc.add(1);
    calc.add(2);
    calc.add(2);
    calc.subtract(3);
    expect(calc.get()).to.equal(2);
  });
  it("should sum floating numbers", () => {
    calc.add(1.5);
    calc.add(2.6);
    calc.add(2.1);
    calc.subtract(1.1);
    expect(calc.get()).to.closeTo(5, 0.5);
  });
  it("should sum negative numbers", () => {
    calc.add(-1);
    calc.add(-2);
    calc.add(-5);
    calc.subtract(1);
    expect(calc.get()).to.equal(-9);
  });
  it("should work with string numbers", () => {
    calc.add("5");
    calc.add("2");
    expect(calc.get()).to.equal(7);
  });
  it("should not subtract with strings", () => {
    calc.subtract("hello");
    expect(calc.get()).to.be.NaN;
  });
  it("should not add with strings", () => {
    calc.add("hello");
    expect(calc.get()).to.be.NaN;
  });
});
