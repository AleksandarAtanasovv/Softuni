function solve() {
  const text = document.getElementById("text").value;
  const namingConvention = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");
  let res = null;
  const pascal = (text) => {
    return text
      .split(" ")
      .map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase())
      .join("");
  };
  const camel = (text) => {
    return pascal(text)
      .split(" ")
      .map((x) => x[0].toLowerCase() + pascal(text).slice(1))
      .join("");
  };
  if (namingConvention === "Pascal Case") {
    res = pascal(text);
  } else if (namingConvention === "Camel Case") {
    res = camel(text);
  } else {
    res = "Error!";
  }
  result.textContent = res;
}
