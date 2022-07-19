function easterTrip(input){
    let destination = input[0];
    let dates = input[1];
    let amountOfNights = Number(input[2]);
    let moneyPerNight = 0;
    let totalMoney = 0;
    switch(destination){
        case "France":
        if(dates === '21-23'){
            moneyPerNight += 30;
        }else if(dates === '24-27'){
            moneyPerNight += 35;
        }else if(dates === '28-31'){
            moneyPerNight += 40;
        }
        break;
        case "Italy":
        if(dates === '21-23'){
            moneyPerNight += 28;
        }else if(dates === '24-27'){
            moneyPerNight += 32;
        }else if(dates === '28-31'){
            moneyPerNight += 39;
        }
        break;
        case "Germany":
        if(dates === '21-23'){
            moneyPerNight += 32;
        }else if(dates === '24-27'){
            moneyPerNight += 37;
        }else if(dates === '28-31'){
            moneyPerNight += 43;
        }
    }
    totalMoney = moneyPerNight * amountOfNights;
    console.log(`Easter trip to ${destination} : ${totalMoney.toFixed(2)} leva.`);
}
easterTrip(["France",
"28-31",
"8"])
