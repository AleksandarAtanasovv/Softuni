function fishLand(input){
    let skumriaFishPrice = Number(input[0])
    let cacaFish = Number(input[1])
    let palamudFish = Number(input[2])
    let safridFish = Number(input[3])
    let oysters = Number(input[4])


    let priceForPalamudFish = skumriaFishPrice+ (skumriaFishPrice * 60/100)
    let priceForPalamudFishTotal = priceForPalamudFish * palamudFish;

    let priceForSafridFish = cacaFish + (cacaFish * 80/100);
    let priceForSafridFishTotal = priceForSafridFish * safridFish;

    let priceForOysters = oysters * 7.50
 

    let total = priceForPalamudFishTotal + priceForSafridFishTotal + priceForOysters;
    console.log(total.toFixed(2));
    
}
fishLand(["5.55",
    "3.57",
    "4.3",
    "3.6",
    "7"
    ])