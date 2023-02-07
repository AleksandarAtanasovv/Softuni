function Person(firstName, lastName) {
  const obj = { firstName, lastName };
  Object.defineProperty(obj, "fullName", {
    enumerable: true,
    configurable: true,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(val) {
      [fName, lName] = val.split(" ");
      if (fName && lName) {
        obj.firstName = fName;
        obj.lastName = lName;
      }
    },
  });
  return obj;
}
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
