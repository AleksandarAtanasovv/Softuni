const { expect } = require("chai");
const rentCar = require("./rentCar");
describe("Tests …", function () {
  describe("searchCar", function () {
    it("should throw Invalid input!", function () {
      expect(() => rentCar.searchCar("abc", "a")).to.throw("Invalid input!");
    });
    it("should throw Invalid input!", function () {
      expect(() => rentCar.searchCar(["a", "b", "c"], 1)).to.throw("Invalid input!");
    });
    it("should throw Invalid input!", function () {
      expect(() => rentCar.searchCar(["a", "b", "c"], "d")).to.throw(
        "There are no such models in the catalog!"
      );
    });
    it("should return message", () => {
      expect(rentCar.searchCar(["a", "a", "b"], "a")).to.equal(
        "There is 2 car of model a in the catalog!"
      );
    });
  });
  describe("calculatePriceOfCar", () => {
    it("should throw Invalid input!", () => {
      expect(() => rentCar.calculatePriceOfCar(5, 5)).to.throw("Invalid input!");
    });
    it("should throw Invalid input!", () => {
      expect(() => rentCar.calculatePriceOfCar("BMW", "5")).to.throw("Invalid input!");
    });
    it("should return No such model in the catalog!", () => {
      expect(() => rentCar.calculatePriceOfCar("a", 5)).to.throw("No such model in the catalog!");
    });
    it("should return You choose ${model} and it will cost $${cost}!`;", () => {
      expect(rentCar.calculatePriceOfCar("BMW", 5)).to.equal(
        "You choose BMW and it will cost $225!"
      );
    });
  });
  describe("checkBudget", () => {
    it("should throw Invalid input", () => {
      expect(() => rentCar.checkBudget("5", 5, 5)).to.throw("Invalid input!");
    });
    it("should throw Invalid input", () => {
      expect(() => rentCar.checkBudget(5, "5", 5)).to.throw("Invalid input!");
    });
    it("should throw Invalid input", () => {
      expect(() => rentCar.checkBudget(5, 5, "5")).to.throw("Invalid input!");
    });
    it("should return you need a bigger budget", () => {
      expect(rentCar.checkBudget(1, 2, 1)).to.equal("You need a bigger budget!");
    });
    it("should return you need a bigger budget", () => {
      expect(rentCar.checkBudget(1, 2, 10)).to.equal("You rent a car!");
    });
    it("should return you need a bigger budget", () => {
      expect(rentCar.checkBudget(1, 1, 1)).to.equal("You rent a car!");
    });
  });
});
