function getInfo() {
  const stopID = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busses = document.getElementById("buses");
  fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopID}`)
    .then((res) => res.json())
    .then((data) => displayContent(data))
    .catch((stopName.textContent = "Error"));

  function displayContent(data) {
    stopName.textContent = data.name;
    for (const key in data.buses) {
      const li = document.createElement("li");
      li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
      busses.append(li);
    }
  }
}
