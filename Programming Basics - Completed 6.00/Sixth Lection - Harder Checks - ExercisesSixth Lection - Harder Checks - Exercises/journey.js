function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let paidAmount = 0;
    if(budget <= 100){
        destination = 'Bulgaria';
    }else if(budget <= 1000){
        destination = 'Balkans'
    }else if (budget > 1000){
        destination = 'Europe'
    }

    switch(season){
        case "summer":
            if(destination === 'Bulgaria'){
                paidAmount = budget * 0.70;
                paidAmount = Math.abs(budget - paidAmount);
            }else if(destination ==='Balkans'){
                paidAmount = budget - (budget * 40 /100);
                paidAmount = Math.abs(budget - paidAmount);
            }else if(destination === 'Europe'){
                paidAmount = budget - (budget * 90 /100);
                paidAmount = Math.abs(budget - paidAmount);
            }
        break;
        case "winter":
            if(destination === 'Bulgaria'){
                paidAmount = budget - (budget * 70 /100);
                paidAmount = Math.abs(budget - paidAmount);
            }else if(destination ==='Balkans'){
                paidAmount = budget - (budget * 80 /100);
                paidAmount = Math.abs(budget - paidAmount);
            }else if(destination === 'Europe'){
                paidAmount = budget - (budget * 90 /100);
                paidAmount = Math.abs(budget - paidAmount);
            }
    }
    let place;
    if(season === "summer" && destination !== 'Europe'){
        place = "Camp"
    }else if(season ==="winter" && destination !== 'Europe'){
        place = "Hotel"
    }else if(destination === 'Europe'){
        place = "Hotel"
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${paidAmount.toFixed(2)}`);
}
journey(["1500", "summer"])