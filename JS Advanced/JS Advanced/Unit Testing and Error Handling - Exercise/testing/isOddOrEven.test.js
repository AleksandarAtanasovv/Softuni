const isOddOrEven = require("./evenOrOdd");
const { expect } = require("chai");

describe("isOddOrEven", () => {
  it("should return undefined with a number", () => {
    expect(isOddOrEven(332)).to.be.undefined;
  });
  it("should return undefined with an array", () => {
    expect(isOddOrEven([])).to.be.undefined;
  });
  it("should return even with aabb", () => {
    expect(isOddOrEven("aabb")).to.equal("even");
  });
  it("should return odd with aab", () => {
    expect(isOddOrEven("aab")).to.equal("odd");
  });
  it("should return odd with aab", () => {
    expect(isOddOrEven("aabbaabbaabb")).to.equal("even");
  });
  it("should return odd with aab", () => {
    expect(isOddOrEven("aabbaabbaabbb")).to.equal("odd");
  });
});
