function changeBureau(input){
    let amountOfBitCoins = Number(input[0])
    let amountOfChineseUans = Number(input[1]);
    let comission = Number(input[2]);

    let dollars = amountOfChineseUans * 0.15
    let totalSumLeva = (amountOfBitCoins * 1168) + (dollars * 1.76)

    let totalSumEur = totalSumLeva / 1.95
    let commision = totalSumEur * comission / 100
    let total = totalSumEur - commision
    console.log(total.toFixed(2));
}
changeBureau(["1",
"5",
"5"])
