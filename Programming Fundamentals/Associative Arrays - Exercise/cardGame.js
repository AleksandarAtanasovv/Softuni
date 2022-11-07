function cardGame(arr) {
  const type = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  const power = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  const people = {};
  const final = {};
  for (const el of arr) {
    let [name, powerType] = el.split(": ");
    let cards = powerType.split(", ");
    if (!people.hasOwnProperty(name)) {
      people[name] = cards.toString();
    } else {
      let currentValue = `${cards},${people[name]}`;
      people[name] = currentValue;
    }
  }
  for (const el in people) {
    let sum = 0;
    let card = people[el].split(",");
    let name = el;
    let set = new Set(card);
    let cardArray = Array.from(set);
    for (const card of cardArray) {
      if (card.length === 2) {
        let [typeCard, powerCard] = card.split("");
        sum += Number(type[typeCard]) * Number(power[powerCard]);
      } else {
        let [typeCard, other, powerCard] = card.split("");
        typeCard = typeCard + other;
        sum += Number(type[typeCard]) * Number(power[powerCard]);
      }
    }
    if (!final.hasOwnProperty(name)) {
      final[name] = sum;
    } else {
      let currentSum = final[name] + sum;
      final[name] = currentSum;
    }
  }
  for (const el in final) {
    console.log(`${el}: ${final[el]}`);
  }
}
cardGame(["Peter: 2C, 4H, 9H, AS, QS", "Tomas: 3H, 10S, JC, KD, 5S, 10S", "Andrea: QH, QC, QS, QD", "Tomas: 6H, 7S, KC, KD, 5S, 10C", "Andrea: QH, QC, JS, JD, JC", "Peter: JD, JD, JD, JD, JD, JD"]);
