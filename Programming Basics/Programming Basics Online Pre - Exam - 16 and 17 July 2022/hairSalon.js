function hairSalon(input){
    let index = 0; 
    let amountForTheDay = Number(input[index]);
    index++;
    let command = input[index];
    index++
    let total = 0;
    while(command !== "closed"){
        let product = command;
        let gender = input[index]
        index++
        
        
        
        if(product === 'haircut'){
            if(gender === 'ladies'){
                total += 20
            }else if(gender === 'mens'){
                total += 15
            }else if(gender === 'kids'){
                total += 10;
            }
        }else if(product === 'color'){
            if(gender === 'touch up'){
                total += 20;
            }else{
                total += 30
            }
        }
        if(total >= amountForTheDay){
            break;
        }
        command = input[index];
        index++
    }
    let diff = Math.abs(total - amountForTheDay)
    if(total >= amountForTheDay){
        console.log(`You have reached your target for the day!`);
    }else{
        console.log(`Target not reached! You need ${diff}lv. more.`);
    }

    console.log(`Earned money: ${total}lv.`);
}
hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])

