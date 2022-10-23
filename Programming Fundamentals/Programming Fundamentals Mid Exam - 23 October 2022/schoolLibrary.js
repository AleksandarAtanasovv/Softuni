function schoolLibrary(arr) {
  let library = arr.shift().split("&");
  let line = arr.shift();
  while (line !== "Done") {
    let [command, bookNameOrIndex, book2] = line.split(" | ");
    switch (command) {
      case "Add Book":
        if (library.indexOf(bookNameOrIndex) < 0) {
          library.unshift(bookNameOrIndex);
        }
        break;
      case "Take Book":
        if (library.indexOf(bookNameOrIndex) >= 0) {
          let index = library.indexOf(bookNameOrIndex);
          library.splice(index, 1);
        }
        break;
      case "Swap Books":
        let indexOfBook1 = library.indexOf(bookNameOrIndex);
        let indexOfBook2 = library.indexOf(book2);
        if (library[indexOfBook1] && library[indexOfBook2]) {
          library.splice(indexOfBook1, 1, book2);
          library.splice(indexOfBook2, 1, bookNameOrIndex);
        }
        break;
      case "Insert Book":
        if (library.indexOf(bookNameOrIndex) < 0) {
          library.push(bookNameOrIndex);
        }
        break;
      case "Check Book":
        if (bookNameOrIndex < library.length && bookNameOrIndex >= 0) {
          console.log(library[bookNameOrIndex]);
        }
        break;
    }
    line = arr.shift();
  }
  console.log(library.join(", "));
}
schoolLibrary([
  "War and Peace&Hamlet&Ulysses&Madame Bovary",
  "Check Book | 2",
  "Swap Books | Don Quixote | Ulysses",
  "Done",
]);
