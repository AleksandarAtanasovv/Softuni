class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }
  reserveABottle(wineName, wineType, price) {
    if (this.space > 0) {
      this.wines.push({
        wineName,
        wineType,
        price,
        paid: false,
      });
      this.space -= 1;
      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    } else {
      throw new Error('Not enough space in the cellar.');
    }
  }
  payWineBottle(wineName, price) {
    const wine = this.wines.find((w) => w.wineName === wineName);
    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (wine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }
    wine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }
  openBottle(wineName) {
    const wine = this.wines.find((w) => w.wineName === wineName);
    if (!wine) {
      throw new Error(`The wine, you're looking for, is not found.`);
    }
    if (!wine.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    const index = this.wines.indexOf(wine);
    this.wines.splice(index, 1);
    return `You drank a bottle of ${wineName}.`;
  }
  cellarRevision(wineType) {
    const resArr = [];
    if (!wineType) {
      resArr.push(`You have space for ${this.space} bottles more.`);
      resArr.push(`You paid ${this.bill}$ for the wine.`);
      this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
      this.wines.forEach((wine) => {
        resArr.push(
          `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`
        );
      });
      return resArr.join("\n");
    } else {
      const wine = this.wines.find((w) => w.wineType === wineType);
      if (!wine) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
      return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`;
    }
  }
}
const selection = new WineSelection(2);
console.log(selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50));
console.log(selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120));
console.log(selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144));
