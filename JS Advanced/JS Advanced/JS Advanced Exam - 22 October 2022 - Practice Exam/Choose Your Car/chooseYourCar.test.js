const { expect, should } = require("chai");
const chooseYourCar = require("./chooseYourCar");

describe("Testing the choose your car object", function () {
  describe("Choosing type method", () => {
    it("should return for the year 1888 Invalid Year!", () => {
      expect(() => chooseYourCar.choosingType("Sedan", "Red", 1888)).to.throw("Invalid Year!");
    });
    it("should return for the year 2023 Invalid Year!", () => {
      expect(() => chooseYourCar.choosingType("Sedan", "Red", 2023)).to.throw("Invalid Year!");
    });
    it("should return This type of car is not what you are looking for if the type is different from sedan", () => {
      expect(() => chooseYourCar.choosingType("Kombi", "Red", 2019)).to.throw(
        "This type of car is not what you are looking for."
      );
    });
    it("should return a string for the right year and type", () => {
      expect(chooseYourCar.choosingType("Sedan", "Red", 2011)).to.equal(
        "This Red Sedan meets the requirements, that you have."
      );
    });
    it("should return a string for the wrong year and type", () => {
      expect(chooseYourCar.choosingType("Sedan", "Red", 2010)).to.equal(
        "This Red Sedan meets the requirements, that you have."
      );
    });
  });
  describe("Brand Name Method", () => {
    it("should return invalid information", () => {
      expect(() => chooseYourCar.brandName("BMW", 1)).to.throw("Invalid Information!");
    });
    it("should return invalid information", () => {
      expect(() => chooseYourCar.brandName(["BMW"], "a")).to.throw("Invalid Information!");
    });
    it("should return invalid information", () => {
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 5)).to.throw(
        "Invalid Information!"
      );
    });
    it("should return invalid information", () => {
      expect(() => chooseYourCar.brandName(["BMW"], -1)).to.throw("Invalid Information!");
    });
    it("should return invalid information", () => {
      expect(() => chooseYourCar.brandName(["BMW"], 1.1)).to.throw("Invalid Information!");
    });
    it("should return invalid information", () => {
      expect(() => chooseYourCar.brandName(["BMW"], 10)).to.throw("Invalid Information!");
    });
    it("should return the changed array", () => {
      expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal("BMW, Peugeot");
    });
  });
  describe("CarFuelConsumption Method", () => {
    it("should throw error if params are not numbers or are negative numbers", () => {
      expect(() => chooseYourCar.carFuelConsumption("two", "three")).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw error if params are not numbers or are negative numbers", () => {
      expect(() => chooseYourCar.carFuelConsumption(-123, -3232)).to.throw("Invalid Information!");
    });
    it("should throw error if params are not numbers or are negative numbers", () => {
      expect(() => chooseYourCar.carFuelConsumption("123", "1231")).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw error if params are not numbers or are negative numbers", () => {
      expect(() => chooseYourCar.carFuelConsumption(100, "222")).to.throw("Invalid Information!");
    });
    it("should throw error if params are not numbers or are negative numbers", () => {
      expect(() => chooseYourCar.carFuelConsumption("100", 100)).to.throw("Invalid Information!");
    });
    it("should throw error if params are not numbers or are negative numbers", () => {
      expect(() => chooseYourCar.carFuelConsumption("hundred", 100)).to.throw(
        "Invalid Information!"
      );
    });
    it("should return consumption", () => {
      expect(chooseYourCar.carFuelConsumption(100, 1)).to.equal(
        "The car is efficient enough, it burns 1.00 liters/100 km."
      );
    });
    it("should return consumption", () => {
      expect(chooseYourCar.carFuelConsumption(100, 100)).to.equal(
        "The car burns too much fuel - 100.00 liters!"
      );
    });
    it("should return consumption", () => {
      expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal(
        "The car burns too much fuel - 10.00 liters!"
      );
      expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal(
        "The car is efficient enough, it burns 6.00 liters/100 km."
      );
      expect(chooseYourCar.carFuelConsumption(50, 10)).to.equal(
        "The car burns too much fuel - 20.00 liters!"
      );
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(
        "The car is efficient enough, it burns 7.00 liters/100 km."
      );
    });
    it("should return consumption", () => {
      expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal(
        "The car burns too much fuel - 10.00 liters!"
      );
      expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal(
        "The car is efficient enough, it burns 6.00 liters/100 km."
      );
    });
    it("should return consumption", () => {
      expect(chooseYourCar.carFuelConsumption(50, 10)).to.equal(
        "The car burns too much fuel - 20.00 liters!"
      );
    });
    it("should return consumption", () => {
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(
        "The car is efficient enough, it burns 7.00 liters/100 km."
      );
    });
  });
});
