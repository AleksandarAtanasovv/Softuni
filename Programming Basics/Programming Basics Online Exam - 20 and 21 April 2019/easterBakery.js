function easterBakery(input){
    let flourPricePerKg = Number(input[0]);
    let flourKgs = Number(input[1]);
    let sugar = Number(input[2]);
    let amountOfEggCarts = Number(input[3]);
    let packsOfYeast = Number(input[4]);

    let totalFlourPrice = flourPricePerKg * flourKgs;
    let sugarPrice = flourPricePerKg - (flourPricePerKg * 25/100);
    let totalSugarPrice = sugarPrice * sugar;
    let pricePerEggCart = flourPricePerKg + (flourPricePerKg * 10/100);
    let totalEggPrice = pricePerEggCart * amountOfEggCarts;
    let yeastPrice = sugarPrice - (sugarPrice * 80/100)
    let totalYeastPacks = packsOfYeast * yeastPrice

    let totalPrice = totalFlourPrice + totalSugarPrice + totalEggPrice + totalYeastPacks
    console.log(totalPrice.toFixed(2)); 
}
easterBakery(["50",
"10",
"3.5",
"6",
"1"])
