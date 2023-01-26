function attachEventsListeners() {
  const buttons = Array.from(document.querySelectorAll("input[type='button']"));
  buttons.forEach((button) => {
    button.addEventListener("click", convert);
  });
  function convert(e) {
    const parent = e.target.parentNode;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (parent.textContent.includes("Days")) {
      days = Number(parent.querySelector("#days").value);
      hours = days * 24;
      minutes = hours * 60;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Hours")) {
      hours = Number(parent.querySelector("#hours").value);
      days = hours / 24;
      minutes = hours * 60;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Minutes")) {
      minutes = Number(parent.querySelector("#minutes").value);
      hours = minutes / 60;
      days = hours / 24;
      seconds = minutes * 60;
    } else if (parent.textContent.includes("Seconds")) {
      seconds = Number(parent.querySelector("#seconds").value);
      minutes = seconds / 60;
      hours = minutes / 60;
      days = hours / 24;
    }
    console.log(seconds);
    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
  }
}
