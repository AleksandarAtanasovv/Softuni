function generateReport() {
  const data = Array.from(document.querySelectorAll("tbody tr"));
  const output = document.querySelector("#output");
  const res = [];
  const checks = Array.from(document.querySelectorAll("thead tr th input"));
  data.forEach((element) => {
    const current = {};
    Array.from(element.querySelectorAll("td")).forEach((el, i) => {
      if (checks[i].checked) {
        current[checks[i].name] = el.textContent;
      }
    });
    res.push(current);
  });
  output.value = JSON.stringify(res);
}
