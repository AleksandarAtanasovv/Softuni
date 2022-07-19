function cleverLily(input){
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let priceOfToy = Number(input[2]);


    let firstGift = 10;
    let moneyCount = 0;
    let toys = 0;
    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
           moneyCount += firstGift;
           moneyCount--;
           firstGift += 10;
            
        }else{
            toys ++;
        }
    }
    let totalMoney = (toys * priceOfToy) + moneyCount;
    let diff = Math.abs(totalMoney - washerPrice);
    if(totalMoney >= washerPrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])
