function addressBook(arr) {
  const adressBook = {};
  for (const line of arr) {
    let [name, adress] = line.split(":");
    adressBook[name] = adress;
  }
  const sortedAdressBook = Object.entries(adressBook).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const entry of sortedAdressBook) {
    let [name, adress] = entry;
    console.log(`${name} -> ${adress}`);
  }
}
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
