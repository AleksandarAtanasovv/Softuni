function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMen = Number(input[2]);
    let priceOfShip = 0;


    switch(season){
        case "Spring":
            priceOfShip = 3000;
            break;
        case "Summer":
        case "Autumn":
            priceOfShip = 4200;
            break;
        case "Winter":
            priceOfShip = 2600;
            break;
    }
    if(fisherMen <= 6){
        priceOfShip = priceOfShip -(priceOfShip * 10/100);
    }else if(fisherMen >= 7 && fisherMen <= 11){
        priceOfShip = priceOfShip - (priceOfShip * 15 / 100);
    }else if(fisherMen >= 12){
        priceOfShip = priceOfShip - (priceOfShip * 25/100 );
    }if (fisherMen % 2 === 0 && season !== "Autumn"){
        priceOfShip = priceOfShip - (priceOfShip * 5/100);
    }
    let diff = Math.abs(priceOfShip - budget);

    if(budget >= priceOfShip){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3600",
"Autumn",
"6"])




