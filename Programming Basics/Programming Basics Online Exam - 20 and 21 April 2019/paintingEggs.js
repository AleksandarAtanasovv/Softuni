function paintingEggs(input){
    let size = input[0];
    let color = input[1];
    let amount = Number(input[2]);
    let currentMoney = 0;
    let totalMoney = 0;
    switch(size){
        case "Large":
            if(color === 'Red'){
                currentMoney += 16
            }else if(color ==='Green'){
                currentMoney += 12
            }else{
                currentMoney += 9
            }
        break;
        case "Medium":
            if(color === 'Red'){
                currentMoney += 13
            }else if(color ==='Green'){
                currentMoney += 9
            }else{
                currentMoney += 7
            }
        break;
        case "Small":
            if(color === 'Red'){
                currentMoney += 9
            }else if(color ==='Green'){
                currentMoney += 8
            }else{
                currentMoney += 5
            }
        break;
    }
    currentMoney = currentMoney * amount;
    totalMoney = currentMoney - (currentMoney * 35/100)

    console.log(`${totalMoney.toFixed(2)} leva.`);
}
paintingEggs(["Large",
"Red",
"7"])


