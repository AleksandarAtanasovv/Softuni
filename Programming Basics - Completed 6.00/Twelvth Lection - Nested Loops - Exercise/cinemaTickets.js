function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let standart = 0;
  let kid = 0;
  let student = 0;
  let allTickets = 0;
  while (command !== "Finish") {
    let movieName = command;
    let amountOfSpaces = Number(input[index]);
    index++;
    let totalTickets = 0;

    let tempCommand = input[index];
    index++;
    while (tempCommand !== "End") {
      let ticket = tempCommand;
      totalTickets++;
      switch (ticket) {
        case "standard":
          standart++;
          break;
        case "kid":
          kid++;
          break;
        case "student":
          student++;
          break;
      }
      if (amountOfSpaces == totalTickets) {
        break;
      }
      tempCommand = input[index];
      index++;
    }
    allTickets += totalTickets;
    let teatherFill = (totalTickets / amountOfSpaces) * 100;

    console.log(`${movieName} - ${teatherFill.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }
  let studentp = (student / allTickets) * 100;
  let standardp = (standart / allTickets) * 100;
  let kidp = (kid / allTickets) * 100;
  console.log(`Total tickets: ${allTickets}`);

  console.log(`${studentp.toFixed(2)}% student tickets.`);
  console.log(`${standardp.toFixed(2)}% standard tickets.`);
  console.log(`${kidp.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
