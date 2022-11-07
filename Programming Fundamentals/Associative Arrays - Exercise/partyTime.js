function partyTime(arr) {
  const normalGuests = [];
  const vipGuests = [];

  let guest = arr.shift();
  while (guest !== "PARTY") {
    if (!isNaN(guest[0])) {
      vipGuests.push(guest);
    } else {
      normalGuests.push(guest);
    }
    guest = arr.shift();
  }
  // console.log(vipGuests);
  const guests = [];
  let allGuests = vipGuests.concat(normalGuests);
  for (const el of arr) {
    allGuests.splice(allGuests.indexOf(el), 1);
  }
  console.log(allGuests.length);
  for (const el of allGuests) {
    console.log(el);
  }
}
partyTime(["7IK9Yo0h", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc", "tSzE5t0p", "PARTY", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc"]);
