function areaOfFigures(input){
    let figure = input[0];

    if(figure === "square"){
        let lengthOfSide = Number(input[1]);
        let sum = lengthOfSide * lengthOfSide;
        console.log(sum.toFixed(3));
    }
    else if(figure === "rectangle"){
        let lengthOfSideFirst = Number(input[1]);
        let lengthOfSideSecond = Number(input[2]);

        let sum = lengthOfSideFirst * lengthOfSideSecond;

        console.log(sum.toFixed(3));
    }
    else if(figure === "circle"){
        let r = Number(input[1]);

        let radiusSum = r* r * Math.PI;

        console.log(radiusSum.toFixed(3));
    }
    else if(figure === "triangle"){
        let lengthOfSideWall = Number(input[1]);
        let lengthOfSideWallToIt = Number(input[2]);

        let sumBefore = (lengthOfSideWall * lengthOfSideWallToIt) /2;



       

        console.log(sumBefore.toFixed(3));
    }
}
areaOfFigures(["circle","6"])


