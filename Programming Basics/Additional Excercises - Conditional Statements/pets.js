function pets(input){
    let amountOfDays = Number(input[0]);
    let leftFoodInKgs = Number(input[1]);
    let foodForTheDogPerDay = Number(input[2]);
    let foodForTheCatPerDay = Number(input[3]);
    let foodForTheTurtlePerDay = Number(input[4]);


    let foodNeededForTheDog = amountOfDays * foodForTheDogPerDay;
    let foodNeededForTheCat = amountOfDays * foodForTheCatPerDay;
    let foodNeededForTheTurtle = amountOfDays * foodForTheTurtlePerDay / 1000;
    let totalFoodNeeded = foodNeededForTheDog + foodNeededForTheCat + foodNeededForTheTurtle;

    let foodLeft = leftFoodInKgs - totalFoodNeeded;
    
    let foodNeeded = totalFoodNeeded - leftFoodInKgs;
    
    if(leftFoodInKgs >= totalFoodNeeded){
    console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    }
    else if(leftFoodInKgs < totalFoodNeeded){
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }
}
pets(["2",
    "10",
    "1",
    "1",
    "1200"
    ])
pets([
    "5",
    "10",
    "2.1",
    "0.8",
    "321"
    ])