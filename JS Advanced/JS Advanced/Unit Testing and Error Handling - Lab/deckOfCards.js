function deckOfCards(deckArr) {
  const deck = [];
  function playingCards(face, suit) {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };
    if (!faces.includes(face)) {
      throw Error("Incorrect face");
    }
    if (suit in suits === false) {
      throw Error("Incorrect suit");
    }
    return {
      toString() {
        return face + suits[suit];
      },
    };
  }
  deckArr.forEach((card) => {
    const face = card.split("").slice(0, -1).join("");
    const suit = card[card.length - 1];

    try {
      deck.push(playingCards(face, suit).toString());
    } catch (err) {
      console.log(`Invalid card: ${card}`);
    }
  });
  console.log(deck.join(" "));
}
console.log(deckOfCards(["AS", "10D", "KH", "2C"]));
