function depositCalculator(input){
    let deposited = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearlyInterestRate = Number(input[2]);
    
    let interestRate = deposited * (yearlyInterestRate / 100);
    let monthlyInterestRate = interestRate / 12;
    let total = deposited + depositPeriod * monthlyInterestRate; 
    console.log(total);
 
}
depositCalculator(["200 ",
"3 ",
"5.7 "]
);
depositCalculator(["2350",
"6 ",
"7 "])
