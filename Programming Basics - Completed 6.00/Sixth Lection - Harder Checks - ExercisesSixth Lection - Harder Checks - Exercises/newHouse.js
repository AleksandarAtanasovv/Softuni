function newHouse(input) {
    //Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus
    let typeOfPlant = input[0];
    let amountOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let sum =0;

    switch(typeOfPlant){
        case "Roses":
            sum = amountOfFlowers * 5.00;
            if(amountOfFlowers > 80){
                sum = sum * 0.90;
            }
        break;
        case "Dahlias":
            sum = amountOfFlowers * 3.80;
            if(amountOfFlowers > 90){
                sum = sum * 0.85;
            }
        break;
        case "Tulips":
            sum = amountOfFlowers * 2.80;
            if(amountOfFlowers > 80){
                sum = sum * 0.85;
            }    
        break;
        case "Narcissus":
            sum = amountOfFlowers * 3.00;
            if(amountOfFlowers < 120){
                sum = sum * 1.15;
            }    
        break;
        case "Gladiolus":
            sum = amountOfFlowers * 2.50;
            if(amountOfFlowers < 80){
                sum = sum * 1.20;
            }    
        break;
    }
    let diff = Math.abs(sum - budget);
    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${amountOfFlowers} ${typeOfPlant} and ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
    
}
newHouse(["Narcissus",
"119",
"360"])

