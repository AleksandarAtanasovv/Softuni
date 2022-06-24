function zooFood(input){
    let dogFood = input[0] * 2.5;
    let catFood = input[1] * 4
    let total = dogFood + catFood;
    console.log(`${total} lv.`); 
}
zooFood(["5","4"])