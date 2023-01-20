function extract(content) {
  const element = document.getElementById(content).textContent;
  const res = element.trim().match(/(?!\()[\w*\s*\d*]*(?=\))/g);
  return res.filter((x) => x !== "").join("; ");
}
