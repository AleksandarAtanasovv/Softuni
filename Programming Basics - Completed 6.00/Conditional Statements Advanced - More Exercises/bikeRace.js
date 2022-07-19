function bikeRace(input){
    let amountOfJuniors = Number(input[0]);
    let amountOfSeniors = Number(input[1]);
    let typeOfRace = input[2];
    let sum = 0;
    switch(typeOfRace){
        case "trail":
        sum = amountOfJuniors * 5.50 + amountOfSeniors * 7.00;
        break;
        case "cross-country":
            sum = amountOfJuniors * 8.00 + amountOfSeniors * 9.50;
            if((amountOfJuniors + amountOfJuniors) >= 50 ){
                sum -= (sum * 25/100)
            }
            break;
        case "downhill":
            sum = amountOfJuniors * 12.25 + amountOfSeniors * 13.75;
            break;
        case "road":
            sum = amountOfJuniors * 20.00 + amountOfSeniors * 21.50
    }

    sum -= (sum * 5/100);
    console.log(sum.toFixed(2));
}
bikeRace(["21", "26", "cross-country"])