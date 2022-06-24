function housePainting(input){
    let houseHeight = Number(input[0]);
    let lengthOfSideWall = Number(input[1]);
    let heightOfTheTriangleWallRoof = Number(input[2]);

    let sideWallArea = houseHeight * lengthOfSideWall;
    let windowSize = 1.5 * 1.5;
    let twoSides = 2 * sideWallArea - 2 * windowSize;
    let backWall = houseHeight * houseHeight;
    let totalAreaHouse = 2 * backWall;
    let totalAreaFinished = twoSides + totalAreaHouse  - 1.2*2;
    let greenPaintNeeded = totalAreaFinished / 3.4

    let roof = 2 * (houseHeight *lengthOfSideWall)
    let roofTriangles = 2 * (houseHeight * heightOfTheTriangleWallRoof / 2)
    totalAreaRoof = roof + roofTriangles;
    let totalPaintNeededForTheRoof = totalAreaRoof / 4.3;
    console.log(greenPaintNeeded.toFixed(2));
    console.log(totalPaintNeededForTheRoof.toFixed(2));
    


}
housePainting(["10.25",
    "15.45",
    "8.88" 
])