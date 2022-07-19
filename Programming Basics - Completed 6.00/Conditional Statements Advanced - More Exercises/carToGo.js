function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    let typeOfCar = '';
    let finalPrice = 0;
    let classOfCar = '';
    switch(season){
        case "Summer":
            typeOfCar = "Cabrio";
            if(budget <= 100){
                classOfCar = 'Economy class'
                finalPrice = budget - budget * 0.65
            }else if(budget > 100 && budget <= 500){
                classOfCar = 'Compact class';
                finalPrice = budget - budget * 0.55
            }else if(budget > 500){
                classOfCar = 'Luxury class';
                typeOfCar = 'Jeep';
                finalPrice = budget - budget * 0.10
            }
            break;
        case "Winter":
            typeOfCar = "Jeep";
            if(budget <= 100){
                classOfCar = 'Economy class'
                finalPrice = budget - budget* 0.35;
            }else if(budget > 100 && budget <= 500){
                classOfCar = 'Compact class';
                finalPrice = budget - budget * 0.20;
            }else if(budget > 500){
                classOfCar = 'Luxury class';
                typeOfCar = 'Jeep';
                finalPrice = budget - budget * 0.10;
            }
            break;
    }
    console.log(`${classOfCar}`);
    console.log(`${typeOfCar} - ${finalPrice.toFixed(2)}`);
}
carToGo(["1010", "Summer"])