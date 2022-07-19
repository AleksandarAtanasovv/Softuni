function circleAreaAndPerimeter(input){
    let r = Number(input[0])
    let circleArea = Math.PI * r * r
    let circleParameter = 2 * Math.PI * r;
    console.log(circleArea.toFixed(2));
    console.log(circleParameter.toFixed(2));
}
circleAreaAndPerimeter(["4.5"])