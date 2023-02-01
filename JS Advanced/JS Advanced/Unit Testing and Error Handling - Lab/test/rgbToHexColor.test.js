const { expect } = require("chai");
const rgbToHexColor = require("../rgbToHex");

describe("Rgb to hex color", function () {
  it("should take three integers in range [0...255]", () => {
    expect(typeof rgbToHexColor(256, 255, 254)).to.equal("undefined");
  });
  it("should take three integers in range [0...255]", () => {
    expect(typeof rgbToHexColor(256, 521, 123)).to.equal("undefined");
  });
  it("should take three integers in range [0...255]", () => {
    expect(typeof rgbToHexColor(255, 257, 254)).to.equal("undefined");
  });
  it("should take three integers in range [0...255]", () => {
    expect(typeof rgbToHexColor(255, -1, 254)).to.equal("undefined");
  });
  it("should take three integers in range [0...255]", () => {
    expect(typeof rgbToHexColor(255, 255, 258)).to.equal("undefined");
  });
  it("return undefined if any of the input parameters are of an invalid type", () => {
    expect(typeof rgbToHexColor("2442", "255", 258)).to.equal("undefined");
  });
  it("return undefined if any of the input parameters are of an invalid type", () => {
    expect(typeof rgbToHexColor("255", "255", "255")).to.equal("undefined");
  });
  it("return undefined if any of the input parameters are of an invalid type", () => {
    expect(typeof rgbToHexColor("aa", "aa", [])).to.equal("undefined");
  });
  it("Return the same color in hexadecimal format as a string (e.g. #FF9EAA)", () => {
    expect(rgbToHexColor(253, 42, 255)).to.equal("#FD2AFF");
  });
  it("should be undefined", function () {
    expect(typeof rgbToHexColor(3.13, 12, 13)).to.equal("undefined");
  });
  it("Return the same color in hexadecimal format as a string (e.g. #FF9EAA)", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });
});
