function easterLunch(input){
    let easterBread = Number(input[0]);
    let eggs = Number(input[1]);
    let cookies = Number(input[2]);
    let totalPrice = 0;


    let easterBreadTotal = easterBread * 3.20;
    let eggsTotal = eggs * 4.35;
    let totalCookies = cookies * 5.40;
    let paintTotal = (eggs * 12) * 0.15
    totalPrice =  easterBreadTotal + eggsTotal + totalCookies + paintTotal;
    console.log(totalPrice.toFixed(2));

}
easterLunch(["3",
"2",
"3"])
