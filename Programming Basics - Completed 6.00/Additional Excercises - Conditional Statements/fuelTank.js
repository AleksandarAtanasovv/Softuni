function fuelTank(input){
    let fuelType = input[0];
    let litersOfFuel = Number(input[1]);

    if(litersOfFuel >= 25){
        
        if(litersOfFuel >= 25 && fuelType === "Gasoline"){
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else if(litersOfFuel >= 25 && fuelType === "Diesel"){
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else if(litersOfFuel >= 25 && fuelType === "Gas"){
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }
        else {
            console.log("Invalid fuel!");
        }
    }
    else if(litersOfFuel < 25){
        
        if(litersOfFuel < 25 && fuelType === "Gasoline"){
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
        else if(litersOfFuel < 25 && fuelType === "Diesel"){
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
        else if(litersOfFuel < 25 && fuelType === "Gas"){
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
        else {
            console.log("Invalid fuel!");
        }
    }
    
    
    
}
fuelTank(["Kerosene",
    "200"
    ])