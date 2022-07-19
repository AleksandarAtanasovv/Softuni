function oldBooks(input){
    let favBook = input[0];
    let index = 1;
    let command = input[index];
    let isFound = false;
    let amountOfBooksChecked = 0;
    while(command !== "No More Books"){
        command = input[index]
        index++
        amountOfBooksChecked ++;

        if(command === favBook){
            isFound = true;
            break;
        }
    }
    if(isFound){
        console.log(`You checked ${amountOfBooksChecked - 1} books and found it.`);
    }else{
        console.log('The book you search is not here!');
        console.log(`You checked ${amountOfBooksChecked - 1} books.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

