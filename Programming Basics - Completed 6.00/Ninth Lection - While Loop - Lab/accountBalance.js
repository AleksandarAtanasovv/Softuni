function accountBalance(input){
    let index = 0;
    let money = input[index];
    let total = 0;

    while(true){
        money = input[index]
        if(money === 'NoMoreMoney'){
            break;
        }if(money > 0){
            money = Number(input[index]);
            index ++;
            total += money
            console.log(`Increase: ${money.toFixed(2)}`)
        }
        if(money < 0){
            console.log('Invalid operation!');
            break;
        }
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])
