function movieDestination(input){
    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let dayCount = Number(input[3]);

    if(season == "Winter" && destination =="Sofia"){
        let totalPrice = dayCount * 17000;
        let totalPriceAfterPriceUp = totalPrice +(totalPrice * 25 / 100);
        
        
        let moneyLeft = movieBudget - totalPriceAfterPriceUp;
        let MoneyNeeded = totalPriceAfterPriceUp - movieBudget;
        

        if(totalPriceAfterPriceUp > movieBudget){
            console.log(`The director needs ${MoneyNeeded.toFixed(2)} leva more!`);
        }
        else{
            console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
        }
    }


    else if(season == "Summer" && destination =="Sofia"){
        let totalPrice = dayCount * 12500;
        let totalPriceAfterPriceUp = totalPrice +(totalPrice * 25 / 100);
        let moneyLeft = movieBudget - totalPriceAfterPriceUp;
        let MoneyNeeded = totalPriceAfterPriceUp - movieBudget;
        
        
        if(totalPriceAfterPriceUp > movieBudget){
            console.log(`The director needs ${MoneyNeeded.toFixed(2)} leva more!`);
        }
        else{
            console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
        }
    }



    
    else if(season == "Winter" && destination =="Dubai"){
        let totalPrice = dayCount * 45000;
        let totalPriceAfterPriceUp = totalPrice -(totalPrice * 30 / 100);
        let moneyLeft = movieBudget - totalPriceAfterPriceUp;
        let MoneyNeeded = totalPriceAfterPriceUp - movieBudget;
        
        
        

        if(totalPriceAfterPriceUp > movieBudget){
            console.log(`The director needs ${MoneyNeeded.toFixed(2)} leva more!`);
        }
        else{
            console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
        }
    }
    else if(season == "Summer" && destination =="Dubai"){
        let totalPrice = dayCount * 40000;
        let totalPriceAfterPriceUp = totalPrice -(totalPrice * 30 / 100);
        let moneyLeft = movieBudget - totalPriceAfterPriceUp;
        let MoneyNeeded = totalPriceAfterPriceUp - movieBudget;
        
        
        

        if(totalPriceAfterPriceUp > movieBudget){
            console.log(`The director needs ${MoneyNeeded.toFixed(2)} leva more!`);
        }
        else{
            console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
        }
    }
    else if(season == "Winter" && destination =="London"){
        let totalPrice = dayCount * 24000;
        
        let moneyLeft = movieBudget - totalPrice;
        let MoneyNeeded = totalPrice - movieBudget;
        
        
        

        if(totalPrice > movieBudget){
            console.log(`The director needs ${MoneyNeeded.toFixed(2)} leva more!`);
        }
        else{
            console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
        }
    }
    else if(season == "Summer" && destination =="London"){
        let totalPrice = dayCount * 20250;
        
        let moneyLeft = movieBudget - totalPrice;
        let MoneyNeeded = totalPrice - movieBudget;
        
        
        

        if(totalPrice > movieBudget){
            console.log(`The director needs ${MoneyNeeded.toFixed(2)} leva more!`);
        }
        else{
            console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
        }
    }
   
}
movieDestination(["400000",
"Sofia",
"Winter",
"20"]);
movieDestination(["1000000",
"Dubai",
"Summer",
"5"]);
movieDestination(["100000",
"London",
"Summer",
"5"])
