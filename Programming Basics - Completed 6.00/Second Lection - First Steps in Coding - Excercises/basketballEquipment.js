function basketballEquipment (input){
    let yearlyCost = Number(input[0])

    let basketBallShoes = yearlyCost - (yearlyCost * 40 / 100);
    let basketBallClothes = basketBallShoes - (basketBallShoes * 20 / 100);
    let basketBallBall =  basketBallClothes / 4 ;
    let basketBallAccessories = basketBallBall / 5;

    let totalCostOfTheEquipment = yearlyCost + basketBallShoes + basketBallClothes + basketBallBall + basketBallAccessories;

    console.log(totalCostOfTheEquipment);
}
basketballEquipment(["365"]);
basketballEquipment(["550"])