function tickets(arr, criteria) {
  const resultArr = [];
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  arr.forEach((el) => {
    let [name, price, status] = el.split("|");
    price = Number(price);
    resultArr.push(new Ticket(name, price, status));
  });
  resultArr.sort((a, b) => {
    if (criteria === "destination") {
      return a.destination.localeCompare(b.destination);
    }
    if (criteria === "price") {
      return a.price - b.price;
    }
    if (criteria === "status") {
      return a.status.localeCompare(b.status);
    }
  });
  return resultArr;
}
console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
