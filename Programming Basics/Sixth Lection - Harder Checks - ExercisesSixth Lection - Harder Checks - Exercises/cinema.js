function cinema(input){
    let typeOfMovie = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let total = 0;
    if(typeOfMovie === "Premiere"){
        total = rows * columns * 12.00;
    }else if(typeOfMovie === "Normal"){
        total = rows * columns * 7.50;
    }else if(typeOfMovie === "Discount"){
        total = rows * columns * 5.00;
    }
    console.log(`${total.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"])
