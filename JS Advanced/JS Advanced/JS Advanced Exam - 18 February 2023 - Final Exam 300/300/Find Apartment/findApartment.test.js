const { expect } = require("chai");
const findNewApartment = require("./findApartment");

describe("Tests", () => {
  describe("first function", () => {
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isGoodLocation(5, true)).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isGoodLocation("Plovdiv", 5)).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isGoodLocation("Plovdiv", "true")).to.throw("Invalid input!");
    });
    it("should return this location is not suitable", () => {
      expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal(
        "This location is not suitable for you."
      );
    });
    it("should return There is no public transport in area.", () => {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("should return You can go on home tour!", () => {
      expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
    });
  });
  describe("second function", () => {
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isLargeEnough("abc", "5")).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isLargeEnough([], 5)).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isLargeEnough(["a", "b", "c"], "5")).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isLargeEnough([1, 2, 3], "5")).to.throw("Invalid input!");
    });
    it("should return the changed array", () => {
      expect(findNewApartment.isLargeEnough([1, 2, 3], 2)).to.equal("2, 3");
    });
    it("should return the changed array", () => {
      expect(findNewApartment.isLargeEnough([1, 2, 3], 5)).to.equal("");
    });
  });
  describe("third function", () => {
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isItAffordable("5", "5")).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isItAffordable(5, -5)).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isItAffordable(-5, 5)).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isItAffordable("5", 5)).to.throw("Invalid input!");
    });
    it("should return throw invalid input", () => {
      expect(() => findNewApartment.isItAffordable(5, "5")).to.throw("Invalid input!");
    });
    it("should return you dont have enough money for this house", () => {
      expect(findNewApartment.isItAffordable(10, 2)).to.equal(
        "You don't have enough money for this house!"
      );
    });
    it("should return You can afford this home!", () => {
      expect(findNewApartment.isItAffordable(2, 2)).to.equal("You can afford this home!");
    });
    it("should return You can afford this home!", () => {
      expect(findNewApartment.isItAffordable(1, 2)).to.equal("You can afford this home!");
    });
  });
});
