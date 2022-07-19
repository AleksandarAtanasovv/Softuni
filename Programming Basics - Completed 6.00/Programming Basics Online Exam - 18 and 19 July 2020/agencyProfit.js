function agencyProfit(input){
    let nameOfCompany = input[0];
    let amountOfTicketsAdults = Number(input[1]);
    let amountOfTicketsChildren = Number(input[2]);
    let netMoneyAdult = Number(input[3]);
    let tax = Number(input[4]);
    let totalMoney = 0;
    let totalMoneyWon = 0;

    let adultTicketsPrice = (tax + netMoneyAdult) * amountOfTicketsAdults  ;
    let childrenTicket = netMoneyAdult - (netMoneyAdult * 0.70);
    let childrenTicketsPrice = (tax +  childrenTicket) * amountOfTicketsChildren;
    totalMoney = (adultTicketsPrice + childrenTicketsPrice);
    totalMoneyWon = totalMoney * 0.20
    console.log(`The profit of your agency from ${nameOfCompany} tickets is ${totalMoneyWon.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
