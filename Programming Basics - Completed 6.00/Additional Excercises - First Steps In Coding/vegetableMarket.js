function vegetableMarket(input){
    let priceForKgVegetables = Number(input[0])
    let priceForKgFruits = Number(input[1])
    let kgSumOfVegetables = Number(input[2])
    let kgSumOfFruits = Number(input[3])
    

    let fruitPrice = priceForKgFruits * kgSumOfFruits;
    let vegetablePrice = priceForKgVegetables * kgSumOfVegetables;

    let totalPrice = fruitPrice + vegetablePrice;

    let eur = totalPrice / 1.94;

    console.log(eur.toFixed(2));

}
vegetableMarket(["0.194",
    "19.4",
    "10",
    "10"
    ])