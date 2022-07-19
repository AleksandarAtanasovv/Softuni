function easterParty(input){
    let amountOfGuests = Number(input[0]);
    let pricePerCover = Number(input[1]);
    let budget = Number(input[2]);
    
    if(amountOfGuests >= 10 && amountOfGuests <= 15 ){
        pricePerCover -=  (pricePerCover * 15/100);
    }else if(amountOfGuests >= 15 && amountOfGuests <= 20){
        pricePerCover -=  (pricePerCover * 20/100);
    }else if(amountOfGuests > 20){
        pricePerCover -= (pricePerCover * 25/100);
    }
    let totalPrice = amountOfGuests * pricePerCover;
    let cakePrice = budget * 10/100
    totalPrice += cakePrice
    let diff = Math.abs(totalPrice - budget); 
    if(budget >= totalPrice){
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}
easterParty(["18",
"30",
"450"])
