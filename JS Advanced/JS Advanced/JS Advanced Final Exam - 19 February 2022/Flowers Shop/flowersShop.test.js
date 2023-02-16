const { expect } = require("chai");
const flowerShop = require("./flowersShop");

describe("Tests", () => {
  describe("CalcPriceOfFlowers", () => {
    it("should throw an error", () => {
      expect(() => flowerShop.calcPriceOfFlowers(1, 2, 3)).to.throw("Invalid input!");
    });
    it("should throw an error", () => {
      expect(() => flowerShop.calcPriceOfFlowers("rose", "2", 3)).to.throw("Invalid input!");
    });
    it("should throw an error", () => {
      expect(() => flowerShop.calcPriceOfFlowers("rose", 5, "2")).to.throw("Invalid input!");
    });
    it("should multiple price and qty", () => {
      expect(flowerShop.calcPriceOfFlowers("a", 5, 5)).to.equal("You need $25.00 to buy a!");
    });
  });
  describe("checkFlowersAvailable", () => {
    it("should return the flower is available", () => {
      expect(flowerShop.checkFlowersAvailable("a", ["a", "b", "c"])).to.equal(
        "The a are available!"
      );
    });
    it("should return the flower is sold", () => {
      expect(flowerShop.checkFlowersAvailable("a", ["b", "b", "c"])).to.equal(
        "The a are sold! You need to purchase more!"
      );
    });
  });
  describe("sellFlowers", () => {
    it("should throw Invalid input!", () => {
      expect(() => flowerShop.sellFlowers(["a", "b", "c"], "5")).to.throw("Invalid input!");
    });
    it("should throw Invalid input!", () => {
      expect(() => flowerShop.sellFlowers(["a", "b", "c"], -1)).to.throw("Invalid input!");
    });
    it("should throw Invalid input!", () => {
      expect(() => flowerShop.sellFlowers(["a", "b", "c"], 5)).to.throw("Invalid input!");
    });
    it("should throw Invalid input!", () => {
      expect(() => flowerShop.sellFlowers("abc", 1)).to.throw("Invalid input!");
    });
    it("should return the array without the removed flower", () => {
      expect(flowerShop.sellFlowers(["a", "b", "c"], 1)).to.equal("a / c");
    });
  });
});
