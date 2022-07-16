function maidenParty(input){
    let girlsPartyPrice = Number(input[0]);
    let amountOfLoveLetters = Number(input[1]);
    let amountOfRoses = Number(input[2]);
    let amountOfKeyHolders = Number(input[3]);
    let amountOfFigures = Number(input[4]);
    let amountOfSurprises = Number(input[5]);



    let loveLettersPrice = amountOfLoveLetters * 0.60;
    let rosesPrice = amountOfRoses * 7.20;
    let keyHolderPrice = amountOfKeyHolders * 3.60;
    let figurePrice = amountOfFigures * 18.20;
    let surprisePrice = amountOfSurprises * 22;
    let discount = 0;
    let totalOrdered = amountOfLoveLetters + amountOfFigures + amountOfRoses + amountOfKeyHolders + amountOfSurprises;
    
    let ShopTotal = loveLettersPrice + rosesPrice + keyHolderPrice + figurePrice + surprisePrice;
    
    if(totalOrdered >= 25){
        discount = ShopTotal - (ShopTotal * 0.65);
        
        ShopTotal = ShopTotal - discount
    }
    ShopTotal = ShopTotal - (ShopTotal * 10/100)
    
    let diff = Math.abs(ShopTotal - girlsPartyPrice);
    if(ShopTotal >= girlsPartyPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

   
}
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])

