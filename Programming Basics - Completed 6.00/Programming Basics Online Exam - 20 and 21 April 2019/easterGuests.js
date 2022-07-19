function easterGuests(input){
    let amountOfGuests = Number(input[0]);
    let budget = Number(input[1]);

    let amountOfEasterBreads = Math.ceil(amountOfGuests / 3);
    let easterBreadPrice = amountOfEasterBreads * 4;

    let amountOfEggs = amountOfGuests * 2;
    let eggsPrice = amountOfEggs * 0.45;
    let totalPrice = eggsPrice + easterBreadPrice;

    let diff = Math.abs(totalPrice - budget);

    if(budget >= totalPrice){
        console.log(`Lyubo bought ${amountOfEasterBreads} Easter bread and ${amountOfEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    }else{
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
easterGuests(["10",
"35"])
