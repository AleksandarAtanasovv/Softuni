function transportPrice(input){
    let kilometres = Number(input[0]);
    let dayOrNight = input[1];

    if(kilometres < 20 && dayOrNight === "day"){
        let taxiPrice = 0.70 + kilometres * 0.79
        console.log(taxiPrice.toFixed(2));
    }
    else if(kilometres < 20 && dayOrNight === "night"){
        let taxiPrice = 0.70 + kilometres * 0.90;
        console.log(taxiPrice.toFixed(2));
    }
    else if(kilometres >= 20 && kilometres < 100){
        busPrice = kilometres * 0.09
        console.log(busPrice.toFixed(2));
    }
    else if(kilometres >= 100){
        trainPrice = kilometres * 0.06;
        console.log(trainPrice.toFixed(2));
    }
}
transportPrice(["5",
    "day"
    ])
transportPrice(["7",
    "night",
    ])
transportPrice(["25",
    "day"
    ])
transportPrice(["180",
"night"])