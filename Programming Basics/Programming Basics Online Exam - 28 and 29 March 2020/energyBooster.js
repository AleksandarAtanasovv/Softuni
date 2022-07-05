function energyBooster(input){
    let typeOfFruit = input[0];
    let size = input[1];
    let amountOfSets = Number(input[2]);

    let typeOfPack = '';
    let finalPrice = 0;
    let amountOfDrinks = 0;

    switch(typeOfFruit){
        case "Watermelon":
            if(size === 'big'){
                typeOfPack = 'big';
                amountOfDrinks = 5;
                finalPrice = amountOfDrinks * 28.70;
            }else{
                typeOfPack = 'small';
                amountOfDrinks = 2;
                finalPrice = amountOfDrinks * 56;
            }
            break;
        case "Mango":
            if(size === 'big'){
                typeOfPack = 'big';
                amountOfDrinks = 5;
                finalPrice = amountOfDrinks * 19.60;
            }else{
                typeOfPack = 'small';
                amountOfDrinks = 2;
                finalPrice = amountOfDrinks * 36.66;
            }
            break;
        case "Pineapple":
            if(size === 'big'){
                typeOfPack = 'big';
                amountOfDrinks = 5;
                finalPrice = amountOfDrinks * 24.80;
            }else{
                typeOfPack = 'small';
                amountOfDrinks = 2;
                finalPrice = amountOfDrinks * 42.10;
            }
            break;
        case "Raspberry":
            if(size === 'big'){
                typeOfPack = 'big';
                amountOfDrinks = 5;
                finalPrice = amountOfDrinks * 15.20;
            }else{
                typeOfPack = 'small';
                amountOfDrinks = 2;
                finalPrice = amountOfDrinks * 20;
            }
            break;
    }
    finalPrice = finalPrice * amountOfSets
    if(finalPrice >= 400 && finalPrice <= 1000){
        finalPrice -= finalPrice * 15/100;
    }
    if(finalPrice > 1000){
        finalPrice -= finalPrice / 2;
    }
    
    console.log(`${finalPrice.toFixed(2)} lv.`);
}
energyBooster(["Pineapple",
"small",
"1"])

