function employees(list) {
  let currentPersonObj = {};
  for (const name of list) {
    currentPersonObj.name = name;
    currentPersonObj.personalNumber = name.length;
    console.log(`Name: ${currentPersonObj.name} -- Personal Number: ${currentPersonObj.personalNumber}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
