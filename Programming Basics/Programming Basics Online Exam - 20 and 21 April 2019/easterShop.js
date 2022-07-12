function easterShop(input){
    let index = 0;
    let amountOfEggs = Number(input[index]);
    index++
    let command = input[index];
    index++;
    let ammountOfEggsSold = 0;
    let isMore = false;
    while(command !=='Close'){
        let buyOrFill = command;
        let amount = Number(input[index]);
        index++;

        if(buyOrFill === 'Buy'){
            if(amount > amountOfEggs){
                isMore = true;
                break;
            }if(amount <= amountOfEggs){
                amountOfEggs -= amount;
                ammountOfEggsSold += amount
            }
        }else{
            amountOfEggs += amount;
        }




        command = input[index];
        index++
    }
if(isMore){
    console.log(`Not enough eggs in store!`);
    console.log(`You can buy only ${amountOfEggs}.`);
}else{
    console.log('Store is closed!');
    console.log(`${ammountOfEggsSold} eggs sold.`);
}

}
easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])

