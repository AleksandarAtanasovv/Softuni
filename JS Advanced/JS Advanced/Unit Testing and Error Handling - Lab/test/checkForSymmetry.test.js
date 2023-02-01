const { expect } = require("chai");
const isSymmetric = require("../checkForSymmetry");

describe("Check if an array is symmetric", function () {
  it("should take an array and return false for incorrect input", () => {
    expect(isSymmetric("a")).to.be.false;
  });
  it("should take an array and return false for incorrect input", () => {
    expect(isSymmetric(123)).to.be.false;
  });
  it("should return true if array is symmetric", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it("should return true if array is symmetric", () => {
    expect(isSymmetric([1, 1])).to.be.true;
  });

  it("should return false on not symmetrical arrays", () => {
    const arr = [1, 2, 3];
    expect(isSymmetric(arr)).to.be.false;
  });
  it("should return false on array like arguments", () => {
    expect(isSymmetric("123123")).to.be.false;
  });
  it("should return true on isSymmetric([[1,2], [2], [1,2]])", () => {
    expect(isSymmetric([[1, 2], [2], [1, 2]])).to.be.true;
  });
});
