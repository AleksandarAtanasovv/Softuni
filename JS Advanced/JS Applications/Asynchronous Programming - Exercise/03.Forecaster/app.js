function attachEvents() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", getWeather);

  async function getWeather() {
    const location = document.getElementById("location").value;
    const responseLocations = await fetch("http://localhost:3030/jsonstore/forecaster/locations");
    const dataLocations = await responseLocations.json();

    const town = dataLocations.filter((t) => t.name == location)[0];
    document.getElementById("forecast").style.display = "block";
    try {
      const code = town.code;
      const cityCurrentDayResponse = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${code}`
      );
      const cityThreeDayResponse = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
      );

      const dataCurrentDay = await cityCurrentDayResponse.json();
      const cityThreeDayData = await cityThreeDayResponse.json();
      displayCurrentDay(dataCurrentDay);
      displayThreeDay(cityThreeDayData);
    } catch (err) {
      document.getElementById("forecast").textContent = "Error";
    }
  }

  function displayCurrentDay(data) {
    const div = document.createElement("div");
    const current = document.getElementById("current");
    div.classList.add("forecasts");
    let icon = getIcon(data.forecast.condition);
    const degreesIcon = "&#176;";

    div.innerHTML = `
    <span class="condition symbol">${icon}</span>
    <span class="condition">
    <span class="forecast-data">${data.name}</span>
    <span class="forecast-data">${data.forecast.low}${degreesIcon}/${data.forecast.high}${degreesIcon}</span>
    <span class="forecast-data">${data.forecast.condition}</span>
    </span>
    `;
    current.appendChild(div);
  }
  function displayThreeDay(data) {
    const upcoming = document.getElementById("upcoming");
    data.forecast.forEach((day) => {
      const icon = getIcon(day.condition);
      const degreesIcon = "&#176;";
      const div = document.createElement("div");
      div.classList.add("forecast-info");

      div.innerHTML = `
      <span class="upcoming">
      <span class="symbol">${icon}</span>
    <span class="forecast-data">${day.low}${degreesIcon}/${day.high}${degreesIcon}</span>
    <span class="forecast-data">${day.condition}</span>
    </span>
    `;
      upcoming.appendChild(div);
    });
  }
  function getIcon(condition) {
    switch (condition) {
      case "Sunny":
        return "&#x2600;";
      case "Partly sunny":
        return "&#x26C5;";
      case "Overcast":
        return "&#x2601;";
      case "Rain":
        return "&#x2614;";
    }
  }
}

attachEvents();
