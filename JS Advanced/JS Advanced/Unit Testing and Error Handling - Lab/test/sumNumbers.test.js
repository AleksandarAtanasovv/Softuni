const { expect } = require("chai");
const sum = require("../sumNumbers");
describe("Sum array of numbers", function () {
  it("Calculate right", () => {
    const arr = [1, 2, 2];
    expect(sum(arr)).to.equal(5);
  });
});
