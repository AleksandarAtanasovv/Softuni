function solve() {
  const textarea = document.querySelector("#exercise>textarea");
  const output = document.getElementById("output");
  const res = textarea.value.split(".").filter((x) => x.length > 0);

  for (let i = 0; i < res.length; i += 3) {
    let arr = [];
    for (let j = 0; j < 3; j++) {
      if (res[i + j]) {
        arr.push(res[i + j]);
      }
    }
    const p = arr.join(". ") + ".";
    output.innerHTML += `<p>${p}</p>`;
  }
}
