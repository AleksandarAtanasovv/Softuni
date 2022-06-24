function moviePremiere(input){
    let movie = input[0];
    let moviePackage = input[1];
    let amountOfTickets = input[2];

    if(moviePackage == "Drink" && movie == "John Wick"){
        let ticketPrice = 12 * amountOfTickets;
        console.log(`Your bill is ${ticketPrice.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Popcorn" && movie == "John Wick"){
        let ticketPrice = 15 * amountOfTickets;
        console.log(`Your bill is ${ticketPrice.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Menu" && movie == "John Wick"){
        let ticketPrice = 19 * amountOfTickets;
        console.log(`Your bill is ${ticketPrice.toFixed(2)} leva.`);
    }
    
    if(moviePackage == "Drink" && movie =="Star Wars" && amountOfTickets >= 4){
        let ticketPrice = 18 * amountOfTickets;
        let discount = ticketPrice * 30 / 100;

        let total = ticketPrice - discount;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Popcorn" && movie == "Star Wars" && amountOfTickets >= 4){
        let ticketPrice = 25 * amountOfTickets;
        let discount = ticketPrice * 30 / 100;

        let total = ticketPrice - discount;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Menu" && movie == "Star Wars" && amountOfTickets >= 4){
        let ticketPrice = 30 * amountOfTickets;
        let discount = ticketPrice * 30 / 100;

        let total = ticketPrice - discount;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Drink" && movie =="Star Wars" && amountOfTickets < 4 ){
        let ticketPrice = 18 * amountOfTickets;
      

        let total = ticketPrice;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Popcorn" && movie =="Star Wars" && amountOfTickets < 4 ){
        let ticketPrice = 25 * amountOfTickets;
      

        let total = ticketPrice;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Menu" && movie =="Star Wars" && amountOfTickets < 4 ){
        let ticketPrice = 30 * amountOfTickets;
      

        let total = ticketPrice;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }





    //Jumanji
    if(moviePackage == "Drink" && movie =="Jumanji" && amountOfTickets == 2){
        let ticketPrice = 9 * amountOfTickets;
        let discount = ticketPrice * 15 / 100;

        let total = ticketPrice - discount;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Popcorn" && movie == "Jumanji" && amountOfTickets == 2){
        let ticketPrice = 11 * amountOfTickets;
        let discount = ticketPrice * 15 / 100;

        let total = ticketPrice - discount;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Menu" && movie == "Jumanji" && amountOfTickets == 2){
        let ticketPrice = 14 * amountOfTickets;
        let discount = ticketPrice * 15 / 100;

        let total = ticketPrice - discount;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }



    else if(moviePackage == "Drink" && movie =="Jumanji" && amountOfTickets != 2 ){
        let ticketPrice = 9 * amountOfTickets;
      

        let total = ticketPrice;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Popcorn" && movie =="Jumanji" && amountOfTickets != 2 ){
        let ticketPrice = 11 * amountOfTickets;
      

        let total = ticketPrice;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
    else if(moviePackage == "Menu" && movie =="Jumanji" && amountOfTickets != 2 ){
        let ticketPrice = 14 * amountOfTickets;
      

        let total = ticketPrice;

        console.log(`Your bill is ${total.toFixed(2)} leva.`);
    }
   
   
}
moviePremiere(["John Wick",
"Drink",
"6"]);
moviePremiere(["Star Wars",
"Popcorn",
"4"]);
moviePremiere(["Jumanji",
"Menu",
"2"])


