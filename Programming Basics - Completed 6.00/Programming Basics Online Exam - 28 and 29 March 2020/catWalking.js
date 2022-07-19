function catWalking(input){
    let minutesPerDay = Number(input[0]);
    let amountOfWalks = Number(input[1]);
    let amountOfCaloriesEaten = Number(input[2]);

    let totalMinutesPerDay = amountOfWalks * minutesPerDay;
    let totalCaloriesBurnt = totalMinutesPerDay * 5;

    let diff = amountOfCaloriesEaten / 2;

    if(totalCaloriesBurnt >= diff){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurnt}.`);
    }else if(totalCaloriesBurnt < diff){
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurnt}.`);
    }
}
catWalking(["15", "2", "500" ])