function fromJSONToHTMLTable(json) {
  const data = JSON.parse(json);
  const result = [];
  const props = Object.keys(data[0]);
  result.push("<table>");
  result.push(`   <tr>${props.map((p) => `<th>${escapeHtml(p)}</th>`).join("")}</tr>`);
  data.forEach((entry) => {
    result.push(`   <tr>${props.map((e) => `<td>${escapeHtml(entry[e])}</td>`).join("")}</tr>`);
  });
  result.push("</table>");
  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  return result.join("\n");
}
console.log(
  fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)
);
{
  /* <tr><th>Name</th><th>Score</th></tr> */
}
