function birthdayParty(input){
    let rent = Number(input);
    let cake = rent * 0.20
    let drinks = cake - cake * 0.45;
    let animator = rent / 3
    console.log(cake + drinks + animator + rent);
}
birthdayParty(["3720"])