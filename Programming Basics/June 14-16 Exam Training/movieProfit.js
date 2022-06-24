function movieProfit(input){
    let movieName = (input[0]);
    let dayCount = Number(input[1]);
    let ticketCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let movieTheatherProcentage = Number(input[4]);
    
    let ticketPriceForADay = ticketCount * ticketPrice;


    let incomeForTheWholePeriod = dayCount * ticketPriceForADay;
    let cutForTheMovieTheather = incomeForTheWholePeriod * movieTheatherProcentage / 100;

    let incomeFromTheMovie =  incomeForTheWholePeriod - cutForTheMovieTheather;



    console.log(`The profit from the movie ${movieName} is ${incomeFromTheMovie.toFixed(2)} lv.`);
}
movieProfit(["The Programmer",
"20",
"500",
"7.50",
"7"]);
movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"]);
movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"])
