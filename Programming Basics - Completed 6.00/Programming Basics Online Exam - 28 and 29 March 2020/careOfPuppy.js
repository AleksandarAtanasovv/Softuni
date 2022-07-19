function careOfPuppy(input){
    let index = 0;
    let boughtFoodInKgs = Number(input[index])
    index++
    let command = input[index];
    index++
    let totalSumOfFood = 0;
    let foodInGrams = boughtFoodInKgs * 1000;
    while(command !== 'Adopted'){
        let currentDayFood = Number(command);
        totalSumOfFood += currentDayFood;
        
        
        command = input[index];
        index++

    }
    
    let diff = Math.abs(totalSumOfFood - foodInGrams)
    if(totalSumOfFood <= foodInGrams){
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    }else{
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}
careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])
