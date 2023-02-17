const { expect } = require("chai");
const library = require("./library");

describe("Tests", () => {
  describe("calcPriceOfBook", () => {
    it("should throw err", () => {
      expect(() => library.calcPriceOfBook(5, 5)).to.throw("Invalid input");
    });
    it("should throw err", () => {
      expect(() => library.calcPriceOfBook("a", "1")).to.throw("Invalid input");
    });

    it("should return 20", () => {
      expect(library.calcPriceOfBook("a", 2000)).to.equal("Price of a is 20.00");
    });
    it("should return 10", () => {
      expect(library.calcPriceOfBook("a", 1980)).to.equal("Price of a is 10.00");
    });
    it("should return 10", () => {
      expect(library.calcPriceOfBook("a", 1)).to.equal("Price of a is 10.00");
    });
  });
  describe("calcPriceOfBook", () => {
    it("should No books currently available", () => {
      expect(() => library.findBook([], "a")).to.throw("No books currently available");
    });
    it("should return we found your book", () => {
      expect(library.findBook(["a", "b", "c"], "a")).to.equal("We found the book you want.");
    });
    it("should return The book you are looking for is not here!", () => {
      expect(library.findBook(["a", "b", "c"], "d")).to.equal(
        "The book you are looking for is not here!"
      );
    });
  });
  describe("arrangeTheBooks", () => {
    it("should throw Invalid input", () => {
      expect(() => library.arrangeTheBooks("1")).to.throw("Invalid input");
    });
    it("should throw Invalid input", () => {
      expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
    });
    it("should return Great job, the books are arranged.", () => {
      expect(library.arrangeTheBooks(5)).to.equal("Great job, the books are arranged.");
    });
    it("should return Great job, the books are arranged.", () => {
      expect(library.arrangeTheBooks(52)).to.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
    it("should return Great job, the books are arranged.", () => {
      expect(library.arrangeTheBooks(41)).to.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
    it("should return Great job, the books are arranged.", () => {
      expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
    });
  });
});
