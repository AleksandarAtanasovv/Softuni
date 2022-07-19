function matchTickets(input){
    let budget = Number(input[0]);
    let typeOfTicket = input[1];
    let amountOfPeople = Number(input[2]);
    let price = 0;
    switch(typeOfTicket){
        case "VIP":
            price = 499.99
            break;
        case "Normal":
            price = 249.99
            break;
            default: console.log("Error");break;
    }
    if(amountOfPeople >= 1 && amountOfPeople <= 4){
        budget = budget - (budget* 75/100);
    }else if(amountOfPeople >= 5 && amountOfPeople <= 9){
        budget = budget - (budget* 60/100);
    }else if(amountOfPeople >= 10 && amountOfPeople <= 24){
        budget -= (budget * 50/100);
    }else if(amountOfPeople >= 25 && amountOfPeople <= 49){
        budget -=(budget * 40/100)
    }else if(amountOfPeople >= 50){
        budget -=(budget * 25/100)
    }
    let finalPrice = price * amountOfPeople;
    let diff = Math.abs(budget - finalPrice);
    if(budget >= finalPrice){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
matchTickets(["1000",
"Normal",
"1"
])