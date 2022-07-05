function fitnessCard(input){
    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let totalPrice = 0;

    switch(sport){
        case "Gym":
            if(gender === 'm'){
                totalPrice = 42;
            }else{
                totalPrice = 35;
            }
            break;
        case "Boxing":
            if(gender === 'm'){
                totalPrice = 41;
            }else{
                totalPrice = 37;
            }
            break;
        case "Yoga":
            if(gender === 'm'){
                totalPrice = 45;
            }else{
                totalPrice = 42;
            }
            break;
        case "Zumba":
            if(gender === 'm'){
                totalPrice = 34;
            }else{
                totalPrice = 31;
            }
            break;
        case "Dances":
            if(gender === 'm'){
                totalPrice = 51;
            }else{
                totalPrice = 53;
            }
            break;
        case "Pilates":
            if(gender === 'm'){
                totalPrice = 39;
            }else{
                totalPrice = 37;
            }
            break;
    }
    if(age <= 19){
        totalPrice -= totalPrice * 20/100;
    }
    let diff = Math.abs(totalPrice - budget);

    if(totalPrice <= budget){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else{
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
}
fitnessCard(["10",
"m",
"50",
"Pilates"])

