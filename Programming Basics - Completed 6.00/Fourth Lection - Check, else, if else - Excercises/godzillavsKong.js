function godzillavsKong(input){
    let budgetForTheMovie = Number(input[0]);
    let amountOfStatists = Number(input[1]);
    let priceForClothingPerStatis = Number(input[2]);
    
    
    let decor = budgetForTheMovie * 0.10;
   
    if(amountOfStatists > 150){
        priceForClothingPerStatis = priceForClothingPerStatis - (priceForClothingPerStatis * 0.10);
    }
    let priceForClothing = amountOfStatists * priceForClothingPerStatis;
    let money = decor + priceForClothing;
    let difference = Math.abs(budgetForTheMovie-money);


    if(money > budgetForTheMovie){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    }else if(money <= budgetForTheMovie){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }   

}
   

godzillavsKong(["20000",
"120",
"55.5"])

godzillavsKong(["15437.62",
"186",
"57.99"])
;
godzillavsKong(["9587.88",
"222",
"55.68"])







