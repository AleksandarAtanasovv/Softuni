function computerFirm(input){
    let amountOfComputers = Number(input[0]);
    let ratings = 0;
    let possibleSales = 0;
    let lastChar = 0;
    let char = 0;
    let total = 0;
    let avg = 0;
    for(let i =1; i <= amountOfComputers; i++){
        ratings = Number(input[i]);
        lastChar = Math.floor(ratings / 10);
        possibleSales = lastChar
        char = ratings % 10;
        avg += char
        if(char === 2){
            possibleSales = 0
        }else if(char == 3){
            possibleSales = possibleSales / 2;
        }else if(char == 4){
            possibleSales = (possibleSales * 70 / 100) 
        }
        else if(char == 5){
            possibleSales = (possibleSales * 85 / 100) 
        }
        total += possibleSales
        
    }
    avg = avg / amountOfComputers
    console.log(total.toFixed(2));
    console.log(avg.toFixed(2));
    
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])

