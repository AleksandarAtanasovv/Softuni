function celsiusToFahrenheit(input){
    let C = Number(input[0]);

    let F = C * 1.8 + 32
    console.log(F.toFixed(2));

}
celsiusToFahrenheit(["25"])