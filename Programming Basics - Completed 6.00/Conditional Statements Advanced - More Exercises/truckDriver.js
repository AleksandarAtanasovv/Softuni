function truckDriver(input){
    let season = input[0];
    let kilometresPerMonth = Number(input[1]);
    let payment = 0;
    switch(season){
        case "Spring":
        case "Autumn":
            if(kilometresPerMonth <= 5000){
                payment = kilometresPerMonth * 0.75
            }else if(kilometresPerMonth > 5000 && kilometresPerMonth <= 10000){
                payment = kilometresPerMonth * 0.95
            }else if(kilometresPerMonth > 10000 && kilometresPerMonth <= 20000){
                payment = kilometresPerMonth * 1.45
            }
            break;
        case "Summer":
            if(kilometresPerMonth <= 5000){
                payment = kilometresPerMonth * 0.90
            }else if(kilometresPerMonth > 5000 && kilometresPerMonth <= 10000){
                payment = kilometresPerMonth * 1.10
            }else if(kilometresPerMonth > 10000 && kilometresPerMonth <= 20000){
                payment = kilometresPerMonth * 1.45
            }
            break;
        case "Winter":
            if(kilometresPerMonth <= 5000){
                payment = kilometresPerMonth * 1.05
            }else if(kilometresPerMonth > 5000 && kilometresPerMonth <= 10000){
                payment = kilometresPerMonth * 1.25
            }else if(kilometresPerMonth > 10000 && kilometresPerMonth <= 20000){
                payment = kilometresPerMonth * 1.45
            }
            break;
    }
    payment = payment * 4;
    payment = payment -(payment * 10/100);
    console.log(payment.toFixed(2));
}
truckDriver([
    "Spring",
    "1600"
])