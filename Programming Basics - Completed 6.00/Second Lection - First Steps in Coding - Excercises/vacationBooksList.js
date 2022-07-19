function vacationBooksList (input){
    let pages = Number(input[0]);
    let pagesReadForOneHour = Number(input[1]);
    let daysForReading = Number(input[2]);

    let totalTimeForReading = pages / pagesReadForOneHour;

    let hoursNeededPerDay = totalTimeForReading / daysForReading;
    console.log(hoursNeededPerDay);
}
vacationBooksList(["212 ",
"20 ",
"2 "]
);
vacationBooksList(["432 ",
"15 ",
"4 "]
)