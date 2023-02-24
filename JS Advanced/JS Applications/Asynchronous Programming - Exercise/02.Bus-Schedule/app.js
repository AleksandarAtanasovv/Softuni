function solve() {
  let currentStop = "depot";
  let nextStop = "depot";
  function depart() {
    const url = "http://localhost:3030/jsonstore/bus/schedule/";
    fetch(`${url}${currentStop}`)
      .then((res) => res.json())
      .then((data) => displayContent(data));
  }
  function displayContent(data) {
    currentStop = data.next;
    nextStop = data.name;
    document.querySelector(".info").textContent = `Next stop ${data.name}`;
    document.getElementById("depart").disabled = true;
    document.getElementById("arrive").disabled = false;
  }
  function arrive() {
    document.querySelector(".info").textContent = `Arriving at ${nextStop}`;
    document.getElementById("depart").disabled = false;
    document.getElementById("arrive").disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
