function fuelTankPartTwo(input){
    let typeOfFuel = input[0];
    let amountOfFuel = Number(input[1]);
    let discountCard = input[2];

    if(typeOfFuel === "Gas" && amountOfFuel >= 20 && amountOfFuel <= 25 && discountCard === "Yes"){
        let PriceForGasWithDiscount = amountOfFuel * 0.85;
        let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 8/100);
        console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);
        
        
        }
        else if(typeOfFuel === "Gas" && amountOfFuel > 25  && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 0.85;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 10/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);              
        }
        else if(typeOfFuel === "Gas" && amountOfFuel < 25  && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 0.85;
            
            console.log(`${PriceForGasWithDiscount.toFixed(2)} lv.`);              
        }


        else if(typeOfFuel === "Gas" && amountOfFuel >= 20 && amountOfFuel <= 25 && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 0.93;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 8/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);
            
            
        }
        else if(typeOfFuel === "Gas" && amountOfFuel > 25  && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 0.93;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 10/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);              
        }
        else if(typeOfFuel === "Gas" && amountOfFuel < 20  && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 0.93;
            console.log(`${PriceForGasWithDiscount.toFixed(2)} lv.`);
            
            
        }



        if(typeOfFuel === "Gasoline" && amountOfFuel >= 20 && amountOfFuel <= 25 && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 2.04;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 8/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);
            
            
        }
        else if(typeOfFuel === "Gasoline" && amountOfFuel > 25  && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 2.04;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 10/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);              
        }
        else if(typeOfFuel === "Gasoline" && amountOfFuel > 25  && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 2.04;
            
            console.log(`${PriceForGasWithDiscount.toFixed(2)} lv.`);              
        }



        else if(typeOfFuel === "Gasoline" && amountOfFuel >= 20 && amountOfFuel <= 25 && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 2.22;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 8/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);
            
            
        }
        else if(typeOfFuel === "Gasoline" && amountOfFuel > 25  && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 2.22;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 10/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);              
        }
        else if(typeOfFuel === "Gasoline" && amountOfFuel < 20  && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 2.22;
            console.log(`${PriceForGasWithDiscount.toFixed(2)} lv.`);
            
            
        }



        else if(typeOfFuel === "Diesel" && amountOfFuel >= 20 && amountOfFuel <= 25 && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 2.21;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 8/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);
            
            
        }
        else if(typeOfFuel === "Diesel" && amountOfFuel > 25  && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 2.21;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 10/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);              
        }
        else if(typeOfFuel === "Diesel" && amountOfFuel < 25  && discountCard === "Yes"){
            let PriceForGasWithDiscount = amountOfFuel * 2.21;
            
            console.log(`${PriceForGasWithDiscount.toFixed(2)} lv.`);              
        }
        



        else if(typeOfFuel === "Diesel" && amountOfFuel >= 20 && amountOfFuel <= 25 && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 2.33;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 8/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);
            
            
        }
        else if(typeOfFuel === "Diesel" && amountOfFuel > 25  && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 2.33;
            let PriceForGasWithDiscountForMoreLiters = PriceForGasWithDiscount - (PriceForGasWithDiscount * 10/100);
            console.log(`${PriceForGasWithDiscountForMoreLiters.toFixed(2)} lv.`);              
        }
        else if(typeOfFuel === "Diesel" && amountOfFuel < 25  && discountCard === "No"){
            let PriceForGasWithDiscount = amountOfFuel * 2.33;
         
            console.log(`${PriceForGasWithDiscount.toFixed(2)} lv.`);              
        }        
    }

fuelTankPartTwo(["Gas",
    "30",
    "Yes",
    ])
fuelTankPartTwo(["Gasoline","25",
"No"
])
fuelTankPartTwo(["Diesel",
    "19",
    "No"
    ])