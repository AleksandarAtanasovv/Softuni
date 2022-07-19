function foodForPets(input){
    let index = 0;
    let amountOfDays = Number(input[index]);
    index++
    let totalAmountOfFood = Number(input[index]);
    index++
    let amountOfFoodForDog = 0;
    let amountOfFoodForCat = 0;
    let sumDog = 0;
    let sumCat = 0;
    let biscuitsGr = 0;
    let totalEatenFood = sumDog + sumCat;
    for(let i = 1; i <= amountOfDays; i++){
        amountOfFoodForDog = Number(input[index])
        sumDog += amountOfFoodForDog
        index++
        amountOfFoodForCat = Number(input[index])
        sumCat += amountOfFoodForCat;
        index++


        if(i % 3 === 0){
            biscuitsGr = biscuitsGr + ((amountOfFoodForDog + amountOfFoodForCat )* 0.10)
        }   
    }
    totalEatenFood = sumDog + sumCat;
    let totalDog = (sumDog / totalEatenFood)* 100
    let totalCat = (sumCat / totalEatenFood)* 100
    let totalFood = (totalEatenFood / totalAmountOfFood)* 100
    console.log(`Total eaten biscuits: ${Math.round(biscuitsGr)}gr.`);
    console.log(`${totalFood.toFixed(2)}% of the food has been eaten.`) ;
    console.log(`${totalDog.toFixed(2)}% eaten from the dog.`) ;
    console.log(`${totalCat.toFixed(2)}% eaten from the cat.`) ;
}
foodForPets(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])

