function foodDelivery (input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    let totalPriceForChickenMenus = chickenMenus * 10.35;
    let totalPriceForFishMenus = fishMenus * 12.40;
    let totalPriceForVeganMenus = veganMenus * 8.15;

    let totalPriceForAllTheMenus = totalPriceForChickenMenus + totalPriceForFishMenus + totalPriceForVeganMenus;

    let dessert = totalPriceForAllTheMenus * 20 / 100;

    let delivery = 2.50;

    let totalOrderAmount = totalPriceForAllTheMenus + dessert + delivery;

    console.log(totalOrderAmount);
}
foodDelivery(["2 ",
"4 ",
"3 "]
);
foodDelivery(["9 ",
"2 ",
"6 "]
)