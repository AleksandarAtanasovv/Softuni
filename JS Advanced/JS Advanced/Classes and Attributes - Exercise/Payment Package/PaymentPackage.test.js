const { expect } = require("chai");
const PaymentPackage = require("./PaymentPackage");

describe("PaymentPackage", () => {
  describe("tests for the name", () => {
    it("should be able to be instantiated with two parameters - a string name and number value", () => {
      const instance = new PaymentPackage("name", 100);
      expect(instance._name).to.equal("name");
      expect(instance._value).to.equal(100);
      expect(instance._VAT).to.equal(20);
      expect(instance._active).to.equal(true);
    });
    it("should throw an error for an invalid name", () => {
      expect(() => new PaymentPackage(111, 222)).to.throw("Name must be a non-empty string");
    });
    it("should throw an error for an invalid name", () => {
      expect(() => new PaymentPackage(["asd"], 222)).to.throw("Name must be a non-empty string");
    });
    it("should throw an error for an invalid name", () => {
      expect(() => new PaymentPackage("", 222)).to.throw("Name must be a non-empty string");
    });
    it("should not throw an error for an invalid name", () => {
      expect(() => new PaymentPackage("gosho", 19)).not.to.throw("Name must be a non-empty string");
    });
  });
  describe("tests for the value", () => {
    it("Should throw errow when the new Value is a string", () => {
      expect(() => new PaymentPackage("abc", "abc")).to.throw(
        "Value must be a non-negative number"
      );
    });
    it("Should throw errow when the new Value is a negative number", () => {
      expect(() => new PaymentPackage("abc", -11)).to.throw("Value must be a non-negative number");
    });
    it("Should throw errow when the new Value is an array number", () => {
      expect(() => new PaymentPackage("abc", [-1])).to.throw("Value must be a non-negative number");
    });
    it("Should not throw error when the input is good", () => {
      expect(() => new PaymentPackage("abc", 1)).not.to.throw(
        "Value must be a non-negative number"
      );
    });
    it("Should not throw error when the value is set to 0", () => {
      const instance = new PaymentPackage("name", 100);
      expect(() => (instance.value = 0)).not.to.throw("Value must be a non-negative number");
    });
  });
  describe("tests for the VAT", () => {
    const testInstance = new PaymentPackage("Name", 100);
    it("Should throw error when the new VAT is a string", () => {
      expect(() => (testInstance.VAT = "111")).to.throw("VAT must be a non-negative number");
    });
    it("Should throw error when the new VAT is an array", () => {
      expect(() => (testInstance.VAT = ["111"])).to.throw("VAT must be a non-negative number");
    });
    it("Should throw error when the new VAT is an array", () => {
      expect(() => (testInstance.VAT = -111)).to.throw("VAT must be a non-negative number");
    });
    it("Should not throw error when the input is good", () => {
      expect(() => (testInstance.VAT = 123)).not.to.throw("VAT must be a non-negative number");
    });
  });
  describe("Tests for the active", () => {
    const testInstance = new PaymentPackage("Name", 100);
    it("should throw error when the new active is a string", () => {
      expect(() => (testInstance.active = "abc")).to.throw("Active status must be a boolean");
    });
    it("should throw error when the new active is a string", () => {
      expect(() => (testInstance.active = 1)).to.throw("Active status must be a boolean");
    });
    it("should throw error when the new active is a string", () => {
      expect(() => (testInstance.active = [1])).to.throw("Active status must be a boolean");
    });
    it("should throw error when the new active is a string", () => {
      expect(() => (testInstance.active = [-1])).to.throw("Active status must be a boolean");
    });
    it("should not throw error when the new active is a string", () => {
      expect(() => (testInstance.active = true)).not.to.throw("Active status must be a boolean");
    });
  });
  describe("Tests for toString Method", () => {
    it("Should return a string as all the input is correct - 1", () => {
      const testClass = new PaymentPackage("abc", 123);
      let output = [`Package: abc`, `- Value (excl. VAT): 123`, `- Value (VAT 20%): 147.6`];
      expect(testClass.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 2", () => {
      let testClass = new PaymentPackage("abc", 123);
      testClass.VAT = 30;
      let output = [`Package: abc`, `- Value (excl. VAT): 123`, `- Value (VAT 30%): 159.9`];
      expect(testClass.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 3", () => {
      let testClass = new PaymentPackage("abc", 123);
      testClass.active = false;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];
      expect(testClass.toString()).to.equal(output.join("\n"));
    });

    it("Should return a string as all the input is correct - 4", () => {
      let testClass = new PaymentPackage("abc", 123);
      testClass.VAT = 30;
      testClass.active = false;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];
      expect(testClass.toString()).to.equal(output.join("\n"));
    });
  });
});
