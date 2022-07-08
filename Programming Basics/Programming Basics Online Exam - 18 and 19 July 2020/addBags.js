function addBags(input){
    let priceAbove20Kg = Number(input[0]);
    let luggageKg = Number(input[1]);
    let daysUntilTrip = Number(input[2]);
    let luggageCount = Number(input[3]);
    let totalPrice = 0;
    if(luggageKg < 10){
        totalPrice = (priceAbove20Kg * 20/100)
    }else if(luggageKg >= 10 && luggageKg <= 20){
        totalPrice = priceAbove20Kg * 50/100
    }else{
        totalPrice = priceAbove20Kg
    }
    if(daysUntilTrip > 30){
        totalPrice += totalPrice * 10/100
    }else if(daysUntilTrip >= 7 && daysUntilTrip <= 30 ){
        totalPrice += totalPrice * 15/100
    }else{
        totalPrice += totalPrice * 40/100
    }
    totalPrice = totalPrice * luggageCount
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
}
addBags(["30",
"18",
"15",
"2"])