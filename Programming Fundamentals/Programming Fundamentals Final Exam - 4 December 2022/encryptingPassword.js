function encryptingPassword(input) {
  const pattern =
    /(?<start>[a-zA-Z0-9/\W/\D]+)>(?<nums>\d+)\|(?<lowerCase>[a-z]+)\|(?<upperCase>[A-Z]+)\|(?<symbols>[a-zA-Z0-9/\W/\D][^<>]+)<(?<end>[a-zA-Z0-9/\W/\D]+)/g;
  let resString = "";
  let amount = Number(input.shift());
  input.forEach((element) => {
    let element2 = [...element.matchAll(pattern)];
    if (
      element.match(pattern) &&
      element2[0].groups.start.length === element2[0].groups.end.length &&
      element2[0].groups.start === element2[0].groups.end
    ) {
      resString =
        element2[0].groups.nums +
        element2[0].groups.lowerCase +
        element2[0].groups.upperCase +
        element2[0].groups.symbols;
      console.log(`Password: ${resString}`);
    } else {
      console.log("Try another password!");
    }
  });
}
encryptingPassword([
  "5",
  "aa>111|mqu|BAU|m<u<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
