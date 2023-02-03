const { expect } = require("chai");
const lookupChar = require("./charLookUp");

describe("lookUpChar", () => {
  it("should return undefined if the first parameter is not a string", () => {
    expect(lookupChar(1, 2)).to.be.undefined;
  });
  it("should return undefined if the second parameter is not a number", () => {
    expect(lookupChar("fox", "one")).to.be.undefined;
  });
  it("should return undefined on floating point number", () => {
    expect(lookupChar("fox", 1.1)).to.be.undefined;
  });
  it("should return undefined on floating point number", () => {
    expect(lookupChar("fox", 1.2)).to.be.undefined;
  });
  it("should return incorrect index on negative bigger or equal index", () => {
    expect(lookupChar("fox", 3)).to.equal("Incorrect index");
  });
  it("should return incorrect index on negative bigger or equal index", () => {
    expect(lookupChar("fox", -1)).to.equal("Incorrect index");
  });
  it("should return incorrect index on negative bigger or equal index", () => {
    expect(lookupChar("fox", 4)).to.equal("Incorrect index");
  });
  it("should return the char at the index if both values are valid", () => {
    expect(lookupChar("fox", 2)).to.equal("x");
  });
  it("should return the char at the index if both values are valid", () => {
    expect(lookupChar("fox", 1)).to.equal("o");
  });
  it("should return the char at the index if both values are valid", () => {
    expect(lookupChar("fox", 0)).to.equal("f");
  });
});
