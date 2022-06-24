function toyShop(input){
    let priceForTheHoliday = Number(input[0]);
    let amountOfPuzzles = Number(input[1]);
    let amountOfSpeakingDolls = Number(input[2]);
    let amountOfToyBears = Number(input[3]);
    let amountOfMinions = Number(input[4]);
    let amountOfToyTrucks = Number(input[5]);

    let sum =  amountOfPuzzles* 2.60 +   amountOfSpeakingDolls *  3 + amountOfToyBears * 4.10 + amountOfMinions * 8.20 + amountOfToyTrucks * 2;
    
    let amountOfToys = amountOfPuzzles + amountOfSpeakingDolls + amountOfToyBears + amountOfMinions + amountOfToyTrucks;
    if(amountOfToys >= 50){
        sum = sum -(sum*25/100);
    }
    let total = sum - (sum * 10 /100)
    let diff = Math.abs(priceForTheHoliday - total);
    if (total >= priceForTheHoliday){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
    
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

