const { expect } = require("chai");
const carService = require("./carService");

describe("Tests …", function () {
  describe("isItExpensive", function () {
    it("it should return The issue with the car is more severe and it will cost more money", () => {
      expect(carService.isItExpensive("Engine")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });
    it("it should return The issue with the car is more severe and it will cost more money", () => {
      expect(carService.isItExpensive("Transmission")).to.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });
    it("should return The overall price will be a bit cheaper", () => {
      expect(carService.isItExpensive("Headlight")).to.equal(
        "The overall price will be a bit cheaper"
      );
    });
  });

  describe("discount", () => {
    it("should return Invalid input", () => {
      expect(() => carService.discount("5", 20)).to.throw("Invalid input");
    });
    it("should return Invalid input", () => {
      expect(() => carService.discount(20, "4")).to.throw("Invalid input");
    });
    it("should return You cannot apply a discount", () => {
      expect(carService.discount(2, 20)).to.equal("You cannot apply a discount");
    });
    it("should return Discount applied!", () => {
      expect(carService.discount(5, 20)).to.equal("Discount applied! You saved 3$");
    });
    it("should return Discount applied!", () => {
      expect(carService.discount(7, 20)).to.equal("Discount applied! You saved 3$");
    });
    it("should return Discount applied!", () => {
      expect(carService.discount(8, 20)).to.equal("Discount applied! You saved 6$");
    });
  });
  describe("partsToBuy", () => {
    it("should throw Invalid input", () => {
      expect(() =>
        carService
          .partsToBuy("{part:blowoff valve}", [{ part: "blowoff valve", price: 145 }])
          .to.throw("Invalid input")
      );
    });
    it("should throw Invalid input", () => {
      expect(() =>
        carService
          .partsToBuy([{ part: "blowoff valve", price: 145 }], "{part:blowoff valve}")
          .to.throw("Invalid input")
      );
    });
    it("should return 0 if the parts catalog is empty", () => {
      expect(carService.partsToBuy([], [{ a: 1 }])).to.equal(0);
    });
    it("should return 1", () => {
      expect(carService.partsToBuy([{ part: "a", price: 1 }], ["a"])).to.equal(1);
    });
    it("should return 10", () => {
      expect(carService.partsToBuy([{ part: "a", price: 10 }], ["a"])).to.equal(10);
    });
  });
});
