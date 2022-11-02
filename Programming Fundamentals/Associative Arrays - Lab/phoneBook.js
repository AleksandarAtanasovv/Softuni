function phoneBook(arr) {
  const phoneBook = {};
  for (const line of arr) {
    let [name, number] = line.split(" ");
    phoneBook[name] = number;
  }
  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}
phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
